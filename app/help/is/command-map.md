---
title: Skipanakort: hvað á að slá inn
summary: Allar skipanir CadCraft með stuttnöfnum þeirra, frá A til Ö, búnar til úr forritinu sjálfu, og venjur úr öðrum teiknihugbúnaði sem eru ólíkar.
keywords: skipanakort, skipanir, stuttnöfn, stytting, koma frá, skipanalisti, hvað á að slá inn, eyða, stytta, jafngildi, munur
from: 3bdfd3e6
---

CadCraft notar skipanaheiti og stuttnöfn sem fólk þekkir úr öðrum teiknihugbúnaði: slærðu inn `L` fyrir línu, `TR` til að stytta og `E` til að eyða. Þannig þarf ekki að læra neina þýðingartöflu fyrir flestar skipanirnar: nafnið sem þú þekkir er einnig nafnið hér. Listinn hér fyrir neðan inniheldur allar skipanir CadCraft, búnar til úr forritinu sjálfu. {{key:Enter}} endurtekur síðustu skipun; `HELP` í skipanalínunni prentar sama lista.

Þær fáu sem eru ekki eins, eða eru ekki smíðaðar:

- **Vista** hleður niður afriti í vafranum ({{cmd:SAVE}}, {{cmd:SAVEAS}}); í CadCraft Studio skrifar hún skrána. Sjá [Frá öðrum teiknihugbúnaði](topic:coming-from).
- **PLOT** býr til PDF-skrá (einnig PNG og SVG), með prentstílatöflu; það er enginn síðuuppsetningarstjóri.
- **DIMSTYLE** og **PEDIT** eru smíðaðar; **PEDIT** hefur ekki valkostinn Breyta hornpunkti (það gera gripin).
- **TABLE** er ekki smíðuð; {{cmd:XREF}}, {{cmd:SPLINE}} og {{cmd:WBLOCK}} eru það.
- Eigin skipanir forrits (AutoLISP `C:NAME`) birtast eftir að þú hleður því með {{cmd:APPLOAD}}; þær eru ekki skráðar hér.

## Allar skipanir (398)

