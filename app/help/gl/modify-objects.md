---
title: Mover, copiar, xirar, escalar, espellar, estirar e facer matrices
summary: Dispoña mobles nunha habitación cos comandos básicos de modificación, usando puntos base, distancias escritas e desfacer.
keywords: mover, copiar, xirar, escalar, espello, estirar, matriz, unir, matchprop, igualar propiedades, pintor, arrayrect, arraypolar, matriz polar, borrar, desagrupar, desfacer, refacer, punto base, desprazamento, modificar, aliñar, distribuír, espazar por igual
from: 8eaeee6c
---

## O que vai facer

Unha mesa cunha cadeira, copiada ao redor da mesa, xirada, espellada e cambiada de tamaño. Polo camiño usa {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} e {{cmd:UNDO}}.

## Debuxe as pezas

1. Escriba `REC` e prema {{key:Enter}}, escriba `0,0` e prema {{key:Enter}}, e logo escriba `@1800,900` e prema {{key:Enter}}. Esta é a mesa.
2. Escriba `REC` e prema {{key:Enter}}, escriba `300,-700` e prema {{key:Enter}}, e logo escriba `@450,450` e prema {{key:Enter}}. Esta é unha cadeira, debaixo da mesa.
3. Faga clic en {{ui:Extensións}}.

## Mover: punto base e logo segundo punto

Todo desprazamento, copia, xiro e escalado parte dun **punto base**: o punto que se leva consigo, ou arredor do que se xira.

1. Faga clic na cadeira para seleccionala.
2. Escriba `M` e prema {{key:Enter}}. O historial di `1 atopado`.
3. En `Seleccione o punto base`, enganche ao vértice superior esquerdo da cadeira (Extremo) e faga clic.
4. En `Seleccione o segundo punto`, escriba `@0,200` e prema {{key:Enter}}.

A cadeira sobe 200, máis cerca da mesa.

:::tip
Escriba `D` en `Seleccione o punto base` para dar un desprazamento no seu lugar: CadCraft pedirá `Seleccione o desprazamento`, e vostede escribe canto avanza en horizontal e en vertical, por exemplo `0,200` (non fai falta `@`).
:::

## Copiar, tantas veces como queira

1. Faga clic na cadeira.
2. Escriba `CO` e prema {{key:Enter}}.
3. Enganche á esquina inferior esquerda da cadeira e faga clic como punto base.
4. Escriba `@600,0` e prema {{key:Enter}}. Aparece unha copia 600 á dereita.
5. Escriba de novo `@600,0` e prema {{key:Enter}}. Aparece unha segunda copia 1200 á dereita do orixinal.
6. Prema {{key:Enter}} para rematar o comando.

{{cmd:COPY}} segue ata que prema {{key:Enter}}. Cada copia sitúase segundo a distancia desde o punto base ata o punto que dea. Un punto `@` conta desde o último punto introducido, que despois da primeira copia é o punto desa copia, así que `@600,0` dúas veces dá copias a 600 e 1200. Escriba `U` e prema {{key:Enter}} para retirar a última copia sen saír do comando.

Deberían ver tres cadeiras en fila debaixo da mesa.

:::tip
{{cmd:COPY}} serve para facer copias dentro dun mesmo debuxo, situadas segundo un punto base. Para levar obxectos a outro debuxo ou pestana, ou para pegalos despois, use o portapapeis: {{key:Mod+C}}, e logo {{key:Mod+V}}. {{key:Mod+D}} fai unha copia que segue o punteiro. Vexa [Copiar, pegar e duplicar](topic:copy-paste).
:::

## Espellar a fila ao outro lado

1. Arrastre unha xanela de cruzamento (de dereita a esquerda) sobre as tres cadeiras, sen tocar a mesa.
2. Escriba `MI` e prema {{key:Enter}}.
3. En `Seleccione o primeiro punto da liña de espello`, enganche ao punto medio do lado esquerdo da mesa (Punto medio) e faga clic.
4. En `Seleccione o segundo punto da liña de espello`, enganche ao punto medio do lado dereito da mesa e faga clic.
5. En `Eliminar os obxectos de orixe? [Sí (Y)/Non] <N>`, prema {{key:Enter}} para conservalos.

Deberían ver tres cadeiras debaixo da mesa e tres cadeiras espelladas enriba. O texto dunha selección espellada segue sendo lexible: colócase espellado, pero non se escribe ao revés.

