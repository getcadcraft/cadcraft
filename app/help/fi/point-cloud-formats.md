---
title: Pistepilvimuodot, mitä liitetään ja mitä viedä
summary: Mitkä laserskannaustiedostot liittyvät piirustuksen alle, mitkä ovat skannerivalmistajan omia muotoja, ja mitä viedä skannerin ohjelmistosta, jotta skannaus liittyy tähän.
keywords: pistepilvi, pointcloudattach, pcattach, laserskannaus, skannaus, muodot, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, vienti, ei voi avata, ei luettu
from: 20a5f4ee
---

## Mitä liitetään tässä

Liitä nämä komennolla {{cmd:POINTCLOUDATTACH}}, painikkeella {{ui:Open}} (Avaa) tai pudottamalla ne sivulle. Katso aihe toteutuneiden viivojen jäljittämisestä pistepilven päälle.

| Muoto | Pääte | Mitä luetaan |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: pisteet, värit, intensiteetti, LiDAR-luokat, koordinaattijärjestelmä ja sen yksiköt. LAZ enintään 1 GB. |
| E57 | `.e57` | Jokainen skannaus tiedostossa, kukin asemansa mukaan sijoitettuna. Värit tai intensiteetti, kun tiedostossa ei ole värejä. Metriä. Kuvat tiedostossa jätetään pois, ja siitä ilmoitetaan. Toistaiseksi enintään 6 miljoonaa pistettä ja 512 MB: vie suuremmat skannaukset LAS- tai LAZ-muotoon. |
| PLY | `.ply` | Teksti ja binääri (molemmat tavujärjestykset): kärkipisteiden x, y ja z, värit ja intensiteetti. Pinnat jätetään pois, ja siitä ilmoitetaan. |
| PCD | `.pcd` | Teksti ja binääri: x, y ja z, pakatut tai erilliset värit, intensiteetti. Pakattuja PCD-tiedostoja ei vielä lueta: tallenna ne binäärinä tai tekstinä. |
| PTX | `.ptx` | Yksi tai useampi skannaus, kukin omalla muunnoksellaan sijoitettuna. Pisteet, joita skanneri ei mitannut, jätetään pois. Metriä. |
| PTS, XYZ | `.pts`, `.xyz` | Teksti: x, y ja z. Intensiteetti ja värit, kun sarakkeet ovat mukana. |

## Tiedostot, joita vain skannerin ohjelmisto lukee

Osa skannaustiedostoista on skannerivalmistajan omia muotoja, joille ei ole julkaistua kuvausta eikä avointa lukijaa. CadCraft ei voi lukea niitä. Liittäminen kertoo, mikä tiedosto on, ja mitä komentoriviltä tehdään. Vie skannaus valmistajan ohjelmistosta E57- tai LAS-muodossa (tai PTX- tai PTS-muodossa), ja liitä sitten viety tiedosto.

| Tiedosto | Pääte | Vie tästä |
|---|---|---|
| ReCap-projekti | `.rcp` | ReCap: avaa projekti ja vie se. Projekti vain osoittaa skannauksiinsa, joten pelkkä `.rcp`-tiedoston kopiointi ei anna pisteitä. |
| ReCap-skannaus | `.rcs` | ReCap: avaa projekti, johon skannaus kuuluu, ja vie se. |
| FARO-skannaus | `.fls` | FARO SCENE. |
| Leica-skannaus | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-skannaus | `.tzf` | Trimble RealWorks tai Trimble Business Center. |
| Z+F-skannaus | `.zfs` | Z+F LaserControl. |

:::tip
Kun vienti kysyy muotoa, LAS tai LAZ säilyttää kaiken, mitä CadCraft käyttää (värit, intensiteetin, luokat, koordinaattijärjestelmän ja sen yksiköt), pienimmässä tiedostossa.
:::

## Miksi näitä tiedostoja ei lueta

Niitä muotoja ei ole julkaistu. Ainoa tapa lukea ne on kunkin valmistajan oma ohjelmistokirjasto sen omilla ehdoilla. CadCraft lukee vain muotoja, joita se osaa lukea omalla koodillaan tietokoneellasi. Skannausta ei siis tarvitse lähettää minnekään liittämistä varten.
