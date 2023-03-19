import { create, Effect, print, useSkill } from "kolmafia";
import {
  $effect,
  $effects,
  $item,
  $skill,
  CommunityService,
  ensureEffect,
  get,
  have,
  uneffect,
} from "libram";
import { Quest } from "../engine/task";
import { advCost, CommunityServiceTests, logTestSetup, tryAcquiringEffect } from "../lib";

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
      do: (): void => {
        const maxTurns = get("instant_hpTestTurnLimit", 1);
        const testTurns = advCost(CommunityServiceTests.HPTEST);
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
          print(
            "You may also increase the turn limit by typing 'set instant_hpTestTurnLimit=<new limit>'",
            "red"
          );
        }
        CommunityService.HP.run(() => logTestSetup(CommunityServiceTests.HPTEST), maxTurns);
      },
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
      do: (): void => {
        const maxTurns = get("instant_musTestTurnLimit", 2);
        const testTurns = advCost(CommunityServiceTests.MUSTEST);
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
          print(
            "You may also increase the turn limit by typing 'set instant_musTestTurnLimit=<new limit>'",
            "red"
          );
        }
        CommunityService.Muscle.run(() => logTestSetup(CommunityServiceTests.MUSTEST), maxTurns);
      },
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
      do: (): void => {
        const maxTurns = get("instant_mystTestTurnLimit", 1);
        const testTurns = advCost(CommunityServiceTests.MYSTTEST);
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
          print(
            "You may also increase the turn limit by typing 'set instant_mystTestTurnLimit=<new limit>'",
            "red"
          );
        }
        CommunityService.Mysticality.run(
          () => logTestSetup(CommunityServiceTests.MYSTTEST),
          maxTurns
        );
      },
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
          $effect`Unrunnable Face`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));
      },
      do: (): void => {
        const maxTurns = get("instant_moxTestTurnLimit", 5);
        const testTurns = advCost(CommunityServiceTests.MOXTEST);
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
          print(
            "You may also increase the turn limit by typing 'set instant_moxTestTurnLimit=<new limit>'",
            "red"
          );
        }
        CommunityService.Moxie.run(() => logTestSetup(CommunityServiceTests.MOXTEST), maxTurns);
      },
      outfit: { modifier: "Moxie, switch disembodied hand, -switch left-hand man" },
      limit: { tries: 1 },
    },
  ],
};
