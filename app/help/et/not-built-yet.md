---
title: Veel pole valmis
summary: Mida selle CadCraft joonistusrakenduse versioon veel ei tee ja mida selle asemel praegu teha.
keywords: puudub, piirangud, ctb, stb, printimisstiil, omadused, ucs, annotatiivne, dünaamiline plokk, spline, tee-plaan, ei toetata, dwg salvestamine, viirutus, venita, massiiv, ühenda, matchprop, katkesta, pikenda, joonetüüp, joonepaksus, xref, pilv, 3d, tahkised, booleaanid, mitmikviiktekst, maskeering
from: 87e56521
---

CadCraft on arendamisel. Sellel lehel on loetletud, mida praegune versioon ei tee, et sa seda ei otsiks. Iga punkt ütleb, mida praegu selle asemel teha.

## Failid ja salvestamine

| Veel pole valmis | Praegu selle asemel |
|---|---|
| CadCraft'i DWG kontrollitud AutoCAD-is endas | Iga salvestatud versiooni loevad tagasi kolme teise programmi DWG-lugejad ja CadCraft. Vaata [Mida DWG säilitab ja muudab](topic:files#what-a-dwg-keeps-and-changes). |
| DXF-i salvestamine uuemana kui 2000 | Salvesta DXF 2000 formaadis või DWG-na kuni AutoCAD 2018 versioonini. |
| Avatud faili üle kirjutamine brauseris | Iga salvestus laadib alla uue koopia; kui soovid, asenda vana fail ise. CadCraft Studios kirjutab {{key:Mod+S}} avatud faili tagasi. |
| Pilvesalvestus ja sünkroonimine arvutite vahel | CadCraft ei saada salvestusi veel pilve: hoia DWG- ja DXF-failid oma kaustades. CadCraft Studios loetleb [Ajalugu](topic:history) joonise pilveversioonid, mis on salvestatud mujal, ning sinu enda salvestuste koopiad sellel arvutil. |
| Kattejoonised ja seotud joonise muutmine kohapeal | Lisa joonis lingina ja laadi see uuesti pärast teise joonise muutmist. Ling jääb lingiks, kui salvestad DWG-na, ja {{cmd:XCLIP}} lõikab selle. |
| Pildid DXF-is; maskeeringud, mis peidavad alt oleva | DXF hoiab pildi raamina koos failinimega; DWG hoiab seda pildina: vaata [Pildid joonisel](topic:pictures). Maskeering näidatakse oma raamina. |
| Mitmikviiktekstide muutmine kõverate viikjoontega, viikjoontega joonise mõlemal küljel või plokiga, mida pööratakse või skaleeritakse ebaühtlaselt | Need joonistatakse nii, nagu teine programm need joonistas, ja liiguvad ühtse tervikuna. Sirgete viikjoontega mitmikviiktekstid ühe maandumiskohani ning sisuks tekst või plokk on muudetavad ({{cmd:MLEADEREDIT}}). |
| Teistest programmidest pärit tabelites: plokki sisaldav lahter, teksti vormindus lahtris, lahtrikaupa servad ja DXF-tabeli värvid, tabel veergudeks jaotatuna | Tabel avaneb muudetava tabelina ({{cmd:TABLEDIT}}) ja näidatakse nii, nagu teine programm selle joonistas, kuni seda muudad; seejärel joonistab CadCraft selle oma lahtritest uuesti: lihttekst, valemid nagu `=G3*H3` ja `=Sum(I3:I9)`, joondus ning teksti kõrgus. Plokilahter jääb siis tühjaks. Muutmata DWG-tabel salvestatakse tagasi koos lahtriandmetega, mis tal algselt oli. |
| Päris tabeli objekt salvestatud DXF-is | DWG hoiab tabelit tabelina, mida teised programmid saavad muuta. DXF hoiab seda plokina, mis seda joonistab, koos CadCraft'i enda andmetega: CadCraft avab selle uuesti tabelina; teised programmid näevad plokki. Peegeldatud või ebaühtlaselt skaleeritud tabel salvestatakse DWG-na samuti nii. |
| Kopeerimine ja kleepimine teiste programmidega | CadCraft'i lõikelaud töötab CadCraft'i joonistuste ja sama brauseri vahekaartide vahel, mitte teiste programmidega. Salvesta DWG või DXF-na ja ava seal. Vaata [Kopeeri, kleebi ja dubleeri](topic:copy-paste). |

