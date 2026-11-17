---
title: Ominaisuudet-paneeli
summary: Näe ja muuta kaikkea valituista kohteista, monta kerralla: koordinaatit Z:n kanssa, koot, teksti, mitoitusasetukset, läpinäkyvyys ja muuta. Kentät hyväksyvät lausekkeita ja pituuksia yksiköillä.
keywords: summat, kokonaispituus, kokonaisala, summa, valinnan pituus, ominaisuudet, ominaisuuspaletti, ctrl+1, pr, ch, mo, ddmodify, vaihtelee, pikavalinta, pickadd, koordinaatit, z, korkeus, paksuus, läpinäkyvyys, materiaali, hyperlinkki, lauseke, quickcalc, kärkipiste, mitoitustyyli, toleranssi, desimaalit
from: 10d6a829
---

## Mitä opit

Miten Ominaisuudet-paneeli avataan, miten muutat yhden kohteen tai sata yhdellä kertaa, kirjoitat tarkkoja koordinaatteja Z:n kanssa, käytät lausekkeita ja yksiköitä missä tahansa numerokentässä, ja mitä kukin kohdetyyppi näyttää.

## Avaa se

Paneeli on oikealla. Tuo se eteen:

- Paina {{key:Mod+1}}, tai kirjoita {{cmd:PROPERTIES}} (tai `PR`, `CH`, `MO`).
- Kaksoisnapsauta kohdetta. Teksti ja monijohtoviitteet avaavat tekstieditorinsa.

Paneeli on siirrettävä kuten muut. Vedä sen kahvasta kiinnittääksesi se vasemmalle, oikealle tai alareunaan. Tai pudota se piirustuksen päälle irrottaaksesi se (katso [Paneelien järjestely ja toinen näyttö](common:arrange-panels)).

### Taita pois

Paneelin yläoikealla oleva nastapainike kytkee **automaattisen piilotuksen** päälle. Paneeli taittuu oikean reunan kapeaksi kaistaksi, ja piirustus saa tilaa. Osoita kaistaa (tai paina {{key:Mod+1}}), jolloin paneeli avautuu piirustuksen päälle. Siirry pois, ja se taittuu taas. Napsauta nastaa uudelleen pitääksesi paneelin auki. {{cmd:PROPERTIESCLOSE}} taittaa sen myös.

## Osiot

Ominaisuudet on ryhmitelty osioihin, joita voi taittaa: **Yleiset**, **Geometria**, **Teksti**, **Viivat ja nuolet**, **Sovitus**, **Ensisijaiset yksiköt**, **Vaihtoehtoiset yksiköt**, **Toleranssit**, **Kuvio**, **Muut**, ja lohkoille **Attribuutit** ja **Kirjaston kohde**. Napsauta osion nimeä taittaaksesi tai avataksesi sen. CadCraft muistaa, mitkä osiot taitoit.

Vedä nimien ja arvojen välissä olevaa ohutta viivaa, jotta nimet tulevat leveämmiksi tai kapeammiksi. Kaksoisnapsauta sitä palauttaaksesi sen. Näppäimistöllä kohdista viiva ja käytä nuolinäppäimiä.

## Muuta arvoa

1. Napsauta riviä. Otsikossa lukee "Viiva".
2. Napsauta kenttää {{ui:Length}} (Pituus). Muokatessa kenttä näyttää koko arvon, ei pyöristettyä.
3. Kirjoita `2500` ja paina {{key:Enter}}. Viiva on nyt 2500 pitkä. Se säilyttää alkupisteensä ja kulmansa.

{{key:Enter}} tai napsautus muualle ottaa arvon käyttöön. {{key:Esc}} palauttaa vanhan arvon. Jokainen muutos on yksi kumoamisvaihe.

### Lausekkeet ja yksiköt

Jokainen numerokenttä ottaa muutakin kuin pelkän numeron:

| Kirjoitat | Saat |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (tuumina, piirustuksessa jossa käytetään jalkoja ja tuumia) |
| `900mm`, `3.5m`, `2ft` | Muunnettu piirustuksen yksiköiksi |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (kulmakentissä) |
| `0.5r`, `100g` | Radiaaneina ja gradeina, muunnettuna asteiksi |

Yksiköllinen pituus vaatii, että piirustuksella on yksiköt. Aseta {{ui:Units}} (Yksiköt) kohdassa {{ui:New objects}} (Uudet kohteet) ensin, kun mitään ei ole valittu. Virheellinen syöte hylätään huomautuksella paneelin alla, eikä mikään muutu. Sitä ei koskaan tallenneta nollana. Funktiot: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if. Kulmat ovat asteina.

## Muuta monta kohdetta kerralla

1. Valitse useita kohteita, esimerkiksi 8 viivaa ja 4 mittaa.
2. Otsikossa lukee "12 kohdetta", ja luettelo yläreunassa tarjoaa **Kaikki (12)**, **Viiva (8)** ja **Mitoitus (4)**.
3. **Kaikki** näyttää, mitä jokaisella kohteella on (taso, väri, viivatyyppi ja muut). Valitse **Mitoitus (4)** nähdäksesi mitoitusasetukset.
4. Muuta arvoa, esimerkiksi {{ui:Decimals}} (Desimaalit) arvoon `1`.

Kaikki neljä mittaa muuttuvat yhdellä kumoamisvaiheella. Kenttä, jossa lukee **Vaihtelee**, tarkoittaa, että kohteet eroavat toisistaan. Arvon kirjoittaminen asettaa sen kaikkiin. Lukitulla tasolla olevat kohteet jätetään ennalleen, ja huomautus kertoo, kuinka monta.

## Valinnan summat

Kun useita kohteita on valittu, yläreunan {{ui:Totals}} (Summat) -osio kertoo:

- **Kohteet**: kuinka monta kutakin lajia, esimerkiksi "8 viivaa, 2 murtoviivaa, 1 ympyrä".
- **Kokonaispituus**: viivojen, kaarten ja murtoviivojen summa (myös splinet lasketaan), ja kuinka monta kohdetta se on.
- **Kokonaisala**: suljettujen kohteiden summa: ympyrät, kokonaiset ellipsit, suljetut murtoviivat ja viivoitukset. Viivoituksen reiät vähennetään.

Ne ovat piirustuksen pituusmuodossa. Jos piirustus käyttää jalkoja ja tuumia, alat ovat neliötuumina ja neliöjalkoina. Tilarivi näyttää saman pituuden ja alan aina, kun kohteita on valittu. {{ui:Settings}} (Asetukset) › {{ui:CadCraft}} › {{ui:Length and area of the selection}} (Valinnan pituus ja ala) › {{ui:Hidden}} (Piilotettu) kytkee sen pois. Yhdelle kohteelle {{ui:Geometry}} (Geometria) näyttää oman pituutensa ja alansa kuten ennen.

## Koordinaatit

Jokainen piste näyttää **X**, **Y** ja **Z**: viivan alun ja lopun, keskipisteet, lisäyspisteet, tekstin sijainnit ja nykyisen murtoviivan kärkipisteen. Viivat näyttävät myös **Delta X**, **Delta Y** ja **Delta Z** (vain luku). Murtoviivoilla ja viivoituksilla on **Korkeus** (yksi Z koko kohteelle).

Pisteen nimen vieressä oleva ristikkonappi antaa valita pisteen piirustuksesta. Napsauta sitä ja napsauta sitten uutta sijaintia (tartunnat toimivat). Arvot ovat maailmakoordinaatteja.

## Yleiset

