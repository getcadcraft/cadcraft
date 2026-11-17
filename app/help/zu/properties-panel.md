---
title: Iphaneli yezakhiwo
summary: Bona futhi ushintshe konke mayelana nezinto ezikhethiwe, eziningi ngesikhathi esisodwa: izixhumanisi nge-Z, usayizi, umbhalo, izilungiselelo zamadimenshi, ukukhanya nokunye. Izinkambu zamukela izincazelo nobude nezinhlamvu ezinamayunithi.
keywords: totals, total length, total area, sum, selection length, properties, properties palette, ctrl+1, pr, ch, mo, ddmodify, varies, quick select, pickadd, coordinates, z, elevation, thickness, transparency, material, hyperlink, expression, quickcalc, vertex, dimension style, tolerance, decimals, okuphelele, ubude obuphelele, indawo ephelele, isamba, ubude bokukhetha, izakhiwo, ukukhetha okusheshayo, izixhumanisi, ukuphakama, ukujula, ukukhanya, impahla, ixhumanisi, incazelo, isitayela sedimenshi, ukubekezelela, izingxenyana
from: 10d6a829
---

## Okuzofundwa

Ukuthi uvula kanjani iphaneli Yezakhiwo, ushintsha into eyodwa noma ekhulu ngesinyathelo esisodwa, uthayipha izixhumanisi ezinembile (nge-Z), usebenzise izincazelo namayunithi kunoma yiyiphi inkambu yenani, nokuthi yini into ngayinye ebonisa.

## Yivule

Iphaneli ihlala ngakwesokunene. Ukuyilethela phambili:

- Cindezela {{key:Mod+1}}, noma bhala {{cmd:PROPERTIES}} (noma `PR`, `CH`, `MO`).
- Chofoza kabili into (umbhalo nama-multileader avula umhleli wawo wombhalo).

Iphaneli iyiphaneli ehanjiswayo njengezinye: hudula isibambi sayo ukuyibeka ngakwesobunxele, ngakwesokunene noma ngaphansi, noma uyiyeke phezu komdwebo ukuze idonse (bona [Hlela amaphaneli usebenzise isikrini sesibili](common:arrange-panels)).

### Yigoqe

Inkinobho yephini ngaphezulu kwesokunene sephaneli ivula **ukufihla okuzenzakalelayo**: iphaneli igoqeka ibe yisitribe emaphethelweni angakwesokunene, futhi umdwebo uthola indawo. Phakamisa esitripeni (noma cindezela {{key:Mod+1}}) ivuleke phezu komdwebo; hamba ukushiya futhi igoqeke. Chofoza iphini futhi ukuze ihlale ivulekile. {{cmd:PROPERTIESCLOSE}} nayo iyigoqa.

## Izigaba

Izakhiwo zihlelelwe izigaba ongazigoqa: **General**, **Geometry**, **Text**, **Lines and arrows**, **Fit**, **Primary units**, **Alternate units**, **Tolerances**, **Pattern**, **Misc**, kanye, kumabhulokhi, **Attributes** ne-**Library item**. Chofoza igama lesigaba ukuze uligoqe noma uvule; i-CadCraft ikhumbula ezigoqwe nguwe.

Hudula umugqa omncane phakathi kwamagama nezinani ukwenza amagama abe mkhulu noma abe mncane. Chofoza kabili ukuwubuyisela. Ngekhibhodi, gxilisa kuwo bese usebenzisa izinkinobho zomcibisholo.

## Shintsha inani

1. Chofoza umugqa. Ikhanda lithi "Line".
2. Chofoza ku-{{ui:Length}}. Lapho uhlela, insimbi ibonisa inani eliphelele, hhayi elijikijelwe.
3. Thayipha `2500` bese ucindezela {{key:Enter}}. Umugqa manje ungu-2500 ubude, ugcina iphoyinti lawo lokuqala nengeli yawo.

{{key:Enter}} noma ukuchofoza kwenye indawo kusebenzisa inani; {{key:Esc}} ibuyisela inani elidala. Yonke inguquko iyisinyathelo sokuhlehlisa esisodwa.

