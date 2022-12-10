import { CombatStrategy } from "grimoire-kolmafia";
import {
  cliExecute,
  eat,
  familiarWeight,
  haveEffect,
  itemAmount,
  myFamiliar,
  mySign,
  use,
  visitUrl,
  weightAdjustment,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $monster,
  $skill,
  CommunityService,
  ensureEffect,
  get,
  getKramcoWandererChance,
  have,
  set,
} from "libram";
import Macro from "../combat";
import { Quest } from "../engine/task";
import { CommunityServiceTests, logTestSetup } from "../lib";
import { burnLibram, meteorShowerTask } from "./common";

export const FamiliarWeightQuest: Quest = {
  name: "Familiar Weight",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
    {
      name: "Anticheese",
      completed: () => get("lastAnticheeseDay") === 1,
      do: () => visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse"),
      limit: { tries: 1 },
    },
    {
      name: "DRINK ME",
      completed: () => get("_lookingGlass"),
      do: () => visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2"),
      limit: { tries: 1 },
    },
    {
      name: "Sausage Goblin",
      completed: () => get("_sausageFights") > 2,
      ready: () => getKramcoWandererChance() >= 1.0,
      do: $location`The Neverending Party`,
      choices: { 1322: 2 },
      combat: new CombatStrategy().macro(
        Macro.ifHolidayWanderer(Macro.skill($skill`Reflex Hammer`).abort())
          .if_($monster`sausage goblin`, Macro.default())
          .abort()
      ),
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        offhand: $item`Kramco Sausage-o-Matic™`,
        shirt: $item`makeshift garbage shirt`,
        pants: $item`designer sweatpants`,
        acc1: $item`Kremlin's Greatest Briefcase`,
        acc3: $item`Lil' Doctor™ bag`,
        familiar: $familiar`Galloping Grill`,
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 1 },
      post: (): void => {
        eat(
          itemAmount($item`magical sausage`) + itemAmount($item`magical sausage casing`),
          $item`magical sausage`
        );
        burnLibram(300);
      },
    },
    {
      name: "Buffs",
      ready: () => !get("moonTuned"),
      completed: () => mySign() === "Platypus",
      do: (): void => {
        if (have($item`green candy heart`)) ensureEffect($effect`Heart of Green`);
        if (have($item`love song of icy revenge`))
          use(
            Math.min(
              4 - Math.floor(haveEffect($effect`Cold Hearted`) / 5),
              itemAmount($item`love song of icy revenge`)
            ),
            $item`love song of icy revenge`
          );
        if (have($item`resolution: be kinder`)) ensureEffect($effect`Kindly Resolve`);
        cliExecute("spoon platypus");
      },
      effects: [
        $effect`Billiards Belligerence`,
        $effect`Blood Bond`,
        $effect`Do I Know You From Somewhere?`,
        $effect`Empathy`,
        // $effect`Fidoxene`,
        $effect`Leash of Linguini`,
        $effect`Puzzle Champ`,
        $effect`Robot Friends`,
        $effect`Shortly Stacked`,
        $effect`You Can Really Taste the Dormouse`,
      ],
      limit: { tries: 1 },
    },
    {
      name: "Set Gingerbread Clock",
      completed: () => get("_gingerbreadCityTurns") > 0,
      do: $location`Gingerbread Civic Center`,
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        offhand: $item`familiar scrapbook`,
        pants: $item`designer sweatpants`,
        acc1: $item`Kremlin's Greatest Briefcase`,
        acc3: $item`Lil' Doctor™ bag`,
        familiar:
          itemAmount($item`sprinkles`) >= 50
            ? $familiar`Pair of Stomping Boots`
            : $familiar`Chocolate Lab`,
      },
      choices: { 1215: 1 },
      limit: { tries: 1 },
    },
    {
      name: "Gingerbread Earn Sprinkles",
      completed: () =>
        itemAmount($item`sprinkles`) >= 50 ||
        get("_gingerbreadCityTurns") >= 4 ||
        have($item`gingerbread spice latte`) ||
        have($effect`Whole Latte Love`) ||
        get("_chestXRayUsed") >= 3 ||
        get("_banderRunaways") >= (familiarWeight(myFamiliar()) + weightAdjustment()) / 5,
      do: $location`Gingerbread Upscale Retail District`,
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        offhand: $item`familiar scrapbook`,
        pants: $item`designer sweatpants`,
        acc1: $item`Kremlin's Greatest Briefcase`,
        acc3: $item`Lil' Doctor™ bag`,
        familiar: $familiar`Chocolate Lab`,
      },
      combat: new CombatStrategy().macro(
        Macro.externalIf(
          itemAmount($item`sprinkles`) < 50 && get("_chestXRayUsed") < 3,
          Macro.if_(
            $monster`gingerbread finance bro` || $monster`gingerbread tech bro`,
            Macro.skill($skill`Chest X-Ray`)
          )
            .trySkill($skill`Feel Hatred`)
            .trySkill($skill`Reflex Hammer`)
            .trySkill($skill`Snokebomb`)
            .trySkill($skill`KGB tranquilizer dart`)
            .abort()
        ).abort()
      ),
      limit: { tries: 3 },
    },
    {
      name: "Gingerbread Get Latte",
      ready: () =>
        itemAmount($item`sprinkles`) >= 50 &&
        get("_banderRunaways") < (familiarWeight(myFamiliar()) + weightAdjustment()) / 5,
      completed: () =>
        get("_gingerbreadCityTurns") >= 5 ||
        have($item`gingerbread spice latte`) ||
        have($effect`Whole Latte Love`),
      do: $location`Gingerbread Upscale Retail District`,
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        offhand: $item`familiar scrapbook`,
        pants: $item`designer sweatpants`,
        acc1: $item`Kremlin's Greatest Briefcase`,
        acc3: $item`Lil' Doctor™ bag`,
        familiar: $familiar`Pair of Stomping Boots`,
      },
      combat: new CombatStrategy().macro(Macro.runaway()),
      choices: {
        1208: 3,
      },
      post: (): void => {
        if (have($item`gingerbread spice latte`)) {
          ensureEffect($effect`Whole Latte Love`);
          set("_gingerbreadCityNoonCompleted", true);
        }
      },
      limit: { tries: 3 },
    },
    {
      name: "Get Shaving Buff",
      completed: () => get("_chestXRayUsed") >= 3 || have($effect`Toiletbrush Moustache`),
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(Macro.skill($skill`Chest X-Ray`).abort()),
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        offhand: $item`familiar scrapbook`,
        pants: $item`designer sweatpants`,
        acc1: $item`Kremlin's Greatest Briefcase`,
        acc3: $item`Lil' Doctor™ bag`,
        familiar: $familiar`Melodramedary`,
      },
      limit: { tries: 1 },
    },
    { ...meteorShowerTask },
    {
      name: "Test",
      completed: () => CommunityService.FamiliarWeight.isDone(),
      do: () =>
        CommunityService.FamiliarWeight.run(() => logTestSetup(CommunityServiceTests.FAMTEST), 25),
      outfit: { modifier: "familiar weight", familiar: $familiar`Exotic Parrot` },
      limit: { tries: 1 },
    },
  ],
};
