---
title: Novidades da 0.9 (anteriores)
summary: Tramas que seguen o seu contorno, grupos de capas, plantas apiladas, muros intelixentes 2D con portas e xanelas, estilos de texto e un editor de texto con formato, unha liña de comandos flotante, enganche á cuadrícula, dez xeitos de debuxar un arco e o panel de Documentos.
keywords: novidades 0.9, versión anterior, novidades, 0.9, notas de versión, rexistro de cambios, trama, trama asociativa, hatchedit, ficheiro pat, ficheiro de patróns, grupos de capas, laygroup, plantas, plantas apiladas, floorlayers, muros intelixentes, muro, porta, xanela, ferramentas de muro, estilo de texto, estilo, editor mtext, texto de parágrafo, formato, liña de comandos flotante, liña de comandos, área superior, compacta, enganche á cuadrícula, grid snap, f9, arco, panel de documentos, sacar, perfís de aceiro do Reino Unido, draw.io, texto tailandés, dxf r12, novidades, changelog, cambios, 0.8, 0.8.1, versión, novas funcións, autocompletar, fantasma, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, merge, git, fossil, access, debuxo sen vista, lector de pantalla, límites, rumbos, aunits, shx, diagrama, ole, historial, comparar, en palabras, propiedades, pés e polgadas, estirar, idiomas, dispositivos de entrada, problemas, en directo, asistentes
from: 3451e64c
---

Isto é o que cambiou en CadCraft 0.9, en comparación coa 0.8.1. CadCraft é a aplicación de debuxo 2D e 3D de CadCraft Studio 0.9 e das súas oito aplicacións. A 0.9 completa o debuxo en planta, engade estilos de texto e un editor de texto real, e dálle máis espazo na pantalla.

## Novidades

### Debuxo en planta

- **Tramas que seguen o seu contorno.** {{cmd:HATCH}} liga a trama ao que a limita. Mova, xire ou escale o contorno e a trama e o seu patrón seguen; cambie a súa forma e a trama recalcúlase. {{cmd:HATCHEDIT}} (`HE`) cambia unha trama despois e fai ou remata a ligazón. Vexa [Trama e áreas de recheo](topic:hatch).
- **Ficheiros de patróns de trama.** Na pregunta de {{cmd:HATCH}} `Pick internal point`, escriba `F` (Pattern file) e escolla un ficheiro `.pat`. Só se probaron ficheiros escritos no formato habitual.
- **Grupos de capas.** En {{ui:Ferramentas}} no panel {{ui:Capas}}: {{ui:Novo grupo}}, {{ui:Engadir grupos prefabricados}}, {{ui:Agrupar por nome}} e {{ui:Buscar unha capa}}; ou escriba {{cmd:LAYGROUP}} (`LG`). Vexa [Organizar un debuxo con capas](topic:layers#group-layers).
- **Plantas apiladas.** {{cmd:FLOORS}} (`FLR`), ou {{ui:Plantas…}} no menú {{ui:Máis}} do grupo {{ui:Vista}}. Unha vista nunha folla pode mostrar unha planta baixo {{ui:Planta mostrada}} en Propiedades. {{cmd:FLOORLAYERS}} converte as plantas en capas para un ficheiro que vai a outra persoa. Vexa [Apilar plantas nun debuxo](topic:floors).
- **Muros, portas e xanelas intelixentes 2D.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) e {{cmd:DELOPENING}}. As esquinas, as unións en T e os cruzamentos calcúlanse por vostede. Os muros gardan un rexistro de como se unen, e Propiedades recibe Non permitir unión no inicio / no fin, unha liña de situación e unha lonxitude editable. Vexa [Debuxar muros, portas e xanelas 2D](topic:walls-2d).
- **A ferramenta de muro en muros de planta.** Escriba {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} e o resto. Aínda non teñen botóns na barra de ferramentas. Vexa [Formas de muro, cortes, desprazamentos e bloqueos para muros 2D](topic:wall-tools-2d).

### Texto