| Kenttä | Mitä se on |
|---|---|
| {{ui:Layer}} (Taso), {{ui:Color}} (Väri), {{ui:Linetype}} (Viivatyyppi), {{ui:Linetype scale}} (Viivatyypin mittakaava), {{ui:Lineweight}} (Viivanpaksuus) | Kuten tasopaneelissa. {{ui:By layer}} (Tason mukaan) seuraa tasoa |
| {{ui:Transparency}} (Läpinäkyvyys) | Tason mukaan, lohkon mukaan tai 0–90 % |
| {{ui:Thickness}} (Paksuus) | Kuinka pitkälle viivat, ympyrät, kaaret, murtoviivat, pisteet ja teksti ulottuvat Z-suunnassa |
| {{ui:Material}} (Materiaali) | Tason mukaan, lohkon mukaan, Yleinen tai nimi, jonka piirustus toi |
| {{ui:Plot style}} (Plottaustyyli) | Vain luku. Piirustukset plotataan värin mukaan arkin [plottaustyylitaulukon](topic:plot-pdf#plot-style-tables) kautta |
| {{ui:Hyperlink}} (Hyperlinkki) | Kohteeseen tallennettu verkko-osoite |

## Mitä kukin tyyppi näyttää

| Valittu | Voit muuttaa |
|---|---|
| Viiva | Alku- ja loppu-X, Y ja Z; pituus; kulma |
| Ympyrä | Keskipiste; säde; halkaisija; ympärysmitta; ala (kukin asettaa säteen) |
| Kaari | Keskipiste; säde; alku- ja loppukulma; kokonaiskulma; jänne (näyttää kaaren pituuden ja alan) |
| Ellipsi | Keskipiste; pää- ja sivusäde; sädesuhde; pääakselin kulma; alku- ja loppukulma |
| Murtoviiva | Kärkiselain (alla); yleinen leveys; korkeus; suljettu; ala, kun se on suljettu (skaalaa sen keskipisteensä ympäri) |
| Teksti | Sisältö; tyyli; tasaus; korkeus; kierto; leveyskerroin; vinouskulma; määritelty leveys; rivivälit; annotatiivinen; sijainti |
| Lohkoviite | Lisäyspiste; kierto; mittakaava X, Y ja Z sekä tasainen mittakaava; attribuuttiarvot |
| Viivoitus | Kuvio; mittakaava; kulma; origo; assosiatiivinen; saarten tunnistus; taustaväri; korkeus |
| Mitoitus | Katso alla |
| Monijohtoviite | Teksti; korkeus; leveys; tekstin puoli; nuolenpään koko; laskeutumisetäisyys; nuolenpään piste |
| Näkymäruutu | Mittakaava; keskipiste ja koko arkilla; näkymän keskipiste mallissa; päällä; näytön lukitus |

### Murtoviivan kärjet

{{ui:Current vertex}} (Nykyinen kärkipiste) näyttää, mihin kärkeen alla olevat kentät kuuluvat. Käytä nuolipainikkeita tai kirjoita numero siirtyäksesi toiseen kärkeen. Kärkien määrää ei ole rajoitettu. Jokaisella kärjellä on X, Y, alku- ja loppusegmentin leveys sekä sen segmentin kaarevuus, joka alkaa siitä (0 = suora).

## Mitoitukset

Mitoitus näyttää **Mitoitustyylinsä**, sen, mitä se mittaa, sen pisteet ja kaikki asetukset:

- **Viivat ja nuolet:** nuolenpää kummallekin päälle, nuolen koko, merkin koko, mitoitus- ja apuviivojen värit ja viivanpaksuudet, kumman tahansa puolen tai kummankin apuviivan piilottaminen, apuviivan siirtymä ja ulottuma.
- **Teksti:** ohitus (jätä tyhjäksi mitatulle arvolle; `<>` tarkoittaa sitä omassa tekstissäsi), tyyli, väri, korkeus, siirtymä, pysty- ja vaakasuuntainen sijainti, aina vaakasuora, kierto ja taustatäyttö.
- **Sovitus:** kokonaismittakaava, perusviivan väli, mitä siirtyy, kun tila loppuu, ja tekstin siirto.
- **Ensisijaiset yksiköt:** muoto, desimaalit, pyöristys, etuliite, jälkiliite, mittakaava, desimaalierotin sekä alku- ja loppunollien piilotus. Kulmille kulman muoto ja desimaalit.
- **Vaihtoehtoiset yksiköt:** päällä tai pois, muoto, desimaalit, kerroin (25.4 muuttaa tuumat millimetreiksi), pyöristys, etuliite ja jälkiliite.
- **Toleranssit:** ei mitään, symmetrinen, poikkeama, rajat tai perus, ylä- ja alaarvoilla, desimaaleilla, korkeudella ja sijainnilla.

Jos muutat jotakin näistä avatussa mitoituksessa, toisen ohjelman tekemä mitoituksen kuva poistuu, ja CadCraft piirtää mitoituksen uudelleen.

:::note
Vaakasuora tekstin sijainti (ensimmäisen tai toisen apuviivan vieressä) ja viivan alle sijoitettu teksti piirretään lineaarisiin ja tasattuihin mitoituksiin. Muihin mitoituksiin ne säilytetään ja tallennetaan, mutta niitä ei vielä piirretä. Sovitus-valinnat säilytetään ja tallennetaan, mutta niitä ei vielä piirretä. CadCraft sijoittaa tekstin omalla säännöllään: viivan yläpuolelle, ja ulkopuolelle, kun se ei mahdu.
:::

## Kun mitään ei ole valittu

Kun mitään ei ole valittu, paneeli näyttää:

- **Uudet kohteet:** taso, väri, viivatyyppi, viivanpaksuus ja tekstin korkeus, jotka uudet kohteet saavat. Piirustuksen yksiköt ja pituusmuoto. Nykyisen tason viivatyyppi ja viivanpaksuus. Uusien mitoitusten koot. Arkilla arkin nimi, paperi ja suunta tulevat ensin.
- **Näkymä:** näytöllä olevan näkymän keskipiste, korkeus ja leveys. Kirjoita arvo siirtääksesi näkymän sinne.
- **Muut:** UCS-kuvake päällä tai pois, UCS (aina Maailma, koska CadCraftilla ei ole vielä käyttäjän koordinaatistoja) ja merkintämittakaava.

## Yläreunan painikkeet

| Painike | Tekee |
|---|---|
| Suppilo | {{cmd:QSELECT}}: valitsee tyypin ja ominaisuuden mukaan |
| Osoitin | {{cmd:SELECT}}: valitsee kohteita komentorivillä |
| Plus tai 1 | Lisääkö napsautus valintaan (plus) vai korvaako se sen (1). Sama asetus kuin Asetukset-kohdassa {{ui:CadCraft}} |
| Nasta | Automaattinen piilotus, yllä |

## Yleisiä virheitä

- **Kenttään kirjoittaminen ei tehnyt mitään.** Paina {{key:Enter}} tai napsauta muualle ottaaksesi arvon käyttöön. Punainen kenttä ja huomautus tarkoittavat, että syöte hylättiin.
- **Pituus yksiköllä hylätään.** Piirustuksella ei ole yksiköitä. Aseta {{ui:Units}} (Yksiköt), kun mitään ei ole valittu.
- **Vain Taso ja Väri näkyvät.** Valittuna on useita kohdelajeja ja **Kaikki** on valittu. Valitse yksi laji yläreunan luettelosta.
- **Jotkin kohteet eivät muuttuneet.** Ne ovat lukitulla tasolla. Avaa tason lukitus tasopaneelissa.
- **Kirjoitetut kirjaimet menivät kenttään.** Kun kentässä on kohdistin, näppäimet kirjoittavat sinne. Paina {{key:Enter}} tai {{key:Esc}} ja kirjoita sitten komento.
