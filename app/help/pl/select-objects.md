---
title: Zaznaczanie obiektów
summary: Wskazuj obiekty pojedynczo, oknem lub przecięciem, przed poleceniem albo w jego trakcie, i usuwaj obiekty z zaznaczenia.
keywords: zaznacz, zaznaczenie, okno, przecięcie, rzeczownik-czasownik, wskaż, wszystko, ostatni, poprzedni, płot, usuń, dodaj, tab, cykl, nakładające się, qselect, szybkie zaznaczenie, filtr, zaznacz podobne, selectsimilar, shift, odznacz, ctrl+a, pickfirst
from: 676508c7
---

## Czego się dowiesz

Jak wybrać obiekty, na których działa polecenie. CadCraft ma dwa sposoby pracy, oba dobre:

- **Najpierw zaznacz, potem polecenie** (rzeczownik-czasownik). Zaznacz obiekty, potem wpisz `M` (Przesuń). Polecenie przejmuje zaznaczenie i od razu przechodzi do następnego pytania.
- **Najpierw polecenie, potem zaznaczenie** (czasownik-rzeczownik). Wpisz `M`; polecenie pyta `Wybierz obiekty:`; zaznacz, potem naciśnij {{key:Enter}}.

## Wybieraj jeden obiekt naraz

1. Gdy żadne polecenie nie działa, kliknij linię. Zostaje podświetlona, a jej uchwyty (małe kwadraty) się pojawiają. Prawy panel pokazuje jej właściwości.
2. Kliknij inny obiekt. Zostaje dodany do zaznaczenia.
3. Przytrzymaj {{key:Shift}} i kliknij zaznaczony obiekt. Zostaje usunięty z zaznaczenia.
4. Naciśnij {{key:Esc}}. Nic nie jest zaznaczone.

## Okno i przecięcie

Kliknij raz na puste miejsce, przesuń i kliknij ponownie: powstaje prostokąt. Naciśnięcie i przeciągnięcie rysuje zamiast tego swobodne lasso, z tymi samymi dwoma rodzajami (zobacz [Zaznaczanie lassem](topic:lasso-selection); w Ustawieniach można sprawić, by przeciągnięcie rysowało prostokąt). Które obiekty trafią do zaznaczenia, zależy od kierunku:

| Przesuwasz | Pudełko | Zaznacza |
|---|---|---|
| Od lewej do prawej | Okno | Tylko obiekty **w całości w** pudełku |
| Od prawej do lewej | Przecięcie | Obiekty w pudełku **oraz** obiekty, których ono dotyka |

1. Narysuj kilka nachodzących na siebie linii i okręgów.
2. Kliknij puste miejsce na lewo od niektórych obiektów, przesuń w prawo i kliknij ponownie. Zaznaczone są tylko obiekty leżące w całości w pudełku.
3. Naciśnij {{key:Esc}}.
4. Kliknij puste miejsce na prawo, przesuń w lewo przez niektóre obiekty i kliknij ponownie. Zaznaczone jest wszystko, czego dotyka pudełko.
5. Przytrzymaj {{key:Shift}} i narysuj pudełko lub lasso nad niektórymi zaznaczonymi obiektami. Zostaną usunięte z zaznaczenia.

## Zaznacz, potem uruchom polecenie

1. Zaznacz dwa okręgi.
2. Wpisz `M` i naciśnij {{key:Enter}}.

Historia pokazuje `2 found`, a monit przechodzi od razu do `Wskaż punkt bazowy`. Dokończ przesunięcie (zobacz [Przesuń, kopiuj, obróć, skaluj i odbij lustrzanie](topic:modify-objects)).

Gdy polecenie się kończy, zaznaczenie jest czyszczone, więc następne polecenie zaczyna od czystej karty.

Polecenia, które przyjmują zaznaczenie w ten sposób: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} i {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} i {{cmd:CHAMFER}} zawsze pytają o wskazanie obiektów po jednym; {{cmd:TRIM}} i {{cmd:EXTEND}} przyjmują wskazanie albo ścieżkę, którą przeciągasz przez fragmenty (zobacz [Przycinanie i wydłużanie](topic:trim-and-extend)).

## Uruchom polecenie, potem zaznacz

