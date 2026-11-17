---
title: Objecten selecteren
summary: Kies objecten één voor één, met een venster of een kruisvenster, vóór of tijdens een commando, en haal objecten weer uit een selectie.
keywords: selecteren, selectie, venster, kruisvenster, naamwoord-werkwoord, werkwoord-naamwoord, kiezen, alles, laatste, vorige, hekje, verwijderen, toevoegen, tab, doorlopen, overlappend, qselect, snelselectie, filter, gelijke selecteren, selectsimilar, shift, selectie opheffen, ctrl+a, pickfirst
from: 676508c7
---

## Wat u leert

Hoe u de objecten kiest waarop een commando werkt. CadCraft heeft twee manieren van werken, en beide zijn goed:

- **Eerst selecteren, dan het commando** (naamwoord-werkwoord). Selecteer objecten en typ daarna `M` voor Verplaatsen. Het commando neemt uw selectie over en gaat direct door naar de volgende vraag.
- **Eerst het commando, dan selecteren** (werkwoord-naamwoord). Typ `M`; het commando vraagt `Selecteer objecten:`; u selecteert en drukt daarna op {{key:Enter}}.

## Eén object tegelijk kiezen

1. Zonder dat een commando loopt, klikt u op een lijn. Die wordt gemarkeerd en de grips (kleine vierkantjes) verschijnen. Het rechterpaneel toont de eigenschappen.
2. Klik op een ander object. Het wordt aan de selectie toegevoegd.
3. Houd {{key:Shift}} ingedrukt en klik op een geselecteerd object. Het wordt uit de selectie gehaald.
4. Druk op {{key:Esc}}. Niets is geselecteerd.

## Venster en kruisvenster

Klik één keer op een lege plek, beweeg, en klik opnieuw: dan krijgt u een rechthoek. Indrukken en slepen tekent in plaats daarvan een vrije lasso, met dezelfde twee soorten (zie [Lassoselectie](topic:lasso-selection); {{ui:Instellingen}} kan maken dat een sleep de rechthoek tekent). Welke objecten u krijgt, hangt af van de richting:

| U beweegt | Kader | Selecteert |
|---|---|---|
| Links naar rechts | Venster | Alleen objecten die **volledig binnen** het kader liggen |
| Rechts naar links | Kruisvenster | Objecten binnen het kader **en** objecten die het raakt |

1. Teken een paar elkaar overlappende lijnen en cirkels.
2. Klik op een lege plek links van enkele objecten, beweeg naar rechts en klik opnieuw. Alleen de objecten die volledig binnen liggen, worden geselecteerd.
3. Druk op {{key:Esc}}.
4. Klik op een lege plek rechts, beweeg naar links over enkele objecten en klik opnieuw. Alles wat het kader raakt, wordt geselecteerd.
5. Houd {{key:Shift}} ingedrukt en teken een kader of lasso over enkele geselecteerde objecten. Die worden uit de selectie gehaald.

## Selecteren, dan een commando uitvoeren

1. Selecteer twee cirkels.
2. Typ `M` en druk op {{key:Enter}}.

De geschiedenis zegt `2 gevonden`, en de prompt gaat meteen naar `Geef het basispunt op`. Rond de verplaatsing af (zie [Verplaatsen, kopiëren, roteren, schalen en spiegelen](topic:modify-objects)).

Wanneer een commando eindigt, wordt de selectie gewist, zodat het volgende commando opnieuw begint.

Commando's die zo een selectie aannemen: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} en {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} en {{cmd:CHAMFER}} vragen altijd om objecten één voor één te kiezen. {{cmd:TRIM}} en {{cmd:EXTEND}} nemen een klik of een pad waar u doorheen sleept langs de stukken (zie [Bijsnijden en verlengen](topic:trim-and-extend)).

## Eerst het commando, dan selecteren

