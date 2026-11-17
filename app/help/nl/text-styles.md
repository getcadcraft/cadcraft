---
title: Lettertype en grootte van tekst instellen met tekststijlen
summary: Maak benoemde tekststijlen met een lettertype, hoogte, breedte en helling, stel er één in als actief voor nieuwe tekst, en wijzig een stijl om alle tekst die hem gebruikt te wijzigen.
keywords: tekststijl, stijl, STYLE, ST, TEXTSTYLE, -STYLE, lettertype, teksthoogte, breedtefactor, schuin, helling, lettertype wijzigen, standaardstijl, stijl toepassen, DDSTYLE
from: bd5a4883
---

## Wat u gaat doen

Maak een tekststijl met de naam `Notes` met een eigen lettertype en hoogte, gebruik die voor nieuwe tekst, en wijzig later de stijl zodat elke notitie die hem gebruikt tegelijk verandert.

## Stappen

1. Typ {{cmd:STYLE}} (`ST`) en druk op {{key:Enter}}, of klik op {{ui:Tekststijl}} op de werkbalk {{ui:Tekenen}}. Het dialoogvenster {{ui:Tekststijl}} toont de stijlen in de tekening. Elke tekening heeft `Standard`.
2. Klik op {{ui:Nieuw…}}, typ `Notes` als naam van de nieuwe stijl en klik op {{ui:OK}}. De statusregel zegt "Tekststijl Notes gemaakt en ingesteld als actief."
3. Kies of typ bij {{ui:Lettertype}} een lettertypenaam. Stel {{ui:Hoogte (0 = elke keer vragen)}} in op een getal, zoals `2.5`, zodat elke nieuwe tekst die hoogte krijgt. Laat hem op `0` staan om elke keer te worden gevraagd.
4. Stel {{ui:Breedtefactor}} en {{ui:Schuine hoek (°)}} in als u smallere, bredere of schuine letters wilt. De voorbeeldregel toont het resultaat.
5. Klik op {{ui:Sluiten}}. Teken tekst met {{cmd:TEXT}} of {{cmd:MTEXT}}: nieuwe tekst neemt de actieve stijl.
6. Om een stijl te gebruiken die u al hebt gemaakt, opent u het dialoogvenster opnieuw, kiest u de stijl in de lijst en klikt u op {{ui:Huidige instellen}}.
7. Om een stijl op al getekende tekst te zetten, selecteert u de tekst, opent u het dialoogvenster, kiest u de stijl en klikt u op {{ui:Toepassen op geselecteerde tekst}}.

## Een stijl later wijzigen

Wijzig het lettertype, de hoogte, breedte of helling van een stijl in het dialoogvenster, en elke tekst die hem gebruikt volgt, in één stap ongedaan te maken ({{key:Mod+Z}}). De statusregel zegt hoeveel teksten zijn gevolgd.

## Opmerkingen

- {{ui:Verwijderen}} weigert `Standard`, en een stijl die nog door tekst wordt gebruikt: wijzig die tekst eerst naar een andere stijl.
- De stijlen worden opgeslagen in de STYLE-tabel van de tekening, zodat DXF- en DWG-bestanden ze bewaren.
- Op de opdrachtregel doet `-STYLE` hetzelfde met opties (Current, New, Font, Height, Width, Oblique, Delete, List).
- Een lettertype dat niet op de computer staat die de tekening leest, wordt in een ander lettertype getoond.
