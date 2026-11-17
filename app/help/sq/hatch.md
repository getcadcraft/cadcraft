---
title: Vijëzim dhe mbushje zonash
summary: Mbush një zonë me ngjyrë të ngurtë ose me një motiv standard duke klikuar brenda saj ose duke përzgjedhur forma të mbyllura, cakto shkallën dhe këndin e motivit, dhe ndrysho më pas një vijëzim.
keywords: vijëzim, hatch, bhatch, mbushje, mbushje e ngurtë, motiv, ansi31, ansi37, tullë, tokë, rrjetë, vija prerjeje, poché, ishull, kufi, shkallë, kënd
from: 14399174
---

## Çfarë do të krijoni

Një prerje muri e mbushur me motivin ANSI31, një kolonë në të e lënë bosh dhe një mbushje e ngurtë në kolonë.

## Vijëzim duke klikuar brenda një zone

1. Vizato një drejtkëndësh (`REC`, `0,0`, `@2000,1200`) dhe një rreth brenda tij (`C`, `1000,600`, `300`). Kliko {{ui:Extents}}.
2. Kliko {{ui:Hatch}} te grupi {{ui:Draw}}, ose shkruaj `H` dhe shtyp {{key:Enter}}. Historiku tregon cili motiv është aktual, për shembull `Vijëzimi aktual: ANSI31, shkalla 1, kënd 0°`.
3. Shkruaj `P` dhe shtyp {{key:Enter}}, shkruaj `ANSI31` dhe shtyp {{key:Enter}}.
4. Shkruaj `SC` dhe shtyp {{key:Enter}}, shkruaj `20` dhe shtyp {{key:Enter}}. Madhësitë e motivit janë në letër, ndaj një vizatim i printuar në 1:20 kërkon shkallë 20.
5. Te `Zgjidh pikën e brendshme`, kliko brenda drejtkëndëshit, jashtë rrethit. Vijëzimi shfaqet si pamje paraprake.
6. Shtyp {{key:Enter}}. Drejtkëndëshi vijëzohet; rrethi brenda mbetet bosh, sepse është një ishull.

Kliko brenda disa zonave përpara se të shtypësh {{key:Enter}} për t'i bërë një vijëzim të vetëm. Opsioni [Zhbëj (U)] heq zonën e fundit.

## Një mbushje e ngurtë

1. Shkruaj `H` dhe shtyp {{key:Enter}}.
2. Shkruaj `P`, shtyp {{key:Enter}}, shkruaj `SOLID` dhe shtyp {{key:Enter}}.
3. Kliko brenda rrethit, pastaj shtyp {{key:Enter}}.

## Vijëzim i formave të mbyllura që përzgjidhni

Në vend që të klikosh brenda, shkruaj `S` te `Zgjidh pikën e brendshme` (opsioni [Përzgjidh objektet (S)]) dhe përzgjidh polivija të mbyllura, rrethe ose elipse të mbyllura, pastaj shtyp {{key:Enter}}. Format brenda të tjerave mbeten bosh me radhë (ajo e jashtme vijëzohet, ajo e radhës mbetet bosh, e kështu me radhë).

## Motivet

Shkruaj `?` te pyetja për motivin për të parë listën. Motivet standarde janë ANSI31 deri ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH dhe SOLID. Në një vizatim me inç (ose me këmbë dhe inç si format gjatësie) përdoren madhësitë e motiveve në inç, si në AutoCAD; përndryshe ato në milimetra.

{{ui:Angle}} (`A`) e kthen gjithë motivin: ANSI31 në 90° priret në drejtim tjetër.

**Skedarët e motivit.** Shkruaj `F` (opsioni [Skedar motivi (F)]) te `Zgjidh pikën e brendshme` dhe zgjidh një skedar `.pat`. Motivet e tij i bashkohen listës; kur janë më shumë se një, pyetesh cilin të përdorësh. Një skedar pa motiv që CadCraft mund ta lexojë e thotë këtë, dhe çdo motiv që ka anashkaluar numërohet. Madhësitë në një skedar `.pat` nuk kanë njësi të vetën, prandaj lexohen në njësitë e vizatimit. Janë provuar vetëm skedarë të shkruar në formatin e zakonshëm `.pat`; asnjë i bërë nga një program tjetër.

## Ndrysho një vijëzim

