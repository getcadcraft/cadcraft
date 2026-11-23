---
title: Nadaj opcjom poleceń własne litery
summary: Odpowiadaj na opcje poleceń literami, które wybierzesz, w dowolnym języku, z jednego pliku tekstowego, który możesz edytować, importować i eksportować.
keywords: litery opcji, optionkeys, optkeys, słowo kluczowe opcji, klucz, przemapowanie, mapowanie, dostosuj, własne litery, polar, array, P, PO, język, tłumacz opcje, krótka forma, import, eksport, niejednoznaczne
from: 7c8328c6
---

## Czego się nauczysz

Jak zmienić litery, które wpisujesz, by odpowiedzieć na opcje polecenia. Na przykład {{cmd:ARRAY}} pyta `[Rectangular/POlar]` i przyjmuje `PO` dla opcji Biegunowe; możesz sprawić, że `P` albo inne litery zrobią to samo, w twoim języku, jeśli chcesz.

## Jak odpowiadać na opcje

Gdy polecenie pokazuje opcje w nawiasach kwadratowych, wielkie litery to te, które wpisujesz: `POlar` to `PO`, `eXit` to `X`.

Możesz też wpisać mniej liter. Jeśli to, co wpisujesz, pasuje tylko do jednej z pokazanych opcji, CadCraft ją wybiera: przy `[Rectangular/POlar]` samo `P` oznacza Biegunowe. Jeśli pasuje do dwóch, wiersz poleceń je wymienia i pyta ponownie:

```
C could be COUnt, COLumns. Type more letters.
```

Liczby nigdy nie są zgadywane, więc wpisana odległość albo liczba jest zawsze czytana jako liczba.

## Dodaj własne litery

Każde polecenie zachowuje swoje wbudowane litery. Dodajesz własne ponad nimi, więc twoja lista zawiera tylko to, co zmieniłeś.

1. Otwórz {{ui:Ustawienia}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Litery opcji}} i wybierz {{ui:Edytuj…}}. Albo wpisz {{cmd:OPTIONKEYS}} i naciśnij {{key:Enter}}.
2. W sekcji {{ui:Polecenie}} wybierz polecenie, na przykład `ARRAY`. Lista zawiera każde polecenie, które pyta o opcje, i zaczyna się od polecenia użytego ostatnio.
3. W sekcji {{ui:Opcja}} wybierz opcję. Każda pokazuje swoje wbudowane litery w nawiasach, na przykład `POlar (PO)`.
4. W polu {{ui:Twoje litery}} wpisz litery, które chcesz, na przykład `P`, i wybierz {{ui:Dodaj (A)}}.
5. Opcja pojawia się teraz w {{ui:Twoje litery}} ze swoimi wbudowanymi literami i twoimi. Wybierz {{ui:Zapisz}}.

Uruchom {{cmd:ARRAY}}, zaznacz obiekt i naciśnij {{key:Enter}}. Monit pokazuje twoje litery po opcji, `POlar (P)`, i `P` ją wybiera.

Aby usunąć literę, kliknij x na końcu jej wiersza, a potem {{ui:Zapisz}}. Opcja wraca do samych wbudowanych liter.

## Litery, których nie możesz użyć

Edytor odrzuca litery, które zasłoniłyby coś, co wiersz poleceń już rozpoznaje, i podaje powód:

- wbudowane litery innej opcji tego samego polecenia (`R` dla Biegunowe w `ARRAY`, gdzie `R` to Prostokątne);
- słowo przyciągania do obiektu o trzech lub więcej literach, na przykład `END`, `MID` lub `CEN`, oraz słowa `ALL` i `LAST`;
- te same litery dla dwóch różnych opcji jednego polecenia.

Dopóki cokolwiek jest wypisane na czerwono, {{ui:Zapisz}} jest wyłączone: popraw wiersz albo go usuń, a przycisk znów się włączy. Wbudowane litery monitu zawsze mają pierwszeństwo przed twoimi, więc twoja lista nigdy nie zablokuje wbudowanej odpowiedzi. Litery, które są nazwą polecenia, jak `L` albo `C`, są w porządku: przy monicie opcji wiersz poleceń czyta odpowiedź, a nie uruchamia polecenie.

Opcje wypisane dla polecenia pochodzą z poleceń, które dzielą jego monity, więc czasem polecenie wymienia opcję, którą pyta tylko w niektórych przypadkach.

