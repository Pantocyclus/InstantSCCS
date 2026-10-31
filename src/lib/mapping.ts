import {
  canAdventure,
  currentRound,
  handlingChoice,
  lastChoice,
  Location,
  Monster,
  runChoice,
  toUrl,
  useSkill,
  visitUrl,
} from "kolmafia";
import { $effect, $skill, get, have, Macro } from "libram";

function finishMappingCombat(monster: Monster): void {
  if (currentRound() > 0) {
    // Submit once directly: runCombat can repeatedly execute an aborted CCS macro.
    Macro.load().submit();
    if (currentRound() > 0) throw new Error(`Unfinished combat while mapping ${monster}.`);
  }
  if (have($effect`Beaten Up`))
    throw new Error(`Lost an intervening fight while mapping ${monster}.`);
}

/** Map a monster, allowing a bounded number of intervening fights or zone introductions. */
export function mapMonster(location: Location, monster: Monster): void {
  if (!canAdventure(location)) throw new Error(`Cannot map ${monster} in ${location}.`);
  if (!get("mappingMonsters")) useSkill($skill`Map the Monsters`);
  if (!get("mappingMonsters")) throw new Error("Could not activate Map the Monsters.");

  for (let attempts = 0; attempts < 10; attempts++) {
    visitUrl(toUrl(location));
    if (handlingChoice() && lastChoice() === 1435) {
      runChoice(1, `heyscriptswhatsupwinkwink=${monster.id}`);
      finishMappingCombat(monster);
      return;
    }
    finishMappingCombat(monster);
    if (handlingChoice()) {
      runChoice(-1, false);
      if (handlingChoice()) throw new Error(`Unresolved choice while mapping ${monster}.`);
    }
    if (!get("mappingMonsters")) throw new Error(`Mapping ended before finding ${monster}.`);
  }
  throw new Error(`Too many interruptions while mapping ${monster}; stopping after 10 attempts.`);
}
