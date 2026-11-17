---
title: Aseta tekstin fontti ja koko tekstityyleillä
summary: Tee nimettyjä tekstityylejä, joissa on fontti, korkeus, leveys ja kallistus, aseta yksi nykyiseksi uudelle tekstille, ja muuta tyyliä, jolloin kaikki sitä käyttävät tekstit muuttuvat.
keywords: tekstityyli, tyyli, STYLE, ST, TEXTSTYLE, -STYLE, fontti, tekstin korkeus, leveyskerroin, vinous, kallistus, fontin vaihto, vakiotyyli, tyylin käyttö, DDSTYLE
from: bd5a4883
---

## Mitä teet

Tee tekstityyli nimeltä `Notes`, jolla on oma fontti ja korkeus, käytä sitä uudelle tekstille ja muuta myöhemmin tyyliä, jotta jokainen siitä käyttävä huomautus muuttuu kerralla.

## Vaiheet

1. Kirjoita {{cmd:STYLE}} (`ST`) ja paina {{key:Enter}}, tai napsauta {{ui:Tekstityyli}}-painiketta {{ui:Piirrä}}-työkalurivillä. {{ui:Tekstityyli}}-valintaikkuna listaa piirustuksen tyylit. Jokaisessa piirustuksessa on `Standard`.
2. Napsauta {{ui:Uusi…}}, kirjoita `Notes` uuden tyylin nimeksi ja napsauta {{ui:OK}}. Tilarivillä lukee: ”Tekstityyli Notes luotu ja asetettu nykyiseksi.”
3. Kohdassa {{ui:Fontti}} valitse tai kirjoita fontin nimi. Aseta {{ui:Korkeus (0 = kysy joka kerta)}} luvuksi, kuten `2.5`, jotta jokainen uusi teksti saa tuon korkeuden. Jätä arvoksi `0`, jos haluat, että korkeutta kysytään joka kerta.
4. Aseta {{ui:Leveyskerroin}} ja {{ui:Vinokulma (°)}}, jos haluat kapeampia, leveämpiä tai vinoja kirjaimia. Näyterivi näyttää tuloksen.
5. Napsauta {{ui:Sulje (C)}}. Piirrä teksti komennolla {{cmd:TEXT}} tai {{cmd:MTEXT}}: uusi teksti ottaa nykyisen tyylin.
6. Jos haluat käyttää jo tekemääsi tyyliä, avaa valintaikkuna uudelleen, valitse tyyli luettelosta ja napsauta {{ui:Aseta nykyiseksi}}.
7. Jos haluat antaa tyylin jo piirretylle tekstille, valitse teksti, avaa valintaikkuna, valitse tyyli ja napsauta {{ui:Käytä valittuun tekstiin}}.

## Muuta tyyliä myöhemmin

Muuta tyylin fonttia, korkeutta, leveyttä tai kallistusta valintaikkunassa, ja jokainen sitä käyttävä teksti seuraa yhdellä kumoamisvaiheella ({{key:Mod+Z}}). Tilarivi kertoo, kuinka monta tekstiä seurasi.

## Huomautuksia

- {{ui:Poista}} ei hyväksy `Standard`-tyyliä eikä tyyliä, jota teksti yhä käyttää: vaihda ensin se teksti toiseen tyyliin.
- Tyylit tallennetaan piirustuksen STYLE-taulukkoon, joten DXF- ja DWG-tiedostot säilyttävät ne.
- Komentorivillä `-STYLE` tekee saman valinnoilla (Nykyinen (C), Uusi (N), Fontti, Korkeus (H), Leveys (W), Vinous (O), Poista (D), Luettelo).
- Tietokoneessa, joka lukee piirustuksen, puuttuvaa fonttia näytetään toisella kirjasinlajilla.
