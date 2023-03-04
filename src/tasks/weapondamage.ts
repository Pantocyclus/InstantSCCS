import {
  buy,
  cliExecute,
  create,
  Effect,
  inebrietyLimit,
  myHash,
  myInebriety,
  visitUrl,
} from "kolmafia";
import { $effect, $item, CommunityService, get, have, SongBoom } from "libram";
import { Quest } from "../engine/task";
import { CommunityServiceTests, logTestSetup, tryAcquiringEffect } from "../lib";

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
    },
    {
      name: "Potion of Potency",
      completed: () =>
        have($item`potion of potency`) ||
        have($effect`Pronounced Potency`) ||
        !have($item`scrumptious reagent`),
      do: () => create($item`potion of potency`, 1),
    },
    {
      name: "Cargo Shorts",
      completed: () => get("_cargoPocketEmptied") || !have($item`Cargo Cultist Shorts`),
      do: (): void => {
        visitUrl("inventory.php?action=pocket");
        visitUrl("choice.php?whichchoice=1420&option=1&pocket=284");
      },
    },
    {
      name: "Test",
      prepare: (): void => {
        if (have($item`SongBoom™ BoomBox`)) SongBoom.setSong("These Fists Were Made for Punchin'");
        if (!have($item`goofily-plumed helmet`)) buy($item`goofily-plumed helmet`, 1);
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
          $effect`Weapon of Mass Destruction`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));

        if (!have($effect`Outer Wolf™`) && have($item`genie bottle`))
          cliExecute("genie effect outer wolf");
      },
      completed: () => CommunityService.WeaponDamage.isDone(),
      do: () =>
        CommunityService.WeaponDamage.run(() => logTestSetup(CommunityServiceTests.WPNTEST), 35),
      outfit: { modifier: "weapon dmg" },
      limit: { tries: 1 },
    },
  ],
};
