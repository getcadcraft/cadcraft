---
title: Straturi de hartă sub desen
summary: Afișați hărți stradale, imagini aeriene sau o imagine cu un world file sub spațiul model, așezate după sistemul de coordonate al desenului.
keywords: hartă, straturi de hartă, maplayers, ml, geomap, strat de bază, aerian, satelit, dale, xyz, wms, wmts, serviciu de hărți, world file, sistem de coordonate, epsg, state plane, utm, georeferențiere, plan de amplasament, geolocalizare, locație geografică, geodate, salvat, dwg, dxf
from: f103045f
---

## Ce veți crea

Un plan de amplasament desenat peste o imagine aeriană sau o hartă stradală, fiecare la locul potrivit.

## Spuneți-i lui CadCraft unde se află desenul

1. Setați unitățile desenului în {{ui:Properties}} › {{ui:Units}} (de exemplu picioare sau metri).
2. Tastați {{cmd:MAPLAYERS}} (sau `ML`) și apăsați {{key:Enter}}.
3. La {{ui:Where the drawing is}}, tastați un nume sau un cod EPSG în {{ui:Find a system}} (de exemplu `2277` sau `Texas Central`) și alegeți-l la {{ui:System}}.
4. Dacă desenul este făcut în coordonatele acelui sistem, lăsați poziționarea la 0. Dacă nu, indicați un punct al desenului ({{ui:Drawing X}}, {{ui:Drawing Y}}), unde se află acel punct pe grila hărții ({{ui:Easting}}, {{ui:Northing}}), și cât este rotit desenul față de est ({{ui:Turned (°)}}).
5. Faceți clic pe {{ui:Use this system}}.

## Adăugați un strat

1. Activați {{ui:Map layers from the internet}} din partea de sus a casetei de dialog. Până atunci nimic nu este cerut de niciun server; când este activat, serverele pe care le adăugați văd zona de pe ecran și adresa de internet, niciodată desenul.
2. La {{ui:Add a layer}}, alegeți de unde vine:
   - **Dale (XYZ)**: o adresă de dale cu `{z}`, `{x}` și `{y}`, un nume și creditul cerut de furnizor.
   - **WMS**, **WMTS** sau **ArcGIS**: adresa serviciului, apoi {{ui:Get layers}} și alegeți unul.
   - **O imagine**: un PNG sau JPEG cu fișierul său de lume (și `.prj`-ul său, dacă există).
3. Stratul apare sub desen. Creditul lui apare în colțul din dreapta jos al desenului.

Fiecare strat din listă poate fi ascuns, făcut mai mult sau mai puțin transparent, mutat în sus sau în jos ori eliminat.

Fiecare modificare a sistemului sau a straturilor este un pas al comenzii {{cmd:UNDO}}.

## Salvat împreună cu desenul

Sistemul de coordonate și lista de straturi sunt salvate în desen când îl salvați ca DWG sau DXF și revin când îl deschideți din nou, pe orice calculator. Imaginile din fișiere nu sunt salvate: adăugați-le din nou după deschidere. Comutatorul {{ui:Map layers from the internet}} nu este salvat în desen: aparține acestui browser, astfel că un desen trimis de altcineva nu cere nimic de la vreun server până nu îl activați singur.

Ce văd celelalte programe:

| Salvat ca | Locația desenului | Straturile de hartă |
|---|---|---|
| DWG 2010, 2013 sau 2018, DXF 2000 | Scrisă în modul standard în care programele citesc locația geografică a unui desen: codul EPSG al sistemului, un punct al desenului și unde se află pe grila hărții, unitățile și nordul. | Numai CadCraft |
| DWG 2000, 2004 sau 2007, DXF R12 | Numai CadCraft (CadCraft spune asta la salvare) | Numai CadCraft |

- **Verificat:** ODA File Converter citește locația fără erori, iar o bibliotecă DXF (ezdxf) citește exact codul EPSG și poziționarea.
- **Nu este verificat încă:** dacă alte programe de desen recunosc sistemul după codul său EPSG. Un program care își ține propria listă de sisteme, sub alte nume, poate afișa desenul fără locație.
- Alte programe afișează un bloc numit `CADCRAFT_GEO` în lista de blocuri. Este propria copie a CadCraft a sistemului și a straturilor; nu este plasat niciodată în desen. Lăsați-l acolo.

## Desene din alte programe

Când un desen dintr-un alt program are o locație geografică, CadCraft o citește:

- Dacă numește un cod EPSG, {{ui:Where the drawing is}} arată acel sistem, iar straturile de hartă sunt poziționate după el.
- Dacă CadCraft nu cunoaște sistemul (numele propriu al altui program pentru el, o grilă locală sau un factor de scară), locația nu este folosită, dar este păstrată și salvată înapoi așa cum era, astfel încât celălalt program să o găsească în continuare. Alegeți un sistem la {{ui:Where the drawing is}} pentru a o înlocui.

:::note
Straturile de hartă sunt desenate numai pe ecran: nu se trasează. Folosiți numai servicii de hărți ale căror condiții le permit și păstrați vizibil creditul lor.
:::
