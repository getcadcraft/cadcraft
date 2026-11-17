---
title: Jednostki, rozmiary papieru i skale
summary: Co oznaczają jednostki rysunku w CadCraft, rozmiary papieru dla arkuszy i wydruków, wszystkie standardowe skale oraz jak rozmiary tekstu i wymiarów odnoszą się do skali wydruku.
keywords: jednostki, milimetry, cale, stopy, stopy i cale, architektoniczne, inżynierskie, ułamkowe, ułamki, lunits, format długości, dokładność, metry, rozmiar papieru, a3, a1, arch d, ansi, tabloid, letter, skala, 1:100, 1/4 cala, skala architektoniczna, skala inżynierska, insunits
from: 8346236a
---

## Jednostki rysunku

Rysujesz w pełnym rozmiarze, w jednostkach rysunku. To, co oznacza jedna jednostka, określa ustawienie rysunku **Jednostki**:

1. Naciśnij {{key:Esc}}, aby nic nie było zaznaczone, na karcie {{ui:Model}}.
2. W {{ui:Bieżące ustawienia}} wybierz {{ui:Jednostki}}: {{ui:Bez jednostek}}, {{ui:Milimetry}}, {{ui:Centymetry}}, {{ui:Metry}}, {{ui:Cale}} lub {{ui:Stopy}}.

Wymiary mogą zapisywać długości w milimetrach, centymetrach, metrach lub kilometrach, niezależnie od jednostki rysunku: zobacz [Wymiary w mm, cm, m lub km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Zmiana jednostek niczego nie przeskalowuje. Zmienia tylko sposób odczytu skal na arkuszach i w wydrukach oraz to, które skale są oferowane. Rysunek otwarty z DWG lub DXF zachowuje jednostki zapisane w pliku; sekcja {{ui:Rysunek}} w lewym panelu je pokazuje.

Rysunek {{ui:Bez jednostek}} jest traktowany jako mający jednostkę papieru: milimetry na papierze ISO, cale na papierze amerykańskim.

## Stopy i cale oraz ułamki

Sposób **zapisywania i wpisywania** długości to osobne ustawienie: format długości. Nie zmienia geometrii, tylko to, jak liczby wyglądają i co można wpisać.

1. Naciśnij {{key:Esc}}, aby nic nie było zaznaczone, na karcie {{ui:Model}}.
2. W {{ui:Bieżące ustawienia}} wybierz {{ui:Format długości}}: {{ui:Dziesiętny}} (`150.5`), {{ui:Architektoniczny}} (`12'-6 1/2"`), {{ui:Inżynierski}} (`12'-6.5"`), {{ui:Ułamkowy}} (`150 1/2`) lub {{ui:Naukowy}} (`1.505E+02`).
3. Wybierz {{ui:Dokładność}}: miejsca dziesiętne albo najmniejszy ułamek (1/16 to typowy wybór dla architektury).

Albo wpisz {{cmd:UNITS}} (`UN`) i odpowiedz na jego dwa pytania.

Przy {{ui:Architektoniczny}} lub {{ui:Inżynierski}} jedna jednostka rysunku to jeden cal, jak w AutoCAD: ustaw też {{ui:Jednostki}} na {{ui:Cale}}. Możesz wtedy wpisywać długości w stopach i calach wszędzie tam, gdzie pytany jest długość, oraz w polach {{ui:Właściwości}}:

| Wpisujesz | Oznacza |
|---|---|
| `12'6"` lub `12'-6"` | 12 stóp 6 cali (150) |
| `12'6-1/2"` | 12 stóp 6½ cala. Przed ułamkiem użyj myślnika: {{key:Space}} to {{key:Enter}} w wierszu poleceń. |
| `12'` | 12 stóp |
| `6"` lub `6` | 6 cali: zwykła liczba to cale |
| `1/2`, `6-1/2` | ułamki działają w każdym formacie |

Punkty przyjmują te same długości: `@12'6",0` albo `@10'<90`. Kąty pozostają w stopniach.

Format pokazuje się w historii ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: pola w calach kwadratowych i stopach kwadratowych), we {{ui:Właściwościach}}, we współrzędnych na pasku stanu i w **nowych wymiarach**. Arkusze zachowują swoje jednostki papieru (milimetry lub cale) jako liczby dziesiętne.

:::note
Format długości zapisuje się w plikach DWG i DXF, a każdy wymiar zachowuje swój własny: zapisany rysunek otwiera się ponownie tak, jak go zostawiłeś.
:::

## Rozmiary papieru

Arkusze i wydruki modelu używają tych rozmiarów, w obu orientacjach:

