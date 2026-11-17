---
title: Uruchamianie rutyn LISP
summary: Co uruchamia LISP w CadCraft (funkcje, monity, polecenia, obiekty, okna dialogowe, obiekty vla), jak wpisać LISP w wierszu poleceń i czego jeszcze nie ma.
keywords: lisp, rutyna, lsp, dcl, okno dialogowe, polecenie, defun, entget, ssget, vla, vlax, vl, getpoint, błąd, zgodność, co działa
from: 571bc077
---

## Czego się dowiesz

Czego się spodziewać, gdy wczytasz rutynę LISP napisaną dla innego programu CAD: które części działają w CadCraft, a których jeszcze nie ma.

CadCraft ma własny LISP. Powstał na podstawie publicznego opisu AutoLISP, a nie czyjegoś programu, więc większość rutyn napisanych dla AutoCAD działa bez zmian. Jeśli czegoś brakuje, wiersz poleceń podaje nazwę funkcji, dzięki czemu odróżnisz brak w CadCraft od błędu w rutynie.

## Wpisz LISP w wierszu poleceń

Wpisz wyrażenie zaczynające się od `(` i naciśnij {{key:Enter}}: `(+ 1 2)` wypisuje `3`. `!name` wypisuje wartość zmiennej. Wyrażenie, które jeszcze się nie zamknęło, czeka na następny wiersz.

W monicie odpowiada wyrażenie: przy monicie „Podaj promień” wpisz `(* 2 12.5)`, aby otrzymać 25.

## Co działa

- **Język:** `defun` (z lokalnymi zmiennymi po `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` oraz `*error*` (lokalna `*error*` działa). Nazwy nie rozróżniają wielkości liter; liczby całkowite i rzeczywiste są rozróżniane, jak można się spodziewać (`(/ 7 2)` daje 3).
- **Funkcje wbudowane:** matematyka, listy (`car`, `cdr` i ich rodzina, `assoc`, `nth`, `member`, `subst`, `append`…), łańcuchy (`strcat`, `substr`, `strcase`, `wcmatch`…), konwersje (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometria (`polar`, `distance`, `angle`, `inters`) oraz pliki (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Polecenia:** `(defun c:NAME …)` tworzy polecenie. `(command …)` i `(command-s …)` uruchamiają polecenia CadCraft, z `pause` na Twoją odpowiedź.
- **Monity:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` ze słowami kluczowymi `initget`, `entsel`, `nentsel` oraz `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, z listami filtrów i testami `-4`).
- **Obiekty jako listy:** `entget`, `entmod`, `entmake` (także bloki), `entdel`, `entlast`, `entnext` (atrybuty odwołania do bloku idą po nim jako ATTRIB, a potem SEQEND, więc rutyny atrybutów działają), `handent`, zbiory zaznaczenia, `tblsearch` i `tblnext`, `layoutlist`, `regapp`, `getvar` i `setvar` dla ustawień, które ma CadCraft.
- **Okna dialogowe:** pliki `.dcl` z `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Wyświetlają się przyciski, pola edycji, listy, listy rozwijane, przełączniki, przyciski opcji, wiersze, kolumny i pola. Działa też rutyna, która zapisuje swoje okno dialogowe do pliku tymczasowego.
- **Obiekty:** `vl-load-com` (nic nie robi; nic nie wymaga wczytywania), funkcje list i łańcuchów `vl-`, `vl-catch-all-apply` oraz właściwości `vla-get-…` / `vla-put-…`, metody `vla-…` i `vlax-for` po kolekcjach Blocks, Layers i Layouts, przestrzeń modelu i definicje bloków, z wariantami i tablicami bezpiecznymi (safe arrays).

## Przetestowane rutyny

Testy CadCraft uruchamiają zestaw rutyn napisanych do tych sprawdzeń (filtry zaznaczenia, monity, polecenia, obiekty, obsługa błędów) oraz jedną popularną rutynę, o którą ludzie prosili po nazwie: Lee Mac's DelBlocks, po nazwie przez jej okno dialogowe i przez wskazanie bloku. CadCraft ma też własne {{cmd:DELBLOCKS}}, więc rutyny do tego nie potrzebujesz.

## Jeszcze nie zbudowano

- `grread` (samodzielne śledzenie myszy), reaktory (`vlr-…`), funkcje krzywych (`vlax-curve-…`), słowniki i dane rozszerzone (`dictsearch`, xdata w `entget` i `entmake`) oraz funkcje `acet-…` z Express Tools.
- Obrazy i slajdy w oknach dialogowych wyświetlają się jako puste ramki.
- Uruchamianie innego programu, rejestr Windows i pliki spoza tych, które wczytujesz: rutyna może zapisywać i czytać własne pliki tymczasowe, które istnieją do zamknięcia strony.

Gdy rutyna sięgnie po jedną z tych rzeczy, wiersz poleceń pokazuje "no function definition" i nazwę oraz informuje, że CadCraft tego jeszcze nie ma.

## Błędy, których warto unikać

- **Polecenie o tej samej nazwie co polecenie CadCraft.** Polecenie CadCraft pozostaje. Uruchom rutynę jako `(c:NAME)` w wierszu poleceń.
- **Uruchamianie LISP, któremu nie ufasz.** Rutyna może zmienić wszystko w rysunku, ale nic poza nim: nie sięgnie do Twoich plików, innych stron ani innych aplikacji.
