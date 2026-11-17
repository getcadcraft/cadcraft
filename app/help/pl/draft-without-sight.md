---
title: Rysowanie bez wzroku
summary: Włącz Dostęp, a CadCraft przez czytnik ekranu odczyta każde polecenie i wynik, opisze rysunek i to, co jest blisko kursora, pozwoli przesuwać kursor klawiaturą, odtworzy dźwięk dla każdego przyciągania i uchwytu oraz przyjmie polecenia głosowe, o ile przeglądarka potrafi to robić na Twoim komputerze.
keywords: dostępność, czytnik ekranu, niewidomy, słabowidzący, NVDA, VoiceOver, JAWS, Orca, kursor klawiaturowy, polecenia głosowe, mowa, dźwięki, dźwięki przyciągania, opisz rysunek, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Dostęp** pozwala rysować bez patrzenia na ekran. Jest wyłączony, dopóki go nie włączysz, więc nikt nie dostanie go przypadkiem.

## Włączanie

Otwórz **Ustawienia** (koło zębate lub Ctrl+,), znajdź **Rysowanie bez wzroku** i wybierz **Włącz**. Możesz też wpisać `ACCESS` w wierszu poleceń i odpowiedzieć `On`. Ustawienie jest zapamiętywane na tym komputerze.

Przy włączonym Dostępie:

- **Wszystko, co mówi wiersz poleceń, jest odczytywane** przez czytnik ekranu: co wpisałeś, o co program pyta, odpowiedź i każdy błąd. CadCraft używa własnych regionów na żywo (grzecznych i pilnych), więc czytnik ekranu, który odczytuje regiony na żywo, nie wymaga żadnej konfiguracji. Błędy i anulowania przerywają; reszta czeka na swoją kolej.
- **Obszar rysunku jest dostępny.** Naciskaj Tab, aż usłyszysz „Rysunek”, albo naciśnij Shift+Tab z wiersza poleceń. To region, który przekazuje klawisze do CadCraft.

## Klawisze na rysunku

| Klawisz | Co robi |
|---|---|
| Klawisze strzałek | Przesuwają kursor klawiaturowy. Krok to około setnej części tego, co pokazuje ekran, zaokrąglonej do 1, 2 lub 5. Shift przesuwa dziesięć razy dalej, Ctrl dziesiątą część. |
| Enter | Wskazuje punkt pod kursorem, dokładnie tak jak kliknięcie. |
| Space | Naciska Enter w wierszu poleceń: kończy LINE, przyjmuje wartość domyślną. |
| Tab, Shift+Tab | Przechodzi do następnego lub poprzedniego punktu przyciągania w pobliżu kursora, od najbliższego. |
| G | Przechodzi przez uchwyty zaznaczonych obiektów. |
| D | Opisuje rysunek: ile obiektów, jakiego rodzaju, jak duże, co jest zaznaczone. |
| W | Mówi, gdzie jest kursor i jak daleko jest od ostatniego punktu. |
| N | Mówi, co jest blisko kursora, od najbliższego, z odległością i stroną. |
| S | Opisuje zaznaczone obiekty. |
| R | Powtarza ostatnio powiedzianą rzecz. |
| V | Włącza lub wyłącza głos. |
| / | Przechodzi do wiersza poleceń. |
| ? | Wymienia te klawisze. |

Przesuwając klawiszami, słyszysz, gdzie wylądowałeś. Gdy polecenie czeka na punkt, mówi też, jak daleko i w którą stronę jesteś od ostatniego punktu, na przykład „2400 od ostatniego punktu, w prawo, pod kątem 0 stopni”.

## Polecenia

- {{cmd:ACCESS}} włącza lub wyłącza Dostęp, dźwięki przyciągania i głos, i mówi stan.
- {{cmd:DESCRIBE}} mówi, co zawiera rysunek.
- {{cmd:WHEREAMI}} mówi, gdzie jest kursor.
- {{cmd:NEARBY}} mówi, co leży blisko kursora.
- {{cmd:SAYSEL}} mówi, co jest zaznaczone, jedno zdanie na obiekt.
- {{cmd:VOICE}} włącza lub wyłącza polecenia głosowe.

Tych pięć poleceń odczytuje rysunek i wypisuje odpowiedź; nic nie zmieniają.

## Dźwięki przyciągań i uchwytów

Włącz **Dźwięki przyciągania i uchwytów** w Ustawieniach. Każdy rodzaj przyciągania ma własną wysokość i dźwięk, dzięki czemu odróżnisz koniec od punktu środkowego, środka, przecięcia i pozostałych, a uchwyt ma podwójne stuknięcie. Dźwięk przesuwa się w lewo lub w prawo, zgodnie z kursorem na ekranie. Dźwięki są generowane na Twoim komputerze; nic nie jest pobierane.

## Polecenia głosowe

Włącz **Polecenia głosowe** w Ustawieniach. Powiedz nazwę polecenia („line”, „circle”, „move”), a potem liczby tak, jak je czytasz: „punkt trzysta przecinek czterysta”, „odległość dwanaście setek”, „kąt czterdzieści pięć”. „Enter”, „cancel”, „undo” i „redo” robią to, co mówią. Usłyszane słowa są powtarzane na głos, a wypowiedź, która nie jest poleceniem, jest zgłaszana, a nie zgadywana.

**Gdzie rozpoznawana jest mowa.** CadCraft nie ma własnej usługi mowy i nie wysyła nigdzie dźwięku. Prosi przeglądarkę o rozpoznanie mowy na tym komputerze. Jeśli przeglądarka potrafi to zrobić, wybór to **Na tym komputerze** i żaden dźwięk nie opuszcza komputera. Jeśli nie potrafi, głos pozostaje wyłączony, chyba że wybierzesz **Usługa online przeglądarki**, która pozwala przeglądarce wysyłać dźwięk do usługi mowy jej producenta. Ustawienia mówią, które rozwiązanie obowiązuje, zanim podejmiesz decyzję.

## Czego to jeszcze nie robi

- Dostęp jest tylko w CadCraft. Pozostałe siedem aplikacji dostanie go później, z tymi samymi klawiszami i dźwiękami.
- Tekst w rysunku (notatka, nazwa bloku) jest odczytywany tak, jak jest napisany; nigdy nie jest traktowany jako polecenie.
- Funkcja została sprawdzona testami syntetycznymi i testami przeglądarki. Ręczne sprawdzenie z NVDA, VoiceOver oraz z testerem niewidomym lub słabowidzącym jest jeszcze przed nami. Jeśli spróbujesz, daj nam znać, czego brakuje.
