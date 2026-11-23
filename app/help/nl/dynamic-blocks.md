---
title: Dynamische blokken
summary: Wat CadCraft doet met dynamische blokken in een DWG: ze behouden hun echte namen, tonen de status waarin ze zijn opgeslagen, schakelen zichtbaarheidsstatussen, tonen hun overige waarden en blijven dynamisch bij het opslaan.
keywords: dynamisch blok, dynamische blokken, zichtbaarheid, zichtbaarheidsstatus, spiegelen, uitrekken, opzoeken, parameters, aangepast, blokeigenschappen, *u-blokken, dynamisch
from: dea2ee7c
---

## Wat werkt

Een DWG met dynamische blokken opent met deze functies:

- **Hun echte namen.** Een dynamisch blok staat in het paneel {{ui:Blokken}} onder zijn eigen naam ("Stopcontact", "Gootsteen"), niet als naamloos `*U`-blok.
- **De status waarin ze zijn opgeslagen.** Elke verwijzing toont precies wat het andere programma toonde: de zichtbaarheidsstatus waarop hij stond, uitgerekt of omgedraaid zoals hij is opgeslagen.
- **Wisselen van de zichtbaarheidsstatus.** Selecteer één verwijzing (of meerdere van hetzelfde blok), open {{ui:Eigenschappen}}, en kies in de sectie {{ui:Aangepast}} een andere status uit de lijst {{ui:Zichtbaarheid}}. De verwijzing toont die status meteen, ook haar attributen: die welke de status verbergt verdwijnen, die welke hij toont verschijnen met hun waarden. Een verwijzing behoudt elke waarde, dus niets komt leeg terug; {{ui:Eigenschappen}} toont de verborgen waarden gemarkeerd als "verborgen". {{key:Mod+Z}} zet de oude status in één stap terug.
- **Grips.** Een geselecteerd dynamisch blok toont zijn eigen grips waar zijn parameters zitten: een kleine driehoek voor de zichtbaarheidsstatus (klik erop voor de lijst met statussen), pijlen aan de uiteinden van een afstand, een dubbele pijl voor een omdraaiing. Alleen de zichtbaarheidsgrip werkt nu; de andere melden dat in de statusbalk.
- **De overige waarden, alleen-lezen.** Onder de lijst met zichtbaarheid toont {{ui:Aangepast}} ook de afstanden, uitlijnhoeken, omdraaistatussen en punten van het blok zoals de tekening ze bevat.
- **Zichtbaarheidsstatussen bewerken.** Open het blok met {{cmd:BEDIT}}: de editor toont één status, die in de balk boven de tekening wordt genoemd (kies daar een andere). Typ {{cmd:BVSTATE}} om te wisselen, of om een status toe te voegen (alles verbergen, alles tonen of behouden wat zichtbaar is), te hernoemen of te verwijderen; {{cmd:BVHIDE}} verbergt geselecteerde objecten in de zichtbare status; {{cmd:BVSHOW}} toont de verborgen objecten vervaagd, zodat u de objecten kunt aanklikken om ze terug te halen. Sla het blok op: verwijzingen naar een hernoemde status behouden die onder de nieuwe naam, en verwijzingen naar een verwijderde status tonen de eerste status.
- **Blijven dynamisch.** Opgeslagen als DWG in de versie waarin de tekening binnenkwam, blijven de blokken dynamisch, met de status die u koos: het andere programma opent ze als dezelfde dynamische blokken. Zichtbaarheidsstatussen die u hebt bewerkt, worden ook opgeslagen: hun nieuwe namen, de statussen die u toevoegde en wat elke status toont.

## Wat alleen leesbaar is, of nog niet aanwezig

