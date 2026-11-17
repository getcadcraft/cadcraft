---
title: Arkin asetus piirustusotsikolla ja näkymäruuduilla
summary: Tee arkki (asettelu) reunuksella ja piirustusotsikolla, aseta näkymäruudun mittakaava, lisää toinen näkymäruutu yksityiskohdalle ja täytä piirustusotsikko.
keywords: asettelu, arkki, paperitila, näkymäruutu, mview, vpview, piirustusotsikko, mittakaava, paperikoko, reunus, vports, tulostusmittakaava, mspace, pspace, mallitila, siirry näkymäruutuun, kaksoisnapsauta näkymäruutua
from: 45a45de8
---

## Mitä tehdään

A3-arkki piirustusotsikolla, koko pohjapiirros yhdessä näkymäruudussa mittakaavassa 1:100 ja toinen näkymäruutu, joka näyttää yhden kulman mittakaavassa 1:20.

## Malli ja arkit

Piirrät rakennuksen {{ui:Malli}}-välilehdellä täydessä koossa: 6 m seinä on 6000 yksikköä pitkä millimetreinä. **Arkki** (asettelu) on paperinpala, mitattuna millimetreinä tai tuumina. **Näkymäruutu** on arkkiin leikattu ikkuna, joka näyttää mallin tietyssä mittakaavassa.

## Ennen aloittamista

1. Avaa tai piirrä pohjapiirros {{ui:Malli}}-välilehdellä.
2. Paina {{key:Esc}}, jotta mitään ei ole valittuna.
3. Aseta kohdassa {{ui:Nykyiset asetukset}} {{ui:Yksiköt}} yksikkö, jolla piirsit, esimerkiksi {{ui:Millimetrit}}.

Yksiköillä on merkitystä: näkymäruudun mittakaava, kuten 1:100, tarkoittaa, että yksi millimetri paperilla näyttää 100 todellista millimetriä, joten CadCraftin täytyy tietää, mikä yksi piirustusyksikkö on. Piirustus, joka on jätetty arvoon {{ui:Yksiköitön}}, katsotaan olevan paperin yksikössä (millimetreinä ISO-paperilla, tuumina US-paperilla).

## Tee arkki

1. Napsauta {{ui:+}}-painiketta piirustuksen alla olevien välilehtien oikealla puolella, tai kirjoita `LAYOUT` ja paina {{key:Enter}}, tai napsauta {{ui:Uusi arkki}}.

Uusi välilehti `Layout1` avautuu. Näet arkin tummemmalla pöydällä: reunuksen, piirustusotsikon oikeassa alakulmassa ja yhden näkymäruudun sen yläpuolella, joka näyttää koko mallin suurimmassa vakiomittakaavassa, joka mahtuu. Historia nimeää paperin: ISO A3 metrisille ja yksiköttömille piirustuksille, Tabloid (ANSI B) tuuma- tai jalkapiirustuksille.

2. Napsauta {{ui:Laajuus}} sovittaaksesi arkin näytölle.

## Valitse paperi

1. Paina {{key:Esc}}, jotta mitään ei ole valittuna. Oikean paneelin otsikko sanoo ”Arkki: Layout1”.
2. Kirjoita kohtaan {{ui:Nimi}} `A-101 Plan` ja paina {{key:Enter}}. Välilehti nimetään uudelleen.
3. Valitse kohdasta {{ui:Paperi}} koko.
4. Valitse kohdasta {{ui:Suunta}} {{ui:Vaaka}} tai {{ui:Pysty}}.

:::warning
Paperin vaihtaminen ei siirrä eikä muuta kokoa siitä, mikä on jo arkilla. Vaihdon jälkeen tarkista, että reunus, piirustusotsikko ja näkymäruutu mahtuvat yhä, ja siirrä tai muuta niiden kokoa kahvoilla. Vaihtaminen millimetri- ja tuumapaperin välillä säilyttää luvut, joten kaikki muuttuu kooltaan: tilarivi varoittaa tästä.
:::

## Aseta näkymäruudun mittakaava

1. Napsauta näkymäruudun kehystä (reunaa). Paneelin otsikko sanoo ”Näkymäruutu”.
2. Valitse kohdasta {{ui:Mittakaava}} `1:100`.

