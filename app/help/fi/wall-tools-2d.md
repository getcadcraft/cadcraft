---
title: Seinämuodot, leikkaukset, siirrot ja lukitukset 2D-seinille
summary: Piirrä seiniä suorakulmioina, monikulmioina ja kaarina, jaa ja yhdistä ne uudelleen, siirrä niitä mitan mukaan ja lukitse yksi seinä toiseen tai ruudukkoviivaan. Samat työkalut kuin BimCraftin seinillä.
keywords: seinä, seinätyökalurivi, seinäpainikkeet, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, liitostyyli, viisto, tasapää, suorista, riippulukko, kahva, vedä päätä, kierrä, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, liitos, estä liitos, lukko, ruudukkoviiva, jako, aukko, siirtymä, sijaintiviiva
from: 49044181
---

Nämä työkalut toimivat `WALL`-komennolla piirretyille 2D-seinille (katso ”Piirrä älykkäitä seiniä, ovia ja ikkunoita 2D:nä”). Ne noudattavat samoja sääntöjä kuin BimCraftin seinätyökalut, joten seinä käyttäytyy samalla tavalla molemmissa.

## Missä työkalut ovat

- Työkalurivillä {{ui:Seinät}}-ryhmässä on {{ui:Seinä}}, {{ui:Suorakulmio}}, {{ui:Jaa}} ja {{ui:Siirtymä}}. Sen {{ui:Lisää}}-valikossa on kaikki muut seinätyökalut, kukin kuvakkeineen.
- Valintanauha-tyyleissä {{ui:Seinät}}-välilehdellä on paneelit {{ui:Piirrä seinät}}, {{ui:Leikkaa}}, {{ui:Aseta ja muokkaa}}, {{ui:Pidä}} ja {{ui:Yhdistä}}.
- Asettelussa työkalurivit ja työkalulaatikko näyttävät saman {{ui:Seinät}}-ryhmän.
- Voit myös kirjoittaa minkä tahansa alla nimetyn komennon.

## Liitokset tallennetaan

Kun seinän pää osuu toiseen seinään, CadCraft tallentaa tämän liitoksen molempien seinien kanssa. Se ei enää laske liitoksia uudelleen sen mukaan, mihin päät sattuvat olemaan. Eli:

- Siirrettyyn seinään liitetyt seinät seuraavat sitä ja pysyvät liitettyinä. Niiden päät liukuvat omia viivojaan pitkin, joten mikään ei käänny.
- Vedä seinän yhtä päätä kahvasta, ja siihen liitetty seinä säilyttää suuntansa. Sen pää liukuu omaa viivaansa pitkin kohdatakseen vedetyn seinän, joten vedetty pää osuu tälle viivalle eikä aina kohdistimen alle. Esikatselu näyttää, missä. Seinä, joka törmää vedettyyn seinään, seuraa omaa viivaansa. Jos vedät päätä suoraan seinää pitkin, se muuttaa sen pituutta, ja siihen liitetty seinä liikkuu sen mukana.
- `ROTATE` liitetylle seinälle toimii samalla tavalla: sen naapurien päät liukuvat omia viivojaan pitkin kääntyneeseen seinään.
- Kulman siirtämiseksi valitse molemmat siinä kohtaavat seinät ja vedä kulman kahvaa. Molemmat seinät pysyvät kulmassa ja molemmat kääntyvät. Kauempana olevat seinät pysyvät ennallaan.
- Pidä {{key:Alt}} pohjassa napsauttaessasi kahvan uutta paikkaa rikkoaksesi liitokset tarkoituksella: seinä menee sinne, minne asetit sen, eikä mikään seuraa.
- Jos vetäminen kääntäisi liitetyn seinän sen oman kaukaisen pään läpi, se hylätään eikä mikään muutu.
- Seinä, jonka piirrät kohdalla {{ui:Estä liitokset}} (`D` komennossa `WALL`) tai joka on kytketty pois Ominaisuuksista ({{ui:Estä liitos alussa}}, {{ui:Estä liitos lopussa}}), pysyy vapaana siinä päässä, vaikka se koskettaisi toista seinää, kunnes sallit sen uudelleen.
- `WALLDISJOIN` ({{ui:Estä yhdistäminen}} {{ui:Seinät}}-ryhmässä) tekee saman yhdellä napsautuksella: napsauta seinää lähellä sen päätä estääksesi liitokset siinä päässä, ja napsauta uudelleen sallitaksesi ne.
- Vanhemmassa piirustuksessa ei ole vielä tallennettuja liitoksia. Ensimmäinen tekemäsi muutos löytää ne kerran siitä, miltä seinät näyttivät ennen muutosta, ja tallentaa ne. `WALLJOINS` tekee sen heti.
- DWG- ja DXF-tiedostot kantavat liitokset kunkin seinän sisällä. CadCraft lukee ne takaisin tallennetussa muodossa. Ohjelma, joka ei säilytä laajennettua dataa, näyttää seinät tavallisina lohkoina ja pudottaa liitokset. Liitos, jonka seinät siirrettiin toisessa ohjelmassa, pudotetaan seuraavan kerran, kun muutat kumpaa tahansa seinää.

