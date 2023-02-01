import { CombatStrategy } from "grimoire-kolmafia";
import {
  adv1,
  autosell,
  buy,
  changeMcd,
  cliExecute,
  create,
  eat,
  getWorkshed,
  myClass,
  myLevel,
  myMaxmp,
  myMeat,
  myMp,
  mySoulsauce,
  restoreMp,
  retrieveItem,
  totalFreeRests,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
  wait,
} from "kolmafia";
import {
  $class,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $skills,
  $stat,
  ensureEffect,
  get,
  have,
  set,
} from "libram";
import { fillTo } from "libram/dist/resources/2017/AsdonMartin";
import Macro, { mainStat } from "../combat";
import { Quest } from "../engine/task";
import { getSynthExpBuff, mapMonster } from "../lib";
import { burnLibram, holidayRunawayTask } from "./common";

const statGainBuffs =
  mainStat === $stat`Muscle`
    ? [$effect`Muscle Unbound`]
    : mainStat === $stat`Mysticailty`
    ? [$effect`Inscrutable Gaze`, $effect`Thaumodynamic`]
    : [$effect`So Fresh and So Clean`];

export const bloodSugarSauceMagic = $effect`[${
  myClass() === $class`Sauceror` ? "1458" : "1457"
}]Blood Sugar Sauce Magic`;
const combStatBuff =
  mainStat === $stat`Muscle`
    ? $effect`Lack of Body-Building`
    : mainStat === $stat`Mysticality`
    ? $effect`We're All Made of Starfish`
    : $effect`Pomp & Circumsands`;
const generalStorePotion =
  mainStat === $stat`Muscle`
    ? $effect`Go Get 'Em, Tiger!`
    : mainStat === $stat`Mysticality`
    ? $effect`Glittering Eyelashes`
    : $effect`Butt-Rock Hair`;
const barrelBuff =
  myClass() === $class`Seal Clubber`
    ? $effect`Barrel Chested`
    : myClass() === $class`Sauceror`
    ? $effect`Warlock, Warstock, and Warbarrel`
    : $effect.none;
const synthExpBuff =
  mainStat === $stat`Muscle`
    ? $effect`Synthesis: Movement`
    : mainStat === $stat`Mysticality`
    ? $effect`Synthesis: Learning`
    : $effect`Synthesis: Style`;
const juiceBarBuffs =
  myClass() === $class`Seal Clubber`
    ? $effects`Over the Ocean`
    : myClass() === $class`Turtle Tamer`
    ? $effects`Newt Gets In Your Eyes, Baconstoned`
    : myClass() === $class`Pastamancer`
    ? $effects`Baconstoned, Ham-Fisted`
    : myClass() === $class`Sauceror`
    ? $effects`Comic Violence`
    : myClass() === $class`Disco Bandit`
    ? $effects`Gr8ness, Perspicacious Pressure, Crusty Head`
    : $effects`Proficient Pressure, Eau D'enmity`;

const levelingBuffs = [
  // Skill
  $effect`A Few Extra Pounds`,
  $effect`Big`,
  $effect`Blessing of the Bird`,
  $effect`Blood Bond`,
  $effect`Blood Bubble`,
  $effect`Carol of the Bulls`,
  $effect`Carol of the Hells`,
  $effect`Carol of the Thrills`,
  $effect`Feeling Excited`,
  $effect`Feeling Peaceful`,
  $effect`Frenzied, Bloody`,
  $effect`Ruthlessly Efficient`,
  $effect`Song of Bravado`,
  $effect`Triple-Sized`,
  // Class Skill
  $effect`Astral Shell`,
  $effect`Aloysius' Antiphon of Aptitude`,
  $effect`Elemental Saucesphere`,
  $effect`Empathy`,
  $effect`Ghostly Shell`,
  $effect`Inscrutable Gaze`,
  $effect`Leash of Linguini`,
  $effect`Patience of the Tortoise`,
  $effect`Rage of the Reindeer`,
  $effect`Reptilian Fortitude`,
  $effect`Saucemastery`,
  $effect`Stevedave's Shanty of Superiority`,
  bloodSugarSauceMagic,
  // ML
  $effect`Drescher's Annoying Noise`,
  $effect`Driving Recklessly`,
  $effect`Ur-Kel's Aria of Annoyance`,
  $effect`Pride of the Puffin`,
  // Beach Comb
  $effect`Do I Know You From Somewhere?`,
  $effect`Lack of Body-Building`,
  $effect`Resting Beach Face`,
  combStatBuff,
  $effect`You Learned Something Maybe!`,
  // Items
  generalStorePotion,
  barrelBuff,
  // Other
  $effect`Billiards Belligerence`,
  $effect`Broad-Spectrum Vaccine`,
  $effect`Favored by Lyle`,
  $effect`Grumpy and Ornery`,
  $effect`Starry-Eyed`,
  $effect`Total Protonic Reversal`,
  $effect`Uncucumbered`,
  // Prismatic Damage
  $effect`Frostbeard`,
  $effect`Intimidating Mien`,
  $effect`Pyromania`,
  $effect`Rotten Memories`,
  $effect`Takin' It Greasy`,
  $effect`Your Fifteen Minutes`,
  $effect`Bendin' Hell`,
  // Potions
  ...juiceBarBuffs,
].filter((e) => e);

