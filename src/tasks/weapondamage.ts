import { CombatStrategy, OutfitSpec } from "grimoire-kolmafia";
import {
  buy,
  cliExecute,
  create,
  Effect,
  equippedItem,
  getCampground,
  haveEquipped,
  inebrietyLimit,
  myBasestat,
  myClass,
  myHash,
  myHp,
  myInebriety,
  myMaxhp,
  myMeat,
  myThrall,
  numericModifier,
  outfit,
  restoreHp,
  retrieveItem,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  $slot,
  $stat,
  $thrall,
  BloodCubicZirconia,
  clamp,
  Clan,
  CommunityService,
  get,
  have,
  SongBoom,
} from "libram";
import Macro, { haveFreeBanish, haveMotherSlimeBanish } from "../combat";
import { sugarItemsAboutToBreak } from "../outfit";
import { Quest } from "../engine/task";
import {
  acquiredOrExcluded,
  attemptRestoringMpWithFreeRests,
  handleCustomBusks,
  handleCustomPulls,
  haveAndNotExcluded,
  motherSlimeClan,
  runTest,
  startingClan,
  tryAcquiringEffect,
  tryAcquiringEffects,
  tryAcquiringOdeToBooze,
  wishFor,
} from "../lib";
import { powerlevelingLocation } from "./leveling";
import { chooseFamiliar } from "../familiars";

const attemptKFH = have($skill`Kung Fu Hustler`) && haveAndNotExcluded($familiar`Disembodied Hand`);
const wpnTestMaximizerString = "weapon dmg, switch disembodied hand, -switch left-hand man";

