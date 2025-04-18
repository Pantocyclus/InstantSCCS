import {
  canEquip,
  chew,
  cliExecute,
  drink,
  eat,
  Effect,
  equip,
  equippedItem,
  Familiar,
  familiarWeight,
  getCampground,
  getClanName,
  getMonsters,
  gitInfo,
  haveEffect,
  haveEquipped,
  holiday,
  inHardcore,
  Item,
  itemAmount,
  itemDrops,
  Location,
  mallPrice,
  monkeyPaw,
  mpCost,
  myBasestat,
  myBuffedstat,
  myClass,
  myLevel,
  myMaxhp,
  myMp,
  myPrimestat,
  myTurncount,
  numericModifier,
  print,
  restoreMp,
  retrieveItem,
  retrievePrice,
  Skill,
  storageAmount,
  sweetSynthesis,
  takeStorage,
  toInt,
  toItem,
  toSkill,
  toStat,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $skills,
  $slot,
  $stat,
  AutumnAton,
  Clan,
  CombatLoversLocket,
  CommunityService,
  get,
  getActiveSongs,
  getKramcoWandererChance,
  getSongCount,
  getSongLimit,
  have,
  haveInCampground,
  maxBy,
  set,
  sum,
  sumNumbers,
  uneffect,
  unequip,
  Witchess,
} from "libram";
import { printModtrace } from "libram/dist/modifier";
import { excludedFamiliars, forbiddenEffects } from "./resources";
import { chooseRift } from "libram/dist/resources/2023/ClosedCircuitPayphone";

export const startingClan = getClanName();
export const motherSlimeClan = Clan.getWhitelisted().find(
  (c) => c.name.toLowerCase() === get("instant_motherSlimeClan", "").toLowerCase(),
)
  ? get("instant_motherSlimeClan", "")
  : Clan.getWhitelisted().find((c) => c.name.toLowerCase() === "csloopers unite")
    ? "CSLoopers Unite"
    : "";
export const useParkaSpit = have($item`Fourth of May Cosplay Saber`) && have($skill`Feel Envy`);
export const useCenser = have($item`Sept-Ember Censer`) && !get("instant_saveEmbers", false);

export const testModifiers = new Map([
  [CommunityService.HP, ["Maximum HP", "Maximum HP Percent", "Muscle", "Muscle Percent"]],
  [CommunityService.Muscle, ["Muscle", "Muscle Percent"]],
  [CommunityService.Mysticality, ["Mysticality", "Mysticality Percent"]],
  [CommunityService.Moxie, ["Moxie", "Moxie Percent"]],
  [CommunityService.FamiliarWeight, ["Familiar Weight"]],
  [CommunityService.WeaponDamage, ["Weapon Damage", "Weapon Damage Percent"]],
  [CommunityService.SpellDamage, ["Spell Damage", "Spell Damage Percent"]],
  [CommunityService.Noncombat, ["Combat Rate"]],
  [CommunityService.BoozeDrop, ["Item Drop", "Booze Drop"]],
  [CommunityService.HotRes, ["Hot Resistance"]],
  [CommunityService.CoilWire, []],
]);

export function checkGithubVersion(): void {
  const gitBranches: { name: string; commit: { sha: string } }[] = JSON.parse(
    visitUrl(`https://api.github.com/repos/Pantocyclus/InstantSCCS/branches`),
  );
  const releaseBranch = gitBranches.find((branchInfo) => branchInfo.name === "release");
  const releaseSHA = releaseBranch?.commit.sha ?? "Not Found";
  const localBranch = gitInfo("Pantocyclus-instantsccs-release");
  const localSHA = localBranch.commit;
  if (releaseSHA === localSHA) {
    print("InstantSCCS is up to date!", "green");
  } else {
    print(
      `InstantSCCS is out of date - your version was last updated on ${localBranch.last_changed_date}.`,
      "red",
    );
    print("Please run 'git update'!", "red");
    print(`Local Version: ${localSHA}.`);
    print(`Release Version: ${releaseSHA}`);
  }
}

export function simpleDateDiff(t1: string, t2: string): number {
  // Returns difference in milliseconds
  const yearDiff = toInt(t2.slice(0, 4)) - toInt(t1.slice(0, 4));
  const monthDiff = 12 * yearDiff + toInt(t2.slice(4, 6)) - toInt(t1.slice(4, 6));
  const dayDiff =
    monthDiff * Math.max(toInt(t1.slice(6, 8)), toInt(t2.slice(6, 8))) +
    toInt(t2.slice(6, 8)) -
    toInt(t1.slice(6, 8));
  const hourDiff = 24 * dayDiff + toInt(t2.slice(8, 10)) - toInt(t1.slice(8, 10));
  const minDiff = 60 * hourDiff + toInt(t2.slice(10, 12)) - toInt(t1.slice(10, 12));
  const secDiff = 60 * minDiff + toInt(t2.slice(12, 14)) - toInt(t1.slice(12, 14));
  const msDiff = 1000 * secDiff + toInt(t2.slice(14)) - toInt(t1.slice(14));

  return msDiff;
}

// From phccs
export function convertMilliseconds(milliseconds: number): string {
  const seconds = milliseconds / 1000;
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = Math.round((seconds - minutes * 60) * 1000) / 1000;
  const hours = Math.floor(minutes / 60);
  const minutesLeft = Math.round(minutes - hours * 60);
  return (
    (hours !== 0 ? `${hours} hours, ` : "") +
    (minutesLeft !== 0 ? `${minutesLeft} minutes, ` : "") +
    (secondsLeft !== 0 ? `${secondsLeft} seconds` : "")
  );
}

