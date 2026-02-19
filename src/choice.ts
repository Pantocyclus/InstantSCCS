import { availableChoiceOptions, ChoiceAdventureScript, runChoice } from "kolmafia";
import { maxBy } from "libram";

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

function getMobiusOption(): number {
  var pickChoice = 0;
  var MOBIUS_GOALS = ["Go back and take a 20-year-long nap","Go back and set an alarm"];
  for (let i = 0; i < MOBIUS_GOALS.length; i++) {
    for (let choice = 1; choice < 25; choice++) {
        if (availableChoiceOptions()[choice] == MOBIUS_GOALS[i]) { pickChoice = choice; }
    }
  }
  return pickChoice;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const main: ChoiceAdventureScript = (choiceNumber, pageText) => {
  switch (choiceNumber) {
    case 1525:
      return void runChoice(getBestDartsOption());
    case 1562:
      return void runChoice(getMobiusOption());
  }
};
