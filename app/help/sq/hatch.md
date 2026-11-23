---
title: Vijëzimi dhe zonat e mbushura
summary: Mbush një zonë me ngjyrë të ngurtë ose me një model standard, duke klikuar brenda saj ose duke zgjedhur forma të mbyllura, cakto shkallën dhe këndin e modelit, dhe ndrysho vijëzimin më pas.
keywords: vijëzim, bhatch, mbushje, mbushje e ngurtë, model, ansi31, ansi37, tullë, tokë, rrjet, vija prerjeje, poché, ishull, kufi, shkallë, kënd
from: e7feb344
---

## Çfarë do të bësh

Një prerje muri e mbushur me modelin ANSI31, një kolonë brenda saj e lënë bosh, dhe një mbushje e ngurtë në kolonë.

## Vijëzim duke klikuar brenda një zone

1. Vizato një drejtkëndësh (`REC`, `0,0`, `@2000,1200`) dhe një rreth brenda tij (`C`, `1000,600`, `300`). Kliko {{ui:Shtrirje}}.
2. Kliko {{ui:Vijëzim}} te grupi {{ui:Vizato}}, ose shkruaj `H` dhe shtyp {{key:Enter}}. Historiku thotë cili model është aktual, për shembull `Current hatch: ANSI31, scale 1, angle 0°`.
3. Shkruaj `P` dhe shtyp {{key:Enter}}, shkruaj `ANSI31` dhe shtyp {{key:Enter}}.
4. Shkruaj `SC` dhe shtyp {{key:Enter}}, shkruaj `20` dhe shtyp {{key:Enter}}. Madhësitë e modelit janë në letër, prandaj një vizatim i printuar në 1:20 kërkon shkallë 20.
5. Te `Pick internal point`, kliko brenda drejtkëndëshit, jashtë rrethit. Vijëzimi shfaqet si pamje paraprake.
6. Shtyp {{key:Enter}}. Drejtkëndëshi vijëzohet; rrethi brenda mbetet bosh, sepse është ishull.

Kliko brenda disa zonave përpara se të shtypësh {{key:Enter}}, për t'i bërë një vijëzim. `U` heq zonën e fundit.

## Një mbushje e ngurtë

1. Shkruaj `H` dhe shtyp {{key:Enter}}.
2. Shkruaj `P`, shtyp {{key:Enter}}, shkruaj `SOLID` dhe shtyp {{key:Enter}}.
3. Kliko brenda rrethit, pastaj shtyp {{key:Enter}}.

## Vijëzo forma të mbyllura që zgjedh

Në vend se të klikosh brenda, shkruaj `S` (Select objects) te `Pick internal point`, zgjidh polivijë të mbyllura, rrathë ose elipse të mbyllura, dhe shtyp {{key:Enter}}. Format brenda të tjerave mbeten bosh me radhë (ajo e jashtme vijëzohet, ajo e radhës brenda saj mbetet bosh, e kështu me radhë).

## Modelet

Shkruaj `?` te pyetja për modelin për listën. Modelet standarde janë ANSI31 deri ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS dhe EARTH, dhe SOLID. Në një vizatim me inç (ose me këmbë dhe inç si format gjatësie), përdoren madhësitë e modeleve në inç, si në AutoCAD; përndryshe ato në milimetra.

{{ui:Kënd}} (`A`) e rrotullon të gjithë modelin: ANSI31 në 90° shkon në drejtim tjetër.

**Skedarët e modeleve.** Shkruaj `F` (Pattern file) te `Pick internal point` dhe zgjidh një skedar `.pat`. Modelet e tij i bashkohen listës; nëse janë më shumë se një, të pyet cilin të përdorësh. Një skedar pa model që CadCraft mund ta lexojë e thotë këtë, dhe çdo model që u anashkalua numërohet. Madhësitë në një skedar `.pat` nuk kanë njësi të veten, prandaj lexohen në njësitë e vizatimit. Janë provuar vetëm skedarë të shkruar në formatin e zakonshëm `.pat`; asnjë i bërë nga një program tjetër.

## Ndrysho një vijëzim

Zgjidhe (kliko një nga vijat e tij). Te {{ui:Vetitë}}: {{ui:Model}}, {{ui:Shkalla e motivit}} dhe {{ui:Këndi i motivit}}. Vijëzimet nga vizatimet e hapura shfaqin modelin e tyre kur është një nga ato standardet; të tjerët shfaqen si ton i çelët i ngjyrës së tyre.

