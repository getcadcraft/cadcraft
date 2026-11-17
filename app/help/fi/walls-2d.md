---
title: Piirrä älykkäät 2D-seinät, ovet ja ikkunat
summary: Piirrä seinät polylinjan tapaan, liitä ne siististi ja lisää ovia ja ikkunoita, jotka liikkuvat seinän mukana. Kaikki 2D, ilman 3D-mallia.
keywords: seinä, seinät, WALL, WA, ovi, DOOR, DR, ikkuna, WINDOW, WN, DELOPENING, älykäs seinä, pohjapiirros, aukeaminen, sarana, aukko
from: 45845d49
---

Seinät ovat tässä 2D-piirtoobjekteja. Ne eivät tee 3D-mallia, joten pohjapiirros pysyy yhtä kevyenä kuin viivapiirros. Rakennusmallia varten käytä BimCraft-ohjelmaa.

## Piirrä seiniä

Kirjoita `WALL` (`WA`) tai valitse {{ui:Seinä}} {{ui:Piirrä}}-ryhmän {{ui:Lisää}}-valikosta ja napsauta pisteitä kuten polylinjaa piirtäessä. Lopeta painamalla {{key:Enter}}, tai kirjoita `C` sulkeaksesi huoneen.

- `T` asettaa paksuuden.
- `J` ilmoittaa, mitä napsautuksesi seuraavat: seinän keskikohdan tai sen vasemman tai oikean pinnan.
- `F` asettaa täytön: ei mitään, kiinteä tai viivoitus.

Kulmat viistetään itsestään. Seinä, joka päättyy toisen seinän paksuuden sisään, liittyy siihen siistinä T-liitoksena, ja toisensa ylittävät seinät avautuvat toisilleen. Liitokset tallentuvat seinien mukana. Suorakulmioita, monikulmioita, kaaria, jakoa, lukituksia ja muuta varten ks. "Seinämuodot, leikkaukset, siirrot ja lukitukset (2D-seinät)".

## Lisää ovia ja ikkunoita

Kirjoita `DOOR` (`DR`) tai `WINDOW` (`WN`) ja napsauta seinää. Ovi aukeaa sille puolelle seinää, jota napsautat. `W` asettaa leveyden, `Y` tyypin ja `H` saranapuolen. Napsauta lisää sijoittaaksesi lisää, ja lopeta painamalla {{key:Enter}}. Ovet voivat olla yksilehtisiä, kaksilehtisiä, liukuovia tai avoin aukko. Ikkunat voivat olla kiinteitä, kääntöikkunoita tai liukuikkunoita.

## Muuta niitä

Valitse seinä nähdäksesi sen otteet:

- Pään otteet venyttävät seinää. Siihen liitetyt seinät seuraavat.
- Keskimmäinen ote siirtää seinää.
- Aukon ote liu'uttaa sitä seinää pitkin.
- Nuolet kääntävät oven saranapuolen ja aukeamissuunnan.

{{ui:Ominaisuudet}} näyttää paksuuden, täytön ja jokaisen aukon: tyypin, leveyden, sijainnin, saranan, aukeamissuunnan, näkyykö auki vai kiinni, ja {{ui:Poista}}. `DELOPENING` poistaa lähimmän aukon siitä kohdasta, johon napsautat.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` ja `ERASE` toimivat tavalliseen tapaan. Ovet ja ikkunat seuraavat seinäänsä, liitetyt seinät säilyttävät liitoksensa, ja yksi {{ui:Kumoa}} kumoaa kaiken.

## Muissa ohjelmissa

Jokainen seinä tallennetaan tavallisena lohkona, joten muut CAD-ohjelmat näyttävät sen oikein ja voivat siirtää sitä, mutta ne eivät voi muokata sitä seinänä. `EXPLODE` muuttaa seinän tavallisiksi viivoiksi ja kaariksi, jolloin se ei ole enää seinä.
