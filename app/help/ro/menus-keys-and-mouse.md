---
title: Meniuri, taste și mouse
summary: Alegeți un stil de meniu potrivit modului în care lucrați deja, dați oricărei comenzi propria tastă sau o tastă care tastează o comandă, mutați comenzile între filele panglicii și stabiliți ce fac rotița și butoanele mouse-ului.
keywords: stil meniu, meniuri, panglică, bară de instrumente, linie de comandă, comenzi rapide de la tastatură, taste rapide, taste, personalizare, realocare, comenzi rapide, taste text, mouse, rotiță, inversare, direcție zoom, buton din mijloc, buton din dreapta, panoramare, export, import, comutare, familiar, desen clasic
from: 8bbf4f88
---

Comenzile CadCraft sunt aceleași indiferent cum le atingeți, iar linia de comandă este mereu acolo, cu aliasurile ei (`L`, `C`, `TR` …). Un **stil de meniu** decide doar unde stau butoanele pe ecran, cum se numesc acolo și ce taste le rulează. Alegeți unul în {{ui:Settings}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menus, keys and mouse}}; schimbarea este imediată, iar acest browser o reține.

## Cele trei stiluri

| Stil | Ce obțineți |
|---|---|
| {{ui:CadCraft}} | Bara de instrumente proprie CadCraft: Fișier, Desen, Modificare, Adnotare, Parametric, Blocuri, Planșe, Editare și Vizualizare, fiecare cu un meniu {{ui:More}}. Punctul de start. |
| {{ui:Drafting classic}} | O panglică aranjată ca în programele clasice de desen 2D: un meniu {{ui:File}} și butoane rapide, apoi filele {{ui:Home}} (Desen, Modificare, Adnotare, Straturi, Bloc, Proprietăți, Utilități, Clipboard), {{ui:Insert}}, {{ui:Annotate}}, {{ui:Parametric}}, {{ui:View}}, {{ui:Manage}}, {{ui:Output}} și {{ui:3D}}. Tastați comenzile ca de obicei. Butonul din mijloc panoramează; un clic dreapta este {{key:Enter}}, iar trasarea cu butonul din dreapta nu face nimic. |
| {{ui:Ribbon}} | O panglică cu file simple de sarcini: {{ui:Draw}}, {{ui:Modify}}, {{ui:Annotate}}, {{ui:Parametric}}, {{ui:Blocks}}, {{ui:Sheets}}, {{ui:View}}, {{ui:3D}} și {{ui:Tools}}, cu un meniu {{ui:File}} și butoane rapide în dreapta. Butoanele din mijloc și din dreapta panoramează, ca în stilul propriu CadCraft. |

Fiecare stil păstrează tastele CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, și {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} pentru ajutoarele de desenare. Literele nu sunt niciodată taste: CadCraft le scrie în linia de comandă.

Panglicile conțin și instrumentele panoului Straturi și ajutoarele de desenare din bara de stare. Fila {{ui:3D}} se umple după ce a fost deschisă fila 3D de sub desen; un instrument 3D ales din fila Model deschide mai întâi fila 3D, iar un instrument 2D ales din fila 3D revine mai întâi la fila Model.

:::tip
O tastă care aparține layout-ului propriu CadCraft, dar pe care stilul ales a dat-o altei comenzi, nu face nimic, iar bara de stare spune unde a ajuns comanda („În Tastele mele, Ortogonal este Ctrl+Alt+O”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} și săgețile își păstrează mereu sensul. Cât timp rulează o comandă sau cât timp se tastează litere în linia de comandă, tastele aparțin liniei de comandă.
:::

## Faceți-l propriu

1. Alegeți stilul cel mai apropiat de ce doriți, apoi faceți clic pe {{ui:Customize…}}.
2. La {{ui:Keys and menus}}, găsiți o comandă (caseta de căutare ajută). Faceți clic pe {{ui:Add a key}} și apăsați tasta. Faceți clic pe o tastă pentru a o scoate.
3. Cu o panglică, {{ui:Where it sits}} mută comanda pe altă filă și alt panou, în meniul {{ui:File}} sau la {{ui:Keys only}}.
4. La {{ui:Mouse}}, setați rotița și butoanele care panoramează desenul.
5. Dați-i un nume și faceți clic pe {{ui:Save}}.

Salvarea unui stil integrat creează propria copie („Desen clasic propriu”); stilul integrat nu se schimbă niciodată. O tastă atribuită la două comenzi este afișată cu roșu și trebuie reparată înainte de salvare.

## Taste care tastează o comandă

{{cmd:SHORTCUTS}} (Vizualizare › Mai multe › {{ui:Keyboard shortcuts…}}) dă unei taste o linie de comandă întreagă, precum {{key:Ctrl+Alt+L}} pentru `LINE` sau {{key:F9}} pentru `ZOOM E`. Aceste taste aparțin stilului folosit: prima dată când se deschide această versiune, tastele pe care le-ați făcut într-o versiune mai veche sunt duse, o singură dată, în stilul propriu „Tastele mele CadCraft”, și funcționează ca înainte. Exportul stilului le duce și pe ele.

## Mouse

- **Rotița mouse-ului**: {{ui:Scroll up zooms in}} (punctul de start) sau {{ui:Scroll up zooms out}}, și cât de repede. Un gest de ciupire pe touchpad face întotdeauna zoom în sensul în care se mișcă degetele.
- **Panoramare desen cu**: butonul din mijloc, butonul din dreapta sau ambele. Un clic dreapta fără trasare este întotdeauna {{key:Enter}}. Butonul stâng alege și desenează întotdeauna în CadCraft, deci bifarea lui nu schimbă nimic aici.
- **Trasare în vederile 3D**: fila 3D își păstrează propriile butoane în orice stil (stânga orbitează, mijlocul și dreapta panoramează).

## Transferul stilului

{{ui:Export}} salvează stilul folosit ca un mic fișier `.ccinput.json`; {{ui:Import…}} adaugă unul, de pe alt calculator sau de la un coleg. Un fișier importat poate indica doar comenzile proprii CadCraft: orice altceva din el este lăsat afară și numărat în bara de stare. {{ui:Delete this style}} șterge unul dintre stilurile proprii.

:::note
Aceste setări rămân în acest browser. {{ui:Use this style in every app}} sub cardurile stilurilor face ca fiecare aplicație să se deschidă în stilul ei corespunzător (bara proprie, o panglică sau Desen clasic), cu modificările pe care le-ați făcut în fiecare aplicație. CadCraft nu are stil de bară de meniu: când bara de meniu a altei aplicații este aleasă pentru toate aplicațiile, CadCraft își păstrează propria bară de instrumente.
:::

Înrudite: [Tastatură și mouse](topic:keyboard) · [Setările CadCraft](topic:settings) · [Venind de la alt software de desen](topic:coming-from) · [Aliasuri de comenzi](topic:command-aliases)
