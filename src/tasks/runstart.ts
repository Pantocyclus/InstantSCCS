import {
  adv1,
  autosell,
  buy,
  cliExecute,
  create,
  drink,
  eat,
  inebrietyLimit,
  itemAmount,
  myAdventures,
  myFullness,
  myInebriety,
  myMeat,
  retrieveItem,
  runChoice,
  totalFreeRests,
  use,
  visitUrl,
} from "kolmafia";
import { $effect, $item, $items, $location, $skill, ensureEffect, get, have } from "libram";
import { Quest } from "../engine/task";

export const RunStartQuest: Quest = {
  name: "Run Start",
  completed: () => get("csServicesPerformed").split(",").length > 0,
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
      name: "Sell Pork Gems",
      completed: () => !have($item`pork elf goodies sack`),
      do: (): void => {
        use($item`pork elf goodies sack`);
        autosell($item`hamethyst`, itemAmount($item`hamethyst`));
        autosell($item`baconstone`, itemAmount($item`baconstone`));
        autosell($item`porquoise`, itemAmount($item`porquoise`));
      },
    },
    {
      name: "Get Codpiece",
      completed: () => get("_floundryItemCreated"),
      do: (): void => {
        cliExecute("floundry codpiece");
        use($item`codpiece`, 1);
        create($item`oil cap`, 1);
        autosell($item`oil cap`, 1);
      },
    },
    {
      name: "Restore mp",
      completed: () => get("timesRested") >= totalFreeRests(),
      prepare: (): void => {
        if (have($item`Newbiesport™ tent`)) use($item`Newbiesport™ tent`);
      },
      do: () => visitUrl("campground.php?action=rest"),
      outfit: { modifier: "mp" },
    },
    {
      name: "Inscrutable Gaze",
      completed: () => have($effect`Inscrutable Gaze`) || !have($skill`Inscrutable Gaze`),
      do: (): void => ensureEffect($effect`Inscrutable Gaze`),
      outfit: { modifier: "mp" },
    },
    {
      name: "Fire Crackers",
      completed: () => myFullness() >= 5,
      do: (): void => {
        buy($item`fire crackers`, 1);
        eat($item`fire crackers`, 1);
      },
    },
    {
      name: "Chewing Gum",
      completed: () =>
        myMeat() <= 600 || (have($item`turtle totem`) && get("_cloversPurchased") >= 2),
      do: (): void => {
        buy(1, $item`chewing gum on a string`);
        use(1, $item`chewing gum on a string`);
        while (
          $items`worthless trinket, worthless gewgaw, worthless knick-knack`.some((it) =>
            have(it)
          ) &&
          get("_cloversPurchased") < 3
        ) {
          retrieveItem($item`11-leaf clover`, 1);
        }
      },
      outfit: { pants: $item`designer sweatpants` },
      acquire: [{ item: $item`toy accordion` }],
      limit: { tries: 50 },
    },
    {
      name: "Get Distilled Fortified Wine",
      ready: () => have($item`11-leaf clover`) || have($effect`Lucky!`),
      completed: () => have($item`distilled fortified wine`) || myAdventures() >= 60,
      do: (): void => {
        if (!have($effect`Lucky!`)) use($item`11-leaf clover`);
        adv1($location`The Sleazy Back Alley`, -1);
        while (
          have($item`distilled fortified wine`) &&
          myAdventures() < 60 &&
          inebrietyLimit() - myInebriety() > 12 // Save 12 liver for 6 astrals and 3 2-drunk speakeasy drinks
        )
          drink($item`distilled fortified wine`, 1); // We likely don't have mp for Ode here
      },
    },
  ],
};
