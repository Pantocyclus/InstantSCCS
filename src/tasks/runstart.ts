import { CombatStrategy } from "grimoire-kolmafia";
import {
  adv1,
  autosell,
  buy,
  changeMcd,
  cliExecute,
  create,
  currentMcd,
  drink,
  equip,
  getWorkshed,
  haveEquipped,
  hermit,
  Item,
  itemAmount,
  myInebriety,
  myMaxhp,
  myMaxmp,
  myMeat,
  myMp,
  restoreHp,
  restoreMp,
  retrieveItem,
  reverseNumberology,
  runChoice,
  takeStorage,
  totalFreeRests,
  use,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $monster,
  $skill,
  $slot,
  clamp,
  CommunityService,
  get,
  getKramcoWandererChance,
  have,
  Pantogram,
  SongBoom,
} from "libram";
import { canConfigure, setConfiguration, Station } from "libram/dist/resources/2022/TrainSet";
import { Quest } from "../engine/task";
import { tryAcquiringEffect } from "../lib";
import Macro from "../combat";

export const RunStartQuest: Quest = {
  name: "Run Start",
  completed: () => CommunityService.CoilWire.isDone(),
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
        if (!get("instant_savePorquoise", false))
          autosell($item`porquoise`, itemAmount($item`porquoise`));
      },
      limit: { tries: 1 },
    },
    {
      name: "Get Codpiece",
      completed: () => get("_floundryItemCreated") || get("instant_saveFloundry", false),
      do: (): void => {
        retrieveItem($item`codpiece`, 1);
        use($item`codpiece`, 1);
        create($item`oil cap`, 1);
        autosell($item`oil cap`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Deck",
      ready: () => get("_deckCardsDrawn") === 0,
      completed: () =>
        get("_deckCardsDrawn") >= 10 ||
        !have($item`Deck of Every Card`) ||
        get("instant_saveDeck", false),
      do: (): void => {
        cliExecute("cheat wrench");
        cliExecute("cheat candlestick");
      },
      limit: { tries: 1 },
    },
    {
      name: "KGB",
      completed: () =>
        get("_kgbClicksUsed") > 0 ||
        !have($item`Kremlin's Greatest Briefcase`) ||
        get("instant_saveKGBClicks", false),
      do: () => cliExecute("briefcase e ml"),
      limit: { tries: 1 },
    },
    {
      name: "Restore mp",
      completed: () => get("timesRested") >= totalFreeRests() || myMp() >= Math.min(200, myMaxmp()),
      prepare: (): void => {
        if (have($item`Newbiesport™ tent`)) use($item`Newbiesport™ tent`);
      },
      do: (): void => {
        if (get("chateauAvailable")) {
          visitUrl("place.php?whichplace=chateau&action=chateau_restbox");
        } else if (get("getawayCampsiteUnlocked")) {
          visitUrl("place.php?whichplace=campaway&action=campaway_tentclick");
        } else {
          visitUrl("campground.php?action=rest");
        }
      },
      outfit: { modifier: "myst, mp" },
    },
    {
      name: "Borrowed Time",
      prepare: (): void => {
        if (have($item`borrowed time`)) return;
        if (have($skill`Summon Clip Art`) && get("tomeSummons") < 3)
          create($item`borrowed time`, 1);
        else takeStorage($item`borrowed time`, 1);
      },
      completed: () => get("_borrowedTimeUsed"),
      do: () => use($item`borrowed time`, 1),
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
      name: "Chateau Desk",
      completed: () => get("_chateauDeskHarvested") || !get("chateauAvailable"),
      do: (): void => {
        visitUrl("place.php?whichplace=chateau&action=chateau_desk");
        const juiceBarItems: Item[] = [
          $item`clove-flavored lip balm`,
          $item`ectoplasm <i>au jus</i>`,
          $item`gremlin juice`,
        ];
        juiceBarItems.forEach((it) => {
          autosell(it, itemAmount(it));
        });
      },
      limit: { tries: 1 },
    },
    {
      name: "Cowboy Boots",
      completed: () => have($item`your cowboy boots`) || !get("telegraphOfficeAvailable"),
      do: () => visitUrl("place.php?whichplace=town_right&action=townright_ltt"),
      limit: { tries: 1 },
    },
    {
      name: "Detective Badge",
      completed: () => have($item`gold detective badge`) || !get("hasDetectiveSchool"),
      do: () => visitUrl("place.php?whichplace=town_wrong&action=townwrong_precinct"),
      limit: { tries: 1 },
    },
    {
      name: "Detective School",
      completed: () => get("_detectiveCasesCompleted", 0) >= 3 || !get("hasDetectiveSchool"),
      do: () => cliExecute("Detective Solver"),
      limit: { tries: 3 },
    },
    {
      name: "Pantogramming",
      completed: () =>
        Pantogram.havePants() ||
        !have($item`portable pantogram`) ||
        get("instant_savePantogram", false),
      do: (): void => {
        Pantogram.makePants(
          "Mysticality",
          "Hot Resistance: 2",
          "Maximum HP: 40",
          "Combat Rate: -5",
          "Weapon Damage: 20"
        );
      },
      limit: { tries: 1 },
    },
    {
      name: "Mummery",
      completed: () =>
        get("_mummeryMods").includes(`Experience (Mysticality)`) ||
        !have($item`mumming trunk`) ||
        get("instant_saveMummingTrunk", false),
      do: () => cliExecute("mummery myst"),
      outfit: { familiar: $familiar`Cookbookbat` },
      limit: { tries: 1 },
    },
    {
      name: "BoomBox",
      completed: () =>
        SongBoom.song() === "These Fists Were Made for Punchin'" || !have($item`SongBoom™ BoomBox`),
      do: () => SongBoom.setSong("These Fists Were Made for Punchin'"),
      limit: { tries: 1 },
    },
    {
      name: "Horsery",
      completed: () => get("_horsery") === "dark horse" || !get("horseryAvailable"),
      do: () => cliExecute("horsery dark"),
      limit: { tries: 1 },
    },
    {
      name: "Vote",
      completed: () => have($item`"I Voted!" sticker`) || !get("voteAlways"),
      do: () => cliExecute("VotingBooth.ash"),
      limit: { tries: 1 },
    },
    {
      name: "Scavenge",
      completed: () => get("_daycareGymScavenges") > 0 || !get("daycareOpen"),
      do: (): void => {
        visitUrl("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
        runChoice(3);
        runChoice(2);
      },
      limit: { tries: 1 },
    },
    {
      name: "Cosplay Saber",
      completed: () => get("_saberMod") > 0 || !have($item`Fourth of May Cosplay Saber`),
      do: () => cliExecute("saber familiar"),
      limit: { tries: 1 },
    },
    {
      name: "Bird Calendar",
      completed: () => have($skill`Seek out a Bird`) || !have($item`Bird-a-Day calendar`),
      do: () => use($item`Bird-a-Day calendar`),
      limit: { tries: 1 },
    },
    {
      name: "Lathe",
      prepare: () => visitUrl("shop.php?whichshop=lathe"),
      completed: () => have($item`weeping willow wand`) || !have($item`SpinMaster™ lathe`),
      do: () => retrieveItem($item`weeping willow wand`),
      limit: { tries: 1 },
    },
    {
      name: "Backup Camera",
      completed: () =>
        !have($item`backup camera`) ||
        (get("backupCameraMode") === "ml" && get("backupCameraReverserEnabled")),
      do: (): void => {
        cliExecute("backupcamera ml");
        if (!get("backupCameraReverserEnabled")) cliExecute("backupcamera reverser");
      },
    },
    {
      name: "Autumnaton",
      completed: () =>
        !have($item`autumn-aton`) || have($item`autumn leaf`) || have($effect`Crunching Leaves`),
      do: () => cliExecute("autumnaton send The Sleazy Back Alley"),
      limit: { tries: 1 },
    },
    {
      name: "Configure Trainset",
      completed: () =>
        !have($item`model train set`) ||
        (getWorkshed() === $item`model train set` && !canConfigure()),
      do: (): void => {
        use($item`model train set`);
        setConfiguration([
          Station.GAIN_MEAT, // meat
          Station.TOWER_FIZZY, // mp regen
          Station.COAL_HOPPER, // double myst gain
          Station.BRAIN_SILO, // myst stats
          Station.VIEWING_PLATFORM, // all stats
          Station.WATER_BRIDGE, // +ML
          Station.TOWER_FROZEN, // hot resist (useful)
          Station.CANDY_FACTORY, // candies
        ]);
      },
      limit: { tries: 1 },
    },
    {
      name: "Use Mind Control Device",
      completed: () => currentMcd() >= 10,
      do: () => changeMcd(11),
      limit: { tries: 1 },
    },
    {
      name: "Novelty Tropical Skeleton",
      ready: () => !have($effect`Everything Looks Yellow`) || have($item`cherry`),
      prepare: (): void => {
        if (!have($item`yellow rocket`) && !have($effect`Everything Looks Yellow`)) {
          if (myMeat() < 250) throw new Error("Insufficient Meat to purchase yellow rocket!");
          buy($item`yellow rocket`, 1);
        }
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        if (get("_snokebombUsed") === 0) restoreMp(50);
        if (haveEquipped($item`miniature crystal ball`)) equip($slot`familiar`, $item.none);
      },
      completed: () =>
        have($item`cherry`) && !have($item`cosmic bowling ball`) && get("_snokebombUsed") >= 1,
      do: $location`The Skeleton Store`,
      combat: new CombatStrategy().macro(
        Macro.if_($monster`novelty tropical skeleton`, Macro.tryItem($item`yellow rocket`))
          .trySkill($skill`Bowl a Curveball`)
          .trySkill($skill`Snokebomb`)
          .abort()
      ),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        familiar: $familiar`Cookbookbat`,
        modifier:
          "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape, -equip miniature crystal ball",
      },
      post: (): void => {
        if (have($item`MayDay™ supply package`) && !get("instant_saveMayday", false))
          use($item`MayDay™ supply package`, 1);
        if (have($item`space blanket`)) autosell($item`space blanket`, 1);
      },
      limit: { tries: 4 },
    },
    {
      name: "Chewing Gum",
      completed: () =>
        myMeat() <= 600 ||
        (have($item`turtle totem`) && have($item`saucepan`) && get("_cloversPurchased") >= 2),
      do: (): void => {
        buy(1, $item`chewing gum on a string`);
        use(1, $item`chewing gum on a string`);
        if (get("_cloversPurchased") < 3) hermit($item`11-leaf clover`, 1);
      },
      acquire: [{ item: $item`toy accordion` }],
      limit: { tries: 50 },
    },
    {
      name: "Get Distilled Fortified Wine",
      ready: () => have($item`11-leaf clover`) || have($effect`Lucky!`),
      completed: () => myInebriety() >= 1 || get("instant_skipDistilledFortifiedWine", false),
      do: (): void => {
        if (!have($effect`Lucky!`)) use($item`11-leaf clover`);
        if (!have($item`distilled fortified wine`)) adv1($location`The Sleazy Back Alley`, -1);
        while (have($item`distilled fortified wine`) && myInebriety() < 1) {
          tryAcquiringEffect($effect`Ode to Booze`);
          drink($item`distilled fortified wine`, 1);
        }
      },
      limit: { tries: 1 },
    },
    {
      name: "Kramco",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        restoreMp(50);
      },
      ready: () => getKramcoWandererChance() >= 1.0,
      completed: () => getKramcoWandererChance() < 1.0 || !have($item`Kramco Sausage-o-Matic™`),
      do: $location`Noob Cave`,
      outfit: {
        offhand: $item`Kramco Sausage-o-Matic™`,
        acc1: $item`codpiece`,
        familiar: $familiar`Cookbookbat`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      combat: new CombatStrategy().macro(Macro.default()),
    },
  ],
};
