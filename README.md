# InstantSCCS

`InstantSCCS` is a softcore one-day Community Service script meant for looping in Kingdom of Loathing, and is designed to work for low-to-mid-shiny accounts (i.e. accounts with minimal expensive items/skills). The user is expected to have a bunch of softcore-permed skills, and at least ~7 IotMs in order to enable this (one of which is the [Clan VIP Lounge key](https://wiki.kingdomofloathing.com/Clan_VIP_Lounge_key)).<br/>

## Installation

To install the script, use the following command in the KoLMafia CLI.<br/>

```text
git checkout https://github.com/Pantocyclus/instantsccs.git release
```

## Usage

For those who are interested in using `InstantSCCS` as is, the following sections detail the prerequisites, choices in Valhalla, and required resources.<br/>

### Before Ascending

- Ensure that you have the following items (which will be pulled/used during the run): 1x [one-day ticket to Dinseylandfill](https://wiki.kingdomofloathing.com/One-day_ticket_to_Dinseylandfill), 1x [Calzone of Legend](https://wiki.kingdomofloathing.com/Calzone_of_Legend), 1x [Deep Dish of Legend](https://wiki.kingdomofloathing.com/Deep_Dish_of_Legend), 1x [Pizza of Legend](https://wiki.kingdomofloathing.com/Pizza_of_Legend) and 1x [borrowed time](https://wiki.kingdomofloathing.com/Borrowed_time).
  - If you have [any](https://wiki.kingdomofloathing.com/Neverending_Party_invitation_envelope) [one](https://wiki.kingdomofloathing.com/Airplane_charter:_Spring_Break_Beach) [of](https://wiki.kingdomofloathing.com/Airplane_charter:_Conspiracy_Island) [the](https://wiki.kingdomofloathing.com/Airplane_charter:_Dinseylandfill) [scaler](https://wiki.kingdomofloathing.com/Airplane_charter:_That_70s_Volcano) [zones](https://wiki.kingdomofloathing.com/Airplane_charter:_The_Glaciest) or a [Tome of Clip Art](https://wiki.kingdomofloathing.com/Tome_of_Clip_Art), you may want to have a [non-Euclidean angle](https://wiki.kingdomofloathing.com/Non-Euclidean_angle) available (for more efficient powerleveling).
  - If you have both a scaler zone and a [Tome of Clip Art](https://wiki.kingdomofloathing.com/Tome_of_Clip_Art), you may want to have both a [non-Euclidean angle](https://wiki.kingdomofloathing.com/Non-Euclidean_angle) and an [Abstraction: Category](https://wiki.kingdomofloathing.com/Abstraction:_category) before ascending.
- Ensure that you have access to a clan with a fully stocked [VIP lounge](https://wiki.kingdomofloathing.com/VIP_Lounge). Also ensure that the [Clan Floundry](<https://wiki.kingdomofloathing.com/Clan_Floundry_(VIP_Lounge)>) has sufficient stocks of cod to pull a [codpiece](https://wiki.kingdomofloathing.com/Codpiece).
- Have any one of the [factory-irregular skeleton](https://wiki.kingdomofloathing.com/Factory-irregular_skeleton), [remaindered skeleton](https://wiki.kingdomofloathing.com/Remaindered_skeleton) or [swarm of skulls](https://wiki.kingdomofloathing.com/Swarm_of_skulls) banished in your [ice house](https://wiki.kingdomofloathing.com/Ice_house).
- Have a [factory worker (female)](<https://wiki.kingdomofloathing.com/Factory_worker_(female)>), [Witchess King](https://wiki.kingdomofloathing.com/Witchess_King) and [red skeleton](https://wiki.kingdomofloathing.com/Red_skeleton) registered in your [combat lover's locket](https://wiki.kingdomofloathing.com/Combat_lover%27s_locket).
- Have at least 10 ascensions so that you can purchase an [all-purpose flower](https://wiki.kingdomofloathing.com/All-purpose_flower) from [The Gift Shop](https://wiki.kingdomofloathing.com/The_Gift_Shop); this should include at least 5 100% familiar runs so that you have the [astral pet sweater](https://wiki.kingdomofloathing.com/Astral_pet_sweater) unlocked.
- Have the following [cookbookbat](https://wiki.kingdomofloathing.com/Cookbookbat) recipes read: [honey bun of Boris](https://wiki.kingdomofloathing.com/Recipe_of_Before_Yore:_honey_bun_of_Boris), [Pete's wiley whey bar](https://wiki.kingdomofloathing.com/Pete%27s_wiley_whey_bar), [Boris's bread](https://wiki.kingdomofloathing.com/Recipe_of_Before_Yore:_Boris%27s_bread), [roasted vegetable of Jarlsberg](https://wiki.kingdomofloathing.com/Recipe_of_Before_Yore:_roasted_vegetable_of_J.), [Pete's rich ricotta](https://wiki.kingdomofloathing.com/Recipe_of_Before_Yore:_Pete%27s_rich_ricotta), [plain calzone](https://wiki.kingdomofloathing.com/Recipe_of_Before_Yore:_plain_calzone) and [baked veggie ricotta](https://wiki.kingdomofloathing.com/Recipe_of_Before_Yore:_baked_veggie_ricotta).
- You should run `instantsccs sim` to check if you have all the necessary requirements.<br/>

  - Note that while not a lot of requirements are listed as necessary, you are highly encouraged to have most, if not all, of the highly recommended resources (or have shinies to make up for whichever is lacking).
  - The script will not break if you are lacking any particular non-necessary requirement, but it will also not guarantee you success for a one-day ascension if all you have are only the necessary requirements and nothing else.
  - It will, however, almost certainly break for low shinies if any of the requirements marked "Necessary" are missing.
    - Slightly shinier accounts may still make it through without any issues if the [other various supported IotMs](https://github.com/Pantocyclus/InstantSCCS/blob/main/ITEMS.md) are able to make up for any of the missing necessary items.

  ![image](https://user-images.githubusercontent.com/98746573/225634734-8792246c-cea1-4f4a-81c5-315b252500d6.png)

### In Valhalla

Because we rely heavily on the [cookbookbat](https://wiki.kingdomofloathing.com/Cookbookbat) ingredients, (1) the most basic route only works for [Saucerors](https://wiki.kingdomofloathing.com/Sauceror), and (2) the [astral six-pack](https://wiki.kingdomofloathing.com/Astral_six-pack) is the only useful astral consumable since it doesn't compete with the stomach-space required by the [cookbookbat](https://wiki.kingdomofloathing.com/Cookbookbat). The [pet sweater](https://wiki.kingdomofloathing.com/Astral_pet_sweater) allows us to benefit from the [Disgeist](<https://wiki.kingdomofloathing.com/Disgeist_(familiar)>) in the NC test, and [The Opossum](https://wiki.kingdomofloathing.com/The_Opossum) gives us +5 turngen and free +11ML from the [Mind Control Device](https://wiki.kingdomofloathing.com/Mind_control_device).<br/>

- [astral six-pack](https://wiki.kingdomofloathing.com/Astral_six-pack) from The Deli Lama<br/>
- [astral pet sweater](https://wiki.kingdomofloathing.com/Astral_pet_sweater) from Pet Heaven<br/>
- [Sauceror](https://wiki.kingdomofloathing.com/Sauceror)<br/>
- [The Opossum](https://wiki.kingdomofloathing.com/The_Opossum)<br/>
- [Softcore](https://wiki.kingdomofloathing.com/Ascension#Normal_Difficulty)<br/>

### Required IotMs

IotMs are incredibly expensive, and they tend to increase in price the longer they have existed due to the artificial supply limit. Unfortunately, they are incredibly powerful too, and so we will need to rely on them to enable a 1-day SCCS. There is a hard requirement on the [Clan VIP Lounge key](https://wiki.kingdomofloathing.com/Clan_VIP_Lounge_key), as it is one of the few "IotMs" that are recurring (and thus are not gated by the same artificial supply limit as mentioned above), and it provides access to >= 30 Mr. A's-worth of IotMs. <br />
One of the hardest tasks in CS is leveling, due to the limited resources we have access to to optimise for the stat tests (HP, Mus, Myst, Mox). The other required IotMs thus have to provide incredible statgain and/or turngen/turnsave potential. The current routing is built around the following 6 other IotMs.<br/>

| IotM                                                                                    | Use         |
| --------------------------------------------------------------------------------------- | ----------- |
| [Clan VIP Lounge key](https://wiki.kingdomofloathing.com/Clan_VIP_Lounge_key)           | many things |
| [model train set](https://wiki.kingdomofloathing.com/Model_train_set)                   | xp          |
| [cosmic bowling ball](https://wiki.kingdomofloathing.com/Cosmic_bowling_ball)           | xp + banish |
| [cookbookbat](https://wiki.kingdomofloathing.com/Cookbookbat)                           | turngen     |
| [unbreakable umbrella](https://wiki.kingdomofloathing.com/Unbreakable_umbrella)         | many things |
| [combat lover's locket](https://wiki.kingdomofloathing.com/Combat_lover%27s_locket)     | many things |
| [closed-circuit pay phone](https://wiki.kingdomofloathing.com/Closed-circuit_pay_phone) | many things |

<sub><sup>As of April 2023, the introduction of the [cursed monkey's paw](https://wiki.kingdomofloathing.com/Cursed_monkey%27s_paw) (which was released after this route was planned) could potentially wholly replace the cosmic bowling ball and unbreakable umbrella - the paw is currently supported but a minimal run with this has not been tested, so this remains a (highly likely) hypothetical. </sup></sub><br/>

### Absolutely Non-Negotiable Requirements

Following the routing laid out in the Basic Run Plan, this script will almost definitely fail if you do not meet all of the following requirements:<br/>

- [Ascend](https://wiki.kingdomofloathing.com/Ascend) as a [Sauceror](https://wiki.kingdomofloathing.com/Sauceror) into [softcore](https://wiki.kingdomofloathing.com/Ascension#Normal_Difficulty) [Community Service](https://wiki.kingdomofloathing.com/Community_Service)<br/>
- Own a [Clan VIP Lounge key](https://wiki.kingdomofloathing.com/Clan_VIP_Lounge_key), [model train set](https://wiki.kingdomofloathing.com/Model_train_set), [cosmic bowling ball](https://wiki.kingdomofloathing.com/Cosmic_bowling_ball) and [cookbookbat](https://wiki.kingdomofloathing.com/Cookbookbat)<br/>
- Have [Advanced Saucecrafting](https://wiki.kingdomofloathing.com/Advanced_Saucecrafting), [Saucegeyser](https://wiki.kingdomofloathing.com/Saucegeyser) and [Snokebomb](https://wiki.kingdomofloathing.com/Snokebomb) softcore permed<br/>
- Have a [Pizza of Legend](https://wiki.kingdomofloathing.com/Pizza_of_Legend), [Deep Dish of Legend](https://wiki.kingdomofloathing.com/Deep_Dish_of_Legend) and [Calzone of Legend](https://wiki.kingdomofloathing.com/Calzone_of_Legend) available in [Hagnk's](https://wiki.kingdomofloathing.com/Hagnk%27s_Ancestral_Mini-Storage)<br/>
- Have access to [any](https://wiki.kingdomofloathing.com/Neverending_Party_invitation_envelope) [one](https://wiki.kingdomofloathing.com/Airplane_charter:_Spring_Break_Beach) [of](https://wiki.kingdomofloathing.com/Airplane_charter:_Conspiracy_Island) [the](https://wiki.kingdomofloathing.com/Airplane_charter:_Dinseylandfill) [scaler](https://wiki.kingdomofloathing.com/Airplane_charter:_That_70s_Volcano) [zones](https://wiki.kingdomofloathing.com/Airplane_charter:_The_Glaciest), either by owning the charters or a [daypass](https://wiki.kingdomofloathing.com/One-day_ticket_to_Dinseylandfill)<br/>
- Have either the [factory-irregular skeleton](https://wiki.kingdomofloathing.com/Factory-irregular_skeleton), [remaindered skeleton](https://wiki.kingdomofloathing.com/Remaindered_skeleton) or [swarm of skulls](https://wiki.kingdomofloathing.com/Swarm_of_skulls) banished in your [ice house](https://wiki.kingdomofloathing.com/Ice_house)
- Have at least 10 ascensions<br/>
- Know all of the following [cookbookbat](https://wiki.kingdomofloathing.com/Cookbookbat) recipes: [honey bun of Boris](https://wiki.kingdomofloathing.com/Recipe_of_Before_Yore:_honey_bun_of_Boris), [Pete's wiley whey bar](https://wiki.kingdomofloathing.com/Pete%27s_wiley_whey_bar), [Boris's bread](https://wiki.kingdomofloathing.com/Recipe_of_Before_Yore:_Boris%27s_bread), [roasted vegetable of Jarlsberg](https://wiki.kingdomofloathing.com/Recipe_of_Before_Yore:_roasted_vegetable_of_J.), [Pete's rich ricotta](https://wiki.kingdomofloathing.com/Recipe_of_Before_Yore:_Pete%27s_rich_ricotta), [plain calzone](https://wiki.kingdomofloathing.com/Recipe_of_Before_Yore:_plain_calzone) and [baked veggie ricotta](https://wiki.kingdomofloathing.com/Recipe_of_Before_Yore:_baked_veggie_ricotta).<br/>

Run `instantsccs sim` to ensure you have all the necessary requirements before you ascend!<br/>

<sub><sup>Many recent updates in the later half of 2023, which includes support for various new IotMs, means that many of these are no longer hard requirements. However, the enabling features of these requirements are non-replaceable.<br/>
For example, the [ice house](https://wiki.kingdomofloathing.com/Ice_house) may be replaced by owning a [Comprehensive Cartographic Compendium](https://wiki.kingdomofloathing.com/Comprehensive_Cartographic_Compendium) so that we are able to force a combat with the [novelty tropical skeleton](https://wiki.kingdomofloathing.com/Novelty_tropical_skeleton). If you have enough turnsaves from owning [various other supported IotMs](https://github.com/Pantocyclus/InstantSCCS/blob/main/ITEMS.md), you might also be able to completely skip owning a [cookbookbat](https://wiki.kingdomofloathing.com/Cookbookbat) and pulling/consuming any of its related foods.<br/>
As stated in the [FAQ](https://github.com/Pantocyclus/InstantSCCS/?tab=readme-ov-file#faq), at the shiniest levels, this script supports running as a [hardcore](https://wiki.kingdomofloathing.com/Hardcore) (0 pulls) [seal clubber](https://wiki.kingdomofloathing.com/Seal_Clubber) (not sauceror), with a competitive turncount and organ usage (0 cookbookbat foods eaten and 0 VIP clan lounge drinks drunk) as compared to many other high-shiny scripts. </sup></sub><br/>

### Basic Run Plan

See the run plan [here](https://github.com/Pantocyclus/InstantSCCS/blob/main/RUNPLAN.md), which also provides a summary of the resources/organs used in the most basic route.<br/>

## FAQ

### Does this work in HC?

This script is hardcoded to eat the 3x T4 cookbookbat foods (which are all pulled), and it is highly unlikely that you will be able to generate enough ingredients to cook all of them in HC (without any pulls). However, it can be (and has been) done, although this is strongly discouraged.<br/>

### Does this script work for other classes / Why Sauceror?

There is currently only 1 facial expression that gives xp% - Inscrutable Gaze (for myst xp%). For low shinies, this can make or break the run, so this largely limits us to only myst classes.<br/>

With minimal resources, we will also need to craft both the offstat T3 cookbookbat foods for the stat% they give (to clear the stat tests), which necessitates having all the different ingredients dropping before our powerleveling ends in ~55 turns (excess turns result in increased turncount, requiring more turngen). This rules out Pastamancer and Disco Bandit.<br/>

We will also need 2 Vegetable of Jarlsberg drops in those same ~55 turns in order to craft the myst T2 (for item%; on top of the T3 foods we're crafting above), and this additionally rules out Turtle Tamer and Accordion Thief.<br/>

As an added benefit, the MP regen from curse of weaksauce and soul food from being a Sauceror, as well as the additional crafted reagent potions for powerleveling, tends to be invaluable to low shiny accounts.<br/>

However, if you are sufficiently shiny, the script has been proven to work with all classes. Note that this requires having 0 reliance on any CBB foods that are crafted in run. Additionally, we require [Prevent Scurvy and Sobriety](https://wiki.kingdomofloathing.com/Prevent_Scurvy_and_Sobriety) to be permed for Mus classes; for Mox classes, you must have an [Evil Olive](https://wiki.kingdomofloathing.com/Evil_Olive) available in your [locket](https://wiki.kingdomofloathing.com/Combat_lover%27s_locket), or own both a [Chest Mimic](https://wiki.kingdomofloathing.com/Chest_Mimic) familiar and an [Apriling band helmet](https://wiki.kingdomofloathing.com/Apriling_band_helmet).<br/>

### What IotMs are currently supported and how are they being used by the script?

InstantSCCS supports a very large number of IotMs, but, as a generalist script, may not be able to eke out every last benefit from each IotM. For exact specifics, refer to [this list](https://github.com/Pantocyclus/InstantSCCS/blob/main/ITEMS.md).<br/>

### I'm pretty shiny - can I get the script to save certain resources/organs?

Run `instantsccs savedresources` to see a list of preferences you can set to save specific resources. You may also explicitly exclude acquiring certain buffs by typing `set instant_explicitlyExcludedBuffs=<comma-separated effect IDs>` (and confirming that the correct buffs have been excluded in the savedresources printout).<br/>

![image](https://github.com/Pantocyclus/InstantSCCS/assets/98746573/3e836c0b-5e89-4a47-8b9c-bfb618ddfba0)<br/>

Similarly, you may exclude using certain familiars during the leveling phase by typing `set instant_explicitlyExcludedFamiliars=<comma-separated familiar IDs>` (and confirming that the correct familiars have been excluded in the savedresources printout).<br/>

### My settings are such that the script no longer uses all 5 softcore pulls. Can I make the script pull and use some other resources?

You can make the necessary softcore pulls prior to running InstantSCCS. This generally should be equipments (e.g. [Staff of the Roaring Hearth](https://wiki.kingdomofloathing.com/Staff_of_the_Roaring_Hearth), [repaid diaper](https://wiki.kingdomofloathing.com/Repaid_diaper), [meteorite necklace](https://wiki.kingdomofloathing.com/Meteorite_necklace) etc), since they would automatically be equipped by the maximizer for various tasks/tests.<br/>

For potions and consumables, you may set `instant_<testName>TestPulls=<comma-separated item IDs>` to pull and use them right before triggering the tests. For example, `set instant_spellTestPulls=5020,10607` to automatically pull and use the [tobiko marble soda](https://wiki.kingdomofloathing.com/Tobiko_marble_soda) and [Yeg's Motel hand soap](https://wiki.kingdomofloathing.com/Yeg%27s_Motel_hand_soap) for the Spell Damage Test (`<testName>` should be one of `hp|mus|myst|mox|hot|com|fam|spell|weapon|booze`).<br/>

For equipment and other stuff, `set instant_prePulls=<comma-separated item IDs>` to pull said items just prior to the leveling portion of the script, or `set instant_freeFightPulls=<comma-separated item IDs>` to pull and use these items just prior to the scaling free fights so as not to burn turns of these effects.<br/>

### I am severely overleveling. What preferences can I change to make the script spend fewer turns powerleveling?

The number of turns spent on powerleveling is not solely dependent on your level, but, unintuitively, depends on whether you have collected sufficient CBB ingredients to craft the foods that the script wants to consume (assuming you have a cookbookbat).</br>

If you're severely overleveled, the likely bottleneck would be the script trying to find the last few CBB ingredients (for the food buffs that you no longer need). The solution would thus be to exclude certain specific CBB foods to prevent the script from unnecessarily looking for their ingredients.<br/>

For more details, refer to the following [post](https://github.com/Pantocyclus/InstantSCCS/blob/main/LEVELING.md).<br/>

### I'm looking to improve my CS runs - what IotMs and skills should I go for next?

`instantsccs sim` groups various resources by how impactful they are. You may also refer to [this slightly more comprehensive list](https://github.com/Pantocyclus/InstantSCCS/blob/main/RECOMMENDATIONS.md) for suggestions.<br/>

### I don't have a lot of the recommended skills. Will this script still work for me?

If you are decently shiny, probably. The list of skills is meant to give a rough gauge of what is required to prevent the script from failing in general, which could happen for various reasons, including<br/>

- Running out of HP (cannelloni cocoon)<br/>
- Running out of MP (inner sauce, curse of weaksauce, soul saucery)<br/>
- Running out of turns, either from turngen or high turn-taking tests/leveling tasks (almost everything else)<br/>

The script might still work if you have enough IotMs to make up for the loss in turnsaves from lacking various skills (i.e. the skills are listed to indicate that if you have nothing else, you'll need these in order to be able to complete the run).<br/>

If you meet all of the hardcoded requirements, and have a few of the recent IotMs which are supported (newer IotMs tend to be stronger due to powercreep), it's highly possible that this script will work for you (since many powerful IotMs tend to do a lot for turnsaving, which is the sole purpose for many of the other "highly-recommended" skills).<br/>

Note that we are already filling up all our organs in this route, so you shouldn't expect to have additional turngen (e.g. from locketed + backed up witchess bishops and knights; sausage goblins still work and are supported). Your IotMs will have to make up for the missing skills purely in turnsaves.<br/>

### I can't survive the early fights! What do I do?

If you're scripting your own run, try eating the Deep Dish of Legend early (this is already done in the script above). It gives +100%hp and +300%mus, which should help you survive a few more hits from the monsters. However, this does come at the cost of possibly not carrying this buff over to the NC test to buff your Disgeist, thus losing you 5%NC (increasing your turncount by 3).<br/>

### What range of shininess is this script suitable for?

This script supports runs from anywhere between 90-320 turns (assuming no manual pulls; correct as of September 2023).If you are able to cap all the stat tests without using any CBB foods (including the T4 ones) because you have access to a bunch of free fights, stat% and xp% buffs, the script now fully supports running without CBB and can be pretty close to optimal (you might even want to consider setting `_instant_skip<Calzone|DeepDish|Pizza>OfLegend` in your wrapper prior to running the script to save all 5 pulls for other manual turncutting pulls [or to run it in HC]).<br/>

However, you may also consider using one of these other scripts listed [here](https://loathers.github.io/CS-Scripting-Resources.html) instead to eke out that last bit of efficiency. For example, [this personal script](https://github.com/Pantocyclus/InstantHCCS) is able to achieve a ~1/91 HCCS with fewer resources and organs used as compared to the ~1/93 HCCS (yes, HC) that I get with InstantSCCS (with my preferences already set to largely optimize for profits).<br/>

### Why is InstantSCCS not using the S.I.T. Course Completion Certificate?

The drops from the S.I.T. Course Completion Certificate aren't used in the route, so it is up to the user to decide which course they would like to commit to for the day before invoking InstantSCCS.<br/>

### Is there a way to automate the acquisition of the necessary T4 CBB foods/astral choices in Valhalla?

As with the usage of the S.I.T Course Voucher prior to invoking InstantSCCS, you may find a few community looping scripts/wrappers that would do so for you. At the present moment these are not natively shipped together with InstantSCCS.<br/>

### I'm having some issues with faxing in an ungulith. Does the script support locketing the ungulith instead?

Consider getting a whitelist to CSLoopers Unite, a clan with an ungulith in the fax machine, set up specifically to address faxbot issues (the clan does not whitelist any faxbots so as to prevent accidental faxing in of other monsters). The script automatically sends a kmail to my clan sitter - Pantocyclus (#3626664), but you may also kmail me on my main - WARriorer (#1634187) to request a whitelist.<br/>

### Does the script support switching between a clans (e.g. for VIP Lounge items and a clan with Mother Slime set up for Inner Elf)?

The script assumes you are already in the VIP clan (i.e. you should whitelist into your VIP clan before running the script).<br/>

If you are already whitelisted to CSLoopers Unite, the script will already have access to Mother Slime. Otherwise, you will have to `set instant_motherSlimeClan=<clan name>` for InstantSCCS to attempt grabbing Inner Elf - this may be the same clan as your VIP clan, or a different one altogether (note that if this is set, the script will default to using your clan of choice instead, as it reduces congestion of the CSLoopers Unite Slime Tube).<br/>

The script also defaults to using the VIP clan for the [Floundry](<https://wiki.kingdomofloathing.com/Clan_Floundry_(VIP_Lounge)>). To change this, you will also need to `set instant_floundryClan=<clan name>`.<br/>

### How do I get the script to acquire busks for leveling and/or the tests?

Similar to the custom pulls, you may set `instant_<testName>TestBusks=<cast1:power1>,<cast2:power2>,...` (for example: `set instant_spellTestBusks=4:830,5:980` to attempt getting 830DA and 980DA for the 4th and 5th busks respectively) to acquire specific [busks](https://wiki.kingdomofloathing.com/Beret_Busking). You may also set `instant_preBusks` (and/or `instant_freeFightBusks`) to acquire busks for powerleveling.<br/>

Note that the script<br/>

- indexes buffs from 1 (i.e. cast 1, 2, 3, 4, 5)<br/>
- does not acquire busks by default<br/>
- does not burn off busks to hit the desired cast number (i.e. If no busks have been cast upon reaching `instant_spellTestBusks=4:830,5:980`, neither busk will be cast; you may consider padding the preference with a power you're already aiming to get e.g. `instant_spellTestBusks=1:830,2:830,3:830,4:830,5:980`)<br/>
- currently only considers purchasing from [The Armory and Leggery](https://wiki.kingdomofloathing.com/The_Armory_and_Leggery), and does not consider [armorcrafting](https://wiki.kingdomofloathing.com/Armorcrafting)/[meatsmithing](https://wiki.kingdomofloathing.com/Meatsmithing), [coinmasters](https://wiki.kolmafia.us/index.php/Coinmaster) or [forcing drops](https://wiki.kingdomofloathing.com/Yellow_ray_strategy) from [copied monsters](https://wiki.kingdomofloathing.com/Copying) yet<br/>
- does not automatically acquire [Hammertime](https://wiki.kingdomofloathing.com/Hammertime) (consider adding the [too legit potion](https://wiki.kingdomofloathing.com/Too_legit_potion) to the custom pulls - e.g. `set instant_spellTestPulls=5258` to have Hammertime for the spell test busks)<br/>
- throws an error if it fails to acquire the specified busk at the specified cast<br/>

<sub><sup>Do consider using [this](https://beret.loathers.net/) to help you plan out the busks you need.</sup></sub><br/>

### Some users have experienced having all their preferences wiped when KoLMafia inadvertently crashes. What is the best way to back up my long list of customized InstantSCCS preferences?

KoLMafia periodically creates a backup of your existing preferences in a `.bak` file, which you may simply rename the extension to `.txt` to restore your preferences to the latest snapshot it has taken.<br/>

However, the above may not work in cases where KoLMafia replaces the backup with a snapshot of your corrupted preferences before you could realise that they have been wiped. As an additional measure, you may `set instant_logprefs=true` to enable writing your customized InstantSCCS preferences to your session logs, which should greatly aid in recovering your lost preferences should your `.bak` file be unusable.
