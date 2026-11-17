---
title: Edycja za pomocą uchwytów i Właściwości
summary: Rozciągaj, przesuwaj i zmieniaj rozmiar obiektów za pomocą ich uchwytów oraz wpisuj dokładne długości, promienie, kąty i współrzędne w panelu Właściwości.
keywords: uchwyty, właściwości, rozciąganie, długość, promień, współrzędne, edycja, szybkie właściwości, paleta właściwości, zmiana, warstwa, kolor
from: f22541ba
---

## Co poznasz

Dwa szybkie sposoby zmiany obiektu bez polecenia: przeciągnij jego **uchwyty** albo wpisz nowe wartości w panelu **Właściwości** po prawej stronie.

## Uchwyty

Gdy zaznaczysz obiekty (do 200 naraz), a żadne polecenie nie działa, na obiektach pojawią się małe kwadraty. To są uchwyty:

| Obiekt | Uchwyty |
|---|---|
| Linia | Oba końce i środek (przesuwa całą linię) |
| Okrąg | Środek (przesuwa okrąg) i cztery punkty na okręgu (zmieniają promień) |
| Łuk | Środek i oba końce (zmieniają miejsce początku i końca) |
| Polilinia | Każdy wierzchołek |
| Tekst, punkt, odwołanie do bloku | Punkt wstawienia |
| Elipsa | Środek |
| Wymiar | Punkty określające i położenie linii wymiarowej |
| Okno widokowe (viewport) | Środek (przesuwa) i cztery narożniki (zmieniają rozmiar) |

### Przesuwanie uchwytu

1. Narysuj linię i kliknij ją. Pojawią się trzy uchwyty.
2. Kliknij uchwyt na jednym z końców. Pasek stanu pokaże: „Wskaż, gdzie ma trafić ten uchwyt (Esc, aby anulować). Działają przyciąganie i Orto.”
3. Przesuń krzyżyk. Podgląd podąża za nim.
4. Kliknij nowe położenie albo złap punkt na innym obiekcie i kliknij go.

Koniec przesuwa się, a reszta linii pozostaje na miejscu. Można też nacisnąć uchwyt i przeciągnąć go, a potem puścić w docelowym miejscu.

:::note
Nie można wpisać współrzędnej dla uchwytu. Aby uzyskać dokładne położenie, złap punkt albo wpisz wartość w Właściwościach.
:::

Naciśnij {{key:Esc}} lub kliknij prawym przyciskiem, aby anulować przesunięcie uchwytu.

## Właściwości

Prawy panel pokazuje właściwości zaznaczonego obiektu.

1. Kliknij linię. Nagłówek panelu pokaże „Linia”.
2. Kliknij w pole {{ui:Długość}}, wpisz `2500` i naciśnij {{key:Enter}}.

Linia ma teraz dokładnie 2500 długości i zachowuje punkt początkowy oraz kąt. {{key:Enter}} albo kliknięcie w inne miejsce stosuje wartość; {{key:Esc}} przywraca poprzednią. Każda zmiana to jeden krok cofania, również gdy zmienia się wiele obiektów naraz.

Pola przyjmują wyrażenia (`=2*45`) i długości z jednostkami (`3'6"`, `900mm`), każdy punkt ma X, Y i Z, a kilka obiektów można zmienić jednocześnie. Wszystko to opisano w [Panelu Właściwości](topic:properties-panel).

## Typowe błędy

- **Nie widać uchwytów.** Trwa polecenie (naciśnij {{key:Esc}}), zaznaczono ponad 200 obiektów albo obiekt leży na zablokowanej warstwie.
- **Uchwyt trafił w złe miejsce.** Przyciąganie go złapało. Przytrzymaj {{key:Shift}} podczas kliknięcia, aby zignorować przyciąganie.
- **Wpisywanie we Właściwościach nic nie zmieniło.** Naciśnij {{key:Enter}} albo kliknij w inne miejsce, aby zastosować wartość. Odrzucona wpisana wartość (zero lub ujemna długość albo promień, tekst, który nie jest wartością) zaznacza pole na czerwono i podaje powód.
- **Wpisane litery trafiły do pola Właściwości.** Gdy w polu jest kursor, klawisze wpisują się właśnie tam. Naciśnij {{key:Enter}} albo {{key:Esc}}, a potem wpisz polecenie.
