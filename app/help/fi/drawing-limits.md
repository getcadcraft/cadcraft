---
title: Aseta piirustuksen rajat
summary: LIMITS asettaa piirustukselle suorakulmion: ruudukko täyttää sen, ZOOM All näyttää sen, ja rajojen ollessa päällä pisteet sen ulkopuolella hylätään. Ne tallennetaan DWG- ja DXF-tiedostoihin.
keywords: rajat, piirustuksen rajat, LIMITS, LIMMIN, LIMMAX, LIMCHECK, ruudukko, rajojen ulkopuolella, arkin koko, piirustusalue, zoomaa kaikki, raja
from: 9e97b30d
---

**Piirustuksen rajat** ovat suorakulmio, joka kertoo, kuinka suuren piirustuksen on tarkoitus olla: alue, jolla aiot piirtää, kuten arkki 420 × 297. Uudessa piirustuksessa niitä ei ole, joten ruudukko ja piirustusalue ovat rajattomia kuten ennen.

## Aseta ne

Kirjoita {{cmd:LIMITS}} ja vastaa:

- `Määritä vasen alanurkka tai [ON/OFF] <0,0>`: piste, tai {{key:Enter}} säilyttääksesi nykyisen.
- `Määritä oikea yläkulma <420,297>`: piste, tai {{key:Enter}} säilyttääksesi nykyisen. Sen on oltava ensimmäisen yläpuolella ja oikealla puolella.

Tai kirjoita `ON` tai `OFF` ensimmäiseen kysymykseen kytkeäksesi tarkistuksen päälle tai pois muuttamatta suorakulmiota. Kulmien asettaminen on yksi kumoamisvaihe, ja samoin jokainen ON ja OFF.

## Mitä ne tekevät

- **Ruudukko täyttää rajat** ja pysähtyy niiden reunaan. Se on kuva alueesta, joten kytke {{ui:Grid}} päälle nähdäksesi sen.
- **ZOOM All** ({{cmd:ZOOM}}, sitten {{ui:All}}) näyttää rajat ja piirustuksen yhdessä; {{ui:Extents}} näyttää edelleen vain piirustuksen.
- **Rajojen ollessa ON**, kirjoittamasi tai napsauttamasi piste niiden ulkopuolella hylätään tekstillä `**Rajojen ulkopuolella`, ja kehote pysyy. Tämä koskee komentoja, jotka luovat kohteita: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, mitoituskomennot ja muutama muu. Komennot, jotka vain siirtävät, valitsevat tai mittaavat, eivät ole rajoitettuja, eikä liittäminen, otteen vetäminen tai LISP-rutiinin luoma kohde ole. Rajat ovat piirtämisen ohje, eivät seinä. Kun rajat ovat OFF, mitään ei hylätä.
- Kohteet, jotka ovat jo ulkopuolella, pysyvät paikoillaan.

## Tiedostoissa ja LISPissä

Ne tallennetaan DWG- ja DXF-tiedostoihin muodossa `$LIMMIN`, `$LIMMAX` ja `$LIMCHECK`. Toisesta ohjelmasta tuleva tiedosto, jossa on vain sen ohjelman oletusrajat (0,0 – 12,9 tai 420,297, tarkistus pois), avautuu ilman rajoja, joten sen ruudukko ei puristu pieneen suorakulmioon. Tiedosto, jossa on omat rajansa tai tarkistus päällä, säilyttää ne. LISPissä `(getvar "LIMMIN")`, `LIMMAX` ja `LIMCHECK` lukevat ne ja `setvar` kirjoittaa ne yhtenä kumoamisvaiheena.

Rajat kuuluvat malliin. Arkilla (asettelulla) on oma paperikokonsa.
