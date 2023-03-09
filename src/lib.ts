import {
  cliExecute,
  cliExecuteOutput,
  Effect,
  familiarWeight,
  mpCost,
  myFamiliar,
  myMp,
  print,
  toItem,
  toSkill,
  visitUrl,
} from "kolmafia";
import { $effect, $item, get, have, set } from "libram";

export enum CommunityServiceTests {
  HPTEST = 1,
  MUSTEST = 2,
  MYSTTEST = 3,
  MOXTEST = 4,
  FAMTEST = 5,
  WPNTEST = 6,
  SPELLTEST = 7,
  COMTEST = 8,
  ITEMTEST = 9,
  HOTTEST = 10,
  COILTEST = 11,
  DONATEBODY = 30,
}

const testModifiers = new Map([
  [CommunityServiceTests.HPTEST, ["Maximum HP", "Maximum HP Percent"]],
  [CommunityServiceTests.MUSTEST, ["Muscle", "Muscle Percent"]],
  [CommunityServiceTests.MYSTTEST, ["Mysticality", "Mysticality Percent"]],
  [CommunityServiceTests.MOXTEST, ["Moxie", "Moxie Percent"]],
  [CommunityServiceTests.FAMTEST, ["Familiar Weight"]],
  [CommunityServiceTests.WPNTEST, ["Weapon Damage", "Weapon Damage Percent"]],
  [CommunityServiceTests.SPELLTEST, ["Spell Damage", "Spell Damage Percent"]],
  [CommunityServiceTests.COMTEST, ["Combat Rate"]],
  [CommunityServiceTests.ITEMTEST, ["Item Drop", "Booze Drop"]],
  [CommunityServiceTests.HOTTEST, ["Hot Resistance"]],
  [CommunityServiceTests.COILTEST, []],
]);
export const testNames = new Map([
  [CommunityServiceTests.HPTEST, "HP Test"],
  [CommunityServiceTests.MUSTEST, "Muscle Test"],
  [CommunityServiceTests.MYSTTEST, "Mysticality Test"],
  [CommunityServiceTests.MOXTEST, "Moxie Test"],
  [CommunityServiceTests.FAMTEST, "Familiar Weight Test"],
  [CommunityServiceTests.WPNTEST, "Weapon Damage Test"],
  [CommunityServiceTests.SPELLTEST, "Spell Damage Test"],
  [CommunityServiceTests.COMTEST, "Noncombat Test"],
  [CommunityServiceTests.ITEMTEST, "Item Drop Test"],
  [CommunityServiceTests.HOTTEST, "Hot Resistance Test"],
  [CommunityServiceTests.COILTEST, "Coil Wire"],
]);

// Labyrinth adjectives
export const labyrinthAdjectives: Map<string, string[]> = new Map([
  [
    "shadow lighter",
    [
      "steaming",
      "scalded",
      "scalding",
      "flame-choked",
      "blazing",
      "ember-lit",
      "scorching",
      "blistering",
      "sizzling",
      "charred",
      "white-hot",
    ],
  ],
  [
    "shadow heptahedron",
    [
      "Pythagorean",
      "exponential",
      "fractional",
      "parabolic",
      "sinusoidal",
      "monomial",
      "boolean",
      "integer",
      "hyperbolic",
      "Riemannian",
      "irrational",
      "geometric",
      "fractal",
      "ordinal",
      "logarithmic",
      "angular",
      "Cartesian",
      "prime",
      "multiplicative",
      "Fibonacci",
      "self-referential",
      "trigonometric",
      "cubic",
      "vector",
    ],
  ],
  [
    "shadow bucket",
    [
      "humid",
      "dripping",
      "water-logged",
      "runny",
      "soaked",
      "drowning",
      "watery",
      "aqueous",
      "sodden",
      "moist",
      "foggy",
      "damp",
    ],
  ],
  [
    "shadow heart",
    [
      "bloodstained",
      "vein-shot",
      "blood-soaked",
      "blood-drenched",
      "crimson",
      "pulsing",
      "sanguine",
      "veiny",
      "bloody",
      "hematic",
      "bleeding",
    ],
  ],
  [
    "shadow snowflake",
    [
      "frost-rimed",
      "icy",
      "iced-over",
      "frozen",
      "freezing",
      "frosty",
      "spectral",
      "cold-numbed",
      "snow-covered",
      "chilly",
      "hyperborean",
      "wintry",
      "arctic",
      "frigid",
    ],
  ],
  [
    "shadow wave",
    [
      "ghostly",
      "insubstantial",
      "diaphanous",
      "translucent",
      "see-through",
      "gossamer",
      "half-there",
      "nearly invisible",
      "wispy",
      "ephemeral",
    ],
  ],
]);

