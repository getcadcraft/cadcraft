---
title: Käskude kaart: mida sisestada
summary: Kõik CadCraftil olevad käsud koos lühikäskudega, tähestikus A-st Z-ni, programmist endast koostatud, ja teistest joonestusprogrammidest tuttavad harjumused, mis erinevad.
keywords: käskude kaart, käsud, lühikäsud, aliased, tulek teistest programmidest, käsuloend, mida sisestada, kustuta, lõika, samaväärne, erinevused
from: 3bdfd3e6
---

CadCraft võtab käskude nimed ja lühikäsud, mida inimesed teavad teistest joonestusprogrammidest: sisesta `L` joone jaoks, `TR` lõikamiseks, `E` kustutamiseks. Enamiku puhul pole seega õppida tõlketabelit: nimi, mida tunned, on siin sama. Allolev loend on kõik CadCraftil olevad käsud, koostatud programmist endast. {{key:Enter}} korrab viimast käsku; käsurealt `HELP` väljastab sama loendi.

Need vähesed, mis pole samad või pole valmis:

- **Save** laadib brauseris alla koopia ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studios kirjutab fail. Vt [Üleminek teistelt joonestustarkvaradelt](topic:coming-from).
- **PLOT** teeb PDF-i (ka PNG ja SVG), prindistiilide tabeliga; lehe seadistamise haldurit pole.
- **DIMSTYLE** ja **PEDIT** on valmis; **PEDIT**-il pole tippude muutmise suvandit (selle teevad käepidemed).
- **TABLE** pole valmis; {{cmd:XREF}}, {{cmd:SPLINE}} ja {{cmd:WBLOCK}} on valmis.
- Rutiini enda käsud (AutoLISP `C:NAME`) ilmuvad pärast laadimist käsuga {{cmd:APPLOAD}}; neid siin ei loetleta.

## Kõik käsud (398)

