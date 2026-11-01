---
title: CadCraftin näyttö
summary: Kierros piirto-ohjelman jokaiseen palkkiin, paneeliin ja välilehteen sillä nimellä, joka sillä on näytössä.
keywords: näyttö, käyttöliittymä, työkalurivi, valintanauha, paneelit, komentorivi, tilarivi, välilehdet, asettelun välilehdet, ominaisuudet, tasopaneeli, kierros
from: b5a33388
---

Näytössä on seitsemän osaa. Ylhäältä alas: sovelluspalkki, työkalurivi, piirtoalue ja sen kummallakin puolella paneeli, piirustuksen alla olevat välilehdet, komentorivi ja tilarivi.

## Sovelluspalkki

Aivan ylhäällä oleva ohut palkki kuuluu sivustolle, ei piirustukselle. Siinä näkyvät CadCraft-tunnus, sovelluksen nimi, käyttämäsi versio, linkki sovelluksen sivulle, {{ui:Ohje}}-painike (tai {{key:F1}}), {{ui:Tallenna offline-käyttöön}} -painike, {{ui:Koko näyttö}} -painike ja kaksi teemapainiketta, {{ui:Paperi}} ja {{ui:Malli}}.

{{ui:Asetukset}}-painike (hammaspyörä) sisältää CadCraftin omat asetukset ja kaikille sovelluksille yhteiset: katso [CadCraftin asetukset](topic:settings).

{{ui:Tallenna offline-käyttöön}} säilyttää kopion CadCraftista DWG-lukijoineen tässä selaimessa, jotta se aukeaa ilman yhteyttä. Sen nimike näyttää tilan: "Tallennetaan N / M", "Offline valmis", "Tallennus ei onnistunut" tai "Offline ei käytettävissä". Katso [Työskentely offline-tilassa](common:offline).

:::note
Sovelluspalkin {{ui:Paperi}}- ja {{ui:Malli}}-painikkeet muuttavat vain näytön värejä: {{ui:Paperi}} on vaalea teema, {{ui:Malli}} tumma. Niillä ei ole mitään tekemistä piirustuksen alla olevan {{ui:Malli}}-välilehden kanssa, joka vaihtaa piirustuksen ja sen arkkien välillä.
:::

{{ui:Koko näyttö}} -painike tai {{key:Ctrl+Shift+F}} (Ctrl-näppäin kaikilla tietokoneilla, myös Macilla) vaihtaa kolmen näyttötilan välillä: normaali, koko näyttö ja koko näyttö palkit piilotettuna. Kun palkit on piilotettu, vie osoitin näytön yläreunaan tuodaksesi ne takaisin.

## Työkalurivi

Sovelluspalkin alla on työkalurivi. Jokainen painike suorittaa komennon täsmälleen kuin olisit kirjoittanut sen, joten komentorivi esittää samat kysymykset kummalla tavalla tahansa. Pidä osoitinta painikkeen päällä nähdäksesi sen komennon aliaksen. Ryhmät ovat:

| Ryhmä | Painikkeet |
|---|---|
| Tiedosto | {{ui:Uusi}}, {{ui:Avaa}}, {{ui:Tallenna}}, {{ui:Tallenna nimellä}}, {{ui:Plottaa}} |
| Piirrä | {{ui:Viiva}}, {{ui:Murtoviiva}}, {{ui:Ympyrä}}, {{ui:Kaari}}, {{ui:Suorakulmio}}, {{ui:Monikulmio}}, {{ui:Ellipsi}}, {{ui:Teksti}}, {{ui:Kappale}}, {{ui:Viivoitus}} ja {{ui:Lisää}}: {{ui:Piste}}, {{ui:Apuviiva}} ja {{ui:Säde}} (katso [Apuviivat ja säteet](topic:construction-lines)) |
| Muokkaa | {{ui:Siirrä}}, {{ui:Kopioi}}, {{ui:Kierrä}}, {{ui:Skaalaa}}, {{ui:Peilaa}}, {{ui:Venytä}}, {{ui:Siirtymä}}, {{ui:Typistä}}, {{ui:Pidennä}}, {{ui:Pyöristä}}, {{ui:Viistä}}, {{ui:Hajota}}, {{ui:Poista}} ja {{ui:Lisää}}: {{ui:Matriisi}}, {{ui:Yhdistä}}, {{ui:Täsmää ominaisuudet}}, {{ui:Katkaise}} ja {{ui:Pidennä pituutta}} |
| Merkitse | {{ui:Vaaka-pysty}}, {{ui:Tasattu}}, {{ui:Kulma}}, {{ui:Säde}}, {{ui:Halkaisija}} (mitoitukset), {{ui:Viitenuoli}} (moniviitenuoli) ja {{ui:Lisää}}: {{ui:Jatkuva mitoitus}}, {{ui:Perusviivamitoitus}} ja {{ui:Revisiopilvi}} |
| Parametrinen | {{ui:Auto}}, {{ui:Rajoita}}, {{ui:Mitoitus}}, {{ui:Parametrit}} ja {{ui:Lisää}} kunkin rajoitteen kanssa (katso [Rajoita piirustusta](topic:constraints)) |
| Lohkot | {{ui:Tee}}, {{ui:Lisää}}, {{ui:Kirjasto}} ja {{ui:Lisää}}: {{ui:Muokkaa lohkoa}} ja {{ui:Määritä attribuutti}} |
| Arkit | {{ui:Uusi arkki}}, {{ui:Näkymäruutu}} |
| Muokkaus | {{ui:Kumoa}}, {{ui:Tee uudelleen}}, {{ui:Kopioi}} (leikepöydälle), {{ui:Liitä}} ja {{ui:Lisää}}: valikko, jossa on {{ui:Leikkaa}}, {{ui:Kopioi}}, {{ui:Liitä}}, {{ui:Liitä samaan paikkaan}}, {{ui:Monista ja siirrä}}, {{ui:Poista}}, {{ui:Valitse kaikki}}, {{ui:Poista valinta}}, {{ui:Pikavalinta}}, {{ui:Valitse samanlaiset}} ja {{ui:Etsi ja korvaa}}, kullakin oma näppäimensä |
| Näkymä | {{ui:Laajuus}}, {{ui:Ikkuna}}, {{ui:Edellinen}} ja {{ui:Lisää}}: {{ui:Mittaa etäisyys}}, {{ui:Pinta-ala}}, {{ui:Mittaa (säde, kulma …)}} sekä jaettu näyttö: {{ui:Jaa vierekkäin}}, {{ui:Jaa päällekkäin}}, {{ui:Neljä ruutua}}, {{ui:Yksi ruutu}} (katso [Jaa näyttö](topic:split-screen)) ja {{ui:Käännä näkymää 90° vasemmalle}}, {{ui:Käännä näkymää 90° oikealle}}, {{ui:Takaisin maailmaan}} (katso [Käännä näkymää](topic:ucs-and-turned-view)) |

{{ui:Kopioi}} Muokkaa-ryhmässä on {{cmd:COPY}}-komento (peruspiste, sitten minne kukin kopio menee); {{ui:Kopioi}} Muokkaus-ryhmässä asettaa kohteet leikepöydälle {{ui:Liitä}}-toimintoa varten. Katso [Kopioi, liitä ja monista](topic:copy-paste). Käynnissä olevan komennon painike pysyy korostettuna, kunnes komento päättyy. Työkaluvihjeet nimeävät Windowsin pikanäppäimet ("Ctrl+O"); Macilla {{key:Mod+O}} toimii myös.

Matalassa ikkunassa (esimerkiksi kannettavalla, jonka näyttö on skaalattu 125 prosenttiin tai enemmän) työkalurivi ei koskaan vie piirustuksen paikkaa: kun piirustus saisi liian vähän korkeutta, painikkeet pudottavat sanat kuvakkeiden alta ja ryhmien nimet (pidä osoitinta painikkeen päällä nähdäksesi sen nimen), ja jos se ei vielä riitä, työkalurivistä tulee yksi rivi, joka vierittyy sivusuunnassa. Korkeampi ikkuna tuo sanat takaisin.

## Vasen paneeli

Vasemmassa paneelissa on kolme osiota.