1. Upewnij się, że nic nie jest zaznaczone ({{key:Esc}}).
2. Wpisz `E` i naciśnij {{key:Enter}}. Monit brzmi `Wybierz obiekty:`.
3. Klikaj obiekty albo przeciągaj okna i przecięcia. Historia liczy każde wskazanie (`1 found`, `3 found`).
4. Naciśnij {{key:Enter}}, {{key:Space}} lub kliknij prawym przyciskiem, aby zakończyć zaznaczanie.

Obiekty zostają usunięte, a historia podaje, ile ich było.

Przy monicie `Wybierz obiekty:` możesz też wpisać:

- `ALL`, potem {{key:Enter}}: każdy obiekt, który można edytować w otwartej karcie.
- `L` (lub `LAST`), potem {{key:Enter}}: ostatnio narysowany obiekt.
- `P` (Previous): obiekty, na których działało ostatnie polecenie, jeśli nadal istnieją.
- `F` (Fence): klikaj albo wpisuj punkty wzdłuż linii; dodawany jest każdy obiekt, który linia przecina. Naciśnij {{key:Enter}}, aby zakończyć płot; `U` cofa jego ostatni punkt.
- `W` (Window) lub `C` (Crossing): dwa narożniki, w zależności od kierunku przeciągania.
- `R` (Remove): od tej chwili kliknięcia, okna i płoty wyjmują obiekty **z** zaznaczenia. Monit brzmi `Remove objects:`. `A` (Add) przełącza z powrotem.
- `?`: lista tych opcji w historii.

Tych opcji nie ma w monicie, jak w AutoCAD.

## Wybierz jeden z kilku obiektów leżących jeden na drugim

Tam, gdzie obiekty nachodzą na siebie lub się stykają, kliknięcie wybiera najbliższy. Aby dostać inny:

1. Trzymaj wskaźnik nieruchomo nad miejscem.
2. Naciśnij {{key:Tab}}. Następny obiekt w tym miejscu zostaje podświetlony, a pasek stanu mówi, który to jest ("2 of 3: Line on layer Walls").
3. Naciskaj {{key:Tab}}, aż podświetlisz ten, którego chcesz, potem kliknij bez ruszania wskaźnikiem.

Ruch wskaźnikiem zaczyna od nowa. Działa to bez uruchomionego polecenia, przy `Wybierz obiekty:` i wszędzie tam, gdzie polecenie pyta o wskazanie jednego obiektu.

## Zaznacz według reguły: Szybkie zaznaczenie

{{cmd:QSELECT}} (`QS`, albo {{ui:Edycja}} › {{ui:Więcej}} › {{ui:Szybkie zaznaczenie}}) zaznacza każdy obiekt pasujący do reguły, np. każdy okrąg o promieniu poniżej 50 albo każde odwołanie do bloku o nazwie DOOR-900.

1. Otwórz {{ui:Szybkie zaznaczenie}}.
2. Wybierz {{ui:Typ obiektu}} (lista podaje liczbę każdego typu), potem {{ui:Właściwość}}: {{ui:Warstwa}}, {{ui:Kolor}}, a dla niektórych typów {{ui:Długość}}, {{ui:Promień}}, {{ui:Pole}}, {{ui:Wysokość tekstu}}, {{ui:Treść tekstu}}, {{ui:Nazwa bloku}} albo {{ui:Wzorzec kreskowania}}.
3. Wybierz {{ui:Operator}} i {{ui:Wartość}}. `*` pasuje z symbolami wieloznacznymi (`DOOR-*`); {{ui:Zaznacz wszystko}} bierze każdy obiekt danego typu. Liczba na dole pokazuje, ile pasuje, w miarę wyboru.
4. {{ui:Jak zastosować}}: dołącz pasujące albo wszystko inne. {{ui:Zastosuj do}} {{ui:Bieżące zaznaczenie}} zawęża to, co było zaznaczone; {{ui:Dołącz do bieżącego zaznaczenia}} dodaje do niego.
5. Kliknij {{ui:Zaznacz}}. Potem uruchom polecenie, którego chcesz: użyje zaznaczenia.

## Zaznacz podobne

