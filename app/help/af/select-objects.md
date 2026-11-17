---
title: Kies voorwerpe
summary: Kies voorwerpe een vir een, met 'n venster of 'n kruising, voor of tydens 'n opdrag, en haal voorwerpe weer uit 'n keuse.
keywords: kies, keuse, venster, kruising, aanwys, alles, laaste, vorige, omheining, verwyder, voeg by, tab, siklus, oorvleuelend, qselect, vinnige keuse, filter, kies soortgelyke, selectsimilar, shift, ontkies, ctrl+a, pickfirst
from: 676508c7
---

## Wat jy sal leer

Hoe om die voorwerpe te kies waarop 'n opdrag werk. CadCraft het twee maniere om te werk, en albei is goed:

- **Kies eers, dan die opdrag** (naamwoord-werkwoord). Kies voorwerpe, tik dan `M` vir Skuif. Die opdrag neem jou keuse en gaan direk na sy volgende vraag.
- **Opdrag eers, dan kies** (werkwoord-naamwoord). Tik `M`; die opdrag vra `Kies voorwerpe:`; jy kies, dan druk {{key:Enter}}.

## Kies een voorwerp op 'n slag

1. Met geen opdrag aan die gang nie, klik op 'n lyn. Dit word uitgelig en sy gryp-punte (klein vierkantjes) verskyn. Die regterpaneel wys sy eienskappe.
2. Klik op 'n ander voorwerp. Dit word by die keuse gevoeg.
3. Hou {{key:Shift}} en klik op 'n gekose voorwerp. Dit word uit die keuse gehaal.
4. Druk {{key:Esc}}. Niks is gekies nie.

## Venster en kruising

