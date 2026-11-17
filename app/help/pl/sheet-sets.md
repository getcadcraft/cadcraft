---
title: Zestawy arkuszy
summary: Zbierz arkusze z wielu rysunków w jedną ponumerowaną listę, wypełnij ich tabliczki rysunkowe z zestawu, opublikuj cały zestaw jako jeden PDF i zarchiwizuj go jako zip.
keywords: zestaw arkuszy, menedżer zestawów arkuszy, ssm, sheetset, ccsheets, dst, lista arkuszy, indeks arkuszy, tabliczka rysunkowa, pola, publikacja, przenumerowanie, archiwum, etransmit, transmittal, podzbiory, strona tytułowa, lista rysunków
from: 2c855720
---

## Czego się dowiesz

Jak zebrać arkusze (układy) z kilku plików rysunków w **zestaw arkuszy**, ponumerować i nazwać je, pozwolić, by ich tabliczki rysunkowe wypełniły się same, opublikować cały zestaw jako jeden PDF i spakować wszystko do jednego zip do wysłania.

Zestaw arkuszy żyje we własnym małym pliku, `<name>.ccsheets`, w folderze z rysunkami. Plik zestawu wymienia arkusze ze ścieżkami od tego folderu, więc możesz przenieść lub skopiować cały folder.

:::note
Otwarcie folderu do odczytu i zapisu wymaga Chrome lub Edge (mogą pozwolić stronie działać w wybranym przez Ciebie folderze) albo aplikacji na komputer. Inne przeglądarki otwierają zestaw tylko do odczytu: możesz go przeglądać i publikować, a plik zestawu pobiera się zamiast zapisywać.
:::

## Utwórz zestaw

1. Znajdź sekcję {{ui:Zestaw arkuszy}} w lewym panelu i otwórz jej menu {{ui:Zestaw}}. Wpisanie {{cmd:SHEETSET}} (lub `SSM`) także tam prowadzi.
2. Wybierz {{ui:Nowy zestaw…}}. Nadaj zestawowi nazwę i, jeśli chcesz, nazwę projektu oraz jego numer.
3. Wskaż folder, w którym są rysunki. Plik zestawu zostanie tam zapisany.

Aby później otworzyć zestaw, wybierz {{ui:Otwórz zestaw…}} i wskaż ten sam folder. Jeśli folder zawiera więcej niż jeden zestaw, CadCraft zapyta, który.

## Dodaj arkusze

1. Wybierz {{ui:Dodaj arkusze z rysunku…}} i wskaż jeden z rysunków w folderze.
2. CadCraft czyta ten rysunek w tle (nie otwiera go na ekranie) i wypisuje jego arkusze. Zaznacz te, których chcesz, i kliknij {{ui:OK}}.
3. Wybierz arkusz i naciśnij {{key:F2}} (albo {{ui:Zmień nazwę i numeruj…}}), aby nadać mu numer i tytuł, na przykład `A-101` i `Plan piętra`.

{{ui:Nowy arkusz z szablonu…}} tworzy nowy rysunek z arkusza innego rysunku (jego tabliczki i okien widokowych), nazwany od nowego arkusza, i dodaje go do zestawu. Zestaw zapamiętuje rysunek użyty jako szablon.

## Uporządkuj zestaw

- **Podzbiory** grupują arkusze, na przykład Architektura › Rzuty: zaznacz miejsce, w którym ma się znaleźć, i wybierz {{ui:Nowy podzbiór…}}.
- **Kolejność**: przeciągnij arkusz w inne miejsce na liście albo na podzbiór, aby go tam przenieść. Z klawiaturą: zaznacz go i naciśnij {{key:Alt+Up}} lub {{key:Alt+Down}}.
- **Otwórz arkusz**: kliknij go dwukrotnie (albo naciśnij {{key:Enter}}). Jego rysunek otworzy się we własnej karcie, na tym arkuszu.
- **Usuń**: zaznacz arkusz i naciśnij {{key:Delete}}. Sam rysunek nie zmienia się.
- **Cofnij**: {{ui:Cofnij zmianę zestawu}} i {{ui:Ponów zmianę zestawu}} przechodzą po tym, co zmieniłeś w zestawie.
- **Przenumeruj**: {{ui:Ponumeruj arkusze…}} numeruje każdy arkusz albo arkusze jednego podzbioru w kolejności listy: prefiks, start i krok (`A-` i `101` dają A-101, A-102 …).

Każda zmiana jest od razu zapisywana w pliku zestawu.

## Numeruj arkusze według ich pól

Zamiast numerować arkusze ręcznie, pozwól regule zbudować każdy numer z pól arkusza, tak aby arkusz przeniesiony na inny poziom lub branżę sam dostał nowy numer.

1. Nadaj każdemu arkuszowi jego pola: zaznacz go, kliknij {{ui:Zmień nazwę…}} i w {{ui:Pola tego arkusza}} wpisz po jednym w wierszu, na przykład `DISCIPLINE = A` i `LEVEL = 1`. Pole wspólne dla całego zestawu (na przykład `DISCIPLINE = A`) może być wpisane w {{ui:Właściwości…}} zestawu.
2. Otwórz menu panelu i kliknij {{ui:Reguła numeracji…}}.
3. Wpisz regułę, na przykład `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` liczy w górę wśród arkuszy, których pozostałe pola mają tę samą wartość, więc poziom 1 dostaje A-101, A-102, a poziom 2 zaczyna od nowa od A-201. `{SEQ:2}` zapisuje to dwiema cyframi; `{SUBSET}` to nazwa podzbioru, w którym jest arkusz.
4. Wybierz, co ma się dziać przy zmianie pola: {{ui:Przenumeruj arkusze}} utrzymuje numery zgodne z regułą po każdej zmianie; drugi wybór numeruje je raz, teraz.

