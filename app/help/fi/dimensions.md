---
title: Mitoita pohjapiirros
summary: Lisää vaaka-pysty-, tasattuja, kulma-, säde- ja halkaisijamitoituksia, ketjuta ne toiminnoilla Jatkuva mitoitus ja Perusviivamitoitus ja ohita teksti.
keywords: mitoitus, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, ketju, jono, merkitse, mitoitustyökalu, missä, etsi, työkalurivi, mittaa, mm, cm, m, km, yksiköt
from: 9ee65123
---

## Mitä teet

Mitoitettu huone: kokonaisleveys ja -korkeus, mittajono yhdellä seinällä, kulmassa oleva seinä, kaareva kulma ja kulma.

Lue ennen aloittamista [Aseta mitoitusten koot](topic:dimension-settings), jos piirustus on suuri: mitoitusteksti on oletuksena 2.5 piirustusyksikköä korkea, mikä on pieni piirustuksessa, jonka mitat ovat millimetreinä. Alla olevia vaiheita varten kirjoita ensin DIMSCALE, paina {{key:Enter}}, kirjoita 50 ja paina {{key:Enter}}.

## Mitoitustyökalujen sijainti

CadCraft-valikkotyylissä (jolla CadCraft käynnistyy) mitoitustyökalut ovat piirustuksen yläpuolella olevalla työkalurivillä {{ui:Merkitse}}-ryhmässä: {{ui:Vaaka-pysty}}, {{ui:Tasattu}}, {{ui:Kulma}}, {{ui:Säde}} ja {{ui:Halkaisija}}. Ryhmän {{ui:Lisää}}-valikossa ovat {{ui:Jatkuva mitoitus}} ja {{ui:Perusviivamitoitus}}. Vie osoitin painikkeen päälle nähdäksesi, mitä se tekee.

- Valikkotyylillä {{ui:Piirtämisen klassikko}} tai {{ui:Valintanauha}} avaa {{ui:Merkitse}}-välilehti: työkalut ovat sen {{ui:Mitoitukset}}-paneelissa. {{ui:Piirtämisen klassikko}} -tyylissä on {{ui:Vaaka-pysty}} myös {{ui:Aloitus}}-välilehdellä kohdassa {{ui:Merkinnät}}. Katso [Valikot, näppäimet ja hiiri](topic:menus-keys-and-mouse).
- Tai kirjoita komento piirustuksen alla olevalle komentoriville ja paina {{key:Enter}}: DLI (vaaka-pysty), DAL (tasattu), DAN (kulma), DRA (säde), DDI (halkaisija), DCO (jatkuva), DBA (perusviiva).
- Kapealla näytöllä työkalurivi on yksi rivi: pyyhkäise sitä sivusuunnassa, jotta pääset {{ui:Merkitse}}-kohtaan.

