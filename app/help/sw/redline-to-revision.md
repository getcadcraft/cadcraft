---
title: Geuza alama kuwa marekebisho
summary: Soma kifurushi cha redline ambacho MarkupCraft huandika, kubali au kukataa kila mabadiliko, weka wingu la marekebisho na kumbukumbu ya marekebisho kwenye yaliyokubaliwa, kisha uhifadhi faili ya majibu ambayo MarkupCraft husoma tena.
keywords: redline, alama, marekebisho, wingu, wingu la marekebisho, kumbukumbu ya marekebisho, kubali, kataa, markupcraft, mapitio, kifurushi cha redline, majibu, REDLINE
from: cdb3fafe
---

Mkaguzi anaweka alama kwenye seti ya mpango kwenye MarkupCraft na kukutumia **kifurushi cha redline**, faili inayoishia kwa `.redline.json`. Hapa unapitia kila mabadiliko moja baada ya jingine, na yaliyokubaliwa yanakuwa mawingu ya marekebisho kwenye mchoro.

## Pitia mabadiliko

Chapa {{cmd:REDLINE}} (`RDL`) kisha uchague kifurushi. Chagua:

- {{ui:Orodha (L)}}: kila mabadiliko yenye nambari yake, hali, karatasi, aina, aliyeomba na aliyoandika.
- {{ui:Kubali}}, {{ui:Kataa}}, {{ui:Imekamilika}}: chapa nambari (`1,3-5`, au `All`) na noti ya hiari kwa faili ya majibu. {{ui:Fungua tena}} inarudisha mabadiliko kuwa wazi.
- {{ui:Fremu}}: sehemu ya mchoro ambayo karatasi yenye alama inaonyesha. Bofya kona mbili; bonyeza {{key:Enter}} kwa mchoro mzima. Mabadiliko yanawekwa kulingana na mahali yalipokuwa kwenye karatasi, kwa hiyo hii ndiyo inayoyapanga.
- {{ui:Tumia}}: inachora wingu la marekebisho (tabaka `REV-CLOUD`, pamoja na herufi ya marekebisho) kuzunguka kila mabadiliko yaliyokubaliwa au kukamilika, na kumbukumbu ya marekebisho, jedwali lenye mistari la kile kilichokubaliwa pamoja na maelezo yako (tabaka `REV-LOG`), upande wa kulia wa mchoro. Ni hatua moja ya kutendua.
- {{ui:Hifadhi}}: huandika `<project>-<revision>.redline-answers.json`. Ifungue kwenye MarkupCraft na alama zitafungwa: Imekubaliwa, Imekataliwa au Imekamilika, pamoja na maelezo yako kama maoni.

## Mambo ya kujua

Kile mkaguzi aliandika kinaonyeshwa kama kilivyoandikwa. CadCraft haifuati maagizo yanayopatikana kwenye kifurushi; inayaonyesha tu kwako.

Mabadiliko yaliyokataliwa na yaliyo wazi hayaongezi chochote kwenye mchoro. Kifurushi kinasomwa kwenye kompyuta yako; hakuna kinachopakiwa.

Ikiwa msaidizi wako ameunganishwa, anaweza kusoma kifurushi, kurekodi maamuzi na kuyatumia kwa zana `redline_read`, `redline_decide`, `redline_apply` na `redline_answers`; mchoro unabadilika kwa hatua moja ya kutendua, "Msaidizi: Redline kwenda marekebisho".
