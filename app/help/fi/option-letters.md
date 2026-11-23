---
title: Anna komennon valinnoille omat kirjaimet
summary: Vastaa komennon valintoihin kirjaimilla, jotka valitset, millä tahansa kielellä, yhdestä muokattavasta tekstitiedostosta, jonka voi tuoda ja viedä.
keywords: valintakirjaimet, optionkeys, optkeys, valinta, avainsana, uudelleenkartoitus, kartoitus, mukauttaminen, omat kirjaimet, napa, P, PO, kieli, käännä valinnat, lyhyt muoto, tuonti, vienti, moniselitteinen
from: 7c8328c6
---

## Mitä opit

Miten muutat kirjaimia, joilla vastaat komennon valintoihin. Esimerkiksi {{cmd:ARRAY}} kysyy `[Suorakulmainen (R)/Napa (PO)]` ja hyväksyy `PO` valinnalle Napa. Voit saada `P`:n tai minkä tahansa muun kirjaimen tekemään saman, omalla kielelläsi jos haluat.

## Miten valinnat vastataan

Kun komento näyttää valinnat hakasulkeissa, isot kirjaimet ovat ne, jotka kirjoitat: `Napa (PO)` on `PO`, `Poistu (X)` on `X`.

Voit kirjoittaa myös vähemmän kirjaimia. Jos kirjoittamasi sopii vain yhteen näytetyistä valinnoista, CadCraft ottaa sen: kun valinnat ovat `[Suorakulmainen (R)/Napa (PO)]`, pelkkä `P` on Napa. Jos se sopii kahteen, komentorivi nimeää ne ja kysyy uudelleen:

```
C could be COUnt, COLumns. Type more letters.
```

Lukuja ei arvata: kirjoitettu etäisyys tai lukumäärä luetaan aina lukuna.

## Lisää omia kirjaimia

Jokainen komento säilyttää omat sisäänrakennetut kirjaimensa. Lisäät omasi niiden päälle, joten luettelossasi on vain muuttamasi asiat.

1. Avaa {{ui:Asetukset}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Valintakirjaimet}} ja napsauta {{ui:Muokkaa…}}. Tai kirjoita {{cmd:OPTIONKEYS}} ja paina {{key:Enter}}.
2. Valitse {{ui:Komento}}-kohdassa komento, esimerkiksi `ARRAY`. Luettelossa on jokainen komento, joka kysyy valintoja, ja se alkaa viimeksi käyttämästäsi komennosta.
3. Valitse {{ui:Valinta}}-kohdassa valinta. Jokainen näyttää sisäänrakennetut kirjaimensa suluissa, esimerkiksi `Napa (PO)`.
4. Kirjoita {{ui:Omat kirjaimet}}-kohtaan haluamasi kirjaimet, esimerkiksi `P`, ja napsauta {{ui:Lisää}}.
5. Valinta ilmestyy kohtaan {{ui:Omat kirjaimet}} sisäänrakennettujen ja omien kirjaimiesi kanssa. Napsauta {{ui:Tallenna}}.

Aloita {{cmd:ARRAY}}, valitse kohde ja paina {{key:Enter}}. Kehote näyttää omat kirjaimesi valinnan jälkeen, `Napa (P)`, ja `P` vastaa siihen.

Poistaaksesi yhden, napsauta sen rivin päässä olevaa x-merkkiä ja sitten {{ui:Tallenna}}-painiketta. Valinta palaa pelkkiin sisäänrakennettuihin kirjaimiinsa.

## Kirjaimet, joita et voi käyttää

Editori hylkää kirjaimet, jotka piilottaisivat jotain, minkä komentorivi jo lukee, ja kertoo syyn:

- saman komennon jonkin muun valinnan sisäänrakennetut kirjaimet (`R` Napalle komennossa `ARRAY`, jossa `R` on Suorakulmainen);
- kohteen tartuntasana, jossa on vähintään kolme kirjainta, kuten `END`, `MID` tai `CEN`, sekä sanat `ALL` ja `LAST`;
- samat kirjaimet kahdelle eri valinnalle saman komennon sisällä.

Kun jokin rivi on punaisella, {{ui:Tallenna}} on pois päältä: korjaa rivi tai poista se, niin painike palaa käyttöön. Kehotteen sisäänrakennetut kirjaimet voittavat aina omasi, joten oma luettelosi ei voi estää sisäänrakennettua vastausta toimimasta. Kirjaimet, jotka sattuvat olemaan komennon nimi, kuten `L` tai `C`, ovat sallittuja: valintakehotteessa komentorivi lukee vastausta, ei käynnistä komentoa.

Komennolle luetellut valinnat tulevat komennoista, jotka jakavat sen kehotteet, joten joskus komento luettelee valinnan, jota se kysyy vain joissakin tapauksissa.

