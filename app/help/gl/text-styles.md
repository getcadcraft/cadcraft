---
title: Definir o tipo de letra e o tamaño do texto con estilos de texto
summary: Cree estilos de texto con nome, cun tipo de letra, altura, ancho e inclinación, defina un como actual para o texto novo e cambie un estilo para cambiar todo o texto que o use.
keywords: estilo de texto, estilo, STYLE, ST, TEXTSTYLE, -STYLE, tipo de letra, altura do texto, factor de ancho, oblicuo, inclinación, cambiar tipo de letra, estilo estándar, aplicar estilo, DDSTYLE
from: bd5a4883
---

## Que vai facer

Crear un estilo de texto chamado `Notas`, con tipo de letra e altura propios, usalo para o texto novo e despois cambiar o estilo para que cada nota que o use cambie á vez.

## Pasos

1. Escriba {{cmd:STYLE}} (`ST`) e prema {{key:Enter}}, ou prema {{ui:Estilo de texto}} na barra {{ui:Debuxar}}. O diálogo {{ui:Estilo de texto}} lista os estilos do debuxo. Todo debuxo ten `Estándar`.
2. Prema {{ui:Novo…}}, escriba `Notas` como nome do novo estilo e prema {{ui:Aceptar}}. A liña de estado di «Estilo de texto Notas creado e definido como actual.»
3. En {{ui:Tipo de letra}}, escolla ou escriba un nome de tipo de letra. Estableza {{ui:Altura (0 = preguntar cada vez)}} nun número, como `2.5`, para que cada texto novo teña esa altura. Déixeo en `0` para que lle pregunte cada vez.
4. Estableza {{ui:Factor de ancho}} e {{ui:Ángulo de inclinación (°)}} se quere letras máis estreitas, máis anchas ou inclinadas. A liña de mostra amosa o resultado.
5. Prema {{ui:Pechar}}. Debuxe texto con {{cmd:TEXT}} ou {{cmd:MTEXT}}: o texto novo toma o estilo actual.
6. Para usar un estilo que xa creou, abra de novo o diálogo, escóllao na lista e prema {{ui:Definir como actual}}.
7. Para poñer un estilo en texto que xa está debuxado, seleccione o texto, abra o diálogo, escolla o estilo e prema {{ui:Aplicar ao texto seleccionado}}.

## Cambiar un estilo despois

Cambie o tipo de letra, a altura, o ancho ou a inclinación dun estilo no diálogo e todo o texto que o use segue o cambio, nun só paso de desfacer ({{key:Mod+Z}}). A liña de estado indica cantos textos seguiron o cambio.

## Notas

- {{ui:Eliminar}} rexeita `Estándar`, e tamén un estilo que aínda use un texto: cambie antes ese texto a outro estilo.
- Os estilos gárdanse na táboa STYLE do debuxo, así que os ficheiros DXF e DWG os conservan.
- Na liña de comandos, `-STYLE` fai o mesmo con opcións (Current, New, Font, Height, Width, Oblique, Delete, List).
- Un tipo de letra que non está no ordenador que le o debuxo móstrase con outra letra.
