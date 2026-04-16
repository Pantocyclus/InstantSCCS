import {
  canEquip,
  Familiar,
  familiarEquippedEquipment,
  familiarWeight,
  Item,
  numericModifier,
} from "kolmafia";
import { $familiar, $familiars, $item, get, have } from "libram";
import { excludedFamiliars } from "../resources";
import { camelFightsLeft, haveAndNotExcluded, haveCBBIngredients } from "./accountstate";

function nanorhino(allowAttackingFamiliars = false): Familiar {
  return allowAttackingFamiliars && get("_nanorhinoCharge") === 100
    ? $familiar`Nanorhino`
    : $familiar.none;
}

export function cookbookbat(): Familiar {
  return !haveCBBIngredients(true) ? $familiar`Cookbookbat` : $familiar.none;
}

function shorterOrderCook(allowAttackingFamiliars = true): Familiar {
  return allowAttackingFamiliars && !have($item`short stack of pancakes`)
    ? $familiar`Shorter-Order Cook`
    : $familiar.none;
}

function garbageFire(): Familiar {
  return !have($item`burning newspaper`) ? $familiar`Garbage Fire` : $familiar.none;
}

export function sombrero(allowAttackingFamiliars = true): Familiar {
  const sombreros = [
    ...(allowAttackingFamiliars
      ? $familiars`Jill-of-All-Trades, Patriotic Eagle, Galloping Grill`
      : []),
    $familiar`Baby Sandworm`,
    $familiar`Hovering Sombrero`,
  ].filter((fam) => have(fam));
  return sombreros.length > 0 ? sombreros[0] : $familiar.none;
}

function rockinRobin(): Familiar {
  return !have($item`robin's egg`) ? $familiar`Rockin' Robin` : $familiar.none;
}

function optimisticCandle(): Familiar {
  return !have($item`glob of melted wax`) ? $familiar`Optimistic Candle` : $familiar.none;
}

export function melodramedary(): Familiar {
  return haveAndNotExcluded($familiar`Melodramedary`) &&
    camelFightsLeft() >= Math.ceil((100 - get("camelSpit")) / 3.0) &&
    get("camelSpit") < 100
    ? $familiar`Melodramedary`
    : $familiar.none;
}

function hoboInSheepsClothing(): Familiar {
  return haveAndNotExcluded($familiar`Hobo in Sheep's Clothing`) && !have($item`grubby wool`, 2)
    ? $familiar`Hobo in Sheep's Clothing`
    : $familiar.none;
}

function miniKiwi(): Familiar {
  return haveAndNotExcluded($familiar`Mini Kiwi`) && !have($item`mini kiwi`, 10)
    ? $familiar`Mini Kiwi`
    : $familiar.none;
}

export function chooseFamiliar(allowAttackingFamiliars = true): Familiar {
  const defaultFam = haveAndNotExcluded($familiar`Cookbookbat`)
    ? $familiar`Cookbookbat`
    : $familiar.none;
  const familiars = [
    cookbookbat,
    shorterOrderCook,
    garbageFire,
    nanorhino,
    optimisticCandle,
    rockinRobin,
    melodramedary,
    hoboInSheepsClothing,
    miniKiwi,
    sombrero,
  ]
    .map((fn) => fn(allowAttackingFamiliars))
    .filter((fam) => haveAndNotExcluded(fam));
  return familiars.length > 0 ? familiars[0] : defaultFam;
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

export function expectedFamiliarWeight(familiar: Familiar): number {
  if (!have($familiar`Shorter-Order Cook`) || familiar.experience > 0)
    return familiarWeight(familiar);
  return familiarEquippedEquipment($familiar`Shorter-Order Cook`) === $item`blue plate` ? 10 : 9;
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
        expectedWeight:
          expectedFamiliarWeight(familiar) + numericModifier(bestEquip, "Familiar Weight"),
      };
    })
    .reduce((a, b) => (a.expectedWeight > b.expectedWeight ? a : b));
}
