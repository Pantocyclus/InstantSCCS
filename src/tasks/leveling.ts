import { Quest } from "../engine/task";
import {
  adv1,
  autosell,
  buy,
  chew,
  cliExecute,
  create,
  drink,
  eat,
  Effect,
  effectModifier,
  equip,
  equippedItem,
  getWorkshed,
  haveEffect,
  haveEquipped,
  holiday,
  inebrietyLimit,
  inHardcore,
  Item,
  itemAmount,
  Location,
  Monster,
  mpCost,
  myBasestat,
  myClass,
  myFamiliar,
  myHash,
  myHp,
  myInebriety,
  myLevel,
  myMaxhp,
  myMaxmp,
  myMeat,
  myMp,
  mySoulsauce,
  print,
  putCloset,
  restoreHp,
  restoreMp,
  retrieveItem,
  runChoice,
  storageAmount,
  takeStorage,
  toInt,
  toItem,
  totalFreeRests,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $coinmaster,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $monsters,
  $skill,
  $slot,
  $stat,
  AprilingBandHelmet,
  ChestMimic,
  clamp,
  CombatLoversLocket,
  ensureEffect,
  get,
  getBanishedMonsters,
  getKramcoWandererChance,
  have,
  MayamCalendar,
  set,
  SongBoom,
  SourceTerminal,
  TunnelOfLove,
  uneffect,
  Witchess,
  withChoice,
} from "libram";
import { CombatStrategy, OutfitSpec } from "grimoire-kolmafia";
import {
  abstractionXpEffect,
  abstractionXpItem,
  bestShadowRift,
  burnLibram,
  canPull,
  chooseLibram,
  generalStoreXpEffect,
  getSynthColdBuff,
  getSynthExpBuff,
  getValidComplexCandyPairs,
  haveCBBIngredients,
  mainStat,
  mainStatMaximizerStr,
  mainStatStr,
  overleveled,
  reagentBalancerEffect,
  reagentBalancerIngredient,
  reagentBalancerItem,
  reagentBoosterEffect,
  reagentBoosterIngredient,
  reagentBoosterItem,
  refillLatte,
  sendAutumnaton,
  snapperXpItem,
  synthExpBuff,
  targetBaseMainStat,
  targetBaseMainStatGap,
  tryAcquiringEffect,
  useCenser,
  useParkaSpit,
  wishFor,
  xpWishEffect,
} from "../lib";
import { baseOutfit, docBag, garbageShirt, unbreakableUmbrella } from "../outfit";
import Macro, { haveFreeBanish } from "../combat";
import { forbiddenEffects } from "../resources";
import { mapMonster } from "libram/dist/resources/2020/Cartography";
import { chooseQuest, rufusTarget } from "libram/dist/resources/2023/ClosedCircuitPayphone";

const useCinch = !get("instant_saveCinch", false);
const baseBoozes = $items`bottle of rum, boxed wine, bottle of gin, bottle of vodka, bottle of tequila, bottle of whiskey`;
const freeFightMonsters: Monster[] = $monsters`Witchess Bishop, Witchess King, Witchess Witch, sausage goblin, Eldritch Tentacle`;
const craftedCBBFoods: Item[] = $items`honey bun of Boris, roasted vegetable of Jarlsberg, Pete's rich ricotta, plain calzone`;
const craftedCBBEffects: Effect[] = craftedCBBFoods.map((it) => effectModifier(it, "effect"));
let triedCraftingCBBFoods = false;

const LOVEquip =
  mainStatStr === $stat`Muscle`
    ? "LOV Eardigan"
    : mainStatStr === $stat`Mysticality`
      ? "LOV Epaulettes"
      : "LOV Earring";

const muscleList: Effect[] = [
  $effect`Seal Clubbing Frenzy`,
  $effect`Patience of the Tortoise`,
  $effect`Disdain of the War Snapper`,
  $effect`Go Get 'Em, Tiger!`,
  $effect`Muddled`,
  $effect`Lack of Body-Building`,
  $effect`Adrenaline Rush`,
  // Weapon dmg
  $effect`Carol of the Bulls`,
];

const mysticalityList: Effect[] = [
  $effect`Pasta Oneness`,
  $effect`Saucemastery`,
  $effect`Disdain of She-Who-Was`,
  $effect`Glittering Eyelashes`,
  $effect`Uncucumbered`,
  $effect`We're All Made of Starfish`,
  $effect`Sparkling Consciousness`,
  // Spell dmg
  $effect`Carol of the Hells`,
];

const moxieList: Effect[] = [
  $effect`Disco State of Mind`,
  $effect`Mariachi Mood`,
  $effect`Butt-Rock Hair`,
  $effect`Ten out of Ten`,
  $effect`Pomp & Circumsands`,
  $effect`Sneaky Serpentine Subtlety`,
  // Weapon dmg
  $effect`Carol of the Bulls`,
];

const statEffects =
  mainStatStr === `Muscle`
    ? muscleList
    : mainStatStr === `Mysticality`
      ? mysticalityList
      : moxieList;

const usefulEffects: Effect[] = [
  // Stats
  $effect`Big`,
  $effect`Feeling Excited`,
  $effect`Triple-Sized`,
  $effect`substats.enh`,
  $effect`Hulkien`,
  $effect`Broad-Spectrum Vaccine`,
  // $effect`Think Win-Lose`,
  // $effect`Confidence of the Votive`,
  $effect`Song of Bravado`,
  ...statEffects,

  // ML
  $effect`Pride of the Puffin`,
  $effect`Drescher's Annoying Noise`,
  $effect`Ur-Kel's Aria of Annoyance`,

  // Xp
  $effect`Carol of the Thrills`,

  // Songs
  $effect`Stevedave's Shanty of Superiority`,
  $effect`Ur-Kel's Aria of Annoyance`,
  $effect`Aloysius' Antiphon of Aptitude`,

  // Spell dmg
];

const prismaticEffects: Effect[] = [
  $effect`Frostbeard`,
  $effect`Intimidating Mien`,
  $effect`Pyromania`,
  $effect`Rotten Memories`,
  $effect`Takin' It Greasy`,
  $effect`Your Fifteen Minutes`,
  $effect`Bendin' Hell`,
];

const wdmgEffects: Effect[] = [
  $effect`Carol of the Bulls`,
  $effect`Disdain of the War Snapper`,
  $effect`Frenzied, Bloody`,
  $effect`Jackasses' Symphony of Destruction`,
  $effect`Rage of the Reindeer`,
  $effect`Scowl of the Auk`,
  $effect`Song of the North`,
  $effect`Tenacity of the Snapper`,
];

export function powerlevelingLocation(): Location {
  if (get("neverendingPartyAlways")) return $location`The Neverending Party`;
  else if (get("stenchAirportAlways") || get("_stenchAirportToday"))
    return $location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`;
  else if (get("hotAirportAlways")) return $location`The SMOOCH Army HQ`;
  else if (get("coldAirportAlways")) return $location`VYKEA`;
  else if (get("sleazeAirportAlways")) return $location`Sloppy Seconds Diner`;
  else if (get("spookyAirportAlways")) return $location`The Deep Dark Jungle`;

  return $location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`; // Default location
}

function sellMiscellaneousItems(): void {
  const items: Item[] = [
    $item`cardboard ore`,
    $item`hot buttered roll`,
    $item`toast`,
    $item`meat paste`,
    $item`meat stack`,
    $item`jar of swamp honey`,
    $item`turtle voicebox`,
    $item`grody jug`,
    $item`gas can`,
    $item`Middle of the Road™ brand whiskey`,
    $item`neverending wallet chain`,
    $item`pentagram bandana`,
    $item`denim jacket`,
    $item`ratty knitted cap`,
    $item`jam band bootleg`,
    $item`Purple Beast energy drink`,
    $item`cosmetic football`,
    $item`shoe ad T-shirt`,
    $item`pump-up high-tops`,
    $item`noticeable pumps`,
    $item`surprisingly capacious handbag`,
    $item`electronics kit`,
    $item`PB&J with the crusts cut off`,
    $item`dorky glasses`,
    $item`ponytail clip`,
    $item`paint palette`,
    $item`goat cheese`,
    ...baseBoozes,
  ];
  items.forEach((it) => {
    if (itemAmount(it) > 1) autosell(it, itemAmount(it) - 1);
  });
}

