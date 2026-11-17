---
title: Sprawdzanie punktów powykonawczych
summary: Odczytaj punkty zmierzone przez ekipę pomiarową i porównaj je z punktami oraz blokami rysunku: w tolerancji lub poza nią, niezmierzone, dodatkowe — zaznaczone na rysunku i zapisane jako raport CSV.
keywords: as built, as-built, asbuilt, powykonawcze, geodezja, tachimetr, wytyczanie, tyczenie, plik punktów, csv, txt, pnezd, penzd, xyz, tolerancja, odchyłka, sprawdzanie, porównanie, exportpoints, punkty do wytyczenia
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) to druga połowa {{cmd:EXPORTPOINTS}}: eksportujesz punkty rysunku dla terenu, ekipa je wytycza i mierzy to, co zostało wykonane, a ASBUILT porównuje ich plik z rysunkiem.

1. Wpisz {{cmd:ASBUILT}} i zaznacz te same punkty i bloki, które wyeksportowałeś (Enter wybiera wszystkie POINT, tak jak EXPORTPOINTS).
2. **Sparuj punkty powykonawcze według** **Numeru** (ekipa zachowała numery punktów: podaj pierwszy numer, od którego eksportowałeś) lub **Najbliższego** (ekipa sama numerowała pomiary: każdy punkt projektowy dostaje najbliższy pomiar).
3. Podaj jednostki pliku i współrzędne tak, jak je wyeksportowałeś (Rysunek, Metry lub Stopy; Świat lub UCS) oraz **tolerancję** w jednostkach rysunku.
4. Wskaż plik CSV lub TXT ekipy. CadCraft odczytuje go tak jak CivilCraft: przecinki, tabulatory, średniki lub spacje, wiersz nagłówka z nazwami kolumn albo PNEZD według liczby kolumn.

Wiersz poleceń podaje, ile punktów sparowano, ile mieści się w tolerancji, ile jest poza nią, ile nie zmierzono i ile jest dodatkowych, a także największą odległość. **Zaznaczyć je na rysunku?** Tak umieszcza je na warstwie **AS-BUILT** jako jeden krok cofnięcia: punkt przy każdym pomiarze, jego numer i odległość obok, oraz czerwona linia od punktu projektowego do każdego pomiaru poza tolerancją. Raport CSV pobiera się z każdym punktem: współrzędne projektowe i powykonawcze, różnice na wschód, północ i w wysokości oraz wynik.

Zobacz też [Punkty dla programów BIM](topic:points-for-bim).
