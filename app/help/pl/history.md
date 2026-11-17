---
title: Historia: wersje i zmiany
summary: Zobacz wersje rysunku (kopie, które Studio zachowuje przy zapisie, oraz wersje z chmury), otwórz lub przywróć jedną z nich i porównaj dwie, pokazując zmiany w kolorach.
keywords: historia, wersje, historia wersji, przywróć, poprzednia wersja, cofnij zapis, porównaj, porównaj rysunki, dwgcompare, zmiany, dodano, usunięto, zmieniono, migawka, kopia zapasowa, wersje w chmurze
from: 141d37b3
---

## Co wykonasz

Zajrzysz do wcześniejszej wersji rysunku i zobaczysz listę różnic względem stanu obecnego: co dodano, co usunięto i co zmieniono, zaznaczone kolorem na rysunku.

## Otwieranie historii

Wpisz `HISTORY` (lub `HIST`) i naciśnij {{key:Enter}}, albo wybierz {{ui:Historia…}} w menu {{ui:Więcej}} grupy {{ui:Widok}}. Panel otworzy się obok rysunku i pozostanie otwarty podczas pracy, dzięki czemu można przesuwać i przybliżać rysunek z widocznymi kolorami.

Historia działa w CadCraft Studio. W przeglądarce panel tylko to informuje.

## Skąd pochodzą wersje

- **Na tym komputerze.** Za każdym razem, gdy otwierasz rysunek z pliku w Studio, i za każdym razem, gdy go zapisujesz, Studio zachowuje kopię pliku w swoim magazynie na tym komputerze. Pierwsza kopia to {{ui:W chwili otwarcia}}: plik sprzed pierwszego zapisu nad nim. Studio przechowuje 25 najnowszych kopii każdego rysunku, a najstarsze są usuwane jako pierwsze, gdy wszystkie kopie razem przekroczą 400 MB. Zapis, który niczego nie zmienia, nie tworzy kopii. Nic nie jest wysyłane.
- **W chmurze.** Gdy otworzysz rysunek z plików w chmurze w Studio, panel pokazuje też {{ui:W chmurze}}: każdą wersję, jaką przechowuje chmura, wraz z jej numerem, osobą, która ją zapisała, i notatką. Panel tylko odczytuje te wersje. CadCraft nie wysyła jeszcze własnych zapisów do chmury, więc są to wersje zapisane z innych urządzeń i z przeglądarki. Jeśli Studio zgłosi, że logowanie wygasło, zaloguj się ponownie.

Rysunek, którego nie zapisano, nie ma kopii: najpierw go zapisz.

## Otwieranie i przywracanie wersji

- {{ui:Otwórz}} umieszcza tę wersję w osobnej karcie. Twój rysunek pozostaje bez zmian.
- {{ui:Przywróć}} zastępuje ten rysunek wybraną wersją. Najpierw pyta o potwierdzenie. Studio zachowuje kopię rysunku w obecnym stanie w Historii (oznaczoną {{ui:Przed przywróceniem}}), zanim cokolwiek zrobi, a do pliku nic nie zostanie zapisane, dopóki nie zapiszesz. Przywrócenia nie można cofnąć przez {{key:Mod+Z}}; użyj tej kopii.

## Porównywanie

1. Kliknij {{ui:Porównaj}} przy wersji. Zostanie ona porównana z {{ui:Rysunek w obecnym stanie}}; aby porównać ją z inną wersją, najpierw wybierz tamtą w {{ui:Porównaj z}}.
2. Przeczytaj wynik pod listą: ile obiektów dodano, usunięto i zmieniono oraz listę tych obiektów. Kliknij pozycję na liście, aby przesunąć widok do niej.
3. Na rysunku:
   - **zielone** obiekty zostały dodane,
   - **czerwone** obiekty zostały usunięte (istnieją tylko w starszej wersji),
   - **pomarańczowe** obiekty zostały zmienione: nowy kształt jest pełny, a stary przerywany.
4. {{ui:Pokaż na rysunku}} włącza i wyłącza kolory; {{ui:Wyczyść kolory}} usuwa wynik. Zamknięcie panelu także czyści kolory.

Lista podaje, co zmieniło się w zmienionym obiekcie: jego tekst, to, że się przesunął, jego kształt, warstwa, kolor, typ linii lub grubość linii. Każdy arkusz jest porównywany osobno; kolory widać na otwartym arkuszu.

:::note
Rysunek nie ma trwałego numeru dla każdego obiektu, więc CadCraft dopasowuje obiekty po tym, czym są: ten sam obiekt po obu stronach jest niezmieniony; obiekt tego samego typu i warstwy, leżący w obrębie własnego rozmiaru od starego, jest tym samym obiektem, który zmieniono; reszta jest dodana lub usunięta. Obiekt przesunięty daleko od poprzedniego miejsca pokaże się jako usunięty w jednym miejscu i dodany w drugim. Odwołanie do bloku liczy zawartość swojego bloku.
:::

## Typowe błędy

- **„Brak kopii.”** Studio zachowuje kopię przy każdym otwarciu i zapisie rysunku, który ma plik na tym komputerze. Rysunek otwarty z karty przeglądarki albo nigdy niezapisany nie ma żadnej.
- **Brakuje listy z chmury.** Pojawia się ona dla rysunku otwartego z chmury w Studio; plik otwarty z dysku nie jest rysunkiem z chmury.
- **Wszystko wygląda na zmienione.** Dwie wersje zapisane przez różne programy zapisują ten sam rysunek w różny sposób (nazwy anonimowych bloków, zaokrąglenia). Porównuj wersje zapisane przez CadCraft.
