---
title: Bloki dynamiczne
summary: Co CadCraft robi z blokami dynamicznymi w DWG: zachowują prawdziwe nazwy, pokazują stan, w jakim je zapisano, przełączają stany widoczności, pokazują pozostałe wartości i pozostają dynamiczne po zapisie.
keywords: blok dynamiczny, bloki dynamiczne, widoczność, stan widoczności, odbicie, rozciąganie, wyszukiwanie, parametry, własne, właściwości bloku, *u bloki, dynamiczny
from: 26b6aa80
---

## Co działa

Plik DWG z blokami dynamicznymi otwiera się z następującymi funkcjami:

- **Prawdziwe nazwy.** Blok dynamiczny jest wymieniany w panelu {{ui:Bloki}} pod własną nazwą („Receptacle”, „Sink”), a nie jako bezimienny blok `*U`.
- **Stan, w jakim je zapisano.** Każde odwołanie pokazuje dokładnie to, co pokazał inny program: stan widoczności, na jaki było ustawione, rozciągnięte lub odbite tak, jak zostało zapisane.
- **Przełączanie stanu widoczności.** Zaznacz jedno odwołanie (lub kilka tego samego bloku), otwórz {{ui:Właściwości}} i w sekcji {{ui:Własne}} wybierz inny stan z listy {{ui:Widoczność}}. Odwołanie od razu pokazuje ten stan, również swoje atrybuty: te, których stan nie pokazuje, znikają, a te, które pokazuje, pojawiają się z wartościami. Odwołanie zachowuje każdą wartość, więc nic nie wraca puste; {{ui:Właściwości}} wymienia ukryte, oznaczone jako „ukryte”. {{key:Mod+Z}} przywraca poprzedni stan jednym krokiem.
- **Uchwyty.** Zaznaczony blok dynamiczny pokazuje własne uchwyty tam, gdzie są jego parametry: mały trójkąt dla stanu widoczności (kliknij go, aby zobaczyć listę stanów), strzałki na końcach odległości, podwójna strzałka dla odbicia. Tylko uchwyt widoczności działa dziś; pozostałe informują o tym w pasku stanu.
- **Pozostałe wartości, tylko do odczytu.** Pod listą widoczności {{ui:Własne}} pokazuje też odległości bloku, kąty wyrównania, stany odbicia i punkty, tak jak je przechowuje rysunek.
- **Edycja stanów widoczności.** Otwórz blok poleceniem {{cmd:BEDIT}}: edytor pokazuje jeden stan, nazwany na pasku nad rysunkiem (wybierz inny tam). Wpisz {{cmd:BVSTATE}}, aby przełączyć, dodać (ukrywając wszystko, pokazując wszystko lub zachowując to, co widać), zmienić nazwę lub usunąć stan. {{cmd:BVHIDE}} ukrywa zaznaczone obiekty w aktualnie widocznym stanie; {{cmd:BVSHOW}} pokazuje ukryte, wyblakłe, abyś mógł kliknąć te, które chcesz przywrócić. Po zapisaniu bloku odwołania ustawione na zmienionym stanie zachowują go pod nową nazwą, a te ustawione na usuniętym stanie pokazują pierwszy stan.
- **Pozostają dynamiczne.** Zapisane jako DWG w wersji, w jakiej wczytano rysunek, bloki pozostają dynamiczne, z wybranym stanem: inny program otwiera je jako te same bloki dynamiczne. Edytowane stany widoczności są zapisywane również: ich nowe nazwy, dodane stany i to, co każdy z nich pokazuje.

## Co jest tylko do odczytu lub jeszcze nie istnieje

| Jeszcze nie istnieje | Zamiast tego, na dziś |
|---|---|
| Zmiana odległości, kątów lub odbić (akcje rozciągania, przesuwania, odbicia) | Pokazywane tylko do odczytu w {{ui:Własne}}; edytuj w programie, który utworzył blok. |
| Parametry wyszukiwania, XY, obrotu i biegunowe | Nieodczytane: odwołanie pokazuje się tak, jak zapisano. |
| Przeciąganie uchwytów odległości, odbicia i punktów | Pokazują, gdzie są parametry; uchwyt widoczności i lista {{ui:Widoczność}} we Właściwościach przełączają stany. |
| Tworzenie bloków dynamicznych (dodawanie parametrów lub stanów widoczności do bloku, który ich nie ma) | Bloki utworzone w CadCraft są zwykłymi blokami; {{cmd:BPARAMETER}} to mówi. |
| Dodawanie lub usuwanie obiektów bloku ze stanami widoczności w edytorze bloków | Blok jest wtedy zapisywany jako zwykły blok (edytor to mówi po zamknięciu). |
| Zachowanie dynamiczności w innej wersji DWG lub w DXF | Bloki są zapisywane jako zwykłe bloki pokazujące wybrany stan, a zapis to mówi. |

:::note
Przesuwanie lub zmiana obiektów w {{cmd:BEDIT}} zachowuje blok ze stanami widoczności jako dynamiczny. Blok bez stanów albo blok, którego obiekty zostały dodane lub usunięte w edytorze, staje się zwykłym blokiem.
:::
