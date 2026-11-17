---
title: Avaa DWG, muokkaa sitä ja tallenna kopio
summary: Avaa jollekulle lähettämäsi piirustus, tarkista mitä siitä tuli, tee muutos ja lähetä kopio takaisin DWG- tai DXF-muodossa.
keywords: dwg, dxf, avaa, tuonti, vienti, tallenna, r12, kierros, konsultti, xref, tarkista piirustus, tallenna nimellä, dwg-tallennus, muoto
from: 49de4bf6
---

## Mitä teet

Avaat konsultilta saamasi DWG-tiedoston, tarkistat mitä CadCraft pystyi ja ei pystynyt näyttämään, lisäät huomautuksen, plottaat arkin PDF:ksi ja tallennat kopion lähetettäväksi takaisin DWG- tai DXF-muodossa.

## Avaa tiedosto

1. Paina {{key:Mod+O}} tai napsauta {{ui:Avaa}}.
2. Valitse `.dwg`-tiedosto.

Tilarivi näyttää ”Luetaan …”, kun piirustusta luetaan. Kun se on valmis, piirustus täyttää näytön ja historia kertoo esimerkiksi ”Avattu plan.dwg: 18,240 objektia, 64 tasolla” sekä sen, kuinka kauan lukeminen kesti.

:::offline
Olet offline-tilassa. Jos {{ui:Tallenna offline-käyttöön}}-painike näyttää ”Valmis offline-käyttöön”, DWG-tiedostot avautuvat normaalisti. Jos ei, eikä tässä välilehdessä ole vielä avattu DWG:tä, DWG:n avaaminen voi epäonnistua, koska CadCraftin DWG-lukija haetaan ensimmäisen DWG:n mukana: avaa DXF-tiedosto tai tallenna CadCraft offline-käyttöön seuraavalla kerralla, kun olet yhteydessä. Katso [Työskentely offline-tilassa](common:offline).
:::

## Tarkista, mitä tuli sisään

1. Katso vasemman paneelin {{ui:Piirustus}}-osio: muoto ja versio, yksiköt, objektien ja tasojen määrä sekä arkit.
2. Lue sen alla oleva ”Tietoja tästä tiedostosta” -ruutu, jos sellainen on.

Ruutu luettelee:

- **Ei vielä näytetty:** objektit, joita CadCraft ei vielä pysty piirtämään, lajin ja määrän mukaan. Ne jätetään pois, eikä niitä arvata.
- **Arkit tulivat sisään:** avaa ne piirustuksen alla olevilla välilehdillä.
- **Mitoitukset, jotka voitiin lukea vain piirrettyinä.**

3. Napsauta piirustuksen alla olevia välilehtiä nähdäksesi jokaisen arkin.
4. Tarkista {{ui:Yksiköt}} kohdasta {{ui:Nykyiset asetukset}} (ei mitään valittuna, {{ui:Malli}}-välilehti). Jos siinä lukee {{ui:Yksiköitön}}, mutta tiedät piirustuksen olevan millimetreissä, aseta se, jotta arkin ja plotin mittakaavat luetaan oikein.

:::tip
Jos odotit piirustuksen osaa etkä näe sitä, tarkista {{ui:Tasot}}-paneeli: taso voi olla pois päältä tai jäädytetty tiedostossa. Napsauta sen nimeä tehdäksesi siitä nykyisen; se kytkee tason päälle.
:::

## Tee muutos

1. Tee huomautuksille taso: napsauta {{ui:Uusi taso}}, kirjoita `NOTES` ja paina {{key:Enter}}.
2. Kirjoita `DT` ja paina {{key:Enter}}.
3. Napsauta kohtaa, johon huomautus tulee.
4. Kirjoita piirustukseen sopiva tekstin korkeus (katso [Lisää teksti ja tunnisteet](topic:text)) ja paina {{key:Enter}}.
5. Paina {{key:Enter}} säilyttääksesi kiertokulman 0.
6. Kirjoita huomautus ja paina {{key:Enter}}.
7. Lopeta painamalla {{key:Enter}} uudelleen.

Tuotujen mitoitusten muokkaaminen on sallittua: heti kun muutat yhtä, CadCraft piirtää sen uudelleen omalla tyylillään.

## Plottaa arkki tarkastettavaksi

1. Napsauta arkin välilehteä.
2. Paina {{key:Mod+P}}.
3. Napsauta {{ui:Lataa PDF}}.

Katso [Plottaa PDF:ksi](topic:plot-pdf).

## Tallenna kopio

1. Paina {{key:Mod+S}} tai napsauta {{ui:Tallenna}}.

Avasit DWG-tiedoston, joten selain lataa tiedoston `<name>.dwg` siinä versiossa, jossa DWG alun perin oli. Historia kertoo esimerkiksi ”Tallennettiin kopio nimellä Plan.dwg (DWG (AutoCAD 2018)).” ja listaa rivit sen alle kaikesta, mikä muuttui matkalla.

