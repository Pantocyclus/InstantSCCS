import {
  buy,
  equip,
  equippedItem,
  getPower,
  Item,
  myFamiliar,
  myId,
  myMeat,
  npcPrice,
  print,
  Slot,
  toInt,
  toSlot,
  useFamiliar,
  visitUrl,
} from "kolmafia";
import { $effect, $familiar, $item, $items, $skill, $slot, get, have, set, unequip } from "libram";

const armoryHats = [
  $item`snorkel`,
  $item`Kentucky-style derby`,
  $item`pentacorn hat`,
  $item`goofily-plumed helmet`,
  $item`yellow plastic hard hat`,
  $item`wooden salad bowl`,
  $item`football helmet`,
  $item`fishin' hat`,
];

const armoryPants = [
  $item`studded leather boxer shorts`,
  $item`chain-mail monokini`,
  $item`union scalemail pants`,
  $item`paper-plate-mail pants`,
  $item`troutpiece`,
  $item`alpha-mail pants`,
];

interface BuskItem {
  item: Item;
  cost: number;
}

interface BuskCombination {
  hat: Item;
  shirt: Item;
  pants: Item;
}

export function currentBusk(): number {
  return get("_beretBuskingUses", 0) + 1;
}

function computeEquipPower(it: Item): number {
  if (toSlot(it) === $slot`hat`)
    return getPower(it) * (1 + (have($skill`Tao of the Terrapin`) ? 1 : 0));
  else if (toSlot(it) === $slot`shirt`) return getPower(it);
  else if (toSlot(it) === $slot`pants`)
    return (
      getPower(it) *
      (1 + (have($skill`Tao of the Terrapin`) ? 1 : 0) + (have($effect`Hammertime`) ? 3 : 0))
    );
  return getPower(it);
}

function buskAcquisitionPrice(it: Item): number {
  if (it === $item.none) return 0;
  if (have(it)) return 0;
  if (armoryHats.includes(it) || armoryPants.includes(it)) return npcPrice(it);
  return Infinity;
}

function bestAvailableEquips(s: Slot): Map<number, BuskItem> {
  const availableEquips = [
    $item.none,
    ...$items``
      .filter((it) => toSlot(it) === s)
      .filter((it) => have(it) || myMeat() >= buskAcquisitionPrice(it))
      .sort((a, b) => computeEquipPower(a) - computeEquipPower(b)),
  ];

  const bestEquips = new Map(
    availableEquips
      .map((it) => computeEquipPower(it))
      .filter((value, index, array) => array.indexOf(value) === index)
      .map((p) => [p, { item: $item.none, cost: Infinity } as BuskItem]),
  );
  availableEquips.forEach((it) => {
    const hatPower = computeEquipPower(it);
    if (
      bestEquips.get(hatPower)?.item === $item.none ||
      (bestEquips.get(hatPower)?.cost ?? Infinity > buskAcquisitionPrice(it))
    )
      bestEquips.set(hatPower, { item: it, cost: buskAcquisitionPrice(it) });
  });
  return bestEquips;
}

function buskHats(): Map<number, BuskItem> {
  if (!have($familiar`Mad Hatrack`))
    return new Map<number, BuskItem>([
      [computeEquipPower($item`prismatic beret`), { item: $item`prismatic beret`, cost: 0 }],
    ]);

  return bestAvailableEquips($slot`hat`);
}

function buskShirts(): Map<number, BuskItem> {
  if (!have($skill`Torso Awareness`))
    return new Map<number, BuskItem>([[0, { item: $item.none, cost: 0 }]]);

  return bestAvailableEquips($slot`shirt`);
}

function buskPants(): Map<number, BuskItem> {
  return bestAvailableEquips($slot`pants`);
}