export const WeaponDamageQuest: Quest = {
  name: "Weapon Damage",
  completed: () => CommunityService.WeaponDamage.isDone(),
  tasks: [
    {
      name: "Drink Sockdollager",
      completed: () =>
        acquiredOrExcluded($effect`In a Lather`) ||
        myInebriety() >= inebrietyLimit() - 1 ||
        myMeat() < 500 ||
        get("instant_saveSockdollager", false),
      do: (): void => {
        tryAcquiringOdeToBooze();
        visitUrl(`clan_viplounge.php?preaction=speakeasydrink&drink=6&pwd=${+myHash()}`); // Sockdollager
      },
      limit: { tries: 1 },
    },
    {
      name: "Potion of Potency",
      completed: () =>
        have($item`potion of potency`) ||
        acquiredOrExcluded($effect`Pronounced Potency`) ||
        !have($item`scrumptious reagent`) ||
        !have($item`orange`),
      do: () => create($item`potion of potency`, 1),
      limit: { tries: 1 },
    },
    {
      name: "Carol Ghost Buff",
      prepare: (): void => {
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        attemptRestoringMpWithFreeRests(50);
      },
      completed: () =>
        !haveAndNotExcluded($familiar`Ghost of Crimbo Carols`) ||
        !haveFreeBanish() ||
        acquiredOrExcluded($effect`Do You Crush What I Crush?`) ||
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
        restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        if (
          myHp() > 30 &&
          !$items`Jurassic Parka, Eight Days a Week Pill Keeper`.some((i) => haveEquipped(i))
        ) {
          tryAcquiringEffect($effect`Blood Bubble`);
          restoreHp(clamp(1000, myMaxhp() / 2, myMaxhp()));
        }
        attemptRestoringMpWithFreeRests(50);
        Clan.join(motherSlimeClan);
      },
      completed: () =>
        !haveAndNotExcluded($familiar`Machine Elf`) ||
        !haveMotherSlimeBanish() ||
        acquiredOrExcluded($effect`Inner Elf`) ||
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
        modes: { parka: "pterodactyl" },
      },
      post: () => Clan.join(startingClan),
      limit: { tries: 1 },
    },
    {
      name: "Glob of Melted Wax",
      completed: () => !have($item`glob of melted wax`) || have($item`wax hand`),
      do: (): void => {
        visitUrl("inv_use.php?whichitem=9310&which=3&pwd");
        visitUrl("choice.php?whichchoice=1218&option=2&pwd");
        visitUrl("main.php");
      },
      limit: { tries: 1 },
    },
    {
      name: "Meteor Shower",
      completed: () =>
        acquiredOrExcluded($effect`Meteor Showered`) ||
        !have($item`Fourth of May Cosplay Saber`) ||
        !have($skill`Meteor Lore`) ||
        get("_saberForceUses") >= 5,
      do: attemptKFH ? powerlevelingLocation() : $location`The Dire Warren`,
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Meteor Shower`)
          .trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Use the Force`)
          .abort(),
      ),
      outfit: (): OutfitSpec => {
        return attemptKFH
          ? {
              weapon: $item.none,
              offhand: $item.none,
              familiar: $familiar`Disembodied Hand`,
              famequip: $item`Fourth of May Cosplay Saber`,
              avoid: sugarItemsAboutToBreak(),
            }
          : {
              weapon: $item`Fourth of May Cosplay Saber`,
              familiar:
                haveAndNotExcluded($familiar`Melodramedary`) && get("camelSpit") >= 100
                  ? $familiar`Melodramedary`
                  : chooseFamiliar(false),
              avoid: sugarItemsAboutToBreak(),
            };
      },
      choices: { 1387: 3 },
      limit: { tries: 1 },
    },
    {
      name: "Favorite Bird (Weapon Damage)",
      completed: () =>
        !have($skill`Visit your Favorite Bird`) ||
        acquiredOrExcluded($effect`Blessing of your favorite Bird`) ||
        get("_favoriteBirdVisited") ||
        !get("yourFavoriteBirdMods").includes("Weapon Damage") ||
        get("instant_saveFavoriteBird", false),
      do: () => useSkill($skill`Visit your Favorite Bird`),
      limit: { tries: 1 },
    },
    {
      name: "Twen Tea",
      completed: () =>
        acquiredOrExcluded($effect`Twen Tea`) ||
        get("_pottedTeaTreeUsed") ||
        get("instant_saveTeaTree", false) ||
        getCampground()["potted tea tree"] === undefined,
      do: () => {
        cliExecute(`teatree cuppa Twen tea`);
        use($item`cuppa Twen tea`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "BCZ Blood Bath",
      completed: () =>
        !BloodCubicZirconia.have() ||
        BloodCubicZirconia.timesCast($skill`BCZ: Blood Bath`) > 0 ||
        get("instant_saveBCZBloodBath", false) ||
        acquiredOrExcluded($effect`Bloodbathed`),
      do: () => {
        useSkill($skill`BCZ: Blood Bath`);
      },
      outfit: {
        acc1: $item`blood cubic zirconia`,
      },
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
        if (have($item`SongBoom™ BoomBox`)) SongBoom.setSong("These Fists Were Made for Punchin'");
        if (!have($item`goofily-plumed helmet`)) buy($item`goofily-plumed helmet`, 1);
        if (
          have($item`Ye Wizard's Shack snack voucher`) &&
          !acquiredOrExcluded($effect`Wasabi With You`)
        )
          retrieveItem($item`wasabi marble soda`);
        const usefulEffects: Effect[] = [
          $effect`Barrel Chested`,
          $effect`Billiards Belligerence`,
          $effect`Bow-Legged Swagger`,
          $effect`Carol of the Bulls`,
          $effect`Cowrruption`,
          $effect`Destructive Resolve`,
          $effect`Disdain of the War Snapper`,
          $effect`Faboooo`,
          $effect`Feeling Punchy`,
          $effect`Frenzied, Bloody`,
          $effect`Grumpy and Ornery`,
          $effect`Imported Strength`,
          $effect`Jackasses' Symphony of Destruction`,
          $effect`Lack of Body-Building`,
          $effect`Pronounced Potency`,
          $effect`Rage of the Reindeer`,
          $effect`Rictus of Yeg`,
          $effect`Seeing Red`,
          $effect`Scowl of the Auk`,
          $effect`Song of the North`,
          $effect`Tenacity of the Snapper`,
          $effect`The Power of LOV`,
          $effect`Wasabi With You`,
          $effect`Weapon of Mass Destruction`,
        ];
        tryAcquiringEffects(usefulEffects, true);
        handleCustomPulls("instant_weaponTestPulls", wpnTestMaximizerString);
        handleCustomBusks("instant_weaponTestBusks");

        if (
          have($skill`Aug. 13th: Left/Off Hander's Day!`) &&
          !get("instant_saveAugustScepter", false) &&
          numericModifier(equippedItem($slot`off-hand`), "Weapon Damage") +
            numericModifier(equippedItem($slot`off-hand`), "Weapon Damage Percent") >
            0 &&
          CommunityService.WeaponDamage.actualCost() > 1
        ) {
          tryAcquiringEffect($effect`Offhand Remarkable`);
        }

        // If it saves us >= 6 turns, try using a wish
        if (CommunityService.WeaponDamage.actualCost() >= 7) wishFor($effect`Outer Wolf™`);
        $effects`Spit Upon, Pyramid Power`.forEach((ef) => {
          if (CommunityService.WeaponDamage.actualCost() >= 5) wishFor(ef); // The effects each save 2 turns on spelltest as well
        });

        if (
          !acquiredOrExcluded($effect`Rictus of Yeg`) &&
          CommunityService.WeaponDamage.actualCost() >= 5 &&
          !get("_cargoPocketEmptied") &&
          have($item`Cargo Cultist Shorts`) &&
          !get("instant_saveCargoShorts", false)
        ) {
          visitUrl("inventory.php?action=pocket");
          visitUrl("choice.php?whichchoice=1420&option=1&pocket=284");
          tryAcquiringEffect($effect`Rictus of Yeg`);
        }
      },
      completed: () => CommunityService.WeaponDamage.isDone(),
      do: (): void => runTest(CommunityService.WeaponDamage),
      outfit: { modifier: wpnTestMaximizerString },
      limit: { tries: 1 },
    },
  ],
};
