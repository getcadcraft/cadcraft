---
title: Maak en voeg blokke in
summary: Verander 'n geteekende deur in 'n blok, plaas dit weer op ander posisies, skale en hoeke, en ruim ongebruikte blokke op.
keywords: blok, bmake, voeg in, ddinsert, simbool, suiwer, ontplof, herdefinieer, basispunt, verwysing, tel, bcount, skedule, csv, kenmerke, dataonttrekking
from: 125a129d
---

## Wat jy gaan maak

'n Deursimbool wat in 'n blok genaamd `DOOR-900` verander word, en dan drie keer geplaas word: soos geteken, 90 grade gedraai, en gespieël.

'n Blok is 'n benoemde groep voorwerpe. Jy teken dit een keer; elke plek waar jy dit gebruik, is 'n **blokverwysing** wat terug wys na dieselfde definisie. Die afdeling {{ui:Blokke}} in die linkerpaneel lys die blokke in die tekening en hoe dikwels elkeen gebruik word.

## Teken die deur

1. Tik `L` en druk {{key:Enter}}.
2. Tik `0,0` en druk {{key:Enter}}.
3. Tik `@0,900` en druk {{key:Enter}}, en druk dan weer {{key:Enter}}. Dit is die deurblad.
4. Tik `A` en druk {{key:Enter}}.
5. Tik `C` en druk {{key:Enter}} om eers die sentrum te gee.
6. Tik `0,0` en druk {{key:Enter}} vir die sentrum.
7. Tik `900,0` en druk {{key:Enter}} vir die beginpunt.
8. Tik `0,900` en druk {{key:Enter}} vir die eindpunt. Dit is die swaai.
9. Klik {{ui:Omvang}}.

Bo ere gaan van die beginpunt na die eindpunt teen die wysers van die horlosie in.

## Maak die blok

1. Tik `B` en druk {{key:Enter}}, of klik {{ui:Maak}} in die groep Blokke.
2. By `Enter block name`, tik `DOOR-900` en druk {{key:Enter}}.
3. By `Specify insertion base point`, tik `0,0` en druk {{key:Enter}}. Dit is die skarnier: die punt wat op die plek land waar jy die blok plaas.
4. By `Select objects`, sleep 'n venster om die blad en die boog.
5. Druk {{key:Enter}}.