## Xirar unha cadeira

1. Faga clic na cadeira máis á dereita debaixo da mesa.
2. Escriba `RO` e prema {{key:Enter}}.
3. Enganche á esquina inferior dereita da cadeira e faga clic como punto base.
4. Escriba `90` e prema {{key:Enter}}.

A cadeira xira 90 graos no sentido contrario ao das agullas do reloxo arredor do punto base. Un ángulo negativo xira no sentido das agullas do reloxo. En lugar de escribir, pode facer clic nun segundo punto: o ángulo mídese desde o punto base ata ese punto.

## Escalar a mesa

1. Seleccione a mesa.
2. Escriba `SC` e prema {{key:Enter}}.
3. Enganche á esquina inferior esquerda da mesa e faga clic como punto base.
4. Escriba `1.2` e prema {{key:Enter}}.

A mesa é un 20 % máis grande, crecendo desde o punto base. Un factor inferior a 1 fai que sexa máis pequena.

:::note
Se fai clic nun punto en lugar de escribir o factor de escala, o factor é a distancia desde o punto base ata ese punto. Facer clic a unha unidade de debuxo de distancia dá un factor 1. Normalmente o que quere é escribir o número.
:::

## Desfacer e refacer

- {{key:Mod+Z}}, o botón {{ui:Desfacer}}, ou `U` e logo {{key:Enter}} desfai o último comando. Un comando completo é un só paso: desfacer un {{cmd:COPY}} que fixo cinco copias elimina as cinco.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, o botón {{ui:Refacer}}, ou `REDO` restaura o comando.
- O historial indica o que se desfixo («Desfeito COPY»).

CadCraft conserva os últimos 500 pasos. Os axustes de capas (activar, conxelar, bloquear, cor) son configuracións, non edicións, e non se desfan.

## Estirar unha habitación para ensanchala

{{cmd:STRETCH}} (`S`, ou {{ui:Estirar}}) move só o que está dentro dunha xanela de cruzamento: os cantos e os extremos das liñas que caen dentro dela moven, e o resto queda no seu sitio, así que a habitación se ensancha en lugar de desprazarse.

1. Escriba `S` e prema {{key:Enter}}.
2. Arrastre unha xanela de dereita a esquerda sobre o muro da dereita, de modo que abranxa as esquinas do muro e os extremos de calquera cousa que se una a el.
3. Prema {{key:Enter}}.
4. Faga clic nun punto base, e logo escriba `@600,0` e prema {{key:Enter}}.

O rectángulo é 600 máis ancho; as liñas que remataban no muro seguen rematando nel. Un arco cun extremo dentro conserva a súa altura; os círculos e os textos móvense cando o seu centro ou o seu punto de inserción están dentro, e unha cota mide a súa nova lonxitude. Os obxectos seleccionados un a un, sen xanela, simplemente se desprazan.

Tamén pode seleccionar primeiro: arrastre a xanela de cruzamento (ou un lazo de cruzamento) sobre o muro sen ningún comando en execución, e logo escriba `S`. STRETCH toma esa selección e estira o que contén as súas xanelas, igual que se as arrastrara no seu propio aviso.

## Matriz: filas e columnas, ou ao redor dun centro

{{cmd:ARRAY}} (`AR`, ou {{ui:Matriz}}) copia a selección nunha cuadrícula ou nun círculo.

1. Seleccione unha cadeira, escriba `AR` e prema {{key:Enter}}. Prema {{key:Enter}} para Rectangular.
2. Aparece unha vista previa de 4 columnas e 3 filas. Escriba `COU`, prema {{key:Enter}}, e logo `5` para as columnas e `2` para as filas.
3. Escriba `S`, prema {{key:Enter}}, e logo `600` entre columnas e `-900` entre filas (o negativo baixa).
4. Prema {{key:Enter}} para facer as copias.

Para un anel de cadeiras ao redor dunha mesa, escolla `PO` (Polar) no seu lugar, faga clic no centro da mesa e fixe `I` (elementos), `F` (ángulo de recheo: 360 para dar a volta completa, 180 para a metade) e `ROT` (se as copias xiran para mirar ao centro). {{cmd:ARRAYRECT}} e {{cmd:ARRAYPOLAR}} saltan esta pregunta.

