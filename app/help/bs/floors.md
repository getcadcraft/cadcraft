---
title: Slaganje podova u jednom crtežu
summary: Nacrtajte prvi sprat preko prizemlja na istim koordinatama i isključite svaki pod, bez Xref-ova.
keywords: pod, podovi, FLOORS, FLR, FLOOR, FLOORLAYERS, sprat, nivo, slaganje, projektni sloj, prostor modela, podloga, xref
from: 7440fc87
---

Podovi vam omogućavaju da slažete planove u jednom prostoru modela. Svaki pod ima svoje objekte, a slojevi rade preko svih njih. Zid na `P-Walls` može biti na bilo kom podu.

## Početak

Upišite `FLOORS` (`FLR`), ili odaberite {{ui:Floors…}} › "Podovi…" u meniju {{ui:More}} › "Više" grupe {{ui:View}} › "Pogled", pa odaberite {{ui:Start with floors}} › "Počni s podovima". Ono što ste do sada nacrtali ide na prizemlje.

## Crtanje na podu

Izaberite pod okruglim dugmetom u panelu. Novi objekti idu na njega.

Ostali podovi koji su uključeni prikazuju se zatamnjeno ispod njega. Možete se hvatati za njih, tako da se prvi pod poravnava s prizemljem, ali ih ne možete mijenjati dok ih ne napravite aktivnim podom. Oko isključuje pod. Zidovi se spajaju samo sa zidovima na svom podu.

Da započnete pod iz onog ispod, odaberite ono što želite, izaberite pod u panelu i pritisnite {{ui:Copy there}} › "Kopiraj tamo".

## Stavljanje podova na listove

Odaberite prozor na listu i izaberite njegov pod pod {{ui:Floor shown}} › "Prikazani pod" u Svojstvima. Prozor kome nije izabran pod prikazuje sve podove koji su uključeni.

## Slanje datoteke nekome drugom

Drugi CAD programi ne poznaju podove, pa prikazuju sve podove zajedno. Prije slanja datoteke, izaberite {{ui:Turn floors into layers}} › "Pretvori podove u slojeve" u panelu ili upišite `FLOORLAYERS`. Svaki objekat prelazi na sloj nazvan po svom podu, kao `Prizemni pod-P-Walls`, pa i dalje mogu isključiti svaki pod. Poništavanje to vraća. CadCraft čuva podove u DWG ili DXF datoteci koju spašava.
