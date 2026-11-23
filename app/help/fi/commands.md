---
title: Komentoviite
summary: Jokainen CadCraft-piirtosovelluksen komento lyhenteineen, kysymyksineen, valintoineen ja oletuksineen.
keywords: komennot, lyhenteet, komentoluettelo, ala, kehä, measuregeom, viiva, pline, ympyrä, kaari, typistä, siirtymä, dimlinear, lohko, lisää, asettelu, tulosta, zoomaa, ohje, copyclip, cutclip, pasteclip, pasteorig, copybase, monista, selectall
from: 979ffe3b
---

Kirjoita komennon nimi tai lyhenne ja paina {{key:Enter}} tai {{key:Space}}. Kirjainkoolla ei ole merkitystä, ja alkuun kirjoitettu `_`, `-`, `.` tai `'` jätetään huomiotta. Kirjoita `HELP` (tai `?`) tulostaaksesi lyhyen luettelon kaikista komennoista komentorivin historiaan; paina {{key:F1}} tätä ohjetta varten.

Kehotteiden lukeminen: valinnat ovat hakasulkeissa, ja valitset yhden kirjoittamalla sen isot kirjaimet (`H` halkaisijalle). Oletus on kulmasulkeissa; hyväksy se painamalla {{key:Enter}}. Kun pistettä kysytään, voit napsauttaa tai kirjoittaa minkä tahansa muodon kohdasta [Koordinaatti- ja etäisyyssyöttö](topic:coordinate-entry). Kun etäisyyttä kysytään, voit kirjoittaa luvun tai napsauttaa kaksi pistettä.

Kun pistettä tai kohdetta vaaditaan eikä oletusta ole, {{key:Enter}} lopettaa komennon. {{key:Esc}} peruuttaa sen. Mitä komento teki, on yksi kumoamisaskel.

## Piirrä

### LINE

Lyhenne: `L`. Suoria jänteitä, jokainen omana kohteenaan.

- `Määritä ensimmäinen piste` (Enter: aloita viimeksi antamastasi pisteestä)
- `Määritä seuraava piste [Kumoa (U)]`, toistuu. Kahden janan jälkeen: `[Kumoa (U)/Sulje (C)]`.
- `U` ottaa viimeisen janan takaisin, `C` sulkee ensimmäiseen pisteeseen ja päättyy. Enter lopettaa.

### PLINE

Lyhenne: `PL`. Yksi murtoviiva viiva- ja kaarisegmenteistä.

- `Määritä aloituspiste`
- `Määritä seuraava piste [Kaari (A)/Sulje (C)/Kumoa (U)]` (Sulje, kun on kaksi segmenttiä)
- `A` vaihtaa kaariin: `Määritä kaaren loppupiste [Viiva (L)/Sulje (CL)/Kumoa (U)]`. Jokainen kaari jatkuu tangentiaalisesti edelliseen segmenttiin. `L` palaa viivoihin, `CL` sulkee kaarella.
- Enter lopettaa; murtoviiva jää auki.

### CIRCLE

Lyhenne: `C`.

- `Määritä ympyrän keskipiste [3P/2P/Ttr (tan tan radius)]`
- `Määritä ympyrän säde [Halkaisija (D)] <viimeisin säde>`; `D` kysyy `Määritä ympyrän halkaisija`.
- `2P`: halkaisijan kaksi päätä. `3P`: kolme pistettä ympyrällä.
- `T` (myös komento `TTR` ja {{ui:Piirrä}} › {{ui:Lisää}} › {{ui:Ympyrä: Tan, Tan, Säde}}): `Määritä ensimmäisen tangentin kohde ympyrän kohdalla`, sitten toinen ja säde (Enter: viimeisin). Ympyrä koskettaa molempia kohteita (viivoja, kaaria, ympyröitä, murtoviivan segmenttejä, myös lohkojen sisällä); niistä ympyröistä, jotka koskettavat, valitaan se, joka koskettaa lähimpänä napsautuksiasi. Jos sopivaa ei ole, ilmoitetaan ”Ympyrää ei ole”.
- `TTT` (tai {{ui:Piirrä}} › {{ui:Lisää}} › {{ui:Ympyrä: Tan, Tan, Tan}}): kolme kohdetta; ympyrä, joka koskettaa kaikkia kolmea, lähin napsautuksiasi (kolme viivaa antavat sisemmän tai ulomman ympyrän napsautuspaikasta riippuen).

### ARC

Lyhenne: `A`.

- `Määritä kaaren aloituspiste [Keskipiste (C)]`, `Määritä kaaren toinen piste`, `Määritä kaaren loppupiste`: kaari kolmen pisteen kautta.
- `C`: `Määritä kaaren keskipiste`, `Määritä kaaren aloituspiste`, `Määritä kaaren loppupiste`. Kaari kulkee vastapäivään aloituksesta loppuun.

### RECTANG

Lyhenteet: `REC`, `RECTANGLE`. Suljettu murtoviiva.

- `Määritä ensimmäinen kulmapiste`, `Määritä toinen kulmapiste`. Kirjoita toiseen kulmaan `@leveys,korkeus`.

### POLYGON

Lyhenne: `POL`. Säännöllinen monikulmio suljettuna murtoviivana.

- `Anna sivujen määrä <4>` (3–1024)
- `Määritä monikulmion keskipiste`
- `Anna vaihtoehto [Piirretty ympyrään (I)/Ympyrän ympärille (C)] <I>`
- `Määritä ympyrän säde`: napsauta tai kirjoita piste; sen etäisyys asettaa koon ja suunta kääntää monikulmion.

### ELLIPSE

Lyhenne: `EL`.

- `Määritä ellipsin akselin päätepiste [Keskipiste (C)]`, `Määritä akselin toinen päätepiste`, `Määritä etäisyys toiseen akseliin`
- `C`: `Määritä ellipsin keskipiste`, `Määritä akselin päätepiste`, sitten etäisyys toiseen akseliin.
- `I` (`Isocircle`, vain kun {{cmd:ISODRAFT}} on päällä): keskipiste, sitten säde tai `Halkaisija (D)`: ellipsi, jonka ympyrä näyttää nykyisellä isometrisellä tasolla.

### HATCH

Lyhenteet: `H`, `BH`, `BHATCH`; tai {{ui:Viivoitus}} työkalurivillä. Tulostaa ensin nykyisen kuvion, mittakaavan ja kulman.

- `Määritä sisäpiste [Valitse kohteet (S)/Kuvio (P)/Mittakaava (SC)/Kulma (A)]`, toistuu (`Kumoa (U)`, kun alue on olemassa): jokainen napsautus lisää sen suljetun alueen, joka on sen ympärillä, ja sen sisällä olevat suljetut muodot ovat saarekkeita. Enter tekee yhden viivoituksen kaikista.
- `S`: `Valitse suljetut kohteet` (suljetut murtoviivat, ympyrät, suljetut ellipsit).
- `P`: `Anna kuvion nimi, SOLID tai ? luettelolle <nykyinen>`. `SC`: `Määritä kuvion mittakaava`. `A`: `Määritä kuvion kulma`.
- `G` (Liukuväri): täyttö on liukuväri kuvion sijaan. Katso {{cmd:GRADIENT}}, jonka kysymyksiä se käyttää.

Katso [Viivoitus ja täyttöalueet](topic:hatch).

### GRADIENT

Lyhenne: `GD`. Täyttää alueen yhden tai kahden värin liukuvärillä. Se kysyy ensin liukuvärin, sitten jatkaa kuten {{cmd:HATCH}} (`Määritä sisäpiste`, `S` suljetuille kohteille, {{key:Enter}} lopettaa).

- `Anna liukuvärin vaihtoehto [Tyyppi (T)/Yksi väri (O)/Kaksi väriä (TW)/Kulma (A)/Keskitetty (C)/Lopeta (X)] <X>`, toistuu; se näyttää liukuvärin sellaisena kuin se nyt on joka kerta.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, tai jokin niistä käänteisenä (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Alkukirjaimet riittävät.
- `O`: yksi väri, sitten sen sävy välillä 0–1 (0 tummentaa mustaksi, 0.5 on väri itse, 1 vaalentaa valkoiseksi). `TW`: ensimmäinen ja toinen väri. Väri on luku 1–255, kolme lukua kuten `255,128,0`, tai `#rrggbb`.
- `A`: kulma, jossa liukuväri kulkee. `C`: keskitetty Kyllä tai Ei (Ei siirtää liukuvärin keskikohdan yhdelle puolelle).
- Se hylkää tuntemattoman värin tai tyypin ja sävyn, joka on välin 0–1 ulkopuolella.

{{cmd:HATCHEDIT}} `G` ja Ominaisuudet (Liukuväri) muuttavat liukuväriä myöhemmin tai tekevät mistä tahansa viivoituksesta liukuvärin. Liukuväri piirretään näytölle ja tulostetaan. DWG 2004 ja uudemmat säilyttävät sen todellisena liukuvärinä, DXF 2000 ja DWG 2000 säilyttävät sen CadCraftille, ja muut ohjelmat näkevät yhtenäisen täytön ensimmäisellä värillä.

### HATCHGENERATEBOUNDARY

Lyhenne: `HGB`. Tekee rajan uudelleen viivoituksesta, joka on menettänyt sen. `Valitse viivoitukset` (tai valitse ne ensin), sitten `Linkitetäänkö jokainen viivoitus sen uuteen rajaan, jotta viivoitus seuraa sitä? [Kyllä (Y)/Ei (N)] <Kyllä>`.

- Jokainen viivoituksen silmukka muuttuu suljetuksi murtoviivaksi viivoituksen tasolla; uudet murtoviivat jäävät valituiksi. Kaareva reuna palaa lyhyinä suorina paloina, joita viivoitus pitää.
- Kyllä: viivoitus seuraa uutta rajaa, kuten {{cmd:HATCH}}-komennolla tehty viivoitus. Yksi kumoamisaskel.
- Se kertoo, jos yhtään viivoitusta ei valittu.

### POINT

Lyhenne: `PO`; tai {{ui:Piirrä}} › {{ui:Lisää}} › {{ui:Piste}}. Pistekohteita, yksi per napsautus, kunnes Enter.

- `Määritä piste`

### XLINE

Lyhenne: `XL`; tai {{ui:Piirrä}} › {{ui:Lisää}} › {{ui:Apuviiva}}. Apuviivoja, päättymättömiä molempiin suuntiin. Katso [Apuviivat ja säteet](topic:construction-lines).

- `Määritä piste [Vaaka (H)/Pysty (V)/Kulma (A)/Puolitus (B)/Siirtymä (O)]`, sitten `Määritä läpäisevä piste` jokaiselle viivalle, kunnes Enter.
- `A`: `Anna apuviivan kulma [Viite (R)] <0>`; `R` kysyy ensin `Valitse viivakohde`.
- `B`: `Määritä kulman kärkipiste`, `Määritä kulman aloituspiste`, sitten `Määritä kulman loppupiste` jokaiselle viivalle.
- `O`: `Määritä siirtymän etäisyys [Läpi (T)] <Läpi (T)>`, sitten `Valitse viivakohde` ja `Määritä siirtymän puoli` (tai `Määritä läpäisevä piste`) jokaiselle viivalle.

### RAY

Ei lyhennettä; tai {{ui:Piirrä}} › {{ui:Lisää}} › {{ui:Säde}}. `Määritä aloituspiste`, sitten `Määritä läpäisevä piste` jokaiselle säteelle, kunnes Enter.

### TEXT

Lyhenteet: `DT`, `DTEXT`; tai {{ui:Teksti}} työkalurivillä. Yhden rivin teksti; jokainen rivi on oma kohteensa.

- `Määritä tekstin aloituspiste [Tasaus (J)]`
- `J`: `Anna vaihtoehto [Vasen/Keskitetty/Oikea/Keski/TL/MC] <L>`, sitten `Määritä tekstin lisäyspiste`
- `Määritä korkeus <nykyinen tekstin korkeus>`
- `Määritä tekstin kiertokulma <0>`
- `Anna teksti`, toistuu: jokainen Enter aloittaa seuraavan rivin alapuolelta. Tyhjällä rivillä Enter lopettaa. {{key:Space}} kirjoittaa välilyönnin tähän.

### DIVIDE

Lyhenne: `DIV`. {{cmd:DIVIDE}} asettaa merkit viivalle, kaarelle, ympyrälle, murtoviivalle, splinelle tai ellipsille, jotka jakavat sen yhtä suuriin osiin. Valitse kohde, anna sitten osien määrä (2–32767). Avoin kohde saa yhden merkin vähemmän kuin osia; suljettu saa merkin myös alkuunsa. Kohdetta itseään ei leikata. Merkit ovat pisteitä; `Lohko` kysyy tämän piirustuksen lohkon sen sijaan ja sitä, käännetäänkö se seuraamaan kohdetta. Splinien ja ellipsien pituudet mitataan lyhyitä jänteitä pitkin. Se hylkää tekstin, viivoitukset ja muut kohteet, joilla ei ole pituutta.

### MEASURE

Lyhenne: `ME`. {{cmd:MEASURE}} asettaa merkin joka annetun pituuden välein viivan, kaaren, ympyrän, murtoviivan, splinen tai ellipsin varrella, laskien siitä päästä, joka on lähimpänä napsautustasi (suljetulla kohteella: sen alusta). Anna pituus kirjoittamalla se tai kahdella pisteellä. Avoimen kohteen kaukaisessa päässä ei ole merkkiä. `Lohko` asettaa lohkon jokaiseen merkkiin pisteen sijaan. Se hylkää pituuden 0, pituuden, joka on kohdetta pidempi, ja pituuden, joka tekisi yli 32767 merkkiä.

### BOUNDARY

Lyhenteet: `BO`, `BPOLY`. {{cmd:BOUNDARY}} tekee suljetun murtoviivan alueen ympärille, jossa napsauttamasi piste on, mistä tahansa viivoista, kaarista, ympyröistä, murtoviivoista ja käyristä, jotka rajaavat sen näytöllä. Kaarelle tai ympyrälle osuvat palat palaavat kaarisegmentteinä; ellipsien ja splinien palat palaavat lyhyinä suorina segmentteinä. Kun `Saarekkeet` on päällä (alkuasetus), jokaisella sen sisällä olevalla suljetulla alueella on myös oma murtoviivansa. Pidä napsauttamassa pisteitä; Enter lopettaa. Alueen rajaavat kohteet jäävät ennalleen. Se kertoo, jos mikään suljettu alue ei sisällä pistettä.

### BLEND

{{cmd:BLEND}} piirtää splinen kahden avoimen käyrän päiden välille. Napsauta kutakin käyrää lähellä päätä, johon liität. `CONtinuity` valitsee `Tangent` (spline lähtee ja saapuu molempien käyrien suuntaan) tai `Smooth` (se taipuu myös samalla tavalla kuin käyrät taipuvat päissään); valinta säilyy istunnon ajan. Kaksi käyrää ei muutu. Se hylkää suljetut kohteet ja kaksi päätä, jotka jo kohtaavat.

### REGION

Lyhenne: `REG`. {{cmd:REGION}} muuttaa suljetut kohteet alueiksi: tasaisiksi alueiksi, joita voi yhdistää, leikata ja mitata. Valitse ympyröitä, suljettuja murtoviivoja, suljettuja ellipsejä tai suljettuja splinejä, tai viivoja, kaaria ja avoimia murtoviivoja, jotka sulkeutuvat päästä päähän silmukaksi; jokainen silmukka tulee yhdeksi alueeksi ja korvaa kohteet, joista se tuli. Kaaret pysyvät kaarina; ellipsit ja splinit muuttuvat lyhyiksi suoriksi segmenteiksi. Se, mikä ei ole suljettu eikä sulje silmukkaa, jää ennalleen, ja se kertoo kuinka monta. Piirustuksessa alue on yksi tai useampi suljettu murtoviiva, jotka on sidottu yhteen nimettömäksi ryhmäksi, joten napsautus valitsee koko alueen ja kopio on oma alueensa; muut ohjelmat, jotka avaavat tiedoston, näkevät suljettuja murtoviivoja.

Kun piirustuksessa on alueita, {{cmd:UNION}}, {{cmd:SUBTRACT}} ja {{cmd:INTERSECT}} 2D-välilehdellä toimivat alueilla: `UNION` yhdistää valitut alueet yhdeksi (toisistaan irralliset alueet muodostavat yhden alueen, jossa on useita ääriviivoja), `SUBTRACT` kysyy alueet, joista vähennetään, ja sitten ne, jotka otetaan pois (reikä jää osaksi aluetta), `INTERSECT` säilyttää alueen, jonka ne kaikki jakavat. Jokainen kertoo tuloksen alan ja on yksi kumoamisaskel. Ne hylkäävät, jos mitään ei jäisi jäljelle tai mitään ei ole yhteistä. 3D-välilehdellä ja piirustuksessa, jossa ei ole alueita, samat komennot toimivat kappaleilla kuten ennen.

## Muokkaa

### MTEXT

Lyhenteet: `MT`, `T`; tai {{ui:Kappale}} työkalurivillä. Kappaleteksti, joka rivittyy leveyteen ja kirjoitetaan paikallaan.

- `Määritä ensimmäinen kulma`
- `Määritä vastakkainen kulma [Korkeus (H)/Tasaus (J)/Rivivälit (L)/Kierto (R)/Leveys (W)]`: kahden kulman välinen leveys on kohta, jossa teksti rivittyy. `H` kysyy `Määritä korkeus`, `J` `Anna tasaus [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Anna rivivälin kerroin (0.25–4)`, `R` `Määritä kiertokulma`, `W` `Määritä leveys (0 ilman rivitystä)` ja ohittaa toisen kulman.
- Sen jälkeen piirustukselle aukeaa ruutu: kirjoita, {{key:Enter}} aloittaa uuden kappaleen, {{key:Mod+Enter}} tai napsautus ulkopuolelle lopettaa, {{key:Esc}} peruuttaa. Sen palkki asettaa korkeuden, rivivälin, leveyden ja tasauksen. Katso [Lisää teksti ja merkinnät](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Lyhenteet: `ED`, `DDEDIT`; tai kaksoisnapsauta tekstiä. `Valitse muokattava teksti`, toistuu, kunnes {{key:Enter}}: jokainen avautuu samaan ruutuun. Valitun tai kaksoisnapsautetun tekstin päältä aloitettuna se muokkaa vain sitä ja päättyy.

### ERASE

Lyhenteet: `E`, `DELETE`; tai paina {{key:Delete}}, kun kohteet ovat valittuina.

- `Valitse kohteet` (ohitetaan, kun kohteet on jo valittu)

### MOVE

Lyhenne: `M`.

- `Valitse kohteet`
- `Määritä perustapiste [Siirtymä (D)]`, `Määritä toinen piste`
- `D`: `Määritä siirtymä`, kirjoitettuna `dx,dy`.

### COPY

Lyhenteet: `CO`, `CP`. Kopioi niin monta kertaa kuin annat pisteitä.

`Taulukko (A)` toisen pisteen kehotteessa tekee rivin kerralla: anna kohteiden määrä (alkuperäinen lasketaan yhdeksi), sitten piste, johon ensimmäinen kopio menee; muut seuraavat samalla välillä. `Sovita (F)` tekee tuosta pisteestä viimeisen kopion paikan, ja muut jakautuvat tasaisesti sen väliin.

- `Valitse kohteet`
- `Määritä perustapiste [Siirtymä (D)]`
- `Määritä toinen piste [Kumoa (U)]`, toistuu, kunnes Enter. `U` ottaa viimeisimmän kopion takaisin.

### ROTATE

Lyhenne: `RO`.

- `Valitse kohteet`, `Määritä perustapiste`
- `Määritä kiertokulma <viimeisin kulma>`: asteina, vastapäivään positiivinen; tai napsauta pistettä kääntääksesi kohti sitä.

### SCALE

Lyhenne: `SC`.

- `Valitse kohteet`, `Määritä perustapiste`
- `Määritä mittakaavakerroin`: kirjoita kerroin kuten `0.5` tai `2`. Napsautettu piste antaa etäisyytensä perustapisteestä kertoimena.

### MIRROR

Lyhenne: `MI`.

- `Valitse kohteet`
- `Määritä peilausviivan ensimmäinen piste`, `Määritä peilausviivan toinen piste`
- `Poistetaanko lähdekohteet? [Kyllä (Y)/Ei (N)] <N>`

### ALIGN

Lyhenne: `AL`; tai {{ui:Muokkaa}} › {{ui:Lisää}} › {{ui:Kohdista}}.

- `Valitse kohteet`
- `Määritä ensimmäinen lähdepiste`, `Määritä ensimmäinen kohdepiste`
- `Määritä toinen lähdepiste (Enter jatkaa)`, `Määritä toinen kohdepiste`
- `Määritä kolmas lähdepiste (Enter jatkaa)`, `Määritä kolmas kohdepiste`
- Kahdella parilla: `Skaalataanko kohteet kohdistuspisteiden mukaan? [Kyllä (Y)/Ei (N)] <N>`

Katso [Kohdista kohteita](topic:modify-objects#align-objects).

### ALIGNTO

- `Valitse kohteet` (tai valinta), `Kohdista [Vasen/Keskitetty/Oikea/Ylä/Keski/Ala] <Vasen>`, `Kohteeseen [Valinta/Ensimmäinen/Viimeinen/Piste] <Valinta>`; `P` kysyy pisteen. Valinta säilyy.

### DISTRIBUTE

- `Valitse kohteet` (vähintään kolme), `Jaa [Vaakasuunnassa/Pystysuunnassa] <Vaakasuunnassa>`, `Jaa tasaisesti [Keskipisteet/Välit] <Välit>`. Ulommat kaksi pysyvät; valinta säilyy.

### ALIGNPANEL

Lyhenne: `ALP`; tai {{ui:Muokkaa}} › {{ui:Lisää}} › {{ui:Kohdista ja jaa}}. Avaa paneelin, joka suorittaa ALIGNTO- ja DISTRIBUTE-komennot napsautuksilla.

### LASER

Lyhenne: `LASERCUT`; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Laser…}}. Avaa Laser-paneelin piirustuksen päälle: mitä kukin taso tekee (leikkaus, viiva, kaiverrus, täyttö, kuva), esikatselu, GRBL G-koodi tallennettavaksi, sekä kehystys ja lähetys Web Serialin kautta. Katso [Lähetä piirustus laserille](topic:laser-cutting).

### STRETCH

Lyhenne: `S`; tai {{ui:Venytä}}. `Valitse venytettävät kohteet`: vedä leikkaavia ikkunoita (tai kirjoita `C`) päiden yli siirtääksesi niitä. `Määritä perustapiste [Siirtymä (D)]`, `Määritä toinen piste`. Ikkunoiden sisällä olevat pisteet liikkuvat: viivojen päät, murtoviivan kärjet (kaarisegmentit säilyttävät korkeutensa), mittapisteet; ympyrät, ellipsit, teksti, pisteet ja lohkot liikkuvat kokonaisina, kun niiden keskipiste tai lisäyspiste on sisällä. Ennen komentoa tehty valinta säilyttää ikkunat (ja lasson), jotka sen tekivät, joten ne venyvät samalla tavalla. Ilman ikkunaa kohteet liikkuvat kokonaisina.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Lyhenne: `AR`; tai {{ui:Matriisi}}. `Valitse kohteet`, sitten `Anna matriisin tyyppi [Suorakulmainen (R)/Napa (PO)] <Suorakulmainen>` (vain ARRAY).

- Suorakulmainen alkaa 4 saraketta × 3 riviä, väli 1.5 kertaa kohteiden koko, esikatseluna. `Anna vaihtoehto [Määrä (CO)/Väli (S)/Sarakkeet (COL)/Rivit (R)/Lopeta (X)] <X>`: `CO` kysyy sarakkeet ja rivit, `S` sarakkeiden ja rivien väliset etäisyydet (negatiivinen menee vasemmalle tai alas), `COL` ja `R` yhden suunnan kerrallaan.
- Napa kysyy `Määritä matriisin keskipiste`, alkaa 6 kohteella ympyrän ympäri kierrettynä. `Anna vaihtoehto [Kohteet (I)/Täyttökulma (F)/Kierrä kohteet (ROT)/Lopeta (X)] <X>`: `I` kohteet, `F` täytettävä kulma (+ vastapäivään, − myötäpäivään), `ROT` Kyllä tai Ei.
- {{key:Enter}} (Lopeta) tekee kopiot tavallisina kohteina. Yksi kumoamisaskel.
- `AS` (Assosiatiivinen) vaihtaa tavallisten kopioiden ja matriisin välillä, joka pysyy muokattavana: yksi kohde, jota muokkaat myöhemmin {{cmd:ARRAYEDIT}}-komennolla, kahvoilla tai Ominaisuuksissa. Valinta muistetaan ({{cmd:ARRAYASSOCIATIVITY}}); se alkaa tavallisista kopioista.

### ARRAYPATH

Kopioita käyrää pitkin. `Valitse kohteet`, sitten `Valitse polun käyrä`: viiva, kaari, ympyrä, ellipsi, murtoviiva tai spline (ei yksi muokattavista kohteista). Polku alkaa sen päästä, joka on lähempänä kohteita, ja ensimmäinen kohde on kohteet siellä, missä ne ovat.

- `Anna vaihtoehto [Tapa (M)/Kohteet (I)/Väli (SP)/Tasaus (AL)/Assosiatiivinen (AS)/Lopeta (X)] <X>`, esikatselun kanssa. `M`: `Jaa` levittää kohteet tasaisesti koko polulle, `Mittaa` asettaa yhden joka määrätyn matkan päähän. `I`: kohteiden määrä (Mittaa-tilassa 0 tarkoittaa niin monta kuin mahtuu; polun päättymisen yli ylittävä luku rajoitetaan siihen, mikä mahtuu). `SP`: kohteiden väli polulla (vaihtaa Mittaa-tilaan). `AL`: Kyllä kääntää jokaisen kohteen seuraamaan polkua, Ei pitää ne pystyssä.
- `AS` kuten {{cmd:ARRAY}}-komennossa. Kun se on päällä, matriisi säilyttää oman kopionsa polun muodosta: polun käyrän muokkaaminen myöhemmin ei siirrä kohteita.
- Se hylkää polun, joka ei ole käyrä, ja yhden kohteen.

### ARRAYEDIT

Muuttaa matriisia, joka on tehty ASsociative-valinnalla. `Valitse matriisi` (tai valitse se ensin). Se tulostaa, millainen matriisi nyt on, ja kysyy, kunnes {{key:Enter}}:

- Suorakulmainen: `COL` sarakkeet ja niiden välit, `R` rivit ja niiden välit, `A` kulma, jossa sarakkeet kulkevat.
- Napa: `I` kohteet, `F` täyttökulma, `ROT` kierrä kohteita Kyllä tai Ei.
- Polku: `M` Jaa tai Mittaa, `I` kohteet, `SP` väli, `AL` tasaus polkuun.
- `S` (Lähde) avaa kohteet, jotka matriisi toistaa, omillaan, kuten lohkomuokkain. Piirrä ja muokkaa siellä; {{cmd:ARRAYCLOSE}} tallentaa tai hylkää, ja jokainen kohde seuraa.
- `REP` (Korvaa): `Valitse korvaavat kohteet`, `Määritä korvaavien kohteiden perustapiste`, sitten napsauta korvattavia kohteita ja paina {{key:Enter}}. Ne kohteet näyttävät nyt korvaavan; korvaavat kohteet poistuvat piirustuksesta ja elävät matriisissa. `RES` (Palauta) näyttää lähdekohteet jokaisessa kohteessa uudelleen.
- Jokainen muutos on yksi kumoamisaskel. Se hylkää tavalliset kopiot, tavallisen lohkoviittauksen ja matriisin lukitulla tasolla.

Samat luvut ovat Ominaisuuksissa kohdassa Matriisi, ja matriisilla on kahvat: perustapiste siirtää sitä, kahva toisessa kohteessa asettaa välin, kahva viimeisen kohteen jälkeen asettaa määrän (napa: toinen kohde asettaa kohteiden määrän, viimeinen kohde täyttökulman). {{cmd:EXPLODE}} muuttaa matriisin takaisin tavallisiksi kopioiksi.

### ARRAYCLOSE

Lopettaa {{cmd:ARRAYEDIT}}-lähteen muokkauksen: `Tallennetaanko muutokset matriisin lähdekohteisiin? [Tallenna (S)/Hylkää (D)] <Tallenna>`. Se kertoo, jos mikään matriisin lähdekohteista ei ole auki. {{cmd:BCLOSE}} tekee saman.

### ARRAYASSOCIATIVITY

`Anna uusi arvo ARRAYASSOCIATIVITY-muuttujalle (1 = matriisit pysyvät muokattavina, 0 = tavalliset kopiot)`. Asettaa, mistä {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR ja {{cmd:ARRAYPATH}} alkavat; niiden vaihtoehto `AS` muuttaa samaa asetusta. Muistetaan tässä selaimessa.

### OFFSET

Lyhenne: `O`. Viivat, kaaret, ympyrät ja murtoviivat.

Kun murtoviiva siirtyy ulospäin ja sen suorat segmentit irtoavat kulmassa, {{cmd:OFFSETGAPTYPE}} päättää, miten aukko suljetaan.

- `Määritä siirtymän etäisyys [Läpi (T)] <viimeisin etäisyys tai Läpi>`
- `Valitse siirrettävä kohde`, sitten `Määritä siirtymän puolen piste` (tai Läpi-tilassa `Määritä läpäisevä piste`), toistuu, kunnes Enter.

### OFFSETGAPTYPE

- `Siirtymän kulmaaukot: 0 jatka, 1 pyöristä, 2 viisto`: miten {{cmd:OFFSET}} sulkee aukot murtoviivan ulkokulmissa. `0` jatkaa segmenttejä, kunnes ne kohtaavat (alkuasetus), `1` yhdistää ne kaarella vanhan kulman ympäri, `2` suoralla leikkauksella. Sisäkulmat ja kaarisegmentit eivät muutu. Säilyy tässä istunnossa.

### EXTRIM

{{cmd:EXTRIM}} typistää kaiken reunan toiselta puolelta. Valitse leikkausreuna (viiva, kaari, ympyrä, murtoviiva, ellipsi, spline tai apuviiva), sitten piste puolella, jonka haluat tyhjentää: jokainen viiva, kaari, ympyrä, murtoviiva ja apuviiva, joka ylittää reunan, menettää sen osan tuolla puolella, missä se alkaa reunasta. Kun valitset puolta, osat, jotka lähtisivät, seuraavat osoitinta. Suljetulla reunalla puolet ovat sisä- ja ulkopuoli. Kohteet, jotka vain koskettavat reunaa, sekä teksti, viivoitukset, splinit ja ellipsit, jotka ylittävät sen, jäävät ennalleen. Yksi kumoamisaskel.

### TRIMEXTENDMODE

- `Anna uusi arvo TRIMEXTENDMODE-muuttujalle (1 Pikatila, 0 Vakio)`: miten {{cmd:TRIM}} ja {{cmd:EXTEND}} alkavat. `1` Pikatila: jokainen kohde on leikkausreuna tai raja. `0` Vakio: ne kysyvät reunat ensin. Myös `(setvar "TRIMEXTENDMODE" 0)` LISP:ssä.

### TRIM

Lyhenne: `TR`. Tulostaa ensin `Nykyiset asetukset: Pikatila (TRIMEXTENDMODE 1), reunat: ei jatkoa, vetäminen piirtää polun`. Pikatilassa jokainen näkyvä kohde on leikkausreuna, ja kohde, jota mikään ei ylitä, poistetaan; Vakiotilassa se kysyy ensin `Valitse leikkausreunat (Enter = kaikki kohteet)` ja leikkaa vain niistä.

- `Valitse typistettävä kohde tai valitse Shift-napsautuksella pidennettäväksi [Leikkausreunat (T)/Aita (F)/Ikkuna (C)/Tila (O)/Reuna (E)/Poista (R)/Kumoa (U)]`, toistuu: napsauta poistettavaa palaa (se näkyy harmaana ja katkoviivana, kun osoitin lepää sen päällä), vedä polku useiden palojen yli (kaikki menevät yhdellä askeleella), tai napsauta kahta tyhjää kohtaa aidaksi niiden väliin. {{key:Shift}} pidentää sen sijaan. `T` valitsee leikkausreunat (Vakiotila), `F` kysyy aidan pisteet, `C` kaksi ikkunan kulmaa (osittain sisällä olevat palat menevät), `O` kysyy `Anna typistystilan vaihtoehto [Pikatila (Q)/Vakio (S)]`, `E` kysyy `Anna implisiittisen reunan pidennystila [Pidennä (E)/Ei jatkoa (N)]` (EDGEMODE), `R` poistaa valitsemasi kohteet, `U` kumoaa viimeisimmän valinnan tai vedon. Enter lopettaa. Katso [Typistä ja pidennä](topic:trim-and-extend).

- Napsautus viivoitukseen leikkaa viivoituksen: leikkausreunat jakavat viivoitetun alueen, ja napsauttamasi pala poistetaan (viivoituksen piirretyn ääriviivan jäännöstä ei jää siihen, mistä se poistettiin). Viivoitus säilyttää kuvionsa tai liukuvärinsä, ja viivoitus, joka oli linkitetty rajaansa, ei ole enää linkitetty, koska se ei enää täytä sitä. Komentorivi kertoo, jos mikään leikkausreuna ei jaa viivoitusta siinä kohdassa, jos napsautus on viivoituksen ulkopuolella, ja jos mitään ei jäisi jäljelle (käytä {{cmd:ERASE}}-komentoa). Vedetty polku tai aita ei leikkaa viivoituksia.

### EXTEND

Lyhenne: `EX`. Sama kuin TRIM toisin päin: `Valitse pidennettävä kohde tai valitse Shift-napsautuksella typistettäväksi [Rajareunat (B)/Aita (F)/Ikkuna (C)/Tila (O)/Reuna (E)/Kumoa (U)]`. Napsautus pidentää lähintä päätä seuraavaan rajaan; vedetty polku tai aita pidentää jokaista kohdetta, jonka se ylittää; {{key:Shift}} typistää. `B` valitsee rajareunat (Vakiotila). Tila ja Reuna ovat yhteisiä TRIMin kanssa.

### LINKVIEWS

Lyhenne: `SYNCVIEWS`; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Linkitä ruutujen näkymät}}, tai linkkikuvake piirustusvälilehdillä. `Linkitä ruutujen näkymät [Päällä/Pois] (Enter vaihtaa tilan)`: kun se on päällä, aktiivisen ruudun siirto tai zoomaus siirtää jokaista ruutua, joka näyttää samantyyppistä tilaa. Katso [Jaa näyttö](topic:split-screen).

