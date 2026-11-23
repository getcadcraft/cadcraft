---
title: Mis on uut versioonis 0.9 (varasem)
summary: Viirutused, mis järgivad oma piiri, kihtide rühmad, pinnutatud korrused, 2D nutikad seinad uste ja akendega, tekstistiilid ja vormindatud tekstiredaktor, hõljuv käsurida, püüdmine ruudustikule, kaar kümnel viisil ja dokumentide paneel.
keywords: mis on uut, 0.9, varasem versioon, versioonimärkmed, muudatuste logi, viirutus, hatchedit, pat-fail, mustrifail, kihtide rühmad, laygroup, korrused, pinnutatud korrused, floorlayers, nutikad seinad, sein, uks, aken, seinatööriistad, tekstistiil, mtext, lõigutekst, vormindus, hõljuv käsurida, käsurida, ülemine ala, kompaktne, püüdmine ruudustikule, f9, kaar, dokumentide paneel, check out, uk terasprofiilid, draw.io, tai tekst, dxf r12, 0.8, 0.8.1, versioon, uued funktsioonid, automaatlõpetus, kummitus, sketchfix, photosketch, autosheet, details, gridmove, autodim, sildid, redline, ühendamine, git, fossil, access, joonistamine ilma nägemiseta, ekraanilugeja, limits, kompassisuunad, aunits, shx, diagram, ole, ajalugu, võrdle, sõnades, omadused, jalad ja tollid, stretch, keeled, sisendseadmed, probleemid, live, assistendid
from: 3451e64c
---

See on see, mis muutus CadCraftis 0.9 võrreldes versiooniga 0.8.1. CadCraft on CadCraft Studio 0.9 2D- ja 3D-joonistusrakendus ning selle kaheksa rakendust. Versioon 0.9 lõpetab plaanijoonistuse, lisab tekstistiilid ja päris tekstiredaktori ning annab ekraanil rohkem ruumi.

## Uus

### Plaanijoonistus

- **Viirutused, mis järgivad oma piiri.** {{cmd:HATCH}} seob end sellega, mis neid piiritab. Liiguta, pööra või skaleeri piiri, ja viirutus koos mustriga järgib; muuda selle kuju ja viirutus arvutatakse uuesti. {{cmd:HATCHEDIT}} (`HE`) muudab viirutust hiljem ning teeb või lõpetab seose. Vt [Viirutus ja täidetavad alad](topic:hatch).
- **Viirutuse mustrifailid.** {{cmd:HATCH}} küsimuses `Pick internal point` sisesta `F` (Pattern file) ja vali `.pat`-fail. On proovitud ainult tavalises vormingus kirjutatud faile.
- **Kihtide rühmad.** Paneeli {{ui:Layers}} jaotises {{ui:Tools}}: {{ui:New group}} (Uus rühm), {{ui:Add ready-made groups}} (Lisa valmisrühmad), {{ui:Group by name}} (Rühmita nime järgi) ja {{ui:Find a layer}} (Otsi kihti); või sisesta {{cmd:LAYGROUP}} (`LG`). Vt [Korralda joonist kihtidega](topic:layers#group-layers).
- **Pinnutatud korrused.** {{cmd:FLOORS}} (`FLR`) või {{ui:Floors…}} (Korrused…) rühma {{ui:View}} (Vaade) menüüst {{ui:More}} (Veel). Lehel olev vaateaken võib näidata ühte korrust valikus {{ui:Floor shown}} (Kuvatav korrus) paneelis Properties. {{cmd:FLOORLAYERS}} muudab korrused kihtideks faili jaoks, mis läheb kellelegi teisele. Vt [Pinnuta korrused ühte joonisesse](topic:floors).
- **2D nutikad seinad, uksed ja aknad.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) ja {{cmd:DELOPENING}}. Nurgad, T-ühendused ja ristumised arvutatakse sinu eest. Seinad hoiavad arvestust, kuidas nad ühenduvad, ja paneelis Properties on Ära ühenda algusest / lõpust, Asukoha joon ja muudetav Pikkus. Vt [Joonista 2D-seinad, uksed ja aknad](topic:walls-2d).
- **Seinatööriistad plaanisseintel.** Sisesta {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} ja ülejäänud. Neil ei ole veel tööriistariba nuppe. Vt [Seinakujud, lõiked, nihked ja lukud 2D-seintele](topic:wall-tools-2d).

