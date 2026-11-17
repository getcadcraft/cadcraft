---
title: CadCraftin asetukset
summary: Piirto-ohjelman omat asetukset: kohdistimen koko, mistä liitetty kopio roikkuu kohdistimesta, mitä napsautus tekee valinnalle, kuinka monta riviä työkalurivi käyttää, missä komentorivi on ja kuinka korkea se on, tiivis yläalue ja kulmamerkki.
keywords: komentorivi, kelluva komentorivi, kellua, kiinnitä, yksi rivi, f2, komentohistoria, commandline, cmdline, toparea, yläalue, tiivis, cursorsize, koko näytön ristikko, koko näytön kohdistin, reunasta reunaan, työkalurivin rivit, työkalurivin näyttö, ctrl f1, asetukset, mieltymykset, valinnat, kulmamerkki, akselikuvake, kohdistin, ristikko, poimintalaatikko, liitospiste, peruspiste, kohteiden napsautus, valinta, pickadd, shift, palauta
from: 0896eb42
---

Avaa {{ui:Asetukset}} sovelluspalkin hammasrattaalla tai {{key:Mod+,}}. Ensimmäinen välilehti, {{ui:CadCraft}}, sisältää tämän sovelluksen asetukset; {{ui:Yleiset}} sisältää ne, jotka kaikki saman perheen sovellukset jakavat (teema, paneelin tekstin koko ja leveydet, työkalurivin ulkoasu ja järjestys). CadCraftin asetukset ovat vain tässä sovelluksessa: muutat ne täällä, ja tämä selain muistaa ne. {{ui:Palauta CadCraftin asetukset}} palauttaa jokaisen niistä alkuperäiseen tilaan.

## Kohdistin

**Pieni**, **Keskikokoinen** (oletus), **Suuri** tai **Koko näyttö**: ristikon ja poimintalaatikon koko piirustuksessa. Suurempi poimintalaatikko valitsee kohteita myös hieman kauempaa, mikä auttaa kosketusnäytöllä tai hyvin hienossa piirustuksessa.

**Koko näyttö** vetää ristikon kaksi viivaa reunasta reunaan piirustuksen yli, myös kun mikään komento ei käy, jotta voit tarkistaa silmämääräisesti, että kaksi asiaa osuu yhteen koko näkymän läpi. Kun näkymä on jaettu, viivat pysyvät ruudussa, jossa työskentelet. Sama kuin AutoCADin {{cmd:CURSORSIZE}} 100: kirjoita {{cmd:CURSORSIZE}} ja 100 koko näytölle; pienempi luku valitsee lähimmän koon (alle 5 Pieni, 5–9 Keskikokoinen, 10–99 Suuri).

## Liittämispiste

Missä liitetty kopio roikkuu kohdistimesta {{key:Mod+V}}-näppäimen ({{cmd:PASTECLIP}}) jälkeen, kunnes napsautat:

- **Vasen alakulma** (oletus): kopioitujen kohteiden ulottuvuuden vasen alakulma, kuten AutoCADissa.
- **Keskipiste**: niiden ulottuvuuden keskikohta. Hyödyllinen symbolin paikoittamiseen silmämääräisesti.

`COPYBASE`-komennolla tehty kopio roikkuu aina peruspisteestä, jonka valitsit. {{ui:Liitä samaan paikkaan}} ({{key:Mod+Shift+V}}) ohittaa tämän asetuksen: se säilyttää alkuperäiset koordinaatit. Katso [Kopioi, liitä ja monista](topic:copy-paste).

## Kohteiden napsautus

Mitä napsautus piirustuksessa tekee valinnalle, kun mikään komento ei käy:

- **Lisää valintaan** (oletus): jokainen napsautus tai ikkuna lisää kohteita; {{key:Shift}}+napsautus tai {{key:Shift}}+ikkuna ottaa ne pois.
- **Korvaa valinnan**: napsautus tai ikkuna valitsee vain sen, minkä se poimii. {{key:Shift}}+napsautus lisää kohteen tai ottaa pois jo valitun; {{key:Shift}}+ikkuna lisää.

Kohdassa `Valitse kohteet:` komennon sisällä napsautukset lisäävät aina (ja {{key:Shift}} poistaa), mitä tämä asetus sanookin. Katso [Valitse kohteet](topic:select-objects).

## Tyhjän kohdan napsautus

Mitä napsautus kohtaan, jossa ei ole kohdetta, tekee, kun mikään komento ei käy. Kummassakin tapauksessa se aloittaa valintaikkunan (toinen napsautus viimeistelee sen).

- **Tyhjentää valinnan** (oletus): se, mikä oli valittuna, päästetään irti. Pidä {{key:Shift}} pohjassa napsautuksen aikana säilyttääksesi sen.
- **Säilyttää valinnan**: valinta pysyy, kuten muissa piirto-ohjelmissa; ikkuna lisää siihen. Paina {{key:Esc}} tyhjentääksesi valinnan.

