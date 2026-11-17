---
title: Yenza umodeli ku-3D
summary: Bona umdwebo ku-3D ethebhini le-3D wenze kuwo izinto eziqinile ezilula: phakamisa (ngokuthambeka noma ngomendo), jikeleza, cindezela nodonsa izinhlangothi, amabhokisi, amasilinda nezikhonkwane, hlanganisa, suka nohlangane nazo, bese uzihambisa, uzikopishe, uzijikeleze futhi uzisule, nokubeka imibukiso eyisicaba ye-2D yazo eshidini.
keywords: 3d, izinto ze-3d, isiqinile, izinto eziqinile, 3dsolid, indawo, umzimba, acis, sat, sab, izinto eziqinile kumaprogram amanye, vula umdwebo we-3d, extrude, ext, revolve, rev, sweep, ukuthambeka, indlela, presspull, cindezela donsa, sunduza donsa, ibhokisi, isilinda, cyl, isikhonkwane, 3dorbit, orbit, zungeza, view, vscurrent, isitayela sokubona, eshadiwe, umugqa ofihliwe, uhlaka lwewaya, x-ray, xray, iso, ukubona ngokujulile, okuhambisanayo, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, ikhyubhu lokubuka, inhlanganisela, union, uni, suka, su, hlangana, in, boolean, hlanganisa, hlanganisa izinto eziqinile, viewbase, flatshot, ukubuka okungu-2d, ukubuka komdwebo, ukubuka phambili, ukubuka phezulu, ukubuka ngohlangothi, imigqa efihliwe
from: 13060e71
---

## Okuzokwenziwa

Indawo yegumbi enobubanzi 1000 × 600 iphakanyiswa ibe yibhulokhi ephakeme ngu-400, ubuso bukhuphukele phezulu, nesilinda sibekwe eceleni kwayo — bese umodeli uyalondolozwa ndawonye nomdwebo futhi uthunyelwa kumbukeli we-3D noma kwiprinta.

Ithebhu {{ui:3D}} isendaweni eseceleni kwethebhu {{ui:Imodeli}} ngaphansi komdwebo. Ibonisa umdwebo wemodeli ulele phansi ngemibala yezingqimba zawo (izingqimba ezivaliwe noma ezimisiwe zihlala zifihliwe) nezinto eziqinile ozenzayo. Okokuqala ukuvula, umbukiso we-3D uyalayisha; kusukela lapho ushintsha ngokushesha.

## Phakamisa isimo

1. Kuthebhu {{ui:Imodeli}}, thayipha `REC` bese ucindezela {{key:Enter}}. Thayipha `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Chofoza ithebhu {{ui:3D}}. Ithuluzi libonisa iqembu {{ui:3D}} esikhundleni samaqembu omdwebo.
3. Chofoza {{ui:Phakamisa}} (noma thayipha {{cmd:EXTRUDE}}, `EXT`). Chofoza phakathi kwe-rectangle, bese ucindezela {{key:Enter}}.
4. Thayipha `400` bese ucindezela {{key:Enter}}. Umlando uthi "Kuphakanyiswe izinto eziqinile ezi-1, ziphakama ngu-400" nevolumu yazo.

Imigqa evaliwe (kubandakanya nama-arc), ama-rectangle, ama-polygon, amasekethe namasekethe elongile ayaphakanyiswa; imigqa nemigqa evulekile ayiphakanyiswa, futhi umlando uchaza ngenxa yalokho. Ungakhetha futhi izimo kuthebhu {{ui:Imodeli}} kuqala bese uthayipha `EXTRUDE} lapho. Esikhundleni sokuthayipha ukuphakama, ungakuchofoza: umbandela ulandela isikhombi phezulu nasezansi. Ukuphakama okungeyona okungamanani amahle kwehla phansi. Thayipha `D` esimemezelweni sokuphakama ukuze usule izimo ezingu-2D ngemva kokuphakamisa (`D` futhi ugcine zona).

Esimemezelweni sokuphakama, `T` (Ithambeka) icela i-engeli ngamadigri: izinhlangothi zithambekela ngayo, ngakho-ke phezulu kuba mncane (i-engeli engeyona enhle yenza kube mkhulu); i-engeli enqunyelwe kakhulu kwisimo ayamukelwa. `P` (Indlela) ihambisa izimo ngomendo esikhundleni salokho (bona ngezansi).

## Jikeleza nokuhambisa ngomendo

