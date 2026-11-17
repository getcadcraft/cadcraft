---
title: Dodawanie tekstu i etykiet
summary: Umieszczaj etykiety pomieszczeń jako tekst jednowierszowy, pisz zawijane notatki jako tekst akapitowy wpisywany bezpośrednio na rysunku i edytuj tekst później.
keywords: tekst, dtext, mtext, mleader, multileader, odnośnik, revcloud, chmura rewizji, chmura, znajdź, zamień, znajdź i zamień, akapit, zawijanie, interlinia, etykieta, notatka, adnotacja, wysokość, wyrównanie, textmask, maska tła, maska, wymazanie, obrót, edycja tekstu, ddedit, textedit, czcionka
from: 4b76be99
---

## Co powstanie

Dwie etykiety pomieszczeń, wyśrodkowane w swoich pomieszczeniach, notatka zawijana do swojej szerokości, a potem poprawka jednej z etykiet.

## Wysokość tekstu a skala rysunku

Wysokość tekstu podawana jest w jednostkach rysunku. Na rysunku w milimetrach, który będzie drukowany w skali 1:50, tekst o wysokości 2,5 mm na papierze musi mieć w modelu 2,5 × 50 = 125 jednostek wysokości. Na karcie arkusza rysujesz w jednostkach papieru, więc wartość 2.5 oznacza tam 2,5 mm na papierze.

## Umieszczanie wyśrodkowanej etykiety

1. Wpisz `DT` i naciśnij {{key:Enter}} (albo kliknij {{ui:Tekst}} na pasku narzędzi). Monit brzmi `Specify start point of text [Justify]:`.
2. Wpisz `J` i naciśnij {{key:Enter}}.
3. Przy `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:` wpisz `MC` i naciśnij {{key:Enter}}.
4. Przy `Specify insertion point of text` kliknij środek pomieszczenia.
5. Przy `Specify height` wpisz `250` i naciśnij {{key:Enter}}.
6. Przy `Specify rotation angle of text <0>` naciśnij {{key:Enter}}.
7. Przy `Enter text` wpisz `KITCHEN` i naciśnij {{key:Enter}}.

Etykieta pojawia się wyśrodkowana względem punktu, w którym kliknięto.

8. Naciśnij {{key:Enter}} przy pustym monicie `Enter text`, aby zakończyć polecenie.

## Pisanie notatki z zawijaniem

Tekst akapitowy ({{cmd:MTEXT}}) zawija się do zadanej szerokości i jest wpisywany bezpośrednio na rysunku.

