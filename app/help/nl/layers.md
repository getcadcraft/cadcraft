---
title: Een tekening ordenen met lagen
summary: Maak lagen voor wanden, deuren en notities, stel kleuren in, maak een laag actief en zet lagen uit, bevries ze, vergrendel ze of voorkom dat ze worden geplot.
keywords: laag, lagen, la, actieve laag, bevriezen, ontdooien, vergrendelen, uit, aan, plotten, niet plotten, kleur, laageigenschappen, layiso, layuniso, isoleren, layoff, layfrz, laymcur, layon, laythw, hernoemen, laymrg, samenvoegen, laydel, laag verwijderen
from: cd033591
---

## Wat u gaat maken

Drie lagen, `Walls`, `Doors` en `Notes`, elk met een eigen kleur, met objecten die op elke laag worden getekend en tussen de lagen worden verplaatst.

## Het paneel Lagen

Lagen staan in het paneel links, onder {{ui:Lagen}}. Elke rij toont, van links naar rechts:

- een stip: gevuld voor de **actieve** laag, waar nieuwe objecten komen;
- een kleurvlak;
- de naam van de laag;
- vier knoppen: aan/uit (oog), bevriezen (sneeuwvlok), vergrendelen (hangslot) en plotten (printer).

Elke tekening heeft een laag met de naam `0`. Typ `LA` en druk op {{key:Enter}} om naar het paneel te springen.

## Lagen maken

1. Klik boven de lijst op {{ui:Nieuwe laag}}. Er opent een naamveld.
2. Typ `Walls` en druk op {{key:Enter}} (of klik op {{ui:Toevoegen}}).

De statusbalk zegt "Laag Walls toegevoegd en actief gemaakt." De nieuwe laag krijgt kleur 7 (zwart op het lichte thema, wit op het donkere).

3. Klik nogmaals op {{ui:Nieuwe laag}}, typ `Doors` en druk op {{key:Enter}}.
4. Klik nogmaals op {{ui:Nieuwe laag}}, typ `Notes` en druk op {{key:Enter}}.

`Notes` is nu actief.

## Elke laag een kleur geven

1. Klik op het kleurvlak in de rij van `Walls`. De kleurkiezer van uw systeem opent.
2. Kies een kleur en bevestig.

Het kleurvlak en alles op `Walls` dat de kleur {{ui:Op laag}} heeft, veranderen mee.

:::note
Een gekozen kleur die overeenkomt met een van de 255 standaard CAD-kleuren, wordt als dat nummer opgeslagen. Elke andere kleur blijft precies behouden in CadCraft, maar wordt in een DWG- of DXF-bestand opgeslagen als de dichtstbijzijnde standaardkleur.
:::

## Tekenen op een laag

1. Klik in de lijst op de naam **Walls**. De stip wordt gevuld en de statusbalk zegt "Actieve laag: Walls".
2. Teken een rechthoek (`REC`). Hij komt op `Walls`.
3. Klik op **Doors** en teken een boog (`A`). Hij komt op `Doors`.

U kunt de actieve laag ook kiezen in {{ui:Huidige instellingen}} rechts (als niets is geselecteerd), onder {{ui:Laag}}.

## Objecten naar een andere laag verplaatsen

1. Selecteer de objecten.
2. Kies in het rechterpaneel de nieuwe laag bij {{ui:Laag}}.

Ze gaan naar die laag en krijgen de kleur ervan als hun kleur {{ui:Op laag}} is.

## Uit, bevriezen, vergrendelen en plotten

| Knop | Wat het doet |
|---|---|
| Aan/uit (oog) | Verbergt de objecten van de laag. Ze zijn niet zichtbaar, niet selecteerbaar en er kan niet op gesnapt worden. |
| Bevriezen (sneeuwvlok) | Zelfde effect als uit in CadCraft. Apart gehouden omdat andere programma's ze verschillend behandelen, en de instelling wordt opgeslagen. |
| Vergrendelen (hangslot) | Objecten blijven zichtbaar en u kunt erop snappen, maar ze kunnen niet worden geselecteerd of gewijzigd. Handig voor een achtergrond die u overtrekt. |
| Plotten (printer) | Wanneer deze knop is ingedrukt, wordt de laag op het scherm getoond maar **weggelaten uit plots** en PDF's. Gebruik dit voor hulplijnen en notities voor uzelf. |

Houd de muis boven een knop om te zien wat die doet ("Uitschakelen", "Bevriezen", "Vergrendelen", "Deze laag niet plotten").

U kunt de actieve laag niet uitschakelen: de statusbalk zegt "Dit is de actieve laag. Maak eerst een andere laag actief." Als u op de naam van een laag klikt om die actief te maken, wordt ze ook ingeschakeld en ontdooid.

Elke wijziging aan een laag, in het paneel of via een opdracht, is één stap ongedaan maken: {{key:Mod+Z}} zet hem terug.

## Met objecten aanwijzen om lagen te bewerken

U hoeft de naam van een laag niet te kennen: wijs een object erop aan. Typ de opdracht, of open {{ui:Hulpmiddelen}} bovenaan het paneel {{ui:Lagen}}.

