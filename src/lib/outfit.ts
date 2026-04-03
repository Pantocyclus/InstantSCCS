import { OutfitSpec } from "grimoire-kolmafia";
import {
  cliExecute,
  Effect,
  equip,
  equippedItem,
  Item,
  myClass,
  myPrimestat,
  numericModifier,
  print,
  stringModifier,
  toInt,
  totalTurnsPlayed,
} from "kolmafia";
import {
  $class,
  $effect,
  $item,
  $skill,
  $slot,
  $slots,
  $stat,
  CommunityService,
  DaylightShavings,
  examine,
  get,
  have,
  set,
  unequip,
} from "libram";
import { mainStatMaximizerStr, mainStatStr } from "./accountstate";
import { chooseFamiliar } from "./familiars";
import { havePowerlevelingZoneBound } from "./zones";

export const LOVEquip =
  mainStatStr === $stat`Muscle`
    ? "LOV Eardigan"
    : mainStatStr === $stat`Mysticality`
      ? "LOV Epaulettes"
      : "LOV Earring";

export const codpieceSlots = $slots`codpiece1, codpiece2, codpiece3, codpiece4, codpiece5`;

export function haveHeartstone(): boolean {
  return (
    have($item`Heartstone`) ||
    (have($item`The Eternity Codpiece`) &&
      codpieceSlots.some((slot) => equippedItem(slot) === $item`Heartstone`))
  );
}

export function reduceItemUndefinedArray(arr: (Item | Item[] | undefined)[]): Item[] | undefined {
  const itemArray: Item[] = arr
    .filter((it) => it !== undefined)
    .flat()
    .filter((v, i, a) => a.indexOf(v) === i);
  if (itemArray.length > 0) return itemArray;
  return undefined;
}

export function daylightShavingsHelmet(): Item | Item[] | undefined {
  return myClass() === $class`Pastamancer` &&
    have($item`Sept-Ember Censer`) &&
    have($item`Daylight Shavings Helmet`) &&
    get("lastBeardBuff") === 0 && // We have not gotten the beard buff yet
    !get("instant_saveEmbers", false) &&
    !have($item`bembershoot`) // We have not used the mouthwash yet
    ? $item`Daylight Shavings Helmet` // Grab Grizzly Beard for mouthwash
    : undefined;
}

export function legendarySealClubbingClub(
  str: string,
  powerleveling = false,
): Item | Item[] | undefined {
  if (
    (!powerleveling || havePowerlevelingZoneBound()) &&
    have($item`legendary seal-clubbing club`) &&
    get(`_clubEm${str}Used`, 0) < 5 - get(`instant_saveClubEm${str}`, 0)
  )
    return $item`legendary seal-clubbing club`;
  return [];
}

export function romanCandelabra(ef: Effect): Item | Item[] | undefined {
  if (have($item`Roman Candelabra`) && !have(ef)) {
    return $item`Roman Candelabra`;
  }
  return [];
}

export function garbageShirt(): Item | Item[] | undefined {
  if (get("garbageShirtCharge") === 1) {
    if (equippedItem($slot`shirt`) === $item`makeshift garbage shirt`) unequip($slot`shirt`);
  }

  if (
    have($item`January's Garbage Tote`) &&
    get("garbageShirtCharge") > 1 &&
    have($skill`Torso Awareness`)
  ) {
    if (!have($item`makeshift garbage shirt`)) cliExecute("fold makeshift garbage shirt");
    return $item`makeshift garbage shirt`;
  }
  return [];
}

export function docBag(): Item | Item[] | undefined {
  if (have($item`Lil' Doctor™ bag`) && get("_chestXRayUsed") < 3) return $item`Lil' Doctor™ bag`;
  return [];
}

export function sugarItemsAboutToBreak(): Item[] {
  const sugarItems = [
    { id: 4180, item: $item`sugar shank` },
    { id: 4181, item: $item`sugar chapeau` },
    { id: 4182, item: $item`sugar shorts` },
  ];
  return sugarItems
    .map((entry) => {
      const { id, item } = entry;
      const itemAboutToBreak = parseInt(get(`sugarCounter${id.toString()}`), 10) >= 30;
      return itemAboutToBreak ? [item] : [];
    })
    .reduce((a, b) => a.concat(b));
}

export function avoidDaylightShavingsHelm(): boolean {
  return (
    DaylightShavings.nextBuff() === $effect`Musician's Musician's Moustache` ||
    DaylightShavings.hasBuff() ||
    !have($item`Daylight Shavings Helmet`)
  );
}

export function mobiusRing(): Item | Item[] | undefined {
  if (have($item`Möbius ring`) && get("instant_runMobiusNCs", false)) {
    const turnsBetween =
      [4, 7, 13, 19, 25, 31, 31, 31, 31, 31, 41, 41, 41, 41, 41, 51, 76]?.at(
        toInt(get("_mobiusStripEncounters")),
      ) ?? 76;

    if (
      totalTurnsPlayed() + turnsBetween >= toInt(get("_lastMobiusStripTurn")) &&
      toInt(get("_timeCopsFoughtToday")) < 11
    ) {
      return $item`Möbius ring`;
    }
  }
  return [];
}

