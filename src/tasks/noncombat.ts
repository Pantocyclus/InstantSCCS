import { Quest } from "../engine/task";
import { buy, cliExecute, Effect, visitUrl } from "kolmafia";
import { $effect, $familiar, $item, CommunityService, get, have, Macro, uneffect } from "libram";
import { CommunityServiceTests, logTestSetup, tryAcquiringEffect } from "../lib";
import { CombatStrategy } from "grimoire-kolmafia";

export const NoncombatQuest: Quest = {
  name: "Noncombat",
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [
    {
      name: "Buy Porkpie-mounted Popper",
      completed: () => have($item`porkpie-mounted popper`),
      do: () => buy($item`porkpie-mounted popper`, 1),
    },
    {
      name: "Use Shadow Lodestone",
      // eslint-disable-next-line libram/verify-constants
      ready: () => have($item`Rufus's shadow lodestone`),
      // eslint-disable-next-line libram/verify-constants
      completed: () => have($effect`Shadow Waters`),
      do: (): void => {
        // eslint-disable-next-line libram/verify-constants
        visitUrl("place.php?whichplace=town_right&action=townright_shadowrift");
      },
      choices: {
        1500: 2,
      },
      combat: new CombatStrategy().macro(Macro.abort()),
      limit: { tries: 1 },
    },
    {
      name: "Test",
      completed: () => CommunityService.Noncombat.isDone(),
      prepare: (): void => {
        if (have($item`Jurassic Parka`) && get("parkaMode") !== "pterodactyl")
          cliExecute("parka pterodactyl");
        if (get("_kgbClicksUsed") < 22 && have($item`Kremlin's Greatest Briefcase`))
          cliExecute("briefcase e -combat");
        const usefulEffects: Effect[] = [
          $effect`Feeling Lonely`,
          $effect`Gummed Shoes`,
          $effect`Invisible Avatar`,
          $effect`Silent Running`,
          $effect`Smooth Movements`,
          $effect`The Sonata of Sneakiness`,
          $effect`Throwing Some Shade`,

          // Famwt for Disgeist
          $effect`Blood Bond`,
          $effect`Leash of Linguini`,
          $effect`Empathy`,
          $effect`Puzzle Champ`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        cliExecute("maximize -combat"); // To avoid maximizer bug, we invoke this once more
      },
      do: () =>
        CommunityService.Noncombat.run(() => logTestSetup(CommunityServiceTests.COMTEST), 3),
      outfit: {
        familiar: $familiar`Disgeist`,
        modifier: "-combat",
      },
      post: (): void => {
        uneffect($effect`The Sonata of Sneakiness`);
      },
      limit: { tries: 1 },
    },
  ],
};