- **{{ui:Tasot}}.** Piirustuksen jokainen taso, nykyisellä tasolla täytetty piste. Napsauta nimeä tehdäksesi tasosta nykyisen. Jokaisella rivillä on värinäyte (napsauta sitä valitaksesi värin) ja neljä painiketta: päällä/pois (silmä), jäädytys (lumihiutale), lukitus (riippulukko) ja plottaus (tulostin). {{ui:Uusi taso}} avaa ruudun uuden lisäämiseksi. Katso [Järjestä piirustus tasojen avulla](topic:layers).
- **{{ui:Lohkot}}.** Piirustuksessa määritellyt lohkot, kuinka monta kertaa kutakin käytetään, ja {{ui:Lisää}}-painike kullekin. Katso [Tee ja lisää lohkoja](topic:blocks).
- **{{ui:Piirustus}}.** Tietoja avoimesta tiedostosta: nimi (ja "(muutettu)", kun tallentamattomia muokkauksia on), muoto, koko, yksiköt, kohteiden, tasojen, lohkojen ja arkkien määrä. Kun avaat tiedoston, "Tietoja tästä tiedostosta" -ruutu luettelee kaiken, mitä CadCraft ei voinut näyttää tai joutui muuntamaan.

## Piirtoalue

Näytön keskellä on piirustus. Osoitin on hiusristikko. Kun CadCraft haluaa pisteen, pieni merkki ja nimike ("Päätepiste", "Keskikohta") näyttävät, mihin kohteen tartunta osuu. Kun se haluaa kohteita, hiusristikossa on valintaruutu ja sen alla olevat kohteet syttyvät.

Kun piirustus on tyhjä, "Aloita piirtäminen" -kortti näyttää muutaman ensimmäisen komennon. Se häviää heti, kun suoritat komennon tai avaat tiedoston. Voit pudottaa DWG- tai DXF-tiedoston mihin tahansa tälle alueelle avataksesi sen.

## Piirustuksen alla olevat välilehdet

Piirustuksen alla ovat välilehdet: ensin {{ui:Malli}}, sitten {{ui:3D}}, sitten yksi välilehti kutakin arkkia (asettelua) kohti ja sitten {{ui:+}}-painike.

