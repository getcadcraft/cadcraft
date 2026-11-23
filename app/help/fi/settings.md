---
title: CadCraftin asetukset
summary: Piirtosovellukseen kuuluvat asetukset: kohdistimen koko, mihin kohtaan liitetty kopio roikkuu kohdistimesta, mitä napsautus tekee valinnalle, kuinka monta riviä työkalurivi käyttää, missä komentorivi on ja kuinka korkea se on, kompakti yläalue sekä kulmamerkki.
keywords: komentorivi, kelluva komentorivi, kellua, kiinnittää, yksi rivi, f2, komentohistoria, commandline, cmdline, toparea, yläalue, kompakti, cursorsize, kohdistin koko näyttö, reunasta reunaan, työkalurivin rivit, työkalurivin näyttö, ctrl f1, asetukset, mieltymykset, valinnat, kulmamerkki, näkymäkuutio, akselikuvake, ucs-kuvake, kohdistin, ristikko, valintaruutu, liitoskohta, perustapiste, napsautus kohteisiin, valinta, pickadd, shift, palauta
from: ae1a81db
---

Avaa {{ui:Asetukset}} sovelluspalkin hammaspyörästä tai {{key:Mod+,}}. Ensimmäinen välilehti, {{ui:CadCraft}}, sisältää tämän sovelluksen asetukset, ja {{ui:Yleiset}} sisältää ne, jotka kaikki perheen sovellukset jakavat (teema, paneelin tekstikoko ja leveydet, työkalurivin ulkoasu ja järjestys). CadCraftin asetukset ovat vain tässä sovelluksessa: muutat ne täällä, ja tämä selain muistaa ne. {{ui:Palauta CadCraftin asetukset}} palauttaa jokaisen niistä alkuperäiseen arvoonsa.

## Kohdistin

**Pieni**, **Keskikokoinen** (alkuasetus), **Suuri** tai **Koko näyttö**: piirustuksen kohdistimen ja valintalaatikon koko. Suurempi valintalaatikko valitsee kohteita myös hieman kauempaa, mikä auttaa kosketusnäytöllä tai hyvin tarkassa piirustuksessa.

**Koko näyttö** vetää kohdistimen kaksi viivaa reunasta reunaan piirustuksen yli, myös silloin kun komentoa ei suoriteta, jotta voit tarkistaa silmällä, että kaksi asiaa on linjassa koko näkymän yli. Kun näkymä on jaettu, viivat pysyvät työskentelemäsi ruudun sisällä. Sama kuin AutoCADin {{cmd:CURSORSIZE}} 100: kirjoita {{cmd:CURSORSIZE}} ja 100 koko näytölle; pienempi luku valitsee lähimmän koon (alle 5 Pieni, 5–9 Keskikokoinen, 10–99 Suuri).

## Liitoskohta

Mihin kohtaan liitetty kopio roikkuu kohdistimesta {{key:Mod+V}}-painalluksen ({{cmd:PASTECLIP}}) jälkeen, kunnes napsautat:

- **Vasen alakulma** (alkuasetus): kopioitujen kohteiden ulottuvuuksien vasen alakulma, kuten AutoCADissa.
- **Keskipiste**: niiden ulottuvuuksien keskikohta. Hyödyllinen symbolin sijoittamiseen silmämääräisesti.

Kopio, joka on tehty komennolla `COPYBASE`, roikkuu aina valitsemastasi perustapisteestä. {{ui:Liitä samaan paikkaan}} ({{key:Mod+Shift+V}}) ohittaa tämän asetuksen: se säilyttää alkuperäiset koordinaatit. Katso [Kopioi, liitä ja monista](topic:copy-paste).

## Kohteiden napsauttaminen

Mitä napsautus piirustuksessa tekee valinnalle, kun mitään komentoa ei suoriteta:

- **Lisää valintaan** (alkuasetus): jokainen napsautus tai ikkuna lisää kohteita; {{key:Shift}}+napsautus tai {{key:Shift}}+ikkuna poistaa ne.
- **Korvaa valinnan**: napsautus tai ikkuna valitsee vain sen, minkä se osuu. {{key:Shift}}+napsautus lisää kohteen tai poistaa jo valitun; {{key:Shift}}+ikkuna lisää.

Kohdassa `Valitse kohteet:` komennon sisällä napsautukset lisäävät aina (ja {{key:Shift}} poistaa), tästä asetuksesta riippumatta. Katso [Valitse kohteet](topic:select-objects).

## Napsautus tyhjään kohtaan

Mitä napsautus kohtaan, jossa ei ole kohdetta, tekee, kun mitään komentoa ei suoriteta. Kummassakin tapauksessa napsautus aloittaa valintaikkunan (toinen napsautus lopettaa sen).

- **Tyhjentää valinnan** (alkuasetus): valittu vapautetaan. Pidä {{key:Shift}} pohjassa napsauttaessa säilyttääksesi sen.
- **Säilyttää valinnan**: valinta pysyy, kuten muissa piirto-ohjelmissa; ikkuna lisää siihen. Paina {{key:Esc}} tyhjentääksesi valinnan.

