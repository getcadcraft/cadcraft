---
title: Podziel ekran
summary: Pokaż rysunek w dwóch, trzech lub czterech oknach, każde z własnym powiększeniem, umieść arkusz obok modelu i otwórz kilka rysunków obok siebie.
keywords: podział, podziel ekran, okna, vports, viewports, kafelki, mozaika, obok siebie, jeden nad drugim, dwa rysunki, karty, karty dokumentów, porównanie, separator, model i arkusz, kilka rysunków, otwarte rysunki
from: ee2f034b
---

## Czego się nauczysz

Jak oglądać jeden rysunek w kilku oknach naraz, każdym z własnym powiększeniem, oraz jak otworzyć kilka rysunków i zobaczyć je obok siebie.

## Podziel jeden rysunek na okna

1. Otwórz rysunek lub narysuj kilka linii i okręgów.
2. Otwórz {{ui:Widok}} › {{ui:Więcej}} i wybierz {{ui:Podziel obok siebie}} (lub wpisz {{cmd:VPORTS}}, potem `2`, potem {{key:Enter}}).

Obszar rysunku dzieli się na dwa okna, oba pokazujące ten sam widok. Aktywne okno ma niebieską ramkę i otrzymuje krzyżyk.

3. Wskaż w drugim oknie. Staje się ono aktywne. (To pierwsze kliknięcie tylko przełącza okna; kliknij ponownie, aby wskazać.)
4. Powiększaj kółkiem myszy. Powiększa się tylko to okno.
5. Przeciągnij linię między oknami, aby jedno poszerzyć. {{key:Home}} na zaznaczonym separatorze ustawia go z powrotem na środku.

{{cmd:VPORTS}} przyjmuje też `3` (dwa okna po jednej stronie i duże po drugiej: `L` lub `R`), `4` oraz `SI`, aby znów mieć jedno okno. Widok aktywnego okna wypełnia wtedy obszar. Na arkuszu {{cmd:VPORTS}} zamiast tego dodaje okno widokowe do arkusza (jak w AutoCAD); wpisz tam {{cmd:SPLIT}} albo użyj menu {{ui:Widok}}.

## Rysuj z jednego okna do drugiego

1. Podziel obok siebie i powiększ każde okno na inny narożnik rysunku.
2. Wpisz `L` i naciśnij {{key:Enter}}, a w lewym oknie wskaż pierwszy punkt.
3. Wskaż raz w prawym oknie, aby je aktywować, a potem wskaż tam drugi punkt.

Linia biegnie między dwoma miejscami. Polecenie trwa dalej, gdy zmieniasz okna, a gumka pokazuje się w każdym oknie.

## Model obok arkusza

1. Podziel obok siebie.
2. Wskaż prawe okno, a potem wskaż zakładkę arkusza pod rysunkiem.

Prawe okno pokazuje arkusz; lewe nadal pokazuje model. Każde okno zachowuje własną przestrzeń, więc można rysować na modelu i obserwować, jak podąża za nim okno widokowe arkusza.

## Kilka rysunków w jednym oknie

1. Otwórz rysunek. Następnie otwórz kolejny (lub naciśnij {{ui:Nowa}}).

Każdy rysunek otwiera się we własnej karcie nad obszarem rysunku. Wskaż kartę, aby przełączyć; wiersz poleceń, panele i cofanie podążają za rysunkiem, na który się przełączono. {{key:Mod+C}} w jednym rysunku i {{key:Mod+V}} w innym kopiuje obiekty między nimi.

2. Wskaż {{ui:Ułóż otwarte rysunki obok siebie}} (ikona podziału na końcu kart) lub ikonę ułożenia w stos obok niej.

Każde okno pokazuje teraz jeden z otwartych rysunków, najwięcej cztery. Wskaż okno, aby pracować w tym rysunku.

3. Wskaż {{ui:×}} na karcie, aby zamknąć ten rysunek. Jeśli ma niezapisane zmiany, CadCraft najpierw zapyta.

:::tip
Otwarcie rysunku, gdy okno zawiera tylko nowy, nietknięty rysunek, używa tej karty zamiast dodawać nową.
:::

## Przesuwanie i powiększanie razem

Aby porównać dwie wersje, ułóż je obok siebie, a następnie wskaż {{ui:Połącz widoki okienek}} (ikona łącza na końcu kart), lub wybierz ją w {{ui:Widok}} › {{ui:Więcej}}, albo wpisz {{cmd:LINKVIEWS}} i `ON`. Teraz przesunięcie lub powiększenie w jednym oknie przenosi każde okno pokazujące model (lub każde okno pokazujące arkusz) w to samo miejsce, dzięki czemu oba rysunki pozostają ustawione w jednej linii. {{cmd:LINKVIEWS}} `OFF` pozwala każdemu oknu znów przesuwać się niezależnie.

## Częste błędy

- **Kliknięcie nic nie zrobiło.** Aktywowało ono to okno. Wskaż ponownie, aby wybrać lub narysować.
- **Kółko powiększyło niewłaściwe okno.** Kółko powiększa okno pod wskaźnikiem i je aktywuje.
- **Okna wróciły do jednego.** Otwarcie rysunku pokazuje go tak, jak został zapisany; rysunek zapisany bez okien otwiera się w jednym oknie.
- **Opuszczenie strony ostrzega o niezapisanych zmianach, których nie widać.** Inna karta zawiera rysunek ze zmianami. Przełącz się na nią i zapisz albo wyjdź bez zapisywania.
