---
title: Arkkisarjat
summary: Kokoa arkkeja monesta piirustuksesta yhteen numeroituun luetteloon, täytä niiden piirustusotsikot sarjasta, julkaise ne yhtenä PDF:nä ja arkistoi sarja zip-tiedostona.
keywords: arkkisarja, arkkisarjan hallinta, ssm, sheetset, ccsheets, dst, arkkiluettelo, arkkihakemisto, piirustusotsikko, kentät, julkaise, numeroi uudelleen, arkisto, etransmit, toimituskirje, alasarjat, kansiarkki, piirustusluettelo
from: 2c855720
---

## Mitä opit

Miten kokoat arkkeja (asetteluja) useista piirustustiedostoista **arkkisarjaan**, numeroit ja nimeät ne, annat niiden piirustusotsikoiden täyttyä puolestasi, julkaiset koko sarjan yhtenä PDF:nä ja pakkaat kaiken yhteen zip-tiedostoon lähetettäväksi.

Arkkisarja asuu omassa pienessä tiedostossaan, `<nimi>.ccsheets`, piirustukset sisältävässä kansiossa. Sarjatiedosto luettelee arkit kansiosta alkavilla poluilla, joten voit siirtää tai kopioida koko kansion.

:::note
Kansion avaaminen lukemista ja kirjoittamista varten vaatii Chromen tai Edgen (ne voivat sallia sivun toimia kansiossa, jonka valitset), tai työpöytäsovelluksen. Muut selaimet avaavat sarjan vain luku -tilassa: voit katsella sitä ja julkaista sen, ja sarjatiedosto ladataan tallentamisen sijaan.
:::

## Aloita sarja

1. Etsi vasemmasta paneelista {{ui:Arkkisarja}}-osio ja avaa sen {{ui:Sarja}}-valikko. Kirjoittaminen {{cmd:SHEETSET}} (tai `SSM`) vie sinut myös sinne.
2. Valitse {{ui:Uusi sarja…}}. Anna sarjalle nimi ja, jos haluat, projektin nimi ja numero.
3. Valitse piirustukset sisältävä kansio. Sarjatiedosto tallennetaan sinne.

Avataksesi sarjan myöhemmin valitse {{ui:Avaa sarja…}} ja valitse sama kansio. Jos kansiossa on useampi sarja, CadCraft kysyy, mikä niistä.

## Lisää arkkeja

1. Valitse {{ui:Lisää arkkeja piirustuksesta…}} ja valitse yksi kansion piirustuksista.
2. CadCraft lukee piirustuksen taustalla (sitä ei avata näytölle) ja luettelee sen arkit. Ruksaa halumasi ja napsauta {{ui:OK}}.
3. Valitse arkki ja paina {{key:F2}} (tai {{ui:Nimeä ja numeroi uudelleen…}}) antaaksesi sille numeron ja nimen, esimerkiksi `A-101` ja `Pohjakuva`.

{{ui:Uusi arkki mallipohjasta…}} tekee uuden piirustuksen toisen piirustuksen arkista (sen piirustusotsikosta ja näkymäruuduista), nimettynä uuden arkin mukaan, ja lisää sen. Sarja muistaa piirustuksen, jota käytit mallipohjana.

## Järjestä sarja

- **Alasarjat** ryhmittelevät arkkeja, kuten Arkkitehtuuri › Pohjakuvat: valitse, mihin se kuuluu, ja valitse {{ui:Uusi alasarja…}}.
- **Järjestys**: vedä arkki toiseen kohtaan luettelossa tai alasarjan päälle siirtääksesi sen sinne. Näppäimistöllä valitse se ja paina {{key:Alt+Up}} tai {{key:Alt+Down}}.
- **Avaa arkki**: kaksoisnapsauta sitä (tai paina {{key:Enter}}). Sen piirustus avautuu omaan välilehteensä, siinä arkissa.
- **Poista**: valitse se ja paina {{key:Delete}}. Itse piirustusta ei muuteta.
- **Kumoa**: {{ui:Kumoa sarjan muutos}} ja {{ui:Tee sarjan muutos uudelleen}} käyvät läpi sarjassa tekemäsi muutokset.
- **Numeroi uudelleen**: {{ui:Numeroi arkit uudelleen…}} numeroi jokaisen arkin tai yhden alasarjan arkit luettelon järjestyksessä: etuliite, alku ja askel (`A-` ja `101` antavat A-101, A-102 …).

