---
title: Nadpisania klas okna widokowego
summary: Na arkuszu ukryj klasę albo nadaj jej inny kolor, grubość linii lub wypełnienie tylko w jednym oknie widokowym; model i pozostałe okna pozostają bez zmian.
keywords: okno widokowe, nadpisanie klasy, nadpisanie okna widokowego, ukryj klasę w oknie widokowym, arkusz, układ, VPLAYER, wydruk, plot, Vectorworks
from: c1a2b51f
---

Arkusz często pokazuje ten sam model więcej niż raz: rzut z meblami i rzut bez nich albo plan oświetlenia, na którym w kolorze są tylko oprawy. Nadpisanie klasy okna widokowego zmienia sposób, w jaki jedna [klasa](topic:classes) jest pokazywana **tylko w tym oknie widokowym**.

1. Otwórz arkusz i zaznacz jedno okno widokowe.
2. Otwórz panel Klasy (`CLASSES`) i wybierz klasę.
3. W sekcji {{ui:To okno widokowe}} zaznacz {{ui:Ukryj w tym oknie widokowym}} albo ustaw {{ui:Kolor tutaj}}, {{ui:Grubość linii tutaj}} lub {{ui:Wypełnienie tutaj}}.

Lista poniżej pokazuje każdą klasę, którą to okno zmienia. {{ui:Wyczyść nadpisania tego okna widokowego}} zdejmuje je wszystkie. Każda zmiana to jeden krok cofnięcia.

## Co zmienia nadpisanie

- **Ukryj** ukrywa klasę i wszystkie klasy podrzędne w tym oknie widokowym.
- **Kolor, grubość linii i wypełnienie** zmieniają obiekty klasy, których wartość nie jest ustawiona na samym obiekcie, czyli obiekty, które przyjmują ją z klasy lub z warstwy. Obiekt z własnym kolorem zachowuje go, tak jak przy nadpisaniu warstwy okna widokowego.

Nadpisania są widoczne na ekranie oraz w wydrukach i plikach PDF, również w zestawie arkuszy opublikowanym do PDF. Działają razem z zamrożonymi warstwami okna widokowego i nadpisaniami warstw.

Nadpisania są zapisywane z rysunkiem w DWG i DXF (wraz z listą klas, w bloku `CADCRAFT_CLASSES`) i wracają do tego samego okna widokowego po otwarciu pliku w CadCraft.
