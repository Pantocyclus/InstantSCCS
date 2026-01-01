import { buy, create, Effect, itemAmount, Stat, use, useSkill } from "kolmafia";
import {
  $coinmaster,
  $effect,
  $effects,
  $item,
  $items,
  $skill,
  $stat,
  CommunityService,
  ensureEffect,
  get,
  have,
  MayamCalendar,
  uneffect,
  withChoice,
} from "libram";
import { Quest } from "../engine/task";
import {
  acquiredOrExcluded,
  handleCustomBusks,
  handleCustomPulls,
  mainStat,
  reagentBalancerEffect,
  reagentBalancerItem,
  runTest,
  tryAcquiringEffects,
  useCenser,
} from "../lib";

const hpTestMaximizerString = "HP, switch disembodied hand, -switch left-hand man";
const musTestMaximizerString = "Muscle, switch disembodied hand, -switch left-hand man";
const mystTestMaximizerString = "Mysticality, switch disembodied hand, -switch left-hand man";
const moxTestMaximizerString = "Mox, switch disembodied hand, -switch left-hand man";

function useBalancerForTest(testStat: Stat): void {
  if (testStat === mainStat) {
    return;
  }
  if (!have(reagentBalancerEffect) && !have(reagentBalancerItem)) {
    create(reagentBalancerItem, 1);
  }
  ensureEffect(reagentBalancerEffect);
}

export const HPQuest: Quest = {
  name: "HP",
  tasks: [
    {
      name: "Mayam Calendar (Post-leveling)",
      completed: () =>
        get("instant_saveMayamCalendar", false) ||
        get("_mayamSymbolsUsed").includes("explosion") ||
        !have($item`Mayam Calendar`),
      do: (): void => {
        const sym3 = useCenser ? "cheese" : "wall";
        MayamCalendar.submit(
          MayamCalendar.toCombinationString(["eye", "bottle", sym3, "explosion"]),
        );
      },
      limit: { tries: 1 },
    },
    {
      name: "Test",
      completed: () => CommunityService.HP.isDone(),
      prepare: (): void => {
        useBalancerForTest($stat`Muscle`);
        $effects`Ur-Kel's Aria of Annoyance, Aloysius' Antiphon of Aptitude, Ode to Booze`.forEach(
          (ef) => uneffect(ef),
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
        tryAcquiringEffects(usefulEffects, true);
        handleCustomPulls("instant_hpTestPulls", hpTestMaximizerString);
        handleCustomBusks("instant_hpTestBusks");
      },
      do: (): void => runTest(CommunityService.HP),
      outfit: { modifier: hpTestMaximizerString },
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
        useBalancerForTest($stat`Muscle`);
        if (
          !acquiredOrExcluded($effect`Phorcefullness`) &&
          !have($item`philter of phorce`) &&
          $items`scrumptious reagent, lemon`.every((it) => have(it))
        ) {
          create($item`philter of phorce`, 1);
        }
        const usefulEffects: Effect[] = [
          $effect`Big`,
          $effect`Disco over Matter`,
          $effect`Disdain of the War Snapper`,
          $effect`Feeling Excited`,
          $effect`Go Get 'Em, Tiger!`,
          $effect`Hulkien`,
          $effect`Macaroni Coating`,
          $effect`Patience of the Tortoise`,
          $effect`Phorcefullness`,
          $effect`Power Ballad of the Arrowsmith`,
          $effect`Quiet Determination`,
          $effect`Rage of the Reindeer`,
          $effect`Song of Bravado`,
          $effect`Stevedave's Shanty of Superiority`,
          $effect`Strength of the Tortoise`,
          $effect`Triple-Sized`,
        ];
        tryAcquiringEffects(usefulEffects, true);
        handleCustomPulls("instant_musTestPulls", musTestMaximizerString);
        handleCustomBusks("instant_musTestBusks");
      },
      do: (): void => runTest(CommunityService.Muscle),
      outfit: { modifier: musTestMaximizerString },
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
        useBalancerForTest($stat`Mysticality`);
        if (
          !acquiredOrExcluded($effect`Mystically Oiled`) &&
          !have($item`ointment of the occult`) &&
          $items`scrumptious reagent, grapefruit`.every((it) => have(it))
        ) {
          create($item`ointment of the occult`, 1);
        }
        const usefulEffects: Effect[] = [
          $effect`Big`,
          $effect`Disdain of She-Who-Was`,
          $effect`Feeling Excited`,
          $effect`Glittering Eyelashes`,
          $effect`Hulkien`,
          $effect`Mariachi Moisture`,
          $effect`Mystically Oiled`,
          $effect`Saucemastery`,
          $effect`Song of Bravado`,
          $effect`Stevedave's Shanty of Superiority`,
          $effect`The Magical Mojomuscular Melody`,
          $effect`Triple-Sized`,
          $effect`Tubes of Universal Meat`,
          $effect`Pasta Oneness`,
          $effect`Quiet Judgement`,
        ];
        tryAcquiringEffects(usefulEffects, true);
        handleCustomPulls("instant_mystTestPulls", mystTestMaximizerString);
        handleCustomBusks("instant_mystTestBusks");
      },
      do: (): void => runTest(CommunityService.Mysticality),
      outfit: { modifier: mystTestMaximizerString },
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
      // This is also useful for the BoozeDrop test, but we can grab the +10%mox here first
      name: "High Heels",
      completed: () =>
        have($item`red-soled high heels`) ||
        !have($item`2002 Mr. Store Catalog`) ||
        get("availableMrStore2002Credits") <= get("instant_saveCatalogCredits", 0) ||
        get("instant_skipHighHeels", false),
      do: (): void => {
        if (!have($item`Letter from Carrie Bradshaw`)) {
          buy($coinmaster`Mr. Store 2002`, 1, $item`Letter from Carrie Bradshaw`);
        }
        withChoice(1506, 3, () => use($item`Letter from Carrie Bradshaw`));
      },
      limit: { tries: 1 },
    },
    {
      name: "Test",
      completed: () => CommunityService.Moxie.isDone(),
      prepare: (): void => {
        useBalancerForTest($stat`Moxie`);
        const usefulEffects: Effect[] = [
          // $effect`Amazing`,
          $effect`Big`,
          $effect`Blessing of the Bird`,
          $effect`Blubbered Up`,
          $effect`Butt-Rock Hair`,
          $effect`Disco Fever`,
          $effect`Disco Smirk`,
          $effect`Disco State of Mind`,
          $effect`Feeling Excited`,
          $effect`Hulkien`,
          $effect`Lubricating Sauce`,
          $effect`The Moxious Madrigal`,
          $effect`Triple-Sized`,
          $effect`Penne Fedora`,
          $effect`Pomp & Circumsands`,
          $effect`Quiet Desperation`,
          $effect`Slippery as a Seal`,
          $effect`Song of Bravado`,
          $effect`Stevedave's Shanty of Superiority`,
          $effect`Unrunnable Face`,
        ];
        tryAcquiringEffects(usefulEffects, true);
        handleCustomPulls("instant_moxTestPulls", moxTestMaximizerString);
        handleCustomBusks("instant_moxTestBusks");
        if (have($skill`Acquire Rhinestones`)) useSkill($skill`Acquire Rhinestones`);
        if (have($item`rhinestone`)) use($item`rhinestone`, itemAmount($item`rhinestone`));
      },
      do: (): void => runTest(CommunityService.Moxie),
      outfit: { modifier: moxTestMaximizerString },
      limit: { tries: 1 },
    },
  ],
};