| Papier | Rozmiar | Jednostka na arkuszu |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetry |
| ISO A3 | 420 × 297 mm | milimetry |
| ISO A2 | 594 × 420 mm | milimetry |
| ISO A1 | 841 × 594 mm | milimetry |
| ISO A0 | 1189 × 841 mm | milimetry |
| Letter | 11 × 8.5 in | cale |
| Legal | 14 × 8.5 in | cale |
| Tabloid / ANSI B | 17 × 11 in | cale |
| ANSI C | 22 × 17 in | cale |
| ANSI D | 34 × 22 in | cale |
| ARCH C | 24 × 18 in | cale |
| ARCH D | 36 × 24 in | cale |
| ARCH E | 48 × 36 in | cale |

Nowe arkusze zaczynają od ISO A3 dla rysunków metrycznych i bez jednostek, a od Tabloid dla rysunków w calach lub stopach. Wydruki modelu zaczynają od ISO A4 albo Letter w ten sam sposób, a potem zapamiętują Twój ostatni wybór. Arkusze z otwartych plików zachowują swój rozmiar, pokazywany jako „Niestandardowy”, gdy nie ma go na tej liście.

## Skale

Skala `1:n` oznacza, że jedna jednostka na papierze pokazuje n tych samych jednostek w modelu, więc 1:100 pokazuje 1 m budynku jako 10 mm papieru. CadCraft wylicza to z jednostek rysunku i jednostki papieru.

**Skale metryczne**, oferowane dla każdego rysunku: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Skale architektoniczne**, oferowane, gdy jednostkami są cale lub stopy: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Skale inżynierskie**, oferowane, gdy jednostkami są cale lub stopy: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Własne skale.** Wpisz `SCALELISTEDIT` (albo `SCALELIST`), aby dodać własną skalę, na przykład 1:75 albo skalę terenową 2 jednostki papieru : 300 jednostek rysunku. `Dodaj (A)` pyta o nazwę, potem o jednostki papieru i jednostki rysunku (nazwa taka jak `1:75` proponuje własne liczby; naciśnij {{key:Enter}}, aby je przyjąć). `Edytuj (E)`, `Usuń (D)`, `Lista (L)` i `Resetuj (R)` działają na tej samej liście; `Resetuj` wraca do standardowej listy. Twoje skale pojawiają się za standardowymi na liście skal okna widokowego we Właściwościach oraz w oknie {{ui:Drukuj do PDF}}; okno widokowe w tej skali odczytuje się z jej nazwą. Są zapisywane w rysunku (DWG i DXF 2000) jako lista skal rysunku. Rysunek otwarty z innego programu przynosi swoją listę; skale, które odpowiadają standardowym, nie są pokazywane dwa razy.

Gdy okno widokowe jest ustawiane poleceniem {{ui:Pokaż cały model}} albo {{ui:Wskaż okno na modelu…}}, CadCraft wybiera największą standardową skalę, która się mieści. {{ui:Dopasuj cały model}} ustawia zamiast tego dokładną skalę, która wygląda jak zwykła proporcja.

## Rozmiary na papierze i w modelu

Rozmiary tekstu i wymiarów są w jednostkach przestrzeni, w której rysujesz.

| Chcesz na papierze | Narysowane na arkuszu | Narysowane w modelu w 1:50 (rysunek w mm) | Narysowane w modelu w 1/4" = 1'-0" (rysunek w calach) |
|---|---|---|---|
| tekst 2.5 mm | 2.5 | 125 | — |
| tekst 3/32" | 0.09375 | — | 4.5 |

Dla wymiarów zachowaj rozmiary jako rozmiary papieru i ustaw ogólną skalę ({{cmd:DIMSCALE}}) na skalę wydruku: 50 dla 1:50, 48 dla 1/4" = 1'-0". Zobacz [Ustawianie rozmiarów wymiarów](topic:dimension-settings).

## Adnotacje według skali

Rysuj model w pełnym rozmiarze i pozwól CadCraft wykonać za Ciebie obliczenia opisane wyżej.

1. Zaznacz tekst lub wymiary, które mają zachować swój rozmiar na papierze. We Właściwościach zaznacz {{ui:Adnotacyjny}}. {{ui:Rozmiar na papierze}} pokaże wtedy na przykład `2.5 mm przy 1:50`.
2. Wpisz {{cmd:ANNOSCALE}} i skalę, w jakiej rysunek będzie drukowany, na przykład `1:100`.

