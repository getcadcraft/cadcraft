---
title: Slaganje spratova u jednom crtežu
summary: Nacrtajte prvi sprat preko prizemlja na istim koordinatama i isključite svaki sprat, bez spoljnih referenci.
keywords: sprat, spratovi, FLOORS, FLR, FLOOR, FLOORLAYERS, nivo, slaganje, radni sloj, prostor modela, podloga, xref
from: 7440fc87
---

Spratovi vam omogućavaju da slažete osnove u jednom prostoru modela. Svaki sprat ima svoje objekte, a slojevi rade u svim njima. Zid na `P-Walls` može biti na bilo kom spratu.

## Početak

Otkucajte `FLOORS` (`FLR`), ili izaberite {{ui:Floors…}} u meniju {{ui:More}} grupe {{ui:View}}, pa izaberite {{ui:Start with floors}}. Ono što ste do sada nacrtali ide na prizemlje.

## Crtanje na spratu

Izaberite sprat okruglim dugmetom u panelu. Novi objekti idu na njega.

Ostali spratovi koji su uključeni prikazuju se zabledelo ispod njega. Možete da se hvatate za njih, pa se prvi sprat poravnava sa prizemljem, ali ih ne možete menjati dok ih ne napravite aktivnim. Oko isključuje sprat. Zidovi se spajaju samo sa zidovima na svom spratu.

Da započnete sprat od onog ispod, izaberite šta želite, izaberite sprat u panelu i pritisnite {{ui:Copy there}}.

## Stavljanje spratova na listove

Izaberite prozor pogleda na listu i izaberite njegov sprat pod {{ui:Floor shown}} u svojstvima. Prozor pogleda bez izabranog sprata prikazuje sve spratove koji su uključeni.

## Slanje datoteke drugoj osobi

Drugi CAD programi ne znaju za spratove, pa prikazuju sve spratove zajedno. Pre slanja datoteke izaberite {{ui:Turn floors into layers}} u panelu, ili otkucajte `FLOORLAYERS`. Svaki objekat prelazi na sloj nazvan po svom spratu, kao `Ground floor-P-Walls`, pa i dalje mogu da isključe svaki sprat. Opozovi ga vraća. CadCraft čuva spratove u DWG ili DXF datoteci koju sačuva.
