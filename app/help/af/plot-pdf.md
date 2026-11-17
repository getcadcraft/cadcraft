---
title: Druk uit na PDF
summary: Maak 'n PDF van 'n blad op volle grootte, of van die model op 'n skaal of aangepas by die papier, druk dit vanaf die blaaier of vanaf Studio, of stoor dit as 'n PNG of SVG.
keywords: plot, druk, drukker, kopieë, png, svg, prent, pdf, publiseer, voer pdf uit, papier, skaal, monochroom, grysskaal, swart en wit, lynwydte, pen, bladinstelling, uitdrukvenster, plotstyl, plotstyltabel, ctb, kleurafhanklik, rastering, plotstyle, stylbestuurder
from: a4752f83
---

## Wat jy sal maak

'n PDF van 'n blad op volle grootte, dan 'n vinnige PDF van die model op 1:100, en 'n uitdruk.

Die PDF word binne jou blaaier gemaak; niks word opgelaai nie. Dit is 'n vektor-PDF: lyne bly skerp op enige zoem, en teks kan gesoek word.

## Druk 'n blad uit

1. Klik op die blad se oortjie onder die tekening.
2. Druk {{key:Mod+P}}, klik {{ui:Plot}}, of tik `PLOT` en druk {{key:Enter}}.

Die dialoog {{ui:Druk uit na PDF}} maak oop. Dit sê watter blad dit uitdruk en op watter papier, "op volle grootte … soos jy dit sien". Die voorskou aan die regterkant wys die blad.

3. Kies in {{ui:Plotstyl}} {{ui:Monochroom (swart)}} vir swart lyne, {{ui:Kleur (soos getekend)}} om die kleure te behou, {{ui:Grysskaal}}, of 'n tabel van jou eie (sien [Plotstyltabelle](topic:plot-pdf#plot-style-tables)). Die blad hou hierdie keuse: dit word saam met die tekening gestoor.
4. Kies in {{ui:Lynwydte}} 'n pen se breedte van 0.13 mm tot 0.70 mm. Lyne met die verstek-lynwydte druk teen hierdie breedte; lyne met hul eie lynwydte (laag of voorwerp, of die pen van hul kleur in die tabel) druk daarteen.
5. Klik {{ui:Laai PDF af}}.

Die blaaier laai 'n PDF af wat na die tekening en die blad genoem is, byvoorbeeld `Drawing1-A-101 Plan.pdf`. Die geskiedenis rapporteer die grootte in grepe en die papiergrootte in millimeter.

'n Blad druk altyd teen 1:1 op sy eie papier. Om die papier te verander, verander dit op die blad self (sien [Stel 'n blad op](topic:sheets-and-viewports)). Lae wat ingestel is om nie uit te druk nie, word weggelaat, en so ook aansigvenster-rame.

## Elke blad in een PDF

Met twee of meer blaaie het die dialoog {{ui:Druk uit na PDF}} {{ui:Alle blaaie in een PDF}}; of tik {{cmd:PUBLISH}}. {{key:Enter}} neem elke blad; `S` (Sommige) vra vir hul name, geskei deur kommas. Een PDF word afgelaai met 'n bladsy per blad, in oortjievolgorde, elk op sy eie papiergrootte, en 'n boekmerk per blad met sy naam. Elke blad druk met sy eie plotstyltabel; 'n blad waarvoor niks gekies is nie, gebruik die een wat jy laas in die dialoog gekies het, en die penbreedte wat jy laas gekies het.

## Druk die model uit

1. Klik op die oortjie {{ui:Model}}.
2. Druk {{key:Mod+P}}.

Die dialoog sê dit druk die model op 'n vel papier uit, en wys meer instellings:

