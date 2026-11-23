---
title: Ustawienia CadCraft
summary: Ustawienia należące do aplikacji rysunkowej: rozmiar kursora, skąd zwisa wklejona kopia pod kursorem, co kliknięcie robi z zaznaczeniem, ile wierszy używa pasek narzędzi, gdzie stoi wiersz poleceń i jak jest wysoki, zwarty górny obszar oraz wskaźnik narożnika.
keywords: wiersz poleceń, pływający wiersz poleceń, unosić, zadokuj, jeden wiersz, f2, historia poleceń, commandline, cmdline, toparea, górny obszar, zwarty, cursorsize, krzyżyk pełnoekranowy, kursor pełnoekranowy, od krawędzi do krawędzi, wiersze paska narzędzi, wyświetlanie paska narzędzi, ctrl f1, ustawienia, preferencje, opcje, wskaźnik narożnika, kostka widoku, ikona osi, ikona ucs, kursor, krzyżyk, pole wyboru, punkt wklejenia, punkt bazowy, klikanie obiektów, zaznaczenie, pickadd, shift, resetuj
from: ae1a81db
---

Otwórz {{ui:Ustawienia}} kołem zębatym na pasku aplikacji albo {{key:Mod+,}}. Pierwsza karta, {{ui:CadCraft}}, zawiera ustawienia tej aplikacji; {{ui:Ogólne}} zawiera te, które dzielą wszystkie aplikacje z rodziny (motyw, rozmiar tekstu i szerokości paneli, wygląd i kolejność paska narzędzi). Ustawienia CadCraft istnieją tylko w aplikacji: zmieniasz je tutaj, a ta przeglądarka je pamięta. {{ui:Resetuj ustawienia CadCraft}} przywraca każde z nich do stanu początkowego.

## Kursor

**Mały**, **Średni** (na starcie), **Duży** albo **Pełny ekran**: rozmiar krzyżyka i pola wyboru w rysunku. Większe pole wyboru wybiera też obiekty z odrobinę dalszej odległości, co pomaga na ekranie dotykowym albo w bardzo drobnym rysunku.

**Pełny ekran** prowadzi dwie linie krzyżyka od krawędzi do krawędzi rysunku, także gdy żadne polecenie nie działa, abyś mógł sprawdzić wzrokiem, czy dwie rzeczy są w linii na całej długości widoku. Przy podzielonym widoku linie zostają w okienku, w którym pracujesz. To samo co {{cmd:CURSORSIZE}} 100 w AutoCAD: wpisz {{cmd:CURSORSIZE}} i 100 dla pełnego ekranu; mniejsza liczba wybiera najbliższy rozmiar (poniżej 5 — Mały, od 5 do 9 — Średni, od 10 do 99 — Duży).

## Punkt wklejenia

Skąd zwisa wklejona kopia pod kursorem po {{key:Mod+V}} ({{cmd:PASTECLIP}}), aż kliśniesz:

- **Lewy dolny narożnik** (na starcie): lewy dolny narożnik zasięgu skopiowanych obiektów, jak w AutoCAD.
- **Środek**: środek ich zasięgu. Wygodne do ustawienia symbolu na oko.

Kopia wykonana `COPYBASE` zawsze zwisa od wskazanego punktu bazowego. {{ui:Wklej w miejscu}} ({{key:Mod+Shift+V}}) ignoruje to ustawienie: zachowuje pierwotne współrzędne. Zobacz [Kopiuj, wklej i duplikuj](topic:copy-paste).

## Klikanie obiektów

Co kliknięcie w rysunku robi z zaznaczeniem, gdy nie działa żadne polecenie:

- **Dodaje do zaznaczenia** (na starcie): każde kliknięcie albo okno dodaje obiekty; {{key:Shift}}+kliknięcie albo {{key:Shift}}+okno je usuwa.
- **Zastępuje zaznaczenie**: kliknięcie albo okno zaznacza tylko to, co wskazało. {{key:Shift}}+kliknięcie dodaje obiekt albo usuwa ten, który już jest zaznaczony; {{key:Shift}}+okno dodaje.

Przy monicie `Wybierz obiekty:` wewnątrz polecenia kliknięcia zawsze dodają (a {{key:Shift}} usuwa), niezależnie od tego ustawienia. Zobacz [Wybierz obiekty](topic:select-objects).

## Klikanie pustego miejsca

Co robi kliknięcie w miejscu bez obiektu, gdy nie działa żadne polecenie. Oba sposoby zaczynają okno zaznaczania (drugie kliknięcie je kończy).

- **Czyści zaznaczenie** (na starcie): to, co było zaznaczone, zostaje zwolnione. Przytrzymaj {{key:Shift}} podczas kliknięcia, aby to zachować.
- **Zachowuje zaznaczenie**: zaznaczenie zostaje, jak w innych programach do rysowania; okno do niego dodaje. Naciśnij {{key:Esc}}, aby wyczyścić zaznaczenie.

