import { Quest } from "../engine/task";
import {
  buy,
  cliExecute,
  create,
  Effect,
  equippedItem,
  getCampground,
  numericModifier,
  runChoice,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $skill,
  $slot,
  CommunityService,
  get,
  have,
  uneffect,
} from "libram";
import {
  acquiredOrExcluded,
  handleCustomBusks,
  handleCustomPulls,
  runTest,
  tryAcquiringEffect,
  tryAcquiringEffects,
  wishFor,
} from "../lib";
import { CombatStrategy } from "grimoire-kolmafia";
import Macro from "../combat";

const comTestMaximizerString = `-raw combat rate`;

export const NoncombatQuest: Quest = {
  name: "Noncombat",
  completed: () => CommunityService.Noncombat.isDone(),
  tasks: [
    {
      name: "Buy Porkpie-mounted Popper",
      ready: () => have($item`Clan VIP Lounge key`),
      completed: () => have($item`porkpie-mounted popper`),
      do: () => buy($item`porkpie-mounted popper`, 1),
      limit: { tries: 1 },
    },
    {
      name: "Photobooth NC Photo",
      ready: () => have($item`Clan VIP Lounge key`),
      completed: () => have($effect`Wild and Westy!`) || get("_photoBoothEffects", 0) >= 3,
      do: () => cliExecute("photobooth effect wild"),
      limit: { tries: 1 },
    },
    {
      name: "Use Shadow Lodestone",
      ready: () => have($item`Rufus's shadow lodestone`),
      completed: () => acquiredOrExcluded($effect`Shadow Waters`),
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
      name: "Favorite Bird (NC)",
      completed: () =>
        !have($skill`Visit your Favorite Bird`) ||
        acquiredOrExcluded($effect`Blessing of your favorite Bird`) ||
        get("_favoriteBirdVisited") ||
        !get("yourFavoriteBirdMods").includes("Combat Frequency") ||
        get("instant_saveFavoriteBird", false),
      do: () => useSkill($skill`Visit your Favorite Bird`),
      limit: { tries: 1 },
    },
    {
      name: "Obscuri Tea",
      completed: () =>
        acquiredOrExcluded($effect`Obscuri Tea`) ||
        get("_pottedTeaTreeUsed") ||
        get("instant_saveTeaTree", false) ||
        getCampground()["potted tea tree"] === undefined,
      do: () => {
        cliExecute(`teatree cuppa Obscuri tea`);
        use($item`cuppa Obscuri tea`, 1);
      },
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
          cliExecute(`Briefcase e ${comTestMaximizerString}`);
        const usefulEffects: Effect[] = [
          $effect`A Rose by Any Other Material`,
          $effect`Feeling Lonely`,
          $effect`Feeling Sneaky`,
          $effect`Gummed Shoes`,
          $effect`Hiding From Seekers`,
          $effect`Invisible Avatar`,
          $effect`Silent Running`,
          $effect`Smooth Movements`,
          $effect`The Sonata of Sneakiness`,
          $effect`Throwing Some Shade`,
          $effect`Ultra-Soft Steps`,

          // Famwt for Disgeist
          $effect`Blood Bond`,
          $effect`Leash of Linguini`,
          $effect`Empathy`,
          $effect`Puzzle Champ`,
        ];
        tryAcquiringEffects(usefulEffects, true);
        if (!handleCustomPulls("instant_comTestPulls", comTestMaximizerString)) {
          cliExecute(`maximize ${comTestMaximizerString}`); // To avoid maximizer bug, we invoke this once more
        }
        handleCustomBusks("instant_comTestBusks");

        if (
          // Seems to be a bug where numericModifier doesn't recognize the -10 granted by an unbreakable umbrella, so check for that manually
          have($skill`Aug. 13th: Left/Off Hander's Day!`) &&
          !get("instant_saveAugustScepter", false) &&
          (numericModifier(equippedItem($slot`off-hand`), "Combat Rate") < 0 ||
            equippedItem($slot`off-hand`) === $item`unbreakable umbrella`) &&
          CommunityService.Noncombat.actualCost() > 1 &&
          CommunityService.FamiliarWeight.isDone() // Only do this after the famwt test is done (if it isn't, we really shouldn't have shifted NC before famwt)
        ) {
          tryAcquiringEffect($effect`Offhand Remarkable`);
        }

        if (
          CommunityService.Noncombat.actualCost() >= 7 &&
          (have($item`mini kiwi`, 3) || have($item`mini kiwi antimilitaristic hippy petition`))
        ) {
          if (
            !have($item`mini kiwi antimilitaristic hippy petition`) &&
            !have($effect`Hippy Antimilitarism`)
          )
            create($item`mini kiwi antimilitaristic hippy petition`, 1);
          tryAcquiringEffect($effect`Hippy Antimilitarism`);
        }

        // If it saves us >= 6 turns, try using a wish
        if (CommunityService.Noncombat.actualCost() >= 7) wishFor($effect`Disquiet Riot`);
      },
      do: (): void => runTest(CommunityService.Noncombat),
      outfit: {
        familiar: have($familiar`Peace Turkey`) ? $familiar`Peace Turkey` : $familiar`Disgeist`,
        modifier: comTestMaximizerString,
      },
      post: (): void => {
        uneffect($effect`The Sonata of Sneakiness`);
      },
      limit: { tries: 1 },
    },
  ],
};
