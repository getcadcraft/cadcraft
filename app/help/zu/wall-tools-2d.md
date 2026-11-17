---
title: Izimo zodonga, ukusikwa, ukuphambanisa nokukhiya kodonga be-2D
summary: Dweba odonga njengamachweba, izinxantathu nama-arc, bahlukanise futhi ubahlanganise kabusha, ubanyakazise ngesilinganiso, futhi ukhiye udonga kodonga oluthile noma kumugqa wegridi. Amathuluzi afanayo nodonga be-BimCraft.
keywords: udonga, amathuluzi odonga, izinkinobho zodonga, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, isitayela sokuhlanganisa, mitre, butt, square off, ikhiye, isibambi, hudula, zungezisa, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, hlanganisa, vimbela ukuhlanganiswa, khiya, umugqa wegridi, hlukanisa, igepu, ukuphambanisa, umugqa wendawo
from: f41e7433
---

Lawa mathuluzi asebenza kodonga be-2D ovela ku-`WALL` (bona "Dweba udonga, iminyango namawindi ahlakaniphile nge-2D"). Asebenzisa imithetho efanayo nemithetho yamathuluzi odonga be-BimCraft, ngakho udonga luziphatha ngendlela efanayo kokubili.

## Lapho kukhona amathuluzi

- Ku-toolbar, iqembu {{ui:Odonga}} linamathuluzi {{ui:Udonga}}, {{ui:Unxantathu}}, {{ui:Hlukanisa}} no-{{ui:Ukuphambanisa}}. Imenyu yalo ethi {{ui:Okuningi}} inawo wonke amanye amathuluzi odonga, ngamunye nesithonjana sawo.
- Ku-ribbon menu styles, ithebhu {{ui:Odonga}} inamaphaneli {{ui:Dweba odonga}}, {{ui:Sika}}, {{ui:Setha futhi uguqule}}, {{ui:Bamba}} ne-{{ui:Xhuma}}.
- Ku-layout, imigqa yamathuluzi ne-toolbox ikhombisa iqembu elifanayo {{ui:Odonga}}.
- Ungabhala noma yiliphi igama lomyalo elichazwe ngezansi.

## Ukuhlanganiswa kugcinwa

Lapho isiphetho sodonga sigcina phezu kodonga olunye, i-CadCraft igcina lokho kuhlanganiswa kanye nazo zombili izindonga. Ayisabali ukuhlanganiswa kusuka lapho imiphetho ihlala khona. Ngakho:

- Izindonga ezixhunywe kodonga oluthile oluhanjiswayo ziyalandela futhi zihlala zixhunyiwe. Imiphetho yazo ihamba ngemigqa yazo, ngakho akukho okujikayo.
- Hudula isiphetho sodonga ngesibambi sawo, nodonga oxhunywe lapho nawo ugcina isiqondiso sawo. Isiphetho sawo sihamba ngomugqa wawo siye kudonga oludonsiwe, ngakho isiphetho esidonsiwe sigcina ngomugqa walowo, hhayi njalo ngaphansi kwesikhombi. Okubukisiwe kukhombisa lapho. Udonga olugxumela kudonga oludonsiwe lulandela ngomugqa walo. Ukudonsa isiphetho ngqo phambili ngasodongeni kushintsha ubude balo, futhi udonga oxhunywe lapho luhamba nakho.
- `ROTATE` kudonga oxhunyiwe kusebenza ngendlela efanayo: imiphetho yomakhelwane bawo ihamba ngemigqa yabo iye kudonga olujikiwe.
- Ukuhambisa ikhona, khetha izindonga zombili ezihlangana lapho bese udonsa isibambi sekhona. Zombili zihlala ekhoneni futhi zombili zijika. Izindonga ezisekude azishintshi.
- Bamba {{key:Alt}} lapho uchofoza indawo entsha yesibambi ukuze uphule izixhumo ngamabomu: udonga luya lapho ulibeka khona futhi akukho olulandelayo.
- Uma ukudonsa kuzojikisa udonga oxhunyiwe ngemuva kwesiphetho saso esikude, kuyenqatshwa futhi akukho okushintshayo.
- Udonga owudweba nge-{{ui:Vimbela ukuhlanganiswa}} (`D` ku-`WALL`), noma owucima ku-Properties ({{ui:Vimba ukuxhumana esiqalweni}}, {{ui:Vimba ukuxhumana esiphethweni}}), uhlala ukhululekile kuleso siphetho, nakuba uthinta udonga olunye, uze uwuvumele futhi.
- `WALLDISJOIN` ({{ui:Vimbela ukuhlanganiswa}} kwiqembu {{ui:Odonga}}) yenza okufanayo ngokuchofoza: chofoza udonga eduze kwesiphetho esisodwa ukuze uvimbele ukuxhumana kuleso siphetho, bese uchofoza futhi ukuze uvumele.
- Udonga omdala awunawo amakhonco agciniwe. Ushintsho lokuqala olwenzayo luwathola kanye kanye, kusukela ukuthi izindonga zazimi kanjani ngaphambi koshintsho, bese luwagcina. `WALLJOINS` iwenza ngokushesha.
- Amafayela e-DWG ne-DXF aphethe izixhumo ngaphakathi kudonga ngalinye. I-CadCraft iwafunda njengoba agcinwe. Uhlelo olungagcini ulwazi olwengeziwe lubonisa izindonga njengamabhulokhi avamile futhi lulahla izixhumo, nokuhlanganiswa kwezindonga ezishintshwe kwenye uhlelo kulahlwa lapho kushintshwa noma yisiphi sezindonga ezimbili.