### OPENIN3D

Ei lyhennettä; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Avaa ModelCraftissa}}, missä 3D-mallinnussovellus ottaa piirustuksen vastaan. Avaa sen siellä uudessa välilehdessä DWG-tiedostona (mitään ei lähetetä). Jos selain estää välilehden, se kertoo siitä.

### LASSOMODE

`Anna uusi arvo LASSOMODE-muuttujalle (1 = lasso, 0 = suorakulmio)`: mitä painaminen ja vetäminen tyhjään kohtaan piirtää. Sama kuin Asetukset › CadCraft › Vetäminen valitsemiseen. Katso [Lasso-valinta](topic:lasso-selection).

### FILLET

Lyhenne: `F`. Viivat, kaaret, ympyrät ja murtoviivat. Tulostaa ensin `Nykyiset asetukset: Tila = TRIM, Säde = 0`.

- `Valitse ensimmäinen kohde [Kumoa (U)/Murtoviiva (P)/Säde (R)/Typistys (T)/Useita (M)]`
  - `R` kysyy `Määritä pyöristyksen säde <viimeisin>`. `T` kysyy `Anna typistystilan vaihtoehto [Typistä (T)/Ei typistystä (N)]`: Ei typistystä jättää kohteet ennalleen ja lisää vain kaaren.
  - `M` pitää komennon käynnissä useammille kulmille, kunnes {{key:Enter}}; `U` ottaa viimeisimmän kulman takaisin lopettamatta komentoa.
  - `P` kysyy `Valitse 2D-murtoviiva [Säde (R)]` ja pyöristää jokaisen kulman, jossa kaksi suoraa segmenttiä kohtaa. Pyöristykset, joita sillä jo on, korvataan uudella säteellä; säde 0 poistaa ne. Kulmat, joiden sivut ovat liian lyhyitä säteelle, jätetään ja lasketaan.
- `Valitse toinen kohde tai valitse Shift-napsautuksella kulmaan [Säde (R)]`. Pidä {{key:Shift}} pohjassa napsauttaessasi teräväkulmaa, mistä tahansa säteestä riippumatta.

Napsauta kutakin kohdetta siinä osassa, jonka haluat säilyttää. Kaksi viivaa, jotka eivät kohtaa, jatketaan. Kaksi yhdensuuntaista viivaa saavat puoliympyrän aukon yli ensimmäisen viivan siihen päähän, joka on lähimpänä napsautustasi. Ympyrää ei koskaan leikata. Kaksi vierekkäistä murtoviivan segmenttiä saavat kaaren murtoviivan sisään; murtoviiva ja toinen kohde toimivat, kun leikkaus osuu murtoviivan ensimmäiseen tai viimeiseen segmenttiin.

### CHAMFER

Lyhenne: `CHA`. Viivat ja murtoviivojen suorat segmentit. Tulostaa ensin nykyiset etäisyydet (tai pituuden ja kulman).

- `Valitse ensimmäinen viiva [Kumoa (U)/Murtoviiva (P)/Etäisyys (D)/Kulma (A)/Typistys (T)/Menetelmä (E)/Useita (M)]`
  - `D` kysyy `Määritä ensimmäisen viiston etäisyys <viimeisin>` ja `Määritä toisen viiston etäisyys <ensimmäinen>`: ensimmäinen leikataan valitsemastasi ensimmäisestä viivasta, toinen toisesta.
  - `A` kysyy `Määritä viiston pituus ensimmäisellä viivalla` ja `Määritä viiston kulma ensimmäisestä viivasta`.
  - `E` (Menetelmä) valitsee, kumpaa kahdesta seuraava viisto käyttää. `T`, `M`, `U` ja `P` toimivat kuten {{cmd:FILLET}}-komennossa.
- `Valitse toinen viiva tai valitse Shift-napsautuksella kulmaan [Etäisyys (D)/Kulma (A)/Menetelmä (E)]`. {{key:Shift}}+napsautus tekee teräväkulman.

Etäisyys, joka on viivaa pidempi, hylätään (`Etäisyys on liian suuri.`).

### BREAK ja BREAKATPOINT

Lyhenne: `BR`. `Valitse kohde` (missä napsautat, on ensimmäinen piste), `Määritä toinen katkaisupiste [Ensimmäinen piste (F)]`; `F` kysyy `Määritä ensimmäinen katkaisupiste` ja `Määritä toinen katkaisupiste`. Niiden väli poistuu; ympyrässä vastapäivään ensimmäisestä pisteestä. BREAKATPOINT kysyy `Määritä katkaisupiste` ja jakaa kohteen kahtia siinä (ei ympyrä).

### LENGTHEN

Lyhenne: `LEN`. `Valitse mitattava kohde [Muutos (DE)/Prosentti (P)/Kokonais (T)/Dynaaminen (DY)]`: napsautus tulostaa `Nykyinen pituus` (ja kaaren keskuskulman) ja kysyy uudelleen. `DE` kysyy `Anna pituuden muutos (negatiivinen lyhentää) [Kulma]`, `P` `Anna pituus prosentteina`, `T` `Määritä kokonaispituus [Kulma]`, `DY` vetää. Sitten `Valitse muutettava kohde [Kumoa (U)]`, toistuu: päät lähimpänä napsautusta liikkuvat. Viivat, kaaret ja avoimet murtoviivat.

### JOIN

Lyhenne: `J`. `Valitse yhdistettävät kohteet`. Viivat, kaaret ja avoimet murtoviivat, jotka kohtaavat päästä päähän, muuttuvat murtoviivoiksi (suljetuiksi, kun ketju sulkeutuu); saman suoran viivat muuttuvat yhdeksi viivaksi; saman ympyrän kaaret muuttuvat yhdeksi kaareksi tai ympyräksi. Historia kertoo, kuinka monta kohdetta yhdistyi ja kuinka monta ei.

### MATCHPROP

Lyhenteet: `MA`, `PAINTER`. `Valitse lähdekohde`, sitten `Valitse kohdekohteet [Asetukset (S)]` ja {{key:Enter}}. Kopioi tason ja värin, ja samantyyppisten kohteiden välillä tekstin korkeuden ja leveyden, mitoitusten koot tai viivoituksen kuvion. `S` kysyy `Kytke ominaisuus päälle tai pois [Väri (C)/Taso (LA)/Teksti (T)/Mitoitus (D)/Viivoitus (H)]`, toistuu, kunnes {{key:Enter}}; valinta muistetaan istunnon ajan.

### EXPLODE

Lyhenne: `X`. Murtoviivat muuttuvat viivoiksi ja kaariksi, lohkoviittaukset muuttuvat kohteikseen, mitat muuttuvat viivoiksi, nuoliksi ja tekstiksi. Matriisi, joka pysyy muokattavana ({{cmd:ARRAYEDIT}}), muuttuu tavallisiksi kopioiksi kohteistaan.

- `Valitse kohteet`

### GROUP

Lyhenne: `G`. {{cmd:GROUP}} antaa valituille kohteille yhteisen nimen. Valitse kohteet ja kirjoita nimi (ei välilyöntejä; `?` luettelee ryhmät; Enter tekee nimettömän ryhmän) ja ryhmälle, jolla on nimi, valinnainen kuvaus. Siitä eteenpäin napsautus yhteen niistä, tai ikkuna, joka ottaa yhden, valitsee ne kaikki, joten ne siirtyvät, kopioituvat ja poistuvat yhdessä; jokainen kohde on silti oma kohteensa. Kohde voi kuulua useisiin ryhmiin. Koko ryhmän kopio on uusi nimetön ryhmä; yhden jäsenen kopio yksin liittyy ryhmään. Ryhmät kuuluvat tilaan, jossa ne tehtiin (malli tai arkki). Ne säilyvät, kun tallennat DWG- tai DXF-tiedostona ja avaat sen uudelleen CadCraftissa; DXF 2000 -tiedostot kantavat ne myös ryhmäkohteina muille ohjelmille, ja toisessa ohjelmassa tehdyt ryhmät luetaan, kun DXF tai DWG avataan.

### UNGROUP

{{cmd:UNGROUP}} purkaa ryhmät: valitse ryhmien kohteita (jokainen ryhmä, johon ne kuuluvat, puretaan), tai kirjoita `Nimi` ja ryhmän nimi. Kohteet jäävät piirustukseen. Yksi kumoamisaskel palauttaa ryhmät.

