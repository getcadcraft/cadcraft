---
title: Mitä uutta versiossa 0.9
summary: Viivoitukset, jotka seuraavat rajaansa, tasoryhmät, pinotut kerrokset, 2D-älykkäät seinät, ovet ja ikkunat, tekstityylit ja muotoiltu tekstieditori, kelluva komentorivi, ruudukkotartunta, kymmenen tapaa piirtää kaari ja Asiakirjat-paneeli.
keywords: mitä uutta, 0.9, julkaisutiedot, muutosloki, viivoitus, assosiatiivinen viivoitus, hatch, hatchedit, pat-tiedosto, kuviotiedosto, tasoryhmät, kerrokset, pinotut kerrokset, floorlayers, älykkäät seinät, seinä, ovi, ikkuna, seinätyökalut, tekstityyli, tyyli, muotoiltu tekstieditori, kappaleteksti, muotoilu, kelluva komentorivi, komentorivi, ruudukkotartunta, F9, kaari, Asiakirjat-paneeli, uloskirjaus, Ison-Britannian teräskoot, draw.io, thai-teksti, DXF R12, 0.8, 0.8.1, versio, uudet ominaisuudet, automaattinen täydennys, haamu, sketchfix, photosketch, autosheet, detaljit, gridmove, autodim, tunnisteet, revisio, yhdistä, git, Fossil, access, piirtäminen ilman näköä, ruudunlukija, rajat, suuntakulmat, aunits, shx, kaavio, ole, historia, vertaa, sanoin, ominaisuudet, jalat ja tuumat, venytä, kielet, syöttölaitteet, ongelmat, live, avustajat
from: 8b6dea0b
---

Tämä on se, mitä muuttui versiossa 0.9 verrattuna versioon 0.8.1. CadCraft on 2D- ja 3D-piirto-ohjelma CadCraft Studio 0.9:ssä ja sen kahdeksassa sovelluksessa. Versio 0.9 viimeistelee pohjapiirustuksen, lisää tekstityylit ja oikean tekstieditorin sekä antaa enemmän tilaa näytölle.

## Uutta

### Pohjapiirustus

- **Viivoitukset, jotka seuraavat rajaansa.** {{cmd:HATCH}} liittyy siihen, mikä sen rajaa. Siirrä, kierrä tai skaalaa rajaa, ja viivoitus sekä sen kuvio seuraavat. Muokkaa sen muotoa, ja viivoitus lasketaan uudelleen. {{cmd:HATCHEDIT}} (`HE`) muuttaa viivoitusta jälkikäteen ja tekee tai lopettaa liitoksen. Katso [Viivoitus- ja täyttöalueet](topic:hatch).
- **Viivoituskuviotiedostot.** {{cmd:HATCH}}-kysymyksessä `Pick internal point` kirjoita `F` (Pattern file) ja valitse `.pat`-tiedosto. Vain tavanomaiseen muotoon kirjoitettuja tiedostoja on kokeiltu.
- **Tasoryhmät.** {{ui:Työkalut}} {{ui:Tasot}}-paneelissa: {{ui:Uusi ryhmä}}, {{ui:Lisää valmiit ryhmät}}, {{ui:Ryhmitä nimen mukaan}} ja {{ui:Etsi taso}}. Tai kirjoita {{cmd:LAYGROUP}} (`LG`). Katso [Järjestä piirustus tasoilla](topic:layers#group-layers).
- **Pinotut kerrokset.** {{cmd:FLOORS}} (`FLR`) tai {{ui:Kerrokset…}} {{ui:Näkymä}}-ryhmän {{ui:Lisää}}-valikosta. Arkin näkymäruutu voi näyttää yhden kerroksen kohdassa {{ui:Näytettävä kerros}} Ominaisuuksissa. {{cmd:FLOORLAYERS}} muuttaa kerrokset tasoiksi tiedostoa varten, joka menee jollekin toiselle. Katso [Pinoa kerrokset yhteen piirustukseen](topic:floors).
- **2D-älykkäät seinät, ovet ja ikkunat.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) ja {{cmd:DELOPENING}}. Kulmat, T-liitokset ja risteykset lasketaan automaattisesti. Seinät säilyttävät tiedon liitoksistaan, ja Ominaisuuksiin tulevat kohdat {{ui:Estä liitos alussa}} / {{ui:Estä liitos lopussa}}, {{ui:Sijaintiviiva}} ja muokattava {{ui:Pituus}}. Katso [Piirrä älykkäät 2D-seinät, ovet ja ikkunat](topic:walls-2d).
- **Seinätyökalu pohjapiirroksen seinille.** Kirjoita {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} ja muut. Niissä ei ole vielä työkalurivipainikkeita. Katso [Seinämuodot, leikkaukset, siirrot ja lukitukset (2D-seinät)](topic:wall-tools-2d).

