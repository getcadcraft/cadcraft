---
title: Organizowanie rysunku za pomocą warstw
summary: Utwórz warstwy dla ścian, drzwi i notatek, ustaw kolory, ustaw warstwę bieżącą i wyłączaj warstwy, zamrażaj, blokuj lub wyłączaj ich drukowanie.
keywords: warstwa, warstwy, la, bieżąca warstwa, zamroź, odmroź, zablokuj, wyłącz, włącz, drukuj, nie drukuj, kolor, barwa, właściwości warstwy, layiso, layuniso, izoluj, layoff, layfrz, laymcur, layon, laythw, zmień nazwę, laymrg, scal, laydel, usuń warstwę
from: cd033591
---

## Co zrobisz

Trzy warstwy: Walls, Doors i Notes, każda w swoim kolorze, z obiektami narysowanymi na każdej z nich i przenoszonymi między nimi.

## Panel Warstwy

Warstwy znajdują się w panelu po lewej stronie, pod {{ui:Warstwy}}. Każdy wiersz pokazuje od lewej do prawej:

- kropkę: wypełnioną dla **bieżącej** warstwy, na którą trafiają nowe obiekty;
- próbkę koloru;
- nazwę warstwy;
- cztery przyciski: włącz/wyłącz (oko), zamroź (płatek śniegu), zablokuj (kłódka) i drukuj (drukarka).

Każdy rysunek ma warstwę o nazwie `0`. Wpisanie `LA` i naciśnięcie {{key:Enter}} przenosi do panelu.

## Tworzenie warstw

1. Kliknij {{ui:Nowa warstwa}} nad listą. Otworzy się pole nazwy.
2. Wpisz `Walls` i naciśnij {{key:Enter}} (albo kliknij {{ui:Dodaj}}).

Pasek stanu mówi: „Dodano warstwę Walls i ustawiono ją jako bieżącą.” Nowa warstwa dostaje kolor 7 (czarny w jasnym motywie, biały w ciemnym).

3. Kliknij ponownie {{ui:Nowa warstwa}}, wpisz `Doors` i naciśnij {{key:Enter}}.
4. Kliknij ponownie {{ui:Nowa warstwa}}, wpisz `Notes` i naciśnij {{key:Enter}}.

Teraz bieżąca jest warstwa Notes.

## Nadawanie każdej warstwie koloru

1. Kliknij próbkę koloru w wierszu Walls. Otworzy się systemowy wybór kolorów.
2. Wybierz kolor i potwierdź.

Próbka i wszystko na warstwie Walls, którego kolor to {{ui:Wg warstwy}}, zmienią kolor.

:::note
Wybrany kolor, który odpowiada jednemu z 255 standardowych kolorów CAD, jest zapisywany jako ten numer. Każdy inny kolor jest zachowywany dokładnie w CadCraft, ale w pliku DWG lub DXF zapisywany jest jako najbliższy standardowy kolor.
:::

## Rysowanie na warstwie

1. Kliknij nazwę **Walls** na liście. Jej kropka się wypełni, a pasek stanu pokaże: „Bieżąca warstwa: Walls”.
2. Narysuj prostokąt (`REC`). Trafi na warstwę Walls.
3. Kliknij **Doors** i narysuj łuk (`A`). Trafi na warstwę Doors.

Bieżącą warstwę można też wybrać w {{ui:Bieżące ustawienia}} po prawej stronie (gdy nic nie jest zaznaczone), w polu {{ui:Warstwa}}.

## Przenoszenie obiektów na inną warstwę

1. Zaznacz obiekty.
2. W panelu po prawej stronie wybierz nową warstwę w polu {{ui:Warstwa}}.

Trafiają na tę warstwę i przyjmują jej kolor, jeśli ich kolor to {{ui:Wg warstwy}}.

## Wyłączanie, zamrażanie, blokowanie i drukowanie

| Przycisk | Co robi |
|---|---|
| Włącz/wyłącz (oko) | Ukrywa obiekty warstwy. Nie można ich zobaczyć, zaznaczyć ani przyciągnąć do nich. |
| Zamroź (płatek śniegu) | W CadCraft działa jak wyłączenie. Zachowane osobno, ponieważ inne programy traktują je inaczej, a ustawienie jest zapisywane. |
| Zablokuj (kłódka) | Obiekty pozostają widoczne i możesz do nich przyciągać, ale nie można ich zaznaczyć ani zmienić. Dobre jako tło, po którym rysujesz. |
| Drukuj (drukarka) | Gdy przycisk jest wciśnięty, warstwa jest widoczna na ekranie, ale **pomijana w wydrukach** i plikach PDF. Używaj jej do linii konstrukcyjnych i notatek dla siebie. |

Najechanie na przycisk pokazuje, co zrobi („Wyłącz”, „Zamroź”, „Zablokuj”, „Nie drukuj tej warstwy”).

Nie można wyłączyć bieżącej warstwy: pasek stanu mówi: „To jest bieżąca warstwa. Najpierw ustaw inną warstwę jako bieżącą.” Kliknięcie nazwy warstwy, aby ustawić ją jako bieżącą, także ją włącza i odmraża.

Każda zmiana warstw, w panelu lub przez polecenie, to jeden krok cofnięcia: {{key:Mod+Z}} przywraca poprzedni stan.

## Praca na warstwach przez wskazywanie obiektów

Nie musisz znać nazwy warstwy: wskaż obiekt na tej warstwie. Wpisz polecenie albo otwórz {{ui:Narzędzia}} u góry panelu {{ui:Warstwy}}.

