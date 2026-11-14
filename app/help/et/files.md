---
title: Failid: mis avaneb, mis salvestub
summary: CadCrafti avatavad, salvestatavad ja eksporditavad vormingud, mis säilib või teisendatakse ning kuhu failid lähevad.
keywords: xclip, clip, xclip piir, köida lõigatud, dwg, dxf, pdf, ava, salvesta, ekspordi, impordi, vormingud, teisendus, allalaadimine, saveas, dxfout, salvesta nimega, dwg salvestamine, vorming, qsave, xref, xattach, lingitud joonis, väline viide, köida, laadi uuesti, eemalda viide
from: 6d68b34e
---

## Lühidalt

| Vorming | Avamine | Salvestamine | Märkused |
|---|---|---|---|
| DXF (tekst, mis tahes versioon) | Jah | Jah, DXF R12 või DXF 2000 | Binaarset DXF-i ei võeta vastu: salvesta see enne tekst-DXF-ina. |
| DWG | Jah | Jah, DWG-na (AutoCAD 2000, 2004, 2007, 2010, 2013 või 2018) | Loetakse ja kirjutatakse CadCrafti enda DWG-teegiga (AutoCAD R13 kuni 2018 failid). Sinu DWG-faili ei muudeta kunagi. Vigastatud failid või versioonid, mida lugeja ei toeta, lükatakse tagasi teatega. |
| PDF | Toob lehe sisse: aluspildina või objektidena ([PDF-aluspildid](topic:pdf-underlay)) | Jah, trükkimisega | Lehe vektor-PDF või mudel mõõtkavas. |

Iga avatud joonis (või joonis, mille alustad käsuga {{ui:Uus}}) saab joonisala kohal oma vahekaardi; puutumata uut joonist kasutatakse vahekaardi lisamise asemel. Vahekaardil klõpsamine vahetab joonist, selle {{ui:×}} sulgeb selle (CadCraft küsib enne, kui on salvestamata muudatusi), ning avatud jooniseid saab kõrvuti paigutada: vaata [Jaga ekraan](topic:split-screen).

## Joonise avamine

- Vajuta {{key:Mod+O}}, klõpsa {{ui:Ava}} või sisesta `OPEN` ja vali fail.
- Või lohista `.dwg` või `.dxf` fail joonisalale.

Fail loetakse sinu brauseris. Seda ei laadita kuhugi üles. Ajalugu teatab, mitu objekti ja kihti sisse tuli ning kui kaua see aega võttis, ja vasakpaneeli jaotis {{ui:Joonis}} näitab vormingut, näiteks „DWG 2018 (AC1032)“.

DWG-lugeja on osa CadCraftist ja laaditakse esimese DWG-faili avamisel pärast lehe laadimist (paar sada KB), nii et eraldi allalaadimist ei pea ootama. See loeb faili taustal, nii et leht reageerib ka suure DWG avamise ajal.

### Mis tuleb sisse

