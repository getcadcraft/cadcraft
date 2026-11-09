---
title: Co nowego w wersjach 0.8 i 0.8.1
summary: Duch, który dokańcza rysunek, szkice piórem i zdjęcia szkiców zamienione na geometrię, arkusze, które same się układają, detale proponowane podczas rysowania, GRIDMOVE i AUTODIM, etykiety, pliki przyjazne scalaniu, uwagi zamienione na rewizje, rysowanie bez wzroku, limity rysunku, azymuty, czcionki SHX, diagramy z tekstu oraz poprawki w 0.8.1.
keywords: co nowego, what's new, informacje o wydaniu, dziennik zmian, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, autouzupełnianie, duch, tab, sketchfix, photosketch, autosheet, detale, gridmove, autodim, etykiety, rewizja, scalanie, git, fossil, dostępność, rysowanie bez wzroku, czytnik ekranu, limity, azymuty, aunits, shx, diagram, ole, historia, porównanie, słowami, właściwości, stopy i cale, rozciąganie, języki, urządzenia wejściowe, problemy, live, asystenci
from: 9dd82db5
---

To, co zmieniło się w CadCraft 0.8 i 0.8.1 w porównaniu z 0.7. Wersja 0.8 (1 listopada 2026) dodaje pomocniki rysunku, które działają na podstawie samego rysunku, według reguł na komputerze i bez modelu, a 0.8.1 (2 listopada 2026) naprawia błędy zgłoszone po jej wydaniu.

## Nowe

### Rysunek, który dokańcza myśl

- **Duch pokazuje, co będzie dalej.** Gdy nie działa żadne polecenie, szara przerywana zjawa pokazuje, co według wzorców samego rysunku następuje dalej: kolejny słupek w tym samym rozstawie, kolejny stopień schodów, brakująca ściana pomieszczenia. Naciśnij {{key:Tab}}, aby narysować ją jako jeden krok cofnięcia, albo {{key:Esc}}, aby ją ukryć. Duch patrzy tylko na najnowsze obiekty, dzięki czemu pozostaje płynny nawet na dużym rysunku. Wyłącz go w {{ui:Settings}} › {{ui:CadCraft}} lub poleceniem {{cmd:AUTOCOMPLETE}} `Off`.
- **Następny punkt podczas rysowania linii.** W trakcie {{cmd:LINE}} lub {{cmd:PLINE}} duch wskazuje następny punkt: kolejny stopień schodów, czwarty narożnik prostokąta albo punkt, który go zamyka. Przysuń kursor w jego pobliże i naciśnij {{key:Tab}}, tak jakby kliknięto w tym miejscu.
- **Szkice piórem stają się precyzyjną geometrią.** {{cmd:SKETCHFIX}}: narysuj szkicowe kreski piórem, myszą lub palcem, a każda zamieni się w czystą linię, okrąg, łuk, prostokąt lub polilinię, przyciągniętą do tego, co już narysowano. Zobacz [Szkicuj piórem i uzyskaj precyzyjną geometrię](topic:sketch-with-a-pen).
- **Zdjęcie szkicu staje się rysunkiem.** {{cmd:PHOTOSKETCH}} (`PSK`) znajduje kartkę na zdjęciu, prostuje perspektywę, nadaje podany format papieru i skalę, po czym przenosi linie pióra na warstwę dla każdego koloru pióra. Napisy nie są przenoszone.
- **Wymiarowanie według reguł.** {{cmd:AUTODIM}} (`ADIM`) tworzy łańcuchy wymiarów wzdłuż wybranych boków, wymiar gabarytowy, szerokości otworów, średnice otworów, a z opcją `Grid` także rozstaw siatki. Nigdy nie powtarza wymiaru, który już istnieje.
- **Przesuń linię siatki, a zestaw pójdzie za nią.** {{cmd:GRIDMOVE}} (`GM`): ściany kończące się na linii siatki rozciągają się razem z nią, ściany leżące wzdłuż niej, kolumny, jej znacznik i etykieta się przesuwają, a wymiary na niej mierzą nowy rozstaw. Jeden krok cofnięcia.

### Arkusze, detale i etykiety

