---
title: Faylasha: waxa la furi karo, waxa la kaydiyo
summary: Qaababka CadCraft furo, kaydiyo iyo soo dhoofiyo, waxa la hayo ama la beddelo, iyo halka faylashu tagaan.
keywords: xclip, clip, xadka xclip, xadka jaran, bind clipped, dwg, dxf, pdf, r12, fur, kaydi, dhoofin, soo geli, qaababka, beddelid, soo deji, saveas, dxfout, kaydi sida, dwg kaydi, qaab, qsave, xref, xattach, naqshad xidhan, tixraac dibadda, ku xidh, dib u rari, ka fur, ka saar
from: 6d68b34e
---

## Aragti kooban

| Qaab | Fur | Kaydi | Qoraal |
|---|---|---|---|
| DXF (qoraal, nooc kasta) | Haa | Haa, sida DXF R12 ama DXF 2000 | DXF binary ah waa la diidaa: marka hore u kaydi qoraal DXF ahaan. |
| DWG | Haa | Haa, sida DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ama 2018) | Waxa akhriya oo qoraa maktabadda DWG ee CadCraft (faylasha AutoCAD R13 ilaa 2018). DWG-gaaga looma beddelo. Faylasha dhaawacan, ama noocyada aan akhrin karin, waa la diidaa iyada oo fariin la siinayo. |
| PDF | Wuxuu keenaa bog: sida underlay ama sida walxo ([PDF underlays](topic:pdf-underlay)) | Haa, marka la daabacayo | PDF vector oo ah xaashi, ama moodeelka miisaan ku jira. |

Naqshad kasta oo aad furto (ama ku bilowdo {{ui:Cusub}}) wuxuu helaa tab gooni ah oo ka sarreeya goobta naqshadda; naqshad cusub oo aan weli ninna taabin ayaa la isticmaalaa halkii tab cusub lagu dari lahaa. Guji tab si aad u beddesho, {{ui:×}} si aad u xirto (CadCraft wuxuu marka hore weydiin doonaa haddii wax aan la kaydin ku jiraan), ama u kala saar naqshadaha furan dhinac dhinac: eeg [Kala qaybi shaashadda](topic:split-screen).

## Furidda naqshadda

- Riix {{key:Mod+O}}, guji {{ui:Fur}}, ama ku qor `OPEN`, kadibna dooro faylka.
- Ama jiid fayl `.dwg` ama `.dxf` oo ku dhig goobta naqshadda.

Faylka waxa lagu akhriyaa browser-kaaga. Ma la soo rarayo meel kasta. Taariikhdu waxay sheegtaa inta walxood iyo lakab ku soo galay iyo inta waqti ay qaadatay, qaybta {{ui:Naqshad}} ee panelka bidix waxay muujinaysaa qaabka, tusaale ahaan "DWG 2018 (AC1032)".

Akhriyaha DWG waa qayb ka mid ah CadCraft waxaana la soo dejiyaa DWG-ga ugu horreeya ee aad furto kadib markii bogga la soo rarayo (dhowr boqol KB), sidaas darteed looma baahna soo dejin gooni ah. Wuxuu faylka ku akhriyaa background-ka, sidaas darteed bogga wuu sii jawaabayaa inta DWG weyn la furayo.

### Waxa soo galaya

