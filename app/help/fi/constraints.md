---
title: Rajoita piirustus
summary: Pidä viivat vaakasuorina, päät yhdessä ja mitat kiinteinä geometrisilla ja mittarajoitteilla, ja anna piirustuksen seurata, kun muutat mittaa.
keywords: rajoite, rajoitteet, parametrinen, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, vapausasteet, täysin rajoitettu
from: f8f21fa4
---

## Mitä teet

Levy, jonka leveyttä muutat yhdestä kohdasta: sen sivut pysyvät suorakulmaisina, yksi kulma pysyy paikallaan ja korkeus pysyy puolet leveydestä.

Rajoitteet toimivat viivoihin, murtoviivoihin, ympyröihin, kaariin ja pisteisiin {{ui:Malli}}-välilehdellä. Jokainen lisäämäsi rajoite on yksi kumoamisvaihe.

## Piirrä ja rajoita ääriviiva

1. Kirjoita `REC` ja paina {{key:Enter}}. Kirjoita `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Kirjoita `AUTOCONSTRAIN` ja paina {{key:Enter}}. Kirjoita `ALL`, {{key:Enter}}, ja paina sitten vielä {{key:Enter}}.

   Historiassa lukee "4 rajoitetta lisätty". Pienet ruudut, joissa on **H** ja **V**, ilmestyvät sivujen viereen: nämä ovat rajoitepalkit.
3. Kirjoita `GCFIX` ja paina {{key:Enter}}. Napsauta lähellä vasenta alakulmaa. Ruutu, jossa on ⊕, ilmestyy: tuo kulma pysyy paikallaan.

`AUTOCONSTRAIN` lisää yhtyvät rajoitteet kohtiin, joissa päät melkein kohtaavat, ja vaaka- tai pystyrajoitteet kohtiin, joissa viivat ovat melkein vaakasuorassa tai pystysuorassa. Kirjoita sen kehotteeseen `S`, jos haluat muuttaa, kuinka lähellä (aluksi 0.05 piirustusyksikköä ja 1°).

## Lisää mitat

1. Kirjoita `DCHORIZONTAL` ja paina {{key:Enter}}.
2. Napsauta lähellä vasenta alakulmaa ja sitten lähellä oikeaa alakulmaa.
3. Napsauta suorakulmion alapuolelle mittaviivaa varten.
4. Kehote näyttää `Dimension text <d1=100>`. Kirjoita `width=120` ja paina {{key:Enter}}.

   Suorakulmio on nyt 120 leveä, ja tunnisteessa lukee `width=120`.
5. Kirjoita `DCVERTICAL` ja paina {{key:Enter}}, kirjoita `O` ja paina {{key:Enter}}, ja napsauta sitten oikeaa sivua.
6. Napsauta sen oikealle puolelle, kirjoita `width/2` ja paina {{key:Enter}}.

   Se on 60 korkea. Tunnisteessa lukee `fx: d1=width/2`: lauseke ohjaa sitä.

Historia kertoo nyt, että ääriviiva on täysin rajoitettu. Jos haluat muuttaa sen kokoa, muuta `width`-arvoa (katso [Käytä parametreja ja yhtälöitä](topic:parameters)), tai kaksoisnapsauta tunnistetta `width=120`, kirjoita uusi arvo ja valitse {{ui:Käytä}}.

## Rajoitettujen kohteiden siirtäminen

Siirto, kierto, skaalaus, otteet ja Ominaisuudet-paneeli säilyttävät kaikki rajoitteet: siirtämäsi kohde pidetään paikallaan, ja muu seuraa. Kun rajoitteet eivät voi seurata, muokkausta ei tehdä ja historia kertoo syyn, esimerkiksi "Ei tehty: rajoitteet pitävät kyseisen kohteen paikallaan". Kohteen poistaminen poistaa sen rajoitteet mukana.

## Peilaa ja typistä rajoitettuja kohteita

- {{cmd:MIRROR}} kopioi peilattujen kohteiden väliset rajoitteet kopioihin. Tangentin puoli (mihin suuntaan se koskettaa) ja puoli, jolle etäisyys mitataan, lasketaan uudelleen peilatulle kopiolle, ja kopioidut mitat saavat omat nimensä, kuten liittämisessä. Kun `Erase source objects` on `Y`, rajoitteet jäävät peilatuille kohteille. Historia kertoo, kuinka monta siirtyi mukana.
- {{cmd:TRIM}} säilyttää viivan tai kaaren rajoitteet jäljelle jäävässä osassa: päähän kohdistuva rajoite siirtyy osaan, jolla on yhä kyseinen pää. Suuntasääntö ({{ui:Vaaka}}, {{ui:Pysty}}, {{ui:Yhdensuuntainen}}, {{ui:Kohtisuora}}) pätee jokaisessa osassa, ja kahden ulkopään välinen mitta mittaa niitä yhä. Rajoitteet, jotka pitivät leikattua osaa, tai pituus, jonka leikkaus muutti ({{ui:Yhtä suuri}}, kaaren kulma), poistuvat. Typistetty ympyrä säilyttää keskipiste- ja säderajoitteensa. Typistetyt murtoviivat menettävät omansa.

## Rajoitteet

| Komento | Säilyttää |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | viiva tai jana vaakasuorana tai pystysuorana (`2P`: kaksi pistettä vaaka- tai pystysuorassa) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | kaksi viivaa yhdensuuntaisina, kohtisuorina tai samalla suoralla |
| {{cmd:GCCOINCIDENT}} | kaksi pistettä yhdessä; `O`: piste viivalla, ympyrällä tai kaarella |
| {{cmd:GCTANGENT}} | viiva ja ympyrä tai kaari, tai kaksi niistä, koskettamassa toisiaan |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | kaksi ympyrää tai kaarta samalla keskipisteellä; kaksi pituutta tai kaksi sädettä yhtä suuret |
| {{cmd:GCSYMMETRIC}} | kaksi pistettä, viivaa tai ympyrää peilattuna viivan yli |
| {{cmd:GCFIX}} | piste (napsauta sen lähellä) tai koko kohde (`O`) paikallaan |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | etäisyys |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | säde, halkaisija, kulma kahden viivan välillä tai kaaren kulma |

{{cmd:GEOMCONSTRAINT}} ja {{cmd:DIMCONSTRAINT}} kysyvät, mikä niistä; {{ui:Rajoita}} ja {{ui:Mitoitus}} ryhmässä {{ui:Parametrinen}} suorittavat ne, ja {{ui:Lisää}} luettelee jokaisen. Kohta, johon napsautat, valitsee osan: napsautus päätteen, keskikohdan tai keskipisteen lähellä ottaa kyseisen pisteen; napsautus murtoviivalla valitsee sen alla olevan janan. Ensimmäinen kohde pysyy paikallaan, ja toinen siirtyy kohtaamaan sen.

Rajoite, joka on ristiriidassa muiden kanssa tai ei lisää mitään, koska muut rajoitteet jo määrittävät sen, hylätään viestillä, eikä mikään liiku.

## Näytä, valitse ja poista

- Napsauta rajoitepalkin ruutua (tai yhtyvää neliötä tai mittatunnistetta) valitaksesi rajoitteen; historia nimeää sen. Poista painamalla {{key:Delete}}.
- {{cmd:DELCONSTRAINT}} poistaa kaikki rajoitteet valituista kohteista.
- {{cmd:CONSTRAINTBAR}}: `S` näyttää kaikki palkit, `H` piilottaa ne; valitse ensin kohteet, jos haluat näyttää tai piilottaa niiden palkit. {{ui:Lisää}}-valikossa ovat {{ui:Näytä rajoitepalkit}} ja {{ui:Piilota rajoitepalkit}}.
- {{cmd:DCDISPLAY}} näyttää tai piilottaa mittarajoitteet. Niitä ei koskaan tulosteta.
- {{cmd:DCCONVERT}} muuttaa viivoille, ympyröille ja kaarille piirretyt mitat mittarajoitteiksi.

:::note
Jos olet käyttänyt AutoCADin parametrista piirtämistä, komentojen nimet ja kehotteet ovat samat. Rajoitteet ja parametrit tallennetaan DWG- ja DXF-tiedostoihin muodossa, jonka muut ohjelmat jättävät huomiotta; katso [Tiedostot](topic:files#constraints-in-files).
:::
