---
title: Waxa cusub ee 0.9
summary: Hatch-yo raacaya xuduudkooda, koox-lakabyo, dabaqyo is-dul saaran, darbiyo caqli leh oo leh albaabo iyo daaqado, qaababka qoraalka iyo tafatiraha qoraalka qaabaysan, sadarka amarka oo caaga ah, snap-ka gridka, toban siyaabood oo qaanso, iyo panelka Dukumentiyada.
keywords: waxa cusub, 0.9, qoraallada siidaynta, liiska isbeddelka, hatch, hatch is-xidhan, hatchedit, faylka pat, faylka qaabka, koox lakabyada, laygroup, dabaqyo, dabaqyo is-dul saaran, floors, darbi caqli leh, darbi, albaab, daaqad, qalabka darbiyada, qaabka qoraalka, style, tafatiraha mtext, qoraal paragraph, qaabeyn, sadarka amarka caaga ah, snap gridka, grid snap, f9, qaanso, panelka dukumentiyada, check out, cabbirrada birta uk, draw.io, qoraalka thai, dxf r12, whats new, release notes, changelog, isbeddel, 0.8, 0.8.1, nooca, astaamaha cusub, dhammeystir otomaatig, ruux, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, calaamadaha, redline, merge, git, fossil, access, tafatirka aan aragga, akhriyaha shaashadda, xuduudaha, jihooyinka, aunits, shx, diagram, ole, taariikh, isbarbardhig, erey ahaan, sifooyinka, fiit iyo inji, fidi, luuqadaha, aaladaha gelinta, dhibaatooyin, kala beddela, kaaliyayaasha
from: 8b6dea0b
---

Waa waxa ku cusub CadCraft 0.9, marka la barbardhigo 0.8.1. CadCraft waa appka sawirka 2D iyo 3D ee CadCraft Studio 0.9 iyo siddeed appsyadeeda. 0.9 wuxuu dhammaystiraa sawirka qorshaha, wuxuu ku daraa qaababka qoraalka iyo tafatiraha qoraalka dhab ah, wuxuuna idin siinayaa meel dheeraad ah shaashadda.

## Cusub

### Sawirka qorshaha

- **Hatch-yo raacaya xuduudkooda.** {{cmd:HATCH}} wuxuu ku xidhmaa wixii xuduud ka dhigaya. Dhaqaajin, wareeji ama cabbir xuduudka, hatch-ka iyo qaabkiisu way raacaan; dib u qaabee, hatch-ka mar kale ayaa la xisaabiyaa. {{cmd:HATCHEDIT}} (`HE`) wuxuu beddelaa hatch-ka ka dib, wuxuuna sameeyaa ama joojiyaa xidhiidhka. Eeg [Hatch iyo aagagga buuxinta](topic:hatch).
- **Faylasha qaabka hatch-ka.** Su'aasha {{cmd:HATCH}} `Dooro barta gudaha`, ku qor `F` (Faylka qaabka) oo dooro fayl `.pat`. Kaliya faylal loo qoray qaabka caadiga ah ayaa la tijaabiyey.
- **Koox-lakabyo.** Gudaha {{ui:Qalabka}} ee panelka {{ui:Lakabyada}}: {{ui:Koox cusub}}, {{ui:Ku dar kooxo diyaar ah}}, {{ui:Koox magac ku saabsan}}, iyo {{ui:Lakab raadi}}; ama ku qor {{cmd:LAYGROUP}} (`LG`). Eeg [Abaabul lakabyada](topic:layers#group-layers).
- **Dabaqyo is-dul saaran.** {{cmd:FLOORS}} (`FLR`), ama {{ui:Dabaqyo…}} menu-ga {{ui:Wax dheeraad ah}} ee kooxda {{ui:Muuqaal}}. Muuqaal ku yaal xaashi wuxuu tusi karaa hal dabaq hoos {{ui:Dabaqa la muujiyay}} sifooyinka. {{cmd:FLOORLAYERS}} wuxuu dabaqyada u beddelaa lakabyo fayl u socda qof kale. Eeg [Dabaqyo is-dul saar naqshad mid](topic:floors).
- **Darbiyo caqli leh, albaabo iyo daaqado 2D.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) iyo {{cmd:DELOPENING}}. Geesaha, isku xidhka T iyo isgoyska waa loo xisaabiyaa. Darbiyadu waxay hayaan diiwaan sida ay isugu xidhan yihiin, sifooyinkana waxay helaan {{ui:Ka ma xidhmo bilowga}} / {{ui:Ka ma xidhmo dhamaadka}}, Xariiqda goobta iyo {{ui:Dherer}} la tafatiri karo. Eeg [Samee darbiyo 2D, albaabo iyo daaqado](topic:walls-2d).
- **Qalabka darbiga qorshaha.** Ku qor {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} iyo kuwa kale. Weli badhamo qalab ma lahan. Eeg [Qaabab darbi, jarid, kala-fogaan iyo xidhan](topic:wall-tools-2d).

