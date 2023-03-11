import { Quest } from "../engine/task";
import {
  adv1,
  availableChoiceOptions,
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
  inebrietyLimit,
  Item,
  itemAmount,
  lastChoice,
  Location,
  Monster,
  myBasestat,
  myFullness,
  myHash,
  myInebriety,
  myLevel,
  myMaxhp,
  myMaxmp,
  myMeat,
  myMp,
  mySoulsauce,
  restoreHp,
  restoreMp,
  runChoice,
  storageAmount,
  takeStorage,
  toItem,
  totalFreeRests,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
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
  CombatLoversLocket,
  ensureEffect,
  get,
  getKramcoWandererChance,
  have,
  set,
  SongBoom,
  TunnelOfLove,
  uneffect,
  Witchess,
} from "libram";
import { CombatStrategy } from "grimoire-kolmafia";
import Macro from "../combat";
import { rufusTargetString, tryAcquiringEffect } from "../lib";

const freeFightMonsters: Monster[] = $monsters`Witchess Bishop, Witchess King, Witchess Witch, sausage goblin, Eldritch Tentacle`;
const craftedCBBFoods: Item[] = $items`honey bun of Boris, roasted vegetable of Jarlsberg, Pete's rich ricotta, plain calzone`;
const usefulEffects: Effect[] = [
  // Stats
  $effect`Big`,
  $effect`Pasta Oneness`,
  $effect`Saucemastery`,
  $effect`Disdain of She-Who-Was`,
  $effect`Glittering Eyelashes`,
  $effect`Feeling Excited`,
  $effect`Triple-Sized`,
  $effect`substats.enh`,
  $effect`Hulkien`,
  $effect`Uncucumbered`,
  $effect`We're All Made of Starfish`,
  $effect`Broad-Spectrum Vaccine`,
  // $effect`Think Win-Lose`,
  // $effect`Confidence of the Votive`,
  $effect`Song of Bravado`,

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
  $effect`Carol of the Hells`,
];

