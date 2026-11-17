---
title: Pinoa kerrokset yhteen piirustukseen
summary: Piirrä ensimmäinen kerros pohjakerroksen päälle samoissa koordinaateissa ja kytke jokainen kerros pois päältä ilman ulkoisia viittauksia.
keywords: kerros, kerrokset, FLOORS, FLR, FLOOR, FLOORLAYERS, kerros, taso, pinoa, suunnittelutaso, mallitila, alustapiirros, ulkoinen viittaus, xref
from: 7440fc87
---

Kerrosten avulla voit pinota pohjapiirroksia yhteen mallitilaan. Jokaisella kerroksella on omat kohteensa, ja tasot toimivat kaikissa kerroksissa. Taso `P-Walls` voi olla millä tahansa kerroksella.

## Aloita

Kirjoita `FLOORS` (`FLR`) tai valitse {{ui:Floors…}} {{ui:View}}-ryhmän {{ui:More}}-valikosta ja valitse sitten {{ui:Start with floors}}. Se, mitä olet piirtänyt tähän mennessä, jää maantasokerrokselle.

## Piirrä kerrokselle

Valitse kerros paneelin pyöreästä painikkeesta. Uudet kohteet menevät sille.

Muut näkyvissä olevat kerrokset näkyvät himmennettyinä sen alla. Voit napsautua niihin tartuntaa varten, joten ensimmäinen kerros asettuu oikein maantasokerroksen kanssa, mutta et voi muuttaa niitä ennen kuin teet niistä aktiivisen kerroksen. Silmäkuvake kytkee kerroksen pois päältä. Seinät liittyvät vain seiniin omalla kerroksellaan.

Aloittaaksesi kerroksen alla olevasta, valitse haluamasi asiat, valitse kerros paneelista ja paina {{ui:Copy there}}.

## Aseta kerrokset arkille

Valitse arkilla näkymäruutu ja valitse sen kerros kohdasta {{ui:Floor shown}} Ominaisuuksissa. Näkymäruutu, jolle ei ole valittu kerrosta, näyttää kaikki päällä olevat kerrokset.

## Lähetä tiedosto jollekin muulle

Muut CAD-ohjelmat eivät tunne kerroksia, joten ne näyttävät kaikki kerrokset yhdessä. Ennen tiedoston lähettämistä valitse paneelista {{ui:Turn floors into layers}} tai kirjoita `FLOORLAYERS`. Jokainen kohde siirtyy tasolle, jonka nimi on sen kerroksen mukaan, esimerkiksi `Maantasokerros-P-Walls`, joten kerroksia voi edelleen kytkeä pois päältä. Kumoa palauttaa sen. CadCraft säilyttää kerrokset DWG- tai DXF-tiedostossa, jonka se tallentaa.
