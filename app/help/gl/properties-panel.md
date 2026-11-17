---
title: O panel de propiedades
summary: Vexa e cambie todo sobre os obxectos seleccionados, moitos á vez: coordenadas con Z, tamaños, texto, axustes de cota, transparencia e máis. Os campos admiten expresións e lonxitudes con unidades.
keywords: totais, lonxitude total, superficie total, suma, lonxitude da selección, propiedades, paleta de propiedades, ctrl+1, pr, ch, mo, ddmodify, varía, selección rápida, pickadd, coordenadas, z, elevación, espesor, transparencia, material, ligazón, expresión, quickcalc, vértice, estilo de cota, tolerancia, decimais
from: 10d6a829
---

## Que vai aprender

Como abrir o panel de propiedades, cambiar un obxecto ou cen dunha vez, escribir coordenadas exactas (con Z), usar expresións e unidades en calquera campo numérico, e o que mostra cada tipo de obxecto.

## Abrilo

O panel está á dereita. Para traelo ao frente:

- Prema {{key:Mod+1}}, ou escriba {{cmd:PROPERTIES}} (ou `PR`, `CH`, `MO`).
- Faga dobre clic nun obxecto (o texto e as multiliñas abren o seu editor de texto).

O panel é un panel móbil como os demais: arrastre o seu agarre para acoplalo á esquerda, á dereita ou abaixo, ou solte sobre o debuxo para flotalo (ver [Dispor os paneis e usar un segundo monitor](common:arrange-panels)).

### Replegalo

O botón de fixación na parte superior dereita do panel activa o **ocultado automático**: o panel pregáse nunha tira no bordo dereito e o debuxo gaña espazo. Sitúe o punteiro sobre a tira (ou prema {{key:Mod+1}}) e ábrese sobre o debuxo; ao afastarse, pregase de novo. Faga clic no botón outra vez para mantelo aberto. {{cmd:PROPERTIESCLOSE}} tamén o pregua.

## Seccións

As propiedades agrúpanse en seccións que pode pregar: **Xeral**, **Xeometría**, **Texto**, **Liñas e frechas**, **Axuste**, **Unidades primarias**, **Unidades alternativas**, **Tolerancias**, **Patrón**, **Varios**, e para os bloques **Atributos** e **Elemento da biblioteca**. Faga clic no nome dunha sección para pregala ou abrila; CadCraft lembra cales pregou.

Arrastre a liña fina entre os nomes e os valores para facer os nomes máis anchos ou máis estreitos. Faga dobre clic nela para volver ao seu sitio. Co teclado, sitúe o foco nela e use as teclas de frecha.

## Cambiar un valor

1. Faga clic nunha liña. O encabezado di "Liña".
2. Faga clic en {{ui:Lonxitude}}. Mentres edita, o campo amosa o valor completo, non o redondeado.
3. Escriba `2500` e prema {{key:Enter}}. A liña mide agora 2500, mantendo o seu punto inicial e o seu ángulo.

{{key:Enter}} ou un clic noutro lugar aplica o valor; {{key:Esc}} devolve o valor anterior. Cada cambio é un paso de desfacer.

### Expresións e unidades

Cada campo numérico admite algo máis que un número simple:

| Vostede escribe | Obtén |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141,4214 |
| `1/4`, `6-1/2` | 0,25, 6,5 |
| `12'6"`, `12'-6 1/2"` | 150, 150,5 (polgadas, nun debuxo en pés e polgadas) |
| `900mm`, `3.5m`, `2ft` | Convertido nas unidades do debuxo |
| `45d30'`, `45°30'15"` | 45,5°, 45,5042° (campos de ángulo) |
| `0.5r`, `100g` | Radiáns e grados centesimais, convertidos a graos |

Unha lonxitude con unidade precisa que o debuxo teña unidades: estableza primeiro {{ui:Unidades}} en {{ui:Novos obxectos}} (sen nada seleccionado). Unha entrada incorrecta rexéitase cunha nota baixo o panel e non cambia nada; nunca se garda como 0. Funcións: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; os ángulos en graos.

## Cambiar moitos obxectos á vez