Jokainen muutos tallennetaan sarjatiedostoon heti.

## Numeroi arkit niiden kenttien mukaan

Sen sijaan, että numeroisit arkit käsin, anna säännön rakentaa jokainen numero arkin kentistä, jolloin arkki, joka siirtyy toiselle tasolle tai alalle, saa uuden numeron itsestään.

1. Anna jokaiselle arkille sen kentät: valitse se, napsauta {{ui:Nimeä uudelleen…}} ja kirjoita {{ui:Tämän arkin kentät}}-kohtaan yksi kenttä per rivi, esimerkiksi `DISCIPLINE = A` ja `LEVEL = 1`. Kenttä, jonka koko sarja jakaa (esimerkiksi `DISCIPLINE = A`), voidaan laittaa sarjan {{ui:Ominaisuudet…}}-kohtaan.
2. Avaa paneelin valikko ja napsauta {{ui:Numerointisääntö…}}.
3. Kirjoita sääntö, esimerkiksi `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` laskee ylöspäin niiden arkkien kesken, joiden muut kentät ovat samat, joten taso 1 saa A-101, A-102 ja taso 2 alkaa uudelleen kohdasta A-201. `{SEQ:2}` kirjoittaa sen kahdella numerolla; `{SUBSET}` on sen alasarjan nimi, johon arkki kuuluu.
4. Valitse, mitä tapahtuu, kun kenttä muuttuu: {{ui:Numeroi arkit uudelleen}} pitää numerot säännön mukaisina jokaisen muutoksen jälkeen; toinen vaihtoehto numeroi ne kerran, juuri nyt.

Sääntö tallennetaan sarjatiedostoon. Kun se numeroi uudelleen itsestään, muuta arkin kenttiä eikä sen numeroa.

## Täytä piirustusotsikot sarjasta

Piirustusotsikko saa tekstinsä sarjasta, kun sen attribuutit on merkitty kentän nimellä:

| Tagi | Mitä se näyttää |
|---|---|
| `SHEETNUMBER` (tai `SHEET_NO`, `DWG_NO`) | Arkin numero |
| `SHEETTITLE` (tai `TITLE`, `SHEET_TITLE`) | Arkin nimi |
| `SHEETDESC` | Arkin kuvaus |
| `PROJECTNAME` (tai `PROJECT`) | Projektin nimi |
| `PROJECTNUMBER` (tai `PROJECT_NO`, `JOB_NO`) | Projektin numero |
| `SHEETSETNAME` | Sarjan nimi |
| `SHEETINDEX`, `SHEETCOUNT` | ”3 / 12” ja 12 |
| Oma, kuten `CLIENT` | Se, mitä kirjoitit sille {{ui:Sarjan kentät…}}-kohdassa |

{{ui:Sarjan kentät…}} sisältää projektin nimen ja numeron sekä omat kentät, yksi per rivi muodossa `NIMI = arvo`.

{{ui:Päivitä piirustukset}} kirjoittaa numerot, nimet ja kentät jokaisen sarjan piirustuksen piirustusotsikkoon ja nimeää kunkin arkin asettelun välilehden sarjan mukaan (oletuksena numero ja nimi, kuten `A-101 Pohjakuva`; {{ui:Sarjan kentät…}} › {{ui:Asettelun välilehtien nimet}} muuttaa sitä). Jokainen piirustus tallennetaan paikalleen, omassa muodossaan ja versiossaan. Kun numeroit tai nimeät arkit uudelleen, aja se uudelleen, jolloin välilehdet ja piirustusotsikot seuraavat mukana.

## Arkkiluettelo kansiarkille

