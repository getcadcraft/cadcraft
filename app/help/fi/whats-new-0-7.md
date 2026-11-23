---
title: Mitä uutta versiossa 0.7 (aiemmin)
summary: PDF-pohjakuvat ja PDF-tuonti, skannatut piirustukset automaattisella jäljityksellä, todelliset splinet komennoilla SPLINE, SPLINEDIT ja PEDIT, mitoitustyylien hallinta, teksti, joka säilyttää muotoilunsa, WBLOCK ja omat mittakaavat, muiden ohjelmien 3D-kiintokappaleet, skannausten rekisteröinti, Laser-paneeli, USD-vienti, Historia ja tulostus Studio-sovelluksessa, opastettu ensimmäinen piirustus, työkalurivi mihin tahansa reunaan tai vähempiin riveihin sekä lisää tekoälyavustajille.
keywords: mitä uutta 0.7, aiempi julkaisu, julkaisutiedot, muutosloki, muutokset, 0.7, versio, uudet ominaisuudet, pdf, pdfattach, pdfimport, pohjakuva, skannaus, scanattach, scantrace, jäljitys, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, muotoilu, wblock, scalelistedit, mittakaavaluettelo, acis, 3D-kiintokappaleet, registerscans, skannausten rekisteröinti, icp, e57, las, laser, grbl, g-code, usd, usdout, historia, versiot, vertailu, tulostus, tulostin, png, svg, plottauksen tyyli, viivatyyppi, kierros, pikaohje, komentokartta, työkalurivin sijainti, työkalurivin rivit, toolbardock, regen, regenall, kosketuslevy, pyyhkäisy, merkistökoodisivu, kyrillinen, korea, kiina, japani, sähkö, rcd, p&id, pid, acad.lsp, acaddoc.lsp, tukikansio, avustajat, mcp, yksiköt, portugali
from: d9a8ea79
---

Tämä on se, mitä muuttui versiossa 0.7 verrattuna versioon 0.6. Suuri osa siitä pyydettiin Discordissa. Luettelo on ryhmitelty alueittain, tärkeimmät ensin.

## Uutta

### PDF-tiedostot ja skannatut piirustukset

