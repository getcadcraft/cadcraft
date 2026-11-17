---
title: Vizato mure, dyer dhe dritare inteligjente 2D
summary: Vizatoni muret si një polivijë, bashkojini pastër, dhe vendosni dyer dhe dritare që lëvizin me murin. Të gjitha 2D, pa model 3D.
keywords: mur, mure, WALL, WA, derë, DOOR, DR, dritare, WINDOW, WN, DELOPENING, mur inteligjent, plan dyshemeje, hapje, lëvizje, menteshë, hapje e derës
from: 45845d49
---

Muret këtu janë objekte vizatimi 2D. Ato nuk krijojnë model 3D, kështu që një plan mbetet aq i lehtë sa një vizatim me vija. Për një model ndërtese, përdorni BimCraft.

## Vizato muret

Shkruani `WALL` (`WA`), ose zgjidhni {{ui:Mur}} në menynë {{ui:Më shumë}} të grupit {{ui:Vizato}}, pastaj klikoni pika ashtu si për një polivijë. Shtypni {{key:Enter}} për të mbaruar, ose shkruani `C` për të mbyllur dhomën.

- `T` cakton trashësinë.
- `J` thotë ku ndjekin klikimet tuaja: qendra e murit, ose faqja e tij e majtë ose e djathtë.
- `F` cakton mbushjen: asnjë, e ngurtë ose hatch.

Qoshet bashkohen vetvetiu me mitër. Një mur që përfundon brenda trashësisë së një muri tjetër bashkohet me të në një T të pastër, dhe muret që kryqëzohen hapen njëri ndaj tjetrit. Bashkimet ruhen me muret. Për drejtkëndëshat, shumëkëndëshat, harqet, ndarjet, kyçjet dhe pjesën tjetër, shihni "Forma muresh, prerje, zhvendosje dhe kyçje për muret 2D".

## Shtoni dyer dhe dritare

Shkruani `DOOR` (`DR`) ose `WINDOW` (`WN`) dhe klikoni mbi një mur. Një derë lëviz në anën e murit ku klikoni. `W` cakton gjerësinë, `Y` tipin dhe `H` anën e menteshës. Vazhdoni të klikoni për të vendosur të tjera, dhe shtypni {{key:Enter}} për të mbaruar. Dyert mund të jenë me një ose dy kanate, rrëshqitëse ose një hapje e lirë. Dritaret mund të jenë fikse, me hapje ose rrëshqitëse.

## Ndryshoni ato

Përzgjidhni një mur për të parë kapëzat e tij:

- Kapëzat në skaje e zgjasin murin. Muret e bashkuara me të e ndjekin.
- Kapëza në mes e zhvendos murin.
- Një kapëse mbi një hapje e rrëshqet përgjatë murit.
- Shigjetat e kthejnë menteshën dhe lëvizjen e derës.

Vetitë tregojnë trashësinë, mbushjen dhe çdo hapje: tipin, gjerësinë, pozicionin, menteshën, lëvizjen, nëse shfaqet e hapur ose e mbyllur, dhe {{ui:Hiq (R)}}. `DELOPENING` heq hapjen më të afërt me vendin ku klikoni.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` dhe `ERASE` punojnë si zakonisht. Dyert dhe dritaret shkojnë me murin e tyre, muret e bashkuara ruajnë bashkimet e tyre, dhe një {{ui:Zhbëj}} i kthen gjithçka mbrapsht.

## Në programe të tjera

Çdo mur ruhet si një bllok i zakonshëm, kështu që programet e tjera CAD e shfaqin saktë dhe mund ta zhvendosin, por nuk mund ta modifikojnë si mur. `EXPLODE` e kthen murin në vija dhe harqe të thjeshta, dhe ai nuk është më mur.