Reguła jest zapisywana w pliku zestawu. Gdy sama przenumerowuje arkusze, zmieniaj pola arkusza, a nie jego numer.

## Wypełnij tabliczki z zestawu

Tabliczka rysunkowa pobiera tekst z zestawu, gdy jej atrybuty są oznaczone nazwą pola:

| Znacznik | Co pokazuje |
|---|---|
| `SHEETNUMBER` (lub `SHEET_NO`, `DWG_NO`) | Numer arkusza |
| `SHEETTITLE` (lub `TITLE`, `SHEET_TITLE`) | Tytuł arkusza |
| `SHEETDESC` | Opis arkusza |
| `PROJECTNAME` (lub `PROJECT`) | Nazwa projektu |
| `PROJECTNUMBER` (lub `PROJECT_NO`, `JOB_NO`) | Numer projektu |
| `SHEETSETNAME` | Nazwa zestawu |
| `SHEETINDEX`, `SHEETCOUNT` | „3 z 12” oraz 12 |
| Własne, na przykład `CLIENT` | To, co wpisałeś dla niego w {{ui:Ustaw pola…}} |

{{ui:Ustaw pola…}} zawiera nazwę projektu i jego numer oraz Twoje własne pola, po jednym w wierszu, jako `NAZWA = wartość`.

{{ui:Zaktualizuj rysunki}} zapisuje numery, tytuły i pola w tabliczkach każdego rysunku w zestawie oraz zmienia nazwę każdej karty układu arkusza zgodnie z ustawieniem zestawu (domyślnie numer i tytuł, na przykład `A-101 Plan piętra`; {{ui:Ustaw pola…}} › {{ui:Nazwy kart układów}} to zmienia). Każdy rysunek zapisywany jest w tym samym miejscu, we własnym formacie i wersji. Po przenumerowaniu lub zmianie nazw arkuszy uruchom to ponownie, a karty i tabliczki pójdą za nimi.

## Lista arkuszy na stronie tytułowej

Zaznacz stronę tytułową na liście i wybierz {{ui:Umieść listę arkuszy na tym arkuszu}}. Tabela wszystkich arkuszy (numer i tytuł, pod podzbiorem) trafi w lewy górny róg arkusza. {{ui:Zaktualizuj rysunki}} i {{ui:Publikuj do PDF}} utrzymują ją w aktualności. To jeden blok, `CC_SHEETLIST`: przesuwaj go jak każde odwołanie do bloku.

## Opublikuj zestaw

{{ui:Publikuj do PDF}} tworzy jeden PDF ze stroną na arkusz, w kolejności zestawu, w rozmiarze papieru każdego arkusza, z zakładką dla każdego arkusza („A-101 — Plan piętra”). Gdy zaznaczony jest podzbiór, CadCraft pyta, czy opublikować tylko ten podzbiór. Tabliczki w PDF są wypełniane z zestawu jeszcze przed aktualizacją rysunków; same rysunki nie zmieniają się przy publikacji. PDF jest pobierany.

{{ui:Publikuj do DWG…}} zapisuje każdy arkusz jako osobny DWG (DWG 2018): model i ten jeden arkusz, z tabliczką wypełnioną z zestawu, nazwany swoim numerem i tytułem (`A-101 Level 1 floor plan.dwg`). Wybierz {{ui:DWG}} albo {{ui:DWG + PDF}}, aby obok nich dostać PDF zestawu. `publish.json` wymienia każdy plik z jego rozmiarem i SHA-256. Gdy folder zestawu można zapisywać (CadCraft Studio albo folder wskazany w przeglądarce), pliki trafiają do folderu `<nazwa zestawu> - published`; w przeciwnym razie są pobierane jako jeden zip. [Nadpisania klas okien widokowych](topic:viewport-overrides) są przenoszone do każdego DWG.

## Zarchiwizuj zestaw

{{ui:Archiwizuj jako zip}} pakuje plik zestawu, każdy rysunek, którego używa, i to, do czego te rysunki się odwołują (dołączone rysunki, a w nich kolejne, oraz obrazy), zachowując ich foldery, plus plik `Transmittal.txt` wymieniający każdy plik. Odwołanie spoza folderu zestawu jest tam wypisane jako brakujące. Odwołania są szukane po ścieżce od rysunku, a potem po nazwie pliku w całym folderze.

## Plik zestawu

Plik `.ccsheets` to JSON, który możesz odczytać w dowolnym edytorze tekstu:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Ścieżki są względne od folderu zestawu, z `/` między folderami. CadCraft sprawdza plik przy jego otwarciu: ścieżka bezwzględna, arkusz bez pliku lub układu albo tekst, który nie jest czystym tekstem, są pomijane, a historia o tym informuje.

## Rozwiązywanie problemów

| Co widzisz | Dlaczego | Co zrobić |
|---|---|---|
| „Ten folder jest tutaj tylko do odczytu” | Przeglądarka nie może zapisywać w folderze | Użyj Chrome lub Edge albo aplikacji na komputer; tymczasem {{ui:Pobierz plik zestawu}} zachowa Twoje zmiany |
| Arkusz pominięty w PDF: „nie ma układu o nazwie …” | Układ arkusza został zmieniony lub usunięty w jego rysunku | Otwórz rysunek i sprawdź jego karty; usuń arkusz z zestawu i dodaj go ponownie |
| Tabliczka pozostaje pusta | Jej atrybuty mają inne znaczniki | Zmień nazwy znaczników atrybutów na nazwy pól podane wyżej (BEDIT) |
| „już ma układ o nazwie … więc ta karta nie została przemianowana” | Dwa arkusze jednego rysunku dostałyby tę samą nazwę karty | Nadaj jednemu z nich inny numer lub tytuł |
