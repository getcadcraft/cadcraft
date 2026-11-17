---
title: Käytä parametreja ja yhtälöitä
summary: Nimeä mitat, ohjaa niitä lausekkeilla kuten leveys / 2 ja kirjoita luku ohjattuun mittaan muuttaaksesi sitä ohjaavaa.
keywords: parametrit, par, parametrien hallinta, yhtälöt, lausekkeet, muuttujat, kaksisuuntainen, suunnitteluaikomus, käyttäjäparametri, fx
from: 650b9844
---

## Yksi taulukko kaikille mitoille

{{ui:Parametrit}}-paneeli ({{ui:Parametrit}}-painike {{ui:Parametrinen}}-ryhmässä, tai kirjoita {{cmd:PARAMETERS}}) luettelee jokaisen mittarajoitteen (`d1`, `rad1`, `dia1`, `ang1`, tai nimen, jonka annoit) ja omat parametrisi yhdessä. Mitä tahansa nimeä voi käyttää missä tahansa lausekkeessa.

Jokaisella rivillä on:

- **Nimi**: kirjoita uusi nimi nimetäksesi uudelleen; jokainen lauseke, joka käyttää sitä, seuraa perässä.
- **Lauseke**: luku (`40`) tai lauseke (`width / 2 + gap`). Kirjoita siihen ja paina {{key:Enter}}: piirustus seuraa.
- **Arvo**: mihin se laskee. Rivillä, jota lauseke ohjaa, voit kirjoittaa tähän myös luvun: CadCraft selvittää sen takana olevan parametrin. Kun `d1 = width / 2`, arvon `30` kirjoittaminen d1:n arvoon asettaa `width`-arvon 60:ksi.

Kun kaksi parametria ohjaa arvoa (`width / 2 + gap`), valintaikkuna kysyy, kumman muutat. Jokainen muutos on yksi kumoamisvaihe ({{key:Mod+Z}}).

## Lisää omia

1. Avaa {{ui:Parametrit}}-paneeli.
2. Kirjoita nimi (`gap`) ja arvo (`10`), valitse sitten {{ui:Lisää}}.
3. Käytä sitä: kirjoita d1:n lausekkeeseen `width / 2 + gap` ja paina {{key:Enter}}.

Nimet alkavat kirjaimella tai `_`-merkillä ja sisältävät kirjaimia, numeroita ja `_`-merkkejä. Funktioiden nimet, `pi` ja yksikkönimet eivät voi olla nimiä.

## Lausekkeet

| Kirjoita | Tarkoittaa |
|---|---|
| `+ - * / ^ %` | yhteen-, vähennys-, kerto-, jakolasku, potenssi, jakojäännös |
| `( )` | ryhmittely |
| `sin cos tan asin acos atan atan2` | trigonometria asteina |
| `sqrt pow exp ln log abs sign` | juuret, potenssit, logaritmit |
| `ceil floor int round min max` | pyöristys ja rajat |
| `if(a > b, x, y)` | valinta |
| `pi` | 3,14159… |

Luvuissa voi olla yksikkö: `25mm`, `1in`, `2'`, `90deg`. Pituudet yksikön kanssa muunnetaan millimetreiksi, joten käytä yksiköitä vain millimetreissä mitatuissa piirustuksissa; muualla kirjoita pelkkä luku.

## Komentorivillä

`-PARAMETERS` tekee saman ilman paneelia: `N` uusi, `E` muokkaa (myös mittarajoite), `R` nimeä uudelleen, `D` poista, `?` luettele.

## Mitä hylätään

- Lauseke, joka käyttää itseään suoraan tai muiden kautta: ”width, d1 viittaavat toisiinsa.”
- Arvo, jota mitta ei voi ottaa: negatiivinen pituus tai kulma yli 180°.
- Arvo, jota piirustus ei voi ottaa muiden rajoitteidensa kanssa: mikään ei muutu, ja viesti nimeää tiellä olevat rajoitteet.
- Parametrin poistaminen, jota jokin käyttää: paneeli tarjoaa ensin kirjoittavansa sen arvon niihin. Mittarajoitteen nimi poistetaan poistamalla rajoite.
