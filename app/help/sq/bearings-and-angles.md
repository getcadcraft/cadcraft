---
title: Shkruaj dhe shfaq azimutet dhe këndet në gradë, minuta, sekonda
summary: Shkruaj një drejtim si azimut topografik si N45°23'30"E ose si gradë-minuta-sekonda kudo ku kërkohet një kënd, dhe zgjidh si e shfaq vizatimi këndet me AUNITS.
keywords: azimut, azimute, topografi, azimut kuadranti, N45E, gradë minuta sekonda, DMS, kënd, drejtim, parcelë, vendos, poligon, AUNITS, ANGUNITS, format i këndit, polar, distancë direkte, DIST
from: af805567
---

Kudo ku CadCraft kërkon një **kënd ose drejtim**, mund të shkruash një **azimut kuadranti** ose një kënd në **gradë, minuta dhe sekonda**, si edhe një numër të thjeshtë gradësh.

## Azimutet

Një azimut emëron veriun ose jugun, një kënd deri në 90°, pastaj lindjen ose perëndimin:

| Shkruan | Drejtimi |
|---|---|
| `N45°23'30"E` ose `N45d23'30"E` | 45°23'30" nga veriu drejt lindjes |
| `S10-30-00W` ose `S 10 30 W` | 10°30' nga jugu drejt perëndimit (vija ose hapësira midis pjesëve) |
| `N45.5E` | 45.5° nga veriu drejt lindjes |
| `N`, `E`, `S`, `W` | drejt veriut, lindjes, jugut, perëndimit |

Shkronjat mund të jenë me shkronja të mëdha ose të vogla. `d` dhe `°` kanë të njëjtin kuptim; `'` është minuta dhe `"` është sekonda.

Për të vendosur një vijë parcele 20 m të gjatë në N45°23'E, nis {{cmd:LINE}} dhe shkruaj pikën e parë, pastaj `@20<N45d23'E`. E njëjta gjë funksionon te kërkesa e kënd të {{cmd:ROTATE}} dhe çdo kërkesë tjetër që pyet për një kënd, dhe te kutia e këndit të {{ui:Hyrje dinamike}}.

## Gradë, minuta, sekonda

`45°23'30"`, `45d23'30"`, `45d30'` ose `45d` është një kënd nga boshti X, në drejtim të kundërt të akrepave të orës. Shenja `°` ose `d` është e nevojshme: `45-23-30` lexohet si aritmetikë (45 − 23 − 30). Minutat dhe sekondat duhet të jenë nën 60. Një numër i thjeshtë, me aritmetikë (`360/7`), funksionon ende.

## Si shfaqen këndet

Shkruaj {{cmd:AUNITS}} (ose zgjidh {{ui:Formati i këndit}} te {{ui:Vetitë}} › {{ui:Cilësimet aktuale}}) dhe zgjidh:

- **Gradë dhjetore** (parazgjedhja): `44.6083°`.
- **Gradë-minuta-sekonda**: `44°36'30"`.
- **Azimute topografike**: `N45°23'30"E`.

Saktësia ndjek atë që shkruan për {{cmd:AUNITS}}: 0 shfaq gradë, 2 minuta, 4 sekonda, dhe 5 deri në 8 shtojnë dhjetore të sekondës. Formati shfaqet te {{cmd:DIST}}, në shiritin e statusit, në hyrjen dinamike dhe në këshillat e gjurmimit, dhe në kutitë e këndit të {{ui:Vetitë}} (një kuti që redakton pranon çdo formë të lartpërmendur). Është një hap zhbërjeje dhe ruhet në skedarët DWG dhe DXF (`$AUNITS`, `$AUPREC`); LISP e lexon dhe e shkruan si `AUNITS` dhe `AUPREC`.
