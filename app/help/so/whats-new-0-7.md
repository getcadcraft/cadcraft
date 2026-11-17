---
title: Waxa cusub ee 0.7 (hore)
summary: PDF hoos-saar iyo soo dhoofinta PDF, naqshadaha scan-ka oo leh trace otomaatig, splines dhab ah oo leh SPLINE, SPLINEDIT iyo PEDIT, maareeyaha qaabka cabbirka, qoraal ilaalinaya qaabkiisa, WBLOCK iyo miisaankaaga, jidh 3D ka yimid barnaamijyada kale, diiwaangelinta scans-ka, panelka Laser, USD export, History iyo daabacaadda CadCraft Studio, naqshad hage-ah oo koowaad, qalabka dhinac kasta ama safaf yar, iyo wax badan oo kaaliyayaasha AI.
keywords: waxa cusub 0.7, nooca hore, qoraallada siidaynta, liiska isbeddelka, isbeddel, 0.7, nooca, astaamaha cusub, pdf, pdfattach, pdfimport, hoos-saar, scan, scanattach, scantrace, trace, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, qaabeyn, wblock, scalelistedit, liiska miisaanka, acis, jidh 3D, registerscans, diiwaangeli scans, icp, e57, las, laser, grbl, g-code, usd, usdout, taariikh, noocyo, isbarbardhig, daabac, daabacaha, png, svg, qaabka soo saarka, nooca khadka, safar, xaashi gaaban, khariidadda amarrada, booska qalabka, safka qalabka, toolbardock, regen, regenall, trackpad, fur-jiid, bogga koodka, cyrillic, kuuriyaan, jabbaani, shiinees, korontada, rcd, p&id, pid, acad.lsp, acaddoc.lsp, galka taageerada, kaaliyayaasha, mcp, unugyada, boortaqiis
from: d07ca034
---

Waxa isbeddelay CadCraft 0.7, marka la barbardhigo 0.6. Badankiisa waxaa lagu weydiistay Discord. Liiska waxaa lagu kooxeeyay qaybaha, kuwa ugu muhiimsan ayaa horreeya.

## Cusub

### PDF-yada iyo naqshadaha scan-ka

