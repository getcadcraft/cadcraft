---
title: Typistä ja pidennä
summary: Katkaise viivat takaisin kohdista, joissa muut viivat leikkaavat niitä, ja pidennä niitä kohtaamaan muut, yksi kappale kerrallaan tai monta kerralla vetämällä polku niiden läpi.
keywords: trimextendmode, ikkunaveto, typistä, pidennä, tr, ex, pikatypistys, veto, vapaakätinen, polku, aita, leikkaava, shift, leikkausreunat, rajareunat, edgemode, tila, vakio, pika, poista, esikatselu, seinät, siivous
from: 25fbc5bd
---

## Mitä opit

Miten {{cmd:TRIM}} ja {{cmd:EXTEND}} toimivat, ja nopeat tavat käyttää niitä: vedä monien kappaleiden läpi kerralla, pidä {{key:Shift}} pohjassa vaihtaaksesi typistämisen ja pidentämisen välillä, ja näe, mikä poistuu ennen napsautusta.

## Typistä yksi kappale

1. Piirrä pitkä vaakaviiva ja kaksi lyhyttä viivaa sen poikki.
2. Kirjoita `TR` ja paina {{key:Enter}}. Historia kertoo `Nykyiset asetukset: Pikatila, reunat: Ei pidennystä`.
3. Vie osoitin pitkälle viivalle kahden lyhyen välissä. Se kohta muuttuu harmaaksi ja katkoviivaiseksi: se on se, joka poistuu.
4. Napsauta. Kappale katoaa.
5. Paina {{key:Enter}} lopettaaksesi komennon.

Pikatilassa (oletus) jokainen näkyvä kohde on leikkausreuna, joten reunoja ei tarvitse valita ensin. Napsauta kappaletta, jonka haluat pois. Kohde, jota mikään ei leikkaa, poistetaan kokonaan, ja historia kertoo siitä.

## Typistä monta kappaletta yhdellä vedolla

1. Piirrä pitkä vaakaviiva ja kymmenen lyhyttä pystyviivaa sen poikki.
2. Kirjoita `TR` ja paina {{key:Enter}}.
3. Paina hiiren painiketta pitkän viivan yläpuolella, ensimmäisen pystyviivan vasemmalla puolella, ja vedä kaikkien kymmenen yli pitkän viivan yläpuolella.

Vetäessäsi polku näkyy katkoviivana, ja jokainen kappale, jonka se ylittää, muuttuu harmaaksi. Päästä irti: kaikki kymmenen yläkappaletta typistyvät yhdellä askeleella. Kirjoita `U` ja paina {{key:Enter}} palauttaaksesi ne kaikki kerralla.

:::tip
Voit myös napsauttaa kahta tyhjää kohtaa: niiden välinen viiva toimii kuten vedetty polku. Kirjoita `F` (Aita) napsauttaaksesi sarjan pisteitä, ja paina sitten {{key:Enter}}.
:::

:::touch
Vedä sormella samalla tavalla. Napautus kappaleeseen typistää sen.
:::

## Pidennä sen sijaan Shift-näppäimellä

1. Piirrä pystyviiva ja viisi lyhyttä vaakaviivaa sen vasemmalle puolelle, jotka pysähtyvät ennen sitä.
2. Kirjoita `TR` ja paina {{key:Enter}}.
3. Pidä {{key:Shift}} pohjassa. Vie osoitin lyhyelle viivalle: osa, jonka se kasvaisi, näkyy harmaana ja katkoviivana.
4. Pidä edelleen {{key:Shift}} pohjassa ja vedä alas viiden lyhyen viivan läpi.

Kaikki viisi ulottuvat nyt pystyviivaan. {{key:Shift}} toimii päinvastoin komennossa {{cmd:EXTEND}} (`EX`): napsautus pidentää, ja {{key:Shift}}+napsautus typistää. Pidennys pidentää sitä päätä, joka on lähimpänä kohtaa, johon napsautat tai johon polku ylittää.

## Typistä ikkunan sisällä