// From phccs
export function convertMilliseconds(milliseconds: number): string {
  const seconds = milliseconds / 1000;
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = Math.round((seconds - minutes * 60) * 1000) / 1000;
  const hours = Math.floor(minutes / 60);
  const minutesLeft = Math.round(minutes - hours * 60);
  return (
    (hours !== 0 ? `${hours} hours, ` : "") +
    (minutesLeft !== 0 ? `${minutesLeft} minutes, ` : "") +
    (secondsLeft !== 0 ? `${secondsLeft} seconds` : "")
  );
}

function replaceAll(str: string, searchValue: string, replaceValue: string): string {
  const newStr = str.replace(searchValue, replaceValue);
  if (newStr === str) return newStr;
  return replaceAll(newStr, searchValue, replaceValue);
}

function printModtrace(modifiers: string | string[], baseModifier?: string): void {
  if (typeof modifiers === "string") {
    return printModtrace([modifiers], modifiers);
  } else {
    if (modifiers.length === 0) return;
    if (!baseModifier) {
      const baseModifiers = new Map(
        modifiers.map((key) => {
          return [key, 1];
        })
      );

      modifiers.forEach((keyThis) => {
        for (const keyNext of modifiers) {
          if (keyThis === keyNext) continue;
          if (keyThis.includes(keyNext)) {
            baseModifiers.set(keyThis, 0);
            break;
          }
        }
      });

      modifiers.forEach((keyThis) => {
        if (baseModifiers.get(keyThis) ?? 0 !== 0) {
          const modifiersSubset = [keyThis];

          for (const keyNext of modifiers) {
            if (keyThis === keyNext) continue;
            if (keyNext.includes(keyThis)) modifiersSubset.push(keyNext);
          }
          printModtrace(modifiersSubset, keyThis);
        }
      });
    } else {
      let htmlOutput = cliExecuteOutput(`modtrace ${baseModifier}`);
      let htmlHeader = htmlOutput.substring(
        htmlOutput.indexOf("<tr>") + 4,
        htmlOutput.indexOf("</tr>")
      );
      let headers = [] as string[];
      let headerMatches = htmlHeader.match("(>)(.*?)(</td>)");
      while (headerMatches) {
        const header = headerMatches[2];
        headers.push(header);

        const idx = headerMatches[0].length + htmlHeader.search("(>)(.*?)(</td>)");
        htmlHeader = htmlHeader.substring(idx);
        headerMatches = htmlHeader.match("(>)(.*?)(</td>)");
      }
      headers = headers.slice(2);

      const exactModifierColIdx = headers.findIndex(
        (header) => header.toLowerCase() === baseModifier.toLowerCase()
      );

      if (exactModifierColIdx === -1) {
        print(
          `Could not find exact string match of ${baseModifier} in ${modifiers.toString()}`,
          "red"
        );
        return;
      }

      let totalVal = 0.0;
      // Maps modifier name to its value
      const modifierVals = new Map(
        headers.map((header) => {
          return [header, 0];
        })
      );

      const lowerCaseModifiers = modifiers.map((modifier) => modifier.toLowerCase());

      if (baseModifier.toLowerCase() === "familiar weight") {
        totalVal += familiarWeight(myFamiliar());
        print(`[Familiar Weight] Base weight (${totalVal})`);
      }

      htmlOutput = htmlOutput.substring(
        htmlOutput.indexOf("</tr>") + 5,
        htmlOutput.indexOf("</table>")
      );

      while (htmlOutput.length > 0) {
        const idxStart = htmlOutput.indexOf("<tr>");
        const idxEnd = htmlOutput.indexOf("</tr>");
        if (idxStart === -1) break;

        let row = replaceAll(htmlOutput.substring(idxStart + 4, idxEnd), "></td>", ">0</td>");
        const rowArr = [] as string[];
        let rowMatches = row.match("(>)(.*?)(</td>)");
        while (rowMatches) {
          rowArr.push(rowMatches[2]);
          row = row.replace(rowMatches[0], "");
          rowMatches = row.match("(>)(.*?)(</td>)");
        }
        rowArr
          .slice(2)
          .filter((e, idx) => idx % 2 === 0)
          .forEach((e, idx) => {
            const val = parseInt(e);
            modifierVals.set(headers[idx], (modifierVals.get(headers[idx]) ?? 0) + val);
            if (val !== 0 && lowerCaseModifiers.includes(headers[idx].toLowerCase())) {
              print(`[${headers[idx]}] ${rowArr[1]} (${val.toFixed(1)})`);
            }
          });

        htmlOutput = htmlOutput.substring(idxEnd + 5);
      }

      let total = 0.0;
      for (const modifier of headers) {
        if (lowerCaseModifiers.includes(modifier.toLowerCase())) {
          let totalVal = modifierVals.get(modifier) ?? 0;
          if (modifier.toLowerCase() === "weapon damage") {
            if (have($effect`Bow-Legged Swagger`)) {
              print(`[Weapon Damage] Bow-Legged Swagger (${totalVal.toFixed(1)})`);
              totalVal += totalVal;
            }
          } else if (modifier.toLowerCase() === "weapon damage percent") {
            if (have($effect`Bow-Legged Swagger`)) {
              print(`[Weapon Damage Percent] Bow-Legged Swagger (${totalVal.toFixed(1)})`);
              totalVal += totalVal;
            }
          }
          print(`${modifier} => ${totalVal.toFixed(1)}`, "purple");

          total += totalVal;
        }
      }

      print(`Total ${baseModifier}: ${total.toFixed(1)}`, "blue");
    }
  }
}

