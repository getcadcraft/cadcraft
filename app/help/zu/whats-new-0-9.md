---
title: Kusho ukuthini ku-0.9 (kwangaphambili)
summary: Ama-hatch alandela umngcele wawo, amaqembu ezingqimba, amaphansi azungezayo, udonga olusha ne-2D nezinmnyango namawindi, izitayela zombhalo nomhleli wombhalo wendima, umugqa womyalo ofloatayo, ukubamba igridi, izindlela eziyishumi zokudweba umnsalo, nephaneli yamadokhumenti.
keywords: kusho ukuthini ku-0.9, uhlelo olwedlule, kusho ukuthini, 0.9, amanothi okukhishwa, hatch, ihatch exhunyiwe, hatchedit, ifayela le-pat, iphethini yefayela, amaqembu ezingqimba, laygroup, amaphansi, amaphansi azungezayo, floorlayers, udonga olusha, udonga, umnyango, iwindi, amathuluzi odonga, izitayela zombhalo, umhleli wombhalo, umbhalo oqinile, umugqa womyalo ofloatayo, phezulu, ekhompakthi, ukubamba igridi, f9, umnsalo, iphaneli yamadokhumenti, sika, i-uk, draw.io, umbhalo wesi-thai, dxf r12, izinto ezintsha, 0.8, 0.8.1, inguqulo, izici ezintsha, autocomplete, isithunzi, tab, sketchfix, photosketch, autosheet, imininingwane, gridmove, autodim, amathegi, redline, hlanganisa, git, fossil, access, ukudweba ngaphandle kokubona, limits, izikhombisi-ndlela, aunits, shx, diagram, ole, umlando, qhathanisa, ngamagama, izakhiwo, izinyawo namaintshi, stretch, izilimi, amadivayisi okufaka, izinkinga, live, abasizi
from: 3451e64c
---

Lokhu yikho okushintshe ku-CadCraft 0.9, uma kuqhathaniswa ne-0.8.1. I-CadCraft iyi-app yokudweba ngo-2D nango-3D ye-CadCraft Studio 0.9 nezinhlelo zayo eziyisishiyagalombili. I-0.9 iqeda ukudweba kwezakhiwo ezingaphezulu, yengeza izitayela zombhalo nohlelo lombhalo langempela, futhi inikeza indawo eningi esikrinini.

## Okusha

### Ukudweba kwezakhiwo

- **Ama-hatch alandela umngcele wawo.** I-{{cmd:HATCH}} ixhumana nalokho okuyibophayo. Hambisa, phendula noma ukhulise umngcele bese i-hatch nephethini yayo iyalandela; yenze kabusha bese i-hatch iyabalwa kabusha. I-{{cmd:HATCHEDIT}} (`HE`) iyashintsha i-hatch ngemva kwalokho futhi yenza noma iphelise ukuxhumana. Bheka [Izindawo zokugcwalisa ne-hatch](topic:hatch).
- **Amafayela wephethini ye-hatch.** Embuzweni we-{{cmd:HATCH}} `Pick internal point`, bhala `F` (Pattern file) bese ukhetha ifayela le-`.pat`. Kuzanywe kuphela amafayela abhalwe ngefomethi ejwayelekile.
- **Amaqembu ezingqimba.** Ku-{{ui:Amathuluzi}} ephaneli ye-{{ui:Izingqimba}}: {{ui:Iqembu elisha}}, {{ui:Engeza amaqembu alungiselelwe}}, {{ui:Hlanganisa ngegama}}, nale {{ui:Thola ungqimba}}; noma bhala {{cmd:LAYGROUP}} (`LG`). Bheka [Hlela umdwebo ngezingqimba](topic:layers#group-layers).
- **Amaphansi azungezayo.** {{cmd:FLOORS}} (`FLR`), noma i-{{ui:Amaphansi…}} emenyini ye-{{ui:Okuningi}} eqenjini le-{{ui:Ukubuka}}. I-viewport esheetini ingabonisa iphansi elilodwa ngaphansi kwe-{{ui:Iphansi elibonisiwe}} ku-Properties. I-{{cmd:FLOORLAYERS}} iguqula amaphansi abe yizingqimba ifayela eliya komunye umuntu. Bheka [Gcoba amaphansi kumdwebo owodwa](topic:floors).
- **Udonga, izinmnyango namawindi ahlakaniphile nge-2D.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) ne-{{cmd:DELOPENING}}. Amakhona, ukuhlanganiswa kwe-T nokuwela kuqinisekiswa ngawe. Udonga ugcina irekhodi lokuthi luhlangana kanjani, futhi ku-Properties kukhona Vimbela ukuhlanganiswa ekuqaleni / ekugcineni, umugqa wendawo nobude obuhlelekayo. Bheka [Dweba udonga, izinmnyango namawindi nge-2D](topic:walls-2d).
- **Ithuluzi lodonga emidwebeni yezakhiwo.** Bhala {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} nezinye. Azikabi nezinkinobho zethuluzi. Bheka [Izimo zodonga, ukusikwa, ukuthambisa nokukhiya kodonga lwe-2D](topic:wall-tools-2d).

