import { Task } from "./task";
import { Engine as BaseEngine, Outfit, outfitSlots } from "grimoire-kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $skill,
  get,
  have,
  PropertiesManager,
  set,
  undelay,
  uneffect,
} from "libram";
import {
  Item,
  itemAmount,
  myFullness,
  myHp,
  myInebriety,
  myMaxhp,
  mySpleenUse,
  print,
  toInt,
  toItem,
  totalFreeRests,
  useSkill,
} from "kolmafia";

export class trackedResource {
  resource: string | Item;
  name: string;
  maxUses?: number;

  constructor(resource: string | Item, name: string, maxUses?: number) {
    this.resource = resource;
    this.name = name;
    if (maxUses) this.maxUses = maxUses;
  }
}

export const freeBanishResources: trackedResource[] = [
  new trackedResource("_feelHatredUsed", "Feel Hatred", 3),
  new trackedResource("_reflexHammerUsed", "Reflex Hammer", 3),
  new trackedResource("_latteRefillsUsed", "Latte Refills", 3),
  new trackedResource("_kgbTranquilizerDartUses", "KGB Tranquilizers", 3),
  new trackedResource("_snokebombUsed", "Snokebomb", 3),
];

export const freeKillResources: trackedResource[] = [
  new trackedResource("_chestXRayUsed", "Chest X-Ray", 3),
  new trackedResource("_shatteringPunchUsed", "Shattering Punch", 3),
  new trackedResource("_gingerbreadMobHitUsed", "Gingerbread Mob Hit", 1),
  new trackedResource("_missileLauncherUsed", "Missile Launcher", 1),
  new trackedResource("_CSParkaYRUsed", "Parka YR"),
];

export const notableSkillResources: trackedResource[] = [
  new trackedResource("_saberForceUses", "Saber Forces", 5),
  new trackedResource("_monstersMapped", "Monsters Mapped", 3),
  new trackedResource("_feelEnvyUsed", "Feel Envy", 3),
  new trackedResource("_sourceTerminalDigitizeUses", "Digitize", 3),
  new trackedResource("_sourceTerminalPortscanUses", "Portscan", 3),
  new trackedResource("_sourceTerminalEnhanceUses", "Source Terminal Enhances", 3),
  new trackedResource("_sourceTerminalDuplicateUses", "Duplicate", 1),
];

export const freeFightResources: trackedResource[] = [
  new trackedResource("_shadowAffinityToday", "Shadow Rift", 11),
  new trackedResource("_snojoFreeFights", "Snojo", 10),
  new trackedResource("_neverendingPartyFreeTurns", "NEP", 10),
  new trackedResource("_witchessFights", "Witchess", 5),
  new trackedResource("_machineTunnelsAdv", "DMT", 5),
  new trackedResource("_loveTunnelUsed", "LOV Tunnel", 3),
  new trackedResource("_voteFreeFights", "Voters", 3),
  new trackedResource("_godLobsterFights", "God Lobster", 3),
  new trackedResource("_speakeasyFreeFights", "Oliver's Place", 3),
  new trackedResource("_aprilBandTomUses", "Apriling Band Quad Tom", 3),
  new trackedResource("_eldritchHorrorEvoked", "Eldritch Tentacle", 1),
  new trackedResource("_sausageFights", "Sausage Goblins"),
];

export const potentiallyFreeFightResources: trackedResource[] = [
  new trackedResource("_backUpUses", "Backup Camera", 11),
  new trackedResource("_leafMonstersFought", "Flaming Leaflets", 5),
  new trackedResource("_locketMonstersFought", "Locket Reminisces", 3),
  new trackedResource("_photocopyUsed", "Fax Machine", 1),
  new trackedResource("_chateauMonsterFought", "Chateau Painting", 1),
];

export const farmingResourceResources: trackedResource[] = [
  new trackedResource("_powerfulGloveBatteryPowerUsed", "Powerful Glove Charges", 100),
  new trackedResource("_cinchUsed", "Cinch", 100),
  new trackedResource("_kgbClicksUsed", "KGB Clicks", 22),
  new trackedResource("_deckCardsDrawn", "Deck Draws", 15),
  new trackedResource("_mimicEggsObtained", "Mimic Eggs", 11),
  new trackedResource("_macrometeoriteUses", "Macrometeorites", 10),
  new trackedResource($item`battery (AAA)`, "Batteries (AAA)", 7),
  new trackedResource("availableSeptEmbers", "Sept Embers", -7),
  new trackedResource($item`pocket wish`, "Pocket Wishes (Genie + BofA)", 6),
  new trackedResource("_augSkillsCasts", "August Scepter Charges", 5),
  new trackedResource("_monkeyPawWishesUsed", "Monkey Paw Wishes", 5),
  new trackedResource("tomeSummons", "Tome Summons", 3),
  new trackedResource("_pottedTeaTreeUsed", "Tea Tree", 3),
  new trackedResource($item`peppermint sprout`, "Peppermint Sprout", 3),
  new trackedResource("_monsterHabitatsRecalled", "Monster Habitats", 3),
  new trackedResource("_aprilBandInstruments", "April Band Instruments", 2),
  new trackedResource("_favoriteBirdVisited", "Favorite Bird", 1),
  new trackedResource("_clanFortuneBuffUsed", "Zatara Consult", 1),
  new trackedResource("_floundryItemCreated", "Clan Floundry", 1),
  new trackedResource("_gingerbreadCityNoonCompleted", "GingerbreadCity Noon", 1),
  new trackedResource("_gingerbreadCityMidnightCompleted", "GingerbreadCity Midnight", 1),
  new trackedResource("_pantogramModifier", "Pantogram", 1),
  new trackedResource("_cargoPocketEmptied", "Cargo Shorts", 1),
  new trackedResource("_freePillKeeperUsed", "Pillkeeper", 1),
  new trackedResource("timesRested", "Free Rests", totalFreeRests()),
];

