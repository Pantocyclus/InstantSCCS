import { Quest } from "../engine/task";
import { buy, cliExecute, Effect, print, runChoice, visitUrl } from "kolmafia";
import { $effect, $familiar, $item, CommunityService, get, have, uneffect } from "libram";
import { logTestSetup, tryAcquiringEffect, wishFor } from "../lib";
import { CombatStrategy } from "grimoire-kolmafia";
import Macro from "../combat";

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
      ready: () => have($item`Rufus's shadow lodestone`),
      completed: () => have($effect`Shadow Waters`),
      do: (): void => {
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
        if (
          get("_kgbClicksUsed") < 22 &&
          have($item`Kremlin's Greatest Briefcase`) &&
          !get("instant_saveKGBClicks", false)
        )
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
        // If it saves us >= 6 turns, try using a wish
        if (CommunityService.Noncombat.actualCost() >= 7) wishFor($effect`Disquiet Riot`);
      },
      do: (): void => {
        const maxTurns = get("instant_comTestTurnLimit", 12);
        const testTurns = CommunityService.Noncombat.actualCost();
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
          print(
            "You may also increase the turn limit by typing 'set instant_comTestTurnLimit=<new limit>'",
            "red"
          );
        }
        CommunityService.Noncombat.run(() => logTestSetup(CommunityService.Noncombat), maxTurns);
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
