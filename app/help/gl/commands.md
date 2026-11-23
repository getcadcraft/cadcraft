---
title: Referencia de comandos
summary: Cada comando da aplicación de debuxo CadCraft, cos seus alias, as preguntas que fai, as súas opcións e os valores predeterminados.
keywords: comandos, alias, lista de comandos, área, perímetro, measuregeom, liña, pline, círculo, arco, recortar, desfasar, dimlinear, bloque, inserir, disposición, trazar, zoom, axuda, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicar, selectall
from: 979ffe3b
---

Escriba un nome de comando ou un alias e prema {{key:Enter}} ou {{key:Space}}. Non importan as maiúsculas, e un `_`, `-`, `.` ou `'` inicial ignórase. Escriba `HELP` (ou `?`) para imprimir unha lista breve de cada comando no historial da liña de comandos; prema {{key:F1}} para esta axuda.

Para ler as indicacións: as opcións van entre corchetes, e escolle unha escribindo as súas letras maiúsculas (`D` para Diámetro). Un predeterminado vai entre ángulos; prema {{key:Enter}} para aceptalo. Onde se pide un punto, pode facer clic ou escribir calquera dos formatos de [Entrada de coordenadas e distancias](topic:coordinate-entry). Onde se pide unha distancia, pode escribir un número ou facer clic en dous puntos.

Premer {{key:Enter}} onde se pide un punto ou un obxecto, e non hai predeterminado, remata o comando. {{key:Esc}} cancélao. Calquera cousa que fixo un comando é un paso de desfacer.

## Debuxar

### LINE

Alias: `L`. Segmentos rectos, cada un o seu propio obxecto.

- `Specify first point` (Enter: comezar desde o último punto que indicou)
- `Specify next point [Undo]`, repetido. Despois de dous segmentos: `[Undo/Close]`.
- `U` retira o último segmento, `C` pecha ata o primeiro punto e remata. Enter remata.

### PLINE

Alias: `PL`. Unha polilínea de segmentos de liña e arco.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close cando hai dous segmentos)
- `A` cambia a arcos: `Specify endpoint of arc [Line/CLose/Undo]`. Cada arco continúa tanxente ao segmento anterior. `L` volve ás liñas, `CL` pecha con un arco.
- Enter remata; a polilínea queda aberta.

### CIRCLE

Alias: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` pide `Specify diameter of circle`.
- `2P`: dous extremos dun diámetro. `3P`: tres puntos no círculo.
- `T` (tamén o comando `TTR`, e {{ui:Debuxar}} › {{ui:Máis}} › {{ui:Círculo: tanxente, tanxente, raio}}): `Specify point on object for first tangent of circle`, despois a segunda, e logo o raio (Enter: o último). O círculo toca os dous obxectos (liñas, arcos, círculos, segmentos de polilínea, tamén dentro de bloques); dos círculos que o fan, o que toca máis preto dos seus puntos. "Circle does not exist" cando ningún encaixa.
- `TTT` (ou {{ui:Debuxar}} › {{ui:Máis}} › {{ui:Círculo: tanxente, tanxente, tanxente}}): tres obxectos; o círculo que toca os tres, o máis próximo dos seus puntos (tres liñas dan o círculo interior ou un exterior, segundo onde faga clic).

### ARC

Alias: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: un arco por tres puntos.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. O arco vai en sentido antihorario desde o inicio ata o final.

### RECTANG

Alias: `REC`, `RECTANGLE`. Unha polilínea pechada.

- `Specify first corner point`, `Specify other corner point`. Escriba `@width,height` para a segunda esquina.

### POLYGON

Alias: `POL`. Un polígono regular como polilínea pechada.

- `Enter number of sides <4>` (3 a 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: faga clic ou escriba un punto; a súa distancia fixa o tamaño e a súa dirección xira o polígono.

### ELLIPSE

Alias: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, despois a distancia ao outro eixo.
- `I` (`Isocircle`, só mentres {{cmd:ISODRAFT}} está activo): centro, despois raio ou `Diameter`: a elipse que mostra un círculo no plano isométrico actual.

### HATCH

Alias: `H`, `BH`, `BHATCH`; ou {{ui:Trama}} na barra de ferramentas. Imprime primeiro o patrón, escala e ángulo actuais.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, repetido (`Undo` cando xa hai unha área): cada clic engade a área pechada ao seu redor, cos obxectos pechados dentro dela como illas. Enter fai unha soa trama con todas.
- `S`: `Select closed objects` (polilíneas pechadas, círculos, elipses pechadas).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): o recheo é un degradado en lugar dun patrón. Vexa {{cmd:GRADIENT}} para as súas preguntas.

Vexa [Trama e áreas de recheo](topic:hatch).

### GRADIENT

Alias: `GD`. Recheá unha área cun degradado de unha ou dúas cores. Primeiro pregunta polo degradado, despois continúa como fai {{cmd:HATCH}} (`Pick internal point`, `S` para obxectos pechados, {{key:Enter}} para rematar).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, repetido; imprime o degradado tal como está cada vez.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ou un deles invertido (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Bastan as primeiras letras.
- `O`: unha cor, despois o seu tono de 0 a 1 (0 escurece ata o negro, 0,5 é a cor en si, 1 aclárea ata o branco). `TW`: a primeira e a segunda cor. Unha cor é un número de 1 a 255, tres números como `255,128,0`, ou `#rrggbb`.
- `A`: o ángulo no que vai o degradado. `C`: centrado Yes ou No (No move o centro do degradado cara a un lado).
- Rexeita unha cor ou un tipo que non coñece, e un tono fóra de 0 a 1.

{{cmd:HATCHEDIT}} `G` e Propiedades (Degradado) cambian un degradado máis tarde, ou convirten calquera trama nun. Un degradado debúxase na pantalla e trázase. DWG 2004 e posteriores gárdano como trama de degradado real; DXF 2000 e DWG 2000 gárdano para CadCraft, e os outros programas ven un recheo sólido na primeira cor.

### HATCHGENERATEBOUNDARY

Alias: `HGB`. Fai de novo o contorno a partir dunha trama que o perdeu. `Select hatches` (ou selecciónaas antes), despois `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Cada bucle da trama convértese nunha polilínea pechada na capa da trama; as novas polilíneas quedan seleccionadas. Unha arista curva volve como os pequenos tramos rectos que conserva a trama.
- Con Yes a trama segue o seu novo contorno, como fai unha trama feita con {{cmd:HATCH}}. Un paso de desfacer.
- Indícao cando non se seleccionou ningunha trama.

### POINT

Alias: `PO`; ou {{ui:Debuxar}} › {{ui:Máis}} › {{ui:Punto}}. Obxectos punto, un por clic, ata Enter.

- `Specify a point`

### XLINE

Alias: `XL`; ou {{ui:Debuxar}} › {{ui:Máis}} › {{ui:Liña de construción}}. Liñas de construción, sen fin nos dous sentidos. Vexa [Liñas de construción e semirrectas](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, despois `Specify through point` para cada liña, ata Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` pide primeiro `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, despois `Specify angle end point` para cada liña.
- `O`: `Specify offset distance [Through] <Through>`, despois `Select a line object` e `Specify side to offset` (ou `Specify through point`) para cada liña.

### RAY

Sen alias; ou {{ui:Debuxar}} › {{ui:Máis}} › {{ui:Semirrecta}}. `Specify start point`, despois `Specify through point` para cada semirrecta, ata Enter.

### TEXT

Alias: `DT`, `DTEXT`; ou {{ui:Texto}} na barra de ferramentas. Texto dunha liña; cada liña é o seu propio obxecto.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, despois `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, repetido: cada Enter comeza a liña seguinte debaixo. Enter nunha liña baleira remata. {{key:Space}} escribe un espazo aquí.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} pon marcas nunha liña, arco, círculo, polilínea, spline ou elipse que a corta en partes iguais. Escolla o obxecto e despois o número de partes (2 a 32767). Un obxecto aberto recibe unha marca menos que partes; un pechado recibe unha marca tamén no seu inicio. O propio obxecto non se corta. As marcas son puntos; `Block` pide no seu lugar un bloque deste debuxo e se xira para seguir o obxecto. As lonxitudes ao longo de splines e elipses miden por cordas curtas. Rexeita texto, tramas e outros obxectos sen lonxitude.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} pon unha marca cada lonxitude dada ao longo dunha liña, arco, círculo, polilínea, spline ou elipse, contando desde o extremo máis próximo onde seleccionou (un obxecto pechado: desde o seu inicio). Dá a lonxitude escribíndoa ou con dous puntos. O extremo afastado dun obxecto aberto non recibe marca. `Block` pon un bloque en cada marca no canto dun punto. Rexeita unha lonxitude de 0, unha máis longa que o obxecto, e unha que daría máis de 32767 marcas.

### BOUNDARY

Alias: `BO`, `BPOLY`. {{cmd:BOUNDARY}} fai unha polilínea pechada arredor da área que contén o punto que escolle, a partir de calquera liña, arco, círculo, polilínea e curva que a limiten na pantalla. As pezas que están sobre un arco ou círculo volven como segmentos de arco; as pezas de elipses e splines volven como pequenos segmentos rectos. Con `Islands` activado (o inicial) cada área pechada dentro dela recibe tamén a súa polilínea. Siga escollendo puntos; Enter remata. Os obxectos que limitan a área quedan como están. Indícao cando ningunha área pechada contén o punto.

### BLEND

{{cmd:BLEND}} debuxa unha spline entre os extremos de dúas curvas abertas. Escolla cada curva preto do extremo que quere unir. `CONtinuity` escolle `Tangent` (a spline sae e chega seguindo as dúas curvas) ou `Smooth` (tamén se dobra como se dobran nos extremos); a escolla consérvase para a sesión. As dúas curvas non cambian. Rexeita obxectos pechados e dous extremos que xa se tocan.

### REGION

Alias: `REG`. {{cmd:REGION}} converte obxectos pechados en rexións: áreas planas que pode unir, cortar e medir. Seleccione círculos, polilíneas pechadas, elipses pechadas ou splines pechadas, ou liñas, arcos e polilíneas abertas que pechen un lazo extremo con extremo; cada lazo convértese nunha rexión e substitúe os obxectos de onde saíu. Os arcos seguen sendo arcos; as elipses e splines convértense en pequenos segmentos rectos. O que non está pechado e non pecha ningún lazo queda como está, e indícao cantos son. No debuxo unha rexión é unha ou máis polilíneas pechadas agrupadas sen nome, así que un clic selecciona a rexión enteira e unha copia é unha rexión propia; outros programas que abren o ficheiro ven polilíneas pechadas.

Con rexións no debuxo, {{cmd:UNION}}, {{cmd:SUBTRACT}} e {{cmd:INTERSECT}} na pestana 2D traballan sobre rexións: `UNION` une as rexións seleccionadas nunha (as que están separadas fanse unha rexión de varios contornos), `SUBTRACT` pide as rexións das que restar e despois as que se quitan (un furado segue sendo parte da rexión), `INTERSECT` conserva a área que todas comparten. Cada un di a área do resultado e é un paso de desfacer. Rexeitan cando non quedaría nada ou non hai nada en común. Na pestana 3D, e nun debuxo sen rexións, os mesmos comandos traballan sobre sólidos como antes.

## Modificar

