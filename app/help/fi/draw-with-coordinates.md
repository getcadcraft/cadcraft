---
title: Piirrä koordinaateilla
summary: Piirrä tarkka lattiapiirroksen ääriviiva kirjoittamalla absoluuttisia, suhteellisia ja napakoordinaatteja sekä suoralla etäisyyssyötöllä.
keywords: line, pline, murtoviiva, koordinaatit, suhteellinen, napa, absoluuttinen, suora etäisyys, @, pisteiden kirjoittaminen, tarkka, ortogonaali
from: 19e82350
---

## Mitä tehdään

L-muotoisen huoneen ääriviiva, 6000 x 4500 leikkauksella 2000 x 1500, piirretään tarkasti, sekä 30 asteen kulmassa oleva seinä. Käytät kaikkia neljää tapaa kirjoittaa piste. Työskentele millimetreissä: yksi piirustusyksikkö vastaa yhtä millimetriä.

Kaikkien muotojen pikaohje on kohdassa [Koordinaattien ja etäisyyksien syöttö](topic:coordinate-entry).

## Ennen aloittamista

1. Avaa CadCraft. Jos piirustus on auki, napsauta ensin {{ui:Uusi}}.
2. Paina {{key:Esc}}, jotta mitään ei ole valittuna. Oikea paneeli näyttää {{ui:Nykyiset asetukset}}.
3. Aseta {{ui:Yksiköt}} arvoon {{ui:Millimetrit}}. Mitään ei skaalata uudelleen; tämä vain kertoo arkeille ja tulosteille, mitä yksikkö tarkoittaa.

## Absoluuttiset koordinaatit: ensimmäinen piste

Absoluuttinen koordinaatti on sijainti, joka mitataan origosta ja kirjoitetaan muodossa `x,y`.

1. Kirjoita `L` ja paina {{key:Enter}}. Kehote on `Specify first point:`.
2. Kirjoita `0,0` ja paina {{key:Enter}}.

Viiva venyy nyt origosta ristikkoon. Tilarivin koordinaatit näyttävät etäisyyden ja kulman aloituspisteestä, kun liikutat osoitinta.

## Suhteelliset koordinaatit: @dx,dy

Suhteellinen koordinaatti kirjoitetaan muodossa `@dx,dy`: niin paljon vaakasuunnassa, niin paljon pystysuunnassa, viimeisimmästä pisteestä. Negatiiviset luvut menevät vasemmalle tai alas.

3. Kirjoita `@6000,0` ja paina {{key:Enter}}. 6000 pituinen viiva kulkee oikealle.
4. Kirjoita `@0,3000` ja paina {{key:Enter}}.
5. Kirjoita `@-2000,0` ja paina {{key:Enter}}.
6. Kirjoita `@0,1500` ja paina {{key:Enter}}.

Näet neljä toisiinsa liitettyä viivaa, jotka nousevat huoneen oikeaa sivua ylöspäin.

## Suora etäisyyssyöttö: pelkkä luku

Kun kirjoitat yhden luvun, CadCraft kulkee sen matkan ristikon suuntaan. Kytke Ortogonaali päälle, jotta suunta kiinnittyy vaakaan tai pystyyn.

7. Paina {{key:F8}} tai napsauta tilarivin {{ui:Ortogonaali}}. Tilarivi sanoo ”Ortogonaali päällä”.
8. Siirrä ristikko viimeisen pisteen vasemmalle puolelle. Kumiviiva pysyy vaakasuorana.
9. Kirjoita `4000` ja paina {{key:Enter}}. Viiva kulkee 4000 vasemmalle.
10. Siirrä ristikko viimeisen pisteen alapuolelle.
11. Kirjoita `4500` ja paina {{key:Enter}}. Olet palannut aloituspisteeseen.
12. Lopeta komento painamalla {{key:Enter}} tyhjällä kehotteella.

:::mac
F8 voi ohjata median toistoa Mac-näppäimistöllä. Pidä **fn**-näppäintä pohjassa ja paina F8, tai napsauta {{ui:Ortogonaali}}. Katso [Näppäimistö, hiiret ja kosketuslevyt](common:keys).
:::

Sinulla on nyt suljettu L-muotoinen ääriviiva, joka koostuu kuudesta erillisestä viivasta.

13. Napsauta {{ui:Laajuus}} nähdäksesi kaiken.

## Napakoordinaatit: @etäisyys<kulma

