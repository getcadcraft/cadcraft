---
title: Podlage PDF in uvoz PDF
summary: Postavite stran PDF pod svojo risbo, da jo obrišete in izrišete, ali pretvorite črte in besedilo strani v objekte risbe.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, podlaga, obris, uvozi pdf, skeniranje, tloris, zbledi, obreži, sloji, lovljenje, odpri pdf
from: aa301d0f
---

## Dva načina za uvoz strani PDF

- **Priloži** ({{cmd:PDFATTACH}}) ohrani PDF kot sliko pod vašo risbo. Obrišete jo, lovite se na njene črte, zbledite jo, obrežete jo in se natisne skupaj z listom. Risba hrani samo ime datoteke.
- **Uvozi** ({{cmd:PDFIMPORT}}) spremeni črte, krivulje, polnila in besedilo strani v običajne objekte risbe na slojih, poimenovanih po datoteki PDF. Ti objekti so vaši za urejanje, datoteka PDF pozneje ni potrebna.

Če PDF odprete z {{ui:Odpri}}, vas program vpraša, kateri od obeh načinov želite.

## Priloži stran

1. Vpišite `PDFATTACH` (ali `PDFATT`) in izberite PDF. Če ima več strani, vpišite številko strani.
2. Kliknite vstavitveno točko (spodnji levi kot strani).
3. Pritisnite {{key:Enter}} za pravo velikost strani ali vpišite merilo: enote risbe na točko PDF (točka je 1/72 palca, zato je 0.3528 in v risbi v milimetrih).
4. Pritisnite {{key:Enter}} za brez zasuka ali vpišite kot.

Stran je objekt kot sklic na blok: premaknete jo, zasučete, spremenite merilo, kopirate, izbrišete in postavite na sloj. Če izklopite njen sloj, izgine. Ko povečate pogled, se stran ponovno nariše ostro.

## Obrisovanje

Ob vklopljenem {{ui:Lovljenje}} se kurzor prilepi na lastne črte datoteke PDF: končne točke, razpolovišča in presečišča (ter {{ui:Najbližje}}, kadar je to lovljenje vklopljeno). Besedilo, narisano kot črke na strani, se ne lovi.

## Prilagodite

- `PDFADJUST`: **Zbledi** (0 do 80 odstotkov), **Kontrast** (0 do 100), **Enobarvno** in **Vklop/izklop**, s katerim jo skrijete, ne da bi jo izbrisali.
- `PDFCLIP`: prikaže samo pravokotnik ali mnogokotnik strani; **Izbriši** odstrani obrezo.
- `PDFLAYERS`: datoteka PDF lahko ima lastne sloje. Ukaz jih našteje; vpišite številko, da ta sloj za to podlago vklopite ali izklopite. Sloji, ki so v datoteki izklopljeni, se začnejo izklopljeni.

## Izris in shranjevanje

PLOT izriše stran kot njene črte, polnila in besedilo (tako ostane ostra in jo je mogoče iskati). Slike v datoteki PDF so na zaslonu prikazane, vendar se še ne natisnejo.

DWG ali DXF 2000 ohrani podlago kot povezavo: ime datoteke, stran, kje leži, njeno merilo, zasuk, obrezo, zbledelost in kontrast. Sama datoteka PDF v risbi ni. Ponovno odprite risbo, vpišite `PDF` in znova izberite datoteko; strani so do takrat prikazane kot okvirji in dobijo svojo pravo velikost šele tedaj. Starejši DXF (R12) nima podlag: ohrani okvir in ime. Kako druge programe berejo shranjeno obrezo in merilo, še ni bilo preverjeno.

## Uvoz strani

1. Vpišite `PDFIMPORT` (ali `PDFIM`) in izberite datoteko PDF in stran.
2. Kliknite, kam naj pride spodnji levi kot strani.
3. Pritisnite {{key:Enter}} za pravo velikost, vpišite merilo ali izberite **Dve točki**: stran se nariše v pravi velikosti, nato kliknete dve točki na razdalji, ki jo poznate, in vpišete pravo razdaljo; vse se ustrezno spremeni v merilu.

Črte postanejo črte in polilinije, krogi in loki se prepoznajo, zapolnjene oblike postanejo polna senčenja, besedilo pa postane besedilo na sloju, ki se konča z `-TEXT`. Uvoz je en korak razveljavitve. Slike v datoteki PDF se ne uvozijo: namesto tega priložite stran. Skeniranje (stran, ki je samo slika) nima črt za uvoz.

Datoteke PDF se berejo kot nezaupne datoteke: skripti se ne zaženejo, zelo velika stran pa se skrajša in program to pove.
