---
title: Osoitin hyppii tai jää jälkeen piirustuksen päällä
summary: Mitä tehdä, kun ristikko ei seuraa hiirtä sujuvasti vanhemmalla tai hitaammalla tietokoneella.
keywords: kursori hyppii, osoittimen viive, ristikko hidas, nykivä kursori, vanha tietokone, vanha näytönohjain, integroitu grafiikka, laitteistokiihdytys, sujuvampi osoitin, hidas kannettava
from: 39dc9057
---

CadCraft toimii selaimessa (CadCraft Studio on myös selainnäkymä), joten mikään siinä ei ole tehty yhdelle näytönohjaimelle tai toiselle. Ristikon piirtää sovellus, mikä tarkoittaa, että se voi liikkua vain sitä nopeutta, jolla sovellus pystyy piirtämään kuvan.

## Anna CadCraftin vähentää lisäominaisuudet

1. Avaa {{ui:Asetukset}} (ratas oikeassa yläkulmassa) ja pysy välilehdellä {{ui:CadCraft}}.
2. Valitse {{ui:Sujuvampi osoitin hitaammilla tietokoneilla}}.
3. Valitse {{ui:Päällä}}.

Kun tämä on päällä, tietokoneesi oma ristikko-osoitin käytetään piirretyn ristikon ja valintaruudun sijaan (myös koko näytön ristikon), ja osoittimen alla oleva kohde syttyy, kun osoitin lepää eikä liiku. Kohteiden tartunnat, seuranta ja kumiviiva toimivat kuten ennen.

{{ui:Automaattinen}} on CadCraftin oletus käynnistyksessä: se seuraa, kuinka kauan kuvat kestävät osoittimen liikkuessa, ja kytkee tämän päälle itsestään, kun ne pysyvät hitaina muutaman sekunnin ajan. Se ilmoittaa kerran, kun niin tekee. {{ui:Pois}} säilyttää piirretyn ristikon nopeudesta riippumatta.

## Jos se on yhä hidas

- Tarkista, että laitteistokiihdytys on päällä selaimessasi: avaa uudessa välilehdessä `chrome://gpu` (tai `edge://gpu`). Jos ensimmäiset rivit sanovat "Software only" tai "Disabled", selain piirtää ilman näytönohjainta. Näytönohjaimen ajurin päivitys palauttaa usein toiminnan.
- Sulje muut raskaat välilehdet ja ohjelmat, ja kokeile pienempää selainikkunaa.
- Kerro meille {{ui:Ohje}}-valikon kautta: valitse {{ui:Ilmoita ongelmasta}} ja kerro, käytätkö selainta vai CadCraft Studiota, sen versio ja mitä gpu-sivulla lukee.
