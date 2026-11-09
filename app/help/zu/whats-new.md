---
title: Okusha ku-0.8 nango-0.8.1
summary: Isithunzi esiqeda umdwebo wakho, imizwa yepeni nezithombe zemizwa ziguqulwe zibe yijiyomethri, amashidi azilungiselela yona, imininingwane eyethulwa ngesikhathi udweba, i-GRIDMOVE ne-AUTODIM, izethegi, amafayela ahlanganisekayo, ukuguqulwa kwe-redline, ukudweba ngaphandle kokubona, imingcele yomdwebo, izindlela, amafonti e-SHX, idayagremu kusuka embhalweni, nokulungiswa ku-0.8.1.
keywords: okusha, izinguqulo ezintsha, amanothi okukhishwa, isiqondiso, 0.8, 0.8.1, inguqulo, izici ezintsha, ukuqedwa kokubhala, isithunzi, tab, sketchfix, photosketch, autosheet, imininingwane, gridmove, autodim, izethegi, redline, ukuhlanganisa, git, fossil, ukufinyelela, ukudweba ngaphandle kokubona, isifundi sesikrini, imingcele, izindlela, aunits, shx, idayagremu, ole, umlando, qhathanisa, ngamagama, izimfanelo, amapheya nama-intshi, ukulinganisa, izilimi, amadivayisi okufaka, izinkinga, okuphilayo, abasizi
from: 9dd82db5
---

Lokhu kushintshile ku-CadCraft 0.8 ne-0.8.1, uma kuqhathaniswa ne-0.7. I-0.8 (1 Novemba 2026) yengeza izisusa zokudweba ezisebenza kusuka emdwebeni wakho, ngemithetho ekhompyutheni yakho futhi ngaphandle kwemodeli, kanti i-0.8.1 (2 Novemba 2026) ilungisa izinkinga ezibikwe ngemva kwayo.

## Okusha

### Umdwebo oqedela umcabango wakho

- **Isithunzi sibonisa okuzolandela.** Kungakhona umyalo osebenzayo, isithunzi esingwayi esinemigqa esiqhephuzayo sibonisa okuthi amaphethini omdwebo wakho athi yiyiphi into elandelayo: isiqinisi esilandelayo ngesikhala esifanayo, inyathelo elilandelayo lesitebhisi, udonga olusilele ekamelweni. Cindezela {{key:Tab}} ukuze usidwebe njengesinyathelo esisodwa sokuhlehlisa, noma {{key:Esc}} ukuze usichithe. Sibheka izinto ezintsha kuphela, ngakho sihlala sibushelelezi kumdwebo omkhulu. Vala kuma-{{ui:Izilungiselelo}} › {{ui:CadCraft}} noma nge-{{cmd:AUTOCOMPLETE}} `Off`.
- **Iphoyinti elilandelayo lapho udweba umugqa.** Phakathi kwe-{{cmd:LINE}} noma i-{{cmd:PLINE}} isithunzi siyiphoyinti elilandelayo: inyathelo elilandelayo lesitebhisi, ikhona yesine yonxantathu, noma iphoyinti elivala. Sondeza isikhombi eduze kwalo bese ucindezela {{key:Tab}}, njengokungathi uchofoze lapho.
- **Imizwa yepeni iba yijiyomethri enembile.** {{cmd:SKETCHFIX}}: dweba imizwa engakahlelwa ngepeni, imouse noma umunwe bese kuba umugqa, indilinga, umnsalo, unxantathu noma iphola-layini ehlanzekile, ehlanganiswe nalokho okusevele kudwetshiwe. Bona [Sketcha ngepeni uthole ijiyomethri enembile](topic:sketch-with-a-pen).
- **Isithombe sesketsi siba umdwebo.** {{cmd:PHOTOSKETCH}} (`PSK`) ithola iphepha esithombeni, ilungise ukubukeka, isebenzise usayizi wephepha nesikali onikeza, futhi ikopishe imigqa yepeni ngqimba ngayinye ngombala ngamunye wepeni. Imibhalo ayikopishwa.
- **Linganisa ngemithetho.** {{cmd:AUTODIM}} (`ADIM`) yenza amaketango ezilinganiso eduze kwezinhlangothi ozikhethile, usayizi wonke, ububanzi bokuvulwa, amadayamitha emigodi, futhi nge-`Grid`, ukuma kwegridi. Ayikaze iphinde ilinganiso elikhona kakade.
- **Hambisa umugqa wegridi isethi iyalandela.** {{cmd:GRIDMOVE}} (`GM`): izindonga ezigcina emugqeni wegridi ziyelula nawo, izindonga ezisecaleni kwawo, izinsika, ibhabula layo nethegi zinyakaza, nezilinganiso ezisemugqeni zilinganisa ukuma okusha. Isinyathelo sokuhlehlisa esisodwa.