### Izincazelo namayunithi

Inkambu yenani ngayinye yamukela okungaphezu kwenombolo elula:

| Uthayipha | Uthola |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (amayintshi, emdwebeni wamafithi namayintshi) |
| `900mm`, `3.5m`, `2ft` | Iguqulwa ibe yeyunithi zomdwebo |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (izinkambu zengeli) |
| `0.5r`, `100g` | Ama-radian nama-grad, njengamadigri |

Ubude olunamayunithi budinga ukuthi umdwebo ube neyunithi: setha {{ui:Units}} ngaphansi kwe-{{ui:New objects}} (lapho kungakhethwanga lutho) kuqala. Okungenziwe kabi kuyenqatshwa ngesaziso ngaphansi kwephaneli futhi akukho okushintsha; ngeke kulondolozwe njenge-0. Imisebenzi: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; izingeli zisebenza ngamadigri.

## Shintsha izinto eziningi ngesikhathi esisodwa

1. Khetha izinto eziningi, isibonelo imigqa engu-8 namadimenshi angu-4.
2. Ikhanda lithi "12 objects", nohlu oluphezulu lunikeza **All (12)**, **Line (8)** kanye **Dimension (4)**.
3. **All** ibonisa okunazo zonke izinto (ungqimba, umbala, uhlobo lomugqa…). Khetha **Dimension (4)** ukubona izilungiselelo zamadimenshi.
4. Shintsha inani, isibonelo {{ui:Decimals}} ibe `1`.

Onke amadimenshi amane ayashintsha, ngesinyathelo sokuhlehlisa esisodwa. Insimbi ethi **Varies** isho ukuthi izinto ziyahlukana; ukubhala inani kulibeka kuzo zonke. Izinto ezisezingqimbeni ezikhiyiwe ziyashiywa njengoba zinjalo, futhi isaziso sitshela ukuthi zingaki.

## Okuphelele kokukhethiwe

Uma kukhethwe izinto eziningi, isigaba {{ui:Totals}} phezulu sitshela:

- **Objects**: zingaki zohlobo ngalunye, isibonelo "8 lines, 2 polylines, 1 circle".
- **Total length**: imigqa, izingxenye zesiyingi namama-polyline ezengezwe ndawonye (nama-spline ayabalwa), nezinto ezingaki lokho okuyiko.
- **Total area**: ezivaliwe ezengezwe ndawonye: izindilinga, ama-ellipse aphelele, ama-polyline avaliwe namahatch (izimbobo ze-hatch ziyasuswa).

Zisefomethini yobude yomdwebo (amayintshi namafithi uma iyisebenzisa; izindawo-ke zibe amayintshi-skwele namafithi-skwele). Ibha yesimo ibonisa ubude nendawo efanayo noma kunini lapho izinto zikhethiwe; {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Length and area of the selection}} › {{ui:Hidden}} ikuvala lokho. Ngento eyodwa, {{ui:Geometry}} ibonisa ubude bayo nendawo yayo, njengakuqala.

## Izixhumanisi

Yonke iphoyinti ibonisa **X**, **Y** kanye **Z**: ukuqala nokuphela komugqa, izikhungo, amaphoyinti okufaka, izikhundla zombhalo, i-vertex yamanje ye-polyline. Imigqa iphinde ibonise **Delta X**, **Delta Y** kanye **Delta Z** (zifundwa kuphela). Ama-polyline namahatch anokuphakama (**Elevation**), i-Z eyodwa yayo yonke into.

Inkinobho yesiphambano eseduze kwegama lephoyinti ikuvumela ukuthi uyikhethe emdwebeni: chofoza kuyo, bese uchofoza indawo entsha (ukubamba kuyasebenza). Amanani angamanani omhlaba.

## Okuvamile