export const trackedResources: trackedResource[] = [
  ...freeBanishResources,
  ...freeKillResources,
  ...notableSkillResources,
  ...freeFightResources,
  ...potentiallyFreeFightResources,
  ...farmingResourceResources,
];

export class Engine extends BaseEngine {
  public getNextTask(): Task | undefined {
    return this.tasks.find((task) => !task.completed() && (task.ready ? task.ready() : true));
  }

  public execute(task: Task): void {
    const originalValues = trackedResources.map(({ resource }) =>
      typeof resource === "string"
        ? [resource, get(resource).toString()]
        : [resource.name, `${itemAmount(resource)}`],
    );
    const organUsage = () => [myFullness(), myInebriety(), mySpleenUse()];
    const originalOrgans = organUsage();
    this.checkLimits(task, undefined);

    super.execute(task);
    if (have($effect`Beaten Up`)) {
      if (
        [
          // "Poetic Justice", // grimoire automatically re-runs certain tasks here (https://github.com/loathers/grimoire/blob/main/src/engine.ts#L525)
          // "Lost and Found", // this includes all cleaver non-combats, so the script would never see these in lastEncounter
          "Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl",
        ].includes(get("lastEncounter"))
      )
        uneffect($effect`Beaten Up`);
      else throw "Fight was lost; stop.";
    }
    originalValues.forEach(([resource, val]) => {
      const trackingMafiaPref = get(resource, "").toString().length > 0;
      if (
        trackingMafiaPref
          ? val !== get(resource).toString()
          : itemAmount(toItem(resource)) < toInt(val)
      ) {
        const s = `_instant_${resource}`.replace("__", "_");
        const arr = get(s, "").split(",");
        arr.push(task.name);
        set(s, arr.filter((v, i, a) => v.length > 0 && a.indexOf(v) === i).join(","));
        if (!trackingMafiaPref) {
          const usagePref = `${s}_used`.replace("__", "_");
          set(usagePref, get(usagePref, 0) + toInt(val) - itemAmount(toItem(resource)));
        }
      }
    });
    organUsage().forEach((organUse, idx) => {
      if (organUse !== originalOrgans[idx]) {
        const s = `_instant_${["fullness", "inebriety", "spleenUse"][idx]}`;
        const arr = get(s, "").split(",");
        arr.push(task.name);
        set(s, arr.filter((v, i, a) => v.length > 0 && a.indexOf(v) === i).join(","));
      }
    });
    if (task.completed()) {
      print(`${task.name} completed!`, "blue");
    } else {
      print(`${task.name} not completed!`, "blue");
    }
  }

  createOutfit(task: Task): Outfit {
    // Handle unequippables in outfit here
    const spec = undelay(task.outfit);
    if (spec === undefined) {
      return new Outfit();
    }

    if (spec.familiar && !have(spec.familiar)) {
      print(`Ignoring using a familiar because we don't have ${spec.familiar}`, "red");
      spec.familiar = $familiar.none;
    }

    if (spec instanceof Outfit) {
      const badSlots = Array.from(spec.equips.entries())
        .filter(([, it]) => !have(it) && it !== $item.none)
        .map(([s]) => s);
      badSlots.forEach((s) => {
        print(`Ignoring slot ${s} because we don't have ${spec.equips.get(s) ?? ""}`, "red");
        spec.equips.delete(s);
      });
      return spec.clone();
    }

    // spec is an OutfitSpec
    for (const slotName of outfitSlots) {
      const itemOrItems = spec[slotName];
      if (itemOrItems) {
        if (itemOrItems instanceof Item) {
          if (!have(itemOrItems) && itemOrItems !== null) {
            print(`Ignoring slot ${slotName} because we don't have ${itemOrItems}`, "red");
            spec[slotName] = undefined;
          }
        } else {
          if (!itemOrItems.some((it) => have(it) && it !== null)) {
            print(
              `Ignoring slot ${slotName} because we don't have ${itemOrItems
                .map((it) => it.name)
                .join(", ")}`,
              "red",
            );
            spec[slotName] = undefined;
          }
        }
      }
    }
    return Outfit.from(spec, new Error("Failed to equip outfit"));
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
    const bannedAutoRestorers = [
      "sleep on your clan sofa",
      "rest in your campaway tent",
      "rest at the chateau",
      "rest at your campground",
      "free rest",
    ];
    const bannedAutoHpRestorers = [...bannedAutoRestorers];
    const bannedAutoMpRestorers = [...bannedAutoRestorers];
    const hpItems = get("hpAutoRecoveryItems")
      .split(";")
      .filter((s) => !bannedAutoHpRestorers.includes(s))
      .join(";");
    const mpItems = Array.from(
      new Set([...get("mpAutoRecoveryItems").split(";"), "doc galaktik's invigorating tonic"]),
    )
      .filter((s) => !bannedAutoMpRestorers.includes(s))
      .join(";");
    manager.set({
      autoSatisfyWithCloset: false,
      hpAutoRecovery: -0.05,
      mpAutoRecovery: -0.05,
      maximizerCombinationLimit: 0,
      hpAutoRecoveryItems: hpItems,
      mpAutoRecoveryItems: mpItems,
      shadowLabyrinthGoal: "effects",
      choiceAdventureScript: "instantsccs_choice.ash",
      requireBoxServants: false,
    });
  }
}
