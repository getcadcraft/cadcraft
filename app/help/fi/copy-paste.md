---
title: Kopioi, liitä ja monista
summary: Kopioi kohteita leikepöydälle, liitä ne napsautettuun kohtaan tai samaan paikkaan, monista osoittimella ja tuo työ toisesta piirustuksesta tai välilehdeltä.
keywords: kopioi, leikkaa, liitä, liitä samaan paikkaan, monista, leikepöytä, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, piirustusten välillä, toinen välilehti, peruspiste
from: 4b9f29d3
---

## Mitä opit

Miten kopioidaan kohteita leikepöydälle ja liitetään ne napsautettuun kohtaan tai niiden omiin koordinaatteihin, monistetaan osoittimella, leikataan ja viedään toiseen piirustukseen. Kaikki tämä löytyy myös työkalurivin {{ui:Muokkaus}}-ryhmästä: {{ui:Kopioi}}, {{ui:Liitä}} ja {{ui:Lisää}}-valikko.

## Kopioi ja liitä napsautettuun kohtaan

1. Valitse kohteet: napsauta niitä tai vedä ikkuna.
2. Paina {{key:Mod+C}} tai napsauta {{ui:Kopioi}}-painiketta {{ui:Muokkaus}}-ryhmässä. Komentorivi kertoo, kuinka monta kohdetta kopioitiin. Ne jäävät valituiksi.
3. Paina {{key:Mod+V}} tai napsauta {{ui:Liitä}}. Kopio ilmestyy kohdistimeen, roikkuen kopioitujen kohteiden vasemmasta alakulmasta.
4. Napsauta kohtaa, johon kulma menee, tai kirjoita piste, kuten `2000,500`, ja paina {{key:Enter}}. Kohteen tartunta ja Ortho toimivat tavalliseen tapaan.

Liitetyt kohteet ovat valittuina, joten voit siirtää tai muuttaa niitä heti. Yksi {{key:Mod+Z}} kumoaa koko liittämisen.

:::tip
Haluatko, että kopio roikkuu valitsemastasi pisteestä, kuten seinän kulmasta? Kirjoita `COPYBASE`, napsauta peruspistettä, valitse kohteet ja paina {{key:Enter}}. Liittäminen sijoittaa sitten tuon pisteen sinne, minne napsautat. Jos haluat, että kaikki kopiot roikkuvat keskipisteestään vasemman alakulman sijaan, muuta {{ui:Liitoskohta}}-asetusta [CadCraft-asetuksissa](topic:settings).
:::

## Liitä samaan paikkaan

Paina {{key:Mod+Shift+V}} tai valitse {{ui:Lisää}}-valikosta {{ui:Liitä samaan paikkaan}}. Kopio sijoittuu täsmälleen samoihin koordinaatteihin, joista se kopioitiin, ilman napsautusta. Käytä sitä, kun viet kohteita toiseen piirustukseen samaan paikkaan tai arkilta toiselle arkille.

## Monista ja siirrä

1. Valitse kohteet.
2. Paina {{key:Mod+D}} tai valitse {{ui:Lisää}}-valikosta {{ui:Monista ja siirrä}}.
3. Kopio on alkuperäisen päällä ja liikkuu osoittimen mukana. Napsauta kohtaa, johon se menee. Voit myös kirjoittaa siirtymän, kuten `@0,-600`, tai etäisyyden kohti kohdistinta.

Jos painat {{key:Esc}} ennen napsautusta, mitään ei jää jäljelle. Monistus on yksi kumoamisvaihe eikä koske leikepöytään.

## Leikkaa

Paina {{key:Mod+X}} tai valitse {{ui:Lisää}}-valikosta {{ui:Leikkaa}}. Kohteet siirtyvät leikepöydälle ja poistuvat piirustuksesta yhdellä kumoamisvaiheella. Liitä ne takaisin painamalla {{key:Mod+V}} tai {{key:Mod+Shift+V}}.

## Piirustusten ja välilehtien välillä

Leikepöytä säilyttää kopionsa, kun avaat toisen piirustuksen, ja sitä jakavat kaikki tämän selaimen CadCraft-välilehdet. Kopioi yhdessä välilehdessä ja paina sitten {{key:Mod+V}} toisessa.

- Kohteiden käyttämät lohkot tulevat mukana. Jos piirustuksessa, johon liität, on jo saman niminen lohko, käytetään sen omaa määritelmää, kuten AutoCADissa.
- Kohteiden käyttämät tasot lisätään, ja niiden värit ja asetukset säilyvät.
- Kopiota ei skaalata uudelleen, kun kaksi piirustusta käyttää eri yksiköitä: CadCraft kertoo siitä, ja sen jälkeen voit käyttää {{cmd:SCALE}}-komentoa.
- Näkymäruudut pysyvät arkillaan; ne jätetään kopiosta pois.

:::note
Leikepöytä on CadCraftin oma. Et voi liittää CadCraft-kohteita toiseen ohjelmaan tai liittää toisesta ohjelmasta CadCraft-sovellukseen: tallenna sen sijaan DWG- tai DXF-muodossa. Hyvin suuri kopio voi olla liian suuri jaettavaksi välilehtien kesken; komentorivi kertoo silloin, että vain tämä välilehti voi liittää sen.
:::

## Yleisiä virheitä

- **{{key:Mod+V}} liitti tekstiä komentoriville.** Sinne oli kirjoitettu jotain, joten näppäimet toimivat tekstiin. Tyhjennä se painamalla {{key:Esc}}, ja paina sitten {{key:Mod+V}} uudelleen.
- **Mitään ei tapahtunut, ja tilarivi pyytää viemään nykyisen komennon loppuun.** Toinen komento on käynnissä. Paina ensin {{key:Esc}}.
- **Liitos osui kauas.** Kopio roikkuu kopioitujen kohteiden vasemmasta alakulmasta, ja se saattoi olla kaukainen kohde, jonka valitsit vahingossa. Käytä {{ui:Liitä samaan paikkaan}}-toimintoa tai kopioi komennolla `COPYBASE`.
- **”Mitään ei liitetty” syyn kanssa.** Toisen välilehden leikepöydälle jättämää sisältöä ei voitu lukea (se oli vioittunut tai muutettu käsin). Kopioi kohteet uudelleen.

Katso kaikki näppäimet kohdasta [Näppäimistö ja hiiri](topic:keyboard) ja jokainen kehote kohdasta [Komentoviite](topic:commands#clipboard).