1. Zorg dat niets is geselecteerd ({{key:Esc}}).
2. Typ `E` en druk op {{key:Enter}}. De prompt luidt `Selecteer objecten:`.
3. Klik op objecten, of sleep vensters en kruisvensters. De geschiedenis telt elke keuze (`1 gevonden`, `3 gevonden`).
4. Druk op {{key:Enter}}, druk op {{key:Space}} of klik met de rechtermuisknop om het selecteren te beëindigen.

De objecten worden gewist, en de geschiedenis zegt hoeveel.

Bij een prompt `Selecteer objecten:` kunt u ook typen:

- `ALL`, dan {{key:Enter}}: elk object dat u in het geopende tabblad kunt bewerken.
- Laatste (`L` of `LAST`), dan {{key:Enter}}: het laatst getekende object.
- Vorige (`P`): de objecten waar het laatste commando op werkte, als ze er nog zijn.
- Hekje (`F`): klik of typ punten langs een lijn; elk object dat de lijn kruist, wordt toegevoegd. Druk op {{key:Enter}} om het hekje te beëindigen. Ongedaan maken (`U`) neemt het laatste punt terug.
- Venster (`W`) of Kruisvenster (`C`): twee hoeken, in welke richting u ook sleept.
- Verwijderen (`R`): vanaf dan halen klikken, vensters en hekjes objecten **uit** de selectie. De prompt luidt `Objecten verwijderen:`. Toevoegen (`A`) schakelt terug.
- `?`: de lijst van deze opties in de geschiedenis.

Deze opties worden niet in de prompt getoond, net als in AutoCAD.

## Eén van meerdere objecten die op elkaar liggen kiezen

Waar objecten overlappen of elkaar raken, pakt een klik het dichtstbijzijnde. Om een ander te krijgen:

1. Houd de aanwijzer stil boven de plek.
2. Druk op {{key:Tab}}. Het volgende object daar wordt gemarkeerd, en de statusbalk zegt welk het is ("2 van 3: Lijn op laag Walls").
3. Druk opnieuw op {{key:Tab}} tot het gewenste object is gemarkeerd, en klik dan zonder te bewegen.

Bewegen van de aanwijzer begint opnieuw. Dit werkt zonder lopend commando, bij `Selecteer objecten:`, en overal waar een commando u vraagt één object te kiezen.

## Selecteren op een regel: Snelselectie

{{cmd:QSELECT}} (`QS`, of {{ui:Bewerken}} › {{ui:Meer}} › {{ui:Snelselectie}}) selecteert elk object dat aan een regel voldoet, zoals elke cirkel met een straal kleiner dan 50, of elke blokverwijzing met de naam DOOR-900.

1. Open {{ui:Snelselectie}}.
2. Kies {{ui:Objecttype}} (de lijst telt elk type), dan {{ui:Eigenschap}}: {{ui:Laag}}, {{ui:Kleur}} en, voor sommige typen, {{ui:Lengte}}, {{ui:Radius}}, {{ui:Oppervlakte}}, {{ui:Teksthoogte}}, {{ui:Tekstinhoud}}, {{ui:Bloknaam}} of {{ui:Arceringspatroon}}.
3. Kies {{ui:Operator}} en {{ui:Waarde}}. `*` zoekt met jokertekens (`DOOR-*`); {{ui:Alles selecteren}} neemt elk object van het type. De telling onderaan toont hoeveel er overeenkomen terwijl u kiest.
4. {{ui:Hoe toepassen}}: de overeenkomsten opnemen, of al het andere. {{ui:Toepassen op}} {{ui:Huidige selectie}} beperkt wat u had geselecteerd. {{ui:Toevoegen aan huidige selectie}} voegt er aan toe.
5. Klik op {{ui:Selecteren}}. Voer daarna het commando uit dat u wilt: het gebruikt de selectie.

## Gelijke selecteren

