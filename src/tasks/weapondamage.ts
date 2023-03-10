import { CombatStrategy } from "grimoire-kolmafia";
import {
  buy,
  cliExecute,
  create,
  Effect,
  inebrietyLimit,
  myHash,
  myInebriety,
  print,
  retrieveItem,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  CommunityService,
  get,
  have,
  Macro,
  SongBoom,
} from "libram";
import { Quest } from "../engine/task";
import { advCost, CommunityServiceTests, logTestSetup, tryAcquiringEffect } from "../lib";

export const WeaponDamageQuest: Quest = {
  name: "Weapon Damage",
  completed: () => CommunityService.WeaponDamage.isDone(),
  tasks: [
    {
      name: "Drink Sockdollager",
      completed: () => myInebriety() >= inebrietyLimit() - 1,
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
      completed: () => get("_cargoPocketEmptied") || !have($item`Cargo Cultist Shorts`),
      do: (): void => {
        visitUrl("inventory.php?action=pocket");
        visitUrl("choice.php?whichchoice=1420&option=1&pocket=284");
      },
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
      outfit: {
        weapon: $item`Fourth of May Cosplay Saber`,
        familiar: $familiar`Cookbookbat`,
      },
      choices: { 1387: 3 },
      limit: { tries: 1 },
    },
    {
      name: "Test",
      prepare: (): void => {
        if (have($item`SongBoom??? BoomBox`)) SongBoom.setSong("These Fists Were Made for Punchin'");
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

        if (!have($effect`Outer Wolf???`) && have($item`genie bottle`))
          cliExecute("genie effect outer wolf");
      },
      completed: () => CommunityService.WeaponDamage.isDone(),
      do: (): void => {
        const maxTurns = 35;
        const testTurns = advCost(CommunityServiceTests.WPNTEST);
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
        }
        CommunityService.WeaponDamage.run(
          () => logTestSetup(CommunityServiceTests.WPNTEST),
          maxTurns
        );
      },
      outfit: { modifier: "weapon dmg, switch disembodied hand, -switch left-hand man" },
      limit: { tries: 1 },
    },
  ],
};
