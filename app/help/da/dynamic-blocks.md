---
title: Dynamiske blokke
summary: Hvad CadCraft gør med dynamiske blokke i en DWG: de beholder deres rigtige navne, viser den tilstand de blev gemt i, skifter synlighedstilstande, viser deres andre værdier og forbliver dynamiske, når de gemmes.
keywords: dynamisk blok, dynamiske blokke, synlighed, synlighedstilstand, vend, stræk, opslag, parametre, brugerdefineret, blokegenskaber, *u-blokke, dynamisk
from: dea2ee7c
---

## Hvad virker

En DWG med dynamiske blokke åbnes med dem virkende så langt:

- **Deres rigtige navne.** En dynamisk blok vises i panelet {{ui:Blokke}} under sit eget navn ("Receptacle", "Sink"), ikke som en unavngiven `*U`-blok.
- **Tilstanden de blev gemt i.** Hver reference viser præcis det, det andet program viste: den synlighedstilstand den var sat til, strakt eller vendt, som den blev gemt.
- **Skift af synlighedstilstand.** Vælg én reference (eller flere af samme blok), åbn {{ui:Egenskaber}}, og vælg i afsnittet {{ui:Brugerdefineret}} en anden tilstand fra listen {{ui:Synlighed}}. Referencen viser den tilstand med det samme, og dens attributter også: dem tilstanden skjuler, forsvinder, og dem den viser, dukker op med deres værdier. En reference beholder alle værdier, så intet kommer tilbage tomt; {{ui:Egenskaber}} lister de skjulte markeret "skjult". {{key:Mod+Z}} sætter den gamle tilstand tilbage i ét trin.
- **Greb.** En valgt dynamisk blok viser sine egne greb, hvor dens parametre er: en lille trekant for synlighedstilstanden (klik på den for listen over tilstande), pile i enderne af en afstand, en dobbeltpil for en vending. Kun synlighedsgrebet virker i dag; de andre siger det i statuslinjen.
- **De andre værdier, skrivebeskyttet.** Under synlighedslisten viser {{ui:Brugerdefineret}} også blokkens afstande, justeringsvinkler, vendetilstande og punkter, som tegningen holder dem.
- **Redigering af synlighedstilstande.** Åbn blokken med {{cmd:BEDIT}}: editoren viser én tilstand, navngivet i linjen over tegningen (vælg en anden der). Skriv {{cmd:BVSTATE}} for at skifte, tilføje (skjul alt, vis alt eller behold det, der vises), omdøbe eller slette en tilstand; {{cmd:BVHIDE}} skjuler valgte objekter i den viste tilstand; {{cmd:BVSHOW}} viser de skjulte falmet, så du kan klikke på dem for at hente dem tilbage. Gem blokken: referencer sat til en omdøbt tilstand beholder den under dens nye navn, og dem sat til en slettet tilstand viser den første tilstand.
- **Forbliver dynamisk.** Gemt som DWG i den version, tegningen kom i, forbliver blokkene dynamiske, med den tilstand du valgte: det andet program åbner dem som de samme dynamiske blokke. Synlighedstilstande du redigerede, gemmes også: deres nye navne, de tilstande du tilføjede, og hvad hver viser.

## Hvad er skrivebeskyttet, eller ikke der endnu

| Ikke der endnu | I stedet, i dag |
|---|---|
| Ændring af afstande, vinkler eller vendinger (stræk-, flyt- og vend-handlinger) | De vises skrivebeskyttet i {{ui:Brugerdefineret}}; redigér i programmet, der lavede blokken. |
| Opslag, XY-, rotations- og polære parametre | Ikke læst endnu: referencen vises, som den blev gemt. |
| Træk i afstands-, vend- og punktgreb | De viser, hvor parametrene er; synlighedsgrebet og listen {{ui:Synlighed}} i {{ui:Egenskaber}} skifter tilstande. |
| Lave dynamiske blokke af det andet programs slags (stræk, vend, opslag) | Blokke du laver i CadCraft, er almindelige blokke; {{cmd:BPARAMETER}} siger det. Dine egne parametre og flere synlighedsparametre findes i Parameteradministratoren (se "Dine egne parametre og synlighedstilstande" nedenfor). |
| Tilføje eller slette objekter i en blok med synlighedstilstande i blokeditoren | Blokken gemmes da som en almindelig blok (editoren siger det, når den lukkes). |
| Bevare dem som dynamiske i en anden DWG-version eller i DXF | De gemmes som almindelige blokke, der viser den tilstand du valgte, og gemningen siger det. |

:::note
Flytning eller ændring af objekter i {{cmd:BEDIT}} holder en blok med synlighedstilstande dynamisk. En blok uden tilstande, eller en hvis objekter blev tilføjet eller slettet i editoren, bliver en almindelig blok.
:::

## Dine egne parametre og synlighedstilstande

En blok du laver i CadCraft, kan have sine egne parametre og **flere** synlighedsparametre, hver med sine egne tilstande. Skriv {{cmd:BPARAMS}} (eller `BPM`) for at åbne **Parameteradministratoren** for blokken, du redigerer i {{cmd:BEDIT}}, for den valgte references blok, eller for den blok du navngiver.

- **Parametre**: et navn, en type (tal, længde, vinkel, antal, ja/nej) og en værdi eller en formel over andre parametre (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Giver}} viser resultatet. En formel der ikke virker, eller en værdi der ikke passer til sin type (et antal på 1.5), afvises, og administratoren siger hvorfor; intet andet ændres.
- **Synlighedsparametre**: {{ui:Tilføj synlighedsparameter}} laver en med en første tilstand. Hver tilstand kan omdøbes, fjernes (den sidste bliver) eller få et "vises når"-tal. En formel vælger tilstanden ud fra parametrene (den tilstand, hvis tal passer, ellers tilstanden på den plads i listen); uden formel vælger hver reference sin egen.
- **Sætte objekter i en tilstand**: i blokeditoren vælg objekterne, skriv {{cmd:BPARAMS}} og klik på {{ui:Placér de valgte objekter her}} på tilstanden. Objekter som ingen synlighedsparameter lister, vises altid.
- **Denne reference**: startet på en valgt reference viser administratoren også den references egne værdier og tilstande.

Uden for blokeditoren er hver ændring ét fortrydelsestrin. I blokeditoren er ændringerne editorens: {{ui:Gem blok}} beholder dem. `-BPARAMS` spørger det samme på kommandolinjen.

**I filen.** DWG og DXF gemmer parametrene, hvilke objekter der er i hvilken tilstand, og hver references egne værdier, i CadCrafts egne poster; åbn filen igen i CadCraft, og alt er tilbage. Et andet program ser hver reference som blokken med alle dens objekter, da en DWG højst har én synlighedsparameter pr. blok af sin egen slags. En reference som et andet program har flyttet, eller en blok hvis objekter det har ændret, kommer tilbage uden de dele, der ikke længere passer (intet gættes).
