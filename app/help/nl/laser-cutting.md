---
title: Een tekening naar een laser sturen
summary: Open het paneel Laser, kies wat elke laag doet (snijden, kerven, graveren, vormen vullen, afbeelding), bekijk de bewegingen van de kop, sla GRBL-laser-G-code op, of stuur hem vanuit de browser nadat u de opdracht hebt omkaderd.
keywords: laser, lasersnijder, lasergraveur, GRBL, G-code, gcode, graveren, vullen, dither, afbeeldingsgravure, kerven, snijden, Web Serial, opdracht omkaderen, vermogen, snelheid, gangen, LASER, LASERCUT, CNC
from: 72b56db0
---

Het paneel {{ui:Laser}} zet de lagen van een tekening om in een programma voor een laser die GRBL draait (de meeste hobby- en kleine-werkplaatsdiode- en CO2-besturingen). Typ `LASER` (of `LASERCUT`) en druk op {{key:Enter}}, of kies {{ui:Laser…}} in het menu {{ui:More}} van de groep {{ui:View}}. In de lintstijlen staat het in het menu {{ui:File}} en naast {{ui:Plot}}. Het paneel opent over de tekening en blijft open terwijl u tekent: het voorbeeld volgt elke wijziging.

:::warning
Test elke instelling eerst op restmateriaal, draag oogbescherming die bij uw laser past, houd de deksel dicht waar er een is, en laat een lopende laser nooit alleen. De getallen waarmee een laag begint, zijn plaatsaanduidingen, geen aanbevelingen voor enig materiaal.
:::

## Wat wordt verzonden

Het paneel leest het model (niet de bladen), op lagen die aan staan en niet bevroren zijn:

- Lijnen, bogen, cirkels, polylijnen (boogsegmenten blijven bogen), ellipsen en splines. Een vorm die eindigt waar hij begint, telt als gesloten.
- Blokken worden uit elkaar gehaald: een object op laag 0 binnen een blok gaat mee met de laag van de blokverwijzing.
- Een arcering stuurt zijn begrenzing, dus een gearceerd logo op een laag **Vormen vullen** wordt gevuld.
- Een afbeelding (`IMAGEATTACH`) wordt gegraveerd op een laag die is ingesteld op **Afbeelding graveren**, wanneer hij vierkant ligt (niet gedraaid of schuin) en zijn bestand open is in CadCraft.
- Tekst, maatvoering, leiders, punten en hulplijnen worden niet verzonden; het paneel zegt hoeveel er zijn weggelaten. Om tekst te branden, tekent u de letters als vormen of arceert u ze.

Maten gaan in millimeters, uitgaand van de eenheden van de tekening (`UNITS`): een tekening in inches wordt vermenigvuldigd met 25.4. Een tekening zonder ingestelde eenheden wordt verzonden met één eenheid per millimeter. Vink {{ui:Only the selected objects}} aan om een deel van de tekening te verzenden.

## Kies wat elke laag doet

Elke laag met iets erop is een rij. {{ui:Does}} zet hem op **Snijden**, **Kerven**, **Lijnen graveren**, **Vormen vullen**, **Afbeelding graveren** of **Niet verzonden**, met een {{ui:Power %}}, een {{ui:Speed mm/min}} en een aantal {{ui:Passes}}. Elke wijziging is één stap om ongedaan te maken en wordt in de tekening opgeslagen: DWG (elke versie die CadCraft opslaat) en DXF bewaren de instellingen, zodat de tekening de volgende keer met die instellingen opent. Andere programma's openen het bestand zoals voorheen; ze zien één ongebruikt blok met de naam CADCRAFT_LASER (opschonen daar verwijdert de instellingen).

- **Vormen vullen** brandt de binnenkant van gesloten vormen in lijnen, {{ui:Line spacing}} uit elkaar, onder een {{ui:Angle}}, in beide richtingen of in één, met een overscan zodat de kop op snelheid is wanneer de laser aangaat; kruisarcering voegt een tweede gang toe onder 90°. Een vorm met een gat blijft open bij het gat.
- **Afbeelding graveren** zet een afbeelding om in stippen (Floyd–Steinberg, Atkinson, geordend, of gewoon zwart-wit bij een drempelwaarde) of, met *Grijswaarden*, in variabel vermogen.
- Volgorde: afbeeldingen en vullingen eerst, dan lijngravering, dan kerven, dan snijden, zodat een uitgesneden onderdeel niet beweegt terwijl het wordt gegraveerd. Binnen één laag lopen de paden **binnen-eerst** (een gat voor de plaat waarin het zit), telkens naar het dichtstbijzijnde volgende.

## Voorbeeld, dan opslaan

Het voorbeeld toont wat de kop doet: brandende lijnen in kleur, snelle bewegingen in grijs, en een groen kader rond alles wat brandt. Eronder staan de grootte, de brandlengte en een tijdschatting (zonder versnelling; een echte machine doet er langer over). {{ui:Save G-code…}} schrijft GRBL-laser-modus G-code: `$32=1`, `M4` (of `M3`) met S-waarden, `G0`- en `G1`-bewegingen, en `M5` aan het eind. X0 Y0 is de linkerbenedenhoek van de opdracht, tenzij u de oorsprong van de tekening kiest: stel het nulpunt van uw machine daar in.

## Verzenden vanuit de browser

In Chrome en Edge vraagt {{ui:Connect…}} u de USB-poort van de laser te kiezen. Er wordt niets verbonden of verzonden voordat u op een knop drukt. Druk eerst op {{ui:Frame the job}}: de kop tekent het kader van de opdracht met de laser **uit** (of op het lage vermogen dat u voor een aanwijzer instelt), zodat u ziet waar hij gaat branden. Pas dan wordt {{ui:Send job}} actief, en die gaat weer uit als u iets wijzigt. {{ui:Pause}} houdt de kop vast, {{ui:Stop}} houdt hem vast, reset de besturing (de laser gaat uit) en stuurt `M5`. Waar Web Serial ontbreekt (Firefox, Safari, en CadCraft Studio, dat nog geen Web Serial heeft), biedt het paneel alleen opslaan: sla de G-code op en verstuur hem met het eigen programma van uw laser.

## Nog niet beschikbaar

Nog niet beschikbaar: formaten van andere besturingen (Ruida, Marlin-lasers, bestanden van leveranciers), bruggetjes en instapbogen, snijbreedtecompensatie, materiaalbibliotheken, roterende en Z-assen, camera-uitlijning, tekst als contouren.
