---
title: Skipanakort: hvað á að skrifa
summary: Sérhver skipun sem CadCraft hefur ásamt stuttnöfnum sínum, frá A til Ö, unnin úr forritinu sjálfu, og venjur úr öðrum teikniforritum sem eru ólíkar.
keywords: skipanakort, skipanir, skammnöfn, stutt heiti, kemur frá, skipanalisti, hvað á að skrifa, eyða, klippa, jafngilt, munur
from: 9426856f
---

CadCraft notar heiti skipana og stuttnöfn sem fólk þekkir úr öðrum teikniforritum: skrifaðu `L` fyrir línu, `TR` til að klippa, `E` til að eyða. Þú þarft því enga þýðingatöflu til að læra fyrir flestar skipanir: nafnið sem þú þekkir er nafnið hér. Listinn hér að neðan er allar skipanir sem CadCraft hefur, unninn úr forritinu sjálfu. {{key:Enter}} endurtekur þá síðustu og `HELP` í skipanalínunni prentar sama lista.

Þær fáu sem eru ekki eins, eða eru ekki smíðaðar:

- **Save** niðurhalar afriti í vafranum ({{cmd:SAVE}}, {{cmd:SAVEAS}}); í CadCraft Studio skrifar það skrána. Sjá [Frá öðrum teikniforritum](topic:coming-from).
- **PLOT** býr til PDF (líka PNG og SVG) með prentstílstöflu; það er enginn umsjónarmaður síðuuppsetningar.
- **DIMSTYLE** og **PEDIT** eru smíðaðar; **PEDIT** hefur ekki valkostinn Edit-vertex (gripin gera það).
- **TABLE** er ekki smíðuð; {{cmd:XREF}}, {{cmd:SPLINE}} og {{cmd:WBLOCK}} eru það.
- Eigin skipanir rútínu (AutoLISP `C:NAME`) birtast eftir að þú hleður henni með {{cmd:APPLOAD}}; þær eru ekki taldar upp hér.

## Allar skipanir (402)

