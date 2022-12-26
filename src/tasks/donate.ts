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
import { trackedPreferences } from "../engine/engine";
import { Quest } from "../engine/task";
import { CommunityServiceTests, debug, testNames } from "../lib";

function logPrefUsage(s: string, n?: number): void {
  const localPref = get(`_instant${s}`, "").split(",").join(", ");
  const pref = get(s);
  const prefLength = pref.toString().includes(",") ? pref.toString().split(",").length : 0;
  if (typeof pref === "boolean" || pref === "true" || pref === "false")
    debug(`${trackedPreferences.get(s) ?? s}: ${pref ? n ?? 1 : 0}/${n ?? "?"} ${localPref}`);
  else if (
    typeof pref === "string" &&
    (isNaN(parseInt(pref)) || pref.includes(",") || parseInt(pref) > (n ?? 1))
  )
    debug(
      `${trackedPreferences.get(s) ?? s}: ${prefLength > (n ?? 1) ? n ?? 1 : prefLength}/${
        n ?? "?"
      } ${localPref}`
    );
  else debug(`${trackedPreferences.get(s) ?? s}: ${pref}/${n ?? "?"} ${localPref}`);
}

function logResourceUsage(): void {
  // Track resources used
  // Banishes
  debug("");
  debug("Resource Tracking", "blue");
  debug("Banishes Used:");
  logPrefUsage("_feelHatredUsed", 3);
  logPrefUsage("_reflexHammerUsed", 3);
  logPrefUsage("_latteRefillsUsed", 3);
  logPrefUsage("_kgbTranquilizerDartUses", 3);
  logPrefUsage("_snokebombUsed", 3);

  // Free Kills
  debug("");
  debug("Free Kills Used:");
  logPrefUsage("_chestXRayUsed", 3);
  logPrefUsage("_shatteringPunchUsed", 3);
  logPrefUsage("_gingerbreadMobHitUsed", 1);
  logPrefUsage("_missileLauncherUsed", 1);
  logPrefUsage("_CSParkaYRUsed");
  // Spit Jurassic Acid is reusable (but not currently tracked)

  // Notable Skills
  debug("");
  debug("Notable Skills Used:");
  logPrefUsage("_saberForceUses", 5);
  logPrefUsage("_monstersMapped", 3);
  logPrefUsage("_feelEnvyUsed", 3);
  logPrefUsage("_sourceTerminalEnhanceUses", 3);
  logPrefUsage("_sourceTerminalDigitizeUses", 3);
  logPrefUsage("_sourceTerminalPortscanUses", 3);
  logPrefUsage("_sourceTerminalDuplicateUses", 1);

  // Free Fights
  debug("");
  debug("Free Fights Used:");
  logPrefUsage("_snojoFreeFights", 10);
  logPrefUsage("_neverendingPartyFreeTurns", 10);
  logPrefUsage("_witchessFights", 5);
  logPrefUsage("_machineTunnelsAdv", 5);
  logPrefUsage("_loveTunnelUsed", 3);
  logPrefUsage("_voteFreeFights", 3);
  logPrefUsage("_godLobsterFights", 3);
  logPrefUsage("_speakeasyFreeFights", 3);
  logPrefUsage("_eldritchHorrorEvoked", 1);
  logPrefUsage("_sausageFights");

  // Potentially Free Fights
  debug("");
  debug("Potentially Free Fights Used:");
  logPrefUsage("_backUpUses", 11);
  logPrefUsage("_locketMonstersFought", 3);
  logPrefUsage("_photocopyUsed", 1);
  logPrefUsage("_chateauMonsterFought", 1);

  // Resources That Compete With Farming
  debug("");
  debug("Farming Resources:");
  logPrefUsage("_powerfulGloveBatteryPowerUsed", 100);
  logPrefUsage("_kgbClicksUsed", 22);
  logPrefUsage("_deckCardsDrawn", 15);
  logPrefUsage("_macrometeoriteUses", 10);
  logPrefUsage("_AAABatteriesUsed", 7);
  logPrefUsage("_coldMedicineConsults", 5); // Assumes workshed is CMC
  logPrefUsage("tomeSummons", 3);
  logPrefUsage("_sproutsUsed", 3); // Assumes garden is peppermint
  logPrefUsage("_genieWishesUsed", 3);
  logPrefUsage("_pottedTeaTreeUsed", 3);
  logPrefUsage("_favoriteBirdVisited", 1);
  logPrefUsage("_clanFortuneBuffUsed", 1);
  logPrefUsage("_floundryItemCreated", 1);
  logPrefUsage("_gingerbreadCityNoonCompleted", 1);
  logPrefUsage("_gingerbreadCityMidnightCompleted", 1);
  logPrefUsage("_pantogramModifier", 1);
  logPrefUsage("_cargoPocketEmptied", 1);
  logPrefUsage("_freePillKeeperUsed", 1);

  // Organs Used
  debug("");
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
