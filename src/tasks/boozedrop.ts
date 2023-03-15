import { Quest } from "../engine/task";
import {
  adv1,
  cliExecute,
  create,
  drink,
  eat,
  Effect,
  equip,
  faxbot,
  getWorkshed,
  inebrietyLimit,
  itemAmount,
  myInebriety,
  print,
  use,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $monster,
  $skill,
  $slot,
  CommunityService,
  get,
  have,
  TrainSet,
  uneffect,
} from "libram";
import {
  canConfigure,
  Cycle,
  setConfiguration,
  Station,
} from "libram/dist/resources/2022/TrainSet";
import { advCost, CommunityServiceTests, logTestSetup, tryAcquiringEffect } from "../lib";
import { CombatStrategy } from "grimoire-kolmafia";
import Macro from "../combat";

export const BoozeDropQuest: Quest = {
  name: "Booze Drop",
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [
    {
      name: "Configure Trainset",
      completed: () => getWorkshed() === $item`model train set` && !canConfigure(),
      do: (): void => {
        const offset = get("trainsetPosition") % 8;
        const newStations: TrainSet.Station[] = [];
        const stations = [
          Station.COAL_HOPPER, // double myst gain
          Station.TOWER_FROZEN, // hot resist (useful)
          Station.GAIN_MEAT, // meat
          Station.TOWER_FIZZY, // mp regen
          Station.BRAIN_SILO, // myst stats
          Station.VIEWING_PLATFORM, // all stats
          Station.WATER_BRIDGE, // +ML
          Station.CANDY_FACTORY, // candies
        ] as Cycle;
        for (let i = 0; i < 8; i++) {
          const newPos = (i + offset) % 8;
          newStations[newPos] = stations[i];
        }
        setConfiguration(newStations as Cycle);
      },
      limit: { tries: 1 },
    },
    {
      name: "Get Cyclops Eyedrops",
      completed: () => have($item`cyclops eyedrops`) || have($effect`One Very Clear Eye`),
      do: (): void => {
        if (!have($effect`Lucky!`)) use($item`11-leaf clover`);
        if (!have($item`cyclops eyedrops`)) adv1($location`The Limerick Dungeon`, -1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Fax Ungulith",
      prepare: (): void => {
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
      outfit: {
        familiar: $familiar`Cookbookbat`,
        modifier: "myst",
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Bowl Straight Up`)
          .trySkill($skill`Become a Bat`)
          .externalIf(
            have($item`industrial fire extinguisher`),
            Macro.trySkill($skill`Fire Extinguisher: Polar Vortex`)
          )
          .default()
      ),
      limit: { tries: 1 },
    },
    {
      name: "Eat roasted vegetable of Jarlsberg",
      completed: () => have($effect`Wizard Sight`),
      do: (): void => {
        if (!have($item`roasted vegetable of Jarlsberg`))
          create($item`roasted vegetable of Jarlsberg`, 1);
        eat($item`roasted vegetable of Jarlsberg`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Drink Sacramento Wine",
      completed: () =>
        have($effect`Sacré Mental`) ||
        !have($item`Sacramento wine`) ||
        myInebriety() >= inebrietyLimit(),
      do: (): void => {
        if (myInebriety() < inebrietyLimit()) {
          tryAcquiringEffect($effect`Ode to Booze`);
          drink($item`Sacramento wine`, 1);
          uneffect($effect`Ode to Booze`);
        }
      },
      limit: { tries: 1 },
    },
    {
      name: "Deck Wheel of Fortune",
      ready: () => get("_deckCardsDrawn") <= 10,
      completed: () => get("_deckCardsDrawn") >= 15 || !have($item`Deck of Every Card`),
      do: (): void => {
        cliExecute("cheat fortune");
      },
      limit: { tries: 1 },
    },
    {
      name: "Power Seed",
      completed: () =>
        !have($item`potted power plant`) ||
        (itemAmount($item`battery (AAA)`) < 5 && !have($item`battery (lantern)`)),
      do: (): void => {
        if (itemAmount($item`battery (AAA)`) >= 5) create($item`battery (lantern)`, 1);
        use($item`battery (lantern)`, 1);
      },
      limit: { tries: 1 },
    },
    {
      name: "Test",
      prepare: (): void => {
        const usefulEffects: Effect[] = [
          $effect`Blessing of the Bird`,
          $effect`Crunching Leaves`,
          $effect`Fat Leon's Phat Loot Lyric`,
          // $effect`Feeling Lost`,
          $effect`items.enh`,
          $effect`One Very Clear Eye`,
          $effect`Nearly All-Natural`,
          $effect`The Spirit of Taking`,
          $effect`Singer's Faithful Ocelot`,
          $effect`Steely-Eyed Squint`,
          $effect`Uncucumbered`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));
      },
      completed: () => CommunityService.BoozeDrop.isDone(),
      do: (): void => {
        const maxTurns = 30;
        const testTurns = advCost(CommunityServiceTests.ITEMTEST);
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
        }
        CommunityService.BoozeDrop.run(
          () => logTestSetup(CommunityServiceTests.ITEMTEST),
          maxTurns
        );
      },
      outfit: {
        modifier:
          "Item Drop, -equip broken champagne bottle, switch disembodied hand, -switch left-hand man",
      },
      limit: { tries: 1 },
    },
  ],
};
