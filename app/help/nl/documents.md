---
title: Documenten: uitchecken, revisies en vrijgave
summary: Houd de tekeningen van een projectmap onder controle: check een bestand uit zodat niemand anders het wijzigt, check het in als nieuwe revisie, stuur het ter beoordeling en geef het vrij met de naam van een goedkeurder; geschiedenis, wat wat gebruikt, een stuklijst en titelblokken die de revisie tonen.
keywords: projectinstellingen, goedkeurders, beheerders, revisieletters, ASME, alleen-lezen, revisies vergelijken, kopie openen, partcraft, bimcraft, documenten, DOCUMENTS, DOCS, kluis, documentbeheer, pdm, uitchecken, inchecken, checkout, checkin, vergrendelen, revisie, rev, revisieletter, vrijgeven, vrijgegeven, goedkeuren, goedkeuring, beoordeling, verouderd, waar gebruikt, stuklijst, bill of materials, titelblok, revisieblok, projectmap
from: ee938722
---

## Wat u gaat maken

Een projectmap waarin elke tekening een revisie (A.1, A.2 … daarna A, B …) en een status heeft (In bewerking, Ter beoordeling, Vrijgegeven, Verouderd). Slechts één persoon tegelijk kan een bestand wijzigen, en elk uitchecken, inchecken, elke goedkeuring en elk verbroken uitchecken wordt vastgelegd met wie het deed en wanneer.

Alles wordt in de map zelf bewaard, in een verborgen map `.ccvault` naast uw tekeningen. Een map op een gedeelde schijf of een gesynchroniseerde map werkt voor een heel team. Er is geen server en er wordt niets geüpload.

## Documenten openen

Typ `DOCUMENTS` (of `DOCS`) en druk op {{key:Enter}}. Het paneel opent naast de tekening.

Kies {{ui:Kies de projectmap}} en selecteer de map met de tekeningen van het project. Projectmappen werken in CadCraft Studio en in browsers die een map kunnen openen (Chrome, Edge). In andere browsers meldt het paneel dat.

De eerste keer typt u uw naam (die komt bij alles wat u doet) en de naam van deze computer. Als u bent aangemeld, staat uw naam er al.

## Een kluis starten

Een map die nog geen kluis is, biedt {{ui:Een kluis in deze map starten}} aan. Typ de naam van het project. Open daarna {{ui:Bestanden die niet in de kluis staan}} en kies bij elk bestand dat onder controle moet komen {{ui:Toevoegen}}. Een toegevoegd bestand begint bij revisie **A.1**, In bewerking.

## Een tekening wijzigen

1. Kies {{ui:Openen}} naast een tekening. Ze wordt in CadCraft geopend. Als ze niet aan u is uitgecheckt, kijkt u alleen en wijzigt u niets: Opslaan weigert er overheen te schrijven en zegt waarom (gebruik Opslaan als om een eigen kopie te bewaren).
2. Kies {{ui:Uitchecken}}. Niemand anders kan het bestand nu uitchecken; het paneel toont wie het heeft, op welke computer en sinds wanneer.
3. Teken.
4. Kies {{ui:Inchecken}} en geef aan wat er is veranderd. De geopende tekening wordt in haar eigen formaat in de projectmap opgeslagen en wordt de volgende revisie (A.1, daarna A.2). Inchecken zonder wijziging behoudt de revisie.

{{ui:Uitchecken ongedaan maken}} geeft het bestand terug zonder nieuwe revisie.

## Beoordelen en vrijgeven

- {{ui:Ter beoordeling sturen}}: het bestand is alleen-lezen zolang het wordt beoordeeld.
- {{ui:Goedkeuren}}: typ de naam van de goedkeurder. A.3 wordt **A**, Vrijgegeven. Vrijgegeven bestanden zijn alleen-lezen.
- {{ui:Terugsturen}}: terug naar In bewerking, met de reden.
- {{ui:Nieuwe revisie}} op een vrijgegeven bestand checkt het uit voor de volgende letter: de eerste inchecking wordt **B.1**. {{ui:Uitchecken ongedaan maken}} daarvoor laat het op A staan.
- {{ui:Verouderd maken}} haalt een vrijgegeven bestand uit gebruik.

Een project kan een lijst bijhouden van wie mag goedkeuren, en kan eisen dat de goedkeurder niet de persoon is die het bestand heeft ingecheckt (zie Projectinstellingen hieronder).

## Projectinstellingen

Open {{ui:Projectinstellingen}} in het paneel:

