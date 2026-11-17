---
title: Obrazy w rysunku
summary: Umieść obraz PNG lub JPEG, przytnij go do prostokąta lub wielokąta, pokaż obrazy używane przez DWG i drukuj je ostro.
keywords: pastearea, parea, kopiuj obszar, skopiowany obszar, markupcraft, rozmiar naturalny, rzeczywisty rozmiar, nakładka, ole, ole2frame, osadzony obiekt, wklej obraz, wklej zrzut ekranu, ctrl+v, obraz ze schowka, zrzut ekranu, obraz, imageattach, iat, image, imageclip, przycinanie, clip, png, jpeg, jpg, logo, zdjęcie, rastrowy, imagedef, xref, drukowanie, pdf, rozdzielczość
from: 4025ac97
---

## Co wykonasz

Logo firmy umieszczone w tabliczce rysunkowej, przycięte do wybranej części, oraz PDF, w którym drukuje się ono w swojej rozdzielczości.

## Umieść obraz

1. Wpisz {{cmd:IMAGEATTACH}} (lub `IAT`) i naciśnij {{key:Enter}}. Wybierz plik PNG lub JPEG.
2. `Wskaż lewy dolny róg`: kliknij albo wpisz punkt.
3. `Podaj szerokość`: szerokość w jednostkach rysunku. {{key:Enter}} zachowuje proponowaną szerokość: jedną jednostkę na piksel albo szerokość, którą podano dla tego pliku ostatnio (monit mówi, która).
4. `Podaj kąt obrotu`: naciśnij {{key:Enter}}, jeśli bez obrotu.

Obraz jest jednym obiektem: zaznacz go po ramce i przesuwaj, kopiuj, obracaj, skaluj lub usuwaj jak każdy blok.

:::note
Plik obrazu pozostaje przy rysunku, dopóki rysunek jest otwarty. Zapisany DWG podaje nazwę pliku, tak jak robią to inne programy; nie zawiera pikseli. Trzymaj obraz obok rysunku.
:::

## Wklej zrzut ekranu lub skopiowany obraz

1. Skopiuj obraz (zrzut ekranu klawiszami {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=narzędzie do zrzutów ekranu}} albo Kopiuj obraz w innym programie lub w przeglądarce).
2. Wskaż miejsce na rysunku, w którym ma się znaleźć, i naciśnij {{key:Mod+V}}.

Lewy dolny róg obrazu ląduje przy wskaźniku (albo na środku widoku), o szerokości 40% tego, co widzisz; przesuń, przeskaluj i przytnij go jak każdy obraz. Jego nazwa to nazwa rysunku z dopiskiem `-picture-1.png` (potem `-2`, …), a historia to mówi.
{{ui:Edycja}} › {{ui:Więcej}} › {{ui:Wklej obraz}} robi to samo z menu (przeglądarka może najpierw zapytać).

DWG zachowuje tylko nazwę pliku obrazu, więc zapis rysunku zapisuje też obraz jako osobny plik. Trzymaj oba w tym samym folderze: rysunek pokazuje obraz z tego miejsca. W przeglądarce to drugie pobranie, a historia to mówi. Gdy w schowku są tylko obiekty CadCraft, {{key:Mod+V}} wkleja je, jak wcześniej.

## Wklej obszar skopiowany w MarkupCraft

{{ui:Kopiuj obszar}} w MarkupCraft kopiuje część arkusza jako obraz, który zna swój rozmiar. CadCraft wkleja go w tym rozmiarze.

1. W MarkupCraft skopiuj obszar (prostokąt, okrąg albo kształt dowolny; {{ui:Kopiuj jako nakładkę}}, jeśli chcesz widzieć przez niego rysunek).
2. W CadCraft naciśnij {{key:Mod+V}}, wpisz {{cmd:PASTEAREA}} (lub `PAREA`) albo wybierz {{ui:Edycja}} › {{ui:Więcej}} › {{ui:Wklej skopiowany obszar}}.
3. `Wskaż lewy dolny róg skopiowanego obszaru`: kliknij albo wpisz punkt. Ramka o rozmiarze obszaru podąża za wskaźnikiem.

Jak duży będzie wynik:

- **Arkusz miał skalę rysunku:** w rzeczywistym rozmiarze, w jednostkach rysunku (detal 1:50 schodów o długości 2 m ma 2 m długości w rysunku w metrach, a 78.74 w rysunku w calach). Nic więcej nie jest pytane.
- **Arkusz nie miał skali:** CadCraft podaje jego rozmiar na papierze i pyta o skalę: wpisz `100` dla arkusza 1:100, naciśnij {{key:Enter}} dla rozmiaru papieru albo wpisz `P`, kliknij dwa punkty na wklejonym obrazie i wpisz, jak daleko od siebie są naprawdę (tak jak robi to {{cmd:SCANSCALE}}). Lewy dolny róg zostaje tam, gdzie go umieściłeś.