function checkBusk(hat: Item, shirt: Item, pants: Item, power: number): void {
  const hatDA = computeEquipPower(hat);
  const shirtDA = computeEquipPower(shirt);
  const pantsDA = computeEquipPower(pants);
  const totalDA = hatDA + shirtDA + pantsDA;
  print(`Beret Busk: ${currentBusk()}`);
  print(`Total: ${totalDA} - Hat: ${hatDA}, Shirt: ${shirtDA}, Pants: ${pantsDA}`);

  if (totalDA !== power) throw new Error(`Failed to get ${power} (got ${totalDA})`);
}

function getBusk(power: number, busk: number): void {
  if (!have($item`prismatic beret`))
    throw new Error("You do not have a prismatic beret to busk with");
  if (currentBusk() > busk) return;
  if (currentBusk() < busk)
    throw new Error(
      `Trying to acquire busk #${busk} but only ${currentBusk() - 1} have been cast so far`,
    );

  const bestHats = buskHats();
  const bestShirts = buskShirts();
  const bestPants = buskPants();

  let bestCost = Infinity;
  let bestCombination: BuskCombination = { hat: $item.none, shirt: $item.none, pants: $item.none };
  bestHats.forEach((hat, hatPower) =>
    bestShirts.forEach((shirt, shirtPower) =>
      bestPants.forEach((pants, pantsPower) => {
        const totalPower = hatPower + shirtPower + pantsPower;
        const totalCost = hat.cost + shirt.cost + pants.cost;
        if (totalPower !== power) return;
        if (totalCost < bestCost) {
          bestCost = totalCost;
          bestCombination = {
            hat: hat.item,
            shirt: shirt.item,
            pants: pants.item,
          } as BuskCombination;
        }
      }),
    ),
  );

  if (bestCost > myMeat()) {
    if (bestCost === Infinity)
      throw new Error(`Could not find any combinations to achieve busk with ${power} power`);
    else
      throw new Error(
        `We need ${bestCost} meat to acquire this busk with hat: ${bestCombination.hat}, shirt: ${bestCombination.shirt}, pants: ${bestCombination.pants}`,
      );
  }
  checkBusk(bestCombination.hat, bestCombination.shirt, bestCombination.pants, power);

  const currentFam = myFamiliar();
  const currentFamEquip = equippedItem($slot`familiar`);
  if (bestCombination.hat !== $item`prismatic beret`) {
    useFamiliar($familiar`Mad Hatrack`);
    equip($slot`familiar`, $item`prismatic beret`);
  }
  [bestCombination.hat, bestCombination.pants].forEach((it) => {
    if (!have(it)) buy(it);
  });

  const currentHat = equippedItem($slot`hat`);
  const currentShirt = equippedItem($slot`shirt`);
  const currentPants = equippedItem($slot`pants`);

  Object.values(bestCombination).forEach((it: Item) => {
    if (!have(it) && it !== $item.none) throw new Error(`Failed to acquire ${it}`);
  });
  [$slot`hat`, $slot`shirt`, $slot`pants`].forEach((s) => unequip(s));
  Object.values(bestCombination).forEach((it: Item) => {
    if (it !== $item.none) equip(it);
  });

  const buskCount = currentBusk();
  visitUrl(`runskillz.php?action=Skillz&whichskill=7565&targetplayer=${myId()}&pwd`);
  set("_beretBuskingUses", buskCount);

  [$slot`hat`, $slot`shirt`, $slot`pants`].forEach((s) => unequip(s));
  [currentHat, currentShirt, currentPants].forEach((it) => {
    if (it !== $item.none) equip(it);
  });
  useFamiliar(currentFam);
  if (currentFamEquip !== $item.none) equip($slot`familiar`, currentFamEquip);
}

interface BuskRequest {
  busk: number;
  power: number;
}

export function handleCustomBusks(prefName: string): void {
  get(prefName, "")
    .split(",")
    .map((b) => {
      return {
        busk: toInt(b.split(":")?.at(0) ?? "0"),
        power: toInt(b.split(":")?.at(1) ?? "0"),
      } as BuskRequest;
    })
    .sort((a, b) => a.busk - b.busk)
    .filter((request) => request.busk > 0 && request.busk <= 5)
    .forEach((request) => getBusk(request.power, request.busk));
}
