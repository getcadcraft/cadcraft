---
title: Umieszczanie profili stalowych i części standardowych
summary: Rysuj profile stalowe, widoki z boku i elementy 3D z opublikowanych tablic przekrojów, umieszczaj śruby, nakrętki, podkładki, kołki, łożyska, wpusty i koła zębate zgodnie z ich normami oraz zestawiaj je w liście części.
keywords: stal, przekrój, profil, kształt, kształt W, szerokostopowy, dwuteownik, ceownik, kątownik, hss, rura, ipe, hea, heb, upn, belka, słup, element, widok z boku, aisc, en 10365, śruba, nakrętka, podkładka, kołek, łożysko, wpust, rowek na wpust, koło zębate, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, części standardowe, lista części, zestawienie materiałów, bom, steelmember, partslist
from: 547c1048
---

Karta {{ui:Standardowy}} w bibliotece zawiera dwa rodzaje elementów, tworzonych tutaj z opublikowanych tablic (nic nie jest pobierane):

- **Profile stalowe**: 1,335 rozmiarów. W, S, C, L, HSS i Pipe z AISC Shapes Database v16.0; IPE, HEA, HEB i UPN z EN 10365:2017. DetailCraft używa tej samej tablicy.
- **Części standardowe**: śruby z łbem sześciokątnym (ISO 4017), śruby sześciokątne (ISO 4014), nakrętki sześciokątne (ISO 4032), podkładki płaskie (ISO 7089), calowe śruby i nakrętki sześciokątne (ASME B18.2.1 i B18.2.2), kołki walcowe (ISO 2338), łożyska kulkowe zwykłe (ISO 15), wpusty równoległe (DIN 6885-1) i koła zębate walcowe o zębach prostych (moduły z ISO 54).

Wszystko tutaj jest udostępniane na licencji CC0: można tego używać do czegokolwiek, bez potrzeby podawania autora.

## Umieść profil stalowy

1. Otwórz bibliotekę ({{ui:Biblioteka}} w grupie Bloki lub wpisz `LIB`) i wskaż kartę {{ui:Standardowy}}.
2. Wybierz rodzinę na pierwszej liście, np. {{ui:Kształty W}}. Wpisz w polu wyszukiwania, aby zawęzić rozmiary: `W12` pokazuje wszystkie W12.
3. W {{ui:Umieść jako}} wybierz:
   - {{ui:Przekrój}}: przekrój poprzeczny, którego środek jest w punkcie wstawienia.
   - {{ui:Wysokość nad poziomem}}: element widziany z boku, o długości podanej w {{ui:Długość (mm)}}, od środka lewego końca.
   - {{ui:Element 3D}}: bryła na karcie 3D (poniżej).
4. Wskaż {{ui:Umieść}} na karcie rozmiaru, a następnie wskaż miejsce, jak dla każdego elementu biblioteki.

Przekrój lub widok z boku staje się blokiem. Jego atrybuty zawierają rozmiar, tablicę, z której pochodzi, długość (dla widoku z boku) oraz materiał, który można uzupełnić.

:::note
Kształty S, ceowniki i UPN są rysowane z równoległymi półkami o średniej grubości, a kątowniki z ostrymi narożnikami: rzeczywiste półki są pochylone, a narożniki zaokrąglone. Kształty W, IPE, HEA i HEB mają zaokrąglenia u nasady, a HSS promienie narożników.
:::

## Utwórz element 3D

Wybierz {{ui:Element 3D}} i wskaż {{ui:Umieść}}, albo wpisz {{cmd:STEELMEMBER}} (`SMEMBER`) w wierszu poleceń:

1. Przy `Section size` naciśnij {{key:Enter}}, aby przyjąć pokazany rozmiar, albo wpisz inny, np. `HSS6x6x1/4` lub `IPE300`.
2. Wskaż punkt początkowy, a potem punkt końcowy. Element biegnie między nimi, stojąc na ziemi.
3. Dla słupa wpisz `C`, wskaż jego punkt podstawy i wpisz wysokość.

Element jest zamkniętą bryłą na karcie 3D. Można go tam przesunąć lub skopiować jak każdą inną bryłę. {{key:Mod+Z}} usuwa go ponownie.

## Umieść część standardową

1. Na karcie {{ui:Standardowy}} wybierz rodzinę, np. {{ui:Śruby z łbem sześciokątnym}}.
2. Dla śruby, kołka lub wpustu wpisz ich {{ui:Długość (mm)}} (w calach dla rodzin calowych). Dla koła zębatego wpisz {{ui:Zęby}}, {{ui:Szerokość czoła (mm)}} i {{ui:Otwór (mm)}}. Zostaw puste pole, aby użyć zwykłej wartości pokazanej w nim.
3. Wskaż {{ui:Umieść}} przy rozmiarze i wskaż miejsce.

Śruby, śruby sześciokątne i kołki rysowane są z boku, z powierzchnią oporową łba w punkcie wstawienia; nakrętki, podkładki, łożyska i koła zębate są rysowane frontalnie; wpusty z góry. Gwinty rysowane są w zwykły sposób: dno gwintu cienką linią, koniec gwintu grubą. Koła zębate rysowane są jako okrąg wierzchołków, okrąg podziałowy i okrąg podstawy, a nie ząb po zębie.

Blok każdej części zawiera jako atrybuty swój typ, normę, rozmiar, długość i materiał, a także jej masę wyliczoną z kształtu nominalnego w stali. Materiał zmienia się w panelu {{ui:Właściwości}}.

Te same części są też w bibliotece jako elementy, a PartCraft otwiera je jako części parametryczne ({{ui:Część standardowa}} w jego grupie Plik).

## Utwórz listę części

- W bibliotece wskaż {{ui:Lista części}}: każda część standardowa i profil stalowy w rysunku, pogrupowane według typu, normy, rozmiaru, długości i materiału, z ilością i numerami pozycji. {{ui:Pobierz CSV}} zapisuje ją do arkusza kalkulacyjnego.
- Aby ją narysować, wpisz {{cmd:PARTSLIST}} (`PLIST`), wskaż lewy górny narożnik tabeli i naciśnij {{key:Enter}}, aby przyjąć zwykłą wysokość tekstu, albo wpisz inną.

Lista jest odczytywana z atrybutów bloków, więc nadal jest poprawna po zapisaniu rysunku jako DWG lub DXF i ponownym otwarciu.

## Częste błędy

- **„Nie ma profilu stalowego o nazwie …”**: wpisz rozmiar tak, jak podaje go karta {{ui:Standardowy}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Element jest na karcie 3D, a nie w rzucie.** {{cmd:STEELMEMBER}} tworzy bryłę; otwórz kartę 3D, aby ją zobaczyć. Aby stal była widoczna w rzucie, umieść także {{ui:Przekrój}} lub {{ui:Wysokość nad poziomem}}.
- **Długość poza zakresem.** Śruba musi być dłuższa od swojego łba, a wpust dłuższy niż szeroki. Wiersz pod kartami podaje, która wartość została odrzucona.
