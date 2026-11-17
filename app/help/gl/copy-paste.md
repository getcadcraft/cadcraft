---
title: Copiar, pegar e duplicar
summary: Copie obxectos no portapapeis de CadCraft, péguos onde prema ou no mesmo sitio, duplíqueos co punteiro e leve traballo desde outro debuxo ou pestana.
keywords: copiar, cortar, pegar, pegar no mesmo sitio, duplicar, portapapeis, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, entre debuxos, outra pestana, punto base
from: 4b9f29d3
---

## O que vai aprender

Como copiar obxectos no portapapeis, pegalos onde prema ou nas súas propias coordenadas, duplicalos co punteiro, cortalos e levalos a outro debuxo. Todo isto tamén está no grupo {{ui:Editar}} da barra de ferramentas: {{ui:Copiar}}, {{ui:Pegar}} e o menú {{ui:Máis}}.

## Copiar e pegar onde prema

1. Seleccione os obxectos: prema neles ou arrastre unha xanela.
2. Prema {{key:Mod+C}}, ou prema {{ui:Copiar}} no grupo {{ui:Editar}}. A liña de comandos di cantos obxectos se copiaron. Seguen seleccionados.
3. Prema {{key:Mod+V}}, ou prema {{ui:Pegar}}. A copia aparece no cursor, colgada desde a esquina inferior esquerda dos obxectos copiados.
4. Prema onde vaia esa esquina, ou escriba un punto como `2000,500` e prema {{key:Enter}}. Os encaixes a obxectos e Orto funcionan como de costume.

Os obxectos pegados quedan seleccionados, así que pode movelos ou cambialos de inmediato. Un {{key:Mod+Z}} retira todo o pegado.

:::tip
Quere que a copia colgue dun punto que escolla, como a esquina dun muro? Escriba `COPYBASE`, prema o punto base, seleccione os obxectos e prema {{key:Enter}}. Ao pegar, ese punto vai onde prema. Para colgar cada copia do seu centro en lugar da esquina inferior esquerda, cambie {{ui:Punto de pegado}} en [Configuración de CadCraft](topic:settings).
:::

## Pegar no mesmo sitio

Prema {{key:Mod+Shift+V}}, ou escolla {{ui:Pegar no mesmo sitio}} no menú {{ui:Máis}}. A copia entra exactamente nas coordenadas desde as que se copiou, sen clic. Use isto para levar obxectos a outro debuxo no mesmo sitio, ou dunha folla a outra folla.

## Duplicar e mover

1. Seleccione os obxectos.
2. Prema {{key:Mod+D}}, ou escolla {{ui:Duplicar e mover}} no menú {{ui:Máis}}.
3. Unha copia queda enriba do orixinal e move co punteiro. Prema onde debe ir. Tamén pode escribir un desprazamento como `@0,-600`, ou unha distancia cara ao cursor.

{{key:Esc}} antes do clic non deixa nada atrás. O duplicado é un paso de desfacer e non toca o portapapeis.

## Cortar

Prema {{key:Mod+X}}, ou escolla {{ui:Cortar}} no menú {{ui:Máis}}. Os obxectos van ao portapapeis e bórranse do debuxo, nun só paso de desfacer. Pégueos de novo con {{key:Mod+V}} ou {{key:Mod+Shift+V}}.

## Entre debuxos e pestanas

O portapapeis conserva a súa copia cando abre outro debuxo, e é compartido por todas as pestanas de CadCraft deste navegador. Copie nunha pestana e prema {{key:Mod+V}} noutra.

- Os bloques que usan os obxectos veñen con eles. Se o debuxo onde pega xa ten un bloque co mesmo nome, úsase a súa propia definición, como fai AutoCAD.
- As capas que usan os obxectos engádense, co seu cor e axustes.
- A copia non se reescala cando os dous debuxos usan unidades distintas: CadCraft avísao, e despois pode usar {{cmd:SCALE}}.
- As xanelas gráficas quedan na súa folla; non se copian.

:::note
O portapapeis é propio de CadCraft. Non pode pegar obxectos de CadCraft noutro programa, nin pegar desde outro programa en CadCraft: grave como DWG ou DXF. Unha copia moi grande pode ser demasiado para compartir entre pestanas; a liña de comandos entón di que só a pode pegar esta pestana.
:::

## Erros frecuentes

- **{{key:Mod+V}} pegou texto na liña de comandos.** Escribira algo alí, así que as teclas actuaron sobre o texto. Prema {{key:Esc}} para borralo e logo prema {{key:Mod+V}} de novo.
- **Non pasou nada, e a barra de estado di que remate o comando actual.** Hai outro comando en curso. Prema {{key:Esc}} primeiro.
- **O pegado caeu lonxe.** Colga da esquina inferior esquerda do que copiou, que pode ser un obxecto distante seleccionado por erro. Use {{ui:Pegar no mesmo sitio}}, ou copie con `COPYBASE`.
- **"Non se pegou nada", con motivo.** O que outra pestana deixou no portapapeis non se puido ler (estaba danado, ou foi cambiado a man). Copie os obxectos de novo.

Vexa a lista completa de teclas en [Teclado e rato](topic:keyboard), e cada aviso en [Referencia de comandos](topic:commands#clipboard).
