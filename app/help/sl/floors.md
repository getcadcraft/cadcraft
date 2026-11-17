---
title: Zložite etaže v eni risbi
summary: Narišite prvo etažo nad pritličjem na istih koordinatah in izklopite vsako etažo, brez zunanjih sklicev (Xref).
keywords: etaža, etaže, FLOORS, FLR, FLOOR, FLOORLAYERS, nivo, zlaganje, projektni sloj, prostor modela, podloga, xref
from: 7440fc87
---

Etaže vam omogočajo zlaganje tlorisov v enem prostoru modela. Vsaka etaža ima svoje objekte, sloji pa delujejo čez vse. Zid na `P-Walls` je lahko na kateri koli etaži.

## Začetek

Vpišite `FLOORS` (`FLR`) ali izberite {{ui:Etaže…}} v meniju {{ui:Več}} skupine {{ui:Pogled}}, nato izberite {{ui:Začnite z etažami}}. Kar ste do zdaj narisali, gre na pritličje.

## Risanje na etaži

Izberite etažo z okroglim gumbom v podoknu. Novi objekti gredo nanjo.

Druge vklopljene etaže so prikazane zbledele pod njo. Lahko lovite nanje, da se prva etaža poravna s pritličjem, vendar jih ne morete spreminjati, dokler jih ne naredite za aktivno etažo. Ikona očesa izklopi etažo. Zidovi se združujejo samo z zidovi na svoji etaži.

Če želite začeti etažo iz spodnje, izberite, kar želite, izberite etažo v podoknu in pritisnite {{ui:Kopiraj tja}}.

## Etaže na listih

Izberite pogledno okno na listu in izberite njegovo etažo pod {{ui:Prikazana etaža}} v Lastnostih. Pogledno okno, pri katerem etaža ni izbrana, prikaže vse vklopljene etaže.

## Pošljite datoteko nekomu drugemu

Drugi CAD programi ne poznajo etaž, zato prikažejo vse etaže skupaj. Preden pošljete datoteko, izberite {{ui:Spremeni etaže v sloje}} v podoknu ali vpišite `FLOORLAYERS`. Vsak objekt se premakne na sloj, poimenovan po svoji etaži, na primer `Ground floor-P-Walls`, tako da lahko še vedno izklopite vsako etažo. Razveljavitev to povrne. CadCraft etaže shrani v datoteki DWG ali DXF, ki jo shrani.