## Joonistamine ja muutmine

| Veel pole valmis | Praegu selle asemel |
|---|---|
| Viirutusmustrid, mida CadCraftil pole, ja gradientvärvid täpselt nii, nagu teised programmid neid maalivad | Avatud viirutused mustritega, mida CadCraftil pole, kuvatakse tooniga. Gradientvärv ({{cmd:GRADIENT}}) maalitakse iga tüübi jaoks CadCraft'i enda viisil: liigilt sarnane teiste programmide omaga, mitte punkt-punkti haaval. DWG 2004 ja hiljem hoiavad seda päris gradientviirutusena; DXF 2000 või DWG 2000 failis loeb selle tagasi ainult CadCraft ja teised programmid näevad tahket täidet. Mustrid laaditakse `.pat` failist ning viirutust saab siduda selle piiriga, nii et see sellele järgneb: vaata [Viirutus ja täidetavad alad](topic:hatch). |
| Joonetüübid kujundite või tekstiga ning joonepaksused salvestatud DXF R12-s | Faili joonetüübi kujundid ja tekst jäetakse kriipsudest välja; joonepaksuste säilitamiseks salvesta DWG-na. |
| Mustriga viirutused salvestatud DXF-is | R12-l ei ole viirutust: need salvestatakse oma kontuuridena. Mustri säilitamiseks salvesta DWG-na. |
| Teise programmi tehtud või muudetavad massiivid; ridad ja tasemed tee- ja polaarmassiivides; massiiv, mis järgib oma tee kõverat | Massiiv, mis on tehtud ASsociative'iga ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; muudetakse käsuga {{cmd:ARRAYEDIT}}), salvestatakse plokiviitena CadCraft'i enda arvudega: teised programmid näitavad, teisaldavad, prindivad ja lahti võtavad seda, kuid ei saa muuta selle arvu; teises programmis tehtud massiiv avatakse siin tavalise plokiviitena. Teemassiiv hoiab oma tee koopiat: kõvera muutmine hiljem ei teisalda elemente. |
| Lõigatud lehe vaateaknad teistesse ja teistest programmidest | Vaateakent, mis on lõigatud käsuga {{cmd:VPCLIP}} või tehtud käsuga {{cmd:MVIEW}} Polygonal või Object, salvestatakse CadCraft'i enda kontuuriga: teised programmid avavad selle ümbritseva ristkülikuna ning teises programmis lõigatud vaateaken avatakse siin oma ristkülikuna. DXF R12 hoiab ainult ristkülikut. |
| {{cmd:STRETCH}} ristuva hulknurgaga | Kasuta ühte või mitut ristuvat akent. |
| {{cmd:PEDIT}} Muuda tippu (üks tipp korraga käsureal) | Haarangud ja tippude sirvija paneelis Omadused (iga tipp, selle laiused ja kumerus). Ülejäänud PEDIT on valmis: vaata [Splinid ja murdjooned](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} ja {{cmd:JOIN}} ellipsidel ja splinidel | {{cmd:EXPLODE}} spliin (või {{cmd:PEDIT}} seda), et saada murdjoon, mida need käsud võtavad. |
| Ümardus ja faas murdjoone kaarelõigu ja selle kõrval oleva lõigu vahel; ümardus, mis ühendab joone murdjooneks | {{cmd:EXPLODE}} murdjoon ja seejärel ümarda tükid. Ümarduskaar lisatakse oma objektina. |
| Lõika ja pikenda: projekti valik (3D) ja murdjoone kaarlõpu pikendamine | Lõika joonise tasapinnas; kaarlõpu puhul võta murdjoon lahti või joonista kaar uuesti. |
| OLE-objektid: nende lisamine, käivitamine või muutmine; DWG-s olevate objektide näitamine seal, kuhu fail need paneb; metafailipildid | Vaata [Pildid](topic:pictures#objects-from-other-programs-ole). DXF-i objektid näidatakse oma bitmapina või sildiga raamina; DWG objektid säilitatakse, neid ei joonistata kohale ({{cmd:OLELIST}} loetleb need ja paneb pildi koopia sinna, kus ütled). |
| Vorminduskoodide (paks kiri, murdarvud kihina, värv sõnade kaupa) sisestamine lõigutekstis; muud fondid peale ühe Helvetica-stiilis fondi; veerud | Failist tulnud vormindus säilitatakse, joonistatakse ja salvestatakse (vaata Tekst); uus lõigutekst on ühe kõrguse ja värviga. |
| Lõigutekst muudetuna oma pöördes | Redaktor avatakse tasasena; tekst säilitab oma pöörde. |
| Mitmikviiktekstid salvestatud DXF-is mitmikviiktekstiobjektidena | DWG hoiab neid mitmikviiktekstidena, iga viikjoone ja plokiga sisuna; DXF hoiab seda, mida need joonistavad (jooned, noolepead ning tekst või plokk). |
| Tabelites ({{cmd:TABLE}}): lahtris murduv tekst, tabelid, mis jagunevad osadeks, tabelistiili enda tekstistiil ja ridade liikide värvid dialoogis, andmeside tabelarvutusfailiga (`.xlsx`) või fail, mis loeb faili ise | Lahtri tekst murdub ainult seal, kus murrad ({{key:Alt+Enter}}); laienda veergu. {{cmd:DATALINK}} loeb `.csv` faili ja {{cmd:DATALINKUPDATE}} palub faili uuesti valida. {{cmd:DATAEXTRACTION}} ja {{cmd:COUNTTABLE}} teevad tabeli, mis ei järgi joonist ise: käivita need uuesti (elav loend: {{cmd:BOMTABLE}}). |
| Atribuudi definitsioonid, mis on salvestatud failis omaette (väljaspool plokki), mitmerealised atribuudid | Pane atribuudi definitsioonid enne salvestamist plokki: omaette salvestatakse need tekstina, mis näitab sildi. |
| Kihtide olekud (salvestamine ja taastamine, milline kiht on sees) | Kasuta {{cmd:LAYISO}} / {{cmd:LAYUNISO}} või lülita kihid sisse ja välja käsitsi. |
| Akna hulknurk ja ristuv hulknurk ning salvestatud valikufiltrid | Piir (`F`), Aken, Ristumine, Eemalda (`R`), {{cmd:QSELECT}} reegli jaoks. |

## Omaduste paneel

| Veel pole valmis | Praegu selle asemel |
|---|---|
| Sobitamise valikute joonistamine ning horisontaalne teksti asukoht ja tekst joone all mõõtudel, mis pole lineaarsed ega joondatud | Need hoitakse objektil, näidatakse paneelis Omadused ja salvestatakse; CadCraft paigutab teksti oma reegli järgi. |
| Materjalid, mida teised programmid näevad | Salvestatud fail hoiab CadCraft'ile materjali nime; teised programmid näitavad kihi materjali. |
| Läbipaistvus DWG 2000 ja DXF-failides | Teised programmid näitavad neid objekte tahkena; CadCraft hoiab läbipaistvuse alles. Kõigile sobimiseks salvesta DWG 2004 või hiljem. |
| Teises programmis tehtud viirutuse ling | CadCraft salvestab oma lingi DWG- ja DXF 2000-failidesse; teistes programmides tehtud lingid ei loeta. Kasuta `HATCHEDIT` ja Ling: vaata [Viirutus ja täidetavad alad](topic:hatch). |
| Koordinaadid Omadustes UCS-is | Omadused näitavad maailmakoordinaate; olekuriba ja {{cmd:ID}} näitavad UCS-i koordinaate. Vaata [Pööra vaadet ja kasuta oma koordinaate](topic:ucs-and-turned-view). |
| Annotatiivse objekti eraldi asukoht igal mõõtkaalal; teiste programmide hoitud mõõtkaalakirjete lugemine | Annotatiivne tekst või mõõt hoiab mõõtkavade loendit ({{cmd:OBJECTSCALE}}) ja iga vaateaken näitab seda oma mõõtkava suuruses samas kohas. Loend salvestatakse CadCraft'i enda andmetena: teine programm näeb objekti ainult ühes mõõtkavas, mille järgi see on mõõdetud, ja teises programmis tehtud loendit ei loeta. Vaata [Ühikud, paberid ja mõõtkavad](topic:units-papers-scales#annotate-by-scale). |
| Dünaamilise ploki vahemaade, nurkade või peegelduste muutmine; dünaamilised plokid, mis jäävad dünaamiliseks, kui salvestad teises DWG versioonis või DXF-na | Muuda selle nähtavuse olekut: Omadused › {{ui:Kohandatud}}; selle teised väärtused näidatakse seal ainult lugemiseks. See jääb dünaamiliseks, kui salvestad DWG-na joonise versioonis. Vaata [Dünaamilised plokid](topic:dynamic-blocks). |
| Spliini sobitustolerants, spliini aste 6 ja üle selle, 3D-splinid | Sobitus- ja juhtpunktid, aste 1 kuni 5 ja kaalud on valmis: vaata [Splinid ja murdjooned](topic:splines). Spliini kõrgust (Z) ei hoita. |

## Täpsuse abivahendid

| Veel pole valmis | Praegu selle asemel |
|---|---|
| Jälgimine punktidest käskude vahel ja jälgimise sätete dialoog (suhtelised polaarnurgad, lisanurgad) | {{cmd:POLARANG}} määrab sammu; hangi punktid uuesti järgmises käsus. |
| Haakumine ruudustikule | Sisesta koordinaadid; ruudustik on ainult visuaalne juhend. |
| Kaare ja pikkuse valikud pinna nurki valides ning MEASUREGEOM Volume | Joonista kontuur käsuga {{cmd:PLINE}} (kaared kaasa arvatud), seejärel {{cmd:AREA}} `O`. |
| Dünaamiline sisend haarangutele ja selle valikute loend (allanool) | Käsurida näitab valikuid. |
| Nurgad kraadides-minutites-sekundites, gradides või mõõdistaja asimuudis | Sisesta kümnendkraadid: `30.5` tähendab 30°30'. |
| Vaadete haldur dialoog; lehe nimetatud vaated, mis tulevad sellele lehele tagasi | {{cmd:NAMEDVIEW}} loetleb ja taastab vaated. Salvestatud fail hoiab neid, kuid lehe vaated tulevad tagasi esimesele lehele. |

## Lehed, mõõdud ja printimine

| Veel pole valmis | Praegu selle asemel |
|---|---|
| Väljad vaateakna mõõtkava, nimega objekti (nagu kiht või plokk), hüperlingi ning lehekomplekti väljade jaoks, mis ulatuvad lehe numbrini ja nimeni; väljad, mis on kirjutatud väljaobjektidena, mida teised programmid uuendavad | {{cmd:FIELD}} on kuupäev, failinimi, lehe number, nimi ja arv, joonise omadused ({{cmd:DWGPROPS}}), objekti pindala, pikkus ja muud omadused ning valemid tekstis, atribuutides ja tabelilahtrites. Teine programm näitab CadCraft'i välja viimast loetud tekstina; CadCraft loeb teise programmi kuupäeva-, failinimi-, omadus-, lehe- ja avaldisväljad ning jätab teised tüübid tekstina. Vaateakna mõõtkava sisestatakse käsitsi. |
| Millist mõõtmestiili praegu kasutatakse salvestamisel; mõõdu tekst lohistatud vabasse kohta | Joonis avaneb praeguse stiiliga Standard. Tekst asub mõõtejoonel (DIMTEDIT Left / Right / Center). Vaata [Mõõtmete suuruste seadistamine](topic:dimension-settings). |
| Muudetavad kaherealised nurkmõõdud avatud failidest, mida CadCraft ei suuda välja arvutada | Need näidatakse failis joonistatult. Ordinaat-, kaarepikkuse ja murdunud raadiusmõõdud avanevad muudetavate mõõtudena. |
| CTB-lugeja kontrollimine teise programmi failiga (on ehitatud avaldatud kirjelduse järgi), nimetatud printimisstiilid (STB), ditheering, pliiatsinumbrid, hall skaala CTB-st ja kohanduv joonetüübi reguleerimine printimisstiilis | Tee tabel dialoogis {{ui:Printimisstiilide tabelid}} (värv, hall, tint, joonepaksus, joonetüüp, joone lõpp ja liitumine ning täitestiil värvi kaupa): vaata [Printimisstiilide tabelid](topic:plot-pdf#plot-style-tables). |
| Lehe seadistused | Vali paber, mõõtkava ja printimisstiil dialoogis {{ui:Prindi PDF-iks}}; leht hoiab oma printimisstiili. |
| Hindi ja muud kirjakujud, mis vajavad PDF-ides keerulist kujundamist, ning harvad ideogrammid (Euroopa kirjakujud, kirillitsa, kreeka, heebrea, araabia, pärsia, urdu, tai, hiina, jaapani ja korea trükk) | Need prinditakse kujul „?”. |
| Araabia kiri ning hiina, jaapani või korea tekst samas prinditud PDF-is | Printimisel on üks font: üks kahest kirjakujust prinditakse kujul „?”. |
| Selged suunamärgid tekstis (sisestused, ülekirjutused, isolaatorid) | Need ignoreeritakse: iga rida järjestatakse ainult oma tähtede järgi. |
| Pildid lisatud PDF-lehe sees, printimisel | Lehe jooned, täited ja tekst prinditakse. Lehte, mis on ainult pilt, lisatakse käsuga {{cmd:SCANATTACH}} ja pildid prinditakse. Vaata [PDF-alused](topic:pdf-underlay#plot-and-save). |
| Töö saatmine laserile CadCraft Studiost (Studios puudub Web Serial) | Salvesta G-kood ja saada see oma laseri enda programmiga või saada see Chrome'ist või Edge'ist. Vaata [Saada joonis laserile](topic:laser-cutting#send-from-the-browser). |

## Piirangud ja parameetrid

| Veel pole valmis | Praegu selle asemel |
|---|---|
| Piirangud lehtedel, plokkides, ellipsidel, splinidel või tekstil | Seo vahekaardil {{ui:Mudel}}, joontel, murdjoontel, ringidel, kaartel ja punktidel. |
| Sujuv (G2) ja murdjoone kaare kumeruse otsene piiramine | Puutuja ja võrdne; kaarelõik järgib oma kahte otsa. |
| Viitelised (juhitud) mõõtmepiirangud ja `3Point` käsus {{cmd:DCANGULAR}} | Tavaline mõõt (DIMLINEAR …) näitab väärtust, seda juhtimata. |
| Fikseeritud suurusega mõõtmepiirangud paberil ning nende printimine | Need näidatakse ainult ekraanil; printimiseks lisa tavalised mõõdud. |
| Piirangud, mis säilivad käskude EXPLODE, BREAK, JOIN ja teiste uusi objekte tekitavate käskude kaudu ning lõigatud murdjoontel | Sea need uuesti (AUTOCONSTRAIN aitab). {{cmd:MIRROR}} ja {{cmd:TRIM}} joontele, kaartele ja ringidele säilitavad need. |
| Disainitabelid (konfiguratsioonid) CadCraftis | Muuda parameetreid paneelis. |
| Kontrollitud edasi-tagasi vahetus SolidWorksiga | Kontrolli makro koostatud visandit enne, kui sellele toetud. |

## 3D

| Veel pole valmis | Praegu selle asemel |
|---|---|
| Ümardused, faasid, kestad ja lofdid; pühkimised mööda tõusvat rada (3D rajad) | Väljapressi kontuurid kaartidega, lükka ja tõmba tahke, pööra ning pühi mööda tasaseid radu. |
| Väljapressimine muus suunas kui üles | Joonista kuju maapinnale ja pressi üles või alla välja (kui soovid, siis kaldega või mööda rada); pööra tahke hiljem. |
| 2D-objektide kõrgus ja paksus | Joonis lebab maapinnal (kõrgus 0) vahekaardil 3D. |
| Teistest programmidest pärit tahkiste, piirkondade ja kehade muutmine; nende näitamine plokkide sees; nende tahud vabakujulistel pindadel; polüvõrgud ja polügoonvõrgud | Mudeliruumi tahkised näidatakse vahekaardil 3D nii, nagu nad on, ning salvestatakse DWG-s muutmata kujul tagasi; mis ei joonistu, loetletakse 3D-vahekaardi avamisel. Küsi võrgud mudeliruumis 3D-tahkudena. Vaata [Teistest programmidest pärit tahkised](topic:3d-solids#solids-from-other-programs). |
| Tahkiste kopeerimine ja kleepimine | Vahekaardil 3D kasuta {{cmd:COPY}}. Lõikelaud hoiab ainult 2D-objekte. |
| Lõiked, vaated, mis järgivad hilisemaid muudatusi tahkistes, ja varjutatud tahkised prinditud lehtedel | {{cmd:VIEWBASE}} paigutab tasased vaated (hetkepilt); käivita see uuesti pärast tahkiste muutmist. |
| Materjalid, tekstuurid ja valgustuse sätted | Visuaalsed stiilid: varjutatud, servad, peidetud joon, raamjoonis ja röntgen. |
| Kaardikihid, mis on prinditud, lehtede vaateaknatel ja vahekaardil 3D; failidest pärit pildid, mis on joonisega salvestatud; joonise asukoht teistele programmidele DWG 2000–2007 ja DXF R12 vormingus | Kaardikihid näidatakse ekraanil mudeliruumi all; süsteem ja kihtide loend salvestatakse joonisega: vaata [Kaardikihid joonise all](topic:map-layers). |
| E57 skannid üle 6 miljoni punkti või 512 MB, skanneritootjate enda failid (RCP, RCS, FLS, LGS, TZF, ZFS), punktipilv, mis on joonisega salvestatud või prinditud, pilve külge haakumine vahekaardil 3D, püstised (lõike) viilud vahekaardil Mudel | Suured või tootjate enda skannid ekspordi LAS- või LAZ-vormingus ([Punktipilve vormingud](topic:point-cloud-formats)); lisa pilv igal joonise avamisel; joonista plaanviilust vahekaardil Mudel: vaata [Joonista valmisolekujooned punktipilve kohale](topic:point-clouds). |
| Skannide registreerimine: sihtmärkide (kerad, šahimustrid) leidmine skannist iseseisvalt, kõigi skannide koos lahendamine (kimpreguleerimine), mõõtkava, registreerimine mudeli vastu | Vali vastavad punktid või sisesta sihtmärkide koordinaadid, seejärel täpsusta üks skann korraga ICP-ga: vaata [Registreeri mitu skanni üheks](topic:register-scans). |

## Rutiinid ja kohandamine

| Veel pole valmis | Praegu selle asemel |
|---|---|
| Kompileeritud või kaitstud LISP (.fas, .vlx), natiivsed programmid (.arx, .crx, .dbx) ja VBA (.dvb) | Laadi rutiini `.lsp` lähtekood käsuga {{cmd:APPLOAD}}. |
| LISP-i `grread`, reaktorid (`vlr-…`), kõvera funktsioonid (`vlax-curve-…`), sõnastikud ja laiendatud andmed, Express Toolsi `acet-…` | Keele ülejäänud osa töötab: vaata [Käivita LISP-rutiinid](topic:run-lisp). Käsurida nimetab puuduva funktsiooni, kui rutiin sellele jõuab. |
| Pildid ja slaidid rutiini dialoogis | Need näidatakse tühjade raamidena; dialoogi ülejäänud osa töötab. |
| CraftScript (.craft), Lua ja Python CadCraftis | Käivita need PartCrafti skriptide töölaual. |
| Kihtide, värvide ja joonetüüpide loendid lindi menüü stiilides | Kasuta paneeli {{ui:Kihid}} ja {{ui:Omadused}}. |
| Käivitussviit ja aliased, mis on sinu arvutis või sünkroonitud | Need hoitakse selles brauseris; töölauarakendus ja pilveteenus hoiavad need sinu jaoks. Studios loetakse `acad.lsp` ja `acaddoc.lsp` tugikaustast, mille valid (Laadi rakendused). |

## Abi

Leht kirjeldab seda versiooni. Kui midagi lisatakse, liigub see sellelt lehelt õpetustesse.
