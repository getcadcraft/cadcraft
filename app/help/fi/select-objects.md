---
title: Valitse kohteet
summary: Valitse kohteet yksi kerrallaan, ikkunalla tai risteävällä valinnalla, ennen komentoa tai sen aikana, ja poista kohteita valinnasta.
keywords: valitse, valinta, ikkuna, risteävä, substantiivi-verbi, poimi, kaikki, viimeisin, edellinen, aita, poista, lisää, Tab, kierrä, päällekkäiset, pikavalinta, qselect, suodatin, valitse samanlaiset, selectsimilar, shift, poista valinta, ctrl+a, pickfirst
from: 676508c7
---

## Mitä opit

Miten valitaan komennon kohteet. CadCraftissa on kaksi tapaa, ja molemmat käyvät:

- **Ensin valinta, sitten komento** (substantiivi-verbi). Valitse kohteet ja kirjoita `M` Siirrä-komennolle. Komento ottaa valintasi ja siirtyy suoraan seuraavaan kysymykseensä.
- **Ensin komento, sitten valinta** (verbi-substantiivi). Kirjoita `M`; komento kysyy `Valitse kohteet:`; valitse ja paina {{key:Enter}}.

## Valitse yksi kohde kerrallaan

1. Kun mikään komento ei käy, napsauta viivaa. Se korostuu ja sen otteet (pienet neliöt) ilmestyvät. Oikea paneeli näyttää sen ominaisuudet.
2. Napsauta toista kohdetta. Se lisätään valintaan.
3. Pidä {{key:Shift}} pohjassa ja napsauta valittua kohdetta. Se poistetaan valinnasta.
4. Paina {{key:Esc}}. Mitään ei ole valittu.

## Ikkuna ja risteävä valinta

Napsauta kerran tyhjää kohtaa, liiku ja napsauta uudelleen: syntyy suorakulmio. Painaminen ja vetäminen piirtää sen sijaan vapaamuotoisen lassan, samoilla kahdella tavalla (katso [Lassovalinta](topic:lasso-selection); Asetuksilla vedon voi tehdä piirtämään suorakulmion). Mitkä kohteet saat, riippuu suunnasta:

| Liikutat | Laatikko | Valitsee |
|---|---|---|
| Vasemmalta oikealle | Ikkuna | Vain kohteet, jotka ovat **kokonaan** laatikon sisällä |
| Oikealta vasemmalle | Risteävä | Laatikon sisällä olevat kohteet **ja** ne, joihin se koskee |

1. Piirrä muutama päällekkäinen viiva ja ympyrä.
2. Napsauta tyhjää kohtaa joidenkin kohteiden vasemmalla puolella, liiku oikealle ja napsauta uudelleen. Vain kokonaan sisälle jäävät kohteet valitaan.
3. Paina {{key:Esc}}.
4. Napsauta tyhjää kohtaa oikealla puolella, liiku vasemmalle joidenkin kohteiden yli ja napsauta uudelleen. Valitaan kaikki, mihin laatikko koskee.
5. Pidä {{key:Shift}} pohjassa ja piirrä laatikko tai lasso joidenkin valittujen kohteiden päälle. Ne poistuvat valinnasta.

## Valitse, sitten aja komento

1. Valitse kaksi ympyrää.
2. Kirjoita `M` ja paina {{key:Enter}}.

Historia kertoo `2 löytyi`, ja kehote siirtyy suoraan kohtaan `Määritä peruspiste`. Viimeistele siirto (katso [Siirrä, kopioi, kierrä, skaalaa ja peilaa](topic:modify-objects)).

Kun komento päättyy, valinta tyhjenee, joten seuraava komento alkaa tyhjästä.

Komennot, jotka ottavat valinnan tällä tavalla: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} ja {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} ja {{cmd:CHAMFER}} pyytävät aina kohteet yksi kerrallaan; {{cmd:TRIM}} ja {{cmd:EXTEND}} ottavat napsautuksen tai polun, jonka vedät palojen läpi (katso [Typistä ja pidennä](topic:trim-and-extend)).

## Aja komento, sitten valitse

