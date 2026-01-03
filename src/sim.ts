import { Familiar, Item, Monster, print, printHtml, Skill, storageAmount } from "kolmafia";
import {
  $familiar,
  $item,
  $monster,
  $skill,
  CombatLoversLocket,
  get,
  have,
  Lifestyle,
  permedSkills,
} from "libram";
import { have as haveTrainSet } from "libram/dist/resources/2022/TrainSet";

class Hardcoded {
  have: boolean;
  name: string;

  constructor(have: boolean, name: string) {
    this.have = have;
    this.name = name;
  }
}

type Thing = Item | Familiar | Skill | Monster | Hardcoded;
interface Requirement {
  thing: Thing | Thing[];
  why: string;
  optional?: boolean;
  recommended?: boolean;
}

/**
 * Return: a list of all things required to run the script.
 */
function buildIotmList(): Requirement[] {
  return [
    {
      thing: $item`Clan VIP Lounge key`,
      why: "Many test improvements",
    },
    {
      thing: new Hardcoded(haveTrainSet(), "Model train set"),
      why: "Leveling",
    },
    {
      thing: new Hardcoded(
        have($item`cosmic bowling ball`) ||
          storageAmount($item`cosmic bowling ball`) > 0 ||
          get("cosmicBowlingBallReturnCombats", -1) >= 0 ||
          have($item`cursed monkey's paw`),
        "Cosmic bowling ball (or Cursed Monkey's Paw)",
      ),
      why: "Leveling + banish",
    },
    {
      thing: $item`cursed monkey's paw`,
      why: "Leveling + many test improvements",
      optional: true,
      recommended: true,
    },
    {
      thing: $item`Cincho de Mayo`,
      why: "Leveling",
      optional: true,
    },
    {
      thing: $familiar`Cookbookbat`,
      why: "Turngen, stat tests",
    },
    {
      thing: $item`combat lover's locket`,
      why: "Summons for various tests",
      optional: true,
      recommended: true,
    },
    {
      thing: $item`unbreakable umbrella`,
      why: "Various leveling and test improvements",
      optional: true,
      recommended: true,
    },
    {
      thing: $item`closed-circuit pay phone`,
      why: "Free fights, Non-combat, Item Drop",
      optional: true,
      recommended: true,
    },
    {
      thing: new Hardcoded(
        have($item`one-day ticket to Dinseylandfill`) ||
          storageAmount($item`one-day ticket to Dinseylandfill`) > 0 ||
          get("stenchAirportAlways") ||
          get("spookyAirportAlways") ||
          get("hotAirportAlways") ||
          get("coldAirportAlways") ||
          get("sleazeAirportAlways") ||
          get("neverendingPartyAlways") ||
          have($item`Monodent of the Sea`),
        "Access to Scaling Monsters",
      ),
      why: "Scalers for leveling",
    },
    {
      thing: $item`backup camera`,
      why: "More fights from locket",
      optional: true,
    },
    {
      thing: $item`January's Garbage Tote`,
      why: "XP for leveling",
      optional: true,
    },
    {
      thing: $item`Kramco Sausage-o-Matic™`,
      why: "Free fights, Turngen",
      optional: true,
    },
    {
      thing: $skill`Just the Facts`,
      why: "More fights from locket, more wishes from rift",
      optional: true,
    },
    {
      thing: $item`Sept-Ember Censer`,
      why: "Alternative powerleveling method",
      optional: true,
      recommended: true,
    },
  ];
}

function buildLocketList(): Requirement[] {
  return [
    {
      thing: $monster`red skeleton`,
      why: "Weapon Damage",
      optional: true,
      recommended: true,
    },
    {
      thing: $monster`factory worker (female)`,
      why: "Hot Resistance",
      optional: true,
      recommended: true,
    },
    {
      thing: $monster`Witchess King`,
      why: "Weapon Damage, Muscle %",
      optional: true,
      recommended: true,
    },
  ];
}

