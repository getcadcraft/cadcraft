---
title: Konstruksielyne en strale
summary: Teken lyne wat sonder einde loop (XLINE) of vanaf 'n punt een kant toe (RAY) om dinge in lyn te bring, en sny hulle in gewone lyne.
keywords: xline, ray, konstruksielyn, konstruksielyne, oneindige lyn, gidslyn, verwysingslyn, halveer, afsetlyn, uitlegslyne, xl
from: b6c398bc
---

## Wat jy sal leer

Hoe om konstruksielyne te teken om dinge in lyn te bring terwyl jy teken: deur twee punte, horisontaal of regop, teen 'n hoek, halfpad tussen twee rigtings, of 'n vaste afstand van 'n lyn. En hoe om hulle in gewone lyne te sny wanneer hulle hul werk gedoen het.

## Twee soorte

- 'n **Konstruksielyn** ({{cmd:XLINE}}) loop sonder einde na albei kante.
- 'n **Straal** ({{cmd:RAY}}) begin by 'n punt en loop sonder einde na een kant.

Albei teken oor die hele tekengebied, ongeag die zoem, in gesplete skerm en in viewports op 'n blad. {{ui:Omvang}} laat hulle uit, sodat Zoem na die tekening steeds pas op wat jy geteken het.

## Teken konstruksielyne

1. Klik {{ui:Teken}} › {{ui:Meer}} › {{ui:Konstruksielyn}}, of tik `XL` en druk {{key:Enter}}.
2. Klik 'n punt. Elke klik daarna voeg 'n konstruksielyn by deur die eerste punt en die een wat jy klik.
3. Druk {{key:Enter}} om klaar te maak.

In plaas van die eerste punt kan jy 'n opsie tik:

| Opsie | Wat dit doen |
|---|---|
| `H` (Horisontaal) | Horisontale lyne, een deur elke punt wat jy klik. |
| `V` (Vertikaal) | Regop lyne deur elke punt. |
| [Hoek (A)] | Lyne teen 'n hoek wat jy tik (grade, anti-kloksgewys vanaf die X-as), deur elke punt. [Verwysing (R)] meet die hoek vanaf 'n lyn wat jy kies. |
| [Halveer (B)] | Klik die hoek, en dan 'n punt langs een kant: elke punt wat jy langs die ander kant klik, voeg die lyn halfpad tussen die twee by. |
| [Afset (O)] | Tik 'n afstand, kies 'n lyn, en klik dan die kant: 'n konstruksielyn daardie afstand daarvandaan, parallel. [Deur (T)] plaas dit eerder deur 'n punt wat jy klik. Die afstand word onthou vir die volgende keer. |

## Teken strale

1. Klik {{ui:Teken}} › {{ui:Meer}} › {{ui:Straal}}, of tik `RAY` en druk {{key:Enter}}.
2. Klik waar die strale begin.
3. Klik 'n punt vir elke straal om deur te gaan. Druk {{key:Enter}} om klaar te maak.

## Vasklou aan hulle en sny hulle

Konstruksielyne en strale vasklou aan Naaste, Loodreg en Snypunt. Hulle het geen eindpunte of middel nie, so Eindpunt en Middelpunt vind niks op hulle nie.

Hulle sny en word gesny soos ander lyne in {{cmd:TRIM}} en {{cmd:BREAK}}:

- Sny een kant van 'n konstruksielyn af, en dit word 'n straal wat by die snit begin.
- Sny die verre deel van 'n straal af, en dit word 'n gewone lyn.
- Breek 'n konstruksielyn by een punt, en jy kry twee strale.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} en {{cmd:STRETCH}} werk ook op hulle. 'n Vensterkeuse kies hulle nooit, want geen venster kan al van 'n oneindige lyn hou nie; 'n kruisvenster of 'n klik doen dit wel.

:::note
'n DWG (elke weergawe) en 'n DXF 2000 hou hulle as konstruksielyne. DXF R12 het geen, so daar word hulle lyne oor die tekening, en die stoor sê so. 'n Plot of PDF teken hulle net oor wat gedruk word.
:::
