---
title: Plotten naar PDF
summary: Maak een PDF van een blad op ware grootte, of van het model op een schaal of passend op het papier, druk af vanuit de browser of vanuit Studio, of sla op als PNG of SVG.
keywords: plotten, afdrukken, printer, exemplaren, png, svg, rasterafbeelding, pdf, publiceren, exportpdf, papier, schaal, monochroom, grijstinten, zwart-wit, lijndikte, pen, pagina-instelling, plotvenster, plotstijl, plotstijltabel, ctb, kleurafhankelijk, rastering, plotstijlen, stylesmanager
from: a4752f83
---

## Wat u gaat maken

Een PDF van een blad op ware grootte, daarna een snelle PDF van het model op 1:100, en een afdruk.

De PDF wordt in uw browser gemaakt; er wordt niets geüpload. Het is een vector-PDF: lijnen blijven scherp bij elke zoom, en tekst kan worden doorzocht.

## Een blad plotten

1. Klik op het tabblad van het blad onder de tekening.
2. Druk op {{key:Mod+P}}, klik op {{ui:Plotten}}, of typ `PLOT` en druk op {{key:Enter}}.

Het dialoogvenster {{ui:Plotten naar PDF}} wordt geopend. Het vermeldt welk blad er wordt geplot en op welk papier, "op ware grootte … zoals u het ziet". De voorbeeldweergave rechts toont het blad.