### GROUPEDIT

{{cmd:GROUPEDIT}} muuttaa yhtä ryhmää. Valitse yksi sen kohteista tai kirjoita `Nimi` ja sen nimi; ryhmä, joka on jo valittu, otetaan sellaisenaan. Sitten: `Lisää` kohteita (valitaan yksi kerrallaan, ei ryhmittäin), `Poista` kohteita, `Nimeä uudelleen` (REName) ryhmä, muuta sen `Kuvaus`, tai aseta `Valittava` (Selectable), eli napsautetaanko yhtä kohdetta niin, että valitaan koko ryhmä. `Lopeta (X)` tai Enter lopettaa. Ryhmä, jossa ei ole enää kohteita, katoaa.

### PICKSTYLE

- `Ryhmävalinta: 0 napsautus valitsee yhden kohteen, 1 koko ryhmän`: kun `1` (alkuasetus), napsautus tai ikkuna ryhmitellyssä kohteessa valitsee koko ryhmän; kun `0`, yksittäiset kohteet, jolloin voit muokata yhtä jäsentä. Säilyy tässä istunnossa.

## Leikepöytä

CadCraftin oma leikepöytä: se toimii piirustuksen sisällä, piirustusten välillä ja tämän selaimen CadCraft-välilehtien välillä. Katso [Kopioi, liitä ja monista](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, tai {{ui:Kopioi}} {{ui:Muokkaus}}-ryhmässä. Kopioi kohteet leikepöydälle niiden käyttämien lohkojen ja tasojen kanssa. Kohteet jäävät valituiksi.

- `Valitse kopioitavat kohteet` (ohitetaan, kun kohteet on jo valittu)

### CUTCLIP

{{key:Mod+X}}, tai {{ui:Leikkaa}} {{ui:Lisää}}-valikossa. Kopioi kohteet leikepöydälle ja poistaa ne sitten (yksi kumoamisaskel).

- `Valitse leikattavat kohteet` (ohitetaan, kun kohteet on jo valittu)

### COPYBASE

Kopioi kohteet leikepöydälle valitsemasi perustapisteen kanssa; liittäminen sijoittaa tuon pisteen.

- `Määritä perustapiste`
- `Valitse kopioitavat kohteet`

### PASTECLIP

{{key:Mod+V}}, tai {{ui:Liitä}} {{ui:Muokkaus}}-ryhmässä. Kopio seuraa kohdistinta ja roikkuu sen ulottuvuuksien vasemmasta alakulmasta (tai keskipisteestä, tai {{cmd:COPYBASE}}-pisteestä; katso [CadCraftin asetukset](topic:settings)).

- `Määritä lisäyspiste`

Liitetyt kohteet ovat valittuina. Lohko, jonka piirustuksessa on jo samalla nimellä, säilyttää tämän piirustuksen määritelmän.

Kun MarkupCraftissa kopioitu alue on uudempi kuin CadCraftin kopio (ja alle 6 tuntia vanha), {{key:Mod+V}} ja `PASTECLIP` liittävät sen alueen: katso `PASTEAREA`.

### PASTEAREA

Lyhenne: `PAREA`. {{ui:Liitä kopioitu alue}} {{ui:Lisää}}-valikossa. Liittää MarkupCraftissa {{ui:Kopioi alue}}-toiminnolla kopioidun alueen kuvana todellisessa koossaan. Katso [Kuvat piirustuksessa](topic:pictures).

- `Määritä kopioidun alueen vasen alakulma`
- `Skaalaa sen paperikoko (100 1:100-arkille; Pisteet: kaksi pistettä sillä ja niiden todellinen etäisyys) [Pisteet (P)] <1>` (vain kun arkilla ei ollut piirustuksen mittakaavaa): luku, {{key:Enter}} paperikokoa varten, tai `P`, sitten `Liitetyn alueen ensimmäinen piste`, `Liitetyn alueen toinen piste` ja niiden todellinen etäisyys.

### PASTEORIG

{{key:Mod+Shift+V}}, tai {{ui:Liitä samaan paikkaan}} {{ui:Lisää}}-valikossa. Liittää koordinaatteihin, joista kohteet kopioitiin. Ei kysy mitään.

### DUPLICATE

Lyhenne: `DUP`. {{key:Mod+D}}, tai {{ui:Monista ja siirrä}} {{ui:Lisää}}-valikossa. Kohteiden kopio liikkuu osoittimen mukana siitä, missä se on; {{key:Esc}} ei jätä mitään. Ei käytä leikepöytää.

- `Valitse monistettavat kohteet` (ohitetaan, kun kohteet on jo valittu)
- `Määritä, minne kopio menee (Esc ei jätä mitään)`: napsauta, kirjoita piste, `@dx,dy` (osoittimen sijainnista), tai etäisyys kohti kohdistinta.

### SELECT

Kysyy `Valitse kohteet` (kaikilla alla olevilla vaihtoehdoilla) ja jättää valitsemasi kohteet valituiksi seuraavaa komentoa tai myöhempää `P`-valintaa varten.

### QSELECT

Lyhenne: `QS`. Selaimessa {{ui:Pikavalinta}}-ikkuna (katso [Valitse kohteet](topic:select-objects#select-by-a-rule-quick-select)). Ilman sitä komentorivi kysyy `Anna kohdetyyppi`, `Anna ominaisuus`, `Anna operaattori [=/<>/>/</*/Valitse kaikki] <=>` ja `Anna arvo`. Osumista tulee valinta.

### SELECTSIMILAR

Lyhenne: `SIM`. `Valitse kohteet [Asetukset (SE)]` (tai nykyinen valinta): valitsee jokaisen samantyyppisen kohteen, jolla on sama taso ja väri (ja lohkon nimi, viivoituksen kuvio). `SE` kysyy `Kytke ominaisuus päälle tai pois [Taso (LA)/Väri (CO)/Nimi (NA)/Kuvio (PA)/Korkeus (HE)]`, toistuu, kunnes {{key:Enter}}.

### FIND

Ei lyhennettä; tai {{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Etsi ja korvaa}}. Selaimessa {{ui:Etsi ja korvaa}}-ikkuna (katso [Lisää teksti ja merkinnät](topic:text#find-and-replace-words)). Ilman sitä: `Anna etsittävä teksti`, sitten `Anna korvaava teksti (Enter: valitse löydetyt)`. Etsii tekstistä, attribuuttiarvoista ja mittatekstistä, avoimella välilehdellä tai valinnassa.

### SELECTALL ja DESELECT

`SELECTALL` (lyhenne `AI_SELALL`, {{key:Mod+A}}) valitsee jokaisen muokattavan kohteen avoimella välilehdellä. `DESELECT` (lyhenteet `AI_DESELECT`, `SELECTNONE`; tai {{key:Esc}}) tyhjentää valinnan.

## Mitoitus

### DIMLINEAR

Lyhenteet: `DLI`, `DIMLIN`. Vaaka- tai pystyetäisyys.

- `Määritä ensimmäisen mittaapuviivan lähtöpiste [Valitse kohde (S)]` (Enter tai `S`: `Valitse mitoitettava kohde`, sitten napsauta viivaa, kaarta, ympyrää tai murtoviivan segmenttiä)
- `Määritä toisen mittaapuviivan lähtöpiste`
- `Määritä mittaviivan sijainti [Teksti (T)/Vaaka (H)/Pysty (V)/Kierretty (R)]`. `T` kysyy tekstiä (`<>` on mitattu arvo), `H` ja `V` kiinnittävät suunnan, `R` kysyy `Määritä mittaviivan kulma <0>`.

### DIMALIGNED

Lyhenteet: `DAL`, `DIMALI`. Kahden pisteen todellinen etäisyys.

- Lähtöpisteet kuten {{cmd:DIMLINEAR}}-komennossa, sitten `Määritä mittaviivan sijainti [Teksti (T)]`.

### DIMANGULAR

Lyhenteet: `DAN`, `DIMANG`.

- `Valitse kaari, ympyrä tai viiva, tai anna Enter kärkipisteelle`
- Kaari: sen kulma. Ympyrä: `Määritä kulman toinen loppupiste`. Viiva: `Valitse toinen viiva`. Enter: `Määritä kulman kärkipiste`, `Määritä kulman ensimmäinen loppupiste`, `Määritä kulman toinen loppupiste`.
- `Määritä mittaviivan sijainti [Teksti (T)]`: napsauta kulman sisällä, jota mitataan.

### DIMRADIUS ja DIMDIAMETER

Lyhenteet: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Valitse kaari tai ympyrä`, sitten `Määritä mittaviivan sijainti [Teksti (T)]`.

### DIMCONTINUE

Lyhenteet: `DCO`, `DIMCONT`. Jatkuu viimeisestä tehdystä lineaarisesta tai kohdistetusta mitasta (tai kysyy `Valitse lineaarinen tai kohdistettu mitta`).

- `Määritä toisen mittaapuviivan lähtöpiste [Kumoa (U)]`, toistuu, kunnes Enter.

### DIMBASELINE

Lyhenteet: `DBA`, `DIMBASE`. Kuten {{cmd:DIMCONTINUE}}, mutta jokainen mitta alkaa ensimmäisestä lähtöpisteestä ja pinoutuu kauemmas.

### DIMORDINATE

Lyhenteet: `DOR`, `DIMORD`. `Määritä ominaisuuden sijainti`, sitten `Määritä johtoviivan päätepiste [Xdatum/Ydatum/Teksti]`. Kirjoittaa, kuinka kaukana ominaisuus on UCS-origosta X- tai Y-suunnassa, johtoviivalla: johtoviiva, joka kulkee enimmäkseen ylös tai alas, lukee X, ja sivulle kulkeva lukee Y; `Xdatum` ja `Ydatum` kiinnittävät, kumpi. Aseta origo ensin komennolla {{cmd:UCS}} (ilman sitä se on piirustuksen 0,0). Kahvat siirtävät ominaisuutta, origoa ja johtoviivan päätettä, ja arvo seuraa. Tallennetaan oikeana koordinaattimitoituksena DWG- ja DXF-tiedostoihin. Hylkää johtoviivan päätteen itse ominaisuuden päälle.

### DIMARC

Lyhenne: `DAR`. `Valitse kaari tai polyviivan kaarisegmentti`, sitten `Määritä kaaren pituusmitan sijainti [Teksti (T)]`. Mittaa kaarta pitkin (ei jänteen mukaan) ja kirjoittaa kaaren symbolin arvon eteen. Hylkää täyden ympyrän, viivan tai suoran murtoviivan segmentin. DWG säilyttää sen kaaren pituusmittana; DXF säilyttää sen kulmamittana, jonka teksti on pituus, ja CadCraft avaa sen jälleen kaaren pituusmittana.

### DIMJOGGED

Lyhenteet: `DJO`, `JOG`. `Valitse kaari tai ympyrä`, `Määritä keskipisteen sijainnin ohitus`, `Määritä katkaisun sijainti`. Sädemitoitus käyrälle, jonka keskipiste on kaukana tai arkin ulkopuolella: mittaviiva alkaa antamastasi pisteestä keskipisteen sijaan, ja siinä on katkaisu, ja se kirjoittaa silti todellisen säteen. DWG säilyttää sen katkaistuna sädemitoituksena; DXF säilyttää sen sädemitoituksena, ja CadCraft avaa sen uudelleen katkaistuna.

### DIMJOGLINE

Lyhenne: `DJL`. `Valitse mitta katkaisun lisäämiseen [Poista (R)]`, sitten `Määritä katkaisun sijainti (tai paina Enter)`. Asettaa katkaisusymbolin lineaarisen tai kohdistetun mitan viivalle, osoittamaan että etäisyyttä ei ole piirretty mittakaavassa; arvo ei muutu. `Poista (R)` ottaa sen pois. Hylkää muun tyyppiset mitat.

### QDIM

Ei lyhennettä. `Valitse mitoitettava geometria`, sitten `Määritä mittaviivan sijainti [Jatkuva (C)/Porrastettu (S)/Perus (B)/Koordinaatti (O)/Säde (R)/Halkaisija (D)/Lähtöpiste (P)]`. Mitoittaa useita kohteita yhdellä askeleella: viivojen ja murtoviivojen segmenttien päistä, ympyröiden ja kaarien keskipisteistä, pisteistä ja lohkoviittauksista. Sijainti sekä ylä- että alapuolella kohteita mittaa poikki, ja sivulla oleva mittaa ylös. `Jatkuva (C)` ketjuttaa pisteet, `Perus (B)` mittaa kaikki ensimmäisestä, `Porrastettu (S)` sisäkkäisiä pareja keskeltä ulospäin, `Koordinaatti (O)` antaa jokaiselle pisteelle etäisyyden lähtöpisteestä (`datumPoint` valitsee uuden), `Säde (R)` ja `Halkaisija (D)` mitoittavat jokaisen valitun ympyrän ja kaaren. Tila muistetaan. Kaikki, mitä se tekee, on yksi kumoamisaskel. Kertoo, jos pisteitä on alle kaksi tai säteelle tai halkaisijalle ei ole kaaria tai ympyröitä.

### DIMBREAK

Lyhenne: `DBREAK`. `Valitse mitat, joihin lisätään tai joista poistetaan katkoja`, sitten `Katkaise, missä muut kohteet ylittävät [Automaattinen (A)/Manuaalinen (M)/Poista (R)] <Automaattinen>`. `Automaattinen` jättää aukon mitta- ja jatkoviivoihin aina siinä, missä muu kohde niitä ylittää, ja laskee aukot uudelleen, kun nuo kohteet tai mitta siirretään. `Manuaalinen` (yksi mitta) kysyy kaksi pistettä ja jättää aukon niiden väliin. `Poista` ottaa kaikki aukot pois. Aukko on 1.5 kertaa mitan tekstin korkeus.

### DIMSPACE

Ei lyhennettä. `Valitse perusmitta`, `Valitse välistettävät mitat`, `Anna välin arvo tai Auto <Auto>`. Siirtää rinnakkaisten lineaaristen ja kohdistettujen mittojen (tai kulmamittojen saman kärjen ympäri) mittaviivoja niin, että ne ovat yhtä etäällä toisistaan, laskettuna perusmitasta, kumpikin sillä puolella, jolla se on. `0` linjaa ne perusmitan kanssa; `Auto` on kaksinkertainen perusmitan tekstin korkeus. Mitat, jotka eivät ole perusmitan suuntaisia, jätetään ennalleen.

### DIMINSPECT

Ei lyhennettä. `Valitse mitat`, `Tarkastuskehyksen muoto [Pyöreä (R)/Kulmikas (A)/Ei mitään (N)/poista] <Pyöreä>`, `Anna nimike`, `Anna tarkastusnopeus <100%>`. Piirtää kehyksen arvon ympärille, nimikkeen sen eteen ja tarkastusnopeuden sen jälkeen. `poista` ottaa kehyksen pois. Toleranssiteksti pysyy arvon kanssa.

### DIMOVERRIDE

Lyhenteet: `DOV`, `DIMOVER`. `Anna ohitettavan mitoitusmuuttujan nimi tai Tyhjennä`, `Anna uusi arvo …`, uudelleen, kunnes Enter, sitten `Valitse mitat`. Muuttaa niitä asetuksia vain valituilla mitoilla; mitoitustyyliä ei muuteta. Ottaa muuttujat, jotka ovat luku tai kytkin (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Tyhjennä` palauttaa valitut mitat niiden tyyliin. Hylkää nimen, joka ei ole tällainen muuttuja, ja arvon, jota se ei voi ottaa.

### DIMREASSOCIATE

Lyhenteet: `DRE`, `DIMREASSOC`. `Valitse mitat`, sitten jokaiselle niiden mittapisteet (`Määritä ensimmäisen mittaapuviivan lähtöpiste kohteessa`: kiinnittyy kohteen päähän tai viivan keskikohtaan, murtoviivan kulmaan, keskipisteeseen; Enter jättää pisteen vapaaksi), tai säteelle, halkaisijalle, katkaistulle säteelle tai kaaren pituusmitalle `Valitse kaari tai ympyrä`. Mitta sidotaan silloin näihin kohteisiin: kun ne siirtyvät tai muuttavat kokoaan, se seuraa samassa kumoamisaskeleessa ja mittaa uudelleen. Sidotun pisteen siirtäminen käsin tai kohteen poistaminen katkaisee sidoksen. Sidos tallennetaan DWG- ja DXF 2000 -tiedostoihin CadCraftin omana datana; muut ohjelmat näkevät tavallisen mitan.

### DIMDISASSOCIATE

Lyhenteet: `DDA`, `DIMDISASSOC`. `Valitse mitat`. Vapauttaa ne kohteista, joihin ne on sidottu; mitään ei siirry.

### CENTERMARK

Lyhenteet: `CM`, `DIMCENTER`, `DCE`. `Valitse ympyrä tai kaari, johon lisätään keskimerkki`, uudelleen, kunnes Enter. Piirtää ristin keskikohtaan ja neljä keskiviivaa juuri käyrän ulkopuolelle (viivatyyppi CENTER), tavallisina viivoina nykyisellä tasolla; mitoitettu nuolen koon ja nykyisten mitoitusasetusten kokonaismittakaavan mukaan, kierrettynä UCS:n mukaan. Ne eivät seuraa ympyrää, jos se siirtyy.

### CENTERLINE

Lyhenne: `CL`. `Valitse ensimmäinen viiva`, `Valitse toinen viiva`. Piirtää viivan kahden viivan puoliväliin (puolittajaa pitkin, jos ne kohtaavat), hieman pidemmän kuin ne ovat, viivatyypissä CENTER. Tavallinen viiva: se ei seuraa kahta viivaa.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Ei lyhenteitä. Jokainen kysyy `Anna uusi arvo … <nykyinen>` ja asettaa sen koon **uusille** mitoille: kokonaismittakaava, tekstin korkeus, nuolen koko, desimaalit (enintään 8), väli tekstin ympärillä, jatke mittaviivan ulkopuolelle, siirtymä origosta. Katso [Aseta mitoituskoot](topic:dimension-settings).

### DIMLUNIT

Mitoitusasetus: uusien mittojen pituuden muoto vain (1 tieteellinen, 2 desimaali, 3 tekninen, 4 arkkitehtuuri, 5 murtoluku).

### DIMSTYLE ja -DIMSTYLE

Lyhenteet: `DST`, `DDIM`, `D`. Mitoitustyylien hallinta: {{ui:Aseta nykyiseksi}}, {{ui:Uusi…}}, {{ui:Muokkaa…}}, {{ui:Nimeä uudelleen…}}, {{ui:Poista}}, {{ui:Vertaa…}}, {{ui:Käytä valittuihin}}. `-DIMSTYLE` komentorivillä: `Mitoitustyyli [Palauta (R)/Tallenna (S)/Poista (D)/Käytä (A)/Vertaa (C)/Nimeä uudelleen (N)/Luettelo (L)]`. Katso [Aseta mitoituskoot](topic:dimension-settings#named-dimension-styles).

### DIMEDIT ja DIMTEDIT

`DIMEDIT` (`DED`): `Mitan muokkaus [Koti (H)/Uusi (N)/Kierrä (R)/Vino (O)] <Koti>`, sitten mitat (tai jo valitut). Uusi kysyy tekstiä (`<>` = mitattu arvo); Kierrä kysyy kulmaa (0 palauttaa tekstin); Vino kysyy apuviivojen kulmaa X-akselista (Enter = ei mitään; vain lineaariset ja kohdistetut mitat). `DIMTEDIT` (`DIMTED`): `Mitan teksti [Vasen (L)/Oikea (R)/Keskitetty (C)/Koti (H)/Kulma (A)] <Keskitetty>`. Katso [Aseta mitoituskoot](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Lyhenne: `DTU`. `Yksiköt uusien mittojen tekstissä [Piirustuksen yksiköt (D)/mm/cm/m/km]`, tai valituilla mitoilla `Yksiköt valittujen mittojen tekstissä`. Kirjoittaa mitatun pituuden siinä yksikössä, yksikkö perässä (DIMLFAC ja DIMPOST-pääte); `D` palaa piirustuksen yksiköihin. Katso [Mitat mm-, cm-, m- tai km-yksiköissä](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Lyhenne: `RC`. Tulostaa `Kaaren pituus: … Tyyppi: …`, sitten `Määritä ensimmäinen piste [Kaaren pituus/Kohde/Suorakulmainen/Monikulmainen/Vapaa]`. Suorakulmainen kysyy `Määritä vastakkainen kulma`; Monikulmainen `Määritä seuraava piste (Enter sulkee pilven) [Kumoa (U)]`; Vapaa seuraa osoitinta, kunnes napsautus tai {{key:Enter}}; `O` kysyy `Valitse kohde` ja `Kääntäisikö suunta? [Kyllä (Y)/Ei (N)] <N>` ja muuttaa kohteen pilveksi. `A` kysyy `Määritä kunkin kaaren pituus`. `R`, `P` ja `F` valitsevat tyypin seuraavalle pilvelle. Tulos on suljettu murtoviiva kaarista.

### MLEADER

Lyhenne: `MLD`; tai {{ui:Johtoviiva}}. `Määritä johtoviivan nuolen sijainti [Nuolen koko/Laskeutumisetäisyys/Lohko]`, `Määritä johtoviivan laskeutumissijainti`, sitten teksti paikallaan olevassa ruudussa (tai ilman sitä, `Anna teksti (tyhjä rivi lopettaa)`). `Lohko` kysyy ensin lohkon nimeä, ja monijohtoviite näyttää sen lohkon tekstin sijaan. Lisää johtoviivoja: {{cmd:MLEADEREDIT}}. Tallennetaan oikeana monijohtoviitteenä DWG-tiedostoon; DXF säilyttää piirtämänsä viivat, nuolen ja tekstin.

### MLEADEREDIT

Lyhenne: `MLE`. `Valitse monijohtoviite`, sitten `Määritä johtoviivan nuolen sijainti [Poista johtoviivat (R)/Lohkon sisältö (B)/Tekstin sisältö (T)]`: jokainen piste lisää johtoviivan uudesta nuolesta samaan laskeutumiskohtaan, kunnes Enter. `Poista johtoviivat` ottaa pois napsauttamasi johtoviivan (monijohtoviitteellä on vähintään yksi). `Lohkon sisältö` kysyy lohkon nimeä ja näyttää sen tekstin sijaan (sen attribuutit kysytään); `Tekstin sisältö` palauttaa tekstin. Jokaisella johtoviivalla on oma kahva. DWG säilyttää jokaisen johtoviivan ja lohkon yhdessä monijohtoviitteessä.

### MLEADERALIGN

Lyhenne: `MLA`. `Valitse monijohtoviitteet`, sitten `Valitse monijohtoviite, johon kohdistetaan [Jaa (D)/Väli (S)/Käytä nykyistä väliä (U)]` ja `Määritä suunta`. Siirtää muiden monijohtoviitteiden laskeutumiskohdat (ja niiden tekstin tai lohkon) valitun laskeutumiskohdan kautta kulkevalle viivalle siinä suunnassa; nuolenkärjet pysyvät osoittamassa mihin ne osoittavat. `Väli` asettaa ne myös tasaisesti yhtä kauas toisistaan; `Jaa` kysyy kaksi pistettä ja levittää ne tasaisesti niiden väliin. Tarvitaan vähintään kaksi monijohtoviitettä.

### MLEADERCOLLECT

Lyhenne: `MLC`. `Valitse monijohtoviitteet`, sitten `Määritä kootun monijohtoviitteen sijainti [Pysty (V)/Vaaka (H)]` (Enter säilyttää ensimmäisen paikan). Tekee yhden monijohtoviitteen useista: lohkosisältö menee uuteen lohkoon, joka pitää kaikki vierekkäin tai toistensa alla; tekstisisältö muuttuu yhdeksi merkinnäksi, jossa on rivi kutakin. Ensimmäinen monijohtoviite säilyttää johtoviivansa; muut poistetaan. Hylkää tekstin ja lohkon sekoituksen.

### TABLE

Lyhenne: `TB`; tai {{ui:Merkitse}} › {{ui:Lisää}} › {{ui:Taulukko}}. Tekee taulukon: yhden kohteen, jonka siirrät, kopioit, kiertät, skaalaat ja tulostat kuten mitä tahansa muuta, ja sen solut säilyvät tietona.

- `Datarivien määrä tai [Liitä (P)/Tiedosto (F)/Tyyli (S)] <3>`, sitten `Sarakkeiden määrä <3>`, `Tekstin korkeus` ja `Taulukon vasen yläkulma`. Taulukkoon tulee otsikkorivi (yksi yhdistetty solu) ja ylätunnisterivi datarivien yläpuolelle.
- `P`: taulukko leikepöydän laskentataulukon soluista (teksti, jossa välilyönti on solujen välissä). {{key:Ctrl+V}}, kun tällaiset solut ovat leikepöydällä, tekee saman, paitsi jos CadCraftin oma kopio on uudempi (tai CadCraft ei pysty erottamaan niitä: silloin se liittää oman kopionsa ja kertoo siitä). `F`: taulukko `.csv`- tai sarkainerotetusta tiedostosta. Ensimmäinen rivi tulee ylätunnisteriviksi; sarakeleveydet sopivat tekstiin.
- `S`: valitse tämän taulukon taulukkotyyli (katso {{cmd:TABLESTYLE}}).
- Se hylkää rivi- tai sarakemäärän, joka ei ole kokonaisluku, ja enemmän soluja kuin taulukko voi pitää (2 000 riviä, 200 saraketta, 40 000 solua).
- {{cmd:EXPLODE}} muuttaa taulukon viivoiksi ja tekstiksi. DWG-tiedostona taulukko on oikea taulukkokohde, jota muut ohjelmat voivat muokata; DXF-tiedostona se on lohko, joka piirtää sen, ja CadCraft avaa sen taas taulukkona.

### TABLEDIT

Lyhenteet: `TABLEEDIT`, `TABEDIT`; tai kaksoisnapsauta solua. Muokkaa taulukkoa.

- `Valitse solu, johon kirjoitat (Enter lopettaa) tai [Rivi (R)/Sarake (C)/Koko (S)/Yhdistä (M)/Pura yhdistys (U)/Tasaus (A)/Korkeus (H)/Tyyppi (K)/Tyhjennä (CL)]`. Napsauta solua, tai kun taulukko on valittu, kirjoita sen nimi (`B3`: sarake B, rivi 3; otsikkorivi on rivi 1). Selaimessa solun päälle avautuu ruutu: {{key:Enter}} säilyttää tekstin, {{key:Tab}} siirtyy seuraavaan soluun, {{key:Alt+Enter}} aloittaa uuden rivin, {{key:Esc}} jättää solun ennalleen.
- Teksti, joka alkaa `=`-merkillä, on kaava: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, merkkien `+ - * / ^`, sulkujen ja funktioiden kuten `sqrt` ja `round` kanssa. Solu näyttää arvon; kaava, joka nimeää oman solunsa, solun taulukon ulkopuolella tai solun, jossa ei ole lukua, näyttää `####`, ja komentorivi kertoo syyn.
- `R` / `C`: `Lisää` tai `Poista` rivit tai sarakkeet valitussa solussa (kuinka monta, ja ylä- tai alapuolelle, vasemmalle tai oikealle). Kaavat seuraavat soluja, joihin ne viittaavat.
- `S`: sarakkeen leveys ja rivin korkeus. Rivi ei ole koskaan matalampi kuin sen teksti tarvitsee. Valittuna olevalla taulukolla on kahva jokaisen sarakkeen ja rivin reunassa.
- `M`: yhdistä yhdestä valitusta solusta toiseen; `U`: pura yhdistys. `A`: tasaus (`TL` vasen yläkulma … `MC` keskikohta … `BR` oikea alakulma). `H`: tämän solun oma tekstin korkeus (0 = tyylin). `K`: tee rivistä otsikko-, ylätunniste- tai datarivi. `CL`: tyhjennä solu.
- Se hylkää taulukon lukitulla tasolla, kaikkien rivien tai sarakkeiden poistamisen ja yhdistyksen, joka leikkaisi toisen yhdistetyn solun kahtia.

### TABLESTYLE

Lyhenne: `TS`. Luettelee taulukkotyylit ja kuinka monta taulukkoa kukin käyttää, sitten `Taulukkotyyli: [Uusi (N)/Aseta (S)/Muokkaa (E)/Poista (D)/Käytä (A)]`.

- Tyyli sisältää otsikko-, ylätunniste- ja datarivien tekstin korkeuden ja tasauksen, solun marginaalin sekä mitkä reunat piirretään (ulko-, rivien välissä, sarakkeiden välissä).
- `N` tekee tyylin nykyisestä ja tekee siitä nykyisen; `S` asettaa nykyisen tyylin (uudet taulukot saavat sen); `E` muokkaa yhtä: sitä käyttävät taulukot piirretään uudelleen; `A` antaa valituille taulukoille nykyisen tyylin; `D` poistaa yhden (ei Standard-tyyliä, ei nykyistä; sitä käyttäneet taulukot säilyttävät ulkonäkönsä).
- Tyylit tallennetaan piirustukseen (DWG ja DXF).

### TABLEEXPORT

Tallentaa taulukon näyttämän sisällön CSV-tiedostona (kaava arvonsa kanssa). `Valitse taulukko`, tai valitse se ensin. Tekstisolut, jotka alkavat `=`, `+`, `-` tai `@`, saavat alkuunsa `'`-merkin, jotta laskentataulukko ei suorita niitä.

### TABLEPASTE

Lyhenne: `PASTETABLE`. Tekee taulukon leikepöydän laskentataulukon soluista, ja kysyy sitten sen vasemman yläkulman. Sama kuin {{cmd:TABLE}} › `Liitä`.

### DATALINK

Lyhenne: `DL`. `Datayhteys: [Uusi (N)/Luettelo (L)/Poista (R)] <Uusi>`. `N` kysyy CSV-tiedostoa, sijoittaa taulukon siitä ja muistaa tiedoston nimen; `L` luettelee yhteydet tiedostoineen, kokoineen, lukuaikoineen ja taulukoiden määrineen; `R` poistaa yhteyden (sen taulukot jäävät tavallisiksi taulukoiksi).

### DATALINKUPDATE

Lyhenne: `DLU`. Lukee datayhteyden tiedoston uudelleen ja täyttää sen yhteyteen liitetyt taulukot uudelleen (rivejä ja sarakkeita lisätään tai poistetaan vastaamaan). Selain ei voi avata tiedostoa itse, joten se pyytää sinua valitsemaan tiedoston uudelleen. Kun yhteyksiä on useita, se kysyy, mikä niistä.

### FIELD

Lisää kentän piirustukseen: teksti, joka laskee itsensä. `Kenttä: [Päivämäärä (D)/Tiedostonimi (F)/Arkki (S)/Ominaisuus (P)/Kohde (O)/Lauseke (E)/Koodi (C)] <Päivämäärä>`:

- `D`: nyt, tai tallennettu, luotu tai tulostettu päivämäärä, ja muoto (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: tiedostonimi, päätteen kanssa tai ilman. `S`: arkin numero, sen otsikko, tai kuinka monta arkkia on. `P`: piirustuksen ominaisuus nimellä (katso {{cmd:DWGPROPS}}). `O`: valitse kohde, sitten mitä luetaan (pinta-ala, pituus, kehä, säde, halkaisija, taso, nimi, x, y, teksti, kierto, väri) ja desimaalit. `E`: kaava. `C`: teksti koodeilla, kirjoitettuna sellaisenaan, kuten `Arkki %<sheetnumber>% / %<sheetcount>%`.
- Sitten `Valitse teksti, taulukon solu tai lohko, jossa on attribuutteja, johon se lisätään (Enter: uusi teksti)`: valittuun tekstiin kenttä lisätään sen sisällön jälkeen; taulukon solu samoin; lohkoviittaus kysyy, mikä attribuutti; {{key:Enter}} kysyy korkeuden ja pisteen uudelle tekstille.
- Näytöllä kentällä on vaalean harmaa tausta; tulosteessa ja PDF:ssä sitä ei koskaan ole. Kirjoittaminen kentän tekstin päälle käsin lopettaa kentän. Kenttä, jota ei voi laskea, näyttää `####`.
- Kohteen kenttä löytää kohteensa avaimella, jonka CadCraft pitää kohteissa (Asetukset › CadCraft › Yhdistettävissä olevat tiedostot); kun avaimet on kytketty pois, se hylkää.

### UPDATEFIELD

Lyhenne: `UPDATEFIELDS`. `Valitse kohteet, joiden kentät päivitetään (Enter: kaikki kentät) tai [Asetukset (S)]`. `S` asettaa, milloin kentät päivittyvät itsestään: kirjoita kirjaimet `O` avattaessa, `S` tallennettaessa, `P` tulostettaessa, `R` uudelleenlaskennassa (alussa kaikki neljä), tai `NONE`.

### DWGPROPS

Lyhenne: `DRAWINGPROPS`. Luettelee piirustuksen ominaisuudet, sitten `Muuta: [Otsikko (T)/Aihe (S)/Tekijä (A)/Yritys (C)/Avainsanat (K)/Kommentit (M)/Oma (U)/Poista (R)/Lopeta (X)]`. Kuusi ensimmäistä ovat ne, joita {{ui:Piirustuksen tiedot}}-paneeli näyttää; `U` lisää oman nimen ja arvon, `R` poistaa yhden. Kentät lukevat ne (`%<prop:title>%`, `%<prop:Client>%`) ja seuraavat heti. Se hylkää oman nimen, joka on sisäänrakennettu nimi tai sisältää `%`, `<`, `>`, lainausmerkin tai kenoviivan.

## Parametrinen

Katso [Rajoita piirustus](topic:constraints) ja [Käytä parametreja ja yhtälöitä](topic:parameters). Rajoitteet toimivat {{ui:Malli}}-välilehdellä.

### GEOMCONSTRAINT ja GC-komennot

Lyhenne `GCON`: `Anna rajoitteen tyyppi [Vaakasuora (H)/Pystysuora (V)/Kohtisuora (P)/Yhdensuuntainen (AR)/Tangentti (T)/Yhtyvä (C)/Samankeskinen (CON)/Samalla suoralla (COL)/Symmetrinen (S)/Yhtä suuri (E)/Lukitse (F)] <Vaakasuora>`, sitten kyseisen komennon kehotteet.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Valitse kohde [2 pistettä (2P)] <2 pistettä>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Valitse ensimmäinen kohde`, `Valitse toinen kohde` (toinen liikkuu).
- {{cmd:GCCOINCIDENT}}: `Valitse ensimmäinen piste [Kohde (O)/Automaattinen rajoitus (A)] <Kohde>`, `Valitse toinen piste [Kohde (O)] <Kohde>`.
- {{cmd:GCFIX}}: `Valitse piste [Kohde (O)] <Kohde>`.
- {{cmd:GCSYMMETRIC}}: `Valitse ensimmäinen kohde [2 pistettä (2P)] <2 pistettä>`, `Valitse toinen kohde`, `Valitse symmetria-akseli`.

### DIMCONSTRAINT ja DC-komennot

Lyhenne `DCON`: `Valitse muunnettava assosiatiivinen mitta [Lineaarinen (LI)/Vaakasuora (H)/Pystysuora (V)/Kohdistettu (AL)/Kulma (AN)/Säde (R)/Halkaisija (D)/Muunna (C)] <Kohdistettu>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Määritä ensimmäinen rajoitepiste [Kohde (O)] <Kohde>`, `Määritä toinen rajoitepiste`, `Määritä mittaviivan sijainti`, `Mittatekstin arvo <d1=40>` (luku, lauseke tai `nimi=lauseke`).
- {{cmd:DCALIGNED}}: kuten edellä, `[Kohde (O)/Piste ja viiva (P)/2 viivaa (2L)]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Valitse kaari tai ympyrä`. {{cmd:DCANGULAR}}: `Valitse ensimmäinen viiva tai kaari`, `Valitse toinen viiva`.
- {{cmd:DCCONVERT}}: `Valitse muunnettavat mitat`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Valitse kohteet [Asetukset (S)]`. `S` kysyy etäisyys- ja kulmatoleranssit.
- {{cmd:DELCONSTRAINT}} (lyhenne `DELCON`): `Valitse kohteet`; niiden rajoitteet poistuvat.
- {{cmd:CONSTRAINTBAR}} (lyhenne `CBAR`): `Valitse kohteet [Näytä kaikki (SHOWALL)/Piilota kaikki (HIDEALL)]`, sitten `[Näytä (S)/Piilota (H)]`.
- {{cmd:DCDISPLAY}}: `Anna vaihtoehto [Näytä (S)/Piilota (H)]`.

### PARAMETERS ja -PARAMETERS

{{cmd:PARAMETERS}} (lyhenteet `PAR`, `PARAM`) avaa {{ui:Parametrit}}-paneelin. `-PARAMETERS`: `Anna vaihtoehto [Uusi (N)/Muokkaa (E)/Nimeä uudelleen (R)/Poista (D)/?] <?>`.

### SWBOUT

Lyhenne `SWMACRO`. Lataa makron (.swb), joka rakentaa mallin uudelleen yhdeksi rajoitetuksi luonnokseksi SolidWorksissa. Katso [Siirrä luonnoksia muihin osamallinnusohjelmiin](topic:solidworks-sketches).

## Lohkot

### ANNOSCALE

Lyhenne: `CANNOSCALE`. Kertoo piirustuksen merkintämittakaavan ja kuinka monta annotatiivista kohdetta siinä on, sitten kysyy `Uusi merkintämittakaava`: kirjoita `1:50`, `1:100`, `2:1`, pelkkä luku (`50` on 1:50) tai jonkin piirustuksen oman mittakaavan nimi. Jokainen annotatiivinen teksti ja mitoitus muutetaan niin, että se tulostuu samankokoisena uudessa mittakaavassa, yhdellä kumoamisaskeleella; ei-annotatiivisia kohteita ei muuteta, eikä myöskään kohdetta, jossa on mittakaavaluettelo ilman uutta mittakaavaa ({{cmd:OBJECTSCALE}}). Katso [Yksiköt, paperit ja mittakaavat](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Lyhenne: `OBJSCALE`. `Valitse annotatiiviset kohteet`, sitten `Valittujen kohteiden merkintämittakaavat [Lisää (A)/Poista (D)/Nykyinen mittakaava (C)/Luettelo (L)/Lopeta (X)] <Lisää>`. Annotatiivinen teksti tai mitoitus säilyttää luettelon merkintämittakaavoista. `Lisää` ja `Poista` kysyvät mittakaavan (`1:50`, `2:1`, pelkkä luku tai piirustuksen oman mittakaavan nimi); `Nykyinen mittakaava` lisää piirustuksen merkintämittakaavan; `Luettelo` tulostaa kunkin kohteen mittakaavat. Näkymäruutu, jonka mittakaava on kohteen luettelossa, näyttää kohteen siinä koossa, joka tulostaa sen paperikorkeuden siinä mittakaavassa, sekä näytöllä että tulosteissa. Viimeistä mittakaavaa ei voi poistaa. Ei-annotatiiviset kohteet jätetään pois: kytke Annotatiivinen päälle Ominaisuuksissa ensin. Luettelot tallennetaan DWG- ja DXF-tiedostoihin CadCraftin omana datana. Katso [Yksiköt, paperit ja mittakaavat](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Lyhenne: `ANNOALL`. `Näytä annotatiiviset kohteet kaikissa mittakaavoissa [ON/OFF]`. Päällä (kuten piirustus alkaa): annotatiivinen kohde näkyy myös näkymäruudussa tai mallissa, jonka mittakaava ei ole sen luettelossa, siinä koossa, jonka sillä on. Pois: sitä ei näytetä siellä, eikä sitä voi valita mallissa. Kytkin on yksi kumoamisaskel; sitä ei tallenneta tiedostoon.

### SCALELISTEDIT

Lyhenne: `SCALELIST`. `Mittakaavaluettelo [Lisää (A)/Muokkaa (E)/Poista (D)/Luettelo (L)/Palauta (R)]`, kunnes {{key:Enter}}. Lisää: `Mittakaavan nimi`, `Paperiyksiköt`, `Piirustuksen yksiköt`. Muokkaa ja Poista kysyvät mittakaavan nimeä. Piirustuksen omat mittakaavat liittyvät näkymäruutujen ja tulostuksen mittakaavaluetteloihin ja tallennetaan piirustukseen. Katso [Yksiköt, paperit ja mittakaavat](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT ja PEDIT

`SPLINE` (`SPL`): `Splinen ensimmäinen piste [Menetelmä (M)/Kohde (O)] (Sovituspisteet)`. Sovitus: pisteet, joiden kautta käyrä kulkee; `Sulje (C)`, `Kumoa (U)`, sitten `Aloitustangentti` ja `Lopputangentti` (piste tai {{key:Enter}}). Menetelmä › Ohjauspisteet kysyy asteen (1–5) ja piirtää ohjauspolygonista. Kohde muuttaa murtoviivat splineiksi niiden kärkien kautta. `SPLINEDIT` (`SPE`): `[Sovitustiedot (F)/Muokkaa kärkeä (E)/muunna murtoviivaksi (C)/Avaa tai sulje (O)/Käännä (R)/Kumoa (U)/Lopeta (X)]`; Sovitustiedot `[Lisää (A)/Poista (D)/Siirrä (M)/Tyhjennä (P)/Tangentit (T)/Lopeta (X)]`; Muokkaa kärkeä `[Lisää ohjauspiste (A)/Siirrä (M)/Paino (W)/Lopeta (X)]`. `PEDIT` (`PE`): `[Sulje (C)/Avaa (O)/Yhdistä (J)/Leveys (W)/Sovita (F)/Spline (S)/Suorista (D)/Viivatyypin luonti (L)/Käännä (R)/Kumoa (U)/Lopeta (X)]`, `M` useille kohteille; viivat, kaaret ja splinit tarjotaan ensin murtoviivoina. Katso [Splinet ja murtoviivat](topic:splines).

### BLOCK

Lyhenteet: `B`, `BMAKE`.

- `Anna lohkon nimi`. Jos se on olemassa: `Lohko "…" on jo olemassa. Määritelläänkö se uudelleen? [Kyllä (Y)/Ei (N)] <N>`.
- `Määritä lisäyksen perustapiste`
- `Valitse kohteet`. Ne korvataan yhdellä viittauksella uuteen lohkoon.

### WBLOCK

Lyhenteet: `W`, `-WBLOCK`. Kirjoittaa lohkon, joitakin kohteita tai koko piirustuksen uuteen DWG- tai DXF-tiedostoon. `WBLOCK-lähde [Lohko (B)/Koko piirustus (E)/Kohteet (O)] <Kohteet>`:

- **Kohteet**: `Määritä lisäyksen perustapiste` (siitä tulee uuden piirustuksen origo), `Valitse kohteet`, sitten `Tiedostomuoto [DWG/DXF/R12 DXF]` ja `Uuden piirustuksen tiedostonimi`, sitten `Mitä kohteille tehdään [Säilytä (R)/Muunna lohkoksi (C)/Poista (D)]`. Muunna korvaa ne yhdellä viittauksella tiedoston nimen mukaiseen lohkoon; Poista poistaa ne.
- **Lohko**: `Kirjoitettava lohko`. Lohkon omat kohteet, perustapiste origona, sisäkkäiset lohkot mukaan lukien.
- **Koko piirustus**: jokainen kohde mallitilassa. Arkkeja ei kirjoiteta; käytä {{cmd:SAVEAS}}-komentoa kopiolle, joka säilyttää arkit.

Uusi tiedosto sisältää vain ne tasot, viivatyypit, tekstin ja mitoitustyylit sekä lohkot, joita sen kohteet käyttävät, ja piirustuksen yksiköt. DWG-tiedoston versio on se, jonka {{cmd:SAVEAS}} viimeksi käytti. Selaimessa tiedosto ladataan; Studiossa tallennusikkuna aukeaa.

### ATTDEF

Lyhenteet: `ATT`, `DDATTDEF`, `-ATTDEF`; tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Määritä attribuutti}}. Tulostaa tilat, sitten `Anna muutettava vaihtoehto (Enter kun valmis) [Näkymätön (I)/Vakio (C)/Esiasetus (P)]`, `Anna attribuutin tunnisteen nimi`, `Anna attribuutin kehote`, `Anna attribuutin oletusarvo` (`Anna attribuutin arvo`, jos vakio), `Määritä tekstin aloituspiste`, `Määritä tekstin korkeus`, `Määritä tekstin kiertokulma`. {{cmd:BLOCK}} ottaa attribuuttimääritelmät lohkoon.

### EATTEDIT ja ATTEDIT

`EATTEDIT` (`DDATTE`, tai kaksoisnapsauta viittausta, jossa on attribuutteja; {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Muokkaa attribuutteja}}): `Valitse lohkoviittaus, jossa on attribuutteja`, sitten {{ui:Muokkaa attribuutteja}}-ikkuna. `ATTEDIT` (`ATE`, `-ATTEDIT`): sama viittaus, sitten `<kehote> (<TAG>) <arvo>` jokaiselle attribuutille; {{key:Enter}} säilyttää arvon. Katso [Attribuutit](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Päivitä minkä lohkon viittausten attribuutit [Nimi (N)/Valitse (S)/Kaikki (A)] <Valitse>`. Arvot säilyvät; uudet attribuutit saavat oletuksensa, poistetut poistuvat ja sijainnit nollataan.

### BATTMAN

{{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Attribuuttien hallinta}}. Ikkuna: lohko, attribuutit (tunniste, kehote, oletus, tilat, järjestys), {{ui:Päivitä viittaukset (arvot säilytetään)}}, {{ui:Käytä}}.

### REFEDIT ja REFCLOSE

{{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Muokkaa paikan päällä}}. `REFEDIT`: `Valitse muokattava lohkoviittaus paikallaan` (tai valinta). `REFCLOSE`: `Tallennetaanko muutokset kohteeseen "…" [Tallenna (S)/Hylkää (D)] <Tallenna>`; palkin {{ui:Tallenna lohko}} ja {{ui:Hylkää}} tekevät saman. Koko muokkaus on yksi kumoamisaskel. Katso [Attribuutit](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: määrittääkö kynävedon paine sen viivanpaksuuden, jonka {{cmd:SKETCHFIX}} ja {{cmd:SKETCHLIVE}} tekevät (alussa päällä). Katso [Piirrä kynällä](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Lyhenne: `OFFSTD`. Kertoo, mikä toimiston standardi on voimassa tälle piirustukselle ja mistä se tulee: piirustuksen oma tietue, tiimisi yhteinen standardi tai Oletuskäytännöt (tekstin korkeudet `all.anno.*`); ilman mitään käytetään ohjelman omia kokoja. `[Tuo (I)/Tasot (L)/Nimilohko (T)/Tyhjennä (C)/Lopeta (X)]`: `Tuo` lukee `cc-office-standard` .json-tiedoston (SuperCadin ja BimCraftin kirjoittaman tietueen) tähän piirustukseen, tallennettuna siihen DWG- ja DXF-tiedostoissa; `Tasot` lisää toimiston tasot, joita piirustuksessa ei ole, yhdellä kumoamisaskeleella, eikä koskaan poista yhtään; `Nimilohko` luettelee toimiston kentät piirustuksen omilla arvoilla; `Tyhjennä` poistaa piirustuksen oman tietueen. Annotatiivisten tekstien ja mittojen korkeudet seuraavat voimassa olevaa standardia. Katso [Yksiköt, paperit ja mittakaavat](topic:units-papers-scales).

### BPARAMS

Lyhenteet: `BPM`, `BLOCKPARAMS`. Avaa parametrien hallinnan lohkolle lohkomuokkaimessa, valitun viittauksen lohkolle tai nimeämällesi lohkolle (`Lohkon nimi`): parametrit kaavoineen, useita näkyvyysparametreja tiloineen, ja valitun viittauksen omat arvot ja tilat. Katso [Omat parametrit ja näkyvyystilat](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` tekee saman komentoriviltä: `[Parametri (P)/Näkyvyys (V)/Tila (S)/Sijoita (A)/Viittaus (R)/Valmis (D)]`.

### BEDIT ja BCLOSE

`BE`; tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Muokkaa lohkoa}}. `Anna muokattavan lohkon nimi <valitun viittauksen lohko>` avaa lohkomuokkaimen. `BCLOSE` kysyy `Suljetaanko lohkomuokkain kohteelle "…" [Tallenna (S)/Hylkää (D)] <Tallenna>`; palkin {{ui:Tallenna lohko}} ja {{ui:Hylkää muutokset}} tekevät saman. Kaikki muokkaimessa tehty on yksi kumoamisaskel.

### VIEWBASE

Lyhenne: `FLATSHOT`. Litteä 2D-näkymä 3D-kappaleista 3D-välilehdellä: `Näkymä [Edestä/Päältä/Oikealta/Vasemmalta/Takaa/Alhaalta/Iso (I)]`, `Piilotetut viivat [Näytä/Piilota]`, mittakaava (`1:20`, `2:1`; {{key:Enter}} ottaa arkille sopivan), sitten näkymän keskipiste. Yksi lohkoviittaus, jonka näkyvät reunat ovat VIEW-VISIBLE-tasolla ja piilotetut reunat katkoviivoina VIEW-HIDDEN-tasolla. Katso [Litteät näkymät arkilla](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Lyhenne: `-PUBLISH`; tai {{ui:Kaikki arkit yhteen PDF:ään}} {{ui:Plottaa PDF:ksi}}-ikkunassa. `Tulostettavat arkit [Kaikki (A)/Jotkin (S)]`: {{key:Enter}} tulostaa jokaisen arkin, `S` kysyy nimet pilkuilla erotettuina. Yksi PDF, sivu ja kirjanmerkki arkkia kohden. Katso [Kaikki arkit yhteen PDF:ään](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Lyhenteet: `SSM`, `SHEETSETMANAGER`. Vie sinut vasemman paneelin {{ui:Arkkisarja}}-osioon: arkit monesta piirustuksesta, numeroituina ja nimettyinä, nimilohkot täytettynä sarjasta, julkaistuna yhdeksi PDF:ksi. Katso [Arkkisarjat](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): valitse DWG tai DXF, sitten sen lisäyspiste. {{cmd:XREF}} (`XR`, `-XREF`): `Linkitetyt piirustukset [?/Liitä (A)/Lataa uudelleen (R)/Sido (B)/Irrota (D)] (Enter: ?)`; kun linkkejä on enemmän kuin yksi, valitse yksi viittauksistaan tai kirjoita `N` ja sen nimi. Katso [Linkitetyt piirustukset](topic:files#linked-drawings-external-references).

### COUNT

Lyhenteet: `BCOUNT`; tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Laske lohkot}}. `Valitse laskettava lohkoviittaus tai [Kaikki (A)/Vie (E)] (Enter: Kaikki)`: valinta valitsee ja laskee jokaisen tämän lohkon viittauksen tässä avaruudessa; {{key:Enter}} tai `A` luettelee kaikki; `E`, sitten `C` (määrät) tai `A` (attribuutit), lataa CSV-tiedoston. Katso [Laske lohkot ja vie luettelo](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Lyhenteet: `I`, `DDINSERT`.

- `Anna lohkon nimi tai [Tiedosto (F)/Kirjasto (L)] <viimeisin lohko>` (kirjainkoolla ei ole merkitystä). `F` kysyy DWG- tai DXF-tiedostoa, sitten koko piirustusta tai yhtä sen lohkoista; jo käytössä oleva nimi kysyy {{ui:Säilytä olemassa olevat}} tai {{ui:Nimeä uudelleen}}. `L` avaa kirjastopaneelin.
- `Määritä lisäyspiste [Mittakaava (S)/Kierrä (R)]`. `S` kysyy `Anna mittakaavakerroin`, `R` kysyy `Määritä kiertokulma`; molemmat muistetaan.
- Kun lohko on jo kohteiden vieressä, jotka toistuvat muualla ilman sitä, rivi kertoo kuinka monta paikkaa ehdotetaan, ja kehote saa vaihtoehdon `suGgested`: `G` näyttää ne; napsauta lähellä yhtä sijoittaaksesi lohkon siihen, `A` kaikille, {{key:Enter}} palaa. Ne ottavat naapureidensa kierron ja attribuuttien oletusarvot. Yli 20 000 kohteen piirustuksia ei etsitä avoimesta avaruudesta.
- Sitten `Anna <kehote> (<TAG>) <oletus>` jokaiselle attribuutille, jota lohko pyytää. Katso [Lohkon attribuutit](topic:attributes).

### LIBRARY

Lyhenne: `LIB`. Avaa kirjastopaneelin: sijoita kohteita, tarkista päivitykset, kirjaston tekijätiedot. Ei kysymyksiä. Katso [Lisää tiedostosta tai kirjastosta](topic:insert-from-file-and-library).

### STEELMEMBER

Lyhenne: `SMEMBER`; tai {{ui:3D-sauva}} kirjaston {{ui:Vakio}}-välilehdellä. `Profiilikoko <W12x26>` (kuten välilehti sen luettelee), sitten `Alkupiste [Pilari (C)]` ja `Loppupiste`: kiinteä sauva 3D-välilehdellä kahden pisteen välillä, maalla kiinni. `C` kysyy pilarin perustapisteen ja sen korkeuden. Yksi kumoamisaskel. Katso [Sijoita teräsprofiileja ja vakio-osia](topic:steel-and-standard-parts).

### PARTSLIST

Lyhenne: `PLIST`. `Osaluettelon vasen yläkulma`, sitten `Tekstin korkeus <2.5>`: piirtää taulukon jokaisesta vakio-osasta ja teräsprofiilista, joka on sijoitettu kirjastosta (nimikenumerot, määrä, osa, standardi, koko, pituus, materiaali, massa). Yksi kumoamisaskel. Katso [Sijoita teräsprofiileja ja vakio-osia](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Lyhenne: `PU`. Poistaa lohkomääritykset, joita mikään ei käytä. Ei kysymyksiä.

### DELBLOCKS

Tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Poista lohkoja}}. `Valitse poistettava lohko [Nimi (N)/Lopeta (X)]`: napsauta lohkoviittausta tai anna `N` luettelolle, jossa on suodatin (valitse useita), tai `X` / {{key:Enter}} lopettaa. Jokainen viittaus poistuu — mallista, jokaiselta arkilta ja muiden lohkojen sisältä — ja sitten määritelmä; komentorivi kertoo, mitä poistettiin ja mitä ei voitu. Nimettömiä lohkoja ja linkitettyjä piirustuksia ei tarjota. Kehote palaa seuraavaa lohkoa varten; koko komento on yksi kumoamisaskel.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} liittää sen, minkä kopioit ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), yhtenä lohkona: valitse lisäyspiste, ja siihen tulee yksi viittaus uuteen lohkoon, valittuna. Lohkolle tulee oma nimi (`A$C` ja numero); {{cmd:RENAME}} antaa sille oman. Yksi kumoamisaskel poistaa viittauksen ja lohkon.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} kysyy korvattavan lohkon ja sen tilalle laitettavan lohkon (`?` luettelee lohkot), ja muuttaa sitten jokaisen viittauksen mallissa, jokaisella arkilla ja muiden lohkojen sisällä. Jokainen viittaus säilyttää paikkansa, mittakaavansa, kiertonsa, tasonsa ja molempien lohkojen attribuuttien arvot; vain uudella lohkolla olevat attribuutit alkavat oletuksistaan, ja se kertoo, mitkä arvot pudotettiin. Kun mikään ei enää käytä vanhaa lohkoa, se tarjoutuu poistamaan sen. Se hylkää linkitetyt piirustukset ja korvauksen, joka asettaisi lohkon sisälleen. Yksi kumoamisaskel.

### MINSERT

{{cmd:MINSERT}} sijoittaa lohkon riveihin ja sarakkeisiin: lohkon nimi, lisäyspiste, mittakaava, kierto, rivien ja sarakkeiden määrä ja niiden välit. Koko joukko kääntyy kierron mukana. Jokainen on oma viittauksensa (enintään 10 000), joten mitä tahansa niistä voi siirtää tai poistaa myöhemmin.

### BLOCKSPALETTE

Lyhenne: `BLOCKSPAL`; tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Lohkopaneeli}}. Näyttää {{ui:Lohkot}}-paneelin, jonka suodattimessa kohdistin on. Jokaisella lohkolla on pieni kuva; viimeksi sijoitetut tulevat ensin. Suodattimen vieressä olevat kaksi painiketta vaihtavat kuvien luettelon ja ruudukon välillä. Napsauta kuvaa (tai {{ui:Lisää}}) sijoittaaksesi lohkon komennolla {{cmd:INSERT}}, tai vedä se piirustukseen sijoittaaksesi sen pudotuskohtaan.

{{ui:Kirjastot}}, luettelon alla: {{ui:Lisää piirustus}} ottaa oman DWG- tai DXF-tiedostosi ja luettelee sen lohkot kuvin, ja koko piirustus yhtenä lohkona. Lohkon sijoittaminen kopioi sen määritelmän (ja sen sisäkkäiset lohkot ja niiden tasot) tähän piirustukseen, kuten {{cmd:INSERT}}-komennon `File`-vaihtoehto tekee; lohko, joka on jo täällä samalla määritelmällä, käytetään kysymättä, ja samannimisestä, mutta erilaisesta, kysytään {{ui:Säilytä olemassa olevat}} tai {{ui:Nimeä uudelleen}}. Selaimessa tiedosto säilyy, kunnes sivu suljetaan. CadCraft Studiossa {{ui:Lisää kansio}} luettelee kansion piirustukset; kukin avataan, kun napsautat sitä, ja tiedostot ja kansiot muistetaan. Pieni x poistaa kirjaston luettelosta; tiedostoa ei kosketa. Jaettu {{ui:Kirjasto}} on eri asia: katso [Lisää tiedostosta tai kirjastosta](topic:insert-from-file-and-library).

### BCONVERT

Tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Muunna toistuvat lohkoiksi}}. Etsii toistuvan geometrian ja muuttaa jokaisen kopion viittaukseksi yhteen lohkoon.

- `Valitse toistuvat kohteet tai [Lohko (B)]`: yhden kopion kohteet. `B` nimeää olemassa olevan lohkon sen sijaan, löytääkseen irralliset kopiot sen kohteista.
- `Kopio voi olla: peilattu = Ei, skaalattu = Ei; taso, väri, viivatyyppi ja viivanpaksuus = Vastaa … [Peilattu (M)/Skaalattu (S)/Ominaisuudet (P)]`: `M`, `S` ja `P` vaihtavat sitä, mikä lasketaan kopioksi; {{key:Enter}} hakee. Asetukset muistetaan.
- `Uuden lohkon nimi <Block1>`, sitten `Määritä lohkon perustapiste` ({{key:Enter}} ottaa valinnan vasemman alakulman).
- Se kertoo, kuinka monta muuta kohdejoukkoa on samaa geometriaa, korostaa kaiken, minkä se korvaisi, ja kysyy `Kyllä/Ei`.

Kopio on samat kohteet siirrettynä ja käännettynä mihin tahansa kulmaan (ja peilattuna tai skaalattuna yhdellä kertoimella, kun ne ovat päällä): jokaisella kohteella on oltava vastinkohde, miljoonasosan tarkkuudella valinnan koosta. Jokainen viittaus saa oman kiertonsa ja mittakaavansa (peilattu saa negatiivisen Y-mittakaavan), ja kerroksen, jolla sen kohteet olivat yhteisesti. Lukittujen tasojen kohteita ei kosketa, ja ne lasketaan. Se etsii avoimesta avaruudesta (mallista tai avoimesta arkista). Hyvin laaja haku pysähtyy työrajaan ja kertoo siitä. Yksi kumoamisaskel.

### BSEARCH

Tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Etsi lohkoja}}. `Etsi lohkoja [Nimi (N)/Attribuutti (A)/Geometria (G)] <Nimi>`:

