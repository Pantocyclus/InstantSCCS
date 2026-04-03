import {
  cliExecute,
  Effect,
  equip,
  equippedItem,
  getDwelling,
  haveEquipped,
  holiday,
  Item,
  itemAmount,
  mpCost,
  myClass,
  myHp,
  myLevel,
  myMaxhp,
  myMaxmp,
  myMp,
  restoreMp,
  retrieveItem,
  retrievePrice,
  Skill,
  sweetSynthesis,
  toInt,
  toItem,
  toSkill,
  totalFreeRests,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $effect,
  $effects,
  $item,
  $items,
  $skills,
  $slot,
  $stat,
  get,
  getActiveSongs,
  getSongCount,
  getSongLimit,
  have,
  isSong,
  uneffect,
  Witchess,
} from "libram";
import { excludedEffects } from "../resources";
import { acquiredOrExcluded, mainStat, mainStatStr } from "./accountstate";

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

const muscleList: Effect[] = [
  $effect`Seal Clubbing Frenzy`,
  $effect`Patience of the Tortoise`,
  $effect`Strength of the Tortoise`,
  $effect`Disco over Matter`,
  $effect`Disdain of the War Snapper`,
  $effect`Go Get 'Em, Tiger!`,
  $effect`Muddled`,
  $effect`Lack of Body-Building`,
  $effect`Adrenaline Rush`,
  // Weapon dmg
  $effect`Carol of the Bulls`,
  // Fortune teller buff
  $effect`Gunther Than Thou`,
];

const mysticalityList: Effect[] = [
  $effect`Pasta Oneness`,
  $effect`Tubes of Universal Meat`,
  $effect`Mariachi Moisture`,
  $effect`Saucemastery`,
  $effect`Disdain of She-Who-Was`,
  $effect`Glittering Eyelashes`,
  $effect`Uncucumbered`,
  $effect`We're All Made of Starfish`,
  $effect`Sparkling Consciousness`,
  // Spell dmg
  $effect`Carol of the Hells`,
  // Fortune teller buff
  $effect`Everybody Calls Him Gorgon`,
];

const moxieList: Effect[] = [
  $effect`Disco State of Mind`,
  $effect`Slippery as a Seal`,
  $effect`Lubricating Sauce`,
  $effect`Mariachi Mood`,
  $effect`Butt-Rock Hair`,
  $effect`Ten out of Ten`,
  $effect`Pomp & Circumsands`,
  $effect`Sneaky Serpentine Subtlety`,
  // Weapon dmg
  $effect`Carol of the Bulls`,
  // Fortune teller buff
  $effect`They Call Him Shifty Because...`,
];

const statEffects =
  mainStatStr === `Muscle`
    ? muscleList
    : mainStatStr === `Mysticality`
      ? mysticalityList
      : moxieList;

export const usefulEffects: Effect[] = [
  // Stats
  $effect`Big`,
  $effect`Feeling Excited`,
  $effect`Triple-Sized`,
  $effect`substats.enh`,
  $effect`Hulkien`,
  $effect`Broad-Spectrum Vaccine`,
  // $effect`Think Win-Lose`,
  // $effect`Confidence of the Votive`,
  $effect`Song of Bravado`,

  $effect`Ultraheart`,
  ...statEffects,

  // ML
  $effect`Pride of the Puffin`,
  $effect`Drescher's Annoying Noise`,
  $effect`Ur-Kel's Aria of Annoyance`,

  // Xp
  $effect`Carol of the Thrills`,

  // Songs
  $effect`Stevedave's Shanty of Superiority`,
  $effect`Ur-Kel's Aria of Annoyance`,
  $effect`Aloysius' Antiphon of Aptitude`,

  // Famwt
  $effect`Empathy`,
  $effect`Leash of Linguini`,
  $effect`Thoughtful Empathy`,

  $effect`Only Dogs Love a Drunken Sailor`,

  // Combat Initiative
  $effect`Slippery as a Seal`,

  // Mp Regen
  $effect`Strength of the Tortoise`,

  // Hp Regen
  $effect`Disco over Matter`,
];

export const prismaticEffects: Effect[] = [
  $effect`Frostbeard`,
  $effect`Intimidating Mien`,
  $effect`Pyromania`,
  $effect`Rotten Memories`,
  $effect`Takin' It Greasy`,
  $effect`Your Fifteen Minutes`,
  $effect`Bendin' Hell`,
];

