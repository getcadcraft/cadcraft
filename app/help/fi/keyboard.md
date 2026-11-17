---
title: Näppäimistö ja hiiri
summary: Jokainen näppäin, hiiritoiminto ja komentorivin näppäin CadCraft-piirtosovelluksessa, niin kuin koodi ne käsittelee.
keywords: näppäimistö, pikanäppäimet, näppäimet, hiiri, rulla, panoroi, zoomaa, oikea napsautus, keskipainike, f3, f7, f8, ctrl, komentonäppäin, pikanäppäimet, kopioi, leikkaa, liitä, monista, leikepöytä, valitse kaikki
from: a2608a29
---

Pikanäppäimet näytetään tietokoneellesi sopivina. Macissa jokainen {{key:Mod}}-pikanäppäin käyttää Command-näppäintä, ja Control-näppäin toimii myös. Näppäinten kirjoitustapa ja F-näppäinten käyttö Macissa on kohdassa [Näppäimet, hiiret ja kosketuslevyt](common:keys).

## Komentojen kirjoittaminen

| Näppäin | Mitä se tekee |
|---|---|
| Mikä tahansa kirjain, numero tai merkki | Menee komentoriville, missä osoitin onkin, ellei paneelin laatikolla ole kohdistinta |
| {{key:Enter}} | Lähettää kirjoitetun. Tyhjässä kehotteessa: toistaa viimeisen komennon, lopettaa komennon, päättää valinnan tai hyväksyy oletuksen `<…>` |
| {{key:Space}} | Sama kuin {{key:Enter}}, paitsi kun CadCraft kysyy tekstiä (teksti, lohkojen nimet, mitoitusteksti), jolloin se kirjoittaa välilyönnin |
| {{key:Esc}} | Peruuttaa komennon. Kun komentoa ei ole käynnissä: peruuttaa otteen siirron tai valintaruudun ja tyhjentää sitten valinnan |
| {{key:Tab}} | Hyväksyy komentoriviä seuraavan ehdotetun komennon. Kun mitään ei ole kirjoitettu ja osoitin on päällekkäisten kohteiden päällä: korostaa seuraavan kohteen (napsauta valitaksesi sen) |
| {{key:Up}} {{key:Down}} | Selaa aiemmin kirjoitettuja rivejä (viimeiset 100) |

## Piirtäminen ja muokkaaminen

| Näppäin | Mitä se tekee |
|---|---|
| {{key:Mod+Z}} | Kumoaa viimeisen komennon |
| {{key:Mod+Y}} tai {{key:Mod+Shift+Z}} | Tekee uudelleen |
| {{key:Mod+A}} | Valitsee kaikki muokattavat kohteet avoimella välilehdellä ({{cmd:SELECTALL}}). Jos komentoriville on kirjoitettu jotakin, se valitsee tuon tekstin |
| {{key:Delete}} | Poistaa valitut kohteet ({{cmd:ERASE}}), ellei komentoriville ole kirjoitettu jotakin |
| {{key:Backspace}} | Poistaa valitut kohteet, kun komentorivillä ei ole kohdistinta; komentorivillä se poistaa kirjoitetun |
| {{key:Esc}} | Kun komentoa ei ole käynnissä: tyhjentää valinnan ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Tallentaa kopion piirustuksen muodossa (DWG tai DXF) |
| {{key:Mod+Shift+S}} | Tallenna nimellä: valitse DWG tai DXF, ja tallenna kopio |
| {{key:Mod+O}} | Avaa DWG- tai DXF-tiedoston |
| {{key:Mod+P}} | Plottaa PDF:ksi |

Kumoa, tee uudelleen, valitse kaikki ja plottaa eivät tee mitään, kun komento on käynnissä: paina ensin {{key:Esc}}.

## Kopioi, leikkaa ja liitä

| Näppäin | Mitä se tekee |
|---|---|
| {{key:Mod+C}} | Kopioi valinnan leikepöydälle ({{cmd:COPYCLIP}}). Jos mitään ei ole valittu, CadCraft pyytää kohteita |
| {{key:Mod+X}} | Leikkaa: kopioi valinnan ja poistaa sen sitten ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Liittää: kopio seuraa osoitinta; napsauta tai kirjoita piste, jotta se asetetaan ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Liitä samaan paikkaan: kopioidun paikan koordinaatteihin ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Monista: valinnan kopio liikkuu osoittimen mukana; napsauta asettaaksesi sen, {{key:Esc}} ei jätä mitään ({{cmd:DUPLICATE}}) |

