---
title: Käsukaart: mida sisestada
summary: Iga käsk, mis CadCraftil on, koos lühinimedega, A-st Z-ni, programmist endast koostatud, ja harjumused teistest joonistusprogrammidest, mis erinevad.
keywords: käsukaart, käsud, aliased, lühinimed, teistest programmidest, käsuloend, mida sisestada, kustuta, lõika, samaväärne, erinevused
from: 9426856f
---

CadCraft võtab üle käsunimed ja lühinimed, mida inimesed teistest joonistusprogrammidest tunnevad: sisesta `L` joone jaoks, `TR` lõikamiseks, `E` kustutamiseks. Enamiku puhul ei pea seega õppima tõlketabelit: nimi, mida tead, on siin sama. Allpool on kõik käsud, mis CadCraftil on, programmist endast koostatud. {{key:Enter}} kordab viimast käsku; `HELP` käsureal prindib sama loendi.

Mõned, mis ei ole samad või pole loodud:

- **Salvesta** laadib brauseris alla koopia ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studios kirjutab see faili. Vt [Tulen teisest joonistustarkvarast](topic:coming-from).
- **PLOT** teeb PDF-faili (ka PNG ja SVG), printimisstiilide tabeliga; lehe seadistushaldurit ei ole.
- **DIMSTYLE** ja **PEDIT** on loodud; **PEDIT**-il ei ole valikut Muuda tippu (seda teevad käepidemed).
- **TABLE** ei ole loodud; {{cmd:XREF}}, {{cmd:SPLINE}} ja {{cmd:WBLOCK}} on.
- Rutiini enda käsud (AutoLISP `C:NAME`) ilmuvad pärast laadimist käsuga {{cmd:APPLOAD}}; neid siin ei ole loetletud.

## Kõik käsud (402)

