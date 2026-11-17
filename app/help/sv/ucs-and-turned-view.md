---
title: Vrid vyn och använd egna koordinater (UCS)
summary: Vrid vyn 90° eller till valfri vinkel utan att flytta något i ritningen, och ställ in ett användarkoordinatsystem (UCS) så att punkter, ortogonalt läge, polär spårning, rutnät och ny text följer en byggnads egna axlar.
keywords: ucs, användarkoordinatsystem, plan, vrid vy, rotera vy, vyvridning, ucs z, ucs 3point, ucs object, ucs world, namngivet ucs, ucsfollow, turnleft, turnright, turnworld, vinklad byggnad, roterat rutnät
from: 6f152c65
---

## Vad du lär dig

Hur du tittar på en ritning vriden, så att en byggnad ritad i en vinkel syns rakt på skärmen, och hur du skriver punkter längs dess egna axlar. Inget i ritningen flyttas när du gör detta. Objekt behåller sina koordinater, en vridning är inte en redigering, och ritningen markeras inte som ändrad.

## Vrid vyn en kvart

1. Klicka på {{ui:Vy}} › {{ui:Mer}} › {{ui:Vrid vyn 90° åt vänster}} eller {{ui:Vrid vyn 90° åt höger}}.

Ritningen vrids på skärmen kring mitten av ritytan. Gör det igen för att fortsätta vrida.

2. Klicka på {{ui:Vy}} › {{ui:Mer}} › {{ui:Tillbaka till världen}} för att räta upp den igen.

Kommandona bakom dem är {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} och {{cmd:TURNWORLD}}. För att ge ett av dem en tangent, lägg till en rad som `TL=TURNLEFT` i dina alias med {{cmd:ALIASEDIT}}.

## Rikta in dig mot en vinklad byggnad

1. Skriv `UCS` och tryck på {{key:Enter}}, skriv sedan `OB` och {{key:Enter}}.
2. Klicka på en väggrad nära änden som ska vara origo.

UCS:en startar nu vid den änden med sin X-axel längs väggen, och vyn vrids så att väggen är plan på skärmen. Axelikonen i det nedre vänstra hörnet visar vart UCS-axlarna pekar.

3. Rita som vanligt. Med UCS:en inställd:
   - `x,y` och `@dx,dy` mäts längs UCS-axlarna. `d<a` mäter vinkeln från UCS:ens X-axel.
   - {{ui:Ortogonalt}}, polär spårning och rutnätet följer UCS-axlarna, och det gör korsmarkören också.
   - Ny text och nya stycken går längs UCS:ens X-axel. {{cmd:DIMLINEAR}}:s vågräta och lodräta följer den också.
   - Koordinaterna i statusfältet och från {{cmd:ID}} är UCS-koordinater.
4. För att skriva en världspunkt medan en UCS är inställd, sätt `*` framför: `*0,0` eller `@*100,0`.
5. Skriv `UCS`, {{key:Enter}}, och sedan {{key:Enter}} igen för att gå tillbaka till världen.

## Andra sätt att ställa in en UCS

Vid {{cmd:UCS}}-prompten:

| Du skriver | Vad det gör |
|---|---|
| en punkt | En ny origo. Klicka sedan på en punkt på den nya X-axeln, eller tryck på {{key:Enter}} för att behålla vinkeln |
| `Z` | Vrider UCS:en kring sin origo med en vinkel du skriver (grader, moturs) eller väljer |
| `3` (3punkt) | En origo, en punkt längs den positiva X-axeln och en punkt på den positiva Y-sidan |
| `OB` (Objekt) | Från en linje, båge, cirkel, polylinjesegment, text, blockreferens, punkt eller konstruktionslinje |
| `P` (Föregående) | UCS:en före den här (de sista tio sparas medan ritningen är öppen) |
| `W` (Värld) | Tillbaka till världen |
| `NA` (Namngiven) | `S` sparar den aktuella UCS:en under ett namn, `R` återställer en, `D` tar bort en och `?` listar dem |

Varje ändring vrider vyn så att den nya UCS:ens X-axel är plan. {{cmd:PLAN}} vrider vyn utan att ändra UCS:en: {{key:Enter}} för den aktuella UCS:en, `U` för en sparad och `W` för världen.

## Bra att veta

- Varje ruta i en delad skärm behåller sin egen vridning. UCS:en hör till ritningen.
- Blad arbetar i papperskoordinater. Ställ in en UCS på fliken {{ui:Modell}}, eller inne i en vyport.
- Markeringsfönster som dras i en vriden vy markerar det som ligger inuti dem på skärmen.
- LISP-rutiner får punkter i UCS från `getpoint`, kan läsa `UCSORG`, `UCSXDIR`, `UCSYDIR` och `VIEWTWIST`, och `trans` konverterar mellan världen, UCS:en och skärmen.

:::note
En sparad fil behåller UCS:en och vyns vridning i en senare version. Tills dess gäller de medan ritningen är öppen.
:::
