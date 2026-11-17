---
title: Documenten en revisies (de kluis)
summary: Een stap-voor-stap doorloop van één echte klus: zet een projectmap onder beheer, check een tekening uit, wijzig die, check hem in met een notitie, stuur hem ter beoordeling, keur hem goed en geef hem vrij, bekijk de geschiedenis en waar hij wordt gebruikt, wat een tweede persoon ziet terwijl het bestand vergrendeld is, en hoe het werkt met cloudmappen.
keywords: kluis, documenten, doorloop, zelfstudie, uitchecken, inchecken, revisie, vrijgeven, goedkeuren, vergrendelen, geschiedenis, waar gebruikt, cloudmap, projectmap, documentbeheer, pdm, twee personen, gedeelde map
from: 3829528d
---

## Wat u gaat doen

U bent Ana, en werkt aan de Riverside Clinic met een collega, Ben. De tekeningen van het project staan in één map waar u beiden bij kunt (een gedeelde schijf, een gesynchroniseerde map of een cloudmap). Aan het eind is één bestand van de eerste kopie doorgegaan naar vrijgegeven revisie **A**, is het opnieuw gewijzigd als **B.1**, heeft u gezien wie wat deed, en heeft u gezien wat Ben ziet wanneer u het bestand hebt uitgecheckt.

Alles wordt bewaard in een verborgen map `.ccvault` naast uw bestanden: geen server, niets geüpload (een cloudmap is de uitzondering, zie de laatste stap). Voor elke knop en regel op één plek, zie het onderwerp *Documenten: uitchecken, revisies en vrijgave* waar uw app dat heeft.

## 1. De projectmap instellen

1. Kies {{ui:Documenten…}} in het menu {{ui:Meer}} van het tabblad **Beeld**, of typ `DOCUMENTS` (of `DOCS`) en druk op {{key:Enter}}.
2. Kies {{ui:Kies de projectmap}} en kies de map die de tekeningen van het project bevat. (Projectmappen werken in Studio en in browsers die een map kunnen openen, zoals Chrome en Edge. In andere browsers zegt het paneel dat.)
3. Kies {{ui:Wijzigen}} naast **U:** en typ uw naam, `Ana` (als het erom vraagt, ook de naam van deze computer). Het paneel zegt nu *U: Ana op* en uw computer. Uw naam komt bij alles wat u doet.
4. Kies {{ui:Een kluis in deze map starten}} en typ de naam van het project, `Riverside clinic`. Het paneel zegt *Kluis gestart voor Riverside clinic.*

## 2. Een bestand onder beheer brengen

1. Open **Bestanden niet in de kluis** en kies {{ui:Toevoegen}} naast `plans/A-101.dxf`.
2. Het verschijnt onder **Bestanden in de kluis** met revisie **A.1**, status **Werk in uitvoering**. A.1 is de eerste kopie; de kluis bewaart een kopie van elke revisie.

## 3. Uitchecken, wijzigen, inchecken

1. Kies {{ui:Openen}} naast `plans/A-101.dxf`. De tekening opent in CadCraft en het paneel sluit zodat u hem kunt zien. Het paneel is nog steeds één opdracht verwijderd: `DOCUMENTS`.
2. Open het paneel opnieuw en kies {{ui:Uitchecken}}. De rij zegt nu **Uitgecheckt door u**. Er is een vergrendelbestand gemaakt in `.ccvault/locks`; niemand anders kan dit bestand uitchecken totdat u het incheckt.
3. Teken iets: voeg een lijn toe, verplaats een muur. Niets wat u doet, kan over het bestand van de kluis worden opgeslagen tenzij de tekening aan u is uitgecheckt; Opslaan als werkt altijd voor een eigen kopie.
4. Open het paneel, kies {{ui:Inchecken}} en typ wat er veranderde (`Deur verplaatst`). Het paneel zegt *ingecheckt als A.2*. Het bestand in de projectmap is nu de tekening die u open had, en de vergrendeling is weg. Inchecken zonder wijziging behoudt de revisie.

Als u van gedachten verandert, geeft {{ui:Uitchecken ongedaan maken}} het bestand terug zonder nieuwe revisie.

## 4. Beoordelen en vrijgeven

1. Kies {{ui:Ter beoordeling sturen}}. De status wordt **Ter beoordeling** en het bestand is alleen-lezen.
2. Kies, voordat u goedkeurt, {{ui:Projectinstellingen}} en noem wie mag goedkeuren (één naam per regel), bijvoorbeeld `Ben` en `Carla`, en vink de regel aan dat de goedkeurder iemand anders moet zijn dan de auteur. Kies {{ui:Instellingen opslaan}}. Nu weigert de kluis zelf iedereen anders.
3. Ben (of Carla) kiest {{ui:Goedkeuren}} en typt de naam van de goedkeurder. De status wordt **Vrijgegeven** en de revisie wordt **A**, met *goedgekeurd door* en de naam. Een vrijgegeven bestand is alleen-lezen. {{ui:Terugsturen}} had het teruggezet naar Werk in uitvoering, met een reden.

