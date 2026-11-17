---
title: Lisää tiedostosta tai kirjastosta
summary: Tuo lohko tai kokonainen piirustus toisesta DWG- tai DXF-tiedostosta sekä sijoita kohteita kirjastosta, tiedostosta tai toisesta kirjastosta niiden lähdemerkintöineen ja päivityksineen.
keywords: lisää, tiedosto, kirjasto, librarycraft, kohde, laitteisto, lohko toisesta piirustuksesta, wblock, Design Center, lähdemerkintä, tekijätiedot, lisenssi, päivitys, syöte, item.json
from: 316188d2
---

## Lisää lohko toisesta piirustuksesta

1. Kirjoita `I` ja paina {{key:Enter}}, tai napsauta {{ui:Lisää}}-painiketta ryhmässä {{ui:Lohkot}}.
2. Kohdassa `Enter block name or [File/Library]` kirjoita `F` ja paina {{key:Enter}}.
3. Valitse tällä tietokoneella oleva DWG- tai DXF-tiedosto. Se luetaan tässä; sitä ei avata, eikä mitään lähetetä.
4. {{ui:Lisää tiedostosta}} -valintaikkunassa valitse lohko luettelosta (kirjoita {{ui:Suodata lohkot}}-kenttään etsiäksesi sitä), tai jätä {{ui:Koko piirustus}} valituksi. Napsauta {{ui:Lisää}}.
5. Napsauta paikkaa, johon se menee, ja täytä mahdolliset kysytyt attribuutit.

Koko piirustus tuodaan yhtenä lohkona, joka on nimetty tiedoston mukaan. Myös valitun lohkon sisäiset lohkot tulevat mukaan. Niiden käyttämät tasot lisätään tähän piirustukseen.

Jos toinen piirustus on eri yksiköissä (esimerkiksi tuumat ja millimetrit), CadCraft skaalaa viittauksen vastaamaan sitä ja kertoo tästä historiassa.

### Kun nimi on jo käytössä

Jos tässä piirustuksessa on jo lohko samalla nimellä, CadCraft kysyy:

- {{ui:Säilytä olemassa olevat}} käyttää tämän piirustuksen samannimistä lohkoa.
- {{ui:Nimeä uudelleen}} tuo uuden lohkon nimellä `Name (2)`.

Koko lisäys on yksi vaihe: {{key:Mod+Z}} poistaa viittauksen ja kopioidut määritelmät jälleen.

## Avaa kirjasto

Napsauta {{ui:Kirjasto…}}-painiketta {{ui:Lohkot}}-paneelissa tai {{ui:Kirjasto}}-painiketta Lohkot-ryhmässä, tai kirjoita `LIB`. `INSERT`-kehotteessa `L` avaa sen myös.

Kirjastossa on neljä lähdettä, välilehtinä:

- {{ui:Kirjasto}}: CadCraft-kirjasto. Hae nimen, valmistajan tai mallin mukaan ja rajaa luokan mukaan.
- {{ui:Tiedostot…}}: kohdetiedosto (`item.json`) mistä tahansa kirjastosta, tai piirustus, taulukko tai 3D-malli, josta kohteita tehdään: DWG tai DXF (jokaisesta lohkosta tulee kohde), CSV-tiedosto, jossa on nimi- ja kokosarakkeet, tai glTF- tai OBJ-malli. Mitään ei lähetetä.
- {{ui:Vakio}}: teräsprofiileja (leikkauksina, julkisivuina tai 3D-sauvoina) sekä vakio-osia, kuten pultteja, muttereita ja laakereita, jotka tehdään tässä julkaistujen taulukoiden mukaan. Katso [Sijoita teräsprofiileja ja vakio-osia](topic:steel-and-standard-parts).
- {{ui:Muut syötteet}}: muut kirjastot, jotka vastaavat samalla tavalla kuin {{ui:Kirjasto}}. Lisää niiden osoite kerran; tämä selain muistaa sen.

Jokaisessa kortissa näkyvät esikatselu, nimi, valmistaja ja malli, lisenssi sekä versio. Poistettu kohde on merkitty {{ui:Poistettu}}-merkinnällä ja syyllä; CadCraft kysyy ennen kuin kohde sijoitetaan.

## Sijoita kohde

1. Napsauta kortissa {{ui:Sijoita}}-painiketta.
2. Napsauta paikkaa, johon kohde menee. Kirjoita ensin `R`, jos haluat kääntää sitä, tai `S`, jos haluat skaalata sitä.
3. Kohdassa `Enter Item number (CC-ITEM)` paina {{key:Enter}} seuraavaa vapaata numeroa varten, tai kirjoita oma numero.

