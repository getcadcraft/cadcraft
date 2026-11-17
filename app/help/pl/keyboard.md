---
title: Klawiatura i mysz
summary: Każdy klawisz, działanie myszy i klawisz wiersza poleceń w aplikacji rysunkowej CadCraft, tak jak obsługuje je kod.
keywords: klawiatura, skróty, klawisze, mysz, kółko, przesuwanie, powiększanie, prawy przycisk, środkowy przycisk, f3, f7, f8, ctrl, klawisz Command, klawisze skrótów, kopiuj, wytnij, wklej, duplikuj, schowek, zaznacz wszystko
from: a2608a29
---

Skróty są pokazane dla Twojego komputera. Na Macu każdy skrót {{key:Mod}} używa klawisza Command, a klawisz Control także działa. Sposób zapisu klawiszy oraz użycia klawiszy F na Macu opisano w [Klawisze, myszy i gładziki](common:keys).

## Wpisywanie poleceń

| Klawisz | Działanie |
|---|---|
| Dowolna litera, cyfra lub znak | Trafia do wiersza poleceń, bez względu na położenie wskaźnika, chyba że w polu panelu jest kursor |
| {{key:Enter}} | Wysyła wpisany tekst. Przy pustym monicie: powtarza ostatnie polecenie, kończy polecenie, kończy zaznaczanie albo przyjmuje domyślną wartość w `<…>` |
| {{key:Space}} | Działa jak {{key:Enter}}, z wyjątkiem sytuacji, gdy CadCraft pyta o tekst (tekst, nazwy bloków, tekst wymiaru); wtedy wpisuje spację |
| {{key:Esc}} | Anuluje polecenie. Gdy żadne polecenie nie działa: anuluje przesunięcie uchwytu lub ramkę zaznaczania, a potem czyści zaznaczenie |
| {{key:Tab}} | Przyjmuje podpowiedziane polecenie wyświetlone po prawej stronie wiersza poleceń. Gdy nic nie wpisano, a wskaźnik jest nad nakładającymi się obiektami: podświetla kolejny z nich (kliknij, aby go wybrać) |
| {{key:Up}} {{key:Down}} | Przechodzi po wierszach wpisanych wcześniej (ostatnie 100) |

## Rysowanie i edycja

| Klawisz | Działanie |
|---|---|
| {{key:Mod+Z}} | Cofa ostatnie polecenie |
| {{key:Mod+Y}} albo {{key:Mod+Shift+Z}} | Ponawia |
| {{key:Mod+A}} | Zaznacza wszystkie obiekty, które można edytować na otwartej karcie ({{cmd:SELECTALL}}). Jeśli w wierszu poleceń coś wpisano, zaznacza ten tekst |
| {{key:Delete}} | Usuwa zaznaczone obiekty ({{cmd:ERASE}}), chyba że w wierszu poleceń coś wpisano |
| {{key:Backspace}} | Usuwa zaznaczone obiekty, gdy wiersz poleceń nie ma kursora; w wierszu poleceń kasuje wpisany tekst |
| {{key:Esc}} | Gdy żadne polecenie nie działa: czyści zaznaczenie ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Zapisuje kopię w formacie rysunku (DWG lub DXF) |
| {{key:Mod+Shift+S}} | Zapisz jako: wybierz DWG lub DXF, a następnie zapisz kopię |
| {{key:Mod+O}} | Otwiera DWG lub DXF |
| {{key:Mod+P}} | Drukuje do PDF |

Cofanie, ponawianie, zaznaczanie wszystkiego i drukowanie nic nie robią, gdy trwa polecenie: najpierw naciśnij {{key:Esc}}.

## Kopiowanie, wycinanie i wklejanie

| Klawisz | Działanie |
|---|---|
| {{key:Mod+C}} | Kopiuje zaznaczenie do schowka ({{cmd:COPYCLIP}}). Gdy nic nie jest zaznaczone: CadCraft prosi o wskazanie obiektów |
| {{key:Mod+X}} | Wycina: kopiuje zaznaczenie, a potem je usuwa ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Wkleja: kopia podąża za kursorem; kliknij albo wpisz punkt, aby ją umieścić ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Wkleja w miejscu: pod współrzędnymi, z których skopiowano ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplikuje: kopia zaznaczenia podąża za wskaźnikiem; kliknij, aby ją umieścić, {{key:Esc}} nie zostawia nic ({{cmd:DUPLICATE}}) |

