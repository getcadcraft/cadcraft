---
title: Bewerkingen van twee personen in één tekening samenvoegen
summary: Laat git, Fossil of Mercurial twee kopieën van een DWG- of DXF-object voor object samenvoegen, met de sleutel die CadCraft op elk object bewaart.
keywords: samenvoegen, git, fossil, mercurial, versiebeheer, diff, conflict, drie-weg, cadcraft merge, sleutel, gitattributes, DWG, DXF
from: 71482bf9
---

Twee personen bewerken dezelfde tekening. Als ze verschillende objecten hebben gewijzigd, kan het samenvoegen automatisch gebeuren: er hoeft niets met de hand opnieuw gedaan te worden.

## Hoe het werkt

CadCraft geeft elk object dat u tekent een korte **sleutel** die nooit verandert en nooit aan twee objecten wordt gegeven. Die wordt samen met het object in de DWG of DXF opgeslagen (als extra gegevens die andere programma's bewaren). Het samenvoegen zoekt objecten op die sleutel, niet op hun positie in het bestand, omdat elk programma de posities bij het opslaan opnieuw nummert. Zet dit uit bij {{ui:Instellingen}} › CadCraft › Samenvoegvriendelijke bestanden als u nooit samenvoegt; de bestanden worden dan ongeveer 10 procent kleiner.

Een tekening die is opgeslagen voordat er sleutels waren, kan nog steeds worden samengevoegd: haar objecten krijgen een sleutel op basis van hun plek in het bestand, dezelfde voor iedereen die het opent.

## Instellen

Git heeft eenmalig per repository twee regels nodig:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# eenmalig, op elke computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Zonder git voert u het met de hand uit: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil en Mercurial nemen dezelfde drie bestanden in hun eigen instelling voor het samenvoegprogramma.

## De regels

- Een object dat aan slechts één kant is gewijzigd, wordt overgenomen. Dezelfde wijziging aan beide kanten wordt één keer overgenomen.
- Dezelfde eigenschap die op twee manieren is gewijzigd, is een **conflict**: uw kant blijft staan en het rapport somt beide waarden op. Open het resultaat, bekijk dat object en los het met de hand op.
- Een object dat aan een van beide kanten is toegevoegd, blijft behouden. Een object dat aan de ene kant is verwijderd en aan de andere kant ongewijzigd, wordt verwijderd. Verwijderd aan de ene kant en gewijzigd aan de andere: verwijderd, en gemeld.
- Lagen, blokken, tekst en maatvoeringsstijlen, bladen en benoemde weergaven worden op dezelfde manier samengevoegd. Beperkingen volgen de objecten die ze noemen.
- Het resultaat wordt geschreven in hetzelfde bestandsformaat en dezelfde versie als die van u.

Niet samengevoegd: de volgorde waarin objecten worden getekend, is die van u, gevolgd door de objecten die de andere kant heeft toegevoegd. Wijzigingen aan dezelfde blokdefinitie aan beide kanten zijn een conflict en worden nooit gemengd. Er wordt niets geüpload; alles draait op uw eigen computer.
