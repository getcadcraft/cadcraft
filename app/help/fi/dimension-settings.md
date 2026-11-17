---
title: Aseta mitoitusten koot, desimaalit ja mittakaava
summary: Valitse tekstin korkeus, nuolen koko, desimaalit ja kokonaismittakaava uusille mitoituksille, muuta jo tehtyjä mitoituksia ja ymmärrä, miten mitoitustyylit toimivat CadCraft-sovelluksessa.
keywords: mitoitustyyli, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, kokonaismittakaava, desimaalit, nuolen koko, merkintämittakaava, dimtextunit, yksiköt tekstissä, mm, cm, m, km, millimetrit, metrit, dimlfac, dimpost
from: 8ec82a07
---

## Mitä opit

Kuinka suuri mitoitustekstin ja nuolten koko on, miten ne asetetaan piirustukselle, joka tulostetaan mittakaavassa 1:50 tai 1:100, ja miten muutat jo tekemiäsi mitoituksia.

## Miten mitoitusten koot toimivat

Jokaisella mitoituksella on oma koko-asetusjoukkonsa: tekstin korkeus, nuolen koko, desimaalit, tekstin ympärillä oleva väli, kuinka pitkälle apuviivat ulottuvat mittaviivan yli ja kuinka kaukana ne alkavat kohteesta. Oletukset ovat lähellä yleistä ISO-tyyliä:

| Asetus | Oletus | Komento |
|---|---|---|
| Tekstin korkeus | 2.5 | {{cmd:DIMTXT}} |
| Nuolen koko | 2.5 | {{cmd:DIMASZ}} |
| Desimaalit | 2 (lopun nollat jätetään pois) | {{cmd:DIMDEC}} |
| Väli tekstin ympärillä | 0.625 | {{cmd:DIMGAP}} |
| Apuviiva mittaviivan yli | 1.25 | {{cmd:DIMEXE}} |
| Etäisyys kohteesta | 0.625 | {{cmd:DIMEXO}} |
| Kokonaismittakaava | 1 | {{cmd:DIMSCALE}} |

Jokainen koko kerrotaan **kokonaismittakaavalla**. Aseta koot niin kuin haluat niiden olevan paperilla (2.5 mm teksti), ja aseta kokonaismittakaava tulostusmittakaavaksi (50, kun mittakaava on 1:50). Teksti on silloin 2.5 × 50 = 125 piirustusyksikköä korkea, ja se tulostuu 2.5 mm:n kokoisena.

:::note
Nimettyjä mitoitustyylejä hallitaan komennolla {{cmd:DIMSTYLE}}: katso alla oleva osio. Jokainen mitoitus säilyttää myös asetukset, joilla se tehtiin, joten voit yhä muuttaa yhtä mitoitusta yksin kohdassa {{ui:Ominaisuudet}}.
:::

## Aseta uusien mitoitusten koot

Kumpikin tapa alla muuttaa vain sellaisia mitoituksia, jotka teet myöhemmin.

### Nykyiset asetukset -paneelissa

1. Paina {{key:Esc}}, jotta mitään ei ole valittuna. {{ui:Malli}}-välilehdellä oikea paneeli on nimeltään {{ui:Nykyiset asetukset}}.
2. Vieritä paneelia alas kohtaan {{ui:Uudet mitoitukset}}, tason, värin, yksiköiden ja {{ui:Taso 0}}-rivien ohi (pienellä näytöllä se alkaa alareunan alapuolelta). Napsauta kenttää {{ui:Kokonaismittakaava}}, kirjoita `50` ja paina {{key:Enter}}.
3. Aseta {{ui:Tekstin korkeus}}, {{ui:Nuolen koko}} ja {{ui:Desimaalit}} samalla tavalla, jos haluat muita arvoja.

Tilarivi vahvistaa jokaisen, esimerkiksi ”Uusien mitoitusten kokonaismittakaava: 50”.

### Komentorivillä

1. Kirjoita `DIMSCALE` ja paina {{key:Enter}}.
2. Kehotteessa `Enter new value for DIMSCALE <1>` kirjoita `50` ja paina {{key:Enter}}.

Historia vahvistaa: ”DIMSCALE = 50. Uudet mitoitukset käyttävät sitä; valitse olemassa olevat, jos haluat muuttaa niitä.” {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} ja {{cmd:DIMEXO}} toimivat samalla tavalla. Säilytä nykyinen arvo painamalla kehotteessa {{key:Enter}}.

### Jalat ja tuumat mitoituksissa

