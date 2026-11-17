---
title: Splinet ja murtoviivat: SPLINE, SPLINEDIT, PEDIT
summary: Piirrä sileä käyrä pisteiden kautta tai ohjausmonikulmiosta, muokkaa sen sovitusta ja ohjauspisteitä, muokkaa murtoviivoja (yhdistä, sulje, leveys, sovita, spline, suorista) tai muuta spline murtoviivaksi.
keywords: spline, splinedit, spl, spe, pedit, pe, sovituspisteet, ohjauspisteet, painot, nurbs, murtoviivan muokkaus, yhdistä, sovituskäyrä, suorista, muunna murtoviivaksi, tarkkuus, tangentti, käyrä, sovitustoleranssi
from: d31f72d8
---

## Mitä teet

Käyrä viiden pisteen kautta, sitten sama käyrä muokattuna kolmella tavalla, sekä murtoviiva kolmesta viivasta.

## Piirrä spline pisteiden kautta

1. Kirjoita `SPL` ja paina {{key:Enter}}.
2. Napsauta tai kirjoita pisteet, joiden kautta käyrän pitäisi kulkea: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Paina {{key:Enter}} viimeisen jälkeen.
3. {{ui:Alkutangentti}}: napsauta pistettä, johon käyrän pitäisi lähteä, tai paina {{key:Enter}} antaaksesi sen päättää. Tee sama loppupään tangentille.

Käyrä kulkee jokaisen pisteen kautta. Kirjoita `C` {{key:Enter}}:n sijaan sulkeaksesi sen (käyrä palaa ensimmäiseen pisteeseen). {{key:U}} (Kumoa) ottaa viimeisen pisteen takaisin piirtämisen aikana.

### Piirrä ohjausmonikulmion avulla

Kirjoita ensimmäiseen kehotteeseen `M`, sitten `C` (Ohjauspisteet) ja aste 1–5 (3 on tavallinen). Nyt valitsemasi pisteet ovat monikulmion kulmia, jotka vetävät käyrää puoleensa; käyrä alkaa ensimmäisestä ja päättyy viimeiseen. Suljettu kulkee ympäri ilman kulmaa liitoskohdassa.

### Muuta murtoviiva splineksi

Kirjoita ensimmäiseen kehotteeseen `O` (Olio) ja valitse murtoviivoja tai viivoja. Niistä tulee splinejä kärkipisteidensä kautta; alkuperäiset poistuvat.

## Muokkaa splineä

Valitse se ja kirjoita `SPE` (tai kirjoita `SPE` ja napsauta sitä). Otteet näyttävät sovituspisteet (tai ohjauspisteet splinelle, jolla ei ole niitä): vedä yhtä muotoillaksesi käyrän uudelleen. Kehotteessa:

- **Sovitustiedot** (pisteiden kautta piirretty spline): Lisää (`A`) lisää sovituspisteen (napsauta paikka), Poista (`D`) poistaa yhden (napsauta lähelle sitä), Siirrä (`M`) siirtää yhden (napsauta lähelle sitä ja sitten sen uutta paikkaa), Tangentit (`T`) asettaa loppupään tangentit, ja Tyhjennä (`P`) poistaa sovituspisteet, jolloin splinettä muokataan siitä lähtien ohjauspisteillä.
- **Muokkaa kärkipistettä**: Lisää (`A`) lisää ohjauspisteen muuttamatta käyrää, Siirrä (`M`) siirtää yhden, Paino (`W`) antaa yhdelle **painon** (yli 1 vetää käyrää lähemmäs sitä, alle 1 päästää siitä irti).
- **Avaa** tai **Sulje**, sekä **Käännä** (käyrä kulkee toiseen suuntaan).
- **Muunna murtoviivaksi** (`P`): spline muuttuu murtoviivaksi; tarkkuus on, montako osuutta kukin väli saa (10 on tavallinen).
- **Kumoa (U)** ottaa viimeisen muutoksen takaisin; **Poistu (X)** lopettaa.

{{ui:Ominaisuudet}} näyttää splinen asteen, kuinka monta sovitus- ja ohjauspistettä sillä on, sen pituuden, ja antaa avata tai sulkea sen.

## Muokkaa murtoviivaa

Valitse murtoviiva ja kirjoita `PE`. Viiva, kaari tai spline, jonka valitset, tarjotaan ensin muunnettavaksi murtoviivaksi (spline kysyy tarkkuuden).

- **Sulje** / **Avaa** yhdistää tai erottaa päät.
- **Yhdistä** lisää viivat, kaaret ja murtoviivat, joiden päät osuvat murtoviivan päähän. `Fuzz distance` on, kuinka kaukana päät saavat olla toisistaan ja silti yhdistyä (0 tarkoittaa, että niiden on osuttava yhteen).
- **Leveys** antaa koko murtoviivalle yhden leveyden (0 poistaa sen).
- **Sovita** korvaa murtoviivan sileällä käyrällä, joka kulkee sen kärkipisteiden kautta; **Spline** kuutiollisella B-splinellä, joka seuraa niitä (se alkaa ja päättyy ensimmäiseen ja viimeiseen kärkipisteeseen ja pysyy lähellä muita). Molemmista tulee lyhyistä osuuksista koostuva murtoviiva, ja alkuperäiset kulmat säilyvät, joten **Suorista** palauttaa ne.
- **Ltype gen** kertoo, jatkuuko katkoviiva koko murtoviivan yli vai alkaako se uudelleen jokaisesta kärkipisteestä.
- **Käännä** vaihtaa kärkipisteiden järjestyksen. **Useita** (`M` ensimmäisessä kehotteessa) muokkaa useita murtoviivoja samoilla asetuksilla.

Murtoviivan kärkipisteiden muokkaaminen {{ui:Ominaisuudet}}-paneelissa tai otteilla pysyy ennallaan: PEDITissä ei ole kärkipistemuokkainta.

## Tiedostoissa

DWG- ja DXF 2000 -tiedostot säilyttävät splinen splinenä: aste, ohjauspisteet, solmut, painot, sovituspisteet ja tangentit. Splinen, jonka avaat etkä muuta, kirjoitetaan takaisin täsmälleen samanlaisena kuin se tuli. DXF R12 -muodossa spline ei ole tuettu: se tallennetaan murtoviivana käyrää pitkin, ja historia kertoo, kuinka monta.

Siirtymä, typistys, pidennys, pyöristys, katkaisu ja yhdistäminen eivät toimi splineille. Hajota spline komennolla {{cmd:EXPLODE}} tai muokkaa sitä komennolla {{cmd:PEDIT}}, jotta saat murtoviivan, jonka nuo komennot hyväksyvät.

## Yleisiä virheitä

- **Käyrä ylittää kohteen lähekkäisten pisteiden välillä.** Käyrä taipuu siellä, missä pisteetkin ovat. Käytä vähemmän pisteitä tai ohjausmonikulmiota.
- **”Tämä ei ole spline.”** SPLINEDIT ottaa vain splinejä; {{cmd:PEDIT}} muokkaa murtoviivoja.
- **Suljettu sovituspisteinen spline näyttää toisessa ohjelmassa hieman erilaiselta.** CadCraft sulkee sen yhdellä sileällä liitoksella ensimmäisessä pisteessä; toinen ohjelma voi sulkea sen jaksollisella käyrällä. Suljettu ohjauspisteinen spline on molemmissa sama.
