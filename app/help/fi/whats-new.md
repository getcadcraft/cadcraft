---
title: Uutta versioissa 0.8 ja 0.8.1
summary: Haamu, joka viimeistelee piirustuksesi, kynäluonnokset ja luonnoskuvat muutettuna geometriaksi, arkit, jotka asettuvat itsestään, piirtäessä tarjotut detaljit, GRIDMOVE ja AUTODIM, tunnisteet, yhdistettävät tiedostot, punamerkinnät muutettuna revisioiksi, piirtäminen ilman näköä, piirustuksen rajat, suuntakulmat, SHX-kirjasimet, tekstistä tehdyt kaaviot sekä korjaukset versiossa 0.8.1.
keywords: mitä uutta, what's new, julkaisutiedot, muutosloki, muutokset, 0.8, 0.8.1, versio, uudet ominaisuudet, automaattitäydennys, haamu, Tab, sketchfix, photosketch, autosheet, detaljit, gridmove, autodim, tunnisteet, punamerkintä, yhdistäminen, git, fossil, saavutettavuus, piirtäminen ilman näköä, ruudunlukija, rajat, suuntakulmat, aunits, shx, kaavio, ole, historia, vertaa, sanoin, ominaisuudet, jalat ja tuumat, venytä, kielet, syöttölaitteet, ongelmat, live, avustajat
from: 9dd82db5
---

Tämä on muuttunut CadCraft 0.8:ssa ja 0.8.1:ssä verrattuna versioon 0.7. Versio 0.8 (1. marraskuuta 2026) lisää piirtämisen apuvälineitä, jotka toimivat omasta piirustuksestasi, tietokoneesi sääntöjen mukaan ja ilman mallia. Versio 0.8.1 (2. marraskuuta 2026) korjaa virheitä, jotka ilmoitettiin julkaisun jälkeen.

## Uutta

### Piirustus, joka viimeistelee ajatuksesi

- **Haamu näyttää, mitä tulee seuraavaksi.** Kun mitään komentoa ei ole käynnissä, harmaa katkoviivainen haamu näyttää, mitä piirustuksesi omat kuviot ennustavat seuraavaksi: seuraavan pilarin samalla välillä, portaan seuraavan askelman tai huoneen puuttuvan seinän. Piirrä se yhtenä kumoamisvaiheena painamalla {{key:Tab}}, tai hylkää se painamalla {{key:Esc}}. Haamu tarkastelee vain uusimpia kohteita, joten se pysyy sujuvana suuressa piirustuksessa. Kytke se pois kohdasta {{ui:Asetukset}} › {{ui:CadCraft}} tai komennolla {{cmd:AUTOCOMPLETE}} `Off`.
- **Seuraava piste viivaa piirtäessä.** {{cmd:LINE}}- tai {{cmd:PLINE}}-komennon aikana haamu on seuraava piste: portaan seuraava askel, suorakulmion neljäs kulma tai piste, joka sulkee sen. Vie kohdistin sen lähelle ja paina {{key:Tab}}, aivan kuin olisit napsauttanut siihen.
- **Kynäluonnokset muuttuvat tarkaksi geometriaksi.** {{cmd:SKETCHFIX}}: piirrä karkeita vetoja kynällä, hiirellä tai sormella, ja jokainen muuttuu siistiksi viivaksi, ympyräksi, kaareksi, suorakulmioksi tai murtoviivaksi, joka tarttuu siihen, mikä on jo piirretty. Katso [Piirrä kynällä ja saa tarkka geometria](topic:sketch-with-a-pen).
- **Luonnoksen valokuva muuttuu piirustukseksi.** {{cmd:PHOTOSKETCH}} (`PSK`) löytää paperin kuvasta, oikaisee perspektiivin, käyttää antamaasi paperikokoa ja mittakaavaa ja jäljittää kynäviivat tasolle kullekin kynän värille. Kirjoitusta ei jäljitetä.
- **Mitoita sääntöjen mukaan.** {{cmd:AUTODIM}} (`ADIM`) tekee mittaketjuja valitsemillesi sivuille, kokonaismitan, aukkojen leveydet, reikien halkaisijat ja komennolla `Grid` ruudukon välit. Se ei koskaan toista mittaa, joka on jo olemassa.
- **Siirrä ruudukon viivaa, ja sarja seuraa.** {{cmd:GRIDMOVE}} (`GM`): ruudukon viivaan päättyvät seinät venyvät sen mukana, sen suuntaiset seinät, pilarit sekä sen kupla ja tunniste siirtyvät, ja sen mitat mittaavat uuden välin. Yksi kumoamisvaihe.

### Arkit, detaljit ja tunnisteet

