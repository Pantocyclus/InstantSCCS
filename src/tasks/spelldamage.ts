import { CombatStrategy } from "grimoire-kolmafia";
import { buy, drink, Effect, inebrietyLimit, myAdventures, myInebriety, useSkill } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  CommunityService,
  get,
  have,
  Macro,
} from "libram";
import { Quest } from "../engine/task";
import { advCost, CommunityServiceTests, logTestSetup, tryAcquiringEffect } from "../lib";

export const SpellDamageQuest: Quest = {
  name: "Spell Damage",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [
    {
      name: "Simmer",
      completed: () => have($effect`Simmering`) || !have($skill`Simmer`),
      do: () => useSkill($skill`Simmer`),
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
          $effect`Warlock, Warstock, and Warbarrel`,
          $effect`We're All Made of Starfish`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));

        const wines = $items`Sacramento wine, distilled fortified wine`;
        while (
          advCost(CommunityServiceTests.SPELLTEST) > myAdventures() &&
          myInebriety() < inebrietyLimit() &&
          wines.some((booze) => have(booze))
        ) {
          tryAcquiringEffect($effect`Ode to Booze`);
          drink(wines.filter((booze) => have(booze))[0], 1);
        }
      },
      completed: () => CommunityService.SpellDamage.isDone(),
      do: () =>
        CommunityService.SpellDamage.run(() => logTestSetup(CommunityServiceTests.SPELLTEST), 51),
      outfit: { modifier: "spell dmg, switch disembodied hand, -switch left-hand man" },
      limit: { tries: 1 },
    },
  ],
};
