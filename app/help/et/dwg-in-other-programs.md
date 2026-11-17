---
title: CadCraft DWG avamine teistes programmides
summary: Millistes programmides on CadCrafti salvestatud DWG avatud, mida kontrollitakse ja mida teha, kui mõni neist kurdab.
keywords: dwg, avamine teistes programmides, ühilduvus, kas avaneb, audit, trueview, teised CAD-programmid, dxf, kontroll, salvesta DWG-na
from: 0f8c15c4
---

## Mida CadCraft kirjutab

{{ui:Save}} kirjutab päris DWG-faili selles versioonis, milles joonis tuli, või selles, mille valid {{ui:Save as}}-is: AutoCAD 2000, 2004, 2007, 2010, 2013 või 2018. Midagi ei teisendata märkamatult: ajalugu loetleb kõik, mis selle käigus muutus (näiteks tõeline värv kirjutatakse 2000 DWG-s lähima standardvärvina).

## Kus seda on avatud

Iga DWG, mida CadCraft kirjutab, avatakse igas versioonis kolme programmi poolt, mis pole CadCraft: ODA File Converter (mis kontrollib faili ega paranda selles midagi), LibreDWG ja libdxfrw. Nende lugemist võrreldakse CadCrafti omaga: objektid, kihid, plokid ja atribuudid, mõõtmed, viirutused, lehed ja nende vaateaknad.

CadCrafti DWG-failide avamist AutoCADis ja tasuta DWG TrueView's kontrollitakse Windowsil objektiliikide kaupa (AUDIT, kihid, lehed, mõõtmed, viirutused, atribuudid, dünaamilised plokid, lõigatud viited, pildid). Tulemused lisatakse siia, kui need on valmis.

## Kui mõni programm kurdab

1. Salvesta uuesti DXF-ina ({{ui:Save as}} › {{ui:DXF 2000}}) ja ava see: enamik programme loeb DXF-i.
2. Salvesta DWG vanemas versioonis (2013 või 2010).
3. Anna meile Discordis teada, mis programm ja versioon ning mida see ütles; fail aitab kõige rohkem.
