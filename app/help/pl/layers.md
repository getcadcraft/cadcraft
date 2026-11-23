---
title: Porządkowanie rysunku warstwami
summary: Twórz warstwy dla ścian, drzwi i notatek, ustawiaj kolory, ustaw warstwę bieżącą i wyłączaj, zamrażaj, blokuj albo wyłączaj warstwy z wydruku.
keywords: warstwa, warstwy, la, bieżąca warstwa, zamroź, odmroź, zablokuj, wyłącz, włącz, drukuj, bez wydruku, kolor, właściwości warstwy, layiso, layuniso, izoluj, layoff, layfrz, laymcur, layon, laythw, zmień nazwę, laymrg, scal, laydel, usuń warstwę
from: ba9f0617
---

## Co wykonasz

Trzy warstwy: Ściany, Drzwi i Notatki, każda z własnym kolorem, z obiektami narysowanymi na każdej i przenoszonymi między nimi.

## Panel Warstwy

Warstwy są w panelu po lewej, pod {{ui:Warstwy}}. Każdy wiersz pokazuje, od lewej do prawej:

- kropkę: wypełnioną dla **bieżącej** warstwy, na której trafiają nowe obiekty;
- próbkę koloru;
- nazwę warstwy;
- cztery przyciski: włączenie/wyłączenie (oko), zamrożenie (płatek śniegu), blokada (kłódka) i wydruk (drukarka).

Każdy rysunek ma warstwę o nazwie `0`. Wpisanie `LA` i naciśnięcie {{key:Enter}} przenosi do panelu.

## Twórz warstwy

1. Kliknij {{ui:Nowa warstwa}} nad listą. Otwiera się pole nazwy.
2. Wpisz `Ściany` i naciśnij {{key:Enter}} (albo wybierz {{ui:Dodaj (A)}}).

Pasek stanu mówi „Dodano warstwę Ściany i ustawiono ją jako bieżącą.” Nowa warstwa dostaje kolor 7 (czarny na jasnym motywie, biały na ciemnym).

3. Kliknij {{ui:Nowa warstwa}} ponownie, wpisz `Drzwi` i naciśnij {{key:Enter}}.
4. Kliknij {{ui:Nowa warstwa}} ponownie, wpisz `Notatki` i naciśnij {{key:Enter}}.

Notatki jest teraz bieżąca.

## Nadaj każdej warstwie kolor

1. Kliknij próbkę koloru w wierszu Ściany. Otwiera się selektor kolorów systemu.
2. Wybierz kolor i potwierdź.

Próbka i wszystko na warstwie Ściany, co ma kolor {{ui:Wg warstwy}}, zmienia kolor.

:::note
Wybrany kolor, który odpowiada jednemu z 255 standardowych kolorów CAD, jest zapisywany jako ten numer. Każdy inny kolor jest zachowywany dokładnie w CadCraft, ale w pliku DWG lub DXF zapisywany jest jako najbliższy standardowy kolor.
:::

## Rysuj na warstwie

1. Kliknij nazwę **Ściany** na liście. Jej kropka się wypełnia, a pasek stanu mówi „Bieżąca warstwa: Ściany”.
2. Narysuj prostokąt (`REC`). Trafia na Ściany.
3. Kliknij **Drzwi** i narysuj łuk (`A`). Trafia na Drzwi.

Bieżącą warstwę możesz też wybrać w {{ui:Bieżące ustawienia}} po prawej (gdy nic nie jest zaznaczone), w sekcji {{ui:Warstwa}}.

## Przenieś obiekty na inną warstwę

1. Zaznacz obiekty.
2. W prawym panelu wybierz nową warstwę w {{ui:Warstwa}}.

Przechodzą na nią i przyjmują jej kolor, jeśli ich kolor to {{ui:Wg warstwy}}.

## Wyłącz, zamroź, zablokuj i drukuj

| Przycisk | Co robi |
|---|---|
| Włączenie/wyłączenie (oko) | Ukrywa obiekty warstwy. Nie da się ich zobaczyć, zaznaczyć ani przyciągać do nich. |
| Zamrożenie (płatek śniegu) | W CadCraft działa jak wyłączenie. Trzymane osobno, bo inne programy traktują je różnie, a ustawienie jest zapisywane. |
| Blokada (kłódka) | Obiekty pozostają widoczne i można do nich przyciągać, ale nie da się ich zaznaczyć ani zmienić. Dobre jako tło, po którym rysujesz. |
| Wydruk (drukarka) | Gdy wciśnięte, warstwa jest widoczna na ekranie, ale **pomijana w wydrukach** i plikach PDF. Używaj jej do linii konstrukcyjnych i notatek dla siebie. |

Najedź na przycisk, aby zobaczyć, co zrobi („Wyłącz”, „Zamroź”, „Zablokuj”, „Nie drukuj tej warstwy”).

Nie da się wyłączyć bieżącej warstwy: pasek stanu mówi „To jest bieżąca warstwa. Najpierw ustaw inną warstwę jako bieżącą.” Kliknięcie nazwy warstwy, aby uczynić ją bieżącą, także ją włącza i odmraża.

Każda zmiana warstwy, w panelu albo poleceniem, to jeden krok: {{key:Mod+Z}} przywraca stan.

## Pracuj na warstwach, wskazując obiekty

Nie musisz znać nazwy warstwy: wskaż obiekt na niej. Wpisz polecenie albo otwórz {{ui:Narzędzia}} u góry panelu {{ui:Warstwy}}.

