---
title: Enganchar a puntos de obxectos
summary: Use enganches a obxectos, Orto e a cuadrícula para escoller co rato extremos, puntos medios, centros e intersección exactos.
keywords: osnap, object snap, extremo, punto medio, centro, intersección, perpendicular, cuadrante, máis próximo, nodo, inserción, orto, cuadrícula, f3, f8, f7, rastrexo polar, polar, polarang, rastrexo de enganche a obxectos, otrack, rastrexo, f10, f11
from: 3cf17f94
---

## O que vai facer

Un rectángulo cas súas dúas diagonais, un círculo centrado onde se cruzan, e unha liña desde o punto medio dun lado ata o círculo. Cada punto escóllese co rato, e cada punto é exacto.

## Como funciona o enganche

Mentres un comando pide un punto, CadCraft busca puntos de enganche a unhas 10 píxeles da cruceta. Cando atopa un, aparecen unha marca e unha etiqueta ("Extremo", "Intersección"), e un clic cae **exactamente** sobre ese punto, non onde está a cruceta.

Os enganches están activos cando {{ui:Enganche}} da barra de estado está premido. {{key:F3}} activa e desactiva.

Os enganches que pode usar son:

| Enganche | Cae sobre |
|---|---|
| Extremo | Os extremos de liñas, arcos e segmentos de polilínea |
| Punto medio | O centro de liñas, arcos e segmentos de polilínea |
| Centro | O centro de círculos e arcos, e dos segmentos en arco de polilínea |
| Cuadrante | Os puntos de 0, 90, 180 e 270 graos de círculos e arcos |
| Intersección | Onde se cruzan dous obxectos |
| Perpendicular | O punto dun obxecto en ángulo recto coa última posición (precisa un punto base) |
| Tanxente | O punto dun círculo ou arco onde unha liña desde o último punto só o toca. Sen último punto aínda (o primeiro punto dunha liña), a marca di "diferido": o punto de contacto calcúlase cando se coñece o seguinte punto, así que unha liña de Tanxente a Tanxente toca ambos os círculos |
| Máis próximo | O punto máis próximo de calquera obxecto |
| Nodo | Obxectos punto |
| Inserción | O punto de inserción de textos e referencias de bloque |

Todos están activos por defecto, excepto Tanxente e Máis próximo. Máis próximo tende a gañar cando quere outra cousa; active Tanxente cando o necesite.

## Escolla os seus enganches

1. Prema a pequena frecha xunto a {{ui:Enganche}} na barra de estado. Ábrese a lista {{ui:Enganches a obxectos}}.
2. Marque ou desmarque enganches. Os cambios aplícanse ao momento.
3. Prema de novo a frecha para pechar a lista.

CadCraft lembra a súa elección, e os axustes de {{ui:Cuadrícula}}, {{ui:Orto}} e {{ui:Enganche}}, neste navegador.

## Pasos

1. Escriba `REC` e prema {{key:Enter}}.
2. Escriba `0,0` e prema {{key:Enter}}.
3. Escriba `@4000,3000` e prema {{key:Enter}}. Aparece un rectángulo.
4. Prema {{ui:Extensións}}.
5. Escriba `L` e prema {{key:Enter}}.
6. Mova a cruceta á esquina inferior esquerda. A marca amosa "Extremo". Prema.
7. Mova ata a esquina superior dereita ata que aparezca "Extremo". Prema.
8. Prema {{key:Enter}} para terminar a liña.
9. Prema {{key:Enter}} de novo para repetir {{cmd:LINE}}, e debuxe a outra diagonal desde a esquina inferior dereita ata a superior esquerda do mesmo xeito.
10. Escriba `C` e prema {{key:Enter}} para comezar un círculo.
11. Mova a cruceta ao punto onde se cruzan as diagonais. A marca amosa "Intersección". Prema.
12. Escriba `800` e prema {{key:Enter}}.

Debe ver un círculo centrado exactamente no cruce.

13. Escriba `L` e prema {{key:Enter}}.
14. Mova ata o punto medio do lado esquerdo do rectángulo, ata que apareza "Punto medio". Prema.
15. Mova a cruceta sobre o círculo, no seu lado esquerdo. A marca amosa "Perpendicular" ou "Cuadrante"; aquí son o mesmo punto. Prema.
16. Prema {{key:Enter}}.

A nova liña vai desde o punto medio do lado esquerdo e para exactamente no círculo.

## Saltar un enganche para un clic

Manteña premido {{key:Shift}} ao facer clic. Os enganches a obxectos ignóranse nese clic, e o punto cae exactamente onde está a cruceta (ou ao longo da dirección Orto, se Orto está activo).

## Orto

