import { Effect } from "kolmafia";
import { $effect, $familiar, CommunityService } from "libram";
import { Quest } from "../engine/task";
import { CommunityServiceTests, logTestSetup, tryAcquiringEffect } from "../lib";

export const FamiliarWeightQuest: Quest = {
  name: "Familiar Weight",
  completed: () => CommunityService.FamiliarWeight.isDone(),
  tasks: [
    {
      name: "Test",
      completed: () => CommunityService.FamiliarWeight.isDone(),
      prepare: (): void => {
        const usefulEffects: Effect[] = [
          $effect`Billiards Belligerence`,
          $effect`Blood Bond`,
          $effect`Do I Know You From Somewhere?`,
          $effect`Empathy`,
          $effect`Leash of Linguini`,
          // $effect`Puzzle Champ`,
          // $effect`Robot Friends`,
          // $effect`Shortly Stacked`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
      },
      do: () =>
        CommunityService.FamiliarWeight.run(() => logTestSetup(CommunityServiceTests.FAMTEST), 25),
      outfit: { modifier: "familiar weight", familiar: $familiar`Hovering Sombrero` },
      limit: { tries: 1 },
    },
  ],
};