function logRelevantStats(whichTest: CommunityService): void {
  if (
    [CommunityService.Muscle, CommunityService.Mysticality, CommunityService.Moxie].includes(
      whichTest,
    )
  ) {
    const testStat = toStat(whichTest.statName);
    const statString = testStat.toString().slice(0, 3);
    print(
      `Base ${statString}: ${myBasestat(testStat)}; Buffed ${statString}: ${myBuffedstat(testStat)}`,
    );
  } else if (whichTest === CommunityService.HP) {
    print(`Buffed Mus: ${myBuffedstat($stat`Muscle`)}; HP: ${myMaxhp()};`);
  }
}

export function logTestSetup(whichTest: CommunityService): void {
  const testTurns = whichTest.actualCost();
  printModtrace(testModifiers.get(whichTest) ?? []);
  logRelevantStats(whichTest);
  print(
    `${whichTest.statName} ${
      whichTest !== CommunityService.CoilWire ? "Test" : ""
    } takes ${testTurns} adventure${testTurns === 1 ? "" : "s"} (predicted: ${
      whichTest.prediction
    }).`,
    "blue",
  );
  set(
    `_CSTest${whichTest.id}`,
    testTurns + (have($effect`Simmering`) && !have($item`April Shower Thoughts shield`) ? 1 : 0),
  );
}

export const mainStat = myPrimestat();
export const mainStatStr = mainStat.toString();
export const mainStatMaximizerStr =
  mainStat === $stat`Muscle` ? "mus" : mainStat === $stat`Mysticality` ? "myst" : "mox";

const improvedShowerSkills = new Map([
  [$effect`Slippery as a Seal`, $skill`Seal Clubbing Frenzy`],
  [$effect`Strength of the Tortoise`, $skill`Patience of the Tortoise`],
  [$effect`Thoughtful Empathy`, $skill`Empathy of the Newt`],
  [$effect`Tubes of Universal Meat`, $skill`Manicotti Meditation`],
  [$effect`Leash of Linguini`, $skill`Leash of Linguini`],
  [$effect`Lubricating Sauce`, $skill`Sauce Contemplation`],
  [$effect`Simmering`, $skill`Simmer`],
  [$effect`Disco over Matter`, $skill`Disco Aerobics`],
  [$effect`Mariachi Moisture`, $skill`Moxie of the Mariachi`],
]);

export function tryAcquiringEffect(ef: Effect, tryRegardless = false): void {
  // Try acquiring an effect
  if (have(ef)) return;
  // If we already have the effect, we're done
  else if (forbiddenEffects.includes(ef)) return; // Don't acquire the effect if we are saving it

  if (ef === $effect`Sparkling Consciousness`) {
    // This has no ef.default for some reason
    if (holiday() === "Dependence Day" && !get("_fireworkUsed") && retrieveItem($item`sparkler`, 1))
      use($item`sparkler`, 1);
    return;
  } else if (ef === $effect`Empathy`) {
    if (!have($skill`Empathy of the Newt`)) return;
    const currentOffhandItem = equippedItem($slot`offhand`);
    if (currentOffhandItem === $item`April Shower Thoughts shield`) unequip($slot`offhand`);
    cliExecute("cast Empathy of the Newt");
    if (currentOffhandItem === $item`April Shower Thoughts shield`)
      equip($slot`offhand`, currentOffhandItem);
    return;
  }
  if (improvedShowerSkills.has(ef)) {
    const sk = improvedShowerSkills.get(ef) ?? $skill.none;
    if (!have($item`April Shower Thoughts shield`) || !have(sk)) return;
    const currentOffhandItem = equippedItem($slot`offhand`);
    if (currentOffhandItem !== $item`April Shower Thoughts shield`)
      equip($slot`offhand`, $item`April Shower Thoughts shield`);
    cliExecute(`cast ${sk}`);
    if (currentOffhandItem !== $item`April Shower Thoughts shield`)
      equip($slot`offhand`, currentOffhandItem);
    return;
  }
  if (!ef.default) return; // No way to acquire?

  if (ef === $effect`Ode to Booze`) restoreMp(60);
  if (tryRegardless || canAcquireEffect(ef)) {
    const efDefault = ef.default;
    if (efDefault.split(" ")[0] === "cargo") return; // Don't acquire effects with cargo (items are usually way more useful)

    const usePowerfulGlove =
      efDefault.includes("CHEAT CODE") &&
      have($item`Powerful Glove`) &&
      !haveEquipped($item`Powerful Glove`);
    const currentAcc = equippedItem($slot`acc3`);
    if (usePowerfulGlove) equip($slot`acc3`, $item`Powerful Glove`);
    cliExecute(efDefault.replace(/cast 1 /g, "cast "));
    if (usePowerfulGlove) equip($slot`acc3`, currentAcc);
  }
}

