---
title: Mitä uutta versiossa 0.9 (aiemmin)
summary: Viivoitukset, jotka seuraavat rajaansa, tasoryhmät, pinotut kerrokset, 2D-älykkäät seinät ovien ja ikkunoiden kanssa, tekstityylit ja muotoiltu tekstieditori, kelluva komentorivi, ruudukkotartunta, kymmenen tapaa piirtää kaari sekä Asiakirjat-paneeli.
keywords: mitä uutta 0.9, aiempi julkaisu, mitä uutta, 0.9, julkaisutiedot, muutosloki, viivoitus, assosiatiivinen viivoitus, hatchedit, pat-tiedosto, kuviotiedosto, tasoryhmät, laygroup, kerrokset, pinotut kerrokset, floorlayers, älykkäät seinät, seinä, ovi, ikkuna, seinätyökalut, tekstityyli, tyyli, mtext-editori, kappaleteksti, muotoilu, kelluva komentorivi, komentorivi, yläalue, kompakti, tartunta ruudukkoon, ruudukkotartunta, f9, kaari, asiakirjat-paneeli, uloskuittaus, uk-teräskoot, draw.io, thai-teksti, dxf r12, mitä uutta, 0.8, 0.8.1, versio, uudet ominaisuudet, automaattitäydennys, haamu, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tunnisteet, redline, yhdistäminen, git, fossil, access, piirtäminen ilman näköä, ruudunlukija, rajat, suuntimat, aunits, shx, diagram, ole, historia, vertailu, sanoin, ominaisuudet, jalat ja tuumat, venytys, kielet, syöttölaitteet, ongelmat, live, avustajat
from: 3451e64c
---

Tämä muuttui CadCraft 0.9:ssä verrattuna versioon 0.8.1. CadCraft on CadCraft Studio 0.9:n 2D- ja 3D-piirtosovellus ja sen kahdeksan sovellusta. 0.9 viimeistelee pohjapiirustuksen, lisää tekstityylit ja oikean tekstieditorin sekä antaa enemmän tilaa näytöllä.

## Uutta

### Pohjapiirustus

- **Viivoitukset, jotka seuraavat rajaansa.** {{cmd:HATCH}} linkittyy siihen, mikä sitä rajaa. Siirrä, käännä tai skaalaa rajaa, ja viivoitus ja sen kuvio seuraavat; muotoile se uudelleen, ja viivoitus lasketaan uudelleen. {{cmd:HATCHEDIT}} (`HE`) muuttaa viivoitusta jälkeenpäin ja tekee tai lopettaa linkin. Katso [Viivoitus ja täyttöalueet](topic:hatch).
- **Viivoituksen kuviotiedostot.** Kysymyksessä {{cmd:HATCH}} `Määritä sisäpiste` kirjoita `F` (Kuviotiedosto) ja valitse `.pat`-tiedosto. Vain tavallisessa muodossa kirjoitettuja tiedostoja on kokeiltu.
- **Tasoryhmät.** {{ui:Työkalut}}-valikossa {{ui:Tasot}}-paneelissa: {{ui:Uusi ryhmä}}, {{ui:Lisää valmiit ryhmät}}, {{ui:Ryhmitä nimen mukaan}} ja {{ui:Etsi taso}}; tai kirjoita {{cmd:LAYGROUP}} (`LG`). Katso [Järjestä piirustus tasoilla](topic:layers#group-layers).
- **Pinotut kerrokset.** {{cmd:FLOORS}} (`FLR`), tai {{ui:Kerrokset…}} {{ui:Lisää}}-valikossa {{ui:Näkymä}}-ryhmässä. Arkin näkymäruutu voi näyttää yhden kerroksen kohdassa {{ui:Näytettävä kerros}} Ominaisuuksissa. {{cmd:FLOORLAYERS}} muuttaa kerrokset tasoiksi tiedostoa varten, joka menee jollekulle toiselle. Katso [Pinoa kerroksia yhteen piirustukseen](topic:floors).
- **2D-älykkäät seinät, ovet ja ikkunat.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) ja {{cmd:DELOPENING}}. Kulmat, T-liitokset ja risteykset lasketaan puolestasi. Seinät säilyttävät tiedon siitä, miten ne liittyvät, ja Ominaisuuksiin tulevat {{ui:Estä liitos alussa}} / {{ui:Estä liitos lopussa}}, {{ui:Sijaintiviiva}} ja muokattava {{ui:Pituus}}. Katso [Piirrä 2D-seinät, ovet ja ikkunat](topic:walls-2d).
- **Seinätyökalu 2D-seinille.** Kirjoita {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} ja muut. Niillä ei ole vielä työkalurivipainikkeita. Katso [Seinämuodot, leikkaukset, siirrot ja lukitukset 2D-seinille](topic:wall-tools-2d).

