---
title: Aprèn amb un dibuix de mostra
summary: Obriu la casa de mostra o l'as-built de mostra de CadCraft i recorreu els seus fulls, el caixetí, les cotes i les capes.
keywords: mostra, mostres, dibuix d'exemple, aprèn, tutorial, recorregut pas a pas, caixetí, fulls, as-built, joc arquitectònic, obre una mostra
from: aa1f960a
---

## El que aprendreu

Com es construeix un joc acabat: espai model, fulls amb finestres gràfiques a una escala, un caixetí amb atributs, cotes en peus i polzades i en mil·límetres, i capes. Les mostres són pròpies de CadCraft i lliures d'usar per a qualsevol cosa (CC0).

## Obre una mostra

1. A la barra esquerra, sota {{ui:Dibuix}}, feu clic a {{ui:Obre una mostra}} (o escriviu {{cmd:SAMPLES}}; en els estils de cinta és al menú {{ui:Fitxer}}).
2. Feu clic a {{ui:Obre}} al costat de {{ui:Casa de mostra}}. S'obre en una pestanya pròpia, de manera que el vostre treball continua obert.

## Mireu el model

1. Feu clic a {{ui:Extensió}} (o escriviu `ZOOM`, després `E`): la planta, l'alçat frontal, una secció i un detall de paret.
2. A {{ui:Capes}}, feu clic a l'ull al costat de `A-ANNO-DIMS` per amagar les cotes, i un altre cop per mostrar-les.
3. Feu clic a una porta: {{ui:Propietats}} mostra una referència de bloc de `DOOR-32`. Portes i finestres són blocs, col·locats girats i simetritzats.

## Els fulls

1. Feu clic a {{ui:A-101 FLOOR PLAN}} sota el dibuix: un full ARCH D amb una finestra gràfica a 1/4" = 1'-0".
2. Feu doble clic dins de la finestra gràfica per treballar sobre el model a través d'ella; feu doble clic fora per tornar.
3. {{ui:A-501 DETAILS}} mostra el detall de la paret a 1 1/2" = 1'-0": el mateix model, una altra escala.

## El caixetí

1. En qualsevol full, feu doble clic al caixetí: {{ui:Edita atributs}} llista PROJECT, TITLE, SCALE, DATE, DRAWN i SHEET.
2. Canvieu DRAWN per les vostres inicials i feu clic a {{ui:D'acord}}.
3. Per canviar el propi caixetí a cada full, seleccioneu-lo i trieu {{ui:Blocs}} › {{ui:Més}} › {{ui:Edita al lloc}}. Vegeu [Atributs](topic:attributes).

## L'as-built

Obriu {{ui:Mostra as-built}} de la mateixa manera. Els punts grisos de `SCAN-SLICE` són un tall d'un escaneig; les parets de `AB-WALL` es van calcar a sobre. La paret est està fora d'escaire 35 mm: les cotes ho diuen dues vegades, en mil·límetres (`AB-DIMS-MM`) i en peus i polzades (`AB-DIMS-FTIN`, les mateixes longituds a través d'una escala de mesura). Els núvols vermells de `REV-1` marquen el que ha trobat l'aixecament.

## Següent

- [Canvia la mida del text de les cotes](topic:change-dimension-text-size)
- [Traça a PDF](topic:plot-pdf): traceu {{ui:A-101 FLOOR PLAN}}.
