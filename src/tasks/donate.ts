import {
  cliExecute,
  fullnessLimit,
  inebrietyLimit,
  myAscensions,
  myFullness,
  myInebriety,
  mySpleenUse,
  spleenLimit,
  turnsPlayed,
} from "kolmafia";
import { $effect, $effects, CommunityService, get, have, uneffect } from "libram";
import {
  farmingResourcePrefs,
  freeBanishPrefs,
  freeFightPrefs,
  freeKillPrefs,
  notableSkillPrefs,
  potentiallyFreeFightPrefs,
  trackedPref,
} from "../engine/engine";
import { Quest } from "../engine/task";
import { CommunityServiceTests, debug, testNames } from "../lib";

function logPrefUsage(tPref: trackedPref): void {
  const pref = tPref.pref;
  const name = tPref.name;
  const n = tPref.maxUses;

  const localPrefValue = get(`_instant${pref}`, "").split(",").join(", ");
  const prefValue = get(pref);
  const prefValueLength = prefValue.toString() !== "" ? prefValue.toString().split(",").length : 0;

  if (typeof prefValue === "boolean" || prefValue === "true" || prefValue === "false")
    debug(
      `${name}: ${prefValue || prefValue === "true" ? n ?? 1 : 0}/${n ?? "?"} ${localPrefValue}`
    );
  else if (
    typeof prefValue === "string" &&
    (isNaN(parseInt(prefValue)) || prefValue.includes(",") || parseInt(prefValue) > (n ?? 1))
  )
    debug(
      `${name}: ${prefValueLength > (n ?? 1) ? n ?? 1 : prefValueLength}/${
        n ?? "?"
      } ${localPrefValue}`
    );
  else debug(`${name}: ${prefValue}/${n ?? "?"} ${localPrefValue}`);
}

function logResourceUsage(): void {
  // Track resources used
  // Banishes
  debug("");
  debug("Resource Tracking", "blue");
  [
    { header: "Banishes Used:", prefArr: freeBanishPrefs },
    { header: "Free Kills Used:", prefArr: freeKillPrefs },
    { header: "Notable Skills Used:", prefArr: notableSkillPrefs },
    { header: "Free Fights Used:", prefArr: freeFightPrefs },
    { header: "Potentially Free Fights Used:", prefArr: potentiallyFreeFightPrefs },
    { header: "Farming Resources:", prefArr: farmingResourcePrefs },
  ].map(({ header, prefArr }) => {
    debug(header);
    prefArr.map(logPrefUsage);
    debug("");
  });

  // Organs Used
  debug("Organs Used:");
  debug(`Stomach: ${myFullness()}/${fullnessLimit()}`);
  debug(`Liver: ${myInebriety()}/${inebrietyLimit()}`);
  debug(`Spleen: ${mySpleenUse()}/${spleenLimit()}`);
  debug(
    `Sweat Remaining: ${get("sweat")}/100, Sweat Out Some Booze: ${get("_sweatOutSomeBoozeUsed")}/3`
  );

  // Adventures Used
  debug("");
  debug("Test Summary:");
  for (const test of Array<number>(
    CommunityServiceTests.COILTEST,
    CommunityServiceTests.HOTTEST,
    CommunityServiceTests.HPTEST,
    CommunityServiceTests.MUSTEST,
    CommunityServiceTests.MYSTTEST,
    CommunityServiceTests.MOXTEST,
    CommunityServiceTests.COMTEST,
    CommunityServiceTests.WPNTEST,
    CommunityServiceTests.SPELLTEST,
    CommunityServiceTests.FAMTEST,
    CommunityServiceTests.ITEMTEST
  ))
    debug(`${testNames.get(test) ?? "Unknown Test"}: ${get(`_CSTest${test}`, "?")}`);
  debug(`Adventures used: ${turnsPlayed()}`);

  debug("");
}

export const DonateQuest: Quest = {
  name: "Donate",
  tasks: [
    {
      name: "Test",
      completed: () => get("kingLiberated"),
      do: () => CommunityService.donate(),
      limit: { tries: 1 },
    },
    {
      name: "Empty Hagnks",
      completed: () => get("lastEmptiedStorage") === myAscensions(),
      do: (): void => {
        logResourceUsage();
        debug("Emptying Hagnks!", "purple");
        debug("Please wait for up to 1 minute...", "blue");
        cliExecute("hagnk all");
      },
      limit: { tries: 1 },
    },
    {
      name: "Shrug Negative Effects",
      completed: () => !have($effect`Feeling Lost`) && !have($effect`Cowrruption`),
      do: (): void => {
        for (const ef of $effects`Feeling Lost, Cowrruption, Cold Hearted`) {
          if (have(ef)) uneffect(ef);
        }
      },
      limit: { tries: 1 },
    },
  ],
};
