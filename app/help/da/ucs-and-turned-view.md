---
title: Drej visningen og brug egne koordinater (UCS)
summary: Drej visningen 90° eller til en vilkårlig vinkel uden at flytte noget i tegningen, og angiv et brugerkoordinatsystem (UCS), så punkter, ortogonal, polar sporing, gitteret og ny tekst følger en bygnings egne akser.
keywords: ucs, brugerkoordinatsystem, plan, drej visning, roter visning, visningsvridning, ucs z, ucs 3point, ucs object, ucs world, navngivet ucs, ucsfollow, turnleft, turnright, turnworld, skråtstillet bygning, roteret gitter
from: 6f152c65
---

## Hvad du lærer

Hvordan du ser på en tegning drejet, så en bygning tegnet i en vinkel vises lige på skærmen, og hvordan du skriver punkter langs dens egne akser. Intet i tegningen flytter sig, mens du gør dette: objekter bevarer deres koordinater, en drejning er ikke en redigering, og tegningen markeres ikke som ændret.

## Drej visningen et kvarter

1. Klik {{ui:Visning}} › {{ui:Mere}} › {{ui:Drej visningen 90° til venstre}} eller {{ui:Drej visningen 90° til højre}}.

Tegningen drejer på skærmen omkring midten af tegneområdet. Gør det igen for at fortsætte med at dreje.

2. Klik {{ui:Visning}} › {{ui:Mere}} › {{ui:Tilbage til verden}} for at rette den op igen.

Kommandoerne bag dem er {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} og {{cmd:TURNWORLD}}. For at give en af dem en tast, tilføj en linje som `TL=TURNLEFT` til dine aliaser med {{cmd:ALIASEDIT}}.

## Ret ind efter en skråtstillet bygning

1. Skriv `UCS` og tryk {{key:Enter}}, og derefter `OB` og {{key:Enter}}.
2. Klik på en vægslinje nær den ende, der skal være origo.

UCS starter nu ved den ende med sin X-akse langs væggen, og visningen drejer, så væggen står lige på skærmen. Akseikonet i nederste venstre hjørne viser, hvor UCS-akserne peger.

3. Tegn som vanligt. Med UCS angivet:
   - `x,y` og `@dx,dy` måles langs UCS-akserne. `d<a` måler vinklen fra UCS' X-akse.
   - {{ui:Ortogonal}}, polar sporing og gitteret følger UCS-akserne, og det samme gør krydset.
   - Ny tekst og nye afsnit løber langs UCS' X-akse. {{cmd:DIMLINEAR}}s vandrette og lodrette følger den også.
   - Koordinaterne i statuslinjen og fra {{cmd:ID}} er UCS-koordinater.
4. For at angive et verdenspunkt, mens en UCS er angivet, sæt `*` foran: `*0,0` eller `@*100,0`.
5. Skriv `UCS`, {{key:Enter}}, og derefter {{key:Enter}} igen for at vende tilbage til verden.

## Andre måder at angive en UCS på

Ved {{cmd:UCS}}-prompten:

| Du skriver | Hvad den gør |
|---|---|
| et punkt | En ny origo. Klik derefter på et punkt på den nye X-akse, eller tryk {{key:Enter}} for at beholde vinklen |
| `Z` | Drej UCS om sin origo med en vinkel, du skriver (grader, mod uret) eller vælger |
| `3` (3point) | En origo, et punkt langs den positive X-akse og et punkt på den positive Y-side |
| `OB` (OBject) | Fra en linje, bue, cirkel, polylinjesegment, tekst, blokreference, punkt eller konstruktionslinje |
| `P` (Previous) | UCS'en før denne (de sidste ti gemmes, mens tegningen er åben) |
| `W` (World) | Tilbage til verden |
| `NA` (NAmed) | `S` gemmer den aktuelle UCS under et navn, `R` gendanner en, `D` sletter en, `?` viser dem |

Hver ændring drejer visningen, så den nye UCS' X-akse står lige. {{cmd:PLAN}} drejer visningen uden at ændre UCS: {{key:Enter}} for den aktuelle UCS, `U` for en gemt, `W` for verden.

## Godt at vide

- Hver rude i en delt skærm bevarer sin egen drejning. UCS hører til tegningen.
- Ark arbejder i papirkoordinater. Angiv en UCS på fanen {{ui:Model}}, eller inde i en viewport.
- Valgvinduer, der trækkes i en drejet visning, vælger det, der ligger inde i dem på skærmen.
- LISP-rutiner får punkter i UCS fra `getpoint`, kan læse `UCSORG`, `UCSXDIR`, `UCSYDIR` og `VIEWTWIST`, og `trans` konverterer mellem verden, UCS og skærmen.

:::note
En gemt fil bevarer UCS og visningens drejning i en senere version. Indtil da holder de, mens tegningen er åben.
:::
