---
title: Muokkaa oteilla ja ominaisuuksilla
summary: Venytä, siirrä ja muuta kohteiden kokoa niiden otteilla, ja kirjoita tarkat pituudet, säteet, kulmat ja koordinaatit Ominaisuudet-paneeliin.
keywords: otteet, ominaisuudet, venytä, pituus, säde, koordinaatit, muokkaa, pikaominaisuudet, ominaisuuspaletti, muuta, taso, väri, color
from: f22541ba
---

## Mitä opit

Kaksi nopeaa tapaa muuttaa kohdetta ilman komentoa: vedä sen **otteista** tai kirjoita uudet arvot oikealla olevaan **Ominaisuudet**-paneeliin.

## Otteet

Kun valitset kohteita (enintään 200 kerrallaan) ilman käynnissä olevaa komentoa, niihin ilmestyy pieniä neliöitä. Nämä ovat otteita:

| Kohde | Otteet |
|---|---|
| Viiva | Molemmat päät ja keskikohta (siirtää koko viivaa) |
| Ympyrä | Keskipiste (siirtää sitä) ja neljä pistettä ympyrällä (muuttavat sädettä) |
| Kaari | Keskipiste ja molemmat päät (muuttavat kohtaa, josta kaari alkaa ja loppuu) |
| Murtoviiva | Jokainen kärkipiste |
| Teksti, piste, lohkoviittaus | Lisäyspiste |
| Ellipsi | Keskipiste |
| Mitoitus | Sen määrittävät pisteet ja mittaviivan sijainti |
| Näkymäruutu | Keskipiste (siirtää sitä) ja neljä kulmaa (muuttavat kokoa) |

### Siirrä otetta

1. Piirrä viiva ja napsauta sitä. Viivaan ilmestyy kolme otetta.
2. Napsauta toisen pään otetta. Tilarivi kertoo: ”Napsauta paikkaa, johon tämä ote siirtyy (Esc peruuttaa). Tartunnat ja ortogonaali ovat käytössä.”
3. Siirrä ristikkoa. Esikatselu seuraa mukana.
4. Napsauta uutta paikkaa, tai tartu toisen kohteen pisteeseen ja napsauta.

Pää siirtyy, ja muu viiva pysyy paikallaan. Voit myös painaa otetta ja vetää sitä, ja päästää irti siinä kohdassa, johon sen pitää mennä.

:::note
Otteelle ei voi kirjoittaa koordinaattia. Tarkkaa paikkaa varten tartu pisteeseen tai kirjoita arvo Ominaisuudet-paneeliin.
:::

Peruuta otteen siirto painamalla {{key:Esc}} tai napsauttamalla hiiren oikealla painikkeella.

## Ominaisuudet

Oikea paneeli näyttää valitun kohteen ominaisuudet.

1. Napsauta viivaa. Paneelin otsikossa lukee ”Viiva”.
2. Napsauta kenttää {{ui:Pituus}}, kirjoita `2500` ja paina {{key:Enter}}.

Viiva on nyt täsmälleen 2500 pitkä, ja sen alkupiste ja kulma säilyvät. {{key:Enter}} tai napsautus muualle ottaa arvon käyttöön, ja {{key:Esc}} palauttaa vanhan arvon. Jokainen muutos on yksi kumoamisvaihe, myös silloin kun useita kohteita muuttuu kerralla.

Kentät hyväksyvät lausekkeita (`=2*45`) ja pituuksia yksiköineen (`3'6"`, `900mm`). Jokaisella pisteellä on X, Y ja Z, ja useita kohteita voi muuttaa yhdessä. Kaikki tämä on kohdassa [Ominaisuudet-paneeli](topic:properties-panel).

## Yleisiä virheitä

- **Otteita ei näy.** Komento on käynnissä (paina {{key:Esc}}), tai valittuja kohteita on yli 200, tai kohde on lukitulla tasolla.
- **Ote meni väärään paikkaan.** Tartunta tarttui siihen. Pidä {{key:Shift}} painettuna napsautuksen ajan, jotta tartunnat ohitetaan.
- **Ominaisuuksiin kirjoittaminen ei tehnyt mitään.** Ota arvo käyttöön painamalla {{key:Enter}} tai napsauttamalla muualle. Hylätty syöttö (nolla tai negatiivinen pituus tai säde, teksti joka ei ole arvo) muuttaa kentän punaiseksi ja kertoo syyn.
- **Kirjoitetut kirjaimet menivät Ominaisuudet-kenttään.** Kun kentässä on kohdistin, näppäimet kirjoittavat sinne. Paina {{key:Enter}} tai {{key:Esc}} ja kirjoita sitten komento.
