import { $effect, $familiar, CommunityService, uneffect } from "libram";
import { Quest } from "../engine/task";
import { CommunityServiceTests, logTestSetup } from "../lib";
import { burnLibram } from "./common";

export const NoncombatQuest: Quest = {
  name: "Noncombat",
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [
    {
      name: "Test",
      completed: () => CommunityService.Noncombat.isDone(),
      do: () =>
        CommunityService.Noncombat.run(() => logTestSetup(CommunityServiceTests.COMTEST), 1),
      outfit: {
        familiar: $familiar`Disgeist`,
        modifier: "-combat",
      },
      effects: [
        $effect`Blessing of the Bird`,
        $effect`Feeling Lonely`,
        $effect`Gummed Shoes`,
        $effect`Invisible Avatar`,
        $effect`Silent Running`,
        $effect`Smooth Movements`,
        $effect`The Sonata of Sneakiness`,
        $effect`Throwing Some Shade`,
      ],
      post: (): void => {
        uneffect($effect`The Sonata of Sneakiness`);
        burnLibram(300);
      },
      limit: { tries: 1 },
    },
  ],
};
