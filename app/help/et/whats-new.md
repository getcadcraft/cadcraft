---
title: Mis on uut versioonides 0.8 ja 0.8.1
summary: Varjuvorm, mis lõpetab joonise sinu eest, joonistusest tehtud penslisketšid ja sketšifotod geomeetriaks, lehed, mis paigutavad end ise, detailid, mida pakutakse joonistamise ajal, GRIDMOVE ja AUTODIM, sildid, ühendamisesõbralikud failid, märgistused muudetud revisjoniks, joonistamine ilma nägemiseta, joonise piirid, suunad, SHX-kirjatüübid, tekstist diagrammid ning parandused versioonis 0.8.1.
keywords: mis on uut, uudised, väljalaske märkmed, muudatuste logi, muudatused, 0.8, 0.8.1, versioon, uued funktsioonid, automaatlõpetus, varjuvorm, tab, sketchfix, photosketch, autosheet, detailid, gridmove, autodim, sildid, redline, ühendamine, git, fossil, juurdepääs, joonistamine ilma nägemiseta, ekraanilugeja, piirid, suunad, aunits, shx, diagramm, ole, ajalugu, võrdle, sõnades, omadused, jalad ja tollid, venita, keeled, sisendseadmed, probleemid, live, assistendid
from: 9dd82db5
---

See on, mis muutus versioonis CadCraft 0.8 ja 0.8.1 võrreldes versiooniga 0.7. Versioon 0.8 (1. november 2026) lisab joonistusabilised, mis töötavad sinu enda joonise põhjal, reeglite alusel sinu arvutis ja ilma mudelita, ning versioon 0.8.1 (2. november 2026) parandab vead, mis teatati pärast 0.8 väljalaset.

## Uus

### Joonistus, mis lõpetab mõtte

- **Varjuvorm näitab, mis tuleb järgmisena.** Kui ühtegi käsku ei täideta, näitab hall kriipsjoonega varjuvorm, mida sinu joonise enda mustrid järgmisena ette näevad: järgmine tugi samal sammul, trepi järgmine aste, ruumi puuduv sein. Vajuta {{key:Tab}}, et joonistada see ühe tagasivõtmise sammuna, või {{key:Esc}}, et see eemaldada. See vaatab ainult uusimaid objekte, nii et suurel joonisel jääb töö sujuvaks. Lülita see välja {{ui:Sätted}} › {{ui:CadCraft}} või käsuga {{cmd:AUTOCOMPLETE}} `Off`.
- **Järgmine punkt joone joonistamisel.** {{cmd:LINE}} või {{cmd:PLINE}} käigus on varjuvorm järgmine punkt: trepi järgmine aste, ristküliku neljas nurk või punkt, mis selle sulgeb. Too kursor selle lähedale ja vajuta {{key:Tab}}, justkui oleksid klõpsanud sinna.
- **Penslisketšid muutuvad täpseks geomeetriaks.** {{cmd:SKETCHFIX}}: joonista pliiatsi, hiire või sõrmega karm joon ning igast neist saab puhas joon, ring, kaar, ristkülik või murdjoon, mis haakub juba joonistatuga. Vaata [Joonista pliiatsiga ja saa täpne geomeetria](topic:sketch-with-a-pen).
- **Sketši foto muutub joonistuseks.** {{cmd:PHOTOSKETCH}} (`PSK`) leiab fotolt paberi, sirgendab perspektiivi, rakendab sinu antud paberisuuruse ja mõõtkava ning kannab penslijooned igale pliiatsivärvile vastavale kihile. Kirjamärke ei kanta üle.
- **Mõõtmine reeglite alusel.** {{cmd:AUTODIM}} (`ADIM`) teeb valitud külgede järgi mõõtmisahelaid, üldmõõtu, avade laiusi, auklade läbimõõte ja koos väärtusega `Grid` ruudustiku sammu. Ta ei korda mõõtu, mis on juba olemas.
- **Liiguta ruudustiku joont ja kogum järgneb.** {{cmd:GRIDMOVE}} (`GM`): ruudustikujoonega lõppevad seinad venivad selle kaasa, selle kõrval olevad seinad, postid, selle mull ja silt liiguvad, ning sellel olevad mõõdud mõõdavad uut sammu. Üks tagasivõtmise samm.

### Lehed, detailid ja sildid

