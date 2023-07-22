import { CombatStrategy } from "grimoire-kolmafia";
import {
  buy,
  create,
  Effect,
  inebrietyLimit,
  myHash,
  myInebriety,
  myMeat,
  print,
  retrieveItem,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $effects,
  $familiar,
  $item,
  $location,
  $skill,
  CommunityService,
  get,
  have,
  SongBoom,
} from "libram";
import Macro, { haveFreeBanish } from "../combat";
import { chooseFamiliar, sugarItemsAboutToBreak } from "../engine/outfit";
import { Quest } from "../engine/task";
import { logTestSetup, tryAcquiringEffect, wishFor } from "../lib";

export const WeaponDamageQuest: Quest = {
  name: "Weapon Damage",
  completed: () => CommunityService.WeaponDamage.isDone(),
  tasks: [
    {
      name: "Drink Sockdollager",
      completed: () =>
        have($effect`In a Lather`) ||
        myInebriety() >= inebrietyLimit() - 1 ||
        myMeat() < 500 ||
        get("instant_saveSockdollager", false),
      do: (): void => {
        tryAcquiringEffect($effect`Ode to Booze`);
        visitUrl(`clan_viplounge.php?preaction=speakeasydrink&drink=6&pwd=${+myHash()}`); // Sockdollager
      },
      limit: { tries: 1 },
    },
    {
      name: "Potion of Potency",
      completed: () =>
        have($item`potion of potency`) ||
        have($effect`Pronounced Potency`) ||
        !have($item`scrumptious reagent`),
      do: () => create($item`potion of potency`, 1),
      limit: { tries: 1 },
    },
    {
      name: "Cargo Shorts",
      completed: () =>
        get("_cargoPocketEmptied") ||
        !have($item`Cargo Cultist Shorts`) ||
        get("instant_saveCargoShorts", false),
      do: (): void => {
        visitUrl("inventory.php?action=pocket");
        visitUrl("choice.php?whichchoice=1420&option=1&pocket=284");
      },
      limit: { tries: 1 },
    },
    {
      name: "Carol Ghost Buff",
      completed: () =>
        !have($familiar`Ghost of Crimbo Carols`) ||
        !haveFreeBanish() ||
        $effects`Do You Crush What I Crush?, Holiday Yoked, Let It Snow/Boil/Stink/Frighten/Grease, All I Want For Crimbo Is Stuff, Crimbo Wrapping`.some(
          (ef) => have(ef)
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
    },
    {
      name: "Glob of Melted Wax",
      completed: () => !have($item`glob of melted wax`) || have($item`wax hand`),
      do: () => create($item`wax hand`, 1),
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
          .trySkill($skill`Use the Force`)
          .abort()
      ),
      outfit: () => ({
        weapon: $item`Fourth of May Cosplay Saber`,
        familiar: chooseFamiliar(false),
        avoid: sugarItemsAboutToBreak(),
      }),
      choices: { 1387: 3 },
      limit: { tries: 1 },
    },
    {
      name: "Test",
      prepare: (): void => {
        if (have($item`SongBoom™ BoomBox`)) SongBoom.setSong("These Fists Were Made for Punchin'");
        if (!have($item`goofily-plumed helmet`)) buy($item`goofily-plumed helmet`, 1);
        if (have($item`Ye Wizard's Shack snack voucher`)) retrieveItem($item`wasabi marble soda`);
        const usefulEffects: Effect[] = [
          $effect`Billiards Belligerence`,
          $effect`Bow-Legged Swagger`,
          $effect`Carol of the Bulls`,
          $effect`Cowrruption`,
          $effect`Disdain of the War Snapper`,
          $effect`Faboooo`,
          $effect`Feeling Punchy`,
          $effect`Frenzied, Bloody`,
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
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));
        // If it saves us >= 6 turns, try using a wish
        if (CommunityService.WeaponDamage.actualCost() >= 7) wishFor($effect`Outer Wolf™`);
        $effects`Spit Upon, Pyramid Power`.forEach((ef) => {
          if (CommunityService.WeaponDamage.actualCost() >= 5) wishFor(ef); // The effects each save 2 turns on spelltest as well
        });
      },
      completed: () => CommunityService.WeaponDamage.isDone(),
      do: (): void => {
        const maxTurns = get("instant_wpnTestTurnLimit", 35);
        const testTurns = CommunityService.WeaponDamage.actualCost();
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
          print(
            "You may also increase the turn limit by typing 'set instant_wpnTestTurnLimit=<new limit>'",
            "red"
          );
        }
        CommunityService.WeaponDamage.run(
          () => logTestSetup(CommunityService.WeaponDamage),
          maxTurns
        );
      },
      outfit: { modifier: "weapon dmg, switch disembodied hand, -switch left-hand man" },
      limit: { tries: 1 },
    },
  ],
};
