---
title: Modelar en 3D
summary: Vexa o debuxo en 3D na pestana {{ui:3D}} e cree sólidos simples a partir del: extruír (cunha conicidade ou por un camiño), xirar, empurrar e tirar de caras, caixas, cilindros e cuñas, unir, restar e intersecar sólidos, despois mover, copiar, xirar e eliminar, e colocar vistas planas 2D deles nunha folla.
keywords: 3d, tres d, sólido, sólidos, 3dsolid, rexión, corpo, acis, sat, sab, sólidos doutros programas, abrir debuxo 3D, extruír, ext, xirar, rev, varrer, conicidade, camiño, presspull, empurrar tirar, empurrar e tirar, caixa, cilindro, cyl, cuña, 3dorbit, órbita, vista, vscurrent, estilo visual, sombreado, liña oculta, modelo de alambre, raios X, xray, iso, perspectiva, paralela, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, cubo de vista, union, uni, restar, su, intersecar, in, booleana, combinar, unir sólidos, viewbase, flatshot, vista plana, vista 2D, vista do debuxo, vista frontal, vista superior, vista lateral, liñas ocultas
from: 13060e71
---

## O que vai crear

Unha pegada dun cuarto de 1000 × 600 extruída nun bloque de 400 de altura, unha cara tirada cara arriba e un cilindro ao lado; despois, o modelo gardado co debuxo e exportado para un visor 3D ou unha impresora.

A pestana {{ui:3D}} está xunto a {{ui:Modelo}}, debaixo do debuxo. Mostra o debuxo do espazo do modelo tendido no chan coas cores das súas capas (as capas desactivadas ou conxeladas quedan ocultas) e os sólidos que cree. A primeira vez que se abre, carga a vista 3D; despois cambia de inmediato.

## Extruír unha forma

