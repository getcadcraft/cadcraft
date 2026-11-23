---
title: Waxa cusub ee 0.9 (hore)
summary: Xarriijin oo raaca xuduudkeeda, kooxaha lakabyada, dabaqyada la isku dhigay, darbiyada caqliga leh 2D oo leh albaabbo iyo daaqado, qaabka qoraalka iyo tafatiraha qoraalka, sadarka amarka oo sabbeeya, qabashada shabakadda, toban siyaabood oo qaansho loo sawiro, iyo panelka Dukumentiyada.
keywords: waxa cusub 0.9, nooca hore, waxa cusub, 0.9, qoraallada sii-deynta, changelog, xarriijin, xarriijin la xidhiidha, hatchedit, faylka pat, faylka qaabka, kooxaha lakabyada, laygroup, dabaqyada, dabaqyada la isku dhigay, floorlayers, darbiyada caqliga leh, darbi, albaab, daaqad, qalabka darbiyada, qaabka qoraalka, style, tafatiraha mtext, qoraalka fiqraddan, qaabaynta, sadarka amarka sabbeeya, sadarka amarka, goobta sare, kooban, qabashada shabakadda, grid snap, f9, qaansho, panelka dukumentiyada, hubi-soo-qaad, cabbirrada birta UK, draw.io, qoraalka thai, dxf r12, waxa cusub, waxa cusub, qoraallada sii-deynta, changelog, isbeddelada, 0.8, 0.8.1, nooca, astaamaha cusub, dhammaystirka, ghost, tab, sketchfix, photosketch, autosheet, faahfaahin, gridmove, autodim, tags, redline, isku dar, git, fossil, access, naqshadeyn aan aragga lahayn, akhristaha shaashadda, xadka, jihooyinka, aunits, shx, diagram, ole, taariikh, isbarbardhig, erayada, sifooyinka, fiit iyo inji, fidi, luqadaha, aaladaha gelinta, dhibaatooyinka, nool, kaaliyayaasha
from: 3451e64c
---

Waa waxa isbedelay CadCraft 0.9, marka la barbardhigo 0.8.1. CadCraft waa app-ka naqshadda 2D iyo 3D ee CadCraft Studio 0.9 iyo sideeda app-kiisa. 0.9 wuxuu dhammaystiraa naqshadda qorshaha, wuxuuna ku daraa qaababka qoraalka iyo tafatiraha qoraalka dhab ah, wuxuuna siinayaa meel dheeraad ah shaashadda.

## Cusub

### Naqshadda qorshaha

