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
import { $effect, $item, get, have, set, sum } from "libram";
import { forbiddenEffects } from "./resources";

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

// TODO: Replace with the libram function after it has been merged
function printModtrace(
  inputModifiers: string | string[], // the user's list of modifiers to look up
  baseModifier?: string,
  componentColor = "purple",
  totalColor = "blue"
): void {
  if (typeof inputModifiers === "string") return printModtrace([inputModifiers], inputModifiers);
  else if (inputModifiers.length === 0) return;
  else if (!baseModifier) {
    return inputModifiers
      .filter((mod1) => !inputModifiers.some((mod2) => mod2 !== mod1 && mod1.includes(mod2)))
      .forEach((baseMod) =>
        printModtrace(
          inputModifiers.filter((mod) => mod.includes(baseMod)),
          baseMod
        )
      );
  }

  const htmlOutput = cliExecuteOutput(`modtrace ${baseModifier}`);
  // The list of matched modifiers that mafia returns
  const modtraceModifiers = Array.from(htmlOutput.match(RegExp(/(>)(.*?)(<\/td>)/g)) ?? [])
    .map((s) => s.slice(1, -5))
    .slice(2);

  if (
    !modtraceModifiers.some((modifier) => modifier.toLowerCase() === baseModifier.toLowerCase())
  ) {
    return print(
      `Could not find exact string match of ${baseModifier} in ${inputModifiers.toString()}`,
      "red"
    );
  }

  const initialVal =
    baseModifier.toLowerCase() === "familiar weight"
      ? (() => {
          const wt = familiarWeight(myFamiliar());
          print(`[Familiar Weight] Base weight (${wt})`);
          return wt;
        })()
      : 0;
  const modifierVals = new Map(modtraceModifiers.map((modifier) => [modifier, initialVal])); // Maps modifier name to its value
  const lowerCaseModifiers = inputModifiers.map((modifier) => modifier.toLowerCase());

  Array.from(htmlOutput.match(RegExp(/<tr>(.*?)<\/tr>/g)) ?? [])
    .slice(1)
    .map((s) => s.slice(4, -5))
    .forEach((s) => {
      const rowArr = Array.from(
        s.replace(RegExp(/><\/td>/g), ">0</td>").match(RegExp(/(>)(.*?)(<\/td>)/g)) ?? []
      ).map((s) => s.slice(1, -5));
      const rowName = rowArr[1];
      rowArr
        .slice(2)
        .filter((e, idx) => idx % 2 === 0)
        .forEach((e, idx) => {
          const val = parseFloat(e);
          modifierVals.set(
            modtraceModifiers[idx],
            (modifierVals.get(modtraceModifiers[idx]) ?? 0) + val
          );
          if (val !== 0 && lowerCaseModifiers.includes(modtraceModifiers[idx].toLowerCase())) {
            print(`[${modtraceModifiers[idx]}] ${rowName} (${val.toFixed(1)})`);
          }
        });
    });

  const total = sum(modtraceModifiers, (modifier) => {
    if (lowerCaseModifiers.includes(modifier.toLowerCase())) {
      let modVal = modifierVals.get(modifier) ?? 0;
      if (have($effect`Bow-Legged Swagger`) && modifier.includes("Weapon Damage")) {
        print(`[${modifier}] Bow-Legged Swagger (${modVal.toFixed(1)})`);
        modVal *= 2;
      }
      print(`${modifier} => ${modVal.toFixed(1)}`, componentColor);
      return modVal;
    } else return 0;
  });

  print(`Total ${baseModifier}: ${total.toFixed(1)}`, totalColor);
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
  if (have(ef)) return;
  // If we already have the effect, we're done
  else if (forbiddenEffects.includes(ef)) return; // Don't acquire the effect if we are saving it

  if (ef === $effect`Sparkling Consciousness`) {
    // This has no ef.default for some reason
    if (!get("_fireworkUsed") && retrieveItem($item`sparkler`, 1)) use($item`sparkler`, 1);
    return;
  }
  if (!ef.default) return; // No way to acquire?

  if (ef === $effect`Ode to Booze`) restoreMp(60);
  if (tryRegardless || canAcquireEffect(ef)) cliExecute(ef.default.replace(/cast 1 /g, "cast "));
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
