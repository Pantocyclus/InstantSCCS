import { CombatStrategy } from "grimoire-kolmafia";
import { effectModifier, use, useFamiliar } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  CommunityService,
  ensureEffect,
  get,
  have,
  Macro,
  SongBoom,
} from "libram";
import { Quest } from "../engine/task";
import { CommunityServiceTests, crimboCarols, logTestSetup } from "../lib";
import { burnLibram, innerElfTask } from "./common";

export const WeaponDamageQuest: Quest = {
  name: "Weapon Damage",
  completed: () => CommunityService.WeaponDamage.isDone(),
  tasks: [
    {
      name: "Carol",
      ready: () => crimboCarols.every((ef) => !have(ef)) && get("_reflexHammerUsed") < 3,
      completed: () => have($effect`Do You Crush What I Crush?`),
      do: $location`The Dire Warren`,
      combat: new CombatStrategy().macro(Macro.skill($skill`Reflex Hammer`)),
      outfit: {
        pants: $item`designer sweatpants`,
        acc1: $item`Lil' Doctor™ bag`,
        familiar: $familiar`Ghost of Crimbo Carols`,
        famequip: $item`none`,
      },
      limit: { tries: 1 },
    },
    { ...innerElfTask },
    {
      name: "Ungulith",
      ready: () =>
        get("photocopyMonster") === $monster`ungulith` &&
        get("_meteorShowerUses") < 5 &&
        get("_saberForceUses") < 5,
      prepare: () => useFamiliar($familiar`Disembodied Hand`),
      completed: () =>
        have($effect`Meteor Showered`) &&
        (have($item`corrupted marrow`) || have($effect`Cowrruption`)),
      do: () => use($item`photocopied monster`),
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Meteor Shower`).skill($skill`Use the Force`)
      ),
      choices: { 1387: 3 },
      outfit: {
        weapon: $item`none`,
        offhand: $item`none`,
        famequip: $item`Fourth of May Cosplay Saber`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Test",
      prepare: (): void => {
        SongBoom.setSong("These Fists Were Made for Punchin'");
        // eslint-disable-next-line libram/verify-constants
        for (const it of $items`Fabiotion, resolution: be feistier, imported taffy`)
          if (have(it)) ensureEffect(effectModifier(it, "effect"));
      },
      completed: () => CommunityService.WeaponDamage.isDone(),
      do: () =>
        CommunityService.WeaponDamage.run(() => logTestSetup(CommunityServiceTests.WPNTEST), 1),
      outfit: { modifier: "weapon dmg", familiar: $familiar`Disembodied Hand` },
      effects: [
        $effect`Billiards Belligerence`,
        $effect`Bow-Legged Swagger`,
        $effect`Carol of the Bulls`,
        $effect`Cowrruption`,
        $effect`Disdain of the War Snapper`,
        $effect`Frenzied, Bloody`,
        $effect`Jackasses' Symphony of Destruction`,
        $effect`Lack of Body-Building`,
        $effect`Rage of the Reindeer`,
        $effect`Scowl of the Auk`,
        $effect`Song of the North`,
        $effect`Tenacity of the Snapper`,
        $effect`The Power of LOV`,
      ],
      acquire: [{ item: $item`broken champagne bottle` }],
      post: (): void => {
        SongBoom.setSong("Total Eclipse of Your Meat");
        burnLibram(300);
      },
      limit: { tries: 1 },
    },
  ],
};
