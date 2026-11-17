---
title: Ustawienia CadCraft
summary: Ustawienia należące do aplikacji rysunkowej: rozmiar kursora, miejsce, w którym wklejona kopia wisi przy kursorze, co kliknięcie robi z zaznaczeniem, ile wierszy zajmuje pasek narzędzi, gdzie stoi wiersz poleceń i jak jest wysoki, zwarty górny obszar oraz wskaźnik w rogu.
keywords: wiersz poleceń, unoszący się wiersz poleceń, unoszenie, zadokowanie, jedna linia, f2, historia poleceń, commandline, cmdline, toparea, górny obszar, zwarty, cursorsize, kursor pełnoekranowy, krzyżyk pełnoekranowy, od krawędzi do krawędzi, wiersze paska narzędzi, wyświetlanie paska narzędzi, ctrl f1, ustawienia, preferencje, opcje, wskaźnik w rogu, kostka widoku, ikona osi, ikona ucs, kursor, krzyżyk, pole wyboru, punkt wklejenia, punkt bazowy, klikanie obiektów, zaznaczenie, pickadd, shift, resetuj
from: 0896eb42
---

Otwórz {{ui:Ustawienia}} kołem zębatym na pasku aplikacji albo {{key:Mod+,}}. Pierwsza karta, {{ui:CadCraft}}, zawiera ustawienia należące do tej aplikacji; {{ui:Ogólne}} zawiera te, które współdzielą wszystkie aplikacje z rodziny (motyw, rozmiar tekstu i szerokości paneli, wygląd i kolejność paska narzędzi). Ustawienia CadCraft istnieją tylko w aplikacji: zmieniasz je tutaj, a ta przeglądarka je zapamiętuje. {{ui:Resetuj ustawienia CadCraft}} przywraca każde z nich do wartości początkowych.

## Kursor

**Mały**, **Średni** (na starcie), **Duży** lub **Pełny ekran**: rozmiar krzyżyka i pola wyboru w rysunku. Większe pole wyboru wybiera też obiekty z nieco większej odległości, co pomaga na ekranie dotykowym lub w bardzo drobnym rysunku.

**Pełny ekran** rysuje dwie linie krzyżyka od krawędzi do krawędzi rysunku, także gdy nie działa żadne polecenie, abyś mógł sprawdzić wzrokiem, czy dwie rzeczy są w linii na całym widoku. Przy podzielonym widoku linie zostają w panelu, w którym pracujesz. To to samo co `CURSORSIZE` 100 w AutoCAD: wpisz {{cmd:CURSORSIZE}} i 100 dla pełnego ekranu; mniejsza liczba wybiera najbliższy rozmiar (poniżej 5 Mały, od 5 do 9 Średni, od 10 do 99 Duży).

## Punkt wklejenia

Gdzie wklejona kopia wisi przy kursorze po {{key:Mod+V}} ({{cmd:PASTECLIP}}), aż klikniesz:

- **Lewy dolny róg** (na starcie): lewy dolny róg zasięgu kopiowanych obiektów, jak w AutoCAD.
- **Środek**: środek ich zasięgu. Wygodne do ustawiania symbolu na oko.

Kopia wykonana poleceniem `COPYBASE` zawsze wisi od wskazanego punktu bazowego. {{ui:Wklej w miejscu}} ({{key:Mod+Shift+V}}) ignoruje to ustawienie: zachowuje oryginalne współrzędne. Zobacz [Kopiowanie, wklejanie i duplikowanie](topic:copy-paste).

## Klikanie obiektów

Co kliknięcie w rysunek robi z zaznaczeniem, gdy nie działa żadne polecenie:

- **Dodaje do zaznaczenia** (na starcie): każde kliknięcie albo okno dodaje obiekty; {{key:Shift}}+kliknięcie albo {{key:Shift}}+okno je usuwa z zaznaczenia.
- **Zastępuje zaznaczenie**: kliknięcie lub okno zaznacza tylko to, co wybrało. {{key:Shift}}+kliknięcie dodaje obiekt albo usuwa z zaznaczenia ten, który już jest zaznaczony; {{key:Shift}}+okno dodaje.

Przy monicie `Wybierz obiekty:` wewnątrz polecenia kliknięcia zawsze dodają (a {{key:Shift}} usuwa), niezależnie od tego ustawienia. Zobacz [Zaznaczanie obiektów](topic:select-objects).

## Kliknięcie w pusty punkt

Co robi kliknięcie w miejsce bez obiektu, gdy nie działa żadne polecenie. W obu przypadkach zaczyna okno zaznaczania (drugie kliknięcie je kończy).

