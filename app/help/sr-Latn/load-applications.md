---
title: Učitavanje aplikacija (APPLOAD)
summary: Učitaj LISP rutine i njihove dijaloške datoteke, isključi ih, ponovo učitaj iz istorije i zadrži one koje koristiš u Startup Suite-u.
keywords: appload, ap, učitaj aplikaciju, lisp, lsp, dcl, rutina, startup suite, isključi, istorija, prevuci, učitaj, prilagodi, upravljanje
from: 89e0ee95
---

## Šta ćeš naučiti

Kako da učitaš LISP rutinu (`.lsp` datoteku) da njene komande rade u CadCraft-u, kako da je isključiš i kako da se učitava svaki put kada se CadCraft pokrene.

## Učitaj rutinu

1. Otvori {{ui:Pogled}} › {{ui:Više}} › {{ui:Učitaj aplikaciju…}}, ili ukucaj {{cmd:APPLOAD}} (ili `AP`) i pritisni {{key:Enter}}.
2. Klikni {{ui:Učitaj datoteku…}} i izaberi jednu ili više `.lsp` datoteka. Rutina koja otvara dijalog obično dolazi sa `.dcl` datotekom: izaberi i nju.
3. Dijalog kaže šta je svaka datoteka napravila, na primer „Učitano delblocks.lsp: 1 komanda, DELBLOCKS.“
4. Klikni {{ui:Zatvori}}, ukucaj komandu rutine i pritisni {{key:Enter}}.

Možeš i da prevučeš `.lsp` i `.dcl` datoteke na crtež ili na dijalog {{ui:Učitaj aplikacije}}: učitavaju se odmah.

Datoteka se čita ovde, u tvom pregledaču. Ništa se ne šalje.

:::tip
Pritisni {{key:Enter}} u praznoj komandnoj liniji da ponovo pokreneš komandu rutine, kao i svaku drugu komandu. Tvoji aliasi komandi mogu da je dosegnu takođe: vidi „Uređivanje aliasa komandi“.
:::

## Isključi rutinu

U {{ui:Učitaj aplikacije}}, pod {{ui:Učitane aplikacije}}, klikni {{ui:Isključi}} pored datoteke. Komande koje je napravila nestaju dok je ponovo ne učitaš.

## Učitaj rutinu pri svakom pokretanju CadCraft-a

1. Učitaj rutinu.
2. Pod {{ui:Učitane aplikacije}}, klikni {{ui:Dodaj u Startup Suite}} pored nje.

Od sada se učitava sama kad god se CadCraft pokrene u ovom pregledaču. Da to zaustaviš, klikni {{ui:Ukloni}} pored nje pod {{ui:Startup Suite}}.

Startup Suite čuva kopiju svake datoteke u memoriji ovog pregledača. Ako promeniš rutinu, učitaj novu datoteku i ponovo je dodaj.

## Učitaj acad.lsp i acaddoc.lsp iz fascikle za podršku (Studio)

U CadCraft Studio-u, {{ui:Fascikla za podršku}} u dijalogu {{ui:Učitaj aplikacije}} uzima fasciklu na tvom računaru. Klikni {{ui:Izaberi fasciklu…}}. Kada se CadCraft pokrene, čita `acad.lsp`, zatim `acaddoc.lsp` iz te fascikle (bez obzira na veličinu slova u imenima), učitava ih, pa zatim učitava Startup Suite. `acaddoc.lsp` se ponovo čita svaki put kada se otvori nova kartica crteža. Ništa drugo u fascikli se ne čita, a datoteka veća od 2 MB se preskače uz poruku.

Ako datoteka definiše funkciju zvanu `S::STARTUP`, ona se izvršava jednom nakon učitavanja datoteka (i nakon Startup Suite-a). {{ui:Učitaj sada}} radi isto na zahtev; {{ui:Obriši}} zaboravlja fasciklu.

U pregledaču stranica ne može da zadrži fasciklu, pa nema fascikle za podršku: koristi Startup Suite iz gornjeg dela. Kompajlirane `.fas` i `.vlx` datoteke i nativni programi ostaju odbijeni.

## Ponovo učitaj datoteku iz istorije

{{ui:Istorija}} navodi datoteke koje si učitao u ovom pregledaču, najnovije prve. Klikni {{ui:Učitaj}} pored jedne da je ponovo učitaš, bez traženja na računaru.

## Datoteke koje CadCraft ne može da učita

| Datoteka | Šta je | Šta raditi |
|---|---|---|
| `.fas`, `.vlx` | kompajlirani ili zaštićeni LISP | učitaj `.lsp` izvorni kod |
| `.arx`, `.crx`, `.dbx` | nativni Windows programi | ne postoji način da se pokrenu u CadCraft-u |
| `.dvb` | VBA projekat | ne postoji način da se pokrenu u CadCraft-u |
| `.craft`, `.lua`, `.py` | CraftScript skripte | otvori ih u radnom prostoru Script u PartCraft-u |

Dijalog {{ui:Učitaj aplikacije}} kaže koja je od ovih datoteka kada je izabereš.

## Zaustavi rutinu

Pritisni {{key:Esc}}. Na jednom od upita rutine, Esc je otkazuje na način koji rutina očekuje (njeno čišćenje se izvršava). Ako je zauzeta i ništa ne pita, Esc je zaustavlja odmah i to kaže; učitane rutine ostaju učitane.

:::note
Sve što rutina promeni u crtežu je jedan korak: jedan {{key:Mod+Z}} vraća sve.
:::
