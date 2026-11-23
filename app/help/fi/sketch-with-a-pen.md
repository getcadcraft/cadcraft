---
title: Piirrä kynällä ja saa tarkka geometria
summary: Piirrä vapaasti kynällä, hiirellä tai sormella, ja jokainen vetäisy muuttuu siistiksi viivaksi, ympyräksi, kaareksi, suorakulmioksi tai murtoviivaksi kynän noston jälkeen, tarttuen siihen, mikä on jo piirretty, ja sen koko on valmis kirjoitettavaksi päälle.
keywords: luonnos, kynä, vapaamuotoinen, sormi, siisti, tarkka, tartunta, SKETCHLIVE, SKETCHFIX, koko, kirjoita päälle, paine, viivanpaksuus, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Käynnistä {{cmd:SKETCHLIVE}} (tai valitse **Piirrä › Lisää › Piirrä kynällä**) ja piirrä vetäisy painamalla ja vetämällä. Kun nostat kynän, CadCraft lukee, mitä tarkoitit, ja laittaa sen piirustukseen:

| Vetäisysi | Mitä saat |
|---|---|
| Lähes suora | Viiva. Lähes vaakasuora tai pystysuora viiva tehdään täsmälleen vaakasuoraksi tai pystysuoraksi. |
| Suljettu ja pyöreä | Ympyrä |
| Osa pyöreästä muodosta | Kaari |
| Suljettu neljällä suorakulmaisella kulmalla | Suorakulmio |
| Muu | Murtoviiva, jolla on suorat sivut |

Vetäisyn päät vedetään lähimpään jo piirretyn kohteen päähän, joten piirretty seinä kohtaa viereisen seinän.

## Kirjoita koko päälle

Jokaisen vetäisyn jälkeen komentorivi näyttää sen koon (viivan **pituus**, ympyrän tai kaaren **säde**, suorakulmion **leveys**) oletuksena. Paina {{key:Enter}} säilyttääksesi sen, tai kirjoita luku tai pituus, kuten `12'6"`, korvataksesi sen. Viiva säilyttää ensimmäisen päänsä, ympyrä keskipisteensä ja suorakulmio ensimmäisen kulmansa.

Paina {{key:Enter}} tyhjässä kehotteessa lopettaaksesi, tai kirjoita `U` ottaaksesi viimeisimmän vetäisyn takaisin. Koko istunto on yksi kumoamisaskel.

## Siivoa useita vetäisyjä kerralla

{{cmd:SKETCHFIX}} kerää vetäisyjä ja tekee ne kaikki tarkoiksi, kun painat {{key:Enter}}. Se sopii nopeasti piirrettyyn karkeaan asetteluun.

:::note
Kaikki lasketaan tietokoneellasi säännöillä, ilman mallia, eikä mitään lähetetä minnekään.
:::

## Paine asettaa viivanpaksuuden

Missä kynä on otettu käyttöön sovelluksille (Asetukset › Yleiset › Syöttölaitteet › Kynä), kynällä piirretty vetäisy kantaa jokaisen pisteen, jonka kynä antoi, ja sen paineen. Kevyt vetäisy tekee ohuen kohteen ja voimakas paksun: vetäisyn keskipaine valitsee 0,18, 0,25, 0,35 tai 0,50 mm, ja komentorivi kertoo, mikä. Hiirellä tai sormella piirretyt vetäisyt ottavat nykyisen viivanpaksuuden kuten ennenkin. {{cmd:PENPRESSURE}} kytkee tämän pois (tai takaisin päälle); valinta säilyy tässä selaimessa.
