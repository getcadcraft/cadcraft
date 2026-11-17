---
title: Faylasha: waxa furmaya, waxa kaydinaya
summary: Qaababka CadCraft furo, kaydiyo iyo dhoofiyo, waxa la ilaaliyo ama la beddelo, iyo meesha faylasha tagaan.
keywords: xclip, clip, xclip boundary, bind clipped, dwg, dxf, pdf, r12, fur, kaydi, dhoofi, soo geli, qaababka, beddelka, soo dejinta, saveas, dxfout, kaydi sida, dwg kaydi, qaab, qsave, xref, xattach, naqshad xiran, tixraac dibada, bind, dib u rar, detach
from: b8c5778d
---

## Hadda

| Qaabka | Fur | Kaydi | Qoraal |
|---|---|---|---|
| DXF (qoraal ama binary, nooc kasta) | Haa | Haa, sida DXF R12, DXF 2000 ama DXF 2000 (binary) | DXF binary wuxuu u furmaa sida qoraal, wuxuuna dib ugu kaydiyaa binary. |
| DWG | Haa | Haa, sida DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ama 2018) | Waxaa akhrisa oo qora maktabadda DWG ee CadCraft (faylasha AutoCAD R13 ilaa 2018). DWG-gaaga waligiis looma beddelo. Faylasha dhaawacan, ama noocyada aan akhrisku wax ka qaban karin, waa la diidaa iyadoo fariin la siinayo. |
| PDF | Wuxuu soo geliyaa bog: sida hoos-lakab ama sida walxo ([PDF hoos-lakabyo](topic:pdf-underlay)) | Haa, markaad daabacayso | PDF vector ah oo xaashi, ama moodeelka miisaan. |

Fayl kasta oo aad furto (ama aad ku bilowdo {{ui:Cusub}}) wuxuu helaa tab gaar ah oo ka sarreeya goobta naqshadda; naqshad cusub oo aan weli la taabanin ayaa halkii tab cusub la isticmaalaa. Guji tab si aad u beddesho, {{ui:×}}-kiisa si aad u xidho (CadCraft wuxuu kugu weydiin doonaa marka ay jiraan isbeddello aan la kaydin), ama u ridi naqshadaha furan side-by-side: eeg [Kala qaybi shaashadda](topic:split-screen).

## Furidda naqshad

- Taabo {{key:Mod+O}}, guji {{ui:Fur}}, ama ku qor `OPEN`, kadibna dooro faylka.
- Ama jiid fayl `.dwg` ama `.dxf` oo ku dhig goobta naqshadda.

Faylka waxaa lagu akhriyaa browser-kaaga. Uma soo dirto meel kale. Taariikhdu waxay sheegaysaa inta walxood iyo lakabyo ah ee soo gashay iyo inta waqti ay qaadatay, qaybta {{ui:Naqshad}} ee dhinaca bidix waxay muujinaysaa qaabka, tusaale ahaan "DWG 2018 (AC1032)".

Akhriska DWG waa qayb ka mid ah CadCraft waxaana la soo dejiyaa DWG-da ugu horraysa ee aad furto kadib markii bogga la soo rarey (dhowr boqol KB), sidaas darteed ma jirto soo dejin gaar ah oo sugaysa. Wuxuu faylka ka akhriyaa gadaal, sidaas darteed bogga wuu jawaabayaa inta DWG weyn ay furmayso.

DXF waxaa lagu akhriyaa qaybo ah oo dhan 4 MB, weligeed qoraal weyn oo keliya, sidaas darteed DXF ka weyn 512 MB ayaa furmaya. Waxa xadaya waa xusuusta kumbiyuutarkaaga: inta DXF ay furmayso, ku filo inuu isticmaalo qiyaastii 16 ilaa 20 jeer cabbirka faylka (DXF 100 MB ah oo leh ku dhawaad 690,000 walxood wuxuu isticmaalay ku dhawaad 1.5 GB tijaabadeenna).

### Waxa soo gala

