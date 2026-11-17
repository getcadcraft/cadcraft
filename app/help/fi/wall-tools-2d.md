---
title: Seinämuodot, leikkaukset, siirrot ja lukitukset (2D-seinät)
summary: Piirrä seinät suorakulmioina, monikulmioina ja kaarina, jaa ja yhdistä ne uudelleen, siirrä niitä mitan verran sekä lukitse seinä toiseen seinään tai ruudukkoviivaan. Samat työkalut kuin BimCraft-ohjelman seinissä.
keywords: seinä, seinätyökalut, seinäpainikkeet, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, liitostyyli, viisto, tasapää, suorista, riippulukko, ote, vedä pää, kierrä, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, yhdistä, estä liitos, lukitus, ruudukkoviiva, jako, aukko, siirtymä, sijaintiviiva
from: f41e7433
---

Nämä työkalut toimivat komennon `WALL` 2D-seiniin (ks. "Piirrä älykkäät 2D-seinät, ovet ja ikkunat"). Ne noudattavat samoja sääntöjä kuin BimCraft-ohjelman seinätyökalut, joten seinä käyttäytyy samalla tavalla molemmissa.

## Missä työkalut ovat

- Työkalurivillä {{ui:Seinät}}-ryhmässä ovat {{ui:Seinä}}, {{ui:Suorakulmio}}, {{ui:Jaa}} ja {{ui:Siirtymä}}. Sen {{ui:Lisää}}-valikossa ovat kaikki muut seinätyökalut, kukin kuvakkeineen.
- Valintanauhatyyleissä {{ui:Seinät}}-välilehdellä on paneelit {{ui:Piirrä seinät}}, {{ui:Leikkaa}}, {{ui:Aseta ja muokkaa}}, {{ui:Pidä}} ja {{ui:Yhdistä}}.
- Asettelussa työkaluriviet ja työkalulaatikko näyttävät saman {{ui:Seinät}}-ryhmän.
- Voit myös kirjoittaa minkä tahansa alla mainitun komennon.

## Liitokset tallentuvat

Kun seinän pää osuu toiseen seinään, CadCraft tallentaa liitoksen molempien seinien kanssa. Liitoksia ei enää lasketa uudelleen siitä, missä päät sattuvat olemaan. Siksi:

- Seinät, jotka on liitetty siirtämääsi seinään, seuraavat sitä ja pysyvät liitettyinä. Niiden päät liukuvat omilla viivoillaan, joten mikään ei kierry.
- Kun vedät seinän yhtä päätä sen otteesta, siinä liitetty seinä säilyttää myös suuntansa. Sen pää liukuu omalla viivallaan kohtaamaan vedettävän seinän, joten vedetty pää osuu tälle viivalle eikä aina kohdistimen alle. Esikatselu näyttää, minne. Seinä, joka päättyy vedettävän seinän kylkeen, seuraa omaa viivaansa. Pään vetäminen suoraan seinän suuntaan muuttaa sen pituutta, ja siinä liitetty seinä liikkuu mukana.
- Kun `ROTATE` kohdistuu liitettyyn seinään, toimitaan samalla tavalla: naapuriseinien päät liukuvat omilla viivoillaan kierrettyyn seinään.
- Kulman siirtämiseksi valitse molemmat kulmassa kohtaavat seinät ja vedä kulman otetta. Molemmat seinät pysyvät kulmassa ja kääntyvät molemmat. Kauempana olevat seinät pysyvät ennallaan.
- Pidä {{key:Alt}} painettuna, kun napsautat otteen uutta paikkaa, jos haluat katkaista liitokset tarkoituksella: seinä menee minne asetat sen, eikä mikään seuraa.
- Jos vetäminen kääntäisi liitetyn seinän takaisin oman kaukaisen päänsä läpi, se hylätään eikä mitään muutu.
- Seinä, jonka piirrät {{ui:Estä liitokset}} -asetuksella (`D` komennossa `WALL`) tai jonka poistat käytöstä {{ui:Ominaisuudet}}-paneelista ({{ui:Estä liitos alussa}}, {{ui:Estä liitos lopussa}}), pysyy vapaana tuossa päässä, vaikka se koskettaisi toista seinää, kunnes sallit sen uudelleen.
- `WALLDISJOIN` ({{ui:Estä yhdistäminen}} {{ui:Seinät}}-ryhmässä) tekee saman yhdellä napsautuksella: napsauta seinää lähellä toista päätä, jotta liitokset estetään siinä päässä, ja napsauta sitä uudelleen, jotta ne sallitaan.
- Vanhemmassa piirustuksessa ei ole vielä tallennettuja liitoksia. Ensimmäinen muutos löytää ne kerran sen perusteella, miten seinät olivat ennen muutosta, ja tallentaa ne. `WALLJOINS` tekee sen heti.
- DWG- ja DXF-tiedostot kuljettavat liitokset kunkin seinän sisällä. CadCraft lukee ne takaisin tallennetussa muodossa. Ohjelma, joka ei säilytä laajennettua tietoa, näyttää seinät tavallisina lohkoina ja poistaa liitokset. Liitos, jonka seiniä on siirretty toisessa ohjelmassa, poistetaan seuraavan kerran, kun muutat kumpaa tahansa seinää.

