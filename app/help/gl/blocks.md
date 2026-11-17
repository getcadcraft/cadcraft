---
title: Crear e inserir bloques
summary: Converta unha porta debuxada nun bloque, colóqueo de novo noutras posicións, escalas e ángulos, e limpe os bloques sen usar.
keywords: bloque, bmake, inserir, ddinsert, símbolo, purgar, desagregar, redefinir, punto base, referencia, contar, bcount, cuadro, csv, atributos, extracción de datos
from: 125a129d
---

## O que vai facer

Un símbolo de porta convertido nun bloque chamado `DOOR-900`, e logo colocado tres veces: tal como está, xirado 90 graos e espellado.

Un bloque é un grupo de obxectos con nome. Vostede debúxao unha vez; cada lugar onde o usa é unha **referencia de bloque** que apunta á única definición. A sección {{ui:Bloques}} do panel esquerdo lista os bloques do debuxo e cantas veces se usa cada un.

## Debuxe a porta

1. Escriba `L` e prema {{key:Enter}}.
2. Escriba `0,0` e prema {{key:Enter}}.
3. Escriba `@0,900` e prema {{key:Enter}}, e logo prema {{key:Enter}} de novo. Esta é a folla da porta.
4. Escriba `A` e prema {{key:Enter}}.
5. Escriba `C` e prema {{key:Enter}} para indicar primeiro o centro.
6. Escriba `0,0` e prema {{key:Enter}} para o centro.
7. Escriba `900,0` e prema {{key:Enter}} para o punto inicial.
8. Escriba `0,900` e prema {{key:Enter}} para o punto final. Este é o arco de abertura.
9. Prema {{ui:Extensións}}.

Os arcos van en sentido antihorario desde o punto inicial ata o punto final.

## Faga o bloque

1. Escriba `B` e prema {{key:Enter}}, ou prema {{ui:Crear}} no grupo Bloques.
2. En `Enter block name`, escriba `DOOR-900` e prema {{key:Enter}}.
3. En `Specify insertion base point`, escriba `0,0` e prema {{key:Enter}}. Esta é a bisagra: o punto que cae onde coloca o bloque.
4. En `Select objects`, arrastre unha xanela ao redor da folla e do arco.
5. Prema {{key:Enter}}.

O historial di `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` O panel {{ui:Bloques}} lista DOOR-900 con `1×` ao lado: unha referencia. Prema a porta: agora selecciónase como un só obxecto, unha «Referencia de bloque».

:::tip
Pode seleccionar primeiro os obxectos e logo escribir `B`. CadCraft aínda pide o nome e o punto base, e despois usa a súa selección.
:::

## Inserir o bloque

1. Escriba `I` e prema {{key:Enter}}, ou prema {{ui:Inserir}} xunto a DOOR-900 no panel {{ui:Bloques}}.
2. En `Enter block name or [File/Library] <DOOR-900>`, prema {{key:Enter}}. (O botón {{ui:Inserir}} do panel enche o nome por vostede.)
3. A porta segue a cruceta. Prema onde debe ir a bisagra.

Aparece unha segunda porta.

## Inserir xirado ou escalado

1. Escriba `I` e prema {{key:Enter}}, e logo prema {{key:Enter}} para aceptar o nome.
2. En `Specify insertion point [Scale/Rotate]`, escriba `R` e prema {{key:Enter}}.
3. Escriba `90` e prema {{key:Enter}}. A vista previa xira.
4. Prema para colocala.

Escriba `S` no seu lugar para fixar un factor de escala; aplícase en ambas direccións. A escala e a rotación recórdanse para a seguinte inserción. Para espellar unha porta, insírala e logo use {{cmd:MIRROR}} sobre a referencia.

## Cambiar un bloque colocado

Seleccione unha referencia de bloque. No panel dereito pode cambiar o {{ui:X}}, {{ui:Y}}, {{ui:Escala X}}, {{ui:Escala Y}} e {{ui:Rotación}}. Unha {{ui:Escala X}} negativa volta o bloque.