3. In {{ui:Oppervlakte}}, kies wat uitgedruk moet word:
   - {{ui:Alles (omvang)}}: die hele tekening.
   - {{ui:Wat op die skerm is}}: die gebied wat jy nou in die tekening sien.
   - {{ui:'n Venster…}}: klik dan {{ui:Kies}}, klik twee hoeke op die tekening, en die dialoog keer terug.
4. In {{ui:Papier}}, kies 'n grootte: ISO A4 tot A0, Letter, Legal, Tabloid en ANSI C en D, of ARCH C, D en E.
5. In {{ui:Oriëntasie}}, kies {{ui:Liggend}} of {{ui:Staande}}.
6. In {{ui:Skaal}}, kies {{ui:Pas by papier}} of 'n skaal soos `1:100`.

Onder die instellings meld 'n reël die skaal en hoe groot die gebied op die papier uitkom. As dit groter as die papier is, sê dit so: die rande word afgesny. Kies 'n kleiner skaal, 'n groter papier, of {{ui:Pas by papier}}.

7. Klik {{ui:Laai PDF af}}.

'n Modeluitdruk laat 'n marge van 5 mm rondom, omdat die meeste drukkers nie tot aan die rand kan druk nie. {{ui:Pas by papier}} gee 'n ongewone skaal (die geskiedenis en die inligtingsreël sê "(aangepas)"); kies 'n standaardskaal wanneer die tekening ware maat moet hê.

:::note
Skale lees in werklike eenhede. Vir 1:100 om reg te wees, stel {{ui:Eenhede}} in {{ui:Huidige instellings}} op wat een tekeningeenheid is. 'n Tekening sonder eenhede word as millimeter geneem.
:::

## Plotstyltabelle

'n Plotstyltabel sê wat elk van die 255 standaard tekenkleure as uitdruk, soos 'n kleurafhanklike plotstyltabel (CTB) in ander CAD-programme doen. Drie is ingebou:

| Tabel | Druk uit |
|---|---|
| {{ui:Kleur (soos getekend)}} | Elke voorwerp in sy eie kleur. |
| {{ui:Monochroom (swart)}} | Elke kleur swart: die gewone keuse vir tekeninge. |
| {{ui:Grysskaal}} | Elke kleur as sy grys, sodat kleure apart bly op 'n swart-en-wit-drukker. |

Om jou eie te maak, byvoorbeeld rooi lyne dik en swart, alles anders dun:

1. In die dialoog {{ui:Druk uit na PDF}}, klik {{ui:Wysig tabelle…}} (of tik {{cmd:PLOTSTYLES}}).
2. Klik {{ui:Nuut}}, en tik 'n naam soos `office` in {{ui:Naam}}. Om eerder van 'n ingeboude tabel te begin, kies dit in {{ui:Tabel}} en klik {{ui:Kopieer}}.
3. Klik 'n kleur in die rooster. {{key:Shift}}+klik kies 'n reeks kleure, {{key:Mod}}+klik voeg nog een by, en {{ui:Kies elke kleur}} neem hulle almal.
4. Stel wat die gekose kleure as uitdruk:
   - {{ui:Druk in}}: {{ui:Sy eie kleur}}, {{ui:Swart}} of {{ui:'n Ander kleur…}}.
   - {{ui:As 'n grys}}: die kleur as sy grys.
   - {{ui:Ink (%)}}: 100 is volle ink, 50 is halfpad na wit (rastering), vir agtergrondlyne.
   - {{ui:Lynwydte}}: {{ui:Sy eie lynwydte}} hou die voorwerp se of laag se lynwydte; 'n waarde druk elke lyn van daardie kleur op daardie wydte.
   - {{ui:Lyntipe}}: druk elke lyn van daardie kleur met 'n ander lyntipe (byvoorbeeld alles rooi gestreep); {{ui:Gebruik die voorwerp se lyntipe}} laat hulle.
   - {{ui:Lyneinde}} en {{ui:Lynverbinding}}: stomp, vierkant of rond eindes, en geer, skuins of rond hoeke (rond, soos voorheen, wanneer jy niks stel nie).
   - {{ui:Vulstyl}}: 'n soliede vulling van daardie kleur druk as arseringslyne (horisontale of vertikale stawe, skuinste, kruisarsering, ruite, vierkantige kolletjies) in plaas van ink, vir drukkers en planne waar plat ink te swaar is.
   Die tabel self het nog twee instellings: {{ui:Lynwydtes}}, die wydtes wat dit ken ('n gedrukte lyn gaan na die naaste daarvan), en {{ui:Lyntipeskaal}}, 'n faktor op die streepies van elke lyntipe wat nie 'n ISO-tipe is nie.
5. Klik {{ui:Klaar}}. Die tabel word in die tekening gehou, en die blad (of die model) druk nou daarmee uit. {{ui:Kanselleer}} laat die veranderinge vaar.

'n Kleur met sy eie pen wys 'n kol in sy hoek, en 'n kol onderaan wanneer dit 'n lynwydte stel. 'n Voorwerp met 'n ware kleur (nie een van die 255 nie) gebruik die pen van die naaste standaardkleur.

Die tekening hou sy tabelle en elke blad se keuse wanneer jy as DWG (2000 tot 2018) of DXF (R12 of 2000) stoor, en open dit weer daarmee. Ander programme sien die naam in elke blad se bladinstelling (`office.ctb`), nie die tabel self nie. 'n Tekening van 'n ander program waarvan die bladinstelling 'n tabel soos `monochrome.ctb` noem, druk uit met die ingeboude tabel van daardie naam; vir enige ander naam sê die dialoog die tekening het dit nie, en druk die tekeningkleure uit totdat jy 'n tabel kies of een met daardie naam maak.

Om 'n tabel in 'n ander tekening te gebruik, klik {{ui:Voer uit}} in {{ui:Plotstyltabelle}} (dit stoor `office.plotstyle.json`), en dan {{ui:Invoer…}} in die ander tekening. {{ui:Invoer…}} neem ook 'n `.ctb`-lêer van 'n ander program: dit word gelees uit die gepubliseerde beskrywing van die formaat en **is nog nie teen 'n werklike lêer nagegaan nie**. Die kleur, rastering en lynwydte van elke kleur word gelees; grysskaal, pen-nommers, lyntipes, lyneindes en -verbindings en vulstyle word nie gelees nie, en 'n benoemde tabel (`.stb`) word geweier. Vergelyk die eerste uitdruk met wat jy verwag, en stuur ons die lêer as dit verkeerd is.

## Druk

**In die blaaier**, klik {{ui:Druk…}}. CadCraft maak die PDF en open die blaaier se eie drukdialoog daarvoor. Kies "Werklike grootte" of 100% (nie "Pas") daar om die skaal te behou. As die blaaier nie vanaf die bladsy wil druk nie, maak die PDF eerder in 'n nuwe oortjie oop: druk dit van daar af met {{key:Mod+P}}.

Jy kan ook op {{ui:Maak oop om te druk}} klik: die PDF maak in 'n nuwe blaaieroortjie oop, en jy druk dit van daar af.

:::safari
Safari wys dalk die PDF en wag dat jy **Lêer** en dan **Druk** gebruik.
:::

As jou blaaier die nuwe oortjie blokkeer, laai CadCraft die PDF eerder af en sê dit in die geskiedenis. Laat pop-ups vir die webwerf toe om dit die volgende keer in 'n oortjie oop te maak.

**In CadCraft Studio** lys die dialoog {{ui:Druk uit na PDF}} die drukkers van die rekenaar. Kies die {{ui:Drukker}}, die {{ui:Papier in die drukker}} en die aantal {{ui:Kopieë}}, en klik dan {{ui:Druk…}}. {{ui:Dieselfde as die plot}} kies die drukker se papier wat die grootte van die blad is (A3 vir 'n A3-blad); as die drukker geen het nie, gebruik dit sy eie papier en pas die blad daarby aan. Op Windows word die blad as 'n 300 dpi-prent gestuur, omdat Windows nie 'n PDF kan druk sonder 'n PDF-program nie; op Linux en macOS gaan die PDF self na die stelsel se drukdiens. Niks verlaat die rekenaar nie.

## Prent- en SVG-lêers

{{ui:Laai PNG af}} stoor die uitgedrukte blad as 'n prent teen 300 dpi (slegs verlaag wanneer 'n baie groot blad groter sou wees as wat die blaaier kan maak; die geskiedenis sê so). {{ui:Laai SVG af}} stoor dit as 'n skaleerbare tekening in millimeter, met die lyne en teks van die uitdruk. Albei kom uit dieselfde uitdruk as die PDF, met dieselfde plotstyl, lynwydte en gebied. Prente wat in die tekening geplaas is, is net in die PDF; die geskiedenis sê hoeveel is weggelaat.

## Prente

Prente druk teen hul eie resolusie, onder die lyne. {{ui:Prente}} in die dialoog beperk hulle tot 600, 300 of 150 dpi vir 'n kleiner lêer. Lyne, teks en arseringe bly altyd skerp (vektor), en deursigtigheid bly deursigtigheid. Sien [Prente in 'n tekening](topic:pictures).

## Instellings wat onthou word

Die dialoog onthou jou laaste papier, oriëntasie, skaal en lynwydte in hierdie blaaier. Die plotstyltabel word by elke blad in die tekening gehou; 'n blad waarvoor niks gekies is nie, begin met die een wat jy laas gekies het. 'n Gekose venster bly behou tot jy die bladsy herlaai; daarna begin die dialoog by {{ui:Alles (omvang)}}.

## Algemene foute

- **Die PDF is leeg of die knoppies is grys.** Daar is niks om uit te druk nie ('n leë model), of {{ui:'n Venster…}} is gekies en nog geen venster is gekies nie ("Kies die venster om uit te druk.").
- **Teks wys "?" in die PDF.** Teks in Pools, Tsjeggies, Sirillies, Grieks en die ander Europese skrifte druk as sigself uit. Die PDF dra dan die letters wat dit nodig het (uit die Liberation Sans-font, wat Helvetica se breedtes het), en die teks kan steeds gekies en gesoek word. Chinese, Japannese en Koreaanse teks druk ook as sigself uit: wanneer 'n tekening dit het, haal die uitdruk 'n groter font af (ongeveer 10 MB, een keer) en die PDF dra net die karakters wat gebruik word, so dit benodig 'n verbinding die eerste keer (nie in 'n aflyn-kopie wat voor hiervan gestoor is nie). Hebreeus druk uit uit dieselfde ingebedde font as Latynse teks, en Arabies, Persies en Oerdoe-teks laat die uitdruk nog een font aflaai (onder 1 MB, een keer); regter-na-links-lyne word gerangskik en hul letters gekoppel (sien [Teks](topic:text)). Seldsame ideograwe buite daardie fonts, en skrifte wat komplekse vorming benodig soos Hindi, druk as "?", en die geskiedenis tel hulle.
- **Alle lyne is dieselfde dikte.** Hul lynwydte is die verstek: gee lae of voorwerpe 'n {{ui:Lynwydte}} in die regterpaneel (sien [Lynwydtes en lyntipes](topic:units-papers-scales#line-weights-and-linetypes)), of stel lynwydtes per kleur in 'n [plotstyltabel](topic:plot-pdf#plot-style-tables).
- **"(nie in hierdie tekening nie)" langs die plotstyl.** Die tekening kom van 'n ander program en noem 'n tabel wat dit nie insluit nie. Kies een van die tabelle, of maak een met daardie naam.
- **Konstruksielyne is gedruk.** Stel hul laag om nie uit te druk nie: klik sy drukkerknoppie in die paneel {{ui:Lae}}.
- **Die uitdruk is die verkeerde grootte.** Die drukker het dit geskaleer. Druk op werklike grootte.
- **{{key:Mod+P}} het die blaaier se drukdialoog oopgemaak.** Die kursor was in 'n kassie in die regterpaneel, of 'n ander dialoog was oop. Druk {{key:Enter}} of {{key:Esc}} om die kassie te verlaat, en probeer weer, of klik {{ui:Plot}}.
- **{{key:Mod+P}} het niks gedoen nie.** 'n Opdrag loop. Druk eers {{key:Esc}}.
