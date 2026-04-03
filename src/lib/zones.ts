import {
  getMonsters,
  itemDrops,
  Location,
  mallPrice,
  Monster,
  myTurncount,
  toInt,
  toItem,
} from "kolmafia";
import {
  $item,
  $location,
  $locations,
  $monster,
  $monsters,
  $skill,
  CrystalBall,
  get,
  have,
  sum,
} from "libram";
import { chooseRift } from "libram/dist/resources/2023/ClosedCircuitPayphone";

export const freeFightMonsters: Monster[] = $monsters`Witchess Bishop, Witchess King, Witchess Witch, sausage goblin, Eldritch Tentacle`;
// We want to consider all locations with 100% combat rate
// but some locations like the Barroom Brawl provide free fights for the first X adventures in the zone
// and we do not want to deplete the fights in that location
function safeFreeFightLocations(): Location[] {
  const safeLocations = $locations`The Dire Warren, Uncle Gator's Country Fun-Time Liquid Waste Sluice, The SMOOCH Army HQ, VYKEA, Sloppy Seconds Diner, The Deep Dark Jungle`;
  if (get("_neverendingPartyFreeTurns") >= 10) safeLocations.push($location`The Neverending Party`);
  if (get("_speakeasyFreeFights") >= 3)
    safeLocations.push($location`An Unusually Quiet Barroom Brawl`);
  return safeLocations;
}

let _bestShadowRift: Location | null = null;
export function bestShadowRift(): Location {
  if (!_bestShadowRift) {
    _bestShadowRift =
      chooseRift({
        canAdventure: true,
        sortBy: (l: Location) => {
          const drops = getMonsters(l)
            .map((m) =>
              [
                ...Object.keys(itemDrops(m)).map((s) => toItem(s)),
                m === $monster`shadow guy` && have($skill`Just the Facts`)
                  ? $item`pocket wish`
                  : $item.none,
              ].filter((i) => i !== $item.none),
            )
            .reduce((acc, val) => acc.concat(val), []);
          return sum(drops, mallPrice);
        },
      }) ?? $location.none;
    if (_bestShadowRift === $location.none && have($item`closed-circuit pay phone`)) {
      throw new Error("Failed to find a suitable Shadow Rift to adventure in");
    }
  }
  return _bestShadowRift;
}

export function cyberRealmTurnsRun(): number {
  return get("_cyberZone1Turns") + get("_cyberZone2Turns") + get("_cyberZone3Turns");
}

export function cyberRealmTurnsAvailable(): number {
  if (!have($item`server room key`)) return 0;
  const availableFreeFights = have($skill`OVERCLOCK(10)`) ? 10 : 0;
  return Math.max(
    0,
    availableFreeFights - cyberRealmTurnsRun() - get("instant_saveCyberRealmFights", 0),
  );
}

export function cyberRealmZone(): Location {
  const screechTurns = get("banishedPhyla").match(/Patriotic Screech:(\d+)/)?.[1];
  // If we don't have an active banish (or it ran out), prioritize lower zones
  if (toInt(screechTurns ?? "-1") <= myTurncount()) {
    if (get("_cyberZone1Turns") < 9) return $location`Cyberzone 1`;
    else if (get("_cyberZone2Turns") < 9) return $location`Cyberzone 2`;
    return $location`Cyberzone 3`;
  }
  // Else prioritize higher zones
  if (get("_cyberZone3Turns") < 9) return $location`Cyberzone 3`;
  else if (get("_cyberZone2Turns") < 9) return $location`Cyberzone 2`;
  return $location`Cyberzone 1`;
}

export function crystalBallFreeFightLocation(): Location {
  const freeFightLocation =
    [...CrystalBall.ponder()]
      .filter(
        ([loc, mon]) => safeFreeFightLocations().includes(loc) && freeFightMonsters.includes(mon),
      )
      .map(([loc]) => loc)
      .at(0) ?? Location.none;
  return freeFightLocation;
}

export function havePowerlevelingZoneBound(): boolean {
  if (get("neverendingPartyAlways")) return true;
  else if (get("stenchAirportAlways")) return true;
  else if (get("hotAirportAlways")) return true;
  else if (get("coldAirportAlways")) return true;
  else if (get("sleazeAirportAlways")) return true;
  else if (get("spookyAirportAlways")) return true;
  return false;
}

export function powerlevelingLocation(): Location {
  if (get("neverendingPartyAlways")) return $location`The Neverending Party`;
  else if (get("stenchAirportAlways") || get("_stenchAirportToday"))
    return $location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`;
  else if (get("hotAirportAlways")) return $location`The SMOOCH Army HQ`;
  else if (get("coldAirportAlways")) return $location`VYKEA`;
  else if (get("sleazeAirportAlways")) return $location`Sloppy Seconds Diner`;
  else if (get("spookyAirportAlways")) return $location`The Deep Dark Jungle`;
  else if (have($item`Monodent of the Sea`)) return $location`The Dire Warren`;

  return $location`Uncle Gator's Country Fun-Time Liquid Waste Sluice`; // Default location
}
