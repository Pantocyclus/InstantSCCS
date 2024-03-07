### How to reduce turns spent on finding CBB ingredients

In the process of powerleveling, the script also seeks to craft the [CBB](https://kol.coldfront.net/thekolwiki/index.php/Cookbookbat) foods laid out in the [run plan](https://github.com/Pantocyclus/InstantSCCS/blob/main/RUNPLAN.md) (as the foods also provide helpful stat% buffs for the stat tests). Thus, it would continue spending turns looking for the CBB ingredient drops necessary to craft all the foods it needs to craft (even though you are already overlevelled\*) - the CBB only drops 3 identical ingredients on every 11th turn, and the unmodified script requires the CBB to drop its ingredients for a total of 6 times\*\* (totalling 66 turns with the CBB for 3x6=18 total ingredients).<br/>

To remedy this, you will have to [tell the script which CBB foods you no longer need](https://github.com/Pantocyclus/InstantSCCS?tab=readme-ov-file#im-pretty-shiny---can-i-get-the-script-to-save-certain-resourcesorgans) (for turngen and their corresponding stat% buffs). Note that you do not have to exclude every CBB food; you will only need to exclude some. Further note that, for accounts that are not too shiny, one may observe a reduction in turns spent leveling together with an increase in turns spent on the stat tests. You should remove CBB foods accordingly to strike a good balance (where the decrease in leveling turns more than offsets the increase in test turns).<br/>

The common advice as to the general approach for deciding which CBB foods to exclude is as follows: One should note that the CBB ingredients are [seeded](https://docs.google.com/spreadsheets/d/10j0B1DTw64a-CaaBwMjiCJTTsGWOx0h4_KWpiAItB8s/edit). Specifically, note that for CS Day 1, the seeded CBB ingredient drops for Saucerors are in the following fixed order:<br/>

<table>
  <thead>
    <tr>
      <th rowspan="2">Drop #</th>
      <th colspan="3">Ingredients</th>
      <th colspan="3">Total</th>
    </tr>
    <tr>      
      <th><a href="https://kol.coldfront.net/thekolwiki/index.php/Yeast_of_Boris">B</th>
      <th><a href="https://kol.coldfront.net/thekolwiki/index.php/Vegetable_of_Jarlsberg">J</th>
      <th><a href="https://kol.coldfront.net/thekolwiki/index.php/St._Sneaky_Pete%27s_Whey">SP</th>
      <th>B</th>
      <th>J</th>
      <th>SP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td align="center"></td>
      <td align="center">&#10003;</td>
      <td align="center"></td>
      <td align="center"></td>
      <th align="center">3</th>
      <td align="center"></td>
    </tr>
    <tr>
      <th>2</th>
      <td align="center">&#10003;</td>
      <td align="center"></td>
      <td align="center"></td>
      <th align="center">3</th>
      <td align="center">3</td>
      <td align="center"></td>
    </tr>
    <tr>
      <th>3</th>
      <td align="center"></td>
      <td align="center"></td>
      <td align="center">&#10003;</td>
      <td align="center">3</td>
      <td align="center">3</td>
      <th align="center">3</th>
    </tr>
    <tr>
      <th>4</th>
      <td align="center"></td>
      <td align="center"></td>
      <td align="center">&#10003;</td>
      <td align="center">3</td>
      <td align="center">3</td>
      <th align="center">6</th>
    </tr>
    <tr>
      <th>5</th>
      <td align="center"></td>
      <td align="center">&#10003;</td>
      <td align="center"></td>
      <td align="center">3</td>
      <th align="center">6</th>
      <td align="center">6</td>
    </tr>
    <tr>
      <th>6</th>
      <td align="center"></td>
      <td align="center"></td>
      <td align="center">&#10003;</td>
      <td align="center">3</td>
      <td align="center">6</td>
      <th align="center">9</th>
    </tr>
  </tbody>
</table>

Furthermore, the script seeks to craft the following foods:<br/>

<table>
  <thead>
    <tr>
      <th rowspan="2">CBB Foods</th>
      <th colspan="3">Ingredients Needed</th>
    </tr>
    <tr>      
      <th>B</th>
      <th>J</th>
      <th>SP</th>
    </tr>
  </thead>
  <tbody>    
    <tr>
      <td><a href="https://kol.coldfront.net/thekolwiki/index.php/Plain_calzone">plain calzone</a></td>
      <td align="center">2</td>
      <td align="center"></td>
      <td align="center">2</td>
    </tr>
    <tr>
      <td><a href="https://kol.coldfront.net/thekolwiki/index.php/Baked_veggie_ricotta_casserole">baked veggie ricotta casserole</a></td>
      <td align="center"></td>
      <td align="center">2</td>
      <td align="center">2</td>
    </tr>
    <tr>
      <td><a href="https://kol.coldfront.net/thekolwiki/index.php/Roasted_vegetable_of_Jarlsberg">roasted vegetable of Jarlsberg</a> (stats)</td>
      <td align="center"></td>
      <td align="center">2</td>
      <td align="center"></td>
    </tr>
    <tr>
      <td><a href="https://kol.coldfront.net/thekolwiki/index.php/Roasted_vegetable_of_Jarlsberg">roasted vegetable of Jarlsberg</a> (item)</td>
      <td align="center"></td>
      <td align="center">2</td>
      <td align="center"></td>
    </tr>
    <tr>
      <td><a href="https://kol.coldfront.net/thekolwiki/index.php/Pete%27s_rich_ricotta">Pete's Rich Ricotta</a></td>
      <td align="center"></td>
      <td align="center"></td>
      <td align="center">2</td>
    </tr>
    <tr>
      <td><a href="https://kol.coldfront.net/thekolwiki/index.php/Honey_bun_of_Boris">honey bun of Boris</a></td>
      <td align="center">1</td>
      <td align="center"></td>
      <td align="center"></td>
    </tr>
    <tr>
      <td><a href="https://kol.coldfront.net/thekolwiki/index.php/Pete%27s_wiley_whey_bar">Pete's wiley whey bar</a></td>
      <td align="center"></td>
      <td align="center"></td>
      <td align="center">1</td>
    </tr>
    <tr>
      <th>Total</th>
      <th>3</th>
      <th>6</th>
      <th>7</th>
    </tr>
  </tbody>
</table>

By excluding Pete's wiley whey bar (at a cost of [50% moxie](https://kol.coldfront.net/thekolwiki/index.php/Awfully_Wily) and 5 turngen while saving 1 fullness), we can craft all the remaining CBB foods with just 3J 3B 3SP 3SP 3J (total: 3B 6J 6SP) - 5 CBB drops instead of 6!<br/>

On the other hand, only excluding both of the roasted vegetable of Jarlsbergs (and nothing else) would have no effect on the leveling turns taken, since we would still need 6 CBB drops in order to fully satisfy the remaining ingredients required\*\*\*.<br/>

You may, of course, remove any CBB foods as necessary in order to reduce organ usage. However, to specifically target reducing turns spent finding CBB ingredients, consider looking at which foods you can exclude (without taking too big a hit on the CS tests) that would bring down the number of CBB drops required to craft the remaining non-excluded foods. Here are some suggested food exclusions you may wish to consider:<br/>

<table>
  <thead>   
    <tr>      
      <th>CBB Drops Reduced</th>
      <th>Foods Excluded</th>
      <th>Fullness Saved</th>
      <th>Significant Buffs Lost</th>
    </tr>
  </thead>
  <tbody>    
    <tr>
      <td align="center">1</td>
      <td>Pete's wiley whey bar</td>
      <td align="center">1</td>
      <td>50% mox</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td>roasted vegetable of Jarlsberg x2, Pete's wiley whey bar</td>
      <td align="center">3</td>
      <td>100% myst, 50% mox, 100% item</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td>baked veggie ricotta casserole, roasted vegetable of Jarlsberg</td>
      <td align="center">3</td>
      <td>200% mox, 100% myst OR 100% item</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td>plain calzone, baked veggie ricotta casserole, roasted vegetable of Jarlsberg</td>
      <td align="center">5</td>
      <td>200% mus, 200% mox, 100% myst OR 100% item</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td>baked veggie ricotta casserole, Pete's Rich Ricotta</td>
      <td align="center">3</td>
      <td>300% mox</td>
    </tr>
  </tbody>
</table>

<sub><sup>\*It does stop powerleveling once you hit level 20.</sub></sup><br/>
<sub><sup>\*\*The [autumn-aton](https://kol.coldfront.net/thekolwiki/index.php/Autumn-aton) also drops random/non-seeded CBB ingredients if you have a cookbookbat. This may result in the script obtaining sufficient ingredients earlier (even without running through all 6 seeded CBB drops); however, this also adds a large deal of variance to the script's turncount.</sub></sup><br/>
<sub><sup>\*\*\*Refering to the seeded drop table, by the 5th drop we would still be lacking 1 SP (current total: 3B 6J 6SP, required total: 3B 2J 7SP).</sub></sup><br/>
