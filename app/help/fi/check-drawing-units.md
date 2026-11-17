---
title: Tarkista piirustuksen yksiköt
summary: Katso, onko avattu piirustus millimetreissä, tuumissa vai jossain muussa, tarkista mittaamalla ja tiedä, miksi toinen ohjelma voi nimetä saman DXF-tiedoston yksiköt eri tavalla.
keywords: yksiköt, mitkä yksiköt, mitä yksiköt, tarkista yksiköt, millimetrit, mm, tuumat, metrinen, brittiläinen, DXF-yksiköt, STEP-DXF, väärät yksiköt, tuumat vai mm, INSUNITS, MEASUREMENT, piirustuksen yksiköt, PartCraft DXF
from: c0ee75bb
---

## Mitä teet

Selvität, mitä yksi yksikkö avatussa piirustuksessa tarkoittaa, ja varmistat, että lukemasi luvut ovat odottamasi kokoisia.

## Vaiheet

1. Avaa piirustus ja paina {{key:Esc}}, jotta mitään ei ole valittuna, {{ui:Malli}}-välilehdellä.
2. Oikeassa paneelissa, kohdassa {{ui:Nykyiset asetukset}}, lue {{ui:Yksiköt}}. Siinä kerrotaan, mitä yksi piirustusyksikkö tarkoittaa: {{ui:Millimetrit}}, {{ui:Tuumat}}, {{ui:Jalat}} ja niin edelleen. PartCraftista tallennettu DXF sanoo {{ui:Millimetrit}}.
3. Tarkista mittaamalla jotain, jonka koko tiedät. Kirjoita {{cmd:DIST}} ja valitse kahden reunan tai reiän päät. Jos tuntemasi osa, 25 mm, lukee `25`, piirustus on millimetreissä; jos se lukee noin `0.98`, se on tuumissa.

{{ui:Unitless}} tarkoittaa, että tiedosto ei kerro yksiköitä. CadCraft käsittelee silloin sen paperin yksikkönä (millimetrit ISO-paperilla, tuumat US-paperilla), ja luvut ovat vain yhtä oikeita kuin ohjelma, joka ne kirjoitti.

## Jos yksiköt ovat väärin

{{ui:Yksiköt}}-asetuksen muuttaminen **ei muuta mittasuhteita**: luvut pysyvät samoina ja vain niiden merkitys muuttuu. Aseta se siis vain kertomaan, mikä piirustus todella on. Jos luvut ovat millimetrejä ja {{ui:Yksiköt}} sanoo {{ui:Tuumat}}, valitse {{ui:Millimetrit}}. Jos tarvitset geometrian itsensä muissa yksiköissä, skaalaa se komennolla {{cmd:SCALE}} (25.4 tuumista millimetreiksi, 1/25.4 toiseen suuntaan) ja aseta sitten {{ui:Yksiköt}}.

Miten pituudet kirjoitetaan (desimaalina, jalkoina ja tuumina, murtolukuina) on erillinen asetus, {{ui:Pituuden muoto}}: katso [Yksiköt, paperikoot ja mittakaavat](topic:units-papers-scales).

## Miksi toinen ohjelma voi sanoa tuumat

DXF ilmoittaa yksikkönsä otsikossaan. Vanhin DXF-tyyppi, R12, ei sisältänyt lainkaan yksikkömuuttujaa, joten ohjelma, joka lukee R12:ta tiukasti, jättää sen siihen kirjoitetun arvon huomiotta ja käyttää omaa oletustaan, joka on usein tuumat. Tiedoston geometria on kummassakin tapauksessa sama: vain nimi eroaa. PartCraft kirjoittaa DXF-tiedostonsa R12-muodossa ja ilmoittaa millimetrit kahdella tavalla (`$INSUNITS` 4 ja `$MEASUREMENT` 1), jotta useampi ohjelma lukee ne oikein. Jos ohjelma sanoo yhä tuumat, aseta sen yksiköiksi millimetrit, kun avaat tiedoston.

Tiedoston tuominen piirustukseen (eikä sen avaaminen) muuntaa sen yksiköt: katso [Yksiköt tuonnissa](topic:units-on-import).