| Skipun | Skammnöfn | Hvað hún gerir |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Sveiflar 3D-sýninni með vinstri hnappi |
| `ACCESS` | `AX` | Kveikir eða slekkur á teikningu án sjónar: niðurstöður lesnar upp í gegnum skjálesarann þinn, lyklaborðsbendill á teikningunni, smellihljóð og talaðar skipanir. |
| `ALIASEDIT` | | Breytir skammnöfnum skipana í einni textaskrá (kunnuglega sniðið L, *LINE) |
| `ALIGN` | `AL` | Færir og snýr hlutum svo að upphafspunktar lendi á áfangapunktum (eitt, tvö eða þrjú pör), og skalar þá ef þú vilt |
| `ALIGNPANEL` | `ALP` | Opnar spjaldið Jöfnun og dreifing |
| `ALIGNTO` | | Stillir valda hluti eftir vinstri, miðju, hægri, efri, miðju eða neðri brún, eftir valinu, fyrsta eða síðasta valda hlut, eða punkti |
| `ANNOALLVISIBLE` | `ANNOALL` | Sýnir skýringahluti í hvaða mælikvarða sem er, eða aðeins þar sem mælikvarði sýnigluggans (eða teikningarinnar) er á listanum þeirra |
| `ANNOSCALE` | `CANNOSCALE` | Stillir skýringamælikvarða teikningarinnar: skýringartexti og málsetningar eru stækkaðar eða minnkaðar svo þær prentist í sömu stærð |
| `APPLOAD` | `AP` | Hleður forritum: LISP-rútínur (.lsp) og gluggaskrár þeirra (.dcl); Ræsisvítan (AP) |
| `ARC` | `A` | Bogi: 3 punktar, Byrjun/Miðja/Endir, Byrjun/Miðja/Horn, Byrjun/Miðja/Lengd, Byrjun/Endir/Horn, Byrjun/Endir/Stefna, Byrjun/Endir/Radíus, Miðja/Byrjun/Endir, Miðja/Byrjun/Horn, Miðja/Byrjun/Lengd, Halda áfram |
| `AREA` | `AA` | Flatarmál og jaðar eftir punktum eða hlut; Bæta við og Draga frá halda uppi keyrandi samtölu (AA) |
| `ARRAY` | `AR` | Afrit í röðum og dálkum, eða umhverfis miðju (AR) |
| `ARRAYASSOCIATIVITY` | | Stillir hvort ARRAY-skipanirnar búa til fylki sem haldast breytanleg (1) eða venjuleg afrit (0) |
| `ARRAYCLOSE` | | Lýkur breytingu á upprunahlutum fylkis |
| `ARRAYEDIT` | | Breytir fylki sem var búið til með Tengdum valkosti: fjölda, bili, upprunahlutum, einum lið |
| `ARRAYPATH` | | Afrit af hlutum eftir línu, boga, fjöllínu eða annarri sveigju |
| `ARRAYPOLAR` | | Afrit umhverfis miðjupunkt |
| `ARRAYRECT` | | Afrit í röðum og dálkum |
| `ASBUILT` | `ASB` | ASBUILT les lokapunktana sem vinnuflokkur mældi (CSV / TXT, eins og EXPORTPOINTS skrifar) og ber þá saman við punkta teikningarinnar: innan eða utan vikmarka, ómældir, auka. Merkir þá á laginu AS-BUILT og sækir CSV-skýrslu. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Skilgreinir eigind (merki sem blokk biður um gildi fyrir) til að setja í blokk (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Breytir eigindagildum blokkartilvísunar í skipanalínunni, hverju á eftir öðru (Enter heldur gildi) |
| `ATTSYNC` | | Færir tilvísanir blokkar í takt við eigindaskilgreiningar hennar: nýjar bætast við með sjálfgefnum gildum, fjarlægðar falla út, staðsetningar og texti endurstillt; gildi haldast |
| `AUDIT` | | Athugar opnu teikninguna með tilliti til skemmda: tölur sem eru ekki endanlegar, hluti án stærðar, vantandi lög, blokkir, stíla og línugerðir, blokkir sem innihalda sjálfa sig, sameiginleg auðkenni, skemmdar málsetningar og skygging. Listar það sem finnst eftir tegund og spyr áður en lagað er; lagfæringin er eitt afturkallsskref. |
| `AUNITS` | `ANGUNITS` | Hvernig horn eru sýnd og slegin inn: tugagráður, gráður-mínútur-sekúndur eða áttir eins og N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Sjálfvirk útfylling teikningar á eða af, eða sýnir hvað mynstur teikningarinnar stinga upp á núna. |
| `AUTOCONSTRAIN` | | Bætir við samfallandi, láréttum og lóðréttum þvingunum þar sem rúmfræðin er þegar nálægt |
| `AUTODIM` | `ADIM` | Málsetur eftir reglum: heildarstærð, keðjur eftir hliðum, op, þvermál gata og bil á rist, án þess að endurtaka það sem þegar er málsett. |
| `AUTOSHEET` | `ASH` | Raðar blöðum sjálft: velur pappír og staðlaða mælikvarða og setur hverja sýn með yfirskrift og titilreit. |
| `BATTMAN` | | Eigindastjóri blokkar: röð, merki, spurningar, sjálfgefin gildi og stillingar eiginda blokkar, síðan uppfærðar tilvísanir hennar |
| `BCLOSE` | | Lokar blokkaritlinum: vistar blokkina eða hendir breytingunum |
| `BCONVERT` | | BCONVERT finnur rúmfræði sem endurtekur sig og breytir henni í blokkartilvísanir. Veldu hlutina sem endurtaka sig: hver annar hlutasett í opna rýminu sem er sama rúmfræði, færð og snúin um hvaða horn sem er, finnst, og með Speglun eða Skölun kveikt finnast líka spegilmyndir og afrit í annarri stærð. Gefðu nýju blokkinni heiti og grunnpunkt; valið og hvert afrit verða tilvísanir í hana, hvert með eigin snúning og skala. Eða veldu Blokk og nefndu til staðar blokk til að finna lausar afritanir af hlutum hennar. Afrit verður að hafa sama lag, lit, línugerð og línuþykkt nema Eiginleikar sé stilltur á Hunsa. Hlutir á læstum lögum eru látnir eiga sig. Eitt afturkallsskref. |
| `BEDIT` | `BE` | Blokkaritill: breytir hlutum og eigindum blokkar; BCLOSE vistar (BE) |
| `BLEND` | | BLEND: sveigja milli enda tveggja opinna sveigna, valdar nálægt endunum til að tengja. CONtinuity: Snertill fylgir báðum stefnum, Slétt fylgir líka því hvernig þær beygjast. |
| `BLOCK` | `B`, `BMAKE` | Býr til blokk úr hlutum (þeir verða að einni tilvísun) |
| `BLOCKREPLACE` | | BLOCKREPLACE: sérhver tilvísun í eina blokk verður tilvísun í aðra, á sama stað með sama mælikvarða og snúningi. Gildi eigind sem báðar blokkir hafa haldast. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE sýnir spjaldið Blokkir með bendilinn í síunni. Spjaldið sýnir mynd af hverri blokk (þær sem síðast voru settar inn fyrst), sem lista eða reit; smelltu á mynd eða dragðu hana á teikninguna til að setja blokkina inn með INSERT. Undir Söfn bætir þú við DWG- eða DXF-skrá af þinni eigin: blokkir hennar eru taldar upp með myndum og afritaðar inn í þessa teikningu þegar þú setur eina inn. Í CadCraft Studio má líka bæta við möppu með teikningum og skrár og möppur eru munaðar. |
| `BOMEDIT` | `BOMCOLUMNS` | Dálkar, hópun, röðun, heiti, samtölur og athugasemdir efnisyfirlitstöflu |
| `BOMEXPORT` | | Vistar efnisyfirlitstöflu sem .csv-skrá |
| `BOMTABLE` | `BOM` | Lifandi efnisyfirlitstafla fyrir eitt svæði, eða fyrir alla teikninguna |
| `BOMUPDATE` | | Uppfærir allar efnisyfirlitstöflur núna, líka frosnar |
| `BOMZONE` | `BZONE` | Nafngreint svæði teikningar fyrir efnisyfirlit: tvö horn, marghyrningur eða útlína lokaðs hlutar |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): veldu punkt innan lokaðs svæðis og fáðu lokaða fjöllínu um það. Bogar haldast bogar. Eyjar rekur útlínur svæða innan þess líka. |
| `BOX` | | Kassi: tvö horn og hæð (3D) |
| `BPARAMETER` | `BPARAM` | Ekki smíðað enn: að bæta breytu (eins og Sýnileiki) við blokk. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blokkabreytur: nefndar breytur með formúlum og nokkrar sýnileikabreytur í einni blokk. Virkar í blokkaritlinum (úthlutar völdum hlutum á stöðu) og á völdri tilvísun (eigin gildi hennar og stöður). |
| `BREAK` | `BR` | Brýtur línu, boga, hring eða fjöllínu á milli tveggja punkta (BR) |
| `BREAKATPOINT` | | Skiptir línu, boga eða fjöllínu í tvennt á punkti |
| `BREAKLINE` | | Teiknar línu með brotatákni; stærð hennar og framlenging út fyrir endana er munuð. |
| `BREPLACE` | | BREPLACE skiptir einni blokk út fyrir aðra. Valið: veldu blokkartilvísanir og nefndu blokkina sem nota skal í staðinn. Allt: nefndu blokk og hvað kemur í staðinn, og sérhver tilvísun í öllum rýmum og í öðrum blokkum breytist. Tilvísun heldur sínum stað, mælikvarða, snúningi og lagi, og gildum eigind sem báðar blokkir hafa; gildi sem nýja blokkin á ekki stað fyrir falla niður og eru nefnd. |
| `BSEARCH` | | BSEARCH finnur blokkir. Heiti: hluti úr heiti blokkar, eða mynstur með * og ?. Eigind: gildi (eða TAG=gildi) sem eigindir tilvísunar geyma. Rúmfræði: veldu hluti eða eina blokkartilvísun, og þær blokkir sem eru að minnsta kosti 85% eins eru taldar upp, best fyrst; stærð, snúningur og speglun telja ekki. Tilvísanir sem finnast í opna rýminu eru valdar, tilbúnar fyrir næstu skipun. |
| `BURST` | | Sprengir blokkartilvísanir og heldur því sem eigindir þeirra segja: hvert gildi verður texti á lagi eigindarinnar. |
| `BVHIDE` | `BVH` | Í blokkaritlinum: felur hluti í núverandi sýnileikastöðu. |
| `BVSHOW` | `BVSH` | Í blokkaritlinum: sýnir hluti sem núverandi sýnileikastaða felur (þeir birtast daufir svo hægt sé að smella á þá). |
| `BVSTATE` | `BVS` | Í blokkaritlinum, á blokk með sýnileikastöðum: skiptir yfir í stöðu, eða bætir við, endurnefnir eða eyðir einni. |
| `CAL` | | Reiknar út lengd eða tölu: + − * / og sviga, eins og þú slærð þá inn hvar sem er |
| `CENTERLINE` | `CL` | Miðlína milli tveggja lína: á miðri leið á milli þeirra, eða eftir helmingalínunni þegar þær mætast (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Miðmerki: kross í miðju hrings eða boga, með miðlínum rétt út fyrir hann (CM) |
| `CHAMFER` | `CHA` | Sker horn milli tveggja lína (D tvær fjarlægðir, A lengd og horn, P sérhvert horn fjöllínu) |
| `CHSPACE` | | CHSPACE: færir hluti á milli blaðs og líkansins í gegnum sýnigluggu. Þeir eru skalaðir og snúnir svo þeir líti eins út frá hinni hliðinni. Á blaði fara þeir í líkanið; meðan þú vinnur í gegnum sýnigluggu (MSPACE) koma þeir á blaðið. |
| `CIRCLE` | `C` | Miðja og radíus, þvermál, 2 eða 3 punktar |
| `CLASS` | | Setur valda hluti í flokk, eða stillir virkan flokk ef ekkert er valið (? listar þá) |
| `CLASSES` | `CLS` | Flokkaspjaldið: flokkar raða hlutum yfir lög; sýnir, felur og stílar þá, og yfirskrifar þá í hverjum sýnigluggu (CLS) |
| `COMMANDLINE` | `CMDLINE` | Festir eða fljótandi skipanalínu, gerir hana að einni línu, stillir fjölda ferilslína eða opnar ferilinn (F2) |
| `COMPARESETTINGS` | `CMPSET` | Ber saman málsetningarstíla, textastíla, lög, blöð eða einingar: tvo í þessari teikningu, eða þessa teikningu við aðra opna, og afritar gildi milli þeirra. |
| `CONSTRAINTBAR` | `CBAR` | Sýnir eða felur þvingunarstikur (Showall / Hideall, eða eftir hlut) |
| `COPY` | `CO`, `CP` | Afritar hluti, eins oft og þú smellir |
| `COPYBASE` | | Afritar hluti á klippiborðið með grunnpunkti sem þú velur |
| `COPYCLIP` | | Afritar hluti á klippiborðið (Ctrl+C); PASTECLIP setur þá inn |
| `COUNT` | `BCOUNT` | Telur blokkartilvísanir: veldu eina til að velja og telja sérhverja tilvísun blokkar hennar |
| `COUNTTABLE` | | Setur inn töflu með fjölda blokka |
| `CREDITS` | | Setur heimildir safnsins í teikninguna sem töflu. Keyrðu aftur til að uppfæra töfluna út frá hlutunum í teikningunni núna. |
| `CURSORSIZE` | | Stærð krosshársins: 100 keyrir það frá jaðri til jaðars yfir teikninguna (Stillingar › Bendill › Allur skjár) |
| `CUTCLIP` | | Klippir hluti á klippiborðið (Ctrl+X): afrit, síðan eytt |
| `CYLINDER` | `CYL` | Strokkur: miðja, radíus og hæð (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Listar blokkir, eigindir þeirra og eiginleika hluta sem töflu í teikningunni eða CSV-skrá |
| `DATALINK` | `DL` | Tafla úr CSV-skrá sem man skrána, svo hægt sé að lesa hana aftur |
| `DATALINKUPDATE` | `DLU` | Les skrá gagnatengils aftur og fyllir töflur hans aftur |
| `DCALIGNED` | `DCALI` | Víddarþvingun: rétt fjarlægð milli punkta, punkts og línu, eða tveggja lína |
| `DCANGULAR` | `DCANG` | Víddarþvingun: horn milli tveggja lína, eða horn boga |
| `DCCONVERT` | | Breytir málsetningum sem teiknaðar eru á þvingunarhæfri rúmfræði í víddarþvinganir |
| `DCDIAMETER` | `DCDIA` | Víddarþvingun: þvermál hrings eða boga |
| `DCDISPLAY` | | Sýnir eða felur víddarþvinganir á teikningunni |
| `DCHORIZONTAL` | `DCHOR` | Víddarþvingun: lárétt fjarlægð |
| `DCLINEAR` | `DCLIN` | Víddarþvingun: lárétt eða lóðrétt fjarlægð, frá staðnum þar sem þú setur hana |
| `DCRADIUS` | `DCRAD` | Víddarþvingun: radíus hrings eða boga |
| `DCVERTICAL` | `DCVER` | Víddarþvingun: lóðrétt fjarlægð |
| `DELBLOCKS` | | Eyðir blokkum: sérhverri tilvísun (líka þeim í öðrum blokkum, á hverju blaði) og skilgreiningunum |
| `DELCONSTRAINT` | `DELCON` | Fjarlægir allar þvinganir (rúmfræðilegar og víddarþvinganir) af völdum hlutum |
| `DELOPENING` | | Tekur hurð eða glugga úr vegg. |
| `DESCRIBE` | `DESC` | Segir hvað teikningin geymir: hve marga hluti, af hvaða tegund, hversu stór hún er, hvað er valið. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Hreinsar valið (Esc) |
| `DETAILS` | `DET` | Eigin smáatriði fyrirtækisins þíns, fundin fyrir það sem þú teiknar: finna, bæta við blokk, lista, fjarlægja, kveikja eða slökkva á tillögum. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Teiknar skýringarmynd úr texta: Mermaid-flæðirit, PlantUML-íhlutaskýringarmynd, D2, lista frá-til eða draw.io XML, sem blokkir og tengi sem þú getur breytt |
| `DIMALIGNED` | `DAL`, `DIMALI` | Rétt fjarlægð milli tveggja punkta |
| `DIMANGULAR` | `DAN`, `DIMANG` | Horn milli tveggja lína, boga, eða eftir þremur punktum |
| `DIMARC` | `DAR` | Málsetning bogalengdar: fjarlægðin eftir boga, með bogatákninu (DAR) |
| `DIMASZ` | | Málsetningarstilling: stærð örvar |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Málsetningar staflaðar frá einni grunnlínu |
| `DIMBREAK` | `DBREAK` | Brýtur málsetningar- og framlengingarlínur þar sem þær skera aðra hluti (Sjálfvirkt), milli tveggja punkta (Handvirkt), eða fjarlægir brotin |
| `DIMCONSTRAINT` | `DCON` | Víddarþvinganir: línulegar, samsíða, hornrétt, radíus, þvermál, breyta |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Keðja málsetninga, hver frá enda þeirrar síðustu |
| `DIMDEC` | | Málsetningarstilling: tugastafir |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Þvermál boga eða hrings |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Losar málsetningar frá hlutunum sem þær eru tengdar við (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Breytir málsetningartexta (Heim, Nýr texti, Snúa) eða hallar framlengingarlínum (Skáhalli) |
| `DIMEXE` | | Málsetningarstilling: framlenging út fyrir málsetningarlínuna |
| `DIMEXO` | | Málsetningarstilling: frávik frá upphafspunkti |
| `DIMGAP` | | Málsetningarstilling: bil umhverfis textann |
| `DIMINSPECT` | | Skoðunarmálsetning: rammi um gildið með merki og hversu oft hlutinn er athugaður |
| `DIMJOGGED` | `DJO`, `JOG` | Hliðruð radíusmálsetning: radíus teiknaður frá nærri punkti þegar miðjan er langt í burtu (DJO) |
| `DIMJOGLINE` | `DJL` | Bætir hliðrunartákni við línulega eða samsíða málsetningarlínu, til að sýna að fjarlægðin er ekki teiknuð í réttum mælikvarða (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Lárétt eða lóðrétt fjarlægð (R fyrir hvaða horn sem er) |
| `DIMLUNIT` | | Málsetningarstilling: snið lengda (1 vísindalegt, 2 tugakerfi, 3 verkfræðilegt, 4 byggingarlist, 5 brot) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Hnitmálsetning: X- eða Y-fjarlægð punkts frá upphafspunkti UCS, á vísi (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Yfirskrifar málsetningarbreytur á völdum málsetningum án þess að breyta stíl þeirra; Hreinsa setur þær aftur á stílinn (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radíus boga eða hrings |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Tengir punkta málsetningar við hluti, svo hún fylgi og mæli aftur þegar þeir hreyfast (DRE) |
| `DIMSCALE` | | Málsetningarstilling: heildarmælikvarði (stærðir × þetta) |
| `DIMSPACE` | | Jafnt bil á milli samsíða málsetninga, mælt frá grunnmálsetningu (0 raðar þeim upp, Sjálfvirkt er tvöfölduð hæð texta) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Býr til, breytir, setur sem núverandi, eyðir, beitir og ber saman nefnda málsetningarstíla (gluggann; -DIMSTYLE í skipanalínunni) |
| `DIMTEDIT` | `DIMTED` | Færir málsetningartexta til vinstri, hægri eða miðju málsetningarlínunnar, eða snýr honum |
| `DIMTEXTUNIT` | `DTU` | Málsetningartexti í mm, cm, m eða km, eða í eigin einingum teikningarinnar: valdar málsetningar, annars nýjar (DTU) |
| `DIMTXT` | | Málsetningarstilling: hæð texta |
| `DIST` | `DI` | Fjarlægð og horn milli tveggja punkta |
| `DISTRIBUTE` | | Dreifir völdum hlutum jafnt, til hliðar eða upp og niður: jöfn skref milli miðja, eða jöfn bil; ytri tveir haldast |
| `DIVIDE` | `DIV` | DIVIDE (DIV): merki sem skera línu, boga, hring, fjöllínu, spline eða sporbaug í jafna hluta. Punktar, eða með Blokk blokk á hverju merki. |
| `DOCUMENTS` | `DOCS` | Opnar spjaldið Skjöl: athugaðu teikningar út og inn, endurskoðanir, útgáfustöður og samþykki fyrir verkefnamöppu |
| `DOOR` | `DR` | Setur hurð í vegg. Hliðin sem þú smellir á er hliðin sem hún opnast að. |
| `DRAWORDER` | | Breytir teiknunarröð: færir hluti fremst, sendir þá aftast, eða setur þá fyrir ofan eða neðan aðra hluti. |
| `DUPLICATE` | `DUP` | Afrit sem hreyfist með bendlinum: smelltu til að setja það niður (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Eiginleikar teikningarinnar: titill, höfundur og hitt, og þín eigin pör heita og gilda |
| `DXFOUT` | | Sækir teikninguna sem DXF R12 (Vista heldur sínu sniði) |
| `EATTEDIT` | `DDATTE` | Breytir eigindum blokkartilvísunar: gildum, texta og eiginleikum, ein eigind í einu |
| `ELLIPSE` | `EL` | Endapunktar ássins og hinn hálfásinn |
| `ERASE` | `E`, `DELETE` | Fjarlægir hluti |
| `EXPLODE` | `X` | Brýtur fjöllínur, blokkir og málsetningar í hluta sína |
| `EXPORT` | `EXP` | Vistar afrit af teikningunni í skráartegund sem viðbót skrifar |
| `EXPORT3D` | `3DEXPORT` | Flytur út 3D-líkanið: GLB, OBJ eða STL |
| `EXPORTPOINTS` | `EXPPTS` | Skrifar punkta, og innsetningarpunkta blokka með einni eigind sem lýsingu, í CSV- eða TXT-skrá (PNEZD, PENZD eða XYZ) fyrir BIM- og mælingaforrit |
| `EXTEND` | `EX` | Lengir hluti til að mæta öðrum: smelltu nálægt enda, dragðu yfir nokkra, eða Shift+smelltu til að klippa |
| `EXTRIM` | | EXTRIM: veldu eina skurðbrún, síðan hlið. Allt sem sker brúnina er klippt þeim megin. Bitarnir sem færu sjást þegar þú hreyfir bendilinn. |
| `EXTRUDE` | `EXT` | Dregur lokaða tvívíddar hluti út í þrívíðar einingar (3D) |
| `FIELD` | | Setur reit í texta, reit í töflu eða eigind: dagsetningu, skráarheiti, blaðnúmer, eigindi teikningar, flatarmál eða lengd hlutar, eða formúlu |
| `FILLET` | `F` | Ávalar eða stillir hornið milli tveggja hluta (R radíus, P sérhvert horn fjöllínu, M nokkur) |
| `FIND` | | Finnur og skiptir út orðum í texta, gildum eiginda og málsetningartexta |
| `FLATTEN` | | Setur hæð (Z) og þykkt valdra hluta í 0, líka í blokkunum sem þeir nota. |
| `FLOOR` | | Velur hæðina til að teikna á, bætir við einni, eða færir eða afritar valið á hana. |
| `FLOORLAYERS` | | Breytir hæðum í lög sem heita Hæð-Lag, fyrir skrá sem fer til einhvers án hæða. |
| `FLOORS` | `FLR` | Opnar spjaldið Hæðir: staflar hæðum í einu líkanrými. |
| `GCCOINCIDENT` | | Þvingun: tveir punktar mætast, eða punktur helst á hlut |
| `GCCOLLINEAR` | | Þvingun: tvær línur haldast á sömu línu |
| `GCCONCENTRIC` | | Þvingun: tveir hringir eða tveir bogar deila miðju |
| `GCEQUAL` | | Þvingun: tvær línur haldast jafnlangar, eða tveir hringir/bogar sama radíus |
| `GCFIX` | | Þvingun: punktur eða allur hlutur helst þar sem hann er |
| `GCHORIZONTAL` | | Þvingun: lína (eða tveir punktar) helst lárétt |
| `GCPARALLEL` | | Þvingun: tvær línur haldast samsíða |
| `GCPERPENDICULAR` | | Þvingun: tvær línur haldast í rétt horn |
| `GCSYMMETRIC` | | Þvingun: tveir punktar, línur eða hringir spegla hvorn annan yfir línu |
| `GCTANGENT` | | Þvingun: lína og hringur eða bogi (eða tveir af þeim) haldast snertlar |
| `GCVERTICAL` | | Þvingun: lína (eða tveir punktar) helst lóðrétt |
| `GDSIN` | `GDS` | Sýnir IC-skipulag (GDSII-straumskrá): hvert lag og gagnagerð sem teikningarlag, flatt, í einingum notanda; aðeins til að skoða og mæla (tilraun á rannsóknarstofu) |
| `GEOMCONSTRAINT` | `GCON` | Rúmfræðilegar þvinganir: láréttar, lóðréttar, samsíða, snertlar, samfallandi… |
| `GLBOUT` | | Flytur út 3D-líkanið sem GLB (glTF) |
| `GRADIENT` | `GD` | Fyllir svæði með halla úr einum eða tveimur litum |
| `GRID` | | Stillir rist: bilið milli línanna, hverja N-tu línu sem aðallínu, ON eða OFF, eða Sjálfvirkt til að fylgja aðdrættinum aftur |
| `GRIDMOVE` | `GM` | Færir ristarlínu og það sem hangir á henni: veggir teygjast, súlur, hringir og merki færast, málsetningar fylgja. |
| `GROUP` | `G` | GROUP (G): gefur völdum hlutum heiti sem þeir deila. Smellur á einn þeirra velur þá alla. Enter við heitið býr til ónefndan hóp. |
| `GROUPEDIT` | | GROUPEDIT: breytir hópi. Veldu einn hlut hans eða gefðu upp Heiti hans, síðan Bæta við eða Fjarlægja hluti, NAfngreina hann, breyta Lýsingu hans, eða segja hvort smellur velur hann í heild. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Fyllir svæði með samfylltu lit eða mynstri: smelltu inni í því, eða veldu lokaða hluti (H) |
| `HATCHEDIT` | `HE` | Breytir skyggingu: mynstur, mælikvarða, horn, uppruna og tengingu hennar við jaðar. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Býr aftur til jaðarfjöllínurnar úr skyggingu, tengdum henni eða ekki |
| `HATCHTOBACK` | | Sendir allar skyggingar aftast á bak við allt annað. |
| `HELP` | `?` | Þessi listi |
| `HIDEOBJECTS` | | Felur valda hluti þar til UNISOLATEOBJECTS. Ekki vistað með teikningunni. |
| `HISTORY` | `HIST` | HISTORY (HIST): útgáfur þessarar teikningar — afrit geymd á þessari tölvu þegar Studio vistar hana, og útgáfur skýsins — til að opna, endurheimta og bera saman við það sem breyttist, sýnt í lit. |
| `ID` | | Hnit punkts |
| `IMAGE` | `IM` | Gefur CadCraft þær myndaskrár sem teikning notar (DWG geymir aðeins hvar þær voru). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Setur mynd (PNG eða JPEG) inn úr skrá. |
| `IMAGECLIP` | `ICL` | Klippir mynd að rétthyrningi eða marghyrningi, eða fjarlægir klippinguna. |
| `IMPORT` | `IMP` | Flytur inn skrá af gerð sem viðbót les, inn í þessa teikningu |
| `INSERT` | `I`, `DDINSERT` | Setur blokk inn (S mælikvarði, R snúa); F úr DWG/DXF-skrá, L úr safninu |
| `INTERSECT` | `IN` | Heldur aðeins því sem föst efni eiga sameiginlegt (3D), eða svæðinu sem tvívíð svæði deila |
| `ISODRAFT` | | ISODRAFT: jafnhornateikning á eða af, eða beint á Vinstra, Efra eða Hægra planið. Meðan það er á fylgja Lóðrétt/lárétt og skáhorn ásum planssins, ristin er teiknuð í jafnhornum, og ELLIPSE fær Jafnhringur. |
| `ISOLATEOBJECTS` | `ISOLATE` | Sýnir aðeins valda hluti; allt annað í þessu rými er falið þar til UNISOLATEOBJECTS. Ekki vistað með teikningunni. |
| `ISOPLANE` | | ISOPLANE: veldu jafnhornaplanið til að teikna á: Vinstra, Efra eða Hægra. Enter fer í það næsta, eins og F5 gerir meðan jafnhornateikning er á. |
| `JOIN` | `J` | Tengir línur, boga og fjöllínur sem mætast enda við enda í eina fjöllínu; línur á einni línu í eina línu (J) |
| `LASER` | `LASERCUT` | Opnar Laser-spjaldið: sendir lög í leysiskera eða grafara (GRBL G-kóða) |
| `LASSOMODE` | | Ýtt og dregið teiknar lassó (1) eða rétthyrning (0) |
| `LAYDEL` | | Eyðir lagi og öllum hlutum á því (í líkaninu, á blöðum og í blokkum) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Opnar lagastjórann: hvert lag í einni töflu |
| `LAYERPANEL` | | Sýnir lagaspjaldið |
| `LAYFRZ` | | Frystir lagið hvers hlutar sem þú velur |
| `LAYGROUP` | `LG` | Hópar lög í möppur á lagaspjaldinu. |
| `LAYISO` | | Einangrar lög valdra hluta (öll önnur lög slökkt) |
| `LAYLOCKFADE` | | Stillir hversu mikið hlutir á læstum lögum dofna, og hvort smellur geti valið þá. |
| `LAYMCUR` | | Gerir lag hlutarins sem þú velur núverandi |
| `LAYMRG` | | Sameinar lög: hlutir þeirra færast á markslagið og sameinuðu lögin hverfa |
| `LAYOFF` | | Slekkur á lagi hvers hlutar sem þú velur |
| `LAYON` | | Kveikir á öllum lögum |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Nýtt blað með titilreit og sýnigluggu |
| `LAYTHW` | | Afþýðir öll lög |
| `LAYUNISO` | | Kveikir aftur á þeim lögum sem LAYISO slökkti |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Breytir texta sem skrifaður er með gömlum víetnömskum leturgerðum (TCVN3 / ABC-leturgerðum eins og .VnTime, og VNI-leturgerðum eins og VNI-Times) í Unicode. Slíkur texti er þegar sýndur eins og hann les sig; þetta skrifar hann endanlega, með talningu og einu afturkallsskrefi. |
| `LENGTHEN` | `LEN` | Lengir eða styttir línur, boga og fjöllínur: um tiltekna stærð, prósentu, í heild, eða með drætti (LEN) |
| `LIBRARY` | `LIB` | Safnspjaldið: setja inn hluti, athuga uppfærslur, heimildir |
| `LIMITS` | | Stillir mörk teikningarinnar: ON, OFF, eða neðra vinstra og efra hægra horn. Með mörkum ON er punktum utan þeirra hafnað |
| `LINE` | `L` | Beinir kaflar, hver sinn hlutur |
| `LINETYPE` | `LT`, `CELTYPE` | Línugerðin sem nýir hlutir fá (eftir lagi, eftir blokk, eða tiltekin) |
| `LINKVIEWS` | `SYNCVIEWS` | Hliðrar og aðdrætti allar rúður saman (skipt skjár), til að bera saman tvær teikningar eða útgáfur |
| `LISPEDIT` | `VLIDE` | LISPEDIT (eða VLIDE) opnar LISP-ritilinn: glugga til að skrifa, hlaða og prófa rútínu. Hlaða í teikninguna les hvern lið, eins og APPLOAD gerir með skránni, og býr til skipanir hennar. Keyra valið metur valdar liði, eða liðinn sem bendillinn er í. Stjórnborðið sýnir hvað rútínan prentaði og hverja villu með línu. Svigi sem passar er merktur meðan þú skrifar og Enter inndregur nýju línuna. Nýtt, Opna og Vista vinna með .lsp-skrá. Listarnir við hliðina á textanum sýna föllin sem rútínan skilgreinir, þau sem hún kallar og LISP-ið hefur ekki enn, og öll föll sem hún hefur. Glugginn stöðvar ekki teikninguna, svo rútína getur beðið um punkta; Stöðva eða Esc lýkur keyrandi rútínu. |
| `LIST` | `LI`, `LS` | Lýsir hlutum í ferlinum |
| `LTSCALE` | `LTS` | Mælikvarði línugerða teikningarinnar (hvert strik og bil margfaldast með honum) |
| `LWDISPLAY` | `LWT` | Sýnir eða felur línuþykktir á skjánum (LWT-hnappurinn á stöðustikunni) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Línuþykktin sem nýir hlutir fá (eftir lagi, eftir blokk, sjálfgefið, eða mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Kortalög undir líkanrýminu: hnitakerfi teikningarinnar, flísar, WMS, WMTS, ArcGIS, myndir |
| `MASSPROP` | | MASSPROP: þversniðseiginleikar svæða og lokaðra hluta: flatarmál, jaðar, massamiðja, skriðþungi og tregðuskriðþungi, tregðuskriðsfylki, radíus snúnings og aðalásarnir. Nákvæmt fyrir línur og boga. Getur skrifað skýrsluna í textaskrá. |
| `MATCHPROP` | `MA`, `PAINTER` | Samsvarar eiginleikum: afritar lag, lit og fleira úr einum hlut yfir á aðra (MA) |
| `MEASURE` | `ME` | MEASURE (ME): merki á sérhverri gefinni lengd meðfram línu, boga, hring, fjöllínu, spline eða sporbaug, frá þeim enda sem er næst bendlinum. Punktar, eða með Blokk blokk á hverju merki. |
| `MEASUREGEOM` | `MEA` | Mælir fjarlægð, radíus, horn eða flatarmál (MEA) |
| `MINSERT` | | MINSERT: setur blokk í raðir og dálka í einu. Hver og ein er sín eigin tilvísun, svo hægt er að færa eða eyða hverri þeirra. |
| `MIRROR` | `MI` | Speglar hluti yfir línu |
| `MLEADER` | `MLD`, `MLEAD` | Fjölvísir: ör, vísir og athugasemd, sem einn hlutur (MLD) |
| `MLEADERALIGN` | `MLA` | Jafnar fjölvísa eftir einum þeirra í ákveðna stefnu, með jöfnu bili, eða dreifir þeim milli tveggja punkta (MLA) |
| `MLEADERCOLLECT` | `MLC` | Safnar nokkrum fjölvísum í einn: blokkir þeirra í röð eða dálk, eða athugasemdir þeirra hver undir annarri (MLC) |
| `MLEADEREDIT` | `MLE` | Bætir vísilínum við fjölvísi eða fjarlægir þær; skiptir innihaldi hans milli texta og blokkar (MLE) |
| `MLINE` | | Teiknar samsíða línur saman, tengdar á hornunum. |
| `MOVE` | `M` | Færir hluti eftir grunnpunkti og öðrum punkti |
| `MSPACE` | `MS` | Vinnur á líkaninu í gegnum sýnigluggu opna blaðsins (eða tvísmellir inni í sýnigluggunni). |
| `MTEXT` | `MT`, `T` | Málsgreinatexti: dragðu breiddina, skrifaðu síðan á staðnum; Enter byrjar nýja málsgrein (T) |
| `MVIEW` | `MV` | Sýnigluggi á líkanið, á útliti |
| `NAMEDVIEW` | `NV`, `VIEWS` | Nefndar sýnir: vistar sýnina á skjánum (eða glugga) undir nafni og fer aftur í hana (NV) |
| `NCOPY` | | Afritar hluti úr blokkartilvísun eða tengdri teikningu inn í teikninguna, án þess að sprengja hana. |
| `NEARBY` | | Segir hvað er nálægt bendlinum, það næsta fyrst, með fjarlægð og hlið. |
| `NEW` | | Byrjar nýja teikningu |
| `OBJECTSCALE` | `OBJSCALE` | Skýringamælikvarðar skýringatexta og málsetninga: bætir við mælikvarða, eyðir einum, bætir við núverandi mælikvarða, eða listar þá (hver sýnigluggi sýnir þá í stærðinni fyrir sinn mælikvarða) |
| `OBJOUT` | | Flytur út 3D-líkanið sem OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Skrifstofustaðallinn: textahæðir á pappír, lög, reitir titilreits og sniðmát í einni skrá. Sýnir þann sem gildir og hvaðan hann kemur; Flytja inn .json-skrá í þessa teikningu, bæta við skrifstofulögum sem teikninguna vantar, lista reiti titilreitsins. |
| `OFFSET` | `O` | Samsíða afrit í fjarlægð |
| `OFFSETGAPTYPE` | | OFFSETGAPTYPE: hvernig OFFSET lokar bilum á ytri hornum fjöllínu. 0 lengir bútana, 1 bætir við boga, 2 bætir við beinum skurði. Geymt fyrir þessa setu. |
| `OLELIST` | `OLES` | Listar OLE-hluti sem teikning ber og setur afrit af mynd eins þeirra þar sem þú velur |
| `OPEN` | | Opnar DWG eða DXF af þessari tölvu |
| `OPENIN3D` | | Opnar þessa teikningu í 3D-líkanaforritinu, í nýjum flipa (ekkert er sent upp) |
| `OPTIONKEYS` | `OPTKEYS` | Gefur valkostum skipana eigin stafi (ARRAY.PO, P), í einni textaskrá |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Opnar valmynd hlutasmellifestu: velur hvaða smellifestur eru á. Líka hægri smellur á Smellifesta á stöðustikunni. |
| `OVERKILL` | | Eyðir tvíteknum hlutum og sameinar skarandi línur og boga eða línur og boga sem mætast enda við enda, innan vikmarka. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Breytuspjaldið: notandabreytur og víddarþvinganir í einni töflu |
| `PARTSLIST` | `PLIST` | Hlutalistatafla yfir sérhvern staðlaðan hlut og stálprófíl sem settur er úr safninu |
| `PASTEAREA` | `PAREA` | Límir svæði sem afritað var í MarkupCraft (Afrita svæði) í réttri stærð, sem mynd. |
| `PASTEBLOCK` | | PASTEBLOCK: límir það sem þú afritaðir sem eina blokk. Blokkin fær sitt eigið heiti; RENAME gefur henni þitt. |
| `PASTECLIP` | | Límir klippiborðið: það fylgir bendlinum, smelltu þar sem það á að fara (Ctrl+V) |
| `PASTEORIG` | | Límir klippiborðið á hnitunum sem það var afritað af (Ctrl+Shift+V) |
| `PDF` | | Gefur CadCraft PDF-skrárnar sem undirlögn teikningar nota |
| `PDFADJUST` | | Dofnar, andstæða, einlita eða slekkur á PDF-undirlögn |
| `PDFATTACH` | `PDFATT` | Festir PDF-síðu sem undirlögn (PDFATTACH) |
| `PDFCLIP` | | Klippir PDF-undirlögn að rétthyrningi eða marghyrningi |
| `PDFIMPORT` | `PDFIM` | Breytir línum, fyllingum og texta PDF-síðu í teikningarhluti (PDFIMPORT) |
| `PDFLAYERS` | | Kveikir eða slekkur á lögum PDF-undirlagnar |
| `PEDIT` | `PE` | Breytir fjöllínu: lokar, opnar, tengir, breidd, passar feril, splínuferil, afbeygir, línugerðarmyndun, snýr við; línur, bogar og splínur má breyta í fjöllínur fyrst |
| `PENPRESSURE` | | Hvort þrýstingur pennastrokks stillir línuþykkt þess sem SKETCHFIX og SKETCHLIVE búa til (kveikt sem sjálfgefið). Geymt í þessum vafra. |
| `PHOTOSKETCH` | `PSK` | Breytir ljósmynd af handteikningu á pappír í línur og boga í mælikvarða, réttir úr perspektífinu og gefur hverjum penna lit sitt eigið lag. |
| `PICKSTYLE` | | PICKSTYLE: hvort val á einum hlut í hópi velur allan hópinn (1, upphafsstillingin) eða aðeins þennan hlut (0). Geymt fyrir þessa setu. |
| `PLAN` | | Snýr sýninni svo X-ás UCS (núverandi ucs, vistað Ucs eða Heimurinn) sé láréttur á skjánum. Ekkert í teikningunni færist. |
| `PLINE` | `PL` | Fjöllína úr línu- og bogabútum |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Prentar í PDF: útlit, eða líkanið í mælikvarða |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Prentstílstöflur: stillir hvað hver litur prentast sem (lit, svart, grátt, blek, línuþykkt); geymt með teikningunni (STYLESMANAGER) |
| `POINT` | `PO` | Punktahlutir |
| `POINTCLOUD` | `PC` | festi punktaský: sneið, hæð, þykkt, litur, stærð, sýnilegt, aðdráttur, losa |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | festir punktaský (LAS, LAZ, XYZ, PTS) undir teikningunni |
| `POLARANG` | | Skref pólrakningar í gráðum (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Reglulegur marghyrningur |
| `PRESSPULL` | | Ýtir eða togar fleti fasts efnis (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Opnar spjaldið Eiginleikar (líka Ctrl+1, eða tvísmellur á hlut) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Brýtur spjaldið Eiginleikar saman að jaðri gluggans |
| `PSPACE` | `PS` | Fer út úr sýnigluggu sem þú vinnur í og aftur á blaðið (eða tvísmellur utan hennar). |
| `PUBLISH` | `-PUBLISH` | Prentar nokkur eða öll blöð í eina PDF (síða og bókamerki fyrir hvert blað) |
| `PURGE` | `PU` | Fjarlægir blokkarskilgreiningar sem ekkert notar |
| `QDIM` | | Hraðmálsetning: málsetur nokkra hluti í einu (samfellt, grunnlína, stiglaga, hnit, radíus eða þvermál) |
| `QPMODE` | `QP` | Hraðeiginleikar við bendilinn á eða af |
| `QSELECT` | `QS` | Hraðval: sérhver hlutur af tegund sem lag, litur, stærð eða heiti passar við (QS) |
| `RASTERSNAP` | | Kveikir eða slekkur á smellifestu við línur skannaðra blaða. |
| `RAY` | | Geisli: byggingarlína frá punkti, endalaus á aðra hliðina. |
| `RECOVER` | | Opnar skemmda DXF- eða DWG-skrá: sleppir því sem ekki er hægt að lesa í stað þess að hafna skránni, segir hvað var sleppt, athugar síðan og lagar teikninguna eins og AUDIT gerir. |
| `RECTANG` | `REC`, `RECTANGLE` | Lokuð fjöllína úr tveimur hornum |
| `REDLINE` | `RDL` | Rauðlína í endurskoðun: les MarkupCraft-pakka með rauðlínum, samþykkir eða hafnar hverri breytingu, skýjar samþykktu breytingarnar með endurskoðunarskrá og vistar svarskrána (RDL) |
| `REDO` | | Endurgerir það sem var afturkallað |
| `REFCLOSE` | | Lýkur breytingu blokkar á staðnum: vistar hana, eða hendir breytingunum |
| `REFEDIT` | | Breytir blokk á staðnum, þar sem tilvísun í hana er, með restinni af teikningunni dofinni; REFCLOSE vistar hana |
| `REGEN` | `RE` | Endurbyggir það sem er teiknað í þessum flipa úr teikningunni |
| `REGENALL` | `REA` | Endurbyggir það sem er teiknað í hverjum flipa, rúðu og opinni teikningu |
| `REGION` | `REG` | REGION (REG): býr til flöt svæði (svæði) úr lokuðum hlutum, eða úr línum, bogum og fjöllínum sem loka lykkju enda við enda. UNION, SUBTRACT og INTERSECT sameina síðan svæði, og MASSPROP gefur eiginleika þeirra. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Skráir nokkrar skannanir: setur þær í einn ramma eftir völdum punktapörum eða merkjum, fínstillir með ICP, flytur út eina LAS- eða E57-skrá |
| `REINIT` | | Endurhleður skammnafnaskrána þína |
| `RENAME` | `-RENAME`, `REN` | Endurnefnir lag eða blokk (sérhver hlutur eða tilvísun fylgir) |
| `REVCLOUD` | `RC` | Endurskoðunarský: ávalar rétthyrning, marghyrning, frjálsa slóð eða hlut (RC) |
| `REVOLVE` | `REV` | Snýr lokuðum tvívíðum hlutum um ás í þrívíðar einingar (3D) |
| `ROTATE` | `RO` | Snýr hlutum um grunnpunkt |
| `SAMPLES` | `SAMPLE` | Opnar eina af sýnisteikningum CadCraft (byggingarsett, bygging eins og hún var) til að læra af |
| `SAVE` | `QSAVE` | Sækir teikninguna í sínu sniði (DWG eða DXF) |
| `SAVEAS` | | Sækir teikninguna sem DWG eða DXF: þú velur hvort |
| `SAYSEL` | | Segir hvað er valið, ein setning fyrir hvern hlut. |
| `SCALE` | `SC` | Skalar hluti um grunnpunkt |
| `SCALELISTEDIT` | `SCALELIST` | Bætir við, breytir og eyðir mælikvörðum teikningarinnar; þeir birtast í listum sýnigluggans og prentunar og eru vistaðir í skránni (SCALELIST) |
| `SCANALIGN` | `SCL` | Jafnar skönnuðu blaði á tvo punkta: færir, snýr og skalar það ef þú velur. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Setur inn skannaða teikningu: PNG, JPEG eða TIFF (ein síða eða allar síður í fjölsíðuskrá) eða PDF-síðu sem er mynd. |
| `SCANCLEAN` | `SCC` | Gerir skannað blað svart-hvítt og fjarlægir bletti. |
| `SCANCROP` | `SCR` | Klippir skannað blað að glugga. |
| `SCANDESKEW` | `SCD` | Finnur hornið sem langar línur skannaðs blaðs liggja í og snýr blaðinu rétt þegar þú samþykkir hornið. |
| `SCANERASE` | `SCE` | Eyðir svæði skannaðs blaðs: rétthyrningi, marghyrningi eða lassói. |
| `SCANINFO` | `SCI` | Sýnir upprunalegu skrá skannaðs blaðs og skrefin sem tekin hafa verið síðan. |
| `SCANSCALE` | `SCS` | Skalar skannað blað: velur tvo punkta á því og slærð inn raunverulega fjarlægð milli þeirra. |
| `SCANTRACE` | `SCT` | Rekur skannað blað í línur og boga á nýtt lag, að þeirri nákvæmni sem þú stillir. Texti og skygging haldast sem myndpunktar. |
| `SELECT` | | Velur hluti núna (fyrir P, Fyrri, í næstu skipun) |
| `SELECTALL` | `AI_SELALL` | Velur sérhvern hlut sem þú getur breytt á þessum flipa (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Velur sérhvern hlut eins og þá sem þú velur: sömu tegund, lag og lit (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Sýnir spjald blaðasettsins: blöð úr mörgum teikningum, númeruð, prentuð sem ein PDF. |
| `SHORTCUTS` | `KEYS` | Gefur hvaða skipun sem er takka af þinni eigin (Ctrl eða Alt með bókstaf, eða lausan aðgerðartakka), geymt í þessum vafra eða skjáforriti. |
| `SHXFONTS` | `SHX` | Gefur CadCraft SHX-leturgerðir úr möppu eða skrám, svo textastílar sem nefna þær teikni í þeim (listar, fjarlægir, snýr við) |
| `SKETCHFIX` | `SKF` | Teiknar frjálsar strokur; hver verður hrein lína, hringur, bogi, rétthyrningur eða fjöllína, réttuð og tengd hinum. |
| `SKETCHLIVE` | `SKL` | Teiknar með penna: hvert strok verður nákvæm lína, hringur, bogi eða rétthyrningur þegar þú lyftir pennanum, smellt við teikninguna, með stærðina til að slá yfir. |
| `SPLINE` | `SPL` | Teiknar spline í gegnum punkta (eða með stjórnmarghyrningi), eða breytir fjöllínu í eina slíka |
| `SPLINEDIT` | `SPE` | Breytir spline: passaðir punktar, stjórnpunktar og vogir, opnar eða lokar, snýr við, eða breytir í fjöllínu |
| `SPLIT` | | Skiptir teiknisvæðinu í rúður (eins og VPORTS á líkaninu; líka frá blaði) |
| `STEELMEMBER` | `SMEMBER` | Stálbiti í 3D úr staðlaðum prófíl: tveir punktar (bjálki) eða grunnpunktur og hæð (súla) |
| `STLOUT` | | Flytur út 3D-líkanið sem STL (millimetrar) |
| `STRETCH` | `S` | Teygja: dragðu skarandi glugga yfir endana til að færa; það sem er inni færist, restin stendur |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Textastílar: leturgerðin, hæðin, breiddin og hallinn sem nýr texti fær (gluggann; -STYLE í skipanalínunni) |
| `SUBTRACT` | `SU` | Tekur föst efni frá öðrum (3D), eða tvívíð svæði frá svæðum |
| `SWBOUT` | `SWMACRO` | Sækir þjóðvef fyrir SolidWorks (.swb) sem býr til líkanið aftur sem eina þvingaða skissu |
| `SWEEP` | | Dregur lokaða tvívíða hluti eftir slóð (línu, fjöllínu, boga, hring) í föst efni (3D) |
| `TABLE` | `TB` | Býr til töflu: raðir og dálka, eða úr reitum í töflureikni á klippiborðinu eða CSV-skrá |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Breytir töflu: skrifar í reit, setur inn og eyðir röðum og dálkum, stærðum, sameinuðum reitum, jöfnun |
| `TABLEEXPORT` | | Vistar það sem tafla sýnir sem CSV-skrá |
| `TABLEPASTE` | `PASTETABLE` | Býr til töflu úr reitum í töflureikni á klippiborðinu |
| `TABLESTYLE` | `TS` | Töflustílar: textahæðir, jöfnun, spássía og rammar fyrir titil-, haus- og gagnaraðir |
| `TAGS` | | Merki á blokkartilvísunum: skilgreindu merki (gerð, leyfð gildi, blokkir sem það tekur til), settu það á valdar tilvísanir og listaðu þær sem áætlun sem þú getur vistað sem CSV |
| `TEXT` | `DT`, `DTEXT` | Eina línu texti; Enter byrjar næstu línu |
| `TEXTEDIT` | `ED`, `DDEDIT` | Breytir texta á staðnum: veldu texta (eða tvísmelltu á hann) (ED) |
| `TEXTMASK` | `TMASK` | Setur bakgrunnsgrímu á bak við texta (bakgrunn teikningarinnar eða lit), eða fjarlægir hana. |
| `TEXTTOFRONT` | | Setur allan texta, málsetningar og vísa fremst á allt annað. |
| `TOOLBAR` | | Velur hvað hnappar tækjastikunnar sýna: tákn og texta, aðeins tákn, eða aðeins texta (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Setur tækjastikuna efst, neðst, vinstra megin eða hægra megin í glugganum |
| `TOOLBARROWS` | | Velur hversu margar raðir tækjastikan notar: vefja til að passa, 2, eða 1 (Shift+Ctrl+F1) |
| `TOPAREA` | | Gerir stikurnar fyrir ofan teikninguna staðlaðar eða þéttar |
| `TOUCHCROSSHAIR` | `TCX` | Hliðrað krosshár til teiknunar með fingri: einn fingur færir krosshár sem situr fyrir ofan hann og til hliðar, svo fingurinn hylji ekki valpunktinn. Þegar fingurinn er lyft velur hann ekkert; Smella-hnappurinn eða snerting með öðrum fingri velur við krosshárið, og að halda Smella inni meðan þú hreyfir dregur. Löng ýting eða Enter-hnappurinn er Enter. Tveir fingur hliðra og aðdraga. Valkostir: ON, OFF, Sjálfvirkt (kveikt aðeins þar sem fingur er eini bendillinn), Fjarlægð, Hlið. |
| `TOUR` | `TUTORIAL` | Tekur sex skrefa fyrstu teikningarferðina aftur |
| `TRIM` | `TR` | Klippir hluti aftur þangað sem aðrir skera þá: smelltu á bút, dragðu yfir nokkra, eða Shift+smelltu til að framlengja |
| `TRIMEXTENDMODE` | | Hvernig TRIM og EXTEND byrja: 1 Hraðvirkt (sérhver hlutur er skurðbrún eða mörk), 0 Staðlað (veldu brúnirnar fyrst) |
| `TTR` | | Hringur sem snertir tvo hluti, með radíus sem þú gefur (það sama og CIRCLE T). |
| `TURNLEFT` | | Snýr sýninni 90° til vinstri (rangsælis): UCS Z -90, og sýnin fylgir. Ekkert í teikningunni færist. |
| `TURNRIGHT` | | Snýr sýninni 90° til hægri (réttsælis): UCS Z 90, og sýnin fylgir. Ekkert í teikningunni færist. |
| `TURNWORLD` | | Til baka í heiminn: UCS Heimur, og sýnin er aftur lárétt. |
| `TXT2MTXT` | `T2M` | Sameinar einslínutexta í einn málsgreinatexta, ofan frá og niður. |
| `UCS` | | Þitt eigið hnitakerfi: upphafspunktur og X-ás (upphaf, Z-horn, 3punktar, HLutur, Fyrri, Heimur, NAfngreint). Punktar sem þú slærð inn, rétthyrnt, pólrakning, ristin og nýr texti fylgja því; sýnin snýst svo X-ás hennar sé lárétt. Ekkert í teikningunni færist. |
| `UNDO` | `U` | Afturkallar síðustu skipun |
| `UNGROUP` | | UNGROUP: tekur hópa í sundur. Veldu hluti úr hópunum, eða gefðu upp Heiti. Hlutirnir haldast í teikningunni. |
| `UNION` | `UNI` | Sameinar föst efni í eitt (3D), eða tvívíð svæði í eitt svæði |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Sýnir aftur alla hluti sem ISOLATEOBJECTS eða HIDEOBJECTS faldi. |
| `UNITS` | `UN`, `DDUNITS` | Hvernig lengdir eru sýndar og slegnar inn: aukastafir, fet og tommur, brot (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Reiknar reiti út aftur, og velur hvenær þeir uppfærast af sjálfu sér |
| `USDOUT` | | Flytur út 3D-líkanið sem USD (.usda texti, .usdc tvíundir eða .usdz pakki) |
| `VIEW` | `-VIEW`, `V` | Staðlaðar 3D-sýnir, perspektífar eða samsíða (3D) |
| `VIEWBASE` | `FLATSHOT` | Setur tvívíða sýn á 3D-föst efni (framan, ofan, hlið eða jafnhorn, faldar línur strikaðar) á blað eða í líkanið |
| `VIEWLABEL` | `VL` | Sýnititill á blaði sem sýnir heiti sýnar sýnigluggans og breytist með henni. |
| `VOICE` | | Kveikir eða slekkur á talaðri skipun. Þær eru greindar á þessari tölvu. |
| `VPCLIP` | | Klippir sýnigluggu blaðs að lokuðum hlut eða teiknuðum marghyrningi; Delete gerir hann aftur að rétthyrningi |
| `VPLAYER` | | Frystir eða afþýðir lög í sumum sýniglugga eingöngu (Frysta, Afþýða, Endurstilla), og velur hvaða lög nýir sýnigluggar byrja frystir (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Skiptir teiknisvæðinu í rúður, hver með eigin sýn (á blaði: sýnigluggi, eins og MVIEW) |
| `VPVIEW` | | Stillir hvað sýnigluggi sýnir: velur glugga á líkaninu |
| `VSCURRENT` | `VS`, `SHADEMODE` | Sjónrænn stíll 3D-sýnar: skyggð, jaðrar, falin lína, vírrammi, röntgen |
| `WALL` | `WA` | Teiknar 2D-veggi eins og fjöllínu. Þeir tengjast og bera hurðir og glugga. |
| `WALLARC` | `WARC` | Teiknar boga veggja. Veggir í grunnmynd eru beinir, svo bogi er teiknaður sem stuttir beinir veggir (15 gráður hver) sem tengjast. |
| `WALLDELSEG` | | Eyðir bút úr vegg milli tveggja punkta. Það sem eftir er verður áfram einn eða tveir veggir. |
| `WALLDIM` | | Slærð inn nýtt gildi fyrir málsetningu: veggurinn við fjarlægari endann færist hornrétt á sjálfan sig, veggurinn við fyrsta endann helst, og veggirnir sem tengjast honum fylgja. |
| `WALLDISJOIN` | | Veldu vegg nálægt öðrum enda til að banna tengingar þar: endinn er teiknaður hornrétt og ekkert fylgir honum. Veldu hann aftur til að leyfa þær. |
| `WALLGRID` | | Læsir vegg við ristarlínu: eftir henni, eða annar endinn á henni. Færðu línuna með GRIDMOVE og veggurinn fylgir. |
| `WALLHOLD` | | Jafnar og læsir: veggur helst á sínum stað gagnvart öðrum vegg (á línu hans, eða í þeirri fjarlægð sem hann hefur). Ef annar hreyfist fylgir hinn. |
| `WALLHOLDDIM` | | Læsir fjarlægðina milli tveggja samsíða veggja. Ef annar hreyfist fylgir hinn til að halda henni. |
| `WALLHOLDS` | | Listar læsingarnar á veggjunum. |
| `WALLJOINS` | | Gefur hverjum vegg eldri teikningar auðkenni sitt og geymir tengingarnar á milli þeirra. Þetta gerist líka við fyrstu breytingu sem þú gerir. |
| `WALLJOINSTYLE` | | Smelltu á horn þar sem tveir veggir mætast enda við enda til að breyta því hvernig það er teiknað: skáskurð, flatt, skera. T skiptir um hvor veggurinn gengur í gegn. |
| `WALLOFFSET` | `WO` | Færir vegg hornrétt á sjálfan sig um fjarlægð (veggirnir sem tengjast honum fylgja), eða býr til afrit í þeirri fjarlægð. |
| `WALLPICK` | | Býr til veggi á línu eða fjöllínu í teikningunni, með línunum sem tengjast henni ef þú segir Já. |
| `WALLPOLY` | `WP` | Teiknar veggi umhverfis reglulegan marghyrning með 3 til 64 hliðum, eins og POLYGON. |
| `WALLRECT` | `WR` | Teiknar fjóra tengda veggi frá tveimur gagnstæðum hornum, eins og RECTANG. |
| `WALLREJOIN` | | Gerir tvo hluta af einum vegg aftur að einum vegg. Sá fyrri heldur sínum stað í teikningunni. |
| `WALLROT` | | Teiknar fjóra tengda veggi sem rétthyrning snúinn í hvaða horn sem er: fyrsta hliðin, síðan hversu langt hin hliðin fer út. |
| `WALLSPLIT` | `WS` | Skiptir vegg í tvennt á punkti eða þar sem annar veggur sker hann. Hlutarnir haldast tengdir nema þú biðjir um bil eða frjálsa enda. Hurðir og gluggar fara með sínum hluta. |
| `WALLSPLITGAP` | | Skiptir vegg og skilur eftir bil: slærð inn bilið, velur vegginn, síðan punktinn. Hlutarnir halda frjálsum endum og er hægt að tengja aftur. |
| `WALLSTRETCH` | | Teygir með glugga: veggendar innan hans færast, veggir alveg innan hans færast í heild, og veggir sem standa á hliðum sínum renna með þeim. |
| `WALLTAN` | | Heldur vegg áfram með boga sem fer frá honum eftir veggnum (teiknaður sem stuttir beinir veggir). |
| `WALLTRACE` | | Býr til veggi umhverfis minnsta lokaða svæði lína og veggja umhverfis punktinn sem þú smellir á. |
| `WALLUNHOLD` | | Tekur læsingarnar af vegg (og læsingar annarra veggja við hann). |
| `WBLOCK` | `W`, `-WBLOCK` | Skrifar blokk, nokkra hluti eða alla teikninguna í nýja DWG- eða DXF-skrá (W) |
| `WEDGE` | `WE` | Kíll: tvö horn og hæð; hann hallar frá fyrsta horninu (3D) |
| `WHEREAMI` | `WHERE` | Segir hvar bendillinn er. |
| `WHOHAS` | | Segir hver hefur teikningu opna. CadCraft Studio geymir litla læsingarskrá við hliðina á hverri opinni teikningu (Plan.dwg.cclock: hver, síðan hvenær, hvaða útgáfa) og fjarlægir hana við lokun. Valkostir: Núverandi (opna teikningin), Skrá (veldu eina), Mappa (hver teikning í möppu sem er opin einhvers staðar; þetta leyfir Studio líka að geyma læsingarskrár í þeirri möppu), Slóð (sláðu inn eina), Heiti (nafnið sem aðrir sjá). Læsing sem ekki hefur verið endurnýjuð í fimm mínútur er sögð gömul. Ekki í boði í vafra. |
| `WINDOW` | `WN` | Setur glugga í vegg. |
| `XATTACH` | `XA` | Tengir aðra DWG eða DXF inn í þessa teikningu, sýnda sem lesanlega (XREF listar þær og hleður þeim aftur) |
| `XCLIP` | `XC` | Klippir blokkartilvísanir og tengdar teikningar að rétthyrningi eða marghyrningi, eða fjarlægir klippinguna. |
| `XLINE` | `XL` | Byggingarlína, endalaus í báðar áttir: í gegnum tvo punkta, lárétt, lóðrétt, í horni, deilir horni, eða hliðruð frá línu. |
| `XREF` | `XR`, `-XREF` | Tengdar teikningar (ytri tilvísanir): lista, festa, endurhlaða, binda, losa |
| `ZOOM` | `Z` | Mörk, eða glugga |