### Qoraalka

- **Qaababka qoraalka.** {{cmd:STYLE}} (`ST`), ama {{ui:Qaabka qoraalka}} ee qalabka {{ui:Sawir}}: qaabab magacaabay oo leh far, dherer, qiyaas ballac iyo janjeer. Eeg [Deji farka iyo cabbirka qoraalka adigoo isticmaalaya qaababka qoraalka](topic:text-styles).
- **Tafatiraha qoraalka paragraph-ka ee qaabaysan.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ama laba jeer riix qoraalka ayaa furaa sanduuq leh far, cabbir, qoyan, fadhi, hoos-xariiq, xariiq dhex mara, midab, isla-qabasho iyo calaamadaha darajada, plus-minus iyo dhexroor, iyo {{ui:Hagaag}} iyo {{ui:Jooji}}. Eeg [Qaabee qoraalka paragraph-ka](topic:format-paragraph-text).
- **Diagram ka yimid XML draw.io.** {{cmd:DIAGRAM}} (`T2D`) wuxuu sidoo kale akhriyaa XML draw.io oo la dhejiyey. Eeg [Samee diagram qoraal ka](topic:text-to-diagram).
- **Qoraalka Thai ee soo saarka PDF.** Waxa uu hore u muujin jiray calaamado su'aal ah.

### Meel dheeraad ah iyo caawimo sawir