export function canAcquireEffect(ef: Effect): boolean {
  // This will not attempt to craft items to acquire the effect, which is the behaviour of ef.default
  // You will need to have the item beforehand for this to return true
  return ef.all
    .map((defaultAction) => {
      if (defaultAction.length === 0) return false; // This effect is not acquirable
      const splitString = defaultAction.split(" ");
      const action = splitString[0];
      const target = splitString.slice(2).join(" ");

      switch (action) {
        case "eat": // We have the food
        case "drink": // We have the booze
        case "chew": // We have the spleen item
        case "use": // We have the item
          if (ef === $effect`Sparkling Consciousness` && get("_fireworkUsed")) return false;
          return have(toItem(target));
        case "cast":
          return have(toSkill(target)) && myMp() >= mpCost(toSkill(target)); // We have the skill and can cast it
        case "cargo":
          return false; // Don't acquire effects with cargo (items are usually way more useful)
        case "synthesize":
          return false; // We currently don't support sweet synthesis
        case "barrelprayer":
          return get("barrelShrineUnlocked") && !get("_barrelPrayer");
        case "witchess":
          return Witchess.have() && get("puzzleChampBonus") >= 20 && !get("_witchessBuff");
        case "telescope":
          return get("telescopeUpgrades") > 0 && !get("telescopeLookedHigh");
        case "beach":
          return have($item`Beach Comb`); // need to check if specific beach head has been taken
        case "spacegate":
          return get("spacegateAlways") && !get("_spacegateVaccine");
        case "pillkeeper":
          return have($item`Eight Days a Week Pill Keeper`);
        case "pool":
          return get("_poolGames") < 3;
        case "swim":
          return !get("_olympicSwimmingPool");
        case "shower":
          return !get("_aprilShower");
        case "terminal":
          return (
            get("_sourceTerminalEnhanceUses") <
            1 +
              get("sourceTerminalChips")
                .split(",")
                .filter((s) => s.includes("CRAM")).length
          );
        case "daycare":
          return get("daycareOpen") && !get("_daycareSpa");
        default:
          return true; // Whatever edge cases we have not handled yet, just try to acquire it
      }
    })
    .some((b) => b);
}

export function tryAcquiringEffects(efs: Effect[], tryRegardless = false) {
  // Try acquiring songs
  tryAcquiringSongs(efs.filter((ef) => ef.song));
  // Try acquiring everything else
  efs.filter((ef) => !ef.song).forEach((ef) => tryAcquiringEffect(ef, tryRegardless));
}

function handleCustomPull(pullStr: string): boolean {
  // Pull a given item and use it if we can
  // Note: We should be running this in prepare(), which occurs after equipping
  // If the user wants to pull equips, they should pre-pull them
  const pullID = toInt(pullStr);
  const it = toItem(pullID);

  if (pullID <= 0 || it.id <= 0) return false; // Invalid item

  if (!have(it)) {
    if (
      get("_roninStoragePulls").split(",").length >= 5 || // We are out of pulls
      get("_roninStoragePulls").split(",").includes(pullStr) || // We have already pulled this item
      storageAmount(it) === 0 // We don't have this item
    )
      return false;

    if (!takeStorage(it, 1)) return false;
  }

  if (it.inebriety > 0) {
    tryAcquiringEffect($effect`Ode to Booze`);
    drink(it, 1);
    return true;
  } else if (it.fullness > 0) {
    eat(it, 1);
    return true;
  } else if (it.spleen > 0) {
    chew(it, 1);
    return true;
  } else if (it.usable) {
    use(it, 1);
    return true;
  }
  return false;
}

export function tryAcquiringOdeToBooze(): void {
  return tryAcquiringSongs($effects`Ode to Booze`);
}

export function tryAcquiringSongs(songs: Effect[]): void {
  const activeSongs = getActiveSongs();
  const hoboSongs = $effects`The Ballad of Richie Thingfinder, Benetton's Medley of Diversity, Elron's Explosive Etude, Chorale of Companionship, Prelude of Precision`;
  const acquirableSongs = songs
    .filter(
      (song) =>
        song.song && // This must be a song
        have(toSkill(song)) && // We must have the skill to cast this
        (!hoboSongs.includes(song) || // Either this isn't a hobo song...
          (myClass() === $class`Accordion Thief` && myLevel() >= 15)), // ... or we are a L15+ AT
    )
    .sort((a, b) => mpCost(toSkill(b)) - mpCost(toSkill(a))) // More expensive songs are probably better
    .slice(0, getSongLimit()); // We can only have a limited number of songs in memory
  const additionalSpaceRequired = // We need to shrug this many songs in order to get all the acquirable songs that we want
    acquirableSongs.length - activeSongs.filter((song) => acquirableSongs.includes(song)).length;

  activeSongs
    .sort((a, b) => mpCost(toSkill(a)) - mpCost(toSkill(b))) // Remove the least expensive songs first
    .forEach((song) => {
      // If we want this song, leave it
      if (acquirableSongs.includes(song)) return;
      // If we have more than enough memory space for the songs we want, also leave it
      else if (getSongLimit() - getSongCount() >= additionalSpaceRequired) return;
      // Uneffect this song
      else uneffect(song);
    });
  acquirableSongs.forEach((song) => tryAcquiringEffect(song));
}

export function handleCustomPulls(prefName: string, maximizerString = ""): boolean {
  // Takes a test preference and tries to pull all valid items
  // Returns true if we managed any successful pull
  if (
    get(prefName)
      .split(",")
      .map(handleCustomPull)
      .some((success) => success)
  ) {
    if (maximizerString.length > 0) cliExecute(`maximize ${maximizerString}`); // If we managed to pull an item, we might need to re-maximize
    return true;
  }
  return false;
}