### Amashidi, imininingwane nezethegi

- **Amashidi azilungiselela yona.** {{cmd:AUTOSHEET}} ithatha imibono yakho equanjiwe (noma izingxenye ezihlukene zemodeli), ikhethe usayizi wephepha nesikali esijwayelekile, bese ibeka imibono emashidini amasha nebhulokhi yesihloko nombhalo wegama nesikali. Konke kusalungiseleleka. Bona [Lungisa amashidi ngami](topic:lay-out-sheets-for-me).
- **Imininingwane yenkampani yakho, enikezwa ngesikhathi udweba.** {{cmd:DETAILS}} (`DET`) igcina amabhulokhi akho emininingwane. Lapho okukhethiwe kufana nelilodwa ngamagama asezingqimbeni, amagama amabhulokhi nezinothi, ibha yesimo iyasho lokho; likhethe bese ulibeka. {{cmd:DETAILS}} › Yabelana ifaka uhlu lwakho kufolda yakho ye-Documents futhi ilethe lokho ithimba lakho elikungezile. Izilungiselelo zivala izinikezo.
- **Izethegi ezibhulokhini.** {{cmd:TAGS}} ichaza ithegi (uhlobo lwalo, amanani angathatha, amabhulokhi ilisebenzela), ilibeka ezinkombeni zamabhulokhi okhethile, futhi iwabala njengohlelo olungalondolozwa njenge-CSV. Izincazelo zigcinwa ku-DWG. Bona [Izethegi](topic:tags).
- **Imingcele yomdwebo.** {{cmd:LIMITS}} imisela unxantathu womdwebo: igridi iyawugcwalisa futhi ukusondeza konke kuwubonisa. Imingcele iboniswa njengomugqa ophelezelayo futhi iyalondolozwa ku-DWG ne-DXF, nemingcele yephepha. Bona [Misa imingcele yomdwebo](topic:drawing-limits).

### Ukusebenza nabanye abantu nezinye izinhlelo

