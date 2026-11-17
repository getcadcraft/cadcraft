---
title: Muuta mitoitustekstin kokoa
summary: Tee mitoitustekstistä suurempi tai pienempi, sekä uusille mitoituksille että piirustuksessa jo oleville.
keywords: mitoitustekstin koko, tekstin korkeus, dimtxt, dimscale, mitoitusteksti liian pieni, mitoitusteksti liian suuri, suurempi mitoitusteksti, merkinnän mittakaava, annotation scale
from: 30e40633
---

## Seuraavaksi tehtäville mitoituksille

1. Paina {{key:Esc}}, jotta mitään ei ole valittuna. Oikea paneeli näyttää silloin {{ui:Nykyiset asetukset}}.
2. Vieritä paneeli alas kohtaan {{ui:Uudet mitoitukset}}. Kirjoita paperille haluamasi korkeus kenttään {{ui:Tekstin korkeus}} (esimerkiksi `2.5` 2.5 mm:lle tai `3/32"`) ja paina {{key:Enter}}.
3. Aseta {{ui:Kokonaismittakaava}} piirtomittakaavaan (`50` mittakaavalle 1:50, `48` mittakaavalle 1/4" = 1'-0"). Jokainen koko kerrotaan sillä.

Komentorivillä {{cmd:DIMTXT}} asettaa korkeuden ja {{cmd:DIMSCALE}} kokonaismittakaavan.

## Piirustuksessa jo olevat mitoitukset

1. Valitse mitoitukset (yksi tai useampi). Valitse {{ui:Mitoitus}} Ominaisuudet-kohdan yläreunan luettelosta.
2. Kirjoita uusi {{ui:Tekstin korkeus}} ({{ui:Teksti}}-osiossa) tai uusi {{ui:Kokonaismittakaava}} ({{ui:Sovitus}}-osiossa alempana) ja paina {{key:Enter}}.

Mitoitukset piirtyvät heti uudelleen yhdessä kumoamisvaiheessa. Toisen ohjelman tiedoston mitoitus piirretään uudelleen CadCraftin tyylillä heti, kun muutat sitä.

:::tip
Teksti, joka näyttää oikealta näytöllä mutta on pieni tulostetulla arkilla, johtuu yleensä siitä, että kokonaismittakaava on 1. Aseta se arkin mittakaavaan.
:::

Katso kaikki asetukset kohdasta [Mitoituksen koot, desimaalit ja mittakaava](topic:dimension-settings).
