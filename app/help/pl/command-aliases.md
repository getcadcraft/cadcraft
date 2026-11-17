---
title: Edycja aliasów poleceń
summary: Trzymaj własne aliasy poleceń w jednym pliku tekstowym w znanym formacie, importuj i eksportuj plik .pgp i wczytuj go ponownie poleceniem REINIT.
keywords: alias, aliasy, aliasedit, pgp, skrót, krótka nazwa, reinit, klawiatura, dostosuj, edytuj aliasy
from: 6ab6fa0e
---

## Czego się nauczysz

Jak dodać własne krótkie nazwy poleceń, na przykład `LL` dla {{cmd:LINE}}, wszystkie w jednym pliku tekstowym.

## Dodawanie aliasu

1. Otwórz {{ui:Widok}} › {{ui:Więcej}} › {{ui:Edytuj skróty…}}, albo wpisz {{cmd:ALIASEDIT}} i naciśnij {{key:Enter}}.
2. Dodaj wiersz z aliasem, przecinkiem i poleceniem po gwiazdce:

```
LL,     *LINE
```

3. Wybierz {{ui:Zapisz}}. Wiersz poleceń podaje, ile twoich aliasów jest w użyciu.
4. Wpisz `LL` i naciśnij {{key:Enter}}: LINE startuje.

Twoje aliasy działają obok wbudowanych aliasów CadCraft. Twój wiersz ma pierwszeństwo przed wbudowanym aliasem o tej samej nazwie; usuń swój wiersz, a wbudowany wróci.

## Wiersze, których CadCraft nie przyjmuje

Edytor wypisuje każdy problem z numerem wiersza, gdy piszesz:

- polecenie nie istnieje;
- alias jest sam nazwą polecenia (`LINE, *CIRCLE` ukryłoby LINE);
- wiersz nie ma postaci `ALIAS, *COMMAND`;
- ten sam alias jest w dwóch wierszach (późniejszy wygrywa).

Wiersze, które uruchamiają program na komputerze, jak `NOTEPAD, START, 1, *File to edit: ,`, są pomijane z uwagą: aplikacja w przeglądarce nie może uruchamiać programów.

## Przenoszenie aliasów z innego programu

1. W edytorze aliasów wybierz {{ui:Importuj .pgp…}} i wskaż plik. Możesz też przeciągnąć plik `.pgp` na rysunek.
2. Sprawdź wymienione problemy (polecenia, których CadCraft nie ma, są odrzucane, reszta działa).
3. Wybierz {{ui:Zapisz}}.

{{ui:Eksportuj .pgp}} zapisuje aliasy CadCraft i twoje jako jeden plik w tym samym formacie.

## Ponowne wczytanie pliku

Wpisz {{cmd:REINIT}} i naciśnij {{key:Enter}}, aby ponownie zastosować plik aliasów. Jest przechowywany w tej przeglądarce; aplikacja desktopowa będzie go trzymać we własnym folderze, a usługa w chmurze będzie go synchronizować.

## Skróty klawiszowe dla dowolnego polecenia

Alias się wpisuje; skrót to klawisz. Aby przypisać poleceniu własny klawisz:

1. Wybierz {{ui:Widok}} › {{ui:Więcej}} › {{ui:Skróty klawiszowe…}}, albo wpisz `KEYS` i naciśnij {{key:Enter}}.
2. Wybierz pole {{ui:Klawisz}} i naciśnij klawisze, na przykład {{key:Alt+Shift+C}}.
3. W polu {{ui:Uruchamia}} wpisz polecenie i, jeśli chcesz, to, co wpisać po nim: `CIRCLE` albo `ZOOM E`.
4. Wybierz {{ui:Dodaj (A)}}.

Klawisz wymaga {{key:Mod}} lub {{key:Alt}} z literą albo cyfrą, albo wolnego klawisza funkcyjnego ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Klawisze już używane przez CadCraft, aplikację lub przeglądarkę oraz klawisze przypisane do przycisku Moje narzędzia (zob. [Przyciski własne](topic:my-tools)) są odrzucane, a pole mówi dlaczego. Skróty są przechowywane w tej przeglądarce (lub aplikacji desktopowej); {{ui:Usuń (R)}} usuwa skrót.
