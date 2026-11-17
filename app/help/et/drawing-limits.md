---
title: Joonise piiride seadmine
summary: LIMITS seab joonisele ristküliku. Ruudustik täidab selle, ZOOM Kõik näitab seda ja piirangute sisselülitamisel lükatakse piirist väljapoole jäävad punktid tagasi. Need salvestatakse DWG- ja DXF-failidesse.
keywords: piirid, joonise piirid, LIMITS, LIMMIN, LIMMAX, LIMCHECK, ruudustik, väljaspool piire, lehe suurus, joonisala, zoom kõik, piir
from: 9e97b30d
---

**Joonise piirid** on ristkülik, mis ütleb, kui suur joonis peaks olema: ala, kuhu kavatsed joonistada, näiteks leht 420 × 297. Uuel joonisel neid pole, nii et ruudustik ja joonisala on piiramatud, nagu varem.

## Seadmine

Sisesta {{cmd:LIMITS}} ja vasta:

- `Specify lower left corner or [ON/OFF] <0,0>`: punkt või {{key:Enter}}, et jätta praegune.
- `Specify upper right corner <420,297>`: punkt või {{key:Enter}}, et jätta praegune. See peab olema esimesest punktist kõrgemal ja paremal.

Või sisesta esimesele küsimusele `ON` või `OFF`, et lülitada kontroll sisse või välja ilma ristkülikut muutmata. Nurkade seadmine on üks tagasivõtmise samm, samuti iga ON ja OFF.

## Mida need teevad

- **Ruudustik täidab piirid** ja peatub nende servas. See on pilt alast, nii et lülita {{ui:Grid}} sisse, et seda näha.
- **ZOOM Kõik** ({{cmd:ZOOM}}, siis {{ui:All}}) näitab piire ja joonist koos; {{ui:Extents}} näitab endiselt ainult joonist.
- **Piiridega ON** lükatakse tagasi punkt, mille sisestad või klõpsad väljaspool neid, koos teatega `**Outside limits` ja küsimus jääb alles. See kehtib käskudele, mis loovad objekte: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, mõõtmekäsud ja mõned veel. Käsud, mis ainult liigutavad, valivad või mõõdavad, ei ole piiratud, samuti ei ole kleepimine, haardepunkti lohistamine ega LISP-rutiini loodud objekt: piirid on joonistamise juhend, mitte sein. Piiridega OFF ei lükata midagi tagasi.
- Juba väljaspool olevad objektid jäävad sinna, kus on.

## Failides ja LISP-is

Need salvestatakse DWG- ja DXF-failidesse kui `$LIMMIN`, `$LIMMAX` ja `$LIMCHECK`. Teisest programmist pärit fail, millel on ainult selle programmi vaikepiirid (0,0 kuni 12,9 või 420,297, kontroll väljas), avatakse ilma piiranguteta, nii et selle ruudustik ei surutaks väikesesse ristkülikusse; fail, millel on oma piirid või kontroll sisse lülitatud, säilitab need. LISPis loevad `(getvar "LIMMIN")`, `LIMMAX` ja `LIMCHECK` neid ning `setvar` kirjutab, ühe tagasivõtmise sammuna.

Piirid kuuluvad mudelile. Leht (paigutus) on oma paberi suurusega.
