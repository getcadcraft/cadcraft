---
title: Lohkon attribuutit
summary: Näe ja muuta arvoja, joita lohkoviite kantaa, kuten kohdenumero tai valmistaja, ja säilytä ne, kun tallennat kopion.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, piirustusotsikko, muokkaa paikan päällä, attribuuttieditori, attdef, määritä attribuutti, bedit, lohkoeditori, bclose, attribuutti, attribuutit, attrib, tunniste, kohdenumero, arvo, näkymätön, vakio, lohko, ominaisuudet, luettelo, laitetunniste
from: 34d307c7
---

## Mitä attribuutit ovat

Attribuutti on nimetty arvo, joka kulkee lohkoviitteen mukana: laitetunnisteen kohdenumero, huonetunnisteen nimi tai oven palonkestävyys. Lohkon määritelmä kertoo, mitä attribuutteja sillä on. Jokaisella on **tunniste**, **kehote**, **oletus** sekä paikka, koko ja kulma tekstilleen. Jokainen lohkoviite kantaa omia arvojaan.

Osa attribuuteista on **näkymättömiä**: ne sisältävät tietoa, kuten valmistajan tai mallinumeron, mutta eivät piirry koskaan. Osa on **vakioita**: ne ovat samat jokaisessa viitteessä, ja lohko kiinnittää ne.

## Mistä attribuutit tulevat

- DWG- ja DXF-tiedostojen lohkot, jotka avaat, säilyttävät attribuuttinsa kunkin viitteen arvoineen.
- {{cmd:INSERT}}-komennolla ja {{ui:Tiedosto}}-vaihtoehdolla tuodut lohkot säilyttävät omansa. Katso [Lisää tiedostosta tai kirjastosta](topic:insert-from-file-and-library).
- Kirjastokohteet tulevat lohkoina attribuutteineen: näkyvä kohdenumero ja kohteen tiedot näkymättöminä.
- Itse tekemäsi lohkot: määritä attribuutit ensin {{cmd:ATTDEF}}-komennolla (alla) ja valitse ne sitten muiden kohteiden kanssa, kun teet lohkon.

## Määritä attribuutit omille lohkoille

1. Piirrä lohkon viivat, esimerkiksi huonetunniste.
2. Valitse {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Määritä attribuutti}}, tai kirjoita `ATT` ja paina {{key:Enter}}.
3. Historia näyttää tilat (`Invisible=No Constant=No Preset=No`). Kirjoita `I`, `C` tai `P` vaihtaaksesi yhtä tilaa, ja paina {{key:Enter}}, kun tilat ovat oikein. Näkymättömät arvot säilytetään mutta eivät piirry. Vakioarvo on sama jokaisessa viitteessä. Esiasetettua arvoa ei kysytä, kun lisäät lohkon.
4. Kirjoita tunniste (esimerkiksi `ROOM_NO`: isoilla kirjaimilla, ei välilyöntejä), kehote (`Huoneen numero`) ja oletusarvo (`101`).
5. Napsauta kohtaa, johon arvo menee, ja anna korkeus ja kierto. Tunniste näkyy piirustuksessa.
6. Tee lohko {{cmd:BLOCK}}-komennolla valitsemalla viivat ja attribuuttimääritykset yhdessä. Lohkon korvaava viite saa oletusarvot. Jokainen uusi {{cmd:INSERT}} kysyy arvot.

Valittu attribuuttimääritys näyttää {{ui:Tunniste}}, {{ui:Kehote}}, {{ui:Oletus}} ja tilat {{ui:Ominaisuudet}}-kohdassa.

## Muuta lohkoa: lohkoeditori

{{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Muokkaa lohkoa}} ({{cmd:BEDIT}}, `BE`) avaa lohkon omana kokonaisuutenaan. Kirjoita sen nimi tai valitse ensin viite. Palkki yläreunassa kertoo, mitä lohkoa muokkaat. Piirrä, poista ja muuta sen kohteita tavallisilla komennoilla, ja lisää tai muuta attribuuttimäärityksiä. Napsauta sitten {{ui:Tallenna lohko}} (tai kirjoita {{cmd:BCLOSE}} ja `S`): jokainen viite näyttää muutoksen, ja yksi {{key:Mod+Z}} kumoaa kaiken. {{ui:Hylkää muutokset}} (`BCLOSE`, `D`) jättää lohkon ennalleen.

Kun lisäät, poistat tai muutat attribuuttimäärityksiä, tallennus päivittää myös jokaisen viitteen. Kirjoittamasi arvot säilyvät, uusi attribuutti saa oletusarvonsa, poistettu attribuutti katoaa, ja jokainen attribuutti palaa sinne, minne määritys sen asettaa. Historia kertoo, montako viitettä päivitettiin.

## Muokkaa piirustusotsikkoa paikan päällä (REFEDIT)

Arkin piirustusotsikko on usein lohkon sisällä. Jotta voit muuttaa sen viivoja tai tekstejä poistumatta arkilta:

1. Valitse piirustusotsikko ja {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Muokkaa paikan päällä}} (tai kirjoita {{cmd:REFEDIT}}).
2. Sen sisältö muuttuu tavallisiksi kohteiksi siihen paikkaan. Kaikki muu himmennetään eikä sitä voi muuttaa.
3. Muuta, poista tai piirrä: uudet kohteet tulevat osaksi lohkoa.
4. Napsauta yläreunan palkissa {{ui:Tallenna lohko}} (tai kirjoita {{cmd:REFCLOSE}} ja `S`). Jokainen viite näyttää muutoksen, ja yksi {{key:Mod+Z}} kumoaa koko muokkauksen. {{ui:Hylkää}} jättää lohkon ennalleen.

