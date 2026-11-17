---
title: Okusha ku-0.9
summary: Imigqa yokufiphaza elandela umkhawulo wayo, amaqembu ezingqimba, amaphansi agxiliwe, izindonga ezihlakaniphile ze-2D, iminyango namawindi, izitayela zombhalo nomhleli wombhalo ohlelekile, umugqa womyalo ohamba phezu, ukubamba kugridi, izindlela eziyishumi zokudweba i-arc, kanye nephaneli yamadokhumenti.
keywords: okusha, 0.9, amanothi okukhishwa, irekhodi lezinguquko, hatch, imigqa yokufiphaza exhunyiwe, hatchedit, ifayela le-pat, ifayela lephethini, amaqembu ezingqimba, laygroup, amaphansi, amaphansi agxiliwe, floorlayers, izindonga ezihlakaniphile, udonga, umnyango, iwindi, amathuluzi edonga, isitayela sombhalo, isitayela, umhleli we-mtext, umbhalo wesigatshana, ifomethi, umugqa womyalo ontanto, umugqa womyalo, indawo ephezulu, ekhompakthi, ukubamba kugridi, ukubamba kugridi, f9, arc, ipanele lamadokhumenti, phuma, amakhulu ensimbi yase-UK, draw.io, umbhalo waseThai, dxf r12, okusha, okusha, amanothi okukhishwa, izinguquko, 0.8, 0.8.1, inguqulo, izici ezintsha, autocomplete, isithunzi, tab, sketchfix, photosketch, autosheet, imininingwane, gridmove, autodim, amathegi, redline, hlanganisa, git, fossil, ukufinyelela, ukudweba ngaphandle kokubona, isifundi sesikrini, limits, izikhombisi-ndlela, aunits, shx, idayagremu, ole, umlando, qhathanisa, ngamazwi, izakhiwo, amafiti namayinshi, stretch, izilimi, amadivayisi okufaka, izinkinga, okuphilayo, abasizi
from: 8b6dea0b
---

Lokhu yikho okushintshile ku-CadCraft 0.9, uma kuqhathaniswa no-0.8.1. I-CadCraft iyi-app yokudweba ye-2D ne-3D ye-CadCraft Studio 0.9 nezinhlelo zayo eziyisishiyagalombili. Ye-0.9 iqeda ukudweba kwepulani, yengeza izitayela zombhalo nomhleli wombhalo wangempela, futhi ikunika indawo eningi esikrinini.

## Okusha

### Ukudweba kwepulani

- **Imigqa yokufiphaza elandela umkhawulo wayo.** {{cmd:HATCH}} ixhumanisa nento eyibophayo. Hambisa, zungezisa noma ushintshe usayizi womkhawulo, bese imigqa yokufiphaza nephethini yayo iyalandela; uyiguqule ukwakheka, bese imigqa yokufiphaza iyabalwa kabusha. {{cmd:HATCHEDIT}} (`HE`) iguqula imigqa yokufiphaza ngemva kwalokho futhi yenza noma iqede ukuxhumana. Bona [Imigqa yokufiphaza nezindawo ezigcwaliswayo](topic:hatch).
- **Amafayela ephethini yokufiphaza.** Ku-umbuzo ka-{{cmd:HATCH}} othi `Pick internal point`, bhala `F` (Ifayela lephethini) bese ukhetha ifayela `.pat`. Kuphela amafayela abhalwe ngefomethi evamile ahlolwe.
- **Amaqembu ezingqimba.** Ku-{{ui:Tools}} ephaneli ye-{{ui:Layers}}: {{ui:New group}}, {{ui:Add ready-made groups}}, {{ui:Group by name}} kanye {{ui:Find a layer}}; noma bhala {{cmd:LAYGROUP}} (`LG`). Bona [Hlela umdwebo ngezingqimba](topic:layers#group-layers).
- **Amaphansi agxiliwe.** {{cmd:FLOORS}} (`FLR`), noma {{ui:Floors…}} kumenyu ye-{{ui:More}} eqenjini le-{{ui:View}}. Indawo yokubuka ephepheni ingabonisa iphansi elilodwa ngaphansi kwe-{{ui:Floor shown}} ku-Izakhiwo. {{cmd:FLOORLAYERS}} iguqula amaphansi ibe yizingqimba lefayela eliya komunye umuntu. Bona [Hlanganisa amaphansi kumdwebo owodwa](topic:floors).
- **Izindonga ezihlakaniphile ze-2D, iminyango namawindi.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) kanye {{cmd:DELOPENING}}. Amakhona, ukuhlangana okuyi-T nokuqhubeka kwemigqa kubalwa ngokuzenzakalelayo. Izindonga zigcina irekhodi lokuthi ziyahlangana kanjani, futhi i-Izakhiwo ithola i-Vimbela ukuhlangana ekuqaleni / ekugcineni, umugqa we-Indawo kanye ne-Ubude ongahlelwa. Bona [Dweba izindonga, iminyango namawindi ze-2D](topic:walls-2d).
- **Ithuluzi lodonga kuzindonga zepulani.** Bhala {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} nokunye. Azikabi namaconi amathuluzi okwamanje. Bona [Izimo zezindonga, ukusikwa, ukuthuthelwa nokukhiyelwa kwezindonga ze-2D](topic:wall-tools-2d).

