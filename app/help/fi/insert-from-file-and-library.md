---
title: Lisää tiedostosta tai kirjastosta
summary: Tuo lohko tai koko piirustus toisesta DWG- tai DXF-tiedostosta ja sijoita kohteita kirjastosta, tiedostosta tai toisesta kirjastosta sekä niiden tekijätietojen ja päivitysten kanssa.
keywords: lisää, tiedosto, kirjasto, librarycraft, kohde, kalusto, lohko toisesta piirustuksesta, wblock, suunnittelukeskus, tekijätiedot, lähdemerkintä, lisenssi, päivitys, syöte, item.json
from: f6e4e452
---

## Lisää lohko toisesta piirustuksesta

1. Kirjoita `I` ja paina {{key:Enter}}, tai napsauta {{ui:Lisää}}-painiketta Lohkot-ryhmässä.
2. Ikkunan alareunan komentorivi kysyy `Anna lohkon nimi tai [Tiedosto (F)/Kirjasto (L)]`. Kirjoita siihen `F` ja paina {{key:Enter}}.
3. Valitse DWG- tai DXF-tiedosto tältä tietokoneelta. Se luetaan täällä; sitä ei avata, eikä mitään lähetetä.
4. {{ui:Lisää tiedostosta}}-ikkunassa valitse lohko luettelosta (kirjoita {{ui:Suodata lohkot}}-kenttään löytääksesi sen), tai säilytä {{ui:Koko piirustus}}. Napsauta {{ui:Lisää}}.
5. Napsauta kohtaa, johon se menee, ja täytä attribuutit, joita se pyytää.

Voit myös aloittaa {{ui:Lohkot}}-paneelista: kirjoita `F` sen {{ui:Suodata lohkot}}-ruutuun ja paina {{key:Enter}}, tai kirjoita jotain, mikä ei vastaa yhtään lohkoa, ja napsauta {{ui:Tiedostosta…}}. `L` ja {{ui:Kirjasto…}} avaavat kirjaston samalla tavalla. Ennen versiota 0.10.1 {{ui:Suodata lohkot}}-kenttään kirjoitettu kirjain haki vain tämän piirustuksen lohkoja ja vastasi ”Yksikään lohko ei vastaa suodatinta.”

Pidä piirustus omista lohkoistasi käden ulottuvilla: napsauta {{ui:Lisää piirustus}}-kohtaa {{ui:Kirjastot}}-osiossa {{ui:Lohkopaneeli}}ssa ja valitse DWG- tai DXF-tiedosto. Sen lohkot luetellaan kuvien kanssa; napsauta yhtä sijoittaaksesi sen.

Koko piirustus tulee sisään yhtenä lohkona, joka on nimetty tiedoston mukaan. Myös valitsemasi lohkon sisällä olevat lohkot tulevat mukaan. Niiden käyttämät tasot lisätään tähän piirustukseen.

Jos toisen piirustuksen yksiköt ovat erilaiset (esimerkiksi tuumat ja millimetrit), CadCraft skaalaa viittauksen sopivaksi ja kertoo siitä historiassa.

### Kun nimi on jo käytössä

Jos tässä piirustuksessa on jo lohko samalla nimellä, CadCraft kysyy:

- {{ui:Säilytä olemassa olevat}} käyttää tämän piirustuksen lohkoa kyseisellä nimellä.
- {{ui:Nimeä uudelleen}} tuo uuden lohkon nimellä `Name (2)`.

Koko lisäys on yksi askel: {{key:Mod+Z}} poistaa viittauksen ja kopioidut määritykset takaisin.

## Avaa kirjasto

Napsauta {{ui:Kirjasto…}}-kohtaa {{ui:Lohkot}}-paneelissa tai {{ui:Kirjasto}}-painiketta Lohkot-ryhmässä, tai kirjoita `LIB`. Kysymyksessä `INSERT` myös `L` avaa kirjaston.