2. Lue nuo rivit ennen kuin lähetät tiedoston. [Mitä DWG säilyttää ja mitä muuttaa](topic:files#what-a-dwg-keeps-and-changes) selittää jokaisen niistä.

Alkuperäistä DWG:tä ei koskaan muuteta. Jokainen tallennus on uusi lataus.

## Tallenna DWG- tai DXF-muodossa

Valitse muoto itse:

1. Paina {{key:Mod+Shift+S}} tai napsauta {{ui:Tallenna nimellä}}.

Ikkuna {{ui:Tallenna kopio nimellä}} avautuu neljällä vaihtoehdolla, joista jokainen näyttää tiedostonimen, jonka se antaa: {{ui:DWG}} versioluetteloineen {{ui:Versio}}, {{ui:DXF R12}}, {{ui:DXF 2000}} ja {{ui:DXF 2000 (binary)}}. Piirustuksen nykyinen muoto ja versio on jo valittu.

2. Napsauta haluamaasi muotoa. DWG:lle valitse toisen toimiston käyttämä versio tai vanhempi: AutoCAD 2018, 2013, 2010, 2007, 2004 tai 2000.
3. Napsauta {{ui:Tallenna}}.

Kopio ladataan. Tästä eteenpäin {{key:Mod+S}} tallentaa tämän piirustuksen tässä muodossa, ja uudetkin piirustukset alkavat siinä, tässä selaimessa. {{ui:Peruuta}} tai {{key:Esc}} ei tallenna mitään, ja historia kertoo ”Ei tallennettu.”

Mikä valita:

- **DWG** säilyttää eniten: arkit näkymäruutuineen, oikeat mitoitukset, viivoitukset, taso- ja lohkonimet kirjoittamasi mukaisina sekä monirivisen tekstin monirivisenä. AutoCAD 2000 -versio avautuu useimmissa ohjelmissa; 2004 ja uudemmat säilyttävät myös todelliset värit.
- **DXF 2000** on tekstitiedosto, joka säilyttää lähes kaiken, mitä DWG säilyttää: jokainen arkki asetteluna näkymäruutuineen, oikeat mitoitukset, viivoitukset, todelliset värit, viivanpaksuudet, viivatyypit ja nimet kirjoittamasi mukaisina. Se avautuu AutoCAD 2000:ssa ja uudemmissa sekä useimmissa CAD-ohjelmissa. Monijohtoviitteistä tulevat ne viivat, nuolenpäät ja teksti, jotka ne piirtävät. Versiossa 2000 tai uudemmassa avattu DXF tallentuu DXF 2000 -muodossa.
- **DXF 2000 (binary)** sisältää saman sisällön kuin DXF 2000 binäärimuodossa: pienempi tiedosto, joka säilyttää jokaisen luvun tarkasti. Muiden ohjelmien binääriset DXF-tiedostot avautuvat kuten tekstitiedostot, ja binäärisestä DXF:stä avattu piirustus tallentuu takaisin binäärinä.
- **DXF R12** avautuu lähes missä tahansa CAD-ohjelmassa. Se säilyttää ensimmäisen arkin näkymäruutuineen sekä CadCraftin muut arkit. Se yksinkertaistaa uudempia asioita, kuten monirivistä tekstiä ja viivoituksia.

## Mitä toinen toimisto näkee

DWG-muodossa:

- Viivat, kaaret, ympyrät, ellipsit, murtoviivat, teksti, monirivinen teksti, lohkot attribuutteineen, kiinteät täytöt, viivoitukset ja tasot sellaisina kuin ne näet.
- Oikeat mitoitukset: toinen ohjelma mittaa ne uudelleen, kun ne venytetään.
- Jokainen arkki paperineen ja näkymäruutuineen.
- Monijohtoviitteet monijohtoviitteinä. AutoCAD 2000 -versiossa todelliset värit muuttuvat lähimpään vakiovariin.

DXF R12 -muodossa:

- Viivat, kaaret, ympyrät, murtoviivat, teksti, lohkoviitteet ja mitoitukset sellaisina kuin ne näet. Mitoitukset pysyvät oikeina mitoituksina.
- Tasonimet isoilla kirjaimilla, ja välilyönnit korvattu merkillä `_`.
- Ensimmäinen arkki piirustuksen paperitilana näkymäruutuineen. Muut arkit tulevat lohkoina nimeltä `CCLAYOUT_1` ja niin edelleen; jos he tarvitsevat jokaisen arkin asetteluna, plottaa heille myös PDF-tiedostot jokaisesta arkista.
- Monirivinen teksti erillisinä rivinä, ellipsit murtoviivoina, viivoitukset ääriviivoina.

Kummassakin tapauksessa kaikki, mikä oli merkitty kohtaan ”Ei vielä näytetty”, kun avasit DWG:n, **ei** ole kopiossa, ellei historia kerro sen säilyneen: DWG:n OLE-objektit ja sen 3D-kiintokappaleet mallitilassa kirjoitetaan takaisin, kun tallennat DWG-muodossa. Kerro se heille ja lähetä lisäksi PDF.

## Yleisiä virheitä

- **”CadCraft avaa DWG- ja DXF-piirustuksia.”** Tiedostolla on toinen pääte. Tarkista, että se on `.dwg` tai `.dxf`.
- **”Tätä piirustusta ei voitu lukea.”** DWG on vioittunut tai versiossa, jota lukija ei käsittele. Pyydä DXF-tiedostoa tai DWG-tiedostoa tallennettuna vanhempana versiona.
- **”Tämä binäärinen DXF päättyy kesken objektia.”** Tiedosto on katkaistu tai vioittunut. Kirjoita RECOVER, jotta luettavissa oleva osa avautuu, tai pyydä tiedosto uudelleen.
- **Tallennettu tiedosto on nimeltään `name (1).dwg` tai `name (1).dxf`.** Selain tekee näin, kun samanniminen tiedosto on jo kansiossa.
- **Heillä on vanhempi ohjelma, joka ei avaa DWG:tä.** Tallenna DWG kohdassa {{ui:Versio}} valinnalla {{ui:AutoCAD 2000}} tai {{ui:DXF R12}}-muodossa: lähes mikä tahansa CAD-ohjelma avaa sen.
- **Osia piirustuksesta puuttuu.** Linkitettyjä piirustuksia (xref) ei ladata ennen kuin valitset niiden tiedostot ({{cmd:XREF}}, `R`), ja kuvat näkyvät kehyksinä tiedostonimineen.
