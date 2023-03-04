import { create, Effect, useSkill } from "kolmafia";
import {
  $effect,
  $effects,
  $item,
  $skill,
  CommunityService,
  ensureEffect,
  have,
  uneffect,
} from "libram";
import { Quest } from "../engine/task";
import { CommunityServiceTests, logTestSetup, tryAcquiringEffect } from "../lib";

export const HPQuest: Quest = {
  name: "HP",
  tasks: [
    {
      name: "Test",
      completed: () => CommunityService.HP.isDone(),
      prepare: (): void => {
        $effects`Ur-Kel's Aria of Annoyance, Aloysius' Antiphon of Aptitude, Ode to Booze`.forEach(
          (ef) => uneffect(ef)
        );
        const usefulEffects: Effect[] = [
          $effect`A Few Extra Pounds`,
          $effect`Mariachi Mood`,
          $effect`Patience of the Tortoise`,
          $effect`Power Ballad of the Arrowsmith`,
          $effect`Quiet Determination`,
          $effect`Reptilian Fortitude`,
          $effect`Saucemastery`,
          $effect`Seal Clubbing Frenzy`,
          $effect`Song of Starch`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
      },
      do: () => CommunityService.HP.run(() => logTestSetup(CommunityServiceTests.HPTEST), 1),
      outfit: { modifier: "HP" },
      limit: { tries: 1 },
    },
  ],
};

export const MuscleQuest: Quest = {
  name: "Muscle",
  tasks: [
    {
      name: "Test",
      completed: () => CommunityService.Muscle.isDone(),
      prepare: (): void => {
        if (!have($effect`Expert Oiliness`) && !have($item`oil of expertise`)) {
          create($item`oil of expertise`, 1);
        }
        ensureEffect($effect`Expert Oiliness`);
        const usefulEffects: Effect[] = [
          $effect`Go Get 'Em, Tiger!`,
          $effect`Quiet Determination`,
          $effect`Power Ballad of the Arrowsmith`,
          $effect`Rage of the Reindeer`,
          $effect`Song of Bravado`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
      },
      do: () => CommunityService.Muscle.run(() => logTestSetup(CommunityServiceTests.MUSTEST), 2),
      outfit: { modifier: "Muscle" },
      post: (): void => {
        uneffect($effect`Power Ballad of the Arrowsmith`);
      },
      limit: { tries: 1 },
    },
  ],
};

export const MysticalityQuest: Quest = {
  name: "Mysticality",
  tasks: [
    {
      name: "Test",
      completed: () => CommunityService.Mysticality.isDone(),
      prepare: (): void => {
        useSkill($skill`Bind Undead Elbow Macaroni`);
        const usefulEffects: Effect[] = [
          $effect`Glittering Eyelashes`,
          $effect`The Magical Mojomuscular Melody`,
          $effect`Pasta Oneness`,
          $effect`Quiet Judgement`,
          $effect`Song of Bravado`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
      },
      do: () =>
        CommunityService.Mysticality.run(() => logTestSetup(CommunityServiceTests.MYSTTEST), 1),
      outfit: { modifier: "Mysticality" },
      post: (): void => {
        uneffect($effect`The Magical Mojomuscular Melody`);
      },
      limit: { tries: 1 },
    },
  ],
};

export const MoxieQuest: Quest = {
  name: "Moxie",
  tasks: [
    {
      name: "Test",
      completed: () => CommunityService.Moxie.isDone(),
      prepare: (): void => {
        if (!have($effect`Expert Oiliness`) && !have($item`oil of expertise`)) {
          create($item`oil of expertise`, 1);
        }
        ensureEffect($effect`Expert Oiliness`);
        const usefulEffects: Effect[] = [
          // $effect`Amazing`,
          $effect`Blubbered Up`,
          $effect`Butt-Rock Hair`,
          $effect`Disco Fever`,
          $effect`Disco State of Mind`,
          $effect`The Moxious Madrigal`,
          $effect`Pomp & Circumsands`,
          $effect`Quiet Desperation`,
          $effect`Song of Bravado`,
          $effect`Blessing of the Bird`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
      },
      do: () => CommunityService.Moxie.run(() => logTestSetup(CommunityServiceTests.MOXTEST), 5),
      outfit: { modifier: "Moxie" },
      limit: { tries: 1 },
    },
  ],
};
