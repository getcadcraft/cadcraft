---
title: Wskaźnik przeskakuje lub opóźnia się nad rysunkiem
summary: Co zrobić, gdy krzyżyk nie podąża płynnie za myszą na starszym lub wolniejszym komputerze.
keywords: przeskakiwanie kursora, opóźnienie wskaźnika, wolny krzyżyk, szarpany kursor, stary komputer, stara karta graficzna, zintegrowana karta graficzna, akceleracja sprzętowa, płynniejszy wskaźnik, wolny laptop
from: 39dc9057
---

CadCraft działa w przeglądarce (CadCraft Studio też jest widokiem przeglądarkowym), więc nic w nim nie jest przystosowane do jednej karty graficznej ani do innej. Krzyżyk jest rysowany przez aplikację, co oznacza, że może poruszać się tylko tak szybko, jak aplikacja potrafi narysować klatkę.

## Wyłącz dodatki w CadCraft

1. Otwórz {{ui:Ustawienia}} (koło zębate w prawym górnym rogu) i pozostań na karcie {{ui:CadCraft}}.
2. Wybierz {{ui:Płynniejszy wskaźnik na wolniejszych komputerach}}.
3. Wybierz {{ui:Włączone}}.

Po włączeniu zamiast narysowanego krzyżyka i kwadratu wyboru używany jest wbudowany wskaźnik krzyżyka komputera (także krzyżyk na pełnym ekranie). Obiekt pod wskaźnikiem podświetla się, gdy wskaźnik spoczywa, a nie w czasie ruchu. Przyciąganie do obiektów, śledzenie i gumka działają jak dotychczas.

Ustawienie {{ui:Automatyczna}} jest domyślne w CadCraft: sprawdza, jak długo trwają klatki podczas ruchu wskaźnika, i sam włącza tryb płynniejszego wskaźnika, gdy przez kilka sekund pozostają wolne. Informuje o tym raz. {{ui:Wyłączone}} zachowuje narysowany krzyżyk, niezależnie od szybkości.

## Jeśli nadal jest wolno

- Sprawdź, czy akceleracja sprzętowa jest włączona w przeglądarce: otwórz `chrome://gpu` (lub `edge://gpu`) w nowej karcie. Jeśli pierwsze wiersze mówią „Software only” lub „Disabled”, przeglądarka rysuje bez karty graficznej. Aktualizacja sterownika karty graficznej często to przywraca.
- Zamknij inne ciężkie karty i programy oraz spróbuj mniejszego okna przeglądarki.
- Napisz do nas przez {{ui:Pomoc}}, {{ui:Zgłoś problem}}: podaj, czy używasz przeglądarki, czy CadCraft Studio, jego wersję oraz to, co pokazuje strona gpu.