- **Estilos de texto.** {{cmd:STYLE}} (`ST`), ou {{ui:Estilo de texto}} na barra {{ui:Debuxar}}: estilos con nome, cun tipo de letra, altura, factor de anchura e inclinación. Vexa [Fixar o tipo de letra e o tamaño do texto con estilos de texto](topic:text-styles).
- **Un editor de texto de parágrafo con formato.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ou un dobre clic no texto abre unha caixa con tipo de letra, tamaño, negriña, cursiva, subliñado, riscado, cor, aliñación e os signos de grao, máis ou menos e diámetro, ademais de {{ui:Aceptar}} e {{ui:Cancelar}}. Vexa [Dar formato ao texto de parágrafo](topic:format-paragraph-text).
- **Un diagrama desde XML de draw.io.** {{cmd:DIAGRAM}} (`T2D`) le tamén o XML de draw.io pegado. Vexa [Debuxar un diagrama desde texto](topic:text-to-diagram).
- **Texto tailandés nun trazado PDF.** Antes imprimíase como signos de interrogación.

### Máis espazo e axudas ao debuxo

- **Unha liña de comandos flotante e máis fina, e unha área superior compacta.** Arrastre o agarre da liña de comandos para facela flotar, arrastre o seu bordo superior para ter menos liñas, e {{key:F2}} abre o historial. {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Liña de comandos}} e as opcións de área superior teñen as mesmas configuracións. Vexa [Configuración](topic:settings#command-line).
- **Menú de enganche a obxectos.** Prema co botón dereito en {{ui:Enganche}} na barra de estado, ou escriba {{cmd:OSNAP}}.
- **Enganche á cuadrícula.** O botón {{ui:Enganche á cuadrícula}} na barra de estado, ou {{key:F9}}: os puntos escollidos van ao punto de cuadrícula máis próximo cando ningún enganche a obxectos tomou o punto.
- **Arco de dez xeitos, e Continuar.** {{ui:Arco}} na barra {{ui:Debuxar}} ou {{cmd:ARC}}: de 3 puntos, a familia Inicio/Centro/Final e a familia Centro/Inicio/Final, e Continuar (prema {{key:Enter}} no punto de inicio) desde a última liña, arco ou polilínea.
- **O panel de Documentos.** {{cmd:DOCUMENTS}} (`DOCS`) ou {{ui:Documentos…}} no menú {{ui:Máis}} do grupo {{ui:Vista}}: revisión, estado e saída para cada debuxo dunha carpeta de proxecto. Ábrese como un diálogo centrado. Vexa [Documentos](topic:documents).

### Ficheiros

- **Perfís de aceiro do Reino Unido.** 976 seccións no panel Estándar, escritas como nos debuxos (por exemplo `305x165x40 UB`).
- **Paquetes sudafricanos** (práctica de debuxo e regulamentos de construción) como paquetes do complemento Regulamentos de construción. Os números non están verificados.
- **Complementos para CadCraft,** engadidos baixo demanda e desactivados por defecto: deseño de iluminación interior, deseño de chips (HDL a disposición), gravado con router, simulación de circuítos, pinóns de cadea de rolos e paquetes nacionais de regulamentos de construción.

## Corrixido

- Mover, xirar ou escalar unha trama deixaba atrás o seu patrón.
- {{cmd:GRIDMOVE}} levaba un muro de planta enteiro que só comeza na liña de cuadrícula. Agora un muro xúlgase polos seus extremos.
- A cuadrícula mostrábase só dentro dos límites do debuxo aínda con os límites desactivados.
- A lista de bloques do panel lateral despraza, e un nome que non é ningún bloque lista os bloques que empezan por el («Did you mean»).
- Os ficheiros DXF R12 que AutoCAD rexeitaba («Unknown group 1001 for table») ábrense agora alí.
- Os ficheiros moi grandes (uns 70.000 elementos ou máis) non se abrían con «Maximum call stack size exceeded».
- Os ficheiros DWG de AutoCAD 2018 en diante cunha versión de mantemento alta non se abrían con «bad BITLONG code 11».
- Na caixa de texto de parágrafo, un novo tamaño escrito para unha parte seleccionada mantén a selección.

## En todas as aplicacións

Indicacións emerxentes Bootstrap en cada control con suxestión, unha suxestión de inicio que pode pechar, lapelas que se desprazan cando non caben, e un título da lapela do navegador que segue o debuxo aberto (`<drawing> - CadCraft | CadCraft`). {{ui:Configuración}} › {{ui:Disposición}} é agora unha lista despregable de opcións de dúas liñas. A lista de idiomas de {{ui:Configuración}} é máis longa que na 0.8. A coedición en directo, as coleccións da Biblioteca e as unidades de peso e temperatura descríbense nas notas de Studio.

## Límites reais

- O texto de parágrafo non ten listas con viñetas ou numeradas, regra de tabulación nin xustificación. Os PDF trazados compoñen o texto en Helvetica.
- Os muros de planta son rectos, así que un arco se debuxa como muros curtos. Aínda está pendente a revisión manual da comunidade da ferramenta de muro.
- Os grupos de capas non se escriben no formato propio de AutoCAD, así que AutoCAD mostra unha lista plana. Os outros programas mostran todas as plantas xuntas salvo que execute {{cmd:FLOORLAYERS}}.
- O panel de Documentos non o probaron dúas persoas nunha carpeta compartida real. O gravado con router non se executou en ningunha máquina real. A estimación de iluminación comprobouse contra un trazado de fotóns, non contra outro programa. Os complementos de enxeñaría son axudas para comprobar, non un substituto da revisión dun enxeñeiro.
- Os idiomas distintos do inglés son borradores automáticos, e algunhas das palabras novas só están en inglés.

## Antes: 0.8 e 0.8.1

Isto é o que cambiou en CadCraft 0.8 e 0.8.1, en comparación coa 0.7. A 0.8 (1 de novembro de 2026) engade axudas ao debuxo que traballan a partir do seu propio debuxo, por regras no seu computador e sen modelo, e a 0.8.1 (2 de novembro de 2026) corrixe os erros reportados despois dela.

### Novidades

**Debuxo que completa o seu pensamento**

- **Un fantasma mostra o que vén despois.** Sen ningún comando en execución, un fantasma gris de trazos mostra o que din os patróns propios do debuxo sobre o que vén despois: o seguinte montante á mesma separación, o seguinte chanzo dunha escaleira, o muro que falta dunha sala. Prema {{key:Tab}} para debuxalo nun só paso de desfacer, ou {{key:Esc}} para descartalo. Só mira os obxectos máis novos, así que segue fluído nun debuxo grande. Desactívelo en {{ui:Configuración}} › {{ui:CadCraft}} ou con {{cmd:AUTOCOMPLETE}} `Off`.
- **O seguinte punto mentres debuxa unha liña.** No medio de {{cmd:LINE}} ou {{cmd:PLINE}} o fantasma é o seguinte punto: o seguinte chanzo dunha escaleira, a cuarta esquina dun rectángulo, ou o punto que o pecha. Achegue o cursor e prema {{key:Tab}}, coma se fixese clic alí.
- **Os esbozos a lapis convértense en xeometría precisa.** {{cmd:SKETCHFIX}}: debuxe trazos en bruto cun lapis, rato ou dedo e cada un convértese nunha liña, círculo, arco, rectángulo ou polilínea limpa, enganchada ao que xa está debuxado. Vexa [Esbozar a lapis e obter xeometría precisa](topic:sketch-with-a-pen).
- **Unha foto dun esbozo convértese nun debuxo.** {{cmd:PHOTOSKETCH}} (`PSK`) atopa o papel nunha foto, endereza a perspectiva, aplica o tamaño de papel e a escala que vostede indique, e trasla as liñas do lapis a unha capa por cada cor de lapis. As letras non se trasladan.
- **Cótao por regras.** {{cmd:AUTODIM}} (`ADIM`) fai cadeas de cotas ao longo dos lados que escolla, unha medida total, anchos de vans, diámetros de furos e, con `Grid`, a separación da cuadrícula. Nunca repite unha cota que xa existe.
- **Mova unha liña de cuadrícula e o conxunto segue.** {{cmd:GRIDMOVE}} (`GM`): os muros que rematan na liña de cuadrícula estíranse con ela, os muros ao longo dela, os piares, a súa burbulla e etiqueta móvense, e as cotas nela miden a nova separación. Un paso de desfacer.

**Follas, detalles e etiquetas**

- **Follas que se dispoñen soas.** {{cmd:AUTOSHEET}} toma as súas vistas con nome (ou as partes separadas do modelo), escolle un tamaño de papel e unha escala estándar, e pon as vistas en follas novas cunha cartela e un epígrafe de nome e escala. Todo segue sendo editable. Vexa [Dispor as follas por min](topic:lay-out-sheets-for-me).
- **Os detalles da súa empresa, ofrecidos mentres debuxa.** {{cmd:DETAILS}} (`DET`) conserva os seus propios bloques de detalle. Cando o seleccionado coincide cun deles polas palabras das súas capas, nomes de bloque e notas, a barra de estado indícao; escóllao e colóqueo. {{cmd:DETAILS}} › Compartir pon a súa lista na súa carpeta de Documentos e trae o que o seu equipo engadiu. Configuración desactiva as ofertas.
- **Etiquetas en bloques.** {{cmd:TAGS}} define unha etiqueta (o seu tipo, os valores que pode tomar, os bloques aos que se aplica), fíxaa nas referencias de bloque seleccionadas, e lístaas como un cadro que pode gardar como CSV. As definicións consérvanse no DWG. Vexa [Etiquetas](topic:tags).
- **Límites do debuxo.** {{cmd:LIMITS}} fixa un rectángulo para o debuxo: a cuadrícula énchao e o zoom Todo mostrao. Os límites móstranse como un contorno e gárdanse en DWG e DXF, cos límites do papel. Vexa [Fixar os límites do debuxo](topic:drawing-limits).

**Traballar con outras persoas e outros programas**

- **Converter unha anotación nunha revisión.** {{cmd:REDLINE}} le o paquete que escribe MarkupCraft e lista cada cambio. Acepte ou rexeite cada un cunha nota; os aceptados reciben unha nube de revisión e un rexistro de revisión nun só paso de desfacer, e garda o ficheiro de respostas que pecha as anotacións en MarkupCraft. Vexa [Converter unha anotación nunha revisión](topic:redline-to-revision).
- **Debuxos que git e Fossil poden fusionar.** Con {{ui:Ficheiros compatibles coa fusión}} activado en {{ui:Configuración}} › {{ui:CadCraft}}, cada obxecto recibe unha clave que nunca cambia (os ficheiros son uns 10 por cento máis grandes). `cadcraft merge base ours theirs` entón fusiona as edicións de dúas persoas nun DWG ou DXF obxecto por obxecto, e só informa de onde dúas persoas cambiaron o mesmo. Vexa [Fusionar as edicións de dúas persoas nun debuxo](topic:merge-drawings).
- **O que cambiou, en palabras.** No Historial, Comparar dá unha lista clara: onde cambiaron as cousas, o tamaño das zonas, o que se engadiu, retirou ou cambiou, e o texto que se editou. Vexa [Dicir en palabras o que cambiou](topic:changes-in-words).
- **Rumbos e ángulos.** Escriba unha dirección como rumbo de topógrafo, como N45°23'30"E, ou en graos, minutos e segundos, en calquera lugar onde se pida un ángulo; AUNITS fixa como se mostran os ángulos. Vexa [Escribir e mostrar rumbos e ángulos](topic:bearings-and-angles).
- **As súas propias tipos de letra SHX.** Dé a CadCraft unha carpeta de tipos de letra SHX e os estilos de texto que as nomean debúxanse con elas, na pantalla e nos trazados. Vexa [Debuxar texto con tipos de letra SHX propias](topic:shx-fonts).
- **Un diagrama desde texto.** {{cmd:DIAGRAM}} le un diagrama de fluxo Mermaid, un diagrama de compoñentes PlantUML, D2 ou unha lista de orixe e destino, e debuxa bloques e conectores que pode editar. Vexa [Debuxar un diagrama desde texto](topic:text-to-diagram).
- **Obxectos OLE nun DWG.** {{cmd:OLELIST}} lista os obxectos OLE que leva un DWG e que CadCraft non pode colocar por si mesmo, e coloca unha copia dunha imaxe onde vostede diga. Vexa [Imaxes](topic:pictures#objects-from-other-programs-ole).
- **Os seus cálculos quedan co debuxo.** As follas de cálculo e os motivos de deseño gárdanse no DWG coa táboa de clases.

**Debuxo sen vista**

- Active {{ui:Debuxo sen vista}} en {{ui:Configuración}} (ou escriba {{cmd:ACCESS}} e responda `On`). CadCraft fala cada comando e cada resultado a través do seu lector de pantalla, describe o debuxo e o que está preto do cursor, permite mover o cursor e escoller puntos co teclado, e reproduce un son para cada enganche e agarre. Onde o seu navegador poida recoñecer a voz no seu computador, os comandos pódense dictar. Vexa [Debuxar sen vista](topic:draft-without-sight).

**En todas as aplicacións**

- **Idiomas.** 54 idiomas; dez son novos (lituano, letón, bosníaco, marathi, telugu, albanés, afrikaans, filipino, swahili, uzbeko). Os idiomas distintos do inglés son borradores automáticos ata que os lea unha persoa falante nativa.
- **Dispositivos de entrada.** Panel táctil, lapis, rato 3D, mando de xogo e controis MIDI.
- **Filas da barra de ferramentas e a grella de propiedades.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} ofrece Axustar, 2 filas ou 1 fila nas outras aplicacións. CadCraft conserva a súa propia opción en {{ui:Configuración}} › {{ui:CadCraft}} (vexa [Filas da barra de ferramentas](topic:settings#toolbar-rows)). A grella de propiedades compartida está en tres outras aplicacións, non en CadCraft.
- **Problemas, Directo e complementos.** Un panel compartido de Problemas que avisa en cada aplicación, unha vista En directo de quen está onde en CadCraft Studio (vexa [Traballar nun debuxo en conxunto](topic:work-live)), e unha lista de complementos.
- **Conecte a súa IA.** Unha conexión desde CadCraft Studio ás oito aplicacións, cun nivel só de lectura, de suxestión ou de edición por aplicación e un rexistro en palabras simples do que fixo o asistente. CadCraft non ten IA propia, e Preguntar en todas as aplicacións usa a IA que vostede conecta.

### Corrixido na 0.8.1

- **Propiedades mostraba 150 en lugar de 12'-6"** nos debuxos en pés e polgadas. Os campos que a aplicación le por si mesma volven conservar o seu texto.
- **Ficheiros DWG cuxa sección de clases se lía como tipo erróneo** (GitHub cadcraft#5) ábrense agora correctamente.
- **A cruz xa non se mostra detrás das xanelas emerxentes.**
- **Studio e as edicións empaquetadas poden cambiar de idioma en tempo de execución.** Antes, eran só en inglés. Aínda non se probou en todas as plataformas: díganos se o idioma non cambia.
- **As tabletas en vertical** dan á área de debuxo a altura de cuadrícula sobrante, e o modo de follas comeza en 760 px ou menos.
- **STRETCH con xanela de cruzamento, e LIMITS,** reportáronse en Studio 0.8.0 e xa estaban ben na versión web 0.8; o instalador de quen o reportou era máis antigo. Studio 0.8.1 inclúeas.

### Aínda non nesta versión

- **A 0.8 e a 0.8.1 non están asinadas dixitalmente.** Windows pode avisar (escolla {{ui:Máis información}} e despois {{ui:Executar igualmente}}); nun Mac, prema co botón dereito en CadCraft Studio e escolla {{ui:Abrir}}. As versións para tendas están en espera, e a versión para iPad e iPhone non se reconstruíu para a 0.8.1.
- **Os esbozos a lapis e as fotos de esbozos** só se probaron con fotos inventadas e un rato, aínda non cun lapis real, pantalla táctil ou un esbozo a man en papel.
- **O debuxo sen vista** probouse con comprobacións automáticas, aínda non cun lector de pantalla nin cunha persoa cega que o probe.
- **Compartir detalles** non tivo unha comprobación de dúas persoas, e unha carpeta de Team Cloud Plan como carpeta de Documentos non está feita.
- **A fusión** funciona para os ficheiros DWG e DXF de CadCraft; a mesma para os ficheiros das outras aplicacións non está feita.
- **Desfacer entre xanelas:** CadCraft informa de cada paso rematado, pero Studio aínda non ten un único Desfacer para todas as aplicacións; cada aplicación desfai os seus propios pasos.
- **Os obxectos OLE dun DWG** consérvanse pero non se debuxan no seu sitio.
- **A lectura de táboas de estilo de trazado (ficheiros CTB)** de outros programas está feita pero non se comprobou contra un ficheiro doutro programa.
- **Conecte a súa IA:** conexión dun clic en Studio, o conector aloxado para a IA do navegador, a súa propia clave de API dentro de Studio e o paquete MCP publicado non se prometen nesta versión.

Para a versión anterior a esta, vexa [Novidades da 0.7](topic:whats-new-0-7).
