---
title: Tegelike punktide kontroll
summary: Loe punktid, mille mõõdistusmeeskond on mõõtnud, ja võrdle neid joonise punktide ja plokkidega: tolerantsi sees või väljas, mõõtmata, lisa — märgitud joonisele ja salvestatud CSV-aruandena.
keywords: tegelik teostus, as-built, as built, asbuilt, mõõdistus, total station, paigaldamine, märkimine, punktifail, csv, txt, pnezd, penzd, xyz, tolerants, kõrvalekalle, kontroll, võrdle, exportpoints, paigutuspunktid
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) on {{cmd:EXPORTPOINTS}} teine pool: sa eksporditakse joonise punktid välitööks, meeskond seab need maastikule ja mõõdab, mis on ehitatud, ning ASBUILT võrdleb nende faili joonisega.

1. Sisesta {{cmd:ASBUILT}} ja vali samad punktid ja plokid, mille eksportisid (Enter võtab kõik POINT-id, nagu EXPORTPOINTS).
2. Seosta tegelikud punktid viisiga **Number** (meeskond säilitas sinu punktinumbrid: anna esimene number, millest eksportisid) või **Lähim** (nad nummerdasid oma mõõtmised ise: iga projekteerimispunkt võtab lähima).
3. Anna faili ühikud ja koordinaadid nii, nagu eksportisid (Joonis, Meetrid või Jalad; Maailm või UCS), ning **tolerants** joonise ühikutes.
4. Vali meeskonna CSV- või TXT-fail. CadCraft loeb seda nii, nagu CivilCraft seda loeb: komad, tabulaatorid, semikoolonid või tühikud, päisrida, mis nimetab veerud, või PNEZD veergude arvu järgi.

Käsurida ütleb, mitu punkti seostati, mitu on tolerantsi sees, väljas, mõõtmata ja lisa ning suurima kauguse. **Märgi need joonisele?** Jah paneb need kihile **AS-BUILT** ühe tagasivõtmise sammuna: punkt iga mõõtmise kohal, selle number ja kaugus kõrval, ning punane joon projekteerimispunktist igani mõõtmiseni, mis on tolerantsist väljas. CSV-aruanne laaditakse alla koos iga punktiga: projekteerimis- ja tegelikud koordinaadid, erinevused idas, põhjas ja kõrguses ning tulemus.

Vt ka [Punktid BIM-programmidele](topic:points-for-bim).
