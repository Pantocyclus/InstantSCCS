import { mpCost, toInt } from "kolmafia";
import { $skill, $stat, StrictMacro } from "libram";
import { mainStat } from "./lib";

const damageSkill = mainStat === $stat`Muscle` ? $skill`Lunging Thrust-Smack` : $skill`Saucegeyser`;

export default class Macro extends StrictMacro {
  kill(useCinch = false): Macro {
    const macroHead = this.trySkill($skill`Curse of Weaksauce`)
      .trySkill($skill`Micrometeorite`)
      .trySkill($skill`Sing Along`)
      .trySkill($skill`Surprisingly Sweet Stab`)
      .trySkill($skill`Surprisingly Sweet Slash`)

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
