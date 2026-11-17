---
title: Opdrachtaliassen bewerken
summary: Houd uw eigen opdrachtaliassen bij in één tekstbestand in het vertrouwde formaat, importeer en exporteer een .pgp-bestand, en laad het opnieuw met REINIT.
keywords: alias, aliassen, aliasedit, pgp, sneltoets, korte naam, reinit, toetsenbord, aanpassen, aliassen bewerken
from: 6ab6fa0e
---

## Wat u leert

Hoe u eigen korte namen voor commando's toevoegt, bijvoorbeeld `LL` voor {{cmd:LINE}}, allemaal in één tekstbestand.

## Een alias toevoegen

1. Open {{ui:Weergave}} › {{ui:Meer}} › {{ui:Aliassen bewerken…}}, of typ {{cmd:ALIASEDIT}} en druk op {{key:Enter}}.
2. Voeg een regel toe met de alias, een komma en het commando na een sterretje:

```
LL,     *LINE
```

3. Klik op {{ui:Opslaan}}. De opdrachtregel zegt hoeveel van uw aliassen in gebruik zijn.
4. Typ `LL` en druk op {{key:Enter}}: LINE start.

Uw aliassen liggen boven die van CadCraft zelf. Een regel van u wint van een ingebouwde alias met dezelfde naam; verwijdert u uw regel, dan is de ingebouwde alias weer terug.

## Regels die CadCraft weigert

De editor somt elk probleem met zijn regelnummer op terwijl u typt:

- het commando bestaat niet;
- de alias is zelf de naam van een commando (`LINE, *CIRCLE` zou LINE verbergen);
- de regel is niet `ALIAS, *COMMAND`;
- dezelfde alias staat op twee regels (de latere wint).

Regels die een programma op uw computer starten, zoals `NOTEPAD, START, 1, *File to edit: ,`, worden overgeslagen met een melding: een app in de browser kan geen programma's starten.

## Uw aliassen uit een ander programma halen

1. Klik in de aliaseditor op {{ui:Importeren .pgp…}} en kies het bestand. U kunt ook een `.pgp`-bestand op de tekening slepen.
2. Controleer de problemen die worden getoond (commando's die CadCraft niet heeft, worden geweigerd; de rest werkt).
3. Klik op {{ui:Opslaan}}.

{{ui:Exporteren .pgp}} slaat de aliassen van CadCraft en die van u op als één bestand in hetzelfde formaat.

## Het bestand opnieuw laden

Typ {{cmd:REINIT}} en druk op {{key:Enter}} om uw aliasbestand opnieuw toe te passen. Het wordt in deze browser bewaard; de desktopapp bewaart het in zijn eigen map, en de cloudservice synchroniseert het.

## Sneltoetsen voor elk commando

Een alias wordt getypt; een sneltoets is een toets. Om een commando een eigen toets te geven:

1. Klik op {{ui:Weergave}} › {{ui:Meer}} › {{ui:Sneltoetsen…}}, of typ `KEYS` en druk op {{key:Enter}}.
2. Klik op het vak {{ui:Toets}} en druk op de toetsen, bijvoorbeeld {{key:Alt+Shift+C}}.
3. Schrijf in {{ui:Voert uit}} het commando, en indien gewenst wat u erna wilt typen: `CIRCLE`, of `ZOOM E`.
4. Klik op {{ui:Toevoegen}}.

Een toets heeft {{key:Mod}} of {{key:Alt}} nodig met een letter of cijfer, of een vrije functietoets ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Toetsen die CadCraft, de app of de browser al gebruiken, en toetsen die een knop Mijn hulpmiddelen heeft (zie [Eigen knoppen](topic:my-tools)), worden geweigerd, en het vak zegt waarom. Sneltoetsen worden bewaard in deze browser (of desktopapp); {{ui:Verwijderen}} haalt er een weg.
