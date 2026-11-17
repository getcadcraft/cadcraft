---
title: Stel die lettertipe en grootte van teks met teksstyle
summary: Maak benoemde teksstyle met 'n lettertipe, hoogte, breedte en skuinsheid, stel een as huidig vir nuwe teks, en verander 'n styl om al die teks wat dit gebruik te verander.
keywords: teksstyl, styl, STYLE, ST, TEXTSTYLE, -STYLE, lettertipe, teksthoogte, breedtefaktor, skuins, skuinsheid, verander lettertipe, standaardstyl, pas styl toe, DDSTYLE
from: bd5a4883
---

## Wat jy gaan doen

Maak 'n teksstyl genaamd `Notes` met sy eie lettertipe en hoogte, gebruik dit vir nuwe teks, en verander later die styl sodat elke nota wat dit gebruik, tegelyk verander.

## Stappe

1. Tik {{cmd:STYLE}} (`ST`) en druk {{key:Enter}}, of klik {{ui:Teksstyl}} op die {{ui:Teken}}-werkbalk. Die {{ui:Teksstyl}}-dialoog lys die style in die tekening. Elke tekening het `Standard`.
2. Klik {{ui:Nuwe…}}, tik `Notes` as die naam van die nuwe styl en klik {{ui:OK}}. Die statuslyn sê "Teksstyl Notes gemaak en as huidig gestel."
3. In {{ui:Lettertipe}}, kies of tik 'n lettertipenaam. Stel {{ui:Hoogte (0 = vra elke keer)}} op 'n getal, soos `2.5`, sodat elke nuwe teks daardie hoogte kry. Laat dit op `0` om elke keer gevra te word.
4. Stel {{ui:Breedtefaktor}} en {{ui:Skuinshoek (°)}} as jy smaller, wyer of skuins letters wil hê. Die monsterlyn wys die resultaat.
5. Klik {{ui:Maak toe}}. Teken teks met {{cmd:TEXT}} of {{cmd:MTEXT}}: nuwe teks neem die huidige styl.
6. Om 'n styl te gebruik wat jy reeds gemaak het, maak die dialoog weer oop, kies dit in die lys en klik {{ui:Stel as huidig}}.
7. Om 'n styl op teks te plaas wat reeds geteken is, kies die teks, maak die dialoog oop, kies die styl en klik {{ui:Pas op geselekteerde teks toe}}.

## Verander 'n styl later

Verander die lettertipe, hoogte, breedte of skuinsheid van 'n styl in die dialoog, en elke teks wat dit gebruik, volg, in een ontdoenstap ({{key:Mod+Z}}). Die statuslyn sê hoeveel tekste gevolg het.

## Notas

- {{ui:Skrap}} weier `Standard`, en 'n styl wat teks nog gebruik: verander daardie teks eers na 'n ander styl.
- Die style word in die tekening se STYLE-tabel gestoor, so DXF- en DWG-lêers hou hulle.
- Op die opdragreël doen `-STYLE` dieselfde met opsies (Current, New, Font, Height, Width, Oblique, Delete, List).
- 'n Lettertipe wat nie op die rekenaar is wat die tekening lees nie, word in 'n ander lettervorm gewys.
