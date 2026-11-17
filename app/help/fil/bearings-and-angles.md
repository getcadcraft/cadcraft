---
title: I-type at ipakita ang mga bearing at anggulo sa degrees, minutes, seconds
summary: I-type ang direksyon bilang bearing ng surveyor gaya ng N45°23'30"E, o bilang degrees-minutes-seconds saanman hinihingi ang anggulo, at piliin kung paano ipinapakita ng drawing ang mga anggulo gamit ang AUNITS.
keywords: bearing, bearings, surveyor, quadrant bearing, N45E, degrees minutes seconds, DMS, anggulo, direksyon, lot, lots, lay out, traverse, AUNITS, ANGUNITS, format ng anggulo, polar, direct distance, DIST
from: af805567
---

Saanman humihingi ang CadCraft ng **anggulo o direksyon**, maaari kang mag-type ng **quadrant bearing** o anggulo sa **degrees, minutes at seconds**, pati na ng simpleng bilang ng degrees.

## Bearings

Ang bearing ay nagpapangalan ng north o south, isang anggulo hanggang 90°, saka east o west:

| Ang itinype mo | Direksyon |
|---|---|
| `N45°23'30"E` o `N45d23'30"E` | 45°23'30" mula north papuntang east |
| `S10-30-00W` o `S 10 30 W` | 10°30' mula south papuntang west (dash o espasyo sa pagitan ng mga bahagi) |
| `N45.5E` | 45.5° mula north papuntang east |
| `N`, `E`, `S`, `W` | diretsong north, east, south, west |

Maaaring malaki o maliit ang mga letra. Sa Spanish, ang `O` ay nangangahulugan ding west (oeste). Pareho ang ibig sabihin ng `d` at `°`; ang `'` ay minutes at ang `"` ay seconds.

Para i-layout ang isang lot line na 20 m ang haba sa N45°23'E, simulan ang {{cmd:LINE}} at i-type ang unang punto, saka `@20<N45d23'E`. Gumagana rin ito sa angle prompt ng {{cmd:ROTATE}}, sa bawat ibang prompt na humihingi ng anggulo, at sa angle box ng {{ui:Dynamic input}}.

## Degrees, minutes, seconds

`45°23'30"`, `45d23'30"`, `45d30'` o `45d` ay anggulo mula sa X axis, counter-clockwise. Kailangan ang `°` o `d`: ang `45-23-30` ay binabasa bilang aritmetika (45 − 23 − 30). Dapat mas mababa sa 60 ang minutes at seconds. Gumagana pa rin ang simpleng numero, kasama ang aritmetika (`360/7`).

## Paano ipinapakita ang mga anggulo

I-type ang {{cmd:AUNITS}} (o piliin ang {{ui:Format ng anggulo}} sa {{ui:Properties}} › {{ui:Kasalukuyang setting}}) at pumili ng:

- **Decimal degrees** (ang default): `44.6083°`.
- **Degrees-minutes-seconds**: `44°36'30"`.
- **Surveyor's bearings**: `N45°23'30"E`.

Sumusunod ang precision sa itinype mo para sa {{cmd:AUNITS}}: ang 0 ay nagpapakita ng degrees, 2 ng minutes, 4 ng seconds, at ang 5 hanggang 8 ay nagdaragdag ng decimal ng segundo. Lumalabas ang format sa {{cmd:DIST}}, sa status bar, sa dynamic input at sa tracking tips, at sa angle box ng {{ui:Properties}} (ang box na ine-edit mo ay tumatanggap ng alinman sa mga form sa itaas). Isang undo step ito, at naka-save ito sa mga DWG at DXF file (`$AUNITS`, `$AUPREC`); binabasa at isinusulat ito ng LISP bilang `AUNITS` at `AUPREC`.