## Redefinir un bloque

Para cambiar todas as portas á vez, cree un bloque co mesmo nome:

1. Debuxe a nova versión da porta.
2. Escriba `B` e prema {{key:Enter}}, e escriba `DOOR-900`.
3. En `Block "DOOR-900" already exists. Redefine it?`, escriba `Y` e prema {{key:Enter}}.
4. Indique o punto base e seleccione os novos obxectos, como antes.

Cada referencia a DOOR-900 mostra agora a nova versión.

Ou edite o propio bloque: {{ui:Bloques}} › {{ui:Máis}} › {{ui:Editar bloque}} ({{cmd:BEDIT}}) ábreo por separado, e {{ui:Gardar bloque}} volve gardalo. Consulte [Atributos de bloque](topic:attributes#change-a-block-the-block-editor).

## Contar bloques e exportar un cuadro

Escriba {{cmd:COUNT}} (ou {{ui:Bloques}} › {{ui:Máis}} › {{ui:Contar bloques}}), e logo:

- prema nunha porta: selecciónanse todas as portas deste espazo, e o historial di cantas hai aquí e no debuxo completo;
- ou prema {{key:Enter}}: o historial lista cada bloque co seu conteo, o máis numeroso primeiro;
- ou escriba `E`, e logo `C` para un CSV dos conteos (no modelo, nas follas e en total) ou `A` para unha fila por referencia, coa súa capa, posición, rotación e cada valor de atributo: un cuadro que pode abrir nunha folla de cálculo.

Os bloques sen nome (cotas, táboas) e as referencias dentro doutros bloques non se contan. As celas que empezan como unha fórmula (`=`, `+`, `-`, `@`) reciben un `'` inicial para que a folla de cálculo as mostre como texto.

## Desagregar e purgar

- {{cmd:EXPLODE}} (`X`) converte unha referencia de bloque seleccionada de novo en obxectos separados. A definición permanece.
- {{cmd:PURGE}} (`PU`) elimina as definicións de bloque que xa ningún usa. O historial di cantas eliminou.

## Nomes de bloque

Un nome pode ter ata 255 caracteres e pode conter espazos, pero non pode empezar por un asterisco, nin conter `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ou unha crase. Ao gardar DXF R12, os nomes escríbense en maiúsculas, os caracteres distintos de letras, díxitos, `$`, `_` e `-` cámbianse por `_`, e os nomes córtanse a 31 caracteres; o historial di cantos cambiaron. Os nomes curtos en maiúsculas, díxitos e guións, como `DOOR-900`, mantéñense sen cambios. Un DWG gardado conserva os nomes tal como os escribiu, con maiúsculas e minúsculas; só cambian os caracteres que o DWG non admite (un `|` pasa a `$0$`, os demais pasan a `_`).

## Escribir un bloque ou obxectos nun ficheiro propio

Escriba `W` ({{cmd:WBLOCK}}) e escolla **Obxectos**, **Bloque** ou **Debuxo completo**. O resultado é un DWG ou DXF novo que só contén as capas, os estilos e os bloques que usa, co seu punto base como orixe. Para os obxectos pode conservalos, convertelos nun bloque ou eliminalos deste debuxo.

## Erros frecuentes

- **O bloque caeu lonxe da cruceta.** O punto base non estaba sobre os obxectos. Cree de novo o bloque co punto base nunha esquina ou nunha bisagra.
- **"Non se seleccionou ningún obxecto; non se creou nada."** Prema {{key:Enter}} antes de seleccionar algo.
- **"Este debuxo aínda non ten bloques: F insire un desde un ficheiro, L desde a biblioteca (ou cree un con BLOCK)."** Escriba `F` para traer un bloque doutro debuxo, ou `L` para a biblioteca. Consulte [Inserir desde un ficheiro ou desde a biblioteca](topic:insert-from-file-and-library).
- **"Unha viewport non pode ir dentro dun bloque."** Deixe fóra da selección os marcos das viewports.
