---
title: Menu, klawisze i mysz
summary: Wybierz styl menu pasujący do sposobu, w jaki już pracujesz, przypisz poleceniu własny klawisz lub klawisz wpisujący polecenie, przenoś polecenia między kartami wstążki i ustaw, co robi kółko i przyciski myszy.
keywords: styl menu, menu, wstążka, pasek narzędzi, wiersz poleceń, skróty klawiszowe, klawisze szybkie, klawisze, dostosuj, przemapuj, przypisz ponownie, skróty, klawisze tekstowe, mysz, kółko, odwróć, kierunek zoomu, przycisk środkowy, przycisk prawy, przesuń, eksport, import, przełączanie, znajomy, klasyczne rysowanie
from: 8bbf4f88
---

Polecenia CadCraft są takie same, niezależnie od tego, jak do nich dotrzesz, a wiersz poleceń jest zawsze dostępny wraz ze swoimi aliasami (`L`, `C`, `TR` …). **Styl menu** decyduje tylko o tym, gdzie na ekranie leżą przyciski, jak się nazywają i jakie klawisze je uruchamiają. Wybierz go w {{ui:Ustawienia}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menu, klawisze i mysz}}; zmiana działa od razu, a ta przeglądarka ją zapamiętuje.

## Trzy style

| Styl | Co dostajesz |
|---|---|
| {{ui:CadCraft}} | Własny pasek narzędzi CadCraft: Plik, Rysuj, Modyfikuj, Adnotacje, Parametryczne, Bloki, Arkusze, Edycja i Widok, każdy z menu {{ui:Więcej}}. Punkt wyjścia. |
| {{ui:Klasyczne rysowanie}} | Wstążka ułożona tak jak w klasycznych programach kreślarskich 2D: menu {{ui:Plik}} i szybkie przyciski, a następnie karty {{ui:Start}} (Rysuj, Modyfikuj, Adnotacje, Warstwy, Bloki, Właściwości, Narzędzia, Schowek), {{ui:Wstaw}}, {{ui:Adnotacje}}, {{ui:Parametryczne}}, {{ui:Widok}}, {{ui:Zarządzaj}}, {{ui:Wyjście}} i {{ui:3D}}. Polecenia wpisuj jak zawsze. Przycisk środkowy przesuwa widok; kliknięcie prawym przyciskiem to {{key:Enter}}, a przeciąganie prawym przyciskiem nic nie robi. |
| {{ui:Wstążka}} | Wstążka prostych kart zadań: {{ui:Rysuj}}, {{ui:Modyfikuj}}, {{ui:Adnotacje}}, {{ui:Parametryczne}}, {{ui:Bloki}}, {{ui:Arkusze}}, {{ui:Widok}}, {{ui:3D}} i {{ui:Narzędzia}}, z menu {{ui:Plik}} i szybkimi przyciskami po prawej. Przycisk środkowy i prawy przesuwają widok, tak jak we własnym stylu CadCraft. |

Każdy styl zachowuje klawisze CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, a także {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} dla narzędzi pomocniczych rysowania. Litery nigdy nie są klawiszami: CadCraft wpisuje je w wierszu poleceń.

Wstążki zawierają też narzędzia panelu Warstwy oraz narzędzia pomocnicze rysowania z paska stanu. Karta {{ui:3D}} wypełnia się po otwarciu karty 3D pod rysunkiem; narzędzie 3D wybrane na karcie Model najpierw otwiera kartę 3D, a narzędzie 2D wybrane na karcie 3D najpierw wraca do karty Model.

