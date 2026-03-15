import { beretBuskingEffects, toEffect, toInt, toItem, write } from "kolmafia";
import { CommunityService, get } from "libram";
import { generateHTML, handleApiRequest, RelayComponent, RelayPage } from "mafia-shared-relay";
import { testAbbreviations, testLimits } from "./lib";
import {
  consumptionResources,
  encounterResources,
  excludedFamiliars,
  farmingResources,
  forbiddenEffects,
  otherResources,
  Resource,
} from "./resources";

interface RelayResource {
  name: string;
  resources: Resource[];
}

const CSTests: CommunityService[] = Array.from(testLimits.entries()).map(([test, _]) => test);

const border: RelayComponent = {
  type: "html",
  data: `<p style="text-align: center"><font size="3">========================================================================================================================</font></p>`,
} as RelayComponent;

function turnLimitsPage(): RelayPage {
  return {
    page: "Test Turn Limits",
    file: "Test Turn Limits",
    components: [
      {
        type: "html",
        data: `Enter the maximum turns we expect to take for each test, beyond which the script will abort. This acts as a safeguard to allow manual intervention should something have gone wrong - e.g. the script being in a weird state from interacting with holiday wanderers.`,
      } as RelayComponent,
      ...Array.from(testLimits.entries()).map(
        ([test, limit]) =>
          ({
            type: "string",
            name: test.statName,
            description: test.name,
            preference: `instant_${testAbbreviations.get(test) ?? ""}TestTurnLimit`,
            default: limit,
          }) as RelayComponent,
      ),
    ],
  };
}

function pullsPage(): RelayPage {
  const testPulls: RelayComponent[] = CSTests.filter((test) => test.name !== "Coil Wire").map(
    (test) =>
      ({
        type: "string",
        name: `${test.statName} Test`,
        description: get(`instant_${testAbbreviations.get(test) ?? ""}TestPulls`, "")
          .split(",")
          .filter((it) => it.length > 0)
          .map((it) => `[${it}] ${toItem(it).name}`)
          .join(", "),
        preference: `instant_${testAbbreviations.get(test) ?? ""}TestPulls`,
        default: "",
      }) as RelayComponent,
  );

  return {
    page: "Pulls",
    file: "Pulls",
    components: [
      {
        type: "html",
        data: `Enter desired pulls by a comma-separated list of item ids - e.g. "5020,10607" (without quotes) to pull both the Tobiko Marble Soda and Yeg's Motel Hand Soap.`,
      } as RelayComponent,
      {
        type: "string",
        name: "Pre-leveling",
        description: get("instant_prePulls", "")
          .split(",")
          .filter((it) => it.length > 0)
          .map((it) => `[${it}] ${toItem(it).name}`)
          .join(", "),
        preference: "instant_prePulls",
        default: "",
      } as RelayComponent,
      {
        type: "string",
        name: "Free Fight",
        description: get("instant_freeFightPulls", "")
          .split(",")
          .filter((it) => it.length > 0)
          .map((it) => `[${it}] ${toItem(it).name}`)
          .join(", "),
        preference: "instant_freeFightPulls",
        default: "",
      } as RelayComponent,
      ...testPulls,
    ],
  };
}

function parseBuskEffects(pref: string): string {
  return get(pref, "")
    .split(",")
    .filter((b) => b.length > 0)
    .map((desiredBusk) => {
      const efs = beretBuskingEffects(
        toInt(desiredBusk.split(":").at(1) ?? "0"),
        toInt(desiredBusk.split(":").at(0) ?? "0") - 1,
      );
      return Object.keys(efs)
        .filter((s) => s !== "none")
        .map((s) => `[${toEffect(s).id}] ${s}`)
        .join(", ");
    })
    .join(", ");
}

