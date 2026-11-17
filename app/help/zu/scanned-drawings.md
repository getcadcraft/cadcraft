---
title: Imidwebo eskenwe nokuthola
summary: Letha ishidi eskenwe, lilinganise futhi liqondise, ilihlanze, susa izingxenye zalo, bamba emigqeni yalo bese uyithola ibe yimigqa nama-arc.
keywords: skena, umdwebo oskeniwe, raster, tiff, jpeg, png, isikali, qondanisa, deskew, despeckle, threshold, mnyama nomhlophe, sika, sula, thola, vectorize, bamba, ama-arc, hatching, imidwebo yamaphepha, imidwebo endala, scanattach, scantrace
from: 36227e5b
---

## Kusuka ephepheni kuya kuzinto zomdwebo

Umdwebo oskeniwe uyisithombe. I-CadCraft igcina isithombe onikezwe sona futhi ayisishintshi: isinyathelo ngasinye sokuhlanza senza isithombe esisha, nesinyathelo esisodwa sokuhlehlisa ngasinye, futhi {{cmd:SCANINFO}} ibala ifayela lokuqala nezinyathelo ezithathwe kusukela ngalo. Akukho okuthunyelwa ndawo futhi akukho okuqagelwa yimodeli eqeqeshiwe: ukuhlanza nokuthola kuwukucubungula isithombe okujwayelekile, futhi kusebenza ekhompyutheni yakho.

1. **Faka kona.** {{cmd:SCANATTACH}} ifunda i-PNG, i-JPEG, i-TIFF (ikhasi elilodwa, noma wonke amakhasi efayela elinamakhasi amaningi) noma ikhasi le-PDF elingesithombe. Libuza ikhasi, ikhona elingezansi kwesobunxele nobubanzi. Ekhasini le-PDF libuza futhi ukuthi ama-pixel angaki ngeyintshi okufanele kudwetshwe ngawo ikhasi.
2. **Linganisa.** {{cmd:SCANSCALE}}: khetha amaphoyinti amabili eskenini, bese uthayipha ibanga langempela phakathi kwawo. Ishidi liyalinganiswa lizungeze iphoyinti lokuqala.
3. **Qondanisa.** {{cmd:SCANALIGN}}: khetha amaphoyinti amabili eskenini nezindawo ezimbili okufanele awahlale kuzo; ishidi liyanyakaza liphendukele ukuze lilingane, futhi liyalinganiswa nalo uma ungaphenduli ngokuthi No.
4. **Qondanisa ngeengeli.** {{cmd:SCANDESKEW}} ilinganisa i-engeli emigqeni emide yeshidi bese iyibonisa, nokuqiniseka kwayo. Yamukela, noma uthayipha eyakho, bese ishidi liyaphenduka. Ishidi elinemigqa emide embalwa linikeza isexwayiso: hlola i-engeli ngaphambi kokuyamukela.
5. **Hlanza.** {{cmd:SCANCLEAN}} yenza ishidi libe mnyama nomhlophe (i-Auto ilinganisa iphepha kuqala; i-Adaptive ilandela izinguquko zephepha ngokusondele kakhulu; i-Level inombolo eyodwa yeshidi lonke) futhi isuse izinhlamvu ezinkulu kuya kusayizi osethile.
6. **Sika futhi usule.** {{cmd:SCANCROP}} igcina iwindi. {{cmd:SCANERASE}} isula unxande, ipholigoni noma i-lasso (cindezela futhi udonse): izitembu, amanothi, indilinga yekhofi.

Isithombe esihlanziwe yilokho okugcinwa yi-DWG elondoloziwe (i-IMAGE ne-IMAGEDEF, nefayela lesithombe eduzane nomdwebo, njengakunoma yisiphi isithombe).

## Bamba emigqeni yeskena

Lapho i-{{cmd:RASTERSNAP}} ivuliwe (okuzenzakalelayo), izinhlamvu zezinto nazo zithola imigqa yeskena elimnyama nomhlophe: iziphetho zemigqa, phakathi kwayo, amakona nokuhlangana, kubonakale ngezimpawu zokubamba ezijwayelekile. Ingxenye yeshidi ngaphansi kwesikhombi itholeka njengoba uhamba; sondeza ngokwanele ukuze i-pixel ibe ama-pixel esikrini ambalwa. Umugqa omude kunengxenye etholeka ulandelwa uze uphele.

## Ukuthola

I-{{cmd:SCANTRACE}} iguqula imigqa yeshidi ibe imigqa nama-arc kulayeri omusha (SCAN-TRACE), njengesinyathelo esisodwa sokuhlehlisa, neskena lisekhona ngaphansi kwawo. Uyasetha:

- **Ukubekezelela:** imigqa noma ama-arc atholiwe kungadingeka ukuthi ahlale kangakanani kude nemigqa eseskenini, ngamayunithi womdwebo (umbiko unika futhi namapixel). Ukubekezelela okuqinile kulandela yonke into; okubanzi kwenza izingxenye ezimbalwa, eziqondile kakhulu.
- **Iwindi:** ikhona yeshidi, noma ishidi lonke.
- **Ama-arc:** i-off yenza imigqa kuphela.
- **Okushiyiwe:** lokho ukuthola kukushiye kudwetshwa njengamabhokisi kulayeri ongawucima, noma akudwetshwa.

Ukuthola kuthola isenta yesitlalazo ngasinye, kuyalandela, kulinganise imigqa eqondile namajika e-arc kuwo, kuhlanganise imigqa eyayisikiwe lapho omunye umugqa udlule khona, kwenze imigqa esondele kakhulu ukuqonda noma ibe mqondo ngokuphelele, futhi kuvale amakona. **Umbhalo nokufiphaza kuhlala njengeraster:** izingxenye ezingangosayizi wombhalo ziyabekwa eceleni, nezixhumanisi zemigqa emifushane ehambisanayo zithathwa njengokufiphaza futhi ziyabekwa eceleni.

Lapho isiphela, sitshela ukuthi yenze imigqa nama-arc amangaki, ukubekezelela, nokuthi yashiya izingxenye ezingaki njengeraster. **Lokho amapixel akunikeze, ngalokho kubekezelela, akusho ukuthi umphumela ulungile.** Qhathanisa neshidi: ukuthola kungaphusha umugqa ofiphele, kuhlanganise imigqa ezondelene kakhulu, noma kudwebe umugqa lapho kungekho okungaphezu kwesiteni. Hlanza iskena kuqala (liqondiwe, limnyama nomhlophe, izinhlamvu zesusiwe) umphumela uba ngcono kakhulu.

## Okungakufundi

Amafayela e-TIFF agcinwe ngamathayili, i-BigTIFF, i-TIFF enokucindezelwa kwe-JPEG noma i-deflate, ukukhodisa kwe-Group 3 fax nemibala egcinwe ngezindiza ezihlukene zenqatshwa ngomyalezo; wagcine kabusha njengamastrip nge-LZW, PackBits, Group 4 noma ngaphandle kokucindezelwa. Amafayela e-PNG ahlanganisiwe nawo enqatshwa. Amafayela angaphezu kuka-128 MB noma ama-pixel ayizigidi ezingu-100 enqatshwa, futhi iwindi lokuthola lingabamba ama-pixel ezigidi ezingu-64 kuphela.