export const wdmgEffects: Effect[] = [
  $effect`Carol of the Bulls`,
  $effect`Disdain of the War Snapper`,
  $effect`Frenzied, Bloody`,
  $effect`Jackasses' Symphony of Destruction`,
  $effect`Rage of the Reindeer`,
  $effect`Scowl of the Auk`,
  $effect`Song of the North`,
  $effect`Tenacity of the Snapper`,
];

export function tryAcquiringEffect(ef: Effect, tryRegardless = false): void {
  // Try acquiring an effect
  if (have(ef)) return;
  // If we already have the effect, we're done
  else if (excludedEffects.includes(ef)) return; // Don't acquire the effect if we are saving it

  if (ef === $effect`Sparkling Consciousness`) {
    // This has no ef.default for some reason
    if (holiday() === "Dependence Day" && !get("_fireworkUsed") && retrieveItem($item`sparkler`, 1))
      use($item`sparkler`, 1);
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
      const target = splitString.slice(2).join(" ").split(" ^ ")[0];

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
  tryAcquiringSongs(efs.filter((ef) => isSong(ef)));
  // Try acquiring everything else
  efs.filter((ef) => !isSong(ef)).forEach((ef) => tryAcquiringEffect(ef, tryRegardless));
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
        isSong(song) && // This must be a song
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

export function getFurnishings(): string[] {
  const buffer = visitUrl("campground.php?action=inspectdwelling");
  if (buffer.includes("Your patch of ground doesn't have anything inside it.")) return [];

  return [...buffer.matchAll(/<b>(.*?)<\/b>/g)].map((match) => match[1]);
}

export function canAcquireDwellingBuff(ef: Effect): boolean {
  if (
    acquiredOrExcluded(ef) ||
    get("timesRested") >= totalFreeRests() - get("instant_saveFreeRests", 0)
  )
    return false;

  const dwelling = getDwelling();

  if (ef === $effect`Pyramid Power`)
    return dwelling === $item`BRICKO pyramid` && get("_pyramidRestEffectsGained", 0) < 3;
  else if (ef === $effect`Juiced and Jacked`)
    return dwelling === $item`ginormous pumpkin` && !get("_pumpkinRestEffectGained", false);
  else if (ef === $effect`Uncaged Power`)
    return dwelling === $item`giant Faraday cage` && !get("_faradayCageRestEffectGained", false);
  else if (ef === $effect`Snow Fortified`)
    return dwelling === $item`snow fort` && !get("_snowFortRestEffectGained", false);
  else if (ef === $effect`It's Ridiculous`)
    return dwelling === $item`elevent` && !get("_eleventRestEffectGained", false);
  else if (ef === $effect`Holiday Bliss`)
    return (
      (dwelling === $item`gingerbread house` ||
        getFurnishings().some((s) =>
          ["Crimbo wreath", "Crimbo lights", "Crimbo reindeer"].includes(s),
        )) &&
      !get("_gingerbreadHouseRestEffectGained")
    );
  else if (ef === $effect`Hobonic`) return dwelling === $item`hobo fortress blueprints`;
  else if (ef === $effect`Hypercubed`)
    return (
      dwelling === $item`Xiblaxian residence-cube` && !get("_residenceCubeRestEffectGained", false)
    );
  else if (ef === $effect`Mushed`)
    return (
      dwelling === $item`house-sized mushroom` && !get("_mushroomHouseRestEffectGained", false)
    );

  return false;
}

export function acquireDwellingBuff(ef: Effect | Effect[]): boolean {
  const effects = [ef].flat();
  if (!effects.some((ef) => canAcquireDwellingBuff(ef))) return false;
  if (myHp() === myMaxhp() && myMp() === myMaxmp())
    // We cannot rest if our HP and MP are both full - cast a 1mp skill to enable resting
    useSkill(
      $skills`Seal Clubbing Frenzy, Patience of the Tortoise, Manicotti Meditation, Sauce Contemplation, Disco Aerobics, Moxie of the Mariachi`
        .filter((sk) => have(sk))
        ?.at(0) ?? Skill.none,
    );
  visitUrl("campground.php?action=rest");

  return effects.some((ef) => have(ef));
}
