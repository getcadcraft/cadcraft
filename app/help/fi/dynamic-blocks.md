---
title: Dynaamiset lohkot
summary: Mitä CadCraft tekee DWG-tiedoston dynaamisille lohkoille: ne säilyttävät oikeat nimensä, näyttävät tallennetun tilansa, vaihtavat näkyvyystilaa, näyttävät muut arvonsa ja pysyvät dynaamisina tallennettaessa.
keywords: dynaaminen lohko, dynaamiset lohkot, näkyvyys, näkyvyystila, kääntö, venytys, haku, parametrit, mukautettu, lohkon ominaisuudet, *U-lohkot, dynaaminen
from: dea2ee7c
---

## Mikä toimii

DWG-tiedosto, jossa on dynaamisia lohkoja, avautuu toimivana tähän asti:

- **Oikeat nimet.** Dynaaminen lohko näkyy {{ui:Lohkot}}-paneelissa omalla nimellään ("Receptacle", "Sink"), ei nimettömänä `*U`-lohkona.
- **Tila, jossa ne tallennettiin.** Jokainen viittaus näyttää täsmälleen sen, mitä toinen ohjelma näytti: näkyvyystilan, johon se oli asetettu, venytettynä tai käännettynä niin kuin se tallennettiin.
- **Näkyvyystilan vaihtaminen.** Valitse yksi viittaus (tai useita saman lohkon viittauksia), avaa {{ui:Ominaisuudet}} ja valitse kohdasta {{ui:Mukautetut}} toinen tila {{ui:Näkyvyys}}-luettelosta. Viittaus näyttää tilan heti, myös sen attribuutit: tilan piilottamat katoavat, sen näyttämät ilmestyvät arvoineen. Viittaus säilyttää kaikki arvot, joten mikään ei jää tyhjäksi; {{ui:Ominaisuudet}} listaa piilotetut merkittyinä "piilotettu". {{key:Mod+Z}} palauttaa vanhan tilan yhdellä askeleella.
- **Kahvat.** Valittu dynaaminen lohko näyttää omat kahvansa siellä, missä sen parametrit ovat: pieni kolmio näkyvyystilalle (napsauta sitä nähdäksesi tilaluettelon), nuolet etäisyyden päissä, kaksoisnuoli kääntöä varten. Tällä hetkellä vain näkyvyyskahva toimii; muut ilmoittavat siitä tilarivillä.
- **Muut arvot, vain luku.** Näkyvyysluettelon alla {{ui:Mukautetut}} näyttää myös lohkon etäisyydet, suuntakulmat, kääntötilat ja pisteet niin kuin piirustus ne pitää.
- **Näkyvyystilojen muokkaus.** Avaa lohko komennolla {{cmd:BEDIT}}: muokkain näyttää yhden tilan, jonka nimi on piirustuksen yllä olevassa palkissa (valitse toinen siellä). Kirjoita {{cmd:BVSTATE}} vaihtaaksesi, lisätäksesi (piilottaen kaiken, näyttäen kaiken tai säilyttäen näkyvät), nimetäksesi uudelleen tai poistaaksesi tilan; {{cmd:BVHIDE}} piilottaa valitut kohteet näkyvässä tilassa; {{cmd:BVSHOW}} näyttää piilotetut himmennettyinä, jotta voit napsauttaa niitä tuodaksesi ne takaisin. Tallenna lohko ({{ui:Tallenna lohko}}): viittaukset, jotka on asetettu uudelleen nimettyyn tilaan, säilyttävät sen uudella nimellä, ja poistettuun tilaan asetetut viittaukset näyttävät ensimmäisen tilan.
- **Pysyvät dynaamisina.** Kun tallennat DWG-tiedoston siinä versiossa, jossa piirustus tuli, lohkot pysyvät dynaamisina valitsemasi tilan kanssa: toinen ohjelma avaa ne samoina dynaamisina lohkoina. Muokkaamasi näkyvyystilat tallennetaan myös: niiden uudet nimet, lisäämäsi tilat ja se, mitä kukin näyttää.

## Mikä on vain luettavissa tai ei vielä ole

