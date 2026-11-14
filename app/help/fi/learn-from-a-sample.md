---
title: Opi esimerkkipiirustuksesta
summary: Avaa CadCraftin esimerkkitalo tai esimerkki toteumapiirustuksesta ja käy läpi sen arkit, piirustusotsikko, mitoitukset ja tasot.
keywords: esimerkki, esimerkit, esimerkkipiirustus, opi, opas, läpikäynti, piirustusotsikko, arkit, toteumapiirustus, arkkitehtisarja, avaa esimerkki
from: aa1f960a
---

## Mitä opit

Miten valmis sarja rakennetaan: mallitila, mittakaavassa olevat näkymäruudulliset arkit, piirustusotsikko attribuutteineen, mitoitukset jaloissa ja tuumissa sekä millimetreissä, tasot. Esimerkit ovat CadCraftin omia ja vapaasti käytettävissä mihin tahansa (CC0).

## Avaa esimerkki

1. Napsauta vasemmassa paneelissa kohdassa {{ui:Piirustus}} {{ui:Avaa esimerkki}} (tai kirjoita {{cmd:SAMPLES}}; valintanauhatyyleissä se on {{ui:Tiedosto}}-valikossa).
2. Napsauta {{ui:Avaa}} kohdan {{ui:Esimerkkitalo}} vieressä. Se avautuu omaan välilehteensä, joten työsi pysyy auki.

## Tutustu malliin

1. Napsauta {{ui:Laajuus}} (tai kirjoita `ZOOM` ja sitten `E`): pohjakuva, etujulkisivu, leikkaus ja seinän yksityiskohta.
2. Napsauta kohdassa {{ui:Tasot}} `A-ANNO-DIMS`-tason vieressä olevaa silmää piilottaaksesi mitoitukset ja uudelleen näyttääksesi ne.
3. Napsauta ovea: Ominaisuudet näyttää `DOOR-32`-lohkoviittauksen. Ovet ja ikkunat ovat lohkoja, jotka on sijoitettu kierrettyinä ja peilattuina.

## Arkit

1. Napsauta piirustuksen alla olevaa {{ui:A-101 FLOOR PLAN}}: ARCH D -arkki, jossa on yksi näkymäruutu mittakaavassa 1/4" = 1'-0".
2. Kaksoisnapsauta näkymäruudun sisällä työskennelläksesi mallin parissa sen kautta; kaksoisnapsauta sen ulkopuolella palataksesi.
3. {{ui:A-501 DETAILS}} näyttää seinän yksityiskohdan mittakaavassa 1 1/2" = 1'-0": sama malli, toinen mittakaava.

## Piirustusotsikko

1. Kaksoisnapsauta millä tahansa arkilla piirustusotsikkoa: {{ui:Muokkaa attribuutteja}} luettelee PROJECT, TITLE, SCALE, DATE, DRAWN ja SHEET.
2. Vaihda DRAWN nimikirjaimiisi ja napsauta {{ui:OK}}.
3. Jos haluat muuttaa piirustusotsikkoa itseään jokaisella arkilla, valitse se ja valitse {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Muokkaa paikan päällä}}. Katso [Attribuutit](topic:attributes).

## Toteumapiirustus

Avaa {{ui:Esimerkki toteumapiirustuksesta}} samalla tavalla. Harmaat pisteet tasolla `SCAN-SLICE` ovat viipale skannauksesta; tason `AB-WALL` seinät jäljitettiin niiden päälle. Itäinen seinä on 35 mm vinossa: mitoitukset kertovat sen kahdesti, millimetreinä (`AB-DIMS-MM`) ja jaloissa ja tuumissa (`AB-DIMS-FTIN`, samat pituudet mittausmittakaavan kautta). Punaiset pilvet tasolla `REV-1` merkitsevät sen, mitä mittaus löysi.

## Seuraavaksi

- [Muuta mitoitustekstin kokoa](topic:change-dimension-text-size)
- [Plottaa PDF:ksi](topic:plot-pdf): plottaa {{ui:A-101 FLOOR PLAN}}.
