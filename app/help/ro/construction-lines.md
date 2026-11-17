---
title: Linii de construcție și raze
summary: Desenați linii care se prelungesc fără capăt (XLINE) sau dintr-un punct într-o singură direcție (RAY), ca să aliniați lucrurile, apoi tăiați-le în linii obișnuite.
keywords: xline, ray, rază, linie de construcție, linii de construcție, linie infinită, linie de ghidaj, linie de referință, bisectare, linie decalată, linii de aranjare, xl
from: b6c398bc
---

## Ce veți învăța

Cum desenați linii de construcție ca să aliniați lucrurile în timpul desenării: prin două puncte, orizontal sau vertical, sub un unghi, la jumătatea distanței dintre două direcții sau la o distanță fixă de o linie. Și cum le tăiați în linii obișnuite când și-au îndeplinit rolul.

## Două tipuri

- O **linie de construcție** ({{cmd:XLINE}}) se prelungește fără capăt în ambele direcții.
- O **rază** ({{cmd:RAY}}) pornește dintr-un punct și se prelungește fără capăt într-o singură direcție.

Ambele se desenează pe toată suprafața de desenare, indiferent de zoom, în ecranul divizat și în ferestrele de vizualizare de pe o foaie. {{ui:Extinderi}} le lasă afară, astfel încât zoomul la desen încadrează în continuare ce ați desenat.

## Desenați linii de construcție

1. Faceți clic pe {{ui:Desen}} › {{ui:Mai multe}} › {{ui:Linie de construcție}}, sau tastați `XL` și apăsați {{key:Enter}}.
2. Faceți clic într-un punct. Fiecare clic următor adaugă o linie de construcție prin primul punct și prin cel pe care l-ați atins.
3. Apăsați {{key:Enter}} pentru a încheia.

În locul primului punct puteți tasta o opțiune:

| Opțiune | Ce face |
|---|---|
| `H` (Orizontal) | Linii orizontale, câte una prin fiecare punct pe care faceți clic. |
| `V` (Vertical) | Linii verticale prin fiecare punct. |
| `A` (Unghi) | Linii sub un unghi pe care îl tastați (în grade, în sens trigonometric față de axa X), prin fiecare punct. `R` (Referință) măsoară unghiul față de o linie pe care o alegeți. |
| `B` (Bisectoare) | Faceți clic pe colț, apoi pe un punct de-a lungul unei laturi: fiecare punct pe care faceți clic de-a lungul celeilalte laturi adaugă linia la jumătatea distanței dintre cele două. |
| `O` (Decalare) | Tastați o distanță, alegeți o linie, apoi faceți clic pe latură: o linie de construcție la acea distanță de ea, paralelă. `T` (Prin) o pune prin punctul pe care faceți clic în schimb. Distanța este reținută pentru următoarea dată. |

## Desenați raze

1. Faceți clic pe {{ui:Desen}} › {{ui:Mai multe}} › {{ui:Rază}}, sau tastați `RAY` și apăsați {{key:Enter}}.
2. Faceți clic unde pornesc razele.
3. Faceți clic într-un punct prin care trece fiecare rază. Apăsați {{key:Enter}} pentru a încheia.

## Agățați-le de ele și tăiați-le

Liniile de construcție și razele se agață la Cel mai apropiat, Perpendicular și Intersecție. Nu au capete și nici mijloc, deci Capăt și Mijloc nu găsesc nimic pe ele.

Ele se taie și sunt tăiate ca alte linii în {{cmd:TRIM}} și {{cmd:BREAK}}:

- Tăiați un capăt de la o linie de construcție și ea devine o rază care pornește de la tăietură.
- Tăiați partea îndepărtată a unei raze și ea devine o linie obișnuită.
- Rupeți o linie de construcție într-un punct și obțineți două raze.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} și {{cmd:STRETCH}} funcționează și asupra lor. Selecția cu fereastră nu le alege niciodată, pentru că nicio fereastră nu poate cuprinde o linie fără capăt; o fereastră de intersectare sau un clic da.

:::note
Un DWG (orice versiune) și un DXF 2000 le păstrează ca linii de construcție. DXF R12 nu are așa ceva, deci acolo devin linii care traversează desenul, iar salvarea o spune. O trasare sau un PDF le desenează doar pe zona care se imprimă.
:::
