---
title: Dynamiske blokker
summary: Hva CadCraft gjør med dynamiske blokker i en DWG: de beholder sine egentlige navn, viser tilstanden de ble lagret i, bytter synlighetstilstander, viser sine andre verdier, og forblir dynamiske når de lagres.
keywords: dynamisk blokk, dynamiske blokker, synlighet, synlighetstilstand, vend, strekk, oppslag, parametere, egendefinert, blokkegenskaper, *u-blokker, dynamisk
from: dea2ee7c
---

## Hva som virker

En DWG laget med dynamiske blokker åpnes med disse fungerende så langt:

- **Deres egentlige navn.** En dynamisk blokk står i panelet {{ui:Blokker}} under sitt eget navn («Receptacle», «Sink»), ikke som en navnløs `*U`-blokk.
- **Tilstanden de ble lagret i.** Hver referanse viser nøyaktig det den andre programmet viste: synlighetstilstanden den var satt til, strukket eller vendt slik den ble lagret.
- **Bytte av synlighetstilstand.** Velg én referanse (eller flere av samme blokk), åpne {{ui:Egenskaper}}, og velg en annen tilstand fra listen {{ui:Synlighet}} i avsnittet {{ui:Egendefinert}}. Referansen viser den tilstanden med en gang, også attributtene: de som tilstanden skjuler, forsvinner, og de den viser, dukker opp med sine verdier. En referanse beholder alle verdier, så ingenting blir tomt; {{ui:Egenskaper}} lister de skjulte merket «skjult». {{key:Mod+Z}} setter den gamle tilstanden tilbake i ett trinn.
- **Håndtak.** En valgt dynamisk blokk viser sine egne håndtak der parameterne er: en liten trekant for synlighetstilstanden (klikk den for listen over tilstander), piler i endene av en avstand, en dobbeltpil for en vending. Bare synlighetshåndtaket virker i dag; de andre sier det i statuslinjen.
- **De andre verdiene, bare lesbare.** Under synlighetslisten viser {{ui:Egendefinert}} også blokkens avstander, justeringsvinkler, vendetilstander og punkter slik tegningen har dem.
- **Redigering av synlighetstilstander.** Åpne blokken med {{cmd:BEDIT}}: redigeringsprogrammet viser én tilstand, navngitt i linjen over tegningen (velg en annen der). Skriv {{cmd:BVSTATE}} for å bytte, legge til (skjuler alt, viser alt, eller beholder det som vises), gi nytt navn til eller slette en tilstand; {{cmd:BVHIDE}} skjuler valgte objekter i tilstanden som vises; {{cmd:BVSHOW}} viser de skjulte blekt, så du kan klikke dem for å hente dem tilbake. Lagre blokken: referanser satt til en tilstand som fikk nytt navn, beholder den under det nye navnet, og de som er satt til en slettet tilstand, viser den første tilstanden.
- **Forblir dynamiske.** Lagret som DWG i versjonen tegningen kom i, forblir blokkene dynamiske, med tilstanden du valgte: det andre programmet åpner dem som de samme dynamiske blokkene. Synlighetstilstander du redigerte, lagres også: deres nye navn, tilstandene du la til, og hva hver viser.

## Hva som er bare lesbart, eller ikke der ennå

| Ikke der ennå | I stedet, i dag |
|---|---|
| Endring av avstander, vinkler eller vendinger (strekk-, flytt- og vend-handlinger) | De vises bare lesbart i {{ui:Egendefinert}}; rediger i programmet som laget blokken. |
| Oppslag, XY-, rotasjons- og polærparametere | Ikke lest ennå: referansen vises slik den ble lagret. |
| Dra avstands-, vend- og punkthåndtakene | De viser hvor parameterne er; synlighetshåndtaket og listen {{ui:Synlighet}} i Egenskaper bytter tilstander. |
| Lage dynamiske blokker av det andre programmets type (strekk, vending, oppslag) | Blokker du lager i CadCraft er vanlige blokker; {{cmd:BPARAMETER}} sier det. Egne parametere og flere synlighetsparametere finnes i parameterbehandleren (se «Egne parametere og synlighetstilstander» nedenfor). |
| Legge til eller slette objekter i en blokk med synlighetstilstander i blokkredigeringen | Blokken lagres da som en vanlig blokk (redigeringsprogrammet sier det når det lukkes). |
| Holde dem dynamiske i en annen DWG-versjon eller i DXF | De lagres som vanlige blokker som viser tilstanden du valgte, og lagringen sier det. |

:::note
Å flytte eller endre objekter i {{cmd:BEDIT}} holder en blokk med synlighetstilstander dynamisk. En blokk uten tilstander, eller en der objekter ble lagt til eller slettet i redigeringsprogrammet, blir en vanlig blokk.
:::

## Egne parametere og synlighetstilstander

En blokk du lager i CadCraft kan ha egne parametere og **flere** synlighetsparametere, hver med sine egne tilstander. Skriv {{cmd:BPARAMS}} (eller `BPM`) for å åpne **Parameterbehandleren** for blokken du redigerer i {{cmd:BEDIT}}, for den valgte referansens blokk, eller for blokken du navngir.

- **Parametere**: et navn, en type (tall, lengde, vinkel, antall, ja/nei), og en verdi eller en formel over andre parametere (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Blir}} viser resultatet. En formel som ikke virker, eller en verdi som ikke passer typen sin (et antall på 1,5), avvises, og behandleren sier hvorfor; ingenting annet endres.
- **Synlighetsparametere**: {{ui:Legg til synlighetsparameter}} lager en med en første tilstand. Hver tilstand kan gis nytt navn, fjernes (den siste blir), eller få et tall for «vises når». En formel velger tilstanden ut fra parameterne (tilstanden hvis tall stemmer, ellers tilstanden på den plassen i listen); uten formel velger hver referanse sin egen.
- **Legge objekter i en tilstand**: velg objektene i blokkredigeringen, skriv {{cmd:BPARAMS}} og klikk {{ui:Legg de valgte objektene her}} på tilstanden. Objekter som ingen synlighetsparameter lister, vises alltid.
- **Denne referansen**: startet fra en valgt referanse viser behandleren også den referansens egne verdier og tilstander.

Utenfor blokkredigeringen er hver endring ett angretrinn. I blokkredigeringen tilhører endringene redigeringsprogrammet: {{ui:Lagre blokk}} beholder dem. `-BPARAMS` spør det samme på kommandolinjen.

**I filen.** DWG og DXF beholder parameterne, hvilke objekter som er i hvilken tilstand, og hver referanses egne verdier, i CadCrafts egne poster; åpner du filen igjen i CadCraft, er alt tilbake. Et annet program ser hver referanse som blokken med alle sine objekter, siden en DWG bare har én synlighetsparameter per blokk av sin egen type. En referanse som et annet program har flyttet, eller en blokk hvis objekter det har endret, kommer tilbake uten de delene som ikke lenger stemmer (ingenting gjettes).
