---
title: Zamjene klasa u viewportu
summary: Na listu sakrijte klasu ili joj dajte drugu boju, debljinu linije ili ispunu samo u jednom viewportu; model i ostali viewporti ostaju kakvi jesu.
keywords: viewport, zamjena klase, zamjena viewporta, sakrij klasu u viewportu, list, layout, VPLAYER, plotanje, Vectorworks
from: c1a2b51f
---

Na listu se često isti model prikazuje više puta: tlocrt s namještajem i tlocrt bez njega ili plan rasvjete na kojem su samo svjetiljke u boji. Zamjena klase u viewportu mijenja kako se jedna [klasa](topic:classes) prikazuje **samo u tom viewportu**.

1. Otvorite list i odaberite jedan viewport.
2. Otvorite ploču Klase (`CLASSES`) i odaberite klasu.
3. Pod {{ui:Ovaj viewport}} označite {{ui:Sakrij u ovom viewportu}} ili postavite {{ui:Boja ovdje}}, {{ui:Debljina linije ovdje}} ili {{ui:Ispuna ovdje}}.

Popis ispod prikazuje svaku klasu koju ovaj viewport mijenja. {{ui:Očisti zamjene ovog viewporta}} uklanja ih sve. Svaka promjena je jedan korak poništavanja.

## Što zamjena mijenja

- **Sakrij** skriva klasu i svaku klasu ispod nje u ovom viewportu.
- **Boja, debljina linije i ispuna** mijenjaju objekte klase čija vrijednost nije postavljena na samom objektu, to jest objekte koji je preuzimaju po klasi ili po sloju. Objekt sa svojom bojom zadržava je, kao i kod zamjene sloja u viewportu.

Zamjene se prikazuju na zaslonu i u plotovima i PDF-ovima, uključujući set listova objavljen u PDF. Rade zajedno sa zamrznutim slojevima viewporta i zamjenama slojeva.

Zamjene se spremaju s crtežom u DWG i DXF (s popisom klasa, u bloku `CADCRAFT_CLASSES`) i vraćaju se na isti viewport kad se datoteka otvori u CadCraftu.