Rysunek bez jednostek przyjmuje milimetry, tak jak podkład PDF. Nakładka zachowuje przezroczysty papier i zaczyna tak blado, jak była skopiowana; poza kołem lub kształtem dowolnym też jest przezroczysta. Wklejony obszar jest obrazem jak każdy inny: przesuwaj, obracaj, skaluj, przycinaj lub usuwaj go, a całe wklejenie to jeden krok cofnięcia. Zapisany jako DWG jest obiektem IMAGE z jego zanikiem i przezroczystością.

{{key:Mod+V}} wkleja obszar, gdy obraz w schowku jest obszarem albo gdy obszar został skopiowany po czymkolwiek innym, co kopiowano w CadCraft (i w ciągu ostatnich 6 godzin). W przeciwnym razie wkleja jak dotąd. {{cmd:PASTEAREA}} wkleja ostatnio skopiowany obszar w dowolnym momencie.

## Pokaż obrazy używane przez DWG

DWG przechowuje tylko to, gdzie były jego obrazy, więc CadCraft pokazuje każdy jako ramkę z nazwą pliku.

1. Wpisz {{cmd:IMAGE}} (lub `IM`). Wiersz poleceń wymienia każdy plik obrazu i to, czy się pokazuje.
2. Wybierz pliki (kilka naraz). Plik, którego nazwa zawiera nazwę podaną przez rysunek, też się liczy, bo eksporty często dodają prefiks projektu.

## Przytnij obraz

1. Wpisz {{cmd:IMAGECLIP}} (lub `ICL`) i wybierz obraz.
2. Wybierz `R` i kliknij dwa rogi albo `P` i kliknij punkty wielokąta, a następnie naciśnij {{key:Enter}}. `D` usuwa przycięcie.

## Drukowanie obrazów

Obrazy trafiają do PDF jako obrazy, w swojej rozdzielczości, pod liniami. W oknie {{ui:Drukuj}} {{ui:Obrazy}} mogą ograniczyć je do 600, 300 lub 150 dpi, aby plik był mniejszy. JPEG trafia tak, jak jest.

## Gdzie co jest zapisywane

| Format | Obrazy |
|---|---|
| DWG (każda wersja) | Jako obrazy (IMAGE), z ich przycięciem |
| DXF | Jako ich ramki z nazwą pliku; zapis to mówi |

## Obiekty z innych programów (OLE)

Rysunek może zawierać obiekty wykonane przez inny program, takie jak obraz z programu graficznego albo zakres arkusza kalkulacyjnego (obiekty OLE). CadCraft ich nie uruchamia ani nie edytuje i nie może wstawiać nowych. Robi tak:

- **W DXF** obiekt OLE otwiera się jako ramka. Jeśli obiekt zapisał swój obraz i jest to bitmapa, obraz jest rysowany w ramce; w przeciwnym razie ramka ma etykietę z typem obiektu, na przykład „Microsoft Excel Worksheet (OLE)”. Ramkę możesz przesuwać, kopiować i usuwać jak blok. {{cmd:SAVEAS}} do DXF 2000 zapisuje ją ponownie jako obiekt OLE, z niezmienionymi danymi.
- **W DWG** obiekty są zachowywane i zapisywane z powrotem przy zapisie jako DWG, bajt w bajt, ale **nie są pokazywane**: DWG przechowuje miejsce obiektu w jego własnych danych, a CadCraft jeszcze tego nie czyta. Historia mówi, ile ich zachowano. Wpisz {{cmd:OLELIST}}, aby zobaczyć, czym są (typ, rozmiar, czy każdy zapisał obraz), i umieścić kopię obrazu tam, gdzie wybierzesz: **Umieść** pyta o numer, lewy dolny róg i szerokość, i rysuje ramkę z obrazem. Ta kopia jest ramką, którą możesz przesunąć lub usunąć; sam obiekt pozostaje w rysunku i nadal jest zapisywany przy zapisie.
- Obiekt pochodzący z DXF jest zapisywany w DWG tylko jako jego ramka i etykieta; historia to mówi. Zapisz jako DXF 2000, aby zachować sam obiekt.
- Obrazy będące metaplikami (co zapisuje wiele programów) nie są rysowane: zamiast nich pokazuje się ramka i etykieta.

## Typowe błędy

| Widzisz | Dlaczego | Rozwiązanie |
|---|---|---|
| Ramkę z nazwą pliku | CadCraft nie ma tego pliku | {{cmd:IMAGE}}, a potem wybierz plik |
| „To nie jest obraz” | Wybrany obiekt nie jest obrazem | Wybierz ramkę obrazu |
