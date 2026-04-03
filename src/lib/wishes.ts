import { cliExecute, Effect, monkeyPaw, toEffect } from "kolmafia";
import { $effect, $item, get, have } from "libram";
import { excludedEffects } from "../resources";
import { acquiredOrExcluded } from "./accountstate";

export function haveWishes(useGenie = true): boolean {
  if (
    have($item`cursed monkey's paw`) &&
    !get("instant_saveMonkeysPaw", false) &&
    get("_monkeyPawWishesUsed") < 5
  )
    return true;
  else if (have($item`pocket wish`) && !get("instant_saveGenie", false) && useGenie) return true;

  return false;
}

export function wishFor(ef: Effect, useGenie = true): void {
  // Tries to wish for an effect, but does not guarantee it
  if (have(ef)) return;
  if (excludedEffects.includes(ef)) return;

  // Genie and Monkey Paw both support wishing for effects
  // However, we can always sell Genie Wishes, so we prioritize using the paw
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

export function handleCustomWishes(prefname: string): void {
  get(prefname, "")
    .split(",")
    .map((id) => toEffect(id))
    .filter((ef) => !acquiredOrExcluded(ef) && ef !== $effect.none)
    .map((ef) => wishFor(ef));
}
