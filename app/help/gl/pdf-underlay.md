---
title: Subxacentes PDF e importación de PDF
summary: Coloque unha páxina PDF baixo o debuxo para calcala e trazala, ou converta as liñas e o texto da páxina en obxectos do debuxo.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, subxacente, calcar, importar pdf, escaneo, planta, esvaecer, recortar, capas, enganche, abrir pdf
from: aa301d0f
---

## Dúas formas de traer unha páxina PDF

- **Adjuntar** ({{cmd:PDFATTACH}}) mantén o PDF como unha imaxe baixo o debuxo. Calcao, enganche ás súas liñas, esvaécea e recórtea, e imprímese coa folla. O debuxo conserva só o nome do ficheiro.
- **Importar** ({{cmd:PDFIMPORT}}) converte as liñas, curvas, tramas e texto da páxina en obxectos normais do debuxo, en capas co nome do PDF. Son seus para editar, e o PDF non é necesario despois.

Ao abrir un PDF con {{ui:Abrir}}, pregúntase cal das dúas quere.

## Adjuntar unha páxina

1. Escriba `PDFATTACH` (ou `PDFATT`) e escolla o PDF. Se ten varias páxinas, escriba o número da páxina.
2. Faga clic no punto de inserción (a esquina inferior esquerda da páxina).
3. Prema {{key:Enter}} para o tamaño real da páxina, ou escriba a escala: unidades de debuxo por punto PDF (un punto é 1/72 de polgada, así que 0,3528 nun debuxo en milímetros).
4. Prema {{key:Enter}} para non xirar, ou escriba un ángulo.

A páxina é un obxecto como unha referencia de bloque: pódese mover, xirar, escalar, copiar, borrar e pasar a unha capa. Se desactiva a súa capa, desaparece. Se achega o zoom, a páxina debúxase de novo con nitidez.

## Calcar

Con {{ui:Enganche}} activo, o cursor énganchase ás liñas propias do PDF: puntos finais, puntos medios e cruzamentos (e {{ui:Máis próximo}} cando ese enganche está activo). O texto escrito como letras na páxina non se engancha.

## Axustar

- `PDFADJUST`: **Esvaecer** (0 a 80 por cento), **Contraste** (0 a 100), **Monocromo**, e **Onoff** para ocultalo sen borralo.
- `PDFCLIP`: mostra só un rectángulo ou polígono da páxina; **Eliminar** quita o recorte.
- `PDFLAYERS`: un PDF pode ter as súas propias capas. O comando lístaas; escriba un número para activar ou desactivar esa capa só para este subxacente. As capas que o ficheiro ten desactivadas comezan desactivadas.

## Trazar e gardar

PLOT imprime a páxina como as súas liñas, tramas e texto (así segue nítida e pesquisable). As imaxes dentro do PDF móstranse na pantalla, pero aínda non se imprimen.

Un DWG ou DXF 2000 conserva o subxacente como unha ligazón: o nome do ficheiro, a páxina, onde está, a súa escala, xiro, recorte, esvaecemento e contraste. O propio PDF non está no debuxo. Reabra o debuxo, escriba `PDF` e escolla de novo o ficheiro; ata entón as páxinas móstranse como {{ui:Pórtico}} e toman o seu tamaño real cando o fai. O DXF R12 antigo non ten subxacentes: conserva o pórtico e o nome. Aínda non se comprobou como leen outros programas o recorte e a escala gardados.

## Importar unha páxina

1. Escriba `PDFIMPORT` (ou `PDFIM`) e escolla o PDF e a páxina.
2. Faga clic onde vai a esquina inferior esquerda da páxina.
3. Prema {{key:Enter}} para o tamaño real, escriba unha escala, ou escolla **Dous puntos**: a páxina debúxase en tamaño real; despois faga clic en dous puntos cuxa distancia coñece e escriba a distancia real. Todo se escala para axustarse.

As liñas convértense en liñas e polilíneas, recoñécense círculos e arcos, as formas cheas convértense en tramas sólidas, e o texto convértese en texto nunha capa que remata en `-TEXT`. É un só paso de desfacer. As imaxes do PDF non se importan: adxunte a páxina no seu lugar. Un escaneo (unha páxina que é só unha imaxe) non ten liñas que importar.

Os PDF léense como ficheiros non confiables: non se executa ningún script, e unha páxina moi grande córtase e indícao.