- **Sadarka amarka oo caaga ah iyo qaybta sare oo yar.** Jiid gacanka sadarka amarka si aad u kala soo baxdo, jiid geeska sare si aad u yareyso safafka, {{key:F2}} wuxuu furaa taariikhda. {{ui:Dejinta}} › {{ui:CadCraft}} › {{ui:Sadarka amarka}} iyo doorashooyinka qaybta sare isku dejin ayay leeyihiin. Eeg [Dejinta](topic:settings#command-line).
- **Menu-ga object snap.** Midig-guji {{ui:Snap}} ee status bar-ka, ama ku qor {{cmd:OSNAP}}.
- **Snap gridka.** Badhanka {{ui:Grid snap}} ee status bar-ka, ama {{key:F9}}: barta la doortay waxay u socotaa barta gridka ee ugu dhow marka aan object snap barta qaadan.
- **Qaanso toban siyaabood, iyo Continue.** {{ui:Qaanso}} ee qalabka {{ui:Sawir}} ama {{cmd:ARC}}: 3-barta, qoyska Start/Center/End iyo qoyska Center/Start/End, iyo Continue (riix {{key:Enter}} barta bilowga) laga bilaabo khadkii ugu dambeeyay, qaanso ama polilayn.
- **Panelka Dukumentiyada.** {{cmd:DOCUMENTS}} (`DOCS`) ama {{ui:Dukumentiyada…}} menu-ga {{ui:Wax dheeraad ah}} ee kooxda {{ui:Muuqaal}}: nooca, xaaladda iyo check out ee naqshad kasta oo ku jirta galka mashruuca. Wuxuu furmaa sida sanduuq dhexe ah. Eeg [Dukumentiyada](topic:documents).

### Faylal

- **Cabbirrada birta UK.** 976 qaybood oo ku jira panelka Standard, lagu qoro sida naqshadaha ku qoran (tusaale `305x165x40 UB`).
- **Xirmooyinka Koonfurta Afrika** (qaabka sawirka iyo shuruucda dhismaha) sida xirmooyinka add-on-ka Shuruucda dhismaha. Tirooyinka lama xaqiijin.
- **Add-ons ee CadCraft,** la dari karo marka la baahdo oo la damiyo caadi ahaan: naqshadda iftiinka gudaha, naqshadda chip (HDL ilaa layout), xardhida router-ka, wareegga circuit-ka, sprockets-ka silsiladda roller, iyo xirmooyinka dalalka ee Shuruucda dhismaha.

## Waa la hagaajiyay

- Guuritaanka, wareejinta ama cabbirka hatch-ka qaabkiisa ayaa ka tagay.
- {{cmd:GRIDMOVE}} wuxuu raacay darbi dhan oo ka bilaabma khadka gridka oo keliya. Hadda darbi waxaa lagu xukumaa dhamaadyadiisa.
- Gridku wuxuu muuqday oo keliya gudaha xuduudaha naqshadda xitaa xuduudaha la damiyay.
- Liiska bloogyada ee panelka dhinaca wuu scroll-gareeyaa, magac aan bloog ahayn wuxuu liistaa bloogyada ka bilaabma ("Ma ula jeedaa?").
- Faylasha DWG ee AutoCAD 2018 iyo ka dambeeya oo leh nooca dayactirka sare waxay ku guul-daraysteen "bad BITLONG code 11".
- Faylasha DXF R12 ee AutoCAD diiday ("Unknown group 1001 for table") hadda halkaas way furmaan.
- Faylasha aad u waaweyn (qiyaastii 70,000 entity iyo ka badan) waxay ku guul-daraysteen "Maximum call stack size exceeded".
- Sanduuqa qoraalka paragraph-ka, cabbir cusub oo loo qoray qayb la doortay wuxuu ilaalinayaa xulashada.

## Appsyada oo dhan

Tooltips Bootstrap ee badhan kasta oo leh caawin, talo bilow oo aad xidhi karto, safafka tab-ka ee soo jeedda marka aanay ku habboonayn, iyo cinwaanka tab-ka browser-ka oo raaca naqshadda furan (`<drawing> - CadCraft | CadCraft`). {{ui:Dejinta}} › {{ui:Qaabeynta}} hadda waa liis hoos u dhacda oo leh doorashooyin laba-sadar. Liiska luuqadaha ee {{ui:Dejinta}} wuu dheeraan yahay marka loo barbardhigo 0.8. Wada-tafatirka toosa, uruurinta Maktabadda, iyo unugyada miisaanka iyo heerkulka waxaa lagu sharaxay qoraallada Studio.

## Xadka runta ah

- Qoraalka paragraph-ka ma leh liisaska xabbadaha ama tirooyinka, tab-ka xukunka, ama justify. PDF-yada la soo saaray waxay qoraalka ku dhigaan Helvetica.
- Darbiyada qorshaha waa toosan yihiin, sidaas darteed qaansada waxaa loo sawiraa darbiyo gaagaaban. Hubinta bulshada ee qalabka darbiga weli way sugaysaa.
- Koox-lakabyada lama qoro qaabka AutoCAD ee u gaar ah, sidaas darteed AutoCAD wuxuu muujiyaa liis fidsan. Barnaamijyada kale waxay muujiyaan dabaqyada oo dhan wada jir ah, ilaa aad {{cmd:FLOORLAYERS}} socodsiiso.
- Panelka Dukumentiyada weli laba qof kuma isticmaalin wadaag dhab ah. Router carving waxa lagu socodsiiyey mashiin dhab ah oo aan jirin. Qiyaasta iftiinka waxa lagu hubiyey raad-qaadis photon, ma aha barnaamij kale. Add-ons-ka injineernimada waa caawiyeyaal hubin, ma aha beddel u ah dib-u-eegista injineerka.
- Luuqadaha aan Ingiriisi ahayn waa qabyo mishiin ah ilaa qof af-hooyo ahi akhriyo; qaar ka mid ah erayada cusub Ingiriis oo keliya ayay ku jiraan.

## Hore: 0.8 iyo 0.8.1

Waxa ka bedelay CadCraft 0.8 iyo 0.8.1, marka la barbardhigo 0.7. 0.8 (1 November 2026) wuxuu ku daraa caawiyeyaasha sawirka oo ka shaqeeya naqshaddaada, iyada oo xeerar ku jira kombuutarkaaga iyo aan moodeel lahayn; 0.8.1 (2 November 2026) wuxuu hagaajiyaa cilladaha la soo sheegay ka dib.

### Cusub

**Sawir oo dhammeysa fikirkaaga**

- **Ruux wuxuu muujiyaa waxa soo socda.** Amar la socodsiinin, ruux cawl oo dashed ah wuxuu muujiyaa waxa qaababka naqshaddaada ay sheegayaan inuu soo socdo: bushimaha xiga ee isla masaafada, tallaabada xigta ee sallaalka, darbiga maqan ee qol. Riix {{key:Tab}} si aad u sawirto tallaabo keliya, ama {{key:Esc}} si aad u dhigto. Wuxuu eegaa kaliya walxaha ugu dambeeyay, sidaas darteed wuu siman yahay naqshad weyn. Demi wuxuu ku jiraa {{ui:Dejinta}} › {{ui:CadCraft}} ama {{cmd:AUTOCOMPLETE}} `Off`.
- **Barta xigta marka khad sawirayso.** Dhexdhexaadka {{cmd:LINE}} ama {{cmd:PLINE}} ruuxu waa barta xigta: tallaabada xigta ee sallaalka, geesaha afraad ee afar-geesle, ama barta xidhaysa. Cursor-ka u keen meesha oo riix {{key:Tab}}, sidii aad halkaas riixday.
- **Sawirrada qalinka waxay noqdaan juquraafi sax ah.** {{cmd:SKETCHFIX}}: ku sawir jiidyo qalin, mouse ama farta, mid kastaa wuxuu noqdaa khad, goobo, qaanso, afar-geesle ama polilayn nadiif ah, oo ku dhejisan wixii horay loo sawiray. Eeg [Sawir qalin ku dhex hel juquraafi sax ah](topic:sketch-with-a-pen).
- **Sawir sawir waxa uu noqdaa naqshad.** {{cmd:PHOTOSKETCH}} (`PSK`) wuxuu helaa waraaqda sawirka, wuxuu toosiyaa aragga, wuxuu dabaqaa cabbirka warqadda iyo miisaanka aad siiso, wuxuuna raad-qaadaa khadadka qalinka midab kasta oo qalin ah lakab kasta. Qoraalka ma la raad-qaadayo.
- **Cabbir sida xeerarka.** {{cmd:AUTODIM}} (`ADIM`) wuxuu sameeyaa silsiladaha cabbirrada dhinacyada aad doorato, cabbirka guud, ballaca furidda, dhexroorka godka, iyo, `Grid` ka dib, masaafada gridka. Weligiis ma soo celiyo cabbir horay u jirtay.
- **Dhaqaajiso khadka gridka oo kooxda raaca.** {{cmd:GRIDMOVE}} (`GM`): darbiyada ku dhammaada khadka gridka way fidaan, kuwa ku jira khadka, tiirarka, bubble-ka iyo calaamaddiisa way dhaqaajaan, cabbirrada ku jirana waxay cabbiraan masaafada cusub. Hal tallaabo oo ka noqo.

**Xaashiyada, faahfaahinta iyo calaamadaha**

- **Xaashiyo isu habeeya.** {{cmd:AUTOSHEET}} wuxuu qaadaa muuqaalladaada magacaabay (ama qaybaha kala duwan ee moodeelka), wuxuu doortaa cabbirka warqadda iyo miisaan caadi ah, wuxuuna muuqaalladaas ku dhigaa xaashiyo cusub oo leh blokka cinwaanka iyo caption magac-iyo-miisaan. Wax walba waa la tafatiri karaa. Eeg [Xaashiyada iigu habee](topic:lay-out-sheets-for-me).
- **Faahfaahinta shirkaddaada, oo la soo jeediyo markaad sawirayso.** {{cmd:DETAILS}} (`DET`) wuxuu kaydiyaa bloogyada faahfaahinta ee aad leedahay. Marka waxa aad xulatay uu la mid yahay mid ka mid ah, sida ereyada lakabyadiisa, magacyada bloogyada iyo qoraalada, status bar-ku wuu sheegaa; dooro oo dhig. {{cmd:DETAILS}} › Wadaag wuxuu liistaaga ku dhigaa galka Documents-kaaga, wuxuuna soo geliyaa waxa kooxdaadu ku dartay. Dejintu waxay damisaa soo jeedinta.
- **Calaamado bloogyada dushooda.** {{cmd:TAGS}} wuxuu qeexaa calaamad (nooceeda, qiimayaasha ay qaadan karto, bloogyada ay khuseyso), wuxuu dejiyaa bloogyada aad xulatay, wuxuuna liistaa iyaga sida jadwal aad ku keydin karto CSV. Qeexidaadka waxa lagu kaydiyaa DWG. Eeg [Calaamadaha](topic:tags).
- **Xuduudaha naqshadda.** {{cmd:LIMITS}} wuxuu dejiyaa afar-geesle naqshadda: gridku wuu buuxiyaa, zoom All wuxuu tusaa. Xuduudaha waxay muuqdaan sida khaduud, waana la kaydiyaa DWG iyo DXF, oo leh xuduudaha warqadda. Eeg [Dejinta xuduudaha naqshadda](topic:drawing-limits).

**Dadka kale iyo barnaamijyada kale**

- **Calaamadin u beddel dib-u-eegis.** {{cmd:REDLINE}} wuxuu akhriyaa xirmada MarkupCraft qorto oo wuxuu liistaa isbeddel kasta. Ansixi ama diid mid kasta oo leh faallo; kuwa la aqbalay waxay helaan daruur dib-u-eegis iyo diiwaan dib-u-eegis tallaabo keliya, waxaadna keydinaysaa faylka jawaabaha ee xirta calaamadinta MarkupCraft. Eeg [U beddel calaamadin dib-u-eegis](topic:redline-to-revision).
- **Naqshado git iyo Fossil ay isku dari karaan.** Marka {{ui:Faylal la isku dari karo}} lagu daro {{ui:Dejinta}} › {{ui:CadCraft}}, walax kasta wuxuu helaa fur aan isbeddelin (faylasha ayaa ka weyn 10 boqolkiiba). `cadcraft merge base ours theirs` ayaa markaas isku dari kara wax-beddelka laba qof oo DWG ama DXF ah walax walax, wuxuuna sheegaa kaliya meelaha laba qof isla shay beddeleen. Eeg [Isku dar tafatirka laba qof oo naqshad](topic:merge-drawings).
- **Waxa la beddelay, erey ahaan.** Taariikhda, Isbarbardhig wuxuu bixiyaa liis caadi ah: meelaha isbeddelay, cabbirka meelahaas, waxa lagu daray, lagu tirtiray ama lagu beddelay, iyo qoraalka la tafatiray. Eeg [Sheeg erey ahaan waxa isbeddelay](topic:changes-in-words).
- **Jihooyinka iyo xagalaha.** Ku qor jihada sida jihada sarveyorka sida N45°23'30"E, ama darajo, daqiiqo iyo ilbiriqsi, meel kasta oo xagal la weydiiyo; AUNITS wuxuu dejiyaa sida xagalaha loo muujiyo. Eeg [Ku qor oo muuji jihooyinka iyo xagalaha](topic:bearings-and-angles).
- **Farka SHX ee aad leedahay.** Siiso CadCraft galka farka SHX, iyo qaababka qoraalka ee magacyadooda, waxa lagu sawiraa farkaas, shaashadda iyo daabacadaha. Eeg [Qoraal ku sawir farka SHX ee aad leedahay](topic:shx-fonts).
- **Diagram ka qoraal.** {{cmd:DIAGRAM}} wuxuu akhriyaa Mermaid flowchart, PlantUML component diagram, D2 ama liis from-to wuxuuna sawiraa bloogyo iyo xidhiidho aad tafatiri karto. Eeg [Samee diagram qoraal ka](topic:text-to-diagram).
- **Walxaha OLE ee DWG.** {{cmd:OLELIST}} wuxuu liistaa walxaha OLE ee DWG ku jira oo CadCraft aan si toos ah u dhigi karin, wuxuuna dhigaa nuqul sawir meesha aad sheegto. Eeg [Sawirro](topic:pictures#objects-from-other-programs-ole).
- **Xisaabahaagu waxay la jiraan naqshadda.** Xisaabta sheetsyada iyo sababaha naqshadda waxay ku kaydsan yihiin DWG-ga iyagoo wata miiska fasalada.

**Tafatirka aan aragga lahayn**

- Shid {{ui:Tafatirka aan aragga lahayn}} {{ui:Dejinta}} (ama ku qor {{cmd:ACCESS}} oo jawaab `On`). CadCraft wuxuu sheegaa amar kasta iyo natiijo kasta akhriyaha shaashadda, wuxuu sharraxaa naqshadda iyo waxa u dhow cursor-ka, wuxuu oggolaanayaa inaad cursor-ka u dhaqaajiso oo barta qaadato furaha, wuxuuna ciyaaraa cod snap kasta iyo grip kasta. Meesha browser-kaagu ku aqoonsan karo hadal kombuutarkaaga, amarrada waa la hadli karaa. Eeg [Tafatir adigoon aragin](topic:draft-without-sight).

**Appsyada oo dhan**

- **Luuqadaha.** 54 luuqadood; toban cusub (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek). Luuqadaha ka sokow Ingiriisiga waa qabyo mishiin ah ilaa qof af-hooyo ahi akhriyo.
- **Aaladaha gelinta.** Taabashada, qalinka, 3D mouse, gacanka ciyaarta iyo MIDI.
- **Safafka qalabka iyo jadwalka sifooyinka.** {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Safka qalabka}} wuxuu bixiyaa Wrap, 2 safaf ama 1 safaf appsyada kale. CadCraft wuxuu leeyahay dejintiisa {{ui:Dejinta}} › {{ui:CadCraft}} (eeg [Safafka qalabka](topic:settings#toolbar-rows)). Jadwalka sifooyinka ee la wadaago waxa uu ku jiraa saddex appsyo oo kale, ma aha CadCraft.
- **Dhibaatooyin, {{ui:Kala beddela}} iyo kordhinno.** Panel la wadaago oo digniin ku siiya dhammaan appsyada, aragtiisa {{ui:Kala beddela}} ee CadCraft Studio oo ku tusaysa qofka meesha uu joogo (eeg [Naqshad mid oo wada leh](topic:work-live)), iyo liiska add-on-ka.
- **Ku xidh AI-gaaga.** Hal xidhiidh oo ka yimid CadCraft Studio ilaa siddeed appsyada, oo leh heer kasta: akhri kaliya, soo jeedi ama wax ka beddel, iyo diiwaan erey-erey ah oo ku qoran waxa kaaliyuhu sameeyay. CadCraft ma lahan AI u gaar ah, {{ui:Weydii}} ee appsyada oo dhan wuxuu isticmaalaa AI-ga aad xidhdo.

### Waa la hagaajiyay 0.8.1

- **Sifooyinka wuxuu muujiyay 150 halkii 12'-6".** Naqshadaha fiit iyo inji ah. Goobaha appka laftiisa akhriyo ayaa qoraalkooda dib u helay.
- **Faylasha DWG oo qaybta fasalada loo akhriyay nooc khaldan** (GitHub cadcraft#5) hadda si sax ah ayay u furmaan.
- **Crosshair-ku hadda kama muuqdo gadaasha pop-up-ka.**
- **Studio iyo xirmooyinka la xidhay waxay beddeli karaan luuqadda wakhtiga socodka.** Ka hor waxay ahayd Ingiriis keliya. Weli lama tijaabin dhammaan madal kasta: noo sheeg haddii luuqaddu beddelmin.
- **Tablaydhada xaashiga (portrait)** waxay siiyaan meel grid ah canvas-ka, qaabka xaashiyada wuxuuna bilaabmaa 760 px ama ka yar.
- **STRETCH oo daaqad isgoyn leh, iyo LIMITS,** waxa lagu soo sheegay Studio 0.8.0, waxaana horay u saxnaa web build 0.8; dejiyaha soo sheegay wuxuu lahaa rakiba hore. Studio 0.8.1 wuu ku jiraa.

### Nooca tan weli ma laha

- **0.8 iyo 0.8.1 kuma saxeexnayn koodka.** Windows wuu digi karaa (dooro {{ui:Macluumaad dheeraad ah}}, kadibna {{ui:Ku socodsii hadda}}); Mac-ka, midig-guji CadCraft Studio oo dooro {{ui:Fur}}. Dukaamada store waa la joojiyay, dhismaha iPad iyo iPhone lama dib u dhisin 0.8.1.
- **Sawirrada qalinka iyo sawirka sawir** waxa lagu tijaabiyey sawirro la sameeyay oo kaliya mouse, weli ma jiro qalin dhab ah, shaashad taabasho, ama sawir gacanta ku sameysan waraaqda.
- **Tafatirka aan aragga lahayn** waxa lagu tijaabiyey hubinta toosan, weli ma jiro akhriye shaashad ama tijaabiye indha la'aan.
- **Wadaagidda faahfaahinta** lama hubin laba qof, folder-ka Team Cloud Plan oo ah folder-ka Documents lama dhisin.
- **Isku dhejinta** waxay shaqeysaa faylasha DWG iyo DXF ee CadCraft; faylasha appsyada kale lama dhisin.
- **Isbeddelka daaqadaha:** CadCraft wuxuu sheegaa tallaabo kasta oo la dhammeeyay, laakiin Studio ma leh Ka noqo keli ah oo dhammaan appsyada; app kasta wuxuu ka noqdaa tallaabooyinkiisa.
- **OLE objects ee DWG** waa la ilaaliyaa laakiin meeshooda lama sawirin.
- **Akhrinta miisaska qaabka miiska (CTB)** ee barnaamijyada kale waa la dhisay laakiin lama hubin fayl barnaamij kale ka yimid.
- **Connect your AI:** xidhiidhka hal-riix ee Studio, xidhiidhiyaha martiqaadka ee browser AI, furaha API ee aad leedahay gudaha Studio iyo xirmada MCP ee la daabacay lama ballan qaadin nooca tan.

Nooca ka horreeya, eeg [Waxa cusub ee 0.7](topic:whats-new-0-7).
