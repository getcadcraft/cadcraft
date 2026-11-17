---
title: Maatvoeringsgroottes, decimalen en schaal instellen
summary: Kies teksthoogte, pijlgrootte, decimalen en algemene schaal voor nieuwe maatvoeringen, wijzig bestaande, en begrijp hoe maatvoeringsstijlen werken in CadCraft.
keywords: maatvoeringsstijl, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, algemene schaal, decimalen, pijlgrootte, annotatieschaal, dimtextunit, eenheden in de tekst, mm, cm, m, km, millimeters, meters, dimlfac, dimpost
from: 8ec82a07
---

## Wat u leert

Hoe groot de maattekst en de pijlen zijn, hoe u ze instelt voor een tekening die op 1:50 of 1:100 wordt geplot, en hoe u maatvoeringen die u al hebt gemaakt wijzigt.

## Hoe maatvoeringsgroottes werken

Elke maatvoering heeft zijn eigen set groottes: teksthoogte, pijlgrootte, decimalen, de ruimte rond de tekst, hoe ver maathulplijnen voorbij de maatlijn lopen en hoe ver ze beginnen van het object. De standaarden liggen dicht bij de gangbare ISO-stijl:

| Instelling | Standaard | Opdracht |
|---|---|---|
| Teksthoogte | 2.5 | {{cmd:DIMTXT}} |
| Pijlgrootte | 2.5 | {{cmd:DIMASZ}} |
| Decimalen | 2 (nullen achteraan vervallen) | {{cmd:DIMDEC}} |
| Ruimte rond de tekst | 0.625 | {{cmd:DIMGAP}} |
| Uitsteek voorbij de maatlijn | 1.25 | {{cmd:DIMEXE}} |
| Afstand tot het object | 0.625 | {{cmd:DIMEXO}} |
| Algemene schaal | 1 | {{cmd:DIMSCALE}} |

Elke grootte wordt vermenigvuldigd met de **algemene schaal**. Stel de groottes in zoals u ze op papier wilt (tekst van 2.5 mm), en stel de algemene schaal in op de plotschaal (50 voor 1:50). De tekst is dan 2.5 × 50 = 125 tekeneenheden hoog, wat op 2.5 mm wordt geplot.

:::note
Benoemde maatvoeringsstijlen beheert u met {{cmd:DIMSTYLE}}: zie de sectie hieronder. Elke maatvoering bewaart ook de instellingen waarmee hij is gemaakt, dus u kunt er nog steeds één afzonderlijk wijzigen in {{ui:Eigenschappen}}.
:::

## De groottes voor nieuwe maatvoeringen instellen

Beide manieren hieronder wijzigen alleen maatvoeringen die u daarna maakt.

### In het paneel Huidige instellingen

1. Druk op {{key:Esc}} zodat niets geselecteerd is. Op het tabblad {{ui:Model}} leest het rechterpaneel {{ui:Huidige instellingen}}.
2. Scrol het paneel naar beneden tot {{ui:Nieuwe maatvoeringen}}, voorbij de rijen laag, kleur, eenheden en {{ui:Laag 0}} (op een klein scherm begint het onder de onderrand). Klik in {{ui:Algemene schaal}}, typ `50` en druk op {{key:Enter}}.
3. Stel {{ui:Teksthoogte}}, {{ui:Pijlgrootte}} en {{ui:Decimalen}} op dezelfde manier in als u andere waarden wilt.

De statusbalk bevestigt elke waarde, bijvoorbeeld "Algemene schaal voor nieuwe maatvoeringen: 50".

### Op de opdrachtregel

1. Typ `DIMSCALE` en druk op {{key:Enter}}.
2. Bij `Voer de nieuwe waarde voor DIMSCALE in <1>` typt u `50` en drukt u op {{key:Enter}}.

De geschiedenis bevestigt "DIMSCALE = 50. Nieuwe maatvoeringen gebruiken die; selecteer bestaande om die van hen te wijzigen." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} en {{cmd:DIMEXO}} werken op dezelfde manier. Druk op {{key:Enter}} bij de prompt om de huidige waarde te houden.

### Voet en duim in maatvoeringen

