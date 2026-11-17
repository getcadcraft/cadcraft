---
title: Mapa de comandos: que escribir
summary: Todos os comandos de CadCraft cos seus nomes curtos, de A a Z, xerados desde o propio programa, e os hábitos doutros programas de debuxo que difiren.
keywords: mapa de comandos, comandos, alias, nomes curtos, procedente de, lista de comandos, que escribir, eliminar, recortar, equivalente, diferenzas
from: 3bdfd3e6
---

CadCraft toma os nomes de comandos e os nomes curtos que a xente coñece doutros programas de debuxo: escriba `L` para unha liña, `TR` para recortar, `E` para eliminar. Así, non hai unha táboa de tradución que aprender para a maioría deles: o nome que vostede coñece é o mesmo aquí. A lista de abaixo contén todos os comandos de CadCraft, xerada desde o propio programa. {{key:Enter}} repite o último; `HELP` na liña de comandos imprime a mesma lista.

Os poucos que non son iguais, ou que non están construídos:

- **Gardar** descarga unha copia no navegador ({{cmd:SAVE}}, {{cmd:SAVEAS}}); en CadCraft Studio escribe o ficheiro. Consulte [Procedente doutro software de debuxo](topic:coming-from).
- **PLOT** xera un PDF (tamén PNG e SVG), cunha táboa de estilos de trazado; non hai xestor de configuración de páxina.
- **DIMSTYLE** e **PEDIT** están construídos; **PEDIT** non ten a opción de editar vértices (iso fanse cos agarradoiros).
- **TABLE** non está construído; {{cmd:XREF}}, {{cmd:SPLINE}} e {{cmd:WBLOCK}} si.
- Os comandos propios dunha rutina (AutoLISP `C:NAME`) aparecen despois de cargala con {{cmd:APPLOAD}}; non se listan aquí.

## Todos os comandos (398)