## Vetäminen valitsemiseen

Mitä painaminen ja vetäminen tyhjään kohtaan piirtää:

- **Lasso** (alkuasetus): vapaamuotoinen ääriviiva. Jos vedät ensin oikealle, valitaan se, mikä on kokonaan sen sisällä; ensin vasemmalle, valitaan se, mihin se koskee. {{key:Space}} vedettäessä vaihtaa ikkunan, leikkauksen ja aidan välillä.
- **Suorakulmio**: laatikko, kuten napsautus ja toinen napsautus sen piirtävät.

{{cmd:LASSOMODE}} `1` tai `0` asettaa saman. Katso [Lasso-valinta](topic:lasso-selection).

## Vetäminen typistämiseen ja pidentämiseen

Mitä painaminen tyhjään kohtaan ja vetäminen tekee komennoissa {{cmd:TRIM}} ja {{cmd:EXTEND}}:

- **Polku** (alkuasetus): vapaamuotoinen polku; jokainen pala, jonka se ylittää, typistetään (tai pidennetään).
- **Ikkuna**: laatikko; jokainen pala, jonka se koskee, typistetään, kuten vaihtoehto `C` tekee.

Katso [Typistä ja pidennä](topic:trim-and-extend).

## Työkalurivin sijainti

{{ui:CadCraft}} › {{ui:Työkalurivin sijainti}}: **Ylhäällä** (alkuasetus, kuten aina ennen), **Alhaalla**, **Vasemmalla** tai **Oikealla**. Vasemmalla tai oikealla työkaluryhmät pinotaan pystysuoraan sarakkeeseen, joka vierii, kun se on ikkunaa korkeampi, ja painikkeet kääntyvät kahdeksi tai kolmeksi riviksi. Valinta tallentuu asetustesi kanssa, ja {{cmd:TOOLBARDOCK}} (`TBDOCK`) asettaa sen komentoriviltä. {{ui:Yleiset}} › {{ui:Palauta asettelu}} palauttaa työkalurivin ylös.

Valikkotyylien palkit ovat työkalurivin sisällä ja liikkuvat sen mukana, mutta {{ui:Valintanauha}}-tyyli on tehty kulkemaan ylhäällä tai alhaalla: sivulla siitä tulee kapea vierivä sarake. Puhelimella työkalurivi pysyy siinä, mihin puhelimen asettelu sen asettaa.

## Työkalurivin rivit

Kuinka monta riviä työkalut käyttävät piirustuksen yläpuolella CadCraftin työkalurivissä ja tyyleissä {{ui:Piirtämisen klassikko}} ja {{ui:Valintanauha}}:

- **Sovita ikkunaan** (alkuasetus): työkalut rivittyvät ikkunan leveyden mukaan.
- **2 riviä**: enintään kaksi riviä. Kun työkalut mahtuvat kahdelle riville tai vähemmän tässä leveydessä, ne vain rivittyvät; muuten ne ovat kahdessa rivissä, jotka vierivät sivusuunnassa.
- **1 rivi**: yksi rivi, joka vierii sivusuunnassa, jolloin piirustukselle jää eniten tilaa.

{{key:Shift+Ctrl+F1}} kiertää kolmen vaihtoehdon läpi ja {{cmd:TOOLBARROWS}} asettaa yhden. Mitä painikkeet näyttävät (kuvakkeet ja teksti, vain kuvakkeet tai vain teksti) on {{ui:Yleiset}} › {{ui:Työkalurivi}}-asetus; {{key:Ctrl+F1}} kiertää sen läpi ja {{cmd:TOOLBAR}} asettaa sen.

## Komentorivi

Komentorivi voi pysyä kiinnitettynä piirustuksen alle, kuten aina ennen, tai kellua sen päällä, ja se voi olla yhtä ohut kuin yksi rivi.

- **Kelluta se.** Vedä sen vasemmassa päässä olevaa kahvaa piirustukseen, tai valitse {{ui:Kelluta piirustuksen päällä}} sen {{ui:Komentorivin asetukset}}-valikosta (kolme pistettä oikeassa päässä). Vedä kahvaa uudelleen siirtääksesi sitä; sen paikka säilyy, kun ikkunan koko muuttuu. Vedä oikeaa reunaa tehdäksesi siitä leveämmän tai kapeamman. Pudota se tilarivillä tai valitse {{ui:Kiinnitä alas}} kiinnittääksesi sen uudelleen.
- **Tee siitä ohuempi tai korkeampi.** Vedä sen yläreunaa: jokainen askel on yksi historiarivi. Nollaan riviin asti siitä tulee **yhden rivin komentorivi**: vain kehote ja se, mitä kirjoitat, ja uusi viesti näkyy sen yläpuolella hetken. Kaksoisnapsautus yläreunassa vaihtaa yhden rivin ja aiemman korkeuden välillä.
- **Historia.** {{key:F2}} tai komentorivin kellopainike ({{ui:Komentohistoria (F2)}}) avaa koko historian rivin yläpuolelle (alapuolelle, kun rivi kelluu lähellä ikkunan yläreunaa). Kirjoittaminen menee yhä komentoriville; {{key:PageUp}} ja {{key:PageDown}} vierittävät historiaa, ja {{key:Esc}}, {{key:F2}} tai napsautus muualla sulkee sen. Oma näppäin F2:lle voittaa tämän.
- **Näppäimistöllä.** Kahva on painike: kun se on kohdistettu, nuolinäppäimet siirtävät kelluvaa komentoriviä ({{key:Shift}}:n kanssa isommin askelin); {{key:Up}} kelluttaa kiinnitetyn rivin ja {{key:Down}} reunassa kiinnittää sen. Yläreuna on erotin: {{key:Up}} ja {{key:Down}} lisäävät tai vähentävät rivin, {{key:Home}} tekee siitä yhden rivin ja {{key:End}} korkeimman. Ruudunlukijat kuulevat yhä jokaisen viestin, myös yhden rivin komentoriviltä.

