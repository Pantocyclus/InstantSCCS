# InstantSCCS

`InstantSCCS` is a softcore Community Service script for looping in Kingdom of Loathing designed to work for low-shiny accounts (i.e. accounts with minimal expensive items/skills) and mostly requires only cheap resources. Unfortunately, this means that the user is expected to have a bunch of softcore-permed skills, and at least ~4 IotMs in order to enable this (one of which is the [Clan VIP Lounge key](https://kol.coldfront.net/thekolwiki/index.php/Clan_VIP_Lounge_key)).

## Installation

To install the script, use the following command in the KoLMafia CLI.

```text
git checkout https://github.com/Pantocyclus/InstantSCCS.git release
```

## Usage

For those who are interested in using `InstantSCCS` as is, the following sections detail the prerequisites, choices in Valhalla, and required resources.

### Before Ascending

- Ensure that you have the following items (which will be pulled/used during the run): 1x [one-day ticket to Dinseylandfill](https://kol.coldfront.net/thekolwiki/index.php/One-day_ticket_to_Dinseylandfill), 1x [Calzone of Legend](https://kol.coldfront.net/thekolwiki/index.php/Calzone_of_Legend), 1x [Deep Dish of Legend](https://kol.coldfront.net/thekolwiki/index.php/Deep_Dish_of_Legend), 1x [roasted vegetable focaccia](https://kol.coldfront.net/thekolwiki/index.php/Roasted_vegetable_focaccia), 1x [borrowed time](https://kol.coldfront.net/thekolwiki/index.php/Borrowed_time) and 10x [cranberries](https://kol.coldfront.net/thekolwiki/index.php/Cranberries).
- Ensure that you have access to a clan with a fully stocked [VIP lounge](https://kol.coldfront.net/thekolwiki/index.php/VIP_Lounge). Also ensure that the [Clan Floundry](<https://kol.coldfront.net/thekolwiki/index.php/Clan_Floundry_(VIP_Lounge)>) has sufficient stocks of cod to pull a [codpiece](https://kol.coldfront.net/thekolwiki/index.php/Codpiece).
- Have any one of the [factory-irregular skeleton](https://kol.coldfront.net/thekolwiki/index.php/Factory-irregular_skeleton), [remaindered skeleton](https://kol.coldfront.net/thekolwiki/index.php/Remaindered_skeleton) or [swarm of skulls](https://kol.coldfront.net/thekolwiki/index.php/Swarm_of_skulls) banished in your [ice house](https://kol.coldfront.net/thekolwiki/index.php/Ice_house).

### In Valhalla

- [astral six-pack](https://kol.coldfront.net/thekolwiki/index.php/Astral_six-pack) from The Deli Lama
- [astral pet sweater](https://kol.coldfront.net/thekolwiki/index.php/Astral_pet_sweater) from Pet Heaven
- [Sauceror](https://kol.coldfront.net/thekolwiki/index.php/Sauceror)
- [The Blender](https://kol.coldfront.net/thekolwiki/index.php/The_Blender)
- [Softcore](https://kol.coldfront.net/thekolwiki/index.php/Ascension#Normal_Difficulty)

### Required IotMs

IotMs are incredibly expensive, and they tend to increase in price the longer they have existed due to the artificial supply limit. Unfortunately, they are incredibly powerful too, and so we will need to rely on them to enable a 1-day SCCS. There is a hard requirement on the [Clan VIP Lounge key](https://kol.coldfront.net/thekolwiki/index.php/Clan_VIP_Lounge_key), as it is one of the few "IotMs" that are recurring (and thus are not gated by the same artificial supply limit as mentioned above), and it provides access to >= 30 Mr. A's-worth of IotMs. <br />
One of the hardest tasks in CS is levelling, due to the limited resources we have access to to optimise for the stat tests (HP, Mus, Myst, Mox). The other required IotMs thus have to provide incredible statgain and/or turngen potential. The current routing is thus built around the following 3 other IotMs.

| IotM                                                                                      | Use         |
| ----------------------------------------------------------------------------------------- | ----------- |
| [model train set](https://kol.coldfront.net/thekolwiki/index.php/Model_train_set)         | xp          |
| [cosmic bowling ball](https://kol.coldfront.net/thekolwiki/index.php/Cosmic_bowling_ball) | xp + banish |
| [cookbookbat](https://kol.coldfront.net/thekolwiki/index.php/Cookbookbat)                 | turngen     |

### Other Useful IotMs

If you're looking to modify the script yourself, you may also consider these useful IotMs. Any IotM that grants access to a scaler zone helps save a pull on the daypass, which may then be used on other useful pulls (e.g. [non-Euclidean angle](https://kol.coldfront.net/thekolwiki/index.php/Non-Euclidean_angle)). Special shoutout to the [combat lover's locket](https://kol.coldfront.net/thekolwiki/index.php/Combat_lover%27s_locket), which gives access to 3 additional fax targets, of which there are a few useful targets including the [ungulith](https://kol.coldfront.net/thekolwiki/index.php/Ungulith), [factory worker(female)](<https://kol.coldfront.net/thekolwiki/index.php/Factory_worker_(female)>), [novelty tropical skeleton](https://kol.coldfront.net/thekolwiki/index.php/Novelty_tropical_skeleton), [ice concierge](https://kol.coldfront.net/thekolwiki/index.php/Ice_concierge) or [some](https://kol.coldfront.net/thekolwiki/index.php/Witchess_Bishop) [useful](https://kol.coldfront.net/thekolwiki/index.php/Witchess_King) [witchess](https://kol.coldfront.net/thekolwiki/index.php/Witchess_Queen) [pieces](https://kol.coldfront.net/thekolwiki/index.php/Witchess_Witch). Once you start getting more and more [free fight sources](https://kol.coldfront.net/thekolwiki/index.php/Free_Fights), the less reliant you will be on the trainset and bowling ball for xp (they may be swapped out). Shinies that reduce turncount on the tests will then reduce the reliance on the cookbookbat for turngen.

| IotM                                                                                                                                  | Use     |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| [GameInformPowerDailyPro subscription card](https://kol.coldfront.net/thekolwiki/index.php/GameInformPowerDailyPro_subscription_card) | scalers |
| [Airplane charter: Spring Break Beach](https://kol.coldfront.net/thekolwiki/index.php/Airplane_charter:_Spring_Break_Beach)           | scalers |
| [airplane charter: Conspiracy Island](https://kol.coldfront.net/thekolwiki/index.php/Airplane_charter:_Conspiracy_Island)             | scalers |
| [airplane charter: Dinseylandfill](https://kol.coldfront.net/thekolwiki/index.php/Airplane_charter:_Dinseylandfill)                   | scalers |
| [airplane charter: That 70s Volcano](https://kol.coldfront.net/thekolwiki/index.php/Airplane_charter:_That_70s_Volcano)               | scalers |
| [airplane charter: The Glaciest](https://kol.coldfront.net/thekolwiki/index.php/Airplane_charter:_The_Glaciest)                       | scalers |
| [Neverending Party invitation envelope](https://kol.coldfront.net/thekolwiki/index.php/Neverending_Party_invitation_envelope)         | scalers |
| [January's Garbage Tote](https://kol.coldfront.net/thekolwiki/index.php/January%27s_Garbage_Tote)                                     | xp      |
| [unbreakable umbrella](https://kol.coldfront.net/thekolwiki/index.php/Unbreakable_umbrella)                                           | xp      |
| [combat lover's locket](https://kol.coldfront.net/thekolwiki/index.php/Combat_lover%27s_locket)                                       | xp      |

### Required Resources

Because we do not rely heavily on too many IotMs to carry us through the SCCS run, we will have certain hard requirements on a bunch of skills and familiars that will enable this run. <br />
<sub><sup>Note that the shinier you are, the easier it becomes to replace these requirements, so they would eventually become soft or even non-requirements (especially those extremely small contributors).</sup></sub> <br />

| Familiars                                                                        | Use      |
| -------------------------------------------------------------------------------- | -------- |
| [Disgeist](<https://kol.coldfront.net/thekolwiki/index.php/Disgeist_(familiar)>) | NC test  |
| [Exotic Parrot](https://kol.coldfront.net/thekolwiki/index.php/Exotic_Parrot)    | hot test |

| Skills                                                                                                                              | Use                   |
| ----------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| [Inscrutable Gaze](<https://kol.coldfront.net/thekolwiki/index.php/Inscrutable_Gaze_(skill)>)                                       | xp%                   |
| [Song of Bravado](<https://kol.coldfront.net/thekolwiki/index.php/Song_of_Bravado_(skill)>)                                         | stat%                 |
| [Get Big](https://kol.coldfront.net/thekolwiki/index.php/Get_Big)                                                                   | stat%                 |
| [Stevedave's Shanty of Superiority](<https://kol.coldfront.net/thekolwiki/index.php/Stevedave%27s_Shanty_of_Superiority_(skill)>)   | stat%                 |
| [The Ode to Booze](https://kol.coldfront.net/thekolwiki/index.php/The_Ode_to_Booze)                                                 | adv                   |
| [Pizza Lover](https://kol.coldfront.net/thekolwiki/index.php/Pizza_Lover)                                                           | adv + xp              |
| [Empathy of the Newt](https://kol.coldfront.net/thekolwiki/index.php/Empathy_of_the_Newt)                                           | fam wt                |
| [Leash of Linguini](<https://kol.coldfront.net/thekolwiki/index.php/Leash_of_Linguini_(skill)>)                                     | fam wt                |
| [Amphibian Sympathy](https://kol.coldfront.net/thekolwiki/index.php/Amphibian_Sympathy)                                             | fam wt                |
| [Pride of the Puffin](<https://kol.coldfront.net/thekolwiki/index.php/Pride_of_the_Puffin_(skill)>)                                 | ML                    |
| [Drescher's Annoying Noise](<https://kol.coldfront.net/thekolwiki/index.php/Drescher%27s_Annoying_Noise_(skill)>)                   | ML                    |
| [Ur-Kel's Aria of Annoyance](<https://kol.coldfront.net/thekolwiki/index.php/Ur-Kel%27s_Aria_of_Annoyance_(skill)>)                 | ML                    |
| [The Sonata of Sneakiness](<https://kol.coldfront.net/thekolwiki/index.php/The_Sonata_of_Sneakiness_(skill)>)                       | non-combat            |
| [Smooth Movement](https://kol.coldfront.net/thekolwiki/index.php/Smooth_Movement)                                                   | non-combat            |
| [Asbestos Heart](https://kol.coldfront.net/thekolwiki/index.php/Asbestos_Heart)                                                     | hot resist            |
| [Elemental Saucesphere](<https://kol.coldfront.net/thekolwiki/index.php/Elemental_Saucesphere_(effect)>)                            | hot resist            |
| [Tolerance of the Kitchen](https://kol.coldfront.net/thekolwiki/index.php/Tolerance_of_the_Kitchen)                                 | hot resist            |
| [Astral Shell](<https://kol.coldfront.net/thekolwiki/index.php/Astral_Shell_(effect)>)                                              | hot resist            |
| [Crimbo Training: Coal Taster](https://kol.coldfront.net/thekolwiki/index.php/Crimbo_Training:_Coal_Taster)                         | hot resist            |
| [Bow-Legged Swagger](<https://kol.coldfront.net/thekolwiki/index.php/Bow-Legged_Swagger_(skill)>)                                   | doubles wdmg          |
| [Steely-Eyed Squint](<https://kol.coldfront.net/thekolwiki/index.php/Steely-Eyed_Squint_(skill)>)                                   | doubles item drop     |
| [Shattering Punch](https://kol.coldfront.net/thekolwiki/index.php/Shattering_Punch)                                                 | free kill             |
| [Gingerbread Mob Hit](https://kol.coldfront.net/thekolwiki/index.php/Gingerbread_Mob_Hit)                                           | free kill             |
| [Snokebomb](https://kol.coldfront.net/thekolwiki/index.php/Snokebomb)                                                               | free kill             |
| [Saucegeyser](https://kol.coldfront.net/thekolwiki/index.php/Saucegeyser)                                                           | attacking spell       |
| [Advanced Saucecrafting](https://kol.coldfront.net/thekolwiki/index.php/Advanced_Saucecrafting)                                     | saucecrafting         |
| [The Way of Sauce](https://kol.coldfront.net/thekolwiki/index.php/The_Way_of_Sauce)                                                 | saucecrafting         |
| [Impetuous Sauciness](https://kol.coldfront.net/thekolwiki/index.php/Impetuous_Sauciness)                                           | saucecrafting         |
| [Expert Corner-Cutter](https://kol.coldfront.net/thekolwiki/index.php/Expert_Corner-Cutter)                                         | saucecrafting         |
| [Prevent Scurvy and Sobriety](https://kol.coldfront.net/thekolwiki/index.php/Prevent_Scurvy_and_Sobriety)                           | saucecrafting/turngen |
| [Perfect Freeze](https://kol.coldfront.net/thekolwiki/index.php/Perfect_Freeze)                                                     | turngen               |
| [Drinking to Drink](https://kol.coldfront.net/thekolwiki/index.php/Drinking_to_Drink)                                               | turngen               |
| [Inner Sauce](https://kol.coldfront.net/thekolwiki/index.php/Inner_Sauce)                                                           | mp regen              |
| [Simmer](https://kol.coldfront.net/thekolwiki/index.php/Simmer)                                                                     | test                  |
| [Master Saucier](https://kol.coldfront.net/thekolwiki/index.php/Master_Saucier)                                                     | test                  |
| [Subtle and Quick to Anger](https://kol.coldfront.net/thekolwiki/index.php/Subtle_and_Quick_to_Anger)                               | test                  |
| [Bow-Legged Swagger](<https://kol.coldfront.net/thekolwiki/index.php/Bow-Legged_Swagger_(skill)>)                                   | test                  |
| [Steely-Eyed Squint](<https://kol.coldfront.net/thekolwiki/index.php/Steely-Eyed_Squint_(skill)>)                                   | test                  |
| [Always Never Not Guzzling](https://kol.coldfront.net/thekolwiki/index.php/Roasted_vegetable_of_Jarlsberg)                          | test                  |
| [Fat Leon's Phat Loot Lyric](<https://kol.coldfront.net/thekolwiki/index.php/Fat_Leon%27s_Phat_Loot_Lyric_(skill)>)                 | test                  |
| [Mad Looting Skillz](https://kol.coldfront.net/thekolwiki/index.php/Mad_Looting_Skillz)                                             | test                  |
| [Object Quasi-Permanence](https://kol.coldfront.net/thekolwiki/index.php/Object_Quasi-Permanence)                                   | test                  |
| [Powers of Observatiogn](https://kol.coldfront.net/thekolwiki/index.php/Powers_of_Observatiogn)                                     | test                  |
| [Bind Spice Ghost](https://kol.coldfront.net/thekolwiki/index.php/Bind_Spice_Ghost)                                                 | test                  |
| [Thief Among the Honorable](https://kol.coldfront.net/thekolwiki/index.php/Thief_Among_the_Honorable)                               | test                  |
| [Natural Born Scrabbler](https://kol.coldfront.net/thekolwiki/index.php/Natural_Born_Scrabbler)                                     | test                  |
| [20/20 Vision](<https://kol.coldfront.net/thekolwiki/index.php/20/20_Vision_(skill)>)                                               | test                  |
| [Carol of the Bulls](<https://kol.coldfront.net/thekolwiki/index.php/Carol_of_the_Bulls_(skill)>)                                   | test                  |
| [Carol of the Hells](<https://kol.coldfront.net/thekolwiki/index.php/Carol_of_the_Hells_(skill)>)                                   | test                  |
| [Song of Sauce](<https://kol.coldfront.net/thekolwiki/index.php/Song_of_Sauce_(skill)>)                                             | test                  |
| [Song of the North](<https://kol.coldfront.net/thekolwiki/index.php/Song_of_the_North_(skill)>)                                     | test                  |
| [Jackasses' Symphony of Destruction](<https://kol.coldfront.net/thekolwiki/index.php/Jackasses%27_Symphony_of_Destruction_(skill)>) | test                  |
| [Scowl of the Auk](<https://kol.coldfront.net/thekolwiki/index.php/Scowl_of_the_Auk_(skill)>)                                       | test                  |
| [Rage of the Reindeer](<https://kol.coldfront.net/thekolwiki/index.php/Rage_of_the_Reindeer_(skill)>)                               | test                  |
| [Tenacity of the Snapper](<https://kol.coldfront.net/thekolwiki/index.php/Tenacity_of_the_Snapper_(skill)>)                         | test                  |
| [Claws of the Walrus](https://kol.coldfront.net/thekolwiki/index.php/Claws_of_the_Walrus)                                           | test                  |
| [Blessing of the War Snapper](<https://kol.coldfront.net/thekolwiki/index.php/Blessing_of_the_War_Snapper_(skill)>)                 | test                  |

### Highly-recommended Resources

Chances are, it's going to be super tight if you only have the resources stated above. There are a bunch of potentially cheap-ish (more expensive than 1m, but cheaper than an IotM) things that can greatly aid your runs. Generally, you want to get anything that aids in leveling (gives more myst% and/or free fights) <br />
<sub><sup>Note that free fight sources are super useful - this includes NEP, witchess, backup camera etc.</sup></sub> <br />

| Useful stuff                                                                           | Use   |
| -------------------------------------------------------------------------------------- | ----- |
| Fully Upgraded [Telescope](https://kol.coldfront.net/thekolwiki/index.php/A_Telescope) | stat% |

### Basic Run Plan

This plan tracks the most pessimistic adventure gains from consumables. You should expect more adventures on average (realistically, you should get roughly ~15.5adv more on average).

> Run Start (40 adv remaining) <br/>

- Autosell all pork gems <br/>
- Get codpiece, create and autosell oil cap <br/>
- Equip codpiece to increase mp limit (coiling wire with Inner Sauce restores 60mp) <br/>
- Pull and use borrowed time (60 turns remaining, 0/0/0 organs) <br/>

> Coil Wire (60 turns, 0 adv remaining, 0/0/0 organs) <br/>

- Get 5%mystxp from April Shower and cast Inscrutable Gaze <br/>
- Use ten-percent bonus <br/>
- Top up your clan hot dog stand with 10 cranberries, then eat 1x one with everything (6+ adv remaining, 2/0/0 organs) <br/>
- Pull and consume 1x roasted vegetable foccacia (+2adv from pizza lover) (23+ adv remaining, 4/0/0 organs) <br/>
- Cast ode and drink 2x Bee's Knees (+5adv from Blender) (44+ adv remaining, 4/4/0 organs) <br/>
- Buy red and blue rockets <br/>
- Get fortune teller 100%myst buff <br/>
- Cast Prevent Scurvy and Sobriety <br/>
- Use 1 reagent to craft 3x ointment of the occults and get the mystically oiled buff, which should last for 45turns <br/>
- Set Annoy-o-Tron ML to 10 <br/>
- (Set mood to) buy and use glittery mascara to always maintain Glittering Eyelashes <br/>
- Pull and use a Dinsey daypass <br/>
- Maximize myst and equip your cookbookbat <br/>
- Configure your trainset (coal/brain silo/viewing platform/water bridge/fizzy tower/frozen tower/meat/candy) <br/>
- Spend 1adv in Gator's to get red and blue rocket buffs (no free kills - adventure needs to be spent to restore mp; ensure you have at least 24mp for saucegeyser) (1 turn, 43+ adv remaining, 4/4/0 organs) <br/>
- Pull and consume 1x calzone of legend (+2adv from pizza lover) (63+ adv remaining, 6/4/0 organs) <br/>
- Cast Perfect Freeze, craft and drink a Perfect Dark and Stormy (with ode) (84+ adv remaining, 6/7/0 organs)
- Cast/acquire Stevedave's Shanty, Big, Ur-kel's Aria, Pride of the Puffin and Drescher's Annoying Noise (and other stat/stat%/ML buffs) <br/>
- Purchase a yellow rocket<br/>
- Spend up to 3 turns banishing, first with your cosmic bowling ball, then subsequently with snokebomb in [the skeleton store](https://kol.coldfront.net/thekolwiki/index.php/The_Skeleton_Store) until you find a [novelty tropical skeleton](https://kol.coldfront.net/thekolwiki/index.php/Novelty_tropical_skeleton). You should be guaranteed to hit the novelty tropical skeleton by the 3rd try if you have set up your ice house correctly. <br/>
- Yellow rocket the novelty tropical skeleton (1 turn, 83+ adv remaining, 6/7/0 organs)<br/>
- Continue banishing until all 4 (or more) banishes have been used (in total, we should have advanced the CBB and trainset counter 5 times)<br/>
- Acquire and equip an oversized sparkler the moment you have enough meat <br/>
- Whenever you retrieve your bowling ball, always [Bowl Sideways](https://kol.coldfront.net/thekolwiki/index.php/Bowl_Sideways) in the next combat<br/>
- Spend 5 adventures (without free kills) in Gator's to get CBB legendary ingredients (5 turns, 78+ adv remaining, 6/7/0 organs)
- Craft and eat 1x roasted vegetable of Jarlsberg (84+ adv remaining, 7/7/0 organs)
- Spend ~31 adventures + 4 free kills (shattering punch + mob hit) in Gator's (reconfigure trainset to ensure 7 brain silos), hitting no less than 174 base myst and ensuring that you have gotten your CBB to drop ingredients 4 times (~31 turns, 53+ adv remaining, 7/7/0 organs) <br/>
- Drink 6x astral pilsners (with ode) while leveling in Gator's as soon as you hit level 11 (125+ adv remaining, 7/13/0 organs) <br/>
- Use Lyle's buff as late as possible, ensuring that you have at least 3 turns left of the buff to last through the myst and hp test<br/>

- Cook and consume 1x baked veggie ricotta casserole (140+ adv remaining, 9/13/0 organs) <br/>
- Buff up as necessary for the myst test <br/>

> Myst Test (1 turn, 139+ adv remaining, 9/13/0 organs) <br/>

- Save the reward <br/>
- Cast ode and drink 1x Bee's Knees (147+ adv remaining, 9/15/0 organs) <br/>
- Pull and eat 1x Deep Dish of Legend (+2adv from pizza lover) (167+ adv remaining, 11/15/0 organs)<br/>
- Buff up as necessary for the HP test <br/>

> HP Test (1 turn, 166+ adv remaining, 11/15/0 organs) <br/>

- Save the reward <br/>
- Buy a desert pass (you should have enough meat from the meat train)<br/>
- Buy and use an all-purpose flower<br/>
- Buy and use a hair spray<br/>
- Craft and consume 2x Pete's Wiley Whey Bar and 1x Petes Rich Ricotta (182+ adv remaining, 14/15/0 organs)<br/>
- Craft and use an oil of expertise<br/>
- Use the pocket maze (should save ~11 turns here, rather than 4 turns on the hot test)<br/>
- Buff up as necessary for the Mox test <br/>

> Mox Test (~19 turns, 163+ adv remaining, 14/15/0 organs) <br/>

- Use the shady shades (should save ~12 turns here, rather than 12 turns on the NC test, and ensures we will have [In the Depths](https://kol.coldfront.net/thekolwiki/index.php/In_the_Depths) from the deep dish pizza lasting till we use our Disgeist for the NC test)<br/>
- Craft and use a philter of phorce and an oil of expertise<br/>
- Buy and use a Ben-Gal™ Balm<br/>
- Buff up as necessary for the Mus test <br/>

> Mus Test (~15 turns, 148+ adv remaining, 14/15/0 organs) <br/>

- Save the reward <br/>
- You should have at least a 20lbs cookbookbat (after 40adv of +10famxp), +15lbs from skills, +15lbs from Deep Dish of Legend, +10lbs from astral pet sweater, +5lbs from pool table <br/>

> Fam Test (47 turns, 101+ adv remaining, 14/15/0 organs) <br/>

- Purchase a porkpie-mounted popper <br/>
- Grab Silent Running from the pool <br/>
- Equip your Disgeist with your astral pet sweater (base 1lbs, +15lbs from skills, +15lbs from Deep Dish of Legend, +10lbs from astral pet sweater)
- You should have -20% from Fam Test, -10% from codpiece, -10% from skills, -5% from the porkpie-mounted popper, -5% from silent running and -5% from your Disgeist (combat freq) <br/>

> NC Test (27 turns, 74+ adv remaining, 14/15/0 organs) <br/>

- Save the reward <br/>
- Buy an obsidian nutcracker <br/>
- Cast simmer (1 turn, 73+ adv remaining, 14/15/0 organs) <br/>
- You should have +100% from Song of Sauce, +100% from simmer, +100% from carol of the hells, +50% from pool table, 30% from obsidian nutcracker, 10% from Master Saucier and 10% from Subtle and Quick to Anger (totalling +400%sdmg)<br/>
- You should also have +50 from codpiece (flat sdmg) <br/>

> Spell Test (51 turns, 22+ adv remaining, 14/15/0 organs) <br/>

- Use a clover to grab a cyclops eyedrops from the Limerick Dungeon (1 turn, 21+ adv remaining, 14/15/0 organs) <br/>
- [Bowl Straight Up](https://kol.coldfront.net/thekolwiki/index.php/Bowl_Straight_Up) and yellow rocket a faxed factory worker (female) (1 turn, 20+ adv remaining, 14/15/0 organs)
- Use Mus Test reward and cyclops eyedrops <br/>
- Summon Spice Ghost <br/>
- Craft and eat a roasted vegetable of Jarlsberg (26+ adv remaining, 15/15/0 organs)<br/>
- +60%booze from Mus Test reward, +25%booze from Always Never Not Guzzling (totalling +85%booze)
- +100%item from cyclops eyedrops, +100% from wizard sight, +25%item from Cosmic Ball in the Air, +20%item from Phat Loot, +20%item from Mad Looting Skillz, +20%item from oversized sparkler, +10%item from Object Quasi-Permeance, +10%item from Powers of Observatiogn, +10%item from 20/20 Vision, +5%item from Spice Ghost, +5%item from Natural Born Scrabbler and +5%item from Thief among the Honorable (totalling 330%item) <br/>
- Cast Steely-Eyed Squint (+330%item)<br/>

> Item Test (33 turns, -7+ adv remaining, 15/15/0 organs) <br/>

- Cast leash of linguini and empathy<br/>
- Use NC Test reward<br/>
- Use your parrot and equip it with the astral pet sweater (base 1lbs, +15lbs from skills, +10lbs from astral pet sweater, +20lbs from NC Test reward)<br/>
- You should have +3res from Asbestos Heart, +3res from Tolerance of the Kitchen, +2res from Elemental Saucesphere, +1res from Astral Shell, +1res from Crimbo 2023 passive, +3res from Feeling no Pain, +5res from lava-proof pants, +4res from heat-resistance gloves and +3res from parrot (totalling +29res)<br/>

> Hot Resist Test (35 turns, -42+ adv remaining, 15/15/0 organs) <br/>

- Buy a [goofily-plumed helmet](https://kol.coldfront.net/thekolwiki/index.php/Goofily-plumed_helmet) to get [Weapon of Mass Destruction](https://kol.coldfront.net/thekolwiki/index.php/Weapon_of_Mass_Destruction) from the Mad Hatter<br/>
- +100% from song of the north, +100% from carol of the bulls, +50% from pool table, +30% from hatter buff (totalling +280%) <br/>
- +12 from Jackasses' Symphony, +10 from Scowl of the Auk, +10 from Rage of the Reindeer, +8 from Tenacity of the Snapper, +7 from Claws of the Walrus and +5 from Disdain of the War Snapper (totalling +52 flat) <br/>
- Cast bow-legged swagger (+280%wdmg +52flat) <br/>

> Weapon Test (47 turns, -89+ adv remaining, 15/15/0 organs) <br/>
> Donate your body to science!<br/>
