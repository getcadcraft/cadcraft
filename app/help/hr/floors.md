---
title: Slaganje etaža u jednom crtežu
summary: Nacrtajte prvu etažu iznad prizemlja na istim koordinatama i isključite svaku etažu, bez Xref-ova.
keywords: etaža, etaže, FLOORS, FLR, FLOOR, FLOORLAYERS, kat, razina, slaganje, projektni sloj, prostor modela, podloga, xref
from: 7440fc87
---

Etaže vam omogućuju slaganje tlocrta u jednom prostoru modela. Svaka etaža ima vlastite objekte, a slojevi rade na svim njima. Zid na `P-Walls` može biti na bilo kojoj etaži.

## Početak

Upišite `FLOORS` (`FLR`) ili odaberite {{ui:Etaže…}} u izborniku {{ui:Više}} grupe {{ui:Pogled}}, zatim odaberite {{ui:Počnite s etažama}}. Ono što ste dotad nacrtali ide na prizemlje.

## Crtanje na etaži

Odaberite etažu okruglim gumbom u ploči. Novi objekti idu na nju.

Ostale etaže koje su uključene prikazuju se zatamnjeno ispod nje. Možete se hvatati za njih, pa se prva etaža poravnava s prizemljem, ali ih ne možete mijenjati dok ih ne postavite kao aktivnu etažu. Oko isključuje etažu. Zidovi se spajaju samo sa zidovima na vlastitoj etaži.

Da započnete etažu iz one ispod, odaberite što želite, odaberite etažu u ploči i pritisnite {{ui:Kopiraj tamo}}.

## Stavljanje etaža na listove

Odaberite viewport na listu i izaberite njegovu etažu pod {{ui:Prikazana etaža}} u Svojstvima. Viewport bez odabrane etaže prikazuje sve uključene etaže.

## Slanje datoteke drugoj osobi

Drugi CAD programi ne poznaju etaže, pa prikazuju sve etaže zajedno. Prije slanja datoteke odaberite {{ui:Pretvori etaže u slojeve}} u ploči ili upišite `FLOORLAYERS`. Svaki objekt prelazi na sloj nazvan po svojoj etaži, kao `Ground floor-P-Walls`, pa se svaka etaža i dalje može isključiti. Poništavanje to vraća. CadCraft čuva etaže u DWG ili DXF datoteci koju sprema.
