import { buy, cliExecute, effectModifier, myClass, myThrall, useSkill, visitUrl } from "kolmafia";
import {
  $class,
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $thrall,
  CombatLoversLocket,
  CommunityService,
  ensureEffect,
  have,
} from "libram";
import Macro from "../combat";
import { Quest } from "../engine/task";
import { CombatStrategy } from "grimoire-kolmafia";
import { CommunityServiceTests, logTestSetup } from "../lib";

export const BoozeDropQuest: Quest = {
  name: "Booze Drop",
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [
    {
      name: "Underground Fireworks Shop",
      prepare: () => visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2", false),
      completed: () => have($item`oversized sparkler`),
      do: (): void => {
        if (!have($item`oversized sparkler`)) buy(1, $item`oversized sparkler`);
      },
      outfit: { pants: $item`designer sweatpants` },
      limit: { tries: 1 },
    },
    {
      name: "Mini-Accordion Thief Buff",
      ready: () => have($familiar`Mini-Adventurer`) && myClass() === $class`Accordion Thief`,
      completed: () => have($effect`Bailando, Fernando`) || myClass() !== $class`Accordion Thief`,
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
      choices: { [768]: 6 },
      limit: { tries: 2 },
    },
    {
      name: "Vampyric Cape + Bowling Ball + DSH Buffs (Sauceror)",
      completed: () => have($effect`Bat-Adjacent Form`) || myClass() !== $class`Sauceror`,
      do: $location`The X-32-F Combat Training Snowman`,
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Become a Bat`)
          .skill($skill`Bowl Straight Up`)
          .default()
      ),
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        back: $item`vampyric cloake`,
        pants: $item`designer sweatpants`,
        familiar: $familiar`Melodramedary`,
      },
      limit: { tries: 1 },
      post: (): void => {
        cliExecute("hottub");
      },
    },
    {
      name: "Vampyric Cape + Bowling Ball + DSH Buffs (Non-Sauceror)",
      completed: () =>
        CombatLoversLocket.monstersReminisced().includes($monster`Black Crayon Elemental`) ||
        have($effect`Bat-Adjacent Form`) ||
        myClass() === $class`Sauceror`,
      do: () => CombatLoversLocket.reminisce($monster`Black Crayon Elemental`),
      combat: new CombatStrategy().macro(
        Macro.skill($skill`Become a Bat`)
          .skill($skill`Bowl Straight Up`)
          .default()
      ),
      outfit: {
        hat: $item`Daylight Shavings Helmet`,
        back: $item`vampyric cloake`,
        pants: $item`designer sweatpants`,
        familiar: $familiar`Ghost of Crimbo Carols`,
        famequip: $item`none`,
      },
      limit: { tries: 1 },
      post: (): void => {
        cliExecute("hottub");
      },
    },
    {
      name: "Test",
      prepare: (): void => {
        for (const it of $items`lavender candy heart, resolution: be happier, pulled yellow taffy, resolution: be luckier, autumn leaf`)
          if (have(it)) ensureEffect(effectModifier(it, "effect"));
        if (myClass() !== $class`Pastamancer`) {
          ensureEffect($effect`Spice Haze`);
          if (myClass() === $class`Accordion Thief`) ensureEffect($effect`Beer Barrel Polka`);
        } else {
          if (myThrall() !== $thrall`Spice Ghost`) useSkill($skill`Bind Spice Ghost`);
          ensureEffect($effect`Pork Barrel`);
        }
      },
      completed: () => CommunityService.BoozeDrop.isDone(),
      do: () =>
        CommunityService.BoozeDrop.run(() => logTestSetup(CommunityServiceTests.ITEMTEST), 3),
      outfit: {
        modifier: "Item Drop, -equip broken champagne bottle",
        familiar: $familiar`Trick-or-Treating Tot`,
      },
      effects: [
        $effect`Blessing of the Bird`,
        $effect`Driving Observantly`,
        $effect`Fat Leon's Phat Loot Lyric`,
        $effect`Feeling Lost`,
        // $effect`items.enh`,
        $effect`I See Everything Thrice!`,
        $effect`Nearly All-Natural`,
        $effect`The Spirit of Taking`,
        $effect`Singer's Faithful Ocelot`,
        $effect`Steely-Eyed Squint`,
        $effect`The Spirit of Taking`,
        $effect`Uncucumbered`,
      ],
      acquire: [{ item: $item`wad of used tape` }],
      limit: { tries: 1 },
    },
  ],
};
