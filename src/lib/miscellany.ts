import {
  availableAmount,
  formatDateTime,
  getClanName,
  gitInfo,
  myId,
  print,
  todayToString,
  toInt,
  toItem,
  visitUrl,
} from "kolmafia";
import { $item, get } from "libram";

export let releaseSHA = "unknown";

function writeToWhiteboard(text: string): void {
  visitUrl(`clan_basement.php?whiteboard=${text}&action=whitewrite`);
}

function readWhiteboard(): string {
  return (
    visitUrl("clan_basement.php?whiteboard=1")
      .match(RegExp(/cols=60>([\s\S]*?)<\/textarea>/))
      ?.at(1) ?? ""
  ).replace(RegExp(/[\r\n]/), "\n");
}

export function updateRunStats(): void {
  if (!get("instant_collectData", true)) return;
  if (getClanName().toLowerCase() !== "csloopers unite") return;
  try {
    const text = readWhiteboard();
    const SHA =
      gitInfo("Pantocyclus-instantsccs-release").commit.length > 0
        ? gitInfo("Pantocyclus-instantsccs-release").commit.slice(0, 7)
        : "unknown";
    const playerId = toInt(myId());
    const date = todayToString();

    // ========== DATA TO TRACK ===========
    // The data we log to the clan whiteboard is determined by whatever is detailed in the CSLoopers Unite Clan's forum post.
    // This allows us to dynamically change the data being logged without needing to compile a new build for each change,
    // with the downside being that we are unable to log outputs from Mafia/Libram functions - we should not be executing
    // arbitrary code that may (but should definitely not) be placed within the forum post, as these code snippets cannot be
    // easily vetted through the public GitHub repo*. As an added safety precaution, the forum has been locked down and may
    // only be modified by trusted developers of this script.
    // *As of the current implementation, this only parses
    // (1) Items - Reads the string <[itemId]> and returns availableAmount(toItem(itemId))
    // (2) Preference Strings - Reads the string <'preference'> and returns get(preference, "?") or "0" / "1" if the preference returns a boolean
    // (3) Integers - Reads the string <number> and returns number
    const remarks = (
      visitUrl("clan_freadtopic.php?topicid=197960")
        .match(RegExp(/Currently Tracked Stats:<br>(.*?)<\/td>/))
        ?.at(1)
        ?.replace(RegExp(/<br>/g), "\n") ?? ""
    )
      .split("\n")
      .filter((l) => l.length > 0)
      .map((l) => {
        const s = l.split(" / ");
        return s
          .map((val) => {
            let num = "?";

            if (Number.isInteger(parseInt(val))) {
              num = val;
            } else if (toItem(val.match(/\[(\d+)\]/)?.at(1) ?? "") !== $item.none) {
              num = availableAmount(toItem(val)).toString();
            } else {
              num = get(val.replace(/[\s']/g, ""), "?");
              if (num === "true") num = "1";
              else if (num === "false") num = "0";
            }
            return num;
          })
          .join("/");
      })
      .filter((l) => l.length > 0)
      .join(" | ");

    type TextCheck = [boolean, string];
    const parsedWhiteboard: TextCheck[] = text.split("\n").map((row) => {
      if (row.includes("Latest Release Version: ")) {
        if (releaseSHA === "unknown") {
          releaseSHA = row.split(": ")?.at(1) ?? "unknown";
        }
        return [false, ""];
      }
      const parts = row.split(" ");
      if (parts.length < 3) {
        // print(`Bad Length: ${parts.length}`);
        return [false, row];
      }

      const entryId = toInt(parts[1].match(RegExp(/\(#(\d+)\)/))?.at(1) ?? "-1");
      if (entryId === -1) {
        // print(`Bad Id: ${parts[1]}`);
        return [false, row];
      } else if (entryId === playerId) {
        // print(`Player Id: ${entryId}`);
        return [false, ""];
      }

      const entryDate = formatDateTime(
        "dd-MM-yy",
        parts[0].match(RegExp(/\[(\d{2}-\d{2}-\d{2})\]/))?.at(1) ?? "",
        "yyyyMMdd",
      );
      if (entryDate.includes("Bad")) {
        // print(`Bad Date: ${parts[0]}`);
        return [false, row];
      }

      const entryHash = parts[2].slice(0, 7);
      if (entryHash.length !== 7) {
        // print(`Bad Hash: ${entryHash}`);
        return [false, row];
      }

      const entryRemarks = parts.slice(3).join(" ");

      return [true, `${entryDate} ${entryId} ${entryHash} ${entryRemarks}`];
    });

    const stats = parsedWhiteboard.filter(([valid]) => valid);
    stats.unshift([true, `${date} ${playerId} ${SHA} ${remarks}`]);

    const mappedStats: TextCheck[] = stats.map(([valid, row]) => {
      if (!valid) return [false, row];
      const parts = row.split(" ");
      const entryDate = formatDateTime("yyyyMMdd", parts[0], "dd-MM-yy");
      const entryId = parts[1];
      const entryHash = parts[2];
      const entryRemarks = parts.slice(3).join(" ");
      return [true, `[${entryDate}] (#${entryId}) ${entryHash} ${entryRemarks}`];
    });

    const updateText = [
      [false, `===== Latest Release Version: ${releaseSHA.slice(0, 7)} =====`] as TextCheck,
      ...mappedStats.filter(([valid]) => valid),
      ...mappedStats.filter(([valid]) => !valid),
      ...parsedWhiteboard.filter(([valid]) => !valid),
    ]
      .map(([, row]) => row)
      .filter((row) => row.length >= 15)
      .join("\n");

    writeToWhiteboard(updateText);
    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    //No-op
  }
}

export function checkGithubVersion(): boolean {
  let latest = false;
  try {
    const gitBranches: { name: string; commit: { sha: string } }[] = JSON.parse(
      visitUrl(`https://api.github.com/repos/Pantocyclus/InstantSCCS/branches`),
    );
    const releaseBranch = gitBranches.find((branchInfo) => branchInfo.name === "release");
    releaseSHA = releaseBranch?.commit.sha ?? "unknown";
    const localBranch = gitInfo("Pantocyclus-instantsccs-release");
    const localSHA = localBranch.commit;
    if (releaseSHA === localSHA) {
      print("InstantSCCS is up to date!", "green");
      latest = true;
    } else {
      print(
        `InstantSCCS is out of date - your version was last updated on ${localBranch.last_changed_date}.`,
        "red",
      );
      print("Please run 'git update'!", "red");
      print(`Local Version: ${localSHA}.`);
      print(`Release Version: ${releaseSHA}`);
    }
    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    print("Failed to fetch GitHub data", "red");
  }
  return latest;
}

export function simpleDateDiff(t1: string, t2: string): number {
  // Returns difference in milliseconds
  const yearDiff = toInt(t2.slice(0, 4)) - toInt(t1.slice(0, 4));
  const monthDiff = 12 * yearDiff + toInt(t2.slice(4, 6)) - toInt(t1.slice(4, 6));
  const dayDiff =
    monthDiff * Math.max(toInt(t1.slice(6, 8)), toInt(t2.slice(6, 8))) +
    toInt(t2.slice(6, 8)) -
    toInt(t1.slice(6, 8));
  const hourDiff = 24 * dayDiff + toInt(t2.slice(8, 10)) - toInt(t1.slice(8, 10));
  const minDiff = 60 * hourDiff + toInt(t2.slice(10, 12)) - toInt(t1.slice(10, 12));
  const secDiff = 60 * minDiff + toInt(t2.slice(12, 14)) - toInt(t1.slice(12, 14));
  const msDiff = 1000 * secDiff + toInt(t2.slice(14)) - toInt(t1.slice(14));

  return msDiff;
}

export function convertMilliseconds(milliseconds: number): string {
  const seconds = milliseconds / 1000;
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = Math.round((seconds - minutes * 60) * 1000) / 1000;
  const hours = Math.floor(minutes / 60);
  const minutesLeft = Math.round(minutes - hours * 60);
  return (
    (hours !== 0 ? `${hours} hours, ` : "") +
    (minutesLeft !== 0 ? `${minutesLeft} minutes, ` : "") +
    (secondsLeft !== 0 ? `${secondsLeft} seconds` : "")
  );
}
