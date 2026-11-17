---
title: Rasējuma robežu iestatīšana
summary: LIMITS nosaka taisnstūri rasējumam: režģis to aizpilda, ZOOM All to parāda, un, ieslēgtām robežām, punkti ārpus tām tiek noraidīti. Tās tiek saglabātas DWG un DXF failos.
keywords: robežas, rasējuma robežas, LIMITS, LIMMIN, LIMMAX, LIMCHECK, režģis, ārpus robežām, lapas izmērs, zīmēšanas apgabals, tālummaiņa visam, apvalks
from: 9e97b30d
---

**Rasējuma robežas** ir taisnstūris, kas parāda, cik liels rasējums paredzēts: apgabals, kurā plānojat zīmēt, piemēram, lapa 420 × 297. Jaunam rasējumam tādu nav, tāpēc režģis un zīmēšanas apgabals ir neierobežoti, kā līdz šim.

## Iestatīt tās

Ierakstiet {{cmd:LIMITS}} un atbildiet:

- `Norādiet apakšējā kreisā stūra punktu vai [ON/OFF] <0,0>`: punkts vai {{key:Enter}}, lai paturētu esošo.
- `Norādiet augšējā labā stūra punktu <420,297>`: punkts vai {{key:Enter}}, lai paturētu esošo. Tam jābūt augstāk un pa labi no pirmā.

Vai pirmajā jautājumā ierakstiet `ON` vai `OFF`, lai pārslēgtu pārbaudi, nemainot taisnstūri. Stūru iestatīšana ir viens atsaukšanas solis, tāpat katrs ON un OFF.

## Ko tās dara

- **Režģis aizpilda robežas** un apstājas to malā. Tā ir apgabala attēls, tāpēc ieslēdziet {{ui:Grid}}, lai to redzētu.
- **ZOOM All** ({{cmd:ZOOM}}, tad {{ui:All}}) parāda robežas un rasējumu kopā; {{ui:Extents}} joprojām parāda tikai rasējumu.
- **Ar ieslēgtām robežām** punkts, ko ierakstāt vai noklikšķināt ārpus tām, tiek noraidīts ar `**Ārpus robežām`, un uzvedne paliek. Tas attiecas uz komandām, kas veido objektus: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, izmēru komandām un dažām citām. Komandas, kas tikai pārvieto, izvēlas vai mēra, nav ierobežotas, tāpat kā ielīmēšana, satvērēja vilkšana vai objekts, ko izveido LISP rutīna: robežas ir zīmēšanas vadlīnija, nevis siena. Ar izslēgtām robežām nekas netiek noraidīts.
- Objekti, kas jau atrodas ārpus, paliek tur, kur ir.

## Failos un LISP

Tās tiek saglabātas DWG un DXF kā `$LIMMIN`, `$LIMMAX` un `$LIMCHECK`. Fails no citas programmas, kam ir tikai tās programmas noklusējuma robežas (0,0 līdz 12,9 vai 420,297, pārbaude izslēgta), tiek atvērts bez robežām, lai tā režģis netiktu saspiests mazā taisnstūrī; fails ar savām robežām vai ieslēgtu pārbaudi tās saglabā. LISP `(getvar "LIMMIN")`, `LIMMAX` un `LIMCHECK` tās nolasa, un `setvar` raksta, kā vienu atsaukšanas soli.

Robežas pieder modelim. Lapai (izkārtojumam) ir savs papīra izmērs.
