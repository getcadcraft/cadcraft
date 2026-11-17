---
title: Koristite parametre i jednadžbe
summary: Imenujte veličine, upravljajte njima izrazima poput width / 2 i upišite broj na vođenoj veličini da promijenite ono što je pokreće.
keywords: parametri, par, upravitelj parametara, jednadžbe, izrazi, varijable, dvosmjerno, namjera dizajna, korisnički parametar, fx
from: 650b9844
---

## Jedna tablica za sve veličine

Ploča {{ui:Parametri}} ({{ui:Parametri}} gumb u grupi {{ui:Parametarski}}, ili upišite {{cmd:PARAMETERS}}) navodi svako dimenzijsko ograničenje (`d1`, `rad1`, `dia1`, `ang1`, ili naziv koji ste mu dali) i vaše vlastite parametre zajedno. Bilo koji naziv može se koristiti u bilo kojem izrazu.

Svaki redak ima:

- **Naziv:** upišite novi za preimenovanje; svaki izraz koji ga koristi prati ga.
- **Izraz:** broj (`40`) ili izraz (`width / 2 + gap`). Upišite u njega i pritisnite {{key:Enter}}: crtež slijedi.
- **Vrijednost:** što se izračuna. U retku koji izraz pokreće možete ovdje upisati i broj: CadCraft izračuna parametar iza njega. Uz `d1 = width / 2`, upis `30` u vrijednost d1 postavlja `width` na 60.

Kad dva parametra određuju vrijednost (`width / 2 + gap`), dijaloški okvir pita koji treba promijeniti. Svaka promjena je jedan korak poništavanja ({{key:Mod+Z}}).

## Dodajte vlastiti

1. Otvorite ploču {{ui:Parametri}}.
2. Upišite naziv (`gap`) i vrijednost (`10`), zatim odaberite {{ui:Dodaj (A)}}.
3. Upotrijebite ga: u izrazu d1 upišite `width / 2 + gap` i pritisnite {{key:Enter}}.

Nazivi počinju slovom ili `_` i sadrže slova, znamenke i `_`. Nazivi funkcija, `pi` i nazivi jedinica ne mogu biti nazivi.

## Izrazi

| Piše | Znači |
|---|---|
| `+ - * / ^ %` | zbrajanje, oduzimanje, množenje, dijeljenje, potencija, ostatak |
| `( )` | grupiranje |
| `sin cos tan asin acos atan atan2` | trigonometrija u stupnjevima |
| `sqrt pow exp ln log abs sign` | korijeni, potencije, logaritmi |
| `ceil floor int round min max` | zaokruživanje i granice |
| `if(a > b, x, y)` | izbor |
| `pi` | 3.14159… |

Brojevi mogu nositi jedinicu: `25mm`, `1in`, `2'`, `90deg`. Duljine s jedinicom pretvaraju se u milimetre, pa jedinice koristite samo u crtežima mjerenim u milimetrima; inače upisujte obične brojeve.

## U naredbenom retku

`-PARAMETERS` radi isto bez ploče: `N` novi, `E` uređivanje (uključujući dimenzijsko ograničenje), `R` preimenuj, `D` izbriši, `?` popis.

## Što se odbija

- Izraz koji koristi sam sebe, izravno ili kroz druge: „width i d1 se međusobno koriste.“
- Vrijednost koju veličina ne može primiti: negativna duljina, kut veći od 180°.
- Vrijednost koju crtež ne može primiti uz ostala ograničenja: ništa se ne mijenja, a poruka navodi ograničenja koja smetaju.
- Brisanje parametra koji nešto koristi: ploča nudi da prvo upiše njegovu vrijednost u njih. Naziv dimenzijskog ograničenja briše se brisanjem ograničenja.
