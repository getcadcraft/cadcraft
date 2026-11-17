---
title: PDF-onderlae en PDF-invoer
summary: Plaas 'n PDF-bladsy onder jou tekening om oor te trek en te plot, of verander die bladsy se lyne en teks in tekeningvoorwerpe.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, onderlaag, oortrek, invoer pdf, skandering, vloerplan, verbleek, knip, lae, vasvang, maak pdf oop
from: aa301d0f
---

## Twee maniere om 'n PDF-bladsy in te bring

- **Heg aan** ({{cmd:PDFATTACH}}) hou die PDF as 'n prent onder jou tekening. Jy trek dit oor, vang vas aan sy lyne, verbleek dit, knip dit, en dit druk saam met die blad. Die tekening hou net die lêer se naam.
- **Invoer** ({{cmd:PDFIMPORT}}) verander die bladsy se lyne, krommes, vulsels en teks in gewone tekeningvoorwerpe, op lae wat na die PDF genoem is. Hulle is joune om te wysig, en die PDF is daarna nie meer nodig nie.

As jy 'n PDF met {{ui:Maak oop}} oopmaak, vra CadCraft watter van die twee jy wil hê.

## Heg 'n bladsy aan

1. Tik `PDFATTACH` (of `PDFATT`) en kies die PDF. As dit verskeie bladsye het, tik die bladsynommer.
2. Klik die invoegpunt (die bladsy se linkeronderhoek).
3. Druk {{key:Enter}} vir die bladsy se ware grootte, of tik die skaal: tekeningeenhede per PDF-punt ('n punt is 1/72 duim, dus 0.3528 in 'n millimeter-tekening).
4. Druk {{key:Enter}} vir geen draaiing, of tik 'n hoek.

Die bladsy is 'n voorwerp soos 'n blokverwysing: skuif, draai, skaal, kopieer, wis en plaas dit op 'n laag. Skakel sy laag af en dit verdwyn. Zoem in en die bladsy word weer skerp geteken.

## Trek dit oor

Met {{ui:Vasvang}} aan, vang die kursor vas aan die PDF se eie lyne: eindpunte, middelpunte en kruisings (en {{ui:Naaste}} wanneer daardie vasvang aan is). Teks wat as letters op die bladsy geteken is, word nie vasgevang nie.

## Pas dit aan

- `PDFADJUST`: **Verbleek** (0 tot 80 persent), **Kontras** (0 tot 100), **Monochroom**, en **Aan/af** om dit te versteek sonder om dit uit te wis.
- `PDFCLIP`: wys net 'n reghoek of veelhoek van die bladsy; **Skrap** verwyder die knip.
- `PDFLAYERS`: 'n PDF kan sy eie lae hê. Die opdrag lys hulle; tik 'n nommer om daardie laag vir hierdie onderlaag aan of af te skakel. Die lae wat die lêer af het, begin af.

## Plot en stoor

PLOT druk die bladsy as sy lyne, vulsels en teks (sodat dit skerp en soekbaar bly). Prente binne die PDF word op die skerm gewys, maar nog nie gedruk nie.

'n DWG of DXF 2000 hou die onderlaag as 'n skakel: die lêer se naam, die bladsy, waar dit lê, sy skaal, draaiing, knip, verbleking en kontras. Die PDF self is nie in die tekening nie. Heropen die tekening, tik `PDF` en kies die lêer weer; die bladsye word as rame gewys totdat jy dit doen, en neem hul ware grootte wanneer jy dit doen. Ouer DXF (R12) het geen onderlae nie: dit hou die raam en die naam. Hoe ander programme die gestoorde knip en skaal lees, is nog nie in hulle nagegaan nie.

## Voer 'n bladsy in

1. Tik `PDFIMPORT` (of `PDFIM`) en kies die PDF en bladsy.
2. Klik waar die bladsy se linkeronderhoek moet kom.
3. Druk {{key:Enter}} vir ware grootte, tik 'n skaal, of kies **Twee punte**: die bladsy word op ware grootte geteken, dan klik jy twee punte van 'n afstand wat jy ken en tik die werklike afstand in; alles word geskaleer om te pas.

Lyne word lyne en polilyne, sirkels en boë word herken, gevulde vorms word soliede arseringe, en teks word teks op 'n laag wat op `-TEXT` eindig. Dit is een stap om te ontdoen. Prente in die PDF word nie ingevoer nie: heg eerder die bladsy aan. 'n Skandering ('n bladsy wat net 'n prent is) het geen lyne om in te voer nie.

PDF's word as onbetroubare lêers gelees: geen skripte loop nie, en 'n baie groot bladsy word kort afgesny, en dit word gesê.
