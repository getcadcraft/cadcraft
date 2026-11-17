---
title: Muokkaa komentojen aliaksia
summary: Pidä omat komentojen aliaksesi yhdessä tekstitiedostossa tutussa muodossa, tuo ja vie .pgp-tiedosto ja lataa se uudelleen komennolla REINIT.
keywords: alias, aliakset, aliasedit, pgp, pikakomento, lyhyt nimi, reinit, näppäimistö, mukauta, muokkaa aliaksia
from: 6ab6fa0e
---

## Mitä opit

Miten lisätään omia lyhyitä nimiä komennoille, esimerkiksi `LL` komennolle {{cmd:LINE}}, kaikki yhdessä tekstitiedostossa.

## Lisää alias

1. Avaa {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Muokkaa aliaksia…}} tai kirjoita {{cmd:ALIASEDIT}} ja paina {{key:Enter}}.
2. Lisää rivi, jossa on alias, pilkku ja komento tähden jälkeen:

```
LL,     *LINE
```

3. Napsauta {{ui:Tallenna}}. Komentorivi kertoo, montako aliastasi on käytössä.
4. Kirjoita `LL` ja paina {{key:Enter}}: LINE käynnistyy.

Omat aliaksesi ovat CadCraftin omien päällä. Oma rivisi voittaa sisäänrakennetun aliaksen, jolla on sama nimi; poista rivisi, ja sisäänrakennettu palaa.

## Rivit, joita CadCraft ei hyväksy

Editori luettelee jokaisen ongelman rivinumeroineen kirjoittaessasi:

- komentoa ei ole;
- alias on itse komennon nimi (`LINE, *CIRCLE` piilottaisi LINE-komennon);
- rivi ei ole muotoa `ALIAS, *COMMAND`;
- sama alias on kahdella rivillä (myöhempi voittaa).

Rivit, jotka käynnistävät ohjelman tietokoneellasi, kuten `NOTEPAD, START, 1, *File to edit: ,`, ohitetaan huomautuksella: selaimessa oleva sovellus ei voi käynnistää ohjelmia.

## Tuo aliaksesi toisesta ohjelmasta

1. Napsauta aliaseditorissa {{ui:Tuo .pgp…}} ja valitse tiedosto. Voit myös pudottaa `.pgp`-tiedoston piirustuksen päälle.
2. Tarkista luetellut ongelmat (CadCraftin tuntemattomat komennot hylätään, muut toimivat).
3. Napsauta {{ui:Tallenna}}.

{{ui:Vie .pgp}} tallentaa CadCraftin aliakset ja omasi yhteen tiedostoon samassa muodossa.

## Lataa tiedosto uudelleen

Kirjoita {{cmd:REINIT}} ja paina {{key:Enter}} ottaaksesi aliastiedostosi uudelleen käyttöön. Se säilytetään tässä selaimessa; työpöytäsovellus säilyttää sen omassa kansiossaan, ja pilvipalvelu synkronoi sen.

## Pikanäppäimet mille tahansa komennolle

Alias kirjoitetaan; pikanäppäin on näppäin. Jos haluat antaa komennolle oman näppäimen:

1. Napsauta {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Pikanäppäimet…}} tai kirjoita `KEYS` ja paina {{key:Enter}}.
2. Napsauta {{ui:Näppäin}}-ruutua ja paina näppäimiä, esimerkiksi {{key:Alt+Shift+C}}.
3. Kirjoita {{ui:Suorittaa}}-kohtaan komento ja halutessasi se, mitä kirjoitetaan sen perään: `CIRCLE` tai `ZOOM E`.
4. Napsauta {{ui:Lisää}}.

Näppäin tarvitsee {{key:Mod}}- tai {{key:Alt}}-näppäimen kirjaimen tai numeron kanssa, tai vapaan toimintonäppäimen ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Näppäimet, joita CadCraft, sovellus tai selain jo käyttää, ja näppäimet, joita Omat työkalut -painikkeella on (katso [Omat painikkeet](topic:my-tools)), hylätään, ja ruutu kertoo syyn. Pikanäppäimet säilytetään tässä selaimessa (tai työpöytäsovelluksessa); {{ui:Poista}} poistaa yhden.