## Unir pezas nunha polilínea

{{cmd:JOIN}} (`J`, ou {{ui:Modificar}} › {{ui:Máis}} › {{ui:Unir}}): seleccione liñas, arcos e polilíneas abertas cuxos extremos coincidan, e prema {{key:Enter}}. Convértense nunha soa polilínea, pechada cando dan a volta completa, á que logo se lle pode aplicar un desfase dunha vez. As liñas situadas sobre unha mesma recta convértense nunha soa liña, aínda que teñan buratos entre elas; os arcos dun mesmo círculo convértense nun só arco, ou no círculo.

## Igualar propiedades

{{cmd:MATCHPROP}} (`MA`, ou {{ui:Modificar}} › {{ui:Máis}} › {{ui:Igualar propiedades}}): faga clic no obxecto cuxo aspecto quere, logo seleccione os obxectos que quere cambiar e prema {{key:Enter}}. Tomarán a súa capa e a súa cor; un texto toma a súa altura, unha cota os seus tamaños, unha trama o seu patrón. Escriba `S` (Configuración) na segunda pregunta para desactivar calquera destas propiedades.

## Aliñar obxectos

**Por puntos.** {{cmd:ALIGN}} (`AL`, ou {{ui:Modificar}} › {{ui:Máis}} › {{ui:Aliñar}}): seleccione os obxectos e prema {{key:Enter}}, e logo faga clic nun punto deles (a orixe) e no lugar onde debe ir (o destino).

- Un par move os obxectos. Prema {{key:Enter}} en `Seleccione o segundo punto de orixe` para parar aí.
- Dous pares tamén os xiran, de xeito que a liña entre os dous puntos de orixe quede ao longo da liña entre os dous puntos de destino. CadCraft pregunta entón `Escalar os obxectos segundo os puntos de aliñación? [Sí (Y)/Non]`: `Y` tamén os fai proporcionalmente máis grandes ou máis pequenos.
- Un terceiro par espella os obxectos cando os seus dous puntos están en lados opostos desa liña.

**Bordos e espazamento.** {{ui:Modificar}} › {{ui:Máis}} › {{ui:Aliñar e distribuír}} (ou `ALIGNPANEL`) abre un pequeno panel sobre o debuxo. Seleccione os obxectos e logo:

- escolla con que aliñar en {{ui:Aliñar a}} (toda a selección, o primeiro ou o último obxecto que seleccionou, ou un punto no que faga clic) e faga clic en {{ui:Esquerda}}, {{ui:Centro}}, {{ui:Dereita}}, {{ui:Superior}}, {{ui:Centro}} ou {{ui:Inferior}};
- ou escolla {{ui:Espazos iguais}} ou {{ui:Centros iguais}} e faga clic en {{ui:De lado a lado}} ou {{ui:De arriba abaixo}}: os dous obxectos exteriores quedan, e os demais se reparten por igual entre eles (polo menos tres obxectos).

Cada clic é un paso de desfacer, e a selección mantense, así que pode probar outra cousa. Cada obxecto conta pola súa caixa delimitadora, no UCS cando hai un definido. Na liña de comandos, o mesmo é {{cmd:ALIGNTO}} e {{cmd:DISTRIBUTE}}.

## Eliminar e desagrupar

- {{cmd:ERASE}} (`E`, ou {{key:Delete}}) elimina os obxectos seleccionados.
- {{cmd:EXPLODE}} (`X`) descompón unha polilínea en liñas e arcos, unha referencia de bloque nos seus obxectos, e unha cota en liñas, frechas e texto. As cotas desagrupadas xa non se miden a si mesmas.

## Erros frecuentes

- **Escribir unha distancia sen `@` no segundo punto.** `600,0` é o punto absoluto 600,0, non «600 á dereita». Use `@600,0`, ou un `600` simple coa cruz apuntando na dirección correcta.
- **O xiro foi no sentido contrario.** Os ángulos positivos xiran no sentido contrario ao das agullas do reloxo.
- **Desfacer eliminou máis do esperado.** Un só desfacer retira todo o último comando, incluídas todas as copias que fixo.
- **O comando non pediu seleccionar obxectos.** Os obxectos xa estaban seleccionados, así que os usou. Prema primeiro {{key:Esc}} para comezar sen nada seleccionado.
