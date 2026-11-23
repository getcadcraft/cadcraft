---
title: Een tekening ordenen met lagen
summary: Maak lagen voor wanden, deuren en notities, stel kleuren in, maak een laag actief, en zet lagen uit, bevries, vergrendel of sluit ze uit van plots.
keywords: laag, lagen, la, actieve laag, bevriezen, ontdooien, vergrendelen, uit, aan, plotten, niet plotten, kleur, laageigenschappen, layiso, layuniso, isoleren, layoff, layfrz, laymcur, layon, laythw, hernoemen, laymrg, samenvoegen, laydel, laag verwijderen
from: ba9f0617
---

## Wat u gaat maken

Drie lagen, Wanden, Deuren en Notities, elk met een eigen kleur, met objecten erop getekend en tussen de lagen verplaatst.

## Het paneel Lagen

Lagen staan in het paneel links, onder {{ui:Lagen}}. Elke rij toont, van links naar rechts:

- een stip: gevuld voor de **actieve** laag, waar nieuwe objecten komen;
- een kleurvakje;
- de laagnaam;
- vier knoppen: aan/uit (oog), bevriezen (sneeuwvlok), vergrendelen (hangslot) en plotten (printer).

Elke tekening heeft een laag die `0` heet. Typ `LA` en druk op {{key:Enter}} om naar het paneel te springen.

## Lagen maken

1. Klik op {{ui:Nieuwe laag}} boven de lijst. Er opent een naamvak.
2. Typ `Walls` en druk op {{key:Enter}} (of klik op {{ui:Toevoegen}}).

De statusbalk zegt "Added layer Walls and made it current." De nieuwe laag krijgt kleur 7 (zwart op het lichte thema, wit op het donkere).

3. Klik opnieuw op {{ui:Nieuwe laag}}, typ `Doors` en druk op {{key:Enter}}.
4. Klik opnieuw op {{ui:Nieuwe laag}}, typ `Notes` en druk op {{key:Enter}}.

Notes is nu actief.

## Elke laag een kleur geven

1. Klik op het kleurvakje van de rij Walls. De kleurkiezer van uw systeem opent.
2. Kies een kleur en bevestig.

Het kleurvakje en alles op Walls dat de kleur {{ui:Op laag}} heeft, veranderen mee.

:::note
Een gekozen kleur die overeenkomt met een van de 255 standaard CAD-kleuren, wordt als dat nummer opgeslagen. Elke andere kleur blijft precies bewaard in CadCraft, maar wordt in een DWG- of DXF-bestand opgeslagen als de dichtstbijzijnde standaardkleur.
:::

## Tekenen op een laag

1. Klik op de naam **Walls** in de lijst. De stip wordt gevuld en de statusbalk zegt "Current layer: Walls".
2. Teken een rechthoek (`REC`). Hij komt op Walls.
3. Klik op **Doors** en teken een boog (`A`). Hij komt op Doors.

U kunt de actieve laag ook kiezen in {{ui:Huidige instellingen}} rechts (niets geselecteerd), onder {{ui:Laag}}.

## Objecten naar een andere laag verplaatsen

1. Selecteer de objecten.
2. Kies in het rechterpaneel de nieuwe laag in {{ui:Laag}}.

Ze verhuizen naar die laag en nemen de kleur ervan over als hun kleur {{ui:Op laag}} is.

## Uit, bevriezen, vergrendelen en plotten

| Knop | Wat het doet |
|---|---|
| Aan/uit (oog) | Verbergt de objecten van de laag. Ze kunnen niet worden gezien, geselecteerd of gesnapt. |
| Bevriezen (sneeuwvlok) | Heeft in CadCraft hetzelfde effect als uit. Apart gehouden omdat andere programma's ze verschillend behandelen, en de instelling wordt opgeslagen. |
| Vergrendelen (hangslot) | Objecten blijven zichtbaar en u kunt erop snappen, maar ze kunnen niet worden geselecteerd of gewijzigd. Handig voor een achtergrond die u overtrekt. |
| Plotten (printer) | Wanneer ingedrukt, wordt de laag op het scherm getoond maar **weggelaten uit plots** en PDF's. Gebruik dit voor hulplijnen en notities voor uzelf. |

Plaats de aanwijzer op een knop om te zien wat hij doet ("Uitzetten", "Bevriezen", "Vergrendelen", "Deze laag niet plotten").

U kunt de actieve laag niet uitzetten: de statusbalk zegt "That is the current layer. Make another layer current first." Klikken op de naam van een laag om haar actief te maken, zet haar ook aan en ontdooit haar.

Elke wijziging van een laag, in het paneel of via een opdracht, is één ongedaan-maken-stap: {{key:Mod+Z}} zet haar terug.

## Werken met lagen door objecten aan te wijzen

U hoeft de naam van een laag niet te kennen: wijs een object erop aan. Typ de opdracht, of open {{ui:Hulpmiddelen}} bovenaan het paneel {{ui:Lagen}}.