Alias: `MT`, `T`; ou {{ui:Parágrafo}} na barra de ferramentas. Texto de parágrafo que se axusta a un ancho, escrito no seu sitio.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: a anchura entre as dúas esquinas é onde o texto se axusta. `H` pide `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` e omite a segunda esquina.
- Despois abrirase unha caixa no debuxo: escriba, {{key:Enter}} para un parágrafo novo, {{key:Mod+Enter}} ou un clic fóra para rematar, {{key:Esc}} para cancelar. A súa barra fixa a altura, o espazo entre liñas, a anchura e a xustificación. Vexa [Engadir texto e etiquetas](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias: `ED`, `DDEDIT`; ou faga dobre clic nun texto. `Select a text to edit`, repetido ata {{key:Enter}}: cada un ábrese na mesma caixa. Iniciado sobre un texto seleccionado ou con dobre clic, edita ese e remata.

### ERASE

Alias: `E`, `DELETE`; ou prema {{key:Delete}} con obxectos seleccionados.

- `Select objects` (omítese cando xa hai obxectos seleccionados)

### MOVE

Alias: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, escrito como `dx,dy`.

### COPY

Alias: `CO`, `CP`. Copias tantas veces como dea puntos.

`Array` no segundo punto fai unha fila dunha vez: dá o número de elementos (o orixinal conta como un) e despois o punto onde vai a primeira copia; as outras seguen coa mesma separación. `Fit` fai que ese punto sexa o lugar da última copia en troca, con as demais repartidas por igual entre elas.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, repetido ata Enter. `U` retira a última copia.

### ROTATE

Alias: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: en graos, positivo en sentido antihorario; ou faga clic nun punto para xirar cara a el.

### SCALE

Alias: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: escriba un factor como `0.5` ou `2`. Un punto escollido dá como factor a súa distancia ao punto base.

### MIRROR

Alias: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Alias: `AL`; ou {{ui:Modificar}} › {{ui:Máis}} › {{ui:Aliñar}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Con dous pares: `Scale objects based on alignment points? [Yes/No] <N>`

Vexa [Aliñar obxectos](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (ou a selección), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` pide o punto. A selección queda.

### DISTRIBUTE

- `Select objects` (polo menos tres), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Os dous externos quedan; a selección queda.

### ALIGNPANEL

Alias: `ALP`; ou {{ui:Modificar}} › {{ui:Máis}} › {{ui:Aliñar e distribuír}}. Abre o panel que executa ALIGNTO e DISTRIBUTE con clics.

### LASER

Alias: `LASERCUT`; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Láser…}}. Abre o panel Láser sobre o debuxo: o que fai cada capa (cortar, marcar, gravar, encher, imaxe), a vista previa, o código G GRBL para gardar, e o enmarcado e envío por Web Serial. Vexa [Enviar un debuxo a un láser](topic:laser-cutting).

### STRETCH

Alias: `S`; ou {{ui:Estirar}}. `Select objects to stretch`: arrastre xanelas de cruzamento (ou escriba `C`) sobre os extremos para mover. `Specify base point [Displacement]`, `Specify second point`. Os puntos dentro das xanelas móvense: extremos de liña, vértices de polilínea (os segmentos de arco conservan a súa altura), puntos de cota; círculos, elipses, texto, puntos e bloques móvense enteiros cando o seu centro ou punto de inserción está dentro. Unha selección feita antes do comando conserva as xanelas de cruzamento (e lazos) que a fixeron, así que estíranse do mesmo xeito. Sen xanela, os obxectos móvense enteiros.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; ou {{ui:Matriz}}. `Select objects`, despois `Enter array type [Rectangular/POlar] <Rectangular>` (só ARRAY).

- Rectangular comeza en 4 columnas × 3 filas, separadas 1,5 veces o tamaño dos obxectos, mostrado como vista previa. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` pide columnas e filas, `S` as distancias entre columnas e entre filas (un valor negativo vai á esquerda ou abaixo), `COL` e `R` unha dirección cada un.
- Polar pide `Specify center point of array`, comeza con 6 elementos en círculo completo, xirados. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` elementos, `F` o ángulo a encher (+ en sentido antihorario, − en horario), `ROT` Yes ou No.
- {{key:Enter}} (eXit) fai as copias, como obxectos simples. Un paso de desfacer.
- `AS` (ASsociative) alterna entre copias simples e unha matriz que segue editable: un obxecto que cambia despois con {{cmd:ARRAYEDIT}}, polos seus agarres ou en Propiedades. A escolla recórdase ({{cmd:ARRAYASSOCIATIVITY}}); comeza en copias simples.

### ARRAYPATH

Copias ao longo dunha curva. `Select objects`, despois `Select path curve`: unha liña, arco, círculo, elipse, polilínea ou spline (non un dos obxectos da matriz). A traxectoria comeza no extremo máis próximo aos obxectos, e o primeiro elemento son os obxectos onde están.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, con vista previa. `M`: `Divide` reparte os elementos por igual por toda a traxectoria, `Measure` pon un cada tanto ao longo dela. `I`: o número de elementos (con Measure, 0 significa os que caben; un número máis alto que o da traxectoria axústase ao que cabe). `SP`: a distancia entre elementos ao longo da traxectoria (pasa a Measure). `AL`: Yes xira cada elemento para seguir a traxectoria, No mantenos verticais.
- `AS` como en {{cmd:ARRAY}}. Con el activado, a matriz garda a súa propia copia da forma da traxectoria: editar a curva despois non move os elementos.
- Rexeita unha traxectoria que non é unha curva, e un só elemento.

### ARRAYEDIT

Cambia unha matriz feita con ASsociative. `Select array` (ou selecciónea antes). Imprime como está a matriz agora, despois pregunta ata {{key:Enter}}:

- Rectangular: `COL` columnas e a súa separación, `R` filas e a súa separación, `A` o ángulo ao que van as columnas.
- Polar: `I` elementos, `F` o ángulo de encher, `ROT` xirar elementos Yes ou No.
- Path: `M` Divide ou Measure, `I` elementos, `SP` separación, `AL` aliñar coa traxectoria.
- `S` (Source) abre os obxectos que a matriz repite, por si sós, como o editor de bloques. Debuxe e edite alí; {{cmd:ARRAYCLOSE}} garda ou descarta, e cada elemento segue o cambio.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, despois faga clic nos elementos a substituír, {{key:Enter}}. Eses elementos mostran o substituto en lugar; os obxectos substitutos saen do debuxo e viven na matriz. `RES` (RESet) mostra de novo os obxectos orixe en cada elemento.
- Cada cambio é un paso de desfacer. Rexeita copias simples, unha referencia de bloque simple e unha matriz nunha capa bloqueada.

Os mesmos números están en Propiedades baixo Matriz, e a matriz ten agarres: o seu punto base móveo, o agarre do segundo elemento fixa a separación, o agarre despois do último elemento fixa o número (polar: o segundo elemento fixa cantos elementos hai, e o último o ángulo de encher). {{cmd:EXPLODE}} devolve unha matriz a copias simples.

### ARRAYCLOSE

Remata {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Indícao cando non hai obxectos orixe de matriz abertos. {{cmd:BCLOSE}} fai o mesmo.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Fixa con que comezan {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR e {{cmd:ARRAYPATH}}; a súa opción `AS` cambia a mesma configuración. Recórdase neste navegador.

### OFFSET

Alias: `O`. Liñas, arcos, círculos e polilíneas.

Onde unha polilínea se move cara a fóra e os seus segmentos rectos se separan nunha esquina, {{cmd:OFFSETGAPTYPE}} decide como se pecha o oco.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, despois `Specify point on side to offset` (ou, con Through, `Specify through point`), repetido ata Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: como {{cmd:OFFSET}} pecha os ocos nas esquinas exteriores dunha polilínea. `0` alonga os segmentos ata encontrarse (o inicial), `1` úneos cun arco arredor da antiga esquina, `2` cun corte recto. As esquinas interiores e os segmentos de arco non se ven afectados. Conservado para esta sesión.

### EXTRIM

{{cmd:EXTRIM}} recorta todo dun lado dun bordo. Escolla o bordo de corte (unha liña, arco, círculo, polilínea, elipse, spline ou liña de construción), despois un punto no lado a limpar: cada liña, arco, círculo, polilínea e liña de construción que cruce o bordo perde a súa parte nese lado, desde o bordo. Mentres escolle o lado, as pezas que se irían seguen o punteiro. Para un bordo pechado os lados son dentro e fóra. Os obxectos que só tocan o bordo, e o texto, as tramas, as splines e as elipses que o cruzan, quedan como están. Un paso de desfacer.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: como comezan {{cmd:TRIM}} e {{cmd:EXTEND}}. `1` Rápido: cada obxecto é un bordo de corte ou límite. `0` Estándar: piden primeiro os bordos. Tamén `(setvar "TRIMEXTENDMODE" 0)` en LISP.

### TRIM

Alias: `TR`. Imprime primeiro `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. No modo Rápido cada obxecto visible é un bordo de corte, e un obxecto que nada cruza bórrase; no modo Estándar pregunta primeiro `Select cutting edges (Enter = every object)` e corta só nesas.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, repetido: faga clic na peza a quitar (queda gris e de trazos mentres o punteiro descansa sobre ela), arrastre un camiño por varias pezas (todas van nun paso), ou faga clic en dous puntos baleiros para un valado entre eles. {{key:Shift}} estende no seu lugar. `T` escolle os bordos de corte (modo Estándar), `F` pide puntos de valado, `C` dúas esquinas de xanela (as pezas parcialmente dentro tamén van), `O` pide `Enter a trim mode option [Quick/Standard]`, `E` pide `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` borra os obxectos que seleccione, `U` desfai a última escolla ou arrastre. Enter remata. Vexa [Recortar e estender](topic:trim-and-extend).

- Un clic nunha trama corta a trama: os bordos de corte parten a área tramada, e a peza que fixo clic retírase (non queda ningún contorno debuxado onde estaba). A trama conserva o seu patrón ou degradado; unha trama ligada ao seu contorno deixa de estar ligada despois, porque xa non o recheña. Indica cando nungún bordo de corte parte a trama alí, cando o clic queda fóra da trama, e cando non quedaría nada (use {{cmd:ERASE}}). Un camiño ou valado arrastrado non corta tramas.

### EXTEND

Alias: `EX`. O mesmo que TRIM ao revés: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Un clic alonga o extremo máis próximo ata o seguinte límite; un camiño ou valado arrastrado alonga cada obxecto que cruza; {{key:Shift}} recorta. `B` escolle os bordos límite (modo Estándar). Mode e Edge compártense con TRIM.

### LINKVIEWS

Alias: `SYNCVIEWS`; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Ligar as vistas dos paneis}}, ou a icona de ligazón nas lapelas do debuxo. `Link the panes' views [ON/OFF]` (Enter toma o outro estado): mentres está activo, un desprazamento ou zoom no panel activo move cada panel que mostra o mesmo tipo de espazo. Vexa [Dividir a pantalla](topic:split-screen).

### OPENIN3D

Sen alias; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Editar en ModelCraft}} onde a aplicación de modelado 3D recibe un debuxo entregado. Ábreo alí nunha pestana nova, como DWG (non se envía nada). Se o navegador bloquea a pestana, indícao.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: o que debuxa premer e arrastrar nun espazo baleiro. É o mesmo que Configuración › CadCraft › Arrastrar para seleccionar. Vexa [Selección con lazo](topic:lasso-selection).

### FILLET

Alias: `F`. Liñas, arcos, círculos e polilíneas. Imprime primeiro `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` pide `Specify fillet radius <last>`. `T` pide `Enter Trim mode option [Trim/No trim]`: con No trim os obxectos quedan como están e só se engade o arco.
  - `M` mantén o comando para máis esquinas ata {{key:Enter}}; `U` retira a última esquina sen saír do comando.
  - `P` pide `Select 2D polyline [Radius]` e redondea cada esquina onde se atopan dous segmentos rectos. Os redondeos que xa ten substitúense polo novo raio; raio 0 quítaos. As esquinas cuxos lados son demasiado curtos para o raio quedan e cóntanse.
- `Select second object or shift-select to apply corner [Radius]`. Manteña {{key:Shift}} ao facer clic para unha esquina aguda, sexa cal sexa o raio.

Faga clic en cada obxecto na parte que quere conservar. Dúas liñas que non se tocan aliméntanse. Dúas liñas paralelas reciben un semicírculo sobre o oco, no extremo da primeira liña máis próximo ao seu clic. Un círculo non se corta nunca. Dous segmentos dunha mesma polilínea veciños reciben o arco dentro da polilínea; unha polilínea e outro obxecto funcionan cando o corte cae no primeiro ou último segmento da polilínea.

### CHAMFER

