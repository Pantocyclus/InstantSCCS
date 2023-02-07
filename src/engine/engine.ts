import { Task } from "./task";
import { Engine as BaseEngine, Outfit } from "grimoire-kolmafia";
import { $effect, $skill, have, PropertiesManager } from "libram";
import { myHp, myMaxhp, print, useSkill } from "kolmafia";

export class Engine extends BaseEngine {
  public getNextTask(): Task | undefined {
    return this.tasks.find((task) => !task.completed() && (task.ready ? task.ready() : true));
  }

  public execute(task: Task): void {
    this.checkLimits(task, undefined);
    super.execute(task);
    if (have($effect`Beaten Up`)) {
      throw new Error("Fight was lost; stop.");
    }
    if (task.completed()) {
      print(`${task.name} completed!`, "blue");
    } else {
      print(`${task.name} not completed!`, "blue");
    }
  }

  dress(task: Task, outfit: Outfit): void {
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
      maximizerCombinationLimit: 0,
    });
  }
}
