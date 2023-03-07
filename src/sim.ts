import {
  Familiar,
  getWorkshed,
  Item,
  Monster,
  print,
  printHtml,
  Skill,
  storageAmount,
} from "kolmafia";
import { $familiar, $item, $monster, $skill, CombatLoversLocket, get, have } from "libram";

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
      thing: new Hardcoded(
        have($item`model train set`) || getWorkshed() === $item`model train set`,
        "Model train set"
      ),
      why: "Leveling",
    },
    {
      thing: new Hardcoded(
        have($item`cosmic bowling ball`) || get("cosmicBowlingBallReturnCombats", -1) >= 0,
        "Cosmic bowling ball"
      ),
      why: "Leveling + banish",
    },
    {
      thing: $familiar`Cookbookbat`,
      why: "Turngen, stat tests",
    },
    {
      thing: $item`combat lover's locket`,
      why: "Summons for various tests",
    },
    {
      thing: $item`unbreakable umbrella`,
      why: "Various leveling and test improvements",
    },
    {
      // eslint-disable-next-line libram/verify-constants
      thing: $item`closed-circuit pay phone`,
      why: "Free fights, Non-combat, Item Drop",
    },
    {
      thing: $item`airplane charter: Spring Break Beach`,
      why: "Scalers for leveling",
      optional: true,
    },
    {
      thing: $item`airplane charter: Conspiracy Island`,
      why: "Scalers for leveling",
      optional: true,
    },
    {
      thing: $item`airplane charter: Dinseylandfill`,
      why: "Scalers for leveling",
      optional: true,
    },
    {
      thing: $item`airplane charter: That 70s Volcano`,
      why: "Scalers for leveling",
      optional: true,
    },
    {
      thing: $item`airplane charter: The Glaciest`,
      why: "Scalers for leveling",
      optional: true,
    },
    {
      thing: $item`Neverending Party invitation envelope`,
      why: "Free fights, best scalers for leveling",
      optional: true,
    },
    {
      thing: $item`backup camera`,
      why: "More fights from locket",
    },
    {
      thing: $item`January's Garbage Tote`,
      why: "XP for leveling",
      optional: true,
    },
  ];
}

function buildLocketList(): Requirement[] {
  return [
    {
      thing: $monster`red skeleton`,
      why: "Weapon Damage",
    },
    {
      thing: $monster`factory worker (female)`,
      why: "Hot Resistance",
    },
    {
      thing: $monster`ungulith`,
      why: "Weapon Damage + Spell Damage",
      optional: true,
    },
    {
      thing: $monster`novelty tropical skeleton`,
      why: "Saucecrafting",
      optional: true,
    },
    {
      thing: $monster`ice concierge`,
      why: "+XP% in exotic destinations",
      optional: true,
    },
    {
      thing: $monster`Witchess Bishop`,
      why: "Item Drop",
      optional: true,
    },
    {
      thing: $monster`Witchess King`,
      why: "Weapon Damage, Muscle %",
    },
    {
      thing: $monster`Witchess Queen`,
      why: "Moxie %, Non-combat",
      optional: true,
    },
    {
      thing: $monster`Witchess Witch`,
      why: "Myst %, Spell Damage",
      optional: true,
    },
  ];
}