| Comando | Nomes curtos | Que fai |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbitar a vista 3D co botón esquerdo |
| `ACCESS` | `AX` | Activar ou desactivar o debuxo sen vista: resultados ditos a través do lector de pantalla, un cursor de teclado no debuxo, sons de enganche e comandos falados. |
| `ALIASEDIT` |  | Editar os alias de comandos nun só ficheiro de texto (o formato familiar L, *LINE) |
| `ALIGN` | `AL` | Mover e xirar obxectos para que os puntos de orixe caian sobre os puntos de destino (un, dous ou tres pares), e escalalos se se quere |
| `ALIGNPANEL` | `ALP` | Abrir o panel Aliñar e distribuír |
| `ALIGNTO` |  | Aliñar os bordos esquerdo, centro, dereito, superior, medio ou inferior dos obxectos seleccionados, sobre a selección, o primeiro ou o último obxecto escollido, ou un punto |
| `ANNOALLVISIBLE` | `ANNOALL` | Mostrar os obxectos anotativos en todas as escalas, ou só onde a escala da fenestra (ou do debuxo) estea na súa lista |
| `ANNOSCALE` | `CANNOSCALE` | Definir a escala de anotación do debuxo: o texto e as cotas anotativas redimensiónanse para imprimirse co mesmo tamaño |
| `APPLOAD` | `AP` | Cargar aplicacións: rutinas LISP (.lsp) e os seus ficheiros de diálogo (.dcl); o Xestor de inicio (AP) |
| `ARC` | `A` | Arco: 3 puntos, Inicio (S)/Centro (C)/Fin (E), Inicio (S)/Centro (C)/Ángulo (A), Inicio (S)/Centro (C)/Lonxitude (L), Inicio (S)/Fin (E)/Ángulo (A), Inicio (S)/Fin (E)/Dirección (D), Inicio (S)/Fin (E)/Raio, Centro (C)/Inicio (S)/Fin (E), Centro (C)/Inicio (S)/Ángulo (A), Centro (C)/Inicio (S)/Lonxitude (L), Continuar |
| `AREA` | `AA` | Superficie e perímetro por puntos ou dun obxecto; Engadir e Restar manteñen un total acumulado (AA) |
| `ARRAY` | `AR` | Copias en filas e columnas, ou en círculo arredor dun centro (AR) |
| `ARRAYASSOCIATIVITY` |  | Define se os comandos ARRAY fan matrices que seguen editables (1) ou copias simples (0) |
| `ARRAYCLOSE` |  | Finaliza a edición dos obxectos de orixe dunha matriz |
| `ARRAYEDIT` |  | Cambia unha matriz feita coa opción Asociativa: números, espazamento, obxectos de orixe, un elemento |
| `ARRAYPATH` |  | Copias de obxectos ao longo dunha liña, arco, polilínea ou outra curva |
| `ARRAYPOLAR` |  | Copias en círculo arredor dun punto central |
| `ARRAYRECT` |  | Copias en filas e columnas |
| `ASBUILT` | `ASB` | ASBUILT le os puntos como construídos que medeu unha cuadrilla (CSV / TXT, tal como os escribe EXPORTPOINTS) e compáraos cos puntos do debuxo: dentro ou fóra da tolerancia, sen medir, extra. Márcaos na capa AS-BUILT e descarga un informe CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definir un atributo (unha etiqueta que un bloque pide que se lle dea un valor) para pór nun bloque (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Editar os valores de atributos dunha referencia de bloque na liña de comandos, un tras outro (Enter mantén o valor) |
| `ATTSYNC` |  | Poñer as referencias dun bloque en liña coas súas definicións de atributos: as novas engádense cos seus valores por defecto, as retiradas elimínanse, posicións e textos reinícianse; os valores consérvanse |
| `AUDIT` |  | Comproba o debuxo aberto por danos: números que non son finitos, obxectos sen tamaño, capas, bloques, estilos e tipos de liña que faltan, bloques que se conteñen a si mesmos, identificadores compartidos, cotas e tramas rotas. Lista o que atopa por tipo e pregunta antes de arranxar; o arranxo é un só paso de desfacer. |
| `AUNITS` | `ANGUNITS` | Como se amosan e escriben os ángulos: graos decimais, graos-minutos-segundos ou rumbos como N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autocompletado de debuxo activado ou desactivado, ou lista o que os patróns do debuxo suxiren agora. |
| `AUTOCONSTRAIN` |  | Engadir restricións de coincidencia, horizontais e verticais onde a xeometría xa está próxima |
| `AUTODIM` | `ADIM` | Cotar por regras: tamaño total, cadeas ao longo dos lados, aberturas, diámetros de furos e espazamento de cuadrícula, sen repetir o que xa está cotado. |
| `AUTOSHEET` | `ASH` | Dispón as follas por si mesmo: escolle papel e escalas estándar e coloca cada vista cunha lenda e un cadro de rótulo. |
| `BATTMAN` |  | Xestor de atributos de bloque: orde, etiquetas, indicacións, valores por defecto e modos dos atributos dun bloque, e despois actualízanse as súas referencias |
| `BCLOSE` |  | Pechar o editor de bloques: gardar o bloque ou descartar os cambios |
| `BCONVERT` |  | BCONVERT atopa xeometría que se repite e convértea en referencias de bloque. Seleccione os obxectos que se repiten: búscanse todos os outros conxuntos de obxectos no espazo aberto que teñen a mesma xeometría, movidos e xirados en calquera ángulo, e, con Espello ou Escalado activados, tamén imaxes espelladas e copias a outro tamaño. Dé ao novo bloque un nome e un punto base; a selección e cada copia convértense en referencias a el, cada unha coa súa propia rotación e escala. Ou escolla Bloque e nomee un bloque existente para atopar copias soltas dos seus obxectos. Unha copia debe ter a mesma capa, cor, tipo de liña e grosor, a menos que Propiedades estea en Ignorar. Os obxectos en capas bloqueadas quedan como están. Un só paso de desfacer. |
| `BEDIT` | `BE` | Editor de bloques: editar os obxectos e atributos dun bloque; BCLOSE garda (BE) |
| `BLEND` |  | BLEND: unha spline entre os extremos de dúas curvas abertas, escollidas preto dos extremos para unilas. CONtinuity: Tanxente segue as dúas direccións, Suave segue tamén como se curvan. |
| `BLOCK` | `B`, `BMAKE` | Crear un bloque a partir de obxectos (convértense nunha soa referencia) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: cada referencia a un bloque pasa a ser unha referencia a outro, no mesmo sitio e coa mesma escala e rotación. Consérvanse os valores dos atributos que ambos os bloques teñen. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE amosa o panel Bloques co cursor no seu filtro. O panel mostra unha imaxe de cada bloque (primeiro os colocados máis recentemente), como lista ou cuadrícula; prema unha imaxe ou arrástrea ao debuxo para colocar o bloque con INSERT. En Bibliotecas, engada un ficheiro DWG ou DXF propio: os seus bloques aparecen listados con imaxes e cópianse a este debuxo cando coloca un. En CadCraft Studio tamén se pode engadir un cartafol de debuxos, e os ficheiros e cartafoles quedan recordados. |
| `BOMEDIT` | `BOMCOLUMNS` | As columnas, agrupación, ordenación, título, totais e notas dunha táboa de lista de materiais |
| `BOMEXPORT` |  | Gardar unha táboa de lista de materiais como ficheiro .csv |
| `BOMTABLE` | `BOM` | Unha táboa de lista de materiais en directo dunha zona, ou de todo o debuxo |
| `BOMUPDATE` |  | Actualizar agora todas as táboas de lista de materiais, incluídas as conxeladas |
| `BOMZONE` | `BZONE` | Unha área con nome do debuxo para unha lista de materiais: dúas esquinas, un polígono, ou o contorno dun obxecto pechado |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): escolla un punto dentro dunha área pechada e obteña unha polilínea pechada ao seu redor. Os arcos seguen sendo arcos. Illas delinea tamén as áreas que contén. |
| `BOX` |  | Unha caixa: dúas esquinas e unha altura (3D) |
| `BPARAMETER` | `BPARAM` | Aínda non construído: engadir un parámetro (como Visibilidade) a un bloque. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parámetros de bloque: parámetros con nome e fórmulas, e varios parámetros de visibilidade nun mesmo bloque. Funciona no editor de bloques (asignar os obxectos seleccionados a un estado) e nunha referencia seleccionada (os seus propios valores e estados). |
| `BREAK` | `BR` | Partir unha liña, arco, círculo ou polilínea entre dous puntos (BR) |
| `BREAKATPOINT` |  | Dividir unha liña, arco ou polilínea en dous nun punto |
| `BREAKLINE` |  | Debuxar unha liña cun símbolo de rotura; lémbranse o seu tamaño e a prolongación máis aló dos extremos. |
| `BREPLACE` |  | BREPLACE troca un bloque por outro. Seleccionados: escolla referencias de bloque e nomee o bloque a usar en seu lugar. Todos: nomee un bloque e o seu substituto, e cada referencia en cada espazo e dentro doutros bloques cambia. Unha referencia conserva o seu sitio, escala, rotación e capa, e os valores dos atributos que ambos os bloques teñen; os valores para os que o novo bloque non ten sitio elimínanse e nómanse. |
| `BSEARCH` |  | BSEARCH atopa bloques. Nome: parte dun nome de bloque, ou un patrón con * e ?. Atributo: un valor (ou TAG=valor) que teñen os atributos dunha referencia. Xeometría: seleccione obxectos ou unha referencia de bloque, e listanse os bloques cuxa forma se parece en polo menos un 85 %, do máis parecido ao menos; o tamaño, a rotación e o espello non contan. As referencias atopadas no espazo aberto quedan seleccionadas, listas para o seguinte comando. |
| `BURST` |  | Descompoñer referencias de bloque e conservar o que din os seus atributos: cada valor convértese en texto na capa do atributo. |
| `BVHIDE` | `BVH` | No editor de bloques: ocultar obxectos no estado de visibilidade actual. |
| `BVSHOW` | `BVSH` | No editor de bloques: mostrar obxectos que o estado de visibilidade actual oculta (amósanse esvaecidos para escoller). |
| `BVSTATE` | `BVS` | No editor de bloques, nun bloque con estados de visibilidade: cambiar a un estado, ou engadir, renomear ou eliminar un. |
| `CAL` |  | Calcular unha lonxitude ou número: + − * / e paréntese, como os escriba en calquera lugar |
| `CENTERLINE` | `CL` | Liña de centro entre dúas liñas: a medio camiño entre elas, ou pola bisectriz cando se cortan (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Marca de centro: unha cruz no centro dun círculo ou arco, con liñas de centro que sobresaen un pouco (CM) |
| `CHAMFER` | `CHA` | Biselar a esquina entre dúas liñas (D dúas distancias (D), A lonxitude e ángulo (A), P cada esquina dunha polilínea (P)) |
| `CHSPACE` |  | CHSPACE: mover obxectos entre unha folla e o modelo a través dunha fenestra. Escálanse e xíranse para que se vexan igual desde o outro lado. Nunha folla vanse ao modelo; mentres traballa a través dunha fenestra (MSPACE) veñen á folla. |
| `CIRCLE` | `C` | Centro e raio, diámetro, 2 ou 3 puntos |
| `CLASS` |  | Pór os obxectos seleccionados nunha clase, ou, sen selección, definir a clase activa (? lístaas) |
| `CLASSES` | `CLS` | O panel Clases: as clases ordenan obxectos entre capas; amósaas, ocúltaas e dáelles estilo, e anúlaas por fenestra (CLS) |
| `COMMANDLINE` | `CMDLINE` | Acoplar ou flotar a liña de comandos, deixala nunha soa liña, definir as súas liñas de historial, ou abrir o historial (F2) |
| `COMPARESETTINGS` | `CMPSET` | Comparar estilos de cota, estilos de texto, capas, follas ou unidades: dous neste debuxo, ou este debuxo contra outro aberto, e copiar un valor de un a outro. |
| `CONSTRAINTBAR` | `CBAR` | Mostrar ou ocultar as barras de restricións (Mostrar todo / Ocultar todo, ou por obxecto) |
| `COPY` | `CO`, `CP` | Copiar obxectos, tantas veces como prema |
| `COPYBASE` |  | Copiar obxectos ao portapapeis cun punto base que vostede escolla |
| `COPYCLIP` |  | Copiar obxectos ao portapapeis (Ctrl+C); PASTECLIP colócaos |
| `COUNT` | `BCOUNT` | Contar referencias de bloque: escolla unha para seleccionar e contar cada referencia do seu bloque |
| `COUNTTABLE` |  | Colocar unha táboa de contadores de bloques |
| `CREDITS` |  | Pon os créditos da Biblioteca no debuxo como unha táboa. Volva executalo para actualizar a táboa cos elementos que hai agora no debuxo. |
| `CURSORSIZE` |  | Tamaño da cruz: 100 atravésaa de bordo a bordo do debuxo (Configuración › Cursor › Pantalla completa) |
| `CUTCLIP` |  | Cortar obxectos ao portapapeis (Ctrl+X): copiar e despois borrar |
| `CYLINDER` | `CYL` | Un cilindro: centro, raio e altura (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Listar bloques, os seus atributos e propiedades dos obxectos como táboa no debuxo ou nun ficheiro CSV |
| `DATALINK` | `DL` | Unha táboa a partir dun ficheiro CSV que recorda o ficheiro, para poder lelo de novo |
| `DATALINKUPDATE` | `DLU` | Ler de novo o ficheiro dunha ligazón de datos e encher de novo as súas táboas |
| `DCALIGNED` | `DCALI` | Restrición dimensional: distancia real entre puntos, un punto e unha liña, ou dúas liñas |
| `DCANGULAR` | `DCANG` | Restrición dimensional: ángulo entre dúas liñas, ou dun arco |
| `DCCONVERT` |  | Converter as cotas debuxadas sobre xeometría restrinxible en restricións dimensionais |
| `DCDIAMETER` | `DCDIA` | Restrición dimensional: diámetro dun círculo ou arco |
| `DCDISPLAY` |  | Mostrar ou ocultar as restricións dimensionais no debuxo |
| `DCHORIZONTAL` | `DCHOR` | Restrición dimensional: distancia horizontal |
| `DCLINEAR` | `DCLIN` | Restrición dimensional: distancia horizontal ou vertical, desde onde a coloque |
| `DCRADIUS` | `DCRAD` | Restrición dimensional: raio dun círculo ou arco |
| `DCVERTICAL` | `DCVER` | Restrición dimensional: distancia vertical |
| `DELBLOCKS` |  | Eliminar bloques: cada referencia (tamén as aniñadas, en cada folla) e as definicións |
| `DELCONSTRAINT` | `DELCON` | Retirar cada restrición (xeométrica e dimensional) dos obxectos seleccionados |
| `DELOPENING` |  | Retirar unha porta ou xanela dun muro. |
| `DESCRIBE` | `DESC` | Dicir o que contén o debuxo: cantos obxectos, de que tipo, de que tamaño, o que está seleccionado. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Limpar a selección (Esc) |
| `DETAILS` | `DET` | Os detalles propios da súa empresa, atopados segundo o que está debuxando: buscar, engadir un bloque, listar, retirar, activar ou desactivar as ofertas. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Debuxar un diagrama a partir de texto: un diagrama de fluxo Mermaid, un diagrama de compoñentes PlantUML, D2, unha lista de-a ou XML de draw.io, como bloques e conectores editables |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distancia real entre dous puntos |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ángulo entre dúas liñas, dun arco, ou por tres puntos |
| `DIMARC` | `DAR` | Cota de lonxitude de arco: a distancia ao longo dun arco, co símbolo de arco (DAR) |
| `DIMASZ` |  | Axuste de cota: tamaño da frecha |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cotas apiladas desde unha liña de base |
| `DIMBREAK` | `DBREAK` | Partir as liñas de cota e de extensión onde cruzan outros obxectos (Automático), entre dous puntos (Manual), ou retirar as roturas |
| `DIMCONSTRAINT` | `DCON` | Restricións dimensionais: lineal, alineada, angular, raio, diámetro, converter |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Unha cadea de cotas, cada unha desde o extremo da anterior |
| `DIMDEC` |  | Axuste de cota: cifras decimais |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diámetro dun arco ou círculo |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Liberar cotas dos obxectos aos que están ligadas (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Cambiar o texto da cota (Inicio, Texto novo, Xirar) ou inclinar as liñas de extensión (Oblicuo) |
| `DIMEXE` |  | Axuste de cota: extensión máis aló da liña de cota |
| `DIMEXO` |  | Axuste de cota: desprazamento desde a orixe |
| `DIMGAP` |  | Axuste de cota: espazo arredor do texto |
| `DIMINSPECT` |  | Cota de inspección: un marco arredor do valor cunha etiqueta e con que frecuencia se comproba a peza |
| `DIMJOGGED` | `DJO`, `JOG` | Cota de raio cortado: un raio debuxado desde un punto máis próximo cando o centro está lonxe (DJO) |
| `DIMJOGLINE` | `DJL` | Engadir un símbolo de corte a unha liña de cota lineal ou alineada, para mostrar que a distancia non está debuxada a escala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distancia horizontal ou vertical (R para calquera ángulo) |
| `DIMLUNIT` |  | Axuste de cota: formato de lonxitude (1 científico, 2 decimal, 3 enxeñaría, 4 arquitectónico, 5 fraccionario) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cota de ordenada: a distancia X ou Y dun punto desde a orixe do SPU, nunha chamada (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Substituír variables de cota nas cotas seleccionadas sen cambiar o seu estilo; Borrar devolve o estilo (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Raio dun arco ou círculo |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Ligar os puntos dunha cota a obxectos, para que a siga e volva medir cando se movan (DRE) |
| `DIMSCALE` |  | Axuste de cota: escala global (tamaños × este valor) |
| `DIMSPACE` |  | Espazamento uniforme entre cotas paralelas, medido desde unha cota base (0 aliñaas, Automático é o dobre da altura do texto) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Crear, cambiar, definir como actual, eliminar, aplicar e comparar estilos de cota con nome (o diálogo; -DIMSTYLE na liña de comandos) |
| `DIMTEDIT` | `DIMTED` | Mover o texto da cota á esquerda, á dereita ou ao centro da liña de cota, ou xirarlo |
| `DIMTEXTUNIT` | `DTU` | Texto de cota en mm, cm, m ou km, ou nas unidades propias do debuxo: as cotas seleccionadas, se non, as novas (DTU) |
| `DIMTXT` |  | Axuste de cota: altura do texto |
| `DIST` | `DI` | Distancia e ángulo entre dous puntos |
| `DISTRIBUTE` |  | Espazar uniformemente os obxectos seleccionados, de lado a lado ou de arriba abaixo: pasos iguais entre centros, ou espazos iguais; os dous externos quedan |
| `DIVIDE` | `DIV` | DIVIDE (DIV): marcas que cortan unha liña, arco, círculo, polilínea, spline ou elipse en partes iguais. Puntos, ou con Bloque un bloque en cada marca. |
| `DOCUMENTS` | `DOCS` | Abrir o panel Documentos: sacar e devolver debuxos, revisións, estados de publicación e aprobación dunha cartafol de proxecto |
| `DOOR` | `DR` | Colocar unha porta nun muro. O lado no que preme é o lado cara ao que abre. |
| `DRAWORDER` |  | Cambiar a orde de debuxo: traer obxectos ao fronte, envialos ao fondo, ou pólos enriba ou debaixo doutros obxectos. |
| `DUPLICATE` | `DUP` | Unha copia que segue o punteiro: prema para deixala (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | As propiedades do debuxo: título, autor e o resto, e os seus pares propios de nome e valor |
| `DXFOUT` |  | Descargar o debuxo como DXF R12 (Gardar mantén o seu propio formato) |
| `EATTEDIT` | `DDATTE` | Editar os atributos dunha referencia de bloque: valores, texto e propiedades, un atributo de cada vez |
| `ELLIPSE` | `EL` | Extremos do eixo e o outro semieixe |
| `ERASE` | `E`, `DELETE` | Retirar obxectos |
| `EXPLODE` | `X` | Descompoñer polilíneas, bloques e cotas nas súas partes |
| `EXPORT` | `EXP` | Gardar unha copia do debuxo nun tipo de ficheiro que escribe un complemento |
| `EXPORT3D` | `3DEXPORT` | Exportar o modelo 3D: GLB, OBJ ou STL |
| `EXPORTPOINTS` | `EXPPTS` | Escribir puntos, e os puntos de inserción dos bloques con un atributo como descrición, nun ficheiro CSV ou TXT (PNEZD, PENZD ou XYZ) para programas BIM e de topografía |
| `EXTEND` | `EX` | Alongar obxectos ata encontrar outros: prema preto dun extremo, arrastre por varios, ou Shift+clic para recortar |
| `EXTRIM` |  | EXTRIM: escolla unha arista de corte e despois un lado. Todo o que cruza a arista recórtase nese lado. As partes que se perderían mostran ao mover o punteiro. |
| `EXTRUDE` | `EXT` | Extruír obxectos 2D pechados en sólidos (3D) |
| `FIELD` |  | Colocar un campo nun texto, unha cela de táboa ou un atributo: unha data, o nome do ficheiro, o número de folla, unha propiedade do debuxo, a superficie ou lonxitude dun obxecto, ou unha fórmula |
| `FILLET` | `F` | Redondear ou dar esquadro á esquina entre dous obxectos (R raio (R), P cada esquina dunha polilínea (P), M varios (M)) |
| `FIND` |  | Buscar e substituír palabras no texto, nos valores dos atributos e no texto das cotas |
| `FLATTEN` |  | Definir a altura (Z) e o grosor dos obxectos seleccionados como 0, tamén nos bloques que usan. |
| `FLOOR` |  | Escoller a planta onde debuxar, engadir unha, ou mover ou copiar a selección a unha. |
| `FLOORLAYERS` |  | Converter as plantas en capas con nome Planta-Capa, para un ficheiro que vai a alguén sen plantas. |
| `FLOORS` | `FLR` | Abrir o panel Plantas: apilar plantas nun só espazo modelo. |
| `GCCOINCIDENT` |  | Restrición: dous puntos encóntranse, ou un punto queda sobre un obxecto |
| `GCCOLLINEAR` |  | Restrición: dúas liñas quedan sobre unha mesma liña |
| `GCCONCENTRIC` |  | Restrición: dous círculos ou arcos comparten un centro |
| `GCEQUAL` |  | Restrición: dúas liñas quedan do mesmo lonxitude, ou dous círculos/arcos do mesmo raio |
| `GCFIX` |  | Restrición: un punto ou un obxecto enteiro quédase onde está |
| `GCHORIZONTAL` |  | Restrición: unha liña (ou dous puntos) queda horizontal |
| `GCPARALLEL` |  | Restrición: dúas liñas quedan paralelas |
| `GCPERPENDICULAR` |  | Restrición: dúas liñas quedan en ángulo recto |
| `GCSYMMETRIC` |  | Restrición: dous puntos, liñas ou círculos reflíctense un ao outro a través dunha liña |
| `GCTANGENT` |  | Restrición: unha liña e un círculo ou arco (ou dous deles) quedan tanxentes |
| `GCVERTICAL` |  | Restrición: unha liña (ou dous puntos) queda vertical |
| `GDSIN` | `GDS` | Ver un deseño de circuíto integrado (un ficheiro de fluxo GDSII): cada capa e tipo de dato como capa de debuxo, plana, en unidades de usuario; só para ver e medir (proba de laboratorio) |
| `GEOMCONSTRAINT` | `GCON` | Restricións xeométricas: horizontal, vertical, paralela, tanxente, coincidente… |
| `GLBOUT` |  | Exportar o modelo 3D como GLB (glTF) |
| `GRADIENT` | `GD` | Enche unha área cun degradado de unha ou dúas cores |
| `GRIDMOVE` | `GM` | Mover unha liña de cuadrícula e levar o que pende dela: os muros estíranse, as columnas, as burbullas e as etiquetas se moven, as cotas seguen. |
| `GROUP` | `G` | GROUP (G): dar aos obxectos seleccionados un nome que comparten. Un clic sobre un deles selecciónaos todos. Enter no nome fai un grupo sen nome. |
| `GROUPEDIT` |  | GROUPEDIT: cambiar un grupo. Escolla un dos seus obxectos ou dé o seu Nome, despois Engadir ou Retirar obxectos, RENomear, cambiar a súa Descrición, ou dicir se un clic o selecciona enteiro. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Encher unha área cun recheo sólido ou un patrón: prema dentro dela, ou seleccione obxectos pechados (H) |
| `HATCHEDIT` | `HE` | Cambiar unha trama: patrón, escala, ángulo, orixe e a súa ligazón a un contorno. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Volve crear as polilíneas de contorno a partir dunha trama, ligadas a ela ou non |
| `HATCHTOBACK` |  | Enviar cada trama detrás de todo o demais. |
| `HELP` | `?` | Esta lista |
| `HIDEOBJECTS` |  | Ocultar os obxectos seleccionados ata UNISOLATEOBJECTS. Non se garda co debuxo. |
| `HISTORY` | `HIST` | HISTORY (HIST): as versións deste debuxo — copias gardadas neste computador cando Studio o garda, e as versións da nube — para abrir, restaurar e comparar co que cambiou, amosado en cor. |
| `ID` |  | Coordenadas dun punto |
| `IMAGE` | `IM` | Dar a CadCraft os ficheiros de imaxe que usa un debuxo (un DWG só garda onde estaban). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Colocar unha imaxe (PNG ou JPEG) desde un ficheiro. |
| `IMAGECLIP` | `ICL` | Recortar unha imaxe a un rectángulo ou un polígono, ou retirar o seu recorte. |
| `IMPORT` | `IMP` | Importar un ficheiro dun tipo que lee un complemento, a este debuxo |
| `INSERT` | `I`, `DDINSERT` | Colocar un bloque (S escala, R xirar); F desde un ficheiro DWG/DXF, L desde a biblioteca |
| `INTERSECT` | `IN` | Conservar só o que os sólidos teñen en común (3D), ou a área que comparten as rexións 2D |
| `ISODRAFT` |  | ISODRAFT: debuxo isométrico activado ou desactivado, ou directamente sobre o plano Esquerdo, Superior ou Dereito. Mentres está activo, Orto e o seguimento polar seguen os dous eixes do plano, a cuadrícula dibúxase isométrica, e ELLIPSE ten Isocírculo. |
| `ISOLATEOBJECTS` | `ISOLATE` | Mostrar só os obxectos seleccionados; todo o demais deste espazo fica oculto ata UNISOLATEOBJECTS. Non se garda co debuxo. |
| `ISOPLANE` |  | ISOPLANE: escoller o plano isométrico onde debuxar: Esquerdo, Superior ou Dereito. Enter pasa ao seguinte, igual que F5 mentres o debuxo isométrico está activo. |
| `JOIN` | `J` | Unir liñas, arcos e polilíneas que se tocan extremo con extremo nunha soa polilínea; liñas sobre unha mesma recta nunha soa liña (J) |
| `LASER` | `LASERCUT` | Abrir o panel Láser: enviar capas a unha cortadora ou gravadora láser (código G GRBL) |
| `LASSOMODE` |  | Premer e arrastrar debuxa un lazo (1) ou un rectángulo (0) |
| `LAYDEL` |  | Eliminar unha capa e cada obxecto que contén (no modelo, nas follas e nos bloques) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Abrir o xestor de capas: cada capa nunha soa táboa |
| `LAYERPANEL` |  | Amosar o panel de capas |
| `LAYFRZ` |  | Conxelar a capa de cada obxecto que escolla |
| `LAYGROUP` | `LG` | Agrupar capas en carpetas no panel de Capas. |
| `LAYISO` |  | Illar as capas dos obxectos seleccionados (todas as demais desactivadas) |
| `LAYLOCKFADE` |  | Definir canto se esvaecen os obxectos en capas bloqueadas, e se un clic pode seleccionalos. |
| `LAYMCUR` |  | Facer actual a capa do obxecto que escolla |
| `LAYMRG` |  | Fusionar capas: os seus obxectos pasan a unha capa de destino, e as capas fusionadas desaparecen |
| `LAYOFF` |  | Desactivar a capa de cada obxecto que escolla |
| `LAYON` |  | Activar todas as capas |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Unha nova folla con cadro de rótulo e unha fenestra |
| `LAYTHW` |  | Descongelar todas as capas |
| `LAYUNISO` |  | Volver activar as capas que LAYISO desactivou |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Converte texto escrito con tipos de letra vietnamitas antigos (tipos TCVN3 / ABC como .VnTime, e tipos VNI como VNI-Times) a Unicode. Este texto xa se amosa tal como se le; esta orde reescríbeo de vez, cun conto e un só paso de desfacer. |
| `LENGTHEN` | `LEN` | Alongar ou acurtar liñas, arcos e polilíneas: por unha cantidade, unha porcentaxe, ata un total, ou arrastrando (LEN) |
| `LIBRARY` | `LIB` | O panel da biblioteca: colocar elementos, buscar actualizacións, créditos |
| `LIMITS` |  | Definir os límites do debuxo: ON, OFF, ou as esquinas inferior esquerda e superior dereita. Cos límites ON, rexéitanse os puntos que queden fóra |
| `LINE` | `L` | Segmentos rectos, cada un como obxecto propio |
| `LINETYPE` | `LT`, `CELTYPE` | O tipo de liña que reciben os obxectos novos (por capa, por bloque, ou un con nome) |
| `LINKVIEWS` | `SYNCVIEWS` | Desprazar e facer zoom en todos os paneis xuntos (pantalla dividida), para comparar dous debuxos ou revisións |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ou VLIDE) abre o editor LISP: unha xanela para escribir, cargar e probar unha rutina. Cargar no debuxo le todas as formas, como facelo cargando o ficheiro con APPLOAD, e crea os seus comandos. Executar selección avalía as formas seleccionadas, ou a forma onde está o cursor. A consola amosa o que imprimiu a rutina e cada erro coa súa liña. O paréntese correspondente márcase mentres escribe, e Enter sangra a nova liña. Novo, Abrir e Gardar traballan cun ficheiro .lsp. As listas ao lado do texto amosan as funcións que define a rutina, as que chama e este LISP aínda non ten, e todas as que ten. A xanela non bloquea o debuxo, así que unha rutina pode pedir puntos; Stop ou Esc detén unha rutina en execución. |
| `LIST` | `LI`, `LS` | Describir obxectos no historial |
| `LTSCALE` | `LTS` | A escala do tipo de liña do debuxo (cada trazo e espazo multiplícase por ela) |
| `LWDISPLAY` | `LWT` | Mostrar ou ocultar os grosores de liña na pantalla (o botón LWT da barra de estado) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | O grosor de liña que reciben os obxectos novos (por capa, por bloque, por defecto, ou en mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | capas de mapa baixo o espazo modelo: o sistema de coordenadas do debuxo, teselas, WMS, WMTS, ArcGIS, imaxes |
| `MASSPROP` |  | MASSPROP: propiedades de sección de rexións e obxectos pechados: área, perímetro, centroide, momentos e produto de inercia, radios de xiro e os eixes principais. Exacto para liñas e arcos. Pode escribir o informe nun ficheiro de texto. |
| `MATCHPROP` | `MA`, `PAINTER` | Igualar propiedades: copiar a capa, a cor e máis dun obxecto a outros (MA) |
| `MEASURE` | `ME` | MEASURE (ME): unha marca cada lonxitude dada ao longo dunha liña, arco, círculo, polilínea, spline ou elipse, desde o extremo máis próximo ao seu clic. Puntos, ou con Bloque un bloque en cada marca. |
| `MEASUREGEOM` | `MEA` | Medir unha distancia, un raio, un ángulo ou unha superficie (MEA) |
| `MINSERT` |  | MINSERT: colocar un bloque en filas e columnas dun golpe. Cada un é unha referencia propia, así que pode mover ou borrar calquera deles. |
| `MIRROR` | `MI` | Espellar obxectos a través dunha liña |
| `MLEADER` | `MLD`, `MLEAD` | Multiliña de chamada: unha frecha, unha chamada e unha nota, como un só obxecto (MLD) |
| `MLEADERALIGN` | `MLA` | Aliñar multichamadas cunha delas nunha dirección, con espazamento igual, ou distribuídas entre dous puntos (MLA) |
| `MLEADERCOLLECT` | `MLC` | Reunir varias multichamadas nunha: os seus bloques en fila ou columna, ou as súas notas unha debaixo da outra (MLC) |
| `MLEADEREDIT` | `MLE` | Engadir liñas de chamada a unha multichamada ou retiralas; cambiar o seu contido entre texto e bloque (MLE) |
| `MLINE` |  | Debuxar liñas paralelas xuntas, unidas nas esquinas. |
| `MOVE` | `M` | Mover obxectos por un punto base e un segundo punto |
| `MSPACE` | `MS` | Traballar no modelo a través dunha fenestra da folla aberta (ou facer dobre clic dentro da fenestra). |
| `MTEXT` | `MT`, `T` | Texto de parágrafo: arrastre o seu ancho, despois escriba no sitio; Enter inicia un novo parágrafo (T) |
| `MVIEW` | `MV` | Unha fenestra sobre o modelo, nun deseño |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vistas con nome: gardar a vista na pantalla (ou unha xanela) cun nome e volver a ela (NV) |
| `NCOPY` |  | Copiar obxectos desde unha referencia de bloque ou un debuxo ligado ao debuxo, sen descompoñela. |
| `NEARBY` |  | Dicir o que está preto do cursor, o máis próximo primeiro, coa distancia e o lado. |
| `NEW` |  | Comezar un debuxo novo |
| `OBJECTSCALE` | `OBJSCALE` | Escalas de anotación do texto e das cotas anotativas: engadir unha escala, eliminar unha, engadir a escala actual, ou listalas (cada fenestra as amosa co tamaño da súa propia escala) |
| `OBJOUT` |  | Exportar o modelo 3D como OBJ |
| `OFFSET` | `O` | Copias paralelas a unha distancia |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: como OFFSET pecha os espazos nas esquinas exteriores dunha polilínea. 0 alonga os segmentos, 1 engade un arco, 2 engade un corte recto. Mantense nesta sesión. |
| `OLELIST` | `OLES` | Listar os obxectos OLE que leva un debuxo e pór unha copia da imaxe dun deles onde escolla |
| `OPEN` |  | Abrir un DWG ou DXF deste computador |
| `OPENIN3D` |  | Abrir este debuxo na aplicación de modelado 3D, nunha pestana nova (non se sobe nada) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Abrir o menú de enganches a obxectos: escoller que enganches están activos. Tamén un clic dereito en Enganche da barra de estado. |
| `OVERKILL` |  | Eliminar obxectos duplicados e fusionar liñas e arcos que se solapan ou se tocan extremo con extremo, dentro dunha tolerancia. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | O panel Parámetros: parámetros de usuario e restricións dimensionais nunha soa táboa |
| `PARTSLIST` | `PLIST` | Unha táboa de lista de pezas de cada peza normalizada e perfil de aceiro colocado desde a Biblioteca |
| `PASTEAREA` | `PAREA` | Pegar unha área copiada en MarkupCraft (Copiar área) ao seu tamaño real, como imaxe. |
| `PASTEBLOCK` |  | PASTEBLOCK: pegar o que copiou como un só bloque. O bloque recibe un nome propio; RENAME dalle o seu. |
| `PASTECLIP` |  | Pegar o portapapeis: segue o cursor, prema onde debe ir (Ctrl+V) |
| `PASTEORIG` |  | Pegar o portapapeis nas coordenadas desde as que se copiou (Ctrl+Shift+V) |
| `PDF` |  | Dar a CadCraft os ficheiros PDF que usan as subxacentes do debuxo |
| `PDFADJUST` |  | Esvaecer, cambiar o contraste, pasar a monocromo ou desactivar unha subxacente PDF |
| `PDFATTACH` | `PDFATT` | Adxuntar unha páxina PDF como subxacente (PDFATTACH) |
| `PDFCLIP` |  | Recortar unha subxacente PDF a un rectángulo ou polígono |
| `PDFIMPORT` | `PDFIM` | Converter as liñas, recheos e texto dunha páxina PDF en obxectos de debuxo (PDFIMPORT) |
| `PDFLAYERS` |  | Activar ou desactivar as capas dunha subxacente PDF |
| `PEDIT` | `PE` | Editar unha polilínea: pechar, abrir, unir, ancho, curva ajustada, curva spline, desaxustar, xerar tipo de liña, inverter; as liñas, arcos e splines pódense converter en polilíneas |
| `PHOTOSKETCH` | `PSK` | Converte unha foto dun esbozo a man sobre papel en liñas e arcos a escala, endereitando a perspectiva e dando a cada cor de bolígrafo a súa propia capa. |
| `PICKSTYLE` |  | PICKSTYLE: se seleccionar un obxecto dun grupo selecciona o grupo completo (1, a configuración inicial) ou só ese obxecto (0). Mantense nesta sesión. |
| `PLAN` |  | Xirar a vista para que o eixe X do SPU (SPU actual, un SPU gardado, ou o Mundo) quede nivelado na pantalla. Non se move nada do debuxo. |
| `PLINE` | `PL` | Unha polilínea de segmentos rectos e arcos |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Imprimir a PDF: unha folla, ou o modelo a unha escala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Táboas de estilos de trazado: definir como imprime cada cor (cor, negro, gris, tinta, grosor de liña); gárdase co debuxo (STYLESMANAGER) |
| `POINT` | `PO` | Obxectos punto |
| `POINTCLOUD` | `PC` | a nube de puntos adxunta: cortar, altura, grosor, cor, tamaño, visible, zoom, desvincular |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | adxuntar unha nube de puntos (LAS, LAZ, XYZ, PTS) baixo o debuxo |
| `POLARANG` |  | O paso de seguimento polar en graos (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Un polígono regular |
| `PRESSPULL` |  | Empurrar ou tirar dunha cara dun sólido (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Abrir o panel Propiedades (tamén Ctrl+1, ou facer dobre clic nun obxecto) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Plegar o panel Propiedades ata o bordo da xanela |
| `PSPACE` | `PS` | Saír da fenestra na que traballa e volver á folla (ou facer dobre clic fóra dela). |
| `PUBLISH` | `-PUBLISH` | Imprimir varias ou todas as follas nun só PDF (unha páxina e un marcador por folla) |
| `PURGE` | `PU` | Retirar definicións de bloques que non usa nada |
| `QDIM` |  | Cota rápida: cotar varios obxectos á vez (continua, de base, escalonada, ordenada, raio ou diámetro) |
| `QPMODE` | `QP` | Propiedades rápidas polo cursor activadas ou desactivadas |
| `QSELECT` | `QS` | Selección rápida: cada obxecto dun tipo cuxa capa, cor, tamaño ou nome coincida (QS) |
| `RASTERSNAP` |  | Activar ou desactivar o enganche ás liñas de follas escaneadas. |
| `RAY` |  | Raio: unha liña de construción desde un punto, infinita nun sentido. |
| `RECOVER` |  | Abre un DXF ou DWG danado: salta o que non se pode ler en vez de rexeitar o ficheiro, di o que saltou, e despois comproba e repara o debuxo como AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Unha polilínea pechada a partir de dúas esquinas |
| `REDLINE` | `RDL` | Marcas de revisión a revisión: ler un paquete de marcas de MarkupCraft, aceptar ou rexeitar cada cambio, marcar en nube os aceptados cun rexistro de revisión, e gardar o ficheiro de respostas (RDL) |
| `REDO` |  | Refacer o que se desfixo |
| `REFCLOSE` |  | Rematar a edición dun bloque no seu sitio: gardalo ou descartar os cambios |
| `REFEDIT` |  | Editar un bloque no seu sitio, onde está unha referencia del, co resto do debuxo esvaecido; REFCLOSE gárdao |
| `REGEN` | `RE` | Reconstruír o que se debuxa nesta pestana a partir do debuxo |
| `REGENALL` | `REA` | Reconstruír o que se debuxa en cada pestana, panel e debuxo aberto |
| `REGION` | `REG` | REGION (REG): crear áreas planas (rexións) a partir de obxectos pechados, ou de liñas, arcos e polilíneas que pechan un lazo extremo con extremo. UNION, SUBTRACT e INTERSECT combinan despois as rexións, e MASSPROP dá as súas propiedades de sección. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Rexistrar varias exploracións: colocalas nun marco por pares de puntos escollidos ou por marcas, afinar con ICP, exportar un LAS ou E57 |
| `REINIT` |  | Volver cargar o ficheiro de alias |
| `RENAME` | `-RENAME`, `REN` | Renomear unha capa ou un bloque (cada obxecto ou referencia segue o cambio) |
| `REVCLOUD` | `RC` | Nube de revisión: un rectángulo, un polígono, un trazo a man alzada ou un obxecto arredondado (RC) |
| `REVOLVE` | `REV` | Xirar obxectos 2D pechados arredor dun eixe en sólidos (3D) |
| `ROTATE` | `RO` | Xirar obxectos arredor dun punto base |
| `SAMPLES` | `SAMPLE` | Abrir un dos debuxos de exemplo de CadCraft (un conxunto arquitectónico, un como construído) para aprender |
| `SAVE` | `QSAVE` | Descargar o debuxo no seu formato (DWG ou DXF) |
| `SAVEAS` |  | Descargar o debuxo como DWG ou DXF: escolla cal |
| `SAYSEL` |  | Dicir o que está seleccionado, unha frase por obxecto. |
| `SCALE` | `SC` | Escalar obxectos arredor dun punto base |
| `SCALELISTEDIT` | `SCALELIST` | Engadir, editar e eliminar as escalas propias do debuxo; aparecen nas listas de escalas de fenestra e de impresión e gárdanse no ficheiro (SCALELIST) |
| `SCANALIGN` | `SCL` | Aliñar unha folla escaneada a dous puntos: mover, xirar e, se o escolle, escalar. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Inserir un debuxo escaneado: un PNG, JPEG ou TIFF (unha páxina ou todas as páxinas dun ficheiro de varias páxinas) ou unha páxina PDF que sexa unha imaxe. |
| `SCANCLEAN` | `SCC` | Converter unha folla escaneada en branco e negro e eliminar manchas. |
| `SCANCROP` | `SCR` | Recortar unha folla escaneada a unha xanela. |
| `SCANDESKEW` | `SCD` | Atopar o ángulo no que están as liñas longas dunha folla escaneada e endereitar a folla cando acepte o ángulo. |
| `SCANERASE` | `SCE` | Borrar unha área dunha folla escaneada: un rectángulo, un polígono ou un lazo. |
| `SCANINFO` | `SCI` | Amosar o ficheiro orixinal dunha folla escaneada e os pasos dados desde entón. |
| `SCANSCALE` | `SCS` | Escalar unha folla escaneada: escoller dous puntos nela e escribir a distancia real entre eles. |
| `SCANTRACE` | `SCT` | Trazar unha folla escaneada en liñas e arcos nunha capa nova, cunha tolerancia que vostede define. O texto e as trama quedan como mapa de bits. |
| `SELECT` |  | Seleccionar obxectos agora (para P, Anterior, no seguinte comando) |
| `SELECTALL` | `AI_SELALL` | Seleccionar cada obxecto que pode editar nesta pestana (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Seleccionar cada obxecto como os que escolla: mesmo tipo, capa e cor (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Amosa o panel Conxunto de follas: follas de moitos debuxos, numeradas, publicadas nun só PDF. |
| `SHORTCUTS` | `KEYS` | Dar a calquera comando unha tecla propia (Ctrl ou Alt cunha letra, ou unha tecla de función libre), gardada neste navegador ou aplicación de escritorio. |
| `SHXFONTS` | `SHX` | Dar a CadCraft tipos de letra SHX desde un cartafol ou ficheiros, para que os estilos de texto que os nomean debuxen con eles (listar, retirar, inverter) |
| `SKETCHFIX` | `SKF` | Debuxar trazos a man alzada; cada un convértese nunha liña, círculo, arco, rectángulo ou polilínea limpa, cadrada e unida ás demais. |
| `SKETCHLIVE` | `SKL` | Esbozar cun bolígrafo: cada trazo convértese nunha liña, círculo, arco ou rectángulo precisos ao levantar o bolígrafo, enganchados ao debuxo, co seu tamaño para escribir por riba. |
| `SPLINE` | `SPL` | Debuxar unha spline por puntos (ou cun polígono de control), ou converter nela unha polilínea |
| `SPLINEDIT` | `SPE` | Editar unha spline: puntos de axuste, puntos de control e pesos, abrila ou pechala, inverterla, ou convertela en polilínea |
| `SPLIT` |  | Dividir a área de debuxo en paneis (como VPORTS no modelo; tamén desde unha folla) |
| `STEELMEMBER` | `SMEMBER` | Un elemento de aceiro en 3D a partir dun perfil estándar: dous puntos (unha viga) ou un punto base e unha altura (Columna) |
| `STLOUT` |  | Exportar o modelo 3D como STL (milímetros) |
| `STRETCH` | `S` | Estirar: arrastre unha xanela de cruzamento sobre os extremos para mover; o que está dentro móvese, o resto queda (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Estilos de texto: o tipo de letra, altura, ancho e inclinación que toma o texto novo (o diálogo; -STYLE na liña de comandos) |
| `SUBTRACT` | `SU` | Quitar sólidos a outros (3D), ou rexións 2D a rexións |
| `SWBOUT` | `SWMACRO` | Descargar unha macro para SolidWorks (.swb) que reconstrúe o modelo como un só esbozo restrinxido |
| `SWEEP` |  | Barrer obxectos 2D pechados ao longo dunha traxectoria (liña, polilínea, arco, círculo) en sólidos (3D) |
| `TABLE` | `TB` | Crear unha táboa: filas e columnas, ou a partir de celas de folla de cálculo do portapapeis ou dun ficheiro CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Editar unha táboa: escribir nunha cela, inserir e eliminar filas e columnas, tamaños, celas combinadas, aliñamento |
| `TABLEEXPORT` |  | Gardar o que amosa unha táboa como ficheiro CSV |
| `TABLEPASTE` | `PASTETABLE` | Crear unha táboa a partir de celas de folla de cálculo do portapapeis |
| `TABLESTYLE` | `TS` | Estilos de táboa: alturas de texto, aliñamento, marxe e bordos para as filas de título, cabeceira e datos |
| `TAGS` |  | Etiquetas en referencias de bloque: definir unha etiqueta (tipo, valores permitidos, bloques aos que se aplica), asignala ás referencias seleccionadas, e listalas como un cadro que pode gardar como CSV |
| `TEXT` | `DT`, `DTEXT` | Texto dunha soa liña; Enter inicia a seguinte liña |
| `TEXTEDIT` | `ED`, `DDEDIT` | Editar texto no seu sitio: escolla un texto (ou fagalle dobre clic) (ED) |
| `TEXTMASK` | `TMASK` | Pór unha máscara de fondo detrás dos textos (o fondo do debuxo ou unha cor), ou quitala. |
| `TEXTTOFRONT` |  | Traer todo o texto, cotas e chamadas diante de todo o demais. |
| `TOOLBAR` |  | Escoller o que amosan os botóns da barra de ferramentas: iconas e texto, só iconas, ou só texto (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Pór a barra de ferramentas na parte superior, inferior, esquerda ou dereita da xanela |
| `TOOLBARROWS` |  | Escoller cantas filas usa a barra de ferramentas: axustar, 2, ou 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Facer que as barras sobre o debuxo sexan estándar ou compactas |
| `TOUCHCROSSHAIR` | `TCX` | Cruz desprazada para debuxar con dedo: un dedo move unha cruz que queda enriba e ao lado, así o dedo non tapa o punto escollido. Ao levantar o dedo non se escolle nada; o botón Clic ou un toque cun segundo dedo escolle na cruz, e manter Clic mentres se move arrastra. Unha pulsación longa ou o botón Enter é Enter. Dous dedos desprazan e fan zoom. Opcións: ON, OFF, Auto (activo só onde un dedo é o único punteiro), Distancia, Lado. |
| `TOUR` | `TUTORIAL` | Repetir o percorrido de seis pasos do primeiro debuxo |
| `TRIM` | `TR` | Recortar obxectos ata onde outros os cruzan: prema un anaco, arrastre por varios, ou Shift+clic para estender |
| `TRIMEXTENDMODE` |  | Como comezan TRIM e EXTEND: 1 Rápido (cada obxecto é unha arista de corte ou contorno), 0 Estándar (escolla primeiro as arestas) |
| `TTR` |  | Un círculo tanxente a dous obxectos, cun raio que vostede dá (igual que CIRCLE T). |
| `TURNLEFT` |  | Xirar a vista 90° á esquerda (en sentido antihorario): SPU Z -90, e a vista segue. Non se move nada do debuxo. |
| `TURNRIGHT` |  | Xirar a vista 90° á dereita (en sentido horario): SPU Z 90, e a vista segue. Non se move nada do debuxo. |
| `TURNWORLD` |  | De volta ao mundo: SPU Mundo, e a vista volve quedar nivelada. |
| `TXT2MTXT` | `T2M` | Unir textos dunha soa liña nun só texto de parágrafo, de arriba abaixo. |
| `UCS` |  | O seu propio sistema de coordenadas: unha orixe e un eixe X (orixe, ángulo Z, 3punto, OBxecto, Anterior, Mundo, NOmeado). Os puntos que escriba, o orto, o seguimento polar, a cuadrícula e o texto novo seguénno; a vista xírase para que o seu eixe X quede nivelado. Non se move nada do debuxo. |
| `UNDO` | `U` | Desfacer o último comando |
| `UNGROUP` |  | UNGROUP: desfacer grupos. Seleccione obxectos dos grupos, ou dea un Nome. Os obxectos quedan no debuxo. |
| `UNION` | `UNI` | Unir sólidos nun só (3D), ou rexións 2D nunha soa rexión |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Mostrar de novo cada obxecto oculto por ISOLATEOBJECTS ou HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Como se amosan e escriben as lonxitudes: decimal, pés e polgadas, fraccións (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Calcular de novo os campos, e escoller cando se actualizan por si mesmos |
| `USDOUT` |  | Exportar o modelo 3D como USD (.usda texto, .usdc binario ou un paquete .usdz) |
| `VIEW` | `-VIEW`, `V` | Vistas 3D estándar, en perspectiva ou paralelas (3D) |
| `VIEWBASE` | `FLATSHOT` | Colocar unha vista 2D plana dos sólidos 3D (fronte, planta, lateral ou isométrica, liñas ocultas en trazos) nunha folla ou no modelo |
| `VIEWLABEL` | `VL` | Un título de vista nunha folla que amosa o nome da vista da súa fenestra, e cambia con ela. |
| `VOICE` |  | Activar ou desactivar os comandos falados. Recoñécense neste computador. |
| `VPCLIP` |  | Recorta unha fenestra de folla a un obxecto pechado ou a un polígono debuxado; Eliminar convértea de novo nun rectángulo |
| `VPLAYER` |  | Conxelar ou descongelar capas só en algunhas fenestras (Conxelar, Descongelar, Restablecer), e escoller que capas comezan conxeladas nas fenestras novas (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Dividir a área de debuxo en paneis, cada un coa súa propia vista (nunha folla: unha fenestra, como MVIEW) |
| `VPVIEW` |  | Definir o que mostra unha fenestra: escoller unha xanela sobre o modelo |
| `VSCURRENT` | `VS`, `SHADEMODE` | Estilo visual da vista 3D: sombreado, bordos, liña oculta, alámbrico, raios X |
| `WALL` | `WA` | Debuxar muros 2D como unha polilínea. Únense, e levan portas e xanelas. |
| `WALLARC` | `WARC` | Debuxar un arco de muros. Os muros en planta son rectos, así que o arco debúxase como pequenos muros rectos (15 graos cada un) que se unen. |
| `WALLDELSEG` |  | Eliminar un anaco dun muro entre dous puntos. O que queda segue sendo un ou dous muros. |
| `WALLDIM` |  | Escribir un novo valor para unha cota: o muro no seu extremo distante móvese en ángulo recto consigo mesmo, o muro no primeiro extremo mantense, e os muros unidos a el seguen. |
| `WALLDISJOIN` |  | Escoller un muro preto dun extremo para non permitir as uniones nese extremo: o extremo debúxase a esquadro e nada o segue. Escóllao de novo para permitilas. |
| `WALLGRID` |  | Bloquear un muro a unha liña de cuadrícula: ao longo dela, ou un extremo sobre ela. Mova a liña con GRIDMOVE e o muro segue. |
| `WALLHOLD` |  | Aliñar e bloquear: un muro mantén o seu sitio fronte a outro muro (na súa liña, ou á distancia que ten). Se un se move, o outro segue. |
| `WALLHOLDDIM` |  | Bloquear a distancia entre dous muros paralelos. Se un se move, o outro segue para mantela. |
| `WALLHOLDS` |  | Listar os bloqueos dos muros. |
| `WALLJOINS` |  | Dar a cada muro dun debuxo antigo o seu identificador e gardar as uniones entre eles. Isto tamén ocorre no primeiro cambio que faga. |
| `WALLJOINSTYLE` |  | Prema unha esquina onde dous muros se tocan extremo con extremo para cambiar como se debuxa: inglete, a tope, a esquadro. T cambia cal muro pasa por dentro. |
| `WALLOFFSET` | `WO` | Mover un muro a esquadro consigo mesmo a unha distancia (os muros unidos a el seguen), ou facer unha copia a esa distancia. |
| `WALLPICK` |  | Crear muros nunha liña ou polilínea do debuxo, cos seus unidos se responde Si. |
| `WALLPOLY` | `WP` | Debuxar muros arredor dun polígono regular de 3 a 64 lados, como POLYGON. |
| `WALLRECT` | `WR` | Debuxar catro muros unidos a partir de dúas esquinas opostas, como RECTANG. |
| `WALLREJOIN` |  | Facer dúas partes dun muro outra vez un só muro. A primeira conserva o seu sitio no debuxo. |
| `WALLROT` |  | Debuxar catro muros unidos como un rectángulo xirado a calquera ángulo: o primeiro lado, despois canto sobresae. |
| `WALLSPLIT` | `WS` | Dividir un muro en dous nun punto ou onde cruza outro muro. As partes quedan unidas salvo que pida un espazo ou extremos libres. As portas e xanelas van coa súa parte. |
| `WALLSPLITGAP` |  | Dividir un muro deixando un espazo: escriba o espazo, escolla o muro, e despois o punto. As partes quedan con extremos libres e poden volver unirse. |
| `WALLSTRETCH` |  | Estirar cunha xanela: os extremos de muros dentro dela móvense, os muros totalmente dentro móvense enteiros, e os muros que chocan contra os seus lados deslízanse con eles. |
| `WALLTAN` |  | Continuar un muro cun arco que sae del ao longo do muro (debuxado como pequenos muros rectos). |
| `WALLTRACE` |  | Crear muros ao redor da menor área pechada de liñas e muros ao redor do punto que prema. |
| `WALLUNHOLD` |  | Quitar os bloqueos dun muro (e os bloqueos doutros muros a el). |
| `WBLOCK` | `W`, `-WBLOCK` | Escribir un bloque, algúns obxectos ou o debuxo completo nun novo ficheiro DWG ou DXF (W) |
| `WEDGE` | `WE` | Unha cuña: dúas esquinas e unha altura; inclínase lonxe da primeira esquina (3D) |
| `WHEREAMI` | `WHERE` | Dicir onde está o cursor. |
| `WHOHAS` |  | Di quen ten aberto un debuxo. CadCraft Studio garda un pequeno ficheiro de bloqueo xunto a cada debuxo aberto (Plan.dwg.cclock: quen, desde cando, que versión) e elimínao ao pechar. Opcións: Actual (o debuxo aberto), Ficheiro (escoller un), Cartafol (cada debuxo dun cartafol que estea aberto nalgún sitio; isto tamén permite que Studio garde ficheiros de bloqueo nese cartafol), Ruta (escribir unha), Nome (o nome que ven os demais). Un bloqueo que non se actualizou durante cinco minutos dise obsoleto. Non dispoñible nun navegador. |
| `WINDOW` | `WN` | Colocar unha xanela nun muro. |
| `XATTACH` | `XA` | Ligar outro DWG ou DXF a este debuxo, amosado en só lectura (XREF listaos e volve cargalos) |
| `XCLIP` | `XC` | Recortar referencias de bloque e debuxos ligados a un rectángulo ou un polígono, ou quitar o recorte. |
| `XLINE` | `XL` | Liña de construción, infinita nos dous sentidos: por dous puntos, horizontal, vertical, en ángulo, bisectriz dun ángulo, ou desprazada dunha liña. |
| `XREF` | `XR`, `-XREF` | Debuxos ligados (referencias externas): listar, adxuntar, volver cargar, vincular, desligar |
| `ZOOM` | `Z` | Extensións, ou unha xanela |
