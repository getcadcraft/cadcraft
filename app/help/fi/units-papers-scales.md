---
title: Yksiköt, paperikoot ja mittakaavat
summary: Mitä piirustusyksiköt tarkoittavat CadCraftissa, arkkien ja tulosteiden paperikoot, jokainen vakiomittakaava ja se, miten teksti- ja mitoituskoot suhteutuvat tulostusmittakaavaan.
keywords: yksiköt, millimetrit, tuumat, jalat, jalat ja tuumat, arkkitehtuuri, tekninen, murtoluku, murtoluvut, lunits, pituuden muoto, tarkkuus, metrit, paperikoko, a3, a1, arch d, ansi, tabloid, letter, mittakaava, 1:100, 1/4 tuumaa, arkkitehtuurin mittakaava, tekninen mittakaava, insunits
from: 7dc9b62e
---

## Piirustusyksiköt

Piirrät täysikokoisena piirustusyksiköissä. Se, mitä yksi yksikkö tarkoittaa, on piirustuksen **Yksiköt**-asetus:

1. Paina {{key:Esc}}, jotta mitään ei ole valittuna, {{ui:Malli}}-välilehdellä.
2. Valitse {{ui:Nykyiset asetukset}}-kohdasta {{ui:Yksiköt}}: {{ui:Yksiköitön}}, {{ui:Millimetrit}}, {{ui:Senttimetrit}}, {{ui:Metrit}}, {{ui:Tuumat}} tai {{ui:Jalat}}.

Mitoitus voi kirjoittaa pituutensa millimetreinä, senttimetreinä, metreinä tai kilometreinä piirustusyksiköstä riippumatta: katso [Mitoitus mm-, cm-, m- tai km-yksiköissä](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Yksiköiden vaihtaminen ei muuta mitään kokoa. Se muuttaa tapaa, jolla mittakaavat luetaan arkeilla ja tulosteissa, ja mittakaavoja, jotka tarjotaan. DWG- tai DXF-tiedostosta avattu piirustus säilyttää tiedostoon tallennetut yksiköt; vasemman paneelin {{ui:Piirustus}}-osio näyttää ne.

Piirustus ilman yksiköitä ({{ui:Yksiköitön}}) käsitellään paperin yksikössä: millimetreinä ISO-paperilla, tuumina USA-paperilla.

## Jalat ja tuumat sekä murtoluvut

Se, miten pituudet **kirjoitetaan ja syötetään**, on erillinen asetus, pituuden muoto. Se ei muuta geometriaa, vain sitä, miltä luvut näyttävät ja mitä voit kirjoittaa.

1. Paina {{key:Esc}}, jotta mitään ei ole valittuna, {{ui:Malli}}-välilehdellä.
2. Valitse {{ui:Nykyiset asetukset}}-kohdasta {{ui:Pituuden muoto}}: {{ui:Desimaali}} (`150.5`), {{ui:Arkkitehtuuri}} (`12'-6 1/2"`), {{ui:Tekninen}} (`12'-6.5"`), {{ui:Murtoluku}} (`150 1/2`) tai {{ui:Tieteellinen}} (`1.505E+02`).
3. Valitse {{ui:Tarkkuus}}: desimaalit tai pienin murtoluku (1/16 on tavallinen valinta arkkitehtuurille).

Tai kirjoita {{cmd:UNITS}} (`UN`) ja vastaa sen kahteen kysymykseen.

Muodolla {{ui:Arkkitehtuuri}} tai {{ui:Tekninen}} yksi piirustusyksikkö on yksi tuuma, kuten AutoCADissa: aseta myös {{ui:Yksiköt}} arvoon {{ui:Tuumat}}. Voit silloin kirjoittaa pituuksia jaloissa ja tuumissa mihin tahansa kohtaan, jossa pituutta kysytään, ja {{ui:Ominaisuudet}}-ruutuihin:

| Kirjoitat | Tarkoittaa |
|---|---|
| `12'6"` tai `12'-6"` | 12 jalkaa 6 tuumaa (150) |
| `12'6-1/2"` | 12 jalkaa 6½ tuumaa. Käytä väliviivaa murtoluvun edessä: {{key:Space}} on {{key:Enter}} komentorivillä. |
| `12'` | 12 jalkaa |
| `6"` tai `6` | 6 tuumaa: pelkkä luku on tuumina |
| `1/2`, `6-1/2` | murtoluvut toimivat missä tahansa muodossa |

Pisteet ottavat samat pituudet: `@12'6",0` tai `@10'<90`. Kulmat pysyvät asteina.

Muoto näkyy historiassa ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: pinta-alat neliötuumina ja neliöjaloina), {{ui:Ominaisuudet}}-paneelissa, tilarivin koordinaateissa ja **uusissa mitoituksissa**. Arkit säilyttävät paperinsa yksiköt (millimetrit tai tuumat) desimaaleina.

:::note
Pituuden muoto tallennetaan DWG- ja DXF-tiedostoihin, ja kukin mitoitus säilyttää oman muotonsa: tallennettu piirustus avautuu samana kuin jätit sen.
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

