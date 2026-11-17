---
title: Novidades na versión 0.9
summary: Tramas que seguen o seu contorno, grupos de capas, pisos apilados, muros intelixentes 2D con portas e xanelas, estilos de texto e un editor de texto con formato, unha liña de comandos flotante, enganche á cuadrícula, dez xeitos de debuxar un arco e o panel Documentos.
keywords: novidades, 0.9, notas de versión, rexistro de cambios, trama, trama asociativa, hatchedit, ficheiro pat, ficheiro de patrón, grupos de capas, laygroup, pisos, pisos apilados, floorlayers, muros intelixentes, muro, porta, xanela, ferramentas de muro, estilo de texto, estilo, editor mtext, texto de parágrafo, formato, liña de comandos flotante, liña de comandos, área superior, compacta, enganche á cuadrícula, grid snap, f9, arco, panel Documentos, retirada, tamaños de perfís de aceiro do Reino Unido, draw.io, texto tailandés, dxf r12, what's new, 0.8, 0.8.1, versión, novas funcións, autocompletar, fantasma, tab, sketchfix, photosketch, autosheet, detalles, gridmove, autodim, etiquetas, redline, fusión, git, fossil, access, debuxo sen vista, lector de pantalla, límites, rumbos, aunits, shx, diagrama, ole, historial, comparar, en palabras, propiedades, pés e polgadas, estirar, idiomas, dispositivos de entrada, problemas, live, asistentes
from: 8b6dea0b
---

Isto é o que cambiou na versión 0.9 de CadCraft, en comparación coa 0.8.1. CadCraft é a aplicación de debuxo 2D e 3D de CadCraft Studio 0.9 e das súas oito aplicacións. A 0.9 completa o debuxo en planta, engade estilos de texto e un editor de texto real, e dá máis espazo na pantalla.

## Novo

### Debuxo en planta

- **Tramas que seguen o seu contorno.** {{cmd:HATCH}} ligase ao que as delimita. Mova, xire ou escale o contorno e a trama e o seu patrón séguena; remodeléeo e a trama calcúlase de novo. {{cmd:HATCHEDIT}} (`HE`) cambia unha trama despois e crea ou remata a ligazón. Vexa [Tramas e áreas de recheo](topic:hatch).
- **Ficheiros de patrón de trama.** No pedimento {{cmd:HATCH}} `Pick internal point`, escriba `F` (ficheiro de patrón) e escolla un ficheiro `.pat`. Só se probaron ficheiros escritos no formato habitual.
- **Grupos de capas.** En {{ui:Ferramentas}} no panel {{ui:Capas}}: {{ui:Novo grupo}}, {{ui:Engadir grupos prefabricados}}, {{ui:Agrupar por nome}} e {{ui:Buscar unha capa}}; ou escriba {{cmd:LAYGROUP}} (`LG`). Vexa [Organizar un debuxo con capas](topic:layers#group-layers).
- **Pisos apilados.** {{cmd:FLOORS}} (`FLR`), ou {{ui:Pisos…}} no menú {{ui:Máis}} do grupo {{ui:Vista}}. Unha ventá nunha folla pode amosar un piso con {{ui:Piso mostrado}} en Propiedades. {{cmd:FLOORLAYERS}} converte os pisos en capas para un ficheiro que vai a outra persoa. Vexa [Apilar pisos nun debuxo](topic:floors).
- **Muros intelixentes 2D, portas e xanelas.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) e {{cmd:DELOPENING}}. As esquinas, as uniones en T e os cruzamentos calcúlanse por vostede. Os muros gardan un rexistro de como se unen, e as Propiedades teñen Non permitir unión no inicio / no fin, unha Liña de localización e unha Lonxitude editable. Vexa [Debuxar muros, portas e xanelas en 2D](topic:walls-2d).
- **A ferramenta de muro nos muros en planta.** Escriba {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} e o resto. Aínda non teñen botóns na barra de ferramentas. Vexa [Formas, cortes, desfasamentos e bloqueos de muros en 2D](topic:wall-tools-2d).

### Texto