Uudet mitoitukset käyttävät piirustuksen pituuden muotoa: aseta se kohdassa {{ui:Pituuden muoto}} ({{ui:Nykyiset asetukset}}) tai komennolla {{cmd:UNITS}} (katso [Jalat ja tuumat](topic:units-papers-scales#feet-and-inches-and-fractions)), ja seuraava mitoitus näyttää `12'-6 1/2"`. {{cmd:DIMLUNIT}} asettaa vain mitoitusten muodon (2 desimaalia, 3 tekninen, 4 arkkitehtuuri, 5 murtoluku). Jo tehdylle mitoitukselle valitse se ja valitse {{ui:Muoto}} kohdassa {{ui:Ominaisuudet}}; murtolukumuodossa sen {{ui:Murtoluku}}-ruutu ottaa kahden potenssin (4 = 1/16).

## Mitoitukset millimetreinä, senttimetreinä, metreinä tai kilometreinä

Mitoitus mittaa piirustusyksiköissä. Se voi kirjoittaa pituuden sen sijaan millimetreinä, senttimetreinä, metreinä tai kilometreinä, yksikkö luvun jälkeen: 1250 mm:n seinä näkyy muodossa `1250 mm`, `125 cm`, `1.25 m` tai `0.00125 km`.

1. Aseta piirustuksen {{ui:Yksiköt}} ensin kohdassa {{ui:Nykyiset asetukset}} (katso [Yksiköt, paperikoot ja mittakaavat](topic:units-papers-scales#drawing-units)), jotta CadCraft tietää, mitä yksi piirustusyksikkö on. Piirustus ilman yksiköitä luetaan millimetreinä, ja {{cmd:DIMTEXTUNIT}} kertoo sen.
2. Uusille mitoituksille: paina {{key:Esc}}, jotta mitään ei ole valittuna, ja valitse kohdassa {{ui:Uudet mitoitukset}} {{ui:Yksiköt tekstissä}}: {{ui:Piirustuksen yksiköt}}, `mm`, `cm`, `m` tai `km`.
3. Jo tehdyille mitoituksille: valitse ne ja valitse kohdassa {{ui:Ominaisuudet}} › {{ui:Ensisijaiset yksiköt}} {{ui:Yksiköt tekstissä}}.

Tai kirjoita {{cmd:DIMTEXTUNIT}} (`DTU`) ja vastaa `D`, `MM`, `CM`, `M` tai `KM`: kun mitoituksia on valittuna, ne muuttuvat (yksi kumoamisvaihe); kun mitään ei ole valittuna, se asettaa uudet mitoitukset.

{{ui:Desimaalit}} ({{cmd:DIMDEC}}) asettaa yhä, kuinka monta desimaalia näkyy: metreillä ja 3 desimaalilla 1234 mm näkyy muodossa `1.234 m`. Teksti kirjoitetaan desimaalilukuna. Arkilla mitoitukset mitataan arkin paperiyksikössä (millimetreinä tai tuumina).

Tallennettu DWG tai DXF säilyttää valinnan mitoituksen mittakaavana (DIMLFAC) ja jälkiliitteenä (DIMPOST, ` m`), joten muut ohjelmat näyttävät saman tekstin. Jos muutat piirustuksen {{ui:Yksiköt}}-asetusta myöhemmin, mm-, cm-, m- tai km-yksiköissä kirjoitetut mitoitukset sovitetaan uudelleen, joten ne kertovat yhä oikean pituuden. {{ui:Asetettu käsin (mittakaava tai jälkiliite)}} tarkoittaa, että mitoituksen {{ui:Mittauksen mittakaava}} tai jälkiliite on asetettu jollakin muulla tavalla; valitse yksikkö korvataksesi ne.

## Muuta jo tehtyjä mitoituksia

1. Napsauta yhtä mitoitusta. Oikean paneelin otsikko on {{ui:Dimension}}-sana, eli {{ui:Mitoitus}}.
2. Asetukset ovat osioissa; vieritä paneelia alas päästäksesi myöhempiin:
   - {{ui:Yleiset}}: {{ui:Mitoitustyyli}}
   - {{ui:Geometria}}: {{ui:Laji}} ja {{ui:Mittaus}} (vain luku)
   - {{ui:Teksti}}: {{ui:Tekstin ohitus}} ja {{ui:Tekstin korkeus}}
   - {{ui:Viivat ja nuolet}}: {{ui:Nuolen koko}}
   - {{ui:Sovitus}}: {{ui:Kokonaismittakaava}}
   - {{ui:Ensisijaiset yksiköt}}: {{ui:Desimaalit}}
3. Kirjoita uusi arvo ja paina {{key:Enter}}.

Mitoitus piirtyy heti uudelleen. Kulmamitoituksissa {{ui:Desimaalit (°)}} asettaa kulman desimaalit.

:::note
Kun useita mitoituksia on valittuna, paneeli näyttää rivit, jotka niillä on yhteisiä, ja arvo, joka eroaa niiden välillä, näyttää {{ui:Vaihtelee}}. Kirjoittamasi arvo muuttaa jokaista valittua mitoitusta yhdellä askeleella, joten yksi {{key:Mod+Z}} palauttaa ne kaikki.
:::

## Avatuista piirustuksista peräisin olevat mitoitukset

Avatusta DWG- tai DXF-tiedostosta peräisin oleva mitoitus näytetään täsmälleen niin kuin toinen ohjelma sen piirsi. Sen paneelissa lukee ”Näytetään niin kuin ohjelma, joka sen teki, piirsi sen. Muuta sitä, niin CadCraft piirtää sen uudelleen omalla tyylillään.” Heti kun muutat jotakin arvoa, siirrät otetta tai siirrät mitoitusta, CadCraft piirtää sen uudelleen omilla nuolenpäillään ja fontillaan käyttäen tiedostosta luettuja kokoja.

Jotkin mitoitukset voidaan lukea vain piirrettyinä, ei muokattavina mitoituksina; paneeli näyttää silloin ”Piirretty lähteestä” ja lohkon nimen, ja ruutu ”Tietoja tiedostosta” laskee ne.

## Yleisiä virheitä

- **DIMSCALE-arvon muuttaminen ei muuttanut mitään näytöllä.** Asetus koskee uusia mitoituksia. Valitse olemassa olevat ja muuta paneelissa {{ui:Kokonaismittakaava}}-arvoa.
- **Desimaalit näyttävät vähemmän numeroita kuin on asetettu.** Lopun nollat jätetään pois: 2 desimaalilla näkyy `1250` ja `1250.5`, ei `1250.00`.
- **Teksti on oikean korkuinen paperilla näkymäruudussa mutta väärä mallitulostuksessa.** Kokonaismittakaavan on vastattava tulostusmittakaavaa. Tulostus, joka sovitetaan paperiin, antaa oudon mittakaavan; valitse tulostusikkunassa vakiomittakaava.
- **Yksiköt, kuten mm tai m, tekstissä.** Valitse {{ui:Yksiköt tekstissä}} (katso [Mitoitukset millimetreinä, senttimetreinä, metreinä tai kilometreinä](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Muille sanoille luvun jälkeen kirjoita ne ohitukseen: `<> TYP.`.

## Nimetyt mitoitustyylit

Kirjoita `DIMSTYLE` (`D`), niin avautuu {{ui:Mitoitustyylien hallinta}}. Se luettelee piirustuksen tyylit, kuinka monta mitoitusta kukin käyttää ja mikä on nykyinen. **Standard** on aina mukana.

- {{ui:Aseta nykyiseksi}}: uudet mitoitukset käyttävät tuon tyylin asetuksia ja kantavat sen nimeä.
- {{ui:New…}}: uusi tyyli, joka alkaa kopiona valitsemastasi tyylistä.
- {{ui:Modify…}}: samat kentät kuin {{ui:Ominaisuudet}}-paneelin mitoitusosiossa (viivat ja nuolet, teksti, sovitus, yksiköt, vaihtoehtoiset yksiköt, toleranssit). Kun painat {{ui:OK}}, tyyli muuttuu **ja jokainen sitä käyttävä mitoitus muuttuu sen mukana**, asetus kerrallaan. Asetus, jonka muutit yhdelle mitoitukselle yksin, pysyy ennallaan, ellei tyyli muuttanut sitä asetusta.
- {{ui:Rename…}} ja {{ui:Poista}}: Standardia ei voi nimetä uudelleen tai poistaa, eikä nykyistä tyyliä tai tyyliä, jota mitoitukset käyttävät.
- {{ui:Compare…}}: mikä eroaa kahden tyylin välillä.
- {{ui:Käytä valittuihin}}: valitse ensin mitoitukset; ne saavat tyylin asetukset ja nimen.

`-DIMSTYLE` tekee saman komentoriviltä: `Restore`, `Save` (nykyiset asetukset, mukaan lukien ne, jotka kirjoitit komennoilla {{cmd:DIMTXT}} ja muut, nimen alle), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Tyylit tallennetaan DWG- tai DXF-tiedostoon (sen mitoitustyylitaulukkoon) ja luetaan avatuista tiedostoista. *Nykyistä* tyyliä ei tallenneta: piirustus avautuu niin, että Standard on nykyinen. Standard säilyttää omat asetuksensa, kun joku muu tyyli on nykyinen.

## Muuta mitoituksen tekstiä ja apuviivoja

{{cmd:DIMEDIT}} (`DED`) toimii valituille mitoituksille: **Aloitus** palauttaa tekstin sinne, minne tyyli sen asettaa, **Uusi** kirjoittaa muun tekstin (`<>` tarkoittaa mitattua arvoa), **Kierrä** kääntää tekstin, ja **Vino** kallistaa vaaka- ja tasattujen mitoitusten apuviivat kirjoittamaasi kulmaan (paina {{key:Enter}}, jos et halua mitään). {{cmd:DIMTEDIT}} siirtää tekstin mittaviivan **Vasen**-, **Oikea**- tai **Keskellä**-kohtaan, tai kääntää sen (**Kulma**), tai lähettää sen **Aloitus**-paikkaansa. Teksti on aina mittaviivalla: sitä ei voi vetää vapaaseen paikkaan.
