### How to reduce turns spent on finding CBB ingredients

In the process of powerleveling, the script also seeks to craft the [CBB](https://kol.coldfront.net/thekolwiki/index.php/Cookbookbat) foods laid out in the [run plan](https://github.com/Pantocyclus/InstantSCCS/blob/main/RUNPLAN.md) (as the foods also provide helpful stat% buffs for the stat tests). Thus, it would continue spending turns looking for the CBB ingredient drops necessary to craft all the foods it needs to craft (even though you are already overlevelled\*) - the CBB only drops 3 identical ingredients on every 11th turn, and the unmodified script requires the CBB to drop its ingredients for a total of 6 times (totalling 66 turns with the CBB for 3x6=18 total ingredients).<br/>

To remedy this, you will have to tell the script which CBB foods you no longer need (for turngen and their corresponding stat% buffs). Note that you do not have to exclude every CBB food; you will only need to exclude some. Further note that, for accounts that are not too shiny, one may observe a reduction in turns spent leveling together with an increase in turns spent on the stat tests. You should remove CBB foods accordingly to strike a good balance (where the decrease in leveling turns more than offsets the increase in test turns).<br/>

The common advice as to the general approach for deciding which CBB foods to exclude is as follows: One should note that the CBB ingredients are [seeded](https://docs.google.com/spreadsheets/d/10j0B1DTw64a-CaaBwMjiCJTTsGWOx0h4_KWpiAItB8s/edit). Specifically, note that for CS Day 1, the seeded CBB ingredient drops for Saucerors are in the following fixed order: 3J 3B 3SP 3SP 3J 3SP (total: 3B 6J 9SP)...<br/>

Furthermore, the script seeks to craft the following foods (listed here with the CBB ingredients needed to craft them):<br/>

| | CBB ingredients used ||
| | [B](https://kol.coldfront.net/thekolwiki/index.php/Yeast_of_Boris) | [J](https://kol.coldfront.net/thekolwiki/index.php/Vegetable_of_Jarlsberg) | [SP](https://kol.coldfront.net/thekolwiki/index.php/St._Sneaky_Pete%27s_Whey) |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [plain calzone](https://kol.coldfront.net/thekolwiki/index.php/Plain_calzone) | 2 | | 2 |
| [baked veggie ricotta casserole](https://kol.coldfront.net/thekolwiki/index.php/Baked_veggie_ricotta_casserole) | | 2 | 2 |
| [roasted vegetable of Jarlsberg](https://kol.coldfront.net/thekolwiki/index.php/Roasted_vegetable_of_Jarlsberg) (stats) | | 2 | |
| [roasted vegetable of Jarlsberg](https://kol.coldfront.net/thekolwiki/index.php/Roasted_vegetable_of_Jarlsberg) (item) | | 2 | |
| [Pete's Rich Ricotta](https://kol.coldfront.net/thekolwiki/index.php/Pete%27s_rich_ricotta) | | | 2 |
| [honey bun of Boris](https://kol.coldfront.net/thekolwiki/index.php/Honey_bun_of_Boris) | 1 | | |
| [Pete's wiley whey bar](https://kol.coldfront.net/thekolwiki/index.php/Pete%27s_wiley_whey_bar) | | | 1 |
| Total | 3 | 6 | 7 |

By excluding [Pete's wiley whey bar](https://kol.coldfront.net/thekolwiki/index.php/Pete%27s_wiley_whey_bar) (at a cost of [50% moxie](https://kol.coldfront.net/thekolwiki/index.php/Awfully_Wily) and 5 turngen while saving 1 fullness), we can craft all the remaining CBB foods with just 3J 3B 3SP 3SP 3J (total: 3B 6J 6SP) - 5 CBB drops instead of 6!<br/>

On the other hand, excluding only the [honey bun of Boris](https://kol.coldfront.net/thekolwiki/index.php/Honey_bun_of_Boris) would have no effect on the leveling turns taken, since we would still need 6 CBB drops in order to fully satisfy (total: 2B 6J 7SP).<br/>

You may, of course, remove any CBB foods as necessary in order to reduce organ usage. However, to specifically target reducing turns spent finding CBB ingredients, consider looking at which foods you can exclude (without taking too big a hit on the CS tests) that would bring down the number of CBB drops required to craft the remaining non-excluded foods. Here are some suggested food exclusions you may wish to consider:<br/>

| CBB drops reduced | Foods excluded                                                                | Fullness saved | Significant buffs lost                     |
| ----------------- | ----------------------------------------------------------------------------- | -------------- | ------------------------------------------ |
| 1                 | Pete's wiley whey bar                                                         | 1              | 50% moxie                                  |
| 2                 | roasted vegetable of Jarlsberg x2, Pete's wiley whey bar                      | 3              | 100% myst, 50% moxie, 100% item            |
| 2                 | baked veggie ricotta casserole, roasted vegetable of Jarlsberg                | 3              | 200% moxie, 100% myst OR 100% item         |
| 3                 | plain calzone, baked veggie ricotta casserole, roasted vegetable of Jarlsberg | 5              | 200% mus, 200% mox, 100% myst OR 100% item |
| 3                 | baked veggie ricotta casserole, Pete's Rich Ricotta                           | 3              | 300% moxie                                 |

<sub><sup>\*It does stop powerleveling once you hit level 20.</sub></sup><br/>