## Kulman liitostyyli

Kulma, jossa kaksi seinää kohtaa päästään, piirretään viistona, ellei valitse toista tyyliä.

- `WALLJOINSTYLE` ({{ui:Liitostyyli}} {{ui:Seinät}}-ryhmässä): napsauta kulmaa. Jokainen napsautus siirtyy seuraavaan tyyliin: {{ui:Viisto}}, {{ui:Tasapää}}, {{ui:Suorista}}, sitten jälleen {{ui:Viisto}}. Kirjoita `T`, jos haluat vaihtaa, kumpi kahdesta seinästä kulkee kulman läpi viimeksi napsauttamassasi kohdassa. Lopeta painamalla {{key:Enter}}. Yksi komennon ajo on yksi kumoamisvaihe.
- {{ui:Tasapää}}: toinen seinä kulkee läpi toisen kaukaiselle pinnalle, ja toinen pysähtyy sen kylkeen. {{ui:Suorista}}: sama, mutta läpi kulkeva seinä päättyy suoraan itseensä nähden. Suorassa kulmassa molemmat näyttävät samalta.
- Seinän Ominaisuuksissa: {{ui:Liitostyyli alussa}}, {{ui:Liitostyyli lopussa}} sekä {{ui:Kulkee läpi alussa}} ja {{ui:Kulkee läpi lopussa}}.
- Tyyli tallentuu molempien seinien kanssa ja kulkee DWG- ja DXF-tiedostoissa. Seinän kopio alkaa ilman sitä.
- T-liitoksella ei ole tyyliä valittavana: seinä, jonka kylkeen osutaan, kulkee läpi. Kulma, jossa kolme tai useampi seinä kohtaa, pysyy viistona. Samoin hyvin terävä kulma (alle noin 30 astetta) ja kaksi seinää samalla suoralla.

## Piirrä seinämuotoja

Jokainen niistä tekee seinät yhdessä kumoamisvaiheessa, kulmat liitettyinä. Komennossa `WALL` `O` asettaa sijoitussiirtymän (kuinka pitkälle vasemmalle napsautuksistasi seinä menee), ja `D` kytkee liitokset pois päältä seuraavaksi piirrettäviltä seiniltä.

- `WALLRECT` (`WR`): kaksi vastakkaista kulmaa, kuten `RECTANG`.
- `WALLROT`: ensimmäinen sivu ja sitten se, kuinka pitkälle toinen sivu ulottuu, suorakulmiolle mihin tahansa kulmaan.
- `WALLPOLY` (`WP`): sivujen määrä (3–64), keskipiste, `I` sisään piirretylle tai `C` ympäri piirretylle, sitten säde, kuten `POLYGON`.
- `WALLARC` (`WARC`): keskipiste, alku, loppu. `D` kääntää kaaren toiseen suuntaan.
- `WALLTAN`: napsauta seinän pään lähellä, sitten kaaren päätä, joka lähtee tuon seinän suuntaisesti.
- `WALLPICK`: napsauta viivaa tai murtoviivaa ja ilmoita, otetaanko myös siihen liitetyt viivat.
- `WALLTRACE`: napsauta suljetun viiva- ja seinäalueen sisäpuolella, jolloin seinät asetetaan pienimmän alueen ympärille.

