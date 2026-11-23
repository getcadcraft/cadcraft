---
title: Komenttokartta: mitä kirjoittaa
summary: Jokainen CadCraftin komento lyhenteineen A:sta Ö:hön (Z:aan), ohjelmasta itsestään tehtynä, sekä tavat, jotka eroavat muista piirto-ohjelmista.
keywords: komenttokartta, komennot, lyhenteet, tulee muualta, komentoluettelo, mitä kirjoittaa, poista, typistä, vastaava, erot
from: 9426856f
---

CadCraft käyttää komentojen nimiä ja lyhenteitä, jotka ihmiset tuntevat muista piirto-ohjelmista: kirjoita `L` viivalle, `TR` typistääksesi, `E` poistaaksesi. Useimmille komennoille ei siis tarvitse opetella käännöstaulukkoa: tuntemasi nimi on täällä sama. Alla on jokainen CadCraftin komento, tehty itse ohjelmasta. {{key:Enter}} toistaa viimeisimmän komennon, ja komentorivillä kirjoitettu `HELP` tulostaa saman luettelon.

Muutamat komennot eivät ole samoja tai niitä ei ole rakennettu:

- **Tallenna** lataa kopion selaimeen ({{cmd:SAVE}}, {{cmd:SAVEAS}}); CadCraft Studiossa se kirjoittaa tiedoston. Katso [Siirtyminen muista piirto-ohjelmista](topic:coming-from).
- **PLOT** tekee PDF-tiedoston (myös PNG:n ja SVG:n) tulostustyylitaulukolla; sivuasetusten hallintaa ei ole.
- **DIMSTYLE** ja **PEDIT** on rakennettu; **PEDIT**:ssä ei ole Muokkaa kärkeä -vaihtoehtoa (kahvat tekevät sen).
- **TABLE** ei ole rakennettu; {{cmd:XREF}}, {{cmd:SPLINE}} ja {{cmd:WBLOCK}} ovat.
- Rutiinin omat komennot (AutoLISP `C:NAME`) ilmestyvät, kun lataat sen {{cmd:APPLOAD}}-komennolla; niitä ei luetella tässä.

## Kaikki komennot (402)

