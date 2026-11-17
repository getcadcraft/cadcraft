---
title: Komentoviite
summary: Jokainen CadCraft-piirustussovelluksen komento aliaksineen, kysymyksineen, vaihtoehtoineen ja oletusarvoineen.
keywords: komennot, aliakset, komentoluettelo, pinta-ala, piiri, measuregeom, viiva, pline, ympyrä, kaari, typistä, siirtymä, dimlinear, lohko, lisää, asettelu, plottaa, zoomaa, ohje, copyclip, cutclip, pasteclip, pasteorig, copybase, monista, selectall
from: 7db2646b
---

Kirjoita komennon nimi tai aliaksen nimi ja paina {{key:Enter}} tai {{key:Space}}. Kirjainkoolla ei ole merkitystä, ja alussa oleva `_`, `-`, `.` tai `'` ohitetaan. Kirjoita `HELP` (tai `?`) tulostaaksesi komentorivin historiaan lyhyen luettelon kaikista komennoista; paina {{key:F1}} tätä ohjetta varten.

Kehotteiden lukeminen: vaihtoehdot ovat hakasulkeissa, ja valitset yhden kirjoittamalla sen isot kirjaimet (`D` halkaisijalle). Oletus on kulmasulkeissa; paina {{key:Enter}} hyväksyäksesi sen. Kun pyydetään pistettä, voit napsauttaa tai kirjoittaa minkä tahansa muodoista kohdasta [Koordinaatti- ja etäisyyssyöttö](topic:coordinate-entry). Kun pyydetään etäisyyttä, voit kirjoittaa luvun tai napsauttaa kaksi pistettä.

Kun pistettä tai kohdetta vaaditaan eikä oletusta ole, {{key:Enter}} lopettaa komennon. {{key:Esc}} peruuttaa sen. Mikä tahansa komennon tekemä muutos on yksi kumoamisvaihe.

## Piirrä

### LINE

Aliakset: `L`. Suoraviivaiset osuudet, kukin oma kohteensa.

- `Määritä ensimmäinen piste` (Enter: aloita viimeisestä antamastasi pisteestä)
- `Määritä seuraava piste [Kumoa (U)]`, toistuu. Kahden osuuden jälkeen: `[Kumoa (U)/Sulje (C)]`.
- `U` ottaa takaisin viimeisen osuuden, `C` sulkee pisteeseen ensimmäinen piste ja lopettaa. Enter lopettaa.

### PLINE

Aliakset: `PL`. Yksi murtoviiva viiva- ja kaariosuuksista.

- `Määritä aloituspiste`
- `Määritä seuraava piste [Kaari (A)/Sulje (C)/Kumoa (U)]` (Sulje, kun osuuksia on kaksi)
- `A` vaihtaa kaariin: `Määritä kaaren loppupiste [Viiva (L)/Sulje (C)/Kumoa (U)]`. Jokainen kaari jatkuu tangentiaalisesti edellistä osuutta. `L` palaa viivoihin, `CL` sulkee kaarella.
- Enter lopettaa; murtoviiva jää auki.

### CIRCLE

Aliakset: `C`.

- `Määritä ympyrän keskipiste [3P/2P/Ttr (tan tan säde)]`
- `Määritä ympyrän säde [Halkaisija (D)] <viimeisin säde>`; `D` kysyy `Määritä ympyrän halkaisija`.
- `2P`: halkaisijan kaksi päätä. `3P`: kolme pistettä ympyrällä.
- `T` (myös komento `TTR` ja {{ui:Piirrä}} › {{ui:Lisää}} › {{ui:Ympyrä: Tan, Tan, Säde}}): `Määritä kohteen piste ensimmäiselle tangentille`, toinen, sitten säde (Enter: viimeisin). Ympyrä sivuaa molempia kohteita (viivoja, kaaria, ympyröitä, murtoviivan osuuksia, myös lohkojen sisällä); niistä, jotka sivuavat, valitaan se, joka on lähimpänä napsautuksiasi. `Ympyrää ei ole olemassa`, kun mikään ei sovi.
- `TTT` (tai {{ui:Piirrä}} › {{ui:Lisää}} › {{ui:Ympyrä: Tan, Tan, Tan}}): kolme kohdetta; ympyrä, joka sivuaa kaikkia kolmea, lähin napsautuksiasi (kolme viivaa antavat sisemmän tai ulomman ympyrän sen mukaan, mihin napsautat).

### ARC

Aliakset: `A`.

- `Määritä kaaren aloituspiste [Keskipiste (C)]`, `Määritä kaaren toinen piste`, `Määritä kaaren loppupiste`: kaari kolmen pisteen kautta.
- `C`: `Määritä kaaren keskipiste`, `Määritä kaaren aloituspiste`, `Määritä kaaren loppupiste`. Kaari kulkee vastapäivään aloituksesta loppuun.

### RECTANG

Aliakset: `REC`, `RECTANGLE`. Suljettu murtoviiva.

- `Määritä ensimmäinen kulmapiste`, `Määritä vastakkainen kulmapiste`. Kirjoita `@leveys,korkeus` toiselle kulmapisteelle.

### POLYGON

Aliakset: `POL`. Säännöllinen monikulmio suljettuna murtoviivana.

- `Anna sivujen määrä <4>` (3–1024)
- `Määritä monikulmion keskipiste`
- `Anna vaihtoehto [Ympyrään piirretty (I)/Ympyrän ulkopuolelle piirretty (C)] <I>`
- `Määritä ympyrän säde`: napsauta tai kirjoita piste; sen etäisyys määrää koon ja suunta kääntää monikulmion.

### ELLIPSE

Aliakset: `EL`.

- `Määritä ellipsin akselin päätepiste [Keskipiste (C)]`, `Määritä akselin toinen päätepiste`, `Määritä etäisyys toiseen akseliin`
- `C`: `Määritä ellipsin keskipiste`, `Määritä akselin päätepiste`, sitten etäisyys toiseen akseliin.
- `I` (`Isocircle`, vain kun {{cmd:ISODRAFT}} on päällä): keskipiste, sitten säde tai `Diameter`: ellipsi, jonka ympyrä näyttää nykyisellä isometrisellä tasolla.

### HATCH

Aliakset: `H`, `BH`, `BHATCH`; tai {{ui:Viivoitus}} työkalurivillä. Tulostaa ensin nykyisen kuvion, mittakaavan ja kulman.

- `Valitse sisäpiste [Valitse kohteet (S)/Kuvio (P)/Mittakaava (SC)/Kulma (A)]`, toistuu (`Kumoa (U)`, kun alue on olemassa): jokainen napsautus lisää ympärillä olevan suljetun alueen, ja sen sisällä olevat suljetut muodot ovat saarekkeita. Enter tekee yhdestä viivoituksen kaikista.
- `S`: `Valitse suljetut kohteet` (suljetut murtoviivat, ympyrät, suljetut ellipsit).
- `P`: `Anna kuvion nimi, SOLID tai ? luettelolle <nykyinen>`. `SC`: `Määritä kuvion mittakaava`. `A`: `Määritä kuvion kulma`.
- `G` (Liukuväri): täyttö on liukuväri kuvion sijaan. Katso {{cmd:GRADIENT}} sen kysymyksistä.

Katso [Viivoitus ja alueiden täyttö](topic:hatch).

### GRADIENT

Aliakset: `GD`. Täyttää alueen liukuvärillä yhdellä tai kahdella värillä. Se kysyy ensin liukuvärin, ja jatkaa sitten kuten {{cmd:HATCH}} (`Valitse sisäpiste`, `S` suljetuille kohteille, {{key:Enter}} lopettaa).

- `Anna liukuvärin vaihtoehto [Tyyppi (T)/Yksi väri (O)/Kaksi väriä (TW)/Kulma (A)/Keskitetty (C)/Poistu (X)] <X>`, toistuu; se tulostaa liukuvärin nykyisen tilan joka kerta.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, tai jokin niistä käänteisenä (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Alkukirjaimet riittävät.
- `O`: yksi väri, sitten sen sävy 0:sta 1:een (0 sävyttää mustaksi, 0,5 on väri itse, 1 sävyttää valkoiseksi). `TW`: ensimmäinen ja toinen väri. Väri on luku 1–255, kolme lukua kuten `255,128,0`, tai `#rrggbb`.
- `A`: kulma, jossa liukuväri kulkee. `C`: keskitetty Kyllä tai Ei (Ei siirtää liukuvärin keskikohdan yhdelle puolelle).
- Se hylkää tuntemattoman värin tai tyypin, ja sävyn, joka on 0:n ja 1:n ulkopuolella.

{{cmd:HATCHEDIT}} `G` ja Ominaisuudet (Liukuväri) muuttavat liukuväriä myöhemmin tai muuttavat minkä tahansa viivoituksen liukuväriksi. Liukuväri piirtyy näytölle ja tulostuu. DWG 2004 ja uudemmat tallentavat sen oikeana liukuvärinä; DXF 2000 ja DWG 2000 tallentavat sen CadCraftille, ja muut ohjelmat näkevät yhtenäisen täytön ensimmäisellä värillä.

### HATCHGENERATEBOUNDARY

Aliakset: `HGB`. Luo rajan uudelleen viivoituksesta, joka on menettänyt sen. `Valitse viivoitukset` (tai valitse ne ensin), sitten `Linkitä jokainen viivoitus sen uuteen rajaan, jotta viivoitus seuraa sitä? [Kyllä/Ei] <Kyllä>`.

- Jokainen viivoituksen silmukka muuttuu suljetuksi murtoviivaksi viivoituksen tasolle; uudet murtoviivat jäävät valituiksi. Kaareva reuna palautuu lyhyinä suorina osina, joita viivoitus säilyttää.
- Kyllä-vastauksella viivoitus seuraa uutta rajaansa, kuten {{cmd:HATCH}}:n tekemä viivoitus. Yksi kumoamisvaihe.
- Se kertoo, jos yhtään viivoitusta ei valittu.

### POINT

Aliakset: `PO`; tai {{ui:Piirrä}} › {{ui:Lisää}} › {{ui:Piste}}. Pistekohteita, yksi napsautusta kohden, kunnes Enter.

- `Määritä piste`

### XLINE

Aliakset: `XL`; tai {{ui:Piirrä}} › {{ui:Lisää}} › {{ui:Apuviiva}}. Apuviivat, päättymättömät molempiin suuntiin. Katso [Apuviivat ja säteet](topic:construction-lines).

- `Määritä piste [Vaaka (HOR)/Pysty (VER)/Kulma (ANG)/Puolittaja (BISECT)/Siirtymä (O)]`, sitten `Määritä läpäisevä piste` jokaiselle viivalle, kunnes Enter.
- `A`: `Anna apuviivan kulma [Viite] <0>`; `R` kysyy ensin `Valitse viivan kohde`.
- `B`: `Määritä kulman kärkipiste`, `Määritä kulman aloituspiste`, sitten `Määritä kulman loppupiste` jokaiselle viivalle.
- `O`: `Määritä siirtymän etäisyys [Läpi] <Läpi>`, sitten `Valitse viivan kohde` ja `Määritä siirtymän puoli` (tai `Määritä läpäisevä piste`) jokaiselle viivalle.

### RAY

Ei aliaksia; tai {{ui:Piirrä}} › {{ui:Lisää}} › {{ui:Säde}}. `Määritä aloituspiste`, sitten `Määritä läpäisevä piste` jokaiselle säteelle, kunnes Enter.

### TEXT

Aliakset: `DT`, `DTEXT`; tai {{ui:Teksti}} työkalurivillä. Yhden rivin teksti; jokainen rivi on oma kohteensa.

- `Määritä tekstin aloituspiste [Tasaus (J)]`
- `J`: `Anna vaihtoehto [Vasen/Keskitys/Oikea/Keski/TL/MC] <L>`, sitten `Määritä tekstin lisäyspiste`
- `Määritä korkeus <nykyinen tekstin korkeus>`
- `Määritä tekstin kiertokulma <0>`
- `Anna teksti`, toistuu: jokainen Enter aloittaa seuraavan rivin alapuolelle. Enter tyhjällä rivillä lopettaa. {{key:Space}} kirjoittaa välilyönnin tähän.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} asettaa merkit viivalle, kaarelle, ympyrälle, murtoviivalle, splinille tai ellipsille, jotka jakavat sen yhtä suuriin osiin. Valitse kohde ja anna osien määrä (2–32767). Avoin kohde saa yhden merkin vähemmän kuin osia; suljettu saa merkin myös alkupisteeseensä. Itse kohdetta ei leikata. Merkit ovat pisteitä; `Block` kysyy sen sijaan tämän piirustuksen lohkoa ja sitä, kääntyykö se seuraamaan kohdetta. Pituudet splinien ja ellipsien varrella mitataan lyhyitä jänteitä pitkin. Se hylkää tekstin, viivoitukset ja muut kohteet, joilla ei ole pituutta.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} asettaa merkin annetun pituuden välein viivan, kaaren, ympyrän, murtoviivan, splinin tai ellipsin varrelle, laskien siitä päästä, joka on lähinnä napsautustasi (suljettu kohde: sen alusta). Anna pituus kirjoittamalla se tai kahdella pisteellä. Avoimen kohteen kaukaisessa päässä ei ole merkkiä. `Block` sijoittaa lohkon jokaiseen merkkiin pisteen sijaan. Se hylkää pituuden 0, pituuden, joka on kohdetta pidempi, ja pituuden, joka tekisi yli 32767 merkkiä.

### BOUNDARY

Aliakset: `BO`, `BPOLY`. {{cmd:BOUNDARY}} tekee suljetun murtoviivan alueen ympärille, joka sisältää valitsemasi pisteen, niistä viivoista, kaarista, ympyröistä, murtoviivoista ja käyristä, jotka rajaavat sen näytöllä. Kaarella tai ympyrällä olevat osat palautuvat kaarisegmentteinä; ellipsien ja splinien osat palautuvat lyhyinä suorina segmentteinä. Kun `Saarekkeet` on päällä (aloitusasetus), myös sen sisällä olevat suljetut alueet saavat oman murtoviivan. Jatka pisteiden valitsemista; Enter lopettaa. Rajaavat kohteet jäävät ennalleen. Se kertoo, jos mikään suljettu alue ei sisällä pistettä.

### BLEND

{{cmd:BLEND}} piirtää splinin kahden avoimen käyrän päiden väliin. Valitse kumpikin käyrä lähellä päätä, johon yhdistät. `CONtinuity` valitsee `Tangentti` (spline lähtee ja saapuu molempia käyriä pitkin) tai `Sileä` (se taipuu myös samalla tavalla kuin ne taipuvat päissään); valinta säilyy istunnon ajan. Kahta käyrää ei muuteta. Se hylkää suljetut kohteet ja kaksi päätä, jotka jo kohtaavat.

### REGION

Alias: `REG`. {{cmd:REGION}} muuttaa suljetut kohteet alueiksi: tasoalueiksi, joita voi yhdistää, leikata ja mitata. Valitse ympyröitä, suljettuja murtoviivoja, suljettuja ellipsejä tai suljettuja splinejä, tai viivoja, kaaria ja avoimia murtoviivoja, jotka sulkeutuvat silmukaksi päästä päähän; jokainen silmukka muuttuu yhdeksi alueeksi ja korvaa kohteet, joista se syntyi. Kaaret pysyvät kaarina; ellipsit ja splinit muuttuvat lyhyiksi suoriksi osuuksiksi. Se, mikä ei ole suljettu eikä sulje silmukkaa, jää ennalleen, ja se kertoo, kuinka monta. Piirustuksessa alue on yksi tai useampi suljettu murtoviiva, jotka on pidetty yhdessä nimettömänä ryhmänä, joten napsautus valitsee koko alueen ja kopio on oma alueensa; muut ohjelmat, jotka avaavat tiedoston, näkevät suljetut murtoviivat.

Kun piirustuksessa on alueita, {{cmd:UNION}}, {{cmd:SUBTRACT}} ja {{cmd:INTERSECT}} 2D-välilehdellä toimivat alueilla: `UNION` yhdistää valitut alueet yhdeksi (erillään olevat alueet muodostavat yhden alueen, jossa on useita ääriviivoja), `SUBTRACT` kysyy alueet, joista vähennetään, ja sitten ne, jotka vähennetään (reikä pysyy osana aluetta), `INTERSECT` säilyttää alueen, jonka kaikki jakavat. Jokainen kertoo tuloksen pinta-alan ja on yksi kumoamisvaihe. Ne kieltäytyvät, kun mitään ei jäisi tai mitään ei ole yhteistä. 3D-välilehdellä ja piirustuksessa, jossa ei ole alueita, samat komennot toimivat kiintokappaleilla kuten ennenkin.

## Muokkaa

Aliakset: `MT`, `T`; tai {{ui:Kappale}} työkalurivillä. Kappaleteksti, joka rivittyy leveyteen, kirjoitetaan paikalleen.

- `Määritä ensimmäinen kulma`
- `Määritä vastakkainen kulma [Korkeus (H)/Tasaus (J)/Rivivälit (L)/Kierto (R)/Leveys (W)]`: kahden kulman välinen leveys on kohta, jossa teksti rivittyy. `H` kysyy `Määritä korkeus`, `J` `Anna tasaus [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Anna rivivälin kerroin (0,25–4)`, `R` `Määritä kiertokulma`, `W` `Määritä leveys (0 ilman rivitystä)` ja ohittaa toisen kulman.
- Sitten piirustukselle avautuu ruutu: kirjoita, {{key:Enter}} aloittaa uuden kappaleen, {{key:Mod+Enter}} tai napsautus ruudun ulkopuolella lopettaa, {{key:Esc}} peruuttaa. Sen palkki asettaa korkeuden, rivivälin, leveyden ja tasauksen. Katso [Lisää teksti ja merkinnät](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliakset: `ED`, `DDEDIT`; tai kaksoisnapsauta tekstiä. `Valitse muokattava teksti`, toistuu, kunnes {{key:Enter}}: jokainen avautuu samaan ruutuun. Valitulla tai kaksoisnapsautetulla tekstillä aloitettuna se muokkaa sitä yhtä ja päättyy.
### ERASE

Aliakset: `E`, `DELETE`; tai paina {{key:Delete}}, kun kohteet on valittu.

- `Valitse kohteet` (ohitetaan, kun kohteet on jo valittu)

### MOVE

Aliakset: `M`.

- `Valitse kohteet`
- `Määritä peruspiste [Siirtymä (D)]`, `Määritä toinen piste`
- `D`: `Määritä siirtymä`, kirjoitettuna `dx,dy`.

### COPY

Aliakset: `CO`, `CP`. Kopioi niin monta kertaa kuin annat pisteitä.

`Matriisi` toisen pisteen kehotteessa tekee yhdellä kertaa rivin: anna kohteiden määrä (alkuperäinen lasketaan yhdeksi), sitten piste, johon ensimmäinen kopio menee; muut seuraavat samalla välillä. `Sovita` tekee tästä pisteestä viimeisen kopion paikan, ja muut jakautuvat tasaisesti välille.

- `Valitse kohteet`
- `Määritä peruspiste [Siirtymä (D)]`
- `Määritä toinen piste [Kumoa (U)]`, toistuu, kunnes Enter. `U` ottaa takaisin viimeisen kopion.

### ROTATE

Aliakset: `RO`.

- `Valitse kohteet`, `Määritä peruspiste`
- `Määritä kiertokulma <viimeisin kulma>`: asteina, vastapäivään positiivinen; tai napsauta pistettä kiertääksesi sitä kohti.

### SCALE

Aliakset: `SC`.

- `Valitse kohteet`, `Määritä peruspiste`
- `Määritä mittakaavakerroin`: kirjoita kerroin, kuten `0.5` tai `2`. Napsautettu piste antaa etäisyytensä peruspisteestä kertoimeksi.

### MIRROR

Aliakset: `MI`.

- `Valitse kohteet`
- `Määritä peilausviivan ensimmäinen piste`, `Määritä peilausviivan toinen piste`
- `Poistetaanko lähdekohteet? [Kyllä/Ei] <E>`

### ALIGN

Aliakset: `AL`; tai {{ui:Muokkaa}} › {{ui:Lisää}} › {{ui:Kohdista}}.

- `Valitse kohteet`
- `Määritä ensimmäinen lähdepiste`, `Määritä ensimmäinen kohdepiste`
- `Määritä toinen lähdepiste (Enter jatkaa)`, `Määritä toinen kohdepiste`
- `Määritä kolmas lähdepiste (Enter jatkaa)`, `Määritä kolmas kohdepiste`
- Kahdella parilla: `Skaalataanko kohteet kohdistuspisteiden perusteella? [Kyllä/Ei] <E>`

Katso [Kohdista kohteet](topic:modify-objects#align-objects).

### ALIGNTO

- `Valitse kohteet` (tai valinta), `Kohdista [Vasen/Keski/Oikea/Ylä/Keski pysty/Ala] <Vasen>`, `Kohteeseen [Valinta/Ensimmäinen/Viimeinen/Piste] <Valinta>`; `P` kysyy pisteen. Valinta säilyy.

### DISTRIBUTE

- `Valitse kohteet` (vähintään kolme), `Jaa [Vaakasuoraan/Pystysuoraan] <Vaakasuoraan>`, `Jaa tasaisesti [Keskipisteet/Välit] <Välit>`. Kaksi ulointa pysyvät; valinta säilyy.

### ALIGNPANEL

Aliakset: `ALP`; tai {{ui:Muokkaa}} › {{ui:Lisää}} › {{ui:Kohdista ja jaa}}. Avaa paneelin, joka suorittaa ALIGNTO- ja DISTRIBUTE-komennot napsautuksilla.

### LASER

Aliakset: `LASERCUT`; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Laser…}}. Avaa Laser-paneelin piirustuksen päälle: mitä kukin taso tekee (leikkaus, viiva, kaiverrus, täyttö, kuva), esikatselun, GRBL G-codea tallennettavaksi sekä kehystämisen ja lähettämisen Web Serialin kautta. Katso [Lähetä piirustus laserille](topic:laser-cutting).

