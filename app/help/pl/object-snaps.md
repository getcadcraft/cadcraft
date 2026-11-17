---
title: Przyciąganie do punktów na obiektach
summary: Używaj przyciągania do obiektów, orto i siatki, aby myszą wskazywać dokładne końce, punkty środkowe, środki i przecięcia.
keywords: osnap, przyciąganie do obiektów, koniec, punkt środkowy, środek, przecięcie, prostopadła, ćwiartka, najbliższy, węzeł, wstawienie, orto, siatka, f3, f8, f7, śledzenie biegunowe, biegunowe, polarang, śledzenie przyciągania, otrack, śledzenie, f10, f11
from: 3cf17f94
---

## Co wykonasz

Prostokąt z jego dwiema przekątnymi, okrąg wycentrowany tam, gdzie się przecinają, oraz linia od środka jednego boku do okręgu. Każdy punkt wskazujesz myszą, a każdy punkt jest dokładny.

## Jak działa przyciąganie

Gdy polecenie prosi o punkt, CadCraft szuka punktów przyciągania w odległości około 10 pikseli od krzyżyka. Gdy jakiś znajdzie, pojawia się znacznik i etykieta („Koniec”, „Przecięcie”), a kliknięcie trafia **dokładnie** w ten punkt, a nie tam, gdzie jest krzyżyk.

Przyciąganie jest włączone, gdy {{ui:Przyciąganie}} na pasku stanu jest wciśnięte. {{key:F3}} je włącza i wyłącza.

Dostępne przyciągania to:

| Przyciąganie | Trafia w |
|---|---|
| Koniec | Końce linii, łuków i odcinków polilinii |
| Punkt środkowy | Środek linii, łuków i odcinków polilinii |
| Środek | Środek okręgów i łuków oraz odcinków łukowych polilinii |
| Ćwiartka | Punkty 0, 90, 180 i 270 stopni okręgów i łuków |
| Przecięcie | Miejsce, w którym krzyżują się dwa obiekty |
| Prostopadła | Punkt na obiekcie prostopadłym do ostatniego punktu (wymaga punktu bazowego) |
| Styczna | Punkt na okręgu lub łuku, którego linia od ostatniego punktu tylko dotyka. Bez ostatniego punktu (pierwszy punkt linii) znacznik mówi „odroczone”: punkt styczności jest wyliczany, gdy znany jest następny punkt, więc linia od Styczna do Styczna dotyka obu okręgów |
| Najbliższy | Najbliższy punkt dowolnego obiektu |
| Węzeł | Obiekty punktowe |
| Wstawienie | Punkt wstawienia tekstu i odwołań do bloków |

Wszystkie są domyślnie włączone oprócz Styczna i Najbliższy. Najbliższy często wygrywa, gdy chcesz czegoś innego; włącz Styczna, gdy go potrzebujesz.

## Wybierz przyciągania

1. Kliknij małą strzałkę obok {{ui:Przyciąganie}} na pasku stanu. Otworzy się lista {{ui:Przyciąganie do obiektów}}.
2. Zaznacz lub odznacz przyciągania. Zmiany działają od razu.
3. Kliknij strzałkę ponownie, aby zamknąć listę.

CadCraft zapamiętuje Twój wybór oraz ustawienia {{ui:Siatka}}, {{ui:Orto}} i {{ui:Przyciąganie}} w tej przeglądarce.

## Kroki

1. Wpisz `REC` i naciśnij {{key:Enter}}.
2. Wpisz `0,0` i naciśnij {{key:Enter}}.
3. Wpisz `@4000,3000` i naciśnij {{key:Enter}}. Pojawia się prostokąt.
4. Kliknij {{ui:Zasięg}}.
5. Wpisz `L` i naciśnij {{key:Enter}}.
6. Przesuń krzyżyk na lewy dolny róg. Znacznik pokazuje „Koniec”. Kliknij.
7. Przesuń do prawego górnego rogu, aż pokaże się „Koniec”. Kliknij.
8. Naciśnij {{key:Enter}}, aby zakończyć linię.
9. Naciśnij {{key:Enter}} ponownie, aby powtórzyć {{cmd:LINE}}, i narysuj drugą przekątną z prawego dolnego rogu do lewego górnego w ten sam sposób.
10. Wpisz `C` i naciśnij {{key:Enter}}, aby zacząć okrąg.
11. Przesuń krzyżyk tam, gdzie przekątne się przecinają. Znacznik pokazuje „Przecięcie”. Kliknij.
12. Wpisz `800` i naciśnij {{key:Enter}}.

Powinien być widoczny okrąg wycentrowany dokładnie na przecięciu.

13. Wpisz `L` i naciśnij {{key:Enter}}.
14. Przesuń na środek lewego boku prostokąta, aż pokaże się „Punkt środkowy”. Kliknij.
15. Przesuń krzyżyk na okrąg, po jego lewej stronie. Znacznik pokazuje „Prostopadła” lub „Ćwiartka”; tutaj to ten sam punkt. Kliknij.
16. Naciśnij {{key:Enter}}.

Nowa linia biegnie od środka lewego boku i zatrzymuje się dokładnie na okręgu.

## Pomiń przyciąganie dla jednego kliknięcia

Przytrzymaj {{key:Shift}} podczas klikania. Przyciąganie do obiektów jest wtedy ignorowane dla tego kliknięcia, a punkt trafia dokładnie w krzyżyk (albo wzdłuż kierunku Orto, jeśli Orto jest włączone).

## Orto

