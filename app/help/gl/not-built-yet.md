---
title: Aínda non implementado
summary: O que esta versión da aplicación de debuxo CadCraft aínda non fai e o que facer hoxe no seu lugar.
keywords: falta, limitacións, ctb, stb, estilo de trazado, propiedades, ucs, anotativo, bloque dinámico, spline, plan de desenvolvemento, non admitido, gardar dwg, trama, estirar, matriz, unir, matchprop, partir, alongar, tipo de liña, grosor de liña, xref, nube, 3d, sólidos, booleanas, multiliña, máscara
from: 87e56521
---

CadCraft está en desenvolvemento. Esta páxina recolle o que a versión actual non fai, para que non teña que buscalo. Cada elemento indica o que facer hoxe no seu lugar.

## Ficheiros e gardado

| Non implementado | Alternativa actual |
|---|---|
| Un DWG de CadCraft comprobado no propio AutoCAD | Cada versión gardada é lida de novo por lectores DWG de tres outros programas e por CadCraft. Consulte [Que conserva e que cambia un DWG](topic:files#what-a-dwg-keeps-and-changes). |
| Gardar DXF posterior a 2000 | Gardar como DXF 2000, ou como DWG ata AutoCAD 2018. |
| Gardar sobre o ficheiro aberto no navegador | Cada gardado descarga unha copia nova; substitúa vostede o ficheiro antigo se o quere. En CadCraft Studio, {{key:Mod+S}} escribe no ficheiro que abriu. |
| Gardado na nube e sincronización entre ordenadores | CadCraft aínda non envía os seus gardados á nube: conserve os ficheiros DWG e DXF nas súas propias carpetas. En CadCraft Studio, [Historial](topic:history) mostra as versións na nube dun debuxo gardado desde outro lugar e as copias dos seus propios gardados neste ordenador. |
| Superposicións e edición dun debuxo ligado no seu lugar | Anexe o debuxo como ligazón e recárregueo despois de cambiar o outro debuxo. Unha ligazón segue sendo ligazón ao gardar como DWG, e {{cmd:XCLIP}} recórtaa. |
| Imaxes en DXF; máscaras que ocultan o que hai debaixo | DXF garda unha imaxe como o seu marco co nome do ficheiro; DWG gárdaa como imaxe: consulte [Imaxes nun debuxo](topic:pictures). Unha máscara móstrase como o seu marco. |
| Editar multiliñas con liñas de referencia curvas, con liñas de referencia en ambos lados do contido, ou con un bloque xirado ou escalado de xeito desigual | Debúxanse como os debuxou o outro programa e móvense como un conxunto. As multiliñas con liñas de referencia rectas cara a un só punto de chegada, e con texto ou bloque como contido, quedan editables ({{cmd:MLEADEREDIT}}). |
| Nas táboas doutros programas: unha cela que contén un bloque, formato de texto dentro dunha cela, bordos e cores por cela dunha táboa DXF, unha táboa dividida en columnas | A táboa ábrese como táboa editable ({{cmd:TABLEDIT}}) e móstrase como a debuxou o outro programa ata que a edite; despois CadCraft a redebuxa a partir das súas celas: texto simple, fórmulas como `=G3*H3` e `=Sum(I3:I9)`, aliñación e alturas de texto. Unha cela de bloque queda entón baleira. Unha táboa DWG sen tocar gárdase de novo cos datos de cela que traía. |
| Un obxecto táboa real nun DXF gardado | Un DWG garda unha táboa como unha táboa que outros programas poden editar. Un DXF gárdaa como o bloque que a debuxa, cun rexistro propio de CadCraft: CadCraft ábrea de novo como táboa; outros programas ven un bloque. Unha táboa espello ou escalada de xeito desigual gárdase así tamén nun DWG. |
| Copiar e pegar con outros programas | O portapapeis de CadCraft funciona entre debuxos e pestanas de CadCraft no mesmo navegador, non con outros programas. Garde como DWG ou DXF e ábraao alí. Consulte [Copiar, pegar e duplicar](topic:copy-paste). |

## Debuxo e edición

| Non implementado | Alternativa actual |
|---|---|
| Padróns de trama que CadCraft non ten, e degradados pintados exactamente como os pintan outros programas | As tramas abertas con padróns que CadCraft non ten móstranse cun ton. Un degradado ({{cmd:GRADIENT}}) píntase á maneira de CadCraft para cada tipo: parecido aos doutros programas no tipo, non punto por punto. Os DWG 2004 e posteriores consérvano como unha trama de degradado real; nun ficheiro DXF 2000 ou DWG 2000 só CadCraft o lee de novo, e outros programas ven un recheo sólido. Os padróns cárganse desde un ficheiro `.pat`, e unha trama pode ligarse ao seu contorno e seguilo: consulte [Tramas e áreas de recheo](topic:hatch). |
| Tipos de liña con formas ou texto, e grosores de liña nun DXF R12 gardado | As formas e o texto do tipo de liña dun ficheiro quedan fóra dos seus trazos; garde como DWG para conservar os grosores de liña. |
| Tramas con padrón nun DXF gardado | R12 non ten trama: gárdanse como os seus contornos. Garde como DWG para conservar o padrón. |
| Matrices feitas por outro programa ou que este pode editar; filas e niveis en matrices de traxectoria e polares; unha matriz que segue a súa curva de traxectoria | Unha matriz feita con ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; cambiada con {{cmd:ARRAYEDIT}}) gárdase como referencia de bloque cos números propios de CadCraft: outros programas a mostran, moven, trazan e descompoñen, pero non poden cambiar as súas cantidades; e unha matriz feita noutro programa ábrese aquí como unha simple referencia de bloque. Unha matriz de traxectoria conserva unha copia da súa traxectoria: editar a curva despois non move os elementos. |
| Vistas de folla recortadas nos intercambios con outros programas | Unha vista recortada con {{cmd:VPCLIP}} ou feita con {{cmd:MVIEW}} Polygonal ou Object gárdase co contorno propio de CadCraft: outros programas ábrena como o rectángulo que a rodea, e unha vista recortada noutro programa ábrese aquí como o seu rectángulo. DXF R12 conserva só o rectángulo. |
| {{cmd:STRETCH}} con polígono de cruzamento | Use unha ou máis xanelas de cruzamento. |
| {{cmd:PEDIT}} Editar vértice (un vértice de cada vez na liña de comandos) | Pegadores (grips), e o navegador de vértices en Propiedades (cada vértice, as súas larguras e o seu abultamento (bulge)). O resto de PEDIT está implementado: consulte [Splines e polilíneas](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} e {{cmd:JOIN}} sobre elipses e splines | {{cmd:EXPLODE}} unha spline (ou {{cmd:PEDIT}}) para obter unha polilínea que estes comandos admiten. |
| Acordo e chanfro entre un segmento en arco dunha polilínea e o segmento seguinte; acordo que une unha liña cunha polilínea | {{cmd:EXPLODE}} a polilínea e despois aplique o acordo ás pezas. O arco do acordo engádese como un obxecto propio. |
| Recortar e estender: a opción Proxectar (3D) e estender o extremo en arco dunha polilínea | Recorte no plano do debuxo; para un extremo en arco, descompoña a polilínea ou debuxe o arco de novo. |
| Obxectos OLE: inserilos, executalos ou editalos; mostrar os que un DWG sitúa onde o ficheiro os pon; imaxes metaficheiro | Consulte [Imaxes](topic:pictures#objects-from-other-programs-ole). Os obxectos dun DXF móstranse como o seu mapa de bits ou un marco con etiqueta; os dun DWG consérvanse, pero non se debuxan no seu sitio (OLELIST os lista e coloca unha copia dunha imaxe onde vostede indique). |
| Escribir códigos de formato (negra, fraccións apiladas, cores por palabra) no texto de parágrafo; tipos de letra distintos do de estilo Helvetica; columnas | O formato que chegou nun ficheiro consérvase, debúxase e gárdase (consulte Texto); o novo texto de parágrafo ten unha soa altura e unha soa cor. |
| Texto de parágrafo editado na súa rotación | O editor ábrese en horizontal; o texto conserva a súa rotación. |
| Multiliñas gardadas como obxectos multiliña nun DXF | Un DWG consérvaas como multiliñas, con todas as liñas de referencia e un bloque como contido; un DXF conserva o que debuxan (liñas, puntas de frecha e o texto ou o bloque). |
| Nas táboas ({{cmd:TABLE}}): texto que se ajusta dentro dunha cela, táboas que se parten en partes, o estilo de texto propio dun estilo de táboa e as cores por tipo de fila nun diálogo, unha ligazón de datos a un ficheiro de folla de cálculo (`.xlsx`) ou unha que lea o ficheiro por si mesma | O texto dunha cela só se parte onde vostede o parta ({{key:Alt+Enter}}); amplíe a columna. {{cmd:DATALINK}} lee un ficheiro `.csv`, e {{cmd:DATALINKUPDATE}} pídelle que volva escoller o ficheiro. {{cmd:DATAEXTRACTION}} e {{cmd:COUNTTABLE}} crean unha táboa que non segue o debuxo por si mesma: execútelos de novo (un reconto en vivo: {{cmd:BOMTABLE}}). |
| Definicións de atributos conservadas por separado nun ficheiro gardado (fóra dun bloque), atributos de varias liñas | Meta as definicións de atributos nun bloque antes de gardar: por separado gárdanse como texto que mostra a etiqueta. |
| Estados de capa (gardar e restaurar que capas están activas) | Use {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, ou acenda e apague as capas a man. |
| Selección por polígono de xanela e de cruzamento, e filtros de selección gardados | Valado (`F`), Xanela, Cruzamento, Retirar (`R`), {{cmd:QSELECT}} para unha regra. |

## O panel de Propiedades

| Non implementado | Alternativa actual |
|---|---|
| Debuxar as opcións de Axuste, e a posición horizontal do texto e o texto debaixo da liña nas cotas que non son lineais nin aliñadas | Consérvanse no obxecto, amósanse en Propiedades e gárdanse; CadCraft coloca o texto pola súa propia regra. |
| Materiais que outros programas ven | Un ficheiro gardado conserva o nome do material para CadCraft; outros programas mostran o material da capa. |
| Transparencia en ficheiros DWG 2000 e DXF | Outros programas mostran eses obxectos sólidos; CadCraft conserva a transparencia. Garde como DWG 2004 ou posterior para que a vexan todos. |
| Unha ligazón de trama feita noutro programa | CadCraft garda a súa propia ligazón en ficheiros DWG e DXF 2000; as ligazóns feitas noutros programas non se len. Use `HATCHEDIT` e Ligazón: consulte [Tramas e áreas de recheo](topic:hatch). |
| Coordenadas en Propiedades no UCS | Propiedades mostra coordenadas do mundo; a barra de estado e {{cmd:ID}} mostran as do UCS. Consulte [Xirar a vista e usar as súas propias coordenadas](topic:ucs-and-turned-view). |
| Unha posición separada para un obxecto anotativo en cada unha das súas escalas; ler os rexistros por escala que outros programas conservan | Un texto ou unha cota anotativa consérvase cunha lista de escalas ({{cmd:OBJECTSCALE}}) e cada vista mostrao co tamaño da súa escala, no mesmo lugar. A lista gárdase como datos propios de CadCraft: outro programa ve o obxecto na única escala para a que está dimensionado, e unha lista feita noutro programa non se lee. Consulte [Unidades, follas e escalas](topic:units-papers-scales#annotate-by-scale). |
| Cambiar as distancias, os ángulos ou as voltas dun bloque dinámico; bloques dinámicos que seguen dinámicos ao gardar noutra versión de DWG ou como DXF | Cambie o estado de visibilidade en Propiedades › {{ui:Personalizado}}; os seus outros valores móstranse aquí só de lectura. Segue sendo dinámico ao gardalo como DWG na versión na que chegou o debuxo. Consulte [Bloques dinámicos](topic:dynamic-blocks). |
| Tolerancia de axuste de splines, grao de spline 6 ou superior, splines 3D | Os puntos de axuste e de control, os graos de 1 a 5 e os pesos están implementados: consulte [Splines e polilíneas](topic:splines). A altura (Z) dunha spline non se conserva. |

## Axudas de precisión

| Non implementado | Alternativa actual |
|---|---|
| Seguimento desde puntos a través de comandos, e o diálogo de configuración de seguimento (ángulos polares relativos, ángulos extra) | {{cmd:POLARANG}} fixa o paso; capture de novo os puntos no seguinte comando. |
| Enganchar á cuadrícula | Escriba as coordenadas; a cuadrícula é só unha guía visual. |
| Opcións Arco e Lonxitude ao escoller os cantos dunha área, e MEASUREGEOM Volume | Debuxe o contorno con {{cmd:PLINE}} (con arcos incluídos) e despois {{cmd:AREA}} `O`. |
| Entrada dinámica para pegadores, e a súa lista de opcións (a frecha abaixo) | A liña de comandos amosa as opcións. |
| Ángulos en graos-minutos-segundos, grados centesimais ou rumbos de topógrafo | Escriba graos decimais: `30.5` para 30°30'. |
| Un diálogo de xestor de vistas; vistas con nome dunha folla que volven a esa folla | {{cmd:NAMEDVIEW}} lista e restaura as vistas. Un ficheiro gardado consérvaas, pero as vistas dunha folla volven na primeira folla. |

## Follas, cotas e trazado

| Non implementado | Alternativa actual |
|---|---|
| Campos para a escala dunha vista, un obxecto con nome como unha capa ou un bloque, unha ligazón de hipertexto, e campos de conxunto de follas alén do número e o nome da folla; campos escritos como obxectos de campo que outros programas actualizan | {{cmd:FIELD}} ten a data, o nome do ficheiro, o número, o nome e o contador da folla, as propiedades do debuxo ({{cmd:DWGPROPS}}), a área, a lonxitude e outras propiedades dun obxecto, e fórmulas, en texto, atributos e celas de táboa. Outro programa amosa un campo de CadCraft como o texto que lera por última vez; CadCraft lee os campos de data, nome de ficheiro, propiedade, folla e expresión doutro programa e deixa os outros tipos como texto. A escala dunha vista escríbese a man. |
| Gardar cal estilo de cota está activo; texto de cota arrastrado a un lugar libre | Un debuxo ábrese co estilo Standard activo. O texto queda sobre a liña de cota (DIMTEDIT Left / Right / Center). Consulte [Fixar tamaños de cota](topic:dimension-settings). |
| Cotas angulares de dúas liñas editables procedentes de ficheiros abertos que CadCraft non pode resolver | Móstranse como se debuxaron no ficheiro. As cotas de coordenadas, de lonxitude de arco e de radio quebrado ábrense como cotas que pode editar. |
| Comprobar o lector de CTB contra un ficheiro doutro programa (está construído, a partir da descrición publicada), estilos de trazado con nome (STB), tramado (dithering), números de plumilla, escala de grises desde un CTB e axuste adaptativo do tipo de liña nun estilo de trazado | Faga a táboa en {{ui:Táboas de estilo de trazado}} (cor, gris, tinta, grosor de liña, tipo de liña, final e unión de liña, e estilo de recheo por cor): consulte [Táboas de estilo de trazado](topic:plot-pdf#plot-style-tables). |
| Configuracións de páxina | Escolla papel, escala e estilo de trazado no diálogo {{ui:Trazar a PDF}}; unha folla conserva o seu estilo de trazado. |
| Hindi e outros sistemas de escritura que precisan de formación complexa en PDF, e ideogramas raros (escrituras europeas, cirílico, grego, hebreo, árabe, persa, urdu, tailandés, impresión en chinés, xaponés e coreano) | Imprímense como "?". |
| Texto en escritura árabe e en chinés, xaponés ou coreano no mesmo PDF trazado | Un trazado leva unha soa tipografía: unha das dúas escrituras imprímese como "?". |
| Marcas de dirección explícitas no texto (incrustacións, anulacións, aislantes) | Ignóranse: cada liña ordénase só polas súas letras. |
| Imaxes dentro dunha páxina PDF anexada, nun trazado | As liñas, recheos e texto da páxina trázanse. Unha páxina que é só unha imaxe entra con {{cmd:SCANATTACH}}, e as imaxes trázanse. Consulte [Subxacentes PDF](topic:pdf-underlay#plot-and-save). |
| Enviar un traballo a un láser desde CadCraft Studio (Studio non ten Web Serial) | Grave o G-code e envíeo co programa propio do seu láser, ou envíeo desde Chrome ou Edge. Consulte [Enviar un debuxo a un láser](topic:laser-cutting#send-from-the-browser). |

## Restricións e parámetros

| Non implementado | Alternativa actual |
|---|---|
| Restricións en follas, en bloques, en elipses, splines ou texto | Aplique restricións na pestana {{ui:Modelo}}, en liñas, polilíneas, círculos, arcos e puntos. |
| Suave (G2), e restrinxir directamente o abultamento en arco dunha polilínea | Tanxente e igual; un segmento en arco segue os seus dous extremos. |
| Restricións dimensionais de referencia (dirixidas), e `3Point` en {{cmd:DCANGULAR}} | Unha cota simple (DIMLINEAR …) amosa un valor sen dirixilo. |
| Restricións dimensionais de tamaño fixo no papel, e o seu trazado | Amósanse só na pantalla; engada cotas simples para o trazado. |
| Restricións conservadas ao longo de EXPLODE, BREAK, JOIN e outros comandos que crean obxectos novos, e en polilíneas recortadas | Aplíqueas de novo (AUTOCONSTRAIN axuda). {{cmd:MIRROR}} e {{cmd:TRIM}} de liñas, arcos e círculos consérvanas. |
| Táboas de deseño (configuracións) en CadCraft | Cambie os parámetros no panel. |
| Unha ida e volta probada con SolidWorks | Comprobe o esbozo que constrúe a macro antes de confiar nel. |

## 3D

| Non implementado | Alternativa actual |
|---|---|
| Acordos, chanfros, cascas e lofts; barridos por unha traxectoria que sobe (traxectorias 3D) | Extruír contornos con arcos, empurrar e tirar de caras, revolver e barrer por traxectorias planas. |
| Extruír noutra dirección que cara arriba | Debuxe a forma no chan e extrúaa cara arriba ou abaixo (con conicidade ou por unha traxectoria se quere); despois xire o sólido. |
| Elevación e grosor de obxectos 2D | O debuxo está no chan (altura 0) na pestana 3D. |
| Editar sólidos, rexións e corpos doutros programas; amosar os que están dentro de bloques; as súas caras en superficies barridas, en loft ou outras superficies de forma libre; mallas polyface e de polígonos | Os sólidos do espazo modelo móstranse na pestana 3D tal como están e gárdanse de novo sen cambios en DWG; o que non se debuxa lístase ao abrir a pestana 3D. Pida as mallas como caras 3D no espazo modelo. Consulte [Sólidos doutros programas](topic:3d-solids#solids-from-other-programs). |
| Copiar e pegar sólidos | Na pestana 3D, use {{cmd:COPY}}. O portapapeis só garda obxectos 2D. |
| Seccións, vistas que seguen os cambios posteriores nos sólidos, e sólidos sombreados nas follas trazadas | {{cmd:VIEWBASE}} coloca vistas planas (unha instantánea); execútello de novo despois de cambiar os sólidos. |
| Materiais, texturas e configuracións de iluminación | Os estilos visuais: sombreado, arestas, liña oculta, alambre e raios X. |
| Capas de mapa trazadas, nas vistas das follas e na pestana 3D; imaxes de ficheiros gardados co debuxo; a localización dun debuxo escrita para outros programas en DWG 2000–2007 e DXF R12 | As capas de mapa móstranse baixo o espazo modelo na pantalla; o sistema e a lista de capas gárdanse co debuxo: consulte [Capas de mapa baixo o debuxo](topic:map-layers). |
| Escaneos E57 de máis de 6 millóns de puntos ou 512 MB, ficheiros propios dos fabricantes de escáneres (RCP, RCS, FLS, LGS, TZF, ZFS), unha nube de puntos gardada co debuxo ou trazada, enganche a unha nube na pestana 3D, cortes verticais (sección) na pestana Modelo | Exporte os escaneos grandes ou dos fabricantes como LAS ou LAZ ([Formatos de nube de puntos](topic:point-cloud-formats)); anexe a nube cada vez que abra o debuxo; trace desde un corte en planta na pestana Modelo: consulte [Trazar liñas tal como construídas sobre unha nube de puntos](topic:point-clouds). |
| Rexistrar escaneos: atopar dianas (esferas, taboleiros de xadrez) nun escaneo por si mesmo, resolver todos os escaneos á vez (axuste de feixe), escala, rexistrar fronte a un modelo | Escolla puntos coincidentes ou escriba as coordenadas das dianas, e despois refine un escaneo de cada vez con ICP: consulte [Rexistrar varios escaneos nun só](topic:register-scans). |

## Rutinas e personalización

| Non implementado | Alternativa actual |
|---|---|
| LISP compilado ou protexido (.fas, .vlx), programas nativos (.arx, .crx, .dbx) e VBA (.dvb) | Cargue o código fonte .lsp dunha rutina con {{cmd:APPLOAD}}. |
| `grread` de LISP, reactores (`vlr-…`), funcións de curva (`vlax-curve-…`), diccionarios e datos estendidos, e as `acet-…` de Express Tools | O resto do lenguaxe funciona: consulte [Executar rutinas LISP](topic:run-lisp). A liña de comandos nomea unha función que falta cando unha rutina chega a ela. |
| Imaxes e diapositivas no diálogo dunha rutina | Amósanse como marcos en branco; o resto do diálogo funciona. |
| CraftScript (.craft), Lua e Python en CadCraft | Execútaos no espazo de traballo Script de PartCraft. |
| Listas de capas, cores e tipos de liña dentro dos estilos de menú de cinta | Use o panel {{ui:Capas}} e {{ui:Propiedades}}. |
| A Startup Suite e os alias gardados no seu ordenador ou sincronizados | Gárdanse neste navegador; a aplicación de escritorio e o servizo na nube gardaranos por vostede. En Studio, `acad.lsp` e `acaddoc.lsp` lense desde unha carpeta de soporte que escolla (Cargar aplicacións). |

## Axuda

A axuda describe esta versión. Cando se engade algo, sae desta páxina e pasa aos percorridos.