- `N`: osa lohkon nimestä tai kuvio, jossa on `*` ja `?`. Luettelee jokaisen lohkon viittauksineen täällä ja koko piirustuksessa.
- `A`: attribuutin arvo tai `TAG=arvo`. Luettelee lohkot, joiden viittaukset pitävät sitä, löydetyt arvot kanssaan. Vakioattribuutit lasketaan.
- `G`: valitse kohteet tai yksi lohkoviittaus, ja lohkot, joiden muoto on vähintään 85 % samanlainen, luetellaan parhaasta alkaen. Koko, kierto ja peilaus eivät vaikuta. Mitta vertaa pisteiden välisiä etäisyyksiä, jotka on levitetty ääriviivoja pitkin, joten se löytää samannäköisiä; tarkkoja kopioita varten käytä {{cmd:BCONVERT}}-komentoa.

Avoimessa avaruudessa löydetyt viittaukset valitaan seuraavaa komentoa varten.

### BREPLACE

Tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Korvaa lohkoja}}. `Korvaa [Valitut (S)/Kaikki (A)]`: `S` korvaa valitsemasi lohkoviittaukset nimeämälläsi lohkolla; `A` kysyy lohkon ja sen korvaajan ja muuttaa jokaisen viittauksen, kuten {{cmd:BLOCKREPLACE}} tekee (sama koodi). Viittaus säilyttää paikkansa, mittakaavansa, kiertonsa, tasonsa ja molempien lohkojen attribuuttien arvot; arvot, joille uudella lohkolla ei ole paikkaa, pudotetaan ja nimetään. `?` luettelee lohkot. Yksi kumoamisaskel.

