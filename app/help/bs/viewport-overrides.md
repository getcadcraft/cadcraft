---
title: Izmjene klasa u prozoru
summary: Na listu sakrij klasu ili joj daj drugu boju, debljinu ili ispunu samo u jednom prozoru; model i ostali prozori ostaju isti.
keywords: prozor, izmjena klase, izmjena prozora, sakrij klasu u prozoru, list, raspored, VPLAYER, iscrtavanje, Vectorworks
from: c1a2b51f
---

List često prikazuje isti model više puta: plan s namještajem i plan bez njega, ili plan rasvjete na kojem su u boji samo svjetla. Izmjena klase u prozoru mijenja kako se jedna [klasa](topic:classes) prikazuje **samo u tom prozoru**.

1. Otvori list i izaberi jedan prozor.
2. Otvori panel Klase (`CLASSES`) i izaberi klasu.
3. Pod {{ui:Ovaj prozor}} označi {{ui:Sakrij u ovom prozoru}}, ili postavi {{ui:Boja ovdje}}, {{ui:Debljina ovdje}} ili {{ui:Ispuna ovdje}}.

Spisak ispod prikazuje svaku klasu koju ovaj prozor mijenja. {{ui:Obriši izmjene ovog prozora}} skida sve njih. Svaka promjena je jedan korak poništavanja.

## Šta izmjena mijenja

- **Sakrij** skriva klasu i svaku klasu ispod nje u ovom prozoru.
- **Boja, debljina i ispuna** mijenjaju objekte klase čija vrijednost nije postavljena na samom objektu, to jest objekte koji je preuzimaju po klasi ili po sloju. Objekat koji ima svoju boju je zadržava, kao i kod izmjene sloja u prozoru.

Izmjene se vide na ekranu i u štampi i PDF-ovima, uključujući set listova objavljen u PDF. Rade zajedno sa zamrznutim slojevima prozora i izmjenama slojeva prozora.

Izmjene se čuvaju uz crtež u DWG i DXF (sa spiskom klasa u bloku `CADCRAFT_CLASSES`) i vraćaju se na isti prozor kad se datoteka otvori u CadCraftu.
