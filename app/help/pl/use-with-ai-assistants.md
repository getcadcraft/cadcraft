---
title: Używanie CadCraft z asystentem AI
summary: Pozwól swojemu asystentowi AI lub skryptowi pracować z CadCraft: co może robić, jak połączyć dowolnego klienta MCP i jak zachowujesz kontrolę (uprawnienia, cofanie, dziennik aktywności, Rozłącz).
keywords: ai, asystent, agent, mcp, model context protocol, skrypt, automatyzacja, wiersz poleceń, cli, json, token, uprawnienia, rozłącz, aktywność, foldery, ścieżki, svg, wsadowo
from: 06ba4ef6
---

## Czego się nauczysz

Jak pozwolić asystentowi AI (albo napisanemu przez Ciebie skryptowi) obejrzeć rysunek, uruchamiać polecenia CadCraft, drukować i zapisywać, oraz jak decydować, czego może dotykać.

CadCraft **nie ma własnej AI** i niczego nigdzie nie wysyła. Asystenta przynosisz sam: dowolny program, który mówi w protokole Model Context Protocol (MCP). CadCraft udostępnia mu tylko narzędzia, a Ty wybierasz, które.

Są dwa sposoby:

- **Rysunek, który masz otwarty.** Asystent pracuje w tym oknie, obok Ciebie, przez CadCraft Studio na Twoim komputerze. Do tego służy {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Asystenci}}.
- **Rysunki na komputerze, bez otwierania aplikacji.** Serwer MCP CadCraft i wiersz poleceń `cadcraft` odczytują i zapisują pliki DWG i DXF w folderach, które wskażesz. Zobacz „Praca na plikach bez otwierania CadCraft” poniżej.

## Włączanie

1. Otwórz {{ui:Ustawienia}} (koło zębate na pasku aplikacji lub {{key:Mod+,}}) i przejdź do karty {{ui:CadCraft}}.
2. W sekcji {{ui:Asystenci}} zaznacz **Zezwól asystentom AI i skryptom na korzystanie z CadCraft**. Jest wyłączone, dopóki tego nie zrobisz.
3. Wybierz, co może robić. **Odczyt** jest zaznaczony na starcie; zaznacz pozostałe tylko wtedy, gdy są potrzebne.

| Uprawnienie | Co asystent może zrobić |
|---|---|
| Odczyt | Oglądać rysunek: opisać go, wypisać i znaleźć obiekty, zobaczyć zaznaczenie, opisać widok i zrobić jego zdjęcie, sprawdzić go według reguł warstw i zasad rysunkowych |
| Edycja | Uruchamiać polecenia na rysunku i zmieniać zaznaczenie. Każda akcja to jeden krok, który możesz cofnąć |
| Zapis | Zapisać rysunek (na komputerze — do jego pliku; w przeglądarce — jako pobieranie) |
| Eksport | Drukować do PDF i tworzyć inne pliki |

## Pozwól mu używać plików w wybranych folderach

W CadCraft Studio asystent może otwierać, zapisywać i drukować pliki po nazwie, zamiast korzystać z okien dialogowych plików, ale tylko wewnątrz folderów, które dodasz w {{ui:Asystenci}} › {{ui:Foldery, z których mogą korzystać asystenci}}:

1. Wybierz {{ui:Dodaj folder…}} i wskaż folder w oknie dialogowym Studio.
2. Asystent może teraz wypisać pliki w tym folderze (`files_list`), otworzyć rysunek (`drawing_open`), zapisać go tam w wersji DWG lub jako DXF, wydrukować do pliku PDF lub SVG, wczytać plik LISP oraz przekazać poleceniu plik, o który ono prosi (`INSERT` `F`, `XATTACH`, plik punktów), albo wskazać, dokąd ma trafić plik polecenia (CSV z `COUNT`, `PUBLISH`).
3. {{ui:Usuń (R)}} natychmiast odbiera folder. Ścieżki poza nim są odrzucane, a plik, który już tam jest, zostaje zastąpiony tylko wtedy, gdy asystent o to poprosi albo sam go zapisał.

Otwieranie wymaga **Odczytu**, zapisanie rysunku wymaga **Zapisu**, a każdy inny plik wymaga **Eksportu**.

Narzędzia spoza zaznaczonych uprawnień nie są asystentowi w ogóle oferowane. Jeśli mimo to o nie poprosi, CadCraft odmawia i zapisuje to w dzienniku aktywności. Wyłączenie przełącznika kończy wszystkie połączenia naraz. {{ui:Resetuj ustawienia CadCraft}} również go wyłącza.

## Połącz asystenta

Asystenci łączą się przez **CadCraft Studio** na Twoim komputerze. Studio uruchamia mały serwer, do którego dotrze tylko ten komputer (adres `127.0.0.1`), chroniony tokenem, który Studio tworzy przy każdym uruchomieniu. Otwórz Studio, wybierz {{ui:Połącz asystenta}} i skopiuj adres oraz token.

- W asystencie dodaj serwer MCP typu HTTP z adresem (wygląda jak `http://127.0.0.1:47615/mcp`) i nagłówkiem `Authorization: Bearer <token>`. Studio pokazuje ustawienia do wklejenia.

{{ui:Nowy token}} w Studio sprawia, że każdy połączony asystent łączy się ponownie z nowym tokenem. Nigdy nie udostępniaj tokenu: każdy, kto go ma, może używać aplikacji, które włączyłeś, tak długo, jak działa Studio.

:::note
Karta przeglądarki nie może otworzyć połączenia dla asystenta: w aplikacjach przeglądarkowych przełącznik nie działa, dopóki nie skorzystasz z CadCraft Studio na swoim komputerze.
:::

