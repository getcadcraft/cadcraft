---
title: Mis on uut versioonis 0.7 (varasem)
summary: PDF-aluseid ja PDF-importi, skannitud jooniseid automaatse jälgimisega, päriseid splaine käskudega SPLINE, SPLINEDIT ja PEDIT, mõõtestiilide haldurit, teksti, mis säilitab oma vormingu, WBLOCK-i ja oma mõõtkavasid, 3D-tahkiseid teistest programmidest, skannide registreerimist, Laser-paneeli, USD-eksporti, ajalugu ja printimist CadCraft Studios, juhendatud esimest joonist, tööriistariba mis tahes küljel või vähemates ridades ning veel tehisintellekti assistentide jaoks.
keywords: mis on uut 0.7, varasem versioon, versioonimärkmed, muudatuste logi, muudatused, 0.7, versioon, uued funktsioonid, pdf, pdfattach, pdfimport, alus, skannimine, scanattach, scantrace, jälgimine, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, vormindus, wblock, scalelistedit, mõõtkavade loend, acis, 3D-tahkised, registerscans, skannide registreerimine, icp, e57, las, laser, grbl, g-kood, usd, usdout, ajalugu, versioonid, võrdlus, print, printer, png, svg, plotistiil, joonetüüp, ekskursioon, petuleht, käskude kaart, tööriistariba asukoht, tööriistariba read, toolbardock, regen, regenall, puuteplaat, pühkimine, koodileht, kirillitsa, korea, hiina, jaapani, elektri, rcd, p&id, pid, acad.lsp, acaddoc.lsp, toetuskaust, assistendid, mcp, ühikud, portugali
from: d07ca034
---

See on see, mis muutus versioonis CadCraft 0.7 võrreldes versiooniga 0.6. Suur osa sellest tuli Discordi kaudu kasutajate soovidena. Loend on rühmitatud valdkondade kaupa, kõige olulisem enne.

## Uus

### PDF-id ja skannitud joonised

