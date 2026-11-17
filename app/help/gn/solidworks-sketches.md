---
title: Mudá bocetos ha otros modeladores de piezas
summary: Ejapo macro ojapóva dibujo nde pyahu boceto restringido peteĩ modelador de piezas-pe, ha ejepyrũ boceto ojeexportáva peteĩ upegui.
keywords: boceto, macro, swb, vba, exportación, modelador de piezas, variables globales, ecuaciones, relaciones, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks ndaiporiva'ekue upe lugar CadCraft ojapóva, upévare ndaha'éi oñemoĩ ojeporu hag̃ua SolidWorks-pe. CadCraft ojapo estructura rehe nomba'apói, ha ndaha'éi ojeporu ojapo rire. Ehecha ojapóva antes ojeporu.
:::

## Mudá peteĩ dibujo boceto-pe

1. Aplicá restricciones ha cotas plano-pe (ehecha [Aplicá restricciones a un plano](topic:constraints)).
2. {{ui:Paramétrico}} grupo-pe, eiporavo {{ui:Más}} ha ejeporu {{ui:Macro para SolidWorks (.swb)}}, térã emoñe'ẽ {{cmd:SWBOUT}}.

   Archivo peteĩ dibujo rérape, `.swb`-pe tekotevẽ, ojehupytýta.
3. SolidWorks-pe, eiporavo **Tools > Macro > Run** ha ejepe'a ko archivo.

Macro ojapo peteĩ pieza pyahu default plantilla-gui, ojepyrũ boceto Front Plane-pe ha omoĩ modelo línea, círculo, arco, punto ha polilínea, ha:

- nde restricciones boceto relación-kuéra-pe,
- nde cotas dimensionales ojeikuaa kuéra-pe (`d1@Sketch1`),
- nde parámetros variables globales-pe,
- expresión opavave ecuación-pe.

Pieza ojeporu dibujo longitud unidad. Texto, bloque, sombreado, cota ha hoja ndaha'éi boceto-pe; historial ohechauka mba'épa ndojeguerekóiva. Expresiones ndaiporiva'ekue ecuación forma-pe (`if`, `min`, `max`, `round`, `%` ha ambue) ojehai valor actual-pe, historial ohechauka upéva. Macro ndaikatúi ojapo mba'e ojehai archivo log-pe macro rapykue, ha mensaje oñeresumi fin-pe.

## Ejepyrũ boceto peteĩ pieza-gui

1. SolidWorks-pe, eñeha CadCraft export macro (eñemoĩ PartCraft app-pe: Archivo > Exportar > Exportar macro para devolver piezas) pieza-pe. Oikuaa archivo `.json` formato `cadcraft-sw-export`-pe pieza rapykue.
2. CadCraft-pe, eiporavo {{ui:Abrir}} ha ejepe'a ko `.json` archivo.
3. Pieza peteĩ boceto mboyve ojeguereko jave, eiporavo peteĩ.

Boceto oñemoĩ dibujo-pe milímetro-pe: línea, arco, círculo ha punto, relación-kuéra restricción-pe, cotas dimensionales ojeikuaa-jeyva (`D1`, `D2` …), variables globales parámetro-pe ha ecuación cotas-pe expresión-pe. Historial ohechauka mba'épa ndojeguerahái, upéicha relaciones CadCraft ndoguerekóiva. Boceto mba'éichapa oĩ pieza-pe ndojeikeháiva: plano-pe oñemoĩ, upéicha ohecha hag̃ua plano-pe.