{{ui:Orto}} ({{key:F8}}) utrzymuje następny punkt prosto w poprzek lub prosto w górę i w dół od punktu bazowego. Dotyczy kliknięć i bezpośredniego wprowadzania odległości (gołej liczby wpisanej przy monicie). Przyciąganie do obiektów wygrywa z Orto: jeśli pokazuje się znacznik przyciągania, kliknięcie idzie do przyciągania.

## Śledzenie biegunowe

{{ui:Biegunowe}} ({{key:F10}}) to Orto pod większą liczbą kątów. Gdy polecenie ma punkt bazowy (ostatni punkt linii, punkt bazowy przesunięcia), wskaźnik ustawia się w linii, gdy zbliży się do promienia biegnącego od niego pod wielokrotnością kroku biegunowego: pojawia się przerywana linia, a etykieta przy krzyżyku pokazuje `Biegunowe: 1200 < 30°`. Kliknij, aby użyć tego punktu, albo wpisz odległość: `1200` przechodzi dokładnie 1200 wzdłuż promienia.

Krok wynosi 90° do momentu zmiany: wpisz {{cmd:POLARANG}}, naciśnij {{key:Enter}} i wpisz `30` (albo 45, 22.5, 15 …). Biegunowe i Orto wykluczają się wzajemnie: włączenie jednego wyłącza drugie.

## Śledzenie przyciągania do obiektów

{{ui:Śledzenie}} ({{key:F11}}) ustawia wskaźnik w linii z punktami przyciągania, na których się zatrzymałeś, dzięki czemu możesz wskazać punkt na poziomie jednego rogu i nad innym, bez rysowania pomocniczych linii.

1. Włącz {{ui:Przyciąganie}} i {{ui:Śledzenie}}, i rozpocznij polecenie proszące o punkt (`L`).
2. Zatrzymaj wskaźnik na punkcie przyciągania, takim jak róg, na pół sekundy, bez klikania. Mały krzyżyk go oznacza: zostaje pozyskany. Zatrzymaj się na nim ponownie, aby go zwolnić.
3. Przesuń wskaźnik prosto od niego, poziomo lub pionowo. Przerywana linia podąża za wskaźnikiem, a etykieta pokazuje `Śledzenie: 600 < 90°`. Kliknij albo wpisz odległość.
4. Pozyskaj drugi punkt i przesuń do miejsca, gdzie pionowa przechodząca przez jeden spotyka się z poziomą przechodzącą przez drugi: wskaźnik przyciągnie się do tego przecięcia (`Śledzenie: gdzie spotykają się dwie linie`).

Gdy {{ui:Biegunowe}} też jest włączone, pozyskane punkty śledzą pod każdym kątem biegunowym. Zachowywanych jest do siedmiu punktów, aż do zakończenia polecenia. {{key:Shift}} wyłącza śledzenie na jedno kliknięcie, tak jak przyciąganie.

## Siatka

{{ui:Siatka}} ({{key:F7}}) pokazuje siatkę linii za rysunkiem, z grubszymi liniami co piątą linię; odstęp zmienia się wraz z powiększeniem. Jest tylko pomocą, dopóki nie włączysz {{ui:Przyciąganie do siatki}} ({{key:F9}}): wtedy kliknięcia trafiają w najbliższy punkt siatki, chyba że przyciąganie do obiektu zabierze punkt pierwsze.

## Klawisze funkcyjne na Twoim komputerze

{{key:F9}} to Przyciąganie do siatki, {{key:F10}} to Biegunowe, a {{key:F11}} to Śledzenie.

:::mac
Na Mac klawisze F3, F7, F8 i F9 zwykle sterują Mission Control i multimediami. Przytrzymaj **fn** wraz z klawiszem albo włącz standardowe klawisze funkcyjne, jak opisano w [Klawisze, myszy i gładziki](common:keys). Przyciski na pasku stanu zawsze działają.
:::

:::firefox
W Firefoksie F7 to także klawisz przeglądania z kursorem. Jeśli Firefox zapyta, czy włączyć przeglądanie z kursorem, wybierz **Nie**. Użyj przycisku {{ui:Siatka}}, jeśli pytanie wraca.
:::

:::touch
Na ekranie dotykowym nie ma najechania kursorem, więc znacznik przyciągania pojawia się tylko tam, gdzie dotknie palec. Przybliż mocno dla małych celów albo wpisz współrzędne.
:::

## Typowe błędy

- **Kliknięcie trafiło w zły punkt.** Przed kliknięciem spójrz na etykietę znacznika: Koniec wygrywa z Punktem środkowym, gdy oba są blisko. Przybliż albo odznacz przyciągania, których nie potrzebujesz.
- **Nie pojawia się znacznik.** {{ui:Przyciąganie}} jest wyłączone, albo przyciąganie, którego chcesz, jest odznaczone, albo obiekt leży na warstwie wyłączonej lub zamrożonej.
- **Przyciągania łapią niewłaściwy obiekt w zatłoczonym rysunku.** Przybliż. Odległość przyciągania mierzy się w pikselach ekranu, więc przybliżenie zmniejsza ją w rysunku.
- **Oczekiwanie, że Shift da prostą linię.** W CadCraft Shift wyłącza przyciąganie na jedno kliknięcie. Do prostych linii użyj {{ui:Orto}}.
- **Oczekiwanie, że punkty trafią w punkty siatki.** Włącz {{ui:Przyciąganie do siatki}} ({{key:F9}}) albo wpisz współrzędne dla okrągłych liczb.
