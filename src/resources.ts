import { Effect, Familiar, print, printHtml, toEffect, toInt, totalFreeRests } from "kolmafia";
import { $effect, $effects, get, set } from "libram";

class Resource {
  pref: string;
  help: (s?: string | number) => string;
  effects: Effect[];
  default_value: number;

  constructor(
    pref: string,
    help: (s?: string | number) => string,
    effects?: Effect[],
    default_value?: number
  ) {
    this.pref = pref;
    this.help = help;
    const prefIsNumber = !isNaN(Number(get(pref, ""))) && get(pref, "").length > 0;
    this.effects = (!prefIsNumber ? get(pref, false) : true) && effects ? effects : [];
    this.default_value = default_value === undefined ? 1 : default_value;
    if (default_value !== undefined && !prefIsNumber) set(pref, default_value);
  }
}

const resources: Resource[] = [
  new Resource("instant_savePorquoise", () => "Do not autosell your porquoise"),
  new Resource(
    "instant_skipDistilledFortifiedWine",
    () => "Do not grab the DFW lucky adventure (if you have numberology)"
  ),
  new Resource(
    "instant_saveAstralPilsners",
    (n) => `Save ${n}/6 astral pilsners (set a number)`,
    [],
    get("instant_saveAstralPilsners", false) ? 6 : 0
  ),
  new Resource("instant_saveEuclideanAngle", () => "Do not pull a non-Euclidean Angle"),
  new Resource("instant_saveAbstraction", () => "Do not pull an Abstraction: Category"),
  new Resource("instant_savePerfectFreeze", () => "Do not craft and drink a perfect drink"),
  new Resource(
    "instant_saveHoneyBun",
    () => "Do not eat a Honey Bun of Boris for the stats test",
    $effects`Motherly Loved`
  ),
  new Resource(
    "instant_saveRoastedVegetableStats",
    () => "Do not eat a Roasted Vegetable of Jarlsberg for the stats test",
    $effects`Wizard Sight`
  ),
  new Resource(
    "instant_saveRichRicotta",
    () => "Do not eat a Pete's Rich Ricotta for the stats test",
    $effects`Rippin' Ricotta`
  ),
  new Resource(
    "instant_saveWileyWheyBar",
    () => "Do not eat a Pete's Wiley Whey Bar for the stats test"
  ),
  new Resource(
    "instant_saveRicottaCasserole",
    () => "Do not eat a Bake Veggie Ricotta Casserole for the stats test"
  ),
  new Resource(
    "instant_savePlainCalzone",
    () => "Do not eat a Plain Calzone",
    $effects`Angering Pizza Purists`
  ),
  new Resource("instant_saveBeesKnees", () => "Do not buy and drink Bee's Knees"),
  new Resource("instant_saveSockdollager", () => "Do not buy and drink a sockdollager"),
  new Resource("instant_saveBorisBeer", () => "Do not drink a Boris's Beer for the hot test"),
  new Resource(
    "instant_saveRoastedVegetableItem",
    () => "Do not eat a Roasted Vegetable of Jarlsberg for the item test"
  ),
  new Resource(
    "instant_saveSacramentoWine",
    () => "Do not drink a Sacramento Wine for the item test"
  ),
  new Resource("instant_saveFloundry", () => "Do not create a codpiece"),
  new Resource("instant_saveFortuneTeller", () => "Do not consult Zatara for the myst buff"),
  new Resource(
    "instant_saveSnackVoucher",
    () => "Do not use your snack voucher",
    $effects`Wasabi With You, Pisces in the Skyces`
  ),
  new Resource("instant_saveClipArt", () => "Only summon borrowed time"),
  new Resource("instant_saveDeck", () => "Do not use any deck summons"),
  new Resource("instant_saveBarrelShrine", () => "Do not get the barrel shrine buff", [
    $effect`Warlock, Warstock, and Warbarrel`,
  ]),
  new Resource(
    "instant_saveWitchess",
    () => "Do not fight witchess monsters nor acquire Puzzle Champ",
    $effects`Puzzle Champ`
  ),
  new Resource(
    "instant_saveTerminal",
    () => "Do not acquire items.enh and substats.enh",
    $effects`items.enh, substats.enh`
  ),
  new Resource(
    "instant_saveCopDollars",
    () => "Do not acquire shoe gum with cop dollars",
    $effects`Gummed Shoes`
  ),
  new Resource("instant_saveKGBClicks", () => "Do not use any KGB clicks"),
  new Resource("instant_saveGenie", () => "Do not use any genie wishes"),
  new Resource("instant_saveMonkeysPaw", () => "Do not use any monkey's paw wishes"),
  new Resource("instant_savePantogram", () => "Do not use your pantogram"),
  new Resource("instant_saveMummingTrunk", () => "Do not use your mumming trunk"),
  new Resource(
    "instant_saveBodySpradium",
    () => "Do not chew the body spradium if we have it",
    $effects`Boxing Day Glow`
  ),
  new Resource("instant_saveDocBag", () => "Do not use Chest X-Rays"),
  new Resource(
    "instant_savePillkeeper",
    () => "Do not acquire Hulkien, Rainbowolin and Fidoxene",
    $effects`Hulkien, Rainbowolin, Fidoxene`
  ),
  new Resource(
    "instant_savePowerfulGlove",
    () => "Do not acquire Triple-Sized and Invisible Avatar",
    $effects`Triple-Sized, Invisible Avatar`
  ),
  new Resource("instant_saveCargoShorts", () => "Do not use a pull from your Cargo Shorts"),
  new Resource("instant_savePowerSeed", () => "Do not use any batteries", $effects`AAA-Charged`),
  new Resource(
    "instant_saveBackups",
    (n) => `Save ${n}/11 backups (set a number)`,
    [],
    get("instant_saveBackups", false) ? 11 : 0
  ),
  new Resource("instant_saveMayday", () => "Do not use your Mayday survival package"),
  new Resource("instant_saveLocketRedSkeleton", () => "Do not reminisce a Red Skeleton"),
  new Resource("instant_saveLocketWitchessKing", () => "Do not reminisce a Witchess King"),
  new Resource(
    "instant_saveLocketFactoryWorker",
    () => "Do not reminisce a Factory Worker (female)"
  ),
  new Resource("instant_savePumpkins", () => "Do not use harvested pumpkins"),
  new Resource(
    "instant_skipEarlyTrainsetMeat",
    () => "Do not spend an adventure in the Dire Warren pre-coil grabbing meat from the trainset"
  ),
  new Resource("instant_saveSugar", () => "Do not spend tome uses on sugar shorts/chapeau/shank"),
  new Resource(
    "instant_skipMappingNinja",
    () => "Do not attempt to grab a li'l ninja costume for your tot"
  ),
  new Resource("instant_saveGarden", () => "Do not harvest your garden"),
  new Resource("instant_saveMoonTune", () => "Do not tune the moon for familiar weight test"),
  new Resource("instant_saveCinch", () => "Do not spend any cinch for leveling"),
  new Resource(
    "instant_saveFreeRests",
    (n) => `Save ${n}/${totalFreeRests()} free rests (set a number)`,
    [],
    get("instant_saveFreeRests", false) ? totalFreeRests() : 0
  ),
];