| Opdracht | Wat het doet |
|---|---|
| {{cmd:LAYISO}} | Selecteer objecten en druk op {{key:Enter}}: alleen hun lagen blijven aan, elke andere laag wordt uitgeschakeld. Als de actieve laag is uitgeschakeld, wordt een van de geïsoleerde lagen actief. |
| {{cmd:LAYUNISO}} | Schakelt de lagen weer in die de laatste {{cmd:LAYISO}} had uitgeschakeld, en geeft de actieve laag terug die het had gewijzigd. |
| {{cmd:LAYOFF}} | Klik de objecten één voor één aan: de laag van elk object wordt uitgeschakeld. Typ `U` om het laatste terug te nemen, {{key:Enter}} om af te ronden. |
| {{cmd:LAYFRZ}} | Hetzelfde, maar elke laag wordt bevroren. |
| {{cmd:LAYMCUR}} | Klik op een object: de laag ervan wordt actief (en wordt ingeschakeld en ontdooid). Als er al één object is geselecteerd, wordt dat gebruikt. |
| {{cmd:LAYON}} | Schakelt elke laag in. |
| {{cmd:LAYTHW}} | Ontdooit elke laag. |

De actieve laag wordt op deze manier nooit uitgeschakeld of bevroren: de geschiedenis meldt dat, en u kunt eerst met {{cmd:LAYMCUR}} een andere laag actief maken. Als u een blokverwijzing aanwijst, wordt de eigen laag van de verwijzing gebruikt.

## Lagen hernoemen, samenvoegen en verwijderen

- {{cmd:RENAME}}: typ `LA`, de oude naam en de nieuwe. Elk object op de laag volgt. (`B` hernoemt een blok op dezelfde manier, met alle verwijzingen ernaar.)
- {{cmd:LAYMRG}}: klik op een object op elke laag die u wilt samenvoegen (of typ `N` en een naam), druk op {{key:Enter}}, wijs daarna de doellaag aan en antwoord `Y`. De objecten gaan naar de doellaag — in het model, op bladen en binnen blokken — en de samengevoegde lagen verdwijnen.
- {{cmd:LAYDEL}}: wijs een object op de laag aan (of `N` en de naam ervan) en antwoord `Y`. De laag verdwijnt **met elk object erop**, overal. Laag 0, DEFPOINTS en de actieve laag kunnen niet worden verwijderd.

Elk is één stap ongedaan maken. Alle drie staan in {{ui:Hulpmiddelen}} bovenaan het paneel {{ui:Lagen}}.

1. Klik op één wandlijn, typ daarna `LAYISO` en druk op {{key:Enter}}. Alleen `Walls` blijft aan.
2. Teken of wijzig op `Walls` wat u nodig hebt.
3. Typ `LAYUNISO` en druk op {{key:Enter}}. `Doors` en `Notes` komen terug.

## Veelgemaakte fouten

- **Nieuwe lijnen kwamen op de verkeerde laag.** Controleer welke stip gevuld is voordat u tekent. Een nieuwe laag wordt actief zodra u hem toevoegt.
- **Een object wil niet selecteren.** De laag is vergrendeld, uitgeschakeld of bevroren.
- **De laag wordt in een ander programma nog steeds afgedrukt.** DXF R12 kan "niet plotten" niet opslaan. CadCraft bewaart de instelling zelf wanneer de tekening een blad heeft, maar andere programma's zullen die laag wel plotten.
- **Laagnamen in hoofdletters na opslaan.** DXF R12 slaat namen op in hoofdletters, dus `Walls` komt terug als `WALLS`, en spaties worden `_`. Een opgeslagen DWG houdt namen zoals u ze typte.
- **Een laag hernoemen, samenvoegen of verwijderen.** Gebruik {{cmd:RENAME}}, {{cmd:LAYMRG}} of {{cmd:LAYDEL}} (ook in {{ui:Hulpmiddelen}}): zie hierboven.

## Lagen groeperen

Houd de lijst kort door lagen in mappen te zetten, zoals Bestaand, Voorgesteld en Installaties. Elke map klapt in en uit, en de schakelaars ervan zetten alle lagen erin aan of uit, bevriezen ze of vergrendelen ze samen. De actieve laag wordt nooit uitgeschakeld.

Kies in {{ui:Hulpmiddelen}} op het paneel {{ui:Lagen}} {{ui:Kant-en-klare groepen toevoegen}} voor een set die is gemaakt voor kleine woningbouw, {{ui:Groeperen op naam}} om lagen met hetzelfde voorvoegsel te groeperen (`E-Walls`, `E-Doors`), of {{ui:Nieuwe groep}}. Sleep een laag naar een map, of gebruik de lijst boven de lagen voor de actieve laag. Typ in {{ui:Zoek een laag}} om de lijst te beperken. `LAYGROUP` (`LG`) doet hetzelfde op de opdrachtregel.

De lagen zelf veranderen niet, dus andere CAD-programma's zien ze als een gewone platte lijst. CadCraft bewaart de groepen in het bestand.
