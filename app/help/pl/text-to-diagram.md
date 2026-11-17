---
title: Rysowanie diagramu z tekstu
summary: Wklej schemat przepływu Mermaid, schemat komponentów PlantUML, D2, listę od-do lub XML draw.io, a CadCraft rozmieści bloki i łączniki, które możesz edytować jak każde inne obiekty.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, model lokalny, diagram, schemat przepływu, mermaid, plantuml, d2, od do, lista od-do, schemat blokowy, łączniki, tekst na diagram, DIAGRAM, TEXTDIAGRAM, schemat systemowy, schemat połączeń, rurociągi, csv
from: b26af54b
---

Wpisz {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Otworzy się okno: wklej tekst, wybierz {{ui:Rysuj}}, wskaż lewy górny róg diagramu i podaj wysokość tekstu. CadCraft odczytuje tekst, układa bloki warstwami z łącznikami pod kątem prostym i rysuje je na warstwie o nazwie `Diagram`. Nowe obiekty są zaznaczone, więc możesz je od razu przesunąć. Są to zwykłe obiekty: zmienisz tekst bloku poleceniem {{cmd:TEXTEDIT}}, rozciągniesz łącznik jego uchwytami, usuniesz blok lub dodasz własne linie. Jedno {{cmd:UNDO}} usuwa cały diagram.

Przy wierszu poleceń, bez okna, tekst może mieć jedną linię, z `;` między poleceniami: `flowchart LR; A[Pompa] --> B[Zbiornik]`.

## Co jest odczytywane

| Tekst | Co jest odczytywane |
|---|---|
| **Mermaid** `flowchart` lub `graph` z `TD`, `TB`, `BT`, `LR` lub `RL` | `A`, `A[tekst]`, `A(tekst)`, `A([tekst])`, `A{tekst}` (decyzja, rysowana jako romb), tekst w cudzysłowie, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, etykieta jako `-->|tekst|` lub `-- tekst -->`, łańcuchy `A --> B --> C`, grupy `A & B --> C`, `<br/>` jako nowa linia, komentarze `%%` |
| **PlantUML** między `@startuml` a `@enduml` (komponenty i wdrożenia) | `[Komponent]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` i inne z nazwami `as`, `A --> B : etykieta`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: etykieta`, `a <- b`, `a <-> b`, `a -- b`, łańcuchy, `a: Etykieta`, `direction: right`, nazwy w cudzysłowie, komentarze `#` |
| **Lista od-do** (tabela wklejona jako tekst lub CSV) | kolumny `from`, `to` i opcjonalnie `label` oraz `type` (`dashed` rysuje łącznik przerywany), w dowolnej kolejności, rozdzielone przecinkami, średnikami lub tabulatorami; bez wiersza nagłówka pierwsze trzy kolumny to from, to, label |

| **XML draw.io** (tekst pliku `.drawio`, `<mxfile>` lub `<mxGraphModel>`) | pola, zaokrąglone pola, elipsy, romby decyzji i zwykły tekst; pola kontenerów i tory pływania (rysowane przerywanie z tytułem); łączniki z punktami załamania, końcówkami strzałek (`endArrow`, `startArrow`) i `dashed=1`; etykiety HTML stają się zwykłym tekstem, działają `<UserObject label>` i `<object label>` |

Wszystko inne w wierszu (style, notatki, ramki pętli) jest pomijane, a wiersz poleceń podaje, ile wierszy pominięto. Diagram może mieć najwyżej 400 bloków i 1200 łączników.

## XML draw.io zachowuje położenia

Pozostałe języki opisują tylko, co z czym jest połączone, więc CadCraft je rozmieszcza. XML draw.io już zawiera położenia wszystkich elementów, więc CadCraft je zachowuje: każdy blok stoi tam, gdzie wskazuje plik, przeskalowany tak, że czcionka 12 pikseli staje się wysokością tekstu, którą podasz (pole 120 na 60 pikseli to 60 na 30 jednostek rysunku przy wysokości 6). Lewy górny róg diagramu trafia w róg, który wskażesz. Łączniki biegną od krawędzi jednego bloku do krawędzi następnego, przez swoje punkty załamania; łącznik z `orthogonalEdgeStyle` bez punktów dostaje jedno załamanie pod kątem prostym.

Domyślny zapis draw.io jest skompresowany. Okno i wiersz poleceń otwierają go same; narzędzie asystenta w oknie bez strumienia kompresji to zgłosi, a `Plik › Eksportuj jako › XML` z odznaczonym *Skompresowany* daje zwykły XML. Obrazy, łączniki z luźnym końcem i drugie strony są pomijane i zliczane.

## Tworzenie z modelem na komputerze

Model lokalny (Ollama, LM Studio, llama.cpp, Jan) może napisać XML lub tekst Mermaid na podstawie zawartości PDF-a lub SVG, a wynik trafia przez to samo okno albo bezpośrednio do rysunku, gdy model jest połączony jako asystent: `diagram_from_text` przyjmuje `format` `drawio`. Małe modele częściej błądzą w XML niż w Mermaid lub liście od-do, więc pierwsza próba w Mermaid jest tańsza; to, czego czytnik nie zrozumie, jest pomijane i zliczane, a nie zgadywane. Modele połączeń znajdziesz w temacie Połącz swojego asystenta AI.

## Jak jest układany

Bloki idą warstwami zgodnie z łącznikami (łącznik zapętlony wraca w górę), uporządkowane tak, by ograniczyć przecięcia, z łącznikami pod kątem prostym, które wychodzą od dołu bloku i wchodzą w górę następnego; `LR` i `RL` zamieniają warstwy w kolumny. Podana wysokość tekstu determinuje rozmiar wszystkiego.

## Podgrafy i diagramy sekwencji

- Mermaid `subgraph nazwa [Tytuł]` … `end` rysuje przerywaną ramkę z tytułem wokół swoich bloków; podgrafy mogą być zagnieżdżone. Układ nie trzyma innych bloków poza ramką, więc zabłąkany blok przesuń jego uchwytami.
- Mermaid `sequenceDiagram` lub tekst PlantUML z liniami `participant` i komunikatami `->` jest rysowany jako bloki u góry, z przerywaną linią życia pod każdym i jednym wierszem na komunikat. `-->` i `-->>` są przerywane, `->>` i `-)` mają grot strzałki, `autonumber` numeruje komunikaty, a komunikat do samego siebie zapętla się. Notatki oraz ramki `loop` i `alt` są pomijane.

## Symbole dla diagramów jednoliniowych i rurociągów

Blok może być narysowanym symbolem z nazwą pod nim zamiast pola. Nazwij symbol w tekście:

| Tekst | Jak |
|---|---|
| Mermaid | `P1[Pompa zasilania]:::pump-cf` lub linia `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` lub `P1: Pompa zasilania { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Lista od-do | kolumny `from_symbol` i `to_symbol` |

Nazwy to symbole P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` i reszta biblioteki P&ID) oraz zestaw Elektryczny (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` i tak dalej). Nazwa wspólna dla dwóch zestawów trafia do zestawu P&ID; przed nią wpisz `pid:` lub `el:`, aby wybrać. Nieznana nazwa jest pomijana i zliczana. Symbole są rysowane jako zwykłe linie, okręgi i łuki na warstwie `Diagram`, przeskalowane do wysokości tekstu; nie są blokami dodatków z oznaczeniami, więc do rysunku roboczego użyj poleceń P&ID lub Elektryczne.

Asystenci AI mogą to samo, przez narzędzie `diagram_from_text` w oknie.
