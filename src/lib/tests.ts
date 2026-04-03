import { myBasestat, myBuffedstat, myMaxhp, print, toStat } from "kolmafia";
import { $effect, $item, $stat, CommunityService, get, have, set, withProperty } from "libram";
import { printModtrace } from "libram/dist/modifier";

export const testModifiers: Map<CommunityService, string[]> = new Map([
  [CommunityService.HP, ["Maximum HP", "Maximum HP Percent", "Muscle", "Muscle Percent"]],
  [CommunityService.Muscle, ["Muscle", "Muscle Percent"]],
  [CommunityService.Mysticality, ["Mysticality", "Mysticality Percent"]],
  [CommunityService.Moxie, ["Moxie", "Moxie Percent"]],
  [CommunityService.FamiliarWeight, ["Familiar Weight"]],
  [CommunityService.WeaponDamage, ["Weapon Damage", "Weapon Damage Percent"]],
  [CommunityService.SpellDamage, ["Spell Damage", "Spell Damage Percent"]],
  [CommunityService.Noncombat, ["Combat Rate"]],
  [CommunityService.BoozeDrop, ["Item Drop", "Booze Drop"]],
  [CommunityService.HotRes, ["Hot Resistance"]],
  [CommunityService.CoilWire, []],
]);

export const testAbbreviations: Map<CommunityService, string> = new Map([
  [CommunityService.HP, "hp"],
  [CommunityService.Muscle, "mus"],
  [CommunityService.Mysticality, "myst"],
  [CommunityService.Moxie, "mox"],
  [CommunityService.FamiliarWeight, "fam"],
  [CommunityService.WeaponDamage, "weapon"],
  [CommunityService.SpellDamage, "spell"],
  [CommunityService.Noncombat, "com"],
  [CommunityService.BoozeDrop, "booze"],
  [CommunityService.HotRes, "hot"],
  [CommunityService.CoilWire, "coil"],
]);

export const testLimits: Map<CommunityService, number> = new Map([
  [CommunityService.HP, 1],
  [CommunityService.Muscle, 2],
  [CommunityService.Mysticality, 1],
  [CommunityService.Moxie, 5],
  [CommunityService.FamiliarWeight, 50],
  [CommunityService.WeaponDamage, 35],
  [CommunityService.SpellDamage, 55],
  [CommunityService.Noncombat, 12],
  [CommunityService.BoozeDrop, 30],
  [CommunityService.HotRes, 35],
  [CommunityService.CoilWire, 60],
]);

function logRelevantStats(whichTest: CommunityService): void {
  if (
    [CommunityService.Muscle, CommunityService.Mysticality, CommunityService.Moxie].includes(
      whichTest,
    )
  ) {
    const testStat = toStat(whichTest.statName);
    const statString = testStat.toString().slice(0, 3);
    print(
      `Base ${statString}: ${myBasestat(testStat)}; Buffed ${statString}: ${myBuffedstat(testStat)}`,
    );
  } else if (whichTest === CommunityService.HP) {
    print(`Buffed Mus: ${myBuffedstat($stat`Muscle`)}; HP: ${myMaxhp()};`);
  }
}

function logTestSetup(whichTest: CommunityService): void {
  const testTurns = whichTest.actualCost();
  printModtrace(testModifiers.get(whichTest) ?? []);
  logRelevantStats(whichTest);
  print(
    `${whichTest.statName} ${
      whichTest !== CommunityService.CoilWire ? "Test" : ""
    } takes ${testTurns} adventure${testTurns === 1 ? "" : "s"} (predicted: ${
      whichTest.prediction
    }).`,
    "blue",
  );
  set(
    `_CSTest${whichTest.id}`,
    testTurns + (have($effect`Simmering`) && !have($item`April Shower Thoughts shield`) ? 1 : 0),
  );
}

export function runTest(csTest: CommunityService): void {
  const csTestLimitPref = testAbbreviations.get(csTest) ?? "";
  const csTestDefaultLimit = testLimits.get(csTest) ?? 60;

  const maxTurns = get(`instant_${csTestLimitPref}TestTurnLimit`, csTestDefaultLimit);
  const testTurns = csTest.actualCost();

  if (testTurns > maxTurns) {
    print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
    print("Either there was a bug, or you are under-prepared for this test", "red");
    print("Manually complete the test if you think this is fine.", "red");
    print(
      `You may also increase the turn limit by typing 'set instant_${csTestLimitPref}TestTurnLimit=<new limit>'`,
      "red",
    );
  }

  const result = withProperty("_mummeryMods", "", () =>
    csTest.run(() => logTestSetup(csTest), maxTurns),
  );
  if (result.includes("completed") && !get("csServicesPerformed").includes(csTest.name)) {
    print(`Detected that ${csTest.name} was incorrectly marked as incomplete!`, "red");
    print(`Setting ${csTest.name} as completed!`, "blue");
    set("csServicesPerformed", get("csServicesPerformed").split(",").concat(csTest.name).join(","));
  }
}
