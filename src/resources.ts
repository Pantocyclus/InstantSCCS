import { Effect, print } from "kolmafia";
import { $effect, $effects, get } from "libram";

class Resource {
  pref: string;
  help: string;
  effects: Effect[];

  constructor(pref: string, help: string, effects?: Effect[]) {
    this.pref = pref;
    this.help = help;
    this.effects = get(pref, false) && effects ? effects : [];
  }
}

const resources: Resource[] = [
  new Resource("instant_savePorquoise", "Do not autosell your porquoise"),
  new Resource(
    "instant_skipDistilledFortifiedWine",
    "Do not grab the DFW lucky adventure (if you have numberology)"
  ),
  new Resource("instant_saveEuclideanAngle", "Do not pull a non-Euclidean Angle"),
  new Resource("instant_saveAbstraction", "Do not pull an Abstraction: Category"),
  new Resource("instant_savePerfectFreeze", "Do not craft and drink a perfect drink"),
  new Resource(
    "instant_saveHoneyBun",
    "Do not eat a Honey Bun of Boris stat test",
    $effects`Motherly Loved`
  ),
  new Resource(
    "instant_saveRoastedVegetableStats",
    "Do not eat a Roasted Vegetable of Jarlsberg for the stat test",
    $effects`Wizard Sight`
  ),
  new Resource(
    "instant_saveRichRicotta",
    "Do not eat a Pete's Rich Ricotta for the stats test",
    $effects`Rippin' Ricotta`
  ),
  new Resource("instant_saveWileyWheyBar", "Do not eat a Pete's Wiley Whey Bar for the stats test"),
  new Resource(
    "instant_saveRicottaCasserole",
    "Do not eat a Bake Veggie Ricotta Casserole for the stats test"
  ),
  new Resource(
    "instant_savePlainCalzone",
    "Do not eat a Plain Calzone",
    $effects`Angering Pizza Purists`
  ),
  new Resource("instant_saveBeesKnees", "Do not buy and drink Bee's Knees"),
  new Resource("instant_saveSockdollager", "Do not buy and drink a sockdollager"),
  new Resource("instant_saveBorisBeer", "Do not drink a Boris's Beer for the hot test"),
  new Resource(
    "instant_saveRoastedVegetableItem",
    "Do not eat a Roasted Vegetable of Jarlsberg for the item test"
  ),
  new Resource("instant_saveSacramentoWine", "Do not drink a Sacramento Wine for the item test"),
  new Resource("instant_saveFloundry", "Do not create a codpiece"),
  new Resource("instant_saveFortuneTeller", "Do not consult Zatara for the myst buff"),
  new Resource(
    "instant_saveSnackVoucher",
    "Do not use your snack voucher",
    $effects`Wasabi With You, Pisces in the Skyces`
  ),
  new Resource("instant_saveClipArt", "Only summon borrowed time"),
  new Resource("instant_saveDeck", "Do not use any deck summons"),
  new Resource("instant_saveBarrelShrine", "Do not get the barrel shrine buff", [
    $effect`Warlock, Warstock, and Warbarrel`,
  ]),
  new Resource(
    "instant_saveWitchess",
    "Do not fight witchess monsters nor acquire Puzzle Champ",
    $effects`Puzzle Champ`
  ),
  new Resource(
    "instant_saveTerminal",
    "Do not acquire items.enh and substats.enh",
    $effects`items.enh, substats.enh`
  ),
  new Resource(
    "instant_saveCopDollars",
    "Do not acquire shoe gum with cop dollars",
    $effects`Gummed Shoes`
  ),
  new Resource("instant_saveKGBClicks", "Do not use any KGB clicks"),
  new Resource("instant_saveWishes", "Do not use any wishes", $effects`Outer Wolf™`),
  new Resource("instant_savePantogram", "Do not use your pantogram"),
  new Resource("instant_saveMummingTrunk", "Do not use your mumming trunk"),
  new Resource(
    "instant_saveBodySpradium",
    "Do not chew the body spradium if we have it",
    $effects`Boxing Day Glow`
  ),
  new Resource("instant_saveDocBag", "Do not use Chest X-Rays"),
  new Resource(
    "instant_savePillkeeper",
    "Do not acquire Hulkien, Rainbowolin and Fidoxene",
    $effects`Hulkien, Rainbowolin, Fidoxene`
  ),
  new Resource(
    "instant_savePowerfulGlove",
    "Do not acquire Triple-Sized and Invisible Avatar",
    $effects`Triple-Sized, Invisible Avatar`
  ),
  new Resource("instant_saveCargoShorts", "Do not use a pull from your Cargo Shorts"),
  new Resource("instant_savePowerSeed", "Do not use any batteries", $effects`AAA-Charged`),
  new Resource("instant_saveBackups", "Do not use any backups"),
  new Resource("instant_saveMayday", "Do not use your Mayday survival package"),
];

export const forbiddenEffects = resources.map((resource) => resource.effects).flat();

export function checkResources(): void {
  resources.forEach((resource) => {
    const prefOn = get(resource.pref, false);
    const color = prefOn ? "black" : "#888888";
    print(`${resource.pref} (${prefOn}) - ${resource.help}`, color);
  });
}
