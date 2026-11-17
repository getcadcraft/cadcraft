---
title: Kusuka kwezinye izinhlelo zokudweba
summary: Ukuthi imiyalo evamile, izinkinobho nezinkambo zihlelwa kanjani ku-CadCraft, nomehluko okhubazekisa abadwebi abanolwazi.
keywords: ukushintsha, umehluko, ukudlulisa, izinkambo, ama-alias, dynamic input, pickfirst, pickadd, qsave, saveas, save as, mtext, ctb, polar tracking, xref, izinqamuleli zekhibhodi, ezijwayelekile, copyclip, pasteclip, pasteorig, copybase, clipboard
from: b58688e7
---

Uma usebenzise i-AutoCAD, noma uhlelo oluqhutshwa ngomklamo ofanayo, okuningi okwaziyo kusebenza lapha: umugqa wemiyalo, ama-alias afana ne-`L`, `C`, `TR` ne-`O`, i-Enter noma i-Space ukuphinda, ukukhetha ngewindi nangokuqhuma, ama-object snap ku-F3, i-Ortho ku-F8, isikhala somodeli namalayawuthi namabhuku. Leli khasi libhala okuhlahla ngqo, bese kuba umehluko okhubaza abantu. Funda ingxenye yesibili nakuba uzoskena okokuqala.

## Okuhlahla ngqo

