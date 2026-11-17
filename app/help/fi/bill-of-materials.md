---
title: Määräluettelot vyöhykkeittäin
summary: Merkitse piirustuksen alueet vyöhykkeiksi ja sijoita kullekin taulukko, joka laskee sen sisällä olevat lohkot. Taulukot seuraavat piirustusta työskennellessäsi, ja valitset, mitkä sarakkeet kukin näyttää.
keywords: määräluettelo, BOM, osaluettelo, luettelo, vyöhyke, alue, taulukko, laskenta, attribuutti, sarakkeet, kohdenumero, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

**Vyöhyke** on nimetty alue piirustuksessa. **Määräluettelotaulukko** luettelee yhden vyöhykkeen tai koko piirustuksen sisällä olevat kohteet: jokaisen lohkon määrineen ja attribuuttiarvoineen. Piirustuksessa voi olla niin monta vyöhykettä ja taulukkoa kuin tarvitset. Yhdellä vyöhykkeellä voi olla useita taulukoita, joilla on eri sarakkeet.

Työkalut ovat {{ui:Lohkot}}-välilehdellä kohdassa {{ui:Määräluettelo}}, lohkoryhmän {{ui:Lisää}}-valikossa. Ne voi myös kirjoittaa.

## Tee vyöhyke

Kirjoita {{cmd:BOMZONE}} ja joko

- napsauta kahta vastakkaista kulmaa suorakulmiota varten,
- valitse {{ui:Monikulmio}}, napsauta jokaista kulmaa ja sulje vyöhyke painamalla {{key:Enter}}, tai
- valitse {{ui:Kohde}} ja valitse suljettu monirivi, ympyrä, ellipsi tai suljettu spline. Sen ääriviiva kopioidaan, ja kohde pysyy ennallaan.

Kirjoita sitten vyöhykkeen nimi. Vyöhyke piirretään katkoviivana, ja nimi on sen vasemman yläkulman yläpuolella. Vyöhyke on tasolla `BOM-ZONES`, jota ei tulosteta. Kytke tulostus päälle tälle tasolle, jos haluat vyöhykkeet paperille.

Vyöhyke on tavallinen suljettu monirivi: siirrä sitä, venytä tai vedä sen kahvoja, ja nimi seuraa mukana. Nimen muuttamiseksi muokkaa nimen tekstiä tai käytä {{cmd:BOMZONE}}-komentoa ja {{ui:Nimeä uudelleen}}-vaihtoehtoa. {{ui:Vyöhykkeet}} luettelee jokaisen vyöhykkeen ja kuinka monta taulukkoa sillä on.

## Sijoita taulukko

Kirjoita {{cmd:BOMTABLE}} (tai {{cmd:BOM}}), valitse vyöhykkeen ääriviiva tai sen nimi, anna tekstin korkeus ja napsauta kohtaa, johon taulukon vasen yläkulma menee. Paina {{key:Enter}} valitsematta vyöhykettä tai valitse {{ui:Koko}}, jos haluat taulukon koko piirustukselle.

Uusi taulukko näyttää kohdenumeron, määrän, lohkon nimen ja sarakkeen jokaiselle attribuutille, jonka lohkot kantavat. Ensimmäiset kuusi attribuuttia näkyvät, muut ovat tarjolla ilman valintaa. Saman nimiset lohkot samoilla attribuuttiarvoilla jakavat rivin.

## Mikä on sisällä

- Lohko kuuluu siihen vyöhykkeeseen, jonka sisällä on sen **lisäyspiste**.
- Viiva, kaari, ympyrä, monirivi, ellipsi, spline tai viivoitus kuuluu **kokonaisena** siihen vyöhykkeeseen, jonka sisällä on sen ulottuvuuksien keskikohta (viivalla sen keskipiste). Sen pituutta ei leikata vyöhykkeen reunasta.
- Reunalla oleva piste on sisällä.
- Vyöhykkeet voivat mennä päällekkäin. Jokainen vyöhyke laskee itsensä, joten päällekkäisyydessä oleva kohde on molemmissa taulukoissa.