### Umbhalo

- **Izitayela zombhalo.** I-{{cmd:STYLE}} (`ST`), noma i-{{ui:Isitayela sombhalo}} ethuluzini le-{{ui:Dweba}}: izitayela ezinamagama anohlobo lwefonti, ukuphakama, isilinganiso sobubanzi nokuthambekela. Bheka [Setha ifonti nosayizi wombhalo ngezitayela zombhalo](topic:text-styles).
- **Umhleli wombhalo wendima ohlelekile.** I-{{cmd:MTEXT}}, i-{{cmd:TEXTEDIT}} noma ukuchofoza kabili kumbhalo kuvula ibhokisi elinefonti, usayizi, obukhulu, obuthambekile, umugqa ophansi, umugqa ophakathi, umbala, ukulinganiswa nezimpawu zedigri, ezokuhle-nokubi nobubanzi, kanye ne-{{ui:KULUNGILE}} ne-{{ui:Khansela}}. Bheka [Hlela umbhalo wendima](topic:format-paragraph-text).
- **Idayagrama kusuka ku-XML ye-draw.io.** I-{{cmd:DIAGRAM}} (`T2D`) ifunda futhi i-XML ye-draw.io ehlanganisiwe. Bheka [Dweba idayagrama kusuka kumbhalo](topic:text-to-diagram).
- **Umbhalo wesi-Thai ekushicilelweni kwe-PDF.** Kwakhuphuka njengezimpawu zombuzo ngaphambili.

### Indawo eningi nezinsiza zokudweba

