---
title: Coördinaten en afstanden invoeren
summary: Alle manieren om een punt, een afstand, een hoek of een getal in de opdrachtregel van CadCraft te typen, met voorbeelden.
keywords: dynamische invoer, dyn, f12, tab, coördinaten, absoluut, relatief, poolcoördinaten, @, directe afstand, hoek, graden, laatste punt, lastpoint, punten typen, invoer, rekenen, berekening, rekenmachine, cal, plus, breuk, expressie
from: 7de9252d
---

## Punten

Wanneer de opdracht om een punt vraagt, typt u een van deze en drukt u op {{key:Enter}}:

| U typt | Betekenis | Voorbeeld |
|---|---|---|
| `x,y` | Absoluut: gemeten vanaf de oorsprong 0,0 | `2500,1200` |
| `#x,y` | Ook absoluut (geaccepteerd uit gewoonte) | `#2500,1200` |
| `@dx,dy` | Relatief: horizontaal en verticaal vanaf het laatste punt | `@600,0` |
| `@d<a` | Relatief poolcoördinaat: afstand en hoek vanaf het laatste punt | `@1500<45` |
| `d<a` | Absoluut poolcoördinaat: afstand en hoek vanaf de oorsprong | `3000<90` |
| een enkel getal | Directe afstand: zo ver van het basispunt, richting de kruisdraad | `1200` |
| `*x,y`, `@*dx,dy` | Wereldcoördinaten terwijl een UCS is ingesteld | `*0,0` |

Met een ingestelde UCS ({{cmd:UCS}}) worden `x,y`, `@dx,dy` en de hoek in `d<a` gemeten langs de assen van de UCS. Zie [De weergave draaien en uw eigen coördinaten gebruiken](topic:ucs-and-turned-view).

Of klik in de tekening; objectsnaps en Ortho gelden voor klikken.

Regels:

- Een komma scheidt X van Y. Decimalen gebruiken een punt: `1250.75,300`.
- Negatieve waarden gaan naar links en omlaag: `@-600,0`.
- Typ geen spaties: {{key:Space}} verzendt de regel, net als {{key:Enter}}.
- Getallen mogen exponenten gebruiken: `1e3` is 1000.
- Er worden geen eenheden getypt, en geen voet-en-duim-notatie. Typ gewone getallen in de tekeningeenheden.

## Het laatste punt

`@` telt vanaf het **laatste punt dat u bij een puntvraag hebt opgegeven**, in elke opdracht: een klik, een snap of een getypt punt. Het wordt tussen opdrachten onthouden, zodat u een nieuwe lijn kunt beginnen `@0,500` vanaf waar de vorige eindigde. Voordat u een punt hebt opgegeven, telt `@` vanaf 0,0.

Enkele plaatsen waar dit van belang is:

- Bij {{cmd:COPY}} is na de eerste kopie het laatste punt het punt van die kopie. `@600,0` tweemaal plaatst kopieën op 600 en 1200 vanaf het origineel.
- Nadat u een maatvoering hebt geplaatst, is het laatste punt de plek waar u de maatlijn hebt geplaatst, niet het eindpunt van de maatvoering.

Twijfelt u, gebruik dan een absoluut punt, een snap of een directe afstand.

## Directe afstand invoeren

Een los getal is een afstand vanaf het **basispunt** van de opdracht (het punt waar de gummiband begint) richting de kruisdraad:

1. Verplaats de kruisdraad in de gewenste richting.
2. Typ de afstand en druk op {{key:Enter}}.

Met {{ui:Ortho}} aan, wordt de richting vastgezet op recht horizontaal of recht verticaal. Zo is dit de snelste manier om rechte wanden te tekenen. Als er geen basispunt is, of de kruisdraad precies erop staat, wordt het getal geweigerd met "Punt of optiesleutelwoord vereist."

## Hoeken

- In graden, als gewoon getal: `30`, `-45`, `112.5`.
- Gemeten tegen de klok in vanaf de positieve X-richting (naar rechts): 0 is rechts, 90 omhoog, 180 links, 270 of -90 omlaag.
- Waar een hoek wordt gevraagd (rotatie, teksthoek), kunt u ook klikken: de hoek wordt gemeten van het basispunt naar de klik. Als er nog geen basispunt is, stelt de eerste klik het basispunt in en vraagt de prompt om een tweede punt.

## Afstanden

Waar een afstand wordt gevraagd (straal, offset, teksthoogte, schaalfactor):