| Polecenie | Co robi |
|---|---|
| {{cmd:LAYISO}} | Zaznacz obiekty i naciśnij {{key:Enter}}: pozostają włączone tylko ich warstwy, a wszystkie inne zostają wyłączone. Jeśli bieżąca warstwa została wyłączona, jedna z izolowanych warstw staje się bieżąca. |
| {{cmd:LAYUNISO}} | Ponownie włącza warstwy, które wyłączyło ostatnie {{cmd:LAYISO}}, i przywraca bieżącą warstwę, którą zmieniło. |
| {{cmd:LAYOFF}} | Klikaj obiekty jeden po drugim: warstwa każdego z nich zostaje wyłączona. Wpisz `U`, aby cofnąć ostatni wybór, a {{key:Enter}}, aby zakończyć. |
| {{cmd:LAYFRZ}} | To samo, ale zamraża warstwy. |
| {{cmd:LAYMCUR}} | Kliknij obiekt: jego warstwa staje się bieżąca (i zostaje włączona i odmrożona). Gdy jeden obiekt jest już zaznaczony, używany jest on. |
| {{cmd:LAYON}} | Włącza wszystkie warstwy. |
| {{cmd:LAYTHW}} | Odmraża wszystkie warstwy. |

Bieżącej warstwy w ten sposób nigdy nie wyłącza się ani nie zamraża: historia to pokazuje, a najpierw możesz ustawić inną warstwę jako bieżącą za pomocą {{cmd:LAYMCUR}}. Wskazanie odwołania do bloku używa warstwy samego odwołania.

## Zmiana nazwy, scalanie i usuwanie warstw

- {{cmd:RENAME}}: wpisz `LA`, starą nazwę i nową. Każdy obiekt na warstwie podąża za zmianą. (`B` zmienia nazwę bloku w ten sam sposób, ze wszystkimi jego odwołaniami.)
- {{cmd:LAYMRG}}: kliknij obiekt na każdej warstwie do scalenia (albo wpisz `N` i nazwę), naciśnij {{key:Enter}}, następnie wskaż warstwę docelową i odpowiedz `Y`. Obiekty przechodzą na warstwę docelową — w modelu, na arkuszach i wewnątrz bloków — a scalone warstwy znikają.
- {{cmd:LAYDEL}}: wskaż obiekt na warstwie (albo wpisz `N` i jej nazwę) i odpowiedz `Y`. Warstwa znika **razem z każdym obiektem na niej**, wszędzie. Warstwy 0, DEFPOINTS i bieżącej nie można usunąć.

Każde z tych poleceń to jeden krok cofnięcia. Wszystkie trzy są w {{ui:Narzędzia}} u góry panelu {{ui:Warstwy}}.

1. Kliknij jedną linię ściany, a następnie wpisz `LAYISO` i naciśnij {{key:Enter}}. Pozostaje włączona tylko warstwa Walls.
2. Narysuj lub zmień to, co potrzebujesz, na warstwie Walls.
3. Wpisz `LAYUNISO` i naciśnij {{key:Enter}}. Warstwy Doors i Notes wracają.

## Typowe błędy

- **Nowe linie trafiły na złą warstwę.** Sprawdź, która kropka jest wypełniona, zanim zaczniesz rysować. Nowa warstwa staje się bieżąca zaraz po jej dodaniu.
- **Obiektu nie da się zaznaczyć.** Jego warstwa jest zablokowana, wyłączona lub zamrożona.
- **Warstwa wciąż drukuje się w innym programie.** DXF R12 nie potrafi zapisać „nie drukuj”. CadCraft zachowuje to ustawienie dla siebie, gdy rysunek ma arkusz, ale inne programy wydrukują tę warstwę.
- **Nazwy warstw pisane wielkimi literami po zapisie.** DXF R12 zapisuje nazwy wielkimi literami, więc `Walls` wraca jako `WALLS`, a spacje zamieniają się na `_`. Zapisany DWG zachowuje nazwy tak, jak je wpisano.
- **Zmiana nazwy, scalanie lub usuwanie warstwy.** Użyj {{cmd:RENAME}}, {{cmd:LAYMRG}} lub {{cmd:LAYDEL}} (także w {{ui:Narzędzia}}): patrz wyżej.

## Grupowanie warstw

Utrzymuj krótką listę, umieszczając warstwy w folderach, na przykład Istniejące, Projektowane i Instalacje. Każdy folder można zwinąć, a jego przełączniki włączają lub wyłączają wszystkie jego warstwy, zamrażają je lub blokują razem. Bieżącej warstwy nigdy nie wyłącza się.

W {{ui:Narzędzia}} w panelu Warstwy wybierz {{ui:Dodaj gotowe grupy}}, aby uzyskać zestaw przygotowany do niewielkich prac mieszkaniowych, {{ui:Grupuj według nazwy}}, aby pogrupować warstwy o wspólnym prefiksie (`E-Walls`, `E-Doors`), albo {{ui:Nowa grupa}}. Przeciągnij warstwę na folder albo użyj listy nad warstwami dla bieżącej warstwy. Wpisz w {{ui:Znajdź warstwę}}, aby zawęzić listę. `LAYGROUP` (`LG`) robi to samo w wierszu poleceń.

Same warstwy się nie zmieniają, więc inne programy CAD widzą je jako zwykłą płaską listę. CadCraft zapisuje grupy w pliku.
