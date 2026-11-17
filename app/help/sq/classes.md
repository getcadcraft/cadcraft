---
title: Organizo një vizatim me klasa
summary: Klasat i rendisin objektet në një mënyrë të dytë, përtej shtresave (Lighting-Fixtures-Spot): shfaqi dhe fshihi, jepu një ngjyrë, lloj vije, trashësi, mbushje dhe stil teksti që objektet mund t'i marrin "sipas klasës", dhe cakto klasën ku hyjnë objektet e reja.
keywords: klasë, klasa, CLASSES, CLS, CLASS, sipas klasës, ByClass, klasa aktive, përdorim në krijim, None, shtresë projektimi, shkalla e shtresës, kota, Vectorworks
from: 672de9cb
---

Shtresat tregojnë *ku* i përket një objekti në vizatim; klasat tregojnë *çfarë* është. Një mur në shtresën `Level 1` mund të jetë në klasën `Walls-Exterior`, një dritë spot në shtresën `Ceiling` mund të jetë në klasën `Lighting-Fixtures-Spot`. Mund t'i fshehësh të gjitha dritat në të gjitha shtresat njëherësh, ose ta vizatosh çdo mur të jashtëm më të trashë, pa zhvendosur asgjë midis shtresave.

Çdo objekt fillon në klasën **Asnjë**. Një vizatim pa klasa të veta funksionon saktësisht si më parë.

## Hap panelin e Klasave

Shkruaj `CLASSES` (ose `CLS`) dhe shtyp {{key:Enter}}, ose zgjidh {{ui:Klasat…}} në menynë {{ui:Më shumë}} të grupit {{ui:Pamja}}. Paneli hapet mbi vizatim dhe mbetet i hapur ndërsa vizaton.

- **Shto një klasë:** shkruaj emrin e saj në kutinë në krye dhe shtyp {{key:Enter}}. Një `-` krijon nivel: `Lighting-Fixtures-Spot` vendoset nën `Lighting-Fixtures`, që është nën `Lighting`; nivelet që mungojnë shtohen vetë.
- **Shfaq ose fshih:** syri pranë një klase. Fshehja e një klase fsheh çdo klasë nën të, në ekran dhe në letër.
- **Klasa aktive:** butoni i rrumbullakët. Objektet e reja që vizaton hyjnë në klasën aktive.
- **Zgjidh një klasë:** kliko emrin e saj. Butonat dhe cilësimet nën listë punojnë atëherë mbi të.

Numri në fund të çdo rreshti është sa objekte ka në atë klasë (në model, në fletët dhe brenda përkufizimeve të blloqeve).

## Vendos objekte në një klasë

Zgjidh objektet, zgjidh një klasë në panel dhe kliko {{ui:Cakto klasën}}. Shëno {{ui:Sipas klasës}} më parë, që ata të marrin ngjyrën, llojin e vijës, trashësinë, mbushjen dhe stilin e tekstit nga klasa. Mund edhe:

- shkruaj `CLASS` me objekte të zgjedhura dhe fut një emër klase (një emër i ri krijon klasën);
- shkruaj `CLASS` pa asgjë të zgjedhur për të caktuar klasën aktive; `?` liston klasat me numrat e tyre;
- përdor seksionin {{ui:Klasa}} të panelit të Vetive: klasën, dhe një çelës {{ui:… sipas klasës}} për ngjyrën, llojin e vijës dhe trashësinë (mbushjen për vijëzimet, stilin e tekstit për tekstin);
- zgjidh sipas klasës me `QSELECT`: zgjidh vetinë {{ui:Klasa}}.

{{ui:Përzgjidh objektet e saj}} zgjedh çdo objekt të klasës së zgjedhur në fletën e hapur (ose në model).

## Si vizatohet një objekt: objekti, klasa, shtresa

Ngjyra, lloji i vijës, trashësia, mbushja dhe stili i tekstit të një objekti mund të jenë **sipas klasës**, ashtu si mund të jenë sipas shtresës. CadCraft kërkon në këtë rend:

1. Vlera e vetë objektit, përveç kur ajo vlerë është sipas klasës.
2. Vlera e klasës, kur objekti e merr sipas klasës dhe klasa e ka.
3. Vlera e shtresës.

Një klasë, ngjyra (ose lloji i vijës …) e së cilës është {{ui:Nuk është caktuar}}, ia kalon objektin shtresës së tij. Zgjidh një klasë dhe cakto {{ui:Ngjyra}}, {{ui:Lloji i vijës}}, {{ui:Trashësia e vijës}}, {{ui:Mbushja (vijëzimet)}} dhe {{ui:Stili i tekstit}} nën butona. Shëno {{ui:Përdor gjatë krijimit}} që objektet e reja të vizatuara në atë klasë t'i marrin të gjitha sipas klasës.

Çdo ndryshim në panel është një hap i vetëm i {{ui:Zhbëj}}.

## Riemëro dhe fshi

{{ui:Riemëro}} e redakton emrin në vend: shtyp {{key:Enter}} për ta mbajtur, {{key:Esc}} për ta lënë. Klasat nën të ndjekin (`Lighting-Spot` bëhet `Light-Spot` kur `Lighting` bëhet `Light`), dhe ndjekin edhe objektet e tyre dhe mbivendosjet e tyre për dritaret e pamjes.

{{ui:Fshi}} heq klasën dhe çdo klasë nën të. Objektet e tyre kalojnë te **Asnjë**. Një {{ui:Zhbëj}} i kthen të gjitha. **Asnjë** nuk mund të riemërohet ose fshihet.

## Shtresat e projektimit

Nën {{ui:Shtresat e projektimit}} çdo shtresë mund të mbajë një shkallë (`1:50`) dhe një kotë. Një shtresë projektimi është një shtresë e zakonshme: modeli dhe fletët funksionojnë si më parë, dhe shkalla dhe kota mbahen me vizatimin për veglat që do t'i përdorin.

## Në skedarët DWG dhe DXF

Klasat mbahen në çdo version DWG që CadCraft ruan dhe në DXF (R12 dhe 2000). Klasa e çdo objekti është të dhënat e veta të zgjeruara (aplikacioni `CADCRAFT_CLASS`), kështu që AutoCAD dhe programe të tjera e mbajnë me objektin. Lista e klasave, ngjyrat dhe dukshmëria mbahen në një bllok të vetëm të papërdorur të quajtur `CADCRAFT_CLASSES`; nëse një program tjetër e pastron atë bllok, CadCraft gjen akoma klasën e çdo objekti dhe klasat rikthehen me cilësimet e paracaktuara.

Programet e tjera nuk i njohin klasat: vizatojnë çdo objekt me vlerat e vet ose të shtresës së tij.

Shih edhe [Mbivendosjet e klasave për dritaret e pamjes](topic:viewport-overrides) dhe [Organizo një vizatim me shtresa](topic:layers).
