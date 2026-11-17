---
title: Dokumenty i rewizje (repozytorium)
summary: Krok po kroku przez jedną prawdziwą pracę: wprowadzenie folderu projektu pod kontrolę, wypożyczenie rysunku, zmiana, zwrot z notatką, przegląd, zatwierdzenie i wydanie, historia i to, co z niego korzysta, co widzi druga osoba, gdy plik jest wypożyczony, oraz współpraca z folderami w chmurze.
keywords: repozytorium, dokumenty, przewodnik, samouczek, wypożycz, zwróć, rewizja, wydanie, zatwierdź, blokada, historia, gdzie używany, folder w chmurze, folder projektu, zarządzanie dokumentami, pdm, dwie osoby, wspólny folder
from: 3829528d
---

## Co zrobisz

Jesteś Ana, pracujesz nad projektem Riverside Clinic razem z kolegą, Benem. Rysunki projektu znajdują się w jednym folderze, do którego oboje macie dostęp (dysk współdzielony, folder synchronizowany albo folder w chmurze). Na końcu jeden plik przejdzie od pierwszej kopii do wydanej rewizji **A**, zostanie znowu zmieniony jako **B.1**, zobaczysz, kto co zrobił, i zobaczysz, co widzi Ben, gdy ty trzymasz plik.

Wszystko jest przechowywane w ukrytym folderze `.ccvault` obok twoich plików: bez serwera, nic nie jest przesyłane (wyjątkiem jest folder w chmurze, zobacz ostatni krok). Wszystkie przyciski i reguły w jednym miejscu znajdziesz w temacie *Dokumenty: wypożyczanie, rewizje i wydanie*, tam gdzie twoja aplikacja go ma.

## 1. Ustaw folder projektu

1. Wybierz {{ui:Dokumenty…}} w menu {{ui:Więcej}} na karcie **Widok**, albo wpisz `DOCUMENTS` (lub `DOCS`) i naciśnij {{key:Enter}}.
2. Wybierz {{ui:Wybierz folder projektu}} i wskaż folder, w którym są rysunki projektu. (Foldery projektów działają w Studio i w przeglądarkach, które potrafią otworzyć folder, np. Chrome i Edge. W innych przeglądarkach panel o tym informuje.)
3. Wybierz {{ui:Zmień}} obok **Ty:** i wpisz swoje imię, `Ana` (jeśli zapyta, także nazwę tego komputera). Panel pokazuje teraz *Ty: Ana na* i nazwę twojego komputera. Twoje imię jest na wszystkim, co robisz.
4. Wybierz {{ui:Utwórz repozytorium w tym folderze}} i wpisz nazwę projektu, `Riverside clinic`. Panel pokazuje *Repozytorium uruchomiono dla Riverside clinic.*

## 2. Obejmij plik kontrolą

1. Otwórz **Pliki poza repozytorium** i wybierz {{ui:Dodaj}} obok `plans/A-101.dxf`.
2. Pojawi się w **Pliki w repozytorium** w rewizji **A.1**, stan **W trakcie pracy**. A.1 to jego pierwsza kopia; repozytorium przechowuje kopię każdej rewizji.

## 3. Wypożycz, zmień, zwróć

1. Wybierz {{ui:Otwórz}} obok `plans/A-101.dxf`. Rysunek otwiera się w CadCraft, a panel się zamyka, byś mógł go zobaczyć. Panel jest nadal o jedno polecenie dalej: `DOCUMENTS`.
2. Otwórz panel ponownie i wybierz {{ui:Wypożycz}}. Wiersz pokazuje teraz **Wypożyczony tobie**. Powstał plik blokady w `.ccvault/locks`; nikt inny nie może wypożyczyć tego pliku, dopóki go nie zwrócisz.
3. Narysuj coś: dodaj linię, przesuń ścianę. Nic, co zrobisz, nie może zapisać się na pliku repozytorium, dopóki rysunek nie jest wypożyczony tobie; {{ui:Zapisz jako}} zawsze działa dla kopii, która jest twoja.
4. Otwórz panel, wybierz {{ui:Zwróć}} i wpisz, co się zmieniło (`Przesunięto drzwi`). Panel pokazuje *zwrócono jako A.2*. Plik w folderze projektu to teraz rysunek, który miałeś otwarty, a blokada zniknęła. Zwrot bez żadnych zmian zachowuje rewizję.

Jeśli zmienisz zdanie, {{ui:Cofnij wypożyczenie}} oddaje plik bez nowej rewizji.

## 4. Przegląd i wydanie

1. Wybierz {{ui:Wyślij do przeglądu}}. Stan zmienia się na **Do przeglądu**, a plik jest tylko do odczytu.
2. Przed zatwierdzeniem wybierz {{ui:Ustawienia projektu}} i wypisz, kto może zatwierdzać (jedno imię w wierszu), na przykład `Ben` i `Carla`, i zaznacz regułę, że zatwierdzający musi być kimś innym niż autor. Wybierz {{ui:Zapisz ustawienia}}. Teraz sam system repozytorium odrzuci każdego innego.
3. Ben (lub Carla) wybiera {{ui:Zatwierdź}} i wpisuje imię zatwierdzającego. Stan zmienia się na **Wydany**, a rewizja na **A**, z *zatwierdzone przez* i imieniem. Wydany plik jest tylko do odczytu. {{ui:Odeślij}} odesłałoby go do W trakcie pracy, z podaniem powodu.

