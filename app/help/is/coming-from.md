---
title: Kemur frá öðrum teikniforritum
summary: Hvernig kunnuglegar skipanir, takkar og venjur samsvara CadCraft, og munurinn sem kemur reyndum teiknurum í koll.
keywords: skipti, munur, flytja, venjur, skammnöfn, kvikt inntak, pickfirst, pickadd, qsave, saveas, vista sem, mtext, ctb, pólarrakning, xref, flýtilyklar, kunnuglegt, copyclip, pasteclip, pasteorig, copybase, klippiborð
from: b58688e7
---

Ef þú hefur notað AutoCAD, eða forrit byggt á sama líkani, virkar flest af því sem þú kannt hér: skipanalínan, skammnöfn eins og `L`, `C`, `TR` og `O`, Enter eða Bil til að endurtaka, glugga- og krossvalsmeðferð, hlutasmellur á F3, Lóðrétt/lárétt á F8, líkanarými með útlitum og sýnigluggum. Þessi síða sýnir hvað samsvarar beint og síðan munina sem koma fólki í koll. Lestu seinni hlutann líka þótt þú fletir yfir þann fyrri.

## Það sem samsvarar beint

| Venja | Í CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Sömu skipanir, sömu skammnöfn |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Það sama |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Sömu málsetningarskipanir |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` slegið inn á skipanalínuna | Sama, fyrir nýjar málsetningar |
| `B` til að búa til blokk, `I` til að setja inn, `PU` til að hreinsa | Sama (hreinsun fjarlægir aðeins ónotaðar blokkir) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` og síðan `E` eða `W` | Sama |
| Að skrifa `_LINE` eða `-LAYER` úr skriftu eða venju | Fremsta `_`, `-`, `.` eða `'` er hunsað |
| Enter eða Bil á auðri spurningu endurtekur síðustu skipun | Sama |
| Esc hættir við; Esc aftur hreinsar valið | Sama |
| `@dx,dy`, `@d<a`, slegin horn rangsælis frá austri | Sama |
| Gluggi frá vinstri til hægri, kross frá hægri til vinstri, smelltu-smelltu; ýttu og dragðu fyrir lasso, Bil fer á milli glugga / kross / girðingar (LASSOMODE) | Sama |
| Velja fyrst, síðan skipunin (nafnorð-sagnorð) | Sama; lokin skipun hreinsar valið |
| `ALL` og `L` við Velja hluti | Sama |
| Shift+smellur fjarlægir úr valinu | Sama. Stillingar geta látið smell skipta út valinu í staðinn, eins og PICKADD 0 gerir: sjá [Stillingar CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Sömu skipanir og takkar; líming setur afritið eftir neðra vinstra horni þess, eins og PASTECLIP gerir |
| F3 hlutasmellur, F7 rist, F8 Lóðrétt/lárétt | Sömu takkar |
| Tvísmelltu á hjólið til að fara í aðdrátt að mörkum | Sama |
| Spegluð texti er áfram læsilegur | Sama (eins og MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Sama; á Mac virkar Command líka |

[Skipanaskrá](topic:commands) telur upp allar skipanir og skammnöfn.

:::tip
Ef þér líkar borðinn í AutoCAD, veldu valmyndarstílinn {{ui:Klassískt teikniforrit}} í {{ui:Stillingar}} › {{ui:CadCraft}} › {{ui:Valmyndir, takkar og mús}}: flipana Heim, Setja inn, Athugasemdir, Parametrískt, Sýn, Umsjón og Úttak yfir sömu skipanalínunni, og miðjutakkinn hliðrar meðan hægri smellur er Enter. Sjá [Valmyndir, takkar og mús](topic:menus-keys-and-mouse).
:::

[Skipanakortið](topic:command-map) telur upp allar skipanir CadCraft með skammnöfnum þeirra, og [minnisblaðið](topic:cheat-sheet) þær 40 sem þú notar mest (einnig sem eins blaðsíðu PDF).

## Munur sem kemur fólki í koll

### Punktar sem slegnir eru inn eru algildir

Með kvikt inntak á túlkar hitt forritið slegið `100,0` fyrir annan punkt sem afstætt. **Skipanalína CadCraft gerir það ekki:** þar er `x,y` alltaf mælt frá upphafspunkti. Með {{ui:Kvik}} ({{key:F12}}) á notaðu reitina þess í staðinn: fjarlægð, {{key:Tab}}, horn. Notaðu `@100,0` fyrir „100 til hægri við síðasta punkt“, eða færðu krossinn í rétta átt og skrifaðu bert `100`.

### Shift sleppir smellum; það gefur ekki Lóðrétt/lárétt

Að halda Shift meðan þú smellir hunsar hlutasmellur fyrir þann smell. Það skiptir ekki Lóðrétt/lárétt tímabundið. Notaðu F8 eða hnappinn {{ui:Lóðrétt/lárétt}}.

### Hægri smellur er alltaf Enter

Það er enginn samhengisvalmynd. Hægri smellur í teikningunni er Enter: hann lýkur skipun, lýkur vali eða endurtekur síðustu skipun. Í færslu með gripi eða í valglugga hættir hann við. Dragðu með hægri takkanum til að hliðra.

### Engin hliðrun með Bilstönginni

Bil er Enter, svo að halda Bil og draga hliðrar ekki. Hliðraðu með miðju- eða hægri takkanum, eða aðdráttu út og aftur inn á öðrum stað með hjólinu.

### Stytta og lengja

Stytta og lengja byrja í Fljótum ham: sérhver sýnilegur hlutur er skurðarbrún eða mörk, bitinn undir bendlinum sýnir hvað fer, dregin leið styttir hvern bút sem hún fer yfir, og hlutur sem ekkert sker er eytt. {{key:Shift}} skiptir á milli styttingar og lengingar. `O` skiptir yfir í Staðlaðan ham (veldu fyrst brúnirnar), `F` og `C` eru girðing og kross, `E` er EDGEMODE, `R` eyðir. Það er enginn `P`-valkostur (Project): CadCraft styttir í plani teikningarinnar.

### Ávöl horn og skáhorn

{{cmd:FILLET}} og {{cmd:CHAMFER}} taka þá valkosti sem þú þekkir: Afturkalla (U), Fjöllína (P), Radíus (R) eða Fjarlægð (D), Horn (A) og Aðferð (E), Stytta (T) og Margfeldi (M), og {{key:Shift}}+smellur fyrir skarpt horn. Ávöl horn milli fjöllínu og línu bætir boganum sem sérhlut í stað þess að sameina þau í fjöllínuna, og fjöllínuhorn við bogahluta eru látin standa óbreytt.

### Málsgreinatexti og einlínutexti

`T`, `MT` og `MTEXT` eru málsgreinatexti sem skrifaður er á staðnum, með breidd, línubili og jöfnun; `DT` og `DTEXT` eru einlínutexti, eins og þú þekkir þá. Hér eru engir textastílar eða dálkar, og þú getur ekki enn slegið inn sniði í texta (feitletrun, staflaðar brot); snið sem kemur í skrá er geymt, teiknað og vistað (sjá [Bæta við texta og merkingum](topic:text#formatting-inside-paragraph-text-from-other-programs)). Allt er teiknað með letri í Helvetica-stíl.

### Vistun þýðir „sækja afrit“

{{key:Mod+S}}, `SAVE` og `QSAVE` sækja afrit á sniði teikningarinnar: DWG sem þú opnaðir vistast sem DWG, DXF sem DXF. Í vafranum er engu skrifað yfir á sama stað, og opnaðar skrár eru aldrei breyttar. Í CadCraft Studio skrifar {{key:Mod+S}} aftur í skrána sem þú opnaðir.

`SAVEAS` ({{key:Mod+Shift+S}}) er lítill gluggi, ekki skráavafri: veldu {{ui:DWG}} (með {{ui:Útgáfa}} sinni, AutoCAD 2000 til 2018), {{ui:DXF R12}} eða {{ui:DXF 2000}} og smelltu á {{ui:Vista}}. Vafrinn ákveður hvert niðurhalið fer. `DXFOUT` sækir alltaf DXF R12.

DWG sem þú opnaðir vistast í þeirri útgáfu sem hún kom í; ný teikning vistast á AutoCAD 2000 sniði nema þú veljir annað. Blöð, málsetningar og skyggingamynstur haldast. Sjá [Skrár: hvað opnast, hvað vistast](topic:files#saving).

### Lög: einfaldari

- Sérhver breyting á lögum (kveikt, fryst, læst, litur, prentun, línugerð, línuþykkt, virkt lag) er eitt skref í afturköllun.
- Slökkt og fryst hafa sömu áhrif í CadCraft.
- Lög sem teikning frystir í einum sýniglugga haldast fryst þar: á skjánum, í útprentunum og þegar hún er vistuð sem DWG eða DXF.
- Sýnigluggi sem sýnir lag í eigin lit, línugerð, línuþykkt eða gegnsæi heldur því á skjánum, í útprentunum og í vistaðri DWG (DXF geymir stillingar lagsins sjálfs; vistunin segir frá því). Breyting á þessu eftir sýnigluggum er ekki enn smíðuð.
- Engin eiginleikastjórnun laga og engin lagaástönd. {{cmd:RENAME}}, {{cmd:LAYMRG}} og {{cmd:LAYDEL}} endurnefna, sameina og eyða lögum. Línugerðir og línuþykktir eru stilltar í hægra spjaldinu (sjá [Línuþykktir og línugerðir](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} og {{cmd:LAYMCUR}} vinna með vali á hlut.
- Vistun í DXF R12 skrifar heiti laga með hástöfum. DWG geymir þau eins og þú slóst þau inn.

### Málsetningarstílar

`DIMSTYLE` opnar stjórnun fyrir nefnda stíla (nýr, breyta, setja sem núverandi, bera saman, beita). `DIMSCALE` og aðrar stillingar breyta enn því sem nýjar málsetningar nota, og hver málsetning heldur sínum eigin stærðum, sem þú getur líka breytt í eiginleikaspjaldinu. Núverandi stíll er ekki vistaður í skránni. Málsetningar fylgja lengdarsniði teikningarinnar (aukastafir, eða fet og tommur með {{cmd:UNITS}}), eða sínu eigin {{ui:Snið}}. Sjá [Stilltu stærðir málsetninga](topic:dimension-settings).

### Prentun er einfaldari

Prentstílstöflur virka eftir lit, eins og CTB-skrár gera: Einlitt, Litur og Gráskali eru innbyggðar, þú getur búið til þínar eigin, og hvert blað geymir sína töflu. Lestur CTB-skráa er smíðaður eftir birtri lýsingu og hefur aðeins verið prófaður á skrám sem við bjuggum til; nefndar prentstílstöflur (STB) og blaðsuppsetningar eru ekki enn smíðaðar. Línur prentast í sinni línuþykkt, hinar með einni pennabreidd. Blöð prentast í 1:1 á eigin pappír; líkanið prentast í völdum mælikvarða eða lagað. Sjá [Prenta í PDF](topic:plot-pdf).

### Vinna innan sýniglugga

Eins og þú þekkir: tvísmelltu inni í sýniglugga (eða skrifaðu {{cmd:MSPACE}}) til að vinna í líkaninu í gegnum hann, og tvísmelltu utan hans (eða {{cmd:PSPACE}}) til að fara aftur á blaðið. Inni í honum breyta hliðrun og aðdráttur því sem sýnigluggi sýnir, nema sýningin sé læst; þá hreyfa þau blaðið. Að smella á flipa undir teikningunni fer líka úr sýnigluggi. Sjá [Vinna í líkaninu gegnum sýnigluggi](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Rakning og kvikt inntak já, smellun á rist ekki enn

Ristin er aðeins til að horfa á; punktar smella ekki á hana (það er enginn F9-smellistilling). Pólarrakning ({{key:F10}}, skref stillt með {{cmd:POLARANG}}) og hlutarakning ({{key:F11}}: staldraðu við smellupunkt til að ná honum) virka eins og þú þekkir; sjá [Smellur á hluti](topic:object-snaps#polar-tracking). Kvikt inntak ({{key:F12}}) sýnir fjarlægð og horn (eða X og Y) við krossinn; sjá [Innsláttur hnita og fjarlægða](topic:coordinate-entry#dynamic-input).

### Fet og tommur

Veldu {{ui:Lengdarsnið}} {{ui:Byggingarlist}} eða {{ui:Verkfræðileg}} (eða skrifaðu {{cmd:UNITS}}), og sláðu inn lengdir eins og þú þekkir: `12'6"`, `12'6-1/2"`. Notaðu bandstrik, ekki bil, á undan broti: {{key:Space}} er {{key:Enter}}. Stilltu líka {{ui:Einingar}} á {{ui:Tommur}}, svo að blöð og útprentanir bjóði upp á byggingarlistarmælikvarða. Sniðið er geymt í vistuðum DWG- og DXF-skrám. Sjá [Fet og tommur](topic:units-papers-scales#feet-and-inches-and-fractions).

### Klippiborðið er innan CadCraft

{{key:Mod+C}}, {{key:Mod+X}} og {{key:Mod+V}} afrita, klippa og líma hluti innan teikningar, milli teikninga og milli CadCraft-flipa í sama vafra. Klippiborðið er eigið CadCraft: þú getur ekki límt CadCraft-hluti inn í annað forrit, né hluti úr öðru forriti inn í CadCraft. Líming úr teikningu í öðrum einingum endurmælist ekki: notaðu {{cmd:SCALE}} á eftir. {{key:Mod+D}} er tvöföldun sem fylgir bendlinum, viðbót í CadCraft. Sjá [Afrita, líma og tvöfalda](topic:copy-paste).

### Vafrataktar sem þú getur ekki notað

Vefsíða getur ekki tekið {{key:Mod+N}}, {{key:Mod+W}} eða {{key:Mod+T}} frá vafranum: þeir opna og loka gluggum og flipum. Notaðu hnappinn {{ui:Ný}} eða skrifaðu `NEW`. Sjá [Takkar, mýs og snertiborð](common:keys).

## Skipanir sem þú gætir leitað að sem eru ekki hér enn

{{cmd:TABLE}} er ekki smíðuð. Ef þú skrifar hana kemur „Óþekkt skipun“. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} og {{cmd:XREF}} eru smíðaðar.) [Ekki smíðað enn](topic:not-built-yet) telur upp hvað á að gera í staðinn í dag.
