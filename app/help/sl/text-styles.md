---
title: Nastavite pisavo in velikost besedila s slogi besedila
summary: Ustvarite poimenovane sloge besedila s pisavo, višino, širino in nagibom, nastavite enega kot trenutnega za novo besedilo ter spremenite slog, da spremenite vse besedilo, ki ga uporablja.
keywords: slog besedila, slog, STYLE, ST, TEXTSTYLE, -STYLE, pisava, višina besedila, faktor širine, nagib, spremeni pisavo, standardni slog, uporabi slog, DDSTYLE
from: bd5a4883
---

## Kaj boste naredili

Ustvarite slog besedila z imenom `Notes` s svojo pisavo in višino, ga uporabite za novo besedilo in nato spremenite slog, tako da se vse opombe, ki ga uporabljajo, spremenijo hkrati.

## Koraki

1. Vnesite {{cmd:STYLE}} (`ST`) in pritisnite {{key:Enter}}, ali kliknite {{ui:Slog besedila}} na orodni vrstici {{ui:Risanje}}. Pogovorno okno {{ui:Slog besedila}} našteje sloge v risbi. Vsaka risba ima `Standard`.
2. Kliknite {{ui:Novo…}}, vnesite `Notes` kot ime novega sloga in kliknite {{ui:V redu}}. Vrstica stanja pravi: „Slog besedila Notes je ustvarjen in nastavljen kot trenutni.“
3. V {{ui:Pisava}} izberite ali vnesite ime pisave. Nastavite {{ui:Višina (0 = vprašaj vsakič)}} na število, na primer `2.5`, da bo vsako novo besedilo imelo to višino. Pustite `0`, da vas vsakič vpraša.
4. Nastavite {{ui:Faktor širine}} in {{ui:Kot nagiba (°)}}, če želite ožje, širše ali nagnjene črke. Vzorčna vrstica prikaže rezultat.
5. Kliknite {{ui:Zapri (C)}}. Besedilo rišite z {{cmd:TEXT}} ali {{cmd:MTEXT}}: novo besedilo prevzame trenutni slog.
6. Če želite uporabiti slog, ki ste ga že ustvarili, znova odprite pogovorno okno, ga izberite na seznamu in kliknite {{ui:Nastavi kot trenutno}}.
7. Če želite slog uporabiti za že narisano besedilo, izberite besedilo, odprite pogovorno okno, izberite slog in kliknite {{ui:Uporabi na izbranem besedilu}}.

## Pozneje spremenite slog

Spremenite pisavo, višino, širino ali nagib sloga v pogovornem oknu, in vse besedilo, ki ga uporablja, se prilagodi v enem koraku razveljavitve ({{key:Mod+Z}}). Vrstica stanja pove, koliko besedil se je prilagodilo.

## Opombe

- {{ui:Izbriši}} zavrne `Standard` in slog, ki ga besedilo še uporablja: najprej spremenite to besedilo v drug slog.
- Slogi se shranijo v tabelo STYLE risbe, zato jih datoteki DXF in DWG ohranita.
- V ukazni vrstici `-STYLE` naredi enako z možnostmi (Current, New, Font, Height, Width, Oblique, Delete, List).
- Pisava, ki ni nameščena v računalniku, na katerem beremo risbo, je prikazana v drugi pisavi.
