---
title: Viivoitus ja alueiden täyttö
summary: Täytä alue yhtenäisellä värillä tai vakiokuviolla napsauttamalla sen sisällä tai valitsemalla suljettuja muotoja, aseta kuvion mittakaava ja kulma ja muuta viivoitusta myöhemmin.
keywords: viivoitus, bhatch, täyttö, yhtenäinen täyttö, kuvio, ansi31, ansi37, tiili, maa, verkko, leikkausviivat, poché, saareke, reuna, mittakaava, kulma
from: 14399174
---

## Mitä teet

Seinän leikkaus, joka on täytetty ANSI31-kuviolla, pilari, joka on jätetty tyhjäksi, ja yhtenäinen täyttö pilarissa.

## Viivoitus napsauttamalla alueen sisällä

1. Piirrä suorakulmio (`REC`, `0,0`, `@2000,1200`) ja ympyrä sen sisään (`C`, `1000,600`, `300`). Napsauta {{ui:Laajuus}}.
2. Napsauta {{ui:Viivoitus}}-painiketta ryhmässä {{ui:Piirrä}} tai kirjoita `H` ja paina {{key:Enter}}. Historia kertoo nykyisen kuvion, esimerkiksi `Current hatch: ANSI31, scale 1, angle 0°`.
3. Kirjoita `P` ja paina {{key:Enter}}, kirjoita `ANSI31` ja paina {{key:Enter}}.
4. Kirjoita `SC` ja paina {{key:Enter}}, kirjoita `20` ja paina {{key:Enter}}. Kuvioiden koot ovat paperilla, joten 1:20-mittakaavassa tulostettava piirustus tarvitsee mittakaavan 20.
5. Kohdassa `Pick internal point` napsauta suorakulmion sisällä, ympyrän ulkopuolella. Viivoitus näkyy esikatseluna.
6. Paina {{key:Enter}}. Suorakulmio on viivoitettu; ympyrä sen sisällä jää tyhjäksi, koska se on saareke.

Napsauta useiden alueiden sisällä ennen kuin painat {{key:Enter}}, jolloin niistä tulee yksi viivoitus. `U` peruuttaa viimeisimmän alueen.

## Yhtenäinen täyttö

1. Kirjoita `H` ja paina {{key:Enter}}.
2. Kirjoita `P`, paina {{key:Enter}}, kirjoita `SOLID` ja paina {{key:Enter}}.
3. Napsauta ympyrän sisällä ja paina {{key:Enter}}.

## Valitse suljettuja muotoja viivoitettaviksi

Sen sijaan että napsautat sisältä, kirjoita `S` (Valitse kohteet) kohdassa `Pick internal point` ja valitse suljettuja murtoviivoja, ympyröitä tai suljettuja ellipsejä ja paina {{key:Enter}}. Muotojen sisällä olevat muodot jäävät vuorollaan tyhjiksi (ulompi viivoitetaan, seuraava jää tyhjäksi ja niin edelleen).

## Kuviot

Kirjoita `?` kuvion kysymyksen kohdalla nähdäksesi luettelon. Vakiokuviot ovat ANSI31–ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS ja EARTH sekä SOLID. Piirustuksessa, jonka yksiköt ovat tuumia (tai jonka pituusmuotona ovat jalat ja tuumat), käytetään kuvioiden tuumakokoja, kuten AutoCADissa; muuten käytetään millimetrikokoja.

{{ui:Kulma}} (`A`) kääntää koko kuvion: ANSI31 90 asteen kulmassa kallistuu toiseen suuntaan.

**Kuviotiedostot.** Kirjoita `F` (Kuviotiedosto) kohdassa `Pick internal point` ja valitse `.pat`-tiedosto. Sen kuviot liittyvät luetteloon; jos kuvioita on useampia, kysytään, mitä niistä käytetään. Tiedostosta, jossa ei ole CadCraftin lukemia kuvioita, ilmoitetaan, ja kaikki ohitetut kuviot lasketaan. Koot `.pat`-tiedostossa eivät ole omassa yksikössään, joten ne luetaan piirustuksen yksiköissä. Kokeiltu on vain tavallisessa `.pat`-muodossa kirjoitettuja tiedostoja; muilla ohjelmilla tehtyjä tiedostoja ei ole kokeiltu.

## Muuta viivoitusta

Valitse viivoitus napsauttamalla yhtä sen viivaa. {{ui:Ominaisuudet}}-kohdassa: {{ui:Kuvio}}, {{ui:Kuvion mittakaava}} ja {{ui:Kuvion kulma}}. Avattujen piirustusten viivoitukset näyttävät kuvionsa, kun se on yksi vakiokuvioista; muut näkyvät värinsä vaaleana sävynä.

