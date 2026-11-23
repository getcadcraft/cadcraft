---
title: Jednostki, formaty papieru i skale
summary: Co oznaczają jednostki rysunku w CadCraft, formaty papieru dla arkuszy i wydruków, każda standardowa skala oraz jak wielkości tekstu i wymiarów odnoszą się do skali wydruku.
keywords: jednostki, milimetry, cale, stopy, stopy i cale, architektoniczne, inżynierskie, ułamkowe, ułamki, lunits, format długości, dokładność, metry, format papieru, a3, a1, arch d, ansi, tabloid, letter, skala, 1:100, 1/4 cala, skala architektoniczna, skala inżynierska, insunits
from: 7dc9b62e
---

## Jednostki rysunku

Rysujesz w pełnym rozmiarze, w jednostkach rysunku. To, co oznacza jedna jednostka, określa ustawienie **Jednostki** rysunku:

1. Naciśnij {{key:Esc}}, aby nic nie było zaznaczone, na karcie {{ui:Model}}.
2. W {{ui:Bieżące ustawienia}} wybierz {{ui:Jednostki}}: {{ui:Bez jednostek}}, {{ui:Milimetry}}, {{ui:Centymetry}}, {{ui:Metry}}, {{ui:Cale}} albo {{ui:Stopy}}.

Wymiary mogą zapisywać swoje długości w milimetrach, centymetrach, metrach lub kilometrach, niezależnie od jednostki rysunku: zobacz [Wymiary w mm, cm, m lub km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Zmiana jednostek niczego nie przeskalowuje. Zmienia to, jak odczytywane są skale na arkuszach i w wydrukach oraz które skale są proponowane. Rysunek otwarty z DWG lub DXF zachowuje jednostki zapisane w pliku; sekcja {{ui:Rysunek}} lewego panelu je pokazuje.

Rysunek {{ui:Bez jednostek}} traktowany jest jako mający jednostkę papieru: milimetry na papierze ISO, cale na papierze amerykańskim.

## Stopy i cale oraz ułamki

Sposób **zapisu i wpisywania** długości to osobne ustawienie, format długości. Nie zmienia żadnej geometrii, tylko wygląd liczb i to, co możesz wpisać.

1. Naciśnij {{key:Esc}}, aby nic nie było zaznaczone, na karcie {{ui:Model}}.
2. W {{ui:Bieżące ustawienia}} wybierz {{ui:Format długości}}: {{ui:Dziesiętny}} (`150.5`), {{ui:Architektoniczny}} (`12'-6 1/2"`), {{ui:Inżynierski}} (`12'-6.5"`), {{ui:Ułamkowy}} (`150 1/2`) albo {{ui:Naukowy}} (`1.505E+02`).
3. Wybierz {{ui:Dokładność}}: miejsca po przecinku albo najmniejszy ułamek (1/16 jest zwykłym wyborem dla architektury).

Albo wpisz {{cmd:UNITS}} (`UN`) i odpowiedz na jego dwa pytania.

Przy {{ui:Architektonicznym}} albo {{ui:Inżynierskim}} jedna jednostka rysunku to jeden cal, jak w AutoCAD: ustaw też {{ui:Jednostki}} na {{ui:Cale}}. Możesz wtedy wpisywać długości w stopach i calach wszędzie, gdzie pytany jest długość, i w polach {{ui:Właściwości}}:

| Wpisujesz | Oznacza |
|---|---|
| `12'6"` albo `12'-6"` | 12 stóp 6 cali (150) |
| `12'6-1/2"` | 12 stóp 6½ cala. Przed ułamkiem użyj myślnika: {{key:Space}} to {{key:Enter}} w wierszu poleceń. |
| `12'` | 12 stóp |
| `6"` albo `6` | 6 cali: liczba bez oznaczenia to cale |
| `1/2`, `6-1/2` | ułamki działają w każdym formacie |

Punkty przyjmują te same długości: `@12'6",0` albo `@10'<90`. Kąty pozostają w stopniach.

Format pokazuje się w historii ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: pola jako cale kwadratowe i stopy kwadratowe), we {{ui:Właściwościach}}, w współrzędnych w pasku stanu i w **nowych wymiarach**. Arkusze zachowują jednostki papieru (milimetry albo cale) jako liczby dziesiętne.

:::note
Format długości jest zapisywany w plikach DWG i DXF, a każdy wymiar zachowuje swój własny: zapisany rysunek otwiera się tak, jak go zostawiłeś.
:::

## Formaty papieru

Arkusze i wydruki modelu używają tych rozmiarów, w obu orientacjach:

| Papier | Rozmiar | Jednostka na arkuszu |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetry |
| ISO A3 | 420 × 297 mm | milimetry |
| ISO A2 | 594 × 420 mm | milimetry |
| ISO A1 | 841 × 594 mm | milimetry |
| ISO A0 | 1189 × 841 mm | milimetry |
| Letter | 11 × 8,5 cala | cale |
| Legal | 14 × 8,5 cala | cale |
| Tabloid / ANSI B | 17 × 11 cali | cale |
| ANSI C | 22 × 17 cali | cale |
| ANSI D | 34 × 22 cale | cale |
| ARCH C | 24 × 18 cali | cale |
| ARCH D | 36 × 24 cale | cale |
| ARCH E | 48 × 36 cali | cale |

Nowe arkusze startują na ISO A3 dla rysunków metrycznych i bez jednostek, a na Tabloid dla rysunków w calach albo stopach. Wydruki modelu startują na ISO A4 albo Letter w ten sam sposób, a potem pamiętają twój ostatni wybór. Arkusze z otwartych plików zachowują swój rozmiar, pokazywany jako „Własny”, gdy nie jest to jeden z powyższych.

## Skale

Skala `1:n` oznacza, że jedna jednostka na papierze pokazuje n takich samych jednostek w modelu, więc 1:100 pokazuje 1 m budynku jako 10 mm papieru. CadCraft wylicza to z jednostek rysunku i jednostki papieru.

**Skale metryczne**, proponowane dla każdego rysunku: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Skale architektoniczne**, proponowane, gdy jednostkami są cale albo stopy: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Skale inżynierskie**, proponowane, gdy jednostkami są cale albo stopy: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Własne skale.** Wpisz {{cmd:SCALELISTEDIT}} (albo `SCALELIST`), aby dodać własną skalę, na przykład 1:75 albo skalę terenu 2 papier : 300 rysunek. `Dodaj` pyta o nazwę, potem o jednostki papieru i jednostki rysunku (nazwa typu `1:75` podaje własne liczby; naciśnij {{key:Enter}}, aby je przyjąć). `Edytuj`, `Usuń`, `Lista` i `Resetuj` działają na tej samej liście; `Resetuj` wraca do standardowej listy. Twoje skale pojawiają się po standardowych na liście skal okienka widoku we Właściwościach i w oknie {{ui:Drukuj do PDF}}; okienko w tej skali jest opisane swoją nazwą, a skale są zapisywane w rysunku (DWG i DXF 2000) jako lista skal rysunku. Rysunek otwarty z innego programu przynosi swoją listę; skale, które odpowiadają standardowym, nie są pokazywane podwójnie.

Gdy okienko widoku jest ustawione przez {{ui:Pokaż cały model}} albo {{ui:Wskaż okno na modelu…}}, CadCraft wybiera największą standardową skalę, która się mieści. {{ui:Dopasuj cały model}} ustawia dokładną skalę, która czyta się jako zwykły stosunek.

## Rozmiary na papierze i w modelu

Wielkości tekstu i wymiarów są w jednostkach przestrzeni, w której rysujesz.

| Chcesz na papierze | Rysowane na arkuszu | Rysowane w modelu w 1:50 (rysunek w mm) | Rysowane w modelu w 1/4" = 1'-0" (rysunek w calach) |
|---|---|---|---|
| Tekst 2,5 mm | 2,5 | 125 | — |
| Tekst 3/32" | 0.09375 | — | 4.5 |

Dla wymiarów zachowaj rozmiary jako rozmiary papierowe i ustaw skalę ogólną ({{cmd:DIMSCALE}}) na skalę wydruku: 50 dla 1:50, 48 dla 1/4" = 1'-0". Zobacz [Ustaw rozmiary wymiarów](topic:dimension-settings).

## Adnotacje według skali

Rysuj model w pełnym rozmiarze i pozwól CadCraft wykonać za ciebie rachunki powyżej.

1. Zaznacz tekst albo wymiary, które mają zachować rozmiar na papierze. We Właściwościach zaznacz {{ui:Adnotacyjny}}. {{ui:Rozmiar na papierze}} pokazuje wtedy na przykład `2,5 mm przy 1:50`.
2. Wpisz {{cmd:ANNOSCALE}} i skalę, w jakiej rysunek będzie drukowany, na przykład `1:100`.

Każdy tekst i wymiar adnotacyjny jest przeskalowany tak, by drukował się w tym samym rozmiarze w nowej skali: tekst 2,5 mm ma wysokość 125 w rysunku milimetrowym w 1:50 i 250 w 1:100. Szerokość akapitu zmienia się razem z tym; tekst wymiaru, strzałki i odstępy zmieniają się razem (jego skala ogólna). To jeden krok cofnięcia, a obiekty nieadnotacyjne nigdy nie są zmieniane.

Ustawienie jest zapisywane w DWG i DXF: inne programy odczytują znacznik adnotacyjności, a CadCraft zachowuje też skalę, do której każdy obiekt jest dopasowany.