| Nog niet aanwezig | In plaats daarvan, nu |
|---|---|
| Afstanden, hoeken of omdraaiingen wijzigen (uitrek-, verplaats- en omdraaiacties) | Ze worden alleen-lezen getoond in {{ui:Aangepast}}; bewerk ze in het programma dat het blok heeft gemaakt. |
| Opzoek-, XY-, rotatie- en poolparameters | Nog niet gelezen: de verwijzing toont zoals opgeslagen. |
| De grips voor afstand, omdraaien en punten slepen | Ze tonen waar de parameters zitten; de zichtbaarheidsgrip en de lijst {{ui:Zichtbaarheid}} in Eigenschappen schakelen de statussen. |
| Dynamische blokken maken van de soort van het andere programma (uitrekken, omdraaien, opzoeken) | Blokken die u in CadCraft maakt, zijn gewone blokken; {{cmd:BPARAMETER}} zegt dat. Uw eigen parameters en meerdere zichtbaarheidsparameters staan in het beheer van parameters (zie "Uw eigen parameters en zichtbaarheidsstatussen" hieronder). |
| Objecten van een blok met zichtbaarheidsstatussen toevoegen of wissen in de blokeditor | Het blok wordt dan als gewoon blok opgeslagen (de editor zegt dat bij sluiten). |
| Dynamisch houden in een andere DWG-versie of in DXF | Ze worden als gewone blokken opgeslagen die de status tonen die u koos, en het opslaan zegt dat. |

:::note
Objecten verplaatsen of wijzigen in {{cmd:BEDIT}} houdt een blok met zichtbaarheidsstatussen dynamisch. Een blok zonder statussen, of een blok waarvan objecten in de editor zijn toegevoegd of gewist, wordt een gewoon blok.
:::

## Uw eigen parameters en zichtbaarheidsstatussen

Een blok dat u in CadCraft maakt, kan zijn eigen parameters dragen, en **meerdere** zichtbaarheidsparameters, elk met eigen statussen. Typ {{cmd:BPARAMS}} (of `BPM`) om het **beheer van parameters** te openen voor het blok dat u in {{cmd:BEDIT}} bewerkt, voor het blok van de geselecteerde verwijzing, of voor het blok dat u noemt.

- **Parameters**: een naam, een soort (getal, lengte, hoek, aantal, ja/nee), en een waarde of een formule over andere parameters (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Komt uit op}} toont het resultaat. Een formule die niet werkt, of een waarde die niet bij haar soort past (een aantal van 1,5), wordt geweigerd en het beheer zegt waarom; er verandert verder niets.
- **Zichtbaarheidsparameters**: {{ui:Zichtbaarheidsparameter toevoegen}} maakt er één met een eerste status. Elke status kan worden hernoemd, verwijderd (de laatste blijft staan) of een getal "toont bij" krijgen. Een formule kiest de status uit de parameters (de status waarvan het getal overeenkomt, anders de status op die plaats in de lijst); zonder formule kiest elke verwijzing zelf.
- **Objecten in een status plaatsen**: selecteer in de blokeditor de objecten, typ {{cmd:BPARAMS}} en klik bij de status op {{ui:Zet de geselecteerde objecten hier}}. Objecten die geen zichtbaarheidsparameter noemt, worden altijd getoond.
- **Deze verwijzing**: gestart op een geselecteerde verwijzing, toont het beheer ook de eigen waarden en statussen van die verwijzing.

Buiten de blokeditor is elke wijziging één ongedaan-maken-stap. In de blokeditor zijn de wijzigingen van de editor: {{ui:Blok opslaan}} bewaart ze. `-BPARAMS` vraagt hetzelfde op de opdrachtregel.

**In het bestand.** DWG en DXF bewaren de parameters, welke objecten in welke status zitten, en de eigen waarden van elke verwijzing, in de eigen gegevens van CadCraft; open het bestand weer in CadCraft en alles is terug. Een ander programma ziet elke verwijzing als het blok met al zijn objecten, omdat een DWG per blok van zijn eigen soort maximaal één zichtbaarheidsparameter bevat. Een verwijzing die een ander programma heeft verplaatst, of een blok waarvan het objecten heeft gewijzigd, komt terug zonder de delen die niet meer kloppen (er wordt niets geraden).
