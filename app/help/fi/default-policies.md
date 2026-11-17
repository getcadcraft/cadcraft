---
title: "Oletuskäytännöt: määritä, mistä uusi piirustus alkaa"
summary: Määritä kerran, mitkä yksiköt, pituuden muoto, tarkkuus, tekstin korkeus ja arkin paperi uusi piirustus alkaa käyttää metrisille ja imperiaalisille töille, ja jaa käytännöt toimiston kesken pienenä tiedostona.
keywords: oletus, oletukset, oletuskäytännöt, käytäntö, toimiston standardi, toimiston oletukset, mallipohja, uusi piirustus, yksiköt, insunits, pituuden muoto, arkkitehtuuri, tarkkuus, luprec, tekstin korkeus, arkin paperi, a1, jako, vienti, tuonti, json
from: 7b80fd13
---

## Mitä teet

Määritä kerran, mistä uusi piirustus alkaa, jotta toimiston kenenkään ei tarvitse ajaa UNITS-komentoa ja muuttaa samoja asioita joka kerta. Tämä on lisäosa: se on pois päältä, kunnes kytket sen päälle, ja käytäntö, jota et aseta, jättää CadCraftin oman oletuksen ennalleen.

:::note
Nämä ovat oletuksia uusille piirustuksille ja uusille arkeille. Jo aloitettua piirustusta ei muuteta, eikä avattua piirustustakaan.
:::

## Vaiheet

1. Avaa Asetukset, siirry kohtaan {{ui:Lisäosat}} ja kytke päälle {{ui:Oletuskäytännöt}}.
2. Avaa Asetuksissa **CadCraft**-välilehti ja valitse vasemmalla olevasta luettelosta {{ui:Oletuskäytännöt}}.
3. Aseta haluamasi käytännöt. Jokainen alkaa **CadCraftin omasta** arvosta. Käytännössä, jossa on **Metrinen**- ja **Imperiaalinen**-ruutu, on yksi arvo kullekin piirustustyypille; täytä vain tarvitsemasi.
4. Tallennuspainiketta ei ole: jokainen muutos tallentuu heti, kun teet sen.
5. Aloita uusi piirustus. Sillä on yksiköt, pituuden muoto, tarkkuus ja tekstin korkeus, jotka asetit, ja sen ensimmäinen uusi arkki on valitsemallasi paperilla.

## Käytännöt

- **Uuden piirustuksen yksiköt**: ei mitään, millimetrit, senttimetrit, metrit, tuumat tai jalat.
- **Pituuden muoto** ja **Pituuden tarkkuus**: se, minkä UNITS-komento asettaa uudelle piirustukselle.
- **Uuden tekstin korkeus** piirustusyksiköissä.
- **Uuden arkin paperi**: paperi, jota Uusi arkki käyttää.
- **Merkintöjen koot paperilla** (Asetukset › Yleiset › Oletuskäytännöt): toimiston korkeudet millimetreinä tulostettuna. CadCraft käyttää niitä huomautuksille ja tunnisteille: {{cmd:ANNOSCALE}} asettaa uuden tekstin korkeudeksi tuon korkeuden merkintämittakaavassa. Katso [Yksiköt, paperit ja mittakaavat](topic:units-papers-scales#annotate-by-scale).

Tuumissa tai jaloissa oleva piirustus käyttää imperiaalisia arvoja; muu piirustus käyttää metrisiä. Piirustus ilman yksiköitä käyttää yksikköjärjestelmää, joka on asetettu kohdassa Asetukset › Yleiset › Oletuskäytännöt, tai metristä, jos mitään ei ole asetettu.

## Jaa toimiston kesken

1. Avaa Asetuksissa **Yleiset**-välilehti ja valitse {{ui:Oletuskäytännöt}}.
2. Napsauta {{ui:Tallenna tiedostoon}}. Saat pienen tiedoston, jonka nimi päättyy `.ccdefaults.json`.
3. Toisella tietokoneella kytke lisäosa päälle, avaa sama paikka ja napsauta {{ui:Lataa tiedostosta}}. Tiedoston käytännöt korvaavat sen tietokoneen käytännöt.

Yksi tiedosto sisältää kaikkien CadCraft-sovellusten käytännöt, joten sama tiedosto toimii BimCraft-sovelluksessa.

## Hyvä tietää

- Arkin mittakaavalle ei ole käytäntöä: uuden arkin näkymä sovitetaan piirustukseen, ja mittakaavan asetat arkilla.
- Mitoitustyylille ei ole käytäntöä: uudella piirustuksella ei ole nimettyjä mitoitustyylejä. Määritä mitoitukset komennolla DIMSTYLE tai aloita piirustuksesta, jossa on omasi.
- Tiedosto on tavallista, avointa JSON-tiedostoa. Käytäntö, jonka tiedosto nimeää ja jota tämä versio ei tunne, jätetään pois ja mainitaan viestissä; loput latautuvat silti.
- Käytännöt tallennetaan tähän selaimeen, ei piirustukseen. Kun kytket lisäosan pois, kaikki on jälleen CadCraftin omaa.
