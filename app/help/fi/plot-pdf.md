---
title: Plottaa PDF:ksi
summary: Tee arkista PDF täydessä koossa tai mallista mittakaavassa tai paperiin sovitettuna, tulosta se selaimesta tai Studiosta, tai tallenna se PNG- tai SVG-kuvana.
keywords: plottaa, tulosta, tulostin, kopiot, png, svg, kuva, pdf, julkaise, exportpdf, paperi, mittakaava, yksivärinen, harmaasävy, mustavalkoinen, viivanpaksuus, kynä, sivun asetukset, plottausikkuna, plottaustyyli, plottaustyylitaulukko, ctb, väririippuvainen, rasterointi, plotstyles, stylesmanager
from: a4752f83
---

## Mitä teet

Arkista PDF täydessä koossa, sitten nopea PDF mallista mittakaavassa 1:100 ja tuloste.

PDF tehdään selaimessasi; mitään ei lähetetä. Se on vektori-PDF: viivat pysyvät terävinä kaikilla zoomaustasoilla, ja tekstistä voi hakea.

## Arkin plottaus

1. Napsauta piirustuksen alla olevaa arkin välilehteä.
2. Paina {{key:Mod+P}}, napsauta {{ui:Plottaa}}-painiketta tai kirjoita `PLOT` ja paina {{key:Enter}}.

Valintaikkuna {{ui:Plottaa PDF:ksi}} avautuu. Se kertoo, mikä arkki plotataan ja millä paperilla, ”täydessä koossa … niin kuin näet sen”. Oikealla oleva esikatselu näyttää arkin.

