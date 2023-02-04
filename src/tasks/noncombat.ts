import { cliExecute, getFuel } from "kolmafia";
import { $effect, $familiar, CommunityService, get, have, uneffect } from "libram";
import { fillTo } from "libram/dist/resources/2017/AsdonMartin";
import { Quest } from "../engine/task";
import { burnLibram, CommunityServiceTests, logTestSetup } from "../lib";

export const NoncombatQuest: Quest = {
  name: "Noncombat",
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [
    {
      name: "Fill Asdon",
      completed: () => getFuel() >= 37 || have($effect`Driving Stealthily`),
      do: (): void => {
        if (have($effect`Driving Recklessly`)) cliExecute("shrug driving recklessly");
        if (getFuel() < 37 && !have($effect`Driving Stealthily`)) fillTo(37);
      },
    },
    {
      name: "Test",
      completed: () => CommunityService.Noncombat.isDone(),
      prepare: (): void => {
        if (get("parkaMode") !== "pterodactyl") cliExecute("parka pterodactyl");
        cliExecute("maximize -combat");
      },
      do: () =>
        CommunityService.Noncombat.run(() => logTestSetup(CommunityServiceTests.COMTEST), 1),
      outfit: {
        familiar: $familiar`Disgeist`,
        modifier: "-combat",
      },
      effects: [
        $effect`Driving Stealthily`,
        $effect`Feeling Lonely`,
        $effect`Gummed Shoes`,
        $effect`Invisible Avatar`,
        $effect`Silent Running`,
        $effect`Smooth Movements`,
        $effect`The Sonata of Sneakiness`,
        $effect`Throwing Some Shade`,
        $effect`Blood Bond`,
        $effect`Leash of Linguini`,
        $effect`Puzzle Champ`,
      ],
      post: (): void => {
        uneffect($effect`The Sonata of Sneakiness`);
        burnLibram(300);
      },
      limit: { tries: 1 },
    },
  ],
};
