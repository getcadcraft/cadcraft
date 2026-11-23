---
title: Järjestä piirustus tasoilla
summary: Luo tasoja seinille, ovillle ja merkinnöille, aseta värejä, tee taso nykyiseksi ja kytke tasoja pois päältä, jäädytä, lukitse tai estä tulostus.
keywords: taso, tasot, la, nykyinen taso, jäädytys, sulatus, lukitus, pois, päällä, tulostus, ei tulostusta, väri, tason ominaisuudet, layiso, layuniso, eristä, layoff, layfrz, laymcur, layon, laythw, nimeä uudelleen, laymrg, yhdistä, laydel, poista taso
from: ba9f0617
---

## Mitä teet

Kolme tasoa, Walls, Doors ja Notes, kullakin oma väri, ja kohteita piirrettynä kullekin ja siirrettynä tasojen välillä.

## Tasopaneeli

Tasot ovat vasemmalla puolella paneelissa {{ui:Tasot}}-kohdan alla. Jokainen rivi näyttää vasemmalta oikealle:

- pisteen: täytetty nykyiselle tasolle, johon uudet kohteet menevät;
- värinäytteen;
- tason nimen;
- neljä painiketta: päällä/pois (silmä), jäädytys (lumihiutale), lukitus (riippulukko) ja tulostus (tulostin).

Jokaisessa piirustuksessa on taso nimeltä `0`. Kirjoita `LA` ja paina {{key:Enter}} siirtyäksesi paneeliin.

## Luo tasoja

1. Napsauta luettelon yläpuolella {{ui:Uusi taso}}-kohtaa. Nimiruutu aukeaa.
2. Kirjoita `Walls` ja paina {{key:Enter}} (tai napsauta {{ui:Lisää}}).

Tilarivillä lukee ”Lisättiin taso Walls ja tehtiin se nykyiseksi.” Uusi taso saa värin 7 (musta vaalealla teemalla, valkoinen tummalla).

3. Napsauta {{ui:Uusi taso}} uudelleen, kirjoita `Doors` ja paina {{key:Enter}}.
4. Napsauta {{ui:Uusi taso}} uudelleen, kirjoita `Notes` ja paina {{key:Enter}}.

Notes on nyt nykyinen.

## Anna jokaiselle tasolle väri

1. Napsauta Walls-rivin värinäytettä. Järjestelmäsi värivalitsin aukeaa.
2. Valitse väri ja vahvista.

Näyte ja kaikki Walls-tasolla olevat kohteet, joiden väri on {{ui:Tason mukaan}}, muuttuvat.

:::note
Valittu väri, joka vastaa yhtä 255 vakio-CAD-väristä, tallennetaan sen numerona. Muut värit säilytetään CadCraftissa tarkasti, mutta DWG- tai DXF-tiedostoon ne tallennetaan lähimpänä olevana vakiovärinä.
:::

## Piirrä tasolle

1. Napsauta listassa nimeä **Walls**. Sen piste täyttyy, ja tilarivillä lukee ”Nykyinen taso: Walls”.
2. Piirrä suorakulmio (`REC`). Se menee tasolle Walls.
3. Napsauta **Doors**-riviä ja piirrä kaari (`A`). Se menee tasolle Doors.

Voit valita nykyisen tason myös oikealla olevasta {{ui:Nykyiset asetukset}}-kohdasta (kun mitään ei ole valittuna), kohdassa {{ui:Taso}}.

## Siirrä kohteita toiselle tasolle

1. Valitse kohteet.
2. Valitse oikeanpuoleisessa paneelissa uusi taso kohdasta {{ui:Taso}}.

Ne siirtyvät tälle tasolle ja ottavat sen värin, jos niiden väri on {{ui:Tason mukaan}}.

## Pois, jäädytys, lukitus ja tulostus

| Painike | Mitä se tekee |
|---|---|
| Päällä/pois (silmä) | Piilottaa tason kohteet. Niitä ei voi nähdä, valita tai tarttua niihin. |
| Jäädytys (lumihiutale) | Sama vaikutus kuin pois päältä CadCraftissa. Pidetään erillään, koska muut ohjelmat käsittelevät niitä eri tavoin, ja asetus tallennetaan. |
| Lukitus (riippulukko) | Kohteet pysyvät näkyvissä ja niihin voi tarttua, mutta niitä ei voi valita tai muuttaa. Hyvä tausta, jonka päälle piirrät. |
| Tulostus (tulostin) | Kun painike on painettu, taso näkyy näytöllä mutta **jätetään pois** tulosteista ja PDF-tiedostoista. Käytä sitä apuviivoihin ja omiin muistiinpanoihin. |

Vie hiiri painikkeen päälle nähdäksesi sen tekstin: ”Sammuta taso”, ”Jäädytä”, ”Lukitse” tai ”Älä tulosta tätä tasoa”.

Et voi sammuttaa nykyistä tasoa: tilarivillä lukee ”Tämä on nykyinen taso. Tee ensin toinen taso nykyiseksi.” Tason nimen napsauttaminen nykyiseksi kytkee sen myös päälle ja sulattaa sen.

Jokainen tasomuutos, paneelissa tai komennolla, on yksi kumoamisaskel: {{key:Mod+Z}} palauttaa sen.

## Työskentele tasoilla valitsemalla kohteita

Sinun ei tarvitse tietää tason nimeä: valitse kohde sillä. Kirjoita komento tai avaa {{ui:Työkalut}} {{ui:Tasot}}-paneelin yläosassa.

