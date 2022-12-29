import { CombatStrategy } from "grimoire-kolmafia";
import {
  adv1,
  cliExecute,
  create,
  drink,
  eat,
  equip,
  familiarWeight,
  getFuel,
  itemAmount,
  myFamiliar,
  myInebriety,
  myLevel,
  runChoice,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
  weightAdjustment,
} from "kolmafia";
import {
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  CombatLoversLocket,
  get,
  getKramcoWandererChance,
  have,
  set,
  TunnelOfLove,
  uneffect,
  Witchess,
} from "libram";
import { fillTo } from "libram/dist/resources/2017/AsdonMartin";
import Macro from "../combat";
import { Quest } from "../engine/task";
import { mapMonster, tryUse } from "../lib";
import { burnLibram, innerElfTask } from "./common";

export const LevelingQuest: Quest = {
  name: "Leveling",
  completed: () => get("csServicesPerformed").split(",").length > 1,
  tasks: [
    {
      name: "Pilsners",
      ready: () => myLevel() >= 11,
      prepare: (): void => {
        tryUse($item`astral six-pack`);
        uneffect($effect`Aloysius' Antiphon of Aptitude`);
      },
      completed: () => myInebriety() >= 4,
      do: () => drink(4 - myInebriety(), $item`astral pilsner`),
      effects: $effects`Ode to Booze`,
      post: () => uneffect($effect`Ode to Booze`),
      limit: { tries: 1 },
    },
    { ...innerElfTask },
    {
      name: "Snojo for Short Pancakes",
      prepare: (): void => {
        if (get("snojoSetting") === null) {
          visitUrl("place.php?whichplace=snojo&action=snojo_controller");
          runChoice(1);
        }
        //useFamiliar($familiar`Grey Goose`);
        //useFamiliar($familiar`Shorter-Order Cook`);
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
        if (get("parkaMode") !== "spikolodon") cliExecute("parka spikolodon");
      },
      completed: () => get("_snojoFreeFights") >= 5,
      do: $location`The X-32-F Combat Training Snowman`,
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Giant Growth`)
          .if_($item`blue rocket`, Macro.item($item`blue rocket`))
          .default()
      ),
      outfit: { familiar: $familiar`Shorter-Order Cook` },
      limit: { tries: 5 },
    },
    {
      name: "Snojo for Newspaper",
      prepare: (): void => {
        if (get("snojoSetting") === null) {
          visitUrl("place.php?whichplace=snojo&action=snojo_controller");
          runChoice(1);
        }
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
        if (get("parkaMode") !== "spikolodon") cliExecute("parka spikolodon");
      },
      completed: () =>
        have($item`burning newspaper`) ||
        have($item`burning paper crane`) ||
        get("_snojoFreeFights") >= 7,
      do: $location`The X-32-F Combat Training Snowman`,
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Giant Growth`)
          .if_($item`blue rocket`, Macro.item($item`blue rocket`))
          .default()
      ),
      outfit: { familiar: $familiar`Garbage Fire` },
      limit: { tries: 2 },
    },
    {
      name: "Snojo for Spit Upon",
      prepare: (): void => {
        if (get("snojoSetting") === null) {
          visitUrl("place.php?whichplace=snojo&action=snojo_controller");
          runChoice(1);
        }
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
        if (get("parkaMode") !== "spikolodon") cliExecute("parka spikolodon");
      },
      completed: () => get("_snojoFreeFights") >= 9,
      do: $location`The X-32-F Combat Training Snowman`,
      post: (): void => {
        if (get("_snojoFreeFights") >= 9) cliExecute("hottub"); // Clean -stat effects
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Giant Growth`)
          .if_($item`blue rocket`, Macro.item($item`blue rocket`))
          .default()
      ),
      outfit: {
        familiar: $familiar`Melodramedary`,
        famequip: $item`dromedary drinking helmet`,
      },
      limit: { tries: 2 },
    },
    {
      name: "LOV Tunnel",
      prepare: (): void => {
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
      },
      completed: () => get("_loveTunnelUsed"),
      do: () =>
        TunnelOfLove.fightAll(
          "LOV Epaulettes",
          "Open Heart Surgery",
          "LOV Extraterrestrial Chocolate"
        ),
      combat: new CombatStrategy().macro(
        Macro.if_($monster`LOV Enforcer`, Macro.attack().repeat())
          .if_($monster`LOV Engineer`, Macro.skill($skill`Toynado`).repeat())
          .if_($monster`LOV Equivocator`, Macro.default())
      ),
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        shirt: $item`makeshift garbage shirt`,
        familiar: $familiar`Melodramedary`,
        famequip: $item`dromedary drinking helmet`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
      post: (): void => {
        use(1, $item`LOV Elixir #3`);
      },
    },
    {
      name: "Eldritch Tentacle",
      prepare: (): void => {
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
      },
      completed: () => get("_eldritchHorrorEvoked"),
      do: () => useSkill($skill`Evoke Eldritch Horror`),
      post: (): void => {
        if (have($effect`Beaten Up`)) cliExecute("hottub");
      },
      combat: new CombatStrategy().macro(Macro.default()),
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        familiar: $familiar`Melodramedary`,
        famequip: $item`dromedary drinking helmet`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    {
      name: "Witchess Knight",
      prepare: (): void => {
        //useFamiliar($familiar`Grey Goose`);
        //useFamiliar($familiar`Shorter-Order Cook`);
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
      },
      completed: () => get("_witchessFights") >= 3,
      do: () => Witchess.fightPiece($monster`Witchess Knight`),
      combat: new CombatStrategy().macro(Macro.default()),
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        familiar: $familiar`Shorter-Order Cook`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 3 },
    },
    {
      name: "Reminisce Knight",
      prepare: (): void => {
        //useFamiliar($familiar`Grey Goose`);
        //useFamiliar($familiar`Shorter-Order Cook`);
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
      },
      completed: () => CombatLoversLocket.monstersReminisced().includes($monster`Witchess Knight`),
      do: () => CombatLoversLocket.reminisce($monster`Witchess Knight`),
      combat: new CombatStrategy().macro(Macro.default()),
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        familiar: $familiar`Shorter-Order Cook`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    {
      name: "Witchess King",
      prepare: (): void => {
        //useFamiliar($familiar`Grey Goose`);
        //useFamiliar($familiar`Shorter-Order Cook`);
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
      },
      completed: () => have($item`dented scepter`),
      do: () => Witchess.fightPiece($monster`Witchess King`),
      combat: new CombatStrategy().macro(Macro.delevel().attack().repeat()),
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        shirt: $item`makeshift garbage shirt`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    {
      name: "Witchess Witch",
      prepare: (): void => {
        //useFamiliar($familiar`Grey Goose`);
        //useFamiliar($familiar`Shorter-Order Cook`);
      },
      completed: () => have($item`battle broom`),
      do: () => Witchess.fightPiece($monster`Witchess Witch`),
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Curse of Weaksauce`)
          .attack()
          .repeat()
      ),
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`dented scepter`,
        shirt: $item`makeshift garbage shirt`,
        familiar: $familiar`Shorter-Order Cook`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
    },
    {
      name: "God Lobster",
      prepare: (): void => {
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
      },
      completed: () => get("_godLobsterFights") >= 3,
      do: () => visitUrl("main.php?fightgodlobster=1"),
      combat: new CombatStrategy().macro(Macro.default()),
      choices: { 1310: () => (have($item`God Lobster's Ring`) ? 2 : 1) }, // Get -combat on last fight
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        famequip: $items`God Lobster's Ring, God Lobster's Scepter, none`,
        familiar: $familiar`God Lobster`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 3 },
    },
    {
      name: "Neverending Party",
      prepare: (): void => {
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
      },
      completed: () => get("_neverendingPartyFreeTurns") >= 10,
      do: $location`The Neverending Party`,
      choices: {
        1322: 2,
        1324: 5,
      },
      combat: new CombatStrategy().macro(Macro.trySkill($skill`Bowl Sideways`).default()),
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        familiar: $familiar`Melodramedary`,
        famequip: $item`dromedary drinking helmet`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 11 },
    },

    {
      name: "Retrieve Bowling Ball",
      completed: () =>
        have($item`cosmic bowling ball`) ||
        get("_banderRunaways") >= 10 ||
        get("_banderRunaways") >= (familiarWeight(myFamiliar()) + weightAdjustment()) / 5 ||
        get("_feelPrideUsed") > 0,
      do: $location`Noob Cave`,
      combat: new CombatStrategy().macro(Macro.runaway()),
      outfit: { familiar: $familiar`Pair of Stomping Boots`, modifier: "familiar weight" },
    },
    {
      name: "Free Kills",
      completed: () =>
        get("_shatteringPunchUsed") >= 3 &&
        get("_gingerbreadMobHitUsed") &&
        get("_missileLauncherUsed"),
      prepare: (): void => {
        if (have($effect`Spit Upon`)) {
          useFamiliar($familiar`Galloping Grill`);
          equip($item`tiny stillsuit`);
        }
        if (getFuel() < 100 && !get("_missileLauncherUsed")) fillTo(100);
      },
      do: $location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`,
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        familiar: $familiar`Melodramedary`,
        famequip: $item`dromedary drinking helmet`,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Feel Pride`)
          .trySkill($skill`Bowl Sideways`)
          .trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Shattering Punch`)
          .trySkill($skill`Gingerbread Mob Hit`)
          .trySkill($skill`Asdon Martin: Missile Launcher`)
          .abort()
      ),
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 6 },
    },
    {
      name: "Sausage Goblin",
      prepare: (): void => {
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
        cliExecute("terminal educate portscan");
        if (have($effect`Spit Upon`)) {
          useFamiliar($familiar`Galloping Grill`);
          equip($item`tiny stillsuit`);
        }
      },
      completed: () => get("_sausageFights") > 1,
      ready: () => getKramcoWandererChance() >= 1.0,
      do: $location`The Neverending Party`,
      choices: { 1322: 2 },
      combat: new CombatStrategy().macro(
        Macro.if_(
          $monster`sausage goblin`,
          Macro.trySkill($skill`Portscan`)
            .trySkill($skill`%fn, spit on me!`)
            .default()
        ).abort()
      ),
      outfit: {
        offhand: $item`Kramco Sausage-o-Matic™`,
        shirt: $item`makeshift garbage shirt`,
        familiar: $familiar`Melodramedary`,
        famequip: $item`dromedary drinking helmet`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
      post: () =>
        eat(
          itemAmount($item`magical sausage`) + itemAmount($item`magical sausage casing`),
          $item`magical sausage`
        ),
    },
    {
      name: "Oliver's Place Agent with Portscan and Envy",
      prepare: (): void => {
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
        cliExecute("terminal educate portscan");
      },
      completed: () => get("_speakeasyFreeFights", 0) >= 1,
      do: $location`An Unusually Quiet Barroom Brawl`,
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Gulp Latte`)
          .if_($monster`Government agent`, Macro.trySkill($skill`Feel Envy`))
          .trySkill($skill`Portscan`)
          .default()
      ),
      outfit: {
        familiar: $familiar`Garbage Fire`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Oliver's Place Agent with Portscan",
      prepare: (): void => {
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
        cliExecute("terminal educate portscan");
      },
      completed: () => get("_speakeasyFreeFights", 0) >= 2,
      do: $location`An Unusually Quiet Barroom Brawl`,
      combat: new CombatStrategy().macro(Macro.trySkill($skill`Portscan`).default()),
      outfit: {
        familiar: $familiar`Garbage Fire`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Oliver's Place Agent",
      prepare: (): void => {
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
        cliExecute("terminal educate portscan");
      },
      completed: () => get("_speakeasyFreeFights", 0) >= 3,
      do: $location`An Unusually Quiet Barroom Brawl`,
      post: (): void => {
        if (have($item`burning newspaper`)) cliExecute("create burning paper crane");
      },
      combat: new CombatStrategy().macro(Macro.default()),
      outfit: {
        familiar: $familiar`Garbage Fire`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Oliver's Place Map",
      ready: () => get("_monstersMapped") < 3,
      prepare: (): void => {
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
        if (get("parkaMode") !== "dilophosaur") cliExecute("parka dilophosaur");
        if (have($effect`Spit Upon`)) equip($item`tiny stillsuit`);
      },
      completed: () => have($effect`Everything Looks Yellow`),
      post: () => set("_CSParkaYRUsed", true),
      // eslint-disable-next-line libram/verify-constants
      do: () => mapMonster($location`An Unusually Quiet Barroom Brawl`, $monster`goblin flapper`),
      combat: new CombatStrategy().macro(Macro.skill($skill`Spit jurassic acid`).abort()),
      outfit: {
        shirt: $item`Jurassic Parka`,
        offhand: $item`latte lovers member's mug`,
        familiar: $familiar`Melodramedary`,
        famequip: $item`dromedary drinking helmet`,
      },
    },
    {
      name: "DMT",
      prepare: (): void => {
        if (get("umbrellaState") !== "broken") cliExecute("umbrella ml");
      },
      completed: () => get("_machineTunnelsAdv") >= 5,
      do: (): void => {
        burnLibram(300, true);
        adv1($location`The Deep Machine Tunnels`, -1);
        if (get("_latteRefillsUsed") < 3) cliExecute("latte refill cinnamon pumpkin vanilla");
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Gulp Latte`)
          .if_($monster`Government agent`, Macro.trySkill($skill`Feel Envy`).default())
          .default()
      ),
      outfit: {
        shirt: $item`makeshift garbage shirt`,
        offhand: $item`latte lovers member's mug`,
        familiar: $familiar`Machine Elf`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 5 },
      post: (): void => {
        uneffect($effect`Aloysius' Antiphon of Aptitude`);
        uneffect($effect`Ur-Kel's Aria of Annoyance`);
        cliExecute("refresh all");
        while (itemAmount($item`BRICKO brick`) >= 8 && have($item`BRICKO eye brick`))
          create($item`BRICKO oyster`);
      },
    },
    {
      name: "Bricko Oyster",
      completed: () => get("camelSpit") >= 100 || !have($item`BRICKO oyster`),
      do: () => $item`BRICKO oyster`,
      combat: new CombatStrategy().macro(Macro.default()),
      limit: { tries: 2 },
      outfit: {
        familiar: $familiar`Melodramedary`,
        famequip: $item`dromedary drinking helmet`,
      },
    },
  ],
};
