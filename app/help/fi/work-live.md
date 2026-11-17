---
title: Työskentele yhdessä piirustuksen parissa Live TeamWorkilla
summary: Mitä CadCraftissa muuttuu, kun olet Live TeamWork -istunnossa CadCraft Studio -ohjelmasta: muiden kohdistimet ja valinnat, kohteet, joita joku muokkaa, isännän lukot, oma kumoaminen ja liittyminen selaimesta samaan verkkoon.
keywords: live, live teamwork, studio live, yhdessä, yhteistyö, samanaikainen muokkaus, istunto, jaa live, liity, kohdistin, pidetty, muokkaus, lukko, LIVELOCK, LIVEUNLOCK, LIVEHOLD, pidä taso, pidä alue, riippulukko, kumoa, isäntä, avustaja, sama tiedosto, monta ihmistä, hidas, raja, kuka muutti, viimeisimmät muokkaukset, muokkausloki
from: 0497d2a3
---

## Mitä opit

Mitä näet ja mitä muokkauksillesi tapahtuu, kun useat ihmiset työskentelevät samalla piirustuksella yhtä aikaa. CadCraft Studio käynnistää Live TeamWork -istunnon ja liittää siihen (Jaa live, Liity). Tämä sivu koskee itse piirustusta.

## Kaikki piirtävät yhtä aikaa

Piirrä ja muokkaa tavalliseen tapaan. Omat muokkauksesi näkyvät heti, jopa ennen kuin muut saavat ne, ja muiden muokkaukset näkyvät näytölläsi hetken kuluttua siitä, kun ne tekevät ne. Jokainen komento toimii: piirtäminen, muokkaaminen, tasot, lohkot, arkit, mitoitukset ja rajoitteet.

Kaksi ihmistä voi muuttaa samaa kohdetta. Kun muutat eri asioita, kuten yhden viivan väriä ja päätepistettä, molemmat muutokset säilyvät. Kun muutat samaa asiaa, myöhempi muutos voittaa.

Omia ovat nykyinen taso, uusien kohteiden väri ja tekstin korkeus, mitoitusasetukset, näkymä, jaettu näkymä ja UCS. Piirustus on yhteinen; se, miten sitä katsot, ei ole.

## Muut piirustuksessasi

- **Kohdistimet:** jokaisen henkilön osoitin näkyy nimensä ja omalla värillään sekä komennolla, jota hän suorittaa. Näet kohdistimet ihmisiltä, jotka työskentelevät lähellä näytöllä olevaa.
- **Valinnat:** se, minkä joku on valinnut, on piirretty ääriviivoin hänen värillään.
- **Muokkauksen alla:** kohteessa, jonka joku on valinnut, on merkintä kuten ”Ana muokkaa”. Värin voi yhä vaihtaa tai kohdetta siirtää, mutta sitä ei voi poistaa, hajottaa tai syöttää uudelleen, ennen kuin toinen vapauttaa sen. Kohteen valitseminen kertoo, kuka sitä muokkaa.
- **Kuka muutti viimeksi:** valitse yksi kohde, jonka joku muu on muuttanut tässä istunnossa, ja komentorivi kertoo kuka ja mikä muutos oli (”Ben changed that last: CIRCLE.”). Studion Live-paneeli luettelee kaikki viimeisimmät muokkaukset kohdassa {{ui:Viimeisimmät muokkaukset}}. Mitään tästä ei tallenneta piirustukseen: se kestää istunnon ajan.

## Pidä taso tai alue, kun työskentelet siellä

Suuressa piirustuksessa, jossa on useita ihmisiä, ilmoita, mikä osa on sinun juuri nyt:

1. Kirjoita `LIVEHOLD` ja paina {{key:Enter}}.
2. Valitse `L` ja kirjoita tason nimi ({{key:Enter}} säilyttää nykyisen tason), tai valitse `A` ja napsauta kahta alueen kulmaa.
3. Muiden muokkaukset tuolla tasolla tai tämän alueen kohteisiin perutaan, ja heille kerrotaan, että työskentelet siellä. Näet alueesi katkoviivakehyksenä. Muut näkevät sen sinun värilläsi nimesi kanssa, ja pitämäsi tasot luetellaan heidän piirustuksensa vasempaan yläkulmaan.
4. `LIVEHOLD`, sitten `R`, vapauttaa kaiken pitämäsi. Istunnosta poistuminen vapauttaa sen myös.

Istunnossa jokainen voi pitää, myös isäntä. Isännän lukot pätevät silti päällä. Pitoa ei koskaan tallenneta tiedostoon.

## Kun muokkaus perutaan

Isännän kopio piirustuksesta tarkistaa jokaisen muokkauksen. Muutama ei voi mennä läpi. CadCraft perii ne näytöltäsi ja kertoo komentorivillä syyn, esimerkiksi:

- joku poisti kohteen tai tason tai lohkon, jota se tarvitsee, juuri ennen sinua;
- joku muokkaa kyseistä kohdetta tai pitää sen tasoa tai aluetta;
- isäntä lukitsi sen;
- lohko, jonka sijoitat, on puhdistettu, tai taso, jonka poistat, sisältää yhä kohteita.

## Kumoa kumoaa oman työsi

{{key:Mod+Z}} ja {{ui:Kumoa}} kumoavat oman viimeisen komentosi kokonaisuudessaan ja jättävät muiden työn rauhaan. Kun joku on muuttanut samaa asiaa sen jälkeen, mitään ei kumota, ja komentorivi kertoo, kuka sen muutti. {{key:Mod+Y}} tekee uudelleen.

## Lukot (isäntä)

Isäntä voi suojata kohteita tai koko tason, niin ettei kukaan muuta niitä, isäntä mukaan lukien, ennen kuin ne avataan:

1. Valitse kohteet, kirjoita `LIVELOCK` ja paina {{key:Enter}}. Tai kirjoita `LIVELOCK`, kun mitään ei ole valittu, ja valitse `L` lukitaksesi taso nimellä: sille tasolle myöhemmin lisätyt kohteet lukitaan myös.
2. Lukitut kohteet piirretään katkoviivoin, ja kaikkien näytöllä on merkintä ”Isännän lukitsema”.
3. `LIVEUNLOCK` avaa ne samalla tavalla.

Lukot kuuluvat istuntoon: ne päättyvät, kun se päättyy, eikä niitä koskaan tallenneta tiedostoon.

## Liity samalla tiedostolla

Jos avasit saman tiedoston, jonka isäntä avasi (yhteisestä kansiosta tai samasta kopiosta), liity omasta CadCraft-ikkunastasi Studio-sovelluksessa: avaa {{ui:Hyötykuorma}}-paneeli ja käytä {{ui:Liity tähän}} isännän koodilla. Siirtyvät vain muutokset, jotka on tehty isännän avaamisen jälkeen, joten suuri piirustus on valmis heti. Jos tiedostosi on eri, isännän piirustus korvaa sen näytölläsi (tiedostosi pysyy ennallaan). Tämä toimii vain, kun piirustustasi ei ole muutettu sen avaamisen jälkeen.

## Avustajat live-istunnossa

CadCraft-ikkunaasi yhdistetty avustaja (ks. ohje tekoälyavustajien kanssa työskentelystä) liittyy istuntoon omana osallistujanaan, ja kaikille se näkyy nimellä ”Assistant (via <your name>)”. Isäntä päästää sen sisään kuten ihmisen; isännän oma avustaja liittyy heti. Oman työsi kumoaa {{key:Mod+Z}}, ja avustajan kumoaminen kumoaa vain sen oman työn. Avustaja poistuu istunnosta, kun katkaiset sen yhteyden tai poistut, ja se voi toimia istunnossa vain silloin, kun muokkaus on sallittu.

## Liity selaimesta

Työtoveri ilman Studiota voi skannata isännän koodin alla olevan kuvan puhelimella, tabletilla tai tietokoneella samassa verkossa. CadCraft avautuu selaimessa, kysyy nimeä komentorivillä ja täyttyy isännän piirustuksella, kun isäntä päästää sen sisään. Kutsulinkki mahdollistaa liittymisen toisesta verkosta: isännällä on oltava Team Cloud Plan -käyttöpaikka sovellukseen, muut liittyvät ilmaiseksi, ja linkki toimii vain, kun isännän istunto on auki.

## Monta ihmistä yhdellä piirustuksella

Jokainen muokkaus menee kaikille istunnossa, joten mitä enemmän ihmisiä on, sitä kauemmin kukin muutos kestää saavuttaa jokaisen heistä. Hitaammat kannettavat ja yhteydet jäävät ensimmäisinä jälkeen. Istunnon tavallinen koko on 20 ihmistä. Isäntä voi sallia enemmän yhdelle istunnolle (ks. ohje yhteistyöstä live-tilassa). Jos piirustus tuntuu hitaalta monen ihmisen kanssa, auttavat vähemmän ihmisiä, vähemmän samanaikaisesti muokkaavia tai parempi yhteys.

## Kun istunto päättyy

Vain isäntä tallentaa piirustuksen. Kun isäntä päättää istunnon, muut säilyttävät tallentamattoman kopion: tallenna se, jos haluat säilyttää sen.

:::note
Peruttu muokkaus piirretään ympäröivien kohteiden päälle omalle näytöllesi, kunnes avaat piirustuksen uudelleen. Päällekkäiset viivoitukset ja täytetyt kohteet voivat näyttää erilaisilta kuin isännän kopio; piirustus itsessään on sama.
:::