| Käsk | Lühikäsud | Mida teeb |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Pöörab 3D-vaadet vasaku nupuga |
| `ACCESS` | `AX` | Lülitab pimedale joonestamisele sisse või välja: tulemused loetakse ette ekraanilugeja kaudu, joonisel on klaviatuuri kursor, haakumise helid ja häälkäsud. |
| `ALIASEDIT` |  | Muudab käsu lühikäske ühes tekstifailis (tuttav formaat L, *LINE) |
| `ALIGN` | `AL` | Teisaldab ja pöörab objekte nii, et lähtepunktid satuvad sihtpunktidele (üks, kaks või kolm paari), vajadusel muudab ka mõõtkava |
| `ALIGNPANEL` | `ALP` | Avab paneeli Joonda ja jaota |
| `ALIGNTO` |  | Joondab valitud objektide vasaku, keskmise, parema, ülemise, keskmise või alumise serva valikule, esimesele või viimasele valitud objektile või punktile |
| `ANNOALLVISIBLE` | `ANNOALL` | Näitab annotatiivseid objekte igal mõõtkaval või ainult seal, kus vaateakna (või joonise) mõõtkava on nende loendis |
| `ANNOSCALE` | `CANNOSCALE` | Määrab joonise annotatsioonimõõtkava: annotatiivne tekst ja mõõdud muudetakse nii, et need prinditakse samas suuruses |
| `APPLOAD` | `AP` | Laadib rakendusi: LISP-rutiine (.lsp) ja nende dialoogifaile (.dcl); käivitussviit (AP) |
| `ARC` | `A` | Kaar: 3 punktiga, Algus/Keskpunkt/Lõpp, Algus/Keskpunkt/Nurk, Algus/Keskpunkt/Pikkus, Algus/Lõpp/Nurk, Algus/Lõpp/Suund, Algus/Lõpp/Raadius, Keskpunkt/Algus/Lõpp, Keskpunkt/Algus/Nurk, Keskpunkt/Algus/Pikkus, Jätka |
| `AREA` | `AA` | Pindala ja ümbermõõt punktide või objekti järgi; Lisa ja Lahuta hoiavad jooksvat summat (AA) |
| `ARRAY` | `AR` | Koopiad ridadena ja veergudena või ümber keskpunkti (AR) |
| `ARRAYASSOCIATIVITY` |  | Määrab, kas ARRAY-käsud loovad massiive, mida saab veel muuta (1), või lihtsad koopiad (0) |
| `ARRAYCLOSE` |  | Lõpetab massiivi lähteobjektide muutmise |
| `ARRAYEDIT` |  | Muudab assotsiatiivse suvandiga tehtud massiivi: arvud, vahed, lähteobjektid, üks element |
| `ARRAYPATH` |  | Objektide koopiad mööda joont, kaart, murdjoont või muud kõverat |
| `ARRAYPOLAR` |  | Koopiad ümber keskpunkti |
| `ARRAYRECT` |  | Koopiad ridadena ja veergudena |
| `ASBUILT` | `ASB` | ASBUILT loeb meeskonna mõõdetud tegelike punktide faili (CSV / TXT, nagu EXPORTPOINTS kirjutab) ja võrdleb neid joonise punktidega: taluvuse piires või väljaspool, mõõtmata, lisapunktid. Märgib need kihile AS-BUILT ja laadib alla CSV-aruande. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Määrab atribuudi (sildi, mille eest plokk küsib väärtuse), mis lisatakse plokki (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Muudab ploki viite atribuudiväärtusi käsurealt ükshaaval (Enter jätab väärtuse alles) |
| `ATTSYNC` |  | Viib ploki viited vastavusse nende atribuudi määratlustega: uued lisatakse vaikeväärtustega, eemaldatud kustutatakse, asukohad ja tekst lähtestatakse; väärtused jäävad alles |
| `AUDIT` |  | Kontrollib avatud joonist kahjustuste suhtes: lõpmatud arvud, objektid ilma suuruseta, puuduvad kihid, plokid, stiilid ja joonetüübid, endi sisaldavad plokid, jagatud ID-d, katkised mõõdud ja viirutused. Loetleb leitud vead liigi järgi ja küsib enne parandamist; parandus on üks tagasivõtmise samm. |
| `AUNITS` | `ANGUNITS` | Kuidas nurgad kuvatakse ja sisestatakse: kümnendkraadid, kraadid-minutid-sekundid või suunad nagu N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Joonise automaatlõpetamine sisse või välja, või loetle, mida joonise mustrid praegu soovitavad. |
| `AUTOCONSTRAIN` |  | Lisab ühtelangevuse, horisontaalsuse ja vertikaalsuse piirangud seal, kus geomeetria on juba lähedal |
| `AUTODIM` | `ADIM` | Mõõdab reeglite järgi: üldmõõdud, ahelad külgede kaupa, avad, augu läbimõõdud ja võrgu vahed, ilma et juba mõõdetut korduks. |
| `AUTOSHEET` | `ASH` | Paigutab lehed ise: valib paberi ja tavalised mõõtkavad ning paigutab iga vaate pealkirja ja tiitelplokiga. |
| `BATTMAN` |  | Plokiatribuutide haldur: ploki atribuutide järjestus, sildid, küsimused, vaikeväärtused ja režiimid, seejärel uuendatakse ploki viited |
| `BCLOSE` |  | Sulgeb plokiredaktori: salvestab ploki või loobub muudatustest |
| `BCONVERT` |  | BCONVERT leiab korduva geomeetria ja muudab selle plokiviideteks. Vali korduvad objektid: leitakse kõik teised avatud ruumi objektide komplektid, mis on sama geomeetria, teisaldatud ja pööratud suvalise nurga all; peegeldatud või mõõtkava muutmise suvandiga leitakse ka peegelpildid ja teise suurusega koopiad. Anna uuele plokile nimi ja baaspunkt; valik ja iga koopia muutuvad selle viideteks, igaüks oma pöörde ja mõõtkavaga. Või vali Plokk ja nimeta olemasolev plokk, et leida selle objektide hajutatud koopiad. Koopia peab olema sama kihi, värvi, joontüübi ja joonepaksusega, kui Omadused pole seatud väärtusele Ignore. Lukustatud kihtidel olevaid objekte ei puudutata. Üks tagasivõtmise samm. |
| `BEDIT` | `BE` | Plokiredaktor: muudab ploki objekte ja atribuute; BCLOSE salvestab (BE) |
| `BLEND` |  | BLEND: splain kahe avatud kõvera otste vahel, mis valitakse otste lähedalt ühendamiseks. CONtinuity: Tangent järgib mõlemat suunda, Smooth järgib ka painutust. |
| `BLOCK` | `B`, `BMAKE` | Teeb objektidest ploki (need muutuvad üheks viiteks) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: iga ühe ploki viide muutub teise ploki viideks samas kohas, samas mõõtkavas ja pöördes. Mõlemas plokis olevate atribuutide väärtused jäävad alles. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE näitab paneeli Plokid koos kursoriga filtri väljal. Paneel näitab iga ploki pilti (viimati paigutatud esimesena), loendina või ruudustikuna; klõpsa pildil või lohista see joonisele, et paigutada plokk käsuga INSERT. Jaotises Teegid lisa oma DWG- või DXF-fail: selle plokid kuvatakse piltidega ja kopeeritakse sellesse joonisesse, kui üks paigutatakse. CadCraft Studios saab lisada ka joonistega kausta; failid ja kaustad jäetakse meelde. |
| `BOMEDIT` | `BOMCOLUMNS` | Materjaliloendi tabeli veerud, rühmitamine, sortimine, pealkiri, summad ja märkused |
| `BOMEXPORT` |  | Salvestab materjaliloendi tabeli .csv-failina |
| `BOMTABLE` | `BOM` | Ühe tsooni või kogu joonise elav materjaliloendi tabel |
| `BOMUPDATE` |  | Uuendab kõiki materjaliloendi tabeleid kohe, ka külmutatuid |
| `BOMZONE` | `BZONE` | Joonise nimega ala materjaliloendi jaoks: kaks nurka, hulknurk või suletud objekti kontuur |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): vali punkt suletud ala sees ja saad selle ümber suletud murdjoone. Kaared jäävad kaarteks. Saared kontureerib ka seal olevad alad. |
| `BOX` |  | Kast: kaks nurka ja kõrgus (3D) |
| `BPARAMETER` | `BPARAM` | Pole veel valmis: parameetri (nt Nähtavus) lisamine plokile. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Plokiparameetrid: nimega parameetrid valemitega ja mitu nähtavuse parameetrit ühes plokis. Töötab plokiredaktoris (määra valitud objektid olekule) ja valitud viitel (selle enda väärtused ja olekud). |
| `BREAK` | `BR` | Katkestab joone, kaare, ringi või murdjoone kahe punkti vahel (BR) |
| `BREAKATPOINT` |  | Jagab joone, kaare või murdjoone punktis kaheks |
| `BREAKLINE` |  | Joonistab katkestussümboliga joone; selle suurus ja otstest väljaulatuvus jäetakse meelde. |
| `BREPLACE` |  | BREPLACE vahetab ühe ploki teise vastu. Valitud: vali plokiviited ja nimeta kasutatav plokk. Kõik: nimeta plokk ja selle asendaja, ning iga viide igas ruumis ja teiste plokkide sees muutub. Viide säilitab oma koha, mõõtkava, pöörde ja kihi ning mõlemas plokis olevate atribuutide väärtused; väärtused, millele uues plokis kohta pole, kustutatakse ja nimetatakse. |
| `BSEARCH` |  | BSEARCH otsib plokke. Nimi: osa ploki nimest või muster tärnide ja küsimärkidega. Atribuut: väärtus (või TAG=väärtus), mida viite atribuudid sisaldavad. Geomeetria: vali objektid või üks plokiviide, siis loetletakse plokid, mille kuju on vähemalt 85% sarnane, parim esimesena; suurus, pööre ja peegeldus ei lähe arvesse. Avatud ruumis leitud viited valitakse järgmiseks käsuks. |
| `BURST` |  | Lahutab plokiviited ja säilitab atribuutide sisu: iga väärtus muutub tekstiks atribuudi kihil. |
| `BVHIDE` | `BVH` | Plokiredaktoris: peida objektid praegusest nähtavusolekust. |
| `BVSHOW` | `BVSH` | Plokiredaktoris: näita objekte, mida praegune nähtavusolek peidab (need kuvatakse tuhmina, et neid saaks valida). |
| `BVSTATE` | `BVS` | Plokiredaktoris, nähtavusolekutega plokil: lülitu olekule või lisa, nimeta ümber või kustuta üks. |
| `CAL` |  | Arvutab pikkuse või arvu: + − * / ja sulud, nii nagu kirjutad need kuhu iganes |
| `CENTERLINE` | `CL` | Keskjoon kahe joone vahel: nende keskel või poolitajal, kui need kohtuvad (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Keskmärk: rist ringi või kaare keskel, keskjoontega natuke sellest kaugemale (CM) |
| `CHAMFER` | `CHA` | Lõikab nurga kahe joone vahel (D kaks kaugust, A pikkus ja nurk, P murdjoone iga nurk) |
| `CHSPACE` |  | CHSPACE: teisaldab objekte lehe ja mudeli vahel vaateakna kaudu. Need skaleeritakse ja pööratakse nii, et nad näevad teiselt poolt samasugused. Lehel lähevad need mudelisse; kui töötad vaateakna kaudu (MSPACE), tulevad need lehele. |
| `CIRCLE` | `C` | Keskpunkt ja raadius, läbimõõt, 2 või 3 punkti |
| `CLASS` |  | Paneb valitud objektid klassi või määrab ilma valikuta aktiivse klassi (? loetleb need) |
| `CLASSES` | `CLS` | Klasside paneel: klassid järjestavad objekte kihtide üle; näita, peida ja vormi neid ning määra igale vaateaknale eraldi (CLS) |
| `COMMANDLINE` | `CMDLINE` | Kinnita või tee käsurida hõljuvaks, muuda üherealiseks, määra ajaloo read või ava ajalugu (F2) |
| `COMPARESETTINGS` | `CMPSET` | Võrdleb mõõdustiile, teksti stiile, kihte, lehti või ühikuid: kaks selles joonises või see joonis teise avatud joonisega; ja kopeerib väärtuse üle. |
| `CONSTRAINTBAR` | `CBAR` | Näita või peida piirangubaarid (Showall / Hideall või objektide kaupa) |
| `COPY` | `CO`, `CP` | Kopeerib objekte nii mitu korda, kui klõpsad |
| `COPYBASE` |  | Kopeerib objektid lõikelauale valitud baaspunktiga |
| `COPYCLIP` |  | Kopeerib objektid lõikelauale (Ctrl+C); PASTECLIP paigutab need |
| `COUNT` | `BCOUNT` | Loeb plokiviiteid: vali üks, et valida ja lugeda kõik selle ploki viited |
| `COUNTTABLE` |  | Paigutab plokkide arvude tabeli |
| `CREDITS` |  | Paneb teegi autorluse joonisele tabelina. Käivita uuesti, et tabel uuendada praegustest joonise objektidest. |
| `CURSORSIZE` |  | Ristkursori suurus: 100 käib üle kogu joonise servast servani (Sätted › Kursor › Täisekraan) |
| `CUTCLIP` |  | Lõikab objektid lõikelauale (Ctrl+X): kopeeri, seejärel kustuta |
| `CYLINDER` | `CYL` | Silinder: keskpunkt, raadius ja kõrgus (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Loetleb plokid, nende atribuudid ja objektide omadused tabelina joonisel või CSV-failina |
| `DATALINK` | `DL` | Tabel CSV-failist, mis mäletab faili, nii et seda saab uuesti lugeda |
| `DATALINKUPDATE` | `DLU` | Loeb andmeseose faili uuesti ja täidab tabelid uuesti |
| `DCALIGNED` | `DCALI` | Mõõtmispiirang: tõeline kaugus punktide, punkti ja joone või kahe joone vahel |
| `DCANGULAR` | `DCANG` | Mõõtmispiirang: nurk kahe joone vahel või kaare nurk |
| `DCCONVERT` |  | Muudab piiratavale geomeetriale joonistatud mõõdud mõõtmispiirangutks |
| `DCDIAMETER` | `DCDIA` | Mõõtmispiirang: ringi või kaare läbimõõt |
| `DCDISPLAY` |  | Näitab või peidab mõõtmispiirangud joonisel |
| `DCHORIZONTAL` | `DCHOR` | Mõõtmispiirang: horisontaalne kaugus |
| `DCLINEAR` | `DCLIN` | Mõõtmispiirang: horisontaalne või vertikaalne kaugus sellest kohast, kuhu selle paigutad |
| `DCRADIUS` | `DCRAD` | Mõõtmispiirang: ringi või kaare raadius |
| `DCVERTICAL` | `DCVER` | Mõõtmispiirang: vertikaalne kaugus |
| `DELBLOCKS` |  | Kustutab plokid: iga viite (ka sisemised, igal lehel) ja definitsioonid |
| `DELCONSTRAINT` | `DELCON` | Eemaldab kõik piirangud (geomeetrilised ja mõõtmispiirangud) valitud objektidelt |
| `DELOPENING` |  | Eemaldab ukse või akna seinast. |
| `DESCRIBE` | `DESC` | Ütleb, mida joonis sisaldab: mitu objekti, mis liiki, kui suured ja mis on valitud. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Tühjendab valiku (Esc) |
| `DETAILS` | `DET` | Teie ettevõtte enda detailid, leitud joonistatava järgi: otsi, lisa plokk, loetle, eemalda, lülita pakkumised sisse või välja. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Joonistab diagrammi tekstist: Mermaid-voodiagrammi, PlantUML-komponentdiagrammi, D2, alguspunktist lõpp-punkti nimekirja või draw.io XML-i, muudetavate plokkide ja ühenduskujunditena |
| `DIMALIGNED` | `DAL`, `DIMALI` | Tõeline kaugus kahe punkti vahel |
| `DIMANGULAR` | `DAN`, `DIMANG` | Nurk kahe joone vahel, kaare nurk või kolme punktiga |
| `DIMARC` | `DAR` | Kaarepikkuse mõõt: kaare pikkus kaare sümboliga (DAR) |
| `DIMASZ` |  | Mõõtmise seade: noole suurus |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Mõõdud ühest baasjoonest pinutud |
| `DIMBREAK` | `DBREAK` | Katkestab mõõtejooned ja abijooned seal, kus need ristuvad teiste objektidega (Auto), kahe punkti vahel (Manual), või eemaldab katkestused |
| `DIMCONSTRAINT` | `DCON` | Mõõtmispiirangud: lineaarne, joondatud, nurk, raadius, läbimõõt, teisendamine |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Mõõtude ahel, igaüks eelmise lõpust |
| `DIMDEC` |  | Mõõtmise seade: kümnendkohad |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Kaare või ringi läbimõõt |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Vabastab mõõdud objektidest, kuhu need on seotud (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Muudab mõõdu teksti (Home, New text, Rotate) või kaldutab abijooni (Oblique) |
| `DIMEXE` |  | Mõõtmise seade: ulatus mõõtejoonest kaugemale |
| `DIMEXO` |  | Mõõtmise seade: nihe lähtepunktist |
| `DIMGAP` |  | Mõõtmise seade: vahe teksti ümber |
| `DIMINSPECT` |  | Kontrollmõõt: raam väärtuse ümber koos sildi ja sellega, kui sageli detaili kontrollitakse |
| `DIMJOGGED` | `DJO`, `JOG` | Murdunud raadiuse mõõt: raadius joonistatakse lähemalt punktist, kui keskpunkt on kaugel (DJO) |
| `DIMJOGLINE` | `DJL` | Lisab lineaarse või joondatud mõõtejoone murdesümboli, et näidata, et kaugus pole joonistatud mõõtkavas (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horisontaalne või vertikaalne kaugus (R suvalise nurga jaoks) |
| `DIMLUNIT` |  | Mõõtmise seade: pikkuse vorming (1 teaduslik, 2 kümnendarv, 3 inseneri-, 4 arhitektuuri-, 5 murdarv) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinaatmõõt: punkti X- või Y-kaugus UCS-i lähtepunktist, juhtjoonel (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Tühistab valitud mõõtmete mõõtmemuutujad ilma stiili muutmata; Clear taastab stiili (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Kaare või ringi raadius |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Seob mõõdu punktid objektidega, nii et see järgib ja mõõdab uuesti, kui need liiguvad (DRE) |
| `DIMSCALE` |  | Mõõtmise seade: üldine mõõtkava (suurused × see) |
| `DIMSPACE` |  | Paralleelsete mõõtude võrdne vahe, mõõdetuna baasmõõdust (0 joondab, Auto on kaks korda teksti kõrgus) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Loo, muuda, määra praegune, kustuta, rakenda ja võrdle nimega mõõdustiile (dialoog; -DIMSTYLE käsurealt) |
| `DIMTEDIT` | `DIMTED` | Teisaldab mõõdu teksti mõõtejoone vasakule, paremale või keskele või pöörab seda |
| `DIMTEXTUNIT` | `DTU` | Mõõdu tekst mm, cm, m või km või joonise enda ühikutes: valitud mõõdud, muidu uued (DTU) |
| `DIMTXT` |  | Mõõtmise seade: teksti kõrgus |
| `DIST` | `DI` | Kaugus ja nurk kahe punkti vahel |
| `DISTRIBUTE` |  | Jaotab valitud objektid ühtlaselt küljelt küljele või üles-alla: võrdsed sammud keskpunktide vahel või võrdsed vahed; kaks välimist jäävad paigale |
| `DIVIDE` | `DIV` | DIVIDE (DIV): märgid, mis jagavad joone, kaare, ringi, murdjoone, splaini või ellipsi võrdseteks osadeks. Punktid või Plokk korral plokk igal märgil. |
| `DOCUMENTS` | `DOCS` | Avab dokumentide paneeli: võta joonised välja ja tagasi, versioonid, väljalaske olekud ja kinnitus projektikausta jaoks |
| `DOOR` | `DR` | Paigutab ukse seina. Pool, kuhu klõpsad, on see, kuhu uks avaneb. |
| `DRAWORDER` |  | Muudab joonistamise järjekorda: too objektid ette, saada taha või aseta teiste objektide kohale või alla. |
| `DUPLICATE` | `DUP` | Koopia, mis liigub koos kursoriga: klõpsa, et see paigutada (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Joonise omadused: pealkiri, autor ja muu, ning sinu enda nime- ja väärtuspaarid |
| `DXFOUT` |  | Laadib joonise alla DXF R12-na (Salvesta säilitab oma vormingu) |
| `EATTEDIT` | `DDATTE` | Muudab ploki viite atribuute: väärtusi, teksti ja omadusi, üks atribuut korraga |
| `ELLIPSE` | `EL` | Telje lõpp-punktid ja teine poolvõll |
| `ERASE` | `E`, `DELETE` | Eemaldab objektid |
| `EXPLODE` | `X` | Lahutab murdjooned, plokid ja mõõdud osadeks |
| `EXPORT` | `EXP` | Salvestab joonise koopia failitüübis, mida lisamoodul kirjutab |
| `EXPORT3D` | `3DEXPORT` | Ekspordib 3D-mudeli: GLB, OBJ või STL |
| `EXPORTPOINTS` | `EXPPTS` | Kirjutab punktid ja blokkide sisestuspunktid ühe atribuudiga kirjelduseks CSV- või TXT-faili (PNEZD, PENZD või XYZ) BIM- ja mõõdistusprogrammidele |
| `EXTEND` | `EX` | Pikendab objekte, et need teistega kohtuksid: klõpsa otsa lähedal, lohista mitme kaudu või Shift+klõps lõikamiseks |
| `EXTRIM` |  | EXTRIM: vali üks lõikeserv ja siis külg. Kõik, mis servaga ristub, lõigatakse sellel küljel. Osad, mis kaoksid, näidatakse kursorit liigutades. |
| `EXTRUDE` | `EXT` | Väljapressib suletud 2D-objektid tahkisteks (3D) |
| `FIELD` |  | Paigutab välja teksti, tabeli lahtrisse või atribuuti: kuupäev, faili nimi, lehe number, joonise omadus, objekti pindala või pikkus või valem |
| `FILLET` | `F` | Ümardab või ruudustab nurga kahe objekti vahel (R raadius, P murdjoone iga nurk, M mitu) |
| `FIND` |  | Otsib ja asendab sõnu tekstis, atribuutide väärtustes ja mõõdu tekstis |
| `FLATTEN` |  | Määrab valitud objektide kõrguse (Z) ja paksuse 0-ks, ka nende kasutatud plokkides. |
| `FLOOR` |  | Vali põrand, millele joonistada, lisa üks või teisalda või kopeeri valik sinna. |
| `FLOORLAYERS` |  | Muudab põrandad kihtideks nimega Floor-Layer, faili jaoks, mis läheb kellelegi ilma põrandateta. |
| `FLOORS` | `FLR` | Avab põrandate paneeli: laota põrandad ühte mudeliruumi. |
| `GCCOINCIDENT` |  | Piirang: kaks punkti kohtuvad või punkt jääb objektile |
| `GCCOLLINEAR` |  | Piirang: kaks joont jäävad ühele joonele |
| `GCCONCENTRIC` |  | Piirang: kaks ringi või kaart jagavad keskpunkti |
| `GCEQUAL` |  | Piirang: kaks joont jäävad sama pikkuseks või kaks ringi või kaart sama raadiuseks |
| `GCFIX` |  | Piirang: punkt või terve objekt jääb sinna, kus on |
| `GCHORIZONTAL` |  | Piirang: joon (või kaks punkti) jääb horisontaalseks |
| `GCPARALLEL` |  | Piirang: kaks joont jäävad paralleelseks |
| `GCPERPENDICULAR` |  | Piirang: kaks joont jäävad täisnurga alla |
| `GCSYMMETRIC` |  | Piirang: kaks punkti, joont või ringi peegelduvad üksteise suhtes joone kaudu |
| `GCTANGENT` |  | Piirang: joon ja ring või kaar (või kaks neist) jäävad puutujaks |
| `GCVERTICAL` |  | Piirang: joon (või kaks punkti) jääb vertikaalseks |
| `GDSIN` | `GDS` | Vaatab IC-paigutust (GDSII-voogfail): iga kiht ja andmetüüp joonistuskihina, tasaselt, kasutajaühikutes; ainult vaatamiseks ja mõõtmiseks (labor) |
| `GEOMCONSTRAINT` | `GCON` | Geomeetrilised piirangud: horisontaalne, vertikaalne, paralleelne, puutuja, ühtlangev jne |
| `GLBOUT` |  | Ekspordib 3D-mudeli GLB-na (glTF) |
| `GRADIENT` | `GD` | Täidab ala ühe või kahe värvi gradiendiga |
| `GRIDMOVE` | `GM` | Teisaldab võrgujoont ja viib kaasa sellest rippuva: seinad venivad, sambad, mullid ja sildid liiguvad, mõõdud järgivad. |
| `GROUP` | `G` | GROUP (G): anna valitud objektidele ühine nimi. Klõps ühel neist valib siis kõik. Enter nime juures loob nimeta rühma. |
| `GROUPEDIT` |  | GROUPEDIT: muuda rühma. Vali üks selle objektidest või anna nimi, siis Add või Remove objektid, REName nimeta ümber, muuda kirjeldust või määra, kas klõps valib selle tervikuna. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Täidab ala tahke täite või mustriga: klõpsa selle sees või vali suletud objektid (H) |
| `HATCHEDIT` | `HE` | Muudab viirutust: muster, mõõtkava, nurk, lähtepunkt ja seos piirjoonega. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Teeb viirutusest uuesti piirjoonte murdjooned, seotud või mitte |
| `HATCHTOBACK` |  | Saadab kõik viirutused kõige taha. |
| `HELP` | `?` | See loend |
| `HIDEOBJECTS` |  | Peidab valitud objektid kuni UNISOLATEOBJECTS. Ei salvestu joonisega. |
| `HISTORY` | `HIST` | HISTORY (HIST): selle joonise versioonid (koopiad, mis hoitakse selles arvutis, kui Studio salvestab, ja pilve versioonid), avamiseks, taastamiseks ja võrdlemiseks, muudatused värviga. |
| `ID` |  | Punkti koordinaadid |
| `IMAGE` | `IM` | Annab CadCraftile pildifailid, mida joonis kasutab (DWG salvestab ainult, kus need olid). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Paigutab pildi (PNG või JPEG) failist. |
| `IMAGECLIP` | `ICL` | Lõikab pildi ristkülikuks või hulknurgaks või eemaldab lõike. |
| `IMPORT` | `IMP` | Impordib lisamooduli loetava tüübi faili sellesse joonisesse |
| `INSERT` | `I`, `DDINSERT` | Paigutab ploki (S mõõtkava, R pööra); F DWG/DXF-failist, L teegist |
| `INTERSECT` | `IN` | Jätab alles ainult selle, mis tahkistel on ühist (3D), või ala, mis 2D-piirkondadel on ühine |
| `ISODRAFT` |  | ISODRAFT: isomeetriline joonestamine sisse või välja või otse vasakule, ülemisele või paremale tasapinnale. Kui see on sees, järgivad Orto ja polaarjälgimine tasapinna kahte telge, võrk joonistatakse isomeetriliselt ja ELLIPSE-l on Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Näitab ainult valitud objekte; kõik muu selles ruumis on peidetud kuni UNISOLATEOBJECTS. Ei salvestu joonisega. |
| `ISOPLANE` |  | ISOPLANE: vali isomeetriline tasapind, millele joonistada: vasak, ülemine või parem. Enter läheb järgmisele, nagu F5 teeb isomeetrilise joonestamise ajal. |
| `JOIN` | `J` | Ühendab otsast otsa kokkupuutuvad jooned, kaared ja murdjooned üheks murdjooneks; ühel joonel olevad jooned üheks joooneks (J) |
| `LASER` | `LASERCUT` | Avab laseripaneeli: saadab kihid laserlõikurile või graveerijale (GRBL G-kood) |
| `LASSOMODE` |  | Vajutamine ja lohistamine joonistab lasso (1) või ristküliku (0) |
| `LAYDEL` |  | Kustutab kihi ja kõik sellel olevad objektid (mudelis, lehtedel ja plokkides) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Avab kihihalduri: kõik kihid ühes tabelis |
| `LAYERPANEL` |  | Näitab kihtide paneeli |
| `LAYFRZ` |  | Külmutab iga valitud objekti kihi |
| `LAYGROUP` | `LG` | Rühmitab kihid kaustadeks kihtide paneelis. |
| `LAYISO` |  | Isoleerib valitud objektide kihid (kõik teised kihid välja) |
| `LAYLOCKFADE` |  | Määrab, kui palju lukustatud kihtidel olevad objektid tuhmuvad ja kas klõps saab need valida. |
| `LAYMCUR` |  | Teeb valitud objekti kihi praeguseks |
| `LAYMRG` |  | Ühendab kihid: nende objektid teisalduvad sihtkihile ja ühendatud kihid kaovad |
| `LAYOFF` |  | Lülitab välja iga valitud objekti kihi |
| `LAYON` |  | Lülitab kõik kihid sisse |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Uus leht tiitelplokiga ja vaateaknaga |
| `LAYTHW` |  | Sulatab kõik kihid |
| `LAYUNISO` |  | Lülitab uuesti sisse kihid, mille LAYISO välja lülitas |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Teisendab vanade vietnami fontidega kirjutatud teksti (TCVN3 / ABC fondid, nagu .VnTime, ja VNI fondid, nagu VNI-Times) Unicode'iks. Selline tekst kuvatakse juba loetavalt; see kirjutab selle lõplikult ümber, koos loenduse ja ühe tagasivõtmise sammuga. |
| `LENGTHEN` | `LEN` | Pikendab või lühendab jooni, kaari ja murdjooni: summa, protsendi, kogupikkuse järgi või lohistades (LEN) |
| `LIBRARY` | `LIB` | Teegi paneel: paiguta üksusi, kontrolli uuendusi, autorlus |
| `LIMITS` |  | Määrab joonise piirid: ON, OFF või alumine vasak ja ülemine parem nurk. Piiride ON-režiimis lükatakse väljaspool olevad punktid tagasi |
| `LINE` | `L` | Sirged lõigud, igaüks oma objektina |
| `LINETYPE` | `LT`, `CELTYPE` | Joontüüp, mida uued objektid saavad (kihi, ploki või nimetatud järgi) |
| `LINKVIEWS` | `SYNCVIEWS` | Liigutab ja suumib kõiki paane koos (jagatud ekraan), et võrrelda kahte joonist või versiooni |
| `LISPEDIT` | `VLIDE` | LISPEDIT (või VLIDE) avab LISP-redaktori: akna rutiini kirjutamiseks, laadimiseks ja proovimiseks. Laadimine joonisele loeb iga vormi nagu failiga APPLOAD ja loob selle käsud. Käivita valik hindab valitud vorme või kursori kohal olevat vormi. Konsool näitab, mida rutiin printis, ja iga vea koos reaga. Sulgur märgitakse kirjutamise ajal ja Enter taandab uue rea. New, Open ja Save töötavad .lsp-failiga. Teksti kõrval olevad loendid näitavad funktsioone, mida rutiin määratleb, neid, mida see kutsub ja mida see LISP veel ei oma, ning kõiki selle funktsioone. Aken ei blokeeri joonist, nii et rutiin võib küsida punkte; Stop või Esc lõpetab töötava rutiini. |
| `LIST` | `LI`, `LS` | Kirjeldab objekte ajaloos |
| `LTSCALE` | `LTS` | Joonise joontüübi mõõtkava (iga kriips ja vahe korrutatakse sellega) |
| `LWDISPLAY` | `LWT` | Näitab või peidab joonepaksused ekraanil (LWT-nupp olekuribal) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Joonepaksus, mida uued objektid saavad (kihi, ploki, vaikimisi või mm järgi) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Kaardikihid mudeliruumi all: joonise koordinaatsüsteem, plaadid, WMS, WMTS, ArcGIS, pildid |
| `MASSPROP` |  | MASSPROP: piirkondade ja suletud objektide lõiguomadused: pindala, ümbermõõt, raskuskese, momendid ja inertsitsentrifugaalmoment, inertsiraadiused ja peatelgede suunad. Täpne joontele ja kaartele. Aruande saab kirjutada tekstifaili. |
| `MATCHPROP` | `MA`, `PAINTER` | Sobita omadused: kopeerib ühe objekti kihi, värvi ja muu teistele (MA) |
| `MEASURE` | `ME` | MEASURE (ME): märk iga antud pikkuse järel joone, kaare, ringi, murdjoone, splaini või ellipsi kaudu, alates valiku lähimast otsast. Punktid või Plokk korral plokk igal märgil. |
| `MEASUREGEOM` | `MEA` | Mõõdab kaugust, raadiust, nurka või pindala (MEA) |
| `MINSERT` |  | MINSERT: paigutab ploki ühe korraga ridadena ja veergudena. Iga on oma viide, nii et saad igaüht teisaldada või kustutada. |
| `MIRROR` | `MI` | Peegeldab objekte joone suhtes |
| `MLEADER` | `MLD`, `MLEAD` | Mitmeviiktekst: nool, viiktekst ja märkus ühe objektina (MLD) |
| `MLEADERALIGN` | `MLA` | Joondab mitmeviiktekstid ühega neist ühes suunas, võrdsel vahel või jaotatuna kahe punkti vahel (MLA) |
| `MLEADERCOLLECT` | `MLC` | Koondab mitu mitmeviiktekst üheks: nende plokid reas või veerus või märkused üksteise all (MLC) |
| `MLEADEREDIT` | `MLE` | Lisab mitmeviiktekstile viikjooni või eemaldab need; vahetab sisu teksti ja ploki vahel (MLE) |
| `MLINE` |  | Joonistab paralleelseid jooni koos, nurkades ühendatult. |
| `MOVE` | `M` | Teisaldab objekte baaspunkti ja teise punkti järgi |
| `MSPACE` | `MS` | Töötab mudelis avatud lehe vaateakna kaudu (või topeltklõps vaateaknas). |
| `MTEXT` | `MT`, `T` | Lõiguga tekst: lohista laiust, siis kirjuta kohapeal; Enter alustab uut lõiku (T) |
| `MVIEW` | `MV` | Vaateaken mudelile lehel |
| `NAMEDVIEW` | `NV`, `VIEWS` | Nimega vaated: salvesta ekraanivaade (või aken) nime all ja mine sinna tagasi (NV) |
| `NCOPY` |  | Kopeerib objekte plokiviitest või seotud joonisest joonisesse, lahutamata seda. |
| `NEARBY` |  | Ütleb, mis asub kursori lähedal, lähimad esimesena, koos kauguse ja küljega. |
| `NEW` |  | Alusta uut joonist |
| `OBJECTSCALE` | `OBJSCALE` | Annotatiivse teksti ja mõõtude annotatsioonimõõtkavad: lisa mõõtkava, kustuta üks, lisa praegune mõõtkava või loetle need (iga vaateaken näitab neid oma mõõtkava suuruses) |
| `OBJOUT` |  | Ekspordib 3D-mudeli OBJ-na |
| `OFFSET` | `O` | Paralleelkoopiad kindlal kaugusel (O) |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: kuidas OFFSET sulgeb lüngad murdjoone välisnurkades. 0 pikendab lõike, 1 lisab kaare, 2 lisab sirge lõike. Jääb selle seansi jaoks. |
| `OLELIST` | `OLES` | Loetleb joonise OLE-objektid ja paneb ühe pildi koopia sinna, kuhu valid |
| `OPEN` |  | Avab DWG- või DXF-faili sellest arvutist |
| `OPENIN3D` |  | Avab selle joonise 3D-modelleerimisrakenduses uuel vahelehel (midagi ei laadita üles) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Avab objektihaakide menüü: vali, millised haakid on sees. Samuti parem klõps olekuribal olevale Haak-nupule. |
| `OVERKILL` |  | Kustutab topeltobjektid ja ühendab kattuvad või otsast otsa jooned ja kaared määratud täpsuse piires. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parameetrite paneel: kasutajaparameetrid ja mõõtmispiirangud ühes tabelis |
| `PARTSLIST` | `PLIST` | Osade loendi tabel iga Teegist paigutatud standardosa ja terasprofiili kohta |
| `PASTEAREA` | `PAREA` | Kleebib MarkupCraftis kopeeritud ala (Kopeeri ala) selle õiges suuruses pildina. |
| `PASTEBLOCK` |  | PASTEBLOCK: kleebib selle, mida kopeerisid, ühe plokina. Plokil on oma nimi; RENAME annab sinu nime. |
| `PASTECLIP` |  | Kleebib lõikelaua: see järgib kursorit, klõpsa, kuhu see läheb (Ctrl+V) |
| `PASTEORIG` |  | Kleebib lõikelaua koordinaatidesse, kust see kopeeriti (Ctrl+Shift+V) |
| `PDF` |  | Annab CadCraftile PDF-failid, mida joonise alusjoonised kasutavad |
| `PDFADJUST` |  | Tuhmistab, kontrastsustab, muudab monokroomseks või lülitab PDF-alusjoonise välja |
| `PDFATTACH` | `PDFATT` | Lisab PDF-lehe alusjoonisena (PDFATTACH) |
| `PDFCLIP` |  | Lõikab PDF-alusjoonise ristkülikuks või hulknurgaks |
| `PDFIMPORT` | `PDFIM` | Muudab PDF-lehe jooned, täited ja teksti joonise objektideks (PDFIMPORT) |
| `PDFLAYERS` |  | Lülitab PDF-alusjoonise kihid sisse või välja |
| `PEDIT` | `PE` | Muudab murdjoont: sulge, ava, ühenda, laius, sobita kõver, splainkõver, sirgenda, joontüübi genereerimine, pööra; jooni, kaari ja splaine saab teha murdjoonteks |
| `PHOTOSKETCH` | `PSK` | Muudab paberil oleva käsitsi visandi foto jooneteks ja kaareteks mõõtkavas, sirgendades perspektiivi ja andes iga pliiatsivärvile oma kihi. |
| `PICKSTYLE` |  | PICKSTYLE: kas rühma ühe objekti valimine valib kogu rühma (1, algseade) või ainult selle objekti (0). Jääb selle seansi jaoks. |
| `PLAN` |  | Pöörab vaate nii, et UCS X-telg (praegune ucs, salvestatud Ucs või World) on ekraanil tasane. Joonises midagi ei liigu. |
| `PLINE` | `PL` | Joon- ja kaaslõikudest koosnev murdjoon |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Prindib PDF-iks: leht või mudel mõõtkavas |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Prindistiilide tabelid: määra, mida iga värv prindib (värv, must, hall, tint, joonepaksus); hoitakse joonisega (STYLESMANAGER) |
| `POINT` | `PO` | Punktiobjektid |
| `POINTCLOUD` | `PC` | Lisatud punktipilv: lõik, kõrgus, paksus, värv, suurus, nähtav, suum, eemalda |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Lisab punktipilve (LAS, LAZ, XYZ, PTS) joonise alla |
| `POLARANG` |  | Polaarjälgimise samm kraadides (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Korrapärane hulknurk |
| `PRESSPULL` |  | Lükkab või tõmbab tahkise tahku (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Avab omaduste paneeli (ka Ctrl+1 või topeltklõps objektil) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Voldib omaduste paneeli akna servale |
| `PSPACE` | `PS` | Lahkub vaateaknast, mida töötad, ja läheb tagasi lehele (või topeltklõps väljaspool seda). |
| `PUBLISH` | `-PUBLISH` | Prindib mitu või kõik lehed ühte PDF-i (leht ja järjehoidja iga lehe kohta) |
| `PURGE` | `PU` | Eemaldab plokkide definitsioonid, mida miski ei kasuta |
| `QDIM` |  | Kiirmõõt: mõõdab mitu objekti korraga (pidev, põhi-, astmeline, ordinaat, raadius või läbimõõt) |
| `QPMODE` | `QP` | Kiiromadused kursori järgi sisse või välja |
| `QSELECT` | `QS` | Kiirvalik: kõik tüüpi objektid, mille kiht, värv, suurus või nimi sobib (QS) |
| `RASTERSNAP` |  | Lülitab skaneeritud lehtede joontele haakumise sisse või välja. |
| `RAY` |  | Kiir: konstruktsioonijoon punktist, ühes suunas lõpmatu. |
| `RECOVER` |  | Avab kahjustatud DXF- või DWG-faili: jätab vahele, mida ei saa lugeda, ütleb, mis jäeti vahele, ning kontrollib ja parandab joonise nagu AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Suletud murdjoon kahest nurgast |
| `REDLINE` | `RDL` | Punasest redaktsioonist versioonini: loe MarkupCrafti punase paketi, nõustu või keeldu igast muudatusest, pilvesta nõustutud revisjonilogiga ja salvesta vastusefail (RDL) |
| `REDO` |  | Tee uuesti see, mis tagasi võeti |
| `REFCLOSE` |  | Lõpetab ploki muutmise kohapeal: salvesta see või loobu muudatustest |
| `REFEDIT` |  | Muudab plokki kohapeal, kus selle viide asub, ülejäänud joonis tuhmuna; REFCLOSE salvestab |
| `REGEN` | `RE` | Taastab selles vahelehel joonistatu joonisest |
| `REGENALL` | `REA` | Taastab joonistatu kõigis vahelehtes, paanides ja avatud joonistes |
| `REGION` | `REG` | REGION (REG): teeb tasased alad (piirkonnad) suletud objektidest või jooni, kaari ja murdjooni, mis sulguvad otsast otsa. UNION, SUBTRACT ja INTERSECT ühendavad siis piirkondi ning MASSPROP annab nende lõiguomadused. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registreerib mitu skannimist: paigutab need ühte raami valitud punktipaaride või sihtmärkide järgi, täpsustab ICP-ga, ekspordib ühe LAS- või E57-faili |
| `REINIT` |  | Laadib lühikäskude faili uuesti |
| `RENAME` | `-RENAME`, `REN` | Nimetab ümber kihi või ploki (kõik objektid või viited järgivad) |
| `REVCLOUD` | `RC` | Revisjonipilv: ümardab ristküliku, hulknurga, vabakäelise joone või objekti (RC) |
| `REVOLVE` | `REV` | Pöörab suletud 2D-objekte telje ümber tahkisteks (3D) |
| `ROTATE` | `RO` | Pöörab objekte baaspunkti ümber (RO) |
| `SAMPLES` | `SAMPLE` | Avab ühe CadCraft'i näidisjoonise (arhitektuurikomplekt, teostusjoonis), et õppida |
| `SAVE` | `QSAVE` | Laadib joonise alla selle vormingus (DWG või DXF) |
| `SAVEAS` |  | Laadib joonise alla DWG või DXF-na: vali, millisena |
| `SAYSEL` |  | Ütleb, mis on valitud, iga lause ühe objekti kohta. |
| `SCALE` | `SC` | Muudab objektide mõõtkava baaspunkti ümber (SC) |
| `SCALELISTEDIT` | `SCALELIST` | Lisab, muudab ja kustutab joonise enda mõõtkavad; need ilmuvad vaateakna ja prindimõõtkavade loenditesse ning salvestatakse faili (SCALELIST) |
| `SCANALIGN` | `SCL` | Joondab skannitud lehe kahe punktiga: teisaldab, pöörab ja vajadusel muudab mõõtkava. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Paigutab skannitud joonise: PNG, JPEG või TIFF (üks leht või mitmelehelise faili kõik lehed) või PDF-lehe, mis on pilt. |
| `SCANCLEAN` | `SCC` | Muudab skannitud lehe mustvalgeks ja eemaldab laigud. |
| `SCANCROP` | `SCR` | Lõikab skannitud lehe aknaks. |
| `SCANDESKEW` | `SCD` | Leiab nurga, mille all skannitud lehe pikad jooned on, ja pöörab lehe ristseisu, kui nurga kinnitad. |
| `SCANERASE` | `SCE` | Kustutab skannitud lehe ala: ristküliku, hulknurga või lasso. |
| `SCANINFO` | `SCI` | Näitab skannitud lehe algset faili ja sellest saadik tehtud samme. |
| `SCANSCALE` | `SCS` | Muudab skannitud lehe mõõtkava: vali sellel kaks punkti ja sisesta nendevaheline tegelik kaugus. |
| `SCANTRACE` | `SCT` | Joonistab skannitud lehe uuele kihile joonteks ja kaareteks, määratud täpsusega. Tekst ja viirutus jäävad rasterina. |
| `SELECT` |  | Valib objektid kohe (P, Eelmine, järgmises käsus) |
| `SELECTALL` | `AI_SELALL` | Valib kõik selle vahelehe objektid, mida saad muuta (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Valib kõik sellised nagu need, mille valid: sama tüüp, kiht ja värv (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Näitab lehekomplekti paneeli: paljude joonistega lehed, nummerdatud, avaldatud ühe PDF-ina. |
| `SHORTCUTS` | `KEYS` | Annab mis tahes käsule oma klahvi (Ctrl või Alt tähega või vaba funktsiooniklahv), hoitakse selles brauseris või töölauarakenduses. |
| `SHXFONTS` | `SHX` | Annab CadCraftile SHX-fondid kaustast või failidest, nii et tekstistiilid, mis neid nimetavad, joonistavad nendes (loend, eemaldamine, pööramine) |
| `SKETCHFIX` | `SKF` | Joonistab vabakäelisi jooni; igaüks muutub puhtaks joonеks... |
| `SKETCHLIVE` | `SKL` | Visandab pliiatsiga: iga joon muutub täpseks joone, ringiks, kaareks või ristkülikuks, kui tõstad pliiatsi, joonisele haakunud, suurusega, mida saab üle kirjutada. |
| `SPLINE` | `SPL` | Joonistab splaini läbi punktide (või juhtmurdjoonega) või muudab murdjoone splainiks |
| `SPLINEDIT` | `SPE` | Muudab splaini: sobita punkte, juhtpunkte ja kaale, ava või sulge, pööra või muuda murdjooneks |
| `SPLIT` |  | Jagab joonistusala paanideks (nagu VPORTS mudelil; ka lehelt) |
| `STEELMEMBER` | `SMEMBER` | Terasdetail 3D-s standardprofiilist: kaks punkti (tala) või alguspunkt ja kõrgus (sammas) |
| `STLOUT` |  | Ekspordib 3D-mudeli STL-na (millimeetrites) |
| `STRETCH` | `S` | Venitab: lohista ristuv aken otste üle teisaldamiseks; sees olev liigub, ülejäänu jääb (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Tekstistiilid: font, kõrgus, laius ja kaldenurk, mida uus tekst saab (dialoog; -STYLE käsurealt) |
| `SUBTRACT` | `SU` | Eemaldab tahkised teistest (3D) või 2D-piirkonnad piirkondadest |
| `SWBOUT` | `SWMACRO` | Laadib alla makro SolidWorksile (.swb), mis ehitab mudeli uuesti ühe piiratud visandina |
| `SWEEP` |  | Liigutab suletud 2D-objekte mööda teed (joon, murdjoon, kaar, ring) tahkisteks (3D) |
| `TABLE` | `TB` | Teeb tabeli: read ja veerud või arvutustabeli lahtritest lõikelaual või CSV-failist |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Muudab tabelit: sisesta lahtrisse, lisa ja kustuta read ja veerud, suurused, ühendatud lahtrid, joondus |
| `TABLEEXPORT` |  | Salvestab, mida tabel näitab, CSV-failina |
| `TABLEPASTE` | `PASTETABLE` | Teeb tabeli arvutustabeli lahtritest lõikelaual |
| `TABLESTYLE` | `TS` | Tabeli stiilid: teksti kõrgus, joondus, veerised ja servad pealkirja, päise ja andmeridade jaoks |
| `TAGS` |  | Sildid plokiviidetel: määra silt (liik, lubatud väärtused, plokid, mida see kehtib), määra valitud viidetele ja loetle need graafikuna, mille saab salvestada CSV-na |
| `TEXT` | `DT`, `DTEXT` | Üherealine tekst; Enter alustab järgmist rida |
| `TEXTEDIT` | `ED`, `DDEDIT` | Muudab teksti kohapeal: vali tekst (või topeltklõps sellel) (ED) |
| `TEXTMASK` | `TMASK` | Paneb tekstide taha tausta maski (joonise taust või värv) või eemaldab selle. |
| `TEXTTOFRONT` |  | Toob kogu teksti, mõõdud ja viikjooned kõige ette. |
| `TOOLBAR` |  | Vali, mida tööriistariba nupud näitavad: ikoonid ja tekst, ainult ikoonid või ainult tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Paneb tööriistariba akna ülemisele, alumisele, vasakule või paremale servale |
| `TOOLBARROWS` |  | Vali, mitu rida tööriistariba kasutab: mahuta, 2 või 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Muudab joonise kohal olevad ribad standardseks või kompaktseks |
| `TOUCHCROSSHAIR` | `TCX` | Nihutatud ristkursor sõrmega joonestamiseks: üks sõrm liigutab ristkursorit, mis on sõrmest ülal ja kõrval, nii et sõrm ei kata valitavat punkti. Sõrme tõstmine ei vali midagi; nupp Click või puudutus teise sõrmega valib ristkursori kohal ja nupu Click hoidmine lohistamisel lohistab. Pikk vajutus või nupp Enter on Enter. Kaks sõrme nihutavad ja suumivad. Suvandid: ON, OFF, Auto (sees ainult seal, kus sõrm on ainus osuti), Distance, Side. |
| `TOUR` | `TUTORIAL` | Teeb kuuesammulise esimese joonise tuuri uuesti |
| `TRIM` | `TR` | Lõikab objekte tagasi kohani, kus teised neid ristuvad: klõpsa tükil, lohista mitme kaudu või Shift+klõps pikendamiseks |
| `TRIMEXTENDMODE` |  | Kuidas TRIM ja EXTEND algavad: 1 Kiire (iga objekt on lõikeserv või piir), 0 Standardne (vali esmalt servad) |
| `TTR` |  | Ring puutujana kahele objektile antud raadiusega (sama mis CIRCLE T) |
| `TURNLEFT` |  | Pöörab vaadet 90° vasakule (vastupäeva): UCS Z -90 ja vaade järgib. Joonises midagi ei liigu. |
| `TURNRIGHT` |  | Pöörab vaadet 90° paremale (päripäeva): UCS Z 90 ja vaade järgib. Joonises midagi ei liigu. |
| `TURNWORLD` |  | Tagasi maailma: UCS World ja vaade on jälle tasane. |
| `TXT2MTXT` | `T2M` | Ühendab üherealised tekstid üheks lõiketekstiks, ülevalt alla. |
| `UCS` |  | Sinu enda koordinaatsüsteem: alguspunkt ja X-telg (alguspunkt, Z-nurk, 3point, OBject, Previous, World, NAmed). Sisestatud punktid, Orto, polaarjälgimine, võrk ja uus tekst järgivad seda; vaade pöördub nii, et selle X-telg on tasane. Joonises midagi ei liigu. |
| `UNDO` | `U` | Võtab viimase käsu tagasi |
| `UNGROUP` |  | UNGROUP: lahutab rühmad. Vali rühmade objektid või anna Name. Objektid jäävad joonisele. |
| `UNION` | `UNI` | Ühendab tahkised üheks (3D) või 2D-piirkonnad üheks piirkonnaks |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Näitab uuesti kõiki objekte, mida ISOLATEOBJECTS või HIDEOBJECTS peitsid. |
| `UNITS` | `UN`, `DDUNITS` | Kuidas pikkused kuvatakse ja sisestatakse: kümnendarv, jalad ja tollid, murdarvud (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Arvutab väljad uuesti ja valib, millal need iseenesest uuenevad |
| `USDOUT` |  | Ekspordib 3D-mudeli USD-na (.usda tekst, .usdc binaar või .usdz pakett) |
| `VIEW` | `-VIEW`, `V` | Standardsed 3D-vaated, perspektiivne või paralleelne (3D) |
| `VIEWBASE` | `FLATSHOT` | Paigutab tahkiste lameda 2D-vaate (esi-, ülemine, külg- või isomeetriline, nähtamatud jooned katkendlikud) lehele või mudelisse |
| `VIEWLABEL` | `VL` | Vaate pealkiri lehel, mis näitab vaateakna vaate nime ja muutub koos sellega. |
| `VOICE` |  | Lülitab häälkäsud sisse või välja. Need tuvastatakse selles arvutis. |
| `VPCLIP` |  | Lõikab lehe vaateakna suletud objektile või joonistatud hulknurgale; Delete teeb sellest jälle ristküliku |
| `VPLAYER` |  | Külmutab või sulatab kihid ainult mõnes vaateaknas (Freeze, Thaw, Reset) ja valib, millised kihid uued vaateaknad alustavad külmutatuna (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Jagab joonistusala paanideks, igaühel oma vaade (lehel: vaateaken, nagu MVIEW) |
| `VPVIEW` |  | Määrab, mida vaateaken näitab: vali aken mudelil |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D-vaate visuaalne stiil: varjutatud, servad, nähtamatu joon, karkass, röntgen |
| `WALL` | `WA` | Joonistab 2D-seinu nagu murdjoone. Need ühenduvad ja kannavad uksi ja aknaid. |
| `WALLARC` | `WARC` | Joonistab seina kaare. Plaani seinad on sirged, seega joonistatakse kaar lühikeste sirgete seintena (igaüks 15 kraadi), mis ühenduvad. |
| `WALLDELSEG` |  | Kustutab seina tüki kahe punkti vahel. Järele jääb üks või kaks seina. |
| `WALLDIM` |  | Sisesta mõõtme uus väärtus: seina kaugem ots liigub ristseisus iseendaga, esimene ots jääb paigale ja selle külge ühendatud seinad järgivad. |
| `WALLDISJOIN` |  | Vali sein ühe otsa lähedalt, et keelata ühendused selles otsas: ots joonistatakse ruudus ja miski ei järgi. Vali uuesti, et lubada. |
| `WALLGRID` |  | Lukustab seina võrgujoonele: mööda seda või üks ots selle peal. Liiguta joont GRIDMOVE-ga ja sein järgib. |
| `WALLHOLD` |  | Joondab ja lukustab: sein säilitab oma koha teise seina suhtes (oma joonel või oma kaugusel). Kui üks liigub, järgib teine. |
| `WALLHOLDDIM` |  | Lukustab kahe paralleelse seina vahelise kauguse. Kui üks liigub, järgib teine selle säilitamiseks. |
| `WALLHOLDS` |  | Loetleb seinte lukud. |
| `WALLJOINS` |  | Annab vanema joonise igale seinale tema ID ja salvestab nendevahelised ühendused. See juhtub ka sinu esimesel muudatusel. |
| `WALLJOINSTYLE` |  | Klõpsa nurgal, kus kaks seina kohtuvad otsast otsa, et muuta joonistamist: miter, butt, square off. T vahetab, milline sein läbib. |
| `WALLOFFSET` | `WO` | Teisaldab seina ristseisus iseendaga kauguse võrra (selle külge ühendatud seinad järgivad) või teeb koopia sellele kaugusele. |
| `WALLPICK` |  | Teeb seinad joonisel joonele või murdjoonele, ühendatud joontega, kui ütled Jah. |
| `WALLPOLY` | `WP` | Joonistab seinad korrapärase hulknurga ümber 3 kuni 64 küljega, nagu POLYGON. |
| `WALLRECT` | `WR` | Joonistab neli ühendatud seina kahest vastasnurgast, nagu RECTANG. |
| `WALLREJOIN` |  | Teeb seina kaks osa jälle üheks seinaks. Esimene jääb oma kohale joonisel. |
| `WALLROT` |  | Joonistab neli ühendatud seina pööratud ristkülikuna mis tahes nurga all: esimene külg, siis kui kaugele välja. |
| `WALLSPLIT` | `WS` | Jagab seina kaheks punktis või seal, kus teine sein ristub. Osad jäävad ühendatuks, kui ei palu vahet või vabu otsi. Uksed ja aknad lähevad koos oma osaga. |
| `WALLSPLITGAP` |  | Jagab seina nii, et jääb vahe: sisesta vahe, vali sein, siis punkt. Osadel on vabad otsad ja neid saab uuesti ühendada. |
| `WALLSTRETCH` |  | Venitab aknaga: seinaotsad selle sees liiguvad, täielikult sees olevad seinad liiguvad tervikuna ja seinad, mis toetuvad külgedele, libisevad koos nendega. |
| `WALLTAN` |  | Jätkab seina kaarega, mis lahkub sellest mööda seina (joonistatud lühikeste sirgete seintena). |
| `WALLTRACE` |  | Teeb seinad ümber väikseima suletud ala, mis moodustub joontest ja seintest klõpsatud punkti ümber. |
| `WALLUNHOLD` |  | Eemaldab seina lukud (ja teiste seinte lukud sellele). |
| `WBLOCK` | `W`, `-WBLOCK` | Kirjutab ploki, mõned objektid või kogu joonise uude DWG- või DXF-faili (W) |
| `WEDGE` | `WE` | Kiil: kaks nurka ja kõrgus; see kaldub esimesest nurgast eemale (3D) |
| `WHEREAMI` | `WHERE` | Ütleb, kus kursor on. |
| `WHOHAS` |  | Ütleb, kes on joonise avanud. CadCraft Studio hoiab iga avatud joonise kõrval väikest lukufaili (Plan.dwg.cclock: kes, alates millal, mis versioon) ja eemaldab selle sulgemisel. Suvandid: Current (avatud joonis), File (vali üks), FOlder (iga avatud joonis kaustas; see lubab Studio'l hoida lukufaile selles kaustas), Path (kirjuta üks), Name (nimi, mida teised näevad). Lukku, mida viie minuti jooksul ei uuendata, nimetatakse aegunuks. Brauseris pole saadaval. |
| `WINDOW` | `WN` | Paigutab akna seina. |
| `XATTACH` | `XA` | Lingib teise DWG- või DXF-faili sellesse joonisesse, ainult lugemiseks (XREF loetleb ja laadib need uuesti) |
| `XCLIP` | `XC` | Lõikab plokiviited ja seotud joonised ristkülikuks või hulknurgaks või eemaldab lõike. |
| `XLINE` | `XL` | Konstruktsioonijoon, mõlemas suunas lõpmatu: läbi kahe punkti, horisontaalne, vertikaalne, nurga all, nurga poolitaja või joone nihe. |
| `XREF` | `XR`, `-XREF` | Seotud joonised (välised viited): loetle, lisa, laadi uuesti, seo, eemalda |
| `ZOOM` | `Z` | Ulatus või aken |
