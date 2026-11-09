---
title: Novidades na 0.8 e na 0.8.1
summary: Un fantasma que completa o seu debuxo, esbozos con caneta e fotos de esbozos convertidos en xeometría, follas que se dispoñen soas, detalles ofrecidos ao debuxar, GRIDMOVE e AUTODIM, etiquetas, ficheiros compatibles coa fusión, anotacións convertidas en revisións, debuxo sen vista, límites do debuxo, rumbos, fontes SHX, diagramas a partir de texto, e as correccións da 0.8.1.
keywords: novidades, que hai de novo, notas de versión, rexistro de cambios, cambios, 0.8, 0.8.1, versión, novas funcións, autocompletar, fantasma, pestana, sketchfix, photosketch, autosheet, detalles, gridmove, autodim, etiquetas, redline, fusión, git, fossil, acceso, debuxar sen vista, lector de pantalla, límites, rumbos, aunits, shx, diagrama, ole, historial, comparar, en palabras, propiedades, pés e polgadas, estirar, idiomas, dispositivos de entrada, problemas, live, asistentes
from: 9dd82db5
---

Isto é o que cambiou en CadCraft 0.8 e 0.8.1, en comparación coa 0.7. A 0.8 (1 de novembro de 2026) engade axudas de debuxo que traballan a partir do seu propio debuxo, mediante regras no seu ordenador e sen modelo, e a 0.8.1 (2 de novembro de 2026) corrixe os erros comunicados despois dela.

## Novo

### Un debuxo que completa a súa idea

- **Un fantasma amosa o que vén despois.** Sen ningún comando en curso, un fantasma gris de trazos amosa o que din os propios patróns do debuxo que vén despois: o seguinte montante á mesma distancia, o seguinte chanzo dunha escaleira, o muro que falta dunha sala. Prema {{key:Tab}} para debuxalo como un só paso de desfacer, ou {{key:Esc}} para descartalo. Só mira os obxectos máis novos, así que segue fluído nun debuxo grande. Desactívao en {{ui:Configuración}} › {{ui:CadCraft}} ou con {{cmd:AUTOCOMPLETE}} `Off`.
- **O seguinte punto ao debuxar unha liña.** No medio de {{cmd:LINE}} ou {{cmd:PLINE}} o fantasma é o seguinte punto: o seguinte chanzo dunha escaleira, a cuarta esquina dun rectángulo ou o punto que o pecha. Achegue o cursor e prema {{key:Tab}}, como se alí tivese feito clic.
- **Os esbozos con caneta convértense en xeometría precisa.** {{cmd:SKETCHFIX}}: debuxe trazos aproximados cunha caneta, rato ou dedo e cada un convértese nunha liña, círculo, arco, rectángulo ou polilínea limpa, enganchada ao que xa está debuxado. Vexa [Esbozar cunha caneta e obter xeometría precisa](topic:sketch-with-a-pen).
- **Unha foto dun esbozo convértese nun debuxo.** {{cmd:PHOTOSKETCH}} (`PSK`) atopa o papel nunha foto, endereita a perspectiva, aplica o tamaño de papel e a escala que vostede indique, e calca as liñas da caneta nunha capa por cada cor de caneta. Os rótulos non se calcan.
- **Cótao por regras.** {{cmd:AUTODIM}} (`ADIM`) fai cadeas de cotas ao longo dos lados que escolla, unha dimensión global, anchos de vanos, diámetros de furos e, con `Grid`, a separación da cuadrícula. Nunca repite unha cota que xa está.
- **Mova unha liña da cuadrícula e o conxunto segue.** {{cmd:GRIDMOVE}} (`GM`): os muros que rematan na liña da cuadrícula estíranse con ela, os muros ao longo dela, os piares, a súa burbulla e etiqueta móvense, e as cotas sobre ela miden a nova separación. Un só paso de desfacer.

### Follas, detalles e etiquetas

