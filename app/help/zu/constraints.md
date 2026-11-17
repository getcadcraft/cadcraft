---
title: Bopha umdwebo
summary: Gcina imigqa iseqondile, izinhlangothi zihlangene kanye nosayizi usungulwe ngezibopho zejiyomethri nezobukhulu, bese umdwebo ulandela uma ushintsha usayizi.
keywords: ukubopha, izibopho, amapharamitha, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, amadigri enkululeko, ukubopha okugcwele
from: f8f21fa4
---

## Okuzokwenza

Ipuleti lapho ushintsha ububanzi balo endaweni eyodwa: izinhlangothi zalo zihlala zingqamile, ikhona eyodwa ihlala indawo yayo, nobude balo buhlala buyingxenye yesibili yobubanzi.

Izibopho zisebenza kumigqa, kumapholayini, kumasongo, kumanxanxathela nakumaphoyinti kuthebhu ethi {{ui:Imodeli}}. Okungeziwe ngakunye kuyisinyathelo esisodwa se-undo.

## Dweba bese ubopha umbandela

1. Thayipha `REC` bese ucindezela {{key:Enter}}. Thayipha `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Thayipha `AUTOCONSTRAIN` bese ucindezela {{key:Enter}}. Thayipha `ALL`, {{key:Enter}}, bese {{key:Enter}} futhi.

   Umlando uthi "Kusetshenziswe izibopho ezi-4". Amabhokisi amancane anezinhlamvu **H** no-**V** avela eduze kwezinhlangothi: lawa ngamabha ezibopho.
3. Thayipha `GCFIX` bese ucindezela {{key:Enter}}. Chofoza eduze nekhona elingaphansi-kwesobunxele. Kuvela ibhokisi elinophawu ⊕: leyo khona ihlala lapho ikhona.

`AUTOCONSTRAIN` engeza izibopho zokuhlangana lapho izimpelasondo zicishe zihlangane, nezibopho ezingqamile noma ezimile lapho imigqa icishe ibe ngqo noma ibe ngqo phezulu. Thayipha `S` esicelweni sayo ukushintsha ukuthi kuseduze kangakanani (0.05 wamayunithi omdwebo nama-1° ukuqala nawo).

## Engeza osayizi

1. Thayipha `DCHORIZONTAL` bese ucindezela {{key:Enter}}.
2. Chofoza eduze nekhona elingaphansi-kwesobunxele, bese eduze nekhona elingaphansi-kwesokudla.
3. Chofoza ngaphansi kwesikhombisi ukuze uthole umugqa wesilinganiso.
4. Umyalo ubonisa `Dimension text <d1=100>`. Thayipha `width=120` bese ucindezela {{key:Enter}}.

   Iphuleti manje linobubanzi obungu-120, nelebuli ithi `width=120`.
5. Thayipha `DCVERTICAL` bese ucindezela {{key:Enter}}, thayipha `O` bese ucindezela {{key:Enter}}, bese uchofoza uhlangothi lwesokudla.
6. Chofoza ngakwesokudla kwalo, thayipha `width/2` bese ucindezela {{key:Enter}}.

   Liyi-60 ukuphakama. Ilebuli ithi `fx: d1=width/2`: isisho sishayela lokhu.

Umlando manje uthi umbandela ubotshiwe ngokugcwele. Ukushintsha usayizi wawo, shintsha `width` (bona [Sebenzisa amapharamitha nezibalo](topic:parameters)), noma chofoza kabili ilebuli `width=120`, thayipha inani elisha bese ukhetha {{ui:Sebenzisa}}.

## Ukunyakazisa izinto ezibophiwe

Ukunyakaza, ukujikeleza, ukushintsha usayizi, izigaxa kanye nephaneli yezakhiwo konke kugcina izibopho: into oyinyakazisile iyabanjwa, nokunye kulandela. Uma izibopho zingakwazi ukulandela, ukuhlela akwenziwa futhi umlando uchaza ngenxa, isibonelo "Akwenziwanga: izibopho zibamba leso sinto lapho sikhona". Ukususa into kususa nezibopho zayo.

## Ukubhenya nokusika izinto ezibophiwe

- {{cmd:MIRROR}} ikopisha izibopho phakathi kwezinto ozibhenyayo ziye emakhophini. Izinhlangothi (ukuthi ithanjenti lithinta kanjani, uhlangothi okulinganiswa kulo ibanga) ziphinde zibalwe kabusha ekhophini elibhenyiwe, nezilinganiso ezikopishiwe zithola amagama awo, njengoba kwenzeka ekunamathiseleni. Ngo-`Erase source objects` `Y`, izibopho zihlala ezintweni ezibhenyiwe. Umlando uthi zingaki ezifike nazo.
- {{cmd:TRIM}} igcina izibopho zomugqa noma zenxanxathela kokusele: isibopho esisekhawulweni siya engxenyeni esesinalowo mkhawulo, umthetho wokuqondisa ({{ui:Ngokuthe xaxa}}, {{ui:Ngokuthe thwi}}, {{ui:Okuhambisana}}, {{ui:Okuqondile}}) ubamba kuzo zonke izingxenye, nesilinganiso phakathi kwemikhawulo emibili yangaphandle siqhubeka siyilinganisa. Izibopho ezibambe ingxenye esikwe, noma ubude obushintshwe ukusika ({{ui:Okulingene}}, ukuvulwa kwenxanxathela), ziyanyamalala. Isongo elisikiwe ligcina izibopho zalo zesikhungo nezomsakazo. Amapholayini asikiwe alahlekelwa yizo.

## Izibopho

| Umyalo | Igcina |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | umugqa noma isegimenti ukuthi kube ngqo ngokuthe xaxa noma thwi (`2P`: amaphoyinti amabili ngokuthe xaxa noma thwi) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | imigqa emibili ihambisana, ingqamile noma ibe kumugqa munye |
| {{cmd:GCCOINCIDENT}} | amaphoyinti amabili ahlangene; `O`: iphoyinti emugqeni, esongweni noma enxanxathelweni |
| {{cmd:GCTANGENT}} | umugqa nesongo noma inxanxathela, noma ezimbili kuzo, zithintana |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | amasongo noma izinxanxathela ezimbili esikhungweni esisodwa; izingxenyana ezimbili noma imisongo emibili ilingana |
| {{cmd:GCSYMMETRIC}} | amaphoyinti amabili, imigqa noma amasongo abhenyiwe ngaphesheya komugqa |
| {{cmd:GCFIX}} | iphoyinti (chofoza eduze kalo) noma into yonke (`O`) lapho ikhona |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | ibanga |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | umsomo, idayamitha, ingosi phakathi kwemigqa emibili noma ingosi yenxanxathela |

{{cmd:GEOMCONSTRAINT}} no-{{cmd:DIMCONSTRAINT}} zibuza ukuthi yiliphi; {{ui:Bopha}} no-{{ui:Isilinganiso}} kweqembu {{ui:Amapharamitha}} ziyasebenza, no-{{ui:Okuningi}} lapho kuhlu lwalo lonke. Lapho uchofoza khona kukhetha ingxenye: ukuchofoza eduze komkhawulo, phakathi noma esikhungweni kuthatha leyo phoyinti; ukuchofoza ipholayini kuthatha isegimenti ongaphansi kwalo. Into yokuqala ihlala, eyesibili iyanyakaza ukuze ihlangane nayo.

Ukubopha okuphikisana nezinye, noma okungeza lutho ngoba ezinye sezikushiya kakade, kuyenqatshwa ngomyalezo futhi akukho okunyakazayo.

## Bona, khetha futhi usule

- Chofoza ibhokisi kwibha yezibopho (noma isikwele sokuhlangana, noma ilebuli yesilinganiso) ukukhetha leso sibopho; umlando uyasitshela igama lawo. Cindezela {{key:Delete}} ukusisusa.
- {{cmd:DELCONSTRAINT}} isusa zonke izibopho ezintweni ozikhethile.
- {{cmd:CONSTRAINTBAR}}: `S` ibonisa zonke amabha, `H` iwafihle; khetha izinto kuqala ukuze ubonise noma ufihle amabha azo. {{ui:Okuningi}} inezinketho {{ui:Show constraint bars}} no-{{ui:Hide constraint bars}}.
- {{cmd:DCDISPLAY}} ibonisa noma ifihle izibopho zobukhulu. Azikaphrintwa.
- {{cmd:DCCONVERT}} iguqula izilinganiso ezidwetshwe emigqeni, emasongweni nasezinxanxathelweni ibe yizibopho zobukhulu.

:::note
Uma usuke wasebenzisa umdwebo oyiparamitha we-AutoCAD, amagama emiyalo nemibuzo afana. Izibopho namapharamitha alondolozwa ku-DWG ne-DXF ngendlela ezinye izinhlelo ezingayinaki; bona [Amafayela](topic:files#constraints-in-files).
:::