| Polecenie | Co robi |
|---|---|
| {{cmd:LAYISO}} | Zaznacz obiekty i naciśnij {{key:Enter}}: włączone pozostają tylko ich warstwy, każda inna zostaje wyłączona. Jeśli bieżąca warstwa była wyłączona, jedna z wyizolowanych staje się bieżąca. |
| {{cmd:LAYUNISO}} | Włącza z powrotem warstwy, które ostatnie {{cmd:LAYISO}} wyłączyło, i przywraca bieżącą warstwę, którą zmieniło. |
| {{cmd:LAYOFF}} | Klikaj obiekty jeden po drugim: warstwa każdego zostaje wyłączona. Wpisz `U`, aby cofnąć ostatni, {{key:Enter}}, aby zakończyć. |
| {{cmd:LAYFRZ}} | To samo, z zamrażaniem każdej warstwy. |
| {{cmd:LAYMCUR}} | Kliknij obiekt: jego warstwa staje się bieżąca (i zostaje włączona i odmrożona). Jeśli jeden obiekt jest już zaznaczony, używany jest on. |
| {{cmd:LAYON}} | Włącza wszystkie warstwy. |
| {{cmd:LAYTHW}} | Odmraża wszystkie warstwy. |

Bieżąca warstwa nigdy nie jest wyłączana ani zamrażana w ten sposób: historia o tym informuje, a najpierw możesz ustawić inną warstwę jako bieżącą poleceniem {{cmd:LAYMCUR}}. Wskazanie odwołania do bloku używa własnej warstwy odwołania.

## Zmień nazwę, scalaj i usuwaj warstwy

- {{cmd:RENAME}}: wpisz `LA`, starą nazwę i nową. Każdy obiekt na warstwie podąża. (`B` zmienia nazwę bloku w ten sam sposób, z każdym odwołaniem do niego.)
- {{cmd:LAYMRG}}: kliknij obiekt na każdej warstwie, którą scalasz (albo wpisz `N` i nazwę), naciśnij {{key:Enter}}, a potem wskaż warstwę docelową i odpowiedz `Y`. Obiekty przechodzą na cel — w modelu, na arkuszach i wewnątrz bloków — a scalone warstwy znikają.
- {{cmd:LAYDEL}}: wskaż obiekt na warstwie (albo `N` i jej nazwę) i odpowiedz `Y`. Warstwa znika **razem z każdym obiektem na niej**, wszędzie. Warstwy 0, DEFPOINTS i bieżącej nie można usunąć.

Każde z nich to jeden krok cofnięcia. Wszystkie trzy są w {{ui:Narzędzia}} u góry panelu {{ui:Warstwy}}.

1. Kliknij jedną linię ściany, a potem wpisz `LAYISO` i naciśnij {{key:Enter}}. Włączona zostaje tylko Ściany.
2. Narysuj lub zmień to, czego potrzebujesz, na Ścianach.
3. Wpisz `LAYUNISO` i naciśnij {{key:Enter}}. Drzwi i Notatki wracają.

## Częste błędy

- **Nowe linie trafiły na złą warstwę.** Sprawdź, która kropka jest wypełniona, zanim zaczniesz rysować. Nowa warstwa staje się bieżąca, gdy ją dodasz.
- **Obiekt nie zaznacza się.** Jego warstwa jest zablokowana, wyłączona albo zamrożona.
- **Warstwa nadal drukuje się w innym programie.** DXF R12 nie zapisuje ustawienia „nie drukuj”. CadCraft zachowuje je dla siebie, gdy rysunek ma arkusz, ale inne programy wydrukują tę warstwę.
- **Nazwy warstw pisane wielkimi literami po zapisie.** DXF R12 zapisuje nazwy wielkimi literami, więc `Ściany` wraca jako `ŚCIANY`, a spacje zamieniają się na `_`. Zapisany DWG zachowuje nazwy tak, jak je wpisałeś.
- **Zmiana nazwy, scalanie lub usuwanie warstwy.** Użyj {{cmd:RENAME}}, {{cmd:LAYMRG}} albo {{cmd:LAYDEL}} (także w {{ui:Narzędzia}}): zobacz poniżej.

## Grupuj warstwy

Aby lista była krótka, umieszczaj warstwy w folderach, na przykład Istniejące, Projektowane i Instalacje. Każdy folder się zwija, a jego przełączniki włączają lub wyłączają wszystkie jego warstwy, zamrażają je lub blokują razem. Bieżącej warstwy nigdy nie wyłącza się.

W {{ui:Narzędzia}} w panelu Warstwy wybierz {{ui:Dodaj gotowe grupy}} dla zestawu przygotowanego do małych prac mieszkaniowych, {{ui:Grupuj według nazwy}}, aby pogrupować warstwy o wspólnym prefiksie (`E-Ściany`, `E-Drzwi`), albo {{ui:Nowa grupa}}. Przeciągnij warstwę na folder albo użyj listy nad warstwami dla bieżącej warstwy. Wpisz w {{ui:Znajdź warstwę}}, aby zawęzić listę. `LAYGROUP` (`LG`) robi to samo w wierszu poleceń.

Aby zmienić nazwę grupy, kliknij ją dwukrotnie (albo zaznacz i naciśnij {{key:F2}}), wpisz nową nazwę i naciśnij {{key:Enter}}; {{key:Esc}} zachowuje starą, a {{cmd:UNDO}} ją przywraca. {{ui:Nowa grupa}} jest w {{ui:Narzędziach}} w panelu Warstwy.

Same warstwy się nie zmieniają, więc inne programy CAD widzą je jako zwykłą płaską listę. CadCraft zachowuje grupy w pliku.
