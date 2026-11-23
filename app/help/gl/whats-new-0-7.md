---
title: Novidades na versión 0.7 (anteriores)
summary: Subxacentes PDF e importación de PDF, debuxos escaneados cun trazado automático, splines reais con SPLINE, SPLINEDIT e PEDIT, un xestor de estilos de cota, texto que conserva o seu formato, WBLOCK e as súas propias escalas, sólidos 3D doutros programas, rexistro de escaneos, un panel Láser, exportación USD, Historial e impresión en CadCraft Studio, un primeiro debuxo guiado, a barra de ferramentas en calquera lado ou en menos filas, e máis para asistentes de IA.
keywords: novidades 0.7, versión anterior, notas de versión, rexistro de cambios, cambios, 0.7, versión, novas funcións, pdf, pdfattach, pdfimport, subxacente, escaneo, scanattach, scantrace, trazado, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formato, wblock, scalelistedit, lista de escalas, acis, sólidos 3d, registerscans, rexistrar escaneos, icp, e57, las, láser, grbl, g-code, usd, usdout, historial, versións, comparar, imprimir, impresora, png, svg, estilo de impresión, tipo de liña, percorrido, folla de referencia, mapa de comandos, posición da barra de ferramentas, filas da barra, toolbardock, regen, regenall, panel táctil, desprazar, páxina de códigos, cirílico, coreano, chinés, xaponés, electricidade, rcd, p&id, pid, acad.lsp, acaddoc.lsp, cartafol de soporte, asistentes, mcp, unidades, portugués
from: d9a8ea79
---

Isto é o que cambiou na versión 0.7 de CadCraft, en comparación coa 0.6. Boa parte foi pedida en Discord. A lista está agrupada por área, coas cousas máis importantes primeiro.

## Novo

### PDF e debuxos escaneados