Pohjapiirroksen seinät ovat suoria, joten kaari piirretään lyhyinä suorina seinänpätkinä, joista kukin on 15 astetta. Ne liittyvät kuten mikä tahansa kulma.

## Leikkaa seiniä

- `WALLSPLIT` (`WS`): napsauta seinää ja sitten pistettä. `C` leikkaa, missä toinen seinä ylittää sen, `G` jättää aukon osien väliin, `F` tekee leikatuista päistä vapaat liitoksen sijaan. Ensimmäinen osa säilyttää seinän paikan piirustuksessa, ja ovet ja ikkunat seuraavat omaa osaansa. Ovea tai ikkunaa leikkaava leikkaus hylätään.
- `WALLSPLITGAP` ({{ui:Jaa aukolla}}): sama jako, mutta se kysyy ensin aukon.
- `WALLDELSEG`: napsauta seinää ja sitten poistettavan osan kahta päätä.
- `WALLREJOIN`: napsauta yhden seinän kahta osaa, jotta ne tehdään taas yhdeksi.

## Siirrä seiniä mitan verran

- `WALLDIM`: napsauta vaaka-/pystymitoitusta tai tasattua mitoitusta, joka kulkee seinästä toiseen, ja kirjoita sitten uusi arvo. Kaukaisessa päässä oleva seinä siirtyy suoraan itseensä nähden, ensimmäisen pään seinä pysyy paikallaan, ja siihen liitetyt seinät seuraavat.
- `WALLOFFSET` (`WO`): napsauta seinää ja sitten sivua, jolle se siirretään (`D` kirjoittaa etäisyyden, `C` tekee sen sijaan kopion).
- `WALLSTRETCH`: ikkuna seinien päiden ympärille, sitten peruspiste ja toinen piste.
- Ominaisuuksissa kirjoitettu {{ui:Pituus}} säilyttää alun ja vie mukanaan kaukaisessa päässä liitetyn seinän. Uusi {{ui:Paksuus}} kasvaa poispäin siitä sijaintiviivasta, jonka valitset kohdassa {{ui:Sijaintiviiva}} (vasen pinta, oikea pinta tai keskikohta).

## Lukitse seiniä

Lukitus pysyy seinän mukana tiedostossa. Kun siirrät yhden lukitun seinän, toinen seuraa. Jos yksi muutos siirtäisi molempia seiniä eri tavoin, se hylätään eikä mitään muutu.

- `WALLHOLD`: lukitse seinä toiseen seinään. `A` siirtää sen ensin toisen seinän viivalle, `K` säilyttää sen etäisyyden.
- `WALLHOLDDIM`: lukitse kahden yhdensuuntaisen seinän välinen etäisyys.
- `WALLGRID`: lukitse seinä ruudukkoviivaan (viiva ruudukkotasolla, jonka tunniste on tekstinä toisessa päässä), joko viivan suuntaisesti tai niin, että toinen pää on viivalla. Viivan suuntaan lukittu seinä säilyttää etäisyytensä siitä. Siirrä ruudukkoviivaa komennolla `GRIDMOVE`, jolloin seinä seuraa kokonaisena liitettyine seinineen. Ruudukkoviivan suuntainen seinä siirtyy kokonaisena sen mukana ilman lukitustakin, ja seinä, joka vain päättyy viivalle, venytetään sen pään kautta.
- `WALLHOLDS` luettelee lukitukset. `WALLUNHOLD` poistaa seinän lukitukset.
- Jokainen lukitus näkyy pohjapiirroksessa pienenä riippulukkona: lukitun seinän keskikohdan vieressä tai sen pään vieressä, joka on lukittu ruudukkoviivaan. Napsauta riippulukkoa poistaaksesi kyseisen lukituksen.

## Mitä ei vielä ole

Lukot käyttävät seinien keskiviivoja. Tässä seinillä ei ole tasoja, joten liitoskohdassa ei ole tasojärjestystä, eivätkä seinät kaarru (ks. kaaret yllä). Näitä työkaluja ei ole kokeiltu suurella piirustuksella, eikä niitä ole tarkistettu toisessa CAD-ohjelmassa.
