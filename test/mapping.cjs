const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");
const ts = require("typescript");

function load(file, mocks) {
  const code = ts.transpileModule(fs.readFileSync(path.join(__dirname, "..", file), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const exports = {};
  vm.runInNewContext(code, {
    exports,
    require: (name) => {
      assert.ok(name in mocks, `Unexpected import ${name}`);
      return mocks[name];
    },
  });
  return exports;
}
const tag = (strings) => strings[0];
function mapping(events, options = {}) {
  let round = 0,
    choice = 0,
    visits = 0,
    casts = 0,
    combats = 0;
  let active = options.active ?? false;
  let beaten = false;
  const selections = [];
  const api = {
    canAdventure: () => true,
    currentRound: () => round,
    handlingChoice: () => choice > 0,
    lastChoice: () => choice,
    toUrl: () => "adventure.php",
    useSkill: () => {
      casts++;
      active = !options.activationFails;
    },
    visitUrl: () => {
      const event = events[visits++] ?? events[events.length - 1];
      if (event === "map") choice = 1435;
      if (event === "fight") round = 1;
      if (event === "lost") beaten = true;
      if (event === "choice") choice = 999;
    },
    runChoice: (option, params) => {
      selections.push([option, params]);
      if (option === 1) round = 1;
      if (option === 1 || !options.stuckChoice) choice = 0;
    },
  };
  const { mapMonster } = load("src/lib/mapping.ts", {
    kolmafia: api,
    libram: {
      $skill: tag,
      $effect: tag,
      get: () => active,
      have: () => beaten,
      Macro: {
        load: () => ({
          submit: () => {
            combats++;
            if (!options.stuckCombat) round = 0;
          },
        }),
      },
    },
  });
  return {
    run: () => mapMonster("Haiku Dungeon", { id: 123, toString: () => "ninja" }),
    state: () => ({ visits, casts, combats, selections }),
  };
}
test("maps directly without a fight", () => {
  const fixture = mapping(["map"]);
  fixture.run();
  assert.deepEqual(fixture.state(), {
    visits: 1,
    casts: 1,
    combats: 1,
    selections: [[1, "heyscriptswhatsupwinkwink=123"]],
  });
});
test("resolves a holiday fight then maps, preserving the active mapping", () => {
  const fixture = mapping(["fight", "map"], { active: true });
  fixture.run();
  assert.equal(fixture.state().visits, 2);
  assert.equal(fixture.state().combats, 2);
  assert.equal(fixture.state().casts, 0);
});
test("bounds repeated interruptions", () => {
  const fixture = mapping(["fight"]);
  assert.throws(fixture.run, /10 attempts/);
  assert.equal(fixture.state().visits, 10);
});
test("does not retry unfinished combat", () => {
  const fixture = mapping(["fight"], { stuckCombat: true });
  assert.throws(fixture.run, /Unfinished combat/);
  assert.equal(fixture.state().combats, 1);
});
test("stops after a loss", () => assert.throws(mapping(["lost"]).run, /Lost an intervening fight/));
test("stops on an unresolved choice", () =>
  assert.throws(mapping(["choice"], { stuckChoice: true }).run, /Unresolved choice/));
test("does not adventure if activation fails", () => {
  const fixture = mapping(["map"], { activationFails: true });
  assert.throws(fixture.run, /Could not activate/);
  assert.equal(fixture.state().visits, 0);
});
test("only today's holiday wanderers and time cops get the fallback kill", () => {
  class StrictMacro {
    constructor() {
      this.branches = [];
    }
    if_(monster, action) {
      this.branches.push([monster, action]);
      return this;
    }
  }
  const { default: Macro } = load("src/combat.ts", {
    kolmafia: {},
    libram: {
      StrictMacro,
      $skill: tag,
      $stat: tag,
      $monster: tag,
      getTodaysHolidayWanderers: () => ["Padre Cadáver"],
    },
    "./lib": { mainStat: "Muscle" },
  });
  Macro.default = () => "ordinary kill";
  const macro = Macro.mappingWanderers();
  assert.deepEqual(
    Array.from(macro.branches, (branch) => Array.from(branch)),
    [
      ["time cop", "ordinary kill"],
      ["Padre Cadáver", "ordinary kill"],
    ],
  );
  assert.equal(
    macro.branches.some(([monster]) => monster === "amateur ninja"),
    false,
  );
});

test("stops after a single aborted mapped-target macro", () => {
  const fixture = mapping(["map"], { stuckCombat: true });
  assert.throws(fixture.run, /Unfinished combat/);
  assert.equal(fixture.state().combats, 1);
});
