---
title: Ka imaanaya barnaamijyada naqshadda kale
summary: Sida amarrada, furayaasha iyo dabeecadaha caadiga ah ee loo beddelo CadCraft, iyo farqiga ay ku dhacaan khabiirrada naqshadda.
keywords: u beddelid, farqiga, u guuri, dabeecadaha, aliases, dynamic input, pickfirst, pickadd, qsave, saveas, u kaydi sida, mtext, ctb, raadinta polar, xref, furayaasha gaaban, caadi ah, copyclip, pasteclip, pasteorig, copybase, clipboard
from: b58688e7
---

Haddii aad isticmaashay AutoCAD, ama barnaamij ku dhisan isla qaabkaas, inta badan waxa aad ogtahay halkan way shaqeysaa: sadarka amarka, aliasyada sida `L`, `C`, `TR` iyo `O`, Enter ama Space si aad u soo celiso, xulashada daaqadda iyo isgoynta, object snaps F3 ku, Ortho F8 ku, moodeelka meel ku jira xaashiyada iyo muuqaal-daaqadaha. Bogganu wuxuu liistaa waxa si toos ah u kala gudba, iyo farqiyada dadka qaldamaa. Akhri qaybta labaad xitaa haddii aad dhaqso u akhrinayso.

## Waxa si toos ah u kala gudba

