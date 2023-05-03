import { Quest } from "../engine/task";
import { CommunityService } from "libram";
import { logTestSetup } from "../lib";

export const CoilWireQuest: Quest = {
  name: "Coil Wire",
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [
    {
      name: "Test",
      completed: () => CommunityService.CoilWire.isDone(),
      do: () => CommunityService.CoilWire.run(() => logTestSetup(CommunityService.CoilWire)),
      limit: { tries: 1 },
    },
  ],
};
