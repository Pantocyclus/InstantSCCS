import { mpCost, myClass } from "kolmafia";
import { $skill, StrictMacro } from "libram";

export const mainStat = myClass().primestat;

export default class Macro extends StrictMacro {
  kill(): Macro {
    return this.while_(`!mpbelow ${mpCost($skill`Saucegeyser`)}`, Macro.skill($skill`Saucegeyser`))
      .while_(`!mpbelow ${mpCost($skill`Saucestorm`)}`, Macro.skill($skill`Saucestorm`))
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
