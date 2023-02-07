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
import { $effect, get, have, set } from "libram";
import { Engine } from "./engine/engine";
import { Args, getTasks } from "grimoire-kolmafia";
import { Task } from "./engine/task";
import { HPQuest, MoxieQuest, MuscleQuest, MysticalityQuest } from "./tasks/stat";
import { LevelingQuest } from "./tasks/leveling";
import { CoilWireQuest } from "./tasks/coilwire";
import { RunStartQuest } from "./tasks/runstart";

const timeProperty = "fullday_elapsedTime";

export const args = Args.create("InstantHCCS", "A full-day wrapper script.", {
  confirm: Args.boolean({
    help: "If the user must confirm execution of each task.",
    default: false,
  }),
});

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
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
    HPQuest,
    MuscleQuest,
    MysticalityQuest,
    MoxieQuest,
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

  set("InstantHCCSTurncount", myTurncount());
  set("InstantHCCSRunEnd", gametimeToInt());
  set("InstantHCCSDaycount", myDaycount());
  set("_InstantHCCSClanFortuneAttempts", get("_clanFortuneConsultUses", 0));
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
  return (
    get("kingLiberated") &&
    get("lastEmptiedStorage") === myAscensions() &&
    !have($effect`Feeling Lost`) &&
    !have($effect`Cowrruption`)
  );
}