## Vetäminen valitsemiseen

Mitä painaminen ja vetäminen tyhjään kohtaan piirtää:

- **Lasso** (oletus): vapaamuotoinen ääriviiva. Jos liikutat ensin oikealle, valitaan kokonaan sen sisään jäävät kohteet, vasemmalle ensin valitaan ne, joihin se koskee; {{key:Space}} vedon aikana vaihtaa ikkunan, risteävän ja aidan välillä.
- **Suorakulmio**: laatikko, kuten napsautus ja toinen napsautus piirtävät sen.

{{cmd:LASSOMODE}} `1` tai `0` asettaa saman. Katso [Lassovalinta](topic:lasso-selection).

## Vetäminen typistämiseen ja pidentämiseen

Mitä painaminen tyhjään kohtaan ja vetäminen tekee {{cmd:TRIM}}- ja {{cmd:EXTEND}}-komennoissa:

- **Polku** (oletus): vapaamuotoinen polku; jokainen palanen, jonka se ylittää, typistetään (tai pidennetään).
- **Ikkuna**: laatikko; jokainen palanen, johon se koskee, typistetään, kuten `C`-vaihtoehto tekee.

Katso [Typistä ja pidennä](topic:trim-and-extend).

## Työkalurivin sijainti

{{ui:CadCraft}} › {{ui:Työkalurivin sijainti}}: **Ylä** (oletus, kuten aina ennen), **Ala**, **Vasen** tai **Oikea**. Vasemmalla tai oikealla työkaluryhmät pinotaan sarakkeeseen, joka vierii, kun se on ikkunaa korkeampi, ja painikkeet kääntyvät kahdelle tai kolmelle riville. Valinta tallennetaan asetustesi mukana, ja {{cmd:TOOLBARDOCK}} (`TBDOCK`) asettaa sen komentoriviltä. {{ui:Yleiset}} › {{ui:Palauta asettelu}} palauttaa työkalurivin ylös.

Valikkotyylien palkit ovat työkalurivin sisällä ja liikkuvat sen mukana, mutta {{ui:Valintanauha}}-tyyli on tehty kulkemaan ylä- tai alareunaa pitkin: sivulla siitä tulee kapea vieritettävä sarake. Puhelimessa työkalurivi pysyy siinä, minne puhelimen asettelu sen asettaa.

## Työkalurivien rivit

Kuinka monta riviä työkalut käyttävät piirustuksen yläpuolella, CadCraftin työkalurivillä sekä {{ui:Piirtämisen klassikko}}- ja {{ui:Valintanauha}}-tyyleissä:

- **Sovita leveyteen** (oletus): työkalut kääntyvät ikkunan leveyden mukaan.
- **2 riviä**: enintään kaksi riviä. Kun työkalut mahtuvat tässä leveydessä kahdelle riville tai vähemmälle, ne vain kääntyvät; muuten ne ovat kahdella rivillä, jotka vierivät sivusuunnassa.
- **1 rivi**: yksi rivi, joka vierii sivusuunnassa, mikä jättää piirustukselle eniten tilaa.

{{key:Shift+Ctrl+F1}} kiertää kolme vaihtoehtoa läpi, ja {{cmd:TOOLBARROWS}} asettaa yhden. Painikkeiden näyttö (kuvakkeet ja teksti, vain kuvakkeet tai vain teksti) on {{ui:Yleiset}} › {{ui:Työkalurivi}}-asetus; {{key:Ctrl+F1}} kiertää sen läpi ja {{cmd:TOOLBAR}} asettaa sen.

## Komentorivi

Komentorivi voi pysyä kiinnitettynä piirustuksen alle kuten aina, tai kellua sen päällä, ja se voi olla niin ohut kuin yksi rivi.

