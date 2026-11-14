---
title: Aprender cun debuxo de exemplo
summary: Abra a casa de exemplo ou o as-built de exemplo de CadCraft e repase as súas follas, a cartela, as cotas e as capas.
keywords: exemplo, exemplos, debuxo de exemplo, aprender, titorial, percorrido, cartela, follas, as-built, conxunto arquitectónico, abrir un exemplo
from: aa1f960a
---

## Que vai aprender

Como se constrúe un conxunto rematado: espazo do modelo, follas con viewports a unha escala, unha cartela cos seus atributos, cotas en pés e polgadas e en milímetros, capas. Os exemplos son propios de CadCraft e de uso libre para calquera fin (CC0).

## Abrir un exemplo

1. No panel esquerdo, baixo {{ui:Debuxo}}, prema en {{ui:Abrir un exemplo}} (ou escriba {{cmd:SAMPLES}}; nos estilos de cinta está no menú {{ui:Ficheiro}}).
2. Prema en {{ui:Abrir}} xunto a {{ui:Casa de exemplo}}. Ábrese nunha pestana propia, así que o seu traballo segue aberto.

## Ver o modelo

1. Prema en {{ui:Extensións}} (ou escriba `ZOOM` e logo `E`): a planta, o alzado frontal, unha sección e un detalle de muro.
2. En {{ui:Capas}}, prema o ollo xunto a `A-ANNO-DIMS` para ocultar as cotas, e de novo para amosalas.
3. Prema nunha porta: Propiedades amosa unha referencia de bloque de `DOOR-32`. As portas e as xanelas son bloques, colocados xirados e espellados.

## As follas

1. Prema en {{ui:A-101 PLANTA DO CHAN}} baixo o debuxo: unha folla ARCH D cun viewport a 1/4" = 1'-0".
2. Faga dobre clic dentro do viewport para traballar no modelo a través del; faga dobre clic fóra para volver.
3. {{ui:A-501 DETALLES}} amosa o detalle do muro a 1 1/2" = 1'-0": o mesmo modelo, outra escala.

## A cartela

1. En calquera folla, faga dobre clic na cartela: {{ui:Editar atributos}} enumera PROJECT, TITLE, SCALE, DATE, DRAWN e SHEET.
2. Cambie DRAWN polas súas iniciais e prema en {{ui:Aceptar}}.
3. Para cambiar a propia cartela en todas as follas, selecciónea e escolla {{ui:Bloques}} › {{ui:Máis}} › {{ui:Editar no seu lugar}}. Vexa [Atributos](topic:attributes).

## O as-built

Abra {{ui:As-built de exemplo}} do mesmo xeito. Os puntos grises en `SCAN-SLICE` son unha rebanada dun escaneado; os muros en `AB-WALL` calcáronse sobre eles. O muro leste está 35 mm fóra de escuadra: as cotas dío dúas veces, en milímetros (`AB-DIMS-MM`) e en pés e polgadas (`AB-DIMS-FTIN`, as mesmas lonxitudes a través dunha escala de medida). As núbes vermellas en `REV-1` marcan o que atopou o levantamento.

## Seguinte

- [Cambiar o tamaño do texto das cotas](topic:change-dimension-text-size)
- [Trazar a PDF](topic:plot-pdf): trace {{ui:A-101 PLANTA DO CHAN}}.
