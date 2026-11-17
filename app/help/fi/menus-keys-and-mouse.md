---
title: Valikot, näppäimet ja hiiri
summary: Valitse valikkotyyli, joka vastaa jo käytettyä tapaa työskennellä, anna mille tahansa komennolle oma näppäin tai näppäin, joka kirjoittaa komennon, siirrä komentoja valintanauhan välilehtien välillä ja määritä, mitä rulla ja hiiren painikkeet tekevät.
keywords: valikkotyyli, valikot, valintanauha, työkalurivi, komentorivi, pikanäppäimet, pikavalinnat, näppäimet, mukauta, uudelleen sijoita, uudelleenmääritä, tekstinäppäimet, hiiri, rulla, käännä, zoomauksen suunta, keskipainike, oikea painike, panoroi, vie, tuo, vaihtaminen, tuttu, piirtämisen klassikko
from: 8bbf4f88
---

CadCraft-komennot ovat samat, miten niihin pääsee, ja komentorivi on aina käytettävissä lyhenteineen (`L`, `C`, `TR` …). **Valikkotyyli** päättää vain, missä painikkeet ovat ruudulla, mikä niiden nimi siellä on ja mitkä näppäimet suorittavat ne. Valitse tyyli kohdasta {{ui:Settings}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menus, keys and mouse}}; muutos on välitön, ja tämä selain muistaa sen.

## Kolme tyyliä

| Tyyli | Mitä saat |
|---|---|
| {{ui:CadCraft}} | CadCraft-sovelluksen oma työkalurivi: Tiedosto, Piirrä, Muokkaa, Merkitse, Parametrinen, Lohkot, Arkit, Muokkaa ja Näkymä, kullakin {{ui:More}}-valikko. Oletus. |
| {{ui:Drafting classic}} | Valintanauha, joka on järjestetty kuten klassiset 2D-piirto-ohjelmat järjestävät omansa: {{ui:File}}-valikko ja pikapainikkeet, sitten välilehdet {{ui:Home}} (Piirrä, Muokkaa, Merkinnät, Tasot, Lohko, Ominaisuudet, Apuohjelmat, Leikepöytä), {{ui:Insert}}, {{ui:Annotate}}, {{ui:Parametric}}, {{ui:View}}, {{ui:Manage}}, {{ui:Output}} ja {{ui:3D}}. Kirjoita komennot kuten aina. Keskipainike panoroi; oikea napsautus on {{key:Enter}}, eikä oikealla painikkeella vetäminen tee mitään. |
| {{ui:Ribbon}} | Valintanauha, jossa on yksinkertaiset tehtäväkohtaiset välilehdet: {{ui:Draw}}, {{ui:Modify}}, {{ui:Annotate}}, {{ui:Parametric}}, {{ui:Blocks}}, {{ui:Sheets}}, {{ui:View}}, {{ui:3D}} ja {{ui:Tools}}, sekä {{ui:File}}-valikko ja pikapainikkeet oikealla. Keski- ja oikea painike panoroivat, kuten CadCraft-sovelluksen omassa tyylissä. |

Jokainen tyyli säilyttää CadCraft-sovelluksen näppäimet: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, sekä {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} piirtoapuvälineille. Kirjaimet eivät ole koskaan näppäimiä: CadCraft kirjoittaa ne komentoriviin.

Valintanauhoissa ovat myös tasopaneelin työkalut ja tilarivin piirtoapuvälineet. {{ui:3D}}-välilehti täyttyy, kun piirustuksen alla oleva 3D-välilehti on avattu; Malli-välilehdeltä valittu 3D-työkalu avaa ensin 3D-välilehden, ja 3D-välilehdeltä valittu 2D-työkalu palaa ensin Malli-välilehdelle.

