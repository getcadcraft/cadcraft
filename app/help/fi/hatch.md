---
title: Viivoitus ja täyttöalueet
summary: Täytä alue yhtenäisellä värillä tai vakiokuviolla napsauttamalla sen sisällä tai valitsemalla suljettuja muotoja, aseta kuvion mittakaava ja kulma sekä muuta viivoitusta jälkeenpäin.
keywords: viivoitus, bhatch, täyttö, yhtenäinen täyttö, kuvio, ansi31, ansi37, tiili, maa, verkko, leikkausviivat, poché, saareke, raja, mittakaava, kulma
from: e7feb344
---

## Mitä teet

Seinäleikkaus, jonka täyttö on ANSI31-kuvio, pilari siinä tyhjänä ja yhtenäinen täyttö pilarissa.

## Viivoitus napsauttamalla alueen sisällä

1. Piirrä suorakulmio (`REC`, `0,0`, `@2000,1200`) ja ympyrä sen sisään (`C`, `1000,600`, `300`). Napsauta {{ui:Laajuus}}.
2. Napsauta {{ui:Viivoitus}}-painiketta {{ui:Piirrä}}-ryhmässä, tai kirjoita `H` ja paina {{key:Enter}}. Historia kertoo nykyisen kuvion, esimerkiksi `Nykyinen viivoitus: ANSI31, mittakaava 1, kulma 0°`.
3. Kirjoita `P` ja paina {{key:Enter}}, kirjoita `ANSI31` ja paina {{key:Enter}}.
4. Kirjoita `SC` ja paina {{key:Enter}}, kirjoita `20` ja paina {{key:Enter}}. Kuvion koot ovat paperilla, joten 1:20 tulostettu piirustus tarvitsee mittakaavan 20.
5. Kohdassa `Määritä sisäpiste` napsauta suorakulmion sisällä, ympyrän ulkopuolella. Viivoitus näkyy esikatseluna.
6. Paina {{key:Enter}}. Suorakulmio viivoitetaan; ympyrä sen sisällä jää tyhjäksi, koska se on saareke.

Napsauta useita alueita ennen {{key:Enter}}-painallusta, jolloin ne muodostavat yhden viivoituksen. `U` kumoaa viimeisen alueen.

## Yhtenäinen täyttö

1. Kirjoita `H` ja paina {{key:Enter}}.
2. Kirjoita `P`, paina {{key:Enter}}, kirjoita `SOLID` ja paina {{key:Enter}}.
3. Napsauta ympyrän sisällä ja paina {{key:Enter}}.

## Viivoita valitsemasi suljetut muodot

Sen sijaan että napsauttaisit sisälle, kirjoita `S` (Valitse kohteet) kohdassa `Määritä sisäpiste`, valitse suljettuja murtoviivoja, ympyröitä tai suljettuja ellipsejä ja paina sitten {{key:Enter}}. Muodot toisten sisällä jäävät vuorollaan tyhjiksi (ulompi viivoitetaan, seuraava sisempi jää tyhjäksi ja niin edelleen).

## Kuviot

Kirjoita `?` kuvion kysymykseen nähdäksesi luettelon. Vakiokuviot ovat ANSI31–ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS ja EARTH sekä SOLID. Piirustuksessa, jonka yksikkö on tuuma (tai jonka pituuden muoto on jalat ja tuumat), käytetään kuvioiden tuumakokoja kuten AutoCADissa; muuten millimetrikokoja.

{{ui:Kulma}} (`A`) kääntää koko kuvion: ANSI31 90 asteen kulmassa viettää toiseen suuntaan.

**Kuviotiedostot.** Kirjoita `F` (Kuviotiedosto) kohdassa `Määritä sisäpiste` ja valitse `.pat`-tiedosto. Sen kuviot liittyvät luetteloon; jos niitä on useita, sinulta kysytään, mikä niistä otetaan käyttöön. Tiedosto, jota CadCraft ei osaa lukea, kertoo tästä, ja ohitetut kuviot lasketaan. `.pat`-tiedoston kokojen yksikköä ei ole, joten ne luetaan piirustuksen yksiköissä. Vain tavallisessa `.pat`-muodossa kirjoitettuja tiedostoja on kokeiltu; toisen ohjelman tekemiä ei.

## Muuta viivoitusta

Valitse se (napsauta yhtä sen viivaa). {{ui:Ominaisuudet}}-paneelissa: {{ui:Kuvio}}, {{ui:Kuvion mittakaava}} ja {{ui:Kuvion kulma}}. Avatuissa piirustuksissa olevat viivoitukset näyttävät kuvionsa, kun se on yksi vakiokuvioista; muut näkyvät kevyenä sävynä niiden väristä.

## Yleisiä virheitä