## Przeciąganie, aby zaznaczyć

Co robi naciśnięcie i przeciągnięcie na pustym miejscu:

- **Lasso** (na starcie): swobodny kontur. Ruch najpierw w prawo zaznacza to, co leży w nim w całości, najpierw w lewo — to, czego dotyka. {{key:Space}} podczas przeciągania przełącza między oknem, przecięciem i płotem.
- **Prostokąt**: pudełko, jak to rysuje kliknięcie i drugie kliknięcie.

{{cmd:LASSOMODE}} `1` albo `0` ustawia to samo. Zobacz [Zaznaczanie lassem](topic:lasso-selection).

## Przeciąganie, aby przyciąć i wydłużyć

Co robi naciśnięcie na pustym miejscu i przeciągnięcie w {{cmd:TRIM}} i {{cmd:EXTEND}}:

- **Ścieżka** (na starcie): swobodna ścieżka; każdy kawałek, który przecina, jest przycinany (albo wydłużany).
- **Okno**: pudełko; każdy kawałek, którego dotyka, jest przycinany, tak jak robi opcja `C`.

Zobacz [Przytnij i wydłuż](topic:trim-and-extend).

## Położenie paska narzędzi

{{ui:CadCraft}} › {{ui:Położenie paska narzędzi}}: **Góra** (na starcie, jak zawsze), **Dół**, **Lewa** albo **Prawa**. Po lewej lub prawej grupy narzędzi układają się w kolumnę, która się przewija, gdy jest wyższa niż okno, a przyciski zawijają się po dwa albo trzy w wierszu. Wybór jest zapisywany z twoimi ustawieniami, a {{cmd:TOOLBARDOCK}} (`TBDOCK`) ustawia go z wiersza poleceń. {{ui:Ogólne}} › {{ui:Resetuj układ}} wraca pasek na górę.

Paski stylów menu siedzą w pasku narzędzi i przesuwają się z nim, ale styl {{ui:Wstążka}} ma biec wzdłuż góry lub dołu: z boku dostaje wąską kolumnę, która się przewija. Na telefonie pasek narzędzi zostaje tam, gdzie ustawia go układ telefonu.

## Wiersze paska narzędzi

Ile wierszy zajmują narzędzia nad rysunkiem, w pasku narzędzi CadCraft i w stylach {{ui:Klasyczne rysowanie}} oraz {{ui:Wstążka}}:

- **Zawijaj do miejsca** (na starcie): narzędzia zawijają się do szerokości okna.
- **2 wiersze**: najwyżej dwa wiersze. Gdy narzędzia zawijają się do dwóch wierszy albo mniej przy tej szerokości, po prostu się zawijają; w przeciwnym razie układają się w dwóch wierszach, które przewijają się w bok.
- **1 wiersz**: jeden wiersz przewijany w bok, co daje rysunkowi najwięcej miejsca.

{{key:Shift+Ctrl+F1}} przechodzi przez te trzy, a {{cmd:TOOLBARROWS}} ustawia jeden z nich. To, co pokazują przyciski (ikony i tekst, same ikony albo sam tekst), jest ustawieniem {{ui:Ogólne}} › {{ui:Pasek narzędzi}}; {{key:Ctrl+F1}} przechodzi przez nie, a {{cmd:TOOLBAR}} ustawia.

## Wiersz poleceń

Wiersz poleceń może zostać przy dolnej krawędzi rysunku, jak zawsze, albo unosić się nad nim, i może być tak cienki jak jeden wiersz.

- **Oderwij go.** Przeciągnij uchwyt przy jego lewym końcu do rysunku albo wybierz {{ui:Unosi się nad rysunkiem}} w jego menu {{ui:Opcje wiersza poleceń}} (trzy kropki przy prawym końcu). Przeciągnij uchwyt ponownie, aby go przenieść; jego miejsce zostaje zachowane, gdy zmienia się rozmiar okna. Przeciągnij jego prawą krawędź, aby go poszerzyć lub zwęzić. Upuść go na pasku stanu albo wybierz {{ui:Zadokuj na dole}}, aby go z powrotem przycumować.
- **Zrób go cieńszym albo wyższym.** Przeciągnij jego górną krawędź: każdy krok to jeden wiersz historii. Do zera wierszy staje się **wiersz poleceń o jednym wierszu**: tylko monit i to, co wpisujesz, a nowa wiadomość pojawia się nad nim na chwilę. Podwójne kliknięcie górnej krawędzi przełącza między jednym wierszem a wysokością, jaką miał.
- **Historia.** {{key:F2}} albo przycisk zegara na wierszu poleceń ({{ui:Historia poleceń (F2)}}) otwiera całą historię nad wierszem (pod nim, gdy wiersz unosi się blisko góry okna). Pisanie nadal trafia do wiersza poleceń; {{key:PageUp}} i {{key:PageDown}} przewijają historię, a {{key:Esc}}, {{key:F2}} albo kliknięcie gdziekolwiek indziej ją zamykają. Twój własny klawisz na F2 ma pierwszeństwo.
- **Z klawiatury.** Uchwyt jest przyciskiem: gdy ma fokus, klawisze strzałek przesuwają unoszący się wiersz poleceń (z {{key:Shift}} w większych krokach); {{key:Up}} oderwie zadokowany, a {{key:Down}} na dolnej krawędzi go zadokuje. Górna krawędź jest separatorem: {{key:Up}} i {{key:Down}} dodają albo odejmują wiersz, {{key:Home}} robi z niego jeden wiersz, {{key:End}} najwyższy. Czytniki ekranu słyszą każdy komunikat, także w wierszu o jednym wierszu.

