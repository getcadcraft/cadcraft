---
title: Asiakirjat ja revisiot (holvi)
summary: Vaiheittainen opas yhteen todelliseen työhön: aseta projektikansio hallintaan, kuittaa piirustus ulos, muuta sitä, kuittaa sisään merkinnällä, lähetä tarkastettavaksi, hyväksy ja julkaise, katso historia ja käyttö, mitä toinen henkilö näkee lukituksen aikana ja miten se toimii pilvikansioiden kanssa.
keywords: holvi, asiakirjat, opas, opetusohjelma, kuittaa ulos, kuittaa sisään, revisio, julkaisu, hyväksyminen, lukitus, historia, missä käytetään, pilvikansio, projektikansio, asiakirjahallinta, pdm, kaksi henkilöä, jaettu kansio
from: 3829528d
---

## Mitä teet

Ana työskentelee Riverside Clinic -hankkeen parissa kollegansa Benin kanssa. Hankkeen piirustukset ovat yhdessä kansiossa, johon molemmat pääsevät (jaettu asema, synkronoitu kansio tai pilvikansio). Lopussa yksi tiedosto on kulkenut ensimmäisestä kopiostaan julkaistuun revisioon **A**, sitä on muutettu uudelleen revisiona **B.1**, on nähty, kuka teki mitäkin, ja on nähty, mitä Ben näkee, kun Ana pitää tiedostoa hallussaan.

Kaikki tallennetaan piilotettuun `.ccvault`-kansioon tiedostojen viereen: ei palvelinta, mitään ei ladata ylös (pilvikansio on poikkeus, katso viimeinen vaihe). Kaikki painikkeet ja säännöt yhdessä paikassa: katso aihe *Asiakirjat: kuittaa ulos, revisiot ja julkaisu*, jos sovelluksessasi se on.

## 1. Aseta projektikansio

1. Valitse {{ui:Asiakirjat…}} **Näytä**-välilehden **Lisää**-valikosta tai kirjoita `DOCUMENTS` (tai `DOCS`) ja paina {{key:Enter}}.
2. Valitse {{ui:Valitse projektikansio}} ja valitse kansio, joka sisältää hankkeen piirustukset. (Projektikansiot toimivat Studio-sovelluksessa ja selaimissa, jotka voivat avata kansion, kuten Chrome ja Edge. Muissa selaimissa paneeli kertoo siitä.)
3. Valitse {{ui:Muuta}} kohdasta **Käyttäjä:** ja kirjoita nimesi, `Ana` (jos kysytään, myös tämän tietokoneen nimi). Paneeli näyttää nyt *Käyttäjä: Ana koneella* ja tietokoneen. Nimi kirjautuu kaikkeen tehtävään.
4. Valitse {{ui:Aloita holvi tässä kansiossa}} ja kirjoita hankkeen nimi, `Riverside clinic`. Paneeli kertoo *Holvi aloitettu: Riverside clinic.*

## 2. Ota tiedosto hallintaan

1. Avaa **Tiedostot holvin ulkopuolella** ja valitse {{ui:Lisää}} kohdasta `plans/A-101.dxf`.
2. Se ilmestyy kohtaan **Tiedostot holvissa** revisiolla **A.1**, tilassa **Työn alla**. A.1 on sen ensimmäinen kopio; holvi säilyttää kopion jokaisesta revisiosta.

## 3. Kuittaa ulos, muuta, kuittaa sisään

1. Valitse {{ui:Avaa}} kohdasta `plans/A-101.dxf`. Piirustus aukeaa CadCraft-sovellukseen, ja paneeli sulkeutuu, jotta piirustus näkyy. Paneeli on yhä yhden komennon päässä: `DOCUMENTS`.
2. Avaa paneeli uudelleen ja valitse {{ui:Kuittaa ulos}}. Rivillä lukee nyt **Kuitattu ulos: Ana**. Lukitustiedosto on tehty kansioon `.ccvault/locks`; muut eivät voi kuitata tätä tiedostoa ulos, ennen kuin se kuitataan sisään.
3. Piirrä jotakin: lisää viiva, siirrä seinä. Holvin tiedoston päälle ei voi tallentaa mitään, ellei piirustus ole kuitattu ulos Analle; {{ui:Tallenna nimellä}} toimii aina omasta kopiosta.
4. Avaa paneeli, valitse {{ui:Kuittaa sisään}} ja kirjoita, mikä muuttui (`Moved the door`). Paneeli kertoo *kuitattu sisään revisiona A.2*. Projektikansion tiedosto on nyt se piirustus, jonka avasit, ja lukitus on poistunut. Sisäänkuittaus ilman muutoksia säilyttää revision.

Jos Ana muuttaa mieltään, {{ui:Kumoa uloskuittaus}} palauttaa tiedoston ilman uutta revisiota.

## 4. Tarkastus ja julkaisu

1. Valitse {{ui:Lähetä tarkastettavaksi}}. Tila muuttuu tilaan **Tarkastettavana**, ja tiedosto on vain luettavissa.
2. Ennen hyväksymistä valitse {{ui:Projektin asetukset}} ja listaa, kuka saa hyväksyä (yksi nimi riviä kohti), esimerkiksi `Ben` ja `Carla`. Rastita sääntö, että hyväksyjän on oltava joku muu kuin tekijä. Valitse {{ui:Tallenna asetukset}}. Nyt itse holvi estää kaikki muut.
3. Ben (tai Carla) valitsee {{ui:Hyväksy}} ja kirjoittaa hyväksyjän nimen. Tila muuttuu tilaan **Julkaistu**, ja revisio on **A**, merkintöineen *hyväksynyt* ja nimi. Julkaistu tiedosto on vain luettavissa. {{ui:Lähetä takaisin}} olisi palauttanut sen tilaan Työn alla, syyn kanssa.

