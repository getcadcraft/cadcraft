---
title: Trasarea liniilor as-built peste un nor de puncte
summary: Atașați o scanare laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS sau XYZ) sub desen, tăiați o secțiune în plan prin ea și desenați pereți, uși și stâlpi cu agățare la obiect pe punctele sale.
keywords: nor de puncte, pointcloudattach, pcattach, pointcloud, pc, scanare laser, scanare, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, ridicare topografică, secțiune, tăiere în plan, nod, agățare, trasare, situația existentă
from: b0e0aae5
---

## Ce veți realiza

O planimetrie as-built: pereții unei clădiri scanate, desenați ca linii și polilinii exact pe punctele scanării.

## Atașarea norului

1. Setați mai întâi unitățile desenului, dacă nu are: caseta {{ui:Unități}} din {{ui:Proprietăți}} sau {{cmd:UNITS}}. CadCraft convertește norul din unitățile sale proprii în cele ale desenului.
2. Tastați {{cmd:POINTCLOUDATTACH}} (sau `PCATTACH`) și apăsați {{key:Enter}}. Alegeți un fișier `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` sau `.xyz` (subiectul despre formatele de nori de puncte arată ce aduce fiecare și ce să exportați din software-ul scanerului). Puteți deschide fișierul și cu {{ui:Deschidere}}, îl puteți trage pe pagină sau îl puteți trimite din vizualizatorul BIM prin {{ui:Trasare în CadCraft}}.
3. `Colțul din stânga jos al norului`: apăsați {{key:Enter}} pentru a păstra coordonatele proprii ale fișierului (o scanare înregistrată în proiect se aliniază cu desenul) sau faceți clic acolo unde trebuie să ajungă colțul din stânga jos.
4. Linia de comandă arată câte puncte se văd. Vizualizarea se apropie de nor; acesta se află sub liniile desenului, fiecare punct fiind văzut de sus.

## Tăierea unei secțiuni în plan și trasarea

1. Tastați {{cmd:POINTCLOUD}} (sau `PC`), apoi `S` pentru {{ui:Secțiune}}. Se vede doar o bandă subțire, la 1.2 m deasupra celui mai jos punct al norului: pereții, golurile de uși și stâlpii se citesc ca o planimetrie.
2. `H` setează înălțimea secțiunii, `T` grosimea ei (în unități de desen). {{key:Enter}} încheie comanda.
3. Activați agățarea la obiect ({{key:F3}}) cu {{ui:Nod}} printre agățări. Desenați cu {{cmd:LINE}} sau {{cmd:PLINE}}: cursorul se agață de punctele secțiunii, etichetate „Nor de puncte”. Capetele, mijloacele și centrele desenului au prioritate față de nor, astfel încât închiderea unei polilinii aterizează pe primul ei punct.
4. Schimbați înălțimea secțiunii pentru a trasa alt nivel, apoi dezactivați secțiunea (din nou `S`) pentru a vedea tot norul.

## Opțiuni suplimentare

În {{cmd:POINTCLOUD}}: `C` colorează punctele după culorile fișierului, înălțime, intensitate, clasa LiDAR sau o singură culoare; `SI` setează dimensiunea punctului; `V` ascunde sau arată norul; `Z` face zoom la el; `D` îl detașează.

Fila 3D arată și ea norul, cu cel mai jos punct la nivelul solului, și cu aceeași secțiune.

:::note
Norul nu face parte din desen: nu este salvat în DWG sau DXF, iar anularea nu îl modifică. Atașați-l din nou când deschideți desenul mai târziu. Fișierele se citesc pe acest calculator; nimic nu se încarcă. Scanările foarte mari sunt rărite uniform până la 2 milioane de puncte. Fișierele E57 se deschid până la 6 milioane de puncte și 512 MB, deocamdată: exportați scanările mai mari ca LAS sau LAZ.
:::

## Trasare

{{cmd:PLOT}} tipărește norul împreună cu desenul, sub liniile desenului: într-o trasare a modelului ({{ui:Tot}} include zona norului) și în fiecare fereastră de vizualizare a unei aranjări în pagină, în PDF, PNG, SVG și în ceea ce trimiteți la imprimantă. Tipărește ce se vede pe ecran: secțiunea dacă este activă, culorile alese și nimic dacă l-ați ascuns. Pe hârtie punctele devin pătrățele mici, câștigă cel mai înalt punct din fiecare, iar o trasare păstrează cel mult aproximativ 400.000 dintre ele (un nor foarte dens se tipărește cu pătrățele mai mari). Norul se trasează doar în desenul la care a fost atașat; nu se tipărește niciodată în spațiul hârtie, ci doar printr-o fereastră de vizualizare.

## Mai multe scanări

Scanările luate din poziții diferite pot fi înregistrate într-un singur sistem, rafinate cu ICP și exportate ca un singur LAS sau E57: vezi [Înregistrarea mai multor scanări într-una](topic:register-scans).
