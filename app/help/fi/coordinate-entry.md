---
title: Koordinaattien ja etäisyyksien syöttö
summary: Kaikki tavat kirjoittaa piste, etäisyys, kulma tai luku CadCraftin komentoriville, esimerkkeineen.
keywords: dynaaminen syöttö, dyn, F12, Tab, koordinaatit, absoluuttinen, suhteellinen, napakoordinaatti, @, suora etäisyys, kulma, asteet, viimeisin piste, lastpoint, pisteiden kirjoittaminen, syöttö, laskutoimitukset, laskenta, laskin, cal, plus, murtoluku, lauseke
from: 7de9252d
---

## Pisteet

Kun komento pyytää pistettä, kirjoita jokin seuraavista ja paina {{key:Enter}}:

| Kirjoitat | Merkitys | Esimerkki |
|---|---|---|
| `x,y` | Absoluuttinen: mitattu origosta 0,0 | `2500,1200` |
| `#x,y` | Myös absoluuttinen (hyväksytään totuttelun vuoksi) | `#2500,1200` |
| `@dx,dy` | Suhteellinen: vaakasuunnassa ja pystysuunnassa viimeisimmästä pisteestä | `@600,0` |
| `@d<a` | Suhteellinen napakoordinaatti: etäisyys ja kulma viimeisimmästä pisteestä | `@1500<45` |
| `d<a` | Absoluuttinen napakoordinaatti: etäisyys ja kulma origosta | `3000<90` |
| yksi luku | Suora etäisyys: niin kauas peruspisteestä kohti ristikkoa | `1200` |
| `*x,y`, `@*dx,dy` | Maailmakoordinaatit, kun UCS on asetettu | `*0,0` |

Kun UCS on asetettu ({{cmd:UCS}}), `x,y`, `@dx,dy` ja kulma muodossa `d<a` mitataan UCS-akseleiden suuntaisesti. Katso [Käännä näkymää ja käytä omia koordinaatteja](topic:ucs-and-turned-view).

Voit myös napsauttaa piirustusta; objektitartunnat ja Ortogonaali koskevat napsautuksia.

Säännöt:

- Pilkku erottaa X:n Y:stä. Desimaalit kirjoitetaan pisteellä: `1250.75,300`.
- Negatiiviset arvot menevät vasemmalle ja alas: `@-600,0`.
- Älä kirjoita välilyöntejä: {{key:Space}} toimii kuten {{key:Enter}}.
- Luvut voivat käyttää eksponenttia: `1e3` on 1000.
- Yksikköjä ei kirjoiteta, eikä jalka- ja tuumamerkintää käytetä. Kirjoita pelkkiä lukuja piirustuksen yksiköissä.

## Viimeisin piste

`@` lasketaan **viimeisimmästä pisteestä, jonka annoit mistä tahansa pistekehotteesta**, missä tahansa komennossa: napsautus, tartunta tai kirjoitettu piste. Se muistetaan komentojen välillä, joten voit aloittaa uuden viivan `@0,500` päässä siitä, mihin edellinen päättyi. Ennen kuin olet antanut yhdenkään pisteen, `@` lasketaan pisteestä 0,0.

Joitakin tilanteita, joissa tällä on merkitystä:

- Komennossa {{cmd:COPY}} ensimmäisen kopion jälkeen viimeisin piste on kyseisen kopion piste. `@600,0` kahdesti sijoittaa kopiot 600 ja 1200 päähän alkuperäisestä.
- Mitoituksen sijoittamisen jälkeen viimeisin piste on kohta, johon sijoitit mitoitusviivan, ei mitoituksen päätepiste.

Kun epäröit, käytä absoluuttista pistettä, tartuntaa tai suoraa etäisyyttä.

## Suora etäisyyden syöttö

Pelkkä luku on etäisyys komennon **peruspisteestä** (pisteestä, josta kumiviiva alkaa) kohti ristikkoa:

1. Siirrä ristikkoa haluamaasi suuntaan.
2. Kirjoita etäisyys ja paina {{key:Enter}}.

Kun {{ui:Ortho}} on päällä, suunta tarttuu suoraan vaakasuoraan tai pystysuoraan, mikä tekee tästä nopeimman tavan piirtää suorakulmaisia seiniä. Jos peruspistettä ei ole tai ristikko on täsmälleen sen kohdalla, luku hylätään virheellä "Piste tai vaihtoehdon avainsana vaaditaan."

## Kulmat

- Asteina pelkkänä lukuna: `30`, `-45`, `112.5`.
- Mitataan vastapäivään positiivisesta X-suunnasta (oikealle osoittavasta): 0 on oikealla, 90 ylhäällä, 180 vasemmalla, 270 tai -90 alhaalla.
- Missä kulmaa kysytään (kierto, tekstin kulma), voit myös napsauttaa: kulma mitataan peruspisteestä napsautukseen. Ennen peruspistettä ensimmäinen napsautus asettaa sen, ja kehotteessa pyydetään toista pistettä.

## Etäisyydet

Missä etäisyyttä kysytään (säde, siirtymä, tekstin korkeus, skaalauskerroin):

- kirjoita positiivinen luku (jalka- ja tuumapiirustuksessa myös `12'6"` tai `6-1/2`: katso [Jalat ja tuumat](topic:units-papers-scales#feet-and-inches-and-fractions)), tai
- napsauta pistettä: etäisyys komennon peruspisteestä siihen, tai
- napsauta kahta pistettä, kun peruspistettä ei ole: kehote muuttuu muotoon "Määritä toinen piste".

"Vaatii positiivisen luvun tai kaksi pistettä." tarkoittaa, että arvo ei ollut luku tai se oli negatiivinen.

## Laskutoimitukset kirjoitetussa arvossa

Missä tahansa kirjoitetussa pituudessa, koordinaatissa, kulmassa tai luvussa (komentorivi, dynaaminen syöttö, Ominaisuudet-ruudut ja valintaikkunat) voit kirjoittaa laskutoimituksen merkeillä `+`, `-`, `*`, `/` ja sulkeilla sen sijaan, että laskisit arvon etukäteen:

| Kirjoitat | Antaa |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (jalka- ja tuumapiirustuksessa) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm piirustuksen yksiköissä (kun sen yksiköt on asetettu) |
| `@4+7/16,0` | piste 4.4375 viimeisimmästä pisteestä oikealle |
| `360/7` | 51.43 asteen kulma |

- Pituuteen kirjoitettu viiva on edelleen osa sitä: `4-7/16` on 4 7/16 ja `24'-6"` on 24 jalkaa 6 tuumaa. Jos haluat vähentää jalkamerkin jälkeen, viimeistele pituus ensin, `24'-0"-6"`, tai laita laskutoimitus sulkeisiin viivan ympärille välilyönneillä, `(24' - 6")`. Sulkeiden sisällä välilyönti on välilyönti; muualla se toimii kuten {{key:Enter}}.
- Luku, joka lisätään pituuteen, on piirustusyksiköissä. Kertominen tai jakaminen luvulla skaalaa pituuden. Kahden pituuden kertominen tuottaa pinta-alan, joten `2'*3'` hylätään.
- `abs`, `round`, `ceil` ja `floor` toimivat myös: `round(10/3)`.
- Laskutoimitus, jota ei voi lukea, hylätään ja kerrotaan, missä vika on, esimerkiksi "Laskutoimitus päättyy liian aikaisin (merkki 3): arvo puuttuu." Mitään ei koskaan lueta nollaksi. {{cmd:CAL}} tulostaa laskutoimituksen arvon.

## Dynaaminen syöttö

{{ui:Dyn}} ({{key:F12}}, tilarivillä) asettaa arvot ristikon viereen, kun komento kysyy pistettä.

- Ilman peruspistettä (viivan ensimmäinen piste) kaksi kenttää ovat **X** ja **Y**.
- Sen jälkeen ne ovat viimeisimmästä pisteestä **etäisyys** ja **kulma**.

Kirjoittaminen menee edelleen komentoriville. Ristikon vieressä oleva kenttä näyttää sen, ja kumiviiva seuraa sitä.

1. Kirjoita arvo: se menee korostettuun kenttään.
2. Paina {{key:Tab}} (tai pilkku X:n jälkeen). Arvo lukittuu (näkyy lihavoituna) ja seuraava kenttä korostuu. Lukittu etäisyys pitää kumiviivan yhtä pitkänä, kun tähtäät hiirellä.
3. Kirjoita toinen arvo tai pelkästään tähtää, ja paina {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} piirtää 50 suoraan ylös viimeisimmästä pisteestä.

Kun painat {{key:Enter}} yhden arvon jälkeen ilman {{key:Tab}}-näppäintä, se toimii suorana etäisyyden syöttönä. Jalat ja tuumat toimivat myös kentissä (`12'6"`). Etäisyys- ja kulmakehotteet (ympyrän säde, kierto) näyttävät arvonsa myös ristikon vieressä.

## Vaihtoehdot ja oletukset

- Vaihtoehdot näkyvät hakasulkeissa. Kirjoita vaihtoehdon isot kirjaimet (`D` kohteelle `[Diameter]`, `CL` kohteelle `CLose`) ja paina {{key:Enter}}. Sanan pidemmät alut toimivat myös (`DIA`).
- Oletus näkyy kulmasulkeissa, kuten `<500>`. Paina {{key:Enter}} tai napsauta hiiren oikealla painikkeella käyttääksesi sitä.

## Muut näppäimistöasettelut ja näppäimistön numeropuoli

Komennon nimet, lyhyet nimet ja vaihtoehtojen kirjaimet ovat latinalaisia kirjaimia. Kun käytössä on kreikkalainen, kyrillinen (venäjä, ukraina, valkovenäjä, serbia, makedonia, bulgaria), heprealainen, arabialainen, persialainen, thai- tai korealainen asettelu, asettelua ei tarvitse vaihtaa: kun kirjoittamasi sana ei sellaisenaan ole komento, lyhyt nimi tai vaihtoehto, CadCraft lukee sen painettujen näppäinten mukaan. Latinalaisen näppäimistön näppäin `L` käynnistää edelleen komennon LINE, ja näppäin `C` vastaa edelleen vaihtoehtoa Close, mitä kirjainta asettelu sille sitten antaakin. Komentorivin yläpuolella oleva vastaavien komentojen luettelo noudattaa samaa sääntöä. Teksti, jota kirjoitat kohtaan, joka pyytää tekstiä (sisältö komennolle {{cmd:TEXT}}, nimi), ei koskaan muutu.

Asetteluissa, joissa numeropuolen desimaalinäppäin antaa pilkun, tuo näppäin kirjoittaa desimaalipisteen komentoriville ja lukukenttiin, joten `12.5` voidaan kirjoittaa numeropuolelta. Pääkäyttöliittymän pilkkunäppäin erottaa edelleen `x,y`-muodon.

Molemmat voidaan kytkeä pois päältä kohdasta {{ui:Settings}}: {{ui:Commands on a non-Latin keyboard layout}} ja {{ui:Keypad decimal key}}.

## Koordinaattinäyttö

Tilarivi näyttää ristikon X- ja Y-arvot (UCS:ssä, kun se on asetettu) tartuntojen ja Ortogonaali-tilan jälkeen. Kun komennolla on peruspiste, se lisää `Δ`-merkin kanssa etäisyyden ja kulman siitä pisteestä, esimerkiksi `Δ 1500 < 30°`: luvut, jotka kirjoittaisit muodossa `@1500<30`.

Käytä {{cmd:ID}} tulostaaksesi pisteen koordinaatit ja {{cmd:DIST}} mitataksesi kahden pisteen välin.