### DATAEXTRACTION

Lyhenteet: `EATTEXT`, `DX`; tai {{ui:Lohkot}} › {{ui:Lisää}} › {{ui:Tietojen poiminta}}. Luettelee lohkot, niiden attribuutit ja kohteiden ominaisuudet taulukkona tai CSV-tiedostona.

- Toimii valinnalle, tai kysyy `Valitse kohteet (Enter: kaikki tässä avaruudessa)`.
- `Luettelo: [Lohkot (B)/Kohteet (O)/Kaikki (A)]`, kun valinta sisältää molempia. Nimettömiä lohkoja, taulukoita ja materiaaliluetteloita ei koskaan luetella.
- Se tulostaa sarakkeet, joista voi valita (nimi, tyyppi, taso, X, Y, kierto, mittakaava, pituus, pinta-ala, väri, viivatyyppi, avaruus ja yksi kullekin attribuuttitunnisteelle), sitten `Sarakkeet, nimen tai numeron mukaan pilkuilla erotettuina`. {{key:Enter}} ottaa tähdellä merkityt: lohkoille nimen ja jokaisen attribuutin; kohteille tyypin, tason ja pituuden.
- `Yhdistetäänkö samanlaiset rivit laskurilla? [Kyllä (Y)/Ei (N)] <Kyllä>`, sitten `Laitetaanko luettelo: [Taulukko (T)/Csv (C)] <Taulukko>`. Taulukko on tavallinen taulukko ({{cmd:TABLEDIT}} muokkaa sitä) eikä elävä: aja komento uudelleen, kun piirustus muuttuu.
- Se hylkää sarakkeen, joka ei ole luettelossa. Taulukko pitää 1 999 datariviä; CSV-tiedosto ottaa ne kaikki.

### COUNTTABLE

Laskee valinnan (tai avoimen avaruuden) lohkoviittaukset ja laittaa määrät taulukkoon (`Lohko`, `Määrä`) tai CSV-tiedostoon. Kohteen laskemiseen, joka seuraa piirustusta itsestään, katso {{cmd:BOMTABLE}}.

## Arkit ja tulostus

### LAYOUT

Lyhenteet: `LO`, `NEWLAYOUT`; tai {{ui:+}}-painike piirustuksen alla. Uusi arkki, jolla on reunus, nimilohko ja yksi näkymäruutu, ISO A3:lla (tai Tabloidilla piirustuksissa tuumissa tai jaloissa). Ei kysymyksiä.

### MVIEW

Lyhenne: `MV`. Vain arkilla ({{cmd:VPORTS}} arkilla tekee saman).

- `Määritä näkymäruudun kulma [Monikulmainen (P)/Kohde (O)]`, `Määritä vastakkainen kulma`. Näkymäruutu näyttää koko mallin vakiomittakaavassa.
- `P` (Monikulmainen): napsauta ääriviivan kulmia (`Kumoa (U)`, `Sulje (C)`), {{key:Enter}} kun valmis. Se hylkää alle kolme kulmaa.
- `O` (Kohde): `Valitse suljettu kohde näkymäruudun ääriviivaksi`: suljettu murtoviiva, ympyrä tai ellipsi arkilla. Näkymäruutu saa sen muodon (käyrät lyhyinä suorina paloina); kohde jää ennalleen. Se hylkää kohteen, joka ei ole suljettu.