Alias: `CHA`. Liñas e os segmentos rectos das polilíneas. Imprime primeiro as distancias actuais (ou lonxitude e ángulo).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` pide `Specify first chamfer distance <last>` e `Specify second chamfer distance <the first>`: a primeira córtase da primeira liña escollida, a segunda da outra.
  - `A` pide `Specify chamfer length on the first line` e `Specify chamfer angle from the first line`.
  - `E` (mEthod) escolle cal dos dous usa o seguinte bisel. `T`, `M`, `U` e `P` traballan como en {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+clic fai unha esquina aguda.

Unha distancia máis longa que a liña é rexeitada (`Distance is too large.`).

### BREAK e BREAKATPOINT

Alias: `BR`. `Select object` (onde fai clic é o primeiro punto), `Specify second break point [First point]`; `F` pide `Specify first break point` e `Specify second break point`. A parte entre eles desaparece; nun círculo, en sentido antihorario desde o primeiro punto. BREAKATPOINT pide `Specify break point` e parte o obxecto en dous alí (non un círculo).

### LENGTHEN

Alias: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: un clic imprime `Current length` (e o ángulo incluído dun arco) e pregunta de novo. `DE` pide `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` arrastra. Despois `Select an object to change [Undo]`, repetido: move o extremo máis próximo ao clic. Liñas, arcos e polilíneas abertas.

### JOIN

Alias: `J`. `Select objects to join`. Liñas, arcos e polilíneas abertas que se atopan extremo con extremo fanse polilíneas (pechadas cando a cadea se pecha); liñas sobre unha mesma liña fanse unha liña; arcos dun mesmo círculo fanse un arco ou o círculo. O historial di cantos obxectos se uniron e cantos non.

### MATCHPROP

Alias: `MA`, `PAINTER`. `Select source object`, despois `Select destination objects [Settings]` e {{key:Enter}}. Copia a capa e a cor, e entre obxectos do mesmo tipo a altura e anchura do texto, os tamaños das cotas ou o patrón de trama. `S` pide `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, repetido ata {{key:Enter}}; a escolla recórdase para a sesión.

### EXPLODE

Alias: `X`. As polilíneas convértense en liñas e arcos, as referencias de bloque nos seus obxectos, e as cotas en liñas, puntas de frecha e texto. Unha matriz que segue editable ({{cmd:ARRAYEDIT}}) convértese en copias simples dos seus obxectos.

- `Select objects`

### GROUP

Alias: `G`. {{cmd:GROUP}} dá aos obxectos seleccionados un nome que comparten. Seleccione os obxectos, despois escriba un nome (sen espazos; `?` lista os grupos; Enter fai un grupo sen nome) e, para un grupo con nome, unha descrición opcional. A partir de entón un clic en calquera deles, ou unha xanela que colla un, selecciona todos, así que se moven, copian e borran xuntos; cada obxecto segue sendo o seu propio obxecto. Un obxecto pode estar en varios grupos. Unha copia dun grupo completo é un grupo novo sen nome; unha copia dun membro só se une ao grupo. Os grupos pertencen ao espazo no que se crearon (o modelo ou unha folla). Consérvanse ao gardar como DWG ou DXF e ao abrir o ficheiro de novo en CadCraft; os ficheiros DXF 2000 tamén os levan como obxectos de grupo para outros programas, e os grupos feitos noutro programa léense ao abrir un DXF ou DWG.

### UNGROUP

{{cmd:UNGROUP}} desfai grupos: seleccione obxectos dos grupos (cada grupo en que están desfaise) ou escriba `Name` e o nome do grupo. Os obxectos quedan no debuxo. Un paso de desfacer devolve os grupos.

### GROUPEDIT

{{cmd:GROUPEDIT}} cambia un grupo. Escolla un dos seus obxectos, ou `Name` e o seu nome; un grupo que xa está seleccionado tómase tal como está. Despois: `Add` obxectos (escollidos de un en un, non grupo a grupo), `Remove` obxectos, `REName` o grupo, cambiar a súa `Description`, ou fixar `Selectable` (se un clic nun obxecto selecciona o grupo enteiro). `eXit` ou Enter remata. Un grupo sen obxectos desaparece.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: con `1` (o inicial) un clic ou unha xanela sobre un obxecto agrupado selecciona todo o grupo; con `0` obxectos individuais, así que pode editar un membro. Conservado para esta sesión.

## Portapapeis

