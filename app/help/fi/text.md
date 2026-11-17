---
title: Lisää teksti ja tunnisteet
summary: Sijoita huonetunnisteet yksirivisellä tekstillä, kirjoita rivittyviä huomautuksia kappaleentekstinä paikan päällä ja muokkaa tekstiä jälkikäteen.
keywords: teksti, dtext, mtext, mleader, multileader, viitenuoli, revcloud, revisiopilvi, pilvi, etsi, korvaa, etsi ja korvaa, kappale, rivitys, riviväli, tunniste, huomautus, merkintä, korkeus, tasaus, textmask, taustanaamio, naamio, peite, kierto, muokkaa tekstiä, ddedit, textedit, fontti
from: 4b76be99
---

## Mitä teet

Kaksi huonetunnistetta, keskitettynä huoneisiinsa, huomautus, joka rivittyy leveytensä mukaan, ja sitten korjaus yhteen tunnisteista.

## Tekstin korkeus ja piirustuksen mittakaava

Tekstin korkeus on piirustusyksiköissä. Millimetreissä piirretyssä piirustuksessa, joka tulostetaan mittakaavassa 1:50, paperilla 2.5 mm korkean tekstin on mallissa oltava 2.5 × 50 = 125 yksikköä korkea. Arkkivälilehdellä, jolla piirrät paperiyksiköissä, 2.5 tarkoittaa siellä 2.5 mm paperilla.

## Sijoita keskitetty tunniste

1. Kirjoita `DT` ja paina {{key:Enter}} (tai napsauta {{ui:Teksti}} työkalurivillä). Kehote kuuluu `Specify start point of text [Justify]:`.
2. Kirjoita `J` ja paina {{key:Enter}}.
3. Kohdassa `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:` kirjoita `MC` ja paina {{key:Enter}}.
4. Kohdassa `Specify insertion point of text` napsauta huoneen keskikohtaa.
5. Kohdassa `Specify height` kirjoita `250` ja paina {{key:Enter}}.
6. Kohdassa `Specify rotation angle of text <0>` paina {{key:Enter}}.
7. Kohdassa `Enter text` kirjoita `KITCHEN` ja paina {{key:Enter}}.

Tunniste ilmestyy keskitettynä napsauttamaasi pisteeseen.

8. Lopeta komento painamalla {{key:Enter}} tyhjässä `Enter text` -kehotteessa.

## Kirjoita rivittyvä huomautus

Kappaleteksti ({{cmd:MTEXT}}) rivittyy leveyteensä, ja se kirjoitetaan suoraan piirustukseen.

