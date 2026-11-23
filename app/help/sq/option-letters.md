---
title: Jep opsioneve të komandave shkronjat e tua
summary: Përgjigju opsioneve të një komande me shkronja që zgjedh, në çdo gjuhë, nga një skedar teksti që mund ta redaktosh, importosh dhe eksportosh.
keywords: shkronja të opsioneve, optionkeys, optkeys, tast opsioni, tast, ridrejto, përshtatje, personalizo, shkronja të personalizuara, polar, array, P, PO, gjuhë, përkthe opsionet, formë e shkurtër, importo, eksporto, e paqartë
from: 7c8328c6
---

## Çfarë do të mësosh

Si të ndryshosh shkronjat që shkruan për t'iu përgjigjur opsioneve të një komande. Për shembull, {{cmd:ARRAY}} pyet `[Rectangular/POlar]` dhe pranon `PO` për Polar; mund ta bësh që `P` ose çdo shkronjë tjetër të bëjë të njëjtën gjë, në gjuhën tënde nëse dëshiron.

## Si përgjigjesh opsioneve

Kur një komandë shfaq opsione në kllapa katrore, shkronjat e mëdha janë ato që shkruan: `POlar` është `PO`, `eXit` është `X`.

Mund të shkruash edhe më pak shkronja. Nëse ajo që shkruan përputhet vetëm me një nga opsionet e shfaqura, CadCraft e merr: te `[Rectangular/POlar]`, një `P` i vetëm është Polar. Nëse përputhet me dy, rreshti i komandës i emëron dhe pyet përsëri:

```
C could be COUnt, COLumns. Type more letters.
```

Numrat nuk hamendësohen kurrë, kështu që një distancë ose numërim i shkruar lexohet gjithmonë si numër.

## Shto shkronjat e tua

Çdo komandë mban shkronjat e veta të integruara. Ti i shton të tuat mbi to, kështu që lista jote përmban vetëm atë që ndryshove.

1. Hap {{ui:Cilësimet}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Shkronjat e opsioneve}} dhe kliko {{ui:Redakto…}}. Ose shkruaj {{cmd:OPTIONKEYS}} dhe shtyp {{key:Enter}}.
2. Te {{ui:Komanda}}, zgjidh komandën, për shembull `ARRAY`. Lista ka çdo komandë që pyet për opsione, dhe fillon me komandën që përdore së fundi.
3. Te {{ui:Opsioni}}, zgjidh opsionin. Çdonjëri shfaq shkronjat e veta të integruara në kllapa, për shembull `POlar (PO)`.
4. Te {{ui:Shkronjat e tua}}, shkruaj shkronjat që do, për shembull `P`, dhe kliko {{ui:Shto (A)}}.
5. Opsioni tani shfaqet te {{ui:Shkronjat e tua}} me shkronjat e integruara dhe tuat. Kliko {{ui:Ruaj}}.

Nis {{cmd:ARRAY}}, zgjidh një objekt dhe shtyp {{key:Enter}}. Kërkesa shfaq shkronjat e tua pas opsionit, `POlar (P)`, dhe `P` i përgjigjet.

Për ta hequr një, kliko x-in në fund të rreshtit të tij, dhe pastaj {{ui:Ruaj}}. Opsioni kthehet te shkronjat e veta të integruara.

## Shkronja që nuk mund të përdorësh

Redaktuesi refuzon shkronjat që do të fshihnin diçka që rreshti i komandës e lexon tashmë, dhe thotë pse:

- shkronjat e integruara të një opsioni tjetër të së njëjtës komandë (`R` për Polar te `ARRAY`, ku `R` është Rectangular);
- një fjalë kapjeje objekti me tre ose më shumë shkronja, si `END`, `MID` ose `CEN`, dhe fjalët `ALL` dhe `LAST`;
- të njëjtat shkronja për dy opsione të ndryshme të një komande.

Ndërsa diçka është e listuar me të kuqe, {{ui:Ruaj}} është i fikur: ndreq rreshtin ose hiqe, dhe ai kthehet. Shkronjat e integruara të një kërkese fitojnë gjithmonë mbi tuajat, kështu që lista jote nuk mund të ndalë një përgjigje të integruar. Shkronjat që ndodh të jenë emri i një komande, si `L` ose `C`, janë në rregull: te një kërkesë opsioni rreshti i komandës po lexon një përgjigje, jo po nis një komandë.

Opsionet e listuara për një komandë vijnë nga komandat që ndajnë kërkesat e saj, kështu që herë pas here një komandë liston një opsion që e kërkon vetëm në disa raste.