- **Irrota se.** Vedä sen vasemmassa päässä olevaa otetta piirustukseen, tai valitse {{ui:Kelluta piirustuksen päällä}} sen {{ui:Komentorivin asetukset}}-valikosta (kolme pistettä oikeassa päässä). Vedä otetta uudelleen siirtääksesi sitä; sen paikka säilyy, kun ikkunan koko muuttuu. Vedä sen oikeaa reunaa leventääksesi tai kaventaaksesi sitä. Pudota se tilariville tai valitse {{ui:Kiinnitä alas}} kiinnittääksesi sen uudelleen.
- **Tee siitä ohuempi tai korkeampi.** Vedä sen yläreunaa: jokainen askel on yksi historiarivi. Nollaan riviin asti siitä tulee **yhden rivin komentorivi**: vain kehote ja se, mitä kirjoitat, ja uusi viesti näkyy sen yläpuolella hetken. Kaksoisnapsautus yläreunassa vaihtaa yhden rivin ja aiemman korkeutesi välillä.
- **Historia.** {{key:F2}}, tai komentorivin kellopainike ({{ui:Komentohistoria (F2)}}), avaa koko historian rivin yläpuolelle (alapuolelle, kun rivi kelluu lähellä ikkunan yläreunaa). Kirjoittaminen menee yhä komentoriville; {{key:PageUp}} ja {{key:PageDown}} vierittävät historiaa, ja {{key:Esc}}, {{key:F2}} tai napsautus muualla sulkee sen. Oma näppäimesi F2:lle voittaa tämän.
- **Näppäimistöllä.** Ote on painike: kun se on kohdistettu, nuolinäppäimet siirtävät kelluvaa komentoriviä ({{key:Shift}}-näppäimen kanssa suuremmin askelin); {{key:Up}} irrottaa kiinnitetyn, ja {{key:Down}} reunalla kiinnittää sen. Yläreuna on erotin: {{key:Up}} ja {{key:Down}} lisäävät tai vievät rivin, {{key:Home}} tekee siitä yhden rivin ja {{key:End}} korkeimman. Ruudunlukijat kuulevat yhä jokaisen viestin, myös yhden rivin komentoriviltä.

{{ui:CadCraft}} › {{ui:Komentorivi}} tarjoaa samat valinnat: {{ui:Kiinnitetty alareunaan}} tai {{ui:Kelluva}}, {{ui:Näytettävät historiarivit}} (0–12) ja {{ui:Vakiokorkeus}}. {{cmd:COMMANDLINE}} (`CMDLINE`) asettaa ne komentoriviltä. Paikka ja korkeus tallennetaan CadCraftille tämän selaimen asettelun muun osan mukana, joten tallennettu työympäristö kantaa ne mukanaan; {{ui:Yleiset}} › {{ui:Palauta asettelu}} kiinnittää komentorivin takaisin vakiokorkeuteensa. Puhelimessa komentorivi pysyy kiinnitettynä yhdellä historiarivillä; historiapainike toimii sielläkin.

Kun ikkuna on matala ja asettelutarkistus tarjoaa tiiviimmän asettelun, sen {{ui:Kyllä}} muuttaa myös komentoriviksi yhden rivin, jos piirustus on yhä liian lyhyt työkalurivien jälkeen.

## Yläalue

{{ui:CadCraft}} › {{ui:Yläalue}}: **Vakio** (oletus) tai **Tiivis**. Tiivis pitää piirustuksen yläpuolen palkit pieninä kaikissa valikkotyyleissä: ryhmien nimet ja kuvakkeiden alla olevat sanat poistuvat (kärkiohjeet ja ruudunlukijat säilyttävät ne), ja painikkeet ovat tiiviimpiä. Se toimii yhdessä [Työkalurivien rivien](topic:settings#toolbar-rows) kanssa: Tiivis ja **1 rivi** jättävät piirustukselle eniten tilaa. {{cmd:TOPAREA}} asettaa sen.

## Kulmamerkki

Mitä piirustuksen kulmassa on:

- **Automaattinen** (oletus): akselikuvake {{ui:Malli}}-välilehdellä ja näkymäkuutio {{ui:3D}}-välilehdellä.
- **Akselikuvake**: X- ja Y-merkki {{ui:Malli}}-välilehden vasemmassa alakulmassa sekä pieni X-, Y- ja Z-merkki {{ui:3D}}-välilehdellä.
- **Näkymäkuutio**: kuutio molempien välilehtien oikeassa yläkulmassa. {{ui:Malli}}-välilehdellä se näyttää piirustuksen ylhäältä, ja toisen pinnan, reunan tai kulman napsauttaminen avaa {{ui:3D}}-välilehden katsomaan sieltä. 3D-välilehdellä se kääntyy näkymän mukana: napsauta katsoaksesi sivulta, vedä kiertääksesi, ja talo palaa iso-näkymään. Katso [Malli 3D:nä](topic:3d-solids).
- **Ei mitään**: kulmassa ei ole mitään.

Arkit eivät näytä kumpaakaan.

## Valinnan pituus ja ala

- **Tilarivillä** (oletus): kun kohteita on valittuna, tilarivi näyttää niiden kokonaispituuden ja suljettujen kohteiden kokonaisalan. Katso [Valinnan yhteissummat](topic:properties-panel#totals-of-a-selection).
- **Piilotettu**: tilarivi jättää ne pois. Ominaisuudet näyttää ne silti useille kohteille.

## Ruudukko, ortogonaali ja tartunnat

Nämä eivät ole valintaikkunassa: tilarivin {{ui:Ruudukko}}-, {{ui:Ortogonaali}}- ja {{ui:Tartunta}}-painikkeet (tai {{key:F7}}, {{key:F8}}, {{key:F3}}) ja niiden vieressä oleva kohteiden tartuntojen luettelo muistetaan, kun poistut niistä. Katso [Tartu pisteisiin kohteilla](topic:object-snaps).
