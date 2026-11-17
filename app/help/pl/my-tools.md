---
title: Przyciski własne (Moje narzędzia)
summary: Dodawaj przyciski na pasku narzędzi, które uruchamiają własne makra, nadawaj im klawisze skrótu, udostępniaj je jako plik i przenoś przyciski z pliku dostosowania CUIx.
keywords: moje narzędzia, własne przyciski, przyciski na pasku narzędzi, makro, makra, cui, cuix, dostosuj, menu, klawisze skrótu, skróty klawiszowe, diesel, ^c^c, importuj przyciski, eksportuj przyciski
from: 36618802
---

## Czego się nauczysz

Jak umieścić własne przyciski na pasku narzędzi, z których każdy uruchamia makro zapisane tak, jak zapisuje je AutoCAD, jak przypisać przyciskowi klawisz oraz jak przenieść przyciski z pliku CUIx.

## Dodawanie przycisku

1. Otwórz {{ui:Ustawienia}} ({{key:Mod+,}}) i zostań na karcie {{ui:CadCraft}}. Przewiń do {{ui:Moje narzędzia}}.
2. Kliknij {{ui:Dodaj przycisk…}}.
3. Wypełnij okno:
   - {{ui:Grupa}}: grupa na pasku narzędzi, do której trafi, na przykład `Moje narzędzia`. Nowa nazwa tworzy nową grupę.
   - {{ui:Etykieta}}: słowa na przycisku.
   - {{ui:Makro}}: to, co zostanie wpisane, na przykład `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Klawisz skrótu}}: kliknij pole i naciśnij klawisze, na przykład {{key:Ctrl+Alt+B}}.
   - {{ui:Ikona}}: obrazek PNG lub SVG o rozmiarze do 64 KB albo brak (pokaże się gwiazdka).
4. Kliknij {{ui:Zapisz}}.

Przycisk pojawia się na końcu paska narzędzi, w swojej grupie. Kliknij go albo naciśnij jego klawisz, aby go uruchomić. {{ui:Edycja}} i {{ui:Usuń}} na liście zmieniają go lub usuwają.

## Pisanie makra

Makro to to, co wpisałbyś w wierszu poleceń, z kilkoma znakami specjalnymi:

| Znak | Oznacza |
|---|---|
| `^C` | Anuluj to, co jest uruchomione (`^C^C` to zwykły początek) |
| `;` lub spacja | {{key:Enter}} |
| `\` | Czekaj na ciebie: kliknięcie albo wpisana odpowiedź, a potem makro działa dalej |
| `_` lub `.` przed poleceniem | Przyjmowane i ignorowane (nazwy międzynarodowe i wbudowane) |
| `*` na samym początku | Uruchamiaj ponownie za każdym razem, gdy się skończy, aż naciśniesz {{key:Esc}} |
| `^O`, `^G` | Włącza lub wyłącza Orto, siatkę |
| `$M=` | Reszta to DIESEL. Odczytywane są tylko `$(if,…)`, `$(getvar,…)`, `$(=,…)` i `$(eq,…)`; przycisk, który używa czegokolwiek innego, to zgłasza i nic nie robi |

Przykłady:

- `^C^C_line;0,0;@100,0;;` rysuje linię o długości 100 od początku układu.
- `^C^C_circle;\25;` pyta o środek, a następnie rysuje tam okrąg o promieniu 25.
- `^C^C_turnright` obraca widok o 90° w prawo.

## Klawisze skrótu

Klawisz wymaga {{key:Mod}} (Ctrl, albo Cmd na Macu) lub {{key:Alt}} z literą albo cyfrą, albo jednego z wolnych klawiszy funkcyjnych {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Same litery trafiają do wiersza poleceń. Klawisze, których używa już CadCraft, aplikacja lub przeglądarka (na przykład {{key:Ctrl+S}} lub {{key:Ctrl+Z}}), oraz klawisze przypisane do innego przycisku są odrzucane, a pole podaje powód.

## Udostępnianie przycisków

- {{ui:Eksportuj…}} zapisuje wszystkie grupy i przyciski (z ikonami i klawiszami) jako `my-tools.json`.
- {{ui:Importuj…}} dodaje grupy z takiego pliku za twoimi. Nazwa grupy, której już używasz, dostaje „(2)”; klawisz, który by się zderzał, zostaje pominięty, a panel to mówi.

## Przenoszenie przycisków z pliku CUIx

1. Kliknij {{ui:Importuj CUIx…}} i wybierz plik `.cuix`.

Jego paski narzędzi i panele wstążki stają się grupami, a każdy przycisk zachowuje swoje makro i obrazek (PNG albo BMP zamieniony na PNG). Jego klawisze skrótu trafiają do osobnej grupy, z każdym przyciskiem i jego klawiszem; skróty poleceń, jeśli je zawiera, trafiają do grupy {{ui:Skróty poleceń}}. Panel wylicza, co zostało przeniesione.

:::note
Plik jest tylko odczytywany. Polecenia, których CadCraft nie ma, są wymieniane z nazwy, a nie zgadywane: ich przyciski mówią o tym po kliknięciu. DIESEL poza kilkoma funkcjami wymienionymi wyżej, menu, przyciski myszy i obszary robocze nie są odczytywane.
:::

## Warto wiedzieć

- Przyciski są przechowywane w tej przeglądarce (albo w tej aplikacji desktopowej), a nie w rysunkach.
- Przycisk działa przez wiersz poleceń, więc jest cofany jak wszystko, co wpiszesz: jedno {{key:Mod+Z}} na każde polecenie, które uruchomił.
