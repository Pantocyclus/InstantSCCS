import {
  gametimeToInt,
  myAdventures,
  myAscensions,
  myDaycount,
  myTurncount,
  print,
  setAutoAttack,
  turnsPlayed,
  userConfirm,
} from "kolmafia";
import { convertMilliseconds } from "./lib";
import { get, set } from "libram";
import { Engine } from "./engine/engine";
import { Args, getTasks } from "grimoire-kolmafia";
import { Task } from "./engine/task";
import { HPQuest, MoxieQuest, MuscleQuest, MysticalityQuest } from "./tasks/stat";
import { LevelingQuest } from "./tasks/leveling";
import { CoilWireQuest } from "./tasks/coilwire";
import { RunStartQuest } from "./tasks/runstart";
import { FamiliarWeightQuest } from "./tasks/familiarweight";
import { NoncombatQuest } from "./tasks/noncombat";
import { BoozeDropQuest } from "./tasks/boozedrop";
import { HotResQuest } from "./tasks/hotres";
import { WeaponDamageQuest } from "./tasks/weapondamage";
import { DonateQuest } from "./tasks/donate";
import { SpellDamageQuest } from "./tasks/spelldamage";
import { checkRequirements } from "./sim";

const timeProperty = "fullday_elapsedTime";

export const args = Args.create("InstantSCCS", "An automated low-shiny SCCS script.", {
  confirm: Args.boolean({
    help: "If the user must confirm execution of each task.",
    default: false,
  }),
  sim: Args.flag({ help: "Check if you have the requirements to run this script.", setting: "" }),
});

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }
  if (args.sim) {
    checkRequirements();
    return;
  }

  if (runComplete()) {
    print("Community Service complete!", "purple");
    return;
  }

  const setTimeNow = get(timeProperty, -1) === -1;
  if (setTimeNow) set(timeProperty, gametimeToInt());

  const tasks: Task[] = getTasks([
    RunStartQuest,
    CoilWireQuest,
    LevelingQuest,
    MysticalityQuest,
    HPQuest,
    MoxieQuest,
    MuscleQuest,
    FamiliarWeightQuest,
    NoncombatQuest,
    BoozeDropQuest,
    HotResQuest,
    WeaponDamageQuest,
    SpellDamageQuest,
    DonateQuest,
  ]);
  const engine = new Engine(tasks);
  setAutoAttack(0);

  while (!runComplete()) {
    const task = engine.getNextTask();
    if (task === undefined) throw "Unable to find available task, but the run is not complete";
    if (args.confirm && !userConfirm(`Executing task ${task.name}, should we continue?`)) {
      throw `User rejected execution of task ${task.name}`;
    }
    if (task.ready !== undefined && !task.ready()) throw `Task ${task.name} is not ready`;
    engine.execute(task);
  }

  set("InstantSCCSTurncount", myTurncount());
  set("InstantSCCSRunEnd", gametimeToInt());
  set("InstantSCCSDaycount", myDaycount());
  set("_InstantSCCSClanFortuneAttempts", get("_clanFortuneConsultUses", 0));
  print("Community Service complete!", "purple");
  print(`Adventures used: ${turnsPlayed()}`, "purple");
  print(`Adventures remaining: ${myAdventures()}`, "purple");
  print(
    `Time: ${convertMilliseconds(
      gametimeToInt() - get(timeProperty, gametimeToInt())
    )} since first run today started`,
    "purple"
  );
  set(timeProperty, -1);
}

function runComplete(): boolean {
  return get("kingLiberated") && get("lastEmptiedStorage") === myAscensions();
}
