import { Quest } from "../engine/task";
import {
  buy,
  changeMcd,
  cliExecute,
  currentMcd,
  drink,
  eat,
  Effect,
  fullnessLimit,
  getWorkshed,
  inebrietyLimit,
  myBasestat,
  myFullness,
  myHash,
  myInebriety,
  myLevel,
  myMeat,
  restoreMp,
  retrieveItem,
  takeStorage,
  use,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $skill,
  $stat,
  ensureEffect,
  get,
  have,
} from "libram";
import { Cycle, setConfiguration, Station } from "libram/dist/resources/2022/TrainSet";
import { CombatStrategy } from "grimoire-kolmafia";
import Macro from "../combat";
import { tryAcquiringEffect } from "../lib";

export const LevelingQuest: Quest = {
  name: "Leveling",
  completed: () => get("csServicesPerformed").split(",").length > 1,
  tasks: [
    {
      name: "Clan Shower",
      completed: () => get("_aprilShower"),
      do: (): void => {
        ensureEffect($effect`Thaumodynamic`);
      },
    },
    {
      name: "Inscrutable Gaze",
      completed: () => have($effect`Inscrutable Gaze`) || !have($skill`Inscrutable Gaze`),
      do: (): void => ensureEffect($effect`Inscrutable Gaze`),
    },
    {
      name: "Use Ten-Percent Bonus",
      completed: () => !have($item`a ten-percent bonus`),
      do: () => use($item`a ten-percent bonus`, 1),
    },
    {
      name: "Eat Calzone",
      completed: () => get("calzoneOfLegendEaten"),
      do: (): void => {
        takeStorage($item`Calzone of Legend`, 1);
        eat($item`Calzone of Legend`, 1);
      },
    },
    {
      name: "Eat Deep Dish",
      completed: () => get("deepDishOfLegendEaten"),
      do: (): void => {
        takeStorage($item`Deep Dish of Legend`, 1);
        eat($item`Deep Dish of Legend`, 1);
      },
    },
    {
      name: "Eat Pizza",
      ready: () => have($effect`Ready to Eat`), // only eat this after we red rocket
      completed: () => get("pizzaOfLegendEaten"),
      do: (): void => {
        takeStorage($item`Pizza of Legend`, 1);
        eat($item`Pizza of Legend`, 1);
      },
    },
    {
      name: "Eat One With Everything",
      completed: () => get("_fancyHotDogEaten"),
      do: (): void => {
        visitUrl("clan_viplounge.php?preaction=hotdogsupply&hagnks=1&whichdog=-94&quantity=10");
        visitUrl("clan_viplounge.php?preaction=eathotdog&whichdog=-94");
      },
    },
    {
      name: "Drink Bee's Knees",
      completed: () => get("_speakeasyDrinksDrunk") > 1,
      prepare: () => tryAcquiringEffect($effect`Ode to Booze`),
      do: () => visitUrl(`clan_viplounge.php?preaction=speakeasydrink&drink=5&pwd=${+myHash()}`),
      post: (): void => {
        if (have($effect`Ode to Booze`)) cliExecute("shrug ode");
      },
    },
    {
      name: "Consult Gorgonzola",
      completed: () => get("_clanFortuneBuffUsed"),
      do: () => cliExecute("fortune myst"),
    },
    {
      name: "Buy Oversized Sparkler",
      completed: () => get("_fireworksShopEquipmentBought"),
      do: () => buy($item`oversized sparkler`, 1),
    },
    {
      name: "Get Codpiece",
      completed: () => get("_floundryItemCreated"),
      do: () => cliExecute("floundry codpiece"),
    },
    {
      name: "Pull Dinsey pass",
      completed: () => get("_stenchAirportToday") || get("stenchAirportAlways"),
      do: (): void => {
        takeStorage($item`one-day ticket to Dinseylandfill`, 1);
        use($item`one-day ticket to Dinseylandfill`);
      },
    },
    {
      name: "Drink Astral Pilsners",
      ready: () => myLevel() >= 11,
      completed: () =>
        myInebriety() >= inebrietyLimit() ||
        (!have($item`astral six-pack`) && !have($item`astral pilsner`)),
      prepare: () => tryAcquiringEffect($effect`Ode to Booze`),
      do: (): void => {
        if (have($item`astral six-pack`)) use($item`astral six-pack`, 1);
        drink($item`astral pilsner`, 1);
      },
    },
    {
      name: "Configure Trainset",
      completed: () => !have($item`model train set`) || getWorkshed() === $item`model train set`,
      do: (): void => {
        use($item`model train set`);
        const stations = [
          Station.COAL_HOPPER, // double myst gain
          Station.BRAIN_SILO, // myst stats
          Station.VIEWING_PLATFORM, // all stats
          Station.WATER_BRIDGE, // +ML
          Station.TOWER_FIZZY, // mp regen
          Station.TOWER_FROZEN, // hot resist (useful)
          Station.GAIN_MEAT, // meat
          Station.CANDY_FACTORY, // candies
        ] as Cycle;
        setConfiguration(stations);
      },
    },
    {
      name: "Chewing Gum",
      completed: () => myMeat() < 1000 || have($item`turtle totem`),
      do: (): void => {
        buy(1, $item`chewing gum on a string`);
        use(1, $item`chewing gum on a string`);
      },
      outfit: { pants: $item`designer sweatpants` },
      acquire: [{ item: $item`toy accordion` }],
      limit: { tries: 50 },
    },
    {
      name: "Use Mind Control Device",
      completed: () => currentMcd() >= 10,
      do: () => changeMcd(11),
    },
    {
      name: "Fire Crackers",
      completed: () => myMeat() <= 300 || fullnessLimit() - myFullness() <= 2,
      do: (): void => {
        buy($item`fire crackers`, 1);
        eat($item`fire crackers`, 1);
      },
    },
    {
      name: "Powerlevel",
      completed: () => myBasestat($stat`Mysticality`) >= 170,
      do: $location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`,
      prepare: (): void => {
        // if (have($item`unbreakable umbrella`) && get("umbrellaState") !== "broken")
        //   cliExecute("umbrella ml");
        if (have($item`January's Garbage Tote`)) retrieveItem($item`makeshift garbage shirt`);
        if (!have($effect`Everything Looks Blue`) && !have($item`blue rocket`))
          buy($item`blue rocket`, 1);
        if (!have($effect`Everything Looks Red`) && !have($item`red rocket`))
          buy($item`red rocket`, 1);
        restoreMp(150);
        // Prefer this over $effects`` so that the list is much more maintainable after linting
        const usefulEffects: Effect[] = [
          // Stats
          $effect`Big`,
          $effect`Pasta Oneness`,
          $effect`Saucemastery`,
          $effect`Blessing of She-Who-Was`,
          $effect`Glittering Eyelashes`,
          $effect`Favored by Lyle`,
          $effect`Starry-Eyed`,
          // $effect`Feeling Excited`,
          // $effect`Triple-Sized`,
          // $effect`stats.enq`,
          // $effect`Hulkien`,
          // $effect`Uncucumbered`,
          // $effect`We're All Made of Starfish`,
          // $effect`Broad-Spectrum Vaccine`,
          // $effect`Think Win-Lose`,
          // $effect`Confidence of the Votive`,

          // ML
          $effect`Pride of the Puffin`,
          $effect`Drescher's Annoying Noise`,

          // Fam wt
          $effect`Empathy`,
          $effect`Leash of Linguini`,
          $effect`Blood Bond`,

          // Xp
          $effect`Carol of the Thrills`,

          // Songs
          $effect`Stevedave's Shanty of Superiority`,
          $effect`Ur-Kel's Aria of Annoyance`,
          $effect`Aloysius' Antiphon of Aptitude`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef));
      },
      outfit: { familiar: $familiar`Hovering Sombrero`, modifier: "myst, 0.1 ML" },
      limit: { tries: 50 },
      combat: new CombatStrategy().macro(
        Macro.externalIf(!have($effect`Everything Looks Blue`), Macro.tryItem($item`blue rocket`))
          .externalIf(!have($effect`Everything Looks Red`), Macro.tryItem($item`red rocket`))
          //.trySkill($skill`Bowl Sideways`)
          .trySkill($skill`Feel Pride`)
          .trySkill($skill`Shattering Punch`)
          .trySkill($skill`Gingerbread Mob Hit`)
          .default()
      ),
    },
  ],
};
