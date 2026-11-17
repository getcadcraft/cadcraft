---
title: Rekisteröi useita skannauksia yhdeksi
summary: Aseta eri paikoista otetut skannaukset yhteen koordinaatistoon valittujen pistepareiden tai kirjoitettujen kohteiden avulla, tarkenna ne ICP-menetelmällä, tallenna rekisteröinti projektina ja vie rekisteröity pistepilvi LAS- tai E57-tiedostona. Komento on REGISTERSCANS.
keywords: rekisteröi, rekisteröinti, skannaukset, pistepilvi, icp, iterative closest point, kohteet, pistoparit, jäykkä muunnos, kohdistus, yhdistä, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Mitä teet

Useat saman paikan skannaukset (kukin omasta skannerin paikastaan) alkavat omissa koordinaateissaan. Rekisteröi ne: anna jokaiselle skannaukselle yksi sijoitus, jotta ne kaikki ovat yhdessä koordinaatistossa. Tallenna se sitten projektina ja kirjoita rekisteröity pistepilvi yhdeksi LAS- tai E57-tiedostoksi.

## Sijoita skannaukset

1. Avaa valintaikkuna kirjoittamalla `REGISTERSCANS` (tai `REGSCAN`). {{ui:Lisää skannauksia…}} ottaa vastaan LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- tai XYZ-tiedostoja, tai voit pudottaa ne valintaikkunaan. Skannaukset, joissa on eri yksiköt, hylätään huomautuksella: muunna ensin yksi niistä.
2. Valitse {{ui:Siirrettävä skannaus}} ja {{ui:Sijoita vasten}}. Kuvassa näkyy jokainen skannaus kehyksessä nykyisessä tilassaan, yksi väri kullekin: {{ui:Pohjakuva}}, {{ui:Etu}} tai {{ui:Sivu}}. Vedä siirtääksesi kuvaa, zoomaa rullalla.
3. **Pistepareittain.** Napsauta {{ui:Valitse pari}}, valitse sitten piste siirrettävästä skannauksesta ja sama kohta toisesta skannauksesta (kulma, kohde tai pilarin jalka). Tee tämä vähintään kolme kertaa niin, että pisteet eivät ole samalla suoralla ja ovat kaukana toisistaan. Napsauta {{ui:Sijoita pareilla}}: skannaus sijoitetaan pienimmän neliösumman sovituksella, ja **Jäljelle jäävä** näyttää, kuinka paljon kukin pari vielä poikkeaa. Pari, jossa on suuri luku, on huono valinta: poista se ristillä ja sijoita uudelleen.
4. **Kohteittain.** Jos pisteen todelliset koordinaatit tunnetaan (mitatut kohteet), napsauta {{ui:Valitse, kirjoita sitten kohde}}, napsauta pistettä sen skannauksessa ja kirjoita kohteen X, Y ja Z riville. Parit ja kirjoitetut kohteet voi yhdistää vapaasti.

## Tarkenna ICP:llä

Parit antavat karkean sijoituksen. {{ui:Tarkenna}} siirtää skannausta, kunnes sen pinnat osuvat toisen skannauksen pintoihin: ensin **piste pisteeseen**, sitten **piste tasoon**. Taulukossa on jokainen vaihe virheineen ja täsmänneiden pisteiden määrineen; sen yllä oleva rivi piirtää virheen pienenemisen. {{ui:Lopeta}} päättää ajon käynnissä olevan vaiheen jälkeen ja säilyttää saavutetun tuloksen. {{ui:Kumoa}} peruu koko ajon (tai viimeisen sijoituksen); {{ui:Palauta}} palauttaa skannauksen tiedoston koordinaatteihin.

Pitääkseen työn nopeana kannettavalla ICP toimii pisteiden harvennetulla osuudella ({{ui:Käytetyt pisteet}}, 5,000 to 60,000) ja jättää huomiotta täsmäykset, jotka ovat kauempana kuin {{ui:Suurin täsmäysetäisyys}} (oletuksena 5% skannauksen koosta, pienenee asettumisen myötä). Se tarvitsee ensin karkean sijoituksen: skannaukset, jotka tuskin menevät päällekkäin, ilmoittavat, ettei niitä voi täsmätä. Pinnat, jotka ovat vain tasaisia tai vain suoria, eivät voi korjata sijaintiaan niiden suuntaisesti; lisää siinä tapauksessa pareja.

## Tallenna ja vie

- {{ui:Tallenna projekti}} kirjoittaa pienen `.ccscans.json`-tiedoston: kunkin skannauksen nimen, koon ja sen ensimmäisten 64 KB:n tunnisteen sekä muunnoksen. Siinä ei ole pisteitä. {{ui:Avaa projekti…}} etsii skannaustiedostot näiden viittausten perusteella (tiedostot on lisättävä ensin) ja palauttaa jokaisen muunnoksen.
- {{ui:Vie LAS}} ja {{ui:Vie E57}} kirjoittavat yhden tiedoston, jossa jokainen skannaus on rekisteröidyssä paikassaan. Alkuperäisiin pisteisiin ei koskaan kirjoiteta; muunnos sovelletaan vientivaiheessa. Kun {{ui:Lue kaikki pisteet tiedostoista}} on päällä, jokainen tiedosto luetaan uudelleen jokaista pistettä varten (enintään 20 miljoonaa per skannaus); kun se on pois, kirjoitetaan vain katseluikkunassa näkyvät pisteet.
- {{ui:Näytä rekisteröity pilvi}} (CadCraft) kirjoittaa LAS-tiedoston ja liittää sen piirustuksen alle sen omissa koordinaateissa, kuten minkä tahansa pilven.

:::note
Mitään ei lähetetä. Rekisteröinti tehdään tiedostojen omissa yksiköissä ja säilyttää millimetrit: LAS kirjoitetaan mittakaavalla, joka sopii (aina 0.1 mm:iin asti), E57 kaksinkertaisella tarkkuudella. Koordinaattijärjestelmä siirtyy LAS-tiedostoon vain silloin, kun jokainen skannaus nimeää saman EPSG-koodin. E57-kirjoittaja on oma; sen tiedostot tarkistetaan lukemalla ne takaisin tällä lukijalla ja libE57Format-kirjastolla.
:::
