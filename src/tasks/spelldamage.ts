import { effectModifier, elementalResistance, myHp, myMaxhp, useSkill } from "kolmafia";
import {
  $effect,
  $effects,
  $element,
  $familiar,
  $items,
  $skill,
  CommunityService,
  ensureEffect,
  have,
} from "libram";
import { Quest } from "../engine/task";
import { CommunityServiceTests, logTestSetup } from "../lib";
import { burnLibram, innerElfTask, meteorShowerTask } from "./common";

export const SpellDamageQuest: Quest = {
  name: "Spell Damage",
  completed: () => CommunityService.SpellDamage.isDone(),
  tasks: [
    {
      name: "Simmer",
      completed: () => have($effect`Simmering`),
      do: () => ensureEffect($effect`Simmering`),
      limit: { tries: 1 },
    },
    { ...innerElfTask },
    { ...meteorShowerTask },
    {
      name: "Deep Dark",
      completed: () => have($effect`Visions of the Deep Dark Deeps`),
      prepare: (): void => {
        if (have($effect`[1458]Blood Sugar Sauce Magic`)) useSkill($skill`Blood Sugar Sauce Magic`);
      },
      do: (): void => {
        const resist = 1 - elementalResistance($element`spooky`) / 100;
        const neededHp = Math.max(500, myMaxhp() * 4 * resist);
        if (myMaxhp() < neededHp) throw `Not enough HP for Deep Dark Visions.`;
        while (myHp() < neededHp) useSkill($skill`Cannelloni Cocoon`);
        useSkill($skill`Deep Dark Visions`);
      },
      outfit: { modifier: "HP 500max, Spooky Resistance", familiar: $familiar`Exotic Parrot` },
      effects: $effects`Astral Shell, Elemental Saucesphere`,
      post: (): void => {
        if (!have($effect`[1458]Blood Sugar Sauce Magic`))
          useSkill($skill`Blood Sugar Sauce Magic`);
      },
      limit: { tries: 1 },
    },
    {
      name: "Test",
      prepare: (): void => {
        for (const it of $items`confiscated cell phone, Bettie page, resolution: be luckier`)
          if (have(it)) ensureEffect(effectModifier(it, "effect"));
      },
      completed: () => CommunityService.SpellDamage.isDone(),
      do: () =>
        CommunityService.SpellDamage.run(() => logTestSetup(CommunityServiceTests.SPELLTEST), 22),
      outfit: { modifier: "spell dmg", familiar: $familiar`Disembodied Hand` },
      effects: [
        $effect`Arched Eyebrow of the Archmage`,
        $effect`Carol of the Hells`,
        $effect`Concentration`,
        $effect`Cowrruption`,
        $effect`Jackasses' Symphony of Destruction`,
        $effect`Mental A-cue-ity`,
        $effect`Pisces in the Skyces`,
        $effect`Song of Sauce`,
        $effect`Spirit of Peppermint`,
        $effect`The Magic of LOV`,
        $effect`We're All Made of Starfish`,
        $effect`Warlock, Warstock, and Warbarrel`,
      ],
      post: (): void => {
        burnLibram(300);
        useSkill($skill`Spirit of Nothing`);
      },
      limit: { tries: 1 },
    },
  ],
};
