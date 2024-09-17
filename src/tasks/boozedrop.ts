import { Quest } from "../engine/task";
import {
  adv1,
  autosell,
  buy,
  cliExecute,
  create,
  drink,
  eat,
  Effect,
  equip,
  faxbot,
  getWorkshed,
  hermit,
  inebrietyLimit,
  inMuscleSign,
  itemAmount,
  myInebriety,
  myMaxhp,
  myMeat,
  print,
  restoreHp,
  restoreMp,
  retrieveItem,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $effects,
  $familiar,
  $item,
  $location,
  $monster,
  $skill,
  $slot,
  AprilingBandHelmet,
  clamp,
  Clan,
  CommunityService,
  DaylightShavings,
  get,
  have,
  TrainSet,
  uneffect,
  withChoice,
} from "libram";
import {
  canConfigure,
  Cycle,
  setConfiguration,
  Station,
} from "libram/dist/resources/2022/TrainSet";
import { handleCustomPulls, logTestSetup, tryAcquiringEffect, wishFor } from "../lib";
import { sugarItemsAboutToBreak } from "../outfit";
import { CombatStrategy } from "grimoire-kolmafia";
import Macro, { haveFreeBanish } from "../combat";
import { forbiddenEffects } from "../resources";
import { chooseFamiliar } from "../familiars";

const boozeTestMaximizerString =
  "1 Item Drop, 2 Booze Drop, -equip broken champagne bottle, switch disembodied hand, -switch left-hand man";

