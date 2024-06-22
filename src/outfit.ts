import { OutfitSpec } from "grimoire-kolmafia";
import { cliExecute, equip, equippedItem, Item, myPrimestat } from "kolmafia";
import { $effect, $item, $skill, $slot, $stat, DaylightShavings, examine, get, have } from "libram";
import { mainStatMaximizerStr } from "./lib";
import { chooseFamiliar } from "./familiars";

export function garbageShirt(): void {
  if (
    have($item`January's Garbage Tote`) &&
    get("garbageShirtCharge") > 0 &&
    have($skill`Torso Awareness`)
  ) {
    if (get("garbageShirtCharge") === 1) {
      if (equippedItem($slot`shirt`) === $item`makeshift garbage shirt`)
        equip($slot`shirt`, $item.none);
    } else {
      if (!have($item`makeshift garbage shirt`)) cliExecute("fold makeshift garbage shirt");
      equip($slot`shirt`, $item`makeshift garbage shirt`);
    }
  }
}

export function unbreakableUmbrella(): void {
  if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
    cliExecute("umbrella ml");
}

export function docBag(): void {
  if (have($item`Lil' Doctor™ bag`) && get("_chestXRayUsed") < 3)
    equip($slot`acc3`, $item`Lil' Doctor™ bag`);
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

function useCandyCaneSword(): boolean {
  if (!have($item`candy cane sword cane`) || get("instant_saveCandySword", false)) return false;
  examine($item`candy cane sword cane`);
  if (get("_surprisinglySweetSlashUsed") < 11 || get("_surprisinglySweetStabUsed") < 11) {
    return true;
  }
  return false;
}

export function baseOutfit(allowAttackingFamiliars = true): OutfitSpec {
  return {
    weapon: useCandyCaneSword()
      ? $item`candy cane sword cane`
      : have($item`fish hatchet`)
        ? $item`fish hatchet`
        : have($item`bass clarinet`)
          ? $item`bass clarinet`
          : myPrimestat() === $stat`Muscle` && have($item`June cleaver`)
            ? $item`June cleaver`
            : undefined,
    hat: avoidDaylightShavingsHelm() ? undefined : $item`Daylight Shavings Helmet`,
    offhand: $item`unbreakable umbrella`,
    acc1: myPrimestat() === $stat`Mysticality` ? $item`codpiece` : undefined,
    acc2:
      have($item`Cincho de Mayo`) && get("_cinchUsed") < 95 && !get("instant_saveCinch", false)
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