- **Aseta PDF-sivu piirustuksen alle.** {{cmd:PDFATTACH}} (`PDFATT`) sijoittaa sivun todelliseen kokoonsa tai kirjoittamaasi mittakaavaan. Kohdista siihen tartunnalla sen viivoihin, himmennä sitä, tee siitä yksivärinen ({{cmd:PDFADJUST}}), rajaa se ({{cmd:PDFCLIP}}) ja vaihda PDF-tiedoston omia tasoja ({{cmd:PDFLAYERS}}). Se plotataan viivoina, täyttöinä ja tekstinä, ja DWG- tai DXF 2000 -tiedosto säilyttää sen linkkinä PDF-tiedostoon. Kun avaat PDF-tiedoston kohdasta {{ui:Avaa}}, ohjelma kysyy, liitetäänkö vai tuodaanko se. Katso [PDF-pohjakuvat ja PDF-tuonti](topic:pdf-underlay).
- **Muuta PDF-sivu piirustuskohteiksi.** {{cmd:PDFIMPORT}} (`PDFIM`) luo viivoja, murtoviivoja, ympyröitä, kaaria, kiinteitä viivoituksia ja tekstiä tasoille, jotka nimetään PDF-tiedoston mukaan. Mittakaava on todellinen koko, kirjoitettu mittakaava tai mittakaava kahdesta pisteestä ja todellisesta etäisyydestä. Kaikki tapahtuu yhdessä kumoamisvaiheessa. Katso [Tuo sivu](topic:pdf-underlay#import-a-page).
- **Skannatut piirustukset.** {{cmd:SCANATTACH}} tuo PNG-, JPEG- tai TIFF-tiedoston (yksi sivu tai kaikki) tai PDF-sivun, joka on kuva. Sen jälkeen voit skaalata sen kahdesta pisteestä ({{cmd:SCANSCALE}}), kohdistaa sen ({{cmd:SCANALIGN}}), suoristaa sen omista pitkistä viivoistaan ({{cmd:SCANDESKEW}}), tehdä siitä mustavalkoisen ja poistaa roskapisteet ({{cmd:SCANCLEAN}}), rajata sen ja poistaa osia siitä. Jokainen vaihe on yksi kumoamisvaihe, ja alkuperäinen tiedosto säilyy. Katso [Skannatut piirustukset ja jäljitys](topic:scanned-drawings).
- **Jäljitä skannaus viivoiksi ja kaariksi.** {{cmd:SCANTRACE}} piirtää skannauksen viivat viivoina ja kaarina uudelle tasolle SCAN-TRACE annettuun toleranssiin ja jättää tekstin ja viivoituksen ennalleen. Raportti kertoo, mitä se teki ja mitä jätti tekemättä. Se ei väitä tuloksen olevan oikein, joten tarkista se piirustusta vasten. {{cmd:RASTERSNAP}} antaa kohteen tartunnalle mahdollisuuden löytää skannauksen päät, kulmat ja leikkauspisteet. Mitään ei lähetetä minnekään, eikä koulutettua mallia käytetä. Katso [Jäljitys](topic:scanned-drawings#the-trace).

### Piirtäminen ja muokkaaminen

- **Todelliset splinet.** {{cmd:SPLINE}} (`SPL`) piirtää käyrän pisteiden kautta tai hallintapisteistä (aste 1–5), päätetangenteilla. {{cmd:SPLINEDIT}} (`SPE`) siirtää, lisää ja poistaa sovitus- tai hallintapisteitä, asettaa painot, avaa, sulkee ja kääntää splinen tai muuntaa sen murtoviivaksi. Splinet DWG- ja DXF-tiedostoista avautuvat splineinä, ja DWG- ja DXF 2000 -tiedostot tallentavat ne splineinä. Katso [Splinet ja murtoviivat](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) sulkee ja avaa murtoviivoja, liittää niihin viivoja ja kaaria, asettaa yhden leveyden, sovittaa käyrän kärkipisteiden kautta tai splinen niitä pitkin, palauttaa sen Decurve-vaihtoehdolla, kääntää ja muokkaa useita kerralla. Katso [Muokkaa murtoviivaa](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) kirjoittaa lohkon, joitakin kohteita tai koko piirustuksen uuteen DWG- tai DXF-tiedostoon, joka sisältää vain niiden käyttämät tasot, tyylit ja lohkot. Katso [Kirjoita lohko tai kohteet omaan tiedostoonsa](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN ja REGENALL.** {{cmd:REGEN}} (`RE`) piirtää uudelleen välilehden, jolla olet, piirustuksesta. {{cmd:REGENALL}} (`REA`) piirtää uudelleen kaikki välilehdet, paneelit ja avoimet piirustukset. Katso [REGEN ja REGENALL](topic:commands#regen-and-regenall).

### Teksti ja mitoitus

- **Teksti säilyttää muotoilunsa.** Muiden ohjelmien kappaleteksti säilyttää sanakohtaiset värit, lihavoinnin ja kursiivin, alleviivauksen, pinotut murtoluvut ja korkeudet. Ne piirretään näytölle ja PDF-tiedostoihin, säilyvät, kun muokkaat sanoja, ja tallentuvat takaisin. Katso [Muotoilu muiden ohjelmien kappaleteksteissä](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Mitoitustyylien hallinta.** {{cmd:DIMSTYLE}} (`D`) luo, muuttaa, vertaa ja ottaa käyttöön nimettyjä mitoitustyylejä. Tyylin muuttaminen muuttaa jokaista sitä käyttävää mittaa. {{cmd:DIMEDIT}} (`DED`) palauttaa tekstin paikalleen, kirjoittaa uuden tekstin, kääntää sen tai kallistaa apuviivat. {{cmd:DIMTEDIT}} siirtää tekstin vasemmalle, oikealle tai keskelle. Katso [Nimetyt mitoitustyylit](topic:dimension-settings#named-dimension-styles).
- **Omat mittakaavat.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) lisää mittakaavoja, kuten 1:75, näkymäruutujen ja plotin mittakaavaluetteloihin. Ne tallentuvat piirustukseen (DWG ja DXF 2000), ja toisesta ohjelmasta tuotu piirustus tuo mukanaan oman luettelonsa. Katso [Mittakaavat](topic:units-papers-scales#scales).
- **Tekstit muissa aakkostoissa.** DXF-tiedostot, jotka on tallennettu kyrillisillä, korealaisilla, kiinankielisillä, japanilaisilla tai vietnamilaisilla merkistökoodisivuilla, avautuvat nyt tekstinsä kanssa. Kiina-, japani- ja korea-kieliset tekstit tulostuvat PDF-tiedostoihin (plotti hakee suuremman fontin ensimmäisellä kerralla, kun sitä tarvitaan). Katso [Fontti](topic:text#font).

### Plottaus ja tulostus

- **Lisää plottauksen tyylitaulukoissa.** Jokaiselle värille taulukko voi nyt asettaa myös viivatyypin, viivan päät ja liitokset sekä täyttötyylin, joka tulostaa kiinteät täytöt viivoituksena. Taulukolla on oma viivanpaksuusluettelo ja viivatyypin mittakaava. Katso [Plottauksen tyylitaulukot](topic:plot-pdf#plot-style-tables).
- **Tulostus sekä PNG- ja SVG-tiedostot.** Plot-valintaikkunassa on {{ui:Tulosta…}}, {{ui:Lataa PNG}} (300 dpi) ja {{ui:Lataa SVG}}. Studio-sovelluksessa se luettelee tietokoneen tulostimet, niiden paperin ja kopioiden määrän. Katso [Tulostus](topic:plot-pdf#print) ja [Kuva- ja SVG-tiedostot](topic:plot-pdf#picture-and-svg-files).

### 3D ja pistepilvet

- **Muiden ohjelmien 3D-kiintokappaleet.** Piirustuksen mallitilan kiintokappaleet, alueet ja kappaleet näkyvät 3D-välilehdellä vain luettavina. Tallennus DWG-muotoon kirjoittaa ne takaisin muuttamattomina. Pinnat, joita CadCraft ei vielä piirrä, luetellaan eikä arvata. Katso [Muiden ohjelmien kiintokappaleet](topic:3d-solids#solids-from-other-programs).
- **Rekisteröi useita skannauksia.** {{cmd:REGISTERSCANS}} (`REGSCAN`) sijoittaa eri paikoista otetut skannaukset yhteiseen koordinaatistoon pistepareilla tai kirjoitetuilla kohdekoordinaateilla. Se tarkentaa ne ICP:llä, tallentaa rekisteröinnin pieneksi projektitiedostoksi ja kirjoittaa rekisteröidyn pistepilven yhdeksi LAS- tai E57-tiedostoksi. Katso [Rekisteröi useita skannauksia yhdeksi](topic:register-scans).
- **USD-vienti.** {{cmd:USDOUT}} tai {{cmd:EXPORT3D}} › {{ui:USD}} kirjoittaa 3D-välilehden kiintokappaleet `.usda`-, `.usdc`- tai `.usdz`-tiedostoiksi. Katso [Vie 3D-malli USD-muodossa](topic:usd).
- **Laskutoimitukset 3D-välilehdellä.** Missä 3D-välilehden työkalut pyytävät etäisyyttä, voit kirjoittaa laskutoimituksen, kuten komentoriviltä. Katso [Laskutoimitukset kirjoitetussa arvossa](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Valmistaminen

- **Lähetä piirustus laserille.** {{cmd:LASER}} tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Laser…}} avaa paneelin piirustuksen päälle. Jokainen taso leikkaa, merkitsee, kaivertaa viivoja, täyttää muotoja, kaivertaa kuvan tai jää lähettämättä, teholla, nopeudella ja kierroksilla. Esikatselu seuraa muokkauksiasi, {{ui:Tallenna G-koodi…}} kirjoittaa GRBL-laser-tilan G-koodin, ja Chromessa tai Edgessä paneeli voi rajata työn kehyksen ja lähettää sen USB:n kautta. Asetukset tallentuvat piirustukseen (DWG ja DXF). Katso [Lähetä piirustus laserille](topic:laser-cutting).
- **Sähkötekniikan lisäosan rakennusasennussymbolit.** Data-, puhelin- ja TV-pistorasiat, avain- ja aikakytkimet, termostaatti, poistumismerkki, ilmaisimet, hälytyspainike ja kaiuttimet, tuuletin, vedenlämmitin, liesi, sähköauton latauspiste, energiamittari ja alajakokeskus sekä RCD- ja RCBO-symbolit. Virtapiiri voi sisältää RCD-suojakytkimen, keskuksen luettelossa on RCD-sarake, ja tarkistukset nimeävät pistorasiapiirit, joissa ei ole 30 mA:n tai pienempää RCD-suojakytkintä. Se on suunnittelumuistutus, ei koodin tarkistus.
- **P&ID-lisäosa.** P&ID piirtää prosessikaavioita: symboleja liitäntäpisteineen, prosessi- ja signaaliviivoja, tunnisteita, linjanumeroita sekä linja-, laite-, mittari- ja venttiililuetteloita (CSV tai työkirja) ja tarkistuksia. Se tulee mukana CadCraft-asennuksessa ja on pois päältä, kunnes kytket sen päälle kohdasta {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Lisäosat}}. Se on piirtoapu, ei suunnitteluhyväksyntä, ja sen sanat ovat toistaiseksi vain englanniksi.

### Aloitus ja näyttö

- **Opastettu ensimmäinen piirustus.** {{cmd:TOUR}} (tai {{ui:Käy kierros läpi}} aloituskortissa) opastaa kuuden askeleen läpi oikeassa piirustuksessa: viiva, ympyrä, siirto, typistys, poisto ja mitoitus. Se käynnistyy itsestään ensimmäisellä kerralla, kun CadCraft avautuu tyhjänä. Katso [Haluatko opastusta?](topic:getting-started#prefer-to-be-guided)
- **Pikaohje ja komentokartta.** [Pikaohje](topic:cheat-sheet) sisältää 40 yleisintä komentoa yhdellä sivulla, myös PDF-tiedostona tulostettavaksi. [Komentokartta](topic:command-map) luettelee komennot lyhyine nimineen aakkosjärjestyksessä.
- **Työkalurivi mihin tahansa reunaan.** {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Työkalurivin sijainti}}: ylhäällä (kuten ennen), alhaalla, vasemmalla tai oikealla, tai kirjoita {{cmd:TOOLBARDOCK}}. Katso [Työkalurivin sijainti](topic:settings#toolbar-position).
- **Työkalurivin rivit.** {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Työkalurivin rivit}}: sovita rivitys, 2 riviä tai 1 rivi CadCraftin työkalurivin sekä Drafting classic- ja Valintanauha-tyylien mukaan. {{key:Shift+Ctrl+F1}} kiertää ne läpi, {{key:Ctrl+F1}} kiertää painikkeiden näyttämät asiat, ja {{cmd:TOOLBARROWS}} ja {{cmd:TOOLBAR}} asettavat ne. Aloitusvihjeessä on sulkupainike. Kiitos käyttäjälle GJoe2, joka lähetti tämän pull requestina. Katso [Työkalurivin rivit](topic:settings#toolbar-rows).

### Studio-sovelluksessa

- **Historia.** {{cmd:HISTORY}} (`HIST`) tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Historia…}}: kopiot, jotka Studio tallentaa, kun avaat ja tallennat piirustuksen, ja piirustuksen pilviversiot, jos avasit sen pilvestä. Avaa tai palauta yksi, tai vertaa kahta. Lisätyt, poistetut ja muuttuneet näytetään väreillä. Katso [Historia](topic:history).
- **acad.lsp ja acaddoc.lsp.** Valitse tukikansio komennossa {{cmd:APPLOAD}}. Nuo kaksi tiedostoa latautuvat, kun CadCraft käynnistyy (acaddoc.lsp uudelleen jokaisella uudella piirustusvälilehdellä), ja `S::STARTUP` suoritetaan niiden jälkeen. Katso [Sovellusten lataaminen](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Plot-valintaikkuna omassa ikkunassaan.** Painike sen otsikkopalkissa siirtää sen ikkunaan, jonka voit asettaa toiselle näytölle. Katso [Siirrä valintaikkunaa](common:arrange-panels#move-a-dialog).

### Tekoälyavustajille

- **Tiedostot nimellä valitsemissasi kansioissa.** Studio-sovelluksessa avustaja voi avata, tallentaa ja plotata tiedostoja nimellä ja antaa komennolle tiedoston, jota se pyytää (INSERT tiedostosta, vienti komennosta COUNT, SAVEAS, PLOT). Tämä onnistuu vain kansioissa, jotka lisäät kohdassa {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Avustajat}} › {{ui:Kansiot, joita se saa käyttää}}. Katso [Anna sen käyttää tiedostoja valitsemissasi kansioissa](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Vähemmän kutsuja.** Avustaja voi kirjoittaa koko komentorivin kerralla, pitää komennon auki kutsujen välillä, laskea kohteita tyypin ja tason mukaan luettelematta niitä, ja sijoittaa lohkon attribuuttiarvoineen yhdessä vaiheessa.
- **Ilman ikkunaa.** `cadcraft`-komentorivi kirjoittaa SVG-plotteja sekä muuntaa, plottaa, tarkistaa ja kuvaa monta tiedostoa kerralla. MCP-paketti ei ole vielä julkaistu. Katso [Työskentele tiedostojen kanssa avaamatta CadCraftia](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Muutettu

- **Kosketuslevy liikuttaa.** Liikuta kahta sormea kosketuslevyllä, ja 2D-näkymä seuraa. Nipistys ja hiiren rulla zoomaavat. Katso [Hiiri, kosketuslevy ja kosketus](topic:mouse-trackpad-touch).
- **OLE-objektit säilyvät.** DXF-tiedoston upotetut objektit näkyvät kuvanaan tai nimettynä kehyksenä, ja ne tallentuvat takaisin DXF 2000 -muodossa. DWG-tiedoston objektit säilyvät ja kirjoitetaan takaisin, kun tallennat DWG-muotoon, mutta niitä ei vielä näytetä. Ennen ne menetettiin tallennuksessa. Katso [Muiden ohjelmien objektit (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Uuden piirustuksen yksiköt** seuraavat yksikköä, jonka valitset kohdasta {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Yksiköt}}.

## Korjattu

- Asettelut, jotka avautuivat tyhjinä tai menettivät näkymäruudun ja näyttivät sen tilalla koko mallin, avautuvat nyt todellisine näkymäruutuineen. Asettelu ilman linkkiä sisältöönsä säilytetään, ja avauksen raportti kertoo siitä.
- DXF-tiedostot vanhemmilla merkistökoodisivuilla näyttivät rikkinäistä kyrillistä ja korealaista tekstiä. Ne luetaan nyt oikein.
- Muiden ohjelmien kappaleteksti menetti muotoilunsa avattaessa ja tallennettiin takaisin tavallisena.

## Kaikissa sovelluksissa

- **Yksiköt.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Yksiköt}} sisältää yhden luettelon kullekin pituudelle, pinta-alalle, tilavuudelle, kulmalle ja kaltevuudelle, tarkoilla kokoilla, jotka yksiköiden määritelmät antavat (USA:n survey-jalka on oma yksikkönsä). Poista käytöstä yksiköt, joita et koskaan käytä, niin ne poistuvat yksikköluetteloista. Tähdittämäsi yksikkö on uuden työn lähtöyksikkö. Tiedosto säilyttää aina oman yksikkönsä. CadCraft-ohjelmassa tähti asettaa uuden piirustuksen yksiköt, kun se on yksikkö, jonka piirustus voi kantaa. CadCraftin oma {{ui:Yksiköt}}-ruutu ei vielä seuraa kytkimiä. Kun piirustuksella on yksiköt, kirjoitettu pituus voi kantaa minkä tahansa yksikön merkin. Katso [Yksiköt, kirjoitetut arvot ja yksikköluettelot](common:unit-lists).
- **Tiivis asettelu ja paneelit, jotka siistiytyvät pois.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Asettelun tiheys}} › {{ui:Tiivis}} mahtuu näytölle enemmän. Kosketusnäytöt ja puhelimet säilyttävät suuret painikkeensa. Jokaisessa sivupaneelissa on ohut otsikkopalkki: vedä se kiinnittääksesi tai irrottaaksesi paneelin, pudota toisen paneelin palkkiin jakaaksesi kehyksen välilehtinä, kiinnitä se liukumaan reunaan, tai piilota ja tuo takaisin reunasta. Katso [Järjestä paneelit](common:arrange-panels#make-the-layout-denser).
- **Valintaikkunat liikkuvat.** Vedä valintaikkunaa otsikkopalkista piirustuksen tieltä, ja se palaa siihen, mistä jätit sen. Kaksoisnapsauta otsikkopalkkia keskittääksesi sen uudelleen. Katso [Siirrä valintaikkunaa](common:arrange-panels#move-a-dialog).
- **Tekoälyavustajien reseptit.** Kymmenen esimerkkipyyntöä omalle avustajallesi (siivoa piirustus, plottaa sarja, tarkista piirustuksia, kysy mallilta, laske määrälaskennan summa, kokeile osan varianttia ja muuta), joista kullakin on käytettävät työkalut ja tarvittavat oikeudet. Jokainen toistetaan testeissämme. Sovellukset eivät sisällä tekoälyä. Katso [Reseptit tekoälyavustajille](common:assistants-recipes).
- **Kielet.** **Português (Portugal)** on uusi kohdassa {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Kieli}}. Se, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** sisältävät nyt kaikki sovellusten sanat luonnoksina, joita äidinkielinen puhuja ei ole vielä lukenut. Ohjeaiheet ovat englanniksi.
- **CadCraft Studio** kertoo, miksi päivityksen tarkistus epäonnistui (tiedostoa järjestelmällesi ei ole vielä, ei verkkoa, virheellinen allekirjoitus), eikä vain ilmoita "Valmis". Se lakkaa tuomasta takaisin Mitä uutta -korttia, jonka suljit, ennen kuin on uudempi julkaisu.

## Ei vielä tässä versiossa

- **Versio 0.7 ei ole koodin allekirjoittama.** Allekirjoitus ja Microsoft Store -paketti siirtyivät versioon 0.8, koska sertifikaatin validointi ei ole vielä valmis. Tarkista SHA-256 jokaisen tiedoston vieressä osoitteessa getcadcraft.com/download. Windowsissa, jos SmartScreen pysäyttää asennusohjelman, valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}. Macissa ensimmäisellä kerralla napsauta CadCraft Studiota hiiren oikealla ja valitse {{ui:Avaa}}. CadCraft Studio ei ole vielä sovelluskaupassa, eikä iPad- tai iPhone-versiota ole vielä.
- Kulma- ja kaltevuusluettelot kohdassa {{ui:Yksiköt}} tallentuvat, mutta yksikään ruutu ei vielä lue niitä.
- DWG-tiedoston OLE-objektit säilyvät, mutta niitä ei näytetä, eivätkä metatiedostokuvat OLE-objekteissa piirry.
- Muiden ohjelmien plottaustyylitaulukoiden (CTB-tiedostojen) lukeminen odottaa näytetiedostoa.
- Vanhempi aasialainen teksti kirjoitettuna `\M+`-koodeina luetaan, mutta sitä ei ole vielä tarkistettu muiden ohjelmien tiedostoa vasten.
- PDF-pohjakuvat: kuvat sivun sisällä näkyvät näytöllä, mutta niitä ei plotata. Avustajan plotti jättää pohjakuvat pois, eikä muut ohjelmat ole tarkistaneet, miten ne lukevat tallennetun rajauksen ja mittakaavan.
- Historia: CadCraft ei vielä lähetä tallennuksiaan pilveen, joten pilviversiot ovat muilta laitteilta ja verkosta tallennettuja. Historia on vain Studio-sovelluksessa.
- Säilyykö Studio acad.lsp-tukikansiota uudelleenkäynnistyksen jälkeen, ei ole vielä tarkistettu. Jos se kysyy, valitse kansio uudelleen komennossa {{cmd:APPLOAD}}.
- Laser-paneelia ei ole vielä kokeiltu oikealla laserilla: testaa jokainen asetus romulla. Studiossa ei ole Web Serialia, joten Studio-sovelluksen paneeli tallentaa vain G-koodia.
- Skannausten rekisteröintiä on testattu keksityillä skannauksilla, ei vielä oikean skannerin aineistolla.
- Kahden sormen panorointia on kokeiltu simuloiduilla kosketuslevytapahtumilla, ei vielä oikealla kosketuslevyllä.
- Komennossa {{cmd:PEDIT}} ei ole vaihtoehtoa Edit vertex (käytä otteita tai Ominaisuuksia). Siirtymä, typistys, pidennys, pyöristys, katkaisu ja yhdistäminen eivät vielä ota splinejä. Splinen korkeutta (Z) ei säilytetä.
- Uusi kappaleteksti ei voi saada muotoilukoodeja vielä, ja SVG-plotit näyttävät muotoillun tekstin yhdellä värillä.
- {{cmd:WBLOCK}}-komennon Koko piirustus kirjoittaa vain mallin, ei arkkeja. Nykyistä mitoitustyyliä ei tallenneta tiedostoon: piirustus avautuu Standard-nykyisenä.
- Valintanauhatyyleissä ei vielä ole taso-, väri- tai viivatyyppiluetteloita. Käytä {{ui:Tasot}}-paneelia ja {{ui:Ominaisuudet}}-paneelia.
- Pistepilviä ei vielä tallenneta piirustukseen eikä plotata, ja E57-tiedostot avautuvat enintään 6 miljoonalla pisteellä ja 512 MB:lla.
- CadCraftin tallennettuja DWG-tiedostoja ei ole vielä tarkistettu itse AutoCADissa.

Kaikki muu on kohdassa [Ei vielä toteutettu](topic:not-built-yet).