Jeśli twoje biuro ustawia wysokości papierowe w dodatku Domyślne zasady (Ustawienia › Globalne › Domyślne zasady › Rozmiary adnotacji na papierze), {{cmd:ANNOSCALE}} ustawia także wysokość, z jaką zaczyna się nowy tekst, na wysokość biura dla notatek w tej skali. Zobacz [Domyślne zasady](topic:default-policies).

### Jeden obiekt w kilku skalach

Arkusz często pokazuje ten sam plan w 1:100 i jego część w 1:50. Nadaj notatkom i wymiarom obie skale, a każde okienko pokaże je w ich rozmiarze papierowym:

1. Zaznacz tekst i wymiary adnotacyjne i wpisz `OBJECTSCALE`.
2. Wybierz `Dodaj` i wpisz skalę, na przykład `1:50`. (`Bieżąca skala` dodaje skalę adnotacji rysunku; `Lista` pokazuje, jakie skale ma każdy obiekt; `Usuń` jedną zdejmuje.)

Okienko, którego skala jest na liście obiektu, pokazuje go w rozmiarze dla tej skali: tekst 2,5 mm jest rysowany na wysokość 250 przez okienko 1:100 i 125 przez okienko 1:50, na ekranie i w wydruku. Obiekt zostaje tam, gdzie był; różni się tylko rozmiarem. W okienku o skali, której nie ma na liście obiektu, obiekt pokazuje się w rozmiarze, jaki ma, dopóki nie wpiszesz `ANNOALLVISIBLE` i nie wybierzesz `OFF`: wtedy zostaje pominięty. {{cmd:ANNOSCALE}} zmienia rozmiar obiektów, których lista zawiera nową skalę, a pozostałe zostawia bez zmian.

Listy są zapisywane w DWG i DXF jako własne dane CadCraft. Inny program widzi każdy obiekt jako adnotacyjny, w jednej skali, do której jest dopasowany. Przełącznik ANNOALLVISIBLE nie jest zachowywany w pliku.

## Grubości linii i typy linii

Warstwa albo obiekt może mieć **grubość linii** (od 0,05 do 2,11 mm) i **typ linii** (kreskowana, ukryta, osiowa, fantomowa, kropkowa…). Ustaw je w prawym panelu: gdy nic nie jest zaznaczone, {{ui:Typ linii}} i {{ui:Grubość linii}} w {{ui:Bieżące ustawienia}} to to, co dostają nowe obiekty ({{ui:Wg warstwy}}, aby podążały za warstwą), a dwa pod {{ui:Warstwa …}} to własne ustawienia bieżącej warstwy. Gdy obiekty są zaznaczone, te same dwa wiersze i {{ui:Skala typu linii}} zmieniają te obiekty. Polecenia to {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) i {{cmd:LTSCALE}} (`LTS`).

Typy linii są widoczne na ekranie i w wydrukach. Ich kreski są w jednostkach rysunku: rysunek metryczny używa rozmiarów ISO (DASHED: kreski po 12,7 mm), a rysunek w calach — cali (0,5"). Jeśli kreski wyglądają za mało albo za duże, zmień {{ui:Skalę typu linii}} rysunku (LTSCALE): każda kreska i przerwa jest przez nią mnożona; skala obiektu mnoży to jeszcze raz. Wzór zbyt drobny, by go zobaczyć, jest rysowany jako linia ciągła.

Grubości linii drukują się w wydrukach, w mm na papierze niezależnie od skali. Linie z grubością {{ui:Domyślna}} używają szerokości pióra wybranej w oknie {{ui:Drukuj do PDF}} (od 0,13 do 0,70 mm; na start 0,25 mm); grubość 0 drukuje się jako najcieńsza linia. Na ekranie każda linia ma szerokość jednego piksela, dopóki nie naciśniesz {{ui:LWT}} w pasku stanu (albo nie wpiszesz {{cmd:LWDISPLAY}}): wtedy grubość powyżej 0,25 mm rysuje się szerzej w modelu (0,5 mm = 2 piksele), a na arkuszu w swojej prawdziwej szerokości na papierze. Wybór jest zachowywany w tej przeglądarce.

## Standard biura

Biuro może trzymać wysokości tekstu na papierze, warstwy, pola bloku tytułowego i szablony w jednym zapisie: standardzie biura. CadCraft czyta go w tej kolejności: zapis własny rysunku (ustawiany przez {{cmd:OFFICESTANDARD}} › `Import`, zachowywany w pliku), wspólny standard twojego zespołu, a potem twoje Domyślne zasady. Adnotacyjne teksty i wymiary biorą z niego wysokość papierową w skali adnotacji. Pusty standard niczego nie zmienia. {{cmd:OFFICESTANDARD}} › `Layers` dodaje warstwy biura, których rysunek nie ma.
