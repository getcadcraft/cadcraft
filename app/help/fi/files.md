---
title: Tiedostot: mitä avautuu, mitä tallentuu
summary: Muodot, joita CadCraft avaa, tallentaa ja vie, mitä säilytetään tai muunnetaan, ja minne tiedostot menevät.
keywords: xclip, clip, xclip boundary, bind clipped, dwg, dxf, pdf, r12, avaa, tallenna, vienti, tuonti, muodot, muuntaminen, lataus, saveas, dxfout, tallenna nimellä, dwg-tallennus, muoto, qsave, xref, xattach, linkitetty piirustus, ulkoinen viittaus, bind, reload, detach
from: b8c5778d
---

## Yleiskatsaus

| Muoto | Avaa | Tallenna | Huomautuksia |
|---|---|---|---|
| DXF (teksti tai binääri, mikä tahansa versio) | Kyllä | Kyllä, DXF R12, DXF 2000 tai DXF 2000 (binääri) | Binäärinen DXF avautuu kuten tekstimuotoinen ja tallentuu takaisin binäärinä. |
| DWG | Kyllä | Kyllä, DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 tai 2018) | CadCraftin oma DWG-kirjasto lukee ja kirjoittaa sen (AutoCAD R13 – 2018 -tiedostot). Alkuperäistä DWG-tiedostoasi ei muuteta koskaan. Vioittuneet tiedostot tai versiot, joita lukija ei käsittele, hylätään ilmoituksella. |
| PDF | Tuo sivun: pohjapiirroksena tai kohteina ([PDF-pohjapiirrokset](topic:pdf-underlay)) | Kyllä, tulostamalla | Arkin vektoripohjainen PDF tai mallin PDF mittakaavassa. |

Jokainen avaamasi piirustus (tai piirustus, joka aloitetaan {{ui:Uusi}}-toiminnolla) saa oman välilehden piirtoalueen yläpuolelle. Uutta piirustusta, johon kukaan ei ole vielä koskenut, käytetään välilehden lisäämisen sijaan. Napsauta välilehteä vaihtaaksesi, sen {{ui:×}}-painiketta sulkeaksesi sen (CadCraft kysyy ensin, jos on tallentamattomia muutoksia), tai asettele avoimet piirustukset rinnakkain: katso [Jaa näyttö](topic:split-screen).

## Piirustuksen avaaminen

- Paina {{key:Mod+O}}, napsauta {{ui:Avaa}}, tai kirjoita `OPEN` ja valitse tiedosto.
- Tai vedä `.dwg`- tai `.dxf`-tiedosto piirtoalueelle.

Tiedosto luetaan selaimessasi. Sitä ei lähetetä minnekään. Historia kertoo, kuinka monta kohdetta ja tasoa tuli sisään ja kuinka kauan se kesti, ja vasemman paneelin {{ui:Piirustus}}-osio näyttää muodon, esimerkiksi ”DWG 2018 (AC1032)”.

DWG-lukija on osa CadCraftia, ja se haetaan ensimmäisen DWG-tiedostosi avaamisen yhteydessä sivun latauksen jälkeen (muutama sata kt), joten erillistä latausta ei tarvitse odottaa. Se lukee tiedostoa taustalla, joten sivu reagoi edelleen, kun iso DWG avautuu.

DXF luetaan noin 4 MB:n paloina, ei koko tekstinä, joten yli 512 MB:n DXF avautuu myös. Rajoittava tekijä on tietokoneesi muisti: DXF:n avautuessa kannattaa varautua siihen, että se käyttää noin 16–20 kertaa tiedoston kokoa (100 MB:n DXF, jossa on noin 690 000 kohdetta, käytti testissämme noin 1,5 GB).

### Mikä tulee sisään