- **Czyści zaznaczenie** (na starcie): to, co było zaznaczone, zostaje zwolnione. Przytrzymaj {{key:Shift}} podczas kliknięcia, aby je zachować.
- **Zachowuje zaznaczenie**: zaznaczenie zostaje, jak w innych programach do rysowania; okno do niego dodaje. Naciśnij {{key:Esc}}, aby wyczyścić zaznaczenie.

## Przeciąganie, aby zaznaczyć

Co robi naciśnięcie i przeciągnięcie na pustym miejscu:

- **Lasso** (na starcie): swobodny kontur. Ruch najpierw w prawo zaznacza to, co leży w całości wewnątrz; najpierw w lewo — to, czego kontur dotyka. {{key:Space}} podczas przeciągania przełącza między oknem, przecięciem i płotem.
- **Prostokąt**: pudełko, tak jak rysują je kliknięcie i drugie kliknięcie.

{{cmd:LASSOMODE}} `1` lub `0` ustawia to samo. Zobacz [Zaznaczanie lassem](topic:lasso-selection).

## Przeciąganie, aby przyciąć i wydłużyć

Co robi naciśnięcie na pustym miejscu i przeciągnięcie w {{cmd:TRIM}} i {{cmd:EXTEND}}:

- **Ścieżka** (na starcie): swobodna ścieżka; każdy fragment, który przecina, zostaje przycięty (lub wydłużony).
- **Okno**: pudełko; każdy fragment, którego dotyka, zostaje przycięty, jak robi to opcja `C`.

Zobacz [Przycinanie i wydłużanie](topic:trim-and-extend).

## Położenie paska narzędzi

{{ui:CadCraft}} › {{ui:Położenie paska narzędzi}}: **Góra** (na starcie, jak zawsze), **Dół**, **Lewa** lub **Prawa**. Po lewej lub po prawej grupy narzędzi układają się w kolumnę, która przewija się, gdy jest wyższa niż okno, a przyciski zawijają się po dwa lub trzy w wierszu. Wybór jest zapisywany z Twoimi ustawieniami, a {{cmd:TOOLBARDOCK}} (`TBDOCK`) ustawia go z wiersza poleceń. {{ui:Ogólne}} › {{ui:Resetuj układ}} przywraca pasek narzędzi na górę.

Paski stylów menu znajdują się w pasku narzędzi i przesuwają się razem z nim, ale styl {{ui:Wstążka}} jest zrobiony tak, by biec po górze lub dole: z boku dostaje wąską kolumnę, która się przewija. Na telefonie pasek narzędzi zostaje tam, gdzie umieszcza go układ telefonu.

## Wiersze paska narzędzi

Ile wierszy zajmują narzędzia nad rysunkiem, w pasku narzędzi CadCraft oraz w stylach {{ui:Klasyczne rysowanie}} i {{ui:Wstążka}}:

- **Zawijaj do szerokości** (na starcie): narzędzia zawijają się do szerokości okna.
- **2 wiersze**: co najwyżej dwa wiersze. Gdy narzędzia zawijają się do dwóch wierszy lub mniej przy tej szerokości, po prostu się zawijają; w przeciwnym razie układają się w dwóch wierszach, które przewijają się w bok.
- **1 wiersz**: jeden wiersz, który przewija się w bok, co zostawia rysunkowi najwięcej miejsca.

{{key:Shift+Ctrl+F1}} przełącza między trzema, a {{cmd:TOOLBARROWS}} ustawia jeden z nich. To, co pokazują przyciski (ikony i tekst, same ikony albo sam tekst), jest ustawieniem {{ui:Ogólne}} › {{ui:Pasek narzędzi}}; {{key:Ctrl+F1}} przełącza je, a {{cmd:TOOLBAR}} ustawia.

## Wiersz poleceń

Wiersz poleceń może zostać zadokowany pod rysunkiem, jak zawsze, albo unosić się nad nim, i może być tak cienki jak jedna linia.