function powerlevelingLocation(): Location {
  if (get("neverendingPartyAlways")) return $location`The Neverending Party`;
  else if (get("stenchAirportAlways") || get("_stenchAirportToday"))
    return $location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`;
  else if (get("spookyAirportAlways")) return $location`The Deep Dark Jungle`;
  else if (get("hotAirportAlways")) return $location`The SMOOCH Army HQ`;
  else if (get("coldAirportAlways")) return $location`VYKEA`;
  else if (get("sleazeAirportAlways")) return $location`Sloppy Seconds Diner`;
  return $location.none;
}

export const LevelingQuest: Quest = {
  name: "Leveling",
  completed: () => get("csServicesPerformed").split(",").length > 1,
  tasks: [
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
        ensureEffect($effect`Thaumodynamic`);
      },
      limit: { tries: 1 },
    },
    {
      name: "Inscrutable Gaze",
      completed: () => have($effect`Inscrutable Gaze`) || !have($skill`Inscrutable Gaze`),
      do: (): void => ensureEffect($effect`Inscrutable Gaze`),
    },
    {
      name: "Pulls",
      completed: () => get("_roninStoragePulls").split(",").length >= 3,
      do: (): void => {
        takeStorage($item`Deep Dish of Legend`, 1);
        takeStorage($item`Calzone of Legend`, 1);
        takeStorage($item`Pizza of Legend`, 1);
        if (powerlevelingLocation() === $location.none) {
          takeStorage($item`one-day ticket to Dinseylandfill`, 1);
          use($item`one-day ticket to Dinseylandfill`, 1);
        }
        if (
          have($item`Deep Dish of Legend`) &&
          have($item`Calzone of Legend`) &&
          have($item`Pizza of Legend`) &&
          powerlevelingLocation() !== $location.none
        ) {
          if (
            storageAmount($item`non-Euclidean angle`) > 0 &&
            get("_roninStoragePulls").split(",").length <= 4
          ) {
            takeStorage($item`non-Euclidean angle`, 1);
            chew($item`non-Euclidean angle`, 1);
          }
          if (
            storageAmount($item`abstraction: category`) > 0 &&
            get("_roninStoragePulls").split(",").length <= 4
          ) {
            takeStorage($item`abstraction: category`, 1);
            chew($item`abstraction: category`);
          }
        }
      },
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
      completed: () => get("timesRested") >= totalFreeRests() || myMp() >= myMaxmp(),
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
      name: "Breakfast",
      completed: () => get("breakfastCompleted"),
      do: (): void => {
        cliExecute("breakfast");
        cliExecute("refresh all");
      },
      limit: { tries: 1 },
    },
    {
      name: "Eat Calzone",
      completed: () => get("calzoneOfLegendEaten"),
      do: () => eat($item`Calzone of Legend`, 1),
      limit: { tries: 1 },
    },
    {
      name: "Drink Perfect Dark and Stormy",
      completed: () => (get("_preventScurvy") && get("_perfectFreezeUsed")) || myInebriety() >= 3,
      do: (): void => {
        useSkill($skill`Perfect Freeze`);
        useSkill($skill`Prevent Scurvy and Sobriety`);
        create($item`perfect dark and stormy`, 1);
        tryAcquiringEffect($effect`Ode to Booze`);
        drink($item`perfect dark and stormy`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Consult Gorgonzola",
      completed: () => get("_clanFortuneBuffUsed"),
      do: () => cliExecute("fortune buff mys"),
      limit: { tries: 1 },
    },
    {
      name: "Use Glittery Mascara",
      completed: () => have($effect`Glittering Eyelashes`),
      do: () => ensureEffect($effect`Glittering Eyelashes`),
    },
    {
      name: "Use Ointment of the Occult",
      completed: () => have($effect`Mystically Oiled`),
      do: (): void => {
        if (!have($item`ointment of the occult`)) {
          if (get("reagentSummons") === 0) useSkill($skill`Advanced Saucecrafting`, 1);
          create($item`ointment of the occult`, 1);
        }
        ensureEffect($effect`Mystically Oiled`);
      },
    },
    {
      name: "Use Oil of Expertise",
      completed: () =>
        (!have($item`cherry`) && itemAmount($item`oil of expertise`) <= 1) ||
        have($effect`Expert Oiliness`),
      do: (): void => {
        if (!have($item`oil of expertise`)) {
          if (get("reagentSummons") === 0) useSkill($skill`Advanced Saucecrafting`, 1);
          create($item`oil of expertise`, 1);
        }
        if (itemAmount($item`oil of expertise`) > 1)
          use($item`oil of expertise`, itemAmount($item`oil of expertise`) - 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Buy Oversized Sparkler",
      ready: () => have($effect`Everything Looks Blue`) && myMeat() >= 1000,
      completed: () => have($item`oversized sparkler`),
      do: () => buy($item`oversized sparkler`, 1),
      limit: { tries: 1 },
    },
    {
      name: "Eat Pizza",
      ready: () => have($effect`Ready to Eat`), // only eat this after we red rocket
      completed: () => get("pizzaOfLegendEaten"),
      do: (): void => {
        eat($item`Pizza of Legend`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Drink Astral Pilsners",
      ready: () => myLevel() >= 11,
      completed: () =>
        myInebriety() >= inebrietyLimit() ||
        (!have($item`astral six-pack`) && !have($item`astral pilsner`)),
      prepare: () => tryAcquiringEffect($effect`Ode to Booze`),
      do: (): void => {
        if (have($item`astral six-pack`)) use($item`astral six-pack`, 1);
        drink($item`astral pilsner`, 1);
      },
      post: (): void => {
        if (!have($item`astral six-pack`) && !have($item`astral pilsner`))
          uneffect($effect`Ode to Booze`);
      },
      limit: { tries: 6 },
    },
    {
      name: "Get Rufus Quest",
      completed: () =>
        // eslint-disable-next-line libram/verify-constants
        have($item`Rufus's shadow lodestone`) || toItem(get("rufusQuestTarget", "")) !== $item.none,
      do: () =>
        // eslint-disable-next-line libram/verify-constants
        use($item`closed-circuit pay phone`),
      choices: {
        1497: 2,
        1498: 6,
      },
      limit: { tries: 1 },
    },
    {
      name: "Shadow Rift",
      ready: () =>
        // eslint-disable-next-line libram/verify-constants
        toItem(get("rufusQuestTarget", "")) !== $item.none,
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (!have($effect`Everything Looks Red`) && !have($item`red rocket`))
          buy($item`red rocket`, 1);
        if (!have($effect`Everything Looks Blue`) && !have($item`blue rocket`))
          buy($item`blue rocket`, 1);
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        restoreMp(50);
      },
      completed: () =>
        // eslint-disable-next-line libram/verify-constants
        have($item`Rufus's shadow lodestone`) || get("_shadowRiftCombats", 0) >= 12,
      // eslint-disable-next-line libram/verify-constants
      do: (): void => {
        visitUrl("place.php?whichplace=town_right&action=townright_shadowrift");
        // TODO: Figure out how to get the right NC choice
        if (lastChoice() === 1499) {
          let NCChoice = 6;
          while (NCChoice === 6) {
            const availableChoices = availableChoiceOptions(true);
            const currentChoice = [2, 3, 4].filter((choice) =>
              availableChoices[choice].includes(
                rufusTargetString.get(get("rufusQuestTarget", "")) ?? ""
              )
            );
            if (currentChoice.length > 0) NCChoice = currentChoice[0];
            else runChoice(5);
          }
          runChoice(NCChoice);
        }
      },
      combat: new CombatStrategy().macro(
        Macro.tryItem($item`red rocket`)
          .tryItem($item`blue rocket`)
          .default()
      ),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        familiar: $familiar`Cookbookbat`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      choices: {
        1498: 1,
      },
      post: (): void => {
        if (have($item`autumn-aton`)) cliExecute("autumnaton send Shadow Rift");
        if (have(toItem(get("_rufusArtifact", "")))) {
          // eslint-disable-next-line libram/verify-constants
          use($item`closed-circuit pay phone`);
          set("_rufusArtifact", "");
        }
      },
      limit: { tries: 12 },
    },
    {
      name: "Snojo",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (get("snojoSetting") === null) {
          visitUrl("place.php?whichplace=snojo&action=snojo_controller");
          runChoice(1);
        }
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        restoreMp(50);
      },
      completed: () => get("_snojoFreeFights") >= 10 || !get("snojoAvailable"),
      do: $location`The X-32-F Combat Training Snowman`,
      combat: new CombatStrategy().macro(Macro.default()),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        familiar: $familiar`Cookbookbat`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      limit: { tries: 10 },
      post: (): void => {
        if (get("_snojoFreeFights") >= 10) cliExecute("hottub");
        if (have($item`autumn-aton`)) cliExecute("autumnaton send Shadow Rift");
      },
    },
    {
      name: "Snokebomb",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        restoreMp(50);
      },
      completed: () => get("_snokebombUsed") >= 3,
      do: powerlevelingLocation(),
      combat: new CombatStrategy().macro(Macro.trySkill($skill`Snokebomb`).abort()),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        familiar: $familiar`Cookbookbat`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      choices: {
        1094: 5,
        1115: 6,
        1322: 2,
        1324: 5,
      },
      post: (): void => {
        if (have($item`autumn-aton`)) cliExecute("autumnaton send Shadow Rift");
      },
      limit: { tries: 4 },
    },
    {
      name: "Backups",
      ready: () => freeFightMonsters.includes(get("lastCopyableMonster") ?? $monster.none),
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        if (
          have($item`January's Garbage Tote`) &&
          get("garbageShirtCharge") > 0 &&
          have($skill`Torso Awareness`)
        ) {
          if (get("garbageShirtCharge") === 1) {
            if (equippedItem($slot`shirt`) === $item`makeshift garbage shirt`)
              equip($slot`shirt`, $item.none);
          } else {
            if (!have($item`makeshift garbage shirt`)) cliExecute("fold makeshift garbage shirt");
            equip($slot`shirt`, $item`makeshift garbage shirt`);
          }
        }
        if (have($item`LOV Epaulettes`)) equip($slot`back`, $item`LOV Epaulettes`);
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () =>
        !have($item`backup camera`) ||
        !freeFightMonsters.includes(get("lastCopyableMonster") ?? $monster.none) ||
        get("_backUpUses") >= 11,
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Back-Up to your Last Enemy`).default()
      ),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        acc3: $item`backup camera`,
        familiar: $familiar`Cookbookbat`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      post: (): void => {
        if (!freeFightMonsters.includes(get("lastCopyableMonster") ?? $monster.none))
          throw new Error("Fought unexpected monster");
        if (have($item`magical sausage casing`) && myMeat() >= 3000)
          create($item`magical sausage`, itemAmount($item`magical sausage casing`));
        eat(itemAmount($item`magical sausage`), $item`magical sausage`);
      },
      limit: { tries: 11 },
    },
    {
      name: "Kramco",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        if (
          have($item`January's Garbage Tote`) &&
          get("garbageShirtCharge") > 0 &&
          have($skill`Torso Awareness`)
        ) {
          if (get("garbageShirtCharge") === 1) {
            if (equippedItem($slot`shirt`) === $item`makeshift garbage shirt`)
              equip($slot`shirt`, $item.none);
          } else {
            if (!have($item`makeshift garbage shirt`)) cliExecute("fold makeshift garbage shirt");
            equip($slot`shirt`, $item`makeshift garbage shirt`);
          }
        }
        if (have($item`LOV Epaulettes`)) equip($slot`back`, $item`LOV Epaulettes`);
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
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
      post: (): void => {
        if (have($item`magical sausage casing`) && myMeat() >= 3000)
          create($item`magical sausage`, itemAmount($item`magical sausage casing`));
        eat(itemAmount($item`magical sausage`), $item`magical sausage`);
        if (have($item`autumn-aton`)) cliExecute("autumnaton send Shadow Rift");
      },
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
      name: "Red Skeleton",
      ready: () => !have($effect`Everything Looks Yellow`),
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (!have($item`yellow rocket`)) buy($item`yellow rocket`, 1);
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
      },
      completed: () => CombatLoversLocket.monstersReminisced().includes($monster`red skeleton`),
      do: () => CombatLoversLocket.reminisce($monster`red skeleton`),
      combat: new CombatStrategy().macro(Macro.tryItem($item`yellow rocket`).abort()),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        familiar: $familiar`Cookbookbat`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      post: (): void => {
        use($item`red box`, 1);
        if (have($item`autumn-aton`)) cliExecute("autumnaton send Shadow Rift");
      },
      limit: { tries: 1 },
    },
    {
      name: "LOV Tunnel",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        tryAcquiringEffect($effect`Comic Violence`);
      },
      completed: () => get("_loveTunnelUsed") || !get("loveTunnelAvailable"),
      do: () =>
        TunnelOfLove.fightAll(
          "LOV Epaulettes",
          "Open Heart Surgery",
          "LOV Extraterrestrial Chocolate"
        ),
      combat: new CombatStrategy().macro(
        Macro.if_($monster`LOV Enforcer`, Macro.attack().repeat())
          .if_($monster`LOV Engineer`, Macro.default())
          .if_($monster`LOV Equivocator`, Macro.default())
      ),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        familiar: $familiar`Cookbookbat`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      limit: { tries: 1 },
      post: (): void => {
        if (have($effect`Beaten Up`)) cliExecute("hottub");
        if (have($item`LOV Extraterrestrial Chocolate`))
          use($item`LOV Extraterrestrial Chocolate`, 1);
        if (have($item`autumn-aton`)) cliExecute("autumnaton send Shadow Rift");
      },
    },
    {
      name: "Oliver's Place",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        if (have($item`LOV Epaulettes`)) equip($slot`back`, $item`LOV Epaulettes`);
        restoreMp(50);
      },
      completed: () => get("_speakeasyFreeFights", 0) >= 3 || !get("ownsSpeakeasy"),
      do: $location`An Unusually Quiet Barroom Brawl`,
      combat: new CombatStrategy().macro(Macro.default()),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        familiar: $familiar`Cookbookbat`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      limit: { tries: 3 },
      post: (): void => {
        if (have($item`autumn-aton`)) cliExecute("autumnaton send Shadow Rift");
      },
    },
    {
      name: "God Lobster",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        if (have($item`LOV Epaulettes`)) equip($slot`back`, $item`LOV Epaulettes`);
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () => get("_godLobsterFights") >= 3 || !have($familiar`God Lobster`),
      do: () => visitUrl("main.php?fightgodlobster=1"),
      combat: new CombatStrategy().macro(Macro.default()),
      choices: { 1310: () => (have($item`God Lobster's Ring`) ? 2 : 3) }, // Get xp on last fight
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        famequip: $items`God Lobster's Ring, God Lobster's Scepter, none`,
        familiar: $familiar`God Lobster`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      acquire: [{ item: $item`makeshift garbage shirt` }],
      limit: { tries: 3 },
      post: (): void => {
        if (have($item`autumn-aton`)) cliExecute("autumnaton send Shadow Rift");
      },
    },
    {
      name: "Eldritch Tentacle",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        if (have($item`LOV Epaulettes`)) equip($slot`back`, $item`LOV Epaulettes`);
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () => get("_eldritchHorrorEvoked") || !have($skill`Evoke Eldritch Horror`),
      do: () => useSkill($skill`Evoke Eldritch Horror`),
      post: (): void => {
        if (have($effect`Beaten Up`)) cliExecute("hottub");
        if (have($item`autumn-aton`)) cliExecute("autumnaton send Shadow Rift");
      },
      combat: new CombatStrategy().macro(Macro.default()),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        familiar: $familiar`Cookbookbat`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      limit: { tries: 1 },
    },
    {
      name: "Witchess Bishop",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        if (have($item`LOV Epaulettes`)) equip($slot`back`, $item`LOV Epaulettes`);
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () => get("_witchessFights") >= 5 || !Witchess.have(),
      do: () => Witchess.fightPiece($monster`Witchess Bishop`),
      combat: new CombatStrategy().macro(Macro.default()),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        familiar: $familiar`Cookbookbat`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      post: (): void => {
        if (have($item`autumn-aton`)) cliExecute("autumnaton send Shadow Rift");
      },
      limit: { tries: 5 },
    },
    {
      name: "DMT",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        if (have($item`LOV Epaulettes`)) equip($slot`back`, $item`LOV Epaulettes`);
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () => get("_machineTunnelsAdv") >= 5 || !have($familiar`Machine Elf`),
      do: () => adv1($location`The Deep Machine Tunnels`, -1),
      combat: new CombatStrategy().macro(Macro.default()),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        familiar: $familiar`Machine Elf`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      limit: { tries: 5 },
      post: (): void => {
        if (have($item`autumn-aton`)) cliExecute("autumnaton send Shadow Rift");
      },
    },
    {
      name: "Powerlevel",
      completed: () =>
        myBasestat($stat`Mysticality`) >= 175 &&
        ((itemAmount($item`Yeast of Boris`) >= 3 &&
          itemAmount($item`Vegetable of Jarlsberg`) >= 3 &&
          itemAmount($item`St. Sneaky Pete's Whey`) >= 6) ||
          craftedCBBFoods.every((it) => have(it) || have(effectModifier(it, "effect")))) &&
        (powerlevelingLocation() !== $location`The Neverending Party` ||
          get("_neverendingPartyFreeTurns") >= 10),
      do: powerlevelingLocation(),
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        if (
          have($item`January's Garbage Tote`) &&
          get("garbageShirtCharge") > 0 &&
          have($skill`Torso Awareness`)
        ) {
          if (get("garbageShirtCharge") === 1) {
            if (equippedItem($slot`shirt`) === $item`makeshift garbage shirt`)
              equip($slot`shirt`, $item.none);
          } else {
            if (!have($item`makeshift garbage shirt`)) cliExecute("fold makeshift garbage shirt");
            equip($slot`shirt`, $item`makeshift garbage shirt`);
          }
        }
        if (have($item`LOV Epaulettes`)) equip($slot`back`, $item`LOV Epaulettes`);
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        familiar: $familiar`Cookbookbat`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      limit: { tries: 60 },
      choices: {
        1094: 5,
        1115: 6,
        1322: 2,
        1324: 5,
      },
      combat: new CombatStrategy().macro(Macro.trySkill($skill`Bowl Sideways`).default()),
      post: (): void => {
        if (have($item`SMOOCH coffee cup`)) chew($item`SMOOCH coffee cup`, 1);
        if (have($item`autumn-aton`)) cliExecute("autumnaton send Shadow Rift");
      },
    },
    {
      name: "Pre-free-fights consumption",
      after: ["Powerlevel"],
      completed: () => myFullness() >= 11 && myInebriety() >= 12,
      do: (): void => {
        if (itemAmount($item`wad of dough`) < 2) {
          buy($item`all-purpose flower`, 1);
          use($item`all-purpose flower`, 1);
        }

        if (get("_speakeasyDrinksDrunk") === 0) {
          tryAcquiringEffect($effect`Ode to Booze`);
          visitUrl(`clan_viplounge.php?preaction=speakeasydrink&drink=5&pwd=${+myHash()}`); // Bee's Knees
        }

        [...craftedCBBFoods, $item`Deep Dish of Legend`].forEach((it) => {
          if (!have(effectModifier(it, "effect"))) {
            if (!have(it)) create(it, 1);
            eat(it, 1);
          }
        });

        if (itemAmount($item`Vegetable of Jarlsberg`) >= 4 && !have($effect`Pretty Delicious`)) {
          if (!have($item`baked veggie ricotta casserole`))
            create($item`baked veggie ricotta casserole`, 1);
          eat($item`baked veggie ricotta casserole`, 1);
        }
      },
      post: (): void => {
        tryAcquiringEffect($effect`Favored by Lyle`);
        tryAcquiringEffect($effect`Starry-Eyed`);
      },
    },
    {
      name: "Witchess King",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        if (
          have($item`January's Garbage Tote`) &&
          get("garbageShirtCharge") > 0 &&
          have($skill`Torso Awareness`)
        ) {
          if (get("garbageShirtCharge") === 1) {
            if (equippedItem($slot`shirt`) === $item`makeshift garbage shirt`)
              equip($slot`shirt`, $item.none);
          } else {
            if (!have($item`makeshift garbage shirt`)) cliExecute("fold makeshift garbage shirt");
            equip($slot`shirt`, $item`makeshift garbage shirt`);
          }
        }
        if (have($item`LOV Epaulettes`)) equip($slot`back`, $item`LOV Epaulettes`);
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
        restoreMp(50);
      },
      completed: () => CombatLoversLocket.monstersReminisced().includes($monster`Witchess King`),
      do: () => CombatLoversLocket.reminisce($monster`Witchess King`),
      combat: new CombatStrategy().macro(Macro.default()),
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        familiar: $familiar`Cookbookbat`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      limit: { tries: 1 },
    },
    {
      name: "Free Kills and More Fights",
      after: ["Pre-free-fights consumption"],
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
          cliExecute("umbrella ml");
        if (
          have($item`January's Garbage Tote`) &&
          get("garbageShirtCharge") > 0 &&
          have($skill`Torso Awareness`)
        ) {
          if (get("garbageShirtCharge") === 1) {
            if (equippedItem($slot`shirt`) === $item`makeshift garbage shirt`)
              equip($slot`shirt`, $item.none);
          } else {
            if (!have($item`makeshift garbage shirt`)) cliExecute("fold makeshift garbage shirt");
            equip($slot`shirt`, $item`makeshift garbage shirt`);
          }
        }
        if (have($item`Lil' Doctor™ bag`) && get("_chestXRayUsed") < 3)
          equip($slot`acc3`, $item`Lil' Doctor™ bag`);
        if (have($item`LOV Epaulettes`)) equip($slot`back`, $item`LOV Epaulettes`);
        restoreMp(50);
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
      },
      outfit: {
        offhand: $item`unbreakable umbrella`,
        acc1: $item`codpiece`,
        familiar: $familiar`Cookbookbat`,
        modifier: "0.25 mys, 0.33 ML, -equip tinsel tights, -equip wad of used tape",
      },
      completed: () =>
        get("_shatteringPunchUsed") >= 3 &&
        get("_gingerbreadMobHitUsed") &&
        have($effect`Pretty Delicious`) &&
        (have($effect`Awfully Wily`) || myBasestat($stat`Mysticality`) >= 190),
      do: powerlevelingLocation(),
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Feel Pride`)
          .trySkill($skill`Chest X-Ray`)
          .trySkill($skill`Shattering Punch`)
          .trySkill($skill`Gingerbread Mob Hit`)
          .trySkill($skill`Bowl Sideways`)
          .default()
      ),
      choices: {
        1094: 5,
        1115: 6,
        1322: 2,
        1324: 5,
      },
      post: (): void => {
        if (itemAmount($item`Vegetable of Jarlsberg`) >= 4 && !have($effect`Pretty Delicious`)) {
          if (!have($item`baked veggie ricotta casserole`))
            create($item`baked veggie ricotta casserole`, 1);
          eat($item`baked veggie ricotta casserole`, 1);
        }
        if (itemAmount($item`St. Sneaky Pete's Whey`) >= 1 && !have($effect`Awfully Wily`)) {
          create($item`Pete's wiley whey bar`, 1);
          eat($item`Pete's wiley whey bar`, 1);
        }
        if (have($item`SMOOCH coffee cup`)) chew($item`SMOOCH coffee cup`, 1);
        if (have($item`autumn-aton`)) cliExecute("autumnaton send Shadow Rift");
      },
      limit: { tries: 20 },
    },
  ],
};
