import { availableChoiceOptions, ChoiceAdventureScript, runChoice } from "kolmafia";
import { $stat, maxBy } from "libram";
import { mainStat } from "./lib";

const DART_PERKS: string[] = [
  "Bullseyes do not impress you much",
  "You are less impressed by bullseyes",
  "25% better chance to hit bullseyes",
  "25% More Accurate bullseye targeting",
  "25% Better bullseye targeting",
  "Butt awareness",
  "Extra stats from stats targets",
  "Expand your dart capacity by 1",
  "Throw a second dart quickly",
  "Increase Dart Deleveling from deleveling targets",
  "Deal 25-50% more damage",
  "Add Hot Damage",
  "Add Cold Damage",
  "Add Sleaze Damage",
  "Add Spooky Damage",
  "Add Stench Damage",
  "Deal 25-50% extra damage",
  "Deal 25-50% greater damage",
];

function getBestDartsOption(): number {
  return Number(
    maxBy(
      Object.entries(availableChoiceOptions()),
      ([text]) => (DART_PERKS.includes(text) ? -DART_PERKS.indexOf(text) : -Infinity),
      true,
    )[0],
  );
}

export function getMobiusOption(): number {
  const desiredChoices = ["Go back and take a 20-year-long nap", "Go back and set an alarm"];
  return Number(
    maxBy(
      Object.entries(availableChoiceOptions()),
      ([text]) => (desiredChoices.includes(text) ? -desiredChoices.indexOf(text) : -Infinity),
      true,
    )[0],
  );
}

export const main: ChoiceAdventureScript = (choiceNumber, pageText) => {
  switch (choiceNumber) {
    case 1467: // https://wiki.kingdomofloathing.com/Poetic_Justice
      return void runChoice(3); // Beaten up
    case 1468: // https://wiki.kingdomofloathing.com/Aunts_not_Ants
      return void runChoice(mainStat === $stat`Moxie` ? 1 : 2); // Mox substats or Mus substats + meat
    case 1469: // https://wiki.kingdomofloathing.com/Beware_of_Aligator
      return void runChoice(3); // 1500 Meat
    case 1470: // https://wiki.kingdomofloathing.com/Teacher%27s_Pet_(Noncombat)
      return void runChoice(mainStat === $stat`Muscle` ? 3 : 2); // Mus substats or Teacher's Pen
    case 1471: // https://wiki.kingdomofloathing.com/Lost_and_Found
      return void runChoice(mainStat === $stat`Mysticality` ? 3 : 1); // Myst substats or meat% potion
    case 1472: // https://wiki.kingdomofloathing.com/Summer_Days
      return void runChoice(1); // -NC%
    case 1473: // https://wiki.kingdomofloathing.com/Bath_Time
      return void runChoice(3); // Hot Res
    case 1474: // https://wiki.kingdomofloathing.com/Delicious_Sprouts
      return void runChoice(
        mainStat === $stat`Mysticality` ? 1 : mainStat === $stat`Muscle` ? 3 : 2,
      ); // Myst substats, Mus substats or Guilty Sprout
    case 1475: // https://wiki.kingdomofloathing.com/Hypnotic_Master
      return void runChoice(mainStat === $stat`Muscle` ? 2 : 1); // Mus substats or 5 free rests
    case 1525:
      return void runChoice(getBestDartsOption());
    case 1562:
      return void runChoice(getMobiusOption());
  }
};