## Një zgjedhje për çdo komandë

Te {{ui:Komanda}}, zgjidh {{ui:Çdo komandë}}. Opsionet janë atëherë çdo opsion që ka çdo komandë, si eXit ose Undo. Shkronjat që shton atje përgjigjen për atë opsion kudo ku një komandë e ofron. Shkronjat e shtuara për një komandë fitojnë mbi këto.

## Shkronja në gjuhën tënde

Shkronjat mund të jenë nga çdo alfabet, kështu që mund t'i përgjigjesh opsioneve pa ndërruar tastierën: shto `З` për Close te {{ui:Çdo komandë}}, ose `П` për POlar te `ARRAY`.

CadCraft vjen vetëm me shkronjat angleze. Lista jote është mënyra si ti, zyra jote ose njerëzit që flasin gjuhën tënde e rregullojnë pjesën tjetër, dhe {{ui:Eksporto}} bën një skedar që mund ta japësh tjetrit.

## Redakto si tekst

{{ui:Redakto si tekst}} te redaktuesi shfaq të njëjtën listë si rreshta teksti, një për opsion, që është edhe ajo që ruan {{ui:Eksporto}}:

```
ARRAY.PO,  P
*.X,       Q
```

Çdo rresht është komanda, një pikë, shkronjat e integruara të opsionit, një presje dhe shkronjat e tua. Një yll në vend të komandës do të thotë çdo komandë. Një rresht që fillon me `;` është shënim.

## Çfarë mbetet e njëjtë

- Shkronjat e integruara vazhdojnë të punojnë pranë tuajave.
- Rutinat dhe butonat e veglave vazhdojnë të përdorin shkronjat e integruara, prandaj asgjë që ke ngarkuar nuk prishet. Për të shkruar vetë shkronjat e integruara aty ku shkronjat e tua do të ndërhynin, vendos një nënvizë përpara: `_PO`.
- Emri i shkurtër i një komande është diçka tjetër: shih [Redakto aliaset e komandave](topic:command-aliases).

## Rreshtat që CadCraft refuzon

Kur redakton si tekst ose importon një skedar, redaktuesi liston çdo problem me numrin e rreshtit:

- komanda nuk ekziston (një alias i komandës është në rregull: `AR.PO` lexohet si `ARRAY.PO`);
- rreshti nuk është `COMANDA.OPSIONI, SHKRONJAT`;
- shkronjat kanë një hapësirë ose një shenjë (vetëm shkronja dhe shifra, deri në 16);
- të njëjtat shkronja përgjigjen për dy opsione të ndryshme të një komande.

## Importo dhe eksporto

{{ui:Eksporto}} ruan shkronjat e tua si skedar teksti, për ta mbajtur ose për t'ia dhënë dikujt tjetër. {{ui:Importo…}} lexon një skedar të tillë. Të dyja janë në redaktues dhe te {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Shkronjat e opsioneve}}.

Te Cilësimet, {{ui:Importo…}} e zëvendëson skedarin tënd me atë që zgjedh. Një skedar me një rresht që përplaset ose nuk mund të përdoret nuk pranohet; hap redaktuesin dhe importoje atje për të parë rreshtat. Në redaktues vetëm mbush kutinë: asgjë nuk ndryshon derisa kliko {{ui:Ruaj}}.

## Rilexo ose hiq

Shkruaj {{cmd:REINIT}} dhe shtyp {{key:Enter}} për të aplikuar përsëri skedarin tënd. Për të hequr një shkronjë, fshi rreshtin e saj dhe kliko {{ui:Ruaj}}.

## Shkronjat e tua ndjekin llogarinë tënde

Kur je futur në getcadcraft.com, shkronjat e tua mbahen me llogarinë tënde. Hape CadCraft në një shfletues tjetër ose në një kompjuter tjetër me të njëjtën llogari dhe ato arrijnë vetvetiu; rreshti i komandës thotë `Option letters from your account`. Nëse i ke ndryshuar në dy vende, kopja më e re fiton dhe ajo që zëvendësoi ruhet një herë.

{{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Shkronjat e opsioneve}} thotë ku qëndrojnë. Kur je jashtë llogarisë ose jashtë linje, ato mbeten në këtë shfletues dhe shkojnë në llogarinë tënde herën tjetër që i ruan ndërsa je i futur.

Të lidhura: [Redakto aliaset e komandave](topic:command-aliases) · [Cilësimet e CadCraft](topic:settings) · [Komandat](topic:commands)
