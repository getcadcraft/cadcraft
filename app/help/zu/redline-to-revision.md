---
title: Guqula umaka ube ukubuyekezwa
summary: Funda iphakheji ye-redline ebhalwe yi-MarkupCraft, yamukela noma yenqaba inguquko ngayinye, faka ifu lokubuyekezwa nelogi yokubuyekezwa kwezamukelwe, bese ulondoloza ifayela lezimpendulo eyi-MarkupCraft ezolifunda.
keywords: redline, markup, revision, cloud, revision cloud, revision log, accept, reject, markupcraft, review, redline package, answers, REDLINE, umaka, ukubuyekezwa, ifu, ilogi, vuma, yenqaba, ukubuyekeza, iphakheji, izimpendulo
from: cdb3fafe
---

Umbuyekezi ukhomba amapulani ku-MarkupCraft bese ekuthumelela **iphakheji ye-redline**, ifayela eliphela nge-`.redline.json`. Lapha uhamba kuyo ngenguquko ngayinye, bese ezamukelwe ziba ngamafu okubuyekezwa emdwebeni.

## Hamba ngezinguquko

Bhala {{cmd:REDLINE}} (`RDL`) bese ukhetha iphakheji. Khetha:

- {{ui:List}}: yonke inguquko ngenombolo yayo, isimo, ishidi, uhlobo, owacela, nalokho abhale khona.
- {{ui:Accept}}, {{ui:Reject}}, {{ui:Done}}: bhala izinombolo (`1,3-5`, noma `All`) nenothi engenayo yefayela lezimpendulo. {{ui:Reopen}} ibuyisela izinguquko ziyavulwa.
- {{ui:Frame}}: ingxenye yomdwebo ishidi elimakiwe elibonisa. Chofoza amakhona amabili; cindezela {{key:Enter}} ukuze kube umdwebo wonke. Izinguquko zibekwa ngokuthi zazikuphi ekhasini, ngakho lokhu yikho okuzilinganisa.
- {{ui:Apply}}: idweba ifu lokubuyekezwa (ungqimba `REV-CLOUD`, nohhafu wokubuyekezwa) lizungeze inguquko ngayinye evumiwe noma eqediwe, nelogi yokubuyekezwa, itafula elihlelwe ngemigqa lokuthi yini evunyiwe nezinothi zakho (ungqimba `REV-LOG`), ngakwesokunene komdwebo. Isinyathelo sokuhlehlisa esisodwa.
- {{ui:Save}}: ibhala `<project>-<revision>.redline-answers.json`. Vula kuMarkupCraft futhi okumakiwe kuyavaleka: Accepted, Rejected noma Completed, nezinothi zakho njengamazwana.

## Okufanele wazi

Okubhalwe ngumbuyekezi kuboniswa njengoba kubhalwe. I-CadCraft ayikaze ilandele imiyalo etholakala kuphakheji; iyibonisa kuphela kuwe.

Izinguquko ezinqatshiwe nezivulekile azengezi lutho emdwebeni. Iphakheji ifundwa ekhompyutheni yakho; akukho okulayishwa.

Uma umsizi wakho exhunyiwe, angafunda iphakheji, alondoloze izinqumo futhi asebenzise ngamathuluzi `redline_read`, `redline_decide`, `redline_apply` ne-`redline_answers`; umdwebo ushintsha ngesinyathelo sokuhlehlisa esisodwa, "Assistant: Redline to revision".