### Umbhalo

- **Izitayela zombhalo.** {{cmd:STYLE}} (`ST`), noma {{ui:Text style}} kwithuluzi le-{{ui:Draw}}: izitayela ezinamagama anefonti, ukuphakama, isilinganiso sobubanzi kanye nokuthambeka. Bona [Setha ifonti nosayizi wombhalo ngezitayela zombhalo](topic:text-styles).
- **Umhleli wombhalo wesigatshana ohlelekile.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} noma ukuchofoza kabili kumbhalo kuvula ibhokisi enefonti, usayizi, okuqinile, okuthambekile, okugcizelelwe, okuhuqwe, umbala, ukuhlelwa kanye nezimpawu ze-degree, plus-minus nobubanzi, kanye ne-{{ui:OK}} ne-{{ui:Cancel}}. Bona [Yakha ifomethi yombhalo wesigatshana](topic:format-paragraph-text).
- **Idayagremu evela ku-XML ye-draw.io.** {{cmd:DIAGRAM}} (`T2D`) iphinde ifunde i-XML ye-draw.io ekopishiwe. Bona [Dweba idayagremu evela kumbhalo](topic:text-to-diagram).
- **Umbhalo waseThai kupuloti ye-PDF.** Wawubonakala njengemibuzo ngaphambili.

### Indawo eningi nezisizo zokudweba