- **Unieś go.** Przeciągnij uchwyt po lewej stronie w głąb rysunku albo wybierz {{ui:Unosi się nad rysunkiem}} w jego menu {{ui:Opcje wiersza poleceń}} (trzy kropki po prawej stronie). Przeciągnij uchwyt ponownie, aby go przesunąć; jego miejsce zostaje zachowane, gdy zmienia się rozmiar okna. Przeciągnij jego prawą krawędź, aby poszerzyć lub zwęzić. Upuść go na pasek stanu albo wybierz {{ui:Zadokuj na dole}}, aby go ponownie zadokować.
- **Zmniejsz lub powiększ wysokość.** Przeciągnij jego górną krawędź: każdy krok to jedna linia historii. Do zera linii staje się **jednowierszowym wierszem poleceń**: tylko monit i to, co wpisujesz; nowy komunikat pojawia się nad nim na chwilę. Podwójne kliknięcie górnej krawędzi przełącza między jedną linią a wysokością, jaką miałeś.
- **Historia.** {{key:F2}} albo przycisk zegara na wierszu poleceń ({{ui:Historia poleceń (F2)}}) otwiera całą historię nad wierszem (pod nim, gdy wiersz unosi się blisko górnej części okna). Pisanie nadal trafia do wiersza poleceń; {{key:PageUp}} i {{key:PageDown}} przewijają historię, a {{key:Esc}}, {{key:F2}} albo kliknięcie gdzie indziej ją zamykają. Twój własny klawisz przypisany do F2 ma pierwszeństwo.
- **Z klawiatury.** Uchwyt jest przyciskiem: gdy ma fokus, klawisze strzałek przesuwają unoszący się wiersz poleceń (z {{key:Shift}} w większych krokach); {{key:Up}} unosi zadokowany, a {{key:Down}} przy dolnej krawędzi go dokuje. Górna krawędź jest separatorem: {{key:Up}} i {{key:Down}} dodają albo odejmują linię, {{key:Home}} ustawia jedną linię, {{key:End}} najwyższą. Czytniki ekranu nadal odczytują każdy komunikat, także w jednowierszowym wierszu poleceń.

{{ui:CadCraft}} › {{ui:Wiersz poleceń}} ma te same wybory: {{ui:Zadokowany na dole}} lub {{ui:Unoszony}}, {{ui:Wyświetlane wiersze historii}} (od 0 do 12) i {{ui:Standardowa wysokość}}. {{cmd:COMMANDLINE}} (`CMDLINE`) ustawia je z wiersza poleceń. Miejsce i wysokość są zachowywane dla CadCraft w tej przeglądarce wraz z resztą układu, więc zapisane środowisko pracy je przenosi; {{ui:Ogólne}} › {{ui:Resetuj układ}} ponownie zadokowuje wiersz poleceń o standardowej wysokości. Na telefonie wiersz poleceń pozostaje zadokowany z jedną linią historii; przycisk historii działa tam także.

Gdy okno jest niskie, a kontrola układu proponuje ciaśniejszy układ, jej przycisk {{ui:Tak}} zamienia też wiersz poleceń na jedną linię, jeśli rysunek nadal jest za krótki po paskach narzędzi.

## Górny obszar

{{ui:CadCraft}} › {{ui:Górny obszar}}: **Standardowy** (na starcie) albo **Zwarty**. Zwarty utrzymuje paski nad rysunkiem małe we wszystkich stylach menu: znikają nazwy grup i słowa pod ikonami (podpowiedzi i czytniki ekranu nadal je mają), a przyciski są ciaśniejsze. Działa razem z [Wierszami paska narzędzi](topic:settings#toolbar-rows): Zwarty i **1 wiersz** dają rysunkowi najwięcej miejsca. Ustawia to {{cmd:TOPAREA}}.

## Wskaźnik w rogu

Co znajduje się w rogu rysunku:

- **Automatycznie** (na starcie): ikona osi na karcie {{ui:Model}} i kostka widoku na karcie {{ui:3D}}.
- **Ikona osi**: znacznik X i Y w lewym dolnym rogu karty {{ui:Model}}, a na karcie {{ui:3D}} mały znacznik X, Y i Z.
- **Kostka widoku**: sześcian w prawym górnym rogu obu kart. Na karcie {{ui:Model}} pokazuje rysunek z góry, a kliknięcie innej ściany, krawędzi lub narożnika otwiera kartę {{ui:3D}} patrzącą z tego miejsca. Na karcie 3D obraca się z widokiem: kliknij, aby patrzeć z boku, przeciągnij, aby obracać, a ikona domku wraca do widoku izometrycznego. Zobacz [Model w 3D](topic:3d-solids).
- **Brak**: nic w rogu.

Arkusze nie pokazują żadnego z nich.

## Długość i pole zaznaczenia

- **Na pasku stanu** (na starcie): gdy obiekty są zaznaczone, pasek stanu pokazuje ich łączną długość i łączne pole zamkniętych. Zobacz [Sumy zaznaczenia](topic:properties-panel#totals-of-a-selection).
- **Ukryte**: pasek stanu je pomija. Właściwości nadal je pokazują dla kilku obiektów.

## Siatka, orto i przyciąganie

Tych ustawień nie ma w oknie dialogowym: przyciski {{ui:Siatka}}, {{ui:Orto}} i {{ui:Przyciąganie}} na pasku stanu (albo {{key:F7}}, {{key:F8}}, {{key:F3}}) oraz lista przyciągań obiektów obok nich są zapamiętywane po ich zmianie. Zobacz [Przyciąganie do punktów na obiektach](topic:object-snaps).