// Adapted from goorbo
const gardens = $items`packet of pumpkin seeds, Peppermint Pip Packet, packet of dragon's teeth, packet of beer seeds, packet of winter seeds, packet of thanksgarden seeds, packet of tall grass seeds, packet of mushroom spores, packet of rock seeds`;
export function getGarden(): Item {
  return gardens.find((it) => it.name in getCampground()) || $item.none;
}

export function wishFor(ef: Effect, useGenie = true): void {
  // Tries to wish for an effect, but does not guarantee it
  if (have(ef)) return;
  if (forbiddenEffects.includes(ef)) return;
  // Genie and Monkey Paw both support wishing for effects
  // However, we can always sell Genie Wishes, so we prioritize using the paw
  // TODO: Use mafia's pref to check if we can still use the paw for wishes

  if (
    have($item`cursed monkey's paw`) &&
    !get("instant_saveMonkeysPaw", false) &&
    get("_monkeyPawWishesUsed") < 5
  ) {
    if (monkeyPaw(ef)) return;
  }

  if (have($item`pocket wish`) && !get("instant_saveGenie", false) && useGenie) {
    cliExecute(`genie effect ${ef.name}`);
  }
}

export function overleveled(): boolean {
  return myLevel() >= 20;
}
export const targetBaseMainStat = get("instant_targetBaseMainStat", 190);
export const targetBaseMainStatGap = get("instant_targetBaseMainStatGap", 15);
export function haveCBBIngredients(fullCheck: boolean, verbose = false): boolean {
  if (!have($familiar`Cookbookbat`) || myClass() !== $class`Sauceror`) return true;
  let yeast = 0,
    vegetable = 0,
    whey = 0;
  if (!get("instant_saveHoneyBun", false) && !have($effect`Motherly Loved`)) yeast += 1;
  if (!get("instant_saveRoastedVegetableStats", false) && !have($effect`Wizard Sight`))
    vegetable += 2;
  if (!get("instant_saveRichRicotta", false) && !have($effect`Rippin' Ricotta`)) whey += 2;
  if (!get("instant_savePlainCalzone", false) && !have($effect`Angering Pizza Purists`)) {
    yeast += 2;
    whey += 2;
  }
  if (fullCheck) {
    if (!get("instant_saveRicottaCasserole", false) && !have($effect`Pretty Delicious`)) {
      vegetable += 2;
      whey += 2;
    }
    if (!get("instant_saveRoastedVegetableItem", false)) {
      vegetable += 2;
    }
    if (
      !get("instant_saveWileyWheyBar", false) &&
      !have($effect`Awfully Wily`) &&
      myBasestat(mainStat) < targetBaseMainStat
    ) {
      whey += 1;
    }
  }
  if (verbose) {
    print(`Still Looking for ${Math.max(0, yeast - itemAmount($item`Yeast of Boris`))} yeasts,
    ${Math.max(0, vegetable - itemAmount($item`Vegetable of Jarlsberg`))} vegetables and
    ${Math.max(0, whey - itemAmount($item`St. Sneaky Pete's Whey`))} wheys`);
  }
  return (
    itemAmount($item`Yeast of Boris`) >= yeast &&
    itemAmount($item`Vegetable of Jarlsberg`) >= vegetable &&
    itemAmount($item`St. Sneaky Pete's Whey`) >= whey
  );
}

export const synthExpBuff =
  mainStat === $stat`Muscle`
    ? $effect`Synthesis: Movement`
    : mainStat === $stat`Mysticality`
      ? $effect`Synthesis: Learning`
      : $effect`Synthesis: Style`;

export const complexCandies = $items``.filter((candy) => candy.candyType === "complex");
export const simpleCandies = $items``.filter((candy) => candy.candyType === "simple");
const peppermintCandiesCosts = new Map<Item, number>([
  [$item`peppermint sprout`, 1],
  [$item`peppermint twist`, 1],
  [$item`peppermint patty`, 2],
  [$item`peppermint crook`, 3],
  [$item`cane-mail pants`, 10],
  [$item`peppermint rhino baby`, 11],
  [$item`cane-mail shirt`, 15],
]);
const nonPeppermintCandies = complexCandies.filter(
  (candy) => !Array.from(peppermintCandiesCosts.keys()).includes(candy),
);

function haveCandies(a: Item, b: Item): boolean {
  const candiesRequired = new Map<Item, number>();
  [a, b].forEach((candy) => {
    const currentAmount = candiesRequired.get(candy) ?? 0;
    if (nonPeppermintCandies.includes(candy)) candiesRequired.set(candy, currentAmount + 1);
    else
      candiesRequired.set(
        $item`peppermint sprout`,
        currentAmount + (peppermintCandiesCosts.get(candy) ?? Infinity),
      );
  });

  candiesRequired.forEach((amount, candy) => {
    candiesRequired.set(candy, itemAmount(candy) >= amount ? 1 : 0);
  });

  return Array.from(candiesRequired.values()).every((val) => val === 1);
}

function complexCandyPairs(rem: number): Item[][] {
  return complexCandies
    .map((a, i) => complexCandies.slice(i).map((b) => [a, b]))
    .reduce((acc, val) => acc.concat(val), [])
    .filter(([a, b]) => (toInt(a) + toInt(b)) % 5 === rem);
}

function simpleCandyPairs(rem: number): Item[][] {
  return simpleCandies
    .map((a, i) => simpleCandies.slice(i).map((b) => [a, b]))
    .reduce((acc, val) => acc.concat(val), [])
    .filter(([a, b]) => (toInt(a) + toInt(b)) % 5 === rem);
}

// function simpleComplexCandyPairs(rem: number): Item[][] {
//   return simpleCandies
//     .map((a, i) => complexCandies.slice(i).map((b) => [a, b]))
//     .reduce((acc, val) => acc.concat(val), [])
//     .filter(([a, b]) => (toInt(a) + toInt(b)) % 5 === rem);
// }

export function getValidComplexCandyPairs(rem: number): Item[][] {
  return complexCandyPairs(rem).filter(([a, b]) => haveCandies(a, b));
}

export function getValidSimpleCandyPairs(rem: number): Item[][] {
  return simpleCandyPairs(rem).filter(([a, b]) => haveCandies(a, b));
}

// export function getValidSimpleComplexCandyPairs(rem: number): Item[][] {
//   return simpleComplexCandyPairs(rem).filter(([a, b]) => haveCandies(a, b));
// }

function synthBestPair(filteredPairs: Item[][]): void {
  if (filteredPairs.length === 0) return;

  const bestPair = filteredPairs.reduce((left, right) =>
    left.map((it) => retrievePrice(it)).reduce((acc, val) => acc + val) <
    right.map((it) => retrievePrice(it)).reduce((acc, val) => acc + val)
      ? left
      : right,
  );
  if (bestPair[0] === bestPair[1]) retrieveItem(bestPair[0], 2);
  else bestPair.forEach((it) => retrieveItem(it));
  sweetSynthesis(bestPair[0], bestPair[1]);
}

export function getSynthExpBuff(): void {
  const filteredComplexCandyPairs = getValidComplexCandyPairs(
    mainStat === $stat`Muscle` ? 2 : mainStat === $stat`Mysticality` ? 3 : 4,
  );
  synthBestPair(filteredComplexCandyPairs);
}

export function getSynthColdBuff(): void {
  const filteredSimpleCandyPairs = getValidSimpleCandyPairs(1);
  synthBestPair(filteredSimpleCandyPairs);
}

const allTomes = $skills`Summon Resolutions, Summon Love Song, Summon Candy Heart, Summon Taffy, Summon BRICKOs, Summon Party Favor, Summon Dice`;
const availableTomes = allTomes.filter((tome) => have(tome));
export function chooseLibram(): Skill {
  const needLoveSong =
    have($skill`Summon Love Song`) &&
    itemAmount($item`love song of icy revenge`) +
      Math.floor(haveEffect($effect`Cold Hearted`) / 5) <
      4;
  const needCandyHeart =
    have($skill`Summon Candy Heart`) &&
    ((!have($item`green candy heart`) && !have($effect`Heart of Green`)) ||
      (!have($item`lavender candy heart`) && !have($effect`Heart of Lavender`)));

  if (
    have($skill`Summon Resolutions`) &&
    ((!have($item`resolution: be happier`) && !have($effect`Joyful Resolve`)) ||
      (!have($item`resolution: be feistier`) && !have($effect`Destructive Resolve`)))
  ) {
    return $skill`Summon Resolutions`;
  } else if (needCandyHeart) {
    return $skill`Summon Candy Heart`;
  } else if (needLoveSong) {
    return $skill`Summon Love Song`;
  } else if (
    have($skill`Summon Resolutions`) &&
    !have($item`resolution: be kinder`) &&
    !have($effect`Kindly Resolve`)
  ) {
    return $skill`Summon Resolutions`;
  }
  return availableTomes[0];
}

export function burnLibram(saveMp: number): void {
  if (availableTomes.length === 0) return;
  while (myMp() >= mpCost(chooseLibram()) + saveMp) {
    useSkill(chooseLibram());
  }
}

export function bestFamiliarEquip(checkedFamiliar: Familiar): Item {
  const validEquips = Item.all().filter(
    (it) => have(it) && numericModifier(it, "Familiar Weight") > 0 && canEquip(checkedFamiliar, it),
  );
  if (validEquips.length === 0) return $item.none;

  return validEquips.reduce((a, b) =>
    numericModifier(a, "Familiar Weight") > numericModifier(b, "Familiar Weight") ? a : b,
  );
}

export function chooseHeaviestEquippedFamiliar(checkedFamiliars?: Familiar[]): {
  familiar: Familiar;
  equip: Item;
  expectedWeight: number;
} {
  return (checkedFamiliars ?? Familiar.all())
    .filter((familiar) => have(familiar) && !excludedFamiliars.includes(familiar))
    .map((familiar) => {
      const bestEquip = bestFamiliarEquip(familiar);

      return {
        familiar,
        equip: bestEquip,
        expectedWeight: familiarWeight(familiar) + numericModifier(bestEquip, "Familiar Weight"),
      };
    })
    .reduce((a, b) => (a.expectedWeight > b.expectedWeight ? a : b));
}

export function camelFightsLeft(): number {
  // Only consider those free fights where we can use the camel
  const shadowRift = have($item`closed-circuit pay phone`)
    ? have($effect`Shadow Affinity`)
      ? haveEffect($effect`Shadow Affinity`)
      : get("_shadowAffinityToday")
        ? 11
        : 0
    : 0;
  const snojo = get("snojoAvailable") ? 10 - get("_snojoFreeFights") : 0;
  const NEP = get("neverendingPartyAlways") ? 10 - get("_neverendingPartyFreeTurns") : 0;
  const witchess = Witchess.have() ? 5 - get("_witchessFights") : 0;
  const DMT = have($familiar`Machine Elf`) ? 5 - get("_machineTunnelsAdv") : 0;
  const LOV = get("loveTunnelAvailable") && !get("_loveTunnelToday") ? 3 : 0;
  const olivers = get("ownsSpeakeasy") ? 3 - get("_speakeasyFreeFights") : 0;
  const tentacle = get("_eldritchTentacleFought") ? 1 : 0;
  const sausageGoblin = getKramcoWandererChance() >= 1.0 ? 1 : 0;
  const XRay = have($item`Lil' Doctor™ bag`) ? 3 - get("_chestXRayUsed") : 0;
  const shatteringPunch = have($skill`Shattering Punch`) ? 3 - get("_shatteringPunchUsed") : 0;
  const mobHit = have($skill`Gingerbread Mob Hit`) && !get("_gingerbreadMobHitUsed") ? 1 : 0;
  const locketedWitchess =
    !Witchess.have() &&
    CombatLoversLocket.availableLocketMonsters().includes($monster`Witchess King`) &&
    !CombatLoversLocket.monstersReminisced().includes($monster`Witchess King`) &&
    !get("instant_saveLocketWitchessKing", false)
      ? 1
      : 0;
  const backups =
    Witchess.have() || have($item`Kramco Sausage-o-Matic™`)
      ? Math.max(11 - get("instant_saveBackups", 0) - get("_backUpUses"), 0)
      : 0; // No guarantee that we hit a tentacle, so we ignore that here
  // Currently does not consider gregs (require free banish + free fight source)

  // Include guaranteed non-free fights
  const noveltySkeleton = have($item`cherry`) || CommunityService.CoilWire.isDone() ? 0 : 1;
  // Red skeleton is not guaranteed since we can't guarantee we run out of yellow ray by then

  const leafFreeFights =
    haveInCampground($item`A Guide to Burning Leaves`) && !get("instant_saveLeafFights", false)
      ? 5 - toInt(get("_leafMonstersFought"))
      : 0; //It's possible we get fewer than 5 fights; it has not happened to me in almost a month of testing

  return sumNumbers([
    shadowRift,
    snojo,
    NEP,
    witchess,
    DMT,
    LOV,
    olivers,
    tentacle,
    sausageGoblin,
    XRay,
    shatteringPunch,
    mobHit,
    locketedWitchess,
    backups,
    noveltySkeleton,
    leafFreeFights,
  ]);
}

export function computeCombatFrequency(): number {
  const vipHat = have($item`Clan VIP Lounge key`) ? -5 : 0;
  const hat = vipHat;

  const protopack = have($item`protonic accelerator pack`) ? -5 : 0;
  const back = protopack;

  const parka = have($item`Jurassic Parka`) ? -5 : 0;
  const shirt = parka;

  const umbrella = have($item`unbreakable umbrella`) ? -10 : 0;
  const offhand = umbrella;

  const pantogram =
    have($item`portable pantogram`) && !get("instant_savePantogram", false) ? -5 : 0;
  const pants = pantogram;

  const kgb =
    have($item`Kremlin's Greatest Briefcase`) && !get("instant_saveKGBClicks", false) ? -5 : 0;
  const codpiece =
    have($item`Clan VIP Lounge key`) && !get("instant_saveFloundry", false) ? -10 : 0;
  const atlas = get("hasMaydayContract") && !get("instant_saveMayday", false) ? -5 : 0;
  const mcHugeLargeLeftSki = have($item`McHugeLarge duffel bag`) ? -5 : 0;
  const accessories = sumNumbers([kgb, codpiece, atlas, mcHugeLargeLeftSki].sort().slice(0, 3));

  const rose = -20;
  const smoothMovements = have($skill`Smooth Movement`) ? -5 : 0;
  const sonata = have($skill`The Sonata of Sneakiness`) ? -5 : 0;
  const favoriteBird =
    have($item`Bird-a-Day calendar`) &&
    get("yourFavoriteBirdMods").includes("Combat Frequency") &&
    !get("instant_saveFavoriteBird", false)
      ? toInt(
          get("yourFavoriteBirdMods")
            .split(", ")
            .filter((s) => s.includes("Combat Frequency"))
            .join("")
            .split(": ")[1],
        )
      : 0;
  const shadowWaters = have($item`closed-circuit pay phone`) ? -10 : 0;
  const powerfulGlove =
    have($item`Powerful Glove`) && !forbiddenEffects.includes($effect`Invisible Avatar`) ? -10 : 0;
  const shoeGum = get("hasDetectiveSchool") && !get("instant_saveCopDollars", false) ? -5 : 0;
  const silentRunning = have($item`Clan VIP Lounge key`) ? -5 : 0;
  const feelingLonely = have($skill`Feel Lonely`) ? -5 : 0;
  const aprilingBandPatrolBeat = have($item`Apriling band helmet`) ? -10 : 0;
  const photoBoothEffect = have($item`Clan VIP Lounge key`) ? -5 : 0;
  const hidingFromSeekers = have($skill`Hide From Seekers`) ? -5 : 0;

  // Since Offhand Remarkable is useful for tests after famwt + NC, if it is being used at all,
  // we should not burn most of its turns on famwt (i.e. NC -> famwt)
  // This means we should only swap NC before famwt if we can hit <= -95 if we are not using Offhand Remarkable at all
  // const offhandRemarkable =
  //   have($skill`Aug. 13th: Left/Off Hander's Day!`) &&
  //   !forbiddenEffects.includes($effect`Offhand Remarkable`)
  //     ? offhand
  //     : 0;

  // Not considering mini kiwi for now because of the unreliable drop rate
  // const hippyAntimilitarism =
  //   have($familiar`Mini Kiwi`) && !excludedFamiliars.includes($familiar`Mini Kiwi`) ? -10 : 0;

  const effects = sumNumbers([
    rose,
    smoothMovements,
    sonata,
    favoriteBird,
    shadowWaters,
    powerfulGlove,
    shoeGum,
    silentRunning,
    feelingLonely,
    aprilingBandPatrolBeat,
    photoBoothEffect,
    hidingFromSeekers,
    // offhandRemarkable,
    // hippyAntimilitarism,
  ]);

  // No good way of determining familiar weight for the NC test yet
  const disgeist = have($familiar`Disgeist`) ? -5 : 0; // -min(10, floor(weight / 7.5))
  const peaceTurkey = have($familiar`Peace Turkey`) ? -5 : 0; // -min(10, floor(weight / 5.0))
  const familiar = sumNumbers([disgeist, peaceTurkey].sort().slice(0, 1));

  const darkHorse = get("horseryAvailable") ? -5 : 0;
  const others = darkHorse;

  const total = sumNumbers([
    hat,
    shirt,
    back,
    offhand,
    pants,
    accessories,
    effects,
    familiar,
    others,
  ]);

  print("Determining if we should run NC before fam test...");
  print(
    `Hat ${hat}, Shirt ${shirt}, Back ${back}, Offhand ${offhand}, Pants ${pants}, Accessories ${accessories}, Effects ${effects}, Familiar ${familiar}, Others ${others}`,
  );
  if (total <= -95) {
    print(`Total ${total} <= -95`, "green");
  } else {
    print(`Total ${total} > -95`, "red");
  }

  return total;
}

export function refillLatte(): void {
  if (
    !have($item`latte lovers member's mug`) ||
    !get("_latteDrinkUsed") ||
    get("_latteRefillsUsed") >= 3
  )
    return;

  const lastIngredient = get("latteUnlocks").includes("carrot") ? "carrot" : "pumpkin";
  if (get("_latteRefillsUsed") < 3) cliExecute(`latte refill cinnamon vanilla ${lastIngredient}`);
}

export const reagentBalancerEffect: Effect = {
  Muscle: $effect`Stabilizing Oiliness`,
  Mysticality: $effect`Expert Oiliness`,
  Moxie: $effect`Slippery Oiliness`,
}[mainStatStr];

export const reagentBalancerItem: Item = {
  Muscle: $item`oil of stability`,
  Mysticality: $item`oil of expertise`,
  Moxie: $item`oil of slipperiness`,
}[mainStatStr];

export const reagentBalancerIngredient: Item = {
  Muscle: $item`lime`,
  Mysticality: $item`cherry`,
  Moxie: $item`jumbo olive`,
}[mainStatStr];

export const reagentBoosterEffect: Effect = {
  Muscle: $effect`Phorcefullness`,
  Mysticality: $effect`Mystically Oiled`,
  Moxie: $effect`Superhuman Sarcasm`,
}[mainStatStr];

export const reagentBoosterItem: Item = {
  Muscle: $item`philter of phorce`,
  Mysticality: $item`ointment of the occult`,
  Moxie: $item`serum of sarcasm`,
}[mainStatStr];

export const reagentBoosterIngredient: Item = {
  Muscle: $item`lemon`,
  Mysticality: $item`grapefruit`,
  Moxie: $item`olive`,
}[mainStatStr];

export const xpWishEffect: Effect = {
  Muscle: $effect`HGH-charged`,
  Mysticality: $effect`Different Way of Seeing Things`,
  Moxie: $effect`Thou Shant Not Sing`,
}[mainStatStr];

export const snapperXpItem: Item = {
  Muscle: $item`vial of humanoid growth hormone`,
  Mysticality: $item`non-Euclidean angle`,
  Moxie: $item`Shantix™`,
}[mainStatStr];

export const abstractionXpItem: Item = {
  Muscle: $item`abstraction: purpose`,
  Mysticality: $item`abstraction: category`,
  Moxie: $item`abstraction: perception`,
}[mainStatStr];

export const abstractionXpEffect: Effect = {
  Muscle: $effect`Purpose`,
  Mysticality: $effect`Category`,
  Moxie: $effect`Perception`,
}[mainStatStr];

export const generalStoreXpEffect: Effect = {
  Muscle: $effect`Go Get 'Em, Tiger!`,
  Mysticality: $effect`Glittering Eyelashes`,
  Moxie: $effect`Butt-Rock Hair`,
}[mainStatStr];

export const showerGlobXpItem: Item = {
  Muscle: $item`wet paper weights`,
  Mysticality: $item`wet paperback`,
  Moxie: $item`wet paper cup`,
}[mainStatStr];

export const showerGlobXpEffect: Effect = {
  Muscle: $effect`Lifting Wets`,
  Mysticality: $effect`Moisticality`,
  Moxie: $effect`[2994]In Your Cups`,
}[mainStatStr];

export function goVote(): void {
  const initPriority: Map<string, number> = new Map([
    ["Weapon Damage Percent: +100", 5],
    ["Item Drop: +15", 4],
    ["Booze Drop: +30", 4],
    ["Monster Level: +10", 3],
    [`${mainStat} Percent: +25`, 3],
    ["Adventures: +1", 3],
    ["Spell Damage Percent: +20", 3],
    ["Familiar Experience: +2", 2],
    [`Experience (${mainStat}): +4`, 2],
    ["Hot Resistance: +3", 2],
    ["Meat Drop: +30", 1],
    [`Experience: +3`, 1],
    ["Meat Drop: -30", -2],
    ["Item Drop: -15", -4],
    ["Familiar Experience: -2", -4],
    [`Experience: -3`, -4],
    [`Maximum HP Percent: -50`, -4],
    ["Weapon Damage Percent: -50", -6],
    ["Spell Damage Percent: -50", -6],
    ["Adventures: -2", -6],
  ]);

  const voteLocalPriorityArr = [1, 2, 3, 4].map((index) => ({
    urlString: index - 1,
    value:
      initPriority.get(get(`_voteLocal${index}`)) ??
      (get(`_voteLocal${index}`).includes("-") ? -1 : 1),
  }));

  const init = maxBy(voteLocalPriorityArr, "value").urlString;

  const voteOptimally = get("instant_voteOptimally", false) ? 2 : 1;
  const voterValueTable = [
    {
      monster: $monster`terrible mutant`,
      value: voteOptimally,
    },
    {
      monster: $monster`angry ghost`,
      value: 1,
    },
    {
      monster: $monster`government bureaucrat`,
      value: 1,
    },
    {
      monster: $monster`annoyed snake`,
      value: 1,
    },
    {
      monster: $monster`slime blob`,
      value: 1,
    },
  ];

  const votingMonsterPriority = voterValueTable
    .sort((a, b) => b.value - a.value)
    .map((element) => element.monster.name);

  const monsterVote =
    votingMonsterPriority.indexOf(get("_voteMonster1")) <
    votingMonsterPriority.indexOf(get("_voteMonster2"))
      ? 1
      : 2;

  visitUrl(`choice.php?option=1&whichchoice=1331&g=${monsterVote}&local[]=${init}&local[]=${init}`);
}

export function canPull(id: number): boolean {
  if (inHardcore()) return false;
  else if (
    get("_roninStoragePulls").split(",").length >= 5 ||
    id <= 0 ||
    get("_roninStoragePulls").split(",").includes(id.toString()) ||
    storageAmount(toItem(id)) === 0
  )
    return false;
  return true;
}

let _bestShadowRift: Location | null = null;
export function bestShadowRift(): Location {
  if (!_bestShadowRift) {
    _bestShadowRift =
      chooseRift({
        canAdventure: true,
        sortBy: (l: Location) => {
          const drops = getMonsters(l)
            .map((m) =>
              [
                ...Object.keys(itemDrops(m)).map((s) => toItem(s)),
                m === $monster`shadow guy` && have($skill`Just the Facts`)
                  ? $item`pocket wish`
                  : $item.none,
              ].filter((i) => i !== $item.none),
            )
            .reduce((acc, val) => acc.concat(val), []);
          return sum(drops, mallPrice);
        },
      }) ?? $location.none;
    if (_bestShadowRift === $location.none && have($item`closed-circuit pay phone`)) {
      throw new Error("Failed to find a suitable Shadow Rift to adventure in");
    }
  }
  return _bestShadowRift;
}

export function sendAutumnaton(): void {
  if (AutumnAton.availableLocations().includes(bestShadowRift()) && have($item`autumn-aton`))
    AutumnAton.sendTo(bestShadowRift());
}

export function haveFreeRunSource(): boolean {
  return (
    !have($effect`Everything Looks Green`) &&
    have($item`spring shoes` || have($item`Roman Candelabra`))
  );
}

export function cyberRealmTurnsRun(): number {
  return get("_cyberZone1Turns") + get("_cyberZone2Turns") + get("_cyberZone3Turns");
}

export function cyberRealmTurnsAvailable(): number {
  if (!have($item`server room key`)) return 0;
  const availableFreeFights = have($skill`OVERCLOCK(10)`) ? 10 : 0;
  return Math.max(0, availableFreeFights - cyberRealmTurnsRun());
}

export function cyberRealmZone(): Location {
  const screechTurns = get("banishedPhyla").match(/Patriotic Screech:(\d+)/)?.[1];
  // If we don't have an active banish (or it ran out), prioritize lower zones
  if (toInt(screechTurns ?? "-1") <= myTurncount()) {
    if (get("_cyberZone1Turns") < 9) return $location`Cyberzone 1`;
    else if (get("_cyberZone2Turns") < 9) return $location`Cyberzone 2`;
    return $location`Cyberzone 3`;
  }
  // Else prioritize higher zones
  if (get("_cyberZone3Turns") < 9) return $location`Cyberzone 3`;
  else if (get("_cyberZone2Turns") < 9) return $location`Cyberzone 2`;
  return $location`Cyberzone 1`;
}

export function canScreech(): boolean {
  if (
    !have($familiar`Patriotic Eagle`) ||
    excludedFamiliars.includes($familiar`Patriotic Eagle`) ||
    get("instant_skipPatrioticScreech", false)
  )
    return false;
  const screechTurns = get("banishedPhyla").match(/Patriotic Screech:(\d+)/)?.[1];
  if (screechTurns) return toInt(screechTurns) <= myTurncount();
  return true;
}
