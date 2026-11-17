---
title: Kuvat piirustuksessa
summary: Sijoita PNG- tai JPEG-kuva, leikkaa se suorakulmioon tai monikulmioon, näytä DWG:n käyttämät kuvat ja tulosta ne terävinä.
keywords: pastearea, parea, kopioi alue, kopioitu alue, markupcraft, todellinen koko, todellinen koko, peite, ole, ole2frame, upotettu kohde, liitä kuva, liitä kuvakaappaus, ctrl+v, leikepöydän kuva, kuvakaappaus, kuva, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, valokuva, rasteri, imagedef, xref, plot, pdf, resoluutio
from: 4025ac97
---

## Mitä tehdään

Yrityksen logo sijoitetaan piirustusotsikkoon, leikataan haluttuun osaan, ja PDF, jossa se tulostuu omalla resoluutiollaan.

## Sijoita kuva

1. Kirjoita {{cmd:IMAGEATTACH}} (tai `IAT`) ja paina {{key:Enter}}. Valitse PNG- tai JPEG-tiedosto.
2. Kohdassa `Specify the lower-left corner` napsauta tai kirjoita piste.
3. Kohdassa `Specify its width` anna leveys piirustusyksikköinä. Paina {{key:Enter}} säilyttääksesi tarjotun leveyden: yksi yksikkö pikseliä kohti, tai leveys, jonka annoit tälle tiedostolle viimeksi (kehote kertoo, mikä).
4. Kohdassa `Specify its rotation angle` paina {{key:Enter}}, jos kiertoa ei tarvita.

Kuva on yksi kohde: valitse se kehyksestään ja siirrä, kopioi, kierrä, skaalaa tai poista se kuten mitä tahansa lohkoa.

:::note
Kuvatiedosto pysyy piirustuksen yhteydessä, kun piirustus on auki. Tallennettu DWG nimeää tiedoston, kuten muutkin ohjelmat tekevät; se ei sisällä kuvapikseleitä. Pidä kuva piirustuksen vieressä.
:::

## Liitä kuvakaappaus tai kopioitu kuva

1. Kopioi kuva (kuvakaappaus {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=kuvakaappaustyökalusi}}, tai Kopioi kuva toisesta ohjelmasta tai selaimesta).
2. Osoita kohtaa piirustuksessa, johon kuvan pitää mennä, ja paina {{key:Mod+V}}.

Kuvan vasen alakulma osuu osoittimeen (tai näkymän keskelle), ja sen leveys on 40 % siitä leveydestä, mitä näet. Siirrä, skaalaa ja leikkaa sitä kuten mitä tahansa kuvaa. Sen nimi on piirustuksen nimi ja sen perässä `-picture-1.png` (sitten `-2` …), ja historia kertoo sen. {{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Liitä kuva}} tekee saman valikosta (selain voi kysyä ensin).

Tallennettu DWG säilyttää vain kuvatiedoston nimen, joten piirustuksen tallennus tallentaa kuvan myös omana tiedostonaan. Pidä molemmat samassa kansiossa: piirustus näyttää kuvan sieltä. Selaimessa se on toinen lataus, ja historia kertoo siitä. Jos leikepöydällä on vain CadCraft-kohteita, {{key:Mod+V}} liittää ne kuten ennenkin.

## Liitä MarkupCraftissa kopioitu alue

{{ui:Kopioi alue}} MarkupCraftissa kopioi osan arkista kuvana, joka tietää omat mittansa. CadCraft liittää sen samankokoisena.

1. MarkupCraftissa kopioi alue (suorakulmio, ympyrä tai vapaamuotoinen muoto; valitse {{ui:Kopioi peitteenä}}, jos haluat nähdä piirustuksesi sen läpi).
2. CadCraftissa paina {{key:Mod+V}}, tai kirjoita {{cmd:PASTEAREA}} (tai `PAREA`), tai valitse {{ui:Muokkaus}} › {{ui:Lisää}} › {{ui:Liitä kopioitu alue}}.
3. Kohdassa `Specify the lower-left corner of the copied area` napsauta tai kirjoita piste. Alueen kokoinen kehys seuraa osoitinta.

Näin suureksi se tulee:

- **Arkilla oli piirustusmittakaava:** todellisessa koossa piirustuksen yksiköissä (1:50-yksityiskohta 2 m pitkästä portaasta on 2 m pitkä metripiirustuksessa, 78.74 tuumaa tuumapiirustuksessa). Muuta ei kysytä.
- **Arkilla ei ollut mittakaavaa:** CadCraft kertoo sen koon paperilla ja pyytää mittakaavaa: kirjoita `100` 1:100-arkille, paina {{key:Enter}} paperikoon käyttämiseksi, tai kirjoita `P`, napsauta kahta pistettä liitetyssä kuvassa ja kirjoita, kuinka kaukana ne todellisuudessa ovat toisistaan (kuten {{cmd:SCANSCALE}}-komento tekee). Vasen alakulma pysyy siinä, mihin asetit sen.