function buildMiscList(): Requirement[] {
  return [
    {
      thing: $familiar`Disgeist`,
      why: "Non-combat",
    },
    {
      thing: $familiar`Exotic Parrot`,
      why: "Hot test",
    },
    {
      thing: $skill`Inscrutable Gaze`,
      why: "Leveling",
    },
    {
      thing: $skill`Song of Bravado`,
      why: "Stat %",
    },
    {
      thing: $skill`Get Big`,
      why: "Stat %",
    },
    {
      thing: $skill`Stevedave's Shanty of Superiority`,
      why: "Stat %",
    },
    {
      thing: $skill`The Ode to Booze`,
      why: "Adventures",
    },
    {
      thing: $skill`Pizza Lover`,
      why: "Adventures + XP",
    },
    {
      thing: $skill`Empathy of the Newt`,
      why: "Familiar weight",
    },
    {
      thing: $skill`Leash of Linguini`,
      why: "Familiar weight",
    },
    {
      thing: $skill`Amphibian Sympathy`,
      why: "Familiar weight",
    },
    {
      thing: $skill`The Sonata of Sneakiness`,
      why: "Non-combat",
    },
    {
      thing: $skill`Smooth Movement`,
      why: "Non-combat",
    },
    {
      thing: $skill`Asbestos Heart`,
      why: "Hot Resistance",
    },
    {
      thing: $skill`Elemental Saucesphere`,
      why: "Hot Resistance",
    },
    {
      thing: $skill`Tolerance of the Kitchen`,
      why: "Hot Resistance",
    },
    {
      thing: $skill`Astral Shell`,
      why: "Hot Resistance",
    },
    {
      thing: $skill`Crimbo Training: Coal Taster`,
      why: "Hot Resistance",
    },
    {
      thing: $skill`Bow-Legged Swagger`,
      why: "Weapon Damage",
    },
    {
      thing: $skill`Steely-Eyed Squint`,
      why: "Item Drop",
    },
    {
      thing: $skill`Shattering Punch`,
      why: "Free kill",
    },
    {
      thing: $skill`Gingerbread Mob Hit`,
      why: "Free kill",
    },
    {
      thing: $skill`Snokebomb`,
      why: "Banish",
    },
    {
      thing: $skill`Curse of Weaksauce`,
      why: "Combat spell",
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
    },
    {
      thing: $skill`Impetuous Sauciness`,
      why: "Saucecrafting",
    },
    {
      thing: $skill`Expert Corner-Cutter`,
      why: "Saucecrafting",
    },
    {
      thing: $skill`Prevent Scurvy and Sobriety`,
      why: "Saucecrafting + turngen",
    },
    {
      thing: $skill`Perfect Freeze`,
      why: "Turngen",
    },
    {
      thing: $skill`Drinking to Drink`,
      why: "Turngen",
    },
    {
      thing: $skill`Inner Sauce`,
      why: "MP Regen",
    },
    {
      thing: $skill`Double-Fisted Skull Smashing`,
      why: "Stat test",
    },
    {
      thing: new Hardcoded(
        // These unknownRecipe properties are false when the user knows the recipe
        !get("unknownRecipe10972"),
        "Recipe of Yore: Roasted vegetable of Jarlsberg"
      ),
      why: "Food we'll cook in-run",
    },
    {
      thing: new Hardcoded(
        !get("unknownRecipe10974"),
        "Recipe of Yore: Pete's Pete's wily whey bar"
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
        "Recipe of Yore: baked veggie ricotta casserole"
      ),
      why: "Food we'll cook in-run",
    },
    {
      thing: new Hardcoded(!get("unknownRecipe10989"), "Recipe of Yore: plain calzone"),
      why: "Food we'll cook in-run",
    },
    {
      thing: new Hardcoded(
        get("knownAscensions") >= 10,
        "Access to all-purpose flower in the Gift Shop"
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
    },
    {
      thing: $skill`Always Never Not Guzzling`,
      why: "Item Drop",
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
    },
    {
      thing: $skill`Carol of the Hells`,
      why: "Spell Damage",
    },
    {
      thing: $skill`Song of Sauce`,
      why: "Spell Damage",
    },
    {
      thing: $skill`Song of the North`,
      why: "Weapon Damage",
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
      thing: $item`one-day ticket to Dinseylandfill`,
      why: "Scalers for leveling",
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
      thing: $item`borrowed time`,
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
  if (thing instanceof Skill) return [have(thing), thing.name];
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
    ["IoTMs", buildIotmList().filter((req) => !req.optional)],
    ["Miscellany", buildMiscList().filter((req) => !req.optional)],
    ["IoTMs (Optional)", buildIotmList().filter((req) => req.optional)],
    ["Combat Lover's Locket Monsters (Optional)", buildLocketList()],
    ["Miscellany (Optional)", buildMiscList().filter((req) => req.optional)],
  ];
  printHtml(
    "Checking your character... Legend: <font color='#888888'>✓ Have</font> / <font color='red'>X Missing & Required</font> / <font color='black'>X Missing & Optional"
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
      `You are missing ${missing} required things. This script will not yet work for you.`,
      "red"
    );
    if (missing_optional > 0) print(`You are also missing ${missing_optional} optional things.`);
  } else {
    if (missing_optional > 0) {
      print(
        `You are missing ${missing_optional} optional things. This script should work, but it could do better.`
      );
    } else {
      print(`You have everything! You are the shiniest star. This script should work great.`);
    }
  }
}
