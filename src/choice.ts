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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const main: ChoiceAdventureScript = (choiceNumber, pageText) => {
  switch (choiceNumber) {
    case 1525:
      return void runChoice(getBestDartsOption());
  }
};
