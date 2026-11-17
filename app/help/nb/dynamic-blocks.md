---
title: Dynamiske blokker
summary: Hva CadCraft gjør med dynamiske blokker i en DWG: de beholder sine ekte navn, viser tilstanden de ble lagret i, bytter synlighetstilstander, viser sine andre verdier, og forblir dynamiske når de lagres.
keywords: dynamisk blokk, dynamiske blokker, synlighet, synlighetstilstand, speil, strekk, oppslag, parametere, egendefinert, blokkegenskaper, *u-blokker, dynamisk
from: 26b6aa80
---

## Hva som fungerer

En DWG laget med dynamiske blokker åpnes med dem fungerende så langt:

- **Deres ekte navn.** En dynamisk blokk står i panelet {{ui:Blokker}} under sitt eget navn («Receptacle», «Sink»), ikke som en navnløs `*U`-blokk.
- **Tilstanden de ble lagret i.** Hver referanse viser nøyaktig det det andre programmet viste: synlighetstilstanden den var satt til, strukket eller speilvendt slik den ble lagret.
- **Bytte av synlighetstilstand.** Velg én referanse (eller flere av samme blokk), åpne {{ui:Egenskaper}}, og velg en annen tilstand fra listen {{ui:Synlighet}} i delen {{ui:Egendefinert}}. Referansen viser den tilstanden med en gang, med sine attributter også: de som tilstanden skjuler, forsvinner, de den viser, dukker opp med sine verdier. En referanse beholder alle verdier, så ingenting kommer tilbake tomt; {{ui:Egenskaper}} lister de skjulte merket «skjult». {{key:Mod+Z}} setter den gamle tilstanden tilbake i ett steg.
- **Håndtak.** En valgt dynamisk blokk viser sine egne håndtak der parameterne er: en liten trekant for synlighetstilstanden (klikk på den for listen over tilstander), piler i endene av en avstand, en dobbel pil for et speil. Bare synlighetshåndtaket virker i dag; de andre sier det i statuslinjen.
- **De andre verdiene, skrivebeskyttet.** Under listen over synlighet viser {{ui:Egendefinert}} også blokkens avstander, justeringsvinkler, speiltilstander og punkter slik tegningen holder dem.
- **Redigering av synlighetstilstander.** Åpne blokken med {{cmd:BEDIT}}: redigeringsverktøyet viser én tilstand, navngitt i linjen over tegningen (velg en annen der). Skriv {{cmd:BVSTATE}} for å bytte, legge til (skjul alt, vis alt eller behold det som vises), gi nytt navn eller slette en tilstand; {{cmd:BVHIDE}} skjuler valgte objekter i tilstanden som vises; {{cmd:BVSHOW}} viser de skjulte nedtonet slik at du kan klikke på dem for å hente tilbake. Lagre blokken: referanser satt til en omdøpt tilstand beholder den under det nye navnet, og de som er satt til en slettet tilstand, viser den første tilstanden.
- **Holdt dynamisk.** Lagret som DWG i versjonen tegningen kom i, forblir blokkene dynamiske, med tilstanden du valgte: det andre programmet åpner dem som de samme dynamiske blokkene. Synlighetstilstander du redigerte, lagres også: deres nye navn, tilstandene du la til og hva hver av dem viser.

## Det som er skrivebeskyttet, eller ikke der ennå

| Ikke der ennå | I stedet, i dag |
|---|---|
| Endring av avstander, vinkler eller speil (strekk-, flytt- og speilhandlinger) | De vises skrivebeskyttet i {{ui:Egendefinert}}; rediger i programmet som laget blokken. |
| Oppslags-, XY-, rotasjons- og polare parametere | Ikke lest ennå: referansen vises slik den ble lagret. |
| Dra i avstands-, speil- og punkthåndtakene | De viser hvor parameterne er; synlighetshåndtaket og listen {{ui:Synlighet}} i Egenskaper bytter tilstander. |
| Lage dynamiske blokker (legge til parametere, eller synlighetstilstander til en blokk som ikke har dem) | Blokker du lager i CadCraft er vanlige blokker; {{cmd:BPARAMETER}} sier det. |
| Legge til eller slette objekter i en blokk med synlighetstilstander i blokkredigeringen | Blokken lagres da som en vanlig blokk (redigeringsverktøyet sier det når det lukkes). |
| Å holde dem dynamiske i en annen DWG-versjon eller i DXF | De lagres som vanlige blokker som viser tilstanden du valgte, og lagringen sier det. |

:::note
Å flytte eller endre objekter i {{cmd:BEDIT}} holder en blokk med synlighetstilstander dynamisk. En blokk uten tilstander, eller en der objekter ble lagt til eller slettet i redigeringsverktøyet, blir en vanlig blokk.
:::