## Liitostyyli kulmassa

Kulma, jossa kaksi seinää kohtaa päästä päähän, piirretään viistona, ellei valitse toista tyyliä.

- `WALLJOINSTYLE` ({{ui:Liitostyyli}} {{ui:Seinät}}-ryhmässä): napsauta kulmaa. Jokainen napsautus siirtyy seuraavaan tyyliin: {{ui:Viisto}}, {{ui:Tasapää}}, {{ui:Suorista}} ja taas {{ui:Viisto}}. Kirjoita `T` vaihtaaksesi, kumpi kahdesta seinästä kulkee kulman läpi, viimeksi napsauttamassasi kulmassa. Paina {{key:Enter}} lopettaaksesi. Yksi komennon suoritus on yksi kumoamisaskel.
- {{ui:Tasapää}}: toinen seinä kulkee läpi toisen seinän kaukaiselle pinnalle, ja toinen pysähtyy sen sivua vasten. {{ui:Suorista}}: sama, mutta läpi kulkeva seinä päättyy suoraan itseensä nähden. Suorassa kulmassa ne näyttävät samalta.
- Seinän Ominaisuuksissa: {{ui:Liitostyyli alussa}}, {{ui:Liitostyyli lopussa}}, sekä {{ui:Kulkee läpi alussa}} ja {{ui:Kulkee läpi lopussa}}.
- Tyyli tallennetaan molempien seinien kanssa ja kulkee DWG- ja DXF-tiedostoissa mukana. Seinän kopio alkaa ilman sitä.
- T-liitoksella ei ole tyyliä valittavana: se seinä, jonka sivuun toinen osuu, kulkee läpi. Kulma, jossa kolme tai useampi seinä kohtaa, pysyy viistona. Samoin hyvin terävä kulma (alle noin 30 astetta) ja kaksi seinää samalla suoralla.

## Piirrä seinämuotoja

Jokainen niistä tekee seinät yhdellä kumoamisaskeleella, kulmat liitettyinä. `WALL`-komennossa `O` asettaa sijaintisiirtymän (kuinka paljon vasemmalle napsautuksistasi seinä menee), ja `D` kytkee liitoksen pois seuraavilta piirtämiltäsi seiniltä.

- `WALLRECT` (`WR`): kaksi vastakkaista kulmaa, kuten `RECTANG`.
- `WALLROT`: ensimmäinen sivu, sitten kuinka kauas toinen sivu menee, kääntyvälle suorakulmiolle mihin tahansa kulmaan.
- `WALLPOLY` (`WP`): sivujen määrä (3–64), keskipiste, `I` sisään piirretylle tai `C` ympäri piirretylle, sitten säde, kuten `POLYGON`: napsauta tai kirjoita se (kirjoitettu säde osoittaa kohdistinta kohti, tai X-akselia pitkin, kun kohdistin on yhä keskipisteessä).
- `WALLARC` (`WARC`): keskipiste, alku, loppu. `D` kääntää kaaren toiseen suuntaan.
- `WALLTAN`: napsauta lähellä seinän päätä, sitten kaaren päätä, joka lähtee seinää pitkin.
- `WALLPICK`: napsauta viivaa tai murtoviivaa ja kerro, otetaanko siihen liitetyt viivat mukaan.
- `WALLTRACE`: napsauta suljetun alueen sisällä olevia viivoja ja seiniä ympäröidäksesi pienimmän seinillä.

Pohjapiirroksen seinät ovat suoria, joten kaari piirretään lyhyinä suorina seinillä, joista kukin on 15 asteen kulmassa. Ne liittyvät kuten mikä tahansa kulma.

## Leikkaa seiniä

- `WALLSPLIT` (`WS`): napsauta seinää ja sitten pistettä. `C` leikkaa siitä, mihin toinen seinä ylittää sen, `G` jättää aukon osien väliin ja `F` tekee leikkauspäistä vapaita yhdistämisen sijaan. Ensimmäinen osa säilyttää seinän paikan piirustuksessa, ja ovet ja ikkunat seuraavat omaa osaansa. Leikkaus oven tai ikkunan läpi hylätään.
- `WALLSPLITGAP` ({{ui:Jaa aukolla}}): sama jako, mutta se kysyy ensin aukon.
- `WALLDELSEG`: napsauta seinää ja sitten poistettavan palan kahta päätä.
- `WALLREJOIN`: napsauta seinän kahta osaa tehdäksesi niistä jälleen yhden seinän.

