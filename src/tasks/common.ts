import { CombatStrategy } from "grimoire-kolmafia";
import {
  cliExecute,
  haveEffect,
  itemAmount,
  mpCost,
  myLevel,
  myMp,
  Skill,
  useSkill,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  Clan,
  Counter,
  get,
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
  completed: () => (Counter.get("Holiday Monster window begin") ?? Infinity) > 0,
  do: $location`Noob Cave`,
  combat: new CombatStrategy().macro(Macro.ifHolidayWanderer(Macro.runaway()).abort()),
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

function mystSynthAttainable(): boolean {
  if (
    (have($item`yellow candy heart`) && have($item`Crimbo peppermint bark`)) ||
    (have($item`orange candy heart`) &&
      (have($item`Crimbo candied pecan`) || have($item`peppermint sprout`))) ||
    (have($item`pink candy heart`) &&
      (have($item`peppermint sprout`) || have($item`peppermint twist`))) ||
    (have($item`lavender candy heart`) && have($item`Crimbo fudge`))
  )
    return true;
  return false;
}

function needBrickos(): boolean {
  const oysters = itemAmount($item`BRICKO oyster`);
  const brickContributions = Math.floor(itemAmount($item`BRICKO brick`) / 8);
  const eyeContributions = itemAmount($item`BRICKO eye brick`);
  const materials = brickContributions < eyeContributions ? brickContributions : eyeContributions;
  return have($skill`Summon BRICKOs`) && oysters + materials < 1;
}

function chooseLibram(useBrickos: boolean): Skill {
  const needLoveSong =
    itemAmount($item`love song of icy revenge`) +
      Math.floor(haveEffect($effect`Cold Hearted`) / 5) <
    4;
  if (useBrickos && needBrickos()) {
    return $skill`Summon BRICKOs`;
  } else if (!have($effect`Synthesis: Smart`) && !mystSynthAttainable()) {
    return $skill`Summon Candy Heart`;
  } else if (
    (!have($item`resolution: be happier`) && !have($effect`Joyful Resolve`)) ||
    (!have($item`resolution: be feistier`) && !have($effect`Destructive Resolve`))
  ) {
    return $skill`Summon Resolutions`;
  } else if (
    (!have($item`green candy heart`) && !have($effect`Heart of Green`)) ||
    (!have($item`lavender candy heart`) && !have($effect`Heart of Lavender`))
  ) {
    return $skill`Summon Candy Heart`;
  } else if (needLoveSong) {
    return $skill`Summon Love Song`;
  }

  return $skill`Summon Taffy`;
}

export function burnLibram(saveMp: number, useBrickos?: boolean): void {
  while (myMp() >= mpCost(chooseLibram(useBrickos ?? false)) + saveMp) {
    useSkill(chooseLibram(useBrickos ?? false));
  }
}