- **Lehed, mis paigutavad end ise.** {{cmd:AUTOSHEET}} võtab sinu nimetatud vaated (või mudeli eraldi osad), valib paberisuuruse ja standardse mõõtkava ning paneb vaated uutele lehtedele koos tiitelploki ja nime- ja mõõtkavapealdisega. Kõik jääb muudetavaks. Vaata [Paiguta lehed minu eest](topic:lay-out-sheets-for-me).
- **Sinu ettevõtte detailid pakutakse joonistamise ajal.** {{cmd:DETAILS}} (`DET`) hoiab sinu enda detailiplokke. Kui valitud objektid vastavad ühele neist kihtide, plokinimede ja märkmete sõnade järgi, ütleb olekuriba seda; vali see ja aseta. {{cmd:DETAILS}} › Jaga paneb sinu loendi dokumentide kausta ning toob sisse selle, mida meeskond on lisanud. Sätted lülitavad pakkumised välja.
- **Sildid plokkidel.** {{cmd:TAGS}} määrab sildi (selle liigi, väärtused, mida ta võib võtta, ja plokid, millele ta kehtib), seab selle valitud plokiviidetele ning loetleb need loendina, mille saad salvestada CSV-na. Sildi definitsioonid hoitakse DWG-failis. Vaata [Sildid](topic:tags).
- **Joonise piirid.** {{cmd:LIMITS}} määrab joonisele ristküliku: ruudustik täidab selle ja zoom Kõik näitab seda. Piirid kuvatakse kontuurina ning salvestatakse DWG- ja DXF-failidesse koos paberi piiridega. Vaata [Määra joonise piirid](topic:drawing-limits).

### Koostöö teistega ja teiste programmidega

