import {
  Effect,
  effectModifier,
  Familiar,
  getCampground,
  getClanName,
  haveEffect,
  Item,
  itemAmount,
  myBasestat,
  myClass,
  myLevel,
  myPrimestat,
  myTurncount,
  print,
  toInt,
} from "kolmafia";
import {
  $class,
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $stat,
  Clan,
  CombatLoversLocket,
  CommunityService,
  get,
  getKramcoWandererChance,
  have,
  haveInCampground,
  sumNumbers,
  Witchess,
} from "libram";
import { excludedEffects, excludedFamiliars } from "../resources";
import { powerlevelingLocation } from "./zones";

export const startingClan = getClanName();
export const motherSlimeClan = Clan.getWhitelisted().find(
  (c) => c.name.toLowerCase() === get("instant_motherSlimeClan", "").toLowerCase(),
)
  ? get("instant_motherSlimeClan", "")
  : Clan.getWhitelisted().find((c) => c.name.toLowerCase() === "csloopers unite")
    ? "CSLoopers Unite"
    : "";
export const useParkaSpit =
  get("instant_prioritizeParkaSpit", false) ||
  (have($item`Fourth of May Cosplay Saber`) && have($skill`Feel Envy`));
export const useCenser = have($item`Sept-Ember Censer`) && !get("instant_saveEmbers", false);
export const useCinch = !get("instant_saveCinch", false);

export const mainStat = myPrimestat();
export const mainStatStr = mainStat.toString();
export const mainStatMaximizerStr =
  mainStat === $stat`Muscle` ? "mus" : mainStat === $stat`Mysticality` ? "myst" : "mox";

export const targetBaseMainStat = get("instant_targetBaseMainStat", 190);
export const targetBaseMainStatGap = get("instant_targetBaseMainStatGap", 15);

const gardens = $items`packet of pumpkin seeds, Peppermint Pip Packet, packet of dragon's teeth, packet of beer seeds, packet of winter seeds, packet of thanksgarden seeds, packet of tall grass seeds, packet of mushroom spores, packet of rock seeds`;
export function getGarden(): Item {
  return gardens.find((it) => it.name in getCampground()) || $item.none;
}

export function haveCBBIngredients(fullCheck: boolean, verbose = false): boolean {
  if (!haveAndNotExcluded($familiar`Cookbookbat`) || myClass() !== $class`Sauceror`) return true;
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

export function overleveled(): boolean {
  return myLevel() >= 20;
}

export const craftedCBBFoods: Item[] = $items`honey bun of Boris, roasted vegetable of Jarlsberg, Pete's rich ricotta, plain calzone`;
export const craftedCBBEffects: Effect[] = craftedCBBFoods.map((it) =>
  effectModifier(it, "effect"),
);

export function completedPowerleveling(): boolean {
  return (
    myBasestat(mainStat) >= targetBaseMainStat - targetBaseMainStatGap &&
    (haveCBBIngredients(false) ||
      overleveled() ||
      craftedCBBEffects.some((ef) => have(ef)) ||
      craftedCBBEffects.every((ef) => acquiredOrExcluded(ef))) &&
    (powerlevelingLocation() !== $location`The Neverending Party` ||
      get("_neverendingPartyFreeTurns") >= 10)
  );
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
    have($item`Powerful Glove`) && !excludedEffects.includes($effect`Invisible Avatar`) ? -10 : 0;
  const shoeGum = get("hasDetectiveSchool") && !get("instant_saveCopDollars", false) ? -5 : 0;
  const silentRunning = have($item`Clan VIP Lounge key`) ? -5 : 0;
  const feelingLonely = have($skill`Feel Lonely`) ? -5 : 0;
  const aprilingBandPatrolBeat = have($item`Apriling band helmet`) ? -10 : 0;
  const photoBoothEffect = have($item`Clan VIP Lounge key`) ? -5 : 0;
  const hidingFromSeekers = have($skill`Hide From Seekers`) ? -5 : 0;
  const obscuriTea =
    getCampground()["potted tea tree"] !== undefined &&
    !get("instant_saveTeaTree", false) &&
    !excludedEffects.includes($effect`Obscuri Tea`) &&
    excludedEffects.includes($effect`Toast Tea`)
      ? -5
      : 0;

  // Since Offhand Remarkable is useful for tests after famwt + NC, if it is being used at all,
  // we should not burn most of its turns on famwt (i.e. NC -> famwt)
  // This means we should only swap NC before famwt if we can hit <= -95 if we are not using Offhand Remarkable at all
  // const offhandRemarkable =
  //   have($skill`Aug. 13th: Left/Off Hander's Day!`) &&
  //   !excludedEffects.includes($effect`Offhand Remarkable`)
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
    obscuriTea,
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

export function haveFreeKill(): boolean {
  // TODO: Support for Parka YR
  const haveXRay = have($item`Lil' Doctor™ bag`) && get("_chestXRayUsed") < 3;
  const haveShatteringPunch = have($skill`Shattering Punch`) && get("_shatteringPunchUsed") < 3;
  const haveMobHit = have($skill`Gingerbread Mob Hit`) && !get("_gingerbreadMobHitUsed");

  return haveXRay || haveShatteringPunch || haveMobHit;
}

export function haveMotherSlimeBanish(): boolean {
  const haveSnokeBomb = have($skill`Snokebomb`) && get("_snokebombUsed") < 3;
  const haveKGBTranquilizer =
    have($item`Kremlin's Greatest Briefcase`) && get("_kgbTranquilizerDartUses") < 3;

  return haveSnokeBomb || haveKGBTranquilizer;
}

export function haveFreeBanish(): boolean {
  const haveFeelHatred = have($skill`Feel Hatred`) && get("_feelHatredUsed") < 3;
  const haveReflexHammer = have($item`Lil' Doctor™ bag`) && get("_reflexHammerUsed") < 3;
  const haveThrowLatte = have($item`latte lovers member's mug`) && !get("_latteBanishUsed");

  return haveFeelHatred || haveReflexHammer || haveThrowLatte || haveMotherSlimeBanish();
}

export function haveFreeRunSource(): boolean {
  return (
    !have($effect`Everything Looks Green`) &&
    have($item`spring shoes` || have($item`Roman Candelabra`))
  );
}

export function canScreech(): boolean {
  if (
    !haveAndNotExcluded($familiar`Patriotic Eagle`) ||
    excludedFamiliars.includes($familiar`Patriotic Eagle`) ||
    get("instant_skipPatrioticScreech", false)
  )
    return false;
  const screechTurns = get("banishedPhyla").match(/Patriotic Screech:(\d+)/)?.[1];
  if (screechTurns) return toInt(screechTurns) <= myTurncount();
  return true;
}

export function habitatCastsLeft(): number {
  if (!have($skill`Recall Facts: Monster Habitats`) && get("_monsterHabitatsFightsLeft") === 0)
    return 0;
  return Math.max(0, 3 - get("_monsterHabitatsRecalled") - get("instant_saveMonsterHabitats", 0));
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
  const DMT = haveAndNotExcluded($familiar`Machine Elf`) ? 5 - get("_machineTunnelsAdv") : 0;
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

export function acquiredOrExcluded(ef: Effect): boolean {
  return have(ef) || excludedEffects.includes(ef);
}

export function haveAndNotExcluded(fam: Familiar): boolean {
  return have(fam) && !excludedFamiliars.includes(fam);
}