- Viivat, kaaret, ympyrät, murtoviivat (kaariosuuksilla), ellipsit, pisteet, teksti ja monirivinen teksti, täytöt, viivoitukset (vakiokuviot piirretään viivoina, muut tasaisena sävynä), lohkoviitteet attribuutteineen (arvot, joita voi muokata; katso [Lohkon attribuutit](topic:attributes)), mitoitukset sekä asettelut näkymäruutuineen.
- Splinet tulevat sisään splineinä (aste, kontrollipisteet, solmut, painot, sovituspisteet); katso [Splinet ja murtoviivat](topic:splines).
- Monijohtoiset viittaukset, joissa on yksi johtoviiva ja teksti, tulevat sisään muokattavina CadCraftin monijohtoisina viittauksina (katso {{cmd:MLEADER}}). Muut (joissa on lohko, useita johtoviivoja tai kaarevia viivoja) piirretään niin kuin toinen ohjelma ne piirsi, ja ne liikkuvat yhtenä kokonaisuutena; historia kertoo, kuinka monta.
- Kuvat näkyvät kehyksenä kuvan tiedostonimellä, kunnes annat CadCraftille tiedoston komennolla {{cmd:IMAGE}}: katso [Kuvat piirustuksessa](topic:pictures#show-the-pictures-a-dwg-uses). Peitteet näkyvät kehyksinään, ja niiden alla oleva pysyy näkyvissä.
- Taulukot DWG:ssä tulevat sisään niin kuin toinen ohjelma ne piirsi.
- 3D-pinnat mallitilassa tulevat sisään {{ui:3D}}-välilehdelle, eivät 2D-kohteina; samoin lohkojen sisällä olevat, kerran per lohkoviite mallissa. Lohkossa ja arkilla ne piirretään myös tasaisina ääriviivoina. Katso [Malli 3D:nä](topic:3d-solids).
- Tasot säilyttävät värinsä, päällä-, jäädytys-, lukitus- ja tulostusasetuksensa. DEFPOINTS ei tulostu koskaan.
- Mitoitukset muuttuvat todellisiksi, muokattaviksi CadCraft-mitoituksiksi, kun niiden pisteet voidaan lukea. Ne näytetään ensin täsmälleen niin kuin toinen ohjelma ne piirsi; heti kun muutat yhtä, CadCraft piirtää sen omalla tyylillään uudelleen.
- Jokainen asettelu tulee arkkivälilehdeksi. Toisessa ohjelmassa jokaisella asettelulla on piilotettu ensimmäinen näkymäruutu, joka on itse arkki; CadCraft jättää sen pois.

### Mitä ei vielä tule sisään

Mitä CadCraft ei voi piirtää, lasketaan eikä arvata. Vasemman paneelin ”Tiedoston tiedot” -ruutu luettelee ne kohdassa ”Ei vielä näytetty:” ja jokaisen kohdetyypin ja määrän. Tyypillisiä tapauksia ovat taulukot DXF:ssä, verkot ja 3D-kiintokappaleet lohkojen sisällä. Mallitilan 3D-kiintokappaleet, alueet ja rungot näkyvät 3D-välilehdellä (katso [Malli 3D:nä](topic:3d-solids#solids-from-other-programs)). Tiedostossa vinoksi käännetyt näkymäruudut näkyvät kierrettyinä, kuten siellä, ja säilyttävät kiertonsa tallennettaessa; samoin nykyinen UCS, nimetyt UCS:t ja käännetty näkymä.

Teksti piirretään yhdellä Helvetica-tyylisellä fontilla. Tarra, joka mahtuu yhdelle riville alkuperäisen ohjelman kapeammalla fontilla, voi rivittyä kahdelle riville CadCraftissa.

## Tallentaminen

On kolme tapaa tallentaa. Jokainen lataa kopion.

- **Tallenna**: paina {{key:Mod+S}}, napsauta {{ui:Tallenna}}, tai kirjoita `SAVE` (myös `QSAVE`). Se tallentaa piirustuksen muodossa: DWG, jos avasit DWG:n, DXF, jos avasit DXF:n. DWG säilyttää version, jolla se tuli (2018-tiedosto tallentuu 2018-versiona). Uusi piirustus käyttää muotoa ja DWG-versiota, jonka valitsit viimeksi selaimessa kohdasta Tallenna nimellä; jos et ole valinnut mitään, DWG AutoCAD 2000 -muodossa.
- **Tallenna nimellä**: paina {{key:Mod+Shift+S}}, napsauta {{ui:Tallenna nimellä}}, tai kirjoita `SAVEAS`. Valintaikkuna {{ui:Tallenna kopio nimellä}} tarjoaa {{ui:DWG}}-muodon, {{ui:Versio}}-luettelon (AutoCAD 2018, 2013, 2010, 2007, 2004 tai 2000), {{ui:DXF R12}}- ja {{ui:DXF 2000}}-muodot, kukin annetulla tiedostonimellä, ja piirustuksen nykyisen muodon ja version jo valittuina. Napsauta {{ui:Tallenna}} ladataksesi, tai {{ui:Peruuta}} (tai {{key:Esc}}) jos et halua tallentaa mitään; historia sanoo silloin ”Ei tallennettu.” Valintasi jää voimaan: {{key:Mod+S}} käyttää sitä tälle piirustukselle siitä lähtien, ja uudet piirustukset tässä selaimessa aloittavat sillä.
- **DXFOUT**: kirjoita `DXFOUT`. Se lataa aina DXF R12 -kopion, ja seuraava {{key:Mod+S}} tallentaa silti piirustuksen omassa muodossaan.

Selain lataa tiedoston nimellä `<piirustuksen nimi>.dwg` tai `<piirustuksen nimi>.dxf`. Jokainen tallennus on **uusi lataus**; avaamaasi tiedostoa ei korvata eikä muuteta koskaan. Historia vahvistaa sen, esimerkiksi ”Tallennettu kopio nimellä Plan.dwg (DWG (AutoCAD 2018)). Alkuperäinen Plan.dxf on ennallaan.” DXF:n kohdalla se sanoo ”(DXF R12, avautuu missä tahansa CAD-ohjelmassa)”. Sen alla olevat rivit luettelevat kaiken, mikä muuttui matkalla.

Kun CadCraft toimii työpöytäsovelluksena, tallennus toimii kuten muissa työpöytäohjelmissa: {{key:Mod+S}} kirjoittaa piirustuksen takaisin avaamaasi tiedostoon sen omassa muodossa ja versiossa, ja historia kertoo, minne se tallennettiin. {{ui:Tallenna nimellä}} ja viennit näyttävät järjestelmän tallennusikkunan, ja `.dwg`-, `.dxf`- tai `.ccsheets`-tiedosto, jonka kaksoisnapsautat, avautuu CadCraftissa.

PDF-tiedostoa varten tulosta sen sijaan (katso alla).

## Mitä DWG säilyttää ja muuttaa

CadCraft kirjoittaa DWG:n itse selaimessasi samalla DWG-kirjastolla, jolla se lukee. Valitse versio kohdasta Tallenna nimellä: AutoCAD 2000 -muoto (tiedostoversio AC1015) avautuu useimmissa ohjelmissa, myös vanhoissa; uudemmat muodot (2004, AC1018 – 2018, AC1032) säilyttävät myös todelliset värit. Mitään ei lähetetä, ja DWG:n tallennus toimii ilman yhteyttä.

Jokainen versio tarkistetaan lukemalla tallennetut tiedostot takaisin kolmen muun ohjelman DWG-lukijalla ja CadCraftin omalla lukijalla. CadCraftin DWG:tä ei ole vielä avattu itse AutoCADissa.

### Mitä DWG säilyttää

- Viivat, kaaret, ympyrät, ellipsit, pisteet ja murtoviivat kaariosuuksineen.
- Yhden rivin teksti tasauksineen ja leveyskertoimineen.
- Monirivinen ja rivitetty teksti monirivisenä tekstinä. Toinen ohjelma rivittää sen uudelleen samasta leveydestä.
- Kohteiden värit: tason mukaan, lohkon mukaan, 255 vakiovärin mukaan ja todelliset värit 2004-muodosta alkaen.
- Tasot värillään, viivatyypillään, viivanpaksuudellaan sekä päällä-, jäädytys-, lukitus- ja tulostusasetuksillaan; kohteiden omat viivatyypit, viivanpaksuudet ja viivatyyppien mittakaavat, viivatyyppikuviot sekä piirustuksen viivatyypin mittakaava.
- Piirustusyksiköt ja pituuden muoto (desimaali, jalat ja tuumat, murtoluvut …).
- Lohkot tukipisteineen ja attribuuttimäärityksineen, myös näkymättömät, vakio- ja esiasetetut.
- Lohkoviitteet mittakaavineen, kiertoineen ja attribuuttiarvoineen.
- Täytöt, ja kuviolliset viivoitukset kuvioineen, mittakaavoineen ja kulmineen (kuvion omat viivat, joten muut ohjelmat piirtävät samat viivat kuin CadCraft).
- Mitoitukset todellisina mitoituksina: muut ohjelmat mittaavat ne uudelleen, kun niitä venytetään. Jokainen säilyttää omat asetuksensa (tekstin korkeus, nuolen koko, desimaalit, pituuden muoto) ja tekstinsä, ja kantaa jokaisen DWG-mitoituksen piirrettyä kopiota.
- Arkit (asettelut): jokainen arkki paperikokoineen ja yksikköineen, sen piirretty sisältö ja näkymäruudut näkymineen ja mittakaavoineen.
- Nimetyt näkymät.
- Monijohtoiset viittaukset monijohtoisina viittauksina.
- Taso- ja lohkonimet kirjoitettuina, isoilla ja pienillä kirjaimilla. (DXF R12 kirjoittaa ne isoilla kirjaimilla.)

### Mitä DWG muuttaa

Jokainen näistä luetellaan historiassa tallennuksen jälkeen, kun se koskee piirustustasi.

| CadCraftissa | Tallennetussa DWG:ssä |
|---|---|
| Todelliset värit (valittu värinpoimijalla) 2000-muodossa | Lähin vakioväri: 2000-muodossa on vain 255. Tallenna 2004 tai uudempana säilyttääksesi ne |
| Arkin nimetyt näkymät | Paperitilan näkymät: DWG ei kerro, mille arkille ne kuuluvat, joten kun CadCraft avaa tiedoston uudelleen, ne kuuluvat ensimmäiselle arkille |
| Monirivinen teksti leveyskertoimella | Normaali kirjainleveys: DWG:ssä leveyskerroin koskee vain yhden rivin tekstiä |
| Taso- tai lohkonimet merkeillä, joita DWG ei salli | Muutettu: linkitetystä piirustuksesta peräisin oleva nimi, kuten `Base\|Walls`, muuttuu muotoon `Base$0$Walls` (niin kuin linkitetyn piirustuksen sitominen nimeää sen), ja muut merkit muuttuvat merkiksi `_` |

### Miksi R12, ja mitä muuntuu

Kun tallennat DXF-muodossa, CadCraft kirjoittaa DXF R12:n, version, jonka jokainen CAD-ohjelma osaa avata. Se on vanhempi kuin jotkin ominaisuudet, joten muutamat asiat kirjoitetaan yksinkertaisemmassa muodossa:

| CadCraftissa | Tallennetussa R12-tiedostossa |
|---|---|
| Monirivinen teksti | Yksi tekstikohde per rivi |
| Ellipsit | Ellipsiä seuraavat murtoviivat |
| Täytöt (avatuista tiedostoista) | Pelkät ääriviivat |
| Todelliset värit (valittu värinpoimijalla) | Lähin vakioväri |
| Viivanpaksuudet ja kohteiden omat viivatyyppien mittakaavat | Jätetään pois: R12:ssa niitä ei ole (viivatyypit säilyvät) |
| Taso- ja lohkonimet | Kirjoitetaan isoilla kirjaimilla; välilyönnit ja muut merkit muuttuvat merkiksi `_`, ja nimet katkaistaan 31 merkkiin (”Title block” muuttuu muotoon `TITLE_BLOCK`) |
| Tasot, jotka on asetettu olemaan tulostumatta | Muut ohjelmat tulostavat ne (CadCraft muistaa asetuksen, kun piirustuksessa on arkki) |
| Mitoitukset | Todellisia mitoituksia omine piirrettyine lohkoineen, joten muut ohjelmat näyttävät ne niin kuin näet ne |
| Monijohtoiset viittaukset | Viivat, nuolenpää ja teksti, jotka ne piirtävät |
| Nimetyt näkymät | Säilyvät, nimet isoilla kirjaimilla; arkin näkymät palaavat ensimmäiselle arkille |
| Useat arkit | Ensimmäinen arkki on paperitila, jonka jokainen ohjelma näyttää; muut säilytetään lohkoina nimeltä `CCLAYOUT_1`, `CCLAYOUT_2` … joista CadCraft tekee takaisin arkkeja, kun se avaa tiedoston |

Historia luettelee jokaisen näistä, joka koski piirustustasi.

:::tip
Jos jatkat piirustuksen työstämistä useiden päivien ajan, tallenna DXF-muotoon ja avaa se DXF:nä seuraavalla kerralla. Kaikki, minkä CadCraft voi piirtää, säilyy kierroksen läpi, mukaan lukien mitoitukset, lohkot ja kaikki arkit.
:::

## Linkitetyt piirustukset (ulkoiset viittaukset)

{{cmd:XATTACH}} (`XA`, tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Linkitä piirustus (xref)}}) linkittää toisen DWG:n tai DXF:n: valitse tiedosto ja napsauta kohtaa, johon se menee ({{key:Enter}} sijoittaa sen kohtaan 0,0). Se tulee sisään yhtenä lohkona, joka on nimetty tiedoston mukaan, oikeassa mittakaavassa, jos kahdella piirustuksella on eri yksiköt. Sen tasot ja lohkot säilyttävät nimensä linkin nimi edessään: `Plan|Walls`, `Plan|Door`, joten ne eivät sekoitu omiisi. Linkitetyt tasot kytketään päälle ja pois, jäädytetään ja lukitaan kuten omat. Linkki on vain luku -tilassa: muuta toista piirustusta ja lataa linkki uudelleen. Mitä asetat linkin tasoille (väri, viivatyyppi, viivanpaksuus, päällä/pois, jäädytys, lukitus, tulostus), säilyy, kun lataat sen uudelleen, kun tallennat piirustuksen DWG:nä linkin ollessa yhä linkki, ja kun toinen piirustus linkittää tämän.

{{cmd:XREF}} (`XR`): `?` luettelee linkit (ladatut tai ei, mikä tiedosto, kuinka monta viitettä); `A` liittää; `R` lataa yhden uudelleen tiedostostaan (valitse tiedosto uudelleen: selain ei pääse kansioihisi itsestään); `B` sitoo yhden (siitä tulee tavallisia lohkoja ja tasoja nimellä `Plan$0$Walls`); `D` irrottaa yhden (sen viitteet ja tasot poistuvat). Jokainen on yksi kumoamisvaihe.

{{cmd:XCLIP}} (`XC`) leikkaa lohkoviitteitä ja linkkejä: valitse ne, `N` uudelle rajalle, sitten `R` ja kaksi kulmaa tai `P` ja monikulmion pisteet ({{key:Enter}} sulkee sen); `D` poistaa leikkauksen. Vain rajan sisäpuoli näkyy ja tulostuu, ja leikkaus liikkuu viitteen mukana. DWG ja DXF 2000 säilyttävät leikkaukset; DXF R12 tallentaa viitteen kokonaisena ja kertoo siitä. Kun sidot linkin, jolla on leikattuja viitteitä, {{cmd:XREF}} `B` kysyy: `A` sitoo kaiken, `C` säilyttää vain kunkin viitteen leikatun osan (viivat ja kaaret leikataan rajalla; tekstit ja sisäkkäiset lohkot säilyvät, kun niiden lisäyspiste on sisällä).

Avaamasi piirustus voi linkittää tiedostoja, joita CadCraft ei näe: se kertoo, kuinka monta ei ole ladattu. Käytä {{cmd:XREF}}-komentoa, `R`-valintaa ja valitse jokainen tiedosto nähdäksesi ne.

Kun tallennat, ladattu linkki **sidotaan** tiedostoon (muut ohjelmat näkevät tavalliset lohkot ja tasot nimillä `Plan$0$…`), ja historia kertoo siitä. Ladaamaton linkki pysyy linkkinä tiedostoonsa sekä DWG:ssä että DXF:ssä.

## Avaa 3D:nä

{{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Avaa ModelCraftissa}} ({{cmd:OPENIN3D}}) avaa piirustuksen 3D-mallinnussovelluksessa uudessa välilehdessä DWG-tiedostona, lähettämättä sitä mihinkään. Siellä tehdyt muutokset pysyvät siellä; tallenna ne siellä. Valikon kohta näkyy vain siellä, missä tuo sovellus voi ottaa luovutetun piirustuksen vastaan.

## PDF:n tulostaminen

Paina {{key:Mod+P}}, napsauta {{ui:Plottaa}}, tai kirjoita `PLOT`. PDF tehdään selaimessa ja ladataan, tai avataan uudessa välilehdessä tulostamista varten. Katso [Plottaus PDF:ksi](topic:plot-pdf).

## Minne tiedostot menevät

Jokainen tallennus ja jokainen tulostus on lataus, joten tiedostot päätyvät minne selaimesi lataukset menevät: yleensä Lataukset-kansioon. Jos haluat valita kansion joka kerta, muuta selaimesi latausasetusta; [Selaimet ja tietokoneet](common:browsers) näyttää missä.

Mitään avaamaasi tai tallentamaasi ei lähetetä meille. Katso [Missä tiedostosi ovat](common:your-files).

## PLN- ja PLA-projektitiedostot

CadCraft avaa DWG- ja DXF-piirustuksia, ei Archicadin omia tiedostoja (`.pln`, `.pla`, `.tpl`, `.bpn`). Niiden avaaminen kertoo, mitä ne ovat. Tallenna Archicadissa tarvitsemasi näkymät tai asettelut DWG:nä ja avaa ne täällä, tai vie malli IFC:nä ja avaa se BimCraftissa. Kun BimCraft voi ottaa tiedoston vastaan, CadCraft tarjoaa {{ui:Avaa BimCraftissa}}.

## Jos sivu sulkeutuu ennen tallennusta

CadCraft tallentaa kopion jokaisesta muuttamastasi piirustuksesta vain tähän selaimeen, hetken kuluttua siitä, kun lopetat muokkaamisen. Jos välilehti sulkeutuu, selain pysähtyy tai tietokone käynnistyy uudelleen ennen tallennusta, CadCraft kysyy seuraavalla käynnistyskerralla **Palautetaanko työsi?** {{ui:Palauta}} avaa piirustuksen uudelleen, tallentamattomana, omassa välilehdessään. Piirustuksen tallentaminen poistaa sen kopion. Katso [Työn palauttaminen](common:recover).

## Verkossa ja offline-tilassa

Avaaminen, piirtäminen, tallentaminen (DWG ja DXF) ja tulostaminen tapahtuvat kaikki tietokoneellasi, joten ne toimivat ilman yhteyttä, kun CadCraft on ladattu.

Jotta CadCraft toimii täysin ilman yhteyttä, napsauta yläpalkin {{ui:Tallenna offline-käyttöön}} silloin, kun olet verkossa. Teksti laskee ylöspäin (”Tallennetaan 40 / 212”) ja päättyy tekstiin ”Offline valmis”. Tallennettu kopio sisältää DWG-lukijan, yhteensä noin 5 MB, joten **DWG-tiedostot avautuvat myös offline-tilassa**, kun se on tallennettu. Napsauta painiketta uudelleen kohtaa {{ui:Tallenna uudelleen (hae uusin versio)}} tai {{ui:Poista offline-kopio}} varten. ”Tallennus ei onnistunut” tarkoittaa, että jotkin tiedostot eivät latautuneet: tarkista yhteys ja napsauta yrittääksesi uudelleen. ”Offline-tila ei ole käytettävissä” tarkoittaa, että tämä selainikkuna ei voi säilyttää kopiota (yksityiset ikkunat ja jotkin hallinnoidut tietokoneet).

Ilman tallennettua kopiota DWG-lukija haetaan, kun avaat ensimmäisen DWG:n sivun latauksen jälkeen, joten DWG:n avaaminen offline-tilassa voi epäonnistua; DXF-tiedostot eivät tarvitse sitä koskaan. Älä lataa sivua uudelleen offline-tilassa, ellei CadCraft ole tallennettu.

Katso lisätietoja kohdasta [Työskentely offline-tilassa](common:offline).

:::offline
Olet nyt offline-tilassa. Piirustukset tallentuvat DWG- tai DXF-muodossa ja tulostuvat normaalisti, ja DXF-tiedostot avautuvat. DWG-tiedostot avautuvat, jos CadCraft näyttää ”Offline valmis” tai DWG-lukija on jo ladattu tässä välilehdessä.
:::

## Rajoitteet tiedostoissa

Rajoitteet ja parametrit (katso [Rajoita piirustus](topic:constraints)) tallennetaan sekä DWG:hen että DXF:ään. Jokainen rajoitettu kohde kantaa pientä CadCraft-merkintää (laajennettua dataa), ja käyttämätön lohko nimeltä `CADCRAFT_PARAMETRIC` pitää sisällään rajoitteet ja parametritaulukon. Muut ohjelmat avaavat piirustuksen normaalisti ja jättävät molemmat huomiotta; ne voivat poistaa käyttämättömän lohkon puhdistaessaan. Merkinnät viittaavat kohteisiin niiden omalla avaimella, ei tiedoston kahvoilla, joten ohjelma, joka uudelleennumeroi kahvat, ei riko niitä. Kun toinen ohjelma on poistanut tai muuttanut rajoitettua kohdetta, CadCraft pudottaa siitä rajoitteet, kun se avaa tiedoston, ja kertoo montako. Tiedosto ilman niitä avautuu ilman rajoitteita.

Osa projektia, joka on viety osamallintajasta (`.json`), avautuu myös: katso [Siirrä luonnoksia osamallintajien välillä](topic:solidworks-sketches).

## Ei vielä saatavilla

- Monijohtoiset viittaukset monijohtoisina kohteina tallennetussa DXF:ssä (R12:ssa niitä ei ole: ne tallennetaan piirtämänsä asiana).
- Kuvat tallennetussa DXF:ssä (ne tallentuvat kehyksinään; DWG säilyttää ne kuvina), ja peitteet, jotka piilottavat alla olevan.
- DXF-version tallentaminen uudempana kuin 2000.
- Pilvitallennus ja synkronointi tietokoneiden välillä.

Kaikki luettelo on kohdassa [Ei vielä toteutettu](topic:not-built-yet).