- {{cmd:REVOLVE}} (`REV`, noma {{ui:Okuningi}} › {{ui:Jikeleza eksini}}): khetha izimo ezivaliwe, cindezela {{key:Enter}}, bese uchofoza izinhlangothi zombili zeeksi (noma uthayipha `X` noma `Y` ukuze uthole eksi yomdwebo ezungeze 0,0), bese uthayipha i-engeli noma ucindezele {{key:Enter}} ukuze kuzungezwe wonke umjikelo. Isimo sijikeleza eksini sibe sisimile phezu komhlaba: dweba uhlangothi lwesigaba se-vase eduze komugqa, bese uyijikeleza ngomugqa. Isimo singathinta eksini kodwa asiwudlule. Ujikeleze ngokuphelele unezinyathelo ezingu-48.
- {{cmd:SWEEP}} (noma {{ui:Okuningi}} › {{ui:Hambisa ngomendo}}, noma `P` esimemezelweni sokuphakama kwe-EXTRUDE): khetha izimo ezivaliwe (iphrofayili), cindezela {{key:Enter}}, bese uchofoza umendo: umugqa, umugqa oxhumene, i-arc, isekethe noma i-ellipse. Iphrofayili imi phezu komendo, phakathi kwayo ikhona emendweni, futhi ihamba ngawo; amakhona ayenziwa mitered, nomendo ovaliwe wenza indandatho. I-rectangle encane ehanjiswe ngomugqa wegumbi yenza umbhede wodonga; isekethe ehanjiswe ngomugqa oxhumene yenza ipayipi.

## Cindezela nodonsa ubuso

1. Chofoza {{ui:Cindezela/Donsa}} (noma thayipha {{cmd:PRESSPULL}}).
2. Chofoza ubuso obuphezulu besibhokisi.
3. Thayipha `100` bese ucindezela {{key:Enter}}, noma hambisa isikhombi bese uchofoza. Ibhulokhi iba ngu-500 ephakeme.

## Amabhokisi, amasilinda nezikhonkwane

- {{cmd:BOX}}: chofoza noma uthayipha amakhona amabili, bese ubude.
- {{cmd:CYLINDER}} (`CYL`): isikhungo, umsakazo, bese ubude. Amasilinda namasekethe aphakanyisiwe anezinhlangothi ezingu-48, ebonakala ebushelelezi.
- {{cmd:WEDGE}} (`WE`): amakhona amabili nobude. Iphakeme ngokugcwele ekhoneni lokuqala bese iyehla ibe yize ekhoneni elinye.

Kuthebhu ka-3D ukuchofoza kufika ebusweni noma emphethweni ongaphansi kwesikhombi, uma kungenjalo emhlabeni, ngakho ibhokisi lingema phezu kwesinye isinto eqinile.

## Hambisa, kopisha, jikeleza nesula izinto eziqinile

Kuthebhu ka-3D, ukuchofoza kukhetha into eqinile; hudula ukusuka kwesobunxele uye kwesokudla ukuze wenze iwindi, nokusuka kwesokudla uye kwesobunxele ukuze uthole ukudlula. Bese:

- {{cmd:MOVE}}: chofoza iphoyinti lokuqala nalapho lihamba khona, noma uthayipha `<100,0,0>` (noma `@100,0`) ukuze uthole ibanga ngokuya kuX, Y no-Z.
- {{cmd:COPY}}: okufanayo, kodwa kushiywe okwangempela.
- {{cmd:ROTATE}}: thayipha i-engeli (ijikeleza maphakathi nokukhethwa, ezungeze Z), noma chofoza isikhungo, iphoyinti lokuqala ne-engeli.
- {{cmd:ERASE}} noma {{key:Delete}}.

## Hlanganisa, suka nohlangane nezinto eziqinile

Vula {{ui:Okuningi}} ebhalweni lamathuluzi le-3D, noma uthayipha umyalo:

- {{cmd:UNION}} (`UNI`): khetha izinto eziqinile, cindezela {{key:Enter}}: zibe yinto eyodwa eqinile.
- {{cmd:SUBTRACT}} (`SU`): khetha izinto eziqinile ozogcina bese ucindezela {{key:Enter}}, bese ukhetha ezozisusa bese ucindezela {{key:Enter}}. Umgodiodlule ebhulokhini: dweba isilinda odlula kuso, bese usuka isilinda.
- {{cmd:INTERSECT}} (`IN`): khetha izinto eziqinile, cindezela {{key:Enter}}: kusala okuhlangene kuzo zonke kuphela.

Umlando utshela ivolumu yomphumela. Okwenziwe ngalinye kuyinyathelo elilodwa lokuhlehlisa. Okokuqala okusebenzisayo kulayisha injini ye-3D boolean (cishe ama-0.5 MB; ifakiwe ku-{{ui:Londoloza ngaphandle kwe-inthanethi}}). Izinto eziqinile ezivulekile kuphela ezingahlanganiswa: into eneziphetho ezivulekile (ezivela kwelinye iprogram njengobuso be-3D obukhululekile) iyenqatshwa ngalesi sizathu. Umphumela uba yinto eyodwa eqinile; izinhlangothi ezigobile zihlala zenziwe ngezinhlangothi ezicwebile, njengoba kwenziwa isilinda.

