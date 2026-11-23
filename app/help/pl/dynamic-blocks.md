---
title: Bloki dynamiczne
summary: Co CadCraft robi z blokami dynamicznymi w DWG: zachowują prawdziwe nazwy, pokazują stan, w jakim zapisano, przełączają stany widoczności, pokazują pozostałe wartości i pozostają dynamiczne po zapisie.
keywords: blok dynamiczny, bloki dynamiczne, widoczność, stan widoczności, odbicie, rozciąganie, wyszukiwanie, parametry, własny, właściwości bloku, *u, dynamiczny
from: dea2ee7c
---

## Co działa

Plik DWG z blokami dynamicznymi otwiera się z następującymi funkcjami:

- **Prawdziwe nazwy.** Blok dynamiczny jest na liście panelu {{ui:Bloki}} pod własną nazwą („Receptacle”, „Sink”), a nie jako bezimienny blok `*U`.
- **Stan, w jakim zapisano.** Każde odwołanie pokazuje dokładnie to, co pokazał inny program: stan widoczności, w jakim go ustawiono, rozciągnięty lub odbity tak, jak zapisano.
- **Przełączanie stanu widoczności.** Zaznacz jedno odwołanie (albo kilka tego samego bloku), otwórz {{ui:Właściwości}} i w sekcji {{ui:Własne}} wybierz inny stan z listy {{ui:Widoczność}}. Odwołanie pokazuje ten stan od razu, także jego atrybuty: te, które stan ukrywa, znikają, a te, które pokazuje, pojawiają się z wartościami. Odwołanie zachowuje wszystkie wartości, więc nic nie wraca puste; {{ui:Właściwości}} wypisuje ukryte, oznaczone „ukryte”. {{key:Mod+Z}} przywraca poprzedni stan jednym krokiem.
- **Uchwyty.** Zaznaczony blok dynamiczny pokazuje własne uchwyty tam, gdzie są jego parametry: mały trójkąt dla stanu widoczności (kliknij, aby zobaczyć listę stanów), strzałki na końcach odległości, podwójną strzałkę dla odbicia. Dziś działa tylko uchwyt widoczności; pozostałe o tym informują w pasku stanu.
- **Pozostałe wartości, tylko do odczytu.** Pod listą widoczności {{ui:Własne}} pokazuje także odległości, kąty wyrównania, stany odbicia i punkty bloku tak, jak są zapisane w rysunku.
- **Edycja stanów widoczności.** Otwórz blok poleceniem {{cmd:BEDIT}}: edytor pokazuje jeden stan, nazwany w pasku nad rysunkiem (inny wybierzesz tam). Wpisz {{cmd:BVSTATE}}, aby przełączyć, dodać (ukrywając wszystko, pokazując wszystko albo zachowując to, co widać), zmienić nazwę lub usunąć stan; {{cmd:BVHIDE}} ukrywa zaznaczone obiekty w bieżącym stanie; {{cmd:BVSHOW}} pokazuje ukryte, wyblakłe, abyś mógł kliknąć te, które chcesz przywrócić. Zapisz blok: odwołania ustawione na zmieniony stan zachowują go pod nową nazwą, a te ustawione na usunięty stan pokazują pierwszy stan.
- **Pozostają dynamiczne.** Po zapisaniu jako DWG w wersji, w jakiej rysunek został wczytany, bloki pozostają dynamiczne, z wybranym stanem: inny program otwiera je jako te same bloki dynamiczne. Zmienione stany widoczności też są zapisywane: ich nowe nazwy, dodane stany i to, co każdy pokazuje.

## Co jest tylko do odczytu lub jeszcze nie działa

