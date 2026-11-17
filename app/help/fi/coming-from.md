---
title: Siirtyminen muusta piirustusohjelmasta
summary: Miten tutut komennot, näppäimet ja tavat vastaavat CadCraftia, ja erot, jotka yllättävät kokeneet piirtäjät.
keywords: siirtyminen, erot, siirto, tavat, aliakset, dynaaminen syöttö, pickfirst, pickadd, qsave, saveas, tallenna nimellä, mtext, ctb, napaseuranta, xref, pikanäppäimet, tutut, copyclip, pasteclip, pasteorig, copybase, leikepöytä
from: b58688e7
---

Jos olet käyttänyt AutoCADia tai samaan malliin perustuvaa ohjelmaa, suurin osa tiedoistasi toimii täälläkin: komentorivi, aliakset kuten `L`, `C`, `TR` ja `O`, Enter tai Space toistamaan, ikkuna- ja leikkaavavalinta, kohteen tartunta F3-näppäimellä, Ortogonaali F8-näppäimellä, mallitila, asettelut ja näkymäruudut. Tämä sivu listaa suoraan vastaavat asiat ja sitten erot, jotka yllättävät ihmiset. Lue jälkimmäinen puolikas, vaikka vain selaisit ensimmäisen.

## Mikä vastaa suoraan

| Tapa | CadCraftissa |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Samat komennot, samat aliakset |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Sama |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Samat mittauskomennot |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` kirjoitettuna komentoriville | Sama, uusille mitoituksille |
| `B` lohkon tekoon, `I` lisäämiseen, `PU` puhdistukseen | Sama (puhdistus poistaa vain käyttämättömät lohkot) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` ja sitten `E` tai `W` | Sama |
| Komennon kirjoittaminen `_LINE` tai `-LAYER` skriptistä tai tottumuksesta | Alkuun kirjoitettu `_`, `-`, `.` tai `'` jätetään huomiotta |
| Enter tai Space tyhjässä kehotteessa toistaa viimeisen komennon | Sama |
| Esc peruuttaa; Esc uudelleen tyhjentää valinnan | Sama |
| `@dx,dy`, `@d<a`, kirjoitetut kulmat vastapäivään idästä | Sama |
| Ikkuna vasemmalta oikealle, leikkaava oikealta vasemmalle, napsautus-napsautus; paina ja vedä lassoa, Space kiertää ikkuna / leikkaava / aita (LASSOMODE) | Sama |
| Valitse ensin, sitten komento (substantiivi-verbi) | Sama; valmis komento tyhjentää valinnan |
| `ALL` ja `L` kohteiden valinnassa | Sama |
| Shift+napsautus poistaa valinnasta | Sama. Asetuksilla napsautus voi korvata valinnan, kuten PICKADD 0 tekee: katso [CadCraftin asetukset](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Samat komennot ja näppäimet; liittäminen sijoittaa kopion sen vasempaan alakulmaan, kuten PASTECLIP tekee |
| F3 kohteen tartunta, F7 ruudukko, F8 Ortogonaali | Samat näppäimet |
| Kaksoisnapsauta rullaa zoomataksesi laajuuteen | Sama |
| Peilattu teksti pysyy luettavana | Sama (kuten MIRRTEXT 0:lla) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Samat; Macissa toimii myös Command |

[Komentoviite](topic:commands) luettelee jokaisen komennon ja aliaksen.

:::tip
Jos pidät AutoCADin valintanauhasta, valitse valikkotyyliksi {{ui:Piirtämisen klassikko}} kohdassa {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Valikot, näppäimet ja hiiri}}: välilehdet Koti, Lisää, Merkintä, Parametrinen, Näkymä, Hallinta ja Tulostus samalla komentorivillä, keskipainike panoroi ja hiiren oikea napsautus on Enter. Katso [Valikot, näppäimet ja hiiri](topic:menus-keys-and-mouse).
:::

[Komentokartta](topic:command-map) luettelee jokaisen CadCraftin komennon lyhyine nimineen, ja [pikaohje](topic:cheat-sheet) 40 komentoa, joita käytät eniten (myös yhtenä sivuna PDF:nä).

