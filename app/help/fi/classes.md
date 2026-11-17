---
title: Järjestä piirustus luokilla
summary: Luokat lajittelevat kohteet tasojen yli toisella tavalla (Lighting-Fixtures-Spot): näytä ja piilota ne, anna niille väri, viivatyyppi, viivanpaksuus, täyttö ja tekstityyli, jotka kohteet voivat ottaa ”luokan mukaan”, ja aseta luokka, johon uudet kohteet menevät.
keywords: luokka, luokat, CLASSES, CLS, CLASS, luokan mukaan, ByClass, aktiivinen luokka, käytä luodessa, Ei luokkaa, suunnittelutaso, tason mittakaava, korkeus, Vectorworks
from: 672de9cb
---

Tasot kertovat, *missä* kohde on piirustuksessa; luokat kertovat, *mikä* se on. Seinä tasolla `Level 1` voi kuulua luokkaan `Walls-Exterior`, ja tasolla `Ceiling` oleva kattovalaisin luokkaan `Lighting-Fixtures-Spot`. Voit piilottaa kaikki valaisimet kaikilla tasoilla kerralla tai tulostaa kaikki ulkoseinät paksumpina siirtämättä mitään tasojen välillä.

Jokainen kohde alkaa luokasta **Ei luokkaa**. Piirustus, jolla ei ole omia luokkia, toimii täsmälleen kuten ennenkin.

## Avaa luokkapaneeli

Kirjoita `CLASSES` (tai `CLS`) ja paina {{key:Enter}}, tai valitse {{ui:Luokat…}} valikosta {{ui:Lisää}}, ryhmästä {{ui:Näkymä}}. Paneeli aukeaa piirustuksen päälle ja pysyy auki piirtäessäsi.

- **Lisää luokka:** kirjoita sen nimi ylhäällä olevaan ruutuun ja paina {{key:Enter}}. `-` tekee tason: `Lighting-Fixtures-Spot` on luokan `Lighting-Fixtures` alla, joka on luokan `Lighting` alla; puuttuvat tasot lisätään puolestasi.
- **Näytä tai piilota:** luokan vieressä oleva silmä. Luokan piilottaminen piilottaa kaikki sen alla olevat luokat sekä näytöllä että paperilla.
- **Aktiivinen luokka:** pyöreä painike. Uudet piirtämäsi kohteet menevät aktiiviseen luokkaan.
- **Valitse luokka:** napsauta sen nimeä. Alla olevat painikkeet ja asetukset toimivat siihen.

Jokaisen rivin lopussa oleva luku kertoo, montako kohdetta luokassa on (mallissa, arkeilla ja lohkomäärittelyissä).

## Aseta kohteet luokkaan

Valitse kohteet, valitse luokka paneelista ja valitse {{ui:Aseta luokka}}. Ruksita ensin {{ui:Luokan mukaan}}, jotta ne ottavat värin, viivatyypin, viivanpaksuuden, täytön ja tekstityylin luokasta. Voit myös:

- kirjoittaa `CLASS`, kun kohteet on valittu, ja antaa luokan nimen (uusi nimi luo luokan);
- kirjoittaa `CLASS`, kun mitään ei ole valittu, asettaaksesi aktiivisen luokan; `?` listaa luokat niiden määrineen;
- käyttää {{ui:Luokka}}-osiota Ominaisuudet-paneelissa: luokan sekä {{ui:… luokan mukaan}}-kytkimen värille, viivatyypille ja viivanpaksuudelle (viivoituksille täytölle, tekstille tekstityylille);
- valita luokan mukaan komennolla `QSELECT`: valitse ominaisuus {{ui:Luokka}}.

{{ui:Valitse sen kohteet}} valitsee kaikki valitun luokan kohteet avoimelta arkilta (tai mallista).

## Miten kohde piirtyy: kohde, luokka, taso

Kohteen väri, viivatyyppi, viivanpaksuus, täyttö ja tekstityyli voivat olla **luokan mukaan**, samalla tavalla kuin ne voivat olla tason mukaan. CadCraft katsoo tässä järjestyksessä:

1. Kohteen oma arvo, ellei se ole luokan mukaan.
2. Luokan arvo, kun kohde ottaa sen luokan mukaan ja luokalla on arvo.
3. Tason arvo.

Luokka, jonka väri (tai viivatyyppi …) on {{ui:Ei asetettu}}, välittää kohteen eteenpäin tasolle. Valitse luokka ja aseta sen {{ui:Väri}}, {{ui:Viivatyyppi}}, {{ui:Viivanpaksuus}}, {{ui:Täyttö (viivoitukset)}} ja {{ui:Tekstityyli}} painikkeiden alapuolelta. Ruksita {{ui:Käytä luodessa}}, jotta uudet luodessa piirretyt kohteet ottavat kaikki nämä luokan mukaan.

Jokainen muutos paneelissa on yksi kumoamisvaihe.

## Nimeä uudelleen ja poista

{{ui:Nimeä uudelleen}} muokkaa nimeä paikan päällä: paina {{key:Enter}} pitääksesi sen, {{key:Esc}} luopuaksesi siitä. Sen alla olevat luokat seuraavat (`Lighting-Spot` muuttuu nimeksi `Light-Spot`, kun `Lighting` muuttuu nimeksi `Light`), ja niin seuraavat myös niiden kohteet ja näkymäruutujen ohitukset.

{{ui:Poista}} poistaa luokan ja kaikki sen alla olevat luokat. Niiden kohteet siirtyvät luokkaan **Ei luokkaa**. Yksi {{ui:Kumoa}} palauttaa kaiken. **Ei luokkaa** -luokkaa ei voi nimetä uudelleen eikä poistaa.

## Suunnittelutasot

{{ui:Suunnittelutasot}}-kohdassa jokaiseen tasoon voi liittää mittakaavan (`1:50`) ja korkeuden. Suunnittelutaso on tavallinen taso: mallitila ja arkit toimivat ennallaan, ja mittakaava ja korkeus säilyvät piirustuksessa työkaluja varten, jotka niitä käyttävät.

## DWG- ja DXF-tiedostoissa

Luokat säilyvät jokaisessa DWG-versiossa, jonka CadCraft tallentaa, ja DXF-tiedostoissa (R12 ja 2000). Jokaisen kohteen luokka on sen oma laajennettu data (sovellus `CADCRAFT_CLASS`), joten AutoCAD ja muut ohjelmat säilyttävät sen kohteen yhteydessä. Luokkaluettelo, värit ja näkyvyys säilytetään yhdessä käyttämättömässä lohkossa nimeltä `CADCRAFT_CLASSES`; jos toinen ohjelma puhdistaa tämän lohkon, CadCraft löytää silti jokaisen kohteen luokan ja luokat palautuvat oletusasetuksilla.

Muut ohjelmat eivät tunne luokkia: ne piirtävät kunkin kohteen omilla tai sen tason arvoilla.

Katso myös [Näkymäruudun luokkaohitukset](topic:viewport-overrides) ja [Järjestä piirustus tasoilla](topic:layers).
