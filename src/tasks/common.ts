import { CombatStrategy } from "grimoire-kolmafia";
import { cliExecute, myLevel } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  Clan,
  Counter,
  get,
  getTodaysHolidayWanderers,
  have,
  StompingBoots,
} from "libram";
import Macro from "../combat";
import { Task } from "../engine/task";

const MOTHERSLIME_CLAN = "The Genius Clan";
const VIP_CLAN = "Bonus Adventures from Hell";

export const holidayRunawayTask: Task = {
  name: "Holiday Runaway",
  ready: () => StompingBoots.couldRunaway(),
  completed: () =>
    (Counter.get("Holiday Monster window begin") ??
      (getTodaysHolidayWanderers().length > 0 ? 0 : Infinity)) > 0,
  do: $location`Noob Cave`,
  combat: new CombatStrategy().macro(Macro.runaway().abort()),
  outfit: { familiar: $familiar`Pair of Stomping Boots` },
  limit: { tries: 1 },
};

export const innerElfTask: Task = {
  name: "Inner Elf",
  ready: () => myLevel() >= 13 && get("_kgbTranquilizerDartUses") < 3,
  prepare: (): void => {
    Clan.join(MOTHERSLIME_CLAN);
    if (!get("_photocopyUsed") && !have($item`photocopied monster`)) cliExecute("fax receive");
  },
  completed: () => have($effect`Inner Elf`),
  do: $location`The Slime Tube`,
  post: () => Clan.join(VIP_CLAN),
  combat: new CombatStrategy().macro(Macro.skill($skill`KGB tranquilizer dart`)),
  choices: { 326: 1 },
  effects: [$effect`Blood Bubble`],
  outfit: {
    acc1: $item`Kremlin's Greatest Briefcase`,
    acc2: $item`Eight Days a Week Pill Keeper`,
    pants: $item`designer sweatpants`,
    familiar: $familiar`Machine Elf`,
  },
  limit: { tries: 1 },
};

export const meteorShowerTask: Task = {
  name: "Meteor Shower",
  ready: () => get("_meteorShowerUses") < 5 && get("_saberForceUses") < 5,
  completed: () => have($effect`Meteor Showered`),
  do: $location`The Dire Warren`,
  combat: new CombatStrategy().macro(
    Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
  ),
  choices: { 1387: 3 },
  outfit: {
    weapon: $item`Fourth of May Cosplay Saber`,
    familiar: $familiar`Melodramedary`,
  },
  limit: { tries: 1 },
};