- Xariiqyo, qaansooyin, goobo, polilaynno (oo leh qaybo qaanso), ellipse-yo, bar-yo, qoraal iyo qoraal lafo-lafo, solids, hatches (naqshadaha caadiga ah oo loo sawiray xariiqyadooda, kuwa kale midab siman), tixraacyada bloogga oo leh sifooyinkooda (qiimayaal aad beddeli karto; eeg [Sifooyinka bloogga](topic:attributes)), cabbiro, iyo layouts oo leh viewports-kooda.
- Splines waxay soo galaan sidii splines (darajada, barta xakamaynta, knots, miisaanka, fit points); eeg [Splines iyo polylines](topic:splines).
- Multileaders oo leh hal xariiq hoggaan iyo qoraal waxay soo galaan sidii multileaders CadCraft oo aad beddeli karto (eeg {{cmd:MLEADER}}). Kuwa kale (oo leh bloog, dhowr xariiq hoggaan, ama xariiqyo qalloocan) waxa loo sawiray sidii barnaamijkii kale sawiray, waxayna u dhaqmaan sida hal walax; taariikhdu waxay sheegtaa inta ay yihiin.
- Sawirada (images) waxay muujinayaan goob leh magaca faylka sawirka ilaa aad siiso CadCraft faylka {{cmd:IMAGE}}: eeg [Sawirada naqshadda](topic:pictures#show-the-pictures-a-dwg-uses). Wipeouts waxay muujinayaan goobtooda, wixii ka hoosaysana wuu muuqdaa.
- Miisaska DWG-ga waxay yimaadaan sidii barnaamijkii kale u sawiray.
- Wejiyada 3D ee model space waxay yimaadaan tab-ka {{ui:3D}}, ma aha walxo 2D; sidaas oo kale kuwa ku jira bloogyada, mar kasta oo tixraac bloog ah ku jira moodeelka. Bloogga dhexdiisa iyo xaashiga waxa lagu sawiraa sidii qaab-dhis bannaan, sida khadadka. Eeg [Moodeelka 3D](topic:3d-solids).
- Lakabyadu waxay hayaan midabkooda, shidan, qabsan, qufulan iyo dejinta plot-ka. DEFPOINTS weligiis lama daabacdo.
- Cabbiradu waxay noqdaan cabbiro dhab ah oo la beddeli karo oo CadCraft ah marka barashooyinkooda la akhriyi karo. Marka hore waxa lagu muujiyaa sidii barnaamijkii kale u sawiray; marka aad mid beddesho, CadCraft wuxuu dib u sawiraa qaabkiisa.
- Layout kasta wuxuu noqdaa tab xaashi. Barnaamijka kale, layout kasta wuxuu leeyahay viewport koowaad oo qarsan oo ah xaashiga laftiisa; CadCraft waa ka reebaa.

### Waxa aan weli soo gelin

Wax CadCraft aan awoodin inuu sawiro waa la tiriyaa, looma malaynayo. Sanduuqa "About this file" ee panelka bidix wuxuu ku qoran yahay "Aan weli la muujin:" oo ku xiga nooc walax kasta iyo tiradeeda. Kiisaska caadiga ah waa miisaska DXF, meshes, iyo 3D solids ku jira bloogyada. 3D solids, regions iyo bodies ee model space waxay muuqdaan tab-ka 3D (eeg [Moodeelka 3D](topic:3d-solids#solids-from-other-programs)). Viewports-ka faylka laga leexiyay waxay muuqdaan leexisan sida halkaas, oo waxay hayaan leexintaas markay kaydiyo; sidaas oo kale UCS-ka hadda jira, UCS-yada magacaysan iyo aragga la leexiyay.

Qoraalka waxa lagu sawiraa hal font oo qaab Helvetica ah. Silsilad qoraal oo ku habboon hal xariiq barnaamijka asalka ah oo font-ka ballaca yar ku jirta ayaa laga yaabaa in ay laba xariiq noqoto CadCraft.

## Kaydinta

Waxa jira saddex siyaabood oo lagu kaydiyo. Mid kasta wuxuu soo dejiyaa nuqul.

- **Kaydi**: riix {{key:Mod+S}}, guji {{ui:Kaydi}}, ama ku qor `SAVE` (iyo `QSAVE`). Wuxuu kaydinayaa qaabka naqshadda: DWG haddii aad furtay DWG, DXF haddii aad furtay DXF. DWG wuxuu hayaa nooca uu ku imid (faylka 2018 wuxuu kaydiyaa 2018). Naqshad cusub waxay isticmaashaa qaabka iyo nooca DWG ee aad ugu dambeyn dooratay {{ui:U kaydi sida}} browser-kan; haddii aadan mid dooran, waa DWG qaabka AutoCAD 2000.
- **U kaydi sida**: riix {{key:Mod+Shift+S}}, guji {{ui:U kaydi sida}}, ama ku qor `SAVEAS`. Wada-hadalka {{ui:Ka kaydi nuqul ahaan sida}} wuxuu bixiyaa {{ui:DWG}}, liiska {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ama 2000), {{ui:DXF R12}} iyo {{ui:DXF 2000}}, mid kasta oo leh magaca faylka ay bixin doonto, iyo qaabka iyo nooca hadda ee naqshadda oo horeba loo doortay. Guji {{ui:Kaydi}} si aad u soo dejiso, ama {{ui:Jooji}} (ama {{key:Esc}}) si aanad wax kaydin; taariikhdu markaas waxay leedahay "Lama kaydin." Waxa aad doortay waa soo jeedaa: {{key:Mod+S}} wuxuu isticmaalaa mar kasta naqshadan ka dib, naqshadaha cusubna browser-kan waxay ku bilaabaan.
- **DXFOUT**: ku qor `DXFOUT`. Had iyo jeer wuxuu soo dejiyaa nuqul DXF R12 ah, {{key:Mod+S}} xiga weli wuxuu kaydinayaa qaabka naqshadda.

Browser-ku wuxuu soo dejiyaa `<drawing name>.dwg` ama `<drawing name>.dxf`. Kaydin kasta waa **soo dejin cusub**; faylka aad furtay weligiis lama qori ama lama beddelo. Taariikhdu waxay xaqiijinaysaa, tusaale ahaan "Nuqul ayaa loo kaydiyay sida Plan.dwg (DWG (AutoCAD 2018)). Asalkii Plan.dxf ma beddelmin." DXF-ka waxay leedahay "(DXF R12, barnaamij CAD kasta wuu furi karaa)". Xariiqyada hoose waxay liistaan wax kasta oo ku beddelmay jidka.

Marka CadCraft ku shaqeeyo app-ka desktop-ka, kaydintu waxay u shaqeysaa sida barnaamijyada desktop-ka kale: {{key:Mod+S}} wuxuu dib ugu qoraa naqshadda faylka aad furtay, qaabkiisa iyo nooceeda, taariikhduna wuxuu sheegaa meesha lagu kaydiyay. {{ui:U kaydi sida}} iyo soo dhoofinta waxay muujinayaan wada-hadalka kaydinta nidaamka, faylka `.dwg`, `.dxf` ama `.ccsheets` oo aad laba jeer ku dhufato wuxuu ku furmaa CadCraft.

PDF ahaan, daabac halkii (eeg hoose).

## Waxa DWG-gu hayaa iyo waxa uu beddelo

CadCraft wuxuu qoraa DWG-ga isagu, browser-kaaga gudihiisa, isagoo isticmaalaya isla maktabada DWG ee uu ku akhriyo. Dooro nooca {{ui:U kaydi sida}} ku jira: qaabka AutoCAD 2000 (nooca faylka AC1015) ayaa ugu badan barnaamijyada furi kara, kuwa hore ka sokow; qaababka cusub (2004, AC1018, ilaa 2018, AC1032) waxay sidoo kale hayaan midabyo run ah. Looma soo rarayo meel kasta, kaydinta DWG waxay shaqeysaa xidhiidh la'aan.

Nooc kasta waa la hubiyaa iyadoo faylasha la kaydiyay dib loo akhrinayo iyadoo la isticmaalayo akhriyeyaasha DWG-ga saddex barnaamij oo kale iyo CadCraft laftiisa. DWG-ga CadCraft weli AutoCAD-ka lagama furin.

### Waxa DWG-gu hayaa

- Xariiqyo, qaansooyin, goobo, ellipse-yo, bar-yo, iyo polilaynno oo leh qaybahooda qaanso.
- Qoraal hal xariiq oo leh isku-toosnaantiisa iyo factor-ka ballacda.
- Qoraal lafo-lafo iyo qoraal la duubay, sida qoraal lafo-lafo ah. Barnaamijka kale wuu dib u duubaa isla ballaca.
- Midabka walxaha: sida lakabka, sida bloogga, 255 midab caadi ah, iyo midabyo run ah qaabka 2004 iyo ka dambeeya.
- Lakabyada oo leh midabkooda, nooca xariiqda (linetype), ballaca xariiqda (lineweight) iyo dejinta shidan, qabsan, qufulan iyo plot; nooca xariiqda ee walxaha, ballaca xariiqda ee walxaha, iyo miisaanka nooca xariiqda; qaababka nooca xariiqda iyo miisaanka nooca xariiqda ee naqshadda.
- Unugyada naqshadda iyo qaabka dhererka (decimal, feet and inches, fractions…).
- Bloogyada oo leh barta saldhigga iyo qeexidda sifooyinka, oo ay ku jiraan kuwa aan muuqan, kuwa joogtada ah iyo kuwa horay loo dejiyay.
- Tixraacyada bloogga oo leh miisaankooda, leexintooda iyo qiimayaasha sifooyinka.
- Midabka buuxa, iyo hatches-ka qaabaysan oo leh qaabkooda, miisaankooda iyo xagalkooda (xariiqyada qaabka laftiisa, si barnaamijyada kale u sawiraan xariiqyada CadCraft sawiro).
- Cabbiro, sida cabbiro dhab ah: barnaamijyada kale dib ayay u cabbiraan marka la fidiyo. Mid kasta wuxuu hayaa dejintiisa (dhererka qoraalka, cabbirka falkaadka, tobanaalliyada, qaabka dhererka) iyo qoraalkiisa, waxayna qaadaa nuqulka la sawiray ee cabbir kasta oo DWG ah.
- Xaashiyo (layouts): xaashi kasta oo leh cabbirka warqadiisa iyo unugyadiisa, waxa lagu sawiray, iyo viewports-kiisa oo leh aragtiisa iyo miisaankiisa.
- Aragtiyo magacaysan.
- Multileaders, sida multileaders.
- Magacyada lakabka iyo bloogga sida aad u qortay, xarfaha waaweyn iyo yar. (DXF R12 wuxuu ku qoraa xarfaha waaweyn.)

### Waxa DWG-gu beddelo

Mid kasta oo ka mid ah waxyaabahan waa lagu liisanayaa taariikhda kaydinta kadib, marka ay khusayso naqshaddaada.

| CadCraft-ka | DWG-ga la kaydiyay |
|---|---|
| Midabyo run ah (la doortay color picker-ka), qaabka 2000 | Midabka caadiga ah ee ugu dhow: qaabka 2000 wuxuu leeyahay 255 oo keliya. Kaydi sida 2004 ama ka dambeeya si aad u hayso |
| Aragtiyo magacaysan oo xaashi | Aragtiyo paper-space: DWG ma sheegto xaashiga; marka CadCraft mar kale furo faylka, waxay u hoos galaan xaashiga ugu horreeya |
| Qoraal lafo-lafo oo leh factor ballac | Ballac xaraf caadi ah: DWG-ga factor-ka ballacda wuxuu khuseeyaa oo keliya qoraalka hal xariiq |
| Magacyada lakabka ama bloogga oo leh xarfo DWG aan ogolayn | La beddelay: magac laga soo xidhay naqshad xidhan sida `Base\|Walls` wuxuu noqdaa `Base$0$Walls` (habka magaca loo bixiyo marka naqshad xidhan la xidho), xarfaha kale waxay noqdaan `_` |

### Sababta R12, iyo waxa beddela

Marka aad DXF u kaydiso, CadCraft wuxuu qoraa DXF R12, nooca ay furi karaan barnaamijyada CAD oo dhan. Waa ka hor qaar ka mid ah astaamaha, sidaas darteed qaar ka mid ah waxyaabaha waxa lagu qoraa qaab fudud:

| CadCraft-ka | Faylka R12 ee la kaydiyay |
|---|---|
| Qoraal lafo-lafo | Hal walax qoraal oo xariiq kasta |
| Ellipse-yo | Polilaynno raacaya ellipse-ka |
| Hatches (faylasha la furay) | Xadkooda oo keliya |
| Midabyo run ah (la doortay color picker-ka) | Midabka caadiga ah ee ugu dhow |
| Ballaca xariiqyada, iyo miisaanka nooca xariiqda ee walxaha | La saaray: R12 midna ma laha (nooca xariiqda waa la hayaa) |
| Magacyada lakabka iyo bloogga | Waxa lagu qoraa xarfo waaweyn; meelaha bannaan iyo xarfaha kale waxay noqdaan `_`, magacyadana waa la gooyaa 31 xaraf ("Title block" wuxuu noqdaa `TITLE_BLOCK`) |
| Lakabyo loo dejiyay inaan la daabacin | Barnaamijyada kale way daabacayaan (CadCraft wuu xasuustaa dejinta marka naqshaddu leedahay xaashi) |
| Cabbiro | Cabbiro dhab ah oo leh bloogooda sawiran, si barnaamijyada kale ay u muujiyaan sidaad aragto |
| Multileaders | Xariiqyada, falkaadka iyo qoraalka ay sawiraan |
| Aragtiyo magacaysan | La hayaa, magacyada xarfaha waaweyn; aragtiyada xaashiga ayaa ku soo laabanaya xaashiga ugu horreeya |
| Dhowr xaashi | Xaashiga ugu horreeya waa paper space oo dhan barnaamij kasta tuso; kuwa kale waxa la hayaa sida bloogyo magacyadoodu yahay `CCLAYOUT_1`, `CCLAYOUT_2` … kuwaas oo CadCraft dib ugu beddelo xaashiyo marka uu faylka furo |

Taariikhdu wuxuu liisanayaa mid kasta oo ku dhacay naqshaddaada.

:::tip
Si aad ugu sii shaqeyso naqshad maalmo badan, kaydi sida DXF oo mar kale fur DXF-kaas xiga. Wax kasta oo CadCraft sawiri karo ayaa badbaadaya wareegga oo dhan, oo ay ku jiraan cabbiro, bloogyo iyo dhammaan xaashiyada.
:::

## Naqshadaha xidhan (tixraacyada dibadda)

{{cmd:XATTACH}} (`XA`, ama {{ui:Bloogyo}} › {{ui:Wax dheeraad ah}} › {{ui:Ku xidh naqshad (xref)}}) wuxuu xidhaa DWG ama DXF kale: dooro faylka, kadibna guji meesha ay tagayso ({{key:Enter}} wuxuu dhigaa 0,0). Waxay u timaadaa hal bloog oo magaciisu yahay magaca faylka, miisaan sax ah marka laba naqshadood ay unugyo kala duwan leeyihiin. Lakabyadeeda iyo bloogyadeeda waxay hayaan magacyadooda oo magaca xidhiidhka ayaa hore ku yaal, tusaale `Plan|Walls`, `Plan|Door`, si aanay ula dhex-jirin kuwaaga: shid oo demi lakabyada xidhan, qabso ama qufulo sida lakabyadaada. Xidhiidhku waa akhris kaliya: naqshadda kale beddel oo dib u soo rar. Dejinta aad ku samayso lakabyada xidhiidhka (midabka, nooca xariiqda, ballaca xariiqda, on/off, freeze, lock, plot) waa la hayaa markaad dib u soo rarto, markaad naqshadda u kaydiso DWG intuu xidhiidhku weli yahay xidhiidh, iyo markii naqshad kale ku xidho kan.

{{cmd:XREF}} (`XR`): `?` wuxuu liistaa xidhiidhada (la soo raray ama aan la soo rarin, faylka, tirada tixraacyada); `A` wuxuu xidhaa; `R` wuxuu mid dib u soo rarayaa faylkiisa (dib u dooro faylka: browser-ku ma gaari karo galalkaaga isaga keligiis); `B` wuxuu xidhiidhka ka dhigaa bloogyo iyo lakabyo caadi ah oo magacyadoodu yahay `Plan$0$Walls`; `D` wuxuu ka saaraa mid (tixraacyadiisa iyo lakabyadiisa way baxaan). Mid kasta waa hal tallaabo oo {{ui:Ka noqo}}.

{{cmd:XCLIP}} (`XC`) wuxuu jaraa tixraacyada bloogga iyo xidhiidhada: dooro, `N` boundary cusub, kadibna `R` iyo laba geesood ama `P` iyo barta poligonka ({{key:Enter}} wuu xidhaa). `D` wuxuu ka saaraa jarka. Wixii ku jira keliya ayaa muuqda oo daabacma, jarku wuxuu raacaa tixraaca. DWG iyo DXF 2000 waxay hayaan jarka; DXF R12 wuxuu kaydiyaa tixraaca oo dhan wuuna sheegaa. Marka aad bind-garayso xidhiidh leh tixraacyo la jaray, {{cmd:XREF}} `B` wuxuu weydiinayaa: `A` wuxuu bind-garayaa wax kasta, `C` wuxuu hayaa oo keliya qaybta la jaray ee tixraac kasta (xariiqyada iyo qaansooyinka waa la jaraa xadka; qoraallada iyo bloogyada gudaha way sii jiraan haddii barta geliska ku jirto).

Naqshad aad furto waxay xidhi kartaa faylal aan CadCraft arki karin: wuxuu sheegaa inta aan la soo rarin. Isticmaal {{cmd:XREF}}, `R` oo dooro faylal kasta si aad u aragto.

Markaad kaydiso, xidhiidh la soo rarray waa la **bind-gareeyaa** faylka (barnaamijyada kale waxay arkaan bloogyo iyo lakabyo caadi ah oo magacyadoodu yahay `Plan$0$…`), taariikhduna way sheegtaa. Xidhiidh aan la soo rarin wuxuu ahaanayaa xidhiidh faylkiisa, DWG iyo DXF labaduba.

## Ku fur 3D

{{ui:Muuqaal}} › {{ui:Wax dheeraad ah}} › {{ui:Ka fur ModelCraft}} ({{cmd:OPENIN3D}}) wuxuu naqshadda ku furaa app-ka moodeelka 3D ee tab cusub, DWG ahaan, isagoo aan la soo rarin. Wixii laga beddelo halkaas wuu halkaas ku sii jiraa; halkaas ku kaydi. Walxaha menu-gu wuxuu muujinayaa oo keliya meesha app-kaas uu qaadan karo naqshadda la gacan siiyay.

## Daabacida PDF

Riix {{key:Mod+P}}, guji {{ui:Daabac}}, ama ku qor `PLOT`. PDF-ka waxa lagu sameeyaa browser-ka gudihiisa, waana la soo dejiyaa, ama tab cusub ayaa lagu furaa si loo daabaco. Eeg [Daabac PDF](topic:plot-pdf).

## Faylasha halka ay tagaan

Kaydin kasta iyo daabac kasta waa soo dejin, sidaas darteed faylashu waxay degaan meesha browser-ku soo dejinta u dhigo: caadi ahaan galka Downloads. Si aad fooli u dooratid mar kasta, beddel dejinta soo dejinta browser-kaaga; [Browser-ada iyo kombiyuutarrada](common:browsers) wuxuu tusayaa meesha.

Wax aad furto ama kaydiso looma dirayo annagu. Eeg [Faylashaadu halka ay tagaan](common:your-files).

## Faylasha mashruuca PLN iyo PLA

CadCraft wuxuu furaa naqshadaha DWG iyo DXF, ma aha faylasha Archicad-ka (`.pln`, `.pla`, `.tpl`, `.bpn`). Markaad furto mid ka mid ah, wuxuu kuu sheegayaa waa maxay. Archicad-ka, kaydi muuqaalada ama layouts-ka aad u baahan tahay sida DWG oo halkan ku fur, ama soo dhoofi moodeelka sida IFC oo ku fur BimCraft. Meesha BimCraft ka qaadan karo faylka, CadCraft wuxuu bixiyaa {{ui:Ku fur BimCraft}}.

## Haddii bogga la xiro ka hor intaadan kaydin

CadCraft wuxuu hayaa nuqul kasta oo naqshad aad beddesho, browser-kan oo keliya, wax yar kadib markaad joojiso tafatirka. Haddii tab-ka la xiro, browser-ku joogsado ama kombiyuutarku dib u bilowdo ka hor intaadan kaydin, markii ugu horreysay ee uu bilaabo CadCraft wuxuu weydiin doonaa **Ma soo kabsanaysaa shaqadaada?** {{ui:Soo kabso}} wuxuu dib u furaa naqshadda, aan la kaydin, tab gooni ah. Naqshadda kaydinta ayaa tirtira nuqulkeeda. Eeg [Soo kabso shaqadaada](common:recover).

## Khadka ku jira iyo khadka ka baxsan

Furidda, naqshadda, kaydinta (DWG iyo DXF) iyo daabacidda oo dhan waxay ku dhacaan kombiyuutarkaaga, sidaas darteed waxay shaqeeyaan xidhiidh la'aan marka CadCraft mar la soo rarayo.

Si aad CadCraft ugu isticmaasho xidhiidh la'aan dhammaan ah, guji {{ui:Kaydi khadka ka baxsan}} bar-ka sare inta aad khadka ku jirto. Calaamaddu waa tirinaysaa ("Kaydinta 40 ka 212") waxayna dhammaanaysaa "Diyaar khadka ka baxsan". Nuqulka la kaydiyay wuxuu ku jiraa akhriyaha DWG, oo ku dhow 5 MB oo dhan, sidaas darteed **DWG-yadu sidoo kale way ku furmaan khadka ka baxsan** markii la kaydiyo. Guji badhanka mar kale si aad u hesho {{ui:Mar kale kaydi (hel nooca ugu dambeeyay)}} ama {{ui:Ka saar nuqulka khadka ka baxsan}}. "Lama kaydin" waxay ka dhigan tahay in qaar ka mid ah faylasha aan la soo dejin: hubi xidhiidhka oo guji si aad mar kale isku daydo. "Khadka ka baxsan lama heli karo" waxay ka dhigan tahay in daaqaddan browser-ku aanu nuqul hayn karin (daaqadaha gaarka ah iyo kombiyuutarada la maamulo).

Haddii aan nuqul la kaydin, akhriyaha DWG waa la soo deshaa markii ugu horreysay ee aad furto DWG kadib markii bogga la soo rarayo, sidaas darteed furidda DWG xidhiidh la'aan way fashilmi kartaa; faylasha DXF weligood uma baahna. Ha dib u soo rarin bogga xidhiidh la'aan haddii CadCraft aan la kaydin.

:::offline
Hadda khadka ma jirto. Naqshadaha waxay kaydiyaan DWG ama DXF oo waxay daabacaan si caadi ah, faylasha DXF waa furmaan. Faylasha DWG waa furmaan haddii CadCraft muujiyo "Diyaar khadka ka baxsan", ama haddii akhriyaha DWG uu horey ugu soo rarnaa tab-kan.
:::

Eeg [Shaqada khadka ka baxsan](common:offline) faahfaahin dheeraad ah.

## Xaddidaadda faylasha

Xaddidaadaha iyo halbeegyada (eeg [Xaddid naqshad](topic:constraints)) waxa lagu kaydiyaa DWG iyo DXF labaduba. Walax kasta oo xaddidan wuxuu leeyahay qoraal yar oo CadCraft ah (extended data), iyo bloog aan la isticmaalin oo magaciisu yahay `CADCRAFT_PARAMETRIC` ayaa hayaa xaddidaadaha iyo miiska halbeegyada. Barnaamijyada kale naqshadda si caadi ah ayay furaan, labadaba way ka tegaan; waxa laga yaabaa in ay tirtiraan bloogga aan la isticmaalin marka ay nadiifiyaan. Qoraalladu walxaha waxay ku tixraacaan furahooda walxaha, ma aha handles-ka faylka, sidaas darteed barnaamij dib u lambarka handles-ka ma jabinayo. Markii barnaamij kale tirtiro ama beddelo walax xaddidan, CadCraft wuxuu ka saaraa xaddidaadda walaxdaas marka faylka la furo, wuxuuna sheegaa inta. Fayl aan xaddidaad lahayn wuxuu ku furmaa xaddidaad la'aan.

Sawirka laga soo dhoofiyay qalabka qaybaha (`.json`) waa furmaa: eeg [Guuri sawirada qalabyada qaybaha kale iyo ka soo celi](topic:solidworks-sketches).

## Weli ma diyaar

- Multileaders sida walxaha multileader ah ee DXF la kaydiyay (R12 ma leh; waxaa loo kaydiyaa sida ay sawiraan).
- Sawirada DXF la kaydiyay (waxay u kaydiyaan sida frames; DWG wuxuu hayaa sidii sawiro), iyo wipeouts oo qarsa wixii hoostooda ku jiray.
- Kaydinta DXF nooc ka dambeeya 2000.
- Kaydinta daruurta iyo wada-shaqaynta kombiyuutarrada.

Eeg [Weli lama dhisin](topic:not-built-yet) liiska oo dhan.
