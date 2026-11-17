---
title: Thumela umdwebo kulaser
summary: Vula iphaneli yelaser, khetha okwenziwa ungqimba ngalunye (ukusika, ukugxuma, ukuqopha, ukugcwalisa, isithombe), buka ukunyakaza kwekhanda, londoloza i-G-code ye-GRBL laser-mode, noma uyithumele kusiphequluli ngemva kokumaka umsebenzi.
keywords: ilaser, umsiki welaser, umbhali welaser, GRBL, G-code, gcode, qopha, gcwalisa, dither, ukuqopha isithombe, gxuma, sika, Web Serial, maka umsebenzi, amandla, isivinini, ukudlula, LASER, LASERCUT, CNC
from: 72b56db0
---

Iphaneli {{ui:Laser}} iguqula ungqimba zomdwebo zibe uhlelo lwe-laser oluqhuba nge-GRBL (amakhontrola e-GRBL avamile ezinhlelweni ze-hobby nasezitolo ezincane, ama-diode nama-CO2). Thayipha `LASER` (noma `LASERCUT`) bese ucindezela {{key:Enter}}, noma khetha {{ui:Laser…}} emenywini {{ui:More}} eqenjini {{ui:View}}. Ezitayela zeribhoni, itholakala emenywini {{ui:File}} nasecaleni le-{{ui:Plot}}. Iphaneli ivuleka phezu komdwebo ihlale ivulekile lapho udweba: ukubuka kulandela konke okushintshayo.

:::warning
Hlola zonke izilungiselelo kuqala kusikrepe, gqoka amehlo okuvikela alingana nelaser yakho, gcina isivalo sivaliwe lapho kukhona, futhi ungasoze ushiye ilaser isebenza wedwa. Izinombolo ezisethwe ungqimba ngalunye ziyizibambi, hhayi izincomo zanoma yisiphi isinto.
:::

## Okuthunyelwayo

Iphaneli ifunda imodeli (hhayi amashidi), kuzingqimba ezivuliwe nezingafrizwanga:

- Imigqa, izingosi, izindilinga, ama-polyline (ingxenye yezingosi ihlala ingosi), ama-ellipse namawebhu (spline). Into eqeda lapho iqala ibhekwa njengevaliwe.
- Amabhulokhi ayahlukaniswa: into esongqimbeni 0 ngaphakathi kwebhulokhi ihamba nongqimba lwereferensi yebhulokhi.
- Ihatch ithumela umkhawulo wayo, ngakho ilogo ehatshiwe kongqimba **Gcwalisa** iyagcwaliswa.
- Isithombe (`IMAGEATTACH`) siqopha kongqimba oluse **Qopha isithombe**, uma sime ngqo (singaphendulwanga noma sithambekile) futhi ifayela lawo livulekile ku-CadCraft.
- Umbhalo, izilinganiso, izinkomba, amaphoyinti nemigqa yokwakha ayithunyelwa; iphaneli ikhombisa ukuthi yangapi ayishiye. Ukuze ushise umbhalo, dweba izinhlamvu njengezimo noma uzifake ihatch.

Usayizi uphuma ngamamilimitha kumayunithi omdwebo (`UNITS`): umdwebo ngamayintshi uphindwa nge-25.4. Umdwebo ongasethiwe ngamayunithi uthunyelwa iyunithi eyodwa iye kumamilimitha eyodwa. Khetha {{ui:Only the selected objects}} ukuthumela ingxenye yomdwebo.

## Khetha okwenziwa ungqimba ngalunye

Yonke ungqimba olunento ibe ngumugqa wethebhuli. Insimu {{ui:Does}} ibeka kube **Sika**, **Gxuma**, **Qopha imigqa**, **Gcwalisa izimo**, **Qopha isithombe** noma **Akuthunyelwa**, nge-{{ui:Power %}}, {{ui:Speed mm/min}} kanye nenombolo ye-{{ui:Passes}}. Ushintsho ngalunye luyisinyathelo esisodwa sokuhlehlisa futhi lugcinwa emdwebweni: i-DWG (zonke izinguqulo ezilondolozwa yi-CadCraft) ne-DXF zigcina izilungiselelo, ngakho umdwebo uvulwa nazo ngesikhathi esilandelayo. Ezinye izinhlelo zivula ifayela njengakuqala; zibona ibhulokhi eyodwa engasetshenziswa egama elithi CADCRAFT_LASER (ukuyihlanza lapho kususa izilungiselelo).

