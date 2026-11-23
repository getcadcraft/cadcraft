---
title: Mapa de comandos: que escribir
summary: Cada comando que ten CadCraft cos seus nomes curtos, de A a Z, feito polo propio programa, e os hábitos doutros programas de debuxo que difiren.
keywords: mapa de comandos, comandos, alias, nomes curtos, vir doutro programa, lista de comandos, que escribir, borrar, recortar, equivalente, diferenzas
from: 9426856f
---

CadCraft usa os nomes de comando e os nomes curtos que a xente coñece doutros programas de debuxo: escriba `L` para unha liña, `TR` para recortar, `E` para borrar. Así que non hai unha táboa de tradución que aprender para a maioría: o nome que coñece é o nome aquí. A lista de abaixo é todos os comandos que ten CadCraft, feita polo propio programa. {{key:Enter}} repite o último; `HELP` na liña de comandos imprime a mesma lista.

Os poucos que non son iguais, ou non están feitos:

- **Gardar** descarga unha copia no navegador ({{cmd:SAVE}}, {{cmd:SAVEAS}}); en CadCraft Studio escribe o ficheiro. Vexa [Vir doutro software de debuxo](topic:coming-from).
- **PLOT** fai un PDF (tamén PNG e SVG), cunha táboa de estilo de trazado; non hai xestor de configuración de páxina.
- **DIMSTYLE** e **PEDIT** están feitos; **PEDIT** non ten a opción Editar vértice (iso fano os agarres).
- **TABLE** non está feito; {{cmd:XREF}}, {{cmd:SPLINE}} e {{cmd:WBLOCK}} si.
- Os comandos propios dunha rutina (AutoLISP `C:NAME`) aparecen despois de cargala con {{cmd:APPLOAD}}; non se listan aquí.

## Todos os comandos (402)

