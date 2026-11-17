---
title: Organisér en tegning med klasser
summary: Klasser sorterer objekter på en anden måde, på tværs af lag (Lighting-Fixtures-Spot): vis og skjul dem, giv dem en farve, linjetype, linjetykkelse, udfyldning og tekststil, som objekter kan tage "efter klasse", og angiv den klasse, nye objekter placeres i.
keywords: klasse, klasser, CLASSES, CLS, CLASS, efter klasse, ByClass, aktiv klasse, brug ved oprettelse, Ingen, designlag, lagskala, kote, Vectorworks
from: 672de9cb
---

Lag siger *hvor* et objekt hører til i tegningen; klasser siger *hvad* det er. En væg på lag `Level 1` kan være i klassen `Walls-Exterior`, og en spotlampe på lag `Ceiling` i klassen `Lighting-Fixtures-Spot`. Du kan skjule alle lamper på alle lag på én gang, eller plotte alle ydervægge tykkere, uden at flytte noget mellem lag.

Alle objekter starter i klassen **Ingen**. En tegning uden egne klasser fungerer præcis som før.

## Åbn klasse-panelet

Skriv `CLASSES` (eller `CLS`) og tryk {{key:Enter}}, eller vælg {{ui:Klasser…}} i menuen {{ui:Mere}} i gruppen {{ui:Visning}}. Panelet åbnes over tegningen og forbliver åbent, mens du tegner.

- **Tilføj en klasse:** skriv navnet i feltet øverst og tryk {{key:Enter}}. Et `-` laver et niveau: `Lighting-Fixtures-Spot` ligger under `Lighting-Fixtures`, som ligger under `Lighting`; de manglende niveauer tilføjes for dig.
- **Vis eller skjul:** øjet ved siden af en klasse. Skjul en klasse skjuler alle klasser under den, på skærmen og på papiret.
- **Aktiv klasse:** den runde knap. Nye objekter, du tegner, placeres i den aktive klasse.
- **Vælg en klasse:** klik på dens navn. Knapperne og indstillingerne under listen virker så på den.

Tallet til sidst i hver række er, hvor mange objekter der er i klassen (i modellen, på arkene og inde i blokdefinitioner).

## Læg objekter i en klasse

Vælg objekterne, vælg en klasse i panelet, og vælg {{ui:Angiv klasse}}. Sæt flueben i {{ui:Efter klasse}} først, så de tager deres farve, linjetype, linjetykkelse, udfyldning og tekststil fra klassen. Du kan også:

- skriv `CLASS`, mens objekter er valgt, og angiv et klassenavn (et nyt navn opretter klassen);
- skriv `CLASS`, når intet er valgt, for at sætte den aktive klasse; `?` lister klasserne med deres antal;
- brug sektionen {{ui:Klasse}} i panelet Egenskaber: klassen og en kontakt {{ui:… efter klasse}} til farve, linjetype og linjetykkelse (udfyldning for skraveringer, tekststil for tekst);
- vælg efter klasse med `QSELECT`: vælg egenskaben {{ui:Klasse}}.

{{ui:Vælg dens objekter}} markerer alle objekter af den valgte klasse på det åbne ark (eller i modellen).

## Hvordan et objekt tegnes: objekt, klasse, lag

Et objekts farve, linjetype, linjetykkelse, udfyldning og tekststil kan være **efter klasse**, ligesom de kan være efter lag. CadCraft kigger i denne rækkefølge:

1. Objektets egen værdi, medmindre den værdi er efter klasse.
2. Klassens værdi, når objektet tager den efter klasse, og klassen har en.
3. Lagets værdi.

En klasse, hvis farve (eller linjetype …) er {{ui:Ikke angivet}}, sender objektet videre til sit lag. Vælg en klasse, og angiv dens {{ui:Farve}}, {{ui:Linjetype}}, {{ui:Linjetykkelse}}, {{ui:Udfyldning (skraveringer)}} og {{ui:Tekststil}} under knapperne. Sæt flueben i {{ui:Brug ved oprettelse}} for at få nye objekter tegnet i den klasse til at tage dem alle efter klasse.

Hver ændring i panelet er ét fortrydelsestrin.

## Omdøb og slet

{{ui:Omdøb}} redigerer navnet på stedet: tryk {{key:Enter}} for at beholde det, {{key:Esc}} for at gå fra det. Klasserne under den følger med (`Lighting-Spot` bliver til `Light-Spot`, når `Lighting` bliver til `Light`), og det samme gør deres objekter og eventuelle viewport-overstyringer.

{{ui:Slet}} fjerner klassen og alle klasser under den. Deres objekter flyttes til **Ingen**. Ét {{ui:Fortryd}} gendanner det hele. **Ingen** kan ikke omdøbes eller slettes.

## Designlag

Under {{ui:Designlag}} kan hvert lag have en målestok (`1:50`) og en kote. Et designlag er et almindeligt lag: modelrum og ark fungerer som før, og målestok og kote gemmes sammen med tegningen til de værktøjer, der skal bruge dem.

## I DWG- og DXF-filer

Klasser gemmes i alle DWG-versioner, som CadCraft gemmer, og i DXF (R12 og 2000). Hvert objekts klasse ligger i dets egne udvidede data (applikation `CADCRAFT_CLASS`), så AutoCAD og andre programmer beholder den sammen med objektet. Klasselisten, farverne og synligheden gemmes i én ubrugt blok ved navn `CADCRAFT_CLASSES`; hvis et andet program renser den blok, finder CadCraft stadig hvert objekts klasse, og klasserne vender tilbage med standardindstillinger.

Andre programmer kender ikke klasser: de tegner hvert objekt med sine egne eller lagets værdier.

Se også [Viewport-overstyringer af klasser](topic:viewport-overrides) og [Organisér en tegning med lag](topic:layers).
