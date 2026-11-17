---
title: Jaa näyttö
summary: Näytä piirustus kahdessa, kolmessa tai neljässä ruudussa omilla zoomauksillaan, aseta arkki mallin viereen ja avaa useita piirustuksia rinnakkain.
keywords: jaa, jaa näyttö, ruudut, vports, näkymäruudut, rinnakkain, pinottu, kaksi piirustusta, välilehdet, piirustusvälilehdet, vertaa, jakaja, malli ja arkki, useita piirustuksia, avoimet piirustukset
from: ee2f034b
---

## Mitä opit

Kuinka katsot yhtä piirustusta useassa ruudussa samanaikaisesti, kukin omalla zoomauksellaan, ja kuinka avaat useita piirustuksia ja näet ne vierekkäin.

## Jaa yksi piirustus ruutuihin

1. Avaa piirustus tai piirrä muutama viiva ja ympyrä.
2. Avaa {{ui:Näkymä}} › {{ui:Lisää}} ja valitse {{ui:Jaa vierekkäin}} (tai kirjoita {{cmd:VPORTS}}, sitten `2` ja {{key:Enter}}).

Piirtoalue jakautuu kahteen ruutuun, jotka molemmat näyttävät saman näkymän. Aktiivisen ruudun ympärillä on sininen kehys, ja siinä on ristikko.

3. Napsauta toista ruutua. Siitä tulee aktiivinen. (Ensimmäinen napsautus vain vaihtaa ruutua; valitse napsauttamalla uudelleen.)
4. Zoomaa rullalla. Vain se ruutu zoomautuu.
5. Vedä ruutujen välistä viivaa levittääksesi toista leveämmäksi. {{key:Home}}, kun jakaja on valittuna, palauttaa sen keskelle.

{{cmd:VPORTS}} hyväksyy myös `3` (kaksi ruutua toisella puolella ja iso toisella: Vasen (`L`) tai Oikea (`R`)), `4` sekä `SI` palauttaakseen yhden ruudun. Aktiivisen ruudun näkymä täyttää silloin alueen. Arkilla {{cmd:VPORTS}} lisää arkkiin näkymäruudun (kuten AutoCADissa); kirjoita siellä {{cmd:SPLIT}} tai käytä Näkymä-valikkoa.

## Piirrä ruudusta toiseen ruutuun

1. Jaa vierekkäin ja zoomaa kumpikin ruutu piirustuksen eri kulmaan.
2. Kirjoita `L` ja paina {{key:Enter}}, ja napsauta ensimmäistä pistettä vasemmassa ruudussa.
3. Napsauta kerran oikeassa ruudussa tehdäksesi siitä aktiivisen, ja napsauta sitten toista pistettä siellä.

Viiva kulkee kahden paikan välillä. Komento jatkuu, kun vaihdat ruutua, ja kumiviiva näkyy jokaisessa ruudussa.

## Malli arkin vieressä

1. Jaa vierekkäin.
2. Napsauta oikeaa ruutua ja napsauta sitten arkin välilehteä piirustuksen alla.

Oikea ruutu näyttää arkin, vasen näyttää yhä mallin. Kumpikin ruutu säilyttää oman tilansa, joten voit piirtää mallille ja seurata, kuinka arkin näkymäruutu seuraa.

## Useita piirustuksia yhdessä ikkunassa

1. Avaa piirustus. Avaa sitten toinen (tai paina {{ui:Uusi}}).

Kukin piirustus avautuu omalle välilehdelleen piirtoalueen yläpuolelle. Vaihda napsauttamalla välilehteä; komentorivi, paneelit ja kumoaminen seuraavat piirustusta, jonka vaihdat. {{key:Mod+C}} yhdessä piirustuksessa ja {{key:Mod+V}} toisessa kopioi kohteita niiden välillä.

2. Napsauta {{ui:Aseta avoimet piirustukset vierekkäin}} (jakoikoni välilehtien lopussa) tai sen vieressä olevaa pinotun näkymän ikonia.

Jokainen ruutu näyttää nyt yhden avoimista piirustuksista, enintään neljä. Työskentele piirustuksessa napsauttamalla sen ruutua.

3. Sulje piirustus napsauttamalla välilehden {{ui:×}}-merkkiä. Jos siinä on tallentamattomia muutoksia, CadCraft kysyy ensin.

:::tip
Kun avaat piirustuksen ja ikkunassa on vain uusi, koskematon piirustus, käytetään sitä välilehteä eikä lisätä uutta.
:::

## Panoroi ja zoomaa yhdessä

Kahden version vertailuun aseta ne vierekkäin ja napsauta sitten {{ui:Linkitä ruutujen näkymät}} (linkkikuvake välilehtien lopussa), tai valitse se kohdasta {{ui:Näkymä}} › {{ui:Lisää}}, tai kirjoita {{cmd:LINKVIEWS}} ja `ON`. Nyt yhden ruudun panorointi tai zoomaus siirtää jokaisen mallia näyttävän ruudun (tai jokaisen arkkia näyttävän ruudun) samaan kohtaan, joten kaksi piirustusta pysyvät linjassa. {{cmd:LINKVIEWS}} `OFF` antaa kunkin ruudun liikkua taas itsenäisesti.

## Yleisiä virheitä

- **Napsautukseni ei tehnyt mitään.** Se teki ruudusta aktiivisen. Napsauta uudelleen valitaksesi tai piirtääksesi.
- **Rulla zoomasi väärää ruutua.** Rulla zoomaa osoittimen alla olevaa ruutua ja tekee siitä aktiivisen.
- **Ruudut palasivat yhteen.** Piirustuksen avaaminen näyttää sen sellaisena kuin se tallennettiin; ilman ruutuja tallennettu piirustus avautuu yhdessä ruudussa.
- **Sivulta poistuminen varoittaa tallentamattomista muutoksista, joita en näe.** Toisessa välilehdessä on piirustus, jossa on muutoksia. Vaihda siihen ja tallenna, tai poistu tallentamatta.
