import { CombatStrategy } from "grimoire-kolmafia";
import {
  adv1,
  autosell,
  buy,
  changeMcd,
  cliExecute,
  create,
  eat,
  itemAmount,
  myMeat,
  myMp,
  retrieveItem,
  sweetSynthesis,
  totalFreeRests,
  use,
  useSkill,
  visitUrl,
  wait,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $skills,
  ensureEffect,
  get,
  have,
  set,
} from "libram";
import Macro from "../combat";
import { Quest } from "../engine/task";
import { mapMonster } from "../lib";
import { burnLibram, holidayRunawayTask } from "./common";

const statGainBuffs = [$effect`Inscrutable Gaze`, $effect`Thaumodynamic`];

const levelingBuffs = [
  // Skill
  $effect`Big`,
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
  $effect`Stevedave's Shanty of Superiority`,
  $effect`[1458]Blood Sugar Sauce Magic`,
  // ML
  $effect`Drescher's Annoying Noise`,
  $effect`Ur-Kel's Aria of Annoyance`,
  $effect`Pride of the Puffin`,
  // Beach Comb
  $effect`Do I Know You From Somewhere?`,
  $effect`Lack of Body-Building`,
  $effect`Resting Beach Face`,
  $effect`We're All Made of Starfish`,
  $effect`You Learned Something Maybe!`,
  // Items
  $effect`Glittering Eyelashes`,
  // Other
  $effect`Billiards Belligerence`,
  $effect`Blessing of your favorite Bird`, // Set up for +75% myst, +2 hot resist, -5% combat freq, +100 weapon dmg%, +20 weapon dmg
  $effect`Broad-Spectrum Vaccine`,
  $effect`Favored by Lyle`,
  $effect`Grumpy and Ornery`,
  $effect`Starry-Eyed`,
  $effect`Total Protonic Reversal`,
  $effect`Uncucumbered`,
];

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
      completed: () => have($item`oversized sparkler`) && have($item`sombrero-mounted sparkler`),
      do: (): void => {
        if (!have($item`blue rocket`)) buy(1, $item`blue rocket`);
        if (!have($item`oversized sparkler`)) buy(1, $item`oversized sparkler`);
        if (!have($item`sombrero-mounted sparkler`)) buy(1, $item`sombrero-mounted sparkler`);
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
      name: "Obsidian Nutcracker",
      completed: () => have($item`obsidian nutcracker`),
      do: () => retrieveItem($item`obsidian nutcracker`),
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
      name: "Synth Learning",
      completed: () => have($effect`Synthesis: Learning`),
      do: (): void => {
        if (itemAmount($item`Crimbo fudge`) >= 2) {
          sweetSynthesis($item`Crimbo fudge`, $item`Crimbo fudge`);
        } else if (have($item`Crimbo peppermint bark`) && have($item`Crimbo candied pecan`)) {
          sweetSynthesis($item`Crimbo peppermint bark`, $item`Crimbo candied pecan`);
        } else if (have($item`Crimbo peppermint bark`) && have($item`peppermint sprout`)) {
          sweetSynthesis($item`Crimbo peppermint bark`, $item`peppermint sprout`);
        } else if (itemAmount($item`peppermint sprout`) >= 3) {
          use(1, $item`peppermint sprout`);
          use(2, $item`peppermint sprout`);
          sweetSynthesis($item`peppermint twist`, $item`peppermint patty`);
        } else if (itemAmount($item`peppermint sprout`) >= 2 && have($item`peppermint twist`)) {
          use(2, $item`peppermint sprout`);
          sweetSynthesis($item`peppermint twist`, $item`peppermint patty`);
        } else if (have($item`peppermint patty`) && have($item`peppermint sprout`)) {
          use(1, $item`peppermint sprout`);
          sweetSynthesis($item`peppermint twist`, $item`peppermint patty`);
        } else if (have($item`peppermint patty`) && have($item`peppermint twist`)) {
          sweetSynthesis($item`peppermint twist`, $item`peppermint patty`);
        }
      },
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
        useSkill($skill`Summon Sugar Sheets`);
        create(1, $item`sugar chapeau`);
      },
      outfit: { familiar: $familiar`Exotic Parrot` },
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
      name: "Skeleton Fruits",
      ready: () => get("_monstersMapped") < 3 && get("_chestXRayUsed") < 3,
      prepare: (): void => {
        if (get("parkaMode") !== "spikolodon") cliExecute("parka spikolodon");
      },
      completed: () =>
        have($item`cherry`) || have($item`oil of expertise`) || have($effect`Expert Oiliness`),
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
      },
      limit: { tries: 1 },
    },
    {
      name: "Saucecraft",
      prepare: () => $skills`Advanced Saucecrafting`.forEach((s) => useSkill(s)),
      completed: () => have($effect`Mystically Oiled`),
      do: () =>
        $items`oil of expertise, ointment of the occult, cordial of concentration`.forEach((item) =>
          retrieveItem(item)
        ),
      post: (): void => {
        use(1, $item`oil of expertise`);
        use(1, $item`ointment of the occult`);
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
      name: "Synth Smart",
      completed: () => have($effect`Synthesis: Smart`),
      do: (): void => {
        if (have($item`yellow candy heart`) && have($item`Crimbo peppermint bark`)) {
          sweetSynthesis($item`yellow candy heart`, $item`Crimbo peppermint bark`);
        } else if (have($item`orange candy heart`) && have($item`Crimbo candied pecan`)) {
          sweetSynthesis($item`orange candy heart`, $item`Crimbo candied pecan`);
        } else if (have($item`orange candy heart`) && have($item`peppermint sprout`)) {
          sweetSynthesis($item`orange candy heart`, $item`peppermint sprout`);
        } else if (have($item`pink candy heart`) && have($item`peppermint sprout`)) {
          use(1, $item`peppermint sprout`);
          sweetSynthesis($item`pink candy heart`, $item`peppermint twist`);
        } else if (have($item`pink candy heart`) && have($item`peppermint twist`)) {
          sweetSynthesis($item`pink candy heart`, $item`peppermint twist`);
        } else if (have($item`lavender candy heart`) && have($item`Crimbo fudge`)) {
          sweetSynthesis($item`lavender candy heart`, $item`Crimbo fudge`);
        }
      },
      limit: { tries: 1 },
    },
  ],
};