- **Dhig bog PDF ah hoosta naqshadda.** {{cmd:PDFATTACH}} (`PDFATT`) wuxuu geliyaa bog cabbirkiisa dhabta ah ama miisaan aad qortay. Ku dhaji khadadkiisa, dhimi indhaha, ka dhig madow-cad ({{cmd:PDFADJUST}}), jar ({{cmd:PDFCLIP}}) oo beddel lakabyada PDF-ka ({{cmd:PDFLAYERS}}). Waxa loo daabacaa sida khadad, buuxin iyo qoraal; DWG ama DXF 2000 waxay ku hayaan xidhiidh faylka. Marka PDF lagu furo {{ui:Fur}}, wuxuu weydiinayaa in la xidho ama la soo dhoofiyo. Eeg [Hoos-saarka PDF iyo soo dhoofinta PDF](topic:pdf-underlay).
- **Ka dhig bog PDF shay naqshad.** {{cmd:PDFIMPORT}} (`PDFIM`) wuxuu sameeyaa khadad, polilaynno, goobo, qaansooyin, xarriijin adag iyo qoraal ku jira lakabyo loo magacaabay PDF-ka, cabbirkiisa dhabta ah, miisaan aad qortay, ama miisaan laga qaado laba barta iyo masaafo dhab ah, hal tallaabo oo ka noqo. Eeg [Soo dhoofinta bog](topic:pdf-underlay#import-a-page).
- **Naqshado scan-ka.** {{cmd:SCANATTACH}} wuxuu soo geliyaa PNG, JPEG ama TIFF (hal bog ama dhammaantood) ama bog PDF ah oo sawir ah. Kadibna ku cabbir laba barta ({{cmd:SCANSCALE}}), ku habee ({{cmd:SCANALIGN}}), ku toosi khadadkooda dheer ({{cmd:SCANDESKEW}}), ka dhig madow-cad oo ka saar dhibcaha yaryar ({{cmd:SCANCLEAN}}), jar oo tirtir qaybo ka mid ah. Tallaabo kasta waa hal tallaabo oo ka noqo, faylka asalkiisuna waa la kaydiyaa. Eeg [Naqshadaha scan-ka iyo trace-ka](topic:scanned-drawings).
- **Raad-qaad scan-ka khadad iyo qaansooyin.** {{cmd:SCANTRACE}} wuxuu sawiraa khadadka scan-ka sida khadad iyo qaansooyin lakab cusub, SCAN-TRACE, heer aad dejiso, wuxuuna ka tagaa qoraalka iyo xarriijinta sidaas. Warbixinta waxay sheegaysaa waxa la sameeyay iyo waxa la tagay, mana aha dacallad in natiijadu sax tahay: ka hubi sawirka. {{cmd:RASTERSNAP}} wuxuu oggolaanayaa snap-yada inay helaan dhamaadyada, geesaha iyo isgoyska scan-ka. Waxba looma dirin meel kale, moodeel la tababarey lama isticmaalin. Eeg [Raad-qaadista](topic:scanned-drawings#the-trace).

### Sawirka iyo wax-beddelka

- **Splines dhab ah.** {{cmd:SPLINE}} (`SPL`) wuxuu sawiraa khug dhex mara barta ama ka yimaada barta xakamaynta (darajo 1 ilaa 5), oo leh xagal-dhamaad; {{cmd:SPLINEDIT}} (`SPE`) wuxuu dhaqaajiyaa, ku daraa, tirtiraa barta fit ama xakamaynta, dejiyaa miisaanka, furaa, xidhaa, rogaa, ama spline wuxuu u beddelaa polilayn. Splines-ka DWG iyo DXF waxay ku furmaan sida splines, DWG iyo DXF 2000 waxay kaydiyaan sida splines. Eeg [Splines iyo polilaynno](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) wuxuu xidhaa oo furaa polilaynno, ku xidhaa khadad iyo qaansooyin, dejiyaa ballac keliya, ku habboonaysiiyaa khug geesaha ama spline dhexdooda, dib u qaadaa (Decurve), rogaa, wuxuuna tafatiraa dhowr mar wakhti. Eeg [Tafatirka polilayn](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) wuxuu qorayaa bloog, walxo ama naqshad oo dhan fayl DWG ama DXF cusub, oo keliya lakabyada, qaababka iyo bloogyada ay isticmaalaan ku jira. Eeg [Qor bloog ama walxo fayl u gaar ah](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN iyo REGENALL.** {{cmd:REGEN}} (`RE`) wuxuu dib u sawiraa tabka aad saarantahay naqshadda, {{cmd:REGENALL}} (`REA`) wuxuu sawiraa dhammaan tabyada, panelada iyo naqshadaha furan. Eeg [REGEN iyo REGENALL](topic:commands#regen-and-regenall).

### Qoraal iyo cabbir

- **Qoraalku wuu ilaaliyaa qaabkiisa.** Qoraalka paragraph-ka ee barnaamijyada kale midabka erey kasta, qoyan iyo fadhiga (italic), hoos-xariiq, tirooyinka qeybta-qeybta ah iyo dherarkiisa ayaa ilaalinaya: waxay ku muuqdaan shaashadda iyo PDF-yada, waa la ilaaliyaa marka erayada la tafatiro, oo waa la kaydiyaa mar kale. Eeg [Qaabeynta gudaha qoraalka paragraph-ka ee barnaamijyada kale](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Maareeyaha qaabka cabbirka.** {{cmd:DIMSTYLE}} (`D`) wuxuu sameeyaa, beddelaa, isbarbardhigaa oo codsadaa qaababka cabbirka ee magacaabay; beddelidda qaab kasta waxay beddeshaa cabbir kasta oo isticmaala. {{cmd:DIMEDIT}} (`DED`) wuxuu dib u dhigaa qoraalka, wuxuu geliyaa qoraal cusub, wuxuu rogaa ama foorarinayaa khadadka fidinta; {{cmd:DIMTEDIT}} wuxuu dhaqaajiyaa qoraalka bidix, midig ama dhexe. Eeg [Qaababka cabbirka ee magacaabay](topic:dimension-settings#named-dimension-styles).
- **Miisaankaaga.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) wuxuu ku daraa miisaanno sida 1:75 liisaska miisaanka muuqaalka iyo soo saarka; waa la kaydiyaa naqshadda (DWG iyo DXF 2000), naqshad barnaamij kale ka timaadaana liiskeeda ayay keenaysaa. Eeg [Miisaanno](topic:units-papers-scales#scales).
- **Qoraal alifbeey kale.** Faylasha DXF ee lagu kaydiyay bogagga koodka Cyrillic, Kuuriyaan, Shiinees, Jabbaani ama Fiyatnaamiis hadda waxay ku furmaan qoraalkooda, qoraalka Shiinees, Jabbaani iyo Kuuriyaan ayaa lagu daabacaa PDF-yada (soo saaruhu wuxuu soo dejiyaa far weyn markii ugu horreysay ee loo baahdo). Eeg [Far](topic:text#font).

### Soo saarka iyo daabacaadda

- **Qaababka miiska soo saarka.** Midab kasta miiska wuxuu hadda sidoo kale dejin karaa nooca khadka, dhamaadka khadka iyo isku xidhka khadka, iyo qaabka buuxinta oo daabaca buuxinta sida khadad hatch; miiskuna wuxuu leeyahay liiskiisa ballacyada iyo heerka nooca khadka. Eeg [Miisaska qaabka soo saarka](topic:plot-pdf#plot-style-tables).
- **Daabacaad, iyo PNG iyo SVG.** Wada-hadalka soo saarka wuxuu leeyahay {{ui:Daabac…}}, {{ui:Soo deji PNG}} (300 dpi) iyo {{ui:Soo deji SVG}}. CadCraft Studio wuxuu liistaa daabacayaasha kombuutarka, warqadahooda iyo tirada nuqulada. Eeg [Daabac](topic:plot-pdf#print) iyo [Faylasha sawirka iyo SVG](topic:plot-pdf#picture-and-svg-files).

### 3D iyo daruuro dhibcood

- **Jidhka 3D ee barnaamijyada kale.** Jidhka, gobollada iyo jirka ku jira space-ka moodeelka waxay ka muuqdaan tab-ka 3D, akhriska kaliya, kaydinta DWG-na way dib u qortaa iyagoo aan isbeddelin. Wejiyada dusha aan CadCraft weli sawirin waa la liistaa, ma la male-awaalo. Eeg [Jidhka ka yimid barnaamijyada kale](topic:3d-solids#solids-from-other-programs).
- **Diiwaangeli scans badan.** {{cmd:REGISTERSCANS}} (`REGSCAN`) wuxuu dhigaa scans-ka laga qaaday meelo kala duwan hal qaab, isagoo isticmaalaya lammaanaha barta ama koordinate bartilmaameedka la qoray, wuxuu hagaajiyaa ICP, wuxuu kaydiyaa diiwaangelinta faylka mashruuca yar, wuxuuna qoraa daruurta diiwaangashay hal fayl LAS ama E57. Eeg [Diiwaangeli scans badan hal mid](topic:register-scans).
- **USD export.** {{cmd:USDOUT}}, ama {{cmd:EXPORT3D}} › {{ui:USD}}, wuxuu qoraa jidhadka tab-ka 3D sida `.usda`, `.usdc` ama `.usdz`. Eeg [Dhoofi moodeelka 3D ee USD](topic:usd).
- **Xisaabinta tab-ka 3D.** Meelaha qalabyada tab-ka 3D ay masaafo weydiistaan, xisaab ayaad qori kartaa, sida sadarka amarka. Eeg [Qiimaha la qoray ee xisaabta](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Waxa la sameeyo

- **Dir naqshadda laser.** {{cmd:LASER}}, ama {{ui:Muuqaal}} › {{ui:Wax dheeraad ah}} › {{ui:Laser…}}, wuxuu furaa panel naqshadda dushiisa: lakab kasta wuu gooyaa, wuu xardhaa, wuu qoraa khadad, wuu buuxiyaa qaabab, wuu qoraa sawir ama lama diro, iyo awooddiisa, xawaarahiisa iyo marxalladiisa. Hordhacu wuu raacaa wax-beddelkaaga, {{ui:Kaydi G-code…}} wuxuu qoraa GRBL laser-mode G-code, Chrome ama Edge-ka panelku wuu qaabayn karaa shaqada oo wuu dirin karaa USB-ga. Dejinta waa la kaydiyaa naqshadda (DWG iyo DXF). Eeg [Dir naqshadda laser](topic:laser-cutting).
- **Rakibaadda dhismaha ee add-on-ka Korontada.** Xirmooyinka xogta, telefoonka iyo TV-ga, furaha iyo badhanka waqtiga, heerkulka, calaamadda baxsiga, faraha, biyo-kululiyaha, dabka karinta, dhibcaha charge-ka EV, mitirka tamarta iyo sub-board-ka, iyo calaamadaha RCD iyo RCBO. Wareeggu wuxuu qaadi karaa RCD, jadwalka panel-ka wuxuu leeyahay tiir RCD, hubinta waxay magacaabaa wareegyada socket-ka oo aan RCD 30 mA ama ka yar lahayn. Waa xusuus qorshe, ma aha hubin koodka.
- **Add-on P&ID.** P&ID wuxuu sawiraa jadwalada habka: calaamado leh barta isku xidhka, khadadka habka iyo signal-ka, calaamadaha, lambarada khadka, liisaska khadka, qalabka, dareemayaasha iyo valve-ka (CSV ama buug shaqo) iyo hubinta. Waxa uu ku yimaadaa CadCraft waana la damiyaa ilaa aad ku shidayso {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Kordhinno}}. Waa caawiye sawir, ma aha ansixin injineer, erayadiisuna hadda waxay ku jiraan Ingiriis oo keliya.

### Bilowga iyo shaashadda

- **Naqshad hage-ah oo koowaad.** {{cmd:TOUR}} (ama {{ui:Soo qaado safarka}} kaarka bilowga) wuxuu kugu hoggaamiyaa lix tallaabo naqshadda dhabta ah: khad, goobo, dhaqaajin, jar, tirtir iyo cabbir. Isagu ayuu bilaabmaa markii ugu horreysay ee CadCraft furmo oo aan wax ku jirin. Eeg [Hage ma doonaysaa?](topic:getting-started#prefer-to-be-guided)
- **Xaashi gaaban iyo khariidadda amarrada.** [Xaashiga gaaban](topic:cheat-sheet) wuxuu leeyahay 40 amarro maalinle ah hal bog, oo sidoo kale PDF lagu daabacayo; [khariidadda amarrada](topic:command-map) wuxuu liistaa amarrada magacyadooda gaagaaban, A ilaa Z.
- **Qalabka dhinac kasta.** {{ui:Dejinta}} › {{ui:CadCraft}} › {{ui:Booska qalabka}}: sare (sida hore), hoos, bidix ama midig, ama qor {{cmd:TOOLBARDOCK}}. Eeg [Booska qalabka](topic:settings#toolbar-position).
- **Safafka qalabka.** {{ui:Dejinta}} › {{ui:CadCraft}} › {{ui:Safka qalabka}}: ku laabo si ay ugu habboonaato, 2 safaf ama 1 safaf, qalabka CadCraft iyo qaababka Drafting classic iyo Ribbon. {{key:Shift+Ctrl+F1}} wuxuu u gudbaa mid kasta, {{key:Ctrl+F1}} wuxuu u gudbaa waxa badamadu muujinayaan, {{cmd:TOOLBARROWS}} iyo {{cmd:TOOLBAR}} ayaa dejiya. Caddaynta bilowga waxay leedahay badhan xidh. Mahadsanid GJoe2, oo u soo diray tan pull request ahaan. Eeg [Safafka qalabka](topic:settings#toolbar-rows).

### CadCraft Studio dhexdiisa

- **Taariikh.** {{cmd:HISTORY}} (`HIST`), ama {{ui:Muuqaal}} › {{ui:Wax dheeraad ah}} › {{ui:Taariikh…}}: nuqullada Studio kaydiyo markaad naqshad furto iyo markaad kaydinayso, iyo noocyada daruuraha ee naqshadda markii aad ka furtay daruurta. Fur ama soo celi mid, ama isbarbardhig laba, oo waxa lagu daray, lagu tirtiray iyo lagu beddelay oo midabka lagu muujiyo. Eeg [Taariikh](topic:history).
- **acad.lsp iyo acaddoc.lsp.** Dooro galka taageerada {{cmd:APPLOAD}}: laba faylkaas waa la soo rarayaa markii CadCraft bilowdo (acaddoc.lsp mar kale naqshad kasta oo cusub), `S::STARTUP` ayaa ka dambeeya. Eeg [Soo rari barnaamijyada](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Wada-hadalka soo saarka daaqad gaar ah.** Badhan ku yaal cinwaankiisa ayaa u guuraa daaqad aad ku dhigi karto shaashad kale. Eeg [Guuri wada-hadal](common:arrange-panels#move-a-dialog).

### Kaaliyayaasha AI

- **Faylal magac ahaan, galal aad doorato.** CadCraft Studio kaaliyuhu wuxuu furi, kaydin, soo saari karaa faylal magac ahaan, wuxuuna amarka siin karaa faylka uu weydiisto (INSERT faylka ka, COUNT-ka soo dhoofinta, SAVEAS, PLOT), laakiin kaliya galalka aad ku dartay hoos {{ui:Dejinta}} › {{ui:CadCraft}} › {{ui:Kaaliyayaasha}} › {{ui:Galalka uu isticmaali karo}}. Eeg [Ogolow inuu isticmaalo faylasha galalka aad doorato](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Wicitaano yar.** Kaaliyuhu wuxuu qori karaa sadar amar oo dhan hal mar, wuxuu amar furan u hayn karaa wicitaanada u dhexeeya, wuxuu tiri karaa walxaha iyadoo aan liisan noocooda iyo lakabyadooda, wuxuuna bloog ku geli karaa qiimayaasha sifooyinkiisa hal tallaabo.
- **Aan daaqad lahayn.** Sadarka amarka `cadcraft` wuxuu qoraa soo saarka SVG, wuxuuna beddelaa, soo saaraa, hubiyaa ama sharaxaa faylal badan isla mar. Xirmada MCP weli lama daabicin. Eeg [Shaqaynta faylasha adigoon furin CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Waa la beddelay

- **Trackpad-ku wuu socodsiiyaa.** Ku dhaji laba farood trackpad-ka, shaashadda 2D way raacdaa; pinch iyo wheel-ka mouse-ka waa zoom. Eeg [Mouse, trackpad iyo taabashada](topic:mouse-trackpad-touch).
- **Walxaha OLE waa la ilaaliyaa.** Walxaha dhex-gashan ee DXF waxay muujiyaan sawirkooda ama daaqad calaamad ah oo lagu magacaabay, waana la kaydiyaa DXF 2000. Walxaha DWG waa la ilaaliyaa, waana la qoraa markaad kaydinayso sida DWG, laakiin weli lama muujin. Ka hor waa la lumi jiray marka la kaydiyo. Eeg [Walxaha barnaamijyada kale (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Unugyada naqshad cusub** waxay raacaan unugga aad calaamadisay {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Unugyada}}.

## Waa la hagaajiyay

- Naqshadaha furmay madhan, ama lumiyay daaqad oo muujisay moodeelka oo dhan meeshiisa, hadda waxay furmaan daaqadahooda dhabta ah. Naqshad aan xiriir lahayn waa la ilaaliyaa, warbixinta furidduna way sheegtaa.
- Faylasha DXF ee bogagga koodka hore waxay muujin jireen qoraal Cyrillic iyo Kuuriyaan oo qaloocan. Hadda way akhrisan.
- Qoraalka paragraph-ka ee barnaamijyada kale qaabkiisa waa lumi jiray marka la furayo, oo waxaa lagu kaydin jiray oo caadi ah.

## Appsyada oo dhan

- **Unugyada.** {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Unugyada}} wuxuu leeyahay liis kasta oo dherer, bed, mug, xagal iyo sarir, iyo cabbirrada saxda ah ee qeexidda unugyadu siiyaan (unugga US survey foot waa unug gaar ah). Kuwa aadan isticmaalin dami, waxay ka baxaan liisaska; kan aad calaamadiso, shaqada cusubi wuxuu ku bilaabaa. Faylku had iyo jeer wuxuu hayaa unugiisa. CadCraft-ka, calaamaddu waxay dejisaa unugyada naqshad cusub marka ay tahay unug naqshadda qaadi karto; sanduuqa {{ui:Unugyada}} ee CadCraft weli ma raacayo dejinta. Dherer aad qortid wuxuu leeyahay calaamadda unugga kasta. Eeg [Unugyada, qiimayaasha la qoray iyo liisaska unugyada](common:unit-lists).
- **Qaabeyn kulul iyo panelo ka dhaadhacaya.** {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Cabbirka qaabeynta}} › {{ui:Kooban}} wuxuu ku habboonaysiiyaa wax badan shaashadda (shaashadaha taabashada iyo telefoonada ayaa ilaalinaya badhamada waaweyn). Panel-ka sare kasta wuxuu leeyahay cinwaan dhuumman: jiid si aad u xidho ama u dhaqaajiso, ku dhig cinwaanka panel kale si aad u wadaagto hal qaab sida tabyo, ku dhaji (pin) si uu u dhaqaaqo geeska, ama qari oo dib u soo celi geeska. Eeg [Qaabeynta panelada](common:arrange-panels#make-the-layout-denser).
- **Wada-hadallada wuu dhaqaaqaa.** Jiid wada-hadalka cinwaankiisa si aad uga baxdo jidka naqshadda; wuxuu ku soo laabanayaa meeshii aad ka tagtay. Labo jeer riix cinwaanka si uu dhexda ugu soo celiyo. Eeg [Guuri wada-hadal](common:arrange-panels#move-a-dialog).
- **Qaababka kaaliyayaasha AI.** Toban codsi oo shaqo oo kaaliyahaaga ah (nadiifi naqshad, daabac kooxda, hubi naqshadaha, weydii moodeel su'aalo, isku geeb xisaabinta qadarka, tijaabi nooc qayb...), mid kastaa qalabyada uu wicitaano iyo ogolaanshaha uu u baahan yahay, mid kastaana tijaabooyinkeenna ayaa dib u ciyaaraa. Appsyadu ma leh AI. Eeg [Qaababka kaaliyayaasha AI](common:assistants-recipes).
- **Luuqadaha.** **Português (Portugal)** waa cusub {{ui:Dejinta}} › {{ui:Guud}} › {{ui:Luuqad}}. Waxaa iyo **Português (Brasil)**, **Español (México)** iyo **Bahasa Indonesia** hadda waxay leeyihiin erey kasta oo appsyada ah, iyagoo ah qabyo aan qof af-hooyo ahi akhrin. Mawduucyada caawinta Ingiriis ayey ku qoran yihiin.
- **CadCraft Studio** wuxuu sheegaa sababta cusboonaysiinta ku guul-darraysatay (ma jiro fayl nidaamkaaga hadda, shabakad la'aan, saxeexa xun) halkii uu ku odhan lahaa "Dhammaad", wuxuuna joojiyaa soo celinta kaadhka "Waxa cusub" ee aad xirtay ilaa ay soo baxdo siidayn cusub.

## Nooca tan weli ma laha

- **0.7 kuma saxeexnayn koodka.** Saxeexa, iyo pakiijka Microsoft Store, waxay u guureen 0.8 sababtoo ah ansixinta shahaadada weli ma soo dhammeyn. Hubi SHA-256 ee fayl kasta oo ku taal getcadcraft.com/download. Windows-ka, haddii SmartScreen joojiyo rakiba, dooro {{ui:Macluumaad dheeraad ah}}, kadibna {{ui:Ku socodsii hadda}}. Mac-ka, markii ugu horreysay, midig-guji CadCraft Studio oo dooro {{ui:Fur}}. CadCraft Studio weli kuma jiro dukaan appsyada, mana jiro dhismo iPad ama iPhone.
- Liiska iyo ogolaanshaha {{ui:Unugyada}} waa la kaydiyaa, laakiin ma jiro sanduuq akhrisa.
- Liisaska xagalka iyo jiifka ee {{ui:Unugyada}} waa la kaydiyaa, laakiin weli ma jiro sanduuq akhrisa.
- Akhrinta miisaska qaabka miiska (CTB) ee barnaamijyada kale waxay sugaysaa fayl tusaale.
- Qoraalka Aasiya ee lagu qoro koodhka `\M+` waa la akhriyaa, laakiin weli lama hubin fayl ka timid barnaamij kale.
- PDF hoos-saarka: sawirada ku jira bogga waa lagu muujiyaa shaashadda laakiin lama daabacin, soo saarka kaaliyaha wuxuu ka tagaa hoos-saarka, iyo sida barnaamijyada kale u akhrin doonaan xidhka iyo miisaanka la kaydiyay weli lama hubin.
- Taariikh: CadCraft weli kuma dirto kaydintiisa daruurta, sidaas darteed noocyada daruuraha waa kuwa laga kaydiyay aalado kale iyo webka. Taariikhdu waxay ku jirtaa CadCraft Studio oo keliya.
- Studio ma xafido galka taageerada acad.lsp markii dib loo bilaabo weli lama hubin; haddii ay weydiiso, dooro galka mar kale APPLOAD.
- Panelka Laser weli laser dhab ah lama isticmaalin: tijaabi dejin kasta qaybta xoogga. CadCraft Studio ma leh Web Serial, sidaas darteed Studio-ka panelku wuxuu kaydiyaa G-code oo keliya.
- Diiwaangelinta scans-ka waxa lagu tijaabiyey scans la sameeyay, weli ma aha set scanner dhab ah.
- Ku dhaji laba farood trackpad-ka waxa lagu tijaabiyey dhacdooyin trackpad la-taqliid ah, weli ma aha trackpad dhab ah.
- {{cmd:PEDIT}} ma leh ikhtiyaarka Edit vertex (isticmaal grips ama Sifooyinka). Offset, trim, extend, fillet, break iyo join weli ma aqbalaan splines; dhererka spline (Z) lama hayo.
- Qoraalka cusub ee paragraph-ka weli koodhka qaabeynta lama dhejin karo, SVG plots-ku waxay muujiyaan qoraalka qaabaysan hal midab.
- {{cmd:WBLOCK}}-ka "Naqshad oo dhan" wuxuu qoraa moodeelka keliya, ma aha xaashiyada. Qaabka cabbirka hadda ma kaydinta faylka: naqshad waxay furmaa Standard.
- Qaababka ribbon-ka ma lahan liisaska lakabka, midabka ama nooca khadka weli: isticmaal panelka {{ui:Lakabyada}} iyo {{ui:Sifooyinka}}.
- Dhibcaha daruurta weli lama kaydin naqshadda ama lama soo saaro; faylasha E57 waxay furmaan ilaa 6 milyan oo dhibcood iyo 512 MB.
- Faylasha DWG ee CadCraft weli AutoCAD laftiisa lama hubin.

Waxa kale ee ku jira waa [Wax aan wali la dhisin](topic:not-built-yet).
