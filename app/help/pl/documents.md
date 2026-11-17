---
title: Dokumenty, wypożyczanie, rewizje i wydanie
summary: Pilnuj rysunków w folderze projektu. Wypożycz plik, aby nikt inny go nie zmieniał, zwróć go jako nową rewizję, wyślij do przeglądu i wydaj z nazwiskiem zatwierdzającego. Historia, zależności, zestawienie materiałów i tabliczki rysunkowe pokazujące rewizję.
keywords: ustawienia projektu, zatwierdzający, administratorzy, litery rewizji, ASME, tylko do odczytu, porównaj rewizje, otwórz kopię, partcraft, bimcraft, dokumenty, DOCUMENTS, DOCS, repozytorium, zarządzanie dokumentami, pdm, wypożyczenie, zwrot, blokada, rewizja, rev, litera rewizji, wydanie, wydany, zatwierdź, zatwierdzenie, przegląd, nieaktualny, gdzie używany, bom, zestawienie materiałów, tabliczka rysunkowa, tabela rewizji, folder projektu
from: ee938722
---

## Co powstanie

Folder projektu, w którym każdy rysunek ma rewizję (A.1, A.2 … potem A, B …) i stan (W trakcie prac, Do przeglądu, Wydany, Nieaktualny). Tylko jedna osoba naraz może zmieniać plik. Każde wypożyczenie, zwrot, zatwierdzenie i przerwane wypożyczenie są zapisane wraz z tym, kto je wykonał i kiedy.

Wszystko jest przechowywane w samym folderze, w ukrytym folderze `.ccvault` obok rysunków. Folder na udziale sieciowym lub folder synchronizowany działa dla całego zespołu. Nie ma serwera i niczego nie wysyła się nigdzie.

## Otwórz DOCUMENTS

Wpisz `DOCUMENTS` (lub `DOCS`) i naciśnij {{key:Enter}}. Panel otworzy się obok rysunku.

Wybierz {{ui:Wybierz folder projektu}} i wskaż folder, który zawiera rysunki projektu. Foldery projektu działają w CadCraft Studio oraz w przeglądarkach, które potrafią otworzyć folder (Chrome, Edge). W innych przeglądarkach panel to zaznacza.

Za pierwszym razem wpisz swoje imię (trafi ono do wszystkiego, co robisz) oraz nazwę tego komputera. Jeśli jesteś zalogowany, Twoje imię jest już wpisane.

## Utwórz repozytorium

Folder, który nie jest jeszcze repozytorium, oferuje {{ui:Utwórz repozytorium w tym folderze}}. Wpisz nazwę projektu. Następnie otwórz {{ui:Pliki spoza repozytorium}} i wybierz {{ui:Dodaj (A)}} obok każdego pliku, który chcesz objąć kontrolą. Dodany plik zaczyna od rewizji **A.1**, W trakcie prac.

## Zmiana rysunku

1. Wybierz {{ui:Otwórz}} obok rysunku. Otworzy się w CadCraft. Jeśli plik nie jest wypożyczony przez Ciebie, tylko go oglądaj i nie zmieniaj: {{ui:Zapisz}} odmówi nadpisania i powie dlaczego (użyj {{ui:Zapisz jako}}, aby zachować własną kopię).
2. Wybierz {{ui:Wypożycz}}. Nikt inny nie może go teraz wypożyczyć. Panel pokazuje, kto go ma, na jakim komputerze i od kiedy.
3. Rysuj.
4. Wybierz {{ui:Zwróć}} i opisz, co się zmieniło. Otwarty rysunek zostanie zapisany do folderu projektu we własnym formacie i stanie się następną rewizją (A.1, potem A.2). Zwrot bez zmian zachowuje rewizję.

{{ui:Cofnij wypożyczenie}} oddaje plik bez nowej rewizji.

## Przegląd i wydanie

- {{ui:Wyślij do przeglądu}}: podczas przeglądu plik jest tylko do odczytu.
- {{ui:Zatwierdź}}: wpisz imię zatwierdzającego. A.3 staje się **A**, Wydany. Wydane pliki są tylko do odczytu.
- {{ui:Odeślij}}: wraca do stanu W trakcie prac, z podaniem powodu.
- {{ui:Nowa rewizja}} przy wydanym pliku wypożycza go na następną literę: jego pierwszy zwrot to **B.1**. {{ui:Cofnij wypożyczenie}} przed tym pozostawia go na A.
- {{ui:Oznacz jako nieaktualny}} wycofuje wydany plik.

Projekt może mieć listę osób, które mogą zatwierdzać, i może wymagać, aby zatwierdzający nie był osobą, która zwróciła plik (patrz Ustawienia projektu poniżej).

## Ustawienia projektu