- **”Tämän pisteen ympärillä ei ole suljettua rajaa.”** Ääriviivassa on aukko, tai osa siitä on näytön ulkopuolella: CadCraft tarkastelee vain sitä, mikä on näytöllä. Sulje aukko (zoomaa kulmiin) tai loitonna.
- **”Kuvio on liian tiheä piirrettäväksi tässä mittakaavassa.”** Viivat olisivat lähempänä toisiaan kuin piirustus voi näyttää. Käytä suurempaa mittakaavaa: kokeile tulostusmittakaavaa (20 mittakaavalle 1:20).
- **Kuvio näyttää valtavalta tai pieneltä.** Mittakaava on piirustusyksikköinä kuvion yksikköä kohti; katso yllä vaihe 4.
- **Viivoitus lakkasi seuraamasta ääriviivaansa.** {{cmd:HATCH}}-komennolla tehty viivoitus pysyy kohteiden kanssa, joista se tehtiin: siirrä, käännä tai skaalaa ääriviivaa, ja viivoitus lähtee mukaan; muotoile se kahvalla uudelleen, ja viivoitus lasketaan uudelleen. Linkki päättyy, kun ääriviiva ei enää sulkeudu, kun muokkaat itse viivoitusta käsin tai kun typistät sitä, ja komentorivi kertoo siitä. Mitään ei menetetä: viivoita alue uudelleen, niin saat uuden linkin.

## Viivoitus, joka pysyy rajansa kanssa

Viivoitus, jonka teet komennolla `HATCH`, muistaa, mikä sitä rajaa. Siirrä, käännä tai skaalaa rajaa, ja viivoitus ja sen kuvio lähtevät mukaan. Vedä kahvaa muotoillaksesi rajaa uudelleen, ja viivoitus lasketaan uudelleen. Siirrä viivoitusta yksin, ja sen raja tulee mukaan kuten täytetty muoto piirto-ohjelmassa.

Linkki päättyy, ja komentorivi kertoo siitä, jos raja ei enää sulkeudu tai muotoilet viivoituksen käsin. Itse viivoitus jää. Kirjoita `AS` viivoittaessasi, jos haluat itsenäisiä viivoituksia. Kopioi viivoitus rajoineen, ja kopiolla on oma linkkinsä.

`HATCHEDIT` (`HE`) muuttaa viivoituksen kuviota, mittakaavaa, kulmaa ja lähtöpistettä sekä linkittää sen rajaan tai lopettaa linkin. Linkki tallennetaan DWG- ja DXF 2000 -tiedostoihin. DXF R12 -tiedostossa ei ole viivoitusobjektia, eikä muiden ohjelmien linkkejä lueta: käytä `HATCHEDIT`-komentoa ja Linkki-vaihtoehtoa niille.

Viivoitus, jolla ei ole enää rajaa (raja poistettiin tai tiedosto tuli ilman sitä), voi saada sen takaisin: `HATCHGENERATEBOUNDARY` (`HGB`) piirtää suljetun murtoviivan jokaisen viivoituksen silmukan ympärille ja, jos vastaat Kyllä, linkittää viivoituksen niihin.

## Liukuvärin täyttö

`GRADIENT` (`GD`) täyttää alueen liukuvärillä kuvion sijaan: samat valinnat kuin `HATCH`, ja sen jälkeen se kysyy tyypin (lineaarinen, sylinterimäinen, pallomainen, puolipallomainen, kaareva, ja jokainen näistä käänteisenä), yhden värin sävyllä tai kaksi väriä, kulman sekä keskitetyn tai ei. `HATCH`-komennon vaihtoehto `G` tekee saman. `HATCHEDIT` `G` tai {{ui:Ominaisuudet}}-paneelin {{ui:Liukuväri}}-kohta muuttaa liukuväriä tai tekee mistä tahansa viivoituksesta liukuvärin.

Liukuväri näkyy näytöllä ja tulosteissa. Tallenna DWG 2004 tai uudempana, ja muut ohjelmat saavat todellisen liukuvärin. DXF 2000 ja DWG 2000 eivät tue liukuväriä: CadCraft säilyttää sen itselleen, ja muut ohjelmat näkevät yhtenäisen täytön ensimmäisellä värillä.

## Typistä viivoitusta

`TRIM` leikkaa viivoituksen kuten minkä tahansa muun kohteen. Napsauta viivoitusta leikkausreunan sille puolelle, jonka haluat poistettavan: reunat jakavat viivoitetun alueen ja napsauttamasi pala poistetaan. Pikatilassa jokainen kohde on leikkausreuna; valitse reunat ensin (vaihtoehto `T`), kun niitä on paljon. Typistetty viivoitus ei ole enää linkitetty rajaansa, koska se ei enää täytä sitä.
