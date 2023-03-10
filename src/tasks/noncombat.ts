import { Quest } from "../engine/task";
import { buy, cliExecute, Effect, print, runChoice, visitUrl } from "kolmafia";
import { $effect, $familiar, $item, CommunityService, get, have, Macro, uneffect } from "libram";
import { advCost, CommunityServiceTests, logTestSetup, tryAcquiringEffect } from "../lib";
import { CombatStrategy } from "grimoire-kolmafia";

export const NoncombatQuest: Quest = {
  name: "Noncombat",
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [
    {
      name: "Buy Porkpie-mounted Popper",
      completed: () => have($item`porkpie-mounted popper`),
      do: () => buy($item`porkpie-mounted popper`, 1),
      limit: { tries: 1 },
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
        runChoice(2);
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
          $effect`A Rose by Any Other Material`,
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
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));
        cliExecute("maximize -combat"); // To avoid maximizer bug, we invoke this once more
      },
      do: (): void => {
        const maxTurns = 12;
        const testTurns = advCost(CommunityServiceTests.COMTEST);
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
        }
        CommunityService.Noncombat.run(() => logTestSetup(CommunityServiceTests.COMTEST), maxTurns);
      },
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
