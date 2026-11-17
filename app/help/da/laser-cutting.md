---
title: Send en tegning til en laser
summary: Åbn panelet Laser, vælg hvad hvert lag gør (skær, ridse, gravér, udfyld, billede), forhåndsvis hovedets bevægelser, gem GRBL-laser-G-code, eller send den fra browseren efter at have afgrænset jobbet.
keywords: laser, laserskærer, lasergravør, GRBL, G-code, gcode, gravér, udfyld, dither, billedgravering, ridse, skær, Web Serial, afgræns jobbet, effekt, hastighed, gennemløb, LASER, LASERCUT, CNC
from: 72b56db0
---

Panelet {{ui:Laser}} omsætter tegningens lag til et program for en laser, der kører GRBL (de fleste hobby- og små værkstedsdioder og CO2-styringer). Skriv `LASER` (eller `LASERCUT`) og tryk {{key:Enter}}, eller vælg {{ui:Laser…}} i menuen {{ui:Mere}} i gruppen {{ui:Visning}}. I båndstilene er den i menuen {{ui:Fil}} og ved siden af {{ui:Plot}}. Panelet åbner over tegningen og forbliver åbent, mens du tegner: forhåndsvisningen følger hver ændring.

:::warning
Test alle indstillinger på spildmateriale først, bær øjenbeskyttelse, der passer til din laser, hold låget lukket, hvor der er et, og lad aldrig en kørende laser stå alene. Tallene, et lag starter med, er pladsholdere, ikke anbefalinger til noget materiale.
:::

## Hvad der sendes

Panelet læser modellen (ikke arkene), på lag der er tændt og optøet:

- Linjer, buer, cirkler, polylinjer (bue-segmenter forbliver buer), ellipser og splines. En figur, der ender, hvor den starter, tæller som lukket.
- Blokke tages fra hinanden: et objekt på lag 0 inde i en blok følger laget for blokreferencen.
- En skravering sender sin afgrænsning, så et skraveret logo på et **Udfyld**-lag bliver udfyldt.
- Et billede (`IMAGEATTACH`) graveres på et lag sat til **Gravér billede**, når det ligger lige (ikke drejet eller skråt), og dets fil er åben i CadCraft.
- Tekst, målsætninger, henvisninger, punkter og konstruktionslinjer sendes ikke; panelet siger, hvor mange det har udeladt. Vil du brænde tekst, så tegn bogstaverne som figurer, eller skravér dem.

Størrelser sendes i millimeter ud fra tegningens enheder (`UNITS`): en tegning i tommer ganges med 25.4. En tegning uden enheder sat sendes med én enhed til én millimeter. Sæt {{ui:Kun de valgte objekter}} for at sende en del af tegningen.

## Vælg hvad hvert lag gør

Hvert lag med noget på sig er en række. {{ui:Gør}} sætter det til **Skær**, **Ridse**, **Gravér linjer**, **Udfyld figurer**, **Gravér billede** eller **Sendes ikke**, med en {{ui:Effekt %}}, en {{ui:Hastighed mm/min}} og et antal {{ui:Gennemløb}}. Hver ændring er ét fortrydelsestrin og gemmes i tegningen: DWG (hver version CadCraft gemmer) og DXF bevarer indstillingerne, så tegningen åbnes med dem næste gang. Andre programmer åbner filen som før; de ser en ubrugt blok kaldet CADCRAFT_LASER (rydning der fjerner indstillingerne).

- **Udfyld** brænder det indre af lukkede figurer i linjer, {{ui:Linjeafstand}} fra hinanden, i en {{ui:Vinkel}}, i begge retninger eller én, med en overskydning, så hovedet har fuld hastighed, når laseren tændes; krydsskravering tilføjer et ekstra gennemløb i 90°. En figur med et hul forbliver åben ved hullet.
- **Gravér billede** omsætter et billede til prikker (Floyd–Steinberg, Atkinson, ordnet, eller ren sort/hvid ved en tærskel) eller, med *Gråtoner*, til variabel effekt.
- Rækkefølge: billeder og udfyldninger først, derefter linjegravering, så ridser, så skæringer, så en udskåret del ikke flytter sig, mens den graveres. Inden for ét lag køres stierne **indvendigt først** (et hul før pladen, det er i), og nærmeste næst.

## Forhåndsvis, og gem

Forhåndsvisningen tegner, hvad hovedet gør: brændende linjer i farve, hurtige bevægelser i grå, og en grøn boks rundt om alt, der brænder. Under den står størrelsen, brændelængden og et tidsestimat (uden acceleration; en rigtig maskine tager længere tid). {{ui:Gem G-code…}} skriver GRBL-laser-G-code: `$32=1`, `M4` (eller `M3`) med S-værdier, `G0`- og `G1`-bevægelser, `M5` til sidst. X0 Y0 er jobbets nederste venstre hjørne, medmindre du vælger tegningens oprindelse: sæt din maskines arbejdsnul dér.

## Send fra browseren

I Chrome og Edge beder {{ui:Tilslut…}} dig om at vælge laserens USB-port. Intet forbindes eller sendes, før du trykker på en knap. Tryk først på {{ui:Afgræns jobbet}}: hovedet tegner jobbets boks med laseren **slukket** (eller ved den lave effekt, du sætter for en pegepind), så du kan se, hvor den vil brænde. Først derefter bliver {{ui:Send job}} aktiv, og den slukker igen, hvis du ændrer noget. {{ui:Pause}} holder hovedet, {{ui:Stop}} holder det, nulstiller styringen (laseren slukkes) og sender `M5`. Hvor Web Serial mangler (Firefox, Safari og CadCraft Studio, der endnu ikke har Web Serial), tilbyder panelet kun at gemme: gem G-code'en og send den med lasers eget program.

## Ikke lavet endnu

Ikke lavet endnu: andre styringers formater (Ruida, Marlin-lasere, leverandørfiler), faner og indløb, kerf-forskydning, materialebiblioteker, roterende og Z-akser, kameraindstilling, tekst som konturer.