## Isitayela sekhona

Ikhona lapho izindonga ezimbili zihlangana ngokuphelelana kukonjwe njenge-{{ui:Mitre}}, ngaphandle kokuthi ukhethe esinye isitayela.

- `WALLJOINSTYLE` ({{ui:Isitayela sokuhlanganisa}} kwiqembu {{ui:Odonga}}): chofoza ikhona. Ukuchofoza ngakunye kuya esitayelweni esilandelayo: {{ui:Mitre}}, {{ui:Kuqondile}}, {{ui:Sisqeqe}}, bese {{ui:Mitre}} futhi. Thayipha `T` ukuze ushintshe ukuthi yiliphi kwezindonga ezimbili elidabula ekhoneni elichofoze ekugcineni. Cindezela {{key:Enter}} ukuqeda. Ukusebenza kwalo myalo kuwukuhlehlisa okukodwa.
- {{ui:Kuqondile}}: udonga oyedwa udabula uye ebusweni obukude bokunye, kanti olunye luyima ngokumelene nohlangothi lwalo. {{ui:Sisqeqe}}: okufanayo, kodwa udonga oludabulayo luphela buqondile kuwona. Ku-engeli elilungile bobabili bafana.
- Ku-Properties yodonga: {{ui:Isitayela sokuhlanganisa esiqalweni}}, {{ui:Isitayela sokuhlanganisa esiphelweni}}, kanye {{ui:Udabula esiqalweni}}, {{ui:Udabula esiphelweni}}.
- Isitayela sigcinwa kanye nazo zombili izindonga futhi siyahamba kumafayela e-DWG ne-DXF. Ikhophi yodonga iqala ngaphandle kwaso.
- Ukuhlanganiswa kwe-T akunasitayela sokukhetha: udonga olwohlangothi oluhlangabezwayo ludabula. Ikhona lapho izindonga ezintathu noma ngaphezulu zihlangana lihlala liyi-mitre. Kanjalo nekhona elibukhali kakhulu (ngaphansi kwamadigri angu-30 cishe) kanye nezindonga ezimbili emugqeni munye.

## Dweba izimo zodonga

Ngayinye yenza izindonga esinyathelweni esisodwa sokuhlehlisa, namakhona ahlanganisiwe. Ku-`WALL`, `O` isetha ukubekwa okuphambanisiwe (ukuthi udonga uya kangakanani ngakwesobunxele kwamachofozo akho) kanti `D` ivala ukuhlanganiswa kwezindonga ozodweba ngemuva kwalokho.

- `WALLRECT` (`WR`): amakhona amabili aphambene, njenge-`RECTANG`.
- `WALLROT`: uhlangothi lokuqala, bese kuthi uhlangothi olunye lukhulisa kangakanani, okwerektangili ngalo nini iangle.
- `WALLPOLY` (`WP`): inani lezinhlangothi (3 kuya ku-64), isikhungo, `I` for inscribed noma `C` for circumscribed, bese iradiyasi, njenge-`POLYGON`.
- `WALLARC` (`WARC`): isikhungo, ukuqala, ukuphela. `D` ijika i-arc ngendlela eyehlukile.
- `WALLTAN`: chofoza eduze kokuphela kodonga, bese ukuphela kwe-arc, okuphuma ngalo udonga.
- `WALLPICK`: chofoza umugqa noma i-polyline bese utshela ukuthi uthatha yini nemigqa exhunyiwe kuyo.
- `WALLTRACE`: chofoza ngaphakathi kwendawo evaliwe yemigqa nezindonga ukuze ubeke izindonga ozungeze eyincane kunazo zonke.