3. Valitse kohdasta {{ui:Plottaustyyli}} {{ui:Yksivärinen (musta)}} mustille viivoille, {{ui:Väri (piirrettynä)}} säilyttääksesi värit, {{ui:Harmaasävy}} tai oma taulukko (katso [Plottaustyylitaulukot](topic:plot-pdf#plot-style-tables)). Arkki säilyttää tämän valinnan: se tallentuu piirustuksen mukana.
4. Valitse kohdasta {{ui:Viivanpaksuus}} kynän leveys väliltä 0,13 mm – 0,70 mm. Viivat, joiden viivanpaksuus on oletus, tulostuvat tällä leveydellä; viivat, joilla on oma viivanpaksuus (taso tai kohde, tai värinsä kynä taulukossa), tulostuvat sillä.
5. Napsauta {{ui:Lataa PDF}}.

Selain lataa PDF-tiedoston, joka on nimetty piirustuksen ja arkin mukaan, esimerkiksi `Drawing1-A-101 Plan.pdf`. Historia ilmoittaa sen koon tavuina ja paperikoon millimetreinä.

Arkki plotataan aina kokoon 1:1 omalle paperilleen. Paperin vaihtamiseksi vaihda se itse arkilta (katso [Arkin määrittäminen](topic:sheets-and-viewports)). Tasot, joiden tulostus on pois päältä, jätetään pois, samoin näkymäruutujen kehykset.

## Kaikki arkit yhteen PDF:ään

Kahdella tai useammalla arkilla valintaikkunassa {{ui:Plottaa PDF:ksi}} on {{ui:Kaikki arkit yhteen PDF:ään}}; tai kirjoita {{cmd:PUBLISH}}. {{key:Enter}} ottaa kaikki arkit; `S` (Joitakin) pyytää niiden nimet, pilkulla erotettuina. Yksi PDF ladataan: siinä on sivu per arkki välilehtijärjestyksessä, kukin omassa paperikoossaan, ja kirjanmerkki per arkki sen nimellä. Jokainen arkki plotataan omalla plottaustyylitaulukollaan; arkki, jolle ei ole valittu mitään, käyttää sitä, jonka valitsit viimeksi valintaikkunassa, ja viimeksi valittua kynän leveyttä.

## Mallin plottaus

1. Napsauta {{ui:Malli}}-välilehteä.
2. Paina {{key:Mod+P}}.

Valintaikkuna kertoo plottaavansa mallin paperiarkille ja näyttää lisää asetuksia:

3. Valitse kohdasta {{ui:Ala}}, mitä plotataan:
   - {{ui:Kaikki (laajuus)}}: koko piirustus.
   - {{ui:Se, mikä on näytöllä}}: piirustuksen alue, joka näkyy juuri nyt.
   - {{ui:Ikkuna…}}: napsauta sitten {{ui:Valitse}}, napsauta piirustuksessa kahta kulmaa, ja valintaikkuna palaa.
4. Valitse kohdasta {{ui:Paperi}} koko: ISO A4 – A0, Letter, Legal, Tabloid sekä ANSI C ja D, tai ARCH C, D ja E.
5. Valitse kohdasta {{ui:Suunta}} {{ui:Vaaka}} tai {{ui:Pysty}}.
6. Valitse kohdasta {{ui:Mittakaava}} {{ui:Sovita paperille}} tai mittakaava, kuten `1:100`.

Asetusten alla oleva rivi ilmoittaa mittakaavan ja sen, kuinka suureksi alue tulee paperilla. Jos se on suurempi kuin paperi, rivi sanoo sen: reunat leikkautuvat pois. Valitse pienempi mittakaava, suurempi paperi tai {{ui:Sovita paperille}}.

7. Napsauta {{ui:Lataa PDF}}.

Mallin plotissa on 5 mm marginaali reunojen ympärillä, koska useimmat tulostimet eivät pysty tulostamaan reunaan asti. {{ui:Sovita paperille}} antaa epätasaisen mittakaavan (historia ja tietorivi sanovat ”(sovitettu)”); valitse vakiomittakaava, kun piirustuksen on oltava mitoiltaan tarkka.

:::note
Mittakaavat luetaan todellisissa yksiköissä. Jotta 1:100 on oikein, aseta {{ui:Yksiköt}} kohdassa {{ui:Nykyiset asetukset}} siihen, mikä yksi piirustusyksikkö on. Yksiköttömän piirustuksen oletetaan olevan millimetreissä.
:::

## Plottaustyylitaulukot

Plottaustyylitaulukko kertoo, miten kukin 255 standardivärisestä piirustusväristä tulostuu, kuten väririippuvainen plottaustyylitaulukko (CTB) tekee muissa CAD-ohjelmissa. Kolme on sisäänrakennettu:

| Taulukko | Tulostuu |
|---|---|
| {{ui:Väri (piirrettynä)}} | Jokainen kohde omalla värillään. |
| {{ui:Yksivärinen (musta)}} | Kaikki värit mustina: tavallinen valinta piirustuksille. |
| {{ui:Harmaasävy}} | Jokainen väri harmaasävynään, jolloin värit pysyvät erillään mustavalkotulostimella. |

Tehdäksesi oman, esimerkiksi punaiset viivat paksuina ja muut ohuina:

1. Napsauta valintaikkunassa {{ui:Plottaa PDF:ksi}} kohtaa {{ui:Muokkaa taulukoita…}} (tai kirjoita {{cmd:PLOTSTYLES}}).
2. Napsauta {{ui:Uusi}} ja kirjoita nimi, kuten `office`, kohtaan {{ui:Nimi}}. Aloittaaksesi sisäänrakennetusta taulukosta valitse se kohdasta {{ui:Taulukko}} ja napsauta {{ui:Kopioi}}.
3. Napsauta väriä ruudukossa. {{key:Shift}}+napsautus valitsee värialueen, {{key:Mod}}+napsautus lisää yhden, ja {{ui:Valitse kaikki värit}} valitsee ne kaikki.
4. Aseta, miten valitut värit tulostuvat:
   - {{ui:Tulostuu värinä}}: {{ui:Oma värinsä}}, {{ui:Musta}} tai {{ui:Toinen väri…}}.
   - {{ui:Harmaana}}: väri harmaasävynään.
   - {{ui:Muste (%)}}: 100 on täysi muste, 50 on puolivälissä valkoiseen (rasterointi), taustaviivoja varten.
   - {{ui:Viivanpaksuus}}: {{ui:Oma viivanpaksuutensa}} säilyttää kohteen tai tason viivanpaksuuden; arvo tulostaa jokaisen tämän värin viivan sillä leveydellä.
   - {{ui:Viivatyyppi}}: tulosta jokainen tämän värin viiva toisella viivatyypillä (esimerkiksi kaikki punaiset katkoviivoina); {{ui:Käytä kohteen viivatyyppiä}} jättää ne ennalleen.
   - {{ui:Viivan pää}} ja {{ui:Viivan liitos}}: tasainen, neliö tai pyöreä pää sekä viisto, sileä tai pyöreä kulma (pyöreä, kuten ennen, kun et valitse mitään).
   - {{ui:Täyttötyyli}}: tämän värin yhtenäinen täyttö tulostuu viivoituksena (vaaka- tai pystypalkkeina, vinoina, ristiviivoituksena, timantteina, neliöpisteinä) musteen sijaan, tulostimille ja piirustuksille, joissa tasainen muste on liian raskas.
   Taulukolla on itsellään kaksi asetusta lisää: {{ui:Viivanpaksuudet}}, leveydet, jotka se tuntee (tulostettu viiva menee lähimpään niistä), ja {{ui:Viivatyypin mittakaava}}, kerroin kaikkien ei-ISO-viivatyyppien katkoviivoille.
5. Napsauta {{ui:Valmis}}. Taulukko säilyy piirustuksessa, ja arkki (tai malli) plotataan nyt sillä. {{ui:Peruuta}} hylkää muutokset.

Värillä, jolla on oma kynä, on piste kulmassaan, ja piste alareunassa, kun se asettaa viivanpaksuuden. Kohde, jolla on todellinen väri (ei yksi 255:stä), käyttää lähimmän standardivärin kynää.

Piirustus säilyttää taulukkonsa ja kunkin arkin valinnan, kun tallennat DWG-muodossa (2000–2018) tai DXF-muodossa (R12 tai 2000), ja avautuu niiden kanssa uudelleen. Muut ohjelmat näkevät nimen kunkin arkin sivun asetuksissa (`office.ctb`), eivät itse taulukkoa. Toisesta ohjelmasta peräisin oleva piirustus, jonka sivun asetuksissa nimetään taulukko kuten `monochrome.ctb`, plotataan sisäänrakennetulla taulukolla, jolla on se nimi; muille nimille valintaikkuna kertoo, ettei piirustuksessa ole sitä, ja plotataan piirustuksen värit, kunnes valitset taulukon tai luot sellaisen nimen.

Käyttääksesi taulukkoa toisessa piirustuksessa napsauta kohdasta {{ui:Plottaustyylitaulukot}} painiketta {{ui:Vie}} (se tallentaa `office.plotstyle.json`), ja sitten toisessa piirustuksessa {{ui:Tuo…}}. {{ui:Tuo…}} ottaa myös `.ctb`-tiedoston toisesta ohjelmasta: se luetaan formaatin julkaistusta kuvauksesta, ja **sitä ei ole vielä tarkistettu oikeaa tiedostoa vastaan**. Värin väri, rasterointi ja viivanpaksuus luetaan; harmaasävyä, kynänumeroita, viivatyyppejä, viivojen päitä ja liitoksia sekä täyttötyylejä ei lueta, ja nimetty taulukko (`.stb`) hylätään. Vertaa ensimmäistä plottia odotuksiisi, ja lähetä meille tiedosto, jos se on väärin.

## Tulostus

**Selaimessa** napsauta {{ui:Tulosta…}}. CadCraft tekee PDF:n ja avaa sille selaimen oman tulostusvalintaikkunan. Valitse siellä ”Todellinen koko” tai 100 % (ei ”Sovita”), jotta mittakaava säilyy. Jos selain ei voi tulostaa sivulta, PDF avautuu uudessa välilehdessä: tulosta se sieltä painamalla {{key:Mod+P}}.

Voit myös napsauttaa {{ui:Avaa tulostettavaksi}}: PDF avautuu uudessa selainvälilehdessä, ja tulostat sen sieltä.

:::safari
Safari saattaa näyttää PDF:n ja odottaa, että valitset **Tiedosto** ja sitten **Tulosta**.
:::

Jos selaimesi estää uuden välilehden, CadCraft lataa PDF:n ja kertoo siitä historiassa. Salli ponnahdusikkunat sivustolle, jotta se avautuu välilehdessä seuraavalla kerralla.

**CadCraft Studiossa** valintaikkuna {{ui:Plottaa PDF:ksi}} listaa tietokoneen tulostimet. Valitse {{ui:Tulostin}}, {{ui:Paperi tulostimessa}} ja {{ui:Kopiot}}-määrä, ja napsauta sitten {{ui:Tulosta…}}. {{ui:Sama kuin plottaus}} valitsee tulostimen paperin, joka on arkin kokoinen (A3 A3-arkille); kun tulostimella ei ole sellaista, se käyttää omaa paperiaan ja sovittaa arkin siihen. Windowsissa arkki lähetetään 300 dpi:n kuvana, koska Windows ei voi tulostaa PDF:ää ilman PDF-ohjelmaa; Linuxissa ja macOS:ssä itse PDF menee järjestelmän tulostuspalveluun. Mitään ei poistu tietokoneelta.

## Kuva- ja SVG-tiedostot

{{ui:Lataa PNG}} tallentaa plotatun arkin kuvana 300 dpi:llä (alennetaan vain, kun erittäin suuri arkki olisi suurempi kuin selain pystyy tekemään; historia kertoo siitä). {{ui:Lataa SVG}} tallentaa sen skaalautuvana piirustuksena millimetreissä, plotin viivat ja teksti mukaan lukien. Molemmat tulevat samasta plotista kuin PDF, samalla plottaustyylillä, viivanpaksuudella ja alueella. Piirustukseen sijoitetut kuvat ovat vain PDF:ssä; historia kertoo, kuinka monta jätettiin pois.

## Kuvat

Kuvat tulostuvat omalla resoluutiollaan, viivojen alla. Valintaikkunan {{ui:Kuvat}} kohta rajoittaa ne 600, 300 tai 150 dpi:hin pienemmän tiedoston saamiseksi. Viivat, teksti ja viivoitukset pysyvät aina terävinä (vektori), ja läpinäkyvyys pysyy läpinäkyvyytenä. Katso [Kuvat piirustuksessa](topic:pictures).

## Muistetut asetukset

Valintaikkuna muistaa viimeisen paperisi, suuntasi, mittakaavasi ja viivanpaksuutesi tässä selaimessa. Plottaustyylitaulukko pidetään jokaisen arkin kanssa piirustuksessa; arkki, jolle ei ole valittu mitään, alkaa viimeksi valitsemastasi. Valittu ikkuna säilyy, kunnes lataat sivun uudelleen; sen jälkeen valintaikkuna alkaa kohdasta {{ui:Kaikki (laajuus)}}.

## Yleisiä virheitä

- **PDF on tyhjä tai painikkeet ovat harmaita.** Ei ole mitään plotattavaa (tyhjä malli), tai {{ui:Ikkuna…}} on valittu eikä ikkunaa ole vielä valittu (”Valitse plotattava ikkuna.”).
- **Teksti näkyy PDF:ssä ”?”-merkkinä.** Puola, tšekki, kyrillinen, kreikka ja muut Euroopan kirjoitusjärjestelmät tulostuvat sellaisinaan: PDF sisältää tarvitsemansa kirjaimet (fontista Liberation Sans, jolla on Helvetican leveydet), ja teksti voidaan silti valita ja hakea. Kiinan, japanin ja korean teksti tulostuu myös sellaisenaan: kun piirustuksessa on sitä, plotti hakee suuremman fontin (noin 10 Mt, kerran), ja PDF sisältää vain käytetyt merkit, joten ensimmäinen kerta vaatii yhteyden (ei offline-kopiossa, joka tallennettiin ennen tätä). Heprea tulostuu samasta upotetusta fontista kuin latinalainen teksti, ja arabia, persia ja urdu saavat plotin hakemaan yhden fontin lisää (alle 1 Mt, kerran); oikealta vasemmalle kulkevat rivit järjestetään ja kirjaimet yhdistetään (katso [Teksti](topic:text)). Harvinaiset ideogrammit näiden fonttien ulkopuolella ja kirjoitusjärjestelmät, jotka vaativat monimutkaista muotoilua, kuten hindi, tulostuvat ”?”-merkkinä, ja historia laskee ne.
- **Kaikki viivat ovat yhtä paksuja.** Niiden viivanpaksuus on oletus: anna tasoille tai kohteille {{ui:Viivanpaksuus}} oikeanpuoleisessa paneelissa (katso [Viivanpaksuudet ja viivatyypit](topic:units-papers-scales#line-weights-and-linetypes)), tai aseta viivanpaksuudet väreittäin [plottaustyylitaulukossa](topic:plot-pdf#plot-style-tables).
- **”(ei tässä piirustuksessa)” plottaustyylin vieressä.** Piirustus on peräisin toisesta ohjelmasta ja nimeää taulukon, jota se ei sisällä. Valitse yksi taulukoista tai luo sellainen, jolla on sama nimi.
- **Rakennuslinjat tulostuivat.** Aseta niiden taso olemaan tulostamatta: napsauta sen tulostinpainiketta {{ui:Tasot}}-paneelissa.
- **Tuloste on väärän kokoinen.** Tulostin skaalasi sen. Tulosta todellisessa koossa.
- **{{key:Mod+P}} avasi selaimen tulostusvalintaikkunan.** Kohdistin oli oikean paneelin ruudussa tai toinen valintaikkuna oli auki. Paina {{key:Enter}} tai {{key:Esc}} poistuaksesi ruudusta ja yritä uudelleen, tai napsauta {{ui:Plottaa}}-painiketta.
- **{{key:Mod+P}} ei tehnyt mitään.** Komento on käynnissä. Paina ensin {{key:Esc}}.
