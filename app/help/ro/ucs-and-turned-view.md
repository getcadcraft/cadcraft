---
title: Rotirea vizualizării și folosirea propriilor coordonate (UCS)
summary: Rotiți vizualizarea cu 90° sau cu orice unghi, fără să mutați nimic din desen, și stabiliți un sistem de coordonate utilizator (UCS), ca punctele, ortogonalul, urmărirea polară, grila și textul nou să urmeze axele proprii ale unei clădiri.
keywords: ucs, sistem de coordonate utilizator, plan, rotire vizualizare, răsucire vizualizare, ucs z, ucs 3point, ucs object, ucs world, ucs numit, ucsfollow, turnleft, turnright, turnworld, clădire înclinată, grilă rotită
from: 6f152c65
---

## Ce veți învăța

Cum să priviți un desen rotit, astfel încât o clădire desenată sub un unghi să se citească drept pe ecran, și cum să tastați puncte de-a lungul propriilor axe. Nimic din desen nu se mișcă în timpul acestui lucru: obiectele își păstrează coordonatele, o rotire nu este o editare, iar desenul nu este marcat ca modificat.

## Rotirea vizualizării cu un sfert

1. Faceți clic pe {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Rotire vizualizare 90° la stânga}} sau {{ui:Rotire vizualizare 90° la dreapta}}.

Desenul se rotește pe ecran în jurul mijlocului zonei de desen. Faceți din nou pentru a continua rotirea.

2. Faceți clic pe {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Înapoi la global}} pentru a-l pune din nou drept.

Comenzile din spatele acestora sunt {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} și {{cmd:TURNWORLD}}. Pentru a da unei dintre ele o tastă, adăugați o linie precum `TL=TURNLEFT` la aliasuri, cu {{cmd:ALIASEDIT}}.

## Alinierea cu o clădire înclinată

1. Tastați `UCS` și apăsați {{key:Enter}}, apoi `OB` și {{key:Enter}}.
2. Faceți clic pe o linie de perete, aproape de capătul care trebuie să fie originea.

UCS începe acum din acel capăt, cu axa X de-a lungul peretelui, iar vizualizarea se rotește astfel încât peretele să fie drept pe ecran. Pictograma de axe din colțul din stânga jos arată unde indică axele UCS.

3. Desenați ca de obicei. Cu UCS setat:
   - `x,y` și `@dx,dy` se măsoară de-a lungul axelor UCS; `d<a` măsoară unghiul față de axa X a UCS.
   - {{ui:Ortogonal}}, urmărirea polară și grila urmează axele UCS, la fel și cursorul în cruce.
   - Textul nou și paragrafele noi merg de-a lungul axei X a UCS; orizontala și verticala lui {{cmd:DIMLINEAR}} le urmează și ele.
   - Coordonatele din bara de stare și cele de la {{cmd:ID}} sunt coordonate UCS.
4. Pentru a tasta un punct global cât timp este setat un UCS, puneți `*` în față: `*0,0` sau `@*100,0`.
5. Tastați `UCS`, {{key:Enter}}, apoi încă {{key:Enter}} pentru a reveni la global.

## Alte moduri de a seta un UCS

La promptul {{cmd:UCS}}:

| Tastați | Ce face |
|---|---|
| un punct | O origine nouă; apoi faceți clic pe un punct de pe noua axă X, sau apăsați {{key:Enter}} pentru a păstra unghiul |
| `Z` | Rotește UCS în jurul originii sale, cu un unghi pe care îl tastați (grade, în sens trigonometric) sau pe care îl alegeți |
| `3` (3 puncte) | O origine, un punct de-a lungul axei X pozitive și un punct de pe partea Y pozitivă |
| `OB` (Obiect) | Dintr-o linie, un arc, un cerc, un segment de polilinie, un text, o referință de bloc, un punct sau o linie de construcție |
| `P` (Anterior) | UCS-ul dinaintea acestuia (ultimele zece sunt păstrate cât timp desenul este deschis) |
| `W` (Global) | Înapoi la global |
| `NA` (Numit) | `S` salvează UCS-ul curent sub un nume, `R` restaurează unul, `D` șterge unul, `?` le listează |

Fiecare schimbare rotește vizualizarea astfel încât noua axă X a UCS să fie dreaptă. {{cmd:PLAN}} rotește vizualizarea fără să schimbe UCS-ul: {{key:Enter}} pentru UCS-ul curent, `U` pentru unul salvat, `W` pentru global.

## De reținut

- Fiecare panou al unui ecran împărțit își păstrează propria rotire. UCS aparține desenului.
- Foile lucrează în coordonate de hârtie; setați un UCS pe fila {{ui:Model}}, sau în interiorul unei ferestre de vizualizare.
- Ferestrele de selecție trase într-o vizualizare rotită selectează ceea ce se află în interiorul lor pe ecran.
- Rutinele LISP primesc puncte în UCS de la `getpoint`, pot citi `UCSORG`, `UCSXDIR`, `UCSYDIR` și `VIEWTWIST`, iar `trans` convertește între global, UCS și afișare.

:::note
Un fișier salvat păstrează UCS-ul și rotirea vizualizării într-o versiune ulterioară; până atunci, acestea rămân cât timp desenul este deschis.
:::
