---
title: Ściągawka: 40 codziennych poleceń
summary: Jedna strona z 40 poleceniami, których użyjesz najczęściej, ich skróconymi nazwami i klawiszami, które oszczędzają czas. Pobierz ją jako PDF do wydrukowania.
keywords: ściągawka, szybka pomoc, polecenia, aliasy, skrócone nazwy, początkujący, usuń, przytnij, drukuj, pdf, skróty klawiszowe
from: 2d40edc4
---

Wpisz skróconą nazwę (alias) i naciśnij Enter albo naciśnij narzędzie. Esc anuluje. Enter w pustym wierszu powtarza ostatnie polecenie.

**Wydrukuj:** [cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf) (jedna strona A4; na papierze Letter drukuj z opcją „dopasuj do strony”).

## Rysowanie

| Wpisz | Polecenie | Co robi |
|---|---|---|
| `L` | {{cmd:LINE}} | Rysuje linie proste |
| `PL` | {{cmd:PLINE}} | Rysuje połączony ciąg linii i łuków |
| `C` | {{cmd:CIRCLE}} | Rysuje okrąg (środek i promień) |
| `A` | {{cmd:ARC}} | Rysuje łuk |
| `REC` | {{cmd:RECTANG}} | Rysuje prostokąt z dwóch narożników |
| `POL` | {{cmd:POLYGON}} | Rysuje wielokąt foremny |
| `EL` | {{cmd:ELLIPSE}} | Rysuje elipsę |
| `DT` | {{cmd:TEXT}} | Zapisuje jeden wiersz tekstu |
| `T` | {{cmd:MTEXT}} | Zapisuje tekst zawijany (akapit) |
| `H` | {{cmd:HATCH}} | Wypełnia obszar wzorem |

## Modyfikowanie

| Wpisz | Polecenie | Co robi |
|---|---|---|
| `M` | {{cmd:MOVE}} | Przesuwa obiekty |
| `CO` | {{cmd:COPY}} | Kopiuje obiekty |
| `RO` | {{cmd:ROTATE}} | Obraca obiekty wokół punktu |
| `SC` | {{cmd:SCALE}} | Powiększa lub zmniejsza obiekty |
| `MI` | {{cmd:MIRROR}} | Odbija obiekty względem linii |
| `O` | {{cmd:OFFSET}} | Rysuje równoległą kopię w zadanej odległości |
| `TR` | {{cmd:TRIM}} | Przycina obiekty do miejsca, w którym przecinają je inne |
| `EX` | {{cmd:EXTEND}} | Wydłuża obiekty do innych |
| `F` | {{cmd:FILLET}} | Zaokrągla narożnik łukiem |
| `CHA` | {{cmd:CHAMFER}} | Ścina narożnik prostą krawędzią |
| `E` | {{cmd:ERASE}} | Usuwa obiekty |
| `X` | {{cmd:EXPLODE}} | Rozbija blok lub polilinię na części |
| `S` | {{cmd:STRETCH}} | Przesuwa końce znajdujące się w oknie przecinającym |
| `AR` | {{cmd:ARRAY}} | Kopiuje w siatce lub po okręgu |
| `J` | {{cmd:JOIN}} | Łączy linie i łuki w jeden obiekt |
| `BR` | {{cmd:BREAK}} | Przecina obiekt na dwa albo wycina z niego fragment |

## Wymiarowanie

| Wpisz | Polecenie | Co robi |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | Wymiaruje poziomo lub pionowo |
| `DAL` | {{cmd:DIMALIGNED}} | Wymiaruje wzdłuż ukośnej linii |
| `DRA` | {{cmd:DIMRADIUS}} | Wymiaruje promień |
| `DAN` | {{cmd:DIMANGULAR}} | Wymiaruje kąt |

## Bloki i warstwy

| Wpisz | Polecenie | Co robi |
|---|---|---|
| `B` | {{cmd:BLOCK}} | Tworzy blok z obiektów |
| `I` | {{cmd:INSERT}} | Wstawia blok |
| `LA` | {{cmd:LAYER}} | Otwiera warstwy |

## Widok i zapytania

| Wpisz | Polecenie | Co robi |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | Przybliża, oddala lub pokazuje wszystko (E) |
| `DI` | {{cmd:DIST}} | Mierzy odległość i kąt |
| `LI` | {{cmd:LIST}} | Pokazuje szczegóły obiektu |
| `MA` | {{cmd:MATCHPROP}} | Przenosi wygląd jednego obiektu na inne |

## Plik

| Wpisz | Polecenie | Co robi |
|---|---|---|
| `U` | {{cmd:UNDO}} | Cofa ostatnie polecenie |
| `SAVE` | {{cmd:SAVE}} | Zapisuje rysunek |
| `PLOT` | {{cmd:PLOT}} | Drukuje do PDF |

## Klawisze

Ctrl (Cmd na Macu): Z cofnij · Y ponów · S zapisz · P drukuj.  F3 przyciąganie do obiektów · F8 ortogonalnie · F10 biegunowo.  Space lub Enter powtarza ostatnie polecenie · kółko przybliża i oddala · przeciągnięcie kółka przesuwa widok

Dopiero zaczynasz kreślić? Wpisz `TOUR`, aby przejść przewodnikiem przez pierwszy rysunek, przeczytaj [Pierwsze kroki](topic:getting-started) albo zobacz wszystkie polecenia w [Poleceniach](topic:commands). Jeśli przychodzisz z innego programu do kreślenia: [Jeśli pracujesz w innym programie do kreślenia](topic:coming-from) i [mapa poleceń](topic:command-map).