| Inkambu | Yini |
|---|---|
| {{ui:Layer}}, {{ui:Color}}, {{ui:Linetype}}, {{ui:Linetype scale}}, {{ui:Lineweight}} | Njengephaneli yezingqimba; {{ui:By layer}} ilandela isendlalelo |
| {{ui:Transparency}} | Ngesendlalelo, ngebhulokhi, noma ku-0 kuya ku-90% |
| {{ui:Thickness}} | Ukuthi imigqa, izindilinga, amajika, ama-polyline, amaphoyinti nombhalo kuvela kangakanani ku-Z |
| {{ui:Material}} | Ngesendlalelo, ngebhulokhi, Global noma igama ledwebo elilethe |
| {{ui:Plot style}} | Kuyafundwa kuphela: imidwebo iphrintwa ngombala, ngethebula lesitayela seshidi |
| {{ui:Hyperlink}} | Ikheli lewebhu eligcinwe nento |

## Yini into ngayinye ebonisa

| Ikhethiwe | Ungashintsha |
|---|---|
| Line | X, Y, Z ukuqala nokuphela; ubude; ingeli |
| Circle | Isikhungo; iradiyasi; ububanzi; isiyingi sokuzungeza; indawo (ngalinye lisetha iradiyasi) |
| Arc | Isikhungo; iradiyasi; ingeli yokuqala nokuphela; ingeli ephelele; i-chord (ibonisa ubude bearc nendawo) |
| Ellipse | Isikhungo; iradiyasi enkulu nencane; isilinganiso seradiyasi; ingeli ye-major axis; ingeli yokuqala nokuphela |
| Polyline | Isiphequluli se-vertex (ngezansi); ububanzi bomhlaba; ukuphakama; ivaliwe; indawo uma ivaliwe (iyayilinganisa ngokuzungeza isikhungo sayo) |
| Text | Okuqukethwe; isitayela; ukulinganisa; ukuphakama; ukujikeleza; isilinganiso sobubanzi; ingeli yokuthambeka; ububanzi obuchaziwe; ukuhlukana kwemigqa; annotative; isikhundla |
| Block reference | Iphoyinti lokufaka; ukujikeleza; isikali X, Y, Z nesikali esifanayo; amanani ezici |
| Hatch | Iphethini; isikali; ingeli; umsuka; associative; ukutholwa kwezihlephe; umbala wangemuva; ukuphakama |
| Dimension | Bheka ngezansi |
| Multileader | Umbhalo; ukuphakama; ububanzi; uhlangothi lombhalo; usayizi wekhanda lomcibisholo; ibanga lokufika; iphoyinti lekhanda lomcibisholo |
| Viewport | Isikali; isikhungo nosayizi ephepheni; isikhungo sokubuka emodelini; on; ukukhiya kokubonisa |

### Ama-vertex e-polyline

{{ui:Current vertex}} ibonisa ukuthi i-vertex yiphi izinkambu ezingaphansi kwayo ezihlobene nayo. Sebenzisa izinkinobho zomcibisholo, noma thayipha inombolo, ukuze uye kwenye i-vertex; azikho izinqumo zokuthi zingaki. Ngayinye i-vertex inambeka ye-X, Y, ububanzi bokuqala nokuphela kwesegimenti, kanye ne-bulge yesegimenti eqala lapho (0 = iqondile).

## Amadimenshi

Idimenshi ibonisa **Dimension style** yayo, into eyilinganayo, amaphoyinti ayo, kanye zonke izilungiselelo:

- **Lines and arrows:** umtshazo ngamunye, usayizi womtshazo, usayizi wetiki, imibala nobubanzi bemigqa yedimenshi nemigqa yokwelula, ukufihla uhhafu noma imigqa yokwelula, ukubekwa kokwelula nokwelula.
- **Text:** okungabhalwa (shiya ingenalutho ukuze kube inani elilinganisiwe; `<>` imela lona ngaphakathi kombhalo wakho), isitayela, umbala, ukuphakama, ukubekwa okuthe xaxa/okuthe xaxa, okuhlala kuthe tshe, ukujikeleza, ukugcwaliswa kwangemuva.
- **Fit:** isikali esiphelele, ukuhlukana kwemigqa yesisekelo, lokho okunyakazayo lapho isikhala sincane, ukunyakaza kombhalo.
- **Primary units:** ifomethi, izingxenyana, ukuzungeza, isijobelelo, isikali sokulinganisa, uphawu lwedesimali, ukucindezela izero ezihamba phambili nezigcina; ama-engeli: ifomethi yengeli nezingxenyana.
- **Alternate units:** kuvuliwe noma kuvalwe, ifomethi, izingxenyana, isisekeli sokuphindaphinda (25.4 iguqula amayintshi ibe ngamamilimitha), ukuzungeza, isijobelelo nesiqalo.
- **Tolerances:** akukho, okulinganayo, ukuphambuka, imikhawulo noma okuyisisekelo, nezinani eziphezulu nezingezansi, izingxenyana, ukuphakama nokubekwa.