### VPCLIP

Rajaa näkymäruudun, joka on jo arkilla. `Valitse rajattava näkymäruutu` (tai valitse se ensin), sitten `Valitse kohde, johon rajataan [Monikulmainen (P)/Poista (D)]`:

- Napsauta suljettua murtoviivaa, ympyrää tai ellipsiä, tai {{key:Enter}} (tai `P`) napsauttaaksesi monikulmion kulmat.
- `D` (Poista, tarjolla kun näkymäruutu on rajattu) tekee siitä taas suorakulmion: laatikon, joka ympäröi aiemman ääriviivan.
- Näkymäruudun näyttämä asia ei liiku paperilla, eikä sen mittakaava muutu. Malli piirretään ja tulostetaan vain ääriviivan sisällä, ja reuna seuraa sitä. Yksi kumoamisaskel.
- Rajatulla näkymäruudulla on kahva jokaisessa ääriviivan kulmassa, keskipisteen ja laatikon neljän kulman lisäksi (laatikon kulman vetäminen venyttää ääriviivaa sen mukana). Ominaisuudet näyttää Ääriviiva: Suorakulmio tai Rajattu ja kulmien määrä.
- DWG- ja DXF 2000 -tiedostot säilyttävät ääriviivan CadCraftille. Muut ohjelmat avaavat näkymäruudun sen ympärillä olevana suorakulmiona; DXF R12 säilyttää vain suorakulmion.
- Mallivälilehdellä kerrotaan, että näkymäruudut ovat arkeilla.

### VPORTS

Lyhenne: `VIEWPORTS`. {{cmd:SPLIT}} on sama myös arkilta, ja {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Jaa vierekkäin}}, {{ui:Jaa päällekkäin}}, {{ui:Neljä ruutua}} ja {{ui:Yksi ruutu}} suorittavat sen. Mallissa: `Anna ruutujen määrä [Yksi (SI)/2/3/4] <3>`; `2` kysyy `[Vaaka (H)/Pysty (V)] <Pysty>` (Pysty = vierekkäin), `3` kysyy `[Vasen (L)/Oikea (R)] <Oikea>` (mihin suuri ruutu menee). Jokainen ruutu säilyttää oman näkymänsä ja avaruutensa; napsautus tekee ruudun aktiiviseksi. Arkilla se on {{cmd:MVIEW}}. Katso [Jaa näyttö](topic:split-screen).

### VPVIEW

Ei lyhennettä. Vain arkilla.

- `Valitse näkymäruutu` (ohitetaan, jos yksi on valittu), sitten mallissa: `Määritä näytettävän ikkunan ensimmäinen kulma`, `Määritä vastakkainen kulma`.

### UCS

Ei lyhennettä. Oma koordinaatistosi, ei muokkausta. `Määritä UCS:n origo [Nimetty (NA)/Kohde (OB)/Edellinen (P)/Maailma (W)/Z (Z)/3 pistettä (3)] <Maailma>`: piste on uusi origo, sitten `Määritä piste X-akselilla (Enter säilyttää kulman)`. `Z`: `Määritä kiertokulma Z-akselin ympäri <90>`. `3`: origo, piste positiivisella X-akselilla ja piste positiivisen Y-puolen puolella. `OB`: `Valitse kohde UCS:n kohdistamiseksi`. `NA`: `[Palauta (R)/Tallenna (S)/Poista (D)/?]` ja nimi. Näkymä kääntyy, joten uusi X-akseli on vaakasuorassa. Katso [Käännä näkymää ja käytä omia koordinaatteja](topic:ucs-and-turned-view).

### PLAN

Ei lyhennettä. `Anna vaihtoehto [Nykyinen ucs (C)/Ucs (U)/Maailma (W)] <Nykyinen ucs>`: kääntää aktiivisen ruudun näkymän niin, että UCS:n X-akseli (tai maailman) on vaakasuorassa. Piirustuksen mikään ei liiku.

### TURNLEFT, TURNRIGHT, TURNWORLD

Ei lyhenteitä; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Käännä näkymää 90° vasemmalle}}, {{ui:Käännä näkymää 90° oikealle}}, {{ui:Takaisin maailmaan}}. Sama kuin `UCS Z -90`, `UCS Z 90` ja `UCS W`, näkymän seuratessa.

### VPLAYER

Ei lyhennettä. Arkilla tai näkymäruudun sisällä. `Anna vaihtoehto [?/Jäädytä (F)/Sulata (T)/Palauta (R)/Vpvisdflt (V)]`: `F`, `T` ja `R` kysyvät tasojen nimiä (pilkut, `*` ja `?` jokerimerkkeinä), sitten `[Kaikki (A)/Valitse (S)/Nykyinen (C)] <Nykyinen>` näkymäruutuja; Palauta asettaa jokaisen tason takaisin oletukseensa "jäädytetty uusissa näkymäruuduissa"; `V` asettaa tuon oletuksen (`[Jäädytetty (F)/Sulatettu (T)]`), jota {{cmd:MVIEW}} käyttää. `?` luettelee tasot, jotka on jäädytetty nykyisessä näkymäruudussa. Tasot-paneelin näkymäruutusarake tekee saman yhdelle näkymäruudulle. Katso [Jäädytä taso yhdessä näkymäruudussa](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Lyhenne: `MS`; tai kaksoisnapsauta näkymäruudun sisällä. Vain arkilla. Työskentele mallissa näkymäruudun kautta: valittu, arkin ainoa tai `Napsauta näkymäruudun sisällä työskennelläksesi siinä`. Panorointi ja zoomaus sen sisällä muuttavat näkymäruudun näkymää (näytön lukitsema säilyttää sen ja arkki liikkuu sen sijaan); uusi näkymä kirjoitetaan yhdeksi kumoamisaskeleeksi. Katso [Työskentele mallissa näkymäruudun kautta](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Lyhenne: `PS`; tai kaksoisnapsauta näkymäruudun ulkopuolella tai napsauta piirustuksen alla olevaa välilehteä. Palaa arkille.

### PLOT

Lyhenteet: `PRINT`, `PUBLISH`, `EXPORTPDF`; tai {{key:Mod+P}}. Avaa {{ui:Plottaa PDF:ksi}}-ikkunan. Katso [Plottaa PDF:ksi](topic:plot-pdf).

### PLOTSTYLES

Lyhenteet: `STYLESMANAGER`, `PSTABLES`; tai {{ui:Muokkaa taulukoita…}} {{ui:Plottaa PDF:ksi}}-ikkunassa. Avaa {{ui:Tulostustyylitaulukot}}: mitä kukin väri tulostuu (väri, harmaa, muste, viivanpaksuus), säilyy piirustuksen mukana. Katso [Tulostustyylitaulukot](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} siirtää kohteita arkin ja mallin välillä näkymäruudun kautta, skaalattuina ja käännettyinä niin, että ne näyttävät samalta toiselta puolelta. Arkilla valitse kohteet, ja ne menevät malliin (valitse näkymäruutu, kun arkilla on useita). Kun työskentelet mallissa näkymäruudun kautta ({{cmd:MSPACE}}), valitut kohteet tulevat arkille. Se kertoo, kuinka monta kertaa suuremmiksi tai pienemmiksi ne tulivat. Näkymäruudut pysyvät arkillaan. Yksi kumoamisaskel.

### ISODRAFT

{{cmd:ISODRAFT}} kytkee isometrisen piirtämisen `ON` tai `OFF`, tai menee suoraan `Left`-, `Top`- tai `Right`-tasolle. Kun se on päällä: Ortogonaali ({{key:F8}}) pitää viivat tason kahdella akselilla (vasen: 90° ja 150°; ylä: 30° ja 150°; oikea: 30° ja 90°), napaseuranta ({{key:F10}}) seuraa samoja akseleita, tartunta ruudukkoon ({{key:F9}}) käyttää isometristä ruudukkoa, ja ruudukko ({{key:F7}}) piirretään viivoin 30°, 90° ja 150°. {{cmd:ELLIPSE}} saa vaihtoehdon `Isocircle`: anna keskipiste ja säde (tai `Halkaisija (D)`), ja se piirtää ellipsin, jonka ympyrä näyttää nykyisellä tasolla. Piirustus pysyy litteänä: nämä ovat apuvälineitä kuvan piirtämiseen, eivät 3D-mallia. Asetus on tälle istunnolle eikä tallennu tiedostoon.

### ISOPLANE

{{cmd:ISOPLANE}} valitsee isometrisen piirtämisen tason: `Left`, `Top` tai `Right`. Enter siirtyy seuraavaan tasoon. Kun isometrinen piirtäminen on päällä, {{key:F5}} tekee saman kesken komennon; kun se on pois, {{key:F5}} jää selaimelle.

## Kyselyt

### CAL

Tulostaa laskun arvon, kuten se luetaan missä tahansa, missä pituus kirjoitetaan.

- `Lauseke`: kirjoita se, esimerkiksi `12'6"+3/4"` tai `(24'-0")/3`, ja paina {{key:Enter}}. CadCraft tulostaa `= 12'-6 3/4"   (150.75 piirustusyksikköä)`. Katso [Laskutoimitukset kirjoitetussa arvossa](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Lyhenne: `DI`; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Mittaa etäisyys}}.

- `Määritä ensimmäinen piste`, `Määritä toinen piste`. Tulostaa etäisyyden, kulman, Delta X:n ja Delta Y:n.

### AREA

Lyhenne: `AA`; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Ala}}. Tulostaa pinta-alan ja kehän.

- `Määritä ensimmäinen kulmapiste [Kohde (O)/Lisää ala (A)/Vähennä ala (S)] <Kohde>`
  - Napsauta tai kirjoita kulmia; kohdassa `Määritä seuraava piste (Enter sulkee) [Kumoa (U)]` paina {{key:Enter}} sulkeaksesi ääriviivan. `U` ottaa viimeisimmän kulman takaisin.
  - {{key:Enter}} tai `O`, sitten `Valitse kohde`: ympyrä (tulostaa kehän), ellipsi, murtoviiva (avoin suljetaan suoralla viivalla pinta-alaa varten, ja sen pituus tulostetaan) tai viivoitus (reiät vähennetään).
  - `A` (Lisää ala) ja `S` (Vähennä ala) pitävät juoksevaa summaa: kehote alkaa `(ADD mode)` tai `(SUBTRACT mode)`, jokainen ala lisätään tai vähennetään, ja `Yhteensä ala = …` tulostetaan jokaisen jälkeen. Näissä tiloissa `O` valitsee kohteita, kunnes {{key:Enter}}, ja {{key:Enter}} ensimmäisessä kehotteessa lopettaa komennon.

### MEASUREGEOM

Lyhenne: `MEA`. `Anna vaihtoehto [Etäisyys (D)/Säde (R)/Kulma (A)/Ala (AR)] <Etäisyys>`; jokaisen mittauksen jälkeen se kysyy uudelleen, ja oletuksena on `Lopeta (X)`.

`Pikamittaus (Q)` mittaa osoittimen ympäriltä, kun liikutat sitä: etäisyys lähimpään kohteeseen oikealle, ylös, vasemmalle ja alas (nykyisen UCS:n akseleita pitkin), piirrettynä mukana, ja kulman, jossa kaksi näistä naapureista ovat suorassa ja kohtaavat. Napsautus kirjoittaa neljä etäisyyttä, vapaan leveyden ja korkeuden sekä kulmat historiaan; Enter palaa vaihtoehtoihin. Se lukee näytöllä olevan.

- `D`: kaksi pistettä, kuten {{cmd:DIST}}.
- `R`: `Valitse kaari tai ympyrä`; tulostaa säteen ja halkaisijan.
- `A`: kaari (sen sisällä oleva kulma), viiva ja sitten toinen viiva (niiden välinen kulma kohti niiden kaukaisia päitä), tai {{key:Enter}} ja kolme pistettä (kärki, sitten molemmat päät).
- `AR`: kuten {{cmd:AREA}}, yksi ala.

### ID

Ei lyhennettä. `Määritä piste`; tulostaa sen X:n ja Y:n.

### LIST

Lyhenteet: `LI`, `LS`. `Valitse kohteet`; tulostaa jokaisen kohteen tyypin, tason ja pääasialliset mitat.

### MASSPROP

{{cmd:MASSPROP}} antaa valitsemiesi alueiden ja suljettujen kohteiden poikkileikkausominaisuudet yhdessä: pinta-ala, kehä, rajauslaatikko, painopiste, hitausmomentit X- ja Y-akselin suhteen origon kautta, hitausmomentin tulo, pyörimissäteet, samat momentit painopisteen suhteen, ja pääsuuntien momentit akseleineen. Reiät alueessa lasketaan reikinä. Luvut ovat piirustusyksiköissä ja tarkkoja ääriviivoille, jotka koostuvat viivoista ja kaarista; ellipsit ja splinit mitataan lyhyinä suorina segmentteinä, ja se kertoo siitä. Raportin jälkeen se kysyy, kirjoitetaanko se tekstitiedostoon. Suljettuja kohteita, joita ei ole suljettu, ei oteta mukaan, ja se kertoo, kuinka monta.

## Näkymä, tiedosto ja muut

### ZOOM

Lyhenteet: `Z`.

- `Määritä ikkunan kulma, anna mittakaavakerroin (nX) [Laajuus (E)/Kaikki (A)/Ikkuna (W)/Edellinen (P)/Mittakaava (S)/Keskipiste (C)]`. Napsauta kahta kulmaa ikkunalle. `E`, `A` tai Enter: koko piirustus.
- `P` (Edellinen, tai {{ui:Edellinen}} työkalurivillä) palaa edelliseen näkymään, enintään 10 näkymään välilehteä kohden; hiiren rullan sarja tai yksi panorointi lasketaan yhdeksi näkymäksi.
- Luku kuten `2`, `2x` tai `0.5x` (tai `S` ja sitten luku) zoomaa sisään tai ulos sen kertoimen verran näytön keskikohdan ympärillä.
- `C` kysyy `Määritä keskipiste` ja `Anna korkeus tai suurennus (nX)`.

### PDFATTACH, PDFIMPORT ja PDF-komennot

Lyhenteet: `PDFATT` {{cmd:PDFATTACH}}-komennolle, `PDFIM` {{cmd:PDFIMPORT}}-komennolle. {{cmd:PDFATTACH}} asettaa PDF-sivun piirustuksen alle (tiedosto, sivu, lisäyspiste, mittakaava, kierto); {{cmd:PDFIMPORT}} muuttaa sivun viivat, käyrät, täytöt ja tekstin piirustuskohteiksi tasoille, jotka on nimetty PDF:n mukaan, todellisessa koossa, kirjoitetussa mittakaavassa tai skaalattuna kahdesta pisteestä ja todellisesta etäisyydestä. {{cmd:PDFCLIP}} rajaa alustan, {{cmd:PDFADJUST}} asettaa himmennyksen, kontrastin ja mustavalkoisuuden tai kytkee sen pois, {{cmd:PDFLAYERS}} kytkee PDF:n omat tasot päälle tai pois, ja {{cmd:PDF}} antaa CadCraftille uudelleen tiedostot, joita piirustuksen alustat käyttävät. Katso [PDF-alustat](topic:pdf-underlay).

### AUTOCOMPLETE

Lyhenne: `AUTOC`. Piirustuksen automaattitäydennys: kun mitään komentoa ei suoriteta, harmaa haamu näyttää, mitä piirustuksesi omat kuviot sanovat seuraavaksi. {{cmd:AUTOCOMPLETE}} kytkee sen `On` tai `Off` (myös Asetukset › CadCraft) tai `Show` näyttää, mitä se ehdottaisi nyt. **Tab** piirtää haamun yhdeksi kumoamisaskeleeksi, **Esc** hylkää sen, kunnes piirustus muuttuu. Se löytää kolme asiaa uusimmista kohteista: seuraavan kopion jostakin, mikä on piirretty kahdesti tai useammin tasaisin välein (tolpat, pilarit, portaan nousu ja askel), seuraavat portaan askeleet murtoviivana, ja puuttuvan huoneen tai seinäketjun sivun. {{cmd:LINE}}- tai {{cmd:PLINE}}-komennon keskellä haamu on **seuraava piste**: portaan seuraava askel (nousu, askel, nousu…), suorakulmion neljäs kulma, piste, joka sen sulkee, tai yksi lisää yhtä suurta askelta. Vie kohdistin lähelle sitä ja paina **Tab** kuin olisit napsauttanut siinä; jatka tai paina Enter. Lasketaan tässä tietokoneessa säännöillä, ilman mallia.

### AUTOSHEET

Lyhenne: `ASH`. Arkit, jotka asettelevat itsensä. {{cmd:AUTOSHEET}} ottaa piirustuksen osat (nimetyt näkymäsi, tai mallin erilliset osat, tai koko mallin), valitsee paperikoon (tai antamasi), antaa jokaiselle osalle vakiomittakaavan (yksi kaikille tai suurin, jonka kukin voi ottaa) ja sijoittaa näkymät riveihin uusille arkeille nimilohkon kanssa, ja jokaisen alle tekstin (nimi ja mittakaava). Se, mikä ei mahdu yhdelle arkille, saa oman arkkinsa. Yksi kumoamisaskel. Lasketaan tässä tietokoneessa säännöillä, ilman mallia.

### PHOTOSKETCH

Lyhenne: `PSK`. Luonnosvalokuva piirustukseksi. Valitse valokuva (JPEG, PNG tai TIFF) käsinpiirroksesta paperiarkilla. {{cmd:PHOTOSKETCH}} löytää arkin neljä kulmaa, oikaisee perspektiivin, ottaa paperikoon, jonka nimeät (`Paper`, tai lähin vakio), ja luonnoksen `Scale`-mittakaavan (1 : n), ja jäljittää kynäviivat viivoiksi, kaariksi ja ympyröiksi, yhden tason kullekin kynävärille (musta, punainen, sininen, vihreä). Jos se ei löydä paperin reunaa, se ottaa koko valokuvan arkiksi ja kertoo siitä. Kirjaimia ei jäljitetä. Yksi kumoamisaskel. Tehty tässä tietokoneessa klassisella kuvankäsittelyllä, ilman mallia, eikä mitään lähetetä minnekään. Katso myös skannattujen piirustusten komennot.

### AUTODIM

Lyhenne: `ADIM`. Automaattinen mitoitus säännöillä. {{cmd:AUTODIM}} mitoittaa valitut kohteet (tai koko piirustuksen) niiden tasaisista ja pystysuorista reunoista: mittaketjun valittujen sivujen varrella (`Sivut`), yhden kokonaismitan sen ulkopuolelle, jokaisen aukon leveyden (kahden samalla suoralla olevan seinäviivan välinen väli), halkaisijan jokaiselle reikäkoolle ja `Grid`-vaihtoehdolla ruudukkoviivojen välin. Mitta, joka on jo olemassa, ei tehdä uudelleen. Yksi kumoamisaskel. Lasketaan tässä tietokoneessa säännöillä, ilman mallia.

### GRIDMOVE

Lyhenne: `GM`. Ruudukkoviivan siirtäminen vie joukon mukanaan. {{cmd:GRIDMOVE}} siirtää ruudukkoviivaa (viivaa tasolla, jonka nimi sanoo grid tai axis) ja sen mukana roikkuvia kohteita: seinät, joilla on päät viivalla, venyvät sen mukana, viivaa pitkin kulkevat seinät liikkuvat kokonaisina, pilarit (lohkoviittaukset ja ympyrät viivalla), sen kupla ja tunniste liikkuvat, ja mitat, joiden pisteet ovat viivalla, mittaavat uuden välin. Anna kaksi pistettä (vain viivan poikki kulkeva osa lasketaan) tai `Distance` (`Etäisyys`). Yksi kumoamisaskel palauttaa kaiken. Tehty säännöillä tässä tietokoneessa.

### DETAILS

Lyhenne: `DET`. Detaljit, jotka löytävät sinut. {{cmd:DETAILS}} pitää yrityksesi omat detaljit: `Add` (Lisää) laittaa tämän piirustuksen lohkon luetteloon, `List` ja `Remove` (Poista) hallitsevat sitä, ja `Find` (Etsi) järjestää ne sen mukaan, mitä on valittuna (tai mitä piirsit viimeksi) tasojen, lohkonimien, viivoituskuvioiden ja muistiinpanojen sanoin verrattuna jokaisen detaljin nimeen ja muistiinpanoihin, joten ikkunan yläosa löytää sinun ikkunalistasi. Valitse numero ja piste sijoittaaksesi sen. Kun `Hint` (Vihje) on päällä (myös Asetukset › CadCraft), yhden detaljin sanoihin osuvan valinnan valitseminen laittaa yhden rivin tilariville. Luettelo säilyy tässä selaimessa, tässä tietokoneessa, ja se on luettelo, josta haetaan. `Share` (Jaa) laittaa sen myös Asiakirjat-kansioosi (`.cadcraft/firm-details.json`, jokaisen lohkon piirustuksen kanssa): `Pull` lisää sen, mitä tiimilläsi on ja sinulta puuttuu, `Push` lisää sen, mitä sinulla on ja heiltä puuttuu, `Both` tekee molemmat, eikä mitään koskaan poisteta kummaltakaan puolelta. Avaa ensin Asiakirjat-kansio ({{cmd:DOCUMENTS}}); kun kansio on Team Cloud Plan -kansio, koko tiimi jakaa yhden luettelon. Detaljikohde Kirjasto-paneelissa on painike **Lisää yrityksen detaljeihin**, joka laittaa sen samaan luetteloon. Lasketaan tässä tietokoneessa sanoin, ilman mallia.

