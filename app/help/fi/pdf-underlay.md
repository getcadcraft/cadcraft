---
title: PDF-pohjakuvat ja PDF-tuonti
summary: Aseta PDF-sivu piirustuksen alle jäljitettäväksi ja tulostettavaksi, tai muuta sivun viivat ja teksti piirustuskohteiksi.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, pohjakuva, jäljitä, tuo pdf, skannaus, pohjapiirros, himmennys, rajaus, tasot, tartunta, avaa pdf
from: aa301d0f
---

## Kaksi tapaa tuoda PDF-sivu

- **Liitä** ({{cmd:PDFATTACH}}) säilyttää PDF:n kuvana piirustuksen alla. Jäljität sitä, tartut sen viivoihin, himmennät sen ja rajaat sen, ja se tulostuu arkin mukana. Piirustukseen tallentuu vain tiedoston nimi.
- **Tuo** ({{cmd:PDFIMPORT}}) muuttaa sivun viivat, kaaret, täytöt ja tekstin tavallisiksi piirustuskohteiksi. Ne sijoittuvat tasoille, joiden nimet tulevat PDF:stä. Niitä voi muokata vapaasti, eikä PDF-tiedostoa tarvita sen jälkeen.

Kun avaat PDF:n painikkeella {{ui:Open}}, kysytään, kumpi näistä kahdesta halutaan.

## Liitä sivu

1. Kirjoita `PDFATTACH` (tai `PDFATT`) ja valitse PDF. Jos sivuja on useita, kirjoita sivun numero.
2. Napsauta lisäyspistettä (sivun vasenta alakulmaa).
3. Paina {{key:Enter}} sivun todellista kokoa varten, tai kirjoita mittakaava: piirustusyksikköä per PDF-piste (piste on 1/72 tuumaa, joten millimetripiirustuksessa arvo on 0.3528).
4. Paina {{key:Enter}}, jos kääntöä ei tarvita, tai kirjoita kulma.

Sivu on kohde kuten lohkoviite: sitä voi siirtää, kiertää, skaalata, kopioida, poistaa ja sijoittaa tasolle. Kun kytket sen tason pois päältä, sivu katoaa. Kun zoomaat lähemmäs, sivu piirtyy uudelleen terävänä.

## Jäljitä se

Kun {{ui:Snap}} (Tartunta) on päällä, kohdistin tarttuu PDF:n omiin viivoihin: päätepisteisiin, keskikohtiin ja leikkauspisteisiin (ja {{ui:Nearest}} (Lähin), kun se tartunta on päällä). Sivulle piirrettyihin kirjaimiin tekstinä ei tartuta.

## Säädä sitä

- `PDFADJUST`: **Himmennys** (0–80 prosenttia), **Kontrasti** (0–100), **Yksivärinen** ja **Päälle/pois**, jolla sen voi piilottaa poistamatta sitä.
- `PDFCLIP`: näyttää vain sivun suorakulmion tai monikulmion. **Poista** poistaa rajauksen.
- `PDFLAYERS`: PDF:llä voi olla omia tasojaan. Komento luettelee ne. Kirjoita numero, jolla kytket tason päälle tai pois tältä pohjakuvalta. Tiedoston pois päältä olevat tasot ovat aluksi pois päältä.

## Tulosta ja tallenna

PLOT tulostaa sivun viivoina, täyttöinä ja tekstinä, joten se pysyy terävänä ja haettavana. PDF:n sisällä olevat kuvat näkyvät näytöllä, mutta niitä ei vielä tulosteta.

DWG- tai DXF 2000 -tiedosto säilyttää pohjakuvan linkkinä: tiedoston nimen, sivun, sijainnin, mittakaavan, kiertokulman, rajauksen, himmennyksen ja kontrastin. PDF itse ei ole piirustuksessa. Avaa piirustus uudelleen, kirjoita `PDF` ja valitse tiedosto uudelleen. Sivut näkyvät kehyksinä siihen asti ja saavat todellisen kokonsa vasta sitten. Vanhempi DXF (R12) ei tue pohjakuvia: se säilyttää kehyksen ja nimen. Sitä, miten muut ohjelmat lukevat tallennetun rajauksen ja mittakaavan, ei ole vielä tarkistettu niissä.

## Tuo sivu

1. Kirjoita `PDFIMPORT` (tai `PDFIM`) ja valitse PDF ja sivu.
2. Napsauta kohtaa, johon sivun vasen alakulma menee.
3. Paina {{key:Enter}} todellista kokoa varten, kirjoita mittakaava, tai valitse **Kaksi pistettä**. Sivu piirtyy todellisessa koossa. Sitten napsautat kahta pistettä, joiden välinen etäisyys tunnetaan, ja kirjoitat todellisen etäisyyden. Kaikki skaalautuu sen mukaan.

Viivoista tulee viivoja ja murtoviivoja, ympyrät ja kaaret tunnistetaan, täytetyistä muodoista tulee kiinteitä viivoituksia, ja teksti tulee tekstiksi tasolle, jonka nimi päättyy `-TEXT`. Tuonti on yksi kumoamisvaihe. PDF:n kuvia ei tuoda: liitä sivu sen sijaan. Skannaus (sivu, joka on vain kuva) ei sisällä viivoja tuotavaksi.

PDF-tiedostoja luetaan epäluotettavina tiedostoina: skriptejä ei suoriteta, ja hyvin suuri sivu katkaistaan, ja siitä ilmoitetaan.
