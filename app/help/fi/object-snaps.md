---
title: Tartu kohteiden pisteisiin
summary: Käytä kohteen tartuntoja, Ortogonaalia ja ruudukkoa valitaksesi hiirellä tarkkoja päätepisteitä, keskikohtia, keskipisteitä ja leikkauspisteitä.
keywords: osnap, kohteen tartunta, päätepiste, keskikohta, keskipiste, leikkauspiste, kohtisuora, kvadrantti, lähin, solmu, lisäys, ortogonaali, ruudukko, f3, f8, f7, napaseuranta, napa, polarang, kohteen tartunnan seuranta, otrack, seuranta, f10, f11
from: 3cf17f94
---

## Mitä tehdään

Suorakulmio sen kahdella lävistäjällä, ympyrä, jonka keskipiste on siinä kohdassa, missä lävistäjät leikkaavat, sekä viiva yhden sivun keskikohdasta ympyrälle. Jokainen piste valitaan hiirellä, ja jokainen piste on tarkka.

## Miten tartunta toimii

Kun komento pyytää pistettä, CadCraft etsii tartuntapisteitä noin 10 pikselin päästä ristikosta. Kun se löytää sellaisen, ilmestyy merkki ja nimi (”Päätepiste”, ”Leikkauspiste”), ja napsautus osuu **täsmälleen** tuohon pisteeseen, ei siihen kohtaan, johon ristikko osui.

Tartunnat ovat päällä, kun tilarivin {{ui:Tartunta}} on painettuna. {{key:F3}} kytkee ne päälle ja pois.

Käytettävissä olevat tartunnat ovat:

| Tartunta | Osuu kohtaan |
|---|---|
| Päätepiste | Viivojen, kaarten ja murtoviivan osuuksien päät |
| Keskikohta | Viivojen, kaarten ja murtoviivan osuuksien keskikohta |
| Keskipiste | Ympyröiden ja kaarten keskipiste sekä murtoviivan kaariosuuksien keskipiste |
| Kvadrantti | Ympyröiden ja kaarten 0, 90, 180 ja 270 asteen pisteet |
| Leikkauspiste | Kohta, jossa kaksi kohdetta leikkaa toisensa |
| Kohtisuora | Kohteen piste, joka on kohtisuorassa viimeisimpään pisteeseen nähden (tarvitsee peruspisteen) |
| Tangentti | Ympyrän tai kaaren piste, jonka viimeisimmästä pisteestä lähtevä viiva koskettaa juuri ja juuri. Kun viimeistä pistettä ei vielä ole (viivan ensimmäinen piste), merkki sanoo ”lykätty”: koskettava piste lasketaan, kun seuraava piste tunnetaan, joten viiva tangentista tangenttiin koskettaa molempia ympyröitä |
| Lähin | Lähin piste mistä tahansa kohteesta |
| Solmu | Pistekohteet |
| Lisäys | Tekstin ja lohkoviitteiden lisäyspiste |

Kaikki ovat oletuksena päällä paitsi Tangentti ja Lähin. Lähin voittaa usein, kun haluat jotain muuta; kytke Tangentti päälle, kun tarvitset sitä.

## Valitse tartuntasi

1. Napsauta tilarivin {{ui:Tartunta}}-painikkeen vieressä olevaa pientä nuolta. Luettelo {{ui:Kohteen tartunnat}} aukeaa.
2. Valitse tai poista tartuntoja. Muutokset tulevat voimaan heti.
3. Sulje luettelo napsauttamalla nuolta uudelleen.

CadCraft muistaa valintasi sekä {{ui:Ruudukko}}-, {{ui:Ortogonaali}}- ja {{ui:Tartunta}}-asetuksesi tässä selaimessa.

## Vaiheet

