---
title: Zeskanowane rysunki i wektoryzacja
summary: Wstaw zeskanowany arkusz, ustaw jego skalę i wyprostuj go, oczyść, wymaż jego fragmenty, przyciągaj do jego linii i przekształć go w linie i łuki.
keywords: skan, zeskanowany rysunek, rastrowy, tiff, jpeg, png, skala, wyrównaj, prostowanie, usuwanie plamek, próg, czarno-biały, przytnij, wymaż, obrys, wektoryzacja, przyciąganie, łuki, kreskowanie, rysunki papierowe, stare rysunki, scanattach, scantrace
from: 36227e5b
---

## Od arkusza papieru do obiektów rysunku

Zeskanowany rysunek to obraz. CadCraft zachowuje obraz, który mu podano, i nigdy go nie zmienia: każdy krok oczyszczania tworzy nowy obraz, z jednym krokiem cofania na każdy; {{cmd:SCANINFO}} wypisuje oryginalny plik i kroki wykonane od tamtej pory. Nic nie jest nigdzie wysyłane i nic nie jest zgadywane przez wytrenowany model: oczyszczanie i obrys to zwykłe przetwarzanie obrazu, wykonywane na Twoim komputerze.

1. **Wstaw go.** {{cmd:SCANATTACH}} wczytuje PNG, JPEG, TIFF (jedną stronę albo wszystkie strony pliku wielostronicowego) lub stronę PDF będącą obrazem. Pyta o stronę, lewy dolny róg i szerokość. Dla strony PDF pyta też, ile pikseli na cal ma być użyte do narysowania strony.
2. **Ustaw skalę.** {{cmd:SCANSCALE}}: wskaż dwa punkty na skanie, a potem wpisz rzeczywistą odległość między nimi. Arkusz jest skalowany względem pierwszego punktu.
3. **Wyrównaj go.** {{cmd:SCANALIGN}}: wskaż dwa punkty na skanie i dwa miejsca, do których one należą; arkusz przesunie się i obróci, aby pasować, i również się przeskaluje, chyba że odpowiesz Nie.
4. **Wyprostuj go.** {{cmd:SCANDESKEW}} mierzy kąt, pod jakim leżą długie linie arkusza, i pokazuje go wraz z tym, jak pewny jest wynik. Zaakceptuj go albo wpisz własny, a arkusz zostanie obrócony. Arkusz z kilkoma długimi liniami dostaje ostrzeżenie: sprawdź kąt, zanim go zaakceptujesz.
5. **Oczyść go.** {{cmd:SCANCLEAN}} zamienia arkusz na czarno-biały (Auto najpierw wyrównuje papier; Adaptive dokładniej śledzi zmiany papieru; Level to jedna liczba dla całego arkusza) i usuwa plamki do rozmiaru, który ustawisz.
6. **Przytnij i wymaż.** {{cmd:SCANCROP}} zachowuje okno. {{cmd:SCANERASE}} wymazuje prostokąt, wielokąt lub lasso (naciśnij i przeciągnij): pieczątki, notatki, ślad po kubku z kawą.

Oczyszczony obraz jest tym, co zawiera zapisany DWG (IMAGE i IMAGEDEF, z plikiem obrazu obok rysunku, jak w przypadku każdego obrazu).

## Przyciąganie do linii skanu

Przy włączonym {{cmd:RASTERSNAP}} (domyślnie) przyciąganie obiektów znajduje też linie czarno-białego skanu: końce linii, ich środki, narożniki i przecięcia, pokazane zwykłymi znacznikami przyciągania. Część arkusza pod kursorem jest obrysowywana w miarę ruchu; powiększ widok na tyle, aby jeden piksel miał kilka pikseli ekranu. Linia dłuższa niż obrysowywany fragment jest śledzona aż do swoich końców.

## Obrys

{{cmd:SCANTRACE}} zamienia linie arkusza w linie i łuki na nowej warstwie (SCAN-TRACE), jako jeden krok cofania, ze skanem nadal pod nimi. Ustawiasz:

- **Tolerancja:** jak daleko obrysowana linia lub łuk może leżeć od linii na skanie, w jednostkach rysunku (raport podaje też piksele). Ścisła tolerancja podąża za każdym drgnięciem; luźna daje mniej, prostszych fragmentów.
- **Okno:** narożnik arkusza albo cały arkusz.
- **Łuki:** wyłączone daje tylko linie.
- **Pozostałości:** to, co obrys pominął, jest rysowane jako prostokąty na warstwie, którą możesz wyłączyć, albo nie jest rysowane.

Obrys znajduje środek każdego pociągnięcia, podąża za nim, dopasowuje proste linie i łuki kołowe, łączy odcinki przecięte przez inną linię, sprawia, że prawie poziome i prawie pionowe linie są dokładnie poziome i pionowe, oraz domyka narożniki. **Tekst i kreskowanie pozostają rastrowe:** fragmenty wielkości napisów są odkładane na bok, a pęczki krótkich równoległych linii uznawane są za kreskowanie i również odkładane na bok.

Po zakończeniu podaje, ile linii i łuków powstało, tolerancję oraz ile fragmentów pozostało jako raster. **To jest to, co piksele dały przy tej tolerancji, i nie jest to stwierdzenie, że wynik jest poprawny.** Porównaj go z arkuszem: obrys może przeoczyć słabą linię, połączyć dwie bardzo bliskie linie albo narysować linię tam, gdzie jest tylko plama. Oczyść skan najpierw (wyprostowany, czarno-biały, bez plamek), a wynik będzie znacznie lepszy.

## Czego nie odczytuje

Pliki TIFF zapisane kafelkowo, BigTIFF, TIFF z kompresją JPEG lub deflate, kodowanie faksu Group 3 oraz kolory zapisane w osobnych płaszczyznach są odrzucane z komunikatem; zapisz je ponownie jako paski z kompresją LZW, PackBits, Group 4 lub bez kompresji. Pliki PNG z przeplotem (interlaced) również są odrzucane. Pliki większe niż 128 MB lub 100 milionów pikseli są odrzucane, a okno obrysu może zawierać co najwyżej 64 miliony pikseli.
