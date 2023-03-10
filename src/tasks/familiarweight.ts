import { CombatStrategy } from "grimoire-kolmafia";
import { cliExecute, create, Effect, print, use, useFamiliar } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  CommunityService,
  get,
  have,
  Macro,
} from "libram";
import { Quest } from "../engine/task";
import { advCost, CommunityServiceTests, logTestSetup, tryAcquiringEffect } from "../lib";

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
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        familiar: $familiar`Cookbookbat`,
      },
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
          $effect`Leash of Linguini`,
          $effect`Puzzle Champ`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));

        if (have($skill`Summon Clip Art`)) {
          if (!have($item`box of Familiar Jacks`)) create($item`box of Familiar Jacks`, 1);
          if (have($familiar`Mini-Crimbot`)) useFamiliar($familiar`Mini-Crimbot`);
          else useFamiliar($familiar`Exotic Parrot`);
          use($item`box of Familiar Jacks`, 1);
          cliExecute("maximize familiar weight");
        }
      },
      do: (): void => {
        const maxTurns = 50;
        const testTurns = advCost(CommunityServiceTests.FAMTEST);
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
        }
        CommunityService.FamiliarWeight.run(
          () => logTestSetup(CommunityServiceTests.FAMTEST),
          maxTurns
        );
      },
      outfit: { modifier: "familiar weight", familiar: $familiar`Cookbookbat` },
      limit: { tries: 1 },
    },
  ],
};
