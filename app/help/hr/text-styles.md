---
title: Postavite font i veličinu teksta stilovima teksta
summary: Napravite imenovane stilove teksta s fontom, visinom, širinom i nagibom, postavite jedan kao aktivan za novi tekst i promijenite stil da promijenite sav tekst koji ga koristi.
keywords: stil teksta, stil, STYLE, ST, TEXTSTYLE, -STYLE, font, visina teksta, faktor širine, kosina, nagib, promjena fonta, standardni stil, primijeni stil, DDSTYLE
from: bd5a4883
---

## Što ćete raditi

Napravit ćete stil teksta nazvan `Napomene` sa svojim fontom i visinom, koristiti ga za novi tekst, a kasnije promijeniti stil da se svaka napomena koja ga koristi promijeni odjednom.

## Koraci

1. Upišite {{cmd:STYLE}} (`ST`) i pritisnite {{key:Enter}}, ili kliknite {{ui:Stil teksta}} na traci {{ui:Crtanje}}. Dijaloški okvir {{ui:Stil teksta}} prikazuje stilove u crtežu. Svaki crtež ima `Standardno`.
2. Kliknite {{ui:Novi…}}, upišite `Napomene` kao ime novog stila i kliknite {{ui:U redu}}. Statusni redak kaže: "Stil teksta Napomene je izrađen i postavljen kao aktivan."
3. U {{ui:Font}} odaberite ili upišite ime fonta. Postavite {{ui:Visina (0 = pitaj svaki put)}} na broj, poput `2.5`, pa će svaki novi tekst imati tu visinu. Ostavite `0` da se pita svaki put.
4. Postavite {{ui:Faktor širine}} i {{ui:Kut nagiba (°)}} ako želite uža, šira ili nagnuta slova. Uzorak redak prikazuje rezultat.
5. Kliknite {{ui:Zatvori}}. Crtajte tekst pomoću {{cmd:TEXT}} ili {{cmd:MTEXT}}: novi tekst uzima aktivni stil.
6. Da koristite stil koji ste već izradili, ponovno otvorite dijaloški okvir, odaberite ga na popisu i kliknite {{ui:Postavi aktivno}}.
7. Da stavite stil na tekst koji je već nacrtan, odaberite tekst, otvorite dijaloški okvir, odaberite stil i kliknite {{ui:Primijeni na odabrani tekst}}.

## Kasnije promijenite stil

Promijenite font, visinu, širinu ili nagib stila u dijaloškom okviru i svaki tekst koji ga koristi slijedi, u jednom koraku poništavanja ({{key:Mod+Z}}). Statusni redak kaže koliko je tekstova slijedilo.

## Napomene

- {{ui:Izbriši}} ne dopušta `Standardno` niti stil koji tekst još koristi: prvo promijenite taj tekst na drugi stil.
- Stilovi se spremaju u tablicu STYLE crteža, pa DXF i DWG datoteke ih čuvaju.
- U naredbenom retku `-STYLE` radi isto s opcijama (Trenutni (C), Novi (N), Font (F), Visina (H), Širina (W), Kosina (O), Izbriši (D), Popis (L)).
- Font koji nije na računalu koje čita crtež prikazuje se drugim izgledom.