- **Goedkeurders**: één naam per regel. Zijn er namen, dan kunnen alleen zij een vrijgave goedkeuren.
- **De goedkeurder moet iemand anders zijn dan de auteur**: de "vier-ogen"-regel.
- **Beheerders**: één naam per regel. Zijn er namen, dan kunnen alleen zij de uitcheck van iemand anders verbreken of deze instellingen wijzigen.
- **Revisieletters die worden overgeslagen**: {{ui:ASME Y14.35-reeks gebruiken}} slaat I, O, Q, S, X en Z over, of typ uw eigen letters. Gegeven letters blijven staan; de keuze geldt voor de volgende revisies.
- **Een uitcheck telt als verouderd na**: het aantal dagen (standaard 14).

Kies {{ui:Instellingen opslaan}}. De wijziging wordt met de naam van wie hem maakte in het logboek geschreven.

## Iemand heeft een bestand uitgecheckt gelaten

{{ui:Uitcheck verbreken}} maakt een bestand vrij dat iemand anders heeft uitgecheckt (die persoon is weg, of zijn computer is uitgevallen). U moet een reden typen: die wordt in het logboek geschreven, met de naam van de eigenaar van de uitcheck. Heeft het project beheerders, dan kunnen alleen zij dit doen. Een uitcheck die ouder is dan 14 dagen wordt als lang geleden gemarkeerd.

## Geschiedenis, revisies, gebruikt, gebruikt door

Kies de naam van een bestand om te zien:

- {{ui:Geschiedenis}}: elke gebeurtenis, de nieuwste eerst, met wie, welke computer en wanneer.
- {{ui:Revisies}}: elke bewaarde revisie. Van elke revisie is een kopie in de kluis (dezelfde inhoud wordt één keer bewaard). {{ui:Kopie openen}} opent die revisie als gewone kopie die het bestand in de kluis niet kan overschrijven. {{ui:Vergelijken met}} somt op wat er tussen die revisie en de vorige (of een andere die u kiest) is toegevoegd, verwijderd en gewijzigd, en kleurt het op de tekening.
- {{ui:Gebruikt}}: de tekeningen waarnaar het verwijst (xrefs), de documenten waarnaar een IFC-model verwijst, de onderdelen van een PartCraft-samenstelling.
- {{ui:Gebruikt door}}: elk bestand in de kluis dat dit bestand gebruikt.

{{ui:Stuklijst (CSV)}} bewaart de lijst van alles wat een bestand gebruikt, per niveau, met hoeveelheden, revisies en statussen, voor een spreadsheet.

## Een revisieblok op het blad

Open een tekening die een indeling heeft en kies {{ui:Revisieblok}}. Een tabel met de vrijgegeven revisies (revisie, datum, door, goedgekeurd, omschrijving) wordt rechtsboven op het blad getekend dat u bekijkt. Wanneer u een vrijgave goedkeurt, wordt de tabel bijgewerkt.

## Revisie in het titelblok

Geef de attributen van uw titelblok een van deze tags en kies {{ui:Titelblokken invullen}} op de geopende tekening:

| Tag | Wordt ingevuld met |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | de revisie (B, of B.2 terwijl eraan wordt gewerkt) |
| `VAULT.STATE` | de status (Vrijgegeven …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | de datum van de laatste revisie |
| `VAULT.APPROVER`, `APPROVED_BY` | wie de laatste vrijgave heeft goedgekeurd |

## PartCraft en BimCraft

PartCraft en BimCraft hebben hetzelfde paneel Documenten voor hun eigen bestanden: onderdelen en samenstellingen in PartCraft, IFC-modellen in BimCraft. Inchecken slaat het geopende model op in de projectmap, en een samenstelling toont welke onderdelen het gebruikt en een stuklijst.

## Goed om te weten

- Twee personen op dezelfde gedeelde map kunnen niet allebei hetzelfde bestand uitchecken: de uitcheck is een bestand dat het systeem weigert twee keer aan te maken. In een browser, en in een Studio waarvan de shell ouder is dan deze functie, is dit zo streng als de map toelaat: twee uitcheckingen in precies dezelfde seconde kunnen beide slagen. Het paneel zegt welke van toepassing is.
- Bewerk of verwijder de map `.ccvault` niet met de hand. Het logboek daarin is de registratie; de kluis bouwt zijn lijst indien nodig daaruit opnieuw op.
- Een bestand in de map wijzigen zonder het uit te checken, wordt getoond als {{ui:In de map gewijzigd zonder uitcheck}}.