Izindonga zepulani ziqondile, ngakho i-arc yenziwa ngezindonga ezimfushane eziyidigri eziyi-15 ngayinye. Zihlangana njengoba zihlangana nanoma yiliphi ikhona.

## Sika izindonga

- `WALLSPLIT` (`WS`): chofoza udonga, bese iphoyinti. `C` isika lapho enye indonga iwudlula khona, `G` ishiya igepu phakathi kwezingxenye, `F` yenza iziphetho ezisikiwe zibe khululekile esikhundleni sokuhlanganiswa. Ingxenye yokuqala igcina indawo kadonga emdwebeni, namasango namawindi ahamba nengxenye yawo. Ukusika ngomnyango noma iwindi kuyenqatshwa.
- `WALLSPLITGAP` ({{ui:Hlukanisa nesikhala}}): ukuhlukanisa okufanayo, kodwa icela igepu kuqala.
- `WALLDELSEG`: chofoza udonga, bese amaphoyinti amabili esiqephu okufanele sisuswe.
- `WALLREJOIN`: chofoza izingxenye ezimbili zodonga oyedwa ukuze uzenze zibe yodwa futhi.

## Hambisa izindonga ngebanga

- `WALLDIM`: chofoza isilinganiso somugqa noma esihambisanayo esiqala kodonga siye kwelinye, bese uthayipha inani elisha. Udonga osekugcineni ogalelekile ushintsha ngokuqondile kwalo, udonga osekuqaleni uyahlala, nezindonga ezixhunyiwe kulo ziyalandela.
- `WALLOFFSET` (`WO`): chofoza udonga, bese uhlangothi okufanele uhanjiswe kulo (`D` ithayipha ibanga, `C` yenza ikhophi esikhundleni).
- `WALLSTRETCH`: iwindi lapho kuzungezwe iziphetho zodonga, bese iphoyinti lesisekelo nelesibili.
- Ku-Properties, {{ui:Ubude}} obuthayipha bugcina ukuqala futhi buthathe nodonga oxhunyiwe ekugcineni nalo, kanti {{ui:Ukujula}} okusha kukhula kusuka ku-{{ui:Umugqa wendawo}} okhethile (uhlangothi lwesobunxele, uhlangothi lwesokudla noma phakathi).

## Khiya izindonga

Ukukhiya kuhlala nendonga efayeleni. Uma ushintsha udonga oyedwa okhiyiwe, oluhlobene nalo luyalandela. Uma ushintsho olulodwa lusuka ngezindlela ezahlukene ezindongeni zombili, luyenqatshwa futhi akukho okushintshayo.

- `WALLHOLD`: khiya udonga kodonga oluthile. `A` uwuhambisa phezu komugqa wodonga olunye kuqala, `K` ugcina ibanga elinalo.
- `WALLHOLDDIM`: khiya ibanga phakathi kwezindonga ezimbili ezilinganayo.
- `WALLGRID`: khiya udonga kumugqa wegridi (umugqa ongqimbeni yegridi nethegi yawo embhalweni ekugcineni kunye), noma ngokuwuhambisa nawo, noma nesiphetho sawo kuwo. Udonga okhiyelwe ngomugqa ugcina ibanga alinalo kuwo. Uma umugqa wegridi uhanjiswa nge-`GRIDMOVE`, udonga uyahamba ngokugcwele, nezindonga ezixhunyiwe kuwo. Udonga oluhlezi ngokuqondile komugqa wegridi luhamba lonke nawo ngisho nangaphandle kokukhiya, kanti udonga oluphela kuwo kuphela luyelulwa yileso siphetho.
- `WALLHOLDS` ibala ukukhiya. `WALLUNHOLD` isusa ukukhiya kudonga.
- Ukukhiya ngakunye kubonisa isikhiye esincane esiphephe: eceleni kwaphakathi kodonga okhiyiwe, noma eceleni kwesiphetho esikhiywe emgqeni wegridi. Chofoza isikhiye ukuze ususe ukukhiya kwaleyo ndawo.

## Okungakakhiphi

Ukukhiya kusebenzisa imigqa emaphakathi yezindonga. Izindonga lapha azinazo izingqimba, ngakho akukho sinqumo sengqimba esiphambanweni, futhi izindonga azigobi (bona ama-arc ngenhla). Akekho okhe wazama lawa mathuluzi emdwebeni omkhulu, futhi awakahlolwa kwenye i-program ye-CAD.