- **Gcwalisa** ishisa ingaphakathi kwezimo ezivaliwe ngemigqa, ibekwe ngokuhlukana kwe-{{ui:Line spacing}}, ku-{{ui:Angle}}, ezinhlangothini zombili noma enye, nokweqa okwengeziwe ukuze ikhanda lifike esivinini lapho ilaser ivulwa; i-cross-hatch yengeza ukudlula kwesibili ku-90°. Isimo esinesikhala sihlala sivulekile lapho sikhona.
- **Qopha isithombe** iguqula isithombe sibe ngamachashaza (Floyd–Steinberg, Atkinson, ngokuhlelwa, noma kumnyama nomhlophe kuphela ngomkhawulo) noma, nge-*Amazinga e-grey*, sibe ngamandla aguquguqukayo.
- Ukuhleleka: izithombe nokugcwalisa kuqala, bese kuqopha imigqa, bese kugxuma, bese kusika, ukuze ingxenye esikiwe ingahambi ngesikhathi iqoshwa. Ngaphakathi kongqimba olunye imizila ihamba **ngaphakathi-kuqala** (imbobo ingaphambi kwepuleti eyiphethe), eyeduze ilandele.

## Buka, bese ulondoloza

Ukubuka kudweba lokho ikhanda elikwenzayo: imigqa eshisayo ngombala, nokuhamba okusheshayo ngegrey, namabhokisi aluhlaza aqukethe konke okushisayo. Ngaphansi kwakho kukhona usayizi, ubude bokushisa nesilinganiso sesikhathi (ngaphandle kokukhawulela; umshini wangempela uthatha isikhathi eside). {{ui:Save G-code…}} ibhala i-G-code ye-GRBL laser-mode: `$32=1`, `M4` (noma `M3`) ne-S values, imiyalo `G0` kanye `G1`, `M5` ekugcineni. X0 Y0 yikhona kwesokunxele esingezansi komsebenzi, uma ungakhethanga umsuka womdwebo: setha iziro yokusebenza yomshini wakho khona.

## Thumela kusiphequluli

Ku-Chrome ne-Edge, {{ui:Connect…}} ikucela ukuthi ukhethe i-USB port yelaser. Akukho okuxhumana noma okuthunyelwayo uze ucindezele inkinobho. Cindezela {{ui:Frame the job}} kuqala: ikhanda lishaya ibhokisi lomsebenzi ngelaser **ivaliwe** (noma ngamandla aphansi owasethayo ngophoyinta) ukuze ubone lapho izoshisa khona. Ngemva kwalokho {{ui:Send job}} iyavula, futhi iyavaleka uma ushintsha noma yini. {{ui:Pause}} ibamba ikhanda, {{ui:Stop}} nayo iyalibamba, isetha kabusha ikhontrola (ilaser iyavaleka) bese ithumela `M5`. Lapho i-Web Serial ingekho (Firefox, Safari, ne-CadCraft Studio, engenayo i-Web Serial okwamanje), iphaneli inikeza ukulondoloza kuphela: londoloza i-G-code bese uyithumela ngohlelo lwelaser lakho.

## Akukakhiwa

Akukakhiwa: amafomethi wamanye amakhontrola (Ruida, amalaser e-Marlin, amafayela womkhiqizi), amathebhu nama-lead-in, ukuhlehliswa kwe-kerf, imitapo yezinto ezisetshenzisiwe, izingxenye ezijikelezayo nezeZ, ukuhlelelwa kwekhamera, umbhalo njengemigqa ephelele.
