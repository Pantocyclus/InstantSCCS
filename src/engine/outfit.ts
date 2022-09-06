import { Outfit } from "grimoire-kolmafia";
import { $item, $items, $slot } from "libram";

export function equipDefaults(outfit: Outfit): void {
  outfit.equip($item`Daylight Shavings Helmet`, $slot`hat`);
  outfit.equip($item`Jurassic Parka`, $slot`shirt`);
  outfit.equip($items`weeping willow wand, Fourth of May Cosplay Saber`, $slot`weapon`);
  outfit.equip($item`unbreakable umbrella`, $slot`off-hand`);
  outfit.equip($item`designer sweatpants`, $slot`pants`);
  outfit.equip($item`Kremlin's Greatest Briefcase`, $slot`acc1`);
  outfit.equip($items`dorky glasses, Eight Days a Week Pill Keeper`, $slot`acc2`);
  outfit.equip($item`backup camera`, $slot`acc3`);

  outfit.equip($item`tiny stillsuit`, $slot`familiar`);
}