Uudet arkit alkavat ISO A3:lla metrisille ja yksiköttömille piirustuksille, ja Tabloidilla tuumissa tai jaloissa oleville piirustuksille. Mallin tulosteet alkavat ISO A4:lla tai Letterillä samalla tavalla ja muistavat sitten viimeisimmän valintasi. Avattujen tiedostojen arkit säilyttävät oman kokonsa, joka näytetään nimellä ”Custom” (Mukautettu), kun se ei ole yksi näistä.

## Mittakaavat

Mittakaava `1:n` tarkoittaa, että yksi yksikkö paperilla näyttää n saman yksikön verran mallissa, joten 1:100 näyttää 1 m rakennusta 10 mm paperilla. CadCraft laskee tämän piirustusyksiköistä ja paperin yksiköstä.

**Metriset mittakaavat**, tarjolla jokaiselle piirustukselle: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arkkitehtuurin mittakaavat**, tarjolla kun yksiköt ovat tuumat tai jalat: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Teknisen piirustuksen mittakaavat**, tarjolla kun yksiköt ovat tuumat tai jalat: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Omat mittakaavat.** Kirjoita `SCALELISTEDIT` (tai `SCALELIST`) lisätäksesi oman mittakaavan, kuten 1:75 tai työmaamittakaavan 2 paperiyksikköä : 300 piirustusyksikköä. `Lisää (A)` kysyy nimen ja sitten paperiyksiköt ja piirustusyksiköt (nimi kuten `1:75` tarjoaa omat lukunsa; paina {{key:Enter}} ottaaksesi ne). `Muokkaa (E)`, `Poista (D)`, `Luettelo (L)` ja `Palauta (R)` toimivat samalla luettelolla; `Palauta (R)` palaa vakioluetteloon. Omat mittakaavasi näkyvät vakioiden jälkeen näkymäruudun mittakaavaluettelossa Ominaisuudet-paneelissa ja {{ui:Plottaa PDF:ksi}}-ikkunassa; näkymäruutu tässä mittakaavassa näyttää nimensä. Ne tallennetaan piirustukseen (DWG ja DXF 2000) piirustuksen mittakaavaluettelona. Muusta ohjelmasta avattu piirustus tuo oman luettelonsa mukanaan; mittakaavat, jotka vastaavat vakiota, eivät näy kahdesti.

Kun näkymäruutu kohdistetaan {{ui:Näytä koko malli}}- tai {{ui:Valitse ikkuna mallista…}}-toiminnolla, CadCraft valitsee suurimman vakiomittakaavan, joka mahtuu. {{ui:Sovita koko malli}} asettaa sen sijaan tarkan mittakaavan, joka näkyy tavallisena suhteena.

## Koot paperilla ja mallissa

Teksti- ja mitoituskoot ovat sen tilan yksiköissä, jossa piirrät.

| Haluat paperille | Piirrettynä arkille | Piirrettynä mallissa 1:50 (mm-piirustus) | Piirrettynä mallissa 1/4" = 1'-0" (tuumapiirustus) |
|---|---|---|---|
| 2.5 mm teksti | 2.5 | 125 | — |
| 3/32" teksti | 0.09375 | — | 4.5 |

Mitoituksissa pidä koot paperikokoina ja aseta kokonaismittakaava ({{cmd:DIMSCALE}}) tulostusmittakaavaan: 50 mittakaavalle 1:50, 48 mittakaavalle 1/4" = 1'-0". Katso [Aseta mitoituskoot](topic:dimension-settings).

## Merkitse mittakaavan mukaan

Piirrä malli täysikokoisena ja anna CadCraftin laskea yllä olevat laskut puolestasi.

1. Valitse teksti tai mitoitukset, joiden koon pitää pysyä paperilla. Ominaisuudet-paneelissa valitse {{ui:Annotatiivinen}}. {{ui:Koko paperilla}} näyttää silloin esimerkiksi `2.5 mm at 1:50`.
2. Kirjoita {{cmd:ANNOSCALE}} ja mittakaava, jolla piirustus tulostetaan, kuten `1:100`.

Jokainen annotatiivinen teksti ja mitoitus muutetaan niin, että se tulostuu samankokoisena uudessa mittakaavassa: 2.5 mm teksti on 125 korkea mm-piirustuksessa 1:50 ja 250 korkea 1:100-mittakaavassa. Kappaleen leveys muuttuu sen mukana; mitoituksen teksti, nuolet ja välit muuttuvat yhdessä (sen kokonaismittakaava). Se on yksi kumoamisaskel, eikä ei-annotatiivisia kohteita muuteta koskaan.

Asetus tallennetaan DWG- ja DXF-tiedostoihin: muut ohjelmat lukevat annotatiivilipun, ja CadCraft säilyttää myös mittakaavan, johon kukin kohde on mitoitettu.