Chofoza kabili into eqinile ukuze uhlele ubuso bayo nezimpheto zayo ngokwazo; {{key:Esc}} iyavala futhi. Yonke inguquko ye-3D iyinyathelo elilodwa lokuhlehlisa emlandweni ofanayo nomdwebo: {{key:Mod+Z}} ihlehlisa okokugcina owenze kuthebhu zombili.

## Imibukiso eyisicaba eshidini

1. Vula ithebhu yeshidi (noma hlala kuthi {{ui:Imodeli}}), bese uthayipha {{cmd:VIEWBASE}} (noma `FLATSHOT`).
2. Khetha umbukiso: {{key:Enter}} ngophambili, noma `[Phezulu (T)]`, `[Okwesokudla (R)]`, `[Okwesobunxele (L)]`, `[Emuva (BA)]`, `[Phansi (BO)]`, `I` (Isometri).
3. {{key:Enter}} ibonisa imigqa efihliwe, eyisiqhephu; `[Fihla (H)]` iyishiya ngaphandle.
4. {{key:Enter}} ithatha isikali esiphakanyiswa yi-CadCraft: eshidini, isikali esijwayelekile esikhulu kakhulu (njengo-1:20) lapho umbukiso ufaneleka ngaphansi kwesigamu sephepha. Noma thayipha esinye: `1:50`, `2:1`.
5. Chofoza, noma thayipha, lapho kuyophela khona isikhungo sombukiso.

Umbukiso uyisibonakaliso sesithenjwa esilodwa, `VIEW-FRONT-1` njalo njalo: imiphetho ebonakalayo ekwengqimba i-VIEW-VISIBLE (0.5 mm), efihliwe ku-VIEW-HIDDEN (eyisiqhephu, 0.25 mm). Hambisa, ubale futhi uyiphrinte njengakunoma yimuphi omunye umdwebo. Ingumfanekiso wezinto eziqinile ngesikhathi owazenza ngaso; uma uzishintshile, susa umbukiso bese usebenzisa {{cmd:VIEWBASE}} futhi. Imibukiso eminingi, yenza umyalo kanye ngombukiso ngamunye.

## Khangela ozungezile

Hudula ngevili ukuze uzungeze, {{key:Shift}} + ukudonsa ngevili noma inkinobho yesokudla ukuze ushelelise, bese uphendula ivili ukuze ukhulise endaweni yesikhombi. Kupaneli yethrackpad, izimbambo ezimbili zizungeza nokuhlanganisa kukhulisa. Ukuchofoza kwesokudla ngaphandle kokudonsa kungu-{{key:Enter}}, njengakwamanye amathebhu. `3DORBIT` ivumela inkinobho yesobunxele ukuzungeza kuze kucindezelwe {{key:Enter}} noma {{key:Esc}}.

- {{ui:Ukubuka}} (noma {{cmd:VIEW}}): Iso, Phezulu, Phansi, Phambili, Emuva, Kwesobunxele, Kwesokudla, Ukubona ngokujulile noma Okuhambisanayo, kanye ne-Zoom to everything (sondeza konke).
- {{ui:Isitayela}} (noma {{cmd:VSCURRENT}}, `VS`): Eshadiwe, Eshadiwe namaphethelo, Umugqa ofihliwe, Uhlaka lwewaya noma X-ray.

Amaphoyinti ochofoza ayaxhumana nezinto eziqinile (amakhona, imiphetho, izinhlangothi) nomdwebo we-2D osemhlabeni: izimpelasonkhathi nezindawo phakathi kwemigqa nama-arc, namaphoyinti angaphansi kwawo. Imigqa ye-2D ayikaze ikhethwe kuthebhu ka-3D. Lapho umyalo ucela izinto ze-2D (EXTRUDE, REVOLVE, SWEEP), ukuchofoza kukhetha into, ukudonsa kusobunxele uye kwesokudla kuthatha okuphelele ngaphakathi kwewindi, ukudonsa kusokudla uye kwesobunxele kuthatha okudlula kukho, njengakuthebhu {{ui:Imodeli}}.