| Inkambo | Ku-CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Imiyalo efanayo, ama-alias afanayo |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Okufanayo |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Imiyalo efanayo yezilinganiso |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` ebhalwe kumugqa womyalo | Okufanayo, ezilinganisweni ezintsha |
| `B` ukwenza ibhulokhi, `I` ukungenisa, `PU` ukuhlanza | Okufanayo (ukuhlanza kususa amabhulokhi angasetshenziswa kuphela) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` bese `E` noma `W` | Okufanayo |
| Ukuthayipha `_LINE` noma `-LAYER` esikriptini noma enkambweni | Ichashazi `_`, `-`, `.` noma `'` liyashaywa |
| I-Enter noma i-Space esikhundleni esingenalutho siphinda umyalo wokugcina | Okufanayo |
| I-Esc iyakhansela; i-Esc futhi isula ukukhethwa | Okufanayo |
| `@dx,dy`, `@d<a`, izingosi ezithayipha ezingaphambili kwempumalanga | Okufanayo |
| Iwindi ukusuka kwesobunxele kuye kwesokudla, ukudlula ukusuka kwesokudla kuye kwesobunxele, ukuchofoza-ukuchofoza; cindezela futhi udonse ukuze kube yi-lasso, i-Space ijikeleza iwindi / ukudlula / ucingo (LASSOMODE) | Okufanayo |
| Khetha kuqala, bese umyalo (igama-ngaphambi-kwesenzo) | Okufanayo; umyalo ophelile usula ukukhethwa |
| `ALL` nelungu `L` ku-Select objects | Okufanayo |
| I-Shift+chofoza isusa ekukhethweni | Okufanayo. Izilungiselelo zingenza ukuchofoza kuthathe ukukhethwa esikhundleni salokho, njenge-PICKADD 0: bona [Izilungiselelo ze-CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Imiyalo nezinkinobho ezifanayo; ukunamathisela kubeka ikhophi ngekhona layo eliphansi kwesobunxele, njengoba kwenza i-PASTECLIP |
| F3 object snap, F7 igridi, F8 Ortho | Izinkinobho ezifanayo |
| Chofoza kabili inkomba yevili ukuze usondeze ekupheleni | Okufanayo |
| Umbhalo oguqulwe ukuze ubhalwe ungaphambili ungafundeka | Okufanayo (njenge-MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Okufanayo; ku-Mac, i-Command nayo iyasebenza |

[Ireferensi yemiyalo](topic:commands) ikhomba yonke imiyalo kanye nama-alias ayo.

:::tip
Uma uthanda uhlu lwezinkinobho lwe-AutoCAD, khetha isitayela semenyu {{ui:Drafting classic}} ku-{{ui:Settings}} › {{ui:CadCraft}} › {{ui:Menus, keys and mouse}}: amathebhu i-Home, Insert, Annotate, Parametric, View, Manage ne-Output phezu komugqa wemiyalo ofanayo, nenkinobho ephakathi ihambisa ngokudonsa ngenkathi ukuchofoza ngokwesokudla kuyi-Enter. Bona [Imenyu, izinkinobho nemouse](topic:menus-keys-and-mouse).
:::

[Imephu yemiyalo](topic:command-map) ikhomba yonke imiyalo ye-CadCraft ngamagama ayo amafushane, kanye [nekhadi lokusheshisa](topic:cheat-sheet) imiyalo engu-40 oyoyisebenzisa kakhulu (futhi njengephepha elilodwa le-PDF).

## Umehluko okhubaza abantu

### Amaphoyinti athayipha aphelele

Ngedynamic input kuvuliwe, enye inhlelo ithatha `100,0` oyithayipha ephoyinteni lesibili njengento ehlobene. **Umugqa womyalo we-CadCraft awenzi lokho:** lapho, `x,y` ihlala ikalwa isuka kumsuka. Ngo-{{ui:Dyn}} ({{key:F12}}) kuvuliwe, sebenzisa izinkambu zawo: ibanga, {{key:Tab}}, i-engeli. Sebenzisa `@100,0` ukuze uthole "100 ngakwesokudla kwephoyinti lokugcina", noma hambisa ikhesa ngendlela efanele uthayipha `100` ngokuqondile.

### I-Shift iyadlula ama-snap; ayinikezi i-Ortho

Ukubamba i-Shift ngenkathi uchofoza kuyayeqa ama-object snap kulowo mchofozo. Ayishintshi i-Ortho okwesikhashana. Sebenzisa i-F8 noma inkinobho ye-{{ui:Ortho}}.

### Ukuchofoza ngesokudla kuyi-Enter njalo

Alikho imenyu yokuchofoza ngesokudla. Ukuchofoza ngesokudla emdwebeni kuyi-Enter: iphelisa umyalo, iqedela ukukhetha, noma iphinda umyalo wokugcina. Phakathi kokuhambisa ngamagripu noma kwebhokisi lokukhetha, kuyakhansela esikhundleni salokho. Donsa ngenkinobho yesokudla ukuze uhambise umbono.

### Akukho ukuhambisa ngebha ye-Space

I-Space iyi-Enter, ngakho ukubamba i-Space nokudonsa akuhambisi. Hambisa ngenkinobho ephakathi noma yesokudla, noma phuma ngokusondeza ngevili endaweni ehlukile.

### I-Trim ne-Extend

I-Trim ne-Extend ziqala ngemodi ye-Quick: yonke into ebonakalayo iyimiphetho yokusika noma umkhawulo, into ephansi kwesikhombi ikhombisa okuzoshabalala, umendo odonsiwe usika zonke izingcezu ezidlula kuwo, nento engadluliswa yinto ayisikwa ayisulwa. I-{{key:Shift}} iguqula phakathi kwe-trim ne-extend. I-`O` iguqula ibe yimodi ye-Standard (khetha imiphetho kuqala), i-`F` ne-`C` ngumugca nokudlula, i-`E` ngu-EDGEMODE, i-`R` iyasula. Alikho ukhetho lwe-`P` (Project): i-CadCraft isika endizeni yomdwebo.

### I-Fillet ne-chamfer

I-{{cmd:FILLET}} ne-{{cmd:CHAMFER}} zamukela izinketho ozazi zona: Undo, Polyline, Radius (noma Distance, Angle ne-mEthod), Trim ne-Multiple, kanye ne-{{key:Shift}}+chofoza ukuze uthole ikona ebukhali. I-fillet phakathi kwe-polyline nomugqa yengeza i-arc njengento yayo siqu esikhundleni sokuyihlanganisa ibe yi-polyline, futhi amakhona e-polyline eseduze nesegimenti se-arc ayashiywa njengoba enjalo.

### Umbhalo wepharagrafu nombhalo womugqa oyodwa

I-`T`, i-`MT` ne-`MTEXT` ngumbhalo wepharagrafu othayipha endaweni, unobubanzi, ukusatshalaliswa kwemigqa nokuhlelwa; i-`DT` ne-`DTEXT` ngumbhalo womugqa oyodwa, njengoba uwazi. Alikho izitayela zombhalo noma amakholomu, futhi awukwazi ukuthayipha ukwakheka phakathi kombhalo (okuqinile, izingxenye ezimbalwa ezibekwe phezulu) okwamanje; ukwakheka okuvela efayeleni kuyagcinwa, kudwetshwe, futhi kulondolozwe (bona [Engeza umbhalo namalebula](topic:text#formatting-inside-paragraph-text-from-other-programs)). Konke kudwetshwa ngefonti esemvelweni yesitayela sase-Helvetica.

### Ukulondoloza kusho "landa ikhophi"

{{key:Mod+S}}, `SAVE` ne-`QSAVE` zilanda ikhophi ngefomethi yomdwebo: i-DWG ovule yona ilondolozwa njenge-DWG, i-DXF njenge-DXF. Esiphequluleni akukho okubhalwa phezu kwakho ngqo, nefayela elivuliwe alishintshwa. Kuhlelo lwe-CadCraft Studio, i-{{key:Mod+S}} ibhala kabusha efayeleni elivulwe.

I-`SAVEAS` ({{key:Mod+Shift+S}}) iyinkomishi encane, hhayi isiphequluli sefayela: khetha {{ui:DWG}} (nge-{{ui:Version}} yayo, i-AutoCAD 2000 kuya ku-2018), {{ui:DXF R12}} noma {{ui:DXF 2000}} bese uchofoza {{ui:Save}}. Isiphequluli sinquma lapho ukulandwa kuya khona. I-`DXFOUT` ilanda i-DXF R12 njalo.

I-DWG oyivulile ilondolozwa ngoguqulo lapho yafika khona; umdwebo omusha ulondolozwa ngefomethi ye-AutoCAD 2000 ngaphandle uma ukhetha enye. Amashidi, izilinganiso namaphethini wamahetshi kuyagcinwa. Bona [Amafayela: avulwa yini, alondolozwa yini](topic:files#saving).

### Amangqimba: alula kakhulu

- Yonke into eshintshwayo kungqimba (ukuvula, ukukhandla, ukukhiya, umbala, ukushicilela, uhlobo lomugqa, ubukhulu bomugqa, ungqimba wamanje) iyisinyathelo esisodwa se-undo.
- Ukuvala nokukhandla kunomphumela ofanayo ku-CadCraft.
- Amangqimba omdwebo akhandlile kwelinye ibhokisi lokubuka ahlala akhandlile lapho: esikrinini, kuma-plot nalapho uwulondoloza njenge-DWG noma i-DXF.
- Ibhokisi lokubuka elibonisa ungqimba ngombala, uhlobo lomugqa, ubukhulu bomugqa noma ukuqhaqhazela kwalo siqu liyahlala lenza kanjalo esikrinini, ku-plot nasku-DWG elondoloziwe (i-DXF igcina izilungiselelo zomqimba wayo; ukulondoloza kuyakutshela lokho). Ukushintsha lokho ngokwebhokisi lokubuka akukakwakhiwa.
- Akukho manejha wezakhiwo zamangqimba nezimo zamangqimba. I-{{cmd:RENAME}}, i-{{cmd:LAYMRG}} ne-{{cmd:LAYDEL}} zibiza kabusha, ziyahlanganisa futhi ziyasula amangqimba. Uhlobo lomugqa nobukhulu bomugqa kusethwa ephaneli yangakwesokudla (bona [Ubukhulu bemigqa nezinhlobo zemigqa](topic:units-papers-scales#line-weights-and-linetypes)); i-{{cmd:LAYISO}}, i-{{cmd:LAYOFF}}, i-{{cmd:LAYFRZ}} ne-{{cmd:LAYMCUR}} zisebenza ngokukhetha.
- Ukulondoloza ku-DXF R12 kubhala amagama amangqimba ngamagama amakhulu. I-DWG igcina njengoba ukubhalile.

### Izitayela zezilinganiso

I-`DIMSTYLE` ivula umphathi wezitayela ezinamagama (ezintsha, ukuguqula, ukusetha okwamanje, ukuqhathanisa, ukusebenzisa). I-`DIMSCALE` nezinye izilungiselelo zishintsha okusetshenziswa izilinganiso ezintsha, futhi isilinganiso ngasinye sigcina usayizi waso, ongawushintsha nasephaneli yezakhiwo. Isitayela samanje asigcinwa efayeleni. Izilinganiso zilandela ifomethi yobude yomdwebo (idesimali, noma amafidi namainshi nge-{{cmd:UNITS}}), noma i-{{ui:Format}} yazo. Bona [Setha usayizi wezilinganiso](topic:dimension-settings).

### Ukushicilela kulula kakhulu

Amathebula esitayela sokushicilela asebenza ngombala, njengamafayela e-CTB: i-Monochrome, i-Colour ne-Grayscale zakhelwe ngaphakathi, ungenza owakho, futhi ishidi ngalinye ligcina ithebula lalo. Ukufunda amafayela e-CTB kwakhiwe ngokuchazwa okushicilelwe futhi kuzanywe kumafayela esiwenzile kuphela; amathebula esitayela sokushicilela anamagama (STB) nezilungiselelo zamakhasi akakakwakhiwa. Imigqa ishicilelwa ngobukhulu bayo bomugqa, ezinye ngobubanzi bepeni elilodwa. Amashidi ashicilelwa ngo-1:1 ephepheni lawo; imodeli ishicilelwa ngesikali osikhethile noma ilingane. Bona [Shicilela ku-PDF](topic:plot-pdf).

### Ukusebenza ngaphakathi kwebhokisi lokubuka

Njengoba uyazi: chofoza kabili phakathi kwebhokisi lokubuka (noma uthayipha {{cmd:MSPACE}}) ukuze usebenze emodelini ngalo, bese uchofoza kabili ngaphandle kwalo (noma {{cmd:PSPACE}}) ukubuyela kushidi. Ngaphakathi, ukuhambisa nokusondeza kuguqula okubonisa ibhokisi lokubuka, ngaphandle kokuthi ukubonisa kwalo kukhiyiwe; khona-ke kuhambisa ishidi. Ukuchofoza ithebhu ngaphansi komdwebo nakho kuphuma ebhokisini lokubuka. Bona [Sebenza emodelini ngebhokisi lokubuka](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Ukulandelela nedynamic input yeyes, igridi yokunamathela ayikafiki

Igridi ibukwa kuphela; amaphoyinti awanamathelisi kuyo (akukho imodi ye-F9 yokunamathela). Ukulandelela kwepolar ({{key:F10}}, isinyathelo sisethwa nge-{{cmd:POLARANG}}) nokulandelela kwe-object snap ({{key:F11}}: hlala ephoyinteni lokunamathela ukuze uyithole) kusebenza njengoba uyazi; bona [Namathela ezintweni](topic:object-snaps#polar-tracking). Dynamic input ({{key:F12}}) ibonisa ibanga nengeli (noma X no-Y) ngekhesa; bona [Ukufaka kokuxhumana nebanga](topic:coordinate-entry#dynamic-input).

### Amafidi namainshi

Khetha {{ui:Length format}} {{ui:Architectural}} noma {{ui:Engineering}} (noma thayipha {{cmd:UNITS}}), bese uthayipha amabanga njengoba uwazi: `12'6"`, `12'6-1/2"`. Sebenzisa ihhayphu, hhayi isikhala, ngaphambi kwesigaba: i-{{key:Space}} iyi-{{key:Enter}}. Setha nakho {{ui:Units}} ibe {{ui:Inches}}, ukuze amashidi namaplot anikeze amasikali wezakhiwo. Ifomethi igcinwa emafayeleni e-DWG ne-DXF elondoloziwe. Bona [Amafidi namainshi](topic:units-papers-scales#feet-and-inches-and-fractions).

### Ukukopisha nokunamathisela kuhlala ngaphakathi kwe-CadCraft

{{key:Mod+C}}, {{key:Mod+X}} no-{{key:Mod+V}} zikopisha, ziseke futhi zinamathisele izinto ngaphakathi komdwebo, phakathi kwemidwebo nasephakathi kwamathebhu e-CadCraft kwisiphequluli esifanayo. I-clipboard iyeyi-CadCraft: awukwazi ukunamathisela izinto ze-CadCraft kwenye inhlelo, noma izinto zenye inhlelo ku-CadCraft. Ukunamathisela kusuka kumdwebo onamayunithi ahlukile akulungisi usayizi: sebenzisa i-{{cmd:SCALE}} ngemva kwalokho. I-{{key:Mod+D}} ingumphindaphindo ohamba nesikhombi, okwengeziwe kwe-CadCraft. Bona [Kopisha, namathisela futhi uphindaphinde](topic:copy-paste).

### Izinkinobho zesiphequluli ongeke uzisebenzise

Iphepha lewebhu alikwazi ukuthatha {{key:Mod+N}}, {{key:Mod+W}} noma {{key:Mod+T}} esiphequluludweni: ziyavula futhi zivale amawindi namathebhu. Sebenzisa inkinobho ye-{{ui:New}} noma uthayipha `NEW`. Bona [Izinkinobho, amamouse namapadi wokuthinta](common:keys).

## Imiyalo ongase uyifune ayikho lapha kwamanje

I-{{cmd:TABLE}} ayikakwakhiwa. Ukuyithayipha kuthi "Unknown command". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} ne-{{cmd:XREF}} zakhiwe.) [Akukakwakhiwa](topic:not-built-yet) ikhomba okufanele wenze kunalokho namuhla.