Përzgjidh vijëzimin (kliko një nga vijat e tij). Te {{ui:Properties}}: {{ui:Pattern}}, {{ui:Pattern scale}} dhe {{ui:Pattern angle}}. Vijëzimet nga vizatimet e hapura shfaqin motivin e tyre kur është një nga standardet; të tjerat shfaqen si ton i çelët i ngjyrës së tyre.

## Gabimet e zakonshme

- **"No closed boundary round that point."** Ka një boshllëk në kontur, ose një pjesë e saj është jashtë ekranit: CadCraft shikon vetëm atë që është në ekran. Mbyll boshllëkun (zmadho te qoshet), ose largo pamjen.
- **"The pattern is too dense to draw at this scale."** Vijat do të ishin më afër sesa mund ta shfaqë vizatimi. Përdor një shkallë më të madhe: provo shkallën e printimit (20 për 1:20).
- **Motivi duket shumë i madh ose shumë i vogël.** Shkalla është në njësi vizatimi për njësi motivi; shih hapin 4 më sipër.
- **Lëvizja e konturës nuk e lëviz vijëzimin.** Një vijëzim nuk është i lidhur me kufirin e vet. Lëviz të dyja, ose vijëzo përsëri.

## Një vijëzim që qëndron me kufirin e vet

Një vijëzim që bën me `HATCH` mban mend cili është kufiri i tij. Zhvendos, kthe ose shkallëzo kufirin dhe vijëzimi dhe motivi i tij shkojnë me të. Tërhiq një dorezë për të ripërcaktuar formën e kufirit dhe vijëzimi llogaritet përsëri. Zhvendos vetëm vijëzimin dhe kufiri i tij vjen gjithashtu, si një formë e mbushur në një program vizatimi.

Lidhja mbaron, dhe rreshti i komandës e thotë këtë, nëse kufiri nuk mbyllet më ose e ripërcakton vijëzimin me dorë. Vetë vijëzimi mbetet. Shkruaj `AS` gjatë vijëzimit për të bërë vijëzime që qëndrojnë vetë. Kopjo një vijëzim me kufirin e tij dhe kopja ka lidhjen e vet.

`HATCHEDIT` (`HE`) ndryshon motivin, shkallën, këndin dhe origjinën e një vijëzimi, dhe e lidh atë me një kufi ose mbaron lidhjen. Lidhja ruhet në skedarët DWG dhe DXF 2000. Një skedar DXF R12 nuk ka objekt vijëzimi, dhe lidhjet e bëra në programe të tjera nuk lexohen: për to përdor `HATCHEDIT` dhe Lidh.

Një vijëzim që nuk ka më kufi (kufiri u fshi, ose skedari erdhi pa të) mund ta marrë përsëri: `HATCHGENERATEBOUNDARY` (`HGB`) vizaton një polivijë të mbyllur rreth çdo cikli të vijëzimit dhe, nëse përgjigjesh Po, e lidh vijëzimin me to.

## Një mbushje gradiente

`GRADIENT` (`GD`) mbush një zonë me gradient në vend të një motivi: të njëjtat zgjedhje si `HATCH`, pasi pyet llojin (linear, cilindrik, sferik, hemisferik, i kurbuar, dhe secili prej tyre i përmbysur), një ngjyrë me nuancë ose dy ngjyra, këndin, dhe nëse është i qendërzuar apo jo. Te `HATCH` opsioni `G` bën të njëjtën gjë. `HATCHEDIT` `G`, ose {{ui:Properties}} nën Gradient, ndryshon një gradient ose e kthen çdo vijëzim në gradient.

Një gradient shfaqet në ekran dhe në printime. Ruaje si DWG 2004 ose më vonë dhe programet e tjera marrin një vijëzim gradient të vërtetë. DXF 2000 dhe DWG 2000 nuk kanë gradient: aty CadCraft e mban për vete dhe programet e tjera shohin një mbushje të ngurtë në ngjyrën e parë.

## Pritja e një vijëzimi

`TRIM` pret një vijëzim si çdo objekt tjetër. Kliko vijëzimin në anën e skajit prerës që dëshiron të zhduket: skajet ndajnë zonën e vijëzuar dhe ajo pjesë hiqet. Në modalitetin e shpejtë çdo objekt është skaj prerës; zgjidh skajet e para (opsioni [Kufijtë e prerjes (T)]) kur janë shumë. Një vijëzim i prerë nuk është më i lidhur me kufirin e vet, sepse nuk e mbush më atë.
