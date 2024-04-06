import { CombatStrategy, OutfitSpec } from "grimoire-kolmafia";
import {
  adv1,
  autosell,
  buy,
  canadiaAvailable,
  changeMcd,
  cliExecute,
  create,
  currentMcd,
  drink,
  equip,
  getCampground,
  getWorkshed,
  haveEquipped,
  hermit,
  Item,
  itemAmount,
  min,
  myInebriety,
  myMaxhp,
  myMaxmp,
  myMeat,
  myMp,
  mySoulsauce,
  print,
  restoreHp,
  restoreMp,
  retrieveItem,
  reverseNumberology,
  runChoice,
  storageAmount,
  takeStorage,
  toInt,
  totalFreeRests,
  turnsPlayed,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $monsters,
  $skill,
  $slot,
  $stat,
  clamp,
  Clan,
  CombatLoversLocket,
  CommunityService,
  get,
  getBanishedMonsters,
  getKramcoWandererChance,
  have,
  haveInCampground,
  Pantogram,
  SongBoom,
} from "libram";
import { canConfigure, setConfiguration, Station } from "libram/dist/resources/2022/TrainSet";
import { Quest } from "../engine/task";
import {
  getGarden,
  goVote,
  mainStat,
  mainStatMaximizerStr,
  mainStatStr,
  tryAcquiringEffect,
} from "../lib";
import Macro from "../combat";
import { mapMonster } from "libram/dist/resources/2020/Cartography";
import {
  baseOutfit,
  chooseFamiliar,
  cookbookbat,
  melodramedary,
  unbreakableUmbrella,
} from "../engine/outfit";
import { excludedFamiliars } from "../resources";

