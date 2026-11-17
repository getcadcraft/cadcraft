---
title: Punte vir BIM-programme
summary: Voer punte, en die invoegpunte van blokke met 'n beskrywing, uit na 'n CSV- of TXT-lêer wat BIM- en opmetingsprogramme invoer.
keywords: exportpoints, uitvoer punte, punte, csv, txt, pnezd, penzd, xyz, opmetingspunte, koördinate, bim, uitsit, puntlêer, noord, oos, hoogte
from: d80e2d53
---

## Wat jy gaan maak

'n Puntlêer: een lyn per punt, met sy nommer, noord, oos, hoogte en beskrywing, wat BIM-programme (Revit en Archicad onder andere) en opmetingsagteware kan invoer om opmetingspunte, terreinmerkers of toerusting te plaas.

## Voer die punte uit

1. Kies die punte en die blokverwysings wie se invoegpunte jy wil hê, of kies niks om elke punt te neem.
2. Tik {{cmd:EXPORTPOINTS}} (of `EXPPTS`, of {{ui:Blokke}} › {{ui:Meer}} › {{ui:Voer punte uit}}) en druk {{key:Enter}} (druk {{key:Enter}} weer by `Kies punte en blokke` wanneer niks gekies is nie).
3. Wanneer jy blokke met kenmerke gekies het, lys CadCraft hul etikette: tik die een wie se waarde die beskrywing is (byvoorbeeld `ITEM`), of enigiets anders om elke blok se naam te gebruik.
4. Kies die kolomme: `PNEZD` (punt, noord, oos, hoogte, beskrywing: die gewone een), `PENZD` (oos voor noord) of `XYZ` (net die koördinate).
5. Kies die eenhede: `D` (soos getekend), of `M` (meter) of `F` (voet). Dit is slegs beskikbaar wanneer die tekening se eenhede gestel is: {{ui:Eienskappe}} › {{ui:Eenhede}} met niks gekies nie.
6. Met 'n UCS gestel, kies `W` (wêreld) of `U` (UCS-koördinate) (sien [UCS en 'n gedraaide aansig](topic:ucs-and-turned-view)).
7. Kies `C` (komma-geskei) vir 'n `.csv`-lêer of `T` (tab-geskei) vir 'n `.txt`, en die eerste puntnommer.

Die lêer laai af as `<drawing>-points.csv` (of `.txt`), en die geskiedenis sê hoeveel punte dit bevat.

## Wat in die lêer is

- Een punt per lyn, eindig met 'n lynbreuk (CR LF), drie desimale.
- 'n Punt se hoogte is sy Z (0 wanneer dit geen het nie). 'n Blok se punt is sy invoegpunt.
- 'n Beskrywing wat 'n komma (of 'n tab in 'n TXT) of 'n aanhaling bevat, word in dubbele aanhalingstekens geplaas, met sy aanhalingstekens verdubbel.
- Die formaat is dié wat CivilCraft lees en skryf, so die lêer maak ook daar oop as punte.

## Algemene foute

- Slegs `D` word vir die eenhede aangebied: die tekening het geen eenhede gestel nie. Stel hulle, of skakel om in die ander program.
- Die punte is ver van waar jy hulle in die ander program verwag: voer wêreldkoördinate uit (`W`), of die UCS wat die ander program se opmetingspunt gebruik (`U`).
