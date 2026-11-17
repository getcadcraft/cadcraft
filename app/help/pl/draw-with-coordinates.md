---
title: Rysowanie za pomocą współrzędnych
summary: Narysuj dokładny obrys podłogi, wpisując współrzędne bezwzględne, względne i biegunowe oraz podając bezpośrednią odległość.
keywords: line, pline, polyline, współrzędne, względne, biegunowe, bezwzględne, bezpośrednia odległość, @, wpisywanie punktów, dokładne, orto
from: 19e82350
---

## Co wykonasz

Obrys pomieszczenia w kształcie litery L, 6000 na 4500, z wycięciem 2000 na 1500, narysowany dokładnie, oraz ściana pod kątem 30 stopni. Użyjesz wszystkich czterech sposobów wpisywania punktu. Pracuj w milimetrach: jedna jednostka rysunku to jeden milimetr.

Pełne zestawienie wszystkich formatów znajdziesz w [Wprowadzanie współrzędnych i odległości](topic:coordinate-entry).

## Zanim zaczniesz

1. Otwórz CadCraft. Jeśli jest otwarty rysunek, najpierw kliknij {{ui:Nowa}}.
2. Naciśnij {{key:Esc}}, aby nic nie było zaznaczone. Prawy panel pokazuje {{ui:Bieżące ustawienia}}.
3. Ustaw {{ui:Jednostki}} na {{ui:Milimetry}}. Nic nie zostaje przeskalowane; to tylko mówi arkuszom i wydrukom, co oznacza jednostka.

## Współrzędne bezwzględne: pierwszy punkt

Współrzędna bezwzględna to położenie mierzone od początku układu, wpisywane jako `x,y`.

1. Wpisz `L` i naciśnij {{key:Enter}}. Monit brzmi `Wskaż pierwszy punkt:`.
2. Wpisz `0,0` i naciśnij {{key:Enter}}.

Linia rozciąga się teraz od początku układu do krzyżyka. Współrzędne na pasku stanu pokazują odległość i kąt od punktu początkowego, gdy się poruszasz.

## Współrzędne względne: @dx,dy

Współrzędna względna wpisywana jest jako `@dx,dy`: tyle w poprzek, tyle w górę, liczone od ostatniego punktu. Liczby ujemne oznaczają w lewo lub w dół.

3. Wpisz `@6000,0` i naciśnij {{key:Enter}}. Linia o długości 6000 biegnie w prawo.
4. Wpisz `@0,3000` i naciśnij {{key:Enter}}.
5. Wpisz `@-2000,0` i naciśnij {{key:Enter}}.
6. Wpisz `@0,1500` i naciśnij {{key:Enter}}.

Powinny być widoczne cztery połączone linie, wspinające się po prawej stronie pomieszczenia.

## Bezpośrednie wprowadzanie odległości: sama liczba

Gdy wpiszesz pojedynczą liczbę, CadCraft przejdzie tę odległość w kierunku krzyżyka. Włącz Orto, aby kierunek przyciągał się do poziomu lub pionu.

7. Naciśnij {{key:F8}} albo kliknij {{ui:Orto}} na pasku stanu. Pasek stanu pokazuje „Orto włączone”.
8. Przesuń krzyżyk na lewo od ostatniego punktu. Linia rozciągana pozostaje pozioma.
9. Wpisz `4000` i naciśnij {{key:Enter}}. Linia idzie 4000 w lewo.
10. Przesuń krzyżyk poniżej ostatniego punktu.
11. Wpisz `4500` i naciśnij {{key:Enter}}. Wracasz do punktu początkowego.
12. Naciśnij {{key:Enter}} przy pustym monicie, aby zakończyć polecenie.

Masz teraz zamknięty obrys w kształcie litery L, złożony z sześciu osobnych linii.

13. Kliknij {{ui:Zasięg}}, aby zobaczyć całość.

:::mac
Klawisz F8 na klawiaturze Mac może sterować odtwarzaniem multimediów. Przytrzymaj **fn** i naciśnij F8 albo kliknij {{ui:Orto}}. Zobacz [Klawisze, myszy i gładziki](common:keys).
:::

## Współrzędne biegunowe: @odległość<kąt

