---
title: Deschiderea unui DWG CadCraft în alte programe
summary: Programele în care a fost deschis un DWG salvat de CadCraft, ce este verificat și ce de făcut când unul dintre ele se plânge.
keywords: dwg, deschidere în alte programe, compatibilitate, se deschide, audit, trueview, alte programe CAD, dxf, verificare, salvare ca dwg
from: 0f8c15c4
---

## Ce scrie CadCraft

{{ui:Salvare}} scrie un DWG real, în versiunea în care a venit desenul sau în cea aleasă în {{ui:Salvare ca}}: AutoCAD 2000, 2004,
2007, 2010, 2013 sau 2018. Nimic nu se convertește în ascuns: istoricul listează tot ce s-a schimbat pe parcurs (de exemplu o culoare reală
scrisă ca cea mai apropiată culoare standard într-un DWG 2000).

## Unde a fost deschis

Fiecare DWG scris de CadCraft este deschis, în fiecare versiune, de trei programe care nu sunt CadCraft: ODA File Converter (care verifică
fișierul și nu repară nimic din el), LibreDWG și libdxfrw. Citirea lor este comparată cu cea a CadCraft: obiecte, straturi, blocuri și
atribute, cotări, hașuri, foi și ferestrele lor de vizualizare (viewport).

Deschiderea fișierelor DWG CadCraft în AutoCAD și în DWG TrueView (gratuit) este verificată pe Windows, tip de obiect cu tip de obiect
(AUDIT, straturi, foi, cotări, hașuri, atribute, blocuri dinamice, referințe decupate, imagini). Rezultatele vor fi listate aici când vor fi gata.

## Când se plânge un alt program

1. Salvați din nou ca DXF ({{ui:Salvare ca}} › {{ui:DXF 2000}}) și deschideți acela: majoritatea programelor citesc DXF.
2. Salvați fișierul DWG într-o versiune mai veche (2013 sau 2010).
3. Spuneți-ne pe Discord ce program și ce versiune, și ce a afișat; fișierul ajută cel mai mult.
