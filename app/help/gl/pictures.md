---
title: Imaxes nun debuxo
summary: Coloque unha imaxe PNG ou JPEG, recórteaa a un rectángulo ou un polígono, mostre as imaxes que usa un DWG e tráceas nítidas.
keywords: pastearea, parea, copiar área, área copiada, markupcraft, tamaño real, tamaño natural, superposición, ole, ole2frame, obxecto incrustado, pegar imaxe, pegar captura, ctrl+v, imaxe do portapapeis, captura, imaxe, image, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, foto, raster, imagedef, xref, trazar, pdf, resolución
from: 4025ac97
---

## O que vai facer

Un logotipo da empresa colocado nun cadro de título, recortado á parte que quere, e un PDF no que se imprime coa súa propia resolución.

## Colocar unha imaxe

1. Escriba {{cmd:IMAGEATTACH}} (ou `IAT`) e prema {{key:Enter}}. Escolla un ficheiro PNG ou JPEG.
2. `Specify the lower-left corner`: prema, ou escriba un punto.
3. `Specify its width`: a anchura en unidades de debuxo. {{key:Enter}} mantén a anchura ofrecida: unha unidade por píxel, ou a anchura que deu a este ficheiro a última vez (a indicación di cal).
4. `Specify its rotation angle`: {{key:Enter}} para ningunha.

A imaxe é un único obxecto: selecciónea polo seu marco, e móvaa, cópiea, xírea, escálea ou bórrea como calquera bloque.

:::note
O ficheiro da imaxe queda co debuxo mentres está aberto. Un DWG gardado indica o nome do ficheiro, como fan outros programas; non contén os píxeles. Garde a imaxe xunto ao debuxo.
:::

## Pegar unha captura ou unha imaxe copiada

1. Copie a imaxe (unha captura con {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=a súa ferramenta de captura de pantalla}}, ou Copiar imaxe nun navegador ou noutro programa).
2. Sitúe o punteiro onde debe ir no debuxo e prema {{key:Mod+V}}.

A esquina inferior esquerda da imaxe cae no punteiro (ou no centro da vista), cun 40 % da anchura do que vê; móvea, escálea e recórtea como calquera imaxe. O seu nome é o do debuxo con `-picture-1.png` (despois `-2`, …), e o historial di isto. {{ui:Edit}} › {{ui:More}} › {{ui:Paste a picture}} fai o mesmo desde o menú (o navegador pode preguntar antes).

Un DWG conserva só o nome do ficheiro dunha imaxe, así que ao gardar o debuxo tamén se garda a imaxe como ficheiro propio. Manteña os dous na mesma carpeta: o debuxo mostra a imaxe desde alí. No navegador é unha segunda descarga, e o historial di isto. Se no portapapeis hai só obxectos de CadCraft, {{key:Mod+V}} pega eses, como antes.

## Pegar unha área copiada en MarkupCraft

{{ui:Copiar área}} en MarkupCraft copia unha parte dunha folla como unha imaxe que sabe o seu tamaño. CadCraft a pega a ese tamaño.

1. En MarkupCraft, copie a área (un rectángulo, un círculo ou unha forma libre; {{ui:Copiar como superposición}} se quere ver o seu debuxo a través dela).
2. En CadCraft, prema {{key:Mod+V}}, ou escriba {{cmd:PASTEAREA}} (ou `PAREA`), ou escolla {{ui:Editar}} › {{ui:Máis}} › {{ui:Pegar unha área copiada}}.
3. `Specify the lower-left corner of the copied area`: prema, ou escriba un punto. Un marco do tamaño da área segue o punteiro.

Como de grande cae:

- **A folla tiña unha escala de debuxo:** en tamaño real, nas unidades do debuxo (un detalle 1:50 dunha escaleira de 2 m mide 2 m nun debuxo en metros, e 78,74 nun debuxo en polgadas). Non se pregunta nada máis.
- **A folla non tiña escala:** CadCraft indica o seu tamaño en papel e pide unha escala: escriba `100` para unha folla 1:100, prema {{key:Enter}} para o tamaño do papel, ou escriba `P`, prema dous puntos na imaxe pegada e escriba a distancia real entre eles (como fai {{cmd:SCANSCALE}}). A esquina inferior esquerda queda onde a puxo.

