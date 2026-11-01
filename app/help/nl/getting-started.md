---
title: Aan de slag met CadCraft
summary: Wat de tekenapp CadCraft doet, waar hij draait en uw eerste tekening, van een leeg scherm tot een opgeslagen bestand.
keywords: starten, eerste tekening, nieuw, openen, opslaan, opslaan als, beginnen, handleiding, introductie, snelstart
from: 1a56c575
---

CadCraft is een 2D-tekenapp. U tekent en bewerkt lijnen, bogen, polylijnen, tekst, maatvoering en blokken, richt bladen in met titelblokken en viewports en plot ze naar PDF. Het opent DWG- en DXF-tekeningen en slaat ze op als DWG of DXF.

Het draait in uw webbrowser. Er is niets te installeren: de site geeft u het adres en de hele app wordt in de pagina geladen. Uw tekeningen worden vanaf uw eigen computer geopend en er weer naar opgeslagen. **Er wordt niets geüpload.**

Hebt u eerder getekend, lees dan na deze pagina [Als u van andere tekensoftware komt](topic:coming-from). De meeste gewoonten gaan mee en de paar die dat niet doen, staan daar opgesomd.

## Liever begeleid worden?

Typ `TOUR` (of klik op {{ui:De rondleiding volgen}} op de startkaart, of op {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:De rondleiding opnieuw volgen}}). Zes korte stappen in een vak boven de tekening: een lijn en een cirkel tekenen, die verplaatsen, bijsnijden, iets wissen en maatvoeren. Elke stap is klaar zodra u hem doet, en u kunt een stap of de hele rondleiding overslaan. Hij start alleen de eerste keer vanzelf. Het [spiekbriefje](topic:cheat-sheet) heeft de 40 opdrachten die u het meest gebruikt en de [opdrachtenkaart](topic:command-map) elke opdracht die er is.

## Wat u nodig hebt

- Een recente Chrome, Edge, Firefox of Safari op een Mac-, Windows- of Linux-computer. Zie [Browsers en platforms](common:browsers).
- Een muis met wiel is het prettigst. Een trackpad werkt; zie [Muis, trackpad en aanraken](topic:mouse-trackpad-touch).
- Een toetsenbord. CadCraft wordt bediend met getypte opdrachten, zoals de meeste tekenprogramma's.

## Het idee in één alinea

U typt een opdracht (of klikt op de knop ervan) en de opdrachtregel onderaan stelt u één voor één vragen: "Geef het eerste punt op", "Geef het volgende punt op". Elke vraag beantwoordt u door in de tekening te klikken of een waarde te typen en daarna op {{key:Enter}} te drukken. {{key:Esc}} annuleert. Dat is het hele interactiemodel; al het andere is detail.

## Uw eerste tekening

U tekent een rechthoek van 4000 bij 3000 uit lijnen, zet een cirkel in het midden en slaat het bestand op.

1. Open CadCraft. De opdrachtregel onderaan toont `Opdracht:` en het tekengebied toont een kort kaartje, "Tekening beginnen".
2. Typ `L` en druk op {{key:Enter}}. U hoeft niet eerst op de opdrachtregel te klikken: wat u overal typt, komt daar terecht.
3. De prompt verandert in `Geef het eerste punt op:`. Typ `0,0` en druk op {{key:Enter}}.
4. Typ `@4000,0` en druk op {{key:Enter}}. Er verschijnt een lijn naar rechts. De `@` betekent "vanaf het laatste punt".
5. Typ `@0,3000` en druk op {{key:Enter}}.
6. Typ `@-4000,0` en druk op {{key:Enter}}.
7. Typ `C` en druk op {{key:Enter}}. `C` is de optie Sluiten: de laatste lijn gaat terug naar het eerste punt en de opdracht eindigt.
8. Klik in de groep Weergave van de werkbalk op {{ui:Alles tonen}}. De rechthoek vult het scherm.

U ziet nu vier lijnen die een rechthoek vormen, en de geschiedenis boven de opdrachtregel toont wat u hebt getypt.

