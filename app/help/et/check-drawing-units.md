---
title: Kontrolli, mis ühikutes joonis on
summary: Vaata, kas avatud joonis on millimeetrites, tollides või millegi muu ühikuga, kontrolli seda mõõtmisega ja tea, miks teine programm võib sama DXF-i kohta nimetada teisi ühikuid.
keywords: ühikud, mis ühikud, millised ühikud, ühikute kontroll, millimeetrid, mm, tollid, meetermõõdustik, tolli-mõõdustik, DXF-i ühikud, STEP DXF-iks, valed ühikud, tollid või mm, INSUNITS, MEASUREMENT, joonise ühikud, PartCraft DXF
from: c0ee75bb
---

## Mida sa teed

Leia, mida üks ühik avatud joonisel tähendab, ja veendu, et loetavad arvud on sinu oodatud suurusega.

## Sammud

1. Ava joonis, seejärel vajuta {{key:Esc}}, et midagi ei oleks valitud, vahekaardil {{ui:Mudel}}.
2. Paremas paneelis jaotises {{ui:Praegused sätted}} loe {{ui:Ühikud}}. See ütleb, mida üks joonise ühik tähendab: {{ui:Millimeetrid}}, {{ui:Tollid}}, {{ui:Jalad}} jne. PartCraftist salvestatud DXF ütleb {{ui:Millimeetrid}}.
3. Kontrolli mõõtmisega midagi, mille suurust tead. Trüki {{cmd:DIST}} ja vali servast või august kaks otsa. Kui tuntud 25 mm detail loeb `25`, on joonis millimeetrites; kui see loeb umbes `0.98`, on joonis tollides.

{{ui:Ühikuta}} tähendab, et fail seda ei ütle. CadCraft käsitleb siis paberi ühikuna (ISO-paberil millimeetrid, USA paberil tollid) ja arvud on täpsed ainult sama palju, kui täpne on programm, mis need kirjutas.

## Kui ühikud on valed

{{ui:Ühikute}} muutmine **ei muuda suurust**: arvud jäävad samaks ja muutub ainult see, mida need tähendavad. Seega määra see ainult selleks, et öelda, mis joonis tegelikult on. Kui arvud on millimeetrites ja {{ui:Ühikud}} ütleb {{ui:Tollid}}, vali {{ui:Millimeetrid}}. Kui vajad geomeetriat ise teistes ühikutes, mõõtkavasta see käsuga {{cmd:SCALE}} (25,4 tollidest millimeetriteks, 1/25,4 vastupidi) ja seejärel määra {{ui:Ühikud}}.

Kuidas pikkusi kirjutatakse (kümnendarv, jalad ja tollid, murdarvud) on eraldi säte, {{ui:Pikkuse vorming}}: vaata [Ühikud, paberiformaadid ja mõõtkavad](topic:units-papers-scales).

## Miks teine programm võib öelda tollid

DXF kirjeldab oma ühikuid päises. Kõige vanem DXF-tüüp, R12, ei sisaldanud ühikumuutujat üldse, seega programm, mis loeb R12 rangelt, ignoreerib seal kirjutatut ja kasutab oma vaikeväärtust, mis on sageli tollid. Failis olev geomeetria on mõlemal juhul sama: erineb ainult silt. PartCraft kirjutab oma DXF-failid R12 vormingus ja märgib millimeetrid kahel viisil (`$INSUNITS` 4 ja `$MEASUREMENT` 1), et rohkem programme neid õigesti loeks. Kui programm ikka ütleb tollid, määra faili avamisel selle ühikud millimeetriteks.

Faili joonisesse toomine (mitte avamine) teisendab selle ühikud: vaata [Ühikud importimisel](topic:units-on-import).
