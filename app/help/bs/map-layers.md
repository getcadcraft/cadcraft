---
title: Slojevi karte ispod crteža
summary: Prikaži uličnu kartu, aerofotografiju ili sliku sa svjetskom datotekom ispod prostora modela, postavljenu prema koordinatnom sistemu crteža.
keywords: karta, slojevi karte, maplayers, ml, geomap, osnovna karta, aerofoto, satelit, pločice, xyz, wms, wmts, servis karte, svjetska datoteka, koordinatni sistem, epsg, state plane, utm, georeferenciranje, situacioni plan, geolokacija, geografska lokacija, geopodaci, sačuvano, dwg, dxf
from: f103045f
---

## Šta ćeš napraviti

Situacioni plan nacrtan preko aerofotografije ili ulične karte, svaki na pravom mjestu.

## Reci CadCraftu gdje je crtež

1. Postavi jedinice crteža u {{ui:Svojstva}} › {{ui:Jedinice}} (na primjer stope ili metre).
2. Ukucaj {{cmd:MAPLAYERS}} (ili `ML`) i pritisni {{key:Enter}}.
3. Pod {{ui:Gdje je crtež}}, ukucaj naziv ili EPSG kod u {{ui:Pronađi sistem}} (na primjer `2277` ili `Texas Central`) i izaberi ga u {{ui:Sistem}}.
4. Ako je crtež nacrtan u koordinatama tog sistema, ostavi postavljanje na 0. Ako nije, zadaj jednu tačku crteža ({{ui:X crteža}}, {{ui:Y crteža}}), gdje je ta tačka na mreži karte ({{ui:Istočno}}, {{ui:Sjeverno}}), i koliko je crtež zakrenut od istoka ({{ui:Zakrenuto (°)}}).
5. Klikni {{ui:Koristi ovaj sistem}}.

## Dodaj sloj

1. Uključi {{ui:Slojevi karte s interneta}} na vrhu dijaloga. Dok je to isključeno, nijedan server se ništa ne pita. Kada je uključeno, servere koje dodaš vide područje na ekranu i tvoju internet adresu, nikada tvoj crtež.
2. U {{ui:Dodaj sloj}} izaberi odakle dolazi:
   - **Pločice (XYZ)**: adresa pločice sa `{z}`, `{x}` i `{y}`, naziv i oznaka izvora koju traži njen pružalac.
   - **WMS**, **WMTS** ili **ArcGIS**: adresa servisa, zatim {{ui:Dohvati slojeve}} i izaberi jedan.
   - **Slika**: PNG ili JPEG sa svojom svjetskom datotekom (i njenom `.prj` datotekom kada postoji).
3. Sloj se prikazuje ispod crteža. Njegova oznaka izvora se prikazuje u donjem desnom uglu crteža.

Svaki sloj na listi može se sakriti, učiniti više ili manje prozirnim, pomjeriti gore ili dolje, ili ukloniti.

Svaka promjena sistema ili slojeva je jedan korak {{cmd:UNDO}}.

## Sačuvano uz crtež

Koordinatni sistem i lista slojeva se čuvaju u crtežu kada ga snimiš kao DWG ili DXF, i vraćaju se kada ga ponovo otvoriš, na bilo kom računaru. Slike iz datoteka se ne čuvaju: dodaj ih ponovo nakon otvaranja. Prekidač {{ui:Slojevi karte s interneta}} se ne čuva u crtežu: pripada ovom pregledniku, pa crtež koji ti neko pošalje ne traži ništa od servera dok ga sam ne uključiš.

Šta drugi programi vide:

| Snimljeno kao | Lokacija crteža | Slojevi karte |
|---|---|---|
| DWG 2010, 2013 ili 2018, DXF 2000 | Zapisana na standardan način kojim programi čitaju geografsku lokaciju crteža: EPSG kod sistema, jedna tačka crteža i gdje je na mreži karte, jedinice i sjever. | Samo CadCraft |
| DWG 2000, 2004 ili 2007, DXF R12 | Samo CadCraft (CadCraft to kaže kada snimaš) | Samo CadCraft |

- **Provjereno:** ODA File Converter čita lokaciju bez grešaka, a DXF biblioteka (ezdxf) tačno čita EPSG kod i postavljanje.
- **Još nije provjereno:** da li drugi programi za crtanje prepoznaju sistem po njegovom EPSG kodu. Program koji vodi vlastiti spisak sistema pod drugim nazivima može prikazati crtež bez lokacije.
- Drugi programi prikazuju blok po nazivu `CADCRAFT_GEO` u listi blokova. To je CadCraftova vlastita kopija sistema i slojeva; nikada se ne postavlja u crtež. Ostavi ga tamo.

## Crteži iz drugih programa

Kada crtež iz drugog programa ima geografsku lokaciju, CadCraft je čita:

- Ako navodi EPSG kod, {{ui:Gdje je crtež}} prikazuje taj sistem, a slojevi karte se postavljaju prema njemu.
- Ako CadCraft ne poznaje sistem (tuđi naziv za njega, lokalna mreža ili faktor razmjere), lokacija se ne koristi, ali se zadržava i vraća nazad kako je bila, pa ju je drugi program i dalje u stanju naći. Izaberi sistem u {{ui:Gdje je crtež}} da je zamijeniš.

:::note
Slojevi karte se crtaju samo na ekranu: ne štampaju se. Koristi samo servise karata čiji uslovi to dozvoljavaju i drži njihovu oznaku izvora vidljivom.
:::