- **Umugqa womyalo ohamba phezu kanye nendawo ephezulu emfushane.** Donsa isibambo somugqa womyalo ukuze uwuhambise phezu, donsa umphetho wawo ophezulu ukuze ube nemigqa emincane, {{key:F2}} ivula umlando. {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Command line}} nezinketho zendawo ephezulu zinezilungiselelo ezifanayo. Bona [Izilungiselelo](topic:settings#command-line).
- **Imenyu yokubamba into.** Chofoza ngesokudla ku-{{ui:Snap}} kubha yesimo, noma bhala {{cmd:OSNAP}}.
- **Ukubamba kugridi.** Inkinamba {{ui:Grid snap}} kubha yesimo, noma {{key:F9}}: amaphoyinti akhethiwe aya kophoyinti begridi oseduze uma ukubamba into kungakabambi iphoyinti.
- **I-arc ngendlela eyishumi, kanye ne-Continue.** {{ui:Arc}} kwithuluzi le-{{ui:Draw}} noma {{cmd:ARC}}: ngamaphoyinti angu-3, umndeni we-Start/Center/End, umndeni we-Center/Start/End, kanye ne-Continue (cindezela {{key:Enter}} kuphoyinti lokuqala) kusukela komugqa, i-arc noma i-polyline yokugcina.
- **Iphaneli yamadokhumenti.** {{cmd:DOCUMENTS}} (`DOCS`) noma {{ui:Documents…}} kumenyu ye-{{ui:More}} eqenjini le-{{ui:View}}: ukubuyekezwa, isimo kanye nokuphuma kuwo wonke amadrowing esikhwameni sephrojekthi. Ivula njengengxoxo ephakathi nendawo. Bona [Amadokhumenti](topic:documents).

### Amafayela

- **Amasayizi ensimbi yase-UK.** Izigaba ezingu-976 kuPhaneli Yokujwayelekile, zibhalwa njengoba zibonakala kumadrowing (isibonelo `305x165x40 UB`).
- **Amaphakheji ase-South Africa** (imikhuba yokudweba nemithetho yokwakha) njengamaphakheji e-add-on ethi Building regulations. Izinombolo azikahlolwa.
- **Ama-add-on we-CadCraft,** engezwa uma kudingeka futhi avalwe ngokuzenzakalelayo: ukuklanywa kokukhanya ngaphakathi, ukuklanywa kwe-chip (HDL kuya ku-layout), ukugawula kwerawutha, ukulingisa kwesekethe, ama-sprocket echain yerola kanye namaphakheji ezwe e-Building regulations.

## Okulungisiwe

- Ukuhambisa, ukuzungezisa noma ukushintsha usayizi wohlaka lokufiphaza kushiye iphethini yawo emuva.
- {{cmd:GRIDMOVE}} ihambise wonke udonga wepulani oqala kuphela emugqeni wegridi. Udonga sekuhlolwa ngokuphela kwawo.
- Igridi ibonise kuphela ngaphakathi kwemikhawulo yedrowing, nangemikhawulo ivaliwe.
- Uhlu lwamabhlokhi kuphaneli eseceleni iyaskrola, futhi igama elingeyona ibhlokhi lidweba uhlu lwamabhlokhi aqala ngalo ("Ingabe ubuhlose").
- Amafayela e-DXF R12 e-AutoCAD ayenqaba ("Unknown group 1001 for table") manje avula lapho.
- Amafayela amakhulu kakhulu (cishe amaentithi angu-70,000 nangaphezulu) ayehluleka ukuvula nge "Maximum call stack size exceeded".
- Amafayela e-DWG ase-AutoCAD 2018 nangemva kwawo, anenguqulo ephezulu yokugcinwa, ayehluleka ukuvula nge "bad BITLONG code 11".
- Ebhokisini lombhalo wesigatshana, usayizi omusha obhalwe kwingxenye ekhethiwe ugcina ukukhethwa.

## Kuzo zonke izinhlelo

Amathiphu e-Bootstrap kuyo yonke ikhontrola enesiqondiso, ithiphu lokuqala onganqamula, izikhala zamathebhu eziskrolayo lapho zingalingani, nesihloko sethebhu yesiphequluli esilandela idrowing evulekile (`<drawing> - CadCraft | CadCraft`). {{ui:Settings}} › {{ui:Layout}} manje ililisi eliphansi lezinketho ezinemigqa emibili. Uhlu lwezilimi ku-{{ui:Settings}} lude kunakwe-0.8. Ukuhlelwa okubambisene okuphilayo, amaqoqo e-Library kanye nezinhlelo zesisindo nezokushisa kuchazwe ezingqapheleni ze-Studio.

## Imikhawulo eqinisekile

- Umbhalo wesigatshana awunalo uhlu lwamabhulethi noma olunombolo, umbusi wethebhu noma ukulinganisa. Amafayela e-PDF aphlotiwe asetha umbhalo nge-Helvetica.
- Izindonga zepulani ziqonde, ngakho i-arc idwetshwa njengezindonga ezimfushane. Ukuhlolwa komphakathi ngesandla kwethuluzi lodonga kusalindile.
- Amaqembu ezingqimba akabhalwa efomethini ye-AutoCAD ngokwayo, ngakho i-AutoCAD ibonisa uhlu olulodwa. Ezinye izinhlelo zibonisa wonke amaphansi ndawonye, ngaphandle uma usebenzisa {{cmd:FLOORLAYERS}}.
- Iphaneli yamadokhumenti ayikahlolwa ngabantu ababili kukhomba wokwabelana wangempela. Ukugawula kwerawutha akukaqhutshwa kunoma yimuphi umshini wangempela. Isilinganiso sokukhanya sahlolwa ngokulandelwa kwe-photon, hhayi ngenye inhlelo. Ama-add-on obunjiniyela ayizisizo zokuhlola, hhayi indawo yokubuyekezwa ngunjiniyela.
- Izilimi ngaphandle kwesiNgisi ziyizinguqulo zomshini, futhi amanye amagama amasha ayesiNgisi kuphela.

## Ngaphambili: 0.8 kanye no-0.8.1

Lokhu yikho okushintshile ku-CadCraft 0.8 nango-0.8.1, uma kuqhathaniswa no-0.7. I-0.8 (1 Novemba 2026) yengeza izisizo zokudweba ezisebenza ngomdwebo wakho, ngemithetho esikhompyutheni yakho futhi ngaphandle kwemodeli, kanti i-0.8.1 (2 Novemba 2026) ilungisa izinkinga ezibikwe emva kwayo.

### Okusha

**Ukudweba okuqeda umcabango wakho**

- **Isithunzi sibonisa okuzayo.** Lapho ingekho komyalo osebenzayo, isithunzi esimnyama esinemigqa esikiwe sibonisa okushiwo yizicwecwe zomdwebo wakho: insika elandelayo ngokusondelana okufanayo, isinyathelo esilandelayo sesitebhisi, udonga osilahlekile ekamelweni. Cindezela {{key:Tab}} ukuze usidwebe njengesinyathelo esisodwa sokuhlehlisa, noma {{key:Esc}} ukuze usicime. Sibheka kuphela izinto ezisha kakhulu, ngakho sihlala sibushelelezi emdwebeni omkhulu. Vala kuzilungiselelo ze-{{ui:Settings}} › {{ui:CadCraft}} noma ngomyalo {{cmd:AUTOCOMPLETE}} `Off`.
- **Iphoyinti elilandelayo lapho udweba umugqa.** Phakathi kwe-{{cmd:LINE}} noma {{cmd:PLINE}} isithunzi siyiphoyinti elilandelayo: isinyathelo esilandelayo sesitebhisi, ikhona yesine yesikwele, noma iphoyinti elivala kona. Sondeza isikhombi kuso bese ucindezela {{key:Tab}}, njengoba ubuchofoze khona.
- **Imizwa yepeni iba yijometri echanekile.** {{cmd:SKETCHFIX}}: dweba imigqa engagqamile ngepeni, imbewu noma umunwe, bese ngayinye iba umugqa ohlanzekile, isiyingi, i-arc, isikwele noma i-polyline, ehlanganiswe nento esevele idwetshiwe. Bona [Dweba ngepeni uthole ijometri echanekile](topic:sketch-with-a-pen).
- **Isithombe somzwa siba umdwebo.** {{cmd:PHOTOSKETCH}} (`PSK`) ithola iphepha esithombeni, iqondise ukubonakala, isebenzise usayizi wephepha nesilinganiso osinikezayo, bese ilandela imigqa yepeni ibe isendlalelo ngesisodwa sombala ngamunye wepeni. Umbhalo awulandelwa.
- **Yenza izilinganiso ngemithetho.** {{cmd:AUTODIM}} (`ADIM`) yenza amaketango ezilinganiso eduze kwezinhlangothi ozikhethile, usayizi ophelele, ububanzi bokuvulwa, ububanzi bezimbobo kanye, nge-`Grid`, ukuhlukana kwegridi. Ayiphindi isilinganiso esesivele sikhona.
- **Hambisa umugqa wegridi, nesethi iyalandela.** {{cmd:GRIDMOVE}} (`GM`): izindonga ezigcina ngomugqa wegridi zolulela nawo, ezidlula kuwo, izinsika, ibhamuza lawo nethegi ayahamba, nezilinganiso kuwo zilinganisa ukuhlukana okusha. Isinyathelo esisodwa sokuhlehlisa.

**Amashidi, imininingwane namathegi**

- **Amashidi azilungisa ngokwawo.** {{cmd:AUTOSHEET}} ithatha imibono yakho egameke (noma izingxenye ezihlukene zemodeli), ikhethe usayizi wephepha kanye nesilinganiso esijwayelekile, ibeke imibono ezitsheni ezintsha ngebhulokhi lesihloko kanye nombhalo wegama nesilinganiso. Konke kuhlala kuhlelekile. Bona [Lungisa amashidi ngami](topic:lay-out-sheets-for-me).
- **Imininingwane yefemu yakho, enikezwa ngesikhathi udweba.** {{cmd:DETAILS}} (`DET`) igcina amabhlokhi emininingwane yakho. Lapho okukhethile kufana nelinye ngamagama asemagameni ezingqimba, amagama amabhlokhi namanothi, ibha yesimo iyasho; ukhetha wona bese uwubeka. {{cmd:DETAILS}} › Share ibeka uhlu lwakho kufolda yakho yamadokhumenti futhi ilethe lokho ithimba lakho elikungezile. Izilungiselelo zicima izinkomba.
- **Amathegi ezibhlokhi.** {{cmd:TAGS}} ichaza ithegi (uhlobo lwalo, amanani angathatha, amabhlokhi asebenza kuwo), iyibeka kumareferensi ezibhlokhi okhethile, futhi iwabhala njengohlu lwesikhathi olungagcinwa njenge-CSV. Izincazelo zigcinwa ku-DWG. Bona [Amathegi](topic:tags).
- **Imikhawulo yomdwebo.** {{cmd:LIMITS}} isetha unxantathu womdwebo: igridi iwugcwalisa, futhi i-zoom All iwubonisa. Imikhawulo ibonakala njengomkhawulo futhi igcinwa ku-DWG ne-DXF, kanye nemikhawulo yephepha. Bona [Setha imikhawulo yomdwebo](topic:drawing-limits).

**Ukusebenza nabanye abantu nezinye izinhlelo**

- **Guqula i-markup ibe inguqulo.** {{cmd:REDLINE}} ifunda iphakheji elibhalwa yi-MarkupCraft futhi ibhale yonke inguquko. Yamukela noma yenqabe ngayinye ngenothi; ezamukelwe zithola ifu lokubuyekezwa kanye nelogi yokubuyekezwa esinyathelweni esisodwa sokuhlehlisa, futhi ulondoloza ifayela lezimpendulo elivala ama-markup ku-MarkupCraft. Bona [Guqula i-markup ibe inguqulo](topic:redline-to-revision).
- **Amadrowing agxilwe ngu-git no-Fossil.** Uma i-{{ui:Merge-friendly files}} ivuliwe ku-{{ui:Settings}} › {{ui:CadCraft}}, yonke into ithola ukhiye ongaguquki (amafayela angaba ngu-10 phesenti abe mkhulu). Umyalo othi `cadcraft merge base ours theirs` bese uhlanganisa ukuhlelwa kwabantu ababili kwe-DWG noma i-DXF into ngento bese ubika kuphela lapho abantu ababili beguqule into efanayo khona. Bona [Hlanganisa ukuhlelwa kwabantu ababili kumdwebo owodwa](topic:merge-drawings).
- **Okushintshile, ngamazwi.** Kuthi-Umlando, Qhathanisa inikeza uhlu olulula: lapho izinto zishintshe khona, izindawo zinkulu kangakanani, okungezwe, okususiwe noma okushintshiwe, kanye nombhalo oguqulwe. Bona [Chaza ngamazwi okushintshile](topic:changes-in-words).
- **Izikhombisi-ndlela nama-engeli.** Bhala indlela njengesikhombisi-ndlela somsindi sesisindo esifana ne-N45°23'30"E, noma ngamadigri, imizuzu nemizuzwana, noma yiliphi iphuzu lapho kubuzwa khona i-engeli; i-AUNITS isetha ukuthi ama-engeli abonakala kanjani. Bona [Bhala futhi ubonise izikhombisi-ndlela nama-engeli](topic:bearings-and-angles).
- **Amafonti wakho we-SHX.** Nikeza i-CadCraft ifolda yamafonti e-SHX futhi izitayela zombhalo ezibiza kuwo zidwetshwa kuwo, esikrinini nasezinhlelweni zokuphrinta. Bona [Dweba umbhalo ngamafonti wakho e-SHX](topic:shx-fonts).
- **Idayagremu evela kumbhalo.** {{cmd:DIAGRAM}} ifunda ichart yokugeleza ye-Mermaid, ichart yezingxenye ye-PlantUML, i-D2 noma uhlu lokusuka-kuya-kulo, bese idweba amabhlokhi nezixhumanisi ongazihlela. Bona [Dweba idayagremu evela kumbhalo](topic:text-to-diagram).
- **Izinto ze-OLE ku-DWG.** {{cmd:OLELIST}} ilanda izinto ze-OLE ezithwele i-DWG ezingabekwa yi-CadCraft ngokwayo, bese ibeka ikhophi yesithombe lapho uthi khona. Bona [Izithombe](topic:pictures#objects-from-other-programs-ole).
- **Izibalo zakho zihlala nomdwebo.** Amashidi wokubala nezizathu zokuklama zigcinwa ku-DWG kanye nethebhu yamaklasi.

**Ukudweba ngaphandle kokubona**

- Vula i-{{ui:Drafting without sight}} ku-{{ui:Settings}} (noma bhala {{cmd:ACCESS}} bese uphendula `On`). I-CadCraft ishumayela yonke umyalo nemiphumela ngesifundi sesikrini sakho, ichaza umdwebo nalokho okuseduze kwesikhombi, ikuvumela ukuthi uhambise isikhombi bese ukhetha amaphoyinti ngekhibhodi, futhi idlala umsindo ku-snap ngayinye ne-grip ngayinye. Lapho isiphequluli sakho sihlonipha ukukhuluma kwekhompyutha yakho, imiyalo ingashiwo ngomlomo. Bona [Dweba ngaphandle kokubona](topic:draft-without-sight).

**Kuzo zonke izinhlelo**

- **Izilimi.** Izilimi ezingu-54; eziyishumi ziyasha (isiLithuania, isiLatvia, isiBosnia, isiMarathi, isiTelugu, isiAlbania, isiAfrikaans, isiFilipino, isiSwahili, isiUzbek). Izilimi ezingaphezu kwesiNgisi ziyizinguqulo zomshini kuze kufunde umuntu ozalelwe kuzo.
- **Amadivayisi okufaka.** Ukuthinta kwepedi, ipeni, imbewu ye-3D, isilawuli somdlalo kanye nezilawuli ze-MIDI.
- **Imigqa yamathuluzi kanye ne-property grid.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} inikeza i-Wrap, imigqa engu-2 noma umugqa ongu-1 kwezinye izinhlelo. I-CadCraft igcina isilungiselelo sayo ku-{{ui:Settings}} › {{ui:CadCraft}} (bona [Imigqa yamathuluzi](topic:settings#toolbar-rows)). I-property grid evamile itholakala ezinhlelweni ezintathu ezingeyona i-CadCraft.
- **Izinkinga, i-Live nama-add-on.** Iphaneli yezinkinga evamile exwayisa kuzo zonke izinhlelo, ukubuka okuphilayo kokuthi ubani usephi ku-CadCraft Studio (bona [Sebenza ngomdwebo munye ndawonye](topic:work-live)), kanye nohlu lwama-add-on.
- **Xhuma i-AI yakho.** Ukuxhumana okukodwa ku-CadCraft Studio kuzo zonke izinhlelo eziyisishiyagalombili, nezinga elifundekayo kuphela, elincoma noma elihlela ngayinye, nelogi yamagama alula yalokho umsizi akwenzile. I-CadCraft ayinayo i-AI yayo, futhi u-Ask kuzo zonke izinhlelo usebenzisa i-AI oyixhumayo.

### Okulungisiwe ku-0.8.1

- **Izici zabonisa u-150 esikhundleni se-12'-6"** kumadrowing amafiti namayinshi. Izinkambu ezifundwa yi-app ngokwayo ziyagcina umbhalo wazo futhi.
- **Amafayela e-DWG ahlu lwamaklasi wawo ufundwe njengohlobo olungalungile** (i-GitHub cadcraft#5) manje ayavula kahle.
- **I-crosshair ayisabonakali ngemuva kwamawindi amancane.**
- **I-Studio nezinguqulo ezipakishiwe zingashintsha ulimi ngesikhathi esisebenzayo.** Ngaphambili bekuyisiNgisi kuphela. Akukahlolwa kuzo zonke izinkundla: sitshele uma ulimi lungashintshi.
- **Amathebhulethi ngokuma** anikeza igridi ubude obusele kukhanvas, futhi imodi yamashidi iqala ngo-760 px noma ngaphansi.
- **I-STRETCH nefasitela elihlanganayo, ne-LIMITS,** zabikwa ku-Studio 0.8.0 futhi zase zilungile kwi-web build ye-0.8; umfakeli wombiko wayedala. I-Studio 0.8.1 inazo.

### Akukakabi kule nguqulo

- **I-0.8 ne-0.8.1 aziqinisekiswa ngekhodi.** I-Windows ingasixwayisa (khetha {{ui:More info}}, bese {{ui:Run anyway}}); ku-Mac, chofoza ngesokudla ku-CadCraft Studio bese ukhetha {{ui:Open}}. Izinguqulo zesitolo zimisiwe, futhi ukwakhiwa kwe-iPad ne-iPhone akuzange kwakhiwe kabusha ngo-0.8.1.
- **Imizwa yepeni nezithombe zemizwa** zihlolwe kuphela ngezithombe ezenziwe ngomuntu nembewu, hhayi ngepeni langempela, isikrini sokuthinta noma imizwa yesandla ephepheni.
- **Ukudweba ngaphandle kokubona** kuhlolwe ngezinhlolo ezizenzakalelayo, hhayi ngesifundi sesikrini noma umhloli oyisiphofu.
- **Ukwabelana ngemininingwane** akukaba nokuhlolwa kwabantu ababili, futhi ifolda ye-Team Cloud Plan njengefolda yamadokhumenti ayikakhiwa.
- **Ukuhlanganisa** kusebenza kumafayela e-DWG ne-DXF e-CadCraft; okufanayo kumafayela ezinye izinhlelo akukakhiwa.
- **Ukuhlehlisa kumawindi amaningi:** i-CadCraft ibika isinyathelo ngasinye esiqediwe, kodwa i-Studio ayinakho ukuhlehlisa okukodwa kuzo zonke izinhlelo; ngayinye ihlehlisa izinyathelo zayo.
- **Izinto ze-OLE ze-DWG** zigcinwa kodwa azidwetshwa endaweni yazo.
- **Ukufunda amatafula esitayela sephlothi (amafayela e-CTB)** ezinhlelweni zabanye kwakhiwe kodwa akukahlolwa ngefayela elivela kwenye inhlelo.
- **Xhuma i-AI yakho:** ukuxhuma ngokuchofoza kube kodwa ku-Studio, isixhumi esiqhubekayo se-AI yesiphequluli, okhiye bakho be-API ngaphakathi kwe-Studio kanye nephakheji ye-MCP eshicilelwe akudingekile kule nguqulo.

Ngenguqulo edlule, bona [Okusha ku-0.7](topic:whats-new-0-7).