### SKETCHFIX

Lyhenne: `SKF`. Kynäluonnokset tarkaksi geometriaksi. Paina ja vedä yksi vapaa vetäisy kerrallaan (kynällä, hiirellä tai sormella), sitten Enter. Jokainen vetäisy luetaan viivana, ympyränä, kaarena, suorakulmiona tai murtoviivana: lähes vaakasuorat ja pystysuorat viivat tehdään täsmälleen vaakasuoriksi ja pystysuoriksi, suljettu pyöreä vetäisy muuttuu ympyräksi, suljettu vetäisy neljällä suorakulmaisella kulmalla suorakulmioksi, ja vetäisyjen päät vedetään yhteen ja piirustukseen jo olemassa oleviin päihin. Yksi kumoamisaskel. Lasketaan tässä tietokoneessa säännöillä, ilman mallia.

### SCANATTACH ja skannattujen piirustusten komennot

Lyhenteet: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}}:lla ei ole lyhennettä. Ne toimivat kuvalla, yksi kumoamisaskel kukin. {{cmd:SCANATTACH}} lisää PNG-, JPEG- tai TIFF-kuvan (yksi sivu tai kaikki) tai PDF-sivun, joka on kuva. {{cmd:SCANSCALE}} skaalaa arkin kahdesta valitusta pisteestä ja todellisesta etäisyydestä. {{cmd:SCANALIGN}} siirtää ja kääntää sen kahdelle pisteelle (`Scale the sheet to fit`: Kyllä/Ei). {{cmd:SCANDESKEW}} näyttää arkin pitkien viivojen kulman ja kääntää arkin, kun hyväksyt `Accept` tai annat `Value`. {{cmd:SCANCLEAN}} tekee siitä mustavalkoisen (`Threshold` Auto/Adaptive/Level, `Specks`) ja `Run`. {{cmd:SCANCROP}} säilyttää ikkunan. {{cmd:SCANERASE}} poistaa `Rectangle`-, `Polygon`- tai `Lasso`-alueen. {{cmd:SCANTRACE}} jäljittää viivat ja kaaret uudelle tasolle (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) ja kertoo, mitä löysi ja mitä jätti rasteriksi. {{cmd:SCANINFO}} luettelee alkuperäisen tiedoston ja vaiheet. {{cmd:RASTERSNAP}} kytkee tartunnan skannattujen arkkien viivoihin päälle tai pois. Katso aihe Skannatut piirustukset ja jäljitys.

### REGEN ja REGENALL

Lyhenteet: `RE` {{cmd:REGEN}}-komennolle, `REA` {{cmd:REGENALL}}-komennolle. Rakentaa uudelleen näytölle piirretyn kuvan piirustuksesta: {{cmd:REGEN}} katsomasi välilehden (arkilla myös mallin, jota sen näkymäruudut näyttävät), {{cmd:REGENALL}} jokaisen välilehden, jokaisen jaetun näytön ruudun ja jokaisen avoimen piirustuksen. Käytä niitä, kun kuva näyttää vanhentuneelta skriptatun tai hyvin suuren muutoksen jälkeen, tai kun avustaja muokkasi piirustusta; piirustusta itseään ei kosketa, joten kumottavaa ei ole.

### NAMEDVIEW

Lyhenteet: `NV`, `VIEWS`. `Anna vaihtoehto [?/Palauta (R)/Tallenna (S)/Ikkuna (W)/Poista (D)] <Palauta>`, sitten näkymän nimi. `S` tallentaa näytöllä olevan näkymän, `W` tallentaa ikkunan, jonka valitset, `R` näyttää tallennetun näkymän, `D` poistaa yhden, `?` luettelee tämän välilehden näkymät. Tallentaminen olemassa olevan nimen alle korvaa sen; jokainen muutos on yksi kumoamisaskel. Näkymät kuuluvat välilehteen, jolla ne tallennettiin. DWG- ja DXF-tiedostot säilyttävät ne (VIEW-taulukko); arkin näkymät palaavat ensimmäiselle arkille, koska tiedosto ei kerro, mille arkille ne kuuluvat.

### UNDO ja REDO

Lyhenne: `U` {{cmd:UNDO}}-komennolle; {{cmd:REDO}}:lla ei ole lyhennettä. Myös {{key:Mod+Z}} ja {{key:Mod+Y}}.

### LAYER

