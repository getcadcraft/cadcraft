---
title: Lähetä piirustus laserille
summary: Avaa Laser-paneeli, valitse mitä kukin taso tekee (leikkaus, naarmutus, kaiverrus, täyttö, kuva), esikatsele pään liikkeet, tallenna GRBL-laser-tilan G-koodi tai lähetä se selaimesta työn kehystämisen jälkeen.
keywords: laser, laserleikkuri, laserkaiverrus, GRBL, G-koodi, gcode, kaiverrus, täyttö, dither, kuvakaiverrus, naarmutus, leikkaus, Web Serial, kehystä työ, teho, nopeus, kierrokset, LASER, LASERCUT, CNC
from: 72b56db0
---

{{ui:Laser}}-paneeli muuttaa piirustuksen tasot ohjelmaksi laserille, joka käyttää GRBL-ohjausta (useimmat harrastus- ja pienyrityskäyttöön tarkoitetut diodi- ja CO2-ohjaimet). Kirjoita `LASER` (tai `LASERCUT`) ja paina {{key:Enter}}, tai valitse {{ui:Laser…}} ryhmän {{ui:Näkymä}} valikosta {{ui:Lisää}}. Valintanauhatyyleissä se on {{ui:Tiedosto}}-valikossa ja {{ui:Plottaa}}-painikkeen vieressä. Paneeli aukeaa piirustuksen päälle ja pysyy auki piirtämisen ajan: esikatselu seuraa jokaista muutosta.

:::warning
Kokeile jokainen asetus ensin koemateriaalilla, käytä laserin sopivia silmäsuojaimia, pidä kansi suljettuna siellä, missä sellainen on, äläkä koskaan jätä käynnissä olevaa laseria valvomatta. Tason alkuarvot ovat paikanpitäjiä, eivät suosituksia millekään materiaalille.
:::

## Mitä lähetetään

Paneeli lukee mallin (ei arkkeja) tasoilta, jotka ovat päällä eivätkä jäädytettyjä:

- Viivat, kaaret, ympyrät, murtoviivat (kaarisegmentit pysyvät kaarina), ellipsit ja splinet. Muoto, joka päättyy samaan kohtaan kuin alkaa, lasketaan suljetuksi.
- Lohkot puretaan osiin: lohkon sisällä tasolla 0 oleva kohde kulkee lohkoviittauksen tason mukana.
- Viivoitus lähettää rajansa, joten **Täytä muodot** -tasolla oleva viivoitettu logo täytetään.
- Kuva (`IMAGEATTACH`) kaiverretaan tasolle, jonka asetus on **Kaiverra kuva**, kun se on suorassa (ei kierrettynä tai vinossa) ja sen tiedosto on auki CadCraft-sovelluksessa.
- Tekstejä, mittoja, viitenuolia, pisteitä ja apuviivoja ei lähetetä; paneeli kertoo, montako jätettiin pois. Tekstin kaivertamiseksi piirrä kirjaimet muotoina tai viivoita ne.

Koot lähetetään millimetreinä piirustuksen yksiköistä (`UNITS`): tuumissa oleva piirustus kerrotaan luvulla 25.4. Piirustus, jolle ei ole asetettu yksiköitä, lähetetään niin, että yksi yksikkö on yksi millimetri. Lähetä osa piirustuksesta valitsemalla {{ui:Vain valitut kohteet}}.

## Valitse, mitä kukin taso tekee

Jokainen taso, jolla on jotain, on oma rivinsä. {{ui:Tekee}} asettaa sen tilaan **Leikkaus**, **Naarmutus**, **Kaiverra viivat**, **Täytä muodot**, **Kaiverra kuva** tai **Ei lähetetä**, ja sille voidaan asettaa {{ui:Teho %}}, {{ui:Nopeus mm/min}} ja kierrosten määrä ({{ui:Kierrokset}}).

Jokainen muutos on yksi kumoamisvaihe, ja se tallennetaan piirustukseen: DWG (jokainen CadCraft-sovelluksen tallentama versio) ja DXF säilyttävät asetukset, joten piirustus avautuu niiden kanssa seuraavalla kerralla. Muut ohjelmat avaavat tiedoston kuten ennenkin; ne näkevät yhden käyttämättömän lohkon nimeltä CADCRAFT_LASER (sen tyhjentäminen siellä poistaa asetukset).

- **Täytä muodot** polttaa suljettujen muotojen sisäpuolen viivoina, joiden väli on {{ui:Riviväli}}, {{ui:Kulma}}-kulmassa, molempiin suuntiin tai yhteen. Ylikulku varmistaa, että pää on vauhdissa, kun laser syttyy. Ristiviivoitus lisää toisen kierroksen 90°:n kulmassa. Muoto, jossa on reikä, jää reiästä auki.
- **Kaiverra kuva** muuttaa kuvan pisteiksi (Floyd–Steinberg, Atkinson, järjestetty tai pelkkä mustavalkoinen kynnysarvolla) tai, kun *Harmaasävyt* on valittu, muuttuvaksi tehoksi.
- Järjestys: ensin kuvat ja täytöt, sitten viivakaiverrus, sitten naarmutukset ja viimeiseksi leikkaukset, jotta leikattava osa ei liiku kaiverruksen aikana. Yhden tason sisällä polut kulkevat **sisimmät ensin** (reikä ennen levyä, jonka sisällä se on), ja seuraavaksi lähin.

## Esikatsele ja tallenna

Esikatselu piirtää, mitä pää tekee: polttavat viivat värillä, nopeat siirrot harmaalla ja vihreä laatikko kaiken polttavan ympärillä. Sen alapuolella ovat koko, polton pituus ja aika-arvio (ilman kiihdytystä; todellinen kone vie kauemmin). {{ui:Tallenna G-koodi…}} kirjoittaa GRBL-laser-tilan G-koodin: `$32=1`, `M4` (tai `M3`) S-arvoilla, `G0`- ja `G1`-siirrot, `M5` lopussa. X0 Y0 on työn vasen alakulma, ellei valita piirustuksen origoa; aseta koneen työnollapiste siihen.

## Lähetä selaimesta

Chrome- ja Edge-selaimissa {{ui:Yhdistä…}} kysyy laserin USB-porttia. Mitään ei yhdistetä eikä lähetetä ennen kuin jotakin painiketta painetaan. Paina ensin {{ui:Kehystä työ}}: pää kulkee työn laatikon reunoja pitkin laser **pois päältä** (tai osoitinta varten asettamallasi matalalla teholla), jotta näkyy, mihin se polttaa. Vasta sen jälkeen {{ui:Lähetä työ}} aktivoituu, ja se sammuu, jos jotakin muutetaan. {{ui:Tauko}} pitää pään paikallaan, {{ui:Lopeta}} pysäyttää sen, nollaa ohjaimen (laser sammuu) ja lähettää `M5`. Missä Web Serial puuttuu (Firefox, Safari ja CadCraft Studio, jossa Web Serial ei vielä ole), paneeli tarjoaa vain tallennusta: tallenna G-koodi ja lähetä se laserin omalla ohjelmalla.

## Ei vielä toteutettu

Ei vielä toteutettu: muiden ohjainten formaatit (Ruida, Marlin-laserit, valmistajakohtaiset tiedostot), tabit ja lead-in-viivat, kerfin siirto, materiaalikirjastot, pyörivä ja Z-akseli, kameran kohdistus, teksti ääriviivoina.
