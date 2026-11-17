---
title: Setha imikhawulo yomdwebo
summary: I-LIMITS isetha unxande wedrowing: igridi iwugcwalisa, i-ZOOM All iwubonisa, futhi uma imikhawulo ivuliwe, amaphoyinti angaphandle kwawo ayenqatshwa. Agcinwa kumafayela e-DWG ne-DXF.
keywords: imikhawulo, imikhawulo yomdwebo, LIMITS, LIMMIN, LIMMAX, LIMCHECK, igridi, ngaphandle kwemikhawulo, usayizi weshidi, indawo yomdwebo, zoom all, umngcele
from: 9e97b30d
---

**Imikhawulo yomdwebo** ungxande oluchaza ukuthi idrowing izokuba kanjani ngobukhulu: indawo ohlela ukudweba kuyo, njengeshidi lika-420 × 297. Idrowing entsha ayinayo, ngakho igridi nendawo yomdwebo azinamkhawulo, njengakuqala.

## Yisetha

Thayipha {{cmd:LIMITS}} bese uphendula:

- `Specify lower left corner or [ON/OFF] <0,0>`: iphoyinti, noma {{key:Enter}} ukugcina elikhona.
- `Specify upper right corner <420,297>`: iphoyinti, noma {{key:Enter}} ukugcina elikhona. Kufanele libe phezulu futhi lisesokudla kokokuqala.

Noma thayipha `ON` noma `OFF` ekubuzweni kokuqala ukuze ushintshe ukuhlolwa ngaphandle kokushintsha ungxande. Ukusetha amakhona kuyisinyathelo esisodwa sokuhlehlisa, kanjalo ne-ON ne-OFF ngayinye.

## Okwenzayo

- **Igridi igcwalisa imikhawulo** iyime emaphethelweni ayo. Iyisithombe sendawo, ngakho vula {{ui:Grid}} ukuze uyibone.
- **ZOOM All** ({{cmd:ZOOM}}, bese {{ui:All}}) ibonisa imikhawulo kanye nedrowing ndawonye; {{ui:Extents}} ibonisa idrowing kuphela.
- **Lapho imikhawulo ivuliwe (ON)**, iphoyinti oliyithayipha noma olilichofoza ngaphandle kwayo liyenqatshwa nge-`**Outside limits` futhi umyalo uhlala. Lokhu kuhlanganisa imiyalo edala izinto: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, imiyalo yezilinganiso nezinye eziningana. Imiyalo ehambisa, ekhetha noma elinganisa kuphela ayikhawulelwe, kanjalo nokunamathisela, ukudonsa i-grip, noma into eyenziwa yi-LISP routine: imikhawulo ingumhlahlandlela wokudweba, hhayi udonga. Uma imikhawulo ivaliwe (OFF) akukho okwenqatshwayo.
- Izinto ezisevele ngaphandle zihlala lapho zisekhona.

## Emafayeleni nasku-LISP

Zigcinwa ku-DWG ne-DXF njenge `$LIMMIN`, `$LIMMAX` no `$LIMCHECK`. Ifayela elivela kwenye inhlelo elinemikhawulo yayo yokuzenzakalela kuphela (0,0 kuya ku-12,9 noma 420,297, ukuhlola kuvaliwe) livulwa lingenayo, ukuze igridi yalo ingacindezelwa ibe unxande oluncane; ifayela elinemikhawulo yalo, noma ukuhlola kuvulwe, liyayigcina. Ku-LISP, `(getvar "LIMMIN")`, `LIMMAX` ne-`LIMCHECK` ziyifunda, ne-`setvar` iyabhala, njengesinyathelo esisodwa sokuhlehlisa.

Imikhawulo ingeyemodeli. Ishidi (layout) linosayizi walo wephepha.
