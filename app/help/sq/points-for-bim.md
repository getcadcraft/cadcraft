---
title: Pikat për programet BIM
summary: Eksporto pikat, dhe pikat e futjes së blloqeve me një përshkrim, në një skedar CSV ose TXT që importojnë programet BIM dhe të rilevimit.
keywords: exportpoints, eksporto pikat, pika, csv, txt, pnezd, penzd, xyz, pika rilevimi, koordinata, bim, vendosje, skedar pikash, veri, lindje, lartësi
from: d80e2d53
---

## Çfarë do të bësh

Një skedar pikash: një rresht për pikë, me numrin, veriun, lindjen, lartësinë dhe përshkrimin, që programet BIM (Revit dhe Archicad, ndër të tjera) dhe softueri i rilevimit mund ta importojnë për të vendosur pika rilevimi, shënues vendi ose pajisje.

## Eksporto pikat

1. Zgjidh pikat dhe referencat e blloqeve të cilëve do t'u eksportosh pikat e futjes, ose mos zgjidh asgjë për të marrë çdo pikë.
2. Shkruaj {{cmd:EXPORTPOINTS}} (ose `EXPPTS`, ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Eksporto pikat}}) dhe shtyp {{key:Enter}}
   (shtyp {{key:Enter}} sërish te `Përzgjidh pikat dhe blloqet` kur nuk është zgjedhur asgjë).
3. Kur zgjedh blloqe me atribute, CadCraft liston etiketat e tyre: shkruaj atë etiketë vlera e së cilës është përshkrimi (për shembull `ITEM`), ose çdo gjë tjetër për të përdorur emrin e secilit bllok.
4. Zgjidh kolonat: `PNEZD` (pika, veriu, lindja, lartësia, përshkrimi: më e zakonshmja), `PENZD` (lindja para veriut) ose `XYZ` (vetëm koordinatat).
5. Zgjidh njësitë: `[Siç është vizatuar (D)]`, ose `[Metra (M)]` ose `[Këmbë (F)]` (vetëm kur njësitë e vizatimit janë vendosur: {{ui:Vetitë}} › {{ui:Njësitë}} me asgjë të zgjedhur).
6. Me një UCS të vendosur, zgjidh `[Botë (W)]` ose `U` UCS (shih [UCS dhe një pamje e rrotulluar](topic:ucs-and-turned-view)).
7. Zgjidh `[Presje (C)]` për një `.csv` të ndarë me presje, ose `T` për një `.txt` të ndarë me tab, dhe numrin e parë të pikës.

Skedari shkarkohet si `<drawing>-points.csv` (ose `.txt`), dhe historiku thotë sa pika përmban.

## Çfarë është në skedar

- Një pikë për rresht, që mbaron me një thyerje rreshti (CR LF), me tre shifra dhjetore.
- Lartësia e një pike është Z e saj (0 kur nuk ka). Pika e një blloku është pika e futjes së tij.
- Një përshkrim që përmban presje (ose tab në një TXT) ose thonjëza vendoset midis thonjëzash të dyfishta, me thonjëzat e veta të dyfishuara.
- Formati është ai që lexon dhe shkruan CivilCraft, kështu që skedari hapet edhe atje si pika.

## Gabime të zakonshme

- Për njësitë ofrohet vetëm `D`: vizatimi nuk ka njësi të vendosura. Vendosi, ose konverto në programin tjetër.
- Pikat janë larg aty ku pret në programin tjetër: eksporto koordinatat e botës (`W`), ose UCS-në që përdor pika e rilevimit të programit tjetër (`U`).
