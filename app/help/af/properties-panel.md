---
title: Die Eienskappe-paneel
summary: Sien en verander alles oor die gekose voorwerpe, baie op een slag: koördinate met Z, groottes, teks, maatinstellings, deursigtigheid en meer. Velde neem uitdrukkings en lengtes met eenhede.
keywords: totale, totale lengte, totale oppervlakte, som, seleksielengte, eienskappe, eienskappepalet, ctrl+1, pr, ch, mo, ddmodify, wissel, vinnige keuse, pickadd, koördinate, z, hoogte, dikte, deursigtigheid, materiaal, hiperskakel, uitdrukking, quickcalc, hoekpunt, maatstyl, toleransie, desimale
from: 10d6a829
---

## Wat jy sal leer

Hoe om die Eienskappe-paneel oop te maak, een voorwerp of honderd in een stap te verander, presiese koördinate in te tik (met Z), uitdrukkings en eenhede in enige getalveld te gebruik, en wat elke soort voorwerp wys.

## Maak dit oop

Die paneel staan aan die regterkant. Om dit vooraan te bring:

- Druk {{key:Mod+1}}, of tik {{cmd:PROPERTIES}} (of `PR`, `CH`, `MO`).
- Dubbelklik 'n voorwerp (teks en multileiers maak hul teksredigeerder oop).

Die paneel is 'n beweegbare paneel soos die ander: sleep sy handvatsel om dit links, regs of onder vas te maak, of laat dit op die tekening val om dit te laat sweef (sien [Rangskik die panele en gebruik 'n tweede monitor](common:arrange-panels)).

### Vou dit weg

Die speldjie regs bo in die paneel skakel **outomaties wegsteek** aan: die paneel vou in 'n strook aan die regterkantrand en die tekening kry die ruimte. Wys na die strook (of druk {{key:Mod+1}}) en dit maak oor die tekening oop; beweeg weg en dit vou weer toe. Klik die speldjie weer om dit oop te hou. {{cmd:PROPERTIESCLOSE}} vou dit ook toe.

## Afdelings

Eienskappe is in afdelings gegroepeer wat jy kan toevou: **Algemeen**, **Geometrie**, **Teks**, **Lyne en pyle**, **Pas**, **Primêre eenhede**, **Alternatiewe eenhede**, **Toleransies**, **Patroon**, **Diverse**, en vir blokke **Kenmerke** en **Biblioteekitem**. Klik 'n afdeling se naam om dit toe te vou of oop te maak; CadCraft onthou watter jy toegevou het.

Sleep die dun lyn tussen die name en die waardes om die name breër of smaller te maak. Dubbelklik dit om dit terug te sit. Met die sleutelbord, fokus dit en gebruik die pyltjiesleutels.

## Verander 'n waarde

1. Klik 'n lyn. Die kop lees "Lyn".
2. Klik in {{ui:Lengte}}. Terwyl jy wysig, wys die veld die volle waarde, nie die afgeronde een nie.
3. Tik `2500` en druk {{key:Enter}}. Die lyn is nou 2500 lank, met sy beginpunt en hoek behou.

{{key:Enter}} of klik elders pas die waarde toe; {{key:Esc}} sit die ou waarde terug. Elke verandering is een stap om te ontdoen.

### Uitdrukkings en eenhede

Elke getalveld neem meer as 'n gewone getal:

