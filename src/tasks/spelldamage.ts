import { buy, Effect, useSkill } from "kolmafia";
import { $effect, $item, $skill, CommunityService, have } from "libram";
import { Quest } from "../engine/task";
import { CommunityServiceTests, logTestSetup, tryAcquiringEffect } from "../lib";

export const SpellDamageQuest: Quest = {
  name: "Spell Damage",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [
    {
      name: "Test",
      prepare: (): void => {
        if (have($skill`Simmer`) && !have($effect`Simmering`)) useSkill($skill`Simmer`);
        if (!have($item`obsidian nutcracker`)) buy($item`obsidian nutcracker`, 1);
        const usefulEffects: Effect[] = [
          $effect`AAA-Charged`,
          $effect`Arched Eyebrow of the Archmage`,
          $effect`Carol of the Hells`,
          $effect`Cowrruption`,
          $effect`Imported Strength`,
          $effect`Jackasses' Symphony of Destruction`,
          $effect`Mental A-cue-ity`,
          $effect`Pisces in the Skyces`,
          $effect`Song of Sauce`,
          $effect`Spirit of Peppermint`,
          $effect`The Magic of LOV`,
          $effect`We're All Made of Starfish`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
      },
      completed: () => CommunityService.SpellDamage.isDone(),
      do: () =>
        CommunityService.SpellDamage.run(() => logTestSetup(CommunityServiceTests.SPELLTEST), 51),
      outfit: { modifier: "spell dmg" },
      limit: { tries: 1 },
    },
  ],
};
