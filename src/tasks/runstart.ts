import {
  availableAmount,
  cliExecute,
  getCampground,
  retrieveItem,
  reverseNumberology,
  runChoice,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import { $effect, $familiar, $item, $skill, $stat, get, have, SongBoom } from "libram";
import { mainStat } from "../combat";
import { Quest } from "../engine/task";

export const RunStartQuest: Quest = {
  name: "Run Start",
  tasks: [
    {
      name: "Council",
      completed: () => get("lastCouncilVisit") > 0,
      do: () => visitUrl("council.php"),
    },
    {
      name: "Toot",
      prepare: () => visitUrl("tutorial.php?action=toot"),
      completed: () =>
        get("questM05Toot") === "finished" && !have($item`letter from King Ralph XI`),
      do: () => use($item`letter from King Ralph XI`),
      limit: { tries: 1 },
    },
    {
      name: "Skeleton Store",
      completed: () => get("questM23Meatsmith") !== "unstarted",
      do: (): void => {
        visitUrl("shop.php?whichshop=meatsmith&action=talk");
        runChoice(1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Overgrown Lot",
      completed: () => get("questM24Doc") !== "unstarted",
      do: (): void => {
        visitUrl("shop.php?whichshop=doc&action=talk");
        runChoice(1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Madness Bakery",
      completed: () => get("questM25Armorer") !== "unstarted",
      do: (): void => {
        visitUrl("shop.php?whichshop=armory&action=talk");
        runChoice(1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Numberology",
      ready: () => Object.keys(reverseNumberology()).includes("69"),
      completed: () =>
        get("_universeCalculated") >= (get("skillLevel144") > 3 ? 3 : get("skillLevel144")),
      do: () => cliExecute("numberology 69"),
      limit: { tries: 3 },
    },
    {
      name: "Borrowed Time",
      completed: () => get("_borrowedTimeUsed"),
      do: () => use($item`borrowed time`),
      acquire: [{ item: $item`borrowed time` }],
      limit: { tries: 1 },
    },
    {
      name: "Chateau Desk",
      completed: () => get("_chateauDeskHarvested"),
      do: () => visitUrl("place.php?whichplace=chateau&action=chateau_desk"),
      limit: { tries: 1 },
    },
    {
      name: "Deck",
      ready: () => get("_deckCardsDrawn") === 0,
      completed: () => get("_deckCardsDrawn") >= 15,
      do: (): void => {
        cliExecute("cheat island");
        cliExecute("cheat ancestral recall");
        cliExecute("cheat forest");
      },
      limit: { tries: 1 },
      post: (): void => {
        while (have($item`blue mana`) && get("_ancestralRecallCasts") < 10)
          useSkill($skill`Ancestral Recall`);
      },
    },
    {
      name: "Cowboy Boots",
      completed: () => have($item`your cowboy boots`),
      do: () => visitUrl("place.php?whichplace=town_right&action=townright_ltt"),
      limit: { tries: 1 },
    },
    {
      name: "Detective Badge",
      completed: () => have($item`gold detective badge`),
      do: () => visitUrl("place.php?whichplace=town_wrong&action=townwrong_precinct"),
      limit: { tries: 1 },
    },
    /* {
      name: "Pantogramming",
      completed: () => Pantogram.havePants(),
      do: (): void => {
        Pantogram.makePants(
          "Mysticality",
          "Hot Resistance: 2",
          "Maximum HP: 40",
          "Combat Rate: -5",
          "Spell Damage Percent: 20"
        );
      },
      limit: { tries: 1 },
    }, */
    {
      name: "Mummery",
      completed: () => get("_mummeryMods").includes(`Experience (${mainStat})`),
      do: () =>
        cliExecute(
          `mummery ${
            mainStat === $stat`Muscle` ? "mus" : mainStat === $stat`Mysticality` ? "myst" : "mox"
          }`
        ),
      outfit: { familiar: $familiar`Melodramedary` },
      limit: { tries: 1 },
    },
    {
      name: "BoomBox",
      completed: () => SongBoom.song() === "Total Eclipse of Your Meat",
      do: () => SongBoom.setSong("Total Eclipse of Your Meat"),
      limit: { tries: 1 },
    },
    {
      name: "Horsery",
      completed: () => get("_horsery") === "dark horse",
      do: () => cliExecute("horsery dark"),
      limit: { tries: 1 },
    },
    {
      name: "Vote",
      completed: () => have($item`"I Voted!" sticker`),
      do: () => cliExecute("VotingBooth.ash"),
      limit: { tries: 1 },
    },
    {
      name: "Scavenge",
      completed: () => get("_daycareGymScavenges") > 0,
      do: (): void => {
        visitUrl("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
        runChoice(3);
        runChoice(2);
      },
      limit: { tries: 1 },
    },
    {
      name: "Cosplay Saber",
      completed: () => get("_saberMod") > 0,
      do: () => cliExecute("saber familiar"),
      limit: { tries: 1 },
    },
    {
      name: "Bird Calendar",
      completed: () => have($skill`Seek out a Bird`),
      do: () => use($item`Bird-a-Day calendar`),
      limit: { tries: 1 },
    },

    {
      name: "Lathe",
      prepare: () => visitUrl("shop.php?whichshop=lathe"),
      completed: () => have($item`weeping willow wand`),
      do: () => retrieveItem($item`weeping willow wand`),
      limit: { tries: 1 },
    },
    {
      name: "Backup Camera",
      completed: () => get("backupCameraMode") === "ml",
      do: () => cliExecute("backupcamera ml"),
      limit: { tries: 1 },
    },
    {
      name: "Backup Camera Reverser",
      completed: () => get("backupCameraReverserEnabled"),
      do: () => cliExecute("backupcamera reverser"),
      limit: { tries: 1 },
    },
    {
      name: "Garden",
      completed: () => getCampground()[$item`peppermint sprout`.name] === 0,
      do: () => cliExecute("garden pick"),
      limit: { tries: 1 },
    },
    {
      name: "Autumnaton",
      completed: () =>
        availableAmount($item`autumn-aton`) === 0 ||
        have($item`autumn leaf`) ||
        have($effect`Crunching Leaves`),
      do: () => cliExecute("autumnaton send The Sleazy Back Alley"),
      limit: { tries: 1 },
    },
  ],
};