9. Typ `C` en druk op {{key:Enter}} om de cirkelopdracht te starten.
10. Typ `2000,1500` en druk op {{key:Enter}} voor het middelpunt.
11. Typ `500` en druk op {{key:Enter}} voor de radius.

Er verschijnt een cirkel in het midden van de rechthoek.

12. Druk op {{key:Mod+S}}, of klik in de groep Bestand op {{ui:Opslaan}}.

De browser downloadt `Drawing1.dwg` naar uw gebruikelijke downloadmap en de geschiedenis meldt dat er een kopie als DWG is opgeslagen. Dat bestand opent weer in CadCraft en in de meeste andere CAD-programma's. (Hebt u eerder in deze browser in {{ui:Opslaan als}} DXF gekozen, dan wordt een nieuwe tekening in plaats daarvan opgeslagen als `Drawing1.dxf`.)

:::tip
Druk op {{key:Enter}} op een lege opdrachtregel om de laatste opdracht te herhalen. Druk op {{key:Space}} in plaats van {{key:Enter}} als u dat liever doet: buiten tekst doet het hetzelfde.
:::

## Een bestaande tekening openen

1. Druk op {{key:Mod+O}}, of klik op {{ui:Openen}}.
2. Kies een `.dwg`- of `.dxf`-bestand in de bestandskiezer.

U kunt ook een DWG- of DXF-bestand uit {{pick:mac=Finder|windows=Verkenner|linux=uw bestandsbeheerder}} slepen en op het tekengebied neerzetten. Het bestand wordt in de pagina gelezen; het verlaat uw computer nooit.

Zie [Bestanden: wat opent, wat wordt opgeslagen](topic:files) voor wat wordt behouden en wat wordt geconverteerd.

## Opslaan: wat u kunt verwachten

Opslaan in een browser werkt anders dan in een desktopprogramma:

- {{ui:Opslaan}} **downloadt altijd een nieuwe kopie**. Het overschrijft het bestand dat u hebt geopend niet. Staat er al een bestand met dezelfde naam in de downloadmap, dan voegt de browser meestal een nummer toe, zoals `Drawing1 (1).dwg`.
- {{ui:Opslaan}} gebruikt het formaat van de tekening: DWG als u een DWG hebt geopend, DXF als u een DXF hebt geopend. Om te kiezen drukt u op {{key:Mod+Shift+S}} of klikt u op {{ui:Opslaan als}} en kiest u {{ui:DWG}} (en de versie ervan), {{ui:DXF R12}} of {{ui:DXF 2000}}. Zie [Opslaan](topic:files#saving).
- Het bestand dat u hebt geopend, wordt nooit gewijzigd.
- Opent u een ander bestand, of {{ui:Nieuw}}, dan komt het in een eigen tabblad boven de tekening, zodat niets wat u open hebt wordt gesloten. Sluit u het tabblad van een tekening of verlaat u de pagina met niet-opgeslagen wijzigingen, dan vraagt CadCraft eerst: {{ui:Eerst een kopie opslaan}}, weggooien of {{ui:Annuleren}}. Sluit u het browsertabblad, dan verschijnt in plaats daarvan de eigen vraag van de browser "Site verlaten?".

Opslaan in de cloud is nog niet beschikbaar. Waar uw bestanden naartoe gaan en waarom ze privé blijven, wordt uitgelegd in [Uw bestanden en privacy](common:your-files).

## Waar u daarna naartoe kunt

Druk op {{key:F1}} of klik in de balk bovenaan op {{ui:Help}} om deze Help op elk moment naast de tekening te openen. Hij werkt zonder verbinding.

- [Het CadCraft-scherm](topic:workspace) noemt elke balk en elk paneel.
- [Tekenen met coördinaten](topic:draw-with-coordinates) is de beste eerste rondleiding.
- [Toetsenbord en muis](topic:keyboard) toont elke toets.
- Typ `HELP` op de opdrachtregel voor een lijst met alle opdrachten, of lees de [Opdrachtenreferentie](topic:commands).
