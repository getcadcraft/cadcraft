---
title: Historia: versiot ja muutokset
summary: Tarkastele piirustuksen versioita (Studion tallentamia kopioita tallennuksen yhteydessä ja pilven versioita), avaa tai palauta niistä yksi, ja vertaa kahta niin, että muutokset näkyvät värillä.
keywords: historia, versiot, versiohistoria, palauta, edellinen versio, kumoa tallennus, vertaa, vertaa piirustuksia, dwgcompare, muutokset, lisätty, poistettu, muutettu, tilannekuva, varmuuskopio, pilviversiot
from: 141d37b3
---

## Mitä teet

Tutustu piirustuksen aiempaan versioon ja luetteloon siitä, mikä eroaa nykyisestä: mikä lisättiin, mikä poistettiin ja mikä muuttui. Ne merkitään piirustukseen väreillä.

## Avaa Historia

Kirjoita `HISTORY` (tai `HIST`) ja paina {{key:Enter}}, tai valitse {{ui:Historia…}} ryhmän {{ui:Näkymä}} valikosta {{ui:Lisää}}. Paneeli aukeaa piirustuksen viereen ja pysyy auki työskentelyn ajan, joten voit panoroida ja zoomata piirustusta, jossa värit näkyvät.

Historia toimii CadCraft Studio -sovelluksessa. Selaimessa paneeli vain ilmoittaa tämän.

## Mistä versiot tulevat

- **Tällä tietokoneella.** Joka kerta, kun piirustus avataan tiedostosta Studio-sovelluksessa, ja joka kerta, kun se tallennetaan, Studio tallentaa tiedoston kopion omaan tallennustilaansa tälle tietokoneelle. Ensimmäinen kopio on {{ui:Avattaessa}}: tiedosto sellaisena kuin se oli ennen ensimmäistä tallennusta sen päälle. Studio säilyttää kunkin piirustuksen uusimmat 25 kopiota, ja kun kaikki kopiot yhdessä ylittävät 400 MB, vanhimmat poistetaan ensin. Tallennus, joka ei muuta mitään, ei säilytä mitään. Mitään ei lähetetä.
- **Pilvessä.** Kun piirustus avataan Studio-sovelluksessa pilvitiedostoista, paneeli listaa myös {{ui:Pilvessä}}: kaikki pilven pitämät versiot numeroineen, tallentajineen ja muistiinpanoineen. Paneeli vain lukee niitä. CadCraft ei vielä lähetä omia tallennuksiaan pilveen, joten nämä ovat muilta laitteilta ja verkosta tallennettuja versioita. Kirjaudu uudelleen sisään Studio-sovelluksessa, jos se ilmoittaa, että kirjautuminen on vanhentunut.

Piirustuksella, jota ei ole vielä tallennettu, ei ole kopioita: tallenna se ensin.

## Avaa tai palauta versio

- {{ui:Avaa}} avaa version omassa välilehdessään. Piirustusta ei muuteta.
- {{ui:Palauta}} korvaa tämän piirustuksen kyseisellä versiolla. Ensin kysytään vahvistus. Ennen korvaamista Studio tallentaa nykyisen piirustuksen kopion Historiaan (merkittynä {{ui:Ennen palautusta}}), eikä tiedostoon kirjoiteta mitään ennen kuin tallennetaan. Palautusta ei voi kumota näppäinyhdistelmällä {{key:Mod+Z}}; käytä sitä kopiota.

## Vertaa

1. Napsauta version kohdalla {{ui:Vertaa}}. Sitä verrataan kohtaan {{ui:Piirustus sellaisena kuin se nyt on}}. Jos haluat verrata sitä johonkin toiseen versioon, valitse ensin se kohdasta {{ui:Vertaa kohteeseen}}.
2. Lue tulos luettelon alta: kuinka monta kohdetta lisättiin, poistettiin ja muutettiin, sekä luettelo niistä. Napsauta luettelon kohdetta, niin näkymä siirtyy siihen.
3. Piirustuksessa:
   - **vihreät** kohteet ovat lisättyjä,
   - **punaiset** kohteet ovat poistettuja (ne ovat vain vanhemmassa versiossa),
   - **oranssit** kohteet ovat muuttuneet: uusi muoto on yhtenäinen ja vanha katkoviivoitettu.
4. {{ui:Näytä piirustuksella}} kytkee värit pois päältä ja päälle; {{ui:Tyhjennä värit}} poistaa tuloksen. Paneelin sulkeminen tyhjentää värit myös.

Luettelo kertoo, mikä muuttui muutetussa kohteessa: sen teksti, se, että se siirtyi, sen muoto, taso, väri, viivatyyppi tai viivanpaksuus. Jokainen arkki verrataan erikseen; värit näkyvät avoimella arkilla.

:::note
Piirustuksella ei ole pysyvää numeroa jokaiselle kohteelle, joten CadCraft vastaa kohteita sen mukaan, mitä ne ovat: sama kohde molemmilla puolilla ei ole muuttunut; saman tyypin ja tason kohde, joka on enintään oman kokonsa päässä vanhasta kohteesta, on sama kohde muuttuneena; jäljelle jäävät lisätään tai poistetaan. Kohde, joka on siirretty kauas alkuperäisestä paikastaan, näkyy poistettuna yhdessä paikassa ja lisättynä toisessa. Lohkoviite lasketaan lohkonsa sisällön mukaan.
:::

## Yleisiä virheitä

- **”Kopioita ei vielä ole.”** Studio tallentaa kopion jokaisesta piirustuksen avauksesta ja tallennuksesta, kun piirustuksella on tiedosto tällä tietokoneella. Selainvälilehdeltä avattu tai koskaan tallennettu piirustus ei saa kopioita.
- **Pilvilista puuttuu.** Se näkyy piirustukselle, joka on avattu pilvestä Studio-sovelluksessa; levyltä avattu tiedosto ei ole pilvipiirustus.
- **Kaikki näyttää muuttuneelta.** Kahdella eri ohjelmalla tallennetulla versiolla sama piirustus kirjoitetaan eri tavoin (nimettömien lohkojen nimet, pyöristys). Vertaa CadCraft-sovelluksella tallennettuja versioita.