Mallin näkymä piirtyy uudelleen mittakaavassa 1:100, keskitettynä entiseen paikkaansa. Luettelo tarjoaa metrisiä mittakaavoja 10:1:stä 1:10000:een. Tuuma- tai jalkapiirustuksissa on myös arkkitehtuurimittakaavoja (1/4" = 1'-0" ja vastaavat) ja insinöörimittakaavoja (1" = 20' ja vastaavat). {{ui:Sovita koko malli}} asettaa tarkan, ei-vakiomittakaavan, joka sopii kaikkeen.

3. Jos pohjapiirros ei ole enää keskellä, muuta oikeassa paneelissa kohdan {{ui:Näkymän keskipiste (malli)}} alla olevia arvoja {{ui:X}} ja {{ui:Y}}: ne ovat mallin pisteen, joka näkyy näkymäruudun keskellä.

## Näytä osa mallista näkymäruudussa

1. Valitse näkymäruutu ja napsauta oikeassa paneelissa kohtaa {{ui:Valitse ikkuna mallista…}} (tai kirjoita `VPVIEW` ja paina {{key:Enter}}).
2. CadCraft vaihtaa {{ui:Malli}}-välilehdelle. Napsauta näytettävän alueen yhtä kulmaa.
3. Napsauta vastakkaista kulmaa.

Palaat arkille, ja näkymäruutu näyttää alueen suurimmassa vakiomittakaavassa, joka mahtuu; historia kertoo, mikä. {{ui:Näytä koko malli}} palauttaa koko pohjapiirroksen vakiomittakaavassa.

## Lisää toinen näkymäruutu yksityiskohdalle

1. Tee tilaa arkille: valitse ensimmäinen näkymäruutu ja vedä kulmakahvaa pienentääksesi sitä.
2. Kirjoita `MV` ja paina {{key:Enter}}, tai napsauta {{ui:Näkymäruutu}}-painiketta Arkit-ryhmässä.
3. Napsauta uuden näkymäruudun yhtä kulmaa arkilla.
4. Napsauta vastakkaista kulmaa.

Uusi näkymäruutu näyttää koko mallin. Historia kertoo sen mittakaavan.

5. Napsauta uuden näkymäruudun kehystä.
6. Napsauta {{ui:Valitse ikkuna mallista…}} ja valitse pieni alue pohjapiirroksen yhden kulman ympäriltä.
7. Valitse kohdasta {{ui:Mittakaava}} `1:20`.

Näkymäruutujen kehykset ovat tasolla `Viewports`, joka on asetettu olemaan tulostumatta, joten kehykset näkyvät ruudulla mutta eivät PDF:ssä.

## Täytä piirustusotsikko

Piirustusotsikko koostuu tavallisista viivoista ja tekstistä tasolla `Title block`. Se alkaa piirustuksen nimellä, ensimmäisen näkymäruudun mittakaavalla, tämän päivän päivämäärällä ja arkin numerolla.

1. Kaksoisnapsauta suurta otsikkotekstiä. Sen päälle aukeaa muokkausruutu.
2. Kirjoita arkin otsikko.
3. Napsauta {{ui:OK}} tai paina {{key:Mod+Enter}}.

Tee sama muille kentille. Käytä {{cmd:TEXT}}-komentoa kirjoittaaksesi tyhjään ”DRAWN BY” -soluun. SCALE-teksti ei päivity itsekseen, kun muutat näkymäruudun mittakaavaa: muokkaa sitä käsin.

## Piirrä arkille

Kaikki, mitä piirrät arkkivälilehdellä, on paperilla paperiyksiköissä: 3.5 korkuinen teksti on 3.5 mm korkea ISO-arkilla. Huomautukset, pohjoisnuolet ja arkkien reunukset kuuluvat tänne.

Varsinaisen pohjapiirroksen muuttamiseksi siirry {{ui:Malli}}-välilehdelle tai työskentele näkymäruudun kautta (seuraava osio); jokainen näkymäruutu näyttää muutoksen.

## Työstä mallia näkymäruudun kautta

1. Kaksoisnapsauta näkymäruudun sisällä kehyksen ulkopuolella. Tai kirjoita `MS` ja paina {{key:Enter}}: jos arkilla on vain yksi näkymäruutu, siirryt suoraan sisään; jos niitä on useita, napsauta sisään siihen, jonka haluat.

Kehys piirtyy paksummaksi, historia kertoo olevasi sisällä, ja arkin välilehti pysyy valittuna. Kaikki, mitä piirrät tai muutat nyt, on mallissa mallin yksiköissä, kuten {{ui:Malli}}-välilehdellä: viiva, joka piirretään mittakaavassa 1:100 olevan näkymäruudun sisällä, on todellisia millimetrejä. Tässä näkymäruudussa jäädytettyjä tasoja ei voi valita.

2. Pyöritä rullaa tai vedä keskipainikkeella zoomataksesi ja panoroidaksesi, mitä näkymäruutu näyttää. Arkki pysyy paikallaan.
3. Kaksoisnapsauta kehyksen ulkopuolella mihin tahansa tai kirjoita `PS` ja paina {{key:Enter}}.

Palaat arkille. Näkymäruutu säilyttää näkymän, jossa jätit sen; {{key:Mod+Z}} palauttaa vanhan näkymän yhdellä askeleella. Minkä tahansa välilehden napsauttaminen piirustuksen alla poistaa myös näkymäruudusta.

:::note
Näkymäruutu, jonka näyttö on lukittu ({{ui:Näyttö lukittu}} kohdassa Ominaisuudet), säilyttää näkymänsä: sen sisällä panorointi ja zoomaus liikuttavat koko arkkia. Näkymäruutuun, joka on kytketty pois päältä, ei voi siirtyä.
:::

## Merkitse näkymä sen nimellä

Näkymäruudun alla oleva näkymän nimike voi näyttää näkymäruudun näkymän nimen ja pysyä sen mukana:

1. Anna näkymälle nimi: valitse näkymäruudun kehys ja täytä Ominaisuudet-paneelin kenttä {{ui:Näkymän nimi}}. Tai tallenna näkymä {{ui:Malli}}-välilehdellä komennolla {{cmd:NAMEDVIEW}}, valitse näkymäruutu ja kirjoita `VPVIEW`, `V` ja näkymän nimi: näkymäruutu näyttää sen näkymän ja ottaa sen nimen.
2. Kirjoita `VIEWLABEL` (`VL`) ja paina {{key:Enter}}, ja napsauta kohtaa, johon nimike menee ({{key:Enter}} sijoittaa sen näkymäruudun vasemman alakulman alle).

Kun näkymän nimi muuttuu, nimike muuttuu mukana samassa kumoamisvaiheessa.

## Jäädytä taso yhdessä näkymäruudussa

Piilottaaksesi tason yhdessä näkymäruudussa mutta ei muissa (esimerkiksi kalusteet yksityiskohdassa):

1. Valitse näkymäruudun kehys tai työskentele sen sisällä (kaksoisnapsauta).

{{ui:Tasot}}-paneelin jokaisella rivillä on yksi painike lisää, ja luettelon yläpuolella oleva rivi kertoo siitä.

2. Napsauta tuota painiketta tason rivillä.

Taso katoaa vain siitä näkymäruudusta. Napsauta uudelleen palauttaaksesi sen; {{key:Mod+Z}} kumoaa kumman tahansa. Usean tason tai näkymäruudun kerralla kirjoita {{cmd:VPLAYER}}: `F` (Jäädytä) tai `T` (Sulje jäädytys), tasojen nimet (`A-*` ottaa kaikki tasot, jotka alkavat A-:lla), sitten `C` (Nykyinen), `A` (Kaikki) tai `S` (Valitse). `VPLAYER` `V` (Vpvisdflt) valitsee tasot, joiden kanssa uudet näkymäruudut alkavat jäädytettyinä.

## Lisää arkkeja

Jokainen {{ui:+}} lisää arkin (`Layout2`, `Layout3` …) seuraavalla arkkinumerolla. Poistaaksesi avoinna olevan arkin paina {{key:Esc}} ja napsauta oikeassa paneelissa {{ui:Poista tämä arkki}}. Se poistuu kysymättä; {{key:Mod+Z}} palauttaa sen.

Tulosta arkki napsauttamalla {{ui:Plottaa tämä arkki}} tai painamalla {{key:Mod+P}}; katso [Plottaa PDF:ksi](topic:plot-pdf).

## Yleisiä virheitä

- **Näkymäruutu ei näytä mitään.** Malli on tyhjä tai näkymä on suunnattu muualle. Valitse kehys ja napsauta {{ui:Näytä koko malli}}.
- **Mittakaavaluettelossa on vain suhteita, ei jalka- tai tuumamittakaavoja.** Aseta {{ui:Malli}}-välilehdellä {{ui:Yksiköt}} arvoon {{ui:Tuumat}} tai {{ui:Jalat}}.
- **1:100 näyttää kymmenen kertaa liian isolta tai pieneltä.** Piirustusyksiköt ovat väärin. Aseta {{ui:Yksiköt}} siihen, mikä yksi yksikkö todella on.
- **Pohjapiirroksen napsauttaminen näkymäruudun sisällä ei valitse mitään.** Arkilla valitset arkin omat kohteet. Kaksoisnapsauta ensin näkymäruudun sisällä, jotta työskentelet pohjapiirroksella sen kautta.
- **Napsautukset näkymäruudun ulkopuolella eivät tee mitään.** Olet näkymäruudun sisällä: kaksoisnapsauta sen ulkopuolella tai kirjoita `PS`, jotta työskentelet taas arkilla.
- **”Näkymäruudut sijoitetaan asetteluun. Avaa asettelun välilehti (tai luo yksi komennolla LAYOUT) ensin.”** {{cmd:MVIEW}} toimii vain arkkivälilehdellä.
