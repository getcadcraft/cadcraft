---
title: Warstwy mapy pod rysunkiem
summary: Pokaż mapy ulic, zdjęcia lotnicze lub obraz z plikiem georeferencyjnym pod przestrzenią modelu, umieszczone według układu współrzędnych rysunku.
keywords: mapa, warstwy mapy, maplayers, ml, geomapa, podkład mapowy, lotnicze, satelita, kafelki, xyz, wms, wmts, usługa mapowa, plik georeferencyjny, układ współrzędnych, epsg, state plane, utm, georeferencja, plan sytuacyjny, geolokalizacja, położenie geograficzne, geodane, zapisane, dwg, dxf
from: f103045f
---

## Co zrobisz

Plan sytuacyjny narysowany na zdjęciu lotniczym lub mapie ulic, każdy we właściwym miejscu.

## Powiedz CadCraft, gdzie jest rysunek

1. Ustaw jednostki rysunku w {{ui:Właściwości}} › {{ui:Jednostki}} (na przykład stopy lub metry).
2. Wpisz {{cmd:MAPLAYERS}} (lub `ML`) i naciśnij {{key:Enter}}.
3. W sekcji {{ui:Gdzie jest rysunek}} wpisz nazwę lub kod EPSG w polu {{ui:Znajdź układ}} (na przykład `2277` lub `Texas Central`) i wybierz go w {{ui:Układ}}.
4. Jeśli rysunek jest narysowany we współrzędnych tego układu, zostaw umieszczenie na 0. Jeśli nie, podaj jeden punkt rysunku ({{ui:X rysunku}}, {{ui:Y rysunku}}), to, gdzie ten punkt leży na siatce mapy ({{ui:Wschód}}, {{ui:Północ}}), oraz o ile rysunek jest obrócony względem wschodu ({{ui:Obrócony (°)}}).
5. Kliknij {{ui:Użyj tego układu}}.

## Dodaj warstwę

1. Włącz {{ui:Warstwy mapy z internetu}} u góry okna dialogowego. Dopóki jest wyłączone, żaden serwer o nic nie jest pytany; po włączeniu serwery, które dodasz, widzą obszar na ekranie i Twój adres internetowy, nigdy rysunku.
2. W {{ui:Dodaj warstwę}} wybierz, skąd pochodzi:
   - **Kafelki (XYZ)**: adres kafelków z `{z}`, `{x}` i `{y}`, nazwa oraz atrybucja, której wymaga dostawca.
   - **WMS**, **WMTS** lub **ArcGIS**: adres usługi, następnie {{ui:Pobierz warstwy}} i wybierz jedną.
   - **Obraz**: plik PNG lub JPEG z plikiem georeferencyjnym (world file) i plikiem `.prj`, jeśli istnieje.
3. Warstwa jest widoczna pod rysunkiem. Jej atrybucja jest widoczna w prawym dolnym rogu rysunku.

Każdą warstwę na liście można ukryć, uczynić bardziej lub mniej przezroczystą, przesunąć w górę lub w dół albo usunąć.

Każda zmiana układu lub warstw to jeden krok {{cmd:UNDO}}.

## Zapisane z rysunkiem

Układ współrzędnych i lista warstw są zapisywane w rysunku, gdy zapiszesz go jako DWG lub DXF, i wracają po ponownym otwarciu, na dowolnym komputerze. Obrazy z plików nie są zapisywane: po otwarciu dodaj je ponownie. Przełącznik {{ui:Warstwy mapy z internetu}} nie jest zapisywany w rysunku: należy do tej przeglądarki, więc rysunek, który ktoś Ci wyśle, nie pyta żadnego serwera o nic, dopóki sam go nie włączysz.

Co widzą inne programy:

| Zapisano jako | Położenie rysunku | Warstwy mapy |
|---|---|---|
| DWG 2010, 2013 lub 2018, DXF 2000 | Zapisane w standardowy sposób, w jaki programy odczytują położenie geograficzne rysunku: kod EPSG układu, jeden punkt rysunku i jego położenie na siatce mapy, jednostki i północ. | tylko CadCraft |
| DWG 2000, 2004 lub 2007, DXF R12 | tylko CadCraft (CadCraft informuje o tym przy zapisie) | tylko CadCraft |

- **Sprawdzone:** ODA File Converter odczytuje położenie bez błędów, a biblioteka DXF (ezdxf) odczytuje kod EPSG i umieszczenie dokładnie.
- **Jeszcze niesprawdzone:** czy inne programy kreślarskie rozpoznają układ po kodzie EPSG. Program, który trzyma własną listę układów pod innymi nazwami, może pokazać rysunek bez położenia.
- Inne programy pokazują na liście bloków blok o nazwie CADCRAFT_GEO. Jest to własna kopia układu i warstw w CadCraft; nigdy nie jest umieszczana w rysunku. Zostaw ją tam.

## Rysunki z innych programów

Gdy rysunek z innego programu ma położenie geograficzne, CadCraft je odczytuje:

- Jeśli podano kod EPSG, {{ui:Gdzie jest rysunek}} pokazuje ten układ, a warstwy mapy są według niego umieszczane.
- Jeśli CadCraft nie zna układu (własna nazwa innego programu, lokalna siatka lub współczynnik skali), położenie nie jest używane, ale jest zachowywane i zapisywane z powrotem bez zmian, więc inny program nadal je znajdzie. Wybierz układ w {{ui:Gdzie jest rysunek}}, aby go zastąpić.

:::note
Warstwy mapy są rysowane tylko na ekranie: nie są drukowane. Używaj wyłącznie usług map, których warunki na to pozwalają, i zachowuj ich atrybucję widoczną.
:::