| Komento | Lyhenteet | Mitä se tekee |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Kiertää 3D-näkymää vasemmalla painikkeella |
| `ACCESS` | `AX` | Kytkee piirtämisen ilman näköä päälle tai pois: tulokset puhutaan ruudunlukijan kautta, piirustuksella on näppäimistökohdistin, tartunnoilla on äänet ja komennot voi sanoa ääneen. |
| `ALIASEDIT` | | Muokkaa komentoaliaksia yhdessä tekstitiedostossa (tutussa muodossa L, *LINE) |
| `ALIGN` | `AL` | Siirtää ja kääntää kohteita niin, että lähdepisteet osuvat kohdepisteisiin (yksi, kaksi tai kolme paria), ja skaalaa ne halutessasi |
| `ALIGNPANEL` | `ALP` | Avaa Kohdista ja jaa -paneelin |
| `ALIGNTO` | | Kohdistaa valittujen kohteiden vasemman, keskikohdan, oikean, ylä-, keskikohdan ja alareunan valinnan, ensimmäisen tai viimeisen valitun kohteen tai pisteen mukaan |
| `ANNOALLVISIBLE` | `ANNOALL` | Näyttää annotatiiviset kohteet jokaisessa mittakaavassa, tai vain siellä, missä näkymäruudun (tai piirustuksen) mittakaava on niiden luettelossa |
| `ANNOSCALE` | `CANNOSCALE` | Asettaa piirustuksen merkintämittakaavan: annotatiivinen teksti ja mitoitukset muutetaan tulostumaan samankokoisina |
| `APPLOAD` | `AP` | Lataa sovelluksia: LISP-rutiineja (.lsp) ja niiden valintaikkunatiedostoja (.dcl); käynnistysvalikko (AP) |
| `ARC` | `A` | Kaari: 3 pistettä, Alku/Keskipiste/Loppu, Alku/Keskipiste/Kulma, Alku/Keskipiste/Pituus, Alku/Loppu/Kulma, Alku/Loppu/Suunta, Alku/Loppu/Säde, Keskipiste/Alku/Loppu, Keskipiste/Alku/Kulma, Keskipiste/Alku/Pituus, Jatka |
| `AREA` | `AA` | Pinta-ala ja kehä pisteiden tai kohteen mukaan; Lisää ja Vähennä pitävät juoksevaa summaa (AA) |
| `ARRAY` | `AR` | Kopioita riveittäin ja sarakkeittain, tai keskipisteen ympärille (AR) |
| `ARRAYASSOCIATIVITY` | | Asettaa, tekevätkö ARRAY-komennot matriiseja, jotka pysyvät muokattavina (1), vai tavallisia kopioita (0) |
| `ARRAYCLOSE` | | Lopettaa matriisin lähdekohteiden muokkaamisen |
| `ARRAYEDIT` | | Muuttaa Assosiatiivinen-valinnalla tehtyä matriisia: määrät, välit, lähdekohteet, yksi kohde |
| `ARRAYPATH` | | Kopioita kohteista viivaa, kaarta, murtoviivaa tai muuta käyrää pitkin |
| `ARRAYPOLAR` | | Kopioita keskipisteen ympäri |
| `ARRAYRECT` | | Kopioita riveittäin ja sarakkeittain |
| `ASBUILT` | `ASB` | ASBUILT lukee toteutuneet pisteet, jotka työryhmä mittasi (CSV / TXT, kuten EXPORTPOINTS kirjoittaa), ja vertaa niitä piirustuksen pisteisiin: toleranssin sisällä tai ulkopuolella, mittaamatta, ylimääräinen. Merkitsee ne tasolle AS-BUILT ja lataa CSV-raportin. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Määrittää attribuutin (tunnisteen, jolta lohko kysyy arvon), joka laitetaan lohkoon (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Muokkaa lohkoviittauksen attribuuttiarvoja komentoriviltä, yksi kerrallaan (Enter säilyttää arvon) |
| `ATTSYNC` | | Tuo lohkon viittaukset vastaamaan niiden attribuuttimääritelmiä: uudet lisätään oletuksillaan, poistetut pudotetaan, sijainnit ja teksti nollataan; arvot säilyvät |
| `AUDIT` | | Tarkistaa avoimen piirustuksen vaurioiden varalta: lukuja, jotka eivät ole äärellisiä, kohteita ilman kokoa, puuttuvia tasoja, lohkoja, tyylejä ja viivatyyppejä, itseään sisältäviä lohkoja, jaettuja tunnuksia, rikkinäisiä mittoja ja viivoituksia. Listaa löydökset lajeittain ja kysyy ennen korjausta; korjaus on yksi kumoamisaskel. |
| `AUNITS` | `ANGUNITS` | Miten kulmat näytetään ja kirjoitetaan: desimaaliasteet, asteet-minuutit-sekunnit tai suuntimat kuten N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Piirustuksen automaattitäydennys päälle tai pois, tai luettele, mitä piirustuksen kuviot ehdottavat juuri nyt. |
| `AUTOCONSTRAIN` | | Lisää yhtyvyys-, vaaka- ja pystysuuntaiset rajoitteet, kun geometria on jo lähellä |
| `AUTODIM` | `ADIM` | Mitoittaa säännöillä: kokonaiskoko, ketjut valittujen sivujen varrella, aukkojen leveydet, reikien halkaisijat ja ruudukkoväli, toistamatta jo mitoitettua. |
| `AUTOSHEET` | `ASH` | Asettelee arkit itse: valitsee paperin ja vakiomittakaavat ja sijoittaa jokaisen näkymän tekstin ja nimilohkon kanssa. |
| `BATTMAN` | | Lohkon attribuuttien hallinta: järjestys, tunnisteet, kehotteet, oletukset ja tilat, ja sitten lohkon viittaukset päivitetään |
| `BCLOSE` | | Sulkee lohkomuokkaimen: tallentaa lohkon tai hylkää muutokset |
| `BCONVERT` | | BCONVERT löytää toistuvan geometrian ja muuttaa sen lohkoviittauksiksi. Valitse toistuvat kohteet: jokainen muu avaruuden kohdejoukko, joka on sama geometria, siirrettynä ja käännettynä mihin tahansa kulmaan, löytyy; kun Peilattu ja Skaalattu ovat päällä, löytyvät myös peilikuvat ja toisen kokoiset kopiot. Anna uudelle lohkolle nimi ja perustapiste; valinta ja jokainen kopio muuttuvat viittauksiksi siihen, kukin omalla kierrolla ja mittakaavallaan. Tai valitse Lohko ja nimeä olemassa oleva lohko löytääksesi irralliset kopiot sen kohteista. Kopion täytyy olla samalla tasolla, samanvärinen, samalla viivatyypillä ja samalla viivanpaksuudella, ellei Ominaisuudet ole asetettu Ohita-tilaan. Lukituilla tasoilla olevat kohteet jätetään rauhaan. Yksi kumoamisaskel. |
| `BEDIT` | `BE` | Lohkomuokkain: muokkaa lohkon kohteita ja attribuutteja; BCLOSE tallentaa (BE) |
| `BLEND` | | BLEND: spline kahden avoimen käyrän päiden välillä, poimittuna lähellä päitä, jotta ne liittyvät. CONtinuity: Tangent seuraa molempia suuntia, Smooth seuraa myös niiden taipumista. |
| `BLOCK` | `B`, `BMAKE` | Tekee lohkon kohteista (ne muuttuvat yhdeksi viittaukseksi) |
| `BLOCKREPLACE` | | BLOCKREPLACE: jokainen yhden lohkon viittaus muuttuu toisen lohkon viittaukseksi samaan paikkaan samalla mittakaavalla ja kierrolla. Molemmilla lohkoilla olevien attribuuttien arvot säilyvät. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE näyttää Lohkot-paneelin, jonka suodattimessa kohdistin on. Paneeli näyttää jokaisesta lohkosta kuvan (viimeksi sijoitetut ensin), listana tai ruudukkona; napsauta kuvaa tai vedä se piirustukseen sijoittaaksesi lohkon komennolla INSERT. Kohdassa Kirjastot lisää oma DWG- tai DXF-tiedosto: sen lohkot luetellaan kuvin ja kopioidaan tähän piirustukseen, kun sijoitat yhden. CadCraft Studiossa myös piirustuskansio voidaan lisätä, ja tiedostot ja kansiot muistetaan. |
| `BOMEDIT` | `BOMCOLUMNS` | Materiaaliluettelotaulukon sarakkeet, ryhmittely, lajittelu, otsikko, summat ja huomautukset |
| `BOMEXPORT` | | Tallentaa materiaaliluettelotaulukon .csv-tiedostona |
| `BOMTABLE` | `BOM` | Elävä materiaaliluettelotaulukko yhdeltä vyöhykkeeltä tai koko piirustukselta |
| `BOMUPDATE` | | Päivittää kaikki materiaaliluettelotaulukot nyt, myös jäädytetyt |
| `BOMZONE` | `BZONE` | Piirustuksen nimetty alue materiaaliluetteloa varten: kaksi kulmaa, monikulmio tai suljetun kohteen ääriviiva |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): poimi piste suljetun alueen sisältä, ja saat suljetun murtoviivan sen ympärille. Kaaret pysyvät kaarina. Saarekkeet piirtää myös sen sisällä olevat suljetut alueet. |
| `BOX` | | Laatikko: kaksi kulmaa ja korkeus (3D) |
| `BPARAMETER` | `BPARAM` | Ei vielä toteutettu: parametrin (kuten Näkyvyys) lisääminen lohkoon. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Lohkon parametrit: nimetyt parametrit kaavoilla ja useita näkyvyysparametreja yhdessä lohkossa. Toimii lohkomuokkaimessa (valittujen kohteiden asettaminen tilaan) ja valitulle viittaukselle (sen omat arvot ja tilat). |
| `BREAK` | `BR` | Katkaise viiva, kaari, ympyrä tai murtoviiva kahden pisteen välillä (BR) |
| `BREAKATPOINT` | | Jakaa viivan, kaaren tai murtoviivan kahtia pisteessä |
| `BREAKLINE` | | Piirtää viivan katkaisusymbolilla; sen koko ja päiden yli ulottuva osa muistetaan. |
| `BREPLACE` | | BREPLACE vaihtaa yhden lohkon toiseen. Valittu: valitse lohkoviittauksia ja nimeä lohko, jota käytetään sijaan. Kaikki: nimeä lohko ja sen korvaaja, ja jokainen viittaus jokaisessa avaruudessa ja muiden lohkojen sisällä muuttuu. Viittaus säilyttää paikkansa, mittakaavansa, kiertonsa ja tasonsa sekä molemmilla lohkoilla olevien attribuuttien arvot; uudelle lohkolle sopimattomat arvot pudotetaan ja nimetään. |
| `BSEARCH` | | BSEARCH löytää lohkoja. Nimi: osa lohkon nimestä tai kuvio, jossa on * ja ?. Attribuutti: arvo (tai TAG=arvo), jonka viittauksen attribuutit pitävät. Geometria: valitse kohteet tai yksi lohkoviittaus; lohkot, joiden muoto on vähintään 85 % samanlainen, luetellaan parhaasta alkaen; koko, kierto ja peilaus eivät vaikuta. Avoimesta avaruudesta löytyneet viittaukset valitaan seuraavaa komentoa varten. |
| `BURST` | | Räjäyttää lohkoviittaukset ja säilyttää sen, mitä attribuutit sanovat: jokainen arvo muuttuu tekstiksi attribuutin tasolle. |
| `BVHIDE` | `BVH` | Lohkomuokkaimessa: piilota kohteet nykyisessä näkyvyystilassa. |
| `BVSHOW` | `BVSH` | Lohkomuokkaimessa: näytä kohteet, jotka nykyinen näkyvyystila piilottaa (ne näkyvät himmennettyinä, jotta ne voi napsauttaa). |
| `BVSTATE` | `BVS` | Lohkomuokkaimessa lohkolla, jolla on näkyvyystiloja: vaihda tilaan tai lisää, nimeä uudelleen tai poista tila. |
| `CAL` | | Laske pituus tai luku: + − * / ja sulkeet, kirjoitettuna mihin tahansa |
| `CENTERLINE` | `CL` | Keskiviiva kahden viivan välillä: niiden puolivälissä, tai puolittajaa pitkin, jos ne kohtaavat (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Keskimerkki: risti ympyrän tai kaaren keskellä, keskiviivat hieman sen yli (CM) |
| `CHAMFER` | `CHA` | Viistää kahden viivan välisen kulman (D kaksi etäisyyttä, A pituus ja kulma, P murtoviivan jokainen kulma) |
| `CHSPACE` | | CHSPACE: siirtää kohteita arkin ja mallin välillä näkymäruudun kautta. Ne skaalataan ja käännetään niin, että ne näyttävät samoilta toiselta puolelta. Arkilla ne menevät malliin; kun työskentelet näkymäruudun kautta (MSPACE), ne tulevat arkille. |
| `CIRCLE` | `C` | Keskipiste ja säde, halkaisija, 2 tai 3 pistettä |
| `CLASS` | | Asettaa valitut kohteet luokkaan, tai ilman valintaa asettaa aktiivisen luokan (? luettelee ne) |
| `CLASSES` | `CLS` | Luokat-paneeli: luokat lajittelevat kohteet tasojen yli; näytä, piilota ja tyylittele ne ja ohita ne näkymäruuduittain (CLS) |
| `COMMANDLINE` | `CMDLINE` | Kiinnitä tai kelluta komentorivi, tee siitä yksi rivi, aseta sen historiarivit tai avaa historia (F2) |
| `COMPARESETTINGS` | `CMPSET` | Vertaa mitoitustyylejä, tekstityylejä, tasoja, arkkeja tai yksiköitä: kahta tässä piirustuksessa tai tätä piirustusta toista avointa vastaan, ja kopioi arvo. |
| `CONSTRAINTBAR` | `CBAR` | Näytä tai piilota rajoituspalkit (Näytä kaikki / Piilota kaikki, tai kohdekohtaisesti) |
| `COPY` | `CO`, `CP` | Kopioi kohteet niin monta kertaa kuin napsautat |
| `COPYBASE` | | Kopioi kohteet leikepöydälle valitsemasi perustapisteen kanssa |
| `COPYCLIP` | | Kopioi kohteet leikepöydälle (Ctrl+C); PASTECLIP sijoittaa ne |
| `COUNT` | `BCOUNT` | Laske lohkoviittaukset: napsauta yhtä valitaksesi ja laskeaksesi kaikki sen lohkon viittaukset |
| `COUNTTABLE` | | Sijoita lohkojen lukumääristä taulukko |
| `CREDITS` | | Laittaa Kirjaston tekijätiedot piirustukseen taulukkona. Aja uudelleen päivittääksesi taulukon piirustuksen kohteista juuri nyt. |
| `CURSORSIZE` | | Kohdistimen koko: 100 vie sen reunasta reunaan piirustuksen yli (Asetukset › Kohdistin › Koko näyttö) |
| `CUTCLIP` | | Leikkaa kohteet leikepöydälle (Ctrl+X): kopioi ja poista |
| `CYLINDER` | `CYL` | Sylinteri: keskipiste, säde ja korkeus (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Luettele lohkot, niiden attribuutit ja kohteiden ominaisuudet taulukkona piirustukseen tai CSV-tiedostoon |
| `DATALINK` | `DL` | Taulukko CSV-tiedostosta, joka muistaa tiedoston, jotta se voidaan lukea uudelleen |
| `DATALINKUPDATE` | `DLU` | Lue datayhteyden tiedosto uudelleen ja täytä sen taulukot |
| `DCALIGNED` | `DCALI` | Mittarajoite: todellinen etäisyys pisteiden, pisteen ja viivan tai kahden viivan välillä |
| `DCANGULAR` | `DCANG` | Mittarajoite: kulma kahden viivan välillä tai kaaren kulma |
| `DCCONVERT` | | Muuttaa rajoitettaviin geometrioihin piirretyt mitat mittarajoitteiksi |
| `DCDIAMETER` | `DCDIA` | Mittarajoite: ympyrän tai kaaren halkaisija |
| `DCDISPLAY` | | Näytä tai piilota mittarajoitteet piirustuksessa |
| `DCHORIZONTAL` | `DCHOR` | Mittarajoite: vaakasuora etäisyys |
| `DCLINEAR` | `DCLIN` | Mittarajoite: vaaka- tai pystyetäisyys sijoituskohdasta |
| `DCRADIUS` | `DCRAD` | Mittarajoite: ympyrän tai kaaren säde |
| `DCVERTICAL` | `DCVER` | Mittarajoite: pystyetäisyys |
| `DELBLOCKS` | | Poista lohkot: jokainen viittaus (myös sisäkkäiset, jokaisella arkilla) ja määritykset |
| `DELCONSTRAINT` | `DELCON` | Poista jokainen rajoite (geometrinen ja mitta) valitsemistasi kohteista |
| `DELOPENING` | | Poista ovi tai ikkuna seinästä. |
| `DESCRIBE` | `DESC` | Kertoo, mitä piirustus sisältää: kuinka monta kohdetta, minkälaisia, kuinka isoja, mikä on valittuna. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Tyhjennä valinta (Esc) |
| `DETAILS` | `DET` | Oman toimiston detaljit, löydettynä sen mukaan, mitä piirrät: etsi, lisää lohko, luettele, poista, kytke ehdotukset päälle tai pois. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Piirrä kaavio tekstistä: Mermaid-vuokaavio, PlantUML-komponenttikaavio, D2, lähtö-kohde-luettelo tai draw.io XML lohkoina ja liittiminä, joita voit muokata |
| `DIMALIGNED` | `DAL`, `DIMALI` | Todellinen etäisyys kahden pisteen välillä |
| `DIMANGULAR` | `DAN`, `DIMANG` | Kulma kahden viivan välillä, kaaren kulma tai kolmen pisteen kulma |
| `DIMARC` | `DAR` | Kaaren pituuden mitoitus: etäisyys kaarta pitkin kaaren symbolilla (DAR) |
| `DIMASZ` | | Mitoituksen asetus: nuolen koko |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Mitoitukset pinotaan yhdestä perusviivasta |
| `DIMBREAK` | `DBREAK` | Katkaise mitta- ja jatkoviivat siitä, missä ne ylittävät muita kohteita (Auto), kahden pisteen välillä (Manual), tai poista katkot |
| `DIMCONSTRAINT` | `DCON` | Mittarajoitteet: lineaarinen, kohdistettu, kulma, säde, halkaisija, muunna |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Mittaketju, jokainen edellisen mitan päästä |
| `DIMDEC` | | Mitoituksen asetus: desimaalit |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Kaaren tai ympyrän halkaisija |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Vapauttaa mitat kohteista, joihin ne on sidottu (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Muuta mitan tekstiä (Koti, Uusi teksti, Kierrä) tai kallista apuviivoja (Vino) |
| `DIMEXE` | | Mitoituksen asetus: jatke mittaviivan ulkopuolelle |
| `DIMEXO` | | Mitoituksen asetus: siirtymä lähtöpisteestä |
| `DIMGAP` | | Mitoituksen asetus: väli tekstin ympärillä |
| `DIMINSPECT` | | Tarkastusmitta: kehys arvon ympärillä, nimike ja kuinka usein osa tarkistetaan |
| `DIMJOGGED` | `DJO`, `JOG` | Katkaistu sädemitoitus: säde piirretään lähemmästä pisteestä, kun keskipiste on kaukana (DJO) |
| `DIMJOGLINE` | `DJL` | Lisää katkaisusymboli lineaariseen tai linjassa olevaan mittaviivaan, jotta näkyy, ettei etäisyyttä ole piirretty mittakaavassa (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Vaaka- tai pystyetäisyys (R mihin tahansa kulmaan) |
| `DIMLUNIT` | | Mitoituksen asetus: pituuden muoto (1 tieteellinen, 2 desimaali, 3 tekninen, 4 arkkitehtuuri, 5 murtoluku) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Koordinaattimitoitus: pisteen X- tai Y-etäisyys UCS-origosta johtoviivalla (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Ohita mitoitusmuuttujat valituissa mitoissa muuttamatta mitoitustyyliä; Tyhjennä palauttaa tyylin (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Kaaren tai ympyrän säde |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Sido mitan pisteet kohteisiin, jotta se seuraa ja mittaa uudelleen niiden liikkuessa (DRE) |
| `DIMSCALE` | | Mitoituksen asetus: kokonaismittakaava (koot × tämä) |
| `DIMSPACE` | | Tasainen väli rinnakkaisten mittojen välillä, mitattuna perusmitasta (0 linjaa ne, Auto on kaksinkertainen tekstin korkeus) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Tee, muuta, aseta nykyiseksi, poista, käytä ja vertaa nimettyjä mitoitustyylejä (ikkuna; -DIMSTYLE komentorivillä) |
| `DIMTEDIT` | `DIMTED` | Siirrä mitan teksti mittaviivan vasempaan, oikeaan tai keskikohtaan, tai käännä se |
| `DIMTEXTUNIT` | `DTU` | Mitan teksti mm-, cm-, m- tai km-yksiköissä tai piirustuksen omissa yksiköissä: valitut mitat, muuten uudet (DTU) |
| `DIMTXT` | | Mitoituksen asetus: tekstin korkeus |
| `DIST` | `DI` | Etäisyys ja kulma kahden pisteen välillä |
| `DISTRIBUTE` | | Jakaa valitut kohteet tasaisesti sivuttain tai ylös ja alas: yhtä suuret askeleet keskipisteiden välillä tai yhtä suuret välit; ulommat kaksi pysyvät |
| `DIVIDE` | `DIV` | DIVIDE (DIV): merkit, jotka jakavat viivan, kaaren, ympyrän, murtoviivan, splinen tai ellipsin yhtä suuriin osiin. Pisteitä, tai Lohko-vaihtoehdolla lohko jokaisessa merkissä. |
| `DOCUMENTS` | `DOCS` | Avaa Asiakirjat-paneelin: kohteiden uloskuittaus ja sisäänkuittaus, versiot, julkaisutilat ja hyväksyntä projektikansiolle |
| `DOOR` | `DR` | Aseta ovi seinään. Puoli, jota napsautat, on se puoli, johon ovi aukeaa. |
| `DRAWORDER` | | Muuta piirtojärjestystä: tuo kohteet eteen, lähetä ne taakse, tai aseta ne muiden kohteiden päälle tai alle. |
| `DUPLICATE` | `DUP` | Kopio, joka liikkuu osoittimen mukana: napsauta laskeaksesi sen (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Piirustuksen ominaisuudet: otsikko, tekijä ja muut, sekä omat nimi- ja arvoparit |
| `DXFOUT` | | Lataa piirustus DXF R12:na (Tallenna säilyttää oman muotonsa) |
| `EATTEDIT` | `DDATTE` | Muokkaa lohkoviittauksen attribuutteja: arvot, teksti ja ominaisuudet, yksi attribuutti kerrallaan |
| `ELLIPSE` | `EL` | Akselin päätepisteet ja toinen puoliakseli |
| `ERASE` | `E`, `DELETE` | Poista kohteet |
| `EXPLODE` | `X` | Hajota murtoviivat, lohkot ja mitat osiinsa |
| `EXPORT` | `EXP` | Tallenna kopio piirustuksesta tiedostotyyppiin, jonka lisäosa kirjoittaa |
| `EXPORT3D` | `3DEXPORT` | Vie 3D-malli: GLB, OBJ tai STL |
| `EXPORTPOINTS` | `EXPPTS` | Kirjoita pisteet ja lohkojen lisäyspisteet, joiden attribuutti on kuvaus, CSV- tai TXT-tiedostoon (PNEZD, PENZD tai XYZ) BIM- ja mittausohjelmille |
| `EXTEND` | `EX` | Pidennä kohteita kohtaamaan muut: napsauta lähellä päätä, vedä useiden yli, tai Shift+napsautus typistää |
| `EXTRIM` | | EXTRIM: valitse yksi leikkausreuna ja sitten puoli. Kaikki, mikä ylittää reunan, typistetään sille puolelle. Osat, jotka lähtisivät pois, näkyvät, kun liikutat osoitinta. |
| `EXTRUDE` | `EXT` | Pursota suljetut 2D-kohteet kappaleiksi (3D) |
| `FIELD` | | Lisää kenttä tekstiin, taulukon soluun tai attribuuttiin: päivämäärä, tiedostonimi, arkin numero, piirustuksen ominaisuus, kohteen pinta-ala tai pituus, tai kaava |
| `FILLET` | `F` | Pyöristä tai suorista kahden kohteen välinen kulma (R säde, P murtoviivan jokainen kulma, M useita) |
| `FIND` | | Etsi ja korvaa sanoja tekstissä, attribuuttiarvoissa ja mittatekstissä |
| `FLATTEN` | | Aseta valittujen kohteiden korkeus (Z) ja paksuus 0:ksi, myös niiden käyttämissä lohkoissa. |
| `FLOOR` | | Valitse kerros, jolle piirretään, lisää uusi, tai siirrä tai kopioi valinta siihen. |
| `FLOORLAYERS` | | Muuta kerrokset tasoiksi nimeltä Floor-Layer, tiedostolle, joka menee jollekulle ilman kerroksia. |
| `FLOORS` | `FLR` | Avaa Kerrokset-paneeli: pinoa kerroksia yhteen mallitilaan. |
| `GCCOINCIDENT` | | Rajoite: kaksi pistettä kohtaa, tai piste pysyy kohteella |
| `GCCOLLINEAR` | | Rajoite: kaksi viivaa pysyvät samalla suoralla |
| `GCCONCENTRIC` | | Rajoite: kaksi ympyrää tai kaarta jakavat keskipisteen |
| `GCEQUAL` | | Rajoite: kaksi viivaa pysyvät yhtä pitkinä, tai kaksi ympyrää tai kaarta saman säteisinä |
| `GCFIX` | | Rajoite: piste tai kokonainen kohde pysyy paikallaan |
| `GCHORIZONTAL` | | Rajoite: viiva (tai kaksi pistettä) pysyy vaakasuorana |
| `GCPARALLEL` | | Rajoite: kaksi viivaa pysyvät yhdensuuntaisina |
| `GCPERPENDICULAR` | | Rajoite: kaksi viivaa pysyvät suorassa kulmassa |
| `GCSYMMETRIC` | | Rajoite: kaksi pistettä, viivaa tai ympyrää peilautuvat toisensa suhteen viivan yli |
| `GCTANGENT` | | Rajoite: viiva ja ympyrä tai kaari (tai kaksi niistä) pysyvät tangentteina |
| `GCVERTICAL` | | Rajoite: viiva (tai kaksi pistettä) pysyy pystysuorana |
| `GDSIN` | `GDS` | Näytä IC-asettelu (GDSII-virtatiedosto): jokainen taso ja datatyyppi piirustustasona, litteänä, käyttäjäyksiköissä; vain katseluun ja mittaamiseen (laboratoriokokeilu) |
| `GEOMCONSTRAINT` | `GCON` | Geometriset rajoitteet: vaakasuora, pystysuora, yhdensuuntainen, tangentti, yhtyvä… |
| `GLBOUT` | | Vie 3D-malli GLB:nä (glTF) |
| `GRADIENT` | `GD` | Täyttää alueen yhden tai kahden värin liukuvärillä |
| `GRID` | | Aseta ruudukko: viivojen välinen etäisyys, joka N:s viiva pääviivana, ON tai OFF, tai Auto seuraa zoomia uudelleen |
| `GRIDMOVE` | `GM` | Siirrä ruudukkoviivaa ja vie sen mukana roikkuvat: seinät venyvät, pilarit, kuplat ja tunnisteet liikkuvat, mitat seuraavat. |
| `GROUP` | `G` | GROUP (G): anna valituille kohteille yhteinen nimi. Napsautus yhteen niistä valitsee ne kaikki. Enter nimen kohdalla tekee nimettömän ryhmän. |
| `GROUPEDIT` | | GROUPEDIT: muuta ryhmää. Valitse yksi sen kohteista tai anna sen nimi, ja sitten Lisää tai Poista kohteita, nimeä uudelleen, muuta kuvausta tai päätä, valitseeko napsautus sen kokonaisena. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Täytä alue yhtenäisellä täytöllä tai kuviolla: napsauta sen sisällä tai valitse suljettuja kohteita (H) |
| `HATCHEDIT` | `HE` | Muuta viivoitusta: kuvio, mittakaava, kulma, lähtöpiste ja sen linkki rajaan. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Tekee rajamurtoviivat uudelleen viivoituksesta, linkitettynä siihen tai ei |
| `HATCHTOBACK` | | Lähettää jokaisen viivoituksen kaiken muun taakse. |
| `HELP` | `?` | Tämä luettelo |
| `HIDEOBJECTS` | | Piilota valitut kohteet, kunnes UNISOLATEOBJECTS. Ei tallennu piirustuksen mukana. |
| `HISTORY` | `HIST` | HISTORY (HIST): tämän piirustuksen versiot — tällä tietokoneella säilytetyt kopiot, kun Studio tallentaa, ja pilven versiot — avattavaksi, palautettavaksi ja vertailtavaksi muutosten kanssa väreillä. |
| `ID` | | Pisteen koordinaatit |
| `IMAGE` | `IM` | Anna CadCraftille kuvatiedostot, joita piirustus käyttää (DWG tallentaa vain, missä ne olivat). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Sijoita kuva (PNG tai JPEG) tiedostosta. |
| `IMAGECLIP` | `ICL` | Rajaa kuva suorakulmioon tai monikulmioon, tai poista rajaus. |
| `IMPORT` | `IMP` | Tuo lisäosan lukema tiedostotyyppi tähän piirustukseen |
| `INSERT` | `I`, `DDINSERT` | Sijoita lohko (S mittakaava, R kierrä); F DWG/DXF-tiedostosta, L kirjastosta |
| `INTERSECT` | `IN` | Säilytä vain se, mikä kappaleilla on yhteistä (3D), tai 2D-alueiden yhteinen ala |
| `ISODRAFT` | | ISODRAFT: isometrinen piirtäminen päälle tai pois, tai suoraan Vasen-, Ylä- tai Oikea-tasolle. Kun se on päällä, Ortogonaali ja napaseuranta seuraavat tason kahta akselia, ruudukko piirretään isometrisesti ja ELLIPSE saa Isocircle-vaihtoehdon. |
| `ISOLATEOBJECTS` | `ISOLATE` | Näytä vain valitut kohteet; kaikki muu tässä avaruudessa piilotetaan, kunnes UNISOLATEOBJECTS. Ei tallennu piirustuksen mukana. |
| `ISOPLANE` | | ISOPLANE: valitse isometrinen taso, jolle piirretään: Vasen, Ylä tai Oikea. Enter siirtyy seuraavaan, kuten F5 tekee, kun isometrinen piirtäminen on päällä. |
| `JOIN` | `J` | Yhdistä päästä päähän osuvat viivat, kaaret ja murtoviivat yhdeksi murtoviivaksi; saman suoran viivat yhdeksi viivaksi (J) |
| `LASER` | `LASERCUT` | Avaa Laser-paneelin: lähetä tasoja laserleikkurille tai kaivertajalle (GRBL G-koodi) |
| `LASSOMODE` | | Painaminen ja vetäminen piirtää lassolla (1) tai suorakulmiolla (0) |
| `LAYDEL` | | Poista taso ja jokainen sillä oleva kohde (mallissa, arkeilla ja lohkoissa) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Avaa tasonhallinnan: jokainen taso yhdessä taulukossa |
| `LAYERPANEL` | | Näytä tasopaneeli |
| `LAYFRZ` | | Jäädytä valitsemasi kohteen taso |
| `LAYGROUP` | `LG` | Ryhmitä tasot kansioihin Tasot-paneelissa. |
| `LAYISO` | | Eristä valittujen kohteiden tasot (kaikki muut tasot pois päältä) |
| `LAYLOCKFADE` | | Aseta, kuinka paljon lukittujen tasojen kohteet himmenevät ja voiko napsautus valita ne. |
| `LAYMCUR` | | Tee valitsemasi kohteen taso nykyiseksi |
| `LAYMRG` | | Yhdistä tasot: niiden kohteet siirtyvät kohdetasolle, ja yhdistetyt tasot poistuvat |
| `LAYOFF` | | Sammuta valitsemasi kohteen taso |
| `LAYON` | | Kytke kaikki tasot päälle |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Uusi arkki, jolla on nimilohko ja näkymäruutu |
| `LAYTHW` | | Sulata kaikki tasot |
| `LAYUNISO` | | Kytke takaisin päälle tasot, jotka LAYISO sammutti |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Muuntaa vanhoilla vietnamilaisilla fonteilla kirjoitetun tekstin Unicodeksi (TCVN3-/ABC-fontit, kuten .VnTime, ja VNI-fontit, kuten VNI-Times). Tällainen teksti näkyy jo oikein; tämä kirjoittaa sen lopullisesti uudelleen, laskurin ja yhden kumoamisaskeleen kanssa. |
| `LENGTHEN` | `LEN` | Pidennä tai lyhennä viivoja, kaaria ja murtoviivoja: määrällä, prosentilla, kokonaispituuteen tai vetämällä (LEN) |
| `LIBRARY` | `LIB` | Kirjastopaneeli: sijoita kohteita, tarkista päivitykset, tekijätiedot |
| `LIMITS` | | Aseta piirustuksen rajat: ON, OFF, tai vasemman alakulman ja oikean yläkulman pisteet. Rajojen ollessa ON, niiden ulkopuoliset pisteet hylätään |
| `LINE` | `L` | Suorat jänteet, jokainen omana kohteenaan |
| `LINETYPE` | `LT`, `CELTYPE` | Viivatyyppi, jonka uudet kohteet saavat (tason, lohkon tai nimetyn mukaan) |
| `LINKVIEWS` | `SYNCVIEWS` | Siirrä ja zoomaa kaikkia ruutuja yhdessä (jaettu näyttö), vertaaksesi kahta piirustusta tai versiota |
| `LISPEDIT` | `VLIDE` | LISPEDIT (tai VLIDE) avaa LISP-editorin: ikkunan rutiinin kirjoittamiseen, lataamiseen ja kokeiluun. Lataa piirustukseen lukee jokaisen muodon, kuten APPLOAD tiedoston kanssa, ja tekee sen komennot. Suorita valinta suorittaa valitut muodot tai muodon, jossa kohdistin on. Konsoli näyttää, mitä rutiini tulosti, ja jokaisen virheen rivinumeron kanssa. Vastaava sulkeva sulje sulkumerkki merkitään kirjoitettaessa, ja Enter sisentää uuden rivin. Uusi, Avaa ja Tallenna toimivat .lsp-tiedostolle. Tekstin vieressä olevat luettelot näyttävät rutiinin määrittelemät funktiot, ne, joita se kutsuu eikä tämä LISP vielä tunne, ja kaikki sen tuntemat funktiot. Ikkuna ei estä piirustusta, joten rutiini voi pyytää pisteitä; Stop tai Esc lopettaa käynnissä olevan rutiinin. |
| `LIST` | `LI`, `LS` | Kuvaa kohteet historiassa |
| `LTSCALE` | `LTS` | Piirustuksen viivatyypin mittakaava (jokainen viiva ja väli kerrotaan sillä) |
| `LWDISPLAY` | `LWT` | Näytä tai piilota viivanpaksuudet näytöllä (LWT-painike tilarivillä) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Uusien kohteiden viivanpaksuus (tason, lohkon, oletuksen tai mm mukaan) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Karttatasot mallitilan alla: piirustuksen koordinaattijärjestelmä, laatat, WMS, WMTS, ArcGIS, kuvat |
| `MASSPROP` | | MASSPROP: alueiden ja suljettujen kohteiden poikkileikkausominaisuudet: pinta-ala, kehä, painopiste, momentit ja hitausmomentin tulo, pyörimissäteet ja pääakselit. Tarkka viivoille ja kaarille. Raportin voi kirjoittaa tekstitiedostoon. |
| `MATCHPROP` | `MA`, `PAINTER` | Vastaa ominaisuuksia: kopioi yhden kohteen taso, väri ja muuta muihin (MA) |
| `MEASURE` | `ME` | MEASURE (ME): merkki annetun pituuden välein viivan, kaaren, ympyrän, murtoviivan, splinen tai ellipsin päästä, lähinnä napsautustasi. Pisteitä, tai Lohko-vaihtoehdolla lohko jokaisessa merkissä. |
| `MEASUREGEOM` | `MEA` | Mittaa etäisyys, säde, kulma tai pinta-ala (MEA) |
| `MINSERT` | | MINSERT: sijoita lohko riveittäin ja sarakkeittain kerralla. Jokainen on oma viittauksensa, joten mitä tahansa voi siirtää tai poistaa. |
| `MIRROR` | `MI` | Peilaa kohteet viivan yli |
| `MLEADER` | `MLD`, `MLEAD` | Monijohtoviite: nuoli, johtoviiva ja merkintä yhtenä kohteena (MLD) |
| `MLEADERALIGN` | `MLA` | Kohdistaa monijohtoviitteiden johtoviivat yhteen niistä kanssa suuntaan, tasaisin välein tai jaettuna kahden pisteen välille (MLA) |
| `MLEADERCOLLECT` | `MLC` | Kokoaa useita monijohtoviitteitä yhdeksi: niiden lohkot rivissä tai sarakkeessa tai niiden merkinnät toistensa alla (MLC) |
| `MLEADEREDIT` | `MLE` | Lisää johtoviivoja monijohtoviitteeseen tai poista niitä; vaihda sen sisältö tekstin ja lohkon välillä (MLE) |
| `MLINE` | | Piirrä yhdensuuntaiset viivat yhdessä, kulmissa liitettyinä. |
| `MOVE` | `M` | Siirrä kohteita perustapisteen ja toisen pisteen mukaan |
| `MSPACE` | `MS` | Työskentele mallissa avoimen arkin näkymäruudun kautta (tai kaksoisnapsauta näkymäruudun sisällä). |
| `MTEXT` | `MT`, `T` | Kappaleteksti: vedä leveys ja kirjoita paikallaan; Enter aloittaa uuden kappaleen (T) |
| `MVIEW` | `MV` | Näkymäruutu malliin, asettelussa |
| `NAMEDVIEW` | `NV`, `VIEWS` | Nimetyt näkymät: tallenna näytöllä oleva näkymä (tai ikkuna) nimellä ja palaa siihen (NV) |
| `NCOPY` | | Kopioi kohteet lohkoviittauksesta tai linkitetystä piirustuksesta piirustukseen räjäyttämättä sitä. |
| `NEARBY` | | Kertoo, mitä on kohdistimen lähellä, lähimmästä alkaen, etäisyys ja puoli mukaan lukien. |
| `NEW` | | Aloita uusi piirustus |
| `OBJECTSCALE` | `OBJSCALE` | Annotatiivisen tekstin ja mitoitusten merkintämittakaavat: lisää mittakaava, poista yksi, lisää piirustuksen nykyinen mittakaava tai luettele ne (jokainen näkymäruutu näyttää ne oman mittakaavansa kokoisina) |
| `OBJOUT` | | Vie 3D-malli OBJ:nä |
| `OFFICESTANDARD` | `OFFSTD` | Toimiston standardi: tekstin korkeudet paperilla, tasot, nimilohkon kentät ja mallipohjat yhdessä tietueessa. Näyttää voimassa olevan ja sen lähteen; tuo .json-tietue tähän piirustukseen, lisää puuttuvat toimistotasot, luettele nimilohkon kentät. |
| `OFFSET` | `O` | Yhdensuuntaiset kopiot etäisyydellä |
| `OFFSETGAPTYPE` | | OFFSETGAPTYPE: miten OFFSET sulkee aukot murtoviivan ulkokulmissa. 0 pidentää janat, 1 lisää kaaren, 2 lisää suoran leikkauksen. Säilyy tässä istunnossa. |
| `OLELIST` | `OLES` | Luettele piirustuksen OLE-kohteet ja aseta kopio jonkin kuvasta valitsemaasi paikkaan |
| `OPEN` | | Avaa DWG tai DXF tästä tietokoneesta |
| `OPENIN3D` | | Avaa tämä piirustus 3D-mallinnussovelluksessa uudessa välilehdessä (mitään ei lähetetä) |
| `OPTIONKEYS` | `OPTKEYS` | Anna komennon valinnoille omat kirjaimet (ARRAY.PO, P) yhdessä tekstitiedostossa |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Avaa kohteen tartuntavalikon: valitse, mitkä tartunnat ovat päällä. Myös oikea napsautus Tartunta-kohdassa tilarivillä. |
| `OVERKILL` | | Poista kaksoiskohteet ja yhdistä päällekkäiset tai päästä päähän osuvat viivat ja kaaret toleranssin sisällä. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parametrit-paneeli: käyttäjäparametrit ja mittarajoitteet yhdessä taulukossa |
| `PARTSLIST` | `PLIST` | Osaluettelotaulukko jokaisesta vakio-osasta ja teräsprofiilista, joka on sijoitettu kirjastosta |
| `PASTEAREA` | `PAREA` | Liittää MarkupCraftissa kopioidun alueen (Kopioi alue) todellisessa koossaan kuvana. |
| `PASTEBLOCK` | | PASTEBLOCK: liitä kopioimasi yhdeksi lohkoksi. Lohkolla on oma nimi; RENAME antaa sille oman. |
| `PASTECLIP` | | Liitä leikepöydän sisältö: se seuraa kohdistinta, napsauta kohtaa, johon se menee (Ctrl+V) |
| `PASTEORIG` | | Liitä leikepöydän sisältö koordinaatteihin, joista se kopioitiin (Ctrl+Shift+V) |
| `PDF` | | Anna CadCraftille PDF-tiedostot, joita piirustuksen alustat käyttävät |
| `PDFADJUST` | | Himmennä, kontrastoi, muuta mustavalkoiseksi tai kytke pois PDF-alusta |
| `PDFATTACH` | `PDFATT` | Liitä PDF-sivu alustaksi (PDFATTACH) |
| `PDFCLIP` | | Rajaa PDF-alusta suorakulmioon tai monikulmioon |
| `PDFIMPORT` | `PDFIM` | Muuta PDF-sivun viivat, täytöt ja teksti piirustuskohteiksi (PDFIMPORT) |
| `PDFLAYERS` | | Kytke PDF-alustan omat tasot päälle tai pois |
| `PEDIT` | `PE` | Muokkaa murtoviivaa: sulje, avaa, yhdistä, leveys, sovita käyrä, splinikäyrä, suoristus, viivatyypin luonti, käännä; viivat, kaaret ja splinit voidaan muuttaa murtoviivoiksi |
| `PENPRESSURE` | | Määrittääkö kynävedon paine SKETCHFIXin ja SKETCHLIVEn tekemien kohteiden viivanpaksuuden (oletuksena päällä). Säilyy tässä selaimessa. |
| `PHOTOSKETCH` | `PSK` | Muuttaa valokuvan käsinpiirroksesta paperilla viivoiksi ja kaariksi mittakaavassa, oikaisee perspektiivin ja antaa jokaiselle kynävärille oman tasonsa. |
| `PICKSTYLE` | | PICKSTYLE: valitseeko ryhmän yhden kohteen valinta koko ryhmän (1, alkuasetus) vai vain sen kohteen (0). Säilyy tässä istunnossa. |
| `PLAN` | | Käännä näkymä niin, että UCS:n X-akseli (nykyinen ucs, tallennettu Ucs tai Maailma) on vaakatasossa näytöllä. Piirustuksen mikään ei liiku. |
| `PLINE` | `PL` | Murtoviiva viiva- ja kaarisegmenteistä |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Tulosta PDF:ksi: arkki tai malli mittakaavassa |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tulostustyylitaulukot: aseta, mitä kukin väri tulostuu (väri, musta, harmaa, muste, viivanpaksuus); säilyy piirustuksen mukana (STYLESMANAGER) |
| `POINT` | `PO` | Pistekohteet |
| `POINTCLOUD` | `PC` | liitetty pistepilvi: viipale, korkeus, paksuus, väri, koko, näkyvyys, zoomi, irrota |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | liitä pistepilvi (LAS, LAZ, XYZ, PTS) piirustuksen alle |
| `POLARANG` | | Napaseurannan askel asteina (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Säännöllinen monikulmio |
| `PRESSPULL` | | Työnnä tai vedä kappaleen pintaa (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Avaa Ominaisuudet-paneeli (myös Ctrl+1, tai kaksoisnapsautus kohteeseen) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Taita Ominaisuudet-paneeli ikkunan reunaan |
| `PSPACE` | `PS` | Poistu näkymäruudusta, jossa työskentelet, ja palaa arkille (tai kaksoisnapsauta sen ulkopuolella). |
| `PUBLISH` | `-PUBLISH` | Tulosta useita tai kaikki arkit yhteen PDF:ään (sivu ja kirjanmerkki arkkia kohden) |
| `PURGE` | `PU` | Poista lohkomääritykset, joita mikään ei käytä |
| `QDIM` | | Pikamitoitus: mittaa useita kohteita kerralla (jatkuva, perus, porrastettu, koordinaatti, säde tai halkaisija) |
| `QPMODE` | `QP` | Pikaominaisuudet kohdistimen mukaan päälle tai pois |
| `QSELECT` | `QS` | Pikavalinta: jokainen tyypin kohde, jonka taso, väri, koko tai nimi täsmää (QS) |
| `RASTERSNAP` | | Kytke tartunta skannattujen arkkien viivoihin päälle tai pois. |
| `RAY` | | Säde: rakennusviiva pisteestä, päätön yhteen suuntaan. |
| `RECOVER` | | Avaa vioittunut DXF tai DWG: ohittaa osat, joita ei voi lukea, sen sijaan että hylkäisi tiedoston, kertoo, mitä ohitettiin, ja tarkistaa ja korjaa piirustuksen kuten AUDIT tekee. |
| `RECTANG` | `REC`, `RECTANGLE` | Suljettu murtoviiva kahdesta kulmasta |
| `REDLINE` | `RDL` | Punamerkintä revisioksi: lue MarkupCraftin punamerkintäpaketti, hyväksy tai hylkää jokainen muutos, pilvitä hyväksytyt revisiolokilla ja tallenna vastaustiedosto (RDL) |
| `REDO` | | Tee uudelleen se, mikä kumottiin |
| `REFCLOSE` | | Lopeta lohkon muokkaaminen paikallaan: tallenna se tai hylkää muutokset |
| `REFEDIT` | | Muokkaa lohkoa paikallaan, siinä missä sen viittaus on, muun piirustuksen himmentyessä; REFCLOSE tallentaa sen |
| `REGEN` | `RE` | Rakenna uudelleen tässä välilehdessä piirretty kuva piirustuksesta |
| `REGENALL` | `REA` | Rakenna uudelleen jokaisen välilehden, ruudun ja avoimen piirustuksen piirretty kuva |
| `REGION` | `REG` | REGION (REG): tee suljetuista kohteista tasoalueita (alueita), tai viivoista, kaarista ja murtoviivoista, jotka sulkeutuvat silmukaksi päästä päähän. UNION, SUBTRACT ja INTERSECT yhdistävät alueita, ja MASSPROP antaa niiden poikkileikkausominaisuudet. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Rekisteröi useita skannauksia: aseta ne yhteen kehykseen valittujen pistepareiden tai kohteiden mukaan, tarkenna ICP:llä, vie yksi LAS tai E57 |
| `REINIT` | | Lataa aliaksetiedosto uudelleen |
| `RENAME` | `-RENAME`, `REN` | Nimeä taso tai lohko uudelleen (jokainen kohde tai viittaus seuraa) |
| `REVCLOUD` | `RC` | Revisiopilvi: pyöristä suorakulmio, monikulmio, vapaa polku tai kohde (RC) |
| `REVOLVE` | `REV` | Kierrä suljetut 2D-kohteet akselin ympäri kappaleiksi (3D) |
| `ROTATE` | `RO` | Kierrä kohteita perustapisteen ympäri |
| `SAMPLES` | `SAMPLE` | Avaa yksi CadCraftin mallipiirustuksista (arkkitehtoninen kokonaisuus, toteutunut) oppimista varten |
| `SAVE` | `QSAVE` | Lataa piirustus sen muodossa (DWG tai DXF) |
| `SAVEAS` | | Lataa piirustus DWG:nä tai DXF:nä: valitse kumpi |
| `SAYSEL` | | Kertoo, mitä on valittuna, yksi lause kullekin. |
| `SCALE` | `SC` | Skaalaa kohteita perustapisteen ympäri |
| `SCALELISTEDIT` | `SCALELIST` | Lisää, muokkaa ja poista piirustuksen omat mittakaavat; ne näkyvät näkymäruutujen ja tulostuksen mittakaavaluetteloissa ja tallentuvat piirustukseen (SCALELIST) |
| `SCANALIGN` | `SCL` | Kohdista skannattu arkki kahteen pisteeseen: siirrä, käännä ja halutessasi skaalaa. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Lisää skannattu piirustus: PNG, JPEG tai TIFF (yksi sivu tai kaikki monisivuisen tiedoston sivut) tai PDF-sivu, joka on kuva. |
| `SCANCLEAN` | `SCC` | Tee skannattu arkki mustavalkoiseksi ja poista roskat. |
| `SCANCROP` | `SCR` | Rajaa skannattu arkki ikkunaan. |
| `SCANDESKEW` | `SCD` | Etsi kulma, jossa skannatun arkin pitkät viivat ovat, ja käännä arkki suoraksi, kun hyväksyt kulman. |
| `SCANERASE` | `SCE` | Poista alue skannatusta arkista: suorakulmio, monikulmio tai lasso. |
| `SCANINFO` | `SCI` | Näytä skannatun arkin alkuperäinen tiedosto ja siitä lähtien tehdyt vaiheet. |
| `SCANSCALE` | `SCS` | Skaalaa skannattu arkki: valitse siltä kaksi pistettä ja kirjoita niiden todellinen etäisyys. |
| `SCANTRACE` | `SCT` | Jäljitä skannattu arkki viivoiksi ja kaariksi uudelle tasolle, asettamallasi toleranssilla. Teksti ja viivoitus jäävät rasteriksi. |
| `SELECT` | | Valitse kohteet nyt (P, Edellinen, seuraavassa komennossa) |
| `SELECTALL` | `AI_SELALL` | Valitse jokainen muokattava kohde tällä välilehdellä (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Valitse jokainen kaltaisesi kohde, jonka valitset: sama tyyppi, taso ja väri (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Näyttää Arkkisarja-paneelin: arkit monesta piirustuksesta, numeroituina, julkaistuna yhdeksi PDF:ksi. |
| `SHORTCUTS` | `KEYS` | Anna mille tahansa komennolle oma näppäin (Ctrl tai Alt kirjaimella, tai vapaa toimintonäppäin), tallennettuna tähän selaimeen tai työpöytäsovellukseen. |
| `SHXFONTS` | `SHX` | Anna CadCraftille SHX-fontit kansiosta tai tiedostoista, jotta tekstityylit, jotka nimeävät ne, piirtyvät niillä (luettele, poista, käännä) |
| `SKETCHFIX` | `SKF` | Piirrä vapaamuotoisia vetoja; jokainen muuttuu siistiksi viivaksi, ympyräksi, kaareksi, suorakulmioksi tai murtoviivaksi, suoristettuna ja liitettynä muihin. |
| `SKETCHLIVE` | `SKL` | Piirrä kynällä: jokainen veto muuttuu tarkaksi viivaksi, ympyräksi, kaareksi tai suorakulmioksi, kun nostat kynän, tarttuen piirustukseen, ja sen koko voidaan kirjoittaa päälle. |
| `SPLINE` | `SPL` | Piirrä spline pisteiden kautta (tai ohjauspolygonilla), tai muuta murtoviiva siksi |
| `SPLINEDIT` | `SPE` | Muokkaa splineä: sovituspisteet, ohjauspisteet ja painot, avaa tai sulje, käännä tai muuta murtoviivaksi |
| `SPLIT` | | Jaa piirustusalue ruutuihin (kuten VPORTS mallissa; myös arkilta) |
| `STEELMEMBER` | `SMEMBER` | Teräsprofiili 3D:ssä vakioprofiilista: kaksi pistettä (palkki) tai perustapiste ja korkeus (pilari) |
| `STLOUT` | | Vie 3D-malli STL:nä (millimetreinä) |
| `STRETCH` | `S` | Venytä: vedä leikkaava ikkuna päiden yli siirtääksesi; ikkunan sisällä oleva liikkuu, loput pysyvät (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Tekstityylit: fontti, korkeus, leveys ja kaltevuus, jotka uusi teksti saa (ikkuna; -STYLE komentorivillä) |
| `SUBTRACT` | `SU` | Vähennä kappaleita toisista (3D), tai 2D-alueita alueista |
| `SWBOUT` | `SWMACRO` | Lataa SolidWorks-makro (.swb), joka rakentaa mallin uudelleen yhdeksi rajoitetuksi luonnokseksi |
| `SWEEP` | | Pyyhkäise suljetut 2D-kohteet polkua pitkin (viiva, murtoviiva, kaari, ympyrä) kappaleiksi (3D) |
| `TABLE` | `TB` | Tee taulukko: rivit ja sarakkeet, tai leikepöydän tai CSV-tiedoston laskentataulukon soluista |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Muokkaa taulukkoa: kirjoita soluun, lisää ja poista rivejä ja sarakkeita, koot, yhdistetyt solut, tasaus |
| `TABLEEXPORT` | | Tallenna taulukon näyttämä sisältö CSV-tiedostona |
| `TABLEPASTE` | `PASTETABLE` | Tee taulukko leikepöydän laskentataulukon soluista |
| `TABLESTYLE` | `TS` | Taulukkotyylit: tekstin korkeudet, tasaus, marginaali ja reunat otsikko-, ylätunniste- ja datarivejä varten |
| `TAGS` | | Tunnisteet lohkoviittauksissa: määrittele tunniste (laji, sallitut arvot, lohkot, joihin se kohdistuu), aseta se valituille viittauksille ja luettele ne aikataulun muodossa, jonka voi tallentaa CSV:nä |
| `TEXT` | `DT`, `DTEXT` | Yhden rivin teksti; Enter aloittaa seuraavan rivin |
| `TEXTEDIT` | `ED`, `DDEDIT` | Muokkaa tekstiä paikallaan: valitse teksti (tai kaksoisnapsauta sitä) (ED) |
| `TEXTMASK` | `TMASK` | Aseta taustamaski tekstien taakse (piirustuksen tausta tai väri), tai poista se. |
| `TEXTTOFRONT` | | Tuo kaikki teksti, mitat ja johtoviivat kaiken muun eteen. |
| `TOOLBAR` | | Valitse, mitä työkalurivin painikkeet näyttävät: kuvakkeet ja teksti, vain kuvakkeet tai vain teksti (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Aseta työkalurivi ikkunan ylä-, ala-, vasempaan tai oikeaan reunaan |
| `TOOLBARROWS` | | Valitse, kuinka monta riviä työkalurivi käyttää: sovita, 2 tai 1 (Shift+Ctrl+F1) |
| `TOPAREA` | | Tee piirustuksen yläpuolisista palkeista vakio tai kompakti |
| `TOUCHCROSSHAIR` | `TCX` | Siirretty ristikko sormella piirtämiseen: yksi sormi liikuttaa ristikkoa, joka on sen yläpuolella ja sivulla, joten sormi ei peitä valittua pistettä. Sormen nostaminen ei valitse mitään; Napsautus-painike tai toisella sormella napautus valitsee ristikon kohdalta, ja Napsautuksen pitäminen pohjassa vetää, kun liikutat. Pitkä painallus tai Enter-painike on Enter. Kaksi sormea panoroi ja zoomaa. Vaihtoehdot: ON, OFF, Auto (päällä vain, kun sormi on ainoa osoitin), Etäisyys, Puoli. |
| `TOUR` | `TUTORIAL` | Tee kuuden askeleen ensimmäisen piirustuksen kierros uudelleen |
| `TRIM` | `TR` | Leikkaa kohteita siihen asti, missä muut ylittävät ne: napsauta palaa, vedä useiden yli tai Shift+napsautus pidentää |
| `TRIMEXTENDMODE` | | Miten TRIM ja EXTEND alkavat: 1 Pikatila (jokainen kohde on leikkausreuna tai raja), 0 Vakio (valitse reunat ensin) |
| `TTR` | | Ympyrä, joka koskettaa kahta kohdetta, säteellä jonka annat (sama kuin CIRCLE T). |
| `TURNLEFT` | | Käännä näkymä 90° vasemmalle (vastapäivään): UCS Z -90, ja näkymä seuraa. Piirustuksen mikään ei liiku. |
| `TURNRIGHT` | | Käännä näkymä 90° oikealle (myötäpäivään): UCS Z 90, ja näkymä seuraa. Piirustuksen mikään ei liiku. |
| `TURNWORLD` | | Takaisin maailmaan: UCS Maailma, ja näkymä on taas vaakatasossa. |
| `TXT2MTXT` | `T2M` | Liitä yhden rivin tekstit yhdeksi kappaleeksi, ylhäältä alas. |
| `UCS` | | Oma koordinaatistosi: origo ja X-akseli (origo, Z-kulma, 3point, OBject, Previous, World, NAmed). Kirjoittamasi pisteet, ortogonaali, napaseuranta, ruudukko ja uusi teksti seuraavat sitä; näkymä kääntyy niin, että sen X-akseli on vaakatasossa. Piirustuksen mikään ei liiku. |
| `UNDO` | `U` | Kumoa viimeisin komento |
| `UNGROUP` | | UNGROUP: pura ryhmät. Valitse ryhmien kohteita tai anna Nimi. Kohteet jäävät piirustukseen. |
| `UNION` | `UNI` | Yhdistä kappaleet yhdeksi (3D), tai 2D-alueet yhdeksi alueeksi |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Näytä uudelleen jokainen ISOLATEOBJECTS- tai HIDEOBJECTS-komennon piilottama kohde. |
| `UNITS` | `UN`, `DDUNITS` | Miten pituudet näytetään ja kirjoitetaan: desimaali, jalat ja tuumat, murtoluvut (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Laske kentät uudelleen ja valitse, milloin ne päivittyvät itsestään |
| `USDOUT` | | Vie 3D-malli USD:nä (.usda-teksti, .usdc-binaari tai .usdz-paketti) |
| `VIEW` | `-VIEW`, `V` | Vakio-3D-näkymät, perspektiivi tai yhdensuuntainen (3D) |
| `VIEWBASE` | `FLATSHOT` | Sijoita litteä 2D-näkymä 3D-kappaleista (edestä, päältä, sivulta tai isometrinen, piilotetut viivat katkoviivoina) arkille tai malliin |
| `VIEWLABEL` | `VL` | Näkymän otsikko arkilla, joka näyttää sen näkymäruudun näkymän nimen ja muuttuu sen mukana. |
| `VOICE` | | Kytke puhutut komennot päälle tai pois. Ne tunnistetaan tällä tietokoneella. |
| `VPCLIP` | | Rajaa arkin näkymäruutu suljettuun kohteeseen tai piirrettyyn monikulmioon; Delete tekee siitä taas suorakulmion |
| `VPLAYER` | | Jäädytä tai sulata tasot joissakin näkymäruuduissa vain (Jäädytä, Sulata, Palauta), ja valitse, mitkä tasot uudet näkymäruudut aloittavat jäädytettyinä (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Jaa piirustusalue ruutuihin, kukin omalla näkymällään (arkilla: näkymäruutu, kuten MVIEW) |
| `VPVIEW` | | Aseta, mitä näkymäruutu näyttää: valitse ikkuna mallissa |
| `VSCURRENT` | `VS`, `SHADEMODE` | 3D-näkymän visuaalinen tyyli: varjostettu, reunat, piilotettu viiva, rautalanka, röntgen |
| `WALL` | `WA` | Piirrä 2D-seiniä murtoviivana. Ne liittyvät, ja niissä on ovet ja ikkunat. |
| `WALLARC` | `WARC` | Piirrä kaari seinistä. Pohjapiirroksen seinät ovat suoria, joten kaari piirretään lyhyinä suorina seininä (15 astetta kukin), jotka liittyvät. |
| `WALLDELSEG` | | Poista seinän pala kahden pisteen välillä. Jäljelle jäävä pysyy yhtenä tai kahtena seinänä. |
| `WALLDIM` | | Kirjoita uusi arvo mitalle: kaukaisessa päässä oleva seinä siirtyy kohtisuoraan itseensä, ensimmäisessä päässä oleva seinä pysyy, ja siihen liitetyt seinät seuraavat. |
| `WALLDISJOIN` | | Valitse seinä lähellä sen päätä estääksesi liitokset siinä päässä: pää piirretään suorana eikä mikään seuraa sitä. Valitse uudelleen sallitaksesi ne. |
| `WALLGRID` | | Lukitse seinä ruudukkoviivaan: sitä pitkin tai toinen pää siinä. Siirrä viivaa GRIDMOVE-komennolla, ja seinä seuraa. |
| `WALLHOLD` | | Kohdista ja lukitse: seinä säilyttää paikkansa toista seinää vasten (sen viivalla tai etäisyydellä, joka sillä on). Jos toinen liikkuu, toinen seuraa. |
| `WALLHOLDDIM` | | Lukitse kahden yhdensuuntaisen seinän välinen etäisyys. Jos toinen liikkuu, toinen seuraa säilyttääkseen sen. |
| `WALLHOLDS` | | Luettele seinien lukot. |
| `WALLJOINS` | | Anna jokaiselle vanhan piirustuksen seinälle sen tunnus ja tallenna niiden väliset liitokset. Tämä tapahtuu myös ensimmäisellä tekemälläsi muutoksella. |
| `WALLJOINSTYLE` | | Napsauta kulmaa, jossa kaksi seinää kohtaa päästä päähän, muuttaaksesi sen piirtotapaa: viisto, tasapää, suorista. T vaihtaa, kumpi seinä kulkee läpi. |
| `WALLOFFSET` | `WO` | Siirrä seinä itseensä nähden kohtisuoraan etäisyydellä (siihen liitetyt seuraavat), tai tee kopio sillä etäisyydellä. |
| `WALLPICK` | | Tee seiniä viivalle tai murtoviivalle piirustuksessa, ja siihen liitetyt viivat mukaan, jos sanot Kyllä. |
| `WALLPOLY` | `WP` | Piirrä seinät säännöllisen monikulmion ympärille, 3–64 sivua, kuten POLYGON. |
| `WALLRECT` | `WR` | Piirrä neljä liitettyä seinää kahdesta vastakkaisesta kulmasta, kuten RECTANG. |
| `WALLREJOIN` | | Tee kahdesta seinän osasta jälleen yksi seinä. Ensimmäinen säilyttää paikkansa piirustuksessa. |
| `WALLROT` | | Piirrä neljä liitettyä seinää kiertyneenä suorakulmiona mihin tahansa kulmaan: ensimmäinen sivu, sitten kuinka kauas. |
| `WALLSPLIT` | `WS` | Jaa seinä kahtia pisteessä tai siinä, missä toinen seinä ylittää sen. Osat pysyvät liitettyinä, ellet pyydä rakoa tai vapaita päitä. Ovet ja ikkunat seuraavat omaa osaansa. |
| `WALLSPLITGAP` | | Jaa seinä jättäen aukko: kirjoita aukko, valitse seinä ja sitten piste. Osilla on vapaat päät, ja ne voidaan liittää uudelleen. |
| `WALLSTRETCH` | | Venytä ikkunalla: sen sisällä olevat seinän päät liikkuvat, kokonaan sisällä olevat seinät liikkuvat kokonaisina, ja sivuihin päättyvät seinät liukuvat niiden mukana. |
| `WALLTAN` | | Jatka seinää kaarella, joka lähtee siitä seinää pitkin (piirretty lyhyinä suorina seininä). |
| `WALLTRACE` | | Tee seiniä pienimmän suljetun alueen ympärille, jonka viivat ja seinät muodostavat napsautuksesi ympärillä. |
| `WALLUNHOLD` | | Poista seinän lukot (ja muiden seinien lukot siihen). |
| `WBLOCK` | `W`, `-WBLOCK` | Kirjoita lohko, joitakin kohteita tai koko piirustus uuteen DWG- tai DXF-tiedostoon (W) |
| `WEDGE` | `WE` | Kiila: kaksi kulmaa ja korkeus; se viettää pois ensimmäisestä kulmasta (3D) |
| `WHEREAMI` | `WHERE` | Kertoo, missä kohdistin on. |
| `WHOHAS` | | Kertoo, kuka on avannut piirustuksen. CadCraft Studio pitää pientä lukkotiedostoa jokaisen avoimen piirustuksen vieressä (Plan.dwg.cclock: kuka, kuinka kauan, mikä versio) ja poistaa sen sulkiessa. Vaihtoehdot: Current (avoin piirustus), File (valitse yksi), FOlder (jokainen kansion piirustus, joka on auki jossakin; tämä antaa Studiolle luvan pitää lukkotiedostoja siellä), Path (kirjoita yksi), Name (nimi, jonka muut näkevät). Lukko, jota ei ole päivitetty viiteen minuuttiin, on vanhentunut. Ei käytettävissä selaimessa. |
| `WINDOW` | `WN` | Aseta ikkuna seinään. |
| `XATTACH` | `XA` | Linkitä toinen DWG tai DXF tähän piirustukseen, vain luku (XREF luettelee ja lataa ne uudelleen) |
| `XCLIP` | `XC` | Rajaa lohkoviittauksia ja linkitettyjä piirustuksia suorakulmioon tai monikulmioon, tai poista rajaus. |
| `XLINE` | `XL` | Rakennusviiva, päätön molempiin suuntiin: kahden pisteen kautta, vaakasuora, pystysuora, tietyssä kulmassa, kulmaa puolittava tai viivasta siirretty. |
| `XREF` | `XR`, `-XREF` | Linkitetyt piirustukset (ulkoiset viittaukset): luettele, liitä, lataa uudelleen, sido, irrota |
| `ZOOM` | `Z` | Laajuus tai ikkuna |
