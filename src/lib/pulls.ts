import {
  chew,
  cliExecute,
  drink,
  eat,
  inHardcore,
  storageAmount,
  takeStorage,
  toInt,
  toItem,
  use,
} from "kolmafia";
import { $effect, get, have } from "libram";
import { tryAcquiringEffect } from "./buffs";

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

export function handleCustomPulls(prefName: string, maximizerString = ""): boolean {
  // Takes a test preference and tries to pull all valid items
  // Returns true if we managed any successful pull
  if (
    get(prefName, "")
      .split(",")
      .map(handleCustomPull)
      .some((success) => success)
  ) {
    if (maximizerString.length > 0) cliExecute(`maximize ${maximizerString}`); // If we managed to pull an item, we might need to re-maximize
    return true;
  }
  return false;
}
