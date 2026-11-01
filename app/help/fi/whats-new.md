---
title: Uutta versiossa 0.7
summary: PDF-alustat ja PDF-tuonti, skannatut piirustukset automaattisella jäljityksellä, oikeat splinit komennoilla SPLINE, SPLINEDIT ja PEDIT, mitoitustyylien hallinta, teksti joka säilyttää muotoilunsa, WBLOCK ja omat mittakaavat, 3D-kiintokappaleet muista ohjelmista, skannausten rekisteröinti, Laser-paneeli, USD-vienti, Historia ja tulostus CadCraft Studiossa, ohjattu ensimmäinen piirustus, työkalurivi millä sivulla tahansa tai vähemmillä riveillä ja lisää tekoälyavustajille.
keywords: uutta, mitä uutta, versiotiedot, muutosloki, muutokset, 0.7, versio, uudet ominaisuudet, pdf, pdfattach, pdfimport, alusta, skannaus, scanattach, scantrace, jäljitys, rasteri, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, muotoilu, wblock, scalelistedit, mittakaavaluettelo, acis, 3d-kiintokappaleet, registerscans, rekisteröi skannaukset, icp, e57, las, laser, grbl, g-koodi, usd, usdout, historia, versiot, vertaa, tulosta, tulostin, png, svg, plottaustyyli, viivatyyppi, kierros, pikaohje, komentokartta, työkalurivin sijainti, työkalurivin rivit, toolbardock, regen, regenall, ohjauslevy, pyyhkäisy, koodisivu, kyrillinen, korea, kiina, japani, sähkö, rcd, p&id, pid, acad.lsp, acaddoc.lsp, tukikansio, avustajat, mcp, yksiköt, portugali
from: b9258ca6
---

Tämä on luettelo siitä, mikä muuttui CadCraftissa versiossa 0.7 verrattuna versioon 0.6. Suuri osa siitä toivottiin Discordissa. Luettelo on ryhmitelty alueittain, tärkein ensin.

## Uutta

### PDF-tiedostot ja skannatut piirustukset