- **Xarriijin raaca xuduudkeeda.** {{cmd:HATCH}} wuxuu ku xidhmaa waxa xuduudkeeda ah. U guuri, wareeji ama cabbir xuduudka oo xarriijinta iyo qaabkeeda way raacaan; dib u qaabee oo xarriijinta mar kale ayaa la shaqeysaa. {{cmd:HATCHEDIT}} (`HE`) wuxuu beddelaa xarriijin ka dib wuxuuna sameeyaa ama dhammeeyaa xidhiidhka. Eeg [Xarriijin iyo aagagga buuxinta](topic:hatch).
- **Faylasha qaabka xarriijinta.** Su'aasha {{cmd:HATCH}} `Pick internal point`, ku qor `F` (Faylka qaabka) oo dooro fayl `.pat`. Waxa kaliya la isku dayay faylasha loo qoray qaabka caadiga ah.
- **Kooxaha lakabyada.** Gudaha {{ui:Qalabka}} ee panelka {{ui:Lakabyada}}: {{ui:Koox cusub}}, {{ui:Ku dar kooxo diyaar ah}}, {{ui:Koox magac ku saabsan}}, iyo {{ui:Lakab raadi}}; ama ku qor {{cmd:LAYGROUP}} (`LG`). Eeg [Abaabul naqshad lakabyo ah](topic:layers#group-layers).
- **Dabaqyada la isku dhigay.** {{cmd:FLOORS}} (`FLR`), ama {{ui:Dabaqyo…}} menu-ga {{ui:Wax dheeraad ah}} ee kooxda {{ui:Muuqaal}}. Daaqadda muuqaalka xaashi ahaan waxay muujin kartaa hal dabaq hoos {{ui:Dabaqa la muujiyay}} sifooyinka. {{cmd:FLOORLAYERS}} wuxuu dabaqyada u beddelaa lakabyo faylka loo diro qof kale. Eeg [Dabaqyo isku dhigan hal naqshad](topic:floors).
- **Darbiyada 2D ee caqliga leh, albaabbo iyo daaqado.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) iyo {{cmd:DELOPENING}}. Geesaha, isku xidhka T iyo isgoysyada waxa loo xisaabiyaa. Darbiyadu waxay hayaan diiwaan ah sida ay isku xidhaan, Sifooyinka waxay helaan {{ui:Ka ma xidhmo bilowga}} / {{ui:Ka ma xidhmo dhamaadka}}, {{ui:Xariiqda booska}} iyo {{ui:Dherer}} la beddeli karo. Eeg [Samee darbiyo, albaabbo iyo daaqado 2D](topic:walls-2d).
- **Qalabka darbiyada qorshaha.** Ku qor {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} iyo kuwa kale. Weli ma lahan badhamo qalab. Eeg [Qaababka darbiga, goyn, kala-fogaan iyo qufulka darbiyada 2D](topic:wall-tools-2d).

### Qoraalka

- **Qaababka qoraalka.** {{cmd:STYLE}} (`ST`), ama {{ui:Qaabka qoraalka}} qalabka {{ui:Sawir}}: qaababka magacaysan oo leh foont, dherar, cabbir ballac iyo janjeer. Eeg [Deji foontiga iyo cabbirka qoraalka qaababka qoraalka](topic:text-styles).
- **Tafatiraha qoraalka fiqraddan ee qaabaysan.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ama laba jeer riixid qoraalka waxa furmaya sanduuq leh foont, cabbir, gacan-ku-dhufasho (bold), janjeer (italic), hoosaad, xariiq dhex-marka, midab, isku-toosin iyo calaamadaha darajada, calaamadaha ± iyo dhexroorka, iyo {{ui:Hagaag}} iyo {{ui:Jooji}}. Eeg [Qaabee qoraalka fiqraddan](topic:format-paragraph-text).
- **Jaantus ka soo jeeda draw.io XML.** {{cmd:DIAGRAM}} (`T2D`) wuxuu sidoo kale akhriyaa draw.io XML la dhigay. Eeg [Sawir jaantus qoraal ka](topic:text-to-diagram).
- **Qoraalka Thai daabacaadda PDF.** Hore calaamado su'aal ayuu ahaa.

### Meel dheeraad ah iyo caawimaad naqshadeed