| Ei vielä | Sen sijaan tällä hetkellä |
|---|---|
| Etäisyyksien, kulmien tai kääntöjen muuttaminen (venytys-, siirto- ja kääntötoiminnot) | Ne näkyvät kohdassa {{ui:Mukautetut}} vain luettavina; muokkaa niitä ohjelmassa, joka lohkon teki. |
| Hakutaulukko-, XY-, kierto- ja napaparametrit | Ei vielä luettu: viittaus näkyy tallennettuna. |
| Etäisyys-, kääntö- ja pistekahvojen vetäminen | Ne näyttävät, missä parametrit ovat; näkyvyyskahva ja {{ui:Näkyvyys}}-luettelo Ominaisuuksissa vaihtavat tiloja. |
| Toisen ohjelman tyyppisten dynaamisten lohkojen tekeminen (venytys, kääntö, haku) | CadCraftissa tekemäsi lohkot ovat tavallisia lohkoja; {{cmd:BPARAMETER}} kertoo tämän. Omat parametrisi ja useat näkyvyysparametrit ovat parametrien hallinnassa (katso "Omat parametrit ja näkyvyystilat" alla). |
| Kohteiden lisääminen tai poistaminen lohkosta, jossa on näkyvyystiloja, lohkomuokkaimessa | Lohko tallennetaan sitten tavallisena lohkona (muokkain kertoo tästä sulkiessaan). |
| Dynaamisena pysyminen muussa DWG-versiossa tai DXF:ssä | Ne tallennetaan tavallisina lohkoina, jotka näyttävät valitsemasi tilan, ja tallennus kertoo tästä. |

:::note
Kohteiden siirtäminen tai muuttaminen {{cmd:BEDIT}}-komennossa pitää näkyvyystiloja sisältävän lohkon dynaamisena. Lohko ilman tiloja tai lohko, jonka kohteita lisättiin tai poistettiin muokkaimessa, muuttuu tavalliseksi lohkoksi.
:::

## Omat parametrit ja näkyvyystilat

CadCraftissa tekemäsi lohko voi sisältää omia parametrejaan ja **useita** näkyvyysparametreja, joilla kullakin on omat tilansa. Kirjoita {{cmd:BPARAMS}} (tai `BPM`) avataksesi **Parametrien hallinnan** lohkolle, jota muokkaat komennolla {{cmd:BEDIT}}, valitun viittauksen lohkolle tai nimeämällesi lohkolle.

- **Parametrit**: nimi, tyyppi (luku, pituus, kulma, lukumäärä, kyllä/ei) ja arvo tai kaava muista parametreista (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Tulos}} näyttää tuloksen. Kaava, joka ei toimi, tai arvo, joka ei sovi tyyppiinsä (lukumäärä 1,5), hylätään ja hallinta kertoo syyn; mikään muu ei muutu.
- **Näkyvyysparametrit**: {{ui:Lisää näkyvyysparametri}} luo sellaisen ensimmäisellä tilalla. Jokaista tilaa voi nimetä uudelleen, poistaa (viimeinen jää) tai antaa sille numero "näkyy kun". Kaava valitsee tilan parametreista (tila, jonka numero täsmää, muuten tila paikalta luettelossa); ilman kaavaa jokainen viittaus valitsee oman tilansa.
- **Kohteen asettaminen tilaan**: valitse lohkomuokkaimessa kohteet, kirjoita {{cmd:BPARAMS}} ja napsauta tilan kohdalla {{ui:Sijoita valitut kohteet tähän}}. Kohteet, joita mikään näkyvyysparametri ei luettele, näkyvät aina.
- **Tämä viittaus**: kun hallinta avataan valitulle viittaukselle, se näyttää myös tuon viittauksen omat arvot ja tilat.

Lohkomuokkaimen ulkopuolella jokainen muutos on yksi kumoamisaskel. Lohkomuokkaimessa muutokset ovat muokkaimen: {{ui:Tallenna lohko}} säilyttää ne. `-BPARAMS` kysyy saman komentoriviltä.

**Tiedostossa.** DWG ja DXF säilyttävät parametrit, sen mitkä kohteet ovat missäkin tilassa, ja kunkin viittauksen omat arvot CadCraftin omissa tietueissa; avaa tiedosto uudelleen CadCraftissa, ja kaikki palautuu. Toinen ohjelma näkee jokaisen viittauksen lohkona kaikkine kohteineen, koska DWG-tiedostossa on enintään yksi näkyvyysparametri lohkoa kohti omaa tyyppiään. Viittaus, jonka toinen ohjelma siirsi, tai lohko, jonka kohteita se muutti, palautuu ilman niitä osia, jotka eivät enää vastaa toisiaan (mitään ei arvata).