Samat toiminnot ovat työkalurivin {{ui:Muokkaus}}-ryhmässä ({{ui:Kopioi}}, {{ui:Liitä}}) ja sen {{ui:Lisää}}-valikossa. Kun toinen komento on käynnissä, lopeta se tai paina ensin {{key:Esc}}; jos {{key:Mod+V}} tai {{key:Mod+D}} painetaan uudelleen, kun kopio seuraa osoitinta, aloitetaan alusta. Kun komentoriville on kirjoitettu jotakin tai komento kysyy tekstiä, nämä näppäimet kopioivat, leikkaavat ja liittävät sen tekstin. Katso [Kopioi, liitä ja monista](topic:copy-paste).

## Kytkimet

| Näppäin | Kytkin | Tilarivin painike |
|---|---|---|
| {{key:F3}} | Kohteen tartunnat päälle tai pois | {{ui:Tartunta}} |
| {{key:F7}} | Ruudukko päälle tai pois | {{ui:Ruudukko}} |
| {{key:F8}} | Ortogonaali päälle tai pois | {{ui:Ortogonaali}} |
| {{key:F10}} | Napaseuranta päälle tai pois | {{ui:Napa}} |
| {{key:F11}} | Kohteen tartuntaseuranta päälle tai pois | {{ui:Seuranta}} |
| {{key:F12}} | Dynaaminen syöttö päälle tai pois | {{ui:Dyn}} |

:::mac
Macissa F3, F7 ja F8 ovat yleensä Mission Control- ja medianäppäimiä. Pidä **fn** painettuna niiden kanssa, tai ota käyttöön vakiotoimintoiset F-näppäimet järjestelmäasetuksissa, kuten kohdassa [Näppäimet, hiiret ja kosketuslevyt](common:keys) kuvataan. Tilarivin painikkeet toimivat aina.
:::

:::firefox
Firefoxissa F7 voi myös kysyä, otetaanko käyttöön selaussiirtymä (caret browsing). Valitse **Ei**, ja käytä {{ui:Ruudukko}}-painiketta, jos kysymys tulee yhä.
:::

## Ohje

| Näppäin | Mitä se tekee |
|---|---|
| {{key:F1}} | Avaa tai sulkee tämän ohjeen piirustuksen viereen. Se toimii myös komennon ollessa käynnissä, eikä se koskaan mene komentoriville. |
| {{key:Esc}} | Kun kohdistin on ohjepaneelissa: tyhjentää haun tai sulkee paneelin |

Yläpalkin {{ui:Ohje}}-painike tekee saman kuin {{key:F1}}. Kun kirjoitat ohjeen hakukenttään, mikään ei mene komentoriville. Napsauta piirustusta, niin näppäimet palautuvat CadCraftille; paneeli pysyy auki sen vieressä.

:::mac
Macin näppäimistöllä pidä **fn** painettuna ja paina F1, tai napsauta {{ui:Ohje}}-painiketta.
:::

## Näyttö

| Näppäin | Mitä se tekee |
|---|---|
| {{key:Ctrl+Shift+F}} | Vaihtaa tavallisen, koko näytön ja koko näytön tilan, jossa palkit on piilotettu. Tämä käyttää Control-näppäintä kaikilla tietokoneilla, myös Macilla. |
| {{key:Left}} {{key:Right}} | Kun piirustuksen alla oleva välilehti on kohdistettuna: edellinen tai seuraava välilehti |

Koko näytön tilassa selain saattaa käyttää ensimmäisen {{key:Esc}}-painalluksen koko näytöstä poistumiseen. Paina {{key:Esc}} uudelleen peruuttaaksesi komennon.

## Valintaikkunat

| Näppäin | Mitä se tekee |
|---|---|
| {{key:Esc}} | Sulkee valintaikkunan ({{ui:Plottaa PDF:ksi}}, tai kysymyksen, kuten ”Tallentamattomat muutokset”, jossa se tarkoittaa {{ui:Peruuta}}) |
| {{key:Tab}} | Siirtyy valintaikkunan asetusten ja painikkeiden välillä |