:::tip
Klawisz należący do układu CadCraft, który Twój styl przypisał innemu poleceniu, nic nie robi, a pasek stanu pokazuje, gdzie trafiło jego polecenie („W Moich klawiszach Orto to Ctrl+Alt+O”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strzałki zawsze zachowują swoje znaczenie. Gdy polecenie działa lub gdy w wierszu poleceń wpisywane są litery, klawisze należą do wiersza poleceń.
:::

## Dostosuj po swojemu

1. Wybierz styl najbliższy temu, czego chcesz, a następnie kliknij {{ui:Dostosuj…}}.
2. Na karcie {{ui:Klawisze i menu}} znajdź polecenie (pomaga pole wyszukiwania). Kliknij {{ui:Dodaj klawisz}} i naciśnij klawisz. Kliknij klawisz, aby go usunąć.
3. Przy wstążce {{ui:Gdzie jest}} przenosi polecenie na inną kartę i panel, do menu {{ui:Plik}} albo do opcji {{ui:Tylko klawisze}}.
4. W sekcji {{ui:Mysz}} ustaw kółko i przyciski, które przesuwają rysunek.
5. Nadaj mu nazwę i kliknij {{ui:Zapisz}}.

Zapisanie wbudowanego stylu tworzy Twoją własną kopię („Moje Klasyczne rysowanie”); wbudowany styl nigdy się nie zmienia. Klawisz przypisany do dwóch poleceń jest pokazany na czerwono i musi zostać poprawiony, zanim będzie można zapisać.

## Klawisze wpisujące polecenie

{{cmd:SHORTCUTS}} (Widok › Więcej › {{ui:Skróty klawiszowe…}}) przypisuje klawiszowi cały wiersz poleceń, na przykład {{key:Ctrl+Alt+L}} dla `LINE` lub {{key:F9}} dla `ZOOM E`. Te klawisze należą do używanego stylu: gdy ta wersja otwiera się po raz pierwszy, klawisze, które utworzyłeś w starszej wersji, są przeniesione do Twojego własnego stylu „Moje klawisze CadCraft”, jednorazowo, i działają jak wcześniej. Eksport stylu zabiera je ze sobą.

## Mysz

- **Kółko myszy**: {{ui:Przewinięcie w górę powiększa}} (punkt wyjścia) lub {{ui:Przewinięcie w górę pomniejsza}}, oraz jak szybko. Szczypnięcie na gładziku zawsze powiększa w kierunku, w którym poruszają się palce.
- **Przesuwanie rysunku za pomocą**: przycisku środkowego, przycisku prawego lub obu. Kliknięcie prawym przyciskiem bez przeciągania to zawsze {{key:Enter}}. Lewy przycisk zawsze wskazuje i rysuje w CadCraft, więc jego zaznaczenie tutaj nic nie zmienia.
- **Przeciąganie w widokach 3D**: karta 3D zachowuje własne przyciski w każdym stylu (lewy obraca, środkowy i prawy przesuwają).

## Zabierz ze sobą

{{ui:Eksportuj}} zapisuje używany styl jako mały plik `.ccinput.json`; {{ui:Importuj…}} dodaje taki plik, z innego komputera lub od kolegi. Zaimportowany plik może wskazywać tylko polecenia CadCraft: wszystko inne w nim jest pomijane i zliczane w pasku stanu. {{ui:Usuń ten styl}} usuwa jeden z Twoich własnych stylów.

:::note
Te ustawienia zostają w tej przeglądarce. {{ui:Używaj tego stylu we wszystkich aplikacjach}} pod kartami stylów sprawia, że każda aplikacja otwiera się w odpowiednim stylu (własny pasek narzędzi, wstążka lub Klasyczne rysowanie), z zmianami, które wprowadziłeś w każdej aplikacji. CadCraft nie ma stylu z paskiem menu: gdy pasek menu innej aplikacji zostanie wybrany dla wszystkich aplikacji, CadCraft zachowuje własny pasek narzędzi.
:::

Powiązane: [Klawiatura i mysz](topic:keyboard) · [Ustawienia CadCraft](topic:settings) · [Przejście z innego oprogramowania kreślarskiego](topic:coming-from) · [Aliasy poleceń](topic:command-aliases)