- **Aseta PDF-lehekülg joonise alla.** {{cmd:PDFATTACH}} (`PDFATT`) paigutab lehekülje tegelikus suuruses või sinu sisestatud mõõtkavas. Püüa selle joontele, tuhmista seda, tee see monokroomseks ({{cmd:PDFADJUST}}), lõika see ({{cmd:PDFCLIP}}) ja lülita PDF-i enda kihid sisse-välja ({{cmd:PDFLAYERS}}). See plotitakse joonte, täidete ja tekstina ning DWG või DXF 2000 hoiab seda lingina faili juurde. Kui avad PDF-i käsuga {{ui:Open}}, küsitakse, kas see lisada või importida. Vt [PDF-alused ja PDF-import](topic:pdf-underlay).
- **Muuda PDF-lehekülg joonise objektideks.** {{cmd:PDFIMPORT}} (`PDFIM`) teeb PDF-i nimega kihtidele jooni, murdjooni, ringe, kaari, tahkeid viirutusi ja teksti tegelikus suuruses, sisestatud mõõtkavas või kahe punkti ja tegeliku vahemaa järgi skaleerituna, ühe tagasivõtmise sammuga. Vt [Lehekülje importimine](topic:pdf-underlay#import-a-page).
- **Skannitud joonised.** {{cmd:SCANATTACH}} toob sisse PNG-, JPEG- või TIFF-faili (ühe lehe või kõik) või PDF-lehekülje, mis on pilt. Seejärel skaleeri see kahe punkti järgi ({{cmd:SCANSCALE}}), joonda see ({{cmd:SCANALIGN}}), võta sirgeks oma pikkade joonte järgi ({{cmd:SCANDESKEW}}), tee mustvalgeks ja eemalda plekid ({{cmd:SCANCLEAN}}), lõika see ja kustuta osi. Iga samm on üks tagasivõtmise samm ning algne fail jääb alles. Vt [Skannitud joonised ja jälgimine](topic:scanned-drawings).
- **Jälgi skann joonteks ja kaarteks.** {{cmd:SCANTRACE}} joonistab skanni jooned joonte ja kaartena uuele kihile SCAN-TRACE, sinu määratud täpsusega, ning jätab teksti ja viirutuse samaks. Aruanne ütleb, mida ta tegi ja mida jättis, ja see ei väida, et tulemus on õige: kontrolli seda lehe järgi. {{cmd:RASTERSNAP}} laseb objektipüüdjatel leida skanni otsad, nurgad ja ristumised. Midagi ei saadeta kuhugi ega kasutata treenitud mudelit. Vt [Jälgimine](topic:scanned-drawings#the-trace).

### Joonistamine ja muutmine

- **Päris splainid.** {{cmd:SPLINE}} (`SPL`) joonistab kõvera läbi punktide või juhtpunktidest (aste 1 kuni 5), lõpupuutujatega; {{cmd:SPLINEDIT}} (`SPE`) liigutab, lisab ja kustutab sobitus- või juhtpunkte, seab kaalud, avab, sulgeb, pöörab ümber või muudab splaini murdjooneks. DWG- ja DXF-failidest tulevad splainid avatakse splainidena ning DWG ja DXF 2000 salvestavad need splainidena. Vt [Splainid ja murdjooned](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) sulgeb ja avab murdjooni, ühendab sellega jooned ja kaared, seab ühe laiuse, sobitab kõvera tippude kaudu või splaini nende järgi ning võtab selle tagasi käsuga Decurve, pöörab ümber ja muudab mitut korraga. Vt [Murdjoone muutmine](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) kirjutab ploki, mõned objektid või terve joonise uude DWG- või DXF-faili, mis sisaldab ainult nende kasutatud kihte, stiile ja plokke. Vt [Plokk või objektid eraldi faili kirjutamine](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN ja REGENALL.** {{cmd:REGEN}} (`RE`) joonistab uuesti vahekaardi, millel oled, joonisest; {{cmd:REGENALL}} (`REA`) kõik vahekaardid, paneelid ja avatud joonised. Vt [REGEN ja REGENALL](topic:commands#regen-and-regenall).

### Tekst ja mõõdud

- **Tekst säilitab oma vormingu.** Teistest programmidest pärit lõigutekst säilitab värvi sõnade kaupa, paksu ja kaldkirja, allajoonimise, kõrgete murdude ja kõrgused: neid joonistatakse ekraanil ja PDF-ides, need säilivad sõnade muutmisel ja salvestatakse tagasi. Vt [Vormindus teistest programmidest pärit lõigutekstis](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Mõõtestiilide haldur.** {{cmd:DIMSTYLE}} (`D`) loob, muudab, võrdleb ja rakendab nimega mõõtestiile; stiili muutmine muudab kõiki mõõtmeid, mis seda kasutavad. {{cmd:DIMEDIT}} (`DED`) paneb teksti tagasi, kirjutab uue teksti, pöörab seda või kallutab abijooni; {{cmd:DIMTEDIT}} liigutab teksti vasakule, paremale või keskele. Vt [Nimega mõõtestiilid](topic:dimension-settings#named-dimension-styles).
- **Oma mõõtkavad.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) lisab vaateakna ja plotimise mõõtkavade loenditesse mõõtkavu, näiteks 1:75. Need salvestatakse joonisega (DWG ja DXF 2000) ning teisest programmist tulev joonis toob kaasa oma loendi. Vt [Mõõtkavad](topic:units-papers-scales#scales).
- **Tekst teistes tähestikes.** DXF-failid, mis on salvestatud kirillitsa, korea, hiina, jaapani või vietnami koodilehel, avanevad nüüd koos oma tekstiga, ning hiina, jaapani ja korea tekst prinditakse PDF-idesse (plotimine laadib suurema fondi siis, kui seda esimest korda vaja läheb). Vt [Kirjatüüp](topic:text#font).

### Plotimine ja printimine

- **Rohkem plotistiili tabelites.** Iga värvi jaoks saab tabelis nüüd seada ka joonetüübi, joone lõpu ja joone ühenduse ning täitestiili, mis prindib tahked täited viirutusjoontena; tabelil on oma joonepaksuste loend ja joonetüübi mõõtkava. Vt [Plotistiili tabelid](topic:plot-pdf#plot-style-tables).
- **Printimine ning PNG- ja SVG-failid.** Plotimisdialoogis on {{ui:Print…}}, {{ui:Download PNG}} (300 dpi) ja {{ui:Download SVG}}. CadCraft Studios loetleb see arvuti printerid, nende paberi ja koopiate arvu. Vt [Printimine](topic:plot-pdf#print) ja [Pilt- ja SVG-failid](topic:plot-pdf#picture-and-svg-files).

### 3D ja punktipilved

- **Teistest programmidest pärit 3D-tahkised.** Tahkised, piirkonnad ja kehad joonise mudeliruumis kuvatakse 3D-vahekaardil ainult lugemiseks ning DWG-na salvestamine kirjutab need muutmata tagasi. Pindu, mida CadCraft veel ei joonista, loetletakse, neid ei arvata. Vt [Teistest programmidest pärit tahkised](topic:3d-solids#solids-from-other-programs).
- **Registreeri mitu skannit.** {{cmd:REGISTERSCANS}} (`REGSCAN`) paigutab eri asenditelt võetud skannid ühte raami punktipaaride või sisestatud sihtkoordinaatide järgi, täpsustab neid ICP-ga, salvestab registreerimise väikese projektifailina ning kirjutab registreeritud punktipilve ühe LAS- või E57-failina. Vt [Mitme skanni registreerimine üheks](topic:register-scans).
- **USD-eksport.** {{cmd:USDOUT}} või {{cmd:EXPORT3D}} › {{ui:USD}} kirjutab 3D-vahekaardi tahkised failidena `.usda`, `.usdc` või `.usdz`. Vt [3D-mudeli eksportimine USD-na](topic:usd).
- **Arvutused 3D-vahekaardil.** Kohas, kus 3D-vahekaardi tööriistad küsivad vahemaad, võid kirjutada arvutuse, nagu käsurealgi. Vt [Aritmeetika kirjutatud väärtuses](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Asjade valmistamine

- **Saada joonis lasersse.** {{cmd:LASER}} või {{ui:View}} › {{ui:More}} › {{ui:Laser…}} avab joonise kohal paneeli: iga kiht lõigatakse, kriipsutatakse, graveeritakse jooni, täidetakse kujundeid, graveeritakse pilt või ei saadeta, koos oma võimsuse, kiiruse ja läbikäikudega. Eelvaade järgib sinu muudatusi, {{ui:Save G-code…}} kirjutab GRBL-i laserrežiimi G-koodi ning Chrome'is või Edge'is saab paneel töö raamida ja saata USB kaudu. Sätted salvestatakse joonisega (DWG ja DXF). Vt [Joonise saatmine lasersse](topic:laser-cutting).
- **Hoone paigaldussümbolid elektri lisandmoodulis.** Andme-, telefoni- ja teleri pistikud, võtme- ja ajalülitid, termostaat, väljapääsumärgis, andurid, väljakutsenupp ja helisti, ventilaator, veeboiler, pliit, elektriauto laadimispunkt, energiamõõtja ja alamjaotus ning RCD- ja RCBO-sümbolid. Vooluringile saab lisada RCD, jaotustabelil on RCD-veerg ning kontrollid nimetavad pistikuringid, millel ei ole 30 mA või väiksemat RCD-d. See on planeerimismeeldetuletus, mitte normikontroll.
- **P&ID-lisandmoodul.** P&ID joonistab protsessiskeeme: sümbolid ühenduspunktidega, protsessi- ja signaaljooned, sildid, joonenumbrid, joone-, seadme-, instrumendi- ja ventiililoendid (CSV või töövihik) ning kontrollid. See tuleb CadCrafti kaasa ja on välja lülitatud, kuni lülitad selle sisse jaotises {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}. See on joonistamisabi, mitte insenerilik heakskiit, ja selle sõnad on praegu ainult inglise keeles.

### Alustamine ja ekraan

- **Juhendatud esimene joonis.** {{cmd:TOUR}} (või {{ui:Take the tour}} algusekaardil) juhatab sind läbi kuue sammu päris joonisel: joon, ring, teisaldamine, lõikamine, kustutamine ja mõõt. See algab iseenesest esimesel korral, kui CadCraft avaneb tühjana. Vt [Kas eelistad juhendamist?](topic:getting-started#prefer-to-be-guided)
- **Petuleht ja käskude kaart.** [Petuleht](topic:cheat-sheet) sisaldab 40 igapäevast käsku ühel leheküljel, ka PDF-ina printimiseks, ning [käskude kaart](topic:command-map) loetleb käsud nende lühinimedega tähestikulises järjekorras A kuni Z.
- **Tööriistariba igal pool.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar position}}: üleval (nagu varem), all, vasakul või paremal, või kirjuta {{cmd:TOOLBARDOCK}}. Vt [Tööriistariba asukoht](topic:settings#toolbar-position).
- **Tööriistariba read.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Toolbar rows}}: mahuta mahtuvaks, 2 rida või 1 rida, CadCrafti tööriistaribale ning stiilidele Drafting classic ja Ribbon. {{key:Shift+Ctrl+F1}} käib neist läbi, {{key:Ctrl+F1}} läbi selle, mida nupud näitavad, ja {{cmd:TOOLBARROWS}} ning {{cmd:TOOLBAR}} seavad need. Alustamisvihjel on sulgemisnupp. Tänu GJoe2-le, kes saatis selle pull requestina. Vt [Tööriistariba read](topic:settings#toolbar-rows).

### CadCraft Studios

- **Ajalugu.** {{cmd:HISTORY}} (`HIST`) või {{ui:View}} › {{ui:More}} › {{ui:History…}}: koopiad, mida Studio hoiab joonise avamisel ja salvestamisel, ning joonise pilveversioonid, kui avasid selle pilvest. Ava või taasta üks, või võrdle kahte, kusjuures lisatud, eemaldatud ja muudetud on värviga näidatud. Vt [Ajalugu](topic:history).
- **acad.lsp ja acaddoc.lsp.** Vali toetuskaust käsus {{cmd:APPLOAD}}: need kaks faili laaditakse CadCrafti käivitumisel (acaddoc.lsp uuesti iga uue joonise vahekaardi jaoks) ning `S::STARTUP` käivitub nende järel. Vt [Rakenduste laadimine](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Plotimisdialoog omaette aknas.** Nupp selle pealkirjaribal viib selle aknasse, mille saad panna teisele monitorile. Vt [Dialoogi liigutamine](common:arrange-panels#move-a-dialog).

### Tehisintellekti assistentidele

- **Failid nime järgi valitud kaustades.** CadCraft Studios saab assistent avada, salvestada ja plottida faile nime järgi ning anda käsule faili, mida see küsib (INSERT failist, COUNT-i eksport, SAVEAS, PLOT), kuid ainult kaustades, mille lisad jaotises {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Folders it may use}}. Vt [Luba kasutada faile valitud kaustades](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Vähem pöördumisi.** Assistent saab kirjutada terve käsurea ühe korraga, hoida käsu lahtisena pöördumiste vahel, lugeda objekte tüübi ja kihi järgi ilma neid loetlemata ning paigutada ploki koos atribuutide väärtustega ühe sammuga.
- **Ilma aknata.** Käsurida `cadcraft` kirjutab SVG-plotid ning teisendab, plotib, kontrollib või kirjeldab korraga paljusid faile. MCP-paketti pole veel avaldatud. Vt [Tööta failidega ilma CadCrafti avamata](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Muudetud

- **Puuteplaat nihutab.** Liiguta puuteplaadil kahte sõrme ja 2D-vaade järgib neid; näpistamine ja hiireratas suumivad. Vt [Hiir, puuteplaat ja puuteekraan](topic:mouse-trackpad-touch).
- **OLE-objektid säilivad.** DXF-i manustatud objektid näidatakse oma pildina või sildistatud raamina ning need salvestatakse tagasi DXF 2000-na. DWG-i omad säilivad ja kirjutatakse tagasi, kui salvestad DWG-na, kuid neid ei näidata veel. Varem kadusid need salvestamisel. Vt [Teistest programmidest pärit objektid (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Uue joonise ühikud** järgivad ühikut, mille tärniga märgid jaotises {{ui:Settings}} › {{ui:General}} › {{ui:Units}}.

## Parandatud

- Paigutused, mis avanesid tühjana või kaotasid vaateakna ja näitasid selle asemel kogu mudelit, avanevad nüüd oma õigete vaateaknatega. Paigutus, millel pole sisuga linki, säilitatakse ja avamisaruanne ütleb seda.
- Vanemates koodilehtedes DXF-failid näitasid moonutatud kirillitsat ja korea teksti. Need loetakse nüüd õigesti.
- Teistest programmidest pärit lõigutekst kaotas avamisel oma vormingu ja salvestati tagasi lihtsana.

## Kõigis rakendustes

- **Ühikud.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} sisaldab igaühe jaoks ühte loendit pikkusele, pindalale, mahule, nurgale ja kaldele, täpsete suurustega, mida ühikute definitsioonid annavad (USA mõõdistusjalg on oma ühik). Lülita välja ühikud, mida ei kasuta, ja need kaovad ühikuloenditest; märgi üks tärniga ja uus töö algab selles. Fail säilitab alati oma ühiku. CadCraftis seab tärn uue joonise ühikud, kui see on ühik, mida joonis saab kanda; CadCrafti oma {{ui:Units}} kast ei järgi lülitusi veel. Kui joonisel on ühikud, võib sisestatud pikkusel olla mis tahes ühiku tähis. Vt [Ühikud, sisestatud väärtused ja ühikuloendid](common:unit-lists).
- **Tihedam paigutus ja paneelid, mis taanduvad.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} mahutab ekraanile rohkem (puuteekraanid ja telefonid säilitavad oma suured nupud). Igal külgpaneelil on kitsas pealkirjariba: lohista see dokkimiseks või paneeli ujuvaks tegemiseks, pane see teise paneeli ribale, et jagada üks raam vahekaartidena, kinnita see, et see libiseks servale, või peida see ja too servast tagasi. Vt [Paneelide korrastamine](common:arrange-panels#make-the-layout-denser).
- **Dialoogid liiguvad.** Lohista dialoogi selle pealkirjaribast joonisest eemale; see tuleb tagasi sinna, kust lahkusid. Topeltklõps pealkirjaribal tsentreerib selle uuesti. Vt [Dialoogi liigutamine](common:arrange-panels#move-a-dialog).
- **Retseptid tehisintellekti assistentidele.** Kümme töönäidet sinu enda assistendile (joonise korrastamine, komplekti plottimine, joonise kontrollimine, mudelile küsimuste esitamine, koguste arvestuse koondamine, detaili variandi proovimine …), igaüks koos tööriistadega, mida ta kutsub, ja vajalike lubadega, ning iga üks käitatakse meie testidega uuesti. Rakendused ei sisalda tehisintellekti. Vt [Retseptid tehisintellekti assistentidele](common:assistants-recipes).
- **Keeled.** **Português (Portugal)** on uus jaotises {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. See ning **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** on nüüd rakendustes kõigi sõnadega, mustanditena, mida emakeelne kõneleja pole veel üle vaadanud. Abiteemad on inglise keeles.
- **CadCraft Studio** ütleb, miks uuenduse kontroll ebaõnnestus (sinu süsteemi jaoks pole veel faili, puudub võrk, vale allkiri), selle asemel et ainult „Valmis“ näidata, ning ei too enam tagasi Mis on uut kaarti, mille sulgesid, kuni on uuem väljalase.

## Seda versiooni veel pole

- **0.7 pole koodiga allkirjastatud.** Allkirjastamine ja Microsoft Store'i pakett lükkusid versiooni 0.8 juurde, sest sertifikaadi kinnitus pole veel tulnud. Kontrolli iga faili kõrval olevat SHA-256-d lehel getcadcraft.com/download. Windowsis, kui SmartScreen peatab paigaldaja, vali {{ui:More info}}, seejärel {{ui:Run anyway}}. Macis tee esimesel korral CadCraft Studio kohal parem klõps ja vali {{ui:Open}}. CadCraft Studio pole veel rakenduste poes ning iPadi ega iPhone'i versiooni pole veel.
- Nurga- ja kaldeloendeid jaotises {{ui:Units}} salvestatakse, kuid ükski kast neid veel ei loe.
- DWG-i OLE-objektid säilivad, kuid neid ei näidata, ja OLE-objektides olevaid metafailipilte ei joonistata.
- Teistest programmidest pärit plotistiili tabelite (CTB-failid) lugemine ootab näidisfaili.
- Vanemat aasia teksti, mis on kirjutatud koodidena `\M+`, loetakse, kuid seda pole veel kontrollitud teisest programmist pärit failiga.
- PDF-alused: lehe sees olevaid pilte näidatakse ekraanil, kuid neid ei plotita; assistendi plot jätab alused välja ning pole kontrollitud, kuidas teised programmid loevad salvestatud lõiget ja mõõtkava.
- Ajalugu: CadCraft ei saada oma salvestusi veel pilve, nii et pilveversioonid on need, mis on salvestatud teistest seadmetest ja veebist. Ajalugu on ainult CadCraft Studios.
- Pole veel kontrollitud, kas Studio säilitab acad.lsp toetuskausta pärast taaskäivitamist; kui see küsib, vali kaust uuesti käsus APPLOAD.
- Laseripaneeli pole veel päris laseril proovitud: kontrolli iga seadistust jäägil. CadCraft Studios puudub Web Serial, seega Studios salvestab paneel ainult G-koodi.
- Skannide registreerimist on proovitud väljamõeldud skannidega, mitte veel päris skanneri komplektiga.
- Kahe sõrmega nihutamist on proovitud simuleeritud puuteplaadi sündmustega, mitte veel päris puuteplaadil.
- {{cmd:PEDIT}}il pole valikut Edit vertex (kasuta haaranguid või omadusi). Nihe, lõikamine, pikendamine, ümardus, katkestamine ja ühendamine ei võta veel splaine; splaini kõrgust (Z) ei säilitata.
- Uuele lõigutekstile ei saa veel anda vormingukoode ning SVG-plotid näitavad vormindatud teksti ühes värvis.
- WBLOCK-i valik Entire drawing kirjutab ainult mudeli, mitte lehed. Praegust mõõtestiili ei salvestata failis: joonis avaneb praeguse stiiliga Standard.
- Lintmenüü stiilidel pole veel kihtide, värvide ega joonetüüpide loendeid: kasuta paneeli {{ui:Layers}} ja {{ui:Properties}}.
- Punktipilvi ei salvestata veel joonisesse ega plotita ning E57-failid avanevad kuni 6 miljoni punkti ja 512 MB-ni.
- CadCrafti salvestatud DWG-faile pole veel kontrollitud AutoCADis endas.

Kõik muu on jaotises [Veel ehitamata](topic:not-built-yet).
