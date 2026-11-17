---
title: Käännä näkymää ja käytä omia koordinaatteja (UCS)
summary: Käännä näkymää 90° tai mihin tahansa kulmaan siirtämättä mitään piirustuksessa, ja aseta käyttäjän koordinaatisto (UCS), jotta pisteet, ortogonaali, napaseuranta, ruudukko ja uusi teksti seuraavat rakennuksen omia akseleita.
keywords: ucs, käyttäjän koordinaatisto, pohjakuva, käännä näkymää, kierrä näkymää, näkymän kierto, ucs z, ucs 3point, ucs object, ucs world, nimetty ucs, ucsfollow, turnleft, turnright, turnworld, kulmikas rakennus, kierretty ruudukko
from: 6f152c65
---

## Mitä opit

Miten piirustusta katsotaan käännettynä, jotta kulmassa oleva rakennus näkyy suorana näytöllä, ja miten kirjoitat pisteitä sen omia akseleita pitkin. Mikään piirustuksessa ei liiku tämän aikana: kohteet säilyttävät koordinaattinsa, kääntö ei ole muokkaus, eikä piirustusta merkitä muutetuksi.

## Käännä näkymä neljännes

1. Napsauta {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Käännä näkymää 90° vasemmalle}} tai {{ui:Käännä näkymää 90° oikealle}}.

Piirustus kääntyy näytöllä piirtoalueen keskikohdan ympäri. Tee se uudelleen jatkaaksesi kääntämistä.

2. Napsauta {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Takaisin maailmaan}} tasataksesi sen uudelleen.

Komennot niiden takana ovat {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} ja {{cmd:TURNWORLD}}. Jotta yhdelle niistä saa näppäimen, lisää rivi kuten `TL=TURNLEFT` aliaksiisi komennolla {{cmd:ALIASEDIT}}.

## Asetu kulmassa olevan rakennuksen mukaan

1. Kirjoita `UCS` ja paina {{key:Enter}}, sitten `OB` ja {{key:Enter}}.
2. Napsauta seinäviivaa lähellä päätä, joka on oltava origo.

UCS alkaa nyt tästä päästä, X-akseli kulkee seinää pitkin, ja näkymä kääntyy niin, että seinä on vaakasuorassa näytöllä. Akselikuvake vasemmassa alakulmassa näyttää, mihin UCS-akselit osoittavat.

3. Piirrä kuten tavallisesti. Kun UCS on asetettu:
   - `x,y` ja `@dx,dy` mitataan UCS-akseleita pitkin; `d<a` mittaa kulman UCS:n X-akselista.
   - {{ui:Ortogonaali}}, napaseuranta ja ruudukko seuraavat UCS-akseleita, samoin ristikko.
   - Uusi teksti ja uudet kappaleet kulkevat UCS:n X-akselia pitkin. {{cmd:DIMLINEAR}}-komennon vaaka- ja pystysuunta seuraavat sitä myös.
   - Tilarivin koordinaatit ja {{cmd:ID}}-komennon koordinaatit ovat UCS-koordinaatteja.
4. Kirjoittaaksesi maailmapisteen UCS:n ollessa asetettuna, laita `*` eteen: `*0,0` tai `@*100,0`.
5. Kirjoita `UCS`, {{key:Enter}}, ja sitten {{key:Enter}} uudelleen palataksesi maailmaan.

## Muut tavat asettaa UCS

UCS-kehotteessa:

| Kirjoitat | Mitä se tekee |
|---|---|
| piste | Uusi origo. Napsauta sitten pistettä uudella X-akselilla tai paina {{key:Enter}} säilyttääksesi kulman |
| `Z` | Kääntää UCS:ää origon ympäri kulman verran, jonka kirjoitat (asteina, vastapäivään) tai valitset |
| `3` (3point) | Origo, piste positiivista X-akselia pitkin ja piste positiivisella Y-puolella |
| `OB` (OBject) | Viivasta, kaaresta, ympyrästä, murtoviivan osasta, tekstistä, lohkoviittauksesta, pisteestä tai apuviivasta |
| `P` (Previous) | Tätä edellinen UCS (viimeiset kymmenen säilytetään, kun piirustus on auki) |
| `W` (World) | Takaisin maailmaan |
| `NA` (NAmed) | `S` tallentaa nykyisen UCS:n nimellä, `R` palauttaa yhden, `D` poistaa yhden ja `?` luettelee ne |

Jokainen muutos kääntää näkymän niin, että uuden UCS:n X-akseli on vaakasuorassa. {{cmd:PLAN}} kääntää näkymän muuttamatta UCS:ää: {{key:Enter}} nykyiselle UCS:lle, `U` tallennetulle ja `W` maailmalle.

## Hyvä tietää

- Jokainen jaetun näytön ruutu säilyttää oman kiertonsa. UCS kuuluu piirustukselle.
- Arkit toimivat paperikoordinaateissa. Aseta UCS {{ui:Malli}}-välilehdellä tai näkymäruudun sisällä.
- Käännetyssä näkymässä vedetyt valinta-ikkunat valitsevat näytöllä niiden sisään jäävät kohteet.
- LISP-rutiinit saavat pisteet UCS:ssä `getpoint`-funktiolla. Ne voivat lukea `UCSORG`, `UCSXDIR`, `UCSYDIR` ja `VIEWTWIST` -muuttujat, ja `trans` muuntaa pisteitä maailman, UCS:n ja näytön välillä.

:::note
Tallennettu tiedosto säilyttää UCS:n ja näkymän kiertokulman myöhemmässä koontiversiossa. Siihen asti ne pysyvät voimassa niin kauan kuin piirustus on auki.
:::
