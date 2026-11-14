---
title: CadCraftin aloitusopas
summary: Mitä CadCraft-piirto-ohjelma tekee, missä se toimii ja ensimmäinen piirustuksesi tyhjästä ruudusta tallennettuun tiedostoon.
keywords: aloitus, ensimmäinen piirustus, uusi, avaa, tallenna, tallenna nimellä, aloita, opas, johdanto, pikaopas
from: 1a56c575
---

CadCraft on 2D-piirto-ohjelma. Piirrät ja muokkaat viivoja, kaaria, murtoviivoja, tekstiä, mitoituksia ja lohkoja, määrität arkit piirustusotsikkoineen ja näkymäruutuineen ja plottaat ne PDF:ksi. Se avaa DWG- ja DXF-piirustuksia ja tallentaa ne DWG- tai DXF-muodossa.

Se toimii verkkoselaimessa. Mitään ei tarvitse asentaa: sivusto antaa osoitteen, ja koko sovellus latautuu sivulle. Piirustuksesi avataan omalta tietokoneeltasi ja tallennetaan takaisin sille. **Mitään ei lähetetä.**

Jos olet piirtänyt aiemmin, lue tämän sivun jälkeen [Tulossa muista piirto-ohjelmista](topic:coming-from). Useimmat tottumukset pätevät, ja ne harvat, jotka eivät päde, on lueteltu siellä.

## Haluatko opastusta?

Kirjoita `TOUR` (tai napsauta {{ui:Käy kierros läpi}} aloituskortissa tai {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Käy kierros uudelleen läpi}}). Kuusi lyhyttä vaihetta piirustuksen päällä olevassa ruudussa: piirrä viiva ja ympyrä, siirrä sitä, typistä se, poista jotakin ja mitoita se. Kukin vaihe päättyy, kun teet sen, ja voit ohittaa vaiheen tai koko kierroksen. Se alkaa itsestään vain ensimmäisellä kerralla. [Pikaohjeessa](topic:cheat-sheet) on 40 komentoa, joita käytät eniten, ja [komentokartassa](topic:command-map) jokainen komento.

## Mitä tarvitset

- Ajantasainen Chrome, Edge, Firefox tai Safari Mac-, Windows- tai Linux-tietokoneella. Katso [Selaimet ja alustat](common:browsers).
- Hiiri, jossa on rulla, on mukavin. Ohjauslevy toimii; katso [Hiiri, ohjauslevy ja kosketus](topic:mouse-trackpad-touch).
- Näppäimistö. CadCraftia ohjataan kirjoitetuilla komennoilla, kuten useimpia piirto-ohjelmia.

## Idea yhdessä kappaleessa

Kirjoitat komennon (tai napsautat sen painiketta), ja alareunan komentorivi esittää kysymyksiä yksi kerrallaan: "Määritä ensimmäinen piste", "Määritä seuraava piste". Vastaat jokaiseen kysymykseen napsauttamalla piirustusta tai kirjoittamalla arvon ja painamalla sitten {{key:Enter}}. {{key:Esc}} peruuttaa. Siinä koko vuorovaikutusmalli; kaikki muu on yksityiskohtia.

## Ensimmäinen piirustuksesi

Piirrät viivoista 4000 x 3000 -suorakulmion, lisäät sen keskelle ympyrän ja tallennat tiedoston.

1. Avaa CadCraft. Alareunan komentorivillä lukee `Komento:` ja piirtoalueella näkyy pieni "Aloita piirtäminen" -kortti.
2. Kirjoita `L` ja paina {{key:Enter}}. Komentoriviä ei tarvitse napsauttaa ensin: mihin tahansa kirjoitettu menee sinne.
3. Kehote muuttuu muotoon `Määritä ensimmäinen piste:`. Kirjoita `0,0` ja paina {{key:Enter}}.
4. Kirjoita `@4000,0` ja paina {{key:Enter}}. Viiva ilmestyy oikealle. `@` tarkoittaa "viimeisestä pisteestä".
5. Kirjoita `@0,3000` ja paina {{key:Enter}}.
6. Kirjoita `@-4000,0` ja paina {{key:Enter}}.
7. Kirjoita `C` ja paina {{key:Enter}}. `C` on Sulje-valinta (Close): viimeinen viiva palaa ensimmäiseen pisteeseen ja komento päättyy.
8. Napsauta työkalurivin Näkymä-ryhmässä {{ui:Laajuus}}. Suorakulmio täyttää näytön.

