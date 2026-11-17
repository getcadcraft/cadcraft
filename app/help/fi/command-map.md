---
title: Komentokartta: mitä kirjoittaa
summary: Jokainen CadCraftin komento lyhyine nimineen aakkosjärjestyksessä, ohjelmasta itsestään tehtynä, ja tavat muista piirto-ohjelmista, jotka eroavat.
keywords: komentokartta, komennot, lyhenteet, lyhyet nimet, muualta tulevat, komentoluettelo, mitä kirjoittaa, poista, typistä, vastaava, erot
from: 3bdfd3e6
---

CadCraft ottaa komentojen nimet ja lyhenteet, jotka ihmiset tuntevat muista piirto-ohjelmista: kirjoita `L` viivaa varten, `TR` typistämiseen, `E` poistamiseen. Useimmille komennoille ei siis tarvitse opetella käännöstaulukkoa: tuntemasi nimi on sama täälläkin. Alla oleva luettelo sisältää kaikki CadCraftin komennot, ja se on tehty itse ohjelmasta. {{key:Enter}} toistaa viimeisimmän komennon; `HELP` komentorivillä tulostaa saman luettelon.

Muutama komento ei ole sama tai ei ole vielä toteutettu:

- **Tallenna** lataa kopion selaimeen ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studiossa se kirjoittaa tiedoston. Katso [Siirtyminen muista piirto-ohjelmista](topic:coming-from).
- **PLOT** tekee PDF-tiedoston (myös PNG:nä ja SVG:nä) tulostustyyli-taulukolla; sivuasetusten hallintaa ei ole.
- **DIMSTYLE** ja **PEDIT** on toteutettu; **PEDIT**:ssä ei ole Muokkaa kärkipistettä -vaihtoehtoa (sen tekevät otteet).
- **TABLE** ei ole vielä toteutettu; {{cmd:XREF}}, {{cmd:SPLINE}} ja {{cmd:WBLOCK}} ovat.
- Rutiinin omat komennot (AutoLISP `C:NAME`) näkyvät, kun lataat sen komennolla {{cmd:APPLOAD}}; niitä ei ole listattu täällä.

## Kaikki komennot (398)

