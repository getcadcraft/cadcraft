---
title: Wprowadzanie współrzędnych i odległości
summary: Wszystkie sposoby wpisania punktu, odległości, kąta lub liczby w wierszu poleceń CadCraft, z przykładami.
keywords: wprowadzanie dynamiczne, dyn, F12, Tab, współrzędne, bezwzględne, względne, biegunowe, @, bezpośrednia odległość, kąt, stopnie, ostatni punkt, lastpoint, wpisywanie punktów, wprowadzanie, arytmetyka, obliczenie, kalkulator, cal, plus, ułamek, wyrażenie
from: 7de9252d
---

## Punkty

Gdy monit pyta o punkt, wpisz jedną z tych postaci i naciśnij {{key:Enter}}:

| Wpisujesz | Znaczenie | Przykład |
|---|---|---|
| `x,y` | Bezwzględny: mierzony od początku układu 0,0 | `2500,1200` |
| `#x,y` | Również bezwzględny (akceptowany ze względu na przyzwyczajenie) | `#2500,1200` |
| `@dx,dy` | Względny: w poziomie i w pionie od ostatniego punktu | `@600,0` |
| `@d<a` | Względny biegunowy: odległość i kąt od ostatniego punktu | `@1500<45` |
| `d<a` | Bezwzględny biegunowy: odległość i kąt od początku układu | `3000<90` |
| pojedyncza liczba | Bezpośrednia odległość: tyle od punktu bazowego, w kierunku krzyżyka | `1200` |
| `*x,y`, `@*dx,dy` | Współrzędne światowe, gdy ustawiono UCS | `*0,0` |

Gdy ustawiono UCS ({{cmd:UCS}}), `x,y`, `@dx,dy` i kąt w `d<a` są mierzone wzdłuż osi UCS. Zobacz [Obracanie widoku i użycie własnych współrzędnych](topic:ucs-and-turned-view).

Możesz też kliknąć w rysunku; przyciąganie do obiektów i Orto działają przy kliknięciach.

Zasady:

- Przecinek oddziela X od Y. Części dziesiętne zapisuje się kropką: `1250.75,300`.
- Wartości ujemne idą w lewo i w dół: `@-600,0`.
- Nie wpisuj spacji: {{key:Space}} zatwierdza wiersz, tak jak {{key:Enter}}.
- Liczby mogą mieć wykładnik: `1e3` to 1000.
- Jednostek się nie wpisuje, podobnie jak zapisu w stopach i calach. Wpisuj zwykłe liczby w jednostkach rysunku.

## Ostatni punkt

`@` liczy od **ostatniego punktu podanego w każdym monicie o punkt**, w dowolnym poleceniu: kliknięcia, przyciągnięcia lub wpisanego punktu. Jest zapamiętywany między poleceniami, dzięki czemu możesz zacząć nową linię `@0,500` od miejsca, w którym zakończyła się poprzednia. Zanim podasz jakikolwiek punkt, `@` liczy od 0,0.

Kilka miejsc, w których to ma znaczenie:

- W {{cmd:COPY}}, po pierwszej kopii ostatnim punktem jest punkt tej kopii. `@600,0` dwa razy umieszcza kopie w odległości 600 i 1200 od oryginału.
- Po umieszczeniu wymiaru ostatnim punktem jest miejsce, w którym umieszczono linię wymiarową, a nie koniec wymiaru.

W razie wątpliwości użyj punktu bezwzględnego, przyciągnięcia albo bezpośredniej odległości.

## Wprowadzanie bezpośredniej odległości

Sama liczba to odległość od **punktu bazowego** (punktu, z którego zaczyna się gumka) w kierunku krzyżyka:

1. Przesuń krzyżyk w wybranym kierunku.
2. Wpisz odległość i naciśnij {{key:Enter}}.

Przy włączonym {{ui:Orto}} kierunek przyciąga się do poziomu lub pionu, dzięki czemu jest to najszybszy sposób rysowania prostych ścian. Jeśli nie ma punktu bazowego albo krzyżyk znajduje się dokładnie na nim, liczba zostaje odrzucona z komunikatem „Wymagany punkt lub słowo kluczowe opcji.”

## Kąty

- W stopniach, jako zwykła liczba: `30`, `-45`, `112.5`.
- Mierzone przeciwnie do ruchu wskazówek zegara od dodatniego kierunku osi X (w prawo): 0 to prawo, 90 to góra, 180 to lewo, 270 lub -90 to dół.
- Tam, gdzie pytanie dotyczy kąta (obrót, kąt tekstu), możesz też kliknąć: kąt mierzony jest od punktu bazowego do kliknięcia. Zanim istnieje punkt bazowy, pierwsze kliknięcie go ustawia, a monit pyta o drugi punkt.

## Odległości

Tam, gdzie pytanie dotyczy odległości (promień, odsunięcie, wysokość tekstu, współczynnik skali):

