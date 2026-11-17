---
title: PDF-aluskihid ja PDF-i import
summary: Aseta PDF-lehekülg joonise alla, et seda üle joonistada ja trükkida, või muuda lehe jooned ja tekst joonise objektideks.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, aluskiht, üle joonistamine, impordi pdf, skaneering, korruseplaan, hääbumine, lõikamine, kihid, püüdmine, ava pdf
from: aa301d0f
---

## Kaks viisi PDF-lehe sisseviimiseks

- **Lisa** ({{cmd:PDFATTACH}}) hoiab PDF-i joonise all pildina. Sa joonistad selle üle, püüad selle joontele, hääbutad ja lõikad seda ning see trükitakse koos lehega. Joonis hoiab ainult faili nime.
- **Impordi** ({{cmd:PDFIMPORT}}) muudab lehe jooned, kõverad, täited ja tekstid tavalisteks joonise objektideks, mis asuvad kihtidel, mis on nimetatud PDF-i järgi. Need on sinu muuta ning PDF-i pole pärast vaja.

PDF-i avamine nupuga {{ui:Ava}} küsib, kumb neist kahest sa soovid.

## Lisa leht

1. Kirjuta `PDFATTACH` (või `PDFATT`) ja vali PDF. Kui sel on mitu lehte, kirjuta lehekülje number.
2. Klõpsa sisestuspunkt (lehe alumine vasak nurk).
3. Vajuta {{key:Enter}}, et saada lehe tegelik suurus, või kirjuta mõõtkava: joonise ühikuid PDF-i punkti kohta (punkt on 1/72 tolli, nii et millimeetrijoonisel on see 0,3528).
4. Vajuta {{key:Enter}}, kui pööret ei soovi, või kirjuta nurk.

Leht on objekt nagu plokiviide: teisalda, pööra, skaleeri, kopeeri, kustuta ja pane kihile. Lülita selle kiht välja ja see kaob. Suumi sisse ja leht joonistatakse uuesti teravalt.

## Joonista üle

Kui {{ui:Püüdmine}} on sisse lülitatud, püüab kursor PDF-i enda jooni: lõpp-punkte, keskpunkte ja ristumisi (ning {{ui:Lähim}}, kui see püüdmine on sisse lülitatud). Lehel tähtedena joonistatud tekst ei ole püüdmisel.

## Reguleeri

- `PDFADJUST`: **Hääbumine** (0 kuni 80 protsenti), **Kontrast** (0 kuni 100), **Monokroomne** ja **Sisse/välja**, et seda peita kustutamata.
- `PDFCLIP`: näita ainult lehe ristkülikut või hulknurka; **Kustuta** eemaldab lõike.
- `PDFLAYERS`: PDF-il võivad olla oma kihid. Käsk loetleb need; kirjuta number, et selle kihi sisse või välja lülitada just sellel aluskihil. Kihid, mis failis on väljas, algavad väljas.

## Trüki ja salvesta

{{ui:Trüki}} trükib lehe selle joonte, täidete ja tekstina (nii et see jääb terav ja otsitav). PDF-i sees olevad pildid näidatakse ekraanil, kuid neid ei trükita veel.

DWG või DXF 2000 hoiab aluskihi lingina: faili nime, lehekülje, asukoha, skaala, pöörde, lõike, hääbumise ja kontrasti. PDF ise ei ole joonises. Ava joonis uuesti, kirjuta `PDF` ja vali fail uuesti; lehed näidatakse raamidena seni, kuni seda teed, ja võtavad oma tegeliku suuruse siis. Vanem DXF (R12) aluskihte ei tea: see hoiab raami ja nime. Kuidas teised programmid salvestatud lõiget ja skaalat loevad, pole neis veel kontrollitud.

## Impordi leht

1. Kirjuta `PDFIMPORT` (või `PDFIM`) ja vali PDF ja lehekülg.
2. Klõpsa kohta, kuhu lehe alumine vasak nurk läheb.
3. Vajuta {{key:Enter}} tegeliku suuruse jaoks, kirjuta skaala või vali **Kaks punkti**: leht joonistatakse tegelikus suuruses, siis klõpsa kahele punktile teadaolevalt kaugusel ja kirjuta tegelik kaugus; kõik skaleeritakse vastavaks.

Jooned muutuvad joonteks ja murdjoonteks, ringid ja kaared tuvastatakse, täidetud kujud muutuvad tahkeks viirutuseks ning tekst muutub tekstiks kihil, mille nimi lõpeb `-TEXT`. See on üks tagasivõtmise samm. PDF-i pildid ei imporditud: lisa lehekülg hoopis. Skaneering (lehekülg, mis on ainult pilt) ei oma jooni, mida importida.

PDF-faile loetakse kui usaldamatuid faile: skripte ei käivitata ja väga suur leht lõigatakse lühemaks, ning sellest öeldakse.