## Jeden wybór dla każdego polecenia

W sekcji {{ui:Polecenie}} wybierz {{ui:Każde polecenie}}. Opcje są wtedy wszystkimi opcjami, jakie ma jakiekolwiek polecenie, na przykład eXit albo Undo. Litery dodane tutaj odpowiadają tej opcji wszędzie, gdzie polecenie ją oferuje. Litery dodane dla jednego polecenia mają pierwszeństwo przed tymi.

## Litery w twoim języku

Litery mogą pochodzić z dowolnego alfabetu, więc możesz odpowiadać na opcje bez przełączania klawiatury: dodaj `З` dla Close w {{ui:Każde polecenie}} albo `П` dla POlar w `ARRAY`.

CadCraft zawiera tylko angielskie litery. Twoja lista to sposób, w jaki ty, twoje biuro albo osoby mówiące twoim językiem uzupełniają resztę, a {{ui:Eksportuj}} tworzy plik, który możesz przekazać dalej.

## Edytuj jako tekst

{{ui:Edytuj jako tekst}} w edytorze pokazuje tę samą listę jako wiersze tekstu, jeden na opcję; to także zapisuje {{ui:Eksportuj}}:

```
ARRAY.PO,  P
*.X,       Q
```

Każdy wiersz to polecenie, kropka, wbudowane litery opcji, przecinek i twoje litery. Gwiazdka zamiast polecenia oznacza każde polecenie. Wiersz zaczynający się od `;` jest notatką.

## Co pozostaje bez zmian

- Wbudowane litery działają obok twoich.
- Procedury i przyciski paska narzędzi nadal używają wbudowanych liter, więc nic, co wczytałeś, się nie psuje. Aby samemu wpisać wbudowane litery, gdy twoje przeszkadzają, postaw przed nimi podkreślenie: `_PO`.
- Krótka nazwa polecenia to coś innego: zobacz [Edytuj skróty poleceń](topic:command-aliases).

## Wiersze, które CadCraft odrzuca

Gdy edytujesz jako tekst albo importujesz plik, edytor wypisuje każdy problem z numerem wiersza:

- polecenie nie istnieje (krótka nazwa polecenia jest w porządku: `AR.PO` jest czytane jako `ARRAY.PO`);
- wiersz nie ma postaci `POLECENIE.OPCJA, LITERY`;
- litery mają spację albo znak (tylko litery i cyfry, najwyżej 16);
- te same litery odpowiadają dwóm różnym opcjom jednego polecenia.

## Import i eksport

{{ui:Eksportuj}} zapisuje twoje litery jako plik tekstowy, który możesz zachować albo przekazać komuś. {{ui:Importuj…}} odczytuje taki plik. Oba są w edytorze i w {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Litery opcji}}.

W Ustawieniach {{ui:Importuj…}} zastępuje twój plik tym, który wybierzesz. Plik z wierszem, który koliduje albo nie może być użyty, nie zostaje przyjęty; otwórz edytor i zaimportuj go tam, aby zobaczyć wiersze. W edytorze tylko wypełnia pole: nic się nie zmienia, dopóki nie wybierzesz {{ui:Zapisz}}.

## Wczytaj ponownie lub usuń

Wpisz {{cmd:REINIT}} i naciśnij {{key:Enter}}, aby ponownie zastosować plik. Aby usunąć literę, skasuj jej wiersz i wybierz {{ui:Zapisz}}.

## Twoje litery podążają za kontem

Gdy jesteś zalogowany na getcadcraft.com, twoje litery są zapisane przy koncie. Otwórz CadCraft w innej przeglądarce albo na innym komputerze z tym samym kontem, a przyjdą same; wiersz poleceń pisze `Litery opcji z twojego konta`. Jeśli zmieniłeś je w dwóch miejscach, wygrywa najnowsza kopia, a ta, którą zastąpiła, zostaje zachowana raz.

{{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Litery opcji}} pokazuje, w jakim są stanie. Wylogowany albo offline zostają w tej przeglądarce i trafiają na konto przy następnym zapisie, gdy jesteś zalogowany.

Powiązane: [Edytuj skróty poleceń](topic:command-aliases) · [Ustawienia CadCraft](topic:settings) · [Polecenia](topic:commands)