3. Kies bij {{ui:Plotstijl}} {{ui:Monochroom (zwart)}} voor zwarte lijnen, {{ui:Kleur (zoals getekend)}} om de kleuren te behouden, {{ui:Grijstinten}}, of een eigen tabel (zie [Plotstijltabellen](topic:plot-pdf#plot-style-tables)). Het blad onthoudt deze keuze: ze wordt opgeslagen met de tekening.
4. Kies bij {{ui:Lijndikte}} een pendikte van 0.13 mm tot 0.70 mm. Lijnen met de standaardlijndikte worden in deze breedte afgedrukt; lijnen met een eigen lijndikte (laag of object, of de pen van hun kleur in de tabel) worden in die breedte afgedrukt.
5. Klik op {{ui:PDF downloaden}}.

De browser downloadt een PDF die is genoemd naar de tekening en het blad, bijvoorbeeld `Drawing1-A-101 Plan.pdf`. In de geschiedenis staan de grootte in bytes en het papierformaat in millimeters.

Een blad wordt altijd 1:1 op het eigen papier geplot. Om het papier te wijzigen, past u het aan op het blad zelf (zie [Een blad instellen](topic:sheets-and-viewports)). Lagen die zijn ingesteld om niet te plotten, worden weggelaten, net als de viewportkaders.

## Alle bladen in één PDF

Bij twee of meer bladen heeft het dialoogvenster {{ui:Plotten naar PDF}} de optie {{ui:Alle bladen in één PDF}}; of typ {{cmd:PUBLISH}}. {{key:Enter}} neemt alle bladen; `S` (Sommige) vraagt om hun namen, gescheiden door komma's. Eén PDF wordt gedownload met een pagina per blad, in de volgorde van de tabbladen, elk op het eigen papierformaat, en met een bladwijzer per blad met de naam ervan. Elk blad wordt geplot met de eigen plotstijltabel; een blad zonder gekozen tabel gebruikt de tabel die u het laatst in het dialoogvenster hebt gekozen, en de pendikte die u het laatst hebt gekozen.

## Het model plotten

1. Klik op het tabblad {{ui:Model}}.
2. Druk op {{key:Mod+P}}.

Het dialoogvenster vermeldt dat het model op een vel papier wordt geplot, en toont meer instellingen:

3. Kies bij {{ui:Oppervlakte}} wat er geplot moet worden:
   - {{ui:Alles (omvang)}}: de hele tekening.
   - {{ui:Wat op het scherm staat}}: het gebied dat u nu in de tekening ziet.
   - {{ui:Een venster…}}: klik daarna op {{ui:Selecteren}}, klik op twee hoeken in de tekening, en het dialoogvenster keert terug.
4. Kies bij {{ui:Papier}} een formaat: ISO A4 tot A0, Letter, Legal, Tabloid en ANSI C en D, of ARCH C, D en E.
5. Kies bij {{ui:Oriëntatie}} {{ui:Liggend}} of {{ui:Staand}}.
6. Kies bij {{ui:Schaal}} {{ui:Passend op papier}} of een schaal zoals `1:100`.

Onder de instellingen toont een regel de schaal en hoe groot het gebied op het papier wordt. Als dat groter is dan het papier, meldt de regel dit: de randen worden afgesneden. Kies een kleinere schaal, een groter papier, of {{ui:Passend op papier}}.

7. Klik op {{ui:PDF downloaden}}.

Een modelplot laat een marge van 5 mm rond de rand, omdat de meeste printers niet tot de rand kunnen afdrukken. {{ui:Passend op papier}} geeft een oneven schaal (de geschiedenis en de inforegel zeggen "(passend gemaakt)"); kies een standaardschaal wanneer de tekening werkelijk moet meten.

:::note
Schalen worden gelezen in echte eenheden. Om 1:100 juist te laten zijn, stelt u {{ui:Eenheden}} in {{ui:Huidige instellingen}} in op wat één tekeneenheid is. Een tekening zonder eenheden wordt opgevat als millimeters.
:::

## Plotstijltabellen

Een plotstijltabel bepaalt hoe elk van de 255 standaard tekenkleuren wordt afgedrukt, zoals een kleurafhankelijke plotstijltabel (CTB) dat in andere CAD-programma's doet. Er zijn er drie ingebouwd:

| Tabel | Drukt af |
|---|---|
| {{ui:Kleur (zoals getekend)}} | Elk object in de eigen kleur. |
| {{ui:Monochroom (zwart)}} | Elke kleur zwart: de gebruikelijke keuze voor tekeningen. |
| {{ui:Grijstinten}} | Elke kleur als de bijbehorende grijswaarde, zodat kleuren op een zwart-witprinter uit elkaar blijven. |

Wilt u een eigen tabel maken, bijvoorbeeld rode lijnen dik en zwart, al het andere dun:

1. Klik in het dialoogvenster {{ui:Plotten naar PDF}} op {{ui:Tabellen bewerken…}} (of typ {{cmd:PLOTSTYLES}}).
2. Klik op {{ui:Nieuw}} en typ een naam zoals `office` bij {{ui:Naam}}. Wilt u vanaf een ingebouwde tabel beginnen, kies die dan bij {{ui:Tabel}} en klik op {{ui:Kopiëren}}.
3. Klik op een kleur in het raster. {{key:Shift}}+klik selecteert een reeks kleuren, {{key:Mod}}+klik voegt er één toe, en {{ui:Selecteer alle kleuren}} neemt ze allemaal.
4. Stel in hoe de geselecteerde kleuren worden afgedrukt:
   - {{ui:Drukt af in}}: {{ui:Eigen kleur}}, {{ui:Zwart}} of {{ui:Andere kleur…}}.
   - {{ui:Als grijs}}: de kleur als de bijbehorende grijswaarde.
   - {{ui:Inkt (%)}}: 100 is volle inkt, 50 is halverwege naar wit (rastering), voor achtergrondlijnen.
   - {{ui:Lijndikte}}: {{ui:Eigen lijndikte}} houdt de lijndikte van het object of de laag; een waarde drukt elke lijn van die kleur in die breedte af.
   - {{ui:Lijntype}}: drukt elke lijn van die kleur af met een ander lijntype (bijvoorbeeld alles rood gestreept); {{ui:Het lijntype van het object gebruiken}} laat ze ongewijzigd.
   - {{ui:Lijneinde}} en {{ui:Lijnverbinding}}: stompe, vierkante of ronde uiteinden, en verstek, afgeschuinde of ronde hoeken (rond, zoals voorheen, wanneer u niets instelt).
   - {{ui:Vulstijl}}: een volle vulling in die kleur wordt afgedrukt als arceerlijnen (horizontale of verticale strepen, schuine lijnen, kruisarcering, ruiten, vierkante stippen) in plaats van inkt, voor printers en plannen waar vlakke inkt te zwaar is.
   
   De tabel zelf heeft twee instellingen meer: {{ui:Lijndiktes}}, de breedtes die hij kent (een afgedrukte lijn gaat naar de dichtstbijzijnde), en {{ui:Lijntypeschaal}}, een factor op de streepjes van elk lijntype dat geen ISO-type is.
5. Klik op {{ui:Gereed}}. De tabel wordt in de tekening bewaard, en het blad (of het model) wordt nu ermee geplot. {{ui:Annuleren}} verwerpt de wijzigingen.

Een kleur met een eigen pen toont een stip in de hoek, en een stip onderaan wanneer er een lijndikte is ingesteld. Een object met een echte kleur (niet een van de 255) gebruikt de pen van de dichtstbijzijnde standaardkleur.

De tekening bewaart zijn tabellen en de keuze van elk blad wanneer u opslaat als DWG (2000 tot 2018) of DXF (R12 of 2000), en opent ze weer met die tabellen. Andere programma's zien alleen de naam in de paginainstellingen van elk blad (`office.ctb`), niet de tabel zelf. Een tekening uit een ander programma waarvan de paginainstelling een tabel noemt zoals `monochrome.ctb`, wordt geplot met de ingebouwde tabel van die naam. Bij elke andere naam meldt het dialoogvenster dat de tekening die niet heeft, en worden de tekenkleuren geplot totdat u een tabel kiest of er één met die naam maakt.

Wilt u een tabel in een andere tekening gebruiken, klik dan in {{ui:Plotstijltabellen}} op {{ui:Exporteren}} (dit slaat `office.plotstyle.json` op), en daarna op {{ui:Importeren…}} in de andere tekening. {{ui:Importeren…}} neemt ook een `.ctb`-bestand van een ander programma: het wordt gelezen uit de gepubliceerde beschrijving van het formaat en **is nog niet gecontroleerd met een echt bestand**. De kleur, rastering en lijndikte van elke kleur worden gelezen; grijstinten, pennummers, lijntypen, lijneinden en -verbindingen en vulstijlen niet, en een benoemde tabel (`.stb`) wordt geweigerd. Vergelijk de eerste plot met wat u verwacht, en stuur ons het bestand als het verkeerd is.

## Afdrukken

**In de browser** klikt u op {{ui:Afdrukken…}}. CadCraft maakt de PDF en opent daarvoor het eigen afdrukvenster van de browser. Kies daar "Werkelijke grootte" of 100% (niet "Passend") om de schaal te behouden. Als de browser niet vanuit de pagina kan afdrukken, wordt de PDF in plaats daarvan in een nieuw tabblad geopend: druk die daar af met {{key:Mod+P}}.

U kunt ook klikken op {{ui:Openen om af te drukken}}: de PDF wordt in een nieuw browsertabblad geopend, en daar drukt u hem af.

:::safari
Safari kan de PDF tonen en wachten tot u **Bestand** en daarna **Afdrukken** gebruikt.
:::

Als uw browser het nieuwe tabblad blokkeert, downloadt CadCraft in plaats daarvan de PDF en meldt dat in de geschiedenis. Sta pop-ups voor de site toe om hem de volgende keer in een tabblad te openen.

**In CadCraft Studio** toont het dialoogvenster {{ui:Plotten naar PDF}} de printers van de computer. Kies de {{ui:Printer}}, het {{ui:Papier in de printer}} en het aantal {{ui:Exemplaren}}, en klik daarna op {{ui:Afdrukken…}}. {{ui:Gelijk aan de plot}} kiest het papier van de printer dat even groot is als het blad (A3 voor een A3-blad). Heeft de printer geen zodanig papier, dan gebruikt hij zijn eigen papier en past het blad daarop aan. Op Windows wordt het blad als afbeelding van 300 dpi verzonden, omdat Windows geen PDF kan afdrukken zonder PDF-programma; op Linux en macOS gaat de PDF zelf naar de afdrukservice van het systeem. Er verlaat niets de computer.

## Afbeelding- en SVG-bestanden

{{ui:PNG downloaden}} slaat het geplotte blad op als afbeelding van 300 dpi (alleen verlaagd wanneer een zeer groot blad groter zou worden dan de browser kan maken; de geschiedenis meldt dat). {{ui:SVG downloaden}} slaat het op als een schaalbare tekening in millimeters, met de lijnen en tekst van de plot. Beide komen van dezelfde plot als de PDF, met dezelfde plotstijl, lijndikte en hetzelfde gebied. Rasterafbeeldingen in de tekening zitten alleen in de PDF; de geschiedenis zegt hoeveel er zijn weggelaten.

## Rasterafbeeldingen

Rasterafbeeldingen worden afgedrukt met hun eigen resolutie, onder de lijnen. {{ui:Rasterafbeeldingen}} in het dialoogvenster beperkt ze tot 600, 300 of 150 dpi voor een kleiner bestand. Lijnen, tekst en arceringen blijven altijd scherp (vector), en transparantie blijft transparantie. Zie [Rasterafbeeldingen in een tekening](topic:pictures).

## Instellingen die worden onthouden

Het dialoogvenster onthoudt uw laatste papier, oriëntatie, schaal en lijndikte in deze browser. De plotstijltabel wordt bij elk blad in de tekening bewaard; een blad zonder gekozen tabel begint met de tabel die u het laatst koos. Een gekozen venster blijft bewaard tot u de pagina opnieuw laadt; daarna begint het dialoogvenster bij {{ui:Alles (omvang)}}.

## Veelvoorkomende fouten

- **De PDF is leeg of de knoppen zijn grijs.** Er is niets om te plotten (een leeg model), of {{ui:Een venster…}} is gekozen en er is nog geen venster geselecteerd ("Selecteer het venster om te plotten.").
- **Tekst toont "?" in de PDF.** Tekst in Pools, Tsjechisch, Cyrillisch, Grieks en de andere schriften van Europa wordt als zichzelf afgedrukt: de PDF bevat dan de letters die nodig zijn (uit het lettertype Liberation Sans, dat de breedtes van Helvetica heeft), en de tekst kan nog steeds worden geselecteerd en doorzocht. Chinese, Japanse en Koreaanse tekst wordt ook als zichzelf afgedrukt: wanneer een tekening die bevat, haalt de plot een groter lettertype op (ongeveer 10 MB, eenmalig) en bevat de PDF alleen de gebruikte tekens, dus de eerste keer is een verbinding nodig (niet in een offline kopie die eerder is opgeslagen). Hebreeuws wordt afgedrukt met hetzelfde ingebedde lettertype als Latijnse tekst. Arabische, Perzische en Urdu-tekst zorgt dat de plot nog één lettertype ophaalt (minder dan 1 MB, eenmalig); regels van rechts naar links worden geordend en hun letters verbonden (zie [Tekst](topic:text)). Zeldzame ideogrammen buiten die lettertypen, en schriften die complexe vormgeving nodig hebben zoals Hindi, worden als "?" afgedrukt, en de geschiedenis telt ze.
- **Alle lijnen hebben dezelfde dikte.** Hun lijndikte is de standaard: geef lagen of objecten een {{ui:Lijndikte}} in het rechterpaneel (zie [Lijndiktes en lijntypen](topic:units-papers-scales#line-weights-and-linetypes)), of stel lijndiktes per kleur in een [plotstijltabel](topic:plot-pdf#plot-style-tables) in.
- **"(niet in deze tekening)" naast de plotstijl.** De tekening komt uit een ander programma en noemt een tabel die het niet bevat. Kies een van de tabellen, of maak er een met die naam.
- **Hulplijnen zijn afgedrukt.** Stel hun laag in op niet plotten: klik op de printerknop in het paneel {{ui:Lagen}}.
- **De afdruk heeft het verkeerde formaat.** De printer heeft hem geschaald. Druk af op werkelijke grootte.
- **{{key:Mod+P}} opende het afdrukvenster van de browser.** De cursor stond in een vak in het rechterpaneel, of een ander dialoogvenster was open. Druk op {{key:Enter}} of {{key:Esc}} om het vak te verlaten, en probeer het opnieuw, of klik op {{ui:Plotten}}.
- **{{key:Mod+P}} deed niets.** Er loopt een opdracht. Druk eerst op {{key:Esc}}.
