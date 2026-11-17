---
title: Voeg twee mense se wysigings van een tekening saam
summary: Laat git, Fossil of Mercurial twee afskrifte van 'n DWG- of DXF-voorwerp vir voorwerp saamvoeg, deur die sleutel te gebruik wat CadCraft op elke voorwerp hou.
keywords: samevoeg, git, fossil, mercurial, weergawebeheer, diff, konflik, drieweg, cadcraft samevoeg, sleutel, gitattributes, DWG, DXF
from: 71482bf9
---

Twee mense wysig dieselfde tekening. As hulle verskillende voorwerpe verander het, kan die samevoeging outomaties wees: niks hoef met die hand oor gedoen te word nie.

## Wat dit laat werk

CadCraft gee elke voorwerp wat jy teken 'n kort **sleutel** wat nooit verander nie en nooit aan twee voorwerpe gegee word nie. Dit word saam met die voorwerp in die DWG of DXF gestoor (as ekstra data wat ander programme behou). Die samevoeging soek voorwerpe op daardie sleutel op, nie op hul posisie in die lêer nie, omdat elke program posisies hernommer wanneer dit stoor. Skakel dit af in {{ui:Instellings}} › CadCraft › Samevoegvriendelike lêers as jy nooit samevoeg nie; die lêers word ongeveer 10 persent kleiner.

'n Tekening wat gestoor is voordat sleutels bestaan het, voeg steeds saam: sy voorwerpe kry 'n sleutel uit hul plek in die lêer, dieselfde vir almal wat dit oopmaak.

## Stel dit op

Git benodig twee reëls een keer per bewaarplek:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# een keer, op elke rekenaar
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sonder git, voer dit met die hand uit: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil en Mercurial neem dieselfde drie lêers in hul eie samevoeg-gereedskapinstelling.

## Die reëls

- 'n Voorwerp wat net aan een kant verander is, word geneem. Dieselfde verandering aan albei kante word een keer geneem.
- Dieselfde eienskap wat op twee maniere verander is, is 'n **konflik**: jou kant bly en die verslag lys albei waardes. Maak die resultaat oop, kyk na daardie voorwerp, en maak dit met die hand reg.
- 'n Voorwerp wat aan enige kant bygevoeg is, word behou. 'n Voorwerp wat aan een kant verwyder is en aan die ander onaangeroer is, word verwyder. Verwyder aan een kant en verander aan die ander: verwyder, en gerapporteer.
- Lae, blokke, teks- en maatstyle, blaaie en benoemde aansigte voeg op dieselfde manier saam. Beperkings volg die voorwerpe wat hulle noem.
- Die resultaat word in dieselfde lêerformaat en weergawe as joune geskryf.

Nie saamgevoeg nie: die volgorde waarin voorwerpe geteken word, is joune, gevolg deur die voorwerpe wat die ander kant bygevoeg het. Veranderinge aan dieselfde blokdefinisie aan albei kante is 'n konflik, nooit gemeng nie. Niks word opgelaai nie; alles loop op jou rekenaar.
