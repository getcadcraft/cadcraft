---
title: Mis on uut versioonis 0.9
summary: Viirutused, mis järgivad oma piiri, kihirühmad, kihistatud korrused, 2D-nutiseinad koos uste ja akende, tekstistiilid ja vormindatud tekstiredaktor, ujuv käsurida, ruudustikule haakumine, kümme viisi kaare joonistamiseks ja Dokumentide paneel.
keywords: mis on uut, 0.9, versioonimärkmed, muudatuste logi, hatch, viirutus, seotud viirutus, hatchedit, pat-fail, mustrifail, kihirühmad, laygroup, korrused, kihistatud korrused, floorlayers, nutikad seinad, sein, uks, aken, seinatööriistad, tekstistiil, stiil, mtext-redaktor, lõigutekst, vormindus, ujuv käsurida, käsurida, ülemine ala, kompaktne, ruudustikule haakumine, f9, kaar, dokumentide paneel, väljavõtmine, UK terasmõõdud, draw.io, tai tekst, dxf r12, 0.8, 0.8.1, versioon, uued funktsioonid, automaatne lõpetamine, kummitus, tab, sketchfix, photosketch, autosheet, detailid, gridmove, autodim, sildid, redline, ühendamine, git, fossil, juurdepääs, joonistamine ilma nägemiseta, ekraanilugeja, piirid, suunad, aunits, shx, diagramm, ole, ajalugu, võrdlus, sõnades, omadused, jalad ja tollid, venitamine, keeled, sisendseadmed, probleemid, live, assistendid
from: 8b6dea0b
---

See on see, mis muutus versioonis CadCraft 0.9 võrreldes versiooniga 0.8.1. CadCraft on CadCraft Studio 0.9 2D- ja 3D-joonistusrakendus ning selle kaheksa rakendust. Versioon 0.9 lõpetab plaani joonistamise, lisab tekstistiilid ja päris tekstiredaktori ning annab ekraanile rohkem ruumi.

## Uus

### Plaanijoonistus

- **Viirutused, mis järgivad oma piiri.** {{cmd:HATCH}} seob viirutuse selle piiriga. Kui piiri teisaldad, pöörad või skaleerid, järgivad viirutus ja selle muster; kui kuju muudad, arvutatakse viirutus uuesti. {{cmd:HATCHEDIT}} (`HE`) muudab viirutust hiljem ning loob või lõpetab seose. Vt [Viirutus ja täidetavad alad](topic:hatch).
- **Viirutusmustri failid.** Küsimuses {{cmd:HATCH}} `Pick internal point` kirjuta `F` (Mustrifail) ja vali `.pat`-fail. On proovitud ainult faile, mis on kirjutatud tavalises vormingus.
- **Kihirühmad.** Paneelil {{ui:Layers}} jaotises {{ui:Tools}}: {{ui:New group}}, {{ui:Add ready-made groups}}, {{ui:Group by name}} ja {{ui:Find a layer}}; või kirjuta {{cmd:LAYGROUP}} (`LG`). Vt [Joonise korrastamine kihtide abil](topic:layers#group-layers).
- **Kihistatud korrused.** {{cmd:FLOORS}} (`FLR`) või {{ui:Floors…}} rühma {{ui:View}} menüüs {{ui:More}}. Lehel olev vaateaken võib näidata ühte korrust jaotises {{ui:Floor shown}} omadustes. {{cmd:FLOORLAYERS}} muudab korrused kihtideks faili jaoks, mis läheb kellelegi teisele. Vt [Korruste kihistamine ühte jooniseks](topic:floors).
- **2D nutikad seinad, uksed ja aknad.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) ja {{cmd:DELOPENING}}. Nurgad, T-ühendused ja ristumised arvutatakse sinu eest. Seinad hoiavad arvestust selle üle, kuidas nad ühenduvad, ja omadustesse tulevad {{ui:Disallow join at start}} / {{ui:Disallow join at end}}, {{ui:Location line}} ja muudetav {{ui:Length}}. Vt [2D-seinte, uste ja akende joonistamine](topic:walls-2d).
- **Seinatööriistad plaanisseintel.** Kirjuta {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} ja ülejäänud. Neil pole veel tööriistariba nuppe. Vt [Seinakujud, lõiked, nihked ja lukud 2D-seintel](topic:wall-tools-2d).

### Tekst

