---
title: Mallinnus 3D-näkymässä
summary: Näe piirustus 3D-välilehdellä ja tee siitä yksinkertaisia kiintokappaleita: pursota (kapenevana tai polkua pitkin), pyöräytä, työnnä ja vedä pintoja, tee laatikoita, sylintereitä ja kiiloja, yhdistä, vähennä ja leikkaa niitä sekä siirrä, kopioi, kierrä ja poista ne. Sijoita niistä litteitä 2D-näkymiä arkille.
keywords: 3d, kolmiulotteinen, kiintokappale, kiintokappaleet, 3dsolid, alue, kappale, acis, sat, sab, muiden ohjelmien kiintokappaleet, avaa 3D-piirustus, pursota, ext, pyöräytä, rev, pyyhkäise, vetokulma, polku, presspull, työnnä vedä, laatikko, sylinteri, cyl, kiila, 3dorbit, kiertäminen, näkymä, vscurrent, visuaalinen tyyli, varjostettu, piilotetut viivat, rautalanka, röntgen, xray, iso, perspektiivi, yhdensuuntainen, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, näkymäkuutio, yhdistä, uni, vähennä, su, leikkaa, in, boolean, yhdistä kiintokappaleet, viewbase, flatshot, litteä näkymä, 2D-näkymä, piirustusnäkymä, edestä-näkymä, päältä-näkymä, sivunäkymä, piilotetut viivat
from: 13060e71
---

## Mitä teet

Tästä 1000 × 600 huoneen pohjapiirroksesta pursotetaan 400 korkea lohko, yksi pinta vedetään ylös ja vierelle tehdään sylinteri. Lopuksi malli tallennetaan piirustuksen mukana ja viedään 3D-katselijaan tai tulostimelle.

{{ui:3D}}-välilehti on piirustuksen alla {{ui:Malli}}-välilehden vieressä. Se näyttää mallitilan piirustuksen maassa makaavana tasojen väreissä (pois päältä tai jäädytetyt tasot pysyvät piilossa) ja tekemäsi kiintokappaleet. Ensimmäisellä avauskerralla 3D-näkymä latautuu; sen jälkeen vaihto tapahtuu heti.

## Pursota muoto