- Xariiqyada, qowsaha, goobooyinka, polilaynnada (oo leh qaybo qowsaha), ellipse-yada, dhibcaha, qoraalka iyo qoraalka saf badan, soolidyada, hatch-yada (qaababka caadiga ah oo loo sawiray xariiqyadooda, kuwa kale waa midab fiican), tixraacyada bloogyada oo leh sifooyinkooda (qiimo aad tafatiri karto; eeg [Sifooyinka bloogga](topic:attributes)), cabbirrada, iyo habeynta leh aragtiyadooda.
- Splines-ka waxay soo galaan sida splines (darajada, dhibcaha xakameynta, koofiyadda, miisaanka, dhibcaha habaynta); eeg [Splines iyo polylines](topic:splines).
- Multileaders oo leh hal xariiq tilmaame iyo qoraal waxay soo galaan sida CadCraft multileaders oo aad tafatiri karto (eeg {{cmd:MLEADER}}). Kuwa kale (oo leh bloog, xariiqyo tilmaame oo badan ama xariiqyo qanjaruufan) waxaa lagu sawiraa sida barnaamijka kale u sawiray oo hal mar ayay dhaqaaqaan; taariikhdu waxay sheegaysaa inta ay tahay.
- Sawirrada (images) waxay muuqdaan sida gaashaan oo leh magaca faylka sawirka ilaa aad siiso CadCraft faylka {{cmd:IMAGE}}: eeg [Sawirrada naqshadda](topic:pictures#show-the-pictures-a-dwg-uses). Wipeouts waxay muuqdaan sida gaashaankooda, waxayna wali muuqdaan waxa ka hooseeya.
- Miisaska DWG waxay soo galaan sida barnaamijka kale u sawiray.
- Saddex-cabbirka ee goobta moodeelka waxay soo galaan tab-ka {{ui:3D}}, ma aha walxo 2D; sidaas oo kale kuwa ku jira bloogyada, hal mar tixraac kasta oo bloog ah moodeelka. Gudaha bloog iyo xaashi waa la sawiraa sidii toosan, sida jaangooyooyin. Eeg [Moodeelka 3D](topic:3d-solids).
- Lakabyadu waxay ilaaliyaan midabkooda, on, frozen, locked iyo dejinta daabacaadda. DEFPOINTS weligeed lama daabacayo.
- Cabbirradu waxay noqdaan cabbirro CadCraft ah oo la tafatiri karo, goobaha dhibcahoodu la akhriyi karo. Marka hore waxay muuqdaan sidii barnaamijka kale u sawiray; markaad mid bedesho, CadCraft wuu dib u sawiraa qaabkiisa.
- Layout kasta wuxuu noqdaa tab xaashi ah. Barnaamijka kale layout kasta wuxuu leeyahay aragti hore oo qarsan oo ah xaashiga laftiisa; CadCraft ka reebaa taas.

### Waxa weli soo gelin

Wax CadCraft aanu sawiri karin waa la tiriyaa, looma qiyaaso. Sanduuqa "About this file" ee dhinaca bidix wuxuu ku liistaa "Not shown yet:" oo ku xigta nooc kasta oo walxood iyo tirada. Kiisaska caadiga ah waa miisaska DXF-ka, meshes, iyo soolidyada 3D ee bloogyada ku jira.

Soolidyada 3D, gobollada iyo jidhyada moodeelka waxay muuqdaan tab-ka 3D (eeg [Moodeelka 3D](topic:3d-solids#solids-from-other-programs)). Aragtiyada faylka ku jira ee la rogay waxay muuqdaan iyagoo rogan, sidii halkaas, oo waxay ilaaliyaan rogaankooda marka aad kaydiso; sidaas oo kale UCS-ka hadda jira, UCS-yada magacyaga leh iyo aragta la rogay.

Qoraalku wuxuu lagu sawiraa hal xarfo oo Helvetica ah. Silsilad ku dhex jirta barnaamijka asalka ah oo ku habboon hal xariiq ayaa laba xariiq ku noqon karta CadCraft.

## Kaydinta

Waxaa jira saddex siyaabood oo lagu kaydiyo. Mid kasta wuxuu soo dejiyaa nuqul.

- **Kaydi**: taabo {{key:Mod+S}}, guji {{ui:Kaydi}}, ama ku qor `SAVE` (ama `QSAVE`). Waxay ku kaydinaysaa qaabka naqshadda: DWG haddii aad furatay DWG, DXF haddii aad furatay DXF. DWG wuxuu ilaaliyaa nooca uu ku yimid (fayl 2018 wuxuu u kaydiyaa 2018). Naqshad cusub waxay isticmaashaa qaabka iyo nooca DWG ee aad ugu dambeyntii doorateen {{ui:U kaydi sida}} browser-kan; haddii aadan dooran mar, waa DWG qaabka AutoCAD 2000.
- **U kaydi sida**: taabo {{key:Mod+Shift+S}}, guji {{ui:U kaydi sida}}, ama ku qor `SAVEAS`. Wada-hadalka {{ui:Ka kaydi nuqul ahaan sida}} wuxuu bixiyaa {{ui:DWG}}, liis {{ui:Nooca}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ama 2000), {{ui:DXF R12}} iyo {{ui:DXF 2000}}, mid kasta oo leh magaca faylka ay bixin doonto, iyo qaabka iyo nooca hadda ee naqshadda oo horay loo doortay. Guji {{ui:Kaydi}} si aad soo dejiso, ama {{ui:Jooji}} (ama {{key:Esc}}) si aanad waxba u kaydin; taariikhdu markaas waxay leedahay "Not saved." Waxa aad doorato waa la xasuustaa: {{key:Mod+S}} wuxuu isticmaalaa midka loo doortay naqshadan kadibna, naqshadaha cusub ee browser-kan waxay ka bilaabmaan.
- **DXFOUT**: ku qor `DXFOUT`. Had iyo jeer wuxuu soo dejiyaa nuqul DXF R12, {{key:Mod+S}} xiga wali wuxuu ku kaydinayaa qaabka naqshadda laftiisa.

Browser-ku wuxuu soo dejiyaa `<drawing name>.dwg` ama `<drawing name>.dxf`. Kaydinta kasta waa **soo dejin cusub**; faylka aad furatay weligeed looma qoro ama looma beddelo. Taariikhdu waa xaqiijisaa, tusaale ahaan "Saved a copy as Plan.dwg (DWG (AutoCAD 2018)). Your original Plan.dxf is unchanged." DXF-ka waxa ay tidhi "(DXF R12, opens in any CAD program)". Sadarada hoostooda waxay liistaan wax kasta oo isbeddelay intii lagu jiray.

Marka CadCraft uu ku socdo barnaamijka desktop-ka, kaydintu waxay u shaqaynaysaa sida barnaamijyada kale ee desktop-ka: {{key:Mod+S}} wuxuu dib ugu qorayaa naqshadda faylka aad furatay, qaabkiisa iyo noocaa, taariikhduna waxay sheegaysaa halka laga kaydiyay. {{ui:U kaydi sida}} iyo dhoofinta waxay muujinayaan wada-hadalka nidaamka ee kaydinta, faylka `.dwg`, `.dxf` ama `.ccsheets` aad laba-jeer ku dhufato wuxuu ku furmaa CadCraft.

PDF ah, daabac halkii (eeg hoos).

## Waxa DWG ilaaliya oo beddela

CadCraft wuxuu qoraa DWG-ga isagu, browser-kaaga gudihiisa, isagoo isticmaalaya isla maktabada DWG ee uu ku akhriyo. Doorashada nooca ku dhex jirta U kaydi sida: qaabka AutoCAD 2000 (nooca faylka AC1015) waxa uu ku furmaa barnaamijyada ugu badan, kuwa hore ku jiraba; qaababka cusub (2004, AC1018, ilaa 2018, AC1032) waxay sidoo kale ilaaliyaan midabyada run ah. Waxba lama soo dirto, kaydinta DWG-na way shaqeysaa adigoon internet-ka isticmaalin.

Nooc kasta waxa lagu hubiyaa iyadoo faylasha la kaydiyay dib loo akhrinayo siddeed barnaamijyo kale oo DWG akhriyayaasha iyo CadCraft laftiisa. DWG CadCraft ah weli lama furin AutoCAD laftiisa.

### Waxa DWG ilaaliya

- Xariiqyada, qowsaha, goobooyinka, ellipse-yada, dhibcaha, iyo polylines oo leh qaybahooda qowsaha.
- Qoraal hal-xariiq ah oo leh jihadiisa iyo factor-ka ballaadhka.
- Qoraal saf badan iyo qoraal la duubay, sida qoraal saf badan. Barnaamijka kale wuu mar kale duubayaa isla ballaadhkaas.
- Midabyada walxaha: sida lakabka, sida bloogga, 255 midab oo caadi ah, iyo midabyo run ah qaabka 2004 iyo ka dambeeya.
- Lakabyada oo leh midabkooda, nooca khadka, ballaadhka xariiqda iyo dejinta on, frozen, locked iyo daabacaadda; nooca khadka gaarka ah ee walxaha, ballaadhyada iyo miisaanka nooca khadka, qaababka nooca khadka iyo miisaanka nooca khadka ee naqshadda.
- Unugyada naqshadda iyo qaabka dherarka (decimal, fiit iyo inji, jajab…).
- Bloogyada oo leh base point-kooda iyo qeexida sifooyinka, oo ay ku jiraan kuwa aan muuqan, kuwa joogto ah iyo kuwa horay loo dejiyay.
- Tixraacyada bloogyada oo leh miisaankooda, wareejintooda iyo qiyamka sifooyinkooda.
- Buuxinta adag, iyo hatches-ka qaabaysan oo leh qaabkooda, miisaankooda iyo xagashadooda (xariiqyada qaabka laftiisa, si barnaamijyada kale ay u sawiraan xariiqyada uu CadCraft sawiro).
- Cabbirrada, sida cabbirro run ah: barnaamijyada kale way dib u cabbiraan markay fidinayaan. Mid kasta wuxuu ilaaliyaa dejintiisa (dherarka qoraalka, cabbirka fallaadha, meelaha tobanka, qaabka dherarka) iyo qoraalkiisa, wuxuuna sitaa nuqulka la sawiray ee cabbir DWG kasta leedahay.
- Xaashiyaha (layouts): xaashi kasta oo leh cabbirka warqadiisa iyo unugyadiisa, waxa lagu sawiray, iyo aragtiyadiisa oo leh muuqaalkooda iyo miisaankooda.
- Aragtiyo magacyo leh.
- Multileaders, sida multileaders.
- Magacyada lakabka iyo bloogga sida aad ku qortay, xarafyo waaweyn iyo kuwa yaryar. (DXF R12 wuxuu ku qoraa xarafyo waaweyn.)

### Waxa DWG beddela

Mid kasta oo ka mid ah waa la diiwaan geliyaa taariikhda markaad kaydiso, marka ay ku khusayso naqshaddaada.

| Gudaha CadCraft | Gudaha DWG-ga la kaydiyay |
|---|---|
| Midabyo run ah (la doortay midab-doorashaha), qaabka 2000 | Midabka caadiga ah ee ugu dhow: qaabka 2000 wuxuu leeyahay 255 oo keliya. Kaydi sida 2004 ama ka dambeeya si aad u ilaaliso |
| Aragtiyo magacyo leh oo xaashi ah | Aragtiyo warqad: DWG ma sheegto xaashiga, sidaas darteed marka CadCraft uu mar kale furo faylka waxay ku jiraan xaashigii ugu horeeyay |
| Qoraal saf badan oo leh factor ballaadh | Ballaadhka xarafka caadiga ah: DWG-ga, factor-ka ballaadhka wuxuu khusayaa oo keliya qoraal hal-xariiq ah |
| Magacyada lakabka ama bloogga oo leh xarafyo DWG aan oggolayn | Waa la beddelay: magac laga soo xidhay naqshad xiran sida `Base\|Walls` wuxuu noqdaa `Base$0$Walls` (sida ay u magacowdo xidhitaanka naqshad xiran), xarafyada kale waxay noqdaan `_` |

### Maxaa sababta R12, iyo waxa beddela

Markaad u kaydiso DXF, CadCraft wuxuu qoraa DXF R12, nooca ay furi karaan dhammaan barnaamijyada CAD. Waa ka hor jirta qaar ka mid ah astaamaha, sidaas darteed qaar ka mid ah waxyaabaha waxaa lagu qoraa qaab ka sahlan:

| Gudaha CadCraft | Faylka R12 ee la kaydiyay |
|---|---|
| Qoraal saf badan | Walxo qoraal oo kala duwan saf kasta |
| Ellipse-yada | Polylines oo raacaya ellipse-ka |
| Hatches (faylasha la furay) | Xadadkooda oo keliya |
| Midabyo run ah (la doortay midab-doorashaha) | Midabka caadiga ah ee ugu dhow |
| Ballaadhyada xariiqda, iyo miisaanka nooca khadka ee walxaha | Waa la iska daayay: R12 midkoodna ma leh (noocyada khadka waa la ilaaliyaa) |
| Magacyada lakabka iyo bloogga | Waa la qoraa xarafyo waaweyn; meelaha bannaan iyo xarafyada kale waxay noqdaan `_`, magacyadana waa la gooyaa 31 xaraf ("Title block" wuxuu noqdaa `TITLE_BLOCK`) |
| Lakabyada loo dejiyay inaan la daabicin | Barnaamijyada kale way daabici doonaan (CadCraft wuxuu xasuustaa dejinta marka naqshaddu leedahay xaashi) |
| Cabbirrada | Cabbirro run ah oo leh bloogooyinkooda sawiray, si barnaamijyada kale ay u muujiyaan sidaad arkaysid |
| Multileaders | Xariiqyada, madaxa fallaadha iyo qoraalka ay sawiraan |
| Aragtiyo magacyo leh | Waa la ilaaliyaa, magacyadana waxay noqdaan xarafyo waaweyn; aragtiyada xaashiga waxay ku soo noqdaan xaashiga ugu horreeya |
| Xaashiyo badan | Xaashiga ugu horreeya waa warqadda ay barnaamij kasta muujiyo; kuwa kale waxaa loo ilaaliyaa sida bloogyo magacooda `CCLAYOUT_1`, `CCLAYOUT_2` … kuwaas oo CadCraft u beddelo xaashiyo marka uu faylka furo |

Taariikhdu waxay liistaa mid kasta oo ka mid ah kuwan oo khusayay naqshaddaada.

:::tip
Si aad u sii shaqeysid naqshad maalmo badan, u kaydi DXF oo markaad xiga furo DXF-kaas. Wax kasta oo CadCraft sawiri karo wuu ku badbaadaa wareegga, oo ay ku jiraan cabbirro, bloogyo iyo xaashiyo oo dhan.
:::

## Xariiqyo xiran (tixraacyo dibada)

{{cmd:XATTACH}} (`XA`, ama {{ui:Blocks}} › {{ui:Wax dheeraad ah}} › {{ui:Ku xidh naqshad (xref)}}) wuxuu xidhaa DWG ama DXF kale: dooro faylka, kadibna guji meesha ay tagayso ({{key:Enter}} wuxuu dhigayaa 0,0). Waxay ku imaan doontaa sida hal bloog oo magaceedu yahay magaca faylka, cabbirka saxda ah marka labada naqshadood ay kala unugyo duwan yihiin. Lakabyadeeda iyo bloogyadeeda waxay ilaaliyaan magacyadooda oo magaca xidhitaanka ayaa hor ku jira, sida `Plan|Walls`, `Plan|Door`, si aanay u isku qasin kuwaaga: u demi ama u xir lakabyada xidhan sida kuwaaga. Xidhitaanku waa akhris keliya: beddel naqshadda kale oo mar kale soo rar. Waxa aad dejiso lakabyada xidhitaanka (midabka, nooca khadka, ballaadhka, on/off, freeze, lock, daabacaad) waa la ilaaliyaa markaad mar kale soo raro, markaad naqshadda u kaydiso sida DWG intii xidhitaankuna weli yahay xidhitaan, iyo markaad naqshad kale ku xidho tan.

{{cmd:XREF}} (`XR`): `?` wuxuu liistaa xidhitaanada (la soo rarey ama aan la soo rarin, faylka ay yihiin, inta tixraac); `A` wuxuu ku xidhaa; `R` wuxuu mar kale soo rarayaa mid faylkiisa (dooro faylka mar kale: browser-ku ma gaari karo folders-kaaga isagu keligiis); `B` wuxuu ku xiraa mid (wuxuu noqonayaa bloogyo iyo lakabyo caadi ah oo magacyadoodu yahay `Plan$0$Walls`); `D` wuxuu ka saaraa mid (tixraacyadiisa iyo lakabyadiisa way baxaan). Mid kasta waa hal tallaabo oo dib loo celin karo.

{{cmd:XCLIP}} (`XC`) wuxuu jarayaa tixraacyada bloogyada iyo xidhitaanada: dooro iyaga, `N` si aad xuduud cusub u samayso, kadibna `R` iyo laba geesood, ama `P` iyo dhibcaha poligon (taabashada {{key:Enter}} wuu xidhaa); `D` wuu ka saaraa jarka. Wixii ku jira xuduudka oo keliya ayaa muuqda oo daabacan, jarku wuxuu raacaa tixraaca. DWG iyo DXF 2000 waxay ilaaliyaan jarrada; DXF R12 wuxuu kaydiyaa tixraaca oo dhan oo wuu sheegaa. Markaad xidhitaan leh tixraacyo jaran ku xirto, {{cmd:XREF}} `B` wuxuu weydiinayaa: `A` wuxuu ku xiraa wax walba, `C` wuxuu ilaaliyaa qaybta jarran ee tixraac kasta oo keliya (xariiqyada iyo qowsaha waa la jaraa xuduudka; qoraalada iyo bloogyada dhex-jira waa ay ku sii jiraan haddii dhibcooda gelinta ku jiro xuduudka).

Naqshad aad furto ayaa xidhitaanno ku xidhan karta faylal aan CadCraft arki karin: wuxuu sheegayaa inta aan la soo rarin. Isticmaal {{cmd:XREF}}, `R` oo dooro fayl kasta si aad u aragto.

Markaad kaydiso, xidhitaan la soo raray ayaa **la xiraa** faylka (barnaamijyada kale waxay arkaan bloogyo iyo lakabyo caadi ah oo magacyadoodu yahay `Plan$0$…`), taariikhduna way sheegaysaa. Xidhitaan aan la soo rarin waxa uu ahaan doonaa xidhitaan ku xiran faylkiisa, DWG iyo DXF labadaba.

## Ka fur 3D

{{ui:Aragti}} › {{ui:Wax dheeraad ah}} › {{ui:Ku fur ModelCraft}} ({{cmd:OPENIN3D}}) wuxuu furaa naqshadda barnaamijka moodelka 3D tab cusub, sida DWG, adigoon soo dirin. Isbeddelada halkaas lagu sameeyo halkaas ayay ku sii jiraan; kaydi halkaas. Badhanka wuxuu muuqdaa kaliya meesha barnaamijkaas uu qaadan karo naqshadda la gudbiyay.

## Daabacaadda PDF

Taabo {{key:Mod+P}}, guji {{ui:Daabac}}, ama ku qor `PLOT`. PDF-ka waxaa lagu sameeyaa browser-ka gudihiisa oo la soo dejiyaa, ama tab cusub ayaa lagu furaa si loo daabaco. Eeg [Daabac PDF](topic:plot-pdf).

## Halka faylasha tagaan

Kaydinta kasta iyo daabacaad kasta waa soo dejin, markaa faylasha waxay ku degaan meesha browser-ku soo dejinta ku dhigo: badanaa folder-ka Downloads. Si aad folder u dooratid mar kasta, beddel dejinta soo dejinta browser-kaaga; [Browsers iyo kumbiyuutarada](common:browsers) waxay tusaysaa meesha.

Waxa aad furto ama kaydiso uma diraayo annaga. Eeg [Halka faylasha aad tagaan](common:your-files).

## Faylasha mashruuca PLN iyo PLA

CadCraft wuxuu furaa naqshadaha DWG iyo DXF, ma aha faylasha Archicad-ka (`.pln`, `.pla`, `.tpl`, `.bpn`). Markaad furto mid, wuxuu kuu sheegayaa waa maxay. Archicad-ka, kaydi aragtiyada ama layouts-ka aad u baahan tahay DWG oo halkan ku fur, ama dhoofi moodelka IFC oo ku fur BimCraft. Meesha BimCraft uu faylka qaadi karo, CadCraft wuxuu bixiyaa {{ui:Ku fur BimCraft}}.

## Haddii bogga xirmo ka hor intaadan kaydin

CadCraft wuxuu hayaa nuqul ah naqshad kasta oo aad beddesho, browser-kan keliyah, wax yar kadib markaad joojiso tafatirka. Haddii tab-ka xirmo, browser-ku joogsado ama kumbiyuutarku dib u bilowdo ka hor intaadan kaydin, CadCraft wuxuu weydiinayaa **Soo kabso shaqadaada?** marka xiga ee uu bilowdo: {{ui:Soo kabso}} wuxuu mar kale furaa naqshadda, aan la kaydin, tab gaar ah. Naqshadda oo la kaydiyo nuqulkeeda ayaa ka saaraa. Eeg [Soo kabso shaqadaada](common:recover).

## Khadka ku jira iyo ka baxsan

Furidda, sawirka, kaydinta (DWG iyo DXF) iyo daabacaadda dhammaan waxay ka dhacaan kumbiyuutarkaaga, sidaas darteed waxay shaqeeyaan adigoon xiriir lahayn marka CadCraft soo rarmo.

Si aad CadCraft u isticmaasho adigoon xiriir lahayn gebi ahaanba, guji {{ui:Kaydi khadka ka baxsan}} sadarka sare intaad khadka ku jirto. Calaamaddu waxay tirinaysaa ("Saving 40 of 212") oo waxay ku dhammaataa "Offline ready". Nuqulka la kaydiyay wuxuu ku jiraa maktabada DWG, qiyaastii 5 MB oo wadar ahaan, sidaas darteed **faylasha DWG waxay furmaan sidoo kale khadka ka baxsan** marka la kaydiyo. Dib u guji badhanka si aad u helo {{ui:Kaydi mar kale (hel nooca ugu dambeeya)}} ama {{ui:Ka saar nuqulka khadka ka baxsan}}. "Could not save" waxay ka dhigan tahay in qaar ka mid ah faylasha aan la soo dejin: hubi xiriirka oo guji si aad mar kale isku daydo. "Offline not available" waxay ka dhigan tahay in daaqaddan browser-ka aanay nuqul hayn karin (daaqadaha gaarka ah iyo kumbiyuutarrada la maamulo qaarkood).

Haddii nuqul la kaydin aanu jirin, maktabada DWG waxaa la soo dejiyaa markii ugu horreysay ee aad furto DWG kadib markii bogga la soo rarey, sidaas darteed furidda DWG khadka ka baxsan way fashilmi karaa; faylasha DXF waligood ma u baahnaadaan. Ha dib u soo rarin bogga khadka ka baxsan inta CadCraft aan la kaydin.

Eeg [Shaqada khadka ka baxsan](common:offline) faahfaahinta.

:::offline
Hadda waad ka baxsan tahay xiriirka. Naqshadaha waxay kaydiyaan sida DWG ama DXF waxayna si caadi ah u daabacaan, faylasha DXF waa ay furmaan. Faylasha DWG waa ay furmaan haddii CadCraft uu muujiyo "Offline ready", ama haddii maktabada DWG horay loo soo rarey tab-kan.
:::

## Caqabadaha faylasha ku jira

Caqabadaha iyo cabbirrada (eeg [Qeex naqshad](topic:constraints)) waa la kaydiyaa DWG iyo DXF labadaba. Walx kasta oo la xaddidayo wuxuu sidoo kale qaadaa xusuus yar oo CadCraft ah (extended data), bloog aan la isticmaalin oo magacaysan `CADCRAFT_PARAMETRIC` ayaa hayaa caqabadaha iyo miisaska cabbirrada. Barnaamijyada kale waxay furaan naqshadda si caadi ah oo iska indha tiraan labadaba; waxay tirtiri karaan bloogga aan la isticmaalin markay nadiifiyaan. Xusuusta waxay tixraacaan walxaha furaha ay leeyihiin, ma aha qabashooyinka faylka, sidaas darteed barnaamij dib u lambarka qabashooyinka ah ma jebiyo. Markaad barnaamij kale tirtiro ama beddelo walax xaddidan, CadCraft wuxuu ka saaraa xaddidaadyadii ku saabsan marka uu faylka furo, wuxuuna sheegaa inta ay tahay. Faylka aan lahayn waa la furaa iyada oo aan xaddidaad lahayn.

Faylka qaab `.json` oo ka soo dhoofay modeler-ka qaybaha ayaa sidoo kale furma: eeg [Sawirrada u dhoofi iyo ka soo gal modeler-ada kale ee qaybaha](topic:solidworks-sketches).

## Aan wali la heli karin

- Multileaders sida walxaha multileader ah ee DXF la kaydiyay (R12 ma leh; waxaa loo kaydiyaa sida waxa ay sawiraan).
- Sawirrada DXF-ka la kaydiyay (waxaa loo kaydiyaa sida gaashaankooda; DWG wuxuu ilaaliyaa sida sawirro), iyo wipeouts oo qariya waxa ka hooseeya.
- Kaydinta DXF nooc ka cusub 2000.
- Kaydinta daruurta iyo wada-shaqeynta kumbiyuutarrada dhexdooda.

Eeg [Weli lama dhisin](topic:not-built-yet) liiska buuxa.
