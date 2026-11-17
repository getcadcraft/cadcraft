---
title: Eigen knoppen (Mijn gereedschappen)
summary: Voeg werkbalkknoppen toe die uw eigen macro's uitvoeren, geef ze sneltoetsen, deel ze als bestand, en zet knoppen over uit een CUIx-aanpassingsbestand.
keywords: mijn gereedschappen, eigen knoppen, werkbalkknoppen, macro, macro's, cui, cuix, aanpassen, menu, sneltoetsen, toetsenbordsneltoetsen, diesel, ^c^c, knoppen importeren, knoppen exporteren
from: 36618802
---

## Wat u leert

Hoe u eigen knoppen op de werkbalk zet, die elk een macro uitvoeren die is geschreven zoals AutoCAD ze schrijft, hoe u een knop een sneltoets geeft, en hoe u de knoppen van een CUIx-bestand overzet.

## Een knop toevoegen

1. Open {{ui:Instellingen}} ({{key:Mod+,}}) en blijf op het tabblad {{ui:CadCraft}}. Scrol naar {{ui:Mijn gereedschappen}}.
2. Klik op {{ui:Een knop toevoegen…}}.
3. Vul het vak in:
   - {{ui:Groep}}: de werkbalkgroep waarin hij komt, bijvoorbeeld `My tools`. Een nieuwe naam maakt een nieuwe groep.
   - {{ui:Label}}: de woorden op de knop.
   - {{ui:Macro}}: wat hij typt, bijvoorbeeld `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Sneltoets}}: klik in het vak en druk op de toetsen, bijvoorbeeld {{key:Ctrl+Alt+B}}.
   - {{ui:Pictogram}}: een PNG- of SVG-afbeelding van maximaal 64 KB, of geen (er verschijnt dan een ster).
4. Klik op {{ui:Opslaan}}.

De knop verschijnt aan het eind van de werkbalk, in zijn groep. Klik erop, of druk op zijn sneltoets, om hem uit te voeren. {{ui:Bewerken}} en {{ui:Verwijderen}} in de lijst wijzigen of verwijderen hem.

## Een macro schrijven

Een macro is wat u op de opdrachtregel zou typen, met een paar tekens:

| Teken | Betekent |
|---|---|
| `^C` | Annuleert wat er loopt (`^C^C` is de gebruikelijke start) |
| `;` of een spatie | {{key:Enter}} |
| `\` | Wacht op u: een klik of een getypt antwoord, daarna gaat de macro verder |
| `_` of `.` voor een commando | Wordt aanvaard en genegeerd (internationale en ingebouwde namen) |
| `*` helemaal vooraan | Herhaalt zich elke keer dat hij eindigt, tot u op {{key:Esc}} drukt |
| `^O`, `^G` | Zet Ortho, het raster aan of uit |
| `$M=` | De rest is DIESEL. Alleen `$(if,…)`, `$(getvar,…)`, `$(=,…)` en `$(eq,…)` worden gelezen; een knop die iets anders gebruikt, meldt dat en doet niets |

Voorbeelden:

- `^C^C_line;0,0;@100,0;;` tekent een lijn van lengte 100 vanuit de oorsprong.
- `^C^C_circle;\25;` vraagt u om het middelpunt, en tekent daar daarna een cirkel met straal 25.
- `^C^C_turnright` draait het beeld 90° naar rechts.

## Sneltoetsen

Een sneltoets heeft {{key:Mod}} (Ctrl, of Cmd op een Mac) of {{key:Alt}} nodig met een letter of cijfer, of een van de vrije functietoetsen {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Losse letters gaan naar de opdrachtregel. Sneltoetsen die CadCraft, de app of de browser al gebruiken (zoals {{key:Ctrl+S}} of {{key:Ctrl+Z}}) en sneltoetsen die een andere knop al heeft, worden geweigerd, en het vak zegt waarom.

## Uw knoppen delen

- {{ui:Exporteren…}} slaat elke groep en knop op (met pictogrammen en sneltoetsen) als `my-tools.json`.
- {{ui:Importeren…}} voegt de groepen van zo'n bestand toe na die van u. Een groepsnaam die u al gebruikt, krijgt "(2)"; een sneltoets die zou botsen wordt weggelaten, en het paneel meldt dat.

## Knoppen overzetten uit een CUIx-bestand

1. Klik op {{ui:CUIx importeren…}} en kies het `.cuix`-bestand.

De werkbalken en lintpanelen worden groepen, elke knop met zijn macro en zijn afbeelding (PNG, of BMP omgezet naar PNG). Zijn sneltoetsen komen in een eigen groep, elke knop met zijn sneltoets; de commando-aliassen die het kan bevatten komen in een groep {{ui:Aliassen}}. Het paneel toont wat is overgezet.

:::note
Het bestand wordt alleen gelezen. Commando's die CadCraft niet heeft, worden bij naam vermeld, niet geraden: hun knoppen zeggen dat bij het klikken. DIESEL buiten de paar functies hierboven, menu's, muisknoppen en werkruimten worden niet gelezen.
:::

## Goed om te weten

- Knoppen worden bewaard in deze browser (of in deze desktopapp), niet in tekeningen.
- Een knop loopt via de opdrachtregel, dus hij wordt ongedaan gemaakt zoals alles wat u typt: één {{key:Mod+Z}} per commando dat hij uitvoerde.
