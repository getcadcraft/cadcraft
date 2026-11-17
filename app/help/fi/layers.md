---
title: Järjestä piirustus tasoilla
summary: Luo tasot seinille, ovilla ja merkinnöille, aseta värit, tee taso nykyiseksi ja kytke tasoja pois päältä, jäädytä, lukitse tai estä niiden tulostuminen.
keywords: taso, tasot, la, nykyinen taso, jäädytys, jäädytyksen poisto, lukitus, pois, päällä, tulostus, ei tulostusta, väri, color, colour, tasoasetukset, layiso, layuniso, eristä, layoff, layfrz, laymcur, layon, laythw, nimeä uudelleen, laymrg, yhdistä, laydel, poista taso
from: cd033591
---

## Mitä teet

Kolme tasoa, Walls, Doors ja Notes, kullakin oma väri. Piirrät kohteita kullekin ja siirrät niitä tasojen välillä.

## Tasot-paneeli

Tasot ovat vasemmalla paneelissa kohdassa {{ui:Layers}}. Kukin rivi näyttää vasemmalta oikealle:

- piste: täytetty **nykyiselle** tasolle, jonne uudet kohteet menevät;
- värinäyte;
- tason nimi;
- neljä painiketta: päällä/pois (silmä), jäädytys (lumihiutale), lukitus (riippulukko) ja tulostus (tulostin).

Jokaisessa piirustuksessa on taso nimeltä `0`. Kun kirjoitat `LA` ja painat {{key:Enter}}, siirryt paneeliin.

## Luo tasoja

1. Napsauta luettelon yläpuolella {{ui:New layer}}. Nimikenttä avautuu.
2. Kirjoita `Walls` ja paina {{key:Enter}} (tai napsauta {{ui:Add}}).

Tilarivillä lukee ”Lisättiin taso Walls ja tehtiin se nykyiseksi.” Uusi taso saa värin 7 (musta vaaleassa teemassa, valkoinen tummassa).

3. Napsauta uudelleen {{ui:New layer}}, kirjoita `Doors` ja paina {{key:Enter}}.
4. Napsauta uudelleen {{ui:New layer}}, kirjoita `Notes` ja paina {{key:Enter}}.

Notes on nyt nykyinen taso.

## Anna kullekin tasolle väri

1. Napsauta tasolle Walls kuuluvaa värinäytettä. Järjestelmäsi värinvalitsin avautuu.
2. Valitse väri ja vahvista.

Värinäyte ja kaikki tasolla Walls olevat kohteet, joiden väri on {{ui:By layer}}, muuttuvat.

:::note
Valittu väri, joka vastaa yhtä 255 CAD-vakioväristä, tallennetaan sen numerona. Muu väri säilyy CadCraftissa tarkasti, mutta tallennetaan DWG- tai DXF-tiedostoon lähimpänä vakiovärinä.
:::

## Piirrä tasolle

1. Napsauta luettelossa nimeä **Walls**. Sen piste täyttyy, ja tilarivillä lukee ”Nykyinen taso: Walls”.
2. Piirrä suorakulmio (`REC`). Se menee tasolle Walls.
3. Napsauta **Doors** ja piirrä kaari (`A`). Se menee tasolle Doors.

Voit myös valita nykyisen tason oikealla kohdassa {{ui:Current settings}} (kun mitään ei ole valittu), kohdasta {{ui:Layer}}.

## Siirrä kohteita toiselle tasolle

1. Valitse kohteet.
2. Valitse oikeanpuoleisessa paneelissa uusi taso kohdasta {{ui:Layer}}.

Ne siirtyvät tasolle ja saavat sen värin, jos niiden väri on {{ui:By layer}}.

## Pois, jäädytys, lukitus ja tulostus

| Painike | Mitä se tekee |
|---|---|
| Päällä/pois (silmä) | Piilottaa tason kohteet. Niitä ei voi nähdä, valita eikä tarttua niihin. |
| Jäädytä (lumihiutale) | Vaikutus CadCraftissa sama kuin pois. Pidetään erillään, koska muut ohjelmat käsittelevät niitä eri tavoin, ja asetus tallennetaan. |
| Lukitse (riippulukko) | Kohteet pysyvät näkyvinä ja niihin voi tarttua, mutta niitä ei voi valita eikä muuttaa. Sopii taustalle, jonka päälle piirrät. |
| Plottaus (tulostin) | Kun painike on painettuna, taso näkyy ruudulla mutta **jätetään pois tulosteista** ja PDF-tiedostoista. Käytä sitä apuviivoille ja omille muistiinpanoille. |

Vie hiiri painikkeen päälle nähdäksesi, mitä se tekee (”Kytke pois”, ”Jäädytä”, ”Lukitse”, ”Älä tulosta tätä tasoa”).

Nykyistä tasoa ei voi kytkeä pois: tilarivillä lukee ”Tämä on nykyinen taso. Tee ensin toinen taso nykyiseksi.” Tason nimeä napsauttaminen nykyiseksi kytkee sen myös päälle ja poistaa sen jäädytyksen.

Jokainen tasomuutos paneelista tai komennolla on yksi kumoamisvaihe: {{key:Mod+Z}} palauttaa sen.

## Työskentele tasoilla valitsemalla kohteita

Tason nimeä ei tarvitse tietää: valitse tasolla oleva kohde. Kirjoita komento tai avaa {{ui:Tools}} paneelin {{ui:Layers}} yläreunassa.

