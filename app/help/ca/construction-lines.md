---
title: Línies de construcció i semirectes
summary: Dibuixa línies que es prolonguen sense fi (XLINE) o des d'un punt en una direcció (RAY) per alinear coses, i retalla-les fins a convertir-les en línies normals.
keywords: xline, ray, semirecta, línia de construcció, línies de construcció, línia infinita, línia guia, línia de referència, bisecció, línia de desfasament, línies de disposició, xl
from: b6c398bc
---

## Què aprendreu

Com dibuixar línies de construcció per alinear coses mentre dibuixeu: per dos punts, a nivell o a plom, en un angle, a mig camí entre dues direccions, o a una distància fixa d'una línia. I com retallar-les fins a convertir-les en línies normals quan ja han fet la seva feina.

## Dos tipus

- Una **línia de construcció** ({{cmd:XLINE}}) es prolonga sense fi cap als dos costats.
- Una **semirecta** ({{cmd:RAY}}) comença en un punt i es prolonga sense fi cap a un sol costat.

Totes dues es dibuixen per tota l'àrea de dibuix, sigui quin sigui el zoom, en pantalla dividida i en finestres gràfiques sobre un full. {{ui:Extensió}} les deixa de banda, de manera que el zoom fins al dibuix encara ajusta el que heu dibuixat.

## Dibuixa línies de construcció

1. Feu clic a {{ui:Dibuix}} › {{ui:Més}} › {{ui:Línia de construcció}}, o escriviu `XL` i premeu {{key:Enter}}.
2. Feu clic en un punt. Cada clic després d'aquest afegeix una línia de construcció que passa pel primer punt i pel que feu clic.
3. Premeu {{key:Enter}} per acabar.

En lloc del primer punt podeu escriure una opció:

| Opció | Què fa |
|---|---|
| `H` (Hor) | Línies a nivell, una per cada punt on feu clic. |
| `V` (Ver) | Línies a plom per cada punt. |
| `A` (Angle) | Línies en un angle que escriviu (en graus, en sentit antihorari des de l'eix X), per cada punt. `R` (Referència) mesura l'angle des d'una línia que trieu. |
| `B` (Bisecció) | Feu clic al cantó i després a un punt al llarg d'un costat: cada punt on feu clic al llarg de l'altre costat afegeix la línia a mig camí entre tots dos. |
| `O` (Desfasament) | Escriviu una distància, trieu una línia i feu clic al costat: una línia de construcció a aquesta distància, paral·lela. Amb `T` (Passant pel punt) la fa passar per un punt on feu clic en lloc d'això. La distància es recorda per a la pròxima vegada. |

## Dibuixa semirectes

1. Feu clic a {{ui:Dibuix}} › {{ui:Més}} › {{ui:Semirecta}}, o escriviu `RAY` i premeu {{key:Enter}}.
2. Feu clic on comencen les semirectes.
3. Feu clic en un punt per on ha de passar cada semirecta. Premeu {{key:Enter}} per acabar.

## Ajusteu-hi i retalleu-les

Les línies de construcció i les semirectes admeten els ajustos més proper, perpendicular i intersecció. No tenen extrems ni mig, de manera que punt final i punt mitjà no hi troben res.

Es retallen i es deixen retallar com les altres línies amb {{cmd:TRIM}} i {{cmd:BREAK}}:

- Si retalleu un extrem d'una línia de construcció, es converteix en una semirecta que comença al tall.
- Si retalleu la part llunyana d'una semirecta, es converteix en una línia normal.
- Si trenqueu una línia de construcció en un punt, n'obteniu dues semirectes.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} i {{cmd:STRETCH}} també hi funcionen. Una selecció amb finestra mai no les agafa, perquè cap finestra no pot contenir una línia sense fi; ho fa una finestra d'intersecció o un clic.

:::note
Un DWG (de totes les versions) i un DXF 2000 les conserven com a línies de construcció. El DXF R12 no en té, de manera que allà es converteixen en línies que travessen el dibuix, i el desament ho diu. Un traçat o un PDF només les dibuixa en l'àrea que s'imprimeix.
:::
