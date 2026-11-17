---
title: Yksiköt, paperikoot ja mittakaavat
summary: Mitä piirustusyksiköt tarkoittavat CadCraftissa, arkki- ja tulostuspaperikoot, kaikki vakiomittakaavat sekä se, miten teksti- ja mitoitusten koot liittyvät tulostusmittakaavaan.
keywords: yksiköt, millimetrit, tuumat, jalat, jalat ja tuumat, arkkitehtuuri, insinööri, murtoluku, murtoluvut, lunits, pituuden muoto, tarkkuus, metrit, paperikoko, a3, a1, arch d, ansi, tabloid, letter, mittakaava, 1:100, 1/4 tuumaa, arkkitehtuurimittakaava, insinöörimittakaava, insunits
from: 8346236a
---

## Piirustusyksiköt

Piirrät täydessä koossa piirustusyksiköissä. Se, mitä yksi yksikkö tarkoittaa, on piirustuksen **Yksiköt**-asetus:

1. Paina {{key:Esc}}, jotta mitään ei ole valittuna, {{ui:Malli}}-välilehdellä.
2. Valitse kohdasta {{ui:Nykyiset asetukset}} {{ui:Yksiköt}}: {{ui:Yksiköitön}}, {{ui:Millimetrit}}, {{ui:Senttimetrit}}, {{ui:Metrit}}, {{ui:Tuumat}} tai {{ui:Jalat}}.

Mitoitukset voivat kirjoittaa pituutensa millimetreinä, senttimetreinä, metreinä tai kilometreinä piirustusyksiköstä riippumatta: katso [Mitoitus mm, cm, m tai km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Yksiköiden vaihtaminen ei muuta mitään kokoa. Se muuttaa sitä, miten mittakaavat luetaan arkeilla ja tulosteissa, ja mitkä mittakaavat tarjotaan. DWG:stä tai DXF:stä avattu piirustus säilyttää tiedostoon tallennetut yksiköt; vasemman paneelin {{ui:Piirustus}}-osio näyttää ne.

{{ui:Yksiköitön}}-piirustusta käsitellään paperin yksikössä: millimetreinä ISO-paperilla, tuumina US-paperilla.

## Jalat ja tuumat sekä murtoluvut

Pituuksien **kirjoitus ja syöttö** on erillinen asetus, pituuden muoto. Se ei muuta geometriaa, vaan ainoastaan sitä, miltä luvut näyttävät ja mitä voit kirjoittaa.

1. Paina {{key:Esc}}, jotta mitään ei ole valittuna, {{ui:Malli}}-välilehdellä.
2. Valitse kohdasta {{ui:Nykyiset asetukset}} {{ui:Pituuden muoto}}: {{ui:Desimaali}} (`150.5`), {{ui:Arkkitehtuuri}} (`12'-6 1/2"`), {{ui:Tekninen}} (`12'-6.5"`), {{ui:Murtoluku}} (`150 1/2`) tai {{ui:Tieteellinen}} (`1.505E+02`).
3. Valitse {{ui:Tarkkuus}}: desimaalit tai pienin murtoluku (1/16 on arkkitehtuurin tavallinen valinta).

Tai kirjoita {{cmd:UNITS}} (`UN`) ja vastaa sen kahteen kysymykseen.

Kun käytössä on {{ui:Arkkitehtuuri}} tai {{ui:Tekninen}}, yksi piirustusyksikkö on yksi tuuma, kuten AutoCAD-ohjelmassa: aseta myös {{ui:Yksiköt}} arvoon {{ui:Tuumat}}. Voit silloin kirjoittaa pituuksia jalkoina ja tuumina kaikkialla, missä pituutta kysytään, sekä {{ui:Ominaisuudet}}-ruuduissa:

| Kirjoitat | Tarkoittaa |
|---|---|
| `12'6"` tai `12'-6"` | 12 jalkaa 6 tuumaa (150) |
| `12'6-1/2"` | 12 jalkaa 6½ tuumaa. Käytä väliviivaa ennen murtolukua: {{key:Space}} on komentorivillä {{key:Enter}}. |
| `12'` | 12 jalkaa |
| `6"` tai `6` | 6 tuumaa: pelkkä luku on tuumia |
| `1/2`, `6-1/2` | murtoluvut toimivat kaikissa muodoissa |

Pisteissä on samat pituudet: `@12'6",0` tai `@10'<90`. Kulmat pysyvät asteina.

Muoto näkyy historiassa ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: pinta-alat neliötuumina ja neliojalkoina), kohdassa {{ui:Ominaisuudet}}, tilarivin koordinaateissa ja **uusissa mitoituksissa**. Arkit säilyttävät paperiyksikkönsä (millimetrit tai tuumat) desimaaleina.

:::note
Pituuden muoto tallennetaan DWG- ja DXF-tiedostoihin, ja jokainen mitoitus säilyttää oman muotonsa: tallennettu piirustus avautuu uudelleen niin kuin jätit sen.
:::

## Paperikoot

Arkit ja mallin tulosteet käyttävät näitä kokoja kumpaan suuntaan tahansa:

| Paperi | Koko | Yksikkö arkilla |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimetrit |
| ISO A3 | 420 × 297 mm | millimetrit |
| ISO A2 | 594 × 420 mm | millimetrit |
| ISO A1 | 841 × 594 mm | millimetrit |
| ISO A0 | 1189 × 841 mm | millimetrit |
| Letter | 11 × 8.5 in | tuumat |
| Legal | 14 × 8.5 in | tuumat |
| Tabloid / ANSI B | 17 × 11 in | tuumat |
| ANSI C | 22 × 17 in | tuumat |
| ANSI D | 34 × 22 in | tuumat |
| ARCH C | 24 × 18 in | tuumat |
| ARCH D | 36 × 24 in | tuumat |
| ARCH E | 48 × 36 in | tuumat |

Uudet arkit alkavat ISO A3:lla metrisille ja yksiköttömille piirustuksille, ja Tabloidilla tuuma- tai jalkapiirustuksille. Mallin tulosteet alkavat ISO A4:llä tai Letterillä samalla tavalla ja muistavat sitten viimeisimmän valintasi. Avattujen tiedostojen arkit säilyttävät oman kokonsa, joka näytetään nimellä ”Mukautettu”, kun se ei ole yksi näistä.

## Mittakaavat

Mittakaava `1:n` tarkoittaa, että yksi yksikkö paperilla näyttää n saman yksikön verran mallissa, joten 1:100 näyttää 1 m rakennusta 10 mm paperilla. CadCraft laskee tämän piirustusyksiköistä ja paperin yksiköstä.

**Metriset mittakaavat**, tarjolla jokaiselle piirustukselle: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arkkitehtuurimittakaavat**, tarjolla kun yksiköt ovat tuumia tai jalkoja: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Insinöörimittakaavat**, tarjolla kun yksiköt ovat tuumia tai jalkoja: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Omat mittakaavat.** Kirjoita `SCALELISTEDIT` (tai `SCALELIST`) lisätäksesi oman mittakaavan, kuten 1:75 tai työmaamittakaavan 2 paperiyksikköä : 300 piirustusyksikköä. `Add` kysyy nimen, sitten paperiyksiköt ja piirustusyksiköt (nimi, kuten `1:75`, tarjoaa omat lukunsa; paina {{key:Enter}} ottaaksesi ne). `Edit`, `Delete`, `List` ja `Reset` toimivat samassa luettelossa; `Reset` palaa vakioluetteloon. Omat mittakaavasi näkyvät vakioiden jälkeen näkymäruudun mittakaavaluettelossa Ominaisuudet-paneelissa ja {{ui:Plottaa PDF:ksi}}-valintaikkunassa. Näkymäruutu tuolla mittakaavalla näyttää nimensä, ja ne tallennetaan piirustukseen (DWG ja DXF 2000) piirustuksen mittakaavaluettelona. Muusta ohjelmasta avattu piirustus tuo luettelonsa mukanaan; mittakaavat, jotka vastaavat vakiota, eivät näy kahdesti.

Kun näkymäruutu kohdistetaan {{ui:Näytä koko malli}}- tai {{ui:Valitse ikkuna mallista…}}-toiminnolla, CadCraft valitsee suurimman vakiomittakaavan, joka mahtuu. {{ui:Sovita koko malli}} asettaa sen sijaan tarkan mittakaavan, joka näkyy tavallisena suhteena.

## Koot paperilla ja mallissa

Teksti- ja mitoitusten koot ovat siinä tilassa, jossa piirrät.

| Haluat paperille | Piirretään arkille | Piirretään mallissa mittakaavassa 1:50 (mm-piirustus) | Piirretään mallissa mittakaavassa 1/4" = 1'-0" (tuumapiirustus) |
|---|---|---|---|
| 2.5 mm teksti | 2.5 | 125 | — |
| 3/32" teksti | 0.09375 | — | 4.5 |

Mitoituksissa pidä koot paperikokoina ja aseta yleinen mittakaava ({{cmd:DIMSCALE}}) tulostusmittakaavaksi: 50 mittakaavalle 1:50, 48 mittakaavalle 1/4" = 1'-0". Katso [Mitoitusten koot](topic:dimension-settings).

## Merkitseminen mittakaavan mukaan

Piirrä malli täydessä koossa ja anna CadCraftin tehdä yllä olevat laskut puolestasi.

1. Valitse teksti tai mitoitukset, joiden pitäisi säilyttää kokonsa paperilla. Valitse Ominaisuudet-paneelissa {{ui:Annotatiivinen}}. {{ui:Koko paperilla}} näyttää esimerkiksi `2.5 mm at 1:50`.
2. Kirjoita {{cmd:ANNOSCALE}} ja mittakaava, jolla piirustus tulostetaan, kuten `1:100`.

Jokainen annotatiivinen teksti ja mitoitus muutetaan kooltaan, jotta se tulostuu samankokoisena uudessa mittakaavassa: 2.5 mm teksti on 125 korkea millimetripiirustuksessa mittakaavassa 1:50 ja 250 korkea mittakaavassa 1:100. Kappaleen leveys muuttuu samalla; mitoituksen teksti, nuolet ja välit muuttuvat yhdessä (sen yleinen mittakaava). Se on yksi kumoamisvaihe, eikä ei-annotatiivisia kohteita muuteta koskaan.

