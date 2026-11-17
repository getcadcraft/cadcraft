---
title: Slojevi karte ispod crteža
summary: Prikaži uličnu kartu, snimke iz vazduha ili sliku sa world datotekom ispod prostora modela, postavljene prema koordinatnom sistemu crteža.
keywords: karta, slojevi karte, maplayers, ml, geomap, osnovna karta, snimak iz vazduha, satelit, pločice, xyz, wms, wmts, servis karte, world datoteka, koordinatni sistem, epsg, state plane, utm, georeferenciranje, situacioni plan, geolokacija, geografska lokacija, geopodaci, sačuvano, dwg, dxf
from: f103045f
---

## Šta ćeš napraviti

Situacioni plan nacrtan preko snimka iz vazduha ili ulične karte, svaki na pravom mestu.

## Reci CadCraft-u gde je crtež

1. Postavi jedinice crteža u {{ui:Svojstva}} › {{ui:Jedinice}} (na primer stope ili metri).
2. Ukucaj {{cmd:MAPLAYERS}} (ili `ML`) i pritisni {{key:Enter}}.
3. Pod {{ui:Gde je crtež}}, ukucaj ime ili EPSG kod u {{ui:Pronađi sistem}} (na primer `2277` ili `Texas Central`) i izaberi ga u {{ui:Sistem}}.
4. Ako je crtež nacrtan u koordinatama tog sistema, ostavi postavljanje na 0. Ako nije, zadaj jednu tačku crteža ({{ui:X crteža}}, {{ui:Y crteža}}), gde je ta tačka na mreži karte ({{ui:Istok}}, {{ui:Sever}}), i koliko je crtež zakrenut od istoka ({{ui:Zakrenuto (°)}}).
5. Klikni {{ui:Koristi ovaj sistem}}.

## Dodaj sloj

1. Uključi {{ui:Slojevi karte sa interneta}} na vrhu prozora. Dok je to isključeno, nijedan server ništa ne traži; kada je uključeno, serveri koje dodaš vide područje na ekranu i tvoju internet adresu, nikad tvoj crtež.
2. U {{ui:Dodaj sloj}} izaberi odakle dolazi:
   - **Pločice (XYZ)**: adresa pločice sa `{z}`, `{x}` i `{y}`, ime i navođenje autora koje traži njen pružalac.
   - **WMS**, **WMTS** ili **ArcGIS**: adresa servisa, zatim {{ui:Uzmi slojeve}} i izaberi jedan.
   - **Slika**: PNG ili JPEG sa svojom world datotekom (i njenom `.prj` datotekom kada postoji).
3. Sloj se prikazuje ispod crteža. Njegovo navođenje autora se prikazuje dole desno na crtežu.

Svaki sloj na spisku može da se sakrije, učini više ili manje providnim, pomeri gore ili dole, ili ukloni.

Svaka promena sistema ili slojeva je jedan korak {{cmd:UNDO}}.

## Sačuvano uz crtež

Koordinatni sistem i spisak slojeva se čuvaju u crtežu kada ga sačuvaš kao DWG ili DXF, i vraćaju se kada ga ponovo otvoriš, na bilo kom računaru. Slike iz datoteka se ne čuvaju: dodaj ih ponovo posle otvaranja. Prekidač {{ui:Slojevi karte sa interneta}} se ne čuva u crtežu: pripada ovom pregledaču, pa crtež koji ti neko pošalje ne traži ništa ni od jednog servera dok ga sam ne uključiš.

Šta vide drugi programi:

| Sačuvano kao | Lokacija crteža | Slojevi karte |
|---|---|---|
| DWG 2010, 2013 ili 2018, DXF 2000 | Zapisano na standardan način kojim programi čitaju geografsku lokaciju crteža: EPSG kod sistema, jedna tačka crteža i gde je ona na mreži karte, jedinice i sever. | Samo CadCraft |
| DWG 2000, 2004 ili 2007, DXF R12 | Samo CadCraft (CadCraft to kaže kada čuvaš) | Samo CadCraft |

- **Provereno:** ODA File Converter čita lokaciju bez grešaka, a DXF biblioteka (ezdxf) čita EPSG kod i postavljanje tačno.
- **Još nije provereno:** da li druge programe za crtanje prepoznaju sistem po njegovom EPSG kodu. Program koji vodi sopstveni spisak sistema pod drugim imenima može da prikaže crtež bez lokacije.
- Drugi programi prikazuju blok zvan `CADCRAFT_GEO` u spisku blokova. To je CadCraft-ova sopstvena kopija sistema i slojeva; nikad se ne postavlja u crtež. Ostavi ga tamo.

## Crteži iz drugih programa

Kada crtež iz drugog programa ima geografsku lokaciju, CadCraft je čita:

- Ako navodi EPSG kod, {{ui:Gde je crtež}} prikazuje taj sistem, a slojevi karte se postavljaju prema njemu.
- Ako CadCraft ne zna sistem (ime koje mu je drugi program dao, lokalna mreža ili faktor razmere), lokacija se ne koristi, ali se čuva i vraća nazad onako kako je bila, pa drugi program i dalje može da je nađe. Izaberi sistem u {{ui:Gde je crtež}} da je zameniš.

:::note
Slojevi karte se crtaju samo na ekranu: ne štampaju se. Koristi samo servise karata čiji uslovi to dozvoljavaju i drži navođenje autora vidljivim.
:::
