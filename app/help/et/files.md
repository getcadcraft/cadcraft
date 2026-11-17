---
title: Failid: mis avaneb, mis salvestub
summary: CadCraftis avatavad, salvestatavad ja eksporditavad vormingud, mis säilib või teisendatakse ning kuhu failid lähevad.
keywords: xclip, lõika, xclip piir, seo lõigatud, dwg, dxf, pdf, r12, ava, salvesta, eksport, import, vormingud, teisendus, allalaadimine, saveas, salvesta nimega, dwg salvestamine, vorming, qsave, xref, xattach, lingitud joonis, väline viide, seo, lae uuesti, eemalda
from: b8c5778d
---

## Lühidalt

| Vorming | Ava | Salvesta | Märkused |
|---|---|---|---|
| DXF (tekst või binaar, mis tahes versioon) | Jah | Jah, DXF R12, DXF 2000 või DXF 2000 (binaar) | Binaarne DXF avaneb nagu tekstiline ja salvestub tagasi binaarina. |
| DWG | Jah | Jah, DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 või 2018) | Loetakse ja kirjutatakse CadCrafti enda DWG-teegiga (AutoCAD R13 kuni 2018 failid). Sinu DWG-faili ei muudeta kunagi. Vigastatud failid või versioonid, mida lugeja ei toeta, lükatakse tagasi teatega. |
| PDF | Toob lehe sisse aluspildina või objektidena ([PDF-aluspildid](topic:pdf-underlay)) | Jah, väljatrükiga | Lehe või mudeli vektor-PDF mõõtkavas. |

Iga avatud joonis (või see, mida alustad nupuga {{ui:Uus}}) saab oma sakk joonistusala kohal; kui uut joonist keegi pole veel puutunud, kasutatakse seda sakki lisamata. Sakile klõpsates vahetad joonist, nupust {{ui:×}} sulged sakki (CadCraft küsib enne, kui on salvestamata muudatusi), või paigutad avatud joonised kõrvuti: vaata [Jaga ekraan](topic:split-screen).

## Joonise avamine

- Vajuta {{key:Mod+O}}, klõpsa {{ui:Ava}} või sisesta `OPEN` ja vali fail.
- Või lohista `.dwg` või `.dxf` fail joonistusalale.

Faili loetakse sinu brauseris. Seda ei laadita kuhugi üles. Ajalugu teatab, mitu objekti ja kihti sisse tuli ning kui kaua see võttis, ja vasakpoolse paneeli jaotis {{ui:Joonis}} näitab vormingut, näiteks „DWG 2018 (AC1032)“.

DWG-lugeja on osa CadCraftist ja laaditakse alla esimese DWG-joonisega, mille avad pärast lehe laadimist (mõni sada KB), nii et eraldi allalaadimist oodata ei pea. Fail loetakse taustal, nii et leht reageerib edasi, kui suur DWG avaneb.

DXF-i loetakse umbes 4 MB suurustes tükkides, mitte kui üks tekstiplokk, nii et ka üle 512 MB DXF-fail avaneb. Piiravaks teguriks on arvuti mälu: DXF-i avamise ajal võib see kasutada umbes 16 kuni 20 korda faili suurust (meie testis kasutas 100 MB DXF umbes 690 000 objektiga umbes 1.5 GB).

### Mis sisse tuleb

