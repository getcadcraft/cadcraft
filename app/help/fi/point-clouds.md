---
title: Piirrä toteutuneet viivat pistepilven päälle
summary: Liitä laserskannaus (LAS, LAZ, E57, PLY, PCD, PTX, PTS tai XYZ) piirustuksen alle, leikkaa siitä pohjapiirroksen viipale ja piirrä seinät, ovet ja pilarit kohteen tartunnalla sen pisteisiin.
keywords: pistepilvi, pointcloudattach, pcattach, pointcloud, pc, laserskannaus, skannaus, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, toteutunut, toteutunut tila, mittaus, viipale, pohjapiirroksen leikkaus, solmu, tartunta, jäljitys, nykytila
from: b0e0aae5
---

## Mitä teet

Toteutunut pohjapiirros: skannatun rakennuksen seinät piirrettynä viivoina ja murtoviivoina täsmälleen skannauksen pisteisiin.

## Liitä pistepilvi

1. Aseta piirustuksen yksiköt ensin, jos niitä ei ole vielä asetettu (kenttä {{ui:Yksiköt}} kohdassa {{ui:Ominaisuudet}}, tai {{cmd:UNITS}}): CadCraft muuntaa pistepilven omista yksiköistään piirustuksen yksiköiksi.
2. Kirjoita {{cmd:POINTCLOUDATTACH}} (tai `PCATTACH`) ja paina {{key:Enter}}. Valitse tiedosto, jonka pääte on `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` tai `.xyz` (aihe pistepilvien formaateista kertoo, mitä kukin tuo mukanaan ja mitä skanneriohjelmasta kannattaa viedä). Tiedoston voi myös avata painikkeella {{ui:Avaa}}, pudottaa sen sivulle tai lähettää BIM-katselimesta komennolla {{ui:Jäljitä CadCraft-sovelluksessa}}.
3. `Pistepilven vasen alakulma`: paina {{key:Enter}} säilyttääksesi tiedoston omat koordinaatit (hankkeeseen rekisteröity skannaus asettuu piirustukseen oikein), tai napsauta kohta, johon sen vasen alakulma tulee.
4. Komentorivi kertoo, montako pistettä näkyy. Näkymä zoomaa pistepilveen; se on viivatyön alla, ja jokainen piste näkyy ylhäältä päin.

## Leikkaa pohjapiirroksen viipale ja jäljitä

1. Kirjoita {{cmd:POINTCLOUD}} (tai `PC`) ja valitse sitten {{ui:Viipale}} (S). Näkyviin tulee vain ohut kaista 1.2 m pistepilven alimman pisteen yläpuolelta: seinät, oviaukot ja pilarit näyttävät pohjapiirrokselta.
2. Korkeus (H) asettaa leikkauksen korkeuden ja Paksuus (T) sen paksuuden (piirustuksen yksiköissä). {{key:Enter}} lopettaa komennon.
3. Ota kohteen tartunta käyttöön ({{key:F3}}) ja valitse tartunnoista {{ui:Solmu}}. Piirrä komennolla {{cmd:LINE}} tai {{cmd:PLINE}}: kohdistin tarttuu viipaleen pisteisiin, ja niihin liittyy nimike ”Pistepilvi”. Piirustuksen omat päätepisteet, keskikohdat ja keskipisteet voittavat pistepilven, joten murtoviivan sulkeminen osuu sen ensimmäiseen pisteeseen.
4. Muuta leikkauksen korkeutta, jos haluat jäljittää toisen kerroksen, ja kytke viipale pois painamalla `S` uudelleen, jotta näet koko pistepilven.

## Lisäasetukset

{{cmd:POINTCLOUD}}-komennossa: Värit (C) värittää pisteet tiedoston värien, korkeuden, intensiteetin, LiDAR-luokan tai yhden värin mukaan; Pistekoko (SI) asettaa pisteen koon; Piilota tai näytä (V) piilottaa tai näyttää pistepilven; Zoomaa (Z) zoomaa siihen; Irrota (D) irrottaa sen.

3D-välilehdellä näkyy myös pistepilvi, jonka alin piste on maanpinnalla, samalla viipaleella.

:::note
Pistepilvi ei ole osa piirustusta: sitä ei tallenneta DWG- eikä DXF-tiedostoon, eikä kumoaminen muuta sitä. Liitä se uudelleen, kun avaat piirustuksen myöhemmin. Tiedostot luetaan tältä tietokoneelta; mitään ei lähetetä. Hyvin suuret skannaukset harvennetaan tasaisesti 2 miljoonaan pisteeseen. E57-tiedostoja avataan toistaiseksi enintään 6 miljoonaa pistettä ja 512 MB: vie suuremmat skannaukset LAS- tai LAZ-muodossa.
:::

## Tulostus

{{cmd:PLOT}} tulostaa pistepilven piirustuksen mukana viivatyön alla: mallin tulosteessa ({{ui:Kaikki}} sisältää pistepilven alueen) ja jokaisessa asettelun näkymäruudussa, PDF-, PNG- ja SVG-tiedostoon sekä tulostimelle lähetettävään tulosteeseen. Tulostuu se, mitä näytöllä näkyy: viipale, jos viipale on päällä, valitsemasi värit, ja piilotettuna, jos olet piilottanut sen. Paperilla pisteet muuttuvat pieniksi neliöiksi, ja kustakin neliöstä näkyy korkein piste; tulosteessa on enintään noin 400 000 neliötä (hyvin tiheä pistepilvi tulostuu suuremmilla neliöillä). Pistepilvi tulostetaan vain siihen piirustukseen, johon se liitettiin; sitä ei koskaan tulosteta itse paperitilaan, vaan vain näkymäruudun kautta.

## Useita skannauksia

Eri paikoista otetut skannaukset voidaan rekisteröidä yhteen kehykseen, tarkentaa ICP-menetelmällä ja viedä yhtenä LAS- tai E57-tiedostona: katso [Rekisteröi useita skannauksia yhteen](topic:register-scans).
