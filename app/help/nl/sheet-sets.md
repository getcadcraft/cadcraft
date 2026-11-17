---
title: Bladensets
summary: Bladen uit veel tekeningen samenbrengen in één genummerde lijst, hun titelblokken uit de set invullen, de set als één PDF publiceren en de set archiveren als zip.
keywords: bladenset, bladensetbeheer, ssm, sheetset, ccsheets, dst, bladenlijst, bladenindex, titelblok, velden, publiceren, hernummeren, archiveren, etransmit, transmittal, subsets, omslagblad, tekeningenlijst
from: 2c855720
---

## Wat u leert

Hoe u bladen (indelingen) uit verschillende tekeningbestanden verzamelt in een **bladenset**, hoe u ze nummert en van een titel voorziet, hoe u hun titelblokken laat invullen, hoe u de hele set als één PDF publiceert, en hoe u alles in één zip pakt om te versturen.

Een bladenset staat in een klein bestand van zichzelf, `<name>.ccsheets`, in de map die de tekeningen bevat. Het setbestand somt de bladen op met paden vanaf die map, zodat u de hele map kunt verplaatsen of kopiëren.

:::note
Om een map te lezen en te schrijven hebt u Chrome of Edge nodig (die een pagina toestemming kunnen geven in een map die u kiest), of de desktopapp. Andere browsers openen een set alleen-lezen: u kunt hem bekijken en publiceren, en het setbestand wordt gedownload in plaats van opgeslagen.
:::

## Een set starten

1. Zoek de sectie {{ui:Bladenset}} in het linkerpaneel en open het menu {{ui:Set}}. Typen van {{cmd:SHEETSET}} (of `SSM`) brengt u er ook heen.
2. Kies {{ui:Nieuwe set…}}. Geef de set een naam en, als u wilt, de projectnaam en het projectnummer.
3. Kies de map die de tekeningen bevat. Het setbestand wordt daar opgeslagen.

Om later een set te openen, kiest u {{ui:Set openen…}} en kiest u dezelfde map. Als de map meer dan één set bevat, vraagt CadCraft welke.

## Bladen toevoegen

1. Kies {{ui:Bladen toevoegen uit een tekening…}} en kies een van de tekeningen in de map.
2. CadCraft leest die tekening op de achtergrond (ze wordt niet op het scherm geopend) en toont de bladen. Vink aan wat u wilt en klik op {{ui:OK}}.
3. Selecteer een blad en druk op {{key:F2}} (of {{ui:Hernoemen en hernummeren…}}) om het een nummer en een titel te geven, zoals `A-101` en `Plattegrond`.

{{ui:Nieuw blad uit sjabloon…}} maakt een nieuwe tekening van het blad van een andere tekening (het titelblok en de viewports), genoemd naar het nieuwe blad, en voegt die toe. De set onthoudt de tekening die u als sjabloon gebruikte.

## De set ordenen

- **Subsets** groeperen bladen, zoals Architectuur › Plattegronden: selecteer waar het moet komen en kies {{ui:Nieuwe subset…}}.
- **Volgorde**: sleep een blad naar een andere plek in de lijst, of op een subset om het daar te zetten. Met het toetsenbord selecteert u het en drukt u op {{key:Alt+Up}} of {{key:Alt+Down}}.
- **Een blad openen**: dubbelklik erop (of druk op {{key:Enter}}). De tekening wordt in een eigen tabblad geopend, op dat blad.
- **Verwijderen**: selecteer het en druk op {{key:Delete}}. De tekening zelf wordt niet gewijzigd.
- **Ongedaan maken**: {{ui:Setwijziging ongedaan maken}} en {{ui:Setwijziging opnieuw}} lopen door wat u in de set hebt gewijzigd.
- **Hernummeren**: {{ui:Bladen hernummeren…}} nummert elk blad, of de bladen van één subset, in de volgorde van de lijst: een voorvoegsel, een start en een stap (`A-` en `101` geven A-101, A-102 …).

Elke wijziging wordt meteen in het setbestand opgeslagen.

## Bladen nummeren uit hun velden

In plaats van bladen met de hand te nummeren, laat u een regel elk nummer opbouwen uit de velden van het blad. Een blad dat naar een ander niveau of een andere discipline verhuist, krijgt zo zelf zijn nieuwe nummer.

1. Geef elk blad zijn velden: selecteer het, klik op {{ui:Naam wijzigen…}} en schrijf in {{ui:Velden van dit blad}} er één per regel, bijvoorbeeld `DISCIPLINE = A` en `LEVEL = 1`. Een veld dat de hele set deelt (bijvoorbeeld `DISCIPLINE = A`) kan in de {{ui:Eigenschappen…}} van de set worden gezet.
2. Open het menu van het paneel en klik op {{ui:Nummeringsregel…}}.
3. Schrijf de regel, bijvoorbeeld `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` telt op onder de bladen waarvan de andere velden hetzelfde zijn, zodat niveau 1 A-101 en A-102 krijgt en niveau 2 weer bij A-201 begint. `{SEQ:2}` schrijft het met twee cijfers; `{SUBSET}` is de naam van de subset waarin een blad zit.
4. Kies wat er gebeurt wanneer een veld verandert. {{ui:Bladen opnieuw nummeren}} houdt de nummers na elke wijziging de regel volgen; de andere keuze nummert ze eenmaal, nu.

De regel wordt in het setbestand opgeslagen. Terwijl hij zichzelf hernummert, wijzigt u de velden van een blad, niet het nummer.

