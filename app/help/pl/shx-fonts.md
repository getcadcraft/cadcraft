---
title: Rysuj tekst własnymi czcionkami SHX
summary: Podaj CadCraft folder czcionek SHX (albo wskaż pliki), a style tekstu, które je nazywają, będą rysowane nimi — na ekranie, w wydruku i w PDF — z wysokością, współczynnikiem szerokości i pochyleniem stylu.
keywords: shx, czcionki, czcionka, czcionka kształtów, big font, bigfont, unifont, legacy, perski, farsi, arabski, styl tekstu, brakująca czcionka, zastąpiona czcionka, SHXFONTS, folder, odwróć, kolejność wizualna, simplex, isocp
from: 14b0a4ab
---

Rysunki z innych programów często nazywają **czcionki SHX** w swoich stylach tekstu, a DWG ich nie przechowuje. Bez czcionki CadCraft rysuje ten tekst własnym krojem, co wystarcza dla zwykłego tekstu łacińskiego, ale nie dla starych czcionek, które przypisują zwykłym kodom znaków inne kształty liter, jak stare perskie adnotacje.

Podaj CadCraft czcionki, a narysuje w nich tekst.

## Wczytaj czcionki

Wpisz {{cmd:SHXFONTS}} (`SHX`) i wybierz:

- {{ui:Folder}} (CadCraft Studio): wskaż folder. Każdy plik `.shx` w nim jest wczytywany od razu i ponownie przy każdym uruchomieniu CadCraft.
- {{ui:Pliki}} (przeglądarka): wskaż jeden lub kilka plików `.shx`. Są zachowywane w tej przeglądarce i nigdy nie są wysyłane.
- {{ui:Lista}}: czcionki wczytane oraz te, które otwarty rysunek nazywa, a których nie wczytałeś.
- {{ui:Usuń (R)}} i {{ui:Wyczyść}}: zapominają jedną czcionkę albo wszystkie.

CadCraft nie może zawierać czcionek firm trzecich, więc nigdy ich nie dostarcza: pochodzą od Ciebie. Rysunek tylko nazywa swoje czcionki i nie przechowuje ich kopii.

## Co się dzieje

Nazwa czcionki stylu tekstu jest dopasowywana do wczytanej czcionki po nazwie, bez względu na wielkość liter, folder i `.shx` (`SIMPLEX.SHX` znajduje `simplex`). Tekst w takim stylu jest rysowany jako linie — na ekranie, w wydruku i w PDF — w miejscu tekstu, z jego wysokością, obrotem, współczynnikiem szerokości i kątem pochylenia. Jego szerokość jest szerokością czcionki, więc wyrównanie {{ui:Środek}} i {{ui:Prawa}}, zawijanie oraz wskazywanie odpowiadają temu, co widzisz. Styl, którego czcionka nie jest wczytana, zachowuje wbudowany krój, a gdy otworzysz rysunek nazywający czcionki, których nie wczytałeś, wiersz poleceń o tym informuje.

Styl Standard również się liczy: rysunek, którego styl Standard nazywa własną czcionkę, ją zachowuje.

## Czcionki już w kolejności wizualnej

Wiele starych czcionek SHX perskich i arabskich ma litery już ukształtowane pod ekran i rysowane od lewej do prawej, więc tekst wpisany w kolejności logicznej wychodzi wspak. Wpisz {{cmd:SHXFONTS}}, wybierz {{ui:Odwróć}} i wskaż czcionkę: jej tekst jest wtedy układany od ostatniej litery. Uruchom ponownie, aby cofnąć. Przełącznik należy do czcionki, jest zachowywany w tej przeglądarce i nie jest zapisywany w rysunku.

## Czego jeszcze nie obejmuje

- Tekst z wewnętrznymi kodami formatowania (kolory, stosy w MTEXT) pozostaje we wbudowanym kroju.
- Duże czcionki (big fonts, z kodami dwubajtowymi) uzupełniają kody, których brakuje czcionce głównej, ale tekst w azjatyckiej stronie kodowej, który CadCraft już zamienił na Unicode, nie jest mapowany z powrotem na dwubajtowe kody czcionki.
- Czytnik czcionek trzyma się opublikowanego opisu formatu i był testowany na czcionkach zrobionych dla CadCraft. Jeśli któraś z Twoich rysuje się źle, prześlij nam czcionkę i rysunek.
