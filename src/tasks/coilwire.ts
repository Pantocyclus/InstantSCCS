import { Quest } from "../engine/task";
import { takeStorage, use } from "kolmafia";
import { $item, CommunityService, get } from "libram";
import { CommunityServiceTests, logTestSetup } from "../lib";

export const CoilWireQuest: Quest = {
  name: "Coil Wire",
  completed: () => CommunityService.CoilWire.isDone(),
  tasks: [
    {
      name: "Use Borrowed Time",
      completed: () => get("_borrowedTimeUsed"),
      do: (): void => {
        takeStorage($item`borrowed time`, 1);
        use($item`borrowed time`, 1);
      },
    },
    {
      name: "Test",
      completed: () => CommunityService.CoilWire.isDone(),
      do: () => CommunityService.CoilWire.run(() => logTestSetup(CommunityServiceTests.COILTEST)),
    },
  ],
};