- **Muuda märgistus revisjoniks.** {{cmd:REDLINE}} loeb paketi, mille MarkupCraft kirjutab, ja loetleb iga muudatuse. Võta igaüks vastu või lükka tagasi märkusega; vastuvõetud saavad revisjonipilve ja revisjonilogi ühe tagasivõtmise sammuga ning salvestad vastuste faili, mis sulgeb märgistused MarkupCraftis. Vaata [Muuda märgistus revisjoniks](topic:redline-to-revision).
- **Joonised, mida git ja Fossil saavad ühendada.** Kui {{ui:Ühendamisesõbralikud failid}} on sisse lülitatud menüüs {{ui:Sätted}} › {{ui:CadCraft}}, saab iga objekt võtme, mis ei muutu (failid on umbes 10 protsenti suuremad). `cadcraft merge base ours theirs` ühendab seejärel kahe inimese muudatused ühe DWG- või DXF-faili objektide kaupa ja teatab ainult kohtadest, kus kaks inimest muutsid sama asja. Vaata [Ühenda ühe joonise kaks muudatust](topic:merge-drawings).
- **Mis muutus, sõnades.** Ajaloos annab Võrdle lihtsa loendi: kus asjad muutusid, kui suured on need kohad, mis lisati, eemaldati või muudeti ning milline tekst muudeti. Vaata [Ütle sõnades, mis muutus](topic:changes-in-words).
- **Suunad ja nurgad.** Sisesta suund geodeetilise suunana, näiteks N45°23'30"E, või kraadides, minutites ja sekundites, kõikjal, kus küsitakse nurka; AUNITS määrab, kuidas nurki kuvatakse. Vaata [Sisesta ja näita suundi ja nurki](topic:bearings-and-angles).
- **Sinu enda SHX-kirjatüübid.** Anna CadCraftile kaust SHX-kirjatüüpidega ning tekstistiilid, mis neid nimetavad, joonistatakse nende kirjatüüpidega, ekraanil ja plotides. Vaata [Joonista tekst oma SHX-kirjatüüpidega](topic:shx-fonts).
- **Diagramm tekstist.** {{cmd:DIAGRAM}} loeb Mermaid-voodiagrammi, PlantUML-komponentdiagrammi, D2 või allikast-sihtkohta loendi ning joonistab muudetavad plokid ja ühendusjooned. Vaata [Joonista diagramm tekstist](topic:text-to-diagram).
- **OLE-objektid DWG-s.** {{cmd:OLELIST}} loetleb DWG-s olevad OLE-objektid, mida CadCraft ise paigutada ei saa, ja paigutab pildi koopia sinu määratud kohta. Vaata [Pildid](topic:pictures#objects-from-other-programs-ole).
- **Sinu arvutused jäävad joonisega kaasa.** Arvutuslehed ja projekteerimise põhjendused hoitakse DWG-s koos klassitabeliga.

### Joonistamine ilma nägemiseta

- Lülita {{ui:Joonistamine ilma nägemiseta}} sisse menüüs {{ui:Sätted}} (või sisesta {{cmd:ACCESS}} ja vasta `On`). CadCraft loeb iga käsu ja tulemuse ekraanilugeja kaudu ette, kirjeldab joonist ja seda, mis on kursori läheduses, laseb kursorit liigutada ning punkte klaviatuuriga valida, ning mängib iga haakumise ja haarde kohta heli. Kui sinu brauser suudab sinu arvutis kõnet tuvastada, saab käske öelda. Vaata [Joonista ilma nägemiseta](topic:draft-without-sight).

### Kõigis rakendustes

- **Keeled.** 54 keelt; kümme on uued (leedu, läti, bosnia, marathi, telugu, albaania, afrikaans, filipiini, suahiili, usbeki). Keeled peale inglise keele on masintõlked, kuni emakeelne kõneleja need üle vaatab.
- **Sisendseadmed.** Puuteplaat, pliiats, 3D-hiir, mängukontroller ja MIDI-juhtimine.
- **Tööriistariba read ja omaduste paneel.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Tööriistariba read}} pakub teistes rakendustes valikuid Mähi, 2 rida või 1 rida. CadCraft hoiab oma seadet menüüs {{ui:Sätted}} › {{ui:CadCraft}} (vaata [Tööriistariba read](topic:settings#toolbar-rows)). Ühine omaduste paneel on kolmes muus rakenduses, mitte CadCraftis.
- **Probleemid, Live ja lisandmoodulid.** Ühine probleemide paneel hoiatab igas rakenduses, Live-vaade näitab, kes on CadCraft Studios kus (vaata [Tööta ühe joonisega koos](topic:work-live)), ning on lisandmoodulite loend.
- **Ühenda oma tehisintellekt.** Üks ühendus CadCraft Studiost kõigi kaheksa rakendusega, igale rakendusele eraldi lugemis-, soovitus- või muutmistase ning lihtsates sõnades logi sellest, mida assistent tegi. CadCraftil endal tehisintellekti ei ole, ja Küsi igas rakenduses kasutab sinu ühendatud tehisintellekti.

## Parandatud versioonis 0.8.1

- **Omadused näitasid 150 asemel 12'-6"** jalgade ja tollidega joonistes. Väljad, mida rakendus ise loeb, säilitavad taas oma teksti.
- **DWG-failid, mille klasside jaotist loeti vales tüübis** (GitHub cadcraft#5), avanevad nüüd korrektselt.
- **Ristkursor ei ilmu enam hüpikaknate taha.**
- **Studio ja pakendatud väljaanded saavad keelt vahetada töö ajal.** Varem olid need ainult inglise keeles. Pole veel testitud igal platvormil: anna meile teada, kui keel ei muutu.
- **Tahvelarvutid portreerežiimis** annavad joonisealale ruudustiku ülejäänud kõrguse ning lehtede režiim algab 760 px või vähem.
- **STRETCH ristuva aknaga ning LIMITS** teatati Studio 0.8.0 puhul ning need olid juba õiged 0.8 veebiversioonis; teatajal oli vanem paigaldaja. Studio 0.8.1 sisaldab neid.

## Selles versioonis veel puudu

- **0.8 ja 0.8.1 ei ole koodiga allkirjastatud.** Windows võib hoiatada (vali {{ui:Täpsemalt}} ja seejärel {{ui:Käivita igal juhul}}); Macis tee CadCraft Studio peal paremklõps ja vali {{ui:Ava}}. Poodi mõeldud versioonid on ootel ning iPad- ja iPhone-versiooni ei ehitatud 0.8.1 jaoks uuesti.
- **Penslisketše ja sketšifotosid** on proovitud ainult väljamõeldud fotodel ja hiirega, mitte veel päris pliiatsi, puutekraani või paberile käsitsi joonistatud visandiga.
- **Joonistamine ilma nägemiseta** on testitud automaatsete kontrollidega, mitte veel ekraanilugeja ega pimeda testijaga.
- **Detailide jagamist** pole kahe inimesega kontrollitud ning Team Cloud Plani kausta kasutamist dokumentide kaustana ei ole ehitatud.
- **Ühendamine** töötab CadCraft'i DWG- ja DXF-failidega; teiste rakenduste failidega ei ole see ehitatud.
- **Tagasivõtmine akende vahel:** CadCraft teatab iga lõpetatud sammust, kuid Studiol ei ole veel ühte Tagasi kõigi rakenduste jaoks; iga rakendus võtab tagasi omaenda sammud.
- **DWG OLE-objektid** säilivad, kuid neid ei joonistata oma kohale.
- **Plotistiilide tabelite (CTB-failide) lugemine** teistest programmidest on ehitatud, kuid pole kontrollitud teise programmi failiga.
- **Oma tehisintellekti ühendamine:** ühe klõpsuga ühendus Studios, brauseri tehisintellekti hostitud konnektor, oma API-võti Studios ja avaldatud MCP-pakett ei sisaldu selles väljaandes.

Eelmise versiooni kohta vaata [Mis on uut versioonis 0.7](topic:whats-new-0-7).
