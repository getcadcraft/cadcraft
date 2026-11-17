---
title: Markøren hopper eller hænger efter over tegningen
summary: Hvad du gør, når krydsmarkøren ikke følger musen jævnt, på en ældre eller langsommere computer.
keywords: markørhop, markørforsinkelse, langsom krydsmarkør, ryk i markøren, gammel computer, gammelt grafikkort, integreret grafik, hardwareacceleration, blødere markør, langsom bærbar
from: 39dc9057
---

CadCraft kører i browseren (CadCraft Studio er også en browservisning), så intet i den er bygget til ét bestemt grafikkort eller et andet. Krydsmarkøren tegnes af appen, hvilket betyder, at den kun kan bevæge sig lige så hurtigt, som appen kan tegne et billede.

## Lad CadCraft nedjustere de ekstra funktioner

1. Åbn {{ui:Indstillinger}} (tandhjulet øverst til højre) og bliv på fanen {{ui:CadCraft}}.
2. Vælg {{ui:Blødere markør på langsommere computere}}.
3. Vælg {{ui:Til}}.

Når den er tændt, bruges din computers egen krydsmarkør i stedet for den tegnede krydsmarkør og valgboks (også den fuldskærmskrydsmarkør), og objektet under markøren lyser op, når markøren står stille, i stedet for mens den bevæger sig. Objektfang, sporing og gummibåndet virker som før.

{{ui:Automatisk}} er den måde, CadCraft starter på: den overvåger, hvor lang tid billederne tager, mens du bevæger markøren, og slår dette til af sig selv, når de forbliver langsomme i nogle sekunder. Den fortæller dig det én gang, når den gør det. {{ui:Fra}} beholder den tegnede krydsmarkør, uanset hastigheden.

## Hvis det stadig er langsomt

- Kontrollér, at hardwareacceleration er slået til i din browser: åbn `chrome://gpu` (eller `edge://gpu`) i en ny fane. Hvis de første linjer siger "Software only" eller "Disabled", tegner browseren uden grafikkortet. Opdatering af grafikdriveren får det ofte til at virke igen.
- Luk andre tunge faner og programmer, og prøv et mindre browservindue.
- Fortæl os det via {{ui:Hjælp}}, {{ui:Rapportér et problem}}: skriv, om du bruger browseren eller CadCraft Studio, hvilken version, og hvad gpu-siden siger.
