---
title: Karttatasot piirustuksen alla
summary: Näytä katukartat, ilmakuvat tai kuva maailmatiedostolla mallitilan alla, sijoitettuna piirustuksen koordinaatiston mukaan.
keywords: kartta, karttatasot, maplayers, ml, geomap, taustakartta, ilmakuva, satelliitti, laatat, xyz, wms, wmts, karttapalvelu, maailmatiedosto, koordinaatisto, epsg, state plane, utm, georeferointi, asemapiirros, sijainti, maantieteellinen sijainti, geodata, tallennettu, dwg, dxf
from: f103045f
---

## Mitä teet

Asemapiirros, joka on piirretty ilmakuvan tai katukartan päälle, kumpikin oikeaan paikkaansa.

## Kerro CadCraftille, missä piirustus on

1. Aseta piirustuksen yksiköt kohdassa {{ui:Properties}} › {{ui:Units}} (esimerkiksi jalat tai metrit).
2. Kirjoita {{cmd:MAPLAYERS}} (tai `ML`) ja paina {{key:Enter}}.
3. Kohdassa {{ui:Where the drawing is}} kirjoita nimi tai EPSG-koodi kenttään {{ui:Find a system}} (esimerkiksi `2277` tai `Texas Central`) ja valitse se kohdasta {{ui:System}}.
4. Jos piirustus on piirretty kyseisen koordinaatiston omilla koordinaateilla, jätä sijoitus arvoon 0. Jos ei, anna yksi piirustuspiste ({{ui:Drawing X}}, {{ui:Drawing Y}}), kohta, jossa se on karttaruudukolla ({{ui:Easting}}, {{ui:Northing}}), ja kuinka paljon piirustus on käännetty idästä ({{ui:Turned (°)}}).
5. Napsauta {{ui:Use this system}}.

## Lisää taso

1. Kytke päälle {{ui:Map layers from the internet}} valintaikkunan yläosassa. Siihen asti mitään palvelinta ei kysytä mistään; kun se on päällä, lisäämäsi palvelimet näkevät ruudulla olevan alueen ja internetosoitteesi, eivät koskaan piirustustasi.
2. Valitse kohdassa {{ui:Add a layer}}, mistä se tulee:
   - **Laatat (XYZ)**: laattaosoite, jossa on `{z}`, `{x}` ja `{y}`, nimi ja lähdemerkintä, jonka palveluntarjoaja vaatii.
   - **WMS**, **WMTS** tai **ArcGIS**: palvelun osoite, sitten {{ui:Hae tasot}} ja valitse yksi.
   - **Kuva**: PNG- tai JPEG-kuva maailmatiedostoineen (ja sen `.prj`-tiedostoineen, jos sellainen on).
3. Taso näkyy piirustuksen alla. Sen lähdemerkintä näkyy piirustuksen oikeassa alareunassa.

Jokaista luettelon tasoa voi piilottaa, tehdä läpinäkyvämmäksi tai vähemmän läpinäkyväksi, siirtää ylös tai alas tai poistaa.

Jokainen koordinaatiston tai tasojen muutos on yksi kumoamisvaihe: {{cmd:UNDO}} palauttaa sen.

## Tallentuu piirustukseen

Koordinaatisto ja tasoluettelo tallentuvat piirustukseen, kun tallennat sen DWG- tai DXF-muodossa, ja palautuvat, kun avaat sen uudelleen millä tahansa tietokoneella. Tiedostoista ladattuja kuvia ei tallenneta: lisää ne uudelleen avaamisen jälkeen. Kytkintä {{ui:Map layers from the internet}} ei tallenneta piirustukseen: se kuuluu tähän selaimeen, joten piirustus, jonka joku lähettää, ei pyydä palvelimilta mitään ennen kuin joku kytkee sen itse päälle.

Mitä muut ohjelmat näkevät:

| Tallennusmuoto | Piirustuksen sijainti | Karttatasot |
|---|---|---|
| DWG 2010, 2013 tai 2018, DXF 2000 | Kirjoitettu tavalla, jolla ohjelmat lukevat piirustuksen maantieteellisen sijainnin: koordinaatiston EPSG-koodi, yksi piirustuspiste ja sen sijainti karttaruudukolla, yksiköt ja pohjoissuunta. | Vain CadCraft |
| DWG 2000, 2004 tai 2007, DXF R12 | Vain CadCraft (CadCraft ilmoittaa siitä tallentaessa) | Vain CadCraft |

- **Tarkistettu:** ODA File Converter lukee sijainnin ilman virheitä, ja DXF-kirjasto (ezdxf) lukee EPSG-koodin ja sijoituksen tarkasti.
- **Ei vielä tarkistettu:** tunnistavatko muut piirto-ohjelmat koordinaatiston EPSG-koodista. Ohjelma, joka pitää omaa luetteloa koordinaatistoista muilla nimillä, voi näyttää piirustuksen ilman sijaintia.
- Muut ohjelmat näyttävät lohkoluettelossa lohkon nimeltä `CADCRAFT_GEO`. Se on CadCraftin oma kopio koordinaatistosta ja tasoista; sitä ei koskaan sijoiteta piirustukseen. Jätä se paikalleen.

## Muiden ohjelmien piirustukset

Kun toisen ohjelman piirustuksella on maantieteellinen sijainti, CadCraft lukee sen:

- Jos siinä on EPSG-koodi, {{ui:Where the drawing is}} näyttää kyseisen koordinaatiston, ja karttatasot sijoitetaan sen mukaan.
- Jos CadCraft ei tunne koordinaatistoa (toisen ohjelman oma nimi sille, paikallinen ruudukko tai mittakaavakerroin), sijaintia ei käytetä. Se säilytetään kuitenkin ja tallennetaan takaisin sellaisenaan, jotta toinen ohjelma löytää sen edelleen. Valitse koordinaatisto kohdassa {{ui:Where the drawing is}} korvataksesi sen.

:::note
Karttatasot piirretään vain ruudulle: niitä ei tulosteta. Käytä vain karttapalveluja, joiden ehdot sen sallivat, ja pidä niiden lähdemerkintä näkyvissä.
:::
