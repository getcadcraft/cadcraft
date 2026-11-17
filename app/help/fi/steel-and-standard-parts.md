---
title: Sijoita teräsprofiileja ja vakio-osia
summary: Piirrä teräsprofiileja, korkeuksia ja 3D-sauvoja julkaistuista profiilitaulukoista, sijoita pultteja, muttereita, aluslevyjä, tappeja, laakereita, kiiloja ja hammaspyöriä standardeistaan ja luettele ne osaluettelossa.
keywords: teräs, profiili, poikkileikkaus, muoto, W-profiili, leveälaippainen, I-palkki, kanava, kulmarauta, HSS, putki, pipe, IPE, HEA, HEB, UPN, palkki, pilari, sauva, korkeus, aisc, en 10365, pultti, ruuvi, mutteri, aluslevy, tappi, tuki, laakeri, kiila, ura, hammaspyörä, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, vakio-osat, osaluettelo, materiaaliluettelo, bom, steelmember, partslist
from: 547c1048
---

Kirjaston {{ui:Vakio}}-välilehdellä on kahdenlaisia asioita, jotka luodaan tässä julkaistuista taulukoista (mitään ei ladata):

- **Teräsprofiilit**: 1,335 kokoa. W, S, C, L, HSS ja Pipe AISC Shapes Database v16.0:sta; IPE, HEA, HEB ja UPN EN 10365:2017:stä. DetailCraft käyttää samaa taulukkoa.
- **Vakio-osat**: kuusiopäiset ruuvit (ISO 4017), kuusiokantapultit (ISO 4014), kuusiomutterit (ISO 4032), tasaaluslevyt (ISO 7089), tuumakokoiset kuusiokantapultit ja mutterit (ASME B18.2.1 ja B18.2.2), rivitapit (ISO 2338), syväuravierintälaakerit (ISO 15), rinnakkaiskiilat (DIN 6885-1) ja suorat hammaspyörät (moduulit ISO 54:stä).

Kaikki tässä on jaettu CC0-lisenssillä: käytä mihin tahansa, ilman lähdemerkintää.

## Sijoita teräsprofiili

1. Avaa kirjasto ({{ui:Kirjasto}} Lohkot-ryhmässä tai kirjoita `LIB`) ja napsauta {{ui:Vakio}}-välilehteä.
2. Valitse perhe ensimmäisestä luettelosta, esimerkiksi {{ui:W-profiilit}}. Rajaa kokoja kirjoittamalla hakukenttään: `W12` näyttää kaikki W12-koot.
3. Kohdassa {{ui:Sijoita muodossa}} valitse:
   - {{ui:Leikkaus}}: poikkileikkaus, jonka keskipiste on lisäyspisteessä.
   - {{ui:Korkeus}}: sauva sivusta nähtynä, niin pitkänä kuin {{ui:Pituus (mm)}} sanoo, alkaen vasemman pään keskeltä.
   - {{ui:3D-sauva}}: kiinteä kappale 3D-välilehdellä (alla).
4. Napsauta koon kortissa {{ui:Sijoita}} ja napsauta sitten paikkaa, kuten mille tahansa kirjaston kohteelle.

Leikkaus tai korkeus muuttuu lohkoksi. Sen attribuutit kantavat koon, taulukon, josta se tulee, pituuden (korkeudelle) ja materiaalin, jonka voit täyttää.

:::note
S-profiilit, kanavat ja UPN piirretään yhdensuuntaisilla laipoilla keskipaksuudella, ja kulmaraudat neliömäisillä kulmilla: todelliset laipat ovat vinoja ja kulmat pyöristettyjä. W-, IPE-, HEA- ja HEB-profiileilla on juuripyöristykset ja HSS-profiileilla kulmasäteet.
:::

## Tee 3D-sauva

Valitse {{ui:3D-sauva}} ja napsauta {{ui:Sijoita}}, tai kirjoita {{cmd:STEELMEMBER}} (`SMEMBER`) komentoriviin:

1. Kohdassa `Section size` paina {{key:Enter}} näytettyä kokoa varten, tai kirjoita oma, esimerkiksi `HSS6x6x1/4` tai `IPE300`.
2. Napsauta aloituspistettä ja sitten lopetuspistettä. Sauva kulkee niiden välillä maan päällä.
3. Pilaria varten kirjoita `C`, napsauta sen peruspistettä ja kirjoita korkeus.

Sauva on suljettu kiinteä kappale 3D-välilehdellä. Siirrä tai kopioi se siellä kuten mikä tahansa muu kappale. {{key:Mod+Z}} kumoaa sen luonnin.

## Sijoita vakio-osa

1. {{ui:Vakio}}-välilehdellä valitse perhe, esimerkiksi {{ui:Kuusiokoloruuvit}}.
2. Ruuvia, pulttia, tappia tai kiilaa varten kirjoita sen {{ui:Pituus (mm)}} (tuumaperheille tuumina). Hammaspyörää varten kirjoita {{ui:Hampaat}}, {{ui:Hammasleveys (mm)}} ja {{ui:Reikä (mm)}}. Jätä ruutu tyhjäksi, jos haluat siinä näkyvän tavallisen arvon.
3. Napsauta {{ui:Sijoita}} kokoa kohdalla ja napsauta sitten paikkaa, johon se menee.

Ruuvit, pultit ja tapit piirretään sivulta siten, että kannan kantopinta on lisäyspisteessä; mutterit, aluslevyt, laakerit ja hammaspyörät piirretään edestä; kiilat ylhäältä. Kierteet piirretään tavalliseen tapaan: pohja ohuena viivana, kierteen päät paksuna. Hammaspyörät piirretään kärkiympyrällä, jakoympyrällä ja pohjaympyrällä, ei hammas kerrallaan.

Jokaisen osan lohko kantaa tyyppinsä, standardinsa, kokonsa, pituutensa ja materiaalinsa attribuutteina sekä painonsa nimellismuodosta teräksestä. Vaihda materiaali {{ui:Ominaisuudet}}-paneelissa.

Samat osat ovat kirjastossa myös kohteina, ja PartCraft avaa ne parametrisina osina ({{ui:Vakio-osa}} sen File-ryhmässä).

## Tee osaluettelo

- Napsauta kirjastossa {{ui:Osaluettelo}}: kaikki piirustuksen vakio-osat ja teräsprofiilit ryhmiteltyinä tyypin, standardin, koon, pituuden ja materiaalin mukaan, mukana määrä ja kohdenumerot. {{ui:Lataa CSV}} tallentaa sen taulukkolaskentaa varten.
- Piirtääksesi sen kirjoita {{cmd:PARTSLIST}} (`PLIST`), napsauta taulukon vasenta yläkulmaa ja paina {{key:Enter}} tavallista tekstikorkeutta varten tai kirjoita oma.

Luettelo luetaan lohkojen attribuuteista, joten se on yhä oikein sen jälkeen, kun piirustus on tallennettu DWG- tai DXF-muodossa ja avattu uudelleen.

## Yleisiä virheitä

- **”Teräsprofiilia ei ole nimeltään …”**: kirjoita koko samassa muodossa kuin {{ui:Vakio}}-välilehti sen luettelee: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Sauva on 3D-välilehdellä, ei pohjakuvassa.** {{cmd:STEELMEMBER}} tekee kiinteän kappaleen; avaa 3D-välilehti nähdäksesi sen. Jotta teräs näkyy pohjakuvassa, sijoita myös {{ui:Leikkaus}} tai {{ui:Korkeus}}.
- **Pituus on väärällä alueella.** Pultin on oltava pidempi kuin sen kanta, ja kiilan pidempi kuin sen leveys. Korttien alla oleva rivi kertoo, mikä arvo hylättiin.
