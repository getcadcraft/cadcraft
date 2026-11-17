---
title: "Domyślne zasady: ustaw, z czym zaczyna się nowy rysunek"
summary: Określ raz, z jakimi jednostkami, formatem długości, precyzją, wysokością tekstu i papierem arkusza zaczyna się nowy rysunek, dla prac metrycznych i calowych, i udostępniaj zasady w biurze jako mały plik.
keywords: domyślne, wartości domyślne, domyślne zasady, zasada, standard biura, domyślne biura, szablon, nowy rysunek, jednostki, insunits, format długości, architektoniczny, precyzja, luprec, wysokość tekstu, papier arkusza, a1, udostępnij, eksport, import, json
from: 7b80fd13
---

## Co zrobisz

Powiedz CadCraft, z czym ma zaczynać się nowy rysunek, aby nikt w biurze nie musiał za każdym razem uruchamiać UNITS i zmieniać tych samych rzeczy. To jest dodatek: jest wyłączony, dopóki go nie włączysz, a zasada, której nie ustawisz, pozostawia domyślną wartość CadCraft dokładnie taką, jaka jest.

:::note
To są wartości domyślne dla **nowych** rysunków i **nowych** arkuszy. Rysunek, który już zacząłeś, nie zmienia się, ani rysunek, który otwierasz.
:::

## Kroki

1. Otwórz Ustawienia, przejdź do {{ui:Dodatki}} i włącz {{ui:Domyślne zasady}}.
2. W Ustawieniach otwórz kartę **CadCraft** i wybierz {{ui:Domyślne zasady}} na liście po lewej.
3. Ustaw zasady, które chcesz. Każda zaczyna od własnej wartości CadCraft. Zasada z polami **Metryczne** i **Imperialne** przyjmuje jedną wartość dla każdego rodzaju rysunku; wypełnij tylko te, których potrzebujesz.
4. Nie ma przycisku Zapisz: każda zmiana zapisuje się od razu.
5. Rozpocznij nowy rysunek. Ma jednostki, format długości, precyzję i wysokość tekstu, które ustawiłeś, a jego pierwszy nowy arkusz ma papier, który wybrałeś.

## Zasady

- **Jednostki nowego rysunku**: brak, milimetry, centymetry, metry, cale lub stopy.
- **Format długości** i **Precyzja długości**: to, co ustawia polecenie UNITS, dla nowego rysunku.
- **Wysokość nowego tekstu**, w jednostkach rysunku.
- **Papier nowego arkusza**: papier, którego używa polecenie „Nowy arkusz”.
- **Rozmiary adnotacji na papierze** (Ustawienia › Globalne › Domyślne zasady): wysokości dla biura w milimetrach, tak jak drukowane. CadCraft używa tej dla uwag i etykiet: {{cmd:ANNOSCALE}} ustawia wysokość, od której zaczyna się nowy tekst, do tej wysokości przy skali adnotacji. Zobacz [Jednostki, papiery i skale](topic:units-papers-scales#annotate-by-scale).

Rysunek w calach lub stopach używa wartości imperialnych; każdy inny rysunek używa metrycznych. Rysunek bez jednostek używa systemu jednostek ustawionego w Ustawienia › Globalne › Domyślne zasady, a gdy nic nie ustawiono — metrycznego.

## Udostępnianie w biurze

1. W Ustawieniach otwórz kartę **Globalne** i wybierz {{ui:Domyślne zasady}}.
2. Kliknij {{ui:Zapisz do pliku}}. Dostaniesz mały plik kończący się na `.ccdefaults.json`.
3. Na innym komputerze włącz dodatek, otwórz to samo miejsce i kliknij {{ui:Wczytaj z pliku}}. Zasady z pliku zastąpią te z tego komputera.

Jeden plik zawiera zasady każdej aplikacji CadCraft, więc ten sam plik działa w BimCraft.

## Warto wiedzieć

- Nie ma zasady dla skali arkusza: widok nowego arkusza dopasowuje się do rysunku, a skalę ustawia się na arkuszu.
- Nie ma zasady dla stylu wymiarowania: nowy rysunek nie ma nazwanych stylów wymiarowania. Ustaw wymiary poleceniem DIMSTYLE albo zacznij od rysunku, który je ma.
- Plik jest zwykłym, otwartym JSON. Zasada, o której plik mówi, a ta wersja nie zna, zostaje pominięta i wymieniona w komunikacie; reszta się wczytuje.
- Zasady są przechowywane w tej przeglądarce, a nie w rysunku. Wyłącz dodatek, a wszystko znów będzie wartościami CadCraft.
