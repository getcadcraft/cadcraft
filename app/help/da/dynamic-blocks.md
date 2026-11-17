---
title: Dynamiske blokke
summary: Hvad CadCraft gør med dynamiske blokke i en DWG: de beholder deres rigtige navne, viser den tilstand, de blev gemt i, skifter synlighedstilstande, viser deres øvrige værdier og forbliver dynamiske, når de gemmes.
keywords: dynamisk blok, dynamiske blokke, synlighed, synlighedstilstand, vend, stræk, opslag, parametre, brugerdefineret, blokegenskaber, *u-blokke, dynamisk
from: 26b6aa80
---

## Hvad virker

En DWG lavet med dynamiske blokke åbnes med dem, der virker så langt:

- **Deres rigtige navne.** En dynamisk blok står i panelet {{ui:Blokke}} under sit eget navn ("Receptacle", "Sink"), ikke som en unavngiven `*U`-blok.
- **Tilstanden, de blev gemt i.** Hver reference viser præcis det, det andet program viste: synlighedstilstanden den var sat til, strakt eller vendt, som den blev gemt.
- **Skift af synlighedstilstand.** Vælg én reference (eller flere af samme blok), åbn {{ui:Egenskaber}}, og vælg i afsnittet {{ui:Brugerdefineret}} en anden tilstand fra listen {{ui:Synlighed}}. Referencen viser den tilstand med det samme, og dens attributter også: dem tilstanden skjuler, forsvinder, og dem den viser, dukker op med deres værdier. En reference beholder alle værdier, så intet kommer tilbage tomt; {{ui:Egenskaber}} lister de skjulte, markeret "skjult". {{key:Mod+Z}} sætter den gamle tilstand tilbage i ét trin.
- **Greb.** En valgt dynamisk blok viser sine egne greb, hvor dens parametre er: en lille trekant for synlighedstilstanden (klik på den for listen over tilstande), pile i enderne af en afstand, en dobbeltpil for en vending. Kun synlighedsgrebet virker i dag; de andre siger det i statuslinjen.
- **De andre værdier, kun læsning.** Under synlighedslisten viser {{ui:Brugerdefineret}} også blokkens afstande, justeringsvinkler, vendetilstande og punkter, som tegningen har dem.
- **Redigering af synlighedstilstande.** Åbn blokken med {{cmd:BEDIT}}: editoren viser én tilstand, navngivet i linjen over tegningen (vælg en anden der). Skriv {{cmd:BVSTATE}} for at skifte, tilføje (skjule alt, vise alt eller beholde det, der vises), omdøbe eller slette en tilstand; {{cmd:BVHIDE}} skjuler valgte objekter i den tilstand, der vises; {{cmd:BVSHOW}} viser de skjulte, udtonet, så du kan klikke på dem, der skal tilbage. Gem blokken: referencer sat til en omdøbt tilstand beholder den under sit nye navn, og dem sat til en slettet tilstand viser den første tilstand.
- **Forbliver dynamisk.** Gemt som DWG i den version tegningen kom i, forbliver blokkene dynamiske med den tilstand, du valgte: det andet program åbner dem som de samme dynamiske blokke. Synlighedstilstande, du har redigeret, gemmes også: deres nye navne, de tilstande du tilføjede, og hvad hver enkelt viser.

## Hvad er kun læsning, eller ikke der endnu

| Ikke der endnu | I stedet, i dag |
|---|---|
| Ændring af afstande, vinkler eller vendinger (stræk-, flyt- og vendehandlinger) | De vises som skrivebeskyttede i {{ui:Brugerdefineret}}; redigér i det program, der lavede blokken. |
| Opslag, XY-, rotations- og polære parametre | Ikke læst endnu: referencen vises som gemt. |
| Træk i afstands-, vende- og punktgreb | De viser, hvor parametrene er; synlighedsgrebet og listen {{ui:Synlighed}} i Egenskaber skifter tilstande. |
| Oprettelse af dynamiske blokke (tilføjelse af parametre, eller synlighedstilstande til en blok, der ikke har nogen) | Blokke, du laver i CadCraft, er almindelige blokke; {{cmd:BPARAMETER}} siger det. |
| Tilføjelse eller sletning af objekter i en blok med synlighedstilstande i blokeditoren | Blokken gemmes så som en almindelig blok (editoren siger det, når den lukker). |
| At holde dem dynamiske i en anden DWG-version eller i DXF | De gemmes som almindelige blokke, der viser den tilstand, du valgte, og gemningen siger det. |

:::note
Flytning eller ændring af objekter i {{cmd:BEDIT}} holder en blok med synlighedstilstande dynamisk. En blok uden tilstande, eller en hvor objekter er tilføjet eller slettet i editoren, bliver en almindelig blok.
:::
