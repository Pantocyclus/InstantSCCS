import { CombatResource as BaseCombatResource, OutfitSpec } from "grimoire-kolmafia";
import { Effect, Familiar, Item, Location, myMeat, retrieveItem } from "kolmafia";
import { $effect, $item, $items, $skill, have, PeridotOfPeril } from "libram";

export interface Resource {
  name: string;
  available: () => boolean;
  prepare?: () => void;
  equip?: Item | Familiar | OutfitSpec | OutfitSpec[];
  effect?: Effect;
  chance?: () => number;
}

export type CombatResource = Resource & BaseCombatResource;

export interface YellowRaySource extends CombatResource {
  free?: boolean;
  turns?: number;
}
export const yellowRaySources: YellowRaySource[] = [
  {
    name: "Jurassic Parka",
    available: () => have($skill`Torso Awareness`) && have($item`Jurassic Parka`),
    equip: {
      equip: $items`Jurassic Parka`,
      modes: { parka: "dilophosaur" },
      avoid: $items`bat wings`,
    },
    do: $skill`Spit jurassic acid`,
    free: true,
    turns: 100,
  },
  {
    name: "Yellow Rocket",
    available: () => myMeat() >= 250 && have($item`Clan VIP Lounge key`),
    prepare: () => retrieveItem($item`yellow rocket`),
    do: $item`yellow rocket`,
    free: false,
    turns: 75,
  },
  {
    name: "Retro Superhero Cape",
    available: () => have($item`unwrapped knock-off retro superhero cape`),
    equip: {
      equip: $items`unwrapped knock-off retro superhero cape`,
      modes: { retrocape: ["heck", "kiss"] },
    },
    do: $skill`Unleash the Devil's Kiss`,
    free: false,
    turns: 100,
  },
];

export function yellowRayPossible(): boolean {
  if (have($effect`Everything Looks Yellow`)) return false;
  return yellowRaySources.find((s) => s.available()) !== undefined;
}

export type ForceSource = Omit<CombatResource, "available" | "do"> & {
  available: (zone: Location) => boolean;
  do: CombatResource["do"] | null;
};

export const forceSources: ForceSource[] = [
  {
    name: "Peridot of Peril",
    available: (zone: Location) =>
      PeridotOfPeril.have() && !PeridotOfPeril.zonesToday().includes(zone),
    equip: {
      acc3: $item`Peridot of Peril`,
    },
    do: null,
  },

  // For Map the Monsters, you must ALSO match the `(zone) => boolean` signature:
  {
    name: "Map the Monsters",
    available: () => have($skill`Map the Monsters`) && $skill`Map the Monsters`.timescast < 3,
    equip: {},
    do: $skill`Map the Monsters`,
  },
];

export function pickForceSource(zone: Location): ForceSource | null {
  for (const source of forceSources) {
    if (source.available(zone)) return source;
  }
  return null;
}