O portapapeis propio de CadCraft: funciona dentro dun debuxo, entre debuxos e entre pestanas de CadCraft neste navegador. Vexa [Copiar, pegar e duplicar](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ou {{ui:Copiar}} no grupo {{ui:Editar}}. Copia obxectos ao portapapeis, cos bloques e capas que usan. Os obxectos quedan seleccionados.

- `Select objects to copy` (omítese cando xa hai obxectos seleccionados)

### CUTCLIP

{{key:Mod+X}}, ou {{ui:Cortar}} no menú {{ui:Máis}}. Copia obxectos ao portapapeis e despois os borra (un paso de desfacer).

- `Select objects to cut` (omítese cando xa hai obxectos seleccionados)

### COPYBASE

Copia obxectos ao portapapeis cun punto base que escolle; pegar coloca ese punto.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, ou {{ui:Pegar}} no grupo {{ui:Editar}}. A copia segue o cursor, colgada desde a esquina inferior esquerda da súa extensión (ou do seu centro, ou do punto de {{cmd:COPYBASE}}; vexa [Configuración de CadCraft](topic:settings)).

- `Specify insertion point`

Os obxectos pegados quedan seleccionados. Un bloque que o debuxo xa ten co mesmo nome conserva a definición deste debuxo.

Cando unha área copiada en MarkupCraft é máis nova que o que copiou CadCraft (e ten menos de 6 horas), {{key:Mod+V}} e `PASTECLIP` pegan esa área: vexa `PASTEAREA`.

### PASTEAREA

Alias: `PAREA`. {{ui:Pegar unha área copiada}} no menú {{ui:Máis}}. Pega unha área copiada con {{ui:Copiar área}} en MarkupCraft como imaxe ao seu tamaño real. Vexa [Imaxes nun debuxo](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (só cando a folla non tiña escala de debuxo): un número, {{key:Enter}} para o tamaño do papel, ou `P`, despois `First point on the pasted area`, `Second point on the pasted area` e a súa distancia real.

### PASTEORIG

{{key:Mod+Shift+V}}, ou {{ui:Pegar no mesmo sitio}} no menú {{ui:Máis}}. Pega nas coordenadas desde as que se copiaron os obxectos. Non pregunta nada.

### DUPLICATE

Alias: `DUP`. {{key:Mod+D}}, ou {{ui:Duplicar e mover}} no menú {{ui:Máis}}. Unha copia dos obxectos move-se co punteiro desde onde está; {{key:Esc}} non deixa nada. Non usa o portapapeis.

- `Select objects to duplicate` (omítese cando xa hai obxectos seleccionados)
- `Specify where the copy goes (Esc leaves nothing)`: faga clic, escriba un punto, `@dx,dy` (desde onde estaba o punteiro), ou unha distancia cara ao cursor.

### SELECT

Pregunta `Select objects` (con todas as opcións de abaixo) e deixa seleccionado o que escolla, para o seguinte comando ou para `P` máis tarde.

### QSELECT

Alias: `QS`. No navegador, o diálogo {{ui:Selección rápida}} (vexa [Seleccionar obxectos](topic:select-objects#select-by-a-rule-quick-select)). Sen el, a liña de comandos pregunta `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` e `Enter value`. As coincidencias pasan a ser a selección.

### SELECTSIMILAR

Alias: `SIM`. `Select objects [SEttings]` (ou a selección actual): selecciona cada obxecto do mesmo tipo, coa mesma capa e cor (e o mesmo nome de bloque, patrón de trama). `SE` pide `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, repetido ata {{key:Enter}}.

### FIND

Sen alias; ou {{ui:Editar}} › {{ui:Máis}} › {{ui:Buscar e substituír}}. No navegador, o diálogo {{ui:Buscar e substituír}} (vexa [Engadir texto e etiquetas](topic:text#find-and-replace-words)). Sen el: `Enter text to find`, despois `Enter replacement text (Enter: select what is found)`. Busca no texto, nos valores dos atributos e no texto das cotas, na lapela aberta ou na selección.

### SELECTALL e DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) selecciona cada obxecto que pode editar na lapela aberta. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE`; ou {{key:Esc}}) borra a selección.

## Cotas

### DIMLINEAR

Alias: `DLI`, `DIMLIN`. Distancia horizontal ou vertical.

- `Specify first extension line origin [Select object]` (Enter ou `S`: `Select object to dimension`, despois faga clic nunha liña, arco, círculo ou segmento de polilínea)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` pide o texto (`<>` é o valor medido), `H` e `V` fixan a dirección, `R` pide `Specify angle of dimension line <0>`.

### DIMALIGNED

Alias: `DAL`, `DIMALI`. A distancia real entre dous puntos.

- Orixes como en {{cmd:DIMLINEAR}}, despois `Specify dimension line location [Text]`.

### DIMANGULAR

Alias: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Arco: o seu ángulo. Círculo: `Specify second angle endpoint`. Liña: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: faga clic dentro do ángulo para medilo.

### DIMRADIUS e DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, despois `Specify dimension line location [Text]`.

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`. Continúa desde a última cota lineal ou aliñada feita (ou pregunta `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, repetido ata Enter.

### DIMBASELINE

Alias: `DBA`, `DIMBASE`. Como {{cmd:DIMCONTINUE}}, pero cada cota parte da primeira orixe e apílase máis aló.

### DIMORDINATE

Alias: `DOR`, `DIMORD`. `Specify feature location`, despois `Specify leader endpoint [Xdatum/Ydatum/Text]`. Escribe a distancia do elemento á orixe do UCS en X ou en Y, sobre unha referencia: unha referencia que vai máis ou menos cara arriba ou abaixo lé X, unha que vai de lado lé Y; `Xdatum` e `Ydatum` fixan cal. Fixe antes a orixe con {{cmd:UCS}} (sen ela é o 0,0 do debuxo). Os agarres moven o elemento, a orixe e o extremo da referencia, e o valor segue. Gárdase como cota ordinal real en DWG e DXF. Rexeita un extremo de referencia sobre o propio elemento.

### DIMARC

Alias: `DAR`. `Select arc or polyline arc segment`, despois `Specify arc length dimension location [Text]`. Mide ao longo do arco (non da corda) e escribe o símbolo de arco antes do valor. Rexeita un círculo completo, unha liña ou un segmento recto de polilínea. Un DWG gárdao como cota de lonxitude de arco; un DXF gárdao como cota angular co valor da lonxitude como texto, e CadCraft ábreo de novo como cota de lonxitude de arco.

### DIMJOGGED

Alias: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Cota de raio para unha curva cuxo centro está lonxe ou fóra da folla: a liña de cota comeza no punto que dá en lugar do centro, cunha quebra nela, e segue escribindo o raio real. Un DWG gárdao como cota de raio quebrado; un DXF gárdao como cota de raio, e CadCraft ábreo quebrado de novo.

### DIMJOGLINE

Alias: `DJL`. `Select dimension to add jog [Remove]`, despois `Specify jog location (or press Enter)`. Pon un símbolo de quebra na liña dunha cota lineal ou aliñada, para mostrar que a distancia non está debuxada a escala; o valor non cambia. `Remove` quítao. Rexeita outros tipos de cota.

### QDIM

Sen alias. `Select geometry to dimension`, despois `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Cota varios obxectos dun paso, desde os extremos de liñas e segmentos de polilínea, os centros de círculos e arcos, puntos e referencias de bloque. Unha posición por encima ou por debaixo dos obxectos mide a través, unha ao lado mide en vertical. `Continuous` encadea os puntos, `Baseline` mide todos desde o primeiro, `Staggered` aniña pares desde o centro cara a fóra, `Ordinate` dá a cada punto a súa distancia á referencia (`datumPoint` escolle unha nova), `Radius` e `Diameter` cotan cada círculo e arco escollido. O modo recórdase. Todo o que fai é un paso de desfacer. Indica cando hai menos de dous puntos, ou ningún arco ou círculo para Radius e Diameter.

### DIMBREAK

Alias: `DBREAK`. `Select dimensions to add or remove breaks`, despois `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` deixa un oco nas liñas de cota e de extensión onde cruza outro obxecto, e recalcúlao cando eses obxectos ou a cota se moven. `Manual` (unha cota) pide dous puntos e deixa un oco entre eles. `Remove` quita todos os ocos. O oco é 1,5 veces a altura do texto da cota.

### DIMSPACE

Sen alias. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Move as liñas de cota de cotas lineais e aliñadas paralelas (ou angulares sobre o mesmo vértice) para que queden á mesma distancia, contada desde a cota base, cada unha no lado no que está. `0` aliña cos da base; `Auto` é o dobre da altura do texto da cota base. As cotas que non son paralelas á base quedan como están.

### DIMINSPECT

Sen alias. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Debuxa un marco ao redor do valor, cunha etiqueta antes e a taxa de inspección despois. `remove` quita o marco. O texto de tolerancia queda co valor.

### DIMOVERRIDE

Alias: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, de novo ata Enter, despois `Select dimensions`. Cambia esas opcións só nas cotas seleccionadas; o estilo da cota non cambia. Admite as variables que son un número ou un interruptor (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` devolve as cotas seleccionadas ao seu estilo. Rexeita un nome que non é tal variable e un valor que non pode tomar.

### DIMREASSOCIATE

Alias: `DRE`, `DIMREASSOC`. `Select dimensions`, despois para cada unha as súas orixes de liña de extensión (`Specify first extension line origin on an object`: enganche a un extremo ou ao medio dunha liña, a unha esquina dunha polilínea, a un centro; Enter deixa ese punto libre), ou para un raio, diámetro, raio quebrado ou cota de lonxitude de arco `Select arc or circle`. A cota fica entón atada a eses obxectos: cando se moven ou cambian de tamaño, séguoos no mesmo paso de desfacer e volve medir. Mover a man un punto atado, ou borrar o obxecto, rompe esa unión. A unión gárdase en DWG e DXF 2000 como datos propios de CadCraft; outros programas ven unha cota normal.

### DIMDISASSOCIATE

Alias: `DDA`, `DIMDISASSOC`. `Select dimensions`. Libéraas dos obxectos aos que están atadas; non se move nada.

### CENTERMARK

Alias: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, de novo ata Enter. Debuxa unha cruz no centro e catro liñas de centro ata un pouco máis aló da curva (tipo de liña CENTER), como liñas simples na capa actual; dimensionadas segundo o tamaño da frecha e a escala global da configuración de cotas actual, xiradas co UCS. Non seguen o círculo se este se move.

### CENTERLINE

Alias: `CL`. `Select first line`, `Select second line`. Debuxa unha liña a medio camiño entre dúas liñas (pola bisectriz cando se atopan), un pouco máis longa que elas, co tipo de liña CENTER. É unha liña simple: non segue as dúas liñas.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Sen alias. Cada un pregunta `Enter new value for … <current>` e fixa ese tamaño para as cotas **novas**: escala global, altura do texto, tamaño da frecha, cifras decimais (ata 8), espazo ao redor do texto, extensión máis aló da liña de cota, desfasamento desde a orixe. Vexa [Fixar os tamaños das cotas](topic:dimension-settings).

### DIMLUNIT

Opción de cota: o formato de lonxitude só das cotas novas (1 científico, 2 decimal, 3 enxeñaría, 4 arquitectónico, 5 fraccionario).

### DIMSTYLE e -DIMSTYLE

Alias: `DST`, `DDIM`, `D`. O xestor de estilos de cota: {{ui:Fixar como actual}}, {{ui:Novo…}}, {{ui:Modificar…}}, {{ui:Renomear…}}, {{ui:Eliminar}}, {{ui:Comparar…}}, {{ui:Aplicar á selección}}. `-DIMSTYLE` na liña de comandos: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Vexa [Fixar os tamaños das cotas](topic:dimension-settings#named-dimension-styles).

### DIMEDIT e DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, despois as cotas (ou as xa seleccionadas). New pide o texto (`<>` = a medida); Rotate un ángulo (0 devolve o texto); Oblique o ángulo das liñas de extensión desde o eixo X (Enter = ningún; só cotas lineais e aliñadas). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Vexa [Fixar os tamaños das cotas](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, ou con cotas seleccionadas `Units in the text of the selected dimensions`. Escribe a lonxitude medida nesa unidade, coa unidade despois (DIMLFAC e un sufixo DIMPOST); `D` volve ás unidades do debuxo. Vexa [Cotas en mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias: `RC`. Imprime `Arc length: … Type: …`, despois `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular pide `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand segue o punteiro ata un clic ou {{key:Enter}}; `O` pide `Select object` e `Reverse direction? [Yes/No] <N>` e convirte o obxecto en nube. `A` pide `Specify the length of each arc`. `R`, `P` e `F` escollen o tipo para a seguinte nube. O resultado é unha polilínea pechada de arcos.

### MLEADER

Alias: `MLD`; ou {{ui:Referencia}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, despois o texto na caixa no sitio (ou, sen ela, `Enter text (an empty line ends)`). `Block` pide primeiro un nome de bloque e a multirreferencia mostra ese bloque en lugar de texto. Máis liñas de referencia: {{cmd:MLEADEREDIT}}. Gárdase como multirreferencia real en DWG; DXF garda as liñas, a frecha e o texto que debuxa.

### MLEADEREDIT

Alias: `MLE`. `Select a multileader`, despois `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: cada punto engade unha liña de referencia desde unha frecha nova ao mesmo punto de destino, ata Enter. `Remove leaders` quita entón a liña de referencia que faga clic (unha multirreferencia conserva polo menos unha). `Block content` pide un nome de bloque e mostra ese bloque en lugar do texto (pídense os seus atributos); `Text content` devolve o texto. Cada liña de referencia ten o seu propio agarre. Un DWG garda cada liña de referencia e o bloque nunha mesma multirreferencia.

### MLEADERALIGN

Alias: `MLA`. `Select multileaders`, despois `Select multileader to align to [Distribute/Spacing/Use current spacing]` e `Specify direction`. Move os puntos de destino das outras multirreferencias (e o seu texto ou bloque) sobre a liña que pasa polo destino da escollida, nesa dirección; as frechas quedan onde apuntan. `Spacing` tamén as separa por igual; `Distribute` pide dous puntos e repárteas entre eles. Precisa polo menos dúas multirreferencias.

### MLEADERCOLLECT

Alias: `MLC`. `Select multileaders`, despois `Specify collected multileader location [Vertical/Horizontal]` (Enter conserva o lugar da primeira). Fai unha multirreferencia de varias: o contido de bloque vai a un bloque novo que contén todos os bloques lado a lado ou un debaixo doutro; o contido de texto convértese nunha nota cunha liña por cada un. A primeira multirreferencia conserva as súas liñas de referencia; as outras retíranse. Rexeita unha mestura de contido de texto e de bloque.

### TABLE

Alias: `TB`; ou {{ui:Anotar}} › {{ui:Máis}} › {{ui:Táboa}}. Fai unha táboa: un obxecto que move, copia, xira, escala e traza como calquera outro, cunhas celdas gardadas como datos.

- `Number of data rows or [Paste/File/Style] <3>`, despois `Number of columns <3>`, `Text height` e `Top left corner of the table`. A táboa recibe unha fila de título (unha celda combinada) e unha fila de cabeceira enriba das filas de datos.
- `P`: unha táboa desde celdas dunha folla de cálculo no portapapeis (texto cun tabulador entre celdas). Premer {{key:Ctrl+V}} con esas celdas no portapapeis fai o mesmo, salvo que a copia propia de CadCraft sexa a máis nova (ou CadCraft non o poida saber: entón pega a súa propia copia e dino). `F`: unha táboa desde un ficheiro `.csv` ou separado por tabuladores. A primeira fila pasa a ser a cabeceira; os anchos das columnas axústanse ao texto.
- `S`: escolla o estilo de táboa para esta táboa (vexa {{cmd:TABLESTYLE}}).
- Rexeita un número de filas ou columnas que non é enteiro, e máis celdas das que cabe nunha táboa (2.000 filas, 200 columnas, 40.000 celdas).
- {{cmd:EXPLODE}} converte unha táboa en liñas e texto. Gardada como DWG, a táboa é un obxecto de táboa real que outros programas poden editar; gardada como DXF é un bloque que a debuxa, e CadCraft ábreo de novo como táboa.

### TABLEDIT

Alias: `TABLEEDIT`, `TABEDIT`; ou faga dobre clic nunha celda. Edita unha táboa.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Faga clic nunha celda, ou con unha táboa seleccionada escriba o seu nome (`B3`: columna B, fila 3; a fila de título é a fila 1). No navegador abre unha caixa sobre a celda: {{key:Enter}} conserva o texto, {{key:Tab}} pasa á seguinte celda, {{key:Alt+Enter}} comeza unha liña nova, {{key:Esc}} deixa a celda como estaba.
- Un texto que empeza por `=` é unha fórmula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, con `+ - * / ^`, paréntese e funcións como `sqrt` e `round`. A celda mostra o valor; unha fórmula que nomea a súa propia celda, unha celda fóra da táboa ou unha celda sen número mostra `####` e a liña de comandos di por que.
- `R` / `C`: `Insert` ou `Delete` filas ou columnas nunha celda escollida (cantas, e enriba ou abaixo, á esquerda ou á dereita). As fórmulas seguen as celdas que nomean.
- `S`: a anchura da columna e a altura da fila. Unha fila nunca é máis baixa do que necesita o seu texto. Unha táboa seleccionada tamén ten un agarre no bordo de cada columna e de cada fila.
- `M`: combinar desde unha celda escollida ata outra; `U`: separar. `A`: aliñación (`TL` arriba á esquerda … `MC` centro ao medio … `BR` abaixo á dereita). `H`: a altura propia do texto desta celda (0 = a do estilo). `K`: facer a fila de título, cabeceira ou datos. `CL`: vaciar a celda.
- Rexeita unha táboa nunha capa bloqueada, borrar todas as filas ou columnas, e unha combinación que partiría en dous outra celda combinada.

## Disposición e trazado

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; ou o botón {{ui:+}} baixo o debuxo. Unha folla nova cun bordo, unha cartela e unha vista, en ISO A3 (ou Tabloid para debuxos en polgadas ou pés). Sen preguntas.

### MVIEW

Alias: `MV`. Só nunha folla ({{cmd:VPORTS}} nunha folla fai o mesmo).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. A vista mostra todo o modelo a unha escala estándar.
- `P` (Polygonal): faga clic nas esquinas do contorno (`Undo`, `Close`), {{key:Enter}} ao rematar. Rexeita menos de tres esquinas.
- `O` (Object): `Select a closed object for the viewport's outline`: unha polilínea pechada, un círculo ou unha elipse na folla. A vista toma a súa forma (as curvas como pequenos tramos rectos); o obxecto queda como estaba. Rexeita un obxecto que non está pechado.

### VPCLIP

Recorta unha vista que xa está na folla. `Select viewport to clip` (ou selecciónea antes), despois `Select the object to clip to [Polygonal/Delete]`:

- Faga clic nunha polilínea pechada, un círculo ou unha elipse, ou {{key:Enter}} (ou `P`) para facer clic nas esquinas dun polígono.
- `D` (Delete, ofrecido cando a vista está recortada) devolve un rectángulo: a caixa arredor do contorno que tiña.
- O que mostra a vista non se move no papel, e a súa escala queda. O modelo debúxase e trázase só dentro do contorno, e o bordo segue ao contorno. Un paso de desfacer.
- Unha vista recortada ten un agarre en cada esquina do seu contorno, ademais do centro e das catro esquinas da súa caixa (arrastrar unha esquina da caixa estira o contorno con ela). Propiedades mostra Contorno: Rectángulo, ou Recortado co número de esquinas.
- Os ficheiros DWG e DXF 2000 gardan o contorno para CadCraft. Outros programas abren a vista como o rectángulo que a rodea; DXF R12 garda só o rectángulo.
- Na pestana do modelo indica que as vistas están nas follas.

### VPORTS

Alias: `VIEWPORTS`. {{cmd:SPLIT}} é o mesmo desde unha folla tamén, e {{ui:Vista}} › {{ui:Máis}} › {{ui:Dividir lado a lado}}, {{ui:Dividir apilado}}, {{ui:Catro paneis}}, {{ui:Un panel}} o executan. No modelo: `Enter number of panes [SIngle/2/3/4] <3>`; `2` pregunta `[Horizontal/Vertical] <Vertical>` (Vertical = lado a lado), `3` pregunta `[Left/Right] <Right>` (onde vai o panel grande). Cada panel conserva a súa propia vista e espazo; un clic fai activo un panel. Nunha folla é {{cmd:MVIEW}}. Vexa [Dividir a pantalla](topic:split-screen).

### VPVIEW

Sen alias. Só nunha folla.

- `Select viewport` (omítese se xa hai unha seleccionada), despois no modelo: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Sen alias. Un sistema de coordenadas propio; non é unha edición. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: un punto é unha orixe nova, despois `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: orixe, un punto no eixo X positivo, un punto no lado Y positivo. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` e un nome. A vista xira para que o novo eixo X quede nivelado. Vexa [Xirar a vista e usar coordenadas propias](topic:ucs-and-turned-view).

### PLAN

Sen alias. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: xira a vista do panel activo para que o eixo X do UCS (ou o do mundo) quede nivelado. Nada do debuxo se move.

### TURNLEFT, TURNRIGHT, TURNWORLD

Sen alias; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Xirar a vista 90° á esquerda}}, {{ui:Xirar a vista 90° á dereita}}, {{ui:Volver ao mundo}}. O mesmo que `UCS Z -90`, `UCS Z 90` e `UCS W`, coa vista seguíndoa.

### VPLAYER

Sen alias. Nunha folla, ou dentro dunha vista. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` piden nomes de capa (comas, comodíns `*` e `?`), despois `[All/Select/Current] <Current>` vistas; Reset devolve cada capa ao seu predeterminado «conxelada nas vistas novas»; `V` fixa ese predeterminado (`[Frozen/Thawed]`), que usa {{cmd:MVIEW}}. `?` lista as capas conxeladas na vista actual. A columna de vistas do panel Capas fai o mesmo para unha vista. Vexa [Conxelar unha capa nunha vista](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias: `MS`; ou faga dobre clic dentro dunha vista. Só nunha folla. Traballa no modelo a través dunha vista: a seleccionada, a única da folla, ou `Click inside the viewport to work in`. Desprazar e ampliar dentro cambian a vista da vista (unha bloqueada no visor conserva a súa e move a folla), e a nova vista escríbese como un paso de desfacer. Vexa [Traballar no modelo a través dunha vista](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias: `PS`; ou faga dobre clic fóra da vista, ou prema unha lapela baixo o debuxo. Volve á folla.

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; ou {{key:Mod+P}}. Abre o diálogo {{ui:Trazar a PDF}}. Vexa [Trazar a PDF](topic:plot-pdf).

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; ou {{ui:Editar táboas…}} no diálogo {{ui:Trazar a PDF}}. Abre {{ui:Táboas de estilo de trazado}}: como se imprime cada cor (cor, gris, tinta, grosor de liña), conservado co debuxo. Vexa [Táboas de estilo de trazado](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} move obxectos entre unha folla e o modelo a través dunha vista, escalados e xirados para que se vexan igual desde o outro lado. Nunha folla, seleccione obxectos e vanse ao modelo (escolla a vista cando a folla ten máis dunha). Mentres traballa no modelo a través dunha vista ({{cmd:MSPACE}}), os obxectos seleccionados veñen á folla. Indica cantas veces máis grandes ou máis pequenos quedaron. As vistas quedan na súa folla. Un paso de desfacer.

### ISODRAFT

{{cmd:ISODRAFT}} activa ou desactiva o debuxo isométrico con `ON` ou `OFF`, ou vai directamente ao plano `Left`, `Top` ou `Right`. Mentres está activo: Orto ({{key:F8}}) mantén as liñas nos dous eixes do plano (esquerdo: 90° e 150°; superior: 30° e 150°; dereito: 30° e 90°), o seguimento polar ({{key:F10}}) segue os mesmos eixos, o enganche á cuadrícula ({{key:F9}}) usa a cuadrícula isométrica, e a cuadrícula ({{key:F7}}) debúxase con liñas a 30°, 90° e 150°. {{cmd:ELLIPSE}} gaña `Isocircle`: dá un centro e un raio (ou `Diameter`) e debuxa a elipse que mostra un círculo no plano actual. O debuxo queda plano: son axudas para debuxar unha vista pictórica, non un modelo 3D. A opción é para esta sesión e non se garda no ficheiro.

### ISOPLANE

{{cmd:ISOPLANE}} escolle o plano no que traballa o debuxo isométrico: `Left`, `Top` ou `Right`. Enter pasa ao seguinte plano. Mentres o debuxo isométrico está activo, {{key:F5}} fai o mesmo no medio dun comando; mentres está desactivado, {{key:F5}} queda para o navegador.

## Consulta

### CAL

Imprime o valor dun cálculo, tal como se lee en calquera lugar onde se escribe unha lonxitude.

- `Expression`: escríbao, por exemplo `12'6"+3/4"` ou `(24'-0")/3`, e prema {{key:Enter}}. CadCraft imprime `= 12'-6 3/4"   (150.75 drawing units)`. Vexa [Aritmética nun valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias: `DI`; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Medir distancia}}.

- `Specify first point`, `Specify second point`. Imprime a distancia, o ángulo, a Delta X e a Delta Y.

### AREA

Alias: `AA`; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Superficie}}. Imprime a área e o perímetro.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Faga clic ou escriba esquinas; en `Specify next point (Enter closes) [Undo]` prema {{key:Enter}} para pechar o contorno. `U` retira a última esquina.
  - {{key:Enter}} ou `O`, despois `Select object`: un círculo (imprime a súa circunferencia), unha elipse, unha polilínea (unha aberta pécase cunha liña recta para a área, e imprímese a súa lonxitude) ou unha trama (retíranse os furados).
  - `A` (Add area) e `S` (Subtract area) manteñen un total acumulado: a indicación comeza con `(ADD mode)` ou `(SUBTRACT mode)`, cada área engádese ou réstase, e `Total area = …` imprímese despois de cada unha. Nestes modos `O` escolle obxectos ata {{key:Enter}}, e {{key:Enter}} na primeira indicación remata o comando.

### MEASUREGEOM

Alias: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; despois de cada medida pregunta de novo, con `eXit` como predeterminado.

`Quick` mide arredor do punteiro mentres o move: a distancia ao obxecto máis próximo á dereita, arriba, á esquerda e abaixo (segundo os eixos do UCS actual), debuxada mentres avanza, e o ángulo onde dous dos veciños son rectos e se atopan. Un clic escribe as catro distancias, o ancho e alto libres e os ángulos no historial; Enter volve ás opcións. Lee o que está na pantalla.

- `D`: dous puntos, como {{cmd:DIST}}.
- `R`: `Select arc or circle`; imprime o raio e o diámetro.
- `A`: un arco (o seu ángulo incluído), unha liña e despois unha segunda liña (o ángulo entre elas, cara aos seus extremos afastados), ou {{key:Enter}} e tres puntos (vértice, e despois os dous extremos).
- `AR`: como {{cmd:AREA}}, unha soa área.

### ID

Sen alias. `Specify point`; imprime a súa X e Y.

### LIST

Alias: `LI`, `LS`. `Select objects`; imprime o tipo, a capa e as medidas principais de cada obxecto.

### MASSPROP

{{cmd:MASSPROP}} dá as propiedades de sección das rexións e obxectos pechados que seleccione, tomados en conxunto: área, perímetro, caixa envolvente, centroide, momentos de inercia respecto dos eixes X e Y pola orixe, produto de inercia, raios de xiro, os mesmos momentos respecto do centroide, e os momentos principais cos sentidos dos seus eixes. Os furados nunha rexión contan como furados. As cifras están en unidades do debuxo e son exactas para contornos feitos de liñas e arcos; as elipses e splines mídense como pequenos segmentos rectos, e di iso. Despois do informe pregunta se o escribe nun ficheiro de texto. Os obxectos que non están pechados quedan fóra, e indica cantos son.

## Vista, ficheiro e outros

### ZOOM

Alias: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Faga dous clics para unha xanela. `E`, `A` ou Enter: todo o debuxo.
- `P` (Previous, ou {{ui:Anterior}} na barra de ferramentas) volve á vista anterior, ata 10 vistas por pestana; un conxunto de pasos da roda ou un desprazamento conta como unha vista.
- Un número como `2`, `2x` ou `0.5x` (ou `S` e logo o número) amplía ou reduce por ese factor arredor do centro da pantalla.
- `C` pide `Specify center point` e `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT e os comandos PDF

Alias: `PDFATT` para {{cmd:PDFATTACH}}, `PDFIM` para {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} pon unha páxina PDF baixo o debuxo (ficheiro, páxina, punto de inserción, escala, rotación); {{cmd:PDFIMPORT}} converte as liñas, curvas, recheos e texto dunha páxina en obxectos do debuxo, en capas co nome do PDF, a tamaño real, a unha escala escrita, ou escalados desde dous puntos e unha distancia real. {{cmd:PDFCLIP}} recorta unha subcapa, {{cmd:PDFADJUST}} fixa o esvaecemento, o contraste, o monocromo ou apágaa, {{cmd:PDFLAYERS}} activa e desactiva as capas propias do PDF, e {{cmd:PDF}} lle dá de novo a CadCraft os ficheiros que usan as subcapas dun debuxo. Vexa [Subcapas PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Autocompletar do debuxo: sen ningún comando en execución, un fantasma gris mostra o que din os patróns propios do debuxo sobre o que vén despois. {{cmd:AUTOCOMPLETE}} o activa `On` ou desactiva `Off` (tamén en Configuración › CadCraft) ou `Show` o que suxeriría agora. **Tab** debuxa o fantasma nun paso de desfacer, **Esc** descártao ata que cambie o debuxo. Atopa tres cousas nos obxectos máis novos: a seguinte copia de algo debuxado dúas veces ou máis a un paso igual (montantes, piares, o contrahuella e a pisada dunha escaleira), os seguintes chanzos dunha escaleira en polilínea, e o lado que falta dunha habitación ou cadea de muros. Mentres se debuxa con {{cmd:LINE}} ou {{cmd:PLINE}} o fantasma é o **seguinte punto**: o seguinte chanzo dunha escaleira (contrahuella, pisada, contrahuella…), a cuarta esquina dun rectángulo, o punto que o pecha, ou un paso igual máis. Achegue o cursor e prema **Tab**, coma se fixese clic alí; siga ou prema Enter. Calculado neste computador por regras, sen modelo.

### AUTOSHEET

Alias: `ASH`. Follas que se dispoñen soas. {{cmd:AUTOSHEET}} toma as pezas do debuxo (as súas vistas con nome, ou as partes separadas do modelo, ou o modelo enteiro), escolle un tamaño de papel (ou o que vostede dea), dálle a cada peza unha escala estándar (unha para todas, ou a maior que cada unha admite) e coloca as vistas en filas en follas novas, cunha cartela e un epígrafe (nome e escala) debaixo de cada unha. O que non cabe nunha folla recibe unha folla propia. Un paso de desfacer. Calculado neste computador por regras, sen modelo.

### PHOTOSKETCH

Alias: `PSK`. Foto de esbozo a debuxo. Escolla unha foto (JPEG, PNG ou TIFF) dun esbozo a man nunha folla de papel. {{cmd:PHOTOSKETCH}} atopa as catro esquinas da folla, endereza a perspectiva, toma o tamaño de papel que nomee (`Paper`, ou o estándar máis próximo) e a `Scale` do esbozo (1 : n), e despois traza as liñas do lapis en liñas, arcos e círculos, cunha capa por cada cor de lapis (negro, vermello, azul, verde). Se non pode atopar o bordo do papel, toma a foto enteira como folla e díxoo. Excluídas as letras. Un paso de desfacer. Feito neste computador con procesamento clásico de imaxes, sen modelo, sen enviar nada a ningures. Vexa tamén os comandos de debuxos escaneados.

### AUTODIM

Alias: `ADIM`. Cotar automaticamente por regras. {{cmd:AUTODIM}} cota os obxectos seleccionados (ou o debuxo enteiro) a partir dos seus bordos a nivel e a prumo: unha cadea de cotas ao longo dos lados que escolla (`Sides`), unha cota total por fóra dela, a anchura de cada ván (un oco entre liñas de muro alineadas), un diámetro para cada tamaño de furo e, con `Grid`, a separación entre liñas da cuadrícula. Unha cota que xa está alí non se fai de novo. Un paso de desfacer. Calculado neste computador por regras, sen modelo.

### GRIDMOVE

Alias: `GM`. Mover unha liña da cuadrícula leva o conxunto. {{cmd:GRIDMOVE}} move unha liña da cuadrícula (unha liña nunha capa cuxo nome di grid ou axis) e o que depende dela: os muros cun extremo sobre a liña estíranse para seguila, os muros ao longo dela móvense enteiros, os piares (referencias de bloque e círculos sobre a liña), a súa burbulla e etiqueta móvense, e as cotas cuxos puntos están sobre ela miden a nova separación. Dé dous puntos (só conta a parte que cruza a liña) ou `Distance`. Un paso de desfacer desfai todo. Feito neste computador por regras.

### DETAILS

Alias: `DET`. Detalles que o atopan a vostede. {{cmd:DETAILS}} conserva os detalles propios da súa empresa: `Add` pon un bloque deste debuxo na lista, `List` e `Remove` xestionan a lista, `Find` ordena os detalles segundo o seleccionado (ou o último que debuxou) polas palabras das súas capas, nomes de bloque, patróns de trama e notas comparadas co nome e as notas de cada detalle, así que unha xamba de ventá atopa a súa lámina de rodapé. Escolla un número e un punto para colocalo. Con `Hint` activado (tamén en Configuración › CadCraft), seleccionar algo que un detalle coincide pon unha liña na barra de estado. A lista gárdase neste navegador, neste computador, e esa lista é a que se busca. `Share` pónaa tamén na súa carpeta de Documentos (`.cadcraft/firm-details.json`, con o debuxo de cada bloque): `Pull` engade o que ten o seu equipo e vostede non ten, `Push` engade o que vostede ten e eles non, `Both` fai as dúas cousas, e nunca se retira nada de ningún lado. Abra primeiro a carpeta de Documentos ({{cmd:DOCUMENTS}}); cando esa carpeta é unha carpeta Team Cloud Plan, o equipo enteiro comparte unha lista. Un elemento de detalle no panel da Biblioteca ten un botón **Engadir aos detalles da miña empresa** que o pon na mesma lista. Feito neste computador por palabras, sen modelo.

### SKETCHFIX

Alias: `SKF`. Os esbozos a lapis convértense en xeometría precisa. Prema e arrastre un trazo a man alzada de cada vez (lapis, rato ou dedo), despois Enter. Cada trazo lese como liña, círculo, arco, rectángulo ou polilínea: as liñas case horizontais e verticais fanse exactamente horizontais e verticais, un trazo pechado e redondo convértese nun círculo, un trazo pechado con catro esquinas en ángulo recto nun rectángulo, e os extremos dos trazos xúntanse e atráense aos extremos xa existentes no debuxo. Un paso de desfacer. Calculado neste computador por regras, sen modelo.

### SCANATTACH e os comandos de debuxos escaneados

Alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} non ten ningún. Traballan sobre unha imaxe, cun paso de desfacer cada un. {{cmd:SCANATTACH}} insire un PNG, JPEG, TIFF (unha páxina ou todas) ou unha páxina PDF que é unha imaxe. {{cmd:SCANSCALE}} escala a folla desde dous puntos escollidos e a distancia real. {{cmd:SCANALIGN}} move e xira a folla sobre dous puntos (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} mostra o ángulo das liñas longas da folla e xira a folla cando acepta (`Accept`) ou dá un `Value`. {{cmd:SCANCLEAN}} a pon en branco e negro (`Threshold` Auto/Adaptive/Level, `Specks`) e `Run`. {{cmd:SCANCROP}} conserva unha xanela. {{cmd:SCANERASE}} borra un `Rectangle`, `Polygon` ou `Lasso`. {{cmd:SCANTRACE}} traza liñas e arcos nunha capa nova (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) e di o que atopou e o que deixou como mapa de bits. {{cmd:SCANINFO}} lista o ficheiro orixinal e os pasos. {{cmd:RASTERSNAP}} activa ou desactiva o enganche ás liñas das follas escaneadas. Vexa o tema Debuxos escaneados e o trazo.

### REGEN e REGENALL

Alias: `RE` para {{cmd:REGEN}}, `REA` para {{cmd:REGENALL}}. Reconstrúe o que se debuxa na pantalla a partir do debuxo: {{cmd:REGEN}} a lapela que mira (nunha folla, tamén o modelo que mostran as súas vistas), {{cmd:REGENALL}} cada lapela, cada panel dunha pantalla dividida e cada debuxo aberto. Úseos cando a imaxe parece antiga despois dun cambio por script ou moi grande, ou cando un asistente editou o debuxo; o debuxo en si non se toca, así que non hai nada que desfacer.

### NAMEDVIEW

Alias: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, despois o nome da vista. `S` garda a vista na pantalla, `W` unha xanela que escolla, `R` mostra unha vista gardada, `D` elimina unha, `?` lista as vistas desta pestana. Gardar cun nome xa existente substitúeo; cada cambio é un paso de desfacer. As vistas pertencen á pestana onde se gardaron. Os ficheiros DWG e DXF consérvanas (a táboa VIEW); as vistas dunha folla volven na primeira folla, porque o ficheiro non indica cal.

### UNDO e REDO

Alias: `U` para {{cmd:UNDO}}; {{cmd:REDO}} non ten ningún. Tamén {{key:Mod+Z}} e {{key:Mod+Y}}.

### LAYER

Alias: `LA`. Vai ao panel {{ui:Capas}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` ou un nome (`?` lístaos: Continuous, os propios do debuxo, e DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE cos seus tamaños `2` (a metade) e `X2` (o dobre)). {{cmd:LWEIGHT}} (`LW`): o grosor de liña para os obxectos novos en mm, ou `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): a escala de tipo de liña do debuxo (desfacíbel). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — o mesmo que o botón {{ui:LWT}} da barra de estado. Vexa [Grosores e tipos de liña](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, despois o nome novo; os obxectos ou referencias seguen o cambio. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` ata {{key:Enter}}, despois `Select object on target layer or [Name]` e `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, despois `Y`: a capa e cada obxecto nela desaparecen (non a capa 0, DEFPOINTS nin a capa actual). Un paso de desfacer cada un. Vexa [Organizar un debuxo con capas](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Capas seleccionando obxectos; tamén no menú {{ui:Ferramentas}} do panel {{ui:Capas}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, despois {{key:Enter}}: apágase cada outra capa. {{cmd:LAYUNISO}} volve acendelas. {{cmd:LAYOFF}} e {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (ou conxelada), unha e outra vez; `U` desfai o último, {{key:Enter}} remata. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} acende todas as capas, {{cmd:LAYTHW}} descongela todas. Cada comando é un paso de desfacer. Vexa [Organizar un debuxo con capas](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} comeza un debuxo baleiro e {{cmd:OPEN}} abre un DWG ou DXF, cada un nunha pestana propia sobre o debuxo (un debuxo novo sen tocar úsase no seu lugar en vez dunha pestana nova). Pechar unha pestana con cambios sen gardar pregunta antes. Vexa [Dividir a pantalla](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, tamén {{key:Mod+S}}) descarga unha copia no formato do debuxo: DWG se se abriu desde un DWG, DXF se se abriu desde un DXF. Un debuxo novo usa o formato escollido por última vez en Gardar como neste navegador, e senón DWG.

{{cmd:SAVEAS}} (tamén {{key:Mod+Shift+S}}) abre o diálogo {{ui:Gardar unha copia como}}: escolla {{ui:DWG}} (e a súa {{ui:Versión}}), {{ui:DXF R12}} ou {{ui:DXF 2000}}, despois {{ui:Gardar}}. A escolla queda para este debuxo e para os debuxos novos neste navegador.

{{cmd:DXFOUT}} descarga sempre unha copia DXF R12, sen cambiar o formato que usa {{cmd:SAVE}}.

Vexa [Ficheiros: que abre, que garda](topic:files#saving).

### TOUR

Alias: `TUTORIAL`. Comeza de novo o percorrido de seis pasos do primeiro debuxo. Vexa [Primeiros pasos](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Vexa [Configuración](topic:settings#toolbar-position).

### COMMANDLINE

Alias: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: acopla ou fai flotar a liña de comandos, deixaa nunha soa liña, pregunta cantas liñas de historial mostrar (0 a 12), ou abre o historial. Vexa [Configuración](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: as barras por riba do debuxo como estaban, ou compactas. Vexa [Configuración](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: o paso ao que se aliñan as liñas de seguimento {{ui:Polar}} (máis de 0, ata 180). Conservado neste navegador.

### UNITS

Alias: `UN`. Como se escriben e escriben as lonxitudes.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Arquitectónico e Fraccionario: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Os outros: `Enter number of decimal places (0 to 8)`.

As cotas novas seguen isto. Un paso de desfacer. É o mesmo que {{ui:Formato de lonxitude}} e {{ui:Precisión}} en {{ui:Configuración actual}}; vexa [Pés e polgadas](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias: `GDS`. Ve unha disposición de CI (un ficheiro de fluxo GDSII): proba de laboratorio, só para ver e medir.

- Un selector de ficheiros toma un ficheiro `.gds`; con varias celdas superiores, `Enter the top cell to draw`.
- Cada capa e tipo de datos convértese nunha capa do debuxo (`GDS 1`, `GDS 2/5`); as referencias e matrices colócanse planas, na unidade de usuario do ficheiro (normalmente micrómetros). Un paso de desfacer. Nada se simula nin se comproba, e o ficheiro non se escribe de volta.

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`. Un diagrama a partir de texto.

- Unha caixa toma o texto (ou unha liña con `;` entre instrucións na liña de comandos): un diagrama de fluxo Mermaid, un diagrama de compoñentes PlantUML, D2 ou unha lista de orixe e destino.
- `Specify the top left corner of the diagram`, despois `Specify the text height`.

Bloques e conectores son obxectos ordinarios na capa `Diagram`, seleccionados ao rematar. Un paso de desfacer. Vexa [Debuxar un diagrama desde texto](topic:text-to-diagram).

### OLELIST

Alias: `OLES`. Os obxectos OLE que leva un DWG e que CadCraft non pode colocar por si mesmo.

- Lista cada un: número, tipo, tamaño, e se gardou unha imaxe.
- `Enter an option [Place/eXit] <eXit>`: Place pide o número, a esquina inferior esquerda e a anchura, e debuxa un marco coa imaxe. Un paso de desfacer; o obxecto gardado non cambia. Vexa [Imaxes](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias: `SHX`. Os seus propios tipos de letra SHX.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Cartafol}} le cada `.shx` dunha carpeta (CadCraft Studio; de novo en cada inicio), {{ui:Ficheiros}} toma os ficheiros escollidos (o navegador), {{ui:Inverter}} dispón as letras dun tipo de letra de dereita a esquerda. Os estilos de texto que nomean un tipo de letra cargado debuxan con el. Vexa [Debuxar texto con tipos de letra SHX propias](topic:shx-fonts).

### LIMITS

O tamaño que debe ter o debuxo.

- `Specify lower left corner or [ON/OFF] <current>`: un punto, `ON` ou `OFF`.
- `Specify upper right corner <current>`.

A cuadrícula énchea os límites, {{cmd:ZOOM}} All mostrábaos, e con eles en ON un punto fóra é rexeitado (`**Outside limits`). Un paso de desfacer; gárdase en DWG e DXF. Vexa [Fixar os límites do debuxo](topic:drawing-limits).

### AUNITS

Alias: `ANGUNITS`. Como se mostran e escriben os ángulos.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, ou para as outras dúas `Enter precision` (0 graos, 2 minutos, 4 segundos, 5 a 8 decimais de segundo).

Un paso de desfacer; gárdase en DWG e DXF. É o mesmo que {{ui:Formato do ángulo}} en {{ui:Configuración actual}}. Vexa [Escribir e mostrar rumbos e ángulos](topic:bearings-and-angles).

### APPLOAD

Alias: `AP`; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Cargar aplicación…}}. O diálogo {{ui:Cargar aplicacións}}: carga rutinas `.lsp` e ficheiros de diálogo `.dcl`, descárgaas, cárgaas de novo desde o historial, e o Conxunto de inicio. Un comando `(defun c:NAME …)` dunha rutina funciona entón como calquera outro. Vexa [Cargar aplicacións](topic:load-applications) e [Executar rutinas LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Editar alias…}}) abre o seu ficheiro de alias (liñas `ALIAS, *COMMAND`); {{ui:Gardar}} aplícao. {{cmd:REINIT}} aplícao de novo. Vexa [Editar alias de comandos](topic:command-aliases).

### OPTIONKEYS

Alias: `OPTKEYS`; ou {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Letras de opción}} › {{ui:Editar…}}. Abre o seu ficheiro de letras de opción (liñas `COMMAND.OPTION, LETTERS`, como `ARRAY.PO, P`); {{ui:Gardar}} aplícao e {{cmd:REINIT}} aplícao de novo. Vexa [Dar ás opcións dos comandos as súas propias letras](topic:option-letters).

### LISPEDIT

Alias: `VLIDE`; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Editor de LISP}}. Abre o editor LISP, unha xanela que queda aberta xunto ao debuxo.

- O texto: números de liña, o compañeiro do paréntese do cursor marcado (en vermello cando non ten), {{key:Enter}} sangra a liña nova baixo o paréntese aberto, {{key:Tab}} escribe dous espazos, {{key:Esc}} sae do texto.
- {{ui:Cargar no debuxo}} ({{key:Ctrl+Shift+Enter}}): le todos os formularios, como fai {{cmd:APPLOAD}} co ficheiro, e fai os seus comandos `c:`. O ficheiro aparece na lista de {{cmd:APPLOAD}}.
- {{ui:Executar selección}} ({{key:Ctrl+Enter}}): avalía os formularios seleccionados, ou o formulario onde está o cursor.
- {{ui:Parar}}: remata unha rutina en execución.
- {{ui:Consola}}: o que imprimiu a rutina, e cada erro coa súa liña; faga clic nun erro para ir a el. O texto execútase un formulario de nivel superior por vez, así que a liña é a do formulario, ou dentro dela a liña que chama á función que nomea o erro.
- {{ui:Novo}}, {{ui:Abrir}}, {{ui:Gardar}} ({{key:Ctrl+S}}): un ficheiro `.lsp`. O texto tamén se conserva neste navegador, así que pechar a xanela non perde nada.
- Ao lado do texto: as funcións que define a rutina, as que chama e este LISP aínda non ten, as que chama e que non están definidas nela nin integradas, e as listas completas do que está integrado e do que non.

Un texto cun paréntese que nunca se pecha, ou unha cadea que nunca remata, non se executa: indícase a liña. Non hai depurador paso a paso, puntos de parada nin xanela de vixilancia. Vexa [Executar rutinas LISP](topic:run-lisp).

### HELP

Alias: `?`. Imprime cada comando, os seus alias e unha descrición dunha liña no historial da liña de comandos. Non abre esta axuda: prema {{key:F1}} ou faga clic en {{ui:Axuda}} para iso.

## Indicación Select objects

En cada indicación `Select objects`: faga clic en obxectos, debuxe xanelas (de esquerda a dereita) e cruzamentos (de dereita a esquerda) con dous clics, ou prema e arrastre un lazo ({{key:Space}} mentres arrastra: xanela, cruzamento, valado), {{key:Shift}}+clic para quitar, e prema {{key:Enter}} para rematar. Tamén pode escribir `ALL` (todo), `L` (o último obxecto), `P` (Previous: o que usou o último comando), `F` (Fence: obxectos que cruza unha liña de puntos; `U` desfai un punto), `W` (Window), `C` (Crossing), `R` (modo de retirada: os clics quitan obxectos; a indicación di `Remove objects`) e `A` (Add de novo). `?` lístaas. Non se mostran na indicación. {{key:Tab}} sobre obxectos superpostos resalta o seguinte; faga clic para escollelo. Vexa [Seleccionar obxectos](topic:select-objects).

### ACCESS

Alias: `AX`. Debuxo sen vista. {{cmd:ACCESS}} activa ou desactiva o acceso (`On`, `Off`) e cambia os sons de enganche (`Sound`) e os comandos falados (`Voice`); di primeiro o estado. Con Acceso activado, cada comando e cada resultado fálase polo seu lector de pantalla e a zona de debuxo ten un cursor de teclado. O tema de axuda «Debuxo sen vista» ten as teclas.

### DESCRIBE

Alias: `DESC`. Di o que contén o debuxo: cantos obxectos, de que tipo, de que tamaño, cantas capas e o que está seleccionado. Só lee; non cambia nada.

### WHEREAMI

Alias: `WHERE`. Di onde está o cursor, nas unidades do debuxo.

### NEARBY

Di o que hai preto do cursor, o máis próximo primeiro, cada un coa súa distancia e o lado no que está.

### SAYSEL

Di o que está seleccionado, unha frase por obxecto (lonxitude da liña, extremos e ángulo; raio e centro do círculo; o texto tal como está escrito).

### VOICE

Activa ou desactiva os comandos falados. Recoñécense neste computador; onde o navegador non o pode facer, a voz queda desactivada salvo que escolla o servizo en liña do navegador en Configuración.

### TOUCHCROSSHAIR

Alias: `TCX`. A cruz desfasada para debuxar cun dedo, para que a punta do dedo non tape o punto que escolle. Mentres está activa, un dedo no debuxo non escolle nada: move unha cruz que queda por enriba e a un lado do dedo. O enganche a obxectos e o seguimento seguen a cruz. Levantar o dedo non escolle nada e deixa a cruz onde estaba. Para escoller, prema o botón {{ui:Clic}} na esquina do debuxo, ou toque en calquera lugar do debuxo cun segundo dedo. Manteña {{ui:Clic}} mentres move o outro dedo para arrastrar (unha xanela de selección, un lazo, un agarre). Un dedo mantido premido quieto, ou o botón {{ui:Enter}}, é Enter. Dous dedos desprazan e amplían como antes. Preto do bordo inferior e do bordo lateral afastado, a cruz achégase ao dedo, para que se poida chegar a cada parte do debuxo. Un lapis e un rato escollen sempre directamente.

{{cmd:TOUCHCROSSHAIR}} di o estado e pregunta `ON`, `OFF`, `Auto` (activo só onde un dedo é o único punteiro, así que está desactivado nun computador con rato), `Distance` (a que distancia está a cruz do dedo, de 24 a 240 píxeles) ou `Side` (`Left`: enriba e á esquerda, para a man dereita; `Right` para a man esquerda; os botóns pasan á outra esquina). As mesmas opcións están en Configuración › CadCraft, e nun dispositivo con pantalla táctil a barra de estado ten un interruptor {{ui:Desfasar a cruz}}. As opcións consérvanse neste navegador.

### WHOHAS

Di quen ten un debuxo aberto. En CadCraft Studio nun computador, abrir un DWG ou DXF escribe un pequeno ficheiro de bloqueo xunto a el (`Plan.dwg.cclock`: quen, desde cando, que versión), actualízao cada minuto mentres o debuxo está aberto, e retírao ao pechar o debuxo. Abrir un debuxo que outra persoa ten aberto di quen e desde cando, e ofrece {{ui:Abrir só para lectura}} (Gardar entón pide un novo nome), {{ui:Abrir igualmente}} (a outra persoa vese no seu seguinte actualización) ou {{ui:Cancelar}}. Gardar sobre un ficheiro que outra persoa ten aberto pregunta antes. Un bloqueo que non se actualiza durante cinco minutos dise obsoleto: a outra copia pechouse sen gardar ou o computador está durmido.

{{cmd:WHOHAS}} pregunta `Current` (o debuxo aberto), `File` (escoller un), `FOlder` (escoller unha carpeta: cada debuxo nela que está aberto nalgún sitio lístase), `Path` (escribir unha ruta completa) ou `Name` (o nome que ven os demais; o nome da súa conta cando inicia sesión). Studio só pode chegar ás carpetas que vostede escolleu: para un debuxo aberto desde unha carpeta que nunca se escolleu, di unha vez que non pode anotar o debuxo como aberto; `FOlder` escolle a carpeta, e os bloqueos funcionan alí desde entón. O bloqueo é unha nota para as persoas, non unha barreira: outro programa aínda pode escribir o ficheiro. Nun navegador non hai carpetas que mirar, e o comando di iso.

### OVERKILL

Elimina obxectos duplicados e arranxa liñas e arcos que se solapan, para debuxos que chegan cheos de liñas dobradas. `Select objects to clean up`, {{key:Enter}}, despois {{key:Enter}} de novo para limpar coas opcións mostradas, ou cambiar unha antes:

- `Tolerance`: como de preto deben estar dúas coordenadas para contar como iguais (0,000001 para empezar; 0 significa exactamente iguais).
- `Ignore`: propiedades que poden diferir entre dous obxectos por outra banda iguais. Escriba un nome para cambiala: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ou `None` / `All`. {{key:Enter}} ao rematar.
- `Overlap`: activado ou desactivado. Activado, as liñas sobre unha mesma recta que se solapan fanse unha liña (unha liña dentro doutra bórrase sen máis), e os arcos dun mesmo círculo que se solapan fanse un arco; os arcos que pechan unha volta completa fanse un círculo, e un arco sobre un círculo bórrase.
- `Ends`: activado ou desactivado. Activado, as liñas sobre unha mesma recta e os arcos dun mesmo círculo que só se tocan extremo con extremo fanse unha soa peza.

Cada tipo de obxecto compróbase por duplicados: dous obxectos son duplicados cando a súa xeometría é a mesma dentro da tolerancia e a súa capa, cor, tipo de liña, escala de tipo de liña, grosor de liña, espesor, transparencia e altura coinciden (menos as que ignore). As liñas e polilíneas abertas tamén coinciden cando se debuxan ao revés. O primeiro obxecto na orde de debuxo queda e conserva as súas propiedades. O comando informa de cantos obxectos revisou e borrou: duplicados, pezas solapadas unidas, pezas unidas extremo con extremo. Un {{cmd:UNDO}} desfai todo. As opcións duran ata pechar a xanela do debuxo.

Non toca: obxectos en capas bloqueadas e obxectos ocultos. Non une liñas con altura (Z) (os duplicados exactos delas si se borran), e non toca os segmentos dentro dunha polilínea (non se adelgazan), unha liña sobre un segmento de polilínea, nin unha polilínea pechada debuxada ao revés.

### DRAWORDER

Cambia que obxectos se debuxan por diante. `Select objects to re-order`, {{key:Enter}}, despois `Above objects`, `Under objects`, `Front` ou `Back` ({{key:Enter}} = `Back`). `Above objects` e `Under objects` piden os obxectos de referencia: a selección vai xusto por diante do máis dianteiro deles, ou xusto detrás do máis traseiro. Os obxectos seleccionados manteñen a súa orde entre eles. Un paso de desfacer. A orde gárdase co debuxo en DWG e DXF, onde é a orde na que se escriben os obxectos.

Na pantalla cada obxecto se debuxa na orde do debuxo, como o debuxan outros programas que abren o ficheiro: unha trama sólida, unha polilínea ancha ou unha máscara de texto cubre as liñas e o texto que hai detrás, e o que está por diante tápao. Onde unha liña cruza un texto, ambos se ven. As imaxes e as páxinas PDF adxuntas quedan debaixo das liñas. Nun debuxo moi grande cuxos recheos e liñas se solapan e alternan máis de 256 veces, as primeiras 256 conservan a súa orde e o resto debuxa os seus recheos debaixo das liñas, para que o redebuxado siga sendo rápido.

### TEXTTOFRONT

Leva o texto, as cotas e as referencias por diante de todo o demais no espazo aberto: `Text`, `Dimensions`, `Leaders` ou `All` ({{key:Enter}} = `All`). Un paso de desfacer. Indícao cando non hai nada, ou cando xa están por diante.

### HATCHTOBACK

Envía cada trama do espazo aberto detrás de todo o demais, para que os recheos deixen de cubrir liñas e texto no ficheiro gardado. Sen preguntas. Un paso de desfacer.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Mostra só os obxectos seleccionados: todo o demais do espazo queda fóra de vista ata {{cmd:UNISOLATEOBJECTS}}. Ao contrario que {{cmd:LAYISO}}, traballa cos obxectos que escolle, sexan cales sexan as súas capas, e non cambia ningunha capa. Os obxectos ocultos non se debuxan, non se escollen, non se enganchan, non se ven de cerca nin se trazan, e os comandos que aceptan `ALL` pásanos por alto. O que debuxe mentres os obxectos están illados mostrase como de costume.

Isto é só para a sesión: nada disto se garda co debuxo, non é un paso de desfacer, e ao abrir o debuxo de novo móstrase todo. Mentres hai obxectos ocultos a barra de estado mostra un botón co seu número; faga clic nel para mostralos de novo.

### HIDEOBJECTS

Oculta os obxectos seleccionados ata {{cmd:UNISOLATEOBJECTS}}. As mesmas regras que {{cmd:ISOLATEOBJECTS}}: só para a sesión, non se garda, non é un paso de desfacer.

### UNISOLATEOBJECTS

Alias: `UNISOLATE`, `UNHIDE`. Mostra de novo cada obxecto oculto por {{cmd:ISOLATEOBJECTS}} ou {{cmd:HIDEOBJECTS}}, e di cantos volveron.

### LAYLOCKFADE

Fixa como se ven os obxectos en capas bloqueadas e se un clic os alcanza. Di o estado actual, despois admite:

- un número de 0 a 90: a cantidade de esvaecemento en por cento (50 para empezar). 0 desactiva o esvaecemento.
- `ON` ou `OFF`: esvaecemento activado ou desactivado, conservando a cantidade.
- `Pick`, despois `Yes` ou `No`: poden os clics seleccionar obxectos en capas bloqueadas cando non hai ningún comando en execución? `No` (o predeterminado): non se poden escoller de ningún xeito. `Yes`: un clic ou unha xanela seleccionaos para que {{ui:Propiedades}} os mostre; seguen sen poder cambiarse, e a propia `Select objects` dun comando nunca os toma.

Os enganches a obxectos atopan obxectos en capas bloqueadas en calquera caso. Os trazados nunca se esvaecen. As dúas opcións son súas, non do debuxo, e tamén están en {{ui:Configuración}} baixo {{ui:Capas bloqueadas}}.

### BURST

Explota referencias de bloque e conserva o que din os seus atributos. `Select block references to burst`, {{key:Enter}}: cada referencia substitúese polos obxectos do bloque, e cada valor dun atributo visible convértese en texto simple na capa dese atributo (un atributo na capa 0 cae na capa da referencia, como os demais obxectos do bloque na capa 0). Os atributos invisibles elimínanse. Un bloque dentro do bloque segue sendo unha referencia de bloque. Un paso de desfacer; informa de cantas referencias se explotaron e de cantos valores de atributo se convertiron en texto.

Rexeita unha ligazón a un debuxo por nome (ligue o primeiro, ou copie desde el con {{cmd:NCOPY}}), e deixa os outros obxectos seleccionados como están. Para referencias de bloque {{cmd:EXPLODE}} dá os mesmos obxectos; {{cmd:BURST}} toma só referencias de bloque e conta o texto dos atributos.

### TXT2MTXT

Alias: `T2M`. Une textos dunha liña nun só texto de parágrafo. `Select single-line text to join`, {{key:Enter}}, despois `Paragraph` (as liñas corren xuntas e axústanse á anchura da liña máis ancha) ou `Lines` (cada texto segue sendo unha liña propia); {{key:Enter}} toma o último usado. As liñas ordénanse de arriba abaixo, despois de esquerda a dereita, segundo a dirección do texto de arriba. O parágrafo colga da esquina superior esquerda do texto de arriba e toma a súa altura, xiro, estilo, capa e cor. Un paso de desfacer.

Os textos que xa son de parágrafo, os textos en branco e os outros obxectos da selección quedan como están, e o comando di cantos son.

### NCOPY

Copia obxectos dunha referencia de bloque ou dun debuxo ligado ao debuxo, sen explotar nada. `Pick an object inside a block reference or a linked drawing`: copíase o obxecto máis próximo ao clic onde se ve, por fondo que estea dentro de bloques; escolla máis, despois {{key:Enter}}. Despois `Base point to move the copies`: {{key:Enter}} deixaos no seu sitio, ou dá un punto base e un segundo punto. Todo o comando é un paso de desfacer.

Unha copia toma a capa na que se ve: un obxecto na capa 0 dentro dun bloque cae na capa da referencia onde estaba, e unha cor ByBlock convértese na cor desa referencia. Desde un debuxo ligado, a capa `Plan|Walls` pasa a `Plan$0$Walls` (o nome que lle dá a ligazón), feita coa cor, tipo de liña e grosor da capa ligada. O valor dun atributo cópiase como texto. As referencias de bloque en capas bloqueadas non se poden escoller.

### FLATTEN

Fixa a altura (Z) e o espesor dos obxectos seleccionados a 0. `Select objects to flatten`, {{key:Enter}}. Tamén aplana os obxectos dentro das definicións de bloque que usa a selección (e os bloques dentro deles), así que cada referencia a eses bloques cambia; os debuxos ligados quedan como están. Un paso de desfacer; informa de cantos obxectos cambiaron, e di que ningún tiña altura nin espesor cando non cambiou nada.

O que CadCraft conserva da terceira dimensión nun debuxo 2D é: unha altura en círculos, arcos, elipses, puntos, texto, referencias de bloque, tramas, referencias e polilíneas (a súa elevación), unha altura en cada extremo dunha liña, e un espesor en liñas, círculos, arcos, polilíneas, puntos e texto, tal como os tiña o ficheiro. {{cmd:FLATTEN}} borra exactamente eses datos. Non toca o modelo 3D da pestana 3D, caras 3D nin sólidos, e un obxecto debuxado nun plano inclinado xa se levou ao plano do debuxo cando se abriu o ficheiro.

### BREAKLINE

Debuxa unha liña cun símbolo de rotura, para unha vista cortada. Di o tamaño e a extensión actuais, despois `First point of the break line` (ou `Size` / `Extension` para cambialos antes), `Second point`, e `Where the break symbol sits`: faga clic ao longo da liña, ou {{key:Enter}} para o medio. O resultado é unha polilínea na capa actual: a liña, que pasa de cada punto pola extensión, cun trazo en forma de Z tan alto como o tamaño e a metade de longo.

`Size` e `Extension` recórdanse como as súas opcións (o tamaño empeza en o dobre da altura do texto da cota polo factor de escala da cota; a extensión, a metade do tamaño). {{key:Enter}} repite o comando.

### AUDIT

Comproba o debuxo aberto en busca de danos e arránxaos. {{cmd:AUDIT}} mira cada obxecto do modelo, das follas e dentro dos bloques, e a táboa de capas, e lista o que atopa por tipo:

- números que non son finitos ou son absurdamente grandes;
- obxectos sen tamaño: unha liña sen lonxitude, un círculo sen raio, unha polilínea con un só punto, texto sen letras ou sen altura, unha referencia de bloque con escala cero;
- obxectos nunha capa que o debuxo non ten; referencias a un bloque que non está; nomes de estilos de texto e de cota e de tipos de liña que non están no debuxo;
- bloques que se conteñen a si mesmos, directamente ou a través doutros bloques;
- obxectos que comparten un identificador, unha clave ou un identificador de ficheiro;
- cotas sen os puntos desde os que se miden, e tramas cuxo contorno non é un perfil pechado.

Despois pregunta `Fix them? [Yes/No]`. `No` non cambia nada. `Yes` arranxa todo nun paso de desfacer: retírase o que non se pode debuxar (números malos, sen tamaño, bloque que falta, cota rota, trama sen contorno usable, a referencia que pecha un círculo de bloques); créase unha capa que falta; os nomes de estilo e tipo de liña que non se coñecen volven aos predeterminados; unha clave compartida substitúese. Imprime cantos obxectos se retiraron e cantos se arranxaron. Os mesmos achados aparecen no panel Problemas, cada un co seu {{ui:Reparar}}.

Non rexeita nada, pero só comproba o que o propio CadCraft debuxa: os datos gardados para outros programas (sólidos 3D, obxectos OLE) non se abren.

### RECOVER

Abre un DXF ou DWG danado. {{cmd:RECOVER}} pide o ficheiro, le o que se pode ler en lugar de rexeitar o ficheiro, lista o que saltou ou asumiu, e despois comproba e arranxa o debuxo como fai {{cmd:AUDIT}} con `Yes`.

- DXF: as liñas que non son parte dun par código e valor sáltanse ata que os pares volven aliñarse; unha sección sen final péchase; un ficheiro cortado léese ata o corte; un DXF binario cortado léese ata o seu último valor completo. Cando unha sección, un bloque ou un obxecto aínda non se pode ler, deixase fóra e nómease, e a lectura segue máis aló.
- DWG: os obxectos que non superan as súas comprobacións ou non se poden decodificar quedan fóra, e unha lista de obxectos perdida reconstrúese recorrendo os datos dos obxectos.

O ficheiro en disco non se cambia. O debuxo recuperado ábrese sen gardar: gárdeo cun nome novo. Un ficheiro do que non se pode ler nada en absoluto é rexeitado, co motivo.

### LEGACYTEXT

Converte texto escrito con tipos de letra vietnamitas antigos de 8 bits a Unicode. Nomes curtos `TEXTTOUNICODE` e `VNTEXT`.

Os debuxos vietnamitas máis antigos gardan o seu texto como caracteres occidentais que só o tipo de letra converte en vietnamita: texto TCVN3 nos tipos ABC (`.VnTime`, `.VnArial`, e os tipos en maiúsculas cuxos nomes rematan en `H`), e texto VNI nos tipos VNI (`VNI-Times`). CadCraft mostra ese texto como se le en canto se abre o debuxo, segundo o tipo de letra do seu estilo de texto, do obxecto, ou dun tramo dentro do texto de parágrafo; o ficheiro segue tendo os caracteres antigos.

{{cmd:LEGACYTEXT}} di cantos textos atopou en cada codificación e pregunta `Convert … to Unicode?`. `Yes` reescribe cada un (modelo, follas, bloques, valores e definicións de atributos) e dálles aos estilos de texto un tipo de letra Unicode (Times New Roman, Arial ou Courier New segundo o tipo de letra antigo), nun paso de desfacer. O formato dentro do texto de parágrafo conservase.

Cando nengún texto usa un tipo de letra coñecido (un estilo que perdeu o nome do tipo de letra), pregunta `Read selected texts as [Tcvn3/Vni/None]`: escolla a codificación e seleccione os textos. O texto que xa é Unicode queda como está. Os valores de cota sobrescritos e o texto de referencias multirreferencia non se converten.