export const BoozeDropQuest: Quest = {
  name: "Booze Drop",
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [
    {
      name: "Carol Ghost Buff",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        restoreMp(50);
      },
      completed: () =>
        !have($familiar`Ghost of Crimbo Carols`) ||
        !haveFreeBanish() ||
        $effects`Do You Crush What I Crush?, Holiday Yoked, Let It Snow/Boil/Stink/Frighten/Grease, All I Want For Crimbo Is Stuff, Crimbo Wrapping`.some(
          (ef) => have(ef),
        ),
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(Macro.banish().abort()),
      outfit: {
        offhand: $item`latte lovers member's mug`,
        acc1: $item`Kremlin's Greatest Briefcase`,
        acc2: $item`Lil' Doctor™ bag`,
        familiar: $familiar`Ghost of Crimbo Carols`,
        famequip: $item.none,
      },
      limit: { tries: 1 },
    },
    {
      name: "Configure Trainset",
      completed: () =>
        (getWorkshed() === $item`model train set` && !canConfigure()) || !TrainSet.have(),
      do: (): void => {
        const offset = get("trainsetPosition") % 8;
        const newStations: TrainSet.Station[] = [];
        const stations = [
          Station.COAL_HOPPER, // double hot resist
          Station.TOWER_FROZEN, // hot resist
          Station.GAIN_MEAT, // meat
          Station.TOWER_FIZZY, // mp regen
          Station.BRAIN_SILO, // myst stats
          Station.VIEWING_PLATFORM, // all stats
          Station.WATER_BRIDGE, // +ML
          Station.CANDY_FACTORY, // candies
        ] as Cycle;
        for (let i = 0; i < 8; i++) {
          const newPos = (i + offset) % 8;
          newStations[newPos] = stations[i];
        }
        setConfiguration(newStations as Cycle);
      },
      limit: { tries: 1 },
    },
    {
      name: "Acquire Clover",
      completed: () =>
        have($item`Apriling band saxophone`) ||
        have($item`11-leaf clover`) ||
        get("_cloversPurchased") >= 2 ||
        get("instant_skipCyclopsEyedrops", false),
      do: (): void => {
        buy(1, $item`chewing gum on a string`);
        use(1, $item`chewing gum on a string`);
        hermit($item`11-leaf clover`, 1);
      },
      limit: { tries: 50 },
    },
    {
      name: "Get Cyclops Eyedrops",
      completed: () =>
        have($item`cyclops eyedrops`) ||
        have($effect`One Very Clear Eye`) ||
        get("instant_skipCyclopsEyedrops", false),
      do: (): void => {
        if (have($item`Apriling band saxophone`) && !have($effect`Lucky!`))
          AprilingBandHelmet.play($item`Apriling band saxophone`);
        if (!have($effect`Lucky!`)) use($item`11-leaf clover`);
        if (!have($item`cyclops eyedrops`)) adv1($location`The Limerick Dungeon`, -1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Acquire Government",
      completed: () =>
        !have($item`government cheese`) ||
        get("lastAnticheeseDay") > 0 ||
        get("instant_skipGovernment", false),
      do: (): void => {
        inMuscleSign()
          ? retrieveItem($item`bitchin' meatcar`)
          : retrieveItem($item`Desert Bus pass`);
        if (!have($item`Desert Bus pass`) && !have($item`bitchin' meatcar`)) {
          autosell($item`government cheese`, itemAmount($item`government cheese`));
          return;
        }
        visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse");
        retrieveItem($item`government`);
      },
      limit: { tries: 1 },
    },
    {
      name: "Fax Ungulith",
      completed: () => get("_photocopyUsed") || have($item`corrupted marrow`),
      do: (): void => {
        if (have($item`photocopied monster`) && get("photocopyMonster") !== $monster`ungulith`) {
          cliExecute("fax send");
        }

        // If we're whitelisted to the CSLooping clan, use that to grab the ungulith instead
        if (Clan.getWhitelisted().find((c) => c.name.toLowerCase() === "csloopers unite")) {
          Clan.with("CSLoopers Unite", () => cliExecute("fax receive"));
        } else {
          if (!visitUrl("messages.php?box=Outbox").includes("#3626664")) {
            print("Requesting whitelist to CS clan...", "blue");
            cliExecute("csend to 3626664 || Requesting access to CS clan");
          }
          cliExecute("chat");
        }

        if (
          (have($item`photocopied monster`) || faxbot($monster`ungulith`)) &&
          get("photocopyMonster") === $monster`ungulith`
        ) {
          use($item`photocopied monster`);
        }
      },
      outfit: () => ({
        hat:
          DaylightShavings.nextBuff() === $effect`Musician's Musician's Moustache` &&
          !DaylightShavings.hasBuff() &&
          have($item`Daylight Shavings Helmet`)
            ? $item`Daylight Shavings Helmet`
            : undefined,
        back: $item`vampyric cloake`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: have($skill`Double-Fisted Skull Smashing`)
          ? $item`industrial fire extinguisher`
          : undefined,
        familiar: chooseFamiliar(false),
        modifier: "myst",
        avoid: sugarItemsAboutToBreak(),
      }),
      choices: { 1387: 3 },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Bowl Straight Up`)
          .trySkill($skill`Become a Bat`)
          .trySkill($skill`Fire Extinguisher: Polar Vortex`)
          .trySkill($skill`Use the Force`)
          .default(),
      ),
      limit: { tries: 5 },
    },
    {
      name: "Eat roasted vegetable of Jarlsberg",
      completed: () =>
        have($effect`Wizard Sight`) ||
        get("instant_saveRoastedVegetableItem", false) ||
        (!have($item`roasted vegetable of Jarlsberg`) &&
          itemAmount($item`Vegetable of Jarlsberg`) < 2),
      do: (): void => {
        if (
          itemAmount($item`Vegetable of Jarlsberg`) >= 2 &&
          !have($item`roasted vegetable of Jarlsberg`)
        )
          create($item`roasted vegetable of Jarlsberg`, 1);
        eat($item`roasted vegetable of Jarlsberg`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Drink Sacramento Wine",
      completed: () =>
        have($effect`Sacré Mental`) ||
        !have($item`Sacramento wine`) ||
        myInebriety() >= inebrietyLimit() ||
        get("instant_saveSacramentoWine", false),
      do: (): void => {
        if (myInebriety() < inebrietyLimit()) {
          tryAcquiringEffect($effect`Ode to Booze`);
          drink($item`Sacramento wine`, 1);
          uneffect($effect`Ode to Booze`);
        }
      },
      limit: { tries: 1 },
    },
    {
      name: "Drink Cabernet Sauvignon",
      prepare: (): void => {
        if (have($familiar`Left-Hand Man`)) {
          useFamiliar($familiar`Left-Hand Man`);
          equip($slot`familiar`, $item.none);
        }
      },
      completed: () =>
        have($effect`Cabernet Hunter`) ||
        (!have($item`bottle of Cabernet Sauvignon`) &&
          (!have($skill`Aug. 31st: Cabernet Sauvignon  Day!`) ||
            get("instant_saveAugustScepter", false))) ||
        myInebriety() + 3 > inebrietyLimit() ||
        get("instant_skipCabernetSauvignon", false),
      do: (): void => {
        if (!have($item`bottle of Cabernet Sauvignon`))
          useSkill($skill`Aug. 31st: Cabernet Sauvignon  Day!`);
        if (myInebriety() + 3 <= inebrietyLimit()) {
          tryAcquiringEffect($effect`Ode to Booze`);
          drink($item`bottle of Cabernet Sauvignon`);
          uneffect($effect`Ode to Booze`);
        }
      },
      limit: { tries: 1 },
    },
    {
      name: "Deck Wheel of Fortune",
      completed: () =>
        get("_deckCardsDrawn") > 10 ||
        have($effect`Fortune of the Wheel`) ||
        !have($item`Deck of Every Card`) ||
        get("instant_saveDeck", false),
      do: (): void => {
        cliExecute("cheat fortune");
      },
      limit: { tries: 1 },
    },
    {
      name: "Power Seed",
      completed: () =>
        !have($item`potted power plant`) ||
        (itemAmount($item`battery (AAA)`) < 5 && !have($item`battery (lantern)`)) ||
        get("instant_savePowerSeed", false),
      do: (): void => {
        if (itemAmount($item`battery (AAA)`) >= 5) create($item`battery (lantern)`, 1);
        use($item`battery (lantern)`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Pumpkin Juice",
      completed: () =>
        have($effect`Juiced and Jacked`) ||
        (!have($item`pumpkin`) && !have($item`pumpkin juice`)) ||
        get("instant_savePumpkins", false),
      do: (): void => {
        if (!have($item`pumpkin juice`)) create($item`pumpkin juice`, 1);
        use($item`pumpkin juice`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Loathing Idol Microphone",
      completed: () =>
        have($effect`Spitting Rhymes`) ||
        !have($item`2002 Mr. Store Catalog`) ||
        get("availableMrStore2002Credits") <= get("instant_saveCatalogCredits", 0) ||
        forbiddenEffects.includes($effect`Spitting Rhymes`),
      do: (): void => {
        if (!have($item`Loathing Idol Microphone`)) {
          buy($coinmaster`Mr. Store 2002`, 1, $item`Loathing Idol Microphone`);
        }
        withChoice(1505, 3, () => use($item`Loathing Idol Microphone`));
      },
      limit: { tries: 1 },
    },
    {
      name: "Favorite Bird (Item)",
      completed: () =>
        !have($skill`Visit your Favorite Bird`) ||
        get("_favoriteBirdVisited") ||
        !get("yourFavoriteBirdMods").includes("Item Drops") ||
        get("instant_saveFavoriteBird", false),
      do: () => useSkill($skill`Visit your Favorite Bird`),
      limit: { tries: 1 },
    },
    {
      name: "Mini Kiwi Icepick",
      completed: () => have($item`mini kiwi icepick`) || !have($item`mini kiwi`, 4),
      do: () => create($item`mini kiwi icepick`, 1),
      limit: { tries: 1 },
    },
    {
      name: "Buy Oversized Sparkler",
      ready: () =>
        myMeat() >= 1000 ||
        (have($item`mini kiwi icepick`) &&
          !have($skill`Double-Fisted Skull Smashing`) &&
          !have($familiar`Disembodied Hand`)),
      completed: () => have($item`oversized sparkler`),
      do: () => buy($item`oversized sparkler`, 1),
      limit: { tries: 1 },
    },
    {
      name: "Set Apriling Band Helmet (Booze)",
      completed: () => !AprilingBandHelmet.canChangeSong(),
      do: () => AprilingBandHelmet.conduct($effect`Apriling Band Celebration Bop`),
      limit: { tries: 1 },
    },
    {
      name: "Test",
      prepare: (): void => {
        const usefulEffects: Effect[] = [
          $effect`Beer Barrel Polka`,
          $effect`Blessing of the Bird`,
          $effect`Crunching Leaves`,
          $effect`Fat Leon's Phat Loot Lyric`,
          // $effect`Feeling Lost`,
          $effect`Fortunate Resolve`,
          $effect`Heart of Lavender`,
          $effect`I See Everything Thrice!`,
          $effect`Incredibly Well Lit`,
          $effect`items.enh`,
          $effect`Joyful Resolve`,
          $effect`One Very Clear Eye`,
          $effect`Pork Barrel`,
          $effect`Nearly All-Natural`,
          $effect`The Spirit of Taking`,
          $effect`Singer's Faithful Ocelot`,
          $effect`Steely-Eyed Squint`,
          $effect`Uncucumbered`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));

        if (have($familiar`Trick-or-Treating Tot`) && have($item`li'l ninja costume`)) {
          useFamiliar($familiar`Trick-or-Treating Tot`);
          equip($slot`familiar`, $item`li'l ninja costume`);
        }
        handleCustomPulls("instant_boozeTestPulls", boozeTestMaximizerString);

        // If it saves us >= 6 turns, try using a wish
        if (CommunityService.BoozeDrop.actualCost() >= 7) wishFor($effect`Infernal Thirst`);
      },
      completed: () => CommunityService.BoozeDrop.isDone(),
      do: (): void => {
        const maxTurns = get("instant_boozeTestTurnLimit", 30);
        const testTurns = CommunityService.BoozeDrop.actualCost();
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
          print(
            "You may also increase the turn limit by typing 'set instant_boozeTestTurnLimit=<new limit>'",
            "red",
          );
        }
        CommunityService.BoozeDrop.run(() => logTestSetup(CommunityService.BoozeDrop), maxTurns);
      },
      outfit: {
        modifier: boozeTestMaximizerString,
      },
      limit: { tries: 1 },
    },
  ],
};
