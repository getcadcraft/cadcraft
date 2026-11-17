---
title: Egne knapper (Mine værktøjer)
summary: Tilføj værktøjslinjeknapper, der kører dine egne makroer, giv dem genvejstaster, del dem som en fil, og hent knapper over fra en CUIx-tilpasningsfil.
keywords: mine værktøjer, egne knapper, værktøjslinjeknapper, makro, makroer, cui, cuix, tilpas, menu, genvejstaster, tastaturgenveje, diesel, ^c^c, importér knapper, eksportér knapper
from: 36618802
---

## Hvad du lærer

Hvordan du sætter egne knapper på værktøjslinjen, hver kørende en makro skrevet, som AutoCAD skriver dem, hvordan du giver en knap en tast, og hvordan du henter knapperne i en CUIx-fil over.

## Tilføj en knap

1. Åbn {{ui:Indstillinger}} ({{key:Mod+,}}) og bliv på fanen {{ui:CadCraft}}. Rul til {{ui:Mine værktøjer}}.
2. Klik {{ui:Tilføj en knap…}}.
3. Udfyld feltet:
   - {{ui:Gruppe}}: den værktøjslinjegruppe knappen hører til, fx `Mine værktøjer`. Et nyt navn laver en ny gruppe.
   - {{ui:Etiket}}: ordene på knappen.
   - {{ui:Makro}}: det den skriver, fx `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Genvejstast}}: klik i feltet og tryk på tasterne, fx {{key:Ctrl+Alt+B}}.
   - {{ui:Ikon}}: et PNG- eller SVG-billede på højst 64 KB, eller intet (en stjerne vises).
4. Klik {{ui:Gem}}.

Knappen vises til sidst på værktøjslinjen, i sin gruppe. Klik på den, eller tryk på dens tast, for at køre den. {{ui:Redigér}} og {{ui:Slet}} i listen ændrer eller fjerner den.

## Skriv en makro

En makro er det, du ville skrive på kommandolinjen, med få tegn:

| Tegn | Betyder |
|---|---|
| `^C` | Afbryd det, der kører (`^C^C` er den sædvanlige start) |
| `;` eller et mellemrum | {{key:Enter}} |
| `\` | Vent på dig: et klik eller et skrevet svar, derefter fortsætter makroen |
| `_` eller `.` før en kommando | Accepteres og ignoreres (internationale og indbyggede navne) |
| `*` helt i starten | Kører igen hver gang den slutter, indtil du trykker {{key:Esc}} |
| `^O`, `^G` | Slår Ortogonal, gitteret til eller fra |
| `$M=` | Resten er DIESEL. Kun `$(if,…)`, `$(getvar,…)`, `$(=,…)` og `$(eq,…)` læses; en knap, der bruger noget andet, siger det og gør intet |

Eksempler:

- `^C^C_line;0,0;@100,0;;` tegner en 100 lang linje fra origo.
- `^C^C_circle;\25;` beder dig om centrum og tegner derefter en cirkel med radius 25 der.
- `^C^C_turnright` drejer visningen 90° til højre.

## Genvejstaster

En tast skal have {{key:Mod}} (Ctrl, eller Cmd på en Mac) eller {{key:Alt}} sammen med et bogstav eller et ciffer, eller en af de ledige funktionstaster {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Bogstaver alene går til kommandolinjen. Taster, som CadCraft, appen eller browseren allerede bruger (fx {{key:Ctrl+S}} eller {{key:Ctrl+Z}}), og taster, som en anden knap har, afvises, og feltet siger hvorfor.

## Del dine knapper

- {{ui:Eksportér…}} gemmer alle grupper og knapper (med ikoner og taster) som `my-tools.json`.
- {{ui:Importér…}} tilføjer grupperne i en sådan fil efter dine egne. Et gruppenavn, du allerede bruger, får "(2)"; en tast, der ville skabe en konflikt, udelades, og panelet siger det.

## Hent knapper fra en CUIx-fil

1. Klik {{ui:Importér CUIx…}} og vælg `.cuix`-filen.

Dens værktøjslinjer og båndpaneler bliver til grupper, hver knap med sin makro og sit billede (PNG, eller BMP omdannet til PNG). Dens genvejstaster kommer i en gruppe for sig selv, hver knap med sin tast; de kommandoaliasser, den evt. indeholder, kommer i en gruppe {{ui:Aliasser}}. Panelet viser, hvad der kom med.

:::note
Filen læses kun. Kommandoer, CadCraft ikke har, vises med navn og gættes ikke: deres knapper siger det, når de klikkes. DIESEL ud over de få funktioner ovenfor, menuer, museknapper og arbejdsområder læses ikke.
:::

## Godt at vide

- Knapper gemmes i denne browser (eller i denne desktop-app), ikke i tegninger.
- En knap kører via kommandolinjen, så den fortrydes som alt, du skriver: ét {{key:Mod+Z}} pr. kommando, den kørte.