1. Kirjoita `REC` ja paina {{key:Enter}}.
2. Kirjoita `0,0` ja paina {{key:Enter}}.
3. Kirjoita `@4000,3000` ja paina {{key:Enter}}. Suorakulmio ilmestyy.
4. Napsauta {{ui:Laajuus}}.
5. Kirjoita `L` ja paina {{key:Enter}}.
6. Siirrä ristikko vasempaan alakulmaan. Merkki näyttää ”Päätepiste”. Napsauta.
7. Siirrä oikeaan yläkulmaan, kunnes ”Päätepiste” näkyy. Napsauta.
8. Paina {{key:Enter}} lopettaaksesi viivan.
9. Paina {{key:Enter}} uudelleen toistaaksesi {{cmd:LINE}}-komennon, ja piirrä toinen lävistäjä oikeasta alakulmasta vasempaan yläkulmaan samalla tavalla.
10. Kirjoita `C` ja paina {{key:Enter}} aloittaaksesi ympyrän.
11. Siirrä ristikko kohtaan, jossa lävistäjät leikkaavat. Merkki näyttää ”Leikkauspiste”. Napsauta.
12. Kirjoita `800` ja paina {{key:Enter}}.

Näet ympyrän, jonka keskipiste on tarkasti leikkauskohdassa.

13. Kirjoita `L` ja paina {{key:Enter}}.
14. Siirry suorakulmion vasemman sivun keskikohtaan, kunnes näkyy ”Keskikohta”. Napsauta.
15. Siirrä ristikko ympyrän päälle, sen vasemmalle puolelle. Merkki näyttää ”Kohtisuora” tai ”Kvadrantti”; tässä molemmat ovat sama piste. Napsauta.
16. Paina {{key:Enter}}.

Uusi viiva lähtee vasemman sivun keskikohdasta ja pysähtyy tarkasti ympyrälle.

## Ohita tartunta yhdeltä napsautukselta

Pidä {{key:Shift}} pohjassa napsauttaessasi. Kohteen tartunnat ohitetaan tuon napsautuksen ajan, ja piste osuu tarkasti ristikkoon (tai Ortogonaalin suuntaan, jos Ortogonaali on päällä).

## Ortogonaali

{{ui:Ortogonaali}} ({{key:F8}}) pitää seuraavan pisteen suorassa vaakasuunnassa tai pystysuunnassa peruspisteestä. Se koskee napsautuksia ja suoraa etäisyyssyöttöä (komentokehotteeseen kirjoitettua pelkkää lukua). Kohteen tartunnat voittavat Ortogonaalin: jos tartuntamerkki näkyy, napsautus menee tartuntaan.

## Napaseuranta

{{ui:Napa}} ({{key:F10}}) on Ortogonaali useammilla kulmilla. Kun komennolla on peruspiste (viivan viimeinen piste, siirron peruspiste), osoitin asettuu linjaan, kun se tulee lähelle sädettä peruspisteestä napa-askeleen monikertaan: näkyy pisteviiva ja ristikon vieressä nimike, joka kertoo esimerkiksi `Polar: 1200 < 30°`. Napsauta käyttääksesi pistettä, tai kirjoita etäisyys: `1200` menee tarkasti 1200 pituuden päähän sädettä pitkin.

Askel on 90° kunnes muutat sitä: kirjoita {{cmd:POLARANG}}, paina {{key:Enter}} ja kirjoita `30` (tai 45, 22.5, 15 …). Napa ja Ortogonaali sulkevat toisensa pois: toisen kytkeminen päälle kytkee toisen pois.

## Kohteen tartuntojen seuranta

{{ui:Seuranta}} ({{key:F11}}) asettaa osoittimen linjaan tartuntapisteiden kanssa, joiden päällä olet levännyt. Näin voit valita pisteen, joka on samalla tasolla yhden kulman kanssa ja korkeammalla toisen kanssa, ilman apuviivoja.

