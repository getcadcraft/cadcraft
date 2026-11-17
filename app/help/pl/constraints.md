---
title: Nakładanie więzów na rysunek
summary: Utrzymuj linie w poziomie, końce razem i wymiary stałe za pomocą więzów geometrycznych i wymiarowych, a rysunek będzie podążał za zmianą wymiaru.
keywords: więzy, więzy geometryczne, parametryczne, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, stopnie swobody, pełne więzy
from: f8f21fa4
---

## Co wykonasz

Płytę, której szerokość zmienisz w jednym miejscu: jej boki pozostaną prostopadłe, jeden narożnik się nie przesunie, a wysokość pozostanie połową szerokości.

Więzy działają na liniach, polilinii, okręgach, łukach i punktach na karcie {{ui:Model}}. Każdy dodany więz to jeden krok cofnięcia.

## Narysuj i powiąż zarys

1. Wpisz `REC` i naciśnij {{key:Enter}}. Wpisz `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Wpisz `AUTOCONSTRAIN` i naciśnij {{key:Enter}}. Wpisz `ALL`, {{key:Enter}}, a następnie ponownie {{key:Enter}}.

   Historia podaje „Zastosowano 4 więzy”. Przy bokach pojawią się małe pola z **H** i **V**: to są paski więzów.
3. Wpisz `GCFIX` i naciśnij {{key:Enter}}. Kliknij w pobliżu lewego dolnego narożnika. Pojawi się pole z ⊕: ten narożnik pozostaje na miejscu.

`AUTOCONSTRAIN` dodaje więzy zgodności tam, gdzie końce prawie się stykają, oraz więzy poziome lub pionowe tam, gdzie linie są prawie poziome lub pionowe. Wpisz `S` w podpowiedzi polecenia, aby zmienić, jak bliskie muszą być (domyślnie 0.05 jednostki rysunku i 1°).

## Dodaj wymiary

1. Wpisz `DCHORIZONTAL` i naciśnij {{key:Enter}}.
2. Kliknij w pobliżu lewego dolnego narożnika, a następnie w pobliżu prawego dolnego narożnika.
3. Kliknij poniżej prostokąta, aby wskazać linię wymiarową.
4. Podpowiedź pokazuje `Dimension text <d1=100>`. Wpisz `width=120` i naciśnij {{key:Enter}}.

   Prostokąt ma teraz szerokość 120, a etykieta brzmi `width=120`.
5. Wpisz `DCVERTICAL` i naciśnij {{key:Enter}}, wpisz `O` i naciśnij {{key:Enter}}, a następnie kliknij prawą stronę.
6. Kliknij na prawo od niej, wpisz `width/2` i naciśnij {{key:Enter}}.

   Ma wysokość 60. Etykieta brzmi `fx: d1=width/2`: wyrażenie steruje wymiarem.

Historia podaje teraz, że zarys jest w pełni powiązany. Aby zmienić jego rozmiar, zmień `width` (zobacz [Użycie parametrów i równań](topic:parameters)) albo kliknij dwukrotnie etykietę `width=120`, wpisz nową wartość i wybierz {{ui:Zastosuj}}.

## Przesuwanie obiektów z więzami

Przesuń, obróć, skaluj, uchwyty i panel właściwości zachowują więzy: przesunięty obiekt zostaje przytrzymany, a reszta podąża za nim. Gdy więzy nie mogą podążyć, edycja nie zostaje wykonana, a historia podaje powód, na przykład „Nie wykonano: więzy trzymają ten obiekt w miejscu”. Usunięcie obiektu usuwa razem z nim jego więzy.

## Lustro i przycinanie obiektów z więzami

- {{cmd:MIRROR}} kopiuje więzy między lustrzanymi obiektami na kopie. Strony (w którą stronę dotyka styczna, z której strony mierzy się odległość) są wyliczane ponownie dla kopii lustrzanej, a skopiowane wymiary dostają własne nazwy, tak jak przy wklejaniu. Przy `Erase source objects` `Y` więzy zostają na obiektach lustrzanych. Historia podaje, ile ich przeszło.
- {{cmd:TRIM}} zachowuje więzy linii lub łuku na pozostałej części: więz na końcu przechodzi na kawałek, który ten koniec nadal ma; reguła kierunku ({{ui:Poziomo}}, {{ui:Pionowo}}, {{ui:Równolegle}}, {{ui:Prostopadle}}) obowiązuje na każdym kawałku, a wymiar między dwoma zewnętrznymi końcami nadal je mierzy. Więzy, które trzymały odciętą część, lub długość zmienioną przez przycięcie ({{ui:Równość}}, kąt rozwarcia łuku), znikają. Przycięty okrąg zachowuje swoje więzy środka i promienia. Przycięte polilinie tracą swoje więzy.

## Więzy

| Polecenie | Utrzymuje |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | linię lub odcinek poziomo albo pionowo (`2P`: dwa punkty poziomo lub pionowo) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dwie linie równolegle, prostopadle lub na jednej prostej |
| {{cmd:GCCOINCIDENT}} | dwa punkty razem; `O`: punkt na linii, okręgu lub łuku |
| {{cmd:GCTANGENT}} | linię i okrąg lub łuk, albo dwa z nich, stykające się |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dwa okręgi lub łuki o wspólnym środku; dwie długości lub dwa promienie równe |
| {{cmd:GCSYMMETRIC}} | dwa punkty, linie lub okręgi odbite lustrzanie względem linii |
| {{cmd:GCFIX}} | punkt (kliknij w pobliżu) lub cały obiekt (`O`) w miejscu |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | odległość |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | promień, średnicę, kąt między dwiema liniami lub kąt łuku |

{{cmd:GEOMCONSTRAINT}} i {{cmd:DIMCONSTRAINT}} pytają, który wybrać; {{ui:Więzy}} i {{ui:Wymiar}} w grupie {{ui:Parametryczne}} uruchamiają je, a {{ui:Więcej}} wyświetla listę każdego z nich. To, gdzie klikniesz, wybiera część: kliknięcie w pobliżu końca, środka lub środka okręgu wybiera ten punkt; kliknięcie na polilinii wybiera segment pod kursorem. Pierwszy obiekt zostaje, a drugi przesuwa się, by się z nim spotkać.

Więz, który koliduje z innymi albo nic nie dodaje, bo inne już go implikują, zostaje odrzucony z komunikatem i nic się nie przesuwa.

## Podgląd, zaznaczanie i usuwanie

- Kliknij pole w pasku więzów (albo kwadrat zgodności, albo etykietę wymiaru), aby zaznaczyć więz; historia go nazwie. Naciśnij {{key:Delete}}, aby go usunąć.
- {{cmd:DELCONSTRAINT}} usuwa wszystkie więzy z wybranych obiektów.
- {{cmd:CONSTRAINTBAR}}: `S` pokazuje wszystkie paski, `H` je ukrywa; najpierw zaznacz obiekty, aby pokazać lub ukryć ich paski. {{ui:Więcej}} ma {{ui:Pokaż paski więzów}} i {{ui:Ukryj paski więzów}}.
- {{cmd:DCDISPLAY}} pokazuje lub ukrywa więzy wymiarowe. Nigdy nie są drukowane.
- {{cmd:DCCONVERT}} zamienia wymiary narysowane na liniach, okręgach i łukach we więzy wymiarowe.

:::note
Jeśli używałeś rysowania parametrycznego w AutoCAD, nazwy poleceń i podpowiedzi są takie same. Więzy i parametry są zapisywane w plikach DWG i DXF w postaci, którą inne programy ignorują; zobacz [Pliki](topic:files#constraints-in-files).
:::