| Komento | Mitä se tekee |
|---|---|
| {{cmd:LAYISO}} | Valitse kohteet ja paina {{key:Enter}}: vain niiden tasot jäävät päälle, kaikki muut tasot sammutetaan. Jos nykyinen taso sammutetaan, yksi eristetyistä tasoista tulee nykyiseksi. |
| {{cmd:LAYUNISO}} | Kytkee takaisin päälle tasot, jotka viimeisin {{cmd:LAYISO}} sammutti, ja antaa takaisin nykyisen tason, jonka se vaihtoi. |
| {{cmd:LAYOFF}} | Napsauta kohteita peräkkäin: jokaisen kohteen taso sammutetaan. Kirjoita `U` ottaaksesi viimeisimmän takaisin, {{key:Enter}} lopettaaksesi. |
| {{cmd:LAYFRZ}} | Sama, mutta jäädyttää kunkin tason. |
| {{cmd:LAYMCUR}} | Napsauta kohdetta: sen taso tulee nykyiseksi (ja se kytketään päälle ja sulatetaan). Jos yksi kohde on jo valittu, sitä käytetään. |
| {{cmd:LAYON}} | Kytkee kaikki tasot päälle. |
| {{cmd:LAYTHW}} | Sulattaa kaikki tasot. |

Nykyistä tasoa ei koskaan sammuteta tai jäädytetä näin: historia kertoo siitä, ja voit tehdä toisen tason nykyiseksi komennolla {{cmd:LAYMCUR}} ensin. Lohkoviittauksen valitseminen käyttää viittauksen omaa tasoa.

## Nimeä uudelleen, yhdistä ja poista tasoja

- {{cmd:RENAME}}: kirjoita `LA`, vanha nimi ja uusi nimi. Jokainen tasolla oleva kohde seuraa. (`B` nimeää lohkon uudelleen samalla tavalla, jokaisen viittauksen kanssa.)
- {{cmd:LAYMRG}}: napsauta kohdetta kullakin tasolla, jonka haluat yhdistää (tai kirjoita `N` ja nimi), paina {{key:Enter}}, valitse kohdetaso ja vastaa `Y`. Kohteet siirtyvät kohdetasolle, mallissa, arkeilla ja lohkojen sisällä, ja yhdistetyt tasot poistuvat.
- {{cmd:LAYDEL}}: valitse kohde tasolla (tai `N` ja nimi) ja vastaa `Y`. Taso poistuu **kaikkine siinä olevine kohteineen** kaikkialta. Taso 0, DEFPOINTS ja nykyinen taso eivät ole poistettavissa.

Jokainen on yksi kumoamisaskel. Kaikki kolme ovat {{ui:Työkalut}}-valikossa {{ui:Tasot}}-paneelin yläosassa.

1. Napsauta yhtä seinäviivaa, kirjoita `LAYISO` ja paina {{key:Enter}}. Vain Walls jää päälle.
2. Piirrä tai muuta tarvitsemaasi Walls-tasolla.
3. Kirjoita `LAYUNISO` ja paina {{key:Enter}}. Doors ja Notes palaavat.

## Yleisiä virheitä

- **Uudet viivat menivät väärälle tasolle.** Tarkista, mikä piste on täytetty ennen piirtämistä. Uusi taso tulee nykyiseksi heti, kun lisäät sen.
- **Kohde ei valitse.** Sen taso on lukittu, pois päältä tai jäädytetty.
- **Taso tulostuu yhä toisessa ohjelmassa.** DXF R12 ei voi tallentaa ”älä tulosta” -asetusta. CadCraft säilyttää asetuksen itsellään, kun piirustuksessa on arkki, mutta muut ohjelmat tulostavat tason.
- **Tasonimet isoilla kirjaimilla tallennuksen jälkeen.** DXF R12 tallentaa nimet isoilla kirjaimilla, joten `Walls` palaa muodossa `WALLS`, ja välilyönnit muuttuvat `_`:ksi. Tallennettu DWG säilyttää nimet kirjoittamallasi tavalla.
- **Tason nimeäminen uudelleen, yhdistäminen tai poistaminen.** Käytä {{cmd:RENAME}}-, {{cmd:LAYMRG}}- tai {{cmd:LAYDEL}}-komentoa (myös {{ui:Työkalut}}-valikossa): katso alla.

## Ryhmitä tasot

Pidä luettelo lyhyenä laittamalla tasoja kansioihin, kuten Olemassa oleva, Suunniteltu ja Palvelut. Jokainen kansio taittuu, ja sen kytkimet kytkevät kaikki sen tasot päälle tai pois, jäädyttävät ne tai lukitsevat ne yhdessä. Nykyistä tasoa ei koskaan sammuteta.

{{ui:Työkalut}}-valikossa Tasot-paneelissa valitse {{ui:Lisää valmiit ryhmät}} pienen asuinrakennustyön valmiille joukolle, {{ui:Ryhmitä nimen mukaan}} ryhmitelläksesi tasot, joilla on sama etuliite (`E-Walls`, `E-Doors`), tai {{ui:Uusi ryhmä}}. Vedä taso kansioon tai käytä nykyisen tason luettelon yläpuolella olevaa listaa. Kirjoita {{ui:Etsi taso}}-kenttään rajataksesi luetteloa. `LAYGROUP` (`LG`) tekee saman komentoriviltä.

Nimetäksesi ryhmän uudelleen kaksoisnapsauta sen nimeä (tai valitse se ja paina {{key:F2}}), kirjoita uusi nimi ja paina {{key:Enter}}; {{key:Esc}} säilyttää vanhan, ja {{cmd:UNDO}} palauttaa sen. {{ui:Uusi ryhmä}} on {{ui:Työkalut}}-valikossa Tasot-paneelissa.

Tasot itse eivät muutu, joten muut CAD-ohjelmat näkevät ne tavallisena tasaisena luettelona. CadCraft säilyttää ryhmät tiedostossa.