Kohteesta tulee lohko nimeltä `LIB_<name>_v<version>`, joka piirretään tämän piirustuksen yksiköissä. Jos piirustuksella ei ole yksiköitä, kohde sijoitetaan millimetreinä ja historia kertoo siitä; aseta ensin oikeanpuoleisessa paneelissa {{ui:Yksiköt}}.

Sen tiedot kulkevat mukana näkymättöminä attribuutteina: kohteen tunnus ja versio, lisenssi ja lähdemerkintä, valmistaja, malli, luokka ja mitat. Katso [Lohkon attribuutit](topic:attributes).

## Kohteet eri kielillä

Kohteella voi olla nimi ja kuvaus muilla kielillä. Kun niitä on sillä kielellä, jolle CadCraft on asetettu (Asetukset › Yleiset › Kieli), kortti ja sijoitetun lohkon kohdenimi käyttävät niitä. Lohko itse säilyttää nimen, joka on tehty kohteen omasta nimestä, joten piirustuksessa on yksi lohko kohdetta kohden, millä kielellä sen sijoittikin.

## Tarkista päivitykset

1. Avaa kirjasto.
2. Napsauta {{ui:Tarkista päivitykset}}.

Jokainen piirustuksen kirjastokohde luetellaan kohdenumeroineen, ja siitä kerrotaan, onko se ajan tasalla, onko siitä uudempi versio (ja mitä on muuttunut) vai onko se poistettu. Napsauta rivin kohdalla {{ui:Päivitä}} tai {{ui:Päivitä kaikki}}. Jokainen viittaus siirtyy uuden version lohkoon ja säilyttää kohdenumeronsa, määränsä, paikkansa, kulmansa ja tasonsa. {{key:Mod+Z}} kumoaa päivityksen.

## Mainitse käytetyt kohteet

Napsauta {{ui:Kirjaston tekijätiedot}}. Jokainen kohde luetellaan lähdemerkintärivinsä ja lisenssinsä kanssa.

- {{ui:Kopioi lähdemerkintä}} kopioi yhden kohteen rivin; {{ui:Kopioi kaikki}} kopioi kaikki rivit.
- {{ui:Lataa CSV}} tallentaa luettelon kohdenumeroineen, valmistajineen, malleineen, lisensseineen ja lähdemerkintöineen. Sen voi avata millä tahansa taulukkolaskentaohjelmalla.

Lisenssit, kuten CC BY, edellyttävät tekijän mainitsemista, kun työtä käytetään. Lisää rivit piirustukseen, määrittelyyn tai projektimuistiinpanoihin.

## Symbolit ja esineet

Kirjastossa on kolme kohdelajia: Symbolit (piirustusmerkinnät, 2D), Tyypit (mistä elementti on tehty) ja Esineet (fyysiset kohteet). {{ui:Kirjasto}}-välilehdessä {{ui:Kohteen laji}} -luettelo näyttää Symbolit ja Esineet yhdessä, vain Symbolit tai vain Esineet. Tyypit ovat sitä, mistä BimCraft-projekti rakennetaan, joten CadCraft ei listaa niitä.

## Kirjaudu kirjastoon

Napsauta {{ui:Kirjaudu kirjastoon}}. Sivustolle aukeaa pieni ikkuna. Kun kirjautuminen on tehty, CadCraft voi näyttää tiimisi kohteet ja rekisteröidä sijoittamasi kohteet, jolloin ilmoitus tulee, kun käytetty kohde muuttuu. Kirjautuminen on voimassa tämän selainvälilehden ajan. Peru se milloin tahansa tilisi turvallisuussivulta.

## Yleisiä virheitä

- **”Kohteiden tekeminen IFC-tyypeistä tapahtuu BimCraft-sovelluksessa.”** IFC- ja perhetiedostot luetaan BimCraft-sovelluksessa. Tee kohde siellä tai kirjastossa, ja käytä sen `item.json`-tiedostoa tässä.
- **”Kirjastoon ei saatu yhteyttä.”** Yhteys on offline-tilassa tai kirjasto ei ole käytettävissä. Piirustuksessa jo olevat kohteet eivät vaikutu.
- **Kohde on aivan liian suuri tai pieni.** Piirustuksen yksiköt ovat väärin tai niitä ei ole asetettu. Kumoa, aseta {{ui:Yksiköt}} ja sijoita kohde uudelleen.