## Erot, jotka yllättävät

### Kirjoitetut pisteet ovat absoluuttisia

Kun dynaaminen syöttö on päällä, toinen ohjelma käsittelee toiselle pisteelle kirjoitetun `100,0` suhteellisena. **CadCraftin komentorivi ei:** siellä `x,y` mitataan aina origosta. Kun {{ui:Dyn}} ({{key:F12}}) on päällä, käytä sen kenttiä: etäisyys, {{key:Tab}}, kulma. Käytä `@100,0`-muotoa tarkoittamaan ”100 viimeisen pisteen oikealle puolelle”, tai siirrä ristikkoa oikeaan suuntaan ja kirjoita pelkkä `100`.

### Shift ohittaa tartunnat; se ei anna Ortogonaalia

Shift-näppäimen pitäminen pohjassa napsautuksen aikana ohittaa kohteen tartunnat kyseiselle napsautukselle. Se ei väliaikaisesti kytke Ortogonaalia päälle. Käytä F8-näppäintä tai {{ui:Ortogonaali}}-painiketta.

### Hiiren oikea painike on aina Enter

Oikean painikkeen valikkoa ei ole. Oikea napsautus piirustuksessa on Enter: se lopettaa komennon, päättää valinnan tai toistaa viimeisen komennon. Otteen siirron tai valintaruudun aikana se peruuttaa sen sijaan. Panoroi vetämällä oikealla painikkeella.

### Ei välilyöntipanorointia

Space on sama kuin Enter, joten välilyönnin pitäminen pohjassa ja vetäminen ei panoroi. Panoroi keskipainikkeella tai oikealla painikkeella, tai zoomaa ulos ja takaisin sisään toisessa kohdassa rullalla.

### Typistä ja pidennä

Typistä ja Pidennä alkavat pikatilassa: jokainen näkyvä kohde on leikkausreuna tai raja, osoittimen alla oleva pala näyttää, mikä poistuu, vedetty polku typistää jokaisen palan, jonka se ylittää, ja kohde, jota mikään ei ylitä, poistetaan. {{key:Shift}} vaihtaa typistämisen ja pidentämisen välillä. `O` vaihtaa vakiotilaan (valitse reunat ensin), `F` ja `C` ovat aita ja leikkaava, `E` on EDGEMODE, `R` poistaa. Vaihtoehtoa `P` (Projekti) ei ole: CadCraft typistää piirustuksen tasossa.

### Pyöristä ja viistä

{{cmd:FILLET}} ja {{cmd:CHAMFER}} ottavat tutut vaihtoehdot: Kumoa (U), Murtoviiva (P), Säde (R) tai Etäisyys (D), Kulma (A) ja Menetelmä (E), Typistä (T) ja Useita (M), ja terävää kulmaa varten {{key:Shift}}+napsautus. Murtoviivan ja viivan välinen pyöristys lisää kaaren omana kohteenaan sen sijaan, että se yhdistäisi ne murtoviivaksi, ja murtoviivan kulmat kaaripätkän vieressä jätetään ennalleen.

### Kappaleteksti ja yksirivinen teksti