{{ui:Orto}} ({{key:F8}}) mantén o seguinte punto recto de lado a lado ou recto cara arriba e abaixo desde o punto base. Aplícase aos clics e á introdución de distancia directa (un número sen máis escrito no indicador). Os enganches a obxectos teñen prioridade sobre Orto: se aparece unha marca de enganche, o clic vai para o enganche.

## Rastrexo polar

{{ui:Polar}} ({{key:F10}}) é Orto con máis ángulos. Mentres un comando ten un punto base (o último punto dunha liña, o punto base dun desprazamento), o punteiro se alinea cando se achega a un raio desde el nun múltiplo do paso polar: aparece unha liña punteada, e unha etiqueta xunto á cruceta lee `Polar: 1200 < 30°`. Prema para usar ese punto, ou escriba unha distancia: `1200` vai exactamente 1200 ao longo do raio.

O paso é 90° ata que o cambie: escriba {{cmd:POLARANG}}, prema {{key:Enter}}, e escriba `30` (ou 45, 22.5, 15 …). Polar e Orto exclúense mutuamente: activar un desactiva o outro.

## Rastrexo de enganche a obxectos

{{ui:Rastrexo}} ({{key:F11}}) alinea o punteiro cos puntos de enganche nos que se detivo, para que poida escoller un punto ao mesmo nivel que unha esquina e por enriba doutro, sen debuxar liñas auxiliares.

1. Active {{ui:Enganche}} e {{ui:Rastrexo}}, e inicie un comando que pida un punto (`L`).
2. Deteña o punteiro sobre un punto de enganche, como unha esquina, durante medio segundo, sen premer. Unha pequena cruz o marca: queda adquirido. Deteña de novo o punteiro sobre el para soltalo.
3. Mova o punteiro en liña recta desde el, horizontal ou verticalmente. Unha liña punteada segue o punteiro e a etiqueta di `Track: 600 < 90°`. Prema, ou escriba unha distancia.
4. Adquira un segundo punto, e mova ata o lugar onde a vertical por un se cruza coa horizontal polo outro: o punteiro engánchase a ese cruce (`Track: where two lines meet`).

Con {{ui:Polar}} activo tamén, os puntos adquiridos se seguen en todos os ángulos polares. Consérvanse ata sete puntos, ata que remata o comando. {{key:Shift}} desactiva o rastrexo para un clic, como fai cos enganches.

## Cuadrícula

{{ui:Cuadrícula}} ({{key:F7}}) mostra unha cuadrícula de liñas detrás do debuxo, con liñas máis grosas cada cinco; o espazado cambia ao facer zoom. É só unha guía ata que active {{ui:Enganche á cuadrícula}} ({{key:F9}}): entón os clics caen no punto de cuadrícula máis próximo, salvo que un enganche a obxectos tome antes o punto.

## Teclas de función no seu ordenador

{{key:F9}} é Enganche á cuadrícula, {{key:F10}} é Polar e {{key:F11}} é Rastrexo.

:::mac
Nun Mac, F3, F7, F8 e F9 adoitan controlar Mission Control e os medios. Manteña **fn** coa tecla, ou active as teclas de función estándar, como se describe en [Teclas, ratos e trackpads](common:keys). Os botóns da barra de estado sempre funcionan.
:::

:::firefox
En Firefox, F7 tamén é a tecla de navegación con cursor. Se Firefox pregunta se quere activar a navegación con cursor, escolla **Non**. Use o botón {{ui:Cuadrícula}} se a pregunta volve aparecer.
:::

:::touch
Nunha pantalla táctil non hai pasar por enriba, así que a marca de enganche só aparece onde toca o dedo. Achegue o zoom para obxectivos pequenos, ou escriba coordenadas.
:::

## Erros frecuentes

- **O clic foi ao punto equivocado.** Mire a etiqueta da marca antes de premer: Extremo gaña a Punto medio cando ambos están preto. Achegue o zoom, ou desmarque os enganches que non necesite.
- **Non aparece ningunha marca.** {{ui:Enganche}} está desactivado, ou o enganche que quere está desmarcado, ou o obxecto está nunha capa desactivada ou conxelada.
- **Os enganches collen a cousa equivocada nun debuxo cargado.** Achegue o zoom. A distancia de enganche mídese en píxeles da pantalla, así que o zoom a fai menor sobre o debuxo.
- **Esperar que Shift dea unha liña recta.** En CadCraft, Shift desactiva os enganches para un clic. Use {{ui:Orto}} para liñas rectas.
- **Esperar que os puntos caian nos puntos da cuadrícula.** Active {{ui:Enganche á cuadrícula}} ({{key:F9}}), ou escriba coordenadas para números redondos.