function buildMiscList(): Requirement[] {
  return [
    {
      thing: $familiar`Disgeist`,
      why: "Non-combat",
      optional: true,
      recommended: true,
    },
    {
      thing: $familiar`Exotic Parrot`,
      why: "Hot test",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Inscrutable Gaze`,
      why: "Leveling",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Song of Bravado`,
      why: "Stat %",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Get Big`,
      why: "Stat %",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Stevedave's Shanty of Superiority`,
      why: "Stat %",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`The Ode to Booze`,
      why: "Adventures",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Pizza Lover`,
      why: "Adventures + XP",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Empathy of the Newt`,
      why: "Familiar weight",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Leash of Linguini`,
      why: "Familiar weight",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Amphibian Sympathy`,
      why: "Familiar weight",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`The Sonata of Sneakiness`,
      why: "Non-combat",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Smooth Movement`,
      why: "Non-combat",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Asbestos Heart`,
      why: "Hot Resistance",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Elemental Saucesphere`,
      why: "Hot Resistance",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Tolerance of the Kitchen`,
      why: "Hot Resistance",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Astral Shell`,
      why: "Hot Resistance",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Crimbo Training: Coal Taster`,
      why: "Hot Resistance",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Bow-Legged Swagger`,
      why: "Weapon Damage",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Steely-Eyed Squint`,
      why: "Item Drop",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Shattering Punch`,
      why: "Free kill",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Gingerbread Mob Hit`,
      why: "Free kill",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Snokebomb`,
      why: "Banish",
    },
    {
      thing: $skill`Saucegeyser`,
      why: "Combat spell",
    },
    {
      thing: $skill`Advanced Saucecrafting`,
      why: "Saucecrafting",
    },
    {
      thing: $skill`The Way of Sauce`,
      why: "Saucecrafting",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Impetuous Sauciness`,
      why: "Saucecrafting",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Expert Corner-Cutter`,
      why: "Saucecrafting",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Prevent Scurvy and Sobriety`,
      why: "Saucecrafting + turngen",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Perfect Freeze`,
      why: "Turngen",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Drinking to Drink`,
      why: "Turngen",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Cannelloni Cocoon`,
      why: "HP Regen",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Soul Saucery`,
      why: "MP Regen",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Curse of Weaksauce`,
      why: "MP Regen",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Inner Sauce`,
      why: "MP Regen",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Double-Fisted Skull Smashing`,
      why: "Stat test",
      optional: true,
      recommended: true,
    },
    {
      thing: new Hardcoded(
        // These unknownRecipe properties are false when the user knows the recipe
        !get("unknownRecipe10972"),
        "Recipe of Yore: Roasted vegetable of Jarlsberg",
      ),
      why: "Food we'll cook in-run",
    },
    {
      thing: new Hardcoded(
        !get("unknownRecipe10974"),
        "Recipe of Yore: Pete's Pete's wily whey bar",
      ),
      why: "Food we'll cook in-run",
    },
    {
      thing: new Hardcoded(!get("unknownRecipe10975"), "Recipe of Yore: Pete's rich ricotta"),
      why: "Food we'll cook in-run",
    },
    {
      thing: new Hardcoded(!get("unknownRecipe10976"), "Recipe of Before Yore: Boris's beer"),
      why: "Booze we'll brew in-run",
    },
    {
      thing: new Hardcoded(!get("unknownRecipe10977"), "Recipe of Yore: honey bun of Boris"),
      why: "Food we'll cook in-run",
    },
    {
      thing: new Hardcoded(!get("unknownRecipe10978"), "Recipe of Yore: Boris's bread"),
      why: "Food we'll cook in-run",
    },
    {
      thing: new Hardcoded(
        !get("unknownRecipe10988"),
        "Recipe of Yore: baked veggie ricotta casserole",
      ),
      why: "Food we'll cook in-run",
    },
    {
      thing: new Hardcoded(!get("unknownRecipe10989"), "Recipe of Yore: plain calzone"),
      why: "Food we'll cook in-run",
    },
    {
      thing: new Hardcoded(
        (() => {
          // We don't need an ice house if we have Peridot
          if (have($item`Peridot of Peril`)) return true;
          // We don't need an ice house if we can map the novelty skeleton
          if (have($skill`Map the Monsters`)) return true;

          const banishes = get("banishedMonsters").split(":");
          const iceHouseIndex = banishes.map((string) => string.toLowerCase()).indexOf("ice house");
          if (iceHouseIndex === -1) return false;
          return ["remaindered skeleton", "factory-irregular skeleton", "swarm of skulls"].includes(
            banishes[iceHouseIndex - 1],
          );
        })(),
        "Peridot / Cartography / Ice Housed Skeleton Store Monster",
      ),
      why: "Ensures Novelty Tropical Skeleton",
    },
    {
      thing: new Hardcoded(
        get("knownAscensions") >= 10,
        "Access to all-purpose flower in the Gift Shop",
      ),
      why: "Muscle test",
    },
    {
      thing: $skill`Pride of the Puffin`,
      why: "Monster Level",
      optional: true,
    },
    {
      thing: $skill`Drescher's Annoying Noise`,
      why: "Monster Level",
      optional: true,
    },
    {
      thing: $skill`Ur-Kel's Aria of Annoyance`,
      why: "Monster Level",
      optional: true,
    },
    {
      thing: $skill`Master Saucier`,
      why: "Spell Damage",
      optional: true,
    },
    {
      thing: $skill`Subtle and Quick to Anger`,
      why: "Spell Damage",
      optional: true,
    },
    {
      thing: $skill`Simmer`,
      why: "Spell Damage",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Always Never Not Guzzling`,
      why: "Item Drop",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Fat Leon's Phat Loot Lyric`,
      why: "Item Drop",
      optional: true,
    },
    {
      thing: $skill`Mad Looting Skillz`,
      why: "Item Drop",
      optional: true,
    },
    {
      thing: $skill`Object Quasi-Permanence`,
      why: "Item Drop",
      optional: true,
    },
    {
      thing: $skill`Powers of Observatiogn`,
      why: "Item Drop",
      optional: true,
    },
    {
      thing: $skill`Bind Spice Ghost`,
      why: "Item Drop",
      optional: true,
    },
    {
      thing: $skill`Thief Among the Honorable`,
      why: "Item Drop",
      optional: true,
    },
    {
      thing: $skill`Natural Born Scrabbler`,
      why: "Item Drop",
      optional: true,
    },
    {
      thing: $skill`20/20 Vision`,
      why: "Item Drop",
      optional: true,
    },
    {
      thing: $skill`Carol of the Bulls`,
      why: "Weapon Damage",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Carol of the Hells`,
      why: "Spell Damage",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Song of Sauce`,
      why: "Spell Damage",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Song of the North`,
      why: "Weapon Damage",
      optional: true,
      recommended: true,
    },
    {
      thing: $skill`Jackasses' Symphony of Destruction`,
      why: "Weapon Damage",
      optional: true,
    },
    {
      thing: $skill`Scowl of the Auk`,
      why: "Weapon Damage",
      optional: true,
    },
    {
      thing: $skill`Rage of the Reindeer`,
      why: "Weapon Damage",
      optional: true,
    },
    {
      thing: $skill`Tenacity of the Snapper`,
      why: "Weapon Damage",
      optional: true,
    },
    {
      thing: $skill`Claws of the Walrus`,
      why: "Weapon Damage",
      optional: true,
    },
    {
      thing: $skill`Blessing of the War Snapper`,
      why: "Weapon Damage",
      optional: true,
    },
    {
      thing: $skill`Evoke Eldritch Horror`,
      why: "Free Fight",
      optional: true,
    },

    {
      thing: $item`Calzone of Legend`,
      why: "Turngen + Stat %",
    },
    {
      thing: $item`Deep Dish of Legend`,
      why: "Turngen + Stat %",
    },
    {
      thing: $item`Pizza of Legend`,
      why: "Turngen + Stat %",
    },
    {
      thing: new Hardcoded(
        have($item`borrowed time`) ||
          storageAmount($item`borrowed time`) > 0 ||
          have($skill`Summon Clip Art`),
        "borrowed time",
      ),
      why: "Turngen",
    },
    {
      thing: $item`non-Euclidean angle`,
      why: "XP %",
      optional: true,
    },
    {
      thing: $item`abstraction: category`,
      why: "XP %",
      optional: true,
    },
  ];
}