| Jeszcze nie działa | Zamiast tego, na dziś |
|---|---|
| Zmiana odległości, kątów lub odbić (akcje rozciągnięcia, przesunięcia, odbicia) | Pokazywane tylko do odczytu w {{ui:Własne}}; edytuj w programie, który utworzył blok. |
| Parametry wyszukiwania, XY, obrotu i biegunowe | Jeszcze nie odczytywane: odwołanie pokazuje się tak, jak zapisano. |
| Przeciąganie uchwytów odległości, odbicia i punktu | Pokazują, gdzie są parametry; uchwyt widoczności i lista {{ui:Widoczność}} we Właściwościach przełączają stany. |
| Tworzenie bloków dynamicznych w rodzaju innego programu (rozciąganie, odbicie, wyszukiwanie) | Bloki tworzone w CadCraft są zwykłymi blokami; {{cmd:BPARAMETER}} o tym informuje. Własne parametry i kilka parametrów widoczności są w menedżerze parametrów (zobacz „Własne parametry i stany widoczności” poniżej). |
| Dodawanie lub usuwanie obiektów bloku z wieloma stanami widoczności w edytorze bloków | Blok jest wtedy zapisywany jako zwykły blok (edytor o tym informuje przy zamknięciu). |
| Zachowanie dynamiczności w innej wersji DWG lub w DXF | Zapisywane są jako zwykłe bloki, pokazujące wybrany stan, a zapis o tym informuje. |

:::note
Przesuwanie lub zmiana obiektów w {{cmd:BEDIT}} zachowuje blok z wieloma stanami widoczności jako dynamiczny. Blok bez stanów albo blok, w którym w edytorze dodano lub usunięto obiekty, staje się zwykłym blokiem.
:::

## Własne parametry i stany widoczności

Blok utworzony w CadCraft może mieć własne parametry i **kilka** parametrów widoczności, każdy z własnymi stanami. Wpisz {{cmd:BPARAMS}} (albo `BPM`), aby otworzyć **Menedżer parametrów** dla bloku, który edytujesz w {{cmd:BEDIT}}, dla bloku wybranego odwołania albo dla bloku, który podasz.

- **Parametry**: nazwa, typ (liczba, długość, kąt, liczba całkowita, tak/nie) oraz wartość albo formuła oparta na innych parametrach (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Wynosi}} pokazuje wynik. Formuła, która nie działa, albo wartość niepasująca do typu (liczba 1,5 dla liczby całkowitej), jest odrzucana, a menedżer podaje powód; nic innego się nie zmienia.
- **Parametry widoczności**: {{ui:Dodaj parametr widoczności}} tworzy taki parametr z pierwszym stanem. Każdy stan można przemianować, usunąć (ostatni zostaje) albo ustawić mu liczbę „pokazuje się, gdy”. Formuła wybiera stan na podstawie parametrów (stan, którego numer pasuje, a w przeciwnym razie stan na tym miejscu na liście); bez formuły każde odwołanie wybiera własny stan.
- **Umieszczanie obiektów w stanie**: w edytorze bloków zaznacz obiekty, wpisz {{cmd:BPARAMS}} i wybierz {{ui:Umieść zaznaczone obiekty tutaj}} przy stanie. Obiekty, których żaden parametr widoczności nie wymienia, są zawsze widoczne.
- **To odwołanie**: po uruchomieniu na zaznaczonym odwołaniu menedżer pokazuje także własne wartości i stany tego odwołania.

Poza edytorem bloków każda zmiana to jeden krok cofnięcia. W edytorze bloków zmiany należą do edytora: {{ui:Zapisz blok}} je zachowuje. `-BPARAMS` działa tak samo w wierszu poleceń.

**W pliku.** DWG i DXF zachowują parametry, to, które obiekty są w jakim stanie, i własne wartości każdego odwołania, we własnych zapisach CadCraft; po ponownym otwarciu w CadCraft wszystko wraca. Inny program widzi każde odwołanie jako blok ze wszystkimi obiektami, bo DWG przechowuje co najwyżej jeden parametr widoczności na blok własnego rodzaju. Odwołanie, które inny program przesunął, albo blok, którego obiekty zmienił, wraca bez tych części, które już nie pasują (niczego nie zgaduje się).