De naam van de goedkeurder is de naam die in het paneel is getypt; het is een vastlegging van wie heeft getekend, geen bewijs van identiteit.

## 5. Een nieuwe revisie

1. Kies op het vrijgegeven bestand {{ui:Nieuwe revisie}}. U houdt het vast voor de volgende letter.
2. Wijzig het, en kies daarna {{ui:Inchecken}}. De revisie is **B.1**, werk in uitvoering. Geef het op dezelfde manier vrij en het wordt **B**. {{ui:Uitchecken ongedaan maken}} vóór de eerste inchecking laat het op **A** staan.

Revisieletters lopen A, B … Z, AA, AB. Als uw norm sommige letters overslaat, slaat de projectinstelling *De ASME Y14.35-volgorde gebruiken* I, O, Q, S, X en Z over voor de volgende revisies.

## 6. Bekijk wat er gebeurde

Kies de naam van het bestand om de details te openen:

- **{{ui:Geschiedenis}}**: elke gebeurtenis, nieuwste eerst, met wie, welke computer en wanneer: *Ingecheckt A.2* door Ana, *Vrijgegeven* door Ben, enzovoort.
- **{{ui:Revisies}}**: de revisietabel. {{ui:Kopie openen}} opent een revisie als gewone kopie die het bestand van de kluis niet kan overschrijven; {{ui:Vergelijken met}} toont wat er is toegevoegd, verwijderd en gewijzigd ten opzichte van de revisie ervoor, of een andere.
- **{{ui:Gebruikt}}**: de tekeningen waarnaar het verwijst (xrefs).
- **{{ui:Gebruikt door}}**: Gebruikt door toont elke andere tekening in de kluis die hiernaar verwijst: wijzig een basisplattegrond en u weet welke bladen u moet controleren.

## Revisie op het blad

Met de tekening open (en een indeling erin), kies {{ui:Revisieblok}}: een tabel van de vrijgegeven revisies wordt rechtsboven op het blad getekend. Kies {{ui:Titelblokken invullen}} om titelbloksattributen die als `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` of `APPROVED_BY` zijn gemarkeerd, in te vullen met de revisie, status, datum en goedkeurder van het bestand. Wanneer u de volgende vrijgave goedkeurt, wordt het revisieblok bijgewerkt.

## 7. Wat Ben ziet terwijl u het bestand vasthoudt

Check het bestand nu opnieuw uit, en vraag Ben de zelfde projectmap op zijn computer te openen en het paneel te openen. Op de rij van het bestand ziet hij **Uitgecheckt door Ana op** uw computer **sinds** het tijdstip, en geen knop {{ui:Uitchecken}}. Als hij het toch probeert, weigert de kluis: de vergrendeling is een bestand dat het systeem niet dubbel aanmaakt, zodat twee personen het bestand niet allebei kunnen vasthouden, zelfs niet in dezelfde seconde, wanneer de map op schijf staat in Studio. (In een browser geeft de map alleen een beste poging, en het paneel zegt dat onder **Map**.)

Als Ana weg is en Ben het bestand nodig heeft, maakt {{ui:Uitcheck verbreken}} het vrij. Hij moet een reden typen; die gaat in het logboek met wiens uitcheck het was. Wanneer het project beheerders vermeldt, kunnen alleen zij dat doen. Een uitcheck die ouder is dan de verouderingsgrens (standaard 14 dagen) wordt gemarkeerd als *lang geleden*. Na het verbreken wordt de late inchecking van Ana geweigerd, zodat u elkaar niet kunt overschrijven.

## 8. Cloudmappen

Een cloudmap is een projectmap die in de cloudopslag van uw team wordt bewaard, zodat het team geen gedeelde schijf nodig heeft. In Studio, aangemeld bij uw CadCraft-account, toont het paneel {{ui:Open een cloudmap}} naast {{ui:Kies de projectmap}}. Kies hem en kies de map, weergegeven als werkruimte / map. Een eigenaar van de werkruimte maakt de map eerst aan, en de cloudopslag van het team moet van kracht zijn. Alles hierboven werkt op dezelfde manier; de server maakt de vergrendeling, die streng is voor iedereen. Als u niet bent aangemeld, zegt het paneel dat u zich moet aanmelden. In een gewoon browsertabblad wordt de cloudknop niet aangeboden; gebruik Studio.

## Probeer het

Doorloop de acht stappen hierboven met een kopie van een echt bestand. Voor de stappen met twee personen hebt u een tweede persoon nodig, of twee vensters met twee namen. Als u het probeert met een echte gedeelde map, somt de Community-testpagina een controle op die precies dit vraagt, en neemt resultaten aan.