Te same działania są w grupie {{ui:Edycja}} na pasku narzędzi ({{ui:Kopiuj}}, {{ui:Wklej}}) oraz w menu {{ui:Więcej}}. Gdy trwa inne polecenie, najpierw je zakończ albo naciśnij {{key:Esc}}; naciśnięcie {{key:Mod+V}} albo {{key:Mod+D}} ponownie, gdy kopia podąża za kursorem, zaczyna od nowa. Gdy w wierszu poleceń coś wpisano albo polecenie pyta o tekst, te klawisze kopiują, wycinają i wklejają ten tekst. Zobacz [Kopiowanie, wklejanie i duplikowanie](topic:copy-paste).

## Przełączniki

| Klawisz | Przełącznik | Przycisk paska stanu |
|---|---|---|
| {{key:F3}} | Przyciąganie do obiektów włączone lub wyłączone | {{ui:Przyciąganie}} |
| {{key:F7}} | Siatka włączona lub wyłączona | {{ui:Siatka}} |
| {{key:F8}} | Orto włączone lub wyłączone | {{ui:Orto}} |
| {{key:F10}} | Śledzenie biegunowe włączone lub wyłączone | {{ui:Biegunowe}} |
| {{key:F11}} | Śledzenie przyciągania do obiektów włączone lub wyłączone | {{ui:Śledzenie}} |
| {{key:F12}} | Wprowadzanie dynamiczne włączone lub wyłączone | {{ui:Dyn}} |

:::mac
Na Macu klawisze F3, F7 i F8 zwykle służą do Mission Control i klawiszy multimedialnych. Przytrzymaj z nimi **fn** albo włącz standardowe klawisze funkcyjne w Ustawieniach systemowych, zgodnie z opisem w [Klawisze, myszy i gładziki](common:keys). Przyciski na pasku stanu działają zawsze.
:::

:::firefox
Firefox przy F7 może zapytać o włączenie przeglądania z kursorem. Wybierz **Nie** i użyj przycisku {{ui:Siatka}}, jeśli pytanie będzie się powtarzać.
:::

## Pomoc

| Klawisz | Działanie |
|---|---|
| {{key:F1}} | Otwiera lub zamyka tę pomoc obok rysunku. Działa także, gdy trwa polecenie, i nigdy nie trafia do wiersza poleceń. |
| {{key:Esc}} | Gdy kursor jest w panelu pomocy: czyści wyszukiwanie albo zamyka panel |

Przycisk {{ui:Pomoc}} na pasku u góry robi to samo co {{key:F1}}. Podczas pisania w polu wyszukiwania pomocy nic nie trafia do wiersza poleceń. Kliknij na rysunku, aby oddać klawisze CadCraft; panel pozostaje otwarty obok.

:::mac
Na klawiaturze Maca przytrzymaj **fn** i naciśnij F1, albo kliknij {{ui:Pomoc}}.
:::

## Ekran

| Klawisz | Działanie |
|---|---|
| {{key:Ctrl+Shift+F}} | Przełącza między trybem normalnym, pełnym ekranem i pełnym ekranem z ukrytymi paskami. Na każdym komputerze, także na Macu, używa klawisza Control. |
| {{key:Left}} {{key:Right}} | Gdy karta pod rysunkiem ma fokus: poprzednia lub następna karta |

Przy pełnym ekranie przeglądarka może użyć pierwszego {{key:Esc}}, aby go opuścić. Naciśnij {{key:Esc}} ponownie, aby anulować polecenie.

## Okna dialogowe

| Klawisz | Działanie |
|---|---|
| {{key:Esc}} | Zamyka okno dialogowe ({{ui:Drukuj do PDF}}) albo pytanie, takie jak „Niezapisane zmiany”, gdzie oznacza {{ui:Anuluj}} |
| {{key:Tab}} | Przechodzi między ustawieniami a przyciskami okna dialogowego |