- Jooned, kaared, ringid, murdjooned (kaarlõikudega), ellipsid, punktid, tekst ja mitmerealine tekst, tahked kujundid, viirutused (tavalised mustrid joonistatud oma joontena, teised tasase toonina), plokiviited koos atribuutidega (väärtused, mida saab muuta; vaata [Plokkide atribuudid](topic:attributes)), mõõtmed ning paigutused koos oma vaateakendega.
- Splainid tulevad sisse splainidena (aste, juhtpunktid, sõlmed, kaalud, sobituspunktid); vaata [Splainid ja murdjooned](topic:splines).
- Mitmeosutid ühe joonega ja tekstiga tulevad sisse CadCrafti mitmeosutitena, mida saab muuta (vaata {{cmd:MLEADER}}). Teised (plokiga, mitme joonega või kõverjoontega) joonistatakse nii, nagu teine programm need joonistas, ja liiguvad ühena; ajalugu ütleb, mitu.
- Pildid (kujutised) näidatakse raamina koos pildi failinimega, kuni annad CadCraftile faili käsuga {{cmd:IMAGE}}: vaata [Pildid joonisel](topic:pictures#show-the-pictures-a-dwg-uses). Katted näidatakse oma raamiga ning nende all olev jääb nähtavaks.
- Tabelid DWG-s tulevad sisse nii, nagu teine programm need joonistas.
- 3D-tahud mudeliruumis tulevad sisse vahekaardil {{ui:3D}}, mitte 2D-objektidena; samuti need plokkides, üks kord plokiviite kohta mudelis. Plokis ja lehel joonistatakse need samuti tasasena, kontuuridena. Vaata [Mudel 3D-s](topic:3d-solids).
- Kihid säilitavad oma värvi ning sisse/välja-, külmutatud-, lukustatud- ja prindisätted. DEFPOINTS ei prindita kunagi.
- Mõõtmed muutuvad tegelikeks, muudetavateks CadCrafti mõõtmeteks, kui nende punkte saab lugeda. Need näidatakse algselt täpselt nii, nagu teine programm need joonistas; niipea kui muudad ühte, joonistab CadCraft selle uuesti oma stiilis.
- Iga paigutus muutub lehe sakiks. Teises programmis on igal paigutusel peidetud esimene vaateaken, mis on leht ise; CadCraft jätab selle välja.

### Mis ei tule veel sisse

Kõike, mida CadCraft ei suuda joonistada, loetakse kokku, mitte ei arvata. Vasakpoolse paneeli kastis „Selle faili kohta“ on see loetletud kui „Veel näitamata:“, millele järgneb iga objektitüüp ja arv. Tüüpilised juhud on tabelid DXF-is, võrgud ja plokkide sees olevad 3D-tahked kujundid. Mudeliruumi 3D-tahked kujundid, piirkonnad ja kehad näidatakse vahekaardil 3D (vaata [Mudel 3D-s](topic:3d-solids#solids-from-other-programs)). Failis pööratud vaateaknad näidatakse pööratuna, nagu seal, ja jäävad salvestamisel pööratuks; samuti jäävad alles praegune UCS, nimega UCS-id ja pööratud vaade.

Tekst joonistatakse ühe Helvetica-stiilis kirjaga. Silt, mis mahub algse programmi kitsamas kirjas ühele reale, võib CadCraftis murduda kaheks reaks.

## Salvestamine

Salvestamiseks on kolm viisi. Igaüks laadib alla koopia.

- **Salvesta**: vajuta {{key:Mod+S}}, klõpsa {{ui:Salvesta}} või sisesta `SAVE` (ka `QSAVE`). Salvestab joonise vormingus: DWG, kui avasid DWG, DXF, kui avasid DXF. DWG säilitab versiooni, millega see tuli (2018 fail salvestub 2018). Uus joonis kasutab vormingut ja DWG-versiooni, mille viimati valisid jaotises {{ui:Salvesta nimega}} selles brauseris; kui ühtegi ei valinud, on see DWG AutoCAD 2000 vormingus.
- **Salvesta nimega**: vajuta {{key:Mod+Shift+S}}, klõpsa {{ui:Salvesta nimega}} või sisesta `SAVEAS`. Dialoog {{ui:Salvesta koopia nimega}} pakub {{ui:DWG}}, loendit {{ui:Versioon}} (AutoCAD 2018, 2013, 2010, 2007, 2004 või 2000), {{ui:DXF R12}} ja {{ui:DXF 2000}}, igaühega faili nime, mille see annab, ning joonise praeguse vormingu ja versiooni juba valituna. Klõpsa {{ui:Salvesta}}, et alla laadida, või {{ui:Loobu}} (või {{key:Esc}}), et midagi ei salvestada; siis ütleb ajalugu „Ei salvestatud.“ Mida valid, jääb kehtima: {{key:Mod+S}} kasutab seda sellele joonisele edaspidi ning uued joonised selles brauseris alustavad sellega.
- **DXFOUT**: sisesta `DXFOUT`. See laadib alati alla DXF R12 koopia, ja järgmine {{key:Mod+S}} salvestab siiski joonise enda vormingus.

Brauser laadib alla `<joonise nimi>.dwg` või `<joonise nimi>.dxf`. Iga salvestus on **uus allalaadimine**; avatud faili ei kirjutata kunagi üle ega muudeta. Ajalugu kinnitab seda, näiteks „Koopia salvestati nimega Plan.dwg (DWG (AutoCAD 2018)). Sinu algne Plan.dxf jäi muutmata.“ DXF-i puhul öeldakse „(DXF R12, avaneb igas CAD-programmis)“. Selle all olevad read loetlevad kõik, mis selle käigus muutus.

Kui CadCraft töötab töölauarakendusena, toimib salvestamine nagu teistes töölauaprogrammides: {{key:Mod+S}} kirjutab joonise tagasi faili, mille avasid, selle enda vormingus ja versioonis, ning ajalugu ütleb, kuhu see salvestati. {{ui:Salvesta nimega}} ja eksportimised näitavad süsteemi salvestusdialoogi ning `.dwg`-, `.dxf`- või `.ccsheets`-faili, mille topeltklõpsad, avaneb CadCraftis.

PDF-i puhul tee väljatrükk (vaata allpool).

## Mida DWG säilitab ja muudab

CadCraft kirjutab DWG-faili ise, sinu brauseris, sama DWG-teegiga, millega seda loeb. Vali versioon jaotises {{ui:Salvesta nimega}}: AutoCAD 2000 vorming (failiversioon AC1015) avaneb kõige rohkemates programmides, sealhulgas vanades; uuemad vormingud (2004, AC1018, kuni 2018, AC1032) säilitavad ka tõelisi värve. Midagi ei laadita üles ja DWG salvestamine töötab võrguühenduseta.

Iga versiooni kontrollitakse, lugedes salvestatud faile tagasi kolme teise programmi DWG-lugejaga ja CadCrafti enda omaga. CadCrafti DWG-d ei ole AutoCADis endas veel avatud.

### Mida DWG säilitab

- Jooned, kaared, ringid, ellipsid, punktid ning murdjooned koos kaarlõikudega.
- Üherealine tekst koos joondamise ja laiusteguriga.
- Mitmerealine ja murtud tekst mitmerealise tekstina. Teine programm murrab selle uuesti sama laiusega.
- Objektide värvid: kihi järgi, ploki järgi, 255 standardvärvi ning tõelised värvid 2004 vormingus ja hilisemas.
- Kihid oma värvi, joontüübi, joonepaksuse ning sisse/välja-, külmutatud-, lukustatud- ja prindisätetega; objektide enda joontüübid, joonepaksused ja joontüübi mõõtkavad, joontüüpide mustrid ning joonise joontüübi mõõtkava.
- Joonise ühikud ja pikkuse vorming (kümnend, jalad ja tollid, murdarvud…).
- Plokid koos aluspunkti ja atribuudi definitsioonidega, sealhulgas nähtamatud, konstantsed ja eelseadistatud.
- Plokiviited koos mõõtkava, pöörde ja atribuudi väärtustega.
- Tahked täited ning mustrilised viirutused koos mustri, mõõtkava ja nurgaga (mustri enda read, nii et teised programmid joonistavad samad read, mis CadCraft).
- Mõõtmed tegelike mõõtmetena: teised programmid mõõdavad need uuesti, kui neid venitatakse. Igaühel on oma sätted (teksti kõrgus, noolesuurus, kümnendkohad, pikkuse vorming) ja tekst ning kaasas on iga DWG-mõõtme joonistatud koopia.
- Lehed (paigutused): iga leht oma paberisuuruse ja ühikutega, selle peal joonistatu ning vaateaknad oma vaate ja mõõtkavaga.
- Nimega vaated.
- Mitmeosutid mitmeosutitena.
- Kihi- ja plokinimed nii, nagu sina need sisestasid, suur- ja väiketähtedega. (DXF R12 kirjutab need suurtähtedega.)

### Mida DWG muudab

Igat seda loetletakse pärast salvestamist ajaloos, kui see sinu joonisele kehtib.

| CadCraftis | Salvestatud DWG-s |
|---|---|
| Tõelised värvid (valitud värvivalijaga), 2000 vormingus | Lähim standardvärv: 2000 vormingus on ainult 255 värvi. Salvesta 2004 või hilisemas vormingus, et need säiliksid |
| Lehe nimega vaated | Paberiruumi vaated: DWG ei ütle, millisele lehele need kuuluvad, seega kui CadCraft faili uuesti avab, kuuluvad need esimesele lehele |
| Mitmerealine tekst laiusteguriga | Tavaline tähelaius: DWG-s kehtib laiusteegur ainult üherealise teksti puhul |
| Kihi- või plokinimed märkidega, mida DWG ei luba | Muudetud: lingitud joonise nimi nagu `Base\|Walls` muutub nimeks `Base$0$Walls` (nii nimetab selle seo, kui lingitud joonis seotakse), ja teised märgid muutuvad märgiks `_` |

### Miks R12 ja mis teisendatakse

Kui salvestad DXF-ina, kirjutab CadCraft DXF R12, versiooni, mida iga CAD-programm avada oskab. See on vanem kui mõned funktsioonid, seega kirjutatakse mõned asjad lihtsamal kujul:

| CadCraftis | Salvestatud R12-failis |
|---|---|
| Mitmerealine tekst | Üks tekstiobjekt igal real |
| Ellipsid | Murdjooned, mis järgivad ellipsit |
| Viirutused (avatud failidest) | Ainult nende kontuurid |
| Tõelised värvid (valitud värvivalijaga) | Lähim standardvärv |
| Joonepaksused ja objektide enda joontüübi mõõtkavad | Jäetakse välja: R12-l pole kumbagi (joontüübid säilivad) |
| Kihi- ja plokinimed | Kirjutatakse suurtähtedega; tühikud ja muud märgid muutuvad märgiks `_` ning nimed lõigatakse 31 märgi pikkuseks („Title block“ muutub nimeks `TITLE_BLOCK`) |
| Kihid, mis on seatud mitte prinditavaks | Teised programmid prindivad need (CadCraft mäletab sätet, kui joonisel on leht) |
| Mõõtmed | Tegelikud mõõtmed oma joonistatud plokiga, nii et teised programmid näitavad neid nii, nagu sina näed |
| Mitmeosutid | Read, nool ja tekst, mida need joonistavad |
| Nimega vaated | Säilivad, nimed suurtähtedega; lehe vaated tulevad tagasi esimesele lehele |
| Mitu lehte | Esimene leht on paberiruum, mida iga programm näitab; teised säilivad plokkidena nimega `CCLAYOUT_1`, `CCLAYOUT_2` … , mille CadCraft faili avamisel tagasi lehtedeks muudab |

Ajalugu loetleb need kõik, mis su joonisele kehtisid.

:::tip
Kui tahad joonisega töötada mitme päeva jooksul, salvesta DXF-ina ja ava see DXF järgmisel korral. Kõik, mida CadCraft joonistada oskab, säilib selle ringi läbimisel, sealhulgas mõõtmed, plokid ja kõik lehed.
:::

## Lingitud joonised (välised viited)

{{cmd:XATTACH}} (`XA` või {{ui:Plokid}} › {{ui:Veel}} › {{ui:Lingi joonis (xref)}}) lingib teise DWG- või DXF-joonise: vali fail ja klõpsa, kuhu see läheb ({{key:Enter}} paneb selle koordinaatidele 0,0). See tuleb sisse ühe plokina, mis on nimetatud faili järgi, õiges mõõtkavas, kui kahel joonisel on erinevad ühikud. Selle kihid ja plokid säilitavad oma nimed, mille ees on lingi nimi — `Plan|Walls`, `Plan|Door` — nii et need ei segune sinu omadega: lülita lingitud kihid sisse ja välja, külmuta või lukusta neid nagu oma. Link on ainult lugemiseks: muuda teist joonist ja lae see uuesti. Mida määrad lingitud kihtidel (värv, joontüüp, joonepaksus, sisse/välja, külmutamine, lukustamine, printimine), säilib, kui laed uuesti, kui salvestad joonise DWG-na, kui link on veel link, ja kui mõni teine joonis seda linki lingib.

{{cmd:XREF}} (`XR`): `?` loetleb lingid (laetud või mitte, mis fail, mitu viidet); `A` lisab; `R` laeb ühe uuesti oma failist (vali fail uuesti: brauser ei pääse ise sinu kaustadele ligi); `B` seob ühe (sellest saavad tavalised plokid ja kihid nimega `Plan$0$Walls`); `D` eemaldab ühe (selle viited ja kihid kaovad). Iga on üks tagasivõtmise samm.

{{cmd:XCLIP}} (`XC`) lõikab plokiviiteid ja linke: vali need, `N` uue piiri jaoks, seejärel `R` ja kaks nurka või `P` ja hulknurga punktid ({{key:Enter}} sulgeb selle); `D` eemaldab lõike. Näidatakse ja prinditakse ainult see, mis on sees, ja lõige liigub koos viitega. DWG ja DXF 2000 säilitavad lõiked; DXF R12 salvestab viite tervikuna ja ütleb seda. Kui seod lingi, millel on lõigatud viited, küsib {{cmd:XREF}} `B`: `A` seob kõik, `C` jätab alles ainult iga viite lõigatud osa (read ja kaared lõigatakse piirilt; tekstid ja sisemised plokid jäävad alles, kui nende sisestuspunkt on sees).

Avatud joonis võib lingida faile, mida CadCraft ei näe: see ütleb, mitu neist pole laetud. Vaatamiseks kasuta {{cmd:XREF}}, `R` ja vali iga fail.

Salvestamisel seotakse laetud link faili **seotuna** (teised programmid näevad tavalisi plokke ja kihte nimega `Plan$0$…`) ning ajalugu ütleb seda. Laadimata link jääb oma faili viiteks, nii DWG-s kui DXF-is.

## Ava 3D-s

{{ui:Vaade}} › {{ui:Veel}} › {{ui:Ava rakenduses ModelCraft}} ({{cmd:OPENIN3D}}) avab joonise 3D-modelleerimisrakenduses uuel sakil DWG-na, seda üles laadimata. Seal tehtud muudatused jäävad sinna; salvesta need seal. Menüükirje näidatakse ainult seal, kus see rakendus suudab üleantud joonist vastu võtta.

## PDF-i väljatrükk

Vajuta {{key:Mod+P}}, klõpsa {{ui:Trüki}} või sisesta `PLOT`. PDF tehakse brauseri sees ja laetakse alla või avatakse uuel sakil printimiseks. Vaata [Prindi PDF-iks](topic:plot-pdf).

## Kuhu failid lähevad

Iga salvestus ja iga väljatrükk on allalaadimine, nii et failid lähevad sinna, kuhu brauser allalaadimised paigutab: tavaliselt kausta Allalaadimised. Et valida iga kord kaust, muuda oma brauseris allalaadimise sätet; [Brauserid ja arvutid](common:browsers) näitab, kus see on.

Midagi, mida avad või salvestad, ei saadeta meile. Vaata [Kuhu sinu failid lähevad](common:your-files).

## PLN- ja PLA-projektifailid

CadCraft avab DWG- ja DXF-jooniseid, mitte Archicadi enda faile (`.pln`, `.pla`, `.tpl`, `.bpn`). Ühe avamisel ütleb see, mis see on. Archicadis salvesta vajalikud vaated või paigutused DWG-na ja ava need siin, või ekspordi mudel IFC-na ja ava see BimCraftis. Kui BimCraft saab faili üle võtta, pakub CadCraft {{ui:Ava BimCraftis}}.

## Kui leht sulgub enne salvestamist

CadCraft hoiab iga muudetud joonise koopiat ainult selles brauseris, veidi pärast seda, kui muutmise lõpetad. Kui vaheleht sulgub, brauser peatub või arvuti taaskäivitub enne salvestamist, küsib CadCraft järgmisel käivitamisel **Kas taastame sinu töö?** {{ui:Taasta}} avab joonise uuesti, salvestamata, omal sakil. Joonise salvestamine eemaldab selle koopia. Vaata [Taasta oma töö](common:recover).

## Võrgus ja võrguta

Avamine, joonistamine, salvestamine (DWG ja DXF) ja väljatrükk toimuvad kõik sinu arvutis, nii et need töötavad ilma ühenduseta, kui CadCraft on laetud.

Et kasutada CadCrafti üldse ilma ühenduseta, klõpsa ülal ribal, kui oled võrgus, nupule {{ui:Salvesta võrguks}}. Silt loeb kasvades („Salvestan: 40 / 212“) ja lõpeb tekstiga „Võrguta valmis“. Salvestatud koopia sisaldab DWG-lugejat, kokku umbes 5 MB, nii et **DWG-failid avanevad võrguta ka**, kui see on salvestatud. Nupule klõpsates uuesti saad {{ui:Salvesta uuesti (võta uusim versioon)}} või {{ui:Eemalda võrguvälise koopia}}. „Ei õnnestunud salvestada“ tähendab, et mõned failid ei laadinud alla: kontrolli ühendust ja klõpsa uuesti proovimiseks. „Võrguta režiim pole saadaval“ tähendab, et see brauseriaken ei saa koopiat hoida (privaatsed aknad ja mõned hallatud arvutid).

Ilma salvestatud koopiata laaditakse DWG-lugeja alla esimesel korral, kui avad DWG pärast lehe laadimist, seega DWG avamine ilma võrguta võib ebaõnnestuda; DXF-failid seda kunagi ei vaja. Ära laadi lehte võrguta uuesti, kui CadCraft pole salvestatud.

Üksikasjade jaoks vaata [Töö võrguta](common:offline).

:::offline
Oled nüüd võrguta. Joonised salvestuvad DWG- või DXF-vormingus ja prinditakse tavapäraselt ning DXF-failid avanevad. DWG-failid avanevad, kui CadCraft näitab „Võrguta valmis“ või kui DWG-lugeja on juba selles sakis laetud.
:::

## Piirangud failides

Piirangud ja parameetrid (vaata [Joonise piiramine](topic:constraints)) salvestatakse nii DWG- kui DXF-vormingus. Iga piiratud objekt kannab väikest CadCrafti märkust (laiendatud andmeid) ning kasutamata plokk nimega `CADCRAFT_PARAMETRIC` hoiab piiranguid ja parameetrite tabelit. Teised programmid avavad joonise tavaliselt ja ignoreerivad mõlemat; nad võivad kasutamata plokki kustutada, kui puhastavad. Märkused viitavad objektidele nende enda võtme, mitte faili käepidemete järgi, nii et programm, mis käepidemeid ümber nummerdab, neid ei riku. Kui teine programm on piiratud objekti kustutanud või muutnud, eemaldab CadCraft selle objekti piirangud faili avamisel ja ütleb, mitu. Fail ilma piiranguteta avaneb piiranguteta.

Detailmodelleerijast eksporditud visand (`.json`) avaneb samuti: vaata [Visandite viimine teiste detailmodelleerijate juurde ja sealt](topic:solidworks-sketches).

## Pole veel saadaval

- Mitmeosutid mitmeosuti-objektidena salvestatud DXF-is (R12-l neid pole: need salvestatakse sellena, mida nad joonistavad).
- Pildid salvestatud DXF-is (need salvestatakse oma raamidena; DWG säilitab need piltidena) ning katted, mis peidavad selle, mis nende all on.
- DXF-i salvestamine versioonis, mis on uuem kui 2000.
- Pilvesalvestus ja sünkroonimine arvutite vahel.

Täieliku loendi jaoks vaata [Veel ehitamata](topic:not-built-yet).
