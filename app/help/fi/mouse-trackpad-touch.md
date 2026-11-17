---
title: Hiiri, kosketuslevy ja kosketus
summary: Miten zoomata, panoroida, napsauttaa oikealla painikkeella ja valita CadCraftissa rullahiirellä, Mac- tai PC-kosketuslevyllä tai kosketusnäytöllä, ja mitä selaimissa eroaa.
keywords: kosketuslevy, trackpad, magic mouse, kosketus, tabletti, ipad, panorointi, zoomaus, nipistys, oikea napsautus, kahden sormen, keskipainike, selain, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft on suunniteltu hiirelle, jossa on rulla. Kaikki toimii myös kosketuslevyllä, kunhan opit muutaman tavan. Kosketusnäytöt toimivat valintaan, joskin rajoitetusti.

## Rullahiiri

- **Zoomaus:** pyöritä rullaa. Piirustus zoomautuu ristikkäisen osoittimen kohdalta, joten osoita sitä, mitä haluat nähdä.
- **Panorointi:** pidä rulla painettuna ja vedä, tai vedä oikealla painikkeella.
- **Zoomaa kaikkeen:** kaksoisnapsauta rullaa tai napsauta {{ui:Laajuus}}.
- **Edelliseen näkymään:** napsauta {{ui:Edellinen}} Näkymä-ryhmästä tai kirjoita `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Sarja rullan askelia lasketaan yhdeksi näkymäksi, joten yksi {{ui:Edellinen}} kumoaa sen. Tallenna näkymät, joihin palaat, komennolla {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** napsauta oikealla painikkeella.

## Kosketuslevy

:::mac
- **Panorointi:** liikuta kahta sormea kosketuslevyllä mihin tahansa suuntaan: piirustus seuraa sormiasi. Voit myös vetää pitämällä kahden sormen napsautusta pohjassa (vetäminen oikealla painikkeella).
- **Zoomaus:** nipistä kahdella sormella. Zoomaus seuraa ristikkäistä osoitinta.
- **Oikea napsautus (Enter):** napsauta kahdella sormella. Jos mikään ei tapahdu, ota käyttöön ”Toissijainen napsautus” kohdassa **Järjestelmäasetukset**, sitten **Kosketuslevy**. Control-napsautus voi toimia CadCraftissa tavallisena napsautuksena oikean painikkeen sijaan, joten käytä kahden sormen napsautusta.
- **Zoomaa alueeseen:** napsauta Näkymä-ryhmässä {{ui:Ikkuna}} ja napsauta kahta kulmaa.
:::

:::windows linux
- **Panorointi:** liikuta kahta sormea kosketuslevyllä mihin tahansa suuntaan: piirustus seuraa sormiasi. Voit myös vetää pitämällä oikeaa painiketta pohjassa.
- **Zoomaus:** nipistä kahdella sormella. Zoomaus seuraa ristikkäistä osoitinta.
- **Oikea napsautus (Enter):** napsauta kahdella sormella tai kosketuslevyn oikeaa alakulmaa kosketuslevyn asetuksista riippuen.
- **Zoomaa alueeseen:** napsauta Näkymä-ryhmässä {{ui:Ikkuna}} ja napsauta kahta kulmaa.
:::

Välilyönnin pitäminen pohjassa ja vetäminen **ei** panoroi CadCraftissa: {{key:Space}} on Enter.

Rullahiiri zoomaa edelleen yksi askel kerrallaan. Kosketuslevy, joka lähettää vierityksen kokonaisina askelina kuten rulla, zoomaa kahden sormen vierityksellä panoroinnin sijaan: zoomaa ulos, osoita aluetta, jota haluat, ja zoomaa takaisin sisään. 3D-välilehti säilyttää omat kosketuslevyliikkeensä (katso [Mallin katselu 3D:ssä](topic:3d-solids#look-around)).

## Kosketusnäytöt ja tabletit

CadCraft lukee sormen hiiren napsautuksena:

- Napautus osoittaa pisteen tai kohteen tai valitsee.
- Sormen vetäminen tyhjällä alueella piirtää lassovalinnan (oikealle vetäminen ensin ikkunan, vasemmalle ensin leikkaavan; katso [Lassovalinta](topic:lasso-selection)).
- {{cmd:TRIM}}- ja {{cmd:EXTEND}}-komennoissa sormen vetäminen osien yli typistää tai pidentää ne kaikki.
- Valitun kohteen otteen vetäminen siirtää sen otetta (otteet ja poimintaruutu ovat sormelle suurempia).
- **Nipistä** kahdella sormella zoomataksesi sormien välisen pisteen ympärillä. Siirrä kahta sormea yhdessä **panoroidaksesi**. Toinen sormi peruuttaa sen, minkä ensimmäinen aloitti, joten nipistys ei jätä jälkiä.
- **Pitkä painallus** (pidä paikallaan noin puoli sekuntia) on oikea napsautus: {{key:Enter}}. Se lopettaa komennon, päättää valinnan tai toistaa viimeisen komennon.

Komentorivin alapuolelle ilmestyy **näppäinrivi**: {{ui:Esc}}, {{ui:Kumoa}}, {{ui:Tee uudelleen}}, merkit, jotka tabletin näppäimistö piilottaa (`@` `,` `<` `'` `"` `-`), {{ui:Tartunta}}, {{ui:Ortogonaali}}, näppäimistöpainike ja iso {{ui:Enter}}. Napauta näppäimistöpainiketta (tai komentoriviä) kirjoittaaksesi komennon tai luvun.

Kosketusnäytöllä ei ole kohdistusta ilman painamista, joten tartuntamerkit näkyvät vain sormen kohdalla.

:::touch
Käytät kosketusnäyttöä. Kaikkeen muuhun kuin pikaiseen katseluun kannattaa liittää näppäimistö sekä hiiri tai kosketuslevy, jolloin CadCraft on paljon helpompi käyttää.
:::

## Selaimet

CadCraft toimii samalla tavalla Chromessa, Edgessä, Firefoxissa ja Safarissa, Macilla, Windowsilla ja Linuxilla. Erot ovat pieniä:

| Aihe | Mitä tietää |
|---|---|
| DWG:n avaaminen | Suuret piirustukset kestävät muutaman sekunnin lukea kaikissa selaimissa; tilarivi näyttää sillä välin ”Luetaan …” |
| Lataukset | Jokainen selain päättää, minne lataukset menevät ja kysytäänkö ensin; katso [Selaimet ja tietokoneet](common:browsers) |
| Avaa tulostettavaksi | Avaa PDF uudessa välilehdessä. Jos selain estää ponnahdusikkunat, CadCraft lataa PDF:n sen sijaan |
| F7 | Firefox saattaa tarjota kursorinavigointia; valitse Ei |
| Poistuminen tallentamattomilla muutoksilla | Jokainen selain näyttää oman kysymyksensä ”Poistutaanko sivustolta?”, jota CadCraft ei voi muuttaa |

:::safari
Safarissa PDF, joka avataan {{ui:Avaa tulostettavaksi}}-painikkeella, saattaa näkyä välilehdessä tulostumatta: käytä **Tiedosto**-valikkoa ja sitten **Tulosta**.
:::

:::firefox
Firefox saattaa kysyä jokaisen latauksen kohdalla, mitä tehdä. Valitse tiedoston tallennus tai muuta tämä kerran Firefoxin asetuksista kohdasta Lataukset.
:::
