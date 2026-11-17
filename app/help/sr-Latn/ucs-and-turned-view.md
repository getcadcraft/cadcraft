---
title: Okreni pogled i koristi sopstvene koordinate (UCS)
summary: Okreni pogled za 90° ili pod bilo kojim uglom bez pomeranja ičega u crtežu, i postavi korisnički koordinatni sistem (UCS) da tačke, orto, polarno praćenje, mreža i novi tekst prate sopstvene ose zgrade.
keywords: ucs, korisnički koordinatni sistem, tlocrt, okreni pogled, rotiraj pogled, uvrtanje pogleda, ucs z, ucs 3point, ucs objekat, ucs svet, imenovani ucs, ucsfollow, turnleft, turnright, turnworld, zgrada pod uglom, zarotirana mreža
from: 6f152c65
---

## Šta ćeš naučiti

Kako da gledaš crtež okrenut, tako da zgrada nacrtana pod uglom izgleda pravo na ekranu, i kako da kucaš tačke duž njenih sopstvenih osa. Ništa u crtežu se ne pomera dok to radiš: objekti zadržavaju svoje koordinate, okretanje nije izmena, a crtež se ne označava kao promenjen.

## Okreni pogled za četvrtinu

1. Klikni {{ui:Pogled}} › {{ui:Više}} › {{ui:Okreni pogled 90° ulevo}} ili {{ui:Okreni pogled 90° udesno}}.

Crtež se okreće na ekranu oko sredine područja crtanja. Ponovi da nastaviš da okrećeš.

2. Klikni {{ui:Pogled}} › {{ui:Više}} › {{ui:Nazad na svet}} da ga ponovo poravnaš.

Komande iza njih su {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} i {{cmd:TURNWORLD}}. Da bi jedna imala taster, dodaj liniju kao `TL=TURNLEFT` svojim aliasima sa {{cmd:ALIASEDIT}}.

## Poravnaj se sa zgradom pod uglom

1. Ukucaj `UCS` i pritisni {{key:Enter}}, pa `OB` i {{key:Enter}}.
2. Klikni liniju zida blizu kraja koji treba da bude početak.

UCS sada počinje na tom kraju, sa X osom duž zida, a pogled se okreće tako da je zid vodoravan na ekranu. Ikona ose u donjem levom uglu pokazuje kuda gledaju ose UCS-a.

3. Crtaj kao obično. Sa postavljenim UCS-om:
   - `x,y` i `@dx,dy` se mere duž osa UCS-a; `d<a` meri ugao od X ose UCS-a.
   - {{ui:Ortogonalno}}, polarno praćenje i {{ui:Mreža}} prate ose UCS-a, a tako i ukrštanje.
   - Novi tekst i novi pasusi idu duž X ose UCS-a; vodoravna i uspravna {{cmd:DIMLINEAR}} prate je takođe.
   - Koordinate u statusnoj traci i iz {{cmd:ID}} su koordinate UCS-a.
4. Da ukucaš tačku sveta dok je UCS postavljen, stavi `*` ispred: `*0,0` ili `@*100,0`.
5. Ukucaj `UCS`, {{key:Enter}}, pa još jednom {{key:Enter}} da se vratiš na svet.

## Drugi načini da postaviš UCS

Na upitu {{cmd:UCS}}:

| Ukucaš | Šta radi |
|---|---|
| tačku | Novi početak; zatim klikni tačku na novoj X osi, ili pritisni {{key:Enter}} da zadržiš ugao |
| `Z` | Okreće UCS oko njegovog početka za ugao koji ukucaš (stepeni, suprotno kazaljci na satu) ili izabereš |
| `3` (3point, 3 tačke) | Početak, tačka duž pozitivne X ose i tačka na strani pozitivne Y ose |
| `OB` (OBject, objekat) | Iz linije, luka, kruga, segmenta polilinije, teksta, reference bloka, tačke ili konstrukcione linije |
| `P` (Previous, prethodni) | UCS pre ovog (poslednjih deset se čuva dok je crtež otvoren) |
| `W` (World, svet) | Nazad na svet |
| `NA` (NAmed, imenovani) | `S` čuva tekući UCS pod imenom, `R` vraća jedan, `D` briše jedan, `?` ih navodi |

Svaka promena okreće pogled tako da je nova X osa UCS-a vodoravna. {{cmd:PLAN}} okreće pogled bez menjanja UCS-a: {{key:Enter}} za tekući UCS, `U` za sačuvan, `W` za svet.

## Dobro je znati

- Svaki deo podeljenog ekrana zadržava svoje okretanje. UCS pripada crtežu.
- Listovi rade u koordinatama papira; postavi UCS na kartici {{ui:Model}}, ili unutar prozora pogleda.
- Prozori izbora prevučeni u okrenutom pogledu biraju ono što leži unutar njih na ekranu.
- LISP rutine dobijaju tačke u UCS-u iz `getpoint`, mogu da čitaju `UCSORG`, `UCSXDIR`, `UCSYDIR` i `VIEWTWIST`, a `trans` preračunava između sveta, UCS-a i prikaza.

:::note
Sačuvana datoteka će u kasnijoj verziji čuvati UCS i okretanje pogleda; dotle traju dok je crtež otvoren.
:::
