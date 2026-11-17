---
title: Selecció amb llaç
summary: Premeu i arrossegueu un contorn a mà alçada al voltant dels objectes per seleccionar-los, com a finestra, intersecció o tanca; canvieu amb Space mentre arrossegueu.
keywords: llaç, lassomode, arrossega, a mà alçada, selecciona, selecció, finestra, Space, polígon, tàctil, llapis, rectangle, intersecció, tanca
from: 9ec6154d
---

## Què aprendreu

Com seleccionar objectes dibuixant-hi al voltant i com recuperar el rectangle quan el vulgueu.

## Dibuixeu un llaç

1. Dibuixeu unes quantes línies i cercles junts.
2. Sense cap ordre en execució, premeu el botó del ratolí en un punt buit i arrossegueu al voltant d'alguns d'ells, movent primer **cap a la dreta**.
3. Deixeu anar.

Només se seleccionen els objectes que són totalment dins del contorn. El contorn es dibuixa sòlid mentre arrossegueu: és un llaç de finestra.

## Finestra, intersecció i tanca

Quins objectes obteniu depèn del primer moviment de l'arrossegament i de {{key:Space}}:

| Arrossegueu | Llaç | Selecciona |
|---|---|---|
| Primer cap a la dreta | Finestra (contorn sòlid) | Només objectes **totalment dins** |
| Primer cap a l'esquerra | Intersecció (discontinu, verd) | Objectes dins **i** objectes que toca el contorn |
| Premeu {{key:Space}} mentre arrossegueu | Finestra, després intersecció, després tanca | Tanca (un camí discontinu, no tancat): només els objectes que travessa el camí |

1. Premeu en un punt buit i arrossegueu al voltant d'alguns objectes, movent primer **cap a l'esquerra**. També se seleccionen tots els que toca el contorn.
2. Premeu {{key:Esc}}.
3. Premeu i arrossegueu de nou; mentre encara manteniu el botó, premeu {{key:Space}} una vegada. El contorn es converteix en una intersecció; premeu {{key:Space}} una altra vegada per a una tanca.

{{key:Shift}} en deixar anar, en canvi, treu els objectes de la selecció (amb "Clic als objectes: Afegeix" a {{ui:Configuració}}).

## Dins d'una ordre

Un llaç funciona en qualsevol lloc on CadCraft demani `Select objects`: dibuixeu-lo i després premeu {{key:Enter}} per acabar. {{cmd:STRETCH}} pren un llaç d'intersecció com a finestra, de manera que podeu estirar d'una vegada una part en forma de L d'un dibuix.

{{cmd:TRIM}} i {{cmd:EXTEND}} fan servir un arrossegament de manera diferent: allà retallen (o allarguen) cada tros que travessa el camí. Vegeu [Retalla i allarga](topic:trim-and-extend).

## El rectangle

Un clic en un espai buit, un moviment i un segon clic dibuixen sempre la finestra rectangular (d'esquerra a dreta) o la intersecció (de dreta a esquerra).

Per fer que un arrossegament torni a dibuixar el rectangle, obriu {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Arrossegament per seleccionar}} i trieu {{ui:Rectangle}}, o escriviu {{cmd:LASSOMODE}} i després `0`. Escriviu {{cmd:LASSOMODE}} i després `1` per al llaç. L'elecció es guarda en aquest navegador.

:::touch
Arrossegueu amb un dit o un llapis de la mateixa manera. Un toc encara tria un sol objecte.
:::

## Errors habituals

- **No hi ha res seleccionat.** El llaç era una finestra i no n'hi havia cap de totalment a dins. Comenceu l'arrossegament cap a l'esquerra, o premeu {{key:Space}} mentre arrossegueu.
- **L'arrossegament ha mogut una nansa.** Si premeu sobre la nansa d'un objecte seleccionat, es mou la nansa. Comenceu el llaç en un punt buit.
- **Space ha acabat l'ordre.** {{key:Space}} només canvia el llaç mentre es manté premut el botó; en cas contrari és Enter.