### STRETCH

Aliakset: `S`; tai {{ui:Venytä}}. `Valitse venytettävät kohteet`: vedä ristikkäisiä ikkunoita (tai kirjoita `C`) päiden päälle siirtääksesi. `Määritä peruspiste [Siirtymä (D)]`, `Määritä toinen piste`. Ikkunoiden sisällä olevat pisteet siirtyvät: viivojen päät, murtoviivan kärkipisteet (kaarisegmentit säilyttävät korkeutensa), mitoituspisteet; ympyrät, ellipsit, teksti, pisteet ja lohkot siirtyvät kokonaan, kun niiden keskipiste tai lisäyspiste on sisällä. Ennen komentoa tehty valinta säilyttää ristikkäiset ikkunat (ja lassot), jotka sen tekivät, joten ne venyvät samalla tavalla. Ilman ikkunaa kohteet siirtyvät kokonaan.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliakset: `AR`; tai {{ui:Matriisi}}. `Valitse kohteet`, sitten `Anna matriisin tyyppi [Suorakulmainen/POlar] <Suorakulmainen>` (vain ARRAY).

- Suorakulmainen alkaa 4 sarakkeesta × 3 rivistä, välit 1,5-kertaisina kohteiden kokoon nähden, esikatselussa. `Anna vaihtoehto [Sarakkeet (COU)/Väli (S)/Sarakkeet (COL)/Rivit (R)/Lopeta (X)] <X>`: `COU` kysyy sarakkeet ja rivit, `S` sarakkeiden ja rivien väliset etäisyydet (negatiivinen menee vasemmalle tai alas), `COL` ja `R` kumpikin yhteen suuntaan.
- Napakoordinaatti kysyy `Määritä matriisin keskipiste`, alkaa 6 kohteesta ympäri ja kiertyneenä. `Anna vaihtoehto [Kohteet (I)/Täyttökulma (F)/Kierrä kohteet (ROT)/Lopeta (X)] <X>`: `I` kohteet, `F` täytettävä kulma (+ vastapäivään, − myötäpäivään), `ROT` Kyllä tai Ei.
- {{key:Enter}} (Lopeta) tekee kopiot tavallisina kohteina. Yksi kumoamisvaihe.
- `AS` (Assosiatiivinen) vaihtaa tavallisten kopioiden ja matriisin välillä, joka pysyy muokattavana: yksi kohde, jota muutat myöhemmin {{cmd:ARRAYEDIT}}-komennolla, otteilla tai Ominaisuudet-paneelissa. Valinta muistetaan ({{cmd:ARRAYASSOCIATIVITY}}); aloitus on tavallisissa kopioissa.

### ARRAYPATH

Kopioita käyrää pitkin. `Valitse kohteet`, sitten `Valitse polun käyrä`: viiva, kaari, ympyrä, ellipsi, murtoviiva tai spline (ei yksi kopioitavista kohteista). Polku alkaa sen päästä, joka on lähempänä kohteita, ja ensimmäinen kohde on kohteet siellä, missä ne ovat.

- `Anna vaihtoehto [Menetelmä (M)/Kohteet (I)/Väli (SP)/Kohdistus (AL)/Assosiatiivinen (AS)/Lopeta (X)] <X>`, esikatselulla. `M`: `Jaa` levittää kohteet tasaisesti koko polulle, `Mittaa` asettaa yhden joka tietyn matkan välein. `I`: kohteiden määrä (Mittaa-tilassa 0 tarkoittaa niin monta kuin mahtuu; polun päätä suurempi luku rajataan siihen, mikä mahtuu). `SP`: kohteiden väli polkua pitkin (vaihtaa Mittaa-tilaan). `AL`: Kyllä kääntää jokaisen kohteen seuraamaan polkua, Ei pitää ne pystyssä.
- `AS` kuten {{cmd:ARRAY}}-komennossa. Kun se on päällä, matriisi säilyttää oman kopionsa polun muodosta: polun käyrän muokkaaminen jälkikäteen ei siirrä kohteita.
- Se hylkää polun, joka ei ole käyrä, ja yhden kohteen.

### ARRAYEDIT

Muuttaa Assosiatiivinen-vaihtoehdolla tehtyä matriisia. `Valitse matriisi` (tai valitse se ensin). Se tulostaa matriisin nykyisen tilan ja kysyy, kunnes {{key:Enter}}:

- Suorakulmainen: `COL` sarakkeet ja niiden väli, `R` rivit ja niiden väli, `A` sarakkeiden kulma.
- Napakoordinaatti: `I` kohteet, `F` täyttökulma, `ROT` kierrä kohteet Kyllä tai Ei.
- Polku: `M` Jaa tai Mittaa, `I` kohteet, `SP` väli, `AL` kohdistus polun mukaan.
- `S` (Lähde) avaa kohteet, jotka matriisi toistaa, omillaan, kuten lohkoeditori. Piirrä ja muokkaa siellä; {{cmd:ARRAYCLOSE}} tallentaa tai hylkää, ja jokainen kohde seuraa.
- `REP` (Korvaa): `Valitse korvaavat kohteet`, `Määritä korvaavien kohteiden peruspiste`, sitten napsauta korvattavia kohteita ja {{key:Enter}}. Ne kohteet näyttävät korvaavan kohteen; korvaavat kohteet poistuvat piirustuksesta ja elävät matriisissa. `RES` (Palauta) näyttää lähdekohteet jokaisessa kohteessa uudelleen.
- Jokainen muutos on yksi kumoamisvaihe. Se hylkää tavalliset kopiot, tavallisen lohkoviitteen ja matriisin lukitulla tasolla.

Samat luvut ovat Ominaisuudet-paneelissa kohdassa Matriisi, ja matriisilla on otteet: sen peruspiste siirtää sitä, toisen kohteen ote asettaa välin, viimeisen kohteen jälkeinen ote asettaa määrän (napakoordinaatti: toinen kohde asettaa kohteiden määrän, viimeinen kohde täyttökulman). {{cmd:EXPLODE}} muuttaa matriisin takaisin tavallisiksi kopioiksi.

### ARRAYCLOSE

Lopettaa {{cmd:ARRAYEDIT}}-lähteen muokkaamisen: `Tallennetaanko muutokset matriisin lähdekohteisiin? [Tallenna/Hylkää] <Tallenna>`. Se kertoo, jos mitään matriisin lähdekohteita ei ole auki. {{cmd:BCLOSE}} tekee saman.

### ARRAYASSOCIATIVITY

`Anna uusi arvo ARRAYASSOCIATIVITY-komennolle (1 = matriisit pysyvät muokattavina, 0 = tavalliset kopiot)`. Asettaa, mistä {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR ja {{cmd:ARRAYPATH}} aloittavat; niiden vaihtoehto `AS` muuttaa samaa asetusta. Muistetaan tässä selaimessa.

### OFFSET

Aliakset: `O`. Viivat, kaaret, ympyrät ja murtoviivat.

Kun murtoviiva siirtyy ulospäin ja sen suorat osuudet erkanevat kulmassa, {{cmd:OFFSETGAPTYPE}} päättää, miten aukko suljetaan.

- `Määritä siirtymän etäisyys [Läpi] <viimeisin etäisyys tai Läpi>`
- `Valitse siirrettävä kohde`, sitten `Määritä siirtymän puoli` (tai Läpi-tilassa `Määritä läpäisevä piste`), toistuu, kunnes Enter.

### OFFSETGAPTYPE

- `Siirtymän kulma-aukot: 0 pidennä, 1 pyöristä, 2 viisto`: miten {{cmd:OFFSET}} sulkee aukot murtoviivan ulkonurkissa. `0` pidentää osuudet, kunnes ne kohtaavat (aloitusasetus), `1` yhdistää ne vanhan kulman ympäri kaarella, `2` suoralla leikkauksella. Sisäkulmiin ja kaarisegmentteihin tämä ei vaikuta. Säilyy tämän istunnon ajan.

### EXTRIM

{{cmd:EXTRIM}} typistää kaiken yhdeltä puolelta reunaa. Valitse leikkausreuna (viiva, kaari, ympyrä, murtoviiva, ellipsi, spline tai apuviiva), sitten piste puolella, joka tyhjennetään: jokainen viiva, kaari, ympyrä, murtoviiva ja apuviiva, joka ylittää reunan, menettää osansa sillä puolella, josta se alkaa reunasta. Puolta valitessasi osat, jotka menisivät pois, seuraavat osoitinta. Suljetulle reunalle puolet ovat sisä- ja ulkopuoli. Kohteet, jotka vain koskettavat reunaa, sekä teksti, viivoitukset, splinit ja ellipsit, jotka ylittävät sen, jäävät ennalleen. Yksi kumoamisvaihe.

### TRIMEXTENDMODE

- `Anna uusi arvo TRIMEXTENDMODE-komennolle (1 Pika, 0 Vakio)`: miten {{cmd:TRIM}} ja {{cmd:EXTEND}} alkavat. `1` Pika: jokainen kohde on leikkausreuna tai rajaus. `0` Vakio: ne kysyvät reunat ensin. Myös `(setvar "TRIMEXTENDMODE" 0)` LISP-koodissa.

### TRIM

Aliakset: `TR`. Tulostaa ensin `Nykyiset asetukset: Pika-tila (TRIMEXTENDMODE 1), reunat: Ei jatkoa, vetäminen piirtää polun`. Pika-tilassa jokainen näkyvä kohde on leikkausreuna, ja kohde, jota mikään ei ylitä, poistetaan; Vakio-tilassa se kysyy ensin `Valitse leikkausreunat (Enter = jokainen kohde)` ja leikkaa vain niissä.

- `Valitse typistettävä kohde tai valitse Shift-napsautuksella pidentääksesi [Leikkausreunat (T)/Aita (F)/Ristikkäinen (C)/Tila (O)/Reuna (E)/Poista (R)/Kumoa (U)]`, toistuu: napsauta poistettavaa osaa (se näkyy harmaana ja katkoviivana, kun osoitin lepää sen päällä), vedä polku useiden osien läpi (kaikki menevät yhdellä askeleella), tai napsauta kahta tyhjää kohtaa aidaksi niiden väliin. {{key:Shift}} pidentää sen sijaan. `T` valitsee leikkausreunat (Vakio-tila), `F` kysyy aidan pisteitä, `C` kaksi ikkunan kulmaa (osittain sisällä olevat osat menevät), `O` kysyy `Anna typistystilan vaihtoehto [Pika/Vakio]`, `E` kysyy `Anna implisiittisen reunan jatkotila [Jatka/Ei jatkoa]` (EDGEMODE), `R` poistaa valitsemasi kohteet, `U` kumoaa viimeisen valinnan tai vedon. Enter lopettaa. Katso [Typistä ja pidennä](topic:trim-and-extend).

- Napsautus viivoitukseen leikkaa viivoituksen: leikkausreunat jakavat viivoitetun alueen, ja napsauttamasi osa poistetaan (sen paikalle ei jää piirrettyä ääriviivaa). Viivoitus säilyttää kuvionsa tai liukuvärinsä; viivoitus, joka oli linkitetty rajaansa, ei ole sen jälkeen linkitetty, koska se ei enää täytä sitä. Se kertoo, jos mikään leikkausreuna ei jaa viivoitusta siinä kohdassa, jos napsautus on viivoituksen ulkopuolella, ja jos mitään ei jäisi (käytä {{cmd:ERASE}}). Vedetty polku tai aita ei leikkaa viivoituksia.

### EXTEND

Aliakset: `EX`. Sama kuin TRIM, toisinpäin: `Valitse pidennettävä kohde tai valitse Shift-napsautuksella typistääksesi [Rajausreunat (B)/Aita (F)/Ristikkäinen (C)/Tila (O)/Reuna (E)/Kumoa (U)]`. Napsautus pidentää lähintä päätä seuraavaan rajaan; vedetty polku tai aita pidentää jokaista kohdetta, jonka se ylittää; {{key:Shift}} typistää. `B` valitsee rajausreunat (Vakio-tila). Tila ja Reuna ovat yhteisiä TRIMin kanssa.

### LINKVIEWS

Aliakset: `SYNCVIEWS`; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Linkitä ruutujen näkymät}}, tai linkkikuvake piirustusvälilehdillä. `Linkitä ruutujen näkymät [ON/OFF]` (Enter vaihtaa toiseen tilaan): kun se on päällä, aktiivisen ruudun panoroiminen tai zoomaus siirtää jokaista ruutua, joka näyttää samantyyppistä tilaa. Katso [Jaa näyttö](topic:split-screen).

### OPENIN3D

Ei aliaksia; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Avaa ModelCraftissa}}, missä 3D-mallinnussovellus ottaa vastaan siirretyn piirustuksen. Avaa sen siellä uudessa välilehdessä DWG-tiedostona (mitään ei lähetetä). Jos selain estää välilehden, se kertoo siitä.

### LASSOMODE

`Anna uusi arvo LASSOMODE-komennolle (1 = lasso, 0 = suorakulmio)`: mitä painaminen ja vetäminen tyhjässä kohdassa piirtää. Sama kuin Asetukset › CadCraft › Vetäminen valitsemiseen. Katso [Lassovalinta](topic:lasso-selection).

### FILLET

Aliakset: `F`. Viivat, kaaret, ympyrät ja murtoviivat. Tulostaa ensin `Nykyiset asetukset: Tila = TRIM, Säde = 0`.

- `Valitse ensimmäinen kohde [Kumoa (U)/Murtoviiva (P)/Säde (R)/Typistä (T)/Useita (M)]`
  - `R` kysyy `Määritä pyöristyksen säde <viimeisin>`. `T` kysyy `Anna typistystilan vaihtoehto [Typistä/Ei typistystä]`: Ei typistystä jättää kohteet ennalleen ja lisää vain kaaren.
  - `M` pitää komennon käynnissä useammille kulmille, kunnes {{key:Enter}}; `U` ottaa takaisin viimeisen kulman poistumatta komennosta.
  - `P` kysyy `Valitse 2D-murtoviiva [Säde]` ja pyöristää jokaisen kulman, jossa kaksi suoraa osuutta kohtaa. Pyöristykset, joita sillä jo on, korvautuvat uudella säteellä; säde 0 poistaa ne. Kulmat, joiden sivut ovat liian lyhyitä säteelle, jätetään ja lasketaan.
- `Valitse toinen kohde tai valitse Shift-napsautuksella soveltaaksesi kulmaan [Säde (R)]`. Pidä {{key:Shift}} painettuna napsauttaessasi terävää kulmaa säteestä riippumatta.

Napsauta jokaista kohdetta osalla, jonka haluat säilyttää. Kaksi viivaa, jotka eivät kohtaa, pidennetään. Kaksi yhdensuuntaista viivaa saavat puoliympyrän aukon yli, ensimmäisen viivan päähän napsautuksesi lähimpänä. Ympyrää ei koskaan leikata. Kaksi vierekkäistä osuutta samassa murtoviivassa saavat kaaren murtoviivan sisään; murtoviiva ja toinen kohde toimivat, kun leikkaus osuu murtoviivan ensimmäiseen tai viimeiseen osuuteen.

### CHAMFER

Aliakset: `CHA`. Viivat ja murtoviivojen suorat osuudet. Tulostaa ensin nykyiset etäisyydet (tai pituuden ja kulman).

- `Valitse ensimmäinen viiva [Kumoa (U)/Murtoviiva (P)/Etäisyys (D)/Kulma (A)/Typistä (T)/Menetelmä (E)/Useita (M)]`
  - `D` kysyy `Määritä ensimmäisen viiston etäisyys <viimeisin>` ja `Määritä toisen viiston etäisyys <ensimmäinen>`: ensimmäinen leikataan valitsemastasi ensimmäisestä viivasta, toinen toisesta.
  - `A` kysyy `Määritä viiston pituus ensimmäisellä viivalla` ja `Määritä viiston kulma ensimmäisestä viivasta`.
  - `E` (Menetelmä) valitsee, kumpaa kahdesta seuraava viisto käyttää. `T`, `M`, `U` ja `P` toimivat kuten {{cmd:FILLET}}-komennossa.
- `Valitse toinen viiva tai valitse Shift-napsautuksella soveltaaksesi kulmaan [Etäisyys (D)/Kulma (A)/Menetelmä (E)]`. {{key:Shift}}+napsautus tekee terävän kulman.

Etäisyys, joka on viivaa pidempi, hylätään (`Etäisyys on liian suuri.`).

### BREAK and BREAKATPOINT

Aliakset: `BR`. `Valitse kohde` (missä napsautat, on ensimmäinen piste), `Määritä toinen katkaisupiste [Ensimmäinen piste (F)]`; `F` kysyy `Määritä ensimmäinen katkaisupiste` ja `Määritä toinen katkaisupiste`. Niiden välinen osa poistuu; ympyrällä vastapäivään ensimmäisestä pisteestä. BREAKATPOINT kysyy `Määritä katkaisupiste` ja jakaa kohteen kahtia siinä (ei ympyrä).

### LENGTHEN

Aliakset: `LEN`. `Valitse mitattava kohde [Muutos (DE)/Prosentti (P)/Yhteensä (T)/Dynaaminen (DY)]`: napsautus tulostaa `Nykyinen pituus` (ja kaaren sisältyvän kulman) ja kysyy uudelleen. `DE` kysyy `Anna pituuden muutos (negatiivinen lyhentää) [Kulma]`, `P` `Anna pituus prosentteina`, `T` `Määritä kokonaispituus [Kulma]`, `DY` vetää. Sitten `Valitse muutettava kohde [Kumoa (U)]`, toistuu: päätä lähempänä oleva napsautus siirtyy. Viivat, kaaret ja avoimet murtoviivat.

### JOIN

Aliakset: `J`. `Valitse yhdistettävät kohteet`. Viivat, kaaret ja avoimet murtoviivat, jotka kohtaavat päästä päähän, muuttuvat murtoviivoiksi (suljetuiksi, kun ketju sulkeutuu); samalle suoralle osuvat viivat muuttuvat yhdeksi viivaksi; saman ympyrän kaaret muuttuvat yhdeksi kaareksi tai ympyräksi. Historia kertoo, kuinka monta kohdetta yhdistettiin ja kuinka monta ei.

### MATCHPROP

Aliakset: `MA`, `PAINTER`. `Valitse lähdekohde`, sitten `Valitse kohdekohteet [Asetukset]` ja {{key:Enter}}. Kopioi tason ja värin, ja saman tyyppisten kohteiden välillä tekstin korkeuden ja leveyden, mitoitusten koot tai viivoituskuvion. `S` kysyy `Käännä ominaisuus päälle tai pois [Väri/Taso/Teksti/Mitoitus/Viivoitus]`, toistuu, kunnes {{key:Enter}}; valinta muistetaan istunnon ajan.

