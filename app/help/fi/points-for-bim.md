---
title: Pisteet BIM-ohjelmille
summary: Vie pisteet ja lohkojen lisäyspisteet kuvauksineen CSV- tai TXT-tiedostoon, jonka BIM- ja mittausohjelmat tuovat.
keywords: exportpoints, vie pisteet, pisteet, csv, txt, pnezd, penzd, xyz, mittauspisteet, koordinaatit, bim, maastoon merkintä, pistetiedosto, pohjoinen, itä, korkeus
from: d80e2d53
---

## Mitä teet

Pistetiedosto: yksi rivi per piste, ja siinä pisteen numero, pohjoinen, itä, korkeus ja kuvaus. BIM-ohjelmat (muun muassa Revit ja Archicad) ja mittausohjelmat voivat tuoda tiedoston, jotta mittauspisteet, työmaamerkit tai laitteet voi sijoittaa.

## Vie pisteet

1. Valitse pisteet ja lohkoviitteet, joiden lisäyspisteet haluat. Tai älä valitse mitään, jolloin otetaan kaikki pisteet.
2. Kirjoita {{cmd:EXPORTPOINTS}} (tai `EXPPTS`, tai {{ui:Blocks}} (Lohkot) › {{ui:More}} (Lisää) › {{ui:Export points}} (Vie pisteet)) ja paina {{key:Enter}}. Kun mitään ei ollut valittuna, paina {{key:Enter}} uudelleen kohdassa `Valitse pisteet ja lohkot`.
3. Kun valitsit lohkoja, joissa on attribuutteja, CadCraft luettelee niiden tunnisteet. Kirjoita se tunniste, jonka arvo on kuvaus (esimerkiksi `ITEM`). Tai kirjoita mikä tahansa muu, jolloin kuvauksena on kunkin lohkon nimi.
4. Valitse sarakkeet: `PNEZD` (piste, pohjoinen, itä, korkeus, kuvaus) on tavallinen. `PENZD` panee idän ennen pohjoista. `XYZ` on vain koordinaatit.
5. Valitse yksiköt: `D` piirretyn mukaan, tai `M` metriä tai `F` jalkaa. Nämä ovat käytettävissä vain, kun piirustuksen yksiköt on asetettu: Ominaisuudet › {{ui:Units}} (Yksiköt), kun mitään ei ole valittu.
6. Kun UCS on asetettu, valitse `W` maailmakoordinaatit tai `U` UCS-koordinaatit (katso [UCS ja käännetty näkymä](topic:ucs-and-turned-view)).
7. Valitse `C` pilkulla erotetulle `.csv`-tiedostolle tai `T` sarkainerotetulle `.txt`-tiedostolle. Valitse myös ensimmäinen pistenumero.

Tiedosto latautuu nimellä `<drawing>-points.csv` (tai `.txt`). Historia kertoo, kuinka monta pistettä siinä on.

## Mitä tiedostossa on

- Yksi piste per rivi, rivin päättyessä rivinvaihtoon (CR LF). Kolme desimaalia.
- Pisteen korkeus on sen Z-arvo (0, jos sitä ei ole). Lohkon piste on sen lisäyspiste.
- Kuvaus, jossa on pilkku (tai TXT-tiedostossa sarkain) tai lainausmerkki, laitetaan kaksinkertaisiin lainausmerkkeihin, ja sen omat lainausmerkit kahdennetaan.
- Muoto on se, jonka CivilCraft lukee ja kirjoittaa. Tiedosto aukeaa siis siellä pisteinä.

## Yleisiä virheitä

- Yksiköiksi tarjotaan vain `D`: piirustukselle ei ole asetettu yksiköitä. Aseta yksiköt tai muunna ne toisessa ohjelmassa.
- Pisteet ovat kaukana siitä, mihin odotat niiden olevan toisessa ohjelmassa: vie maailmakoordinaatit (`W`), tai se UCS, jota toisen ohjelman mittauspiste käyttää (`U`).