1. Kirjoita `T` ja paina {{key:Enter}}, tai napsauta {{ui:Kappale}} työkalurivillä.
2. Kohdassa `Specify first corner` napsauta kohtaa, johon huomautuksen vasen yläkulma tulee.
3. Jos haluat ensin muuttaa korkeutta, kirjoita `H`, paina {{key:Enter}}, kirjoita `250` ja paina {{key:Enter}}.
4. Kohdassa `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]` napsauta ensimmäisen kulman oikealle puolelle. Näiden välinen etäisyys on leveys, jolle teksti rivittyy; se, kuinka alas napsautat, ei rajoita sitä.
5. Piirustuksen päälle aukeaa laatikko, jossa kohdistin on. Kirjoita `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Sanat rivittyvät leveyteen kirjoittaessasi.
6. Paina {{key:Enter}} aloittaaksesi uuden kappaleen ja kirjoita `CHECK ON SITE`.
7. Paina {{key:Mod+Enter}}, napsauta {{ui:OK}} tai napsauta laatikon ulkopuolelle. Huomautus on yksi kohde.

Laatikon yläpuolella oleva palkki muuttaa kirjoittaessasi {{ui:Korkeus}}, {{ui:Riviväli}} (1 on normaali, 1.5 on puolitoista kertaa), {{ui:Leveys}} (0 = ei rivitystä) ja {{ui:Tasaus}}. {{key:Esc}} tai {{ui:Peruuta}} sulkee laatikon lisäämättä mitään.

Toisen kulman vaihtoehdot: `H` korkeus, `J` tasaus (`TL` ylhäältä vasemmalta … `BR` alhaalta oikealta: kulma tai laatikon keskikohta, joka pysyy paikallaan), `L` riviväli, `R` kierto, `W` kirjoitettu leveys toisen kulman sijaan.

:::note
Kun laatikko on auki, {{key:Space}} kirjoittaa välilyönnin ja {{key:Enter}} aloittaa uuden kappaleen. Tallennettu DWG säilyttää kappaleentekstin MTEXT-muodossa; DXF R12 ei tunne kappaleentekstiä, joten jokainen rivi tallennetaan omana tekstinään.
:::

### Useita yksirivisiä tekstejä sen sijaan

{{cmd:TEXT}} (`DT`) kysyy yhden rivin kerrallaan: jokainen {{key:Enter}} aloittaa seuraavan rivin, 1.667 kertaa tekstin korkeuden verran alempana, ja jokainen rivi on oma kohteensa. Lopeta painamalla {{key:Enter}} tyhjällä rivillä.

## Tasausvaihtoehdot

| Vaihtoehto | Napsauttamasi piste on |
|---|---|
| Vasen (oletus) | Peruslinjan vasen pää |
| Keskitetty | Peruslinjan keskikohta |
| Oikea | Peruslinjan oikea pää |
| Keskikohta, MC | Tekstin keskikohta sekä vaaka- että pystysuunnassa |
| TL | Vasen yläkulma |

## Muokkaa tekstiä

1. Kaksoisnapsauta tekstikohdetta. Se aukeaa samaan laatikkoon kuin uusi kappaleteksti, kohdistin tekstin lopussa.
2. Muuta sanoja.
3. Paina {{key:Mod+Enter}} tai napsauta laatikon ulkopuolelle. Piirustuksen teksti muuttuu; {{key:Esc}} jättää sen ennalleen.

{{cmd:TEXTEDIT}} (`ED`) tekee saman: valitse tekstit yksi toisensa jälkeen ja paina lopuksi {{key:Enter}}.

Voit myös valita tekstin ja muuttaa sitä oikeanpuoleisessa paneelissa: {{ui:Teksti}}, {{ui:Korkeus}}, {{ui:Rivityksen leveys}} (0 = ei rivitystä), {{ui:Riviväli}}, {{ui:Kierto}}, X- ja Y-sijainti sekä {{ui:Tasaus}}. {{ui:Tasaus}}-luettelossa on myös Alavasen, jota muiden ohjelmien tekstit joskus käyttävät.

## Muiden ohjelmien kappaleteksti: muotoilu

Kappaleteksti DWG- tai DXF-tiedostossa voi sisältää koodeja: värejä sanoittain, lihavointia ja kursiivia, alleviivauksen, yliviivauksen ja yliviivan sekä ylhäältä alas pinotut murtoluvut, kuten 1/2, ja sanan eri korkeuden. CadCraft säilyttää nämä koodit, piirtää ne (näytöllä ja tulostetussa PDF:ssä) ja tallentaa ne takaisin muuttumattomina.

Kun muokkaat tällaista tekstiä (kaksoisnapsautus, {{cmd:TEXTEDIT}}, oikean paneelin Teksti-kenttä tai {{cmd:FIND}} korvauksella), muokkaat sen pelkkiä sanoja. Kirjoittamasi sana menee viereiseen osaan ja saa sen värin ja tyylin; muut koodit pysyvät paikoillaan. Jos kirjoitat uudelleen pinotun murtoluvun numerot, murtoluvusta tulee pelkkää tekstiä. Koko tekstin asettaminen Teksti-kentästä säilyttää koodit vain siltä osin, kuin voidaan päätellä, mitkä sanat pysyivät.

Fonttien nimet (`\F`) säilytetään ja tallennetaan, mutta kaikki piirretään yhdellä Helvetica-tyyppisellä fontilla. Koodien kirjoittamiseen ei ole vielä työkalupalkkia.

## Osoita kohteeseen: monijohtoviitteet

{{ui:Viitenuoli}} ryhmässä {{ui:Merkitse}} ({{cmd:MLEADER}}, `MLD`) piirtää nuolen, viitejohdon, lyhyen laskeutumisen ja huomautuksen yhtenä kohteena.

1. Napsauta {{ui:Viitenuoli}}. Kohdassa `Specify leader arrowhead location` napsauta kohtaa, josta huomautus kertoo.
2. Kohdassa `Specify leader landing location` napsauta kohtaa, johon huomautus tulee. Laskeutuminen kääntyy sille puolelle, jota napsautit.
3. Kirjoita huomautus aukeavaan laatikkoon ja paina {{key:Mod+Enter}}.

`A` ja `L` ensimmäisessä kysymyksessä asettavat nuolenpään koon ja laskeutumisen pituuden. Tekstin korkeus tulee uusien mitoitusten {{ui:Tekstin korkeus}}-asetuksesta kerrottuna {{ui:Kokonaismittakaava}}-arvolla. Kaksoisnapsauta monijohtoviitettä muuttaaksesi sen sanoja. Otteet siirtävät nuolenpäätä ja laskeutumista; huomautus seuraa laskeutumista. {{ui:Ominaisuudet}}-kohdassa ovat: {{ui:Teksti}}, {{ui:Korkeus}}, {{ui:Rivityksen leveys}}, {{ui:Nuolenpään koko}} ja {{ui:Laskeutumisetäisyys}}.

:::note
Monijohtoviitteet tallentuvat DWG-tiedostoon oikeina monijohtoviitteinä. DXF ei tunne monijohtoviitteitä versioissa R12 tai 2000, joten niissä ne tallennetaan viivoina, nuolenpäänä ja tekstinä, jotka ne piirtävät.
:::

## Merkitse muutokset revisiopilvellä

{{ui:Merkitse}} › {{ui:Lisää}} › {{ui:Revisiopilvi}} ({{cmd:REVCLOUD}}, `RC`) piirtää kaarista koostuvan pilven muuttuneen kohdan ympärille. Historia näyttää kaaren pituuden ja tyypin, jota se käyttää.

- **Suorakulmio** (ensimmäisellä kerralla): napsauta kaksi kulmaa.
- `P` **Monikulmio**: napsauta kulmat, {{key:Enter}} sulkee pilven.
- `F` **Vapaa piirto**: napsauta aloituskohtaa ja liikuta osoitinta alueen ympäri napsauttamatta; kaari lisätään joka kaaren pituuden välein. Napsauta tai paina {{key:Enter}} sulkeaksesi pilven.
- `O` **Kohde**: valitse suljettu viivaketju, ympyrä tai ellipsi (tai viiva, kaari tai avoin viivaketju); siitä tulee pilvi. `Reverse direction?` `Y` kääntää kaaret sisäänpäin.
- `A` **Kaaren pituus**: kunkin kaaren pituus. Valitse sellainen, joka sopii tulostusmittakaavaan.

Pilvi on suljettu viivaketju kaarista, joten se tallentuu kaikissa muodoissa.

## Etsi ja korvaa sanoja

{{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Etsi ja korvaa}} ({{cmd:FIND}}) etsii tekstistä, lohkoattribuuttien arvoista ja mitoitusteksteistä avoimella välilehdellä (tai vain valituista kohteista).

1. Kirjoita sanat kenttään {{ui:Etsi}}. Luettelo näyttää jokaisen paikan ja määrän.
2. Valitse tarvittaessa {{ui:Erota isot ja pienet kirjaimet}}, {{ui:Vain kokonaiset sanat}} tai {{ui:Käytä jokerimerkkejä (* ja ?)}}, ja poista rasti kohdista, joista et halua etsiä.
3. Napsauta {{ui:Valitse löydetyt}} valitaksesi nuo kohteet, tai kirjoita uudet sanat kenttään {{ui:Korvaa tällä}} (luettelo näyttää, mikä kukin muuttuu) ja napsauta {{ui:Korvaa kaikki}}. Yksi {{key:Mod+Z}} kumoaa kaikki korvaukset.

Mitoituksen mitattu arvo ei ole tekstiä, joten sitä ei koskaan korvata: kohdassa `<> TYP.` voidaan korvata vain `TYP.`.

## Piilota tunnisteen takana olevat viivat

1. Valitse tekstit, kirjoita {{cmd:TEXTMASK}} ja paina {{key:Enter}}.
2. `B` maalaa piirustuksen taustan tekstien taakse; `C` kysyy värinumeroa. `O` poistaa naamion.
3. `Border offset factor`: {{key:Enter}} säilyttää arvon 1.5, eli puolen tekstin korkeuden verran tekstin ympärillä.

Naamio peittää tekstin alla olevat viivat näytöllä ja tulostettaessa. DWG 2004 tai uudempi ja DXF 2000 säilyttävät sen; DWG-muoto 2000 ja DXF R12 eivät voi, ja tallennus kertoo siitä.

## Fontti

Kaikki teksti piirretään Helvetica-tyyppisellä fontilla näytöllä ja PDF-tiedostoissa. Avattujen piirustusten teksti säilyttää sanansa, korkeutensa ja sijaintinsa, mutta ei alkuperäistä fonttiaan (kappaletekstin sisällä olevan fontin nimi säilyy tiedostossa, katso yllä).

Tulostetuissa PDF-tiedostoissa mikä tahansa eurooppalainen kirjoitus, kyrillinen tai kreikkalainen teksti tulostuu sellaisenaan (PDF sisältää tarvitsemansa kirjaimet, ja tekstin voi edelleen valita ja hakea). Kiinan, japanin ja korean teksti tulostuu myös sellaisenaan (tulostus hakee suuremman fontin, kun sitä tarvitaan ensimmäisen kerran). Arabian, persian, urdun ja heprean teksti tulostuu myös sellaisenaan (katso seuraava osio). Merkit, joille millään fontilla ei ole kirjainta, tulostuvat "?"-merkkeinä, ja historia kertoo, kuinka monta niitä oli.

## Oikealta vasemmalle kirjoitettu teksti: arabia, persia, urdu, heprea

Kirjoita teksti kuten missä tahansa muualla: {{cmd:TEXT}} ja {{cmd:MTEXT}} piirtävät jokaisen rivin lukujärjestyksessä. Rivi, jonka ensimmäinen kirjain on arabiaa tai heprealaista, luetaan oikealta vasemmalle; numerot ja latinankieliset sanat sen sisällä säilyttävät oman vasemmalta oikealle -järjestyksensä, ja arabialaiset kirjaimet liittyvät toisiinsa. Latinalaisella kirjaimella alkava rivi pysyy vasemmalta oikealle, ja oikealta vasemmalle kirjoitetut sanat ovat sen sisällä paikoillaan. Monirivisen tekstin jokaisella kappaleella on oma suuntansa, ja rivitetty kappale säilyttää sen jokaisella rivillä.

Teksti tallennetaan kirjoittamassasi muodossa, joten DWG- ja DXF-tiedostot vaihtavat sen muiden ohjelmien kanssa muuttumattomana. Lisäyskohta ja tasaus ({{ui:Vasen}}, {{ui:Keskipiste}}, {{ui:Oikea}}) tarkoittavat samaa puolta kuin millä tahansa tekstillä: oikealta vasemmalle kirjoitettu huomautus, joka pitäisi roikkua oikeasta päästään, tarvitsee {{ui:Oikea}}-tasauksen.

Näytöllä kirjaimet tulevat järjestelmäsi fonteista. Tulostetussa PDF-tiedostossa heprea käyttää samaa upotettua fonttia kuin latinankielinen teksti; arabiankielinen teksti saa tulostuksen hakemaan yhden fontin lisää (alle 1 MB, kerran), ja koko PDF tulostuu sitten siinä fontissa. Kyseisessä fontissa ei ole omaa muotoa kolmelle urdun merkille (heh goal, yeh barree ja urdun pistemerkki): ne tulostuvat lähimmän arabialaisen kirjaimen muodossa. Piirustus, jossa on sekä arabiankielistä että kiinan, japanin tai korean tekstiä, tulostaa toisen niistä "?"-merkkeinä, koska yksi tulostus kantaa yhtä fonttia. Ladatun SHX-fontin teksti järjestetään ja liitetään, jos fontti sisältää kirjaimet niiden Unicode-paikoissa; vanhoissa fonteissa, joissa kirjaimet on jo muotoiltu, käytä {{ui:Käännä}}-asetusta komennossa {{cmd:SHXFONTS}} kuten ennenkin.

## Yleisiä virheitä

- **Teksti on liian pieni nähdäksesi.** Korkeus on piirustusyksiköissä. Suuressa piirustuksessa käytä suurempaa korkeutta (katso yllä) tai zoomaa lähemmäs.
- **Komento päättyi yhden rivin jälkeen.** Painoit {{key:Enter}} tyhjällä rivillä komennossa {{cmd:TEXT}}. Aloita se uudelleen tai käytä kappaletekstiä (`T`), jossa {{key:Enter}} aloittaa uuden kappaleen.
- **`T` avasi laatikon yhden rivin kysymyksen sijaan.** Kuten AutoCADissa, `T` on kappaleteksti ({{cmd:MTEXT}}); yhden rivin teksti on `DT`.
- **Teksti rivittyy eri kohdassa kuin AutoCADissa.** CadCraft rivittää Helvetica-leveyksillä; toinen fontti voi mahduttaa sanan riville enemmän tai vähemmän.
- **Teksti peilatussa kopiossa.** Se sijoitetaan peilattuna, mutta pysyy luettavana vasemmalta oikealle.