Linkitettyä piirustusta, dynaamista lohkoa tai viitettä, joka on skaalattu eri tavalla vaaka- ja pystysuunnassa, ei voi muokata paikan päällä. Käytä silloin {{cmd:BEDIT}}-komentoa tai avaa linkitetty piirustus.

:::note
Tallenna tai hylkää muutokset lohkoeditorissa ennen piirustuksen tallentamista. Tiedosto, joka tallennetaan editorin ollessa auki, sisältää lohkon sellaisena kuin se oli ennen muokkausta.
:::

## Täytä arvot, kun sijoitat lohkon

1. Kirjoita `I` ja paina {{key:Enter}}, kirjoita lohkon nimi ja paina {{key:Enter}}.
2. Napsauta kohtaa, johon lohko menee.
3. CadCraft kysyy jokaisen arvon, esimerkiksi `Anna nimikenumero (ITEM) <>`. Kirjoita arvo ja paina {{key:Enter}}, tai paina {{key:Enter}} pitääksesi kulmasulkeissa näkyvän oletusarvon.

Lohkon esiasetettuja ja vakioarvoja ei kysytä. Ne saavat oletusarvonsa.

## Katso ja muuta arvot

1. Napsauta lohkoviitettä.
2. Oikeassa paneelissa {{ui:Attribuutit}}-kohdassa jokaisella tunnisteella on arvo. Näkymättömät sanovat `piilotettu`.
3. Napsauta arvoa, kirjoita uusi arvo ja paina {{key:Enter}}.

Piirustus näyttää uuden arvon heti. Jokainen muutos on yksi vaihe: {{key:Mod+Z}} kumoaa sen.

**Attribuuttieditori.** Kaksoisnapsauta viitettä, jolla on attribuutteja (tai kirjoita {{cmd:EATTEDIT}}). Valintaikkuna {{ui:Muokkaa attribuutteja}} luettelee jokaisen tunnisteen kehotteineen ja arvoineen. Kirjoita uudet arvot. Napsauta riviä muuttaaksesi vain tämän viitteen attribuutin {{ui:Korkeus}}, {{ui:Kierto}}, {{ui:Leveyskerroin}}, {{ui:Tasaus}}, {{ui:Taso}}, {{ui:Väri}} ja {{ui:Näkymätön}}-asetusta. {{ui:Käytä}} pitää valintaikkunan auki, ja {{ui:OK}} käyttää muutokset ja sulkee sen. Jokainen {{ui:Käytä}} tai {{ui:OK}} on yksi kumoamisvaihe.

**Komentorivillä** {{cmd:ATTEDIT}} kysyy jokaisen arvon vuorollaan. Kirjoita uusi arvo tai paina {{key:Enter}} pitääksesi vanhan.

## Muuta attribuuttimäärityksiä (BATTMAN, ATTSYNC)

{{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Attribuuttien hallinta}} ({{cmd:BATTMAN}}) luettelee lohkon attribuutit. Voit muuttaa tunnistetta, kehotetta tai oletusta, valita {{ui:Näkymätön}}, {{ui:Vakio}} tai {{ui:Esiasetettu}} -tilan ja siirtää attribuutteja ylös tai alas (siinä järjestyksessä, jossa arvot kysytään). Kun {{ui:Päivitä viittaukset (arvot säilytetään)}} on valittuna, {{ui:Käytä}} tuo myös jokaisen viitteen linjaan. Uudelleen nimetty tunniste säilyttää arvonsa. Jokainen {{ui:Käytä}} on yksi kumoamisvaihe.

{{cmd:ATTSYNC}} tuo viitteet käsin linjaan lohkonsa määritysten kanssa: `S` valitsee viitteen, `N` nimeää lohkon ja `A` tekee kaikille lohkoille. Arvot säilyvät.

Kirjastokohteen omien kenttien arvot (tunnus, versio, lisenssi ja lähdemerkintä) näkyvät, mutta niitä ei voi muokata. Näin päivitysten tarkistus toimii. Kohdenumero ja määrä ovat sinun muutettavissasi.

## Luettele ne

Valitse viitteet ja kirjoita `LI` ({{cmd:LIST}}). Historia näyttää jokaisen attribuutin muodossa `TAG = arvo`, ja tarvittaessa merkinnän `(näkymätön)` tai `(vakio)`.

## Siirto, kierto ja räjäytys

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} ja {{cmd:MIRROR}} säilyttävät arvot. Teksti liikkuu lohkon mukana ja pysyy luettavana.
- {{cmd:EXPLODE}} muuttaa näkyvät attribuutit tavalliseksi tekstiksi arvoineen. Näkymättömät poistetaan.

## Tallennus

Tallennettu DWG ja tallennettu DXF säilyttävät molemmat jokaisen attribuutin: jokaisen lohkon määritykset (myös näkymättömät, vakio- ja esiasetetut) sekä jokaisen viitteen arvot. Muut CAD-ohjelmat lukevat ne tavallisina lohkon attribuutteina.

DXF R12 -muodossa yli 255 merkin pituinen arvo katkaistaan 255 merkkiin, ja historia kertoo siitä.

## Yleiset virheet

- **Arvo ei näy piirustuksessa.** Se on näkymätön tai tyhjä. Näkymättömät arvot näkyvät yhä oikeassa paneelissa.
- **Kirjoittamani arvo meni komentoriville.** Napsauta ensin arvokenttään oikeassa paneelissa.