function advCost(whichTest: number): number {
  // Adapted from AutoHCCS
  const page = visitUrl("council.php");
  const testStr = `name=option value=${whichTest}>`;
  if (page.includes(testStr)) {
    const chars = 140; // chars to look ahead
    const pageStr = page.slice(
      page.indexOf(testStr) + testStr.length,
      page.indexOf(testStr) + testStr.length + chars
    );
    const advStr = pageStr.slice(pageStr.indexOf("(") + 1, pageStr.indexOf("(") + 3).trim();
    return parseInt(advStr);
  } else {
    print("Didn't find specified test on the council page. Already done?");
    return 99999;
  }
}

export function logTestSetup(whichTest: number): void {
  const testTurns = advCost(whichTest);
  printModtrace(testModifiers.get(whichTest) ?? []);
  print(
    `${testNames.get(whichTest) ?? "Unknown Test"} takes ${testTurns} adventure${
      testTurns === 1 ? "" : "s"
    }.`,
    "blue"
  );
  set(`_CSTest${whichTest}`, testTurns + (have($effect`Simmering`) ? 1 : 0));
}

export function tryAcquiringEffect(ef: Effect, tryRegardless = false): void {
  // Try acquiring an effect
  if (have(ef)) return; // If we already have the effect, we're done
  if (tryRegardless || canAcquireEffect(ef)) {
    if (ef.default === "cast 1 Seek out a Bird") cliExecute("cast Seek out a Bird");
    else cliExecute(ef.default);
  }
}

export function canAcquireEffect(ef: Effect): boolean {
  // This will not attempt to craft items to acquire the effect, which is the behaviour of ef.default
  // You will need to have the item beforehand for this to return true
  return ef.all
    .map((defaultAction) => {
      if (defaultAction.length === 0) return false; // This effect is not acquirable
      const splitString = defaultAction.split(" ");
      const action = splitString[0];
      const target = splitString.slice(2).join(" ");

      switch (action) {
        case "eat":
          return have(toItem(target)); // We have the food
        case "drink":
          return have(toItem(target)); // We have the booze
        case "chew":
          return have(toItem(target)); // We have the spleen item
        case "use":
          return have(toItem(target)); // We have the item
        case "cast":
          return have(toSkill(target)) && myMp() >= mpCost(toSkill(target)); // We have the skill and can cast it
        case "cargo":
          return have($item`Cargo Cultist Shorts`) && !get("_cargoPocketEmptied"); // We can grab it from our cargo pants
        case "synthesize":
          return false; // We currently don't support sweet synthesis
        default:
          return false; // Doesn't seem like there's any way to acquire this effect?
      }
    })
    .some((b) => b);
}
