---
title: Selectare cu lasou
summary: Apăsați și trageți un contur liber în jurul obiectelor pentru a le selecta, ca fereastră, intersectare sau gard; comutați cu Space în timp ce trageți.
keywords: lasou, lassomode, tragere, mână liberă, selectare, selecție, fereastră, intersectare, gard, Space, poligon, atingere, creion, dreptunghi
from: 9ec6154d
---

## Ce veți învăța

Cum să selectați obiecte desenând în jurul lor și cum să reveniți la dreptunghi atunci când doriți.

## Desenați un lasou

1. Desenați câteva linii și cercuri apropiate.
2. Fără nicio comandă în execuție, apăsați butonul mouse-ului pe un loc gol și trageți în jurul unora dintre ele, mutând **spre dreapta** mai întâi.
3. Eliberați.

Sunt selectate numai obiectele complet în interiorul conturului. Conturul este desenat continuu în timp ce trageți: acesta este un lasou de tip fereastră.

## Fereastră, intersectare și gard

Ce obiecte obțineți depinde de prima mișcare a trasării și de {{key:Space}}:

| Trageți | Lasou | Selectează |
|---|---|---|
| Mai întâi spre dreapta | Fereastră (contur continuu) | Numai obiectele **complet în interior** |
| Mai întâi spre stânga | Intersectare (întrerupt, verde) | Obiectele din interior **și** obiectele atinse de contur |
| Apăsați {{key:Space}} în timp ce trageți | Fereastră, apoi intersectare, apoi gard | Gard (o cale întreruptă, nedeschisă): numai obiectele pe care le traversează calea |

1. Apăsați pe un loc gol și trageți în jurul unor obiecte, mutând **spre stânga** mai întâi. Sunt selectate și toate obiectele atinse de contur.
2. Apăsați {{key:Esc}}.
3. Apăsați și trageți din nou; cât timp țineți butonul apăsat, apăsați o dată {{key:Space}}. Conturul devine intersectare; apăsați din nou {{key:Space}} pentru gard.

{{key:Shift}} în timp ce eliberați scoate obiectele din selecție (cu „Clic pe obiecte: Adaugă” în {{ui:Settings}}).

## În interiorul unei comenzi

Lasoul funcționează oriunde CadCraft cere `Select objects`: desenați-l, apoi apăsați {{key:Enter}} pentru a încheia. {{cmd:STRETCH}} folosește un lasou de intersectare ca fereastră, astfel încât puteți întinde într-o singură operație o parte în formă de L a desenului.

{{cmd:TRIM}} și {{cmd:EXTEND}} folosesc trasarea altfel: acolo taie (sau prelungesc) fiecare bucată pe care o traversează calea. Vezi [Tăiere și prelungire](topic:trim-and-extend).

## Dreptunghiul

Un clic pe spațiu gol, o mutare și un al doilea clic desenează întotdeauna fereastra dreptunghi (de la stânga la dreapta) sau intersectarea (de la dreapta la stânga).

Pentru ca o trasare să deseneze din nou dreptunghiul, deschideți {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Dragging to select}} și alegeți {{ui:Rectangle}}, sau tastați {{cmd:LASSOMODE}}, apoi `0`. Tastați {{cmd:LASSOMODE}}, apoi `1` pentru lasou. Alegerea rămâne salvată în acest browser.

:::touch
Trageți cu un deget sau cu un creion în același fel. O atingere selectează în continuare un singur obiect.
:::

## Greșeli frecvente

- **Nu s-a selectat nimic.** Lasoul era de tip fereastră, iar niciun obiect nu se afla complet în interior. Începeți trasarea spre stânga sau apăsați {{key:Space}} în timp ce trageți.
- **Trasarea a mutat un mâner.** Apăsarea pe mânerul unui obiect selectat mută mânerul. Începeți lasoul pe un loc gol.
- **Space a încheiat comanda.** {{key:Space}} schimbă lasoul doar cât timp butonul este ținut apăsat; altfel înseamnă {{key:Enter}}.
