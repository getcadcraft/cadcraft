---
title: Učitaj aplikacije (APPLOAD)
summary: Učitaj LISP rutine i njihove dijaloške datoteke, isključi ih, ponovo ih učitaj iz historije i čuvaj one koje koristiš u Paketu za pokretanje.
keywords: appload, ap, učitaj aplikaciju, lisp, lsp, dcl, rutina, paket za pokretanje, isključi, historija, prevuci, učitaj, prilagodi, upravljanje
from: 89e0ee95
---

## Šta ćeš naučiti

Kako učitati LISP rutinu (datoteku `.lsp`) da njene naredbe rade u CadCraftu, kako je isključiti i kako da se učitava svaki put kada se CadCraft pokrene.

## Učitaj rutinu

1. Otvori {{ui:Pogled}} › {{ui:Više}} › {{ui:Učitaj aplikaciju…}}, ili ukucaj {{cmd:APPLOAD}} (ili `AP`) i pritisni {{key:Enter}}.
2. Klikni {{ui:Učitaj datoteku…}} i izaberi jednu ili više `.lsp` datoteka. Rutina koja otvara dijalog obično dolazi sa `.dcl` datotekom: izaberi i nju.
3. Dijalog kaže šta je svaka datoteka napravila, na primjer "Učitano delblocks.lsp: 1 naredba, DELBLOCKS."
4. Klikni {{ui:Zatvori}}, ukucaj naredbu rutine i pritisni {{key:Enter}}.

Možeš i prevući `.lsp` i `.dcl` datoteke na crtež ili na dijalog {{ui:Učitaj aplikacije}}: odmah se učitavaju.

Datoteka se čita ovdje, u tvom pregledniku. Ništa se ne šalje.

:::tip
Pritisni {{key:Enter}} u praznoj komandnoj liniji da ponovo pokreneš naredbu rutine, kao i svaku drugu naredbu. Tvoji aliasi naredbi također mogu do nje: vidi "Uređivanje aliasa naredbi".
:::

## Isključi rutinu

U {{ui:Učitaj aplikacije}}, pod {{ui:Učitane aplikacije}}, klikni {{ui:Isključi}} pored datoteke. Naredbe koje je napravila nestaju dok je ponovo ne učitaš.

## Učitaj rutinu svaki put kada se CadCraft pokrene

1. Učitaj rutinu.
2. Pod {{ui:Učitane aplikacije}}, klikni {{ui:Dodaj u Paket za pokretanje}} pored nje.

Od sada se sama učitava kad god se CadCraft pokrene u ovom pregledniku. Da to zaustaviš, klikni {{ui:Ukloni}} pored nje pod {{ui:Paket za pokretanje}}.

Paket za pokretanje čuva kopiju svake datoteke u memoriji ovog preglednika. Ako promijeniš rutinu, učitaj novu datoteku i ponovo je dodaj.

## Učitaj acad.lsp i acaddoc.lsp iz mape podrške (Studio)

U CadCraft Studiju, {{ui:Mapa podrške}} u dijalogu {{ui:Učitaj aplikacije}} uzima folder na tvom računaru. Klikni {{ui:Odaberi mapu…}}. Kada se CadCraft pokrene, čita `acad.lsp`, zatim `acaddoc.lsp` iz tog foldera (bez obzira na veličinu slova u nazivima), učitava ih, pa zatim učitava Paket za pokretanje. `acaddoc.lsp` se ponovo čita svaki put kada se otvori nova kartica crteža. Ništa drugo u folderu se ne čita, a datoteka veća od 2 MB se preskače uz poruku.

Ako datoteka definiše funkciju po imenu `S::STARTUP`, ona se izvršava jednom nakon učitavanja datoteka (također nakon Paketa za pokretanje). {{ui:Učitaj sada}} radi isto na zahtjev; {{ui:Obriši}} zaboravlja folder.

U pregledniku stranica ne može čuvati folder, pa nema mape podrške: koristi Paket za pokretanje iznad. Kompajlirane `.fas` i `.vlx` datoteke i nativni programi i dalje se odbijaju.

## Ponovo učitaj datoteku iz historije

{{ui:Historija}} navodi datoteke koje si učitao u ovom pregledniku, najnovije prve. Klikni {{ui:Učitaj}} pored jedne da je ponovo učitaš, bez traženja na računaru.

## Datoteke koje CadCraft ne može učitati

| Datoteka | Šta je | Šta uraditi |
|---|---|---|
| `.fas`, `.vlx` | kompajlirani ili zaštićeni LISP | učitaj `.lsp` izvorni kod |
| `.arx`, `.crx`, `.dbx` | nativni Windows programi | u CadCraftu nema načina da se ovi pokrenu |
| `.dvb` | VBA projekat | u CadCraftu nema načina da se ovi pokrenu |
| `.craft`, `.lua`, `.py` | CraftScript skripte | otvori ih u Script radnom prostoru u PartCraftu |

Dijalog {{ui:Učitaj aplikacije}} kaže o kojoj vrsti datoteke se radi kada je izabereš.

## Zaustavi rutinu

Pritisni {{key:Esc}}. Na jednom od upita rutine, Esc je otkazuje na način koji rutina očekuje (pokreće se njeno vlastito čišćenje). Ako je zauzeta i ništa ne pita, Esc je odmah zaustavlja i to kaže; tvoje učitane rutine ostaju učitane.

:::note
Svaka promjena koju rutina napravi u crtežu je jedan korak: jedan {{key:Mod+Z}} vraća sve.
:::