Współrzędna biegunowa wpisywana jest jako `@odległość<kąt`. Kąty podawane są w stopniach, mierzonych przeciwnie do ruchu wskazówek zegara od dodatniego kierunku X: 0 to w prawo, 90 to w górę, 180 to w lewo, 270 (lub -90) to w dół.

14. Wpisz `L` i naciśnij {{key:Enter}}.
15. Wpisz `6000,0` i naciśnij {{key:Enter}}, aby zacząć w prawym dolnym rogu.
16. Wpisz `@2500<-30` i naciśnij {{key:Enter}}. Linia o długości 2500 wychodzi z rogu, kierując się w dół i w prawo, pod kątem 30 stopni poniżej poziomu.
17. Naciśnij {{key:Enter}}, aby zakończyć polecenie.

Współrzędna biegunowa bez `@`, jak `2500<30`, jest mierzona od początku układu, a nie od ostatniego punktu.

## Ten sam obrys jako jedna polilinia

Sześć osobnych linii to w wielu zastosowaniach w porządku, ale polilinia to jeden obiekt: przesuwa się, mierzy i zaznacza się jako całość. Użyj {{cmd:PLINE}} z tym samym wprowadzaniem.

1. Wpisz `PL` i naciśnij {{key:Enter}}.
2. Wpisz `0,-6000` i naciśnij {{key:Enter}}, aby zacząć poniżej pierwszego obrysu.
3. Wpisz `@6000,0`, a następnie naciśnij {{key:Enter}}.
4. Wpisz `@0,3000`, a następnie naciśnij {{key:Enter}}.
5. Wpisz `@-2000,0`, a następnie naciśnij {{key:Enter}}.
6. Wpisz `@0,1500`, a następnie naciśnij {{key:Enter}}.
7. Wpisz `@-4000,0`, a następnie naciśnij {{key:Enter}}.
8. Wpisz `C` i naciśnij {{key:Enter}}. Polilinia się zamyka, a polecenie kończy.
9. Kliknij nowy obrys. Prawy panel pokazuje „Polilinia”, jej {{ui:Wierzchołki}}, {{ui:Długość}} i, ponieważ jest zamknięta, jej {{ui:Pole}}.

Pole powinno wynosić 24000000 (milimetrów kwadratowych, czyli 24 metry kwadratowe).

## Opcje podczas rysowania

- W {{cmd:LINE}} i {{cmd:PLINE}} wpisz `U` i naciśnij {{key:Enter}}, aby cofnąć ostatni odcinek bez wychodzenia z polecenia.
- W {{cmd:LINE}} opcja `C` zamyka obrys do pierwszego punktu, gdy są co najmniej dwa odcinki.
- W {{cmd:PLINE}} `A` przełącza na odcinki łukowe (każdy łuk płynnie przechodzi z poprzedniego odcinka), a `L` przełącza z powrotem na linie. W trybie łuku opcja zamknięcia to `CL`.
- Naciśnięcie {{key:Enter}} przy `Wskaż pierwszy punkt:` w {{cmd:LINE}} zaczyna od ostatnio podanego punktu, więc możesz kontynuować tam, gdzie skończyłeś.

## Typowe błędy

- **Wpisanie `6000,0`, gdy miało być `@6000,0`.** Bez `@` punkt jest mierzony od początku układu, a nie od ostatniego punktu, więc linia ucieka w nieoczekiwane miejsce. W CadCraft `x,y` jest zawsze bezwzględne. Naciśnij `U` i {{key:Enter}}, aby to cofnąć.
- **Przecinek wpisany zamiast kropki dziesiętnej.** Liczby dziesiętne zapisuje się z kropką: `1250.5`. Przecinek zawsze oddziela X od Y.
- **Bezpośrednia odległość poszła w złą stronę.** Pojedyncza liczba podąża za krzyżykiem. Przesuń krzyżyk na stronę, w którą chcesz iść, zanim naciśniesz {{key:Enter}}, i włącz {{ui:Orto}} dla prostych linii.
- **„Wymagany punkt lub słowo kluczowe opcji.”** CadCraft nie zrozumiał tego, co wpisano. Sprawdź spacje w liczbie lub brakujący przecinek i wpisz ponownie.
- **Stopy i cale.** CadCraft czyta tylko zwykłe liczby. Wpisz `150` dla 12'-6" w rysunku w calach albo `12.5` w rysunku w stopach.