### Teksti

- **Tekstityylit.** {{cmd:STYLE}} (`ST`), tai {{ui:Tekstityyli}} {{ui:Piirrä}}-työkalurivillä: nimettyjä tyylejä, joissa on fontti, korkeus, leveyskerroin ja kaltevuus. Katso [Aseta tekstin fontti ja koko tekstityyleillä](topic:text-styles).
- **Muotoiltu kappaleteksti -editori.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} tai kaksoisnapsautus tekstiä avaa ruudun, jossa on fontti, koko, lihavointi, kursiivi, alleviivaus, yliviivaus, väri, tasaus sekä aste-, plus-miinus- ja halkaisijamerkit, sekä {{ui:OK}} ja {{ui:Peruuta}}. Katso [Muotoile kappaleteksti](topic:format-paragraph-text).
- **Kaavio draw.io XML:stä.** {{cmd:DIAGRAM}} (`T2D`) lukee myös liitetyn draw.io XML:n. Katso [Piirrä kaavio tekstistä](topic:text-to-diagram).
- **Thai-teksti PDF-tulosteessa.** Se tulostui aiemmin kysymysmerkkeinä.

### Lisää tilaa ja piirtoapuja

- **Kelluva, ohuempi komentorivi ja kompakti yläalue.** Vedä komentorivin kahvaa kellumaan, vedä sen yläreunaa vähempiin riveihin, {{key:F2}} avaa historian. {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Komentorivi}} ja yläalueen valinnat ovat samat asetukset. Katso [Asetukset](topic:settings#command-line).
- **Kohteen tartuntavalikko.** Napsauta hiiren oikealla {{ui:Tartunta}}-kohtaa tilarivillä tai kirjoita {{cmd:OSNAP}}.
- **Tartunta ruudukkoon.** {{ui:Ruudukkotartunta}}-painike tilarivillä tai {{key:F9}}: valitut pisteet menevät lähimpään ruudukkopisteeseen, kun kohteen tartunta ei ottanut pistettä.
- **Kaari kymmenellä tavalla ja Jatka.** {{ui:Kaari}} {{ui:Piirrä}}-työkalurivillä tai {{cmd:ARC}}: 3 pistettä, Alku/Keskipiste/Loppu -ryhmä ja Keskipiste/Alku/Loppu -ryhmä sekä Jatka (paina {{key:Enter}} alkupisteessä) viimeisestä viivasta, kaaresta tai murtoviivasta.
- **Asiakirjat-paneeli.** {{cmd:DOCUMENTS}} (`DOCS`) tai {{ui:Asiakirjat…}} {{ui:Lisää}}-valikossa {{ui:Näkymä}}-ryhmässä: versio, tila ja uloskuittaus jokaiselle piirustukselle projektikansiossa. Se avautuu keskitettynä ikkunana. Katso [Asiakirjat](topic:documents).

### Tiedostot

- **UK-teräskoot.** 976 profiilia Vakio-paneelissa, kirjoitettuna kuten piirustuksissa (esimerkiksi `305x165x40 UB`).
- **Etelä-Afrikan paketit** (piirustuskäytännöt ja rakennusmääräykset) rakennusmääräykset-lisäosan paketteina. Luvut eivät ole vahvistettuja.
- **Lisäosat CadCraftille,** lisätään tarvittaessa ja poissa oletuksena: sisävalaistussuunnittelu, sirusuunnittelu (HDL asetteluksi), reititinveistäminen, piirisimulointi, rullaketjun hammaspyörät ja rakennusmääräysten maakohtaiset paketit.

## Korjattu

- Viivoituksen siirtäminen, kääntäminen tai skaalaus jätti kuvionsa jälkeensä.
- {{cmd:GRIDMOVE}} vei mukanaan kokonaisen pohjapiirroksen seinän, joka alkaa vain ruudukkoviivalta. Seinää arvioidaan nyt sen päiden mukaan.
- Ruudukko näkyi vain piirustuksen rajojen sisällä, vaikka rajat olivat pois päältä.
- Sivupaneelin lohkoluettelo vierii, ja nimi, joka ei ole lohko, luettelee lohkot, jotka alkavat sillä (”Tarkoititko”).
- DXF R12 -tiedostot, jotka AutoCAD hylkäsi (”Unknown group 1001 for table”), avautuvat nyt.
- Hyvin suuret tiedostot (noin 70 000 kohdetta ja enemmän) eivät avautuneet virheellä ”Maximum call stack size exceeded”.
- DWG-tiedostot AutoCAD 2018:sta ja uudemmista korkealla huoltoversiolla eivät avautuneet virheellä ”bad BITLONG code 11”.
- Kappaleteksti-ruudussa valitun osan uusi koko säilyy valinnassa.

## Kaikissa sovelluksissa

Vihjeet jokaisessa hallinnassa, jolla on ohje, aloitusvihje, jonka voi sulkea, välilehtirivit, jotka vierivät, kun eivät mahdu, ja selainvälilehden otsikko, joka seuraa avointa piirustusta (`<drawing> - CadCraft | CadCraft`). {{ui:Asetukset}} › {{ui:Asettelu}} on nyt pudotusvalikko kaksirivisistä valinnoista. Kielilista {{ui:Asetukset}}-kohdassa on pidempi kuin versiossa 0.8. Reaaliaikainen yhteistyö, kirjastokokoelmat sekä paino- ja lämpötilayksiköt kuvataan Studio-muistiinpanoissa.

## Rajoitteet

- Kappaleteksti ei tue luettelomerkkejä tai numeroituja luetteloja, sarkainviivainta tai tasausta. Tulostetut PDF-tiedostot asettavat tekstin Helveticalla.
- Pohjapiirroksen seinät ovat suoria, joten kaari piirretään lyhyinä seininä. Seinätyökalun yhteisötarkistus on vielä kesken.
- Tasoryhmiä ei kirjoiteta AutoCADin omaan muotoon, joten AutoCAD näyttää tasaisen luettelon. Muut ohjelmat näyttävät kaikki kerrokset yhdessä, ellet aja {{cmd:FLOORLAYERS}}-komentoa.
- Asiakirjat-paneelia ei ole kokeillut kaksi ihmistä oikealla jaetulla kansiolla. Reititinveistämistä ei ole ajettu oikealla koneella. Valaistusarvio tarkistettiin valonjäljitystä vastaan, ei toisen ohjelman kanssa. Tekniset lisäosat ovat tarkistusapuja, eivät korvaa insinöörin tarkastusta.
- Muut kielet kuin englanti ovat koneellisia luonnoksia, ja jotkin uudet sanat ovat vain englanniksi.

## Aiemmin: 0.8 ja 0.8.1

Tämä muuttui versioissa CadCraft 0.8 ja 0.8.1 verrattuna versioon 0.7. 0.8 (1. marraskuuta 2026) lisää piirtoapureita, jotka toimivat omasta piirustuksestasi, säännöillä tietokoneellasi ja ilman mallia, ja 0.8.1 (2. marraskuuta 2026) korjaa virheitä, joista ilmoitettiin sen jälkeen.

### Uutta

**Piirustus, joka viimeistelee ajatuksesi**

- **Haamu näyttää, mitä tulee seuraavaksi.** Kun mitään komentoa ei suoriteta, harmaa katkoviivainen haamu näyttää, mitä piirustuksesi omat kuviot sanovat seuraavaksi: seuraava tolppa samalla välillä, seuraava portaan askel, puuttuva seinä huoneesta. Paina {{key:Tab}} piirtääksesi sen yhdeksi kumoamisaskeleeksi, tai {{key:Esc}} hylätäksesi sen. Se katsoo vain uusimpia kohteita, joten se pysyy sujuvana suuressa piirustuksessa. Kytke pois {{ui:Asetukset}} › {{ui:CadCraft}}-kohdasta tai komennolla {{cmd:AUTOCOMPLETE}} `Off`.
- **Seuraava piste viivaa piirtäessä.** Kesken {{cmd:LINE}}- tai {{cmd:PLINE}}-komennon haamu on seuraava piste: portaan seuraava askel, suorakulmion neljäs kulma tai piste, joka sen sulkee. Vie kohdistin sen lähelle ja paina {{key:Tab}} kuin olisit napsauttanut siinä.
- **Kynäluonnokset muuttuvat tarkaksi geometriaksi.** {{cmd:SKETCHFIX}}: piirrä karkeita vetäisyjä kynällä, hiirellä tai sormella, ja jokainen muuttuu siistiksi viivaksi, ympyräksi, kaareksi, suorakulmioksi tai murtoviivaksi, tarttuen siihen, mikä on jo piirretty. Katso [Piirrä kynällä ja saa tarkka geometria](topic:sketch-with-a-pen).
- **Valokuva luonnoksesta muuttuu piirustukseksi.** {{cmd:PHOTOSKETCH}} (`PSK`) löytää paperin valokuvasta, oikaisee perspektiivin, soveltaa antamasi paperikoon ja mittakaavan ja jäljittää kynäviivat kullekin kynävärille omalle tasolleen. Kirjaimia ei jäljitetä.
- **Mittaa säännöillä.** {{cmd:AUTODIM}} (`ADIM`) tekee mittaketjuja valitsemiesi sivujen varrelle, kokonaismitan, aukkojen leveydet, reikien halkaisijat ja `Grid`-vaihtoehdolla ruudukkovälit. Se ei koskaan toista mittaa, joka on jo olemassa.
- **Siirrä ruudukkoviivaa, ja joukko seuraa.** {{cmd:GRIDMOVE}} (`GM`): ruudukkoviivaan päättyvät seinät venyvät sen mukana, sitä pitkin kulkevat seinät, pilarit, sen kupla ja tunniste liikkuvat, ja sillä olevat mitat mittaavat uuden välin. Yksi kumoamisaskel.

**Arkit ja kerrokset, jotka asettuvat itse**

- **Arkit, jotka asettelevat itsensä.** {{cmd:AUTOSHEET}} ottaa nimetyt näkymäsi (tai mallin erilliset osat), valitsee paperikoon ja vakiomittakaavan ja sijoittaa näkymät uusille arkeille nimilohkon sekä nimi- ja mittakaavatekstin kanssa. Kaikki pysyy muokattavana. Katso [Asettele arkit puolestani](topic:lay-out-sheets-for-me).
- **Yrityksesi detaljit, tarjottuina piirtäessä.** {{cmd:DETAILS}} (`DET`) pitää omat detaljilohkosi. Kun valitsemasi vastaa jotakin sen tasojen, lohkonimien ja muistiinpanojen sanoin, tilarivi kertoo siitä; valitse se ja sijoita. {{cmd:DETAILS}} › Share laittaa listasi Asiakirjat-kansioosi ja tuo mukaan tiimisi lisäämät. Asetuksista ehdotukset voi kytkeä pois.
- **Tunnisteet lohkoilla.** {{cmd:TAGS}} määrittelee tunnisteen (sen laji, sallitut arvot, lohkot, joihin se kohdistuu), asettaa sen valitsemillesi lohkoviittauksille ja luettelee ne taulukkona, jonka voit tallentaa CSV-muodossa. Määrittelyt säilyvät DWG-tiedostossa. Katso [Tunnisteet](topic:tags).
- **Piirustuksen rajat.** {{cmd:LIMITS}} asettaa piirustukselle suorakulmion: ruudukko täyttää sen ja zoomaus Kaikki näyttää sen. Rajat näkyvät ääriviivana ja tallennetaan DWG- ja DXF-tiedostoihin paperirajojen kanssa. Katso [Aseta piirustuksen rajat](topic:drawing-limits).

**Työskentely muiden ihmisten ja muiden ohjelmien kanssa**

- **Muuta merkintä versioksi.** {{cmd:REDLINE}} lukee MarkupCraftin kirjoittaman paketin ja luettelee jokaisen muutoksen. Hyväksy tai hylkää kukin muistiinpanolla; hyväksytyille tulee revisiopilvi ja revisiolokit yhdellä kumoamisaskeleella, ja tallennat vastaustiedoston, joka sulkee merkinnät MarkupCraftissa. Katso [Muuta merkintä versioksi](topic:redline-to-revision).
- **Piirustukset, jotka git ja Fossil voivat yhdistää.** Kun {{ui:Yhdistettävissä olevat tiedostot}} on päällä kohdassa {{ui:Asetukset}} › {{ui:CadCraft}}, jokainen kohde saa avaimen, joka ei koskaan muutu (tiedostot ovat noin 10 prosenttia suurempia). `cadcraft merge base ours theirs` yhdistää kahden ihmisen muokkaukset yhdestä DWG- tai DXF-tiedostosta kohde kerrallaan ja ilmoittaa vain kohdat, joissa kaksi ihmistä muutti samaa asiaa. Katso [Yhdistä kahden ihmisen muokkaukset yhdestä piirustuksesta](topic:merge-drawings).
- **Mitä muuttui, sanoin.** Historiassa Vertaa-toiminto antaa selkeän luettelon: missä asiat muuttuivat, kuinka suuria kohdat ovat, mitä lisättiin, poistettiin tai muutettiin, sekä muokattu teksti. Katso [Kerro sanoin, mitä muuttui](topic:changes-in-words).
- **Suuntimat ja kulmat.** Kirjoita suunta kuten mittausinsinöörin suuntima, esimerkiksi N45°23'30"E, tai asteina, minuutteina ja sekunteina, mihin tahansa kohtaan, jossa kulmaa kysytään. AUNITS asettaa, miten kulmat näytetään. Katso [Kirjoita ja näytä suuntimat ja kulmat](topic:bearings-and-angles).
- **Omat SHX-fontit.** Anna CadCraftille kansio SHX-fontteja, ja tekstityylit, jotka nimeävät ne, piirretään niillä näytöllä ja tulosteissa. Katso [Piirrä tekstiä omilla SHX-fonteillasi](topic:shx-fonts).
- **Kaavio tekstistä.** {{cmd:DIAGRAM}} lukee Mermaid-vuokaavion, PlantUML-komponenttikaavion, D2:n tai lähtö-kohde-luettelon ja piirtää muokattavia lohkoja ja liittimiä. Katso [Piirrä kaavio tekstistä](topic:text-to-diagram).
- **OLE-kohteet DWG-tiedostossa.** {{cmd:OLELIST}} luettelee DWG-tiedoston sisältämät OLE-kohteet, joita CadCraft ei osaa sijoittaa itse, ja sijoittaa kuvan kopion mihin sanot. Katso [Kuvat](topic:pictures#objects-from-other-programs-ole).
- **Laskelmasi pysyvät piirustuksen mukana.** Laskelmat ja suunnittelun perustelut säilyvät DWG-tiedostossa luokkataulun kanssa.

**Piirtäminen ilman näköä**

- Kytke {{ui:Piirtäminen ilman näköä}} päälle {{ui:Asetukset}}-kohdasta (tai kirjoita {{cmd:ACCESS}} ja vastaa `On`). CadCraft puhuu jokaisen komennon ja tuloksen ruudunlukijan kautta, kuvailee piirustuksen ja sen, mitä kohdistimen lähellä on, antaa sinun siirtää kohdistinta ja valita pisteitä näppäimistöllä ja soittaa äänen jokaiselle tartunnalle ja kahvalle. Missä selaimesi tunnistaa puheen tietokoneellasi, komentoja voi sanoa ääneen. Katso [Piirrä ilman näköä](topic:draft-without-sight).

**Kaikissa sovelluksissa**

- **Kielet.** 54 kieltä; kymmenen on uutta (liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filipino, swahili, uzbek). Muut kuin englanninkieliset ovat koneellisia luonnoksia, kunnes natiivipuhuja lukee ne.
- **Syöttölaitteet.** Kosketuslevy, kynä, 3D-hiiri, pelikontrolleri ja MIDI-ohjaimet.
- **Työkalurivin rivit ja ominaisuuspaneeli.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Työkalurivin rivit}} tarjoaa Sovita, 2 riviä tai 1 rivi muissa sovelluksissa. CadCraft pitää oman asetuksensa kohdassa {{ui:Asetukset}} › {{ui:CadCraft}} (katso [Työkalurivin rivit](topic:settings#toolbar-rows)). Jaettu ominaisuuspaneeli on kolmessa muussa sovelluksessa, ei CadCraftissa.
- **Ongelmat, Live ja lisäosat.** Jaettu Ongelmat-paneeli, joka varoittaa kaikissa sovelluksissa, Live-näkymä siitä, kuka on missä CadCraft Studiossa (katso [Työskentele yhden piirustuksen parissa yhdessä](topic:work-live)), ja lisäosaluettelo.
- **Yhdistä tekoälysi.** Yksi yhteys CadCraft Studiosta kaikkiin kahdeksaan sovellukseen, ja jokaiselle sovellukselle oma taso: vain luku, ehdotus tai muokkaus, sekä selkokielinen loki siitä, mitä avustaja teki. CadCraftilla ei ole omaa tekoälyä, ja {{ui:Kysy}}-toiminto kaikissa sovelluksissa käyttää yhdistämääsi tekoälyä.

### Korjattu versiossa 0.8.1

- **Ominaisuudet näyttivät 150 kohdassa 12'-6"** jalka- ja tuumapiirustuksissa. Sovelluksen itse lukemat kentät säilyttävät tekstinsä jälleen.
- **DWG-tiedostot, joiden luokkaosio luettiin väärän tyyppisenä** (GitHub cadcraft#5), avautuvat nyt oikein.
- **Kohdistin ei enää näy ponnahdusikkunoiden takana.**
- **Studio ja paketoidut versiot voivat vaihtaa kieltä ajon aikana.** Aiemmin ne olivat vain englanniksi. Ei vielä testattu jokaisella alustalla: kerro meille, jos kieli ei vaihdu.
- **Tabletit pystysuunnassa** antavat ylimääräisen ruudukkokorkeuden piirtoalueelle, ja arkkitila alkaa 760 px tai alle.
- **STRETCH leikkaavalla ikkunalla ja LIMITS** raportoitiin Studio 0.8.0:ssa, ja ne olivat jo oikein 0.8:n web-versiossa; raportoijan asennusohjelma oli vanhempi. Studio 0.8.1 sisältää ne.

### Ei vielä tässä versiossa

- **0.8 ja 0.8.1 eivät ole koodilla allekirjoitettuja.** Windows voi varoittaa (valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}). Macissa napsauta CadCraft Studiota hiiren oikealla ja valitse {{ui:Avaa}}. Kauppaversiot ovat pidossa, eikä iPad- ja iPhone-versiota ole koottu uudelleen versiolle 0.8.1.
- **Kynäluonnokset ja luonnosvalokuvat** on kokeiltu vain keksityillä valokuvilla ja hiirellä, ei vielä oikealla kynällä, kosketusnäytöllä tai paperilla tehdyllä käsinpiirroksella.
- **Piirtäminen ilman näköä** on testattu automaattisilla tarkistuksilla, ei vielä ruudunlukijalla tai sokealla testaajalla.
- **Detaljien jakamista** ei ole tarkistettu kahden ihmisen voimin, eikä Team Cloud Plan -kansiota Asiakirjat-kansiona ole rakennettu.
- **Yhdistäminen** toimii CadCraftin DWG- ja DXF-tiedostoille; muiden sovellusten tiedostoille sitä ei ole rakennettu.
- **Kumoaminen ikkunoiden yli:** CadCraft ilmoittaa jokaisen valmistuneen askeleen, mutta Studiossa ei vielä ole yhtä Kumoa-toimintoa kaikille sovelluksille; jokainen sovellus kumoaa omat askeleensa.
- **DWG-tiedoston OLE-kohteet** säilyvät, mutta niitä ei piirretä paikoilleen.
- **CTB-tiedostojen lukeminen** muiden ohjelmien tulostustyylitauluista on rakennettu, mutta sitä ei ole tarkistettu muiden ohjelmien tiedostolla.
- **Yhdistä tekoälysi:** yhden napsautuksen yhteys Studiossa, isännöity liitin selaimen tekoälylle, oma API-avain Studiossa ja julkaistu MCP-paketti eivät ole luvattuja tässä julkaisussa.

Aiempaan versioon liittyvät tiedot löytyvät kohdasta [Mitä uutta versiossa 0.7](topic:whats-new-0-7).
