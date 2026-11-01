---
title: Mis on uut versioonis 0.7
summary: PDF-aluspildid ja PDF-import, skannitud joonised automaatse jälgimisega, päris splainid käskudega SPLINE, SPLINEDIT ja PEDIT, mõõdustiilide haldur, tekst, mis säilitab vormingu, WBLOCK ja sinu enda mõõtkavad, 3D-solidid teistest programmidest, skannide registreerimine, laserpaneel, USD-eksport, ajalugu ja printimine CadCraft Studios, juhendatud esimene joonis, tööriistariba mis tahes küljel või vähemates ridades ning muudatused tehisintellekti assistentidele.
keywords: mis on uut, muudatuste logi, väljalaskemärkmed, muudatused, 0.7, versioon, uued funktsioonid, pdf, pdfattach, pdfimport, aluspilt, skann, scanattach, scantrace, jälgimine, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, vormindus, wblock, scalelistedit, mõõtkavade loend, acis, 3d solidid, registerscans, registreeri skannid, icp, e57, las, laser, grbl, g-code, usd, usdout, ajalugu, versioonid, võrdlus, print, printer, png, svg, trükistiil, joonetüüp, ekskursioon, kiirviide, käskude kaart, tööriistariba asukoht, tööriistariba read, toolbardock, regen, regenall, puuteplaat, pühkimine, koodilehekülg, kirillitsa, korea, hiina, jaapani, elektriline, rcd, p&id, pid, acad.lsp, acaddoc.lsp, toetuskaust, assistendid, mcp, ühikud, portugali
from: b9258ca6
---

Siin on, mis muutus CadCraft 0.7-s võrreldes versiooniga 0.6. Suure osa sellest palusid kasutajad Discordis. Loend on rühmitatud valdkonniti, tähtsaim enne.

## Uus

### PDF-id ja skannitud joonised

