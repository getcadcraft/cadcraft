---
title: Mainīt izmēra teksta lielumu
summary: Padariet izmēru tekstu lielāku vai mazāku, gan jaunajiem izmēriem, gan tiem, kas jau ir rasējumā.
keywords: izmēra teksta lielums, teksta augstums, dimtxt, dimscale, izmēra teksts pārāk mazs, izmēra teksts pārāk liels, lielāks izmēra teksts, anotācijas mērogs
from: 30e40633
---

## Nākamajiem izmēriem, ko veidosiet

1. Nospiediet {{key:Esc}}, lai nekas nebūtu atlasīts: labajā panelī redzams {{ui:Current settings}} (pašreizējie iestatījumi).
2. Ritiniet panelī līdz {{ui:New dimensions}} (jauni izmēri). Ierakstiet augstumu, ko vēlaties uz papīra, laukā {{ui:Text height}} (teksta augstums) (piemēram, `2.5` nozīmē 2.5 mm, vai `3/32"`) un nospiediet {{key:Enter}}.
3. Iestatiet {{ui:Overall scale}} (kopējais mērogs) uz drukas mērogu (`50` nozīmē 1:50, `48` nozīmē 1/4" = 1'-0"): katrs izmērs tiek reizināts ar to.

Komandrindā {{cmd:DIMTXT}} iestata augstumu un {{cmd:DIMSCALE}} kopējo mērogu.

## Izmēriem, kas jau ir rasējumā

1. Atlasiet izmērus (vienu vai vairākus: izvēlieties {{ui:Dimension}} (izmērs) sarakstā Rekvizītu augšpusē).
2. Ierakstiet jauno {{ui:Text height}} (sadaļā {{ui:Text}}) vai jaunu {{ui:Overall scale}} (sadaļā {{ui:Fit}} (novietojums) tālāk) un nospiediet {{key:Enter}}.

Tie uzreiz pārzīmējas vienā atsaukšanas solī. Cita programmas faila izmērs tiek pārzīmēts CadCraft stilā, tiklīdz to mainīsiet.

:::tip
Teksts, kas ekrānā ir pareizs, bet izdrukātajā lapā sīks, parasti nozīmē, ka kopējais mērogs ir 1: iestatiet to uz lapas mērogu.
:::

Skatīt [Iestatīt izmēru lielumus, decimāldaļas un mērogu](topic:dimension-settings), kur aprakstīti visi iestatījumi.
