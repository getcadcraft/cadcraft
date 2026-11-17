---
title: Zamień adnotację w rewizję
summary: Odczytaj pakiet redline zapisany przez MarkupCraft, zaakceptuj lub odrzuć każdą zmianę, dodaj chmurę rewizji i dziennik rewizji do zaakceptowanych zmian oraz zapisz plik odpowiedzi, który MarkupCraft odczyta z powrotem.
keywords: redline, adnotacja, rewizja, chmura, chmura rewizji, dziennik rewizji, akceptuj, odrzuć, markupcraft, przegląd, pakiet redline, odpowiedzi, REDLINE
from: cdb3fafe
---

Recenzent oznacza zestaw arkuszy w MarkupCraft i wysyła ci **pakiet redline**, plik kończący się na `.redline.json`. Tutaj przechodzisz przez niego zmiana po zmianie, a zaakceptowane zmiany stają się chmurami rewizji na rysunku.

## Przejrzyj zmiany

Wpisz {{cmd:REDLINE}} (`RDL`) i wybierz pakiet. Wybierz:

- {{ui:Lista}}: każdą zmianę z numerem, stanem, arkuszem, rodzajem, kto zgłosił i co napisał.
- {{ui:Akceptuj}}, {{ui:Odrzuć}}, {{ui:Gotowe}}: wpisz numery (`1,3-5` albo `All`) i opcjonalną notatkę do pliku odpowiedzi. {{ui:Otwórz ponownie}} przywraca zmiany jako otwarte.
- {{ui:Rama}}: część rysunku, którą pokazuje arkusz z adnotacjami. Kliknij dwa rogi; naciśnij {{key:Enter}}, aby objąć cały rysunek. Zmiany są umieszczane według tego, gdzie były na arkuszu, więc właśnie to je wyrównuje.
- {{ui:Zastosuj}}: rysuje chmurę rewizji (warstwa `REV-CLOUD`, z literą rewizji) wokół każdej zaakceptowanej lub gotowej zmiany oraz dziennik rewizji, tabelę z zasadami, w której są zaakceptowane zmiany wraz z twoimi notatkami (warstwa `REV-LOG`), po prawej stronie rysunku. Jeden krok cofnięcia.
- {{ui:Zapisz}}: zapisuje `<project>-<revision>.redline-answers.json`. Otwórz go w MarkupCraft, a adnotacje się zamkną: Zaakceptowane, Odrzucone lub Ukończone, z twoimi notatkami jako komentarzami.

## Co warto wiedzieć

To, co napisał recenzent, jest pokazywane tak, jak zostało napisane. CadCraft nigdy nie wykonuje instrukcji znalezionych w pakiecie; tylko je pokazuje.

Odrzucone i otwarte zmiany nic nie dodają do rysunku. Pakiet jest odczytywany na twoim komputerze; nic nie jest wysyłane.

Jeśli twój asystent jest podłączony, może odczytać pakiet, zapisać decyzje i je zastosować narzędziami `redline_read`, `redline_decide`, `redline_apply` i `redline_answers`; zmiana rysunku to jeden krok cofnięcia, "Asystent: Redline to revision".
