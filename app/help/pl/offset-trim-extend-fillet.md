---
title: Odsunięcie, przycinanie, wydłużanie, zaokrąglenie i fazka ścian
summary: Zamieniaj pojedyncze linie w podwójne ściany za pomocą odsunięcia, czyść narożniki zaokrągleniem, a linie przycinaj i wydłużaj.
keywords: odsunięcie, przytnij, wydłuż, zaokrąglenie, fazka, ścięcie, przerwij, przerwij w punkcie, skróć, ściany, narożnik, tnij, równoległy, promień, czyszczenie, offset, trim, extend, fillet, chamfer, bevel, break, breakatpoint, lengthen
from: c6c5cbd0
---

## Co wykonasz

Mały pokój ze ścianami o grubości 200: wewnętrzna powierzchnia jest narysowana, zewnętrzna odsunięta, narożniki są wyczyszczone, a przez jedną ścianę wycięte jest przejście.

## Narysuj wewnętrzną powierzchnię

1. Wpisz `L` i naciśnij {{key:Enter}}.
2. Wpisz `0,0` i naciśnij {{key:Enter}}.
3. Wpisz `@5000,0` i naciśnij {{key:Enter}}.
4. Wpisz `@0,4000` i naciśnij {{key:Enter}}.
5. Wpisz `@-5000,0` i naciśnij {{key:Enter}}.
6. Wpisz `C` i naciśnij {{key:Enter}}.
7. Kliknij {{ui:Zasięg}}.

Masz cztery osobne linie. (Zamknięta polilinia odsunęłaby się za jednym razem; osobne linie pokazują, jak {{cmd:FILLET}} czyści narożniki.)

## Odsunięcie zewnętrznej powierzchni

1. Wpisz `O` i naciśnij {{key:Enter}}. Monit brzmi `Podaj odległość odsunięcia [Przez (T)] <Przez (T)>:`.
2. Wpisz `200` i naciśnij {{key:Enter}}.
3. Przy `Wybierz obiekt do odsunięcia` kliknij dolną linię.
4. Przy `Wskaż punkt po stronie do odsunięcia` kliknij gdziekolwiek poniżej niej. Pojawia się równoległa linia 200 poniżej.
5. Kliknij prawą linię, a następnie kliknij po jej prawej stronie.
6. Kliknij górną linię, a następnie kliknij nad nią.
7. Kliknij lewą linię, a następnie kliknij po jej lewej stronie.
8. Naciśnij {{key:Enter}}, aby zakończyć polecenie.

Powinieneś zobaczyć cztery linie zewnętrzne, każda o tej samej długości co jej wewnętrzna, więc zewnętrzne narożniki się nie stykają.

:::tip
Naciśnij {{key:Enter}} przy monicie odległości, aby ponownie użyć ostatniej odległości. Wpisz `T`, aby wybrać Przez (T): wtedy każda kopia przechodzi przez punkt, który klikniesz, w jakiejkolwiek odległości by to było.
:::

{{cmd:OFFSET}} działa na liniach, łukach, okręgach i polilinach. Odsunięcie zamkniętej polilinii odsuwa cały kontur, łącznie z narożnikami.

## Wyczyść zewnętrzne narożniki zaokrągleniem

{{cmd:FILLET}} łączy dwie linie w narożniku: przycina lub wydłuża obie, aby się spotkały. Przy promieniu 0 narożnik jest prosty.

1. Wpisz `F` i naciśnij {{key:Enter}}. Monit brzmi `Wybierz pierwszą linię [Promień (R)]:`.
2. Jeśli ostatnie zaokrąglenie używało promienia, wpisz `R`, naciśnij {{key:Enter}}, wpisz `0` i naciśnij {{key:Enter}}.
3. Kliknij zewnętrzną dolną linię blisko jej prawego końca.
4. Przy `Wybierz drugą linię` kliknij zewnętrzną prawą linię blisko jej dolnego końca.

Dwie linie spotykają się teraz w ostrym narożniku, a polecenie się kończy.

5. Naciśnij {{key:Enter}}, aby powtórzyć {{cmd:FILLET}}, i zrób następny narożnik.
6. Powtarzaj, aż wszystkie cztery zewnętrzne narożniki się spotkają.

Klikaj każdą linię na części, którą chcesz **zachować**. Przy promieniu większym od 0 {{cmd:FILLET}} zamiast tego dodaje łuk między liniami.

:::tip
Wpisz `M` przy pierwszym monicie, aby zrobić wszystkie cztery narożniki za jednym razem, albo narysuj zewnętrzną powierzchnię jako jedną zamkniętą polilinię i wpisz `P`: każdy narożnik zostanie wykonany naraz. Przytrzymaj {{key:Shift}} podczas klikania drugiej linii, aby uzyskać ostry narożnik bez zmiany promienia.
:::

## Ścięcie narożnika fazką

{{cmd:CHAMFER}} obcina narożnik prostą linią.

1. Wpisz `CHA` i naciśnij {{key:Enter}}.
2. Wpisz `D` i naciśnij {{key:Enter}}. Wpisz `300` i naciśnij {{key:Enter}} dla pierwszej odległości, a następnie naciśnij {{key:Enter}}, aby użyć 300 także dla drugiej.
3. Kliknij wewnętrzną górną linię blisko jej lewego końca, a następnie wewnętrzną lewą linię blisko jej górnego końca.

Narożnik jest obcięty o 300 wzdłuż każdej linii, a linia fazki je łączy. Wpisz `A` zamiast `D`, aby podać długość na pierwszej linii i kąt.

## Wytnij przejście przycinaniem

Najpierw narysuj dwa ościeża przez dolną ścianę, a potem przytnij linie ściany między nimi.

