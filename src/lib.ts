import {
  cliExecute,
  cliExecuteOutput,
  Effect,
  familiarWeight,
  mpCost,
  myFamiliar,
  myMp,
  print,
  restoreMp,
  retrieveItem,
  toItem,
  toSkill,
  use,
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

export function advCost(whichTest: number): number {
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
  if (ef === $effect`Sparkling Consciousness`) { // This has no ef.default for some reason
    if (!get("_fireworkUsed") && retrieveItem($item`sparkler`, 1))
      use($item`sparkler`, 1);
    return;
  }
  if (!ef.default) return; // No way to acquire?
  
  if (ef === $effect`Ode to Booze`) restoreMp(60);  
  if (tryRegardless || canAcquireEffect(ef))
    cliExecute(ef.default.replace(/cast 1 /g, "cast "));
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
        case "eat": // We have the food
        case "drink": // We have the booze
        case "chew": // We have the spleen item
        case "use": // We have the item
          if (ef === $effect`Sparkling Consciousness` && get("_fireworkUsed")) return false;
          return have(toItem(target));
        case "cast":
          return have(toSkill(target)) && myMp() >= mpCost(toSkill(target)); // We have the skill and can cast it
        case "cargo":
          return have($item`Cargo Cultist Shorts`) && !get("_cargoPocketEmptied"); // We can grab it from our cargo pants
        case "synthesize":
          return false; // We currently don't support sweet synthesis
        case "barrelprayer":
          return get("barrelShrineUnlocked") && !get("_barrelPrayer");
        case "witchess":
          return get("puzzleChampBonus") === 20 && !get("_witchessBuff");
        case "telescope":
          return get("telescopeUpgrades") > 0 && !get("telescopeLookedHigh");
        case "beach":
          return have($item`Beach Comb`); // need to check if specific beach head has been taken
        case "spacegate":
          return get("spacegateAlways") && !get("_spacegateVaccine");
        case "pillkeeper":
          return have($item`Eight Days a Week Pill Keeper`);
        case "pool":
          return get("_poolGames") < 3;
        case "swim":
          return !get("_olympicSwimmingPool");
        case "shower":
          return !get("_aprilShower");
        case "terminal":
          return (
            get("_sourceTerminalEnhanceUses") <
            1 +
              get("sourceTerminalChips")
                .split(",")
                .filter((s) => s.includes("CRAM")).length
          );
        case "daycare":
          return get("daycareOpen") && !get("_daycareSpa");
        default:
          return true; // Whatever edge cases we have not handled yet, just try to acquire it
      }
    })
    .some((b) => b);
}
