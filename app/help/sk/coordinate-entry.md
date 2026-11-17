---
title: Zadávanie súradníc a vzdialeností
summary: Všetky spôsoby zadania bodu, vzdialenosti, uhla alebo čísla v príkazovom riadku CadCraft, s príkladmi.
keywords: dynamický vstup, dyn, f12, tab, súradnice, absolútne, relatívne, polárne, @, priama vzdialenosť, uhol, stupne, posledný bod, lastpoint, zadávanie bodov, vstup, aritmetika, výpočet, kalkulačka, cal, plus, zlomok, výraz
from: 7de9252d
---

## Body

Keď výzva vyžaduje bod, zadajte jeden z nasledujúcich tvarov a stlačte {{key:Enter}}:

| Zadáte | Význam | Príklad |
|---|---|---|
| `x,y` | Absolútne: meria sa od počiatku 0,0 | `2500,1200` |
| `#x,y` | Tiež absolútne (akceptované kvôli zvyku) | `#2500,1200` |
| `@dx,dy` | Relatívne: vpravo a nahor od posledného bodu | `@600,0` |
| `@d<a` | Relatívne polárne: vzdialenosť a uhol od posledného bodu | `@1500<45` |
| `d<a` | Absolútne polárne: vzdialenosť a uhol od počiatku | `3000<90` |
| jedno číslo | Priama vzdialenosť: toľko od základného bodu, smerom ku krížovému kurzoru | `1200` |
| `*x,y`, `@*dx,dy` | Svetové súradnice, keď je nastavený UCS | `*0,0` |

Keď je nastavený {{cmd:UCS}}, `x,y`, `@dx,dy` a uhol v `d<a` sa merajú pozdĺž osí UCS. Pozri [Otočenie pohľadu a použitie vlastných súradníc](topic:ucs-and-turned-view).

Alebo kliknite do výkresu; uchopenie objektu a {{ui:Ortho}} platia pre kliknutia.

Pravidlá:

- Čiarka oddeľuje X od Y. Desatinné čísla sa píšu s bodkou: `1250.75,300`.
- Záporné hodnoty idú doľava a nadol: `@-600,0`.
- Nepíšte medzery: {{key:Space}} odošle riadok rovnako ako {{key:Enter}}.
- Čísla môžu používať exponenty: `1e3` je 1000.
- Jednotky sa nepíšu a nepoužíva sa zápis v stopách a palcoch. Zadávajte holé čísla v jednotkách výkresu.

## Posledný bod

`@` sa počíta od **posledného bodu, ktorý ste zadali pri ľubovoľnej výzve na bod**, v ľubovoľnom príkaze: kliknutím, uchopením alebo zadaným bodom. Pamätá si sa medzi príkazmi, takže nový úsek môžete začať `@0,500` od miesta, kde predchádzajúci skončil. Kým nezadáte žiadny bod, `@` sa počíta od 0,0.

Niekoľko miest, kde je to dôležité:

- V {{cmd:COPY}} je po prvej kópii posledným bodom bod tejto kópie. `@600,0` dvakrát umiestni kópie 600 a 1200 od originálu.
- Po umiestnení kóty je posledným bodom miesto, kde ste umiestnili kótovaciu čiaru, nie koniec kóty.

Ak si nie ste istí, použite absolútny bod, uchopenie alebo priamu vzdialenosť.

## Zadanie priamej vzdialenosti

Holé číslo je vzdialenosť od **základného bodu** príkazu (bodu, z ktorého sa začína gumová čiara) smerom ku krížovému kurzoru:

1. Posuňte krížový kurzor požadovaným smerom.
2. Zadajte vzdialenosť a stlačte {{key:Enter}}.

Keď je zapnutý {{ui:Ortho}}, smer sa prichytí na priamu vodorovnú alebo zvislú os, čo je najrýchlejší spôsob kreslenia kolmých múrov. Ak nie je žiadny základný bod alebo krížový kurzor leží presne na ňom, číslo sa odmietne s hláškou "Vyžaduje sa bod alebo kľúčové slovo voľby."

## Uhly

- V stupňoch ako holé číslo: `30`, `-45`, `112.5`.
- Meria sa proti smeru hodinových ručičiek od kladného smeru X (smerom doprava): 0 je doprava, 90 nahor, 180 doľava, 270 alebo -90 nadol.
- Tam, kde sa žiada uhol (otočenie, uhol textu), môžete aj kliknúť: uhol sa meria od základného bodu ku kliknutiu. Kým základný bod neexistuje, prvé kliknutie ho nastaví a výzva požiada o druhý bod.

## Vzdialenosti

Tam, kde sa žiada vzdialenosť (polomer, odsadenie, výška textu, mierka):

