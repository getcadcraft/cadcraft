---
title: Siirrä, kopioi, kierrä, skaalaa, peilaa, venytä ja matriisi
summary: Sijoita huonekalut huoneeseen perusmuokkauskomennoilla käyttäen peruspisteitä, kirjoitettuja etäisyyksiä ja kumoamista.
keywords: siirrä, kopioi, kierrä, skaalaa, peilaa, venytä, matriisi, yhdistä, matchprop, täsmää ominaisuudet, muotoilusivellin, arrayrect, arraypolar, napamatriisi, poista, hajota, kumoa, tee uudelleen, peruspiste, siirtymä, muokkaa, kohdista, jaa, rivitä, jaa tasan
from: 8eaeee6c
---

## Mitä teet

Pöytä, jonka ympärille kopioidaan, kierretään, peilataan ja muutetaan kokoa yksi tuoli. Matkan varrella käytät {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} ja {{cmd:UNDO}}.

## Piirrä osat

1. Kirjoita `REC` ja paina {{key:Enter}}, kirjoita `0,0` ja paina {{key:Enter}}, kirjoita sitten `@1800,900` ja paina {{key:Enter}}. Tämä on pöytä.
2. Kirjoita `REC` ja paina {{key:Enter}}, kirjoita `300,-700` ja paina {{key:Enter}}, kirjoita sitten `@450,450` ja paina {{key:Enter}}. Tämä on tuoli pöydän alapuolella.
3. Napsauta {{ui:Laajuus}}.

## Siirrä: peruspiste, sitten toinen piste

Jokainen siirto, kopiointi, kierto ja skaalaus alkaa **peruspisteestä**: pisteestä, jota kuljetetaan mukana tai jonka ympäri käännetään.

1. Napsauta tuolia valitaksesi sen.
2. Kirjoita `M` ja paina {{key:Enter}}. Historiassa lukee `1 löydetty`.
3. Kohdassa `Määritä peruspiste` napsauta tuolin vasemman yläkulman päätepistettä (Päätepiste).
4. Kohdassa `Määritä toinen piste` kirjoita `@0,200` ja paina {{key:Enter}}.

Tuoli siirtyy 200 ylöspäin, lähemmäs pöytää.

:::tip
Kirjoita `D` kohdassa `Määritä peruspiste` antaaksesi siirtymän: CadCraft kysyy silloin `Määritä siirtymä`, ja kirjoitat, kuinka paljon sivulle ja ylös, esimerkiksi `0,200` (`@`-merkkiä ei tarvita).
:::

## Kopioi niin monta kertaa kuin haluat

1. Napsauta tuolia.
2. Kirjoita `CO` ja paina {{key:Enter}}.
3. Napsauta peruspisteeksi tuolin vasemman alakulman päätepistettä.
4. Kirjoita `@600,0` ja paina {{key:Enter}}. Kopio ilmestyy 600 oikealle.
5. Kirjoita `@600,0` uudelleen ja paina {{key:Enter}}. Toinen kopio ilmestyy 1200 alkuperäisen oikealle puolelle.
6. Lopeta komento painamalla {{key:Enter}}.

{{cmd:COPY}} jatkuu, kunnes painat {{key:Enter}}. Jokainen kopio sijoittuu peruspisteen ja antamasi pisteen välisellä etäisyydellä. `@`-piste lasketaan viimeksi antamastasi pisteestä, joka ensimmäisen kopion jälkeen on kyseisen kopion piste. Kaksi kertaa `@600,0` antaa siis kopiot kohtiin 600 ja 1200. Kirjoita `U` ja paina {{key:Enter}}, jos haluat perua viimeisen kopion poistumatta komennosta.

Pöydän alapuolella pitäisi näkyä kolme tuolia peräkkäin.

:::tip
{{cmd:COPY}} on tarkoitettu kopioimiseen yhden piirustuksen sisällä peruspisteen avulla. Jos haluat viedä kohteita toiseen piirustukseen tai välilehteen tai liittää ne myöhemmin, käytä leikepöytää: {{key:Mod+C}} ja sitten {{key:Mod+V}}. {{key:Mod+D}} tekee yhden kopion, joka liikkuu osoittimen mukana. Katso [Kopioi, liitä ja monista](topic:copy-paste).
:::

## Peilaa rivi toiselle puolelle

1. Vedä leikkaava ikkuna (oikealta vasemmalle) kolmen tuolin yli koskematta pöytään.
2. Kirjoita `MI` ja paina {{key:Enter}}.
3. Kohdassa `Määritä peilauslinjan ensimmäinen piste` napsauta pöydän vasemman sivun keskikohtaa (Keskikohta).
4. Kohdassa `Määritä peilauslinjan toinen piste` napsauta pöydän oikean sivun keskikohtaa (Keskikohta).
5. Kohdassa `Poistetaanko lähdekohteet? [Kyllä (Y)/Ei (N)] <N>` paina {{key:Enter}} säilyttääksesi ne.