Lyhenne: `LA`. Siirtyy {{ui:Tasot}}-paneeliin.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Anna uusien kohteiden viivatyyppi` — `ByLayer` (Tason mukaan), `ByBlock` (Lohkon mukaan) tai nimi (`?` luettelee ne: Continuous, piirustuksen omat ja DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE kokoineen `2` (puoli) ja `X2` (kaksinkertainen)). {{cmd:LWEIGHT}} (`LW`): uusien kohteiden viivanpaksuus mm-yksikössä, tai `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): piirustuksen viivatyypin mittakaava (kumottavissa). {{cmd:LWDISPLAY}} (`LWT`): `Näytä viivanpaksuudet [ON/OFF]` — sama kuin tilarivin {{ui:LWT}}-painike. Katso [Viivanpaksuudet ja viivatyypit](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Anna nimettävän kohteen tyyppi [Taso (LA)/Lohko (B)]`, `Anna vanha nimi`, sitten uusi nimi; kohteet tai viittaukset seuraavat. {{cmd:LAYMRG}}: `Valitse kohde yhdistettävällä tasolla tai [Nimi (N)]` kunnes {{key:Enter}}, sitten `Valitse kohde kohdetasolla tai [Nimi (N)]` ja `Y`. {{cmd:LAYDEL}}: `Valitse kohde poistettavalla tasolla tai [Nimi (N)]`, sitten `Y`: taso ja jokainen sillä oleva kohde poistuvat (ei tasoa 0, DEFPOINTS tai nykyistä tasoa). Yksi kumoamisaskel kullekin. Katso [Järjestä piirustus tasoilla](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Tasot valitsemalla kohteita; myös {{ui:Tasot}}-paneelin {{ui:Työkalut}}-valikossa. {{cmd:LAYISO}}: `Valitse kohteet, joiden tasot eristetään`, sitten {{key:Enter}}: jokainen muu taso menee pois. {{cmd:LAYUNISO}} kytkee ne takaisin päälle. {{cmd:LAYOFF}} ja {{cmd:LAYFRZ}}: `Valitse kohde tasolla, joka sammutetaan` (tai jäädytetään), toistuen; `U` ottaa viimeisimmän takaisin, {{key:Enter}} lopettaa. {{cmd:LAYMCUR}}: `Valitse kohde, jonka taso tulee nykyiseksi`. {{cmd:LAYON}} kytkee kaikki tasot päälle, {{cmd:LAYTHW}} sulattaa kaikki tasot. Jokainen komento on yksi kumoamisaskel. Katso [Järjestä piirustus tasoilla](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} aloittaa tyhjän piirustuksen ja {{cmd:OPEN}} avaa DWG- tai DXF-tiedoston, kumpikin omalla välilehdellään piirustuksen päällä (käyttämätön uusi piirustus käytetään sen sijaan, että avattaisiin uusi välilehti). Välilehden sulkeminen tallentamattomin muutoksin kysyy ensin. Katso [Jaa näyttö](topic:split-screen).

{{cmd:SAVE}} (lyhenne `QSAVE`, myös {{key:Mod+S}}) lataa kopion piirustuksen muodossa: DWG, jos se avattiin DWG:stä, DXF, jos DXF:stä. Uusi piirustus käyttää muotoa, joka valittiin viimeksi kohdassa Tallenna nimellä tässä selaimessa, muuten DWG.

{{cmd:SAVEAS}} (myös {{key:Mod+Shift+S}}) avaa {{ui:Tallenna kopio nimellä}}-ikkunan: valitse {{ui:DWG}} (ja sen {{ui:Versio}}), {{ui:DXF R12}} tai {{ui:DXF 2000}}, ja sitten {{ui:Tallenna}}. Valinta pysyy tälle piirustukselle ja uusille piirustuksille tässä selaimessa.

{{cmd:DXFOUT}} lataa aina DXF R12 -kopion muuttamatta muotoa, jota {{cmd:SAVE}} käyttää.

Katso [Tiedostot: mitä avautuu, mitä tallentuu](topic:files#saving).

### TOUR

Lyhenne: `TUTORIAL`. Käynnistää kuuden askeleen ensimmäisen piirustuksen kierroksen uudelleen. Katso [Aloittaminen](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Lyhenne: `TBDOCK`. `Työkalurivin sijainti [Ylhäällä/Alhaalla/Vasemmalla/Oikealla]`. Katso [Asetukset](topic:settings#toolbar-position).

### COMMANDLINE

Lyhenne: `CMDLINE`. `Komentorivi [Kiinnitetty alareunaan/Kelluva/Yksi rivi/Näytettävät historiarivit/Komentohistoria (F2)]`: kiinnittää tai kelluttaa komentorivin, tekee siitä yhden rivin, kysyy kuinka monta historiariviä näytetään (0–12), tai avaa historian. Katso [Asetukset](topic:settings#command-line).

### TOPAREA

`Yläalue [Vakio/Kompakti]`: palkit piirustuksen yläpuolella ennallaan tai tiiviinä. Katso [Asetukset](topic:settings#top-area).

### POLARANG

`Anna napaseurannan askel asteina <90>`: askel, jolle {{ui:Napa}}-seuranta asettuu (enemmän kuin 0, enintään 180). Muistetaan tässä selaimessa.

### UNITS

Lyhenne: `UN`. Miten pituudet kirjoitetaan ja syötetään.

- `Anna pituuden muoto [Tieteellinen/Desimaali/Tekninen/Arkkitehtuuri/Murtoluku] <nykyinen>`
- Arkkitehtuuri ja Murtoluku: `Anna pienimmän näytettävän murtoluvun nimittäjä (1, 2, 4, 8, 16, 32, 64, 128 tai 256)`. Muut: `Anna desimaalien määrä (0–8)`.

Uudet mitat seuraavat tätä. Yksi kumoamisaskel. Sama kuin {{ui:Pituuden muoto}} ja {{ui:Tarkkuus}} kohdassa {{ui:Nykyiset asetukset}}; katso [Jalat ja tuumat](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Lyhenne: `GDS`. Näytä IC-asettelu (GDSII-virtatiedosto): laboratoriokokeilu, vain katseluun ja mittaamiseen.

- Tiedostonvalitsin ottaa `.gds`-tiedoston; kun ylimpiä soluja on useita, `Anna piirrettävä ylin solu`.
- Jokainen taso ja datatyyppi tulee piirustustasoksi (`GDS 1`, `GDS 2/5`), viittaukset ja matriisit sijoitetaan litteinä tiedoston käyttäjäyksikössä (yleensä mikrometreinä). Yksi kumoamisaskel. Mitään ei simuloida tai tarkisteta, eikä tiedostoa kirjoiteta takaisin.

### DIAGRAM

Lyhenteet: `TEXTDIAGRAM`, `T2D`. Kaavio tekstistä.

- Ruutu ottaa tekstin (tai yhden rivin, jossa lauseiden välissä on `;` komentoriviltä): Mermaid-vuokaavio, PlantUML-komponenttikaavio, D2 tai lähtö-kohde-luettelo.
- `Määritä kaavion vasen yläkulma`, sitten `Määritä tekstin korkeus`.

Lohkot ja liittimet ovat tavallisia kohteita tasolla `Diagram`, ja ne valitaan, kun komento päättyy. Yksi kumoamisaskel. Katso [Piirrä kaavio tekstistä](topic:text-to-diagram).

### OLELIST

Lyhenne: `OLES`. DWG-tiedoston sisältämät OLE-kohteet, joita CadCraft ei osaa sijoittaa itse.

- Luettelee jokaisen: numero, tyyppi, koko, tallennettiinko kuva.
- `Anna vaihtoehto [Sijoita (P)/Lopeta (X)] <Lopeta>`: Sijoita kysyy numeron, vasemman alakulman ja leveyden, ja piirtää kehyksen kuvan kanssa. Yksi kumoamisaskel; säilytettyä kohdetta ei muuteta. Katso [Kuvat](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Lyhenne: `SHX`. Omat SHX-fontit.

- `Anna SHX-fonttivaihtoehto [Kansio/Tiedostot/Luettelo/Poista/Käännä/Tyhjennä] <Luettelo>`

{{ui:Kansio}} lukee jokaisen `.shx`-tiedoston kansiosta (CadCraft Studio; uudelleen jokaisen käynnistyksen yhteydessä), {{ui:Tiedostot}} ottaa valitut tiedostot (selain), {{ui:Käännä}} asettaa yhden fontin kirjaimet viimeisestä ensimmäiseen. Tekstityylit, jotka nimeävät ladatun fontin, piirtyvät sillä. Katso [Piirrä tekstiä omilla SHX-fonteillasi](topic:shx-fonts).

### LIMITS

Kuinka suuri piirustuksen on tarkoitus olla.

- `Määritä vasen alakulma tai [ON/OFF] <nykyinen>`: piste, `ON` tai `OFF`.
- `Määritä oikea yläkulma <nykyinen>`.

Ruudukko täyttää rajat, {{cmd:ZOOM}} Kaikki näyttää ne, ja kun rajat ovat ON, rajojen ulkopuolinen piste hylätään (`**Outside limits`). Yksi kumoamisaskel; tallennetaan DWG- ja DXF-tiedostoihin. Katso [Aseta piirustuksen rajat](topic:drawing-limits).

### AUNITS

Lyhenne: `ANGUNITS`. Miten kulmat näytetään ja kirjoitetaan.

- `Anna kulman muoto [Desimaaliasteet/Asteet-minuutit-sekunnit/Maanmittarin suuntimat] <nykyinen>`
- `Anna desimaalien määrä (0–8)`, tai kahdelle muulle `Anna tarkkuus` (0 astetta, 2 minuuttia, 4 sekuntia, 5–8 desimaalia sekunnille).

Yksi kumoamisaskel; tallennetaan DWG- ja DXF-tiedostoihin. Sama kuin {{ui:Kulman muoto}} kohdassa {{ui:Nykyiset asetukset}}. Katso [Kirjoita ja näytä suuntimat ja kulmat](topic:bearings-and-angles).

### APPLOAD

Lyhenne: `AP`; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Lataa sovellus…}}. {{ui:Lataa sovelluksia}}-ikkuna: lataa `.lsp`-rutiineja ja `.dcl`-valintaikkunatiedostoja, poista ne, lataa uudelleen historiasta, ja käynnistysvalikko. Rutiinin `(defun c:NAME …)`-komennot toimivat kuten mikä tahansa muu. Katso [Lataa sovelluksia](topic:load-applications) ja [Aja LISP-rutiineja](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:Muokkaa aliaksia…}}) avaa aliastiedostosi (`ALIAS, *COMMAND` -rivit); {{ui:Tallenna}} ottaa sen käyttöön. {{cmd:REINIT}} ottaa sen uudelleen käyttöön. Katso [Muokkaa komentojen aliaksia](topic:command-aliases).

### OPTIONKEYS

Lyhenne: `OPTKEYS`; tai {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Valintakirjaimet}} › {{ui:Muokkaa…}}. Avaa valintakirjaimiesi tiedoston (`KOMENTO.VALINTA, KIRJAIMET` -rivit, kuten `ARRAY.PO, P`); {{ui:Tallenna}} ottaa sen käyttöön, ja {{cmd:REINIT}} ottaa sen uudelleen käyttöön. Katso [Anna komennon valinnoille omat kirjaimet](topic:option-letters).

### LISPEDIT

Lyhenne: `VLIDE`; tai {{ui:Näkymä}} › {{ui:Lisää}} › {{ui:LISP-editori}}. Avaa LISP-editorin, ikkunan joka pysyy auki piirustuksen vieressä.

- Teksti: rivinumerot, sulkumerkin pari kursorin kohdalla merkitty (punaisena, jos paria ei ole), {{key:Enter}} sisentää uuden rivin avaavan sulkumerkin alle, {{key:Tab}} kirjoittaa kaksi välilyöntiä, {{key:Esc}} poistuu tekstistä.
- {{ui:Lataa piirustukseen}} ({{key:Ctrl+Shift+Enter}}): lukee jokaisen muodon, kuten {{cmd:APPLOAD}} tiedoston kanssa, ja tekee sen `c:`-komennot. Tiedosto näkyy {{cmd:APPLOAD}}-komennon luettelossa.
- {{ui:Suorita valinta}} ({{key:Ctrl+Enter}}): suorittaa valitut muodot tai muodon, jossa kursori on.
- {{ui:Lopeta}}: lopettaa käynnissä olevan rutiinin.
- {{ui:Konsoli}}: mitä rutiini tulosti, ja jokainen virhe rivinsä kanssa; napsauta virhettä mennäksesi sinne. Teksti ajetaan yksi ylätason muoto kerrallaan, joten rivi on muodon, tai sen sisällä se rivi, joka kutsuu virheen nimeämää funktiota.
- {{ui:Uusi}}, {{ui:Avaa}}, {{ui:Tallenna}} ({{key:Ctrl+S}}): `.lsp`-tiedosto. Teksti säilyy myös tässä selaimessa, joten ikkunan sulkeminen ei häviä sitä.
- Tekstin vieressä: funktiot, jotka rutiini määrittelee, ne, joita se kutsuu eikä tämä LISP vielä tunne, ne, joita se kutsuu eikä ole määritelty siinä eikä sisäänrakennettu, sekä täydet luettelot siitä, mikä on sisäänrakennettu ja mikä ei.

Tekstiä, jossa on sulkumerkki, jota ei koskaan sulkeuduta, tai merkkijono, joka ei pääty, ei ajeta: rivi nimetään. Askel askeleelta -debuggeria, katkaisukohtia tai tarkkailu-ikkunaa ei ole. Katso [Aja LISP-rutiineja](topic:run-lisp).

### HELP

Lyhenne: `?`. Tulostaa jokaisen komennon, sen lyhenteet ja yhden rivin kuvauksen komentorivin historiaan. Se ei avaa tätä ohjetta: paina {{key:F1}} tai napsauta {{ui:Ohje}}-painiketta sitä varten.

## Valitse kohteet -kehote

Missä tahansa `Valitse kohteet` -kehotteessa: napsauta kohteita, piirrä ikkunoita (vasemmalta oikealle) ja leikkauksia (oikealta vasemmalle) kahdella napsautuksella, tai paina ja vedä lassoa ({{key:Space}} vedettäessä: ikkuna, leikkaus, aita), {{key:Shift}}+napsautus poistaa, ja {{key:Enter}} lopettaa. Voit myös kirjoittaa `ALL` (kaikki), `L` (viimeisin kohde), `P` (Edellinen: mitä viimeisin komento käytti), `F` (Aita: kohteet, joita pisteiden viiva ylittää; `U` ottaa pisteen takaisin), `W` (Ikkuna), `C` (Leikkaus), `R` (Poistotila: napsautukset ottavat kohteet pois; kehote lukee `Poista kohteet`) ja `A` (Lisää uudelleen). `?` luettelee ne. Niitä ei näytetä kehotteessa. {{key:Tab}} päällekkäisten kohteiden päällä korostaa seuraavan; napsauta valitaksesi sen. Katso [Valitse kohteet](topic:select-objects).

### ACCESS

Lyhenne: `AX`. Piirtäminen ilman näköä. {{cmd:ACCESS}} kytkee Access-tilan päälle tai pois (`On`, `Off`) ja kytkee tartuntaäänet (`Sound`) ja puhutut komennot (`Voice`); se kertoo ensin tilan. Access ollessa päällä jokainen komento ja tulos puhutaan ruudunlukijan kautta, ja piirustusalueella on näppäimistökohdistin. Ohjeen aihe ”Piirrä ilman näköä” kertoo näppäimet.

### DESCRIBE

Lyhenne: `DESC`. Kertoo, mitä piirustus sisältää: kuinka monta kohdetta, minkälaisia, kuinka isoja, kuinka monta tasoa, mikä on valittuna. Vain luku; ei muuta mitään.

### WHEREAMI

Lyhenne: `WHERE`. Kertoo, missä kohdistin on piirustuksen yksiköissä.

### NEARBY

Kertoo, mitä on lähellä kohdistinta, lähimmästä alkaen, kukin etäisyytensä ja puolensa kanssa.

### SAYSEL

Kertoo, mitä on valittuna, yksi lause kohdetta kohden (viivan pituus, päät ja kulma; ympyrän säde ja keskipiste; teksti kirjoitettuna).

### VOICE

Kytkee puhutut komennot päälle tai pois. Ne tunnistetaan tällä tietokoneella; missä selain ei voi tehdä sitä, ääni pysyy pois päältä, ellet valitse selaimen online-palvelua Asetuksista.

### TOUCHCROSSHAIR

Lyhenne: `TCX`. Siirretty ristikko sormella piirtämiseen, jotta sormenpää ei peitä valittua pistettä. Kun se on päällä, yksi sormi piirustuksella ei valitse: se liikuttaa ristikkoa, joka on sormen yläpuolella ja toiselle sivulle. Kohteen tartunnat ja seuranta seuraavat ristikkoa. Sormen nostaminen ei valitse mitään ja jättää ristikon paikalleen. Valitaksesi paina {{ui:Napsautus}}-painiketta piirustuksen nurkassa, tai napauta mihin tahansa piirustuksella toisella sormella. Pidä {{ui:Napsautus}} pohjassa liikuttaessasi toista sormea vetääksesi (valintaikkuna, lasso, kahva). Sormi, joka pidetään paikallaan, tai {{ui:Enter}}-painike on Enter. Kaksi sormea panoroi ja zoomaa kuten ennen. Lähellä alareunaa ja kaukaista reunaa ristikko kapenee sormea kohti, joten jokainen piirustuksen osa on tavoitettavissa. Kynä ja hiiri valitsevat aina suoraan.

{{cmd:TOUCHCROSSHAIR}} kertoo tilan ja kysyy `ON`, `OFF`, `Auto` (päällä vain, kun sormi on ainoa osoitin, joten se on pois tietokoneella, jossa on hiiri), `Distance` (kuinka kaukana ristikko on sormesta, 24–240 pikseliä) tai `Side` (`Left`: ylös ja vasemmalle oikealle kädelle; `Right` vasemmalle kädelle; painikkeet siirtyvät toiseen kulmaan). Samat valinnat ovat kohdassa Asetukset › CadCraft, ja kosketusnäytöllä varustetussa laitteessa tilarivillä on {{ui:Siirretty ristikko}}-kytkin. Valinnat säilyvät tässä selaimessa.

### WHOHAS

Kertoo, kuka on avannut piirustuksen. CadCraft Studiossa tietokoneella DWG- tai DXF-tiedoston avaaminen kirjoittaa sen viereen pienen lukkotiedoston (`Plan.dwg.cclock`: kuka, kuinka kauan, mikä versio), päivittää sen minuutin välein piirustuksen ollessa auki ja poistaa sen piirustuksen sulkeutuessa. Toisen henkilön avaaman piirustuksen avaaminen kertoo, kuka ja kuinka kauan, ja tarjoaa {{ui:Avaa lukutilassa}} (tallennus pyytää sitten uutta nimeä), {{ui:Avaa silti}} (toinen henkilö saa tiedon seuraavassa päivityksessään) tai {{ui:Peruuta}}. Toisen henkilön avaaman tiedoston tallentaminen kysyy ensin. Lukko, jota ei ole päivitetty viiteen minuuttiin, on vanhentunut: toinen kopio suljettiin tallentamatta, tai tietokone on unessa.

{{cmd:WHOHAS}} kysyy `Current` (avoin piirustus), `File` (valitse yksi), `FOlder` (valitse kansio: jokainen siinä oleva piirustus, joka on auki jossakin, luetellaan), `Path` (kirjoita koko polku) tai `Name` (nimi, jonka muut näkevät; tilisi nimi, kun olet kirjautunut). Studio voi käsitellä vain kansioita, jotka olet valinnut: piirustukselle, jota avattiin kansiosta, jota ei koskaan valittu, se kertoo kerran, ettei se voi merkitä piirustusta avoimeksi; `FOlder` valitsee kansion, ja lukot toimivat siellä siitä eteenpäin. Lukko on muistiinpano ihmisille, ei este: toinen ohjelma voi silti kirjoittaa tiedoston. Selaimessa kansioita ei ole, joten komento sanoo sen.

### OVERKILL

Poistaa kaksoiskohteet ja siistii päällekkäiset viivat ja kaaret piirustuksista, jotka saapuvat täynnä kaksoisviivoja. `Valitse siivottavat kohteet`, {{key:Enter}}, sitten {{key:Enter}} uudelleen siivotakseen näytettyjen asetusten mukaan, tai muuta yksi ensin:

- `Tolerance`: kuinka lähellä kahden koordinaatin on oltava, jotta ne lasketaan samoiksi (0.000001 alussa; 0 tarkoittaa täsmälleen samoja).
- `Ignore`: ominaisuudet, jotka voivat erota kahdella muuten samalla kohteella. Kirjoita nimi kytkeäksesi: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, tai `None` / `All`. {{key:Enter}} kun valmis.
- `Overlap`: päällä tai pois. Päällä: samalle suoralle osuvat päällekkäiset viivat muuttuvat yhdeksi viivaksi (viiva toisen sisällä poistetaan yksinkertaisesti), ja saman ympyrän päällekkäiset kaaret muuttuvat yhdeksi kaareksi; kaaret, jotka sulkevat täyden kierroksen, muuttuvat ympyräksi, ja ympyrällä oleva kaari poistetaan.
- `Ends`: päällä tai pois. Päällä: samalle suoralle osuvat viivat ja saman ympyrän kaaret, jotka koskettavat vain päästä päähän, muuttuvat yhdeksi kappaleeksi.

Jokainen kohdetyyppi tarkistetaan kaksoiskappaleiden varalta: kaksi kohdetta ovat kaksoiskappaleita, kun niiden geometria on sama toleranssin sisällä ja niiden taso, väri, viivatyyppi, viivatyypin mittakaava, viivanpaksuus, paksuus, läpinäkyvyys ja korkeus täsmäävät (vähennettynä ne, jotka jätät huomiotta). Viivat ja avoimet murtoviivat täsmäävät myös, kun ne piirretään toiseen suuntaan. Ensimmäinen kohde piirtojärjestyksessä jää ja säilyttää omat ominaisuutensa. Komento kertoo, kuinka monta kohdetta se tarkisti ja poisti: kaksoiskappaleet, yhdistetyt päällekkäiset palat ja päästä päähän liitetyt palat. Yksi {{cmd:UNDO}} palauttaa kaiken. Asetukset säilyvät, kunnes suljet piirustusikkunan.

Se jättää koskematta: lukittujen tasojen kohteet ja piilotetut kohteet. Se ei yhdistä viivoja, joilla on korkeus (Z) (täsmälleen samat kaksoiskappaleet niistä poistuvat silti), eikä se kosketa murtoviivan segmenttien sisäpuolta (niitä ei ohenneta), murtoviivan segmentille osuvaa viivaa eikä suljettua murtoviivaa, joka on piirretty toiseen suuntaan.

### DRAWORDER

Muuttaa, mitkä kohteet piirretään edessä. `Valitse kohteet uudelleenjärjestettäväksi`, {{key:Enter}}, sitten `Kohteiden yläpuolelle`, `Kohteiden alapuolelle`, `Edessä` tai `Takana` ({{key:Enter}} = `Takana`). `Kohteiden yläpuolelle` ja `Kohteiden alapuolelle` kysyvät viitekohteet: valinta menee heti niiden etummaisen eteen, tai takimmaisen taakse. Valitut kohteet säilyttävät keskenään oman järjestyksensä. Yksi kumoamisaskel. Järjestys tallennetaan piirustukseen DWG- ja DXF-tiedostoissa, jossa se on järjestys, jossa kohteet kirjoitetaan.

Näytöllä jokainen kohde piirretään piirustuksen järjestyksessä, kuten muut ohjelmat, jotka avaavat tiedoston, piirtävät sen: kiinteä viivoitus, leveä murtoviiva tai tekstimaski peittää takanaan olevat viivat ja tekstin, ja sen edessä oleva peittää sen. Kohdassa, jossa viiva ylittää tekstin, molemmat näkyvät. Kuvat ja liitetyt PDF-sivut pysyvät viivojen alla. Hyvin suuressa piirustuksessa, jossa täytöt ja viivat menevät päällekkäin ja vaihtelevat yli 256 kertaa, ensimmäiset 256 säilyttävät järjestyksensä ja loput piirtävät täyttönsä viivojen alle, jotta piirtäminen pysyy nopeana.

### TEXTTOFRONT

Tuo teksti, mitat ja johtoviivat kaiken muun eteen avoimessa avaruudessa: `Teksti`, `Mitat`, `Johtoviivat` tai `Kaikki` ({{key:Enter}} = `Kaikki`). Yksi kumoamisaskel. Kertoo, jos niitä ei ole, tai jos ne ovat jo edessä.

### HATCHTOBACK

Lähettää jokaisen avoimen avaruuden viivoituksen kaiken muun taakse, jotta täytöt eivät peitä viivoja ja tekstiä tallennetussa tiedostossa. Ei kysymyksiä. Yksi kumoamisaskel.

### ISOLATEOBJECTS

Lyhenne: `ISOLATE`. Näyttää vain valitut kohteet: kaikki muu avoimessa avaruudessa katoaa näkyvistä, kunnes {{cmd:UNISOLATEOBJECTS}}. Toisin kuin {{cmd:LAYISO}}, se toimii valitsemillesi kohteille riippumatta niiden tasoista, eikä se muuta tasoja. Piilotettuja kohteita ei piirretä, osoitin ei valitse niitä, tartu niihin, zoomaa niihin tai tulosta niitä, ja komennot, jotka ottavat `ALL`, ohittavat ne. Mitä piirrät kohteiden ollessa eristettyinä, näkyy tavalliseen tapaan.

Tämä on vain tätä istuntoa varten: mitään siitä ei tallenneta piirustukseen, se ei ole kumottava askel, ja piirustuksen avaaminen uudelleen näyttää kaiken. Kun kohteet on piilotettu, tilarivillä on painike niiden määrällä; napsauta sitä näyttääksesi ne uudelleen.

### HIDEOBJECTS

Piilottaa valitut kohteet, kunnes {{cmd:UNISOLATEOBJECTS}}. Samat säännöt kuin {{cmd:ISOLATEOBJECTS}}-komennossa: vain tämä istunto, ei tallennu, ei kumottava askel.

### UNISOLATEOBJECTS

Lyhenteet: `UNISOLATE`, `UNHIDE`. Näyttää uudelleen jokaisen kohteen, jonka {{cmd:ISOLATEOBJECTS}} tai {{cmd:HIDEOBJECTS}} piilotti, ja kertoo kuinka monta palasi.

### LAYLOCKFADE

Asettaa, miltä lukittujen tasojen kohteet näyttävät ja tavoittaako napsautus ne. Se kertoo nykyisen tilan ja ottaa:

- luvun 0–90: himmennyksen määrä prosentteina (alussa 50). 0 kytkee himmennyksen pois.
- `ON` tai `OFF`: himmennys päälle tai pois, määrä säilyy.
- `Pick`, sitten `Yes` tai `No`: saako napsautus valita lukittujen tasojen kohteita, kun mitään komentoa ei suoriteta? `No` (oletus): niitä ei voi valita lainkaan. `Yes`: napsautus tai ikkuna valitsee ne, jotta {{ui:Ominaisuudet}} voi näyttää ne; niitä ei silti voi muuttaa, eikä komennon oma `Valitse kohteet` ota niitä koskaan.

Tartunnat löytävät lukittujen tasojen kohteet kummassakin tapauksessa. Tulosteita ei koskaan himmennetä. Molemmat asetukset ovat sinun, eivät piirustuksen, ja ne ovat myös kohdassa {{ui:Asetukset}} kohdassa {{ui:Lukitut tasot}}.

### BURST

Räjäyttää lohkoviittaukset ja säilyttää sen, mitä niiden attribuutit sanovat. `Valitse räjäytettävät lohkoviittaukset`, {{key:Enter}}: jokainen viittaus korvataan lohkon kohteilla, ja jokaisen näkyvän attribuutin arvo muuttuu tavalliseksi tekstiksi sen omalle tasolle (taso 0:lla oleva attribuutti päätyy viittauksen tasolle, kuten lohkon muut kohteet tasolla 0). Näkymättömät attribuutit pudotetaan. Lohko lohkon sisällä pysyy lohkoviittauksena. Yksi kumoamisaskel; se kertoo, kuinka monta viittausta räjäytettiin ja kuinka monta attribuutin arvoa muutettiin tekstiksi.

Se hylkää linkitetyn piirustuksen nimeltä (sido se ensin, tai kopioi siitä {{cmd:NCOPY}}-komennolla), ja jättää muut valitut kohteet rauhaan. Lohkoviittauksille {{cmd:EXPLODE}} antaa samat kohteet; {{cmd:BURST}} ottaa vain lohkoviittaukset ja laskee attribuuttitekstin.

### TXT2MTXT

Lyhenne: `T2M`. Liittää yhden rivin tekstit yhdeksi kappaleen tekstiksi. `Valitse liitettävät yhden rivin tekstit`, {{key:Enter}}, sitten `Kappale` (rivit yhdistyvät ja rivittyvät leveimmän rivin leveyteen) tai `Rivit` (jokainen teksti säilyy omana rivinään); {{key:Enter}} ottaa viimeksi käytetyn. Rivit järjestetään ylhäältä alas, sitten vasemmalta oikealle ylimmän tekstin suunnan mukaan. Kappale riippuu ylimmän tekstin vasemmasta yläkulmasta ja ottaa sen korkeuden, kierron, tyylin, tason ja värin. Yksi kumoamisaskel.

Kappaleteksti, joka on jo kappaleteksti, tyhjä teksti ja muut valinnan kohteet jätetään rauhaan, ja komento kertoo, kuinka monta.

### NCOPY

Kopioi kohteita lohkoviittauksesta tai linkitetystä piirustuksesta piirustukseen räjäyttämättä mitään. `Valitse kohde lohkoviittauksen tai linkitetyn piirustuksen sisältä`: lähin kohde napsautukseen kopioidaan siihen, missä se näkyy, sillä on syvyyttä kuinka monta lohkoa tahansa; valitse lisää ja paina sitten {{key:Enter}}. Seuraavaksi `Perustapiste kopioiden siirtämiseen`: {{key:Enter}} jättää ne paikalleen, tai anna perustapiste ja toinen piste. Koko komento on yksi kumoamisaskel.

Kopio ottaa tason, jolla se näkyy: lohkon sisällä tasolla 0 oleva kohde päätyy viittauksen tasolle, jossa se oli, ja ByBlock-väri muuttuu viittauksen väriksi. Linkitetystä piirustuksesta taso `Plan|Walls` muuttuu nimeksi `Plan$0$Walls` (linkin antama nimisidonta), ja se tehdään linkitetyn tason värillä, viivatyypillä ja viivanpaksuudella. Attribuutin arvo kopioidaan tekstinä. Lukittujen tasojen lohkoviittauksia ei voi valita.

### FLATTEN

Asettaa valittujen kohteiden korkeuden (Z) ja paksuuden 0:ksi. `Valitse litistettävät kohteet`, {{key:Enter}}. Se litistää myös kohteet niiden lohkomäärityksissä, joita valinta käyttää (ja lohkot niiden sisällä), joten jokainen viittaus näihin lohkoihin muuttuu; linkitetyt piirustukset jätetään ennalleen. Yksi kumoamisaskel; se kertoo, kuinka monta kohdetta muuttui, ja sanoo, jos yhdelläkään ei ollut korkeutta tai paksuutta.

CadCraft säilyttää kolmannesta ulottuvuudesta 2D-piirustuksessa seuraavaa: korkeuden ympyröille, kaarille, ellipseille, pisteille, tekstille, lohkoviittauksille, viivoituksille, johtoviivoille ja murtoviivoille (niiden korkeus), korkeuden jokaisessa viivan päässä sekä paksuuden viivoille, ympyröille, kaarille, murtoviivoille, pisteille ja tekstille, sellaisena kuin tiedosto ne piti. {{cmd:FLATTEN}} tyhjentää juuri nämä. Se ei kosketa 3D-mallia 3D-välilehdellä, 3D-pintoja tai kappaleita, eikä kohdetta, joka piirrettiin kallistettuun tasoon: se tuotiin piirustuksen tasoon jo tiedoston avautuessa.

### BREAKLINE

Piirtää viivan katkaisusymbolilla näkymää varten, joka on katkaistu lyhyeksi. Se kertoo nykyisen koon ja jatkeen, sitten `Katkaisuviivan ensimmäinen piste` (tai `Size` / `Extension` muuttamaan ne ensin), `Toinen piste` ja `Katkaisusymbolin sijainti`: napsauta viivaa pitkin, tai {{key:Enter}} keskelle. Tulos on yksi murtoviiva nykyisellä tasolla: viiva, joka ulottuu jokaisen pisteen ohi jatkeen verran, ja Z-muotoinen viiva, joka on yhtä korkea kuin koko ja puolet niin pitkä.

`Size` ja `Extension` muistetaan asetuksinasi (koko alkaa kahdesta mitan tekstin korkeudesta kerrottuna mitoituksen mittakaavalla; jatke puolella koosta). {{key:Enter}} toistaa komennon.

### AUDIT

Tarkistaa avoimen piirustuksen vaurioiden varalta ja korjaa ne. {{cmd:AUDIT}} katsoo jokaista kohdetta mallissa, arkeilla ja lohkojen sisällä, ja tasotaulukkoa, ja luettelee löydökset lajeittain:

- lukuja, jotka eivät ole äärellisiä tai ovat järjettömän suuria;
- kohteita ilman kokoa: viiva ilman pituutta, ympyrä ilman sädettä, murtoviiva yhdellä kohdalla, teksti ilman kirjaimia tai korkeutta, lohkoviittaus nollamittakaavalla;
- kohteita tasolla, jota piirustuksessa ei ole; viittauksia lohkoon, jota ei ole; teksti- ja mitoitustyylien nimiä sekä viivatyyppien nimiä, joita piirustuksessa ei ole;
- lohkoja, jotka sisältävät itsensä suoraan tai muiden lohkojen kautta;
- kohteita, jotka jakavat tunnuksen, avaimen tai tiedostokahvan;
- mittoja ilman pisteitä, joista ne mitataan, ja viivoituksia, joiden raja ei ole suljettu ääriviiva.

Sitten se kysyy `Korjataanko ne? [Kyllä/Ei]`. `Ei` ei muuta mitään. `Kyllä` korjaa kaiken yhdellä kumoamisaskeleella: sellainen, jota ei voi piirtää, poistetaan (käyttökelvottomat luvut, ei kokoa, puuttuva lohko, rikkinäinen mitta, viivoitus ilman käyttökelpoista rajaa, viittaus, joka sulkee lohkojen kehän); puuttuva taso luodaan; tuntemattomat tyyli- ja viivatyyppinimet palautetaan oletuksiin; jaettu avain korvataan. Se tulostaa, kuinka monta kohdetta poistettiin ja kuinka monta korjattiin. Samat löydökset näkyvät Ongelmat-paneelissa, kukin omalla {{ui:Korjaa}}-painikkeellaan.

Se ei hylkää mitään, mutta tarkistaa vain sen, minkä CadCraft itse piirtää: muille ohjelmille säilytettyä dataa (3D-kappaleet, OLE-kohteet) ei avata.

### RECOVER

Avaa vioittuneen DXF- tai DWG-tiedoston. {{cmd:RECOVER}} kysyy tiedoston, lukee sen, mitä voidaan lukea, kieltäytymisen sijaan, luettelee, mitä se ohitti tai oletti, ja tarkistaa ja korjaa piirustuksen kuten {{cmd:AUDIT}} tekee vastauksella `Kyllä`.

- DXF: rivit, jotka eivät ole osa koodi- ja arvoparia, ohitetaan, kunnes parit ovat jälleen linjassa; osio ilman loppua suljetaan; tiedosto, joka on katkennut, luetaan katkeamaan asti; binaarinen DXF, joka on katkennut, luetaan viimeiseen kokonaiseen arvoon asti. Kun osio, lohko tai kohde ei vieläkään ole luettavissa, se jätetään pois ja nimetään, ja luku jatkuu sen ohi.
- DWG: kohteet, jotka eivät läpäise tarkistuksiaan tai joita ei voi purkaa, jätetään pois, ja kadonnut kohdeluettelo rakennetaan uudelleen kulkemalla kohteiden data läpi.

Tiedosto levyllä ei muutu. Palautettu piirustus avautuu tallentamattomana: tallenna se uudella nimellä. Tiedosto, josta ei voi lukea yhtään mitään, hylätään syyn kanssa.

### LEGACYTEXT

Muuntaa vanhoilla 8-bittisillä vietnamilaisilla fonteilla kirjoitetun tekstin Unicodeksi. Lyhyet nimet `TEXTTOUNICODE` ja `VNTEXT`.

Vanhemmissa vietnamilaisissa piirustuksissa teksti on länsimaisina merkkeinä, joista vain fontti tekee vietnamia: TCVN3-teksti ABC-fonteissa (`.VnTime`, `.VnArial` ja isoilla kirjaimilla kirjoitetut fontit, joiden nimet päättyvät `H`:hen), ja VNI-teksti VNI-fonteissa (`VNI-Times`). CadCraft näyttää tällaisen tekstin oikein heti, kun piirustus on auki, sen tekstityylin, kohteen tai kappaletekstin sisällä olevan jakson fontin mukaan; tiedosto säilyttää yhä vanhat merkit.

{{cmd:LEGACYTEXT}} kertoo, kuinka monta tekstiä se löysi kussakin koodauksessa, ja kysyy `Muunnetaanko … Unicodeksi?`. `Kyllä` kirjoittaa jokaisen uudelleen (malli, arkit, lohkot, attribuuttiarvot ja -määritykset) ja antaa tekstityyleille Unicode-fontin (Times New Roman, Arial tai Courier New vanhan fontin lajin mukaan), yhdellä kumoamisaskeleella. Kappaletekstin muotoilu säilyy.

Kun mikään teksti ei käytä tunnettua fonttia (tyyli, joka menetti fonttinimensä), se kysyy `Lue valitut tekstit muodossa [Tcvn3/Vni/Ei mitään]`: valitse koodaus ja valitse tekstit. Teksti, joka on jo Unicodea, jätetään rauhaan. Mitan tekstin korvaukset ja monijohtoviitteen tekstit eivät muutu.
