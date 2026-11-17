---
title: Lohkojen tekeminen ja lisääminen
summary: Muuta piirretty ovi lohkoksi, sijoita se uudelleen eri kohtiin, mittakaavoihin ja kulmiin sekä siivoa käyttämättömät lohkot.
keywords: lohko, bmake, insert, ddinsert, symboli, purge, explode, uudelleenmääritys, peruspiste, viite, count, bcount, luettelo, csv, attribuutit, tietojen poimiminen
from: 125a129d
---

## Mitä tehdään

Ovisymboli, josta tehdään lohko nimeltä `DOOR-900`, ja joka sijoitetaan kolmesti: sellaisenaan, kierrettynä 90 astetta ja peilattuna.

Lohko on nimetty kokoelma kohteita. Piirrät sen kerran, ja jokainen käyttöpaikka on **lohkoviite**, joka osoittaa yhteen määritelmään. Vasemman paneelin {{ui:Lohkot}}-osio luettelee piirustuksen lohkot ja kertoo, kuinka monta kertaa kukin on käytössä.

## Piirrä ovi

1. Kirjoita `L` ja paina {{key:Enter}}.
2. Kirjoita `0,0` ja paina {{key:Enter}}.
3. Kirjoita `@0,900` ja paina {{key:Enter}}, ja paina sitten {{key:Enter}} uudelleen. Tämä on ovilehti.
4. Kirjoita `A` ja paina {{key:Enter}}.
5. Kirjoita `C` ja paina {{key:Enter}}, jotta annat ensin keskipisteen.
6. Kirjoita `0,0` ja paina {{key:Enter}} keskipisteelle.
7. Kirjoita `900,0` ja paina {{key:Enter}} aloituspisteelle.
8. Kirjoita `0,900` ja paina {{key:Enter}} lopetuspisteelle. Tämä on aukeama.
9. Napsauta {{ui:Laajuus}}.

Kaari kulkee vastapäivään aloituspisteestä lopetuspisteeseen.

## Tee lohko

1. Kirjoita `B` ja paina {{key:Enter}}, tai napsauta {{ui:Tee}} Lohkot-ryhmässä.
2. Kohdassa `Enter block name` kirjoita `DOOR-900` ja paina {{key:Enter}}.
3. Kohdassa `Specify insertion base point` kirjoita `0,0` ja paina {{key:Enter}}. Tämä on saranapiste: piste, joka osuu kohtaan, johon lohko sijoitetaan.
4. Kohdassa `Select objects` vedä ikkuna ovilehden ja kaaren ympärille.
5. Paina {{key:Enter}}.

Historia kertoo: `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` {{ui:Lohkot}}-paneeli näyttää DOOR-900:n merkinnällä `1×`: yksi viite. Napsauta ovea: se valitaan nyt yhtenä kohteena, nimeltään ”Lohkoviite”.

:::tip
Voit valita kohteet ensin ja kirjoittaa sitten `B`. CadCraft kysyy silti nimen ja peruspisteen, ja käyttää sen jälkeen valintaasi.
:::

## Lisää lohko

1. Kirjoita `I` ja paina {{key:Enter}}, tai napsauta {{ui:Lisää}} DOOR-900:n vieressä {{ui:Lohkot}}-paneelissa.
2. Kohdassa `Enter block name or [File/Library] <DOOR-900>` paina {{key:Enter}}. (Paneelin {{ui:Lisää}}-painike täyttää nimen puolestasi.)
3. Ovi seuraa ristikkoa. Napsauta kohtaa, johon saranan pitäisi tulla.

Toinen ovi ilmestyy.

## Lisää kierrettynä tai skaalattuna

1. Kirjoita `I` ja paina {{key:Enter}}, ja paina sitten {{key:Enter}} hyväksyäksesi nimen.
2. Kohdassa `Specify insertion point [Scale/Rotate]` kirjoita `R` ja paina {{key:Enter}}.
3. Kirjoita `90` ja paina {{key:Enter}}. Esikatselu kääntyy.
4. Napsauta sijoittaaksesi sen.

Kirjoita `S` sen sijaan asettaaksesi mittakertoimen; se koskee molempia suuntia. Mittakerroin ja kierto muistetaan seuraavaa lisäystä varten. Oven peilaamiseksi lisää se ja käytä viitteeseen komentoa {{cmd:MIRROR}}.

## Muuta sijoitettua lohkoa

Valitse lohkoviite. Oikeassa paneelissa voit muuttaa kohtia {{ui:X}}, {{ui:Y}}, {{ui:Mittakaava X}}, {{ui:Mittakaava Y}} ja {{ui:Kierto}}. Negatiivinen {{ui:Mittakaava X}} kääntää sen peilikuvaksi.

