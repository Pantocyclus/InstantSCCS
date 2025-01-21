import { Familiar } from "kolmafia";
import { $familiar, $familiars, $item, get, have } from "libram";
import { camelFightsLeft, haveCBBIngredients } from "./lib";
import { excludedFamiliars } from "./resources";

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
  return have($familiar`Melodramedary`) &&
    camelFightsLeft() >= Math.ceil((100 - get("camelSpit")) / 3.0) &&
    get("camelSpit") < 100
    ? $familiar`Melodramedary`
    : $familiar.none;
}

function hoboInSheepsClothing(): Familiar {
  return have($familiar`Hobo in Sheep's Clothing`) && !have($item`grubby wool`, 2)
    ? $familiar`Hobo in Sheep's Clothing`
    : $familiar.none;
}

function miniKiwi(): Familiar {
  return have($familiar`Mini Kiwi`) && !have($item`mini kiwi`, 10)
    ? $familiar`Mini Kiwi`
    : $familiar.none;
}

export function chooseFamiliar(allowAttackingFamiliars = true): Familiar {
  const defaultFam = have($familiar`Cookbookbat`) ? $familiar`Cookbookbat` : $familiar.none;
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
    .filter((fam) => have(fam) && !excludedFamiliars.includes(fam));
  return familiars.length > 0 ? familiars[0] : defaultFam;
}
