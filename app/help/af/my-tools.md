---
title: Eie knoppies (My gereedskap)
summary: Voeg werkbalkknoppies by wat jou eie makro's uitvoer, gee hulle sneltoetse, deel hulle as 'n lêer, en bring knoppies oor uit 'n CUIx-aanpassingslêer.
keywords: my gereedskap, pasgemaakte knoppies, werkbalkknoppies, makro, makro's, cui, cuix, pasmaak, kieslys, sneltoetse, klavierkortpaaie, diesel, ^c^c, knoppies invoer, knoppies uitvoer
from: 36618802
---

## Wat jy sal leer

Hoe om jou eie knoppies op die werkbalk te sit, elk wat 'n makro uitvoer wat geskryf is soos AutoCAD hulle skryf, hoe om 'n knoppie 'n sneltoets te gee, en hoe om die knoppies van 'n CUIx-lêer oor te bring.

## Voeg 'n knoppie by

1. Open {{ui:Instellings}} ({{key:Mod+,}}) en bly op die {{ui:CadCraft}}-oortjie. Rol na {{ui:My gereedskap}}.
2. Klik {{ui:Voeg 'n knoppie by…}}.
3. Vul die blokkie in:
   - {{ui:Groep}}: die werkbalkgroep waarin dit gaan, byvoorbeeld `My gereedskap`. 'n Nuwe naam maak 'n nuwe groep.
   - {{ui:Etiket}}: die woorde op die knoppie.
   - {{ui:Makro}}: wat dit tik, byvoorbeeld `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Sneltoets}}: klik die blokkie en druk die sleutels, byvoorbeeld {{key:Ctrl+Alt+B}}.
   - {{ui:Ikoon}}: 'n PNG- of SVG-prent van hoogstens 64 KB, of geen ('n ster wys).
4. Klik {{ui:Stoor}}.

Die knoppie verskyn aan die einde van die werkbalk, in sy groep. Klik dit, of druk sy sleutel, om dit uit te voer. {{ui:Redigeer}} en {{ui:Skrap}} in die lys verander of verwyder dit.

## Skryf 'n makro

'n Makro is wat jy by die opdragreël sou tik, met 'n paar tekens:

| Teken | Beteken |
|---|---|
| `^C` | Kanselleer wat ook al loop (`^C^C` is die gewone begin) |
| `;` of 'n spasie | {{key:Enter}} |
| `\` | Wag vir jou: 'n klik of 'n getikte antwoord, dan gaan die makro voort |
| `_` of `.` voor 'n opdrag | Word aanvaar en geïgnoreer (internasionale en ingeboude name) |
| `*` heel aan die begin | Loop weer elke keer as dit eindig, totdat jy {{key:Esc}} druk |
| `^O`, `^G` | Skakel Ortho, die rooster aan of af |
| `$M=` | Die res is DIESEL. Net `$(if,…)`, `$(getvar,…)`, `$(=,…)` en `$(eq,…)` word gelees; 'n knoppie wat enigiets anders gebruik sê so en doen niks |

Voorbeelde:

- `^C^C_line;0,0;@100,0;;` teken 'n lyn van 100 lank vanaf die oorsprong.
- `^C^C_circle;\25;` vra jou vir die middelpunt, en teken dan 'n sirkel met radius 25 daar.
- `^C^C_turnright` draai die aansig 90° na regs.

## Sneltoetse

'n Sleutel het {{key:Mod}} (Ctrl, of Cmd op 'n Mac) of {{key:Alt}} nodig saam met 'n letter of syfer, of een van die vrye funksietoetse {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Letters op hul eie gaan na die opdragreël. Sleutels wat CadCraft, die program of die blaaier reeds gebruik (soos {{key:Ctrl+S}} of {{key:Ctrl+Z}}), en sleutels wat 'n ander knoppie het, word geweier, en die blokkie sê hoekom.

## Deel jou knoppies

- {{ui:Voer uit…}} stoor elke groep en knoppie (met ikone en sleutels) as `my-tools.json`.
- {{ui:Invoer…}} voeg die groepe van so 'n lêer ná joune by. 'n Groepsnaam wat jy reeds gebruik, kry "(2)"; 'n sleutel wat sou bots, word weggelaat, en die paneel sê so.

## Bring knoppies oor uit 'n CUIx-lêer

1. Klik {{ui:Voer CUIx in…}} en kies die `.cuix`-lêer.

Die werkbalke en lintpanele daarvan word groepe, elke knoppie met sy makro en sy prent (PNG, of BMP omgeskakel na PNG). Sy sneltoetse kom in 'n eie groep, elke knoppie met sy sleutel; die opdragaliasse wat dit dalk dra, kom in 'n {{ui:Aliasse}}-groep. Die paneel lys wat oorgekom het.

:::note
Die lêer word net gelees. Opdragte wat CadCraft nie het nie, word by naam gelys, nie geraai nie: hulle knoppies sê so wanneer hulle geklik word. DIESEL behalwe die paar funksies hierbo, kieslyste, muisknoppies en werkruimtes word nie gelees nie.
:::

## Goed om te weet

- Knoppies word in hierdie blaaier (of hierdie desktop-program) bewaar, nie in tekeninge nie.
- 'n Knoppie loop deur die opdragreël, so dit word ontdoen soos enigiets wat jy tik: een {{key:Mod+Z}} per opdrag wat dit uitgevoer het.