1. Wpisz `L` i naciśnij {{key:Enter}}.
2. Wpisz `1000,200` i naciśnij {{key:Enter}}.
3. Wpisz `@0,-600` i naciśnij {{key:Enter}}, a następnie naciśnij {{key:Enter}} ponownie.
4. Naciśnij {{key:Enter}}, aby powtórzyć {{cmd:LINE}}.
5. Wpisz `1900,200` i naciśnij {{key:Enter}}.
6. Wpisz `@0,-600` i naciśnij {{key:Enter}}, a następnie naciśnij {{key:Enter}} ponownie.

Masz teraz dwie krótkie linie przecinające dolną ścianę w odstępie 900.

7. Wpisz `TR` i naciśnij {{key:Enter}}. Historia pokazuje `Bieżące ustawienia: Tryb szybki, krawędzie: bez wydłużania`.
8. Kliknij wewnętrzną dolną linię między dwoma ościeżami. Ten fragment znika. (Najpierw najedź wskaźnikiem: fragment, który zniknie, staje się szary i przerywany.)
9. Kliknij zewnętrzną dolną linię między dwoma ościeżami. Ten fragment też znika.
10. Kliknij część każdego ościeża, która wystaje ponad ścianę, oraz część poniżej.
11. Naciśnij {{key:Enter}}, aby zakończyć polecenie.

Powinieneś zobaczyć otwór 900 w dolnej ścianie, a ościeża zamykające końce ściany.

W trybie szybkim (domyślnym) {{cmd:TRIM}} nie pyta najpierw o krawędzie tnące: każdy widoczny obiekt jest krawędzią tnącą. Wskaż fragment, który ma zniknąć, albo przeciągnij ścieżkę przez kilka fragmentów, aby przyciąć je wszystkie naraz. Wpisz `U` i naciśnij {{key:Enter}}, aby cofnąć ostatni wybór lub przeciągnięcie bez wychodzenia z polecenia. Płot, przecięcie, wybrane krawędzie oraz {{key:Shift}} do wydłużania są opisane w [Przycinanie i wydłużanie](topic:trim-and-extend).

## Wydłuż linię, aby dotknęła innej

{{cmd:EXTEND}} wydłuża koniec linii, łuku lub polilinii, aż dotknie następnego obiektu w tym kierunku.

1. Wpisz `L` i naciśnij {{key:Enter}}.
2. Wpisz `1000,2000` i naciśnij {{key:Enter}}.
3. Wpisz `@2000,0` i naciśnij {{key:Enter}}, a następnie naciśnij {{key:Enter}} ponownie. Linia kończy się 2000 przed prawą ścianą.
4. Wpisz `EX` i naciśnij {{key:Enter}}.
5. Kliknij nową linię blisko jej prawego końca.
6. Naciśnij {{key:Enter}}, aby zakończyć polecenie.

Linia biegnie teraz do wewnętrznej powierzchni prawej ściany. Każdy widoczny obiekt jest granicą; wskaż blisko końca, który ma urosnąć. W {{cmd:TRIM}} to samo daje {{key:Shift}}+kliknięcie.

## Przerywanie i wydłużanie

{{cmd:BREAK}} (`BR`, albo {{ui:Modyfikuj}} › {{ui:Więcej}} › {{ui:Przerwij}}) wycina przerwę bez krawędzi tnącej: kliknij obiekt, w którym zaczyna się przerwa (to kliknięcie jest pierwszym punktem), a następnie kliknij, w którym się kończy. Na okręgu wycinana jest część biegnąca przeciwnie do ruchu wskazówek zegara od pierwszego punktu do drugiego. `F` przy drugim pytaniu pozwala podać pierwszy punkt ponownie, a {{cmd:BREAKATPOINT}} dzieli obiekt na dwa w jednym punkcie, bez przerwy.

{{cmd:LENGTHEN}} (`LEN`) zmienia długość na jednym końcu:

1. Wpisz `LEN` i naciśnij {{key:Enter}}. Kliknij linię, aby zobaczyć jej bieżącą długość; monit pyta ponownie.
2. Wybierz sposób: `DE` (Przyrost: wartość do dodania, ujemna do odjęcia; `A` dla kąta łuku), `P` (Procent: 50 skraca ją o połowę), `T` (Całkowita: długość, jaką ma mieć) albo `DY` (Dynamiczna: przeciągnij koniec).
3. Kliknij każdy obiekt blisko końca, który ma się przesunąć. `U` cofa ostatni; {{key:Enter}} kończy.

Linie, łuki i otwarte polilinie (ich końcowy odcinek) mogą być wydłużane.

## Częste błędy

- **Cała linia zniknęła.** Nic jej nie przecinało, więc tryb szybki ją usunął. Wpisz `U`, aby ją przywrócić; sprawdź, czy linia tnąca naprawdę ją przecina (przybliż) i czy nie leży na wyłączonej warstwie.
- **„Brak granicy w tym kierunku.”** Wydłużanie nie znalazło niczego, na co mogłoby trafić. Wskaż bliżej końca, który ma urosnąć.
- **„Promień jest za duży.”** Łuk przekroczyłby koniec jednej z linii. Użyj mniejszego promienia.
- **„Tylko pierwszy lub ostatni odcinek otwartej polilinii może zostać skrócony.”** Wskaż dwa sąsiednie odcinki polilinii albo wpisz `P`, aby zaokrąglić każdy jej narożnik.
- **Odsunięcie poszło w złą stronę.** Stroną jest miejsce, w które klikasz po wybraniu obiektu. Cofnij przez {{key:Mod+Z}} i kliknij po drugiej stronie.
- **„Nie można odsunąć tak daleko.”** Odsunięcie wywróciłoby łuk, okrąg lub polilinię na lewą stronę. Użyj mniejszej odległości.