## Siirrä seiniä matkan mukaan

- `WALLDIM` ({{ui:Muokkaa mitan mukaan}}): napsauta lineaarista tai linjassa olevaa mittaa, joka kulkee seinästä toiseen, ja kirjoita uusi arvo. Kaukaisessa päässä oleva seinä siirtyy kohtisuoraan itseensä nähden, ensimmäisessä päässä oleva seinä pysyy, ja siihen liitetyt seinät seuraavat. Mitan kaukainen piste liikkuu seinän mukana, joten mitta näyttää kirjoittamasi arvon.
- `WALLOFFSET` (`WO`): napsauta seinää ja sitten puolta, jolle se siirretään (`D` kirjoittaa matkan, `C` tekee kopion sen sijaan).
- `WALLSTRETCH`: ikkuna seinän päiden ympärillä, sitten perustapiste ja toinen piste.
- Ominaisuudet-paneelissa kirjoitettu {{ui:Pituus}} pitää alun ja vie kaukaisessa päässä liitetyn seinän mukanaan, ja uusi {{ui:Paksuus}} kasvaa poispäin valitsemastasi {{ui:Sijaintiviiva}}sta (vasen pinta, oikea pinta tai keskikohta).

## Mitoita seinien keskiviivojen välillä

Seinän keskiviivaa ei piirretä, mutta kohteen tartunta löytää sen. Kun kohteen tartunta on päällä ({{key:F3}}), vie kohdistin seinän paksuuden keskikohdalle: merkki kertoo `Wall center: endpoint` tai `Wall center: midpoint`, ja keskiviiva näkyy katkoviivana, kun merkki on sen päällä. Kun {{ui:Kohtisuora}} tai {{ui:Lähin}} on kytketty päälle kohteen tartuntojen luettelossa, ne toimivat myös keskiviivalla.

1. Aloita `DIMLINEAR` (tai `DIMALIGNED`).
2. Napsauta ensimmäistä seinää, kun merkki kertoo `Wall center: midpoint` tai `Wall center: endpoint`.
3. Napsauta toista seinää samalla tavalla ja napsauta sitten kohtaa, johon mittaviiva menee.
4. Muuttaaksesi etäisyyttä aloita `WALLDIM`, napsauta mittaa ja kirjoita uusi arvo. Toinen seinä siirtyy.

Keskiviivan tartunta toimii jokaisessa komennossa, joka kysyy pistettä.

## Lukitse seiniä

Lukko pysyy seinän kanssa tiedostossa. Jos siirrät yhtä lukittua seinää, toinen seuraa. Jos yksi muutos siirtää molempia eri tavoin, se hylätään eikä mikään muutu.

- `WALLHOLD`: lukitse seinä toiseen seinään. `A` siirtää sen ensin toisen seinän viivalle, `K` säilyttää etäisyyden, joka sillä on.
- `WALLHOLDDIM`: lukitse kahden yhdensuuntaisen seinän välinen etäisyys.
- `WALLGRID`: lukitse seinä ruudukkoviivaan (viiva ruudukkotasolla, jonka tunniste on tekstinä toisessa päässä), joko sitä pitkin tai niin, että toinen pää on siinä. Viivaa pitkin lukittu seinä säilyttää etäisyyden, joka sillä on siihen. Siirrä ruudukkoviivaa komennolla `GRIDMOVE`, ja seinä seuraa kokonaisena liitettyine seinineen. Seinä, joka on ruudukkoviivaa pitkin, liikkuu kokonaisena sen mukana ilman lukkoakin, ja seinä, joka vain päättyy viivaan, venytetään sen päästä.
- `WALLHOLDS` luettelee lukot. `WALLUNHOLD` poistaa seinän lukot.
- Jokainen lukko näkyy pienenä riippulukkona pohjapiirroksessa: lukitun seinän keskikohdan vieressä tai siinä päässä, joka on lukittu ruudukkoviivaan. Napsauta riippulukkoa poistaaksesi lukon.

## Mitä ei vielä ole

Lukot käyttävät seinien keskiviivoja. Seinillä ei ole täällä tasoja, joten liitoksessa ei ole tason etusijaa, eivätkä seinät kaarru (katso kaaret yllä). Näitä työkaluja ei ole vielä kokeiltu suurella piirustuksella, eikä niitä ole tarkistettu toisessa CAD-ohjelmassa.
