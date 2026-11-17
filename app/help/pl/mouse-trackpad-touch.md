---
title: Mysz, gładzik i dotyk
summary: Jak przybliżać, przesuwać, klikać prawym przyciskiem i wskazywać w CadCraft za pomocą myszy z kółkiem, gładzika Mac lub PC albo ekranu dotykowego oraz czym różnią się przeglądarki.
keywords: gładzik, touchpad, magic mouse, dotyk, tablet, ipad, przesuwanie, powiększanie, szczypanie, kliknięcie prawym, dwoma palcami, środkowy przycisk, przeglądarka, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft jest zaprojektowany z myślą o myszy z kółkiem. Wszystko działa też z gładzikiem, z kilkoma nawykami do przyswojenia. Ekrany dotykowe nadają się do wskazywania, z ograniczeniami.

## Mysz z kółkiem

- **Powiększanie:** przewijaj kółko. Rysunek powiększa się wokół krzyżyka, więc wskaż to, co chcesz zobaczyć.
- **Przesuwanie:** przytrzymaj kółko i przeciągnij albo przeciągnij prawym przyciskiem.
- **Powiększenie do wszystkiego:** kliknij dwukrotnie kółko albo kliknij {{ui:Zasięg}}.
- **Powrót do poprzedniego widoku:** kliknij {{ui:Poprzedni (P)}} w grupie Widok albo wpisz `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Seria kroków kółka liczy się jako jeden widok, więc jedno {{ui:Poprzedni (P)}} go cofa. Widoki, do których wracasz, zapisz za pomocą {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** kliknięcie prawym przyciskiem.

## Gładzik

:::mac
- **Przesuwanie:** przesuń dwoma palcami po gładziku w dowolnym kierunku: rysunek podąża za palcami. Możesz też przeciągać, przytrzymując kliknięcie dwoma palcami (przeciąganie prawym przyciskiem).
- **Powiększanie:** szczypnij dwoma palcami. Powiększanie podąża za krzyżykiem.
- **Kliknięcie prawym (Enter):** kliknij dwoma palcami. Jeśli nic się nie dzieje, włącz „Kliknięcie dodatkowe” w **Ustawieniach systemowych**, a następnie w **Gładziku**. Kliknięcie z Control może w CadCraft być zwykłym kliknięciem, a nie prawym, dlatego użyj kliknięcia dwoma palcami.
- **Powiększenie do obszaru:** kliknij {{ui:Okno (W)}} w grupie Widok i kliknij dwa rogi.
:::

:::windows linux
- **Przesuwanie:** przesuń dwoma palcami po gładziku w dowolnym kierunku: rysunek podąża za palcami. Możesz też przeciągać, trzymając wciśnięty prawy przycisk.
- **Powiększanie:** szczypnij dwoma palcami. Powiększanie podąża za krzyżykiem.
- **Kliknięcie prawym (Enter):** kliknij dwoma palcami albo kliknij prawy dolny róg gładzika, zależnie od ustawień gładzika.
- **Powiększenie do obszaru:** kliknij {{ui:Okno (W)}} w grupie Widok i kliknij dwa rogi.
:::

Przytrzymanie {{key:Space}} i przeciąganie **nie** przesuwa widoku w CadCraft: {{key:Space}} to Enter.

Kółko myszy nadal powiększa, krok po kroku. Gładzik, który wysyła przewijanie w pełnych krokach, jak kółko, powiększa przewijaniem dwoma palcami zamiast przesuwać: oddal widok, wskaż obszar, który chcesz zobaczyć, i przybliż ponownie. Karta 3D zachowuje własne ruchy gładzika (zobacz [Model w 3D](topic:3d-solids#look-around)).

## Ekrany dotykowe i tablety

CadCraft traktuje palec jak kliknięcie myszą:

- Stuknięcie wybiera punkt lub obiekt albo zaznacza.
- Przeciągnięcie palcem po pustym miejscu rysuje lasso (w prawo najpierw okno, w lewo najpierw przecięcie; zobacz [Zaznaczanie lasso](topic:lasso-selection)).
- W {{cmd:TRIM}} i {{cmd:EXTEND}} przeciągnięcie palcem po fragmentach przycina lub wydłuża je wszystkie.
- Przeciągnięcie uchwytu zaznaczonego obiektu przesuwa uchwyt (uchwyty i pole wyboru są dla palca większe).
- **Szczypnij** dwoma palcami, aby powiększyć wokół punktu między nimi; przesuń dwa palce razem, aby **przesunąć** widok. Drugi palec anuluje to, co zaczął pierwszy, więc szczypnięcie nigdy nie zostawia śladu.
- **Długie przytrzymanie** (trzymaj nieruchomo około pół sekundy) to kliknięcie prawym: {{key:Enter}}. Kończy polecenie, kończy zaznaczanie albo powtarza ostatnie polecenie.

Pod wierszem poleceń pojawia się **rząd klawiszy**: {{ui:Esc}}, {{ui:Cofnij}}, {{ui:Ponów}}, znaki, które ukrywa klawiatura tabletu (`@` `,` `<` `'` `"` `-`), {{ui:Przyciąganie}}, {{ui:Orto}}, przycisk klawiatury i duży {{ui:Enter}}. Stuknij przycisk klawiatury (albo wiersz poleceń), aby wpisać polecenie lub liczbę.

Nie ma najechania kursorem, więc znaczniki przyciągania pojawiają się tylko tam, gdzie jest palec.

:::touch
Korzystasz z ekranu dotykowego. Do czegokolwiek więcej niż szybki podgląd klawiatura oraz mysz lub gładzik znacznie ułatwiają pracę w CadCraft.
:::

## Przeglądarki

CadCraft działa tak samo w Chrome, Edge, Firefox i Safari, na Macu, w Windows i Linuksie. Różnice są niewielkie:

| Temat | Co warto wiedzieć |
|---|---|
| Otwieranie DWG | Duże rysunki odczytują się przez kilka sekund w każdej przeglądarce; w tym czasie wiersz stanu pokazuje „Odczytywanie …” |
| Pobieranie | Każda przeglądarka decyduje, dokąd trafiają pliki i czy najpierw zapytać; zobacz [Przeglądarki i komputery](common:browsers) |
| Otwórz do wydruku | Otwiera PDF w nowej karcie. Jeśli przeglądarka blokuje wyskakujące okna, CadCraft pobiera zamiast tego PDF |
| F7 | Firefox może zaproponować przeglądanie z kursorem; wybierz Nie |
| Wyjście z niezapisanymi zmianami | Każda przeglądarka pokazuje własne pytanie „Opuścić witrynę?”, którego CadCraft nie może zmienić |

:::safari
W Safari PDF otwarty przyciskiem {{ui:Otwórz do wydruku}} może pokazać się w karcie bez drukowania: użyj **Plik**, a następnie **Drukuj**.
:::

:::firefox
Firefox może pytać, co zrobić z każdym pobieraniem. Wybierz zapis pliku albo zmień to raz w ustawieniach przeglądarki Firefox w sekcji Pobrane.
:::
