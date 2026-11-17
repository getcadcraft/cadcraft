---
title: Asiakirjat: uloskuittaus, revisiot ja julkaisu
summary: Pidä projektikansion piirustukset hallinnassa: kuittaa tiedosto ulos, jotta muut eivät muuta sitä, kuittaa se sisään uutena revisiona, lähetä tarkastettavaksi ja julkaise hyväksyjän nimellä. Mukana historia, käyttösuhteet, osaluettelo ja piirustusotsikot, jotka näyttävät revision.
keywords: projektin asetukset, hyväksyjät, ylläpitäjät, revisiokirjaimet, ASME, vain luku, vertaa revisioita, avaa kopio, partcraft, bimcraft, asiakirjat, DOCUMENTS, DOCS, holvi, asiakirjanhallinta, pdm, uloskuittaus, sisäänkuittaus, checkout, checkin, lukitse, revisio, rev, revisiokirjain, julkaisu, julkaistu, hyväksy, hyväksyntä, tarkastus, vanhentunut, missä käytetään, bom, osaluettelo, piirustusotsikko, revisiolohko, projektikansio
from: ee938722
---

## Mitä teet

Projektikansio, jossa jokaisella piirustuksella on revisio (A.1, A.2 … sitten A, B …) ja tila (Työn alla, Tarkastettavana, Julkaistu, Vanhentunut). Kerrallaan vain yksi henkilö voi muuttaa tiedostoa. Jokainen uloskuittaus, sisäänkuittaus, hyväksyntä ja purettu uloskuittaus kirjataan ylös: kuka teki sen ja milloin.

Kaikki tallennetaan itse kansioon, piilotettuun kansioon `.ccvault` piirustusten viereen. Jaettu asema tai synkronoitu kansio toimii koko tiimille. Palvelinta ei ole, eikä mitään lähetetä ylös.

## Avaa Asiakirjat

Kirjoita `DOCUMENTS` (tai `DOCS`) ja paina {{key:Enter}}. Paneeli aukeaa piirustuksen viereen.

Valitse {{ui:Choose the project folder}} ja valitse kansio, jossa projektin piirustukset ovat. Projektikansiot toimivat CadCraft Studiossa ja selaimissa, jotka voivat avata kansion (Chrome, Edge). Muissa selaimissa paneeli kertoo tämän.

Ensimmäisellä kerralla kirjoita nimesi (se liitetään kaikkeen, mitä teet) ja tämän tietokoneen nimi. Jos olet kirjautunut sisään, nimesi on jo siinä.

## Aloita holvi

Kansio, joka ei ole vielä holvi, tarjoaa vaihtoehdon {{ui:Start a vault in this folder}}. Kirjoita projektin nimi. Avaa sitten {{ui:Tiedostot holvin ulkopuolella}} ja valitse jokaisen hallintaan otettavan tiedoston kohdalta {{ui:Add}}. Lisäämäsi tiedosto alkaa revisiosta **A.1**, tilassa Työn alla.

## Muuta piirustusta

1. Valitse piirustuksen kohdalta {{ui:Open}}. Se aukeaa CadCraftiin. Jos sitä ei ole kuittattu ulos sinulle, katso se, mutta älä muuta sitä: Tallenna ei kirjoita sen päälle ja kertoo syyn (käytä Tallenna nimellä, jos haluat pitää oman kopion).
2. Valitse {{ui:Check out}}. Kukaan muu ei voi kuitata tiedostoa ulos nyt. Paneeli näyttää, kenellä se on, millä tietokoneella ja mistä lähtien.
3. Piirrä.
4. Valitse {{ui:Check in}} ja kerro, mitä muuttui. Avoinna oleva piirustus tallennetaan projektikansioon omassa muodossaan, ja siitä tulee seuraava revisio (A.1, sitten A.2). Sisäänkuittaus ilman muutoksia säilyttää revision.

{{ui:Undo check-out}} palauttaa tiedoston ilman uutta revisiota.

## Tarkastus ja julkaisu

- {{ui:Send for review}}: tiedosto on vain luku -tilassa tarkastuksen ajan.
- {{ui:Approve}}: kirjoita hyväksyjän nimi. A.3 muuttuu **A**:ksi, tilaan Julkaistu. Julkaistut tiedostot ovat vain luku -tilassa.
- {{ui:Send back}}: takaisin tilaan Työn alla, syyn kanssa.
- {{ui:New revision}} julkaistulle tiedostolle kuittaa sen ulos seuraavaa kirjainta varten: sen ensimmäinen sisäänkuittaus on **B.1**. Ennen sitä {{ui:Undo check-out}} jättää sen tasolle A.
- {{ui:Make obsolete}} poistaa julkaistun tiedoston käytöstä.

Projekti voi pitää luetteloa siitä, kuka saa hyväksyä, ja voi vaatia, ettei hyväksyjä ole sama henkilö, joka kuittasi tiedoston sisään (katso alla Projektin asetukset).

