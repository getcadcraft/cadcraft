---
title: Opdrachtaliassen bewerken
summary: Bewaar uw eigen opdrachtaliassen in één tekstbestand in het vertrouwde formaat, importeer en exporteer een .pgp-bestand en laad het opnieuw met REINIT.
keywords: alias, aliassen, aliasedit, pgp, sneltoets, korte naam, reinit, toetsenbord, aanpassen, aliassen bewerken
from: 2282d36f
---

## Wat u leert

Hoe u eigen korte namen voor opdrachten toevoegt, bijvoorbeeld `LL` voor {{cmd:LINE}}, allemaal in één tekstbestand.

## Een alias toevoegen

1. Open {{ui:Weergave}} › {{ui:Meer}} › {{ui:Aliassen bewerken…}}, of typ {{cmd:ALIASEDIT}} en druk op {{key:Enter}}.
2. Voeg een regel toe met de alias, een komma en de opdracht na een sterretje:

```
LL,     *LINE
```

3. Klik op {{ui:Opslaan}}. De opdrachtregel zegt hoeveel van uw aliassen in gebruik zijn.
4. Typ `LL` en druk op {{key:Enter}}: LINE start.

Uw aliassen liggen bovenop die van CadCraft. Een regel van u wint van een ingebouwde alias met dezelfde naam; verwijdert u uw regel, dan komt de ingebouwde alias terug.

## Regels die CadCraft weigert

De editor somt elk probleem met het regelnummer op terwijl u typt:

- de opdracht bestaat niet;
- de alias is zelf de naam van een opdracht (`LINE, *CIRCLE` zou LINE verbergen);
- de regel is niet `ALIAS, *OPDRACHT`;
- dezelfde alias staat op twee regels (de latere wint).

Regels die een programma op uw computer starten, zoals `NOTEPAD, START, 1, *File to edit: ,`, worden overgeslagen met een opmerking: een app in de browser kan geen programma's starten.

## Uw aliassen uit een ander programma halen

1. Klik in de aliaseditor op {{ui:Importeren .pgp…}} en kies het bestand. U kunt een `.pgp`-bestand ook op de tekening slepen.
2. Controleer de vermelde problemen (opdrachten die CadCraft niet heeft, worden geweigerd; de rest werkt).
3. Klik op {{ui:Opslaan}}.

{{ui:Exporteren .pgp}} slaat de aliassen van CadCraft én de uwe op als één bestand in hetzelfde formaat.

## Het bestand opnieuw laden

Typ {{cmd:REINIT}} en druk op {{key:Enter}} om uw aliasbestand opnieuw toe te passen. Het wordt in deze browser bewaard; de desktopapp bewaart het in de eigen map, en de cloudservice synchroniseert het.

## Letters voor de opties van een opdracht

Een alias noemt een opdracht. Om de letters te wijzigen waarmee u op de opties van een opdracht antwoordt (`P` voor Polair in {{cmd:ARRAY}}), zie [Geef opdrachtopties uw eigen letters](topic:option-letters).

## Sneltoetsen voor elke opdracht

Een alias wordt getypt; een sneltoets is een toets. Om een opdracht een eigen toets te geven:

1. Klik op {{ui:Weergave}} › {{ui:Meer}} › {{ui:Sneltoetsen…}}, of typ `KEYS` en druk op {{key:Enter}}.
2. Klik op het vak {{ui:Toets}} en druk op de toetsen, bijvoorbeeld {{key:Alt+Shift+C}}.
3. Schrijf bij {{ui:Voert uit}} de opdracht, en eventueel wat u daarna wilt typen: `CIRCLE`, of `ZOOM E`.
4. Klik op {{ui:Toevoegen}}.

Een sneltoets heeft {{key:Mod}} of {{key:Alt}} nodig met een letter of cijfer, of een vrije functietoets ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Toetsen die CadCraft, de app of de browser al gebruiken, en toetsen die een knop Mijn gereedschappen heeft (zie [Eigen knoppen](topic:my-tools)), worden geweigerd; het vak zegt waarom. Sneltoetsen worden in deze browser (of de desktopapp) bewaard; {{ui:Verwijderen}} haalt er één weg.