const automaticallyExcludedBuffs = Array.from(
  resources.map((resource) => resource.effects).filter((efs) => efs.length > 0)
).reduce((acc, val) => acc.concat(val), []);
const manuallyExcludedBuffs = get("instant_explicitlyExcludedBuffs", "")
  .split(",")
  .filter((s) => s.length > 0)
  .map((s) => toEffect(s));
export const forbiddenEffects = [
  ...automaticallyExcludedBuffs,
  ...manuallyExcludedBuffs.filter((ef) => !automaticallyExcludedBuffs.includes(ef)),
];

export function checkResources(): void {
  printHtml(
    "Legend (prefname - helptext): <font color='black'>✓ Saved Resource</font> / <font color='#888888'>X Usable Resource"
  );
  resources
    .sort((a, b) => (a.pref < b.pref ? -1 : 1))
    .forEach((resource) => {
      const prefValue = get(resource.pref, "");
      const prefOn =
        get(resource.pref, false) ||
        (!isNaN(Number(get(resource.pref, ""))) && Number(get(resource.pref, "")) > 0);
      const symbol = prefOn ? "✓" : "X";
      const color = prefOn ? "black" : "#888888";
      print(`${symbol} ${resource.pref} - ${resource.help(prefValue)}`, color);
    });
  print();
  print("The following are all the buffs we will not acquire in run:");
  forbiddenEffects.forEach((ef) => print(`- ${ef.name}`));
  print("The following are all the familliars we will not use during leveling:");
  const excludedFamiliars = get("instant_explicitlyExcludedFamiliars")
    .split(",")
    .map((i) => toInt(i));
  Familiar.all()
    .filter((fam) => excludedFamiliars.includes(toInt(fam)))
    .forEach((fam) => print(`- ${fam}`));
  print();
  print("Type 'set <prefname>=<true/false(/or number)>' in the CLI to set your preferences");
  print(
    "Type 'set instant_explicitlyExcludedBuffs=<effect_id1>,...,<effect_idn>' to exclude getting specific effects"
  );
  print("(e.g. 'set instant_explicitlyExcludedBuffs=2106' to exclude substats.enh (id = 2106)");
  print("without excluding acquiring items.enh from the Source Terminal)");
  print(
    "Type 'set instant_explicitlyExcludedFamiliars=<fam_id1>,...,<fam_idn>' to exclude using specific familiars during leveling"
  );
  print("Type 'ash remove_property(\"<prefname>\")' to delete a preference");
}
