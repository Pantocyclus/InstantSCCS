import { Task } from "./task";
import { Engine as BaseEngine, Outfit } from "grimoire-kolmafia";
import { $effect, $skill, get, have, PropertiesManager, uneffect } from "libram";
import { debug } from "../lib";
import { myHp, myMaxhp, useSkill } from "kolmafia";
import { equipDefaults } from "./outfit";

export class Engine extends BaseEngine {
  public getNextTask(): Task | undefined {
    return this.tasks.find((task) => !task.completed() && (task.ready ? task.ready() : true));
  }

  public execute(task: Task): void {
    this.checkLimits(task);
    super.execute(task);
    if (have($effect`Beaten Up`)) {
      if (get("lastEncounter") === "Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl")
        uneffect($effect`Beaten Up`);
      else throw "Fight was lost; stop.";
    }
    if (task.completed()) {
      debug(`${task.name} completed!`, "blue");
    } else {
      debug(`${task.name} not completed!`, "blue");
    }
  }

  dress(task: Task, outfit: Outfit): void {
    if (task.combat !== undefined && !outfit.skipDefaults) equipDefaults(outfit);
    super.dress(task, outfit);
  }

  prepare(task: Task): void {
    super.prepare(task);
    if (task.combat !== undefined && myHp() < myMaxhp() * 0.9) useSkill($skill`Cannelloni Cocoon`);
  }

  initPropertiesManager(manager: PropertiesManager): void {
    super.initPropertiesManager(manager);
    manager.set({
      hpAutoRecovery: -0.05,
      mpAutoRecovery: -0.05,
    });
  }
}