Otwórz {{ui:Ustawienia projektu}} w panelu:

- **Zatwierdzający**: jedno imię w wierszu. Jeśli są jacyś, tylko oni mogą zatwierdzić wydanie.
- **Zatwierdzający musi być kimś innym niż autor**: zasada „czterech oczu”.
- **Administratorzy**: jedno imię w wierszu. Jeśli są jacyś, tylko oni mogą przerwać cudze wypożyczenie lub zmieniać te ustawienia.
- **Litery rewizji do pominięcia**: {{ui:Użyj sekwencji ASME Y14.35}} pomija I, O, Q, S, X i Z, albo wpisz własne litery. Litery już nadane pozostają; wybór dotyczy następnych rewizji.
- **Wypożyczenie uznaje się za przeterminowane po**: liczba dni (domyślnie 14).

Wybierz {{ui:Zapisz ustawienia}}. Zmiana zostanie zapisana w dzienniku wraz z tym, kto ją wprowadził.

## Ktoś zostawił plik wypożyczony

{{ui:Przerwij wypożyczenie}} zwalnia plik wypożyczony przez kogoś innego (ta osoba jest nieobecna albo jej komputer się zepsuł). Musisz wpisać powód: zostanie zapisany w dzienniku wraz z tym, czyje wypożyczenie przerwano. Gdy projekt ma administratorów, tylko oni mogą to zrobić. Wypożyczenie starsze niż 14 dni jest oznaczone jako długotrwałe.

## Historia, rewizje, używa, używany przez

Wybierz nazwę pliku, aby zobaczyć:

- {{ui:Historia}}: każde zdarzenie, od najnowszego, z informacją, kto, na którym komputerze i kiedy.
- {{ui:Rewizje}}: każda zachowana rewizja. Kopia każdej rewizji jest w repozytorium (ta sama zawartość jest przechowywana raz). {{ui:Otwórz kopię}} otwiera tę rewizję jako zwykłą kopię, która nie może nadpisać pliku w repozytorium. {{ui:Porównaj z}} wylicza, co dodano, usunięto i zmieniono między tą rewizją a poprzednią (lub dowolną inną, którą wybierzesz), i zaznacza to kolorem na rysunku.
- {{ui:Używa}}: rysunki, do których odwołuje się (xref), dokumenty, na które wskazuje model IFC, części złożenia PartCraft.
- {{ui:Używany przez}}: każdy plik w repozytorium, który używa tego pliku.

{{ui:Zestawienie materiałów (CSV)}} zapisuje listę wszystkiego, czego używa plik, poziom po poziomie, z ilościami, rewizjami i stanami, do arkusza kalkulacyjnego.

## Tabela rewizji na arkuszu

Przy otwartym rysunku, który ma układ, wybierz {{ui:Tabela rewizji}}. Tabela wydanych rewizji (rewizja, data, przez kogo, zatwierdzone, opis) zostanie narysowana w prawym górnym rogu oglądanego arkusza. Gdy zatwierdzasz wydanie, tabela jest aktualizowana.

## Rewizja w tabliczce rysunkowej

Nadaj atrybutom tabliczki rysunkowej jeden z tych znaczników i wybierz {{ui:Wypełnij tabliczki rysunkowe}} na otwartym rysunku:

| Znacznik | Wypełniany |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | rewizją (B, albo B.2, gdy jest w trakcie prac) |
| `VAULT.STATE` | stanem (Wydany …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | datą ostatniej rewizji |
| `VAULT.APPROVER`, `APPROVED_BY` | osobą, która zatwierdziła ostatnie wydanie |

## PartCraft i BimCraft

PartCraft i BimCraft mają ten sam panel Dokumenty dla swoich plików: części i złożenia w PartCraft, modele IFC w BimCraft. Zwrot zapisuje otwarty model do folderu projektu, a złożenie pokazuje, które części używa, oraz zestawienie materiałów.

## Warto wiedzieć

- Dwie osoby w tym samym folderze sieciowym nie mogą obie wypożyczyć pliku: wypożyczenie to plik, którego system nie pozwala utworzyć dwa razy. W przeglądarce i w Studio, którego powłoka jest starsza niż ta funkcja, jest to tak ścisłe, jak pozwala folder: dwa wypożyczenia w tej samej ułamku sekundy mogą się udać oba. Panel mówi, które zabezpieczenie obowiązuje.
- Nie edytuj i nie usuwaj ręcznie folderu `.ccvault`. Zawarty w nim dziennik jest zapisem; repozytorium w razie potrzeby odbuduje swoją listę na jego podstawie.
- Zmiana pliku w folderze bez wypożyczenia jest pokazywana jako {{ui:Zmieniony w folderze bez wypożyczenia}}.
