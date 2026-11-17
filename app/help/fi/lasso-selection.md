---
title: Lasson valinta
summary: Paina ja vedä vapaamuotoinen ääriviiva kohteiden ympärille valitaksesi ne ikkunana, leikkaavana valintana tai aitana; vaihda vetäessä näppäimellä Space.
keywords: lasso, lassomode, veto, vapaa piirto, valitse, valinta, ikkuna, leikkaava, aita, space, monikulmio, kosketus, kynä, suorakulmio
from: 9ec6154d
---

## Mitä opit

Miten valitaan kohteita piirtämällä niiden ympärille ja miten suorakulmio saadaan takaisin, kun sitä tarvitaan.

## Piirrä lasso

1. Piirrä muutama viiva ja ympyrä lähekkäin.
2. Kun mitään komentoa ei ole käynnissä, paina hiiren painiketta tyhjään kohtaan ja vedä joidenkin niiden ympäri, liikuttaen ensin **oikealle**.
3. Vapauta painike.

Valitaan vain ne kohteet, jotka ovat kokonaan ääriviivan sisällä. Ääriviiva piirtyy vedon aikana yhtenäisenä: tämä on ikkunalasso.

## Ikkuna, leikkaava valinta ja aita

Saatavat kohteet riippuvat vedon ensimmäisestä liikkeestä ja näppäimestä {{key:Space}}:

| Vedät | Lasso | Valitsee |
|---|---|---|
| Ensin oikealle | Ikkuna (yhtenäinen ääriviiva) | Vain kohteet, jotka ovat **kokonaan sisällä** |
| Ensin vasemmalle | Leikkaava (katkoviivainen, vihreä) | Kohteet sisällä **ja** kohteet, joita ääriviiva koskee |
| Paina {{key:Space}} vetäessäsi | Ikkuna, sitten leikkaava, sitten aita | Aita (katkoviivainen polku, ei suljettu): vain kohteet, jotka polku leikkaa |

1. Paina tyhjään kohtaan ja vedä joidenkin kohteiden ympäri liikuttaen ensin **vasemmalle**. Kaikki, mitä ääriviiva koskee, valitaan myös.
2. Paina {{key:Esc}}.
3. Paina ja vedä uudelleen; pitäen painiketta yhä alhaalla, paina {{key:Space}} kerran. Ääriviiva muuttuu leikkaavaksi valinnaksi; paina {{key:Space}} uudelleen aidaksi.

Kun vapautat painikkeen painaen {{key:Shift}}, kohteet poistetaan valinnasta (kun Asetuksissa on "Kohteiden napsautus: Lisää").

## Komennon sisällä

Lasso toimii kaikkialla, missä CadCraft pyytää `Select objects`: piirrä se ja lopeta painamalla {{key:Enter}}. {{cmd:STRETCH}} käyttää leikkaavaa lassoa ikkunanaan, joten piirustuksen L-muotoisen osan voi venyttää kerralla.

{{cmd:TRIM}} ja {{cmd:EXTEND}} käyttävät vetoa toisin: siellä ne typistävät (tai pidentävät) jokaisen polun leikkaaman osan. Katso [Typistä ja pidennä](topic:trim-and-extend).

## Suorakulmio

Napsautus tyhjään tilaan, siirto ja toinen napsautus piirtävät aina suorakulmion ikkunan (vasemmalta oikealle) tai leikkaavan valinnan (oikealta vasemmalle).

Jotta veto piirtää taas suorakulmion, avaa {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Dragging to select}} ja valitse {{ui:Rectangle}}, tai kirjoita {{cmd:LASSOMODE}} ja sen jälkeen `0`. Kirjoita {{cmd:LASSOMODE}} ja sen jälkeen `1` lassoa varten. Valinta säilyy tässä selaimessa.

:::touch
Vedä sormella tai kynällä samalla tavalla. Napautus valitsee edelleen yhden kohteen.
:::

## Yleiset virheet

- **Mitään ei ole valittu.** Lasso oli ikkuna, eikä mikään ollut kokonaan sisällä. Aloita veto vasemmalta tai paina vetäessä {{key:Space}}.
- **Veto siirsi otetta.** Valitun kohteen otteen päällä painaminen siirtää otetta. Aloita lasso tyhjästä kohdasta.
- **Space lopetti komennon.** {{key:Space}} vaihtaa lassoa vain painikkeen ollessa alhaalla; muulloin se on {{key:Enter}}.
