import { CombatStrategy } from "grimoire-kolmafia";
import {
  cliExecute,
  create,
  Effect,
  equippedItem,
  familiarWeight,
  haveEffect,
  itemAmount,
  mySign,
  numericModifier,
  print,
  retrieveItem,
  toInt,
  use,
  useFamiliar,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $familiars,
  $item,
  $location,
  $skill,
  $slot,
  AprilingBandHelmet,
  CommunityService,
  get,
  have,
} from "libram";
import Macro from "../combat";
import { avoidDaylightShavingsHelm, sugarItemsAboutToBreak } from "../outfit";
import { Quest } from "../engine/task";
import {
  chooseHeaviestEquippedFamiliar,
  handleCustomPulls,
  logTestSetup,
  tryAcquiringEffect,
} from "../lib";
import { chooseFamiliar } from "../familiars";

const famTestMaximizerString = "familiar weight";

export const FamiliarWeightQuest: Quest = {
  name: "Familiar Weight",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
    {
      name: "Tune Moon to Platypus",
      completed: () =>
        !have($item`hewn moon-rune spoon`) ||
        get("moonTuned") ||
        get("instant_saveMoonTune", false) ||
        mySign() === "Platypus",
      do: (): void => {
        cliExecute("spoon platypus");
      },
    },
    {
      name: "Fold Burning Newspaper",
      completed: () => !have($item`burning newspaper`),
      do: () => cliExecute("create burning paper crane"),
      limit: { tries: 1 },
    },
    {
      name: "Grubby Wool Pants",
      completed: () => !have($item`grubby wool`) || have($item`grubby wool trousers`),
      do: () => create($item`grubby wool trousers`, 1),
      limit: { tries: 1 },
    },
    {
      name: "Meteor Shower",
      completed: () =>
        have($effect`Meteor Showered`) ||
        !have($item`Fourth of May Cosplay Saber`) ||
        !have($skill`Meteor Lore`) ||
        get("_saberForceUses") >= 5,
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Meteor Shower`)
          .trySkill($skill`Use the Force`)
          .abort(),
      ),
      outfit: () => ({
        weapon: $item`Fourth of May Cosplay Saber`,
        familiar: chooseFamiliar(false),
        avoid: [
          ...sugarItemsAboutToBreak(),
          ...(avoidDaylightShavingsHelm() ? [$item`Daylight Shavings Helmet`] : []),
        ],
      }),
      choices: { 1387: 3 },
      limit: { tries: 1 },
    },
    {
      name: "Test",
      completed: () => CommunityService.FamiliarWeight.isDone(),
      prepare: (): void => {
        const usefulEffects: Effect[] = [
          $effect`Billiards Belligerence`,
          $effect`Blood Bond`,
          $effect`Boxing Day Glow`,
          $effect`Do I Know You From Somewhere?`,
          $effect`Empathy`,
          $effect`Fidoxene`,
          $effect`Heart of Green`,
          $effect`Kindly Resolve`,
          $effect`Leash of Linguini`,
          $effect`Puzzle Champ`,
          $effect`Robot Friends`,
          $effect`Shortly Stacked`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));
        handleCustomPulls("instant_famTestPulls", famTestMaximizerString);

        if (have($item`love song of icy revenge`))
          use(
            Math.min(
              4 - Math.floor(haveEffect($effect`Cold Hearted`) / 5),
              itemAmount($item`love song of icy revenge`),
            ),
            $item`love song of icy revenge`,
          );

        const heaviestWeight = chooseHeaviestEquippedFamiliar(
          $familiars``.filter((f) => f !== $familiar`Homemade Robot`),
        ).expectedWeight;
        const commaWeight = 6 + 11 * get("homemadeRobotUpgrades");
        const useComma =
          $familiars`Comma Chameleon, Homemade Robot`.every((fam) => have(fam)) &&
          commaWeight > heaviestWeight;
        if (
          $familiars`Comma Chameleon, Homemade Robot`.every((fam) => have(fam)) &&
          get("homemadeRobotUpgrades") < 9
        ) {
          print(
            `Comma Chameleon is not at max weight, use ${
              9 - get("homemadeRobotUpgrades")
            } more parts on Homemade Robot.`,
            "red",
          );
        }
        const useTrainbot =
          have($familiar`Mini-Trainbot`) &&
          familiarWeight($familiar`Mini-Trainbot`) + 25 > heaviestWeight;
        const useParrot =
          have($familiar`Exotic Parrot`) &&
          familiarWeight($familiar`Exotic Parrot`) + 15 > heaviestWeight;

        const haveFamEquip = // We only need to check for robot gear since that has special handling
          have($item`box of Familiar Jacks`) || (useComma && have($item`homemade robot gear`));
        if (
          ((have($skill`Summon Clip Art`) && !get("instant_saveClipArt", false)) || // Either we can summon a box of jacks
            haveFamEquip) && // or we already have one
          (useTrainbot || useParrot || useComma)
        ) {
          if (!have($item`box of Familiar Jacks`) && have($skill`Summon Clip Art`))
            create($item`box of Familiar Jacks`, 1);
          if (useComma) {
            if (!have($item`homemade robot gear`)) {
              useFamiliar($familiar`Homemade Robot`);
              use($item`box of Familiar Jacks`, 1);
            }
            useFamiliar($familiar`Comma Chameleon`);
            visitUrl(
              `inv_equip.php?which=2&action=equip&whichitem=${toInt(
                $item`homemade robot gear`,
              )}&pwd`,
            );
            visitUrl("charpane.php");
          } else {
            if (useTrainbot) useFamiliar($familiar`Mini-Trainbot`);
            else useFamiliar($familiar`Exotic Parrot`);
            use($item`box of Familiar Jacks`, 1);
          }

          cliExecute("maximize familiar weight");
        }

        if (
          have($item`Apriling band piccolo`) &&
          get("_aprilBandPiccoloUses") < 3 &&
          CommunityService.FamiliarWeight.actualCost() > 1
        ) {
          retrieveItem($item`Apriling band piccolo`); // We can't play the piccolo if it's equipped on a non-current familiar
          Array(3 - get("_aprilBandPiccoloUses")).forEach(() =>
            AprilingBandHelmet.play($item`Apriling band piccolo`),
          );
        }

        if (
          have($skill`Aug. 13th: Left/Off Hander's Day!`) &&
          !get("instant_saveAugustScepter", false) &&
          numericModifier(equippedItem($slot`off-hand`), "Familiar Weight") > 0 &&
          CommunityService.FamiliarWeight.actualCost() > 1 &&
          CommunityService.FamiliarWeight.actualCost() <= 26 // We should really only be using this here if we have a chance of carrying OHR over to the other tests
        ) {
          tryAcquiringEffect($effect`Offhand Remarkable`);
        }
      },
      do: (): void => {
        const maxTurns = get("instant_famTestTurnLimit", 50);
        const testTurns = CommunityService.FamiliarWeight.actualCost();
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
          print(
            "You may also increase the turn limit by typing 'set instant_famTestTurnLimit=<new limit>'",
            "red",
          );
        }
        CommunityService.FamiliarWeight.run(
          () => logTestSetup(CommunityService.FamiliarWeight),
          maxTurns,
        );
      },
      outfit: () => ({
        modifier: famTestMaximizerString,
        familiar: chooseHeaviestEquippedFamiliar(
          $familiars``.filter((f) => f !== $familiar`Homemade Robot`),
        ).familiar,
      }),
      limit: { tries: 1 },
    },
  ],
};
