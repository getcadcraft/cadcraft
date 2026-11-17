---
title: Vula i-DWG, uyihlele futhi ulondoloze ikhophi
summary: Vula umdwebo othunyelwe kuwe, hlola okufikile, yenza ushintsho, bese uthumela ikhophi emuva njenge-DWG noma i-DXF.
keywords: dwg, dxf, vula, ngenisa, khipha, londoloza, r12, ukuhamba nokubuya, umeluleki, xref, hlola umdwebo, saveas, londoloza njenge, ukulondoloza kwe-dwg, ifomethi
from: 49de4bf6
---

## Okuzokwenziwa

Vula i-DWG evela kumeluleki, hlola okufikile nokungafikanga, engeze inothi, uphrinte ishidi ku-PDF bese ulondoloza ikhophi ozoyithumela emuva, njenge-DWG noma i-DXF.

## Vula ifayela

1. Cindezela {{key:Mod+O}}, noma chofoza {{ui:Open}}.
2. Khetha ifayela `.dwg`.

Umugqa wesimo ubonisa "Reading …" umdwebo uyafundwa. Lapho usuqedile, umdwebo ugcwalisa isikrini, nomlando uthi, isibonelo, "Opened plan.dwg: 18,240 objects on 64 layers", nesikhathi esithathe ngaso.

:::offline
Awuxhunywanga. Uma inkinobho ethi {{ui:Save for offline}} ifunda "Offline ready", amafayela e-DWG ayavuleka ngokujwayelekile. Uma kungenjalo, futhi kungakavulwa i-DWG kule thebhu, ukuvula i-DWG kungahluleka ngoba umfundi we-DWG we-CadCraft ulayishwa ngalo lokuqala lwe-DWG: vula i-DXF esikhundleni, noma londoloza i-CadCraft ukuze usebenzise ngaphandle kwe-inthanethi ngesikhathi esilandelayo uxhunyiwe. Bona [Working offline](common:offline).
:::

## Hlola okufikile

1. Bheka ingxenye ethi {{ui:Drawing}} yepaneli yesobunxele: ifomethi nenguqulo, amayunithi, inani lezinto nezingqimba, namashidi.
2. Funda ibhokisi elithi "About this file" ngaphansi kwayo, uma likhona.

Ibhokisi libala:

- **Akukakhonjwa:** izinto i-CadCraft engakwazi ukuzidweba, ngohlobo nangenani. Zishiywa, azikhonjwa.
- **Amashidi (izakhiwo) afike:** wavule ngamathebhu angaphansi komdwebo.
- **Izilinganiso ezingafundeka kuphela njengoba zidwetshwe.**

3. Chofoza kumathebhu angaphansi komdwebo ukubona ishidi ngalinye.
4. Hlola {{ui:Units}} ku-{{ui:Current settings}} (akukho okukhethiwe, ithebhu {{ui:Model}}). Uma ithi {{ui:Unitless}} kodwa uyazi ukuthi umdwebo ungamamilimitha, yisete, ukuze ishidi nezikali zokuphrinta zifundeke kahle.

:::tip
Uma ulindele ingxenye yomdwebo bese ungayiboni, hlola iphaneli ethi {{ui:Layers}}: ingqimba ingase ivalwe noma iqandisiwe efayeleni. Chofoza igama layo ukuze uyenze ekhona manje; lokho kuyivula.
:::

## Yenza ushintsho

1. Yenza ingqimba yezinothi zakho: chofoza {{ui:New layer}}, uthayipha `NOTES` bese ucindezela {{key:Enter}}.
2. Thayipha `DT` bese ucindezela {{key:Enter}}.
3. Chofoza lapho inothi liya khona.
4. Thayipha ubude bombhalo obufanele umdwebo (bona [Engeza umbhalo nezinkomba](topic:text)) bese ucindezela {{key:Enter}}.
5. Cindezela {{key:Enter}} ukugcina ukuzungezwa kungu-0.
6. Thayipha inothi lakho bese ucindezela {{key:Enter}}.
7. Cindezela futhi {{key:Enter}} ukuqeda.