1. Seleccione varios obxectos, por exemplo 8 liñas e 4 cotas.
2. O encabezado di "12 obxectos", e unha lista na parte superior ofrece **Todos (12)**, **Liña (8)** e **Cota (4)**.
3. **Todos** amosa o que ten cada obxecto (capa, cor, tipo de liña…). Escolla **Cota (4)** para ver os axustes de cota.
4. Cambie un valor, por exemplo {{ui:Decimais}} a `1`.

As catro cotas cambian, nun só paso de desfacer. Un campo que di **Varía** significa que os obxectos son diferentes; escribir un valor estáboo en todos. Os obxectos en capas bloqueadas quedan como están, e a nota indica cantos son.

## Totais dunha selección

Con varios obxectos seleccionados, a sección {{ui:Totais}} na parte superior indica:

- **Obxectos**: cantos de cada tipo, por exemplo "8 liñas, 2 polilíneas, 1 círculo".
- **Lonxitude total**: as liñas, arcos e polilíneas sumadas (as splines tamén contan), e cantos obxectos son.
- **Superficie total**: os pechados sumados: círculos, elipses completas, polilíneas pechadas e tramas (os furados dunha trama réstanse).

Están no formato de lonxitude do debuxo (pés e polgadas cando o usa; as superficies entón en polgadas cadradas e pés cadrados). A barra de estado amosa a mesma lonxitude e superficie sempre que hai obxectos seleccionados; {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Lonxitude e superficie da selección}} › {{ui:Ocultos}} desactiva iso. Para un obxecto, {{ui:Xeometría}} amosa a súa propia lonxitude e superficie, como antes.

## Coordenadas

Cada punto amosa **X**, **Y** e **Z**: inicio e fin dunha liña, centros, puntos de inserción, posicións de texto, o vértice actual dunha polilínea. As liñas amosan tamén **Delta X**, **Delta Y** e **Delta Z** (só lectura). As polilíneas e as tramas teñen unha **Elevación** (unha Z para todo o obxecto).

O botón de mira xunto ao nome dun punto permítelle escollelo no debuxo: faga clic nel, despois faga clic na nova posición (os enganches funcionan). Os valores son coordenadas de mundo.

## Xeral

