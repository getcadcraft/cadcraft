---
title: Luonnostele kynällä ja saa tarkka geometria
summary: Piirrä vapaasti kynällä, hiirellä tai sormella, ja jokainen veto muuttuu siistiksi viivaksi, ympyräksi, kaareksi, suorakulmioksi tai murtoviivaksi, kun nostat kynän. Se tarttuu siihen, mikä on jo piirretty, ja sen koko on valmiina kirjoitettavaksi päälle.
keywords: luonnos, kynä, kosketuskynä, vapaa piirto, sormi, siivoa, tarkka, tartunta, SKETCHLIVE, SKETCHFIX, koko, kirjoita päälle
from: cd87eb75
---

Aloita {{cmd:SKETCHLIVE}} (tai valitse **Piirrä › Lisää › Luonnostele kynällä**) ja piirrä veto painamalla ja vetämällä. Kun nostat kynän, CadCraft tulkitsee, mitä tarkoitit, ja lisää sen piirustukseen:

| Vetosi | Mitä saat |
|---|---|
| Melkein suora | Viiva. Melkein vaakasuora tai pystysuora viiva tehdään tarkasti vaakasuoraksi tai pystysuoraksi. |
| Suljettu ja pyöreä | Ympyrä |
| Osa pyöreästä muodosta | Kaari |
| Suljettu, neljä suorakulmaista kulmaa | Suorakulmio |
| Muu | Murtoviiva, jolla on suorat sivut |

Vedon päät vedetään kiinni lähimpään jo piirretyn kohteen päähän, joten luonnosteltu seinä liittyy viereiseen seinään.

## Kirjoita koko päälle

Jokaisen vedon jälkeen komentorivi näyttää sen koon oletusarvona (viivan **pituus**, ympyrän tai kaaren **säde**, suorakulmion **leveys**). Paina {{key:Enter}} säilyttääksesi sen, tai kirjoita luku tai pituus, kuten `12'6"`, korvataksesi sen. Viiva säilyttää ensimmäisen päänsä, ympyrä keskipisteensä ja suorakulmio ensimmäisen kulmansa.

Lopeta painamalla {{key:Enter}} tyhjässä kehotteessa, tai kirjoita `U` peruaksesi viimeisen vedon. Koko istunto on yksi kumoamisvaihe.

## Useiden vetojen siistiminen kerralla

{{cmd:SKETCHFIX}} kerää vedot ja tekee niistä kaikki tarkkoja, kun painat {{key:Enter}}. Se sopii nopeasti piirretylle karkealle asettelulle.

:::note
Kaikki lasketaan tietokoneellasi säännöillä, ilman mallia, eikä mitään lähetetä minnekään.
:::
