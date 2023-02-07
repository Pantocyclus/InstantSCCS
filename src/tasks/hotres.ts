import { CombatStrategy } from "grimoire-kolmafia";
import { buy, cliExecute, faxbot, use } from "kolmafia";
import { $effect, $familiar, $item, $monster, CommunityService, get, have } from "libram";
import Macro from "../combat";
import { Quest } from "../engine/task";
import { CommunityServiceTests, logTestSetup } from "../lib";

export const HotResQuest: Quest = {
  name: "Hot Res",
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [
    {
      name: "YR Fax Factory Worker",
      completed: () => get("_photocopyUsed"),
      prepare: (): void => {
        if (!have($effect`Everything Looks Yellow`) && !have($item`yellow rocket`))
          buy($item`yellow rocket`, 1);
      },
      do: (): void => {
        if (faxbot($monster`factory worker (female)`)) {
          if (get("photocopyMonster") !== $monster`factory worker (female)`)
            throw new Error("Failed to fax a factory worker (female)");
          use($item`photocopied monster`);
        }
      },
      outfit: { modifier: "myst, 0.1ML" },
      limit: { tries: 1 },
      combat: new CombatStrategy().macro(
        Macro.externalIf(
          !have($effect`Everything Looks Yellow`),
          Macro.tryItem($item`yellow rocket`)
        ).abort()
      ),
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
      ],
      limit: { tries: 1 },
    },
  ],
};
