---
title: Izmene klasa u prozoru pogleda
summary: Na listu sakrijte klasu ili joj dajte drugu boju, debljinu linije ili ispunu samo u jednom prozoru pogleda; model i ostali prozori ostaju kakvi jesu.
keywords: prozor pogleda, izmena klase, izmena prozora pogleda, sakrij klasu u prozoru, list, raspored, VPLAYER, štampa, Vectorworks
from: c1a2b51f
---

Na listu se često vidi isti model više puta: plan sa nameštajem i plan bez njega, ili plan rasvete gde su samo svetiljke u boji. Izmena klase u prozoru pogleda menja kako se jedna [klasa](topic:classes) prikazuje **samo u tom prozoru pogleda**.

1. Otvorite list i izaberite jedan prozor pogleda.
2. Otvorite panel Klase (`CLASSES`) i izaberite klasu.
3. Pod {{ui:Ovaj prozor pogleda}}, štiklirajte {{ui:Sakrij u ovom prozoru}}, ili podesite {{ui:Boja ovde}}, {{ui:Debljina ovde}} ili {{ui:Ispuna ovde}}.

Spisak ispod prikazuje svaku klasu koju ovaj prozor pogleda menja. {{ui:Obriši izmene ovog prozora pogleda}} uklanja sve njih. Svaka izmena je jedan korak opoziva.

## Šta izmena menja

- **Sakrij** skriva klasu i sve klase ispod nje u ovom prozoru pogleda.
- **Boja, debljina linije i ispuna** menjaju objekte klase čija vrednost nije podešena na samom objektu, to jest objekte koji je preuzimaju po klasi ili po sloju. Objekat sa sopstvenom bojom zadržava je, kao i kod izmene sloja u prozoru pogleda.

Izmene se vide na ekranu i u štampi i PDF-ovima, uključujući set listova objavljen u PDF. Rade zajedno sa zamrznutim slojevima i izmenama slojeva prozora pogleda.

Izmene se čuvaju sa crtežom u DWG i DXF (sa spiskom klasa, u bloku `CADCRAFT_CLASSES`) i vraćaju se na isti prozor pogleda kada se datoteka otvori u CadCraft-u.
