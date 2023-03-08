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
          $effect`Big`,
          $effect`Hulkien`,
          $effect`Mariachi Mood`,
          $effect`Patience of the Tortoise`,
          $effect`Power Ballad of the Arrowsmith`,
          $effect`Quiet Determination`,
          $effect`Reptilian Fortitude`,
          $effect`Saucemastery`,
          $effect`Seal Clubbing Frenzy`,
          $effect`Song of Starch`,
          $effect`Stevedave's Shanty of Superiority`,
          $effect`Triple-Sized`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));
      },
      do: () => CommunityService.HP.run(() => logTestSetup(CommunityServiceTests.HPTEST), 1),
      outfit: { modifier: "HP, switch disembodied hand, -switch left-hand man" },
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
          $effect`Big`,
          $effect`Go Get 'Em, Tiger!`,
          $effect`Hulkien`,
          $effect`Quiet Determination`,
          $effect`Power Ballad of the Arrowsmith`,
          $effect`Rage of the Reindeer`,
          $effect`Song of Bravado`,
          $effect`Stevedave's Shanty of Superiority`,
          $effect`Triple-Sized`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));
      },
      do: () => CommunityService.Muscle.run(() => logTestSetup(CommunityServiceTests.MUSTEST), 2),
      outfit: { modifier: "Muscle, switch disembodied hand, -switch left-hand man" },
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
          $effect`Big`,
          $effect`Glittering Eyelashes`,
          $effect`Hulkien`,
          $effect`The Magical Mojomuscular Melody`,
          $effect`Triple-Sized`,
          $effect`Pasta Oneness`,
          $effect`Quiet Judgement`,
          $effect`Song of Bravado`,
          $effect`Stevedave's Shanty of Superiority`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));
      },
      do: () =>
        CommunityService.Mysticality.run(() => logTestSetup(CommunityServiceTests.MYSTTEST), 1),
      outfit: { modifier: "Mysticality, switch disembodied hand, -switch left-hand man" },
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
          $effect`Big`,
          $effect`Blessing of the Bird`,
          $effect`Blubbered Up`,
          $effect`Butt-Rock Hair`,
          $effect`Disco Fever`,
          $effect`Disco State of Mind`,
          $effect`Hulkien`,
          $effect`The Moxious Madrigal`,
          $effect`Triple-Sized`,
          $effect`Pomp & Circumsands`,
          $effect`Quiet Desperation`,
          $effect`Song of Bravado`,
          $effect`Stevedave's Shanty of Superiority`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));
      },
      do: () => CommunityService.Moxie.run(() => logTestSetup(CommunityServiceTests.MOXTEST), 5),
      outfit: { modifier: "Moxie, switch disembodied hand, -switch left-hand man" },
      limit: { tries: 1 },
    },
  ],
};