:::tip
Näppäin, joka kuuluu CadCraftin omaan asetteluun mutta jonka tyyli on antanut toiselle komennolle, ei tee mitään, ja tilarivi kertoo, minne sen komento on siirtynyt (”Omat näppäimet: Ortogonaali on Ctrl+Alt+O”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ja nuolet säilyttävät aina merkityksensä. Kun komento on käynnissä tai komentoriville kirjoitetaan kirjaimia, näppäimet kuuluvat komentoriville.
:::

## Tee siitä oma

1. Valitse tyyli, joka on lähimpänä haluamaasi, ja napsauta {{ui:Customize…}}.
2. Kohdassa {{ui:Keys and menus}} etsi komento (hakukentästä on apua). Napsauta {{ui:Add a key}} ja paina näppäintä. Poista näppäin napsauttamalla sitä.
3. Valintanauhan kanssa {{ui:Where it sits}} siirtää komennon toiseen välilehteen ja paneeliin, {{ui:File}}-valikkoon tai kohtaan {{ui:Keys only}}.
4. Kohdassa {{ui:Mouse}} määritä rulla ja painikkeet, jotka panoroivat piirustusta.
5. Anna sille nimi ja napsauta {{ui:Save}}.

Sisäänrakennetun tyylin tallentaminen tekee oman kopion (”Oma Piirtämisen klassikko”); sisäänrakennettu tyyli ei muutu koskaan. Näppäin, joka on annettu kahdelle komennolle, näkyy punaisena, ja se on korjattava ennen tallennusta.

## Näppäimet, jotka kirjoittavat komennon

{{cmd:SHORTCUTS}} ({{ui:View}} › {{ui:More}} › {{ui:Keyboard shortcuts…}}) antaa näppäimelle kokonaisen komentorivin, kuten {{key:Ctrl+Alt+L}} komennolle `LINE` tai {{key:F9}} komennolle `ZOOM E`. Nämä näppäimet kuuluvat käytössä olevaan tyyliin: kun tämä versio avataan ensimmäisen kerran, vanhemmassa versiossa tehdyt näppäimet siirretään kerran omaan tyyliisi ”Omat CadCraft-näppäimet”, ja ne toimivat kuten ennen. Tyylin vieminen vie ne mukanaan.

## Hiiri

- **Hiiren rulla**: {{ui:Scroll up zooms in}} (oletus) tai {{ui:Scroll up zooms out}}, ja nopeus. Kosketuslevyn nipistys zoomaa aina sormien liikkeen suuntaan.
- **Panoroi piirustusta:** keskipainikkeella, oikealla painikkeella tai molemmilla. Oikea napsautus ilman vetämistä on aina {{key:Enter}}. Vasen painike valitsee ja piirtää CadCraftissa aina, joten sen rastittaminen ei muuta tässä mitään.
- **Vetäminen 3D-näkymissä**: 3D-välilehti säilyttää omat painikkeensa kaikissa tyyleissä (vasen kiertää, keski- ja oikea panoroi).

## Vie mukanasi

{{ui:Export}} tallentaa käytössä olevan tyylin pieneen `.ccinput.json`-tiedostoon; {{ui:Import…}} lisää tyylin toisesta tietokoneesta tai kollegalta. Tuodussa tiedostossa voi viitata vain CadCraft-komentoihin: muu siinä on jätetty pois ja laskettu tilarivillä. {{ui:Delete this style}} poistaa oman tyylisi.

:::note
Nämä asetukset pysyvät tässä selaimessa. {{ui:Use this style in every app}} tyylikorttien alla saa jokaisen sovelluksen avautumaan vastaavassa tyylissään (oma työkalurivi, valintanauha tai Piirtämisen klassikko), ja jokaisessa sovelluksessa tehdyt muutokset säilyvät. CadCraftissa ei ole valikkorivityyliä: kun jonkin muun sovelluksen valikkorivi valitaan kaikille sovelluksille, CadCraft säilyttää oman työkalurivinsä.
:::

Aiheeseen liittyvää: [Näppäimistö ja hiiri](topic:keyboard) · [CadCraft-asetukset](topic:settings) · [Siirtyminen muusta piirto-ohjelmasta](topic:coming-from) · [Komentojen lyhenteet](topic:command-aliases)