1. Wpisz `T` i naciśnij {{key:Enter}} albo kliknij {{ui:Akapit}} na pasku narzędzi.
2. Przy `Specify first corner` kliknij miejsce lewego górnego rogu notatki.
3. Aby najpierw zmienić wysokość, wpisz `H`, naciśnij {{key:Enter}}, wpisz `250` i naciśnij {{key:Enter}}.
4. Przy `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]` kliknij na prawo od pierwszego rogu. Odległość w poziomie to szerokość, do której zawija się tekst; to, jak nisko kliknięto, go nie ogranicza.
5. Nad rysunkiem otwiera się pole z kursorem. Wpisz `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Wyrazy zawijają się do szerokości w miarę pisania.
6. Naciśnij {{key:Enter}}, aby rozpocząć nowy akapit, i wpisz `CHECK ON SITE`.
7. Naciśnij {{key:Mod+Enter}}, kliknij {{ui:OK}} albo kliknij poza polem. Notatka jest jednym obiektem.

Pasek nad polem zmienia {{ui:Wysokość}}, {{ui:Interlinia}} (1 to normalnie, 1,5 to o połowę więcej), {{ui:Szerokość}} (0 = bez zawijania) i {{ui:Wyrównanie}} podczas pisania. {{key:Esc}} lub {{ui:Anuluj}} zamyka pole bez dodawania czegokolwiek.

Opcje przy drugim rogu: `H` wysokość, `J` wyrównanie (`TL` lewy górny … `BR` prawy dolny: narożnik lub środek pola, który pozostaje w miejscu), `L` interlinia, `R` obrót, `W` wpisana szerokość zamiast drugiego rogu.

:::note
Gdy pole jest otwarte, {{key:Space}} wpisuje spację, a {{key:Enter}} zaczyna nowy akapit. Zapisany DWG zachowuje tekst akapitowy jako MTEXT; DXF R12 nie ma tekstu akapitowego, więc każdy wiersz zapisywany jest jako osobny tekst.
:::

### Zamiast tego kilka pojedynczych wierszy

{{cmd:TEXT}} (`DT`) pyta o jeden wiersz naraz: każdy {{key:Enter}} zaczyna następny wiersz, o 1,667 razy wysokość tekstu niżej, a każdy wiersz jest osobnym obiektem. Naciśnij {{key:Enter}} na pustym wierszu, aby zakończyć.

## Opcje wyrównania

| Opcja | Punkt, który wskazujesz myszą, to |
|---|---|
| Lewa (domyślnie) | Lewy koniec linii bazowej |
| Środek | Środek linii bazowej |
| Prawa | Prawy koniec linii bazowej |
| Środek obu osi, MC | Środek tekstu, zarówno w poziomie, jak i w pionie |
| TL | Lewy górny narożnik |

## Edycja tekstu

1. Kliknij dwukrotnie obiekt tekstowy. Otwiera się w tym samym polu co nowy tekst akapitowy, z kursorem na końcu.
2. Zmień słowa.
3. Naciśnij {{key:Mod+Enter}} albo kliknij poza polem. Tekst na rysunku się zmienia; {{key:Esc}} zostawia go bez zmian.

{{cmd:TEXTEDIT}} (`ED`) robi to samo: wskazuj po kolei kolejne teksty i naciśnij {{key:Enter}}, gdy skończysz.

Aby zmienić tekst w prawym panelu, zaznacz go: {{ui:Tekst}}, {{ui:Wysokość}}, {{ui:Szerokość zawijania}} (0 = bez zawijania), {{ui:Interlinia}}, {{ui:Obrót}}, położenie X i Y oraz {{ui:Wyrównanie}}. Lista {{ui:Wyrównanie}} oferuje też Lewy dolny, którego czasem używa tekst z innych programów.

## Formatowanie w tekście akapitowym z innych programów

Tekst akapitowy w DWG lub DXF może zawierać kody: kolory dla poszczególnych słów, pogrubienie i kursywę, podkreślenie, nadkreślenie i przekreślenie, ułamki piętrowe, np. 1/2, oraz inną wysokość dla wybranego słowa. CadCraft zachowuje te kody, rysuje je (na ekranie i w wydrukowanym PDF) i zapisuje z powrotem bez zmian.

Podczas edycji takiego tekstu (dwukrotne kliknięcie, {{cmd:TEXTEDIT}}, pole Tekst w prawym panelu lub {{cmd:FIND}} z zamianą) edytujesz jego zwykłe słowa. Wpisane słowo trafia do sąsiedniego fragmentu i przejmuje jego kolor i styl; pozostałe kody zostają na swoich miejscach. Jeśli zmienisz liczby ułamka piętrowego, ten ułamek stanie się zwykłym tekstem. Ustawienie całego tekstu z pola Tekst zachowuje kody tylko tam, gdzie da się rozpoznać, które słowa pozostały.

Nazwy czcionek (`\F`) są zachowywane i zapisywane, ale wszystko rysowane jest jedną czcionką w stylu Helvetica. Nie ma jeszcze paska narzędzi do wpisywania kodów.

## Wskazywanie czegoś: odnośniki wielokrotne

{{ui:Odnośnik}} w grupie {{ui:Adnotacje}} ({{cmd:MLEADER}}, `MLD`) rysuje strzałkę, linię odnośnika, krótki odcinek końcowy i notatkę jako jeden obiekt.

1. Kliknij {{ui:Odnośnik}}. Przy `Specify leader arrowhead location` kliknij to, czego dotyczy notatka.
2. Przy `Specify leader landing location` kliknij miejsce notatki. Odcinek końcowy skręca w stronę, w którą kliknięto.
3. Wpisz notatkę w polu, które się otworzy, i naciśnij {{key:Mod+Enter}}.

`A` i `L` przy pierwszym pytaniu ustawiają rozmiar grotu i długość odcinka końcowego; wysokość tekstu pochodzi z {{ui:Wysokość tekstu}} dla nowych wymiarów, pomnożonej przez {{ui:Skala ogólna}}. Dwukrotne kliknięcie odnośnika wielokrotnego zmienia jego tekst. Uchwyty przesuwają grot i odcinek końcowy; notatka podąża za odcinkiem. We {{ui:Właściwościach}}: {{ui:Tekst}}, {{ui:Wysokość}}, {{ui:Szerokość zawijania}}, {{ui:Rozmiar grotu}} i {{ui:Odcinek końcowy}}.

:::note
Odnośniki wielokrotne zapisują się jako prawdziwe odnośniki wielokrotne w DWG. DXF nie ma odnośnika wielokrotnego w R12 ani 2000, więc tam zapisują się jako linie, grot i tekst, które rysują.
:::

## Zaznaczanie zmian chmurą rewizji

{{ui:Adnotacje}} › {{ui:Więcej}} › {{ui:Chmura rewizji}} ({{cmd:REVCLOUD}}, `RC`) rysuje chmurę łuków wokół zmienionego miejsca. Historia pokazuje długość łuku i typ, którego zostanie użyty.

- **Prostokątna** (pierwsza): kliknij dwa narożniki.
- `P` **Wielokątna**: kliknij narożniki; {{key:Enter}} zamyka chmurę.
- `F` **Odręczna**: kliknij, gdzie się zaczyna, i przesuwaj wskaźnik wokół obszaru bez klikania; łuk dodawany jest co długość łuku. Kliknij albo naciśnij {{key:Enter}}, aby ją zamknąć.
- `O` **Obiekt**: wskaż zamkniętą polilinię, okrąg lub elipsę (albo linię, łuk lub otwartą polilinię); staje się chmurą. Pytanie `Reverse direction?`: `Y` odwraca łuki do wewnątrz.
- `A` **Długość łuku**: długość każdego łuku. Wybierz taką, która pasuje do skali wydruku.

Chmura jest zamkniętą polilinią łuków, więc zapisuje się w każdym formacie.

## Znajdowanie i zamienianie słów

{{ui:Edycja}} › {{ui:Więcej}} › {{ui:Znajdź i zamień}} ({{cmd:FIND}}) przeszukuje tekst, wartości atrybutów bloków i tekst wymiarów na otwartej karcie (albo tylko w zaznaczonych obiektach).

1. Wpisz słowa w polu {{ui:Znajdź}}. Lista pokazuje każde miejsce i liczbę wystąpień.
2. Wybierz {{ui:Uwzględnij wielkość liter}}, {{ui:Tylko całe wyrazy}} lub {{ui:Użyj symboli wieloznacznych (* i ?)}}, jeśli ich potrzebujesz, i odznacz to, czego nie szukać.
3. Kliknij {{ui:Zaznacz znalezione}}, aby zaznaczyć te obiekty, albo wpisz nowe słowa w polu {{ui:Zamień na}} (lista pokazuje, na co zmieni się każde) i kliknij {{ui:Zamień wszystko}}. Jedno {{key:Mod+Z}} cofa wszystkie zamiany.

Zmierzona wartość wymiaru nie jest tekstem, więc nigdy nie jest zamieniana: w `<> TYP.` może zostać zamienione tylko `TYP.`.

## Ukrywanie linii za etykietą

1. Zaznacz teksty, wpisz {{cmd:TEXTMASK}} i naciśnij {{key:Enter}}.
2. `B` maluje tło rysunku za nimi; `C` pyta o numer koloru. `O` usuwa maskę.
3. `Border offset factor`: {{key:Enter}} zostawia 1,5, czyli pół wysokości tekstu dookoła tekstu.

Maska zakrywa linie pod tekstem, na ekranie i przy wydruku. DWG 2004 lub nowszy oraz DXF 2000 ją zachowują; format DWG 2000 i DXF R12 nie mogą, a zapis to mówi.

## Czcionka

Cały tekst rysowany jest czcionką w stylu Helvetica, na ekranie i w PDF. Tekst z otwartych rysunków zachowuje swoje słowa, wysokość i położenie, ale nie swoją oryginalną czcionkę (nazwa czcionki wewnątrz tekstu akapitowego jest zachowana w pliku, patrz wyżej).

W wydrukowanych PDF tekst w dowolnym piśmie europejskim, cyrylicy lub greckim drukuje się jak wpisany (PDF zawiera potrzebne litery, a tekst nadal można zaznaczyć i wyszukiwać). Tekst chiński, japoński i koreański również drukuje się jak wpisany (wydruk pobiera większą czcionkę, gdy jest potrzebna po raz pierwszy). Tekst arabski, perski, urdu i hebrajski drukuje się także jak wpisany (patrz następna sekcja). Znaki, dla których żadna czcionka nie ma litery, drukują się jako „?”, a historia podaje, ile ich było.

## Tekst od prawej do lewej: arabski, perski, urdu, hebrajski

Wpisuj tekst jak zwykle: {{cmd:TEXT}} i {{cmd:MTEXT}} rysują każdy wiersz w kolejności czytania. Wiersz, którego pierwsza litera jest arabska lub hebrajska, czyta się od prawej do lewej; liczby i łacińskie słowa wewnątrz zachowują własny porządek od lewej do prawej, a litery pisma arabskiego są połączone. Wiersz zaczynający się od łacińskiej litery pozostaje od lewej do prawej, a słowa od prawej do lewej są na swoim miejscu wewnątrz niego. Każdy akapit tekstu wieloliniowego ma własny kierunek, a zawinięty akapit zachowuje go w każdym wierszu.

Tekst zapisywany jest tak, jak go wpisano, więc pliki DWG i DXF wymieniają go z innymi programami bez zmian. Punkt wstawienia i wyrównanie ({{ui:Lewa}}, {{ui:Środek}}, {{ui:Prawa}}) oznaczają tę samą stronę co dla każdego tekstu: notatka od prawej do lewej, która ma zwisać od swojego prawego końca, potrzebuje {{ui:Prawa}}.

Na ekranie litery pochodzą z czcionek systemu. W wydrukowanym PDF hebrajski używa tej samej osadzonej czcionki co tekst łaciński; tekst pisma arabskiego powoduje, że wydruk pobiera jeszcze jedną czcionkę (poniżej 1 MB, raz), a cały PDF drukuje się wtedy tą czcionką. Ta czcionka nie ma własnych kształtów dla trzech znaków urdu (heh goal, yeh barree i urdu full stop): drukują się w kształcie najbliższej litery arabskiej. Rysunek, który ma zarówno tekst pisma arabskiego, jak i chiński, japoński lub koreański, drukuje jedno z nich jako „?”, bo wydruk zawiera jedną czcionkę. Tekst w załadowanej czcionce SHX jest porządkowany i łączony, gdy czcionka ma litery w swoich miejscach Unicode; dla starych czcionek, których litery są już ukształtowane, użyj {{ui:Odwróć}} w {{cmd:SHXFONTS}}, jak dotychczas.

## Częste błędy

- **Tekst jest za mały, by go zobaczyć.** Wysokość podana jest w jednostkach rysunku. W dużym rysunku użyj dużej wysokości (patrz wyżej) albo powiększ widok.
- **Polecenie zakończyło się po jednym wierszu.** Naciśnięto {{key:Enter}} na pustym wierszu w {{cmd:TEXT}}. Uruchom je ponownie albo użyj tekstu akapitowego (`T`), w którym {{key:Enter}} zaczyna nowy akapit.
- **`T` otworzyło pole zamiast pytać o wiersz.** Jak w AutoCAD, `T` to tekst akapitowy ({{cmd:MTEXT}}); tekst jednowierszowy to `DT`.
- **Tekst zawija się w innym miejscu niż w AutoCAD.** CadCraft zawija według szerokości znaków Helvetica; inna czcionka może zmieścić w wierszu więcej lub mniej słów.
- **Tekst w lustrzanej kopii.** Jest umieszczony lustrzanie, ale pozostaje czytelny od lewej do prawej.
