import { cliExecute, myAscensions } from "kolmafia";
import { $effect, $effects, CommunityService, get, have, uneffect } from "libram";
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
        print("\nResource Tracking", "blue");
        print("Banishes Used:");
        print(`Feel Hatred: ${get("_feelHatredUsed")}/3`);
        print(`Reflex Hammer: ${get("_reflexHammerUsed")}/3`);
        print(`Latte Refills: ${get("_latteRefillsUsed")}/3`);
        print(`KGB Tranquilizers: ${get("_kgbTranquilizerDartUses")}/3`);
        print(`Snokebomb: ${get("_snokebombUsed")}/3`);

        // Free Kills
        print("\nFree Kills Used:");
        print(`Chest X-Ray: ${get("_chestXRayUsed")}/3`);
        print(`Shattering Punch: ${get("_shatteringPunchUsed")}/3`);
        print(`Gingerbread Mob Hit: ${get("_gingerbreadMobHitUsed") ? 1 : 0} / 1`);
        // Spit Jurassic Acid is reusable (but not currently used)

        // Notable Skills
        print("\nNotable Skills Used:");
        print(`Saber Force: ${get("_saberForceUses")}/5`);
        print(`Map the Monsters: ${get("_monstersMapped")}/3`);
        print(`Feel Envy: ${get("_feelEnvyUsed")}/3`);
        print(`Digitize: ${get("_sourceTerminalDigitizeUses")}/3`);
        print(`Portscan: ${get("_sourceTerminalPortscanUses")}/3`);
        print(`Duplicate: ${get("_sourceTerminalDuplicateUses")}/1`);

        // Free Fights
        print("\nFree Fights Used:");
        print(`Snojo: ${get("_snojoFreeFights")}/10`);
        print(`NEP: ${get("_neverendingPartyFreeTurns")}/10`);
        print(`Witchess Fights: ${get("_witchessFights")}/5`);
        print(`DMT: ${get("_machineTunnelsAdv")}/5`);
        print(`LOV Tunnel: ${get("_loveTunnelUsed") ? 3 : 0}/3`);
        print(`Vote Monsters: ${get("_voteFreeFights")}/3`);
        print(`God Lobster: ${get("_godLobsterFights")}/3`);
        print(`Oliver's Place: ${get("_speakeasyFreeFights", 0)}/3`);
        print(`Eldritch Tentacle: ${get("_eldritchHorrorEvoked")}/1`);
        print(`Sausage Goblins: ${get("_sausageFights")}/?`);

        // Potentially Free Fights
        print("\nPotentially Free Fights:");
        print(`Backup Camera: ${get("_backUpUses")}/11`);
        print(`Locket uses: ${get("_locketMonstersFought")}/3`);
        print(`Fax uses: ${get("photocopyUsed") ? 1 : 0}/1`);
        print(`Chateau Painting: ${get("_chateauMonsterFought") ? 1 : 0}/1`);

        // Resources That Compete With Farming
        print("\nFarming Resources:");
        print(`Powerful Glove Charges: ${100 - get("_powerfulGloveBatteryPowerUsed")}/100`);
        print(`KGB clicks: ${get("_kgbClicksUsed")}/22`);
        print(`Deck Summons: ${get("_deckCardsDrawn")}/15`);
        print(`Macrometeorites: ${get("_macrometeoriteUses")}/10`);
        print(`Batteries: ${7 - availableAmount($item`battery (AAA)`)}/7`);
        print(`Tome Summons: ${get("tomeSummons")}/3`);
        print(`Wishes: ${get("_genieWishesUsed")}/3`);
        print(`Tea Tree: ${get("_pottedTeaTreeUsed") ? 1 : 0}/1`);
        print(`Favorite Bird: ${get("_favoriteBirdVisited") ? 1 : 0}/1`);
        print(`Zatara Consult: ${get("_clanFortuneBuffUsed") ? 1 : 0}/1`);
        print(`Floundry: ${get("_floundryItemCreated") ? 1 : 0}/1`);
        print(
          `GingerbreadCity Noon: ${
            get("_gingerbreadCityTurns") >= 5 + (get("_gingerbreadClockAdvanced") ? 5 : 0)
          } / 1`
        );
        // Can't track worksheds well
        // Can't track gardens well

        // Organ Use
        print("\nOrgan Use:");
        print(`Stomach: ${myFullness()}/${fullnessLimit()}`);
        print(`Liver: ${myInebriety()}/${inebrietyLimit()}`);
        print(`Spleen: ${mySpleenUse()}/${spleenLimit()}`);
        print(
          `Sweat: ${get("sweat")}/100, Sweat Out Some Booze: ${get("_sweatOutSomeBoozeUsed")}/3`
        );

        // Adventures Used
        print(`\nAdventures used: ${turnsPlayed()}`);
        debug("\nEmptying Hagnks!", "purple");
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
