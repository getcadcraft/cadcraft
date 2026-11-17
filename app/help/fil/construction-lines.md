---
title: Construction line at ray
summary: Gumuhit ng linyang walang katapusan (XLINE) o mula sa isang punto papunta sa isang direksyon (RAY) para maiayos ang mga bagay, at i-trim ang mga ito bilang ordinaryong linya.
keywords: xline, ray, construction line, construction lines, walang hanggang linya, gabay na linya, reference line, bisect, offset line, mga linya ng layout, xl
from: b6c398bc
---

## Ano ang matututunan mo

Paano gumuhit ng construction line para maiayos ang mga bagay habang nagdo-draft: dumadaan sa dalawang punto, pahalang o patayo, may anggulo, nasa gitna ng dalawang direksyon, o nasa tiyak na distansya mula sa isang linya. At kung paano i-trim ang mga ito bilang ordinaryong linya kapag tapos na ang trabaho nila.

## Dalawang uri

- Ang **construction line** ({{cmd:XLINE}}) ay walang katapusan sa magkabilang direksyon.
- Ang **ray** ({{cmd:RAY}}) ay nagsisimula sa isang punto at walang katapusan sa isang direksyon.

Pareho silang iginuguhit sa buong drawing area anuman ang zoom, sa split screen at sa mga viewport sa sheet. Hindi sila kasama sa {{ui:Extents}}, kaya ang zoom sa drawing ay sumasakop pa rin sa iginuhit mo.

## Gumuhit ng construction line

1. I-click ang {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}, o i-type ang `XL` at pindutin ang {{key:Enter}}.
2. Mag-click ng punto. Ang bawat click pagkatapos nito ay nagdaragdag ng construction line na dumadaan sa unang punto at sa pinindot mo.
3. Pindutin ang {{key:Enter}} para tapusin.

Sa halip na unang punto, puwede kang mag-type ng option:

| Option | Ano ang ginagawa nito |
|---|---|
| [Pahalang (H)] | Mga pahalang na linya, isa sa bawat punto na iki-click mo. |
| [Patayo (V)] | Mga patayong linya sa bawat punto. |
| [Anggulo (A)] | Mga linyang may anggulong ita-type mo (degrees, counterclockwise mula sa X axis), dumadaan sa bawat punto. Ang `R` (Reference) ay sumusukat ng anggulo mula sa linyang pipiliin mo. |
| [Hatiin (B)] | Mag-click sa sulok, tapos sa isang punto sa kasamang gilid: ang bawat punto na iki-click mo sa kabilang gilid ay nagdaragdag ng linyang nasa gitna ng dalawa. |
| [Offset (O)] | Mag-type ng distansya, pumili ng linya, tapos mag-click sa gilid: construction line na ganoon kalayo mula rito, parallel. Ang `T` (Through) ay inilalagay ito sa punto na iki-click mo sa halip. Naaalala ang distansya para sa susunod na pagkakataon. |

## Gumuhit ng ray

1. I-click ang {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}, o i-type ang `RAY` at pindutin ang {{key:Enter}}.
2. Mag-click kung saan magsisimula ang mga ray.
3. Mag-click ng punto para sa bawat ray na dadaanan. Pindutin ang {{key:Enter}} para tapusin.

## I-snap at i-trim ang mga ito

Ang construction line at ray ay nakakakuha ng Nearest, Perpendicular at Intersection snap. Wala silang dulo at gitna, kaya walang nahahanap ang Endpoint at Midpoint sa mga ito.

Napuputol at nakakaputol sila gaya ng ibang linya sa {{cmd:TRIM}} at {{cmd:BREAK}}:

- I-trim ang isang dulo ng construction line at magiging ray ito na nagsisimula sa putol.
- I-trim ang malayong bahagi ng ray at magiging ordinaryong linya ito.
- I-break ang construction line sa isang punto at magiging dalawang ray ito.

Gumagana rin dito ang {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} at {{cmd:STRETCH}}. Hindi sila napipili ng window selection dahil walang window na kayang lamanin ang buong walang hanggang linya; ang crossing window o isang click ay kumukuha sa kanila.

:::note
Pinananatili ng DWG (lahat ng bersyon) at DXF 2000 ang mga ito bilang construction line. Walang construction line ang DXF R12, kaya nagiging linyang tumatawid sa drawing ang mga ito doon, at sinasabi ito ng save. Iginuguhit lang ng plot o PDF ang mga ito sa lugar na nasa print.
:::