### Teksti

- **Tekstityylit.** {{cmd:STYLE}} (`ST`) tai {{ui:Tekstityyli}} {{ui:Piirrä}}-työkalurivillä: nimetyt tyylit, joissa on fontti, korkeus, leveyskerroin ja kallistus. Katso [Aseta tekstin fontti ja koko tekstityyleillä](topic:text-styles).
- **Muotoiltu kappaleteksti -editori.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} tai tekstin kaksoisnapsautus avaa ruudun, jossa on fontti, koko, lihavointi, kursiivi, alleviivaus, yliviivaus, väri, tasaus sekä aste-, plus-miinus- ja halkaisijamerkit, sekä {{ui:OK}} ja {{ui:Peruuta}}. Katso [Muotoile kappaleteksti](topic:format-paragraph-text).
- **Kaavio draw.io XML -muodosta.** {{cmd:DIAGRAM}} (`T2D`) lukee myös liitetyn draw.io XML:n. Katso [Piirrä kaavio tekstistä](topic:text-to-diagram).
- **Thai-teksti PDF-plotissa.** Ennen se tulostui kysymysmerkkeinä.

### Lisää tilaa ja piirtoapuja

- **Kelluva, ohuempi komentorivi ja tiivis yläalue.** Vedä komentorivin otetta kellumaan sitä, vedä sen yläreunaa saadaksesi vähemmän rivejä, ja {{key:F2}} avaa historian. {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Komentorivi}} ja yläalueen valinnat ovat samat asetukset. Katso [Asetukset](topic:settings#command-line).
- **Kohteen tartunnan valikko.** Napsauta tilarivin {{ui:Tartunta}}-kohtaa hiiren oikealla tai kirjoita {{cmd:OSNAP}}.
- **Tartunta ruudukkoon.** Tilarivin {{ui:Ruudukkotartunta}}-painike tai {{key:F9}}: valitut pisteet siirtyvät lähimpään ruudukkopisteeseen, kun mikään kohteen tartunta ei ole ottanut pistettä.
- **Kaari kymmenellä tavalla ja Jatka.** {{ui:Kaari}} {{ui:Piirrä}}-työkalurivillä tai {{cmd:ARC}}: 3 pistettä, Start/Center/End -ryhmä ja Center/Start/End -ryhmä sekä Jatka (paina {{key:Enter}} alkupisteessä) viimeisestä viivasta, kaaresta tai murtoviivasta.
- **Asiakirjat-paneeli.** {{cmd:DOCUMENTS}} (`DOCS`) tai {{ui:Asiakirjat…}} {{ui:Näkymä}}-ryhmän {{ui:Lisää}}-valikosta: revisio, tila ja {{ui:Kuittaa ulos}} jokaiselle piirustukselle projektikansiossa. Se avautuu keskitettynä valintaikkunana. Katso [Asiakirjat](topic:documents).

### Tiedostot

- **Ison-Britannian teräskoot.** 976 profiilia Standard-paneelissa, kirjoitettuna kuten piirustuksissa (esimerkiksi `305x165x40 UB`).
- **Etelä-Afrikan paketit** (piirustuskäytäntö ja rakennusmääräykset) rakennusmääräysten lisäosan paketteina. Luvut eivät ole varmennettuja.
- **CadCraft-lisäosat,** lisätään tarpeen mukaan ja oletuksena pois päältä: sisätilojen valaistussuunnittelu, piirisuunnittelu (HDL asetteluksi), reititinkaiverrus, piirisimulointi, rullaketjun hammaspyörät ja rakennusmääräysten maakohtaiset paketit.

## Korjattu

- Viivoituksen siirtäminen, kiertäminen tai skaalaus jätti kuvionsa jälkeen.
- {{cmd:GRIDMOVE}} vei mukanaan koko pohjapiirroksen seinän, joka alkaa vain ruudukkoviivalta. Seinää arvioidaan nyt sen päiden perusteella.
- Ruudukko näkyi vain piirustuksen rajojen sisällä, vaikka rajat olivat pois päältä.
- Sivupaneelin lohkoluettelo vierii, ja nimi, joka ei ole lohko, luettelee sillä alkavat lohkot (”Did you mean”).
- DXF R12 -tiedostot, jotka AutoCAD hylkäsi (”Unknown group 1001 for table”), avautuvat nyt siellä.
- Hyvin suuret tiedostot (noin 70,000 kohdetta ja enemmän) eivät avautuneet virheellä ”Maximum call stack size exceeded”.
- DWG-tiedostot AutoCAD 2018 ja uudemmat, joilla on korkea ylläpitoversio, eivät avautuneet virheellä ”bad BITLONG code 11”.
- Kappaletekstin ruudussa valitulle osalle kirjoitettu uusi koko säilyttää valinnan.

## Kaikissa sovelluksissa

Ohjevihjeet jokaisessa säätimessä, jossa on vihje, käynnistysvihje, jonka voi sulkea, välilehtirivit, jotka vierivät, kun ne eivät mahdu, ja selainvälilehden otsikko, joka seuraa avointa piirustusta (`<drawing> - CadCraft | CadCraft`). {{ui:Asetukset}} › {{ui:Asettelu}} on nyt pudotusvalikko kaksirivisiä valintoja. Kielilista kohdassa {{ui:Asetukset}} on pidempi kuin versiossa 0.8. Live-yhteismuokkaus, Kirjasto-kokoelmat ja paino- ja lämpötilayksiköt on kuvattu Studio-muistiinpanoissa.

## Rehelliset rajat

- Kappaleteksteissä ei ole luettelomerkkejä tai numeroituja luetteloita, sarkainviivainta tai tasausta. Plotatut PDF-tiedostot asettavat tekstin fontilla Helvetica.
- Pohjapiirroksen seinät ovat suoria, joten kaari piirretään lyhyinä seinänpätkinä. Seinätyökalun yhteisön käsintarkistus on vielä tekemättä.
- Tasoryhmiä ei kirjoiteta AutoCADin omassa muodossa, joten AutoCAD näyttää tasaisen luettelon. Muut ohjelmat näyttävät kaikki kerrokset yhdessä, ellet aja {{cmd:FLOORLAYERS}}-komentoa.
- Asiakirjat-paneelia ei ole kokeiltu kahdella ihmisellä oikeassa jaetussa kansiossa. Reititinkaiverrusta ei ole ajettu yhdelläkään oikealla koneella. Valaistusarvio on tarkistettu fotonijäljitystä vastaan, ei toisella ohjelmalla. Insinöörilisäosat ovat tarkistusapuja, eivätkä ne korvaa insinöörin tarkastusta.
- Muut kielet kuin englanti ovat luonnoksia, ja osa uusista sanoista on vain englanniksi.

## Aiemmin: 0.8 ja 0.8.1

Tämä on se, mitä muuttui versioissa CadCraft 0.8 ja 0.8.1 verrattuna versioon 0.7. Versio 0.8 (1. marraskuuta 2026) lisää piirtoapuja, jotka toimivat omasta piirustuksestasi sääntöjen mukaan omalla tietokoneellasi ilman mallia. Versio 0.8.1 (2. marraskuuta 2026) korjaa sen jälkeen ilmoitetut virheet.

### Uutta

**Piirustus, joka täydentää ajatuksen**

- **Haamu näyttää, mitä tulee seuraavaksi.** Kun mitään komentoa ei suoriteta, harmaa katkoviivainen haamu näyttää, mitä piirustuksesi omat kaavat sanovat seuraavaksi: seuraava tolppa samalla välillä, portaiden seuraava askel tai huoneen puuttuva seinä. Paina {{key:Tab}} piirtääksesi sen yhtenä kumoamisvaiheena tai {{key:Esc}} hylätäksesi sen. Se tarkastelee vain uusimpia kohteita, joten se pysyy sujuvana suuressa piirustuksessa. Kytke pois kohdasta {{ui:Asetukset}} › {{ui:CadCraft}} tai komennolla {{cmd:AUTOCOMPLETE}} `Off`.
- **Seuraava piste viivaa piirtäessä.** Kesken komennon {{cmd:LINE}} tai {{cmd:PLINE}} haamu on seuraava piste: portaiden seuraava askel, suorakulmion neljäs kulma tai piste, joka sulkee sen. Tuo kohdistin lähelle sitä ja paina {{key:Tab}}, ikään kuin napsauttaisit siinä.
- **Kynäpiirrokset muuttuvat tarkaksi geometriaksi.** {{cmd:SKETCHFIX}}: piirrä karkeita vedoksia kynällä, hiirellä tai sormella, ja jokainen muuttuu siistiksi viivaksi, ympyräksi, kaareksi, suorakulmioksi tai murtoviivaksi, joka tarttuu jo piirrettyyn. Katso [Piirrä kynällä ja saa tarkka geometria](topic:sketch-with-a-pen).
- **Valokuva piirroksesta muuttuu piirustukseksi.** {{cmd:PHOTOSKETCH}} (`PSK`) löytää paperin valokuvasta, suoristaa perspektiivin, soveltaa antamaasi paperikokoa ja mittakaavaa ja jäljittää kynän viivat tasolle jokaiselle kynän värille. Kirjaimia ei jäljitetä.
- **Mitoitus sääntöjen mukaan.** {{cmd:AUTODIM}} (`ADIM`) tekee mitoitusketjuja valitsemiesi sivujen mukaan, kokonaiskoon, aukkojen leveydet, reikien halkaisijat ja `Grid`-komennolla ruudukkovälit. Se ei koskaan toista jo olemassa olevaa mitoitusta.
- **Siirrä ruudukkoviivaa, ja sarja seuraa.** {{cmd:GRIDMOVE}} (`GM`): seinät, jotka päättyvät ruudukkoviivaan, venyvät sen mukana, seinät viivan suuntaisesti, pilarit, sen kupla ja tunniste liikkuvat, ja sillä olevat mitoitukset mittaavat uuden välin. Yksi kumoamisvaihe.

**Arkit, detaljit ja tunnisteet**

- **Arkit, jotka asettuvat itse.** {{cmd:AUTOSHEET}} ottaa nimetyt näkymäsi (tai mallin erilliset osat), valitsee paperikoon ja vakiomittakaavan ja asettaa näkymät uusille arkeille, joissa on piirustusotsikko ja nimi- ja mittakaavatekstit. Kaikki pysyy muokattavana. Katso [Asettele arkit automaattisesti](topic:lay-out-sheets-for-me).
- **Yrityksesi detaljit, tarjottuna piirtäessä.** {{cmd:DETAILS}} (`DET`) pitää omat detaljilohkonsa. Kun valitsemasi vastaa yhtä lohkoa tasojen, lohkonimien ja muistiinpanojen sanojen perusteella, tilarivi kertoo siitä; valitse se ja sijoita. {{cmd:DETAILS}} › {{ui:Jaa}} laittaa luettelosi Asiakirjat-kansioon ja tuo mukaan sen, minkä tiimisi on lisännyt. Asetuksista tarjoukset voi kytkeä pois.
- **Tunnisteet lohkoille.** {{cmd:TAGS}} määrittää tunnisteen (sen tyypin, arvot joita se voi saada, lohkot, joihin se sovelletaan), asettaa sen valitsemillesi lohkoviitteille ja luettelee ne taulukkona, jonka voit tallentaa CSV-tiedostoksi. Määritykset säilyvät DWG-tiedostossa. Katso [Tunnisteet](topic:tags).
- **Piirustuksen rajat.** {{cmd:LIMITS}} asettaa piirustukselle suorakulmion: ruudukko täyttää sen, ja zoomaus Kaikki näyttää sen. Rajat näkyvät ääriviivana ja tallentuvat DWG- ja DXF-tiedostoihin paperirajojen kanssa. Katso [Aseta piirustuksen rajat](topic:drawing-limits).

**Työskentely muiden ihmisten ja muiden ohjelmien kanssa**

- **Muuta merkintä revisioksi.** {{cmd:REDLINE}} lukee MarkupCraft-ohjelman kirjoittaman paketin ja luettelee jokaisen muutoksen. Hyväksy tai hylkää kukin muistiinpanolla. Hyväksytyt saavat revisiopilven ja revisiolokin yhdessä kumoamisvaiheessa, ja tallennat vastaustiedoston, joka sulkee merkinnät MarkupCraft-ohjelmassa. Katso [Muuta merkintä revisioksi](topic:redline-to-revision).
- **Piirustukset, joita git ja Fossil voivat yhdistää.** Kun {{ui:Yhdistettävissä olevat tiedostot}} on päällä kohdassa {{ui:Asetukset}} › {{ui:CadCraft}}, jokainen kohde saa avaimen, joka ei muutu (tiedostot ovat noin 10 prosenttia suurempia). `cadcraft merge base ours theirs` yhdistää kahden ihmisen muokkaukset yhdestä DWG- tai DXF-tiedostosta kohde kerrallaan ja raportoi vain kohdat, joissa kaksi ihmistä muutti samaa asiaa. Katso [Yhdistä kaksi ihmistä yhden piirustuksen muokkaukset](topic:merge-drawings).
- **Mitä muuttui, sanoin.** Historian Vertaa-toiminto antaa selkeän luettelon: missä asiat muuttuivat, kuinka suuria alueet ovat, mitä lisättiin, poistettiin tai muutettiin, ja muokattu teksti. Katso [Kerro sanoin, mitä muuttui](topic:changes-in-words).
- **Suuntakulmat ja kulmat.** Kirjoita suunta merkkinä, kuten N45°23'30"E, tai asteina, minuutteina ja sekunteina, missä tahansa kulmaa kysytään. AUNITS asettaa, miten kulmat näytetään. Katso [Kirjoita ja näytä suuntakulmat ja kulmat](topic:bearings-and-angles).
- **Omat SHX-fontit.** Anna CadCraftille kansio SHX-fontteja, ja tekstityylit, jotka nimeävät ne, piirretään niillä näytöllä ja plotteissa. Katso [Piirrä teksti omilla SHX-fonteilla](topic:shx-fonts).
- **Kaavio tekstistä.** {{cmd:DIAGRAM}} lukee Mermaid-vuokaavion, PlantUML-komponenttikaavion, D2:n tai from-to-luettelon ja piirtää muokattavat lohkot ja yhdysviivat. Katso [Piirrä kaavio tekstistä](topic:text-to-diagram).
- **OLE-objektit DWG-tiedostossa.** {{cmd:OLELIST}} luettelee DWG-tiedoston OLE-objektit, joita CadCraft ei voi sijoittaa itse, ja sijoittaa kuvan kopion siihen kohtaan, jonka ilmoitat. Katso [Kuvat](topic:pictures#objects-from-other-programs-ole).
- **Laskelmasi pysyvät piirustuksen mukana.** Laskentataulukot ja suunnitteluperustelut säilytetään DWG-tiedostossa luokkataulukon kanssa.

**Piirtäminen ilman näköä**

- Ota käyttöön {{ui:Piirtäminen ilman näköä}} kohdassa {{ui:Asetukset}} (tai kirjoita {{cmd:ACCESS}} ja vastaa `On`). CadCraft lukee jokaisen komennon ja tuloksen ruudunlukijan kautta, kuvailee piirustuksen ja sen, mikä on kohdistimen lähellä, antaa siirtää kohdistinta ja valita pisteitä näppäimistöllä, ja toistaa äänen jokaiselle tartunnalle ja otteelle. Jos selaimesi tunnistaa puhetta tietokoneellasi, komennot voi sanoa ääneen. Katso [Piirrä ilman näköä](topic:draft-without-sight).

**Kaikissa sovelluksissa**

- **Kielet.** 54 kieltä, ja kymmenen on uutta: liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filipino, swahili ja uzbek. Muut kuin englanninkieliset ovat luonnoksia, kunnes äidinkielinen puhuja lukee ne.
- **Syöttölaitteet.** Kosketuslevy, kynä, 3D-hiiri, peliohjain ja MIDI-säätimet.
- **Työkalurivin rivit ja ominaisuusruudukko.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Työkalurivin rivit}} tarjoaa muissa sovelluksissa vaihtoehdot Rivitys, 2 riviä tai 1 rivi. CadCraft säilyttää oman asetuksensa kohdassa {{ui:Asetukset}} › {{ui:CadCraft}} (ks. [Työkalurivin rivit](topic:settings#toolbar-rows)). Yhteinen ominaisuusruudukko on kolmessa muussa sovelluksessa, ei CadCraftissa.
- **Ongelmat, Live ja lisäosat.** Yhteinen {{ui:Ongelmat}}-paneeli varoittaa kaikissa sovelluksissa. Live-näkymä kertoo, kuka on missä CadCraft Studiossa (ks. [Työskentele yhdessä piirustuksen parissa](topic:work-live)), ja lisäosaluettelo.
- **Yhdistä tekoälysi.** Yksi yhteys CadCraft Studiosta kaikkiin kahdeksaan sovellukseen, sovelluskohtainen taso: vain luku, ehdotus tai muokkaus, ja selkokielinen loki siitä, mitä avustaja teki. CadCraftissa ei ole omaa tekoälyä, ja Kysy kaikissa sovelluksissa käyttää yhdistämääsi tekoälyä.

### Korjattu versiossa 0.8.1

- **Ominaisuudet näyttivät 150 kohdassa 12'-6"** jalka- ja tuumapiirustuksissa. Kentät, jotka sovellus lukee itse, säilyttävät tekstinsä taas.
- **DWG-tiedostot, joiden luokkaosio luettiin väärän tyyppisenä** (GitHub cadcraft#5), avautuvat nyt oikein.
- **Ristikko ei enää näy ponnahdusikkunoiden takana.**
- **Studio ja pakatut versiot voivat vaihtaa kieltä käynnin aikana.** Ennen ne olivat vain englanniksi. Ei vielä testattu jokaisella alustalla: kerro meille, jos kieli ei vaihdu.
- **Tabletit pystysuunnassa** antavat ylimääräisen ruudukkokorkeuden piirtoalueelle, ja arkkitila alkaa 760 px:stä tai vähemmästä.
- **STRETCH ja LIMITS ristikkoikkunalla** raportoitiin Studio 0.8.0:ssa, ja ne olivat jo oikein 0.8:n verkkoversiossa. Ilmoittajan asennusohjelma oli vanhempi. Studio 0.8.1 sisältää ne.

### Ei vielä tässä versiossa

- **Versiot 0.8 ja 0.8.1 eivät ole koodin allekirjoittamia.** Windows voi varoittaa (valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}). Macissa napsauta CadCraft Studiota hiiren oikealla ja valitse {{ui:Avaa}}. Kauppaversiot ovat odottamassa, eikä iPad- ja iPhone-versiota ole rakennettu uudelleen versiolle 0.8.1.
- **Kynäpiirrokset ja valokuvat piirroksista** on kokeiltu vain keksityillä valokuvilla ja hiirellä, ei vielä oikealla kynällä, kosketusnäytöllä tai käsin piirretyllä paperipiirroksella.
- **Piirtäminen ilman näköä** on testattu automaattisilla tarkistuksilla, ei vielä ruudunlukijalla tai sokealla testaajalla.
- **Yksityiskohtien jakamista** ei ole tarkistettu kahden ihmisen voimin, eikä Team Cloud Plan -kansiota Asiakirjat-kansiona ole rakennettu.
- **Yhdistäminen** toimii CadCraftin DWG- ja DXF-tiedostoille. Muiden ohjelmien tiedostoille sama ei ole vielä rakennettu.
- **Kumoaminen eri ikkunoiden yli:** CadCraft ilmoittaa jokaisen valmistuneen vaiheen, mutta Studiossa ei ole vielä yhtä Kumoa-toimintoa kaikille sovelluksille. Jokainen sovellus kumoaa omat vaiheensa.
- **DWG-tiedoston OLE-objektit** säilyvät, mutta niitä ei piirretä paikoilleen.
- **Plottaustyylitaulukoiden (CTB-tiedostojen) lukeminen** muista ohjelmista on rakennettu, mutta sitä ei ole tarkistettu muiden ohjelmien tiedostoa vasten.
- **Yhdistä tekoälysi:** yhden napsautuksen yhteys Studiosta, hostattu liitin selaimen tekoälylle, oma API-avain Studiossa ja julkaistu MCP-paketti eivät ole lupauksia tässä julkaisussa.

Edellisestä versiosta katso [Mitä uutta versiossa 0.7](topic:whats-new-0-7).
