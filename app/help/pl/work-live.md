---
title: Wspólna praca nad jednym rysunkiem w Live TeamWork
summary: Co zmienia się w CadCraft, gdy jesteś w sesji Live TeamWork z CadCraft Studio: kursory i zaznaczenia innych osób, obiekty, które ktoś edytuje, blokady hosta, Twoje własne cofanie oraz dołączanie z przeglądarki w tej samej sieci.
keywords: live, live teamwork, studio live, razem, współpraca, współedycja, sesja, udostępnij na żywo, dołącz, kursor, wstrzymany, edycja, blokada, livelock, liveunlock, livehold, wstrzymaj warstwę, wstrzymaj obszar, kłódka, cofnij, host, asystent, ten sam plik, wiele osób, wolno, limit, kto zmienił, ostatnie zmiany, dziennik edycji
from: 0497d2a3
---

## Czego się nauczysz

Co widzisz i co dzieje się z Twoimi edycjami, gdy kilka osób pracuje nad jednym rysunkiem jednocześnie. CadCraft Studio uruchamia i dołącza do sesji Live TeamWork (Udostępnij na żywo, Dołącz); ta strona dotyczy samego rysunku.

## Wszyscy rysują naraz

Rysuj i edytuj jak zwykle. Twoje własne edycje pokazują się od razu, nawet zanim inni je otrzymają, a ich pojawiają się na Twoim ekranie chwilę po tym, jak je wykonają. Każde polecenie działa: rysowanie, modyfikowanie, warstwy, bloki, arkusze, wymiary, więzy.

Dwie osoby mogą zmienić ten sam obiekt. Gdy zmieniasz różne rzeczy, na przykład kolor i jeden punkt końcowy linii, obie zmiany są zachowane. Gdy zmieniasz tę samą rzecz, wygrywa późniejsza zmiana.

Co zostaje tylko Twoje: bieżąca warstwa, kolor i wysokość tekstu dla nowych obiektów, Twoje ustawienia wymiarowania, Twój widok, podział ekranu i UCS. Rysunek jest wspólny; sposób, w jaki się na niego patrzysz, nie.

## Inni na Twoim rysunku

- **Kursory:** wskaźnik każdej osoby pokazuje się z jej imieniem w jej kolorze oraz polecenie, które uruchomiła. Widzisz kursory osób pracujących w pobliżu tego, co jest na Twoim ekranie.
- **Zaznaczenia:** to, co ktoś zaznaczył, jest obrysowane jego kolorem.
- **Edytowanie:** obiekt, który ktoś zaznaczył, ma etykietę w rodzaju „Ana edytuje”. Nadal możesz zmienić jego kolor albo go przesunąć, ale nie możesz go usunąć, rozbić ani ponownie wpisać, dopóki ta osoba go nie puści. Zaznaczenie go mówi, kto go ma.
- **Kto zmienił go ostatnio:** zaznacz jeden obiekt, który ktoś inny zmienił w tej sesji, a wiersz poleceń powie, kto i co to była za zmiana („Ben zmienił to ostatnio: CIRCLE.”). Panel Live w Studio wypisuje każdą ostatnią edycję pod {{ui:Ostatnie zmiany}}. Nic z tego nie jest zapisywane w rysunku: trwa tyle, ile sesja.

## Wstrzymaj warstwę lub obszar, gdy tam pracujesz

Na dużym rysunku z kilkoma osobami zaznacz, która część jest teraz Twoja:

1. Wpisz `LIVEHOLD` i naciśnij {{key:Enter}}.
2. Wybierz `L` i wpisz nazwę warstwy (Enter zachowuje bieżącą warstwę) albo wybierz `A` i wskaż dwa narożniki obszaru.
3. Edycje innych osób na tej warstwie albo obiektów w tym obszarze są cofane, a oni dostają informację, że tam pracujesz. Twój obszar widzisz jako przerywaną ramkę; inni widzą go w Twoim kolorze z Twoim imieniem, a warstwy, które wstrzymujesz, są wypisane w lewym górnym rogu ich rysunku.
4. `LIVEHOLD`, a potem `R`, zwalnia wszystko, co wstrzymujesz. Opuszczenie sesji też to zwalnia.

Każdy w sesji może wstrzymywać, także host; blokady hosta nadal obowiązują ponad tym. Wstrzymanie nigdy nie jest zapisywane w pliku.

## Gdy edycja zostaje cofnięta

Kopia rysunku u hosta sprawdza każdą edycję. Kilka z nich nie może wejść, więc CadCraft cofa je na Twoim ekranie i mówi, dlaczego, w wierszu poleceń, na przykład:

- ktoś usunął obiekt albo warstwę lub blok, których potrzebuje, tuż przed Tobą;
- ktoś edytuje ten obiekt albo wstrzymał jego warstwę lub obszar, w którym się znajduje;
- host go zablokował;
- blok, który umieszczasz, został usunięty z rysunku, albo warstwa, którą usuwasz, nadal ma na sobie obiekty.

## Cofnij cofa Twoją pracę

{{key:Mod+Z}} i {{ui:Cofnij}} cofają Twoje ostatnie polecenie, w całości, i zostawiają pracę wszystkich innych w spokoju. Gdy ktoś zmienił tę samą rzecz od tego czasu, nic nie zostaje cofnięte, a wiersz poleceń mówi, kto to zmienił. {{key:Mod+Y}} ponawia.

## Blokady (host)

Host może chronić obiekty albo całą warstwę, aby nikt ich nie zmieniał, łącznie z hostem, dopóki nie zostaną odblokowane:

1. Zaznacz obiekty, wpisz `LIVELOCK` i naciśnij {{key:Enter}}. Albo wpisz `LIVELOCK` bez zaznaczenia i wybierz `L`, aby zablokować warstwę po nazwie: obiekty dodane do tej warstwy później też są zablokowane.
2. Zablokowane obiekty są rysowane przerywaną linią z etykietą „Zablokowane przez hosta” na ekranie wszystkich.
3. `LIVEUNLOCK` odblokowuje je w ten sam sposób.

Blokady należą do sesji: kończą się wraz z nią i nigdy nie są zapisywane w pliku.

## Dołącz do tego samego pliku

Jeśli otworzyłeś ten sam plik, który otworzył host (z udostępnionego folderu albo z tej samej kopii), dołącz z własnego okna CadCraft w Studio: otwórz panel {{ui:Live}} i użyj {{ui:Dołącz tutaj}} z kodem hosta. Przesyłane są tylko zmiany wykonane od chwili, gdy host otworzył plik, więc duży rysunek jest gotowy od razu. Jeśli Twój plik jest innym plikiem, rysunek hosta zastępuje go na Twoim ekranie (Twój plik pozostaje bez zmian). Działa to tylko wtedy, gdy Twój rysunek nie został zmieniony od chwili, gdy go otworzyłeś.

## Asystenci w sesji na żywo

Asystent połączony z Twoim oknem CadCraft (zobacz pomoc o pracy z asystentami AI) dołącza do sesji jako własny uczestnik, pokazany wszystkim jako „Asystent (przez <Twoje imię>)”. Host wpuszcza go tak jak osobę; asystent hosta dołącza od razu. Jego zmiany mają własne cofanie: Twoje {{key:Mod+Z}} cofa Twoją pracę, a cofanie asystenta cofa tylko jego własną pracę. Opuszcza sesję, gdy go rozłączysz albo gdy wyjdziesz, i może działać w sesji tylko wtedy, gdy Ty możesz edytować.

## Dołącz z przeglądarki

Współpracownik bez Studio może zeskanować obraz pod kodem hosta telefonem, tabletem lub komputerem w tej samej sieci. CadCraft otwiera się w przeglądarce, prosi o Twoje imię w wierszu poleceń i wypełnia się rysunkiem hosta, gdy host Cię wpuści. Link zaproszenia pozwala komuś dołączyć z innej sieci: host potrzebuje miejsca Team Cloud Plan dla aplikacji, reszta dołącza za darmo, a link działa tylko wtedy, gdy sesja hosta jest otwarta.

## Wiele osób na jednym rysunku

Każda edycja trafia do wszystkich w sesji, więc im więcej osób, tym dłużej każda zmiana dociera do każdej z nich, a wolniejsze laptopy i połączenia zostają w tyle jako pierwsze. Zwykły rozmiar sesji to 20 osób; host może zezwolić na więcej w jednej sesji (zobacz pomoc o wspólnej pracy na żywo). Jeśli rysunek działa wolno przy wielu osobach, pomaga mniej osób, mniej z nich edytujących w tym samym momencie albo lepsze połączenie.

## Gdy sesja się kończy

Tylko host zapisuje rysunek. Gdy host kończy sesję, wszyscy inni zachowują niezapisaną kopię: zapisz ją, jeśli chcesz ją zachować.

:::note
Coś, co zostało cofnięte, jest rysowane na wierzchu obiektów wokół niego na Twoim własnym ekranie, dopóki nie otworzysz rysunku ponownie. Kreskowania i wypełnione obiekty, które się nakładają, mogą wyglądać inaczej niż kopia hosta; sam rysunek jest ten sam.
:::
