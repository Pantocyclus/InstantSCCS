import { OutfitSpec } from "grimoire-kolmafia";
import { cliExecute, Effect, equip, equippedItem, Item, myPrimestat, toInt, totalTurnsPlayed } from "kolmafia";
import {
  $class,
  $effect,
  $item,
  $skill,
  $slot,
  $stat,
  DaylightShavings,
  examine,
  get,
  have,
} from "libram";
import { havePowerlevelingZoneBound, mainStatMaximizerStr } from "./lib";
import { chooseFamiliar } from "./familiars";

export function reduceItemUndefinedArray(arr: (Item | undefined)[]): Item[] | undefined {
  const itemArray = arr.filter((it) => it !== undefined) as Item[];
  if (itemArray.length > 0) return itemArray;
  return undefined;
}

export function daylightShavingsHelmet(): Item | undefined {
  return myClass() === $class`Pastamancer` &&
    have($item`Sept-Ember Censer`) &&
    have($item`Daylight Shavings Helmet`) &&
    get("lastBeardBuff") === 0 && // We have not gotten the beard buff yet
    !get("instant_saveEmbers", false) &&
    !have($item`bembershoot`) // We have not used the mouthwash yet
    ? $item`Daylight Shavings Helmet` // Grab Grizzly Beard for mouthwash
    : undefined;
}

export function legendarySealClubbingClub(str: string): Item | undefined {
  if (
    // eslint-disable-next-line libram/verify-constants
    have($item`legendary seal-clubbing club`) &&
    get(`_clubEm${str}Used`, 0) < 5 - get(`instant_saveClubEm${str}`, 0)
  )
    // eslint-disable-next-line libram/verify-constants
    return $item`legendary seal-clubbing club`;
  return undefined;
}

export function romanCandelabra(ef: Effect): Item | undefined {
  if (have($item`Roman Candelabra`) && !have(ef)) {
    return $item`Roman Candelabra`;
  }
  return undefined;
}

export function garbageShirt(): Item | undefined {
  if (
    have($item`January's Garbage Tote`) &&
    get("garbageShirtCharge") > 0 &&
    have($skill`Torso Awareness`)
  ) {
    if (get("garbageShirtCharge") === 1) {
      if (equippedItem($slot`shirt`) === $item`makeshift garbage shirt`) return $item.none;
    } else {
      if (!have($item`makeshift garbage shirt`)) cliExecute("fold makeshift garbage shirt");
      return $item`makeshift garbage shirt`;
    }
  }
  return undefined;
}

export function docBag(): Item | undefined {
  if (have($item`Lil' Doctor™ bag`) && get("_chestXRayUsed") < 3) return $item`Lil' Doctor™ bag`;
  return undefined;
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

export function mobiusRing(): void {
  let turnsBetween = 0;
  switch (toInt(get("_mobiusStripEncounters"))) {
		case 0: turnsBetween = 4; break;
		case 1: turnsBetween = 7; break;
		case 2: turnsBetween = 13; break;
		case 3: turnsBetween = 19; break;
		case 4: turnsBetween = 25; break;
		case 5: turnsBetween = 31; break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10: turnsBetween = 41; break;
		case 11:
		case 12:
		case 13:
		case 14:
		case 15: turnsBetween = 51; break;
		default: turnsBetween = 76; break;
	}
  if (have($item`Möbius ring`) && toInt(get("_lastMobiusStripTurn")) + turnsBetween >= totalTurnsPlayed() && toInt(get("_timeCopsFoughtToday")) < 11)
    equip($slot`acc3`, $item`Möbius ring`);
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

export function baseOutfit(allowAttackingFamiliars = true): OutfitSpec {
  return {
    hat: avoidDaylightShavingsHelm() ? undefined : $item`Daylight Shavings Helmet`,
    weapon: chooseWeapon(),
    offhand: $item`unbreakable umbrella`,
    acc1: myPrimestat() === $stat`Mysticality` ? $item`codpiece` : undefined,
    acc2:
      have($item`Cincho de Mayo`) && get("_cinchUsed") <= 95 && !get("instant_saveCinch", false)
        ? $item`Cincho de Mayo`
        : undefined,
    acc3: $item`spring shoes`,
    familiar: chooseFamiliar(allowAttackingFamiliars),
    modifier: `1 ${mainStatMaximizerStr}, 0.95 ML, 6 ${mainStatMaximizerStr} exp, 30 ${mainStatMaximizerStr} experience percent, -equip tinsel tights, -equip wad of used tape`,
    avoid: [
      ...sugarItemsAboutToBreak(),
      ...(avoidDaylightShavingsHelm() ? [$item`Daylight Shavings Helmet`] : []),
    ],
  };
}
