---
title: Käytä CadCraft-ohjelmaa tekoälyavustajan kanssa
summary: Anna oman tekoälyavustajasi tai skriptisi työskennellä CadCraftin kanssa: mitä se saa tehdä, miten mikä tahansa MCP-asiakas yhdistetään ja miten hallinta pysyy käyttäjällä (käyttöoikeudet, kumoaminen, toimintaloki, Katkaise yhteys).
keywords: tekoäly, avustaja, agentti, mcp, model context protocol, skripti, automaatio, komentorivi, cli, json, tunnus, käyttöoikeudet, katkaise yhteys, toiminta, kansiot, polut, svg, eräajo
from: 06ba4ef6
---

## Mitä opit

Miten annat tekoälyavustajan (tai itse kirjoittamasi skriptin) tarkastella piirustusta, suorittaa CadCraftin komentoja, plottata ja tallentaa sekä päättää, mihin se saa koskea.

CadCraftissa **ei ole omaa tekoälyä**, eikä se lähetä mitään minnekään. Avustaja tuodaan itse: mikä tahansa ohjelma, joka puhuu Model Context Protocol (MCP) -protokollaa. CadCraft antaa sille vain työkalut, ja valitaan itse, mitkä.

Sisäänpääsyyn on kaksi tapaa:

- **Avoin piirustus.** Avustaja toimii tässä ikkunassa rinnallasi CadCraft Studio -ohjelman kautta tietokoneellasi. Tätä varten on {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Avustajat}}.
- **Piirustukset tietokoneella ilman sovelluksen avaamista.** CadCraft MCP -palvelin ja `cadcraft`-komentorivi lukevat ja kirjoittavat DWG- ja DXF-tiedostoja kansioissa, jotka nimetään. Katso alla kohta "Työskentele tiedostojen kanssa avaamatta CadCraftia".

## Ota käyttöön

1. Avaa {{ui:Asetukset}} (ratas sovelluspalkissa tai {{key:Mod+,}}) ja siirry {{ui:CadCraft}}-välilehdelle.
2. Kohdassa {{ui:Avustajat}} ruksaa **Salli tekoälyavustajien ja skriptien käyttää CadCraftia**. Se on pois päältä, kunnes ruksaat sen.
3. Valitse, mitä se saa tehdä. **Lukeminen** on valittuna alussa; ruksaa muut vain silloin, kun tarvitset niitä.

| Oikeus | Mitä avustaja voi tehdä |
|---|---|
| Lukeminen | Tarkastella piirustusta: kuvailla sitä, listata ja etsiä kohteita, nähdä valinnan, kuvailla näkymän ja ottaa siitä kuvan, tarkistaa se taso- ja piirtosääntöjä vastaan |
| Muokkaus | Suorittaa komentoja piirustukselle ja muuttaa valintaa. Jokainen toiminto on yksi kumottava vaihe |
| Tallennus | Tallentaa piirustuksen (työpöydällä omaan tiedostoonsa; selaimessa latauksena) |
| Vienti | Plottaa PDF-tiedostoksi ja luo muita tiedostoja |

## Anna sen käyttää tiedostoja valitsemissasi kansioissa

CadCraft Studio -ohjelmassa avustaja voi avata, tallentaa ja plotata tiedostoja nimeltä eikä tiedostodialogien kautta, mutta vain kansioissa, jotka lisäät kohdassa {{ui:Avustajat}} › {{ui:Kansiot, joita se saa käyttää}}:

1. Valitse {{ui:Lisää kansio…}} ja valitse kansio Studio-ohjelman omasta valintaikkunasta.
2. Avustaja voi nyt listata siellä olevat tiedostot (`files_list`), avata piirustuksen (`drawing_open`), tallentaa sen siellä DWG-versiona tai DXF-muodossa, plotata PDF- tai SVG-tiedostoon, ladata LISP-tiedoston sekä antaa komennolle tiedoston, jota se pyytää (`INSERT` `F`, `XATTACH`, pistetiedosto), tai kertoa, mihin komennon tiedosto menee (`COUNT`-komennon CSV-tiedosto, `PUBLISH`).
3. {{ui:Poista}} poistaa kansion heti. Muut polut hylätään, ja tiedosto, joka on jo paikallaan, korvataan vain, jos avustaja pyytää sitä tai on kirjoittanut tiedoston itse.

