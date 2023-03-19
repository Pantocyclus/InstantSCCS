import { mpCost, myClass, toInt } from "kolmafia";
import { $skill, StrictMacro } from "libram";

export const mainStat = myClass().primestat;

export default class Macro extends StrictMacro {
  kill(): Macro {
    return this.trySkill($skill`Curse of Weaksauce`)
      .if_(
        `!mpbelow ${mpCost($skill`Stuffed Mortar Shell`)}`,
        Macro.trySkill($skill`Stuffed Mortar Shell`)
      )
      .while_(
        `!mpbelow ${mpCost($skill`Saucegeyser`)} && hasskill ${toInt($skill`Saucegeyser`)}`,
        Macro.skill($skill`Saucegeyser`)
      )
      .while_(
        `!mpbelow ${mpCost($skill`Saucestorm`)} && hasskill ${toInt($skill`Saucestorm`)}`,
        Macro.skill($skill`Saucestorm`)
      )
      .attack()
      .repeat();
  }

  static kill(): Macro {
    return new Macro().kill();
  }

  default(): Macro {
    return this.kill();
  }

  static default(): Macro {
    return new Macro().default();
  }
}

export function main(): void {
  Macro.load().submit();
}
