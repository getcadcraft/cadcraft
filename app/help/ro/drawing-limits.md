---
title: Stabilirea limitelor desenului
summary: LIMITS stabilește un dreptunghi pentru desen. Grila îl umple, ZOOM Toate îl arată, iar cu limitele pornite, punctele din afara lui sunt refuzate. Sunt salvate în fișiere DWG și DXF.
keywords: limite, limitele desenului, LIMITS, LIMMIN, LIMMAX, LIMCHECK, grilă, în afara limitelor, dimensiunea foii, zonă de desen, zoom all, contur
from: 9e97b30d
---

**Limitele desenului** sunt un dreptunghi care spune cât de mare trebuie să fie desenul: zona în care plănuiți să desenați, cum ar fi o foaie de 420 × 297. Un desen nou nu are niciuna, deci grila și zona de desen sunt nelimitate, ca înainte.

## Stabilirea lor

Tastați {{cmd:LIMITS}} și răspundeți:

- `Specificați colțul din stânga jos sau [ON/OFF] <0,0>`: un punct, sau {{key:Enter}} ca să păstrați cel curent.
- `Specificați colțul din dreapta sus <420,297>`: un punct, sau {{key:Enter}} ca să păstrați cel curent. Trebuie să fie deasupra și în dreapta primului.

Sau tastați `ON` ori `OFF` la prima întrebare, ca să comutați verificarea fără să schimbați dreptunghiul. Stabilirea colțurilor este un singur pas de anulare, la fel și fiecare ON și OFF.

## Ce fac

- **Grila umple limitele** și se oprește la margine. Este o imagine a zonei, deci activați {{ui:Grilă}} ca să o vedeți.
- **ZOOM Toate** ({{cmd:ZOOM}}, apoi {{ui:Toate}}) arată limitele și desenul împreună; {{ui:Extinderi}} arată în continuare doar desenul.
- **Cu limitele ON**, un punct tastat sau pe care se face clic în afara lor este refuzat cu `**În afara limitelor`, iar promptul rămâne. Se aplică comenzilor care creează obiecte: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, comenzile de cotare și câteva altele. Comenzile care doar mută, selectează sau măsoară nu sunt limitate, la fel nici lipirea, tragerea unui mâner sau un obiect creat de o rutină LISP: limitele sunt un ghid pentru desenare, nu un perete. Cu limitele OFF nu se refuză nimic.
- Obiectele care sunt deja în afară rămân unde sunt.

## În fișiere și LISP

Sunt salvate în DWG și DXF ca `$LIMMIN`, `$LIMMAX` și `$LIMCHECK`. Un fișier de la alt program, care are doar limitele implicite ale programului respectiv (0,0 până la 12,9 sau 420,297, cu verificarea dezactivată), se deschide fără niciuna, ca grila să nu fie comprimată într-un dreptunghi mic; un fișier cu limite proprii, sau cu verificarea pornită, le păstrează. În LISP, `(getvar "LIMMIN")`, `LIMMAX` și `LIMCHECK` le citesc, iar `setvar` le scrie, ca un singur pas de anulare.

Limitele aparțin modelului. O foaie (aranjare în pagină) are propria dimensiune de hârtie.