Nieuwe maatvoeringen gebruiken het lengteformaat van de tekening: stel dat in met {{ui:Lengteformaat}} in {{ui:Huidige instellingen}} of met {{cmd:UNITS}} (zie [Voet en duim](topic:units-papers-scales#feet-and-inches-and-fractions)), en de volgende maatvoering leest `12'-6 1/2"`. {{cmd:DIMLUNIT}} stelt alleen het formaat van de maatvoeringen in (2 decimalen, 3 engineering, 4 architectonisch, 5 breuk). Voor een maatvoering die u al hebt gemaakt, selecteert u hem en kiest u {{ui:Formaat}} in {{ui:Eigenschappen}}; bij een breukformaat neemt het vak {{ui:Breuk}} de macht van twee (4 = 1/16).

## Maatvoeringen in mm, cm, m of km

Een maatvoering meet in tekeneenheden. Hij kan die lengte in plaats daarvan in millimeters, centimeters, meters of kilometers schrijven, met de eenheid na het getal: een muur van 1250 mm leest `1250 mm`, `125 cm`, `1.25 m` of `0.00125 km`.

1. Stel eerst de {{ui:Eenheden}} van de tekening in {{ui:Huidige instellingen}} in (zie [Eenheden, papierformaten en schalen](topic:units-papers-scales#drawing-units)), zodat CadCraft weet wat één tekeneenheid is. Een tekening zonder eenheden wordt gelezen als millimeters, en {{cmd:DIMTEXTUNIT}} zegt dat.
2. Voor nieuwe maatvoeringen: druk op {{key:Esc}} zodat niets geselecteerd is, en kies onder {{ui:Nieuwe maatvoeringen}} {{ui:Eenheden in de tekst}}: {{ui:Tekeneenheden}}, `mm`, `cm`, `m` of `km`.
3. Voor maatvoeringen die u al hebt gemaakt: selecteer ze, en kies in {{ui:Eigenschappen}} › {{ui:Primaire eenheden}} de optie {{ui:Eenheden in de tekst}}.

Of typ {{cmd:DIMTEXTUNIT}} (`DTU`) en antwoord met `D`, `MM`, `CM`, `M` of `KM`: met maatvoeringen geselecteerd past het ze aan (één stap ongedaan te maken), zonder selectie stelt het nieuwe maatvoeringen in.

{{ui:Decimalen}} ({{cmd:DIMDEC}}) bepaalt nog steeds hoeveel decimalen worden getoond: met meters en 3 decimalen leest 1234 mm `1.234 m`. De tekst wordt geschreven als een decimaal getal. Op een blad meten maatvoeringen in de papiereenheid van het blad (millimeter of inch).

Een opgeslagen DWG of DXF bewaart de keuze als de meetschaal van de maatvoering (DIMLFAC) en een achtervoegsel (DIMPOST, ` m`), zodat andere programma's dezelfde tekst tonen. Als u later de {{ui:Eenheden}} van de tekening wijzigt, worden maatvoeringen in mm, cm, m of km opnieuw ingepast, zodat ze de juiste lengte blijven tonen. {{ui:Met de hand ingesteld (schaal of achtervoegsel)}} betekent dat de {{ui:Meetschaal}} of het achtervoegsel van de maatvoering op een andere manier is ingesteld; kies een eenheid om ze te vervangen.

## Bestaande maatvoeringen wijzigen

1. Klik op één maatvoering. De kop van het rechterpaneel leest {{ui:Maatvoering}}.
2. De instellingen staan in secties; scrol het paneel naar beneden om de latere te bereiken:
   - {{ui:Algemeen}}: {{ui:Maatvoeringstijl}}
   - {{ui:Geometrie}}: {{ui:Soort}} en {{ui:Meting}} (alleen lezen)
   - {{ui:Tekst}}: {{ui:Tekst-overschrijving}} en {{ui:Teksthoogte}}
   - {{ui:Lijnen en pijlen}}: {{ui:Pijlgrootte}}
   - {{ui:Passend maken}}: {{ui:Algemene schaal}}
   - {{ui:Primaire eenheden}}: {{ui:Decimalen}}
3. Typ een nieuwe waarde en druk op {{key:Enter}}.

De maatvoering wordt meteen opnieuw getekend. Voor hoekmaatvoeringen stelt {{ui:Decimalen (°)}} de decimalen van de hoek in.

:::note
Met meerdere maatvoeringen geselecteerd toont het paneel de rijen die ze delen, en een waarde die tussen hen verschilt, staat op {{ui:Varieert}}. Een waarde die u typt, wijzigt elke geselecteerde maatvoering in één stap, dus één {{key:Mod+Z}} zet ze allemaal terug.
:::

## Maatvoeringen uit geopende tekeningen

Een maatvoering uit een geopende DWG of DXF wordt precies getoond zoals het andere programma hem tekende. Zijn paneel zegt "Getoond zoals het programma dat hem maakte, hem tekende. Wijzig hem en CadCraft tekent hem opnieuw in zijn eigen stijl." Zodra u een waarde wijzigt, een greep verplaatst of de maatvoering verplaatst, tekent CadCraft hem opnieuw met zijn eigen pijlpunten en lettertype, met de groottes die het uit het bestand heeft gelezen.

Sommige maatvoeringen kunnen alleen worden gelezen zoals ze getekend zijn, niet als bewerkbare maatvoeringen; het paneel toont dan "Getekend vanuit" en een bloknaam, en het vak "Over dit bestand" telt ze.

## Veelgemaakte fouten

- **Het wijzigen van DIMSCALE veranderde niets op het scherm.** De instelling geldt voor nieuwe maatvoeringen. Selecteer bestaande en wijzig {{ui:Algemene schaal}} in het paneel.
- **Decimalen tonen minder cijfers dan ingesteld.** Nullen achteraan vervallen: met 2 decimalen toont 1250 `1250` en `1250.5`, niet `1250.00`.
- **De tekst heeft de juiste hoogte op papier in een viewport, maar is verkeerd in een modelplot.** De algemene schaal moet overeenkomen met de schaal waarop u plot. Plotten op "Passend op papier" geeft een rare schaal; kies een standaardschaal in het plotvenster.
- **Eenheden zoals mm of m in de tekst.** Kies {{ui:Eenheden in de tekst}} (zie [Maatvoeringen in mm, cm, m of km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Voor elk ander woord na het getal typt u het in een overschrijving: `<> TYP.`.

## Benoemde maatvoeringsstijlen

Typ `DIMSTYLE` (`D`) om de {{ui:Beheer van maatvoeringsstijlen}} te openen. Hij toont de stijlen van de tekening, hoeveel maatvoeringen elke stijl gebruikt, en welke de huidige is. **Standaard** is altijd aanwezig.

- {{ui:Huidige instellen}}: nieuwe maatvoeringen gebruiken de instellingen van die stijl en dragen zijn naam.
- {{ui:Nieuw…}}: een nieuwe stijl die begint als een kopie van een stijl die u kiest.
- {{ui:Wijzigen…}}: dezelfde velden als het maatvoeringsgedeelte van {{ui:Eigenschappen}} (lijnen en pijlen, tekst, passend maken, eenheden, alternatieve eenheden, toleranties). Druk op {{ui:OK}} en de stijl verandert **en elke maatvoering die hem gebruikt verandert mee**, instelling voor instelling. Een instelling die u op één maatvoering alleen hebt gewijzigd, blijft staan tenzij de stijl die instelling wijzigt.
- {{ui:Naam wijzigen…}} en {{ui:Verwijderen}}: Standaard kan niet worden hernoemd of verwijderd, en ook de huidige stijl of een stijl die maatvoeringen gebruiken niet.
- {{ui:Vergelijken…}}: wat er tussen twee stijlen verschilt.
- {{ui:Toepassen op selectie}}: selecteer eerst maatvoeringen; die nemen de instellingen en de naam van de stijl over.

`-DIMSTYLE` doet hetzelfde op de opdrachtregel: `Restore`, `Save` (de huidige instellingen, inclusief wat u typte met {{cmd:DIMTXT}} en de andere, onder een naam), `Delete`, `Apply`, `Compare`, `reName`, `List`.

De stijlen worden opgeslagen in een DWG of DXF (de tabel met maatvoeringsstijlen) en gelezen uit de bestanden die u opent. De *huidige* stijl wordt niet opgeslagen: een tekening opent met Standaard als huidige. Standaard behoudt zijn eigen instellingen terwijl een andere stijl de huidige is.

## Maattekst en maathulplijnen wijzigen

{{cmd:DIMEDIT}} (`DED`) werkt op de maatvoeringen die u selecteert: **Start** zet de tekst terug waar de stijl hem plaatst, **Nieuw** typt andere tekst (`<>` staat voor de meting), **Roteren** draait de tekst, **Schuin** kantelt de maathulplijnen van lineaire en uitgelijnde maatvoeringen naar een hoek die u typt (druk op {{key:Enter}} voor geen). {{cmd:DIMTEDIT}} verplaatst de tekst naar **Links**, **Rechts** of **Midden** van de maatlijn, of draait hem (**Hoek**), of stuurt hem **Start**. De tekst staat altijd op de maatlijn: hij kan niet naar een vrije plek worden gesleept.
