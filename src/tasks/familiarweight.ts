import { CombatStrategy } from "grimoire-kolmafia";
import { cliExecute, create, Effect, print, use, useFamiliar } from "kolmafia";
import {
  $effect,
  $familiar,
  $familiars,
  $item,
  $location,
  $skill,
  CommunityService,
  get,
  have,
} from "libram";
import { Quest } from "../engine/task";
import { logTestSetup, tryAcquiringEffect } from "../lib";
import Macro from "../combat";
import { chooseHeaviestFamiliar, sugarItemsAboutToBreak } from "../engine/outfit";

export const FamiliarWeightQuest: Quest = {
  name: "Familiar Weight",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
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
          .abort()
      ),
      outfit: () => ({
        weapon: $item`Fourth of May Cosplay Saber`,
        familiar: $familiar`Cookbookbat`,
        avoid: sugarItemsAboutToBreak(),
      }),
      choices: { 1387: 3 },
      limit: { tries: 1 },
    },
    {
      name: "Tune Moon to Platypus",
      completed: () =>
        !have($item`hewn moon-rune spoon`) ||
        get("moonTuned") ||
        get("instant_saveMoonTune", false),
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
          $effect`Leash of Linguini`,
          $effect`Puzzle Champ`,
          $effect`Shortly Stacked`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));

        if (
          have($skill`Summon Clip Art`) &&
          !get("instant_saveClipArt", false) &&
          $familiars`Mini-Trainbot, Exotic Parrot`.some((fam) => have(fam))
        ) {
          if (!have($item`box of Familiar Jacks`)) create($item`box of Familiar Jacks`, 1);
          if (have($familiar`Mini-Trainbot`)) useFamiliar($familiar`Mini-Trainbot`);
          else useFamiliar($familiar`Exotic Parrot`);
          use($item`box of Familiar Jacks`, 1);
          cliExecute("maximize familiar weight");
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
            "red"
          );
        }
        CommunityService.FamiliarWeight.run(
          () => logTestSetup(CommunityService.FamiliarWeight),
          maxTurns
        );
      },
      outfit: () => ({ modifier: "familiar weight", familiar: chooseHeaviestFamiliar() }),
      limit: { tries: 1 },
    },
  ],
};
