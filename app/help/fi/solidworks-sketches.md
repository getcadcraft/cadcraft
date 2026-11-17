---
title: Siirrä luonnoksia muihin osamallintimiin ja takaisin
summary: Kirjoita makro, joka rakentaa piirustuksesi yhdeksi rajoitetuksi luonnokseksi osamallintimessa, ja avaa osamallintimesta viety luonnos.
keywords: luonnos, makro, swb, vba, vienti, osamallintin, yleiset muuttujat, yhtälöt, suhteet, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks ei ole käytettävissä siinä ympäristössä, jossa CadCraft on rakennettu, joten kumpaankaan suuntaan ei ole vielä testattu SolidWorksissa. CadCraftin kirjoittama tulos on tarkistettu vain rakenteen osalta. Tarkista tulos ennen kuin luotat siihen.
:::

## Lähetä piirustus luonnoksena

1. Rajoita ja mittaa piirustus (katso [Rajoita piirustus](topic:constraints)).
2. Avaa ryhmässä {{ui:Parametrinen}} {{ui:Lisää}} ja valitse {{ui:Makro SolidWorksille (.swb)}}, tai kirjoita {{cmd:SWBOUT}}.

   Piirustuksen nimellä nimetty tiedosto, jonka pääte on `.swb`, ladataan.
3. Valitse SolidWorksissa **Tools > Macro > Run** ja valitse tuo tiedosto.

Makro luo uuden osan oletusosapohjasta, avaa luonnoksen Front Plane -tasolle ja piirtää siihen mallin viivat, ympyrät, kaaret, pisteet ja murtoviivat, ja mukana:

- rajoitteesi luonnossuhteina,
- mittarajoitteesi mittoina samoilla nimillä (`d1@Sketch1`),
- omat parametrisi yleisinä muuttujina,
- jokainen lauseke yhtälönä.

Osa käyttää piirustuksen pituusyksikköä. Teksti, lohkot, viivoitukset, mitat ja arkit eivät kuulu luonnokseen; historia luettelee, mitä jätettiin pois. Lausekkeet, joilla ei ole yhtälömuotoa (`if`, `min`, `max`, `round`, `%` ja muutama muu), kirjoitetaan nykyisenä arvonaan, ja historia kertoo, mitkä. Kaikki, mitä makro ei pysty tekemään, kirjoitetaan makron viereen lokitiedostoon, ja viesti tiivistää lopussa.

## Avaa luonnos osasta

1. Aja SolidWorksissa CadCraftin vientimakro osalle (lataa se PartCraft-sovelluksesta: File > Export > Export macro to bring parts back). Se kirjoittaa osan viereen `.json`-tiedoston muodossa `cadcraft-sw-export`.
2. Valitse CadCraftissa {{ui:Avaa}} ja valitse tuo `.json`-tiedosto.
3. Kun osassa on useita luonnoksia, valitse yksi.

Luonnoksesta tulee piirustus millimetreinä: sen viivat, kaaret, ympyrät ja pisteet, sen suhteet rajoitteina, sen mitat mittarajoitteina alkuperäisillä nimillään (`D1`, `D2` …), sen yleiset muuttujat parametreina ja mittojen yhtälöt lausekkeina. Historia luettelee, mitä ei siirretty, kuten suhteet, joita CadCraftissa ei ole. Sitä, missä luonnos on osassa, ei säilytetä: se piirretään litteänä, sellaisena kuin se näkyy omalla tasollaan.