- **Umugqa womyalo ofloatayo, ongaba mncane nendawo ephezulu ekhompakthi.** Donsa isibambi somugqa womyalo ukuze uwufloate, donsa umphetho wawo ophezulu ukuze uthole imigqa emincane, i-{{key:F2}} ivula umlando. I-{{ui:Izilungiselelo}} › {{ui:CadCraft}} › {{ui:Umugqa womyalo}} nokukhetha kwendawo ephezulu kunezilungiselelo ezifanayo. Bheka [Izilungiselelo](topic:settings#command-line).
- **Imenyu yokubamba izinto.** Chofoza ngesokudla {{ui:Bamba}} kwibha yesimo, noma bhala {{cmd:OSNAP}}.
- **Ukubamba kugridi.** Inkinobho ye-{{ui:Ukubamba kugridi}} kwibha yesimo, noma {{key:F9}}: amaphoyinti akhethiwe aya kuphoyinti legridi eliseduze uma ukubamba into kungathathanga iphoyinti.
- **Umnsalo ngezindlela eziyishumi, nokuQhubeka.** I-{{ui:Umnsalo}} ethuluzini le-{{ui:Dweba}} noma i-{{cmd:ARC}}: amaphoyinti-3, umndeni we-Start/Center/End nomndeni we-Center/Start/End, nokuQhubeka (cindezela {{key:Enter}} ephoyinteni lokuqala) kusuka emugqeni wokugcina, kumnsalo noma kuphola-layini.
- **Iphaneli yamadokhumenti.** I-{{cmd:DOCUMENTS}} (`DOCS`) noma i-{{ui:Amadokhumenti…}} emenyini ye-{{ui:Okuningi}} eqenjini le-{{ui:Ukubuka}}: ukubuyekezwa, isimo nokuphuma kwawo kuwo wonke umdwebo kufolda yephrojekthi. Ivula njengexoxo elimaphakathi. Bheka [Amadokhumenti](topic:documents).

### Amafayela

- **Usayizi wensimbi wase-UK.** Izigaba ezingu-976 ephaneli ye-Standard, zibhalwa njengasemidwebeni (isibonelo `305x165x40 UB`).
- **Amaphakheji aseNingizimu Afrika** (ukudweba nemithetho yokwakha) njengamaphakheji we-add-on yemithetho yokwakha. Izinombolo azikaqinisekiswa.
- **Ama-add-on we-CadCraft,** angezwa uma kudingeka futhi avaliwe ngokuzenzakalelayo: ukuklanywa kokukhanya kwangaphakathi, ukuklanywa kwe-chip (HDL kuya kulayout), ukugawula kwerawutha, ukulingisa isekethe, amasilinda eketango lerola nama-country pack emithetho yokwakha.

## Okulungisiwe

- Ukuhambisa, ukuphendula noma ukukhulisa i-hatch kushiye iphethini yayo emuva.
- I-{{cmd:GRIDMOVE}} ithwale udonga lonke lezakhiwo olwaqala kumgqa wegridi kuphela. Udonga manje lunqunywa ngemiphetho yalo.
- Igridi libonise kuphela ngaphakathi kwemikhawulo yomdwebo nakuba imikhawulo ivaliwe.
- Uhlu lwamabhulokhi kuphaneli eseceleni iyascrolla, negama elingebhulokhi libhala amabhulokhi aqala ngalo ("Did you mean").
- Amafayela e-DXF R12 ayenqatshwa yi-AutoCAD ("Unknown group 1001 for table") manje avula lapho.
- Amafayela amakhulu kakhulu (cishe izinto ezingu-70,000 nangaphezulu) ayehluleka ukuvula ngo "Maximum call stack size exceeded".
- Amafayela e-DWG e-AutoCAD 2018 nakamuva anoguqulo oluphezulu lokugcinwa ayehluleka ukuvula ngo "bad BITLONG code 11".
- Kubhokisi lombhalo wendima, usayizi omusha obhalwe ngengxenye ekhethiwe ugcina ukukhetha.

## Kuyo yonke i-app

Amathiphu e-Bootstrap kuzo zonke izilawuli ezinesiqondiso, ithiphu lokuqala elingavalwa, amathebhu ascrolla lapho engalingani, nesihloko sethebhu le-browser esilandela umdwebo ovuliwe (`<drawing> - CadCraft | CadCraft`). I-{{ui:Izilungiselelo}} › {{ui:Isakhiwo}} manje iyi-drop-down yezinketho ezingumugqa wesibili. Uhlu lwezilimi ku-{{ui:Izilungiselelo}} lude kunalo lwe-0.8. Ukuhlelwa okuhlangene okuphilayo, amaqoqo omtapo nemigqa yesisindo nokushisa kuchazwe ezimeleni ze-Studio.

## Imikhawulo eqotho

- Umbhalo wendima awunalutho lwezinkamba noma izinombolo, umbusi wethebhu noma ukulinganisa. Ama-PDF ashicilelwe asetha umbhalo nge-Helvetica.
- Udonga lwezakhiwo luqondile, ngakho umnsalo udwetshwa njengodonga oluhlanganisiwe olufushane. Ukuhlolwa komphakathi kwethuluzi lodonga kusalindele.
- Amaqembu ezingqimba akabhalwa ngefomethi yomzimba we-AutoCAD, ngakho i-AutoCAD ibonisa uhlu olulodwa. Ezinye izinhlelo zibonisa wonke amaphansi ndawonye ngaphandle uma usebenzisa i-{{cmd:FLOORLAYERS}}.
- Iphaneli yamadokhumenti ayikahlolwa yizinsuku ezimbili esabelweni langempela. Ukugawulwa kwerawutha akukasebenzi kumshini wangempela. Ukulinganiselwa kokukhanya kuhlolwe ngokulandelela ama-photon, hhayi kolunye uhlelo. Ama-add-on obunjiniyela ngezisizo zokuhlola, hhayi isikhundla sokubuyekezwa ngunjiniyela.
- Izilimi ezingeyona isiNgisi ziyizinhlobo ezenziwe yimishini, futhi amanye amagama amasha akhona ngesiNgisi kuphela.

## Kwangaphambili: 0.8 no-0.8.1

Lokhu yikho okushintshe ku-CadCraft 0.8 no-0.8.1, uma kuqhathaniswa ne-0.7. I-0.8 (1 Novemba 2026) yengeza izisiza zokudweba ezisebenza kumdwebo wakho, ngemithetho ekhompiyutha yakho ngaphandle kwemodeli, ne-0.8.1 (2 Novemba 2026) ilungisa izinkinga ezibikwe ngemuva kwayo.

### Okusha

**Umdwebo oqeda umcabango wakho**

- **Isithunzi sibonisa okulandelayo.** Lapho kungekho myalo osebenza, isithunzi esingwegwe esinamachashaza sibonisa okuthi amaphethini omdwebo wakho athi yiyiphi into elandelayo: impondo elandelayo ngobude obufanayo, isinyathelo esilandelayo sesitebhisi, udonga olusilayo lwegumbi. Cindezela {{key:Tab}} ukuze usidwebe njengesinyathelo esisodwa sokuhlehlisa, noma {{key:Esc}} ukusicima. Sibheka kuphela izinto ezisha kakhulu, ngakho sihlala sibushelelezi emdwebeni omkhulu. Vala kwi-{{ui:Izilungiselelo}} › {{ui:CadCraft}} noma nge-{{cmd:AUTOCOMPLETE}} `Off`.
- **Iphoyinti elilandelayo lapho udweba umugqa.** Phakathi kuka-{{cmd:LINE}} noma {{cmd:PLINE}} isithunzi siyiphoyinti elilandelayo: isinyathelo esilandelayo sesitebhisi, ikhona lesine lonxantathu, noma iphoyinti elivala kuwo. Sondeza ikhesa eduze kwalo bese ucindezela {{key:Tab}}, njengoba ubuchofoze khona.
- **Izikethi zepeni ziba ijiyomethri echanekile.** {{cmd:SKETCHFIX}}: dweba izisiteroko ezinkulu ngepeni, ngemouse noma ngomunwe futhi ngalinye liba umugqa, indilinga, umnsalo, unxantathu noma iphola-layini ehlanzekile, ilingisiwe futhi ihlanganiswe nezinye. Bheka [Dweba ngepeni uthole ijiyomethri echaniwe](topic:sketch-with-a-pen).
- **Isithombe sesikethi siba ngumdwebo.** I-{{cmd:PHOTOSKETCH}} (`PSK`) ithola iphepha esithombeni, ilungisa umbono, isebenzise usayizi wephepha nesikali osinikezayo, futhi ilandelela imigqa yepeni ibe yisendlalelo ngasinye sombala wepeni. Imibhalo ayilandelelwa.
- **Linganisa ngemithetho.** I-{{cmd:AUTODIM}} (`ADIM`) yenza amaketango ezilinganiso ngezinhlangothi ozikhethayo, usayizi ojwayelekile, ububanzi bezivulo, ububanzi bezimbobo nokuthi, nge-`Grid`, ukubekwa kwemigqa yegridi. Ayiphindi isilinganiso esikhona.
- **Hambisa umugqa wegridi nesethi iyalandela.** I-{{cmd:GRIDMOVE}} (`GM`): udonga oluphela emgqeni wegridi luyasamba nawo, udonga oluhambisana nawo, izinsika, ibhabula layo nethegi zihamba, nezilinganiso ezisemgqeni zilinganisa ukubekwa okusha. Isinyathelo esisodwa sokuhlehlisa.

**Amashidi, imininingwane namathegi**

- **Amashidi azihlelela ngokwawo.** I-{{cmd:AUTOSHEET}} ithatha izibukwa zakho ezibizwa ngamagama (noma izingxenye ezihlukene zemodeli), ikhetha usayizi wephepha, inikeze yonke ingxenye isikali esijwayelekile, bese ibeka izibuko ezimigqeni emashidini amasha nesihloko nomkhanyiso ngaphansi kwesihloko nesikali. Okungafanele ishidi elilodwa lithola ishidi lalo. Bheka [Hlela amashidi ngami](topic:lay-out-sheets-for-me).
- **Imininingwane yehhovisi lakho, enikezwa uma udweba.** I-{{cmd:DETAILS}} (`DET`) igcina amabhulokhi emininingwane yakho. Uma okukhethiwe kuhambisana nelinye ngamagama alo ezingqimbeni, amagama ebhulokhi namanothi, isimo sibonisa lokho; yikhethe bese uyibeka. I-{{cmd:DETAILS}} › Share ibeka uhlu lwakho kufolda yamadokhumenti yakho futhi ilethe okungezwe yithimba lakho. Izilungiselelo zivala izinkomba.
- **Amathegi emabhulokhini.** I-{{cmd:TAGS}} ichaza ithegi (uhlobo lwalo, amanani avumelekile, amabhulokhi okusebenza kuwo), iyilungisele izinkomba zebhulokhi ozikhethile, futhi iziveza njengohlu lwesikhathi ongalilondoloza njenge-CSV. Izincazelo zigcinwa ku-DWG. Bheka [Amathegi](topic:tags).
- **Imikhawulo yomdwebo.** I-{{cmd:LIMITS}} isetha unxantathu womdwebo: igridi igcwalisa kuwo futhi i-zoom All iwubonisa. Imikhawulo ibonakala njengomugqa wangaphandle futhi igcinwa ku-DWG ne-DXF, kanye nemikhawulo yephepha. Bheka [Setha imikhawulo yomdwebo](topic:drawing-limits).

**Ukusebenza nabanye abantu nezinye izinhlelo**

- **Phendula ukumaka ibe ukubuyekezwa.** I-{{cmd:REDLINE}} ifunda iphakheji ebhalwa yi-MarkupCraft ibale zonke izinguquko. Vuma noma wenqabe ngalinye ngenothi; ezamukelwe zithola ifu lokubuyekezwa nelogi yokubuyekezwa ngesinyathelo esisodwa, futhi uyalondoloza ifayela lezimpendulo eliyivala izimaki ku-MarkupCraft. Bheka [Phendula ukumaka ibe ukubuyekezwa](topic:redline-to-revision).
- **Imidwebo ehlanganiswa yi-git ne-Fossil.** Uma i-{{ui:Amafayela ahlanganisekayo}} ivuliwe ku-{{ui:Izilungiselelo}} › {{ui:CadCraft}}, into ngayinye ithola ukhiye ongashintshi (amafayela akhula cishe ngamaphesenti ayi-10). I-`cadcraft merge base ours theirs` ihlanganisa ukuhlelwa kwabantu ababili kwe-DWG noma i-DXF into ngento futhi ibike kuphela lapho abantu ababili bashintshe into efanayo. Bheka [Hlanganisa ukuhlelwa kwabantu ababili komdwebo owodwa](topic:merge-drawings).
- **Okushintshile, ngamagama.** Ku-Histori, Compare inikeza uhlu olulula: lapho izinto ezishintshe khona, izindawo zazo zinkulu kangakanani, okungezwe, okususwe noma okushintshiwe, nombhalo oshintshiwe. Bheka [Chaza ngamagama okushintshile](topic:changes-in-words).
- **Izikhombisi-ndlela nezingosi.** Bhala ukuqondiswa njengesikhombisi-ndlela somsindisi sendawo njenge N45°23'30"E, noma ngamadigri, amaminithi namasekhondi, noma kuphi lapho kubuzwa khona ingosi; i-AUNITS isetha ukubonakala kwengosi. Bheka [Bhala futhi ubonise izikhombisi-ndlela nezingosi](topic:bearings-and-angles).
- **Amafonti akho e-SHX.** Nika i-CadCraft ifolda yamafonti e-SHX futhi izitayela zombhalo ezibiza wona azidwetshwa kuwo, esikrinini nasekushicilelweni. Bheka [Dweba umbhalo ngamafonti akho e-SHX](topic:shx-fonts).
- **Idayagrama kusuka kumbhalo.** I-{{cmd:DIAGRAM}} ifunda uchungechunge lwe-Mermaid, idayagrama yengxenye ye-PlantUML, i-D2 noma uhlu lokusuka-kuya-kokuthi, idwebe amabhulokhi nezixhumanisi ongazihlela. Bheka [Dweba idayagrama kusuka kumbhalo](topic:text-to-diagram).
- **Izinto ze-OLE ku-DWG.** I-{{cmd:OLELIST}} ibhala izinto ze-OLE ezitholakala ku-DWG engakwazi ukuzibeka yodwa i-CadCraft, futhi ibeka ikhophi lesithombe lapho uchaza khona. Bheka [Izithombe](topic:pictures#objects-from-other-programs-ole).
- **Izibalo zakho zihlala nomdwebo.** Amashidi wezibalo nezizathu zokuklama agcinwa ku-DWG kanye netafula lamakilasi.

**Ukudweba ngaphandle kokubona**

- Vula i-{{ui:Ukudweba ngaphandle kokubona}} ku-{{ui:Izilungiselelo}} (noma bhala {{cmd:ACCESS}} bese uphendula `On`). I-CadCraft ikhuluma yonke imiyalo nemiphumela ngomfundi wesikrini, ichaza umdwebo nalokho okuseduze kwe-cursor, ivumela ukuthi ushintshe i-cursor futhi ukhethe amaphoyinti ngekhibhodi, futhi idlala umsindo ngakunye kokubamba nesibambi. Lapho ibrawuza yakho ingakwazi ukuqaphela inkulumo kukhompiyutha yakho, imiyalo ingakhulunywa. Bheka [Dweba ngaphandle kokubona](topic:draft-without-sight).

**Kuyo yonke i-app**

- **Izilimi.** Izilimi ezingu-54; eziyishumi zintsha (isiLithuania, isiLatvia, isiBosnia, isiMarathi, isiTelugu, isiAlbania, isiAfrikaans, isiFilipino, isiSwahili, isiUzbek). Izilimi ngaphandle kwesiNgisi ziyizinhlobo ezenziwe yimishini kuze kufundwe yisipikha sendawo.
- **Amadivayisi okufaka.** Ikhibhodi yomkhathi, ipeni, imouse ye-3D, isilawuli sohlelo lokudlala nezilawuli ze-MIDI.
- **Imigqa yethuluzi nolwakhiwo lwezakhiwo.** I-{{ui:Izilungiselelo}} › {{ui:Okuvamile}} › {{ui:Imigqa yethuluzi}} inikeza Phindisa, imigqa emi-2 noma umugqa o-1 kwezinye izinhlelo. I-CadCraft igcina isethingi yayo ku-{{ui:Izilungiselelo}} › {{ui:CadCraft}} (bheka [Imigqa yethuluzi](topic:settings#toolbar-rows)). Isakhiwo sezakhiwo esabelwana ngaso sisezinhlelweni ezintathu ezinye, hhayi ku-CadCraft.
- **Izinkinga, Live nama-add-on.** Iphaneli elabelwana ngayo yezinkinga elexwayisa kuyo yonke i-app, ukubuka okuphilayo kwe-CadCraft Studio (bheka [Sebenza kumdwebo owodwa ndawonye](topic:work-live)), nohlu lwama-add-on.
- **Xhuma i-AI yakho.** Ukuxhuma okukodwa kusuka ku-CadCraft Studio kuya kuzo zonke izinhlelo eziyisishiyagalombili, nezinga lokufunda kuphela, lokuphakamisa noma lokuhlela ngohlelo ngalunye, nelogi ngamagama alula yalokho umsizi akwenzile. I-CadCraft ayinayo i-AI yayo, futhi ukubuza kuyo yonke i-app kusebenzisa i-AI oyixhumayo.

### Okulungisiwe ku-0.8.1

- **Izakhiwo zakhombisa 150 esikhundleni se-12'-6"** emidwebeni yezinyawo namaintshi. Izindawo i-app ezifunda zona ngokwayo zigcina umbhalo wazo futhi.
- **Amafayela e-DWG lapho isigaba samakilasi safundwa njengohlobo olungalungile** (GitHub cadcraft#5) manje avula kahle.
- **Ikhesa aliseyibonisi ngemuva kwamawindi amancane.**
- **I-Studio nezinhlelo ezipakiwe zingashintsha ulimi ngesikhathi sokusebenza.** Ngaphambili zazingesiNgisi kuphela. Akukahlolwa kuzo zonke izinhlelo: sitshele uma ulimi lungashintshi.
- **Amathebulethi ngokuma** anika ibanga legridi elisele endaweni yokudweba, nemodi yamashidi iqala ku-760 px noma ngaphansi.
- **STRETCH ngewindi elewelayo, nemikhawulo,** zabikwa ku-Studio 0.8.0 futhi zazisevele zilungile ku-0.8 web build; isifakeli sophenduli sasiyindala. I-Studio 0.8.1 iziphatha.

### Akukakho kulolu hlobo

- **I-0.8 ne-0.8.1 aziqinisekiswanga ngekhodi.** I-Windows ingase ixwayise (khetha {{ui:Ulwazi olwengeziwe}}, bese {{ui:Qhuba noma kunjalo}}); ku-Mac, chofoza ngesokudla i-CadCraft Studio bese ukhetha {{ui:Vula}}. Ukwakha kwezitolo kumi, nokwakha kwe-iPad ne-iPhone akuzange kwakhiwe kabusha ku-0.8.1.
- **Izikethi zepeni nezithombe zesikethi** zizanywe kuphela ezithombeni ezenziwe nemouse, hhayi ngepeni langempela, isikrini sokuthinta noma isikethi sesandla esiphepheni.
- **Ukudweba ngaphandle kokubona** kuhlolwe ngokuhlola okuzenzekelayo, hhayi ngomfundi wesikrini noma umhloli ongabonayo.
- **Ukwabelana ngemininingwane** akukahloliwa ngabantu ababili, nefolda ye-Team Cloud Plan njengefolda yamadokhumenti akakakhiwa.
- **Ukuhlanganisa** kusebenza emafayeleni e-DWG ne-DXF ye-CadCraft; okufanayo kumafayela ezinye izinhlelo akakakhiwa.
- **Ukuhlehlisa kumawindi amaningi:** i-CadCraft ibika isinyathelo ngasinye esiqediwe, kodwa i-Studio ayinayo i-Undo eyodwa yazo zonke izinhlelo; ngayinye i-app ihlehlisa izinyathelo zayo.
- **Izinto ze-OLE ze-DWG** ziyagcinwa kodwa azidwetshwa endaweni yazo.
- **Ukufunda amathebula esitayela sokuphrinta (amafayela e-CTB)** kusuka ezinhlelweni zolunye kwakhiwe kodwa akukahlolwa ngefayela lolunye uhlelo.
- **Xhuma i-AI yakho:** ukuxhuma ngokuchofoza kanye e-Studio, isixhumi esiphethe i-AI ye-browser, ukhiye wakho we-API ngaphakathi kwe-Studio nephakheji ye-MCP ePhublishiwe akugcinwanga kulokhu kukhishwa.

Ukuze uthole inguqulo engaphambi kwalena, bheka [Kusho ukuthini ku-0.7](topic:whats-new-0-7).
