---
title: Wczytywanie aplikacji (APPLOAD)
summary: Wczytuj rutyny LISP i ich pliki okien dialogowych, wyładowuj je, wczytuj ponownie z historii i zachowuj te, których używasz, w Pakiecie startowym.
keywords: appload, ap, wczytaj aplikację, lisp, lsp, dcl, rutyna, pakiet startowy, wyładuj, historia, upuść, wczytaj, dostosuj, zarządzaj
from: 89e0ee95
---

## Czego się dowiesz

Jak wczytać rutynę LISP (plik `.lsp`), aby jej polecenia działały w CadCraft, jak ją wyładować i jak sprawić, by ładowała się za każdym uruchomieniem CadCraft.

## Wczytaj rutynę

1. Otwórz {{ui:Widok}} › {{ui:Więcej}} › {{ui:Wczytaj aplikację…}} albo wpisz {{cmd:APPLOAD}} (lub `AP`) i naciśnij {{key:Enter}}.
2. Kliknij {{ui:Wczytaj plik…}} i wybierz jeden lub więcej plików `.lsp`. Rutyna, która otwiera okno dialogowe, zwykle ma plik `.dcl`: wybierz go również.
3. Okno dialogowe pokazuje, co utworzył każdy plik, na przykład „Wczytano delblocks.lsp: 1 polecenie, DELBLOCKS.”
4. Kliknij {{ui:Zamknij}}, wpisz polecenie rutyny i naciśnij {{key:Enter}}.

Możesz też upuścić pliki `.lsp` i `.dcl` na rysunek albo na okno dialogowe Wczytywanie aplikacji: wczytają się od razu.

Plik jest odczytywany tutaj, w Twojej przeglądarce. Nic nie jest przesyłane.

:::tip
Naciśnij {{key:Enter}} przy pustym wierszu poleceń, aby uruchomić ponownie polecenie rutyny, tak jak każde inne polecenie. Twoje aliasy poleceń również mogą do niego dotrzeć: zobacz „Edytuj aliasy poleceń”.
:::

## Wyładuj rutynę

W {{ui:Wczytaj aplikacje}}, w sekcji {{ui:Wczytane aplikacje}}, kliknij {{ui:Wyładuj}} obok pliku. Polecenia, które utworzył, znikają, dopóki nie wczytasz go ponownie.

## Wczytuj rutynę za każdym uruchomieniem CadCraft

1. Wczytaj rutynę.
2. W sekcji {{ui:Wczytane aplikacje}} kliknij {{ui:Dodaj do Pakietu startowego}} obok niej.

Od tej pory będzie wczytywana sama, za każdym razem gdy CadCraft uruchomi się w tej przeglądarce. Aby to zatrzymać, kliknij {{ui:Usuń}} obok niej w sekcji {{ui:Pakiet startowy}}.

Pakiet startowy przechowuje kopię każdego pliku w pamięci tej przeglądarki. Jeśli zmienisz rutynę, wczytaj nowy plik i dodaj go ponownie.

## Wczytaj acad.lsp i acaddoc.lsp z folderu wsparcia (Studio)

W CadCraft Studio {{ui:Folder wsparcia}} w oknie dialogowym {{ui:Wczytaj aplikacje}} wskazuje folder na Twoim komputerze. Kliknij {{ui:Wybierz folder…}}. Gdy CadCraft się uruchamia, odczytuje z tego folderu `acad.lsp`, a następnie `acaddoc.lsp` (niezależnie od wielkości liter w nazwach), wczytuje je, a potem wczytuje Pakiet startowy. `acaddoc.lsp` jest odczytywany ponownie przy każdym otwarciu nowej karty rysunku. Nic innego w folderze nie jest odczytywane, a plik większy niż 2 MB jest pomijany z komunikatem.

Jeśli plik definiuje funkcję o nazwie `S::STARTUP`, uruchamia się ona raz po wczytaniu plików (także po Pakiecie startowym). {{ui:Wczytaj teraz}} robi to samo na żądanie; {{ui:Wyczyść}} zapomina folder.

W przeglądarce strona nie może zapamiętać folderu, więc folder wsparcia nie istnieje: użyj Pakietu startowego, jak opisano wyżej. Skompilowane pliki `.fas` i `.vlx` oraz programy natywne są nadal odrzucane.

## Wczytaj plik ponownie z historii

{{ui:Historia}} pokazuje pliki wczytane w tej przeglądarce, od najnowszego. Kliknij {{ui:Wczytaj}} obok jednego z nich, aby wczytać go ponownie, bez szukania go na komputerze.

## Pliki, których CadCraft nie może wczytać

| Plik | Czym jest | Co zrobić |
|---|---|---|
| `.fas`, `.vlx` | skompilowany lub chroniony LISP | wczytaj zamiast tego źródło `.lsp` |
| `.arx`, `.crx`, `.dbx` | natywne programy Windows | nie ma sposobu, aby uruchomić je w CadCraft |
| `.dvb` | projekt VBA | nie ma sposobu, aby uruchomić je w CadCraft |
| `.craft`, `.lua`, `.py` | skrypty CraftScript | otwórz je w obszarze Skrypt w PartCraft |

Okno dialogowe Wczytywanie aplikacji mówi, czym jest dany plik, gdy go wybierzesz.

## Zatrzymaj rutynę

Naciśnij {{key:Esc}}. Przy jednym z monitów rutyny Esc anuluje ją tak, jak rutyna tego oczekuje (uruchamia się jej własne porządkowanie). Jeśli jest zajęta i o nic nie pyta, Esc zatrzymuje ją natychmiast i o tym informuje; wczytane rutyny pozostają wczytane.

:::note
Wszystko, co rutyna zmienia w rysunku, to jeden krok: jedno {{key:Mod+Z}} cofa wszystko.
:::