1. Kirjoita `TR` ja paina {{key:Enter}}.
2. Kirjoita `C` ja paina {{key:Enter}}.
3. Napsauta kaksi kulmaa poistettavien kappaleiden ympärille.

Jokainen kappale, joka on ainakin osittain ikkunan sisällä, typistetään.

Saadaksesi ikkunan pelkällä vetämisellä kirjoittamatta `C`: {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Veto typistämisessä ja pidentämisessä}} › {{ui:Ikkuna}}. Silloin tyhjää kohtaa painamalla ja vetämällä piirretään laatikko, ja jokainen kappale, jonka se koskettaa, typistetään (tai pidennetään komennossa {{cmd:EXTEND}} tai {{key:Shift}}-näppäimellä). {{ui:Polku}} (oletus) palauttaa vapaakätisen polun. TRIMin alun asetusrivi kertoo, kumpi on päällä.

## Valitse leikkausreunat (Vakiotila)

Joskus vain yhden viivan pitäisi leikata, esimerkiksi seinän pinta, jonka poikki kulkee monta muuta viivaa.

1. Kirjoita `TR` ja paina {{key:Enter}}.
2. Kirjoita `O` (tila) ja paina {{key:Enter}}, sitten kirjoita `S` (Vakio) ja paina {{key:Enter}}.
3. Kohdassa `Valitse leikkausreunat` napsauta reunaviivoja (tai vedä ikkuna) ja paina {{key:Enter}}. Enter ilman mitään valittua tekee jokaisesta kohteesta reunan.
4. Napsauta tai vedä niiden kappaleiden läpi, jotka poistetaan.

Vain valitut reunat leikkaavat. Kohdetta, jota mikään reuna ei leikkaa, ei kosketa. Tila pysyy, kunnes suljet sivun. Kirjoita `O` ja sitten `Q` (pika) palataksesi pikatilaan. {{cmd:TRIMEXTENDMODE}} asettaa tilan ennen aloitusta, kuten samannimi muuttuja tekee muualla: `0` Vakio, `1` Pika. `T` (leikkausreunat) valitsee uudet reunat milloin tahansa. Komennossa {{cmd:EXTEND}} se on `B` (rajareunat).

## Reunat, jotka ulottuisivat

1. Kirjoita `TR` ja paina {{key:Enter}}.
2. Kirjoita `E` (reuna) ja paina {{key:Enter}}, sitten `E` (pidennä) ja paina {{key:Enter}}.

Nyt leikkaava viiva tai kaari, joka pysähtyy lyhyeen, lasketaan kuin se jatkuisi: lyhyt viiva leikkaa siellä, missä se leikkaisi, jos se olisi pidempi. Kirjoita `E` ja sitten `N` (ei pidennystä) palataksesi takaisin. Tämä vastaa muuttujaa EDGEMODE arvoilla 1 ja 0.

## Poista poistumatta

Kirjoita `R` (poista) ja paina {{key:Enter}}, valitse poistettavat kohteet ja paina {{key:Enter}}. TRIM jatkaa.

## Yleisimmät virheet

- **Koko viiva katosi.** Pikatilassa kohde, jota mikään ei leikkaa, poistetaan. Kirjoita `U` palauttaaksesi sen tai vaihda vakiotilaan (`O`, `S`).
- **"Ei typistettävää tässä: mikään valittu leikkausreuna ei leikkaa tätä kohdetta."** Vakiotila leikkaa vain valituista reunoista. Kirjoita `T` valitaksesi ne uudelleen.
- **"Ei rajaa siihen suuntaan."** Pidennys ei löytänyt mitään edestä. Napsauta lähempänä päätä, jonka pitäisi kasvaa, tai kytke `E` (reuna, pidennä) rajoille, jotka pysähtyvät lyhyeen.
- **Veto piirsi lassoa.** Veto typistää vain silloin, kun TRIM tai EXTEND pyytää kohdetta. Kun mikään komento ei ole käynnissä, veto valitsee (katso [Lasso-valinta](topic:lasso-selection)).
- **Vain viivat, kaaret, ympyrät ja murtoviivat voidaan typistää.** Hajota lohko ensin, jotta voit typistää sen viivat.