| Comando | Nomes curtos | Que fai |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbita a vista 3D co botón esquerdo |
| `ACCESS` | `AX` | Activa ou desactiva o debuxo sen vista: resultados falados polo seu lector de pantalla, un cursor de teclado no debuxo, sons de enganche e comandos falados. |
| `ALIASEDIT` |  | Edita os alias de comandos nun ficheiro de texto (o formato coñecido L, *LINE) |
| `ALIGN` | `AL` | Move e xira obxectos para que os puntos de orixe caian sobre os puntos de destino (un, dous ou tres pares), e escálaos se o quere |
| `ALIGNPANEL` | `ALP` | Abre o panel Aliñar e distribuír |
| `ALIGNTO` |  | Aliña os bordos esquerdo, central, dereito, superior, medio ou inferior dos obxectos seleccionados, sobre a selección, o primeiro ou o último obxecto escollido, ou un punto |
| `ANNOALLVISIBLE` | `ANNOALL` | Mostra os obxectos anotativos a cada escala, ou só onde a escala da vista (ou do debuxo) está na súa lista |
| `ANNOSCALE` | `CANNOSCALE` | Fixa a escala de anotación do debuxo: o texto e as cotas anotativos redimensiónanse para imprimirse co mesmo tamaño |
| `APPLOAD` | `AP` | Cargar aplicacións: rutinas LISP (.lsp) e os seus ficheiros de diálogo (.dcl); o Conxunto de inicio (AP) |
| `ARC` | `A` | Arco: 3 puntos, Inicio/Centro/Final, Inicio/Centro/Ángulo, Inicio/Centro/Lonxitude, Inicio/Final/Ángulo, Inicio/Final/Dirección, Inicio/Final/Raio, Centro/Inicio/Final, Centro/Inicio/Ángulo, Centro/Inicio/Lonxitude, Continuar |
| `AREA` | `AA` | Área e perímetro por puntos ou dun obxecto; Engadir e Restar manteñen un total acumulado (AA) |
| `ARRAY` | `AR` | Copias en filas e columnas, ou ao redor dun centro (AR) |
| `ARRAYASSOCIATIVITY` |  | Fixa se os comandos ARRAY fan matrices que seguen editables (1) ou copias simples (0) |
| `ARRAYCLOSE` |  | Remata a edición dos obxectos orixe dunha matriz |
| `ARRAYEDIT` |  | Cambia unha matriz feita coa opción Asociativa: cantidades, separación, obxectos orixe, un elemento |
| `ARRAYPATH` |  | Copias de obxectos ao longo dunha liña, arco, polilínea ou outra curva |
| `ARRAYPOLAR` |  | Copias ao redor dun punto central |
| `ARRAYRECT` |  | Copias en filas e columnas |
| `ASBUILT` | `ASB` | ASBUILT le os puntos as-built que mediu unha brigada (CSV / TXT, como os escribe EXPORTPOINTS) e compáraos cos puntos do debuxo: dentro ou fóra da tolerancia, sen medir, extra. Márcaos na capa AS-BUILT e descarga un informe CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Define un atributo (unha etiqueta pola que un bloque pide un valor) para pór nun bloque (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Edita os valores de atributo dunha referencia de bloque na liña de comandos, un tras outro (Enter conserva un valor) |
| `ATTSYNC` |  | Pon as referencias dun bloque en liña coas súas definicións de atributo: engádense as novas cos seus predeterminados, bótanse as eliminadas, reséanse posicións e textos; os valores consérvanse |
| `AUDIT` |  | Comproba o debuxo aberto en busca de danos: números non finitos, obxectos sen tamaño, capas, bloques, estilos e tipos de liña que faltan, bloques que se conteñen a si mesmos, identificadores compartidos, cotas e tramas rotas. Lista o que atopa por tipo e pregunta antes de arranxar; a corrección é un paso de desfacer. |
| `AUNITS` | `ANGUNITS` | Como se mostran e escriben os ángulos: graos decimais, graos-minutos-segundos ou rumbos como N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autocompletar do debuxo activado ou desactivado, ou lista o que suxiren agora os patróns do debuxo. |
| `AUTOCONSTRAIN` |  | Engade restricións de coincidencia, horizontais e verticais onde a xeometría xa está próxima |
| `AUTODIM` | `ADIM` | Cotar por regras: tamaño total, cadeas ao longo dos lados, vans, diámetros de furos e separación da cuadrícula, sen repetir o que xa está cotado. |
| `AUTOSHEET` | `ASH` | Dispón as follas por si mesmo: escolle o papel e as escalas estándar e coloca cada vista cunha lenda e unha cartela. |
| `BATTMAN` |  | Xestor de atributos de bloque: orde, etiquetas, indicacións, predeterminados e modos dos atributos dun bloque, e despois actualízanse as súas referencias |
| `BCLOSE` |  | Pecha o editor de bloques: garda o bloque ou descarta os cambios |
| `BCONVERT` |  | BCONVERT atopa xeometría que se repite e convértea en referencias de bloque. Seleccione os obxectos que se repiten: atópanse todos os demais conxuntos de obxectos no espazo aberto que teñen a mesma xeometría, movidos e xirados en calquera ángulo, e con Espello ou Escalado activados tamén se atopan imaxes espello e copias a outro tamaño. Dálle ao novo bloque un nome e un punto base; a selección e cada copia convértense en referencias a el, cada unha coa súa propia rotación e escala. Ou escolla Bloque e nomee un bloque existente para atopar copias soltas dos seus obxectos. Unha copia debe ter a mesma capa, cor, tipo de liña e grosor de liña, salvo que Propiedades estea en Ignorar. Os obxectos en capas bloqueadas quedan intactos. Un paso de desfacer. |
| `BEDIT` | `BE` | Editor de bloques: edita os obxectos e atributos dun bloque; BCLOSE garda (BE) |
| `BLEND` |  | BLEND: unha spline entre os extremos de dúas curvas abertas, escollidas preto dos extremos para unilas. CONtinuity: Tangente segue as dúas direccións, Suave segue tamén como se dobran. |
| `BLOCK` | `B`, `BMAKE` | Fai un bloque con obxectos (convértense nunha referencia) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: cada referencia a un bloque pasa a ser unha referencia a outro, no mesmo lugar e coa mesma escala e rotación. Os valores dos atributos que ambos bloques teñen consérvanse. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE mostra o panel Bloques co cursor no seu filtro. O panel mostra unha imaxe de cada bloque (os colocados máis recentemente primeiro), en lista ou en cuadrícula; prema unha imaxe ou arrástrea ao debuxo para colocar o bloque con INSERT. En Bibliotecas, engada un ficheiro DWG ou DXF propio: os seus bloques aparecen listados con imaxes e cópianse a este debuxo cando coloca un. En CadCraft Studio tamén se pode engadir unha carpeta de debuxos, e os ficheiros e carpetas lémbranse. |
| `BOMEDIT` | `BOMCOLUMNS` | As columnas, agrupación, ordenación, título, totais e notas dunha táboa de lista de materiais |
| `BOMEXPORT` |  | Garda unha táboa de lista de materiais como ficheiro .csv |
| `BOMTABLE` | `BOM` | Unha táboa viva de lista de materiais dunha zona, ou de todo o debuxo |
| `BOMUPDATE` |  | Actualiza agora todas as táboas de lista de materiais, incluídas as conxeladas |
| `BOMZONE` | `BZONE` | Unha área con nome do debuxo para unha lista de materiais: dúas esquinas, un polígono, ou o contorno dun obxecto pechado |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): escolla un punto dentro dunha área pechada e obteña unha polilínea pechada ao seu redor. Os arcos seguen sendo arcos. Illas delinea tamén as áreas dentro dela. |
| `BOX` |  | Unha caixa: dúas esquinas e unha altura (3D) |
| `BPARAMETER` | `BPARAM` | Aínda sen facer: engadir un parámetro (como Visibilidade) a un bloque. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parámetros de bloque: parámetros con nome e fórmulas, e varios parámetros de visibilidade nun mesmo bloque. Funciona no editor de bloques (asigna os obxectos seleccionados a un estado) e nunha referencia seleccionada (os seus propios valores e estados). |
| `BREAK` | `BR` | Parte unha liña, arco, círculo ou polilínea entre dous puntos (BR) |
| `BREAKATPOINT` |  | Parte unha liña, arco ou polilínea en dous nun punto |
| `BREAKLINE` |  | Debuxa unha liña cun símbolo de rotura; o seu tamaño e a extensión máis aló dos extremos lémbranse. |
| `BREPLACE` |  | BREPLACE troca un bloque por outro. Seleccionados: escolla referencias de bloque e nomee o bloque a usar no seu lugar. Todos: nomee un bloque e o seu substituto, e cada referencia en cada espazo e dentro doutros bloques cambia. Unha referencia conserva o seu lugar, escala, rotación e capa, e os valores dos atributos que ambos bloques teñen; os valores que o novo bloque non ten lugar para péchanse e nómeanse. |
| `BSEARCH` |  | BSEARCH atopa bloques. Nome: parte dun nome de bloque, ou un patrón con * e ?. Atributo: un valor (ou TAG=valor) que teñen os atributos dunha referencia. Xeometría: seleccione obxectos ou unha referencia de bloque, e listanse, o mellor primeiro, os bloques cuxa forma se parece en polo menos un 85 %; o tamaño, a rotación e o espello non contan. As referencias atopadas no espazo aberto quedan seleccionadas, listas para o seguinte comando. |
| `BURST` |  | Explota referencias de bloque e conserva o que din os seus atributos: cada valor convértese en texto na capa do atributo. |
| `BVHIDE` | `BVH` | No editor de bloques: oculta obxectos no estado de visibilidade actual. |
| `BVSHOW` | `BVSH` | No editor de bloques: mostra os obxectos que o estado de visibilidade actual oculta (aparecen esvaecidos para escoller). |
| `BVSTATE` | `BVS` | No editor de bloques, nun bloque con estados de visibilidade: cambia a un estado, ou engade, renomea ou elimina un. |
| `CAL` |  | Calcula unha lonxitude ou un número: + − * / e paréntese, tal como os escribe en calquera lugar |
| `CENTERLINE` | `CL` | Liña central entre dúas liñas: a medio camiño entre elas, ou ao longo da bisectriz cando se atopan (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Marca de centro: unha cruz no centro dun círculo ou arco, con liñas de centro ata un pouco máis aló (CM) |
| `CHAMFER` | `CHA` | Biselar a esquina entre dúas liñas (D dúas distancias, A lonxitude e ángulo, P cada esquina dunha polilínea) |
| `CHSPACE` |  | CHSPACE: move obxectos entre unha folla e o modelo a través dunha vista. Escálanse e xíranse para que se vexan igual desde o outro lado. Nunha folla vanse ao modelo; cando traballa a través dunha vista (MSPACE) veñen á folla. |
| `CIRCLE` | `C` | Centro e raio, diámetro, 2 ou 3 puntos |
| `CLASS` |  | Pon os obxectos seleccionados nunha clase, ou sen selección fixa a clase activa (? lístaas) |
| `CLASSES` | `CLS` | O panel Clases: as clases ordenan obxectos entre capas; mostralas, ocultalas e dales estilo, e sobrescribilas por vista (CLS) |
| `COMMANDLINE` | `CMDLINE` | Acopla ou fai flotar a liña de comandos, deixala nunha soa liña, fixar as súas liñas de historial, ou abrir o historial (F2) |
| `COMPARESETTINGS` | `CMPSET` | Compara estilos de cota, estilos de texto, capas, follas ou unidades: dous neste debuxo, ou este debuxo contra outro aberto, e copia un valor de un ao outro. |
| `CONSTRAINTBAR` | `CBAR` | Mostra ou oculta as barras de restricións (Showall / Hideall, ou por obxecto) |
| `COPY` | `CO`, `CP` | Copia obxectos, tantas veces como faga clic |
| `COPYBASE` |  | Copia obxectos ao portapapeis cun punto base que escolle |
| `COPYCLIP` |  | Copia obxectos ao portapapeis (Ctrl+C); PASTECLIP coloca os obxectos |
| `COUNT` | `BCOUNT` | Conta referencias de bloque: escolla unha para seleccionar e contar cada referencia do seu bloque |
| `COUNTTABLE` |  | Coloca unha táboa de contadores de bloques |
| `CREDITS` |  | Pon os créditos da Biblioteca no debuxo como táboa. Execútao de novo para actualizar a táboa cos elementos do debuxo agora. |
| `CURSORSIZE` |  | O tamaño da cruz: 100 a fai ir de bordo a bordo do debuxo (Configuración › Cursor › Pantalla completa) |
| `CUTCLIP` |  | Corta obxectos ao portapapeis (Ctrl+X): copia e despois borra |
| `CYLINDER` | `CYL` | Un cilindro: centro, raio e altura (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Lista bloques, os seus atributos e propiedades de obxectos como táboa no debuxo ou nun ficheiro CSV |
| `DATALINK` | `DL` | Unha táboa a partir dun ficheiro CSV que recorda o ficheiro, para poder lelo de novo |
| `DATALINKUPDATE` | `DLU` | Lee de novo o ficheiro dunha ligazón de datos e reenche as súas táboas |
| `DCALIGNED` | `DCALI` | Restrición dimensional: distancia real entre puntos, un punto e unha liña, ou dúas liñas |
| `DCANGULAR` | `DCANG` | Restrición dimensional: ángulo entre dúas liñas, ou dun arco |
| `DCCONVERT` |  | Converte cotas debuxadas sobre xeometría restrinxible en restricións dimensionais |
| `DCDIAMETER` | `DCDIA` | Restrición dimensional: diámetro dun círculo ou arco |
| `DCDISPLAY` |  | Mostra ou oculta as restricións dimensionais do debuxo |
| `DCHORIZONTAL` | `DCHOR` | Restrición dimensional: distancia horizontal |
| `DCLINEAR` | `DCLIN` | Restrición dimensional: distancia horizontal ou vertical, desde onde a coloca |
| `DCRADIUS` | `DCRAD` | Restrición dimensional: raio dun círculo ou arco |
| `DCVERTICAL` | `DCVER` | Restrición dimensional: distancia vertical |
| `DELBLOCKS` |  | Eliminar bloques: cada referencia (tamén as aniñadas, en cada folla) e as definicións |
| `DELCONSTRAINT` | `DELCON` | Retira cada restrición (xeométrica e dimensional) dos obxectos que seleccione |
| `DELOPENING` |  | Saca unha porta ou xanela dun muro. |
| `DESCRIBE` | `DESC` | Di o que contén o debuxo: cantos obxectos, de que tipo, de que tamaño, o que está seleccionado. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Borra a selección (Esc) |
| `DETAILS` | `DET` | Os detalles propios da súa empresa, atopados segundo o que está debuxando: buscar, engadir un bloque, listar, retirar, activar ou desactivar as ofertas. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Debuxa un diagrama a partir de texto: un diagrama de fluxo Mermaid, un diagrama de compoñentes PlantUML, D2, unha lista de orixe e destino ou XML de draw.io, como bloques e conectores editables |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distancia real entre dous puntos |
| `DIMANGULAR` | `DAN`, `DIMANG` | Ángulo entre dúas liñas, dun arco, ou por tres puntos |
| `DIMARC` | `DAR` | Cota de lonxitude de arco: a distancia ao longo dun arco, co símbolo de arco (DAR) |
| `DIMASZ` |  | Opción de cota: tamaño da frecha |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cotas apiladas desde unha liña de base |
| `DIMBREAK` | `DBREAK` | Rompe as liñas de cota e de extensión onde cruzan outros obxectos (Auto), entre dous puntos (Manual), ou quita as roturas |
| `DIMCONSTRAINT` | `DCON` | Restricións dimensionais: lineais, aliñadas, angulares, radio, diámetro, converter |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Unha cadea de cotas, cada unha desde o extremo da anterior |
| `DIMDEC` |  | Opción de cota: cifras decimais |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diámetro dun arco ou círculo |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Libera as cotas dos obxectos aos que están atadas (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Cambia o texto da cota (Inicio, Texto novo, Xirar) ou inclina as liñas de extensión (Oblicuo) |
| `DIMEXE` |  | Opción de cota: extensión máis aló da liña de cota |
| `DIMEXO` |  | Opción de cota: desfasamento desde a orixe |
| `DIMGAP` |  | Opción de cota: espazo ao redor do texto |
| `DIMINSPECT` |  | Cota de inspección: un marco ao redor do valor cunha etiqueta e cada canto se comproba a peza |
| `DIMJOGGED` | `DJO`, `JOG` | Cota de raio quebrado: un raio debuxado desde un punto máis próximo cando o centro está lonxe (DJO) |
| `DIMJOGLINE` | `DJL` | Engade un símbolo de quebra a unha liña de cota lineal ou aliñada, para mostrar que a distancia non está debuxada a escala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distancia horizontal ou vertical (R para calquera ángulo) |
| `DIMLUNIT` |  | Opción de cota: formato de lonxitude (1 científico, 2 decimal, 3 enxeñaría, 4 arquitectónico, 5 fraccionario) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cota de ordenada: a distancia X ou Y dun punto desde a orixe do UCS, sobre unha referencia (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Sobrescribe as variables de cota nas cotas seleccionadas sen cambiar o seu estilo; Clear devolve o estilo (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Raio dun arco ou círculo |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Liga os puntos dunha cota a obxectos, para que a siga e volva medir cando se movan (DRE) |
| `DIMSCALE` |  | Opción de cota: escala global (tamaños × isto) |
| `DIMSPACE` |  | Separación igual entre cotas paralelas, medida desde unha cota base (0 aliñaas, Auto é o dobre da altura do texto) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Crear, cambiar, fixar como actual, eliminar, aplicar e comparar estilos de cota con nome (o diálogo; -DIMSTYLE na liña de comandos) |
| `DIMTEDIT` | `DIMTED` | Move o texto da cota á esquerda, á dereita ou ao centro da liña de cota, ou xírao |
| `DIMTEXTUNIT` | `DTU` | Texto de cota en mm, cm, m ou km, ou nas unidades propias do debuxo: as cotas seleccionadas, senón as novas (DTU) |
| `DIMTXT` |  | Opción de cota: altura do texto |
| `DIST` | `DI` | Distancia e ángulo entre dous puntos |
| `DISTRIBUTE` |  | Espazar os obxectos seleccionados por igual, de lado a lado ou arriba e abaixo: pasos iguais entre centros, ou espazos iguais; os dous externos quedan |
| `DIVIDE` | `DIV` | DIVIDE (DIV): marcas que cortan unha liña, arco, círculo, polilínea, spline ou elipse en partes iguais. Puntos, ou con Bloque un bloque en cada marca. |
| `DOCUMENTS` | `DOCS` | Abre o panel Documentos: sacar e devolver debuxos, revisións, estados de publicación e aprobación dunha carpeta de proxecto |
| `DOOR` | `DR` | Pon unha porta nun muro. O lado onde fai clic é o lado ao que abre. |
| `DRAWORDER` |  | Cambia a orde de debuxo: leva os obxectos ao primeiro plano, envíaos ao fondo, ou ponos por riba ou por baixo doutros obxectos. |
| `DUPLICATE` | `DUP` | Unha copia que se move co punteiro: faga clic para depositala (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | As propiedades do debuxo: título, autor e o resto, e os seus propios pares nome e valor |
| `DXFOUT` |  | Descarga o debuxo como DXF R12 (Gardar conserva o seu propio formato) |
| `EATTEDIT` | `DDATTE` | Edita os atributos dunha referencia de bloque: valores, texto e propiedades, un atributo de cada vez |
| `ELLIPSE` | `EL` | Extremos do eixo e o outro semieixe |
| `ERASE` | `E`, `DELETE` | Retira obxectos |
| `EXPLODE` | `X` | Descompón polilíneas, bloques e cotas nas súas partes |
| `EXPORT` | `EXP` | Garda unha copia do debuxo nun tipo de ficheiro que escribe un complemento |
| `EXPORT3D` | `3DEXPORT` | Exporta o modelo 3D: GLB, OBJ ou STL |
| `EXPORTPOINTS` | `EXPPTS` | Escribe puntos, e os puntos de inserción dos bloques con un atributo como descrición, nun ficheiro CSV ou TXT (PNEZD, PENZD ou XYZ) para programas BIM e de topografía |
| `EXTEND` | `EX` | Alonga obxectos ata tocar outros: faga clic preto dun extremo, arrastre por varios, ou Shift+clic para recortar |
| `EXTRIM` |  | EXTRIM: escolla un bordo de corte e despois un lado. Recórtase todo o que cruce o bordo nese lado. As partes que se irían móstranse mentres move o punteiro. |
| `EXTRUDE` | `EXT` | Extrúe obxectos 2D pechados en sólidos (3D) |
| `FIELD` |  | Pon un campo nun texto, nunha celda dunha táboa ou nun atributo: unha data, o nome do ficheiro, o número de folla, unha propiedade do debuxo, a superficie ou lonxitude dun obxecto, ou unha fórmula |
| `FILLET` | `F` | Redondea ou cadra a esquina entre dous obxectos (R raio, P cada esquina dunha polilínea, M varias) |
| `FIND` |  | Busca e substitúe palabras no texto, nos valores dos atributos e no texto das cotas |
| `FLATTEN` |  | Fixa a altura (Z) e o espesor dos obxectos seleccionados a 0, tamén nos bloques que usan. |
| `FLOOR` |  | Escolla a planta onde debuxar, engada unha, ou mova ou copie a selección a ela. |
| `FLOORLAYERS` |  | Converte as plantas en capas co nome Floor-Layer, para un ficheiro que vai a alguén sen plantas. |
| `FLOORS` | `FLR` | Abre o panel Plantas: apila plantas nun mesmo espazo de modelo. |
| `GCCOINCIDENT` |  | Restrición: dous puntos encóntranse, ou un punto queda sobre un obxecto |
| `GCCOLLINEAR` |  | Restrición: dúas liñas quedan sobre unha mesma liña |
| `GCCONCENTRIC` |  | Restrición: dous círculos ou arcos comparten un centro |
| `GCEQUAL` |  | Restrición: dúas liñas quedan da mesma lonxitude, ou dous círculos/arcos do mesmo raio |
| `GCFIX` |  | Restrición: un punto ou un obxecto enteiro queda onde está |
| `GCHORIZONTAL` |  | Restrición: unha liña (ou dous puntos) queda horizontal |
| `GCPARALLEL` |  | Restrición: dúas liñas quedan paralelas |
| `GCPERPENDICULAR` |  | Restrición: dúas liñas quedan en ángulo recto |
| `GCSYMMETRIC` |  | Restrición: dous puntos, liñas ou círculos reflíctense un ao outro a través dunha liña |
| `GCTANGENT` |  | Restrición: unha liña e un círculo ou arco (ou dous deles) quedan tanxentes |
| `GCVERTICAL` |  | Restrición: unha liña (ou dous puntos) queda vertical |
| `GDSIN` | `GDS` | Ve unha disposición de CI (un ficheiro de fluxo GDSII): cada capa e tipo de datos como capa de debuxo, plana, en unidades de usuario; só para ver e medir (proba de laboratorio) |
| `GEOMCONSTRAINT` | `GCON` | Restricións xeométricas: horizontal, vertical, paralela, tanxente, coincidente… |
| `GLBOUT` |  | Exporta o modelo 3D como GLB (glTF) |
| `GRADIENT` | `GD` | Recheá unha área cun degradado de unha ou dúas cores |
| `GRID` |  | Fixa a cuadrícula: a distancia entre liñas, cada liña N-ésima como liña principal, ON ou OFF, ou Auto para seguir de novo o zoom |
| `GRIDMOVE` | `GM` | Move unha liña da cuadrícula e o que depende dela: os muros estíranse, os piares, burbullas e etiquetas móvense, as cotas seguen. |
| `GROUP` | `G` | GROUP (G): dálle aos obxectos seleccionados un nome compartido. Un clic nun deles selecciona entón todos. Enter no nome fai un grupo sen nome. |
| `GROUPEDIT` |  | GROUPEDIT: cambia un grupo. Escolla un dos seus obxectos ou dálle o seu nome, e despois Engadir ou Retirar obxectos, REName para renomealo, cambiar a súa descrición, ou dicir se un clic o selecciona completo. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Recheá unha área cun recheo sólido ou un patrón: faga clic dentro, ou seleccione obxectos pechados (H) |
| `HATCHEDIT` | `HE` | Cambia unha trama: patrón, escala, ángulo, orixe e a súa ligazón a un contorno. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Fai de novo as polilíneas do contorno dunha trama, ligadas a ela ou non |
| `HATCHTOBACK` |  | Envía cada trama detrás de todo o demais. |
| `HELP` | `?` | Esta lista |
| `HIDEOBJECTS` |  | Oculta os obxectos seleccionados ata UNISOLATEOBJECTS. Non se garda co debuxo. |
| `HISTORY` | `HIST` | HISTORY (HIST): as versións deste debuxo —copias conservadas neste computador cando Studio o garda, e as versións da nube— para abrir, restaurar e comparar co que cambiou, mostrado en cor. |
| `ID` |  | Coordenadas dun punto |
| `IMAGE` | `IM` | Dálle a CadCraft os ficheiros de imaxe que usa un debuxo (un DWG só garda onde estaban). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Pon unha imaxe (PNG ou JPEG) desde un ficheiro. |
| `IMAGECLIP` | `ICL` | Recorta unha imaxe a un rectángulo ou un polígono, ou quita o seu recorte. |
| `IMPORT` | `IMP` | Importa un ficheiro dun tipo que lle un complemento, a este debuxo |
| `INSERT` | `I`, `DDINSERT` | Coloca un bloque (S escala, R xira); F desde un ficheiro DWG/DXF, L desde a biblioteca |
| `INTERSECT` | `IN` | Conserva só o que os sólidos teñen en común (3D), ou a área que comparten as rexións 2D |
| `ISODRAFT` |  | ISODRAFT: debuxo isométrico activado ou desactivado, ou directamente sobre o plano Esquerdo, Superior ou Dereito. Mentres está activo, Orto e o seguimento polar seguen os dous eixes do plano, a cuadrícula dibúxase isométrica, e ELLIPSE ten Isocírculo. |
| `ISOLATEOBJECTS` | `ISOLATE` | Mostra só os obxectos seleccionados; o resto deste espazo queda oculto ata UNISOLATEOBJECTS. Non se garda co debuxo. |
| `ISOPLANE` |  | ISOPLANE: escolla o plano isométrico no que debuxar: Esquerdo, Superior ou Dereito. Enter pasa ao seguinte, como F5 faz mentres o debuxo isométrico está activo. |
| `JOIN` | `J` | Une liñas, arcos e polilíneas que se atopan extremo con extremo nunha polilínea; liñas sobre unha mesma liña nunha liña (J) |
| `LASER` | `LASERCUT` | Abre o panel Láser: envía capas a unha cortadora ou gravadora láser (código G GRBL) |
| `LASSOMODE` |  | Premer e arrastrar debuxa un lazo (1) ou un rectángulo (0) |
| `LAYDEL` |  | Elimina unha capa e cada obxecto que hai nela (no modelo, nas follas e nos bloques) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Abre o xestor de capas: cada capa nunha táboa |
| `LAYERPANEL` |  | Mostra o panel de capas |
| `LAYFRZ` |  | Conxela a capa de cada obxecto que escolla |
| `LAYGROUP` | `LG` | Agrupa capas en carpetas no panel Capas. |
| `LAYISO` |  | Illa as capas dos obxectos seleccionados (apaga cada outra capa) |
| `LAYLOCKFADE` |  | Fixa canto se esvaecen os obxectos en capas bloqueadas, e se un clic pode seleccionalos. |
| `LAYMCUR` |  | Fai actual a capa do obxecto que escolla |
| `LAYMRG` |  | Combina capas: os seus obxectos pasan a unha capa de destino, e as capas combinadas desaparecen |
| `LAYOFF` |  | Apaga a capa de cada obxecto que escolla |
| `LAYON` |  | Acende todas as capas |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Unha folla nova con cartela e unha vista |
| `LAYTHW` |  | Descongela todas as capas |
| `LAYUNISO` |  | Volve acender as capas que LAYISO apagou |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Converte texto escrito con tipos de letra vietnamitas antigos (tipos TCVN3 / ABC como .VnTime, e VNI como VNI-Times) a Unicode. Ese texto xa se mostra como se le; isto reescríbeo de forma definitiva, cun cómputo e un paso de desfacer. |
| `LENGTHEN` | `LEN` | Alonga ou acurta liñas, arcos e polilíneas: nunha cantidade, unha porcentaxe, ata un total, ou arrastrando (LEN) |
| `LIBRARY` | `LIB` | O panel da biblioteca: colocar elementos, buscar actualizacións, créditos |
| `LIMITS` |  | Fixa os límites do debuxo: ON, OFF, ou as esquinas inferior esquerda e superior dereita. Con límites ON, os puntos fóra deles son rexeitados |
| `LINE` | `L` | Segmentos rectos, cada un o seu propio obxecto |
| `LINETYPE` | `LT`, `CELTYPE` | O tipo de liña que reciben os obxectos novos (por capa, por bloque, ou un con nome) |
| `LINKVIEWS` | `SYNCVIEWS` | Desprazar e ampliar todos os paneis xuntos (pantalla dividida), para comparar dous debuxos ou revisións |
| `LISPEDIT` | `VLIDE` | LISPEDIT (ou VLIDE) abre o editor LISP: unha xanela para escribir, cargar e probar unha rutina. Cargar no debuxo le todos os formularios, como facelo cargando o ficheiro con APPLOAD, e fai os seus comandos. Executar selección avalía os formularios seleccionados, ou o formulario onde está o cursor. A consola mostra o que imprimiu a rutina e cada erro coa súa liña. O paréntese correspondente márcase mentres escribe e Enter sangra a liña nova. Novo, Abrir e Gardar traballan cun ficheiro .lsp. As listas ao lado do texto mostran as funcións que define a rutina, as que chama e este LISP aínda non ten, e todas as que ten. A xanela non bloquea o debuxo, así que unha rutina pode pedir puntos; Parar ou Esc remata unha rutina en execución. |
| `LIST` | `LI`, `LS` | Describe obxectos no historial |
| `LTSCALE` | `LTS` | A escala de tipo de liña do debuxo (cada trazo e oco se multiplica por ela) |
| `LWDISPLAY` | `LWT` | Mostra ou oculta os grosores de liña na pantalla (o botón LWT da barra de estado) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | O grosor de liña que reciben os obxectos novos (por capa, por bloque, predeterminado, ou mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | capas de mapa baixo o espazo de modelo: o sistema de coordenadas do debuxo, mosaicos, WMS, WMTS, ArcGIS, imaxes |
| `MASSPROP` |  | MASSPROP: propiedades de sección de rexións e obxectos pechados: área, perímetro, centroide, momentos e produto de inercia, raios de xiro e os eixes principais. Exacto para liñas e arcos. Pode escribir o informe nun ficheiro de texto. |
| `MATCHPROP` | `MA`, `PAINTER` | Igualar propiedades: copia a capa, a cor e máis dun obxecto a outros (MA) |
| `MEASURE` | `ME` | MEASURE (ME): unha marca cada lonxitude dada ao longo dunha liña, arco, círculo, polilínea, spline ou elipse, desde o extremo máis próximo ao seu punto. Puntos, ou con Bloque un bloque en cada marca. |
| `MEASUREGEOM` | `MEA` | Mide unha distancia, un raio, un ángulo ou unha área (MEA) |
| `MINSERT` |  | MINSERT: coloca un bloque en filas e columnas dunha vez. Cada un é unha referencia propia, así que pode mover ou borrar calquera deles. |
| `MIRROR` | `MI` | Espella obxectos a través dunha liña |
| `MLEADER` | `MLD`, `MLEAD` | Multirreferencia: unha frecha, unha referencia e unha nota, como un só obxecto (MLD) |
| `MLEADERALIGN` | `MLA` | Aliña varias multirreferencias cunha delas nunha dirección, a igual distancia, ou repartidas entre dous puntos (MLA) |
| `MLEADERCOLLECT` | `MLC` | Xunta varias multirreferencias nunha: os seus bloques nunha fila ou columna, ou as súas notas unha debaixo doutra (MLC) |
| `MLEADEREDIT` | `MLE` | Engade liñas de referencia a unha multirreferencia ou quítaas; cambia o seu contido entre texto e bloque (MLE) |
| `MLINE` |  | Debuxa liñas paralelas xuntas, unidas nas esquinas. |
| `MOVE` | `M` | Move obxectos por un punto base e un segundo punto |
| `MSPACE` | `MS` | Traballa no modelo a través dunha vista da folla aberta (ou faga dobre clic dentro da vista). |
| `MTEXT` | `MT`, `T` | Texto de parágrafo: arrastre o seu ancho e despois escriba no sitio; Enter comeza un parágrafo novo (T) |
| `MVIEW` | `MV` | Unha vista sobre o modelo, nunha disposición |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vistas con nome: garda a vista na pantalla (ou unha xanela) cun nome e volva a ela (NV) |
| `NCOPY` |  | Copia obxectos dunha referencia de bloque ou dun debuxo ligado ao debuxo, sen explotala. |
| `NEARBY` |  | Di o que hai preto do cursor, o máis próximo primeiro, coa distancia e o lado. |
| `NEW` |  | Comeza un debuxo novo |
| `OBJECTSCALE` | `OBJSCALE` | Escalas de anotación de texto e cotas anotativos: engadir unha escala, eliminar unha, engadir a escala actual, ou listalas (cada vista as mostra ao tamaño da súa propia escala) |
| `OBJOUT` |  | Exporta o modelo 3D como OBJ |
| `OFFICESTANDARD` | `OFFSTD` | O estándar da oficina: alturas de texto en papel, capas, campos da cartela e plantillas nun só rexistro. Mostra o que está en vigor e de onde vén; Importar un rexistro .json a este debuxo, engadir as capas da oficina que lle faltan, listar os campos da cartela. |
| `OFFSET` | `O` | Copias paralelas a unha distancia |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: como OFFSET pecha os ocos nas esquinas exteriores dunha polilínea. 0 alonga os segmentos, 1 engade un arco, 2 engade un corte recto. Conservado para esta sesión. |
| `OLELIST` | `OLES` | Lista os obxectos OLE que leva un debuxo e pon unha copia da imaxe dun deles onde escolla |
| `OPEN` |  | Abre un DWG ou DXF deste computador |
| `OPENIN3D` |  | Abre este debuxo na aplicación de modelado 3D, nunha pestana nova (non se envía nada) |
| `OPTIONKEYS` | `OPTKEYS` | Dá ás opcións dos comandos letras propias (ARRAY.PO, P), nun ficheiro de texto |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Abre o menú de enganche a obxectos: escolla que enganches están activos. Tamén un clic dereito en Enganche na barra de estado. |
| `OVERKILL` |  | Elimina obxectos duplicados e funde liñas e arcos que se solapan ou que están extremo con extremo, dentro dunha tolerancia. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | O panel Parámetros: parámetros de usuario e restricións dimensionais nunha mesma táboa |
| `PARTSLIST` | `PLIST` | Unha táboa de lista de pezas de cada peza normalizada e perfil de aceiro colocado desde a Biblioteca |
| `PASTEAREA` | `PAREA` | Pega unha área copiada en MarkupCraft (Copiar área) ao seu tamaño real, como imaxe. |
| `PASTEBLOCK` |  | PASTEBLOCK: pega o copiado como un só bloque. O bloque recibe un nome propio; RENAME dalle o seu. |
| `PASTECLIP` |  | Pega o portapapeis: segue o cursor, faga clic onde vai (Ctrl+V) |
| `PASTEORIG` |  | Pega o portapapeis nas coordenadas desde as que se copiou (Ctrl+Shift+V) |
| `PDF` |  | Dálle a CadCraft os ficheiros PDF que usan as subcapas do debuxo |
| `PDFADJUST` |  | Esvaece, cambia o contraste, pasa a monocromo ou apaga unha subcapa PDF |
| `PDFATTACH` | `PDFATT` | Adxunta unha páxina PDF como subcapa (PDFATTACH) |
| `PDFCLIP` |  | Recorta unha subcapa PDF a un rectángulo ou polígono |
| `PDFIMPORT` | `PDFIM` | Converte as liñas, os recheos e o texto dunha páxina PDF en obxectos do debuxo (PDFIMPORT) |
| `PDFLAYERS` |  | Activa ou desactiva as capas propias dunha subcapa PDF |
| `PEDIT` | `PE` | Edita unha polilínea: pechar, abrir, unir, ancho, axustar curva, spline, descurvar, xerar tipo de liña, inverter; liñas, arcos e splines pódense converter en polilíneas |
| `PENPRESSURE` |  | Se a presión dun trazo do lapis fixa o grosor de liña do que fan SKETCHFIX e SKETCHLIVE (activado por defecto). Consérvase neste navegador. |
| `PHOTOSKETCH` | `PSK` | Converte unha foto dun esbozo a man sobre papel en liñas e arcos a unha escala, enderezando a perspectiva e dando a cada cor de lapis a súa propia capa. |
| `PICKSTYLE` |  | PICKSTYLE: se seleccionar un obxecto dun grupo selecciona todo o grupo (1, o valor inicial) ou só ese obxecto (0). Conservado para esta sesión. |
| `PLAN` |  | Xira a vista para que o eixe X do UCS (o UCS actual, un UCS gardado ou o Mundo) quede nivelado na pantalla. Nada do debuxo se move. |
| `PLINE` | `PL` | Unha polilínea de segmentos de liña e arco |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Trazar a PDF: unha disposición, ou o modelo a unha escala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Táboas de estilo de trazado: fixa como se imprime cada cor (cor, negro, gris, tinta, grosor de liña); consérvase co debuxo (STYLESMANAGER) |
| `POINT` | `PO` | Obxectos punto |
| `POINTCLOUD` | `PC` | a nube de puntos anexada: corte, altura, espesor, cor, tamaño, visible, zoom, desanexar |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | anexa unha nube de puntos (LAS, LAZ, XYZ, PTS) baixo o debuxo |
| `POLARANG` |  | O paso do seguimento polar en graos (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Un polígono regular |
| `PRESSPULL` |  | Empurra ou tira dunha cara dun sólido (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Abre o panel Propiedades (tamén Ctrl+1, ou faga dobre clic nun obxecto) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Pregue o panel Propiedades ao bordo da xanela |
| `PSPACE` | `PS` | Sae da vista na que traballa e volve á folla (ou faga dobre clic fóra dela). |
| `PUBLISH` | `-PUBLISH` | Trazar varias ou todas as follas nun só PDF (unha páxina e un marcador por folla) |
| `PURGE` | `PU` | Elimina definicións de bloques que non usa nada |
| `QDIM` |  | Cota rápida: cota varios obxectos de unha vez (continua, de base, escalonada, ordenada, radio ou diámetro) |
| `QPMODE` | `QP` | Propiedades rápidas polo cursor activadas ou desactivadas |
| `QSELECT` | `QS` | Selección rápida: cada obxecto dun tipo cuxa capa, cor, tamaño ou nome coincida (QS) |
| `RASTERSNAP` |  | Activa ou desactiva o enganche ás liñas das follas escaneadas. |
| `RAY` |  | Semirrecta: unha liña de construción desde un punto, sen fin dun lado. |
| `RECOVER` |  | Abre un DXF ou DWG danado: salta o que non se pode ler en lugar de rexeitar o ficheiro, di o que saltou, e despois comproba e arranxa o debuxo como fai AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Unha polilínea pechada desde dúas esquinas |
| `REDLINE` | `RDL` | Anotación a revisión: le un paquete de anotacións de MarkupCraft, acepta ou rexeita cada cambio, pon nube de revisión nos aceptados cun rexistro de revisión, e garda o ficheiro de respostas (RDL) |
| `REDO` |  | Refai o que se desfixo |
| `REFCLOSE` |  | Remata a edición dun bloque no seu lugar: gárdao, ou descarta os cambios |
| `REFEDIT` |  | Edita un bloque no seu lugar, onde está unha referencia del, con o resto do debuxo esvaecido; REFCLOSE gárdao |
| `REGEN` | `RE` | Reconstrúe o que se debuxa nesta pestana a partir do debuxo |
| `REGENALL` | `REA` | Reconstrúe o que se debuxa en cada pestana, panel e debuxo aberto |
| `REGION` | `REG` | REGION (REG): fai rexións planas a partir de obxectos pechados, ou de liñas, arcos e polilíneas que pechan un lazo extremo con extremo. UNION, SUBTRACT e INTERSECT combinan despois rexións, e MASSPROP dá as súas propiedades de sección. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Rexistra varios escaneos: colócaos nun mesmo marco por pares de puntos escollidos ou por obxectivos, refinados con ICP, e exporta un LAS ou E57 |
| `REINIT` |  | Recarga o seu ficheiro de alias |
| `RENAME` | `-RENAME`, `REN` | Renomea unha capa ou un bloque (cada obxecto ou referencia segue o cambio) |
| `REVCLOUD` | `RC` | Nube de revisión: rodea un rectángulo, un polígono, un camiño a man alzada ou un obxecto (RC) |
| `REVOLVE` | `REV` | Xira obxectos 2D pechados arredor dun eixo para facer sólidos (3D) |
| `ROTATE` | `RO` | Xira obxectos arredor dun punto base |
| `SAMPLES` | `SAMPLE` | Abre un dos debuxos de exemplo de CadCraft (un conxunto arquitectónico, un as-built) para aprender |
| `SAVE` | `QSAVE` | Descarga o debuxo no seu formato (DWG ou DXF) |
| `SAVEAS` |  | Descarga o debuxo como DWG ou DXF: escolla cal |
| `SAYSEL` |  | Di o que está seleccionado, unha frase por obxecto. |
| `SCALE` | `SC` | Escala obxectos arredor dun punto base |
| `SCALELISTEDIT` | `SCALELIST` | Engade, edita e elimina as escalas propias do debuxo; aparecen nas listas de escalas de vista e de trazado e gárdanse no ficheiro (SCALELIST) |
| `SCANALIGN` | `SCL` | Aliña unha folla escaneada a dous puntos: move, xira e, se o escolle, escala. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Insire un debuxo escaneado: un PNG, JPEG ou TIFF (unha páxina ou todas as páxinas dun ficheiro de varias) ou unha páxina PDF que é unha imaxe. |
| `SCANCLEAN` | `SCC` | Pon unha folla escaneada en branco e negro e elimina as manchas. |
| `SCANCROP` | `SCR` | Recorta unha folla escaneada a unha xanela. |
| `SCANDESKEW` | `SCD` | Atopa o ángulo no que caen as liñas longas dunha folla escaneada e endereza a folla cando acepta o ángulo. |
| `SCANERASE` | `SCE` | Borra unha área dunha folla escaneada: un rectángulo, un polígono ou un lazo. |
| `SCANINFO` | `SCI` | Mostra o ficheiro orixinal dunha folla escaneada e os pasos dados desde entón. |
| `SCANSCALE` | `SCS` | Escala unha folla escaneada: escolla dous puntos nela e escriba a distancia real entre eles. |
| `SCANTRACE` | `SCT` | Traza unha folla escaneada en liñas e arcos nunha capa nova, cunha tolerancia que vostede fixa. O texto e as tramas quedan como mapa de bits. |
| `SELECT` |  | Selecciona obxectos agora (para P, Anterior, no seguinte comando) |
| `SELECTALL` | `AI_SELALL` | Selecciona cada obxecto que pode editar nesta pestana (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Selecciona cada obxecto como os que escolla: mesmo tipo, capa e cor (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Mostra o panel Conxunto de follas: follas de moitos debuxos, numeradas, publicadas nun só PDF. |
| `SHORTCUTS` | `KEYS` | Dá a calquera comando unha tecla propia (Ctrl ou Alt cunha letra, ou unha tecla de función libre), gardada neste navegador ou aplicación de escritorio. |
| `SHXFONTS` | `SHX` | Dá a CadCraft tipos de letra SHX desde unha carpeta ou ficheiros, para que os estilos de texto que os nomean debuxen con eles (listar, retirar, inverter) |
| `SKETCHFIX` | `SKF` | Debuxa trazos a man alzada; cada un convértese nunha liña, círculo, arco, rectángulo ou polilínea limpa, cadrada e unida ás outras. |
| `SKETCHLIVE` | `SKL` | Esboza cun lapis: cada trazo convértese nunha liña, círculo, arco ou rectángulo precisos ao levantar o lapis, enganchados ao debuxo, co seu tamaño para escribir enriba. |
| `SPLINE` | `SPL` | Debuxa unha spline por puntos (ou cun polígono de control), ou convirte unha polilínea nunha |
| `SPLINEDIT` | `SPE` | Edita unha spline: puntos de axuste, puntos de control e pesos, abrir ou pechar, inverter, ou convertila en polilínea |
| `SPLIT` |  | Divide a área de debuxo en paneis (como VPORTS no modelo; tamén desde unha folla) |
| `STEELMEMBER` | `SMEMBER` | Un elemento de aceiro en 3D a partir dunha sección estándar: dous puntos (unha viga) ou un punto base e unha altura (Columna) |
| `STLOUT` |  | Exporta o modelo 3D como STL (milímetros) |
| `STRETCH` | `S` | Estirar: arrastre unha xanela de cruzamento sobre os extremos para mover; o que está dentro se move, o resto queda (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Estilos de texto: o tipo de letra, a altura, a anchura e a inclinación que toma o texto novo (o diálogo; -STYLE na liña de comandos) |
| `SUBTRACT` | `SU` | Quita sólidos a outros (3D), ou rexións 2D a outras rexións |
| `SWBOUT` | `SWMACRO` | Descarga unha macro para SolidWorks (.swb) que reconstrúe o modelo como un só esbozo restrinxido |
| `SWEEP` |  | Fai pasar obxectos 2D pechados por unha traxectoria (liña, polilínea, arco, círculo) para facer sólidos (3D) |
| `TABLE` | `TB` | Fai unha táboa: filas e columnas, ou desde celdas dunha folla de cálculo no portapapeis ou un ficheiro CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Edita unha táboa: escriba nunha celda, insira e elimine filas e columnas, tamaños, celdas combinadas, aliñación |
| `TABLEEXPORT` |  | Garda o que mostra unha táboa como ficheiro CSV |
| `TABLEPASTE` | `PASTETABLE` | Fai unha táboa a partir de celdas dunha folla de cálculo no portapapeis |
| `TABLESTYLE` | `TS` | Estilos de táboa: alturas de texto, aliñación, marxe e bordos para as filas de título, cabeceira e datos |
| `TAGS` |  | Etiquetas nas referencias de bloque: define unha etiqueta (tipo, valores permitidos, bloques aos que se aplica), fíxaa nas referencias seleccionadas, e lístaas como un cadro que pode gardar como CSV |
| `TEXT` | `DT`, `DTEXT` | Texto dunha liña; Enter comeza a liña seguinte |
| `TEXTEDIT` | `ED`, `DDEDIT` | Edita texto no seu lugar: escolla un texto (ou faga dobre clic nel) (ED) |
| `TEXTMASK` | `TMASK` | Pon unha máscara de fondo detrás dos textos (o fondo do debuxo ou unha cor), ou quítaa. |
| `TEXTTOFRONT` |  | Leva todo o texto, cotas e referencias por diante de todo o demais. |
| `TOOLBAR` |  | Escolla o que mostran os botóns da barra: iconas e texto, só iconas ou só texto (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Pon a barra de ferramentas arriba, abaixo, á esquerda ou á dereita da xanela |
| `TOOLBARROWS` |  | Escolla cantas filas usa a barra de ferramentas: axustar, 2 ou 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Fai as barras por riba do debuxo estándar ou compactas |
| `TOUCHCROSSHAIR` | `TCX` | Cruz desfasada para debuxar cun dedo: un dedo move unha cruz que queda enriba e ao lado, para que o dedo non tape o punto. Levantar o dedo non escolle nada; o botón Clic ou un toque cun segundo dedo escolle na cruz, e manter Clic mentres move arrastra. Manter premido ou o botón Enter é Enter. Dous dedos desprazan e amplían. Opcións: ON, OFF, Auto (activo só onde un dedo é o único punteiro), Distance, Side. |
| `TOUR` | `TUTORIAL` | Fai de novo o percorrido de seis pasos do primeiro debuxo |
| `TRIM` | `TR` | Corta obxectos ata onde outros os cruzan: faga clic nun anaco, arrastre por varios, ou Shift+clic para estender |
| `TRIMEXTENDMODE` |  | Como comezan TRIM e EXTEND: 1 Rápido (cada obxecto é un bordo de corte ou límite), 0 Estándar (escolla primeiro os bordos) |
| `TTR` |  | Un círculo tanxente a dous obxectos, con un raio que vostede dá (igual que CIRCLE T). |
| `TURNLEFT` |  | Xira a vista 90° á esquerda (en sentido antihorario): UCS Z -90, e a vista segue. Nada do debuxo se move. |
| `TURNRIGHT` |  | Xira a vista 90° á dereita (en sentido horario): UCS Z 90, e a vista segue. Nada do debuxo se move. |
| `TURNWORLD` |  | Volve ao mundo: UCS Mundo, e a vista queda nivelada de novo. |
| `TXT2MTXT` | `T2M` | Une textos dunha liña nun só texto de parágrafo, de arriba abaixo. |
| `UCS` |  | O seu propio sistema de coordenadas: unha orixe e un eixo X (orixe, ángulo Z, 3point, OBject, Previous, World, NAmed). Os puntos que escribe, o orto, o seguimento polar, a cuadrícula e o texto novo seguen el; a vista xira para que o seu eixo X quede nivelado. Nada do debuxo se move. |
| `UNDO` | `U` | Desfai o último comando |
| `UNGROUP` |  | UNGROUP: desfai grupos. Seleccione obxectos dos grupos, ou dea un Nome. Os obxectos quedan no debuxo. |
| `UNION` | `UNI` | Une sólidos nun só (3D), ou rexións 2D nunha soa rexión |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Mostra de novo cada obxecto oculto por ISOLATEOBJECTS ou HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Como se escriben e se mostran as lonxitudes: decimal, pés e polgadas, fraccións (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Calcula de novo os campos, e escolla cando se actualizan por si mesmos |
| `USDOUT` |  | Exporta o modelo 3D como USD (texto .usda, binario .usdc ou un paquete .usdz) |
| `VIEW` | `-VIEW`, `V` | Vistas 3D estándar, en perspectiva ou paralelas (3D) |
| `VIEWBASE` | `FLATSHOT` | Pon unha vista 2D plana dos sólidos 3D (alzado, planta, lateral ou isométrica, liñas ocultas en trazos) nunha folla ou no modelo |
| `VIEWLABEL` | `VL` | Un título de vista nunha folla que mostra o nome da vista da súa vista, e cambia con ela. |
| `VOICE` |  | Activa ou desactiva os comandos falados. Recoñécense neste computador. |
| `VPCLIP` |  | Recorta unha vista de folla a un obxecto pechado ou un polígono debuxado; Delete devólvea a un rectángulo |
| `VPLAYER` |  | Conxela ou descongela capas só en algunhas vistas (Freeze, Thaw, Reset), e escolle que capas empezan conxeladas nas vistas novas (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Divide a área de debuxo en paneis, cada un coa súa propia vista (nunha folla: unha vista, como MVIEW) |
| `VPVIEW` |  | Fixa o que mostra unha vista: escolla unha xanela no modelo |
| `VSCURRENT` | `VS`, `SHADEMODE` | Estilo visual da vista 3D: sombreado, bordos, liña oculta, estrutura de alambre, raios X |
| `WALL` | `WA` | Debuxa muros 2D como unha polilínea. Únense, e levan portas e xanelas. |
| `WALLARC` | `WARC` | Debuxa un arco de muros. Os muros en planta son rectos, así que o arco se debuxa como pequenos muros rectos (15 graos cada un) que se unen. |
| `WALLDELSEG` |  | Elimina un anaco dun muro entre dous puntos. O que queda segue como un ou dous muros. |
| `WALLDIM` |  | Escriba un valor novo para unha cota: o muro no seu extremo afastado móvese cadrado respecto de si mesmo, o muro do primeiro extremo mantense, e os muros unidos a el seguen. |
| `WALLDISJOIN` |  | Escolla un muro preto dun extremo para non permitir unións nese extremo: o extremo debúxase cadrado e nada o segue. Escóllao de novo para permitilas. |
| `WALLGRID` |  | Bloquea un muro a unha liña de cuadrícula: ao longo dela, ou un extremo sobre ela. Mova a liña con GRIDMOVE e o muro segue. |
| `WALLHOLD` |  | Aliñar e bloquear: un muro mantén o seu lugar fronte a outro muro (na súa liña, ou á distancia que ten). Se un se move, o outro segue. |
| `WALLHOLDDIM` |  | Bloquea a distancia entre dous muros paralelos. Se un se move, o outro segue para mantela. |
| `WALLHOLDS` |  | Lista os bloqueos dos muros. |
| `WALLJOINS` |  | Dálle a cada muro dun debuxo máis antigo o seu identificador e garda as uniones entre eles. Isto pasa tamén no primeiro cambio que fai. |
| `WALLJOINSTYLE` |  | Faga clic nunha esquina onde dous muros se atopan extremo con extremo para cambiar como se debuxa: inglete, recto, cadrada. T cambia cal muro pasa. |
| `WALLOFFSET` | `WO` | Move un muro en ángulo recto a si mesmo unha distancia (os muros unidos a el seguen), ou fai unha copia a esa distancia. |
| `WALLPICK` |  | Fai muros nunha liña ou polilínea do debuxo, cos anacos unidos a ela se di Si. |
| `WALLPOLY` | `WP` | Debuxa muros ao redor dun polígono regular de 3 a 64 lados, como POLYGON. |
| `WALLRECT` | `WR` | Debuxa catro muros unidos desde dúas esquinas opostas, como RECTANG. |
| `WALLREJOIN` |  | Fai de novo un muro a partir de dúas partes del. A primeira conserva o seu lugar no debuxo. |
| `WALLROT` |  | Debuxa catro muros unidos como un rectángulo xirado a calquera ángulo: o primeiro lado, despois ata onde vai o outro. |
| `WALLSPLIT` | `WS` | Corta un muro en dous nun punto ou onde cruza outro muro. As partes seguen unidas salvo que pida un oco ou extremos libres. As portas e xanelas vanse coa súa parte. |
| `WALLSPLITGAP` |  | Corta un muro deixando un oco: escriba o oco, escolla o muro e despois o punto. As partes quedan con extremos libres e poden volver unirse. |
| `WALLSTRETCH` |  | Estirar cunha xanela: os extremos de muro dentro dela móvense, os muros enteiramente dentro móvense enteiros, e os que se apoian nos seus lados deslízanse con eles. |
| `WALLTAN` |  | Continúa un muro cun arco que sae del ao longo do muro (debuxado como pequenos muros rectos). |
| `WALLTRACE` |  | Fai muros ao redor da menor área pechada de liñas e muros ao redor do punto onde fai clic. |
| `WALLUNHOLD` |  | Quita os bloqueos dun muro (e os bloqueos doutros muros a el). |
| `WBLOCK` | `W`, `-WBLOCK` | Escribe un bloque, algúns obxectos ou o debuxo completo nun novo ficheiro DWG ou DXF (W) |
| `WEDGE` | `WE` | Unha cuña: dúas esquinas e unha altura; inclínase lonxe da primeira esquina (3D) |
| `WHEREAMI` | `WHERE` | Di onde está o cursor. |
| `WHOHAS` |  | Di quen ten un debuxo aberto. CadCraft Studio garda un pequeno ficheiro de bloqueo xunto a cada debuxo aberto (Plan.dwg.cclock: quen, desde cando, que versión) e o retira ao pechar. Opcións: Current (o debuxo aberto), File (escoller un), FOlder (cada debuxo dunha carpeta que está aberto nalgún sitio; isto tamén permite a Studio gardar ficheiros de bloqueo nesa carpeta), Path (escribir un), Name (o nome que ven os demais). Un bloqueo que non se actualiza durante cinco minutos dise obsoleto. Non dispoñible nun navegador. |
| `WINDOW` | `WN` | Pon unha xanela nun muro. |
| `XATTACH` | `XA` | Ligar outro DWG ou DXF a este debuxo, mostrado só de lectura (XREF lístaos e recárgaos) |
| `XCLIP` | `XC` | Recorta referencias de bloque e debuxos ligados a un rectángulo ou polígono, ou quita o recorte. |
| `XLINE` | `XL` | Liña de construción, sen fin nos dous sentidos: por dous puntos, horizontal, vertical, cun ángulo, bisectando un ángulo, ou desfasada dunha liña. |
| `XREF` | `XR`, `-XREF` | Debuxos ligados (referencias externas): listar, adxuntar, recargar, converter en bloque, desligar |
| `ZOOM` | `Z` | Extensións, ou unha xanela |