Ukushintsha noma yimuphi walezo kwidimenshi evuliwe kulahla umdwebo owenziwe yinye inhlelo, futhi i-CadCraft iyawudweba kabusha.

:::note
Isikhundla sombhalo ngokuthe tshe (eduze komugqa wokwelula wokuqala noma wesibili) kanye nombhalo ngaphansi komugqa kudwetshwa kumadimenshi womugqa nama-aligned; kwamanye amadimenshi kugcinwa futhi kulondolozwe kodwa akudwetshwa okwamanje. Izinketho zokufaka okulinganayo zigcinwa futhi zilondolozwe kodwa azikadwetshwa okwamanje: i-CadCraft ibeka umbhalo ngomthetho wayo (phezulu komugqa, ngaphandle uma ungafaneleki).
:::

## Akukho okukhethiwe

Uma kungakhethwanga lutho iphaneli ibonisa:

- **New objects:** ungqimba, umbala, uhlobo lomugqa, ububanzi bomugqa nobukhulu bombhalo izinto ezintsha ezithola; amayunithi nefomethi yobude yomdwebo; uhlobo lomugqa wesendlalelo samanje nobubanzi bomugqa; usayizi wamadimenshi amasha. Ishidi, uma likhona, linegama, iphepha nokuma kwalo kuqala.
- **View:** isikhungo, ukuphakama nobubanzi bokubonakalayo esikrinini. Bhala inani ukuze uhambele lapho.
- **Misc:** isithonjana se-UCS sivulekile noma sivaliwe, i-UCS (njalo i-World: i-CadCraft ayinazo izinhlelo zokuxhumanisa zomsebenzisi okwamanje) nesikali sokuchaza.

## Izinkinobho phezulu

| Inkinobho | Yenza |
|---|---|
| Ifenisha | {{cmd:QSELECT}}: khetha ngohlobo nangokuthungwa |
| Umcibisholo | {{cmd:SELECT}}: khetha izinto emugqeni womyalo |
| Ukhamba noma 1 | Ukuthi ukuchofoza kwengeza ekukhethweni (ukhamba) noma kuyakuvuselela (1); isilungiselelo esifanayo nakuZilungiselelo, {{ui:CadCraft}} |
| Iphini | Ukufihla okuzenzakalelayo, phezulu |

## Izinkinga ezivamile

- **Ukuthayipha enkambini akwenzanga lutho.** Cindezela {{key:Enter}} noma chofoza kwenye indawo ukuze usebenzise. Inkambu ebomvu nesaziso kusho ukuthi inani lenqatshiwe.
- **Ubude onamayunithi buyenqatshwa.** Umdwebo awunayo iyunithi. Setha {{ui:Units}} lapho kungakhethwanga lutho.
- **Kuvela kuphela Layer noColor.** Kukhethwe izinhlobo eziningi zezinto futhi **All** kukhethiwe. Khetha uhlobo olulodwa ohlwini phezulu.
- **Ezinye izinto azishintshanga.** Zisezingqimbeni ezikhiyiwe. Vula isendlalelo ephaneli yezingqimba.
- **Ukuthayipha kwamaletha kungene enkambini.** Lapho inkambu inekhesa, okhiye bathayipha lapho. Cindezela {{key:Enter}} noma {{key:Esc}}, bese uthayipha umyalo.
