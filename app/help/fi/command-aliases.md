---
title: Muokkaa komentojen aliaksia
summary: Pidä omat komentoaliaksesi yhdessä tekstitiedostossa tutussa muodossa, tuo ja vie .pgp-tiedosto ja lataa se uudelleen komennolla REINIT.
keywords: alias, aliakset, aliasedit, pgp, lyhyt nimi, pikanimi, reinit, näppäimistö, mukauttaminen, muokkaa aliaksia
from: 2282d36f
---

## Mitä opit

Miten lisäät omia lyhyitä nimiä komennoille, esimerkiksi `LL` komennolle {{cmd:LINE}}, kaikki yhdessä tekstitiedostossa.

## Lisää alias

1. Avaa {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Muokkaa aliaksia…}}, tai kirjoita {{cmd:ALIASEDIT}} ja paina {{key:Enter}}.
2. Lisää rivi, jolla on alias, pilkku ja komento tähden jälkeen:

```
LL,     *LINE
```

3. Napsauta {{ui:Tallenna}}. Komentorivi kertoo, kuinka monta aliastasi on käytössä.
4. Kirjoita `LL` ja paina {{key:Enter}}: LINE käynnistyy.

Omat aliaksesi ovat CadCraftin omien aliasten päällä. Oma rivisi voittaa saman nimisen sisäänrakennetun aliaksen; poista rivisi, niin sisäänrakennettu palaa.

## Rivit, joita CadCraft hylkää

Editori luettelee jokaisen ongelman rivinumeroineen kirjoittaessasi:

- komentoa ei ole;
- alias on itse jonkin komennon nimi (`LINE, *CIRCLE` piilottaisi LINE-komennon);
- rivi ei ole muotoa `ALIAS, *COMMAND`;
- sama alias on kahdella rivillä (myöhempi voittaa).

Rivit, jotka käynnistävät ohjelman tietokoneellasi, kuten `NOTEPAD, START, 1, *File to edit: ,`, ohitetaan huomautuksen kanssa: selaimessa toimiva sovellus ei voi käynnistää ohjelmia.

## Tuo aliakset toisesta ohjelmasta

1. Napsauta aliaseditorissa {{ui:Tuo .pgp…}} ja valitse tiedosto. Voit myös pudottaa `.pgp`-tiedoston piirustukselle.
2. Tarkista luetellut ongelmat (CadCraftin tuntemattomat komennot hylätään, muut toimivat).
3. Napsauta {{ui:Tallenna}}.

{{ui:Vie .pgp}} tallentaa CadCraftin aliakset ja omasi yhteen tiedostoon samassa muodossa.

## Lataa tiedosto uudelleen

Kirjoita {{cmd:REINIT}} ja paina {{key:Enter}} ottaaksesi aliastiedostosi uudelleen käyttöön. Se säilyy tässä selaimessa; työpöytäsovellus säilyttää sen omassa kansiossaan, ja pilvipalvelu synkronoi sen.

## Kirjaimet komennon valinnoille

Alias nimeää komennon. Jos haluat muuttaa kirjaimia, joilla vastaat komennon valintoihin (`P` valinnalle Napa komennossa {{cmd:ARRAY}}), katso [Anna komennon valinnoille omat kirjaimet](topic:option-letters).

## Pikanäppäimet mille tahansa komennolle

Alias kirjoitetaan; pikanäppäin on näppäin. Anna komennolle oma näppäin:

1. Napsauta {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Pikanäppäimet…}}, tai kirjoita `KEYS` ja paina {{key:Enter}}.
2. Napsauta {{ui:Näppäin}}-ruutua ja paina näppäimiä, esimerkiksi {{key:Alt+Shift+C}}.
3. Kohdassa {{ui:Suorittaa}} kirjoita komento ja halutessasi se, mitä kirjoitetaan sen jälkeen: `CIRCLE` tai `ZOOM E`.
4. Napsauta {{ui:Lisää}}.

Näppäin tarvitsee {{key:Mod}}- tai {{key:Alt}}-näppäimen kirjaimen tai numeron kanssa, tai vapaan toimintonäppäimen ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Näppäimet, joita CadCraft, sovellus tai selain jo käyttää, ja näppäimet, joita Omat työkalut -painikkeella on (katso [Omat painikkeet](topic:my-tools)), hylätään, ja ruutu kertoo syyn. Pikanäppäimet säilyvät tässä selaimessa (tai työpöytäsovelluksessa); {{ui:Poista}} poistaa yhden.
