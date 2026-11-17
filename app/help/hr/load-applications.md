---
title: Učitavanje aplikacija (APPLOAD)
summary: Učitajte LISP rutine i njihove dijaloške datoteke, uklonite ih, ponovno ih učitajte iz povijesti te spremite one koje koristite u Startup Suite.
keywords: appload, ap, učitaj aplikaciju, lisp, lsp, dcl, rutina, startup suite, ukloni, povijest, ispusti, učitaj, prilagodi, upravljanje
from: 89e0ee95
---

## Što ćete naučiti

Kako učitati LISP rutinu (datoteku `.lsp`) da njezine naredbe rade u CadCraftu, kako je ukloniti iz memorije i kako je učiniti da se učitava pri svakom pokretanju CadCrafta.

## Učitajte rutinu

1. Otvorite {{ui:Pogled}} › {{ui:Više}} › {{ui:Učitaj aplikaciju…}} ili upišite {{cmd:APPLOAD}} (ili `AP`) i pritisnite {{key:Enter}}.
2. Kliknite {{ui:Učitaj datoteku…}} i odaberite jednu ili više datoteka `.lsp`. Rutina koja otvara dijalog obično dolazi s datotekom `.dcl`: odaberite i nju.
3. Dijalog kaže što je svaka datoteka napravila, na primjer: „Učitano delblocks.lsp: 1 naredba, DELBLOCKS.“
4. Kliknite {{ui:Zatvori (C)}}, upišite naredbu rutine i pritisnite {{key:Enter}}.

Datoteke `.lsp` i `.dcl` možete i ispustiti na crtež ili na dijalog {{ui:Učitaj aplikacije}}: odmah se učitavaju.

Datoteka se čita ovdje, u vašem pregledniku. Ništa se ne šalje.

:::tip
Pritisnite {{key:Enter}} u praznom naredbenom retku da ponovno pokrenete naredbu rutine, kao i svaku drugu naredbu. Vaši aliasi naredbi također do nje mogu doći: vidi „Uređivanje aliasa naredbi“.
:::

## Uklonite rutinu

U {{ui:Učitaj aplikacije}}, pod {{ui:Učitane aplikacije}}, kliknite {{ui:Ukloni iz memorije}} pored datoteke. Naredbe koje je stvorila nestaju dok je ponovno ne učitate.

## Učitajte rutinu pri svakom pokretanju CadCrafta

1. Učitajte rutinu.
2. Pod {{ui:Učitane aplikacije}} kliknite {{ui:Dodaj u Startup Suite}} pored nje.

Od sada se sama učitava pri svakom pokretanju CadCrafta u ovom pregledniku. Da to zaustavite, kliknite {{ui:Ukloni (R)}} pored nje pod {{ui:Startup Suite}}.

Startup Suite čuva kopiju svake datoteke u pohrani ovog preglednika. Ako promijenite rutinu, učitajte novu datoteku i ponovno je dodajte.

## Učitajte acad.lsp i acaddoc.lsp iz mape podrške (Studio)

U CadCraft Studiu, {{ui:Mapa podrške}} u dijalogu {{ui:Učitaj aplikacije}} prihvaća mapu na vašem računalu. Kliknite {{ui:Odaberi mapu…}}.

Pri pokretanju CadCrafta čita `acad.lsp`, zatim `acaddoc.lsp` iz te mape (bez obzira na velika i mala slova u nazivima), učitava ih, a zatim učitava Startup Suite. `acaddoc.lsp` se ponovno čita svaki put kad se otvori nova kartica crteža. Ništa drugo u mapi se ne čita, a datoteka veća od 2 MB preskače se uz poruku.

Ako datoteka definira funkciju nazvanu `S::STARTUP`, ona se izvršava jednom nakon učitavanja datoteka (također nakon učitavanja iz Startup Suitea). {{ui:Učitaj sada}} radi isto na zahtjev; {{ui:Očisti}} zaboravlja mapu.

U pregledniku stranica ne može zadržati mapu, pa nema mape podrške: koristite Startup Suite iznad. Kompilirane datoteke `.fas` i `.vlx` te izvorni programi i dalje se odbijaju.

## Ponovno učitajte datoteku iz povijesti

{{ui:Povijest}} navodi datoteke koje ste učitali u ovom pregledniku, najnovije prve. Kliknite {{ui:Učitaj}} pored jedne da je ponovno učitate, bez traženja na računalu.

## Datoteke koje CadCraft ne može učitati

| Datoteka | Što je | Što učiniti |
|---|---|---|
| `.fas`, `.vlx` | kompilirani ili zaštićeni LISP | učitajte izvorni `.lsp` |
| `.arx`, `.crx`, `.dbx` | izvorni Windows programi | u CadCraftu ih nije moguće pokrenuti |
| `.dvb` | VBA projekt | u CadCraftu ih nije moguće pokrenuti |
| `.craft`, `.lua`, `.py` | CraftScript skripte | otvorite ih u radnom prostoru za skripte u PartCraftu |

Dijalog {{ui:Učitaj aplikacije}} pokazuje o kojoj je od ovih datoteka riječ kad je odaberete.

## Zaustavite rutinu

Pritisnite {{key:Esc}}. Na jednom od upita rutine, Esc je otkazuje onako kako rutina očekuje (pokreće se njezino vlastito čišćenje). Ako je zauzeta i ništa ne traži, Esc je potpuno zaustavlja i to javlja; vaše učitane rutine ostaju učitane.

:::note
Sve što rutina promijeni u crtežu jedan je korak: jedan {{key:Mod+Z}} sve poništava.
:::
