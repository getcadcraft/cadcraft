---
title: Restrinxir un debuxo
summary: Manteña as liñas horizontais, os extremos xuntos e os tamaños fixos con restricións xeométricas e dimensionais, e deixe que o debuxo siga cando cambie un tamaño.
keywords: restrición, restricións, paramétrico, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, graos de liberdade, totalmente restrinxido
from: f8f21fa4
---

## O que vai facer

Unha placa cuxa largura cambia nun só sitio: os lados seguen en ángulo recto, unha esquina queda fixa e a altura queda en metade da largura.

As restricións funcionan con liñas, polilíneas, círculos, arcos e puntos na pestana {{ui:Modelo}}. Cada unha que engada é un paso de desfacer.

## Debuxar e restrinxir o contorno

1. Escriba `REC` e prema {{key:Enter}}. Escriba `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Escriba `AUTOCONSTRAIN` e prema {{key:Enter}}. Escriba `ALL`, {{key:Enter}}, e logo {{key:Enter}} de novo.

   O historial di "4 restricións aplicadas". Aparecen pequenas caixas con **H** e **V** xunto aos lados: son as barras de restrición.
3. Escriba `GCFIX` e prema {{key:Enter}}. Prema preto da esquina inferior esquerda. Aparece unha caixa con ⊕: esa esquina queda onde está.

`AUTOCONSTRAIN` engade restricións de coincidencia onde os extremos case se tocan, e restricións horizontais ou verticais onde as liñas están case niveladas ou a prumo. Escriba `S` no seu aviso para cambiar a proximidade (0.05 unidades do debuxo e 1° ao principio).

## Engadir os tamaños

1. Escriba `DCHORIZONTAL` e prema {{key:Enter}}.
2. Prema preto da esquina inferior esquerda e logo preto da esquina inferior dereita.
3. Prema por debaixo do rectángulo para a liña de cota.
4. O aviso amosa `Dimension text <d1=100>`. Escriba `width=120` e prema {{key:Enter}}.

   O rectángulo mide agora 120 de ancho, e a etiqueta di `width=120`.
5. Escriba `DCVERTICAL` e prema {{key:Enter}}, escriba `O` e prema {{key:Enter}}, e logo prema no lado dereito.
6. Prema á dereita del, escriba `width/2` e prema {{key:Enter}}.

   Mide 60 de altura. A etiqueta di `fx: d1=width/2`: unha expresión controla a cota.

O historial di agora que o contorno está totalmente restrinxido. Para cambiar o seu tamaño, cambie `width` (vexa [Usar parámetros e ecuacións](topic:parameters)), ou prema dúas veces na etiqueta `width=120`, escriba un valor novo e escolla {{ui:Aplicar}}.

## Mover obxectos restrinxidos

Mover, xirar, escalar, os puntos de agarre e o panel Propiedades tamén manteñen as restricións: o que moveu queda suxeito, e o resto segue. Cando as restricións non poden seguir, a edición non se fai e o historial di por que, por exemplo "Non feito: as restricións manteñen ese obxecto onde está". Borrar un obxecto elimina tamén as súas restricións.

## Espellar e recortar obxectos restrinxidos

- {{cmd:MIRROR}} copia as restricións entre os obxectos que espella sobre as copias. Os lados (por onde toca unha tanxente, a que lado se mide unha distancia) calcúlanse de novo para a copia espellada, e as cotas copiadas reciben nomes propios, como ocorre cun pegado. Con `Erase source objects` `Y`, as restricións quedan nos obxectos espellados. O historial di cantas viñeron con eles.
- {{cmd:TRIM}} mantén as restricións dunha liña ou dun arco sobre o que queda: unha restrición nun extremo vai ao anaco que aínda ten ese extremo, unha regra sobre a dirección ({{ui:Horizontal}}, {{ui:Vertical}}, {{ui:Paralela}}, {{ui:Perpendicular}}) mantense en todos os anacos, e unha cota entre os dous extremos exteriores segue medíndoos. As restricións que suxeitaban a parte cortada, ou unha lonxitude que o corte cambiou ({{ui:Igual}}, o barrido dun arco), desaparecen. Un círculo recortado mantén as súas restricións de centro e raio. As polilíneas recortadas pérdenas.

## As restricións

| Comando | Mantén |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | unha liña ou segmento nivelado ou a prumo (`2P`: dous puntos niveados ou a prumo) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | dúas liñas paralelas, en ángulo recto ou sobre unha mesma recta |
| {{cmd:GCCOINCIDENT}} | dous puntos xuntos; `O`: un punto sobre unha liña, círculo ou arco |
| {{cmd:GCTANGENT}} | unha liña e un círculo ou arco, ou dous deles, tocándose |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | dous círculos ou arcos sobre un mesmo centro; dúas lonxitudes ou dous raios iguais |
| {{cmd:GCSYMMETRIC}} | dous puntos, liñas ou círculos espellados a través dunha liña |
| {{cmd:GCFIX}} | un punto (prema preto dele) ou un obxecto completo (`O`) onde está |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | unha distancia |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | un raio, un diámetro, un ángulo entre dúas liñas ou o ángulo dun arco |

{{cmd:GEOMCONSTRAINT}} e {{cmd:DIMCONSTRAINT}} preguntan cal; {{ui:Restrinxir}} e {{ui:Cota}} no grupo {{ui:Paramétrico}} executan cada unha, e {{ui:Máis}} alí lista cada unha. O lugar onde preme elixe a parte: un clic preto dun extremo, do punto medio ou dun centro toma ese punto; un clic sobre unha polilínea toma o segmento que hai debaixo. O primeiro obxecto queda no seu sitio e o segundo móvese para encontrarse con el.

Unha restrición que entra en conflito con outras, ou que non engade nada porque as outras xa a implican, recházase cunha mensaxe e non se move nada.

## Ver, seleccionar e eliminar

- Prema nunha caixa dunha barra de restrición (ou nun cadrado de coincidencia, ou nunha etiqueta de cota) para seleccionar esa restrición; o historial lle dá nome. Prema {{key:Delete}} para eliminala.
- {{cmd:DELCONSTRAINT}} elimina todas as restricións dos obxectos que seleccione.
- {{cmd:CONSTRAINTBAR}}: `S` amosa todas as barras, `H` as oculta; seleccione antes os obxectos para amosar ou ocultar as súas. {{ui:Máis}} ten {{ui:Mostrar barras de restrición}} e {{ui:Ocultar barras de restrición}}.
- {{cmd:DCDISPLAY}} amosa ou oculta as restricións dimensionais. Nunca se imprimen.
- {{cmd:DCCONVERT}} converte as cotas debuxadas sobre liñas, círculos e arcos en restricións dimensionais.

:::note
Se xa usou o debuxo paramétrico de AutoCAD, os nomes dos comandos e os avisos son os mesmos. As restricións e os parámetros gárdanse en ficheiros DWG e DXF nunha forma que outros programas ignoran; vexa [Ficheiros](topic:files#constraints-in-files).
:::
