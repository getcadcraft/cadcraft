---
title: Yksiköt tuonnissa: tiedosto kertoo yksikkönsä, tai sinulta kysytään ensin
summary: Kun tuomasi tiedosto kertoo yksikkönsä, CadCraft muuntaa sen ja kertoo siitä. Kun se ei kerro, CadCraft kysyy ennen kuin sijoittaa mitään, ja muistaa vastauksen kyseiselle tiedostolle.
keywords: yksiköt, tuonti, lisää, xref, liitä, XATTACH, INSERT, OBJ, DWG, DXF, pistepilvi, kirjaston kohde, millimetrit, metrit, tuumat, jalat, mittakaava, väärä koko, liian suuri, liian pieni, 1000 kertaa, kysy, muistettu, INSUNITS
from: 558f1293
---

## Mitä teet

Tuo tiedosto piirustukseen ja varmista, että se tulee oikeaan kokoon.

## Vaiheet

1. Tuo tiedosto tavalliseen tapaan: `INSERT` › Tiedosto, `XATTACH`, `POINTCLOUDATTACH`, tai {{ui:Tiedostot}} Kirjasto-paneelissa.
2. Jos tiedosto kertoo yksikkönsä, mitään ei kysytä. Komentorivi kertoo, mitkä yksiköt tiedosto ilmoittaa, ja mittakaavan, jos ne eroavat piirustuksen yksiköistä.
3. Jos ei kerro, valintaikkuna kysyy **Tiedoston yksiköt**. Valitse, mikä yksi yksikkö tiedostossa on, ja napsauta {{ui:Käytä näitä yksiköitä}}. Mitään ei sijoiteta ennen vastaustasi.
4. {{ui:Peruuta}} (tai {{key:Esc}}) tuo sisään ei mitään.

## Mitkä tiedostot kertovat yksikkönsä

- **DWG ja DXF**: piirustuksen lisäysyksiköt (`$INSUNITS`). Tiedostosta, jossa niitä ei ole, kysytään.
- **Pistepilvet**: LAS ja LAZ koordinaattijärjestelmän kanssa, E57, PTX ja PLY kertovat yksikkönsä. Muista kysytään.
- **OBJ**: ei koskaan kerro yksiköitä. Sinulta kysytään.
- **glTF ja GLB**: metrejä formaatin oman säännön mukaan.
- **Kuvat**: niillä ei ole omaa kokoa. `IMAGEATTACH` kysyy leveyden ja tarjoaa leveyden, jonka annoit kyseiselle tiedostolle aiemmin.
- **Skannaukset**: skannaus, joka ilmoittaa tiheytensä (pistettä tuumalla), tulee oikeassa koossa piirustuksen yksiköissä. `SCANATTACH` kysyy silti leveyden.
- **Pistepilvet-lisäosa**: kysyy, kun rakennat pilven, jonka tiedosto ei ilmoita yksikköä, ja merkitsee pilven luvut yksikössä, jonka pilvi kantaa.

## Hyvä tietää

- DWG:n tai DXF:n avaaminen omana piirustuksenaan ei kysy mitään. Komentorivi kertoo, mitkä yksiköt tiedosto ilmoittaa, tai että se ei ilmoita mitään. Ominaisuudet asettaa piirustuksen yksiköt.
- Kun tässä piirustuksessa ei myöskään ole yksiköitä, tiedostoa ei voi muuntaa. Se sijoitetaan lukuina sellaisenaan, ja komentorivi kertoo tämän.
- Vastaus muistetaan kyseiselle tiedostolle tällä tietokoneella kaikissa CadCraft-sovelluksissa. Seuraavalla kerralla kun se tuodaan, ei kysytä, ja komentorivi kertoo, että muistettuja yksiköitä käytettiin.
- Kysyäksesi uudelleen: komentopaletti ({{key:Mod+K}}) › **Kysy uudelleen tuotujen tiedostojen yksiköitä**.