Zaznacz jeden lub więcej obiektów i wpisz {{cmd:SELECTSIMILAR}} (`SIM`), albo wybierz {{ui:Edycja}} › {{ui:Więcej}} › {{ui:Zaznacz podobne}}. Zostaje zaznaczony każdy obiekt tego samego typu, na tej samej warstwie i w tym samym kolorze; odwołania do bloków wymagają też tego samego bloku, a kreskowania tego samego wzorca. Wpisz `SE` przy jego monicie `Wybierz obiekty`, aby wybrać, co musi się zgadzać.

## Zaznacz teraz, użyj później

Wpisz `SELECT` i naciśnij {{key:Enter}}, wybierz obiekty dowolnym z opisanych sposobów i naciśnij {{key:Enter}}. Zostają zaznaczone na następne polecenie, a `P` przywraca je przy kolejnym monicie `Wybierz obiekty:`.

## Zaznacz wszystko

Gdy żadne polecenie nie działa, naciśnij {{key:Mod+A}} albo wybierz {{ui:Zaznacz wszystko}} w menu {{ui:Edycja}} › {{ui:Więcej}} na pasku narzędzi, aby zaznaczyć każdy obiekt, który można edytować w otwartej karcie. Jeśli coś wpisałeś w wierszu poleceń, {{key:Mod+A}} zaznacza ten tekst: najpierw naciśnij {{key:Esc}}, aby go wyczyścić. Przy monicie `Wybierz obiekty:` wpisz `ALL`. {{ui:Odznacz wszystko}} w tym samym menu albo {{key:Esc}} czyści zaznaczenie.

:::tip
Jeśli wolisz, aby każde kliknięcie zastępowało zaznaczenie (a {{key:Shift}} dodawał do niego), ustaw {{ui:Klikanie obiektów}} na {{ui:Zastępuje zaznaczenie}} w [Ustawieniach CadCraft](topic:settings).
:::

## Czego nie można zaznaczyć

- Obiekty na warstwie **wyłączonej**, **zamrożonej** lub **zablokowanej**. Zablokowane obiekty pozostają widoczne i nadal można do nich przyciągać, ale nie można ich zaznaczyć ani zmienić.
- Na karcie arkusza model widoczny wewnątrz okna widokowego. Zaznaczasz obiekty samego arkusza (tabliczkę, notatki, ramki okien widokowych). Aby edytować model, przejdź na kartę {{ui:Model}}.

## Szybkie kasowanie

Zaznacz obiekty, potem naciśnij {{key:Delete}} (albo {{key:Backspace}}, gdy wiersz poleceń nie ma kursora). Na klawiaturze Mac klawisz oznaczony delete działa, gdy klikniesz w rysunek; gdy kursor jest w wierszu poleceń, naciśnij razem fn i delete. Uruchamia to {{cmd:ERASE}} na zaznaczeniu. Jeśli nic się nie dzieje, coś wpisałeś w wierszu poleceń: naciśnij {{key:Esc}} albo wpisz `E` i naciśnij {{key:Enter}}.

## Częste błędy

- **Okno objęło za mało.** Przeciągnąłeś od lewej do prawej, co bierze tylko to, co leży w całości w środku. Przeciągnij od prawej do lewej, aby uzyskać przecięcie.
- **Kliknięcie w puste miejsce zaczęło pudełko.** Jedno kliknięcie w puste miejsce zaczyna okno; drugie je kończy. Naciśnij {{key:Esc}} albo kliknij prawym przyciskiem, aby je porzucić.
- **Kliknięcie w puste miejsce zwolniło zaznaczenie.** Tak się dzieje, chyba że przytrzymasz {{key:Shift}}. Aby przy takim kliknięciu zachować zaznaczenie i czyścić je tylko przez {{key:Esc}}, ustaw {{ui:Kliknięcie w pusty punkt}} na {{ui:Zachowuje zaznaczenie}} w [Ustawieniach CadCraft](topic:settings#clicking-an-empty-spot).
- **Polecenie użyło obiektów, których nie chciałeś.** Coś było zaznaczone, gdy je uruchamiałeś. Przed poleceniem naciśnij {{key:Esc}}, aby zacząć bez zaznaczenia.
- **Po poleceniu nic nie jest zaznaczone.** To celowe: zakończone polecenie czyści zaznaczenie.
