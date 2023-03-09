import { Quest } from "../engine/task";
import { CommunityService } from "libram";
import { CommunityServiceTests, logTestSetup } from "../lib";
import { myAdventures } from "kolmafia";

export const CoilWireQuest: Quest = {
  name: "Coil Wire",
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [
    {
      name: "Test",
      ready: () => myAdventures() >= 60,
      completed: () => CommunityService.CoilWire.isDone(),
      do: () => CommunityService.CoilWire.run(() => logTestSetup(CommunityServiceTests.COILTEST)),
      limit: { tries: 1 },
    },
  ],
};