- **Estilos de texto.** {{cmd:STYLE}} (`ST`), ou {{ui:Estilo de texto}} na barra {{ui:Debuxar}}: estilos con nome, cun tipo de letra, altura, factor de ancho e inclinación. Vexa [Definir o tipo de letra e o tamaño do texto con estilos de texto](topic:text-styles).
- **Un editor de texto de parágrafo con formato.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ou un dobre clic sobre o texto abre unha caixa con tipo de letra, tamaño, negriña, cursiva, subliñado, tachado, cor, aliñación e os signos de grao, máis ou menos e diámetro, ademais de {{ui:Aceptar}} e {{ui:Cancelar}}. Vexa [Dar formato ao texto de parágrafo](topic:format-paragraph-text).
- **Un diagrama a partir de XML de draw.io.** {{cmd:DIAGRAM}} (`T2D`) tamén le o XML de draw.io que se pegue. Vexa [Debuxar un diagrama a partir de texto](topic:text-to-diagram).
- **Texto tailandés nunha impresión PDF.** Antes imprimíase como signos de interrogación.

### Máis espazo e axudas ao debuxo

- **Unha liña de comandos flotante e máis fina, e unha zona superior compacta.** Arrastre a pinza da liña de comandos para flotala, arrastre o seu bordo superior para ter menos liñas, e {{key:F2}} abre o historial. {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Liña de comandos}} e as opcións da zona superior teñen os mesmos axustes. Vexa [Configuración](topic:settings#command-line).
- **Menú de enganches a obxectos.** Faga clic dereito en {{ui:Enganche}} na barra de estado, ou escriba {{cmd:OSNAP}}.
- **Enganche á cuadrícula.** O botón {{ui:Enganche á cuadrícula}} na barra de estado, ou {{key:F9}}: os puntos escollidos van ao punto de cuadrícula máis próximo cando ningún enganche a obxectos tomou o punto.
- **Arco de dez xeitos, e Continuar.** {{ui:Arco}} na barra {{ui:Debuxar}} ou {{cmd:ARC}}: de 3 puntos, a familia Inicio/Centro/Final e a familia Centro/Inicio/Final, e Continuar (prema {{key:Enter}} no punto inicial) desde a última liña, arco ou polilínea.
- **O panel Documentos.** {{cmd:DOCUMENTS}} (`DOCS`) ou {{ui:Documentos…}} no menú {{ui:Máis}} do grupo {{ui:Vista}}: revisión, estado e retirada para cada debuxo dunha carpeta de proxecto. Ábrese como un diálogo centrado. Vexa [Documentos](topic:documents).

### Ficheiros

- **Tamaños de perfís de aceiro do Reino Unido.** 976 seccións no panel Estándar, escritas como nos debuxos (por exemplo `305x165x40 UB`).
- **Paquetes sudafricanos** (práctica de debuxo e regulamentos de construción) como paquetes do complemento Regulamentos de construción. Os números non están verificados.
- **Complementos para CadCraft,** engadidos baixo demanda e desactivados por defecto: deseño de iluminación interior, deseño de chips (de HDL a deseño), gravado de router, simulación de circuítos, pinóns de cadea de rolos e paquetes de países do complemento Regulamentos de construción.

## Corrixido

- Mover, xirar ou escalar unha trama deixaba o seu patrón atrás.
- {{cmd:GRIDMOVE}} arrastraba un muro enteiro en planta que só comeza na liña de cuadrícula. Agora un muro xúlgase polos seus extremos.
- A cuadrícula amosábase só dentro dos límites do debuxo, aínda cos límites desactivados.
- A lista de bloques do panel lateral despraza, e un nome que non é ningún bloque lista os bloques que comezan por el («Quizais quixese dicir»).
- Os ficheiros DXF R12 que AutoCAD rexeitaba («Grupo 1001 descoñecido para a táboa») ábrense agora.
- Os ficheiros moi grandes (uns 70.000 elementos ou máis) non se abrían e mostraban «Maximum call stack size exceeded».
- Os ficheiros DWG de AutoCAD 2018 en diante cunha versión de mantemento alta non se abrían e mostraban «bad BITLONG code 11».
- Na caixa de texto de parágrafo, un tamaño novo escrito para unha parte seleccionada conserva a selección.

## En todas as aplicacións

Suxestións emerxentes (tooltips) en cada control que teña unha indicación, un consello de inicio que pode pechar, lapelas que se desprazan cando non caben, e un título de lapela do navegador que segue o debuxo aberto (`<debuxo> - CadCraft | CadCraft`). {{ui:Configuración}} › {{ui:Disposición}} é agora unha lista despregable de opcións de dúas liñas. A lista de idiomas de {{ui:Configuración}} é máis longa que na 0.8. A co-edición en directo, as coleccións da Biblioteca e as unidades de peso e temperatura descríbense nas notas de Studio.

## Límites honestos

- O texto de parágrafo non ten listas con viñetas nin numeradas, regra de tabulacións nin xustificación. Os PDF impresos compoñen o texto en Helvetica.
- Os muros en planta son rectos, así que un arco se debuxa como pequenos muros. A comprobación da comunidade sobre a ferramenta de muro está pendente.
- As capas de grupo non se escriben no formato propio de AutoCAD, así que AutoCAD mostra unha lista plana. Os demais programas mostran todos os pisos xuntos a non ser que execute {{cmd:FLOORLAYERS}}.
- O panel Documentos aínda non o probaron dúas persoas nunha carpeta compartida real. O gravado de router non se executou en ningunha máquina real. A estimación de iluminación comprobouse contra un trazado de fotóns, non contra outro programa. Os complementos de enxeñaría son axudas de comprobación, non un substituto da revisión dunha persoa enxeñeira.
- As linguas distintas do inglés son borradores de máquina, e algunhas das palabras novas só están en inglés.

## Anteriores: 0.8 e 0.8.1

Isto é o que cambiou nas versións 0.8 e 0.8.1, en comparación coa 0.7. A 0.8 (1 de novembro de 2026) engade axudas ao debuxo que traballan a partir do seu propio debuxo, mediante regras no seu ordenador e sen modelo, e a 0.8.1 (2 de novembro de 2026) corrixe os fallos informados despois.

### Novo

**Un debuxo que completa o seu pensamento**

- **Un fantasma mostra o que vén despois.** Sen ningún comando en execución, un fantasma gris de trazos mostra o que os propios patróns do seu debuxo indican que vén: o seguinte montante á mesma separación, o seguinte chanzo dunha escaleira, o muro que falta dunha sala. Prema {{key:Tab}} para debuxalo como un paso de desfacer, ou {{key:Esc}} para descartalo. Só mira os obxectos máis novos, así que segue fluído nun debuxo grande. Desactívao en {{ui:Configuración}} › {{ui:CadCraft}} ou con {{cmd:AUTOCOMPLETE}} `Off`.
- **O seguinte punto mentres debuxa unha liña.** No medio de {{cmd:LINE}} ou {{cmd:PLINE}}, o fantasma é o seguinte punto: o seguinte chanzo dunha escaleira, a cuarta esquina dun rectángulo, ou o punto que o pecha. Achegue o cursor e prema {{key:Tab}}, como se tivese feito clic alí.
- **Os esbozos a man convértense en xeometría precisa.** {{cmd:SKETCHFIX}}: debuxe trazos aproximados cunha caneta, rato ou dedo e cada un convértese nunha liña, círculo, arco, rectángulo ou polilínea limpos, enganchados ao que xa está debuxado. Vexa [Esbozar cunha caneta e obter xeometría precisa](topic:sketch-with-a-pen).
- **Unha foto dun esbozo convértese nun debuxo.** {{cmd:PHOTOSKETCH}} (`PSK`) atopa o papel nunha foto, endereita a perspectiva, aplica o tamaño de papel e a escala que dea, e traza as liñas de caneta nunha capa por cada cor de caneta. O lettering non se traza.
- **Acotar segundo regras.** {{cmd:AUTODIM}} (`ADIM`) crea cadeas de cotas ao longo dos lados que escolla, un tamaño total, anchos de vans, diámetros de furos e, con `Grid`, a separación da cuadrícula. Nunca repite unha cota que xa existe.
- **Mover unha liña de cuadrícula e o conxunto segue.** {{cmd:GRIDMOVE}} (`GM`): os muros que rematan na liña de cuadrícula estíranse con ela, os muros ao longo dela, os piares, a súa burbulla e etiqueta móvense, e as cotas sobre ela miden a nova separación. Un paso de desfacer.

**Follas, detalles e etiquetas**

- **Follas que se dispoñen por si mesmas.** {{cmd:AUTOSHEET}} toma as súas vistas con nome (ou as pezas separadas do modelo), escolle un tamaño de papel e unha escala estándar, e coloca as vistas en follas novas cun cadro de títulos e un pé de nome e escala. Todo segue sendo editable. Vexa [Dispoñer as follas por min](topic:lay-out-sheets-for-me).
- **Os detalles da súa empresa, ofrecidos ao debuxar.** {{cmd:DETAILS}} (`DET`) garda os seus propios bloques de detalle. Cando o que selecciona coincide cun deles polas palabras das súas capas, nomes de bloque e notas, a barra de estado di iso; escóllao e colóqueo. {{cmd:DETAILS}} › Compartir pon a súa lista na carpeta Documentos e trae o que engadiu o seu equipo. Os axustes desactivan as ofertas.
- **Etiquetas en bloques.** {{cmd:TAGS}} define unha etiqueta (o seu tipo, os valores que pode tomar, os bloques aos que se aplica), a fixa nas referencias de bloque que seleccione, e lístaas como unha táboa que pode gardar como CSV. As definicións gárdanse no DWG. Vexa [Etiquetas](topic:tags).
- **Límites do debuxo.** {{cmd:LIMITS}} fixa un rectángulo para o debuxo: a cuadrícula énchello e o zoom Todo mostrao. Os límites amósanse como un contorno e gárdanse en DWG e DXF, cos límites do papel. Vexa [Fixar os límites do debuxo](topic:drawing-limits).

**Traballar con outras persoas e outros programas**

- **Converta unha anotación nunha revisión.** {{cmd:REDLINE}} le o paquete que escribe MarkupCraft e lista cada cambio. Acepte ou rexeite cada un cunha nota; os aceptados reciben unha nube de revisión e un rexistro de revisións nun só paso de desfacer, e vostede garda o ficheiro de respostas que pecha as anotacións en MarkupCraft. Vexa [Converter unha anotación nunha revisión](topic:redline-to-revision).
- **Debuxos que git e Fossil poden fusionar.** Con {{ui:Ficheiros compatibles coa fusión}} activado en {{ui:Configuración}} › {{ui:CadCraft}}, cada obxecto recibe unha clave que nunca cambia (os ficheiros son uns 10 por cento máis grandes). `cadcraft merge base ours theirs` fusiona despois as edicións de dúas persoas dun mesmo obxecto DWG ou DXF, obxecto por obxecto, e informa só onde dúas persoas cambiaron a mesma cousa. Vexa [Fusionar as edicións de dúas persoas nun debuxo](topic:merge-drawings).
- **Que cambiou, con palabras.** No Historial, Comparar dá unha lista clara: onde cambiaron as cousas, o tamaño das zonas, o que se engadiu, eliminou ou cambiou, e o texto que se editou. Vexa [Dicir con palabras o que cambiou](topic:changes-in-words).
- **Rumbos e ángulos.** Escriba unha dirección como rumbo de topógrafo, como N45°23'30"E, ou en graos, minutos e segundos, en calquera lugar onde se pida un ángulo; AUNITS fixa como se mostran os ángulos. Vexa [Escribir e mostrar rumbos e ángulos](topic:bearings-and-angles).
- **As súas propias fontes SHX.** Dé a CadCraft unha carpeta de fontes SHX e os estilos de texto que as nomean deséñanse con elas, en pantalla e nas impresións. Vexa [Debuxar texto nas súas propias fontes SHX](topic:shx-fonts).
- **Un diagrama a partir de texto.** {{cmd:DIAGRAM}} le un diagrama de fluxo de Mermaid, un diagrama de compoñentes de PlantUML, D2 ou unha lista de orixe e destino, e debuxa bloques e conectores que pode editar. Vexa [Debuxar un diagrama a partir de texto](topic:text-to-diagram).
- **Obxectos OLE nun DWG.** {{cmd:OLELIST}} lista os obxectos OLE que leva un DWG e que CadCraft non pode colocar por si mesmo, e coloca unha copia dunha imaxe onde vostede diga. Vexa [Imaxes](topic:pictures#objects-from-other-programs-ole).
- **As súas calculadoras quedan co debuxo.** As follas de cálculo e as razóns de deseño gárdanse no DWG coa táboa de clases.

**Debuxo sen vista**

- Active {{ui:Debuxo sen vista}} en {{ui:Configuración}} (ou escriba {{cmd:ACCESS}} e responda `On`). CadCraft le en voz alta cada comando e resultado a través do seu lector de pantalla, describe o debuxo e o que hai preto do cursor, deixa mover o cursor e escoller puntos co teclado, e reproduce un son por cada enganche e cada pinza. Onde o seu navegador poida recoñecer a voz no seu ordenador, os comandos poden ditarse. Vexa [Debuxar sen vista](topic:draft-without-sight).

**En todas as aplicacións**

- **Idiomas.** 54 idiomas; dez son novos (lituano, letón, bosníaco, marathi, telugu, albanés, afrikaans, filipino, suahili, uzbeko). Os idiomas distintos do inglés son borradores de máquina ata que os lea unha persoa falante nativa.
- **Dispositivos de entrada.** Panel táctil, lapis, rato 3D, mando de xogo e controis MIDI.
- **Barras de ferramentas en filas e a rexilla de propiedades.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} ofrece Axustar, 2 filas ou 1 fila nas outras aplicacións. CadCraft conserva o seu propio axuste en {{ui:Configuración}} › {{ui:CadCraft}} (vexa [Filas da barra de ferramentas](topic:settings#toolbar-rows)). A rexilla de propiedades compartida está en tres das outras aplicacións, non en CadCraft.
- **Problemas, Live e complementos.** Un panel de Problemas compartido que avisa en todas as aplicacións, unha vista Live de quen está onde en CadCraft Studio (vexa [Traballar nun debuxo xuntos](topic:work-live)), e unha lista de complementos.
- **Conecte a súa IA.** Unha conexión desde CadCraft Studio ás oito aplicacións, cun nivel de só lectura, de suxestión ou de edición por aplicación, e un rexistro en linguaxe simple do que fixo o asistente. CadCraft non ten IA propia, e Preguntar en todas as aplicacións usa a IA que vostede conecte.

### Corrixido en 0.8.1

- **As propiedades mostraban 150 en lugar de 12'-6"** nos debuxos en pés e polgadas. Os campos que a aplicación le por si mesma conservan de novo o seu texto.
- **Os ficheiros DWG cuxa sección de clases se lía como un tipo incorrecto** (GitHub cadcraft#5) abren agora correctamente.
- **O cursor en cruz xa non aparece detrás das xanelas emerxentes.**
- **Studio e as edicións empaquetadas poden cambiar de idioma en tempo de execución.** Antes eran só en inglés. Aínda non se probou en todas as plataformas: avísenos se o idioma non cambia.
- **As tabletas en vertical** dan á zona de debuxo o espazo sobrante da altura da cuadrícula, e o modo de follas comeza a 760 px ou menos.
- **STRETCH con xanela cruzada, e LIMITS,** foron informados en Studio 0.8.0 e xa estaban ben na compilación web da 0.8; o instalador de quen informou era máis antigo. Studio 0.8.1 inclúeos.

### Aínda non nesta versión

- **A 0.8 e a 0.8.1 non están asinadas dixitalmente.** Windows pode avisar (escolla {{ui:Máis información}}, e logo {{ui:Executar igualmente}}); en Mac, faga clic dereito en CadCraft Studio e escolla {{ui:Abrir}}. As compilacións para tendas están en espera, e a compilación para iPad e iPhone non se reconstruíu para a 0.8.1.
- **Os esbozos a caneta e as fotos de esbozos** probáronse só con fotos inventadas e un rato, aínda non con caneta real, pantalla táctil nin un esbozo a man en papel.
- **Debuxo sen vista** probouse con comprobacións automatizadas, pero aínda non con un lector de pantalla nin cun probador cego.
- **Compartir detalles** non tivo unha comprobación por dúas persoas, e unha carpeta do Team Cloud Plan como carpeta Documentos non está construída.
- **A fusión** funciona para os ficheiros DWG e DXF de CadCraft; para os ficheiros dos outros programas non está construída.
- **Desfacer entre xanelas:** CadCraft informa de cada paso terminado, pero Studio aínda non ten un único Desfacer para todas as aplicacións; cada aplicación desfai os seus propios pasos.
- **Os obxectos OLE dun DWG** consérvanse pero non se debuxan no seu lugar.
- **A lectura de táboas de estilo de impresión (ficheiros CTB)** doutros programas está construída, pero non se comprobou con un ficheiro doutro programa.
- **Conecte a súa IA:** a conexión dun clic en Studio, o conector aloxado para a IA do navegador, a súa propia clave de API dentro de Studio e o paquete MCP publicado non se prometen nesta versión.

Para a versión anterior a esta, vexa [Novidades na versión 0.7](topic:whats-new-0-7).