Każdy tekst i wymiar adnotacyjny jest tak przeskalowany, aby wydrukował się w tym samym rozmiarze w nowej skali: tekst 2.5 mm ma wysokość 125 w rysunku w milimetrach przy 1:50 i 250 przy 1:100. Szerokość akapitu zmienia się razem z nim; tekst wymiaru, groty i odstępy zmieniają się razem (jego skala ogólna). To jeden krok cofnięcia, a obiekty nieadnotacyjne nigdy nie są zmieniane.

Ustawienie jest zapisywane w DWG i DXF: inne programy odczytują flagę adnotacyjności, a CadCraft zachowuje też skalę, do której każdy obiekt jest dopasowany.

Jeśli Twoje biuro ustawia wysokości papieru w dodatku Default Policies (Ustawienia › Globalne › Default Policies › Rozmiary adnotacji na papierze), {{cmd:ANNOSCALE}} ustawia też wysokość, od której zaczyna się nowy tekst, na wysokość biura dla notatek w tej skali. Zobacz [Default Policies](topic:default-policies).

### Jeden obiekt w kilku skalach

Arkusz często pokazuje ten sam plan w 1:100, a jego część w 1:50. Nadaj notatkom i wymiarom obie skale, a każde okno pokaże je w ich rozmiarze papieru:

1. Zaznacz tekst i wymiary adnotacyjne, a potem wpisz `OBJECTSCALE`.
2. Wybierz `Dodaj (A)` i wpisz skalę, na przykład `1:50`. (`Bieżąca skala (C)` dodaje skalę adnotacji rysunku; `Lista (L)` pokazuje, co każdy obiekt zachowuje; `Usuń (D)` zabiera jedną.)

Okno widokowe, którego skala jest na liście obiektu, pokazuje go w rozmiarze dla tej skali: tekst 2.5 mm jest rysowany jako 250 wysoki przez okno 1:100 i 125 wysoki przez okno 1:50, na ekranie i w wydruku. Obiekt zostaje tam, gdzie jest; różni się tylko rozmiar. W oknie w skali, której nie ma na liście obiektu, obiekt pokazuje się w rozmiarze, jaki ma, dopóki nie wpiszesz `ANNOALLVISIBLE` i nie wybierzesz `OFF`: wtedy jest tam pomijany. {{cmd:ANNOSCALE}} zmienia rozmiar obiektów, które zawierają nową skalę, a resztę zostawia bez zmian.

Listy są zapisywane w DWG i DXF jako własne dane CadCraft. Inny program widzi każdy obiekt jako adnotacyjny, w jednej skali, do której jest dopasowany. Przełącznik ANNOALLVISIBLE nie jest zachowywany w pliku.

## Grubości linii i typy linii

Warstwa lub obiekt może mieć **grubość linii** (od 0,05 do 2,11 mm) i **typ linii** (kreskowana, ukryta, osiowa, fantomowa, kropkowa…). Ustaw je w prawym panelu: gdy nic nie jest zaznaczone, {{ui:Typ linii}} i {{ui:Grubość linii}} w sekcji {{ui:Bieżące ustawienia}} to to, co dostają nowe obiekty ({{ui:Wg warstwy}}, aby podążały za swoją warstwą), a dwa pod {{ui:Warstwa …}} to własne ustawienia bieżącej warstwy. Gdy obiekty są zaznaczone, te same dwa wiersze oraz {{ui:Skala typu linii}} zmieniają te obiekty. Polecenia to {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) i {{cmd:LTSCALE}} (`LTS`).

Typy linii widać na ekranie i w wydrukach. Ich kreski są w jednostkach rysunku: rysunek metryczny używa rozmiarów ISO (DASHED: kreski 12,7 mm), a rysunek w calach — rozmiarów calowych (0.5"). Jeśli kreski wyglądają za małe lub za duże, zmień {{ui:Skala typu linii}} rysunku (LTSCALE): każda kreska i przerwa jest mnożona przez nią, a własna skala obiektu mnoży ją jeszcze raz. Wzór zbyt drobny, by go zobaczyć, jest rysowany jako linia ciągła.

Grubości linii drukują się w wydrukach, w mm na papierze, niezależnie od skali. Linie z domyślną grubością {{ui:Domyślna}} używają szerokości pióra wybranej w oknie {{ui:Drukuj do PDF}} (od 0,13 do 0,70 mm; na początku 0,25 mm); grubość 0 drukuje się jako najcieńsza linia. Na ekranie każda linia ma szerokość jednego piksela, dopóki nie naciśniesz {{ui:LWT}} na pasku stanu (albo nie wpiszesz {{cmd:LWDISPLAY}}): wtedy grubość powyżej 0,25 mm rysuje się szerzej (0,5 mm = 2 piksele) w modelu, a na arkuszu w swojej rzeczywistej szerokości na papierze. Wybór jest zapamiętywany w tej przeglądarce.