Die geskiedenis sê `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Die paneel {{ui:Blokke}} lys DOOR-900 met `1×` daarnaas: een verwysing. Klik op die deur: dit kies nou as een voorwerp, 'n "Blokverwysing".

:::tip
Jy kan die voorwerpe eers kies en dan `B` tik. CadCraft vra steeds vir die naam en basispunt, en gebruik dan jou keuse.
:::

## Voeg die blok in

1. Tik `I` en druk {{key:Enter}}, of klik {{ui:Voeg in}} langs DOOR-900 in die paneel {{ui:Blokke}}.
2. By `Enter block name or [File/Library] <DOOR-900>`, druk {{key:Enter}}. (Die paneel se knoppie {{ui:Voeg in}} vul die naam vir jou in.)
3. Die deur volg die kruisdraad. Klik waar die skarnier moet kom.

'n Tweede deur verskyn.

## Voeg gedraai of geskaal in

1. Tik `I` en druk {{key:Enter}}, en druk dan {{key:Enter}} om die naam te aanvaar.
2. By `Specify insertion point [Scale/Rotate]`, tik `R` en druk {{key:Enter}}.
3. Tik `90` en druk {{key:Enter}}. Die voorskou draai.
4. Klik om dit te plaas.

Tik eerder `S` om 'n skaalfaktor te stel; dit geld in albei rigtings. Die skaal en rotasie word onthou vir die volgende invoeging. Om 'n deur te spieël, voeg dit in en gebruik dan {{cmd:MIRROR}} op die verwysing.

## Verander 'n geplaaste blok

Kies 'n blokverwysing. In die regterpaneel kan jy sy {{ui:X}}, {{ui:Y}}, {{ui:Skaal X}}, {{ui:Skaal Y}} en {{ui:Rotasie}} verander. 'n Negatiewe {{ui:Skaal X}} draai dit om.

## Herdefinieer 'n blok

Om elke deur op een slag te verander, maak 'n blok met dieselfde naam:

1. Teken die nuwe weergawe van die deur.
2. Tik `B` en druk {{key:Enter}}, en tik `DOOR-900`.
3. By `Block "DOOR-900" already exists. Redefine it?`, tik `Y` en druk {{key:Enter}}.
4. Gee die basispunt en kies die nuwe voorwerpe, soos voorheen.

Elke verwysing na DOOR-900 wys nou die nuwe weergawe.

Of wysig die blok self: {{ui:Blokke}} › {{ui:Meer}} › {{ui:Wysig blok}} ({{cmd:BEDIT}}) maak dit op sy eie oop, en {{ui:Stoor blok}} sit dit weer terug. Sien [Blokeienskappe](topic:attributes#change-a-block-the-block-editor).

## Tel blokke en voer 'n skedule uit

Tik {{cmd:COUNT}} (of {{ui:Blokke}} › {{ui:Meer}} › {{ui:Tel blokke}}), en dan:

- klik op een deur: elke deur in hierdie ruimte word gekies, en die geskiedenis sê hoeveel daar hier en in die hele tekening is;
- of druk {{key:Enter}}: die geskiedenis lys elke blok met sy telling, die meeste eerste;
- of tik `E`, dan `C` vir 'n CSV van die tellings (in die model, op blaaie, in totaal) of `A` vir een ry per verwysing met sy laag, posisie, rotasie en elke kenmerkwaarde — 'n skedule wat jy in 'n sigblad kan oopmaak.

Blokke sonder naam (maatlyne, tabelle) en verwysings binne ander blokke word nie getel nie. Selle wat soos 'n formule begin (`=`, `+`, `-`, `@`) kry 'n voorste `'` sodat 'n sigblad dit as teks wys.

## Ontplof en suiwer

- {{cmd:EXPLODE}} (`X`) draai 'n gekose blokverwysing terug in aparte voorwerpe. Die definisie bly.
- {{cmd:PURGE}} (`PU`) verwyder blokdefinisies wat niks meer gebruik nie. Die geskiedenis sê hoeveel dit verwyder het.

## Blokname

'n Naam kan tot 255 karakters wees en kan spasies bevat, maar dit kan nie met 'n sterretjie begin nie, en kan nie `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` of 'n backtick bevat nie. Wanneer jy DXF R12 stoor, word name in hoofletters geskryf, karakters anders as letters, syfers, `$`, `_` en `-` word `_`, en name word tot 31 karakters ingekort; die geskiedenis sê hoeveel verander het. Kort name in hoofletters, syfers en koppeltekens, soos `DOOR-900`, bly onveranderd. 'n Gestoorde DWG hou name soos jy dit getik het, hoofletters en kleinletters; slegs karakters wat DWG nie toelaat nie, verander (`|` word `$0$`, ander word `_`).

## Skryf 'n blok of voorwerpe na 'n eie lêer

Tik `W` ({{cmd:WBLOCK}}) en kies **Objects**, **Block** of **Entire drawing**. Die resultaat is 'n nuwe DWG of DXF wat net die lae, style en blokke bevat wat dit gebruik, met jou basispunt as oorsprong. Vir voorwerpe kan jy hulle hou, in 'n blok omskep, of uit hierdie tekening skrap.

## Algemene foute

- **Die blok het ver van die kruisdraad beland.** Die basispunt was nie op die voorwerpe nie. Maak die blok weer met die basispunt op 'n hoek of skarnier.
- **"No objects selected; nothing made."** Jy het {{key:Enter}} gedruk voordat jy iets gekies het.
- **"This drawing has no blocks yet: F inserts one from a file, L from the library (or make one with BLOCK)."** Tik `F` om 'n blok uit 'n ander tekening in te bring, of `L` vir die biblioteek. Sien [Voeg in uit 'n lêer of die biblioteek](topic:insert-from-file-and-library).
- **"A viewport cannot go in a block."** Laat aansigvenster-rame uit die keuse.