| Käsk | Lühinimed | Mida teeb |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Pöörab 3D-vaadet vasaku nupuga |
| `ACCESS` | `AX` | Lülitab joonistamise ilma nägemiseta sisse või välja: tulemused ekraanilugeja kaudu, klaviatuurikursor joonisel, püüdmise helid ja hääldatavad käsud. |
| `ALIASEDIT` |  | Muudab käsualiaseid ühes tekstifailis (tuttav L, *LINE vorming) |
| `ALIGN` | `AL` | Liigutab ja pöörab objekte nii, et lähtepunktid satuvad sihtpunktidele (üks, kaks või kolm paari), ning soovi korral skaleerib neid |
| `ALIGNPANEL` | `ALP` | Avab paneeli Joonda ja jaota |
| `ALIGNTO` |  | Joondab valitud objektide vasaku, keskmise, parema, ülemise, keskkoha või alumise serva valiku, esimese või viimase valitud objekti või punkti järgi |
| `ANNOALLVISIBLE` | `ANNOALL` | Näitab annotatiivseid objekte igas mõõtkavas või ainult seal, kus vaateakna (või joonise) mõõtkava on nende loendis |
| `ANNOSCALE` | `CANNOSCALE` | Määrab joonise annotatsioonimõõtkava: annotatiivne tekst ja mõõdud muudetakse nii, et need prinditakse samas suuruses |
| `APPLOAD` | `AP` | Laadib rakendused: LISP-rutiinid (.lsp) ja nende dialoogifailid (.dcl); käivituskomplekt (AP) |
| `ARC` | `A` | Kaar: 3 punktiga, Start/Center/End, Start/Center/Angle, Start/Center/Length, Start/End/Angle, Start/End/Direction, Start/End/Radius, Center/Start/End, Center/Start/Angle, Center/Start/Length, Continue |
| `AREA` | `AA` | Pindala ja ümbermõõt punktide järgi või objekti järgi; Add ja Subtract hoiavad jooksvat summat (AA) |
| `ARRAY` | `AR` | Koopiad ridades ja veergudes või ümber keskpunkti (AR) |
| `ARRAYASSOCIATIVITY` |  | Määrab, kas ARRAY-käsud teevad massiive, mida saab veel muuta (1), või tavalisi koopiaid (0) |
| `ARRAYCLOSE` |  | Lõpetab massiivi lähteobjektide muutmise |
| `ARRAYEDIT` |  | Muudab massiivi, mis on tehtud valikuga Associative: arvud, vahed, lähteobjektid, üks üksus |
| `ARRAYPATH` |  | Objektide koopiad mööda joont, kaart, polyjoont või muud kõverat |
| `ARRAYPOLAR` |  | Koopiad ümber keskpunkti |
| `ARRAYRECT` |  | Koopiad ridades ja veergudes |
| `ASBUILT` | `ASB` | ASBUILT loeb meeskonna mõõdetud valminud ehituse punkte (CSV / TXT, nagu EXPORTPOINTS kirjutab) ja võrdleb neid joonise punktidega: tolerantsi piires või sellest väljas, mõõtmata, üleliigsed. Märgib need kihile AS-BUILT ja laadib alla CSV-aruande. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Määrab atribuudi (sildi, mille eest plokk väärtust küsib), mis pannakse plokki (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Muudab ploki viite atribuutide väärtusi käsureal, üks teise järel (Enter jätab väärtuse alles) |
| `ATTSYNC` |  | Viib ploki viited vastavusse nende atribuudi määratlustega: uued lisatakse vaikeväärtustega, eemaldatud kustutatakse, asukohad ja tekst lähtestatakse; väärtused säilivad |
| `AUDIT` |  | Kontrollib avatud joonist kahjustuste suhtes: arvud, mis pole lõplikud, objektid ilma suuruseta, puuduvad kihid, plokid, stiilid ja joontüübid, plokid, mis sisaldavad iseennast, jagatud ID-d, katkised mõõdud ja viirutused. Loetleb leitu liigi järgi ja küsib enne parandamist; parandus on üks tagasivõtmise samm. |
| `AUNITS` | `ANGUNITS` | Kuidas nurki näidatakse ja sisestatakse: kümnendkraadid, kraadid-minutid-sekundid või kompassisuunad nagu N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Joonise automaatlõpetus sisse või välja, või loetle, mida joonise mustrid praegu soovitavad. |
| `AUTOCONSTRAIN` |  | Lisab samapunktsuse, horisontaalse ja vertikaalse piirangu kohtadesse, kus geomeetria on juba lähedal |
| `AUTODIM` | `ADIM` | Mõõtmine reeglite järgi: üldmõõt, ahelad külgede kaupa, avad, aukude läbimõõdud ja ruudustiku vahe, ilma et korduks juba mõõdetut. |
| `AUTOSHEET` | `ASH` | Paigutab lehed ise: valib paberi ja standardsed mõõtkavad ning paigutab iga vaate pealkirja ja tiitelplokiga. |
| `BATTMAN` |  | Ploki atribuudihaldur: ploki atribuutide järjekord, sildid, küsimused, vaikeväärtused ja režiimid, seejärel viidete uuendamine |
| `BCLOSE` |  | Sulgeb plokiredaktori: salvesta plokk või loobu muudatustest |
| `BCONVERT` |  | BCONVERT leiab korduva geomeetria ja muudab selle plokiviideteks. Vali korduvad objektid: iga muu sama geomeetriaga objektikomplekt avatud ruumis, mis on nihutatud ja pööratud suvalise nurga võrra, leitakse; kui Peegeldatud või Skaleeritud on sisse lülitatud, leitakse ka peegelpildid ja teist suurust koopiad. Anna uuele plokile nimi ja baaspunkt; valik ja iga koopia muutuvad sellele viideteks, igaüks oma pöörde ja mõõtkavaga. Või vali Plokk ja nimeta olemasolev plokk, et leida selle objektide lahtised koopiad. Koopia peab olema samal kihil, värvi, joontüübi ja joonepaksusega, kui Atribuudid pole seatud valikule Ignore. Lukustatud kihtidel olevaid objekte ei puututa. Üks tagasivõtmise samm. |
| `BEDIT` | `BE` | Plokiredaktor: muuda ploki objekte ja atribuute; BCLOSE salvestab (BE) |
| `BLEND` |  | BLEND: splain kahe avatud kõvera otste vahel; valitakse otsa lähedalt, et ühendada. CONtinuity: Tangent järgib mõlema kõvera suunda, Smooth järgib ka nende kaardumist. |
| `BLOCK` | `B`, `BMAKE` | Teeb objektidest ploki (need muutuvad üheks viiteks) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: iga viide ühele plokile muutub viiteks teisele, samas kohas ja sama mõõtkava ning pöördega. Atribuutide väärtused, mis on mõlemas plokis, säilivad. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE näitab paneeli Plokid koos kursoriga filtris. Paneel näitab iga ploki pilti (viimati paigutatud esimesena), loendina või ruudustikuna; klõpsa pildil või lohista see joonisele, et paigutada plokk käsuga INSERT. Jaotises Teegid lisa oma DWG või DXF-fail: selle plokid on loetletud piltidega ja kopeeritakse sellesse joonisesse, kui paigutad ühe. CadCraft Studios saab lisada ka joonisekausta; failid ja kaustad jäetakse meelde. |
| `BOMEDIT` | `BOMCOLUMNS` | Materjalinimekirja tabeli veerud, rühmitamine, sortimine, pealkiri, summad ja märkused |
| `BOMEXPORT` |  | Salvestab materjalinimekirja tabeli .csv-failina |
| `BOMTABLE` | `BOM` | Elav materjalinimekirja tabel ühest tsoonist või kogu joonisest |
| `BOMUPDATE` |  | Uuendab kõiki materjalinimekirja tabeleid kohe, ka külmutatuid |
| `BOMZONE` | `BZONE` | Joonise nimetatud ala materjalinimekirjale: kaks nurka, hulknurk või suletud objekti ääris |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): vali punkt suletud ala sees ja saad selle ümber suletud polyjoone. Kaared jäävad kaarteks. Saared kontuurivad ka selles olevad alad. |
| `BOX` |  | Kast: kaks nurka ja kõrgus (3D) |
| `BPARAMETER` | `BPARAM` | Pole veel loodud: parameetri (näiteks Nähtavus) lisamine plokile. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Ploki parameetrid: nimega parameetrid valemitega ja mitu nähtavusparameetrit ühes plokis. Töötab plokiredaktoris (määrab valitud objektid olekule) ja valitud viitel (selle oma väärtused ja olekud). |
| `BREAK` | `BR` | Katkestab joone, kaare, ringi või polyjoone kahe punkti vahel (BR) |
| `BREAKATPOINT` |  | Jagab joone, kaare või polyjoone kaheks punktis |
| `BREAKLINE` |  | Joonistab joone murdesümboliga; selle suurus ja ulatus otste taha jäetakse meelde. |
| `BREPLACE` |  | BREPLACE vahetab ühe ploki teise vastu. Valitud: vali plokiviited ja nimeta plokk, mida kasutada nende asemel. Kõik: nimeta plokk ja selle asendaja, ning iga viide igas ruumis ja teistes plokkides muutub. Viide säilitab oma koha, mõõtkava, pöörde ja kihi ning mõlemas plokis olevate atribuutide väärtused; väärtused, mille uuel plokil kohta pole, kustutatakse ja nimetatakse. |
| `BSEARCH` |  | BSEARCH leiab plokid. Name: osa ploki nimest või muster märkidega * ja ?. Attribute: väärtus (või TAG=väärtus), mida viite atribuudid hoiavad. Geometry: vali objektid või üks plokiviide, ja loetletakse plokid, mille kuju on vähemalt 85% sarnane, parim esimesena; mõõtkava, pööre ja peegeldus ei lähe arvesse. Avatud ruumis leitud viited valitakse järgmise käsu jaoks. |
| `BURST` |  | Lõhub plokiviited ja säilitab, mida nende atribuudid ütlevad: iga väärtus muutub tekstiks atribuudi kihil. |
| `BVHIDE` | `BVH` | Plokiredaktoris: peidab objektid praeguses nähtavusolekus. |
| `BVSHOW` | `BVSH` | Plokiredaktoris: näitab nähtavusoleku poolt peidetud objekte (need näidatakse tuhmina, et saaks klõpsata). |
| `BVSTATE` | `BVS` | Plokiredaktoris, plokil nähtavusolekutega: lülitub olekule või lisab, nimetab ümber või kustutab ühe. |
| `CAL` |  | Arvutab pikkuse või arvu: + − * / ja sulud, nagu sisestad need kuhugi |
| `CENTERLINE` | `CL` | Telgjoon kahe joone vahel: nende vahele keskele, või nende lõikumisel poolitajale (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Keskmärk: rist ringi või kaare keskel, keskjoontega kuni selle taha (CM) |
| `CHAMFER` | `CHA` | Faasib nurga kahe joone vahel (D kaks kaugust, A pikkus ja nurk, P polyjoone iga nurk) |
| `CHSPACE` |  | CHSPACE: liigutab objekte lehe ja mudeli vahel vaateakna kaudu. Need skaleeritakse ja pööratakse, nii et teiselt poolt vaadates näevad need samasugused välja. Lehel lähevad need mudelisse; kui töötad vaateakna kaudu (MSPACE), tulevad need lehele. |
| `CIRCLE` | `C` | Keskpunkt ja raadius, läbimõõt, 2 või 3 punkti |
| `CLASS` |  | Paneb valitud objektid klassi või, kui midagi pole valitud, määrab aktiivse klassi (? loetleb need) |
| `CLASSES` | `CLS` | Paneel Klassid: klassid sorteerivad objekte kihtide üle; näita, peida ja vormista neid ning alista vaateakna kaupa (CLS) |
| `COMMANDLINE` | `CMDLINE` | Dokib või hõljutab käsurea, teeb sellest ühe rea, määrab selle ajaloo read või avab ajaloo (F2) |
| `COMPARESETTINGS` | `CMPSET` | Võrdleb mõõdustiile, tekstistiile, kihte, lehti või ühikuid: kaks selles joonises või see joonis teise avatud joonisega, ja kopeerib väärtuse üle. |
| `CONSTRAINTBAR` | `CBAR` | Näitab või peidab piirangute ribad (Showall / Hideall või objekti kaupa) |
| `COPY` | `CO`, `CP` | Kopeerib objekte, nii mitu korda kui klõpsad |
| `COPYBASE` |  | Kopeerib objektid lõikelauale sinu valitud baaspunktiga |
| `COPYCLIP` |  | Kopeerib objektid lõikelauale (Ctrl+C); PASTECLIP paigutab need |
| `COUNT` | `BCOUNT` | Loeb plokiviited: vali üks, et valida ja lugeda kõik selle ploki viited |
| `COUNTTABLE` |  | Paigutab plokkide loenduste tabeli |
| `CREDITS` |  | Paneb teegi autorid joonisele tabelina. Käivita uuesti, et uuendada tabelit praegustest joonise objektidest. |
| `CURSORSIZE` |  | Ristiku suurus: 100 käivitab selle servast servani üle joonise (Sätted › Kursor › Täisekraan) |
| `CUTCLIP` |  | Lõikab objektid lõikelauale (Ctrl+X): kopeeri ja siis kustuta |
| `CYLINDER` | `CYL` | Silinder: keskpunkt, raadius ja kõrgus (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Loetleb plokid, nende atribuudid ja objektide omadused tabelina joonisel või CSV-failina |
| `DATALINK` | `DL` | Tabel CSV-failist, mis mäletab faili, et seda saaks uuesti lugeda |
| `DATALINKUPDATE` | `DLU` | Loeb andmeseose faili uuesti ja täidab selle tabelid |
| `DCALIGNED` | `DCALI` | Mõõtmispiirang: tõeline kaugus punktide, punkti ja joone või kahe joone vahel |
| `DCANGULAR` | `DCANG` | Mõõtmispiirang: nurk kahe joone vahel või kaare nurk |
| `DCCONVERT` |  | Muudab piiratavale geomeetriale joonistatud mõõdud mõõtmispiirangutena |
| `DCDIAMETER` | `DCDIA` | Mõõtmispiirang: ringi või kaare läbimõõt |
| `DCDISPLAY` |  | Näitab või peidab mõõtmispiirangud joonisel |
| `DCHORIZONTAL` | `DCHOR` | Mõõtmispiirang: horisontaalne kaugus |
| `DCLINEAR` | `DCLIN` | Mõõtmispiirang: horisontaalne või vertikaalne kaugus, sealt, kuhu paigutad |
| `DCRADIUS` | `DCRAD` | Mõõtmispiirang: ringi või kaare raadius |
| `DCVERTICAL` | `DCVER` | Mõõtmispiirang: vertikaalne kaugus |
| `DELBLOCKS` |  | Kustutab plokid: iga viite (ka pesastatud, igal lehel) ja definitsioonid |
| `DELCONSTRAINT` | `DELCON` | Eemaldab valitud objektidelt kõik piirangud (geomeetrilised ja mõõtmispiirangud) |
| `DELOPENING` |  | Võtab ukse või akna seinast välja. |
| `DESCRIBE` | `DESC` | Ütleb, mis joonisel on: mitu objekti, mis liiki, kui suured, mis on valitud. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Tühjendab valiku (Esc) |
| `DETAILS` | `DET` | Sinu firma oma detailid, leitud sellele, mida joonistad: otsi, lisa plokk, loetle, eemalda, lülita pakkumised sisse või välja. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Joonistab tekstist diagrammi: Mermaid-voodiagramm, PlantUML komponentdiagramm, D2, lähtest sihtkohani loend või draw.io XML, muudetavate plokkide ja ühendustena |
| `DIMALIGNED` | `DAL`, `DIMALI` | Tõeline kaugus kahe punkti vahel |
| `DIMANGULAR` | `DAN`, `DIMANG` | Nurk kahe joone vahel, kaare nurk või kolme punkti järgi |
| `DIMARC` | `DAR` | Kaare pikkuse mõõt: kaare pikkune kaugus kaare sümboliga (DAR) |
| `DIMASZ` |  | Mõõtmise seade: noole suurus |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Mõõdud ühest baasjoonest virnas |
| `DIMBREAK` | `DBREAK` | Katkestab mõõte- ja pikendusjooned seal, kus need ristuvad teiste objektidega (Auto), kahe punkti vahel (Manual), või eemaldab katkestused |
| `DIMCONSTRAINT` | `DCON` | Mõõtmispiirangud: lineaarne, joondatud, nurk, raadius, läbimõõt, teisendamine |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Mõõtude ahel, igaüks eelmise lõpust |
| `DIMDEC` |  | Mõõtmise seade: kümnendkohad |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Kaare või ringi läbimõõt |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Vabastab mõõdud objektidest, millega need on seotud (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Muudab mõõdu teksti (Home, New text, Rotate) või kallutab pikendusjooni (Oblique) |
| `DIMEXE` |  | Mõõtmise seade: pikendus mõõtejoonest kaugemale |
| `DIMEXO` |  | Mõõtmise seade: nihe alguspunktist |
| `DIMGAP` |  | Mõõtmise seade: vahe teksti ümber |
| `DIMINSPECT` |  | Kontrollmõõt: raam väärtuse ümber koos sildi ja selle, kui tihti detaili kontrollitakse |
| `DIMJOGGED` | `DJO`, `JOG` | Murdunud raadiusmõõt: raadius, mis joonistatakse lähemalt punktilt, kui keskpunkt on kaugel (DJO) |
| `DIMJOGLINE` | `DJL` | Lisab murdesümboli lineaarse või joondatud mõõdu joonele, et näidata, et kaugust ei ole joonistatud mõõtkavas (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horisontaalne või vertikaalne kaugus (R mis tahes nurga jaoks) |
| `DIMLUNIT` |  | Mõõtmise seade: pikkuse vorming (1 teaduslik, 2 kümnend, 3 tehniline, 4 arhitektuuriline, 5 murdarv) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinaatmõõt: punkti X- või Y-kaugus UCS-i alguspunktist juhikul (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Alistab mõõtmise muutujad valitud mõõtudel ilma nende stiili muutmata; Clear paneb stiili tagasi (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Kaare või ringi raadius |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Seob mõõdu punktid objektidega, nii et see järgib neid ja mõõdab uuesti, kui need liiguvad (DRE) |
| `DIMSCALE` |  | Mõõtmise seade: üldine mõõtkava (suurused × see) |
| `DIMSPACE` |  | Paralleelsete mõõtude ühtlane vahe, mõõdetuna baasmõõdust (0 joondab, Auto on kaks korda teksti kõrgus) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Loob, muudab, määrab praeguseks, kustutab, rakendab ja võrdleb nimega mõõdustiile (dialoog; käsureal -DIMSTYLE) |
| `DIMTEDIT` | `DIMTED` | Liigutab mõõdu teksti mõõtejoone vasakule, paremale või keskele või pöörab selle |
| `DIMTEXTUNIT` | `DTU` | Mõõdu tekst mm, cm, m või km või joonise enda ühikutes: valitud mõõdud, muidu uued (DTU) |
| `DIMTXT` |  | Mõõtmise seade: teksti kõrgus |
| `DIST` | `DI` | Kaugus ja nurk kahe punkti vahel |
| `DISTRIBUTE` |  | Paigutab valitud objektid ühtlaselt, külgede või üles-alla: võrdsed sammud keskpunktide vahel või võrdsed vahed; välimised kaks jäävad |
| `DIVIDE` | `DIV` | DIVIDE (DIV): märgid, mis lõikavad joone, kaare, ringi, polyjoone, splaini või ellipsi võrdseteks osadeks. Punktid või, kui Plokk, plokk igas märgis. |
| `DOCUMENTS` | `DOCS` | Avab paneeli Dokumendid: võta joonised välja ja tagasi, redaktsioonid, väljastusolekud ja kinnitus projektikausta jaoks |
| `DOOR` | `DR` | Paneb ukse seina. Pool, millele klõpsad, on see, kuhu uks avaneb. |
| `DRAWORDER` |  | Muudab joonistamise järjekorda: toob objektid ette, saadab taha või paneb teiste objektide peale või alla. |
| `DUPLICATE` | `DUP` | Koopia, mis liigub kursoriga: klõpsa, et see maha panna (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Joonise omadused: pealkiri, autor ja muu, ning sinu enda nime- ja väärtuspaarid |
| `DXFOUT` |  | Laadib joonise alla DXF R12-na (Salvesta säilitab oma vormingu) |
| `EATTEDIT` | `DDATTE` | Muudab ploki viite atribuute: väärtused, tekst ja omadused, üks atribuut korraga |
| `ELLIPSE` | `EL` | Telje lõpp-punktid ja teine pooltelg |
| `ERASE` | `E`, `DELETE` | Eemaldab objektid |
| `EXPLODE` | `X` | Lõhub polyjooned, plokid ja mõõdud osadeks |
| `EXPORT` | `EXP` | Salvestab joonise koopia failitüübis, mida lisandmoodul kirjutab |
| `EXPORT3D` | `3DEXPORT` | Ekspordib 3D-mudeli: GLB, OBJ või STL |
| `EXPORTPOINTS` | `EXPPTS` | Kirjutab punktid ja plokkide sisestuspunktid, ühe atribuudiga kirjelduseks, CSV- või TXT-faili (PNEZD, PENZD või XYZ) BIM- ja mõõdistusprogrammidele |
| `EXTEND` | `EX` | Pikendab objekte, et need teistega kohtuksid: klõpsa otsa lähedal, lohista läbi mitme või Shift+klõps lõikamiseks |
| `EXTRIM` |  | EXTRIM: vali üks lõikeserv, seejärel külg. Kõik, mis servast üle läheb, lõigatakse sellel küljel. Osad, mis kaoksid, näidatakse kursorit liigutades. |
| `EXTRUDE` | `EXT` | Pressib suletud 2D-objektid tahkisteks (3D) |
| `FIELD` |  | Paneb välja teksti, tabelilahtrisse või atribuuti: kuupäev, failinimi, lehe number, joonise omadus, objekti pindala või pikkus, või valem |
| `FILLET` | `F` | Ümardab või ruudistab nurga kahe objekti vahel (R raadius, P polyjoone iga nurk, M mitu) |
| `FIND` |  | Leiab ja asendab sõnu tekstis, atribuutide väärtustes ja mõõdu tekstis |
| `FLATTEN` |  | Määrab valitud objektide kõrguse (Z) ja paksuse 0-ks, ka plokkides, mida need kasutavad. |
| `FLOOR` |  | Vali korrus, millel joonistada, lisa üks või liiguta või kopeeri valik sinna. |
| `FLOORLAYERS` |  | Muudab korrused kihtideks nimega Floor-Layer, faili jaoks, mis läheb kellelegi ilma korrusteta. |
| `FLOORS` | `FLR` | Avab paneeli Korrused: laota korrused ühte mudeliruumi. |
| `GCCOINCIDENT` |  | Piirang: kaks punkti kohtuvad või punkt jääb objekti peale |
| `GCCOLLINEAR` |  | Piirang: kaks joont jäävad ühele joonele |
| `GCCONCENTRIC` |  | Piirang: kaks ringi või kaart jagavad keskpunkti |
| `GCEQUAL` |  | Piirang: kaks joont jäävad samapikkuseks, või kaks ringi või kaart samaks raadiuseks |
| `GCFIX` |  | Piirang: punkt või terve objekt jääb sinna, kus on |
| `GCHORIZONTAL` |  | Piirang: joon (või kaks punkti) jääb horisontaalseks |
| `GCPARALLEL` |  | Piirang: kaks joont jäävad paralleelseks |
| `GCPERPENDICULAR` |  | Piirang: kaks joont jäävad täisnurka |
| `GCSYMMETRIC` |  | Piirang: kaks punkti, joont või ringi peegelduvad teineteise suhtes üle joone |
| `GCTANGENT` |  | Piirang: joon ja ring või kaar (või kaks neist) jäävad puutujaks |
| `GCVERTICAL` |  | Piirang: joon (või kaks punkti) jääb vertikaalseks |
| `GDSIN` | `GDS` | Vaatab IC-paigutust (GDSII-voofail): iga kiht ja andmetüüp joonisekihina, lamedalt, kasutajaühikutes; ainult vaatamiseks ja mõõtmiseks (laborikatse) |
| `GEOMCONSTRAINT` | `GCON` | Geomeetrilised piirangud: horisontaalne, vertikaalne, paralleelne, puutuja, samapunktne… |
| `GLBOUT` |  | Ekspordib 3D-mudeli GLB-na (glTF) |
| `GRADIENT` | `GD` | Täidab ala ühe või kahe värvi gradiendiga |
| `GRID` |  | Määrab ruudustiku: joonte vahe, iga N-s joon põhijoonena, ON või OFF, või Auto, et jälgida suumi uuesti |
| `GRIDMOVE` | `GM` | Liigutab ruudustiku joont ja viib kaasa, mis sellest rippub: seinad venivad, veerud, mullid ja sildid liiguvad, mõõdud järgivad. |
| `GROUP` | `G` | GROUP (G): annab valitud objektidele nime, mida nad jagavad. Klõps ühel neist valib need kõik. Enter nime juures teeb nimeta rühma. |
| `GROUPEDIT` |  | GROUPEDIT: muudab rühma. Vali üks tema objektidest või anna nimi, siis Add või Remove objektid, REName nimetab ümber, muudab kirjeldust või ütleb, kas klõps valib rühma tervikuna. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Täidab ala tahke täite või mustriga: klõpsa selle sees või vali suletud objektid (H) |
| `HATCHEDIT` | `HE` | Muudab viirutust: muster, mõõtkava, nurk, alguspunkt ja selle side piirjoonega. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Teeb piirjooned viirutusest uuesti, sellega seotud või mitte |
| `HATCHTOBACK` |  | Saadab kõik viirutused kõige taha. |
| `HELP` | `?` | See loend |
| `HIDEOBJECTS` |  | Peidab valitud objektid kuni UNISOLATEOBJECTS. Ei salvestu koos joonisega. |
| `HISTORY` | `HIST` | HISTORY (HIST): selle joonise versioonid — selles arvutis hoitud koopiad, kui Studio salvestab, ja pilve versioonid — avamiseks, taastamiseks ja võrdlemiseks koos värvides näidatud muudatustega. |
| `ID` |  | Punkti koordinaadid |
| `IMAGE` | `IM` | Anna CadCraftile pildifailid, mida joonis kasutab (DWG salvestab ainult, kus need olid) |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Paigutab pildi (PNG või JPEG) failist. |
| `IMAGECLIP` | `ICL` | Lõikab pildi ristkülikuks või hulknurgaks või eemaldab lõike. |
| `IMPORT` | `IMP` | Impordib faili liigist, mida lisandmoodul loeb, sellesse joonisesse |
| `INSERT` | `I`, `DDINSERT` | Paigutab ploki (S mõõtkava, R pööra); F DWG- või DXF-failist, L teegist |
| `INTERSECT` | `IN` | Jätab alles ainult selle, mis tahkistel on ühist (3D), või 2D-piirkondade ühise ala |
| `ISODRAFT` |  | ISODRAFT: isomeetriline joonistamine sisse või välja, või otse tasandile Left, Top või Right. Kui see on sees, järgivad Ortho ja polaarne jälgimine tasandi kahte telge, ruudustik joonistatakse isomeetriliselt ja ELLIPSE-l on Isocircle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Näitab ainult valitud objekte; kõik muu selles ruumis on nähtamatu kuni UNISOLATEOBJECTS. Ei muuda kihte ega salvestu koos joonisega. |
| `ISOPLANE` |  | ISOPLANE: vali isomeetriline tasand, millel joonistada: Left, Top või Right. Enter läheb järgmisele, nagu F5 teeb isomeetrilise joonistamise ajal. |
| `JOIN` | `J` | Ühendab lõpust lõppu kokkusattuvad jooned, kaared ja polyjooned üheks polyjooneks; ühel joonel olevad jooned üheks joooneks (J) |
| `LASER` | `LASERCUT` | Avab paneeli Laser: saadab kihid laserlõikurile või graveerijale (GRBL G-kood) |
| `LASSOMODE` |  | Vajutamine ja lohistamine joonistab lasso (1) või ristküliku (0) |
| `LAYDEL` |  | Kustutab kihi ja kõik sellel olevad objektid (mudelis, lehtedel ja plokkides) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Avab kihihalduri: kõik kihid ühes tabelis |
| `LAYERPANEL` |  | Näitab kihtide paneeli |
| `LAYFRZ` |  | Külmutab iga valitud objekti kihi |
| `LAYGROUP` | `LG` | Rühmitab kihid kaustadesse paneelis Kihid. |
| `LAYISO` |  | Isoleerib valitud objektide kihid (kõik teised kihid välja) |
| `LAYLOCKFADE` |  | Määrab, kui palju lukustatud kihtide objektid tuhmuvad ja kas klõps neid valida saab. |
| `LAYMCUR` |  | Muudab klõpsatud objekti kihi praeguseks |
| `LAYMRG` |  | Ühendab kihid: nende objektid liiguvad sihtkihile ja ühendatud kihid kaovad |
| `LAYOFF` |  | Lülitab välja iga valitud objekti kihi |
| `LAYON` |  | Lülitab kõik kihid sisse |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Uus leht tiitelploki ja vaateaknaga |
| `LAYTHW` |  | Sulatab kõik kihid |
| `LAYUNISO` |  | Lülitab uuesti sisse kihid, mille LAYISO välja lülitas |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Teisendab vanade vietnami fontidega kirjutatud teksti (TCVN3 / ABC-fondid, nagu .VnTime, ja VNI-fondid, nagu VNI-Times) Unicode'iks. Selline tekst on juba loetav; see kirjutab selle lõplikult ümber, loendi ja ühe tagasivõtmise sammuga. |
| `LENGTHEN` | `LEN` | Pikendab või lühendab jooni, kaari ja polyjooni: kogusega, protsendiga, kogupikkusena või lohistades (LEN) |
| `LIBRARY` | `LIB` | Teegi paneel: paiguta objekte, otsi uuendusi, autorid |
| `LIMITS` |  | Määrab joonise piirid: ON, OFF või vasak-alumine ja parem-ülemine nurk. Piiride ON-režiimis lükatakse piiridest väljaspool olevad punktid tagasi |
| `LINE` | `L` | Sirged lõigud, igaüks oma objektina |
| `LINETYPE` | `LT`, `CELTYPE` | Joontüüp, mida uued objektid saavad (kihi järgi, ploki järgi või nimega) |
| `LINKVIEWS` | `SYNCVIEWS` | Liigutab ja suumib kõiki paane koos (jagatud ekraan), et võrrelda kahte joonist või redaktsiooni |
| `LISPEDIT` | `VLIDE` | LISPEDIT (või VLIDE) avab LISP-redaktori: akna rutiini kirjutamiseks, laadimiseks ja proovimiseks. Laadi joonisesse loeb iga vormi, nagu APPLOAD faili laadides, ja teeb sellest käsud. Käivita valik hindab valitud vorme või vormi, kus kursor on. Konsool näitab, mida rutiin printis, ja iga vea koos reaga. Sulgev sulg on kirjutades märgitud ning Enter taandab uue rea. New, Open ja Save töötavad .lsp-failiga. Tekstist kõrval olevad loendid näitavad funktsioone, mida rutiin defineerib, neid, mida ta kutsub, mida see LISP veel ei oma, ja kõiki, mis tal on. Aken ei blokeeri joonist, nii et rutiin võib küsida punkte; Stop või Esc lõpetab töötava rutiini. |
| `LIST` | `LI`, `LS` | Kirjeldab objekte ajaloos |
| `LTSCALE` | `LTS` | Joonise joontüübi mõõtkava (iga kriipsu ja vahe korrutatakse sellega) |
| `LWDISPLAY` | `LWT` | Näitab või peidab joonepaksused ekraanil (nupp LWT olekuribal) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Uute objektide joonepaksus (kihi järgi, ploki järgi, vaikimisi või mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Kaardikihid mudeliruumi all: joonise koordinaatsüsteem, plaadid, WMS, WMTS, ArcGIS, pildid |
| `MASSPROP` |  | MASSPROP: piirkondade ja suletud objektide lõigu omadused: pindala, ümbermõõt, raskuskese, momendid ja inertsiproduktid, inertsiraadiused ja põhitelg. Jooned ja kaared on täpsed. Aruande saab kirjutada tekstifailina. |
| `MATCHPROP` | `MA`, `PAINTER` | Sobitab omadused: kopeerib ühe objekti kihi, värvi ja muu teistele (MA) |
| `MEASURE` | `ME` | MEASURE (ME): märk iga antud pikkuse järel joone, kaare, ringi, polyjoone, splaini või ellipsi kohal, alates otsast, mis on sinu valikule kõige lähemal. Punktid või, kui Plokk, plokk igas märgis. |
| `MEASUREGEOM` | `MEA` | Mõõdab kaugust, raadiust, nurka või ala (MEA) |
| `MINSERT` |  | MINSERT: paigutab ploki korraga ridadesse ja veergudesse. Iga on oma viide, nii et saad mis tahes neist liigutada või kustutada. |
| `MIRROR` | `MI` | Peegeldab objekte üle joone |
| `MLEADER` | `MLD`, `MLEAD` | Mitmikjuhik: nool, juhik ja märkus ühe objektina (MLD) |
| `MLEADERALIGN` | `MLA` | Joondab mitmikjuhikud ühega neist teatud suunas, võrdsel vahel või jaotab kahe punkti vahel (MLA) |
| `MLEADERCOLLECT` | `MLC` | Koondab mitu mitmikjuhikut üheks: nende plokid reas või veerus või märkused üksteise all (MLC) |
| `MLEADEREDIT` | `MLE` | Lisab mitmikjuhikule juhtjooni või eemaldab neid; vahetab sisu teksti ja ploki vahel (MLE) |
| `MLINE` |  | Joonistab paralleelseid jooni koos, nurkades ühendatult. |
| `MOVE` | `M` | Liigutab objekte baaspunkti ja teise punkti järgi |
| `MSPACE` | `MS` | Töötab mudeliga avatud lehe vaateakna kaudu (või topeltklõps vaateaknas). |
| `MTEXT` | `MT`, `T` | Lõigu tekst: lohista laius, siis kirjuta kohapeal; Enter alustab uut lõiku (T) |
| `MVIEW` | `MV` | Vaateaken mudelile, paigutusel |
| `NAMEDVIEW` | `NV`, `VIEWS` | Nimega vaated: salvestab ekraanil oleva vaate (või akna) nime all ja läheb sinna tagasi (NV) |
| `NCOPY` |  | Kopeerib objekte plokiviitest või seotud joonisest joonisesse, seda lahti lõhkumata. |
| `NEARBY` |  | Ütleb, mis on kursori lähedal, lähim esimesena, koos kauguse ja küljega. |
| `NEW` |  | Alustab uut joonist |
| `OBJECTSCALE` | `OBJSCALE` | Annotatiivse teksti ja mõõtude annotatsioonimõõtkavad: lisa mõõtkava, kustuta üks, lisa joonise praegune mõõtkava või loetle need (iga vaateaken näitab neid oma mõõtkava suuruses) |
| `OBJOUT` |  | Ekspordib 3D-mudeli OBJ-na |
| `OFFICESTANDARD` | `OFFSTD` | Kontori standard: tekstikõrgused paberil, kihid, tiitelploki väljad ja mallid ühes kirjes. Näitab kehtivat ja seda, kust see tuleb; Import lisab .json-kirje sellesse joonisesse, lisab joonisel puuduvad kontorikihid, loetleb tiitelploki väljad. |
| `OFFSET` | `O` | Paralleelkoopiad kaugusel |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: kuidas OFFSET sulgeb lüngad polyjoone välisnurkades. 0 pikendab lõike, 1 lisab kaare, 2 lisab sirge lõike. Jääb selleks sessiooniks. |
| `OLELIST` | `OLES` | Loetleb joonises olevad OLE-objektid ja paneb ühe pildi koopia sinna, kuhu soovid |
| `OPEN` |  | Avab DWG või DXF sellest arvutist |
| `OPENIN3D` |  | Avab selle joonise 3D-modelleerimise rakenduses uuel vahelehel (midagi ei laadita üles) |
| `OPTIONKEYS` | `OPTKEYS` | Annab käsu suvanditele oma tähed (ARRAY.PO, P), ühes tekstifailis |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Avab objektipüüdmise menüü: vali, millised püüdmised on sees. Ka parem klõps püüdmisel olekuribal. |
| `OVERKILL` |  | Kustutab dubleeritud objektid ja ühendab kattuvad või lõpust lõppu jooned ja kaared määratud tolerantsi piires. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parameetrite paneel: kasutajaparameetrid ja mõõtmispiirangud ühes tabelis |
| `PARTSLIST` | `PLIST` | Osade loendi tabel igast teegist paigutatud standardosast ja terasprofiilist |
| `PASTEAREA` | `PAREA` | Kleebib MarkupCraftis kopeeritud ala (Kopeeri ala) oma tõelises suuruses pildina. |
| `PASTEBLOCK` |  | PASTEBLOCK: kleebib, mida kopeerisid, ühe plokina. Plokk saab oma nime; RENAME annab sulle oma. |
| `PASTECLIP` |  | Kleebib lõikelaua: see järgib kursorit, klõpsa kohta, kuhu see läheb (Ctrl+V) |
| `PASTEORIG` |  | Kleebib lõikelaua koordinaatidesse, kust see kopeeriti (Ctrl+Shift+V) |
| `PDF` |  | Annab CadCraftile PDF-failid, mida joonise alusjooned kasutavad |
| `PDFADJUST` |  | Tuhmistab, reguleerib kontrasti, teeb monokroomseks või lülitab PDF-alusjoonise välja |
| `PDFATTACH` | `PDFATT` | Kinnitab PDF-lehe alusjooneks (PDFATTACH) |
| `PDFCLIP` |  | Lõikab PDF-alusjoonise ristkülikuks või hulknurgaks |
| `PDFIMPORT` | `PDFIM` | Muudab PDF-lehe jooned, täited ja tekstid joonise objektideks (PDFIMPORT) |
| `PDFLAYERS` |  | Lülitab PDF-alusjoonise kihid sisse või välja |
| `PEDIT` | `PE` | Muudab polyjoont: sulgemine, avamine, ühendamine, laius, kõvera sobitamine, splainikõver, sirgendamine, joontüübi genereerimine, pööramine; jooned, kaared ja splainid saab muuta polyjoonteks |
| `PENPRESSURE` |  | Kas pliiatsitriigi rõhk määrab joonepaksuse sellele, mida SKETCHFIX ja SKETCHLIVE teevad (vaikimisi sees). Hoitakse selles brauseris. |
| `PHOTOSKETCH` | `PSK` | Muudab paberil käsitsi joonistatud visandi foto mõõtkavas joonteks ja kaareks, sirgendab perspektiivi ja annab igale pliiatsivärvile oma kihi. |
| `PICKSTYLE` |  | PICKSTYLE: kas rühma ühe objekti valimine valib kogu rühma (1, algseade) või ainult selle objekti (0). Jääb selleks sessiooniks. |
| `PLAN` |  | Pöörab vaate nii, et UCS-i X-telg (praegune ucs, salvestatud Ucs või maailm) on ekraanil horisontaalne. Joonisel miski ei liigu. |
| `PLINE` | `PL` | Polyjoon joone- ja kaarelõikudest |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Prindib PDF-iks: leht või mudel mõõtkavas |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Printimisstiilide tabelid: määrab, mida iga värv prindib (värv, must, hall, tint, joonepaksus); salvestatud koos joonisega (STYLESMANAGER) |
| `POINT` | `PO` | Punktiobjektid |
| `POINTCLOUD` | `PC` | kinnitatud punktipilv: lõige, kõrgus, paksus, värv, suurus, nähtavus, suum, lahtiühendamine |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | kinnitab punktipilve (LAS, LAZ, XYZ, PTS) joonise alla |
| `POLARANG` |  | Polaarse jälgimise samm kraadides (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Korrapärane hulknurk |
| `PRESSPULL` |  | Surub või tõmbab tahkise tahku (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Avab paneeli Omadused (ka Ctrl+1 või topeltklõps objektil) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Voldib paneeli Omadused akna servale |
| `PSPACE` | `PS` | Lahkub vaateaknast, millega töötad, ja läheb tagasi lehele (või topeltklõps väljaspool seda). |
| `PUBLISH` | `-PUBLISH` | Prindib mitu või kõik lehed ühte PDF-i (lehekülg ja järjehoidja iga lehe kohta) |
| `PURGE` | `PU` | Eemaldab plokkide definitsioonid, mida ükski ei kasuta |
| `QDIM` |  | Kiirmõõt: mõõdab mitut objekti korraga (järjestikune, baasjoonest, astmeline, ordinaat, raadius või läbimõõt) |
| `QPMODE` | `QP` | Kiirtunnused kursori järgi sisse või välja |
| `QSELECT` | `QS` | Kiirvalik: iga tüüp, mille kiht, värv, suurus või nimi sobib (QS) |
| `RASTERSNAP` |  | Lülitab skaneeritud lehtede joonte püüdmise sisse või välja. |
| `RAY` |  | Kiir: konstruktsioonijoon punktist, ühes suunas lõputu. |
| `RECOVER` |  | Avab kahjustatud DXF- või DWG-faili: jätab vahele, mida ei saa lugeda, ütleb, mis vahele jäeti, ja kontrollib ning parandab joonise nagu AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Suletud polyjoon kahest nurgast |
| `REDLINE` | `RDL` | Redline'ist redaktsiooniks: loeb MarkupCraftis kirjutatud redline-paketi, võtab iga muudatuse vastu või lükkab tagasi, pilvestab vastuvõetud koos redaktsioonilogiga ja salvestab vastuste faili (RDL) |
| `REDO` |  | Teeb uuesti, mis tagasi võeti |
| `REFCLOSE` |  | Lõpetab ploki muutmise paigas: salvestab või loobub muudatustest |
| `REFEDIT` |  | Muudab plokki paigas, kus selle viide asub, ülejäänud joonis tuhmunud; REFCLOSE salvestab |
| `REGEN` | `RE` | Ehitab uuesti üles, mis sellel vahelehel joonistatakse joonisest |
| `REGENALL` | `REA` | Ehitab uuesti üles kõik vahelehed, paanid ja avatud joonised |
| `REGION` | `REG` | REGION (REG): teeb suletud objektidest lamedad alad (piirkonnad) või joontest, kaartest ja polyjoontest, mis sulguvad lõpust lõppu silmuseks. UNION, SUBTRACT ja INTERSECT ühendavad piirkonnad, MASSPROP annab nende lõigu omadused. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registreerib mitu skaneeringut: paneb need ühte raami valitud punktipaaride või märkide järgi, täpsustab ICP-ga, ekspordib ühe LAS- või E57-faili |
| `REINIT` |  | Laadib oma aliasefaili uuesti |
| `RENAME` | `-RENAME`, `REN` | Nimetab kihi või ploki ümber (iga objekt või viide järgib) |
| `REVCLOUD` | `RC` | Redaktsioonipilv: ümardab ristküliku, hulknurga, vabakäe raja või objekti (RC) |
| `REVOLVE` | `REV` | Pöörab suletud 2D-objektid telje ümber tahkisteks (3D) |
| `ROTATE` | `RO` | Pöörab objekte baaspunkti ümber |
| `SAMPLES` | `SAMPLE` | Avab ühe CadCrafti näidisjoonistest (arhitektuurikomplekt, teostusjoonis), et õppida |
| `SAVE` | `QSAVE` | Laadib joonise alla selle vormingus (DWG või DXF) |
| `SAVEAS` |  | Laadib joonise alla DWG või DXF-ina: vali, milline |
| `SAYSEL` |  | Ütleb, mis on valitud, iga objekt ühe lausega. |
| `SCALE` | `SC` | Skaleerib objekte baaspunkti ümber |
| `SCALELISTEDIT` | `SCALELIST` | Lisab, muudab ja kustutab joonise enda mõõtkavad; need ilmuvad vaateakna ja printimise mõõtkavade loendisse ning salvestatakse faili (SCALELIST) |
| `SCANALIGN` | `SCL` | Joondab skaneeritud lehe kahe punkti järgi: liigutab, pöörab ja soovi korral skaleerib. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Lisab skaneeritud joonise: PNG, JPEG või TIFF (üks leht või kõik mitmelehelise faili lehed) või PDF-lehe, mis on pilt. |
| `SCANCLEAN` | `SCC` | Muudab skaneeritud lehe mustvalgeks ja eemaldab täpid. |
| `SCANCROP` | `SCR` | Lõikab skaneeritud lehe aknaga. |
| `SCANDESKEW` | `SCD` | Leiab nurga, mille all skaneeritud lehe pikad jooned on, ja pöörab lehe ristseks, kui nurga kinnitad. |
| `SCANERASE` | `SCE` | Kustutab skaneeritud lehe ala: ristküliku, hulknurga või lasso. |
| `SCANINFO` | `SCI` | Näitab skaneeritud lehe algfaili ja sammud, mis on sellest alates tehtud. |
| `SCANSCALE` | `SCS` | Skaleerib skaneeritud lehe: vali sellel kaks punkti ja sisesta nende tegelik kaugus. |
| `SCANTRACE` | `SCT` | Joonistab skaneeritud lehe joonteks ja kaareks uuel kihil, määratud tolerantsiga. Tekst ja šrafuur jäävad rasterina. |
| `SELECT` |  | Valib objektid kohe (P, Previous, järgmises käsus) |
| `SELECTALL` | `AI_SELALL` | Valib kõik objektid, mida saab sellel vahelehel muuta (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Valib kõik objektid, nagu need, mida valid: sama tüüp, kiht ja värv (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Näitab paneeli Lehtede komplekt: lehed paljudest joonistest, nummerdatud, avaldatud ühe PDF-ina. |
| `SHORTCUTS` | `KEYS` | Annab mis tahes käsule oma klahvi (Ctrl või Alt tähega või vaba funktsiooniklahv), hoitud selles brauseris või töölauarakenduses. |
| `SHXFONTS` | `SHX` | Annab CadCraftile SHX-fondid kaustast või failidest, nii et tekstistiilid, mis neid nimetavad, joonistavad nendega (loetle, eemalda, pööra) |
| `SKETCHFIX` | `SKF` | Joonistab vabakäe jooni; iga üks muutub puhtaks joonеks, ringiks, kaareks, ristkülikuks või polyjooneks, ruudistatud ja teistega ühendatud. |
| `SKETCHLIVE` | `SKL` | Visandamine pliiatsiga: iga joon muutub täpseks joone, ringi, kaare või ristkülikuks, kui tõstad pliiatsi, joonisele püütuna, ja selle suurust saab üle kirjutada. |
| `SPLINE` | `SPL` | Joonistab splaini läbi punktide (või juhtpolügooniga) või muudab polyjoone splainiks |
| `SPLINEDIT` | `SPE` | Muudab splaini: sobitab punkte, juhtpunkte ja kaalusid, avab või sulgeb, pöörab või teisendab polyjooneks |
| `SPLIT` |  | Jagab joonistusala paneelideks (nagu VPORTS mudelil; ka lehelt) |
| `STEELMEMBER` | `SMEMBER` | Terastala 3D-s standardprofiilist: kaks punkti (talaks) või alusepunkt ja kõrgus (Column) |
| `STLOUT` |  | Ekspordib 3D-mudeli STL-ina (millimeetrites) |
| `STRETCH` | `S` | Venitamine: lohista ristakna üle otste, et liigutada; sees olev liigub, ülejäänu jääb paigale (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Tekstistiilid: font, kõrgus, laius ja kaldenurk, mida uus tekst kasutab (dialoog; käsureal -STYLE) |
| `SUBTRACT` | `SU` | Võtab tahkised teistelt ära (3D) või 2D-piirkonnad piirkondadelt |
| `SWBOUT` | `SWMACRO` | Laadib alla SolidWorksi makro (.swb), mis ehitab mudeli uuesti ühe piiratud visandina |
| `SWEEP` |  | Pühib suletud 2D-objekte mööda rada (joon, polyjoon, kaar, ring) tahkisteks (3D) |
| `TABLE` | `TB` | Teeb tabeli: read ja veerud või tabelarvutuse lahtritest lõikelaual või CSV-failist |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Muudab tabelit: kirjutab lahtrisse, lisab ja kustutab read ja veerud, suurused, ühendatud lahtrid, joonduse |
| `TABLEEXPORT` |  | Salvestab, mida tabel näitab, CSV-failina |
| `TABLEPASTE` | `PASTETABLE` | Teeb tabeli lõikelaual olevatest tabelarvutuse lahtritest |
| `TABLESTYLE` | `TS` | Tabelistiilid: teksti kõrgused, joondus, veeris ja jooned pealkirja-, päise- ja andmeridade jaoks |
| `TAGS` |  | Märgendid plokiviidetel: määrab märgendi (liik, lubatud väärtused, plokid, millele see kehtib), paneb selle valitud viidetele ja loetleb need graafikuna, mille võib salvestada CSV-na |
| `TEXT` | `DT`, `DTEXT` | Üherealine tekst; Enter alustab järgmist rida |
| `TEXTEDIT` | `ED`, `DDEDIT` | Muudab teksti kohapeal: vali tekst (või topeltklõps sellel) (ED) |
| `TEXTMASK` | `TMASK` | Paneb tekstide taha taustamaski (joonise taust või värv) või eemaldab selle. |
| `TEXTTOFRONT` |  | Toob kogu teksti, mõõdud ja juhikud kõige ette. |
| `TOOLBAR` |  | Valib, mida tööriistariba nupud näitavad: ikoonid ja tekst, ainult ikoonid või ainult tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Paneb tööriistariba akna ülemisse, alumisse, vasakusse või paremasse serva |
| `TOOLBARROWS` |  | Valib, mitu rida tööriistariba kasutab: mahuta, 2 või 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Muudab joonise kohal olevad ribad standardseks või kompaktseks |
| `TOUCHCROSSHAIR` | `TCX` | Nihutatud ristik sõrmega joonistamiseks: üks sõrm liigutab ristikut, mis asub sõrmest ülal ja kõrval, nii et sõrm ei kata valitavat punkti. Sõrme tõstmine ei vali midagi; nupp Klõps või puudutus teise sõrmega valib ristiku juurest, ja nupu hoidmine liigutamise ajal lohistab. Pikk vajutus või nupp Enter on Enter. Kaks sõrme liigutavad ja suumivad. Valikud: ON, OFF, Auto (sees ainult seal, kus sõrm on ainus osuti), Distance, Side. |
| `TOUR` | `TUTORIAL` | Teeb uuesti kuueastmelise esimese joonise tuuri |
| `TRIM` | `TR` | Lõikab objektid tagasi kohani, kus teised neid ristuvad: klõpsa tükki, lohista läbi mitme või Shift+klõps pikendamiseks |
| `TRIMEXTENDMODE` |  | Kuidas TRIM ja EXTEND algavad: 1 Quick (iga objekt on lõikeserv või piir), 0 Standard (esmalt vali servad) |
| `TTR` |  | Ring, mis puutub kahte objekti ja mille raadius on sinu antud (sama mis CIRCLE T). |
| `TURNLEFT` |  | Pöörab vaadet 90° vasakule (vastupäeva): UCS Z -90, ja vaade järgib. Joonisel miski ei liigu. |
| `TURNRIGHT` |  | Pöörab vaadet 90° paremale (päripäeva): UCS Z 90, ja vaade järgib. Joonisel miski ei liigu. |
| `TURNWORLD` |  | Tagasi maailma: UCS World, ja vaade on jälle horisontaalne. |
| `TXT2MTXT` | `T2M` | Ühendab üherealised tekstid üheks lõigutekstiks ülevalt alla. |
| `UCS` |  | Sinu oma koordinaatsüsteem: alguspunkt ja X-telg (origin, Z angle, 3point, OBject, Previous, World, NAmed). Sinu sisestatud punktid, ortho, polaarne jälgimine, ruudustik ja uus tekst järgivad seda; vaade pöördub nii, et selle X-telg on horisontaalne. Joonisel miski ei liigu. |
| `UNDO` | `U` | Võtab tagasi viimase käsu |
| `UNGROUP` |  | UNGROUP: võtab rühmad lahti. Vali rühmade objektid või anna nimi. Objektid jäävad joonisele. |
| `UNION` | `UNI` | Ühendab tahkised üheks (3D) või 2D-piirkonnad üheks piirkonnaks |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Näitab uuesti kõik objektid, mille ISOLATEOBJECTS või HIDEOBJECTS peitis. |
| `UNITS` | `UN`, `DDUNITS` | Kuidas pikkused näidatakse ja sisestatakse: kümnend, jalad ja tollid, murrud (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Arvutab väljad uuesti ja valib, millal need ise uuenevad |
| `USDOUT` |  | Ekspordib 3D-mudeli USD-na (.usda tekst, .usdc binaarne või .usdz-pakett) |
| `VIEW` | `-VIEW`, `V` | Standardsed 3D-vaated, perspektiivne või paralleelne (3D) |
| `VIEWBASE` | `FLATSHOT` | Paigutab 3D-tahkiste lameda 2D-vaate (eest, ülevalt, küljelt või isomeetriliselt; nähtamatud jooned katkendlikud) lehele või mudelisse |
| `VIEWLABEL` | `VL` | Vaate pealkiri lehel, mis näitab tema vaateakna vaate nime ja muutub selle koos. |
| `VOICE` |  | Lülitab kõneldud käsud sisse või välja. Need tuvastatakse selles arvutis. |
| `VPCLIP` |  | Lõikab lehe vaateakna suletud objektile või joonistatud hulknurgale; Delete muudab selle uuesti ristkülikuks |
| `VPLAYER` |  | Külmutab või sulatab kihid ainult mõnes vaateaknas (Freeze, Thaw, Reset) ja valib, millised kihid uued vaateaknad külmutatuna alustavad (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Jagab joonistusala paneelideks, igaühel oma vaade (lehel: vaateaken, nagu MVIEW) |
| `VPVIEW` |  | Määrab, mida vaateaken näitab: vali mudelil aken |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D-vaate visuaalne stiil: varjutatud, servad, peidetud jooned, traatmudel, röntgen |
| `WALL` | `WA` | Joonistab 2D-seinad nagu polyjoone. Need ühenduvad ja kannavad uksi ja aknaid. |
| `WALLARC` | `WARC` | Joonistab seinakaare. Plaani seinad on sirged, nii et kaar joonistatakse lühikeste sirgete seintena (igaüks 15 kraadi), mis ühenduvad. |
| `WALLDELSEG` |  | Kustutab seina tüki kahe punkti vahel. Järele jääb üks või kaks seina. |
| `WALLDIM` |  | Sisesta mõõdule uus väärtus: kaugemas otsas olev sein liigub ristselt iseendaga, algusotsas olev sein seisab ja sellega ühendatud seinad järgivad. |
| `WALLDISJOIN` |  | Vali sein otsa lähedal, et keelata ühendused selles otsas: ots joonistatakse ruudustikuna ja miski ei järgi. Vali uuesti, et lubada. |
| `WALLGRID` |  | Lukustab seina ruudustiku joonele: selle järgi või üks ots sellel. Liiguta joont GRIDMOVE-ga ja sein järgib. |
| `WALLHOLD` |  | Joondab ja lukustab: sein hoiab oma kohta teise seina suhtes (samal joonel või oma kaugusel). Kui üks liigub, järgib teine. |
| `WALLHOLDDIM` |  | Lukustab kahe paralleelse seina vahelise kauguse. Kui üks liigub, järgib teine, et seda hoida. |
| `WALLHOLDS` |  | Loetleb seinte lukud. |
| `WALLJOINS` |  | Annab vanema joonise igale seinale ID ja salvestab nendevahelised ühendused. See juhtub ka sinu esimesel muudatusel. |
| `WALLJOINSTYLE` |  | Klõpsa nurgal, kus kaks seina kohtuvad otsast otsa, et muuta selle joonistamist: lõikeühendus, lame, risti lõigatud. T vahetab, milline sein läbi läheb. |
| `WALLOFFSET` | `WO` | Liigutab seina risti iseendaga kauguse võrra (sellega ühendatud seinad järgivad) või teeb koopia sellel kaugusel. |
| `WALLPICK` |  | Teeb seinad joonel või polyjoonel joonisel, koos sellega ühendatud joontega, kui ütled Yes. |
| `WALLPOLY` | `WP` | Joonistab seinad korrapärase hulknurga ümber 3–64 küljega, nagu POLYGON. |
| `WALLRECT` | `WR` | Joonistab neli ühendatud seina kahest vastasnurgast, nagu RECTANG. |
| `WALLREJOIN` |  | Teeb seina kaks osa jälle üheks seinaks. Esimene jääb oma kohale joonisel. |
| `WALLROT` |  | Joonistab neli ühendatud seina pööratud ristkülikuna mis tahes nurga all: esimene külg, seejärel kui kaugele teine külg ulatub. |
| `WALLSPLIT` | `WS` | Jagab seina kaheks punktis või kohas, kus teine sein ristub. Osad jäävad ühendatuks, kui ei palu vahet ega vabu otsi. Uksed ja aknad lähevad koos oma osaga. |
| `WALLSPLITGAP` |  | Jagab seina nii, et jätab vahe: sisesta vahe, vali sein, siis punkt. Osadel on vabad otsad ja neid saab uuesti ühendada. |
| `WALLSTRETCH` |  | Venitab aknaga: seinaotsad selle sees liiguvad, täielikult sees olevad seinad liiguvad tervikuna ja külgedega kokku jooksvad seinad libisevad nendega. |
| `WALLTAN` |  | Jätkab seina kaarega, mis lahkub sellest mööda seina (joonistatud lühikeste sirgete seintena). |
| `WALLTRACE` |  | Teeb seinad väikseima suletud ala ümber joonte ja seinte vahel, mida klõpsad. |
| `WALLUNHOLD` |  | Eemaldab seina lukud (ja teiste seinte lukud sellele). |
| `WBLOCK` | `W`, `-WBLOCK` | Kirjutab ploki, mõned objektid või kogu joonise uude DWG- või DXF-faili (W) |
| `WEDGE` | `WE` | Kiil: kaks nurka ja kõrgus; kaldub esimesest nurgast eemale (3D) |
| `WHEREAMI` | `WHERE` | Ütleb, kus kursor on. |
| `WHOHAS` |  | Ütleb, kellel on joonis avatud. CadCraft Studio hoiab iga avatud joonise kõrval väikest lukufaili (Plan.dwg.cclock: kes, alates millal, milline versioon) ja eemaldab selle sulgemisel. Valikud: Current (avatud joonis), File (vali üks), FOlder (iga joonis kaustas, mis on kuskil avatud; see lubab Studiol hoida lukufaile selles kaustas), Path (sisesta üks), Name (nimi, mida teised näevad). Lukk, mida pole 5 minuti jooksul uuendatud, on vananenud. Brauseris pole saadaval. |
| `WINDOW` | `WN` | Paneb akna seina. |
| `XATTACH` | `XA` | Lingib teise DWG või DXF selle joonisega, näidatakse ainult lugemiseks (XREF loetleb ja laadib need uuesti) |
| `XCLIP` | `XC` | Lõikab plokiviited ja seotud joonised ristkülikuks või hulknurgaks või eemaldab lõike. |
| `XLINE` | `XL` | Konstruktsioonijoon, lõputu mõlemas suunas: läbi kahe punkti, horisontaalne, vertikaalne, nurga all, nurga poolitaja või joone suhtes nihutatud. |
| `XREF` | `XR`, `-XREF` | Seotud joonised (välised viited): loetle, kinnita, laadi uuesti, seo, eemalda |
| `ZOOM` | `Z` | Ulatus või aken |