### Tekst

- **Tekstistiilid.** {{cmd:STYLE}} (`ST`) või {{ui:Text style}} (Tekstistiil) tööriistaribal {{ui:Draw}} (Joonista): nimega stiilid fondi, kõrguse, laiuse teguri ja kaldega. Vt [Määra teksti font ja suurus tekstistiilidega](topic:text-styles).
- **Vormindatud lõigutekstiredaktor.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} või topeltklõps tekstil avab kasti fondi, suuruse, paksu, kaldkirja, allajoonimise, läbijoonimise, värvi, joonduse ja kraadi-, plusmiinus- ja läbimõõdu märgiga, ning {{ui:OK}} ja {{ui:Cancel}}. Vt [Vorminda lõigutekst](topic:format-paragraph-text).
- **Diagramm draw.io XML-ist.** {{cmd:DIAGRAM}} (`T2D`) loeb ka kleebitud draw.io XML-i. Vt [Joonista diagramm tekstist](topic:text-to-diagram).
- **Tai tekst PDF-väljatrükis.** Varem prinditi see küsimärkidena.

### Rohkem ruumi ja joonistusabid

- **Hõljuv, kitsam käsurida ja kompaktne ülemine ala.** Lohista käsurea käepidet, et see hõljutada, lohista ülemist serva vähemate ridade jaoks, {{key:F2}} avab ajaloo. {{ui:Settings}} (Sätted) › {{ui:CadCraft}} › {{ui:Command line}} (Käsurida) ja ülemise ala valikud on samad seaded. Vt [Sätted](topic:settings#command-line).
- **Objektipüüdmiste menüü.** Parem klõps staatusribal {{ui:Snap}}-l (Püüdmine) või sisesta {{cmd:OSNAP}}.
- **Püüdmine ruudustikule.** Nupp {{ui:Grid snap}} (Ruudustikule haakumine) staatusribal või {{key:F9}}: valitud punktid lähevad lähimale ruudustiku punktile, kui objektipüüdmine punkti ei võtnud.
- **Kaar kümnel viisil ja Jätka.** {{ui:Arc}} (Kaar) tööriistaribal {{ui:Draw}} või {{cmd:ARC}}: 3 punktiga, Algus/Keskpunkt/Lõpp rühm ja Keskpunkt/Algus/Lõpp rühm, ning Jätka (vajuta {{key:Enter}} algpunktis) viimasest joonest, kaarest või polyjoonest.
- **Dokumentide paneel.** {{cmd:DOCUMENTS}} (`DOCS`) või {{ui:Documents…}} (Dokumendid…) rühma {{ui:View}} menüüst {{ui:More}}: redaktsioon, olek ja väljavõtmine igale joonisele projektikaustas. See avaneb keskele joondatud dialoogina. Vt [Dokumendid](topic:documents).

### Failid

- **Suurbritannia terasprofiilid.** 976 profiili paneelis Standardne, sisestatud nagu joonistel (näiteks `305x165x40 UB`).
- **Lõuna-Aafrika paketid** (joonistustava ja ehitusnõuded) lisandmooduli Ehitusnõuded pakettidena. Arvud ei ole kontrollitud.
- **Lisandmoodulid CadCrafti jaoks,** lisatakse nõudmisel ja on vaikimisi väljas: siseruumide valgustuse projekteerimine, kiibi disain (HDL paigutuseks), frees-graveerimine, vooluahela simulatsioon, rullketi hammasrattad ja ehitusnõuete riigipaketid.

## Parandatud

- Viirutuse liigutamine, pööramine või skaleerimine jättis mustri maha.
- {{cmd:GRIDMOVE}} viis kaasa terve plaanisseina, mis algab ainult ruudustiku joonelt. Seina hinnatakse nüüd tema otste järgi.
- Ruudustik näitas ainult joonise piirides isegi siis, kui piirid olid väljas.
- Külgpaneeli plokkide loend kerib, ja nimi, mis ei ole plokk, loetleb plokid, mis algavad sellega („Did you mean”).
- DXF R12 failid, mille AutoCAD tagasi lükkas („Unknown group 1001 for table”), avanevad nüüd seal.
- Väga suured failid (umbes 70 000 objekti ja rohkem) ei avanenud veateatega „Maximum call stack size exceeded”.
- AutoCAD 2018 ja hilisemad DWG-failid kõrge hooldusversiooniga ei avanenud veateatega „bad BITLONG code 11”.
- Lõigutekstikastis säilitab valitud osa jaoks sisestatud uus suurus valiku.

## Igas rakenduses

Vihjed igal juhtelemendil, millel on vihje, alustusvihje, mida saab sulgeda, vahelehtede riba, mis keritakse, kui ei mahu, ning brauseri vahelehe pealkiri, mis järgib avatud joonist (`<drawing> - CadCraft | CadCraft`). {{ui:Settings}} › {{ui:Layout}} (Paigutus) on nüüd rippmenüü kaherealiste valikutega. Keelte loend jaotises {{ui:Settings}} on pikem kui versioonis 0.8. Reaalajas koostöö, teegi kogud ning kaalu ja temperatuuri ühikud on kirjeldatud Studio märkmetes.

## Ausad piirangud

- Lõigutekstis ei ole täppide ega nummerdatud loendeid, tabulaatorlinijat ega rööpjoondust. Väljatrükitud PDF-id seavad teksti fondiga Helvetica.
- Plaanisseinad on sirged, seega kaar joonistatakse lühikeste seintena. Seinatööriista kogukonna käsitsi kontroll on veel ootel.
- Kihtide rühmi ei kirjutata AutoCADi enda vormingus, seega AutoCAD näitab lamedat loendit. Teised programmid näitavad kõiki korruseid koos, kui sa ei käivita {{cmd:FLOORLAYERS}}.
- Dokumentide paneeli pole kahe inimesega päris jagatud kaustal proovitud. Frees-graveerimist pole ühelgi päris masinal käivitatud. Valgustuse hinnang kontrolliti fotonite jälje vastu, mitte teise programmiga. Tehniliste lisandmoodulid on kontrollivahendid, mitte insenerikontrolli asendaja.
- Inglise keelest erinevad keeled on masintõlked ja mõned uued sõnad on ainult inglise keeles.

## Varasem: 0.8 ja 0.8.1

See on see, mis muutus CadCraftis 0.8 ja 0.8.1 võrreldes versiooniga 0.7. 0.8 (1. november 2026) lisab joonistusabilised, mis töötavad sinu enda joonisest, arvutis reeglite järgi ja ilma mudelita, ning 0.8.1 (2. november 2026) parandab selle järel teatatud vead.

### Uus

**Joonis, mis lõpetab sinu mõtte**

- **Kummitus näitab, mis tuleb järgmisena.** Kui ükski käsk ei tööta, näitab hall kriipsjoonega kummitus, mida sinu joonise enda mustrid ütlevad järgmiseks: järgmine post samal vahel, trepi järgmine samm, toa puuduv sein. Vajuta {{key:Tab}}, et see joonistada ühe tagasivõtmise sammuna, või {{key:Esc}}, et see eemaldada. See vaatab ainult uusimaid objekte, nii et see jääb suurel joonisel sujuvaks. Lülita see välja jaotises {{ui:Settings}} › {{ui:CadCraft}} või käsuga {{cmd:AUTOCOMPLETE}} `Off`.
- **Järgmine punkt joone joonistamisel.** {{cmd:LINE}} või {{cmd:PLINE}} keskel on kummitus järgmine punkt: trepi järgmine samm, ristküliku neljas nurk või punkt, mis seda sulgeb. Too kursor selle lähedale ja vajuta {{key:Tab}}, nagu oleksid seal klõpsanud.
- **Pliiatsivisandid muutuvad täpseks geomeetriaks.** {{cmd:SKETCHFIX}}: joonista karm joon pliiatsi, hiire või sõrmega ja igaüks muutub puhtaks joooneks, ringiks, kaareks, ristkülikuks või polyjooneks, joonisel juba oleva külge püütuna. Vt [Visandamine pliiatsiga ja täpse geomeetria saamine](topic:sketch-with-a-pen).
- **Visandi foto muutub joonisks.** {{cmd:PHOTOSKETCH}} (`PSK`) leiab paberi fotol, sirgendab perspektiivi, rakendab paberi suuruse ja mõõtkava, mille annad, ning jälgib pliiatsijooned igale pliiatsivärvile kihina. Kiri ei jälgita.
- **Mõõtmine reeglite järgi.** {{cmd:AUTODIM}} (`ADIM`) teeb mõõtude ahelad mööda külgi, mille valid, üldmõõdu, avade laiused, aukude läbimõõdud ja `Grid` korral ruudustiku vahe. See ei korda kunagi mõõtu, mis on juba olemas.
- **Liiguta ruudustiku joont ja kogum järgib.** {{cmd:GRIDMOVE}} (`GM`): ruudustiku joonele lõppevad seinad venivad selle järgi, selle joonel seinad, veerud, selle mull ja silt liiguvad, ja sellel olevad mõõdud mõõdavad uue vahe. Üks tagasivõtmise samm.

**Lehed, detailid ja sildid**

- **Lehed, mis paigutavad end ise.** {{cmd:AUTOSHEET}} võtab sinu nimega vaated (või mudeli eraldi osad), valib paberi suuruse ja standardse mõõtkava ning paneb vaated uutele lehtedele tiitelploki ja nime-ja-mõõtkava pealkirjaga. Kõik jääb muudetavaks. Vt [Paiguta lehed minu eest](topic:lay-out-sheets-for-me).
- **Sinu firma detailid, pakutud joonistades.** {{cmd:DETAILS}} (`DET`) hoiab sinu enda detailplokke. Kui see, mille valid, ühtib ühega sõnade järgi oma kihtidel, plokinimedes ja märkustes, ütleb staatusriba seda; vali see ja paiguta. {{cmd:DETAILS}} › Share paneb sinu loendi dokumentide kausta ja toob sisse, mida su meeskond on lisanud. Sätted lülitavad pakkumised välja.
- **Sildid plokkidel.** {{cmd:TAGS}} määrab sildi (selle liigi, väärtused, mida see võib võtta, plokid, millele see kehtib), paneb selle valitud plokiviidetele ja loetleb need graafikuna, mille võid salvestada CSV-na. Definitsioonid hoitakse DWG-s. Vt [Sildid](topic:tags).
- **Joonise piirid.** {{cmd:LIMITS}} määrab joonisele ristküliku: ruudustik täidab selle ja suum Kõik näitab seda. Piirid näitatakse kontuurina ja need salvestatakse DWG-s ja DXF-is koos paberi piiridega. Vt [Määra joonise piirid](topic:drawing-limits).

**Töötamine teiste inimeste ja teiste programmidega**

- **Muuda märgistus redaktsiooniks.** {{cmd:REDLINE}} loeb paketi, mille MarkupCraft kirjutab, ja loetleb iga muudatuse. Võta vastu või lükka tagasi igaüks märkusega; vastuvõetud saavad redaktsioonipilve ja redaktsioonilogi ühe tagasivõtmise sammuga, ning salvestad vastuste faili, mis sulgeb märgistused MarkupCraftis. Vt [Muuda märgistus redaktsiooniks](topic:redline-to-revision).
- **Joonised, mida git ja Fossil saavad ühendada.** Kui {{ui:Merge-friendly files}} (Ühendamisesõbralikud failid) on sees jaotises {{ui:Settings}} › {{ui:CadCraft}}, saab iga objekt võtme, mis ei muutu (failid on umbes 10 protsenti suuremad). `cadcraft merge base ours theirs` ühendab siis kahe inimese muudatused ühe DWG- või DXF-objekti kohta objekti kaupa ja ütleb ainult, kus kaks inimest muutsid sama asja. Vt [Ühenda kahe inimese muudatused ühest joonisest](topic:merge-drawings).
- **Mis muutus, sõnadega.** Ajaloos annab võrdlus lihtsa loendi: kus asjad muutusid, kui suured on kohad, mis lisati, eemaldati või muudeti, ja muudetud tekst. Vt [Ütle sõnadega, mis muutus](topic:changes-in-words).
- **Kompassisuunad ja nurgad.** Sisesta suund mõõdistaja kompassisuunana nagu N45°23'30"E või kraadides, minutites ja sekundites, kõikjal, kus nurka küsitakse; AUNITS määrab, kuidas nurki näidatakse. Vt [Sisesta ja näita kompassisuundi ja nurki](topic:bearings-and-angles).
- **Sinu enda SHX-fondid.** Anna CadCraftile SHX-fondikaust ja tekstistiilid, mis neid nimetavad, joonistatakse nendega, ekraanil ja väljatrükis. Vt [Joonista tekst oma SHX-fontides](topic:shx-fonts).
- **Diagramm tekstist.** {{cmd:DIAGRAM}} loeb Mermaid-voodiagrammi, PlantUML komponentdiagrammi, D2 või alust-sihtkohani loendi ja joonistab plokid ja ühendused, mida saad muuta. Vt [Joonista diagramm tekstist](topic:text-to-diagram).
- **OLE-objektid DWG-s.** {{cmd:OLELIST}} loetleb DWG-s olevad OLE-objektid, mida CadCraft ise ei saa paigutada, ja paigutab pildi koopia sinna, kuhu ütled. Vt [Pildid](topic:pictures#objects-from-other-programs-ole).
- **Sinu arvutused jäävad joonisega.** Arvutuslehed ja projekteerimise põhjendused hoitakse DWG-s koos klassitabeliga.

**Joonistamine ilma nägemiseta**

- Lülita sisse {{ui:Drafting without sight}} (Joonistamine ilma nägemiseta) jaotises {{ui:Settings}} (või sisesta {{cmd:ACCESS}} ja vasta `On`). CadCraft ütleb iga käsu ja tulemuse ekraanilugeja kaudu, kirjeldab joonist ja seda, mis on kursori lähedal, laseb kursorit klaviatuuriga liigutada ja punkte valida ning mängib iga püüdmise ja käepideme jaoks heli. Kus su brauser suudab arvutis kõnet tuvastada, saab käske öelda. Vt [Joonista ilma nägemiseta](topic:draft-without-sight).

**Igas rakenduses**

- **Keeled.** 54 keelt; kümme on uued (leedu, läti, bosnia, marathi, telugu, albaania, afrikaani, filipiini, suahiili, usbeki). Inglise keelest edasi jäävad keeled on masintõlked, kuni emakeelne kõneleja need loeb.
- **Sisendseadmed.** Puuteplaat, pliiats, 3D-hiir, mängupult ja MIDI-juhtnupud.
- **Tööriistariba read ja omaduste tabel.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} pakub teistes rakendustes valikuid Murra, 2 rida või 1 rida. CadCraft hoiab oma seadet jaotises {{ui:Settings}} › {{ui:CadCraft}} (vt [Tööriistariba read](topic:settings#toolbar-rows)). Jagatud omaduste tabel on kolmes teises rakenduses, mitte CadCraftis.
- **Probleemid, Live ja lisandmoodulid.** Jagatud paneel Probleemid, mis hoiatab igas rakenduses, Live-vaade, mis näitab CadCraft Studios, kes on kus (vt [Töötage ühe joonisega koos](topic:work-live)), ja lisandmoodulite loend.
- **Ühenda oma tehisintellekt.** Üks ühendus CadCraft Studiost kõigi kaheksa rakendusega, igas rakenduses ainult lugemise, soovituse või muutmise tasemega ning lihtsas keeles logiga, mida assistent tegi. CadCraftil endal tehisintellekti ei ole, ja küsi igas rakenduses kasutab sinu ühendatud tehisintellekti.

### Parandatud versioonis 0.8.1

- **Omadused näitasid 150 asemel 12'-6"** jalgade ja tollide joonistel. Väljad, mida rakendus ise loeb, säilitavad oma teksti jälle.
- **DWG-failid, mille klasside jaotist loeti valest tüübist** (GitHub cadcraft#5), avanevad nüüd korrektselt.
- **Ristik ei näita enam hüpikakende taga.**
- **Studio ja pakitud väljaanded saavad keelt vahetada töö ajal.** Varem olid need ainult inglise keeles. Pole veel igal platvormil proovitud: anna teada, kui keel ei vaheta.
- **Tahvelarvutid püstisuunas** annavad vaba ruudustiku kõrguse joonisealale, ja lehtede režiim algab 760 px või vähem.
- **STRETCH ristakna ja LIMITS-iga** teatati Studio 0.8.0 kohta ja need olid juba õiged versiooni 0.8 veebiversioonis; teatajal oli vanem paigaldaja. Studio 0.8.1 sisaldab neid.

### Selles versioonis veel ei ole

- **0.8 ja 0.8.1 ei ole koodiga allkirjastatud.** Windows võib hoiatada (vali {{ui:More info}} (Veel teavet), siis {{ui:Run anyway}} (Käivita ikkagi)); Macis tee CadCraft Studiol paremklõps ja vali {{ui:Open}} (Ava). Poe versioonid on ootel ja iPadi ja iPhone'i versiooni ei ehitatud 0.8.1 jaoks uuesti.
- **Pliiatsivisandeid ja visandite fotosid** on proovitud ainult väljamõeldud fotodel ja hiirega, mitte veel päris pliiatsi, puuteekraani või käsitsi paberil tehtud visandiga.
- **Joonistamist ilma nägemiseta** on testitud automaatsete kontrollidega, mitte veel ekraanilugejaga ega pimeda testijaga.
- **Detailide jagamist** pole kahe inimesega kontrollitud ja Team Cloud Plan kausta dokumentide kaustana ei ole loodud.
- **Ühendamine** töötab CadCrafti DWG- ja DXF-failidega; teiste rakenduste failide jaoks seda pole loodud.
- **Tagasivõtmine akende vahel:** CadCraft teatab iga lõpetatud sammu, aga Studios ei ole veel ühte tagasivõtmist kõigile rakendustele; iga rakendus võtab tagasi oma sammud.
- **DWG OLE-objektid** säilitatakse, kuid neid ei joonistata oma kohale.
- **Printimisstiilide tabelite (CTB-failide) lugemine** teistest programmidest on loodud, kuid pole kontrollitud teise programmi failiga.
- **Ühenda oma tehisintellekt:** ühe klõpsuga ühendus Studios, brauseri tehisintellekti hostitud ühendaja, sinu enda API-võti Studios ja avaldatud MCP-pakett ei ole selles väljaandes lubatud.

Eelmise versiooni kohta vt [Mis on uut versioonis 0.7](topic:whats-new-0-7).