- zadajte kladné číslo (vo výkrese v stopách a palcoch aj `12'6"` alebo `6-1/2`: pozri [Stopy a palce](topic:units-papers-scales#feet-and-inches-and-fractions)), alebo
- kliknite na bod: vzdialenosť od základného bodu príkazu k nemu, alebo
- kliknite dva body, keď nie je žiadny základný bod: výzva sa zmení na `Zadajte druhý bod`.

Hlásenie "Vyžaduje sa kladné číslo alebo dva body." znamená, že hodnota nebola číslo alebo bola záporná.

## Aritmetika v zadanej hodnote

Na ktoromkoľvek mieste, kde sa zadáva dĺžka, súradnica, uhol alebo číslo (príkazový riadok, dynamický vstup, polia Vlastnosti a dialógové okná), môžete zadať výpočet so znakmi `+`, `-`, `*`, `/` a zátvorkami namiesto toho, aby ste ho najprv vypočítali:

| Zadáte | Výsledok |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (vo výkrese v stopách a palcoch) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, v jednotkách výkresu (keď sú jednotky nastavené) |
| `@4+7/16,0` | bod 4.4375 vpravo od posledného |
| `360/7` | uhol 51.43° |

- Pomlčka napísaná v dĺžke je jej súčasťou: `4-7/16` je 4 7/16 a `24'-6"` je 24 stôp 6 palcov. Ak chcete odčítať po znaku stopy, najprv dokončite dĺžku, `24'-0"-6"`, alebo dajte výpočet do zátvoriek s medzerami okolo pomlčky, `(24' - 6")` (vnútri zátvoriek je medzera medzerou; inde stlačí {{key:Enter}}).
- Holé číslo pripočítané k dĺžke je v jednotkách výkresu; násobenie alebo delenie ním mení mierku dĺžky. Dve dĺžky vynásobené dajú plochu, preto sa `2'*3'` odmietne.
- Funguje aj `abs`, `round`, `ceil` a `floor`: `round(10/3)`.
- Výpočet, ktorý sa nedá prečítať, sa odmietne s uvedením, kde je chyba, napríklad "Výpočet končí príliš skoro (znak 3): chýba hodnota." Nikdy sa nič nečíta ako 0. {{cmd:CAL}} vypíše hodnotu výpočtu.

## Dynamický vstup

{{ui:Dyn}} ({{key:F12}}, v stavovom riadku) zobrazuje hodnoty pri krížovom kurzore, keď príkaz žiada bod.

- Keď ešte nie je základný bod (prvý bod úsečky), dve polia sú **X** a **Y**.
- Potom sú to **vzdialenosť** a **uhol** od posledného bodu.

Písanie stále smeruje do príkazového riadku; pole pri krížovom kurzore ho zobrazuje a gumová čiara ho nasleduje.

1. Zadajte hodnotu: zapíše sa do zvýrazneného poľa.
2. Stlačte {{key:Tab}} (alebo čiarku za X). Hodnota sa zamkne (zobrazí sa tučne) a zvýrazní sa ďalšie pole. Zamknutá vzdialenosť drží gumovú čiaru takú dlhú, kým mierite myšou.
3. Zadajte druhú hodnotu alebo len namierte a stlačte {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} nakreslí 50 rovno nahor od posledného bodu.

Stlačenie {{key:Enter}} po jednej hodnote bez {{key:Tab}} funguje ako zadanie priamej vzdialenosti. Stopy a palce fungujú aj v poliach (`12'6"`). Výzvy na vzdialenosť a uhol (polomer kružnice, otočenie) zobrazujú svoju hodnotu tiež pri krížovom kurzore.

## Voľby a predvolené hodnoty

- Voľby sa zobrazujú v hranatých zátvorkách. Zadajte veľké písmená voľby (`D` pre `[Priemer (D)]`, `CL` pre `[Uzavrieť (CL)]`) a stlačte {{key:Enter}}. Fungujú aj dlhšie začiatky slova (`DIA`).
- Predvolená hodnota sa zobrazí v lomených zátvorkách, napríklad `<500>`. Na jej použitie stlačte {{key:Enter}} alebo kliknite pravým tlačidlom.

## Iné klávesnicové rozloženia a číselná klávesnica

Názvy príkazov, krátke názvy a písmená volieb sú latinské písmená. Keď je aktívne grécke, cyrilické (ruské, ukrajinské, bieloruské, srbské, macedónske, bulharské), hebrejské, arabské, perzské, thajské alebo kórejské rozloženie, nemusíte prepínať rozloženia: keď slovo, ktoré ste zadali, nie je ako stojí príkaz, krátky názov ani voľba, CadCraft ho prečíta podľa stlačených klávesov. Kláves označený `L` na latinskej klávesnici stále spustí `LINE` a kláves `C` stále zodpovedá voľbe `Uzavrieť`, nech na ňom rozloženie zobrazuje akékoľvek písmeno. Zoznam zodpovedajúcich príkazov nad príkazovým riadkom sa riadi rovnakým pravidlom. Text, ktorý zadáte tam, kde príkaz žiada text (obsah {{cmd:TEXT}}, názov), sa nikdy nemení.

Na rozloženiach, kde desatinný kláves číselnej klávesnice dáva čiarku, tento kláves zadá desatinnú bodku v príkazovom riadku aj v poliach čísel, takže `12.5` sa dá napísať na číselnej klávesnici. Čiarkový kláves hlavnej klávesnice stále oddeľuje `x,y`.

Obe možnosti sa dajú vypnúť v {{ui:Nastavenia}}: {{ui:Commands on a non-Latin keyboard layout}} a {{ui:Keypad decimal key}}.

## Zobrazenie súradníc

Stavový riadok zobrazuje X a Y krížového kurzora (v UCS, keď je nastavený), po uchopeniach a {{ui:Ortho}}. Keď má príkaz základný bod, pridáva `Δ` so vzdialenosťou a uhlom od tohto bodu, napríklad `Δ 1500 < 30°`: čísla, ktoré by ste zadali ako `@1500<30`.

Na vypísanie súradníc bodu použite {{cmd:ID}} a na meranie medzi dvoma bodmi {{cmd:DIST}}.