export const PostCoilQuest: Quest = {
  name: "PostCoil",
  completed: () => get("csServicesPerformed").split(",").length > 1,
  tasks: [
    {
      name: "Mayday",
      completed: () => !have($item`MayDay™ supply package`),
      do: (): void => {
        use($item`MayDay™ supply package`);
        if (have($item`space blanket`)) autosell(1, $item`space blanket`);
      },
      limit: { tries: 1 },
    },
    {
      name: "Install Workshed",
      completed: () => getWorkshed() === $item`Asdon Martin keyfob`,
      do: (): void => {
        use($item`Asdon Martin keyfob`);
        fillTo(37);
      },
      limit: { tries: 1 },
    },
    {
      name: "Chewing Gum",
      completed: () =>
        myMeat() < 1000 ||
        (have($item`turtle totem`) && have($item`saucepan`) && have($item`mariachi hat`)),
      do: (): void => {
        buy(1, $item`chewing gum on a string`);
        use(1, $item`chewing gum on a string`);
      },
      outfit: { pants: $item`designer sweatpants` },
      acquire: [{ item: $item`toy accordion` }],
      limit: { tries: 50 },
    },
    {
      name: "Meatcar",
      completed: () => have($item`bitchin' meatcar`),
      do: () => create(1, $item`bitchin' meatcar`),
      outfit: { pants: $item`designer sweatpants` },
      limit: { tries: 1 },
    },
    {
      name: "Range",
      completed: () => get("hasRange"),
      do: () => use($item`Dramatic™ range`),
      acquire: [{ item: $item`Dramatic™ range` }],
      outfit: { pants: $item`designer sweatpants` },
      limit: { tries: 1 },
    },
    {
      name: "Underground Fireworks Shop",
      prepare: () => visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2", false),
      completed: () => have($item`blue rocket`) || have($effect`Everything Looks Blue`),
      do: (): void => {
        if (!have($item`blue rocket`)) buy(1, $item`blue rocket`);
      },
      outfit: { pants: $item`designer sweatpants` },
      limit: { tries: 1 },
    },
    {
      name: "Fortune Teller Consult",
      completed: () =>
        get("_clanFortuneConsultUses", 0) >= 3 || get("_InstantHCCSClanFortuneAttempts", 0) >= 3,
      do: (): void => {
        switch (get("_clanFortuneConsultsUses", 0)) {
          case 0:
            cliExecute("fortune cheesefax bad bad bad");
            break;
          case 1:
            cliExecute("fortune cheesefax bad bad bad");
            break;
          case 2:
            cliExecute("fortune cheesefax pizza batman thick");
            break;
          default:
            break;
        }
        wait(5);
        set("_InstantHCCSClanFortuneAttempts", 1 + get("_InstantHCCSClanFortuneAttempts", 0));
      },
      limit: { tries: 3 },
    },
    {
      name: "Detuned Radio",
      completed: () => have($item`detuned radio`),
      do: (): void => {
        buy(1, $item`detuned radio`);
        changeMcd(10);
      },
      outfit: { pants: $item`designer sweatpants` },
      limit: { tries: 1 },
    },
    {
      name: "Cloud-Talk",
      completed: () => have($effect`That's Just Cloud-Talk, Man`),
      do: () => visitUrl("place.php?whichplace=campaway&action=campaway_sky"),
      limit: { tries: 1 },
    },
    {
      name: "Crimbo Candy",
      completed: () => get("_candySummons", 0) > 0,
      do: () => useSkill($skill`Summon Crimbo Candy`),
    },
    {
      name: "Synth Exp Buff",
      completed: () => have(synthExpBuff),
      do: (): void => getSynthExpBuff(),
      limit: { tries: 1 },
    },
    {
      name: "Remaining Stat Gain Multipliers",
      completed: () => statGainBuffs.every((ef) => have(ef)),
      do: () => statGainBuffs.forEach((ef) => ensureEffect(ef)),
      outfit: {
        pants: $item`designer sweatpants`,
        acc1: $item`Powerful Glove`,
        modifier: "mp",
      },
      limit: { tries: 1 },
    },
    {
      name: "Bastille",
      completed: () => get("_bastilleGames") > 0,
      do: () => cliExecute("bastille.ash mainstat brutalist"),
      outfit: { offhand: $item`familiar scrapbook` },
      limit: { tries: 1 },
    },
    {
      name: "Ten-Percent Bonus",
      completed: () => !have($item`a ten-percent bonus`),
      do: () => use($item`a ten-percent bonus`),
      outfit: { offhand: $item`familiar scrapbook` },
      limit: { tries: 1 },
    },
    {
      name: "Soul Food",
      ready: () => mySoulsauce() >= 5,
      completed: () => mySoulsauce() < 5 || myMp() > myMaxmp() - 15,
      do: (): void => {
        while (mySoulsauce() >= 5 && myMp() <= myMaxmp() - 15) useSkill($skill`Soul Food`);
      },
    },
    {
      name: "Buffs",
      completed: () =>
        myMeat() <= 1000 || levelingBuffs.every((ef) => have(ef)) || get("_feelPrideUsed") > 0,
      do: () =>
        levelingBuffs.forEach((ef) => {
          if (myMeat() >= 1000) ensureEffect(ef);
          if (
            myMp() <= 100 &&
            (have($item`magical sausage`) || have($item`magical sausage casing`))
          )
            eat(1, $item`magical sausage`);
        }),
      outfit: {
        pants: $item`designer sweatpants`,
        acc1: $item`Powerful Glove`,
        modifier: "mp",
      },
    },
    {
      name: "Tome Summons",
      completed: () => get("tomeSummons") >= 3,
      do: (): void => {
        create(1, $item`box of Familiar Jacks`);
        use(1, $item`box of Familiar Jacks`);
        useFamiliar($familiar`Melodramedary`);
        create(1, $item`box of Familiar Jacks`);
        use(1, $item`box of Familiar Jacks`);
      },
      outfit: { familiar: $familiar`Mini-Trainbot` },
      limit: { tries: 1 },
    },
    {
      name: "Alice Army",
      completed: () => get("grimoire3Summons") > 0,
      do: () => useSkill($skill`Summon Alice's Army Cards`),
    },
    {
      name: "Confiscator's Grimoire",
      completed: () => get("_grimoireConfiscatorSummons") > 0,
      do: () => useSkill($skill`Summon Confiscated Things`),
    },
    {
      name: "Detective School",
      completed: () => get("_detectiveCasesCompleted", 0) >= 3,
      do: () => cliExecute("Detective Solver"),
    },
    {
      name: "Breakfast",
      completed: () => get("lastAnticheeseDay") > 0,
      do: (): void => {
        cliExecute("breakfast");
        cliExecute("refresh all");
      },
    },
    { ...holidayRunawayTask },
    {
      name: "Ninja Costume",
      ready: () => get("_monstersMapped") < 3 && get("_chestXRayUsed") < 3,
      completed: () => have($item`li'l ninja costume`),
      do: () => mapMonster($location`The Haiku Dungeon`, $monster`amateur ninja`),
      post: () => visitUrl("questlog.php?which=1"), // Check quest log for protonic ghost location
      combat: new CombatStrategy().macro(
        Macro.ifHolidayWanderer(Macro.skill($skill`Feel Hatred`).abort())
          .if_($monster`amateur ninja`, Macro.skill($skill`Chest X-Ray`))
          .abort()
      ),
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        back: $item`protonic accelerator pack`,
        offhand: $item`weeping willow wand`,
        pants: $item`designer sweatpants`,
        acc1: $item`Lil' Doctor™ bag`,
        familiar: $familiar`Melodramedary`,
        famequip: $item`dromedary drinking helmet`,
      },
      limit: { tries: 2 },
    },
    {
      name: "Nanobrainy",
      ready: () => get("ghostLocation") !== $location`none` && get("_nanorhinoCharge") >= 100,
      completed: () => have($effect`Nanobrainy`),
      do: () => adv1(get("ghostLocation", $location`none`), 0, ""),
      prepare: (): void => {
        if (get("parkaMode") !== "spikolodon") cliExecute("parka spikolodon");
      },
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Entangling Noodles`) // Myst skill to trigger nanorhino buff
          .trySkill($skill`Giant Growth`)
          .if_($item`blue rocket`, Macro.item($item`blue rocket`))
          .skill($skill`Shoot Ghost`)
          .skill($skill`Shoot Ghost`)
          .skill($skill`Shoot Ghost`)
          .skill($skill`Trap Ghost`)
      ),
      outfit: {
        back: $item`protonic accelerator pack`,
        offhand: $item`weeping willow wand`,
        pants: $item`designer sweatpants`,
        familiar: $familiar`Nanorhino`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Get Lime",
      completed: () => get("_preventScurvy"),
      prepare: () => restoreMp(50),
      do: () => useSkill($skill`Prevent Scurvy and Sobriety`),
    },
    {
      name: "Skeleton Fruits",
      ready: () => get("_monstersMapped") < 3 && get("_chestXRayUsed") < 3,
      prepare: (): void => {
        if (get("parkaMode") !== "spikolodon") cliExecute("parka spikolodon");
      },
      completed: () =>
        mainStat === $stat`Moxie` ||
        have($item`cherry`) ||
        have($item`oil of expertise`) ||
        have($effect`Expert Oiliness`),
      do: () => mapMonster($location`The Skeleton Store`, $monster`novelty tropical skeleton`),
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Spit jurassic acid`)
          .skill($skill`Feel Envy`)
          .skill($skill`Chest X-Ray`)
      ),
      outfit: {
        shirt: $item`Jurassic Parka`,
        pants: $item`designer sweatpants`,
        acc3: $item`Lil' Doctor™ bag`,
        familiar: $familiar`Melodramedary`,
        famequip: $item`dromedary drinking helmet`,
      },
      limit: { tries: 1 },
    },
    {
      name: "Saucecraft",
      prepare: () => $skills`Advanced Saucecrafting`.forEach((s) => useSkill(s)),
      completed: () =>
        have($effect`Phorcefullness`) ||
        have($effect`Mystically Oiled`) ||
        mainStat === $stat`Moxie`,
      do: (): void => {
        if (mainStat === $stat`Muscle`) {
          $items`oil of stability, philter of phorce, cordial of concentration`.forEach((item) =>
            retrieveItem(item)
          );
          use(1, $item`oil of stability`);
          use(1, $item`philter of phorce`);
        } else if (mainStat === $stat`Mysticality`) {
          $items`oil of expertise, ointment of the occult, cordial of concentration`.forEach(
            (item) => retrieveItem(item)
          );
          use(1, $item`oil of expertise`);
          use(1, $item`ointment of the occult`);
        }
      },
      limit: { tries: 1 },
    },
    {
      name: "Chateau",
      completed: () => get("timesRested") >= totalFreeRests(),
      do: (): void => {
        visitUrl("place.php?whichplace=chateau&action=chateau_restbox");
        burnLibram(100);
      },
      outfit: { offhand: $item`familiar scrapbook` },
      limit: { tries: 40 },
    },
    {
      name: "Mini-Sauceror Buff",
      ready: () =>
        myLevel() >= 15 &&
        have($familiar`Mini-Adventurer`) &&
        (myClass() === $class`Seal Clubber` || myClass() === $class`Pastamancer`),
      completed: () =>
        $effects`Elbow Sauce, Saucefingers`.some((e) => have(e)) ||
        !(myClass() === $class`Seal Clubber` || myClass() === $class`Pastamancer`),
      do: $location`The Dire Warren`,
      outfit: {
        pants: $item`designer sweatpants`,
        acc3: $item`Lil' Doctor™ bag`,
        familiar: $familiar`Mini-Adventurer`,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Reflex Hammer`)
          .trySkill($skill`Snokebomb`)
          .abort()
      ),
      choices: { [768]: 4 },
    },
  ],
};
