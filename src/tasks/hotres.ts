import { CombatStrategy } from "grimoire-kolmafia";
import { cliExecute } from "kolmafia";
import { $effect, $familiar, $item, $location, $skill, CommunityService, get, have } from "libram";
import Macro from "../combat";
import { Quest } from "../engine/task";
import { CommunityServiceTests, logTestSetup } from "../lib";

export const HotResQuest: Quest = {
  name: "Hot Res",
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [
    {
      name: "Foam Suit",
      ready: () => get("_fireExtinguisherCharge") >= 10 && get("_saberForceUses") < 5,
      completed: () => have($effect`Fireproof Foam Suit`),
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Become a Cloud of Mist`)
          .skill($skill`Fire Extinguisher: Foam Yourself`)
          .trySkill($skill`%fn, spit on me!`)
          .skill($skill`Use the Force`)
      ),
      choices: { 1387: 3 },
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        back: $item`vampyric cloake`,
        offhand: $item`industrial fire extinguisher`,
        familiar: $familiar`Melodramedary`,
        famequip: $item`dromedary drinking helmet`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Test",
      prepare: (): void => {
        cliExecute("retrocape vampire hold");
        if (get("parkaMode") !== "pterodactyl") cliExecute("parka pterodactyl");
      },
      completed: () => CommunityService.HotRes.isDone(),
      do: () => CommunityService.HotRes.run(() => logTestSetup(CommunityServiceTests.HOTTEST), 1),
      outfit: {
        modifier: "hot res",
        familiar: $familiar`Exotic Parrot`,
      },
      effects: [
        $effect`Astral Shell`,
        $effect`Elemental Saucesphere`,
        $effect`Empathy`,
        $effect`Feeling Peaceful`,
        $effect`Hot-Headed`,
        $effect`Leash of Linguini`,
        $effect`Sleazy Hands`,
      ],
      limit: { tries: 1 },
    },
  ],
};