- **Poña unha páxina PDF por debaixo do debuxo.** {{cmd:PDFATTACH}} (`PDFATT`) coloca unha páxina no seu tamaño real ou nunha escala que escriba. Enganche ás súas liñas, esvaeza, pásea a monocromo ({{cmd:PDFADJUST}}), recórtea ({{cmd:PDFCLIP}}) e cambie as capas do propio PDF ({{cmd:PDFLAYERS}}). Imprímese como liñas, recheos e texto, e un DWG ou DXF 2000 consérvao como ligazón ao ficheiro. Ao abrir un PDF con {{ui:Abrir}} pregúntase se se engade ou se se importa. Vexa [Subxacentes PDF e importación de PDF](topic:pdf-underlay).
- **Convirta unha páxina PDF en obxectos de debuxo.** {{cmd:PDFIMPORT}} (`PDFIM`) crea liñas, polilíneas, círculos, arcos, tramas sólidas e texto en capas co nome do PDF, no tamaño real, nunha escala escrita, ou escalada a partir de dous puntos e unha distancia real, nun só paso de desfacer. Vexa [Importar unha páxina](topic:pdf-underlay#import-a-page).
- **Debuxos escaneados.** {{cmd:SCANATTACH}} trae un PNG, JPEG ou TIFF (unha páxina ou todas) ou unha páxina PDF que sexa unha imaxe. Despois pode escalalo a partir de dous puntos ({{cmd:SCANSCALE}}), aliñalo ({{cmd:SCANALIGN}}), endereitalo segundo as súas propias liñas longas ({{cmd:SCANDESKEW}}), pasalo a branco e negro e quitar as manchas ({{cmd:SCANCLEAN}}), recortalo e borrar partes del. Cada paso é un paso de desfacer e o ficheiro orixinal consérvase. Vexa [Debuxos escaneados e o trazado](topic:scanned-drawings).
- **Trace un escaneo en liñas e arcos.** {{cmd:SCANTRACE}} debuxa as liñas do escaneo como liñas e arcos nunha capa nova, SCAN-TRACE, cunha tolerancia que vostede fixa, e deixa o texto e as tramas como están. O informe di o que fixo e o que deixou, e non afirma que o resultado sexa correcto: compróbeo contra a folla. {{cmd:RASTERSNAP}} permite que os enganches a obxectos atopen as puntas, as esquinas e os cruces do escaneo. Non se envía nada a ningures e non se usa ningún modelo adestrado. Vexa [O trazado](topic:scanned-drawings#the-trace).

### Debuxo e edición

- **Splines reais.** {{cmd:SPLINE}} (`SPL`) debuxa unha curva por puntos ou a partir de puntos de control (grao 1 a 5), con tanxentes nos extremos; {{cmd:SPLINEDIT}} (`SPE`) move, engade e elimina puntos de axuste ou de control, define pesos, abre, pecha, inverte, ou convirte unha spline nunha polilínea. As splines dos ficheiros DWG e DXF ábrense como splines, e DWG e DXF 2000 gárdanas como splines. Vexa [Splines e polilíneas](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) pecha e abre polilíneas, une liñas e arcos a elas, define un ancho único, axusta unha curva polos vértices ou unha spline ao longo deles e desfai o axuste con Decurve, inverte, e edita varias ao mesmo tempo. Vexa [Editar unha polilínea](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) escribe un bloque, algúns obxectos ou o debuxo completo nun novo DWG ou DXF que só leva as capas, os estilos e os bloques que usan. Vexa [Escribir un bloque ou obxectos nun ficheiro propio](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN e REGENALL.** {{cmd:REGEN}} (`RE`) redebuxa a lapela na que está a partir do debuxo, e {{cmd:REGENALL}} (`REA`) fai o mesmo con todas as lapelas, paneis e debuxos abertos. Vexa [REGEN e REGENALL](topic:commands#regen-and-regenall).

### Texto e cotas

- **O texto conserva o seu formato.** O texto de parágrafo doutros programas conserva as cores por palabra, a negriña e a cursiva, o subliñado, as fraccións apiladas e as alturas: debúxase na pantalla e nos PDF, consérvase cando edita as palabras, e gárdase de novo. Vexa [Formato dentro do texto de parágrafo doutros programas](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Un xestor de estilos de cota.** {{cmd:DIMSTYLE}} (`D`) crea, cambia, compara e aplica estilos de cota con nome; cambiar un estilo cambia todas as cotas que o usan. {{cmd:DIMEDIT}} (`DED`) repón o texto, escribe texto novo, xira ou inclina as liñas de extensión; {{cmd:DIMTEDIT}} move o texto á esquerda, á dereita ou ao centro. Vexa [Estilos de cota con nome](topic:dimension-settings#named-dimension-styles).
- **As súas propias escalas.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) engade escalas como 1:75 ás listas de escalas da ventá e da impresión; gárdanse no debuxo (DWG e DXF 2000), e un debuxo doutro programa trae a súa propia lista. Vexa [Escalas](topic:units-papers-scales#scales).
- **Texto noutros alfabetos.** Os ficheiros DXF gardados en páxinas de códigos cirílicas, coreanas, chinesas, xaponesas ou vietnamitas abren agora co seu texto, e o texto chinés, xaponés e coreano imprímese nos PDF (a impresión descarga unha fonte máis grande a primeira vez que a necesita). Vexa [Fonte](topic:text#font).

### Impresión

- **Máis nas táboas de estilo de impresión.** Para cada cor, unha táboa pode definir agora tamén un tipo de liña, o final e a unión da liña, e un estilo de recheo que imprime os recheos sólidos como liñas de trama; a táboa ten a súa propia lista de grosores e unha escala de tipo de liña. Vexa [Táboas de estilo de impresión](topic:plot-pdf#plot-style-tables).
- **Imprimir, e ficheiros PNG e SVG.** O diálogo de impresión ten {{ui:Imprimir…}}, {{ui:Descargar PNG}} (300 ppp) e {{ui:Descargar SVG}}. En CadCraft Studio lista as impresoras do ordenador, o seu papel e o número de copias. Vexa [Imprimir](topic:plot-pdf#print) e [Ficheiros de imaxe e SVG](topic:plot-pdf#picture-and-svg-files).

### 3D e nubes de puntos

- **Sólidos 3D doutros programas.** Os sólidos, as rexións e os corpos do espazo de modelo dun debuxo móstranse na lapela 3D, só de lectura, e gardar como DWG escríbeos de volta sen cambios. As caras de superficies que CadCraft aínda non debuxa listánse, non se adiviñan. Vexa [Sólidos doutros programas](topic:3d-solids#solids-from-other-programs).
- **Rexistrar varios escaneos.** {{cmd:REGISTERSCANS}} (`REGSCAN`) coloca escaneos tomados desde posicións distintas nun mesmo marco, por pares de puntos ou coordenadas de destino escritas, refínaos con ICP, garda o rexistro como un pequeno ficheiro de proxecto e escribe a nube rexistrada como un só ficheiro LAS ou E57. Vexa [Rexistrar varios escaneos nun só](topic:register-scans).
- **Exportación USD.** {{cmd:USDOUT}}, ou {{cmd:EXPORT3D}} › {{ui:USD}}, escribe os sólidos da lapela 3D como `.usda`, `.usdc` ou `.usdz`. Vexa [Exportar o modelo 3D como USD](topic:usd).
- **Cálculos na lapela 3D.** Onde as ferramentas da lapela 3D piden unha distancia, pode escribir un cálculo, como na liña de comandos. Vexa [Aritmética nun valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Fabricación

- **Envíe un debuxo a un láser.** {{cmd:LASER}}, ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Láser…}}, abre un panel sobre o debuxo: cada capa corta, marca, grava liñas, enche formas, grava unha imaxe ou non se envía, cos seus valores de potencia, velocidade e pasadas. A vista previa segue as súas edicións, {{ui:Gardar G-code…}} escribe G-code de modo láser GRBL, e en Chrome ou Edge o panel pode enmarcar o traballo e envialo por USB. Os axustes gárdanse no debuxo (DWG e DXF). Vexa [Enviar un debuxo a un láser](topic:laser-cutting).
- **Símbolos de instalacións de edificios no complemento Electricidade.** Tomas de datos, teléfono e TV, interruptores de chave e de tempo, un termostato, sinal de saída, detectores, punto de chamada e sirena, un ventilador, un quentador de auga, unha cociña, un punto de carga de vehículos eléctricos, un contador de enerxía e un subcadro, e símbolos RCD e RCBO. Un circuíto pode levar un RCD, o cadro do cadro de distribución ten unha columna RCD, e as comprobacións indican os circuítos de tomas sen RCD de 30 mA ou menos. É un recordatorio de planificación, non unha comprobación de normativa.
- **Un complemento P&ID.** P&ID debuxa diagramas de procesos: símbolos con puntos de conexión, liñas de proceso e de sinal, etiquetas, números de liña, listas de liñas, equipos, instrumentos e válvulas (CSV ou un libro) e comprobacións. Vén con CadCraft e está desactivado ata que o active en {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Complementos}}. É unha axuda de debuxo, non unha aprobación de enxeñaría, e as súas palabras están por agora só en inglés.

### Primeiros pasos e pantalla

- **Un primeiro debuxo guiado.** {{cmd:TOUR}} (ou {{ui:Faga o percorrido}} na tarxeta de inicio) guíao por seis pasos no debuxo real: unha liña, un círculo, un movemento, un recorte, un borrado e unha cota. Comeza sen axuda a primeira vez que CadCraft se abre sen nada. Vexa [Prefire ser guiado?](topic:getting-started#prefer-to-be-guided).
- **Folla de referencia e mapa de comandos.** A [folla de referencia](topic:cheat-sheet) ten os 40 comandos máis habituais nunha páxina, tamén como PDF para imprimir, e o [mapa de comandos](topic:command-map) lista os comandos cos seus nomes curtos, de A a Z.
- **A barra de ferramentas en calquera lado.** {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Posición da barra de ferramentas}}: arriba (como antes), abaixo, á esquerda ou á dereita, ou escriba {{cmd:TOOLBARDOCK}}. Vexa [Posición da barra de ferramentas](topic:settings#toolbar-position).
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Filas da barra de ferramentas}}: axustar ao espazo, 2 filas ou 1 fila, para a barra de CadCraft e para os estilos Debuxo clásico e Cinta. {{key:Shift+Ctrl+F1}} percorre as filas, {{key:Ctrl+F1}} percorre o que mostran os botóns, e {{cmd:TOOLBARROWS}} e {{cmd:TOOLBAR}} as definen. A pista de inicio ten un botón para pechala. Grazas a GJoe2, que enviou isto como solicitude de integración. Vexa [Filas da barra de ferramentas](topic:settings#toolbar-rows).

### En CadCraft Studio

- **Historial.** {{cmd:HISTORY}} (`HIST`), ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Historial…}}: as copias que Studio garda cando abre e garda un debuxo, e as versións na nube do debuxo cando o abriu desde a nube. Abra ou restaure unha, ou compare dúas, co engadido, o eliminado e o cambiado amosados en cor. Vexa [Historial](topic:history).
- **acad.lsp e acaddoc.lsp.** Escolla un cartafol de soporte en {{cmd:APPLOAD}}: eses dous ficheiros cárganse cando arranca CadCraft (acaddoc.lsp de novo para cada nova lapela de debuxo), e `S::STARTUP` executa despois deles. Vexa [Cargar aplicacións](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **O diálogo de impresión na súa propia xanela.** Un botón na barra de título move o diálogo a unha xanela que pode poñer noutro monitor. Vexa [Mover un diálogo](common:arrange-panels#move-a-dialog).

### Para asistentes de IA

- **Ficheiros polo nome, en cartafoles que vostede escolla.** En CadCraft Studio un asistente pode abrir, gardar e imprimir ficheiros polo nome, e dar a un comando o ficheiro que pide (INSERT desde un ficheiro, a exportación de COUNT, SAVEAS, PLOT), pero só dentro dos cartafoles que engada en {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Asistentes}} › {{ui:Cartafoles que pode usar}}. Vexa [Permitir que use ficheiros de cartafoles que vostede escolla](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Menos chamadas.** Un asistente pode escribir unha liña de comando completa dunha vez, manter un comando aberto entre as súas chamadas, contar obxectos por tipo e capa sen listalos, e colocar un bloque cos seus valores de atributo nun só paso.
- **Sen xanela.** A liña de comandos `cadcraft` escribe impresións SVG e converte, imprime, comproba ou describe moitos ficheiros de una vez. O paquete MCP aínda non está publicado. Vexa [Traballar con ficheiros sen abrir CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Cambiado

- **Un panel táctil despraza.** Mova dous dedos sobre un panel táctil e a vista 2D séguelos; o pinzamento e a roda do rato fan zoom. Vexa [Rato, panel táctil e pantalla táctil](topic:mouse-trackpad-touch).
- **Consérvanse os obxectos OLE.** Os obxectos incrustados dun DXF móstranse como a súa imaxe ou como un marco con etiqueta, e gárdanse de novo ao gardar en DXF 2000. Os dun DWG consérvanse e escríbense de volta ao gardar como DWG, pero aínda non se mostran. Antes perdíanse ao gardar. Vexa [Obxectos doutros programas (OLE)](topic:pictures#objects-from-other-programs-ole).
- **As unidades dun debuxo novo** seguen a unidade que destaque en {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Unidades}}.

## Corrixido

- As disposicións que se abrían baleiras, ou que perdían unha ventá e mostraban todo o modelo no seu lugar, abren agora coas súas ventás reais. Unha disposición sen ligazón ao seu contido consérvase, e o informe de apertura di iso.
- Os ficheiros DXF en páxinas de códigos antigas mostraban texto cirílico e coreano desordenado. Agora léense ben.
- O texto de parágrafo doutros programas perdía o seu formato ao abrirse e gardábase plano.

## En todas as aplicacións

- **Unidades.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Unidades}} ten unha lista para lonxitude, superficie, volume, ángulo e pendente, cos tamaños exactos que dan as definicións das unidades (o pé de topógrafo dos EUA é unha unidade propia). Desactive as unidades que nunca usa e saen das listas; destaque unha e o traballo novo comeza nela. Un ficheiro conserva sempre a súa propia unidade. En CadCraft, o destaque fixa as unidades dun debuxo novo cando é unha unidade que un debuxo pode levar; a caixa {{ui:Unidades}} de CadCraft aínda non segue os interruptores. Cando un debuxo xa ten unidades, unha lonxitude que escriba pode levar a marca de calquera unidade. Vexa [Unidades, valores escritos e listas de unidades](common:unit-lists).
- **Disposición máis densa e paneis que se recollen.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Densidade da disposición}} › {{ui:Compacta}} cabe máis na pantalla (as pantallas táctiles e os teléfonos conservan os botóns grandes). Cada panel lateral ten unha barra de título fina: arrástrea para acoplar ou flotar o panel, solte sobre a barra doutro panel para compartir un marco como lapelas, fíxeo para que se retire cara ao bordo, ou ocúltao e fágao volver desde o bordo. Vexa [Organizar os paneis](common:arrange-panels#make-the-layout-denser).
- **Os diálogos móvense.** Arrastre un diálogo pola barra de título para sacalo do debuxo; volve ao lugar onde o deixou. Prema dúas veces a barra de título para centralo de novo. Vexa [Mover un diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para asistentes de IA.** Dez peticións prácticas para o seu propio asistente (ordenar un debuxo, imprimir un conxunto, comprobar debuxos, facer preguntas a un modelo, totalizar unha medición, probar unha variante dunha peza…), cada unha coas ferramentas que chama e os permisos que precisa, e cada unha repetida polas nosas probas. As aplicacións non conteñen IA. Vexa [Receitas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo en {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Idioma}}. Ese, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** teñen agora todas as palabras das aplicacións, como borradores aínda sen revisión dun falante nativo. As páxinas de axuda están en inglés.
- **CadCraft Studio** indica por que fallou a comprobación de actualizacións (non hai ficheiro para o seu sistema aínda, non hai rede, unha sinatura incorrecta) en vez de só «Feito», e deixa de volver mostrar a tarxeta de Novidades que pechou ata que haxa unha versión máis nova.

## Aínda non nesta versión

- **0.7 non está asinado dixitalmente.** A sinatura e o paquete da Microsoft Store pasaron á 0.8, porque a validación do certificado aínda non chegou. Comprobe o SHA-256 xunto a cada ficheiro en getcadcraft.com/download. En Windows, se SmartScreen detén o instalador, escolla {{ui:Máis información}}, e logo {{ui:Executar igualmente}}. En Mac, a primeira vez, faga clic dereito en CadCraft Studio e escolla {{ui:Abrir}}. CadCraft Studio aínda non está nunha tenda de aplicacións, e aínda non hai compilación para iPad ou iPhone.
- Os ángulos e as listas de pendentes de {{ui:Unidades}} gárdanse, pero ningunha caixa os le aínda.
- Os obxectos OLE dun DWG consérvanse pero non se mostran, e as imaxes metafile dentro de obxectos OLE non se debuxan.
- A lectura de táboas de estilo de impresión (ficheiros CTB) doutros programas agarda por un ficheiro de mostra.
- O texto asiático antigo escrito como códigos `\M+` lense, pero aínda non se comprobou con un ficheiro doutro programa.
- Subxacentes PDF: as imaxes dentro da páxina amósanse na pantalla pero non se imprimen, a impresión dun asistente deixa fóra os subxacentes, e aínda non se comprobou como outros programas len o recorte e a escala gardados.
- Historial: CadCraft aínda non envía os seus gardados á nube, así que as versións na nube son as gardadas desde outros dispositivos e desde a web. O historial só está en CadCraft Studio.
- Aínda non se comprobou se Studio conserva o cartafol de soporte de acad.lsp despois de reiniciar; se o pide, escolla o cartafol de novo en APPLOAD.
- O panel Láser non se probou nunha máquina láser real: probe cada axuste en material de desbotar. CadCraft Studio non ten Web Serial, así que en Studio o panel só garda G-code.
- O rexistro de escaneos probouse con escaneos inventados, pero aínda non cun conxunto dun escáner real.
- O desprazamento con dous dedos probouse con eventos simulados de panel táctil, pero aínda non nun panel táctil real.
- {{cmd:PEDIT}} non ten a opción Editar vértice (use as pinzas ou as propiedades). Desfasamento, recorte, extensión, redondeo, rotura e unión aínda non admiten splines; a altura (Z) dunha spline non se conserva.
- O texto de parágrafo novo aínda non pode levar códigos de formato, e as impresións SVG mostran o texto con formato nunha soa cor.
- O WBLOCK de Debuxo completo escribe só o modelo, non as follas. O estilo de cota actual non se garda no ficheiro: un debuxo ábrese con Standard como actual.
- Os estilos de menú de cinta aínda non teñen listas de capas, cores ou tipos de liña: use o panel {{ui:Capas}} e {{ui:Propiedades}}.
- As nubes de puntos aínda non se gardan no debuxo nin se imprimen, e os ficheiros E57 ábrense ata 6 millóns de puntos e 512 MB.
- Os DWG gardados por CadCraft aínda non se comprobaron no propio AutoCAD.

Todo o demais está en [Non construído aínda](topic:not-built-yet).
