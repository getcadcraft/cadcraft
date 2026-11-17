---
title: Postavi font i veličinu teksta pomoću stilova teksta
summary: Napravi imenovane stilove teksta sa fontom, visinom, širinom i nagibom, postavi jedan kao tekući za novi tekst, i promijeni stil da promijeniš sav tekst koji ga koristi.
keywords: stil teksta, stil, STYLE, ST, TEXTSTYLE, -STYLE, font, visina teksta, faktor širine, kosina, nagib, promjena fonta, standardni stil, primjena stila, DDSTYLE
from: bd5a4883
---

## Šta ćeš uraditi

Napravi stil teksta pod nazivom `Bilješke` sa svojim fontom i visinom, koristi ga za novi tekst, a kasnije promijeni stil tako da se sve bilješke koje ga koriste promijene odjednom.

## Koraci

1. Upiši {{cmd:STYLE}} (`ST`) i pritisni {{key:Enter}}, ili klikni {{ui:Stil teksta}} na traci {{ui:Crtanje}}. Dijalog {{ui:Stil teksta}} prikazuje stilove u crtežu. Svaki crtež ima `Standardni`.
2. Klikni {{ui:Novi…}}, upiši `Bilješke` kao naziv novog stila i klikni {{ui:U redu}}. Statusna linija kaže: "Stil teksta Bilješke je napravljen i postavljen kao tekući."
3. U {{ui:Font}} izaberi ili upiši naziv fonta. Postavi {{ui:Visina (0 = pitaj svaki put)}} na broj, na primjer `2.5`, da svaki novi tekst dobije tu visinu. Ostavi `0` da te pita svaki put.
4. Postavi {{ui:Faktor širine}} i {{ui:Ugao kosine (°)}} ako želiš uža, šira ili nagnuta slova. Red uzorka pokazuje rezultat.
5. Klikni {{ui:Zatvori}}. Crtaj tekst sa {{cmd:TEXT}} ili {{cmd:MTEXT}}: novi tekst uzima tekući stil.
6. Da koristiš stil koji si već napravio, otvori dijalog ponovo, izaberi ga na listi i klikni {{ui:Postavi trenutno}}.
7. Da staviš stil na tekst koji je već nacrtan, odaberi tekst, otvori dijalog, izaberi stil i klikni {{ui:Primijeni na odabrani tekst}}.

## Promijeni stil kasnije

Promijeni font, visinu, širinu ili nagib stila u dijalogu, i sav tekst koji ga koristi slijedi, u jednom koraku poništavanja ({{key:Mod+Z}}). Statusna linija kaže koliko je tekstova slijedilo.

## Napomene

- {{ui:Izbriši}} odbija `Standardni` i stil koji tekst još koristi: prvo promijeni taj tekst u drugi stil.
- Stilovi se čuvaju u tabeli STYLE crteža, pa DXF i DWG datoteke zadržavaju njih.
- U komandnoj liniji `-STYLE` radi isto uz opcije (Current, New, Font, Height, Width, Oblique, Delete, List).
- Font koji nije na računaru koji čita crtež prikazuje se drugim izgledom.
