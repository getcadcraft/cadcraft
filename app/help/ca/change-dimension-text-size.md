---
title: Canviar la mida del text de cota
summary: Fer el text de cota més gran o més petit, per a les cotes noves i per a les que ja hi ha al dibuix.
keywords: mida del text de cota, alçada del text, dimtxt, dimscale, text de cota massa petit, text de cota massa gran, text de cota més gran, escala d'anotació
from: 30e40633
---

## Per a les cotes que feu a continuació

1. Premeu {{key:Esc}} perquè no hi hagi res seleccionat: el panell de la dreta mostra {{ui:Configuració actual}}.
2. Desplaceu el panell cap avall fins a {{ui:Cotes noves}}. Escriviu l'alçada que voleu al paper a {{ui:Alçada del text}} (per exemple `2.5` per a 2.5 mm, o
   `3/32"`) i premeu {{key:Enter}}.
3. Definiu {{ui:Escala global}} a l'escala de traçat (`50` per a 1:50, `48` per a 1/4" = 1'-0"): cada mida es multiplica per ella.

A la línia d'ordres, {{cmd:DIMTXT}} defineix l'alçada i {{cmd:DIMSCALE}} l'escala global.

## Per a les cotes que ja hi ha al dibuix

1. Seleccioneu les cotes (una, o diverses: trieu {{ui:Cota}} a la llista de dalt de Propietats).
2. Escriviu la nova {{ui:Alçada del text}} (a la secció {{ui:Text}}), o una nova {{ui:Escala global}} (a la secció {{ui:Ajust}} més avall), i premeu {{key:Enter}}.

Es tornen a dibuixar a l'instant, en un sol pas per desfer. Una cota d'un fitxer d'un altre programa es torna a dibuixar amb l'estil de CadCraft tan bon punt la canvieu.

:::tip
Un text que es veu bé a la pantalla però és minúscul al full traçat sol voler dir que l'escala global és 1: definiu-la a l'escala del full.
:::

Vegeu [Definir mides, decimals i escala de cotes](topic:dimension-settings) per a totes les opcions.
