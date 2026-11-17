---
title: Ei vielä toteutettu
summary: Mitä tämä CadCraft-piirustusversio ei vielä tee ja mitä tehdä sen sijaan tänään.
keywords: puuttuvat, rajoitukset, ctb, stb, plottaustyyli, ominaisuudet, ucs, merkintä, dynaaminen lohko, splini, tiekartta, ei tuettu, dwg-tallennus, viivoitus, Venytä, Matriisi, Yhdistä, matchprop, Katkaise, Pidennä pituutta, viivatyyppi, viivanpaksuus, xref, pilvi, 3d, kiintokappaleet, booleaaniset, monijohtoviitta, peite
from: 87e56521
---

CadCraft on kehitteillä. Tämä sivu luettelee, mitä nykyinen versio ei tee, jotta et etsi sitä turhaan. Jokaisessa kohdassa kerrotaan, mitä tehdä sen sijaan tänään.

## Tiedostot ja tallennus

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| CadCraftin DWG-tiedostoa ei ole vielä tarkistettu itse AutoCADissa | Jokainen tallennettu versio luetaan takaisin kolmen muun ohjelman DWG-lukijalla ja CadCraftilla. Katso [Mitä DWG säilyttää ja mitä muuttaa](topic:files#what-a-dwg-keeps-and-changes). |
| DXF, joka on uudempi kuin 2000 | Tallenna DXF 2000 -muodossa tai DWG-muodossa enintään AutoCAD 2018 -versiona. |
| Selaimessa avattuun tiedostoon tallentaminen takaisin | Jokainen tallennus lataa uuden kopion; korvaa vanha tiedosto itse, jos haluat. CadCraft Studiossa {{key:Mod+S}} kirjoittaa takaisin tiedostoon, jonka avasit. |
| Pilvitallennus ja synkronointi tietokoneiden välillä | CadCraft ei vielä lähetä tallennuksiasi pilveen: pidä DWG- ja DXF-tiedostot omissa kansioissasi. CadCraft Studiossa [Historia](topic:history) listaa muualta tallennetun piirustuksen pilviversiot ja omat tallennuksesi tällä tietokoneella. |
| Päällekkäiset viittaukset (overlay) ja linkitetyn piirustuksen muokkaaminen paikallaan | Liitä piirustus linkkinä ja lataa se uudelleen, kun toista piirustusta on muutettu. Linkki pysyy linkkinä, kun tallennat DWG-muodossa, ja {{cmd:XCLIP}} leikkaa sen. |
| Kuvat DXF-tiedostossa; peitteet, jotka piilottavat alla olevan | DXF säilyttää kuvan kehyksenä tiedostonimineen; DWG säilyttää sen kuvana, katso [Kuvat piirustuksessa](topic:pictures). Peite näkyy kehyksenään. |
| Monijohtoviitteiden muokkaaminen kaarevilla johdoilla, johdoilla sisällön molemmilla puolilla tai lohkolla, jota kierretään tai skaalataan epätasaisesti | Ne piirretään niin kuin toinen ohjelma ne piirsi, ja ne liikkuvat yhtenä kokonaisuutena. Suorilla johdoilla yhteen paikkaan ja sisältönä tekstillä tai lohkolla tulevat muokattaviksi ({{cmd:MLEADEREDIT}}). |
| Muiden ohjelmien taulukot: solu, jossa on lohko, tekstin muotoilu solun sisällä, solukohtaiset reunat ja DXF-taulukon värit, taulukko jaettuna sarakkeisiin | Taulukko avautuu muokattavana taulukkona ({{cmd:TABLEDIT}}) ja näytetään niin kuin toinen ohjelma sen piirsi, kunnes muokkaat sitä. Sen jälkeen CadCraft piirtää sen uudelleen soluistaan: pelkkä teksti, kaavat kuten `=G3*H3` ja `=Sum(I3:I9)`, tasaus ja tekstin korkeudet. Lohkosolu jää silloin tyhjäksi. Koskematon DWG-taulukko tallennetaan takaisin mukanaan tulleilla solutiedoilla. |
| Varsinainen taulukkoobjekti tallennetussa DXF-tiedostossa | DWG säilyttää taulukon taulukkona, jonka muut ohjelmat voivat muokata. DXF säilyttää sen lohkona, joka piirtää sen, sekä CadCraftin oman tietueen: CadCraft avaa sen taas taulukkona, muut ohjelmat näkevät lohkon. Peilattu tai epätasaisesti skaalattu taulukko tallennetaan näin myös DWG-muodossa. |
| Kopiointi ja liittäminen muiden ohjelmien kanssa | CadCraftin leikepöytä toimii CadCraft-piirustusten ja saman selaimen välilehtien välillä, ei muiden ohjelmien kanssa. Tallenna DWG- tai DXF-muodossa ja avaa tiedosto siellä. Katso [Kopioi, liitä ja monista](topic:copy-paste). |

## Piirtäminen ja muokkaus

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Viivoituskuviot, joita CadCraftilla ei ole, ja liukuvärit täsmälleen niin kuin muut ohjelmat ne maalaavat | Avatut viivoitukset, joiden kuviota CadCraftilla ei ole, näkyvät sävynä. Liukuväri ({{cmd:GRADIENT}}) maalataan CadCraftin omalla tavallaan kullekin tyypille: lajiltaan kuten muiden ohjelmien, mutta ei pisteen tarkkuudella. DWG 2004 ja uudemmat säilyttävät sen oikeana liukuvärinä viivoituksena; DXF 2000- tai DWG 2000 -tiedostossa vain CadCraft lukee sen takaisin, ja muut ohjelmat näkevät yhtenäisen täytön. Kuviot ladataan `.pat`-tiedostosta, ja viivoitus voidaan linkittää rajaukseensa, jolloin se seuraa sitä: katso [Viivoitus ja täyttöalueet](topic:hatch). |
| Viivatyypit, joissa on muotoja tai tekstiä, ja viivanpaksuudet tallennetussa DXF R12 -tiedostossa | Muotoja ja tekstiä tiedoston viivatyypissä ei oteta mukaan viivakuvioon; tallenna DWG-muodossa, jotta viivanpaksuudet säilyvät. |
| Kuvioidut viivoitukset tallennetussa DXF-tiedostossa | R12:ssa ei ole viivoitusta: ne tallennetaan ääriviivoina. Tallenna DWG-muodossa, jotta kuvio säilyy. |
| Matriisit, jotka toinen ohjelma on tehnyt tai voi muokata; rivit ja tasot polku- ja napamatriiseissa; matriisi, joka seuraa polkunsa käyrää | Assosiatiivinen matriisi ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; muokataan komennolla {{cmd:ARRAYEDIT}}) tallennetaan lohkoviitteenä CadCraftin omilla luvuilla: muut ohjelmat näyttävät, siirtävät, plottaavat ja hajottavat sen, mutta eivät voi muuttaa sen määriä, ja toisessa ohjelmassa tehty matriisi avautuu täällä tavallisena lohkoviitteenä. Polkumatriisi säilyttää kopion polustaan: käyrän muokkaaminen myöhemmin ei siirrä kohteita. |
| Leikatut arkkien näkymäruudut muihin ohjelmiin ja niistä | Näkymäruutu, joka on leikattu komennolla {{cmd:VPCLIP}} tai tehty komennolla {{cmd:MVIEW}} Polygonal tai Object, tallennetaan CadCraftin omalla ääriviivalla: muut ohjelmat avaavat sen sen ympärillä olevana suorakulmiona, ja toisessa ohjelmassa leikattu näkymäruutu aukeaa täällä suorakulmiona. DXF R12 säilyttää vain suorakulmion. |
| {{cmd:STRETCH}} monikulmiolla, jossa on ylittävä rajaus | Käytä yhtä tai useampaa ylittävää ikkunaa. |
| {{cmd:PEDIT}} Edit vertex (yksi kärkipiste kerrallaan komentoriviltä) | Otteet ja Ominaisuudet-paneelin kärkipisteselain (jokainen kärkipiste, sen leveydet ja kaarevuus). Muu PEDIT on toteutettu: katso [Splinet ja murtoviivat](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} ja {{cmd:JOIN}} ellipseille ja splineille | {{cmd:EXPLODE}} spline (tai {{cmd:PEDIT}} sen), jolloin saat murtoviivan, jonka nämä komennot ottavat käsiteltäväkseen. |
| Pyöristys ja viiste murtoviivan kaarisegmentin ja sen viereisen segmentin välillä; pyöristys, joka liittää viivan murtoviivaan | {{cmd:EXPLODE}} murtoviiva ja pyöristä sitten osat. Pyöristyskaari lisätään omana kohteenaan. |
| Typistys ja pidennys: Projekti-valinta (3D) ja murtoviivan kaaren pään pidentäminen | Typistä piirustuksen tasossa; kaaren päälle hajota murtoviiva tai piirrä kaari uudelleen. |
| OLE-objektit: lisääminen, suorittaminen ja muokkaaminen; DWG:ssä tiedoston sijoittamien objektien näyttäminen; metatiedostokuvat | Katso [Kuvat](topic:pictures#objects-from-other-programs-ole). DXF:n objektit näkyvät bittikarttana tai nimettynä kehyksenä; DWG:n objektit säilyvät, mutta niitä ei piirretä paikalleen ({{cmd:OLELIST}} luettelee ne ja sijoittaa kuvasta kopion siihen kohtaan, jonka valitset). |
| Muotoilukoodien kirjoittaminen (lihavointi, pinotut murtoluvut, värit sanakohtaisesti) kappaletekstissä; muut fontit kuin Helvetica-tyylinen fontti; palstat | Tiedostosta tullut muotoilu säilyy, piirtyy ja tallentuu (katso Teksti); uusi kappaleteksti saa yhden korkeuden ja värin. |
| Kappaleteksti muokattuna sen kiertokulmassa | Editori avautuu vaakasuorana; teksti säilyttää kiertokulmansa. |
| Monijohtoviitteet tallennettuina DXF-tiedostossa monijohtoviite-objekteina | DWG säilyttää ne monijohtoviitteinä, joissa on jokainen johto ja lohko sisältönä; DXF säilyttää sen, mitä ne piirtävät (viivat, nuolenpäät sekä tekstin tai lohkon). |
| Taulukoissa ({{cmd:TABLE}}): solussa rivittyvä teksti, taulukot, jotka jakautuvat osiin, taulukkotyylin oma tekstityyli ja rivilajikohtaiset värit valintaikkunassa, tietolinkki taulukkotiedostoon (`.xlsx`) tai tiedosto, joka lukee tiedoston itse | Solun teksti katkeaa vain siitä kohdasta, johon katkaiset sen ({{key:Alt+Enter}}); leventä saraketta. {{cmd:DATALINK}} lukee `.csv`-tiedoston, ja {{cmd:DATALINKUPDATE}} pyytää valitsemaan tiedoston uudelleen. {{cmd:DATAEXTRACTION}} ja {{cmd:COUNTTABLE}} tekevät taulukon, joka ei seuraa piirustusta itsestään: aja ne uudelleen (elävä laskenta: {{cmd:BOMTABLE}}). |
| Attribuuttimääritykset erillään tallennetussa tiedostossa (lohkon ulkopuolella), monirivinen attribuutti | Sijoita attribuuttimääritykset lohkoon ennen tallennusta: yksinään ne tallentuvat tekstinä, joka näyttää tunnisteen. |
| Tasotilat (tallentaminen ja palauttaminen, mitkä tasot ovat päällä) | Käytä {{cmd:LAYISO}} / {{cmd:LAYUNISO}}-komentoa tai kytke tasot päälle ja pois käsin. |
| Ikkuna- ja ylittävä monikulmiovalinta sekä tallennetut valintasuodattimet | Aita (`F`), Ikkuna, Leikkaava, Poista (`R`), {{cmd:QSELECT}} sääntöä varten. |

## Ominaisuuspaneeli

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Fit-valinnat sekä mitoitusten vaakasuora tekstin sijainti ja tekstin paikka viivan alapuolella muilla kuin lineaarisilla ja tasatuilla mitoituksilla | Ne säilyvät kohteessa, näkyvät Ominaisuuksissa ja tallentuvat; CadCraft sijoittaa tekstin omalla säännöllään. |
| Materiaalit, jotka muut ohjelmat näkevät | Tallennettu tiedosto säilyttää materiaalin nimen CadCraftille; muut ohjelmat näyttävät tason materiaalin. |
| Läpinäkyvyys DWG 2000- ja DXF-tiedostoissa | Muut ohjelmat näyttävät nuo kohteet kiinteinä; CadCraft säilyttää läpinäkyvyyden. Tallenna DWG 2004 -muodossa tai uudempana, jotta kaikki näkevät sen. |
| Toisessa ohjelmassa tehty viivoituslinkki | CadCraft tallentaa oman linkkinsä DWG- ja DXF 2000 -tiedostoihin; muissa ohjelmissa tehtyjä linkkejä ei lueta. Käytä `HATCHEDIT`-komentoa ja Linkki-valintaa: katso [Viivoitus ja täyttöalueet](topic:hatch). |
| Koordinaatit Ominaisuuksissa UCS:ssä | Ominaisuudet näyttää maailmankoordinaatit; tilarivi ja {{cmd:ID}} näyttävät UCS-koordinaatit. Katso [Kierrä näkymää ja käytä omia koordinaatteja](topic:ucs-and-turned-view). |
| Erillinen sijainti merkintäobjektille kussakin sen mittakaavassa; muiden ohjelmien mittakaavakohtaisten tietueiden lukeminen | Merkintäteksti tai -mitoitus pitää luetteloa mittakaavoista ({{cmd:OBJECTSCALE}}), ja jokainen näkymäruutu näyttää sen kokoisena omalle mittakaavalleen samassa paikassa. Luettelo tallennetaan CadCraftin omina tietoina: toinen ohjelma näkee kohteen vain siinä yhdessä mittakaavassa, johon se on mitoitettu, eikä toisessa ohjelmassa tehtyä luetteloa lueta. Katso [Yksiköt, paperit ja mittakaavat](topic:units-papers-scales#annotate-by-scale). |
| Dynaamisen lohkon etäisyyksien, kulmien tai peilausten muuttaminen; dynaamiset lohkot, jotka pysyvät dynaamisina, kun tallennat toiseen DWG-versioon tai DXF-muodossa | Vaihda sen näkyvyystila kohdassa {{ui:Properties}} › {{ui:Custom}}; sen muut arvot näkyvät siellä vain luettavina. Se pysyy dynaamisena, kun tallennat sen DWG-muodossa piirustuksen alkuperäisessä versiossa. Katso [Dynaamiset lohkot](topic:dynamic-blocks). |
| Splinen sovitustoleranssi, splinen aste 6 ja sitä korkeampi, 3D-splinet | Sovitus- ja ohjauspisteet, aste 1–5 ja painot on toteutettu: katso [Splinet ja murtoviivat](topic:splines). Splinen korkeutta (Z) ei säilytetä. |
## Tarkkuustyökalut

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Seuranta pisteistä komentojen yli ja seurannan asetusikkuna (suhteelliset napakulmat, lisäkulmat) | {{cmd:POLARANG}} asettaa askeleen; hanki pisteet uudelleen seuraavassa komennossa. |
| Tarttuminen ruudukkoon | Kirjoita koordinaatit; ruudukko on pelkkä visuaalinen apu. |
| Kaari- ja pituusvaihtoehdot alueen kulmia valittaessa sekä MEASUREGEOM-tilavuus | Piirrä ääriviiva komennolla {{cmd:PLINE}} (kaaret mukaan lukien) ja sitten {{cmd:AREA}} `O`. |
| Dynaaminen syöttö otteille ja sen vaihtoehtoluettelo (alanuoli) | Komentorivi näyttää vaihtoehdot. |
| Kulmat asteina, minuutteina ja sekunteina, gradeina tai maanmittarin suuntakulmina | Kirjoita desimaaliasteet: `30.5` tarkoittaa 30°30'. |
| Näkymienhallintaikkuna; arkin nimetyt näkymät, jotka palautuvat samalle arkille | {{cmd:NAMEDVIEW}} luettelee ja palauttaa näkymät. Tallennettu tiedosto säilyttää ne, mutta arkin näkymät palautuvat ensimmäiselle arkille. |

## Arkit, mitoitus ja plottaus

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Kentät näkymäruudun mittakaavalle, nimetylle kohteelle kuten tasolle tai lohkolle, hyperlinkille ja arkkisarjan kentille arkin numeron ja nimen lisäksi; kentät, jotka on kirjoitettu kenttäobjekteina ja joita muut ohjelmat päivittävät | {{cmd:FIELD}} sisältää päivämäärän, tiedostonimen, arkin numeron, nimen ja määrän, piirustuksen ominaisuudet ({{cmd:DWGPROPS}}), kohteen pinta-alan, pituuden ja muut ominaisuudet sekä kaavat tekstissä, attribuuteissa ja taulukon soluissa. Toinen ohjelma näyttää CadCraft-kentän viimeksi lukemanaan tekstinä; CadCraft lukee toisen ohjelman päivämäärä-, tiedostonimi-, ominaisuus-, arkki- ja lauseke-kentät ja jättää muut tyypit tekstiksi. Näkymäruudun mittakaava kirjoitetaan käsin. |
| Mitoitustyylin nykyisen valinnan tallentaminen; mitoitustekstin vetäminen vapaaseen paikkaan | Piirustus avautuu Standard-tyylillä nykyisenä. Teksti istuu mitoitusviivalla (DIMTEDIT Left / Right / Center). Katso [Mitoitusten koot](topic:dimension-settings). |
| Muokattavat kaksirivisiä kulmamitoituksia avatuista tiedostoista, joita CadCraft ei osaa ratkaista | Ne näytetään tiedostossa piirrettyinä. Ordinaatti-, kaarenpituus- ja katkaistut säteemitoitukset avautuvat muokattavina mitoituksina. |
| CTB-lukijan tarkistus toisen ohjelman tiedostoa vastaan (se on rakennettu julkaistun kuvauksen mukaan), nimetyt plottaustyylit (STB), sekoitus, kynänumerot, harmaasävy CTB:stä ja mukautuva viivatyypin säätö plottaustyylissä | Tee taulukko ikkunassa {{ui:Plot style tables}} (väri, harmaa, muste, viivanpaksuus, viivatyyppi, viivan pää ja liitos sekä täyttötyyli värikohtaisesti): katso [Plottaustyylitaulukot](topic:plot-pdf#plot-style-tables). |
| Sivuasetukset | Valitse paperi, mittakaava ja plottaustyyli valintaikkunassa {{ui:Plottaa PDF:ksi}}; arkki säilyttää plottaustyylinsä. |
| Hindi ja muut kirjoitukset, jotka tarvitsevat monimutkaista muotoilua PDF-tiedostoissa, sekä harvinaiset ideogrammit (eurooppalaiset kirjoitukset, kyrillinen, kreikka, heprea, arabia, persia, urdu, thai, kiina, japani ja korea) | Ne tulostuvat ”?”-merkkeinä. |
| Arabiankielinen teksti sekä kiina-, japani- tai korealainen teksti samassa plotatussa PDF:ssä | Plotti kantaa yhden fontin: toinen kirjoituksista tulostuu ”?”-merkkeinä. |
| Eksplisiittiset suuntamerkit tekstissä (upotukset, ohitukset, eristykset) | Ne jätetään huomiotta: jokainen rivi järjestetään pelkkien kirjainten mukaan. |
| Kuvat liitetyn PDF-sivun sisällä plotissa | Sivun viivat, täytöt ja teksti tulostuvat. Pelkkä kuvasivu liitetään komennolla {{cmd:SCANATTACH}}, ja kuvat tulostuvat. Katso [PDF-taustat](topic:pdf-underlay#plot-and-save). |
| Työn lähettäminen laserille CadCraft Studiosta (Studiossa ei ole Web Serialia) | Tallenna G-koodi ja lähetä se laserin omalla ohjelmalla tai lähetä se Chromesta tai Edgestä. Katso [Lähetä piirustus laserille](topic:laser-cutting#send-from-the-browser). |

## Rajoitteet ja parametrit

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Rajoitteet arkeilla, lohkoissa, ellipseissä, splineissä tai tekstissä | Rajoita {{ui:Malli}}-välilehdellä viivoilla, murtoviivoilla, ympyröillä, kaarilla ja pisteillä. |
| Sileä (G2) rajoitus sekä murtoviivan kaaren kaarevuuden suora rajoittaminen | Tangentti ja yhtä suuri; kaarisegmentti seuraa kahta päätään. |
| Viitteelliset (ohjatut) mittarajoitteet ja `3Point` komennossa {{cmd:DCANGULAR}} | Tavallinen mitoitus (DIMLINEAR …) näyttää arvon ohjaamatta sitä. |
| Kiinteän kokoiset mittarajoitteet paperilla ja niiden plottaaminen | Ne näkyvät vain näytöllä; lisää tavallisia mitoituksia plottia varten. |
| Rajoitteet, jotka säilyvät EXPLODE-, BREAK-, JOIN- ja muiden uusia kohteita tekevien komentojen läpi sekä typistetyissä murtoviivoissa | Rajoita ne uudelleen (AUTOCONSTRAIN auttaa). {{cmd:MIRROR}} ja {{cmd:TRIM}} viivoille, kaarille ja ympyröille säilyttävät ne. |
| Suunnittelutaulukot (konfiguraatiot) CadCraftissa | Muuta parametreja paneelissa. |
| Testattu kierros SolidWorksin kanssa | Tarkista luonnos, jonka makro rakentaa, ennen kuin luotat siihen. |

## 3D

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Pyöristykset, viisteet, kuoret ja loftit; pyyhkäisyt polkua pitkin, joka nousee (3D-polut) | Pursota ääriviivat kaarilla, työnnä ja vedä pintoja, kierrä ja pyyhkäise tasaisia polkuja pitkin. |
| Pursotus muuhun suuntaan kuin ylös | Piirrä muoto maahan ja pursota se ylös tai alas (halutessasi kaltevuudella tai polkua pitkin); kierrä kiintokappaletta jälkeenpäin. |
| 2D-kohteiden korkeus ja paksuus | Piirustus on maassa (korkeus 0) 3D-välilehdellä. |
| Muilla ohjelmilla tehtyjen kiintokappaleiden, alueiden ja kappaleiden muokkaaminen; niiden näyttäminen lohkojen sisällä; niiden pinnat pyyhkäistyillä, loftatuilla tai muilla vapaamuotoisilla pinnoilla; polyface- ja monikulmioverkot | Mallitilan kiintokappaleet näkyvät 3D-välilehdellä sellaisina kuin ne ovat, ja ne tallentuvat DWG-muodossa muuttumattomina; piirtämättömät kohteet luetellaan, kun 3D-välilehti avautuu. Pyydä verkkoja 3D-pintoina mallitilassa. Katso [Muiden ohjelmien kiintokappaleet](topic:3d-solids#solids-from-other-programs). |
| Kiintokappaleiden kopiointi ja liittäminen | Käytä 3D-välilehdellä komentoa {{cmd:COPY}}. Leikepöytä sisältää vain 2D-kohteita. |
| Leikkaukset, näkymät, jotka seuraavat myöhempiä muutoksia kiintokappaleisiin, ja varjostetut kiintokappaleet plotatuilla arkeilla | {{cmd:VIEWBASE}} sijoittaa tasaisia näkymiä (kuvana hetkellä otettuna); aja se uudelleen kiintokappaleiden muuttamisen jälkeen. |
| Materiaalit, tekstuurit ja valaistusasetukset | Visuaalityylit: varjostettu, reunat, piilotettu viiva, rautalanka ja röntgen. |
| Karttatasojen plottaaminen, arkkien näkymäruuduissa ja 3D-välilehdellä; kuvat tiedostoista, jotka on tallennettu piirustuksen mukana; piirustuksen sijainti muille ohjelmille DWG 2000–2007- ja DXF R12 -muodossa | Karttatasot näkyvät mallitilan alla näytöllä; järjestelmä ja tasoluettelo tallennetaan piirustuksen mukana: katso [Karttatasot piirustuksen alla](topic:map-layers). |
| E57-skannaukset yli 6 miljoonaa pistettä tai 512 Mt, skannerinvalmistajien omat tiedostot (RCP, RCS, FLS, LGS, TZF, ZFS), pistepilvi tallennettuna piirustuksen mukana tai plotattuna, pilveen tarttuminen 3D-välilehdellä, pystysuorat (leikkaus) viipaleet Malli-välilehdellä | Vie suuret tai valmistajien omat skannaukset LAS- tai LAZ-muodossa ([Pistepilvimuodot](topic:point-cloud-formats)); liitä pilvi joka kerta, kun avaat piirustuksen; jäljitä viivoja tasoviipaleesta Malli-välilehdellä: katso [Jäljitä toteutuneet viivat pistepilven päälle](topic:point-clouds). |
| Skannausten rekisteröinti: kohteiden (pallot, shakkilaudat) löytäminen skannauksesta itse, kaikkien skannausten ratkaiseminen yhdessä (nippusäätö), mittakaava, rekisteröinti mallia vasten | Valitse vastaavat pisteet tai kirjoita kohteiden koordinaatit, ja tarkenna sitten yksi skannaus kerrallaan ICP:llä: katso [Rekisteröi useita skannauksia yhdeksi](topic:register-scans). |

## Rutiinit ja mukauttaminen

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Käännetty tai suojattu LISP (.fas, .vlx), natiiviohjelmat (.arx, .crx, .dbx) ja VBA (.dvb) | Lataa rutiinin .lsp-lähdekoodi komennolla {{cmd:APPLOAD}}. |
| LISPin `grread`, reaktorit (`vlr-…`), käyrien funktiot (`vlax-curve-…`), sanakirjat ja laajennettu data, Express Tools -työkalujen `acet-…` | Muu kieli toimii: katso [Aja LISP-rutiineja](topic:run-lisp). Komentorivi nimeää puuttuvan funktion, kun rutiini sellaiseen törmää. |
| Kuvat ja diat rutiinin ikkunassa | Ne näkyvät tyhjinä kehyksinä; muu ikkuna toimii. |
| CraftScript (.craft), Lua ja Python CadCraftissa | Aja ne PartCraftin Skripti-työtilassa. |
| Taso-, väri- ja viivatyyppiluettelot nauhavalikon tyyleissä | Käytä {{ui:Tasot}}-paneelia ja {{ui:Ominaisuudet}}-paneelia. |
| Käynnistyspaketti ja tietokoneellesi tallennetut tai synkronoidut aliakset | Ne tallennetaan tähän selaimeen; työpöytäsovellus ja pilvipalvelu tallentavat ne sinulle. Studiossa `acad.lsp` ja `acaddoc.lsp` luetaan tukikansiosta, jonka valitset (Lataa sovellukset). |

## Ohje

Ohje kuvaa tätä versiota. Kun jotain lisätään, se siirtyy pois tältä sivulta ja ohjeisiin.
