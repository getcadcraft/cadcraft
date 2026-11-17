---
title: Koristi parametre i jednačine
summary: Imenuj mere, upravljaj njima izrazima poput width / 2, i ukucaj broj na upravljanoj meri da promeniš ono što je upravlja.
keywords: parametri, par, menadžer parametara, jednačine, izrazi, promenljive, dvosmerno, namera dizajna, korisnički parametar, fx
from: 650b9844
---

## Jedna tabela za svaku meru

Panel {{ui:Parameters}} (dugme {{ui:Parameters}} u grupi {{ui:Parametric}}, ili ukucaj {{cmd:PARAMETERS}}) navodi svaku dimenzionu vezu (`d1`, `rad1`, `dia1`, `ang1`, ili ime koje si dao) i tvoje parametre zajedno. Svako ime može se koristiti u bilo kom izrazu.

Svaki red ima:

- **Ime**: ukucaj novo da ga preimenuješ; svaki izraz koji ga koristi prati.
- **Izraz**: broj (`40`) ili izraz (`width / 2 + gap`). Ukucaj u njemu i pritisni {{key:Enter}}: crtež prati.
- **Vrednost**: ono što se izračuna. Na redu koji izraz upravlja, možeš ovde i da ukucaš broj: CadCraft izračuna parametar iza njega. Sa `d1 = width / 2`, ukucavanje `30` u vrednost od d1 postavlja `width` na 60.

Kad dva parametra upravljaju vrednošću (`width / 2 + gap`), dijalog pita koji da se promeni. Svaka promena je jedan korak opoziva ({{key:Mod+Z}}).

## Dodaj svoj

1. Otvori panel {{ui:Parameters}}.
2. Ukucaj ime (`gap`) i vrednost (`10`), pa izaberi {{ui:Add}}.
3. Koristi ga: u izrazu d1, ukucaj `width / 2 + gap` i pritisni {{key:Enter}}.

Imena počinju slovom ili `_` i sadrže slova, cifre i `_`. Imena funkcija, `pi` i imena jedinica ne mogu biti imena.

## Izrazi

| Piše | Znači |
|---|---|
| `+ - * / ^ %` | sabiranje, oduzimanje, množenje, deljenje, stepen, ostatak |
| `( )` | grupisanje |
| `sin cos tan asin acos atan atan2` | trigonometrija u stepenima |
| `sqrt pow exp ln log abs sign` | koreni, stepeni, logaritmi |
| `ceil floor int round min max` | zaokruživanje i granice |
| `if(a > b, x, y)` | izbor |
| `pi` | 3.14159… |

Brojevi mogu imati jedinicu: `25mm`, `1in`, `2'`, `90deg`. Dužine sa jedinicom pretvaraju se u milimetre, pa jedinice koristi samo u crtežima merenim u milimetrima; inače unesi obične brojeve.

## U komandnoj liniji

`-PARAMETERS` radi isto bez panela: `N` novo, `E` izmeni (i dimenzionu vezu), `R` preimenuj, `D` obriši, `?` lista.

## Šta se odbija

- Izraz koji koristi sebe, direktno ili preko drugih: „width, d1 se međusobno koriste.“
- Vrednost koju mera ne može da primi: negativna dužina, ugao preko 180°.
- Vrednost koju crtež ne može da primi uz ostala ograničenja: ništa se ne menja, a poruka navodi ograničenja na putu.
- Brisanje parametra koji nešto koristi: panel nudi da prvo upiše njegovu vrednost u njih. Dimenziona veza se briše brisanjem veze.
