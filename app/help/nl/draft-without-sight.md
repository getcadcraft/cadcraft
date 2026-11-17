---
title: Tekenen zonder zicht
summary: Zet Toegang aan en CadCraft leest elke opdracht en elk resultaat voor via uw schermlezer, beschrijft de tekening en wat er bij de cursor ligt, laat u de cursor met het toetsenbord verplaatsen, speelt een geluid af voor elke snap en grip, en neemt opdrachten via spraak aan waar uw browser dat op uw computer kan.
keywords: toegankelijkheid, schermlezer, blind, slechtziend, NVDA, VoiceOver, JAWS, Orca, toetsenbordcursor, spraakopdrachten, spraak, geluiden, snapgeluiden, tekening beschrijven, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Toegang** laat u tekenen zonder het scherm te zien. Het staat uit tot u het aanzet, zodat niemand het per ongeluk krijgt.

## Zet het aan

Open **Instellingen** (het tandwiel, of Ctrl+,), zoek **Tekenen zonder zicht** en kies **Aan**. Of typ `ACCESS` op de opdrachtregel en antwoord met `Aan`. Het wordt op deze computer onthouden.

Met Toegang aan:

- **Alles wat de opdrachtregel zegt, wordt voorgelezen** door uw schermlezer: wat u typte, de prompt die erom vraagt, het antwoord en elke fout. CadCraft gebruikt zijn eigen beleefde en dringende live-gebieden, dus een schermlezer die live-gebieden leest, hoeft niets extra in te stellen. Fouten en annuleringen onderbreken; al het andere wacht op zijn beurt.
- **Het tekengebied is bereikbaar.** Druk op Tab tot u "Tekening" hoort, of druk op Shift+Tab vanaf de opdrachtregel. Het is een gebied dat toetsen doorgeeft aan CadCraft.

## Toetsen op de tekening

| Toets | Wat het doet |
|---|---|
| Pijltjestoetsen | Verplaatsen de toetsenbordcursor. Een stap is ongeveer een honderdste van wat het scherm toont, afgerond op 1, 2 of 5. Shift beweegt tien keer zo ver, Ctrl een tiende. |
| Enter | Kiest het punt onder de cursor, precies zoals een klik zou doen. |
| Spatie | Drukt op Enter op de opdrachtregel: LINE afronden, de standaard kiezen. |
| Tab, Shift+Tab | Springt naar het volgende of vorige snappunt bij de cursor, het dichtstbijzijnde eerst. |
| G | Loopt door de grips van de geselecteerde objecten. |
| D | Beschrijf de tekening: hoeveel objecten, van welke soort, hoe groot, wat is geselecteerd. |
| W | Zegt waar de cursor is en hoe ver die van het laatste punt af staat. |
| N | Zegt wat er bij de cursor ligt, het dichtstbijzijnde eerst, met de afstand en de kant. |
| S | Beschrijft de geselecteerde objecten. |
| R | Herhaalt het laatste wat is gezegd. |
| V | Spraak aan of uit. |
| / | Gaat naar de opdrachtregel. |
| ? | Somt deze toetsen op. |

Bewegen met de toetsen zegt waar u terechtkomt. Wanneer een opdracht op een punt wacht, zegt het ook hoe ver en in welke richting u van het laatste punt staat, bijvoorbeeld "2400 vanaf het laatste punt, naar rechts, onder 0 graden".

## Opdrachten

- {{cmd:ACCESS}} zet Toegang, snapgeluiden en spraak aan of uit en zegt de stand.
- {{cmd:DESCRIBE}} zegt wat de tekening bevat.
- {{cmd:WHEREAMI}} zegt waar de cursor is.
- {{cmd:NEARBY}} zegt wat dicht bij de cursor ligt.
- {{cmd:SAYSEL}} zegt wat is geselecteerd, één zin per object.
- {{cmd:VOICE}} zet voorgelezen opdrachten aan of uit.

Deze vijf lezen de tekening en geven een antwoord; ze wijzigen niets.

## Geluiden voor snaps en grips

Zet **Geluiden voor snap en grip** aan in Instellingen. Elke soort snap heeft zijn eigen toonhoogte en geluid, zodat u een eindpunt kunt onderscheiden van een middelpunt, een middelpunt van een cirkel, een snijpunt en de rest, en een grip heeft een dubbele tik. Het geluid gaat naar links of rechts mee met de cursor over het scherm. De geluiden worden op uw computer gemaakt; er wordt niets gedownload.

## Opdrachten via spraak

Zet **Opdrachten via spraak** aan in Instellingen. Zeg een opdrachtnaam ("lijn", "cirkel", "verplaats") en zeg getallen zoals u ze zou voorlezen: "punt driehonderd komma vierhonderd", "afstand twaalfhonderd", "hoek vijfenveertig". "Enter", "annuleren", "ongedaan maken" en "opnieuw" doen wat ze zeggen. Wat werd gehoord, wordt teruggesproken, en een zinsdeel dat geen opdracht is, wordt gemeld, niet geraden.

**Waar de spraak wordt herkend.** CadCraft heeft geen eigen spraakdienst en stuurt geen geluid ergens heen. Het vraagt uw browser om spraak op deze computer te herkennen. Kan uw browser dat, dan is de keuze **Op deze computer** en verlaat geen geluid de computer. Kan hij dat niet, dan blijft spraak uit tenzij u **Online dienst van de browser** kiest, waarmee de browser geluid naar de spraakdienst van de maker kan sturen. Instellingen zegt welke van toepassing is voordat u beslist.

## Wat het nog niet doet

- Alleen CadCraft heeft Toegang. De andere zeven apps volgen, met dezelfde toetsen en geluiden.
- Tekst in een tekening (een notitie, een blokhnaam) wordt voorgelezen zoals ze is geschreven; ze wordt nooit als opdracht opgevat.
- Het is getest met synthetische controles en de browsertests; handmatige controles met NVDA, VoiceOver en een blinde of slechtziende tester moeten nog komen. Als u het probeert, laat ons dan weten wat er ontbreekt.
