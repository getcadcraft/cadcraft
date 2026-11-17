---
title: Koristite parametre i jednačine
summary: Imenujte veličine, upravljajte njima izrazima poput width / 2, i unesite broj na upravljanoj veličini da promijenite ono što je upravlja.
keywords: parametri, par, upravljač parametara, jednačine, izrazi, varijable, dvosmjerno, namjera dizajna, korisnički parametar, fx
from: 650b9844
---

## Jedna tabela za sve veličine

Panel {{ui:Parameters}} (dugme {{ui:Parameters}} u grupi {{ui:Parametric}}, ili ukucajte {{cmd:PARAMETERS}}) navodi svako dimenziono ograničenje (`d1`, `rad1`, `dia1`, `ang1`, ili naziv koji ste mu dali) i vaše vlastite parametre zajedno. Svaki naziv može se koristiti u bilo kojem izrazu.

Svaki red ima:

- **Naziv**: ukucajte novi da ga preimenujete; svaki izraz koji ga koristi slijedi.
- **Izraz**: broj (`40`) ili izraz (`width / 2 + gap`). Ukucajte ga i pritisnite {{key:Enter}}: crtež slijedi.
- **Vrijednost**: ono što izraz izračuna. U redu koji izraz upravlja, i ovdje možete ukucati broj: CadCraft izračuna parametar iza njega. Uz `d1 = width / 2`, unos `30` u vrijednost d1 postavlja `width` na 60.

Kad dva parametra upravljaju vrijednošću (`width / 2 + gap`), dijalog pita koji da se promijeni. Svaka izmjena je jedan korak poništavanja ({{key:Mod+Z}}).

## Dodajte svoj

1. Otvorite panel {{ui:Parameters}}.
2. Ukucajte naziv (`gap`) i vrijednost (`10`), pa izaberite {{ui:Add}}.
3. Koristite ga: u izrazu d1 ukucajte `width / 2 + gap` i pritisnite {{key:Enter}}.

Nazivi počinju slovom ili `_` i sadrže slova, cifre i `_`. Nazivi funkcija, `pi` i nazivi jedinica ne mogu biti nazivi parametara.

## Izrazi

| Piše | Znači |
|---|---|
| `+ - * / ^ %` | sabiranje, oduzimanje, množenje, dijeljenje, stepen, ostatak |
| `( )` | grupisanje |
| `sin cos tan asin acos atan atan2` | trigonometrija u stepenima |
| `sqrt pow exp ln log abs sign` | korijeni, stepeni, logaritmi |
| `ceil floor int round min max` | zaokruživanje i granice |
| `if(a > b, x, y)` | izbor |
| `pi` | 3.14159… |

Brojevi mogu imati jedinicu: `25mm`, `1in`, `2'`, `90deg`. Dužine s jedinicom pretvaraju se u milimetre, pa jedinice koristite samo u crtežima mjerenim u milimetrima; inače unosite obične brojeve.

## U komandnoj liniji

`-PARAMETERS` radi isto bez panela: `N` (novi), [Izmijeni (E)] (uključujući dimenziono ograničenje), [Preimenuj (R)], [Obriši (D)], `?` (spisak).

## Šta se odbija

- Izraz koji koristi sam sebe, direktno ili preko drugih: "width, d1 koriste jedno drugo."
- Vrijednost koju veličina ne može primiti: negativna dužina, ugao veći od 180°.
- Vrijednost koju crtež ne može primiti uz ostala ograničenja: ništa se ne mijenja, a poruka navodi ograničenja koja smetaju.
- Brisanje parametra koji nešto koristi: panel nudi da prvo upiše njegovu vrijednost u te izraze. Naziv dimenzionog ograničenja briše se brisanjem ograničenja.