1. Kytke {{ui:Tartunta}} ja {{ui:Seuranta}} päälle ja aloita komento, joka pyytää pistettä (`L`).
2. Lepää osoitin tartuntapisteen, esimerkiksi kulman, päällä puoli sekuntia napsauttamatta. Pieni risti merkitsee sen: piste on otettu. Lepää uudelleen sen päällä pudottaaksesi sen.
3. Siirrä osoitinta suoraan siitä poispäin, vaaka- tai pystysuunnassa. Pisteviiva seuraa osoitinta, ja nimike sanoo `Track: 600 < 90°`. Napsauta tai kirjoita etäisyys.
4. Ota toinen piste ja siirry kohtaan, jossa toisen pisteen kautta kulkeva pystysuora kohtaa toisen pisteen kautta kulkevan vaakasuoran: osoitin tarttuu siihen leikkauspisteeseen (`Track: where two lines meet`).

Kun {{ui:Napa}} on myös päällä, otetut pisteet seuraavat jokaista napakulmaa. Pisteitä säilytetään enintään seitsemän, kunnes komento päättyy. {{key:Shift}} kytkee seurannan pois yhdeltä napsautukselta, samoin kuin tartunnat.

## Ruudukko

{{ui:Ruudukko}} ({{key:F7}}) näyttää piirustuksen takana viivaruudukon, jossa joka viides viiva on paksumpi; väli muuttuu zoomatessa. Se on vain opaste, kunnes kytket päälle {{ui:Ruudukkotartunta}} ({{key:F9}}): silloin napsautukset osuvat lähimpään ruudukkopisteeseen, ellei kohteen tartunta valitse pistettä ensin.

## Toimintonäppäimet tietokoneellasi

{{key:F9}} on Ruudukkotartunta, {{key:F10}} on Napa ja {{key:F11}} on Seuranta.

:::mac
Macissa F3, F7, F8 ja F9 ohjaavat usein Mission Controlia ja mediaa. Pidä **fn**-näppäintä pohjassa painaessasi näppäintä, tai ota käyttöön vakiotoimintonäppäimet, kuten kohdassa [Näppäimistö, hiiret ja kosketuslevyt](common:keys) kerrotaan. Tilarivin painikkeet toimivat aina.
:::

:::firefox
Firefox-selaimessa F7 on myös näppäin kursoriselaukseen. Jos Firefox kysyy, kytketäänkö kursoriselaus päälle, valitse **Ei**. Käytä {{ui:Ruudukko}}-painiketta, jos kysymys tulee uudelleen.
:::

:::touch
Kosketusnäytössä ei voi osoittaa ilman napsautusta, joten tartuntamerkki näkyy vain siinä kohdassa, johon sormi koskee. Zoomaa lähelle pieniä kohteita varten, tai kirjoita koordinaatit.
:::

## Yleisiä virheitä

- **Napsautus meni väärään pisteeseen.** Katso tartuntamerkin nimi ennen napsautusta: Päätepiste voittaa Keskikohdan, kun molemmat ovat lähellä. Zoomaa lähemmäs tai poista tarpeettomat tartunnat.
- **Merkki ei ilmesty.** {{ui:Tartunta}} on pois päältä, haluamasi tartunta on poistettu valinnasta, tai kohde on tasolla, joka on pois päältä tai jäädytetty.
- **Tartunnat tarttuvat väärään asiaan vilkkaassa piirustuksessa.** Zoomaa lähemmäs. Tartuntaetäisyys mitataan näytön pikseleinä, joten zoomaus pienentää sitä piirustuksessa.
- **Odotat, että Shift antaa suoran viivan.** CadCraft-ohjelmassa Shift kytkee tartunnat pois yhdeltä napsautukselta. Käytä suoria viivoja varten {{ui:Ortogonaali}}-toimintoa.
- **Odotat pisteiden osuvan ruudukkopisteisiin.** Kytke {{ui:Ruudukkotartunta}} ({{key:F9}}) päälle, tai kirjoita koordinaatit pyöreillä luvuilla.
