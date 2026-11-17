---
title: Dynaamiset lohkot
summary: Mitä CadCraft tekee DWG-tiedoston dynaamisille lohkoille: ne säilyttävät todelliset nimensä, näyttävät tilan, johon ne tallennettiin, vaihtavat näkyvyystilaa, näyttävät muut arvonsa ja pysyvät dynaamisina tallennettaessa.
keywords: dynaaminen lohko, dynaamiset lohkot, näkyvyys, näkyvyystila, peilaus, venytys, haku, parametrit, mukautettu, lohkon ominaisuudet, *u-lohkot, dynaaminen
from: 26b6aa80
---

## Mikä toimii

DWG, joka on tehty dynaamisilla lohkoilla, avautuu niin, että ne toimivat tähän asti:

- **Todelliset nimet.** Dynaaminen lohko luetellaan {{ui:Blocks}}-paneelissa omalla nimellään ("Receptacle", "Sink"), ei nimettömänä `*U`-lohkona.
- **Tila, johon ne tallennettiin.** Jokainen viittaus näyttää tarkalleen sen, mitä toinen ohjelma näytti: näkyvyystilan, johon se oli asetettu, venytettynä tai peilattuna niin kuin se tallennettiin.
- **Näkyvyystilan vaihtaminen.** Valitse yksi viittaus (tai useita samaa lohkoa), avaa {{ui:Properties}} ja valitse {{ui:Custom}}-osiossa toinen tila {{ui:Visibility}}-luettelosta. Viittaus näyttää sen tilan heti, samoin sen attribuutit: ne, jotka tila piilottaa, katoavat, ja ne, jotka se näyttää, ilmestyvät arvoineen. Viittaus säilyttää jokaisen arvon, joten mikään ei jää tyhjäksi; {{ui:Properties}} luettelee piilotetut merkittyinä "piilotettu". {{key:Mod+Z}} palauttaa vanhan tilan yhdellä askeleella.
- **Otteet.** Valittu dynaaminen lohko näyttää omat otteensa siellä, missä sen parametrit ovat: pieni kolmio näkyvyystilalle (napsauta sitä nähdäksesi tilaluettelon), nuolet etäisyyden päissä, kaksoisnuoli peilaukselle. Vain näkyvyysote toimii tällä hetkellä; muut ilmoittavat tämän tilarivillä.
- **Muut arvot, vain luku.** Näkyvyysluettelon alla {{ui:Custom}} näyttää myös lohkon etäisyydet, tasauskulmat, peilaustilat ja pisteet sellaisina kuin piirustus ne pitää.
- **Näkyvyystilojen muokkaus.** Avaa lohko komennolla {{cmd:BEDIT}}: muokkain näyttää yhden tilan, jonka nimi on piirustuksen yläpuolella olevassa rivissä (valitse siellä toinen). Kirjoita {{cmd:BVSTATE}} vaihtaaksesi, lisätäksesi (piilottaen kaiken, näyttäen kaiken tai säilyttäen näkyvät), nimetäksesi uudelleen tai poistaaksesi tilan; {{cmd:BVHIDE}} piilottaa valitut kohteet näkyvässä tilassa; {{cmd:BVSHOW}} näyttää piilotetut himmennettyinä, jotta voit napsauttaa ne, jotka haluat palauttaa. Tallenna lohko: viittaukset, jotka on asetettu uudelleen nimettyyn tilaan, säilyttävät sen uudella nimellä, ja ne, jotka on asetettu poistettuun tilaan, näyttävät ensimmäisen tilan.
- **Pysyvät dynaamisina.** Kun tallennat DWG-muodossa siinä versiossa, jossa piirustus tuli, lohkot pysyvät dynaamisina valitsemasi tilan kanssa: toinen ohjelma avaa ne samoina dynaamisina lohkoina. Muokkaamasi näkyvyystilat tallennetaan myös: niiden uudet nimet, lisäämäsi tilat ja se, mitä kukin näyttää.

## Mikä on vain luettavissa tai ei vielä ole

| Ei vielä | Sen sijaan tänään |
|---|---|
| Etäisyyksien, kulmien tai peilausten muuttaminen (venytys-, siirto- ja peilaustoiminnot) | Ne näkyvät vain luku -tilassa {{ui:Custom}}-osiossa; muokkaa niitä ohjelmassa, joka lohkon teki. |
| Haku-, XY-, kierto- ja napaparametrit | Ei vielä luettu: viittaus näkyy tallennetussa tilassaan. |
| Etäisyys-, peilaus- ja pistesäätimien vetäminen | Ne näyttävät, missä parametrit ovat; näkyvyysote ja {{ui:Properties}}-paneelin {{ui:Visibility}}-luettelo vaihtavat tiloja. |
| Dynaamisten lohkojen tekeminen (parametrien tai näkyvyystilojen lisääminen lohkoon, jossa niitä ei ole) | CadCraftissa tekemäsi lohkot ovat tavallisia lohkoja; {{cmd:BPARAMETER}} kertoo tämän. |
| Kohteiden lisääminen tai poistaminen lohkosta, jolla on näkyvyystiloja, lohkon muokkaimessa | Lohko tallennetaan sen jälkeen tavallisena lohkona (muokkain kertoo tämän sulkiessaan). |
| Dynaamisena pitäminen toisessa DWG-versiossa tai DXF-muodossa | Ne tallennetaan tavallisina lohkoina, jotka näyttävät valitsemasi tilan, ja tallennus kertoo tämän. |

:::note
Kohteiden siirtäminen tai muuttaminen {{cmd:BEDIT}}-komennossa pitää näkyvyystiloilla varustetun lohkon dynaamisena. Lohko ilman tiloja, tai lohko, jonka kohteita on lisätty tai poistettu muokkaimessa, muuttuu tavalliseksi lohkoksi.
:::