- **Arkusze, które same się układają.** {{cmd:AUTOSHEET}} bierze widoki nazwane (lub osobne części modelu), dobiera format papieru i standardową skalę, a widoki umieszcza na nowych arkuszach z tabliczką rysunkową i podpisem z nazwą i skalą. Wszystko pozostaje edytowalne. Zobacz [Ułóż arkusze za mnie](topic:lay-out-sheets-for-me).
- **Detale firmy, proponowane podczas rysowania.** {{cmd:DETAILS}} (`DET`) przechowuje własne bloki detali. Gdy zaznaczenie pasuje do któregoś z nich według słów w nazwach warstw, nazw bloków i notatek, pasek stanu o tym informuje; wybierz go i umieść. {{cmd:DETAILS}} › Udostępnij zapisuje listę w folderze Dokumenty i wczytuje to, co dodał zespół. {{ui:Settings}} wyłącza propozycje.
- **Etykiety na blokach.** {{cmd:TAGS}} definiuje etykietę (jej rodzaj, wartości, jakie może przyjmować, bloki, których dotyczy), ustawia ją na zaznaczonych odwołaniach do bloków i wypisuje je jako zestawienie, które można zapisać jako CSV. Definicje są przechowywane w DWG. Zobacz [Etykiety](topic:tags).
- **Limity rysunku.** {{cmd:LIMITS}} ustawia prostokąt dla rysunku: siatka go wypełnia, a zoom Wszystko go pokazuje. Limity widać jako zarys i są zapisywane w DWG i DXF wraz z limitami papieru. Zobacz [Ustaw limity rysunku](topic:drawing-limits).

### Praca z innymi osobami i innymi programami