- Jooned, kaared, ringid, murdjooned (kaarelõikudega), ellipsid, punktid, tekst ja mitmerealine tekst, solidid, viirutused (standardmustrid joonistatakse joontena, teised ühtlase toonina), plokiviited koos atribuutidega (muudetavad väärtused; vaata [Ploki atribuudid](topic:attributes)), mõõdud ning paigutused koos vaateakendega.
- Splainid tulevad sisse splainidena (aste, juhtpunktid, sõlmed, kaalud, sobituspunktid); vaata [Splainid ja murdjooned](topic:splines).
- Ühe joonega ja tekstiga mitmeviiksed viiktekstid tulevad sisse CadCrafti mitmeviiksete viiktekstidena, mida saab muuta (vaata {{cmd:MLEADER}}). Teised (plokiga, mitme viigujoonega või kõverjoontega) joonistatakse nii, nagu teine programm need joonistas, ja liiguvad ühtse tervikuna; ajalugu ütleb, mitu neid oli.
- Pildid (images) näidatakse raamina koos pildi failinimega, kuni annad CadCraftile faili käsuga {{cmd:IMAGE}}: vaata [Pildid joonisel](topic:pictures#show-the-pictures-a-dwg-uses). Maskeeringud näidatakse oma raamina ning nende all olev jääb nähtavaks.
- DWG-faili tabelid tulevad sisse nii, nagu teine programm need joonistas.
- Mudeliruumi 3D-tahud tulevad sisse vahekaardil {{ui:3D}}, mitte 2D-objektidena; samamoodi plokkide sees olevad, iga kord plokiviite kohta mudelis. Plokis ja lehel joonistatakse need samuti lamedalt, kontuuridena. Vaata [Mudel 3D-s](topic:3d-solids).
- Kihid säilitavad oma värvi, sisse- ja väljalülitamise, külmutamise, lukustamise ja trükkeseaded. DEFPOINTS ei trükita kunagi.
- Mõõdud muutuvad tõelisteks, muudetavateks CadCrafti mõõtudeks seal, kus nende punktid on loetavad. Algselt näidatakse neid täpselt nii, nagu teine programm need joonistas; niipea kui muudad ühte, joonistab CadCraft selle uuesti oma stiilis.
- Iga paigutus muutub lehe vahekaardiks. Teises programmis on igal paigutusel peidetud esimene vaateaken, mis on leht ise; CadCraft jätab selle välja.

### Mis veel sisse ei tule

CadCrafti joonistada mittevõetav loetakse kokku, mitte ära arvatud. Vasakpaneeli kast „Selle faili kohta“ loetleb need reaga „Pole veel näha:“, millele järgneb iga objektiliik ja arv. Tüüpilised juhud on DXF-i tabelid, võrgud ja plokkide sees olevad 3D-solidid. Mudeliruumi 3D-solidid, piirkonnad ja kehad näidatakse vahekaardil 3D (vaata [Mudel 3D-s](topic:3d-solids#solids-from-other-programs)). Failis keeratud vaateaknad näidatakse keeratuna, nagu seal, ning need säilitavad keerutuse salvestamisel; samamoodi säilivad praegune UCS, nimetatud UCS-id ja pööratud vaade.

Tekst joonistatakse ühe Helvetica-laadse kirjaga. Silt, mis mahub algse programmi kitsamas kirjas ühele reale, võib CadCraftis murduda kahele reale.

## Salvestamine

Salvestamiseks on kolm viisi. Igaüks laadib alla koopia.

- **Salvesta**: vajuta {{key:Mod+S}}, klõpsa {{ui:Salvesta}} või sisesta `SAVE` (ka `QSAVE`). See salvestab joonise vormingus: DWG, kui avasid DWG-faili, DXF, kui avasid DXF-i. DWG säilitab versiooni, milles see tuli (2018 fail salvestub 2018-na). Uus joonis kasutab vormingut ja DWG-versiooni, mille valisid viimati käsus {{ui:Salvesta nimega}} selles brauseris; kui ühtegi ei ole valitud, on see DWG AutoCAD 2000 vormingus.
- **Salvesta nimega**: vajuta {{key:Mod+Shift+S}}, klõpsa {{ui:Salvesta nimega}} või sisesta `SAVEAS`. Dialoogis {{ui:Salvesta koopia nimega}} on valikud {{ui:DWG}}, loend {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 või 2000), {{ui:DXF R12}} ja {{ui:DXF 2000}}, igaühel koos failinimega, mille see annab, ning joonise praegune vorming ja versioon juba valituna. Klõpsa {{ui:Salvesta}}, et alla laadida, või {{ui:Loobu}} (või {{key:Esc}}), et mitte midagi salvestada; ajalugu ütleb siis „Ei salvestatud.“ Sinu valik jääb kehtima: {{key:Mod+S}} kasutab seda selle joonise puhul edaspidi ning uued joonised selles brauseris alustavad sellega.
- **DXFOUT**: sisesta `DXFOUT`. See laadib alati alla DXF R12 koopia ning järgmine {{key:Mod+S}} salvestab siiski joonise enda vormingus.

Brauser laadib alla `<joonise nimi>.dwg` või `<joonise nimi>.dxf`. Iga salvestus on **uus allalaadimine**; avatud faili ei kirjutata kunagi üle ega muudeta. Ajalugu kinnitab seda, näiteks „Koopia salvestati nimega Plan.dwg (DWG (AutoCAD 2018)). Sinu algne Plan.dxf on muutmata.“ DXF-i puhul öeldakse „(DXF R12, avaneb igas CAD-programmis)“. Selle all olevad read loetlevad kõik, mis teel muutus.

Kui CadCraft töötab töölauarakendusena, toimib salvestamine nagu teistes töölauaprogrammides: {{key:Mod+S}} kirjutab joonise tagasi avatud faili, selle enda vormingus ja versioonis, ning ajalugu ütleb, kuhu see salvestati. {{ui:Salvesta nimega}} ja eksportimine näitavad süsteemi salvestusdialoogi ning topeltklõpsuga avatud `.dwg`, `.dxf` või `.ccsheets` fail avaneb CadCraftis.

PDF-i puhul trüki selle asemel (vt allpool).

## Mida DWG säilitab ja muudab

CadCraft kirjutab DWG-faili ise sinu brauseris, sama DWG-teegiga, millega seda loeb. Vali versioon käsus {{ui:Salvesta nimega}}: AutoCAD 2000 vorming (failiversioon AC1015) avaneb kõige rohkemates programmides, sealhulgas vanades; uuemad vormingud (2004, AC1018 kuni 2018, AC1032) säilitavad ka tõelised värvid. Midagi ei laadita üles ning DWG salvestamine töötab võrguta.

Iga versioon on kontrollitud, lugedes salvestatud failid tagasi kolme teise programmi DWG-lugejaga ja CadCrafti enda lugejaga. CadCrafti DWG-d ei ole veel AutoCAD-is endas avatud.

### Mida DWG säilitab

- Jooned, kaared, ringid, ellipsid, punktid ning murdjooned koos kaarelõikudega.
- Üherealine tekst koos joondamise ja laiusteguriga.
- Mitmerealine ja murduv tekst mitmerealise tekstina. Teine programm murrab selle uuesti samast laiusest.
- Objektide värvid: kihi järgi, ploki järgi, 255 standardvärvi ning tõelised värvid vormingus 2004 ja hilisemas.
- Kihid koos värvi, joonetüübi, joonepaksuse ja sisse-, väljalülitus-, külmutus-, lukustus- ja trükkeseadetega; objektide enda joonetüübid, joonepaksused ja joonetüübi mõõtkavad, joonetüübi mustrid ning joonise joonetüübi mõõtkava.
- Joonise ühikud ja pikkuse vorming (kümnend, jalad ja tollid, murrud …).
- Plokid koos baaspunkti ja atribuutide definitsioonidega, sealhulgas nähtamatud, konstantsed ja eelseadistatud.
- Plokiviited koos mõõtkava, pöörde ja atribuutide väärtustega.
- Tahked täitmised ja mustriga viirutused koos mustri, mõõtkava ja nurgaga (mustri enda jooned, nii et teised programmid joonistavad samad jooned, mis CadCraft).
- Mõõdud tõeliste mõõtudena: teised programmid mõõdavad need uuesti, kui neid venitatakse. Igaüks säilitab oma seaded (teksti kõrgus, noole suurus, komakohad, pikkuse vorming) ja oma teksti ning kannab joonistatud koopiat, mis igal DWG-mõõdul on.
- Lehed (paigutused): iga leht koos paberi suuruse ja ühikutega, lehel joonistatud sisu ning vaateakendega, nende vaate ja mõõtkavaga.
- Nimetatud vaated.
- Mitmeviiksed viiktekstid mitmeviiksete viiktekstidena.
- Kihtide ja plokkide nimed nii, nagu sisestasid, suur- ja väiketähtedega. (DXF R12 kirjutab need suurtähtedega.)

### Mida DWG muudab

Igaüks neist loetletakse ajaloos pärast salvestamist, kui see joonisele kehtib.

| CadCraftis | Salvestatud DWG-s |
|---|---|
| Tõelised värvid (valitud värvivalijaga), vormingus 2000 | Lähim standardvärv: vormingus 2000 on ainult 255 värvi. Tõelised värvid säilitamiseks salvesta vormingus 2004 või hilisem. |
| Lehe nimetatud vaated | Paberiruumi vaated: DWG ei ütle, millisele lehele need kuuluvad, seega kuuluvad need CadCrafti faili uuesti avamisel esimesele lehele. |
| Mitmerealine tekst laiusteguriga | Tavaline tähelaius: DWG-s kehtib laiustegur ainult üherealiste tekstide puhul. |
| Kihi või ploki nimed tähemärkidega, mida DWG ei luba | Muudetud: lingitud joonise nimi, nagu `Base\|Walls`, muutub nimeks `Base$0$Walls` (nii nimetatakse lingitud joonist köites), ja muud märgid muutuvad `_`-ks. |

### Miks R12 ja mis teisendub

Kui salvestad DXF-ina, kirjutab CadCraft DXF R12, versiooni, mida iga CAD-programm saab avada. See on vanem kui mõned funktsioonid, seega kirjutatakse mõned asjad lihtsamal kujul:

| CadCraftis | Salvestatud R12-failis |
|---|---|
| Mitmerealine tekst | Üks tekstiobjekt igal real |
| Ellipsid | Murdjooned, mis järgivad ellipsi |
| Viirutused (avatud failidest) | Ainult nende kontuurid |
| Tõelised värvid (valitud värvivalijaga) | Lähim standardvärv |
| Joonepaksused ja objektide enda joonetüübi mõõtkavad | Jäetakse välja: R12-l pole kumbagi (joonetüübid säilivad) |
| Kihi ja ploki nimed | Kirjutatakse suurtähtedega; tühikud ja muud märgid muutuvad `_`-ks ning nimed lõigatakse 31 tähemärgiga („Title block“ muutub nimeks `TITLE_BLOCK`) |
| Kihid, mis on seatud mitte trükkima | Teised programmid trükivad need (CadCraft mäletab seadet, kui joonisel on leht) |
| Mõõdud | Tõelised mõõdud oma joonistatud plokiga, nii et teised programmid näitavad neid nii, nagu sina neid näed |
| Mitmeviiksed viiktekstid | Need joonistavad jooned, noolepea ja teksti |
| Nimetatud vaated | Säilivad, nimed suurtähtedega; lehe vaated tulevad tagasi esimesele lehele |
| Mitu lehte | Esimene leht on paberiruum, mida iga programm näitab; ülejäänud säilivad plokkidena nimega `CCLAYOUT_1`, `CCLAYOUT_2` … , mille CadCraft muudab faili avamisel tagasi lehtedeks |

Ajalugu loetleb igaüks neist, mis sinu joonisele kehtis.

:::tip
Joonise kallal mitme päeva jooksul töötamiseks salvesta DXF-ina ja ava see DXF järgmine kord. Kõik, mida CadCraft joonistada oskab, säilib ringi, sealhulgas mõõdud, plokid ja kõik lehed.
:::

## Lingitud joonised (välised viited)

{{cmd:XATTACH}} (`XA` või {{ui:Plokid}} › {{ui:Veel}} › {{ui:Lingi joonis (xref)}}) lingib teise DWG- või DXF-faili: vali fail ja klõpsa, kuhu see läheb ({{key:Enter}} paneb selle punkti 0,0). See tuleb sisse ühe plokina, mis on nimetatud faili järgi, õige mõõtkavaga, kui kahel joonisel on erinevad ühikud. Selle kihid ja plokid säilitavad oma nimed koos lingi nimega ees, näiteks `Plan|Walls`, `Plan|Door`, nii et need ei segune sinu omadega: lülita lingitud kihid sisse ja välja, külmuta või lukusta neid nagu oma kihte. Ling on ainult lugemiseks: muuda teist joonist ja laadi see uuesti. Mida seadistad lingi kihtidel (värv, joonetüüp, joonepaksus, sisse/välja, külmutus, lukk, trükkimine), säilib, kui laadid lingi uuesti, kui salvestad joonise DWG-na, kusjuures ling on veel ling, ja kui mõni teine joonis seda lingib.

{{cmd:XREF}} (`XR`): `?` loetleb lingid (laetud või mitte, milline fail, mitu viidet); `A` lisab; `R` laadib ühe uuesti failist (vali fail uuesti: brauser ei pääse sinu kaustadeni ise); `B` seob ühe (sellest saavad tavalised plokid ja kihid nimega `Plan$0$Walls`); `D` eemaldab ühe (selle viited ja kihid kaovad). Igaüks on üks tagasivõtmise samm.

{{cmd:XCLIP}} (`XC`) lõikab plokiviiteid ja linke: vali need, `N` uue piiri jaoks, seejärel `R` ja kaks nurka või `P` ja hulknurga punktid ({{key:Enter}} sulgeb selle); `D` eemaldab lõike. Näha ja trükkida on ainult see, mis jääb sisse, ning lõige liigub koos viitega. DWG ja DXF 2000 säilitavad lõiked; DXF R12 salvestab viite tervikuna ja ütleb seda. Kui seod lingi, millel on lõigatud viited, küsib {{cmd:XREF}} `B`: `A` seob kõik, `C` jätab alles ainult iga viite lõigatud osa (jooned ja kaared lõigatakse piiril; tekstid ja sisestatud plokid jäävad, kui nende sisestuspunkt on sees).

Avatud joonis võib viidata failidele, mida CadCraft ei näe: see ütleb, mitu neist pole laetud. Kasuta {{cmd:XREF}}, `R` ja vali iga fail, et neid näha.

Salvestades seotakse laetud ling **faili sisse** (teised programmid näevad tavalisi plokke ja kihte nimega `Plan$0$…`), ja ajalugu ütleb seda. Laadimata ling jääb viiteks oma failile, nii DWG-s kui DXF-is.

## Avamine 3D-s

{{ui:Vaade}} › {{ui:Veel}} › {{ui:Ava rakenduses ModelCraft}} ({{cmd:OPENIN3D}}) avab joonise 3D-modelleerimisrakenduses uuel vahekaardil DWG-na, üles laadimata. Seal tehtud muudatused jäävad sinna; salvesta need seal. Menüükirje näidatakse ainult seal, kus see rakendus suudab üleantud joonise vastu võtta.

## PDF-i trükkimine

Vajuta {{key:Mod+P}}, klõpsa {{ui:Trüki}} või sisesta `PLOT`. PDF tehakse brauseris ja laaditakse alla või avatakse printimiseks uuel vahekaardil. Vaata [Prindi PDF-iks](topic:plot-pdf).

## Kuhu failid lähevad

Iga salvestus ja iga trükis on allalaadimine, nii et failid lähevad sinna, kuhu brauser allalaadimised paneb: tavaliselt kausta Allalaadimised. Et valida iga kord kaust, muuda brauseri allalaadimiste seadet; [Brauserid ja arvutid](common:browsers) näitab, kus.

Midagi, mida avad või salvestad, ei saadeta meile. Vaata [Kuhu sinu failid lähevad](common:your-files).

## PLN- ja PLA-projektifailid

CadCraft avab DWG- ja DXF-jooniseid, mitte Archicadi enda faile (`.pln`, `.pla`, `.tpl`, `.bpn`). Ühe avamisel öeldakse, mis see on. Archicadis salvesta vajalikud vaated või paigutused DWG-na ja ava need siin, või ekspordi mudel IFC-na ja ava see BimCraftis. Kui BimCraft suudab faili üle võtta, pakub CadCraft {{ui:Ava BimCraftis}}.

## Kui leht sulgub enne salvestamist

CadCraft hoiab iga muudetud joonise koopiat ainult selles brauseris, hetk pärast seda, kui lõpetad muutmise. Kui vahekaart sulgub, brauser peatub või arvuti taaskäivitub enne salvestamist, küsib CadCraft järgmisel käivitamisel **Kas taastada sinu töö?** {{ui:Taasta}} avab joonise uuesti, salvestamata, oma vahekaardil. Joonise salvestamine eemaldab selle koopia. Vaata [Töö taastamine](common:recover).

## Võrgus ja võrguta

Avamine, joonistamine, salvestamine (DWG ja DXF) ning trükkimine toimuvad kõik sinu arvutis, nii et need töötavad ilma ühenduseta, kui CadCraft on laetud.

CadCrafti kasutamiseks täiesti ilma ühenduseta klõpsa võrgus olles ülal ribal nupule {{ui:Salvesta võrguks}}. Silt loeb üles („Salvestan 40 / 212“) ja lõpeb tekstiga „Valmis võrguta kasutamiseks“. Salvestatud koopia sisaldab DWG-lugejat, kokku umbes 5 MB, nii et **DWG-failid avanevad pärast salvestamist ka võrguta**. Nupule klõpsamine uuesti annab {{ui:Salvesta uuesti (võta uusim versioon)}} või {{ui:Eemalda võrguvälise koopia}}. „Ei saanud salvestada“ tähendab, et mõned failid ei laadinud alla: kontrolli ühendust ja klõpsa uuesti. „Võrguta kasutamine pole saadaval“ tähendab, et see brauseriaken ei suuda koopiat hoida (privaatsed aknad ja mõned hallatud arvutid).

Ilma salvestatud koopiata laaditakse DWG-lugeja esimesel DWG-faili avamisel pärast lehe laadimist, nii et DWG avamine ilma võrguta võib ebaõnnestuda; DXF-failid ei vaja seda kunagi. Ära laadi lehte võrguta uuesti, kui CadCraft pole salvestatud.

Üksikasjade jaoks vaata [Töötamine võrguta](common:offline).

:::offline
Sa oled praegu võrguta. Joonised salvestuvad DWG- või DXF-ina ja trükitakse tavapäraselt, DXF-failid avanevad. DWG-failid avanevad, kui CadCraft näitab „Valmis võrguta kasutamiseks“, või kui DWG-lugeja on juba selles vahekaardis laaditud.
:::

## Piirangud failides

Piirangud ja parameetrid (vaata [Joonise seostamine](topic:constraints)) salvestuvad nii DWG- kui DXF-is. Iga seotud objekt kannab väikest CadCrafti märkust (laiendatud andmeid) ning kasutamata plokk nimega `CADCRAFT_PARAMETRIC` hoiab piiranguid ja parameetritabelit. Teised programmid avavad joonise tavaliselt ja ignoreerivad mõlemat; nad võivad kasutamata ploki puhastamisel kustutada. Märkused viitavad objektidele nende enda võtme, mitte faili käepidemete järgi, nii et programm, mis käepidemeid ümber nummerdab, neid ei riku. Kui teine programm on seotud objekti kustutanud või muutnud, eemaldab CadCraft sellelt piirangud faili avamisel ja ütleb, mitu. Faili ilma nendeta avatakse ilma piiranguteta.

Detailimodelleerijast eksporditud visand (`.json`) avaneb samuti: vaata [Visandite viimine teistest detailimodelleerijatest ja sinna](topic:solidworks-sketches).

## Pole veel saadaval

- Mitmeviiksed viiktekstid mitmeviiksete viiktekstide objektidena salvestatud DXF-is (R12-l pole neid: need salvestatakse sellena, mida nad joonistavad).
- Pildid salvestatud DXF-is (need salvestuvad oma raamidena; DWG säilitab need piltidena) ning maskeeringud, mis peidavad selle, mis on nende all.
- Uuema DXF-versiooni kui 2000 salvestamine.
- Pilvesalvestus ja sünkroonimine arvutite vahel.

Täieliku loetelu leiad [Pole veel valmis](topic:not-built-yet).