Selecteer één of meer objecten en typ {{cmd:SELECTSIMILAR}} (`SIM`), of kies {{ui:Bewerken}} › {{ui:Meer}} › {{ui:Gelijke selecteren}}. Elk object van hetzelfde type, op dezelfde laag en met dezelfde kleur, wordt geselecteerd. Blokverwijzingen moeten ook hetzelfde blok hebben, arceringen hetzelfde patroon. Typ `SE` bij de prompt `Selecteer objecten` om te kiezen wat moet overeenkomen.

## Nu selecteren, later gebruiken

Typ `SELECT` en druk op {{key:Enter}}, kies objecten op een van de bovenstaande manieren, en druk op {{key:Enter}}. Ze blijven geselecteerd voor het volgende commando, en `P` kiest ze opnieuw bij een latere prompt `Selecteer objecten:`.

## Alles selecteren

Zonder lopend commando drukt u op {{key:Mod+A}}, of kiest u {{ui:Alles selecteren}} in het menu {{ui:Bewerken}} › {{ui:Meer}} van de werkbalk, om elk object te selecteren dat u op het geopende tabblad kunt bewerken. Als u iets op de opdrachtregel hebt getypt, selecteert {{key:Mod+A}} die tekst in plaats daarvan: druk eerst op {{key:Esc}} om die te wissen. Typ bij een prompt `Selecteer objecten:` `ALL`. {{ui:Selectie opheffen}} in hetzelfde menu, of {{key:Esc}}, wist de selectie.

:::tip
Als u wilt dat elke klik de selectie vervangt (en {{key:Shift}} er een object aan toevoegt), zet dan {{ui:Objecten aanklikken}} op {{ui:Vervangt de selectie}} in de [CadCraft-instellingen](topic:settings).
:::

## Wat niet geselecteerd kan worden

- Objecten op een laag die **uit**, **bevroren** of **vergrendeld** is. Vergrendelde objecten blijven zichtbaar, en u kunt er nog op snappen, maar u kunt ze niet selecteren of wijzigen.
- Op een bladtabblad het model dat binnen een viewport wordt getoond. U selecteert de eigen objecten van het blad (het titelblok, notities, de viewportkaders). Om het model te bewerken, gaat u naar het tabblad {{ui:Model}}.

## Snel wissen

Selecteer objecten en druk op {{key:Delete}} (of {{key:Backspace}} wanneer de opdrachtregel de cursor niet heeft). Op een Mac-toetsenbord werkt de toets met het label delete zodra u in de tekening hebt geklikt. Terwijl de opdrachtregel de cursor heeft, drukt u fn en delete samen in. Dit voert {{cmd:ERASE}} uit op de selectie. Gebeurt er niets, dan hebt u iets op de opdrachtregel getypt: druk op {{key:Esc}}, of typ `E` en druk op {{key:Enter}}.

## Veelgemaakte fouten

- **Het venster nam te weinig mee.** U sleepte van links naar rechts, en dat neemt alleen wat volledig binnen ligt. Sleep van rechts naar links voor een kruisvenster.
- **Een klik op een lege plek begon een kader.** Eén klik op een lege plek start een venster; de tweede klik voltooit het. Druk op {{key:Esc}} of klik met de rechtermuisknop om het te laten vallen.
- **Een klik op een lege plek liet de selectie los.** Dat gebeurt, tenzij u {{key:Shift}} ingedrukt houdt. Wilt u dat zo'n klik de selectie behoudt en u die alleen met {{key:Esc}} wist, zet dan {{ui:Klikken op een lege plek}} op {{ui:Behoudt de selectie}} in de [CadCraft-instellingen](topic:settings#clicking-an-empty-spot).
- **Het commando gebruikte objecten die u niet bedoelde.** Er was nog iets geselecteerd toen u het startte. Druk op {{key:Esc}} voordat u een commando start, zodat u met niets geselecteerd begint.
- **Na een commando is niets geselecteerd.** Dat is bewust: een voltooid commando wist de selectie.
