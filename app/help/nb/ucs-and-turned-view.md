---
title: Snu visningen og bruk egne koordinater (BKS)
summary: Snu visningen 90° eller til en hvilken som helst vinkel uten å flytte noe i tegningen, og sett et brukerkoordinatsystem (BKS) slik at punkter, ortho, polarsporing, rutenettet og ny tekst følger en bygnings egne akser.
keywords: ucs, bks, brukerkoordinatsystem, plan, snu visning, rotere visning, visningsvridning, ucs z, ucs 3point, ucs object, ucs world, navngitt ucs, ucsfollow, turnleft, turnright, turnworld, skrådd bygning, rotert rutenett
from: 6f152c65
---

## Det du lærer

Hvordan du ser på en tegning snudd, slik at en bygning tegnet i en vinkel blir rett på skjermen, og hvordan du skriver inn punkter langs dens egne akser. Ingenting i tegningen flyttes når du gjør dette: objektene beholder sine koordinater, en snuing er ikke en redigering, og tegningen markeres ikke som endret.

## Snu visningen en kvart

1. Klikk {{ui:Visning}} › {{ui:Mer}} › {{ui:Drei visningen 90° til venstre}} eller {{ui:Drei visningen 90° til høyre}}.

Tegningen snur seg på skjermen om midten av tegneområdet. Gjør det igjen for å fortsette å snu.

2. Klikk {{ui:Visning}} › {{ui:Mer}} › {{ui:Tilbake til verden}} for å rette den opp igjen.

Kommandoene bak dem er {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} og {{cmd:TURNWORLD}}. For å gi en av dem en tast, legg til en linje som `TL=TURNLEFT` i aliasene dine med {{cmd:ALIASEDIT}}.

## Rett opp etter en skrådd bygning

1. Skriv `UCS` og trykk {{key:Enter}}, og deretter `OB` og {{key:Enter}}.
2. Klikk en veggelinje nær enden som skal være origo.

BKS starter nå i den enden, med X-aksen langs veggen, og visningen snur seg slik at veggen står rett på skjermen. Aksesymbolet nederst til venstre viser hvor BKS-aksene peker.

3. Tegn som vanlig. Med BKS satt:
   - `x,y` og `@dx,dy` måles langs BKS-aksene; `d<a` måler vinkelen fra BKS X-aksen.
   - {{ui:Ortho}}, polarsporing og rutenettet følger BKS-aksene, og det samme gjør krysset.
   - Ny tekst og nye avsnitt går langs BKS X-aksen; {{cmd:DIMLINEAR}}s horisontale og vertikale følger den også.
   - Koordinatene i statuslinjen og fra {{cmd:ID}} er BKS-koordinater.
4. For å skrive inn et verdenspunkt mens et BKS er satt, sett `*` foran: `*0,0` eller `@*100,0`.
5. Skriv `UCS`, {{key:Enter}}, og deretter {{key:Enter}} igjen for å gå tilbake til verden.

## Andre måter å sette et BKS på

Ved {{cmd:UCS}}-ledeteksten:

| Du skriver | Hva den gjør |
|---|---|
| et punkt | Et nytt origo; klikk deretter et punkt på den nye X-aksen, eller trykk {{key:Enter}} for å beholde vinkelen |
| `Z` | Snur BKS om origo med en vinkel du skriver (grader, mot klokken) eller velger |
| `3` (3point) | Et origo, et punkt langs den positive X-aksen, og et punkt på den positive Y-siden |
| `OB` (OBject) | Fra en linje, bue, sirkel, polylinjesegment, tekst, blokkreferanse, punkt eller konstruksjonslinje |
| `P` (Previous) | Det BKS-et før dette (de siste ti beholdes så lenge tegningen er åpen) |
| `W` (World) | Tilbake til verden |
| `NA` (NAmed) | `S` lagrer gjeldende BKS under et navn, `R` gjenoppretter ett, `D` sletter ett, `?` lister dem |

Hver endring snur visningen slik at den nye BKS X-aksen står rett. {{cmd:PLAN}} snur visningen uten å endre BKS: {{key:Enter}} for gjeldende BKS, `U` for et lagret ett, `W` for verden.

## Greit å vite

- Hver rute i en delt skjerm beholder sin egen snuing. BKS hører til tegningen.
- Ark arbeider i papirkoordinater; sett et BKS på fanen {{ui:Modell}}, eller inne i et visningsområde.
- Valgvinduer dratt i en snudd visning velger det som ligger innenfor dem på skjermen.
- LISP-rutiner får punkter i BKS fra `getpoint`, kan lese `UCSORG`, `UCSXDIR`, `UCSYDIR` og `VIEWTWIST`, og `trans` konverterer mellom verden, BKS og skjermen.

:::note
En lagret fil beholder BKS-et og visningens snuing i en senere bygg; inntil da varer de så lenge tegningen er åpen.
:::