| Komento | Lyhyet nimet | Mitä se tekee |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Kiertää 3D-näkymää vasemmalla painikkeella |
| `ACCESS` | `AX` | Kytkee piirtämisen ilman näköä päälle tai pois: tulokset luetaan ruudunlukijan kautta, piirustukselle tulee näppäimistökohdistin, tartuntaäänet ja puhutut komennot. |
| `ALIASEDIT` |  | Muokkaa komentojen lyhenteitä yhdessä tekstitiedostossa (tuttu muoto L, *LINE) |
| `ALIGN` | `AL` | Siirtää ja kääntää kohteita niin, että lähdepisteet osuvat kohdepisteisiin (yksi, kaksi tai kolme paria), ja tarvittaessa skaalaa ne |
| `ALIGNPANEL` | `ALP` | Avaa Kohdistus ja jako -paneelin |
| `ALIGNTO` |  | Kohdistaa valittujen kohteiden vasemman, keskisen, oikean, yläreunan, keskikohdan tai alareunan valintaan, ensimmäiseen tai viimeiseen valittuun kohteeseen tai pisteeseen |
| `ANNOALLVISIBLE` | `ANNOALL` | Näyttää merkintäkohteet jokaisessa mittakaavassa, tai vain siellä, missä näkymäruudun (tai piirustuksen) mittakaava on niiden luettelossa |
| `ANNOSCALE` | `CANNOSCALE` | Asettaa piirustuksen merkintämittakaavan: merkintätekstit ja mitoitukset muutetaan tulostumaan samankokoisina |
| `APPLOAD` | `AP` | Lataa sovelluksia: LISP-rutiineja (.lsp) ja niiden valintaikkunatiedostoja (.dcl); Käynnistysvalikko (AP) |
| `ARC` | `A` | Kaari: Kolme pistettä, Alku/Keskipiste/Loppu, Alku/Keskipiste/Kulma, Alku/Keskipiste/Pituus, Alku/Loppu/Kulma, Alku/Loppu/Suunta, Alku/Loppu/Säde, Keskipiste/Alku/Loppu, Keskipiste/Alku/Kulma, Keskipiste/Alku/Pituus, Jatka |
| `AREA` | `AA` | Pinta-ala ja piiri pisteiden tai kohteen mukaan; Lisää ja Vähennä pitävät juoksevan summan (AA) |
| `ARRAY` | `AR` | Kopioita riveihin ja sarakkeisiin tai pyöreästi keskipisteen ympärille (AR) |
| `ARRAYASSOCIATIVITY` |  | Asettaa, tekevätkö ARRAY-komennot matriiseja, joita voi muokata (1), vai tavallisia kopioita (0) |
| `ARRAYCLOSE` |  | Lopettaa matriisin lähdekohteiden muokkaamisen |
| `ARRAYEDIT` |  | Muuttaa Assosiatiivinen-vaihtoehdolla tehtyä matriisia: määrät, välit, lähdekohteet, yksi kohde |
| `ARRAYPATH` |  | Kopioita kohteista viivaa, kaarta, murtoviivaa tai muuta käyrää pitkin |
| `ARRAYPOLAR` |  | Kopioita keskipisteen ympärillä |
| `ARRAYRECT` |  | Kopioita riveihin ja sarakkeisiin |
| `ASBUILT` | `ASB` | ASBUILT lukee mittausryhmän mittaamat toteutuneet pisteet (CSV / TXT, kuten EXPORTPOINTS kirjoittaa) ja vertaa niitä piirustuksen pisteisiin: toleranssin sisällä tai sen ulkopuolella, mittaamatta, ylimääräinen. Merkitsee ne tasolle AS-BUILT ja lataa CSV-raportin. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Määrittää attribuutin (tunnisteen, jolta lohko pyytää arvoa), jonka voi sijoittaa lohkoon (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Muokkaa lohkoviitteen attribuuttiarvoja komentorivillä yksi kerrallaan (Enter säilyttää arvon) |
| `ATTSYNC` |  | Tuo lohkon viitteet linjaan attribuuttimääritystensä kanssa: uudet lisätään oletuksilla, poistetut pudotetaan, sijainnit ja teksti nollataan; arvot säilyvät |
| `AUDIT` |  | Tarkistaa avoimen piirustuksen vaurioiden varalta: äärettömät luvut, kohteet joilla ei ole kokoa, puuttuvat tasot, lohkot, tyylit ja viivatyypit, itseensä sisältyvät lohkot, jaetut tunnukset, rikkoutuneet mitoitukset ja viivoitukset. Listaa löydökset tyypeittäin ja kysyy ennen korjaamista; korjaus on yksi kumoamisvaihe. |
| `AUNITS` | `ANGUNITS` | Miten kulmat näytetään ja kirjoitetaan: desimaaliasteina, asteina–minuutteina–sekunteina tai suuntakulmina kuten N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Piirustuksen automaattinen täydennys päälle tai pois, tai luettelo siitä, mitä piirustuksen kuviot ehdottavat nyt. |
| `AUTOCONSTRAIN` |  | Lisää yhtyvä-, vaaka- ja pystyrajoitteet kohtiin, joissa geometria on jo lähellä |
| `AUTODIM` | `ADIM` | Mitoittaa sääntöjen mukaan: kokonaismitat, reunoja pitkin kulkevat ketjut, aukot, reikien halkaisijat ja ruudukkovälit, toistamatta jo mitoitettua. |
| `AUTOSHEET` | `ASH` | Asettaa arkit itse: valitsee paperin ja tavanomaiset mittakaavat ja sijoittaa jokaisen näkymän kuvatekstillä ja piirustusotsikolla. |
| `BATTMAN` |  | Lohkoattribuuttien hallinta: lohkon attribuuttien järjestys, tunnisteet, kehotteet, oletukset ja tilat, minkä jälkeen sen viitteet päivitetään |
| `BCLOSE` |  | Sulkee lohkoeditorin: tallentaa lohkon tai hylkää muutokset |
| `BCONVERT` |  | BCONVERT löytää toistuvan geometrian ja muuttaa sen lohkoviitteiksi. Valitse toistuvat kohteet: avoimesta tilasta löytyy kaikki muut samanlaiset kohdejoukot, siirrettyinä ja kierrettyinä mihin kulmaan tahansa; kun Peilattu tai Skaalattu on päällä, löytyvät myös peilikuvat ja eri kokoiset kopiot. Anna uudelle lohkolle nimi ja kantapiste; valinta ja jokainen kopio muuttuvat viitteiksi siihen, kukin omalla kierrolla ja mittakaavallaan. Tai valitse Lohko ja nimeä olemassa oleva lohko, jolloin löydetään sen kohteiden irralliset kopiot. Kopion on oltava samalla tasolla, väriltään, viivatyypiltään ja viivanpaksuudeltaan, ellei Ominaisuudet-asetukseksi ole valittu Ohita. Lukituilla tasoilla olevat kohteet jätetään rauhaan. Yksi kumoamisvaihe. |
| `BEDIT` | `BE` | Lohkoeditori: muokkaa lohkon kohteita ja attribuutteja; BCLOSE tallentaa (BE) |
| `BLEND` |  | BLEND: spliini kahden avoimen käyrän päiden välillä; päät valitaan lähellä päitä yhdistämistä varten. CONtinuity: Tangentti seuraa molempia suuntia, Sujuva seuraa myös niiden taipumista. |
| `BLOCK` | `B`, `BMAKE` | Tekee lohkon kohteista (ne muuttuvat yhdeksi viitteeksi) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: kaikki yhden lohkon viitteet muuttuvat toisen lohkon viitteiksi samaan paikkaan samalla mittakaavalla ja kierrolla. Attribuuttien arvot, jotka molemmilla lohkoilla on, säilyvät. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE näyttää Lohkot-paneelin, jonka suodatin on kohdistimessa. Paneeli näyttää kuvan jokaisesta lohkosta (viimeksi sijoitetut ensin) luettelona tai ruudukkona; napsauta kuvaa tai vedä se piirustukseen, jolloin lohko sijoitetaan INSERT-komennolla. Kohdassa Kirjastot voit lisätä oman DWG- tai DXF-tiedoston: sen lohkot luetellaan kuvin ja kopioidaan tähän piirustukseen, kun sijoitat yhden. CadCraft Studiossa voi lisätä myös piirustuskansion, ja tiedostot ja kansiot muistetaan. |
| `BOMEDIT` | `BOMCOLUMNS` | Osaluettelotaulukon sarakkeet, ryhmittely, lajittelu, otsikko, summat ja huomautukset |
| `BOMEXPORT` |  | Tallentaa osaluettelotaulukon .csv-tiedostona |
| `BOMTABLE` | `BOM` | Elävä osaluettelotaulukko yhdelle vyöhykkeelle tai koko piirustukselle |
| `BOMUPDATE` |  | Päivittää kaikki osaluettelotaulukot nyt, myös lukitut |
| `BOMZONE` | `BZONE` | Nimetty piirustuksen alue osaluetteloa varten: kaksi kulmaa, monikulmio tai suljetun kohteen ääriviiva |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): valitse piste suljetun alueen sisältä, niin saat suljetun murtoviivan sen ympärille. Kaaret pysyvät kaarina. Saarekkeet hahmottaa myös sen sisällä olevat alueet. |
| `BOX` |  | Laatikko: kaksi kulmaa ja korkeus (3D) |
| `BPARAMETER` | `BPARAM` | Ei vielä toteutettu: parametrin (kuten Näkyvyys) lisääminen lohkoon. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Lohkoparametrit: nimettyjä parametreja kaavoilla ja useita näkyvyysparametreja yhdessä lohkossa. Toimii lohkoeditorissa (valitut kohteet tilaan) ja valitussa viitteessä (sen omat arvot ja tilat). |
| `BREAK` | `BR` | Katkaisee viivan, kaaren, ympyrän tai murtoviivan kahden pisteen välillä (BR) |
| `BREAKATPOINT` |  | Jakaa viivan, kaaren tai murtoviivan kahteen osaan pisteessä |
| `BREAKLINE` |  | Piirtää viivan katkaisumerkillä; sen koko ja päiden yli ulottuminen muistetaan. |
| `BREPLACE` |  | BREPLACE vaihtaa yhden lohkon toiseen. Valitut: valitse lohkoviitteitä ja nimeä lohko, jolla ne korvataan. Kaikki: nimeä lohko ja sen korvaaja, ja jokainen viite kaikissa tiloissa ja muiden lohkojen sisällä muuttuu. Viite säilyttää paikkansa, mittakaavansa, kiertonsa ja tasonsa sekä ne attribuuttiarvot, jotka molemmilla lohkoilla on; arvot, joille uudella lohkolla ei ole paikkaa, poistetaan ja ne nimetään. |
| `BSEARCH` |  | BSEARCH etsii lohkoja. Nimi: osa lohkon nimestä tai kuvio, jossa on * ja ?. Attribuutti: arvo (tai TAG=arvo), jonka viitteen attribuutit sisältävät. Geometria: valitse kohteita tai yksi lohkoviite, niin luetellaan lohkot, joiden muoto on vähintään 85 % samanlainen, parhaat ensin; koko, kierto ja peilaus eivät vaikuta. Avoimesta tilasta löytyneet viitteet valitaan seuraavaa komentoa varten. |
| `BURST` |  | Hajottaa lohkoviitteet ja säilyttää attribuuttien kertomat tiedot: jokainen arvo muuttuu tekstiksi attribuutin tasolle. |
| `BVHIDE` | `BVH` | Lohkoeditorissa: piilottaa kohteita nykyisessä näkyvyystilassa. |
| `BVSHOW` | `BVSH` | Lohkoeditorissa: näyttää kohteet, jotka nykyinen näkyvyystila piilottaa (ne näkyvät himmennettyinä valittaviksi). |
| `BVSTATE` | `BVS` | Lohkoeditorissa, lohkossa jossa on näkyvyystiloja: vaihtaa tilaan tai lisää, nimeää uudelleen tai poistaa tilan. |
| `CAL` |  | Laskee pituuden tai luvun: + − * / ja sulkeet, kirjoitettuina mihin tahansa |
| `CENTERLINE` | `CL` | Keskiviiva kahden viivan väliin: puolivälissä niiden välissä, tai puolittajaa pitkin, jos ne kohtaavat (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Keskimerkki: rasti ympyrän tai kaaren keskellä, keskiviivat juuri sen ulkopuolelle (CM) |
| `CHAMFER` | `CHA` | Viistää kahden viivan välisen kulman (D kaksi etäisyyttä, A pituus ja kulma, P murtoviivan jokainen kulma) |
| `CHSPACE` |  | CHSPACE: siirtää kohteita arkin ja mallin välillä näkymäruudun kautta. Ne skaalataan ja käännetään niin, että ne näyttävät samalta toiselta puolelta. Arkilla ne menevät malliin; kun työskentelet näkymäruudun kautta (MSPACE), ne tulevat arkille. |
| `CIRCLE` | `C` | Keskipiste ja säde, halkaisija, 2 tai 3 pistettä |
| `CLASS` |  | Asettaa valitut kohteet luokkaan, tai ilman valintaa asettaa aktiivisen luokan (? luettelee ne) |
| `CLASSES` | `CLS` | Luokat-paneeli: luokat lajittelevat kohteita tasojen yli; näytä, piilota ja muotoile niitä sekä ohita ne näkymäruuduittain (CLS) |
| `COMMANDLINE` | `CMDLINE` | Kiinnittää tai irrottaa komentorivin, tekee siitä yhden rivin, asettaa sen historiarivit tai avaa historian (F2) |
| `COMPARESETTINGS` | `CMPSET` | Vertaa mitoitustyylejä, tekstityylejä, tasoja, arkkeja tai yksiköitä: kaksi tässä piirustuksessa, tai tämä piirustus toista avointa vastaan, ja kopioi arvo toiselle puolelle. |
| `CONSTRAINTBAR` | `CBAR` | Näyttää tai piilottaa rajoitepalkit (Showall / Hideall, tai kohteittain) |
| `COPY` | `CO`, `CP` | Kopioi kohteita niin monta kertaa kuin napsautat |
| `COPYBASE` |  | Kopioi kohteet leikepöydälle valitsemasi kantapisteen kanssa |
| `COPYCLIP` |  | Kopioi kohteet leikepöydälle (Ctrl+C); PASTECLIP liittää ne |
| `COUNT` | `BCOUNT` | Laskee lohkoviitteet: valitse yksi, niin valitaan ja lasketaan kaikki sen lohkon viitteet |
| `COUNTTABLE` |  | Sijoittaa lohkomäärien taulukon |
| `CREDITS` |  | Lisää kirjaston tekijätiedot piirustukseen taulukkona. Aja uudelleen, niin taulukko päivittyy piirustuksen nykyisistä kohteista. |
| `CURSORSIZE` |  | Ristikon koko: 100 ulottaa sen reunasta reunaan piirustuksen yli (Asetukset › Kursori › Koko näyttö) |
| `CUTCLIP` |  | Leikkaa kohteet leikepöydälle (Ctrl+X): kopioi, sitten poista |
| `CYLINDER` | `CYL` | Sylinteri: keskipiste, säde ja korkeus (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Luettelee lohkot, niiden attribuutit ja kohteiden ominaisuudet taulukkona piirustukseen tai CSV-tiedostoon |
| `DATALINK` | `DL` | Taulukko CSV-tiedostosta, joka muistaa tiedoston, jotta se voidaan lukea uudelleen |
| `DATALINKUPDATE` | `DLU` | Lukee datalinkin tiedoston uudelleen ja täyttää sen taulukot |
| `DCALIGNED` | `DCALI` | Mitoitusrajoite: todellinen etäisyys pisteiden, pisteen ja viivan tai kahden viivan välillä |
| `DCANGULAR` | `DCANG` | Mitoitusrajoite: kahden viivan välinen kulma tai kaaren kulma |
| `DCCONVERT` |  | Muuttaa rajoitettavaan geometriaan piirretyt mitat mitoitusrajoitteiksi |
| `DCDIAMETER` | `DCDIA` | Mitoitusrajoite: ympyrän tai kaaren halkaisija |
| `DCDISPLAY` |  | Näyttää tai piilottaa mitoitusrajoitteet piirustuksessa |
| `DCHORIZONTAL` | `DCHOR` | Mitoitusrajoite: vaakasuora etäisyys |
| `DCLINEAR` | `DCLIN` | Mitoitusrajoite: vaaka- tai pystysuora etäisyys sijoituskohdasta |
| `DCRADIUS` | `DCRAD` | Mitoitusrajoite: ympyrän tai kaaren säde |
| `DCVERTICAL` | `DCVER` | Mitoitusrajoite: pystysuora etäisyys |
| `DELBLOCKS` |  | Poistaa lohkot: jokainen viite (myös sisäkkäiset, kaikilla arkeilla) ja määritelmät |
| `DELCONSTRAINT` | `DELCON` | Poistaa kaikki rajoitteet (geometriset ja mitoitusrajoitteet) valituista kohteista |
| `DELOPENING` |  | Poistaa oven tai ikkunan seinästä. |
| `DESCRIBE` | `DESC` | Kertoo, mitä piirustus sisältää: kuinka monta kohdetta, minkälaisia, kuinka suuria, mitä on valittu. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Tyhjentää valinnan (Esc) |
| `DETAILS` | `DET` | Oman toimiston detaljit, haettuna piirrettävän mukaan: etsi, lisää lohko, luettelo, poista, kytke ehdotukset päälle tai pois. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Piirtää kaavion tekstistä: Mermaid-vuokaavio, PlantUML-komponenttikaavio, D2, lähtö–kohde-luettelo tai draw.io XML, muokattavina lohkoina ja liittiminä |
| `DIMALIGNED` | `DAL`, `DIMALI` | Kahden pisteen välinen todellinen etäisyys |
| `DIMANGULAR` | `DAN`, `DIMANG` | Kahden viivan välinen kulma, kaaren kulma tai kolmen pisteen mukaan |
| `DIMARC` | `DAR` | Kaaren pituuden mitoitus: etäisyys kaaren pitkin, kaarimerkillä (DAR) |
| `DIMASZ` |  | Mitoitusasetus: nuolen koko |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Mitat pinottuina yhdestä perusviivasta |
| `DIMBREAK` | `DBREAK` | Katkaisee mitoitus- ja apuviivat kohdissa, joissa ne risteävät muiden kohteiden kanssa (Auto), kahden pisteen välillä (Manual), tai poistaa katkot |
| `DIMCONSTRAINT` | `DCON` | Mitoitusrajoitteet: lineaarinen, linjassa, kulma, säde, halkaisija, muunna |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Mittaketju, jokainen alkaa edellisen päästä |
| `DIMDEC` |  | Mitoitusasetus: desimaalit |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Kaaren tai ympyrän halkaisija |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Vapauttaa mitat kohteista, joihin ne on sidottu (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Muuttaa mitoitustekstiä (Koti, Uusi teksti, Kierrä) tai kallistaa apuviivoja (Vino) |
| `DIMEXE` |  | Mitoitusasetus: ulottuvuus mitoitusviivan ulkopuolelle |
| `DIMEXO` |  | Mitoitusasetus: siirtymä alkupisteestä |
| `DIMGAP` |  | Mitoitusasetus: väli tekstin ympärillä |
| `DIMINSPECT` |  | Tarkastusmitoitus: kehys arvon ympärillä, nimike ja kuinka usein osa tarkastetaan |
| `DIMJOGGED` | `DJO`, `JOG` | Taitettu sädemitoitus: säde piirretään lähemmästä pisteestä, kun keskipiste on kaukana (DJO) |
| `DIMJOGLINE` | `DJL` | Lisää taitemerkin lineaariseen tai linjassa olevaan mitoitusviivaan, jotta näkyy, ettei etäisyyttä ole piirretty mittakaavassa (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Vaaka- tai pystysuora etäisyys (R mihin tahansa kulmaan) |
| `DIMLUNIT` |  | Mitoitusasetus: pituuden muoto (1 tieteellinen, 2 desimaali, 3 tekninen, 4 arkkitehtuuri, 5 murtoluku) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Järjestysmitoitus: pisteen X- tai Y-etäisyys UCS-origosta johdolla (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Ohittaa mitoitusmuuttujat valituissa mitoissa muuttamatta niiden tyyliä; Tyhjennä palauttaa tyylin (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Kaaren tai ympyrän säde |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Sitoo mitoituksen pisteet kohteisiin, jolloin se seuraa ja mitataan uudelleen, kun ne siirtyvät (DRE) |
| `DIMSCALE` |  | Mitoitusasetus: kokonaismittakaava (koot × tämä) |
| `DIMSPACE` |  | Tasainen väli rinnakkaisten mittojen välillä, mitattuna perusmitasta (0 linjaa ne, Auto on kaksinkertainen tekstin korkeus) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Luo, muuttaa, asettaa nykyiseksi, poistaa, käyttää ja vertaa nimettyjä mitoitustyylejä (valintaikkuna; komentorivillä -DIMSTYLE) |
| `DIMTEDIT` | `DIMTED` | Siirtää mitoitustekstin mitoitusviivan vasemmalle, oikealle tai keskelle, tai kääntää sen |
| `DIMTEXTUNIT` | `DTU` | Mitoitusteksti mm-, cm-, m- tai km-yksiköissä tai piirustuksen omissa yksiköissä: valitut mitat, muuten uudet (DTU) |
| `DIMTXT` |  | Mitoitusasetus: tekstin korkeus |
| `DIST` | `DI` | Etäisyys ja kulma kahden pisteen välillä (DI) |
| `DISTRIBUTE` |  | Jakaa valitut kohteet tasaisesti vierekkäin tai ylös ja alas: yhtä suuret askeleet keskipisteiden välillä tai yhtä suuret välit; ulommat kaksi pysyvät |
| `DIVIDE` | `DIV` | DIVIDE (DIV): merkit, jotka jakavat viivan, kaaren, ympyrän, murtoviivan, splinin tai ellipsin yhtä suuriin osiin. Pisteet, tai Lohkolla lohko jokaisessa merkissä. |
| `DOCUMENTS` | `DOCS` | Avaa Asiakirjat-paneelin: tarkista piirustuksia ulos ja sisään, revisiot, julkaisutilat ja hyväksyntä projektikansiolle |
| `DOOR` | `DR` | Sijoittaa oven seinään. Puoli, jota napsautat, on puoli, johon se aukeaa. |
| `DRAWORDER` |  | Muuttaa piirtojärjestystä: tuo kohteet etualalle, lähetä taustalle tai aseta muiden kohteiden ylle tai alle. |
| `DUPLICATE` | `DUP` | Kopio, joka liikkuu osoittimen mukana: napsauta laskeaksesi (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Piirustuksen ominaisuudet: otsikko, tekijä ja muut, sekä omat nimi–arvo-parit |
| `DXFOUT` |  | Lataa piirustus DXF R12 -muodossa (Tallenna säilyttää oman muotonsa) |
| `EATTEDIT` | `DDATTE` | Muokkaa lohkoviitteen attribuutteja: arvot, teksti ja ominaisuudet, yksi attribuutti kerrallaan |
| `ELLIPSE` | `EL` | Akselin päätepisteet ja toinen puoliakseli |
| `ERASE` | `E`, `DELETE` | Poistaa kohteita |
| `EXPLODE` | `X` | Hajottaa murtoviivat, lohkot ja mitat osiinsa |
| `EXPORT` | `EXP` | Tallentaa kopion piirustuksesta lisäosan kirjoittamassa tiedostomuodossa |
| `EXPORT3D` | `3DEXPORT` | Vie 3D-mallin: GLB, OBJ tai STL |
| `EXPORTPOINTS` | `EXPPTS` | Kirjoittaa pisteet, ja lohkojen lisäyskohdat yhdellä attribuutilla kuvauksena, CSV- tai TXT-tiedostoon (PNEZD, PENZD tai XYZ) BIM- ja mittausohjelmiin |
| `EXTEND` | `EX` | Pidentää kohteita, kunnes ne kohtaavat muut: napsauta lähellä päätä, vedä useiden yli tai Shift+napsautus typistää |
| `EXTRIM` |  | EXTRIM: valitse yksi leikkausreuna, sitten puoli. Kaikki, mikä ylittää reunan, typistetään sillä puolella. Pois menevät osat näkyvät, kun liikutat osoitinta. |
| `EXTRUDE` | `EXT` | Pursottaa suljetut 2D-kohteet kiintokappaleiksi (3D) |
| `FIELD` |  | Sijoittaa kentän tekstiin, taulukon soluun tai attribuuttiin: päivämäärä, tiedostonimi, arkin numero, piirustusominaisuus, kohteen pinta-ala tai pituus, tai kaava |
| `FILLET` | `F` | Pyöristää tai neliöi kulman kahden kohteen välillä (R säde, P murtoviivan jokainen kulma, M useita) |
| `FIND` |  | Etsii ja korvaa sanoja tekstissä, attribuuttiarvoissa ja mitoitustekstissä |
| `FLATTEN` |  | Asettaa valittujen kohteiden korkeuden (Z) ja paksuuden 0:ksi, myös niissä käytettävissä lohkoissa. |
| `FLOOR` |  | Valitse kerros, jolle piirretään, lisää kerros, tai siirrä tai kopioi valinta sille. |
| `FLOORLAYERS` |  | Muuttaa kerrokset tasoiksi nimeltään Floor-Layer, tiedostoa varten, joka menee henkilölle ilman kerroksia. |
| `FLOORS` | `FLR` | Avaa Kerrokset-paneelin: pinoa kerroksia yhteen mallitilaan. |
| `GCCOINCIDENT` |  | Rajoite: kaksi pistettä kohtaavat, tai piste pysyy kohteella |
| `GCCOLLINEAR` |  | Rajoite: kaksi viivaa pysyvät samalla suoralla |
| `GCCONCENTRIC` |  | Rajoite: kaksi ympyrää tai kaarta jakavat keskipisteen |
| `GCEQUAL` |  | Rajoite: kaksi viivaa pysyvät samanpituisina, tai kaksi ympyrää tai kaarta samansäteisinä |
| `GCFIX` |  | Rajoite: piste tai koko kohde pysyy paikallaan |
| `GCHORIZONTAL` |  | Rajoite: viiva (tai kaksi pistettä) pysyy vaakasuorana |
| `GCPARALLEL` |  | Rajoite: kaksi viivaa pysyvät yhdensuuntaisina |
| `GCPERPENDICULAR` |  | Rajoite: kaksi viivaa pysyvät suorassa kulmassa |
| `GCSYMMETRIC` |  | Rajoite: kaksi pistettä, viivaa tai ympyrää peilaavat toisensa viivan yli |
| `GCTANGENT` |  | Rajoite: viiva ja ympyrä tai kaari (tai kaksi niistä) pysyvät tangentteina |
| `GCVERTICAL` |  | Rajoite: viiva (tai kaksi pistettä) pysyy pystysuorana |
| `GDSIN` | `GDS` | Näyttää IC-asettelun (GDSII-virtatiedosto): jokainen taso ja datatyyppi piirustustasona, litteänä, käyttäjäyksiköissä; vain katseluun ja mittaamiseen (laboratoriokokeilu) |
| `GEOMCONSTRAINT` | `GCON` | Geometriset rajoitteet: vaakasuora, pystysuora, yhdensuuntainen, tangentti, yhtyvä… |
| `GLBOUT` |  | Vie 3D-mallin GLB-muodossa (glTF) |
| `GRADIENT` | `GD` | Täyttää alueen liukuvärillä yhdestä tai kahdesta väristä |
| `GRIDMOVE` | `GM` | Siirtää ruudukkoviivaa ja kantaa siihen roikkuvat asiat mukanaan: seinät venyvät, pilarit, kuplat ja tunnisteet liikkuvat, mitat seuraavat. |
| `GROUP` | `G` | GROUP (G): anna valituille kohteille yhteinen nimi. Yhden napsautus valitsee sen jälkeen ne kaikki. Enter nimen kohdalla tekee nimettömän ryhmän. |
| `GROUPEDIT` |  | GROUPEDIT: muokkaa ryhmää. Valitse yksi sen kohteista tai anna sen Nimi, sitten Lisää tai Poista kohteita, REName nimeää sen uudelleen, muuta kuvausta tai päätä, valitseeko napsautus sen kokonaisena. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Täyttää alueen yhtenäisellä täytöllä tai kuviolla: napsauta sen sisällä tai valitse suljettuja kohteita (H) |
| `HATCHEDIT` | `HE` | Muuttaa viivoitusta: kuvio, mittakaava, kulma, alkupiste ja linkki rajaukseen. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Luo rajausmurtoviivat uudelleen viivoituksesta, linkitettynä tai ei |
| `HATCHTOBACK` |  | Lähettää kaikki viivoitukset kaiken muun taakse. |
| `HELP` | `?` | Tämä luettelo |
| `HIDEOBJECTS` |  | Piilottaa valitut kohteet, kunnes UNISOLATEOBJECTS. Ei tallennu piirustukseen. |
| `HISTORY` | `HIST` | HISTORY (HIST): tämän piirustuksen versiot — tällä tietokoneella säilytetyt kopiot, kun Studio tallentaa sen, ja pilven versiot — avattavaksi, palautettavaksi ja vertailtavaksi, muutokset värillä näkyvinä. |
| `ID` |  | Pisteen koordinaatit |
| `IMAGE` | `IM` | Antaa CadCraftille kuvatiedostot, joita piirustus käyttää (DWG tallentaa vain, missä ne olivat). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Sijoittaa kuvan (PNG tai JPEG) tiedostosta. |
| `IMAGECLIP` | `ICL` | Rajaa kuvan suorakulmioon tai monikulmioon, tai poistaa rajauksen. |
| `IMPORT` | `IMP` | Tuo lisäosan lukeman tyyppisen tiedoston tähän piirustukseen |
| `INSERT` | `I`, `DDINSERT` | Sijoittaa lohkon (S mittakaava, R kierto); F DWG/DXF-tiedostosta, L kirjastosta |
| `INTERSECT` | `IN` | Säilyttää vain kiintokappaleiden yhteiset osat (3D), tai 2D-alueiden yhteisen alueen |
| `ISODRAFT` |  | ISODRAFT: isometrinen piirtäminen päälle tai pois, tai suoraan Vasen, Yläpuoli tai Oikea taso. Kun se on päällä, Ortogonaali ja napaseuranta seuraavat tason kahta akselia, ruudukko piirtyy isometrisenä ja ELLIPSE saa Isoympyrän. |
| `ISOLATEOBJECTS` | `ISOLATE` | Näyttää vain valitut kohteet; kaikki muu tässä tilassa on piilotettu, kunnes UNISOLATEOBJECTS. Ei tallennu piirustukseen. |
| `ISOPLANE` |  | ISOPLANE: valitse isometrinen taso, jolle piirretään: Vasen, Yläpuoli tai Oikea. Enter siirtyy seuraavaan, kuten F5 tekee isometrisen piirtämisen ollessa päällä. |
| `JOIN` | `J` | Yhdistää viivat, kaaret ja murtoviivat, jotka kohtaavat päästä päähän, yhdeksi murtoviivaksi; saman suoran viivat yhdeksi viivaksi (J) |
| `LASER` | `LASERCUT` | Avaa Laser-paneelin: lähetä tasoja laserleikkurille tai kaiverrukselle (GRBL G-code) |
| `LASSOMODE` |  | Painettuna ja vedettäessä piirtää lassovalinnan (1) tai suorakulmion (0) |
| `LAYDEL` |  | Poistaa tason ja kaikki sillä olevat kohteet (mallissa, arkeilla ja lohkoissa) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Avaa tasonhallinnan: kaikki tasot yhdessä taulukossa |
| `LAYERPANEL` |  | Näyttää tasopaneelin. |
| `LAYFRZ` |  | Jäädyttää jokaisen valitsemasi kohteen tason |
| `LAYGROUP` | `LG` | Ryhmittää tasot kansioiksi Tasot-paneelissa. |
| `LAYISO` |  | Eristää valittujen kohteiden tasot (kaikki muut tasot pois päältä) |
| `LAYLOCKFADE` |  | Asettaa, kuinka paljon lukittujen tasojen kohteet himmenevät ja voiko napsautus valita ne. |
| `LAYMCUR` |  | Tekee valitsemasi kohteen tason nykyiseksi |
| `LAYMRG` |  | Yhdistää tasot: niiden kohteet siirtyvät kohdetasolle, ja yhdistetyt tasot poistuvat |
| `LAYOFF` |  | Sammuttaa jokaisen valitsemasi kohteen tason |
| `LAYON` |  | Kytkee kaikki tasot päälle |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Uusi arkki, jossa on piirustusotsikko ja näkymäruutu |
| `LAYTHW` |  | Sulattaa kaikki tasot |
| `LAYUNISO` |  | Kytkee takaisin päälle tasot, jotka LAYISO sammutti |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Muuntaa vanhoilla vietnamilaisilla fonteilla (TCVN3 / ABC-fontit kuten .VnTime ja VNI-fontit kuten VNI-Times) kirjoitetun tekstin Unicodeksi. Tällainen teksti näkyy jo oikein; tämä kirjoittaa sen pysyvästi uudelleen, laskurilla ja yhdellä kumoamisvaiheella. |
| `LENGTHEN` | `LEN` | Pidentää tai lyhentää viivoja, kaaria ja murtoviivoja: määrällä, prosentilla, kokonaispituuteen tai vetämällä (LEN) |
| `LIBRARY` | `LIB` | Kirjastopaneeli: sijoita kohteita, tarkista päivitykset, tekijätiedot |
| `LIMITS` |  | Asettaa piirustuksen rajat: ON, OFF, tai vasemman alakulman ja oikean yläkulman kulmat. Rajojen ollessa päällä rajojen ulkopuoliset pisteet hylätään |
| `LINE` | `L` | Suoria jaksoja, kukin oma kohteensa |
| `LINETYPE` | `LT`, `CELTYPE` | Uusien kohteiden saama viivatyyppi (tason mukaan, lohkon mukaan tai nimetty) |
| `LINKVIEWS` | `SYNCVIEWS` | Panoroi ja zoomaa kaikkia ruutuja yhdessä (jaettu näyttö), vertaillaksesi kahta piirustusta tai revisiota |
| `LISPEDIT` | `VLIDE` | LISPEDIT (tai VLIDE) avaa LISP-editorin: ikkuna rutiinin kirjoittamiseen, lataamiseen ja kokeiluun. Lataa piirustukseen lukee jokaisen muodon, kuten tiedoston lataaminen APPLOAD-komennolla tekee, ja luo sen komennot. Suorita valinta laskee valittujen muotojen tai kohdistimen kohdalla olevan muodon arvon. Konsoli näyttää, mitä rutiini tulosti, ja jokaisen virheen rivinumeroineen. Vastaava sulkusulku merkitään kirjoittaessasi, ja Enter sisentää uuden rivin. Uusi, Avaa ja Tallenna toimivat .lsp-tiedostolla. Tekstin vieressä olevat luettelot näyttävät rutiinin määrittelemät funktiot, ne sen kutsumat funktiot, joita tällä LISP:llä ei vielä ole, ja kaikki sen funktiot. Ikkuna ei estä piirustusta, joten rutiini voi pyytää pisteitä; Stop tai Esc lopettaa käynnissä olevan rutiinin. |
| `LIST` | `LI`, `LS` | Kuvaa kohteet historiassa |
| `LTSCALE` | `LTS` | Piirustuksen viivatyypin mittakaava (jokainen viiva ja väli kerrotaan sillä) |
| `LWDISPLAY` | `LWT` | Näyttää tai piilottaa viivanpaksuudet ruudulla (LWT-painike tilarivillä) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Uusien kohteiden saama viivanpaksuus (tason mukaan, lohkon mukaan, oletus tai mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Karttatasot mallitilan alla: piirustuksen koordinaatisto, laatat, WMS, WMTS, ArcGIS, kuvat |
| `MASSPROP` |  | MASSPROP: alueiden ja suljettujen kohteiden poikkileikkausominaisuudet: pinta-ala, piiri, painopiste, hitausmomentit ja hitaustulo, kiertosäteet ja pääakselit. Tarkka viivoille ja kaarille. Raportin voi kirjoittaa tekstitiedostoon. |
| `MATCHPROP` | `MA`, `PAINTER` | Ominaisuuksien vastaavuus: kopioi yhden kohteen taso, väri ja muut muille (MA) |
| `MEASURE` | `ME` | MEASURE (ME): merkki annetun pituuden välein viivalla, kaarella, ympyrällä, murtoviivalla, splinillä tai ellipsillä, päästä, joka on lähimpänä napsautustasi. Pisteet, tai Lohkolla lohko jokaisessa merkissä. |
| `MEASUREGEOM` | `MEA` | Mittaa etäisyyden, säteen, kulman tai alueen (MEA) |
| `MINSERT` |  | MINSERT: sijoittaa lohkon riveihin ja sarakkeisiin kerralla. Jokainen on oma viitteensä, joten voit siirtää tai poistaa minkä tahansa niistä. |
| `MIRROR` | `MI` | Peilaa kohteita viivan yli |
| `MLEADER` | `MLD`, `MLEAD` | Monijohto: nuoli, johto ja huomautus yhtenä kohteena (MLD) |
| `MLEADERALIGN` | `MLA` | Kohdistaa monijohdot yhteen niistä kanssaan tiettyyn suuntaan, tasaisin välein tai jaettuna kahden pisteen välille (MLA) |
| `MLEADERCOLLECT` | `MLC` | Kokoaa useita monijohtoja yhdeksi: niiden lohkot riviin tai sarakkeeseen, tai huomautukset peräkkäin (MLC) |
| `MLEADEREDIT` | `MLE` | Lisää johtoviivoja monijohtoon tai poistaa ne; vaihtaa sen sisällön tekstin ja lohkon välillä (MLE) |
| `MLINE` |  | Piirtää rinnakkaisia viivoja yhdessä, liitettyinä kulmista. |
| `MOVE` | `M` | Siirtää kohteita kantapisteen ja toisen pisteen mukaan |
| `MSPACE` | `MS` | Työskentele mallissa avoimen arkin näkymäruudun kautta (tai kaksoisnapsauta näkymäruudun sisällä). |
| `MTEXT` | `MT`, `T` | Kappaleteksti: vedä leveys, kirjoita sitten paikalleen; Enter aloittaa uuden kappaleen (T) |
| `MVIEW` | `MV` | Näkymäruutu malliin asettelussa |
| `NAMEDVIEW` | `NV`, `VIEWS` | Nimetyt näkymät: tallenna ruudulla oleva näkymä (tai ikkuna) nimellä ja palaa siihen (NV) |
| `NCOPY` |  | Kopioi kohteita lohkoviitteestä tai linkitetystä piirustuksesta piirustukseen hajottamatta sitä. |
| `NEARBY` |  | Kertoo, mitä on lähellä osoitinta, lähimmästä ensin, etäisyyden ja puolen kanssa. |
| `NEW` |  | Aloittaa uuden piirustuksen |
| `OBJECTSCALE` | `OBJSCALE` | Merkintämittakaavat merkintätekstille ja -mitoille: lisää mittakaava, poista yksi, lisää nykyinen mittakaava tai luettele ne (jokainen näkymäruutu näyttää ne oman mittakaavansa kokoisina) |
| `OBJOUT` |  | Vie 3D-mallin OBJ-muodossa |
| `OFFSET` | `O` | Rinnakkaiset kopiot etäisyydellä |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: miten OFFSET sulkee aukot murtoviivan ulkokulmissa. 0 pidentää jaksot, 1 lisää kaaren, 2 lisää suoran leikkauksen. Säilyy tässä istunnossa. |
| `OLELIST` | `OLES` | Luettelee piirustuksen OLE-kohteet ja asettaa kopion yhden kuvasta valitsemaasi paikkaan |
| `OPEN` |  | Avaa DWG- tai DXF-tiedoston tältä tietokoneelta |
| `OPENIN3D` |  | Avaa tämän piirustuksen 3D-mallinnussovelluksessa uudessa välilehdessä (mitään ei lähetetä) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Avaa kohteen tartuntavalikon: valitse, mitkä tartunnat ovat päällä. Myös oikea napsautus Tartunta-kohdassa tilarivillä. |
| `OVERKILL` |  | Poistaa kaksoiskappaleet ja yhdistää päällekkäiset tai päästä päähän menevät viivat ja kaaret annetun toleranssin sisällä. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parametrit-paneeli: käyttäjän parametrit ja mitoitusrajoitteet yhdessä taulukossa |
| `PARTSLIST` | `PLIST` | Osaluettelotaulukko jokaisesta Kirjastosta sijoitetusta vakio-osasta ja teräsprofiilista |
| `PASTEAREA` | `PAREA` | Liittää MarkupCraftissa kopioidun alueen (Kopioi alue) todellisessa koossaan kuvana. |
| `PASTEBLOCK` |  | PASTEBLOCK: liittää kopioimasi yhtenä lohkona. Lohkolle tulee oma nimi; RENAME antaa sille oman. |
| `PASTECLIP` |  | Liittää leikepöydän: se seuraa osoitinta, napsauta kohtaan, johon se menee (Ctrl+V) |
| `PASTEORIG` |  | Liittää leikepöydän siihen koordinaatteihin, joista se kopioitiin (Ctrl+Shift+V) |
| `PDF` |  | Antaa CadCraftille PDF-tiedostot, joita piirustuksen taustakuvat käyttävät |
| `PDFADJUST` |  | Himmentää, kontrastoi, muuttaa mustavalkoiseksi tai kytkee pois PDF-taustakuvan |
| `PDFATTACH` | `PDFATT` | Liittää PDF-sivun taustakuvaksi (PDFATTACH) |
| `PDFCLIP` |  | Rajaa PDF-taustakuvan suorakulmioon tai monikulmioon |
| `PDFIMPORT` | `PDFIM` | Muuttaa PDF-sivun viivat, täytöt ja tekstin piirustuskohteiksi (PDFIMPORT) |
| `PDFLAYERS` |  | Kytkee PDF-taustakuvan tasot päälle tai pois |
| `PEDIT` | `PE` | Muokkaa murtoviivaa: sulje, avaa, yhdistä, leveys, sovita käyrä, spliinikäyrä, suorista, viivatyypin luonti, käännä; viivat, kaaret ja splinit voidaan muuttaa murtoviivoiksi |
| `PHOTOSKETCH` | `PSK` | Muuttaa paperille tehdyn käsinpiirroksen valokuvan viivoiksi ja kaariksi mittakaavassa, oikaisee perspektiivin ja antaa jokaiselle kynän värille oman tasonsa. |
| `PICKSTYLE` |  | PICKSTYLE: valitseeko yhden ryhmän kohteen valinta koko ryhmän (1, aloitusasetus) vai vain sen kohteen (0). Säilyy tässä istunnossa. |
| `PLAN` |  | Kääntää näkymän niin, että UCS:n X-akseli (nykyinen ucs, tallennettu Ucs tai Maailma) on vaakatasossa ruudulla. Mikään piirustuksessa ei siirry. |
| `PLINE` | `PL` | Murtoviiva viiva- ja kaarijaksoista |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Tulostaa PDF:ksi: asettelu tai malli mittakaavassa |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tulostustyylitaulukot: määrittää, miten kukin väri tulostuu (väri, musta, harmaa, muste, viivanpaksuus); säilyy piirustuksen mukana (STYLESMANAGER) |
| `POINT` | `PO` | Pistekohteet |
| `POINTCLOUD` | `PC` | Liitetty pistepilvi: viipale, korkeus, paksuus, väri, koko, näkyvyys, zoomaus, irrotus |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Liittää pistepilven (LAS, LAZ, XYZ, PTS) piirustuksen alle |
| `POLARANG` |  | Napaseurannan askel asteina (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Säännöllinen monikulmio |
| `PRESSPULL` |  | Työntää tai vetää kiintokappaleen pintaa (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Avaa Ominaisuudet-paneelin (myös Ctrl+1, tai kaksoisnapsauta kohdetta) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Taittaa Ominaisuudet-paneelin ikkunan reunaan |
| `PSPACE` | `PS` | Poistu näkymäruudusta, jossa työskentelet, ja palaa arkille (tai kaksoisnapsauta sen ulkopuolella). |
| `PUBLISH` | `-PUBLISH` | Tulostaa useita tai kaikki arkit yhteen PDF:ään (sivu ja kirjanmerkki arkkia kohti) |
| `PURGE` | `PU` | Poistaa lohkomääritykset, joita mikään ei käytä |
| `QDIM` |  | Pikamitoitus: mittaa useita kohteita kerralla (jatkuva, perusviivasta, portaittain, järjestysmitoitus, säde tai halkaisija) |
| `QPMODE` | `QP` | Pikaominaisuudet kohdistimen mukaan päälle tai pois |
| `QSELECT` | `QS` | Pikavalinta: jokainen tyypin kohde, jonka taso, väri, koko tai nimi täsmää (QS) |
| `RASTERSNAP` |  | Kytkee tartunnan skannattujen arkkien viivoihin päälle tai pois. |
| `RAY` |  | Säde: rakennusviiva pisteestä, yhteen suuntaan päättymätön. |
| `RECOVER` |  | Avaa vaurioituneen DXF- tai DWG-tiedoston: ohittaa luettavissa olemattomat osat kieltäytymisen sijaan, kertoo mitä ohitettiin, ja tarkistaa ja korjaa piirustuksen kuten AUDIT tekee. |
| `RECTANG` | `REC`, `RECTANGLE` | Suljettu murtoviiva kahdesta kulmasta |
| `REDLINE` | `RDL` | Punamerkintä revisioksi: lue MarkupCraft-punamerkintäpaketti, hyväksy tai hylkää jokainen muutos, pilvistä hyväksytyt revisiolokilla ja tallenna vastaustiedosto (RDL) |
| `REDO` |  | Tee uudelleen se, mikä kumottiin |
| `REFCLOSE` |  | Lopettaa lohkon muokkaamisen paikallaan: tallentaa sen tai hylkää muutokset |
| `REFEDIT` |  | Muokkaa lohkoa paikallaan, siellä missä sen viite on, muun piirustuksen himmentyessä; REFCLOSE tallentaa sen |
| `REGEN` | `RE` | Rakentaa uudelleen tässä välilehdessä piirretyn piirustuksesta |
| `REGENALL` | `REA` | Rakentaa uudelleen kaikissa välilehdissä, ruuduissa ja avoimissa piirustuksissa piirretyn |
| `REGION` | `REG` | REGION (REG): tee tasaisia alueita suljetuista kohteista, tai viivoista, kaarista ja murtoviivoista, jotka sulkeutuvat silmukaksi päästä päähän. UNION, SUBTRACT ja INTERSECT yhdistävät alueita, ja MASSPROP antaa niiden poikkileikkausominaisuudet. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Rekisteröi useita skannauksia: aseta ne yhteen kehykseen valittujen pistepareja tai kohteiden mukaan, tarkenna ICP:llä, vie yksi LAS- tai E57-tiedosto |
| `REINIT` |  | Lataa aliastiedostosi uudelleen |
| `RENAME` | `-RENAME`, `REN` | Nimeää uudelleen tason tai lohkon (jokainen kohde tai viite seuraa) |
| `REVCLOUD` | `RC` | Revisiopilvi: pyöristä suorakulmio, monikulmio, vapaa polku tai kohde (RC) |
| `REVOLVE` | `REV` | Kiertää suljetut 2D-kohteet akselin ympäri kiintokappaleiksi (3D) |
| `ROTATE` | `RO` | Kiertää kohteita kantapisteen ympäri |
| `SAMPLES` | `SAMPLE` | Avaa yhden CadCraftin esimerkkipiirustuksen (arkkitehtuurisarja, toteutunut) oppiaksesi |
| `SAVE` | `QSAVE` | Lataa piirustuksen sen muodossa (DWG tai DXF) |
| `SAVEAS` |  | Lataa piirustuksen DWG- tai DXF-muodossa: valitse kumpi |
| `SAYSEL` |  | Kertoo, mikä on valittu, yksi lause kullekin. |
| `SCALE` | `SC` | Skaalaa kohteita kantapisteen ympäri |
| `SCALELISTEDIT` | `SCALELIST` | Lisää, muokkaa ja poista piirustuksen omia mittakaavoja; ne näkyvät näkymäruudun ja tulostusmittakaavojen luetteloissa ja tallentuvat tiedostoon (SCALELIST) |
| `SCANALIGN` | `SCL` | Kohdistaa skannatun arkin kahteen pisteeseen: siirtää, kääntää ja tarvittaessa skaalaa sen. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Lisää skannatun piirustuksen: PNG, JPEG tai TIFF (yksi sivu tai kaikki monisivuisen tiedoston sivut) tai PDF-sivun, joka on kuva. |
| `SCANCLEAN` | `SCC` | Tekee skannatusta arkista mustavalkoisen ja poistaa täplät. |
| `SCANCROP` | `SCR` | Rajaa skannatun arkin ikkunaan. |
| `SCANDESKEW` | `SCD` | Löytää kulman, jossa skannatun arkin pitkät viivat ovat, ja kääntää arkin suoraan, kun hyväksyt kulman. |
| `SCANERASE` | `SCE` | Poistaa skannatun arkin alueen: suorakulmion, monikulmion tai lassovalinnan. |
| `SCANINFO` | `SCI` | Näyttää skannatun arkin alkuperäisen tiedoston ja sen jälkeen tehdyt vaiheet. |
| `SCANSCALE` | `SCS` | Skaalaa skannatun arkin: valitse sieltä kaksi pistettä ja kirjoita niiden todellinen etäisyys. |
| `SCANTRACE` | `SCT` | Jäljittää skannatun arkin viivoiksi ja kaariksi uudelle tasolle asettamaasi toleranssiin. Teksti ja viivoitus pysyvät rasterina. |
| `SELECT` |  | Valitsee kohteet nyt (P, Edellinen, seuraavassa komennossa) |
| `SELECTALL` | `AI_SELALL` | Valitsee jokaisen muokattavan kohteen tässä välilehdessä (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Valitsee kaikki valitsemasi kaltaiset kohteet: sama tyyppi, taso ja väri (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Näyttää Arkkisarja-paneelin: arkit useista piirustuksista, numeroituina, julkaistuina yhdeksi PDF:ksi. |
| `SHORTCUTS` | `KEYS` | Antaa mille tahansa komennolle oman näppäimen (Ctrl tai Alt kirjaimella, tai vapaa toimintonäppäin), säilytettynä tässä selaimessa tai työpöytäsovelluksessa. |
| `SHXFONTS` | `SHX` | Antaa CadCraftille SHX-fontit kansiosta tai tiedostoista, jotta tekstityylit, jotka niitä nimeävät, piirtyvät niillä (luettelo, poisto, käänteinen) |
| `SKETCHFIX` | `SKF` | Piirrä vapaita viivoja; jokainen muuttuu siistiksi viivaksi, ympyräksi, kaareksi, suorakulmioksi tai murtoviivaksi, suoristettuna ja muihin liitettynä. |
| `SKETCHLIVE` | `SKL` | Piirrä kynällä: jokainen veto muuttuu tarkaksi viivaksi, ympyräksi, kaareksi tai suorakulmioksi nostaessasi kynän, tarttuu piirustukseen, ja sen koon voi kirjoittaa päälle. |
| `SPLINE` | `SPL` | Piirtää splinin pisteiden kautta (tai ohjauspolygonilla), tai muuttaa murtoviivan splineksi |
| `SPLINEDIT` | `SPE` | Muokkaa splinia: sovita pisteitä, ohjauspisteitä ja painoja, avaa tai sulje, käännä tai muuta murtoviivaksi |
| `SPLIT` |  | Jakaa piirustusalueen ruuduiksi (VPORTS mallissa; myös arkilta) |
| `STEELMEMBER` | `SMEMBER` | Teräsjäsen 3D:nä vakioprofiilista: kaksi pistettä (palkki) tai kantapiste ja korkeus (Pilari) |
| `STLOUT` |  | Vie 3D-mallin STL-muodossa (millimetreinä) |
| `STRETCH` | `S` | Venyttää: vedä risteävä ikkuna päiden yli siirtääksesi; sisällä oleva liikkuu, loput pysyvät (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Tekstityylit: fontti, korkeus, leveys ja kaltevuus, jotka uusi teksti saa (valintaikkuna; komentorivillä -STYLE) |
| `SUBTRACT` | `SU` | Ottaa kiintokappaleet pois toisista (3D), tai 2D-alueet pois alueista |
| `SWBOUT` | `SWMACRO` | Lataa makron SolidWorksille (.swb), joka rakentaa mallin uudelleen yhdeksi rajoitetuksi luonnokseksi |
| `SWEEP` |  | Pyyhkäisee suljetut 2D-kohteet polkua pitkin (viiva, murtoviiva, kaari, ympyrä) kiintokappaleiksi (3D) |
| `TABLE` | `TB` | Tekee taulukon: rivit ja sarakkeet, tai leikepöydän taulukkosoluista tai CSV-tiedostosta |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Muokkaa taulukkoa: kirjoita soluun, lisää ja poista rivejä ja sarakkeita, koot, yhdistetyt solut, tasaus |
| `TABLEEXPORT` |  | Tallentaa taulukon näyttämän sisällön CSV-tiedostona |
| `TABLEPASTE` | `PASTETABLE` | Tekee taulukon leikepöydän taulukkosoluista |
| `TABLESTYLE` | `TS` | Taulukkotyylit: tekstin korkeudet, tasaus, marginaali ja reunat otsikolle, ylätunnisteelle ja datarivreille |
| `TAGS` |  | Tunnisteet lohkoviitteissä: määrittele tunniste (tyyppi, sallitut arvot, lohkot joihin se sovelletaan), aseta se valituille viitteille ja luettele ne taulukkona, jonka voi tallentaa CSV:nä |
| `TEXT` | `DT`, `DTEXT` | Yhden rivin teksti; Enter aloittaa seuraavan rivin |
| `TEXTEDIT` | `ED`, `DDEDIT` | Muokkaa tekstiä paikallaan: valitse teksti (tai kaksoisnapsauta sitä) (ED) |
| `TEXTMASK` | `TMASK` | Asettaa taustamaskin tekstien taakse (piirustuksen tausta tai väri), tai poistaa sen. |
| `TEXTTOFRONT` |  | Tuo kaikki teksti, mitat ja johtoviivat muiden kohteiden eteen. |
| `TOOLBAR` |  | Valitse, mitä työkalurivin painikkeet näyttävät: kuvakkeet ja teksti, vain kuvakkeet tai vain teksti (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Sijoittaa työkalurivin ikkunan ylä-, ala-, vasemmalle tai oikealle puolelle |
| `TOOLBARROWS` |  | Valitse, kuinka monta riviä työkalurivi käyttää: sovita, 2 tai 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Tekee piirustuksen yläpuolella olevista palkeista vakio- tai tiiviit |
| `TOUCHCROSSHAIR` | `TCX` | Siirretty risti piirtämiseen sormella: yksi sormi liikuttaa ristiä, joka on sen yläpuolella ja sivulla, jotta sormi ei peitä pistettä. Sormen nostaminen ei valitse mitään; Napsautuspainike tai napautus toisella sormella valitsee ristin kohdalta, ja napsautuksen pitäminen vedettäessä raahaa. Pitkä painallus tai Enter-painike on Enter. Kaksi sormea panoroi ja zoomaa. Vaihtoehdot: ON, OFF, Auto (vain kun sormi on ainoa osoitin), Distance (Etäisyys), Side (Puoli). |
| `TOUR` | `TUTORIAL` | Käy kuusivaiheisen ensimmäisen piirustuksen kierroksen uudelleen |
| `TRIM` | `TR` | Leikkaa kohteet takaisin kohtiin, joissa muut ylittävät ne: napsauta palaa, vedä useiden yli tai Shift+napsautus pidentää |
| `TRIMEXTENDMODE` |  | Miten TRIM ja EXTEND alkavat: 1 Pika (jokainen kohde on leikkausreuna tai raja), 0 Vakio (valitse reunat ensin) |
| `TTR` |  | Ympyrä, joka tangentoi kahta kohdetta, säteellä jonka annat (sama kuin CIRCLE T) |
| `TURNLEFT` |  | Kääntää näkymää 90° vasemmalle (vastapäivään): UCS Z -90, ja näkymä seuraa. Mikään piirustuksessa ei siirry. |
| `TURNRIGHT` |  | Kääntää näkymää 90° oikealle (myötäpäivään): UCS Z 90, ja näkymä seuraa. Mikään piirustuksessa ei siirry. |
| `TURNWORLD` |  | Takaisin maailmaan: UCS Maailma, ja näkymä on taas vaakasuorassa. |
| `TXT2MTXT` | `T2M` | Yhdistää yhden rivin tekstit yhdeksi kappaletekstiksi ylhäältä alas. |
| `UCS` |  | Oma koordinaatistosi: origo ja X-akseli (origo, Z-kulma, 3point, OBject, Previous, World, NAmed). Kirjoittamasi pisteet, ortogonaali, napaseuranta, ruudukko ja uusi teksti seuraavat sitä; näkymä kääntyy niin, että sen X-akseli on vaakatasossa. Mikään piirustuksessa ei siirry. |
| `UNDO` | `U` | Kumoa viimeisin komento |
| `UNGROUP` |  | UNGROUP: purkaa ryhmät. Valitse ryhmien kohteita tai anna Nimi. Kohteet jäävät piirustukseen. |
| `UNION` | `UNI` | Yhdistää kiintokappaleet yhdeksi (3D), tai 2D-alueet yhdeksi alueeksi |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Näyttää uudelleen kaikki kohteet, jotka ISOLATEOBJECTS tai HIDEOBJECTS piilotti. |
| `UNITS` | `UN`, `DDUNITS` | Miten pituudet näytetään ja kirjoitetaan: desimaali, jalat ja tuumat, murtoluvut (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Laskee kentät uudelleen ja valitsee, milloin ne päivittyvät itsestään |
| `USDOUT` |  | Vie 3D-mallin USD-muodossa (.usda-teksti, .usdc-binääri tai .usdz-paketti) |
| `VIEW` | `-VIEW`, `V` | Vakio-3D-näkymät, perspektiivi tai yhdensuuntainen (3D) |
| `VIEWBASE` | `FLATSHOT` | Sijoittaa litteän 2D-näkymän 3D-kiintokappaleista (edestä, päältä, sivulta tai isometrisenä, piilotetut viivat katkoviivoina) arkille tai malliin |
| `VIEWLABEL` | `VL` | Näkymän otsikko arkilla, joka näyttää näkymäruudun näkymän nimen ja muuttuu sen mukana. |
| `VOICE` |  | Kytkee puhutut komennot päälle tai pois. Ne tunnistetaan tällä tietokoneella. |
| `VPCLIP` |  | Rajaa arkin näkymäruudun suljettuun kohteeseen tai piirrettyyn monikulmioon; Delete tekee siitä taas suorakulmion |
| `VPLAYER` |  | Jäädyttää tai sulattaa tasot vain joissakin näkymäruuduissa (Freeze, Thaw, Reset), ja valitsee, mitkä tasot uudet näkymäruudut aloittavat jäädytettynä (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Jakaa piirustusalueen ruuduiksi, kukin omalla näkymällään (arkilla: näkymäruutu, kuten MVIEW) |
| `VPVIEW` |  | Asettaa, mitä näkymäruutu näyttää: valitse ikkuna mallissa |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D-näkymän visuaalinen tyyli: varjostettu, reunat, piilotettu viiva, rautalanka, röntgen |
| `WALL` | `WA` | Piirtää 2D-seiniä kuten murtoviivan. Ne liittyvät yhteen ja kantavat ovia ja ikkunoita. |
| `WALLARC` | `WARC` | Piirtää seinäkaaren. Pohjapiirroksen seinät ovat suoria, joten kaari piirretään lyhyinä suorina seinänä (15 astetta kukin), jotka liittyvät yhteen. |
| `WALLDELSEG` |  | Poistaa seinän osan kahden pisteen välillä. Jäljelle jäävä pysyy yhtenä tai kahtena seinänä. |
| `WALLDIM` |  | Kirjoita uusi arvo mitoitukselle: sen kaukaisin seinä siirtyy kohtisuoraan itseensä, ensimmäisen pään seinä pysyy, ja siihen liittyvät seinät seuraavat. |
| `WALLDISJOIN` |  | Valitse seinä lähellä päätä, jotta sen liitokset kyseisessä päässä kielletään: pää piirretään neliönä eikä mikään seuraa sitä. Valitse uudelleen sallitaksesi. |
| `WALLGRID` |  | Lukitse seinä ruudukkoviivaan: sen suuntaisesti tai yksi pää siinä. Siirrä viivaa GRIDMOVE:lla, ja seinä seuraa. |
| `WALLHOLD` |  | Kohdistus ja lukitus: seinä pysyy paikallaan toista seinää vasten (sen viivalla tai etäisyydellä, jonka sillä on). Jos toinen liikkuu, toinen seuraa. |
| `WALLHOLDDIM` |  | Lukitse kahden rinnakkaisen seinän välinen etäisyys. Jos toinen liikkuu, toinen seuraa säilyttääkseen sen. |
| `WALLHOLDS` |  | Luettelee seinien lukitukset. |
| `WALLJOINS` |  | Antaa jokaiselle vanhemman piirustuksen seinälle sen tunnuksen ja tallentaa niiden väliset liitokset. Tämä tapahtuu myös ensimmäisessä tekemässäsi muutoksessa. |
| `WALLJOINSTYLE` |  | Napsauta kulmaa, jossa kaksi seinää kohtaa päästä päähän, muuttaaksesi sen piirtotapaa: jiiri, katkaisu, neliöleikkaus. T vaihtaa, mikä seinä kulkee läpi. |
| `WALLOFFSET` | `WO` | Siirtää seinää kohtisuoraan itseensä etäisyydellä (siihen liittyvät seinät seuraavat), tai tekee kopion siinä etäisyydessä. |
| `WALLPICK` |  | Tekee seinät viivalle tai murtoviivalle piirustuksessa, ja siihen liittyvät viivat, jos vastaat Kyllä. |
| `WALLPOLY` | `WP` | Piirtää seinät säännöllisen monikulmion ympärille, 3–64 sivua, kuten POLYGON. |
| `WALLRECT` | `WR` | Piirtää neljä liitettyä seinää kahdesta vastakkaisesta kulmasta, kuten RECTANG. |
| `WALLREJOIN` |  | Tekee seinän kaksi osaa uudelleen yhdeksi seinäksi. Ensimmäinen säilyttää paikkansa piirustuksessa. |
| `WALLROT` |  | Piirtää neljä liitettyä seinää kierrettynä suorakulmiona mihin tahansa kulmaan: ensimmäinen sivu, sitten kuinka pitkälle ulos. |
| `WALLSPLIT` | `WS` | Jakaa seinän kahteen pisteessä, tai siinä, missä toinen seinä ylittää. Osat pysyvät liitettyinä, ellet pyydä väliä tai vapaita päitä. Ovet ja ikkunat seuraavat omaa osaansa. |
| `WALLSPLITGAP` |  | Jakaa seinän jättäen aukon: kirjoita aukko, valitse seinä ja sitten piste. Osilla on vapaat päät, ja ne voidaan liittää uudelleen. |
| `WALLSTRETCH` |  | Venytä ikkunalla: sen sisällä olevat seinäpäät siirtyvät, kokonaan sisällä olevat seinät siirtyvät kokonaan, ja sivuihin törmäävät seinät liukuvat niiden mukana. |
| `WALLTAN` |  | Jatkaa seinää kaarella, joka lähtee siitä seinää pitkin (piirretään lyhyinä suorina seinänä). |
| `WALLTRACE` |  | Tekee seinät pienimmän suljetun alueen ympärille viivoista ja seinistä, pisteen ympärillä jota napsautat. |
| `WALLUNHOLD` |  | Poistaa lukitukset seinältä (ja muiden seinien lukitukset siihen). |
| `WBLOCK` | `W`, `-WBLOCK` | Kirjoittaa lohkon, joitakin kohteita tai koko piirustuksen uuteen DWG- tai DXF-tiedostoon (W) |
| `WEDGE` | `WE` | Kiila: kaksi kulmaa ja korkeus; se laskeutuu pois ensimmäisestä kulmasta (3D) |
| `WHEREAMI` | `WHERE` | Kertoo, missä kohdistin on. |
| `WHOHAS` |  | Kertoo, kenellä on piirustus auki. CadCraft Studio pitää pienen lukitustiedoston jokaisen avoimen piirustuksen vieressä (Plan.dwg.cclock: kuka, mistä lähtien, mikä versio) ja poistaa sen suljettaessa. Vaihtoehdot: Current (avoin piirustus), File (valitse yksi), FOlder (jokainen kansion piirustus, joka on auki jossain; tämä antaa Studion pitää lukitustiedostot myös kansiossa), Path (kirjoita yksi), Name (nimi, jonka muut näkevät). Lukitusta, jota ei ole päivitetty viiteen minuuttiin, sanotaan vanhentuneeksi. Ei saatavilla selaimessa. |
| `WINDOW` | `WN` | Sijoittaa ikkunan seinään. |
| `XATTACH` | `XA` | Linkittää toisen DWG- tai DXF-tiedoston tähän piirustukseen, näytettynä vain luettavana (XREF luettelee ja lataa ne uudelleen) |
| `XCLIP` | `XC` | Rajaa lohkoviitteet ja linkitetyt piirustukset suorakulmioon tai monikulmioon, tai poistaa rajauksen. |
| `XLINE` | `XL` | Rakennusviiva, päättymätön molempiin suuntiin: kahden pisteen kautta, vaakasuora, pystysuora, tietyssä kulmassa, kulman puolittaja tai siirtymä viivasta. |
| `XREF` | `XR`, `-XREF` | Linkitetyt piirustukset (ulkoiset viittaukset): luettelo, liittäminen, uudelleenlataus, sitominen, irrotus |
| `ZOOM` | `Z` | Laajuus tai ikkuna |