### EXPLODE

Aliakset: `X`. Murtoviivat muuttuvat viivoiksi ja kaariksi, lohkoviitteet muuttuvat kohteikseen, mitoitukset muuttuvat viivoiksi, nuoliksi ja tekstiksi. Matriisi, joka pysyy muokattavana ({{cmd:ARRAYEDIT}}), muuttuu tavallisiksi kopioiksi kohteistaan.

- `Valitse kohteet`

### GROUP

Aliakset: `G`. {{cmd:GROUP}} antaa valituille kohteille nimen, jonka ne jakavat. Valitse kohteet, kirjoita nimi (ei välilyöntejä; `?` luettelee ryhmät; Enter tekee nimettömän ryhmän) ja, nimetylle ryhmälle, valinnainen kuvaus. Tästä eteenpäin napsautus jollekin niistä, tai ikkuna, joka ottaa yhden, valitsee ne kaikki, joten ne siirtyvät, kopioituvat ja poistuvat yhdessä; jokainen kohde on silti oma kohteensa. Kohde voi olla useassa ryhmässä. Kokonaisen ryhmän kopio on uusi nimetön ryhmä; yhden jäsenen kopio yksinään liittyy ryhmään. Ryhmät kuuluvat avaruuteen, jossa ne tehtiin (malli tai arkki). Ne säilyvät, kun tallennat DWG- tai DXF-muodossa ja avaat tiedoston uudelleen CadCraftissa; DXF 2000 -tiedostot kantavat niitä myös ryhmäobjekteina muille ohjelmille, ja toisessa ohjelmassa tehdyt ryhmät luetaan, kun DXF tai DWG avataan.

### UNGROUP

{{cmd:UNGROUP}} purkaa ryhmät: valitse ryhmien kohteita (jokainen ryhmä, johon ne kuuluvat, puretaan) tai kirjoita `Name` ja ryhmän nimi. Kohteet jäävät piirustukseen. Yksi kumoamisvaihe palauttaa ryhmät.

### GROUPEDIT

{{cmd:GROUPEDIT}} muuttaa yhtä ryhmää. Valitse yksi sen kohteista, tai `Name` ja sen nimi; jo valittu ryhmä otetaan sellaisenaan. Sitten: `Add` kohteita (valitaan yksi kerrallaan, ei ryhmittäin), `Remove` kohteita, `REName` ryhmä, muuta sen `Description`, tai aseta `Selectable` (valitaanko napsautus yhdestä kohteesta koko ryhmä). `eXit` tai Enter lopettaa. Ryhmä, jossa ei ole enää kohteita, on poissa.

### PICKSTYLE

- `Ryhmävalinta: 0 napsautus valitsee yhden kohteen, 1 koko ryhmän`: arvolla `1` (aloitusasetus) napsautus tai ikkuna ryhmitetyssä kohteessa valitsee koko ryhmän; arvolla `0` yksittäiset kohteet, jotta yhden jäsenen voi muokata. Säilyy istunnon ajan.

## Leikepöytä