{{ui:CadCraft}} › {{ui:Komentorivi}} tarjoaa samat valinnat: {{ui:Kiinnitetty alareunaan}} tai {{ui:Kelluva}}, {{ui:Näytettävät historiarivit}} (0–12) ja {{ui:Vakiokorkeus}}. {{cmd:COMMANDLINE}} (`CMDLINE`) asettaa ne komentoriviltä. Paikka ja korkeus säilyvät CadCraftille tässä selaimessa muun asettelun mukana, joten tallennettu työympäristö kantaa ne mukanaan; {{ui:Yleiset}} › {{ui:Palauta asettelu}} kiinnittää komentorivin takaisin vakiokorkeuteensa. Puhelimella komentorivi pysyy kiinnitettynä yhdellä historiariviä; historiapainike toimii sielläkin.

{{ui:CadCraft}} › {{ui:Valintakirjaimet}} säilyttää komentojen valinnoille valitsemasi kirjaimet: {{ui:Muokkaa…}} avaa tiedoston, {{ui:Tuo…}} korvaa sen valitsemallasi tiedostolla ja {{ui:Vie}} tallentaa sen. Katso [Anna komennon valinnoille omat kirjaimet](topic:option-letters).

Kun ikkuna on matala ja asettelun tarkistus ehdottaa tiiviimpää asettelua, sen {{ui:Kyllä}} muuttaa myös komentorivin yhdeksi riviksi, jos piirustus on yhä liian lyhyt työkalurivien jälkeen.

## Yläalue

{{ui:CadCraft}} › {{ui:Yläalue}}: **Vakio** (alkuasetus) tai **Kompakti**. Kompakti pitää piirustuksen yläpuolella olevat palkit pieninä kaikissa valikkotyyleissä: ryhmien nimet ja kuvakkeiden alla olevat sanat poistuvat (ohjeet ja ruudunlukijat säilyttävät ne), ja painikkeet ovat tiiviimpiä. Se toimii yhdessä [Työkalurivin rivit](topic:settings#toolbar-rows)-asetuksen kanssa: Kompakti ja **1 rivi** jättävät piirustukselle eniten tilaa. {{cmd:TOPAREA}} asettaa sen.

## Kulmamerkki

Mitä piirustuksen kulmassa on:

- **Automaattinen** (alkuasetus): akselikuvake {{ui:Malli}}-välilehdellä ja näkymäkuutio {{ui:3D}}-välilehdellä.
- **Akselikuvake**: X- ja Y-merkki {{ui:Malli}}-välilehden vasemmassa alakulmassa, ja pieni X-, Y- ja Z-merkki {{ui:3D}}-välilehdellä.
- **Näkymäkuutio**: kuutio oikeassa yläkulmassa molemmilla välilehdillä. {{ui:Malli}}-välilehdellä se näyttää piirustuksen ylhäältä, ja toisen sivun, reunan tai kulman napsauttaminen avaa {{ui:3D}}-välilehden katsomaan sieltä. {{ui:3D}}-välilehdellä se kääntyy näkymän mukana: napsauta katsoaksesi sivulta, vedä kiertääksesi, ja talo palaa iso-näkymään. Katso [Malli 3D:nä](topic:3d-solids).
- **Ei mitään**: kulmassa ei ole mitään.

Arkit eivät näytä kumpaakaan.

## Valinnan pituus ja pinta-ala

- **Tilarivillä** (alkuasetus): kun kohteita on valittu, tilarivi näyttää niiden kokonaispituuden ja suljettujen kohteiden kokonaispinta-alan. Katso [Valinnan summat](topic:properties-panel#totals-of-a-selection).
- **Piilotettu**: tilarivi jättää ne pois. Ominaisuudet näyttää ne silti useille kohteille.

## Ruudukko, ortogonaali ja tartunnat

Nämä eivät ole valintaikkunassa: tilarivin painikkeet {{ui:Ruudukko}}, {{ui:Ortogonaali}} ja {{ui:Tartunta}} (tai {{key:F7}}, {{key:F8}}, {{key:F3}}) ja niiden vieressä oleva kohteen tartuntojen luettelo muistavat tilansa, kun poistut niistä. Katso [Tartu kohteiden pisteisiin](topic:object-snaps).
