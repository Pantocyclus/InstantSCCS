import {
  cliExecute,
  fullnessLimit,
  inebrietyLimit,
  myAscensions,
  myFullness,
  myInebriety,
  mySpleenUse,
  print,
  spleenLimit,
  turnsPlayed,
} from "kolmafia";
import {
  $effect,
  $effects,
  $item,
  CommunityService,
  get,
  have,
  sumNumbers,
  uneffect,
} from "libram";
import {
  farmingResourceResources,
  freeBanishResources,
  freeFightResources,
  freeKillResources,
  notableSkillResources,
  potentiallyFreeFightResources,
  trackedResource,
} from "../engine/engine";
import { Quest } from "../engine/task";
import { testModifiers } from "../lib";

function printResourceUsage(tResource: trackedResource): void {
  const resource = tResource.resource;
  const name = tResource.name;
  const n = tResource.maxUses;

  const localResourceValue = get(`_instant_${resource}`.replace("__", "_"), "")
    .split(",")
    .join(", ");
  const resourceValue =
    typeof resource === "string"
      ? get(resource)
      : get(`_instant_${resource}_used`.replace("__", "_"), "");
  const resourceValueLength =
    resourceValue.toString() !== "" ? resourceValue.toString().split(",").length : 0;

  if (typeof resourceValue === "boolean" || resourceValue === "true" || resourceValue === "false")
    print(
      `${name}: ${resourceValue || resourceValue === "true" ? n ?? 1 : 0}/${
        n ?? "?"
      } ${localResourceValue}`,
    );
  else if (
    typeof resourceValue === "string" &&
    (isNaN(parseInt(resourceValue)) ||
      resourceValue.includes(",") ||
      parseInt(resourceValue) > (n ?? 1))
  )
    print(
      `${name}: ${resourceValueLength > (n ?? 1) ? n ?? 1 : resourceValueLength}/${
        n ?? "?"
      } ${localResourceValue}`,
    );
  else {
    if (n && !isNaN(parseInt(resourceValue)) && n < 0) {
      print(`${name}: ${-n - parseInt(resourceValue)}/${-n} ${localResourceValue}`);
    } else {
      print(`${name}: ${resourceValue}/${n ?? "?"} ${localResourceValue}`);
    }
  }
}

function logResourceUsage(): void {
  // Track resources used
  // Banishes
  print("");
  print("Resource Tracking", "blue");
  [
    { header: "Banishes Used:", resourceArr: freeBanishResources },
    { header: "Free Kills Used:", resourceArr: freeKillResources },
    { header: "Notable Skills Used:", resourceArr: notableSkillResources },
    { header: "Free Fights Used:", resourceArr: freeFightResources },
    { header: "Potentially Free Fights Used:", resourceArr: potentiallyFreeFightResources },
    { header: "Farming Resources:", resourceArr: farmingResourceResources },
  ].map(({ header, resourceArr }) => {
    print(header);
    resourceArr.map(printResourceUsage);
    print("");
  });

  print(
    `Pulls Used: ${get("_roninStoragePulls")
      .split(",")
      .map((id) => (id.length > 0 ? $item`${id}`.name : ""))
      .join(", ")}`,
  );
  print("");

  // Organs Used
  print("Organs Used:");
  print(
    `Stomach: ${myFullness()}/${fullnessLimit()} ${get("_instant_fullness", "")
      .split(",")
      .join(", ")}`,
  );
  print(
    `Liver: ${myInebriety()}/${inebrietyLimit()} ${get("_instant_inebriety", "")
      .split(",")
      .join(", ")}`,
  );
  print(
    `Spleen: ${mySpleenUse()}/${spleenLimit()} ${get("_instant_spleenUse", "")
      .split(",")
      .join(", ")}`,
  );
  print(
    `Sweat Remaining: ${get("sweat")}/100, Sweat Out Some Booze: ${get("_sweatOutSomeBoozeUsed")}/3`,
  );

  // Adventures Used
  print("");
  print("Test Summary:");

  const tests = Array.from(testModifiers.keys());
  tests.forEach((whichTest) =>
    print(`${whichTest.statName}: ${get(`_CSTest${whichTest.id}`, "?")}`),
  );
  print(
    `Leveling: ${
      turnsPlayed() - sumNumbers(tests.map((whichTest) => get(`_CSTest${whichTest.id}`, 0)))
    }`,
  );
  print(`Adventures used: ${turnsPlayed()}`);

  print("");
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
        print("Emptying Hagnks!", "purple");
        print("Please wait for up to 1 minute...", "blue");
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