- **Follas que se dispoñen soas.** {{cmd:AUTOSHEET}} toma as súas vistas con nome (ou as pezas separadas do modelo), escolle un tamaño de papel e unha escala estándar, e pon as vistas en follas novas cunha cartela e unha lenda de nome e escala. Todo segue sendo editable. Vexa [Dispoñer as follas por min](topic:lay-out-sheets-for-me).
- **Os detalles da súa empresa, ofrecidos ao debuxar.** {{cmd:DETAILS}} (`DET`) garda os seus propios bloques de detalle. Cando o seleccionado coincide cun deles polas palabras das súas capas, nomes de bloque e notas, a barra de estado di iso; escóllao e colóqueo. {{cmd:DETAILS}} › Compartir pon a súa lista na carpeta Documentos e trae o que o seu equipo engadiu. Configuración desactiva as ofertas.
- **Etiquetas en bloques.** {{cmd:TAGS}} define unha etiqueta (o seu tipo, os valores que pode tomar, os bloques aos que se aplica), pónea nas referencias de bloque que seleccione, e lístaas como un cadro que pode gardar como CSV. As definicións consérvanse no DWG. Vexa [Etiquetas](topic:tags).
- **Límites do debuxo.** {{cmd:LIMITS}} fixa un rectángulo para o debuxo: a cuadrícula énchealo e o zoom Todo (A) amósao. Os límites amósanse como un contorno e gárdanse en DWG e DXF, cos límites do papel. Vexa [Fixar os límites do debuxo](topic:drawing-limits).

### Traballar con outras persoas e outros programas

