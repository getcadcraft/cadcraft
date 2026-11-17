---
title: Konstruktsioonijooned ja kiired
summary: Joonista lõpmatult jätkuvad jooned (XLINE) või punktist ühes suunas jätkuvad kiired (RAY), et asju joondada, ja kärbi need tavalisteks joonteks.
keywords: xline, ray, konstruktsioonijoon, konstruktsioonijooned, lõpmatu joon, juhtjoon, viitejoon, poolitamine, nihkejoon, paigutusjooned, xl
from: b6c398bc
---

## Mida sa õpid

Kuidas joonistada konstruktsioonijooni, et joondada asju joonistamise ajal: läbi kahe punkti, horisontaalselt või vertikaalselt, nurga all, kahe suuna vahel poolitades või kindla kauguse kaugusel joonest. Ja kuidas neid kärpida tavalisteks joonteks, kui nad on oma töö teinud.

## Kaks liiki

- **Konstruktsioonijoon** ({{cmd:XLINE}}) jätkub lõpmatult mõlemas suunas.
- **Kiir** ({{cmd:RAY}}) algab punktist ja jätkub lõpmatult ühes suunas.

Mõlemad joonistuvad üle kogu joonistusala suumist sõltumata, jagatud ekraanil ja lehel olevatel vaateakendel. {{ui:Ulatus}} jätab need välja, seega joonisele suumimine mahutab ikka selle, mida joonistasid.

## Konstruktsioonijoonte joonistamine

1. Klõpsa {{ui:Joonista}} › {{ui:Veel}} › {{ui:Konstruktsioonijoon}} või tipi `XL` ja vajuta {{key:Enter}}.
2. Klõpsa punkt. Iga järgmine klõps lisab konstruktsioonijoone läbi esimese punkti ja selle, mille klõpsad.
3. Lõpetamiseks vajuta {{key:Enter}}.

Esimese punkti asemel saad tipida valiku:

| Valik | Mida see teeb |
|---|---|
| `H` (Horisontaalne) | Horisontaalsed jooned, üks läbi iga klõpsatud punkti. |
| `V` (Vertikaalne) | Vertikaalsed jooned läbi iga punkti. |
| `A` (Nurk) | Jooned nurga all, mille tipid (kraadides, vastupäeva X-teljest), läbi iga punkti. `R` (Viide) mõõdab nurka valitud joonest. |
| `B` (Poolita) | Klõpsa nurk, seejärel punkt mööda ühte külge: iga punkt, mille klõpsad mööda teist külge, lisab joone kahe suuna vahele poolitajana. |
| `O` (Nihe) | Tipi kaugus, vali joon, seejärel klõpsa külg: paralleelne konstruktsioonijoon nii kaugel sellest. `T` (Läbi) paneb selle hoopis läbi punkti, mille klõpsad. Kaugus jääb meelde järgmiseks korraks. |

## Kiirte joonistamine

1. Klõpsa {{ui:Joonista}} › {{ui:Veel}} › {{ui:Kiir}} või tipi `RAY` ja vajuta {{key:Enter}}.
2. Klõpsa koht, kust kiired algavad.
3. Klõpsa iga kiire jaoks punkt, millest see peab läbi minema. Lõpetamiseks vajuta {{key:Enter}}.

## Haakumine ja kärpimine

Konstruktsioonijooned ja kiired haakuvad režiimidele Lähim, Risti ja Lõikepunkt. Neil pole otsi ega keskpunkti, seega Lõpp-punkt ja Keskpunkt neid ei leia.

Nad lõikavad ja neid lõigatakse nagu teisi jooni käskudes {{cmd:TRIM}} ja {{cmd:BREAK}}:

- Kärbi konstruktsioonijoonelt üks ots ära ja sellest saab kiir, mis algab lõikepunktist.
- Kärbi kiirelt kaugem osa ära ja sellest saab tavaline joon.
- Murra konstruktsioonijoon ühes punktis ja saad kaks kiirt.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} ja {{cmd:STRETCH}} töötavad neil samuti. Akna valik neid kunagi ei vali, sest ükski aken ei mahuta lõpmatut joont tervikuna; ristuv aken või klõps seda teeb.

:::note
DWG (kõik versioonid) ja DXF 2000 hoiavad need konstruktsioonijoontena. DXF R12-l neid pole, seega muutuvad nad seal joonistuse üle ulatuvateks joonteks ja salvestus ütleb seda. Väljastus või PDF joonistab need ainult selle üle, mis trükitakse.
:::
