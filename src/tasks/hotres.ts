import { CombatStrategy } from "grimoire-kolmafia";
import {
  cliExecute,
  create,
  drink,
  Effect,
  equip,
  faxbot,
  inebrietyLimit,
  myInebriety,
  use,
  useFamiliar,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $monster,
  $skill,
  $slot,
  CommunityService,
  get,
  have,
  uneffect,
} from "libram";
import Macro from "../combat";
import { Quest } from "../engine/task";
import { CommunityServiceTests, logTestSetup, tryAcquiringEffect } from "../lib";

export const HotResQuest: Quest = {
  name: "Hot Res",
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [
    {
      name: "Fax Ungulith",
      prepare: (): void => {
        if (have($item`Fourth of May Cosplay Saber`))
          equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
        if (have($item`industrial fire extinguisher`))
          equip($slot`offhand`, $item`industrial fire extinguisher`);
        if (have($item`vampyric cloake`)) equip($slot`back`, $item`vampyric cloake`);
      },
      completed: () => get("_photocopyUsed"),
      do: (): void => {
        cliExecute("chat");
        if (
          (have($item`photocopied monster`) || faxbot($monster`ungulith`)) &&
          get("photocopyMonster") === $monster`ungulith`
        ) {
          use($item`photocopied monster`);
        }
      },
      outfit: { modifier: "myst", familiar: $familiar`Cookbookbat` },
      limit: { tries: 1 },
      choices: { 1387: 3 },
      combat: new CombatStrategy().macro(
        Macro.externalIf(
          have($item`vampyric cloake`),
          Macro.trySkill($skill`Become a Cloud of Mist`)
        )
          .externalIf(
            have($item`industrial fire extinguisher`),
            Macro.trySkill($skill`Fire Extinguisher: Polar Vortex`).externalIf(
              have($item`Fourth of May Cosplay Saber`) && get("_saberForceUses") < 5,
              Macro.trySkill($skill`Fire Extinguisher: Foam Yourself`).trySkill(
                $skill`Use the Force`
              )
            )
          )
          .trySkill($skill`Shocking Lick`)
          .default()
      ),
    },
    {
      name: "Drink Booze",
      completed: () => myInebriety() >= inebrietyLimit() - 2,
      do: (): void => {
        if (myInebriety() < inebrietyLimit()) {
          tryAcquiringEffect($effect`Ode to Booze`);
          if (have($item`Yeast of Boris`) && have($item`bowl of cottage cheese`))
            create($item`Boris's beer`, 1);
          if (have($item`Boris's beer`)) drink($item`Boris's beer`, 1);
          else if (have($item`distilled fortified wine`)) drink($item`distilled fortified wine`, 1);
          uneffect($effect`Ode to Booze`);
        }
      },
      limit: { tries: 1 },
    },
    {
      name: "Horsery",
      completed: () => get("_horsery") === "pale horse" || !get("horseryAvailable"),
      do: () => cliExecute("horsery pale"),
      limit: { tries: 1 },
    },
    {
      name: "Test",
      prepare: (): void => {
        cliExecute("retrocape vampire hold");
        if (get("parkaMode") !== "pterodactyl") cliExecute("parka pterodactyl");
        if (get("_kgbClicksUsed") < 22 && have($item`Kremlin's Greatest Briefcase`))
          cliExecute("briefcase e hot");
        if (have($skill`Summon Clip Art`) && !have($item`cracker`)) {
          if (!have($item`box of Familiar Jacks`)) create($item`box of Familiar Jacks`, 1);
          useFamiliar($familiar`Exotic Parrot`);
          use($item`box of Familiar Jacks`, 1);
        }
        const usefulEffects: Effect[] = [
          $effect`Astral Shell`,
          $effect`Elemental Saucesphere`,
          $effect`Feeling Peaceful`,
          $effect`Hot-Headed`,
          $effect`Rainbowolin`,

          // Famwt Buffs
          $effect`Blood Bond`,
          $effect`Empathy`,
          $effect`Leash of Linguini`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));
        cliExecute("maximize hot res");
      },
      completed: () => CommunityService.HotRes.isDone(),
      do: () => CommunityService.HotRes.run(() => logTestSetup(CommunityServiceTests.HOTTEST), 35),
      outfit: {
        modifier: "hot res",
        familiar: $familiar`Exotic Parrot`,
      },
      limit: { tries: 1 },
    },
  ],
};