Valitse kansiarkki luettelosta ja valitse {{ui:Aseta arkkiluettelo tälle arkille}}. Kaikkien arkkien taulukko (numero ja nimi, alasarjan alla) tulee arkin vasempaan yläkulmaan. {{ui:Päivitä piirustukset}} ja {{ui:Julkaise PDF:ksi}} pitävät sen ajan tasalla. Se on yksi lohko, `CC_SHEETLIST`: siirrä sitä kuten mitä tahansa lohkoviittausta.

## Julkaise sarja

{{ui:Julkaise PDF:ksi}} tekee yhden PDF:n, jossa on sivu per arkki sarjan järjestyksessä, kunkin arkin omalla paperikoolla, ja kirjanmerkki per arkki (”A-101 — Pohjakuva”). Kun alasarja on valittuna, CadCraft kysyy, julkaistaanko vain se alasarja. PDF:n piirustusotsikot täytetään sarjasta jo ennen kuin päivität piirustukset; julkaiseminen ei muuta piirustuksia itseään. PDF ladataan.

{{ui:Julkaise DWG:ksi…}} kirjoittaa jokaisen arkin omaksi DWG-tiedostokseen (DWG 2018): mallin ja tuon yhden arkin, piirustusotsikko täytettynä sarjasta, nimettynä numeron ja nimen mukaan (`A-101 Level 1 floor plan.dwg`). Valitse {{ui:DWG}} tai {{ui:DWG + PDF}}, jolloin sarjan PDF tulee niiden viereen. `publish.json` luettelee jokaisen tiedoston koon ja SHA-256:n. Kun sarjan kansioon voi kirjoittaa (CadCraft Studio tai selaimessa valitsemasi kansio), tiedostot menevät kansioon `<set name> - published`; muuten ne ladataan yhtenä zip-tiedostona. Näkymäruutujen [luokkakorvaukset](topic:viewport-overrides) tulevat mukaan jokaiseen DWG:hen.

## Arkistoi sarja

{{ui:Archive as a zip}} pakkaa sarjatiedoston, jokaisen piirustuksen, jota se käyttää, ja mitä ne linkittävät (linkitetyt piirustukset ja niiden linkit, ja kuvat), säilyttäen kansiot, sekä `Transmittal.txt`-tiedoston, joka luettelee jokaisen tiedoston. Linkki, joka ei ole sarjan kansiossa, luetellaan siinä puuttuvana. Linkit löydetään polun perusteella piirustuksesta, sitten tiedostonimen perusteella mistä tahansa kansiosta.

## Sarjatiedosto

`.ccsheets`-tiedosto on JSON-tiedosto, jonka voi lukea millä tahansa tekstieditorilla:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Polut ovat suhteellisia sarjan kansioon nähden, ja kansiot erotetaan merkillä `/`. CadCraft tarkistaa tiedoston avatessaan: absoluuttinen polku, arkki ilman tiedostoa tai asettelua tai teksti, joka ei ole tavallista tekstiä, jätetään pois, ja historia kertoo siitä.

## Vianmääritys

| Mitä näet | Miksi | Mitä tehdä |
|---|---|---|
| ”Tämä kansio on täällä vain luku” | Selain ei voi kirjoittaa kansioon | Käytä Chromea tai Edgeä tai työpöytäsovellusta; sillä välin {{ui:Lataa sarjatiedosto}} säilyttää muutoksesi |
| Arkki jää PDF:stä pois: ”ei sisällä asettelua nimeltä …” | Arkin asettelu on nimetty uudelleen tai poistettu piirustuksesta | Avaa piirustus ja tarkista sen välilehdet; poista arkki ja lisää se uudelleen |
| Piirustusotsikko jää tyhjäksi | Sen attribuuteilla on muut tagit | Nimeä attribuuttitagit uudelleen yllä olevien kenttänimien mukaan (BEDIT) |
| ”on jo asettelu nimeltä … joten välilehteä ei nimetty uudelleen” | Kaksi arkkia samasta piirustuksesta saisi saman välilehtinimen | Anna toiselle arkille toinen numero tai nimi |
