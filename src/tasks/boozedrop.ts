import { buy, cliExecute, effectModifier, getFuel, visitUrl } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  CommunityService,
  ensureEffect,
  have,
} from "libram";
import Macro from "../combat";
import { Quest } from "../engine/task";
import { CombatStrategy } from "grimoire-kolmafia";
import { CommunityServiceTests, logTestSetup } from "../lib";
import { fillTo } from "libram/dist/resources/2017/AsdonMartin";

export const BoozeDropQuest: Quest = {
  name: "Booze Drop",
  completed: () => CommunityService.BoozeDrop.isDone(),
  tasks: [
    /*
    {
      name: "Medley of Buffs",
      completed: () =>
        CombatLoversLocket.monstersReminisced().includes($monster`Black Crayon Elemental`),
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
    },
    */
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
      name: "Vampyric Cape, Bowling Ball and DSH Buffs",
      completed: () => have($effect`Bat-Adjacent Form`),
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
      name: "Fill Asdon",
      completed: () => getFuel() >= 37 || have($effect`Driving Observantly`),
      do: (): void => {
        if (have($effect`Driving Stealthily`)) cliExecute("shrug driving stealthily");
        if (getFuel() < 37 && !have($effect`Driving Observantly`)) fillTo(37);
      },
    },
    {
      name: "Test",
      prepare: (): void => {
        for (const it of $items`lavender candy heart, resolution: be happier, pulled yellow taffy, resolution: be luckier, autumn leaf`)
          if (have(it)) ensureEffect(effectModifier(it, "effect"));
      },
      completed: () => CommunityService.BoozeDrop.isDone(),
      do: () =>
        CommunityService.BoozeDrop.run(() => logTestSetup(CommunityServiceTests.ITEMTEST), 1),
      outfit: {
        modifier: "Item Drop, -equip broken champagne bottle",
        familiar: $familiar`Trick-or-Treating Tot`,
      },
      effects: [
        $effect`Blessing of the Bird`,
        $effect`Driving Observantly`,
        // $effect`El Aroma de Salsa`,
        $effect`Fat Leon's Phat Loot Lyric`,
        $effect`Feeling Lost`,
        // $effect`items.enh`,
        // $effect`I See Everything Thrice!`,
        $effect`Nearly All-Natural`,
        $effect`The Spirit of Taking`,
        $effect`Singer's Faithful Ocelot`,
        $effect`Spice Haze`,
        $effect`Steely-Eyed Squint`,
        $effect`The Spirit of Taking`,
        $effect`Uncucumbered`,
      ],
      acquire: [{ item: $item`wad of used tape` }],
      limit: { tries: 1 },
    },
  ],
};
