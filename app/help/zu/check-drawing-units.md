---
title: Hlola ukuthi umdwebo usebenzisa amayunithi amaphi
summary: Bona ukuthi umdwebo ovuliwe usemamilimitheni, emainshini noma enye into, uwuhlole ngokulinganisa, futhi wazi ukuthi kungani enye inhlelo ingase ibize amayunithi ahlukile ku-DXF efanayo.
keywords: amayunithi, yimaphi amayunithi, yiphi amayunithi, hlola amayunithi, amamilimitha, mm, amainshi, metric, imperial, amayunithi e-DXF, STEP ku-DXF, amayunithi angalungile, amainshi noma mm, INSUNITS, MEASUREMENT, amayunithi omdwebo, PartCraft DXF
from: c0ee75bb
---

## Okuzokwenza

Thola ukuthi iyunithi eyodwa emdwebeni ovuliwe imelela ini, futhi uqinisekise ukuthi izinombolo ozifundayo zinosayizi olindele.

## Izinyathelo

1. Vula umdwebo, bese ucindezela {{key:Esc}} ukuze kungakhethwa lutho, ethabeni {{ui:Model}}.
2. Kumbhalo wesokudla, ngaphansi kwe-{{ui:Current settings}}, funda {{ui:Units}}. Ikhomba ukuthi iyunithi eyodwa yomdwebo imelela ini: {{ui:Millimeters}}, {{ui:Inches}}, {{ui:Feet}} njalo njalo. I-DXF elondolozwe ku-PartCraft ithi {{ui:Millimeters}}.
3. Hlola ngokulinganisa into osazi usayizi wayo. Thayipha {{cmd:DIST}} bese ukhetha izinhlangothi ezimbili zomphetho noma umgodi. Uma ingxenye oyaziyo engu-25 mm ifunda `25`, umdwebo usemamilimitheni; uma ifunda cishe `0.98`, usemainshini.

{{ui:Unitless}} isho ukuthi ifayela alitshongo. I-CadCraft-ke ilisebenzisa njengeyunithi yephepha (amamilimitha kuphepha le-ISO, amainshi kuphepha le-US), futhi izinombolo zilungile njengoba nje nenhlelo ezibhalile.

## Uma amayunithi engalungile

Ukushintsha i-{{ui:Units}} **akulungisi usayizi wutho**: izinombolo zihlala zifanana, kushintsha kuphela ukuthi zisho ini. Ngakho yisete kuphela ukuze ichaze ukuthi umdwebo ungempela ubani. Uma izinombolo ziyizinhlamvu zamamilimitha futhi i-{{ui:Units}} ithi {{ui:Inches}}, khetha {{ui:Millimeters}}. Uma udinga ijiyomethri uqobo ngamayunithi ahlukile, yilinganise nge-{{cmd:SCALE}} (25.4 ukusuka emainshini uye kumamilimitha, 1/25.4 ngendlela ephambene) bese usetha i-{{ui:Units}}.

Indlela amabanga abhalwa ngayo (ukuhlukana kwamadesimali, amafidi namainshi, izingxenye) iyisilungiselelo esihlukile, i-{{ui:Length format}}: bona [Amayunithi, usayizi wamaphepha namasikali](topic:units-papers-scales).

## Kungani enye inhlelo ingathi amainshi

I-DXF ichaza amayunithi ayo ekhanda layo. I-DXF endala kakhulu, i-R12, ayinaguquki yamayunithi nhlobo, ngakho inhlelo efunda i-R12 ngokuqinile iyinaka leyo ebhalwe khona futhi ibuyele ekuzenzakaleleni kwayo, okuvame ukuba amainshi. Ijiyomethri efaylini ifanana kunoma ikuphi: kuhluka kuphela isiminyaniso. I-PartCraft ibhala amafayela ayo e-DXF njenge-R12 futhi ichaza amamilimitha ngezindlela ezimbili (`$INSUNITS` 4 kanye ne-`$MEASUREMENT` 1) ukuze izinhlelo eziningi zizifunde ngendlela efanele. Uma inhlelo isakhomba amainshi, yisete amayunithi ayo abe amamilimitha lapho uvula ifayela.

Ukulethwa kwefayela emdwebeni (hhayi ukulivula) kuguqula amayunithi alo: bona [Amayunithi lapho kulethwa](topic:units-on-import).