## Titelblokken uit de set invullen

Een titelblok krijgt zijn tekst uit de set wanneer zijn attributen zijn getagd met de naam van een veld:

| Tag | Wat het toont |
|---|---|
| `SHEETNUMBER` (of `SHEET_NO`, `DWG_NO`) | Het nummer van het blad |
| `SHEETTITLE` (of `TITLE`, `SHEET_TITLE`) | De titel van het blad |
| `SHEETDESC` | De beschrijving van het blad |
| `PROJECTNAME` (of `PROJECT`) | De projectnaam |
| `PROJECTNUMBER` (of `PROJECT_NO`, `JOB_NO`) | Het projectnummer |
| `SHEETSETNAME` | De naam van de set |
| `SHEETINDEX`, `SHEETCOUNT` | "3 van 12", en 12 |
| Uw eigen, zoals `CLIENT` | Wat u daarvoor in {{ui:Velden instellen…}} schreef |

{{ui:Velden instellen…}} bevat de projectnaam en het projectnummer, en uw eigen velden, één per regel als `NAAM = waarde`.

{{ui:Tekeningen bijwerken}} schrijft de nummers, titels en velden in de titelblokken van elke tekening in de set. Het hernoemt ook het indelingstabblad van elk blad zoals de set aangeeft (standaard nummer en titel, zoals `A-101 Plattegrond`; {{ui:Velden instellen…}} › {{ui:Namen van indelingstabbladen}} wijzigt dat). Elke tekening wordt op zijn plaats opgeslagen, in haar eigen formaat en versie. Nadat u bladen hernummert of hernoemt, voert u het opnieuw uit, dan volgen de tabbladen en titelblokken.

## Een bladenlijst op het omslagblad

Selecteer het omslagblad in de lijst en kies {{ui:De bladenlijst op dit blad zetten}}. Een tabel van elk blad (nummer en titel, onder zijn subset) komt in de linkerbovenhoek van het blad. {{ui:Tekeningen bijwerken}} en {{ui:Publiceren naar PDF}} houden die actueel. Het is één blok, `CC_SHEETLIST`: verplaats het zoals elke blokverwijzing.

## De set publiceren

{{ui:Publiceren naar PDF}} maakt één PDF met een pagina per blad, in de volgorde van de set, op het papierformaat van elk blad, met per blad een bladwijzer ("A-101 — Plattegrond"). Als een subset is geselecteerd, vraagt CadCraft of alleen die subset moet worden gepubliceerd. De titelblokken in de PDF worden uit de set ingevuld, ook voordat u de tekeningen bijwerkt. Publiceren wijzigt de tekeningen zelf niet. De PDF wordt gedownload.

{{ui:Publiceren naar DWG…}} schrijft elk blad als een eigen DWG (DWG 2018): het model en dat ene blad, met het titelblok ingevuld uit de set, genoemd naar nummer en titel (`A-101 Verdieping 1 plattegrond.dwg`). Kies {{ui:DWG}}, of {{ui:DWG + PDF}} voor de PDF van de set ernaast. Een `publish.json` somt elk bestand op met zijn grootte en SHA-256. Wanneer de map van de set beschrijfbaar is (CadCraft Studio, of een map die u in de browser hebt gekozen), komen de bestanden in een map `<set name> - published`. Anders worden ze als één zip gedownload. [Klasse-overschrijvingen](topic:viewport-overrides) van viewports komen in elke DWG mee.

## De set archiveren

{{ui:Archiveren als zip}} pakt het setbestand, elke tekening die het gebruikt, en wat die tekeningen koppelen (gekoppelde tekeningen, en op hun beurt de tekeningen die daarin zijn gekoppeld, en afbeeldingen), met behoud van hun mappen. Het voegt een `Transmittal.txt` toe die elk bestand opsomt. Een koppeling die niet in de map van de set staat, wordt daar als ontbrekend vermeld. Koppelingen worden gevonden via hun pad vanaf de tekening, en daarna via hun bestandsnaam ergens in de map.

## Het setbestand

Het `.ccsheets`-bestand is JSON die u in elke teksteditor kunt lezen:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plattegronden", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Verdieping 1 plattegrond", "number": "A-101", "title": "Verdieping 1 plattegrond" }
  ] } ]
}
```

Paden zijn relatief ten opzichte van de map van de set, met `/` tussen mappen. CadCraft controleert het bestand wanneer het het opent: een absoluut pad, een blad zonder bestand of indeling, of tekst die niet gewoon is, wordt weggelaten, en de geschiedenis meldt dat.

## Problemen oplossen

| Wat u ziet | Oorzaak | Wat u doet |
|---|---|---|
| "Deze map is hier alleen-lezen" | De browser kan niet in een map schrijven | Gebruik Chrome of Edge, of de desktopapp. Ondertussen houdt {{ui:Het setbestand downloaden}} uw wijzigingen vast |
| Een blad ontbreekt in de PDF: "heeft geen indeling met de naam …" | De indeling van het blad is in de tekening hernoemd of verwijderd | Open de tekening en controleer de tabbladen. Verwijder het blad en voeg het opnieuw toe |
| Een titelblok blijft leeg | De attributen hebben andere tags | Hernoem de attribuuttags naar de veldnamen hierboven (BEDIT) |
| "heeft al een indeling met de naam … daarom is dat tabblad niet hernoemd" | Twee bladen van één tekening zouden dezelfde tabnaam krijgen | Geef een van hen een ander nummer of een andere titel |
