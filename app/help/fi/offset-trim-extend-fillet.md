---
title: Siirtymä, typistys, pidennys, pyöristys ja viisto seinille
summary: Muuta yksittäiset viivat kaksoisseinäksi siirtymällä, siisti kulmat pyöristyksellä ja leikkaa sekä pidennä viivoja typistyksellä ja pidennyksellä.
keywords: siirtymä, offset, typistä, pidennä, pyöristä, viisto, viiste, katkaise, katkaise pisteessä, pituuden muutos, seinät, kulma, leikkaa, yhdensuuntainen, säde, siivous
from: c6c5cbd0
---

## Mitä teet

Pieni huone, jossa on 200 paksut seinät: sisäpinta piirretään, ulkopinta siirretään, kulmat siistitään ja yhden seinän läpi leikataan oviaukko.

## Piirrä sisäpinta

1. Kirjoita `L` ja paina {{key:Enter}}.
2. Kirjoita `0,0` ja paina {{key:Enter}}.
3. Kirjoita `@5000,0` ja paina {{key:Enter}}.
4. Kirjoita `@0,4000` ja paina {{key:Enter}}.
5. Kirjoita `@-5000,0` ja paina {{key:Enter}}.
6. Kirjoita `C` ja paina {{key:Enter}}.
7. Napsauta {{ui:Laajuus}}.

Sinulla on neljä erillistä viivaa. (Suljettu murtoviiva siirtyisi kerralla; erilliset viivat näyttävät, miten Pyöristys siistii kulmia.)

## Tee ulkopinnan siirtymä

1. Kirjoita `O` ja paina {{key:Enter}}. Kehote kuuluu `Anna siirtymän etäisyys [Läpi (T)] <Läpi (T)>:`.
2. Kirjoita `200` ja paina {{key:Enter}}.
3. Kohdassa `Valitse siirrettävä kohde` napsauta alaviivaa.
4. Kohdassa `Määritä piste siirtymän puolelle` napsauta mihin tahansa sen alapuolella. Yhdensuuntainen viiva ilmestyy 200 alapuolelle.
5. Napsauta oikeaa viivaa ja napsauta sen oikealle puolelle.
6. Napsauta yläviivaa ja napsauta sen yläpuolelle.
7. Napsauta vasenta viivaa ja napsauta sen vasemmalle puolelle.
8. Lopeta komento painamalla {{key:Enter}}.

Sinun pitäisi nähdä neljä ulompaa viivaa, joista kukin on yhtä pitkä kuin sisempi vastinviiva, joten ulkokulmat eivät kohtaa.

:::tip
Paina {{key:Enter}} etäisyyskehotteessa käyttääksesi viimeistä etäisyyttä uudelleen. Kirjoita `T` (Läpi): silloin jokainen kopio kulkee napsauttamasi pisteen kautta, mikä tahansa etäisyys se onkaan.
:::

{{cmd:OFFSET}} toimii viivoille, kaarille, ympyröille ja murtoviivoille. Suljetun murtoviivan siirto siirtää koko ääriviivan, myös kulmat mukaan lukien.

## Siisti ulkokulmat Pyöristyksellä

{{cmd:FILLET}} liittää kaksi viivaa kulmassa: se typistää tai pidentää molempia, jotta ne kohtaavat. Säteellä 0 kulma on suora.

1. Kirjoita `F` ja paina {{key:Enter}}. Kehote kuuluu `Valitse ensimmäinen viiva [Säde (R)]:`.
2. Jos viimeisessä pyöristyksessä käytettiin sädettä, kirjoita `R`, paina {{key:Enter}}, kirjoita `0` ja paina {{key:Enter}}.
3. Napsauta ulompaa alaviivaa lähellä sen oikeaa päätä.
4. Kohdassa `Valitse toinen viiva` napsauta ulompaa oikeaa viivaa lähellä sen alapäätä.

Kaksi viivaa kohtaavat nyt terävässä kulmassa, ja komento päättyy.

