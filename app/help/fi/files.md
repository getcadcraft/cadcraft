---
title: Tiedostot: mitä avautuu, mitä tallentuu
summary: Muodot, jotka CadCraft avaa, tallentaa ja vie, mikä säilyy tai muunnetaan ja minne tiedostot menevät.
keywords: xclip, leike, xclip-rajaus, sido leikatut, dwg, dxf, pdf, r12, avaa, tallenna, vie, tuo, muodot, muunnos, lataa, saveas, dxfout, tallenna nimellä, dwg-tallennus, muoto, qsave, xref, xattach, linkitetty piirustus, ulkoinen viittaus, sido, lataa uudelleen, irrota
from: 6d68b34e
---

## Yhdellä silmäyksellä

| Muoto | Avaa | Tallenna | Huomautuksia |
|---|---|---|---|
| DXF (teksti, mikä tahansa versio) | Kyllä | Kyllä, muodossa DXF R12 tai DXF 2000 | Binaari-DXF hylätään: tallenna se ensin tekstimuotoiseksi DXF:ksi. |
| DWG | Kyllä | Kyllä, DWG:nä (AutoCAD 2000, 2004, 2007, 2010, 2013 tai 2018) | CadCraftin oma DWG-kirjasto lukee ja kirjoittaa (AutoCAD R13:sta 2018:aan -tiedostot). DWG:täsi ei koskaan muuteta. Vioittuneet tiedostot tai versiot, joita lukija ei käsittele, hylätään viestillä. |
| PDF | Tuo sivun: alustana tai kohteina ([PDF-alustat](topic:pdf-underlay)) | Kyllä, plottaamalla | Arkin tai mallin vektori-PDF mittakaavassa. |

Jokainen avaamasi (tai {{ui:Uusi}}-komennolla aloittamasi) piirustus saa oman välilehtensä piirtoalueen päälle; uusi piirustus, jota kukaan ei ole koskenut, käytetään uuden välilehden lisäämisen sijaan. Napsauta välilehteä vaihtaaksesi, sen {{ui:×}}-merkkiä sulkeaksesi (CadCraft kysyy ensin, jos tallentamattomia muutoksia on) tai aseta avoimet piirustukset vierekkäin: katso [Jaa näyttö](topic:split-screen).

## Piirustuksen avaaminen

- Paina {{key:Mod+O}}, napsauta {{ui:Avaa}} tai kirjoita `OPEN` ja valitse sitten tiedosto.
- Tai vedä `.dwg`- tai `.dxf`-tiedosto piirtoalueelle.

Tiedosto luetaan selaimen sisällä. Sitä ei lähetetä minnekään. Historia kertoo, kuinka monta kohdetta ja tasoa tuli sisään ja kuinka kauan se kesti, ja vasemman paneelin {{ui:Piirustus}}-osio näyttää muodon, esimerkiksi "DWG 2018 (AC1032)".

DWG-lukija on osa CadCraftia ja haetaan sivun latautumisen jälkeen ensimmäisen avaamasi DWG:n mukana (muutama sata kt), joten erillistä latausta ei tarvitse odottaa. Se lukee tiedoston taustalla, joten sivu reagoi edelleen, kun iso DWG avautuu.

### Mitä tulee sisään

