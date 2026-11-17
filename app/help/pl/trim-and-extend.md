---
title: Przycinanie i wydłużanie
summary: Przycinaj linie tam, gdzie przecinają je inne, i wydłużaj je, aż dotkną innych, po jednym kawałku naraz albo wielu naraz, przeciągając przez nie ścieżkę.
keywords: trimextendmode, przeciąganie okna, przytnij, wydłuż, tr, ex, szybkie przycinanie, przeciąganie, odręcznie, ścieżka, płot, przecięcie, shift, krawędzie tnące, krawędzie graniczne, edgemode, tryb, standardowy, szybki, usuń, podgląd, ściany, czyszczenie
from: 25fbc5bd
---

## Czego się nauczysz

Jak działają {{cmd:TRIM}} i {{cmd:EXTEND}} oraz szybkie sposoby ich użycia: przeciągnij przez wiele kawałków naraz, przytrzymaj {{key:Shift}}, aby przełączać między przycinaniem a wydłużaniem, i zobacz, co zniknie, zanim klikniesz.

## Przytnij jeden kawałek

1. Narysuj długą poziomą linię i dwie krótkie linie przecinające ją.
2. Wpisz `TR` i naciśnij {{key:Enter}}. Historia mówi: `Bieżące ustawienia: Tryb szybki, krawędzie: bez wydłużania`.
3. Ustaw wskaźnik na długiej linii między dwiema krótkimi. Ten kawałek zmienia kolor na szary i przerywany: to właśnie zniknie.
4. Kliknij. Kawałek znika.
5. Naciśnij {{key:Enter}}, aby zakończyć polecenie.

W trybie szybkim (domyślnym) każdy widoczny obiekt jest krawędzią tnącą, więc nigdy nie wybierasz krawędzi wcześniej. Kliknij kawałek, który ma zniknąć. Obiekt, którego nic nie przecina, jest usuwany w całości, a historia o tym mówi.

## Przytnij wiele kawałków jednym przeciągnięciem

1. Narysuj długą poziomą linię i dziesięć krótkich pionowych linii przecinających ją.
2. Wpisz `TR` i naciśnij {{key:Enter}}.
3. Naciśnij przycisk myszy nad długą linią, na lewo od pierwszej pionowej linii, i przeciągnij przez wszystkie dziesięć nad długą linią.

Podczas przeciągania ścieżka pokazuje się jako linia przerywana, a każdy przecięty kawałek zmienia kolor na szary. Puść: wszystkie dziesięć górnych kawałków jest przyciętych w jednym kroku. Wpisz `U` i naciśnij {{key:Enter}}, aby przywrócić je wszystkie naraz.

:::tip
Możesz też kliknąć dwa puste miejsca: linia między nimi działa jak przeciągnięta ścieżka. Wpisz `F` (Płot), aby zamiast tego klikać serię punktów, a potem naciśnij {{key:Enter}}.
:::

:::touch
Przeciągnij palcem w ten sam sposób. Stuknięcie w kawałek go przycina.
:::

## Wydłuż zamiast tego, z Shift

1. Narysuj pionową linię i pięć krótkich poziomych linii po jej lewej stronie, kończących się przed nią.
2. Wpisz `TR` i naciśnij {{key:Enter}}.
3. Przytrzymaj {{key:Shift}}. Ustaw wskaźnik na krótkiej linii: część, o którą by się wydłużyła, pokazuje się szara i przerywana.
4. Nadal trzymając {{key:Shift}}, przeciągnij w dół przez pięć krótkich linii.

Wszystkie pięć sięga teraz do pionowej linii. {{key:Shift}} działa odwrotnie w {{cmd:EXTEND}} (`EX`): kliknięcie wydłuża, a kliknięcie z {{key:Shift}} przycina. Wydłużenie przedłuża koniec najbliższy miejsca kliknięcia lub miejsca, w którym ścieżka przecina linię.

## Przycinanie wewnątrz okna

1. Wpisz `TR` i naciśnij {{key:Enter}}.
2. Wpisz `C` i naciśnij {{key:Enter}}.
3. Kliknij dwa narożniki wokół kawałków do usunięcia.