Napakoordinaatti kirjoitetaan muodossa `@etäisyys<kulma`. Kulmat ovat asteina, mitattuna vastapäivään positiivisesta X-suunnasta: 0 on oikealla, 90 ylhäällä, 180 vasemmalla ja 270 (tai -90) alhaalla.

14. Kirjoita `L` ja paina {{key:Enter}}.
15. Kirjoita `6000,0` ja paina {{key:Enter}} aloittaaksesi oikeasta alakulmasta.
16. Kirjoita `@2500<-30` ja paina {{key:Enter}}. 2500 pituinen viiva lähtee kulmasta, suuntautuen alas ja oikealle 30 astetta vaakatasosta alaspäin.
17. Lopeta komento painamalla {{key:Enter}}.

Napakoordinaatti ilman `@`-merkkiä, kuten `2500<30`, mitataan origosta eikä viimeisimmästä pisteestä.

## Sama ääriviiva yhtenä murtoviivana

Kuusi erillistä viivaa käy monessa työssä, mutta murtoviiva on yksi kohde: se siirtyy, mitataan ja valitaan kokonaisena. Käytä {{cmd:PLINE}}-komentoa samalla syötteellä.

1. Kirjoita `PL` ja paina {{key:Enter}}.
2. Kirjoita `0,-6000` ja paina {{key:Enter}} aloittaaksesi ensimmäisen ääriviivan alapuolelta.
3. Kirjoita `@6000,0` ja paina {{key:Enter}}.
4. Kirjoita `@0,3000` ja paina {{key:Enter}}.
5. Kirjoita `@-2000,0` ja paina {{key:Enter}}.
6. Kirjoita `@0,1500` ja paina {{key:Enter}}.
7. Kirjoita `@-4000,0` ja paina {{key:Enter}}.
8. Kirjoita `C` ja paina {{key:Enter}}. Murtoviiva sulkeutuu ja komento päättyy.
9. Napsauta uutta ääriviivaa. Oikea paneeli näyttää ”Murtoviiva”, sen {{ui:Kärkipisteet}}, {{ui:Pituus}} ja koska se on suljettu, sen {{ui:Ala}}.

Pinta-alan pitäisi näyttää 24000000 (neliömillimetriä, mikä on 24 neliömetriä).

## Piirtämisen vaihtoehdot

- {{cmd:LINE}}- ja {{cmd:PLINE}}-komennoissa kirjoita `U` ja paina {{key:Enter}}, niin viimeinen osuus peruutetaan poistumatta komennosta.
- {{cmd:LINE}}-komennossa `C` sulkee viivan takaisin ensimmäiseen pisteeseen, kun osuuksia on vähintään kaksi.
- {{cmd:PLINE}}-komennossa `A` vaihtaa kaariosuuksiin (jokainen kaari jatkuu sujuvasti edellisestä osuudesta), ja `L` vaihtaa takaisin viivoihin. Kaaritilassa sulkuvaihtoehto on `CL`.
- Kun painat {{key:Enter}} kohdassa `Specify first point:` komennossa {{cmd:LINE}}, aloitus tapahtuu viimeksi antamastasi pisteestä, joten voit jatkaa siitä, mihin jäit.

## Yleisiä virheitä

- **Kirjoitit `6000,0` tarkoittaen `@6000,0`.** Ilman `@`-merkkiä piste mitataan origosta eikä viimeisimmästä pisteestä, joten viiva lähtee odottamattomaan paikkaan. CadCraft-ohjelmassa `x,y` on aina absoluuttinen. Palauta kirjoittamalla `U` ja paina {{key:Enter}}.
- **Pilkku desimaalipisteenä.** Desimaalit kirjoitetaan pisteellä: `1250.5`. Pilkku erottaa aina X:n ja Y:n.
- **Suora etäisyys meni väärään suuntaan.** Pelkkä luku seuraa ristikkoa. Siirrä ristikko haluamallesi puolelle ennen kuin painat {{key:Enter}}, ja kytke {{ui:Ortogonaali}} päälle suorille viivoille.
- **”Vaaditaan piste tai valintasana.”** CadCraft ei ymmärtänyt kirjoittamaasi. Tarkista, onko luvun sisällä välilyöntejä tai puuttuuko pilkku, ja kirjoita se uudelleen.
- **Jalat ja tuumat.** CadCraft lukee vain tavallisia lukuja. Kirjoita `150`, kun tarkoitat 12'-6" tuumapiirustuksessa, tai `12.5` jalkapiirustuksessa.