Asetus tallennetaan DWG:hen ja DXF:ään: muut ohjelmat lukevat annotatiivisuusmerkin, ja CadCraft säilyttää myös mittakaavan, johon kukin kohde on mitoitettu.

Jos toimistosi asettaa paperikorkeudet Oletuskäytännöt-lisäosassa (Asetukset › Yleiset › Oletuskäytännöt › Merkintöjen koot paperilla), {{cmd:ANNOSCALE}} asettaa myös uuden tekstin alkukorkeudeksi toimiston korkeuden kyseisen mittakaavan huomautuksille. Katso [Oletuskäytännöt](topic:default-policies).

### Yksi kohde useassa mittakaavassa

Arkki näyttää usein saman pohjapiirroksen mittakaavassa 1:100 ja osan siitä mittakaavassa 1:50. Anna huomautuksille ja mitoituksille molemmat mittakaavat, jolloin jokainen näkymäruutu näyttää ne paperikoollaan:

1. Valitse annotatiiviset tekstit ja mitoitukset ja kirjoita `OBJECTSCALE`.
2. Valitse `Add` ja kirjoita mittakaava, esimerkiksi `1:50`. (`Current scale` lisää piirustuksen merkintämittakaavan; `List` näyttää, mitä kukin kohde säilyttää; `Delete` poistaa yhden.)

Näkymäruutu, jonka mittakaava on kohteen luettelossa, näyttää kohteen sen mittakaavan kokoisena: 2.5 mm teksti piirretään 250 korkeana 1:100-näkymäruudussa ja 125 korkeana 1:50-näkymäruudussa, sekä ruudulla että tulosteessa. Kohde pysyy paikallaan; vain sen koko eroaa. Näkymäruudussa, jonka mittakaava ei ole kohteen luettelossa, kohde näytetään sillä koolla, joka sillä on, kunnes kirjoitat `ANNOALLVISIBLE` ja valitset `OFF`: silloin kohde jätetään siellä pois. {{cmd:ANNOSCALE}} muuttaa kokoa niille kohteille, jotka luettelevat uuden mittakaavan, ja jättää muut ennalleen.

Luettelot tallennetaan DWG:hen ja DXF:ään CadCraftin omana datana. Toinen ohjelma näkee jokaisen kohteen annotatiivisena yhdellä mittakaavalla, jonka mukaan se on mitoitettu. ANNOALLVISIBLE-kytkintä ei säilytetä tiedostossa.

## Viivanpaksuudet ja viivatyypit

Tasolla tai kohteella voi olla **viivanpaksuus** (0.05–2.11 mm) ja **viivatyyppi** (katkoviiva, piilo, keskiviiva, haamu, piste …). Aseta ne oikeassa paneelissa: kun mitään ei ole valittuna, {{ui:Viivatyyppi}} ja {{ui:Viivanpaksuus}} kohdassa {{ui:Nykyiset asetukset}} ovat ne, jotka uudet kohteet saavat ({{ui:Tason mukaan}}, jotta ne seuraavat tasoaan). Kaksi kohtaa {{ui:Taso …}}-kohdan alla ovat nykyisen tason omat. Kun kohteita on valittuna, samat kaksi riviä ja {{ui:Viivatyypin mittakaava}} muuttavat niitä kohteita. Komennot ovat {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) ja {{cmd:LTSCALE}} (`LTS`).

Viivatyypit näkyvät ruudulla ja tulosteissa. Niiden viivat ovat piirustusyksiköissä: metrinen piirustus käyttää ISO-kokoja (DASHED: 12.7 mm viivat), tuumapiirustus tuumakokoja (0.5"). Jos viivat näyttävät liian pieniltä tai suurilta, muuta piirustuksen {{ui:Viivatyypin mittakaava}} (LTSCALE) arvoa: jokainen viiva ja väli kerrotaan sillä, ja kohteen oma mittakaava kertoo sen vielä kerran. Liian hienoa kuviota, jota ei näy lainkaan, piirretään kiinteänä viivana.

Viivanpaksuudet tulostuvat paperilla millimetreinä mittakaavasta riippumatta. Viivat, joilla on {{ui:Oletus}}-viivanpaksuus, käyttävät {{ui:Plottaa PDF:ksi}}-valintaikkunassa valittua kynän leveyttä (0.13–0.70 mm; aluksi 0.25 mm). Viivanpaksuus 0 tulostuu ohuimpana viivana. Ruudulla jokainen viiva on yhden pikselin leveä, kunnes painat tilarivin {{ui:LWT}}-painiketta (tai kirjoitat {{cmd:LWDISPLAY}}). Silloin yli 0.25 mm:n viivanpaksuus piirtyy leveämmäksi (0.5 mm = 2 pikseliä) mallissa, ja arkilla todellisella leveydellään paperilla. Valinta säilyy tässä selaimessa.