- **Aseta PDF-lehe joonise alla.** {{cmd:PDFATTACH}} (`PDFATT`) paigutab lehe tõelises suuruses või sinu sisestatud mõõtkavas. Joonda selle joontele, tuhmenda, muuda monokroomseks ({{cmd:PDFADJUST}}), lõika ({{cmd:PDFCLIP}}) ja lülita PDF-i enda kihid sisse ja välja ({{cmd:PDFLAYERS}}). See trükitakse joontena, täidetena ja tekstina ning DWG või DXF 2000 säilitab selle lingina failile. {{ui:Ava}} abil PDF-i avamisel küsitakse, kas kinnitada või importida. Vaata [PDF-aluspildid ja PDF-import](topic:pdf-underlay).
- **Muuda PDF-lehe joonise objektideks.** {{cmd:PDFIMPORT}} (`PDFIM`) teeb jooni, murdjooni, ringe, kaari, tahkeid viirutusi ja teksti kihtidele, mis on nimetatud PDF-i järgi, tõelises suuruses, sisestatud mõõtkavas või kahe punkti ja tegeliku kauguse järgi mõõtkavastatuna, ühe tagasivõtmise sammuga. Vaata [Lehe importimine](topic:pdf-underlay#import-a-page).
- **Skannitud joonised.** {{cmd:SCANATTACH}} toob sisse PNG-, JPEG- või TIFF-faili (üks leht või kõik) või PDF-lehe, mis on pilt. Seejärel skaleeri see kahe punkti järgi ({{cmd:SCANSCALE}}), joonda ({{cmd:SCANALIGN}}), joonda ristnurk oma pikkade joonte järgi ({{cmd:SCANDESKEW}}), tee mustvalgeks ja eemalda laigud ({{cmd:SCANCLEAN}}), lõika ning kustuta osi. Iga samm on üks tagasivõtmise samm ja algne fail säilib. Vaata [Skannitud joonised ja jälgimine](topic:scanned-drawings).
- **Jälgi skann joonteks ja kaarteks.** {{cmd:SCANTRACE}} joonistab skanni jooned joontena ja kaartena uuele kihile SCAN-TRACE, sinu seatud täpsusega, ning jätab teksti ja viirutused nii, nagu need on. Aruanne ütleb, mis tehti ja mis jäeti, ega väida, et tulemus on õige: kontrolli seda lehe vastu. {{cmd:RASTERSNAP}} laseb objektihaakedel leida skanni otspunktid, nurgad ja ristumiskohad. Midagi ei saadeta kuhugi ning ühtegi treenitud mudelit ei kasutata. Vaata [Jälgimine](topic:scanned-drawings#the-trace).

### Joonistamine ja redigeerimine

- **Päris splainid.** {{cmd:SPLINE}} (`SPL`) joonistab kõvera läbi punktide või juhtpunktidest (aste 1 kuni 5), lõpptangentidega; {{cmd:SPLINEDIT}} (`SPE`) teisaldab, lisab ja kustutab sobitus- või juhtpunkte, seab kaale, avab, sulgeb, pöörab ümber või muudab splaini murdjooneks. Splainid DWG- ja DXF-failidest avanevad splainidena ning DWG ja DXF 2000 salvestavad need splainidena. Vaata [Splainid ja murdjooned](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) sulgeb ja avab murdjooned, ühendab nendega jooni ja kaari, seab ühe laiuse, sobitab kõvera tippude läbi või splaini nende järgi ning võtab selle tagasi käsuga Decurve, pöörab ümber ja muudab mitut korraga. Vaata [Murdjoone muutmine](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) kirjutab ploki, mõned objektid või kogu joonise uude DWG- või DXF-faili, mis sisaldab ainult kasutatud kihte, stiile ja plokke. Vaata [Ploki või objektide kirjutamine oma faili](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN ja REGENALL.** {{cmd:REGEN}} (`RE`) joonistab uuesti vahekaardi, millel oled, joonisest; {{cmd:REGENALL}} (`REA`) kõik vahekaardid, paanid ja avatud jooniseid. Vaata [REGEN ja REGENALL](topic:commands#regen-and-regenall).

### Tekst ja mõõdud

- **Tekst säilitab vormingu.** Teistest programmidest tulev lõigutekst säilitab värvid sõnade kaupa, paksu ja kaldkirja, allajoonimise, virnastatud murrud ja kõrgused: need joonistatakse ekraanile ja PDF-idesse, säilivad, kui sõnu muudad, ja salvestuvad tagasi. Vaata [Teistest programmidest tuleva lõigu vormindus](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Mõõdustiilide haldur.** {{cmd:DIMSTYLE}} (`D`) loob, muudab, võrdleb ja rakendab nimetatud mõõdustiile; stiili muutmine muudab kõiki selle kasutavaid mõõte. {{cmd:DIMEDIT}} (`DED`) paneb teksti tagasi, sisestab uue teksti, keerab seda või kallutab mõõtejooni; {{cmd:DIMTEDIT}} viib teksti vasakule, paremale või keskele. Vaata [Nimetatud mõõdustiilid](topic:dimension-settings#named-dimension-styles).
- **Sinu enda mõõtkavad.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) lisab mõõtkavu nagu 1:75 vaateakna ja trükkimise mõõtkavade loenditesse; need salvestuvad joonisesse (DWG ja DXF 2000) ning teisest programmist tulev joonis toob oma loendi kaasa. Vaata [Mõõtkavad](topic:units-papers-scales#scales).
- **Tekst teistes tähestikes.** DXF-failid, mis on salvestatud kirillitsa, korea, hiina, jaapani või vietnami koodilehekülgedel, avanevad nüüd oma tekstiga, ning hiina, jaapani ja korea tekst trükitakse PDF-idesse (trükkimine laeb suurema kirja, kui seda esimest korda vaja läheb). Vaata [Kiri](topic:text#font).

### Trükkimine ja printimine

- **Rohkem trükistiilide tabelites.** Iga värvi jaoks saab tabel nüüd seada ka joonetüübi, joone lõpu ja liitekoha ning täitestiili, mis trükib tahked täitmised viirutusjoontena; tabelil on oma joonepaksuste loend ja joonetüübi mõõtkava. Vaata [Trükistiili tabelid](topic:plot-pdf#plot-style-tables).
- **Print, PNG- ja SVG-failid.** Trükkimise dialoogil on {{ui:Prindi…}}, {{ui:Laadi alla PNG}} (300 dpi) ja {{ui:Laadi alla SVG}}. CadCraft Studios loetleb arvuti printerid, nende paberi ja koopiate arvu. Vaata [Printimine](topic:plot-pdf#print) ja [Pildi- ja SVG-failid](topic:plot-pdf#picture-and-svg-files).

### 3D ja punktipilved

- **3D-solidid teistest programmidest.** Solidid, piirkonnad ja kehad joonise mudeliruumis näidatakse vahekaardil 3D, ainult lugemiseks, ning DWG-na salvestamine kirjutab need tagasi muutmata. Pindadel olevad tahud, mida CadCraft veel ei joonista, on loetletud, mitte arvatud. Vaata [Teistest programmidest tulevad solidid](topic:3d-solids#solids-from-other-programs).
- **Registreeri mitu skannit.** {{cmd:REGISTERSCANS}} (`REGSCAN`) paigutab erinevatest asukohtadest võetud skannid ühte raamistikku punktipaaride või sisestatud sihtkoordinaatide järgi, täpsustab need ICP-ga, salvestab registreerimise väikese projektifailina ning kirjutab registreeritud punktipilve ühe LAS- või E57-failina. Vaata [Mitme skanni registreerimine üheks](topic:register-scans).
- **USD-eksport.** {{cmd:USDOUT}} või {{cmd:EXPORT3D}} › {{ui:USD}} kirjutab vahekaardi 3D solidid `.usda`, `.usdc` või `.usdz`-na. Vaata [3D-mudeli eksportimine USD-na](topic:usd).
- **Arvutused vahekaardil 3D.** Kui vahekaardi 3D tööriistad küsivad kaugust, saad sisestada arvutuse, nagu käsureal. Vaata [Aritmeetika sisestatud väärtuses](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Tegemine

- **Saada joonis lasergraveerijale.** {{cmd:LASER}} või {{ui:Vaade}} › {{ui:Veel}} › {{ui:Laser…}} avab joonise kohale paneeli: iga kiht lõikab, kriibib, graveerib jooni, täidab kujundid, graveerib pildi või ei saadeta, koos oma võimsuse, kiiruse ja läbikordustega. Eelvaade järgib sinu muudatusi, {{ui:Salvesta G-kood…}} kirjutab GRBL-laserrežiimi G-koodi ning Chrome'is või Edge'is saab paneel joonistada töö piirjoone ja saata töö USB kaudu. Seaded salvestuvad joonisesse (DWG ja DXF). Vaata [Joonise saatmine lasergraveerijale](topic:laser-cutting).
- **Elektrilisandmooduli hoone paigaldussümbolid.** Andmepistikud, telefonipistikud ja TV-pistikud, võtme- ja ajalülitid, termostaat, väljapääsumärk, andurid, kutsepunkt ja kõlar, ventilaator, boiler, pliit, elektriauto laadimispunkt, energiaarvesti ja alajaotusplokk ning RCD- ja RCBO-sümbolid. Vooluringil võib olla RCD, paneeli skeemil on RCD-veerg ning kontrollid nimetavad pistikute vooluringid, millel pole RCD-d 30 mA või vähem. See on planeerimise meeldetuletus, mitte koodikontroll.
- **P&ID-lisandmoodul.** P&ID joonistab protsessiskeeme: ühenduspunktidega sümbolid, protsessi- ja signaalijooned, sildid, joonenumbrid, joonte, seadmete, instrumentide ja ventiilide loendid (CSV või töövihik) ning kontrollid. See tuleb CadCraftiga kaasa ja on välja lülitatud, kuni lülitad selle sisse jaotises {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Lisandmoodulid}}. See on joonistusabi, mitte insenerlik heakskiit, ning selle sõnad on praegu ainult inglise keeles.

### Algus ja ekraan

- **Juhendatud esimene joonis.** {{cmd:TOUR}} (või {{ui:Alusta ekskursiooni}} alguskaardil) juhatab sind läbi kuue sammu päris joonisel: joon, ring, teisaldamine, lõikamine, kustutamine ja mõõt. See algab iseenesest, kui CadCraft esimest korda avaneb tühjana. Vaata [Eelistad juhendatud režiimi?](topic:getting-started#prefer-to-be-guided).
- **Kiirviide ja käskude kaart.** [Kiirviide](topic:cheat-sheet) sisaldab 40 igapäevast käsku ühel lehel, ka PDF-ina trükkimiseks, ning [käskude kaart](topic:command-map) loetleb käske lühinimedega A-st Z-ni.
- **Tööriistariba mis tahes küljel.** {{ui:Sätted}} › {{ui:CadCraft}} › {{ui:Tööriistariba asukoht}}: ülal (nagu varem), all, vasakul või paremal, või sisesta {{cmd:TOOLBARDOCK}}. Vaata [Tööriistariba asukoht](topic:settings#toolbar-position).
- **Tööriistariba read.** {{ui:Sätted}} › {{ui:CadCraft}} › {{ui:Tööriistariba read}}: mahuta sobivaks, 2 rida või 1 rida, CadCrafti tööriistaribale ning stiilidele Drafting classic ja Ribbon. {{key:Shift+Ctrl+F1}} käib neid läbi, {{key:Ctrl+F1}} nuppude näidatava sisu läbi, ning {{cmd:TOOLBARROWS}} ja {{cmd:TOOLBAR}} seavad need. Alguse vihjel on sulgemisnupp. Tänan GJoe2-d, kes saatis selle pull requestina. Vaata [Tööriistariba read](topic:settings#toolbar-rows).

### CadCraft Studios

- **Ajalugu.** {{cmd:HISTORY}} (`HIST`) või {{ui:Vaade}} › {{ui:Veel}} › {{ui:Ajalugu…}}: koopiad, mida Studio hoiab joonist avades ja salvestades, ning joonise pilveversioonid, kui avasid selle pilvest. Ava või taasta üks või võrdle kahte; lisatud, eemaldatud ja muudetud on värviliselt näidatud. Vaata [Ajalugu](topic:history).
- **acad.lsp ja acaddoc.lsp.** Vali toetuskaust käsus {{cmd:APPLOAD}}: need kaks faili laaditakse CadCrafti käivitamisel (acaddoc.lsp uuesti iga uue joonise vahekaardi jaoks) ning pärast neid käivitub `S::STARTUP`. Vaata [Rakenduste laadimine](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Trükkimise dialoog omaette aknas.** Nupp selle pealkirjaribal teisaldab dialoogi aknasse, mille saad panna teisele monitorile. Vaata [Dialoogi liigutamine](common:arrange-panels#move-a-dialog).

### Tehisintellekti assistentidele

- **Failid nime järgi kaustades, mille valid.** CadCraft Studios saab assistent avada, salvestada ja trükkida faile nime järgi ning anda käsule faili, mida see küsib (INSERT failist, COUNT-i eksport, SAVEAS, PLOT), kuid ainult kaustades, mille lisad jaotises {{ui:Sätted}} › {{ui:CadCraft}} › {{ui:Assistendid}} › {{ui:Kaustad, mida ta võib kasutada}}. Vaata [Lase tal kasutada faile kaustades, mille valid](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Vähem kõnesid.** Assistent saab sisestada terve käsurea korraga, hoida käsku avatuna oma kõnede vahel, lugeda objekte tüübi ja kihi järgi loendamata neid nimekirjana ning paigutada ploki koos atribuutide väärtustega ühe sammuga.
- **Ilma aknata.** Käsurida `cadcraft` kirjutab SVG-trükiseid ning teisendab, trükib, kontrollib või kirjeldab paljusid faile korraga. MCP-pakett pole veel avaldatud. Vaata [Failidega töötamine ilma CadCrafti avamata](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Muudetud

- **Puuteplaat liigutab vaadet.** Liiguta kahe sõrmega puuteplaadil ja 2D-vaade järgib neid; näpuliigutus ja hiireratas suumivad. Vaata [Hiir, puuteplaat ja puuteekraan](topic:mouse-trackpad-touch).
- **OLE-objektid säilivad.** DXF-i sisestatud objektid näidatakse oma pildina või sildistatud raamina ning DXF 2000 salvestab need tagasi. DWG-i omad säilivad ja kirjutatakse DWG-na salvestamisel tagasi, kuid neid ei näidata veel. Varem kaotati need salvestamisel. Vaata [Teistest programmidest tulevad objektid (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Uue joonise ühikud** järgivad ühikut, mille märgid jaotises {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Ühikud}}.

## Parandatud

- Lehed, mis avanesid tühjana või kaotasid vaateakna ja näitasid vaateakna asemel kogu mudelit, avanevad nüüd oma õigete vaateakendega. Leht ilma sisuga seotud linkita säilib ja avamise aruanne ütleb seda.
- DXF-failid vanemates koodilehekülgedes näitasid moonutatud kirillitsa ja korea teksti. Nüüd loetakse need õigesti.
- Teistest programmidest tulev lõigutekst kaotas avamisel vormingu ja salvestati tagasi lihtsana.

## Igas rakenduses

- **Ühikud.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Ühikud}} sisaldab iga pikkuse, pindala, mahu, nurga ja kalde jaoks ühte loendit, täpsete suurustega vastavalt ühikute definitsioonidele (USA mõõdistusjalg on oma ühik). Lülita välja ühikud, mida ei kasuta, ja need lahkuvad ühikute loendist; tärniga märgitud ühikuga algab uus töö selles. Fail säilitab alati oma ühiku. CadCrafti puhul seab tärn uue joonise ühikud, kui see on ühik, mida joonis saab kanda; CadCrafti enda kast {{ui:Ühikud}} ei järgi veel lüliteid. Kui joonisel on ühikud, võib sisestatud pikkus kanda mis tahes ühiku märki. Vaata [Ühikud, sisestatud väärtused ja ühikute loendid](common:unit-lists).
- **Tihedam paigutus ja paneelid, mis taanduvad.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Paigutuse tihedus}} › {{ui:Tihe}} mahutab ekraanile rohkem (puuteekraanid ja telefonid säilitavad suured nupud). Igal külgpaneelil on kitsas pealkirjariba: lohista see, et paneel dokkida või lahti hõljutada; pane see teise paneeli ribale, et jagada üht raami sakina; kinnita see, et see libiseks serva; või peida see ja too serva pealt tagasi. Vaata [Paneelide paigutamine](common:arrange-panels#make-the-layout-denser).
- **Dialoogid liiguvad.** Lohista dialoogi pealkirjaribast joonisest eemale; see tuleb tagasi sinna, kus jätsid. Topeltklõpsa pealkirjaribal, et see uuesti keskele seada. Vaata [Dialoogi liigutamine](common:arrange-panels#move-a-dialog).
- **Retseptid tehisintellekti assistentidele.** Kümme töötatud päringut sinu enda assistendile (joonise korrastamine, komplekti trükkimine, joonistuste kontroll, mudelile küsimuste esitamine, koguste kokkuvõte, detaili variandi proovimine …), igaüks koos tööriistadega, mida ta kutsub, ja õigustega, mida ta vajab, ning igaüks korratud meie testidega. Rakendused ei sisalda tehisintellekti. Vaata [Retseptid tehisintellekti assistentidele](common:assistants-recipes).
- **Keeled.** **Português (Portugal)** on uus jaotises {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Keel}}. See, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** sisaldavad nüüd kõiki rakenduste sõnu, kuid on mustandid, mida pole emakeelne kasutaja üle vaadanud. Abi teemad on inglise keeles.
- **CadCraft Studio** ütleb, miks värskenduse kontroll ebaõnnestus (failid sinu süsteemi jaoks puuduvad, võrku pole, halb allkiri), selle asemel et lihtsalt „Valmis“, ning ei too enam tagasi kaarti Mis on uut, mille sulgesid, kuni on uuem väljalase.

## Pole selles versioonis veel

- **0.7 pole koodiga allkirjastatud.** Allkirjastamine ja Microsofti Store'i pakett lükati versioonile 0.8, sest sertifikaadi kinnitus pole veel tulnud. Kontrolli iga faili kõrval olevat SHA-256 lehel getcadcraft.com/download. Windowsis, kui SmartScreen peatab paigaldaja, vali {{ui:Rohkem teavet}}, siis {{ui:Käivita siiski}}. Macis vali esmakordselt CadCraft Studio parema hiireklõpsuga ja vali {{ui:Ava}}. CadCraft Studio pole veel rakenduste poes ning iPadi ega iPhone'i versiooni pole veel.
- Nurga- ja kaldeloendid jaotises {{ui:Ühikud}} salvestatakse, kuid ükski kast neid veel ei loe.
- DWG OLE-objektid säilivad, kuid neid ei näidata, ja OLE-objektide sees olevaid metafailipilte ei joonistata.
- Teistest programmidest tulevate trükistiili tabelite (CTB-failid) lugemine ootab näidisfaili.
- Vanemad Aasia tekstid, mis on kirjutatud `\M+` koodidena, loetakse, kuid neid pole veel teise programmi failiga kontrollitud.
- PDF-aluspildid: lehe sees olevaid pilte näidatakse ekraanil, kuid neid ei trükita; assistendi trükk jätab aluspildid välja ning seda, kuidas teised programmid salvestatud lõiget ja mõõtkava loevad, pole neis kontrollitud.
- Ajalugu: CadCraft ei saada veel oma salvestusi pilve, nii et pilveversioonid on need, mis on salvestatud teistest seadmetest ja veebist. Ajalugu on ainult CadCraft Studios.
- Kas Studio säilitab acad.lsp toetuskausta pärast taaskäivitamist, pole veel kontrollitud; kui küsitakse, vali kaust käsus APPLOAD uuesti.
- Laserpaneeli pole veel päris laserlõikuril katsetatud: proovi iga seadet jäägil. CadCraft Studios pole Web Serial'it, seega Studios salvestab paneel ainult G-koodi.
- Skannide registreerimist on katsetatud tehtud skannidega, mitte veel päris skanneri komplektiga.
- Kahe sõrmega nihutamist on katsetatud simuleeritud puuteplaadi sündmustega, mitte veel päris puuteplaadiga.
- {{cmd:PEDIT}}-il pole valikut tippude muutmiseks (kasuta haardeid või Omadusi). Nihutamine, lõikamine, pikendamine, ümardamine, katkestamine ja ühendamine ei võta veel splaine; splaini kõrgust (Z) ei säilitata.
- Uut lõigutekstit ei saa veel vormindada koodidega ning SVG-trükised näitavad vormindatud teksti ühes värvis.
- WBLOCK-i valik Entire drawing kirjutab ainult mudeli, mitte lehti. Praegune mõõdustiil ei salvestu failis: joonis avaneb praeguse stiiliga Standard.
- Lindi menüü stiilidel pole veel kihi-, värvi- ega joonetüübi loendeid: kasuta paneele {{ui:Kihid}} ja {{ui:Omadused}}.
- Punktipilved pole veel salvestatud joonisesse ega trükitud, ning E57-failid avanevad kuni 6 miljoni punkti ja 512 MB-ni.
- CadCrafti salvestatud DWG-faile pole veel AutoCAD-is endas kontrollitud.

Kõik muu on jaotises [Pole veel valmis](topic:not-built-yet).