function busksPage(): RelayPage {
  const testBusks: RelayComponent[] = CSTests.filter((test) => test.name !== "Coil Wire").map(
    (test) =>
      ({
        type: "string",
        name: `${test.statName} Test`,
        description: parseBuskEffects(`instant_${testAbbreviations.get(test) ?? ""}TestBusks`),
        preference: `instant_${testAbbreviations.get(test) ?? ""}TestBusks`,
        default: "",
      }) as RelayComponent,
  );

  return {
    page: "Busks",
    file: "Busks",
    components: [
      {
        type: "html",
        data: `Enter desired busks by a comma-separated list of <busk number: busk value> - e.g. "4:830,5:980" (without quotes) to busk with 830 power on the 4th busk and 980 power on the 5th busk.`,
      } as RelayComponent,
      {
        type: "string",
        name: "Pre-leveling",
        description: parseBuskEffects("instant_preBusks"),
        preference: "instant_preBusks",
        default: "",
      } as RelayComponent,
      {
        type: "string",
        name: "Free Fight",
        description: parseBuskEffects("instant_freeFightBusks"),
        preference: "instant_freeFightBusks",
        default: "",
      } as RelayComponent,
      ...testBusks,
    ],
  };
}

function miscellanyPage(): RelayPage {
  return {
    page: "Miscellany",
    file: "Miscellany",
    components: [
      {
        type: "string",
        name: "Mother Slime Clan",
        description: "Clan with available Slime Tube to grab Inner Elf from",
        preference: "instant_motherSlimeClan",
        default: "",
      } as RelayComponent,
      {
        type: "string",
        name: "Floundry Clan",
        description: "Clan to grab Floundry equipment from",
        preference: "instant_floundryClan",
        default: "",
      } as RelayComponent,
      {
        type: "boolean",
        name: "Log Preferences",
        description:
          "Write InstantSCCS preferences to your log for debugging or resetting lost preferences in the future",
        preference: "instant_logprefs",
        default: "false",
      } as RelayComponent,
      {
        type: "html",
        data: `<br>Enter familiars to exclude by a comma-separated list of familiar ids - e.g. "183,279" (without quotes) to exclude the galloping grill and melodramedary.`,
      } as RelayComponent,
      {
        type: "string",
        name: "Excluded Familiars",
        description: `${excludedFamiliars.map((fam) => `[${fam.id}] ${fam}`).join(", ")}`,
        preference: "instant_explicitlyExcludedFamiliars",
        default: "",
      } as RelayComponent,
      {
        type: "html",
        data: `<br>Enter effects to exclude by a comma-separated list of effect ids - e.g. "2740,2741,2742" (without quotes) to exclude effects from all 3 legend pizzas. The list of excluded effects are also auto-populated by your resource settings.`,
      } as RelayComponent,
      {
        type: "string",
        name: "Excluded Buffs",
        description: `${forbiddenEffects.map((ef) => `[${ef.id}] ${ef.name}`).join(", ")}`,
        preference: "instant_explicitlyExcludedBuffs",
        default: "",
      } as RelayComponent,
    ],
  };
}

function settingsToHTML(): RelayPage[] {
  const relayResources: RelayResource[] = [
    { name: "Consumption", resources: consumptionResources },
    { name: "Encounter", resources: encounterResources },
    { name: "Farming", resources: farmingResources },
    { name: "Other", resources: otherResources },
  ];

  const pages: RelayPage[] = relayResources.map((relayResource) => ({
    page: `${relayResource.name} Resources`,
    file: relayResource.name,
    components: relayResource.resources.map((resource) => ({
      type: typeof resource.help === "string" ? "boolean" : "string",
      name: resource.pref
        .split("instant_")[1]
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
        .replace(/^./, (str) => str.toUpperCase()),
      description:
        typeof resource.help === "string" ? resource.help : resource.help(get(resource.pref, 0)),
      preference: resource.pref,
      default: typeof resource.help === "string" ? "false" : "0",
    })),
  }));

  pages.push(turnLimitsPage());
  pages.push(pullsPage());
  pages.push(busksPage());
  pages.push(miscellanyPage());

  return pages.map((page) => {
    page.components = [
      {
        type: "html",
        data: `<p style="text-align: center"><font size="4"><b>${page.page}</b></font></p>`,
      } as RelayComponent,
      border,
      ...page.components,
      border,
      {
        type: "html",
        data: `<p style="text-align: center"><font size="2">Some descriptions will be dynamically updated based on their respective preferences upon refreshing the page.</font></p>`,
      } as RelayComponent,
    ];
    return page;
  });
}

export function main() {
  if (handleApiRequest()) return;
  write(generateHTML(settingsToHTML()));
}