## Ty nadal decydujesz

- **Każda akcja to jeden krok cofnięcia**, opisany nazwą asystenta, na przykład „Asystent: LINE”. Naciśnij {{key:Mod+Z}}, aby cofnąć całą ostatnią akcję asystenta.
- **Widzisz, co robi.** Jego polecenia pojawiają się w historii poleceń z **[Asystent]** na początku, a rysunek odświeża się w trakcie pracy.
- **Czeka na Ciebie.** Gdy jesteś w środku polecenia, asystent może odczytywać rysunek, ale nie może go zmieniać; zostaje poinformowany, by spróbować ponownie, gdy skończysz.
- **Wiesz, kiedy jest połączony.** Przycisk na pasku aplikacji nazywa asystenta, dopóki jest połączony. Kliknij go, aby zobaczyć, co może robić, albo aby **Rozłączyć** go.
- **Aktywność.** {{ui:Ustawienia}} › {{ui:CadCraft}} › {{ui:Asystenci}} › {{ui:Aktywność}} wypisuje każde wywołanie: kiedy, które narzędzie, czy wykonane, czy odrzucone i jaki krok cofnięcia utworzyło. {{ui:Zapisz dziennik}} zachowuje jego kopię.

## Czego asystent może zażądać

| Narzędzie | Uprawnienie | Co robi |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Odczyt | Nazwa rysunku, jednostki, warstwy, bloki, arkusze; co jest na ekranie |
| `files_list`, `drawing_open` | Odczyt | Studio: pliki w Twoich folderach; otwiera jeden z nich w tym oknie |
| `objects_list`, `object_get`, `selection_get` | Odczyt | Obiekty z geometrią, długością i polem (albo tylko liczbę, według typu i warstwy); zaznaczenie |
| `drawing_check` | Odczyt | Reguły, na przykład dozwolone warstwy, brak obiektów na warstwie 0, kolory ByLayer, wysokości tekstu |
| `view_screenshot` | Odczyt | Obraz rysunku tak, jak jest pokazany |
| `command_run` | Edycja | Wpisuje w wierszu poleceń: `LINE 0,0 @100,0 @0,50 ` czytane tak, jak byś to wpisał (spacja kończy odpowiedź), albo lista z jedną odpowiedzią na każde pytanie. Może zostawić polecenie otwarte i kontynuować je w następnym wywołaniu |
| `script_run` | Edycja | Skrypt (`.scr`) lub plik LISP, tak jak wczytuje go {{ui:APPLOAD}} |
| `block_insert` | Edycja | Umieszcza blok z wartościami jego atrybutów w jednym kroku |
| `selection_set`, `undo` | Edycja | Zaznacza obiekty dla następnego polecenia; cofa własne kroki |
| `drawing_save` | Zapis | Własne {{ui:Zapisz}} CadCraft albo {{ui:Zapisz jako}} do jednego z Twoich folderów |
| `drawing_plot` | Eksport | PDF lub SVG arkusza albo modelu, w skali lub dopasowany (podkłady PDF nie są jeszcze w ten sposób drukowane) |

Gdy asystent uruchamia polecenie, CadCraft zadaje jego pytania w wierszu poleceń zamiast w oknie dialogowym (na przykład czy wstawić cały rysunek, czy jeden blok), dzięki czemu asystent może na nie odpowiedzieć. Biblioteka i Znajdź nadal wymagają Twojej obecności; asystent zostaje poinformowany, by Cię o nie zapytać.

## Praca na plikach bez otwierania CadCraft

Serwer MCP CadCraft (`cadcraft-mcp`) i wiersz poleceń (`cadcraft`) uruchamiają własny kod rysunkowy CadCraft w Node.js, bez okna. Wymagają Node.js 20 lub nowszego.

- **Serwer MCP** działa tylko w folderach, które wskażesz, i tylko z uprawnieniami, które mu nadasz: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Bez `--root` nie może otworzyć żadnego pliku; bez `--allow` może tylko odczytywać. Potrafi też czytać modele IFC, przedmiary i adnotacje w zestawach PDF.
- **Wiersz poleceń** służy do Twoich własnych skryptów: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Kilka plików naraz: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Dodaj `--json`, aby uzyskać wynik, który może odczytać program.

:::note
Jeśli `npx @getcadcraft/mcp` zgłasza, że pakietu nie znaleziono, oznacza to, że nie został jeszcze opublikowany. Aktualności na getcadcraft.com napiszą, kiedy to nastąpi.
:::

## Gdy coś nie działa

- **Asystent nie widzi narzędzi CadCraft:** sprawdź, czy przełącznik jest włączony w tym oknie i czy okno jest otwarte w Studio.
- **„wymaga uprawnienia do edycji”:** zaznacz **Edycja** w {{ui:Asystenci}}, a potem zapytaj ponownie.
- **„poza folderami, z których asystenci mogą korzystać”:** dodaj ten folder w {{ui:Asystenci}} › {{ui:Foldery, z których mogą korzystać asystenci}} albo poproś asystenta, by użył pliku z folderu, który już dodałeś.
- **Błędy „401” lub „token”:** token się zmienił (Studio został uruchomiony ponownie albo użyto {{ui:Nowy token}}). Skopiuj nowy token do ustawień asystenta.
- **Jego zmiana była błędna:** naciśnij {{key:Mod+Z}}. Jedno naciśnięcie cofa jedną pełną akcję asystenta.

## Zobacz też

- [Przepisy dla asystentów AI](common:assistants-recipes): przykłady z opisem, każdy z narzędziami, które wywołuje.
