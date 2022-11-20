import { effectModifier } from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $monster,
  $skill,
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
    {
      name: "Test",
      prepare: (): void => {
        for (const it of $items`lavender candy heart, resolution: be happier, pulled yellow taffy, resolution: be luckier, autumn leaf`)
          if (have(it)) ensureEffect(effectModifier(it, "effect"));
      },
      completed: () => CommunityService.BoozeDrop.isDone(),
      do: () =>
        CommunityService.BoozeDrop.run(() => logTestSetup(CommunityServiceTests.ITEMTEST), 2),
      outfit: {
        modifier: "Item Drop, -equip broken champagne bottle",
        familiar: $familiar`Trick-or-Treating Tot`,
      },
      effects: [
        $effect`Blessing of the Bird`,
        $effect`El Aroma de Salsa`,
        $effect`Fat Leon's Phat Loot Lyric`,
        $effect`Feeling Lost`,
        $effect`items.enh`,
        $effect`I See Everything Thrice!`,
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
