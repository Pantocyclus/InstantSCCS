import { Task } from "./task";
import { Engine as BaseEngine, Outfit } from "grimoire-kolmafia";
import { $effect, $skill, get, have, PropertiesManager, set, uneffect } from "libram";
import { debug } from "../lib";
import { myHp, myMaxhp, useSkill } from "kolmafia";
import { equipDefaults } from "./outfit";

export const trackedPreferences = new Map<string, string>([
  // Free Banishes
  ["_feelHatredUsed", "Feel Hatred"],
  ["_reflexHammerUsed", "Reflex Hammer"],
  ["_latteRefillsUsed", "Latte Refills"],
  ["_kgbTranquilizerDartUses", "KGB Tranquilizers"],
  ["_snokebombUsed", "Snokebomb"],

  // Free Kills
  ["_chestXRayUsed", "Chest X-Ray"],
  ["_shatteringPunchUsed", "Shattering Punch"],
  ["_gingerbreadMobHitUsed", "Gingerbread Mob Hit"],
  ["_CSParkaYRUsed", "Parka YR"],

  // Notable Skills
  ["_saberForceUses", "Saber Forces"],
  ["_monstersMapped", "Monsters Mapped"],
  ["_feelEnvyUsed", "Feel Envy"],
  ["_sourceTerminalDigitizeUses", "Digitize"],
  ["_sourceTerminalPortscanUses", "Portscan"],
  ["_sourceTerminalDuplicateUses", "Duplicate"],

  // Free Fights
  ["_snojoFreeFights", "Snojo"],
  ["_neverendingPartyFreeTurns", "NEP"],
  ["_witchessFights", "Witchess"],
  ["_machineTunnelsAdv", "DMT"],
  ["_loveTunnelUsed", "LOV Tunnel"],
  ["_voteFreeFights", "Voters"],
  ["_godLobsterFights", "God Lobster"],
  ["_speakeasyFreeFights", "Oliver's Place"],
  ["_eldritchHorrorEvoked", "Eldritch Tentacle"],
  ["_sausageFights", "Sausage Goblins"],

  // Potentially Free Fights
  ["_backUpUses", "Backup Camera"],
  ["_locketMonstersFought", "Locket Reminisces"],
  ["_photocopyUsed", "Fax Machine"],
  ["_chateauMonsterFought", "Chateau Painting"],

  // Resources That Compete With Farming
  ["_powerfulGloveBatteryPowerUsed", "Powerful Glove Charges"],
  ["_kgbClicksUsed", "KGB Clicks"],
  ["_deckCardsDrawn", "Deck Draws"],
  ["_macrometeoriteUses", "Macrometeorites"],
  ["_AAABatteriesUsed", "Batteries (AAA)"],
  ["_coldMedicineConsults", "CMC Consults"],
  ["tomeSummons", "Tome Summons"],
  ["_sproutsUsed", "Peppermint Sprouts"], // Assumes garden is peppermint
  ["_genieWishesUsed", "Genie Wishes"],
  ["_pottedTeaTreeUsed", "Tea Tree"],
  ["_favoriteBirdVisited", "Favorite Bird"],
  ["_clanFortuneBuffUsed", "Zatara Consult"],
  ["_floundryItemCreated", "Clan Floundry"],
  ["_gingerbreadCityNoonCompleted", "GingerbreadCity Noon"],
  ["_pantogramModifier", "Pantogram"],
  ["_cargoPocketEmptied", "Cargo Shorts"],
  ["_freePillKeeperUsed", "Pillkeeper"],
]);

export class Engine extends BaseEngine {
  public getNextTask(): Task | undefined {
    return this.tasks.find((task) => !task.completed() && (task.ready ? task.ready() : true));
  }

  public execute(task: Task): void {
    const originalValues = Array.from(trackedPreferences.keys()).map((pref) => [
      pref,
      get(pref).toString(),
    ]);
    this.checkLimits(task, undefined);
    super.execute(task);
    if (have($effect`Beaten Up`)) {
      if (get("lastEncounter") === "Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl")
        uneffect($effect`Beaten Up`);
      else throw "Fight was lost; stop.";
    }
    originalValues.forEach(([pref, val]) => {
      if (val !== get(pref).toString()) {
        const s = `_instant${pref}`;
        const arr = get(s, "").split(",");
        arr.push(task.name);
        set(s, arr.filter((v, i, a) => v.length > 0 && a.indexOf(v) === i).join(","));
      }
    });
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