## Projektin asetukset

Avaa paneelista {{ui:Project settings}}:

- **Hyväksyjät**: yksi nimi riviä kohti. Kun niitä on, vain he voivat hyväksyä julkaisun.
- **Hyväksyjän on oltava muu kuin tekijä**: "neljän silmän" sääntö.
- **Ylläpitäjät**: yksi nimi riviä kohti. Kun niitä on, vain he voivat purkaa toisen henkilön uloskuittauksen tai muuttaa näitä asetuksia.
- **Revisiokirjaimet, jotka jätetään pois**: {{ui:Use the ASME Y14.35 sequence}} ohittaa kirjaimet I, O, Q, S, X ja Z, tai voit kirjoittaa omat kirjaimesi. Jo annetut kirjaimet säilyvät; valinta koskee seuraavia revisioita.
- **Uloskuittaus vanhenee, kun on kulunut**: päivien määrä (oletuksena 14).

Valitse {{ui:Save settings}}. Muutos kirjataan lokiin sen tekijän kanssa.

## Joku jätti tiedoston uloskuitatuksi

{{ui:Break check-out}} vapauttaa tiedoston, jonka toinen henkilö on kuitannut ulos (hän on poissa tai hänen tietokoneensa hajosi). Sinun on kirjoitettava syy: se kirjataan lokiin sen uloskuittauksen kanssa, jonka se oli. Kun projektilla on ylläpitäjiä, vain he voivat tehdä tämän. Yli 14 päivää vanha uloskuittaus merkitään pitkäksi aikaa.

## Historia, revisiot, käytöt, käyttäjät

Valitse tiedoston nimi nähdäksesi:

- {{ui:History}}: jokainen tapahtuma uusimmasta vanhimpaan, kenen toimesta, millä tietokoneella ja milloin.
- {{ui:Revisions}}: jokainen tallessa oleva revisio. Jokaisesta revisiosta on kopio holvissa (sama sisältö tallennetaan kerran). {{ui:Open copy}} avaa revision tavallisena kopiona, joka ei voi korvata holvin tiedostoa. {{ui:Compare with}} luettelee, mitä lisättiin, poistettiin ja muutettiin tämän revision ja edellisen (tai valitsemasi muun) välillä, ja värittää muutokset piirustukseen.
- {{ui:Uses}}: piirustukset, joihin se viittaa (xref-viittaukset), asiakirjat, joihin IFC-malli viittaa, ja PartCraft-kokoonpanon osat.
- {{ui:Used by}}: jokainen holvin tiedosto, joka käyttää tätä.

{{ui:Bill of materials (CSV)}} tallentaa luettelon kaikesta, mitä tiedosto käyttää, tasoittain, määrineen, revisioineen ja tiloineen, taulukkolaskentaa varten.

## Revisiolohko arkilla

Kun avoinna on piirustus, jossa on asettelu, valitse {{ui:Revision block}}. Julkaistujen revisioiden taulukko (revisio, päivämäärä, tekijä, hyväksytty, kuvaus) piirretään katsomasi arkin oikeaan yläkulmaan. Kun hyväksyt julkaisun, taulukko päivitetään.

## Revisio piirustusotsikossa

Anna piirustusotsikkosi attribuuteille yksi näistä tunnisteista ja valitse avoinna olevalla piirustuksella {{ui:Fill title blocks}}:

| Tunniste | Täytetään |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revisio (B, tai B.2 kun sitä työstetään) |
| `VAULT.STATE` | tila (Julkaistu …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | viimeisimmän revision päivämäärä |
| `VAULT.APPROVER`, `APPROVED_BY` | kuka hyväksyi viimeisimmän julkaisun |

## PartCraft ja BimCraft

PartCraftissa ja BimCraftissa on sama Asiakirjat-paneeli omille tiedostoilleen: osat ja kokoonpanot PartCraftissa, IFC-mallit BimCraftissa. Sisäänkuittaus tallentaa avoinna olevan mallin projektikansioon, ja kokoonpano näyttää, mitä osia se käyttää, ja osaluettelon.

## Hyvä tietää

- Kaksi ihmistä jaetussa kansiossa ei voi molemmat kuitata samaa tiedostoa ulos: uloskuittaus on tiedosto, jonka järjestelmä kieltäytyy tekemästä kahdesti. Selaimessa ja Studiossa, jonka kuori on tätä ominaisuutta vanhempi, tämä on yhtä tiukka kuin kansio sallii: kaksi uloskuittausta samassa sekunnin murto-osassa voisi onnistua molemmat. Paneeli kertoo, kumpi koskee.
- Älä muokkaa tai poista `.ccvault`-kansiota käsin. Sen loki on pysyvä tallenne; holvi rakentaa luettelonsa uudelleen lokista tarvittaessa.
- Tiedoston muuttaminen kansiossa ilman uloskuittausta näkyy tekstinä {{ui:Changed in the folder without a check-out}}.
