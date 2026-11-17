---
title: Jednostki przy imporcie: plik podaje swoje jednostki albo zostaniesz zapytany
summary: Gdy plik, który wprowadzasz do rysunku, podaje swoje jednostki, CadCraft je przelicza i to mówi. Gdy ich nie podaje, CadCraft pyta, zanim cokolwiek umieści, i pamięta odpowiedź dla tego pliku.
keywords: jednostki, import, wstaw, xref, dołącz, XATTACH, INSERT, OBJ, DWG, DXF, chmura punktów, element biblioteki, milimetry, metry, cale, stopy, skala, zły rozmiar, za duży, za mały, 1000 razy, zapytaj, zapamiętane, INSUNITS
from: 558f1293
---

## Co zrobisz

Wprowadzisz plik do rysunku i upewnisz się, że wejdzie w prawidłowym rozmiarze.

## Kroki

1. Wprowadź plik jak zwykle: `INSERT` › Plik, `XATTACH`, `POINTCLOUDATTACH` albo {{ui:Pliki}} w panelu Biblioteka.
2. Jeśli plik podaje swoje jednostki, nic nie jest pytane. Wiersz poleceń mówi, jakie jednostki podaje plik, oraz skalę użytą, gdy różnią się od jednostek rysunku.
3. Jeśli nie podaje, okno dialogowe pyta o **Jednostki pliku**. Wybierz, czym jest jedna jednostka w pliku, i kliknij {{ui:Użyj tych jednostek}}. Nic nie zostaje umieszczone przed twoją odpowiedzią.
4. {{ui:Anuluj}} (albo {{key:Esc}}) nie wprowadza niczego.

## Które pliki podają swoje jednostki

- **DWG i DXF**: jednostki wstawiania rysunku (`$INSUNITS`). Plik bez nich zostaje o nie zapytany.
- **Chmury punktów**: LAS i LAZ z układem współrzędnych, E57, PTX i PLY podają swoje. Inne są pytane.
- **OBJ**: nigdy nie podaje jednostek. Jesteś o nie pytany.
- **glTF i GLB**: metry, według reguły formatu.
- **Obrazy**: nie mają własnego rozmiaru. `IMAGEATTACH` pyta o szerokość i proponuje szerokość, którą podałeś wcześniej dla tego pliku.
- **Skany**: skan, który podaje swoją gęstość (punkty na cal), wchodzi w swoim prawdziwym rozmiarze w jednostkach rysunku; `SCANATTACH` nadal pyta o szerokość.
- **Dodatek Chmury punktów**: pyta, gdy budujesz chmurę z pliku, który nie podaje jednostki, i podpisuje liczby chmury jednostką, którą ona niesie.

## Warto wiedzieć

- Otwarcie DWG lub DXF jako osobnego rysunku niczego nie pyta: wiersz poleceń mówi, jakie jednostki podaje plik, albo że żadnych nie podaje. Właściwości ustawiają jednostki rysunku.
- Gdy ten rysunek też nie ma jednostek, plik nie może być przeliczony: zostaje umieszczony liczba w liczbę, a wiersz poleceń to mówi.
- Odpowiedź jest zapamiętywana dla tego pliku na tym komputerze, we wszystkich aplikacjach CadCraft. Następnym razem, gdy plik zostanie wprowadzony, nie zostaniesz zapytany, a wiersz poleceń mówi, że użyto zapamiętanych jednostek.
- Aby zostać zapytanym ponownie: paleta poleceń ({{key:Mod+K}}) › **Zapytaj ponownie o jednostki importowanych plików**.
