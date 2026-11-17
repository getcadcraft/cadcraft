---
title: Okreni pogled i koristi vlastite koordinate (UCS)
summary: Okreni pogled za 90° ili pod bilo kojim uglom bez pomjeranja ičega u crtežu, i postavi korisnički koordinatni sistem (UCS) da tačke, orto, polarno praćenje, mreža i novi tekst slijede sopstvene ose zgrade.
keywords: ucs, korisnički koordinatni sistem, plan, okreni pogled, rotiraj pogled, uvrtanje pogleda, ucs z, ucs 3point, ucs objekat, ucs svijet, imenovani ucs, ucsfollow, turnleft, turnright, turnworld, zgrada pod uglom, rotirana mreža
from: 6f152c65
---

## Šta ćeš naučiti

Kako gledati crtež okrenut, tako da zgrada nacrtana pod uglom izgleda pravilno na ekranu, i kako unositi tačke duž njenih sopstvenih osa. Ništa se u crtežu ne pomjera dok to radiš: objekti zadržavaju svoje koordinate, okretanje nije izmjena, i crtež se ne označava kao promijenjen.

## Okreni pogled za četvrt

1. Klikni {{ui:Pogled}} › {{ui:Više}} › {{ui:Okreni pogled 90° ulijevo}} ili {{ui:Okreni pogled 90° udesno}}.

Crtež se okreće na ekranu oko sredine područja crtanja. Ponovi da nastaviš okretanje.

2. Klikni {{ui:Pogled}} › {{ui:Više}} › {{ui:Nazad na svijet}} da ga vratiš u ravan položaj.

Naredbe iza njih su {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} i {{cmd:TURNWORLD}}. Da bi jedna od njih dobila tipku, dodaj liniju kao `TL=TURNLEFT` u svoje alijase sa {{cmd:ALIASEDIT}}.

## Poravnaj se sa zgradom pod uglom

1. Upiši `UCS` i pritisni {{key:Enter}}, zatim `OB` i {{key:Enter}}.
2. Klikni liniju zida blizu kraja koji treba da bude ishodište.

UCS sada počinje na tom kraju, sa X osom duž zida, a pogled se okreće tako da je zid vodoravan na ekranu. Ikona osa u donjem lijevom uglu pokazuje kuda gledaju ose UCS-a.

3. Crtaj kao obično. Uz postavljen UCS:
   - `x,y` i `@dx,dy` se mjere duž osa UCS-a; `d<a` mjeri ugao od X ose UCS-a.
   - {{ui:Ortogonalno}}, polarno praćenje i mreža slijede ose UCS-a, kao i nišan.
   - Novi tekst i novi pasusi idu duž X ose UCS-a; vodoravna i vertikalna {{cmd:DIMLINEAR}} također je slijede.
   - Koordinate u statusnoj traci i iz {{cmd:ID}} su koordinate UCS-a.
4. Da upišeš tačku svijeta dok je UCS postavljen, stavi `*` ispred: `*0,0` ili `@*100,0`.
5. Upiši `UCS`, {{key:Enter}}, pa još jedan {{key:Enter}} da se vratiš u svijet.

## Ostali načini postavljanja UCS-a

Na {{cmd:UCS}} upitu:

| Upisuješ | Šta radi |
|---|---|
| tačku | Novo ishodište; zatim klikni tačku na novoj X osi, ili pritisni {{key:Enter}} da zadržiš ugao |
| `Z` | Okreće UCS oko njegovog ishodišta za ugao koji upišeš (stepeni, suprotno kazaljci na satu) ili odabereš |
| `3` (3point) | Ishodište, tačka duž pozitivne X ose i tačka na pozitivnoj Y strani |
| `OB` (OBjekat) | Iz linije, luka, kruga, segmenta polilinije, teksta, reference bloka, tačke ili konstrukcijske linije |
| `P` (Prethodni) | UCS prije ovog (zadnjih deset se čuva dok je crtež otvoren) |
| `W` ([Svijet (W)]) | Nazad na svijet |
| `NA` (imenovani) | `S` čuva tekući UCS pod imenom, `R` vraća jedan, `D` briše jedan, `?` ih navodi |

Svaka promjena okreće pogled tako da je nova X osa UCS-a vodoravna. {{cmd:PLAN}} okreće pogled bez mijenjanja UCS-a: {{key:Enter}} za tekući UCS, `U` za sačuvani, `W` ([Svijet (W)]) za svijet.

## Dobro je znati

- Svaki dio podijeljenog ekrana zadržava svoje okretanje. UCS pripada crtežu.
- Listovi rade u koordinatama papira; postavi UCS na kartici {{ui:Model}}, ili unutar vidnog prozora.
- Prozori za odabir povučeni u okrenutom pogledu odabiru ono što leži unutar njih na ekranu.
- LISP rutine dobijaju tačke u UCS-u iz `getpoint`, mogu čitati `UCSORG`, `UCSXDIR`, `UCSYDIR` i `VIEWTWIST`, a `trans` pretvara između svijeta, UCS-a i prikaza.

:::note
Sačuvana datoteka će u kasnijoj verziji čuvati UCS i okretanje pogleda; do tada oni traju dok je crtež otvoren.
:::