| Komento | Mitä se tekee |
|---|---|
| {{cmd:LAYISO}} | Valitse kohteet ja paina {{key:Enter}}: vain niiden tasot jäävät päälle, kaikki muut tasot kytketään pois. Jos nykyinen taso kytketään pois, yksi eristetyistä tasoista tulee nykyiseksi. |
| {{cmd:LAYUNISO}} | Kytkee päälle ne tasot, jotka viimeisin {{cmd:LAYISO}} kytki pois, ja palauttaa nykyisen tason, jonka se vaihtoi. |
| {{cmd:LAYOFF}} | Napsauta kohteita yksi kerrallaan: kunkin kohteen taso kytketään pois. Kirjoita `U` palauttaaksesi viimeisimmän, {{key:Enter}} lopettaaksesi. |
| {{cmd:LAYFRZ}} | Sama, mutta tasot jäädytetään. |
| {{cmd:LAYMCUR}} | Napsauta kohdetta: sen taso tulee nykyiseksi (ja se kytketään päälle ja sen jäädytys poistetaan). Jos yksi kohde on jo valittuna, sitä käytetään. |
| {{cmd:LAYON}} | Kytkee kaikki tasot päälle. |
| {{cmd:LAYTHW}} | Poistaa kaikkien tasojen jäädytyksen. |

Nykyistä tasoa ei koskaan kytketä pois tai jäädytetä näin: historia kertoo sen, ja voit tehdä toisen tason nykyiseksi komennolla {{cmd:LAYMCUR}} ensin. Lohkoviittausta valittaessa käytetään viittauksen omaa tasoa.

## Nimeä uudelleen, yhdistä ja poista tasoja

- {{cmd:RENAME}}: kirjoita `LA`, vanha nimi ja uusi nimi. Kaikki tasolla olevat kohteet seuraavat mukana. (`B` nimeää lohkon uudelleen samalla tavalla, ja kaikki sen viittaukset seuraavat mukana.)
- {{cmd:LAYMRG}}: napsauta kohdetta jokaisella yhdistettävällä tasolla (tai kirjoita `N` ja nimi), paina {{key:Enter}}, valitse sitten kohdetaso ja vastaa `Y`. Kohteet siirtyvät kohdetasolle (mallissa, arkeilla ja lohkojen sisällä), ja yhdistetyt tasot poistuvat.
- {{cmd:LAYDEL}}: valitse tasolla oleva kohde (tai kirjoita `N` ja sen nimi) ja vastaa `Y`. Taso poistuu **kaikkine sen kohteineen** kaikkialta. Tasoa 0, DEFPOINTS-tasoa ja nykyistä tasoa ei voi poistaa.

Jokainen on yksi kumoamisvaihe. Kaikki kolme ovat kohdassa {{ui:Tools}} paneelin {{ui:Layers}} yläreunassa.

1. Napsauta yhtä seinäviivaa, kirjoita `LAYISO` ja paina {{key:Enter}}. Vain Walls jää päälle.
2. Piirrä tai muuta tarvitsemaasi tasolla Walls.
3. Kirjoita `LAYUNISO` ja paina {{key:Enter}}. Doors ja Notes palaavat.

## Yleiset virheet

- **Uudet viivat menivät väärälle tasolle.** Tarkista, mikä piste on täytetty, ennen piirtämistä. Uusi taso tulee nykyiseksi heti, kun lisäät sen.
- **Kohdetta ei voi valita.** Sen taso on lukittu, pois tai jäädytetty.
- **Taso tulostuu yhä toisessa ohjelmassa.** DXF R12 ei voi tallentaa asetusta ”älä tulosta”. CadCraft säilyttää asetuksen itsellään, kun piirustuksessa on arkki, mutta muut ohjelmat tulostavat tason.
- **Tasonimet isoilla kirjaimilla tallennuksen jälkeen.** DXF R12 tallentaa nimet isoilla kirjaimilla, joten `Walls` palaa muodossa `WALLS` ja välilyönnit muuttuvat merkiksi `_`. Tallennettu DWG säilyttää nimet kirjoittamallasi tavalla.
- **Tason nimeäminen uudelleen, yhdistäminen tai poistaminen.** Käytä komentoja {{cmd:RENAME}}, {{cmd:LAYMRG}} tai {{cmd:LAYDEL}} (myös kohdassa {{ui:Tools}}): katso alla.

## Ryhmittele tasot

Pidä luettelo lyhyenä sijoittamalla tasot kansioihin, kuten Existing, Proposed ja Services. Kukin kansio taittuu kokoon, ja sen kytkimet kytkevät kaikki sen tasot päälle tai pois, jäädyttävät ne tai lukitsevat ne yhdessä. Nykyistä tasoa ei koskaan kytketä pois.

Valitse {{ui:Tools}}-kohdasta paneelissa {{ui:Layers}} {{ui:Add ready-made groups}}, jolloin saat pienen asuinrakentamisen valmiin ryhmän, {{ui:Group by name}} ryhmittääksesi tasot, joilla on sama etuliite (`E-Walls`, `E-Doors`), tai {{ui:New group}}. Vedä taso kansioon, tai käytä tasojen yläpuolella olevaa luetteloa nykyiselle tasolle. Kirjoita kohtaan {{ui:Find a layer}}, jotta luettelo kapenee. `LAYGROUP` (`LG`) tekee saman komentorivillä.

Itse tasot eivät muutu, joten muut CAD-ohjelmat näkevät ne tavallisena tasaisena luettelona. CadCraft tallentaa ryhmät tiedostoon.