function checkThing(thing: Thing): [boolean, string] {
  if (thing instanceof Hardcoded) return [thing.have, thing.name];
  if (thing instanceof Familiar) return [have(thing), thing.hatchling.name];
  if (thing instanceof Skill)
    return [
      [Lifestyle.softcore, Lifestyle.hardcore].some(
        (lifestyle) => lifestyle === permedSkills().get(thing),
      ),
      thing.name,
    ];
  if (thing instanceof Monster)
    return [new Set(CombatLoversLocket.unlockedLocketMonsters()).has(thing), thing.name];
  return [have(thing) || storageAmount(thing) > 0, thing.name];
}

function check(req: Requirement): [boolean, string, Requirement] {
  if (Array.isArray(req.thing)) {
    const checks = req.thing.map(checkThing);

    return [
      checks.find((res) => res[0]) !== undefined,
      checks.map((res) => res[1]).join(" OR "),
      req,
    ];
  } else {
    const res = checkThing(req.thing);
    return [res[0], res[1], req];
  }
}

export function checkRequirements(): void {
  let missing_optional = 0;
  let missing = 0;

  const categories: [string, Requirement[]][] = [
    ["IoTMs (Necessary)", buildIotmList().filter((req) => !req.optional)],
    ["Miscellany (Necessary)", buildMiscList().filter((req) => !req.optional)],
    [
      "IoTMs (Highly Recommended)",
      buildIotmList().filter((req) => req.optional && req.recommended),
    ],
    [
      "Miscellany (Highly Recommended)",
      buildMiscList().filter((req) => req.optional && req.recommended),
    ],
    ["Combat Lover's Locket Monsters (Highly Recommended)", buildLocketList()],
    ["IoTMs (Optional)", buildIotmList().filter((req) => req.optional && !req.recommended)],
    ["Miscellany (Optional)", buildMiscList().filter((req) => req.optional && !req.recommended)],
  ];
  printHtml(
    "Checking your character... Legend: <font color='#888888'>✓ Have</font> / <font color='red'>X Missing & Required</font> / <font color='black'>X Missing & Optional",
  );
  for (const [name, requirements] of categories) {
    if (requirements.length === 0) continue;

    const requirements_info: [boolean, string, Requirement][] = requirements.map(check);
    print(name, "blue");
    for (const [have_it, name, req] of requirements_info.sort((a, b) => a[1].localeCompare(b[1]))) {
      const color = have_it ? "#888888" : req.optional ? "black" : "red";
      const symbol = have_it ? "✓" : "X";
      if (!have_it && req.optional) missing_optional++;
      if (!have_it && !req.optional) missing++;
      print(`${symbol} ${name} - ${req.why}`, color);
    }
    print("");
  }

  // Print the count of missing things
  if (missing > 0) {
    print(
      `You are missing ${missing} required things from the basic run plan. This script may not yet work for you.`,
      "red",
    );
    if (missing_optional > 0) print(`You are also missing ${missing_optional} optional things.`);
  } else {
    if (missing_optional > 0) {
      print(
        `You are missing ${missing_optional} optional things. This script should work, but it could do better.`,
      );
    } else {
      print(`You have everything! You are the shiniest star. This script should work great.`);
    }
  }
}
