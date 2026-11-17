---
title: Omat painikkeet (Omat työkalut)
summary: Lisää työkalupalkkiin painikkeita, jotka suorittavat omia makroja, anna niille pikanäppäimiä, jaa ne tiedostona ja tuo painikkeita CUIx-mukautustiedostosta.
keywords: omat työkalut, mukautetut painikkeet, työkalupalkin painikkeet, makro, makrot, cui, cuix, mukauta, valikko, pikanäppäimet, näppäinoikotiet, diesel, ^c^c, tuo painikkeet, vie painikkeet
from: 36618802
---

## Mitä opit

Miten lisätään omia painikkeita työkalupalkkiin, joista kukin suorittaa makron, joka on kirjoitettu AutoCADin tavoin. Miten painikkeelle annetaan näppäin ja miten CUIx-tiedoston painikkeet tuodaan.

## Lisää painike

1. Avaa {{ui:Asetukset}} ({{key:Mod+,}}) ja pysy {{ui:CadCraft}}-välilehdellä. Vieritä kohtaan {{ui:Omat työkalut}}.
2. Napsauta {{ui:Lisää painike…}}.
3. Täytä ruutu:
   - {{ui:Ryhmä}}: työkalupalkin ryhmä, johon painike menee, esimerkiksi `Omat työkalut`. Uusi nimi luo uuden ryhmän.
   - {{ui:Nimiö}}: painikkeen teksti.
   - {{ui:Makro}}: mitä se kirjoittaa, esimerkiksi `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Pikanäppäin}}: napsauta ruutua ja paina näppäimet, esimerkiksi {{key:Ctrl+Alt+B}}.
   - {{ui:Kuvake}}: PNG- tai SVG-kuva, enintään 64 KB, tai ei mitään (näkyy tähti).
4. Napsauta {{ui:Tallenna}}.

Painike ilmestyy työkalupalkin loppuun, omaan ryhmäänsä. Napsauta sitä tai paina sen näppäintä suorittaaksesi sen. {{ui:Muokkaus}} ja {{ui:Poista}} luettelossa muuttavat tai poistavat sen.

## Kirjoita makro

Makro on se, mitä kirjoittaisit komentoriville, muutamin merkein:

| Merkki | Tarkoittaa |
|---|---|
| `^C` | Peruuttaa käynnissä olevan (`^C^C` on tavallinen alku) |
| `;` tai väli | {{key:Enter}} |
| `\` | Odottaa sinua: napsautus tai kirjoitettu vastaus, minkä jälkeen makro jatkuu |
| `_` tai `.` ennen komentoa | Hyväksytään ja jätetään huomiotta (kansainväliset ja sisäiset nimet) |
| `*` aivan alussa | Käynnistyy uudelleen aina, kun se päättyy, kunnes painat {{key:Esc}} |
| `^O`, `^G` | Kytkee ortogonaalin ja ruudukon päälle tai pois |
| `$M=` | Loppu on DIESELiä. Luetaan vain `$(if,…)`, `$(getvar,…)`, `$(=,…)` ja `$(eq,…)`. Painike, joka käyttää muuta, kertoo sen eikä tee mitään |

Esimerkkejä:

- `^C^C_line;0,0;@100,0;;` piirtää 100 pituisen viivan origosta.
- `^C^C_circle;\25;` kysyy keskipisteen ja piirtää siihen 25 säteisen ympyrän.
- `^C^C_turnright` kääntää näkymän 90° oikealle.

## Pikanäppäimet

Näppäin tarvitsee {{key:Mod}}-näppäimen (Ctrl, tai Cmd Macilla) tai {{key:Alt}}-näppäimen kirjaimen tai numeron kanssa, tai jonkin vapaista toimintonäppäimistä {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Kirjaimet yksinään menevät komentoriville. Näppäimet, joita CadCraft, sovellus tai selain jo käyttää (kuten {{key:Ctrl+S}} tai {{key:Ctrl+Z}}), ja näppäimet, joita toisella painikkeella on, hylätään, ja ruutu kertoo syyn.

## Jaa painikkeesi

- {{ui:Vie…}} tallentaa kaikki ryhmät ja painikkeet, kuvakkeineen ja näppäimineen, tiedostoon `my-tools.json`.
- {{ui:Tuo…}} lisää tällaisen tiedoston ryhmät omiesi jälkeen. Ryhmänimi, jota käytät jo, saa "(2)"; näppäin, joka aiheuttaisi päällekkäisyyden, jätetään pois, ja paneeli kertoo siitä.

## Tuo painikkeita CUIx-tiedostosta

1. Napsauta {{ui:Tuo CUIx…}} ja valitse `.cuix`-tiedosto.

Sen työkalupalkit ja nauhan paneelit muuttuvat ryhmiksi, ja jokaisella painikkeella on oma makronsa ja kuvansa (PNG tai BMP muutettuna PNG:ksi). Sen pikanäppäimet tulevat omaan ryhmäänsä, jokainen painike näppäimineen. Komentoaliakset, joita sillä voi olla, tulevat {{ui:Aliakset}}-ryhmään. Paneeli luettelee, mitä tuli mukaan.

:::note
Tiedostoa vain luetaan. Komennot, joita CadCraftissa ei ole, luetellaan nimeltä eikä arvata. Niiden painikkeet kertovat sen napsautettaessa. DIESELiä ei lueta muuten kuin yllä mainittuja muutamia funktioita, eivätkä valikot, hiiren painikkeet ja työtilat tule mukaan.
:::

## Hyvä tietää

- Painikkeet tallennetaan tähän selaimeen (tai tähän työpöytäsovellukseen), ei piirustuksiin.
- Painike suoritetaan komentoriviä kautta, joten se kumotaan kuten mikä tahansa kirjoitettu komento: yksi {{key:Mod+Z}} jokaista suoritettua komentoa kohden.
