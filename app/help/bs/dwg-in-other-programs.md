---
title: Otvaranje CadCraft DWG-a u drugim programima
summary: U kojim programima je otvoren DWG koji je sačuvao CadCraft, šta se provjerava i šta uraditi kada se jedan od njih požali.
keywords: dwg, otvaranje u drugim programima, kompatibilnost, da li se otvara, audit, trueview, drugi CAD programi, dxf, provjera, spasi kao dwg
from: 0f8c15c4
---

## Šta CadCraft piše

{{ui:Save}} › "Spasi" piše pravi DWG, u verziji u kojoj je crtež došao ili onoj koju izaberete u {{ui:Save as}} › "Spasi kao": AutoCAD 2000, 2004, 2007, 2010, 2013 ili 2018. Ništa se ne pretvara iza vaših leđa: historija navodi sve što se promijenilo usput (na primjer, prava boja zapisana kao najbliža standardna boja u DWG-u 2000).

## Gdje je otvoren

Svaki DWG koji CadCraft napiše otvaraju, u svakoj verziji, tri programa koji nisu CadCraft: ODA File Converter (koji provjerava datoteku i ništa u njoj ne popravlja), LibreDWG i libdxfrw. Njihovo čitanje se poredi s CadCraftovim: objekti, slojevi, blokovi i atributi, kote, šrafure, listovi i njihovi prozori.

Otvaranje CadCraftovih DWG datoteka u AutoCAD-u i u besplatnom DWG TrueView-u provjerava se na Windowsu, vrsta po vrsta objekata (AUDIT, slojevi, listovi, kote, šrafure, atributi, dinamički blokovi, isječene reference, slike). Rezultati će se ovdje navesti kada budu gotovi.

## Kada se drugi program požali

1. Ponovo spasite kao DXF ({{ui:Save as}} › "Spasi kao" › {{ui:DXF 2000}}) i otvorite ga: većina programa čita DXF.
2. Spasite DWG u starijoj verziji (2013 ili 2010).
3. Javite nam na Discordu koji program i koju verziju, i šta je rekao; datoteka najviše pomaže.