const useParkaSpit = have($item`Fourth of May Cosplay Saber`) && have($skill`Feel Envy`);

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
      name: "Get Floundry item",
      completed: () => get("_floundryItemCreated") || get("instant_saveFloundry", false),
      do: (): void => {
        const getFloundryItem = () => {
          if (mainStat === $stat`Muscle`) {
            retrieveItem($item`fish hatchet`);
          } else if (mainStat === $stat`Mysticality`) {
            retrieveItem($item`codpiece`, 1);
            use($item`codpiece`, 1);
            create($item`oil cap`, 1);
            autosell($item`oil cap`, 1);
          } else if (mainStat === $stat`Moxie`) {
            retrieveItem($item`bass clarinet`);
            use($item`bass clarinet`, 1);
            autosell($item`white pixel`, 10);
          }
        };
        const floundryClan = get("instant_floundryClan", "");
        if (floundryClan.length === 0) getFloundryItem();
        else Clan.with(floundryClan, getFloundryItem);
      },
      limit: { tries: 1 },
    },
    {
      name: "Deck",
      ready: () => get("_deckCardsDrawn") === 0,
      completed: () =>
        get("_deckCardsDrawn") >= 10 ||
        (have($item`wrench`) && have($item`candlestick`)) ||
        !have($item`Deck of Every Card`) ||
        get("instant_saveDeck", false),
      do: (): void => {
        cliExecute("cheat wrench");
        cliExecute("cheat candlestick");
      },
      limit: { tries: 1 },
    },
    {
      name: "Update Replica Store Credits",
      completed: () =>
        !have($item`2002 Mr. Store Catalog`) || get("_2002MrStoreCreditsCollected", true),
      do: () =>
        visitUrl(`inv_use.php?whichitem=${toInt($item`2002 Mr. Store Catalog`)}&which=f0&pwd`),
      limit: { tries: 1 },
    },
    {
      name: "Use Meat Butler",
      completed: () =>
        !have($item`2002 Mr. Store Catalog`) ||
        get("availableMrStore2002Credits") <= get("instant_saveCatalogCredits", 0) ||
        get("instant_skipMeatButler", false) ||
        haveInCampground($item`Meat Butler`),
      do: (): void => {
        if (!have($item`Meat Butler`)) buy($coinmaster`Mr. Store 2002`, 1, $item`Meat Butler`);
        use($item`Meat Butler`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "KGB",
      completed: () =>
        get("_kgbClicksUsed") > 0 ||
        !have($item`Kremlin's Greatest Briefcase`) ||
        get("instant_saveKGBClicks", false),
      do: () => cliExecute("Briefcase e ml"),
      limit: { tries: 1 },
    },
    {
      name: "Restore mp",
      completed: () =>
        get("timesRested") >= totalFreeRests() - get("instant_saveFreeRests", 0) ||
        myMp() >= Math.min(200, myMaxmp()),
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
      outfit: { modifier: "myst, mp, -tie" },
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
      do: (): void => {
        if (storageAmount($item`borrowed time`) === 0 && !have($item`borrowed time`)) {
          print("Uh oh! You do not seem to have a borrowed time in Hagnk's", "red");
          print(
            "Try to purchase one from the mall with your meat from Hagnk's before re-running instantsccs",
            "red",
          );
        }
        use($item`borrowed time`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Numberology",
      ready: () => Object.keys(reverseNumberology()).includes("69"),
      completed: () =>
        get("_universeCalculated") >=
        (get("skillLevel144") > 3 ? 3 : get("skillLevel144")) - get("instant_saveNumberology", 0),
      do: () => cliExecute("numberology 69"),
      limit: { tries: 3 },
    },
    {
      name: "Summon Sugar Sheets",
      completed: () =>
        !have($skill`Summon Sugar Sheets`) ||
        get("instant_saveSugar", false) ||
        get("tomeSummons") >= 3 ||
        (have($skill`Summon Clip Art`) && !get("instant_saveClipArt", false)),
      do: (): void => {
        const sheetsToMake = 3 - get("tomeSummons");
        restoreMp(2 * sheetsToMake);
        useSkill($skill`Summon Sugar Sheets`, sheetsToMake);
      },
      limit: { tries: 1 },
    },
    {
      name: "Fold Sugar Sheets",
      completed: () => !have($item`sugar sheet`),
      do: (): void => {
        const nextMissingSugarItem =
          $items`sugar shorts, sugar chapeau, sugar shank`.find((it) => !have(it)) || $item`none`;
        create(nextMissingSugarItem);
      },
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
        ];
        if (get("_loveTunnelUsed") || !get("loveTunnelAvailable"))
          juiceBarItems.push($item`gremlin juice`);
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
      completed: () =>
        $items`plastic detective badge, bronze detective badge, silver detective badge, gold detective badge`.some(
          (badge) => have(badge),
        ) || !get("hasDetectiveSchool"),
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
          mainStatStr,
          "Hot Resistance: 2",
          "Maximum HP: 40",
          "Combat Rate: -5",
          "Weapon Damage: 20",
        );
      },
      limit: { tries: 1 },
    },
    {
      name: "Mummery",
      completed: () =>
        get("_mummeryMods").includes(`Experience (${mainStat})`) ||
        !have($item`mumming trunk`) ||
        get("instant_saveMummingTrunk", false),
      do: (): void => {
        cliExecute(`mummery ${mainStatMaximizerStr}`);
      },
      outfit: { familiar: chooseFamiliar() },
      limit: { tries: 1 },
    },
    {
      name: "BoomBox",
      completed: () =>
        SongBoom.song() === "These Fists Were Made for Punchin'" ||
        !have($item`SongBoom™ BoomBox`),
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
      do: (): void => {
        visitUrl("place.php?whichplace=town_right&action=townright_vote");
        goVote();
      },
      limit: { tries: 1 },
    },
    {
      name: "Daycare Nap",
      completed: () => get("_daycareNap") || !get("daycareOpen"),
      do: () => cliExecute("daycare item"),
      limit: { tries: 1 },
    },
    {
      name: "Scavenge",
      completed: () => get("_daycareGymScavenges") > 0 || !get("daycareOpen"),
      do: () => cliExecute("daycare scavenge free"),
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
      name: "Update Garbage Tote",
      completed: () => get("_garbageItemChanged") || !have($item`January's Garbage Tote`),
      do: () => cliExecute("fold broken champagne bottle"),
    },
    {
      name: "Grab Wishes",
      completed: () => !have($item`genie bottle`) || get("_genieWishesUsed") >= 3,
      do: () => cliExecute("genie item pocket"),
      limit: { tries: 3 },
    },
    {
      name: "Harvest Power Plant",
      completed: () =>
        !have($item`potted power plant`) ||
        get("_pottedPowerPlant")
          .split(",")
          .every((s) => s === "0"),
      do: (): void => {
        visitUrl(`inv_use.php?pwd&whichitem=${toInt($item`potted power plant`)}`);
        get("_pottedPowerPlant")
          .split(",")
          .forEach((s, i) => {
            if (s !== "0") visitUrl(`choice.php?pwd&whichchoice=1448&option=1&pp=${i + 1}`);
          });
      },
      limit: { tries: 1 },
    },
    {
      name: "Harvest Garden",
      completed: () =>
        [$item.none, $item`packet of mushroom spores`].includes(getGarden()) ||
        getCampground()[getGarden().name] === 0 ||
        get("instant_saveGarden", false),
      do: () => cliExecute("garden pick"),
      limit: { tries: 1 },
    },
    {
      name: "Looking Glass",
      completed: () => get("_lookingGlass"),
      do: () => visitUrl("clan_viplounge.php?action=lookingglass&whichfloor=2"),
      limit: { tries: 1 },
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
        const statStation: Station = {
          Muscle: Station.BRAWN_SILO,
          Mysticality: Station.BRAIN_SILO,
          Moxie: Station.GROIN_SILO,
        }[mainStatStr];
        use($item`model train set`);
        setConfiguration([
          Station.GAIN_MEAT, // meat (we don't gain meat during free banishes)
          Station.TOWER_FIZZY, // mp regen
          Station.TOWER_FROZEN, // hot resist (useful)
          Station.COAL_HOPPER, // double stat gain
          statStation, // main stats
          Station.VIEWING_PLATFORM, // all stats
          Station.WATER_BRIDGE, // +ML
          Station.CANDY_FACTORY, // candies (we don't get items during free banishes)
        ]);
      },
      limit: { tries: 1 },
    },
    {
      name: "Grab Trainset Meat",
      prepare: (): void => {
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "pitchfork style")
          cliExecute("umbrella weapon");
      },
      completed: () =>
        get("trainsetPosition") > 0 ||
        turnsPlayed() > 0 ||
        get("hasMaydayContract") ||
        get("instant_skipEarlyTrainsetMeat", false),
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Darts: Aim for the Bullseye`).attack(),
      ),
      outfit: () => ({
        ...baseOutfit(false),
        acc1:
          have($item`Everfull Dart Holster`) && !have($effect`Everything Looks Red`)
            ? $item`Everfull Dart Holster`
            : undefined,
        modifier: `${baseOutfit().modifier}, -equip miniature crystal ball, -equip backup camera, -equip Kramco Sausage-o-Matic™`,
      }),
      limit: { tries: 1 },
    },
    {
      name: "Set Apriling Band Helmet (NC)",
      completed: () => !have($item`Apriling band helmet`) || get("nextAprilBandTurn", 0) > 0,
      do: (): void => {
        visitUrl("inventory.php?&pwd&action=apriling");
        runChoice(1); // Get Apriling Band Patrol Beat
        runChoice(9); // March On
        visitUrl("main.php");
      },
      limit: { tries: 1 },
    },
    {
      name: "Get Apriling Band Instruments",
      completed: () =>
        !have($item`Apriling band helmet`) ||
        get("_aprilBandInstruments", 0) >=
          min(
            2,
            [
              "instant_saveAprilingBandQuadTom",
              "instant_saveAprilingBandSaxophone",
              "instant_saveAprilingBandStaff",
              "instant_saveAprilingBandPiccolo",
            ].filter((pref) => !get(pref, false)).length,
          ),
      do: (): void => {
        visitUrl("inventory.php?&pwd&action=apriling"); // Enter the choice adventure

        let quadTomValue = 4; // Free sandworm fights (saves 3 CBB turns)
        let saxophoneValue = 3; // 2 hotres (saves 2 hot test turns) + Lucky!
        const staffValue = 2; // +10% myst, +20sdmg, +10%sdmg
        let piccoloValue = 1; // +10 famwt, +120 famxp (potentially great for chest mimic)

        // If we aren't using the CBB nor melodramedary, we probably have enough fam turns
        if (!cookbookbat() && !melodramedary) quadTomValue -= 10;

        // If we can saber run with extinguisher, the hot res is probably not very useful
        if (have($item`Fourth of May Cosplay Saber`) && have($item`industrial fire extinguisher`))
          saxophoneValue -= 10;

        // If we can benefit greatly from the famxp, we should highly prioritize the piccolo
        // (to consider: but it isn't very useful if we already have other copyable sources available)
        if (
          (have($familiar`Chest Mimic`) &&
            excludedFamiliars.includes(toInt($familiar`Chest Mimic`))) ||
          (have($item`backup camera`) && get("instant_saveBackups", 0) < 11) // ||
          // (mainStat === $stat`Moxie` && !have($item`combat lover's locket`)) // to be added if we want to support mimic-egging an evil olive
        )
          piccoloValue += 10;

        // Pick the instruments
        [
          ...new Map<Item, [number, number]>([
            [$item`Apriling band quad tom`, [quadTomValue, 5]],
            [$item`Apriling band saxophone`, [saxophoneValue, 4]],
            [$item`Apriling band staff`, [staffValue, 7]],
            [$item`Apriling band piccolo`, [piccoloValue, 8]],
          ]),
        ]
          .filter(
            ([it]) =>
              !have(it) && // Remove option if we already have the item
              !get(`instant_save${it.name.replace(/( \w)/, (_, g) => g.toUpperCase())}`, false), // or if we chose to not acquire it
          )
          .sort(([, [, a]], [, [, b]]) => b - a) // Sort the instruments in decreasing priority value (the higher the better)
          .slice(0, 2 - get("_aprilBandInstruments", 0)) // We can acquire at most 2 instruments
          .forEach(([, [, choiceNumber]]) => runChoice(choiceNumber)); // Acquire the instrument

        runChoice(9); // March On
        visitUrl("main.php");
      },
      limit: { tries: 1 },
    },
    {
      name: "Soul Food",
      ready: () => mySoulsauce() >= 5,
      completed: () => mySoulsauce() < 5 || myMp() > myMaxmp() - 15 || !have($skill`Soul Food`),
      do: (): void => {
        while (mySoulsauce() >= 5 && myMp() <= myMaxmp() - 15) useSkill($skill`Soul Food`);
      },
    },
    {
      name: "Use Mind Control Device",
      completed: () => currentMcd() >= 10 || !canadiaAvailable(),
      do: () => changeMcd(11),
      limit: { tries: 1 },
    },
    {
      name: "Locket Evil Olive",
      prepare: (): void => {
        if (useParkaSpit) {
          cliExecute("parka dilophosaur");
        } else if (!have($item`yellow rocket`) && !have($effect`Everything Looks Yellow`)) {
          if (myMeat() < 250) throw new Error("Insufficient Meat to purchase yellow rocket!");
          buy($item`yellow rocket`, 1);
        }
        unbreakableUmbrella();
        if (haveEquipped($item`miniature crystal ball`)) equip($slot`familiar`, $item.none);
      },
      completed: () =>
        mainStat !== $stat`Moxie` ||
        CombatLoversLocket.monstersReminisced().includes($monster`Evil Olive`) ||
        !CombatLoversLocket.availableLocketMonsters().includes($monster`Evil Olive`) ||
        have($item`jumbo olive`),
      do: () => CombatLoversLocket.reminisce($monster`Evil Olive`),
      combat: new CombatStrategy().macro(
        (useParkaSpit ? Macro.trySkill($skill`Spit jurassic acid`) : new Macro())
          .tryItem($item`yellow rocket`)
          .abort(),
      ),
      outfit: () => ({
        ...baseOutfit(false),
        shirt: useParkaSpit ? $item`Jurassic Parka` : undefined,
        modifier: `${baseOutfit().modifier}, -equip miniature crystal ball`,
      }),
      post: (): void => {
        if (have($item`MayDay™ supply package`) && !get("instant_saveMayday", false))
          use($item`MayDay™ supply package`, 1);
        if (have($item`space blanket`)) autosell($item`space blanket`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Map Novelty Tropical Skeleton",
      prepare: (): void => {
        if (useParkaSpit) {
          cliExecute("parka dilophosaur");
        } else if (!have($item`yellow rocket`) && !have($effect`Everything Looks Yellow`)) {
          if (myMeat() < 250) throw new Error("Insufficient Meat to purchase yellow rocket!");
          buy($item`yellow rocket`, 1);
        }
        unbreakableUmbrella();
        if (haveEquipped($item`miniature crystal ball`)) equip($slot`familiar`, $item.none);
      },
      completed: () =>
        mainStat === $stat`Moxie` ||
        !have($skill`Map the Monsters`) ||
        get("_monstersMapped") >= 3 ||
        have($item`cherry`) ||
        (() => {
          // if we have another skeleton in the ice house, we don't need to map a novelty skeleton
          const banishes = get("banishedMonsters").split(":");
          const iceHouseIndex = banishes.map((string) => string.toLowerCase()).indexOf("ice house");
          if (iceHouseIndex === -1) return false;
          return ["remaindered skeleton", "factory-irregular skeleton", "swarm of skulls"].includes(
            banishes[iceHouseIndex - 1],
          );
        })(),
      do: () => mapMonster($location`The Skeleton Store`, $monster`novelty tropical skeleton`),
      combat: new CombatStrategy().macro(
        Macro.if_(
          $monster`novelty tropical skeleton`,
          (useParkaSpit ? Macro.trySkill($skill`Spit jurassic acid`) : new Macro()).tryItem(
            $item`yellow rocket`,
          ),
        ).abort(),
      ),
      outfit: () => ({
        ...baseOutfit(false),
        shirt: useParkaSpit ? $item`Jurassic Parka` : undefined,
        modifier: `${baseOutfit().modifier}, -equip miniature crystal ball, -equip Kramco Sausage-o-Matic™`,
      }),
      post: (): void => {
        if (have($item`MayDay™ supply package`) && !get("instant_saveMayday", false))
          use($item`MayDay™ supply package`, 1);
        if (have($item`space blanket`)) autosell($item`space blanket`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Novelty Tropical Skeleton",
      prepare: (): void => {
        if (useParkaSpit) {
          cliExecute("parka dilophosaur");
        } else if (!have($item`yellow rocket`) && !have($effect`Everything Looks Yellow`)) {
          if (myMeat() < 250) throw new Error("Insufficient Meat to purchase yellow rocket!");
          buy($item`yellow rocket`, 1);
        }
        unbreakableUmbrella();
        if (get("_snokebombUsed") === 0) restoreMp(50);
        if (haveEquipped($item`miniature crystal ball`)) equip($slot`familiar`, $item.none);
      },
      completed: () =>
        mainStat === $stat`Moxie` ||
        (have($item`cherry`) &&
          ($monsters`remaindered skeleton, swarm of skulls, factory-irregular skeleton, novelty tropical skeleton`.filter(
            (m) => Array.from(getBanishedMonsters().values()).includes(m),
          ).length >= (have($skill`Map the Monsters`) ? 2 : 3) ||
            $location`The Skeleton Store`.turnsSpent >= 3)),
      do: $location`The Skeleton Store`,
      combat: new CombatStrategy().macro(() =>
        Macro.if_(
          $monster`novelty tropical skeleton`,
          (useParkaSpit ? Macro.trySkill($skill`Spit jurassic acid`) : new Macro()).tryItem(
            $item`yellow rocket`,
          ),
        )
          .externalIf(
            !Array.from(getBanishedMonsters().keys()).includes($skill`Bowl a Curveball`),
            Macro.trySkill($skill`Bowl a Curveball`),
          )
          .externalIf(
            !have($effect`Everything Looks Green`) && haveEquipped($item`spring shoes`),
            Macro.trySkill($skill`Spring Kick`).trySkill($skill`Spring Away`),
          )
          .externalIf(
            !Array.from(getBanishedMonsters().keys()).includes($skill`Snokebomb`),
            Macro.trySkill($skill`Snokebomb`),
          )
          .externalIf(
            !Array.from(getBanishedMonsters().keys()).includes($skill`Monkey Slap`),
            Macro.trySkill($skill`Monkey Slap`),
          )
          .abort(),
      ),
      outfit: (): OutfitSpec => {
        return {
          shirt: useParkaSpit ? $item`Jurassic Parka` : undefined,
          offhand: $item`unbreakable umbrella`,
          acc2: $item`cursed monkey's paw`,
          familiar: chooseFamiliar(false),
          modifier: `${baseOutfit().modifier}, -equip miniature crystal ball, -equip Kramco Sausage-o-Matic™`,
        };
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
        have($item`Apriling band saxophone`) ||
        myMeat() <= 600 ||
        get("_cloversPurchased") >= 1 ||
        get("instant_skipDistilledFortifiedWine", false),
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
      ready: () =>
        have($item`Apriling band saxophone`) ||
        have($item`11-leaf clover`) ||
        have($effect`Lucky!`),
      completed: () => myInebriety() >= 1 || get("instant_skipDistilledFortifiedWine", false),
      do: (): void => {
        if (have($item`Apriling band saxophone`) && !have($effect`Lucky!`)) {
          visitUrl(
            `inventory.php?pwd&iid=${$item`Apriling band saxophone`.id}&action=aprilplay`,
            false,
          );
        }
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
      outfit: () => ({
        ...baseOutfit(),
        offhand: $item`Kramco Sausage-o-Matic™`,
      }),
      combat: new CombatStrategy().macro(Macro.default()),
    },
  ],
};