Pöydän alapuolella pitäisi näkyä kolme tuolia ja pöydän yläpuolella kolme peilattua tuolia. Peilatun valinnan teksti pysyy luettavana: se sijoitetaan peilattuna, mutta sitä ei kirjoiteta takaperin.

## Kierrä tuoli

1. Napsauta pöydän alapuolella oikeanpuoleisinta tuolia.
2. Kirjoita `RO` ja paina {{key:Enter}}.
3. Napsauta peruspisteeksi tuolin oikean alakulman päätepistettä.
4. Kirjoita `90` ja paina {{key:Enter}}.

Tuoli kääntyy 90 astetta vastapäivään peruspisteen ympäri. Negatiivinen kulma kääntää myötäpäivään. Kirjoittamisen sijaan voit napsauttaa toisen pisteen: kulma mitataan peruspisteestä tähän pisteeseen.

## Skaalaa pöytä

1. Valitse pöytä.
2. Kirjoita `SC` ja paina {{key:Enter}}.
3. Napsauta peruspisteeksi pöydän vasemman alakulman päätepistettä.
4. Kirjoita `1.2` ja paina {{key:Enter}}.

Pöytä on 20 % suurempi ja kasvaa poispäin peruspisteestä. Kerroin alle 1 pienentää sen.

:::note
Jos napsautat pistettä skaalauskertoimen kirjoittamisen sijaan, kerroin on peruspisteen ja tämän pisteen välinen etäisyys. Yhden piirustusyksikön päähän napsauttaminen antaa kertoimen 1. Yleensä kannattaa kirjoittaa luku.
:::

## Kumoa ja tee uudelleen

- {{key:Mod+Z}}, {{ui:Kumoa}}-painike tai `U` ja {{key:Enter}} kumoavat viimeisen komennon. Koko komento on yksi vaihe: {{cmd:COPY}}, joka teki viisi kopiota, poistaa kaikki viisi kumotessa.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, {{ui:Tee uudelleen}}-painike tai `REDO` palauttavat sen.
- Historia kertoo, mitä kumottiin ("Kumottu: COPY").

CadCraft säilyttää viimeiset 500 vaihetta. Kerrosasetukset (päällä, jäädytys, lukitus, väri) ovat asetuksia, eivät muokkauksia, joten niitä ei kumota.

## Venytä huonetta leveämmäksi

{{cmd:STRETCH}} (`S` tai {{ui:Venytä}}) siirtää vain leikkaavan ikkunan sisään jäävät kohteet: ikkunan sisällä olevat kulmat ja viivojen päät liikkuvat, kaikki muu pysyy paikallaan. Huone kasvaa, eikä se siirry.

1. Kirjoita `S` ja paina {{key:Enter}}.
2. Vedä ikkuna oikealta vasemmalle oikean seinän yli niin, että se kattaa seinän kulmat ja siihen liittyvien kohteiden päät.
3. Paina {{key:Enter}}.
4. Napsauta peruspiste, kirjoita `@600,0` ja paina {{key:Enter}}.

Suorakulmio on 600 leveämpi, ja seinään päättyneet viivat päättyvät yhä seinään. Kaari, jonka toinen pää on ikkunan sisällä, säilyttää korkeutensa. Ympyrät ja teksti liikkuvat, kun niiden keskipiste tai lisäyspiste on sisällä, ja mitoitus mittaa uuden pituutensa. Kohteet, jotka valitaan yksitellen ilman ikkunaa, vain siirtyvät.

Voit myös valita ensin: vedä leikkaava ikkuna (tai leikkaava lasso) seinän yli ilman käynnissä olevaa komentoa ja kirjoita sitten `S`. STRETCH ottaa silloin valinnan ja venyttää sen ikkunoiden sisään jäävät kohteet, aivan kuin olisit vetänyt ne sen omassa kehotteessa.

## Matriisi: rivit ja sarakkeet tai ympyrä keskipisteen ympärillä

{{cmd:ARRAY}} (`AR` tai {{ui:Matriisi}}) kopioi valinnan ruudukkoon tai ympyrään.

1. Valitse tuoli, kirjoita `AR` ja paina {{key:Enter}}. Paina {{key:Enter}} valitaksesi Suorakulmio (R).
2. Esikatselussa näkyy 4 saraketta ja 3 riviä. Kirjoita `COU`, paina {{key:Enter}}, sitten `5` sarakkeille ja `2` riveille.
3. Kirjoita `S`, paina {{key:Enter}}, sitten `600` sarakkeiden väliin ja `-900` rivien väliin (negatiivinen menee alaspäin).
4. Paina {{key:Enter}} tehdäksesi kopiot.

Tuolien rengas pöydän ympärille: valitse `PO` (Napa), napsauta pöydän keskipistettä ja aseta `I` (kohteet), `F` (täyttökulma: 360 kokonaan ympäri, 180 puolikas) ja `ROT` (kääntyvätkö kopiot kohti keskipistettä). {{cmd:ARRAYRECT}} ja {{cmd:ARRAYPOLAR}} ohittavat kysymykset.