Kirjastossa on neljä lähdettä välilehtinä:

- {{ui:Kirjasto}}: CadCraftin kirjasto. Hae nimellä, valmistajalla tai mallilla ja suodata luokan mukaan.
- {{ui:Tiedostot…}}: kohdetiedosto (`item.json`) mistä tahansa kirjastosta, tai piirustus, taulukko tai 3D-malli, josta tehdä kohteita: DWG tai DXF (jokainen lohko tulee kohteeksi), CSV, jossa on nimi- ja kokosarakkeet, tai glTF- tai OBJ-malli. Mitään ei lähetetä.
- {{ui:Vakio}}: teräsprofiilit (profiileina, leikkauksina tai 3D-sauvoina) ja vakio-osat, kuten pultit, mutterit ja laakerit, tehtynä täällä julkaistuista taulukoista. Katso [Sijoita teräsprofiileja ja vakio-osia](topic:steel-and-standard-parts).
- {{ui:Muut syötteet}}: muut kirjastot, jotka vastaavat samalla tavalla kuin Kirjasto. Lisää niiden osoite kerran; tämä selain muistaa sen.

Jokaisessa kortissa on esikatselu, nimi, valmistaja ja malli, lisenssi sekä versio. Peruutettu kohde on merkitty {{ui:Peruutettu}}-merkinnällä ja syyllä; CadCraft kysyy ennen kuin sijoitat sellaisen.

## Sijoita kohde

1. Napsauta kortin {{ui:Sijoita}}-painiketta.
2. Napsauta kohtaa, johon kohde menee. Kirjoita `R` ensin kääntääksesi sen tai `S` skaalataksesi sen.
3. Kohdassa `Anna kohteen numero (CC-ITEM)` paina {{key:Enter}} seuraavalle vapaalle numerolle tai kirjoita oma numerosi.

Kohde muuttuu lohkoksi nimeltä `LIB_<name>_v<version>`, joka piirretään tämän piirustuksen yksiköissä. Jos piirustuksella ei ole yksiköitä, kohde tulee millimetreinä ja historia kertoo siitä; aseta ensin {{ui:Yksiköt}} oikeanpuoleisessa paneelissa.

Sen tiedot kulkevat mukana näkymättöminä attribuutteina: kohteen tunnus ja versio, lisenssi ja lähdemerkintä, valmistaja, malli, luokka ja koot. Katso [Lohkon attribuutit](topic:attributes).

## Kohteet omalla kielelläsi

Kohteella voi olla nimi ja kuvaus muilla kielillä. Kun niitä on sillä kielellä, johon CadCraft on asetettu (Asetukset › Yleiset › Kieli), kortti ja sijoitetun lohkon kohdenimi käyttävät niitä. Lohko itse säilyttää nimen, joka tehdään kohteen omasta nimestä, joten piirustuksessa on yksi lohko kohdetta kohden, riippumatta siitä, millä kielellä se sijoitettiin.

## Tarkista päivitykset

1. Avaa kirjasto.
2. Napsauta {{ui:Tarkista päivitykset}}-kohtaa.

Jokainen piirustuksen kirjastokohde luetellaan kohdenumeroineen ja sen mukaan, onko se ajan tasalla, onko sillä uudempi versio (ja mitä muuttui), vai onko se peruutettu. Napsauta {{ui:Päivitä}} riviltä tai {{ui:Päivitä kaikki}}. Jokainen viittaus siirtyy uuden version lohkoon ja säilyttää kohdenumeronsa, määränsä, paikkansa, kulmansa ja tasonsa. {{key:Mod+Z}} kumoaa päivityksen.

## Mainitse käyttämäsi

Napsauta {{ui:Kirjaston tekijätiedot}}-kohtaa. Jokainen kohde luetellaan lähdemerkintärivinsä ja lisenssinsä kanssa.

