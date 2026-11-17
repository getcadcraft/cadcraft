---
title: Kopiowanie, wklejanie i duplikowanie
summary: Kopiuj obiekty do schowka CadCraft, wklejaj je w miejscu kliknięcia lub w ich własnych współrzędnych, duplikuj wskaźnikiem i przenoś pracę z innego rysunku albo karty.
keywords: kopiuj, wytnij, wklej, wklej w miejscu, duplikuj, schowek, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, między rysunkami, inna karta, punkt bazowy
from: 4b9f29d3
---

## Czego się nauczysz

Jak kopiować obiekty do schowka i wklejać je w miejscu kliknięcia, wklejać je w ich własnych współrzędnych, duplikować wskaźnikiem, wycinać i przenosić do innego rysunku. Wszystko to jest też w grupie {{ui:Edycja}} na pasku narzędzi: {{ui:Kopiuj}}, {{ui:Wklej}} i menu {{ui:Więcej}}.

## Kopiowanie i wklejanie w miejscu kliknięcia

1. Zaznacz obiekty: kliknij je albo przeciągnij okno.
2. Naciśnij {{key:Mod+C}} albo kliknij {{ui:Kopiuj}} w grupie {{ui:Edycja}}. Wiersz poleceń podaje, ile obiektów skopiowano. Pozostają zaznaczone.
3. Naciśnij {{key:Mod+V}} albo kliknij {{ui:Wklej}}. Kopia pojawia się przy kursorze, zwisając z lewego dolnego narożnika skopiowanych obiektów.
4. Kliknij, gdzie ma trafić ten narożnik, albo wpisz punkt, np. `2000,500`, i naciśnij {{key:Enter}}. Przyciąganie do obiektów i {{ui:Orto}} działają jak zwykle.

Wklejone obiekty są zaznaczone, więc możesz je od razu przesunąć lub zmienić. Jedno {{key:Mod+Z}} cofa całe wklejenie.

:::tip
Chcesz, aby kopia zwisała z wybranego punktu, na przykład z narożnika ściany? Wpisz `COPYBASE`, kliknij punkt bazowy, zaznacz obiekty i naciśnij {{key:Enter}}. Wklejanie umieści wtedy ten punkt tam, gdzie klikniesz. Aby każda kopia zwisała ze swojego środka zamiast z lewego dolnego narożnika, zmień {{ui:Punkt wklejenia}} w [ustawieniach CadCraft](topic:settings).
:::

## Wklejanie w miejscu

Naciśnij {{key:Mod+Shift+V}} albo wybierz {{ui:Wklej w miejscu}} w menu {{ui:Więcej}}. Kopia trafia dokładnie w te współrzędne, z których została skopiowana, bez kliknięcia. Użyj tego, by przenieść obiekty do innego rysunku w to samo miejsce albo z arkusza na inny arkusz.

## Duplikowanie i przesuwanie

1. Zaznacz obiekty.
2. Naciśnij {{key:Mod+D}} albo wybierz {{ui:Duplikuj i przesuń}} w menu {{ui:Więcej}}.
3. Kopia leży na oryginale i porusza się razem ze wskaźnikiem. Kliknij, gdzie ma trafić. Możesz też wpisać przemieszczenie, np. `@0,-600`, albo odległość w stronę kursora.

{{key:Esc}} przed kliknięciem nie zostawia nic. Duplikat to jeden krok cofnięcia i nie zmienia schowka.

## Wycinanie

Naciśnij {{key:Mod+X}} albo wybierz {{ui:Wytnij}} w menu {{ui:Więcej}}. Obiekty trafiają do schowka i są usuwane z rysunku w jednym kroku cofnięcia. Wklej je z powrotem za pomocą {{key:Mod+V}} lub {{key:Mod+Shift+V}}.

## Między rysunkami i kartami

Schowek zachowuje swoją kopię, gdy otwierasz inny rysunek, i jest wspólny dla każdej karty CadCraft w tej przeglądarce. Skopiuj w jednej karcie, a potem naciśnij {{key:Mod+V}} w innej.

- Bloki używane przez obiekty przychodzą razem z nimi. Jeśli rysunek, do którego wklejasz, ma już blok o tej samej nazwie, używana jest jego własna definicja, tak jak w AutoCAD.
- Warstwy używane przez obiekty są dodawane, z kolorem i ustawieniami, jakie miały.
- Kopia nie jest przeskalowana, gdy dwa rysunki mają różne jednostki: CadCraft o tym informuje, a potem możesz użyć {{cmd:SCALE}}.
- Okna widokowe zostają na swoim arkuszu; są pomijane w kopii.

:::note
Schowek jest własny dla CadCraft. Nie możesz wkleić obiektów CadCraft do innego programu ani wkleić z innego programu do CadCraft: zapisz jako DWG lub DXF. Bardzo duża kopia może być zbyt duża, by ją udostępnić między kartami; wiersz poleceń wtedy mówi tylko, że wkleić ją może tylko ta karta.
:::

## Częste błędy

- **{{key:Mod+V}} wkleiło tekst do wiersza poleceń.** Coś tam wpisałeś, więc klawisze działały na tekście. Naciśnij {{key:Esc}}, aby wyczyścić, a potem ponownie {{key:Mod+V}}.
- **Nic się nie stało, a pasek stanu każe dokończyć bieżące polecenie.** Działa inne polecenie. Najpierw naciśnij {{key:Esc}}.
- **Wklejenie wylądowało daleko.** Wisi z lewego dolnego narożnika tego, co skopiowano, co może być odległym obiektem zaznaczonym przez przypadek. Użyj {{ui:Wklej w miejscu}} albo kopiuj poleceniem `COPYBASE`.
- **„Nic nie wklejono” z podaniem przyczyny.** To, co inna karta zostawiła w schowku, nie dało się odczytać (było uszkodzone albo zmienione ręcznie). Skopiuj obiekty ponownie.

Pełną listę klawiszy znajdziesz w [Klawiatura i mysz](topic:keyboard), a każdą podpowiedź w [Dokumentacji poleceń](topic:commands#clipboard).