1. Na pestana {{ui:Modelo}}, escriba `REC` e prema {{key:Enter}}. Escriba `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Prema a pestana {{ui:3D}}. A barra de ferramentas mostra o grupo {{ui:3D}} no lugar dos grupos do debuxo.
3. Prema {{ui:Extruír}} (ou escriba {{cmd:EXTRUDE}}, `EXT`). Prema dentro do rectángulo e despois prema {{key:Enter}}.
4. Escriba `400` e prema {{key:Enter}}. O historial di «Extruído 1 sólido, 400 de altura», e o seu volume.

Extrúense as polilíneas pechadas (incluídos os arcos), os rectángulos, os polígonos, os círculos e as elipses; as liñas e as polilíneas abertas non, e o historial indica por que. Tamén pode seleccionar primeiro as formas na pestana {{ui:Modelo}} e escribir `EXTRUDE` alí. En vez de escribir a altura, pode facer clic nela: o contorno segue o cursor cara arriba e cara abaixo. Unha altura negativa vai cara abaixo. Escriba `D` na indicación da altura para eliminar as formas 2D despois de extruír (`D` de novo as conserva).

Na indicación da altura, `T` (conicidade) pide un ángulo en graos: os lados inclínanse por el, de xeito que o topo é máis pequeno (un ángulo negativo faino maior); un ángulo demasiado pronunciado para a forma recházase. `P` (camiño) varre as formas por un camiño (ver abaixo).

## Xirar e varrer

- {{cmd:REVOLVE}} (`REV`, ou {{ui:Máis}} › {{ui:Xirar arredor dun eixe}}): seleccione as formas pechadas, prema {{key:Enter}}, despois prema os dous extremos do eixe (ou escriba `X` ou `Y` para o eixe do debuxo que pasa por 0,0), e logo escriba un ángulo ou prema {{key:Enter}} para dar a volta completa. A forma xira arredor do eixe e érguese sobre o chan: debuxe o contorno de medio xarrón xunto a unha liña e xírao arredor da liña. A forma pode tocar o eixe pero non cruzalo. Unha volta completa ten 48 pasos.
- {{cmd:SWEEP}} (ou {{ui:Máis}} › {{ui:Varrer por un camiño}}, ou `P` na indicación da altura de EXTRUDE): seleccione as formas pechadas (o perfil), prema {{key:Enter}} e despois prema o camiño: unha liña, polilínea, arco, círculo ou elipse. O perfil érguese atravesando o camiño, co seu centro sobre el, e percorre o; as esquinas quedan a inglete, e un camiño pechado fai un anel. Un rectángulo pequeno varrido polo contorno dun cuarto fai un zócalo; un círculo por unha polilínea fai unha tubaxe.

## Empurrar e tirar dunha cara

1. Prema {{ui:Premer/arrastrar}} (ou escriba {{cmd:PRESSPULL}}).
2. Prema a cara superior do bloque.
3. Escriba `100` e prema {{key:Enter}}, ou mova o cursor e prema. O bloque ten agora 500 de altura.

## Caixas, cilindros e cuñas

- {{cmd:BOX}}: prema ou escriba dúas esquinas, despois unha altura.
- {{cmd:CYLINDER}} (`CYL`): o centro, o raio e despois unha altura. Os cilindros e os círculos extruídos teñen 48 lados, con sombreado suave.
- {{cmd:WEDGE}} (`WE`): dúas esquinas e unha altura. Ten a altura completa na primeira esquina e vai baixando ata cero na outra.

Na pestana 3D, un clic cae sobre a cara ou aresta baixo o cursor, e se non, sobre o chan; así unha caixa pode apoiarse noutro sólido.

## Mover, copiar, xirar e eliminar sólidos

Na pestana 3D, un clic selecciona un sólido; arrastre da esquerda á dereita para unha xanela, e da dereita á esquerda para un cruzamento. Despois:

- {{cmd:MOVE}}: prema un punto base e onde vai, ou escriba `<100,0,0>` (ou `@100,0`) para unha distancia ao longo de X, Y e Z.
- {{cmd:COPY}}: o mesmo, deixando o orixinal.
- {{cmd:ROTATE}}: escriba un ángulo (xira arredor do centro da selección, en torno a Z), ou prema o centro, un punto inicial e o ángulo.
- {{cmd:ERASE}} ou {{key:Delete}}.

## Unir, restar e intersecar sólidos

Abra {{ui:Máis}} na barra de ferramentas 3D, ou escriba o comando:

- {{cmd:UNION}} (`UNI`): seleccione os sólidos, prema {{key:Enter}}: pasan a ser un só sólido.
- {{cmd:SUBTRACT}} (`SU`): seleccione os sólidos que se conservan e prema {{key:Enter}}, despois os que se han quitar e prema {{key:Enter}}. Un buraco por un bloque: debuxe un cilindro que o atravese e despois reste o cilindro.
- {{cmd:INTERSECT}} (`IN`): seleccione os sólidos, prema {{key:Enter}}: só queda o que todos teñen en común.

O historial indica o volume do resultado. Cada operación é un paso de desfacer. A primeira que execute carga o motor booleano 3D (uns 0.5 MB; incluído en {{ui:Gardar para usar sen conexión}}). Só se poden combinar sólidos pechados: un sólido con arestas abertas (das caras 3D soltas doutro programa) recházase e indícase o motivo. O resultado é un só sólido; as caras curvas seguen formadas por facetas planas, como o era o cilindro.

Faga dobre clic nun sólido para editar as súas caras e arestas por separado; {{key:Esc}} pecha a edición. Cada cambio 3D é un paso de desfacer no mesmo historial que o debuxo: {{key:Mod+Z}} desfai o último que fixo en calquera das pestanas.

## Vistas planas nunha folla

1. Abra unha pestana de folla (ou manteña {{ui:Modelo}}) e escriba {{cmd:VIEWBASE}} (ou `FLATSHOT`).
2. Escolla a vista: {{key:Enter}} para a frontal, ou `T` (superior), `R` (dereita), `L` (esquerda), `BA` (posterior), `BO` (inferior), `I` (isométrica).
3. {{key:Enter}} mostra as liñas ocultas, a trazos; `H` as deixa fóra.
4. {{key:Enter}} toma a escala que suxire CadCraft: nunha folla, a escala estándar máis grande (como 1:20) na que a vista cabe en menos da metade do papel. Ou escriba unha: `1:50`, `2:1`.
5. Prema, ou escriba, onde vai o centro da vista.

A vista é unha referencia de bloque, `VIEW-FRONT-1` e así sucesivamente: as arestas visibles na capa VIEW-VISIBLE (0.5 mm), as ocultas en VIEW-HIDDEN (a trazos, 0.25 mm). Móvaa, acótea e imprímaa como calquera outro debuxo. É unha imaxe dos sólidos no momento en que a fixo: despois de cambialos, elimine a vista e execute de novo {{cmd:VIEWBASE}}. Para máis vistas, execútego unha vez por cada vista.

## Mirar ao redor

Arrastre coa roda para orbitar, {{key:Shift}} + arrastre coa roda ou co botón dereito para desprazar, e xire a roda para facer zoom no cursor. Nun panel táctil, dous dedos orbitan e un pinzamento fai zoom. Un clic dereito sen arrastrar equivale a {{key:Enter}}, como nas outras pestanas. `3DORBIT` permite que o botón esquerdo oriente ata que prema {{key:Enter}} ou {{key:Esc}}.

- {{ui:Vistas}} (ou {{cmd:VIEW}}): Isométrica, Superior, Inferior, Frontal, Posterior, Esquerda, Dereita, Perspectiva ou Paralela, e Zoom a todo.
- {{ui:Estilo}} (ou {{cmd:VSCURRENT}}, `VS`): Sombreado, Sombreado con arestas, Liñas ocultas, Modelo de alambre ou Raio X.

Os puntos nos que fai clic enganchan nos sólidos (esquinas, arestas, caras) e no debuxo 2D do chan: os extremos e os puntos medios das súas liñas e arcos, e os puntos ao longo deles. As liñas 2D nunca se seleccionan na pestana 3D. Cando un comando pide obxectos 2D (EXTRUDE, REVOLVE, SWEEP), un clic escolle un, un arrastre da esquerda á dereita toma o que queda enteiramente dentro da xanela, e un arrastre da dereita á esquerda toma o que cruza, como na pestana {{ui:Modelo}}.

Un cubo de vista sitúase na parte superior dereita da pestana 3D: prema unha cara, aresta ou esquina para mirar desde ali, arrástreo para orbitar, e o botón da casa volve á vista isométrica. Iso corresponde a {{ui:Automática}}, o inicio de {{ui:Indicador de esquina}} en [Axustes de CadCraft](topic:settings). Se está en {{ui:Cubo de vista}}, a pestana {{ui:Modelo}} tamén mostra un cubo, mirando desde arriba; ao premer calquera outra cara ábrese a pestana 3D mirando desde ali. Se está en {{ui:Icona de eixos}}, as dúas pestanas mostran en troca o marcador de eixos.

## Sólidos doutros programas

Un debuxo doutro programa pode conter sólidos 3D, rexións e corpos (3DSOLID, REGION, BODY: o outro programa garda a súa forma como datos ACIS). CadCraft mostra os que hai no espazo do modelo na pestana 3D, coa cor da súa capa e coas súas propias arestas, a primeira vez que abre a pestana; a liña de comandos indica entón cantos se debuxaron.

- Móstranse tal como están: non se poden seleccionar, mover nin cambiar. As capas desactivadas ou conxeladas ocúltanos.
- Gardar como DWG escribe cada un de volta sen cambios, en calquera versión de DWG, para que o outro programa os volva recibir. Os ficheiros DXF non os conservan: CadCraft escríbeos só en DWG e avísao ao gardar como DXF.
- Debúxanse: caras planas, e caras sobre cilindros, conos, esferas, toros e superficies spline sinxelas, con arestas rectas, redondas e spline. Unha cara sobre outro tipo de superficie, ou unha que CadCraft non pode dispor, non se adiviña: quédase fóra e figura na lista, por exemplo «Aínda sen debuxar (sólidos 3D): 2 caras en spline-surface (sweepsur), unha superficie aínda sen debuxar.»
- Os sólidos dentro de bloques aínda non se mostran; «Acerca deste ficheiro» cóntaos.

As caras curvas debúxanse como pezas planas pequenas, separadas uns 7.5°, así que un sólido curvo se ve un pouco facetado de cerca.

## Gardar e exportar

Ao gardar consérvase o modelo 3D, en DWG e en DXF. Cada cara entra como cara 3D na capa `CC-3D`, para que os outros programas mostren os sólidos, e CadCraft garda no ficheiro unha copia exacta propia, que lee de novo ao abrir o debuxo outra vez, coa vista 3D tal como estaba (cámara, proxección e estilo visual). As caras 3D feitas por outros programas entran na pestana 3D como caras soltas, agrupadas nun só grupo. Unha cara 3D dentro dun bloque entra unha vez por cada referencia a ese bloque no modelo, colocada e xirada como a referencia; no propio bloque, e nunha folla, a cara 3D debúxase plana, como o seu contorno.

{{ui:Exportar}} no grupo 3D descarga só os sólidos: GLB para visores e a web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) ou STL para impresión 3D, en milímetros ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} pregunta cal.

:::note
O modelo 3D é do tamaño real. Un debuxo sen unidades conta como milímetros, así que `1000` é un metro. Se despois cambia as unidades do debuxo (Propiedades, sen nada seleccionado), os sólidos escálanse con elas para que sigan no debuxo, e o historial di iso. Un {{key:Mod+Z}} desfai á vez o cambio de unidades e o escalado.
:::