| Skipun | Stuttnöfn | Hvað hún gerir |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Snýr þrívíddarsýninni um með vinstri hnappi |
| `ACCESS` | `AX` | Kveikir eða slekkur á teikningu án sjónar: niðurstöður lesnar upp í skjálesara, lyklaborðsbendill á teikningunni, smellihljóð og upplesnar skipanir. |
| `ALIASEDIT` |  | Breytir skipanastyttingum í einni textaskrá (kunnugleg L, *LINE-form) |
| `ALIGN` | `AL` | Færir og snýr hlutum þannig að upphafspunktar lendi á áfangapunktum (eitt, tvö eða þrjú pör), og stækkar þá ef þú vilt |
| `ALIGNPANEL` | `ALP` | Opnar spjaldið Jafna og dreifa |
| `ALIGNTO` |  | Jafnar vinstri, miðju, hægri, efri, miðju og neðri brúnir valinna hluta, á valinu, fyrsta eða síðasta völdu hlutnum, eða punkti |
| `ANNOALLVISIBLE` | `ANNOALL` | Sýnir skýringarhluti í öllum mælikvörðum, eða aðeins þar sem mælikvarði sýnigluggans (eða teikningarinnar) er á listanum þeirra |
| `ANNOSCALE` | `CANNOSCALE` | Stillir skýringarmælikvarða teikningarinnar: skýringartexti og málsetningar stækka eða minnka svo þær prentist í sömu stærð |
| `APPLOAD` | `AP` | Hleður forritum: LISP-forrit (.lsp) og gluggaskrár þeirra (.dcl); ræsisvítan (AP) |
| `ARC` | `A` | Bogi: 3 punktar, Upphaf/Miðja/Endir, Upphaf/Miðja/Horn, Upphaf/Miðja/Lengd, Upphaf/Endir/Horn, Upphaf/Endir/Stefna, Upphaf/Endir/Radíus, Miðja/Upphaf/Endir, Miðja/Upphaf/Horn, Miðja/Upphaf/Lengd, Halda áfram |
| `AREA` | `AA` | Flatarmál og ummál eftir punktum eða hlut; Bæta við og Draga frá halda samtölu (AA) |
| `ARRAY` | `AR` | Afrit í röðum og dálkum, eða í hring um miðpunkt (AR) |
| `ARRAYASSOCIATIVITY` |  | Stillir hvort ARRAY-skipanirnar búi til fylki sem haldast breytanleg (1) eða venjuleg afrit (0) |
| `ARRAYCLOSE` |  | Lýkur breytingu á upphaflegum hlutum fylkis |
| `ARRAYEDIT` |  | Breytir fylki sem var búið til með valkostinum Tengt: fjöldi, bil, upphaflegir hlutir, einn liður |
| `ARRAYPATH` |  | Afrit af hlutum eftir línu, boga, fjöllínu eða annarri sveigju |
| `ARRAYPOLAR` |  | Afrit í hring um miðpunkt |
| `ARRAYRECT` |  | Afrit í röðum og dálkum |
| `ASBUILT` | `ASB` | ASBUILT les punkta eins og þeir voru mældir á vettvangi (CSV / TXT, eins og EXPORTPOINTS skrifar) og ber þá saman við punkta teikningarinnar: innan eða utan þols, ómældir, aukapunktar. Merkir þá á laginu AS-BUILT og hleður niður CSV-skýrslu. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Skilgreinir eigind (merki sem blokk biður um gildi fyrir) til að setja í blokk (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Breytir eindagildum blokkartilvísunar í skipanalínunni, hverju á eftir öðru (Enter heldur gildi) |
| `ATTSYNC` |  | Samræmir tilvísanir blokkar við eigindaskilgreiningar hennar: nýjar bætast við með sjálfgefnum gildum, fjarlægðum er eytt, staðsetningar og texti endurstillt; gildi haldast |
| `AUDIT` |  | Athugar opnu teikninguna með tilliti til skemmda: tölur sem eru ekki endanlegar, hlutir án stærðar, vantandi lög, blokkir, stílar og línutegundir, blokkir sem innihalda sjálfa sig, sameiginleg auðkenni, bilaðar málsetningar og skyggingar. Listar það sem fannst eftir tegund og spyr áður en lagað er; lagfæringin er eitt skref í afturköllun. |
| `AUNITS` | `ANGUNITS` | Hvernig horn eru sýnd og slegin inn: aukastigar, gráður-mínútur-sekúndur eða stefnur eins og N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Sjálfvirk útfylling teikningar kveikt eða slökkt, eða listi yfir það sem mynstur teikningarinnar stinga upp á núna. |
| `AUTOCONSTRAIN` |  | Bætir við samfallsskorðum, láréttum og lóðréttum skorðum þar sem rúmfræðin er þegar nálægt |
| `AUTODIM` | `ADIM` | Málsetur eftir reglum: heildarstærð, keðjur eftir hliðum, op, þvermál gata og bil í neti, án þess að endurtaka það sem þegar er málsett. |
| `AUTOSHEET` | `ASH` | Raðar blöðum sjálfkrafa: velur pappír og staðlaða mælikvarða og setur hverja sýn með yfirskrift og titilreit. |
| `BATTMAN` |  | Eigindastjóri blokka: röð, merki, spurningar, sjálfgefin gildi og stillingar eiginda blokkar, og tilvísanir hennar síðan uppfærðar |
| `BCLOSE` |  | Lokar blokkaritlinum: vistar blokkina eða hendir breytingunum |
| `BCONVERT` | | BCONVERT finnur rúmfræði sem endurtekur sig og breytir henni í blokkartilvísanir. Veldu hlutina sem endurtaka sig: hver annar hlutahópur í opna rýminu sem er sama rúmfræði, færður og snúinn um hvaða horn sem er, finnst, og þegar Speglað eða Skalað er kveikt finnast líka spegilmyndir og afrit í annarri stærð. Gefðu nýju blokkinni heiti og grunnpunkt; valið og sérhvert afrit verða tilvísanir í hana, hver með sinn snúning og mælikvarða. Eða veldu Blokk og nefndu blokk sem fyrir er til að finna lausa afrit af hlutum hennar. Afrit verður að hafa sama lag, lit, línutegund og línuþykkt nema Eiginleikar sé stillt á Hunsa. Hlutir á læstum lögum eru látnir í friði. Eitt skref í afturköllun. |
| `BEDIT` | `BE` | Blokkaritill: breytir hlutum og eigindum blokkar; BCLOSE vistar (BE) |
| `BLEND` |  | BLEND: splæsa milli enda tveggja opinna sveigja, valin nálægt endunum til að tengja. CONtinuity: Snertill fylgir báðum stefnum, Slétt fylgir líka hvernig þær beygjast. |
| `BLOCK` | `B`, `BMAKE` | Býr til blokk úr hlutum (þeir verða ein tilvísun) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: sérhver tilvísun í eina blokk verður tilvísun í aðra, á sama stað með sama mælikvarða og snúningi. Gildi eiginda sem báðar blokkirnar hafa haldast. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE sýnir spjaldið Blokkir með bendilinn í síunni. Spjaldið sýnir mynd af hverri blokk (þeim sem síðast voru settar fyrst), sem lista eða reit; smelltu á mynd eða dragðu hana á teikninguna til að setja blokkina með INSERT. Undir Söfn bætirðu við eigin DWG- eða DXF-skrá: blokkir hennar eru sýndar með myndum og afritaðar inn í þessa teikningu þegar þú setur eina þeirra. Í CadCraft Studio er hægt að bæta við möppu með teikningum, og skrár og möppur eru munaðar. |
| `BOMEDIT` | `BOMCOLUMNS` | Dálkar, hópun, röðun, titill, samtölur og athugasemdir efnislistatöflu |
| `BOMEXPORT` |  | Vistar efnislistatöflu sem .csv-skrá |
| `BOMTABLE` | `BOM` | Lifandi efnislistatafla fyrir eitt svæði, eða alla teikninguna |
| `BOMUPDATE` |  | Uppfærir allar efnislistatöflur núna, líka frystar |
| `BOMZONE` | `BZONE` | Nefnt svæði teikningarinnar fyrir efnislista: tvö horn, marghyrningur, eða útlína lokaðs hlutar |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): veldu punkt innan lokaðs svæðis og fáðu lokaða fjöllínu utan um það. Bogar haldast bogar. Eyjar teiknar einnig útlínur svæðanna innan þess. |
| `BOX` |  | Kassi: tvö horn og hæð (3D) |
| `BPARAMETER` | `BPARAM` | Ekki smíðuð enn: að bæta breytu (eins og Sýnileiki) við blokk. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Breytur blokka: nefndar breytur með formúlum, og nokkrar sýnileikabreytur í einni blokk. Virkar í blokkaritlinum (úthlutar völdum hlutum á stöðu) og á valda tilvísun (eigin gildi og stöður). |
| `BREAK` | `BR` | Brýtur línu, boga, hring eða fjöllínu milli tveggja punkta (BR) |
| `BREAKATPOINT` |  | Skiptir línu, boga eða fjöllínu í tvennt í punkti |
| `BREAKLINE` |  | Teiknar línu með brotatákni; stærð hennar og framlenging út fyrir endana er munuð. |
| `BREPLACE` |  | BREPLACE skiptir einni blokk út fyrir aðra. Valið: veldu blokkartilvísanir og nefndu blokkina sem nota skal í staðinn. Allt: nefndu blokk og staðgengil hennar, og hver tilvísun í öllum rýmum og inni í öðrum blokkum breytist. Tilvísun heldur stað sínum, mælikvarða, snúningi og lagi, og gildum eiginda sem báðar blokkirnar hafa; gildi sem nýja blokkin hefur ekki pláss fyrir falla niður og eru nefnd. |
| `BSEARCH` |  | BSEARCH finnur blokkir. Heiti: hluti af heiti blokkar, eða mynstur með * og ?. Eigind: gildi (eða TAG=gildi) sem eigindir tilvísunar hafa. Rúmfræði: veldu hluti eða eina blokkartilvísun, og blokkirnar sem eru að minnsta kosti 85% líkar lögun eru taldar upp, best fyrst; stærð, snúningur og spegling skipta ekki máli. Tilvísanirnar sem finnast í opna rýminu eru valdar, tilbúnar fyrir næstu skipun. |
| `BURST` |  | Sundurliðar blokkartilvísanir og heldur því sem eigindir þeirra segja: hvert gildi verður texti á lagi eigindarinnar. |
| `BVHIDE` | `BVH` | Í blokkaritlinum: felur hluti í núverandi sýnileikastöðu. |
| `BVSHOW` | `BVSH` | Í blokkaritlinum: sýnir hluti sem núverandi sýnileikastaða felur (þeir sjást daufir til að velja). |
| `BVSTATE` | `BVS` | Í blokkaritlinum, á blokk með sýnileikastöðum: skiptir yfir í stöðu, eða bætir við, endurnefnir eða eyðir einni. |
| `CAL` |  | Reiknar út lengd eða tölu: + − * / og sviga, eins og þú slærð þá inn hvar sem er |
| `CENTERLINE` | `CL` | Miðlína milli tveggja lína: mitt á milli þeirra, eða eftir deililínu þegar þær mætast (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Miðmerki: kross í miðju hrings eða boga, með miðlínum rétt út fyrir hann (CM) |
| `CHAMFER` | `CHA` | Sker horn milli tveggja lína í skásnið (D tvær fjarlægðir, A lengd og horn, P sérhvert horn fjöllínu) |
| `CHSPACE` |  | CHSPACE: færir hluti milli blaðs og líkansins í gegnum sýnigluggu. Þeir eru skalaðir og snúnir svo þeir líti eins út frá hinni hliðinni. Á blaði fara þeir í líkanið; á meðan unnið er í gegnum sýnigluggu (MSPACE) koma þeir á blaðið. |
| `CIRCLE` | `C` | Miðja og radíus, þvermál, 2 eða 3 punktar |
| `CLASS` |  | Setur valda hluti í flokk, eða stillir virkan flokk ef ekkert er valið (? listar þá) |
| `CLASSES` | `CLS` | Spjaldið Flokkar: flokkar raða hlutum yfir lög; sýna, fela og stílfæra þá, og yfirskrifa þá í hverjum sýnigluggu (CLS) |
| `COMMANDLINE` | `CMDLINE` | Festir eða losar skipanalínuna, gerir hana að einni línu, stillir fjölda sögulína hennar, eða opnar söguna (F2) |
| `COMPARESETTINGS` | `CMPSET` | Ber saman málsetningarstíla, textastíla, lög, blöð eða einingar: tvo í þessari teikningu, eða þessa teikningu við aðra opna, og afritar gildi milli þeirra. |
| `CONSTRAINTBAR` | `CBAR` | Sýnir eða felur skorðustikur (Sýna allt / Fela allt, eða eftir hlut) |
| `COPY` | `CO`, `CP` | Afritar hluti, eins oft og þú smellir |
| `COPYBASE` |  | Afritar hluti á klippiborðið með grunnpunkti sem þú velur |
| `COPYCLIP` |  | Afritar hluti á klippiborðið (Ctrl+C); PASTECLIP setur þá |
| `COUNT` | `BCOUNT` | Telur blokkartilvísanir: veldu eina til að velja og telja allar tilvísanir blokkar hennar |
| `COUNTTABLE` |  | Setur inn töflu yfir fjölda blokka |
| `CREDITS` |  | Setur þakkir safnsins inn í teikninguna sem töflu. Keyrðu aftur til að uppfæra töfluna úr hlutunum í teikningunni núna. |
| `CURSORSIZE` |  | Stærð krosshársins: 100 lætur það ná frá brún til brúnar á teikningunni (Stillingar › Bendill › Allur skjár) |
| `CUTCLIP` |  | Klippir hluti á klippiborðið (Ctrl+X): afritar, og eyðir síðan |
| `CYLINDER` | `CYL` | Strokkur: miðja, radíus og hæð (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Listar blokkir, eigindir þeirra og eiginleika hluta sem töflu í teikningunni eða CSV-skrá |
| `DATALINK` | `DL` | Tafla úr CSV-skrá sem man skrána, svo hægt sé að lesa hana aftur |
| `DATALINKUPDATE` | `DLU` | Les skrá gagnatengils aftur og fyllir töflur hans á ný |
| `DCALIGNED` | `DCALI` | Víddarskorða: raunveruleg fjarlægð milli punkta, punkts og línu, eða tveggja lína |
| `DCANGULAR` | `DCANG` | Víddarskorða: horn milli tveggja lína, eða boga |
| `DCCONVERT` |  | Breytir málsetningum sem teiknaðar eru á skorðanlega rúmfræði í víddarskorður |
| `DCDIAMETER` | `DCDIA` | Víddarskorða: þvermál hrings eða boga |
| `DCDISPLAY` |  | Sýnir eða felur víddarskorður á teikningunni |
| `DCHORIZONTAL` | `DCHOR` | Víddarskorða: lárétt fjarlægð |
| `DCLINEAR` | `DCLIN` | Víddarskorða: lárétt eða lóðrétt fjarlægð, frá staðnum þar sem þú setur hana |
| `DCRADIUS` | `DCRAD` | Víddarskorða: radíus hrings eða boga |
| `DCVERTICAL` | `DCVER` | Víddarskorða: lóðrétt fjarlægð |
| `DELBLOCKS` |  | Eyðir blokkum: sérhverri tilvísun (líka þeim sem eru innan annarra, á öllum blöðum) og skilgreiningunum |
| `DELCONSTRAINT` | `DELCON` | Fjarlægir allar skorður (rúmfræðilegar og víddarskorður) af hlutunum sem þú velur |
| `DELOPENING` |  | Tekur hurð eða glugga út úr vegg. |
| `DESCRIBE` | `DESC` | Segir hvað teikningin inniheldur: hve marga hluti, af hvaða tegund, hversu stóra, hvað er valið. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Hreinsar valið (Esc) |
| `DETAILS` | `DET` | Eigin smáatriði fyrirtækisins þíns, fundin fyrir það sem þú teiknar: finna, bæta við blokk, lista, fjarlægja, kveikja eða slökkva á tillögum. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Teiknar skýringarmynd úr texta: Mermaid-flæðirit, PlantUML-íhlutamynd, D2, lista úr-í eða draw.io XML, sem blokkir og tengi sem þú getur breytt |
| `DIMALIGNED` | `DAL`, `DIMALI` | Raunveruleg fjarlægð milli tveggja punkta |
| `DIMANGULAR` | `DAN`, `DIMANG` | Horn milli tveggja lína, boga, eða eftir þremur punktum |
| `DIMARC` | `DAR` | Málsetning bogalengdar: fjarlægðin eftir boga, með bogatákninu (DAR) |
| `DIMASZ` |  | Málsetningarstilling: stærð örva |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Málsetningar staflaðar frá einni grunnlínu |
| `DIMBREAK` | `DBREAK` | Brýtur málsetningar- og framlengingarlínur þar sem þær skerast aðra hluti (Sjálfvirkt), milli tveggja punkta (Handvirkt), eða fjarlægir brotin |
| `DIMCONSTRAINT` | `DCON` | Víddarskorður: línulegar, samsíða, hornrétt, radíus, þvermál, breyta |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Keðja málsetninga, hver frá enda þeirrar síðustu |
| `DIMDEC` |  | Málsetningarstilling: aukastafir |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Þvermál boga eða hrings |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Losar málsetningar frá hlutunum sem þær eru tengdar við (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Breytir texta málsetningar (Heim, Nýr texti, Snúa) eða hallar framlengingarlínunum (Skáhallt) |
| `DIMEXE` |  | Málsetningarstilling: framlenging út fyrir málsetningarlínuna |
| `DIMEXO` |  | Málsetningarstilling: frávik frá upphafinu |
| `DIMGAP` |  | Málsetningarstilling: bil umhverfis texta |
| `DIMINSPECT` |  | Skoðunarmálsetning: rammi utan um gildið með merkimiða og hversu oft hluturinn er skoðaður |
| `DIMJOGGED` | `DJO`, `JOG` | Málsetning brotins radíuss: radíus teiknaður frá nær punkti þegar miðjan er langt í burtu (DJO) |
| `DIMJOGLINE` | `DJL` | Bætir brotatákni við línulega eða samsíða málsetningarlínu, til að sýna að fjarlægðin er ekki teiknuð í réttum hlutföllum (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Lárétt eða lóðrétt fjarlægð (R fyrir hvaða horn sem er) |
| `DIMLUNIT` |  | Málsetningarstilling: snið lengdar (1 vísindalegt, 2 aukastafir, 3 verkfræðilegt, 4 byggingarlegt, 5 brot) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Hnitmálsetning: X- eða Y-fjarlægð punkts frá upphafi UCS, á vísilínu (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Yfirskrifar málsetningarbreytur á völdum málsetningum án þess að breyta stíl þeirra; Hreinsa setur stílinn aftur (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radíus boga eða hrings |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Tengir punkta málsetningar við hluti, svo hún fylgi þeim og mæli aftur þegar þeir hreyfast (DRE) |
| `DIMSCALE` |  | Málsetningarstilling: heildarmælikvarði (stærðir × þessi) |
| `DIMSPACE` |  | Jafnt bil milli samsíða málsetninga, mælt frá grunnmálsetningu (0 raðar þeim upp, Sjálfvirkt er tvöföld textahæð) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Býr til, breytir, stillir sem núverandi, eyðir, beitir og ber saman nefnda málsetningarstíla (gluggann; -DIMSTYLE í skipanalínunni) |
| `DIMTEDIT` | `DIMTED` | Færir málsetningartexta til vinstri, hægri eða í miðju málsetningarlínunnar, eða snýr honum |
| `DIMTEXTUNIT` | `DTU` | Málsetningartexti í mm, cm, m eða km, eða í eigin einingum teikningarinnar: valdar málsetningar, annars nýjar (DTU) |
| `DIMTXT` |  | Málsetningarstilling: textahæð |
| `DIST` | `DI` | Fjarlægð og horn milli tveggja punkta |
| `DISTRIBUTE` |  | Dreifir völdum hlutum jafnt, til hliðar eða upp og niður: jöfn skref milli miðja, eða jöfn bil; ytri tveir haldast |
| `DIVIDE` | `DIV` | DIVIDE (DIV): merki sem skipta línu, boga, hring, fjöllínu, splæsu eða sporbaug í jafna hluta. Punktar, eða með Blokk blokk við hvert merki. |
| `DOCUMENTS` | `DOCS` | Opnar spjaldið Skjöl: tekur teikningar út og inn, útgáfur, útgáfustöður og samþykki fyrir verkefnamöppu |
| `DOOR` | `DR` | Setur hurð í vegg. Hliðin sem þú smellir á er hliðin sem hún opnast að. |
| `DRAWORDER` |  | Breytir teiknunarröð: færir hluti fremst, sendir þá aftast, eða setur þá ofan á eða undir aðra hluti. |
| `DUPLICATE` | `DUP` | Afrit sem fylgir bendlinum: smelltu til að setja það niður (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Eiginleikar teikningarinnar: titill, höfundur og fleira, og þín eigin pör nafna og gilda |
| `DXFOUT` |  | Hleður teikningunni niður sem DXF R12 (Vista heldur sínu sniði) |
| `EATTEDIT` | `DDATTE` | Breytir eigindum blokkartilvísunar: gildum, texta og eiginleikum, eina eigind í einu |
| `ELLIPSE` | `EL` | Endapunktar meginása og hinn hálfásinn |
| `ERASE` | `E`, `DELETE` | Fjarlægir hluti |
| `EXPLODE` | `X` | Sundurliðar fjöllínur, blokkir og málsetningar í hluta sína |
| `EXPORT` | `EXP` | Vistar afrit af teikningunni í skráargerð sem viðbót skrifar |
| `EXPORT3D` | `3DEXPORT` | Flytur út þrívíddarlíkanið: GLB, OBJ eða STL |
| `EXPORTPOINTS` | `EXPPTS` | Skrifar punkta, og innsetningarpunkta blokka með einni eigind sem lýsingu, í CSV- eða TXT-skrá (PNEZD, PENZD eða XYZ) fyrir BIM- og mælingaforrit |
| `EXTEND` | `EX` | Lengir hluti þar til þeir mæta öðrum: smelltu nálægt enda, dragðu í gegnum nokkra, eða Shift+smelltu til að stytta |
| `EXTRIM` |  | EXTRIM: veldu eina skurðbrún, og síðan hlið. Allt sem sker brúnina er stytt á þeirri hlið. Bitarnir sem færu sjást þegar þú hreyfir bendilinn. |
| `EXTRUDE` | `EXT` | Pressar lokaða 2D-hluti í fasta hluti (3D) |
| `FIELD` |  | Setur reit í texta, töfluhólf eða eigind: dagsetningu, skráarheiti, blaðnúmer, eiginleika teikningar, flatarmál eða lengd hlutar, eða formúlu |
| `FILLET` | `F` | Rúnar eða ferkantar hornið milli tveggja hluta (R radíus, P sérhvert horn fjöllínu, M nokkur) |
| `FIND` |  | Finnur og skiptir út orðum í texta, eigindagildum og málsetningartexta |
| `FLATTEN` |  | Stillir hæð (Z) og þykkt valinna hluta á 0, líka í blokkunum sem þeir nota. |
| `FLOOR` |  | Velur hæðina sem teiknað er á, bætir við einni, eða færir eða afritar valið á hana. |
| `FLOORLAYERS` |  | Breytir hæðum í lög sem heita Hæð-Lag, fyrir skrá sem fer til einhvers án hæða. |
| `FLOORS` | `FLR` | Opnar spjaldið Hæðir: staflar hæðum í einu líkanrými. |
| `GCCOINCIDENT` |  | Skorða: tveir punktar mætast, eða punktur helst á hlut |
| `GCCOLLINEAR` |  | Skorða: tvær línur haldast á einni línu |
| `GCCONCENTRIC` |  | Skorða: tveir hringir eða bogar deila miðju |
| `GCEQUAL` |  | Skorða: tvær línur haldast jafnlangar, eða tveir hringir/bogar jafnir að radíus |
| `GCFIX` |  | Skorða: punktur eða heill hlutur helst þar sem hann er |
| `GCHORIZONTAL` |  | Skorða: lína (eða tveir punktar) helst lárétt |
| `GCPARALLEL` |  | Skorða: tvær línur haldast samsíða |
| `GCPERPENDICULAR` |  | Skorða: tvær línur haldast í rétt horn |
| `GCSYMMETRIC` |  | Skorða: tveir punktar, línur eða hringir speglast hver í öðrum yfir línu |
| `GCTANGENT` |  | Skorða: lína og hringur eða bogi (eða tveir af þeim) haldast snertlar |
| `GCVERTICAL` |  | Skorða: lína (eða tveir punktar) helst lóðrétt |
| `GDSIN` | `GDS` | Sýnir IC-útlit (GDSII-straumskrá): hvert lag og gagnagerð sem teikningalag, flatt, í notendaeiningum; aðeins til skoðunar og mælinga (tilraun á rannsóknarstofu) |
| `GEOMCONSTRAINT` | `GCON` | Rúmfræðilegar skorður: lárétt, lóðrétt, samsíða, snertill, samfallandi… |
| `GLBOUT` |  | Flytur út þrívíddarlíkanið sem GLB (glTF) |
| `GRADIENT` | `GD` | Fyllir svæði með stigulli úr einum eða tveimur litum |
| `GRIDMOVE` | `GM` | Færir netlínu og tekur með sér það sem hangir á henni: veggir teygjast, súlur, kúlur og merki færast, málsetningar fylgja. |
| `GROUP` | `G` | GROUP (G): gefur völdum hlutum sameiginlegt heiti. Smellur á einn þeirra velur þá síðan alla. Enter við heitið býr til ónefndan hóp. |
| `GROUPEDIT` |  | GROUPEDIT: breytir hópi. Veldu einn hluta hans eða gefðu upp Heiti, og bættu síðan við eða fjarlægðu hluti, ENDURNEFNA hann, breyttu lýsingu hans, eða segðu hvort smellur velji hann í heild. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Fyllir svæði með heilli fyllingu eða mynstri: smelltu inni í því, eða veldu lokaða hluti (H) |
| `HATCHEDIT` | `HE` | Breytir skyggingu: mynstri, mælikvarða, horni, upphafspunkti og tengingu hennar við mörk. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Býr til mörk fjöllínanna aftur úr skyggingu, tengd henni eða ekki |
| `HATCHTOBACK` |  | Sendir allar skyggingar aftast á bak við allt annað. |
| `HELP` | `?` | Þessi listi |
| `HIDEOBJECTS` |  | Felur valda hluti þar til UNISOLATEOBJECTS. Ekki vistað með teikningunni. |
| `HISTORY` | `HIST` | HISTORY (HIST): útgáfur þessarar teikningar — afrit geymd á þessari tölvu þegar Studio vistar hana, og útgáfur skýsins — til að opna, endurheimta og bera saman við það sem breyttist, sýnt í lit. |
| `ID` |  | Hnit punkts |
| `IMAGE` | `IM` | Gefur CadCraft myndskrárnar sem teikning notar (DWG geymir aðeins hvar þær voru). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Setur inn mynd (PNG eða JPEG) úr skrá. |
| `IMAGECLIP` | `ICL` | Klippir mynd að rétthyrningi eða marghyrningi, eða fjarlægir klippinguna. |
| `IMPORT` | `IMP` | Flytur inn skrá af gerð sem viðbót les, inn í þessa teikningu |
| `INSERT` | `I`, `DDINSERT` | Setur blokk (S mælikvarði, R snúa); F úr DWG/DXF-skrá, L úr safninu |
| `INTERSECT` | `IN` | Heldur aðeins því sem föst efni eiga sameiginlegt (3D), eða svæðinu sem tvö 2D-svæði deila |
| `ISODRAFT` |  | ISODRAFT: ísómetrísk teikning kveikt eða slökkt, eða beint á Vinstri, Efri eða Hægri plan. Á meðan hún er kveikt fylgja Ortho og skautrakning tveimur ásum plansins, netið er teiknað ísómetrískt, og ELLIPSE hefur Ísóhring. |
| `ISOLATEOBJECTS` | `ISOLATE` | Sýnir aðeins valda hluti; allt annað í þessu rými er falið þar til UNISOLATEOBJECTS. Ekki vistað með teikningunni. |
| `ISOPLANE` |  | ISOPLANE: velur ísómetríska planið til að teikna á: Vinstri, Efri eða Hægri. Enter fer á það næsta, eins og F5 gerir á meðan ísómetrísk teikning er kveikt. |
| `JOIN` | `J` | Tengir línur, boga og fjöllínur sem mætast enda við enda í eina fjöllínu; línur á einni línu í eina línu (J) |
| `LASER` | `LASERCUT` | Opnar spjaldið Leysir: sendir lög til leysiskera eða leturgröfunartækis (GRBL G-code) |
| `LASSOMODE` |  | Ýtt og dregið teiknar lasso (1) eða rétthyrning (0) |
| `LAYDEL` |  | Eyðir lagi og öllum hlutum á því (í líkaninu, á blöðum og í blokkum) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Opnar lagastjórann: hvert lag í einni töflu |
| `LAYERPANEL` |  | Sýnir spjald laganna |
| `LAYFRZ` |  | Frystir lagið á hverjum hlut sem þú velur |
| `LAYGROUP` | `LG` | Hópar lög í möppur á spjaldi laganna. |
| `LAYISO` |  | Einangrar lögin á völdum hlutum (öll önnur lög slökkt) |
| `LAYLOCKFADE` |  | Stillir hversu mikið hlutir á læstum lögum dofna, og hvort smellur geti valið þá. |
| `LAYMCUR` |  | Gerir lagið á hlutnum sem þú velur að núverandi lagi |
| `LAYMRG` |  | Sameinar lög: hlutir þeirra færast á markmiðslagið og sameinuðu lögin hverfa |
| `LAYOFF` |  | Slekkur á laginu á hverjum hlut sem þú velur |
| `LAYON` |  | Kveikir á öllum lögum |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Nýtt blað með titilreit og sýnigluggu |
| `LAYTHW` |  | Afþýðir öll lög |
| `LAYUNISO` |  | Kveikir aftur á lögum sem LAYISO slökkti á |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Breytir texta sem skrifaður er með gömlum víetnömskum leturgerðum (TCVN3 / ABC-leturgerðum eins og .VnTime, og VNI-leturgerðum eins og VNI-Times) í Unicode. Slíkur texti birtist þegar rétt; þessi skipun skrifar hann endanlega, með talningu og einu skrefi í afturköllun. |
| `LENGTHEN` | `LEN` | Lengir eða styttir línur, boga og fjöllínur: um ákveðna stærð, prósentu, í heildarlengd, eða með drætti (LEN) |
| `LIBRARY` | `LIB` | Safnspjaldið: setur inn atriði, athugar uppfærslur, þakkir |
| `LIMITS` |  | Stillir mörk teikningarinnar: ON, OFF, eða neðra vinstra og efra hægra horn. Þegar mörkin eru ON eru punktar utan þeirra hafnaðir |
| `LINE` | `L` | Beinir kaflar, hver sem sinn hlutur |
| `LINETYPE` | `LT`, `CELTYPE` | Línutegundin sem nýir hlutir fá (eftir lagi, eftir blokk, eða nefnd) |
| `LINKVIEWS` | `SYNCVIEWS` | Hliðrar og aðdrátt á öllum rúðum saman (klofinn skjár), til að bera saman tvær teikningar eða útgáfur |
| `LISPEDIT` | `VLIDE` | LISPEDIT (eða VLIDE) opnar LISP-ritilinn: glugga til að skrifa, hlaða og prófa forrit. Hleðsla í teikninguna les hvern lið, eins og APPLOAD gerir þegar skráin er hlaðin, og býr til skipanir þess. Keyra valið metur valda liði, eða liðinn sem bendillinn er í. Í úttakinu sést það sem forritið prentaði og hver villa með sinni línu. Svigi sem passar er merktur meðan þú skrifar og Enter inndregur nýju línuna. Ný, Opna og Vista virka á .lsp-skrá. Listarnir við hliðina á textanum sýna föllin sem forritið skilgreinir, þau sem það kallar á og LISP þetta hefur ekki enn, og öll föll sem það hefur. Glugginn lokar ekki teikningunni, svo forrit getur beðið um punkta; Stöðva eða Esc lýkur forriti sem er í gangi. |
| `LIST` | `LI`, `LS` | Lýsir hlutum í sögunni |
| `LTSCALE` | `LTS` | Línutegundarmælikvarði teikningarinnar (sérhver strik og bil margfaldast með honum) |
| `LWDISPLAY` | `LWT` | Sýnir eða felur línuþykktir á skjánum (LWT-hnappurinn í stöðustikunni) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Línuþykktin sem nýir hlutir fá (eftir lagi, eftir blokk, sjálfgefið, eða mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | kortalög undir líkanrýminu: hnitakerfi teikningarinnar, flísar, WMS, WMTS, ArcGIS, myndir |
| `MASSPROP` |  | MASSPROP: eiginleikar sniðs svæða og lokaðra hluta: flatarmál, ummál, massamiðja, tregðuvægi og afurð tregðu, snúningsradíusar og meginásar. Nákvæmt fyrir línur og boga. Getur skrifað skýrsluna í textaskrá. |
| `MATCHPROP` | `MA`, `PAINTER` | Samræma eiginleika: afritar lag, lit og fleira úr einum hlut yfir á aðra (MA) |
| `MEASURE` | `ME` | MEASURE (ME): merki á hverri gefinni lengd eftir línu, boga, hring, fjöllínu, splæsu eða sporbaug, frá endanum sem er næst valinu. Punktar, eða með Blokk blokk við hvert merki. |
| `MEASUREGEOM` | `MEA` | Mælir fjarlægð, radíus, horn eða flatarmál (MEA) |
| `MINSERT` |  | MINSERT: setur blokk í röðum og dálkum í einu. Hver og ein er sín eigin tilvísun, svo hægt er að færa eða eyða hverri þeirra. |
| `MIRROR` | `MI` | Speglar hluti yfir línu |
| `MLEADER` | `MLD`, `MLEAD` | Fjölvísir: ör, vísilína og athugasemd, sem einn hlutur (MLD) |
| `MLEADERALIGN` | `MLA` | Raðar fjölvísum eftir einum þeirra í ákveðna stefnu, með jöfnu bili, eða dreift milli tveggja punkta (MLA) |
| `MLEADERCOLLECT` | `MLC` | Safnar nokkrum fjölvísum í einn: blokkir þeirra í röð eða dálk, eða athugasemdir þeirra hver undir annarri (MLC) |
| `MLEADEREDIT` | `MLE` | Bætir vísilínum við fjölvísi eða fjarlægir þær; skiptir innihaldi hans milli texta og blokkar (MLE) |
| `MLINE` |  | Teiknar samsíða línur saman, tengdar á hornunum. |
| `MOVE` | `M` | Færir hluti eftir grunnpunkti og öðrum punkti |
| `MSPACE` | `MS` | Vinnur á líkaninu í gegnum sýnigluggu opins blaðs (eða tvísmellir inni í sýnigluggunni). |
| `MTEXT` | `MT`, `T` | Málsgreinatexti: dragðu breiddina, og skrifaðu síðan á staðnum; Enter byrjar nýja málsgrein (T) |
| `MVIEW` | `MV` | Sýnigluggi inn í líkanið, á útliti |
| `NAMEDVIEW` | `NV`, `VIEWS` | Nefndar sýnir: vistar sýnina á skjánum (eða glugga) undir nafni og ferð aftur til hennar (NV) |
| `NCOPY` |  | Afritar hluti út úr blokkartilvísun eða tengdri teikningu inn í teikninguna, án þess að sundurliða hana. |
| `NEARBY` |  | Segir hvað liggur nálægt bendlinum, það næsta fyrst, með fjarlægð og hlið. |
| `NEW` |  | Byrjar nýja teikningu |
| `OBJECTSCALE` | `OBJSCALE` | Skýringarmælikvarðar skýringartexta og málsetninga: bætir við mælikvarða, eyðir einum, bætir við núverandi mælikvarða, eða listar þá (hver sýnigluggi sýnir þá í stærð fyrir sinn mælikvarða) |
| `OBJOUT` |  | Flytur út þrívíddarlíkanið sem OBJ |
| `OFFSET` | `O` | Samsíða afrit í ákveðinni fjarlægð |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: hvernig OFFSET lokar bilum við ytri horn fjöllínu. 0 framlengir hlutana, 1 bætir við boga, 2 bætir við beinum skurði. Geymt fyrir þessa setu. |
| `OLELIST` | `OLES` | Listar OLE-hluti sem teikning ber og setur afrit af mynd eins þeirra þar sem þú velur |
| `OPEN` |  | Opnar DWG eða DXF úr þessari tölvu |
| `OPENIN3D` |  | Opnar þessa teikningu í þrívíddarlíkanaforritinu, í nýjum flipa (ekkert er hlaðið upp) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Opnar valmynd hlutasmellingar: veldu hvaða smellingar eru kveiktar. Einnig hægrismellur á Smella í stöðustikunni. |
| `OVERKILL` |  | Eyðir tvíteknum hlutum og sameinar skarandi eða enda-við-enda línur og boga, innan þols. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Spjaldið Breytur: notendabreytur og víddarskorður í einni töflu |
| `PARTSLIST` | `PLIST` | Hlutalistatafla yfir sérhvern staðlaðan hlut og stálprófíl sem settur er úr safninu |
| `PASTEAREA` | `PAREA` | Límir svæði sem afritað var í MarkupCraft (Afrita svæði) í réttri stærð, sem mynd. |
| `PASTEBLOCK` |  | PASTEBLOCK: límir það sem þú afritaðir sem eina blokk. Blokkin fær sitt eigið heiti; RENAME gefur henni þitt. |
| `PASTECLIP` |  | Límir klippiborðið: það fylgir bendlinum, smelltu þar sem það á að fara (Ctrl+V) |
| `PASTEORIG` |  | Límir klippiborðið á þeim hnitum sem það var afritað frá (Ctrl+Shift+V) |
| `PDF` |  | Gefur CadCraft PDF-skrárnar sem undirlög teikningarinnar nota |
| `PDFADJUST` |  | Dofnar, andstæða, einlitt eða slekkur á PDF-undirlagi |
| `PDFATTACH` | `PDFATT` | Festir PDF-síðu sem undirlag (PDFATTACH) |
| `PDFCLIP` |  | Klippir PDF-undirlag að rétthyrningi eða marghyrningi |
| `PDFIMPORT` | `PDFIM` | Breytir línum, fyllingum og texta PDF-síðu í hluti teikningar (PDFIMPORT) |
| `PDFLAYERS` |  | Kveikir eða slekkur á lögum PDF-undirlags |
| `PEDIT` | `PE` | Breytir fjöllínu: lokar, opnar, tengir, breidd, passar feril, splæsuferil, afbeygir, línutegundarmyndun, snýr við; línur, bogar og splæsur má gera að fjöllínum |
| `PHOTOSKETCH` | `PSK` | Breytir ljósmynd af handteikningu á pappír í línur og boga í réttum mælikvarða, réttir úr sjónarhorninu og gefur hverjum pennalit sitt eigið lag. |
| `PICKSTYLE` |  | PICKSTYLE: hvort val á einum hlut úr hópi velur allan hópinn (1, upphafsstillingin) eða aðeins hlutinn (0). Geymt fyrir þessa setu. |
| `PLAN` |  | Snýr sýninni þannig að X-ás UCS (Núverandi ucs, vistað Ucs, eða Heimurinn) er láréttur á skjánum. Ekkert í teikningunni hreyfist. |
| `PLINE` | `PL` | Fjöllína úr línu- og bogakaflum |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Prentar í PDF: útlit, eða líkanið í mælikvarða |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Prentstílatöflur: stillir hvað hver litur prentast sem (litur, svartur, grár, blek, línuþykkt); geymt með teikningunni (STYLESMANAGER) |
| `POINT` | `PO` | Punkthlutir |
| `POINTCLOUD` | `PC` | tengdi punktaskýið: sneiðar, hæð, þykkt, litur, stærð, sýnilegt, aðdráttur, aftengja |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | tengir punktaský (LAS, LAZ, XYZ, PTS) undir teikningunni |
| `POLARANG` |  | Skref skautrakningar í gráðum (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Reglulegur marghyrningur |
| `PRESSPULL` |  | Ýtir eða togar flöt fasts hlutar (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Opnar spjaldið Eiginleikar (líka Ctrl+1, eða tvísmelltu á hlut) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Brýtur spjaldið Eiginleikar saman að jaðri gluggans |
| `PSPACE` | `PS` | Hættir í sýnigluggunni sem þú vinnur í og ferð aftur á blaðið (eða tvísmelltu utan hans). |
| `PUBLISH` | `-PUBLISH` | Prentar nokkur eða öll blöð í eina PDF-skrá (síða og bókamerki fyrir hvert blað) |
| `PURGE` | `PU` | Fjarlægir blokkaskilgreiningar sem ekkert notar |
| `QDIM` |  | Hraðmálsetning: málsetur nokkra hluti í einu (samfelld, grunnlína, stigskipt, hnit, radíus eða þvermál) |
| `QPMODE` | `QP` | Hraðeiginleikar við bendilinn kveiktir eða slökktir |
| `QSELECT` | `QS` | Hraðval: hver hlutur af tegund þar sem lag, litur, stærð eða heiti passar (QS) |
| `RASTERSNAP` |  | Kveikir eða slekkur á smellingu við línur skannaðra blaða. |
| `RAY` |  | Geisli: smíðalína frá punkti, endalaus í aðra átt. |
| `RECOVER` |  | Opnar skemmda DXF- eða DWG-skrá: sleppir því sem ekki er hægt að lesa í stað þess að hafna skránni, segir hvað var sleppt, athugar síðan og lagfærir teikninguna eins og AUDIT gerir. |
| `RECTANG` | `REC`, `RECTANGLE` | Lokuð fjöllína úr tveimur hornum |
| `REDLINE` | `RDL` | Rauðlína í útgáfu: les MarkupCraft rauðlínupakka, samþykkir eða hafnar hverri breytingu, skýjar samþykktu breytingarnar með útgáfuskrá, og vistar svarskrána (RDL) |
| `REDO` |  | Endurgerir það sem var afturkallað |
| `REFCLOSE` |  | Lýkur breytingu á blokk á staðnum: vistar hana, eða hendir breytingunum |
| `REFEDIT` |  | Breytir blokk á staðnum, þar sem tilvísun hennar er, með restinni af teikningunni dofnuðu; REFCLOSE vistar hana |
| `REGEN` | `RE` | Endurbyggir það sem er teiknað í þessum flipa úr teikningunni |
| `REGENALL` | `REA` | Endurbyggir það sem er teiknað í öllum flipum, rúðum og opnum teikningum |
| `REGION` | `REG` | REGION (REG): býr til flöt svæði (svæði) úr lokuðum hlutum, eða úr línum, bogum og fjöllínum sem loka lykkju enda við enda. UNION, SUBTRACT og INTERSECT sameina síðan svæði, og MASSPROP gefur eiginleika þeirra. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Skráir nokkrar skannanir: setur þær í einn ramma eftir völdum punktaparið eða merkjum, fínstillir með ICP, flytur út eina LAS- eða E57-skrá |
| `REINIT` |  | Hleður aftur styttingaskránni þinni |
| `RENAME` | `-RENAME`, `REN` | Endurnefnir lag eða blokk (sérhver hlutur eða tilvísun fylgir) |
| `REVCLOUD` | `RC` | Útgáfuský: rúnar rétthyrning, marghyrning, frjálsa slóð eða hlut (RC) |
| `REVOLVE` | `REV` | Snýr lokuðum 2D-hlutum um ás í föst efni (3D) |
| `ROTATE` | `RO` | Snýr hlutum um grunnpunkt |
| `SAMPLES` | `SAMPLE` | Opnar eina af sýnateikningum CadCraft (arkitektúrsetti, skráningu eftir framkvæmd) til að læra af |
| `SAVE` | `QSAVE` | Hleður teikningunni niður á sínu sniði (DWG eða DXF) |
| `SAVEAS` |  | Hleður teikningunni niður sem DWG eða DXF: þú velur hvort |
| `SAYSEL` |  | Segir hvað er valið, ein setning fyrir hvern hlut. |
| `SCALE` | `SC` | Skalar hluti um grunnpunkt |
| `SCALELISTEDIT` | `SCALELIST` | Bætir við, breytir og eyðir eigin mælikvörðum teikningarinnar; þeir birtast í listum sýnigluggans og prentmælikvarða og eru vistaðir í skránni (SCALELIST) |
| `SCANALIGN` | `SCL` | Jafnar skannað blað við tvo punkta: færir, snýr og, ef þú vilt, skalar það. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Setur inn skannaða teikningu: PNG, JPEG eða TIFF (ein síða eða allar síður fjölsíðuskrár) eða PDF-síðu sem er mynd. |
| `SCANCLEAN` | `SCC` | Gerir skannað blað svart-hvítt og fjarlægir bletti. |
| `SCANCROP` | `SCR` | Klippir skannað blað að glugga. |
| `SCANDESKEW` | `SCD` | Finnur hornið sem langar línur skannaðs blaðs liggja í og snýr blaðinu rétt þegar þú samþykkir hornið. |
| `SCANERASE` | `SCE` | Eyðir svæði á skönnuðu blaði: rétthyrningi, marghyrningi eða lasso. |
| `SCANINFO` | `SCI` | Sýnir upprunalegu skrá skannaðs blaðs og skrefin sem tekin hafa verið síðan. |
| `SCANSCALE` | `SCS` | Skalar skannað blað: velur tvo punkta á því og slærð inn raunverulega fjarlægð milli þeirra. |
| `SCANTRACE` | `SCT` | Rekur skannað blað í línur og boga á nýju lagi, innan þols sem þú stillir. Texti og skygging haldast sem rastermynd. |
| `SELECT` |  | Velur hluti núna (fyrir P, Fyrri, í næstu skipun) |
| `SELECTALL` | `AI_SELALL` | Velur sérhvern hlut sem þú getur breytt á þessum flipa (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Velur alla hluti eins og þá sem þú velur: sömu tegund, lag og lit (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Sýnir spjald blaðasafns: blöð úr mörgum teikningum, númeruð, prentuð sem ein PDF-skrá. |
| `SHORTCUTS` | `KEYS` | Gefur hvaða skipun sem er þinn eigin lykil (Ctrl eða Alt með bókstaf, eða laus F-takki), geymdan í þessum vafra eða skjáborðsforriti. |
| `SHXFONTS` | `SHX` | Gefur CadCraft SHX-leturgerðir úr möppu eða skrám, svo textastílar sem nefna þær teikni með þeim (listi, fjarlægja, öfugt) |
| `SKETCHFIX` | `SKF` | Teiknar frjálsar strokur; hver verður að hreinni línu, hring, boga, rétthyrningi eða fjöllínu, ferkantaðri og tengdri hinum. |
| `SKETCHLIVE` | `SKL` | Teiknar með penna: hvert strok verður nákvæm lína, hringur, bogi eða rétthyrningur þegar þú lyftir pennanum, smellt á teikninguna, með stærð sem þú getur skrifað yfir. |
| `SPLINE` | `SPL` | Teiknar splæsu í gegnum punkta (eða með stjórnmarghyrningi), eða breytir fjöllínu í hana |
| `SPLINEDIT` | `SPE` | Breytir splæsu: passapunktar, stjórnpunktar og vægi, opnar eða lokar henni, snýr henni við, eða breytir henni í fjöllínu |
| `SPLIT` |  | Skiptir teikningarsvæðinu í rúður (sem VPORTS á líkaninu; líka frá blaði) |
| `STEELMEMBER` | `SMEMBER` | Stálbiti í þrívídd úr staðlaðum prófíl: tveir punktar (bjálki) eða grunnpunktur og hæð (Súla) |
| `STLOUT` |  | Flytur út þrívíddarlíkanið sem STL (millimetrar) |
| `STRETCH` | `S` | Teygja: dragðu krossglugga yfir endana til að færa; það sem er inni hreyfist, hitt stendur kyrrt (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Textastílar: leturgerð, hæð, breidd og halli sem nýr texti fær (gluggann; -STYLE í skipanalínunni) |
| `SUBTRACT` | `SU` | Tekur föst efni frá öðrum (3D), eða 2D-svæði frá svæðum |
| `SWBOUT` | `SWMACRO` | Hleður niður þjóðvi fyrir SolidWorks (.swb) sem endurbyggir líkanið sem eina skorðaða skissu |
| `SWEEP` |  | Dregur lokaða 2D-hluti eftir slóð (línu, fjöllínu, boga, hring) í föst efni (3D) |
| `TABLE` | `TB` | Býr til töflu: raðir og dálka, eða úr reitum töflureiknis á klippiborðinu eða CSV-skrá |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Breytir töflu: skrifar í reit, setur inn og eyðir röðum og dálkum, stærðum, sameinuðum reitum, jöfnun |
| `TABLEEXPORT` |  | Vistar það sem tafla sýnir sem CSV-skrá |
| `TABLEPASTE` | `PASTETABLE` | Býr til töflu úr reitum töflureiknis á klippiborðinu |
| `TABLESTYLE` | `TS` | Töflustílar: textahæðir, jöfnun, spássía og rammar fyrir titil-, haus- og gagnaraðir |
| `TAGS` |  | Merki á blokkartilvísunum: skilgreinir merki (tegund, leyfð gildi, blokkir sem það nær yfir), setur það á valdar tilvísanir, og listar þær sem yfirlit sem þú getur vistað sem CSV |
| `TEXT` | `DT`, `DTEXT` | Einlínu texti; Enter byrjar næstu línu |
| `TEXTEDIT` | `ED`, `DDEDIT` | Breytir texta á staðnum: veldu texta (eða tvísmelltu á hann) (ED) |
| `TEXTMASK` | `TMASK` | Setur bakgrunnsgrímu á bak við texta (bakgrunn teikningarinnar eða lit), eða fjarlægir hana. |
| `TEXTTOFRONT` |  | Færir allan texta, málsetningar og vísilínur fremst, fyrir framan allt annað. |
| `TOOLBAR` |  | Velur hvað tækjastikuhnapparnir sýna: tákn og texta, aðeins tákn, eða aðeins texta (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Setur tækjastikuna efst, neðst, vinstra megin eða hægra megin í glugganum |
| `TOOLBARROWS` |  | Velur hve margar raðir tækjastikan notar: vefja til að passa, 2, eða 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Gerir stikurnar fyrir ofan teikninguna venjulegar eða þjappaðar |
| `TOUCHCROSSHAIR` | `TCX` | Krosshár með forskoti fyrir teikningu með fingri: einn fingur hreyfir krosshár sem situr fyrir ofan og til hliðar, svo fingurinn hylji ekki valinn punkt. Þegar fingurinn er lyft er ekkert valið; hnappurinn Smella eða snerting með öðrum fingri velur við krosshárið, og ef Smella er haldið inni á meðan hreyft er dregst. Löng ýting eða hnappurinn Enter er Enter. Tveir fingur hliðra og aðdráttur. Valkostir: ON, OFF, Sjálfvirkt (kveikt aðeins þar sem fingur er eini bendillinn), Fjarlægð, Hlið. |
| `TOUR` | `TUTORIAL` | Tekur sex þrepa fyrstu teikningarferðina aftur |
| `TRIM` | `TR` | Styttir hluti þangað sem aðrir skera þá: smelltu á bút, dragðu í gegnum nokkra, eða Shift+smelltu til að lengja |
| `TRIMEXTENDMODE` |  | Hvernig TRIM og EXTEND hefjast: 1 Fljótt (sérhver hlutur er skurðbrún eða mörk), 0 Venjulegt (veldu brúnirnar fyrst) |
| `TTR` |  | Hringur snertill við tvo hluti, með radíus sem þú gefur (sami og CIRCLE T). |
| `TURNLEFT` |  | Snýr sýninni 90° til vinstri (rangsælis): UCS Z -90, og sýnin fylgir. Ekkert í teikningunni hreyfist. |
| `TURNRIGHT` |  | Snýr sýninni 90° til hægri (réttsælis): UCS Z 90, og sýnin fylgir. Ekkert í teikningunni hreyfist. |
| `TURNWORLD` |  | Aftur í heiminn: UCS Heimur, og sýnin er aftur lárétt. |
| `TXT2MTXT` | `T2M` | Tengir einlínutexta í einn málsgreinatexta, ofan frá og niður. |
| `UCS` |  | Þitt eigið hnitakerfi: upphafspunktur og X-ás (upphaf, Z-horn, 3punktar, Hlutur, Fyrri, Heimur, Nefnt); punktar sem þú slærð inn, ortho, skautrakning, netið og nýr texti fylgja því; sýnin snýst svo X-ás þess sé lárétt. Ekkert í teikningunni hreyfist. |
| `UNDO` | `U` | Afturkallar síðustu skipun |
| `UNGROUP` |  | UNGROUP: tekur hópa í sundur. Veldu hluti úr hópunum, eða gefðu upp Heiti. Hlutirnir haldast í teikningunni. |
| `UNION` | `UNI` | Sameinar föst efni í eitt (3D), eða 2D-svæði í eitt svæði |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Sýnir aftur alla hluti sem ISOLATEOBJECTS eða HIDEOBJECTS faldi. |
| `UNITS` | `UN`, `DDUNITS` | Hvernig lengdir eru sýndar og slegnar inn: tugabrot, fet og tommur, brot (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Reiknar reiti út aftur, og velur hvenær þeir uppfærast sjálfir |
| `USDOUT` |  | Flytur út þrívíddarlíkanið sem USD (.usda texti, .usdc tvíundir eða .usdz pakki) |
| `VIEW` | `-VIEW`, `V` | Staðlaðar þrívíddarsýnir, sjónhverf eða samsíða (3D) |
| `VIEWBASE` | `FLATSHOT` | Setur tvívíða sýn af þrívíddarföstum efnum (framan, ofan, hlið eða ísómetrískt, faldar línur strikaðar) á blað eða í líkanið |
| `VIEWLABEL` | `VL` | Sýnititill á blaði sem sýnir heiti sýnar sýnigluggans og breytist með honum. |
| `VOICE` |  | Kveikir eða slekkur á töluðum skipunum. Þær eru þekktar á þessari tölvu. |
| `VPCLIP` |  | Klippir sýnigluggann á blaði að lokuðum hlut eða teiknuðum marghyrningi; Delete gerir hann aftur að rétthyrningi |
| `VPLAYER` |  | Frystir eða afþýðir lög í sumum sýnigluggum eingöngu (Frysta, Afþýða, Endurstilla), og velur hvaða lög nýir sýnigluggar byrja frystir (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Skiptir teikningarsvæðinu í rúður, hver með sína eigin sýn (á blaði: sýniglugga, eins og MVIEW) |
| `VPVIEW` |  | Stillir hvað sýnigluggi sýnir: velur glugga á líkaninu |
| `VSCURRENT` | `VS`, `SHADEMODE` | Sjónrænn stíll þrívíddarsýnarinnar: skyggt, brúnir, falin lína, vírrammi, röntgen |
| `WALL` | `WA` | Teiknar 2D-veggi eins og fjöllínu. Þeir tengjast og bera hurðir og glugga. |
| `WALLARC` | `WARC` | Teiknar boga úr veggjum. Veggir á grunnmynd eru beinir, svo bogi er teiknaður sem stuttir beinir veggir (15 gráður hver) sem tengjast. |
| `WALLDELSEG` |  | Eyðir kafla úr vegg milli tveggja punkta. Það sem eftir er verður áfram einn eða tveir veggir. |
| `WALLDIM` |  | Slærð inn nýtt gildi fyrir málsetningu: veggurinn við fjarlægari endann færist hornrétt á sjálfan sig, veggurinn við fyrsta endann heldur sér, og veggirnir tengdir honum fylgja. |
| `WALLDISJOIN` |  | Velur vegg nálægt öðrum enda til að leyfa ekki tengingar þar: endinn er teiknaður ferkantaður og ekkert fylgir honum. Veldu hann aftur til að leyfa þær. |
| `WALLGRID` |  | Læsir vegg við netlínu: eftir henni, eða annar endinn á henni. Færðu línuna með GRIDMOVE og veggurinn fylgir. |
| `WALLHOLD` |  | Jafna og læsa: vegg heldur sínum stað gagnvart öðrum vegg (á línu hans, eða í þeirri fjarlægð sem hann hefur). Ef annar færist fylgir hinn. |
| `WALLHOLDDIM` |  | Læsir fjarlægðinni milli tveggja samsíða veggja. Ef annar færist fylgir hinn til að halda henni. |
| `WALLHOLDS` |  | Listar læsingar á veggjum. |
| `WALLJOINS` |  | Gefur hverjum vegg eldri teikningar auðkenni sitt og geymir tengingarnar milli þeirra. Þetta gerist líka við fyrstu breytingu sem þú gerir. |
| `WALLJOINSTYLE` |  | Smelltu á horn þar sem tveir veggir mætast enda við enda til að breyta því hvernig það er teiknað: skálína, stúfur, ferkantað. T skiptir um hvaða vegg er í gegn. |
| `WALLOFFSET` | `WO` | Færir vegg hornrétt á sjálfan sig um fjarlægð (veggirnir tengdir honum fylgja), eða gerir afrit í þeirri fjarlægð. |
| `WALLPICK` |  | Býr til veggi á línu eða fjöllínu í teikningunni, með línunum tengdum henni ef þú segir Já. |
| `WALLPOLY` | `WP` | Teiknar veggi umhverfis reglulegan marghyrning með 3 til 64 hliðum, eins og POLYGON. |
| `WALLRECT` | `WR` | Teiknar fjóra tengda veggi úr tveimur gagnstæðum hornum, eins og RECTANG. |
| `WALLREJOIN` |  | Gerir tvo hluta veggs aftur að einum vegg. Sá fyrsti heldur sínum stað í teikningunni. |
| `WALLROT` |  | Teiknar fjóra tengda veggi sem rétthyrning snúinn í hvaða horn sem er: fyrsta hliðin, og síðan hve langt út. |
| `WALLSPLIT` | `WS` | Skiptir vegg í tvennt í punkti eða þar sem annar veggur sker hann. Hlutarnir haldast tengdir nema þú biðjir um bil eða frjálsa enda. Hurðir og gluggar fara með sínum hluta. |
| `WALLSPLITGAP` |  | Skiptir vegg og skilur eftir bil: sláðu inn bilið, veldu vegginn, og síðan punktinn. Hlutarnir halda frjálsum endum og er hægt að tengja aftur. |
| `WALLSTRETCH` |  | Teygir með glugga: veggendar innan hans færast, veggir alveg innan hans færast heilir, og veggir sem stinga í hliðar þeirra renna með þeim. |
| `WALLTAN` |  | Heldur vegg áfram með boga sem fer frá honum eftir veggnum (teiknaður sem stuttir beinir veggir). |
| `WALLTRACE` |  | Býr til veggi umhverfis minnsta lokaða svæðið af línum og veggjum umhverfis punktinn sem þú smellir á. |
| `WALLUNHOLD` |  | Tekur læsingar af vegg (og læsingar annarra veggja við hann). |
| `WBLOCK` | `W`, `-WBLOCK` | Skrifar blokk, nokkra hluti eða alla teikninguna í nýja DWG- eða DXF-skrá (W) |
| `WEDGE` | `WE` | Kíll: tvö horn og hæð; hann hallar frá fyrsta horninu (3D) |
| `WHEREAMI` | `WHERE` | Segir hvar bendillinn er. |
| `WHOHAS` |  | Segir hver hefur teikningu opna. CadCraft Studio geymir litla læsiskrá við hverja opna teikningu (Plan.dwg.cclock: hver, síðan hvenær, hvaða útgáfa) og fjarlægir hana við lokun. Valkostir: Núverandi (opna teikningin), Skrá (veldu eina), Mappa (hver teikning í möppu sem er opin einhvers staðar; þetta gerir Studio einnig kleift að geyma læsiskrár í þeirri möppu), Slóð (sláðu inn eina), Heiti (nafnið sem aðrir sjá). Læsing sem ekki hefur verið endurnýjuð í fimm mínútur er sögð úrelt. Ekki tiltækt í vafra. |
| `WINDOW` | `WN` | Setur glugga í vegg. |
| `XATTACH` | `XA` | Tengir aðra DWG- eða DXF-skrá inn í þessa teikningu, sýnd sem lesin eingöngu (XREF listar þær og hleður þeim aftur) |
| `XCLIP` | `XC` | Klippir blokkartilvísanir og tengdar teikningar að rétthyrningi eða marghyrningi, eða fjarlægir klippinguna. |
| `XLINE` | `XL` | Smíðalína, endalaus í báðar áttir: í gegnum tvo punkta, lárétt, lóðrétt, í horni, deilir horni, eða hliðruð frá línu. |
| `XREF` | `XR`, `-XREF` | Tengdar teikningar (ytri tilvísanir): lista, festa, hlaða aftur, binda, aftengja |
| `ZOOM` | `Z` | Útmörk, eða gluggi |
