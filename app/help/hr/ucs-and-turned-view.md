---
title: Okretanje pogleda i korištenje vlastitih koordinata (UCS)
summary: Okrenite pogled za 90° ili za bilo koji kut bez pomicanja ičega u crtežu i postavite korisnički koordinatni sustav (UCS) tako da točke, orto, polarno praćenje, mreža i novi tekst slijede vlastite osi zgrade.
keywords: ucs, korisnički koordinatni sustav, tlocrt, okreni pogled, rotiraj pogled, uvijanje pogleda, ucs z, ucs 3point, ucs object, ucs world, imenovani ucs, ucsfollow, turnleft, turnright, turnworld, zgrada pod kutom, zakrenuta mreža
from: 6f152c65
---

## Što ćete naučiti

Kako gledati crtež okrenut tako da zgrada nacrtana pod kutom bude pravilno na zaslonu i kako upisivati točke duž njezinih osi. Ništa se u crtežu ne pomiče dok to radite: objekti zadržavaju svoje koordinate, okretanje nije izmjena, a crtež se ne označava kao promijenjen.

## Okrenite pogled za četvrtinu

1. Kliknite {{ui:Pogled}} › {{ui:Više}} › {{ui:Okreni prikaz 90° ulijevo}} ili {{ui:Okreni prikaz 90° udesno}}.

Crtež se okreće na zaslonu oko sredine područja crtanja. Ponovite da nastavite okretati.

2. Kliknite {{ui:Pogled}} › {{ui:Više}} › {{ui:Natrag na svijet}} da ga ponovo poravnate.

Naredbe iza njih su {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} i {{cmd:TURNWORLD}}. Da jednoj dodijelite tipku, dodajte redak poput `TL=TURNLEFT` svojim alijasima s {{cmd:ALIASEDIT}}.

## Poravnajte s zgradom pod kutom

1. Upišite `UCS` i pritisnite {{key:Enter}}, zatim `OB` i {{key:Enter}}.
2. Kliknite liniju zida blizu kraja koji treba biti ishodište.

UCS sada počinje na tom kraju s osi X duž zida, a pogled se okreće tako da je zid vodoravan na zaslonu. Ikona osi u donjem lijevom kutu pokazuje kamo pokazuju osi UCS-a.

3. Crtajte kao obično. S postavljenim UCS-om:
   - `x,y` i `@dx,dy` mjere se duž osi UCS-a; `d<a` mjeri kut od osi X UCS-a.
   - {{ui:Orto}}, polarno praćenje i mreža slijede osi UCS-a, a tako i nitni križ.
   - Novi tekst i novi odlomci idu duž osi X UCS-a; vodoravne i okomite kote iz {{cmd:DIMLINEAR}} također ga slijede.
   - Koordinate u statusnoj traci i iz {{cmd:ID}} su koordinate UCS-a.
4. Da upišete točku svijeta dok je UCS postavljen, stavite `*` ispred: `*0,0` ili `@*100,0`.
5. Upišite `UCS`, {{key:Enter}}, zatim opet {{key:Enter}} za povratak na svijet.

## Ostali načini postavljanja UCS-a

Na upitu {{cmd:UCS}}:

| Upišete | Što radi |
|---|---|
| točku | Novo ishodište; zatim kliknite točku na novoj osi X ili pritisnite {{key:Enter}} za zadržavanje kuta |
| `Z` | Okreće UCS oko njegova ishodišta za kut koji upišete (stupnjevi, suprotno kazaljci na satu) ili odaberete |
| `3` (3point) | Ishodište, točka duž pozitivne osi X i točka na pozitivnoj strani Y |
| `OB` (Objekt) | Iz linije, luka, kružnice, segmenta polilinije, teksta, reference bloka, točke ili konstrukcijske linije |
| `P` (Prethodni) | UCS prije ovoga (zadnjih deset se čuva dok je crtež otvoren) |
| `W` (Svijet) | Natrag na svijet |
| `NA` (Imenovani) | `S` sprema trenutni UCS pod nazivom, `R` vraća jedan, `D` briše jedan, `?` ih popisuje |

Svaka promjena okreće pogled tako da je nova os X UCS-a vodoravna. {{cmd:PLAN}} okreće pogled bez promjene UCS-a: {{key:Enter}} za trenutni UCS, `U` za spremljeni, `W` za svijet.

## Dobro je znati

- Svako okno podijeljenog zaslona zadržava svoje okretanje. UCS pripada crtežu.
- Listovi rade u koordinatama papira; postavite UCS na kartici {{ui:Model}} ili unutar viewporta.
- Okviri odabira povučeni u okrenutom pogledu odabiru ono što je unutar njih na zaslonu.
- LISP rutine dobivaju točke u UCS-u iz `getpoint`, mogu čitati `UCSORG`, `UCSXDIR`, `UCSYDIR` i `VIEWTWIST`, a `trans` pretvara između svijeta, UCS-a i prikaza.

:::note
Spremljena datoteka će u kasnijoj verziji čuvati UCS i okretanje pogleda; do tada oni vrijede dok je crtež otvoren.
:::