`T`, `MT` ja `MTEXT` ovat kappaleteksti, joka kirjoitetaan paikan päällä, leveydellä, rivivälillä ja tasauksella; `DT` ja `DTEXT` ovat yksirivistä tekstiä, kuten tunnet ne. Tekstityylejä tai sarakkeita ei ole, eikä tekstin sisäistä muotoilua (lihavointi, pinotut murtoluvut) voi vielä kirjoittaa; tiedostosta tuleva muotoilu säilyy, piirtyy ja tallentuu (katso [Lisää teksti ja tunnisteet](topic:text#formatting-inside-paragraph-text-from-other-programs)). Kaikki piirtyy Helvetica-tyylisellä fontilla.

### Tallentaminen tarkoittaa ”lataa kopio”

{{key:Mod+S}}, `SAVE` ja `QSAVE` lataavat kopion piirustuksen muodossa: avaamasi DWG tallentuu DWG:nä, DXF DXF:nä. Selaimessa mitään ei kirjoiteta päällekkäin, eikä avattuja tiedostoja muuteta koskaan. CadCraft Studiossa {{key:Mod+S}} kirjoittaa takaisin avaamaasi tiedostoon.

`SAVEAS` ({{key:Mod+Shift+S}}) on pieni valintaikkuna, ei tiedostoselain: valitse {{ui:DWG}} (sen {{ui:Versio}}: AutoCAD 2000–2018), {{ui:DXF R12}} tai {{ui:DXF 2000}} ja napsauta {{ui:Tallenna}}. Selain päättää, minne lataus menee. `DXFOUT` lataa aina DXF R12:n.

Avaamasi DWG tallentuu siinä versiossa, jossa se tuli; uusi piirustus tallentuu AutoCAD 2000 -muodossa, ellei valitse toista. Arkit, mitoitukset ja viivoituskuviot säilyvät. Katso [Tiedostot: mitkä avautuvat, mitkä tallentuvat](topic:files#saving).

### Tasot: yksinkertaisemmin

- Jokainen tasomuutos (päällä, jäädytys, lukitus, väri, tulostus, viivatyyppi, viivanpaksuus, nykyinen taso) on yksi kumoamisvaihe.
- Pois ja jäädytys vaikuttavat CadCraftissa samalla tavalla.
- Tasot, jotka piirustus jäädyttää yhdessä näkymäruudussa, pysyvät siellä jäädytettyinä: näytöllä, tulosteissa ja kun tallennat sen DWG- tai DXF-muodossa.
- Näkymäruutu, joka näyttää tason omalla värillään, viivatyypillään, viivanpaksuudellaan tai läpinäkyvyydellään, säilyttää sen näytöllä, tulosteissa ja tallennetussa DWG:ssä (DXF säilyttää tason omat asetukset; tallennus kertoo sen). Näiden muuttaminen näkymäruutukohtaisesti ei ole vielä toteutettu.
- Tasojen ominaisuuksien hallintaa ja tasotiloja ei ole; {{cmd:RENAME}}, {{cmd:LAYMRG}} ja {{cmd:LAYDEL}} nimeävät uudelleen, yhdistävät ja poistavat tasoja. Viivatyypit ja viivanpaksuudet asetetaan oikeassa paneelissa (katso [Viivanpaksuudet ja viivatyypit](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} ja {{cmd:LAYMCUR}} toimivat valitsemalla.
- DXF R12:een tallennus kirjoittaa tasojen nimet isoilla kirjaimilla. DWG säilyttää ne kirjoittamallasi tavalla.

### Mitoitustyylit

`DIMSTYLE` avaa hallinnan nimetyille tyyleille (uusi, muokkaa, aseta nykyiseksi, vertaa, käytä). `DIMSCALE` ja muut asetukset muuttavat edelleen sitä, mitä uudet mitoitukset käyttävät, ja jokainen mitoitus säilyttää omat kokonsa, joita voi muuttaa myös Ominaisuudet-paneelissa. Nykyistä tyyliä ei tallenneta tiedostoon. Mitoitukset seuraavat piirustuksen pituuden muotoa (desimaali, tai jalat ja tuumat komennolla {{cmd:UNITS}}) tai omaa {{ui:Muoto}}-asetustaan. Katso [Aseta mitoituksen koot](topic:dimension-settings).

### Tulostaminen on yksinkertaisempaa

Plottaustyylitaulukot toimivat värin mukaan, kuten CTB-tiedostot: Monokromi, Väri ja Harmaasävy ovat sisäänrakennettuja, voit tehdä omia, ja jokainen arkki säilyttää taulukkonsa. CTB-tiedostojen lukeminen perustuu julkaistuun kuvaukseen, ja sitä on kokeiltu vain tiedostoilla, jotka me teimme; nimettyjä tulostustyylitaulukoita (STB) ja sivuasetuksia ei ole vielä toteutettu. Viivat tulostuvat viivanpaksuudellaan, muut yhdellä kynän leveydellä. Arkit tulostuvat mittakaavassa 1:1 omalle paperilleen; malli tulostuu valittuun mittakaavaan tai sovitettuna. Katso [Plottaa PDF:ksi](topic:plot-pdf).

### Työskentely näkymäruudun sisällä

Kuten tunnet: kaksoisnapsauta näkymäruudun sisällä (tai kirjoita {{cmd:MSPACE}}), jotta työskentelet mallia sen kautta, ja kaksoisnapsauta sen ulkopuolella (tai {{cmd:PSPACE}}) palataksesi arkille. Näkymäruudun sisällä panorointi ja zoomaus muuttavat sitä, mitä näkymäruutu näyttää, ellei sen näyttö ole lukittu; silloin ne siirtävät arkkia. Piirustuksen alla olevan välilehden napsauttaminen poistuu myös näkymäruudusta. Katso [Työskentely mallin kanssa näkymäruudun kautta](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Seuranta ja dynaaminen syöttö kyllä, ruudukkotartunta ei vielä

Ruudukko on vain katseltavaksi; pisteet eivät tartu siihen (F9-tartuntatilaa ei ole). Napaseuranta ({{key:F10}}, askel asetetaan komennolla {{cmd:POLARANG}}) ja kohteen tartuntaseuranta ({{key:F11}}: pysähdy tartuntapisteeseen sen hankkimiseksi) toimivat kuten tunnet ne; katso [Tartu kohteisiin](topic:object-snaps#polar-tracking). Dynaaminen syöttö ({{key:F12}}) näyttää etäisyyden ja kulman (tai X:n ja Y:n) ristikon vieressä; katso [Koordinaattien ja etäisyyksien syöttö](topic:coordinate-entry#dynamic-input).

### Jalat ja tuumat

Valitse {{ui:Pituuden muoto}} {{ui:Arkkitehtuuri}} tai {{ui:Tekninen}} (tai kirjoita {{cmd:UNITS}}), ja kirjoita pituudet kuten tunnet ne: `12'6"`, `12'6-1/2"`. Käytä murtoluvun edessä väliviivaa, ei välilyöntiä: {{key:Space}} on {{key:Enter}}. Aseta myös {{ui:Yksiköt}} arvoon {{ui:Tuumat}}, jotta arkit ja tulosteet tarjoavat arkkitehtuurimittakaavat. Muoto säilyy tallennetuissa DWG- ja DXF-tiedostoissa. Katso [Jalat ja tuumat](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopiointi ja liittäminen pysyvät CadCraftin sisällä

{{key:Mod+C}}, {{key:Mod+X}} ja {{key:Mod+V}} kopioivat, leikkaavat ja liittävät kohteita piirustuksen sisällä, piirustusten välillä ja saman selaimen CadCraft-välilehtien välillä. Leikepöytä on CadCraftin oma: CadCraft-kohteita ei voi liittää toiseen ohjelmaan, eikä toisen ohjelman kohteita CadCraftiin. Liittäminen toisissa yksiköissä olevasta piirustuksesta ei skaalaa uudelleen: käytä sen jälkeen {{cmd:SCALE}}-komentoa. {{key:Mod+D}} on monistus, joka liikkuu osoittimen mukana, CadCraftin lisäys. Katso [Kopioi, liitä ja monista](topic:copy-paste).

### Selainnäppäimet, joita et voi käyttää

Verkkosivu ei voi ottaa {{key:Mod+N}}, {{key:Mod+W}} tai {{key:Mod+T}} selaimelta: ne avaavat ja sulkevat ikkunoita ja välilehtiä. Käytä {{ui:Uusi}}-painiketta tai kirjoita `NEW`. Katso [Näppäimet, hiiret ja kosketuslevyt](common:keys).

## Komennot, joihin saatat tarttua, joita ei vielä ole

{{cmd:TABLE}} ei ole toteutettu. Sen kirjoittaminen sanoo ”Tuntematon komento”. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} ja {{cmd:XREF}} ovat toteutettuja.) [Ei vielä toteutettu](topic:not-built-yet) luettelee, mitä tehdä sen sijaan nyt.
