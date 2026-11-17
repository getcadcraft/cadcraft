---
title: Menu's, toetsen en muis
summary: Kies een menustijl die past bij de manier waarop u al werkt, geef elke opdracht uw eigen toets of een toets die een opdracht typt, verplaats opdrachten tussen lintbladen, en stel in wat het wiel en de muisknoppen doen.
keywords: menustijl, menu's, lint, werkbalk, opdrachtregel, sneltoetsen, hotkeys, toetsen, aanpassen, opnieuw toewijzen, snelkoppelingen, tekstsleutels, muis, wiel, omkeren, zoomrichting, middelste knop, rechterknop, verschuiven, exporteren, importeren, overschakelen, vertrouwd, Klassiek tekenen
from: 8bbf4f88
---

De opdrachten van CadCraft zijn hetzelfde, hoe u ze ook bereikt, en de opdrachtregel is altijd aanwezig met zijn aliassen (`L`, `C`, `TR` …). Een **menustijl** bepaalt alleen waar de knoppen op het scherm staan, hoe ze daar heten en welke toetsen ze uitvoeren. Kies er een bij {{ui:Instellingen}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menu's, toetsen en muis}}; de wijziging is meteen zichtbaar, en deze browser onthoudt haar.

## De drie stijlen

| Stijl | Wat u krijgt |
|---|---|
| {{ui:CadCraft}} | De eigen werkbalk van CadCraft: Bestand, Tekenen, Wijzigen, Annoteren, Parametrisch, Blokken, Bladen, Bewerken en Weergave, elk met een menu {{ui:Meer}}. De start. |
| {{ui:Klassiek tekenen}} | Een lint, ingedeeld zoals klassieke 2D-tekenprogramma's dat doen: een menu {{ui:Bestand}} en snelknoppen, daarna de tabbladen {{ui:Start}} (Tekenen, Wijzigen, Annotatie, Lagen, Blok, Eigenschappen, Hulpprogramma's, Klembord), {{ui:Invoegen}}, {{ui:Annoteren}}, {{ui:Parametrisch}}, {{ui:Weergave}}, {{ui:Beheren}}, {{ui:Uitvoer}} en {{ui:3D}}. Typ opdrachten zoals altijd. De middelste knop verschuift; een klik met de rechterknop is {{key:Enter}}, en slepen met de rechterknop doet niets. |
| {{ui:Lint}} | Een lint met eenvoudige taaktabbladen: {{ui:Tekenen}}, {{ui:Wijzigen}}, {{ui:Annoteren}}, {{ui:Parametrisch}}, {{ui:Blokken}}, {{ui:Bladen}}, {{ui:Weergave}}, {{ui:3D}} en {{ui:Hulpmiddelen}}, met een menu {{ui:Bestand}} en snelknoppen rechts. De middelste en rechterknop verschuiven, zoals in de eigen stijl van CadCraft. |

Elke stijl behoudt de toetsen van CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, en {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} voor de tekenhulpmiddelen. Letters zijn nooit toetsen: CadCraft typt ze in de opdrachtregel.

De linten bevatten ook de hulpmiddelen van het paneel {{ui:Lagen}} en de tekenhulpmiddelen van de statusbalk. Het tabblad {{ui:3D}} vult zich zodra het 3D-tabblad onder de tekening is geopend; een 3D-hulpmiddel dat u op het tabblad Model kiest, opent eerst het 3D-tabblad, en een 2D-hulpmiddel dat u op het 3D-tabblad kiest, gaat eerst terug naar het tabblad Model.

:::tip
Een toets die bij de eigen indeling van CadCraft hoort, maar die uw stijl aan een andere opdracht heeft gegeven, doet niets, en de statusbalk meldt waar die opdracht naartoe is gegaan ("In Mijn toetsen staat Ortho op Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} en de pijltjestoetsen behouden altijd hun betekenis. Terwijl een opdracht loopt, of terwijl letters op de opdrachtregel worden getypt, horen toetsen bij de opdrachtregel.
:::

## Maak het uw eigen

1. Kies de stijl die het dichtst bij wat u wilt ligt en klik daarna op {{ui:Aanpassen…}}.
2. Zoek op {{ui:Toetsen en menu's}} een opdracht (het zoekvak helpt). Klik op {{ui:Een toets toevoegen}} en druk op de toets. Klik op een toets om die te verwijderen.
3. Bij een lint verplaatst {{ui:Waar het staat}} de opdracht naar een ander tabblad en paneel, naar het menu {{ui:Bestand}}, of naar {{ui:Alleen toetsen}}.
4. Stel bij {{ui:Muis}} het wiel en de knoppen in die de tekening verschuiven.
5. Geef het een naam en klik op {{ui:Opslaan}}.

Een ingebouwde stijl opslaan maakt uw eigen kopie ("Mijn Klassiek tekenen"); de ingebouwde verandert nooit. Een toets die aan twee opdrachten is toegewezen, wordt in rood getoond en moet worden opgelost voordat u kunt opslaan.

## Toetsen die een opdracht typen

{{cmd:SHORTCUTS}} (Weergave › Meer › {{ui:Sneltoetsen…}}) geeft een toets een complete opdrachtregel, zoals {{key:Ctrl+Alt+L}} voor `LINE` of {{key:F9}} voor `ZOOM E`. Deze toetsen horen bij de gebruikte stijl: de eerste keer dat deze versie opent, worden de toetsen die u in een oudere versie had gemaakt eenmalig overgenomen in uw eigen stijl "Mijn CadCraft-toetsen", en werken ze zoals voorheen. Bij het exporteren van de stijl worden ze meegenomen.

## Muis

- **Muiswiel**: {{ui:Omhoog scrollen zoomt in}} (de start) of {{ui:Omhoog scrollen zoomt uit}}, en hoe snel. Een samenknijpgebaar op het touchpad zoomt altijd zoals uw vingers bewegen.
- **Tekening verschuiven met**: de middelste knop, de rechterknop, of beide. Een klik met de rechterknop zonder slepen is altijd {{key:Enter}}. De linkerknop kiest en tekent altijd in CadCraft, dus het aanvinken ervan verandert hier niets.
- **Slepen in de 3D-weergaven**: het 3D-tabblad houdt in elke stijl zijn eigen knoppen aan (links draait om, midden en rechts verschuiven).

## Meenemen

{{ui:Exporteren}} slaat de gebruikte stijl op als een klein `.ccinput.json`-bestand; {{ui:Importeren…}} voegt er een toe, van een andere computer of een collega. Een geïmporteerd bestand kan alleen naar de eigen opdrachten van CadCraft verwijzen: al het andere erin wordt weggelaten en in de statusbalk geteld. {{ui:Deze stijl verwijderen}} verwijdert een van uw eigen stijlen.

:::note
Deze instellingen blijven in deze browser. {{ui:Deze stijl in elke app gebruiken}} onder de stijlkaarten zorgt ervoor dat elke app opent in de bijpassende stijl (de eigen werkbalk, een lint of Klassiek tekenen), met de wijzigingen die u in elke app hebt gemaakt. CadCraft heeft geen menubalkstijl: wanneer voor elke app de menubalk van een andere app is gekozen, behoudt CadCraft zijn eigen werkbalk.
:::

Gerelateerd: [Toetsenbord en muis](topic:keyboard) · [Instellingen van CadCraft](topic:settings) · [Overstappen van andere tekensoftware](topic:coming-from) · [Opdrachtaliassen](topic:command-aliases)