- **Sadar sabbeeya oo khafiif ah iyo goob sare oo kooban.** Jiid gripka sadarka amarka si aad u sabbeeyo, jiid geeskiisa sare si aad xariiq yar u hesho, {{key:F2}} wuxuu furaa taariikhda. {{ui:Dejinta}} › {{ui:CadCraft}} › {{ui:Sadarka amarka}} iyo doorashooyinka goobta sare isku dejin ayay leeyihiin. Eeg [Dejinta](topic:settings#command-line).
- **Menu-ga dhibcaha walxaha.** Midig-riix {{ui:Snap}} safka xaaladda, ama ku qor {{cmd:OSNAP}}.
- **Qabasho shabakadda.** Badhanka {{ui:Qabashada gridka}} safka xaaladda, ama {{key:F9}}: dhibcaha la doortay waxay u gudbaan dhibcaha shabakadda ee u dhow marka aanu dhibcaha walxaha qaadan.
- **Qaansho toban siyaabood, iyo Sii wad.** {{ui:Qaanso}} qalabka {{ui:Sawir}} ama {{cmd:ARC}}: 3-dhibcood, qoyska Bilow/Dhexe/Dhamaad iyo qoyska Dhexe/Bilow/Dhamaad, iyo Sii wad (riix {{key:Enter}} dhibcaha bilowga) xariiqda, qaanso ama polilaynka ugu dambeeyay.
- **Panelka dukumentiyada.** {{cmd:DOCUMENTS}} (`DOCS`) ama {{ui:Dukumentiyada…}} menu-ga {{ui:Wax dheeraad ah}} ee kooxda {{ui:Muuqaal}}: dib-u-eegis, xaalad iyo soo-qaadista naqshad kasta oo ku jirta galka mashruuca. Wuxuu u furmaa sanduuq dhexe ah. Eeg [Dukumentiyada](topic:documents).

### Faylasha

- **Cabbirrada birta UK.** 976 qaybood panelka Caadiga ah, lagu qoray sida naqshadaha (tusaale ahaan `305x165x40 UB`).
- **Xirmooyinka Koonfur Afrika** (dhaqanka naqshadda iyo xeerarka dhismaha) oo ah xirmooyin add-on-ka Xeerarka dhismaha. Tirooyinka lama xaqiijin.
- **Add-ons ee CadCraft,** la kordhiyo marka loo baahdo oo damiga default ah: naqshadda iftiinka gudaha, naqshadda chip-ka (HDL ilaa qaabeyn), xardhidda router-ka, simulation-ka wareegga, sprocket-ka silsiladda roller-ka iyo xirmooyinka xeerarka dhismaha ee dalalka.

## Waa la saxay

- U guurid, wareejin ama cabbir xarriijin waxay qaabkeeda ka tegi jirtay.
- {{cmd:GRIDMOVE}} wuxuu guuri jiray darbi qorshe oo oo dhan kaliya bilaaba xariiqda shabakadda. Hadda darbi waxa lagu xukumaa geeskiisa.
- Shabakaddu waxay muujin jirtay kaliya gudaha xadka naqshadda xitaa xadku damin.
- Liiska bloogyada ee panelka dhinaca wuu dhaqaaqaa, magac aan bloog ahayn wuxuu liiskaa bloogyada ka bilaabma ("Ma ula jeedday").
- Faylasha DXF R12 ee AutoCAD diiday ("Unknown group 1001 for table") hadda halkaas ayay furmaan.
- Faylal aad u waaweyn (qiyaastii 70,000 walax iyo ka sii badan) way fureen waayeen "Maximum call stack size exceeded".
- Faylasha DWG ee AutoCAD 2018 iyo ka dambeeya oo leh nooca dayactirka sare way fureen waayeen "bad BITLONG code 11".
- Sanduuqa qoraalka fiqraddan, cabbir cusub oo qayb la doortay loo qoray wuxuu hayaa doorashada.

## App kasta

Tooltips-ka Bootstrap kontroolka kasta oo leh talo, talo bilow ah oo aad xidhi karto, safka tab-yada oo dhaqaaqa marka aysan ku habboonayn, iyo cinwaanka tab-ka browser-ka ee raacaa naqshadda furan (`<drawing> - CadCraft | CadCraft`). {{ui:Dejinta}} › {{ui:Qaabeynta}} hadda waa liis-hoos-u-dhac oo ah doorashooyin laba-safood. Liiska luqadaha ee {{ui:Dejinta}} way dheer tahay marka loo eego 0.8. Wada-tafatirka nool, ururinta Maktabadda iyo unugyada miisaanka iyo heerkulka waxa lagu sharaxay qoraallada Studio.

## Xadadka run ah

- Qoraalka fiqraddu ma leh liisaska toosan ama lambar, sarbeeb tab ama jeexjeex. PDF-yada la daabacay qoraalka waxay ku dhigaan Helvetica.
- Darbiyada qorshaha waa toosan yihiin, sidaas darteed qaansada waxa loo sawiraa darbiyo gaaban. Hubinta gacanta bulshada ee qalabka darbiga weli way sugaysaa.
- Kooxaha lakabyada looma qorin qaabka AutoCAD laftiisa, sidaas darteed AutoCAD wuxuu muujiyaa liis fidsan. Barnaamijyada kale dabaqyada oo dhan wada muujiyaan haddii aanad socodsiin {{cmd:FLOORLAYERS}}.
- Panelka Dukumentiyada laba qof ma isku dayin wadaagga dhabta ah. Xardhidda router-ka ma socon mishiin dhab ah. Qiyaasta iftiinka waxa lagu hubiyay raad photon, ma aha barnaamij kale. Add-on-yada injineernimada waa qalab hubin ah, ma aha bedel u ah dib-u-eegista injineerka.
- Luqadaha aan Ingiriisi ahayn waa qabyo mashiinka, qaar ka mid ah ereyada cusub Ingiriisi keliya ayay yihiin.

## Hore: 0.8 iyo 0.8.1

Waa waxa isbedelay CadCraft 0.8 iyo 0.8.1, marka la barbardhigo 0.7. 0.8 (1 Noofambar 2026) wuxuu ku daraa caawiyayaasha naqshadda oo ka shaqeeya naqshaddaada, xeerar kombiyuutarkaaga ku jira, iyada oo aan moodel lahayn, 0.8.1 (2 Noofambar 2026) wuxuu saxayaa cilladaha laga soo sheegay ka dib.

### Cusub

**Naqshad dhammaystirta fikirkaaga**

- **Ruux wuxuu muujiyaa waxa soo socda.** Marka amar aan socon, ruux midab cirro oo dashed ah wuxuu muujiyaa waxa qaababka naqshaddaada ay leeyihiin soo socda: siikada xiga isla masaafada, tallaabada xiga ee tarka, darbiga maqan ee qol. Riix {{key:Tab}} si aad u sawirto hal tallaabo oo dib loo celin karo, ama {{key:Esc}} si aad u dhigto. Waxa uu eegaa kaliya walxaha ugu cusub, sidaas darteed wuu dhalaalaa xitaa naqshad weyn. Ka demi dejinta CadCraft ama {{cmd:AUTOCOMPLETE}} `Off`.
- **Dhibcaha xiga marka aad xariiq sawirayso.** Intiisa {{cmd:LINE}} ama {{cmd:PLINE}} ruuxda waa dhibcaha xiga: tallaabada xiga ee tarka, geeska afraad ee afar-geeska, ama dhibcaha xidha. Kursorka u keen meeshaas oo riix {{key:Tab}}, sidii aad halkaas riixday.
- **Sawirada qalinka waxay noqdaan joomitari sax ah.** {{cmd:SKETCHFIX}}: sawir jiidyo qallafsan qalin, mouse ama farta, mid walba wuxuu noqdaa xariiq, goobo, qaansho, afar-geesle ama polilayn nadiif ah, oo lagu qabsaday waxa horay loo sawiray. Eeg [Ku sawir qalin oo hel joomitari sax ah](topic:sketch-with-a-pen).
- **Sawir sawirka wuxuu noqdaa naqshad.** {{cmd:PHOTOSKETCH}} (`PSK`) wuxuu helaa warqadda sawirka, wuxuu toosiyaa aragga, wuxuu isticmaalaa cabbirka warqadda iyo miisaanka aad siiso, wuxuuna raad-qaadayaa xariiqyada qalinka lakab kasta midab qalin. Qoraalka ma raad-qaadayo.
- **Cabbir xeerar ku saabsan.** {{cmd:AUTODIM}} (`ADIM`) wuxuu sameeyaa silsiladaha cabbirrada dhinacyada aad doorato, cabbir guud, ballacyada furasho, dhexroorka godadka iyo, `Grid` ku jiraan, masaafada shabakadda. Cabbir horay u jirtay weligeed ma soo celiyo.
- **U guuri xariiq shabakadda oo kooxda way raacaan.** {{cmd:GRIDMOVE}} (`GM`): darbiyada ku dhamaada xariiqda shabakadda way fidsanayaan, darbiyada xariiqda dhexdeeda, tiirarka, bubble-kiisa iyo calaamaddiisa way guuraan, cabbirrada xariiqda ku jiraa waxay cabbiraan masaafada cusub. Hal tallaabo oo dib loo celin karo.

**Xaashiyada, faahfaahinta iyo calaamadaha**

- **Xaashiyo iskood u habeeya.** {{cmd:AUTOSHEET}} wuxuu qaataa muuqaaladaada magacaysan (ama qaybaha kala gaarka ah ee moodeelka), wuxuu doortaa cabbir warqad iyo miisaan caadi ah, wuxuuna muuqaalada ku dhigaa xaashiyo cusub oo leh sifada cinwaanka iyo caption magac-iyo-miisaan. Wax walba waa la tafatiri karaa. Eeg [Xaashiyada ii habee](topic:lay-out-sheets-for-me).
- **Faahfaahinta shirkadaada, oo la soo bandhigo markaad sawirto.** {{cmd:DETAILS}} (`DET`) wuxuu hayaa bloogyada faahfaahintaada gaarka ah. Marka waxa aad doorato uu la mid yahay mid ka mid ah erayada lakabyadiisa, magacyada bloogyada iyo qoraallada, safka xaaladdu wuu sheegaa; dooro oo dhig. {{cmd:DETAILS}} › Wadaag liistaada waxa uu geliyaa galka Dukumentiyadaada oo wuxuu keenaa waxa kooxdaadu ku dartay. Dejintu waxay damisaa soo-bandhiggii.
- **Calaamadaha bloogyada.** {{cmd:TAGS}} wuxuu qeexaa calaamad (noocaada, qiyamka ay qaadan karto, bloogyada ay khusayso), wuxuuna dejiyaa tixraacyada bloogyada aad doorato, wuxuuna liistaa iyaga jadwal aad ku kaydin karto CSV. Qeexitaanka waxa lagu hayaa DWG-ga. Eeg [Calaamadaha](topic:tags).
- **Xadka naqshadda.** {{cmd:LIMITS}} wuxuu dejiyaa afar-geesle naqshadda: shabakaddu way buuxisaa, zoom All wuu muujiyaa. Xadadku waxay muuqdaan qaab xuduud ah waxayna lagu kaydiyaa DWG iyo DXF, iyo xadka warqadda. Eeg [Deji xadka naqshadda](topic:drawing-limits).

**Shaqaynta dadka kale iyo barnaamijyada kale**

- **Markup u beddel dib-u-eegis.** {{cmd:REDLINE}} wuxuu akhriyaa xirmada MarkupCraft qorto oo wuxuu liistaa isbeddel kasta. Aqbal ama diid mid kasta oo leh faallo; kuwa la aqbalay waxay helaan daruur dib-u-eegis iyo diiwaan dib-u-eegis hal tallaabo, waxaadna kaydisaa faylka jawaabaha ee xidha markups-ka MarkupCraft. Eeg [U beddel markup dib-u-eegis](topic:redline-to-revision).
- **Naqshadaha git iyo Fossil ay isku dari karaan.** Marka {{ui:Faylal la isku dari karo}} lagu daro {{ui:Dejinta}} › {{ui:CadCraft}}, walax kasta wuxuu helaa furaha aan weligiis isbeddelin (faylasha waxay ka weyn yihiin qiyaastii 10 boqolkiiba). `cadcraft merge base ours theirs` markaas wuxuu isku daraa tafatirka laba qof oo DWG ama DXF hal walax oo walax ah, wuxuuna sheegaa oo keliya meesha laba qof isku beddeleen wax isku mid ah. Eeg [Isku dar tafatirka laba qof naqshad hal ah](topic:merge-drawings).
- **Waxa isbeddelay, erayada ku jira.** Taariikhda gudahiisa, Isbarbardhig wuxuu siiyaa liis fudud: meelaha isbeddelay, sida ay u weyn yihiin, waxa lagu daray, la tirtiray ama la beddelay, iyo qoraalka la tafatiray. Eeg [Ku sheeg erayada waxa isbeddelay](topic:changes-in-words).
- **Jihooyinka iyo xagalka.** Ku qor jihada sida jihada surveyor-ka sida N45°23'30"E, ama darajo, daqiiqo iyo ilbiriqsi, meel kasta oo xagal la weydiiyo; AUNITS wuxuu dejiyaa sida xagalka loo muujiyo. Eeg [Ku qor oo muuji jihooyinka iyo xagalka](topic:bearings-and-angles).
- **Foontiyadaada SHX ee gaarka ah.** CadCraft-ka siiso galka foontiyada SHX, qaababka qoraalka ee magacaya waxay ku sawiraan iyagood, shaashadda iyo daabacaadda. Eeg [Sawir qoraal foontiyadaada SHX](topic:shx-fonts).
- **Jaantus ka qoraal.** {{cmd:DIAGRAM}} wuxuu akhriyaa flowchart Mermaid, jaantus qaybeed PlantUML, D2 ama liis ka-ilaa-ilaa, wuxuuna sawiraa bloogyo iyo isku-xidhayaal aad tafatiri karto. Eeg [Sawir jaantus qoraal ka](topic:text-to-diagram).
- **Walaxyada OLE ee DWG.** {{cmd:OLELIST}} wuxuu liistaa walaxyada OLE ee DWG qaadda oo CadCraft aanu isagu dhigi karin, wuxuuna dhigaa nuqul sawir meesha aad sheegto. Eeg [Sawirrada](topic:pictures#objects-from-other-programs-ole).
- **Xisaabahaaga waxay la sii jiraan naqshadda.** Xaashiyada xisaabta iyo sababaha naqshadeynta waxa lagu hayaa DWG-ga iyo miiska fasalka.

**Naqshadeyn aan aragga lahayn**

- Shid {{ui:Naqshadeyn aan aragga lahayn}} gudaha {{ui:Dejinta}} (ama ku qor {{cmd:ACCESS}} oo ka jawaab `On`). CadCraft wuxuu ku hadlaa amar kasta iyo natiijo kasta akhristaha shaashadda, wuxuu sharaxaa naqshadda iyo waxa kursorka ku dhow, wuxuu ogolaanayaa inaad kursorka u dhaqdhaqaaqdo oo dhibcaha qaado furayaasha, wuxuuna dhawaaqaa cod kasta oo snap iyo grip kasta. Meesha browser-kaagu ku aqoonsan karo hadalka kombiyuutarkaaga, amaraha waa la hadli karaa. Eeg [Naqshadeyn aan aragga lahayn](topic:draft-without-sight).

**App kasta**

- **Luqadaha.** 54 luqadood; toban ayaa cusub (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek). Luqadaha ka baxsan Ingiriisiga waa qabyo mashiin ilaa hadal-dhalad ay akhriso.
- **Aaladaha gelinta.** Trackpad, qalin, mouse 3D, kontrool-ka ciyaarta iyo kontrolada MIDI.
- **Safka qalabka iyo shabakadda sifooyinka.** {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Safka qalabka}} wuxuu siinayaa Ku duub, 2 safka ama 1 safka app-ka kale. CadCraft wuxuu hayaa dejintiisa gaarka ah {{ui:Dejinta}} › {{ui:CadCraft}} (eeg [Safka qalabka](topic:settings#toolbar-rows)). Shabakadda sifooyinka la wadaago waxay ku jirtaa saddex app oo kale, ma ku jirto CadCraft.
- **Dhibaatooyinka, Nool iyo add-on-ka.** Panel la wadaago oo dhibaatooyinka digniin ku siiya app kasta, aragti Nool ee cidda meesha ay ku jirto CadCraft Studio (eeg [Ku shaqee hal naqshad wadajir](topic:work-live)), iyo liiska add-on-ka.
- **Ku xidh AI-kaaga.** Hal xiriir CadCraft Studio ilaa sideeda app, heerka akhri kaliya, soo-jeedin ama tafatir app kasta, iyo diiwaan erayo fudud oo ku saabsan waxa caawiyuhu sameeyay. CadCraft ma lahan AI laftiisa, Weydii app kasta wuxuu isticmaalaa AI-ga aad ku xidhto.

### Waa la saxay 0.8.1

- **Sifooyinku waxay muujiyeen 150 halkii 12'-6"** naqshadaha fiit iyo inji. Goobaha app-ku akhriyo laftiisa qoraalkooda ayay mar kale hayaan.
- **Faylasha DWG oo qaybta fasalkooda loo akhriyay nooc khaldan** (GitHub cadcraft#5) hadda si sax ah ayay furmaan.
- Xariiqyada kursorka mar dambe ma muuqdaan gadaasha pop-up-yada.
- **Studio iyo nooca xirmada ah waxay beddeli karaan luqadda wakhtiga socodka.** Hore Ingiriisi keliya ayay ahaayeen. Weli lama tijaabin dhammaan madal-ka: noo sheeg haddii luqaddu ka beddelmayn.
- **Taabletyada muuqaalka toosan** waxay siiyaan dhererka shabakadda ee kanbaska, habka xaashiyada wuxuu bilaabmaa 760 px ama ka yar.
- **STRETCH oo daaqad isgoysa, iyo LIMITS,** waa la soo sheegay Studio 0.8.0 hore waxayna horay u saxnaayeen dhismaha webka 0.8; rakibaadii soo sheegay wuu ka hor ahaa. Studio 0.8.1 wuu xambaarsan yahay.

### Weli ma jirto nooca tan

- **0.8 iyo 0.8.1 kuma saxeexna code-ka.** Windows waa digniin kari karta (dooro {{ui:Macluumaad dheeraad ah}}, kadibna {{ui:Socodso si kastaba ha ahaatee}}); Mac-ka, midig-riix CadCraft Studio oo dooro {{ui:Fur}}. Dhismaha dukaanka waa la joojiyay, dhismaha iPad iyo iPhone lama dib-u-dhisin 0.8.1.
- **Sawirada qalinka iyo sawirada sawirka** waxa lagu tijaabiyay kaliya sawirro la sameeyay iyo mouse, weli ma lagu tijaabin qalin dhab ah, shaashad taabasho ama sawir gacanta ah oo warqad ku jira.
- **Naqshadeyn aan aragga lahayn** waxa lagu tijaabiyay hubin otomaatig ah, weli ma aha akhristaha shaashadda ama tijaabiye indho la'aan.
- **Wadaagista faahfaahinta** lama hubin laba qof, galka Team Cloud Plan oo galka dukumentiyada ahaan ma dhisna.
- **Isku darka** wuxuu shaqeeyaa faylasha DWG iyo DXF ee CadCraft; isla taas faylasha app kale looma dhisin.
- **Ka noqo daaqadaha dhexdooda:** CadCraft wuxuu sheegaa tallaabo kasta oo dhammaatay, laakiin Studio weli ma lahan Ka noqo keli ah app kasta; app kasta wuxuu ka noqdaa tallaabooyinkiisa.
- **Walaxyada OLE ee DWG** waa la hayaa laakiin meeshooda looma sawirto.
- **Akhrinta miisaska qaabka daabacaadda (faylasha CTB)** barnaamijyada kale ka imanaya waa la dhisay laakiin lama hubin fayl ka timid barnaamij kale.
- **Ku xidh AI-kaaga:** xidhiidh hal-riix ah Studio gudihiisa, ku-xidhaha martida ee AI-ga browser-ka, furaha API-gaaga gudaha Studio iyo xirmada MCP ee la daabacay lama ballan qaadin nooca tan.

Nooca ka horreeya tan, eeg [Waxa cusub ee 0.7](topic:whats-new-0-7).