- **Arkit, jotka asettuvat itsestään.** {{cmd:AUTOSHEET}} ottaa nimetyt näkymäsi (tai mallin erilliset osat), valitsee paperikoon ja vakiomittakaavan ja sijoittaa näkymät uusille arkeille piirustusotsikolla ja nimi- ja mittakaavatekstillä. Kaikki pysyy muokattavana. Katso [Asettele arkit puolestani](topic:lay-out-sheets-for-me).
- **Yrityksesi detaljit, tarjottuina piirtäessä.** {{cmd:DETAILS}} (`DET`) pitää omat detaljilohkosi. Kun valintasi vastaa jotakin niistä tasojen, lohkonimien tai huomautusten sanojen perusteella, tilarivi kertoo siitä. Valitse se ja sijoita. {{cmd:DETAILS}} › Jaa tallentaa listasi Asiakirjat-kansioosi ja tuo mukaan sen, minkä tiimisi on lisännyt. Asetukset kytkee tarjoukset pois.
- **Tunnisteet lohkoille.** {{cmd:TAGS}} määrittelee tunnisteen (sen laji, arvot, joita se voi saada, lohkot, joihin se kohdistuu), asettaa sen valitsemiisi lohkoviittauksiin ja listaa ne luetteloksi, jonka voit tallentaa CSV-tiedostona. Määritykset säilytetään DWG-tiedostossa. Katso [Tunnisteet](topic:tags).
- **Piirustuksen rajat.** {{cmd:LIMITS}} asettaa piirustukselle suorakulmion: ruudukko täyttää sen ja zoomaus Kaikki näyttää sen. Rajat näkyvät ääriviivana ja tallentuvat DWG- ja DXF-tiedostoihin paperirajojen kanssa. Katso [Aseta piirustuksen rajat](topic:drawing-limits).

### Työskentely muiden ja muiden ohjelmien kanssa