## Taulukot seuraavat piirustusta

Kun lisäät, siirrät, kopioit tai poistat lohkon, muokkaat attribuuttia tai muotoilet uudelleen tai siirrät vyöhykettä, jokainen taulukko piirretään uudelleen samassa vaiheessa. Kumoaminen palauttaa muokkauksesi ja taulukon muutoksen yhdessä.

Estääksesi taulukkoa seuraamasta, valitse {{ui:Jäädytetty}} sen asetuksissa. Jäädytetty taulukko muuttuu vain, kun muokkaat sen asetuksia tai kirjoitat {{cmd:BOMUPDATE}}-komennon, joka päivittää kaikki taulukot heti.

## Valitse sarakkeet

Valitse taulukko ja kirjoita {{cmd:BOMEDIT}}. Valintaikkunassa:

- **Sarakkeet**: valitse näytettävät sarakkeet (kohde, määrä, nimi, taso, pituus, pinta-ala, huomautukset ja jokainen attribuutti), kirjoita oma otsikko mihin tahansa niistä ja siirrä niitä ylös tai alas.
- {{ui:Ryhmittele rivit}}: lohkon nimi ja attribuuttiarvot, pelkkä lohkon nimi, taso tai yksi attribuutti. Yhdistetyllä rivillä arvo, joka vaihtelee lohkojen välillä, lukee ”vaihtelee”.
- {{ui:Lajittele}} mikä tahansa sarake, nouseva tai laskeva.
- {{ui:Otsikko}}, {{ui:Näytä otsikko}} ja {{ui:Yhteensärivi}}.
- {{ui:Laske viivapiirros tasoittain}} lisää yhden rivin tasoa kohden. Rivillä on kohteiden määrä, niiden kokonaispituus ja suljetuille muodoille kokonaispinta-ala piirustusyksiköissä.
- **Huomautukset**: valitse huomautussarake ja kirjoita huomautus mille tahansa taulukon rivillä valintaikkunan alareunassa.

Jokainen taulukko säilyttää omat valintansa.

## Kohdenumerot

Rivi säilyttää kohdenumeronsa niin kauan kuin se on taulukossa. Uusi rivi saa seuraavan vapaan numeron. Annettua numeroa ei käytetä uudelleen, joten numeroon viittaavat merkit ja muistiinpanot pysyvät oikeina. {{ui:Numeroi kohteet uudelleen}} numeroi rivit alkaen 1 näkyvässä järjestyksessä.

Rivi tunnistetaan sen ryhmittelyn mukaan. Jos muutat, miten rivit ryhmitellään, tai muutat ryhmittelyn käyttämää attribuuttiarvoa, rivi lasketaan uudeksi riviksi.

## Vienti ja muut ohjelmat

{{cmd:BOMEXPORT}} tai {{ui:Vie CSV}} valintaikkunassa tallentaa taulukon .csv-tiedostona laskentataulukkoon.

DWG- tai DXF-tiedostossa taulukko on tavallinen lohko viivoja ja tekstiä. Muut ohjelmat näyttävät ja tulostavat sen piirretyn kaltaisena. Siellä se ei ole taulukko-objekti, eikä se päivity muissa ohjelmissa. Yhteys vyöhykkeeseen säilytetään tiedostossa laajennustietona, jonka CadCraft lukee takaisin. Kun avaat piirustuksen uudelleen CadCraftissa, taulukko on taas elävä. R12-DXF-tiedosto piirustuksesta, jossa ei ole arkkia, ei säilytä vyöhykkeen tason asetusta ”ei tulosteta”.

Taulukon räjäyttäminen muuttaa sen irrallisiksi viivoiksi ja tekstiksi ja katkaisee yhteyden.