- **Convertir unha anotación nunha revisión.** {{cmd:REDLINE}} lé o paquete que escribe MarkupCraft e lista cada cambio. Acepte ou rexeite cada un cunha nota; os aceptados reciben unha núbem de revisión e un rexistro de revisións nun só paso de desfacer, e grava o ficheiro de respostas que pecha as anotacións en MarkupCraft. Vexa [Convertir unha anotación nunha revisión](topic:redline-to-revision).
- **Debuxos que git e Fossil poden fusionar.** Con {{ui:Ficheiros compatibles coa fusión}} activado en {{ui:Configuración}} › {{ui:CadCraft}}, cada obxecto recibe unha clave que nunca cambia (os ficheiros son uns un 10 por cento máis grandes). `cadcraft merge base ours theirs` fusiona despois as edicións de dúas persoas dun obxecto DWG ou DXF obxecto por obxecto e informa só de onde dúas persoas cambiaron o mesmo. Vexa [Fusionar as edicións de dúas persoas nun debuxo](topic:merge-drawings).
- **Que cambiou, en palabras.** En Historial, Comparar dá unha lista simple: onde cambiaron as cousas, de que tamaño son os lugares, o que se engadiu, quitou ou cambiou, e o texto que se editou. Vexa [Dicir en palabras o que cambiou](topic:changes-in-words).
- **Rumbos e ángulos.** Escriba unha dirección como rumbo de topógrafo, por exemplo N45°23'30"E, ou en graos, minutos e segundos, en calquera lugar onde se pida un ángulo; AUNITS fixa como se amosan os ángulos. Vexa [Escribir e amosar rumbos e ángulos](topic:bearings-and-angles).
- **As súas propias fontes SHX.** Déelle a CadCraft unha carpeta de fontes SHX e os estilos de texto que as nomean debúxanse con elas, na pantalla e nos trazados. Vexa [Debuxar texto coas súas propias fontes SHX](topic:shx-fonts).
- **Un diagrama a partir de texto.** {{cmd:DIAGRAM}} lé un diagrama de fluxo de Mermaid, un diagrama de compoñentes de PlantUML, D2 ou unha lista de orixe e destino, e debuxa bloques e conectores editables. Vexa [Debuxar un diagrama a partir de texto](topic:text-to-diagram).
- **Obxectos OLE nun DWG.** {{cmd:OLELIST}} lista os obxectos OLE que leva un DWG e que CadCraft non pode colocar por si mesmo, e coloca unha copia dunha imaxe onde vostede indique. Vexa [Imaxes](topic:pictures#objects-from-other-programs-ole).
- **Os seus cálculos quedan co debuxo.** As follas de cálculo e as razóns de deseño consérvanse no DWG xunto coa táboa de clases.

### Debuxar sen ver

- Active {{ui:Debuxo sen vista}} en {{ui:Configuración}} (ou escriba {{cmd:ACCESS}} e responda `On`). CadCraft anuncia cada comando e resultado a través do seu lector de pantalla, describe o debuxo e o que hai preto do cursor, permítelle mover o cursor e escoller puntos co teclado, e reproduce un son por cada enganche e agarre. Onde o seu navegador poida recoñecer a voz no seu ordenador, os comandos pódense ditar. Vexa [Debuxar sen ver](topic:draft-without-sight).

### En todas as aplicacións

- **Idiomas.** 54 idiomas; dez son novos (lituano, letón, bosníaco, marathi, telugu, albanés, afrikaans, filipino, suahili, uzbeco). Os idiomas distintos do inglés son borradores automáticos ata que os lea unha persoa falante nativa.
- **Dispositivos de entrada.** Panel táctil, caneta, rato 3D, mando de xogo e controis MIDI.
- **Filas da barra de ferramentas e a grella de propiedades.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} ofrece Axustar, 2 filas ou 1 fila nas outras aplicacións. CadCraft conserva o seu propio axuste en {{ui:Configuración}} › {{ui:CadCraft}} (vexa [Filas da barra de ferramentas](topic:settings#toolbar-rows)). A grella de propiedades compartida está en tres outras aplicacións, non en CadCraft.
- **Problemas, Live e complementos.** Un panel compartido de Problemas que avisa en todas as aplicacións, unha vista Live de quen está onde en CadCraft Studio (vexa [Traballar nun debuxo xuntos](topic:work-live)), e unha lista de complementos.
- **Conecte a súa IA.** Unha única conexión desde CadCraft Studio ás oito aplicacións, con un nivel de só lectura, de suxestión ou de edición por aplicación e un rexistro en palabras simples do que fixo o asistente. CadCraft non ten IA propia, e Preguntar en todas as aplicacións usa a IA que conecte.

## Corrixido na 0.8.1

- **As propiedades amosaban 150 en lugar de 12'-6"** nos debuxos en pés e polgadas. Os campos que a aplicación lé por si mesma volven conservar o seu texto.
- **Os ficheiros DWG cuxa sección de clases se lía como o tipo incorrecto** (GitHub cadcraft#5) xa se abren correctamente.
- **A cruz do cursor xa non se amosa detrás das xanelas emerxentes.**
- **Studio e as edicións empaquetadas poden cambiar de idioma en tempo de execución.** Antes só estaban en inglés. Aínda non se probou en todas as plataformas: díganos se o idioma non cambia.
- **As tabletas en vertical** dan o alto de cuadrícula sobrante ao lenzo, e o modo de follas arranca a 760 px ou menos.
- **STRETCH con xanela de cruzamento, e LIMITS,** informáronse en Studio 0.8.0 e xa estaban ben na versión web 0.8; o instalador de quen o informou era máis antigo. Studio 0.8.1 inclúeos.

## Aínda non nesta versión

- **A 0.8 e a 0.8.1 non levan firma de código.** Windows pode avisar (escolla {{ui:Máis información}} e logo {{ui:Executar igualmente}}); nun Mac, faga clic dereito en CadCraft Studio e escolla {{ui:Abrir}}. As versións para tendas están en espera, e a versión para iPad e iPhone non se reconstruíu para a 0.8.1.
- **Os esbozos con caneta e as fotos de esbozos** só se probaron con fotos inventadas e cun rato, non aínda cunha caneta real, pantalla táctil ou un esbozo a man sobre papel.
- **Debuxo sen vista** probouse con comprobacións automatizadas, non aínda cun lector de pantalla ou unha persoa cegas que o probe.
- **Compartir detalles** non tivo unha comprobación por dúas persoas, e non está construída unha carpeta de Team Cloud Plan como carpeta Documentos.
- **A fusión** funciona para os ficheiros DWG e DXF de CadCraft; para os ficheiros das outras aplicacións non está construída.
- **Desfacer entre xanelas:** CadCraft informa de cada paso rematado, pero Studio aínda non ten un único Desfacer para todas as aplicacións; cada aplicación desfai os seus propios pasos.
- **Os obxectos OLE dun DWG** consérvanse pero non se debuxan no seu lugar.
- **A lectura das táboas de estilo de trazado (ficheiros CTB)** doutros programas está construída, pero non se comprobou con ningún ficheiro doutro programa.
- **Conecte a súa IA:** a conexión dun clic en Studio, o conector aloxado para a IA do navegador, a súa propia clave de API dentro de Studio e o paquete MCP publicado non se prometen nesta versión.

Para a versión anterior, vexa [Novidades na 0.7](topic:whats-new-0-7).