- **Muuta merkintä revisioksi.** {{cmd:REDLINE}} lukee paketin, jonka MarkupCraft kirjoittaa, ja luettelee jokaisen muutoksen. Hyväksy tai hylkää kukin huomautuksella. Hyväksytyt saavat revisiopilven ja revisiolokin yhdessä kumoamisvaiheessa, ja tallennat vastaustiedoston, joka sulkee merkinnät MarkupCraftissa. Katso [Muuta merkintä revisioksi](topic:redline-to-revision).
- **Piirustukset, jotka git ja Fossil voivat yhdistää.** Kun {{ui:Yhdistettävissä olevat tiedostot}} on päällä kohdassa {{ui:Asetukset}} › {{ui:CadCraft}}, jokainen kohde saa avaimen, joka ei koskaan muutu (tiedostot ovat noin 10 prosenttia suurempia). `cadcraft merge base ours theirs` yhdistää kahden henkilön muokkaukset yhdestä DWG- tai DXF-tiedostosta kohde kohteelta ja ilmoittaa vain kohdat, joissa kaksi henkilöä muutti samaa asiaa. Katso [Yhdistä kahden henkilön muokkaukset yhteen piirustukseen](topic:merge-drawings).
- **Mitä muuttui, sanoin.** Historiassa Vertaa antaa selkeän luettelon: missä asiat muuttuivat, kuinka suuria alueet ovat, mitä lisättiin, poistettiin tai muutettiin ja mitä tekstiä muokattiin. Katso [Kerro sanoin, mitä muuttui](topic:changes-in-words).
- **Suuntakulmat.** Kirjoita suunta mittausinsinöörin suuntakulmana, kuten N45°23'30"E, tai asteina, minuutteina ja sekunteina, missä tahansa kohdassa, jossa kulmaa kysytään. AUNITS määrittää, miten kulmat näytetään. Katso [Kirjoita ja näytä suuntakulmat](topic:bearings-and-angles).
- **Omat SHX-kirjasimet.** Anna CadCraftille kansio SHX-kirjasimia, ja tekstityylit, jotka nimeävät ne, piirretään niillä, näytöllä ja tulosteissa. Katso [Piirrä teksti omilla SHX-kirjasimillasi](topic:shx-fonts).
- **Kaavio tekstistä.** {{cmd:DIAGRAM}} lukee Mermaid-vuokaavion, PlantUML-komponenttikaavion, D2:n tai lähtö–kohde-luettelon ja piirtää muokattavia lohkoja ja liittimiä. Katso [Piirrä kaavio tekstistä](topic:text-to-diagram).
- **OLE-kohteet DWG-tiedostossa.** {{cmd:OLELIST}} luettelee DWG-tiedoston OLE-kohteet, joita CadCraft ei osaa sijoittaa itse, ja sijoittaa kuvan kopion siihen kohtaan, jonka ilmoitat. Katso [Kuvat](topic:pictures#objects-from-other-programs-ole).
- **Laskelmasi pysyvät piirustuksen mukana.** Laskentataulukot ja suunnitteluperustelut säilytetään DWG-tiedostossa luokkataulukon kanssa.

### Piirtäminen ilman näköä

- Kytke {{ui:Piirtäminen ilman näköä}} päälle kohdassa {{ui:Asetukset}} (tai kirjoita {{cmd:ACCESS}} ja vastaa `On`). CadCraft lukee jokaisen komennon ja tuloksen ruudunlukijan kautta, kuvaa piirustuksen ja sen, mitä kohdistimen lähellä on, antaa sinun siirtää kohdistinta ja valita pisteitä näppäimistöllä ja soittaa äänen jokaiselle tartunnalle ja otteelle. Missä selaimesi tunnistaa puheen tietokoneellasi, komennot voi sanoa ääneen. Katso [Piirrä ilman näköä](topic:draft-without-sight).

### Kaikissa sovelluksissa

- **Kielet.** 54 kieltä; kymmenen on uutta (liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filipino, swahili, uzbekki). Muut kuin englanti ovat koneluonnoksia, kunnes äidinkielinen puhuja lukee ne.
- **Syöttölaitteet.** Kosketuslevy, kynä, 3D-hiiri, peliohjain ja MIDI-ohjaimet.
- **Työkalurivin rivit ja ominaisuusruudukko.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Työkalurivin rivit}} tarjoaa rivitystä, 2 riviä tai 1 rivi muissa sovelluksissa. CadCraft pitää oman asetuksensa kohdassa {{ui:Asetukset}} › {{ui:CadCraft}} (katso [Työkalurivin rivit](topic:settings#toolbar-rows)). Yhteinen ominaisuusruudukko on kolmessa muussa sovelluksessa, ei CadCraftissa.
- **Ongelmat, Live ja lisäosat.** Yhteinen Ongelmat-paneeli, joka varoittaa kaikissa sovelluksissa, Live-näkymä siitä, kuka on missäkin CadCraft Studiossa (katso [Työskentely yhdessä piirustuksen parissa](topic:work-live)), sekä lisäosaluettelo.
- **Yhdistä tekoälysi.** Yksi yhteys CadCraft Studiosta kaikkiin kahdeksaan sovellukseen, jokaisella sovelluksella oma lukutila, ehdotustila tai muokkaustila sekä selkokielinen loki siitä, mitä avustaja teki. CadCraftilla ei ole omaa tekoälyä, ja Kysy kaikissa sovelluksissa käyttää yhdistämääsi tekoälyä.

## Korjattu versiossa 0.8.1

- **Ominaisuudet näyttivät 150 eikä 12'-6"** jalka- ja tuumapiirustuksissa. Kentät, jotka sovellus lukee itse, säilyttävät tekstinsä taas.
- **DWG-tiedostot, joiden luokkaosio luettiin väärällä tyypillä** (GitHub cadcraft#5), avautuvat nyt oikein.
- **Kohdistusristi ei enää näy ponnahdusikkunoiden takana.**
- **Studio ja pakatut versiot voivat vaihtaa kieltä ajon aikana.** Aiemmin ne olivat vain englanniksi. Ei vielä testattu kaikilla alustoilla: kerro, jos kieli ei vaihdu.
- **Tabletit pystysuunnassa** antavat vapaan ruudukkokorkeuden piirtoalueelle, ja arkkitila alkaa 760 px:stä tai vähemmästä.
- **STRETCH leikkaavalla ikkunalla ja LIMITS** ilmoitettiin Studio 0.8.0:ssa, ja ne olivat jo oikein 0.8:n verkkoversiossa; ilmoittajan asennusohjelma oli vanhempi. Studio 0.8.1 sisältää ne.

## Ei vielä tässä versiossa

- **Versiot 0.8 ja 0.8.1 eivät ole koodilla allekirjoitettuja.** Windows voi varoittaa (valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}); Macissa napsauta CadCraft Studiota hiiren oikealla painikkeella ja valitse {{ui:Avaa}}. Kauppaversiot ovat pidossa, eikä iPad- ja iPhone-versiota ole koottu uudelleen versiolle 0.8.1.
- **Kynäluonnoksia ja luonnoskuvia** on kokeiltu vain keksityillä valokuvilla ja hiirellä, ei vielä oikealla kynällä, kosketusnäytöllä tai käsin paperille piirretyllä luonnoksella.
- **Piirtäminen ilman näköä** on testattu automaattisilla tarkistuksilla, ei vielä ruudunlukijalla tai sokealla testaajalla.
- **Detaljien jakamista** ei ole tarkistettu kahden henkilön voimin, eikä Team Cloud Plan -kansiota Asiakirjat-kansiona ole toteutettu.
- **Yhdistäminen** toimii CadCraftin DWG- ja DXF-tiedostoille; muiden sovellusten tiedostoille sitä ei ole toteutettu.
- **Kumoaminen ikkunoiden yli:** CadCraft ilmoittaa jokaisen valmistuneen vaiheen, mutta Studiossa ei vielä ole yhtä Kumoa-toimintoa kaikille sovelluksille; kukin sovellus kumoaa omat vaiheensa.
- **DWG-tiedostojen OLE-kohteet** säilytetään, mutta niitä ei piirretä paikoilleen.
- **Tulostustyylitaulukoiden (CTB-tiedostojen) lukeminen** muista ohjelmista on toteutettu, mutta sitä ei ole tarkistettu toisen ohjelman tiedostolla.
- **Yhdistä tekoälysi:** yhden napsautuksen yhdistäminen Studiossa, selaimen tekoälyn isännöity liitin, oma API-avaimesi Studiossa ja julkaistu MCP-paketti eivät ole luvattuja tässä julkaisussa.

Versiota ennen tätä koskevat tiedot löytyvät kohdasta [Mitä uutta versiossa 0.7](topic:whats-new-0-7).