## Gabime të zakonshme

- **"No closed boundary round that point."** Ka një boshllëk në kontur, ose një pjesë është jashtë ekranit: CadCraft shikon vetëm atë që është në ekran. Mbyll boshllëkun (zmadho te qoshet), ose zvogëlo.
- **"The pattern is too dense to draw at this scale."** Vijat do të ishin më afër se sa mund ta shfaqë vizatimi. Përdor një shkallë më të madhe: provo shkallën e printimit (20 për 1:20).
- **Modeli duket shumë i madh ose shumë i vogël.** Shkalla është në njësi vizatimi për njësi modeli; shih hapin 4 më sipër.
- **Vijëzimi nuk ndjek më konturin e vet.** Një vijëzim i bërë me {{cmd:HATCH}} mbetet me objektet nga të cilat u bë: zhvendos, rrotullo ose shkalloje konturin dhe vijëzimi shkon me të; ri-formësoje me një grip dhe vijëzimi llogaritet sërish. Lidhja mbaron kur kontura nuk mbyllet më, kur vetë vijëzimi ri-formësohet me dorë, ose kur e pret, dhe rreshti i komandës e thotë këtë. Asgjë nuk humbet: vijëzo sërish zonën për ta lidhur përsëri.

## Një vijëzim që qëndron me kufirin e vet

Një vijëzim që bën me `HATCH` mban mend çfarë e kufizon. Zhvendos, rrotullo ose shkalloje kufirin dhe vijëzimi dhe modeli i tij shkojnë me të. Tërhiq një grip për të ri-formësuar kufirin dhe vijëzimi llogaritet sërish. Zhvendos vijëzimin vetëm dhe kufiri i tij vjen gjithashtu, si një formë e mbushur në një program vizatimi.

Lidhja mbaron, dhe rreshti i komandës e thotë këtë, nëse kufiri nuk mbyllet më ose ri-formëson vijëzimin me dorë. Vetë vijëzimi mbetet. Shkruaj `AS` gjatë vijëzimit për të bërë vijëzime që qëndrojnë vetë. Kopjo një vijëzim me kufirin e tij dhe kopja ka lidhjen e vet.

`HATCHEDIT` (`HE`) ndryshon modelin, shkallën, këndin dhe origjinën e një vijëzimi, dhe e lidh me një kufi ose e mbyll lidhjen. Lidhja ruhet në skedarët DWG dhe DXF 2000. Një skedar DXF R12 nuk ka objekt vijëzimi, dhe lidhjet e bëra në programe të tjera nuk lexohen: përdor `HATCHEDIT` dhe Link për ato.

Një vijëzim që nuk ka më kufi (kufiri u fshi, ose skedari erdhi pa të) mund ta marrë përsëri: `HATCHGENERATEBOUNDARY` (`HGB`) vizaton një polivijë të mbyllur rreth çdo cikli të vijëzimit dhe, nëse përgjigjesh Yes, e lidh vijëzimin me to.

## Një mbushje gradienti

`GRADIENT` (`GD`) mbush një zonë me gradient në vend të modelit: të njëjtat zgjedhje si `HATCH`, pasi pyet llojin (linear, cilindrik, sferik, hemisferik, i kthyer, dhe secili nga ata i përmbysur), një ngjyrë me nuancë ose dy ngjyra, këndin, dhe qendrën ose jo. Te `HATCH` opsioni `G` bën të njëjtën gjë. `HATCHEDIT` `G`, ose {{ui:Vetitë}} te Gradient, ndryshon një gradient ose e kthen çdo vijëzim në gradient.

Një gradient shfaqet në ekran dhe në printime. Ruaje si DWG 2004 ose më vonë dhe programet e tjera marrin një vijëzim gradient të vërtetë. DXF 2000 dhe DWG 2000 nuk kanë gradient: aty CadCraft e mban për vete, dhe programet e tjera shohin një mbushje të ngurtë me ngjyrën e parë.

## Prit një vijëzim

`TRIM` e pret një vijëzim si çdo objekt tjetër. Kliko vijëzimin në anën e skajit prerës që do të heqësh: skajet ndajnë zonën e vijëzuar dhe ajo pjesë hiqet. Në modalitetin Quick çdo objekt është skaj prerës; zgjidh skajet së pari (opsioni `T`) kur janë shumë. Një vijëzim i prerë nuk është më i lidhur me kufirin e vet, sepse nuk e mbush më atë.
