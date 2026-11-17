---
title: Stabl etager i én tegning
summary: Tegn første etage over stueetagen med de samme koordinater, og slå hver etage fra, uden Xrefs.
keywords: etage, etager, FLOORS, FLR, FLOOR, FLOORLAYERS, stueetage, niveau, stabling, designlag, modelrum, underlag, xref
from: 7440fc87
---

Etager lader dig stable plantegninger i ét modelrum. Hver etage har sine egne objekter, og lag fungerer på tværs af dem alle. En væg på `P-Walls` kan være på hvilken som helst etage.

## Start

Skriv `FLOORS` (`FLR`), eller vælg {{ui:Etager…}} i menuen {{ui:Mere}} i gruppen {{ui:Visning}}, og vælg derefter {{ui:Start med etager}}. Det, du har tegnet indtil nu, havner på stueetagen.

## Tegn på en etage

Vælg etagen med den runde knap i panelet. Nye objekter lægges på den.

Andre etager, der er tændt, vises udtonet under den. Du kan fange objektfang på dem, så første etage flugter med stueetagen, men du kan ikke ændre dem, før du gør dem til den aktive etage. Øjet slukker en etage. Vægge samles kun med vægge på deres egen etage.

For at starte en etage fra den under den: vælg det, du vil have, vælg etagen i panelet og tryk {{ui:Kopiér dertil}}.

## Læg etager på ark

Vælg en viewport på et ark, og vælg dens etage under {{ui:Viste etage}} i Egenskaber. En viewport uden valgt etage viser alle de etager, der er tændt.

## Send filen til andre

Andre CAD-programmer kender ikke etager, så de viser alle etager samlet. Før du sender en fil, vælg {{ui:Gør etager til lag}} i panelet, eller skriv `FLOORLAYERS`. Hvert objekt flyttes til et lag, der er navngivet efter sin etage, fx `Stueetage-P-Walls`, så de stadig kan slå hver etage fra. Fortryd tager det tilbage. CadCraft gemmer etager i den DWG- eller DXF-fil, den gemmer.