5. Paina {{key:Enter}} toistaaksesi {{cmd:FILLET}}-komennon ja tee seuraava kulma.
6. Toista, kunnes kaikki neljä ulkokulmaa kohtaavat.

Napsauta kutakin viivaa osalla, jonka haluat **säilyttää**. Kun säde on yli 0, Pyöristys lisää viivojen väliin kaaren.

:::tip
Kirjoita ensimmäisessä kehotteessa `M`, jolloin kaikki neljä kulmaa tehdään kerralla, tai piirrä ulkopinta yhtenä suljettuna murtoviivana ja kirjoita `P`: jokainen kulma tehdään kerralla. Pidä {{key:Shift}} pohjassa, kun napsautat toista viivaa, saadaksesi terävän kulman muuttamatta sädettä.
:::

## Viistä kulma Viistolla

{{cmd:CHAMFER}} leikkaa kulman pois suoralla viivalla.

1. Kirjoita `CHA` ja paina {{key:Enter}}.
2. Kirjoita `D` ja paina {{key:Enter}}. Kirjoita `300` ja paina {{key:Enter}} ensimmäiselle etäisyydelle, ja paina sitten {{key:Enter}}, jotta myös toiselle käytetään 300.
3. Napsauta sisemmän yläviivan lähellä sen vasenta päätä, sitten sisemmän vasemman viivan lähellä sen yläpäätä.

Kulma leikataan 300 pois kummallakin viivalla, ja viiste-viiva yhdistää ne. Kirjoita `A` `D`:n sijaan antaaksesi ensimmäisen viivan pituuden ja kulman.

## Leikkaa oviaukko Typistyksellä

Piirrä ensin kaksi ovenkarmia alemman seinän yli ja typistä sitten seinän viivat niiden välistä.

1. Kirjoita `L` ja paina {{key:Enter}}.
2. Kirjoita `1000,200` ja paina {{key:Enter}}.
3. Kirjoita `@0,-600` ja paina {{key:Enter}}, paina sitten {{key:Enter}} uudelleen.
4. Paina {{key:Enter}} toistaaksesi {{cmd:LINE}}-komennon.
5. Kirjoita `1900,200` ja paina {{key:Enter}}.
6. Kirjoita `@0,-600` ja paina {{key:Enter}}, paina sitten {{key:Enter}} uudelleen.

Sinulla on nyt kaksi lyhyttä viivaa, jotka leikkaavat alemman seinän 900 välein.

7. Kirjoita `TR` ja paina {{key:Enter}}. Historia kertoo: `Nykyiset asetukset: Pikatila, reunat: Ei pidennystä`.
8. Napsauta sisemmän alaviivan kohtaa kahden karmin välillä. Se pala katoaa. (Vie osoitin sen päälle ensin: pala, joka poistuu, muuttuu harmaaksi ja katkoviivaksi.)
9. Napsauta ulomman alaviivan kohtaa kahden karmin välillä. Sekin pala katoaa.
10. Napsauta kunkin karmin osaa, joka ulkonee seinän yläpuolelle, ja osaa sen alapuolella.
11. Lopeta komento painamalla {{key:Enter}}.

Sinun pitäisi nähdä 900 aukko alaseinässä, ja karmit sulkevat seinän päät.

Pikatilassa (oletus) Typistys ei kysy leikkaavia reunoja etukäteen: jokainen näkyvä kohde on leikkaava reuna. Napsauta haluamaasi palaa tai vedä polku useiden palojen yli, jolloin ne kaikki typistyvät kerralla. Kirjoita `U` ja paina {{key:Enter}}, jos haluat palauttaa viimeisen valinnan tai vedon poistumatta komennosta. Ikkuna, leikkaava, valitut reunat ja {{key:Shift}} pidentämiseen ovat kohdassa [Typistys ja pidennys](topic:trim-and-extend).

## Pidennä viiva kohtaamaan toinen

