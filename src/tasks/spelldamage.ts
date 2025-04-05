import { CombatStrategy } from "grimoire-kolmafia";
import {
  buy,
  cliExecute,
  drink,
  Effect,
  elementalResistance,
  equip,
  equippedItem,
  haveEquipped,
  inebrietyLimit,
  myAdventures,
  myBasestat,
  myClass,
  myHp,
  myInebriety,
  myMaxhp,
  myThrall,
  numericModifier,
  outfit,
  print,
  restoreHp,
  restoreMp,
  retrieveItem,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $effect,
  $effects,
  $element,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  $slot,
  $stat,
  $thrall,
  clamp,
  Clan,
  CommunityService,
  get,
  have,
} from "libram";
import { Quest } from "../engine/task";
import {
  handleCustomPulls,
  logTestSetup,
  motherSlimeClan,
  startingClan,
  tryAcquiringEffect,
} from "../lib";
import Macro, { haveFreeBanish, haveMotherSlimeBanish } from "../combat";
import { sugarItemsAboutToBreak } from "../outfit";
import { forbiddenEffects } from "../resources";
import { chooseFamiliar } from "../familiars";

let triedDeepDark = false;
const spellTestMaximizerString = "spell dmg, switch disembodied hand, -switch left-hand man";

export const SpellDamageQuest: Quest = {
  name: "Spell Damage",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [
    {
      name: "Simmer",
      completed: () => have($effect`Simmering`) || !have($skill`Simmer`),
      do: () => useSkill($skill`Simmer`),
      outfit: {
        offhand: $item`April Shower Thoughts shield`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Cargo Shorts",
      ready: () => !get("instant_saveCargoShorts", false),
      completed: () => get("_cargoPocketEmptied") || !have($item`Cargo Cultist Shorts`),
      do: (): void => {
        visitUrl("inventory.php?action=pocket");
        visitUrl("choice.php?whichchoice=1420&option=1&pocket=177");
      },
      limit: { tries: 1 },
    },
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
      name: "Inner Elf",
      prepare: (): void => {
        if (have($item`Jurassic Parka`)) cliExecute("parka pterodactyl");
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (
          myHp() > 30 &&
          !$items`Jurassic Parka, Eight Days a Week Pill Keeper`.some((i) => haveEquipped(i))
        ) {
          tryAcquiringEffect($effect`Blood Bubble`);
          restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        }
        restoreMp(50);
        Clan.join(motherSlimeClan);
      },
      completed: () =>
        !have($familiar`Machine Elf`) ||
        !haveMotherSlimeBanish() ||
        have($effect`Inner Elf`) ||
        motherSlimeClan === "",
      do: $location`The Slime Tube`,
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`KGB tranquilizer dart`)
          .trySkill($skill`Snokebomb`)
          .abort(),
      ),
      choices: { 326: 1 },
      outfit: {
        shirt: $item`Jurassic Parka`,
        acc1: $item`Kremlin's Greatest Briefcase`,
        acc2: $item`Eight Days a Week Pill Keeper`,
        familiar: $familiar`Machine Elf`,
        modifier: "init",
      },
      post: () => Clan.join(startingClan),
      limit: { tries: 1 },
    },
    {
      name: "Meteor Shower",
      completed: () =>
        have($effect`Meteor Showered`) ||
        !have($item`Fourth of May Cosplay Saber`) ||
        !have($skill`Meteor Lore`) ||
        get("_saberForceUses") >= 5,
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Meteor Shower`)
          .trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Use the Force`)
          .abort(),
      ),
      outfit: () => ({
        weapon: $item`Fourth of May Cosplay Saber`,
        familiar: get("camelSpit") >= 100 ? $familiar`Melodramedary` : chooseFamiliar(false),
        avoid: sugarItemsAboutToBreak(),
      }),
      choices: { 1387: 3 },
      limit: { tries: 1 },
    },
    {
      name: "Deep Dark Visions",
      completed: () =>
        have($effect`Visions of the Deep Dark Deeps`) ||
        forbiddenEffects.includes($effect`Visions of the Deep Dark Deeps`) ||
        !have($skill`Deep Dark Visions`) ||
        triedDeepDark,
      prepare: () =>
        $effects`Astral Shell, Elemental Saucesphere`.forEach((ef) => tryAcquiringEffect(ef)),
      do: (): void => {
        triedDeepDark = true;
        const resist = 1 - elementalResistance($element`spooky`) / 100;
        const neededHp = Math.max(500, myMaxhp() * 4 * resist);
        if (myMaxhp() < neededHp) return;
        if (myHp() < neededHp) restoreHp(neededHp);
        tryAcquiringEffect($effect`Visions of the Deep Dark Deeps`);
      },
      outfit: { modifier: "HP 500max, Spooky Resistance", familiar: $familiar`Exotic Parrot` },
      limit: { tries: 1 },
    },
    {
      name: "Stick-Knife Trick",
      ready: () =>
        get("instant_stickKnifeOutfit") !== "" &&
        myClass() === $class`Pastamancer` &&
        have($item`Stick-Knife of Loathing`) &&
        (have($skill`Bind Undead Elbow Macaroni`) || myThrall() === $thrall`Elbow Macaroni`),
      completed: () =>
        haveEquipped($item`Stick-Knife of Loathing`) ||
        have($familiar`Disembodied Hand`) ||
        myBasestat($stat`Mysticality`) < 150 ||
        myBasestat($stat`Muscle`) >= 150,
      do: (): void => {
        if (myThrall() !== $thrall`Elbow Macaroni`) useSkill($skill`Bind Undead Elbow Macaroni`);
        outfit(get("instant_stickKnifeOutfit"));
      },
      limit: { tries: 1 },
    },
    {
      name: "Test",
      prepare: (): void => {
        if (!have($item`obsidian nutcracker`)) buy($item`obsidian nutcracker`, 1);
        if (
          have($item`Ye Wizard's Shack snack voucher`) &&
          !forbiddenEffects.includes($effect`Pisces in the Skyces`)
        )
          retrieveItem($item`tobiko marble soda`);
        const usefulEffects: Effect[] = [
          $effect`AAA-Charged`,
          $effect`Arched Eyebrow of the Archmage`,
          $effect`Carol of the Hells`,
          $effect`Cowrruption`,
          $effect`Destructive Resolve`,
          $effect`Grumpy and Ornery`,
          $effect`Imported Strength`,
          $effect`Jackasses' Symphony of Destruction`,
          $effect`Mental A-cue-ity`,
          $effect`Pisces in the Skyces`,
          $effect`Song of Sauce`,
          $effect`Sigils of Yeg`,
          $effect`Spirit of Peppermint`,
          $effect`The Magic of LOV`,
          $effect`Warlock, Warstock, and Warbarrel`,
          $effect`We're All Made of Starfish`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));
        handleCustomPulls("instant_spellTestPulls", spellTestMaximizerString);

        const wines = $items`Sacramento wine, distilled fortified wine`;
        while (
          CommunityService.SpellDamage.actualCost() > myAdventures() &&
          myInebriety() < inebrietyLimit() &&
          wines.some((booze) => have(booze))
        ) {
          tryAcquiringEffect($effect`Ode to Booze`);
          drink(wines.filter((booze) => have(booze))[0], 1);
        }

        if (
          have($skill`Aug. 13th: Left/Off Hander's Day!`) &&
          !get("instant_saveAugustScepter", false) &&
          numericModifier(equippedItem($slot`off-hand`), "Spell Damage") +
            numericModifier(equippedItem($slot`off-hand`), "Spell Damage Percent") >
            0 &&
          CommunityService.SpellDamage.actualCost() > 1
        ) {
          tryAcquiringEffect($effect`Offhand Remarkable`);
        }
      },
      completed: () => CommunityService.SpellDamage.isDone(),
      do: (): void => {
        const maxTurns = get("instant_spellTestTurnLimit", 55);
        const testTurns = CommunityService.SpellDamage.actualCost();
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
          print(
            "You may also increase the turn limit by typing 'set instant_spellTestTurnLimit=<new limit>'",
            "red",
          );
        }
        CommunityService.SpellDamage.run(
          () => logTestSetup(CommunityService.SpellDamage),
          maxTurns,
        );
      },
      outfit: { modifier: spellTestMaximizerString },
      post: (): void => {
        if (have($skill`Spirit of Nothing`)) useSkill($skill`Spirit of Nothing`);
        if (have($familiar`Left-Hand Man`)) equip($familiar`Left-Hand Man`, $item.none);
      },
      limit: { tries: 1 },
    },
  ],
};