## Yksi valinta kaikille komennoille

Valitse {{ui:Komento}}-kohdassa {{ui:Jokainen komento}}. Valinnat ovat silloin kaikki valinnat, joita millä tahansa komennolla on, kuten eXit tai Undo. Tänne lisäämäsi kirjaimet vastaavat tuota valintaa missä tahansa komennossa, joka sen tarjoaa. Yhdelle komennolle lisätyt kirjaimet voittavat nämä.

## Kirjaimet omalla kielelläsi

Kirjaimet voivat olla mistä tahansa aakkostosta, joten voit vastata valintoihin vaihtamatta näppäimistön kieltä: lisää `З` Sulje-valinnalle kohdassa {{ui:Jokainen komento}}, tai `П` Napa-valinnalle komennossa `ARRAY`.

CadCraft sisältää vain englanninkieliset kirjaimet. Oma luettelosi on se, jolla sinä, toimistosi tai samaa kieltä puhuvat ihmiset täydentävät muun, ja {{ui:Vie}} tekee tiedoston, jonka voit antaa eteenpäin.

## Muokkaa tekstinä

{{ui:Muokkaa tekstinä}} editorissa näyttää saman luettelon tekstirivinä, yksi valinta per rivi; sama teksti tallentuu {{ui:Vie}}-toiminnolla:

```
ARRAY.PO,  P
*.X,       Q
```

Jokainen rivi on komento, piste, valinnan sisäänrakennetut kirjaimet, pilkku ja omat kirjaimesi. Tähti komennon paikalla tarkoittaa jokaista komentoa. Rivi, joka alkaa `;`-merkillä, on huomautus.

## Mikä pysyy ennallaan

- Sisäänrakennetut kirjaimet toimivat edelleen omien rinnalla.
- Rutiinit ja työkalurivin painikkeet käyttävät yhä sisäänrakennettuja kirjaimia, joten mikään lataamasi ei hajoa. Jos haluat kirjoittaa sisäänrakennetut kirjaimet itse siinä kohdassa, jossa omat kirjaimesi häiritsisivät, lisää alaviiva eteen: `_PO`.
- Komennon lyhenne on eri asia: katso [Muokkaa komentojen aliaksia](topic:command-aliases).

## Rivit, joita CadCraft hylkää

Kun muokkaat tekstinä tai tuot tiedoston, editori luettelee jokaisen ongelman rivinumeroineen:

- komentoa ei ole (komennon lyhenne kelpaa: `AR.PO` luetaan muodossa `ARRAY.PO`);
- rivi ei ole muotoa `COMMAND.OPTION, LETTERS`;
- kirjaimissa on väli tai merkki (vain kirjaimet ja numerot, enintään 16);
- samat kirjaimet vastaavat kahta eri valintaa saman komennon sisällä.

## Tuonti ja vienti

{{ui:Vie}} tallentaa kirjaimesi tekstitiedostoon, jonka voit säilyttää tai antaa jollekulle toiselle. {{ui:Tuo…}} lukee tällaisen tiedoston. Molemmat ovat editorissa ja kohdassa {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Valintakirjaimet}}.

Asetuksissa {{ui:Tuo…}} korvaa tiedostosi valitsemallasi tiedostolla. Tiedostoa, jossa on törmäävä tai käyttökelvoton rivi, ei oteta vastaan; avaa editori ja tuo tiedosto siellä nähdäksesi rivit. Editorissa tuonti vain täyttää ruudun: mikään ei muutu ennen kuin napsautat {{ui:Tallenna}}.

## Lataa uudelleen tai poista

Kirjoita {{cmd:REINIT}} ja paina {{key:Enter}} ottaaksesi tiedostosi uudelleen käyttöön. Poistaaksesi kirjaimen, poista sen rivi ja napsauta {{ui:Tallenna}}.

## Omat kirjaimesi seuraavat tiliäsi

Kun olet kirjautunut getcadcraft.com-sivustolle, kirjaimesi säilyvät tililläsi. Avaa CadCraft toisessa selaimessa tai toisella tietokoneella samalla tilillä, ja ne tulevat mukaan itsestään; komentorivi kertoo ”Option letters from your account” (Valintakirjaimet tililtäsi). Jos muutit niitä kahdessa paikassa, uusin kopio voittaa, ja sen korvattu kopio säilytetään kerran.

{{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Valintakirjaimet}} kertoo, missä ne ovat. Kun olet kirjautumatta ulos tai offline-tilassa, ne pysyvät tässä selaimessa ja siirtyvät tilillesi seuraavan kerran, kun tallennat ne kirjautuneena.

Aiheeseen liittyvää: [Muokkaa komentojen aliaksia](topic:command-aliases) · [CadCraftin asetukset](topic:settings) · [Komentoviite](topic:commands)