- typ een positief getal (in een tekening met voet en duim ook `12'6"` of `6-1/2`: zie [Voet en duim](topic:units-papers-scales#feet-and-inches-and-fractions)), of
- klik een punt: de afstand vanaf het basispunt van de opdracht tot dat punt, of
- klik twee punten wanneer er geen basispunt is: de prompt verandert in `Specify second point`.

"Vereist een positief getal of twee punten." betekent dat de waarde geen getal was, of negatief was.

## Rekenen in een getypte waarde

Overal waar een lengte, een coördinaat, een hoek of een getal wordt getypt (de opdrachtregel, dynamische invoer, eigenschappenvakken en dialoogvensters), kunt u een berekening typen met `+`, `-`, `*`, `/` en haakjes, in plaats van die eerst uit te rekenen:

| Typ | Geeft |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (in een tekening met voet en duim) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, in de eenheden van de tekening (wanneer die zijn ingesteld) |
| `@4+7/16,0` | een punt 4.4375 rechts van het laatste punt |
| `360/7` | een hoek van 51.43 graden |

- Een streepje in een lengte hoort er nog steeds bij: `4-7/16` is 4 7/16 en `24'-6"` is 24 voet 6 duim. Om na een voetteken iets af te trekken, rondt u eerst de lengte af, `24'-0"-6"`, of zet u de berekening tussen haakjes met spaties rond het streepje, `(24' - 6")`. Binnen haakjes is een spatie een spatie; elders drukt die op {{key:Enter}}.
- Een gewoon getal dat bij een lengte wordt opgeteld, is in tekeningeenheden. Vermenigvuldigen of delen door een getal schaalt de lengte. Twee lengten met elkaar vermenigvuldigd geven een oppervlakte, dus `2'*3'` wordt geweigerd.
- `abs`, `round`, `ceil` en `floor` werken ook: `round(10/3)`.
- Een berekening die niet kan worden gelezen, wordt geweigerd met aanduiding waar het misging, bijvoorbeeld "De berekening eindigt te vroeg (teken 3): een waarde ontbreekt." Er wordt nooit iets als 0 gelezen. {{cmd:CAL}} toont de waarde van een berekening.

## Dynamische invoer

{{ui:Dyn}} ({{key:F12}}, in de statusbalk) plaatst de waarden naast de kruisdraad terwijl een opdracht om een punt vraagt.

- Zolang er nog geen basispunt is (het eerste punt van een lijn), zijn de twee velden **X** en **Y**.
- Daarna zijn het de **afstand** en de **hoek** vanaf het laatste punt.

Typen gaat nog steeds naar de opdrachtregel. Het veld naast de kruisdraad toont de invoer, en de gummiband volgt die.

1. Typ een waarde: die gaat in het gemarkeerde veld.
2. Druk op {{key:Tab}} (of op een komma na X). De waarde wordt vastgezet (vetgedrukt weergegeven) en het volgende veld wordt gemarkeerd. Een vastgezette afstand houdt de gummiband zo lang terwijl u met de muis richt.
3. Typ de tweede waarde, of richt alleen, en druk op {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} tekent 50 recht omhoog vanaf het laatste punt.

Druk op {{key:Enter}} na één waarde zonder {{key:Tab}}, dan werkt dit als directe afstand invoeren. Voet en duim werken ook in de velden (`12'6"`). Afstands- en hoekprompts (de straal van een cirkel, een rotatie) tonen hun waarde ook naast de kruisdraad.

## Opties en standaardwaarden

- Opties staan tussen vierkante haken. Typ de hoofdletters van een optie (`D` voor `[Diameter]`, `CL` voor `CLose`) en druk op {{key:Enter}}. Langere beginnen van het woord werken ook (`DIA`).
- Een standaardwaarde staat tussen punthaken, zoals `<500>`. Druk op {{key:Enter}} of klik met de rechtermuisknop om die te gebruiken.

## Andere toetsenbordindelingen en het numerieke toetsenblok

Opdrachtnamen, korte namen en optieletters zijn Latijnse letters. Met een Grieks, Cyrillisch (Russisch, Oekraïens, Wit-Russisch, Servisch, Macedonisch, Bulgaars), Hebreeuws, Arabisch, Perzisch, Thais of Koreaans toetsenbord actief hoeft u niet van indeling te wisselen: wanneer het woord dat u typte, zoals het er staat, geen opdracht, korte naam of optie is, leest CadCraft het aan de hand van de toetsen die u indrukte. De toets met `L` op een Latijns toetsenbord start nog steeds `LINE`, en de toets `C` beantwoordt nog steeds `Close`, welke letter de indeling er ook op zet. De lijst met overeenkomende opdrachten boven de opdrachtregel volgt dezelfde regel. Tekst die u typt waar een opdracht om tekst vraagt (de inhoud van {{cmd:TEXT}}, een naam), wordt nooit gewijzigd.

Op indelingen waarvan de decimaaltoets van het numerieke toetsenblok een komma geeft, typt die toets een punt in de opdrachtregel en in getalvakken, zodat `12.5` op het numerieke toetsenblok kan worden getypt. De kommatoets van het hoofdtoetsenbord scheidt nog steeds `x,y`.

Beide kunnen worden uitgeschakeld in {{ui:Settings}}: {{ui:Commands on a non-Latin keyboard layout}} en {{ui:Keypad decimal key}}.

## De coördinaatweergave

De statusbalk toont de X en Y van de kruisdraad (in de UCS wanneer die is ingesteld), na snaps en Ortho. Terwijl een opdracht een basispunt heeft, voegt de weergave `Δ` toe met de afstand en hoek vanaf dat punt, bijvoorbeeld `Δ 1500 < 30°`: de getallen die u als `@1500<30` zou typen.

Gebruik {{cmd:ID}} om de coördinaten van een punt af te drukken en {{cmd:DIST}} om tussen twee punten te meten.