{{cmd:EXTEND}} pidentää viivan, kaaren tai murtoviivan päätä, kunnes se kohtaa seuraavan kohteen siinä suunnassa.

1. Kirjoita `L` ja paina {{key:Enter}}.
2. Kirjoita `1000,2000` ja paina {{key:Enter}}.
3. Kirjoita `@2000,0` ja paina {{key:Enter}}, paina sitten {{key:Enter}} uudelleen. Viiva pysähtyy 2000 oikeanpuoleisen seinän edeltä.
4. Kirjoita `EX` ja paina {{key:Enter}}.
5. Napsauta uutta viivaa lähellä sen oikeaa päätä.
6. Lopeta komento painamalla {{key:Enter}}.

Viiva kulkee nyt oikeanpuoleisen seinän sisäpintaan. Jokainen näkyvä kohde on raja; valitse lähellä päätä, jonka pitäisi kasvaa. {{cmd:TRIM}}-komennon sisällä {{key:Shift}}+napsautus tekee saman.

## Katkaise ja pidennä pituutta

{{cmd:BREAK}} (`BR` tai {{ui:Muokkaa}} › {{ui:Lisää}} › {{ui:Katkaise}}) leikkaa aukon ilman leikkaavaa reunaa: napsauta kohdetta, josta aukko alkaa (tuo napsautus on ensimmäinen piste), ja napsauta sitten kohtaa, johon se päättyy. Ympyrällä ensimmäisestä pisteestä toiseen vastapäivään kulkeva osa katoaa. Kirjoita toisessa kysymyksessä `F`, jos haluat antaa ensimmäisen pisteen uudelleen, ja {{cmd:BREAKATPOINT}} jakaa kohteen kahteen osaan yhdessä pisteessä ilman aukkoa.

{{cmd:LENGTHEN}} (`LEN`) muuttaa pituutta yhdestä päästä:

1. Kirjoita `LEN` ja paina {{key:Enter}}. Napsauta viivaa nähdäksesi sen nykyisen pituuden; kehote kysyy uudelleen.
2. Valitse tapa: `DE` (Delta: lisättävä määrä, negatiivinen vähentää; `A` kaaren kulmalle), `P` (Prosentti: 50 puolittaa sen), `T` (Kokonais: pituus, jonka sen pitäisi olla) tai `DY` (Dynaaminen: vedä päätä).
3. Napsauta kutakin kohdetta päästä, jonka pitäisi liikkua. `U` palauttaa viimeisen; {{key:Enter}} lopettaa.

Viivoja, kaaria ja avoimia murtoviivoja (niiden päätesegmenttiä) voi pidentää.

## Yleisiä virheitä

- **Koko viiva katosi.** Mikään ei leikannut sitä, joten pikatila poisti sen. Kirjoita `U`, jotta saat sen takaisin; tarkista, että leikkaava viiva todella leikkaa sen (zoomaa lähemmäs) eikä se ole tasolla, joka on pois päältä.
- **”Tässä suunnassa ei ole rajaa.”** Pidennys ei löytänyt mihin osua. Valitse lähempää päätä, jonka pitäisi kasvaa.
- **”Säde on liian suuri.”** Kaari menisi yhden viivan pään ohi. Käytä pienempää sädettä.
- **”Vain avoimen murtoviivan ensimmäinen tai viimeinen osa voidaan leikata takaisin.”** Valitse kaksi murtoviivan vierekkäistä segmenttiä tai kirjoita `P` pyöristääksesi jokaisen sen kulman.
- **Siirtymä meni väärälle puolelle.** Puoli on se, johon napsautat kohteen valitsemisen jälkeen. Kumoa {{key:Mod+Z}} ja napsauta toiselle puolelle.
- **”Siirtymää ei voi tehdä niin pitkälle.”** Siirtymä kääntäisi kaaren, ympyrän tai murtoviivan nurinpäin. Käytä pienempää etäisyyttä.