- **Adnotacja zamieniona w rewizję.** {{cmd:REDLINE}} czyta paczkę, którą zapisuje MarkupCraft, i wypisuje każdą zmianę. Każdą można przyjąć lub odrzucić z notatką; przyjęte dostają chmurę rewizji i dziennik rewizji w jednym kroku cofnięcia, a plik odpowiedzi, który zamyka adnotacje w MarkupCraft, zapisuje się ręcznie. Zobacz [Zamień adnotację w rewizję](topic:redline-to-revision).
- **Rysunki, które git i Fossil potrafią scalić.** Po włączeniu {{ui:Merge-friendly files}} w {{ui:Settings}} › {{ui:CadCraft}} każdy obiekt dostaje klucz, który się nie zmienia (pliki są około 10 procent większe). `cadcraft merge base ours theirs` scala wtedy zmiany dwóch osób w jednym pliku DWG lub DXF obiekt po obiekcie i zgłasza tylko miejsca, w których obie osoby zmieniły to samo. Zobacz [Scal zmiany dwóch osób w jednym rysunku](topic:merge-drawings).
- **Co się zmieniło, słowami.** W Historii polecenie Porównaj daje zwykłą listę: gdzie coś się zmieniło, jak duże są miejsca, co dodano, usunięto lub zmieniono oraz edytowany tekst. Zobacz [Opisz słowami, co się zmieniło](topic:changes-in-words).
- **Azymuty i kąty.** Wpisz kierunek jako azymut geodezyjny, na przykład N45°23'30"E, albo w stopniach, minutach i sekundach, wszędzie tam, gdzie pytają o kąt; AUNITS ustala sposób pokazywania kątów. Zobacz [Wpisz i pokaż azymuty i kąty](topic:bearings-and-angles).
- **Własne czcionki SHX.** Wskaż CadCraft folder z czcionkami SHX, a style tekstu, które je nazywają, będą rysowane tymi czcionkami, na ekranie i w wydrukach. Zobacz [Rysuj tekst własnymi czcionkami SHX](topic:shx-fonts).
- **Diagram z tekstu.** {{cmd:DIAGRAM}} czyta diagram przepływu Mermaid, diagram komponentów PlantUML, D2 lub listę od–do i rysuje bloki oraz łączniki, które można edytować. Zobacz [Narysuj diagram z tekstu](topic:text-to-diagram).
- **Obiekty OLE w DWG.** {{cmd:OLELIST}} wypisuje obiekty OLE, które zawiera plik DWG, a CadCraft nie potrafi umieścić ich sam, i umieszcza kopię obrazka w miejscu wskazanym przez użytkownika. Zobacz [Obrazy](topic:pictures#objects-from-other-programs-ole).
- **Obliczenia zostają z rysunkiem.** Arkusze obliczeń i uzasadnienia projektowe są przechowywane w DWG wraz z tabelą klas.

### Rysowanie bez wzroku

- Włącz {{ui:Drafting without sight}} w {{ui:Settings}} (albo wpisz {{cmd:ACCESS}} i odpowiedz `On`). CadCraft odczytuje przez czytnik ekranu każde polecenie i wynik, opisuje rysunek i to, co znajduje się przy kursorze, pozwala przesuwać kursor i wskazywać punkty klawiaturą, a dla każdego przyciągnięcia i uchwytu odtwarza dźwięk. Tam, gdzie przeglądarka potrafi rozpoznawać mowę na komputerze, polecenia można wypowiadać. Zobacz [Rysuj bez wzroku](topic:draft-without-sight).

### We wszystkich aplikacjach

- **Języki.** 54 języki; dziesięć jest nowych (litewski, łotewski, bośniacki, marathi, telugu, albański, afrikaans, filipiński, suahili, uzbecki). Języki inne niż angielski są wersjami roboczymi, dopóki nie przeczyta ich rodzimy użytkownik języka.
- **Urządzenia wejściowe.** Gładzik, pióro, mysz 3D, kontroler gier i sterowanie MIDI.
- **Wiersze paska narzędzi i siatka właściwości.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} oferuje Zawijaj, 2 wiersze lub 1 wiersz w pozostałych aplikacjach. CadCraft ma własne ustawienie w {{ui:Settings}} › {{ui:CadCraft}} (zobacz [Wiersze paska narzędzi](topic:settings#toolbar-rows)). Wspólna siatka właściwości znajduje się w trzech innych aplikacjach, nie w CadCraft.
- **Problemy, Live i dodatki.** Wspólny panel Problemy, który ostrzega we wszystkich aplikacjach, widok Live pokazujący, kto gdzie jest w CadCraft Studio (zobacz [Pracuj nad jednym rysunkiem razem](topic:work-live)), oraz lista dodatków.
- **Podłącz AI.** Jedno połączenie z CadCraft Studio do wszystkich ośmiu aplikacji, z poziomem tylko do odczytu, sugestii lub edycji dla każdej aplikacji oraz zrozumiałym dziennikiem tego, co zrobił asystent. CadCraft nie ma własnej AI, a Zapytaj we wszystkich aplikacjach korzysta z AI, którą podłączono.

## Naprawiono w 0.8.1

- **Właściwości pokazywały 150 zamiast 12'-6"** w rysunkach w stopach i calach. Pola, które aplikacja odczytuje sama, znów zachowują swój tekst.
- **Pliki DWG, których sekcja klas była odczytywana jako zły typ** (GitHub cadcraft#5), otwierają się teraz poprawnie.
- **Krzyżyk nie pokazuje się już za wyskakującymi oknami.**
- **Studio i spakowane wydania mogą zmieniać język w czasie działania.** Wcześniej były wyłącznie angielskie. Nie sprawdzono tego jeszcze na każdej platformie; zgłoś, jeśli język się nie zmienia.
- **Tablety w orientacji pionowej** oddają płótnu wolną wysokość siatki, a tryb arkuszy startuje przy 760 px lub mniej.
- **STRETCH z oknem przecięcia oraz LIMITS** zgłoszono w Studio 0.8.0, a w kompilacji webowej 0.8 już działały poprawnie; instalator zgłaszającego był starszy. Studio 0.8.1 zawiera te poprawki.

## Jeszcze nie w tej wersji

- **0.8 i 0.8.1 nie są podpisane certyfikatem kodu.** System Windows może ostrzegać (wybierz {{ui:More info}}, a następnie {{ui:Run anyway}}); na Macu kliknij prawym przyciskiem myszy CadCraft Studio i wybierz {{ui:Open}}. Wersje do sklepów są wstrzymane, a wersja na iPada i iPhone'a nie została przebudowana dla 0.8.1.
- **Szkice piórem i zdjęcia szkiców** były testowane tylko na wymyślonych zdjęciach i myszy, jeszcze nie z prawdziwym piórem, ekranem dotykowym ani ręcznym szkicem na papierze.
- **Rysowanie bez wzroku** było testowane automatycznymi sprawdzeniami, jeszcze nie z czytnikiem ekranu ani z niewidomym testerem.
- **Udostępnianie detali** nie miało sprawdzenia przez dwie osoby, a folder Team Cloud Plan jako folder Dokumenty nie jest zbudowany.
- **Scalanie** działa dla plików DWG i DXF CadCraft; dla plików innych aplikacji nie jest zbudowane.
- **Cofanie między oknami:** CadCraft zgłasza każdy zakończony krok, ale Studio nie ma jeszcze jednego polecenia Cofnij dla wszystkich aplikacji; każda aplikacja cofa własne kroki.
- **Obiekty OLE w DWG** są zachowywane, ale nie są rysowane w miejscu.
- **Odczyt tabel stylów wydruku (pliki CTB)** z innych programów jest zbudowany, ale nie sprawdzono go na pliku z innego programu.
- **Podłącz AI:** połączenie jednym kliknięciem w Studio, hostowany łącznik dla AI w przeglądarce, własny klucz API w Studio i opublikowany pakiet MCP nie są w tym wydaniu obiecane.

Wcześniejszą wersję opisuje [Co nowego w 0.7](topic:whats-new-0-7).