## Määritä lohko uudelleen

Muuttaaksesi kaikkia ovia kerralla tee lohko samalla nimellä:

1. Piirrä oven uusi versio.
2. Kirjoita `B` ja paina {{key:Enter}}, ja kirjoita `DOOR-900`.
3. Kohdassa `Block "DOOR-900" already exists. Redefine it?` kirjoita `Y` ja paina {{key:Enter}}.
4. Anna peruspiste ja valitse uudet kohteet kuten aiemmin.

Jokainen DOOR-900-viite näyttää nyt uuden version.

Tai muokkaa lohkoa itseään: {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Muokkaa lohkoa}} ({{cmd:BEDIT}}) avaa sen omana kokonaisuutenaan, ja {{ui:Tallenna lohko}} tallentaa sen takaisin. Katso [Lohkon attribuutit](topic:attributes#change-a-block-the-block-editor).

## Laske lohkot ja vie luettelo

Kirjoita {{cmd:COUNT}} (tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Laske lohkot}}), ja sitten:

- napsauta yhtä ovea: kaikki tämän tilan ovet valitaan, ja historia kertoo, kuinka monta niitä on täällä ja koko piirustuksessa;
- tai paina {{key:Enter}}: historia luettelee jokaisen lohkon määrineen, suurimmasta alkaen;
- tai kirjoita `E` ja sitten `C` saadaksesi CSV-tiedoston määristä (mallissa, arkeilla ja yhteensä), tai `A` saadaksesi yhden rivin jokaista viitettä kohden sen tasolla, sijainnilla, kiertokulmalla ja jokaisella attribuuttiarvolla — luettelo, jonka voi avata taulukkolaskentaohjelmassa.

Nimettömiä lohkoja (mitoituksia, taulukoita) ja lohkojen sisällä olevia viitteitä ei lasketa. Kaavan tapaan alkavat solut (`=`, `+`, `-`, `@`) saavat alkuunsa `'`-merkin, jotta taulukkolaskentaohjelma näyttää ne tekstinä.

## Hajota ja puhdista

- {{cmd:EXPLODE}} (`X`) muuttaa valitun lohkoviitteen takaisin erillisiksi kohteiksi. Määritelmä säilyy.
- {{cmd:PURGE}} (`PU`) poistaa lohkomääritelmät, joita mikään ei enää käytä. Historia kertoo, kuinka monta se poisti.

## Lohkojen nimet

Nimi voi olla enintään 255 merkkiä pitkä ja sisältää välilyöntejä, mutta se ei voi alkaa tähdellä, eikä se saa sisältää merkkejä `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` tai takakenoa. Kun tallennat DXF R12 -muodossa, nimet kirjoitetaan isoin kirjaimin; muut merkit kuin kirjaimet, numerot, `$`, `_` ja `-` muuttuvat merkiksi `_`, ja nimet katkaistaan 31 merkkiin. Historia kertoo, kuinka monta muuttui. Lyhyet nimet isoilla kirjaimilla, numeroilla ja väliviivoilla, kuten `DOOR-900`, säilyvät muuttumattomina. Tallennettu DWG säilyttää nimet kirjoittamallasi tavalla, isoilla ja pienillä kirjaimilla; muuttuvat vain merkit, joita DWG ei salli (`|` muuttuu muotoon `$0$`, muut muuttuvat merkiksi `_`).

## Kirjoita lohko tai kohteita omaan tiedostoon

Kirjoita `W` ({{cmd:WBLOCK}}) ja valitse **Kohteet**, **Lohko** tai **Koko piirustus**. Tuloksena on uusi DWG tai DXF, joka sisältää vain siinä käytetyt tasot, tyylit ja lohkot, ja jonka origo on peruspisteesi. Kohteille voit joko säilyttää ne, muuttaa ne lohkoksi tai poistaa ne tästä piirustuksesta.

## Yleisiä virheitä

- **Lohko osui kaukana ristikosta.** Peruspiste ei ollut kohteilla. Tee lohko uudelleen niin, että peruspiste on kulmassa tai saranassa.
- **”Kohteita ei valittu; mitään ei tehty.”** Painoit {{key:Enter}} ennen kuin valitsit mitään.
- **”Tässä piirustuksessa ei ole vielä lohkoja: F lisää yhden tiedostosta, L kirjastosta (tai tee yksi komennolla BLOCK).”** Kirjoita `F`, jos haluat tuoda lohkon toisesta piirustuksesta, tai `L` kirjastosta. Katso [Lisää tiedostosta tai kirjastosta](topic:insert-from-file-and-library).
- **”Näkymäruutua ei voi sijoittaa lohkoon.”** Jätä näkymäruutujen kehykset valinnan ulkopuolelle.