Ikhyubhu lokubuka lisendaweni ephezulu ngakwesokudla kuthebhu ka-3D: chofoza ubuso, imiphetho noma ikhona ukuze ubuke kusuka lapho, donsa ukuze uzungeze, futhi inkinobho yendlu ibuyisela ombukweni we-iso. Lokho kungu-{{ui:Okuzenzakalelayo}}, kuqala kwe-{{ui:Isikhombisi sekhona}} ku-[izilungiselelo ze-CadCraft](topic:settings). Uma kusethwe ku-{{ui:Ikhyubhu lokubuka}}, ithebhu {{ui:Imodeli}} nayo ibonisa ikhyubhu, ibuka phezulu; ukuchofoza enye inhlangothi kuvula ithebhu ka-3D ibuka kusuka lapho. Uma kusethwe ku-{{ui:Isithonjana seakisi}}, zombili amathebhu aboniso isikhombi seakisi.

## Izinto eziqinile kumaprogram amanye

Umdwebo ovela kwelinye iprogram ungabamba izinto eziqinile ze-3D, izifunda nemizimba (3DSOLID, REGION, BODY: enye iprogram igcina isimo sazo njengedatha ye-ACIS). I-CadCraft ibonisa lezo ezisemodelini kuthebhu ka-3D, ngombala wengqimba yazo nangemiphetho yazo, okokuqala uvula ithebhu; umugqa womyalo bese utshela ukuthi zingaki ezidwetshiwe.

- Zibonakala njengoba zinjalo: awukwazi ukuzikhetha, ukuzihambisa noma ukuzishintsha. Izingqimba ezivaliwe noma ezimisiwe ziyazifihla.
- Ukulondoloza njenge-DWG kubhala ngayinye emuva ingashintshiwe, nganoma yiluphi uhlobo lwe-DWG, ukuze enye iprogram iyitholele futhi. Amafayela e-DXF awakugcini: i-CadCraft iyibhala ku-DWG kuphela, futhi iyashoyo lokho lapho ulondoloza njenge-DXF.
- Okudwetshiwe: izinhlangothi ezicwebile, nezinhlangothi kumasilinda, ama-cone, izibhakabhaka, ama-torus nezindawo ezilula ze-spline, nemiphetho eqondile, ejikelezayo nege-spline. Ubuso kunoma yiluphi olunye uhlobo lwendawo, noma olungelungiswa yi-CadCraft, aluqagelwa: ayekwa lulandwe, njengalokhu: "Akukadwetshwa (izinto eziqinile ze-3D): izinhlangothi ezi-2 kwi-spline-surface (sweepsur), indawo engakadwetshwa."
- Izinto eziqinile ezisemabhulokhini azikaboniswa; "Mayelana nale fayela" ziyazibala.

Ubuso obugobile budwetshwa njengezingcezu ezincane ezicwebile, cishe ama-7.5° ngayinye, ngakho isinto eqinile egobile ibonakala ibe nezinhlangothi kancane eduze.

## Londoloza nethumele

Ukulondoloza kugcina umodeli we-3D, ku-DWG nasku-DXF. Yonke ubuso ingena njengobuso be-3D engqimbeni `CC-3D`, ukuze ezinye izinhlelo zibonise izinto eziqinile, kanti i-CadCraft igcina ikhophi yayo eqondile efayeleni, eyifunda lapho uvula umdwebo futhi, nombono we-3D njengoba ubunjalo (ikhamera, ukuprojekta nesitayela sokubona). Ubuso be-3D obenziwe ezinye izinhlelo bufika kuthebhu ka-3D njengobuso obukhululekile, obuhlangene njengeqembu elilodwa. Ubuso be-3D phakathi kwebhulokhi bufika kanye ngakho konke okubhekiselwa kulo ebhulokhini kumodeli, bumiswe futhi bujikelezwe njengoba kumiswe futhi kujikelezwa ireferensi; ebhulokhini ngokwalo, nasemshidini, ubuso be-3D budwetshwa bungu-flat, njengesiqhephu sayo.

{{ui:Thumela}} kuqembu le-3D ilanda izinto eziqinile kuphela: i-GLB yabambukeli nowebhu ({{cmd:GLBOUT}}), i-OBJ ({{cmd:OBJOUT}}) noma i-STL yokuphrinta nge-3D, ngamamilimitha ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} ibuza ukuthi yiphi.

:::note
Imodeli ye-3D inobukhulu bangempela. Umdwebo ongenayunithi ubalwa njengamamilimitha, ngakho `1000` ngu-mitha owodwa. Uma usushintsha iyunithi yomdwebo kamuva (Izakhiwo, kungakhethiwe lutho), izinto eziqinile ziyashintshwa ngokulinganayo nazo ukuze zihlale kumdwebo, nomlando uyasho lokho. Okukodwa kwe-{{key:Mod+Z}} kuhlehlisa ushintsho lweyunithi nokushintshwa kobukhulu ndawonye.
:::