- {{ui:Malli}} on itse piirustus täydessä koossa piirustusyksiköissä.
- {{ui:3D}} näyttää piirustuksen maassa makaamassa ja siitä tehdyt kiintokappaleet. Kun se on näkyvissä, työkalurivillä on {{ui:3D}}-ryhmä piirustusryhmien tilalla. Katso [Malli 3D:nä](topic:3d-solids).
- Jokainen arkkivälilehti on paperiarkki, jossa on piirustusotsikko ja näkymäruutuja malliin. Mitä siihen piirrät, on paperiyksiköissä (millimetrit tai tuumat). Kaksoisnapsauta näkymäruudun sisällä työskennelläksesi mallin parissa sen kautta (katso [Työskentele mallin parissa näkymäruudun kautta](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Pitkä arkin nimi lyhennetään välilehdellä; pidä osoitinta välilehden päällä nähdäksesi koko nimen. Kun arkkeja on paljon, {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Arkkivälilehdet}} › {{ui:Vain arkkien numerot}} näyttää välilehdellä vain kunkin arkin numeron (A-101).
- {{ui:+}} tekee uuden arkin, jossa on reunus, piirustusotsikko ja yksi näkymäruutu. Se on sama kuin {{cmd:LAYOUT}}-komento.
- Kaksoisnapsauta arkkivälilehteä nimetäksesi sen uudelleen. Kun välilehti on kohdistettu, {{key:Left}} ja {{key:Right}} siirtävät välilehtien välillä.

Jokainen välilehti säilyttää oman zoominsa ja panorointinsa. Katso [Määritä arkki](topic:sheets-and-viewports).

## Oikea paneeli: Ominaisuudet

Oikea paneeli muuttuu valinnan mukaan.

- **Mitään ei ole valittu, {{ui:Malli}}-välilehdellä:** otsikkona on {{ui:Nykyiset asetukset}}. Täällä asetat uusien kohteiden {{ui:Taso}}, {{ui:Väri}} ja {{ui:Tekstin korkeus}}, piirustuksen {{ui:Yksiköt}} sekä uusien mitoitusten koot ({{ui:Tekstin korkeus}}, {{ui:Nuolen koko}}, {{ui:Desimaalit}}, {{ui:Kokonaismittakaava}}).
- **Mitään ei ole valittu, arkilla:** otsikkona on "Arkki:" ja arkin nimi. Voit nimetä arkin uudelleen, muuttaa sen asetuksia {{ui:Paperi}} ja {{ui:Suunta}}, {{ui:Plottaa tämä arkki}} tai {{ui:Poista tämä arkki}}. Uusien kohteiden asetukset ovat sen alla.
- **Yksi kohde valittu:** sen tyyppi otsikkona (Viiva, Ympyrä, Teksti, Mitoitus, Näkymäruutu …), sitten sen taso, väri ja geometria. Kirjoita uusi arvo ja paina {{key:Enter}} muuttaaksesi sitä.
- **Useita kohteita valittu:** kuinka monta, sekä niiden yhteinen {{ui:Taso}} ja {{ui:Väri}}. Kummankin muuttaminen muuttaa ne kaikki. "Vaihtelee" tarkoittaa, että ne poikkeavat toisistaan.

Katso [Muokkaa otteilla ja ominaisuuksilla](topic:grips-and-properties).

Sen alla {{ui:Parametrit}}-paneeli avautuu, kun valitset {{ui:Parametrit}} tai kirjoitat {{cmd:PARAMETERS}}: jokainen parametri ja mitoitusrajoite yhdessä taulukossa. Katso [Käytä parametreja ja yhtälöitä](topic:parameters).

## Komentorivi

Alareunassa on komentorivi: historia siitä, mitä teit, ja sen alla kehote.

- Kehotteen nimike on `Komento:`, kun mitään ei ole käynnissä. Kun komento on käynnissä, se näyttää kysymyksen, sen valinnat hakasulkeissa ja oletuksen kulmasulkeissa, esimerkiksi `Määritä ympyrän säde [Halkaisija] <500>:`.
- Kun kirjoitat komennon nimeä, oikealla oleva vihje ehdottaa vastaavia komentoja. Paina {{key:Tab}} hyväksyäksesi ensimmäisen. "Sellaista komentoa ei ole" tarkoittaa, ettei mikään vastaa.
- {{key:Up}} ja {{key:Down}} tuovat takaisin aiemmin kirjoittamasi rivit.
- Historia säilyttää 400 viimeistä riviä. Komentojen viestit, {{cmd:DIST}}- ja {{cmd:LIST}}-komentojen mittaukset sekä tallennus- ja plottausraportit näkyvät täällä.

## Tilarivi

Aivan alin rivi on tilarivi.

- **Koordinaatit** vasemmalla: hiusristikon X ja Y. Kun komennolla on peruspiste, se näyttää myös etäisyyden ja kulman siitä, esimerkiksi `Δ 1200 < 90°`.
- **Viestit** keskellä, kuten "Ortogonaali päällä" tai "Nykyinen taso: Walls". Ne häipyvät muutaman sekunnin kuluttua.
- **{{ui:Ruudukko}}**, **{{ui:Ortogonaali}}**, **{{ui:Napa}}**, **{{ui:Tartunta}}**, **{{ui:Seuranta}}**, **{{ui:Dyn}}** ja **{{ui:LWT}}** oikealla. Kukin on kytkin; painettu painike on päällä. {{ui:LWT}} näyttää viivanpaksuudet näytöllä (katso [Viivanpaksuudet ja viivatyypit](topic:units-papers-scales#line-weights-and-linetypes)). {{ui:Tartunta}}-painikkeen vieressä oleva pieni nuoli avaa {{ui:Kohteen tartunnat}}, jossa valitset, mitkä tartunnat ovat käytössä. Katso [Tartu kohteiden pisteisiin](topic:object-snaps).

## Plottaa PDF:ksi -valintaikkuna

{{ui:Plottaa}} (tai {{key:Mod+P}}) avaa {{ui:Plottaa PDF:ksi}} -valintaikkunan, jonka vasemmalla puolella ovat asetukset ja oikealla puolella reaaliaikainen esikatselu. Katso [Plottaa PDF:ksi](topic:plot-pdf).

## Ohje

{{key:F1}} tai {{ui:Ohje}}-painike avaa tämän ohjeen sivupaneelina; piirustus pysyy käytettävänä sen vieressä. Se toimii ilman yhteyttä. {{key:F1}} uudelleen tai {{key:Esc}} paneelin sisällä sulkee sen. Katso [Tämän ohjeen käyttö](common:help).
