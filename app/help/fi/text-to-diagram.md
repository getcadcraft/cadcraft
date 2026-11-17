---
title: Piirrä kaavio tekstistä
summary: Liitä Mermaid-vuokaavio, PlantUML-komponenttikaavio, D2, from-to-luettelo tai draw.io-XML, niin CadCraft asettelee lohkot ja liittimet, joita voit muokata kuten muita kohteita.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, paikallinen malli, kaavio, mermaid, plantuml, d2, from to, from-to-luettelo, lohkokaavio, liittimet, teksti kaavioksi, DIAGRAM, TEXTDIAGRAM, järjestelmäkaavio, kytkentäkaavio, putkisto, csv
from: b26af54b
---

Kirjoita {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Avautuu ikkuna: liitä teksti, valitse {{ui:Piirrä}}, napsauta kaavion vasenta yläkulmaa ja anna tekstin korkeus. CadCraft lukee tekstin, asettelee lohkot kerroksiin suorakulmaisin liittimin ja piirtää ne tasolle nimeltä `Diagram`. Uudet kohteet ovat valittuina, joten voit siirtää niitä heti. Ne ovat tavallisia kohteita: vaihda lohkon teksti komennolla {{cmd:TEXTEDIT}}, venytä liitintä sen otteilla, poista lohko tai lisää omia viivoja. Yksi {{cmd:UNDO}} poistaa koko kaavion.

Komentorivillä ilman ikkunaa teksti voi olla yhdellä rivillä, ja lauseet erotetaan merkillä `;`: `flowchart LR; A[Pump] --> B[Tank]`.

## Mitä se lukee

| Teksti | Mitä luetaan |
|---|---|
| **Mermaid** `flowchart` tai `graph` suunnalla `TD`, `TB`, `BT`, `LR` tai `RL` | `A`, `A[teksti]`, `A(teksti)`, `A([teksti])`, `A{teksti}` (päätös, piirretään timanttina), lainausmerkeissä oleva teksti, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, nimike muodossa `-->|teksti|` tai `-- teksti -->`, ketjut `A --> B --> C`, ryhmät `A & B --> C`, `<br/>` uutta riviä varten, `%%`-kommentit |
| **PlantUML** `@startuml`:n ja `@enduml`:n välissä (komponentti- ja sijoittelukaavio) | `[Komponentti]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` ja muut `as`-nimillä, `A --> B : nimike`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: nimike`, `a <- b`, `a <-> b`, `a -- b`, ketjut, `a: Nimi`, `direction: right`, lainausmerkeissä olevat nimet, `#`-kommentit |
| **From-to-luettelo** (taulukko tekstinä tai CSV:nä) | sarakkeet `from`, `to` ja tarvittaessa `label` ja `type` (`dashed` piirtää katkoviivaisen liittimen), missä tahansa järjestyksessä, erotettuna pilkuilla, puolipisteillä tai sarkainmerkeillä; ilman otsikkoriviä kolme ensimmäistä saraketta ovat from, to ja label |
| **draw.io-XML** (`.drawio`-tiedoston teksti, `<mxfile>` tai `<mxGraphModel>`) | laatikot, pyöristetyt laatikot, soikiot, timanttipäätökset ja pelkkä teksti; säiliölaatikot ja kaistalaatikot (piirretään katkoviivoin otsikkonsa kanssa); liittimet taitepisteineen, nuolenpäät (`endArrow`, `startArrow`) ja `dashed=1`; HTML-nimikkeet muuttuvat pelkäksi tekstiksi, `<UserObject label>` ja `<object label>` toimivat |

Muu rivillä (tyylit, muistiinpanot, silmukkakehykset) ohitetaan, ja komentorivi kertoo, montako riviä ohitettiin. Kaaviossa voi olla enintään 400 lohkoa ja 1200 liitintä.

## Draw.io-XML säilyttää sijaintinsa

Muut kielet kertovat, mikä yhdistyy mihin, joten CadCraft asettelee ne. Draw.io-XML kertoo jo, missä kaikki on, joten CadCraft säilyttää sijainnit: jokainen lohko on siellä, minne tiedosto sen asettaa, skaalattuna niin, että 12 pikselin fontti saa antamasi tekstin korkeuden (120 x 60 pikselin laatikko on 60 x 30 piirrosyksikköä korkeudella 6). Kaavion vasen yläkulma tulee kohtaan, jonka napsautat. Liittimet kulkevat yhden lohkon reunasta seuraavan reunaan taitepisteidensä kautta; liitin, jolla on `orthogonalEdgeStyle` ja ei taitepisteitä, saa yhden suorakulmaisen taitteen.

Draw.io:n oletustallennus on pakattu. Laatikko ja komentorivi avaavat sen puolestasi. Avustajatyökalu ikkunassa, jossa ei ole pakkausvirtaa, kertoo siitä, ja `File › Export as › XML` ilman valintaa *Compressed* antaa tavallisen XML:n. Kuvat, irralliset liittimet ja toiset sivut ohitetaan ja lasketaan.

## Kirjoittaminen paikallisella mallilla

Paikallinen malli (Ollama, LM Studio, llama.cpp, Jan) voi kirjoittaa XML:n tai Mermaid-tekstin PDF:n tai SVG:n sisällöstä. Tulos viedään samasta ikkunasta tai suoraan piirustukseen, kun malli on yhdistetty avustajaksi: `diagram_from_text` ottaa muodon `format` arvolla `drawio`. Pienet mallit tekevät enemmän virheitä XML:ssä kuin Mermaidissa tai from-to-luettelossa, joten Mermaid kannattaa kokeilla ensin. Mitä lukija ei pysty käyttämään, ohitetaan ja lasketaan, eikä sitä arvata. Mallien reseptit löytyvät ohjeesta Yhdistä tekoälysi.

## Asettelu

Lohkot menevät kerroksiin liittimien mukaan (liitin, joka kiertää takaisin, piirretään takaisin ylös). Ne järjestetään risteysten vähentämiseksi, ja liittimet ovat suorakulmaisia: ne lähtevät lohkon alareunasta ja tulevat seuraavan lohkon yläreunaan. `LR` ja `RL` kääntävät kerrokset pylväiksi. Antamasi tekstin korkeus määrittää kaiken koon.

## Alikaaviot ja sekvenssikaaviot

- Mermaid `subgraph nimi [Otsikko]` … `end` piirtää katkoviivaisen laatikon otsikkoineen lohkojen ympärille. Alikaaviot voivat olla sisäkkäin. Asettelu ei pidä muita lohkoja laatikon ulkopuolella, joten siirrä eksynyt lohko sen otteilla.
- Mermaid `sequenceDiagram` tai PlantUML-teksti, jossa on `participant`-rivejä ja `->`-viestejä, piirretään lohkoina yläreunaan. Jokaisen alla on katkoviivainen elinviiva, ja jokaista viestiä kohti on yksi rivi. `-->` ja `-->>` ovat katkoviivaisia, `->>` ja `-)` saavat nuolenpään, `autonumber` numeroi viestit ja viesti itselle kiertää silmukassa. Muistiinpanot sekä `loop`- ja `alt`-kehykset ohitetaan.

## Symbolit yksiviivaisille ja putkistokaavioille

Lohko voi olla piirretty symboli laatikon sijaan, ja sen nimi on symbolin alla. Nimeä symboli tekstissä:

| Teksti | Miten |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` tai rivi `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` tai `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| From-to-luettelo | sarakkeet `from_symbol` ja `to_symbol` |

Nimet ovat P&ID-muotoja (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` ja muu P&ID-kirjasto) sekä sähkösarja (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` ja niin edelleen). Nimi, jonka kaksi sarjaa jakavat, menee P&ID-sarjaan; kirjoita `pid:` tai `el:` eteen valitaksesi toisen. Tuntematon nimi ohitetaan ja lasketaan. Symbolit piirretään yksinkertaisina viivoina, ympyröinä ja kaarina tasolle `Diagram`, skaalattuina tekstin korkeuteen. Ne eivät ole lisäosien lohkoja tunnisteineen, joten käytä työpiirustukseen P&ID- tai sähkökomentoja.

Tekoälyavustajat voivat tehdä saman `diagram_from_text`-työkalulla ikkunassa.
