---
title: Lataa sovellukset (APPLOAD)
summary: Lataa LISP-rutiineja ja niiden valintaikkunatiedostoja, poista lataus, lataa ne uudelleen historiasta ja säilytä käyttämäsi Käynnistyssarjassa.
keywords: appload, ap, lataa sovellus, lisp, lsp, dcl, rutiini, käynnistyssarja, poista lataus, historia, pudota, lataa, mukauta, hallinta
from: 89e0ee95
---

## Mitä opit

Miten ladataan LISP-rutiini (`.lsp`-tiedosto), jotta sen komennot toimivat CadCraftissa, miten sen lataus poistetaan ja miten se ladataan aina CadCraftin käynnistyessä.

## Lataa rutiini

1. Avaa {{ui:View}} › {{ui:More}} › {{ui:Load application…}} tai kirjoita {{cmd:APPLOAD}} (tai `AP`) ja paina {{key:Enter}}.
2. Napsauta {{ui:Load a file…}} ja valitse yksi tai useampi `.lsp`-tiedosto. Rutiinin, joka avaa valintaikkunan, mukana tulee yleensä `.dcl`-tiedosto: valitse myös se.
3. Valintaikkuna kertoo, mitä kukin tiedosto teki, esimerkiksi ”Ladattu delblocks.lsp: 1 komento, DELBLOCKS.”
4. Napsauta {{ui:Close}}, kirjoita rutiinin komento ja paina {{key:Enter}}.

Voit myös pudottaa `.lsp`- ja `.dcl`-tiedostoja piirustukseen tai {{ui:Load applications}}-valintaikkunaan: ne latautuvat heti.

Tiedosto luetaan tässä, selaimessasi. Mitään ei lähetetä.

:::tip
Paina {{key:Enter}} tyhjällä komentorivillä suorittaaksesi rutiinin komennon uudelleen, kuten minkä tahansa muun komennon. Myös komentojen lyhenteet voivat kutsua sitä: katso ”Muokkaa komentojen lyhenteitä”.
:::

## Poista rutiinin lataus

Kohdassa {{ui:Load applications}}, kohdassa {{ui:Loaded applications}}, napsauta tiedoston vieressä {{ui:Unload}}. Sen tekemät komennot katoavat, kunnes lataat sen uudelleen.

## Lataa rutiini aina CadCraftin käynnistyessä

1. Lataa rutiini.
2. Kohdassa {{ui:Loaded applications}} napsauta sen vieressä {{ui:Add to Startup Suite}}.

Tästä lähtien se latautuu itsestään aina, kun CadCraft käynnistyy tässä selaimessa. Lopettaaksesi napsauta sen vieressä kohdassa {{ui:Startup Suite}} {{ui:Remove}}.

Käynnistyssarja säilyttää kopion kustakin tiedostosta tämän selaimen tallennustilassa. Jos muutat rutiinia, lataa uusi tiedosto ja lisää se uudelleen.

## Lataa acad.lsp ja acaddoc.lsp tukikansiosta (Studio)

CadCraft Studiossa {{ui:Support folder}} kohdassa {{ui:Load applications}}-valintaikkunassa ottaa tietokoneellasi olevan kansion. Napsauta {{ui:Choose folder…}}. Kun CadCraft käynnistyy, se lukee `acad.lsp`- ja sitten `acaddoc.lsp`-tiedoston siitä kansiosta (nimien kirjainkoosta riippumatta), lataa ne ja lataa sitten Käynnistyssarjan. `acaddoc.lsp` luetaan uudelleen aina, kun uusi piirustusvälilehti avautuu. Kansion muita tiedostoja ei lueta, ja yli 2 MB:n tiedosto ohitetaan ilmoituksella.

Jos tiedosto määrittelee funktion nimeltä `S::STARTUP`, se suoritetaan kerran tiedostojen latauksen jälkeen (myös Käynnistyssarjan jälkeen). {{ui:Load now}} tekee saman pyynnöstä; {{ui:Clear}} unohtaa kansion.

Selaimessa sivu ei voi säilyttää kansiota, joten tukikansiota ei ole: käytä yllä olevaa Käynnistyssarjaa. Käännetyt `.fas`- ja `.vlx`-tiedostot sekä natiiviohjelmat pysyvät estettyinä.

## Lataa tiedosto uudelleen historiasta

{{ui:History}} luettelee tässä selaimessa ladatut tiedostot, uusimmat ensin. Napsauta tiedoston vieressä {{ui:Load}} ladataksesi sen uudelleen etsimättä sitä tietokoneeltasi.

## Tiedostot, joita CadCraft ei voi ladata

| Tiedosto | Mikä se on | Mitä tehdä |
|---|---|---|
| `.fas`, `.vlx` | käännetty tai suojattu LISP | lataa sen sijaan `.lsp`-lähdekoodi |
| `.arx`, `.crx`, `.dbx` | natiivit Windows-ohjelmat | näitä ei voi suorittaa CadCraftissa |
| `.dvb` | VBA-projekti | näitä ei voi suorittaa CadCraftissa |
| `.craft`, `.lua`, `.py` | CraftScript-skriptit | avaa ne PartCraft-sovelluksen skriptien työtilassa |

{{ui:Load applications}}-valintaikkuna kertoo, mikä näistä tiedosto on, kun valitset sen.

## Pysäytä rutiini

Paina {{key:Esc}}. Rutiinin kehotteessa Esc peruuttaa sen rutiinin odottamalla tavalla (sen oma siivous suoritetaan). Jos rutiini on kiireinen eikä kysy mitään, Esc pysäyttää sen suoraan ja ilmoittaa siitä; ladatut rutiinit pysyvät ladattuina.

:::note
Kaikki, minkä rutiini muuttaa piirustuksessa, on yksi vaihe: yksi {{key:Mod+Z}} kumoaa kaiken.
:::