| Campo | Que é |
|---|---|
| {{ui:Capa}}, {{ui:Cor}}, {{ui:Tipo de liña}}, {{ui:Escala do tipo de liña}}, {{ui:Grosor de liña}} | Como no panel de capas; {{ui:Por capa}} segue a capa |
| {{ui:Transparencia}} | Por capa, por bloque, ou 0 a 90 % |
| {{ui:Espesor}} | Canto se estenden en Z liñas, círculos, arcos, polilíneas, puntos e texto |
| {{ui:Material}} | Por capa, por bloque, Global ou un nome que trouxo un debuxo |
| {{ui:Estilo de trazado}} | Só lectura: os debuxos trázanse por cor, a través da [táboa de estilo de trazado](topic:plot-pdf#plot-style-tables) da folla |
| {{ui:Ligazón}} | Un enderezo web gardado co obxecto |

## Que amosa cada tipo

| Seleccionado | Pode cambiar |
|---|---|
| Liña | Inicio e fin X, Y, Z; lonxitude; ángulo |
| Círculo | Centro; radio; diámetro; circunferencia; superficie (cada un estabelece o radio) |
| Arco | Centro; radio; ángulo inicial e final; ángulo total; corda (amosa a lonxitude do arco e a superficie) |
| Elipse | Centro; radio maior e menor; relación de radios; ángulo do eixe maior; ángulo inicial e final |
| Polilínea | O explorador de vértices (abaixo); ancho global; elevación; pechada; superficie cando está pechada (escala ao redor do seu centro) |
| Texto | Contido; estilo; xustificación; altura; xiro; factor de ancho; ángulo de inclinación; ancho definido; espazado de liñas; anotativo; posición |
| Referencia de bloque | Punto de inserción; xiro; escala X, Y, Z e escala uniforme; valores dos atributos |
| Trama | Patrón; escala; ángulo; orixe; asociativa; detección de illas; cor de fondo; elevación |
| Cota | Véxase abaixo |
| Multiliña | Texto; altura; ancho; lado do texto; tamaño da punta de frecha; distancia de aterraxe; punto da punta de frecha |
| Ventá gráfica | Escala; centro e tamaño na folla; centro da vista no modelo; activada; visualización bloqueada |

### Vértices de polilínea

{{ui:Vértice actual}} amosa a que vértice pertencen os campos de abaixo. Use as frechas, ou escriba un número, para pasar a outro vértice; non hai límite de vértices. Cada vértice ten X, Y, ancho de segmento inicial e final, e o abombamento do segmento que comeza aí (0 = recto).

## Cotas

Unha cota amosa o seu **Estilo de cota**, o que mide, os seus puntos, e cada axuste:

- **Liñas e frechas:** punta de frecha para cada extremo, tamaño da frecha, tamaño da marca, cores e grosores das liñas de cota e de extensión, ocultar unha das metades ou unha das liñas de extensión, desprazamento e prolongación das liñas de extensión.
- **Texto:** substitución (déixeo baleiro para o valor medido; `<>` representa ese valor dentro do seu propio texto), estilo, cor, altura, desprazamento, posición vertical e horizontal, sempre horizontal, xiro, recheo de fondo.
- **Axuste:** escala global, espazado das liñas de base, o que se move cando falta espazo, e movemento do texto.
- **Unidades primarias:** formato, decimais, redondeo, prefixo, sufixo, escala de medida, separador decimal, suprimir os ceros iniciais e finais; para ángulos, o formato do ángulo e os seus decimais.
- **Unidades alternativas:** activadas ou desactivadas, formato, decimais, multiplicador (25,4 converte polgadas en milímetros), redondeo, prefixo e sufixo.
- **Tolerancias:** ningunha, simétrica, desviación, límites ou básica, con valores superior e inferior, decimais, altura e posición.

Cambiar calquera deles nunha cota aberta descarta o debuxo que fixo o outro programa, e CadCraft vólveo debuxar.

:::note
A posición horizontal do texto (xunto á primeira ou á segunda liña de extensión) e o texto debaixo da liña debúxanse nas cotas lineais e alineadas; nas outras cotas consérvanse e gárdanse, pero aínda non se debuxan. As opcións de Axuste consérvanse e gárdanse, pero aínda non se debuxan: CadCraft coloca o texto segundo a súa propia regra (enriba da liña, fóra cando non cabe).
:::

## Nada seleccionado

Sen nada seleccionado, o panel amosa:

- **Novos obxectos:** a capa, cor, tipo de liña, grosor e altura de texto que reciben os novos obxectos; as unidades do debuxo e o formato de lonxitude; o tipo de liña e o grosor da capa actual; tamaños para cotas novas. Nunha folla, o nome, papel e orientación da folla van primeiro.
- **Vista:** o centro, altura e ancho do que se ve na pantalla. Escriba un valor para mover a vista até alí.
- **Varios:** o icono do SCP activado ou desactivado, o SCP (sempre Mundo: CadCraft aínda non ten sistemas de coordenadas de usuario) e a escala de anotación.

## Os botóns da parte superior

| Botón | Fai |
|---|---|
| Embudo | {{cmd:QSELECT}}: selecciona por tipo e propiedade |
| Punteiro | {{cmd:SELECT}}: selecciona obxectos na liña de comandos |
| Máis ou 1 | Se un clic engade á selección (máis) ou a substitúe (1); o mesmo axuste que en Configuración, {{ui:CadCraft}} |
| Fixar | Ocultado automático, explicado enriba |

## Erros habituais

- **Escribir nun campo non fixo nada.** Prema {{key:Enter}} ou faga clic noutro lugar para aplicalo. Un campo en vermello e unha nota significan que a entrada se rexeitou.
- **Unha lonxitude con unidade rexéitase.** O debuxo non ten unidades. Estableza {{ui:Unidades}} sen nada seleccionado.
- **Só se ven Capa e Cor.** Hai varios tipos de obxectos seleccionados e está escollido **Todos**. Escolla un tipo na lista da parte superior.
- **Algúns obxectos non cambiaron.** Están nunha capa bloqueada. Desbloquee a capa no panel de capas.
- **As letras escritas foron a un campo.** Mentres un campo ten o cursor, as teclas escriben alí. Prema {{key:Enter}} ou {{key:Esc}}, despois escriba o comando.