Avaaminen vaatii edelleen **Lukeminen**-oikeuden, piirustuksen tallentaminen vaatii **Tallennus**-oikeuden ja muu tiedosto vaatii **Vienti**-oikeuden.

Työkaluja, joita et ole valinnut käyttöoikeuksissa, ei tarjota avustajalle lainkaan. Jos se pyytää sellaista silti, CadCraft hylkää pyynnön ja kirjaa siitä merkinnän toimintalokiin. Kytkimen sammuttaminen katkaisee kaikki yhteydet kerralla. {{ui:Palauta CadCraftin asetukset}} sammuttaa sen myös.

## Yhdistä avustaja

Avustajat yhdistyvät **CadCraft Studio** -ohjelman kautta tietokoneellasi. Studio käynnistää pienen palvelimen, jonka vain tämä tietokone tavoittaa (osoite `127.0.0.1`), ja sitä suojaa tunnus (token), jonka Studio luo joka kerta käynnistyessään. Avaa Studio, valitse {{ui:Yhdistä avustaja}} ja kopioi osoite ja tunnus.

- Lisää avustajaan MCP-palvelin, jonka tyyppi on HTTP, osoitteella (se näyttää tältä: `http://127.0.0.1:47615/mcp`) ja otsikolla `Authorization: Bearer <token>`. Studio näyttää liitettävät asetukset.

{{ui:Uusi tunnus}} Studiossa saa jokaisen yhdistetyn avustajan muodostamaan yhteyden uudelleen uudella tunnuksella. Älä koskaan jaa tunnusta: kuka tahansa, jolla se on, voi käyttää sovelluksia, jotka olet kytkenyt päälle, niin kauan kuin Studio on käynnissä.

:::note
Selaimen välilehti ei voi avata yhteyttä avustajalle: selainsovelluksissa kytkin ei vaikuta, ennen kuin käytät CadCraft Studio -ohjelmaa tietokoneellasi.
:::

## Hallinta pysyy käyttäjällä

- **Jokainen toiminto on yksi kumoamisvaihe**, ja se on nimetty avustajan nimellä, esimerkiksi "Assistant: LINE". Paina {{key:Mod+Z}} kumotaksesi avustajan viimeisen toiminnon kokonaisuudessaan.
- **Näet, mitä se tekee.** Sen komennot näkyvät komentohistoriassa **[Assistant]** alussa, ja piirustus piirtyy uudelleen sen työskennellessä.
- **Se odottaa käyttäjää.** Kun komento on kesken, avustaja voi lukea piirustusta mutta ei muuttaa sitä. Sille kerrotaan yrittää uudelleen, kun komento on valmis.
- **Yhteys näkyy.** Sovelluspalkin painike nimeää yhdistetyn avustajan. Napsauta sitä, kun haluat nähdä, mitä avustaja saa tehdä, tai **Katkaise yhteys**.
- **Toiminta.** {{ui:Asetukset}} › {{ui:CadCraft}} › {{ui:Avustajat}} › {{ui:Toiminta}} listaa jokaisen kutsun: milloin, mikä työkalu, tehtiinkö vai hylättiinkö se, ja kumoamisvaihe, jonka se teki. {{ui:Tallenna loki}} tallentaa kopion.

## Mitä avustaja voi pyytää

