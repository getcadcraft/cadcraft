---
title: Slojevi karte ispod crteža
summary: Prikažite uličnu kartu, zračne snimke ili sliku sa svjetskom datotekom ispod prostora modela, postavljene prema koordinatnom sustavu crteža.
keywords: karta, slojevi karte, maplayers, ml, geomap, podloga, zračni, satelit, pločice, xyz, wms, wmts, servis karte, svjetska datoteka, koordinatni sustav, epsg, state plane, utm, georeferenciranje, situacijski plan, geolokacija, zemljopisni položaj, geopodaci, spremljeno, dwg, dxf
from: f103045f
---

## Što ćete napraviti

Situacijski plan nacrtan preko zračne snimke ili ulične karte, svaki na pravom mjestu.

## Recite CadCraftu gdje je crtež

1. Postavite jedinice crteža u {{ui:Svojstva}} › {{ui:Jedinice}} (na primjer stope ili metri).
2. Upišite {{cmd:MAPLAYERS}} (ili `ML`) i pritisnite {{key:Enter}}.
3. Pod {{ui:Gdje je crtež}}, upišite naziv ili EPSG kod u {{ui:Pronađi sustav}} (na primjer `2277` ili `Texas Central`) i odaberite ga u {{ui:Sustav}}.
4. Ako je crtež nacrtan u koordinatama tog sustava, ostavite postavljanje na 0. Ako nije, zadajte jednu točku crteža ({{ui:X crteža}}, {{ui:Y crteža}}), gdje je ta točka na mreži karte ({{ui:Istok}}, {{ui:Sjever}}), i koliko je crtež zakrenut od istoka ({{ui:Zakrenuto (°)}}).
5. Kliknite {{ui:Koristi ovaj sustav}}.

## Dodajte sloj

1. Uključite {{ui:Slojevi karte s interneta}} na vrhu dijaloga. Dotad se ni jednom poslužitelju ništa ne traži; kad je uključeno, poslužitelji koje dodate vide područje na zaslonu i vašu internetsku adresu, nikad vaš crtež.
2. U {{ui:Dodaj sloj}} odaberite odakle dolazi:
   - **Pločice (XYZ)**: adresa pločica s `{z}`, `{x}` i `{y}`, naziv i navođenje autora koje traži pružatelj.
   - **WMS**, **WMTS** ili **ArcGIS**: adresa servisa, zatim {{ui:Dohvati slojeve}} i odaberite jedan.
   - **Slika**: PNG ili JPEG sa svojom svjetskom datotekom (i njezinom `.prj` kad postoji).
3. Sloj se prikazuje ispod crteža. Njegovo navođenje autora prikazuje se u donjem desnom kutu crteža.

Svaki sloj na popisu može se sakriti, učiniti više ili manje prozirnim, pomaknuti gore ili dolje ili ukloniti.

Svaka promjena sustava ili slojeva jedan je korak naredbe {{cmd:UNDO}}.

## Spremljeno s crtežom

Koordinatni sustav i popis slojeva spremaju se u crtež kad ga spremite kao DWG ili DXF i vraćaju se kad ga ponovno otvorite, na bilo kojem računalu. Slike iz datoteka se ne spremaju: nakon otvaranja ih dodajte ponovno. Prekidač {{ui:Slojevi karte s interneta}} ne sprema se u crtež: pripada ovom pregledniku, pa crtež koji vam netko pošalje ne traži ništa od poslužitelja dok ga sami ne uključite.

Što vide drugi programi:

| Spremljeno kao | Lokacija crteža | Slojevi karte |
|---|---|---|
| DWG 2010, 2013 ili 2018, DXF 2000 | Zapisana na standardni način na koji programi čitaju zemljopisni položaj crteža: EPSG kod sustava, jedna točka crteža i gdje je na mreži karte, jedinice i sjever. | Samo CadCraft |
| DWG 2000, 2004 ili 2007, DXF R12 | Samo CadCraft (CadCraft to javlja pri spremanju) | Samo CadCraft |

- **Provjereno:** ODA File Converter čita lokaciju bez pogrešaka, a DXF biblioteka (ezdxf) čita EPSG kod i postavljanje točno.
- **Još nije provjereno:** prepoznaju li drugi programi sustav po EPSG kodu. Program koji ima vlastiti popis sustava pod drugim nazivima može prikazati crtež bez lokacije.
- Drugi programi u popisu blokova prikazuju blok nazvan `CADCRAFT_GEO`. To je CadCraftova vlastita kopija sustava i slojeva; nikad se ne postavlja u crtež. Ostavite ga tamo.

## Crteži iz drugih programa

Kad crtež iz drugog programa ima zemljopisni položaj, CadCraft ga čita:

- Ako navodi EPSG kod, {{ui:Gdje je crtež}} prikazuje taj sustav i slojevi karte se postavljaju prema njemu.
- Ako CadCraft ne poznaje sustav (vlastiti naziv drugog programa, lokalna mreža ili faktor mjerila), položaj se ne koristi, ali se čuva i sprema natrag kakav je bio, pa ga drugi program i dalje pronalazi. Odaberite sustav u {{ui:Gdje je crtež}} da ga zamijenite.

:::note
Slojevi karte crtaju se samo na zaslonu: ne plotaju se. Koristite samo servise karata čiji uvjeti to dopuštaju i zadržite njihovo navođenje autora vidljivim.
:::