- **Aseta PDF-sivu piirustuksen alle.** {{cmd:PDFATTACH}} (`PDFATT`) asettaa sivun todelliseen kokoonsa tai kirjoittamaasi mittakaavaan. Tartu sen viivoihin, haalenna se, tee siitä yksivärinen ({{cmd:PDFADJUST}}), rajaa se ({{cmd:PDFCLIP}}) ja vaihda PDF:n omia tasoja ({{cmd:PDFLAYERS}}). Se plottautuu viivoina, täytteinä ja tekstinä, ja DWG tai DXF 2000 säilyttää sen linkkinä tiedostoon. PDF:n avaaminen {{ui:Avaa}}-toiminnolla kysyy, liitetäänkö vai tuodaanko se. Katso [PDF-alustat ja PDF-tuonti](topic:pdf-underlay).
- **Muuta PDF-sivu piirustuskohteiksi.** {{cmd:PDFIMPORT}} (`PDFIM`) tekee viivoja, murtoviivoja, ympyröitä, kaaria, täytettyjä viivoituksia ja tekstiä PDF:n mukaan nimetyille tasoille, todelliseen kokoon, kirjoitettuun mittakaavaan tai kahdesta pisteestä ja todellisesta etäisyydestä skaalattuna, yhdellä kumoamisvaiheella. Katso [Tuo sivu](topic:pdf-underlay#import-a-page).
- **Skannatut piirustukset.** {{cmd:SCANATTACH}} tuo PNG-, JPEG- tai TIFF-tiedoston (yksi sivu tai kaikki) tai PDF-sivun, joka on kuva. Sitten skaalaa se kahdesta pisteestä ({{cmd:SCANSCALE}}), kohdista se ({{cmd:SCANALIGN}}), oikaise se sen omista pitkistä viivoista ({{cmd:SCANDESKEW}}), tee siitä mustavalkoinen ja poista pilkut ({{cmd:SCANCLEAN}}), rajaa se ja poista sen osia. Jokainen vaihe on yksi kumoamisvaihe, ja alkuperäinen tiedosto säilyy. Katso [Skannatut piirustukset ja jäljitys](topic:scanned-drawings).
- **Jäljitä skannaus viivoiksi ja kaariksi.** {{cmd:SCANTRACE}} piirtää skannauksen viivat viivoina ja kaarina uudelle tasolle, SCAN-TRACE, asettamallesi toleranssille, ja jättää tekstin ja viivoitukset ennalleen. Raportti kertoo, mitä se teki ja mitä jätti, eikä se väitä tuloksen olevan oikea: tarkista se arkkia vasten. {{cmd:RASTERSNAP}} antaa kohteen tartuntojen löytää skannauksen päät, kulmat ja risteykset. Mitään ei lähetetä minnekään, eikä koulutettua mallia käytetä. Katso [Jäljitys](topic:scanned-drawings#the-trace).

### Piirtäminen ja muokkaus

- **Oikeat splinit.** {{cmd:SPLINE}} (`SPL`) piirtää käyrän pisteiden kautta tai ohjauspisteistä (aste 1-5) päätangentteineen; {{cmd:SPLINEDIT}} (`SPE`) siirtää, lisää ja poistaa sovitus- tai ohjauspisteitä, asettaa painoja, avaa, sulkee, kääntää tai muuttaa splinin murtoviivaksi. DWG- ja DXF-tiedostojen splinit avautuvat splineinä, ja DWG ja DXF 2000 tallentavat ne splineinä. Katso [Splinit ja murtoviivat](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) sulkee ja avaa murtoviivoja, liittää niihin viivoja ja kaaria, asettaa yhden leveyden, sovittaa käyrän kärkipisteiden kautta tai splinin niitä pitkin ja ottaa sen pois komennolla Decurve, kääntää ja muokkaa useita kerralla. Katso [Muokkaa murtoviivaa](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) kirjoittaa lohkon, joitakin kohteita tai koko piirustuksen uuteen DWG:hen tai DXF:ään, joka sisältää vain niiden käyttämät tasot, tyylit ja lohkot. Katso [Kirjoita lohko tai kohteita omaan tiedostoonsa](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN ja REGENALL.** {{cmd:REGEN}} (`RE`) piirtää nykyisen välilehden uudelleen piirustuksesta, {{cmd:REGENALL}} (`REA`) jokaisen välilehden, ruudun ja avoimen piirustuksen. Katso [REGEN ja REGENALL](topic:commands#regen-and-regenall).

### Teksti ja mitoitukset

- **Teksti säilyttää muotoilunsa.** Muista ohjelmista tuleva kappaleteksti säilyttää sanakohtaiset värit, lihavoinnin ja kursiivin, alleviivauksen, pinotut murtoluvut ja korkeudet: ne piirretään näytöllä ja PDF-tiedostoissa, säilytetään kun muokkaat sanoja ja tallennetaan takaisin. Katso [Muotoilu muista ohjelmista tulevan kappaletekstin sisällä](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Mitoitustyylien hallinta.** {{cmd:DIMSTYLE}} (`D`) tekee, muuttaa, vertaa ja ottaa käyttöön nimettyjä mitoitustyylejä; tyylin muuttaminen muuttaa jokaisen sitä käyttävän mitoituksen. {{cmd:DIMEDIT}} (`DED`) palauttaa tekstin, kirjoittaa uuden tekstin, kiertää sen tai kallistaa apuviivoja; {{cmd:DIMTEDIT}} siirtää tekstin vasemmalle, oikealle tai keskelle. Katso [Nimetyt mitoitustyylit](topic:dimension-settings#named-dimension-styles).
- **Omat mittakaavat.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) lisää mittakaavoja, kuten 1:75, näkymäruudun ja plottauksen mittakaavaluetteloihin; ne tallennetaan piirustukseen (DWG ja DXF 2000), ja toisesta ohjelmasta tuleva piirustus tuo oman luettelonsa. Katso [Mittakaavat](topic:units-papers-scales#scales).
- **Teksti muilla aakkosilla.** Kyrillisillä, korealaisilla, kiinalaisilla, japanilaisilla tai vietnamilaisilla koodisivuilla tallennetut DXF-tiedostot avautuvat nyt teksteineen, ja kiinalainen, japanilainen ja korealainen teksti tulostuu PDF-tiedostoissa (plottaus hakee suuremman fontin ensimmäisellä tarvekerralla). Katso [Fontti](topic:text#font).

### Plottaus ja tulostus

- **Lisää plottaustyylitaulukoissa.** Taulukko voi nyt asettaa kullekin värille myös viivatyypin, viivan pään ja liitoksen sekä täyttötyylin, joka tulostaa täytteet viivoituksen viivoina; taulukolla on oma viivanpaksuusluettelonsa ja viivatyyppimittakaava. Katso [Plottaustyylitaulukot](topic:plot-pdf#plot-style-tables).
- **Tulostus sekä PNG- ja SVG-tiedostot.** Plottaa-valintaikkunassa on {{ui:Tulosta…}}, {{ui:Lataa PNG}} (300 dpi) ja {{ui:Lataa SVG}}. CadCraft Studiossa se luettelee tietokoneen tulostimet, niiden paperin ja kopioiden määrän. Katso [Tulosta](topic:plot-pdf#print) ja [Kuva- ja SVG-tiedostot](topic:plot-pdf#picture-and-svg-files).

### 3D ja pistepilvet

- **3D-kiintokappaleet muista ohjelmista.** Piirustuksen mallitilan kiintokappaleet, alueet ja kappaleet näkyvät 3D-välilehdellä vain luku -tilassa, ja DWG-tallennus kirjoittaa ne takaisin muuttumattomina. Pinnat, joita CadCraft ei vielä piirrä, luetellaan, ei arvata. Katso [Kiintokappaleet muista ohjelmista](topic:3d-solids#solids-from-other-programs).
- **Rekisteröi useita skannauksia.** {{cmd:REGISTERSCANS}} (`REGSCAN`) sijoittaa eri paikoista otetut skannaukset yhteen koordinaatistoon pisteparien tai kirjoitettujen tähyskoordinaattien avulla, tarkentaa ne ICP:llä, tallentaa rekisteröinnin pieneksi projektitiedostoksi ja kirjoittaa rekisteröidyn pilven yhdeksi LAS- tai E57-tiedostoksi. Katso [Rekisteröi useita skannauksia yhdeksi](topic:register-scans).
- **USD-vienti.** {{cmd:USDOUT}} tai {{cmd:EXPORT3D}} › {{ui:USD}} kirjoittaa 3D-välilehden kiintokappaleet tiedostoina `.usda`, `.usdc` tai `.usdz`. Katso [Vie 3D-malli USD-muodossa](topic:usd).
- **Laskutoimitukset 3D-välilehdellä.** Kun 3D-välilehden työkalut kysyvät etäisyyttä, voit kirjoittaa laskutoimituksen kuten komentorivillä. Katso [Laskutoimitukset kirjoitetussa arvossa](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Tekeminen

- **Lähetä piirustus laserille.** {{cmd:LASER}} tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Laser…}} avaa paneelin piirustuksen päälle: jokainen taso leikkaa, uurtaa, kaivertaa viivoja, täyttää muotoja, kaivertaa kuvan tai jätetään lähettämättä, tehon, nopeuden ja kierrosten kanssa. Esikatselu seuraa muokkauksiasi, {{ui:Tallenna G-koodi…}} kirjoittaa GRBL-lasertilan G-koodin, ja Chromessa tai Edgessä paneeli voi kehystää työn ja lähettää sen USB:n kautta. Asetukset tallennetaan piirustukseen (DWG ja DXF). Katso [Lähetä piirustus laserille](topic:laser-cutting).
- **Rakennusasennussymbolit Sähkö-lisäosassa.** Data-, puhelin- ja TV-pistorasiat, avain- ja aikakytkimet, termostaatti, poistumisopaste, ilmaisimet, palohälytin ja sireeni, tuuletin, lämminvesivaraaja, liesi, sähköauton latauspiste, energiamittari ja aliryhmäkeskus sekä RCD- ja RCBO-symbolit. Virtapiirillä voi olla RCD, keskusluettelossa on RCD-sarake, ja tarkastukset nimeävät pistorasiapiirit, joilla ei ole enintään 30 mA:n RCD:tä. Se on suunnittelumuistutus, ei määräystarkastus.
- **P&ID-lisäosa.** P&ID piirtää prosessikaavioita: symbolit liitäntäpisteineen, prosessi- ja signaalilinjat, tunnisteet, linjanumerot, linja-, laite-, instrumentti- ja venttiililuettelot (CSV tai työkirja) ja tarkastukset. Se tulee CadCraftin mukana ja on pois päältä, kunnes otat sen käyttöön kohdassa {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Lisäosat}}. Se on piirustusapu, ei suunnittelijan hyväksyntä, ja sen sanat ovat toistaiseksi vain englanniksi.

### Aloitus ja näyttö

- **Ohjattu ensimmäinen piirustus.** {{cmd:TOUR}} (tai {{ui:Käy kierros läpi}} aloituskortissa) vie sinut kuuden vaiheen läpi oikeassa piirustuksessa: viiva, ympyrä, siirto, typistys, poisto ja mitoitus. Se alkaa itsestään ensimmäisellä kerralla, kun CadCraft avataan tyhjänä. Katso [Haluatko opastusta?](topic:getting-started#prefer-to-be-guided)
- **Pikaohje ja komentokartta.** [Pikaohjeessa](topic:cheat-sheet) on 40 arkikomentoa yhdellä sivulla, myös PDF:nä tulostettavaksi, ja [komentokartta](topic:command-map) luettelee komennot lyhyine nimineen A:sta Ö:hön.
- **Työkalurivi millä sivulla tahansa.** {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Työkalurivin sijainti}}: ylhäällä (kuten ennen), alhaalla, vasemmalla tai oikealla, tai kirjoita {{cmd:TOOLBARDOCK}}. Katso [Työkalurivin sijainti](topic:settings#toolbar-position).
- **Työkalurivin rivit.** {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Työkalurivin rivit}}: rivitä sopimaan, 2 riviä tai 1 rivi, CadCraft-työkalurivillä sekä Drafting classic- ja Ribbon-tyyleissä. {{key:Shift+Ctrl+F1}} kiertää ne läpi, {{key:Ctrl+F1}} sen, mitä painikkeet näyttävät, ja {{cmd:TOOLBARROWS}} ja {{cmd:TOOLBAR}} asettavat ne. Aloitusvihjeessä on sulkemispainike. Kiitos GJoe2:lle, joka lähetti tämän vetopyyntönä. Katso [Työkalurivin rivit](topic:settings#toolbar-rows).

### CadCraft Studiossa

- **Historia.** {{cmd:HISTORY}} (`HIST`) tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Historia…}}: kopiot, joita Studio säilyttää, kun avaat ja tallennat piirustuksen, sekä piirustuksen pilviversiot, kun avasit sen pilvestä. Avaa tai palauta yksi tai vertaa kahta niin, että lisätyt, poistetut ja muutetut näkyvät värillä. Katso [Historia](topic:history).
- **acad.lsp ja acaddoc.lsp.** Valitse tukikansio komennolla {{cmd:APPLOAD}}: nämä kaksi tiedostoa latautuvat, kun CadCraft käynnistyy (acaddoc.lsp uudelleen jokaiselle uudelle piirustusvälilehdelle), ja `S::STARTUP` suoritetaan niiden jälkeen. Katso [Lataa sovelluksia](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Plottaa-valintaikkuna omassa ikkunassaan.** Sen otsikkopalkin painike siirtää sen ikkunaan, jonka voi viedä toiselle näytölle. Katso [Siirrä valintaikkunaa](common:arrange-panels#move-a-dialog).

### Tekoälyavustajille

- **Tiedostot nimellä, valitsemissasi kansioissa.** CadCraft Studiossa avustaja voi avata, tallentaa ja plottata tiedostoja nimellä ja antaa komennolle sen pyytämän tiedoston (INSERT tiedostosta, COUNT-komennon vienti, SAVEAS, PLOT), mutta vain kansioissa, jotka lisäät kohdassa {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Avustajat}} › {{ui:Kansiot, joita se saa käyttää}}. Katso [Anna sen käyttää tiedostoja valitsemissasi kansioissa](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Vähemmän kutsuja.** Avustaja voi kirjoittaa kokonaisen komentorivin kerralla, pitää komennon auki kutsujensa välillä, laskea kohteet tyypin ja tason mukaan luettelematta niitä ja sijoittaa lohkon attribuuttiarvoineen yhdellä vaiheella.
- **Ilman ikkunaa.** `cadcraft`-komentorivi kirjoittaa SVG-plottauksia ja muuntaa, plottaa, tarkistaa tai kuvaa monta tiedostoa kerralla. MCP-pakettia ei ole vielä julkaistu. Katso [Työskentele tiedostojen parissa avaamatta CadCraftia](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Muutettu

- **Ohjauslevy panoroi.** Liikuta kahta sormea ohjauslevyllä, niin 2D-näkymä seuraa; nipistys ja hiiren rulla zoomaavat. Katso [Hiiri, ohjauslevy ja kosketus](topic:mouse-trackpad-touch).
- **OLE-kohteet säilyvät.** DXF:n upotetut kohteet näkyvät kuvanaan tai nimettynä kehyksenä, ja DXF 2000 tallentaa ne takaisin. DWG:n kohteet säilytetään ja kirjoitetaan takaisin, kun tallennat DWG:nä, mutta niitä ei vielä näytetä. Ennen ne katosivat tallennettaessa. Katso [Kohteet muista ohjelmista (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Uuden piirustuksen yksiköt** seuraavat yksikköä, jonka merkitset tähdellä kohdassa {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Yksiköt}}.

## Korjattu

- Asettelut, jotka avautuivat tyhjinä tai menettivät näkymäruudun ja näyttivät koko mallin sen tilalla, avautuvat nyt oikeine näkymäruutuineen. Asettelu, jolla ei ole linkkiä sisältöönsä, säilytetään, ja avausraportti kertoo sen.
- Vanhemmilla koodisivuilla olevat DXF-tiedostot näyttivät kyrillisen ja korealaisen tekstin sekavana. Ne luetaan nyt oikein.
- Muista ohjelmista tuleva kappaleteksti menetti muotoilunsa avattaessa ja tallennettiin takaisin pelkkänä tekstinä.

## Kaikissa sovelluksissa

- **Yksiköt.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Yksiköt}} sisältää yhden luettelon pituudelle, alalle, tilavuudelle, kulmalle ja kaltevuudelle, täsmälleen yksiköiden määritelmien mukaisilla kooilla (Yhdysvaltain maanmittausjalka on oma yksikkönsä). Kytke pois yksiköt, joita et koskaan käytä, niin ne poistuvat yksikköluetteloista; merkitse yksi tähdellä, niin uusi työ alkaa siinä. Tiedosto säilyttää aina oman yksikkönsä. CadCraftissa tähti asettaa uuden piirustuksen yksiköt, kun se on yksikkö, jonka piirustus voi kantaa; CadCraftin oma {{ui:Yksiköt}}-ruutu ei vielä seuraa kytkimiä. Kun piirustuksella on yksiköt, kirjoitettu pituus voi sisältää minkä tahansa yksikön merkin. Katso [Yksiköt, kirjoitetut arvot ja yksikköluettelot](common:unit-lists).
- **Tiiviimpi asettelu ja paneelit, jotka siirtyvät pois tieltä.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Asettelun tiheys}} › {{ui:Tiivis}} mahduttaa enemmän näytölle (kosketusnäytöt ja puhelimet säilyttävät suuret painikkeensa). Jokaisella sivupaneelilla on kapea otsikkopalkki: vedä sitä kiinnittääksesi paneelin tai irrottaaksesi sen kelluvaksi, pudota se toisen paneelin palkkiin jakaaksesi yhden kehyksen välilehtinä, kiinnitä se liukumaan reunaan tai piilota se ja tuo takaisin reunasta. Katso [Järjestä paneelit](common:arrange-panels#make-the-layout-denser).
- **Valintaikkunat liikkuvat.** Vedä valintaikkunaa otsikkopalkista pois piirroksen tieltä; se palaa siihen, mihin sen jätit. Kaksoisnapsauta otsikkopalkkia keskittääksesi sen uudelleen. Katso [Siirrä valintaikkunaa](common:arrange-panels#move-a-dialog).
- **Reseptejä tekoälyavustajille.** Kymmenen läpikäytyä pyyntöä omalle avustajallesi (siivoa piirustus, plottaa sarja, tarkista piirustuksia, kysy malleista, laske määrälaskenta yhteen, kokeile osan varianttia…), kussakin kutsutut työkalut ja tarvittavat oikeudet, ja testeissämme kukin toistettu. Sovellukset eivät sisällä tekoälyä. Katso [Reseptejä tekoälyavustajille](common:assistants-recipes).
- **Kielet.** **Português (Portugal)** on uusi kohdassa {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Kieli}}. Se, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** sisältävät nyt jokaisen sovellusten sanan luonnoksina, joita äidinkielinen puhuja ei ole vielä tarkistanut. Ohjeaiheet ovat englanniksi.
- **CadCraft Studio** kertoo, miksi päivitystarkistus epäonnistui (ei vielä tiedostoa järjestelmällesi, ei verkkoa, virheellinen allekirjoitus) pelkän "Valmis" sijaan, eikä enää tuo takaisin sulkemaasi Uutta-korttia ennen kuin uudempi julkaisu on olemassa.

## Ei vielä tässä versiossa

- **Versiota 0.7 ei ole koodiallekirjoitettu.** Allekirjoitus ja Microsoft Store -paketti siirtyivät versioon 0.8, koska varmenteen vahvistus ei ole vielä mennyt läpi. Tarkista SHA-256 kunkin tiedoston vieressä osoitteessa getcadcraft.com/download. Jos SmartScreen pysäyttää asennusohjelman Windowsissa, valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}. Macissa napsauta ensimmäisellä kerralla CadCraft Studiota hiiren oikealla painikkeella ja valitse {{ui:Avaa}}. CadCraft Studio ei ole vielä sovelluskaupassa, eikä iPad- tai iPhone-versiota ole vielä.
- {{ui:Yksiköt}}-kohdan kulma- ja kaltevuusluettelot tallennetaan, mutta mikään kenttä ei vielä lue niitä.
- DWG:n OLE-kohteet säilytetään mutta niitä ei näytetä, eikä OLE-kohteiden sisällä olevia metatiedostokuvia piirretä.
- Plottaustyylitaulukoiden (CTB-tiedostot) lukeminen muista ohjelmista odottaa esimerkkitiedostoa.
- Vanhempi aasialainen teksti, joka on kirjoitettu `\M+`-koodeina, luetaan, mutta sitä ei ole vielä tarkistettu toisen ohjelman tiedostoa vasten.
- PDF-alustat: sivun sisällä olevat kuvat näytetään näytöllä mutta ei plotata, avustajan plottaus jättää alustat pois, eikä sitä, miten muut ohjelmat lukevat tallennetun rajauksen ja mittakaavan, ole tarkistettu niissä.
- Historia: CadCraft ei vielä lähetä tallennuksiaan pilveen, joten pilviversiot ovat muilta laitteilta ja verkosta tallennettuja. Historia on vain CadCraft Studiossa.
- Sitä, säilyttääkö Studio acad.lsp-tukikansion uudelleenkäynnistyksen jälkeen, ei ole vielä tarkistettu; jos se kysyy, valitse kansio uudelleen APPLOAD-komennossa.
- Laser-paneelia ei ole vielä kokeiltu oikealla laserilla: testaa jokainen asetus hukkamateriaalilla. CadCraft Studiossa ei ole Web Serialia, joten Studiossa paneeli tallentaa vain G-koodia.
- Skannausten rekisteröintiä on testattu keksityillä skannauksilla, ei vielä oikean skannerin sarjalla.
- Kahden sormen panorointia on kokeiltu simuloiduilla ohjauslevytapahtumilla, ei vielä oikealla ohjauslevyllä.
- {{cmd:PEDIT}}ssä ei ole Edit vertex -valintaa (käytä otteita tai Ominaisuuksia). Siirtymä, typistys, pidennys, pyöristys, katkaisu ja yhdistäminen eivät vielä toimi splineille; splinin korkeutta (Z) ei säilytetä.
- Uudelle kappaleteksille ei voi vielä antaa muotoilukoodeja, ja SVG-plottaukset näyttävät muotoillun tekstin yhdellä värillä.
- WBLOCKin Entire drawing kirjoittaa vain mallin, ei arkkeja. Nykyistä mitoitustyyliä ei tallenneta tiedostoon: piirustus avautuu niin, että Standard on nykyinen.
- Valintanauhavalikkotyyleissä ei ole vielä taso-, väri- tai viivatyyppiluetteloita: käytä {{ui:Tasot}}-paneelia ja {{ui:Ominaisuudet}}-paneelia.
- Pistepilviä ei yhä tallenneta piirustukseen eikä plotata, ja E57-tiedostot avautuvat enintään 6 miljoonaan pisteeseen ja 512 Mt:hen.
- CadCraftin tallentamia DWG-tiedostoja ei ole vielä tarkistettu itse AutoCADissa.

Kaikki muu on aiheessa [Ei vielä rakennettu](topic:not-built-yet).