Klik een keer op leë ruimte, beweeg, en klik weer: 'n reghoek. Druk-en-sleep teken 'n vrye lasso, met dieselfde twee soorte (sien [Lassokeuse](topic:lasso-selection); {{ui:Instellings}} kan maak dat 'n sleep die reghoek teken). Watter voorwerpe jy kry, hang af van die rigting:

| Jy beweeg | Boks | Kies |
|---|---|---|
| Links na regs | Venster | Slegs voorwerpe **heeltemal binne** die boks |
| Regs na links | Kruising | Voorwerpe binne die boks **en** voorwerpe wat dit raak |

1. Teken 'n paar oorvleuelende lyne en sirkels.
2. Klik op leë ruimte links van sommige voorwerpe, beweeg regs, en klik weer. Slegs die voorwerpe heeltemal binne word gekies.
3. Druk {{key:Esc}}.
4. Klik op leë ruimte regs, beweeg links oor sommige voorwerpe, en klik weer. Alles wat die boks raak, word gekies.
5. Hou {{key:Shift}} en teken 'n boks of 'n lasso oor sommige gekose voorwerpe. Hulle kom uit die keuse.

## Kies, dan voer 'n opdrag uit

1. Kies twee sirkels.
2. Tik `M` en druk {{key:Enter}}.

Die geskiedenis sê `2 gevind`, en die aanwysing gaan direk na `Spesifiseer basispunt`. Voltooi die skuif (sien [Skuif, kopieer, draai, skaal en spieël](topic:modify-objects)).

Wanneer 'n opdrag eindig, word die keuse skoongemaak, sodat die volgende opdrag vars begin.

Opdragte wat so 'n keuse neem: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} en {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} en {{cmd:CHAMFER}} vra altyd dat jy voorwerpe een vir een kies; {{cmd:TRIM}} en {{cmd:EXTEND}} neem 'n klik of 'n pad wat jy deur die stukke sleep (sien [Trim en verleng](topic:trim-and-extend)).

## Voer 'n opdrag uit, dan kies

1. Maak seker niks is gekies nie ({{key:Esc}}).
2. Tik `E` en druk {{key:Enter}}. Die aanwysing lees `Kies voorwerpe:`.
3. Klik op voorwerpe, of sleep vensters en kruisings. Die geskiedenis tel elke keuse (`1 gevind`, `3 gevind`).
4. Druk {{key:Enter}}, druk {{key:Space}} of regsklik om klaar te kies.

Die voorwerpe word uitgevee en die geskiedenis sê hoeveel.

By 'n `Kies voorwerpe:`-aanwysing kan jy ook tik:

- `ALL`, dan {{key:Enter}}: elke voorwerp wat jy in die oop oortjie kan wysig.
- `L` (of `LAST`), dan {{key:Enter}}: die mees onlangs getekende voorwerp.
- `P` (Previous / Vorige): die voorwerpe waarop die laaste opdrag gewerk het, as hulle nog daar is.
- `F` (Fence / Omheining): klik of tik punte langs 'n lyn; elke voorwerp wat die lyn kruis, word bygevoeg. Druk {{key:Enter}} om die omheining te beëindig; `U` neem sy laaste punt terug.
- `W` (Window / Venster) of `C` (Crossing / Kruising): twee hoeke, watter kant jy ook al sleep.
- `R` (Remove / Verwyder): van nou af haal kliks, vensters en omheinings voorwerpe **uit**. Die aanwysing lees `Verwyder voorwerpe:`. `A` (Add / Voeg by) skakel terug.
- `?`: die lys van hierdie in die geskiedenis.

Hierdie opsies word nie in die aanwysing gewys nie, soos in AutoCAD.

## Kies een van verskeie voorwerpe op mekaar

Waar voorwerpe oorvleuel of raak, neem 'n klik die naaste een. Om 'n ander te kry:

1. Hou die aanwyser stil oor die plek.
2. Druk {{key:Tab}}. Die volgende voorwerp daar word uitgelig, en die statusbalk sê watter een dit is ("2 van 3: Lyn op laag Muur").
3. Druk {{key:Tab}} weer totdat die een wat jy wil hê uitgelig is, en klik sonder om te beweeg.

As die aanwyser beweeg, begin dit oor. Dit werk met geen opdrag aan die gang nie, by `Kies voorwerpe:`, en waar 'n opdrag vra dat jy een voorwerp kies.

## Kies volgens 'n reël: Vinnige keuse

{{cmd:QSELECT}} (`QS`, of {{ui:Redigeer}} › {{ui:Meer}} › {{ui:Vinnige keuse}}) kies elke voorwerp wat by 'n reël pas, soos elke sirkel met 'n radius onder 50, of elke blokverwysing wat DOOR-900 genoem word.

1. Maak {{ui:Vinnige keuse}} oop.
2. Kies {{ui:Voorwerpsoort}} (die lys tel elke soort), dan {{ui:Eienskap}}: {{ui:Laag}}, {{ui:Kleur}}, en vir sommige soorte {{ui:Lengte}}, {{ui:Radius}}, {{ui:Oppervlakte}}, {{ui:Tekshoogte}}, {{ui:Tekskinhoud}}, {{ui:Bloknaam}} of {{ui:Arseringspatroon}}.
3. Kies {{ui:Operator}} en {{ui:Waarde}}. `*` pas met wildcards (`DOOR-*`); {{ui:Kies alles}} neem elke voorwerp van die soort. Die telling onder wys hoeveel pas soos jy kies.
4. {{ui:Hoe om toe te pas}}: sluit die passings in, of alles anders. {{ui:Pas toe op}} {{ui:Huidige keuse}} vernou wat jy gekies het; {{ui:Voeg by huidige keuse}} voeg daarby.
5. Klik {{ui:Kies}}. Voer dan die opdrag uit wat jy wil hê: dit gebruik die keuse.

## Kies soortgelyke

Kies een of meer voorwerpe en tik {{cmd:SELECTSIMILAR}} (`SIM`), of kies {{ui:Redigeer}} › {{ui:Meer}} › {{ui:Kies soortgelyke}}. Elke voorwerp van dieselfde soort op dieselfde laag en met dieselfde kleur word gekies; blokverwysings het ook dieselfde blok nodig, arseringe dieselfde patroon. Tik `SE` by sy `Kies voorwerpe`-aanwysing om te kies wat moet pas.

## Kies nou, gebruik later

Tik `SELECT` en druk {{key:Enter}}, kies voorwerpe met enige van die maniere hierbo, en druk {{key:Enter}}. Hulle bly gekies vir die volgende opdrag, en `P` kies hulle weer by 'n latere `Kies voorwerpe:`-aanwysing.

## Kies alles

Met geen opdrag aan die gang nie, druk {{key:Mod+A}}, of kies {{ui:Kies alles}} in die nutsbalk se {{ui:Redigeer}} › {{ui:Meer}}-kieslys, om elke voorwerp wat jy op die oop oortjie kan wysig te kies. As jy iets by die opdragreël getik het, kies {{key:Mod+A}} daardie teks: druk eers {{key:Esc}} om dit leeg te maak. By 'n `Kies voorwerpe:`-aanwysing, tik `ALL`. {{ui:Kies niks}} in dieselfde kieslys, of {{key:Esc}}, maak die keuse skoon.

:::tip
As jy liewer wil hê elke klik moet die keuse vervang (en {{key:Shift}} daarby voeg), stel {{ui:Klik op voorwerpe}} op {{ui:Vervang die keuse}} in [CadCraft-instellings](topic:settings).
:::

## Wat nie gekies kan word nie

- Voorwerpe op 'n laag wat **af**, **gevries** of **gesluit** is. Gesluite voorwerpe bly sigbaar, en jy kan steeds daarop vang, maar jy kan hulle nie kies of verander nie.
- Op 'n bladoortjie, die model wat binne 'n aansigvenster gewys word. Jy kies die blad se eie voorwerpe (die titelblok, notas, die aansigvenster-rame). Om die model te wysig, gaan na die {{ui:Model}}-oortjie.

## Vee vinnig uit

Kies voorwerpe, druk dan {{key:Delete}} (of {{key:Backspace}} wanneer die opdragreël nie die kursor het nie). Op 'n Mac-sleutelbord werk die sleutel wat delete genoem word sodra jy in die tekening geklik het; terwyl die opdragreël die kursor het, druk fn en delete saam. Dit voer {{cmd:ERASE}} op die keuse uit. As niks gebeur nie, het jy iets by die opdragreël getik: druk {{key:Esc}}, of tik `E` en druk {{key:Enter}} in plaas daarvan.

## Algemene foute

- **Die venster het te min geneem.** Jy het links na regs gesleep, wat slegs wat heeltemal binne is, neem. Sleep regs na links vir 'n kruising.
- **'n Klik op leë ruimte het 'n boks begin.** Een klik op leë ruimte begin 'n venster; die tweede klik voltooi dit. Druk {{key:Esc}} of regsklik om dit te laat val.
- **'n Klik op leë ruimte het die keuse laat gaan.** Dit doen, tensy jy {{key:Shift}} hou. Om die keuse by so 'n klik te behou en slegs met {{key:Esc}} skoon te maak, stel {{ui:Klik op 'n leë plek}} op {{ui:Behou die seleksie}} in [CadCraft-instellings](topic:settings#clicking-an-empty-spot).
- **Die opdrag het voorwerpe gebruik wat jy nie bedoel het nie.** Iets was nog gekies toe jy dit begin het. Druk {{key:Esc}} voor 'n opdrag om met niks gekies te begin nie.
- **Niks is gekies na 'n opdrag nie.** Dit is opsetlik: 'n voltooide opdrag maak die keuse skoon.