## Yleisiä virheitä

- **"Tämän pisteen ympärillä ei ole suljettua reunaa."** Reunassa on aukko tai osa siitä on näytön ulkopuolella, sillä CadCraft tarkastelee vain sitä, mikä on näytöllä. Sulje aukko (zoomaa lähemmäs kulmia) tai zoomaa kauemmas.
- **"Kuvio on liian tiheä piirrettäväksi tässä mittakaavassa."** Viivat olisivat lähempänä toisiaan kuin piirustus voi näyttää. Käytä suurempaa mittakaavaa: kokeile tulostusmittakaavaa (20, jos mittakaava on 1:20).
- **Kuvio näyttää valtavalta tai pieneltä.** Mittakaava ilmoittaa piirustusyksiköitä kuvion yksikköä kohden; katso vaihe 4 yllä.
- **Reunan siirtäminen ei siirrä viivoitusta.** Viivoitus ei ole sidottu reunaansa. Siirrä molemmat tai viivoita uudelleen.

## Viivoitus, joka pysyy reunansa mukana

Viivoitus, jonka teet `HATCH`-komennolla, muistaa, mikä sen rajaa. Kun siirrät, kierrät tai skaalaat reunaa, viivoitus ja sen kuvio seuraavat mukana. Vedä ote muokataksesi reunan muotoa, jolloin viivoitus lasketaan uudelleen. Kun siirrät viivoitusta yksinään, sen reuna tulee mukaan kuten täytetty muoto piirto-ohjelmassa.

Linkki katkeaa, ja komentorivi kertoo siitä, jos reuna ei enää sulkeudu tai viivoitusta muokataan käsin. Viivoitus itse jää paikoilleen. Kirjoita `AS` viivoittaessa, jotta saat itsenäisiä viivoituksia. Kopioitaessa viivoitus reunoineen kopiolla on oma linkki.

`HATCHEDIT` (`HE`) muuttaa viivoituksen kuvion, mittakaavan, kulman ja lähtöpisteen sekä liittää viivoituksen reunaan tai katkaisee linkin. Linkki tallennetaan DWG- ja DXF 2000 -tiedostoihin. DXF R12 -tiedostossa ei ole viivoitusobjektia, eikä muilla ohjelmilla tehtyjä linkkejä lueta: käytä niihin `HATCHEDIT`-komentoa ja Linkki-vaihtoehtoa.

Viivoitus, jolla ei enää ole reunaa (reuna poistettiin tai tiedosto tuli ilman sitä), voi saada reunan takaisin: `HATCHGENERATEBOUNDARY` (`HGB`) piirtää suljetun murtoviivan jokaisen viivoituksen silmukan ympärille ja jos vastaat Kyllä, liittää viivoituksen niihin.

## Liukuväritäyttö

`GRADIENT` (`GD`) täyttää alueen liukuvärillä kuvion sijaan: samat valinnat kuin `HATCH`, minkä jälkeen kysytään tyyppi (lineaarinen, sylinterimäinen, pallomainen, puolipallomainen, kaareva ja jokainen näistä käänteisenä), yksi väri sävyllä tai kaksi väriä, kulma sekä se, onko keskitetty. `HATCH`-komennon vaihtoehto `G` tekee saman. `HATCHEDIT` `G`, tai {{ui:Ominaisuudet}} kohdassa Liukuväri, muuttaa liukuvärin tai tekee mistä tahansa viivoituksesta liukuvärin.

Liukuväri näkyy näytöllä ja tulosteissa. Tallenna DWG 2004 tai uudempana, niin muut ohjelmat saavat todellisen liukuväriviivoituksen. DXF 2000 ja DWG 2000 eivät tunne liukuväriä: CadCraft säilyttää sen vain itselleen, ja muut ohjelmat näkevät yhtenäisen täytön ensimmäisellä värillä.

## Typistä viivoitus

`TRIM` leikkaa viivoituksen kuten minkä tahansa muun kohteen. Napsauta viivoitusta leikkausreunan sille puolelle, jonka haluat poistaa: reunat jakavat viivoitetun alueen, ja se osa poistetaan. Pikatilassa jokainen kohde on leikkausreuna; valitse reunat ensin (vaihtoehto `T`), jos niitä on paljon. Typistetty viivoitus ei ole enää linkitetty reunaansa, koska se ei enää täytä sitä.