Imię zatwierdzającego to imię wpisane w panelu; jest zapisem tego, kto zatwierdził, a nie dowodem tożsamości.

## 5. Nowa rewizja

1. Na wydanym pliku wybierz {{ui:Nowa rewizja}}. Zarezerwujesz w ten sposób następną literę.
2. Zmień go, a potem {{ui:Zwróć}}. Rewizja to **B.1**, w trakcie pracy. Wydaj ją tak samo, a stanie się **B**. {{ui:Cofnij wypożyczenie}} przed pierwszym zwrotem zostawia ją jako **A**.

Litery rewizji idą A, B … Z, AA, AB. Jeśli twoja norma pomija niektóre litery, ustawienie projektu *Użyj sekwencji ASME Y14.35* pomija I, O, Q, S, X i Z w kolejnych rewizjach.

## 6. Zobacz, co się stało

Wybierz nazwę pliku, aby otworzyć jego szczegóły:

- **{{ui:Historia}}**: każde zdarzenie, od najnowszego, z tym, kto, na którym komputerze i kiedy: *Zwrócono A.2* przez Anę, *Wydano* przez Bena i tak dalej.
- **{{ui:Rewizje}}**: tabela rewizji. {{ui:Otwórz kopię}} otwiera rewizję jako zwykłą kopię, która nie może nadpisać pliku repozytorium; {{ui:Porównaj z}} wylicza, co dodano, usunięto i zmieniono względem poprzedniej rewizji albo dowolnej innej.
- **{{ui:Używa}}**: rysunki, do których się odwołuje (xrefy).
- **{{ui:Używany przez}}**: lista każdego innego rysunku w repozytorium, który odwołuje się do tego: zmieniając plan bazowy, wiesz, które arkusze sprawdzić.

## Rewizja na arkuszu

Przy otwartym rysunku (i z układem (layout) w nim) wybierz {{ui:Tabela rewizji}}: tabela wydanych rewizji zostanie narysowana w prawym górnym rogu arkusza. Wybierz {{ui:Wypełnij tabliczki rysunkowe}}, aby wypełnić atrybuty tabliczki oznaczone `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` lub `APPROVED_BY` rewizją, stanem, datą i zatwierdzającym pliku. Gdy zatwierdzisz kolejne wydanie, tabela rewizji zostanie zaktualizowana.

## 7. Co widzi Ben, gdy ty trzymasz plik

Teraz wypożycz plik ponownie i poproś Bena, by otworzył ten sam folder projektu na swoim komputerze i otworzył panel. W wierszu pliku zobaczy **Wypożyczony przez Anę na** twoim komputerze **od** tej godziny i nie zobaczy przycisku {{ui:Wypożycz}}. Jeśli mimo to spróbuje, repozytorium odmówi: blokada to plik, którego system nie utworzy drugi raz, więc dwie osoby nie mogą obie trzymać pliku, nawet w tej samej chwili, gdy folder leży na dysku w Studio. (W przeglądarce folder daje tylko najlepszą próbę, a panel mówi o tym w **Folder**.)

Jeśli Ana jest nieobecna, a Ben potrzebuje pliku, {{ui:Przerwij wypożyczenie}} go zwalnia. Musi wpisać powód; trafia on do dziennika razem z tym, czyje było wypożyczenie. Gdy projekt wymienia administratorów, tylko oni mogą to zrobić. Wypożyczenie starsze niż limit przeterminowania (domyślnie 14 dni) jest oznaczone jako *dawno*. Po przerwaniu późny zwrot Any zostaje odrzucony, więc wy dwoje nie możecie nadpisać swoich zmian nawzajem.

## 8. Foldery w chmurze

Folder w chmurze to folder projektu przechowywany w chmurze zespołu, więc zespół nie potrzebuje dysku współdzielonego. W Studio, zalogowany na swoje konto CadCraft, panel pokazuje {{ui:Otwórz folder w chmurze}} obok {{ui:Wybierz folder projektu}}. Wybierz go i wskaż folder, wymieniony jako obszar roboczy / folder. Właściciel obszaru roboczego najpierw tworzy folder, a pamięć w chmurze zespołu musi być aktywna. Wszystko powyżej działa tak samo; blokadę tworzy serwer, a jest ona ścisła wobec wszystkich osób. Jeśli nie jesteś zalogowany, panel prosi o zalogowanie. W zwykłej karcie przeglądarki przycisk chmury nie jest dostępny; użyj Studio.

## Wypróbuj

Wykonaj osiem kroków powyżej na kopii prawdziwego pliku. Do kroków dla dwóch osób potrzebujesz drugiej osoby albo dwóch okien z dwoma imionami. Jeśli wypróbujesz to na prawdziwym wspólnym folderze, strona testów społeczności zawiera sprawdzenie, które pyta dokładnie o to, i przyjmuje wyniki.