1. Varmista, ettei mitään ole valittuna ({{key:Esc}}).
2. Kirjoita `E` ja paina {{key:Enter}}. Kehote kuuluu `Valitse kohteet:`.
3. Napsauta kohteita tai vedä ikkunoita ja risteäviä valintoja. Historia laskee jokaisen valinnan (`1 löytyi`, `3 löytyi`).
4. Paina {{key:Enter}}, paina {{key:Space}} tai napsauta hiiren oikealla painikkeella valinnan lopettamiseksi.

Kohteet poistetaan, ja historia kertoo, kuinka monta.

Kehotteessa `Valitse kohteet:` voit myös kirjoittaa:

- `ALL`, sitten {{key:Enter}}: jokainen kohde, jota voit muokata avoimessa välilehdessä.
- `L` (tai `LAST`), sitten {{key:Enter}}: viimeksi piirretty kohde.
- `P` (Edellinen): kohteet, joihin viimeisin komento kohdistui, jos ne ovat yhä paikoillaan.
- `F` (Aita): napsauta tai kirjoita pisteitä viivan varrelle; jokainen kohde, jonka viiva ylittää, lisätään. Lopeta aita painamalla {{key:Enter}}; `U` ottaa viimeisen pisteen takaisin.
- `W` (Ikkuna) tai `C` (Risteävä): kaksi kulmaa, kumpaan suuntaan vedät tahansa.
- `R` (Poista): tästä eteenpäin napsautukset, ikkunat ja aidat poistavat kohteita **valinnasta**. Kehote kuuluu `Poista kohteita:`. `A` (Lisää) vaihtaa takaisin.
- `?`: luettelo näistä historiassa.

Nämä vaihtoehdot eivät näy kehotteessa, kuten AutoCADissa.

## Poimi yksi useista päällekkäisistä kohteista

Kun kohteet ovat päällekkäin tai koskettavat, napsautus valitsee lähimmän. Saadaksesi toisen:

1. Pidä osoitin paikallaan kohdassa.
2. Paina {{key:Tab}}. Seuraava siellä oleva kohde korostuu, ja tilarivi kertoo, mikä se on (`2 / 3: Viiva tasolla Walls`).
3. Paina {{key:Tab}} uudelleen, kunnes haluamasi kohde on korostettu, ja napsauta sitten liikuttamatta.

Osoittimen liikuttaminen aloittaa alusta. Tämä toimii ilman käynnissä olevaa komentoa, kohdassa `Valitse kohteet:` ja aina, kun komento pyytää yhtä kohdetta.

## Valitse säännön mukaan: Pikavalinta

{{cmd:QSELECT}} (`QS`, tai {{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Pikavalinta}}) valitsee jokaisen kohteen, joka täsmää sääntöön, kuten jokaisen ympyrän, jonka säde on alle 50, tai jokaisen lohkoviittauksen, jonka nimi on DOOR-900.

1. Avaa {{ui:Pikavalinta}}.
2. Valitse {{ui:Kohteen tyyppi}} (luettelo laskee jokaisen tyypin), sitten {{ui:Ominaisuus}}: {{ui:Taso}}, {{ui:Väri}} ja joillekin tyypeille {{ui:Pituus}}, {{ui:Säde}}, {{ui:Ala}}, {{ui:Tekstin korkeus}}, {{ui:Tekstin sisältö}}, {{ui:Lohkon nimi}} tai {{ui:Viivoituskuvio}}.
3. Valitse {{ui:Operaattori}} ja {{ui:Arvo}}. `*` täsmää jokerimerkeillä (`DOOR-*`); {{ui:Valitse kaikki}} ottaa jokaisen tyypin kohteen. Alareunan laskuri näyttää, kuinka monta täsmää, kun valitset.
4. {{ui:Miten käytetään}}: sisällytä täsmäävät tai kaikki muut. {{ui:Käytä}}: {{ui:Nykyinen valinta}} kaventaa jo valittua; {{ui:Lisää nykyiseen valintaan}} lisää siihen.
5. Napsauta {{ui:Valitse}}. Aja sitten haluamasi komento: se käyttää valintaa.

## Valitse samanlaiset