Piirustus ilman yksiköitä ottaa millimetrit, kuten PDF-pohjapiirros. Peite säilyttää paperinsa läpinäkyvänä ja alkaa yhtä himmeänä kuin kopioitaessa; ympyrän tai vapaamuotoisen muodon ulkopuolella se on myös läpinäkyvä. Liitetty alue on kuva kuten muutkin: siirrä, kierrä, skaalaa, leikkaa tai poista sitä. Koko liittäminen on yksi kumoamisvaihe. DWG:nä tallennettuna se on IMAGE, jolla on oma himmeytensä ja läpinäkyvyytensä.

{{key:Mod+V}} liittää alueen, kun leikepöydän kuva on alueen, tai kun alue kopioitiin jonkin CadCraftissa kopioidun jälkeen (ja viimeisen 6 tunnin sisällä). Muuten se liittää kuten ennen. {{cmd:PASTEAREA}} liittää viimeksi kopioidun alueen milloin tahansa.

## Näytä DWG:n käyttämät kuvat

DWG tallentaa vain, missä sen kuvat olivat, joten CadCraft näyttää jokaisen kehyksenä sen tiedostonimen kanssa.

1. Kirjoita {{cmd:IMAGE}} (tai `IM`). Komentorivi luettelee jokaisen kuvatiedoston ja sen, näkyykö se.
2. Valitse tiedostot (useita kerralla). Tiedosto, jonka nimessä on piirustuksen nimeämä tiedosto, lasketaan myös, koska viennit lisäävät usein projektin etuliitteen.

## Leikkaa kuva

1. Kirjoita {{cmd:IMAGECLIP}} (tai `ICL`) ja valitse kuva.
2. Valitse `R` ja napsauta kahta kulmaa, tai `P` ja napsauta monikulmion pisteitä, ja paina sitten {{key:Enter}}. `D` poistaa leikkauksen.

## Tulosta kuvat

Kuvat menevät PDF:ään kuvina, omalla resoluutiollaan ja viivojen alla. {{ui:Plottaa}}-valintaikkunassa {{ui:Kuvat}} voi rajoittaa ne 600, 300 tai 150 dpi:hin, jotta tiedosto pienenee. JPEG menee sellaisenaan.

## Mihin mikäkin tallentuu

| Muoto | Kuvat |
|---|---|
| DWG (kaikki versiot) | Kuvina (IMAGE), leikkauksineen |
| DXF | Kehyksinä tiedostonimineen; tallennus kertoo tämän |

## Muiden ohjelmien kohteet (OLE)

Piirustuksessa voi olla kohteita, jotka toinen ohjelma on tehnyt, kuten kuva maalausohjelmasta tai taulukkolaskennan alue (OLE-kohteet). CadCraft ei aja tai muokkaa niitä, eikä voi lisätä uusia. Se tekee seuraavaa:

- **DXF:ssä** OLE-kohde avautuu kehyksenä. Jos kohde tallensi kuvan itsestään ja se on bittikartta, kuva piirretään kehyksen sisään; muuten kehyksessä on kohteen tyypin nimi, kuten ”Microsoft Excel Worksheet (OLE)”. Kehyksen voi siirtää, kopioida ja poistaa kuten lohkon. {{cmd:SAVEAS}} DXF 2000 -muotoon kirjoittaa sen takaisin OLE-kohteena, datan ennallaan.
- **DWG:ssä** kohteet säilytetään ja kirjoitetaan takaisin, kun tallennat DWG-muodossa, tavu tavulta, mutta niitä **ei näytetä**: DWG säilyttää kohteen paikan omassa datassaan, eikä CadCraft lue sitä vielä. Historia kertoo, kuinka monta säilytettiin. Kirjoita {{cmd:OLELIST}} nähdäksesi, mitä ne ovat (tyyppi, koko, tallensiko kukin kuvan), ja laittaaksesi kopion kuvasta haluamaasi kohtaan: **Sijoita** kysyy numeron, vasemman alakulman ja leveyden, ja piirtää kehyksen, jossa on kuva. Kopio on kehys, jonka voi siirtää tai poistaa; alkuperäinen kohde pysyy piirustuksessa ja kirjoitetaan takaisin tallennuksessa.
- DXF:stä tuotu kohde tallennetaan DWG:hen vain kehyksenä ja nimenä; historia kertoo tämän. Tallenna DXF 2000 -muotoon säilyttääksesi kohteen itsensä.
- Metatiedostoina olevia kuvia (joita monet ohjelmat tallentavat) ei piirretä: sen sijaan näkyvät kehys ja nimi.

## Yleisiä virheitä

| Näet | Syy | Korjaus |
|---|---|---|
| Kehys tiedostonimineen | CadCraft ei löydä tiedostoa | {{cmd:IMAGE}}, valitse sitten tiedosto |
| ”Tämä ei ole kuva” | Valittu kohde ei ole kuva | Valitse kuvan kehys |
