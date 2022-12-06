import {
  cliExecute,
  fullnessLimit,
  inebrietyLimit,
  itemAmount,
  myAscensions,
  myFullness,
  myInebriety,
  mySpleenUse,
  spleenLimit,
  turnsPlayed,
} from "kolmafia";
import { $effect, $effects, $item, CommunityService, get, have, uneffect } from "libram";
import { Quest } from "../engine/task";
import { debug } from "../lib";

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
        // Track resources used
        // Banishes
        debug("");
        debug("Resource Tracking", "blue");
        debug("Banishes Used:");
        debug(`Feel Hatred: ${get("_feelHatredUsed")}/3`);
        debug(`Reflex Hammer: ${get("_reflexHammerUsed")}/3`);
        debug(`Latte Refills: ${get("_latteRefillsUsed")}/3`);
        debug(`KGB Tranquilizers: ${get("_kgbTranquilizerDartUses")}/3`);
        debug(`Snokebomb: ${get("_snokebombUsed")}/3`);

        // Free Kills
        debug("");
        debug("Free Kills Used:");
        debug(`Chest X-Ray: ${get("_chestXRayUsed")}/3`);
        debug(`Shattering Punch: ${get("_shatteringPunchUsed")}/3`);
        debug(`Gingerbread Mob Hit: ${get("_gingerbreadMobHitUsed") ? 1 : 0}/1`);
        // Spit Jurassic Acid is reusable (but not currently used)

        // Notable Skills
        debug("");
        debug("Notable Skills Used:");
        debug(`Saber Force: ${get("_saberForceUses")}/5`);
        debug(`Map the Monsters: ${get("_monstersMapped")}/3`);
        debug(`Feel Envy: ${get("_feelEnvyUsed")}/3`);
        debug(`Digitize: ${get("_sourceTerminalDigitizeUses")}/3`);
        debug(`Portscan: ${get("_sourceTerminalPortscanUses")}/3`);
        debug(`Duplicate: ${get("_sourceTerminalDuplicateUses")}/1`);

        // Free Fights
        debug("");
        debug("Free Fights Used:");
        debug(`Snojo: ${get("_snojoFreeFights")}/10`);
        debug(`NEP: ${get("_neverendingPartyFreeTurns")}/10`);
        debug(`Witchess Fights: ${get("_witchessFights")}/5`);
        debug(`DMT: ${get("_machineTunnelsAdv")}/5`);
        debug(`LOV Tunnel: ${get("_loveTunnelUsed") ? 3 : 0}/3`);
        debug(`Vote Monsters: ${get("_voteFreeFights")}/3`);
        debug(`God Lobster: ${get("_godLobsterFights")}/3`);
        debug(`Oliver's Place: ${get("_speakeasyFreeFights", 0)}/3`);
        debug(`Eldritch Tentacle: ${get("_eldritchHorrorEvoked") ? 1 : 0}/1`);
        debug(`Sausage Goblins: ${get("_sausageFights")}/?`);

        // Potentially Free Fights
        debug("");
        debug("Potentially Free Fights Used:");
        debug(`Backup Camera: ${get("_backUpUses")}/11`);
        debug(`Locket uses: ${get("_locketMonstersFought").split(",").length}/3`);
        debug(`Fax uses: ${get("photocopyUsed") ? 1 : 0}/1`);
        debug(`Chateau Painting: ${get("_chateauMonsterFought") ? 1 : 0}/1`);

        // Resources That Compete With Farming
        debug("");
        debug("Farming Resources:");
        debug(`Powerful Glove Charges: ${get("_powerfulGloveBatteryPowerUsed")}/100`);
        debug(`KGB clicks: ${get("_kgbClicksUsed")}/22`);
        debug(`Deck Summons: ${get("_deckCardsDrawn")}/15`);
        debug(`Macrometeorites: ${get("_macrometeoriteUses")}/10`);
        debug(`Batteries: ${7 - itemAmount($item`battery (AAA)`)}/7`);
        debug(`CMC Uses: ${get("_coldMedicineConsults")}/5`); // Assumes workshed is CMC
        debug(`Tome Summons: ${get("tomeSummons")}/3`);
        debug(`Peppermint Sprouts: ${3 - itemAmount($item`peppermint sprout`)}/3`); // Assumes garden is peppermint
        debug(`Wishes: ${get("_genieWishesUsed")}/3`);
        debug(`Tea Tree: ${get("_pottedTeaTreeUsed") ? 1 : 0}/1`);
        debug(`Favorite Bird: ${get("_favoriteBirdVisited") ? 1 : 0}/1`);
        debug(`Zatara Consult: ${get("_clanFortuneBuffUsed") ? 1 : 0}/1`);
        debug(`Floundry: ${get("_floundryItemCreated") ? 1 : 0}/1`);
        debug(
          `GingerbreadCity Noon: ${
            get("_gingerbreadCityTurns") >= 5 + (get("_gingerbreadClockAdvanced") ? 0 : 5) ? 1 : 0
          }/1`
        );
        debug(`Pantogram: ${get("_pantogramModifier").length > 0 ? 1 : 0}/1`);
        debug(`Cargo Shorts: ${get("_cargoPocketEmptied") ? 1 : 0}/1`);
        debug(`Pillkeeper: ${get("_freePillKeeperUsed") ? 1 : 0}/1`);

        // Organs Used
        debug("");
        debug("Organs Used:");
        debug(`Stomach: ${myFullness()}/${fullnessLimit()}`);
        debug(`Liver: ${myInebriety()}/${inebrietyLimit()}`);
        debug(`Spleen: ${mySpleenUse()}/${spleenLimit()}`);
        debug(
          `Sweat Remaining: ${get("sweat")}/100, Sweat Out Some Booze: ${get(
            "_sweatOutSomeBoozeUsed"
          )}/3`
        );

        // Adventures Used
        debug("");
        debug(`Adventures used: ${turnsPlayed()}`);

        debug("");
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