CadCraftin oma leikepöytä: se toimii piirustuksen sisällä, piirustusten välillä ja CadCraft-välilehtien välillä tässä selaimessa. Katso [Kopioi, liitä ja monista](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, tai {{ui:Kopioi}} ryhmässä {{ui:Muokkaus}}. Kopioi kohteet leikepöydälle lohkoineen ja tasoineen. Kohteet pysyvät valittuina.

- `Valitse kopioitavat kohteet` (ohitetaan, kun kohteet on jo valittu)

### CUTCLIP

{{key:Mod+X}}, tai {{ui:Leikkaa}} valikossa {{ui:Lisää}}. Kopioi kohteet leikepöydälle ja poistaa ne sitten (yksi kumoamisvaihe).

- `Valitse leikattavat kohteet` (ohitetaan, kun kohteet on jo valittu)

### COPYBASE

Kopioi kohteet leikepöydälle valitsemasi peruspisteen kanssa; liittäminen sijoittaa tämän pisteen.

- `Määritä peruspiste`
- `Valitse kopioitavat kohteet`

### PASTECLIP

{{key:Mod+V}}, tai {{ui:Liitä}} ryhmässä {{ui:Muokkaus}}. Kopio seuraa kohdistinta, roikkuen sen laajuuden vasemmasta alakulmasta (tai keskipisteestään, tai {{cmd:COPYBASE}}-pisteestä; katso [CadCraftin asetukset](topic:settings)).

- `Määritä lisäyspiste`

Liitetyt kohteet ovat valittuina. Lohko, joka piirustuksessa on jo samalla nimellä, säilyttää tämän piirustuksen määritelmän.

Kun MarkupCraftissa kopioitu alue on uudempi kuin CadCraftin kopio (ja alle 6 tuntia vanha), {{key:Mod+V}} ja `PASTECLIP` liittävät sen alueen sen sijaan: katso `PASTEAREA`.

### PASTEAREA

Aliakset: `PAREA`. {{ui:Liitä kopioitu alue}} valikossa {{ui:Lisää}}. Liittää MarkupCraftissa {{ui:Kopioi alue}}-komennolla kopioidun alueen kuvana todellisessa koossaan. Katso [Kuvat piirustuksessa](topic:pictures).

- `Määritä kopioidun alueen vasen alakulma`
- `Skaalaa sen paperikoko kertoimella (100 1:100-arkille; Pisteet: kaksi pistettä sillä ja niiden todellinen etäisyys) [Pisteet] <1>` (vain kun arkilla ei ollut piirustuksen mittakaavaa): luku, {{key:Enter}} paperikoolle, tai `P`, sitten `Liitetyn alueen ensimmäinen piste`, `Liitetyn alueen toinen piste` ja niiden todellinen etäisyys.

### PASTEORIG

{{key:Mod+Shift+V}}, tai {{ui:Liitä samaan paikkaan}} valikossa {{ui:Lisää}}. Liittää koordinaatteihin, joista kohteet kopioitiin. Ei kysy mitään.

### DUPLICATE

Aliakset: `DUP`. {{key:Mod+D}}, tai {{ui:Monista ja siirrä}} valikossa {{ui:Lisää}}. Kopio kohteista liikkuu osoittimen mukana siitä, missä ne ovat; {{key:Esc}} ei jätä mitään. Ei käytä leikepöytää.

- `Valitse monistettavat kohteet` (ohitetaan, kun kohteet on jo valittu)
- `Määritä, minne kopio menee (Esc ei jätä mitään)`: napsauta, kirjoita piste, `@dx,dy` (osoittimen sijainnista), tai etäisyys kohti kohdistinta.

### SELECT

Kysyy `Valitse kohteet` (kaikilla alla olevilla vaihtoehdoilla) ja jättää valitut kohteet valituiksi seuraavaa komentoa varten tai myöhempää `P`:tä varten.

### QSELECT

Aliakset: `QS`. Selaimessa {{ui:Pikavalinta}}-valintaikkuna (katso [Valitse kohteet](topic:select-objects#select-by-a-rule-quick-select)). Ilman sitä komentorivi kysyy `Anna kohdetyyppi`, `Anna ominaisuus`, `Anna operaattori [=/<>/>/</*/Valitse kaikki] <=>` ja `Anna arvo`. Osumat tulevat valinnaksi.

### SELECTSIMILAR

Aliakset: `SIM`. `Valitse kohteet [Asetukset (SE)]` (tai nykyinen valinta): valitsee jokaisen saman tyyppisen kohteen, jolla on sama taso ja väri (sekä lohkon nimi ja viivoituskuvio). `SE` kysyy `Käännä ominaisuus päälle tai pois [Taso (LA)/Väri (CO)/Nimi (NA)/Kuvio (PA)/Korkeus (HE)]`, toistuu, kunnes {{key:Enter}}.

### FIND

Ei aliaksia; tai {{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Etsi ja korvaa}}. Selaimessa {{ui:Etsi ja korvaa}}-valintaikkuna (katso [Lisää teksti ja merkinnät](topic:text#find-and-replace-words)). Ilman sitä: `Anna etsittävä teksti`, sitten `Anna korvaava teksti (Enter: valitse löytynyt)`. Etsii tekstistä, attribuuttiarvoista ja mitoitustekstistä, avoimessa välilehdessä tai valinnassa.

### SELECTALL and DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) valitsee jokaisen muokattavissa olevan kohteen avoimella välilehdellä. `DESELECT` (aliakset `AI_DESELECT`, `SELECTNONE`; tai {{key:Esc}}) tyhjentää valinnan.

## Mitoitukset

### DIMLINEAR

Aliakset: `DLI`, `DIMLIN`. Vaaka- tai pystysuora etäisyys.

- `Määritä ensimmäisen apuviivan lähtöpiste [Valitse kohde (S)]` (Enter tai `S`: `Valitse mitoitettava kohde`, sitten napsauta viivaa, kaarta, ympyrää tai murtoviivan osuutta)
- `Määritä toisen apuviivan lähtöpiste`
- `Määritä mittaviivan sijainti [Teksti (T)/Vaakasuora (H)/Pystysuora (V)/Kierretty (R)]`. `T` kysyy tekstiä (`<>` on mitattu arvo), `H` ja `V` kiinnittävät suunnan, `R` kysyy `Määritä mittaviivan kulma <0>`.

### DIMALIGNED

Aliakset: `DAL`, `DIMALI`. Kahden pisteen välinen todellinen etäisyys.

- Lähtöpisteet kuten {{cmd:DIMLINEAR}}-komennossa, sitten `Määritä mittaviivan sijainti [Teksti]`.

### DIMANGULAR

Aliakset: `DAN`, `DIMANG`.

- `Valitse kaari, ympyrä tai viiva, tai anna Enter kärkipisteelle`
- Kaari: sen kulma. Ympyrä: `Määritä kulman toinen päätepiste`. Viiva: `Valitse toinen viiva`. Enter: `Määritä kulman kärkipiste`, `Määritä kulman ensimmäinen päätepiste`, `Määritä kulman toinen päätepiste`.
- `Määritä mittaviivan sijainti [Teksti]`: napsauta kulman sisällä, jota mitataan.

### DIMRADIUS and DIMDIAMETER

Aliakset: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Valitse kaari tai ympyrä`, sitten `Määritä mittaviivan sijainti [Teksti]`.

### DIMCONTINUE

Aliakset: `DCO`, `DIMCONT`. Jatkaa viimeisimmästä tehdystä lineaarisesta tai linjassa olevasta mitoituksesta (tai kysyy `Valitse lineaarinen tai linjassa oleva mitoitus`).

- `Määritä toisen apuviivan lähtöpiste [Kumoa (U)]`, toistuu, kunnes Enter.

### DIMBASELINE

Aliakset: `DBA`, `DIMBASE`. Kuten {{cmd:DIMCONTINUE}}, mutta jokainen mitoitus alkaa ensimmäisestä lähtöpisteestä ja pinotaan kauemmas ulospäin.

### DIMORDINATE

Aliakset: `DOR`, `DIMORD`. `Määritä kohdan sijainti`, sitten `Määritä johtoviivan päätepiste [Xdatum/Ydatum/Teksti]`. Kirjoittaa, kuinka kaukana kohta on UCS:n origosta X- tai Y-suunnassa johtoviivalla: johtoviiva, joka kulkee enimmäkseen ylös tai alas, lukee X, ja sivuttain kulkeva lukee Y; `Xdatum` ja `Ydatum` kiinnittävät, kumpi. Aseta origo ensin komennolla {{cmd:UCS}} (ilman sitä se on piirustuksen 0,0). Otteet siirtävät kohtaa, origoa ja johtoviivan päätettä, ja arvo seuraa. Tallentuu oikeana ordinaattimitoituksena DWG- ja DXF-muodossa. Hylkää johtoviivan päätteen, joka on kohdan päällä.

### DIMARC

Aliakset: `DAR`. `Valitse kaari tai murtoviivan kaarisegmentti`, sitten `Määritä kaaren pituusmitoituksen sijainti [Teksti]`. Mittaa kaarta pitkin (ei jännettä) ja kirjoittaa kaaren merkin arvon eteen. Hylkää kokonaisen ympyrän, viivan tai suoran murtoviivan osuuden. DWG säilyttää sen kaaren pituusmitoituksena; DXF säilyttää sen kulmamitoituksena, jonka tekstinä on pituus, ja CadCraft avaa sen uudelleen kaaren pituusmitoituksena.

### DIMJOGGED

Aliakset: `DJO`, `JOG`. `Valitse kaari tai ympyrä`, `Määritä keskipisteen sijainnin ohitus`, `Määritä taiton sijainti`. Sädemitoitus käyrälle, jonka keskipiste on kaukana tai arkin ulkopuolella: mittaviiva alkaa pisteestä, jonka annat keskipisteen sijaan, ja siinä on taitos, ja se kirjoittaa silti todellisen säteen. DWG säilyttää sen taitettuna sädemitoituksena; DXF säilyttää sen sädemitoituksena, ja CadCraft avaa sen uudelleen taitettuna.

### DIMJOGLINE

Aliakset: `DJL`. `Valitse mitoitus, johon lisätään taitos [Poista (R)]`, sitten `Määritä taiton sijainti (tai paina Enter)`. Asettaa taittomerkin lineaarisen tai linjassa olevan mitoituksen viivalle, jotta näkee, ettei etäisyyttä ole piirretty mittakaavassa; arvo ei muutu. `Poista` ottaa sen pois. Hylkää muun tyyppiset mitoitukset.

### QDIM

Ei aliaksia. `Valitse mitoitettava geometria`, sitten `Määritä mittaviivan sijainti [Jatkuva/Porrastettu/Peruslinja/Ordinaatti/Säde/Halkaisija/datumPoint]`. Mitoittaa useita kohteita yhdellä askeleella: viivojen ja murtoviivan osuuksien päistä, ympyröiden ja kaarien keskipisteistä, pisteistä ja lohkoviitteistä. Sijainti kohteiden yläpuolella tai alapuolella mittaa poikki, sivulla mittaa ylös. `Continuous` ketjuttaa pisteet, `Baseline` mittaa kaiken ensimmäisestä, `Staggered` sisäkkäistää pareja keskeltä ulospäin, `Ordinate` antaa jokaiselle pisteelle etäisyyden datumista (`datumPoint` valitsee uuden), `Radius` ja `Diameter` mitoittavat jokaisen valitun ympyrän ja kaaren. Tila muistetaan. Kaikki, mitä se tekee, on yksi kumoamisvaihe. Se kertoo, kun pisteitä on alle kaksi tai säteille ja halkaisijoille ei ole kaaria tai ympyröitä.

### DIMBREAK

Aliakset: `DBREAK`. `Valitse mitoitukset, joihin lisätään tai poistetaan katkoja`, sitten `Katkaise, missä muut kohteet ylittävät [Auto/Manuaalinen/Poista] <Auto>`. `Auto` jättää katkon mitta- ja apuviivoihin aina, kun muu kohde ylittää ne, ja laskee katkot uudelleen, kun nuo kohteet tai mitoitus siirtyvät. `Manuaalinen` (yksi mitoitus) kysyy kaksi pistettä ja jättää niiden väliin katkon. `Poista` ottaa kaikki katkot pois. Katko on 1,5-kertainen mitoituksen tekstin korkeus.

### DIMSPACE

Ei aliaksia. `Valitse peruskohdan mitoitus`, `Valitse välitettävät mitoitukset`, `Anna välin arvo tai Auto <Auto>`. Siirtää rinnakkaisten lineaaristen ja linjassa olevien mitoitusten (tai samasta kärjestä lähtevien kulmamitoitusten) mittaviivat niin, että ne ovat yhtä kaukana toisistaan, laskettuna peruskohdan mitoituksesta, kukin puolellaan, jolla se on. `0` asettaa ne peruskohdan kanssa samaan linjaan; `Auto` on kaksinkertainen peruskohdan tekstin korkeus. Mitoitukset, jotka eivät ole peruskohdan suuntaisia, jätetään ennalleen.

### DIMINSPECT

Ei aliaksia. `Valitse mitoitukset`, `Tarkastuskehyksen muoto [Pyöreä/Kulmikas/Ei mitään/poista] <Pyöreä>`, `Anna nimike`, `Anna tarkastustiheys <100%>`. Piirtää kehyksen arvon ympärille, jonka eteen tulee nimike ja jonka jälkeen tarkastustiheys. `poista` ottaa kehyksen pois. Toleranssiteksti pysyy arvon yhteydessä.

### DIMOVERRIDE

Aliakset: `DOV`, `DIMOVER`. `Anna ohitettavan mitoitusmuuttujan nimi tai Tyhjennä`, `Anna uusi arvo …`, uudelleen, kunnes Enter, sitten `Valitse mitoitukset`. Muuttaa näitä asetuksia vain valituissa mitoituksissa; mitoitustyyliä ei muuteta. Ottaa muuttujat, jotka ovat luku tai kytkin (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Tyhjennä` palauttaa valitut mitoitukset niiden tyyliin. Hylkää nimen, joka ei ole tällainen muuttuja, ja arvon, jota se ei voi ottaa.

### DIMREASSOCIATE

Aliakset: `DRE`, `DIMREASSOC`. `Valitse mitoitukset`, sitten jokaiselle sen apuviivojen lähtöpisteet (`Määritä ensimmäisen apuviivan lähtöpiste kohteelle`: kiinnitä päähän tai viivan keskikohtaan, murtoviivan kulmaan, keskipisteeseen; Enter jättää pisteen vapaaksi), tai säteelle, halkaisijalle, taitetulle säteelle tai kaaren pituusmitoitukselle `Valitse kaari tai ympyrä`. Mitoitus sidotaan sitten näihin kohteisiin: kun ne siirtyvät tai muuttavat kokoaan, se seuraa samalla kumoamisvaiheella ja mittaa uudelleen. Pisteen siirtäminen käsin tai kohteen poistaminen katkaisee sidoksen. Sidos tallentuu DWG- ja DXF 2000 -muodossa CadCraftin omana tietona; muut ohjelmat näkevät tavallisen mitoituksen.

### DIMDISASSOCIATE

Aliakset: `DDA`, `DIMDISASSOC`. `Valitse mitoitukset`. Vapauttaa ne kohteista, joihin ne on sidottu; mikään ei siirry.

### CENTERMARK

Aliakset: `CM`, `DIMCENTER`, `DCE`. `Valitse ympyrä tai kaari keskimerkin lisäämiseksi`, uudelleen, kunnes Enter. Piirtää rastin keskelle ja neljä keskiviivaa juuri käyrän ulkopuolelle (viivatyyppi CENTER), tavallisina viivoina nykyisellä tasolla; koko määräytyy nykyisen mitoitusasetuksen nuolen koosta ja yleisestä mittakaavasta, ja se kääntyy UCS:n mukaan. Ne eivät seuraa ympyrää, jos se siirtyy.

### CENTERLINE

Aliakset: `CL`. `Valitse ensimmäinen viiva`, `Valitse toinen viiva`. Piirtää viivan kahden viivan puoliväliin (puolittajaa pitkin, kun ne kohtaavat), hieman pidempänä kuin ne ovat, viivatyypillä CENTER. Tavallinen viiva: se ei seuraa kahta viivaa.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Ei aliaksia. Jokainen kysyy `Anna uusi arvo … <nykyinen>` ja asettaa sen koon **uusille** mitoituksille: yleinen mittakaava, tekstin korkeus, nuolen koko, desimaalit (enintään 8), väli tekstin ympärillä, jatke mittaviivan ulkopuolelle, siirtymä origosta. Katso [Aseta mitoitusten koot](topic:dimension-settings).

### DIMLUNIT

Mitoitusasetus: uusien mitoitusten pituuden muoto vain (1 tieteellinen, 2 desimaali, 3 tekninen, 4 arkkitehtuuri, 5 murto).

### DIMSTYLE and -DIMSTYLE

Aliakset: `DST`, `DDIM`, `D`. Mitoitustyylien hallinta: {{ui:Aseta nykyiseksi}}, {{ui:Uusi…}}, {{ui:Muokkaa…}}, {{ui:Nimeä uudelleen…}}, {{ui:Poista}}, {{ui:Vertaa…}}, {{ui:Käytä valittuihin}}. `-DIMSTYLE` komentorivillä: `Mitoitustyyli [Palauta/Tallenna/Poista/Käytä/Vertaa/Nimeä uudelleen/Luettelo]`. Katso [Aseta mitoitusten koot](topic:dimension-settings#named-dimension-styles).

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Mitoituksen muokkaus [Koti/Uusi/Kierrä/Vino] <Koti>`, sitten mitoitukset (tai jo valitut). Uusi kysyy tekstin (`<>` = mitta); Kierrä kulman (0 palauttaa tekstin); Vino apuviivojen kulman X-akselista (Enter = ei mitään; vain lineaariset ja linjassa olevat mitoitukset). `DIMTEDIT` (`DIMTED`): `Mitoitusteksti [Vasen/Oikea/Keski/Koti/Kulma] <Keski>`. Katso [Aseta mitoitusten koot](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliakset: `DTU`. `Yksiköt uusien mitoitusten tekstissä [Piirustuksen yksiköt/mm/cm/m/km]`, tai kun mitoituksia on valittu, `Yksiköt valittujen mitoitusten tekstissä`. Kirjoittaa mitatun pituuden siinä yksikössä, yksikkö perässä (DIMLFAC ja DIMPOST-pääte); `D` palaa piirustuksen yksikköihin. Katso [Mitoitukset mm, cm, m tai km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliakset: `RC`. Tulostaa `Kaaren pituus: … Tyyppi: …`, sitten `Määritä ensimmäinen piste [Kaaren pituus/Kohde/Suorakulmainen/Monikulmio/Vapaa]`. Suorakulmainen kysyy `Määritä vastakkainen kulma`; Monikulmio `Määritä seuraava piste (Enter sulkee pilven) [Kumoa (U)]`; Vapaa seuraa osoitinta, kunnes napsautus tai {{key:Enter}}; `O` kysyy `Valitse kohde` ja `Käännä suunta? [Kyllä/Ei] <E>` ja muuttaa kohteen pilveksi. `A` kysyy `Määritä kunkin kaaren pituus`. `R`, `P` ja `F` valitsevat seuraavan pilven tyypin. Tulos on suljettu murtoviiva kaarista.

### MLEADER

Aliakset: `MLD`; tai {{ui:Viitenuoli}}. `Määritä viitenuolen kärjen sijainti [Nuolen koko/Laskeutumisen etäisyys/Lohko]`, `Määritä viitenuolen laskeutumispaikka`, sitten teksti paikallaan olevassa ruudussa (tai ilman sitä, `Anna teksti (tyhjä rivi lopettaa)`). `Lohko` kysyy ensin lohkon nimeä, ja monivitenuoli näyttää sen lohkon tekstin sijaan. Lisää johtoviivoja: {{cmd:MLEADEREDIT}}. Tallentuu oikeana monivitenuolena DWG-muodossa; DXF säilyttää viivat, nuolen ja tekstin, jotka se piirtää.

### MLEADEREDIT

Aliakset: `MLE`. `Valitse monivitenuoli`, sitten `Määritä viitenuolen kärjen sijainti [Poista johtoviivat/Lohkon sisältö/Tekstin sisältö]`: jokainen piste lisää johtoviivan uudesta nuolen kärjestä samaan laskeutumispaikkaan, kunnes Enter. `Poista johtoviivat` ottaa pois napsauttamasi johtoviivan (monivitenuolella on vähintään yksi). `Lohkon sisältö` kysyy lohkon nimen ja näyttää sen tekstin sijaan (sen attribuutit kysytään); `Tekstin sisältö` palauttaa tekstin. Jokaisella johtoviivalla on oma otteensa. DWG säilyttää jokaisen johtoviivan ja lohkon yhdessä monivitenuolessa.

### MLEADERALIGN

Aliakset: `MLA`. `Valitse monivitenuolet`, sitten `Valitse monivitenuoli, johon kohdistetaan [Jaa/Väli/Käytä nykyistä väliä]` ja `Määritä suunta`. Siirtää muiden monivitenuolten laskeutumispaikat (ja niiden tekstin tai lohkon) valitun laskeutumispisteen kautta kulkevalle viivalle siinä suunnassa; nuolen kärjet pysyvät, mihin ne osoittavat. `Väli` asettaa niille myös tasavälin; `Jaa` kysyy kaksi pistettä ja levittää ne tasaisesti niiden väliin. Tarvitaan vähintään kaksi monivitenuolta.

### MLEADERCOLLECT

Aliakset: `MLC`. `Valitse monivitenuolet`, sitten `Määritä kootun monivitenuolen sijainti [Pysty/Vaaka]` (Enter säilyttää ensimmäisen paikan). Tekee useista yhden monivitenuolen: lohkojen sisältö menee uuteen lohkoon, joka pitää kaikki vierekkäin tai toistensa alla; tekstin sisältö muuttuu yhdeksi huomautukseksi, jossa on rivi kutakin varten. Ensimmäinen monivitenuoli säilyttää johtoviivansa; muut poistetaan. Hylkää tekstin ja lohkon sekoituksen.

### TABLE

Aliakset: `TB`; tai {{ui:Merkitse}} › {{ui:Lisää}} › {{ui:Taulukko}}. Tekee taulukon: yhden kohteen, jonka siirrät, kopioit, kierrät, skaalaat ja tulostat kuten muut, ja sen solut säilyvät datana.

- `Datarivien määrä tai [Liitä/Tiedosto/Tyyli] <3>`, sitten `Sarakkeiden määrä <3>`, `Tekstin korkeus` ja `Taulukon vasen yläkulma`. Taulukkoon tulee otsikkorivi (yksi yhdistetty solu) ja datarivien yläpuolelle sarakeotsikkorivi.
- `P`: taulukko laskentataulukon soluista leikepöydällä (teksti, jossa on sarkain solujen välissä). {{key:Ctrl+V}} tällaisten solujen ollessa leikepöydällä tekee saman, ellei CadCraftin oma kopio ole uudempi (tai jos CadCraft ei pysty päättelemään sitä: silloin se liittää oman kopionsa ja kertoo siitä). `F`: taulukko `.csv`- tai sarkainerotetusta tiedostosta. Ensimmäinen rivi tulee sarakeotsikkoriviksi; sarakeleveydet sopivat tekstiin.
- `S`: valitse tälle taululle taulukkotyyli (katso {{cmd:TABLESTYLE}}).
- Se hylkää rivi- tai sarakemäärän, joka ei ole kokonaisluku, ja enemmän soluja kuin taulukkoon mahtuu (2 000 riviä, 200 saraketta, 40 000 solua).
- {{cmd:EXPLODE}} muuttaa taulukon viivoiksi ja tekstiksi. DWG-muodossa taulukko on oikea taulukkoobjekti, jota muut ohjelmat voivat muokata; DXF-muodossa se on lohko, joka piirtää sen, ja CadCraft avaa sen uudelleen taulukkona.

- Taulukon tyyli kertoo tekstin korkeuden ja tasauksen otsikko-, väliotsikko- ja datariveille, solun marginaalin sekä siitä, mitkä reunat piirretään (ulkoreuna, rivien väliset, sarakkeiden väliset).
- `N` tekee tyylin nykyisestä ja tekee siitä nykyisen; `S` asettaa nykyisen tyylin (uudet taulukot saavat sen); `E` muokkaa yhtä: taulukot, jotka sitä käyttävät, piirretään uudelleen; `A` antaa valituille taulukoille nykyisen tyylin; `D` poistaa yhden (ei Vakio, ei nykyinen; taulukot, joissa sitä käytettiin, säilyttävät ulkoasunsa).
- Tyylit tallentuvat piirustuksen mukana (DWG ja DXF).

### TABLEEXPORT

Tallentaa taulukon näyttämän sisällön CSV-tiedostona (kaava arvonaan). `Valitse taulukko`, tai valitse se ensin. Tekstisolut, jotka alkavat `=`, `+`, `-` tai `@`, saavat johtavan `'`:n, jotta laskentataulukko ei suorita niitä.

### TABLEPASTE

Aliakset: `PASTETABLE`. Tekee taulukon leikepöydällä olevista laskentataulukon soluista ja kysyy sitten sen vasenta yläkulmaa. Sama kuin {{cmd:TABLE}} › `Liitä`.

### DATALINK

Aliakset: `DL`. `Datayhteys: [Uusi/Luettelo/Poista] <Uusi>`. `N` kysyy CSV-tiedostoa, sijoittaa sen taulukon ja muistaa tiedoston nimen; `L` luettelee yhteydet tiedostoineen, kokoineen, lukuaikoineen ja taulukoiden määrineen; `R` poistaa yhteyden (sen taulukot jäävät tavallisiksi taulukoiksi).

### DATALINKUPDATE

Aliakset: `DLU`. Lukee datayhteyden tiedoston uudelleen ja täyttää siihen linkitetyt taulukot uudelleen (rivejä ja sarakkeita lisätään tai poistetaan vastaamaan). Selain ei voi avata tiedostoa itse, joten se pyytää sinua valitsemaan tiedoston uudelleen. Useiden yhteyksien kanssa se kysyy, mikä niistä.

### FIELD

Lisää kentän piirustukseen: teksti, joka laskee itse arvonsa. `Kenttä: [Päivämäärä/Tiedostonimi/Arkki/Ominaisuus/Kohde/Lauseke/Koodi] <Päivämäärä>`:

- `D`: nyt, tai tallennettu, luotu tai tulostettu päivämäärä, ja muoto (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: tiedoston nimi, tunnisteen kanssa tai ilman. `S`: arkin numero, sen otsikko, tai kuinka monta arkkia on. `P`: piirustuksen ominaisuus nimen mukaan (katso {{cmd:DWGPROPS}}). `O`: valitse kohde, sitten mitä luetaan (pinta-ala, pituus, piiri, säde, halkaisija, taso, nimi, x, y, teksti, kierto, väri) ja desimaalit. `E`: kaava. `C`: teksti koodeilla kirjoitettuna sellaisenaan, kuten `Arkki %<sheetnumber>% / %<sheetcount>%`.
- Sitten `Valitse teksti, taulukon solu tai lohko attribuuteilla, johon se lisätään (Enter: uusi teksti)`: valittuun tekstiin kenttä lisätään sen sisällön jälkeen; taulukon solu samoin; lohkoviite kysyy, mikä attribuutti; {{key:Enter}} kysyy korkeuden ja pisteen uudelle tekstille.
- Näytöllä kentällä on vaalean harmaa tausta; tulostus ja PDF eivät sitä koskaan sisällä. Kun kirjoitat kentän tekstin päälle käsin, kenttä päättyy. Kenttä, jota ei voi laskea, näyttää `####`.
- Kohteen kenttä löytää kohteensa avaimella, jonka CadCraft pitää kohteissa (Asetukset › CadCraft › Yhdistämiskelpoiset tiedostot); kun avaimet on kytketty pois, se hylkää.

### UPDATEFIELD

Aliakset: `UPDATEFIELDS`. `Valitse kohteet, joiden kentät päivitetään (Enter: kaikki kentät) tai [Asetukset]`. `S` asettaa, milloin kentät päivittyvät itsestään: kirjoita kirjaimet `O` avaa, `S` tallenna, `P` tulosta, `R` rakenna uudelleen (kaikki neljä alussa), tai `NONE`.

### DWGPROPS

Aliakset: `DRAWINGPROPS`. Luettelee piirustuksen ominaisuudet ja sitten `Muuta: [Nimike/Aihe/Tekijä/Yritys/Avainsanat/Kommentit/Mukautettu/Poista/Lopeta]`. Kuusi ensimmäistä ovat ne, jotka {{ui:Piirustuksen tiedot}}-paneeli näyttää; `U` lisää oman nimen ja arvon, `R` poistaa yhden. Kentät lukevat ne (`%<prop:title>%`, `%<prop:Client>%`) ja seuraavat heti. Se hylkää mukautetun nimen, joka on sisäänrakennettu nimi tai joka sisältää `%`, `<`, `>`, lainausmerkin tai kenoviivan.

## Parametrinen

Katso [Rajoita piirustus](topic:constraints) ja [Käytä parametreja ja yhtälöitä](topic:parameters). Rajoitteet toimivat {{ui:Malli}}-välilehdellä.

### GEOMCONSTRAINT and the GC commands

Alias `GCON`: `Anna rajoitteen tyyppi [Vaaka/Pysty/Kohtisuora/Yhdensuuntainen (PA)/Tangentti/Samanpisteinen (CO)/Samankeskinen (CON)/Samalla suoralla (COL)/Symmetrinen/Yhtä suuri/Lukitse] <Vaaka>`, sitten sen komennon kehotteet.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Valitse kohde [2 pistettä] <2 pistettä>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Valitse ensimmäinen kohde`, `Valitse toinen kohde` (toinen siirtyy).
- {{cmd:GCCOINCIDENT}}: `Valitse ensimmäinen piste [Kohde/Automaattinen rajoitus] <Kohde>`, `Valitse toinen piste [Kohde] <Kohde>`.
- {{cmd:GCFIX}}: `Valitse piste [Kohde] <Kohde>`.
- {{cmd:GCSYMMETRIC}}: `Valitse ensimmäinen kohde [2 pistettä] <2 pistettä>`, `Valitse toinen kohde`, `Valitse symmetria-viiva`.

### DIMCONSTRAINT and the DC commands

Alias `DCON`: `Valitse muunnettava assosiatiivinen mitoitus [Lineaarinen/Vaaka/Pysty/Linjassa/Kulma/Säde/Halkaisija/Muunna] <Linjassa>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Määritä ensimmäinen rajoituspiste [Kohde] <Kohde>`, `Määritä toinen rajoituspiste`, `Määritä mittaviivan sijainti`, `Mitoitusteksti <d1=40>` (luku, lauseke tai `nimi=lauseke`).
- {{cmd:DCALIGNED}}: kuten yllä, vaihtoehdoilla `[Kohde/Piste & viiva/2 viivaa]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Valitse kaari tai ympyrä`. {{cmd:DCANGULAR}}: `Valitse ensimmäinen viiva tai kaari`, `Valitse toinen viiva`.
- {{cmd:DCCONVERT}}: `Valitse muunnettavat mitoitukset`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Valitse kohteet [Asetukset]`. `S` kysyy etäisyys- ja kulmatoleranssit.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Valitse kohteet`; niiden rajoitteet poistuvat.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Valitse kohteet [Näytä kaikki/Piilota kaikki]`, sitten `[Näytä/Piilota]`.
- {{cmd:DCDISPLAY}}: `Anna vaihtoehto [Näytä/Piilota]`.

### PARAMETERS and -PARAMETERS

{{cmd:PARAMETERS}} (aliakset `PAR`, `PARAM`) avaa {{ui:Parametrit}}-paneelin. `-PARAMETERS`: `Anna vaihtoehto [Uusi/Muokkaa/Nimeä uudelleen/Poista/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Lataa makron (.swb), joka rakentaa mallin uudelleen yhdeksi rajoitetuksi luonnokseksi SolidWorksissa. Katso [Siirrä luonnokset muihin osamallintajiin ja niistä](topic:solidworks-sketches).

## Lohkot

### ANNOSCALE

Aliakset: `CANNOSCALE`. Kertoo piirustuksen merkintämittakaavan ja kuinka monta merkintäkelpoista kohdetta siinä on, ja kysyy sitten `Uusi merkintämittakaava`: kirjoita `1:50`, `1:100`, `2:1`, pelkkä luku (`50` on 1:50), tai piirustuksen oman mittakaavan nimi. Jokainen merkintäkelpoinen teksti ja mitoitus muutetaan niin, että se tulostuu samankokoisena uudessa mittakaavassa, yhdellä kumoamisvaiheella; kohteet, jotka eivät ole merkintäkelpoisia, jätetään ennalleen, samoin kohde, jolla on mittakaavaluettelo ilman uutta mittakaavaa ({{cmd:OBJECTSCALE}}). Katso [Yksiköt, paperit ja mittakaavat](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliakset: `OBJSCALE`. `Valitse merkintäkelpoiset kohteet`, sitten `Valittujen kohteiden merkintämittakaavat [Lisää/Poista/Nykyinen mittakaava/Luettelo/Lopeta] <Lisää>`. Merkintäkelpoisella tekstillä tai mitoituksella on luettelo merkintämittakaavoista. `Lisää` ja `Poista` kysyvät mittakaavan (`1:50`, `2:1`, pelkkä luku, tai piirustuksen oman mittakaavan nimi); `Nykyinen mittakaava` lisää piirustuksen merkintämittakaavan; `Luettelo` tulostaa jokaisen kohteen mittakaavat. Näkymäruutu, jonka mittakaava on kohteen luettelossa, näyttää kohteen kokona, joka tulostaa sen paperikorkeuden tässä mittakaavassa, näytöllä ja tulosteissa. Viimeistä mittakaavaa ei voi poistaa. Kohteet, jotka eivät ole merkintäkelpoisia, jätetään pois: kytke Merkintäkelpoinen päälle Ominaisuudet-paneelissa ensin. Luettelot tallentuvat DWG- ja DXF-muodossa CadCraftin omana tietona. Katso [Yksiköt, paperit ja mittakaavat](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliakset: `ANNOALL`. `Näytä merkintäkelpoiset kohteet kaikissa mittakaavoissa [ON/OFF]`. Päällä (kuten piirustus alkaa): merkintäkelpoinen kohde näkyy myös näkymäruudussa tai mallissa, jonka mittakaava ei ole sen luettelossa, omassa koossaan. Pois: sitä ei näytetä siellä, eikä sitä voi valita mallissa. Vaihto on yksi kumoamisvaihe; sitä ei tallenneta tiedostoon.

### SCALELISTEDIT

Aliakset: `SCALELIST`. `Mittakaavaluettelo [Lisää/Muokkaa/Poista/Luettelo/Palauta]`, kunnes {{key:Enter}}. Lisää: `Mittakaavan nimi`, `Paperin yksiköt`, `Piirustuksen yksiköt`. Muokkaa ja Poista kysyvät mittakaavan nimen. Piirustuksen omat mittakaavat liittyvät näkymäruutujen ja tulostuksen mittakaavaluetteloihin ja tallentuvat piirustuksen mukana. Katso [Yksiköt, paperit ja mittakaavat](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT and PEDIT

`SPLINE` (`SPL`): `Splinin ensimmäinen piste [Menetelmä/Kohde] (Sovituspisteet)`. Sovitus: pisteet, joiden läpi käyrä kulkee; `Sulje`, `Kumoa`, sitten `Aloitustangentti` ja `Lopputangentti` (piste tai {{key:Enter}}). Menetelmä › Ohjauspisteet kysyy asteen (1–5) ja piirtää ohjauspolygonista. Kohde muuttaa murtoviivat splineiksi niiden kärkipisteiden kautta. `SPLINEDIT` (`SPE`): `[Sovitustiedot/Muokkaa kärkipistettä/muunna murtoviivaksi/Avaa tai sulje/Käännä/Kumoa/Lopeta]`; Sovitustiedot `[Lisää/Poista/Siirrä/Puhdista/Tangentit/Lopeta]`; Muokkaa kärkipistettä `[Lisää ohjauspiste/Siirrä/Paino/Lopeta]`. `PEDIT` (`PE`): `[Sulje/Avaa/Yhdistä/Leveys/Sovita/Spline/Suorista/Viivatyypin luonti/Käännä/Kumoa/Lopeta]`, `M` useille kohteille; viivat, kaaret ja splinit tarjotaan ensin murtoviivoina. Katso [Splinit ja murtoviivat](topic:splines).

### BLOCK

Aliakset: `B`, `BMAKE`.

- `Anna lohkon nimi`. Jos se on olemassa: `Lohko "…" on jo olemassa. Määritelläänkö uudelleen? [Kyllä/Ei] <E>`.
- `Määritä lisäyksen peruspiste`
- `Valitse kohteet`. Ne korvataan yhdellä viitteellä uuteen lohkoon.

### WBLOCK

Aliakset: `W`, `-WBLOCK`. Kirjoittaa lohkon, joitakin kohteita tai koko piirustuksen uuteen DWG- tai DXF-tiedostoon. `WBLOCK-lähde [Lohko/Koko piirustus/Kohteet] <Kohteet>`:

- **Kohteet**: `Määritä lisäyksen peruspiste` (siitä tulee uuden piirustuksen origo), `Valitse kohteet`, sitten `Tiedostomuoto [DWG/DXF/R12 DXF]` ja `Uuden piirustuksen tiedostonimi`, sitten `Mitä kohteille tehdään [Säilytä/Muunna lohkoksi/Poista]`. Muunna korvaa ne yhdellä viitteellä tiedoston nimisen lohkon kohdalla; Poista poistaa ne.
- **Lohko**: `Kirjoitettava lohko`. Lohkon omat kohteet, peruspisteen ollessa origo, sisäkkäiset lohkot mukaan lukien.
- **Koko piirustus**: jokainen kohde mallitilassa. Arkkeja ei kirjoiteta; käytä {{cmd:SAVEAS}}-komentoa kopiota varten, joka säilyttää arkit.

Uusi tiedosto sisältää vain ne tasot, viivatyypit, teksti- ja mitoitustyylit ja lohkot, joita sen kohteet käyttävät, sekä piirustuksen yksiköt. DWG-version on se, jonka {{cmd:SAVEAS}} viimeksi käytti. Selaimessa tiedosto ladataan; Studiossa avautuu tallennusikkuna.

### ATTDEF

Aliakset: `ATT`, `DDATTDEF`, `-ATTDEF`; tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Määritä attribuutti}}. Tulostaa tilat, sitten `Anna muutettava vaihtoehto (Enter kun valmis) [Näkymätön/Vakio/Esiasetus]`, `Anna attribuutin tunnisteen nimi`, `Anna attribuutin kehote`, `Anna attribuutin oletusarvo` (`Anna attribuutin arvo`, kun vakio), `Määritä tekstin aloituspiste`, `Määritä tekstin korkeus`, `Määritä tekstin kiertokulma`. {{cmd:BLOCK}} ottaa attribuuttimääritykset lohkoon.

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE`, tai kaksoisnapsauta viitettä, jolla on attribuutteja; {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Muokkaa attribuutteja}}): `Valitse attribuutteja sisältävä lohkoviite`, sitten {{ui:Muokkaa attribuutteja}}-valintaikkuna. `ATTEDIT` (`ATE`, `-ATTEDIT`): sama viite, sitten `<kehote> (<TAG>) <arvo>` jokaiselle attribuutille; {{key:Enter}} säilyttää arvon. Katso [Attribuutit](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Päivitä attribuutit minkä lohkon viitteille [Nimi/Valitse/Kaikki] <Valitse>`. Arvot säilyvät; uudet attribuutit saavat oletusarvonsa, poistetut poistuvat, sijainnit palautuvat.

### BATTMAN

{{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Attribuuttien hallinta}}. Valintaikkuna: lohko, attribuutit (tunniste, kehote, oletus, tilat, järjestys), {{ui:Päivitä viittaukset (arvot säilytetään)}}, {{ui:Käytä}}.

### REFEDIT and REFCLOSE

{{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Muokkaa paikan päällä}}. `REFEDIT`: `Valitse muokattava lohkoviite paikan päällä` (tai valinta). `REFCLOSE`: `Tallennetaanko muutokset kohteeseen "…" [Tallenna/Hylkää] <Tallenna>`; palkin {{ui:Tallenna lohko}} ja {{ui:Hylkää}} tekevät saman. Koko muokkaus on yksi kumoamisvaihe. Katso [Attribuutit](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT and BCLOSE

`BE`; tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Muokkaa lohkoa}}. `Anna muokattavan lohkon nimi <valitun viitteen lohko>` avaa lohkoeditorin. `BCLOSE` kysyy `Suljetaanko lohkoeditori kohteelle "…" [Tallenna/Hylkää] <Tallenna>`; ylä­palkin {{ui:Tallenna lohko}} ja {{ui:Hylkää muutokset}} tekevät saman. Kaikki editorissa tehty on yksi kumoamisvaihe.

### VIEWBASE

Aliakset: `FLATSHOT`. Tasainen 2D-näkymä kiintokappaleista 3D-välilehdellä: `Näkymä [Edestä/Päältä/Oikealta/Vasemmalta/Takaa/Alhaalta/Iso]`, `Piilotetut viivat [Näytä/Piilota]`, mittakaava (`1:20`, `2:1`; {{key:Enter}} ottaa arkkiin sopivan) ja sitten näkymän keskipiste. Yksi lohkoviite; näkyvät reunat VIEW-VISIBLE-tasolla, piilotetut katkoviivoina VIEW-HIDDEN-tasolla. Katso [Tasaiset näkymät arkilla](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliakset: `-PUBLISH`; tai {{ui:Kaikki arkit yhteen PDF:ään}} valintaikkunassa {{ui:Plottaa PDF:ksi}}. `Plottattavat arkit [Kaikki/Jotkut]`: {{key:Enter}} plottaa jokaisen arkin, `S` kysyy nimiä pilkuilla erotettuna. Yksi PDF, sivu ja kirjanmerkki arkkia kohden. Katso [Kaikki arkit yhdessä PDF:ssä](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliakset: `SSM`, `SHEETSETMANAGER`. Tuo sinut vasemman paneelin kohtaan {{ui:Arkkisarja}}: arkit useista piirustuksista, numeroituina ja nimettyinä, niiden piirustusotsikot täytettyinä sarjasta, julkaistuna yhtenä PDF-tiedostona. Katso [Arkkisarjat](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): valitse DWG tai DXF, sitten sen lisäyskohta. {{cmd:XREF}} (`XR`, `-XREF`): `Linkitetyt piirustukset [?/Liitä/Lataa uudelleen/Sido/Irrota] (Enter: ?)`; kun linkkejä on useita, valitse yksi sen viitteistä tai kirjoita `N` ja sen nimi. Katso [Linkitetyt piirustukset](topic:files#linked-drawings-external-references).

### COUNT

Aliakset: `BCOUNT`; tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Laske lohkot}}. `Valitse laskettava lohkoviite tai [Kaikki/Vienti] (Enter: Kaikki)`: valinta valitsee ja laskee jokaisen kyseisen lohkon viitteen tässä avaruudessa; {{key:Enter}} tai `A` luettelee ne kaikki; `E` ja sitten `C` (määrät) tai `A` (attribuutit) lataa CSV-tiedoston. Katso [Laske lohkot ja vie aikataulu](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliakset: `I`, `DDINSERT`.

- `Anna lohkon nimi tai [Tiedosto/Kirjasto] <viimeisin lohko>` (kirjainkoolla ei ole merkitystä). `F` kysyy DWG- tai DXF-tiedostoa, sitten koko piirustusta tai yhtä sen lohkoa; jo käytetty nimi kysyy {{ui:Säilytä olemassa olevat}} tai {{ui:Nimeä uudelleen}}. `L` avaa kirjastopaneelin.
- `Määritä lisäyskohta [Mittakaava (S)/Kierrä (R)]`. `S` kysyy `Määritä mittakaavakerroin`, `R` kysyy `Määritä kiertokulma`; molemmat muistetaan.
- Kun lohko on jo jonkin toistuvan kohteen vieressä ilman sitä, rivi kertoo, kuinka monta paikkaa ehdotetaan, ja kehote saa `suGgested`-vaihtoehdon: `G` näyttää ne; napsauta lähellä yhtä sijoittaaksesi lohkon sinne, `A` kaikki niistä, {{key:Enter}} palaa. Ne ottavat naapureidensa kierron ja attribuuttien oletusarvot. Yli 20 000 kohteen piirustuksia avoimessa avaruudessa ei etsitä.
- Sitten `Anna <kehote> (<TAG>) <oletus>` jokaiselle attribuutille, jota lohko kysyy. Katso [Lohkon attribuutit](topic:attributes).

### LIBRARY

Aliakset: `LIB`. Avaa kirjastopaneelin: sijoita kohteita, tarkista päivitykset, kirjaston tekijätiedot. Ei kysymyksiä. Katso [Lisää tiedostosta tai kirjastosta](topic:insert-from-file-and-library).

### STEELMEMBER

Aliakset: `SMEMBER`; tai {{ui:3D-sauva}} kirjaston välilehdellä {{ui:Vakio}}. `Profiilin koko <W12x26>` (kuten välilehti sen luettelee), sitten `Alkupiste [Pilari]` ja `Loppupiste`: kiintoosa 3D-välilehdellä kahden pisteen välissä, maan päällä. `C` kysyy pilarin pohjapisteen ja sen korkeuden. Yksi kumoamisvaihe. Katso [Sijoita teräsprofiileja ja vakio-osia](topic:steel-and-standard-parts).

### PARTSLIST

Aliakset: `PLIST`. `Osaluettelon vasen yläkulma`, sitten `Tekstin korkeus <2.5>`: piirtää taulukon jokaisesta kirjastosta sijoitetusta vakio-osasta ja teräsprofiilista (nimikenumerot, määrä, osa, standardi, koko, pituus, materiaali, massa). Yksi kumoamisvaihe. Katso [Sijoita teräsprofiileja ja vakio-osia](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliakset: `PU`. Poistaa lohkomääritykset, joita mikään ei käytä. Ei kysymyksiä.

### DELBLOCKS

Tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Poista lohkoja}}. `Valitse poistettava lohko [Nimi/Lopeta]`: napsauta lohkoviitettä, tai `N` lohkoluetteloon suodattimella (valitse useita), tai `X` / {{key:Enter}} lopettaa. Jokainen viite poistuu — mallista, jokaiselta arkilta ja muiden lohkojen sisältä — ja sen jälkeen määritys, ja komentorivi kertoo, mikä poistettiin ja mitä ei voitu poistaa. Nimettömiä lohkoja ja linkitettyjä piirustuksia ei tarjota. Kehote palaa seuraavaa lohkoa varten; koko komento on yksi kumoamisvaihe.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} liittää kopioimasi ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) yhtenä lohkona: valitse lisäyskohta, ja yksi viite uuteen lohkoon menee sinne, valittuna. Lohkolle tulee oma nimi (`A$C` ja numero); {{cmd:RENAME}} antaa sille oman. Yksi kumoamisvaihe poistaa viitteen ja lohkon.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} kysyy korvattavan lohkon ja sen tilalle tulevan lohkon (`?` luettelee lohkot), ja muuttaa sitten jokaisen viitteen mallissa, jokaisella arkilla ja muiden lohkojen sisällä. Jokainen viite säilyttää paikkansa, mittakaavansa, kiertonsa, tasonsa ja molempien lohkojen attribuuttien arvot; attribuutit, joita vain uudella lohkolla on, alkavat oletusarvoistaan, ja se kertoo, mitkä arvot pudotettiin. Kun vanhaa lohkoa ei enää käytä mikään, se tarjoaa sen poistamista. Se hylkää linkitetyt piirustukset ja korvauksen, joka asettaisi lohkon itsensä sisään. Yksi kumoamisvaihe.

### MINSERT

{{cmd:MINSERT}} sijoittaa lohkon riveihin ja sarakkeisiin: lohkon nimi, lisäyskohta, mittakaava, kierto, rivien ja sarakkeiden määrä sekä niiden väliset etäisyydet. Koko joukko kääntyy kierron mukana. Jokainen on oma viitteensä (enintään 10 000), joten mitä tahansa niistä voi siirtää tai poistaa jälkeenpäin.

### BLOCKSPALETTE

Aliakset: `BLOCKSPAL`; tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Blocks panel}}. Näyttää {{ui:Lohkot}}-paneelin, jonka suodattimessa kohdistin on. Jokaisella lohkolla on pieni kuva; viimeksi sijoitetut tulevat ensin. Suodattimen vieressä olevat kaksi painiketta vaihtavat luettelon ja kuvaruudukon välillä. Napsauta kuvaa (tai {{ui:Lisää}}) sijoittaaksesi lohkon komennolla {{cmd:INSERT}}, tai vedä se piirustukseen sijoittaaksesi sen sinne, minne pudotat sen.

{{ui:Libraries}}, luettelon alla: {{ui:Add a drawing}} ottaa oman DWG- tai DXF-tiedoston ja luettelee sen lohkot kuvineen, sekä koko piirustuksen yhtenä lohkona. Yhden sijoittaminen kopioi sen määrityksen (ja sen sisäkkäiset lohkot ja niiden tasot) tähän piirustukseen, kuten {{cmd:INSERT}}-komennon `Tiedosto`-vaihtoehto tekee; lohko, joka on jo täällä samalla määrityksellä, käytetään kysymättä, ja samannimisestä, mutta eri määrityksestä kysytään {{ui:Säilytä olemassa olevat}} tai {{ui:Nimeä uudelleen}}. Selaimessa tiedosto pysyy, kunnes sivu suljetaan. CadCraft Studiossa {{ui:Add a folder}} luettelee kansion piirustukset, ja jokainen avautuu, kun napsautat sitä; tiedostot ja kansiot muistetaan. Pieni x poistaa kirjaston luettelosta; tiedostoon ei kosketa. Jaettu {{ui:Library}} on eri asia: katso [Lisää tiedostosta tai kirjastosta](topic:insert-from-file-and-library).

### BCONVERT

Tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Convert repeats to blocks}}. Löytää toistuvan geometrian ja muuttaa jokaisen kopion viitteeksi yhteen lohkoon.

- `Valitse toistuvat kohteet tai [Lohko]`: yhden kopion kohteet. `B` nimeää sen sijaan olemassa olevan lohkon, jotta löytyvät sen kohteiden irralliset kopiot.
- `Kopio voi olla: peilattu = Ei, skaalattu = Ei; taso, väri, viivatyyppi ja viivanpaksuus = Vastaa … [Peilattu/Skaalattu/Ominaisuudet]`: `M`, `S` ja `P` vaihtavat, mikä lasketaan kopioksi; {{key:Enter}} hakee. Asetukset muistetaan.
- `Uuden lohkon nimi <Block1>`, sitten `Määritä lohkon peruspiste` ({{key:Enter}} ottaa valinnan vasemman alakulman).
- Se kertoo, kuinka monta muuta kohdejoukkoa on samaa geometriaa, korostaa kaiken, minkä se korvaisi, ja kysyy `Kyllä/Ei`.

Kopio on samat kohteet siirrettyinä ja kierrettyinä mielivaltaisessa kulmassa (ja peilattuina tai skaalattuina yhdellä kertoimella, kun ne ovat päällä): jokaisella kohteella on oltava vastinkohde, miljoonasosan tarkkuudella valinnan koosta. Jokaisella viitteellä on oma kiertonsa ja mittakaavansa (peilatulla negatiivinen Y-mittakaava), ja taso, jonka kohteet jakoivat. Lukittujen tasojen kohteisiin ei kosketa, ja ne lasketaan. Se etsii avoimen avaruuden (mallin tai avoimen arkin). Hyvin laaja haku pysähtyy työrajaan ja kertoo siitä. Yksi kumoamisvaihe.

### BSEARCH

Tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Find blocks}}. `Etsi lohkot: [Nimi/Attribuutti/Geometria] <Nimi>`:

- `N`: osa lohkon nimestä tai kuvio, jossa `*` ja `?`. Luettelee jokaisen lohkon viitteineen tässä ja koko piirustuksessa.
- `A`: attribuutin arvo tai `TAG=arvo`. Luettelee lohkot, joiden viitteet sen pitävät, löydetyt arvot mukana. Vakioattribuutit lasketaan.
- `G`: valitse kohteita tai yksi lohkoviite, ja lohkot, joiden muoto on vähintään 85 % samankaltainen, luetellaan parhaimmat ensin. Koko, kierto ja peilaus eivät vaikuta. Mitta vertaa pisteiden välisiä etäisyyksiä ääriviivoja pitkin, joten se löytää näennäisesti samanlaiset; etsi tarkat kopiot komennolla {{cmd:BCONVERT}}.

Avoimesta avaruudesta löytyvät viitteet valitaan seuraavaa komentoa varten.

### BREPLACE

Tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Replace blocks}}. `Korvaa [Valitut/Kaikki]`: `S` korvaa valitsemasi lohkoviitteet nimeämälläsi lohkolla; `A` kysyy lohkon ja sen korvaavan ja muuttaa jokaisen viitteen, kuten {{cmd:BLOCKREPLACE}} tekee (sama koodi). Viite säilyttää paikkansa, mittakaavansa, kiertonsa, tasonsa ja molempien lohkojen attribuuttien arvot; arvot, joille uudella lohkolla ei ole paikkaa, pudotetaan ja nimetään. `?` luettelee lohkot. Yksi kumoamisvaihe.

### DATAEXTRACTION

Aliakset: `EATTEXT`, `DX`; tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Data extraction}}. Luettelee lohkot, niiden attribuutit ja kohteiden ominaisuudet taulukkona tai CSV-tiedostona.

- Toimii valinnalla, tai kysyy `Valitse kohteet (Enter: kaikki tässä avaruudessa)`.
- `Luettelo: [Lohkot/Kohteet/Kaikki]`, kun valinta sisältää molempia. Nimettömiä lohkoja, taulukoita ja osaluetteloita ei koskaan luetella.
- Se tulostaa sarakkeet, joista voi valita (nimi, tyyppi, taso, X, Y, kierto, mittakaava, pituus, pinta-ala, väri, viivatyyppi, avaruus, ja yksi jokaiselle attribuuttitunnisteelle), sitten `Sarakkeet, nimen tai numeron mukaan pilkuilla erotettuna`. {{key:Enter}} ottaa tähdellä merkityt: lohkoille nimen ja jokaisen attribuutin; kohteille tyypin, tason ja pituuden.
- `Yhdistetäänkö samat rivit määrän kanssa? [Kyllä/Ei] <Kyllä>`, sitten `Laita luettelo: [Taulukko/Csv] <Taulukko>`. Taulukko on tavallinen taulukko ({{cmd:TABLEDIT}} muokkaa sitä) eikä se ole elävä: aja komento uudelleen, kun piirustus muuttuu.
- Se hylkää sarakkeen, jota ei ole luettelossa. Taulukko pitää 1 999 datariviä; CSV-tiedosto ottaa ne kaikki.

### COUNTTABLE

Laskee valinnan (tai avoimen avaruuden) lohkoviitteet ja laittaa määrät taulukkoon (`Lohko`, `Määrä`) tai CSV-tiedostoon. Piirustuksen mukaan itsestään seuraavaa laskentaa varten katso {{cmd:BOMTABLE}}.

## Arkit ja tulostus

### LAYOUT

Aliakset: `LO`, `NEWLAYOUT`; tai {{ui:+}}-painike piirustuksen alla. Uusi arkki reunuksella, piirustusotsikolla ja yhdellä näkymäruudulla, ISO A3 -koossa (tai Tabloid, jos piirustus on tuumissa tai jaloissa). Ei kysymyksiä.

### MVIEW

Aliakset: `MV`. Vain arkilla ({{cmd:VPORTS}} arkilla tekee saman).

- `Määritä näkymäruudun kulma [Monikulmio/Kohde]`, `Määritä vastakkainen kulma`. Näkymäruutu näyttää koko mallin vakiomittakaavassa.
- `P` (Monikulmio): napsauta ääriviivan kulmat (`Kumoa`, `Sulje`), {{key:Enter}} kun valmis. Se hylkää alle kolme kulmaa.
- `O` (Kohde): `Valitse suljettu kohde näkymäruudun ääriviivaksi`: suljettu murtoviiva, ympyrä tai ellipsi arkilla. Näkymäruutu ottaa sen muodon (käyrät lyhyinä suorina osina); kohde pysyy ennallaan. Se hylkää kohteen, joka ei ole suljettu.

### VPCLIP

Rajaa näkymäruudun, joka on jo arkilla. `Valitse rajattava näkymäruutu` (tai valitse se ensin), sitten `Valitse kohde, johon rajataan [Monikulmio/Poista]`:

- Napsauta suljettua murtoviivaa, ympyrää tai ellipsiä, tai paina {{key:Enter}} (tai `P`) napsauttaaksesi monikulmion kulmat.
- `D` (Poista, tarjotaan kun näkymäruutu on rajattu) tekee siitä taas suorakulmion: laatikon ääriviivan ympärillä, jolla se oli.
- Mitä näkymäruutu näyttää, ei liiku paperilla, eikä sen mittakaava muutu. Malli piirretään ja tulostetaan vain ääriviivan sisällä, ja reuna seuraa sitä. Yksi kumoamisvaihe.
- Rajatulla näkymäruudulla on ote jokaisessa ääriviivansa kulmassa, keskipisteen ja laatikon neljän kulman lisäksi (laatikon kulman vetäminen venyttää ääriviivaa mukana). Ominaisuudet näyttää Ääriviiva: Suorakulmio, tai Rajattu ja kulmien määrä.
- DWG- ja DXF 2000 -tiedostot säilyttävät ääriviivan CadCraftille. Muut ohjelmat avaavat näkymäruudun sen ympärillä olevana suorakulmiona; DXF R12 säilyttää vain suorakulmion.
- Mallivälilehdellä se kertoo, että näkymäruudut ovat arkeilla.

### VPORTS

Aliakset: `VIEWPORTS`. {{cmd:SPLIT}} on sama myös arkilta, ja {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Jaa vierekkäin}}, {{ui:Jaa päällekkäin}}, {{ui:Neljä ruutua}}, {{ui:Yksi ruutu}} suorittavat sen. Mallissa: `Anna ruutujen määrä [SIngle/2/3/4] <3>`; `2` kysyy `[Vaakasuora/Pystysuora] <Pystysuora>` (Pystysuora = vierekkäin), `3` kysyy `[Vasen/Oikea] <Oikea>` (minne iso ruutu menee). Jokainen ruutu säilyttää oman näkymänsä ja tilansa; napsautus tekee ruudusta aktiivisen. Arkilla se on {{cmd:MVIEW}}. Katso [Jaa näyttö](topic:split-screen).

### VPVIEW

Ei aliaksia. Vain arkilla.

- `Valitse näkymäruutu` (ohitetaan, jos yksi on valittu), sitten mallissa: `Määritä näytettävän ikkunan ensimmäinen kulma`, `Määritä vastakkainen kulma`.

### UCS

Ei aliaksia. Oma koordinaatisto; ei muokkaus. `Määritä UCS:n origo [Nimetty (NA)/Kohde (OB)/Edellinen (P)/Maailma (W)/Z/3point] <Maailma>`: piste on uusi origo, sitten `Määritä piste X-akselilla (Enter säilyttää kulman)`. `Z`: `Määritä kiertokulma Z-akselin ympäri <90>`. `3`: origo, piste positiivisella X-akselilla, piste positiivisen Y:n puolella. `OB`: `Valitse kohde UCS:n kohdistamiseen`. `NA`: `[Palauta/Tallenna/Poista/?]` ja nimi. Näkymä kääntyy, jotta uusi X-akseli on vaakasuora. Katso [Käännä näkymä ja käytä omia koordinaatteja](topic:ucs-and-turned-view).

### PLAN

Ei aliaksia. `Anna vaihtoehto [Nykyinen UCS/Ucs/Maailma] <Nykyinen UCS>`: kääntää aktiivisen ruudun näkymän niin, että UCS:n X-akseli (tai maailman) on vaakasuorassa. Piirustuksen mikään ei siirry.

### TURNLEFT, TURNRIGHT, TURNWORLD

Ei aliaksia; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Kierrä näkymää 90° vasemmalle}}, {{ui:Kierrä näkymää 90° oikealle}}, {{ui:Takaisin maailmaan}}. Sama kuin `UCS Z -90`, `UCS Z 90` ja `UCS W`, näkymän seuratessa.

### VPLAYER

Ei aliaksia. Arkilla tai näkymäruudun sisällä. `Anna vaihtoehto [?/Jäädytä/Sulata/Palauta/Vpvisdflt]`: `F`, `T`, `R` kysyvät tasojen nimiä (pilkut, `*` ja `?` jokerimerkit), sitten `[Kaikki/Valitse/Nykyinen] <Nykyinen>` näkymäruudut; Palauta asettaa jokaisen tason takaisin oletukseensa "jäädytetty uusissa näkymäruuduissa"; `V` asettaa tuon oletuksen (`[Jäädytetty/Sulatettu]`), jota {{cmd:MVIEW}} käyttää. `?` luettelee nykyisessä näkymäruudussa jäädytetyt tasot. Tasopaneelin näkymäruutusarake tekee saman yhdelle näkymäruudulle. Katso [Jäädytä taso yhdessä näkymäruudussa](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliakset: `MS`; tai kaksoisnapsauta näkymäruudun sisällä. Vain arkilla. Työskentele mallissa näkymäruudun kautta: valittu, arkin ainoa, tai `Napsauta näkymäruudun sisällä työskennelläksesi siinä`. Panorointi ja zoomaus sen sisällä muuttavat näkymäruudun näkymää (näytön lukittu näkymäruutu säilyttää sen, ja arkki liikkuu sen sijaan); uusi näkymä kirjoitetaan yhdeksi kumoamisvaiheeksi. Katso [Työskentele mallissa näkymäruudun kautta](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliakset: `PS`; tai kaksoisnapsauta näkymäruudun ulkopuolella, tai napsauta piirustuksen alla olevaa välilehteä. Takaisin arkille.

### PLOT

Aliakset: `PRINT`, `PUBLISH`, `EXPORTPDF`; tai {{key:Mod+P}}. Avaa {{ui:Plottaa PDF:ksi}}-valintaikkunan. Katso [Plottaa PDF:ksi](topic:plot-pdf).

### PLOTSTYLES

Aliakset: `STYLESMANAGER`, `PSTABLES`; tai {{ui:Muokkaa taulukoita…}} valintaikkunassa {{ui:Plottaa PDF:ksi}}. Avaa {{ui:Plottaustyylitaulukot}}: mitä kukin väri tulostuu (väri, harmaa, muste, viivanpaksuus), säilyy piirustuksen mukana. Katso [Plottaustyylitaulukot](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} siirtää kohteita arkin ja mallin välillä näkymäruudun kautta; ne skaalataan ja käännetään, jotta ne näyttävät samalta toiselta puolelta. Arkilla valitse kohteet, ja ne menevät malliin (valitse näkymäruutu, jos arkilla on useampia). Kun työskentelet mallissa näkymäruudun kautta ({{cmd:MSPACE}}), valitut kohteet tulevat arkille. Se kertoo, kuinka monta kertaa suuremmiksi tai pienemmiksi ne tulivat. Näkymäruudut pysyvät arkillaan. Yksi kumoamisvaihe.

### ISODRAFT

{{cmd:ISODRAFT}} kytkee isometrisen piirtämisen `ON` tai `OFF`, tai menee suoraan `Left`-, `Top`- tai `Right`-tasolle. Kun se on päällä: ortogonaali ({{key:F8}}) pitää viivat tason kahden akselin suuntaisina (vasen: 90° ja 150°; yläpuoli: 30° ja 150°; oikea: 30° ja 90°), napaseuranta ({{key:F10}}) seuraa samoja akseleita, tartunta ruudukkoon ({{key:F9}}) käyttää isometristä ruudukkoa, ja ruudukko ({{key:F7}}) piirretään viivoilla 30°, 90° ja 150°. {{cmd:ELLIPSE}} saa `Isocircle`-vaihtoehdon: anna keskipiste ja säde (tai `Diameter`), ja se piirtää ellipsin, jonka ympyrä näyttää nykyisellä tasolla. Piirustus pysyy litteänä: nämä ovat apuvälineitä kuvallisen näkymän piirtämiseen, eivät 3D-mallia. Asetus koskee tätä istuntoa eikä tallennu tiedostoon.

### ISOPLANE

{{cmd:ISOPLANE}} valitsee tason, jolla isometrinen piirtäminen tapahtuu: `Left`, `Top` tai `Right`. Enter siirtyy seuraavaan tasoon. Isometrisen piirtämisen ollessa päällä {{key:F5}} tekee saman kesken komennon; sen ollessa pois päältä {{key:F5}} jää selaimelle.

## Kysely

### CAL

Tulostaa laskun arvon sellaisena kuin se luetaan minne tahansa, missä pituus kirjoitetaan.

- `Lauseke`: kirjoita se, esimerkiksi `12'6"+3/4"` tai `(24'-0")/3`, ja paina {{key:Enter}}. CadCraft tulostaa `= 12'-6 3/4"   (150.75 piirustusyksikköä)`. Katso [Laskutoimitus kirjoitetussa arvossa](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliakset: `DI`; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Mittaa etäisyys}}.

- `Määritä ensimmäinen piste`, `Määritä toinen piste`. Tulostaa etäisyyden, kulman, Delta X:n ja Delta Y:n.

### AREA

Aliakset: `AA`; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Ala}}. Tulostaa pinta-alan ja piirin.

- `Määritä ensimmäinen kulmapiste [Kohde/Lisää ala/Vähennä ala] <Kohde>`
  - Napsauta tai kirjoita kulmia; kohdassa `Määritä seuraava piste (Enter sulkee) [Kumoa]` paina {{key:Enter}} sulkeaksesi ääriviivan. `U` ottaa takaisin viimeisen kulman.
  - {{key:Enter}} tai `O`, sitten `Valitse kohde`: ympyrä (tulostaa kehänsä), ellipsi, murtoviiva (avoin suljetaan suoralla viivalla pinta-alaa varten, ja sen pituus tulostetaan) tai viivoitus (aukot vähennetään).
  - `A` (Lisää ala) ja `S` (Vähennä ala) pitävät juoksevan summan: kehote alkaa `(ADD mode)` tai `(SUBTRACT mode)`, kukin ala lisätään tai vähennetään, ja `Kokonaisala = …` tulostetaan jokaisen jälkeen. Näissä tiloissa `O` valitsee kohteita, kunnes {{key:Enter}}, ja {{key:Enter}} ensimmäisessä kehotteessa lopettaa komennon.

### MEASUREGEOM

Aliakset: `MEA`. `Anna vaihtoehto [Etäisyys/Säde/Kulma/Ala] <Etäisyys>`; jokaisen mittauksen jälkeen se kysyy uudelleen, ja oletuksena on `Lopeta`.

`Pika` mittaa osoittimen ympärillä, kun liikutat sitä: etäisyyden lähimpään kohteeseen oikealla, ylhäällä, vasemmalla ja alhaalla (nykyisen UCS:n akseleita pitkin), piirrettynä liikkeen mukana, ja kulman, jossa kaksi näistä naapureista ovat suoria ja kohtaavat. Napsautus kirjoittaa neljä etäisyyttä, selkeän leveyden ja korkeuden sekä kulmat historiaan; Enter palaa vaihtoehtoihin. Se lukee sen, mikä on näytöllä.

- `D`: kaksi pistettä, kuten {{cmd:DIST}}.
- `R`: `Valitse kaari tai ympyrä`; tulostaa säteen ja halkaisijan.
- `A`: kaari (sen sisältyvä kulma), viiva ja sitten toinen viiva (niiden välinen kulma, kohti niiden kaukaisia päitä), tai {{key:Enter}} ja kolme pistettä (kärkipiste, sitten kaksi päätä).
- `AR`: kuten {{cmd:AREA}}, yksi ala.

### ID

Ei aliaksia. `Määritä piste`; tulostaa sen X:n ja Y:n.

### LIST

Aliakset: `LI`, `LS`. `Valitse kohteet`; tulostaa jokaisen kohteen tyypin, tason ja pääasialliset mitat.

### MASSPROP

{{cmd:MASSPROP}} antaa valitsemiesi alueiden ja suljettujen kohteiden poikkileikkausominaisuudet yhdessä: pinta-ala, piiri, rajauslaatikko, painopiste, hitausmomentit X- ja Y-akselin suhteen origon kautta, hitaustulo, pyörimissäteet, samat momentit painopisteen suhteen sekä pääakselien momentit ja niiden suunnat. Alueen reiät lasketaan rei'iksi. Luvut ovat piirustusyksiköissä ja tarkkoja viivoista ja kaarista koostuville ääriviivoille; ellipsit ja splinit mitataan lyhyinä suorina osuuksina, ja se kertoo siitä. Raportin jälkeen se kysyy, kirjoitetaanko se tekstitiedostoon. Suljettumattomat kohteet jätetään pois, ja se kertoo, kuinka monta.

## Näkymä, tiedosto ja muut

### ZOOM

Aliakset: `Z`.

- `Määritä ikkunan kulma, anna mittakaavakerroin (nX) [Laajuus/Kaikki/Ikkuna/Edellinen/Mittakaava/Keskipiste]`. Napsauta kaksi kulmaa ikkunaa varten. `E`, `A` tai Enter: koko piirustus.
- `P` (Edellinen, tai {{ui:Edellinen}} työkalurivillä) palaa edelliseen näkymään, enintään 10 näkymään välilehdeltä; hiiren rullan askeleet tai yksi panorointi lasketaan yhdeksi näkymäksi.
- Luku, kuten `2`, `2x` tai `0.5x` (tai `S` ja sitten luku), zoomaa sisään tai ulos tuon kertoimen verran näytön keskikohdan ympärillä.
- `C` kysyy `Määritä keskipiste` ja `Anna korkeus tai suurennus (nX)`.

### PDFATTACH, PDFIMPORT and the PDF commands

Aliakset: `PDFATT` {{cmd:PDFATTACH}}-komennolle, `PDFIM` {{cmd:PDFIMPORT}}-komennolle. {{cmd:PDFATTACH}} asettaa PDF-sivun piirustuksen alle (tiedosto, sivu, lisäyskohta, mittakaava, kierto); {{cmd:PDFIMPORT}} muuttaa sivun viivat, käyrät, täytöt ja tekstin piirustuskohteiksi tasoilla, jotka on nimetty PDF:n mukaan, todellisessa koossa, kirjoitetussa mittakaavassa tai skaalattuna kahdesta pisteestä ja todellisesta etäisyydestä. {{cmd:PDFCLIP}} rajaa taustapohjan, {{cmd:PDFADJUST}} asettaa himmennyksen, kontrastin, mustavalkoisuuden tai kytkee sen pois, {{cmd:PDFLAYERS}} kytkee PDF:n omat tasot, ja {{cmd:PDF}} antaa CadCraftille uudelleen tiedostot, joita piirustuksen taustapohjat käyttävät. Katso [PDF-taustapohjat](topic:pdf-underlay).

### AUTOCOMPLETE

Aliakset: `AUTOC`. Piirustuksen automaattinen täydennys: kun mitään komentoa ei aja, harmaa haamu näyttää, mitä piirustuksen omat kuviot sanovat seuraavaksi. {{cmd:AUTOCOMPLETE}} kytkee sen `On` tai `Off` (myös Asetukset › CadCraft), tai `Show` näyttää, mitä se ehdottaisi nyt. **Sarkain** piirtää haamun yhdeksi kumoamisvaiheeksi, **Esc** hylkää sen, kunnes piirustus muuttuu. Se löytää kolme asiaa uusimmista kohteista: seuraavan kopion jostakin, joka on piirretty kahdesti tai useammin tasaisella välillä (pilarit, pylväät, portaan nousu ja askelma), seuraavat osuudet murtoviivaportaasta ja huoneen tai seinäketjun puuttuvan sivun. {{cmd:LINE}}- tai {{cmd:PLINE}}-komennon keskellä haamu on **seuraava piste**: portaan seuraava askel (nousu, askelma, nousu…), suorakulmion neljäs kulma, sen sulkeva piste, tai yksi tasavälinen askel lisää. Tuo kohdistin lähelle sitä ja paina **Sarkain**, aivan kuin olisit napsauttanut siinä; jatka tai paina Enter. Lasketaan tällä tietokoneella säännöillä, ilman mallia.

### AUTOSHEET

Aliakset: `ASH`. Itse asettuvat arkit. {{cmd:AUTOSHEET}} ottaa piirustuksen osat (nimetyt näkymäsi, tai mallin erilliset osat, tai koko mallin), valitsee paperikoon (tai antamasi), antaa jokaiselle osalle vakiomittakaavan (yksi kaikille, tai suurin, jonka kukin mahtuu) ja sijoittaa näkymät riveihin uusille arkeille, jossa on piirustusotsikko ja kuvateksti (nimi ja mittakaava) kunkin alla. Mikä ei mahdu yhdelle arkille, saa oman arkkinsa. Yksi kumoamisvaihe. Lasketaan tällä tietokoneella säännöillä, ilman mallia.

### PHOTOSKETCH

Aliakset: `PSK`. Valokuvasta piirustukseksi. Valitse valokuva (JPEG, PNG tai TIFF) käsinpiirroksesta paperiarkilla. {{cmd:PHOTOSKETCH}} löytää arkin neljä kulmaa, suoristaa perspektiivin, ottaa nimeämäsi paperikoon (`Paper`, tai lähin vakio) ja käsinpiirroksen `Scale`-mittakaavan (1 : n), ja jäljittää kynän viivat viivoiksi, kaariksi ja ympyröiksi, yksi taso kutakin kynän väriä kohden (musta, punainen, sininen, vihreä). Jos se ei löydä paperin reunaa, se ottaa koko valokuvan arkiksi ja kertoo siitä. Kirjoitus jätetään pois. Yksi kumoamisvaihe. Tehdään tällä tietokoneella klassisella kuvankäsittelyllä, ilman mallia, eikä mitään lähetetä minnekään. Katso myös skannattujen piirustusten komennot.

### AUTODIM

Aliakset: `ADIM`. Automaattinen mitoitus säännöillä. {{cmd:AUTODIM}} mitoittaa valitut kohteet (tai koko piirustuksen) niiden tasoista ja pystysuorista reunoista: valitsemiesi sivujen (`Sides`) varrella ketjun mitoituksia, yhden kokonaismitan sen ulkopuolella, jokaisen aukon leveyden (samalla suoralla olevien seinäviivojen välisen välin), halkaisijan jokaiselle reikäkoolle, ja `Grid`-vaihtoehdolla ruudukkoviivojen välin. Mitoitusta, joka on jo olemassa, ei tehdä uudelleen. Yksi kumoamisvaihe. Lasketaan tällä tietokoneella säännöillä, ilman mallia.

### GRIDMOVE

Aliakset: `GM`. Ruudukkoviivan siirtäminen kuljettaa koko joukon. {{cmd:GRIDMOVE}} siirtää ruudukkoviivaa (viivaa, jonka tason nimessä lukee grid tai axis) ja siinä roikkuvaa: seinät, joiden päätä viiva koskee, venyvät sen mukana, viivan suuntaiset seinät siirtyvät kokonaan, pilarit (lohkoviitteet ja ympyrät viivalla), sen kupla ja tunniste siirtyvät, ja mitoitukset, joiden pisteet ovat viivalla, mittaavat uuden välin. Anna kaksi pistettä (vain viivan yli menevä osa lasketaan) tai `Distance`. Yksi kumoamisvaihe palauttaa kaiken. Tehdään säännöillä tällä tietokoneella.

### DETAILS

Aliakset: `DET`. Detaljit, jotka löytävät sinut. {{cmd:DETAILS}} ylläpitää toimistosi omia detaljeja: `Add` lisää tämän piirustuksen lohkon luetteloon, `List` ja `Remove` hallitsevat sitä, ja `Find` järjestää ne valitulle (tai viimeksi piirtämällesi) tasojen nimien, lohkojen nimien, viivoituskuvioiden ja muistiinpanojen sanojen perusteella, verraten niitä kunkin detaljin nimeen ja muistiinpanoihin, joten ikkunan yläpuolinen detalji löytää sinun ikkunalistasi. Valitse numero ja piste sijoittaaksesi sen. Kun `Hint` on päällä (myös Asetukset › CadCraft), kohteen valinta, johon detalji sopii, tuo yhden rivin tilariville. Luettelo säilyy tässä selaimessa, tällä tietokoneella, ja juuri tätä luetteloa haetaan. `Share` laittaa sen myös Asiakirjat-kansioon (`.cadcraft/firm-details.json`, kunkin lohkon piirustuksen kanssa): `Pull` lisää tiimisi omistamat, joita sinulla ei ole, `Push` lisää omistamasi, joita heillä ei ole, `Both` tekee molemmat, eikä mitään poisteta kummaltakaan puolelta. Avaa Asiakirjat-kansio ensin ({{cmd:DOCUMENTS}}); kun se on Tiimipilvi-suunnitelman kansio, koko tiimi jakaa yhden luettelon. Kirjaston paneelin detaljikohteessa on painike **Lisää omiin toimiston detaljeihin**, joka laittaa sen samaan luetteloon. Lasketaan sanoilla tällä tietokoneella, ilman mallia.

### SKETCHFIX

Aliakset: `SKF`. Kynäluonnokset tarkoiksi geometrioiksi. Paina ja vedä yksi vapaa veto kerrallaan (kynä, hiiri tai sormi), sitten Enter. Jokainen veto luetaan viivaksi, ympyräksi, kaareksi, suorakulmioksi tai murtoviivaksi: lähes vaakasuorat ja pystysuorat viivat tehdään tarkasti vaakasuoriksi ja pystysuoriksi, suljettu pyöreä veto muuttuu ympyräksi, suljettu veto, jossa on neljä suoraa kulmaa, suorakulmioksi, ja vetojen päät vedetään yhteen ja piirustuksessa jo oleviin päihin. Yksi kumoamisvaihe. Lasketaan tällä tietokoneella säännöillä, ilman mallia.

### SCANATTACH and the scanned-drawing commands

Aliakset: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}}:lla ei ole aliasta. Ne toimivat kuvalla, yksi kumoamisvaihe kukin. {{cmd:SCANATTACH}} lisää PNG-, JPEG-, TIFF-tiedoston (yksi sivu tai kaikki) tai PDF-sivun, joka on kuva. {{cmd:SCANSCALE}} skaalaa arkin kahdesta valitusta pisteestä ja todellisesta etäisyydestä. {{cmd:SCANALIGN}} siirtää ja kääntää sen kahteen pisteeseen (`Scale the sheet to fit` Kyllä/Ei). {{cmd:SCANDESKEW}} näyttää arkin pitkien viivojen kulman ja kääntää arkin, kun hyväksyt `Accept` tai annat `Value`-arvon. {{cmd:SCANCLEAN}} tekee siitä mustavalkoisen (`Threshold` Auto/Adaptive/Level, `Specks`) ja `Run`. {{cmd:SCANCROP}} säilyttää ikkunan. {{cmd:SCANERASE}} poistaa `Rectangle`-, `Polygon`- tai `Lasso`-alueen. {{cmd:SCANTRACE}} jäljittää viivat ja kaaret uudelle tasolle (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) ja kertoo, mitä se löysi ja mitä jätti rasteriksi. {{cmd:SCANINFO}} luettelee alkuperäisen tiedoston ja vaiheet. {{cmd:RASTERSNAP}} kytkee tartunnan skannattujen arkkien viivoihin päälle tai pois. Katso aihe Skannatut piirustukset ja jäljitys.

### REGEN and REGENALL

Aliakset: `RE` {{cmd:REGEN}}-komennolle, `REA` {{cmd:REGENALL}}-komennolle. Rakentaa uudelleen näytöllä piirretyn kuvan piirustuksesta: {{cmd:REGEN}} sillä välilehdellä, jota katsot (arkilla myös malli, jota sen näkymäruudut näyttävät), {{cmd:REGENALL}} jokaisen välilehden, jokaisen jaetun näytön ruudun ja jokaisen avoimen piirustuksen. Käytä niitä, kun kuva näyttää vanhentuneelta skriptatun tai hyvin suuren muutoksen jälkeen, tai kun avustaja muokkasi piirustusta; itse piirustukseen ei kosketa, joten kumottavaa ei ole.

### NAMEDVIEW

Aliakset: `NV`, `VIEWS`. `Anna vaihtoehto [?/Palauta/Tallenna/Ikkuna/Poista] <Palauta>`, sitten näkymän nimi. `S` tallentaa näytöllä olevan näkymän, `W` ikkunan, jonka valitset, `R` näyttää tallennetun näkymän, `D` poistaa yhden, `?` luettelee tämän välilehden näkymät. Tallentaminen olemassa olevan nimen alle korvaa sen; jokainen muutos on yksi kumoamisvaihe. Näkymät kuuluvat välilehdelle, jolla ne tallennettiin. DWG- ja DXF-tiedostot säilyttävät ne (VIEW-taulukko); arkin näkymät palaavat ensimmäiselle arkille, koska tiedosto ei kerro, mihin ne kuuluivat.

### UNDO and REDO

Aliakset: `U` {{cmd:UNDO}}-komennolle; {{cmd:REDO}}-komennolla ei ole aliasta. Myös {{key:Mod+Z}} ja {{key:Mod+Y}}.

### LAYER

Aliakset: `LA`. Siirtyy {{ui:Tasot}}-paneeliin.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Anna uusien kohteiden viivatyyppi` — `ByLayer` (tason mukaan), `ByBlock` (lohkon mukaan) tai nimi (`?` luettelee ne: Continuous, piirustuksen omat, ja DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE niiden `2` (puoli) ja `X2` (kaksinkertainen) kokoineen). {{cmd:LWEIGHT}} (`LW`): uusien kohteiden viivanpaksuus mm:nä tai `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): piirustuksen viivatyypin mittakaava (kumottavissa). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — sama kuin tilarivin {{ui:LWT}}-painike. Katso [Viivanpaksuudet ja viivatyypit](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Anna nimettävän kohteen tyyppi [LAyer/Block]`, `Anna vanha nimi`, sitten uusi nimi; kohteet tai viitteet seuraavat. {{cmd:LAYMRG}}: `Valitse yhdistettävän tason kohde tai [Nimi]`, kunnes {{key:Enter}}, sitten `Valitse kohde kohdetasolla tai [Nimi]` ja `Y`. {{cmd:LAYDEL}}: `Valitse poistettavan tason kohde tai [Nimi]`, sitten `Y`: taso ja jokainen sillä oleva kohde lähtevät (ei taso 0:aa, DEFPOINTS:ia tai nykyistä tasoa). Yksi kumoamisvaihe kullekin. Katso [Järjestä piirustus tasoilla](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Tasot valitsemalla kohteita; myös {{ui:Tasot}}-paneelin {{ui:Työkalut}}-valikossa. {{cmd:LAYISO}}: `Valitse kohteet eristettävillä tasoilla`, sitten {{key:Enter}}: jokainen muu taso menee pois. {{cmd:LAYUNISO}} kytkee ne takaisin päälle. {{cmd:LAYOFF}} ja {{cmd:LAYFRZ}}: `Valitse kohde tasolla, joka kytketään pois` (tai jäädytetään), yhä uudelleen; `U` ottaa takaisin viimeisen, {{key:Enter}} lopettaa. {{cmd:LAYMCUR}}: `Valitse kohde, jonka taso tulee nykyiseksi`. {{cmd:LAYON}} kytkee kaikki tasot päälle, {{cmd:LAYTHW}} sulattaa kaikki tasot. Jokainen komento on yksi kumoamisvaihe. Katso [Järjestä piirustus tasoilla](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} aloittaa tyhjän piirustuksen ja {{cmd:OPEN}} avaa DWG- tai DXF-tiedoston, kumpikin omassa välilehdessään piirustuksen päällä (koskematon uusi piirustus käytetään uuden välilehden sijaan). Tallentamatonta muutosta sisältävän välilehden sulkeminen kysyy ensin. Katso [Jaa näyttö](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, myös {{key:Mod+S}}) lataa kopion piirustuksen muodossa: DWG, jos se avattiin DWG:stä, DXF, jos DXF:stä. Uusi piirustus käyttää muotoa, joka valittiin viimeksi Tallenna nimellä -toiminnossa tässä selaimessa, muuten DWG.

{{cmd:SAVEAS}} (myös {{key:Mod+Shift+S}}) avaa {{ui:Tallenna kopio nimellä}}-valintaikkunan: valitse {{ui:DWG}} (ja sen {{ui:Versio}}), {{ui:DXF R12}} tai {{ui:DXF 2000}}, sitten {{ui:Tallenna}}. Valinta pysyy tälle piirustukselle ja uusille piirustuksille tässä selaimessa.

{{cmd:DXFOUT}} lataa aina DXF R12 -kopion, muuttamatta muotoa, jonka {{cmd:SAVE}} käyttää.

Katso [Tiedostot: mitä avautuu, mitä tallentuu](topic:files#saving).

### TOUR

Aliakset: `TUTORIAL`. Käynnistää kuuden vaiheen ensimmäisen piirustuksen opastuksen uudelleen. Katso [Aloittaminen](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliakset: `TBDOCK`. `Työkalurivin sijainti [Ylä/Ala/Vasen/Oikea]`. Katso [Asetukset](topic:settings#toolbar-position).

### COMMANDLINE

Aliakset: `CMDLINE`. `Komentorivi [Kiinnitetty alareunaan/Irrallinen/Yksi rivi/Näytettävät historiarivit/Komentohistoria (F2)]`: kiinnittää tai irrottaa komentorivin, tekee siitä yhden rivin, kysyy, kuinka monta historiariviä näytetään (0–12), tai avaa historian. Katso [Asetukset](topic:settings#command-line).

### TOPAREA

`Yläalue [Vakio/Tiivis]`: palkit piirustuksen yläpuolella niin kuin ne olivat, tai tiiviinä. Katso [Asetukset](topic:settings#top-area).

### POLARANG

`Anna napaseurannan askel asteina <90>`: askel, jolle {{ui:Napa}}-seuranta linjautuu (enemmän kuin 0, enintään 180). Säilyy tässä selaimessa.

### UNITS

Aliakset: `UN`. Kuinka pituudet kirjoitetaan ja syötetään.

- `Anna pituuden muoto [Tieteellinen/Desimaali/Tekninen/Arkkitehtuuri/Murtoluku] <nykyinen>`
- Arkkitehtuuri ja Murtoluku: `Anna pienimmän näytettävän murtoluvun nimittäjä (1, 2, 4, 8, 16, 32, 64, 128 tai 256)`. Muut: `Anna desimaalien määrä (0–8)`.

Uudet mitoitukset seuraavat sitä. Yksi kumoamisvaihe. Sama kuin {{ui:Pituuden muoto}} ja {{ui:Tarkkuus}} kohdassa {{ui:Nykyiset asetukset}}; katso [Jalat ja tuumat](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliakset: `GDS`. Näyttää IC-asettelun (GDSII-virtatiedosto): laboratoriokokeilu, vain katseluun ja mittaamiseen.

- Tiedostonvalitsin ottaa `.gds`-tiedoston; useilla päälohkoilla `Anna piirrettävä päälohko`.
- Jokaisesta tasosta ja datatyypistä tulee piirustustaso (`GDS 1`, `GDS 2/5`), viitteet ja matriisit sijoitetaan litteinä tiedoston käyttäjäyksikössä (yleensä mikrometreinä). Yksi kumoamisvaihe. Mitään ei simuloida tai tarkisteta, eikä tiedostoa kirjoiteta takaisin.

### DIAGRAM

Aliakset: `TEXTDIAGRAM`, `T2D`. Kaavio tekstistä.

- Laatikko ottaa tekstin (tai yhden rivin, jossa `;` erottaa lauseet komentorivillä): Mermaid-vuokaavio, PlantUML-komponenttikaavio, D2 tai lähtö-kohde-luettelo.
- `Määritä kaavion vasen yläkulma`, sitten `Määritä tekstin korkeus`.

Lohkot ja liitokset ovat tavallisia kohteita tasolla `Diagram`, ja ne valitaan, kun komento päättyy. Yksi kumoamisvaihe. Katso [Piirrä kaavio tekstistä](topic:text-to-diagram).

### OLELIST

Aliakset: `OLES`. DWG:n sisältämät OLE-kohteet, joita CadCraft ei osaa sijoittaa itse.

- Luettelee jokaisen: numero, tyyppi, koko, tallensiko se kuvan.
- `Anna vaihtoehto [Sijoita/Lopeta] <Lopeta>`: Sijoita kysyy numeron, vasemman alakulman ja leveyden, ja piirtää kehyksen kuvan kanssa. Yksi kumoamisvaihe; säilytettyä kohdetta ei muuteta. Katso [Kuvat](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliakset: `SHX`. Omat SHX-fonttisi.

- `Anna SHX-fonttivaihtoehto [Kansio/Tiedostot/Luettelo/Poista/Käänteinen/Tyhjennä] <Luettelo>`

{{ui:Kansio}} lukee jokaisen `.shx`-tiedoston kansiosta (CadCraft Studio; joka käynnistyksellä uudelleen), {{ui:Tiedostot}} ottaa valitut tiedostot (selain), {{ui:Käännä}} asettelee yhden fontin kirjaimet viimeisestä ensimmäiseen. Tekstityylit, jotka nimeävät ladatun fontin, piirtävät sillä. Katso [Piirrä teksti omilla SHX-fonteillasi](topic:shx-fonts).

### LIMITS

Kuinka suuren piirustuksen on tarkoitus olla.

- `Määritä vasen alakulma tai [ON/OFF] <nykyinen>`: piste, `ON` tai `OFF`.
- `Määritä oikea yläkulma <nykyinen>`.

Ruudukko täyttää rajat, {{cmd:ZOOM}} Kaikki näyttää ne, ja kun ne ovat ON, niiden ulkopuolinen piste hylätään (`**Outside limits`). Yksi kumoamisvaihe; tallentuu DWG- ja DXF-muodossa. Katso [Aseta piirustuksen rajat](topic:drawing-limits).

### AUNITS

Aliakset: `ANGUNITS`. Kuinka kulmat näytetään ja syötetään.

- `Anna kulman muoto [Desimaaliasteet/Asteet-minuutit-sekunnit/Mittausuunnat] <nykyinen>`
- `Anna desimaalien määrä (0–8)`, tai kahdelle muulle `Anna tarkkuus` (0 astetta, 2 minuuttia, 4 sekuntia, 5–8 desimaalia sekunnin murto-osaa).

Yksi kumoamisvaihe; tallentuu DWG- ja DXF-muodossa. Sama kuin {{ui:Kulman muoto}} kohdassa {{ui:Nykyiset asetukset}}. Katso [Kirjoita ja näytä suunnat ja kulmat](topic:bearings-and-angles).

### APPLOAD

Aliakset: `AP`; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Lataa sovellus…}}. {{ui:Lataa sovelluksia}}-valintaikkuna: lataa `.lsp`-rutiinit ja `.dcl`-dialogitiedostot, poista ne, lataa uudelleen historiasta, ja Käynnistysvalikko. Rutiinin `(defun c:NAME …)`-komennot toimivat sitten kuten muutkin. Katso [Lataa sovelluksia](topic:load-applications) ja [Aja LISP-rutiineja](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Muokkaa aliaksia…}}) avaa aliastiedostosi (`ALIAS, *COMMAND` -rivit); {{ui:Tallenna}} ottaa sen käyttöön. {{cmd:REINIT}} ottaa sen käyttöön uudelleen. Katso [Muokkaa komentojen aliaksia](topic:command-aliases).

### LISPEDIT

Aliakset: `VLIDE`; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:LISP editor}}. Avaa LISP-editorin, ikkunan, joka pysyy auki piirustuksen vieressä.

- Teksti: rivinumerot, kursorin kohdalla olevan sulkumerkin pari merkitään (punaisena, jos sillä ei ole paria), {{key:Enter}} sisentää uuden rivin avoimen sulkumerkin alle, {{key:Tab}} kirjoittaa kaksi välilyöntiä, {{key:Esc}} poistuu tekstistä.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): lukee jokaisen muodon, kuten {{cmd:APPLOAD}} tekee tiedostolle, ja tekee sen `c:`-komennot. Tiedosto näkyy {{cmd:APPLOAD}}-komennon luettelossa.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): suorittaa valitut muodot tai kursorin kohdalla olevan muodon.
- {{ui:Stop}}: lopettaa käynnissä olevan rutiinin.
- {{ui:Console}}: rutiinin tulostus ja jokainen virhe rivinsä kanssa; napsauta virhettä mennäksesi sinne. Teksti suoritetaan yksi ylätason muoto kerrallaan, joten rivi on muodon, tai sen sisällä se rivi, joka kutsuu virheen nimeämää funktiota.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): `.lsp`-tiedosto. Teksti säilyy myös tässä selaimessa, joten ikkunan sulkeminen ei menetä sitä.
- Tekstin vieressä: rutiinin määrittelemät funktiot, ne, joita se kutsuu ja joita tällä LISP:llä ei vielä ole, ne, joita se kutsuu eikä ole määritelty siinä eikä sisäänrakennettu, sekä täydet luettelot siitä, mitä on rakennettu ja mitä ei.

Teksti, jossa sulkumerkki on jäänyt sulkematta tai merkkijono ei ppääty, ei suoriteta: rivi nimetään. Askel-askeleelta -debuggeria, katkaisukohtia tai tarkkailuikkunaa ei ole. Katso [Aja LISP-rutiineja](topic:run-lisp).

### HELP

Aliakset: `?`. Tulostaa jokaisen komennon, sen aliakset ja yhden rivin kuvauksen komentorivin historiaan. Se ei avaa tätä ohjetta: paina {{key:F1}} tai napsauta {{ui:Ohje}}.

## Kohteiden valinnan kehote

Missä tahansa `Valitse kohteet` -kehotteessa: napsauta kohteita, piirrä ikkunoita (vasemmalta oikealle) ja ristikkäisiä ikkunoita (oikealta vasemmalle) kahdella napsautuksella, tai paina ja vedä lassoa ({{key:Space}} vedon aikana: ikkuna, ristikkäinen, aita), {{key:Shift}}+napsautus poistaa, ja {{key:Enter}} lopettaa. Voit myös kirjoittaa `ALL` (kaikki), `L` (viimeisin kohde), `P` (Edellinen: mitä viimeisin komento käytti), `F` (Aita: kohteet, joita pisteiden viiva ylittää; `U` ottaa pisteen takaisin), `W` (Ikkuna), `C` (Ristikkäinen), `R` (Poistotila: napsautukset poistavat kohteita; kehote kuuluu `Poista kohteet`) ja `A` (Lisää uudelleen). `?` luettelee ne. Niitä ei näytetä kehotteessa. {{key:Tab}} päällekkäisten kohteiden kohdalla korostaa seuraavan; napsauta valitaksesi sen. Katso [Valitse kohteet](topic:select-objects).

### ACCESS

Aliakset: `AX`. Piirtäminen ilman näköä. {{cmd:ACCESS}} kytkee Access-tilan päälle tai pois (`On`, `Off`) ja vaihtaa tartuntaäänet (`Sound`) ja puhutut komennot (`Voice`); se kertoo ensin tilan. Kun Access on päällä, jokainen komento ja tulos luetaan ääneen ruudunlukijan kautta, ja piirustusalueella on näppäimistökohdistin. Ohjeaiheessa "Piirtäminen ilman näköä" on näppäimet.

### DESCRIBE

Aliakset: `DESC`. Kertoo, mitä piirustus sisältää: kuinka monta kohdetta, minkä tyyppisiä, kuinka suuria, kuinka monta tasoa, mitä on valittu. Lukee vain; ei muuta mitään.

### WHEREAMI

Aliakset: `WHERE`. Kertoo, missä kohdistin on piirustuksen yksiköissä.

### NEARBY

Kertoo, mikä on lähellä kohdistinta, lähin ensin, kukin etäisyyden ja puolen kanssa, jolla se on.

### SAYSEL

Kertoo, mikä on valittu, yksi lause kohdetta kohden (viivan pituus, päät ja kulma; ympyrän säde ja keskipiste; teksti kirjoitettuna).

### VOICE

Kytkee puhutut komennot päälle tai pois. Ne tunnistetaan tällä tietokoneella; siellä, missä selain ei voi tehdä sitä, ääni pysyy pois päältä, ellet valitse selaimen verkkopalvelua Asetuksissa.

### TOUCHCROSSHAIR

Aliakset: `TCX`. Siirretty ristikko piirtämiseen sormella, jotta sormenpää ei peitä valitsemaasi pistettä. Kun se on päällä, yksi sormi piirustuksella ei valitse: se siirtää ristikkoa, joka on sormen yläpuolella ja sivulla. Kohdistimen tartunnat ja seuranta seuraavat ristikkoa. Sormen nostaminen ei valitse mitään ja jättää ristikon paikalleen. Valitaksesi paina {{ui:Click}}-painiketta piirustuksen kulmassa, tai napauta piirustusta toisella sormella mihin tahansa. Pidä {{ui:Click}} painettuna toisen sormen liikkuessa vetääksesi (valintaikkuna, lasso, ote). Paikallaan pidetty sormi tai {{ui:Enter}}-painike on Enter. Kaksi sormea panoroi ja zoomaa kuten ennen. Alareunan ja kaukaisen reunan lähellä ristikko kiristyy sormen ympärille, jotta jokainen piirustuksen osa on saavutettavissa. Kynä ja hiiri valitsevat aina suoraan.

{{cmd:TOUCHCROSSHAIR}} kertoo tilan ja kysyy `ON`, `OFF`, `Auto` (päällä vain, kun sormi on ainoa osoitin, joten se on pois tietokoneella, jossa on hiiri), `Distance` (kuinka kaukana ristikko on sormesta, 24–240 pikseliä) tai `Side` (`Left`: ylös ja vasemmalle, oikeakätisille; `Right` vasenkätisille; painikkeet siirtyvät toiseen kulmaan). Samat valinnat ovat Asetukset › CadCraft -kohdassa, ja kosketusnäytöllä varustetussa laitteessa tilarivillä on {{ui:Offset crosshair}}-kytkin. Valinnat säilyvät tässä selaimessa.

### WHOHAS

Kertoo, kuka on avannut piirustuksen. CadCraft Studiossa tietokoneella DWG:n tai DXF:n avaaminen kirjoittaa sen viereen pienen lukitustiedoston (`Plan.dwg.cclock`: kuka, mistä lähtien, mikä versio), päivittää sen minuutin välein piirustuksen ollessa auki ja poistaa sen piirustuksen sulkeutuessa. Jos avaat piirustuksen, jonka joku muu on auki, se kertoo kuka ja mistä lähtien, ja tarjoaa {{ui:Open read-only}} (Tallenna pyytää sitten uutta nimeä), {{ui:Open anyway}} (toinen henkilö saa tiedon seuraavassa päivityksessään) tai {{ui:Cancel}}. Tallentaminen toisen henkilön auki olevan tiedoston päälle kysyy ensin. Lukitus, jota ei ole päivitetty viiteen minuuttiin, on vanhentunut: toinen kopio suljettiin tallentamatta, tai tietokone on lepotilassa.

{{cmd:WHOHAS}} kysyy `Current` (avoin piirustus), `File` (valitse yksi), `FOlder` (valitse kansio: luettelee jokaisen siinä olevan piirustuksen, joka on auki jossain), `Path` (kirjoita koko polku) tai `Name` (nimi, jonka muut näkevät; tilisi nimi, kun olet kirjautunut sisään). Studio voi päästä vain kansioihin, jotka olet valinnut: piirustukseen, joka on avattu kansiosta, jota ei koskaan valittu, se kertoo kerran, ettei se voi merkitä piirustusta auki olevaksi; `FOlder` valitsee kansion, ja lukitukset toimivat siellä siitä eteenpäin. Lukitus on huomautus ihmisille, ei este: toinen ohjelma voi silti kirjoittaa tiedoston. Selaimessa kansioita ei ole, joista katsoa, ja komento kertoo sen.

### OVERKILL

Poistaa kaksoiskappaleet kohteista ja siistii päällekkäisiä viivoja ja kaaria piirustuksille, jotka saapuvat täynnä kaksinkertaista viivatyötä. `Valitse siivottavat kohteet`, {{key:Enter}}, sitten {{key:Enter}} uudelleen siivotakseen näytettyjen asetusten mukaan, tai muuta yksi ensin:

- `Tolerance`: kuinka lähellä kaksi koordinaattia on, jotta ne lasketaan samoiksi (0,000001 aluksi; 0 tarkoittaa täsmälleen samaa).
- `Ignore`: ominaisuudet, jotka saavat erota kahden muuten samanlaisen kohteen välillä. Kirjoita nimi vaihtaaksesi sen: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, tai `None` / `All`. {{key:Enter}} kun valmis.
- `Overlap`: päällä tai pois. Päällä ovat samalle suoralle osuvat päällekkäiset viivat yhdeksi viivaksi (toisen sisällä oleva viiva poistetaan), ja saman ympyrän päällekkäiset kaaret yhdeksi kaareksi; täyden kierroksen kaaret muuttuvat ympyräksi, ja ympyrälle osuva kaari poistetaan.
- `Ends`: päällä tai pois. Päällä ovat samalle suoralle osuvat viivat ja saman ympyrän kaaret, jotka koskettavat vain päästä päähän, yhdeksi kappaleeksi.

Jokainen kohdetyyppi tarkistetaan kaksoiskappaleiden varalta: kaksi kohdetta ovat kaksoiskappaleita, kun niiden geometria on sama toleranssin sisällä ja niiden taso, väri, viivatyyppi, viivatyypin mittakaava, viivanpaksuus, paksuus, läpinäkyvyys ja korkeus täsmäävät (vähennettynä ne, jotka ohitat). Viivat ja avoimet murtoviivat täsmäävät myös, kun ne piirretään toisin päin. Ensimmäinen kohde piirtojärjestyksessä jää ja säilyttää omat ominaisuutensa. Komento kertoo, kuinka monta kohdetta se tarkisti ja poisti: kaksoiskappaleet, yhdistetyt päällekkäiset osat, päästä päähän yhdistetyt osat. Yksi {{cmd:UNDO}} ottaa kaiken takaisin. Asetukset säilyvät, kunnes suljet piirustusikkunan.

Se jättää rauhaan: lukittujen tasojen kohteet ja piilotetut kohteet. Se ei yhdistä viivoja, joilla on korkeus (Z) (täsmälleen samat kaksoiskappaleet niistä kuitenkin menevät), eikä se koske murtoviivan osuuksien sisällä oleviin segmentteihin (niitä ei karsita), murtoviivan osuudelle osuvaan viivaan eikä suljettuun murtoviivaan, joka on piirretty toisin päin.

### DRAWORDER

Muuttaa, mitkä kohteet piirretään edessä. `Valitse piirrettävät kohteet uudelleen`, {{key:Enter}}, sitten `Kohteiden yläpuolelle`, `Kohteiden alapuolelle`, `Eteen` tai `Taakse` ({{key:Enter}} = `Taakse`). `Kohteiden yläpuolelle` ja `Kohteiden alapuolelle` kysyvät viitekohteet: valinta menee heti etumaisimman niistä eteen, tai takimmaisimman taakse. Valitut kohteet säilyttävät keskenään oman järjestyksensä. Yksi kumoamisvaihe. Järjestys tallentuu piirustuksen mukana DWG- ja DXF-muodossa, jossa se on järjestys, jossa kohteet kirjoitetaan.

Näytöllä CadCraft piirtää täytetyt alueet (yhtenäiset viivoitukset, leveät murtoviivat, maskit) ensin, sitten viivat, sitten tekstin, joten teksti luetaan aina täytön päältä; piirtojärjestys näkyy täytettyjen kohteiden ja kuvien kesken. Muut ohjelmat, jotka avaavat tiedoston, piirtävät kaikki kohteet tallennetussa järjestyksessä.

### TEXTTOFRONT

Tuo tekstin, mitoitukset ja johtoviivat kaiken muun eteen avoimessa avaruudessa: `Teksti`, `Mitoitukset`, `Johtoviivat` tai `All` ({{key:Enter}} = `All`). Yksi kumoamisvaihe. Se kertoo, jos niitä ei ole, tai jos ne ovat jo edessä.

### HATCHTOBACK

Lähettää kaikki avoimen avaruuden viivoitukset kaiken muun taakse, jotta täytöt eivät peitä viivatyötä ja tekstiä tallennetussa tiedostossa. Ei kehotteita. Yksi kumoamisvaihe.

### ISOLATEOBJECTS

Aliakset: `ISOLATE`. Näyttää vain valitut kohteet: kaikki muu avoimessa avaruudessa katoaa näkyvistä, kunnes {{cmd:UNISOLATEOBJECTS}}. Toisin kuin {{cmd:LAYISO}}, se toimii kohteilla, jotka valitset, tasoista riippumatta, eikä muuta tasoja. Piilotettuja kohteita ei piirretä, valita, tartuta, zoomata eikä tulostaa, ja komennot, jotka ottavat `ALL`-vaihtoehdon, ohittavat ne. Piirtämäsi kohteet, kun kohteet on eristetty, näkyvät kuten tavallisesti.

Tämä koskee vain istuntoa: mitään siitä ei tallenneta piirustukseen, se ei ole kumoamisvaihe, ja piirustuksen avaaminen uudelleen näyttää kaiken. Kun kohteita on piilotettu, tilarivillä on painike niiden määrällä; napsauta sitä näyttääksesi ne uudelleen.

### HIDEOBJECTS

Piilottaa valitut kohteet, kunnes {{cmd:UNISOLATEOBJECTS}}. Samat säännöt kuin {{cmd:ISOLATEOBJECTS}}-komennossa: vain istunnoksi, ei tallennu, ei kumoamisvaihe.

### UNISOLATEOBJECTS

Aliakset: `UNISOLATE`, `UNHIDE`. Näyttää uudelleen kaikki kohteet, jotka {{cmd:ISOLATEOBJECTS}} tai {{cmd:HIDEOBJECTS}} piilotti, ja kertoo, kuinka monta palasi.

### LAYLOCKFADE

Asettaa, miltä lukittujen tasojen kohteet näyttävät ja pääseekö napsautus niihin. Se kertoo nykyisen tilan ja ottaa:

- luvun 0–90: himmennyksen määrä prosentteina (aluksi 50). 0 kytkee himmennyksen pois.
- `ON` tai `OFF`: himmennys päälle tai pois, määrä säilyy.
- `Pick`, sitten `Yes` tai `No`: saako napsautus valita lukittujen tasojen kohteita, kun mikään komento ei ole käynnissä? `No` (oletus): niitä ei voi valita lainkaan. `Yes`: napsautus tai ikkuna valitsee ne, jotta {{ui:Ominaisuudet}} voi näyttää ne; niitä ei silti voi muuttaa, eikä komennon oma `Valitse kohteet` koskaan ota niitä.

Kohteiden tartunta löytää lukittujen tasojen kohteet kummassakin tapauksessa. Tulosteita ei koskaan himmennetä. Molemmat asetukset ovat sinun, eivät piirustuksen, ja ne ovat myös kohdassa {{ui:Asetukset}} kohdassa {{ui:Locked layers}}.

### BURST

Hajottaa lohkoviitteet ja säilyttää, mitä niiden attribuutit kertovat. `Valitse hajotettavat lohkoviitteet`, {{key:Enter}}: jokainen viite korvataan lohkon kohteilla, ja jokaisen näkyvän attribuutin arvo muuttuu tavalliseksi tekstiksi kyseisen attribuutin omalle tasolle (tasolla 0 oleva attribuutti päätyy viitteen tasolle, kuten lohkon muutkin kohteet tasolla 0). Näkymättömät attribuutit pudotetaan. Lohko lohkon sisällä pysyy lohkoviitteenä. Yksi kumoamisvaihe; se kertoo, kuinka monta viitettä hajotettiin ja kuinka monta attribuutin arvoa muutettiin tekstiksi.

Se hylkää linkitetyn piirustuksen nimeltä (sido se ensin, tai kopioi siitä {{cmd:NCOPY}}-komennolla), ja jättää muut valitut kohteet rauhaan. Lohkoviitteille {{cmd:EXPLODE}} antaa samat kohteet; {{cmd:BURST}} ottaa vain lohkoviitteet ja laskee attribuuttitekstin.

### TXT2MTXT

Aliakset: `T2M`. Yhdistää yhden rivin tekstit yhdeksi kappaletekstiksi. `Valitse yhdistettävät yhden rivin tekstit`, {{key:Enter}}, sitten `Kappale` (rivit juoksevat yhteen ja rivittyvät leveimmän rivin leveyteen) tai `Lines` (jokainen teksti pysyy omana rivinään); {{key:Enter}} ottaa viimeksi käytetyn. Rivit järjestetään ylhäältä alas, sitten vasemmalta oikealle, ylätekstin suunnan mukaan. Kappale roikkuu ylätekstin vasemmasta yläkulmasta ja ottaa sen korkeuden, kierron, tyylin, tason ja värin. Yksi kumoamisvaihe.

Teksti, joka on jo kappaletekstiä, tyhjä teksti ja muut kohteet valinnassa jätetään rauhaan, ja komento kertoo, kuinka monta.

### NCOPY

Kopioi kohteita lohkoviitteestä tai linkitetystä piirustuksesta piirustukseen räjäyttämättä mitään. `Valitse kohde lohkoviitteen tai linkitetyn piirustuksen sisältä`: lähintä valintaasi oleva kohde kopioidaan siihen, missä se näkyy, riippumatta siitä, kuinka monta lohkoa syvällä se on; valitse lisää ja paina {{key:Enter}}. Seuraavaksi `Peruspiste kopioiden siirtämiseen`: {{key:Enter}} jättää ne paikalleen, tai anna peruspiste ja toinen piste. Koko komento on yksi kumoamisvaihe.

Kopio saa tason, jolla se näkyy: lohkon sisällä tasolla 0 oleva kohde päätyy viitteen tasolle, jossa se oli, ja ByBlock-väristä tulee viitteen väri. Linkitetystä piirustuksesta taso `Plan|Walls` muuttuu nimeksi `Plan$0$Walls` (linkin antama nimi), ja se tehdään linkitetyn tason värillä, viivatyypillä ja viivanpaksuudella. Attribuutin arvo kopioidaan tekstinä. Lukittujen tasojen lohkoviitteitä ei voi valita.

### FLATTEN

Asettaa valittujen kohteiden korkeuden (Z) ja paksuuden 0:ksi. `Valitse litistettävät kohteet`, {{key:Enter}}. Se litistää myös valinnan käyttämien lohkomääritysten sisällä olevat kohteet (ja niiden sisällä olevat lohkot), joten jokainen viite näihin lohkoihin muuttuu; linkitetyt piirustukset jätetään ennalleen. Yksi kumoamisvaihe; se kertoo, kuinka monta kohdetta muuttui, ja sanoo, jos yhdelläkään ei ollut korkeutta tai paksuutta.

CadCraft säilyttää 2D-piirustuksessa kolmannesta ulottuvuudesta seuraavat: korkeuden ympyröillä, kaarilla, ellipseillä, pisteillä, tekstillä, lohkoviitteillä, viivoituksilla, johtoviivoilla ja murtoviivoilla (niiden korkeusasema), korkeuden viivan kummassakin päässä, ja paksuuden viivoilla, ympyröillä, kaarilla, murtoviivoilla, pisteillä ja tekstillä, kuten tiedostossa oli. {{cmd:FLATTEN}} tyhjentää juuri nämä. Se ei koske 3D-mallia 3D-välilehdellä, 3D-pintoja tai kiintokappaleita, eikä kohdetta, joka piirrettiin kallistetussa tasossa, sillä se tuotiin jo piirustustasoon tiedostoa avattaessa.

### BREAKLINE

Piirtää viivan katkaisumerkillä lyhennettyä näkymää varten. Se kertoo nykyisen koon ja jatkeen, sitten `First point of the break line` (tai `Size` / `Extension` muuttaaksesi niitä ensin), `Second point`, ja `Where the break symbol sits`: napsauta viivaa pitkin, tai {{key:Enter}} keskelle. Tuloksena on yksi murtoviiva nykyisellä tasolla: viiva, joka ulottuu jokaisen pisteen yli jatkeen verran, ja Z-muotoinen viiva, joka on yhtä korkea kuin koko ja puolet siitä pitkä.

`Size` ja `Extension` muistetaan asetuksinasi (koko alkaa kahdesta mitoituksen tekstin korkeudesta kerrottuna mitoituksen mittakaavalla; jatke puolesta koosta). {{key:Enter}} toistaa komennon.

### AUDIT

Tarkistaa avoimen piirustuksen vaurioiden varalta ja korjaa ne. {{cmd:AUDIT}} katsoo jokaista kohdetta mallissa, arkeilla ja lohkojen sisällä, ja tasotaulukkoa, ja luettelee löydökset lajeittain:

- luvut, jotka eivät ole äärellisiä tai ovat järjettömän suuria;
- kohteet ilman kokoa: viiva ilman pituutta, ympyrä ilman sädettä, murtoviiva yhdellä pisteellä, teksti ilman kirjaimia tai korkeutta, lohkoviite nollamittakaavassa;
- kohteet tasolla, jota piirustuksessa ei ole; viitteet lohkoon, jota ei ole; teksti- ja mitoitustyylien nimet sekä viivatyyppien nimet, joita piirustuksessa ei ole;
- lohkot, jotka sisältävät itsensä, suoraan tai muiden lohkojen kautta;
- kohteet, jotka jakavat tunnisteen, avaimen tai tiedostoviitteen;
- mitoitukset ilman pisteitä, joista ne mitataan, ja viivoitukset, joiden raja ei ole suljettu ääriviiva.

Sitten se kysyy `Korjataanko ne? [Kyllä/Ei]`. `Ei` ei muuta mitään. `Kyllä` korjaa kaiken yhdellä kumoamisvaiheella: se, mitä ei voi piirtää, poistetaan (virheelliset luvut, ei kokoa, puuttuva lohko, rikkinäinen mitoitus, viivoitus ilman käyttökelpoista rajaa, lohkoviite, joka sulkee lohkojen ympyrän); puuttuva taso luodaan; tuntemattomat tyyli- ja viivatyyppien nimet palautetaan oletuksiin; jaettu avain korvataan. Se kertoo, kuinka monta kohdetta poistettiin ja kuinka monta korjattiin. Samat löydökset näkyvät Ongelmat-paneelissa, jokaisella oma {{ui:Repair}}-painikkeensa.

Se ei kiellä mitään, mutta tarkistaa vain sen, minkä CadCraft itse piirtää: muille ohjelmille säilytettyä tietoa (3D-kiintokappaleet, OLE-kohteet) ei avata.

### RECOVER

Avaa vaurioituneen DXF- tai DWG-tiedoston. {{cmd:RECOVER}} kysyy tiedostoa, lukee sen, mikä voidaan lukea, sen sijaan että hylkäisi tiedoston, luettelee, mitä ohitettiin tai oletettiin, ja tarkistaa sitten ja korjaa piirustuksen kuten {{cmd:AUDIT}} tekee vastauksella `Kyllä`.

- DXF: rivit, jotka eivät ole koodi- ja arvoparin osa, ohitetaan, kunnes parit asettuvat taas kohdalleen; osio ilman loppua suljetaan; tiedosto, joka on katkaistu, luetaan katkaisuun asti; binäärinen DXF, joka on katkaistu, luetaan viimeiseen kokonaiseen arvoon asti. Kun osio, lohko tai kohde ei vieläkään ole luettavissa, se jätetään pois ja nimetään, ja lukeminen jatkuu sen ohi.
- DWG: kohteet, jotka eivät läpäise tarkistuksiaan tai joita ei voi purkaa, jätetään pois, ja kadonnut kohdeluettelo rakennetaan uudelleen kulkemalla kohteiden tiedot läpi.

Levyllä oleva tiedosto ei muutu. Palautettu piirustus avautuu tallentamattomana: tallenna se uudella nimellä. Tiedosto, josta ei voi lukea mitään lainkaan, hylätään syyn kanssa.

### LEGACYTEXT

Muuntaa vanhoilla 8-bittisillä vietnamilaisilla fonteilla kirjoitetun tekstin Unicodeksi. Lyhyet nimet `TEXTTOUNICODE` ja `VNTEXT`.

Vanhemmat vietnamilaiset piirustukset säilyttävät tekstinsä länsimaisina merkkeinä, jotka vain fontti muuttaa vietnamiksi: TCVN3-teksti ABC-fonteissa (`.VnTime`, `.VnArial` ja isoilla kirjaimilla kirjoitetut fontit, joiden nimi päättyy `H`: han), ja VNI-teksti VNI-fonteissa (`VNI-Times`). CadCraft näyttää tällaisen tekstin oikein heti, kun piirustus on auki, tekstityylin, kohteen tai kappaletekstin kohdan fontin mukaan; tiedosto säilyttää yhä vanhat merkit.

{{cmd:LEGACYTEXT}} kertoo, kuinka monta tekstiä se löysi kussakin koodauksessa, ja kysyy `Muunnetaanko … Unicodeksi?`. `Kyllä` kirjoittaa jokaisen uudelleen (malli, arkit, lohkot, attribuuttiarvot ja -määritykset) ja antaa tekstityyleille Unicode-fontin (Times New Roman, Arial tai Courier New vanhan fontin tyypin mukaan), yhdellä kumoamisvaiheella. Kappaletekstin muotoilu säilyy.

Kun mikään teksti ei käytä tunnettua fonttia (tyyli, joka on menettänyt fonttinimensä), se kysyy `Lue valitut tekstit koodauksena [Tcvn3/Vni/None]`: valitse koodaus ja valitse tekstit. Jo Unicode-teksti jätetään rauhaan. Mitoitustekstin ohitukset ja monivitenuolen teksti eivät muunnu.