- {{ui:Kopioi lähdemerkintä}} kopioi yhden kohteen rivin; {{ui:Kopioi kaikki}} kopioi jokaisen rivin.
- {{ui:Lataa CSV}} tallentaa luettelon kohdenumeroineen, valmistajineen, malleineen, lisensseineen ja lähdemerkintöineen. Sen voi avata millä tahansa taulukkolaskennalla.

Lisenssit, kuten CC BY, pyytävät mainitsemaan tekijän siellä, missä teosta käytetään. Laita rivit piirustukseen, määritykseen tai projektin muistiinpanoihin.

## Symbolit ja resurssit

Kirjastossa on kolmenlaisia kohteita: Symbolit (piirustuskäytännöt, 2D), Tyypit (mistä elementti koostuu) ja Resurssit (fyysiset esineet). {{ui:Kohteen laji}} -luettelo {{ui:Kirjasto}}-välilehdellä näyttää symbolit ja resurssit yhdessä, vain symbolit tai vain resurssit. Tyypit ovat sitä, mistä BimCraft-projekti rakennetaan, joten CadCraft ei luettele niitä.

## Kirjaudu kirjastoon

Napsauta {{ui:Kirjaudu kirjastoon}}-kohtaa. Sivustolle aukeaa pieni ikkuna; kun olet kirjautunut sinne, CadCraft voi näyttää tiimisi kohteet ja kirjata sijoittamasi kohteet, jolloin kuulet, kun käyttämäsi kohde muuttuu. Kirjautuminen on voimassa tässä selainvälilehdessä. Voit peruuttaa sen milloin tahansa tilisi turvasivulta.

## Pidä omat kohteet kohdassa Omat kohteet

{{ui:Omat kohteet}} on yksityinen luettelo kirjastossa, jonka vain sinä näet. Se ei ole julkisessa kirjastossa, ei hakutuloksissa, eikä sitä näytetä tiimillesi, ja se seuraa tiliäsi jokaiseen tietokoneeseen, jossa kirjaudut kirjastoon.

1. Napsauta Kirjasto-paneelissa {{ui:Tiedostot…}} ja lue tiedosto.
2. Napsauta kohdetta, jonka haluat uudelleen, ja valitse {{ui:Säilytä omissa kohteissa}}.
3. Myöhemmin napsauta {{ui:Omat kohteet}} ja sitten {{ui:Sijoita}}. Se sijoittuu kuten mikä tahansa kirjastokohde, ja {{ui:Tarkista päivitykset}} kattaa sen.
4. {{ui:Poista omista kohteista}} poistaa sen luettelosta. Jo piirustuksiin sijoitetut kopiot jäävät paikoilleen.

Sinun täytyy olla kirjautunut kirjastoon. Tiedoston lukeminen ei lähetä mitään; kohteen säilyttäminen lähettää vain sen yhden kohteen tilillesi.

:::note
Omat kohteet on testauksessa, eikä se ehkä ole vielä auki tilillesi. Jos siinä lukee ”Omat kohteet ei ole vielä käytössä tällä tilillä.”, voit silti sijoittaa omien tiedostojesi kohteita {{ui:Tiedostot…}}-kohdan kautta.
:::

## Yleisiä virheitä

- **”Kohteiden tekeminen IFC-tyypeistä kuuluu BimCraftiin.”** IFC- ja perhetiedostot luetaan BimCraft-sovelluksessa. Tee kohde siellä tai kirjastossa ja käytä sen `item.json`-tiedostoa täällä.
- **”Kirjastoon ei saatu yhteyttä.”** Olet offline-tilassa tai kirjasto on alhaalla. Piirustuksessa jo olevat kohteet eivät vaikutu.
- **Kohde on aivan liian suuri tai pieni.** Piirustuksen yksiköt ovat väärin tai niitä ei ole asetettu. Kumoa, aseta {{ui:Yksiköt}} ja sijoita kohde uudelleen.
