---
title: Kartni sloji pod risbo
summary: Prikažite zemljevide ulic, zračne posnetke ali sliko s svetovno datoteko pod modelnim prostorom, postavljene glede na koordinatni sistem risbe.
keywords: zemljevid, kartni sloji, maplayers, ml, geomap, osnovni zemljevid, zračni posnetek, satelit, ploščice, xyz, wms, wmts, storitev zemljevida, world file, koordinatni sistem, epsg, državna ravnina, utm, georeferenciranje, situacija, geolokacija, zemljepisna lega, geopodatki, shranjeno, dwg, dxf
from: f103045f
---

## Kaj boste naredili

Situacijo, narisano nad zračnim posnetkom ali zemljevidom ulic, vsako na pravem mestu.

## Povejte CadCraft, kje je risba

1. Nastavite enote risbe v {{ui:Lastnosti}} › {{ui:Enote}} (na primer čevlje ali metre).
2. Vnesite {{cmd:MAPLAYERS}} (ali `ML`) in pritisnite {{key:Enter}}.
3. Pod {{ui:Kje je risba}} vnesite ime ali kodo EPSG v {{ui:Poišči sistem}} (na primer `2277` ali `Texas Central`) in ga izberite v {{ui:Sistem}}.
4. Če je risba narisana v koordinatah tega sistema, pustite postavitev na 0. Če ne, navedite eno točko risbe ({{ui:X risbe}}, {{ui:Y risbe}}), kje je ta točka na mreži zemljevida ({{ui:Vzhodna (E)}}, {{ui:Severna (N)}}), in za koliko je risba zasukana od vzhoda ({{ui:Zasuk (°)}}).
5. Kliknite {{ui:Uporabi ta sistem}}.

## Dodajte sloj

1. Vklopite {{ui:Karte z interneta}} na vrhu pogovornega okna. Dokler ni vklopljeno, noben strežnik ničesar ne zahteva; ko je vklopljeno, strežniki, ki jih dodate, vidijo območje na zaslonu in vaš internetni naslov, nikoli pa vaše risbe.
2. V {{ui:Dodaj sloj}} izberite, od kod prihaja:
   - **Ploščice (XYZ)**: naslov ploščic z `{z}`, `{x}` in `{y}`, ime ter navedbo avtorja, ki jo zahteva ponudnik.
   - **WMS**, **WMTS** ali **ArcGIS**: naslov storitve, nato {{ui:Pridobi sloje}} in izberite enega.
   - **Slika**: PNG ali JPEG z njeno world datoteko (in njeno `.prj`, če obstaja).
3. Sloj se prikaže pod risbo. Njegova navedba avtorja se pokaže spodaj desno na risbi.

Vsak sloj na seznamu lahko skrijete, naredite bolj ali manj prosojnega, premaknete gor ali dol ali odstranite.

Vsaka sprememba sistema ali slojev je en korak {{cmd:UNDO}}.

## Shranjeno z risbo

Koordinatni sistem in seznam slojev se shranita v risbo, ko jo shranite kot DWG ali DXF, in se vrneta, ko jo spet odprete, na kateremkoli računalniku. Slike iz datotek se ne shranijo: po odprtju jih dodajte znova. Stikalo {{ui:Karte z interneta}} se v risbi ne shrani: pripada temu brskalniku, zato risba, ki vam jo nekdo pošlje, ne pošlje nobenemu strežniku zahteve, dokler ga sami ne vklopite.

Kaj vidijo drugi programi:

| Shranjeno kot | Lega risbe | Kartni sloji |
|---|---|---|
| DWG 2010, 2013 ali 2018, DXF 2000 | Zapisana na standardni način, kako programi berejo zemljepisno lego risbe: koda EPSG sistema, ena točka risbe in kje je na mreži zemljevida, enote in sever. | Samo CadCraft |
| DWG 2000, 2004 ali 2007, DXF R12 | Samo CadCraft (CadCraft to pove ob shranjevanju) | Samo CadCraft |

- **Preverjeno:** ODA File Converter bere lego brez napak, DXF knjižnica (ezdxf) pa natančno bere kodo EPSG in postavitev.
- **Še ni preverjeno:** ali drugi risalni programi prepoznajo sistem po kodi EPSG. Program, ki hrani svoj seznam sistemov pod drugimi imeni, lahko risbo prikaže brez lege.
- Drugi programi v seznamu blokov prikažejo blok z imenom `CADCRAFT_GEO`. To je lastna kopija sistema in slojev v CadCraft; v risbi ni nikoli postavljen. Pustite ga tam.

## Risbe iz drugih programov

Ko risba iz drugega programa ima zemljepisno lego, jo CadCraft prebere:

- Če navaja kodo EPSG, {{ui:Kje je risba}} prikaže ta sistem, kartni sloji pa so postavljeni glede nanj.
- Če CadCraft ne pozna sistema (lastno ime drugega programa, lokalno mrežo ali faktor merila), lega ni uporabljena, a se ohrani in shrani nazaj, kot je bila, da jo drugi program še vedno najde. Izberite sistem v {{ui:Kje je risba}}, da jo zamenjate.

:::note
Kartni sloji se prikažejo samo na zaslonu: ne izrišejo se. Uporabljajte samo storitve zemljevidov, katerih pogoji to dovoljujejo, in navedbo avtorja ohranite vidno.
:::
