import { CombatStrategy } from "grimoire-kolmafia";
import {
  buy,
  cliExecute,
  create,
  drink,
  Effect,
  equip,
  inebrietyLimit,
  myInebriety,
  print,
  use,
  useFamiliar,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $monster,
  $skill,
  $slot,
  CombatLoversLocket,
  CommunityService,
  get,
  have,
  uneffect,
} from "libram";
import { Quest } from "../engine/task";
import { advCost, CommunityServiceTests, logTestSetup, tryAcquiringEffect } from "../lib";
import Macro from "../combat";
import { powerlevelingLocation } from "./leveling";

export const HotResQuest: Quest = {
  name: "Hot Res",
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [
    {
      name: "Reminisce Factory Worker (female)",
      prepare: (): void => {
        if (!have($item`yellow rocket`) && !have($effect`Everything Looks Yellow`))
          buy($item`yellow rocket`, 1);
        if (have($skill`Double-Fisted Skull Smashing`) && have($item`industrial fire extinguisher`))
          equip($slot`offhand`, $item`industrial fire extinguisher`);
      },
      completed: () =>
        CombatLoversLocket.monstersReminisced().includes($monster`factory worker (female)`) ||
        !CombatLoversLocket.availableLocketMonsters().includes($monster`factory worker (female)`) ||
        get("instant_saveLocketFactoryWorker", false),
      do: () => CombatLoversLocket.reminisce($monster`factory worker (female)`),
      outfit: {
        back: $item`vampyric cloake`,
        weapon: $item`Fourth of May Cosplay Saber`,
        familiar: $familiar`Cookbookbat`,
        modifier: "Item Drop",
      },
      choices: { 1387: 3 },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Become a Cloud of Mist`)
          .trySkill($skill`Fire Extinguisher: Foam Yourself`)
          .trySkill($skill`Use the Force`)
          .trySkill($skill`Shocking Lick`)
          .tryItem($item`yellow rocket`)
          .default()
      ),
      limit: { tries: 1 },
    },
    {
      name: "Grab Foam Suit",
      completed: () =>
        have($effect`Fireproof Foam Suit`) ||
        !have($item`Fourth of May Cosplay Saber`) ||
        get("_saberForceUses") >= 5 ||
        !have($item`industrial fire extinguisher`) ||
        !have($skill`Double-Fisted Skull Smashing`),
      do: () => powerlevelingLocation(),
      outfit: {
        back: $item`vampyric cloake`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`industrial fire extinguisher`,
        familiar: $familiar`Cookbookbat`,
        modifier: "Item Drop",
      },
      choices: {
        1094: 5,
        1115: 6,
        1322: 2,
        1324: 5,
        1387: 3,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`Become a Cloud of Mist`)
          .skill($skill`Fire Extinguisher: Foam Yourself`)
          .skill($skill`Use the Force`)
          .abort()
      ),
      limit: { tries: 1 },
    },
    {
      name: "Drink Boris Beer",
      completed: () =>
        have($effect`Beery Cool`) ||
        ((!have($item`bowl of cottage cheese`) || !have($item`Yeast of Boris`)) &&
          !have($item`Boris's beer`)) ||
        myInebriety() >= inebrietyLimit() ||
        get("instant_saveBorisBeer", false),
      do: (): void => {
        tryAcquiringEffect($effect`Ode to Booze`);
        if (have($item`Yeast of Boris`) && have($item`bowl of cottage cheese`))
          create($item`Boris's beer`, 1);
        if (have($item`Boris's beer`)) drink($item`Boris's beer`, 1);
        uneffect($effect`Ode to Booze`);
      },
      limit: { tries: 1 },
    },
    {
      name: "Horsery",
      completed: () => get("_horsery") === "pale horse" || !get("horseryAvailable"),
      do: () => cliExecute("horsery pale"),
      limit: { tries: 1 },
    },
    {
      name: "Test",
      prepare: (): void => {
        cliExecute("retrocape vampire hold");
        if (get("parkaMode") !== "pterodactyl") cliExecute("parka pterodactyl");
        if (
          get("_kgbClicksUsed") < 22 &&
          have($item`Kremlin's Greatest Briefcase`) &&
          !get("instant_saveKGBClicks", false)
        )
          cliExecute("briefcase e hot");
        if (
          have($skill`Summon Clip Art`) &&
          !get("instant_saveClipArt", false) &&
          have($familiar`Exotic Parrot`) &&
          !have($item`cracker`)
        ) {
          if (!have($item`box of Familiar Jacks`)) create($item`box of Familiar Jacks`, 1);
          useFamiliar($familiar`Exotic Parrot`);
          use($item`box of Familiar Jacks`, 1);
        }
        const usefulEffects: Effect[] = [
          $effect`Amazing`,
          $effect`Astral Shell`,
          $effect`Elemental Saucesphere`,
          $effect`Feeling Peaceful`,
          $effect`Hot-Headed`,
          $effect`Rainbowolin`,

          // Famwt Buffs
          $effect`Blood Bond`,
          $effect`Empathy`,
          $effect`Leash of Linguini`,
          $effect`Robot Friends`,
        ];
        usefulEffects.forEach((ef) => tryAcquiringEffect(ef, true));
        cliExecute("maximize hot res");
      },
      completed: () => CommunityService.HotRes.isDone(),
      do: (): void => {
        const maxTurns = get("instant_hotTestTurnLimit", 35);
        const testTurns = advCost(CommunityServiceTests.HOTTEST);
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
          print(
            "You may also increase the turn limit by typing 'set instant_hotTestTurnLimit=<new limit>'",
            "red"
          );
        }
        CommunityService.HotRes.run(() => logTestSetup(CommunityServiceTests.HOTTEST), maxTurns);
      },
      outfit: {
        modifier: "hot res",
        familiar: $familiar`Exotic Parrot`,
      },
      limit: { tries: 1 },
    },
  ],
};
