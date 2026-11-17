---
title: Konstrukcinės linijos ir spinduliai
summary: Braižykite linijas, kurios tęsiasi be galo (XLINE) arba nuo taško viena kryptimi (RAY), kad sulygiuotumėte objektus, ir apkirpkite jas į įprastas linijas.
keywords: xline, ray, konstrukcinė linija, konstrukcinės linijos, begalinė linija, vedančioji linija, nuorodinė linija, dalijimas pusiau, poslinkio linija, maketo linijos, xl
from: b6c398bc
---

## Ko išmoksite

Kaip braižyti konstrukcines linijas, kad sulygiuotumėte objektus braižymo metu: per du taškus, horizontaliai ar vertikaliai, kampu, lygiai per vidurį tarp dviejų krypčių arba nurodytu atstumu nuo linijos. Ir kaip jas apkirpti į įprastas linijas, kai jos įvykdo savo paskirtį.

## Du tipai

- **Konstrukcinė linija** ({{cmd:XLINE}}) tęsiasi be galo abiem kryptimis.
- **Spindulys** ({{cmd:RAY}}) prasideda taške ir tęsiasi be galo viena kryptimi.

Abu braižomi per visą brėžinio sritį, nepriklausomai nuo mastelio, padalytame ekrane ir vaizdo languose lape. {{ui:Visas brėžinys}} jų neįtraukia, todėl mastelis į brėžinį vis tiek apima tai, ką nubrėžėte.

## Nubrėžkite konstrukcines linijas

1. Spustelėkite {{ui:Braižymas}} › {{ui:Daugiau}} › {{ui:Konstrukcinė linija}} arba įveskite `XL` ir paspauskite {{key:Enter}}.
2. Spustelėkite tašką. Kiekvienas paskesnis spustelėjimas prideda konstrukcinę liniją per pirmąjį tašką ir spustelėtą tašką.
3. Paspauskite {{key:Enter}}, kad baigtumėte.

Vietoj pirmojo taško galite įvesti parinktį:

| Parinktis | Ką daro |
|---|---|
| `H` (Horizontali) | Horizontalios linijos, po vieną per kiekvieną spustelėtą tašką. |
| `V` (Vertikali) | Vertikalios linijos per kiekvieną tašką. |
| `A` (Kampas (A)) | Linijos nurodytu kampu (laipsniais, prieš laikrodžio rodyklę nuo X ašies) per kiekvieną tašką. `R` (Nuoroda (R)) matuoja kampą nuo pasirinktos linijos. |
| `B` (Dalijimas (B)) | Spustelėkite kampą, tada tašką palei vieną kraštinę: kiekvienas tašku palei kitą kraštinę pridėtas linija eina per vidurį tarp dviejų krypčių. |
| `O` (Poslinkis (O)) | Įveskite atstumą, pasirinkite liniją, tada spustelėkite pusę: konstrukcinė linija tiek nutolusi nuo jos, lygiagreti. `T` (Per (T)) vietoj to išveda ją per spustelėtą tašką. Atstumas prisimenamas kitam kartui. |

## Nubrėžkite spindulius

1. Spustelėkite {{ui:Braižymas}} › {{ui:Daugiau}} › {{ui:Spindulys}} arba įveskite `RAY` ir paspauskite {{key:Enter}}.
2. Spustelėkite, kur spinduliai prasideda.
3. Spustelėkite tašką, per kurį kiekvienas spindulys turi praeiti. Paspauskite {{key:Enter}}, kad baigtumėte.

## Prisitraukite prie jų ir apkirpkite

Konstrukcinės linijos ir spinduliai prisitraukia prie artimiausio, statmens ir susikirtimo taškų. Jie neturi galų ir vidurio, todėl galinio taško ir vidurio taško prisitraukimai jų neranda.

Jie pjaunami ir pjauna kaip kitos linijos komandose {{cmd:TRIM}} ir {{cmd:BREAK}}:

- Nukirtus vieną konstrukcinės linijos galą, ji tampa spinduliu, prasidedančiu pjūvio vietoje.
- Nukirtus tolimąją spindulio dalį, jis tampa įprasta linija.
- Nutraukus konstrukcinę liniją viename taške, gausite du spindulius.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} ir {{cmd:STRETCH}} veikia ir su jais. Langu pasirinkimas jų niekada nepagauna, nes joks langas negali apimti visos begalinės linijos; kertantis langas arba spustelėjimas – taip.

:::note
DWG (visų versijų) ir DXF 2000 jas išsaugo kaip konstrukcines linijas. DXF R12 jų neturi, todėl ten jos tampa linijomis per visą brėžinį, o išsaugojimas apie tai praneša. Spausdinimas arba PDF jas nubraižo tik per tai, kas spausdinama.
:::