Un debuxo sen unidades toma milímetros, como fai un subxacente PDF. Unha superposición conserva o papel transparente e comeza tan esvaecida como estaba cando se copiou; o exterior dun círculo ou dunha forma libre tamén é transparente. A área pegada é unha imaxe como calquera outra: móvea, xírea, escálea, recórtea ou bórrea, e todo o pegado é un só paso de desfacer. Gardada como DWG, é un IMAGE co seu esvaecido e a súa transparencia.

{{key:Mod+V}} pega a área cando a imaxe do portapapeis é a da área, ou cando a área se copiou despois de calquera cousa que copiase en CadCraft (e nas últimas 6 horas). Doutro xeito pega como antes. {{cmd:PASTEAREA}} pega a última área copiada en calquera momento.

## Mostrar as imaxes que usa un DWG

Un DWG almacena só onde estaban as súas imaxes, así que CadCraft mostra cada unha como un marco co nome do ficheiro.

1. Escriba {{cmd:IMAGE}} (ou `IM`). A liña de comandos lista cada ficheiro de imaxe e se se mostra.
2. Escolla os ficheiros (varios á vez). Un ficheiro cuxo nome contén o que o debuxo indica tamén conta, porque as exportacións adoitan engadir un prefixo de proxecto.

## Recortar unha imaxe

1. Escriba {{cmd:IMAGECLIP}} (ou `ICL`) e seleccione a imaxe.
2. Escolla `R` e prema dúas esquinas, ou `P` e prema os puntos dun polígono, e logo {{key:Enter}}. `D` elimina o recorte.

## Trazar imaxes

As imaxes entran no PDF como imaxes, na súa propia resolución e por debaixo das liñas. No diálogo {{ui:Plot}}, {{ui:Pictures}} pode limitalas a 600, 300 ou 150 ppp para que o ficheiro sexa máis pequeno. Un JPEG entra tal cal.

## Onde se garda cada imaxe

| Formato | Imaxes |
|---|---|
| DWG (todas as versións) | Como imaxes (IMAGE), co seu recorte |
| DXF | Como os seus marcos co nome do ficheiro; o gardado di isto |

## Obxectos doutros programas (OLE)

Un debuxo pode conter obxectos que fixo outro programa, como unha imaxe dun programa de pintura ou un rango dunha folla de cálculo (obxectos OLE). CadCraft non os executa nin os edita, e non pode inserir novos. O que fai:

- **Nun DXF**, un obxecto OLE ábrese como un marco. Se o obxecto gardou unha imaxe de si mesmo e esa imaxe é un mapa de bits, a imaxe debúxase dentro do marco; doutro xeito, o marco leva unha etiqueta co tipo do obxecto, como "Microsoft Excel Worksheet (OLE)". Pode mover, copiar e borrar o marco como un bloque. {{cmd:SAVEAS}} a DXF 2000 escríbeo de novo como obxecto OLE, cos seus datos sen cambios.
- **Nun DWG**, os obxectos consérvanse e escríbense de novo ao gardar como DWG, byte a byte, pero **non se mostran**: un DWG conserva o lugar dun obxecto dentro dos seus propios datos, e CadCraft aínda non o le. O historial di cantos se conservaron. Escriba {{cmd:OLELIST}} para ver que son (tipo, tamaño, se cada un gardou unha imaxe) e para poñer unha copia dunha imaxe onde escolla: **Colocar** pide o número, a esquina inferior esquerda e a anchura, e debuxa un marco coa imaxe dentro. Esa copia é un marco que pode mover ou borrar; o obxecto en si queda no debuxo e segue escribíndose ao gardar.
- Un obxecto que chegou desde un DXF gárdase nun DWG só como o seu marco e a etiqueta; o historial di isto. Garde como DXF 2000 para conservar o obxecto.
- As imaxes que son metarchivos (o que gardan moitos programas) non se debuxan: móstranse o marco e a etiqueta.

## Erros frecuentes

| Vostede ve | Por que | Solución |
|---|---|---|
| Un marco cun nome de ficheiro | CadCraft non ten o ficheiro | {{cmd:IMAGE}}, e logo escolla o ficheiro |
| "Iso non é unha imaxe" | O obxecto seleccionado non é unha imaxe | Seleccione o marco da imaxe |
