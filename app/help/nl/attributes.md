---
title: Blokattributen
summary: Bekijk en wijzig de waarden die een blokverwijzing draagt, zoals een artikelnummer of een fabrikant, en bewaar ze wanneer u een kopie opslaat.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, titelblok, ter plekke bewerken, attribuuteditor, attdef, attribuut definiëren, bedit, bloksbewerker, bclose, attribuut, attributen, attrib, label, artikelnummer, waarde, onzichtbaar, constant, blok, eigenschappen, lijst, apparatuurlabel
from: 34d307c7
---

## Wat attributen zijn

Een attribuut is een benoemde waarde die meereist met een blokverwijzing: het artikelnummer van een apparatuurlabel, de naam van een ruimtelabel, de brandwerendheid van een deur. De definitie van het blok zegt welke attributen het heeft (elk heeft een **label**, een **prompt**, een **standaard** en een plaats, grootte en hoek voor zijn tekst). Elke verwijzing naar het blok draagt zijn eigen waarden.

Sommige attributen zijn **onzichtbaar**: ze bevatten gegevens, zoals een fabrikant of een modelnummer, maar worden nooit getekend. Sommige zijn **constant**: voor elke verwijzing hetzelfde, vastgelegd door het blok.

## Waar attributen vandaan komen

- Blokken in DWG- en DXF-bestanden die u opent, behouden hun attributen, met de waarden van elke verwijzing.
- Blokken die u met {{cmd:INSERT}} en de optie {{ui:Bestand}} binnenhaalt, behouden de hunne. Zie [Invoegen uit een bestand of de bibliotheek](topic:insert-from-file-and-library).
- Bibliotheekitems komen binnen als blokken met attributen: een zichtbaar artikelnummer en de gegevens van het item, onzichtbaar.

- Blokken die u zelf maakt: definieer eerst attributen met {{cmd:ATTDEF}} (hieronder), selecteer ze dan samen met de andere objecten wanneer u het blok maakt.

## Attributen definiëren voor uw eigen blokken

1. Teken de lijnen van het blok, bijvoorbeeld een ruimtelabel.
2. Kies {{ui:Blokken}} › {{ui:Meer}} › {{ui:Kenmerk definiëren}}, of typ `ATT` en druk op {{key:Enter}}.
3. De geschiedenis toont de modi (`Invisible=No Constant=No Preset=No`). Typ `I`, `C` of `P` om er één te wisselen, en druk op {{key:Enter}} als ze goed staan. Onzichtbare waarden worden bewaard maar niet getekend; een constante heeft dezelfde waarde in elke verwijzing; een vooraf ingestelde wordt niet gevraagd wanneer u het blok invoegt.
4. Typ het label (bijvoorbeeld `ROOM_NO`: hoofdletters, geen spaties), de prompt (`Ruimtenummer`) en een standaardwaarde (`101`).
5. Klik waar de waarde komt, en geef de hoogte en de rotatie op. Het label is zichtbaar op de tekening.
6. Maak het blok met {{cmd:BLOCK}}, en selecteer de lijnen en de attribuutdefinities samen. De verwijzing die ze vervangt krijgt de standaardwaarden; elke nieuwe {{cmd:INSERT}} vraagt erom.

Een geselecteerde attribuutdefinitie toont {{ui:Label}}, {{ui:Prompt}}, {{ui:Standaard}} en de modi in {{ui:Eigenschappen}}.

## Een blok wijzigen: de bloksbewerker

{{ui:Blokken}} › {{ui:Meer}} › {{ui:Blok bewerken}} ({{cmd:BEDIT}}, `BE`) opent een blok op zichzelf: typ zijn naam (of selecteer eerst een verwijzing). Een balk bovenaan zegt welk blok u bewerkt. Teken, wis en wijzig de objecten met de gewone opdrachten, en voeg attribuutdefinities toe of wijzig ze. Klik dan op {{ui:Blok opslaan}} (of typ {{cmd:BCLOSE}} en `S`): elke verwijzing toont de wijziging, en één {{key:Mod+Z}} maakt alles ongedaan. {{ui:Wijzigingen verwerpen}} (`BCLOSE`, `D`) laat het blok zoals het was.

Wanneer u attribuutdefinities hebt toegevoegd, verwijderd of gewijzigd, brengt opslaan ook elke verwijzing in lijn: ingetypte waarden blijven bewaard, een nieuw attribuut krijgt zijn standaard, een verwijderd attribuut verdwijnt, en elk attribuut gaat terug naar waar de definitie het plaatst. De geschiedenis zegt hoeveel verwijzingen zijn bijgewerkt.

## Een titelblok bewerken waar het staat (REFEDIT)

Een titelblok op een blad zit vaak in een blok. Om de lijnen of teksten te wijzigen zonder het blad te verlaten:

1. Selecteer het titelblok, kies dan {{ui:Blokken}} › {{ui:Meer}} › {{ui:Ter plekke bewerken}} (of typ {{cmd:REFEDIT}}).
2. De inhoud wordt gewone objecten op hun plek; al het andere is vervaagd en kan niet worden gewijzigd.
3. Wijzig, wis of teken: nieuwe objecten worden deel van het blok.
4. Klik op {{ui:Het blok opslaan}} in de balk bovenaan (of typ {{cmd:REFCLOSE}} en `S`). Elke verwijzing toont de wijziging, en één {{key:Mod+Z}} maakt de hele bewerking ongedaan. {{ui:Verwerpen}} laat het blok zoals het was.

