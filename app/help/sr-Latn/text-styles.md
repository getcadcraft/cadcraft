---
title: Podesi font i veličinu teksta pomoću stilova teksta
summary: Napravi imenovane stilove teksta sa fontom, visinom, širinom i nagibom, postavi jedan kao tekući za novi tekst, i promeni stil da promeniš sav tekst koji ga koristi.
keywords: stil teksta, stil, STYLE, ST, TEXTSTYLE, -STYLE, font, visina teksta, faktor širine, kosina, nagib, promena fonta, standardni stil, primena stila, DDSTYLE
from: bd5a4883
---

## Šta ćeš uraditi

Napraviti stil teksta pod imenom `Beleške` sa sopstvenim fontom i visinom, koristiti ga za novi tekst, a kasnije promeniti stil da se sve beleške koje ga koriste promene odjednom.

## Koraci

1. Ukucaj {{cmd:STYLE}} (`ST`) i pritisni {{key:Enter}}, ili klikni {{ui:Text style}} na traci {{ui:Draw}}. Dijalog {{ui:Text style}} prikazuje stilove u crtežu. Svaki crtež ima `Standard`.
2. Klikni {{ui:New…}}, ukucaj `Beleške` kao ime novog stila i klikni {{ui:OK}}. Statusna linija kaže: „Stil teksta Beleške je napravljen i postavljen kao tekući.“
3. U {{ui:Font}} izaberi ili ukucaj ime fonta. Postavi {{ui:Height (0 = ask each time)}} na broj, na primer `2.5`, da svaki novi tekst dobije tu visinu. Ostavi `0` da te pita svaki put.
4. Postavi {{ui:Width factor}} i {{ui:Oblique angle (°)}} ako želiš uža, šira ili nakošena slova. Probni red pokazuje rezultat.
5. Klikni {{ui:Close}}. Crtaj tekst pomoću {{cmd:TEXT}} ili {{cmd:MTEXT}}: novi tekst uzima tekući stil.
6. Da koristiš stil koji već imaš, otvori dijalog ponovo, izaberi ga u listi i klikni {{ui:Set current}}.
7. Da staviš stil na tekst koji je već nacrtan, izaberi tekst, otvori dijalog, izaberi stil i klikni {{ui:Apply to selected text}}.

## Promeni stil kasnije

Promeni font, visinu, širinu ili nagib stila u dijalogu i sav tekst koji ga koristi prati, u jednom koraku opozivanja ({{key:Mod+Z}}). Statusna linija kaže koliko je tekstova pratilo.

## Napomene

- {{ui:Delete}} odbija `Standard` i stil koji tekst još koristi: prvo promeni taj tekst na drugi stil.
- Stilovi se čuvaju u tabeli STYLE crteža, pa DXF i DWG fajlovi ih zadržavaju.
- U komandnoj liniji `-STYLE` radi isto uz opcije (Tekući, Novi, Font, Visina, Širina, Nagib, Izbriši, Spisak).
- Font koji nije instaliran na računaru koji čita crtež prikazuje se drugim fontom.