1. Kirjoita {{ui:Malli}}-välilehdellä `REC` ja paina {{key:Enter}}. Kirjoita `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Napsauta {{ui:3D}}-välilehteä. Työkalurivillä näkyy {{ui:3D}}-ryhmä piirustusryhmien tilalla.
3. Napsauta {{ui:Pursota}} (tai kirjoita {{cmd:EXTRUDE}}, `EXT`). Napsauta suorakulmion sisältä ja paina {{key:Enter}}.
4. Kirjoita `400` ja paina {{key:Enter}}. Historia kertoo ”Pursotettu 1 kiintokappale, korkeus 400” tilavuuksineen.

Suljetut monirivit (kaaret mukaan lukien), suorakulmiot, monikulmiot, ympyrät ja ellipsit pursotetaan. Viivoja ja avoimia monirivejä ei pursoteta, ja historia kertoo syyn. Voit myös valita muodot ensin {{ui:Malli}}-välilehdellä ja kirjoittaa `EXTRUDE` siellä. Korkeuden kirjoittamisen sijaan voit napsauttaa sen: ääriviiva seuraa kursoria ylös ja alas. Negatiivinen korkeus menee alaspäin. Kirjoita `D` korkeuskehotteessa poistaaksesi 2D-muodot pursotuksen jälkeen (`D` uudelleen säilyttää ne).

Korkeuskehotteessa `T` (Vetokulma) pyytää kulman asteina: sivut kallistuvat sen verran sisäänpäin, että yläpinta on pienempi (negatiivinen kulma tekee siitä suuremman). Muodolle liian jyrkkä kulma hylätään. `P` (Polku) pyyhkäisee muodot polkua pitkin (ks. alla).

## Pyöräytä ja pyyhkäise

- {{cmd:REVOLVE}} (`REV`, tai {{ui:Lisää}} › {{ui:Pyöräytä akselin ympäri}}): valitse suljetut muodot, paina {{key:Enter}} ja napsauta akselin kahta päätä (tai kirjoita `X` tai `Y` piirustuksen akselille, joka kulkee pisteen 0,0 kautta). Kirjoita sitten kulma tai paina {{key:Enter}} täyteen kierrokseen. Muoto kiertyy akselin ympäri ja nousee maasta: piirrä puolikas maljakon ääriviivasta viivan viereen ja pyöräytä se viivan ympäri. Muoto saa koskettaa akselia mutta ei ylittää sitä. Täysi kierros on 48 askelta.
- {{cmd:SWEEP}} (tai {{ui:Lisää}} › {{ui:Pyyhkäise polkua pitkin}}, tai `P` EXTRUDEN korkeuskehotteessa): valitse suljetut muodot (profiili), paina {{key:Enter}} ja napsauta polku: viiva, monirivi, kaari, ympyrä tai ellipsi. Profiili asettuu polun poikki keskikohtansa polulle ja kulkee sitä pitkin. Kulmat viistetään, ja suljettu polku tekee renkaan. Pieni suorakulmio, joka pyyhkäistään huoneen ääriviivaa pitkin, tekee listan. Ympyrä monirivin varrella tekee putken.

## Työnnä ja vedä pinta

1. Napsauta {{ui:Työnnä/vedä}} (tai kirjoita {{cmd:PRESSPULL}}).
2. Napsauta lohkon yläpintaa.
3. Kirjoita `100` ja paina {{key:Enter}}, tai siirrä kursoria ja napsauta. Lohko on nyt 500 korkea.

## Laatikot, sylinterit ja kiilat

- {{cmd:BOX}}: napsauta tai kirjoita kaksi kulmaa ja sitten korkeus.
- {{cmd:CYLINDER}} (`CYL`): keskipiste, säde ja sitten korkeus. Sylinterit ja pursotetut ympyrät saavat 48 sivua, varjostettuna tasaisesti.
- {{cmd:WEDGE}} (`WE`): kaksi kulmaa ja korkeus. Ensimmäisessä kulmassa kiila on täyttä korkeutta, ja se viistää nollaan toisessa.

3D-välilehdellä napsautus osuu kursorin alla olevaan pintaan tai särmään, muuten maahan. Laatikko voi siis seistä toisen kiintokappaleen päällä.

## Siirrä, kopioi, kierrä ja poista kiintokappaleita

3D-välilehdellä napsautus valitsee kiintokappaleen. Vedä vasemmalta oikealle ikkunaa varten, oikealta vasemmalle leikkaavaa valintaa varten. Sitten:

- {{cmd:MOVE}}: napsauta peruspiste ja kohta, johon se menee, tai kirjoita `<100,0,0>` (tai `@100,0`) matka X-, Y- ja Z-suunnassa.
- {{cmd:COPY}}: sama, mutta alkuperäinen jää paikalleen.
- {{cmd:ROTATE}}: kirjoita kulma (kierto tapahtuu valinnan keskikohdan ympäri Z-akselin suhteen), tai napsauta keskipiste, aloituspiste ja kulma.
- {{cmd:ERASE}} tai {{key:Delete}}.

## Yhdistä, vähennä ja leikkaa kiintokappaleita

Avaa 3D-työkalurivin {{ui:Lisää}} tai kirjoita komento:

- {{cmd:UNION}} (`UNI`): valitse kiintokappaleet ja paina {{key:Enter}}: ne muuttuvat yhdeksi kiintokappaleeksi.
- {{cmd:SUBTRACT}} (`SU`): valitse kiintokappaleet, jotka jätetään, ja paina {{key:Enter}}. Valitse sitten kiintokappaleet, jotka vähennetään, ja paina {{key:Enter}}. Reikä lohkon läpi: piirrä sylinteri sen läpi ja vähennä sylinteri.
- {{cmd:INTERSECT}} (`IN`): valitse kiintokappaleet ja paina {{key:Enter}}: jäljelle jää vain se, mikä niillä kaikilla on yhteistä.

Historia kertoo tuloksen tilavuuden. Jokainen on yksi kumoamisvaihe. Ensimmäinen ajamasi komento lataa 3D-loogisten operaatioiden moottorin (noin 0.5 MB; se sisältyy {{ui:Tallenna offline-käyttöön}}-asetukseen). Vain suljettuja kiintokappaleita voi yhdistää. Kiintokappale, jolla on avoimia särmiä (toisen ohjelman irrallisista 3D-pinnoista), hylätään ja syy kerrotaan. Tulos on yksi kiintokappale. Kaarevat pinnat ovat edelleen litteistä fasetista koostuvia, kuten sylinterissä.

Kaksoisnapsauta kiintokappaletta muokataksesi sen pintoja ja särmiä erikseen. {{key:Esc}} sulkee muokkauksen. Jokainen 3D-muutos on yksi kumoamisvaihe samassa historiassa kuin piirustus: {{key:Mod+Z}} kumoaa viimeisen tekemäsi asian kummalta tahansa välilehdeltä.

## Litteät näkymät arkilla

1. Avaa arkkivälilehti (tai pysy {{ui:Malli}}-välilehdellä) ja kirjoita {{cmd:VIEWBASE}} (tai `FLATSHOT`).
2. Valitse näkymä: {{key:Enter}} edestä, tai `T` (päältä), `R` (oikealta), `L` (vasemmalta), `BA` (takaa), `BO` (alta), `I` (isometrinen).
3. {{key:Enter}} näyttää piilotetut viivat katkoviivoina; `H` jättää ne pois.
4. {{key:Enter}} ottaa mittakaavan, jonka CadCraft ehdottaa: arkilla suurimman vakiomittakaavan (kuten 1:20), jossa näkymä mahtuu alle puoleen paperista. Voit myös kirjoittaa mittakaavan: `1:50`, `2:1`.
5. Napsauta tai kirjoita, mihin näkymän keskipiste menee.

Näkymä on yksi lohkoviite, `VIEW-FRONT-1` ja niin edelleen. Näkyvät särmät ovat tasolla VIEW-VISIBLE (0.5 mm), piilotetut tasolla VIEW-HIDDEN (katkoviiva, 0.25 mm). Siirrä, mitoita ja tulosta näkymää kuten mitä tahansa piirustusta. Se on kuva kiintokappaleista siinä vaiheessa, kun loit sen. Kun muutat kiintokappaleita, poista näkymä ja aja {{cmd:VIEWBASE}} uudelleen. Useampia näkymiä varten aja komento kerran jokaiselle.

## Katselu ympärille

Vedä rullalla kiertääksesi, {{key:Shift}} + rullan vetäminen tai oikea painike panoroi, ja käännä rullaa zoomataksesi kursorin kohdalla. Kosketuslevyllä kaksi sormea kiertää ja nipistys zoomaa. Oikea napsautus ilman vetämistä on {{key:Enter}}, kuten muilla välilehdillä. 3DORBIT antaa vasemman painikkeen kiertää, kunnes painat {{key:Enter}} tai {{key:Esc}}.

- {{ui:Näkymät}} (tai {{cmd:VIEW}}): Isometrinen, Päältä, Alta, Edestä, Takaa, Vasemmalta, Oikealta, Perspektiivi tai Yhdensuuntainen, sekä Zoomaa kaikkeen.
- {{ui:Tyyli}} (tai {{cmd:VSCURRENT}}, `VS`): Varjostettu, Varjostettu reunoilla, Piilotetut viivat, Rautalanka tai Röntgen.

Napsautettavat pisteet tarttuvat kiintokappaleisiin (kulmat, särmät, pinnat) ja maassa olevaan 2D-piirustukseen: sen viivojen ja kaarien päihin ja keskikohtiin sekä niiden pisteisiin. 2D-viivoja ei valita koskaan 3D-välilehdellä. Kun komento pyytää 2D-kohteita (EXTRUDE, REVOLVE, SWEEP), napsautus valitsee yhden. Vasemmalta oikealle vedettäessä otetaan kaikki, mikä on kokonaan ikkunan sisällä. Oikealta vasemmalle vedettäessä otetaan kaikki, minkä se leikkaa, kuten {{ui:Malli}}-välilehdellä.

3D-välilehden oikeaan yläkulmaan on sijoitettu näkymäkuutio. Napsauta pintaa, särmää tai kulmaa katsoaksesi sieltä, vedä sitä kiertääksesi, ja talo-painike palauttaa isometrisen näkymän. Tämä on asetuksen {{ui:Kulmaosoitin}} arvo {{ui:Automaattinen}} ([CadCraft-asetukset](topic:settings)). Kun asetus on {{ui:Näkymäkuutio}}, myös {{ui:Malli}}-välilehdellä näkyy kuutio, joka katsoo ylhäältä. Muun sivun napsauttaminen avaa 3D-välilehden katsomaan sieltä. Kun asetus on {{ui:Akselikuvake}}, molemmilla välilehdillä näkyy akselimerkki.

## Muiden ohjelmien kiintokappaleet

Toisen ohjelman piirustus voi sisältää 3D-kiintokappaleita, alueita ja kappaleita (3DSOLID, REGION, BODY: toinen ohjelma säilyttää niiden muodon ACIS-tietona). CadCraft näyttää mallitilan kiintokappaleet 3D-välilehdellä niiden tason värillä ja omilla särmillään, kun avaat välilehden ensimmäisen kerran. Komentorivi kertoo sen jälkeen, montako piirrettiin.

- Ne näkyvät sellaisinaan: niitä ei voi valita, siirtää tai muuttaa. Pois päältä tai jäädytetyt tasot piilottavat ne.
- Tallentaminen DWG-muotoon kirjoittaa jokaisen takaisin muuttumattomana, missä tahansa DWG-versiossa, jotta toinen ohjelma saa ne takaisin. DXF-tiedostot eivät säilytä niitä: CadCraft kirjoittaa ne vain DWG-muotoon ja kertoo siitä, kun tallennat DXF-muotoon.
- Piirretään: litteät pinnat sekä pinnat sylintereillä, kartioilla, palloilla, toruksilla ja yksinkertaisilla spline-pinnoilla, suorilla, pyöreillä ja spline-särmillä. Muuta pintatyyppiä tai pintaa, jota CadCraft ei pysty asettelemaan, ei arvata. Se jätetään pois ja luetellaan, esimerkiksi ”Ei vielä piirretty (3D-kiintokappaleet): 2 pintaa tyypissä spline-surface (sweepsur), pinta, jota ei vielä piirretä.”
- Lohkojen sisäisiä kiintokappaleita ei vielä näytetä. ”Tietoja tiedostosta” laskee ne.

Kaarevat pinnat piirretään pieninä litteinä paloina, noin 7.5° välein. Siksi kaareva kiintokappale näyttää lähellä hieman fasetoidulta.

## Tallennus ja vienti

Tallennus säilyttää 3D-mallin sekä DWG- että DXF-muodossa. Jokainen pinta tallennetaan 3D-pintana tasolle `CC-3D`, jolloin muut ohjelmat näyttävät kiintokappaleet. CadCraft säilyttää lisäksi tiedostossa oman tarkan kopionsa. Kun avaat piirustuksen uudelleen, CadCraft lukee sen takaisin, ja 3D-näkymä on kuten ennen (kamera, projektio ja visuaalinen tyyli). Muiden ohjelmien tekemät 3D-pinnat tulevat 3D-välilehdelle irrallisina pintoina, jotka pidetään yhdessä ryhmänä. Lohkon sisäinen 3D-pinta tulee mukaan kerran jokaiselle mallin viittaukselle kyseiseen lohkoon. Se sijoitetaan ja kierretään viitteen mukaan. Itse lohkossa ja arkilla 3D-pinta piirretään litteänä, ääriviivanaan.

{{ui:Vie}} 3D-ryhmässä lataa pelkät kiintokappaleet: GLB katselijoille ja verkkoon ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) tai STL 3D-tulostukseen millimetreinä ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} kysyy, mikä muoto halutaan.

:::note
3D-malli on todellisessa koossa. Piirustus ilman yksiköitä katsotaan millimetreiksi, joten `1000` on yksi metri. Jos muutat piirustuksen yksiköitä myöhemmin ({{ui:Ominaisuudet}}, kun mitään ei ole valittuna), kiintokappaleet skaalataan niiden mukana, jotta ne pysyvät piirustuksessa. Historia kertoo siitä. Yksi {{key:Mod+Z}} kumoaa yksikkömuutoksen ja skaalauksen yhdessä.
:::