export const LevelingQuest: Quest = {
  name: "Leveling",
  completed: () => get("csServicesPerformed").split(",").length > 1,
  tasks: [
    /*
    {
      name: "LED Candle",
      completed: () => !have($item`LED candle`) || get("ledCandleMode", "") === "reading",
      do: () => cliExecute("ledcandle reading"),
      limit: { tries: 1 },
    },
    */
    {
      name: "Soul Food",
      ready: () => mySoulsauce() >= 5,
      completed: () => mySoulsauce() < 5 || myMp() > myMaxmp() - 15 || !have($skill`Soul Food`),
      do: (): void => {
        while (mySoulsauce() >= 5 && myMp() <= myMaxmp() - 15) useSkill($skill`Soul Food`);
      },
    },
    {
      name: "Clan Shower",
      completed: () => get("_aprilShower"),
      do: (): void => {
        const aprilShowerEffect: Effect = {
          Muscle: $effect`Muscle Unbound`,
          Mysticality: $effect`Thaumodynamic`,
          Moxie: $effect`So Fresh and So Clean`,
        }[mainStatStr];
        ensureEffect(aprilShowerEffect);
      },
      limit: { tries: 1 },
    },
    {
      name: "Mainstat Gaze",
      completed: () =>
        ((have($effect`Inscrutable Gaze`) || !have($skill`Inscrutable Gaze`)) &&
          mainStat === $stat`Mysticality`) ||
        ((have($effect`Patient Smile`) || !have($skill`Patient Smile`)) &&
          mainStat === $stat`Muscle`) ||
        ((have($effect`Knowing Smile`) || !have($skill`Knowing Smile`)) &&
          mainStat === $stat`Moxie`),
      do: (): void => {
        const mainStatGainEffect: Effect = {
          Muscle: $effect`Patient Smile`,
          Mysticality: $effect`Inscrutable Gaze`,
          Moxie: $effect`Knowing Smile`,
        }[mainStatStr];
        ensureEffect(mainStatGainEffect);
      },
      limit: { tries: 5 },
    },
    {
      name: "Hot in Herre",
      completed: () =>
        have($effect`Hot in Herre`) ||
        !have($item`2002 Mr. Store Catalog`) ||
        get("availableMrStore2002Credits") <= get("instant_saveCatalogCredits", 0) ||
        forbiddenEffects.includes($effect`Hot in Herre`),
      do: (): void => {
        if (!have($item`Charter: Nellyville`)) {
          buy($coinmaster`Mr. Store 2002`, 1, $item`Charter: Nellyville`);
        }
        use($item`Charter: Nellyville`, 1);
      },
      limit: { tries: 3 },
    },
    {
      name: "Crimbo Candy",
      completed: () =>
        get("_candySummons") > 0 ||
        !have($skill`Summon Crimbo Candy`) ||
        !have($skill`Sweet Synthesis`),
      do: () => useSkill($skill`Summon Crimbo Candy`),
      limit: { tries: 1 },
    },
    {
      name: "Synth Exp Buff",
      completed: () =>
        !have($skill`Sweet Synthesis`) ||
        get("instant_skipSynthExp", false) ||
        have(synthExpBuff) ||
        getValidComplexCandyPairs(
          mainStat === $stat`Muscle` ? 2 : mainStat === $stat`Mysticality` ? 3 : 4,
        ).length === 0,
      do: (): void => getSynthExpBuff(),
      limit: { tries: 5 },
    },
    {
      name: "Pull Deep Dish of Legend",
      completed: () =>
        inHardcore() || // Assume user consciously chose HC and accepts the consequences that come with it
        have($item`Deep Dish of Legend`) ||
        have($effect`In the Depths`) ||
        get("_roninStoragePulls")
          .split(",")
          .includes(toInt($item`Deep Dish of Legend`).toString()) ||
        get("_instant_skipDeepDishOfLegend", false),
      do: (): void => {
        if (storageAmount($item`Deep Dish of Legend`) === 0) {
          print("Uh oh! You do not seem to have a Deep Dish of Legend in Hagnk's", "red");
          print("Consider pulling something to make up for the turngen and 300%mus,", "red");
          print(
            "then type 'set _instant_skipDeepDishOfLegend=true' before re-running instantsccs",
            "red",
          );
        }
        takeStorage($item`Deep Dish of Legend`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Pull Calzone of Legend",
      completed: () =>
        inHardcore() || // Assume user consciously chose HC and accepts the consequences that come with it
        have($item`Calzone of Legend`) ||
        have($effect`In the 'zone zone!`) ||
        get("_roninStoragePulls")
          .split(",")
          .includes(toInt($item`Calzone of Legend`).toString()) ||
        get("_instant_skipCalzoneOfLegend", false),
      do: (): void => {
        if (storageAmount($item`Calzone of Legend`) === 0) {
          print("Uh oh! You do not seem to have a Calzone of Legend in Hagnk's", "red");
          print(
            "Consider pulling something to make up for the turngen and 300%myst (e.g. a roasted vegetable focaccia),",
            "red",
          );
          print(
            "then type 'set _instant_skipCalzoneOfLegend=true' before re-running instantsccs",
            "red",
          );
        }
        takeStorage($item`Calzone of Legend`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Pull Pizza of Legend",
      completed: () =>
        inHardcore() || // Assume user consciously chose HC and accepts the consequences that come with it
        have($item`Pizza of Legend`) ||
        have($effect`Endless Drool`) ||
        get("_roninStoragePulls")
          .split(",")
          .includes(toInt($item`Pizza of Legend`).toString()) ||
        get("_instant_skipPizzaOfLegend", false),
      do: (): void => {
        if (storageAmount($item`Pizza of Legend`) === 0) {
          print("Uh oh! You do not seem to have a Pizza of Legend in Hagnk's", "red");
          print("Consider pulling something to make up for the turngen and 300%mox,", "red");
          print(
            "then type 'set _instant_skipPizzaOfLegend=true' before re-running instantsccs",
            "red",
          );
        }
        takeStorage($item`Pizza of Legend`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Pull Daypass",
      completed: () =>
        powerlevelingLocation() !== $location`Uncle Gator's Country Fun-Time Liquid Waste Sluice` ||
        get("stenchAirportAlways") ||
        get("_stenchAirportToday"),
      do: (): void => {
        if (storageAmount($item`one-day ticket to Dinseylandfill`) === 0) {
          print(
            "Uh oh! You do not seem to have a one-day ticket to Dinseylandfill in Hagnk's",
            "red",
          );
          print(
            "Try to purchase one from the mall with your meat from Hagnk's before re-running instantsccs",
            "red",
          );
        }
        takeStorage($item`one-day ticket to Dinseylandfill`, 1);
        use($item`one-day ticket to Dinseylandfill`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Wish for XP% buff",
      // TODO: Make this completed if we've already wished twice with the paw (requires mafia tracking)
      completed: () =>
        have(xpWishEffect) ||
        !have($item`cursed monkey's paw`) ||
        forbiddenEffects.includes(xpWishEffect) ||
        get("instant_saveMonkeysPaw", false) ||
        myBasestat(mainStat) >= targetBaseMainStat - targetBaseMainStatGap ||
        get("_monkeyPawWishesUsed") >= 2,
      do: (): void => {
        wishFor(xpWishEffect, false);
      },
    },
    {
      name: "Pull Snapper XP Buff",
      completed: () =>
        !canPull(toInt(snapperXpItem)) ||
        have(snapperXpItem) ||
        have(xpWishEffect) ||
        get("instant_saveEuclideanAngle", false) ||
        !have($item`a ten-percent bonus`),
      do: (): void => {
        takeStorage(snapperXpItem, 1);
        chew(snapperXpItem, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Pull Abstraction item",
      completed: () =>
        !canPull(toInt(abstractionXpItem)) ||
        have(abstractionXpItem) ||
        have(abstractionXpEffect) ||
        get("instant_saveAbstraction", false),
      do: (): void => {
        takeStorage(abstractionXpItem, 1);
        chew(abstractionXpItem, 1);
      },
      limit: { tries: 1 },
    },
    {
      // Only do pre-pulls after we're done with important default route pulls
      name: "Pre-pulls",
      completed: () =>
        !get("instant_prePulls", "0")
          .split(",")
          .map((id) => toInt(id))
          .some(canPull),
      do: () =>
        get("instant_prePulls", "0")
          .split(",")
          .forEach((id) => {
            const it = toItem(toInt(id));
            if (!have(it) && canPull(toInt(id))) takeStorage(it, 1);
          }),
      limit: { tries: 1 },
    },
    {
      name: "Use Ten-Percent Bonus",
      prepare: (): void => {
        if (get("getawayCampsiteUnlocked"))
          visitUrl("place.php?whichplace=campaway&action=campaway_sky");
      },
      completed: () => !have($item`a ten-percent bonus`),
      do: () => use($item`a ten-percent bonus`, 1),
      limit: { tries: 1 },
    },
    {
      name: "Bastille",
      completed: () => get("_bastilleGames") > 0 || !have($item`Bastille Battalion control rig`),
      do: () => cliExecute("bastille.ash mainstat brutalist"),
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
      name: "Sept-ember Mouthwash",
      ready: () => getWorkshed() !== $item`model train set` || have($effect`Hot Soupy Garbage`),
      completed: () => !useCenser || get("availableSeptEmbers") === 0,
      prepare: (): void => {
        // Ready to Survive gives +1 cold res
        if (have($item`MayDay™ supply package`) && !get("instant_saveMayday", false))
          use($item`MayDay™ supply package`, 1);
        if (have($item`space blanket`)) autosell($item`space blanket`, 1);

        // Synth gives +9 cold res
        if (!get("instant_skipSynthCold", false)) getSynthColdBuff();

        // +9 cold res from this Lucky! effect
        if (
          !forbiddenEffects.includes($effect`Fever From the Flavor`) &&
          !get("instant_saveMonkeysPaw", false)
        ) {
          wishFor($effect`Fever From the Flavor`, false);
        }

        restoreMp(50);
        const usefulEffects: Effect[] = [
          $effect`Frosty Hand`, // +5 cold res from Cargo Shorts
          $effect`Rainbowolin`, // +4 cold res from Pillkeeper
          $effect`Cold as Nice`, // +3 cold res from Beach Comb
          $effect`Egged On`, // +3 cold res from Rockin' Robin's drop
          $effect`Scarysauce`, // +2 cold res
          $effect`Elemental Saucesphere`, // +2 cold res
          $effect`Feeling Peaceful`, // +2 cold res from Emotion Chip
          $effect`Astral Shell`, // +1 cold res
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));
      },
      do: (): void => {
        // If we can get the Fireproof Foam Suit, we probably don't need the Rainbow Vaccine for the hot test
        if (
          have($item`Fourth of May Cosplay Saber`) &&
          have($item`industrial fire extinguisher`) &&
          have($skill`Double-Fisted Skull Smashing`)
        )
          tryAcquiringEffect($effect`Rainbow Vaccine`);

        // Grab Bembershoots
        const bembershootQty = get("instant_skipBembershootForJacket", false) ? 2 : 3;
        visitUrl(
          `shop.php?whichshop=september&action=buyitem&quantity=${bembershootQty}&whichrow=1516&pwd`,
        );

        // Grab Mouthwashes
        visitUrl("shop.php?whichshop=september&action=buyitem&quantity=2&whichrow=1512&pwd");

        cliExecute("maximize cold res");
        use($item`Mmm-brr! brand mouthwash`, 2);
      },
      limit: { tries: 1 },
      outfit: {
        modifier: "cold res",
        familiar: $familiar`Exotic Parrot`,
      },
      post: (): void => {
        if (have($effect`Scarysauce`)) cliExecute("shrug scarysauce");
      },
    },
    {
      name: "Alice Army",
      completed: () => get("grimoire3Summons") > 0 || !have($skill`Summon Alice's Army Cards`),
      do: () => useSkill($skill`Summon Alice's Army Cards`),
      limit: { tries: 1 },
    },
    {
      name: "Confiscator's Grimoire",
      completed: () =>
        get("_grimoireConfiscatorSummons") > 0 || !have($skill`Summon Confiscated Things`),
      do: () => useSkill($skill`Summon Confiscated Things`),
      limit: { tries: 1 },
    },
    {
      name: "Eat Calzone",
      completed: () => get("calzoneOfLegendEaten") || !have($item`Calzone of Legend`),
      do: () => eat($item`Calzone of Legend`, 1),
      limit: { tries: 1 },
    },
    {
      name: "Eat Deep Dish",
      completed: () => get("deepDishOfLegendEaten") || !have($item`Deep Dish of Legend`),
      do: () => eat($item`Deep Dish of Legend`, 1),
      limit: { tries: 1 },
    },
    {
      name: "Cast Prevent Scurvy",
      completed: () => !have($skill`Prevent Scurvy and Sobriety`) || get("_preventScurvy"),
      prepare: () => restoreMp(mpCost($skill`Prevent Scurvy and Sobriety`)),
      do: () => useSkill($skill`Prevent Scurvy and Sobriety`),
      limit: { tries: 1 },
    },
    {
      name: "Cast Perfect Freeze",
      completed: () =>
        !have($skill`Perfect Freeze`) ||
        get("_perfectFreezeUsed") ||
        get("instant_savePerfectFreeze", false),
      prepare: () => restoreMp(mpCost($skill`Perfect Freeze`)),
      do: () => useSkill($skill`Perfect Freeze`),
      limit: { tries: 1 },
    },
    {
      name: "Drink Perfect Drink",
      completed: () =>
        myInebriety() >= 3 ||
        !have($item`perfect ice cube`) ||
        !baseBoozes.some((it) => have(it)) ||
        get("instant_savePerfectFreeze", false),
      do: (): void => {
        tryAcquiringEffect($effect`Ode to Booze`);
        const baseBooze = baseBoozes.filter((it) => have(it))[0];
        let booze;
        switch (baseBooze) {
          case $item`bottle of vodka`:
            booze = $item`perfect cosmopolitan`;
            break;
          case $item`bottle of whiskey`:
            booze = $item`perfect old-fashioned`;
            break;
          case $item`boxed wine`:
            booze = $item`perfect mimosa`;
            break;
          case $item`bottle of rum`:
            booze = $item`perfect dark and stormy`;
            break;
          case $item`bottle of tequila`:
            booze = $item`perfect paloma`;
            break;
          case $item`bottle of gin`:
            booze = $item`perfect negroni`;
            break;
          default:
            break;
        }
        if (booze) {
          create(booze, 1);
          drink(booze, 1);
        }
      },
      limit: { tries: 1 },
    },
    {
      name: "Consult Fortune Teller",
      completed: () => get("_clanFortuneBuffUsed") || get("instant_saveFortuneTeller", false),
      do: () => cliExecute(`fortune buff ${mainStatMaximizerStr}`),
      limit: { tries: 1 },
    },
    {
      name: "Use General Store Statboost",
      completed: () => have(generalStoreXpEffect),
      do: () => ensureEffect(generalStoreXpEffect),
    },
    {
      name: "Buy Oversized Sparkler",
      ready: () => have($effect`Everything Looks Blue`) && get("hasRange") && myMeat() >= 1000,
      completed: () => have($item`oversized sparkler`),
      do: () => buy($item`oversized sparkler`, 1),
      limit: { tries: 1 },
    },
    {
      name: "Eat Pizza",
      ready: () => have($effect`Ready to Eat`), // only eat this after we red rocket
      completed: () => get("pizzaOfLegendEaten") || !have($item`Pizza of Legend`),
      do: () => eat($item`Pizza of Legend`, 1),
      limit: { tries: 1 },
    },
    {
      name: "Drink Astral Pilsners",
      ready: () => myLevel() >= 11,
      completed: () =>
        myInebriety() >= inebrietyLimit() ||
        (!have($item`astral six-pack`) &&
          itemAmount($item`astral pilsner`) <= get("instant_saveAstralPilsners", 0)),
      prepare: () => tryAcquiringEffect($effect`Ode to Booze`),
      do: (): void => {
        if (have($item`astral six-pack`)) use($item`astral six-pack`, 1);
        if (itemAmount($item`astral pilsner`) > get("instant_saveAstralPilsners", 0))
          drink($item`astral pilsner`, 1);
      },
      post: (): void => {
        if (
          !have($item`astral six-pack`) &&
          itemAmount($item`astral pilsner`) <= get("instant_saveAstralPilsners", 0)
        )
          uneffect($effect`Ode to Booze`);
      },
      limit: { tries: 6 },
    },
    {
      name: "Eat Magical Sausages",
      completed: () =>
        !have($item`Kramco Sausage-o-Matic™`) ||
        (!have($item`magical sausage`) && !have($item`magical sausage casing`)) ||
        myMeat() <= 3000 ||
        get("_sausagesMade") >= 3,
      do: (): void => {
        if (have($item`magical sausage casing`)) create($item`magical sausage`, 1);
        eat($item`magical sausage`, itemAmount($item`magical sausage`));
      },
      post: () => autosell($item`meat stack`, itemAmount($item`meat stack`)),
      limit: { tries: 23 },
    },
    {
      name: "Mayam Calendar (Leveling)",
      completed: () =>
        get("instant_saveMayamCalendar", false) ||
        get("_mayamSymbolsUsed").includes("yam4") ||
        !have($item`Mayam Calendar`),
      do: (): void => {
        if (useCenser) {
          MayamCalendar.submit(MayamCalendar.toCombinationString(["fur", "yam2", "wall", "yam4"]));
        } else {
          const sym1 = mainStat === $stat`Muscle` ? "sword" : "vessel";
          const sym2 = mainStat === $stat`Mysticality` ? "lightning" : "meat";
          const sym3 = mainStat === $stat`Moxie` ? "eyepatch" : "cheese";
          MayamCalendar.submit(MayamCalendar.toCombinationString([sym1, sym2, sym3, "yam4"]));
        }
      },
      limit: { tries: 1 },
    },
    {
      name: "BoomBox Meat",
      ready: () => have($item`Punching Potion`),
      completed: () =>
        SongBoom.song() === "Total Eclipse of Your Meat" || !have($item`SongBoom™ BoomBox`),
      do: () => SongBoom.setSong("Total Eclipse of Your Meat"),
      limit: { tries: 1 },
    },
    {
      name: "June Cleaver NC",
      completed: () => !have($item`June cleaver`) || get("_juneCleaverFightsLeft") > 0,
      do: (): void => {
        adv1($location`Noob Cave`);
        set("lastEncounter", "");
      },
      outfit: { weapon: $item`June cleaver` },
      combat: new CombatStrategy().macro(Macro.abort()),
      choices: {
        1467: 3, // Grab adv
        1468: mainStat === $stat`Muscle` ? 2 : mainStat === $stat`Moxie` ? 1 : 4, // Grab main substats else skip
        1469: 3, // Grab meat
        1470: mainStat === $stat`Muscle` ? 3 : 4, // Grab main substats else skip
        1471: mainStat === $stat`Muscle` ? 2 : mainStat === $stat`Mysticality` ? 3 : 1, // Grab main substats else savings bond
        1472: 1, // Grab trampled ticket stub
        1473: mainStat === $stat`Muscle` ? 1 : 3, // Grab main substats else hot res
        1474: mainStat === $stat`Muscle` ? 3 : mainStat === $stat`Mysticality` ? 1 : 4, // Grab main substats else skip
        1475: mainStat === $stat`Muscle` ? 2 : 1, // Grab main substats else mother necklace
      },
      post: (): void => {
        if (have($effect`Beaten Up`)) cliExecute("hottub");
      },
      limit: { tries: 10 },
    },
    {
      name: "Map Amateur Ninja",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (!have($effect`Everything Looks Blue`) && !have($item`blue rocket`)) {
          if (myMeat() < 250) throw new Error("Insufficient Meat to purchase blue rocket!");
          buy($item`blue rocket`, 1);
        }
        unbreakableUmbrella();
        docBag();
        restoreMp(50);
        if (!have($effect`Everything Looks Red`) && !have($item`red rocket`)) {
          if (myMeat() >= 250) buy($item`red rocket`, 1);
        }
      },
      completed: () =>
        !have($skill`Map the Monsters`) ||
        get("_monstersMapped") >= 3 ||
        have($item`li'l ninja costume`) ||
        !have($familiar`Trick-or-Treating Tot`) ||
        get("instant_skipMappingNinja", false),
      do: () => mapMonster($location`The Haiku Dungeon`, $monster`amateur ninja`),
      combat: new CombatStrategy().macro(
        Macro.if_(
          $monster`amateur ninja`,
          Macro.tryItem($item`blue rocket`)
            .tryItem($item`red rocket`)
            .trySkill($skill`Chest X-Ray`)
            .trySkill($skill`Gingerbread Mob Hit`)
            .trySkill($skill`Shattering Punch`)
            .default(),
        ).abort(),
      ),
      outfit: () => ({
        ...baseOutfit(),
        familiar: $familiar`Trick-or-Treating Tot`,
        modifier: `0.25 ${mainStatMaximizerStr}, 0.33 ML, -equip tinsel tights, -equip wad of used tape, -equip Kramco Sausage-o-Matic™`,
      }),
      post: () => sellMiscellaneousItems(),
      limit: { tries: 1 },
    },
    {
      name: "Restore MP with Glowing Blue",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (!have($effect`Everything Looks Blue`) && !have($item`blue rocket`)) {
          if (myMeat() < 250) throw new Error("Insufficient Meat to purchase blue rocket!");
          buy($item`blue rocket`, 1);
        }
        unbreakableUmbrella();
        restoreMp(50);
        if (!have($effect`Everything Looks Red`) && !have($item`red rocket`)) {
          if (myMeat() >= 250) buy($item`red rocket`, 1);
        }
      },
      completed: () => have($effect`Everything Looks Blue`) || haveCBBIngredients(false),
      do: powerlevelingLocation(), // if your powerleveling location is the NEP you don't immediately get the MP regen
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Curse of Weaksauce`)
          .tryItem($item`blue rocket`)
          .tryItem($item`red rocket`)
          .default(),
      ),
      outfit: () => ({
        ...baseOutfit(false),
        modifier: `0.25 ${mainStatMaximizerStr}, 0.33 ML, -equip tinsel tights, -equip wad of used tape, -equip Kramco Sausage-o-Matic™`,
      }),
      post: () => sellMiscellaneousItems(),
      choices: {
        1094: 5,
        1115: 6,
        1322: 2,
        1324: 5,
      },
      limit: { tries: 2 },
    },
    {
      name: "Restore MP with Glowing Blue (continued)",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        restoreMp(50);
      },
      // We need to spend at least 1adv to get the mp regen from Glowing Blue
      // This is only an issue if our powerleveling zone is the NEP, since the previous fight would be free
      completed: () =>
        powerlevelingLocation() !== $location`The Neverending Party` ||
        haveEffect($effect`Glowing Blue`) !== 10 ||
        myMp() >= 500 ||
        haveCBBIngredients(false), // But we can't benefit from Blue Rocket if we are only doing free fights
      do: $location`The Dire Warren`,
      outfit: () => ({
        ...baseOutfit(false),
        modifier: `0.25 ${mainStatMaximizerStr}, 0.33 ML, -equip tinsel tights, -equip wad of used tape, -equip Kramco Sausage-o-Matic™`,
      }),
      combat: new CombatStrategy().macro(Macro.attack().repeat()),
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      limit: { tries: 1 },
    },
    {
      name: "Get Rufus Quest",
      completed: () => get("_shadowAffinityToday") || !have($item`closed-circuit pay phone`),
      do: (): void => {
        chooseQuest(() => 2);
        if (holiday().includes("April Fool's Day")) visitUrl("questlog.php?which=7");
      },
      limit: { tries: 1 },
    },
    {
      name: "Shadow Rift",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        restoreMp(50);
        if (!have($effect`Everything Looks Red`) && !have($item`red rocket`)) {
          if (myMeat() >= 250) buy($item`red rocket`, 1);
        }

        if (
          myClass() === $class`Pastamancer` &&
          have($item`Sept-Ember Censer`) &&
          have($item`Daylight Shavings Helmet`) &&
          get("lastBeardBuff") === 0 && // We have not gotten the beard buff yet
          !get("instant_saveEmbers", false) &&
          !have($item`bembershoot`) // We have not used the mouthwash yet
        )
          equip($slot`hat`, $item`Daylight Shavings Helmet`); // Grab Grizzly Beard for mouthwash
      },
      completed: () =>
        have($item`Rufus's shadow lodestone`) ||
        (!have($effect`Shadow Affinity`) && get("encountersUntilSRChoice") !== 0) ||
        !have($item`closed-circuit pay phone`),
      do: bestShadowRift(),
      combat: new CombatStrategy().macro(
        Macro.tryItem($item`red rocket`)
          .trySkill($skill`Recall Facts: %phylum Circadian Rhythms`)
          .default(),
      ),
      outfit: () => ({
        ...baseOutfit(),
        modifier: `0.25 ${mainStatMaximizerStr}, 0.33 ML, -equip tinsel tights, -equip wad of used tape, -equip Kramco Sausage-o-Matic™`,
      }),
      post: (): void => {
        if (have(rufusTarget() as Item)) {
          withChoice(1498, 1, () => use($item`closed-circuit pay phone`));
        }
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      limit: { tries: 12 },
    },
    {
      name: "Use Reagent Booster",
      completed: () =>
        (!have(reagentBoosterIngredient) && !have(reagentBoosterItem)) ||
        have(reagentBoosterEffect),
      do: (): void => {
        if (get("reagentSummons") === 0) useSkill($skill`Advanced Saucecrafting`, 1);
        if (!have(reagentBoosterItem)) {
          create(reagentBoosterItem, 1);
        }
        ensureEffect(reagentBoosterEffect);
      },
    },
    {
      name: "Use Reagent Balancer",
      ready: () => get("_loveTunnelUsed") || !get("loveTunnelAvailable"),
      completed: () =>
        (!have(reagentBalancerIngredient) && itemAmount(reagentBalancerItem) <= 1) ||
        have(reagentBalancerEffect) ||
        itemAmount(reagentBalancerItem) === 1,
      do: (): void => {
        if (get("reagentSummons") === 0) useSkill($skill`Advanced Saucecrafting`, 1);
        if (!have(reagentBalancerItem)) {
          create(reagentBalancerItem, 1);
        }
        if (itemAmount(reagentBalancerItem) > 1)
          use(reagentBalancerItem, itemAmount(reagentBalancerItem) - 1);
        if (have(reagentBalancerIngredient) && have(reagentBalancerEffect))
          putCloset(itemAmount(reagentBalancerIngredient), reagentBalancerIngredient);
      },
      limit: { tries: 1 },
    },
    {
      name: "Snojo",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (get("snojoSetting") === null) {
          visitUrl("place.php?whichplace=snojo&action=snojo_controller");
          runChoice(1);
        }
        unbreakableUmbrella();
        restoreMp(50);

        if (
          myClass() === $class`Pastamancer` &&
          have($item`Sept-Ember Censer`) &&
          have($item`Daylight Shavings Helmet`) &&
          get("lastBeardBuff") === 0 && // We have not gotten the beard buff yet
          !get("instant_saveEmbers", false) &&
          !have($item`bembershoot`) // We have not used the mouthwash yet
        )
          equip($slot`hat`, $item`Daylight Shavings Helmet`); // Grab Grizzly Beard for mouthwash
      },
      completed: () => get("_snojoFreeFights") >= 10 || !get("snojoAvailable"),
      do: $location`The X-32-F Combat Training Snowman`,
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Recall Facts: %phylum Circadian Rhythms`).default(),
      ),
      outfit: () => ({
        ...baseOutfit(),
        modifier: `0.25 ${mainStatMaximizerStr}, 0.33 ML, -equip tinsel tights, -equip wad of used tape, -equip Kramco Sausage-o-Matic™`,
      }),
      limit: { tries: 10 },
      post: (): void => {
        if (get("_snojoFreeFights") >= 10) cliExecute("hottub");
        sendAutumnaton();
        sellMiscellaneousItems();
      },
    },
    {
      name: "Flaming Leaflets",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        if (have($item`Lil' Doctor™ bag`) && get("_otoscopeUsed") < 3)
          equip($slot`acc3`, $item`Lil' Doctor™ bag`);
        restoreMp(50);

        if (
          myClass() === $class`Pastamancer` &&
          have($item`Sept-Ember Censer`) &&
          have($item`Daylight Shavings Helmet`) &&
          get("lastBeardBuff") === 0 && // We have not gotten the beard buff yet
          !get("instant_saveEmbers", false) &&
          !have($item`bembershoot`) // We have not used the mouthwash yet
        )
          equip($slot`hat`, $item`Daylight Shavings Helmet`); // Grab Grizzly Beard for mouthwash
      },
      completed: () =>
        get("_leafMonstersFought") >= 5 ||
        !have($item`inflammable leaf`, 11) ||
        get("instant_saveLeafFights", false),
      do: (): void => {
        visitUrl("campground.php?preaction=leaves");
        visitUrl("choice.php?pwd&whichchoice=1510&option=1&leaves=11");
      },
      combat: new CombatStrategy().macro(Macro.trySkill($skill`Otoscope`).default()),
      outfit: () => ({
        ...baseOutfit(),
        modifier:
          "Item Drop, -equip tinsel tights, -equip wad of used tape, -equip Kramco Sausage-o-Matic™",
      }),
      limit: { tries: 5 },
      post: (): void => {
        sellMiscellaneousItems();
      },
    },
    {
      name: "Snokebomb",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        restoreMp(50);

        if (
          myClass() === $class`Pastamancer` &&
          have($item`Sept-Ember Censer`) &&
          have($item`Daylight Shavings Helmet`) &&
          get("lastBeardBuff") === 0 && // We have not gotten the beard buff yet
          !get("instant_saveEmbers", false) &&
          !have($item`bembershoot`) // We have not used the mouthwash yet
        )
          equip($slot`hat`, $item`Daylight Shavings Helmet`); // Grab Grizzly Beard for mouthwash
      },
      completed: () => get("_snokebombUsed") >= 3 - get("instant_saveSBForInnerElf", 0),
      do: powerlevelingLocation(),
      combat: new CombatStrategy().macro(Macro.trySkill($skill`Snokebomb`).abort()),
      outfit: () => ({
        ...baseOutfit(),
        modifier: `0.25 ${mainStatMaximizerStr}, 0.33 ML, -equip tinsel tights, -equip wad of used tape, -equip Kramco Sausage-o-Matic™`,
      }),
      choices: {
        1094: 5,
        1115: 6,
        1322: 2,
        1324: 5,
      },
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      limit: { tries: 4 },
    },
    {
      name: "Get Totem and Saucepan",
      completed: () => have($item`turtle totem`) && have($item`saucepan`),
      do: (): void => {
        buy(1, $item`chewing gum on a string`);
        use(1, $item`chewing gum on a string`);
      },
      limit: { tries: 50 },
    },
    {
      name: "Red Skeleton",
      ready: () =>
        !have($effect`Everything Looks Yellow`) ||
        (have($skill`Feel Envy`) && get("_feelEnvyUsed") < 3),
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (useParkaSpit) {
          cliExecute("parka dilophosaur");
        } else if (!have($item`yellow rocket`) && !have($effect`Everything Looks Yellow`)) {
          if (myMeat() < 250) throw new Error("Insufficient Meat to purchase yellow rocket!");
          buy($item`yellow rocket`, 1);
        }
        if (have($item`Roman Candelabra`) && !have($effect`Everything Looks Yellow`)) {
          equip($slot`offhand`, $item`Roman Candelabra`);
        } else {
          unbreakableUmbrella();
        }

        if (
          myClass() === $class`Pastamancer` &&
          have($item`Sept-Ember Censer`) &&
          have($item`Daylight Shavings Helmet`) &&
          get("lastBeardBuff") === 0 && // We have not gotten the beard buff yet
          !get("instant_saveEmbers", false) &&
          !have($item`bembershoot`) // We have not used the mouthwash yet
        )
          equip($slot`hat`, $item`Daylight Shavings Helmet`); // Grab Grizzly Beard for mouthwash
      },
      completed: () =>
        CombatLoversLocket.monstersReminisced().includes($monster`red skeleton`) ||
        !CombatLoversLocket.availableLocketMonsters().includes($monster`red skeleton`) ||
        get("instant_saveLocketRedSkeleton", false),
      do: () => CombatLoversLocket.reminisce($monster`red skeleton`),
      combat: new CombatStrategy().macro(() =>
        Macro.if_(
          "!haseffect Everything Looks Yellow",
          Macro.externalIf(useParkaSpit, Macro.trySkill($skill`Spit jurassic acid`))
            .trySkill($skill`Blow the Yellow Candle!`)
            .tryItem($item`yellow rocket`),
        )
          .trySkill($skill`Feel Envy`)
          .default(),
      ),
      outfit: () => ({
        ...baseOutfit(false),
        modifier: `0.25 ${mainStatMaximizerStr}, 0.33 ML, -equip tinsel tights, -equip wad of used tape, -equip Kramco Sausage-o-Matic™`,
      }),
      post: (): void => {
        use($item`red box`, 1);
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      limit: { tries: 1 },
    },
    {
      name: "LOV Tunnel",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        if (mainStat === $stat`Muscle`) prismaticEffects.forEach((ef) => tryAcquiringEffect(ef));
        tryAcquiringEffect($effect`Comic Violence`);
      },
      completed: () => get("_loveTunnelUsed") || !get("loveTunnelAvailable"),
      do: () =>
        TunnelOfLove.fightAll(LOVEquip, "Open Heart Surgery", "LOV Extraterrestrial Chocolate"),
      combat: new CombatStrategy().macro(
        Macro.if_($monster`LOV Enforcer`, Macro.attack().repeat())
          .if_(
            $monster`LOV Engineer`,
            Macro.while_(
              `!mpbelow ${mpCost($skill`Toynado`)} && hasskill ${toInt($skill`Toynado`)}`,
              Macro.skill($skill`Toynado`),
            )
              .while_(
                `!mpbelow ${mpCost($skill`Saucestorm`)} && hasskill ${toInt($skill`Saucestorm`)}`,
                Macro.skill($skill`Saucestorm`),
              )
              .default(),
          )
          .if_($monster`LOV Equivocator`, Macro.default()),
      ),
      outfit: () => ({
        ...baseOutfit(false),
        weapon: $item`Fourth of May Cosplay Saber`,
        modifier: `0.25 ${mainStatMaximizerStr}, 0.33 ML, -equip tinsel tights, -equip wad of used tape, -equip Kramco Sausage-o-Matic™`,
      }),
      limit: { tries: 1 },
      post: (): void => {
        if (have($effect`Beaten Up`)) cliExecute("hottub");
        if (have($item`LOV Extraterrestrial Chocolate`))
          use($item`LOV Extraterrestrial Chocolate`, 1);
        sendAutumnaton();
        sellMiscellaneousItems();
      },
    },
    {
      name: "Restore cinch",
      completed: () =>
        get("timesRested") >= totalFreeRests() - get("instant_saveFreeRests", 0) ||
        get("_cinchUsed") <= 95 ||
        !useCinch,
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
      name: "Monster Habitats",
      ready: () =>
        get("_monsterHabitatsFightsLeft") > 1 &&
        (haveFreeBanish() ||
          Array.from(getBanishedMonsters().values()).includes($monster`fluffy bunny`)),
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (!haveEquipped($item`latte lovers member's mug`)) unbreakableUmbrella();
        garbageShirt();
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () => get("_monsterHabitatsFightsLeft") <= 1,
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(() =>
        Macro.if_($monster`fluffy bunny`, Macro.banish().abort()).default(useCinch),
      ),
      outfit: () => ({
        ...baseOutfit,
        ...(Array.from(getBanishedMonsters().values()).includes($monster`fluffy bunny`)
          ? {}
          : {
              offhand: $item`latte lovers member's mug`,
              acc1: $item`Kremlin's Greatest Briefcase`,
              acc2: $item`Lil' Doctor™ bag`,
            }),
      }),
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      limit: { tries: 13 },
    },
    {
      name: "Monster Habitats (Re-application)",
      ready: () =>
        get("_monsterHabitatsFightsLeft") === 1 &&
        (haveFreeBanish() ||
          Array.from(getBanishedMonsters().values()).includes($monster`fluffy bunny`)),
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (!haveEquipped($item`latte lovers member's mug`)) unbreakableUmbrella();
        garbageShirt();
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () => get("_monsterHabitatsFightsLeft") === 0,
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(() =>
        Macro.if_($monster`fluffy bunny`, Macro.banish().abort())
          .externalIf(
            get("_monsterHabitatsRecalled") < 3 - get("instant_saveMonsterHabitats", 0) &&
              have($skill`Recall Facts: Monster Habitats`) &&
              (haveFreeBanish() ||
                Array.from(getBanishedMonsters().values()).includes($monster`fluffy bunny`)),
            Macro.trySkill($skill`Recall Facts: Monster Habitats`),
          )
          .default(useCinch),
      ),
      outfit: () => ({
        ...baseOutfit,
        ...(Array.from(getBanishedMonsters().values()).includes($monster`fluffy bunny`)
          ? {}
          : {
              offhand: $item`latte lovers member's mug`,
              acc1: $item`Kremlin's Greatest Briefcase`,
              acc2: $item`Lil' Doctor™ bag`,
            }),
      }),
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      limit: { tries: 4 },
    },
    {
      name: "Backups",
      ready: () => freeFightMonsters.includes(get("lastCopyableMonster") ?? $monster.none),
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        garbageShirt();
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () =>
        !have($item`backup camera`) ||
        !freeFightMonsters.includes(get("lastCopyableMonster") ?? $monster.none) ||
        get("_backUpUses") >= 11 - clamp(get("instant_saveBackups", 0), 0, 11) ||
        myBasestat(mainStat) >= 190, // no longer need to back up Witchess Kings
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Back-Up to your Last Enemy`).default(useCinch),
      ),
      outfit: () => ({
        ...baseOutfit(),
        acc3: $item`backup camera`,
      }),
      post: (): void => {
        if (!freeFightMonsters.includes(get("lastCopyableMonster") ?? $monster.none))
          throw new Error("Fought unexpected monster");
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      limit: { tries: 11 },
    },
    {
      name: "Kramco",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        garbageShirt();
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      ready: () => getKramcoWandererChance() >= 1.0,
      completed: () => getKramcoWandererChance() < 1.0 || !have($item`Kramco Sausage-o-Matic™`),
      do: $location`Noob Cave`,
      outfit: () => ({
        ...baseOutfit(),
        offhand: $item`Kramco Sausage-o-Matic™`,
      }),
      combat: new CombatStrategy().macro(() =>
        Macro.externalIf(
          get("_monsterHabitatsFightsLeft") <= 1 &&
            get("_monsterHabitatsRecalled") < 3 - get("instant_saveMonsterHabitats", 0) &&
            have($skill`Recall Facts: Monster Habitats`) &&
            (haveFreeBanish() ||
              Array.from(getBanishedMonsters().values()).includes($monster`fluffy bunny`)),
          Macro.trySkill($skill`Recall Facts: Monster Habitats`),
        ).default(useCinch),
      ),
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
    },
    {
      name: "Oliver's Place (Map)",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        restoreMp(50);
        if (SourceTerminal.have()) cliExecute("terminal educate portscan");
      },
      completed: () =>
        get("_speakeasyFreeFights") >= 1 ||
        !get("ownsSpeakeasy") ||
        !have($skill`Map the Monsters`) ||
        get("_monstersMapped") >= 3,
      do: () => mapMonster($location`An Unusually Quiet Barroom Brawl`, $monster`goblin flapper`),
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Feel Envy`)
          .trySkill($skill`Portscan`)
          .default(),
      ),
      outfit: baseOutfit,
      limit: { tries: 1 },
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
    },
    {
      name: "Oliver's Place (Portscan)",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        restoreMp(50);
        if (SourceTerminal.have()) cliExecute("terminal educate portscan");
      },
      completed: () =>
        get("_speakeasyFreeFights") >= 2 ||
        !get("ownsSpeakeasy") ||
        !SourceTerminal.have() ||
        get("_sourceTerminalPortscanUses") > 0,
      do: $location`An Unusually Quiet Barroom Brawl`,
      combat: new CombatStrategy().macro(Macro.trySkill($skill`Portscan`).default()),
      outfit: baseOutfit,
      limit: { tries: 1 },
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
    },
    {
      name: "Oliver's Place",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        restoreMp(50);
      },
      completed: () => get("_speakeasyFreeFights") >= 3 || !get("ownsSpeakeasy"),
      do: $location`An Unusually Quiet Barroom Brawl`,
      combat: new CombatStrategy().macro(Macro.default()),
      outfit: baseOutfit,
      limit: { tries: 3 },
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
    },
    {
      name: "God Lobster",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () => get("_godLobsterFights") >= 3 || !have($familiar`God Lobster`),
      do: () => visitUrl("main.php?fightgodlobster=1"),
      combat: new CombatStrategy().macro(Macro.default(useCinch)),
      choices: { 1310: have($item`God Lobster's Ring`) ? 2 : 3 }, // Get xp on last fight
      outfit: () => ({
        ...baseOutfit(),
        famequip: $items`God Lobster's Ring, God Lobster's Scepter`,
        familiar: $familiar`God Lobster`,
      }),
      limit: { tries: 3 },
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
    },
    {
      name: "Eldritch Tentacle",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () => get("_eldritchHorrorEvoked") || !have($skill`Evoke Eldritch Horror`),
      do: () => useSkill($skill`Evoke Eldritch Horror`),
      post: (): void => {
        if (have($effect`Beaten Up`)) cliExecute("hottub");
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      combat: new CombatStrategy().macro(Macro.default(useCinch)),
      outfit: baseOutfit,
      limit: { tries: 1 },
    },
    {
      name: "Witchess Bishop",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (have($item`Roman Candelabra`) && !have($effect`Everything Looks Purple`)) {
          equip($slot`offhand`, $item`Roman Candelabra`);
        } else {
          unbreakableUmbrella();
        }
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () =>
        get("_witchessFights") >= 4 - (get("instant_skipBishopsForRoyalty", false) ? 2 : 0) ||
        !Witchess.have() ||
        get("instant_saveWitchess", false),
      do: (): void => {
        Witchess.fightPiece($monster`Witchess Bishop`);
        visitUrl("main.php");
      },
      combat: new CombatStrategy().macro(() =>
        Macro.externalIf(
          get("_monsterHabitatsFightsLeft") <= 1 &&
            get("_monsterHabitatsRecalled") < 3 - get("instant_saveMonsterHabitats", 0) &&
            have($skill`Recall Facts: Monster Habitats`) &&
            (haveFreeBanish() ||
              Array.from(getBanishedMonsters().values()).includes($monster`fluffy bunny`)),
          Macro.trySkill($skill`Recall Facts: Monster Habitats`),
        )
          .trySkill($skill`Blow the Purple Candle!`)
          .default(useCinch),
      ),
      outfit: baseOutfit,
      post: (): void => {
        visitUrl("main.php");
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      limit: { tries: 5 },
    },
    {
      name: "DMT",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () => get("_machineTunnelsAdv") >= 5 || !have($familiar`Machine Elf`),
      do: $location`The Deep Machine Tunnels`,
      combat: new CombatStrategy().macro(Macro.default(useCinch)),
      outfit: () => ({
        ...baseOutfit(),
        familiar: $familiar`Machine Elf`,
      }),
      limit: { tries: 5 },
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
    },
    {
      name: "Powerlevel",
      completed: () =>
        myBasestat(mainStat) >= targetBaseMainStat - targetBaseMainStatGap &&
        (haveCBBIngredients(false) ||
          overleveled() ||
          craftedCBBEffects.some((ef) => have(ef)) ||
          craftedCBBEffects.every((ef) => forbiddenEffects.includes(ef))) &&
        (powerlevelingLocation() !== $location`The Neverending Party` ||
          get("_neverendingPartyFreeTurns") >= 10),
      do: powerlevelingLocation(),
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        garbageShirt();
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
        if (!have($effect`Everything Looks Red`) && !have($item`red rocket`)) {
          if (myMeat() >= 250) buy($item`red rocket`, 1);
        }
      },
      outfit: baseOutfit,
      limit: { tries: 60 },
      choices: {
        1094: 5,
        1115: 6,
        1322: 2,
        1324: 5,
      },
      combat: new CombatStrategy().macro(
        Macro.tryItem($item`red rocket`)
          .trySkill($skill`Bowl Sideways`)
          .trySkill($skill`Recall Facts: %phylum Circadian Rhythms`)
          .default(useCinch),
      ),
      post: (): void => {
        haveCBBIngredients(false, true);
        if (have($item`SMOOCH coffee cup`)) chew($item`SMOOCH coffee cup`, 1);
        sendAutumnaton();
        sellMiscellaneousItems();
      },
    },
    {
      name: "Acquire Wad of Dough",
      completed: () =>
        have($item`wad of dough`) ||
        (get("instant_saveHoneyBun", false) && get("instant_saveWileyWheyBar", false)),
      do: (): void => {
        if (myMeat() < 100) throw new Error("Insufficient Meat to purchase all-purpose flower!");
        if (!have($item`all-purpose flower`)) buy($item`all-purpose flower`, 1);
        use($item`all-purpose flower`, 1);
      },
      post: (): void => {
        if (!have($item`flat dough`)) use($item`wad of dough`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Craft and Eat CBB Foods",
      after: ["Powerlevel"],
      completed: () =>
        craftedCBBEffects.every((ef) => have(ef) || forbiddenEffects.includes(ef)) ||
        triedCraftingCBBFoods,
      do: (): void => {
        craftedCBBFoods.forEach((it) => {
          const ef = effectModifier(it, "effect");
          if (!have(ef) && !forbiddenEffects.includes(ef)) {
            if (!have(it)) create(it, 1);
            eat(it, 1);
          }
        });

        if (
          itemAmount($item`Vegetable of Jarlsberg`) >= 2 &&
          itemAmount($item`St. Sneaky Pete's Whey`) >= 2 &&
          !have($effect`Pretty Delicious`) &&
          !get("instant_saveRicottaCasserole", false)
        ) {
          if (!have($item`baked veggie ricotta casserole`))
            create($item`baked veggie ricotta casserole`, 1);
          eat($item`baked veggie ricotta casserole`, 1);
        }

        triedCraftingCBBFoods = true;
      },
      limit: { tries: 1 },
    },
    {
      name: "Drink Bee's Knees",
      after: ["Powerlevel"],
      completed: () => have($effect`On the Trolley`) || get("instant_saveBeesKnees", false),
      do: (): void => {
        if (myMeat() < 500) throw new Error("Insufficient Meat to purchase Bee's Knees!");
        tryAcquiringEffect($effect`Ode to Booze`);
        visitUrl(`clan_viplounge.php?preaction=speakeasydrink&drink=5&pwd=${myHash()}`); // Bee's Knees
      },
      limit: { tries: 1 },
    },
    {
      name: "Acquire Lyle's Buff",
      completed: () => get("_lyleFavored"),
      do: (): void => {
        tryAcquiringEffect($effect`Favored by Lyle`);
        tryAcquiringEffect($effect`Starry-Eyed`);
      },
      limit: { tries: 1 },
    },
    {
      name: "Apriling Band Quad Tom Sandworms",
      completed: () => !have($item`Apriling band quad tom`) || get("_aprilBandTomUses") >= 3,
      do: (): void => {
        AprilingBandHelmet.play($item`Apriling band quad tom`);
        visitUrl("main.php");
      },
      combat: new CombatStrategy().macro(Macro.default(useCinch)),
      outfit: baseOutfit,
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      limit: { tries: 3 },
    },
    {
      name: "Mimic Sausage Goblins",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (have($item`Roman Candelabra`) && !have($effect`Everything Looks Purple`)) {
          equip($slot`offhand`, $item`Roman Candelabra`);
        } else {
          unbreakableUmbrella();
        }
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () =>
        get("instant_saveMimicEggs", false) ||
        get("_mimicEggsObtained") > 0 ||
        !have($familiar`Chest Mimic`) ||
        (!(have($familiar`Shorter-Order Cook`) && have($item`blue plate`)) &&
          !(have($item`Apriling band piccolo`) && get("_aprilBandPiccoloUses") < 3)),
      do: (): void => {
        const currentFamiliar = myFamiliar();
        if (have($familiar`Shorter-Order Cook`) && have($item`blue plate`)) {
          useFamiliar($familiar`Shorter-Order Cook`);
          equip($slot`familiar`, $item`blue plate`);
        }
        useFamiliar($familiar`Chest Mimic`);
        if (have($item`Apriling band piccolo`) && get("_aprilBandPiccoloUses") < 3) {
          retrieveItem($item`Apriling band piccolo`); // We can't play the piccolo if it's equipped on a non-current familiar
          Array(3 - get("_aprilBandPiccoloUses"))
            .fill(0)
            .forEach(() => AprilingBandHelmet.play($item`Apriling band piccolo`));
        }
        ChestMimic.receive($monster`sausage goblin`);
        useFamiliar(currentFamiliar);
        ChestMimic.differentiate($monster`sausage goblin`);
      },
      combat: new CombatStrategy().macro(() =>
        Macro.externalIf(
          get("_monsterHabitatsFightsLeft") <= 1 &&
            get("_monsterHabitatsRecalled") < 3 - get("instant_saveMonsterHabitats", 0) &&
            have($skill`Recall Facts: Monster Habitats`) &&
            (haveFreeBanish() ||
              Array.from(getBanishedMonsters().values()).includes($monster`fluffy bunny`)),
          Macro.trySkill($skill`Recall Facts: Monster Habitats`),
        )
          .trySkill($skill`Blow the Purple Candle!`)
          .default(useCinch),
      ),
      outfit: baseOutfit,
      post: (): void => {
        visitUrl("main.php");
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      limit: { tries: 1 },
    },
    {
      name: "Witchess King",
      prepare: (): void => {
        garbageShirt();
        [
          ...usefulEffects.filter((ef) => !$effects`Song of Sauce, Song of Bravado`.includes(ef)),
          ...prismaticEffects,
          ...wdmgEffects,
        ].forEach((ef) => tryAcquiringEffect(ef));
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        restoreMp(50);
      },
      completed: () =>
        have($item`dented scepter`) ||
        get("_witchessFights") >= 5 ||
        !Witchess.have() ||
        get("instant_saveWitchess", false),
      do: () => Witchess.fightPiece($monster`Witchess King`),
      combat: new CombatStrategy().macro(
        Macro.while_(
          `!mpbelow ${mpCost($skill`Toynado`)} && hasskill ${toInt($skill`Toynado`)}`,
          Macro.skill($skill`Toynado`),
        ).default(useCinch),
      ),
      outfit: baseOutfit,
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      limit: { tries: 1 },
    },
    {
      name: "Witchess Witch",
      prepare: (): void => {
        garbageShirt();
        [
          ...usefulEffects.filter((ef) => !$effects`Song of Sauce, Song of Bravado`.includes(ef)),
          ...prismaticEffects,
          ...wdmgEffects,
        ].forEach((ef) => tryAcquiringEffect(ef));
        if (get("_hotTubSoaks") < 5 && myHp() < myMaxhp()) cliExecute("hottub");
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        restoreMp(50);
      },
      completed: () =>
        have($item`battle broom`) ||
        get("_witchessFights") >= 5 ||
        !Witchess.have() ||
        get("instant_saveWitchess", false),
      do: () => Witchess.fightPiece($monster`Witchess Witch`),
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Curse of Weaksauce`)
          .attack()
          .repeat(),
      ),
      outfit: {
        ...baseOutfit(),
        weapon:
          have($effect`Comic Violence`) && have($item`Fourth of May Cosplay Saber`)
            ? $item`Fourth of May Cosplay Saber`
            : $item`June cleaver`,
        offhand: have($skill`Double-Fisted Skull Smashing`) ? $item`dented scepter` : undefined,
        modifier: "weapon dmg",
      },
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      limit: { tries: 1 },
    },
    {
      name: "Witchess Queen",
      prepare: (): void => {
        garbageShirt();
        [
          ...usefulEffects.filter((ef) => !$effects`Song of Sauce, Song of Bravado`.includes(ef)),
          ...prismaticEffects,
          ...wdmgEffects,
        ].forEach((ef) => tryAcquiringEffect(ef));
        if (get("_hotTubSoaks") < 5 && myHp() < myMaxhp()) cliExecute("hottub");
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        restoreMp(50);
      },
      completed: () =>
        have($item`very pointy crown`) ||
        get("_witchessFights") >= 5 ||
        !Witchess.have() ||
        get("instant_saveWitchess", false),
      do: () => Witchess.fightPiece($monster`Witchess Queen`),
      combat: new CombatStrategy().macro(Macro.attack().repeat()),
      outfit: {
        ...baseOutfit(),
        weapon:
          have($effect`Comic Violence`) && have($item`Fourth of May Cosplay Saber`)
            ? $item`Fourth of May Cosplay Saber`
            : $item`June cleaver`,
        offhand: have($skill`Double-Fisted Skull Smashing`) ? $item`dented scepter` : undefined,
      },
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      limit: { tries: 1 },
    },
    {
      name: "Witchess King (Locket)",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        unbreakableUmbrella();
        garbageShirt();
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () =>
        CombatLoversLocket.monstersReminisced().includes($monster`Witchess King`) ||
        !CombatLoversLocket.availableLocketMonsters().includes($monster`Witchess King`) ||
        get("instant_saveLocketWitchessKing", false) ||
        have($item`dented scepter`),
      do: () => CombatLoversLocket.reminisce($monster`Witchess King`),
      combat: new CombatStrategy().macro(() =>
        Macro.externalIf(
          get("_monsterHabitatsFightsLeft") <= 1 &&
            get("_monsterHabitatsRecalled") < 3 - get("instant_saveMonsterHabitats", 0) &&
            have($skill`Recall Facts: Monster Habitats`) &&
            (haveFreeBanish() ||
              Array.from(getBanishedMonsters().values()).includes($monster`fluffy bunny`)),
          Macro.trySkill($skill`Recall Facts: Monster Habitats`),
        )
          .while_(
            `!mpbelow ${mpCost($skill`Toynado`)} && hasskill ${toInt($skill`Toynado`)}`,
            Macro.skill($skill`Toynado`),
          )
          .default(useCinch),
      ),
      outfit: baseOutfit,
      post: (): void => {
        sendAutumnaton();
        sellMiscellaneousItems();
      },
      limit: { tries: 1 },
    },
    {
      name: "Free Kills and More Fights",
      after: ["Craft and Eat CBB Foods", "Drink Bee's Knees"],
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (equippedItem($slot`offhand`) !== $item`latte lovers member's mug`) {
          unbreakableUmbrella();
        }
        garbageShirt();
        docBag();
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      outfit: (): OutfitSpec => {
        if (
          chooseLibram() === $skill.none ||
          !have($item`latte lovers member's mug`) ||
          get("_latteRefillsUsed") >= 3
        )
          return baseOutfit();
        else
          return {
            ...baseOutfit(),
            offhand: $item`latte lovers member's mug`,
          };
      },
      completed: () =>
        myBasestat(mainStat) >= targetBaseMainStat &&
        (get("_shatteringPunchUsed") >= 3 || !have($skill`Shattering Punch`)) &&
        (get("_gingerbreadMobHitUsed") || !have($skill`Gingerbread Mob Hit`)) &&
        (haveCBBIngredients(true) || overleveled()),
      do: powerlevelingLocation(),
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Feel Pride`)
          .trySkill($skill`Cincho: Confetti Extravaganza`)
          .trySkill($skill`Gulp Latte`)
          .trySkill($skill`Recall Facts: %phylum Circadian Rhythms`)
          .trySkill($skill`Chest X-Ray`)
          .trySkill($skill`Shattering Punch`)
          .trySkill($skill`Gingerbread Mob Hit`)
          .trySkill($skill`Bowl Sideways`)
          .default(useCinch),
      ),
      choices: {
        1094: 5,
        1115: 6,
        1322: 2,
        1324: 5,
      },
      post: (): void => {
        if (
          itemAmount($item`Vegetable of Jarlsberg`) >= 2 &&
          itemAmount($item`St. Sneaky Pete's Whey`) >= 2 &&
          !have($effect`Pretty Delicious`) &&
          !get("instant_saveRicottaCasserole", false)
        ) {
          if (!have($item`baked veggie ricotta casserole`))
            create($item`baked veggie ricotta casserole`, 1);
          eat($item`baked veggie ricotta casserole`, 1);
        }
        if (
          itemAmount($item`St. Sneaky Pete's Whey`) >= 1 &&
          !have($effect`Awfully Wily`) &&
          !get("instant_saveWileyWheyBar", false)
        ) {
          create($item`Pete's wiley whey bar`, 1);
          eat($item`Pete's wiley whey bar`, 1);
        }
        haveCBBIngredients(true, true);
        if (have($item`SMOOCH coffee cup`)) chew($item`SMOOCH coffee cup`, 1);
        sendAutumnaton();
        sellMiscellaneousItems();
        burnLibram(500);
        refillLatte();
      },
      limit: { tries: 22 },
    },
    {
      name: "Open wardrobe-o-matic", // Assume we won't be leveling any more, even in aftercore, for the rest of the day
      completed: () =>
        !have($item`wardrobe-o-matic`) ||
        $items`futuristic shirt, futuristic hat, futuristic collar`.some((it) => have(it)),
      do: () => use($item`wardrobe-o-matic`),
      limit: { tries: 1 },
    },
  ],
};