## Yhdistä osat yhdeksi murtoviivaksi

{{cmd:JOIN}} (`J` tai {{ui:Muokkaa}} › {{ui:Lisää}} › {{ui:Yhdistä}}): valitse viivat, kaaret ja avoimet murtoviivat, joiden päät kohtaavat, ja paina {{key:Enter}}. Ne muuttuvat yhdeksi murtoviivaksi, suljetuksi, kun ne kiertävät kokonaan. Sen voi sitten siirtää yhdellä kertaa. Samalle suoralle osuvat viivat muuttuvat yhdeksi viivaksi, vaikka niiden välissä olisi aukkoja. Saman ympyrän kaaret muuttuvat yhdeksi kaareksi tai ympyräksi.

## Täsmää ominaisuudet

{{cmd:MATCHPROP}} (`MA` tai {{ui:Muokkaa}} › {{ui:Lisää}} › {{ui:Täsmää ominaisuudet}}): napsauta kohdetta, jonka ulkoasun haluat, valitse muutettavat kohteet ja paina {{key:Enter}}. Ne saavat sen tason ja värin. Teksti saa sen korkeuden, mitoitus sen mitat ja viivoitus sen kuvion. Kirjoita toisessa kysymyksessä `S` (Asetukset (S)), jos haluat kytkeä jonkin näistä pois.

## Kohdista kohteet

**Pisteiden mukaan.** {{cmd:ALIGN}} (`AL` tai {{ui:Muokkaa}} › {{ui:Lisää}} › {{ui:Kohdista}}): valitse kohteet ja paina {{key:Enter}}, napsauta sitten yhtä pistettä niissä (lähde) ja sitä kohtaa, johon sen pitää mennä (kohde).

- Yksi pari siirtää niitä. Paina {{key:Enter}} kohdassa `Määritä toinen lähdepiste` pysähtyäksesi siihen.
- Kaksi paria kääntää niitä myös, joten kahden lähdepisteen välinen viiva asettuu kahden kohdepisteen välisen viivan suuntaiseksi. CadCraft kysyy silloin `Skaalataanko kohteet kohdistuspisteiden perusteella?`: `Y` tekee niistä yhtä paljon suuremmat tai pienemmät.
- Kolmas pari peilaa niitä, jos sen kaksi pistettä ovat tuon viivan eri puolilla.

**Reunat ja välit.** {{ui:Muokkaa}} › {{ui:Lisää}} › {{ui:Kohdista ja jaa}} (tai `ALIGNPANEL`) avaa pienen paneelin piirustuksen päälle. Valitse kohteet, sitten:

- valitse kohdassa {{ui:Kohdista kohteeseen}}, mihin kohdistetaan (koko valinta, ensimmäinen tai viimeinen valitsemasi kohde tai napsauttamasi piste), ja napsauta {{ui:Vasen}}, {{ui:Keskipiste}}, {{ui:Oikea}}, {{ui:Ylä}}, {{ui:Keskellä}} tai {{ui:Ala}};
- tai valitse {{ui:Yhtä suuret raot}} tai {{ui:Yhtä suuret keskivälit}} ja napsauta {{ui:Vaakasuunnassa}} tai {{ui:Pystysuunnassa}}: ulommat kaksi kohdetta pysyvät paikallaan, ja muut jaetaan tasaisesti niiden väliin (vähintään kolme kohdetta).

Jokainen napsautus on yksi kumoamisvaihe, ja valinta pysyy, joten voit kokeilla toista. Jokainen kohde lasketaan rajauslaatikkonsa mukaan, käyttäjän koordinaatistossa (UCS), jos sellainen on asetettu. Komentoriviltä sama tehdään komennoilla {{cmd:ALIGNTO}} ja {{cmd:DISTRIBUTE}}.

## Poista ja hajota

- {{cmd:ERASE}} (`E` tai {{key:Delete}}) poistaa valitut kohteet.
- {{cmd:EXPLODE}} (`X`) hajottaa murtoviivan viivoiksi ja kaariksi, lohkoviittauksen sen kohteiksi ja mitoituksen viivoiksi, nuolenpäiksi ja tekstiksi. Hajotetut mitoitukset eivät enää mittaa itseään.

## Yleisiä virheitä

- **Etäisyyden kirjoittaminen ilman `@`-merkkiä toiseen pisteeseen.** `600,0` on absoluuttinen piste 600,0, ei "600 oikealle". Käytä `@600,0` tai pelkkää `600`, kun ristikko osoittaa oikeaan suuntaan.
- **Kierto meni väärään suuntaan.** Positiiviset kulmat kääntyvät vastapäivään.
- **Kumoaminen poisti enemmän kuin odotettiin.** Yksi kumoaminen perui koko viimeisen komennon, mukaan lukien kaikki sen tekemät kopiot.
- **Komento ei pyytänyt valitsemaan kohteita.** Kohteet olivat jo valittuina, joten komento käytti niitä. Paina ensin {{key:Esc}}, jotta aloitat ilman valintaa.