Een gekoppelde tekening, een dynamisch blok, of een verwijzing die in breedte en hoogte anders is geschaald, kan niet ter plekke worden bewerkt: gebruik {{cmd:BEDIT}} (of open de gekoppelde tekening).

:::note
Sla op of verwerp in de bloksbewerker voordat u de tekening opslaat: een bestand dat is opgeslagen terwijl de bewerker open staat, heeft het blok zoals het was vóór de bewerking.
:::

## Waarden invullen wanneer u een blok plaatst

1. Typ `I` en druk op {{key:Enter}}, typ de blocknaam en druk op {{key:Enter}}.
2. Klik waar het komt.
3. CadCraft vraagt om elke waarde, bijvoorbeeld `Voer artikelnummer in (ITEM) <>`. Typ de waarde en druk op {{key:Enter}}, of druk op {{key:Enter}} om de standaard tussen hoekhaakjes te houden.

Waarden die het blok als vooraf ingesteld markeert, en constante waarden, worden niet gevraagd. Ze nemen hun standaard.

## Waarden zien en wijzigen

1. Klik op een blokverwijzing.
2. In het rechterpaneel, onder {{ui:Kenmerken}}, heeft elk label zijn waarde. Onzichtbare zeggen `verborgen`.
3. Klik op een waarde, typ de nieuwe en druk op {{key:Enter}}.

De tekening toont de nieuwe waarde direct. Elke wijziging is één stap: {{key:Mod+Z}} maakt haar ongedaan.

**De attribuuteditor.** Dubbelklik op een verwijzing met attributen (of {{cmd:EATTEDIT}}): het dialoogvenster {{ui:Attributen bewerken}} toont elk label met zijn prompt en waarde. Typ nieuwe waarden; klik op een rij om de {{ui:Hoogte}}, {{ui:Rotatie}}, {{ui:Breedtefactor}}, {{ui:Uitlijnen}}, {{ui:Laag}}, {{ui:Kleur}} en {{ui:Onzichtbaar}} van dat attribuut te wijzigen, alleen voor deze verwijzing. {{ui:Toepassen}} houdt het dialoogvenster open; {{ui:OK}} past toe en sluit het. Elke {{ui:Toepassen}} of {{ui:OK}} is één stap ongedaan te maken.

**Op de opdrachtregel** vraagt {{cmd:ATTEDIT}} elke waarde om de beurt: typ een nieuwe, of druk op {{key:Enter}} om hem te houden.

## Attribuutdefinities wijzigen (BATTMAN, ATTSYNC)

{{ui:Blokken}} › {{ui:Meer}} › {{ui:Attribuutbeheer}} ({{cmd:BATTMAN}}) toont de attributen van een blok: wijzig een label, prompt of standaard, vink {{ui:Onzichtbaar}}, {{ui:Constant}} of {{ui:Vooraf ingesteld}} aan, en verplaats ze omhoog of omlaag (de volgorde waarin waarden worden gevraagd). Met {{ui:De verwijzingen bijwerken (waarden behouden)}} aangevinkt brengt {{ui:Toepassen}} ook elke verwijzing in lijn; een hernoemd label behoudt zijn waarden. Elke {{ui:Toepassen}} is één stap ongedaan te maken.

{{cmd:ATTSYNC}} brengt verwijzingen met de hand in lijn met de definities van hun blok: `S` kiest een verwijzing, `N` noemt een blok, `A` doet elk blok. Waarden blijven bewaard.

De waarden van de eigen velden van een bibliotheekitem (zijn id, versie, licentie en bronvermelding) worden getoond maar zijn niet te bewerken, zodat controleren op updates blijft werken. Zijn artikelnummer en hoeveelheid zijn aan u om te wijzigen.

## Ze weergeven

Selecteer verwijzingen en typ `LI` (voor {{cmd:LIST}}). De geschiedenis toont elk attribuut als `TAG = waarde`, met `(onzichtbaar)` of `(constant)` waar dat van toepassing is.

## Verplaatsen, draaien en ontbinden

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} en {{cmd:MIRROR}} behouden de waarden; de tekst verplaatst mee met het blok en blijft leesbaar.
- {{cmd:EXPLODE}} zet de zichtbare attributen om in gewone tekst met hun waarden. De onzichtbare vervallen.

## Opslaan

Een opgeslagen DWG en een opgeslagen DXF bewaren beide elk attribuut: de definities van elk blok (ook de onzichtbare, constante en vooraf ingestelde) en de waarden van elke verwijzing. Andere CAD-programma's lezen ze als gewone blokattributen.

In een DXF R12 wordt een waarde van meer dan 255 tekens afgekapt tot 255, en de geschiedenis zegt dat.

## Veelgemaakte fouten

- **Een waarde verschijnt niet op de tekening.** Ze is onzichtbaar, of leeg. Onzichtbare waarden blijven zichtbaar in het rechterpaneel.
- **De waarde die ik typte, ging naar de opdrachtregel.** Klik eerst in het waardeveld in het rechterpaneel.
