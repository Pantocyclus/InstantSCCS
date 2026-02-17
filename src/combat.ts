import { mpCost, toInt } from "kolmafia";
import { $item, $skill, $stat, get, have, StrictMacro } from "libram";
import { mainStat } from "./lib";

const damageSkill = mainStat === $stat`Muscle` ? $skill`Lunging Thrust-Smack` : $skill`Saucegeyser`;

export default class Macro extends StrictMacro {
  kill(useCinch = false): Macro {
    const macroHead = this.trySkill($skill`Curse of Weaksauce`)
      .trySkill($skill`Micrometeorite`)
      .trySkill($skill`Sing Along`)
      .trySkill($skill`Surprisingly Sweet Stab`)
      .trySkill($skill`Surprisingly Sweet Slash`)
      // eslint-disable-next-line libram/verify-constants
      .trySkill($skill`Heartstone: %kill`)
      .if_(
        `!mpbelow ${mpCost($skill`Stuffed Mortar Shell`)}`,
        Macro.trySkill($skill`Stuffed Mortar Shell`),
      );

    return (useCinch ? macroHead.trySkill($skill`Cincho: Confetti Extravaganza`) : macroHead)
      .while_(`!mpbelow ${damageSkill} && hasskill ${toInt(damageSkill)}`, Macro.skill(damageSkill))
      .while_(
        `!mpbelow ${mpCost($skill`Saucestorm`)} && hasskill ${toInt($skill`Saucestorm`)}`,
        Macro.skill($skill`Saucestorm`),
      )
      .attack()
      .repeat();
  }

  static kill(): Macro {
    return new Macro().kill();
  }

  banish(): Macro {
    return Macro.trySkill($skill`Feel Hatred`)
      .trySkill($skill`Reflex Hammer`)
      .trySkill($skill`Throw Latte on Opponent`)
      .trySkill($skill`KGB tranquilizer dart`)
      .trySkill($skill`Snokebomb`);
  }

  static banish(): Macro {
    return new Macro().banish();
  }

  default(useCinch = false): Macro {
    return this.kill(useCinch);
  }

  static default(useCinch = false): Macro {
    return new Macro().default(useCinch);
  }
}

export function main(): void {
  Macro.load().submit();
}

export function haveFreeKill(): boolean {
  // TODO: Support for Parka YR
  const haveXRay = have($item`Lil' Doctor™ bag`) && get("_chestXRayUsed") < 3;
  const haveShatteringPunch = have($skill`Shattering Punch`) && get("_shatteringPunchUsed") < 3;
  const haveMobHit = have($skill`Gingerbread Mob Hit`) && !get("_gingerbreadMobHitUsed");

  return haveXRay || haveShatteringPunch || haveMobHit;
}

export function haveMotherSlimeBanish(): boolean {
  const haveSnokeBomb = have($skill`Snokebomb`) && get("_snokebombUsed") < 3;
  const haveKGBTranquilizer =
    have($item`Kremlin's Greatest Briefcase`) && get("_kgbTranquilizerDartUses") < 3;

  return haveSnokeBomb || haveKGBTranquilizer;
}

export function haveFreeBanish(): boolean {
  const haveFeelHatred = have($skill`Feel Hatred`) && get("_feelHatredUsed") < 3;
  const haveReflexHammer = have($item`Lil' Doctor™ bag`) && get("_reflexHammerUsed") < 3;
  const haveThrowLatte = have($item`latte lovers member's mug`) && !get("_latteBanishUsed");

  return haveFeelHatred || haveReflexHammer || haveThrowLatte || haveMotherSlimeBanish();
}