Gdy okno dialogowe jest otwarte, klawisze rysunku są wyłączone.

## Pola w panelach

W polu prawego lub lewego panelu:

| Klawisz | Działanie |
|---|---|
| {{key:Enter}} | Stosuje wartość i opuszcza pole |
| {{key:Esc}} | Przywraca poprzednią wartość i opuszcza pole |
| {{key:Tab}} | Stosuje wartość i przechodzi do następnego pola |

Gdy w polu jest kursor, litery wpisują się w to pole, a nie w wiersz poleceń.

## Mysz

| Działanie | Co robi |
|---|---|
| Kliknięcie | Wskazuje punkt, gdy polecenie o niego prosi; wskazuje obiekt, gdy prosi o obiekty; w pozostałych przypadkach zaznacza obiekt albo uchwyt |
| Shift+kliknięcie | Usuwa zaznaczony obiekt z zaznaczenia (przy ustawieniu {{ui:Klikanie obiektów}} na {{ui:Zastępuje zaznaczenie}} w [Ustawieniach](topic:settings) dodaje go). Przy wskazywaniu punktu: ignoruje przyciąganie do obiektów dla tego kliknięcia |
| Kliknięcie w puste miejsce, a potem drugie kliknięcie | Ramka zaznaczania: od lewej do prawej to okno, od prawej do lewej to przecięcie |
| Przeciąganie w pustym miejscu | Lasso: ruch najpierw w prawo to okno, najpierw w lewo to przecięcie; {{key:Space}} podczas przeciągania przełącza między oknem, przecięciem i płotem; {{key:Esc}} porzuca je (LASSOMODE 0 albo Ustawienia przywraca prostokąt) |
| Przeciąganie przez fragmenty w TRIM lub EXTEND | Przycina (lub wydłuża) każdy fragment, który przecina ścieżka; przytrzymaj {{key:Shift}}, aby wykonać drugą operację |
| Przeciągnięcie uchwytu | Przesuwa uchwyt (albo kliknij uchwyt, a potem kliknij miejsce docelowe) |
| Dwukrotne kliknięcie tekstu | Zaznacza go i ustawia kursor w jego polu {{ui:Tekst}} w prawym panelu |
| Kliknięcie prawym przyciskiem | Enter. Podczas przesuwania uchwytu lub ramki zaznaczania: anuluje je |
| Przeciąganie prawym przyciskiem | Przesuwa widok |
| Kółko | Przybliża i oddala względem krzyżyka |
| Przeciąganie kółkiem (środkowy przycisk) | Przesuwa widok |
| Dwukrotne kliknięcie kółka | Powiększa do całego rysunku (zasięg) |
| Upuszczenie DWG lub DXF na rysunek | Otwiera go |

Informacje o gładziku i ekranie dotykowym znajdziesz w [Mysz, gładzik i dotyk](topic:mouse-trackpad-touch).

## Klawisze zarezerwowane przez przeglądarkę

{{key:Mod+N}}, {{key:Mod+W}} i {{key:Mod+T}} zawsze należą do przeglądarki. CadCraft z nich nie korzysta: do nowego rysunku użyj {{ui:Nowa}} albo wpisz `NEW`. Schowek CadCraft jest własny: {{key:Mod+C}} i {{key:Mod+V}} kopiują obiekty między rysunkami i kartami CadCraft, a nie do innych programów albo z nich.

:::mac
Jeśli {{key:Mod+Y}} otwiera historię przeglądarki zamiast ponawiania, użyj {{key:Mod+Shift+Z}} albo przycisku {{ui:Ponów}}.
:::

## Gdzie znajduje się przesunięcie

Przesunięcie to polecenie `MOVE` (klawisz {{key:M}}): wskaż obiekty, a potem punkt bazowy i drugi punkt albo wpisaną odległość. Są też `ALIGN` i `DISTRIBUTE`. BimCraft używa tych samych nazw do tych samych zadań na elementach budynku, ale jego {{key:M}} to Pomiar, a jego przesunięcie to {{key:Shift+M}}.