- **Guqula i-markup ibe ukuguqulwa.** {{cmd:REDLINE}} ifunda iphakheji eyi-MarkupCraft ilibhalayo futhi ibala konke okushintshile. Yamukela noma yenqaba ngayinye ngenothi; okwamukelwe kuthola ijikelezi lokuqaphela nelogu yokuguqula ngesinyathelo esisodwa sokuhlehlisa, bese ulondoloza ifayela lezimpendulo elivala ama-markup ku-MarkupCraft. Bona [Guqula i-markup ibe ukuguqulwa](topic:redline-to-revision).
- **Imidwebo i-git ne-Fossil engahlanganisa.** Uma {{ui:Amafayela ahlanganisekayo}} evuliwe kwi-{{ui:Izilungiselelo}} › {{ui:CadCraft}}, into ngayinye ithola ukhiye ongaguquki (amafayela angaba ngu-10 ekhulwini ngaphezulu). `cadcraft merge base ours theirs` bese ihlanganisa ukuhlelwa kwabantu ababili kwento ngayinye ye-DWG noma i-DXF futhi ibike kuphela lapho abantu ababili bashintsha into efanayo. Bona [Hlanganisa ukuhlelwa kwabantu ababili komdwebo owodwa](topic:merge-drawings).
- **Okushintshile ngamagama.** Emlandweni, i-{{ui:Qhathanisa}} inikeza uhlu olulula: lapho izinto zishintshe khona, ukuthi izindawo zinkulu kangakanani, okwengeziwe, okususiwe noma okushintshiwe, nombhalo owuhlelwe. Bona [Chaza ngamagama okushintshile](topic:changes-in-words).
- **Izindlela nama-engeli.** Bhala indlela njengendlela yomhloli wezindawo efana ne-N45°23'30"E, noma ngamadigri, imizuzu nemizuzwana, noma kuphi lapho kucelwa i-engeli; i-AUNITS ibeka indlela ama-engeli abonakala ngayo. Bona [Bhala nobonise izindlela nama-engeli](topic:bearings-and-angles).
- **Ofonti bakho be-SHX.** Nikeza i-CadCraft ifolda yofonti be-SHX, futhi izitayela zombhalo ezibabiza zidwetshwa ngabo, esikrinini nasezithombeni ezishicilelwe. Bona [Dweba umbhalo ngofonti bakho be-SHX](topic:shx-fonts).
- **Idayagremu kusuka embhalweni.** {{cmd:DIAGRAM}} ifunda i-flowchart ye-Mermaid, idayagremu yengxenye ye-PlantUML, i-D2 noma uhlu lokusuka-kuya, futhi idwebe amabhulokhi nezixhumanisi ongazihlela. Bona [Dweba idayagremu kusuka embhalweni](topic:text-to-diagram).
- **Izinto ze-OLE ku-DWG.** {{cmd:OLELIST}} ibala izinto ze-OLE ethwala i-DWG i-CadCraft engazibeka ngayo, futhi ibeka ikhophi yesithombe lapho usho khona. Bona [Izithombe](topic:pictures#objects-from-other-programs-ole).
- **Izibalo zakho zihlala nomdwebo.** Amashidi okubala nezizathu zokuklama zigcinwa ku-DWG kanye nethebula lamaklasi.

### Ukudweba ngaphandle kokubona

- Vula {{ui:Ukudweba ngaphandle kokubona}} ku-{{ui:Izilungiselelo}} (noma bhala {{cmd:ACCESS}} bese uphendula `On`). I-CadCraft ikhuluma yonke imiyalo nemiphumela ngesifundi sakho sesikrini, ichaza umdwebo nalokho okuseduze kwesikhombi, ikuvumela ukuthi uhambise isikhombi nokukhetha amaphoyinti ngekhibhodi, futhi idlala umsindo kuyo yonke i-snap ne-grip. Lapho isiphequluli sakho singaqaphela inkulumo kukhompyutha yakho, imiyalo ingakhulunywa. Bona [Dweba ngaphandle kokubona](topic:draft-without-sight).

### Kuyo yonke i-app

- **Izilimi.** Izilimi ezingu-54; eziyishumi ziyizintsha (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek). Izilimi ngaphandle kwesiNgisi ziyizinguqulo zomshini kuze kufundwe isipikha sendabuko.
- **Amadivayisi okufaka ngawo.** Trackpad, ipeni, imouse ye-3D, isilawuli segeyimu nezilawuli ze-MIDI.
- **Imigqa yamathuluzi negridi yezimfanelo.** {{ui:Izilungiselelo}} › {{ui:Okuvamile}} › {{ui:Imigqa yamathuluzi}} inikeza Wrap, imigqa engu-2 noma umugqa ongu-1 kwezinye ama-app. I-CadCraft igcina isilungiselelo sayo kuma-{{ui:Izilungiselelo}} › {{ui:CadCraft}} (bona [Imigqa yamathuluzi](topic:settings#toolbar-rows)). Igridi yezimfanelo eyabelwana ngayo itholakala kwezintathu zezinye ama-app, hhayi kwi-CadCraft.
- **Izinkinga, Okuphilayo nezengezo.** Ipaneli yezinkinga eyabelwana ngayo esixwayisa kuyo yonke i-app, ukubuka okuphilayo kokuthi ubani ukuphi ku-CadCraft Studio (bona [Sebenzani ngomdwebo owodwa ndawonye](topic:work-live)), nohlu lwezengezo.
- **Xhuma i-AI yakho.** Uxhumo olulodwa kusuka ku-CadCraft Studio kuya kuzo zonke ama-app ayisishiyagalombili, nezinga lokufunda kuphela, lokuphakamisa noma lokuhlela ngayinye, nelogu yamagama alula yalokho umsizi akwenzile. I-CadCraft ayinayo i-AI yayo, futhi Buza kuyo yonke i-app isebenzisa i-AI oyixhumayo.

## Kulungisiwe ku-0.8.1

- **Izimfanelo zabonisa 150 esikhundleni se-12'-6"** kumidwebo yamafiti nama-intshi. Izinkambu i-app ezifunda ngokwayo ziyagcina umbhalo wazo futhi.
- **Amafayela e-DWG esigaba sawo samaklasi safundwa njengohlobo olungafanele** (GitHub cadcraft#5) manje ayavuleka ngokufanele.
- **Isikhombi asisabonakali ngemuva kwamawindi avelayo.**
- **I-Studio nezinguqulo ezipakishiwe zingashintsha ulimi ngesikhathi sokusebenza.** Ngaphambili bekuyisiNgisi kuphela. Akukahlolwa kuzo zonke izinkundla: sitshele uma ulimi lungashintshi.
- **Amathebulethi ngokuma** anikeza igridi okuphezulu okungaphezulu ku-canvas, nemodi yamashidi iqala ku-760 px noma ngaphansi.
- **I-STRETCH newindi elihlanganayo, nemingcele,** kwabikwa ku-Studio 0.8.0 futhi zase zilungile ku-0.8 wewebhu; isifaki sowabikile sasidala. I-Studio 0.8.1 iyazithwala.

## Akukakhoni kulolu hlobo okwamanje

- **I-0.8 ne-0.8.1 azisayiniwe ngekhodi.** I-Windows ingase isixwayise (khetha {{ui:Okwengeziwe}}, bese {{ui:Qhubeka noma kunjalo}}); ku-Mac, chofoza ngesokudla i-CadCraft Studio bese ukhetha {{ui:Vula}}. Izakhiwo zesitolo zimisiwe, futhi ukwakha kwe-iPad ne-iPhone akuzange kwakhiwe kabusha ku-0.8.1.
- **Izimizwa zepeni nezithombe zezimizwa** zihlolwe kuphela ezithombeni ezenziwe nasemouseni, hhayi ngepeni langempela, isikrini sokuthinta noma umzwa wesandla kwiphepha.
- **Ukudweba ngaphandle kokubona** kuhlolwe ngezihloli ezizenzakalelayo, hhayi okwamanje nge-screen reader noma umhloli ongabonayo.
- **Ukwabelana ngemininingwane** akukahlolwa ngabantu ababili, nefolda yePlan Team Cloud njengefolda ye-Documents akakakhiwa.
- **Ukuhlanganisa** kusebenza kumafayela e-DWG ne-DXF e-CadCraft; okufanayo kumafayela ezinye ama-app akakakhiwa.
- **Hlehlisa kumawindi amaningi:** i-CadCraft ibika isinyathelo ngasinye esiphelile, kodwa i-Studio ayinakho okukodwa Hlehlisa kuzo zonke ama-app okwamanje; ngayinye i-app ihlehlisa izinyathelo zayo.
- **Izinto ze-OLE ze-DWG** ziyagcinwa kodwa azidwetshwa endaweni yazo.
- **Ukufunda amathebhula esitayela sokushicilela (amafayela e-CTB)** kwezinye izinhlelo kwakhiwe kodwa akukahlolwa namafayela ezinye izinhlelo.
- **Xhuma i-AI yakho:** ukuxhuma ngokuchofoza kanye, ukuxhuma i-AI yesiphequluli, ukhiye we-API wakho ongaphakathi kwe-Studio kanye nephakheji ye-MCP eshicilelwe akuthenjiswa kulokhu kukhishwa.

Ngenguqulo edlule, bona [Okusha ku-0.7](topic:whats-new-0-7).
