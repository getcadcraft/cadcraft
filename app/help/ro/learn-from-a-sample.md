---
title: Învățați dintr-un desen exemplu
summary: Deschideți casa exemplu sau exemplul as-built al CadCraft și parcurgeți planșele, cartușul, cotele și straturile.
keywords: exemplu, exemple, desen exemplu, învățare, tutorial, parcurs, cartuș, planșe, as-built, set arhitectural, deschidere exemplu
from: aa1f960a
---

## Ce veți învăța

Cum este construit un set finalizat: spațiul modelului, planșe cu ferestre de vizualizare la o scară, un cartuș cu atribute, cote în picioare și inci și în milimetri, straturi. Exemplele sunt ale CadCraft și sunt libere pentru orice utilizare (CC0).

## Deschideți un exemplu

1. În panoul din stânga, sub {{ui:Desen}}, faceți clic pe {{ui:Deschidere un exemplu}} (sau tastați {{cmd:SAMPLES}}; în stilurile cu panglică, este în meniul {{ui:Fișier}}).
2. Faceți clic pe {{ui:Deschidere}} lângă {{ui:Casa exemplu}}. Se deschide într-o filă proprie, deci lucrarea dumneavoastră rămâne deschisă.

## Priviți prin model

1. Faceți clic pe {{ui:Extinderi}} (sau tastați `ZOOM`, apoi `E`): planul de nivel, fațada, o secțiune și un detaliu de perete.
2. În {{ui:Straturi}}, faceți clic pe ochiul de lângă `A-ANNO-DIMS` ca să ascundeți cotele, și din nou ca să le afișați.
3. Faceți clic pe o ușă: {{ui:Proprietăți}} arată o referință de bloc `DOOR-32`. Ușile și ferestrele sunt blocuri, plasate rotite și oglindite.

## Planșele

1. Faceți clic pe {{ui:A-101 FLOOR PLAN}} sub desen: o planșă ARCH D cu o fereastră de vizualizare la 1/4" = 1'-0".
2. Faceți dublu clic în interiorul ferestrei de vizualizare ca să lucrați pe model prin ea; faceți dublu clic în afara ei ca să reveniți.
3. {{ui:A-501 DETAILS}} arată detaliul peretelui la 1 1/2" = 1'-0": același model, altă scară.

## Cartușul

1. Pe orice planșă, faceți dublu clic pe cartuș: {{ui:Editare atribute}} listează PROJECT, TITLE, SCALE, DATE, DRAWN și SHEET.
2. Schimbați DRAWN cu inițialele dumneavoastră și faceți clic pe {{ui:OK}}.
3. Ca să schimbați cartușul însuși pe toate planșele, selectați-l și alegeți {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Editare pe loc}}. Vedeți [Atribute](topic:attributes).

## As-built

Deschideți {{ui:Exemplu as-built}} la fel. Punctele gri de pe `SCAN-SLICE` sunt o felie dintr-o scanare; pereții de pe `AB-WALL` au fost trasați peste ele. Peretele estic este deviat de la unghi drept cu 35 mm: cotele o spun de două ori, în milimetri (`AB-DIMS-MM`) și în picioare și inci (`AB-DIMS-FTIN`, aceleași lungimi printr-o scară de măsurare). Norii de revizuire roșii de pe `REV-1` marchează ce a găsit măsurătoarea.

## Mai departe

- [Schimbarea dimensiunii textului cotei](topic:change-dimension-text-size)
- [Trasare în PDF](topic:plot-pdf): trasați {{ui:A-101 FLOOR PLAN}}.
