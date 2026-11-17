---
title: Drukuj do PDF
summary: Utwórz PDF arkusza w pełnym rozmiarze albo modelu w skali lub dopasowanego do papieru, wydrukuj go z przeglądarki lub ze Studio albo zapisz jako PNG lub SVG.
keywords: wydruk, drukuj, drukarka, kopie, png, svg, obraz, pdf, publikuj, exportpdf, papier, skala, jednobarwny, odcienie szarości, czarno-biały, grubość linii, pióro, ustawienia strony, okno wydruku, styl wydruku, tabela stylów wydruku, ctb, zależny od koloru, rastrowanie, plotstyles, stylesmanager
from: a4752f83
---

## Co wykonasz

PDF arkusza w pełnym rozmiarze, potem szybki PDF modelu w skali 1:100 oraz wydruk.

PDF powstaje w przeglądarce; nic nie jest przesyłane. To wektorowy PDF: linie pozostają ostre przy każdym powiększeniu, a tekst można przeszukiwać.

## Drukowanie arkusza

1. Kliknij kartę arkusza pod rysunkiem.
2. Naciśnij {{key:Mod+P}}, kliknij {{ui:Drukuj}} albo wpisz `PLOT` i naciśnij {{key:Enter}}.

Otwiera się okno dialogowe {{ui:Drukuj do PDF}}. Pokazuje, który arkusz zostanie wydrukowany i na jakim papierze: „w pełnym rozmiarze … tak, jak go widzisz”. Podgląd po prawej pokazuje arkusz.

