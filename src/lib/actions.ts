import {
  autosell,
  cliExecute,
  haveEffect,
  Item,
  itemAmount,
  mpCost,
  myMaxmp,
  myMp,
  restoreMp,
  Skill,
  totalFreeRests,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $item,
  $items,
  $monster,
  $skill,
  $skills,
  AutumnAton,
  get,
  have,
  maxBy,
} from "libram";
import { mainStat } from "./accountstate";
import { bestShadowRift } from "./zones";

export const baseBoozes = $items`bottle of rum, boxed wine, bottle of gin, bottle of vodka, bottle of tequila, bottle of whiskey`;
const seaFruits = $items`sea tangelo, sea persimmon, sea lychee, sea honeydew, sea blueberry`;
const fishDrops = $items`beefy fish meat, glistening fish meat, slick fish meat, dull fish scale, rough fish scale, pristine fish scale`;

export function sellMiscellaneousItems(): void {
  const items: Item[] = [
    $item`cardboard ore`,
    $item`hot buttered roll`,
    $item`toast`,
    $item`meat paste`,
    $item`meat stack`,
    $item`jar of swamp honey`,
    $item`turtle voicebox`,
    $item`grody jug`,
    $item`gas can`,
    $item`Middle of the Road™ brand whiskey`,
    $item`neverending wallet chain`,
    $item`pentagram bandana`,
    $item`denim jacket`,
    $item`ratty knitted cap`,
    $item`jam band bootleg`,
    $item`Purple Beast energy drink`,
    $item`cosmetic football`,
    $item`shoe ad T-shirt`,
    $item`pump-up high-tops`,
    $item`noticeable pumps`,
    $item`surprisingly capacious handbag`,
    $item`electronics kit`,
    $item`PB&J with the crusts cut off`,
    $item`dorky glasses`,
    $item`ponytail clip`,
    $item`paint palette`,
    $item`goat cheese`,
    ...baseBoozes,
    ...seaFruits,
    ...fishDrops,
    $item`vinegar-soaked lemon slice`,
    $item`exotic jungle fruit`,
    $item`fat stacks of cash`,
  ];
  items.forEach((it) => {
    if (itemAmount(it) > 1) autosell(it, itemAmount(it) - 1);
  });
}

const allTomes = $skills`Summon Resolutions, Summon Love Song, Summon Candy Heart, Summon Taffy, Summon BRICKOs, Summon Party Favor, Summon Dice`;
const availableTomes = allTomes.filter((tome) => have(tome));
export function chooseLibram(): Skill {
  const needLoveSong =
    have($skill`Summon Love Song`) &&
    itemAmount($item`love song of icy revenge`) +
      Math.floor(haveEffect($effect`Cold Hearted`) / 5) <
      4;
  const needCandyHeart =
    have($skill`Summon Candy Heart`) &&
    ((!have($item`green candy heart`) && !have($effect`Heart of Green`)) ||
      (!have($item`lavender candy heart`) && !have($effect`Heart of Lavender`)));

  if (
    have($skill`Summon Resolutions`) &&
    ((!have($item`resolution: be happier`) && !have($effect`Joyful Resolve`)) ||
      (!have($item`resolution: be feistier`) && !have($effect`Destructive Resolve`)))
  ) {
    return $skill`Summon Resolutions`;
  } else if (needCandyHeart) {
    return $skill`Summon Candy Heart`;
  } else if (needLoveSong) {
    return $skill`Summon Love Song`;
  } else if (
    have($skill`Summon Resolutions`) &&
    !have($item`resolution: be kinder`) &&
    !have($effect`Kindly Resolve`)
  ) {
    return $skill`Summon Resolutions`;
  }
  return availableTomes[0];
}

export function burnLibram(saveMp: number): void {
  if (availableTomes.length === 0) return;
  while (myMp() >= mpCost(chooseLibram()) + saveMp) {
    useSkill(chooseLibram());
  }
}

export function refillLatte(): void {
  if (
    !have($item`latte lovers member's mug`) ||
    !get("_latteDrinkUsed") ||
    get("_latteRefillsUsed") >= 3
  )
    return;

  const lastIngredient = get("latteUnlocks").includes("carrot") ? "carrot" : "pumpkin";
  if (get("_latteRefillsUsed") < 3) cliExecute(`latte refill cinnamon vanilla ${lastIngredient}`);
}

export function goVote(): void {
  const initPriority: Map<string, number> = new Map([
    ["Weapon Damage Percent: +100", 5],
    ["Item Drop: +15", 4],
    ["Booze Drop: +30", 4],
    ["Monster Level: +10", 3],
    [`${mainStat} Percent: +25`, 3],
    ["Adventures: +1", 3],
    ["Spell Damage Percent: +20", 3],
    ["Familiar Experience: +2", 2],
    [`Experience (${mainStat}): +4`, 2],
    ["Hot Resistance: +3", 2],
    ["Meat Drop: +30", 1],
    [`Experience: +3`, 1],
    ["Meat Drop: -30", -2],
    ["Item Drop: -15", -4],
    ["Familiar Experience: -2", -4],
    [`Experience: -3`, -4],
    [`Maximum HP Percent: -50`, -4],
    ["Weapon Damage Percent: -50", -6],
    ["Spell Damage Percent: -50", -6],
    ["Adventures: -2", -6],
  ]);

  const voteLocalPriorityArr = [1, 2, 3, 4].map((index) => ({
    urlString: index - 1,
    value:
      initPriority.get(get(`_voteLocal${index}`)) ??
      (get(`_voteLocal${index}`).includes("-") ? -1 : 1),
  }));

  const init = maxBy(voteLocalPriorityArr, "value").urlString;

  const voteOptimally = get("instant_voteOptimally", false) ? 2 : 1;
  const voterValueTable = [
    {
      monster: $monster`terrible mutant`,
      value: voteOptimally,
    },
    {
      monster: $monster`angry ghost`,
      value: 1,
    },
    {
      monster: $monster`government bureaucrat`,
      value: 1,
    },
    {
      monster: $monster`annoyed snake`,
      value: 1,
    },
    {
      monster: $monster`slime blob`,
      value: 1,
    },
  ];

  const votingMonsterPriority = voterValueTable
    .sort((a, b) => b.value - a.value)
    .map((element) => element.monster.name);

  const monsterVote =
    votingMonsterPriority.indexOf(get("_voteMonster1")) <
    votingMonsterPriority.indexOf(get("_voteMonster2"))
      ? 1
      : 2;

  visitUrl(`choice.php?option=1&whichchoice=1331&g=${monsterVote}&local[]=${init}&local[]=${init}`);
}

export function sendAutumnaton(): void {
  if (AutumnAton.availableLocations().includes(bestShadowRift()) && have($item`autumn-aton`))
    AutumnAton.sendTo(bestShadowRift());
}

export function attemptRestoringMpWithFreeRests(mpTarget: number): void {
  if (myMp() >= mpTarget || myMp() === myMaxmp()) return;
  if (
    (!get("chateauAvailable") && !get("getawayCampsiteUnlocked")) ||
    get("timesRested") >= totalFreeRests() - get("instant_saveFreeRests", 0)
  ) {
    restoreMp(mpTarget);
    return;
  }
  if (get("chateauAvailable")) visitUrl("place.php?whichplace=chateau&action=chateau_restbox");
  else if (get("getawayCampsiteUnlocked"))
    visitUrl("place.php?whichplace=campaway&action=campaway_tentclick");
  else throw new Error("Failed to free rest at either Chateau or the Getaway Campsite!");
  attemptRestoringMpWithFreeRests(mpTarget);
}