Hyväksyjän nimi on paneeliin kirjoitettu nimi; se on merkintä siitä, kuka hyväksyi, ei todiste henkilöllisyydestä.

## 5. Uusi revisio

1. Valitse julkaistusta tiedostosta {{ui:Uusi revisio}}. Varaat sen seuraavalle kirjaimelle.
2. Muuta sitä ja valitse {{ui:Kuittaa sisään}}. Revisio on **B.1**, tilassa Työn alla. Julkaise se samalla tavalla, niin siitä tulee **B**. {{ui:Kumoa uloskuittaus}} ennen ensimmäistä sisäänkuittausta jättää sen tasolle **A**.

Revisiokirjaimet kulkevat A, B … Z, AA, AB. Jos standardisi jättää joitakin kirjaimia pois, projektiasetus *Käytä ASME Y14.35 -jaksoa* ohittaa seuraavissa revisioissa kirjaimet I, O, Q, S, X ja Z.

## 6. Katso, mitä tapahtui

Avaa tiedoston nimi, niin näet sen tiedot:

- **{{ui:Historia}}**: jokainen tapahtuma, uusin ensin, kenen toimesta, mistä koneesta ja milloin: *kuitattu sisään A.2*, Ana, *julkaistu*, Ben ja niin edelleen.
- **{{ui:Revisiot}}**: revisiotaulukko. {{ui:Avaa kopio}} avaa revision tavallisena kopiona, joka ei voi korvata holvin tiedostoa; {{ui:Vertaa kohteeseen}} luettelee, mitä lisättiin, poistettiin ja muutettiin edelliseen revisioon verrattuna tai mihin tahansa muuhun.
- **{{ui:Käyttää}}**: piirustukset, joihin se linkittyy (ulkoiset viittaukset).
- **{{ui:Käyttäjät}}**: {{ui:Käyttäjät}} luettelee jokaisen muun holvin piirustuksen, joka linkittyy tähän: kun muutat pohjapiirrosta, tiedät, mitkä arkit pitää tarkistaa.

## Revisio arkilla

Kun piirustus on auki (ja siinä on asettelu), valitse {{ui:Revisiolohko}}: julkaistujen revisioiden taulukko piirtyy arkin oikeaan yläkulmaan. Valitse {{ui:Täytä piirustusotsikot}}, jolloin piirustusotsikon attribuutit, joiden tunnisteet ovat REV, VAULT.REV, VAULT.STATE, VAULT.DATE tai APPROVED_BY, täyttyvät tiedoston revisiolla, tilalla, päiväyksellä ja hyväksyjällä. Kun hyväksyt seuraavan julkaisun, revisiolohko päivittyy.

## 7. Mitä Ben näkee, kun Ana pitää tiedostoa hallussaan

Kuittaa tiedosto nyt uudelleen ulos, ja pyydä Beniä avaamaan sama projektikansio omalla tietokoneellaan ja avaamaan paneeli. Tiedoston rivillä hän näkee **Kuitattu ulos: Ana** koneelta, **alkaen** kellonajasta, eikä {{ui:Kuittaa ulos}}-painiketta. Jos hän yrittää silti, holvi estää: lukitus on tiedosto, jota järjestelmä ei tee kahdesti, joten kaksi ihmistä ei voi molemmat pitää tiedostoa hallussaan, edes samalla sekunnilla, kun kansio on levyllä Studio-sovelluksessa. (Selaimessa kansio sallii vain parhaan mahdollisen yrityksen, ja paneeli kertoo siitä kohdassa **Kansio**.)

Jos Ana on poissa ja Ben tarvitsee tiedostoa, {{ui:Pura uloskuittaus}} vapauttaa sen. Hänen on kirjoitettava syy; se menee lokiin sen mukaan, kenen uloskuittaus se oli. Kun projektissa on luettelo ylläpitäjistä, vain he voivat. Yli vanhentumisrajan (oletuksena 14 päivää) vanha uloskuittaus merkitään *pitkään*. Purkamisen jälkeen Anan myöhässä tuleva sisäänkuittaus hylätään, joten Ana ja Ben eivät voi korvata toistensa töitä.

## 8. Pilvikansiot

Pilvikansio on projektikansio, joka on tiimin pilvitallennuksessa, joten tiimi ei tarvitse jaettua asemaa. Studio-sovelluksessa, kirjautuneena CadCraft-tiliin, paneelissa näkyy {{ui:Avaa pilvikansio}} {{ui:Valitse projektikansio}}-painikkeen vieressä. Valitse se ja valitse kansio, joka on luettelossa muodossa työtila / kansio. Työtilan omistaja luo kansion ensin, ja tiimin pilvitallennuksen on oltava käytössä. Kaikki yllä kuvattu toimii samalla tavalla; palvelin tekee lukituksen, ja se on tiukka ihmisten välillä. Jos et ole kirjautunut, paneeli pyytää kirjautumaan. Tavallisessa selainvälilehdessä pilvipainiketta ei tarjota; käytä Studio-sovellusta.

## Kokeile

Tee yllä olevat kahdeksan vaihetta oikean tiedoston kopiolla. Kahden henkilön vaiheisiin tarvitset toisen henkilön tai kaksi ikkunaa kahdella nimellä. Jos kokeilet sitä oikeassa jaetussa kansiossa, Yhteisön testaussivu luettelee tarkistuksen, joka kysyy juuri tätä, ja ottaa tulokset vastaan.