3. W {{ui:Styl wydruku}} wybierz {{ui:Jednobarwny (czarny)}} dla czarnych linii, {{ui:Kolor (jak narysowano)}}, aby zachować kolory, {{ui:Odcienie szarości}} albo własną tabelę (zob. [Tabele stylów wydruku](topic:plot-pdf#plot-style-tables)). Arkusz zachowuje ten wybór: jest zapisywany razem z rysunkiem.
4. W {{ui:Grubość linii}} wybierz grubość linii od 0.13 mm do 0.70 mm. Linie z domyślną grubością drukują się w tej grubości; linie z własną grubością (warstwy lub obiektu albo pióro ich koloru w tabeli) drukują się w swojej.
5. Kliknij {{ui:Pobierz PDF}}.

Przeglądarka pobiera plik PDF nazwany od rysunku i arkusza, na przykład `Drawing1-A-101 Plan.pdf`. Historia podaje jego rozmiar w bajtach i format papieru w milimetrach.

Arkusz zawsze drukuje się w skali 1:1 na własnym papierze. Aby zmienić papier, zmień go w samym arkuszu (zob. [Ustawianie arkusza](topic:sheets-and-viewports)). Warstwy ustawione jako niedrukowane są pomijane, tak samo jak ramki okien widokowych.

## Wszystkie arkusze w jednym PDF

Przy dwóch lub więcej arkuszach okno {{ui:Drukuj do PDF}} ma opcję {{ui:Wszystkie arkusze w jednym PDF}}; możesz też wpisać {{cmd:PUBLISH}}. {{key:Enter}} wybiera wszystkie arkusze; `S` (Niektóre) pyta o ich nazwy, oddzielone przecinkami. Pobierany jest jeden plik PDF ze stroną na każdy arkusz, w kolejności kart, każdy we własnym rozmiarze papieru, oraz zakładka z nazwą dla każdego arkusza. Każdy arkusz drukuje się we własnej tabeli stylów wydruku; arkusz bez wybranej tabeli używa tej, którą ostatnio wybrano w oknie, oraz grubości linii, którą ostatnio wybrano.

## Drukowanie modelu

1. Kliknij kartę {{ui:Model}}.
2. Naciśnij {{key:Mod+P}}.

Okno informuje, że model zostanie wydrukowany na arkuszu papieru, i pokazuje więcej ustawień:

3. W {{ui:Pole}} wybierz, co wydrukować:
   - {{ui:Wszystko (zasięg)}}: cały rysunek.
   - {{ui:Co jest na ekranie}}: obszar widoczny teraz w rysunku.
   - {{ui:Okno…}}: następnie kliknij {{ui:Wskaż}}, kliknij dwa narożniki na rysunku, a okno wróci.
4. W {{ui:Papier}} wybierz rozmiar: ISO od A4 do A0, Letter, Legal, Tabloid oraz ANSI C i D albo ARCH C, D i E.
5. W {{ui:Orientacja}} wybierz {{ui:Pozioma}} lub {{ui:Pionowa}}.
6. W {{ui:Skala}} wybierz {{ui:Dopasuj do papieru}} albo skalę, na przykład `1:100`.

Pod ustawieniami wiersz podaje skalę i to, jak duży wychodzi obszar na papierze. Jeśli jest większy od papieru, zostanie to wskazane: krawędzie zostaną obcięte. Wybierz mniejszą skalę, większy papier albo {{ui:Dopasuj do papieru}}.

7. Kliknij {{ui:Pobierz PDF}}.

Wydruk modelu zostawia margines 5 mm wokół krawędzi, ponieważ większość drukarek nie drukuje do samej krawędzi. {{ui:Dopasuj do papieru}} daje nietypową skalę (historia i wiersz informacji podają „(dopasowana)”); wybierz standardową skalę, gdy rysunek ma mieć prawdziwe wymiary.

:::note
Skale odczytywane są w jednostkach rzeczywistych. Aby 1:100 było poprawne, ustaw {{ui:Jednostki}} w {{ui:Bieżące ustawienia}} na to, czym jest jedna jednostka rysunku. Rysunek bez jednostek jest traktowany jako mający milimetry.
:::

## Tabele stylów wydruku

Tabela stylów wydruku określa, jak każdy z 255 standardowych kolorów rysunku się drukuje, tak jak tabela stylów zależna od koloru (CTB) w innych programach CAD. Są trzy wbudowane:

| Tabela | Drukuje |
|---|---|
| {{ui:Kolor (jak narysowano)}} | Każdy obiekt we własnym kolorze. |
| {{ui:Jednobarwny (czarny)}} | Każdy kolor czarny: zwykły wybór dla rysunków. |
| {{ui:Odcienie szarości}} | Każdy kolor jako jego odcień szarości, dzięki czemu kolory pozostają rozróżnialne na drukarce czarno-białej. |

Aby utworzyć własną, na przykład czerwone linie grube i czarne, a resztę cienkie:

1. W oknie {{ui:Drukuj do PDF}} kliknij {{ui:Edytuj tabele…}} (albo wpisz {{cmd:PLOTSTYLES}}).
2. Kliknij {{ui:Nowa}} i wpisz nazwę, na przykład `office`, w polu {{ui:Nazwa}}. Aby zacząć od tabeli wbudowanej, wybierz ją w {{ui:Tabela}} i kliknij {{ui:Kopiuj}}.
3. Kliknij kolor w siatce. {{key:Shift}}+kliknięcie zaznacza zakres kolorów, {{key:Mod}}+kliknięcie dodaje kolejny, a {{ui:Zaznacz wszystkie kolory}} zaznacza wszystkie.
4. Ustaw, jak drukują się zaznaczone kolory:
   - {{ui:Drukuje w}}: {{ui:Własnym kolorem}}, {{ui:Czarnym}} lub {{ui:Innym kolorem…}}.
   - {{ui:Jako szary}}: kolor jako jego odcień szarości.
   - {{ui:Nasycenie (%)}}: 100 to pełne nasycenie, 50 to połowa drogi do bieli (rastrowanie), do linii tła.
   - {{ui:Grubość linii}}: {{ui:Własna grubość linii}} zachowuje grubość obiektu lub warstwy; wartość drukuje każdą linię tego koloru w tej grubości.
   - {{ui:Typ linii}}: drukuj każdą linię tego koloru innym typem linii (na przykład wszystko czerwone kreskowane); {{ui:Użyj typu linii obiektu}} zostawia je bez zmian.
   - {{ui:Zakończenie linii}} i {{ui:Połączenie linii}}: zakończenia płaskie, kwadratowe lub okrągłe oraz narożniki ścięte, fazowane lub okrągłe (okrągłe, jak dotąd, gdy nic nie ustawisz).
   - {{ui:Styl wypełnienia}}: pełne wypełnienie tym kolorem drukuje się jako linie kreskowania (poziome lub pionowe pasy, ukosy, krzyżowe, romby, kwadratowe kropki) zamiast tuszem, dla drukarek i planów, w których pełny tusz jest zbyt ciężki.
   Sama tabela ma jeszcze dwa ustawienia: {{ui:Grubości linii}}, znane jej szerokości (drukowana linia trafia do najbliższej z nich), oraz {{ui:Skala typu linii}}, współczynnik kresek każdego typu linii, który nie jest typem ISO.
5. Kliknij {{ui:Gotowe}}. Tabela jest zachowywana w rysunku, a arkusz (lub model) drukuje się teraz z jej użyciem. {{ui:Anuluj}} odrzuca zmiany.

Kolor z własnym piórem pokazuje kropkę w rogu, a kropkę na dole, gdy ustawia grubość linii. Obiekt z kolorem rzeczywistym (nie jednym z 255) używa pióra najbliższego standardowego koloru.

Rysunek zachowuje swoje tabele i wybór każdego arkusza, gdy zapisujesz jako DWG (2000–2018) lub DXF (R12 albo 2000), i otwiera się z nimi ponownie. Inne programy widzą nazwę w ustawieniach strony każdego arkusza (`office.ctb`), a nie samą tabelę. Rysunek z innego programu, którego ustawienia strony wskazują tabelę, na przykład `monochrome.ctb`, drukuje się wbudowaną tabelą o tej nazwie; dla każdej innej nazwy okno informuje, że rysunek jej nie ma, i drukuje kolory rysunku, dopóki nie wybierzesz tabeli albo nie utworzysz tabeli o tej nazwie.

Aby użyć tabeli w innym rysunku, kliknij {{ui:Eksportuj}} w {{ui:Tabele stylów wydruku}} (zapisuje `office.plotstyle.json`), a następnie {{ui:Importuj…}} w drugim rysunku. {{ui:Importuj…}} przyjmuje także plik `.ctb` z innego programu: jest odczytywany z opublikowanego opisu formatu i **nie został jeszcze sprawdzony na prawdziwym pliku**. Odczytywane są kolor, rastrowanie i grubość linii każdego koloru; odcienie szarości, numery piór, typy linii, zakończenia i połączenia linii oraz style wypełnienia nie są odczytywane, a nazwana tabela (`.stb`) jest odrzucana. Porównaj pierwszy wydruk z oczekiwanym wynikiem i prześlij nam plik, jeśli jest błędny.

## Drukowanie

**W przeglądarce** kliknij {{ui:Drukuj…}}. CadCraft tworzy PDF i otwiera dla niego własne okno drukowania przeglądarki. Wybierz tam „Rzeczywisty rozmiar” lub 100% (nie „Dopasuj”), aby zachować skalę. Jeśli przeglądarka nie może drukować ze strony, PDF otwiera się zamiast tego w nowej karcie: wydrukuj go stamtąd za pomocą {{key:Mod+P}}.

Możesz też kliknąć {{ui:Otwórz do wydruku}}: PDF otwiera się w nowej karcie przeglądarki i drukujesz go stamtąd.

:::safari
Safari może pokazać PDF i czekać, aż użyjesz **Plik**, a następnie **Drukuj**.
:::

Jeśli przeglądarka zablokuje nową kartę, CadCraft zamiast tego pobiera PDF i informuje o tym w historii. Zezwól na wyskakujące okna dla tej witryny, aby następnym razem otwierał się w karcie.

**W CadCraft Studio** okno {{ui:Drukuj do PDF}} wyświetla listę drukarek komputera. Wybierz {{ui:Drukarka}}, {{ui:Papier w drukarce}} i liczbę {{ui:Kopie}}, a następnie kliknij {{ui:Drukuj…}}. {{ui:Jak w wydruku}} wybiera papier drukarki o rozmiarze arkusza (A3 dla arkusza A3); gdy drukarka go nie ma, używa własnego papieru i dopasowuje arkusz do niego. W systemie Windows arkusz jest wysyłany jako obraz 300 dpi, ponieważ Windows nie może drukować PDF bez programu do PDF; w systemach Linux i macOS sam PDF trafia do systemowej usługi drukowania. Nic nie opuszcza komputera.

## Pliki obrazów i SVG

{{ui:Pobierz PNG}} zapisuje wydrukowany arkusz jako obraz w 300 dpi (obniżany tylko wtedy, gdy bardzo duży arkusz byłby większy, niż przeglądarka może wygenerować; historia to podaje). {{ui:Pobierz SVG}} zapisuje go jako skalowalny rysunek w milimetrach, z liniami i tekstem wydruku. Oba powstają z tego samego wydruku co PDF, z tym samym stylem wydruku, grubością linii i obszarem. Obrazy umieszczone w rysunku znajdują się tylko w PDF; historia podaje, ile ich pominięto.

## Obrazy

Obrazy drukują się we własnej rozdzielczości, pod liniami. {{ui:Obrazy}} w oknie ogranicza je do 600, 300 lub 150 dpi, aby uzyskać mniejszy plik. Linie, tekst i kreskowania zawsze pozostają ostre (wektorowe), a przezroczystość pozostaje przezroczystością. Zob. [Obrazy w rysunku](topic:pictures).

## Zapamiętywane ustawienia

Okno zapamiętuje ostatni papier, orientację, skalę i grubość linii w tej przeglądarce. Tabela stylów wydruku jest zachowywana przy każdym arkuszu w rysunku; arkusz bez wybranej tabeli zaczyna od tej, którą wybrano ostatnio. Wskazane okno jest zachowywane do przeładowania strony; potem okno zaczyna od {{ui:Wszystko (zasięg)}}.

## Typowe błędy

- **PDF jest pusty albo przyciski są szare.** Nie ma nic do wydrukowania (pusty model) albo wybrano {{ui:Okno…}} i nie wskazano jeszcze okna („Wskaż okno do wydruku.”).
- **W PDF widać „?” zamiast tekstu.** Tekst po polsku, czesku, cyrylicą, grecku i w innych alfabetach Europy drukuje się jako on sam: PDF zawiera wtedy potrzebne litery (z kroju Liberation Sans, który ma szerokości znaków Helvetica), a tekst nadal można zaznaczyć i przeszukiwać. Tekst po chińsku, japońsku i koreańsku również drukuje się jako on sam: gdy rysunek go zawiera, wydruk pobiera większą czcionkę (około 10 MB, jednorazowo), a PDF zawiera tylko użyte znaki, więc za pierwszym razem potrzebne jest połączenie (nie dotyczy kopii offline zapisanej wcześniej). Hebrajski drukuje się z tej samej osadzonej czcionki co tekst łaciński, a tekst arabski, perski i urdu powoduje pobranie jeszcze jednej czcionki (poniżej 1 MB, jednorazowo); wiersze pisane od prawej do lewej są uporządkowane, a litery połączone (zob. [Tekst](topic:text)). Rzadkie ideogramy spoza tych czcionek oraz pisma wymagające złożonego kształtowania, takie jak hindi, drukują się jako „?”, a historia je zlicza.
- **Wszystkie linie mają tę samą grubość.** Ich grubość jest domyślna: nadaj warstwom lub obiektom {{ui:Grubość linii}} w prawym panelu (zob. [Grubości linii i typy linii](topic:units-papers-scales#line-weights-and-linetypes)) albo ustaw grubości według koloru w [tabeli stylów wydruku](topic:plot-pdf#plot-style-tables).
- **„(brak w tym rysunku)” przy stylu wydruku.** Rysunek pochodzi z innego programu i wskazuje tabelę, której nie zawiera. Wybierz jedną z tabel albo utwórz tabelę o tej nazwie.
- **Linie konstrukcyjne zostały wydrukowane.** Ustaw ich warstwę jako niedrukowaną: kliknij jej przycisk drukarki w panelu {{ui:Warstwy}}.
- **Wydruk ma zły rozmiar.** Drukarka go przeskalowała. Drukuj w rzeczywistym rozmiarze.
- **{{key:Mod+P}} otworzyło okno drukowania przeglądarki.** Kursor był w polu w prawym panelu albo otwarte było inne okno. Naciśnij {{key:Enter}} lub {{key:Esc}}, aby opuścić pole, a następnie spróbuj ponownie albo kliknij {{ui:Drukuj}}.
- **{{key:Mod+P}} nic nie zrobiło.** Działa polecenie. Najpierw naciśnij {{key:Esc}}.