Sinun pitäisi nyt nähdä neljä viivaa, jotka muodostavat suorakulmion, ja komentorivin yläpuolella oleva historia luettelee kirjoittamasi.

9. Kirjoita `C` ja paina {{key:Enter}} aloittaaksesi ympyräkomennon.
10. Kirjoita `2000,1500` ja paina {{key:Enter}} keskipisteeksi.
11. Kirjoita `500` ja paina {{key:Enter}} säteeksi.

Ympyrä ilmestyy suorakulmion keskelle.

12. Paina {{key:Mod+S}} tai napsauta Tiedosto-ryhmässä {{ui:Tallenna}}.

Selain lataa tiedoston `Drawing1.dwg` tavalliseen latauskansioosi, ja historia kertoo tallentaneensa kopion DWG-muodossa. Tiedosto avautuu CadCraftissa uudelleen ja useimmissa muissa CAD-ohjelmissa. (Jos olet valinnut aiemmin tässä selaimessa kohdassa {{ui:Tallenna nimellä}} DXF:n, uusi piirustus tallentuu sen sijaan tiedostona `Drawing1.dxf`.)

:::tip
Paina {{key:Enter}} tyhjällä komentorivillä toistaaksesi viimeisen komennon. Paina halutessasi {{key:Space}} {{key:Enter}}in sijaan: tekstin ulkopuolella se tekee saman.
:::

## Avaa olemassa oleva piirustus

1. Paina {{key:Mod+O}} tai napsauta {{ui:Avaa}}.
2. Valitse `.dwg`- tai `.dxf`-tiedosto tiedostovalitsimessa.

Voit myös vetää DWG- tai DXF-tiedoston kohteesta {{pick:mac=Finder|windows=Resurssienhallinta|linux=tiedostonhallinta}} ja pudottaa sen piirtoalueelle. Tiedosto luetaan sivulla; se ei koskaan poistu tietokoneeltasi.

Katso [Tiedostot: mitä avautuu, mitä tallentuu](topic:files), mitä säilyy ja mitä muunnetaan.

## Tallennus: mitä odottaa

Tallennus selaimessa toimii eri tavalla kuin työpöytäohjelmassa:

- {{ui:Tallenna}} **lataa aina uuden kopion**. Se ei korvaa avaamaasi tiedostoa. Jos latauskansiossasi on jo samanniminen tiedosto, selain lisää yleensä numeron, kuten `Drawing1 (1).dwg`.
- {{ui:Tallenna}} käyttää piirustuksen muotoa: DWG, jos avasit DWG:n, DXF, jos avasit DXF:n. Voit valita painamalla {{key:Mod+Shift+S}} tai napsauttamalla {{ui:Tallenna nimellä}} ja valitsemalla sitten {{ui:DWG}} (ja sen version), {{ui:DXF R12}} tai {{ui:DXF 2000}}. Katso [Tallennus](topic:files#saving).
- Avaamaasi tiedostoa ei koskaan muuteta.
- Toisen tiedoston avaaminen tai {{ui:Uusi}} asettaa sen omaan välilehteensä piirustuksen päälle, joten mitään avointa ei suljeta. Jos suljet piirustuksen välilehden tai poistut sivulta tallentamattomin muutoksin, CadCraft kysyy ensin: {{ui:Tallenna ensin kopio}}, hylkää tai {{ui:Peruuta}}. Selaimen välilehden sulkeminen näyttää sen sijaan selaimen oman kysymyksen "Poistutaanko sivustolta?".

Pilvitallennus ei ole vielä käytettävissä. Se, minne tiedostosi menevät ja miksi ne pysyvät yksityisinä, selitetään aiheessa [Tiedostosi ja yksityisyys](common:your-files).

## Mihin seuraavaksi

Paina {{key:F1}} tai napsauta ylälaidan palkin {{ui:Ohje}}-painiketta avataksesi tämän ohjeen piirustuksen viereen milloin tahansa. Se toimii ilman yhteyttä.

- [CadCraftin näyttö](topic:workspace) nimeää jokaisen palkin ja paneelin.
- [Piirrä koordinaateilla](topic:draw-with-coordinates) on paras ensimmäinen läpikäynti.
- [Näppäimistö ja hiiri](topic:keyboard) luettelee jokaisen näppäimen.
- Kirjoita `HELP` komentoriville saadaksesi luettelon kaikista komennoista tai lue [Komentoviite](topic:commands).