Jos toimistosi asettaa paperikorkeudet Oletuskäytännöt-lisäosassa (Asetukset › Yleiset › Oletuskäytännöt › Merkintöjen koot paperilla), {{cmd:ANNOSCALE}} asettaa myös uuden tekstin aloituskorkeudeksi toimiston korkeuden kyseiselle mittakaavalle. Katso [Oletuskäytännöt](topic:default-policies).

### Yksi kohde useassa mittakaavassa

Arkki näyttää usein saman pohjapiirroksen mittakaavassa 1:100 ja osan siitä mittakaavassa 1:50. Anna merkinnöille ja mitoituksille molemmat mittakaavat, ja jokainen näkymäruutu näyttää ne paperikoollaan:

1. Valitse annotatiiviset teksti ja mitoitukset ja kirjoita `OBJECTSCALE`.
2. Valitse `Lisää (A)` ja kirjoita mittakaava, esimerkiksi `1:50`. (`Current scale` lisää piirustuksen merkintämittakaavan; `List` näyttää, mitä kukin kohde säilyttää; `Delete` poistaa yhden.)

Näkymäruutu, jonka mittakaava on kohteen luettelossa, näyttää kohteen sen mittakaavan kokoisena: 2.5 mm teksti piirretään 250 korkeana 1:100-näkymäruudussa ja 125 korkeana 1:50-näkymäruudussa, sekä näytöllä että tulosteessa. Kohde pysyy paikallaan; vain sen koko eroaa. Näkymäruudussa, jonka mittakaava ei ole luettelossa, kohde näkyy siinä koossa, jonka sillä on, kunnes kirjoitat `ANNOALLVISIBLE` ja valitset `OFF`: silloin se jätetään sieltä pois. {{cmd:ANNOSCALE}} muuttaa kohteita, jotka luettelevat uuden mittakaavan, ja jättää muut ennalleen.

Luettelot tallennetaan DWG- ja DXF-tiedostoihin CadCraftin omana datana. Muu ohjelma näkee jokaisen kohteen annotatiivisena yhdessä mittakaavassa, johon se on mitoitettu. ANNOALLVISIBLE-kytkintä ei tallenneta tiedostoon.

## Viivanpaksuudet ja viivatyypit

Tasolla tai kohteella voi olla **viivanpaksuus** (0.05–2.11 mm) ja **viivatyyppi** (katkoviiva, piilotettu, keskiviiva, phantom, piste…). Aseta ne oikeanpuoleisessa paneelissa: kun mitään ei ole valittuna, {{ui:Viivatyyppi}} ja {{ui:Viivanpaksuus}} kohdassa {{ui:Nykyiset asetukset}} ovat ne, jotka uudet kohteet saavat ({{ui:Tason mukaan}} seuraa niiden tasoa), ja kaksi kohtaa {{ui:Taso …}}-otsikon alla ovat nykyisen tason omat. Kun kohteita on valittuna, samat kaksi riviä ja {{ui:Viivatyypin mittakaava}} muuttavat niitä kohteita. Komennot ovat {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) ja {{cmd:LTSCALE}} (`LTS`).

Viivatyypit näkyvät näytöllä ja tulosteissa. Niiden viivat ovat piirustusyksiköissä: metrinen piirustus käyttää ISO-kokoja (DASHED: 12.7 mm viivat), tuumapiirustus tuumakokoja (0.5"). Jos viivat näyttävät liian pieniltä tai suurilta, muuta piirustuksen {{ui:Viivatyypin mittakaava}}a (LTSCALE): jokainen viiva ja väli kerrotaan sillä; kohteen oma mittakaava kertoo sen vielä kerran. Liian hieno kuvio piirretään kiinteänä viivana.

Viivanpaksuudet tulostuvat mm-yksikössä paperilla mittakaavasta riippumatta. Viivat oletus-viivanpaksuudella käyttävät kynän leveyttä, joka on valittu {{ui:Plottaa PDF:ksi}}-ikkunassa (0.13–0.70 mm; aluksi 0.25 mm); viivanpaksuus 0 tulostuu ohuimpana viivana. Näytöllä jokainen viiva on yhden pikselin levyinen, kunnes painat tilarivin {{ui:LWT}}-painiketta (tai kirjoitat {{cmd:LWDISPLAY}}): silloin yli 0.25 mm viivanpaksuus piirtyy leveämmäksi (0.5 mm = 2 pikseliä) mallissa ja todellisella leveydellään paperilla arkilla. Valinta säilyy tässä selaimessa.

## Toimiston standardi

Toimisto voi säilyttää paperitekstin korkeudet, tasot, nimilohkon kentät ja mallipohjat yhdessä tietueessa, toimiston standardissa. CadCraft lukee sen tässä järjestyksessä: piirustuksen oma tietue (asetettu {{cmd:OFFICESTANDARD}} › `Import`, tallennettu tiedostoon), tiimisi yhteinen standardi ja sitten Oletuskäytännöt. Annotatiiviset teksti ja mitoitukset ottavat paperikorkeutensa siitä merkintämittakaavassa. Tyhjä standardi ei muuta mitään. {{cmd:OFFICESTANDARD}} › `Layers` lisää toimiston tasot, jotka piirustuksesta puuttuvat.