Valitse yksi tai useampi kohde ja kirjoita {{cmd:SELECTSIMILAR}} (`SIM`), tai valitse {{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Valitse samanlaiset}}. Jokainen saman tyypin kohde samalla tasolla ja samalla värillä valitaan; lohkoviittausten täytyy olla myös samaa lohkoa, viivoitusten samaa kuviota. Kirjoita `SE` sen kehotteessa `Valitse kohteet`, jos haluat valita, mikä on pakko täsmätä.

## Valitse nyt, käytä myöhemmin

Kirjoita `SELECT` ja paina {{key:Enter}}, valitse kohteet jollakin yllä olevista tavoista ja paina {{key:Enter}}. Ne pysyvät valittuina seuraavaa komentoa varten, ja `P` valitsee ne uudelleen myöhemmässä kehotteessa `Valitse kohteet:`.

## Valitse kaikki

Kun mikään komento ei käy, paina {{key:Mod+A}} tai valitse {{ui:Valitse kaikki}} työkalurivin {{ui:Muokkaus}} › {{ui:Lisää}} -valikosta, niin valitaan jokainen kohde, jota voit muokata avoimessa välilehdessä. Jos olet kirjoittanut komentoriville jotain, {{key:Mod+A}} valitsee sen tekstin: paina ensin {{key:Esc}} sen tyhjentämiseksi. Kehotteessa `Valitse kohteet:` kirjoita `ALL`. {{ui:Poista valinta}} samasta valikosta tai {{key:Esc}} tyhjentää valinnan.

:::tip
Jos haluat, että jokainen napsautus korvaa valinnan (ja {{key:Shift}} lisää siihen), aseta {{ui:Kohteiden napsautus}} arvoon {{ui:Korvaa valinnan}} kohdassa [CadCraftin asetukset](topic:settings).
:::

## Mitä ei voi valita

- Kohteet tasolla, joka on **pois**, **jäädytetty** tai **lukittu**. Lukitut kohteet pysyvät näkyvissä, ja niihin voi yhä tarttua, mutta niitä ei voi valita tai muuttaa.
- Arkkivälilehdellä näkymäruudun sisällä näkyvä malli. Valitset arkin omat kohteet (piirustusotsikon, muistiinpanot, näkymäruutujen kehykset). Muokataksesi mallia, siirry {{ui:Malli}}-välilehdelle.

## Poista nopeasti

Valitse kohteet ja paina {{key:Delete}} (tai {{key:Backspace}}, kun komentorivillä ei ole kohdistinta). Mac-näppäimistöllä näppäin, jossa lukee delete, toimii, kun olet napsauttanut piirustusta; kun komentorivillä on kohdistin, paina fn ja delete yhdessä. Tämä ajaa {{cmd:ERASE}}-komennon valinnalle. Jos mitään ei tapahdu, olet kirjoittanut jotain komentoriville: paina {{key:Esc}} tai kirjoita `E` ja paina {{key:Enter}}.

## Yleisiä virheitä

- **Ikkuna otti liian vähän.** Vedit vasemmalta oikealle, mikä ottaa vain kokonaan sisällä olevat. Vedä oikealta vasemmalle risteävää valintaa varten.
- **Tyhjään kohtaan napsautus aloitti laatikon.** Yksi napsautus tyhjään kohtaan aloittaa ikkunan; toinen napsautus viimeistelee sen. Paina {{key:Esc}} tai napsauta hiiren oikealla painikkeella sen hylkäämiseksi.
- **Napsautus tyhjään kohtaan päästi valinnan irti.** Niin tapahtuu, ellei pidä {{key:Shift}} pohjassa. Jos haluat säilyttää valinnan tällaisessa napsautuksessa ja tyhjentää sen vain {{key:Esc}}-näppäimellä, aseta {{ui:Tyhjän kohdan napsautus}} arvoon {{ui:Säilyttää valinnan}} kohdassa [CadCraftin asetukset](topic:settings#clicking-an-empty-spot).
- **Komento käytti kohteita, joita et tarkoittanut.** Jotain oli yhä valittuna, kun aloitit sen. Paina {{key:Esc}} ennen komentoa aloittaaksesi ilman valintaa.
- **Komennon jälkeen mitään ei ole valittuna.** Se on tarkoituksellista: päättynyt komento tyhjentää valinnan.