| Jy tik | Jy kry |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (duim, in 'n tekening in voet en duim) |
| `900mm`, `3.5m`, `2ft` | Omgeskakel na die tekening se eenhede |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (hoekvelde) |
| `0.5r`, `100g` | Radiale en gradiane, as grade |

'n Lengte met 'n eenheid het 'n tekening met eenhede nodig: stel {{ui:Eenhede}} onder {{ui:Nuwe voorwerpe}} (met niks gekies nie) eerste. 'n Slegte inskrywing word geweier met 'n nota onder die paneel en niks verander nie; dit word nooit as 0 gestoor nie. Funksies: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; hoeke in grade.

## Verander baie voorwerpe op een slag

1. Kies verskeie voorwerpe, byvoorbeeld 8 lyne en 4 maate.
2. Die kop sê "12 voorwerpe", en 'n lys bo bied **Alles (12)**, **Lyn (8)** en **Maat (4)** aan.
3. **Alles** wys wat elke voorwerp het (laag, kleur, lyntipe…). Kies **Maat (4)** om maatinstellings te sien.
4. Verander 'n waarde, byvoorbeeld {{ui:Desimale}} na `1`.

Al vier maate verander, in een stap om te ontdoen. 'n Veld wat **Wissel** lees beteken die voorwerpe verskil; om 'n waarde in te tik, stel dit op almal. Voorwerpe op vergrendelde lae word gelaat soos hulle is, en die nota sê hoeveel.

## Totale van 'n seleksie

Met verskeie voorwerpe gekies, sê die {{ui:Totale}}-afdeling bo:

- **Voorwerpe**: hoeveel van elke soort, byvoorbeeld "8 lyne, 2 polilyne, 1 sirkel".
- **Totale lengte**: die lyne, boë en polilyne bymekaar getel (krommes tel ook), en hoeveel voorwerpe dit is.
- **Totale oppervlakte**: die geslote een bymekaar getel: sirkels, hele elipse, geslote polilyne en arserings ('n arsering se gate word afgetrek).

Hulle is in die tekening se lengteformaat (voet en duim wanneer dit dit gebruik; oppervlaktes dan in vierkante duim en vierkante voet).
Die statusbalk wys dieselfde lengte en oppervlakte wanneer voorwerpe gekies is; {{ui:Instellings}} › {{ui:CadCraft}} › {{ui:Lengte en oppervlakte van die seleksie}} › {{ui:Versteek}} skakel dit af. Vir een voorwerp wys {{ui:Geometrie}} sy eie lengte en oppervlakte, soos voorheen.

## Koördinate

Elke punt wys **X**, **Y** en **Z**: begin en einde van 'n lyn, middelpunte, invoegpunte, teksposisies, die huidige polilynhoekpunt. Lyne wys ook **Delta X**, **Delta Y** en **Delta Z** (net-lees). Polilyne en arserings het 'n **Hoogte** (een Z vir die hele voorwerp).

Die kruisdraad-knoppie langs 'n punt se naam laat jou dit in die tekening kies: klik dit, klik dan die nuwe posisie (vasvang werk). Waardes is wêreldkoördinate.

## Algemeen

| Veld | Wat dit is |
|---|---|
| {{ui:Laag}}, {{ui:Kleur}}, {{ui:Lyntipe}}, {{ui:Lyntipeskaal}}, {{ui:Lynwydte}} | Soos in die lae-paneel; {{ui:Volgens laag}} volg die laag |
| {{ui:Deursigtigheid}} | Volgens laag, volgens blok, of 0 tot 90% |
| {{ui:Dikte}} | Hoe ver lyne, sirkels, boë, polilyne, punte en teks in Z strek |
| {{ui:Materiaal}} | Volgens laag, volgens blok, Globaal of 'n naam wat 'n tekening gebring het |
| {{ui:Plotstyl}} | Net-lees: tekeninge plot volgens kleur, deur die blad se [plotstyltabel](topic:plot-pdf#plot-style-tables) |
| {{ui:Hiperskakel}} | 'n Webadres wat by die voorwerp gehou word |

## Wat elke soort wys

| Gekies | Jy kan verander |
|---|---|
| Lyn | Begin- en eind-X, Y, Z; lengte; hoek |
| Sirkel | Middelpunt; radius; deursnee; omtrek; oppervlakte (elk stel die radius) |
| Boog | Middelpunt; radius; begin- en eindhoek; totale hoek; koord (wys boglengte en oppervlakte) |
| Elips | Middelpunt; hoof- en nie-hoof-radius; radiusverhouding; hoofas-hoek; begin- en eindhoek |
| Polilyn | Die hoekpuntblaaier (hieronder); globale wydte; hoogte; geslote; oppervlakte wanneer geslote (skaal dit om sy middelpunt) |
| Teks | Inhoud; styl; regverdiging; hoogte; rotasie; wydtefaktor; skuinshoek; gedefinieerde wydte; lynspasiëring; annoteerbaar; posisie |
| Blokverwysing | Invoegpunt; rotasie; skaal X, Y, Z en eenvormige skaal; kenmerkwaardes |
| Arsering | Patroon; skaal; hoek; oorsprong; assosiatief; eilanduitvinding; agtergrondkleur; hoogte |
| Maat | Sien hieronder |
| Multileier | Teks; hoogte; wydte; tekskant; pylkopgrootte; landingsafstand; pylkoppunt |
| Aansigvenster | Skaal; middelpunt en grootte op die blad; aansigmiddelpunt in die model; aan; vertoning gesluit |

### Polilynhoekpunte

{{ui:Huidige hoekpunt}} wys watter hoekpunt die velde hieronder behoort. Gebruik die pyltjieknoppies, of tik 'n nommer, om na 'n ander hoekpunt te beweeg; daar is geen limiet op hoeveel nie. Elke hoekpunt het X, Y, begin- en eindsegmentwydte, en die bolling van die segment wat daar begin (0 = reguit).

## Maate

'n Maat wys sy **Maatstyl**, wat dit meet, sy punte, en elke instelling:

- **Lyne en pyle:** pylkop vir elke einde, pylgrootte, tikgrootte, kleure en lynwydtes van die maat- en verlengingslyne, verberg enige helfte of enige verlengingslyn, verlengingslyn-verskuiwing en verlenging.
- **Teks:** oorskrywing (los leeg vir die gemete waarde; `<>` staan daarvoor binne jou eie teks), styl, kleur, hoogte, verskuiwing, vertikale en horisontale posisie, altyd horisontaal, rotasie, agtergrondvulling.
- **Pas:** algehele skaal, basislynspasiëring, wat beweeg wanneer ruimte min is, teksbeweging.
- **Primêre eenhede:** formaat, desimale, afronding, voorvoegsel, agtervoegsel, meetskaal, desimaalskeidingsteken, onderdruk voorste en agterste nulle; vir hoeke die hoekformaat en desimale.
- **Alternatiewe eenhede:** aan of af, formaat, desimale, vermenigvuldiger (25.4 draai duim om na millimeter), afronding, voorvoegsel en agtervoegsel.
- **Toleransies:** geen, simmetries, afwyking, perke of basies, met bo- en onderwaardes, desimale, hoogte en posisie.

As jy enige van hulle op 'n oopgemaakte maat verander, val die tekening wat die ander program daarvan gemaak het weg, en CadCraft teken dit weer.

:::note
Die horisontale teksposisie (langs die eerste of tweede verlengingslyn) en teks onder die lyn word geteken op lineêre en belynde maate; op ander maate word dit behou en gestoor maar nog nie geteken nie. Die Pas-keuses word behou en gestoor maar nog nie geteken nie: CadCraft plaas teks volgens sy eie reël (bo die lyn, buite as dit nie pas nie).
:::

## Niks gekies nie

Met niks gekies nie wys die paneel:

- **Nuwe voorwerpe:** die laag, kleur, lyntipe, lynwydte en teksgrootte wat nuwe voorwerpe kry; die tekening se eenhede en lengteformaat; die huidige laag se lyntipe en lynwydte; groottes vir nuwe maate. Op 'n blad kom die blad se naam, papier en oriëntasie eerste.
- **Aansig:** die middelpunt, hoogte en wydte van wat op die skerm is. Tik 'n waarde om die aansig daarheen te skuif.
- **Diverse:** die UCS-ikoon aan of af, die UCS (altyd Wêreld: CadCraft het nog nie gebruikerskoördinaatstelsels nie) en die annotasieskaal.

## Die knoppies bo

| Knoppie | Doen |
|---|---|
| Trechter | {{cmd:QSELECT}}: kies volgens soort en eienskap |
| Wyser | {{cmd:SELECT}}: kies voorwerpe by die opdragreël |
| Plus of 1 | Of 'n klik by die keuse voeg (plus) of dit vervang (1); dieselfde instelling as {{ui:Instellings}}, {{ui:CadCraft}} |
| Speldjie | Outomaties wegsteek, hierbo |

## Algemene foute

- **Tik in 'n veld het niks gedoen nie.** Druk {{key:Enter}} of klik elders om dit toe te pas. 'n Rooi veld en 'n nota beteken die inskrywing is geweier.
- **'n Lengte met 'n eenheid word geweier.** Die tekening het geen eenhede nie. Stel {{ui:Eenhede}} met niks gekies nie.
- **Net Laag en Kleur wys.** Verskeie soorte voorwerpe is gekies en **Alles** is gekies. Kies een soort in die lys bo.
- **Sommige voorwerpe het nie verander nie.** Hulle is op 'n vergrendelde laag. Ontsluit die laag in die lae-paneel.
- **Getikte letters het in 'n veld beland.** Terwyl 'n veld die kursor het, tik sleutels daar. Druk {{key:Enter}} of {{key:Esc}}, en tik dan die opdrag.
