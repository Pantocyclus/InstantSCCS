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

export const HotResQuest: Quest = {
  name: "Hot Res",
  completed: () => CommunityService.HotRes.isDone(),
  tasks: [
    {
      name: "Reminisce Factory Worker (female)",
      prepare: (): void => {
        if (!have($item`yellow rocket`) && !have($effect`Everything Looks Yellow`))
          buy($item`yellow rocket`, 1);
        if (have($item`Fourth of May Cosplay Saber`))
          equip($slot`weapon`, $item`Fourth of May Cosplay Saber`);
        if (have($item`industrial fire extinguisher`))
          equip($slot`offhand`, $item`industrial fire extinguisher`);
        if (have($item`vampyric cloake`)) equip($slot`back`, $item`vampyric cloake`);
      },
      completed: () =>
        CombatLoversLocket.monstersReminisced().includes($monster`factory worker (female)`) ||
        !CombatLoversLocket.availableLocketMonsters().includes($monster`factory worker (female)`),
      do: () => CombatLoversLocket.reminisce($monster`factory worker (female)`),
      outfit: {
        familiar: $familiar`Cookbookbat`,
        modifier: "Item Drop",
      },
      choices: { 1387: 3 },
      combat: new CombatStrategy().macro(
        Macro.externalIf(
          have($item`vampyric cloake`),
          Macro.trySkill($skill`Become a Cloud of Mist`)
        )
          .externalIf(
            have($item`Fourth of May Cosplay Saber`) && get("_saberForceUses") < 5,
            Macro.externalIf(
              have($item`industrial fire extinguisher`),
              Macro.trySkill($skill`Fire Extinguisher: Foam Yourself`)
            ).trySkill($skill`Use the Force`)
          )
          .trySkill($skill`Shocking Lick`)
          .tryItem($item`yellow rocket`)
          .default()
      ),
      limit: { tries: 1 },
    },
    {
      name: "Drink Boris Beer",
      completed: () =>
        have($effect`Beery Cool`) ||
        ((!have($item`bowl of cottage cheese`) || !have($item`Yeast of Boris`)) &&
          !have($item`Boris's beer`)) ||
        myInebriety() >= inebrietyLimit(),
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
        if (get("_kgbClicksUsed") < 22 && have($item`Kremlin's Greatest Briefcase`))
          cliExecute("briefcase e hot");
        if (have($skill`Summon Clip Art`) && !have($item`cracker`)) {
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
        const maxTurns = 35;
        const testTurns = advCost(CommunityServiceTests.HOTTEST);
        if (testTurns > maxTurns) {
          print(`Expected to take ${testTurns}, which is more than ${maxTurns}.`, "red");
          print("Either there was a bug, or you are under-prepared for this test", "red");
          print("Manually complete the test if you think this is fine.", "red");
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