- **Tekstistiilid.** {{cmd:STYLE}} (`ST`) või {{ui:Text style}} tööriistaribal {{ui:Draw}}: nimega stiilid koos kirjatüübi, kõrguse, laiuse teguri ja kaldega. Vt [Teksti kirjatüübi ja suuruse määramine tekstistiilidega](topic:text-styles).
- **Vormindatud lõigutekstiredaktor.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} või topeltklõps tekstil avab kasti kirjatüübi, suuruse, paksu, kaldkirja, allajoonimise, läbijoonimise, värvi, joondamise ning kraadi-, plus-miinus- ja läbimõõdumärkidega, koos nuppudega {{ui:OK}} ja {{ui:Cancel}}. Vt [Lõigutekstide vormindamine](topic:format-paragraph-text).
- **Diagramm draw.io XML-ist.** {{cmd:DIAGRAM}} (`T2D`) loeb ka kleebitud draw.io XML-i. Vt [Diagrammi joonistamine tekstist](topic:text-to-diagram).
- **Tai tekst PDF-plotis.** Varem prinditi see küsimärkidena.

### Rohkem ruumi ja joonistusabilisi

- **Ujuv, kitsam käsurida ja kompaktne ülemine ala.** Lohista käsurea haarangut, et see ujuvaks teha, lohista selle ülemist serva, et näha vähem ridu; {{key:F2}} avab ajaloo. {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Command line}} ja ülemise ala valikud on samad sätted. Vt [Sätted](topic:settings#command-line).
- **Objektipüüdja menüü.** Parema klõpsuga olekuribal {{ui:Snap}} või kirjuta {{cmd:OSNAP}}.
- **Ruudustikule haakumine.** Nupp {{ui:Grid snap}} olekuribal või {{key:F9}}: valitud punktid lähevad lähimasse ruudustiku punkti, kui objektipüüdja punkti ei võtnud.
- **Kaar kümmel viisil ja Jätka.** {{ui:Arc}} tööriistaribal {{ui:Draw}} või {{cmd:ARC}}: 3 punktiga, perekond Start/Center/End ja perekond Center/Start/End, ning Jätka (vajuta {{key:Enter}} algpunktis) viimasest joonest, kaarest või murdjoonest.
- **Dokumentide paneel.** {{cmd:DOCUMENTS}} (`DOCS`) või {{ui:Documents…}} rühma {{ui:View}} menüüs {{ui:More}}: iga joonise revisjon, olek ja väljavõtmine projektikaustas. See avaneb keskele joondatud dialoogina. Vt [Dokumendid](topic:documents).

### Failid

- **UK terasmõõdud.** 976 profiili paneelis Standard, kirjutatud nii nagu joonistel (näiteks `305x165x40 UB`).
- **Lõuna-Aafrika paketid** (joonistustava ja ehitusnormid) ehitusnormide lisandmooduli paketina. Numbrid pole kontrollitud.
- **Lisandmoodulid CadCrafti jaoks,** lisatakse nõudmisel ja on vaikimisi välja lülitatud: siseruumide valgustuse projekteerimine, kiibidisain (HDL paigutuseks), CNC-freesimine, vooluahela simulatsioon, rullketi hammasrattad ja ehitusnormide riigipaketid.

## Parandatud

- Viirutuse teisaldamine, pööramine või skaleerimine jättis mustri maha.
- {{cmd:GRIDMOVE}} viis kaasa terve plaanisein, mis algas ainult ruudustiku joonelt. Seina hinnatakse nüüd selle otste järgi.
- Ruudustik näitas ainult joonise piirides isegi siis, kui piirid olid välja lülitatud.
- Külgpaneeli plokkide loend kerib ning nimi, mis ei ole plokk, loetleb plokid, mis algavad sellega („Kas mõtlesid“).
- DXF R12 failid, mida AutoCAD keeldus avamast („Unknown group 1001 for table“), avanevad nüüd seal.
- Väga suured failid (umbes 70 000 objekti ja rohkem) ei avanenud veateatega „Maximum call stack size exceeded“.
- AutoCAD 2018 ja uuemast tulevad DWG-failid kõrge hooldusversiooniga ei avanenud veateatega „bad BITLONG code 11“.
- Lõigutekstikastis säilib valik, kui valitud osale kirjutatakse uus suurus.

## Kõigis rakendustes

Igal juhtelemendil, millel on vihje, on Bootstrapi tööriistavihje, on sulgetav alustamisvihje, vahekaardiriba kerib, kui see ei mahu, ning brauseri vahelehe pealkiri järgib avatud joonist (`<drawing> - CadCraft | CadCraft`). {{ui:Settings}} › {{ui:Layout}} on nüüd rippmenüü kahe reaga valikutega. Keelte loend jaotises {{ui:Settings}} on pikem kui versioonis 0.8. Live-koostöö, Teegi kogud ning kaalu- ja temperatuuriühikud on kirjeldatud Studio märkmetes.

## Ausad piirangud

- Lõigutekstil pole täpp- ega nummerdatud loendeid, tabulaatorilinijat ega rööpjoondust. Plotitud PDF-ides on tekst Helvetica kirjas.
- Plaanisseinad on sirged, seega joonistatakse kaar lühikeste seintena. Seinatööriista kogukonna käsitsi kontroll on veel ootel.
- Kihirühmi ei kirjutata AutoCADi enda vormingus, seega näitab AutoCAD lamedat loendit. Teised programmid näitavad kõiki korruseid koos, kui sa ei käivita {{cmd:FLOORLAYERS}}.
- Dokumentide paneeli pole kahe inimesega päris jagatud kaustal proovitud. CNC-freesimist pole ühelgi päris masinal käivitatud. Valgustuse hinnang on kontrollitud fotonjälje vastu, mitte teise programmi vastu. Tehnilised lisandmoodulid on kontrollivahendid, mitte insenerikontrolli asendajad.
- Muud keeled kui inglise on masintõlked ning osa uusi sõnu on ainult inglise keeles.

## Varem: 0.8 ja 0.8.1

See on see, mis muutus versioonides CadCraft 0.8 ja 0.8.1 võrreldes versiooniga 0.7. Versioon 0.8 (1. november 2026) lisab joonistusabilised, mis töötavad sinu enda joonisest, arvutis olevate reeglite järgi ja ilma mudelita, ning 0.8.1 (2. november 2026) parandab pärast seda teatatud vead.

### Uus

**Joonis, mis lõpetab su mõtte**

- **Kummitus näitab, mis tuleb järgmisena.** Kui ühtegi käsku ei käi, näitab hall kriipsjooneline kummitus, mida sinu joonise enda mustrid ütlevad järgmiseks: järgmine vahepost samal sammul, trepi järgmine aste, toa puuduv sein. Vajuta {{key:Tab}}, et see joonistada ühe tagasivõtmise sammuna, või {{key:Esc}}, et see eemaldada. Ta vaatab ainult uusimaid objekte, nii et suurel joonisel jääb ta sujuvaks. Lülita see välja jaotises {{ui:Settings}} › {{ui:CadCraft}} või käsuga {{cmd:AUTOCOMPLETE}} `Off`.
- **Järgmine punkt joone joonistamisel.** Käsu {{cmd:LINE}} või {{cmd:PLINE}} keskel on kummitus järgmine punkt: trepi järgmine aste, ristküliku neljas nurk või punkt, mis selle sulgeb. Too kursor selle lähedale ja vajuta {{key:Tab}}, nagu oleksid seal klõpsanud.
- **Pliiatsikandest saab täpne geomeetria.** {{cmd:SKETCHFIX}}: joonista pliiatsi, hiire või sõrmega karm joon ja igaüks neist muutub puhtaks joone, ringiks, kaareks, ristkülikuks või murdjooneks, mis püütakse selle külge, mis on juba joonistatud. Vt [Joonista pliiatsiga ja saa täpne geomeetria](topic:sketch-with-a-pen).
- **Visandi foto muutub joonisteks.** {{cmd:PHOTOSKETCH}} (`PSK`) leiab fotolt paberi, sirgendab perspektiivi, rakendab sinu antud paberisuuruse ja mõõtkava ning jälgib pliiatsijooned kihile iga pliiatsivärvi kohta. Kirjutatud tekste ei jälgita.
- **Mõõtmine reeglite järgi.** {{cmd:AUTODIM}} (`ADIM`) teeb mõõtmete ahelad valitud külgede järgi, üldmõõdu, avade laiused, aukude läbimõõdud ja koos `Grid`-iga ruudustiku sammu. See ei korda kunagi mõõdet, mis on juba olemas.
- **Teisalda ruudustiku joont ja komplekt järgib.** {{cmd:GRIDMOVE}} (`GM`): ruudustiku joonel lõppevad seinad venivad selle järgi, seda mööda kulgevad seinad, postid, selle ringmärk ja silt liiguvad ning sellel olevad mõõdud mõõdavad uut sammu. Üks tagasivõtmise samm.

**Lehed, detailid ja sildid**

- **Lehed, mis paigutavad end ise.** {{cmd:AUTOSHEET}} võtab sinu nimetatud vaated (või mudeli eraldi osad), valib paberisuuruse ja standardse mõõtkava ning paneb vaated uutele lehtedele koos tiitliploki ja nime-ning-mõõtkava pealkirjaga. Kõik jääb muudetavaks. Vt [Paiguta lehed minu eest](topic:lay-out-sheets-for-me).
- **Sinu firma detailid, pakutud joonistamise ajal.** {{cmd:DETAILS}} (`DET`) hoiab sinu enda detailiplokke. Kui valitud asi vastab mõnele neist oma kihtide, plokinimede ja märkmete sõnade järgi, ütleb olekurida seda; vali see ja paiguta. {{cmd:DETAILS}} › Jaga paneb sinu loendi dokumentide kausta ning toob sisse selle, mida sinu meeskond on lisanud. {{ui:Settings}} lülitab pakkumised välja.
- **Plokkide sildid.** {{cmd:TAGS}} määrab sildi (selle liigi, väärtused, mida see võib võtta, plokid, millele see kehtib), seab selle valitud plokiviidetele ning loetleb need loendina, mille võid salvestada CSV-na. Definitsioonid hoitakse DWG-s. Vt [Sildid](topic:tags).
- **Joonise piirid.** {{cmd:LIMITS}} määrab joonisele ristküliku: ruudustik täidab selle ja suum All näitab seda. Piirid kuvatakse kontuurina ning salvestatakse DWG-s ja DXF-is koos paberipiiridega. Vt [Joonise piiride määramine](topic:drawing-limits).

**Koostöö teiste inimeste ja programmidega**

- **Märgistusest revisjon.** {{cmd:REDLINE}} loeb paketi, mille kirjutab MarkupCraft, ja loetleb iga muudatuse. Võta vastu või lükka tagasi igaüks märkusega; vastuvõetud saavad revisjonipilve ja revisjonilogi ühe tagasivõtmise sammuga ning sa salvestad vastusefaili, mis sulgeb märgistused MarkupCraftis. Vt [Märgistusest revisjoni tegemine](topic:redline-to-revision).
- **Joonised, mida git ja Fossil saavad ühendada.** Kui {{ui:Merge-friendly files}} on sisse lülitatud jaotises {{ui:Settings}} › {{ui:CadCraft}}, saab iga objekt võtme, mis ei muutu (failid on umbes 10 protsenti suuremad). `cadcraft merge base ours theirs` ühendab siis kahe inimese muudatused ühe DWG- või DXF-objekti kohta objekti kaupa ja teatab ainult kohtadest, kus kaks inimest muutsid sama asja. Vt [Ühe joonise kahe inimese muudatuste ühendamine](topic:merge-drawings).
- **Mis muutus, sõnades.** Ajaloos annab Võrdle lihtsa loendi: kus asjad muutusid, kui suured on kohad, mis lisati, eemaldati või muudeti ning milline tekst muudeti. Vt [Ütle sõnadega, mis muutus](topic:changes-in-words).
- **Suunad ja nurgad.** Kirjuta suund mõõdistaja suunana, näiteks N45°23'30"E, või kraadides, minutites ja sekundites, kõikjal, kus küsitakse nurka; AUNITS seab, kuidas nurgad näidatakse. Vt [Suundade ja nurkade kirjutamine ja näitamine](topic:bearings-and-angles).
- **Sinu enda SHX-kirjatüübid.** Anna CadCraftile kaust SHX-kirjatüüpidega ja tekstistiilid, mis nimetavad neid, joonistatakse nendega ekraanil ja plotides. Vt [Teksti joonistamine oma SHX-kirjatüüpidega](topic:shx-fonts).
- **Diagramm tekstist.** {{cmd:DIAGRAM}} loeb Mermaidi vooskeemi, PlantUML-i komponentdiagrammi, D2 või algus–lõpp loendi ning joonistab plokid ja ühendused, mida saad muuta. Vt [Diagrammi joonistamine tekstist](topic:text-to-diagram).
- **OLE-objektid DWG-s.** {{cmd:OLELIST}} loetleb DWG-s olevad OLE-objektid, mida CadCraft ise paigutada ei saa, ja paigutab pildist koopia sinu määratud kohta. Vt [Pildid](topic:pictures#objects-from-other-programs-ole).
- **Sinu arvutused jäävad joonisega.** Arvutuslehed ja projekteerimise põhjused hoitakse DWG-s koos klassitabeliga.

**Joonistamine ilma nägemiseta**

- Lülita sisse {{ui:Drafting without sight}} jaotises {{ui:Settings}} (või kirjuta {{cmd:ACCESS}} ja vasta `On`). CadCraft loeb iga käsu ja tulemuse ette ekraanilugeja kaudu, kirjeldab joonist ja seda, mis on kursori lähedal, laseb kursorit liigutada ja punkte valida klaviatuuriga ning mängib iga püüdmise ja haarangu jaoks heli. Kus sinu brauser suudab arvutis kõnet tuvastada, saab käske öelda. Vt [Joonistamine ilma nägemiseta](topic:draft-without-sight).

**Kõigis rakendustes**

- **Keeled.** 54 keelt; kümme on uued (leedu, läti, bosnia, marathi, telugu, albaania, afrikaani, filipiini, suahiili, usbeki). Muud keeled kui inglise on masintõlked, kuni emakeelne kõneleja need loeb.
- **Sisendseadmed.** Puuteplaat, pliiats, 3D-hiir, mängupult ja MIDI-juhtimised.
- **Tööriistaribade read ja omaduste tabel.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} pakub teistes rakendustes valikuid Mähi, 2 rida või 1 rida. CadCraft hoiab oma sätet jaotises {{ui:Settings}} › {{ui:CadCraft}} (vt [Tööriistaribade read](topic:settings#toolbar-rows)). Jagatud omaduste tabel on kolmes muus rakenduses, mitte CadCraftis.
- **Probleemid, Live ja lisandmoodulid.** Jagatud probleemide paneel, mis hoiatab igas rakenduses, Live-vaade, mis näitab, kes kus on CadCraft Studios (vt [Ühe joonise koos töötamine](topic:work-live)), ja lisandmoodulite loend.
- **Ühenda oma tehisintellekt.** Üks ühendus CadCraft Studiost kõigi kaheksa rakendusega, koos lugemise, soovituse või muutmise tasemega iga rakenduse jaoks ja lihtsas keeles logiga sellest, mida assistent tegi. CadCraftil endal ei ole tehisintellekti ning Küsi kõigis rakendustes kasutab sinu ühendatud tehisintellekti.

### Parandatud versioonis 0.8.1

- **Omadused näitasid 150 asemel 12'-6"** jalgade ja tollidega joonistel. Väljad, mida rakendus ise loeb, säilitavad oma teksti jälle.
- **DWG-failid, mille klasside jaotist loeti vale tüübina** (GitHub cadcraft#5), avanevad nüüd õigesti.
- **Ristkursor ei näita enam hüpikakende taga.**
- **Studio ja pakendatud väljaanded saavad keelt vahetada töö ajal.** Varem olid need ainult inglise keeles. Pole veel kõigil platvormidel proovitud: teata meile, kui keel ei muutu.
- **Tahvelarvutid portreerežiimis** annavad vaba ruudustiku kõrguse joonistusalale ning lehtede režiim algab 760 px või vähem.
- **STRETCH ristuva aknaga ja LIMITS** teatati Studio 0.8.0-s ja need olid juba õiged 0.8 veebiversioonis; teatajal oli vanem paigaldaja. Studio 0.8.1 sisaldab neid.

### Seda versiooni veel pole

- **0.8 ja 0.8.1 pole koodiga allkirjastatud.** Windows võib hoiatada (vali {{ui:More info}}, seejärel {{ui:Run anyway}}); Macis tee CadCraft Studio kohal parem klõps ja vali {{ui:Open}}. Poe versioonid on ootel ning iPadi ja iPhone'i versiooni ei ehitatud 0.8.1 jaoks uuesti.
- **Pliiatsivisandeid ja visandite fotosid** on proovitud ainult väljamõeldud fotodega ja hiirega, mitte veel päris pliiatsi, puuteekraani ega paberil käsitsi visandiga.
- **Joonistamine ilma nägemiseta** on proovitud automaatsete kontrollidega, mitte veel ekraanilugeja või pimeda testijaga.
- **Detailide jagamist** pole kahe inimesega kontrollitud ning Team Cloud Plan kausta kui dokumentide kausta ei ole ehitatud.
- **Ühendamine** töötab CadCrafti DWG- ja DXF-failidega; sama teiste rakenduste failidega pole ehitatud.
- **Tagasivõtmine akende vahel:** CadCraft teatab iga lõpetatud sammu, kuid Studios pole veel ühte tagasivõtmist kõigile rakendustele; iga rakendus võtab tagasi oma sammud.
- **DWG-i OLE-objektid** säilivad, kuid neid ei joonistata oma kohal.
- **Plotistiilitabelite (CTB-failid) lugemine** teistest programmidest on ehitatud, kuid pole kontrollitud teisest programmist pärit failiga.
- **Ühenda oma tehisintellekt:** ühe klõpsuga ühendus Studios, brauseri tehisintellekti ühendusteenus, oma API-võti Studios ja avaldatud MCP-pakett pole selles väljalaskes lubatud.

Eelmise versiooni kohta vt [Mis on uut versioonis 0.7](topic:whats-new-0-7).