Kun valintaikkuna on auki, piirustuksen näppäimet ovat pois käytöstä.

## Paneelin kentät

Oikean tai vasemman paneelin laatikossa:

| Näppäin | Mitä se tekee |
|---|---|
| {{key:Enter}} | Ottaa arvon käyttöön ja poistuu laatikosta |
| {{key:Esc}} | Palauttaa vanhan arvon ja poistuu laatikosta |
| {{key:Tab}} | Ottaa arvon käyttöön ja siirtyy seuraavaan laatikkoon |

Kun laatikossa on kohdistin, kirjaimet kirjoittuvat siihen eivätkä komentoriville.

## Hiiri

| Toiminto | Mitä se tekee |
|---|---|
| Napsautus | Valitsee pisteen, kun komento sitä pyytää; valitsee kohteen, kun komento pyytää kohteita; muulloin valitsee kohteen tai otteen |
| Shift+napsautus | Poistaa valitun kohteen valinnasta ([Asetukset](topic:settings)-kohdassa {{ui:Kohteiden napsautus}} asetettuna {{ui:Korvaa valinnan}}-tilaan; lisää sen valintaan). Pisteen valinnan aikana: ohittaa kohteen tartunnat tässä napsautuksessa |
| Napsautus tyhjälle alueelle ja toinen napsautus | Valintaruutu: vasemmalta oikealle on ikkuna, oikealta vasemmalle leikkaava |
| Vetäminen tyhjälle alueelle | Lasso: oikealle ensin vetäminen on ikkuna, vasemmalle ensin leikkaava; {{key:Space}} vetäessä kiertää ikkunan, leikkaavan ja aidan välillä; {{key:Esc}} pudottaa sen (LASSOMODE 0 tai Asetukset palauttaa suorakulmion) |
| Vetäminen TRIM- tai EXTEND-komennossa kappaleiden läpi | Typistää (tai pidentää) jokaisen kappaleen, jonka polku ylittää; pidä {{key:Shift}} painettuna toista vaihtoehtoa varten |
| Otteen vetäminen | Siirtää otetta (tai napsauta otetta ja sitten paikkaa, johon se menee) |
| Tekstin kaksoisnapsautus | Valitsee sen ja asettaa kohdistimen oikean paneelin {{ui:Teksti}}-laatikkoon |
| Oikea napsautus | Enter. Otteen siirron tai valintaruudun aikana: peruuttaa sen |
| Oikean painikkeen vetäminen | Panoroi |
| Rulla | Zoomaa sisään ja ulos ristikon kohdalla |
| Rullan vetäminen (keskipainike) | Panoroi |
| Rullan kaksoisnapsautus | Zoomaa koko piirustukseen (laajuus) |
| DWG- tai DXF-tiedoston pudottaminen piirustukseen | Avaa sen |

Kosketuslevyllä tai kosketusnäytöllä katso [Hiiri, kosketuslevy ja kosketus](topic:mouse-trackpad-touch).

## Selaimen pitämät näppäimet

{{key:Mod+N}}, {{key:Mod+W}} ja {{key:Mod+T}} kuuluvat aina selaimelle. CadCraft ei käytä niitä: uuden piirustuksen saat painikkeesta {{ui:Uusi}} tai kirjoittamalla `NEW`. CadCraftin leikepöytä on oma: {{key:Mod+C}} ja {{key:Mod+V}} kopioivat kohteita CadCraft-piirustusten ja -välilehtien välillä, eivät muihin ohjelmiin tai niistä.

:::mac
Jos {{key:Mod+Y}} avaa selaimen historian eikä tee uudelleen, käytä {{key:Mod+Shift+Z}} tai {{ui:Tee uudelleen}}-painiketta.
:::

## Missä Siirrä on

Siirrä on komento `MOVE` (näppäin {{key:M}}): valitse kohteet, sitten peruspiste ja toinen piste tai kirjoitettu etäisyys. `ALIGN` ja `DISTRIBUTE` ovat myös käytettävissä. BimCraft käyttää samoja nimiä samoihin tehtäviin rakennuselementeillä, mutta sen {{key:M}} on Mittaa: sen Siirrä on {{key:Shift+M}}.