| Työkalu | Oikeus | Mitä se tekee |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Lukeminen | Piirustuksen nimi, yksiköt, tasot, lohkot, arkit; mitä näytöllä on |
| `files_list`, `drawing_open` | Lukeminen | Studio: tiedostot kansioissasi; avaa yksi tässä ikkunassa |
| `objects_list`, `object_get`, `selection_get` | Lukeminen | Kohteet geometrioineen, pituuksineen ja pinta-aloineen (tai vain lukumäärä tyypin ja tason mukaan); valinta |
| `drawing_check` | Lukeminen | Säännöt, kuten sallitut tasot, ei mitään tasolla 0, värit Tason mukaan, tekstin korkeudet |
| `view_screenshot` | Lukeminen | Kuva piirustuksesta sellaisena kuin se näkyy |
| `command_run` | Muokkaus | Kirjoittaa komentoriville: `LINE 0,0 @100,0 @0,50 ` luetaan niin kuin se kirjoitettaisiin (välilyönti päättää vastauksen), tai luettelo, jossa kullakin on yksi vastaus. Se voi jättää komennon auki ja jatkaa seuraavassa kutsussaan |
| `script_run` | Muokkaus | Skripti (`.scr`) tai LISP-tiedosto, sellaisena kuin {{ui:APPLOAD}} sen lataa |
| `block_insert` | Muokkaus | Sijoittaa lohkon attribuuttiarvoineen yhdessä vaiheessa |
| `selection_set`, `undo` | Muokkaus | Valitsee kohteet seuraavaa komentoa varten; kumoaa omat vaiheensa |
| `drawing_save` | Tallennus | CadCraftin oma {{ui:Tallenna}}, tai {{ui:Tallenna nimellä}} johonkin kansioistasi |
| `drawing_plot` | Vienti | PDF- tai SVG-tiedosto arkista tai mallista mittakaavassa tai sovitettuna (PDF-pohjakuvia ei vielä tulosteta tällä tavalla) |

Kun avustaja suorittaa komennon, CadCraft esittää kysymyksensä komentorivillä valintaikkunan sijaan (esimerkiksi, lisätäänkö koko piirustus vai yksi lohko), jotta avustaja voi vastata niihin. Kirjasto ja Etsi vaativat yhä käyttäjän: avustajalle kerrotaan pyytää kysymys käyttäjältä.

## Työskentele tiedostojen kanssa avaamatta CadCraftia

CadCraft MCP -palvelin (`cadcraft-mcp`) ja komentorivi (`cadcraft`) suorittavat CadCraftin omaa piirustuskoodia Node.js-ympäristössä ilman ikkunaa. Ne vaativat Node.js 20:n tai uudemman version.

- **MCP-palvelin** toimii vain kansioissa, jotka nimetään, ja vain sille annetuilla oikeuksilla: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Ilman `--root`-asetusta se ei voi avata yhtään tiedostoa; ilman `--allow`-asetusta se voi vain lukea. Se voi myös lukea IFC-malleja, määrälaskentoja ja merkintöjä PDF-sarjoista.
- **Komentorivi** on tarkoitettu omiin skripteihin: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Useita tiedostoja kerralla: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Lisää `--json` saadaksesi tulosteen, jonka ohjelma voi lukea.

:::note
Jos `npx @getcadcraft/mcp` ilmoittaa, ettei pakettia löydy, sitä ei ole vielä julkaistu. Uutiset sivustolla getcadcraft.com kertovat, kun se on.
:::

## Jos jokin ei toimi

- **Avustaja ei näe CadCraft-työkaluja:** tarkista, että kytkin on päällä tässä ikkunassa ja että ikkuna on auki Studiossa.
- **"needs the edit permission":** ruksaa kohdasta {{ui:Avustajat}} **Muokkaus** ja pyydä uudelleen.
- **"outside the folders assistants may use":** lisää kansio kohdassa {{ui:Avustajat}} › {{ui:Kansiot, joita se saa käyttää}}, tai pyydä avustajaa käyttämään tiedostoa kansiosta, jonka olet jo lisännyt.
- **"401" tai "token" -virheet:** tunnus on vaihtunut (Studio käynnistettiin uudelleen tai {{ui:Uusi tunnus}}). Kopioi uusi tunnus avustajan asetuksiin.
- **Sen muutos oli väärä:** paina {{key:Mod+Z}}. Yksi painallus kumoaa yhden avustajan kokonaisen toiminnon.

## Katso myös

- [Reseptit tekoälyavustajille](common:assistants-recipes): esimerkkitapauksia, joista kullakin on käyttämänsä työkalut.
