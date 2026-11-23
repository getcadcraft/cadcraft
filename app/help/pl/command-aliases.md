---
title: Edytuj skróty poleceń
summary: Zachowaj własne skróty poleceń w jednym pliku tekstowym w znanym formacie, zaimportuj i wyeksportuj plik .pgp i wczytaj go ponownie poleceniem REINIT.
keywords: skrót, skróty, aliasy, aliasedit, pgp, krótka nazwa, reinit, klawiatura, dostosuj, edytuj skróty
from: 2282d36f
---

## Czego się nauczysz

Jak dodać własne krótkie nazwy poleceń, na przykład `LL` dla {{cmd:LINE}}, wszystkie w jednym pliku tekstowym.

## Dodaj skrót

1. Otwórz {{ui:Widok}} › {{ui:Więcej}} › {{ui:Edytuj skróty…}} albo wpisz {{cmd:ALIASEDIT}} i naciśnij {{key:Enter}}.
2. Dodaj wiersz ze skrótem, przecinkiem i poleceniem po gwiazdce:

```
LL,     *LINE
```

3. Wybierz {{ui:Zapisz}}. Wiersz poleceń podaje, ile twoich skrótów jest w użyciu.
4. Wpisz `LL` i naciśnij {{key:Enter}}: uruchomi się LINE.

Twoje skróty leżą na wierzchu wbudowanych skrótów CadCraft. Twój wiersz ma pierwszeństwo przed wbudowanym skrótem o tej samej nazwie; usuń swój wiersz, a wbudowany wróci.

## Wiersze, których CadCraft nie przyjmuje

Edytor wypisuje każdy problem z numerem wiersza podczas pisania:

- polecenie nie istnieje;
- skrót jest nazwą innego polecenia (`LINE, *CIRCLE` ukryłoby LINE);
- wiersz nie ma postaci `SKRÓT, *POLECENIE`;
- ten sam skrót jest w dwóch wierszach (późniejszy wygrywa).

Wiersze uruchamiające program na twoim komputerze, jak `NOTEPAD, START, 1, *File to edit: ,`, są pomijane z uwagą: aplikacja w przeglądarce nie może uruchamiać programów.

## Przenieś skróty z innego programu

1. W edytorze skrótów wybierz {{ui:Importuj .pgp…}} i wskaż plik. Możesz też upuścić plik `.pgp` na rysunek.
2. Sprawdź wypisane problemy (polecenia, których CadCraft nie ma, są odrzucane, reszta działa).
3. Wybierz {{ui:Zapisz}}.

{{ui:Eksportuj .pgp}} zapisuje skróty CadCraft i twoje jako jeden plik w tym samym formacie.

## Wczytaj plik ponownie

Wpisz {{cmd:REINIT}} i naciśnij {{key:Enter}}, aby ponownie zastosować plik skrótów. Jest zapisany w tej przeglądarce; aplikacja desktopowa zachowa go we własnym folderze, a usługa w chmurze go zsynchronizuje.

## Litery opcji poleceń

Skrót nazywa polecenie. Aby zmienić litery, którymi odpowiadasz na opcje polecenia (`P` dla opcji Biegunowe w {{cmd:ARRAY}}), zobacz [Nadaj opcjom poleceń własne litery](topic:option-letters).

## Skróty klawiszowe dla dowolnego polecenia

Skrót wpisujesz; skrót klawiszowy to klawisz. Aby przypisać poleceniu własny klawisz:

1. Wybierz {{ui:Widok}} › {{ui:Więcej}} › {{ui:Skróty klawiszowe…}} albo wpisz `KEYS` i naciśnij {{key:Enter}}.
2. Kliknij pole {{ui:Klawisz}} i naciśnij klawisze, na przykład {{key:Alt+Shift+C}}.
3. W polu {{ui:Uruchamia}} wpisz polecenie i, jeśli chcesz, to, co wpisać po nim: `CIRCLE` albo `ZOOM E`.
4. Wybierz {{ui:Dodaj (A)}}.

Klawisz potrzebuje {{key:Mod}} lub {{key:Alt}} z literą albo cyfrą albo wolnego klawisza funkcyjnego ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Klawisze, których używa CadCraft, aplikacja lub przeglądarka, oraz klawisze przypisane do przycisków Moje narzędzia (zobacz [Przyciski własne](topic:my-tools)), są odrzucane, a pole podaje powód. Skróty są zapisywane w tej przeglądarce (lub w aplikacji desktopowej); {{ui:Usuń (R)}} usuwa skrót.
