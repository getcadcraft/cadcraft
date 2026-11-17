---
title: Otvaranje CadCraft DWG datoteke u drugim programima
summary: U kojim su programima otvarane DWG datoteke koje sprema CadCraft, što se provjerava i što učiniti kad jedan od njih prijavi grešku.
keywords: dwg, otvaranje u drugim programima, kompatibilnost, hoće li se otvoriti, audit, trueview, drugi CAD programi, dxf, provjera, spremi kao dwg
from: 0f8c15c4
---

## Što CadCraft zapisuje

{{ui:Spremi}} zapisuje pravu DWG datoteku, u verziji u kojoj je crtež došao ili onoj koju odaberete u {{ui:Spremi kao}}: AutoCAD 2000, 2004,
2007, 2010, 2013 ili 2018. Ništa se ne pretvara iza vaših leđa: povijest navodi sve što se promijenilo usput (na primjer, prava boja
zapisana kao najbliža standardna boja u DWG 2000).

## Gdje je otvarana

Svaku DWG datoteku koju CadCraft zapiše, u svim verzijama, otvaraju tri programa koja nisu CadCraft: ODA File Converter (koji
provjerava datoteku i ništa u njoj ne popravlja), LibreDWG i libdxfrw. Njihovo čitanje uspoređuje se s CadCraftovim: objekti, slojevi,
blokovi i atributi, kote, šrafure, listovi i njihovi viewporti.

Otvaranje CadCraft DWG datoteka u AutoCADu i u besplatnom DWG TrueViewu provjerava se na Windowsu, vrstu po vrstu objekata (AUDIT, slojevi,
listovi, kote, šrafure, atributi, dinamički blokovi, odrezane reference, slike). Rezultati će biti navedeni ovdje kad budu gotovi.

## Kad drugi program prijavi grešku

1. Spremite ponovno kao DXF ({{ui:Spremi kao}} › {{ui:DXF 2000}}) i otvorite tu datoteku: većina programa čita DXF.
2. Spremite DWG u starijoj verziji (2013 ili 2010).
3. Javite nam na Discordu koji program i koju verziju, i što je rekao; datoteka najviše pomaže.