function useCandyCaneSword(): boolean {
  if (!have($item`candy cane sword cane`) || get("instant_saveCandySword", false)) return false;
  examine($item`candy cane sword cane`);
  if (get("_surprisinglySweetSlashUsed") < 11 || get("_surprisinglySweetStabUsed") < 11) {
    return true;
  }
  return false;
}

function chooseWeapon(): Item | undefined {
  if (!havePowerlevelingZoneBound() && have($item`Monodent of the Sea`))
    return $item`Monodent of the Sea`;
  else if (useCandyCaneSword()) return $item`candy cane sword cane`;
  else if (have($item`fish hatchet`)) return $item`fish hatchet`;
  else if (have($item`bass clarinet`)) return $item`bass clarinet`;
  else if (myPrimestat() === $stat`Muscle` && have($item`June cleaver`)) return $item`June cleaver`;
  return undefined;
}

export function preventEquipList(): Item[] {
  return [
    ...sugarItemsAboutToBreak(),
    ...(avoidDaylightShavingsHelm() ? [$item`Daylight Shavings Helmet`] : []),
    ...(get("garbageShirtCharge") === 1 ? [$item`makeshift garbage shirt`] : []),
    $item`tinsel tights`,
    $item`wad of used tape`,
    $item`Möbius ring`,
    $item`Kramco Sausage-o-Matic™`,
    $item`miniature crystal ball`,
    $item`backup camera`,
    $item`Peridot of Peril`,
  ];
}

export const defaultModifier = `1 ${mainStatMaximizerStr}, 0.95 ML, 6 ${mainStatMaximizerStr} exp, 30 ${mainStatMaximizerStr} experience percent`;

export function baseOutfit(allowAttackingFamiliars = true): OutfitSpec {
  return {
    hat: avoidDaylightShavingsHelm() ? undefined : $item`Daylight Shavings Helmet`,
    weapon: chooseWeapon(),
    offhand: $item`unbreakable umbrella`,
    acc1:
      CommunityService.CoilWire.isDone() &&
      !have($item`a ten-percent bonus`) &&
      haveHeartstone() &&
      get("heartstoneKillUnlocked", false) &&
      get("_heartstoneKillUsed", 0) <= 5 - get("instant_saveHeartstoneKill", 0)
        ? $item`Heartstone`
        : myPrimestat() === $stat`Mysticality`
          ? $item`codpiece`
          : undefined,
    acc2:
      have($item`Cincho de Mayo`) && get("_cinchUsed") <= 95 && !get("instant_saveCinch", false)
        ? $item`Cincho de Mayo`
        : undefined,
    acc3: $item`spring shoes`,
    familiar: chooseFamiliar(allowAttackingFamiliars),
    modifier: defaultModifier,
    avoid: preventEquipList(),
  };
}

const codpieceGems = Item.all().filter(
  (gem) => stringModifier(`EternityCodpiece:${gem}`, "Modifiers").length > 0,
);

function getGemValue(
  gem: Item,
  primaryModifier: string,
  secondaryModifier?: string,
  weighting?: number,
): number {
  const weightedPrimaryValue =
    numericModifier(`EternityCodpiece:${gem}`, primaryModifier) * (weighting ?? 1);
  const secondaryValue = secondaryModifier
    ? numericModifier(`EternityCodpiece:${gem}`, secondaryModifier)
    : 0;
  return weightedPrimaryValue + secondaryValue;
}

export function prepareCodpiece(
  primaryModifier: string,
  secondaryModifier?: string,
  weighting?: number,
): void {
  const desiredGems = codpieceGems
    .map((gem) => [gem, getGemValue(gem, primaryModifier, secondaryModifier, weighting)] as const)
    .filter((gemWithModifer) => gemWithModifer[1] > 0)
    .sort((a, b) => b[1] - a[1]);

  for (const slot of codpieceSlots) {
    const currentGem = equippedItem(slot);
    const modifierToBeat =
      currentGem !== $item.none
        ? getGemValue(currentGem, primaryModifier, secondaryModifier, weighting)
        : 0;
    const gemToUse = desiredGems.find((gem) => have(gem[0]) && gem[1] > modifierToBeat)?.[0];

    if (gemToUse) {
      print(`Equipping ${gemToUse.name} in codpiece slot ${slot}.`);
      equip(slot, gemToUse);
    }
  }

  set(
    "_instant_codpieceTunedTo",
    `${primaryModifier}${secondaryModifier ? `,${secondaryModifier}` : ""}`,
  );
}

export function prepareCodpieceForPercentTest(modifier: string, weighting?: number): void {
  prepareCodpiece(`${modifier} Percent`, modifier, weighting);
}
