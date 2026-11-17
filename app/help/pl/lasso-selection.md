---
title: Zaznaczanie lassem
summary: Naciśnij i przeciągnij odręczny kontur wokół obiektów, aby je zaznaczyć jako okno, przecięcie lub płot; przełączaj klawiszem Space podczas przeciągania.
keywords: lasso, lassomode, przeciąganie, odręczny, zaznacz, zaznaczenie, okno, przecięcie, płot, space, wielokąt, dotyk, pióro, prostokąt
from: 9ec6154d
---

## Czego się dowiesz

Jak zaznaczać obiekty, rysując wokół nich, i jak przywrócić prostokąt, gdy go potrzebujesz.

## Narysuj lasso

1. Narysuj kilka linii i okręgów blisko siebie.
2. Gdy nie działa żadne polecenie, naciśnij przycisk myszy na pustym miejscu i przeciągnij wokół kilku z nich, najpierw w **prawo**.
3. Puść.

Zaznaczone zostają tylko obiekty, które leżą w całości wewnątrz konturu. Kontur jest rysowany linią ciągłą podczas przeciągania: to lasso okna.

## Okno, przecięcie i płot

To, jakie obiekty zostaną zaznaczone, zależy od pierwszego ruchu przeciągania oraz od {{key:Space}}:

| Przeciągasz | Lasso | Zaznacza |
|---|---|---|
| Najpierw w prawo | Okno (linia ciągła) | Tylko obiekty **w całości wewnątrz** |
| Najpierw w lewo | Przecięcie (przerywana, zielona) | Obiekty wewnątrz **i** obiekty, których dotyka kontur |
| Naciśnij {{key:Space}} podczas przeciągania | Okno, potem przecięcie, potem płot | Płot (przerywana ścieżka, niezamknięta): tylko obiekty, które przecina ścieżka |

1. Naciśnij na pustym miejscu i przeciągnij wokół kilku obiektów, najpierw w **lewo**. Zaznaczone zostaje też wszystko, czego dotyka kontur.
2. Naciśnij {{key:Esc}}.
3. Naciśnij i przeciągnij ponownie; wciąż trzymając przycisk, naciśnij raz {{key:Space}}. Kontur zmieni się w przecięcie; naciśnij {{key:Space}} ponownie, aby uzyskać płot.

{{key:Shift}} przy puszczaniu usuwa obiekty z zaznaczenia (przy ustawieniu „Klikanie obiektów: Dodaje” w {{ui:Ustawienia}}).

## Wewnątrz polecenia

Lasso działa wszędzie tam, gdzie CadCraft prosi o `Wybierz obiekty`: narysuj je, a następnie naciśnij {{key:Enter}}, aby zakończyć. {{cmd:STRETCH}} bierze lasso przecięcia jako swoje okno, więc możesz rozciągnąć część rysunku w kształcie litery L za jednym razem.

{{cmd:TRIM}} i {{cmd:EXTEND}} inaczej traktują przeciąganie: tam przycinają (lub wydłużają) każdy fragment, który przecina ścieżka. Zobacz [Przytnij i wydłuż](topic:trim-and-extend).

## Prostokąt

Kliknięcie na pustym miejscu, ruch i drugie kliknięcie zawsze rysują prostokąt okna (od lewej do prawej) lub przecięcie (od prawej do lewej).

Aby przeciąganie znów rysowało prostokąt, otwórz {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Przeciąganie przy zaznaczaniu}} i wybierz {{ui:Prostokąt}}, albo wpisz {{cmd:LASSOMODE}}, a potem `0`. Wpisz {{cmd:LASSOMODE}}, a potem `1`, aby wrócić do lasso. Wybór jest zapamiętywany w tej przeglądarce.

:::touch
Przeciągnij palcem lub piórem w ten sam sposób. Stuknięcie nadal wybiera jeden obiekt.
:::

## Typowe błędy

- **Nic nie zostało zaznaczone.** Lasso było oknem i nic nie leżało w całości wewnątrz. Zacznij przeciąganie w lewo albo naciśnij {{key:Space}} podczas przeciągania.
- **Przeciąganie przesunęło uchwyt.** Naciśnięcie uchwytu zaznaczonego obiektu przesuwa uchwyt. Zacznij lasso na pustym miejscu.
- **Space zakończył polecenie.** {{key:Space}} przełącza lasso tylko wtedy, gdy przycisk jest wciśnięty; w przeciwnym razie działa jak {{key:Enter}}.
