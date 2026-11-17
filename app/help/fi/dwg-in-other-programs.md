---
title: CadCraftin DWG-tiedoston avaaminen muissa ohjelmissa
summary: Mitkä ohjelmat ovat avanneet CadCraftin tallentaman DWG-tiedoston, mitä tarkistetaan ja mitä tehdä, kun jokin ohjelma valittaa.
keywords: dwg, avaa muissa ohjelmissa, yhteensopivuus, aukeaako, tarkistus, audit, trueview, muut cad-ohjelmat, dxf, tarkista, tallenna DWG-muodossa
from: 0f8c15c4
---

## Mitä CadCraft kirjoittaa

{{ui:Save}} kirjoittaa oikean DWG-tiedoston siinä versiossa, jossa piirustus tuli, tai siinä versiossa, jonka valitset kohdasta {{ui:Save as}}: AutoCAD 2000, 2004, 2007, 2010, 2013 tai 2018. Mitään ei muunneta huomaamatta: historia luettelee kaiken, mikä muuttui matkalla (esimerkiksi todellinen väri kirjoitettiin 2000-DWG:hen lähimpänä vakiovärinä).

## Missä se on avattu

Jokainen CadCraftin kirjoittama DWG avataan jokaisessa versiossa kolmella muulla ohjelmalla: ODA File Converterilla (joka tarkistaa tiedoston eikä korjaa siinä mitään), LibreDWG:llä ja libdxfrw:llä. Niiden lukutulosta verrataan CadCraftin omaan: kohteet, tasot, lohkot ja attribuutit, mitoitukset, täytöt, arkit ja niiden näkymäruudut.

CadCraftin DWG-tiedostojen avaamista AutoCADissa ja ilmaisessa DWG TrueViewssa tarkistetaan Windowsissa kohdetyypeittäin (AUDIT, tasot, arkit, mitoitukset, täytöt, attribuutit, dynaamiset lohkot, leikatut viittaukset, kuvat). Tulokset luetellaan tässä, kun ne ovat valmiita.

## Kun toinen ohjelma valittaa

1. Tallenna uudelleen DXF-muodossa ({{ui:Save as}} › {{ui:DXF 2000}}) ja avaa se: useimmat ohjelmat lukevat DXF:n.
2. Tallenna DWG vanhemmassa versiossa (2013 tai 2010).
3. Kerro meille Discordissa, mikä ohjelma ja versio, ja mitä se sanoi; tiedosto auttaa eniten.