Ukuhlela izilinganiso ezifakiwe kuyalungile: uma ushintsha eyodwa, i-CadCraft iyidweba kabusha ngesitayela sayo.

## Phrinta ishidi ukuze liboniswe

1. Chofoza ithebhu yeshidi.
2. Cindezela {{key:Mod+P}}.
3. Chofoza {{ui:Download PDF}}.

Bona [Plot to PDF](topic:plot-pdf).

## Londoloza ikhophi

1. Cindezela {{key:Mod+S}}, noma chofoza {{ui:Save}}.

Uvule i-DWG, ngakho ibhrawuza lilanda `<name>.dwg`, ngenguqulo efike ngayo i-DWG. Umlando uthi, isibonelo, "Ikhophi ilondolozwe njenge-Plan.dwg (DWG (AutoCAD 2018))." futhi ubala, emigqeni ngaphansi kwawo, noma yini eshintshe ngendlela.

2. Funda lezo zimigqa ngaphambi kokuthumela ifayela. [Okugcinwa nokushintshwa yi-DWG](topic:files#what-a-dwg-keeps-and-changes) ichaza ngayinye yazo.

Ifayela lakho lokuqala le-DWG aliguqulwa. Ukulondoloza ngakunye kuwukulandwa okusha.

## Londoloza njenge-DWG noma i-DXF

Ukuze ukhethe ifomethi ngokwakho:

1. Cindezela {{key:Mod+Shift+S}}, noma chofoza {{ui:Save as}}.

Ingxoxo ethi {{ui:Save a copy as}} ivula ngezinketho ezine, ngayinye negama lefayela ezolinika: {{ui:DWG}}, nohlu lwayo {{ui:Version}}, {{ui:DXF R12}}, {{ui:DXF 2000}} kanye {{ui:DXF 2000 (binary)}}. Ifomethi namanje nenguqulo yomdwebo sezikhethiwe.

2. Chofoza ifomethi ofuna. Ku-DWG, khetha inguqulo ehlanganisa abanye ehhovisi, noma endala: AutoCAD 2018, 2013, 2010, 2007, 2004 noma 2000.
3. Chofoza {{ui:Save}}.

Ikhophi iyalandwa. Kusukela manje, {{key:Mod+S}} ilondoloza lo mdwebo kuleyo fomethi, nemidwebo emisha iqala nayo, kulelibhrawuza. {{ui:Cancel}} noma {{key:Esc}} akulondolozi lutho, futhi umlando uthi "Not saved."

Ukukhetha okufanele:

- **DWG** igcina okuningi kakhulu: amashidi namaviewport awo, izilinganiso zangempela, amaphethini e-hatch, amagama ezingqimba namabhlokhi njengoba uwabhalile, nombhalo oyimigqa eminingi njengombhalo oyimigqa eminingi. Inguqulo ye-AutoCAD 2000 ivulwa ezinhlelweni eziningi kakhulu; ka-2004 nakamuva nazo ziyagcina imibala yangempela.
- **DXF 2000** ingumfayela wombhalo oqukethe cishe lokho i-DWG igcina: ishidi ngalinye njenge-layout nama-viewport awo, izilinganiso zangempela, amaphethini e-hatch, imibala yangempela, ububanzi bemigqa, uhlobo lwemigqa, namagama njengoba uwabhalile. Ivulwa ku-AutoCAD 2000 nakamuva nasezinhlelweni eziningi ze-CAD. Ama-multileader aba yimigqa, izinhloko zemicibisholo nombhalo ezidwetshwa wona. I-DXF evulwe ngenguqulo 2000 noma kamuva ilondolozwa njenge-DXF 2000.
- **DXF 2000 (binary)** iqukethe okufanayo njenge-DXF 2000 ngefomu elingu-binary lefomethi: ifayela elincane eligcina zonke izinombolo ngokunembile. Amafayela e-DXF e-binary avela ezinhlelweni zezinye ayavuleka njengamafayela wombhalo, nomdwebo ovulwe kwi-DXF ye-binary ubuyela njenge-binary.
- **DXF R12** ivulwa cishe kunoma iyiphi inhlelo ye-CAD. Igcina ishidi lokuqala nama-viewport alo, namanye amashidi e-CadCraft. Iyayenza elula izinto ezintsha, njengombhalo oyimigqa eminingi namahatch.

## Okuzobonwa ehhovisi elinye

Ku-DWG:

- Imigqa, ama-arc, izindilinga, ama-ellipse, ama-polyline, umbhalo, umbhalo oyimigqa eminingi, amabhlokhi nezici zawo, ukugcwaliswa okuqinile, amaphethini e-hatch nezingqimba njengoba ubona.
- Izilinganiso zangempela: enye inhlelo iyazilinganisa kabusha uma zelulwa.
- Wonke amashidi, nephepha nama-viewport awo.
- Ama-multileader njengama-multileader. Kuwuhlobo lwe-AutoCAD 2000, imibala yangempela iba umbala ojwayelekile osondele kakhulu.

Ku-DXF R12:

- Imigqa, ama-arc, izindilinga, ama-polyline, umbhalo, izinkomba zamabhlokhi nezilinganiso njengoba ubona. Izilinganiso zihlala izilinganiso zangempela.
- Amagama ezingqimba ngamakhanda abhalwe ngamakhulu, nezikhala ziguqulwe zibe `_`.
- Ishidi lokuqala njengephepha lesikhala somdwebo, nama-viewport alo. Amanye amashidi afika njengamabhlokhi aqanjwe `CCLAYOUT_1` njalo njalo; uma adinga wonke amashidi njenge-layout, phrinta ama-PDF wendawo ngayinye nawo.
- Umbhalo oyimigqa eminingi njengemigqa ehlukene, ama-ellipse njengama-polyline, ama-hatch njengemigqa yawo.

Noma kunjalo, noma yini eyethulwe njengokuthi "Akukakhonjwa" lapho uvula i-DWG **ayikho** ekhophini, ngaphandle uma umlando uthi igcinwe: izinto ze-OLE ze-DWG nezisekelo ze-3D emodelini ziyabhalwa lapho ulondoloza njenge-DWG. Ubatshele, futhi uthumele ne-PDF.

## Izinkinga ezivamile

- **"CadCraft opens DWG and DXF drawings."** Ifayela linesandiso esihlukile. Hlola ukuthi ngu-`.dwg` noma `.dxf`.
- **"This drawing could not be read."** I-DWG yonakele noma ilele enguqulweni umfundi angayiphathi. Cela i-DXF, noma i-DWG elondolozwe enguqulweni endala.
- **"This binary DXF ends in the middle of an object."** Ifayela lifushane noma lonakele. Thayipha RECOVER ukuvula okungafundeka, noma cela ifayela futhi.
- **Ifayela elilondoloziwe libizwa ngokuthi `name (1).dwg` noma `name (1).dxf`.** Ibhrawuza lenza lokho uma ifayela linegama elifanayo sele likufolda.
- **Banohlelo oludala olungeke luvule i-DWG.** Londoloza njenge-DWG ne-{{ui:Version}} {{ui:AutoCAD 2000}}, noma njenge-{{ui:DXF R12}}: cishe noma yiluphi uhlelo lwe-CAD luyayivula.
- **Izingxenye zomdwebo zingekho.** Imidwebo exhunyiwe (ama-xref) ayilayishwa size ukhethe amafayela awo ({{cmd:XREF}}, `R`), nezithombe zibonakala njengefreyimu ngamagama wamafayela azo.