{{ui:CadCraft}} › {{ui:Wiersz poleceń}} ma te same wybory: {{ui:Zadokowany na dole}} albo {{ui:Unoszony}}, {{ui:Wyświetlane wiersze historii}} (od 0 do 12) i {{ui:Standardowa wysokość}}. {{cmd:COMMANDLINE}} (`CMDLINE`) ustawia je z wiersza poleceń. Miejsce i wysokość są zachowywane dla CadCraft w tej przeglądarce razem z resztą układu, więc zapisane środowisko pracy je przenosi; {{ui:Ogólne}} › {{ui:Resetuj układ}} zadokowuje wiersz poleceń z powrotem na standardową wysokość. Na telefonie wiersz poleceń zostaje zadokowany z jednym wierszem historii; przycisk historii działa tam także.

{{ui:CadCraft}} › {{ui:Litery opcji}} zachowuje litery, które wybrałeś dla opcji poleceń: {{ui:Edytuj…}} otwiera plik, {{ui:Importuj…}} zastępuje go wybranym przez ciebie plikiem, a {{ui:Eksportuj}} zapisuje. Zobacz [Nadaj opcjom poleceń własne litery](topic:option-letters).

Gdy okno jest niskie, a kontrola układu proponuje ciaśniejszy układ, jej {{ui:Tak}} także zmienia wiersz poleceń na jeden wiersz, jeśli rysunek nadal jest za krótki po paskach narzędzi.

## Górny obszar

{{ui:CadCraft}} › {{ui:Górny obszar}}: **Standardowy** (na starcie) albo **Zwarty**. Zwarty zachowuje paski nad rysunkiem małe we wszystkich stylach menu: nazwy grup i napisy pod ikonami znikają (podpowiedzi i czytniki ekranu nadal je mają), a przyciski są ciaśniejsze. Działa razem z [Wiersze paska narzędzi](topic:settings#toolbar-rows): Zwarty i **1 wiersz** dają rysunkowi najwięcej miejsca. {{cmd:TOPAREA}} to ustawia.

## Wskaźnik narożnika

Co siedzi w narożniku rysunku:

- **Automatycznie** (na starcie): ikona osi na karcie {{ui:Model}} i kostka widoku na karcie {{ui:3D}}.
- **Ikona osi**: znacznik X i Y w lewym dolnym rogu karty {{ui:Model}}, a na karcie 3D mały znacznik X, Y i Z.
- **Kostka widoku**: sześcian w prawym górnym rogu obu kart. Na karcie {{ui:Model}} pokazuje rysunek z góry, a kliknięcie innej ściany, krawędzi albo narożnika otwiera kartę {{ui:3D}} patrzącą stamtąd. Na karcie 3D obraca się z widokiem: kliknij, aby patrzeć z boku, przeciągnij, aby orbitować, a dom wraca do widoku izometrycznego. Zobacz [Model w 3D](topic:3d-solids).
- **Brak**: nic w narożniku.

Arkusze nie pokazują żadnego z nich.

## Długość i pole zaznaczenia

- **W pasku stanu** (na starcie): gdy obiekty są zaznaczone, pasek stanu pokazuje ich łączną długość i łączne pole zamkniętych. Zobacz [Sumy zaznaczenia](topic:properties-panel#totals-of-a-selection).
- **Ukryte**: pasek stanu je pomija. Właściwości nadal je pokazują dla kilku obiektów.

## Siatka, orto i przyciąganie

Tych nie ma w oknie ustawień: przyciski {{ui:Siatka}}, {{ui:Orto}} i {{ui:Przyciąganie}} w pasku stanu (albo {{key:F7}}, {{key:F8}}, {{key:F3}}) oraz lista przyciągania do obiektów obok nich są zapamiętywane, gdy je zmieniasz. Zobacz [Przyciąganie do punktów na obiektach](topic:object-snaps).