| Dabeecad | CadCraft-ka |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Isla amarrada, isla aliasyada |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Isku mid |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Isla amarrada cabbirka |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` lagu qoro sadarka amarka | Isku mid, cabbirrada cusub |
| `B` si loo sameeyo bloog, `I` si loo geliyo, `PU` si loo nadiifiyo | Isku mid (purge wuxuu tirtiraa bloogyada aan la isticmaalin oo keliya) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` iyo kadibna `E` ama `W` | Isku mid |
| Qorista `_LINE` ama `-LAYER` script ama dabeecad ka timaada | Hordhaca `_`, `-`, `.` ama `'` waa la iska indha tiraa |
| Enter ama Space meel bannaan oo weydiinta ah wuxuu soo celinayaa amarkii ugu dambeeyay | Isku mid |
| Esc waa joojinta; Esc mar kale wuxuu nadiifiyaa xulashada | Isku mid |
| `@dx,dy`, `@d<a`, xagasha la qoro oo lagu tiriyo bartamaha saacadda ka soo horjeeda bariga | Isku mid |
| Daaqad bidix ilaa midig, isgoyn midig ilaa bidix, guji-guji; riix oo jiid lasso, Space wuxuu wareejiyaa daaqad / isgoyn / xadka (LASSOMODE) | Isku mid |
| Marka hore dooro, kadibna amarka (magac-fal) | Isku mid; amar dhammaaday wuxuu nadiifiyaa xulashada |
| `ALL` iyo `L` ee Dooro walaxda | Isku mid |
| Shift+guji wuxuu ka saaraa xulashada | Isku mid. Dejinta waxay ka dhigi kartaa guji inuu bedelo xulashada, sida PICKADD 0 sameeyo: eeg [Dejinta CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Isla amarrada iyo furayaasha; dhajintu wuxuu geliyaa nuqulka geesta hoose-bidix, sida PASTECLIP sameeyo |
| F3 object snap, F7 grid, F8 Ortho | Isla furayaasha |
| Laba jeer ku guji mataanaha si aad u weyneyso dhammaan | Isku mid |
| Qoraalka muraayad ahaan wuxuu weli akhrisan yahay | Isku mid (sida MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Isku mid; Mac-ka, Command ayaa sidoo kale shaqeeya |

[Tixraaca amarrada](topic:commands) wuxuu liistaa amar kasta iyo aliaskiisa.

:::tip
Haddii aad jeceshahay ribbon-ka AutoCAD, dooro nidaamka menyuga {{ui:Qorista qadiimiga ah}} ee {{ui:Dejinta}} › {{ui:CadCraft}} › {{ui:Menyuyaasha, furayaasha iyo mouse-ka}}: tabs-ka Home, Insert, Annotate, Parametric, View, Manage iyo Output oo ku dul yaal isla sadarka amarka, badhanka dhexe wuxuu pan-gareeyaa halka guji midig uu yahay Enter. Eeg [Menyuyaasha, furayaasha iyo mouse-ka](topic:menus-keys-and-mouse).
:::

[Khariidada amarrada](topic:command-map) wuxuu liistaa amar kasta oo CadCraft leeyahay oo leh magacyadooda gaagaaban, iyo [warqadda kooban](topic:cheat-sheet) ee 40-ka aad inta badan isticmaali doonto (sidoo kale PDF hal bog ah).

## Farqiyada dadka qaldamaa

### Dhibcaha la qoro waa buuxa

Marka dynamic input uu shaqeeyo, barnaamij kale wuxuu u qaadaa `100,0` la qoro ee nuqulka labaad inuu yahay mid xiriir ah. **Sadarka amarka CadCraft ma samayno taas:** halkaas, `x,y` mar walba waxaa lagu cabbiraa asalka. Haddii {{ui:Dyn}} ({{key:F12}}) uu shaqeeyo, isticmaal goobihiisa halkii: masaafada, {{key:Tab}}, xagasha. Isticmaal `@100,0` si aad u dhigto "100 midig dhibicii ugu dambeysay", ama u dhaqaaq crosshair-ka jihada saxda ah oo ku qor `100` oo keliya.

### Shift wuxuu ka tagaa snaps; ma siiso Ortho

Shift haysashada markaad gujinayso wuxuu iska indha tiraa object snaps guujintaas. Ma beddelo Ortho muddo gaaban. Isticmaal F8 ama badhanka {{ui:Ortho}}.

### Midig-guji had iyo jeer waa Enter

Ma jiro menyu midig-guji. Midig-guji naqshadda waa Enter: wuxuu dhammeeyaa amar, dhammeeyaa xulasho, ama soo celiyaa amarkii ugu dambeeyay. Intii lagu jiray jiidista grip ama sanduuqa xulashada, wuxuu joojiyaa. Jiid badhanka midig si aad u pan-gareyso.

### Ma jiro pan oo Space-ka ah

Space waa Enter, sidaas darteed Space haysashada oo la jiidaa ma pan-gareynayo. Pan u samee badhanka dhexe ama badhanka midig, ama zoom ka bax oo mar kale gal meel kale oo ku wareegsan gudiga mataanaha.

### TRIM iyo EXTEND

TRIM iyo EXTEND waxay ku bilaabmaan habka degdegga ah (Quick): walax kasta oo muuqata waa gees ama xad, qaybta ku hoos jirta tilmaamaha ayaa muujinaysa waxa tirtiri doono, jid la jiido ayaa jaraysa qayb kasta oo ay gudbayso, walaxda aan wax gudbin waa la tirtiraa. {{key:Shift}} wuxuu u beddelaa trim iyo extend. `O` wuxuu u beddelaa habka caadiga ah (Standard) (marka hore dooro geesaha), `F` iyo `C` waa xadka iyo isgoynta, `E` waa EDGEMODE, `R` wuu tirtiraa. Ma jiro xulasho `P` (Project): CadCraft wuxuu jaraa diyaaradda naqshadda.

### Fillet iyo chamfer

{{cmd:FILLET}} iyo {{cmd:CHAMFER}} waxay qaadaan xulashooyinka aad ogtahay: Undo, Polyline, Radius (ama Distance, Angle iyo mEthod), Trim iyo Multiple, iyo {{key:Shift}}+guji qoska gees. Fillet u dhexeeya polyline iyo xariiq wuxuu qaansada ku daraa walax gaar ah halkii uu ku xidhi lahaa polyline-ka, geesaha polyline-ka ee u dhow qayb qaanso ah ayaa sidii ay ahaayeen u sii jiri doonaan.

### Qoraalka fiqradda iyo qoraalka hal sadar

`T`, `MT` iyo `MTEXT` waa qoraal fiqrad oo lagu qoro meesha, leh ballac, masaafada sadarka iyo jihaynta; `DT` iyo `DTEXT` waa qoraal hal sadar ah, sida aad ogtahay. Ma jiraan qaabab qoraal ama tiirar, mana aad qori kartaa qaabaynta gudaha qoraalka (qoro dhuuban, jajab kor-iyo-hoos) weli; qaabaynta ku timaada fayl waa la ilaaliyaa, la sawiraa, la kaydiyaa (eeg [Ku dar qoraal iyo calaamado](topic:text#formatting-inside-paragraph-text-from-other-programs)). Wax walba waxaa lagu sawiraa far nooca Helvetica.

### Kaydinta macnaheedu waa "soo deji nuqul"

{{key:Mod+S}}, `SAVE` iyo `QSAVE` waxay soo dejiyaan nuqul naqshadda qaabkeeda: DWG aad furtay wuxuu u kaydiyaa DWG, DXF wuxuu u kaydiyaa DXF. Browser-ka gudihiisa wax si toos ah looma beddelo, faylasha la furay waligood ma bedelmaan. Gudaha CadCraft Studio, {{key:Mod+S}} wuxuu ku qoraa faylka aad furtay.

`SAVEAS` ({{key:Mod+Shift+S}}) waa sanduuq yar, ma aha maamulaha faylasha: dooro {{ui:DWG}} (iyo {{ui:Nooca}}-kiisa, AutoCAD 2000 ilaa 2018), {{ui:DXF R12}} ama {{ui:DXF 2000}} oo guji {{ui:Kaydi}}. Browser-ka ayaa go'aaminaya meesha soo dejinta tagayso. `DXFOUT` mar walba wuxuu soo dejiyaa DXF R12.

DWG aad furtay wuxuu ku kaydiyaa nooca uu ku yimid; naqshad cusub wuxuu ku kaydiyaa qaabka AutoCAD 2000 haddii aadan mid kale dooran. Xaashiyada, cabbirrada iyo qaababka xarriijinta way ilaalinayaan. Eeg [Faylasha: waxa furmaya, waxa kaydiya](topic:files#saving).

### Lakabyada: wax fudud

- Isbeddel kasta oo lakab ah (dhaqaajin, qabsasho, quful, midab, daabac, nooca khadka, ballaca, lakabka hadda) waa hal tallaabo oo ka noqo.
- Off iyo freeze waxay leeyihiin saameyn isku mid ah CadCraft-ka.
- Lakabyada naqshaddu ku qabsadeyso hal muuqaal-daaqad way ku sii qabsan doonaan halkaas: shaashadda, daabacaadda iyo markii aad u kaydiso DWG ama DXF.
- Muuqaal-daaqad ku muujineysa lakab midabkiisa, nooca khadkiisa, ballaciisa ama hufnaantiisa gaarka ah wuu sii wadi doonaa sidaas shaashadda, daabacaadda iyo DWG la kaydiyay (DXF wuxuu ilaaliyaa dejimaha lakabka; kaydintu way sheegtaa). Beddelidda taas muuqaal-daaqad kasta weli lama dhisin.
- Ma jiro maamulaha guryaha lakabka iyo ma jiro xaaladaha lakabka; {{cmd:RENAME}}, {{cmd:LAYMRG}} iyo {{cmd:LAYDEL}} waxay magac beddelaan, isku geeyaan, tirtiraan lakabyada. Noocyada khadka iyo ballacyada waxaa lagu dejiyaa guddiga midig (eeg [Ballaca xariiqda iyo noocyada khadka](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} iyo {{cmd:LAYMCUR}} waxay ku shaqeeyaan iyagoo la doortay.
- Kaydinta DXF R12 wuxuu magacyada lakabyada ku qoraa xarfo waaweyn. DWG wuxuu ilaaliyaa sida aad u qortay.

### Heerarka cabbirka

`DIMSTYLE` wuxuu furaa maamule heerarka magacaysan (cusub, beddel, dhig kan hadda jira, isbarbardhig, dhaqan). `DIMSCALE` iyo dejimaha kale weli waxay beddelaan waxa cabbirrada cusub isticmaalaan, cabbir kastana wuxuu hayaa cabbirradiisa, kuwaas oo sidoo kale laga beddeli karo guddiga Guryaha. Heerka hadda jira ma kaydsamo faylka. Cabbirrada waxay raacaan qaabka dherarka naqshadda (decimal, ama fiit iyo inji oo leh {{cmd:UNITS}}), ama {{ui:Qaabka}}-kooda. Eeg [Deji cabbirrada](topic:dimension-settings).

### Daabacaadu way fudud tahay

Miisaska qaabka daabacaadda waxay ku shaqeeyaan midabka, sida faylasha CTB: Monochrome, Colour iyo Grayscale waa la dhisay, adna waad samayn kartaa tiisaa, xaashi kastana miiskeeda ayuu hayaa. Akhrinta faylasha CTB waa la dhisay qeexitaanka la daabacay oo waxaa lagu tijaabiyay faylasha aynu nahay sameynay oo kaliya; miisaska qaabka daabacaadda ee magacaysan (STB) iyo dejinta bogagga weli lama dhisin. Khadadka waxay ku daabacmaan ballacooda, kuwa kale hal ballac qalin. Xaashiyada waxay ku daabacmaan 1:1 warqaddooda; moodeelka wuxuu ku daabacmaa miisaan la doortay ama la habeeyay. Eeg [Daabac PDF](topic:plot-pdf).

### Ka shaqaynta muuqaal-daaqad gudihiisa

Sida aad ogtahay: laba jeer ku guji gudaha muuqaal-daaqad (ama ku qor {{cmd:MSPACE}}) si aad moodeelka uga shaqeyso, laba jeer ku guji dibaddeeda (ama {{cmd:PSPACE}}) si aad xaashida ugu noqoto. Gudaha, pan iyo zoom waxay beddelaan waxa muuqaal-daaqaddu muujinayso, marka aan qufulka muuqaalkeeda la xirin; haddii la xiray, xaashida ayey dhaqaajinayaan. Guji tab-ka hoose naqshadda wuxuu sidoo kale ka baxaa muuqaal-daaqadda. Eeg [Ku shaqee moodeelka muuqaal-daaqad ka jira](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Raadinta iyo gelinta firfircoon haa, snap-ka gridka weli maya

Gridku waa mid la eego oo keliya; dhibcaha ma ku dhacaan (ma jiro mode F9 snap). Raadinta polar ({{key:F10}}, tallaabada lagu dejiyo {{cmd:POLARANG}}) iyo raadinta object snap ({{key:F11}}: istaag dhibic snap ah si aad u hesho) waxay u shaqeeyaan sida aad ogtahay; eeg [Ku snap walaxyada](topic:object-snaps#polar-tracking). Gelinta firfircoon ({{key:F12}}) waxay muujinaysaa masaafada iyo xagasha (ama X iyo Y) crosshair-ka agtiisa; eeg [Gelinta isku xidhka iyo masaafada](topic:coordinate-entry#dynamic-input).

### Fiit iyo inji

Dooro {{ui:Qaabka dherarka}} {{ui:Naqshadeed}} ama {{ui:Injineernimo}} (ama ku qor {{cmd:UNITS}}), oo qor dherarka sida aad ogtahay: `12'6"`, `12'6-1/2"`. Isticmaal hyphen, ma aha meel bannaan, ka hor jajabka: {{key:Space}} waa {{key:Enter}}. Sidoo kale deji {{ui:Unugyada}} {{ui:Inji}}, si xaashiyada iyo daabacaadu u soo bandhigaan miisaska naqshadeynta. Qaabku wuxuu ku sii jiraa faylasha DWG iyo DXF ee la kaydiyay. Eeg [Fiit iyo inji](topic:units-papers-scales#feet-and-inches-and-fractions).

### Nuqul iyo ku dhejis waxay ku sii jiraan CadCraft gudihiisa

{{key:Mod+C}}, {{key:Mod+X}} iyo {{key:Mod+V}} waxay koobiyeeyaan, jaraan oo ku dhejiyaan walaxyo naqshad gudaha, naqshadaha dhexdooda, iyo tabs-ka CadCraft ee isla browser-ka. Clipboard-ku waa kan CadCraft gaarka ah: ma dhejin kartid walaxyada CadCraft barnaamij kale, ama walaxyada barnaamij kale CadCraft. Ku dhejinta naqshad unugyo kale ka timaada ma dib u cabbirto: isticmaal {{cmd:SCALE}} kadib. {{key:Mod+D}} waa nuqul ku dhaqaaqa tilmaamaha, oo ah ku dar CadCraft. Eeg [Nuqul, ku dhejis iyo nuqul-sameyn](topic:copy-paste).

### Furayaasha browser-ka aad ma isticmaali kartid

Bogga web-ka ma qaadan karo {{key:Mod+N}}, {{key:Mod+W}} ama {{key:Mod+T}} browser-ka: waxay furaan oo xiraan daaqadaha iyo tabs-ka. Isticmaal badhanka {{ui:Cusub}} ama ku qor `NEW`. Eeg [Furayaasha, mice-ka iyo trackpad-ka](common:keys).

## Amarro aad u shaqeysid oo weli halkan ku jira

{{cmd:TABLE}} lama dhisin. Markaad ku qorto waxay tidhi "Unknown command". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} iyo {{cmd:XREF}} waa la dhisay.) [Weli lama dhisin](topic:not-built-yet) wuxuu liistaa waxa maanta la sameeyo meeshooda.