Jos haluat näyttää pituudet millimetreinä, senttimetreinä, metreinä tai kilometreinä, katso [Mitoitukset millimetreinä, senttimetreinä, metreinä tai kilometreinä](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Piirrä jotakin mitoitettavaa

1. Kirjoita `PL` ja paina {{key:Enter}}.
2. Kirjoita `0,0` ja paina {{key:Enter}}.
3. Kirjoita `@6000,0` ja paina {{key:Enter}}.
4. Kirjoita `@1500<60` ja paina {{key:Enter}}.
5. Kirjoita `@0,2700` ja paina {{key:Enter}}.
6. Kirjoita `@-6750,0` ja paina {{key:Enter}}.
7. Kirjoita `C` ja paina {{key:Enter}}. Ääriviiva sulkeutuu.
8. Kirjoita `C` ja paina {{key:Enter}} aloittaaksesi ympyrän.
9. Napsauta huoneen sisällä, kaukana seinistä, keskipisteeksi.
10. Kirjoita `600` ja paina {{key:Enter}}. Tämä on pilari.
11. Napsauta {{ui:Laajuus}}.

## Vaaka-pysty: vaakasuora tai pystysuora

1. Kirjoita `DLI` ja paina {{key:Enter}}.
2. Kohdassa `Specify first extension line origin` tartu vasempaan alakulmaan (Päätepiste) ja napsauta.
3. Kohdassa `Specify second extension line origin` tartu oikeaan alakulmaan ja napsauta.
4. Siirrä ristiosoitinta huoneen alapuolelle. Mitoitus seuraa, vaakasuorana.
5. Napsauta sijoittaaksesi mittaviivan.

Historia kertoo `Dimension text = 6000`.

Mittaviivan sijainti ratkaisee suunnan: alapuolella tai yläpuolella antaa vaakasuoran mitoituksen, vasemmalla tai oikealla pystysuoran. Pakottaaksesi suunnan kirjoita ennen sijoittamista `H` (vaakasuora), `V` (pystysuora) tai `R` (kierretty, sen jälkeen kulma).

:::tip
Paina {{key:Enter}} ensimmäisessä kehotteessa pisteen valitsemisen sijaan ja napsauta sitten viivaa, kaarta, ympyrää tai murtoviivan janaa. CadCraft ottaa molemmat päät puolestasi.
:::

## Jatkuva: mittajono

{{cmd:DIMCONTINUE}} ({{ui:Merkitse}} › {{ui:Lisää}} › {{ui:Jatkuva mitoitus}} tai `DCO`) jatkaa viimeisestä tekemästäsi vaaka-pysty- tai tasatusta mitoituksesta, ja jokainen uusi alkaa siitä, mihin edellinen päättyi.

1. Kirjoita `DLI` ja paina {{key:Enter}}.
2. Kirjoita `0,0` ja paina {{key:Enter}} ensimmäiselle lähtöpisteelle.
3. Kirjoita `2000,0` ja paina {{key:Enter}} toiselle lähtöpisteelle.
4. Napsauta huoneen alapuolelle sijoittaaksesi sen.
5. Kirjoita `DCO` ja paina {{key:Enter}}.
6. Kirjoita `4500,0` ja paina {{key:Enter}}. Toinen mitoitus seuraa ensimmäistä samalla viivalla.
7. Tartu oikeaan alakulmaan ja napsauta. Kolmas täydentää jonon.
8. Lopeta komento painamalla {{key:Enter}}.

:::note
Tässä pisteet on kirjoitettu tarkoituksella absoluuttisina koordinaatteina. @-piste laskee viimeisestä antamastasi pisteestä, ja viimeinen piste on kohta, johon sijoitit edellisen mittaviivan, ei mitoituksen päätepiste. Absoluuttiset pisteet, tartunnat tai pelkkä suora etäisyys ortogonaali päällä ovat turvallisempia mittajonossa.
:::

Kirjoita `U` ja paina {{key:Enter}}, niin jonon viimeinen mitoitus peruutetaan poistumatta komennosta.

## Perusviiva: mitoitukset yhdestä viivasta pinottuna

{{cmd:DIMBASELINE}} ({{ui:Merkitse}} › {{ui:Lisää}} › {{ui:Perusviivamitoitus}} tai `DBA`) mittaa jokaisen uuden mitoituksen viimeisen mitoituksen ensimmäisestä lähtöpisteestä ja pinoaa jokaisen askeleen verran kauemmas.

1. Kirjoita `DLI` ja paina {{key:Enter}}.
2. Tartu vasempaan alakulmaan ja napsauta.
3. Tartu vasempaan yläkulmaan ja napsauta.
4. Siirrä ristiosoitin huoneen vasemmalle puolelle ja napsauta. Pystysuora mitoitus ilmestyy.
5. Kirjoita `DBA` ja paina {{key:Enter}}.
6. Tartu 60 asteen seinän yläpäähän (Päätepiste) ja napsauta. Toinen pystysuora mitoitus ilmestyy, yhden askeleen ensimmäistä kauempana.
7. Lopeta painamalla {{key:Enter}}.

## Tasattu: kaltevan viivan todellinen pituus

1. Kirjoita `DAL` ja paina {{key:Enter}}.
2. Paina {{key:Enter}} valitaksesi kohteen.
3. Napsauta 60 asteen seinää.
4. Siirrä ulospäin ja napsauta sijoittaaksesi.

Teksti kertoo 1500: todellisen pituuden, mitattuna seinää pitkin.

## Säde ja halkaisija

1. Kirjoita `DRA` ja paina {{key:Enter}}.
2. Napsauta pilarin ympyrää.
3. Siirrä ristiosoitinta. Viiva osoittaa keskipisteestä kohti ristiosoitinta.
4. Napsauta sijoittaaksesi tekstin.

Teksti kertoo `R600`. {{cmd:DIMDIAMETER}} (`DDI`) tekee saman merkillä ⌀ ja halkaisijalla.

## Kulma

Tässä seinät ovat yksi murtoviiva, joten mittaa kulma sen kärkipisteen mukaan. (Kahden erillisen viivan välissä voit napsauttaa viivoja.)

1. Kirjoita `DAN` ja paina {{key:Enter}}.
2. Kohdassa `Select arc, circle or line, or Enter for a vertex` paina {{key:Enter}}.
3. Kohdassa `Specify angle vertex` tartu oikeaan alakulmaan ja napsauta.
4. Kohdassa `Specify first angle endpoint` tartu vasempaan alakulmaan ja napsauta.
5. Kohdassa `Specify second angle endpoint` tartu 60 asteen seinän yläpäähän ja napsauta.
6. Siirrä ristiosoitin huoneen sisälle, lähelle kulmaa, ja napsauta.

Teksti kertoo `120°`, kulman sisäkulman. Jos mitoitus sijoitetaan kulman toiselle puolelle, se mittaa silloin sen puolen kulman. Napsauta ensimmäisessä kehotteessa kaarta mitoittaaksesi kulman, jonka se kattaa, tai napsauta kahta viivaa mitoittaaksesi niiden välisen kulman.

## Muuta tekstiä

Kirjoittaaksesi oman tekstin kirjoita `T` ja paina {{key:Enter}} ennen mitoituksen sijoittamista, ja kirjoita sitten teksti. Tekstissä `<>` tarkoittaa mitattua arvoa: `<> TYP.` antaa `6000 TYP.`. Säilytä mitattu arvo painamalla {{key:Enter}} tyhjällä rivillä.

Muuta olemassa olevaa mitoitusta näin:

1. Napsauta sitä.
2. Kirjoita oikeassa paneelissa kenttään {{ui:Teksti}}. Jätä tyhjäksi mitattua arvoa varten.
3. Paina {{key:Enter}}.

## Mitoitukset seuraavat geometriaa

Mitoitus muistaa pisteensä. Vedä jotakin sen otteista tai siirrä, kierrä tai skaalaa sitä mittaamiensa kohteiden mukana, niin se mittaa uudelleen. Jos venytät geometriaa siirtämättä mitoitusta, mitoitus ei seuraa: se säilyttää omat pisteensä.

## Yleisiä virheitä

- **Teksti ja nuolet ovat mikroskooppisia tai valtavia.** Aseta kokonaismittakaava, katso [Aseta mitoitusten koot](topic:dimension-settings).
- **”Valitse piste kulman sisältä, jonka haluat mitata.”** Kulmamitoitukseen napsauttamasi piste on toisella kyljellä. Siirrä se kulman sisään.
- **Jatkuva alkoi väärästä mitoituksesta.** Se jatkaa aina tämän istunnon viimeisestä vaaka-pysty- tai tasatusta mitoituksesta. Tee (tai tee uudelleen) se, josta jatketaan, ensin.
- **Mitoitus tuli pystysuoraksi.** Sijoitit sen sivulle. Kirjoita H ennen sijoittamista.
- **Jalat ja tuumat.** Aseta ensin piirustuksen pituuden muodoksi {{ui:Arkkitehtuuri}}, tai mitoituksen {{ui:Muoto}} kohdassa {{ui:Ominaisuudet}}: katso [Jalat ja tuumat mitoituksissa](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Luvut eivät ole haluamassasi yksikössä.** Valitse {{ui:Yksiköt tekstissä}}, katso [Mitoitukset millimetreinä, senttimetreinä, metreinä tai kilometreinä](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
