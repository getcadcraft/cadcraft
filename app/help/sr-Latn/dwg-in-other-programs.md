---
title: Otvaranje CadCraft DWG datoteke u drugim programima
summary: U kojim programima je otvorena DWG datoteka koju je sačuvao CadCraft, šta se proverava i šta raditi kad jedan od njih prijavi grešku.
keywords: dwg, otvaranje u drugim programima, kompatibilnost, da li se otvara, revizija, drugi CAD programi, dxf, provera, sačuvaj kao dwg, AUDIT, trueview
from: 0f8c15c4
---

## Šta CadCraft zapisuje

{{ui:Save}} zapisuje pravi DWG, u verziji u kojoj je crtež došao ili onoj koju izaberete u {{ui:Save as}}: AutoCAD 2000, 2004, 2007, 2010, 2013 ili 2018. Ništa se ne pretvara iza vaših leđa: istorija navodi sve što se promenilo usput (na primer, prava boja zapisana kao najbliža standardna boja u DWG-u 2000).

## Gde je otvoren

Svaki DWG koji CadCraft zapiše otvaraju, u svakoj verziji, tri programa koja nisu CadCraft: ODA File Converter (koji proverava datoteku i ništa u njoj ne popravlja), LibreDWG i libdxfrw. Njihovo čitanje se poredi sa CadCraft-ovim: objekti, slojevi, blokovi i atributi, kote, šrafure, listovi i njihovi prozori pogleda.

Otvaranje CadCraft-ovih DWG datoteka u AutoCAD-u i u besplatnom DWG TrueView-u proverava se na Windows-u, vrsta objekta po vrsta objekta (AUDIT, slojevi, listovi, kote, šrafure, atributi, dinamički blokovi, isečene reference, slike). Rezultati će biti navedeni ovde kad budu gotovi.

## Kad drugi program prijavi grešku

1. Ponovo sačuvajte kao DXF ({{ui:Save as}} › {{ui:DXF 2000}}) i otvorite ga: većina programa čita DXF.
2. Sačuvajte DWG u starijoj verziji (2013 ili 2010).
3. Javite nam na Discord-u koji program i koju verziju i šta je rekao; datoteka najviše pomaže.