- Viivat, kaaret, ympyrät, murtoviivat (kaarisegmenteillä), ellipsit, pisteet, teksti ja monirivinen teksti, täytteet (solid), viivoitukset (vakiokuviot piirrettyinä niiden viivoina, muut tasaisena sävynä), lohkoviittaukset attribuutteineen (arvoja voi muokata; katso [Lohkoattribuutit](topic:attributes)), mitoitukset sekä asettelut näkymäruutuineen.
- Splinit tulevat splineinä (aste, ohjauspisteet, solmut, painot, sovituspisteet); katso [Splinit ja murtoviivat](topic:splines).
- Moniviitenuolet, joissa on yksi viiva ja teksti, tulevat muokattavina CadCraftin moniviitenuolina (katso {{cmd:MLEADER}}). Muut (lohkolla, usealla viivalla tai kaarevilla viivoilla) piirretään sellaisina kuin toinen ohjelma ne piirsi ja ne liikkuvat yhtenä; historia kertoo, kuinka monta.
- Kuvat näkyvät kehyksenä ja kuvan tiedostonimenä, kunnes annat CadCraftille tiedoston komennolla {{cmd:IMAGE}}: katso [Kuvat piirustuksessa](topic:pictures#show-the-pictures-a-dwg-uses). Peitteet näkyvät kehyksenään, ja niiden alla oleva pysyy näkyvissä.
- DWG:n taulukot tulevat sellaisina kuin toinen ohjelma ne piirsi.
- 3D-pinnat mallitilassa tulevat {{ui:3D}}-välilehdelle, eivät 2D-kohteina; samoin lohkojen sisällä olevat, kerran jokaista lohkoviittausta kohti mallissa. Lohkossa ja arkilla ne piirretään myös litteinä ääriviivoina. Katso [Malli 3D:nä](topic:3d-solids).
- Tasot säilyttävät värinsä, päällä-, jäädytys-, lukitus- ja plottausasetuksensa. DEFPOINTS ei koskaan plottaudu.
- Mitoituksista tulee oikeita, muokattavia CadCraftin mitoituksia, kun niiden pisteet voidaan lukea. Ne näytetään ensin täsmälleen sellaisina kuin toinen ohjelma ne piirsi; heti kun muutat yhtä, CadCraft piirtää sen uudelleen omalla tyylillään.
- Jokaisesta asettelusta tulee arkkivälilehti. Toisessa ohjelmassa jokaisella asettelulla on piilotettu ensimmäinen näkymäruutu, joka on itse arkki; CadCraft jättää sen pois.

### Mitä ei vielä tule sisään

Kaikki, mitä CadCraft ei osaa piirtää, lasketaan, ei arvata. Vasemman paneelin "Tietoja tästä tiedostosta" -ruutu luettelee sen otsikolla "Ei vielä näytetä:" ja sen jälkeen kunkin kohdelajin ja määrän. Tyypillisiä tapauksia ovat DXF:n taulukot, verkot ja lohkojen sisällä olevat 3D-kiintokappaleet. Mallitilan 3D-kiintokappaleet, alueet ja kappaleet näkyvät 3D-välilehdellä (katso [Malli 3D:nä](topic:3d-solids#solids-from-other-programs)). Tiedostossa kierretyt näkymäruudut näkyvät kierrettyinä kuten alkuperäisessä ja säilyttävät kiertonsa tallennettaessa; samoin nykyinen UCS, nimetyt UCS:t ja kierretty näkymä.

Teksti piirretään yhdellä Helvetica-tyylisellä fontilla. Rivi, joka mahtuu yhdelle riville alkuperäisen ohjelman kapeammalla fontilla, voi rivittyä CadCraftissa kahdelle riville.

## Tallennus

Tallentaa voi kolmella tavalla. Jokainen lataa kopion.

- **Tallenna**: paina {{key:Mod+S}}, napsauta {{ui:Tallenna}} tai kirjoita `SAVE` (myös `QSAVE`). Se tallentaa piirustuksen muodossa: DWG, jos avasit DWG:n, DXF, jos avasit DXF:n. DWG säilyttää versionsa, jossa se tuli (2018-tiedosto tallentuu 2018-muodossa). Uusi piirustus käyttää muotoa ja DWG-versiota, jonka viimeksi valitsit Tallenna nimellä -toiminnossa tässä selaimessa; jos et ole valinnut mitään, DWG AutoCAD 2000 -muodossa.
- **Tallenna nimellä**: paina {{key:Mod+Shift+S}}, napsauta {{ui:Tallenna nimellä}} tai kirjoita `SAVEAS`. {{ui:Tallenna kopio nimellä}} -valintaikkunassa on {{ui:DWG}} ja {{ui:Versio}}-luettelo (AutoCAD 2018, 2013, 2010, 2007, 2004 tai 2000), {{ui:DXF R12}} ja {{ui:DXF 2000}}, kukin antamansa tiedostonimen kanssa, ja piirustuksen nykyinen muoto ja versio on jo valittu. Napsauta {{ui:Tallenna}} ladataksesi tai {{ui:Peruuta}} (tai {{key:Esc}}) olla tallentamatta mitään; historia sanoo silloin "Ei tallennettu." Valinta pysyy: {{key:Mod+S}} käyttää sitä tästä lähtien tälle piirustukselle, ja uudet piirustukset tässä selaimessa alkavat sillä.
- **DXFOUT**: kirjoita `DXFOUT`. Se lataa aina DXF R12 -kopion, ja seuraava {{key:Mod+S}} tallentaa yhä piirustuksen omassa muodossa.

Selain lataa tiedoston `<piirustuksen nimi>.dwg` tai `<piirustuksen nimi>.dxf`. Jokainen tallennus on **uusi lataus**; avaamaasi tiedostoa ei koskaan korvata eikä muuteta. Historia vahvistaa sen, esimerkiksi "Kopio tallennettu nimellä Plan.dwg (DWG (AutoCAD 2018)). Alkuperäinen tiedostosi Plan.dxf ei muuttunut." DXF:lle se sanoo "(DXF R12, avautuu missä tahansa CAD-ohjelmassa)". Sen alla olevat rivit luettelevat kaiken, mikä muuttui matkalla.

Kun CadCraft toimii työpöytäsovelluksena, tallennus toimii kuten muissa työpöytäohjelmissa: {{key:Mod+S}} kirjoittaa piirustuksen takaisin avaamaasi tiedostoon sen omassa muodossa ja versiossa, ja historia kertoo, minne se tallennettiin. {{ui:Tallenna nimellä}} ja viennit näyttävät järjestelmän tallennusikkunan, ja kaksoisnapsauttamasi `.dwg`-, `.dxf`- tai `.ccsheets`-tiedosto avautuu CadCraftissa.

PDF:ää varten plottaa sen sijaan (katso alla).

## Mitä DWG säilyttää ja muuttaa

CadCraft kirjoittaa DWG:n itse selaimesi sisällä samalla DWG-kirjastolla, jolla se lukee. Valitse versio kohdassa Tallenna nimellä: AutoCAD 2000 -muoto (tiedostoversio AC1015) avautuu useimmissa ohjelmissa, vanhoissakin; uudemmat muodot (2004, AC1018, aina 2018:aan, AC1032) säilyttävät myös true color -värit. Mitään ei lähetetä, ja DWG:n tallennus toimii offline-tilassa.

Jokainen versio tarkistetaan lukemalla tallennetut tiedostot takaisin kolmen muun ohjelman DWG-lukijoilla ja CadCraftilla itsellään. CadCraftin DWG:tä ei ole vielä avattu itse AutoCADissa.

### Mitä DWG säilyttää

- Viivat, kaaret, ympyrät, ellipsit, pisteet ja murtoviivat kaarisegmentteineen.
- Yksirivinen teksti tasauksineen ja leveyskertoimineen.
- Monirivinen ja rivitetty teksti monirivisenä tekstinä. Toinen ohjelma rivittää sen uudelleen samasta leveydestä.
- Kohteiden värit: tason mukaan, lohkon mukaan, 255 vakiovärin joukko ja true color -värit 2004-muodossa ja uudemmissa.
- Tasot väreineen, viivatyyppeineen, viivanpaksuuksineen sekä päällä-, jäädytys-, lukitus- ja plottausasetuksineen; kohteiden omat viivatyypit, viivanpaksuudet ja viivatyyppien mittakaavat, viivatyyppien kuviot ja piirustuksen viivatyyppimittakaava.
- Piirustuksen yksiköt ja pituusmuoto (desimaali, jalat ja tuumat, murtoluvut…).
- Lohkot peruspisteineen ja attribuuttimäärityksineen, myös näkymättömät, vakio- ja esiasetetut.
- Lohkoviittaukset mittakaavoineen, kiertoineen ja attribuuttiarvoineen.
- Täytteet ja kuvioidut viivoitukset kuvioineen, mittakaavoineen ja kulmineen (kuvion omat viivat, jotta muut ohjelmat piirtävät samat viivat kuin CadCraft).
- Mitoitukset oikeina mitoituksina: muut ohjelmat mittaavat ne uudelleen venytettäessä. Kukin säilyttää omat asetuksensa (tekstin korkeus, nuolen koko, desimaalit, pituusmuoto) ja tekstinsä ja kantaa mukanaan piirretyn kopion, joka jokaisella DWG-mitoituksella on.
- Arkit (asettelut): kukin arkki paperikokoineen ja yksiköineen, siihen piirretyt asiat sekä näkymäruudut näkymineen ja mittakaavoineen.
- Nimetyt näkymät.
- Moniviitenuolet moniviitenuolina.
- Taso- ja lohkonimet sellaisina kuin ne kirjoitit, isoin ja pienin kirjaimin. (DXF R12 kirjoittaa ne isoilla kirjaimilla.)

### Mitä DWG muuttaa

Jokainen näistä luetellaan historiassa tallennuksen jälkeen, kun se koskee piirustustasi.

| CadCraftissa | Tallennetussa DWG:ssä |
|---|---|
| True color -värit (valittu värinvalitsimella) 2000-muodossa | Lähin vakiovari: 2000-muodossa on vain 255. Tallenna 2004-muodossa tai uudemmassa säilyttääksesi ne |
| Arkin nimetyt näkymät | Paperitilan näkymät: DWG ei kerro, mille arkille, joten kun CadCraft avaa tiedoston uudelleen, ne kuuluvat ensimmäiselle arkille |
| Monirivinen teksti leveyskertoimella | Normaali kirjainleveys: DWG:ssä leveyskerroin koskee vain yksirivistä tekstiä |
| Taso- tai lohkonimet merkeillä, joita DWG ei salli | Muutettu: linkitetyn piirustuksen nimi kuten `Base\|Walls` muuttuu muotoon `Base$0$Walls` (kuten linkitetyn piirustuksen sitominen nimeää), ja muut merkit muuttuvat merkiksi `_` |

### Miksi R12 ja mitä muunnetaan

Kun tallennat DXF:nä, CadCraft kirjoittaa DXF R12:n, version, jonka jokainen CAD-ohjelma voi avata. Se on vanhempi kuin jotkin ominaisuudet, joten muutama asia kirjoitetaan yksinkertaisemmassa muodossa:

| CadCraftissa | Tallennetussa R12-tiedostossa |
|---|---|
| Monirivinen teksti | Yksi tekstikohde riviä kohti |
| Ellipsit | Ellipsiä seuraavat murtoviivat |
| Viivoitukset (avatuista tiedostoista) | Vain niiden ääriviivat |
| True color -värit (valittu värinvalitsimella) | Lähin vakiovari |
| Viivanpaksuudet ja kohteiden omat viivatyyppimittakaavat | Jätetään pois: R12:ssa ei ole kumpaakaan (viivatyypit säilyvät) |
| Taso- ja lohkonimet | Kirjoitetaan isoilla kirjaimilla; välilyönnit ja muut merkit muuttuvat merkiksi `_`, ja nimet katkaistaan 31 merkkiin ("Title block" muuttuu muotoon `TITLE_BLOCK`) |
| Tasot, joiden plottaus on pois päältä | Muut ohjelmat plottaavat ne (CadCraft muistaa asetuksen, kun piirustuksessa on arkki) |
| Mitoitukset | Oikeita mitoituksia omine piirrettyine lohkoineen, joten muut ohjelmat näyttävät ne sellaisina kuin näet ne |
| Moniviitenuolet | Viivat, nuolenpää ja teksti, jotka ne piirtävät |
| Nimetyt näkymät | Säilyvät, nimet isoilla kirjaimilla; arkin näkymät palaavat ensimmäiselle arkille |
| Useita arkkeja | Ensimmäinen arkki on paperitila, jonka jokainen ohjelma näyttää; muut säilyvät lohkoina nimeltä `CCLAYOUT_1`, `CCLAYOUT_2` …, jotka CadCraft muuttaa takaisin arkeiksi avatessaan tiedoston |

Historia luettelee kunkin näistä, joka koski piirustustasi.

:::tip
Jos haluat jatkaa piirustuksen parissa usean päivän ajan, tallenna DXF:nä ja avaa se DXF seuraavalla kerralla. Kaikki, mitä CadCraft osaa piirtää, säilyy edestakaisella matkalla, mukaan lukien mitoitukset, lohkot ja kaikki arkit.
:::

## Linkitetyt piirustukset (ulkoiset viittaukset)

{{cmd:XATTACH}} (`XA`, tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Linkitä piirustus (xref)}}) linkittää toisen DWG:n tai DXF:n: valitse tiedosto ja napsauta sitten, minne se tulee ({{key:Enter}} sijoittaa sen pisteeseen 0,0). Se tulee yhtenä tiedoston mukaan nimettynä lohkona, oikeassa mittakaavassa, kun piirustuksilla on eri yksiköt. Sen tasot ja lohkot säilyttävät nimensä linkin nimi edessä — `Plan|Walls`, `Plan|Door` — joten ne eivät koskaan sekoitu omiisi: kytke linkitetyt tasot päälle ja pois, jäädytä tai lukitse ne kuten omasi. Linkki on vain luku: muuta toista piirustusta ja lataa se uudelleen. Se, mitä asetat linkin tasoille (väri, viivatyyppi, viivanpaksuus, päällä/pois, jäädytys, lukitus, plottaus), säilyy, kun lataat sen uudelleen, kun tallennat piirustuksen DWG:nä linkin vielä ollessa linkki ja kun toinen piirustus linkittää tämän.

{{cmd:XREF}} (`XR`): `?` luettelee linkit (ladatut tai ei, mikä tiedosto, kuinka monta viittausta); `A` liittää; `R` lataa yhden uudelleen tiedostostaan (valitse tiedosto uudelleen: selain ei yllä kansioihisi itse); `B` sitoo yhden (siitä tulee tavallisia lohkoja ja tasoja nimeltä `Plan$0$Walls`); `D` irrottaa yhden (sen viittaukset ja tasot poistuvat). Jokainen on yksi kumoamisvaihe.

{{cmd:XCLIP}} (`XC`) rajaa lohkoviittauksia ja linkkejä: valitse ne, `N` uudelle rajaukselle, sitten `R` ja kaksi kulmaa tai `P` ja monikulmion pisteet ({{key:Enter}} sulkee sen); `D` poistaa rajauksen. Vain sisällä oleva näkyy ja plottautuu, ja rajaus liikkuu viittauksen mukana. DWG ja DXF 2000 säilyttävät rajaukset; DXF R12 tallentaa viittauksen kokonaisena ja sanoo sen. Kun sidot linkin, jossa on rajattuja viittauksia, {{cmd:XREF}} `B` kysyy: `A` sitoo kaiken, `C` säilyttää vain kunkin viittauksen rajatun osan (viivat ja kaaret leikataan rajauksessa; tekstit ja sisäkkäiset lohkot jäävät, kun niiden lisäyspiste on sisällä).

Avaamasi piirustus voi linkittää tiedostoja, joita CadCraft ei näe: se kertoo, kuinka monta ei ole ladattu. Käytä {{cmd:XREF}}-komentoa, `R`, ja valitse kukin tiedosto nähdäksesi ne.

Kun tallennat, ladattu linkki **sidotaan** tiedostoon (muut ohjelmat näkevät tavallisia lohkoja ja tasoja nimeltä `Plan$0$…`), ja historia kertoo sen. Linkki, jota ei ole ladattu, pysyy linkkinä tiedostoonsa, DWG:ssä ja DXF:ssä.

## Avaa 3D:nä

{{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Avaa ModelCraftissa}} ({{cmd:OPENIN3D}}) avaa piirustuksen 3D-mallinnussovelluksessa uudessa välilehdessä DWG:nä lähettämättä sitä minnekään. Siellä tehdyt muutokset pysyvät siellä; tallenna ne siellä. Valikon kohta näkyy vain siellä, missä kyseinen sovellus voi ottaa vastaan luovutetun piirustuksen.

## PDF:n plottaus

Paina {{key:Mod+P}}, napsauta {{ui:Plottaa}} tai kirjoita `PLOT`. PDF tehdään selaimen sisällä ja ladataan tai avataan uuteen välilehteen tulostusta varten. Katso [Plottaa PDF:ksi](topic:plot-pdf).

## Minne tiedostot menevät

Jokainen tallennus ja plottaus on lataus, joten tiedostot päätyvät sinne, minne selaimesi sijoittaa lataukset: yleensä Lataukset-kansioon. Jos haluat valita kansion joka kerta, muuta selaimesi lataus-asetusta; [Selaimet ja tietokoneet](common:browsers) näyttää, missä.

Mitään avaamaasi tai tallentamaasi ei lähetetä meille. Katso [Minne tiedostosi menevät](common:your-files).

## PLN- ja PLA-projektitiedostot

CadCraft avaa DWG- ja DXF-piirustuksia, ei Archicadin omia tiedostoja (`.pln`, `.pla`, `.tpl`, `.bpn`). Sellaisen avaaminen kertoo, mikä se on. Tallenna Archicadissa tarvitsemasi näkymät tai asettelut DWG:nä ja avaa ne täällä tai vie malli IFC:nä ja avaa se BimCraftissa. Kun BimCraft voi ottaa tiedoston haltuunsa, CadCraft tarjoaa {{ui:Avaa BimCraftissa}}.

## Jos sivu sulkeutuu ennen tallennusta

CadCraft säilyttää kopion jokaisesta muuttamastasi piirustuksesta vain tässä selaimessa hetki muokkauksen lopettamisen jälkeen. Jos välilehti sulkeutuu, selain pysähtyy tai tietokone käynnistyy uudelleen ennen tallennusta, CadCraft kysyy **Palautetaanko työsi?** seuraavalla käynnistyskerralla: {{ui:Palauta}} avaa piirustuksen uudelleen tallentamattomana omassa välilehdessään. Piirustuksen tallennus poistaa sen kopion. Katso [Palauta työsi](common:recover).

## Online ja offline

Avaaminen, piirtäminen, tallennus (DWG ja DXF) ja plottaus tapahtuvat kaikki tietokoneellasi, joten ne toimivat ilman yhteyttä, kun CadCraft on latautunut.

Jos haluat käyttää CadCraftia täysin ilman yhteyttä, napsauta ylälaidan palkin {{ui:Tallenna offline-käyttöön}} online-tilassa. Nimike laskee ylöspäin ("Tallennetaan 40 / 212") ja päättyy tekstiin "Offline valmis". Tallennettu kopio sisältää DWG-lukijan, yhteensä noin 5 Mt, joten **myös DWG-tiedostot avautuvat offline-tilassa** tallennuksen jälkeen. Napsauta painiketta uudelleen saadaksesi {{ui:Tallenna uudelleen (hae uusin versio)}} tai {{ui:Poista offline-kopio}}. "Tallennus ei onnistunut" tarkoittaa, että joitakin tiedostoja ei ladattu: tarkista yhteys ja yritä napsauttamalla uudelleen. "Offline ei käytettävissä" tarkoittaa, ettei tämä selainikkuna voi säilyttää kopiota (yksityiset ikkunat ja jotkin hallitut tietokoneet).

Ilman tallennettua kopiota DWG-lukija haetaan ensimmäisellä DWG:n avauskerralla sivun latautumisen jälkeen, joten DWG:n avaaminen offline-tilassa voi epäonnistua; DXF-tiedostot eivät koskaan tarvitse sitä. Älä lataa sivua uudelleen offline-tilassa, ellei CadCraft ole tallennettu.

Katso lisätietoja aiheesta [Työskentely offline-tilassa](common:offline).

:::offline
Olet nyt offline-tilassa. Piirustukset tallentuvat DWG- tai DXF-muodossa ja plottautuvat normaalisti, ja DXF-tiedostot avautuvat. DWG-tiedostot avautuvat, jos CadCraft näyttää "Offline valmis" tai jos DWG-lukija on jo latautunut tähän välilehteen.
:::

## Rajoitteet tiedostoissa

Rajoitteet ja parametrit (katso [Rajoita piirustusta](topic:constraints)) tallennetaan sekä DWG:hen että DXF:ään. Jokaisella rajoitetulla kohteella on pieni CadCraft-merkintä (laajennettu data), ja käyttämätön lohko nimeltä `CADCRAFT_PARAMETRIC` sisältää rajoitteet ja parametritaulukon. Muut ohjelmat avaavat piirustuksen normaalisti ja ohittavat molemmat; ne voivat poistaa käyttämättömän lohkon puhdistaessaan. Merkinnät viittaavat kohteisiin niiden omalla avaimella, eivät tiedoston kahvoilla, joten kahvat uudelleen numeroiva ohjelma ei riko niitä. Kun toinen ohjelma on poistanut tai muuttanut rajoitetun kohteen, CadCraft poistaa sen rajoitteet tiedostoa avatessaan ja kertoo, kuinka monta. Tiedosto ilman niitä avautuu ilman rajoitteita.

Osamallintimesta viety luonnos (`.json`) avautuu myös: katso [Siirrä luonnoksia osamallintimiin ja niistä](topic:solidworks-sketches).

## Ei vielä käytettävissä

- Moniviitenuolet moniviitenuolikohteina tallennetussa DXF:ssä (R12:ssa niitä ei ole: ne tallennetaan siksi, mitä ne piirtävät).
- Kuvat tallennetussa DXF:ssä (ne tallentuvat kehyksinään; DWG säilyttää ne kuvina) ja peitteet, jotka piilottavat niiden alla olevan.
- DXF:n tallennus uudemmassa versiossa kuin 2000.
- Pilvitallennus ja synkronointi tietokoneiden välillä.

Koko luettelo on aiheessa [Ei vielä rakennettu](topic:not-built-yet).