- wpisz dodatnią liczbę (w rysunku w stopach i calach także `12'6"` lub `6-1/2`: zobacz [Stopy i cale](topic:units-papers-scales#feet-and-inches-and-fractions)), albo
- kliknij punkt: odległość od punktu bazowego polecenia do tego punktu, albo
- kliknij dwa punkty, gdy nie ma punktu bazowego: monit zmienia się na `Wskaż drugi punkt`.

„Wymagana jest dodatnia liczba lub dwa punkty.” oznacza, że wartość nie była liczbą albo była ujemna.

## Działania arytmetyczne we wpisanej wartości

Wszędzie tam, gdzie wpisuje się długość, współrzędną, kąt lub liczbę (wiersz poleceń, wprowadzanie dynamiczne, pola Właściwości i okna dialogowe), możesz wpisać obliczenie z użyciem `+`, `-`, `*`, `/` i nawiasów zamiast liczyć wcześniej:

| Wpisz | Wynik |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (w rysunku w stopach i calach) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, w jednostkach rysunku (gdy są ustawione) |
| `@4+7/16,0` | punkt o 4.4375 w prawo od ostatniego |
| `360/7` | kąt 51.43 stopnia |

- Myślnik wpisany w długość nadal do niej należy: `4-7/16` to 4 7/16, a `24'-6"` to 24 stopy 6 cali. Aby odjąć po znaku stopy, najpierw zakończ długość, `24'-0"-6"`, albo ująć obliczenie w nawiasy z spacjami wokół myślnika, `(24' - 6")` (w nawiasach spacja jest spacją; poza nimi naciśnięcie {{key:Enter}}).
- Zwykła liczba dodana do długości jest w jednostkach rysunku; mnożenie lub dzielenie przez nią skaluje długość. Dwie długości pomnożone przez siebie dają pole, dlatego `2'*3'` zostaje odrzucone.
- Działają też `abs`, `round`, `ceil` i `floor`: `round(10/3)`.
- Obliczenie, którego nie da się odczytać, zostaje odrzucone z informacją, gdzie jest błąd, na przykład „Obliczenie kończy się zbyt wcześnie (znak 3): brakuje wartości.” Nic nigdy nie jest odczytywane jako 0. {{cmd:CAL}} wypisuje wartość obliczenia.

## Wprowadzanie dynamiczne

{{ui:Dyn}} ({{key:F12}}, na pasku stanu) wyświetla wartości przy krzyżyku, gdy polecenie pyta o punkt.

- Gdy nie ma jeszcze punktu bazowego (pierwszy punkt linii), dwa pola to **X** i **Y**.
- Potem są to **odległość** i **kąt** od ostatniego punktu.

Wpisywanie nadal trafia do wiersza poleceń; pole przy krzyżyku je pokazuje, a gumka podąża za nim.

1. Wpisz wartość: trafia do podświetlonego pola.
2. Naciśnij {{key:Tab}} (lub przecinek po X). Wartość zostaje zablokowana (pokazana pogrubieniem), a podświetla się następne pole. Zablokowana odległość utrzymuje gumkę o tej długości, gdy celujesz myszą.
3. Wpisz drugą wartość albo tylko wskaż kierunek i naciśnij {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} rysuje 50 w górę od ostatniego punktu.

Naciśnięcie {{key:Enter}} po jednej wartości bez {{key:Tab}} działa jak bezpośrednie wprowadzenie odległości. Stopy i cale działają także w polach (`12'6"`). Monity o odległość i kąt (promień okręgu, obrót) też pokazują wartość przy krzyżyku.

## Opcje i wartości domyślne

- Opcje są podane w nawiasach kwadratowych. Wpisz wielkie litery opcji (`D` dla `[Średnica (D)]`, `CL` dla `[Zamknij (CL)]`) i naciśnij {{key:Enter}}. Działają też dłuższe początki słowa (`DIA`).
- Wartość domyślna jest podana w nawiasach ostrokątnych, na przykład `<500>`. Naciśnij {{key:Enter}} lub kliknij prawym przyciskiem, aby ją użyć.

## Inne układy klawiatury i klawiatura numeryczna

Nazwy poleceń, skróty i litery opcji są łacińskie. Przy układzie greckim, cyrylicznym (rosyjskim, ukraińskim, białoruskim, serbskim, macedońskim, bułgarskim), hebrajskim, arabskim, perskim, tajskim lub koreańskim nie musisz przełączać układu: gdy wpisane słowo nie jest poleceniem, skrótem ani opcją w tej postaci, CadCraft odczytuje je według naciśniętych klawiszy. Klawisz oznaczony `L` na łacińskiej klawiaturze nadal uruchamia `LINE`, a klawisz `C` nadal odpowiada opcji Zamknij (C), niezależnie od litery, jaką układ na nim umieszcza. Lista pasujących poleceń nad wierszem poleceń działa według tej samej zasady. Tekst wpisywany tam, gdzie polecenie wymaga tekstu (treść {{cmd:TEXT}}, nazwa), nigdy nie jest zmieniany.

Na układach, w których klawisz dziesiętny klawiatury numerycznej daje przecinek, ten klawisz wpisuje kropkę dziesiętną w wierszu poleceń i w polach liczbowych, dzięki czemu `12.5` można wpisać na klawiaturze numerycznej. Przecinek na klawiaturze głównej nadal oddziela `x,y`.

Obie opcje można wyłączyć w {{ui:Ustawienia}}: {{ui:Commands on a non-Latin keyboard layout}} i {{ui:Keypad decimal key}}.

## Wyświetlanie współrzędnych

Pasek stanu pokazuje współrzędne X i Y krzyżyka (w UCS, gdy jest ustawiony), po przyciągnięciach i Orto. Gdy polecenie ma punkt bazowy, dodaje `Δ` z odległością i kątem od tego punktu, na przykład `Δ 1500 < 30°`: liczby, które wpisałbyś jako `@1500<30`.

Użyj {{cmd:ID}}, aby wypisać współrzędne punktu, a {{cmd:DIST}}, aby zmierzyć odległość między dwoma punktami.