| Opdracht | Wat het doet |
|---|---|
| {{cmd:LAYISO}} | Selecteer objecten, druk op {{key:Enter}}: alleen hun lagen blijven aan, elke andere laag wordt uitgezet. Als de actieve laag uit staat, wordt een van de geïsoleerde lagen actief. |
| {{cmd:LAYUNISO}} | Zet de lagen weer aan die de laatste {{cmd:LAYISO}} uitzette, en geeft de actieve laag terug die ze had veranderd. |
| {{cmd:LAYOFF}} | Klik na elkaar op objecten: de laag van elk wordt uitgezet. Typ `U` om de laatste terug te nemen, {{key:Enter}} om af te ronden. |
| {{cmd:LAYFRZ}} | Hetzelfde, maar elke laag wordt bevroren. |
| {{cmd:LAYMCUR}} | Klik op een object: zijn laag wordt actief (en aan en ontdooid). Is er al één object geselecteerd, dan wordt dat gebruikt. |
| {{cmd:LAYON}} | Zet elke laag aan. |
| {{cmd:LAYTHW}} | Ontdooit elke laag. |

De actieve laag wordt op deze manier nooit uitgezet of bevroren: de geschiedenis zegt dat, en u kunt eerst een andere laag actief maken met {{cmd:LAYMCUR}}. Als u een blokverwijzing aanwijst, wordt de eigen laag van de verwijzing gebruikt.

## Lagen hernoemen, samenvoegen en verwijderen

- {{cmd:RENAME}}: typ `LA`, de oude naam en de nieuwe. Elk object op de laag volgt. (`B` hernoemt een blok op dezelfde manier, met elke verwijzing ernaar.)
- {{cmd:LAYMRG}}: klik op een object op elke laag die u wilt samenvoegen (of typ `N` en een naam), druk op {{key:Enter}}, kies dan de doellaag en antwoord `Y`. De objecten gaan naar de doellaag — in het model, op bladen en in blokken — en de samengevoegde lagen verdwijnen.
- {{cmd:LAYDEL}}: kies een object op de laag (of `N` en de naam) en antwoord `Y`. De laag verdwijnt **met elk object erop**, overal. Laag 0, DEFPOINTS en de actieve laag kunnen niet worden verwijderd.

Elk is één ongedaan-maken-stap. Alle drie staan in {{ui:Hulpmiddelen}} bovenaan het paneel {{ui:Lagen}}.

1. Klik op één wandlijn, typ `LAYISO` en druk op {{key:Enter}}. Alleen Walls blijft aan.
2. Teken of wijzig wat u nodig hebt op Walls.
3. Typ `LAYUNISO` en druk op {{key:Enter}}. Doors en Notes komen terug.

## Veelgemaakte fouten

- **Nieuwe lijnen kwamen op de verkeerde laag.** Controleer welke stip gevuld is voordat u tekent. Een nieuwe laag wordt actief zodra u hem toevoegt.
- **Een object wil niet selecteren.** De laag is vergrendeld, uitgezet of bevroren.
- **De laag wordt in een ander programma nog steeds geprint.** DXF R12 kan "niet plotten" niet bewaren. CadCraft bewaart de instelling zelf als de tekening een blad heeft, maar andere programma's plotten die laag wel.
- **Laagnamen in hoofdletters na opslaan.** DXF R12 bewaart namen in hoofdletters, dus `Walls` komt terug als `WALLS`, en spaties worden `_`. Een opgeslagen DWG bewaart namen zoals u ze typte.
- **Een laag hernoemen, samenvoegen of verwijderen.** Gebruik {{cmd:RENAME}}, {{cmd:LAYMRG}} of {{cmd:LAYDEL}} (ook in {{ui:Hulpmiddelen}}): zie hierboven.

## Lagen groeperen

Houd de lijst kort door lagen in mappen te zetten, zoals Bestaand, Ontwerp en Leidingen. Elke map klapt in en uit, en de schakelaars ervan zetten al zijn lagen aan of uit, bevriezen ze of vergrendelen ze samen. De actieve laag wordt nooit uitgezet.

Kies in {{ui:Hulpmiddelen}} op het paneel Lagen {{ui:Kant-en-klare groepen toevoegen}} voor een set die is gemaakt voor kleine woningbouw, {{ui:Groeperen op naam}} om lagen te groeperen die een voorvoegsel delen (`E-Walls`, `E-Doors`), of {{ui:Nieuwe groep}}. Sleep een laag naar een map, of gebruik de lijst boven de lagen voor de actieve laag. Typ in {{ui:Zoek een laag}} om de lijst te beperken. `LAYGROUP` (`LG`) doet hetzelfde op de opdrachtregel.

Om een groep te hernoemen, dubbelklikt u op de naam (of selecteert u hem en drukt u op {{key:F2}}), typt u de nieuwe naam en drukt u op {{key:Enter}}; {{key:Esc}} houdt de oude naam, en {{cmd:UNDO}} zet hem terug. {{ui:Nieuwe groep}} staat in {{ui:Hulpmiddelen}} op het paneel Lagen.

De lagen zelf veranderen niet, dus andere CAD-programma's zien ze als een gewone platte lijst. CadCraft bewaart de groepen in het bestand.