Każdy kawałek leżący choć częściowo wewnątrz okna jest przycinany.

Aby uzyskać okno samym przeciąganiem, bez wpisywania `C`: {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Przeciąganie przy przycinaniu i wydłużaniu}} ›
{{ui:Okno}}. Wtedy naciśnięcie na puste miejsce i przeciągnięcie rysuje prostokąt, a każdy dotknięty kawałek zostaje przycięty (albo wydłużony,
w {{cmd:EXTEND}} lub z {{key:Shift}}). {{ui:Ścieżka}} (ustawienie domyślne) przywraca odręczną ścieżkę. Wiersz ustawień na początku TRIM mówi, które jest włączone.

## Wybierz krawędzie tnące (tryb standardowy)

Czasem tylko jedna linia powinna tnąć, na przykład lico ściany, które przecina wiele innych linii.

1. Wpisz `TR` i naciśnij {{key:Enter}}.
2. Wpisz `O` (tryb) i naciśnij {{key:Enter}}, potem wpisz `S` (Standardowy) i naciśnij {{key:Enter}}.
3. Przy `Wybierz krawędzie tnące` kliknij linie krawędzi (albo przeciągnij okno), a potem naciśnij {{key:Enter}}. Naciśnięcie {{key:Enter}} bez niczego zaznaczonego sprawia, że każdy obiekt jest krawędzią.
4. Kliknij lub przeciągnij przez kawałki do usunięcia.

Tną tylko wybrane krawędzie, a obiekt, którego żadna krawędź nie przecina, zostaje w spokoju. Tryb zostaje do zamknięcia strony; wpisz `O`, a potem `Q`, aby wrócić do Szybkiego. {{cmd:TRIMEXTENDMODE}} ustawia go przed rozpoczęciem, tak jak zmienna o tej nazwie w innych miejscach: `0` Standardowy, `1` Szybki. `T` (cuTting edges) wybiera nowe krawędzie w dowolnym momencie; w {{cmd:EXTEND}} jest to `B` (Boundary edges).

## Krawędzie, które by sięgnęły

1. Wpisz `TR` i naciśnij {{key:Enter}}.
2. Wpisz `E` (Edge) i naciśnij {{key:Enter}}, potem `E` (Extend) i naciśnij {{key:Enter}}.

Teraz linia lub łuk tnący, który urywa się za wcześnie, liczy się tak, jakby biegł dalej: krótka linia tnie tam, gdzie przecięłaby, gdyby była dłuższa. Wpisz `E`, a potem `N` (No extend), aby wrócić. To to samo co EDGEMODE 1 i 0.

## Usuń bez wychodzenia

Wpisz `R` (eRase) i naciśnij {{key:Enter}}, wskaż obiekty do usunięcia i naciśnij {{key:Enter}}. TRIM działa dalej.

## Częste błędy

- **Cała linia zniknęła.** W trybie szybkim obiekt, którego nic nie przecina, jest usuwany. Wpisz `U`, aby go przywrócić, albo przełącz na tryb standardowy (`O`, `S`).
- **„Nic do przycięcia w tym miejscu: żadna wybrana krawędź nie przecina tego obiektu.”** Tryb standardowy tnie tylko w wybranych krawędziach. Wpisz `T`, aby wybrać je ponownie.
- **„Brak granicy w tym kierunku.”** Wydłużanie nie znalazło nic przed sobą. Kliknij bliżej końca, który ma urosnąć, albo włącz `E` (Edge, Extend) dla granic, które urywają się za wcześnie.
- **Przeciągnięcie narysowało lasso.** Przeciąganie przycina tylko wtedy, gdy TRIM lub EXTEND czeka na obiekt. Bez uruchomionego polecenia przeciągnięcie zaznacza (patrz [Zaznaczanie lassem](topic:lasso-selection)).
- **Przycinać można tylko linie, łuki, okręgi i polilinie.** Najpierw rozbij blok, aby przyciąć jego linie.
