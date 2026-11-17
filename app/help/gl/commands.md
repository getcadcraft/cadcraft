---
title: Referencia de comandos
summary: Todos os comandos da aplicación de debuxo CadCraft, cos seus alias, as preguntas que fan, as súas opcións e os seus valores por defecto.
keywords: comandos, alias, lista de comandos, área, perímetro, measuregeom, liña, pline, círculo, arco, recortar, offset, dimlinear, bloque, insert, folla, trazar, zoom, axuda, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicar, selectall
from: 7db2646b
---

Escriba un nome de comando ou un alias e prema {{key:Enter}} ou {{key:Space}}. Non importan as maiúsculas, e un `_`, `-`, `.` ou `'` inicial ignórase. Escriba `HELP` (ou `?`) para imprimir no historial da liña de comandos unha lista breve de todos os comandos; prema {{key:F1}} para esta axuda.

Como ler as indicacións: as opcións van entre corchetes, e escolle unha escribindo as súas maiúsculas (`D` para Diámetro). Un valor por defecto vai entre ángulos; prema {{key:Enter}} para aceptalo. Cando se pide un punto, pode facer clic ou escribir calquera dos formatos de [Entrada de coordenadas e distancias](topic:coordinate-entry). Cando se pide unha distancia, pode escribir un número ou facer clic en dous puntos.

Premer {{key:Enter}} onde se require un punto ou un obxecto, e non hai valor por defecto, remata o comando. {{key:Esc}} cancélao. O que fai un comando é un único paso de desfacer.

## Debuxar

### LINE

Alias: `L`. Segmentos rectos, cada un un obxecto propio.

- `Seleccione o primeiro punto` (Enter: comece desde o último punto que deu)
- `Seleccione o seguinte punto [Desfacer (U)]`, repetido. Despois de dous segmentos: `[Desfacer (U)/Pechar (C)]`.
- `U` retira o último segmento, `C` pecha ata o primeiro punto e remata. Enter remata.

### PLINE

Alias: `PL`. Unha polilínea de segmentos rectos e arcos.

- `Seleccione o punto inicial`
- `Seleccione o seguinte punto [Arco/Pechar (C)/Desfacer (U)]` (Pechar cando hai dous segmentos)
- `A` pasa a arcos: `Seleccione o extremo do arco [Liña/Pechar (CL)/Desfacer (U)]`. Cada arco continúa tanxente ao segmento anterior. `L` volve ás liñas, `CL` pecha cun arco.
- Enter remata; a polilínea queda aberta.

### CIRCLE

Alias: `C`.

- `Seleccione o punto central do círculo [3P/2P/Ttr (tanxente, tanxente, raio)]`
- `Seleccione o raio do círculo [Diámetro] <último raio>`; `D` pide `Seleccione o diámetro do círculo`.
- `2P`: dous extremos dun diámetro. `3P`: tres puntos no círculo.
- `T` (tamén o comando `TTR`, e {{ui:Debuxar}} › {{ui:Máis}} › {{ui:Círculo: tanxente, tanxente, raio}}): `Seleccione o punto sobre o obxecto para a primeira tanxente do círculo`, a segunda, e logo o raio (Enter: o último). O círculo toca os dous obxectos (liñas, arcos, círculos, segmentos de polilínea, tamén dentro de bloques); dos que o fan, o que toca máis preto dos seus puntos. «O círculo non existe» cando ningún encaixa.
- `TTT` (ou {{ui:Debuxar}} › {{ui:Máis}} › {{ui:Círculo: tanxente, tanxente, tanxente}}): tres obxectos; o círculo que toca os tres, o máis próximo aos seus puntos (tres liñas dan o círculo interior ou un exterior, segundo onde escolla).

### ARC

Alias: `A`.

- `Seleccione o punto inicial do arco [Centro]`, `Seleccione o segundo punto do arco`, `Seleccione o punto final do arco`: un arco por tres puntos.
- `C`: `Seleccione o punto central do arco`, `Seleccione o punto inicial do arco`, `Seleccione o punto final do arco`. O arco vai en sentido antihorario desde o inicio ata o final.

### RECTANG

Alias: `REC`, `RECTANGLE`. Unha polilínea pechada.

- `Seleccione o primeiro punto de esquina`, `Seleccione o outro punto de esquina`. Escriba `@ancho,alto` para a segunda esquina.

### POLYGON

Alias: `POL`. Un polígono regular como polilínea pechada.

- `Escriba o número de lados <4>` (3 a 1024)
- `Seleccione o centro do polígono`
- `Escriba unha opción [Inscrito/Circunscrito] <I>`
- `Seleccione o raio do círculo`: faga clic ou escriba un punto; a súa distancia fixa o tamaño e a súa dirección xira o polígono.

### ELLIPSE

Alias: `EL`.

- `Seleccione o extremo do eixe da elipse [Centro]`, `Seleccione o outro extremo do eixe`, `Seleccione a distancia ao outro eixe`
- `C`: `Seleccione o centro da elipse`, `Seleccione o extremo do eixe`, logo a distancia ao outro eixe.
- `I` (`Isocírculo`, só mentres {{cmd:ISODRAFT}} está activo): centro, logo raio ou `Diámetro`: a elipse que un círculo amosa no plano isométrico actual.

### HATCH

Alias: `H`, `BH`, `BHATCH`; ou {{ui:Trama}} na barra de ferramentas. Imprime primeiro o patrón, a escala e o ángulo actuais.

- `Seleccione un punto interior [Seleccionar obxectos/Patrón/Escala (SC)/Ángulo (A)]`, repetido (`Desfacer (U)` cando hai unha área): cada clic engade a área pechada que hai arredor, con as formas pechadas dentro como illas. Enter fai unha soa trama de todas elas.
- `S`: `Seleccione obxectos pechados` (polilíneas pechadas, círculos, elipses pechadas).
- `P`: `Escriba un nome de patrón, SOLID, ou ? para a lista <actual>`. `SC`: `Seleccione a escala do patrón`. `A`: `Seleccione o ángulo do patrón`.
- `G` (Degradado): o recheo é un degradado en vez dun patrón. Vexa {{cmd:GRADIENT}} para as súas preguntas.

Vexa [Tramas e áreas de recheo](topic:hatch).

### GRADIENT

Alias: `GD`. Recheba unha área cun degradado dunha ou dúas cores. Pregunta primeiro polo degradado e logo continúa como {{cmd:HATCH}} (`Seleccione un punto interior`, `S` para obxectos pechados, {{key:Enter}} para rematar).

- `Escriba unha opción de degradado [Tipo/Unha cor (O)/Dúas cores (TW)/Ángulo (A)/Centrado/Saír (X)] <X>`, repetido; cada vez imprime o degradado tal como está agora.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, ou un deles invertido (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Bastan as primeiras letras.
- `O`: unha cor, logo a súa tonalidade de 0 a 1 (0 escurece ata negro, 0.5 é a propia cor, 1 aclárea ata branco). `TW`: a primeira e a segunda cor. Unha cor é un número de 1 a 255, tres números como `255,128,0`, ou `#rrggbb`.
- `A`: o ángulo no que corre o degradado. `C`: centrado Sí ou Non (Non move o centro do degradado a un lado).
- Rexeita unha cor ou un tipo que non coñece, e unha tonalidade fóra de 0 a 1.

{{cmd:HATCHEDIT}} `G` e Propiedades (Degradado) cambian un degradado máis tarde, ou converten calquera trama nun. Un degradado debúxase na pantalla e tamén se traza. DWG 2004 e posteriores gárdano como unha trama de degradado real; DXF 2000 e DWG 2000 gárdano para CadCraft, e os outros programas ven un recheo sólido na primeira cor.

### HATCHGENERATEBOUNDARY

Alias: `HGB`. Volve facer o contorno dunha trama que o perdeu. `Seleccione tramas` (ou selecciónaas antes), logo `Ligar cada trama ao seu novo contorno, para que a trama o siga? [Sí (Y)/Non] <Sí>`.

- Cada bucle da trama convértese nunha polilínea pechada na capa da trama; as polilíneas novas quedan seleccionadas. Unha arista curva volve como os pequenos segmentos rectos que a trama conserva.
- Con Sí a trama segue o seu novo contorno, como fai unha trama feita con {{cmd:HATCH}}. Un paso de desfacer.
- Avisa cando non se seleccionou ningunha trama.

### POINT

Alias: `PO`; ou {{ui:Debuxar}} › {{ui:Máis}} › {{ui:Punto}}. Obxectos punto, un por clic, ata Enter.

- `Seleccione un punto`

### XLINE

Alias: `XL`; ou {{ui:Debuxar}} › {{ui:Máis}} › {{ui:Liña de construción}}. Liñas de construción, sen fin nos dous sentidos. Vexa [Liñas de construción e semirrectas](topic:construction-lines).

- `Seleccione un punto [Horizontal/Vertical/Ángulo (A)/Bisectriz/Desprazamento (O)]`, logo `Seleccione o punto de paso` para cada liña, ata Enter.
- `A`: `Escriba o ángulo da liña de construción [Referencia (R)] <0>`; `R` pide primeiro `Seleccione un obxecto liña`.
- `B`: `Seleccione o vértice do ángulo`, `Seleccione o punto inicial do ángulo`, logo `Seleccione o punto final do ángulo` para cada liña.
- `O`: `Seleccione a distancia de desprazamento [Por punto (T)] <Por punto>`, logo `Seleccione un obxecto liña` e `Seleccione o lado para desprazar` (ou `Seleccione o punto de paso`) para cada liña.

### RAY

Sen alias; ou {{ui:Debuxar}} › {{ui:Máis}} › {{ui:Semirrecta}}. `Seleccione o punto inicial`, logo `Seleccione o punto de paso` para cada semirrecta, ata Enter.

### TEXT

Alias: `DT`, `DTEXT`; ou {{ui:Texto}} na barra de ferramentas. Texto dunha liña; cada liña é un obxecto propio.

- `Seleccione o punto inicial do texto [Xustificar (J)]`
- `J`: `Escriba unha opción [Esquerda (L)/Centro/Dereita (R)/Medio/TL/MC] <L>`, logo `Seleccione o punto de inserción do texto`
- `Seleccione a altura <altura actual do texto>`
- `Seleccione o ángulo de xiro do texto <0>`
- `Escriba o texto`, repetido: cada Enter inicia a liña seguinte debaixo. Enter nunha liña baleira remata. {{key:Space}} escribe un espazo aquí.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} pon marcas nunha liña, arco, círculo, polilínea, spline ou elipse que a corta en partes iguais. Seleccione o obxecto e logo dea o número de partes (2 a 32767). Un obxecto aberto recibe unha marca menos que partes; un pechado recibe tamén unha marca no seu inicio. O propio obxecto non se corta. As marcas son puntos; `Bloque` pide en cambio un bloque deste debuxo, e se ese bloque se xira para seguir o obxecto. As lonxitudes ao longo de splines e elipses miden por cordas curtas. Rexeita texto, tramas e outros obxectos que non teñen lonxitude.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} pon unha marca cada lonxitude dada ao longo dunha liña, arco, círculo, polilínea, spline ou elipse, contando desde o extremo máis próximo ao punto onde a escolleu (un obxecto pechado: desde o seu inicio). Dea a lonxitude escribíndoa ou con dous puntos. O extremo afastado dun obxecto aberto non recibe marca. `Bloque` coloca un bloque en cada marca en vez dun punto. Rexeita unha lonxitude de 0, unha máis longa que o obxecto, e unha que daría máis de 32767 marcas.

### BOUNDARY

Alias: `BO`, `BPOLY`. {{cmd:BOUNDARY}} fai unha polilínea pechada ao redor da área que contén o punto que escolle, a partir de calquera liña, arco, círculo, polilínea e curva que a limite na pantalla. Os anacos sobre un arco ou círculo volven como segmentos de arco; os anacos de elipses e splines volven como pequenos segmentos rectos. Con `Illas` activado (o inicio) cada área pechada dentro dela recibe tamén a súa propia polilínea. Siga escollendo puntos; Enter remata. Os obxectos que limitan a área quedan como están. Avisa cando ningunha área pechada contén o punto.

### BLEND

{{cmd:BLEND}} debuxa unha spline entre os extremos de dúas curvas abertas. Escolla cada curva preto do extremo para unir. `CONtinuity` escolle `Tanxente` (a spline sae e chega seguindo as dúas curvas) ou `Suave` (tamén se dobra como se dobran nos extremos); a elección mantense na sesión. As dúas curvas non se cambian. Rexeita obxectos pechados e dous extremos que xa se tocan.

### REGION

Alias: `REG`. {{cmd:REGION}} converte obxectos pechados en rexións: áreas planas que pode unir, cortar e medir. Seleccione círculos, polilíneas pechadas, elipses pechadas ou splines pechadas, ou liñas, arcos e polilíneas abertas que pechen un bucle extremo con extremo; cada bucle pasa a ser unha rexión e substitúe os obxectos de onde saíu. Os arcos seguen sendo arcos; as elipses e as splines pasan a ser pequenos segmentos rectos. O que non está pechado e non pecha ningún bucle queda como está, e avisa de cantos son. No debuxo unha rexión é unha ou máis polilíneas pechadas mantidas xuntas como un grupo sen nome, así que un clic selecciona a rexión completa e unha copia é unha rexión propia; outros programas que abran o ficheiro ven polilíneas pechadas.

Con rexións no debuxo, {{cmd:UNION}}, {{cmd:SUBTRACT}} e {{cmd:INTERSECT}} na pestana 2D traballan sobre rexións: `UNION` une as rexións seleccionadas nunha (as rexións separadas pasan a ser unha rexión de varios contornos), `SUBTRACT` pide as rexións das que restar e logo as que se quitan (un burato segue sendo parte da rexión), `INTERSECT` mantén a área que todas comparten. Cada un indica a área do resultado e é un paso de desfacer. Rexeitan cando non quedaría nada ou cando non hai nada compartido. Na pestana 3D, e nun debuxo sen rexións, os mesmos comandos traballan sobre sólidos como antes.

## Modificar

Alias: `MT`, `T`; ou {{ui:Parágrafo}} na barra de ferramentas. Texto de parágrafo que se axusta a un ancho, escrito no seu sitio.

- `Seleccione a primeira esquina`
- `Seleccione a esquina oposta [Altura (H)/Xustificar (J)/Espazo entre liñas (L)/Xirar (R)/Largura (W)]`: a largura entre as dúas esquinas é onde o texto se axusta. `H` pide `Seleccione a altura`, `J` `Escriba a xustificación [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Escriba o factor de espazo entre liñas (0.25 a 4)`, `R` `Seleccione o ángulo de xiro`, `W` `Seleccione a largura (0 para non axustar)` e salta a segunda esquina.
- Logo abre no debuxo unha caixa: escriba, {{key:Enter}} para un parágrafo novo, {{key:Mod+Enter}} ou un clic fóra para rematar, {{key:Esc}} para cancelar. A súa barra fixa a altura, o espazo entre liñas, a largura e a xustificación. Vexa [Engadir texto e etiquetas](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias: `ED`, `DDEDIT`; ou faga dobre clic nun texto. `Seleccione un texto para editar`, repetido ata {{key:Enter}}: cada un abre na mesma caixa. Iniciado sobre un texto seleccionado ou con dobre clic, edita ese e remata.

### ERASE

Alias: `E`, `DELETE`; ou prema {{key:Delete}} con obxectos seleccionados.

- `Seleccione obxectos` (omítese cando xa hai obxectos seleccionados)

### MOVE

Alias: `M`.

- `Seleccione obxectos`
- `Seleccione o punto base [Desprazamento (D)]`, `Seleccione o segundo punto`
- `D`: `Seleccione o desprazamento`, escrito como `dx,dy`.

### COPY

Alias: `CO`, `CP`. Copias tantas veces como dea puntos.

`Matriz` no aviso do segundo punto fai unha fila dunha vez: dea o número de elementos (o orixinal conta como un) e logo o punto onde vai a primeira copia; as demais seguen co mesmo espazamento. `Axustar` fai que ese punto sexa o lugar da última copia, e as demais repártense por igual entre medias.

- `Seleccione obxectos`
- `Seleccione o punto base [Desprazamento (D)]`
- `Seleccione o segundo punto [Desfacer (U)]`, repetido ata Enter. `U` retira a última copia.

### ROTATE

Alias: `RO`.

- `Seleccione obxectos`, `Seleccione o punto base`
- `Seleccione o ángulo de xiro <último ángulo>`: graos, positivos en sentido antihorario; ou faga clic nun punto para xirar cara a el.

### SCALE

Alias: `SC`.

- `Seleccione obxectos`, `Seleccione o punto base`
- `Seleccione o factor de escala`: escriba un factor como `0.5` ou `2`. Un punto no que fai clic dá, como factor, a súa distancia desde o punto base.

### MIRROR

Alias: `MI`.

- `Seleccione obxectos`
- `Seleccione o primeiro punto da liña de espello`, `Seleccione o segundo punto da liña de espello`
- `¿Borrar os obxectos de orixe? [Sí/Non] <N>`

### ALIGN

Alias: `AL`; ou {{ui:Modificar}} › {{ui:Máis}} › {{ui:Aliñar}}.

- `Seleccione obxectos`
- `Seleccione o primeiro punto de orixe`, `Seleccione o primeiro punto de destino`
- `Seleccione o segundo punto de orixe (Enter para continuar)`, `Seleccione o segundo punto de destino`
- `Seleccione o terceiro punto de orixe (Enter para continuar)`, `Seleccione o terceiro punto de destino`
- Con dous pares: `¿Escalar os obxectos segundo os puntos de aliñación? [Sí/Non] <N>`

Vexa [Aliñar obxectos](topic:modify-objects#align-objects).

### ALIGNTO

- `Seleccione obxectos` (ou a selección), `Aliñar [Esquerda/Centro/Dereita/Superior/Medio/Inferior] <Esquerda>`, `Ata [Selección/Primeiro/Último/Punto] <Selección>`; `P` pide o punto. A selección queda.

### DISTRIBUTE

- `Seleccione obxectos` (polo menos tres), `Distribuír [Horizontalmente/Verticalmente] <Horizontalmente>`, `Espazar por igual [Centros/Espazos] <Espazos>`. Os dous externos quedan; a selección queda.

### ALIGNPANEL

Alias: `ALP`; ou {{ui:Modificar}} › {{ui:Máis}} › {{ui:Aliñar e distribuír}}. Abre o panel que executa ALIGNTO e DISTRIBUTE con clics.

### LASER

Alias: `LASERCUT`; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Láser…}}. Abre o panel Láser sobre o debuxo: o que fai cada capa (cortar, marcar, gravar, encher, imaxe), a vista previa, o código G GRBL para gardar, e o enmarcado e o envío por Web Serial. Vexa [Enviar un debuxo a unha láser](topic:laser-cutting).

### STRETCH

Alias: `S`; ou {{ui:Estirar}}. `Seleccione obxectos para estirar`: arrastre xanelas cruzadas (ou escriba `C`) sobre os extremos para mover. `Seleccione o punto base [Desprazamento (D)]`, `Seleccione o segundo punto`. Os puntos dentro das xanelas móvense: extremos de liña, vértices de polilínea (os segmentos de arco conservan a súa altura), puntos de cota; círculos, elipses, textos, puntos e bloques móvense enteiros cando o seu centro ou punto de inserción está dentro. Unha selección feita antes do comando conserva as xanelas cruzadas (e os lazos) que a fixeron, así que estiran do mesmo xeito. Sen xanela, os obxectos móvense enteiros.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; ou {{ui:Matriz}}. `Seleccione obxectos`, logo `Escriba un tipo de matriz [Rectangular/POlar] <Rectangular>` (só ARRAY).

- Rectangular comeza con 4 columnas × 3 filas, espazadas 1.5 veces o tamaño dos obxectos, amosado como vista previa. `Escriba unha opción [NUmeración (NU)/Espazamento (S)/COLumnas/Filas (F)/saír (X)] <X>`: `COU` pide columnas e filas, `S` as distancias entre columnas e entre filas (un negativo vai á esquerda ou abaixo), `COL` e `R` cada dirección por separado.
- Polar pide `Seleccione o punto central da matriz`, comeza con 6 elementos dando a volta completa, xirados. `Escriba unha opción [Elementos/Ángulo de recheo/Xirar elementos/Saír (X)] <X>`: `I` elementos, `F` o ángulo de recheo (+ antihorario, − horario), `ROT` Sí ou Non.
- {{key:Enter}} (Saír) fai as copias, como obxectos simples. Un paso de desfacer.
- `AS` (Asociativa) alterna entre copias simples e unha matriz que segue sendo editable: un obxecto que cambia despois con {{cmd:ARRAYEDIT}}, polos seus agarres ou en Propiedades. A elección recórdase ({{cmd:ARRAYASSOCIATIVITY}}); comeza en copias simples.

### ARRAYPATH

Copias ao longo dunha curva. `Seleccione obxectos`, logo `Seleccione a curva da traxectoria`: unha liña, arco, círculo, elipse, polilínea ou spline (non un dos obxectos da matriz). A traxectoria comeza no extremo máis próximo aos obxectos, e o primeiro elemento son os obxectos onde están.

- `Escriba unha opción [Método/Elementos/ESpazamento/Aliñar/ASociativa/Saír (X)] <X>`, con vista previa. `M`: `Dividir` reparte os elementos por igual por toda a traxectoria, `Medir` pon un cada certa distancia. `I`: o número de elementos (con Medir, 0 significa tantos como caiban); un número maior que o da traxectoria ajústase ao que cabe. `SP`: a distancia entre elementos ao longo da traxectoria (pasa a Medir). `AL`: Sí xira cada elemento para seguir a traxectoria, Non mantén os elementos en vertical.
- `AS` como en {{cmd:ARRAY}}. Con ela activada, a matriz garda a súa propia copia da forma da traxectoria: editar despois a curva non move os elementos.
- Rexeita unha traxectoria que non sexa unha curva, e un só elemento.

### ARRAYEDIT

Cambia unha matriz feita con ASociativa. `Seleccione a matriz` (ou selecciónea antes). Imprime como é agora a matriz, e logo pregunta ata {{key:Enter}}:

- Rectangular: `COL` columnas e o seu espazamento, `R` filas e o seu espazamento, `A` o ángulo no que corren as columnas.
- Polar: `I` elementos, `F` o ángulo de recheo, `ROT` xirar elementos Sí ou Non.
- Traxectoria: `M` Dividir ou Medir, `I` elementos, `SP` espazamento, `AL` aliñar coa traxectoria.
- `S` (Orixe) abre os obxectos que a matriz repite, por si sós, como o editor de bloques. Debuxe e edite alí; {{cmd:ARRAYCLOSE}} garda ou descarta, e todos os elementos seguen.
- `REP` (Substituír): `Seleccione os obxectos de substitución`, `Seleccione o punto base dos obxectos de substitución`, logo faga clic nos elementos que substituír, {{key:Enter}}. Eses elementos amosan o substituto no seu lugar; os obxectos de substitución saen do debuxo e viven na matriz. `RES` (Restablecer) amosa de novo os obxectos de orixe en cada elemento.
- Cada cambio é un paso de desfacer. Rexeita copias simples, unha referencia de bloque simple e unha matriz en capa bloqueada.

Os mesmos números están en Propiedades, en Matriz, e a matriz ten agarres: o seu punto base móveo, o agarre do segundo elemento fixa o espazamento, o agarre despois do último elemento fixa o número (polar: o segundo elemento fixa cantos elementos hai, o último o ángulo de recheo). {{cmd:EXPLODE}} converte unha matriz de novo en copias simples.

### ARRAYCLOSE

Remata {{cmd:ARRAYEDIT}} Orixe: `¿Gardar os cambios nos obxectos de orixe da matriz? [Gardar/Descartar] <Gardar>`. Avisa cando non hai obxectos de orixe de matriz abertos. {{cmd:BCLOSE}} fai o mesmo.

### ARRAYASSOCIATIVITY

`Escriba o novo valor para ARRAYASSOCIATIVITY (1 = as matrices seguen editables, 0 = copias simples)`. Define co que empezan {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR e {{cmd:ARRAYPATH}}; a súa opción `AS` cambia o mesmo axuste. Recórdase neste navegador.

### OFFSET

Alias: `O`. Liñas, arcos, círculos e polilíneas.

Cando unha polilínea se afasta cara a fóra e os seus segmentos rectos se separan nunha esquina, {{cmd:OFFSETGAPTYPE}} decide como se pecha o espazo.

- `Seleccione a distancia de desprazamento [Por punto (T)] <última distancia, ou Por punto>`
- `Seleccione o obxecto para desprazar`, logo `Seleccione o punto do lado para desprazar` (ou, con Por punto, `Seleccione o punto de paso`), repetido ata Enter.

### OFFSETGAPTYPE

- `Espazos nas esquinas do desprazamento: 0 alongar, 1 redondear, 2 biselar`: como {{cmd:OFFSET}} pecha os espazos nas esquinas externas dunha polilínea. `0` alarga os segmentos ata que se encontran (o inicio), `1` únePOs cun arco arredor da antiga esquina, `2` cun corte recto. As esquinas internas e os segmentos de arco non se ven afectados. Mantense nesta sesión.

### EXTRIM

{{cmd:EXTRIM}} recorta todo dun lado dunha arista. Escolla a arista de corte (unha liña, arco, círculo, polilínea, elipse, spline ou liña de construción), logo un punto do lado que se vai limpar: cada liña, arco, círculo, polilínea e liña de construción que cruce a arista perde a súa parte nese lado, onde comeza na arista. Mentres escolle o lado, as partes que se irían siguen o punteiro. Para unha arista pechada os lados son o interior e o exterior. Os obxectos que só tocan a arista, e os textos, tramas, splines e elipses que a cruzan, quedan como están. Un paso de desfacer.

### TRIMEXTENDMODE

- `Escriba o novo valor para TRIMEXTENDMODE (1 Rápido, 0 Estándar)`: como comezan {{cmd:TRIM}} e {{cmd:EXTEND}}. `1` Rápido: cada obxecto é unha arista ou límite de corte. `0` Estándar: piden primeiro as arestas. Tamén `(setvar "TRIMEXTENDMODE" 0)` en LISP.

### TRIM

Alias: `TR`. Primeiro imprime `Configuración actual: modo Rápido (TRIMEXTENDMODE 1), arestas: sen extensión, arrastrar debuxa unha traxectoria`. No modo Rápido cada obxecto visible é unha arista de corte, e un obxecto que nada cruza elimínase; no modo Estándar pregunta antes `Seleccione as arestas de corte (Enter = todos os obxectos)` e corta só nelas.

- `Seleccione o obxecto para recortar ou Maiús+clic para estender [Arestas de corte (T)/Valado (F)/Cruzamento (C)/Modo (O)/Arista (E)/Borrar (R)/Desfacer (U)]`, repetido: faga clic no anaco que se quita (amósase en gris e en trazo mentres o punteiro está sobre el), arrastre unha traxectoria por varios anacos (todos van nun só paso), ou faga clic en dous puntos baleiros para un valado entre eles. {{key:Shift}} estende. `T` escolle as arestas de corte (modo Estándar), `F` pide puntos de valado, `C` dous cantos de xanela (os anacos parcialmente dentro tamén van), `O` pide `Escriba unha opción de modo de recorte [Rápido/Estándar]`, `E` pide `Escriba un modo de extensión da arista implícita [Estender/Non estender]` (EDGEMODE), `R` borra os obxectos que seleccione, `U` desfai a última escolla ou arrastre. Enter remata. Vexa [Recortar e estender](topic:trim-and-extend).

- Un clic sobre unha trama corta a trama: as arestas de corte dividen a área tramada, e o anaco no que fixo clic retírase (non queda ningún contorno debuxado no seu lugar). A trama conserva o seu patrón ou degradado; unha trama que estaba ligada ao seu contorno deixa de estarlo, porque xa non o recheba. Avisa cando nenhuma arista de corte divide alí a trama, cando o clic cae fóra dela, e cando non quedaría nada (use {{cmd:ERASE}}). Unha traxectoria ou un valado arrastrados non cortan tramas.

### EXTEND

Alias: `EX`. Igual que TRIM pero ao revés: `Seleccione o obxecto para estender ou Maiús+clic para recortar [Arestas límite/Valado/Cruzamento/Modo (O)/Arista (E)/Desfacer (U)]`. Un clic alonga o extremo máis próximo ata o seguinte límite; unha traxectoria ou valado arrastrado alonga cada obxecto que cruza; {{key:Shift}} recorta. `B` escolle as arestas límite (modo Estándar). Modo e Arista son compartidos con TRIM.

### LINKVIEWS

Alias: `SYNCVIEWS`; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Ligar as vistas dos paneis}}, ou a icona de ligazón nas pestanas do debuxo. `Ligar as vistas dos paneis [ON/OFF]` (Enter cambia ao outro estado): mentres está activo, un desprazamento ou zoom no panel activo move todos os paneis que amosan o mesmo tipo de espazo. Vexa [Dividir a pantalla](topic:split-screen).

### OPENIN3D

Sen alias; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Abrir en ModelCraft}}, onde a aplicación de modelado 3D recibe un debuxo entregado. Ábrese alí nunha pestana nova, como DWG (non se sobe nada). Se o navegador bloquea a pestana, avisa.

### LASSOMODE

`Escriba un novo valor para LASSOMODE (1 = lazo, 0 = rectángulo)`: o que debuxa premer e arrastrar nun lugar baleiro. O mesmo que Configuración › CadCraft › Arrastrar para seleccionar. Vexa [Selección con lazo](topic:lasso-selection).

### FILLET

Alias: `F`. Liñas, arcos, círculos e polilíneas. Primeiro imprime `Configuración actual: Modo = TRIM, Raio = 0`.

- `Seleccione o primeiro obxecto [Desfacer (U)/Polilínea/Raio (R)/Recortar (T)/Varios (M)]`
  - `R` pide `Seleccione o raio de redondeo <último>`. `T` pide `Escriba unha opción de modo de recorte [Recortar/Sen recorte]`: con Sen recorte os obxectos quedan como están e só se engade o arco.
  - `M` mantén o comando para máis esquinas ata {{key:Enter}}; `U` retira a última esquina sen saír do comando.
  - `P` pide `Seleccione a polilínea 2D [Raio]` e redondea cada esquina onde se encontran dous segmentos rectos. Os redondeos que xa ten substitúense polo novo raio; o raio 0 quítaos. As esquinas cuxos lados son curtos de máis para o raio quedan e cóntanse.
- `Seleccione o segundo obxecto ou Maiús+clic para aplicar a esquina [Raio (R)]`. Manteña {{key:Shift}} ao facer clic para unha esquina viva, sexa cal sexa o raio.

Faga clic en cada obxecto na parte que quere conservar. Dúas liñas que non se encontran alóngase. Dúas liñas paralelas reciben un semicírculo a través do espazo, no extremo da primeira liña máis próximo ao seu clic. Un círculo nunca se corta. Dous segmentos dunha mesma polilínea contiguos reciben o arco dentro da polilínea; unha polilínea e outro obxecto funcionan cando o corte cae no primeiro ou no último segmento da polilínea.

### CHAMFER

Alias: `CHA`. Liñas e os segmentos rectos das polilíneas. Primeiro imprime as distancias actuais (ou lonxitude e ángulo).

- `Seleccione a primeira liña [Desfacer (U)/Polilínea/Distancia (D)/Ángulo (A)/Recortar (T)/mEtodo (E)/Varios (M)]`
  - `D` pide `Seleccione a primeira distancia de bisel <última>` e `Seleccione a segunda distancia de bisel <a primeira>`: a primeira córtase na primeira liña que escolla, a segunda na outra.
  - `A` pide `Seleccione a lonxitude do bisel na primeira liña` e `Seleccione o ángulo do bisel desde a primeira liña`.
  - `E` (mEtodo) escolle cal das dúas usa o seguinte bisel. `T`, `M`, `U` e `P` funcionan como en {{cmd:FILLET}}.
- `Seleccione a segunda liña ou Maiús+clic para aplicar a esquina [Distancia/Ángulo/mEtodo]`. {{key:Shift}}+clic fai unha esquina viva.

Rexéitase unha distancia máis longa que a liña (`A distancia é demasiado grande.`).

### BREAK e BREAKATPOINT

Alias: `BR`. `Seleccione o obxecto` (onde fai clic é o primeiro punto), `Seleccione o segundo punto de ruptura [Primeiro punto (F)]`; `F` pide `Seleccione o primeiro punto de ruptura` e `Seleccione o segundo punto de ruptura`. A parte entre eles vai; nun círculo, en sentido antihorario desde o primeiro punto. BREAKATPOINT pide `Seleccione o punto de ruptura` e divide alí o obxecto en dous (non nun círculo).

### LENGTHEN

Alias: `LEN`. `Seleccione un obxecto para medir [Diferenza (DE)/Porcentaxe (P)/Total (T)/DInámico (DY)]`: unha escolla imprime `Lonxitude actual` (e o ángulo incluído dun arco) e volve preguntar. `DE` pide `Escriba a variación de lonxitude (negativo acurta) [Ángulo]`, `P` `Escriba a lonxitude en porcentaxe`, `T` `Seleccione a lonxitude total [Ángulo]`, `DY` arrastra. Logo `Seleccione un obxecto para cambiar [Desfacer (U)]`, repetido: móvese o extremo máis próximo ao clic. Liñas, arcos e polilíneas abertas.

### JOIN

Alias: `J`. `Seleccione os obxectos para unir`. Liñas, arcos e polilíneas abertas que se encontran extremo con extremo convértense en polilíneas (pechadas cando a cadea se pecha); as liñas sobre unha mesma recta convértense nunha liña; os arcos dun mesmo círculo convértense nun arco ou no círculo. O historial di cantos obxectos se uniron e cantos non.

### MATCHPROP

Alias: `MA`, `PAINTER`. `Seleccione o obxecto de orixe`, logo `Seleccione os obxectos de destino [Configuración (S)]` e {{key:Enter}}. Copia a capa e a cor, e entre obxectos do mesmo tipo a altura e o ancho do texto, os tamaños de cota ou o patrón da trama. `S` pide `Active ou desactive unha propiedade [Cor/Capa (LA)/Texto/Cota/Trama]`, repetido ata {{key:Enter}}; a elección recórdase durante a sesión.

### EXPLODE

Alias: `X`. As polilíneas convértense en liñas e arcos, as referencias de bloque nos seus obxectos, e as cotas en liñas, puntas de frecha e texto. Unha matriz editable ({{cmd:ARRAYEDIT}}) convértese en copias simples dos seus obxectos.

- `Seleccione obxectos`

### GROUP

Alias: `G`. {{cmd:GROUP}} dá aos obxectos seleccionados un nome que comparten. Seleccione os obxectos, logo escriba un nome (sen espazos; `?` lista os grupos; Enter fai un grupo sen nome) e, para un grupo con nome, unha descrición opcional. A partir de aí, un clic sobre un deles, ou unha xanela que colla un, selecciona todos, así que se moven, copian e borran xuntos; cada obxecto segue sendo un obxecto propio. Un obxecto pode estar en varios grupos. Unha copia dun grupo completo é un grupo novo sen nome; unha copia dun membro só se une ao grupo. Os grupos pertencen ao espazo onde se fixeron (o modelo ou unha folla). Consérvanse ao gardar como DWG ou DXF e ao abrir de novo o ficheiro en CadCraft; os ficheiros DXF 2000 tamén os levan como obxectos de grupo para outros programas, e os grupos feitos noutro programa léense ao abrir un DXF ou DWG.

### UNGROUP

{{cmd:UNGROUP}} separa grupos: seleccione obxectos dos grupos (cada grupo no que están desfaise) ou escriba `Name` e o nome do grupo. Os obxectos quedan no debuxo. Un paso de desfacer devolve os grupos.

### GROUPEDIT

{{cmd:GROUPEDIT}} cambia un grupo. Escolla un dos seus obxectos, ou `Name` e o seu nome; un grupo que xa está seleccionado tómase tal como está. Logo: `Add` engade obxectos (escollidos un a un, non grupo a grupo), `Remove` quita obxectos, `REName` renomea o grupo, cambia a súa `Description`, ou fixa `Selectable` (se un clic nun obxecto selecciona o grupo completo). `eXit` ou Enter remata. Un grupo sen obxectos desaparece.

### PICKSTYLE

- `Selección de grupo: 0 un clic selecciona un obxecto, 1 o seu grupo completo`: con `1` (o inicio) un clic ou unha xanela sobre un obxecto agrupado selecciona o grupo completo; con `0` obxectos soltos, para editar un membro. Mantense nesta sesión.

## Portapapeis

O portapapeis propio de CadCraft: funciona dentro dun debuxo, entre debuxos e entre pestanas de CadCraft neste navegador. Vexa [Copiar, pegar e duplicar](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, ou {{ui:Copiar}} no grupo {{ui:Editar}}. Copia obxectos ao portapapeis, cos bloques e capas que usan. Os obxectos quedan seleccionados.

- `Seleccione obxectos para copiar` (omítese cando xa hai obxectos seleccionados)

### CUTCLIP

{{key:Mod+X}}, ou {{ui:Cortar}} no menú {{ui:Máis}}. Copia obxectos ao portapapeis e logo os borra (un paso de desfacer).

- `Seleccione obxectos para cortar` (omítese cando xa hai obxectos seleccionados)

### COPYBASE

Copia obxectos ao portapapeis cun punto base que escolla; ao pegar, ese punto cae no lugar indicado.

- `Seleccione o punto base`
- `Seleccione obxectos para copiar`

### PASTECLIP

{{key:Mod+V}}, ou {{ui:Pegar}} no grupo {{ui:Editar}}. A copia segue o cursor, colgada da esquina inferior esquerda dos seus límites (ou do seu centro, ou do punto de `COPYBASE`; vexa [Configuración de CadCraft](topic:settings)).

- `Seleccione o punto de inserción`

Os obxectos pegados quedan seleccionados. Un bloque que o debuxo xa ten co mesmo nome conserva a definición deste debuxo.

Cando unha área copiada en MarkupCraft é máis recente que o que copiou CadCraft (e ten menos de 6 horas), {{key:Mod+V}} e `PASTECLIP` pegan esa área: vexa `PASTEAREA`.

### PASTEAREA

Alias: `PAREA`. {{ui:Pegar unha área copiada}} no menú {{ui:Máis}}. Pega unha área copiada con {{ui:Copiar área}} en MarkupCraft como imaxe no seu tamaño real. Vexa [Imaxes nun debuxo](topic:pictures).

- `Seleccione a esquina inferior esquerda da área copiada`
- `Escriba a escala do tamaño do papel (100 para unha folla 1:100; Puntos: dous puntos nela e a súa distancia real) [Puntos] <1>` (só cando a folla non tiña escala de debuxo): un número, {{key:Enter}} para o tamaño do papel, ou `P`, logo `Primeiro punto na área pegada`, `Segundo punto na área pegada` e a súa distancia real.

### PASTEORIG

{{key:Mod+Shift+V}}, ou {{ui:Pegar no mesmo sitio}} no menú {{ui:Máis}}. Pega nas coordenadas desde as que se copiaron os obxectos. Non pregunta nada.

### DUPLICATE

Alias: `DUP`. {{key:Mod+D}}, ou {{ui:Duplicar e mover}} no menú {{ui:Máis}}. Unha copia dos obxectos móvese co punteiro desde onde está; {{key:Esc}} non deixa nada. Non usa o portapapeis.

- `Seleccione obxectos para duplicar` (omítese cando xa hai obxectos seleccionados)
- `Seleccione onde vai a copia (Esc non deixa nada)`: faga clic, escriba un punto, `@dx,dy` (desde onde estaba o punteiro), ou unha distancia cara ao cursor.

### SELECT

Pide `Seleccione obxectos` (con todas as opcións de abaixo) e deixa seleccionado o que escolleu, para o seguinte comando ou para `P` máis tarde.

### QSELECT

Alias: `QS`. No navegador, o diálogo {{ui:Selección rápida}} (vexa [Seleccionar obxectos](topic:select-objects#select-by-a-rule-quick-select)). Sen el, a liña de comandos pregunta `Escriba o tipo de obxecto`, `Escriba a propiedade`, `Escriba o operador [=/<>/>/</*/Seleccionar todo] <=>` e `Escriba o valor`. As coincidencias pasan a ser a selección.

### SELECTSIMILAR

Alias: `SIM`. `Seleccione obxectos [Configuración (SE)]` (ou a selección actual): selecciona todos os obxectos do mesmo tipo, coa mesma capa e cor (e o mesmo nome de bloque e patrón de trama). `SE` pide `Active ou desactive unha propiedade [Capa (LA)/Cor (CO)/Nome (N)/Patrón (PA)/Altura (HE)]`, repetido ata {{key:Enter}}.

### FIND

Sen alias; ou {{ui:Editar}} › {{ui:Máis}} › {{ui:Buscar e substituír}}. No navegador, o diálogo {{ui:Buscar e substituír}} (vexa [Engadir texto e etiquetas](topic:text#find-and-replace-words)). Sen el: `Escriba o texto que buscar`, logo `Escriba o texto de substitución (Enter: seleccionar o que se atope)`. Busca no texto, nos valores dos atributos e no texto das cotas, na pestana aberta ou na selección.

### SELECTALL e DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) selecciona todos os obxectos que pode editar na pestana aberta. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE`; ou {{key:Esc}}) borra a selección.

## Cotas

### DIMLINEAR

Alias: `DLI`, `DIMLIN`. Distancia horizontal ou vertical.

- `Seleccione o origen da primeira liña de extensión [Seleccionar obxecto (S)]` (Enter ou `S`: `Seleccione o obxecto para cotar`, logo faga clic nun segmento de liña, arco, círculo ou polilínea)
- `Seleccione o origen da segunda liña de extensión`
- `Seleccione a posición da liña de cota [Texto/Horizontal/Vertical/Xirada]`. `T` pide o texto (`<>` é o valor medido), `H` e `V` fixan a dirección, `R` pide `Seleccione o ángulo da liña de cota <0>`.

### DIMALIGNED

Alias: `DAL`, `DIMALI`. A distancia real entre dous puntos.

- Orixes como en {{cmd:DIMLINEAR}}, logo `Seleccione a posición da liña de cota [Texto]`.

### DIMANGULAR

Alias: `DAN`, `DIMANG`.

- `Seleccione un arco, círculo ou liña, ou Enter para un vértice`
- Arco: o seu ángulo. Círculo: `Seleccione o segundo extremo do ángulo`. Liña: `Seleccione a segunda liña`. Enter: `Seleccione o vértice do ángulo`, `Seleccione o primeiro extremo do ángulo`, `Seleccione o segundo extremo do ángulo`.
- `Seleccione a posición da liña de cota [Texto]`: faga clic dentro do ángulo para medilo.

### DIMRADIUS e DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Seleccione un arco ou círculo`, logo `Seleccione a posición da liña de cota [Texto]`.

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`. Continúa desde a última cota lineal ou aliñada feita (ou pide `Seleccione unha cota lineal ou aliñada`).

- `Seleccione o segundo origen da liña de extensión [Desfacer (U)]`, repetido ata Enter.

### DIMBASELINE

Alias: `DBA`, `DIMBASE`. Como {{cmd:DIMCONTINUE}}, pero cada cota parte do primeiro origen e apílase máis lonxe.

### DIMORDINATE

Alias: `DOR`, `DIMORD`. `Seleccione a posición do elemento`, logo `Seleccione o extremo da referencia [Datum X (X)/Datum Y (Y)/Texto]`. Escribe a distancia do elemento á orixe do UCS en X ou en Y, nunha referencia: unha referencia que vai sobre todo cara a arriba ou abaixo le X, e unha que vai de lado le Y; `Xdatum` e `Ydatum` fixan cal. Fixe antes a orixe con {{cmd:UCS}} (sen ela é o 0,0 do debuxo). Os agarres moven o elemento, a orixe e o extremo da referencia, e o valor segue. Gárdase como unha cota de ordenada real en DWG e DXF. Rexeita un extremo de referencia sobre o propio elemento.

### DIMARC

Alias: `DAR`. `Seleccione un arco ou segmento de arco de polilínea`, logo `Seleccione a posición da cota de lonxitude de arco [Texto]`. Mide ao longo do arco (non a corda) e escribe o símbolo de arco antes do valor. Rexeita un círculo completo, unha liña ou un segmento recto dunha polilínea. Un DWG consérvao como cota de lonxitude de arco; un DXF consérvao como cota angular co valor da lonxitude como texto, e CadCraft volve abrilo como cota de lonxitude de arco.

### DIMJOGGED

Alias: `DJO`, `JOG`. `Seleccione un arco ou círculo`, `Seleccione a posición de substitución do centro`, `Seleccione a posición do quebramento`. Unha cota de raio para unha curva cuxo centro está lonxe ou fóra da folla: a liña de cota parte do punto que dá en vez do centro, cun quebramento, e segue amosando o raio real. Un DWG consérvao como cota de raio quebrado; un DXF consérvao como cota de raio, e CadCraft volve abrilo quebrado.

### DIMJOGLINE

Alias: `DJL`. `Seleccione a cota para engadir o quebramento [Quitar]`, logo `Seleccione a posición do quebramento (ou prema Enter)`. Pon un símbolo de quebra na liña dunha cota lineal ou aliñada, para mostrar que a distancia non está debuxada á escala; o valor non cambia. `Quitar` o retira. Rexeita outros tipos de cota.

### QDIM

Sen alias. `Seleccione a xeometría para cotar`, logo `Seleccione a posición da liña de cota [Continua/Escalonada/De base/Ordenada/Raio/Diámetro/puntoDatum]`. Cota varios obxectos dun paso, a partir dos extremos de liñas e segmentos de polilínea, centros de círculos e arcos, puntos e referencias de bloque. Unha posición por enriba ou por debaixo dos obxectos mide a través, e unha ao lado mide cara arriba. `Continua` encadea os puntos, `De base` mide todos desde o primeiro, `Escalonada` aniña pares desde o medio cara a fóra, `Ordenada` dá a cada punto a súa distancia ao datum (`puntoDatum` escolle un novo), `Raio` e `Diámetro` cotan cada círculo e arco escollido. O modo recórdase. Todo o que fai é un paso de desfacer. Avisa cando hai menos de dous puntos, ou ningún arco ou círculo para Raio e Diámetro.

### DIMBREAK

Alias: `DBREAK`. `Seleccione cotas para engadir ou quitar rupturas`, logo `Romper onde cruzan outros obxectos [Auto/Manual/Quitar] <Auto>`. `Auto` deixa un espazo nas liñas de cota e de extensión onde quera que outro obxecto as cruce, e recalcúlao cando eses obxectos ou a cota se moven. `Manual` (unha cota) pide dous puntos e deixa un espazo entre eles. `Quitar` quita todos os espazos. O espazo é 1.5 veces a altura do texto da cota.

### DIMSPACE

Sen alias. `Seleccione a cota base`, `Seleccione as cotas para espazar`, `Escriba un valor de espazamento ou Auto <Auto>`. Move as liñas de cota de cotas lineais e aliñadas paralelas (ou angulares sobre o mesmo vértice) para que queden á mesma distancia, contada desde a cota base, cada unha no lado no que está. `0` as aliña coa base; `Auto` é o dobre da altura do texto da cota base. As cotas que non son paralelas á base quedan como están.

### DIMINSPECT

Sen alias. `Seleccione cotas`, `Forma do marco de inspección [Redondo/Angular/Ningún/quitar] <Redondo>`, `Escriba unha etiqueta`, `Escriba a taxa de inspección <100%>`. Debuxa un marco ao redor do valor, cunha etiqueta antes e a taxa de inspección despois. `quitar` retira o marco. O texto de tolerancia queda co valor.

### DIMOVERRIDE

Alias: `DOV`, `DIMOVER`. `Escriba o nome da variable de cota para substituír ou Borrar`, `Escriba o novo valor para …`, de novo ata Enter, logo `Seleccione cotas`. Cambia esas configuracións só nas cotas seleccionadas; o estilo de cota non cambia. Admite as variables que son un número ou un interruptor (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Borrar` pon as cotas seleccionadas de novo no seu estilo. Rexeita un nome que non é tal variable e un valor que non admite.

### DIMREASSOCIATE

Alias: `DRE`, `DIMREASSOC`. `Seleccione cotas`, logo para cada unha os seus orixes das liñas de extensión (`Seleccione o primeiro origen da liña de extensión nun obxecto`: encaixa nun extremo ou no medio dunha liña, nunha esquina de polilínea, nun centro; Enter deixa ese punto libre), ou, para un raio, diámetro, raio quebrado ou cota de lonxitude de arco, `Seleccione un arco ou círculo`. A cota queda entón unida a eses obxectos: cando se moven ou cambian de tamaño, segue e mídese de novo no mesmo paso de desfacer. Mover a man un punto unido, ou borrar o obxecto, rompe a unión. A unión gárdase en DWG e DXF 2000 como datos propios de CadCraft; outros programas ven unha cota normal.

### DIMDISASSOCIATE

Alias: `DDA`, `DIMDISASSOC`. `Seleccione cotas`. Libéraas dos obxectos aos que están unidas; non se move nada.

### CENTERMARK

Alias: `CM`, `DIMCENTER`, `DCE`. `Seleccione un círculo ou arco para engadir a marca de centro`, de novo ata Enter. Debuxa unha cruz no centro e catro liñas de centro ata xusto máis aló da curva (tipo de liña CENTER), como liñas simples na capa actual; dimensionadas segundo o tamaño da frecha e a escala global da configuración de cota actual, xiradas co UCS. Non seguen o círculo se este se move.

### CENTERLINE

Alias: `CL`. `Seleccione a primeira liña`, `Seleccione a segunda liña`. Debuxa unha liña a medio camiño entre dúas liñas (pola bisectriz cando se encontran), un pouco máis longa que elas, en tipo de liña CENTER. Unha liña simple: non segue as dúas liñas.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Sen alias. Cada un pide `Escriba o novo valor para … <actual>` e fixa ese tamaño para as cotas **novas**: escala global, altura do texto, tamaño da frecha, cifras decimais (ata 8), espazo arredor do texto, extensión máis aló da liña de cota, desprazamento desde a orixe. Vexa [Fixar os tamaños de cota](topic:dimension-settings).

### DIMLUNIT

Configuración de cota: o formato só das cotas novas (1 científico, 2 decimal, 3 enxeñaría, 4 arquitectónico, 5 fraccionario).

### DIMSTYLE e -DIMSTYLE

Alias: `DST`, `DDIM`, `D`. O xestor de estilos de cota: {{ui:Definir como actual}}, {{ui:Novo…}}, {{ui:Modificar…}}, {{ui:Cambiar o nome…}}, {{ui:Eliminar}}, {{ui:Comparar…}}, {{ui:Aplicar á selección}}. `-DIMSTYLE` na liña de comandos: `Estilo de cota [Restablecer/Gardar/Eliminar/Aplicar/Comparar/Renomear/Listar]`. Vexa [Fixar os tamaños de cota](topic:dimension-settings#named-dimension-styles).

### DIMEDIT e DIMTEDIT

`DIMEDIT` (`DED`): `Edición de cota [Inicio/Novo/Xirar/Oblicuo] <Inicio>`, logo as cotas (ou as xa seleccionadas). Novo pide o texto (`<>` = a medición); Xirar pide un ángulo (0 devolve o texto ao seu sitio); Oblicuo pide o ángulo das liñas de extensión desde o eixe X (Enter = ningún; só cotas lineais e aliñadas). `DIMTEDIT` (`DIMTED`): `Texto de cota [Esquerda/Dereita/Centro/Inicio/Ángulo] <Centro>`. Vexa [Fixar os tamaños de cota](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias: `DTU`. `Unidades no texto das cotas novas [Unidades do debuxo/mm/cm/m/km]`, ou con cotas seleccionadas `Unidades no texto das cotas seleccionadas`. Escribe a lonxitude medida nesa unidade, coa unidade despois (DIMLFAC e un sufixo DIMPOST); `D` volve ás unidades do debuxo. Vexa [Cotas en mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias: `RC`. Imprime `Lonxitude do arco: … Tipo: …`, logo `Seleccione o primeiro punto [Lonxitude do arco/Obxecto/Rectangular/Poligonal/Libre]`. Rectangular pide `Seleccione a esquina oposta`; Poligonal `Seleccione o seguinte punto (Enter pecha a nube) [Desfacer (U)]`; Libre segue o punteiro ata un clic ou {{key:Enter}}; `O` pide `Seleccione o obxecto` e `¿Inverter o sentido? [Sí/Non] <N>` e convirte o obxecto en nube. `A` pide `Escriba a lonxitude de cada arco`. `R`, `P` e `F` escollen o tipo para a seguinte nube. O resultado é unha polilínea pechada de arcos.

### MLEADER

Alias: `MLD`; ou {{ui:Referencia}}. `Seleccione a posición da punta da referencia [Tamaño da frecha/Distancia de aterraxe/Bloque]`, `Seleccione a posición de aterraxe da referencia`, logo o texto na caixa no seu sitio (ou, sen ela, `Escriba o texto (unha liña baleira remata)`). `Bloque` pide primeiro un nome de bloque e a multirreferencia amosa ese bloque en vez do texto. Máis liñas de referencia: {{cmd:MLEADEREDIT}}. Gárdase como unha multirreferencia real en DWG; DXF conserva as liñas, a punta e o texto que debuxa.

### MLEADEREDIT

Alias: `MLE`. `Seleccione unha multirreferencia`, logo `Seleccione a posición da punta da referencia [Quitar referencias/Contido do bloque/Contido do texto]`: cada punto engade unha liña de referencia desde unha punta nova ata o mesmo aterraxe, ata Enter. `Quitar referencias` quita logo a liña de referencia en que fai clic (unha multirreferencia conserva polo menos unha). `Contido do bloque` pide un nome de bloque e amosa ese bloque en vez do texto (pídense os seus atributos); `Contido do texto` devolve o texto. Cada liña de referencia ten o seu propio agarre. Un DWG conserva cada liña de referencia e o bloque nunha mesma multirreferencia.

### MLEADERALIGN

Alias: `MLA`. `Seleccione multirreferencias`, logo `Seleccione a multirreferencia á que aliñar [Distribuír/Espazamento/Usar o espazamento actual]` e `Seleccione unha dirección`. Move os aterraxes das outras multirreferencias (e o seu texto ou bloque) sobre a liña que pasa polo aterraxe da escollida, nesa dirección; as puntas quedan onde apuntan. `Espazamento` tamén lles dá unha distancia igual entre si; `Distribuír` pide dous puntos e repárteas por igual entre eles. Precisa polo menos dúas multirreferencias.

### MLEADERCOLLECT

Alias: `MLC`. `Seleccione multirreferencias`, logo `Seleccione a posición da multirreferencia reunida [Vertical/Horizontal]` (Enter mantén o lugar da primeira). Fai unha soa multirreferencia de varias: o contido de bloque vai a un bloque novo que contén todos os bloques en paralelo ou un debaixo doutro; o contido de texto pasa a unha nota, cunha liña por cada un. A primeira multirreferencia conserva as súas liñas de referencia; as outras quítanse. Rexeita unha mestura de contido de texto e de bloque.

### TABLE

Alias: `TB`; ou {{ui:Anotar}} › {{ui:Máis}} › {{ui:Táboa}}. Fai unha táboa: un obxecto que se move, copia, xira, escala e traza como calquera outro, cos seus celas gardadas como datos.

- `Número de filas de datos ou [Pegar/Ficheiro/Estilo] <3>`, logo `Número de columnas <3>`, `Altura do texto` e `Esquina superior esquerda da táboa`. A táboa recibe unha fila de título (unha cela combinada) e unha fila de cabeceira por riba das filas de datos.
- `P`: unha táboa desde celas de folla de cálculo no portapapeis (texto con un tabulador entre celas). Premer {{key:Ctrl+V}} con esas celas no portapapeis fai o mesmo, salvo que a copia propia de CadCraft sexa a máis recente (ou que CadCraft non o poida saber: entón pega a súa propia copia e di iso). `F`: unha táboa desde un ficheiro `.csv` ou separado por tabuladores. A primeira fila convértese en fila de cabeceira; os anchos das columnas axústanse ao texto.
- `S`: escoller o estilo de táboa para esta táboa (vexa {{cmd:TABLESTYLE}}).
- Rexeita un número de filas ou columnas que non sexa un enteiro, e máis celas das que cabe unha táboa (2.000 filas, 200 columnas, 40.000 celas).
- {{cmd:EXPLODE}} converte unha táboa en liñas e texto. Gardada como DWG, unha táboa é un obxecto de táboa real que outros programas poden editar; gardada como DXF é un bloque que a debuxa, e CadCraft volve abrila como táboa.

### TABLEDIT

Alias: `TABLEEDIT`, `TABEDIT`; ou faga dobre clic nunha cela. Edita unha táboa.

- `Escolla unha cela para escribir (Enter para rematar) ou [Fila/Columna/Tamaño/Combinar/Separar/Aliñar/Altura/Tipo/Borrar (CL)]`. Faga clic nunha cela, ou, con unha táboa seleccionada, escriba o seu nome (`B3`: columna B, fila 3; a fila de título é a fila 1). No navegador abre unha caixa sobre a cela: {{key:Enter}} conserva o texto, {{key:Tab}} pasa á seguinte cela, {{key:Alt+Enter}} inicia unha liña nova, {{key:Esc}} deixa a cela como estaba.
- Un texto que empeza por `=` é unha fórmula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, con `+ - * / ^`, paréntese e funcións como `sqrt` e `round`. A cela amosa o valor; unha fórmula que nomea a súa propia cela, unha cela fóra da táboa ou unha cela sen número amosa `####` e a liña de comandos di por que.
- `R` / `C`: `Inserir` ou `Eliminar` filas ou columnas nunha cela escollida (cantas, e por enriba ou por debaixo, á esquerda ou á dereita). As fórmulas seguen as celas que nomean.
- `S`: o ancho da columna e a altura da fila. Unha fila nunca é máis baixa que o seu texto. Unha táboa seleccionada tamén ten un agarre en cada bordo de columna e de fila.
- `M`: combinar desde unha cela escollida ata outra; `U`: separar. `A`: aliñación (`TL` arriba á esquerda … `MC` centro … `BR` abaixo á dereita). `H`: a altura do texto propia desta cela (0 = a do estilo). `K`: converte a fila nunha fila de título, de cabeceira ou de datos. `CL`: vacía a cela.
- Rexeita unha táboa en capa bloqueada, eliminar todas as filas ou columnas, e unha combinación que partiría outra cela combinada en dúas.

### TABLESTYLE

Alias: `TS`. Lista os estilos de táboa con cantas táboas usa cada un, logo `Estilo de táboa: [Novo/Definir/Editar/Eliminar/Aplicar]`.

- Un estilo garda a altura e a aliñación do texto das filas de título, cabeceira e datos, a marxe da cela, e cales bordos se debuxan (exterior, entre filas, entre columnas).
- `N` fai un estilo a partir do actual e fai que sexa o actual; `S` define o estilo actual (as táboas novas o toman); `E` edita un: as táboas que o usan redibúxanse; `A` dá o estilo actual ás táboas seleccionadas; `D` elimina un (non Standard, non o actual; as táboas que o usaban conservan o seu aspecto).
- Os estilos gárdanse co debuxo (DWG e DXF).

### TABLEEXPORT

Garda o que mostra unha táboa como ficheiro CSV (unha fórmula como o seu valor). `Seleccione unha táboa`, ou selecciónea antes. As celas de texto que empezan por `=`, `+`, `-` ou `@` reciben un `'` inicial para que unha folla de cálculo non as execute.

### TABLEPASTE

Alias: `PASTETABLE`. Fai unha táboa desde celas de folla de cálculo no portapapeis, e logo pide a súa esquina superior esquerda. Igual que {{cmd:TABLE}} › `Pegar`.

### DATALINK

Alias: `DL`. `Ligazón de datos: [Novo/Listar/Quitar] <Novo>`. `N` pide un ficheiro CSV, coloca unha táboa del e recorda o nome do ficheiro; `L` lista as ligazóns co seu ficheiro, tamaño, cando se leu e cantas táboas o usan; `R` quita unha ligazón (as súas táboas quedan como táboas simples).

### DATALINKUPDATE

Alias: `DLU`. Lee de novo o ficheiro dunha ligazón de datos e volve encher as táboas ligadas a ela (as filas e columnas engádense ou quítanse para coincidir). Un navegador non pode abrir un ficheiro por si mesmo, así que pide que escolla de novo o ficheiro. Con varias ligazóns pregunta cal.

### FIELD

Pon un campo no debuxo: texto que se calcula por si mesmo. `Campo: [Data/Nome do ficheiro/Folla/Propiedade/Obxecto/Expresión/Código] <Data>`:

- `D`: agora, ou a data gardada, creada ou trazada, e un formato (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: o nome do ficheiro, con ou sen a súa extensión. `S`: o número da folla, o seu título, ou cantas follas hai. `P`: unha propiedade do debuxo polo nome (vexa {{cmd:DWGPROPS}}). `O`: seleccione un obxecto, logo o que se lee (área, lonxitude, perímetro, raio, diámetro, capa, nome, x, y, texto, rotación, cor) e as cifras decimais. `E`: unha fórmula. `C`: un texto con códigos escritos tal cal, como `Folla %<sheetnumber>% de %<sheetcount>%`.
- Logo `Seleccione un texto, unha cela de táboa ou un bloque con atributos onde o poñer (Enter: un texto novo)`: un texto escollido recibe o campo engadido despois do que xa ten; unha cela de táboa igual; unha referencia de bloque pregunta que atributo; {{key:Enter}} pide unha altura e un punto para un texto novo.
- Na pantalla un campo ten un fondo gris claro; un trazado e un PDF nunca o teñen. Escribir a man sobre o texto dun campo remata o campo. Un campo que non se pode calcular amosa `####`.
- O campo dun obxecto atopa o seu obxecto pola clave que CadCraft garda nos obxectos (Configuración › CadCraft › Ficheiros compatibles coa fusión); con as claves desactivadas, rexeita.

### UPDATEFIELD

Alias: `UPDATEFIELDS`. `Seleccione os obxectos cuxos campos se actualizan (Enter: todos os campos) ou [Configuración (S)]`. `S` fixa cando os campos se actualizan por si mesmos: escriba as letras de `O` abrir, `S` gardar, `P` trazar, `R` regenerar (as catro para empezar), ou `NONE`.

### DWGPROPS

Alias: `DRAWINGPROPS`. Lista as propiedades do debuxo, logo `Cambiar: [Título/Asunto/Autor/Empresa/Palabras clave/cOmentarios/Personalizado/Quitar/Saír]`. As seis primeiras son as que amosa o panel {{ui:Detalles do debuxo}}; `U` engade o seu propio nome e valor, `R` quita un. Os campos léenos (`%<prop:title>%`, `%<prop:Client>%`) e seguen ao momento. Rexeita un nome personalizado que é un dos integrados ou que contén `%`, `<`, `>`, unha comilla ou unha barra invertida.

## Paramétrico

Vexa [Restrinxir un debuxo](topic:constraints) e [Usar parámetros e ecuacións](topic:parameters). As restricións traballan na pestana {{ui:Modelo}}.

### GEOMCONSTRAINT e os comandos GC

Alias `GCON`: `Escriba o tipo de restrición [Horizontal/Vertical/Perpendicular/Paralela (A)/Tanxente/Coincidente/CONcéntrica/COLineal/Simétrica/Igual/Fixar] <Horizontal>`, logo as preguntas dese comando.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Seleccione un obxecto [2Puntos] <2Puntos>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Seleccione o primeiro obxecto`, `Seleccione o segundo obxecto` (o segundo móvese).
- {{cmd:GCCOINCIDENT}}: `Seleccione o primeiro punto [Obxecto/Autorestrinxir] <Obxecto>`, `Seleccione o segundo punto [Obxecto] <Obxecto>`.
- {{cmd:GCFIX}}: `Seleccione o punto [Obxecto] <Obxecto>`.
- {{cmd:GCSYMMETRIC}}: `Seleccione o primeiro obxecto [2Puntos] <2Puntos>`, `Seleccione o segundo obxecto`, `Seleccione a liña de simetría`.

### DIMCONSTRAINT e os comandos DC

Alias `DCON`: `Seleccione a cota asociativa para converter [Lineal/Horizontal/Vertical/Aliñada/Angular/Radial/Diámetro/Converter] <Aliñada>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Seleccione o primeiro punto de restrición [Obxecto] <Obxecto>`, `Seleccione o segundo punto de restrición`, `Seleccione a posición da liña de cota`, `Texto da cota <d1=40>` (un número, unha expresión, ou `nome=expresión`).
- {{cmd:DCALIGNED}}: como o anterior, con `[Obxecto/Punto e liña/2Liñas]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Seleccione un arco ou círculo`. {{cmd:DCANGULAR}}: `Seleccione a primeira liña ou arco`, `Seleccione a segunda liña`.
- {{cmd:DCCONVERT}}: `Seleccione as cotas para converter`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Seleccione obxectos [Configuración]`. `S` pide as tolerancias de distancia e ángulo.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Seleccione obxectos`; as súas restricións desaparecen.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Seleccione obxectos [Mostrar todo/Ocultar todo]`, logo `[Mostrar/Ocultar]`.
- {{cmd:DCDISPLAY}}: `Escriba unha opción [Mostrar/Ocultar]`.

### PARAMETERS e -PARAMETERS

{{cmd:PARAMETERS}} (alias `PAR`, `PARAM`) abre o panel {{ui:Parámetros}}. `-PARAMETERS`: `Escriba unha opción [Novo/Editar/Renomear/Eliminar/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Descarga unha macro (.swb) que reconstrúe o modelo como un só debuxo restrinxido en SolidWorks. Vexa [Mover debuxos a e desde outros modeladores de pezas](topic:solidworks-sketches).

## Bloques

### ANNOSCALE

Alias: `CANNOSCALE`. Di a escala de anotación do debuxo e cantos obxectos anotativos ten, logo pregunta `Nova escala de anotación`: escriba `1:50`, `1:100`, `2:1`, un número solto (`50` é 1:50) ou o nome dunha das escalas propias do debuxo. Cada texto e cota anotativos redimensiónanse para que se impriman co mesmo tamaño na nova escala, nun só paso de desfacer; os obxectos que non son anotativos quedan como están, e tamén un obxecto que garda unha lista de escalas sen a nova ({{cmd:OBJECTSCALE}}). Vexa [Unidades, papeis e escalas](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Alias: `OBJSCALE`. `Seleccione obxectos anotativos`, logo `Escalas de anotación dos obxectos seleccionados [Engadir/Eliminar/Escala actual/Listar/Saír (X)] <Engadir>`. Un texto ou cota anotativos garda unha lista de escalas de anotación. `Engadir` e `Eliminar` piden unha escala (`1:50`, `2:1`, un número solto, ou o nome dunha das escalas propias do debuxo); `Escala actual` engade a escala de anotación do debuxo; `Listar` imprime as escalas de cada obxecto. Unha vista cuxa escala está na lista dun obxecto amósao co tamaño que imprime a súa altura en papel nesa escala, na pantalla e nos trazados. A última escala non se pode eliminar. Os obxectos que non son anotativos quedan fóra: active primeiro Anotativo en Propiedades. As listas gárdanse en DWG e DXF como datos propios de CadCraft. Vexa [Unidades, papeis e escalas](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Alias: `ANNOALL`. `Mostrar obxectos anotativos en todas as escalas [ON/OFF]`. Activado (como comeza un debuxo): un obxecto anotativo tamén se amosa nunha vista, ou no modelo, cuxa escala non está na súa lista, co tamaño que ten. Desactivado: non se amosa alí, e non se pode escoller no modelo. O interruptor é un paso de desfacer; non se garda no ficheiro.

### SCALELISTEDIT

Alias: `SCALELIST`. `Lista de escalas [Engadir/Editar/Eliminar/Listar/Restablecer]` ata {{key:Enter}}. Engadir: `Nome da escala`, `Unidades do papel`, `Unidades do debuxo`. Editar e Eliminar piden o nome da escala. As escalas propias do debuxo únense ás listas de escalas de vista e de trazado e gárdanse co debuxo. Vexa [Unidades, papeis e escalas](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT e PEDIT

`SPLINE` (`SPL`): `Primeiro punto da spline [Método/Obxecto] (Puntos de axuste)`. Axuste: puntos polos que pasa a curva; `Pechar`, `Desfacer`, logo `Tanxente inicial` e `Tanxente final` (un punto, ou {{key:Enter}}). Método › Vértices de control pide un grao (1 a 5) e debuxa desde un polígono de control. Obxecto converte polilíneas en splines polos seus vértices. `SPLINEDIT` (`SPE`): `[Datos de axuste/Editar vértice/converter a polilínea/Abrir ou Pechar/Inverter/Desfacer/Saír (X)]`; Datos de axuste `[Engadir/Eliminar/Mover/Purgar/Tanxentes/Saír (X)]`; Editar vértice `[Engadir punto de control/Mover/Peso/Saír (X)]`. `PEDIT` (`PE`): `[Pechar/Abrir/Unir/Ancho/Axustar/Spline/Desfacer curva/Xeración de tipo/Inverter/Desfacer/Saír (X)]`, `M` para varios obxectos; as liñas, arcos e splines ofrécense primeiro como polilíneas. Vexa [Splines e polilíneas](topic:splines).

### BLOCK

Alias: `B`, `BMAKE`.

- `Escriba o nome do bloque`. Se xa existe: `O bloque "…" xa existe. ¿Redefinilo? [Sí/Non] <N>`.
- `Seleccione o punto base de inserción`
- `Seleccione obxectos`. Substitúense por unha soa referencia ao novo bloque.

### WBLOCK

Alias: `W`, `-WBLOCK`. Escribe un bloque, algúns obxectos ou o debuxo completo como un novo ficheiro DWG ou DXF. `Orixe do WBLOCK [Bloque/Debuxo completo/Obxectos] <Obxectos>`:

- **Obxectos**: `Seleccione o punto base de inserción` (convértese na orixe do novo debuxo), `Seleccione obxectos`, logo `Formato do ficheiro [DWG/DXF/R12 DXF]` e `Nome do ficheiro para o novo debuxo`, e despois `Que facer cos obxectos [Conservar/Converter en bloque/Eliminar]`. Converter substitúeos por unha referencia a un bloque co nome do ficheiro; Eliminar quítaos.
- **Bloque**: `Bloque que escribir`. Os propios obxectos do bloque, co seu punto base como orixe, incluídos os bloques aniñados.
- **Debuxo completo**: cada obxecto do espazo do modelo. As follas non se escriben; use {{cmd:SAVEAS}} para unha copia que as conserve.

O novo ficheiro contén só as capas, tipos de liña, estilos de texto e de cota, e bloques que usan os seus obxectos, e as unidades do debuxo. A versión dun DWG é a última que usou {{cmd:SAVEAS}}. No navegador o ficheiro descárgase; en Studio abre o diálogo de gardar.

### ATTDEF

Alias: `ATT`, `DDATTDEF`, `-ATTDEF`; ou {{ui:Bloques}} › {{ui:Máis}} › {{ui:Definir atributo}}. Imprime os modos, logo `Escriba unha opción para cambiar (Enter cando remate) [Invisible/Constante/Predeterminado]`, `Escriba o nome da etiqueta do atributo`, `Escriba a indicación do atributo`, `Escriba o valor por defecto do atributo` (`Escriba o valor do atributo` cando é constante), `Seleccione o punto inicial do texto`, `Seleccione a altura do texto`, `Seleccione o ángulo de xiro do texto`. {{cmd:BLOCK}} colle as definicións de atributo para o bloque.

### EATTEDIT e ATTEDIT

`EATTEDIT` (`DDATTE`, ou faga dobre clic nunha referencia con atributos; {{ui:Bloques}} › {{ui:Máis}} › {{ui:Editar atributos}}): `Seleccione unha referencia de bloque con atributos`, logo o diálogo {{ui:Editar atributos}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): a mesma referencia, logo `<indicación> (<ETIQUETA>) <valor>` para cada atributo; {{key:Enter}} mantén un valor. Vexa [Atributos](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Actualizar os atributos das referencias de que bloque [Nome/Seleccionar/Todos] <Seleccionar>`. Os valores consérvanse; os atributos novos reciben o seu valor por defecto, os quitados desaparecen, e as posicións restablécense.

### BATTMAN

{{ui:Bloques}} › {{ui:Máis}} › {{ui:Xestor de atributos}}. O diálogo: bloque, atributos (etiqueta, indicación, valor por defecto, modos, orde), {{ui:Actualizar as referencias (valores mantidos)}}, {{ui:Aplicar}}.

### REFEDIT e REFCLOSE

{{ui:Bloques}} › {{ui:Máis}} › {{ui:Editar no seu lugar}}. `REFEDIT`: `Seleccione a referencia de bloque para editar no seu lugar` (ou a selección). `REFCLOSE`: `¿Gardar os cambios en "…"? [Gardar/Descartar] <Gardar>`; {{ui:Gardar o bloque}} e {{ui:Descartar}} na barra fan o mesmo. Toda a edición é un paso de desfacer. Vexa [Atributos](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT e BCLOSE

`BE`; ou {{ui:Bloques}} › {{ui:Máis}} › {{ui:Editar bloque}}. `Escriba o nome do bloque para editar <o bloque da referencia seleccionada>` abre o editor de bloques. `BCLOSE` pregunta `¿Pechar o editor de bloques en "…"? [Gardar/Descartar] <Gardar>`; {{ui:Gardar bloque}} e {{ui:Descartar cambios}} na banda fan o mesmo. Todo o feito no editor é un paso de desfacer.

### VIEWBASE

Alias: `FLATSHOT`. Unha vista plana 2D dos sólidos na pestana 3D: `Vista [Fronte/Superior/Dereita/Esquerda/Atrás/Inferior/Iso]`, `Liñas ocultas [Mostrar/Ocultar]`, unha escala (`1:20`, `2:1`; {{key:Enter}} escolle a que caiba na folla), logo o centro da vista. Unha referencia de bloque: as arestas visibles en VIEW-VISIBLE, as ocultas en trazo en VIEW-HIDDEN. Vexa [Vistas planas nunha folla](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Alias: `-PUBLISH`; ou {{ui:Todas as follas nun só PDF}} no diálogo {{ui:Trazar a PDF}}. `Follas para trazar [Todas/Algunhas]`: {{key:Enter}} traza todas as follas, `S` pide nomes separados por comas. Un PDF, unha páxina e un marcador por folla. Vexa [Todas as follas nun só PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Alias: `SSM`, `SHEETSETMANAGER`. Leva á sección {{ui:Conxunto de follas}} do panel esquerdo: follas de moitos debuxos, numeradas e tituladas, coas súas cartelas cubertas desde o conxunto, publicadas como un PDF. Vexa [Conxuntos de follas](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): escolla un DWG ou DXF, logo o seu punto de inserción. {{cmd:XREF}} (`XR`, `-XREF`): `Debuxos ligados [?/Anexar/Recargar/Incorporar/Desanexar] (Enter: ?)`; con máis dunha ligazón, escolla unha das súas referencias ou escriba `N` e o seu nome. Vexa [Debuxos ligados](topic:files#linked-drawings-external-references).

### COUNT

Alias: `BCOUNT`; ou {{ui:Bloques}} › {{ui:Máis}} › {{ui:Contar bloques}}. `Seleccione unha referencia de bloque para contar, ou [Todas/Exportar] (Enter: Todas)`: un clic selecciona e conta cada referencia dese bloque neste espazo; {{key:Enter}} ou `A` listaas todas; `E` logo `C` (contadores) ou `A` (atributos) descarga un CSV. Vexa [Contar bloques e exportar un cadro](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Alias: `I`, `DDINSERT`.

- `Escriba o nome do bloque ou [Ficheiro/Biblioteca] <último bloque>` (non importan as maiúsculas). `F` pide un DWG ou DXF, logo o debuxo completo ou un dos seus bloques; un nome xa usado pide {{ui:Manter os existentes}} ou {{ui:Renomear}}. `L` abre o panel da biblioteca.
- `Seleccione o punto de inserción [Escala (S)/Xirar (R)]`. `S` pide `Seleccione o factor de escala`, `R` pide `Seleccione o ángulo de xiro`; ambos se recordan.
- Cando o bloque xa está xunto a obxectos que se repiten noutros sitios sen el, unha liña di cantos lugares se suxiren e a indicación gaña `suXerido`: `X` amósaos; faga clic preto dun para pór o bloque alí, `A` para todos, {{key:Enter}} para volver. Toman a rotación dos seus veciños e os valores por defecto dos atributos. Os debuxos con máis de 20.000 obxectos no espazo aberto non se buscan.
- Logo `Escriba <indicación> (<ETIQUETA>) <por defecto>` para cada atributo que pide o bloque. Vexa [Atributos de bloque](topic:attributes).

### LIBRARY

Alias: `LIB`. Abre o panel da biblioteca: colocar elementos, buscar actualizacións, créditos da biblioteca. Sen preguntas. Vexa [Inserir desde un ficheiro ou a biblioteca](topic:insert-from-file-and-library).

### STEELMEMBER

Alias: `SMEMBER`; ou {{ui:Elemento 3D}} na pestana {{ui:Estándar}} da biblioteca. `Tamaño da sección <W12x26>` (como o lista a pestana), logo `Punto inicial [Columna]` e `Punto final`: un elemento sólido na pestana 3D entre os dous puntos, asentado no chan. `C` pide o punto base da columna e a súa altura. Un paso de desfacer. Vexa [Colocar seccións de aceiro e pezas normalizadas](topic:steel-and-standard-parts).

### PARTSLIST

Alias: `PLIST`. `Esquina superior esquerda da lista de pezas`, logo `Altura do texto <2.5>`: debuxa unha táboa de cada peza normalizada e sección de aceiro colocada desde a biblioteca (números de elemento, cantidade, pezas, norma, tamaño, lonxitude, material, masa). Un paso de desfacer. Vexa [Colocar seccións de aceiro e pezas normalizadas](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Alias: `PU`. Elimina as definicións de bloque que non usa nada. Sen preguntas.

### DELBLOCKS

Ou {{ui:Bloques}} › {{ui:Máis}} › {{ui:Eliminar bloques}}. `Seleccione o bloque para eliminar [Nome/Saír (X)]`: seleccione unha referencia de bloque, ou `N` para a lista de bloques cun filtro (escolla varios), ou `X` / {{key:Enter}} para rematar. Vai cada referencia —no modelo, en cada folla e dentro doutros bloques— e logo a definición, e a liña de comandos di o que se eliminou e o que non se puido. Os bloques sen nome e os debuxos ligados non se ofrecen. A indicación volve para o seguinte bloque; todo o comando é un paso de desfacer.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} pega o que copiou ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) como un só bloque: escolla o punto de inserción e alí vai unha referencia a un bloque novo, seleccionada. O bloque recibe un nome propio (`A$C` e un número); {{cmd:RENAME}} lle dá o seu. Un paso de desfacer quita a referencia e o bloque.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pide o bloque que se substitúe e o bloque que o substitúe (`?` lista os bloques), e logo cambia cada referencia no modelo, en cada folla e dentro doutros bloques. Cada referencia conserva o seu lugar, escala, rotación, capa e os valores dos atributos que ambos bloques teñen; os atributos que só ten o novo bloque empezan co seu valor por defecto, e indica cales valores se descartaron. Cando xa nada usa o bloque antigo, ofrece eliminalo. Rexeita debuxos ligados e unha substitución que poñería un bloque dentro de si mesmo. Un paso de desfacer.

### MINSERT

{{cmd:MINSERT}} coloca un bloque en filas e columnas: nome do bloque, punto de inserción, escala, rotación, número de filas e columnas, e as distancias entre elas. O conxunto completo xírase coa rotación. Cada un é unha referencia propia (10.000 como máximo), así que pode mover ou borrar calquera deles despois.

### BLOCKSPALETTE

Alias: `BLOCKSPAL`; ou {{ui:Bloques}} › {{ui:Máis}} › {{ui:Panel de bloques}}. Mostra o panel {{ui:Bloques}} co cursor no seu filtro. Cada bloque ten unha pequena imaxe; os colocados máis recentemente van primeiro. Os dous botóns xunto ao filtro alternan entre unha lista e unha cuadrícula de imaxes. Faga clic nunha imaxe (ou en {{ui:Inserir}}) para colocar o bloque con {{cmd:INSERT}}, ou arrástreo ao debuxo para colocalo onde o solte.

{{ui:Bibliotecas}}, baixo a lista: {{ui:Engadir un debuxo}} toma un ficheiro DWG ou DXF propio e lista os seus bloques con imaxes, e o debuxo completo como un bloque. Ao colocar un, cópiase a súa definición (e os bloques que aniña, e as súas capas) neste debuxo, como fai a opción `Ficheiro` de {{cmd:INSERT}}; un bloque que xa está aquí coa mesma definición úsase sen preguntar, e un co mesmo nome pero distinto pide {{ui:Manter os existentes}} ou {{ui:Renomear}}. Nun navegador o ficheiro queda ata que se pecha a páxina. En CadCraft Studio {{ui:Engadir un cartafol}} lista os debuxos dun cartafol, cada un aberto ao facer clic, e os ficheiros e cartafoles recórdanse. A pequena x quita unha biblioteca da lista; o ficheiro non se toca. A {{ui:Biblioteca}} compartida é outra cousa: vexa [Inserir desde un ficheiro ou a biblioteca](topic:insert-from-file-and-library).

### BCONVERT

Ou {{ui:Bloques}} › {{ui:Máis}} › {{ui:Converter repeticións en bloques}}. Atopa xeometría que se repite e convirte cada copia nunha referencia a un mesmo bloque.

- `Seleccione os obxectos que se repiten, ou [Bloque]`: os obxectos dunha copia. `B` nomea un bloque existente, para atopar copias soltas dos seus obxectos.
- `Unha copia pode ser: espellada = Non, escalada = Non; capa, cor, tipo de liña e grosor = Coincidir … [Espellada/Escalada/Propiedades]`: `M`, `S` e `P` cambian o que conta como copia; {{key:Enter}} busca. As configuracións recórdanse.
- `Nome do novo bloque <Bloque1>`, logo `Escriba o punto base do bloque` ({{key:Enter}} toma a esquina inferior esquerda da selección).
- Di cantos outros conxuntos de obxectos teñen a mesma xeometría, resalta todo o que sustituiría e pregunta `Sí/Non`.

Unha copia son os mesmos obxectos movidos e xirados en calquera ángulo (e espellados ou escalados por un factor cando iso está activo): cada obxecto debe ter o seu par, dentro dunha millonésima parte do tamaño da selección. Cada referencia recibe a súa propia rotación e escala (unha espellada, unha escala Y negativa), e a capa que compartían os seus obxectos. Os obxectos en capas bloqueadas quedan intactos e cóntanse. Busca no espazo aberto (o modelo ou a folla aberta). Unha busca moi grande para nun límite de traballo e di iso. Un paso de desfacer.

### BSEARCH

Ou {{ui:Bloques}} › {{ui:Máis}} › {{ui:Atopar bloques}}. `Atopar bloques por [Nome/Atributo/Xeometría] <Nome>`:

- `N`: parte dun nome de bloque, ou un patrón con `*` e `?`. Lista cada bloque coas súas referencias aquí e en todo o debuxo.
- `A`: un valor de atributo, ou `TAG=valor`. Lista os bloques cuxas referencias o teñen, cos valores atopados. Os atributos constantes contan.
- `G`: seleccione obxectos, ou unha referencia de bloque, e listanse os bloques cuxa forma se parece polo menos un 85 %, do mellor ao peor. O tamaño, a rotación e o espellado non contan. A medida compara as distancias entre puntos repartidos polos contornos, así que atopa parecidos; use {{cmd:BCONVERT}} para atopar copias exactas.

As referencias atopadas no espazo aberto seleccionanse, listas para o seguinte comando.

### BREPLACE

Ou {{ui:Bloques}} › {{ui:Máis}} › {{ui:Substituír bloques}}. `Substituír [Seleccionados/Todos]`: `S` substitúe as referencias de bloque que seleccione polo bloque que nomee; `A` pide un bloque e o seu substituto e cambia cada referencia, como fai {{cmd:BLOCKREPLACE}} (o mesmo código). Unha referencia conserva o seu lugar, escala, rotación, capa e os valores dos atributos que ambos bloques teñen; os valores para os que o novo bloque non ten sitio descártanse e indícanse. `?` lista os bloques. Un paso de desfacer.

### DATAEXTRACTION

Alias: `EATTEXT`, `DX`; ou {{ui:Bloques}} › {{ui:Máis}} › {{ui:Extracción de datos}}. Lista bloques, os seus atributos e as propiedades dos obxectos como táboa ou ficheiro CSV.

- Traballa sobre a selección, ou pregunta `Seleccione obxectos (Enter: todo o deste espazo)`.
- `Lista: [Bloques/Obxectos/Todos]` cando a selección ten ambos. Os bloques sen nome, as táboas e as listas de materiais nunca se listan.
- Imprime as columnas que pode escoller (nome, tipo, capa, X, Y, rotación, escala, lonxitude, área, cor, tipo de liña, espazo, e unha por cada etiqueta de atributo), logo `Columnas, por nome ou número separados por comas`. {{key:Enter}} toma as marcadas con asterisco: o nome e cada atributo para os bloques; tipo, capa e lonxitude para os obxectos.
- `¿Xuntar as filas idénticas cun contador? [Sí/Non] <Sí>`, logo `Poñer a lista nunha: [Táboa/Csv] <Táboa>`. Unha táboa é unha táboa ordinaria ({{cmd:TABLEDIT}} a edita) e non está en vivo: execute o comando de novo cando cambie o debuxo.
- Rexeita unha columna que non está na lista. Unha táboa admite 1.999 filas de datos; un ficheiro CSV admite todas.

### COUNTTABLE

Conta as referencias de bloque da selección (ou do espazo aberto) e pon os contadores nunha táboa (`Bloque`, `Contador`) ou un ficheiro CSV. Para un contador que segue o debuxo por si mesmo, vexa {{cmd:BOMTABLE}}.

## Follas e trazado

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; ou o botón {{ui:+}} baixo o debuxo. Unha folla nova cun marco, unha cartela e unha vista, en ISO A3 (ou Tabloide para debuxos en polgadas ou pés). Sen preguntas.

### MVIEW

Alias: `MV`. Só nunha folla ({{cmd:VPORTS}} nunha folla fai o mesmo).

- `Seleccione a esquina da vista [Poligonal/Obxecto]`, `Seleccione a esquina oposta`. A vista amosa todo o modelo a unha escala estándar.
- `P` (Poligonal): faga clic nas esquinas do contorno (`Desfacer (U)`, `Pechar (C)`), {{key:Enter}} cando remate. Rexeita menos de tres esquinas.
- `O` (Obxecto): `Seleccione un obxecto pechado para o contorno da vista`: unha polilínea pechada, un círculo ou unha elipse na folla. A vista toma a súa forma (as curvas como pequenos segmentos rectos); o obxecto queda como estaba. Rexeita un obxecto que non está pechado.

### VPCLIP

Recorta unha vista que xa está na folla. `Seleccione a vista para recortar` (ou selecciónea antes), logo `Seleccione o obxecto ao que recortar [Poligonal/Eliminar]`:

- Faga clic nunha polilínea pechada, un círculo ou unha elipse, ou {{key:Enter}} (ou `P`) para facer clic nas esquinas dun polígono.
- `D` (Eliminar, ofrecido cando a vista está recortada) convértea de novo nun rectángulo: a caixa arredor do contorno que tiña.
- O que mostra a vista non se move no papel, e a súa escala queda. O modelo debúxase e tráznase só dentro do contorno, e o bordo segue a el. Un paso de desfacer.
- Unha vista recortada ten un agarre en cada esquina do seu contorno, ademais do seu centro e das catro esquinas da súa caixa (arrastrar unha esquina da caixa estira o contorno con ela). Propiedades amosa Contorno: Rectángulo, ou Recortada co número de esquinas.
- Os ficheiros DWG e DXF 2000 gardan o contorno para CadCraft. Outros programas abren a vista como o rectángulo arredor; DXF R12 só garda o rectángulo.
- Na pestana do modelo avisa de que as vistas están nas follas.

### VPORTS

Alias: `VIEWPORTS`. {{cmd:SPLIT}} é o mesmo desde unha folla tamén, e {{ui:Vista}} › {{ui:Máis}} › {{ui:Dividir lado a lado}}, {{ui:Dividir apilado}}, {{ui:Catro paneis}}, {{ui:Un panel}} executan o mesmo. No modelo: `Escriba o número de paneis [Único/2/3/4] <3>`; `2` pregunta `[Horizontal/Vertical] <Vertical>` (Vertical = lado a lado), `3` pregunta `[Esquerda/Dereita] <Dereita>` (onde vai o panel grande). Cada panel conserva a súa propia vista e espazo; un clic fai activo un panel. Nunha folla é {{cmd:MVIEW}}. Vexa [Dividir a pantalla](topic:split-screen).

### VPVIEW

Sen alias. Só nunha folla.

- `Seleccione a vista` (omítese se xa hai unha seleccionada), logo, no modelo: `Seleccione a primeira esquina da xanela que amosar`, `Seleccione a esquina oposta`.

### UCS

Sen alias. Un sistema de coordenadas propio; non é unha edición. `Seleccione a orixe do UCS [Con nome/Obxecto/Anterior/Mundo/Z/3puntos] <Mundo>`: un punto é unha orixe nova, logo `Seleccione un punto sobre o eixe X (Enter mantén o ángulo)`. `Z`: `Seleccione o ángulo de xiro arredor do eixe Z <90>`. `3`: orixe, un punto sobre o eixe X positivo, un punto no lado Y positivo. `OB`: `Seleccione o obxecto para aliñar o UCS`. `NA`: `[Restablecer/Gardar/Eliminar/?]` e un nome. A vista xírase para que o novo eixe X quede nivelado. Vexa [Xirar a vista e usar as súas propias coordenadas](topic:ucs-and-turned-view).

### PLAN

Sen alias. `Escriba unha opción [UCS actual/Ucs/Mundo] <UCS actual>`: xira a vista do panel activo para que o eixe X do UCS (ou o do mundo) quede nivelado. Non se move nada do debuxo.

### TURNLEFT, TURNRIGHT, TURNWORLD

Sen alias; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Xirar a vista 90° á esquerda}}, {{ui:Xirar a vista 90° á dereita}}, {{ui:Volver ao mundo}}. O mesmo que `UCS Z -90`, `UCS Z 90` e `UCS W`, coa vista seguindo.

### VPLAYER

Sen alias. Nunha folla, ou dentro dunha vista. `Escriba unha opción [?/Conxelar/Descongelar/Restablecer/Vpvisdflt]`: `F`, `T`, `R` piden nomes de capa (separados por comas, con comodíns `*` e `?`), logo as vistas `[Todas/Seleccionar/Actual] <Actual>`; Restablecer devolve cada capa ao seu valor por defecto de «conxelada en vistas novas»; `V` fixa ese valor por defecto (`[Conxelada/Descongelada]`), que usa {{cmd:MVIEW}}. `?` lista as capas conxeladas na vista actual. A columna de vistas do panel Capas fai o mesmo para unha vista. Vexa [Conxelar unha capa nunha vista](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias: `MS`; ou faga dobre clic dentro dunha vista. Só nunha folla. Traballe sobre o modelo a través dunha vista: a seleccionada, a única da folla, ou `Faga clic dentro da vista para traballar nela`. Desprazar e ampliar dentro cambian a vista da vista (unha bloqueada na pantalla conserva a súa e a folla é a que se move); a nova vista gárdase como un paso de desfacer. Vexa [Traballar sobre o modelo a través dunha vista](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias: `PS`; ou faga dobre clic fóra da vista, ou faga clic nunha pestana baixo o debuxo. Volve á folla.

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; ou {{key:Mod+P}}. Abre o diálogo {{ui:Trazar a PDF}}. Vexa [Trazar a PDF](topic:plot-pdf).

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; ou {{ui:Editar táboas…}} no diálogo {{ui:Trazar a PDF}}. Abre {{ui:Táboas de estilo de trazado}}: como imprime cada cor (cor, gris, tinta, grosor de liña), gardado co debuxo. Vexa [Táboas de estilo de trazado](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} move obxectos entre unha folla e o modelo a través dunha vista, escalados e xirados para que se vexan igual desde o outro lado. Nunha folla, seleccione obxectos e vanse ao modelo (escolla a vista cando a folla ten máis dunha). Mentres traballa sobre o modelo a través dunha vista ({{cmd:MSPACE}}), os obxectos seleccionados veñen á folla. Indica cantas veces máis grandes ou máis pequenos se fixeron. As vistas quedan na súa folla. Un paso de desfacer.

### ISODRAFT

{{cmd:ISODRAFT}} activa ou desactiva o debuxo isométrico `ON` ou `OFF`, ou vai directamente ao plano `Left`, `Top` ou `Right`. Mentres está activo: o Orto ({{key:F8}}) mantén as liñas sobre os dous eixes do plano (esquerdo: 90° e 150°; superior: 30° e 150°; dereito: 30° e 90°), o seguimento polar ({{key:F10}}) segue os mesmos eixes, o axuste á cuadrícula ({{key:F9}}) usa a cuadrícula isométrica, e a cuadrícula ({{key:F7}}) dibúxase con liñas a 30°, 90° e 150°. {{cmd:ELLIPSE}} gaña `Isocircle`: dea un centro e un raio (ou `Diameter`) e debuxa a elipse que un círculo amosa no plano actual. O debuxo queda plano: son axudas para debuxar unha vista pictórica, non un modelo 3D. O axuste é para esta sesión e non se garda no ficheiro.

### ISOPLANE

{{cmd:ISOPLANE}} escolle o plano no que traballa o debuxo isométrico: `Left`, `Top` ou `Right`. Enter pasa ao seguinte plano. Mentres o debuxo isométrico está activo, {{key:F5}} fai o mesmo a metade dun comando; mentres está desactivado, {{key:F5}} queda para o navegador.

## Consulta

### CAL

Imprime o valor dun cálculo, tal como se lería en calquera lugar onde se escribe unha lonxitude.

- `Expresión`: escríbaa, por exemplo `12'6"+3/4"` ou `(24'-0")/3`, e prema {{key:Enter}}. CadCraft imprime `= 12'-6 3/4"   (150.75 unidades do debuxo)`. Vexa [Aritmética nun valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias: `DI`; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Medir distancia}}.

- `Seleccione o primeiro punto`, `Seleccione o segundo punto`. Imprime a distancia, o ángulo, o Delta X e o Delta Y.

### AREA

Alias: `AA`; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Área}}. Imprime a área e o perímetro.

- `Seleccione a primeira esquina [Obxecto/Engadir área/Restar área] <Obxecto>`
  - Faga clic ou escriba esquinas; en `Seleccione o seguinte punto (Enter pecha) [Desfacer (U)]` prema {{key:Enter}} para pechar o contorno. `U` retira a última esquina.
  - {{key:Enter}} ou `O`, logo `Seleccione obxecto`: un círculo (imprime a súa circunferencia), unha elipse, unha polilínea (unha aberta pecha cunha liña recta para a área, e imprímese a súa lonxitude) ou unha trama (os buratos quítanse).
  - `A` (Engadir área) e `S` (Restar área) manteñen un total acumulado: a indicación comeza con `(modo ADD)` ou `(modo SUBTRACT)`, cada área se suma ou se resta, e `Área total = …` imprímese despois de cada unha. Nestes modos `O` escolle obxectos ata {{key:Enter}}, e {{key:Enter}} na primeira indicación remata o comando.

### MEASUREGEOM

Alias: `MEA`. `Escriba unha opción [Distancia/Raio/Ángulo/Área] <Distancia>`; despois de cada medición volve preguntar, con `eXit` (Saír) como valor por defecto.

`Rápido` mide ao redor do punteiro conforme o move: a distancia ao obxecto máis próximo á dereita, arriba, á esquerda e abaixo (segundo os eixes do UCS actual), debuxada mentres avanza, e o ángulo onde dous dos veciños son rectos e se encontran. Un clic escribe as catro distancias, a anchura e a altura libres e os ángulos no historial; Enter volve ás opcións. Le o que hai na pantalla.

- `D`: dous puntos, como {{cmd:DIST}}.
- `R`: `Seleccione un arco ou círculo`; imprime o raio e o diámetro.
- `A`: un arco (o seu ángulo incluído), unha liña e logo unha segunda liña (o ángulo entre elas, cara aos seus extremos afastados), ou {{key:Enter}} e tres puntos (vértice, logo os dous extremos).
- `AR`: como {{cmd:AREA}}, unha soa área.

### ID

Sen alias. `Seleccione un punto`; imprime a súa X e a súa Y.

### LIST

Alias: `LI`, `LS`. `Seleccione obxectos`; imprime o tipo, a capa e as medidas principais de cada obxecto.

### MASSPROP

{{cmd:MASSPROP}} dá as propiedades de sección das rexións e dos obxectos pechados que seleccione, tomados en conxunto: área, perímetro, caixa envolvente, centroide, momentos de inercia respecto aos eixes X e Y que pasan pola orixe, o produto de inercia, os radios de xiro, os mesmos momentos respecto ao centroide, e os momentos principais coas direccións dos seus eixes. Os buratos dunha rexión contan como buratos. As cifras están en unidades do debuxo e son exactas para contornos feitos con liñas e arcos; as elipses e as splines miden como pequenos segmentos rectos, e iso dízoo. Despois do informe pregunta se o escribe nun ficheiro de texto. Os obxectos que non están pechados quedan fóra, e di cantos son.

## Vista, ficheiro e outros

### ZOOM

Alias: `Z`.

- `Seleccione a esquina da xanela, escriba un factor de escala (nX) [Extensións/Todo/Xanela/Anterior/Escala/Centro]`. Faga clic en dúas esquinas para unha xanela. `E`, `A` ou Enter: todo o debuxo.
- `P` (Anterior, ou {{ui:Anterior}} na barra de ferramentas) volve á vista anterior, ata 10 vistas por pestana; unha serie de pasos da roda ou un desprazamento conta como unha vista.
- Un número como `2`, `2x` ou `0.5x` (ou `S` e logo o número) acerca ou aleja por ese factor arredor do centro da pantalla.
- `C` pide `Seleccione o punto central` e `Escriba a altura ou o aumento (nX)`.

### PDFATTACH, PDFIMPORT e os comandos PDF

Alias: `PDFATT` para {{cmd:PDFATTACH}}, `PDFIM` para {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} pon unha páxina PDF baixo o debuxo (ficheiro, páxina, punto de inserción, escala, rotación); {{cmd:PDFIMPORT}} converte as liñas, curvas, recheos e texto dunha páxina en obxectos do debuxo, en capas con nome do PDF, ao tamaño real, a unha escala escrita, ou escalados desde dous puntos e unha distancia real. {{cmd:PDFCLIP}} recorta unha subcapa, {{cmd:PDFADJUST}} fixa o esvaecido, o contraste, o monocromo ou a desactivación, {{cmd:PDFLAYERS}} activa ou desactiva as capas do propio PDF, e {{cmd:PDF}} dá de novo a CadCraft os ficheiros que usan as subcapas dun debuxo. Vexa [Subcapas PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Autocompletado do debuxo: sen ningún comando en marcha, unha sombra gris amosa o que os propios patróns do debuxo indican que vén despois. {{cmd:AUTOCOMPLETE}} o pon en `On` ou `Off` (tamén en Configuración › CadCraft) ou `Show` amosa o que suxeriría agora. **Tab** debuxa a sombra como un paso de desfacer, **Esc** a descarta ata que o debuxo cambie. Atopa tres cousas nos obxectos máis novos: a seguinte copia dunha cousa debuxada dúas veces ou máis a un paso igual (pilares, columnas, a contrahuella e a fiestra dunha escaleira), os seguintes pasos dunha escaleira en polilínea, e o lado que falta dunha habitación ou dunha cadea de muros. No medio de {{cmd:LINE}} ou {{cmd:PLINE}} a sombra é o **seguinte punto**: o seguinte paso dunha escaleira (contrahuella, fiestra, contrahuella…), a cuarta esquina dun rectángulo, o punto que o pecha, ou un paso igual máis. Achegue o cursor e prema **Tab**, como se fixese clic alí; siga ou prema Enter. Calculado neste computador por regras, sen modelo.

### AUTOSHEET

Alias: `ASH`. Follas que se dispoñen por si mesmas. {{cmd:AUTOSHEET}} toma as pezas do debuxo (as súas vistas con nome, ou as pezas separadas do modelo, ou o modelo completo), escolle un tamaño de papel (ou o que dea), dá a cada peza unha escala normalizada (unha escala para todas, ou a maior que cada unha admita) e dispón as vistas en filas en follas novas, cunha cartela e unha lenda (nome e escala) debaixo de cada unha. O que non cabe nunha folla recibe unha folla propia. Un paso de desfacer. Calculado neste computador por regras, sen modelo.

### PHOTOSKETCH

Alias: `PSK`. Foto a debuxo. Escolla unha foto (JPEG, PNG ou TIFF) dun debuxo a man sobre un papel. {{cmd:PHOTOSKETCH}} atopa as catro esquinas da folla, endereita a perspectiva, toma o tamaño de papel que indique (`Paper`, ou o estándar máis próximo) e a `Scale` do debuxo (1 : n), e logo traza as liñas de bolígrafo en liñas, arcos e círculos, cunha capa para cada cor de bolígrafo (negro, vermello, azul, verde). Se non atopa o bordo do papel, toma a foto completa como folla e di iso. Omítense as letras. Un paso de desfacer. Feito neste computador con procesamento clásico de imaxes, sen modelo, sen enviar nada a ningún lugar. Vexa tamén os comandos de debuxos escaneados.

### AUTODIM

Alias: `ADIM`. Cotar automaticamente por regras. {{cmd:AUTODIM}} cota os obxectos seleccionados (ou todo o debuxo) a partir das súas bordas de nivel e plomo: unha cadea de cotas ao longo dos lados que escolla (`Sides`), unha cota total por fóra dela, a anchura de cada vano (un espazo entre liñas de muro alineadas), un diámetro para cada tamaño de burato, e con `Grid` o espazamento entre liñas de cuadrícula. Unha cota que xa está non se fai de novo. Un paso de desfacer. Calculado neste computador por regras, sen modelo.

### GRIDMOVE

Alias: `GM`. Mover unha liña de cuadrícula leva consigo o conxunto. {{cmd:GRIDMOVE}} move unha liña de cuadrícula (unha liña nunha capa cuxo nome di grid ou axis) e o que depende dela: os muros cun extremo sobre a liña estíranse para seguila, os muros ao longo dela móvense enteiros, as columnas (referencias de bloque e círculos sobre a liña), a súa burbulla e etiqueta móvense, e as cotas cuxos puntos están sobre ela miden o novo espazamento. Dea dous puntos (só conta a parte que atravesa a liña) ou `Distance`. Un paso de desfacer devolve todo. Feito por regras neste computador.

### DETAILS

Alias: `DET`. Detalles que aparecen cando os precisa. {{cmd:DETAILS}} conserva os detalles propios da súa empresa: `Add` pon na lista un bloque deste debuxo, `List` e `Remove` xestionan a lista, e `Find` ordena os detalles para o que está seleccionado (ou para o que debuxou por último) polas palabras das súas capas, nomes de bloque, patróns de trama e notas, comparadas co nome e as notas de cada detalle, de modo que un remate de xanela atope o seu peche de chapa. Escolla un número e un punto para colocalo. Con `Hint` activado (tamén en Configuración › CadCraft), seleccionar algo que coincide cun detalle pon unha liña na barra de estado. A lista consérvase neste navegador, neste computador, e esa lista é a que se busca. `Share` ponla tamén na súa carpeta Documentos (`.cadcraft/firm-details.json`, con o debuxo de cada bloque): `Pull` engade o que ten o seu equipo e vostede non ten, `Push` engade o que vostede ten e o equipo non ten, `Both` fai as dúas cousas, e nunca se quita nada de ningún lado. Abra antes a carpeta Documentos ({{cmd:DOCUMENTS}}); cando esa carpeta é unha carpeta de Team Cloud Plan, o equipo completo comparte unha lista. Un elemento de detalle no panel Biblioteca ten un botón **Engadir aos detalles da miña empresa** que o pon na mesma lista. Calculado neste computador por palabras, sen modelo.

### SKETCHFIX

Alias: `SKF`. Os debuxos a bolígrafo fanse xeometría precisa. Prema e arrastre un trazo a man alzada de cada vez (bolígrafo, rato ou dedo), logo Enter. Cada trazo lese como unha liña, un círculo, un arco, un rectángulo ou unha polilínea: as liñas case horizontais e a prumo fanse exactamente horizontais e a prumo, un trazo pechado e redondo convértese nun círculo, un trazo pechado con catro esquinas rectas nun rectángulo, e os extremos dos trazos xúntanse e colócanse sobre os extremos que xa hai no debuxo. Un paso de desfacer. Calculado neste computador por regras, sen modelo.

### SCANATTACH e os comandos de debuxos escaneados

Alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} non ten. Traballan sobre unha imaxe, cun paso de desfacer cada un. {{cmd:SCANATTACH}} inserta un PNG, JPEG, TIFF (unha páxina ou todas) ou unha páxina PDF que é unha imaxe. {{cmd:SCANSCALE}} escala a folla desde dous puntos escollidos e a distancia real. {{cmd:SCANALIGN}} móvea e xíraa sobre dous puntos (`Scale the sheet to fit` Sí/Non). {{cmd:SCANDESKEW}} amosa o ángulo das liñas longas da folla e xíraa cando vostede `Accept` ou dá un `Value`. {{cmd:SCANCLEAN}} a pasa a branco e negro (`Threshold` Auto/Adaptive/Level, `Specks`) e `Run`. {{cmd:SCANCROP}} conserva unha xanela. {{cmd:SCANERASE}} borra un `Rectangle`, `Polygon` ou `Lasso`. {{cmd:SCANTRACE}} traza liñas e arcos nunha capa nova (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) e informa do que atopou e do que deixou como mapa de bits. {{cmd:SCANINFO}} lista o ficheiro orixinal e os pasos. {{cmd:RASTERSNAP}} activa ou desactiva o axuste ás liñas das follas escaneadas. Vexa o tema Debuxos escaneados e o trazado.

### REGEN e REGENALL

Alias: `RE` para {{cmd:REGEN}}, `REA` para {{cmd:REGENALL}}. Reconstrúe na pantalla o que se debuxa a partir do debuxo: {{cmd:REGEN}} a pestana que mira (nunha folla, tamén o modelo que amosan as súas vistas), {{cmd:REGENALL}} todas as pestanas, todos os paneis de pantalla dividida e todos os debuxos abertos. Úseos cando a imaxe parece vella despois dun cambio por script ou moi grande, ou cando un asistente editou o debuxo; o propio debuxo non se toca, así que non hai nada que desfacer.

### NAMEDVIEW

Alias: `NV`, `VIEWS`. `Escriba unha opción [?/Restablecer/Gardar/Ventá/Eliminar] <Restablecer>`, logo o nome da vista. `S` garda a vista da pantalla, `W` unha xanela que escolla, `R` mostra unha vista gardada, `D` elimina unha, `?` lista as vistas desta pestana. Gardar cun nome existente substitúeo; cada cambio é un paso de desfacer. As vistas pertencen á pestana onde se gardaron. Os ficheiros DWG e DXF conservan as vistas (a táboa VIEW); as vistas dunha folla volven na primeira folla, xa que o ficheiro non indica cal é.

### UNDO e REDO

Alias: `U` para {{cmd:UNDO}}; {{cmd:REDO}} non ten. Tamén {{key:Mod+Z}} e {{key:Mod+Y}}.

### LAYER

Alias: `LA`. Salta ao panel {{ui:Capas}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Escriba o tipo de liña para os obxectos novos` — `ByLayer` (Por capa), `ByBlock` (Por bloque) ou un nome (`?` lista: Continuous, os propios do debuxo, e DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE coas súas medidas `2` (metade) e `X2` (dobre)). {{cmd:LWEIGHT}} (`LW`): o grosor de liña para os obxectos novos en mm, ou `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): a escala de tipo de liña do debuxo (desfacible). {{cmd:LWDISPLAY}} (`LWT`): `Mostrar grosores de liña [ON/OFF]` — o mesmo que o botón {{ui:LWT}} da barra de estado. Vexa [Grosores de liña e tipos de liña](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Escriba o tipo de obxecto para renomear [Capa (LA)/Bloque]`, `Escriba o nome antigo`, logo o novo nome; os obxectos ou referencias seguen. {{cmd:LAYMRG}}: `Seleccione un obxecto na capa para unir ou [Nome]` ata {{key:Enter}}, logo `Seleccione un obxecto na capa destino ou [Nome]` e `Y`. {{cmd:LAYDEL}}: `Seleccione un obxecto na capa para eliminar ou [Nome]`, logo `Y`: a capa e todos os obxectos que hai nela desaparecen (non a capa 0, DEFPOINTS nin a capa actual). Un paso de desfacer cada un. Vexa [Organizar un debuxo con capas](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Capas escollendo obxectos; tamén no menú {{ui:Ferramentas}} do panel {{ui:Capas}}. {{cmd:LAYISO}}: `Seleccione obxectos na capa ou capas que se illarán`, logo {{key:Enter}}: todas as demais capas se apagan. {{cmd:LAYUNISO}} as volve acender. {{cmd:LAYOFF}} e {{cmd:LAYFRZ}}: `Seleccione un obxecto na capa que se apagará` (ou conxelará), unha e outra vez; `U` retira o último, {{key:Enter}} remata. {{cmd:LAYMCUR}}: `Seleccione o obxecto cuxa capa será a actual`. {{cmd:LAYON}} acende todas as capas, {{cmd:LAYTHW}} descongela todas. Cada comando é un paso de desfacer. Vexa [Organizar un debuxo con capas](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} inicia un debuxo baleiro e {{cmd:OPEN}} abre un DWG ou DXF, cada un nunha pestana propia sobre o debuxo (un debuxo novo sen tocar sérvese no lugar dunha pestana nova). Pechar unha pestana con cambios sen gardar pregunta antes. Vexa [Dividir a pantalla](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, tamén {{key:Mod+S}}) descarga unha copia no formato do debuxo: DWG se se abriu desde un DWG, DXF se se abriu desde un DXF. Un debuxo novo usa o formato escollido por última vez en Gardar como neste navegador, e se non, DWG.

{{cmd:SAVEAS}} (tamén {{key:Mod+Shift+S}}) abre o diálogo {{ui:Gardar unha copia como}}: escolla {{ui:DWG}} (e a súa {{ui:Versión}}), {{ui:DXF R12}} ou {{ui:DXF 2000}}, logo {{ui:Gardar}}. A elección mantense para este debuxo e para os debuxos novos neste navegador.

{{cmd:DXFOUT}} descarga sempre unha copia DXF R12, sen cambiar o formato que usa {{cmd:SAVE}}.

Vexa [Ficheiros: que se abre, que se garda](topic:files#saving).

### TOUR

Alias: `TUTORIAL`. Inicia de novo o percorrido de seis pasos do primeiro debuxo. Vexa [Primeiros pasos](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias: `TBDOCK`. `Posición da barra de ferramentas [Arriba/Abaixo/Esquerda/Dereita]`. Vexa [Configuración](topic:settings#toolbar-position).

### COMMANDLINE

Alias: `CMDLINE`. `Liña de comandos [Acoplada abaixo/Flotante/Unha liña/Liñas de historial amosadas/Historial de comandos (F2)]`: acopla ou flota a liña de comandos, fai unha soa liña, pregunta cantas liñas de historial amosar (0 a 12), ou abre o historial. Vexa [Configuración](topic:settings#command-line).

### TOPAREA

`Área superior [Estándar/Compacta]`: as barras sobre o debuxo como estaban, ou compactas. Vexa [Configuración](topic:settings#top-area).

### POLARANG

`Escriba o paso do ángulo polar en graos <90>`: o paso ao que se alinean as liñas de seguimento {{ui:Polar}} (máis de 0, ata 180). Mantense neste navegador.

### UNITS

Alias: `UN`. Como se escriben e se escriben as lonxitudes.

- `Escriba o formato de lonxitude [Científico/Decimal/Enxeñaría/Arquitectónico/Fraccionario] <actual>`
- Arquitectónico e Fraccionario: `Escriba o denominador da fracción máis pequena que amosar (1, 2, 4, 8, 16, 32, 64, 128 ou 256)`. Os outros: `Escriba o número de cifras decimais (0 a 8)`.

As cotas novas seguen isto. Un paso de desfacer. Igual que {{ui:Formato de lonxitude}} e {{ui:Precisión}} en {{ui:Configuración actual}}; vexa [Pés e polgadas](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias: `GDS`. Ver unha disposición de circuíto integrado (un ficheiro GDSII stream): proba de laboratorio, só para ver e medir.

- Un selector de ficheiros toma un ficheiro `.gds`; con varias celas superiores, `Escriba a cela superior para debuxar`.
- Cada capa e tipo de dato convértese nunha capa do debuxo (`GDS 1`, `GDS 2/5`), as referencias e as matrices colócanse planas, na unidade de usuario do ficheiro (normalmente micrómetros). Un paso de desfacer. Nada se simula nin se comproba, e o ficheiro non se escribe de novo.

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`. Un diagrama a partir de texto.

- Un cadro toma o texto (ou unha liña con `;` entre instrucións na liña de comandos): un diagrama de fluxo Mermaid, un diagrama de compoñentes PlantUML, D2 ou unha lista de-a.
- `Seleccione a esquina superior esquerda do diagrama`, logo `Seleccione a altura do texto`.

Os bloques e conectores son obxectos normais na capa `Diagram`, seleccionados cando remata. Un paso de desfacer. Vexa [Debuxar un diagrama a partir de texto](topic:text-to-diagram).

### OLELIST

Alias: `OLES`. Os obxectos OLE que leva un DWG e que CadCraft non pode colocar por si mesmo.

- Lista cada un: número, tipo, tamaño, e se gardou unha imaxe.
- `Escriba unha opción [Colocar/Saír (X)] <Saír (X)>`: Colocar pide o número, a esquina inferior esquerda e a largura, e debuxa un marco coa imaxe. Un paso de desfacer; o obxecto conservado non cambia. Vexa [Imaxes](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias: `SHX`. Os seus propios tipos de letra SHX.

- `Escriba unha opción de tipo SHX [Cartafol/Ficheiros/Listar/Quitar/Inverter/Limpar] <Listar>`

{{ui:Cartafol}} lee cada `.shx` dunha carpeta (CadCraft Studio; de novo en cada inicio), {{ui:Ficheiros}} toma ficheiros escollidos (o navegador), {{ui:Inverter}} dispón as letras dun tipo de letra de última a primeira. Os estilos de texto que nomean un tipo cargado debuxan con el. Vexa [Debuxar texto cos seus propios tipos SHX](topic:shx-fonts).

### LIMITS

Como de grande se pretende que sexa o debuxo.

- `Seleccione a esquina inferior esquerda ou [ON/OFF] <actual>`: un punto, `ON` ou `OFF`.
- `Seleccione a esquina superior dereita <actual>`.

A cuadrícula enche os límites, {{cmd:ZOOM}} Todo os amosa, e con eles en ON un punto fóra recházase (`**Fóra dos límites`). Un paso de desfacer; gárdase en DWG e DXF. Vexa [Fixar os límites do debuxo](topic:drawing-limits).

### AUNITS

Alias: `ANGUNITS`. Como se amosan e escriben os ángulos.

- `Escriba o formato de ángulo [Graos decimais/Graos-minutos-segundos/Rumbos topográficos] <actual>`
- `Escriba o número de cifras decimais (0 a 8)`, ou para os outros dous `Escriba a precisión` (0 graos, 2 minutos, 4 segundos, 5 a 8 decimais de segundo).

Un paso de desfacer; gárdase en DWG e DXF. Igual que {{ui:Formato do ángulo}} en {{ui:Configuración actual}}. Vexa [Escribir e amosar rumbos e ángulos](topic:bearings-and-angles).

### APPLOAD

Alias: `AP`; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Cargar aplicación…}}. O diálogo {{ui:Cargar aplicacións}}: carga rutinas `.lsp` e ficheiros de diálogo `.dcl`, descárgaos, cárgaos de novo desde o historial, e o Startup Suite. Os comandos `(defun c:NAME …)` dunha rutina funcionan logo como calquera outro. Vexa [Cargar aplicacións](topic:load-applications) e [Executar rutinas LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Editar alias…}}) abre o seu ficheiro de alias (liñas `ALIAS, *COMMAND`); {{ui:Gardar}} o aplica. {{cmd:REINIT}} o aplica de novo. Vexa [Editar alias de comandos](topic:command-aliases).

### LISPEDIT

Alias: `VLIDE`; ou {{ui:Vista}} › {{ui:Máis}} › {{ui:Editor LISP}}. Abre o editor LISP, unha xanela que queda aberta ao lado do debuxo.

- O texto: números de liña, o compañeiro do paréntese onde está o cursor marcado (en vermello cando non ten), {{key:Enter}} sangra a liña nova baixo o paréntese aberto, {{key:Tab}} escribe dous espazos, {{key:Esc}} sae do texto.
- {{ui:Cargar no debuxo}} ({{key:Ctrl+Shift+Enter}}): lee todas as formas, como fai {{cmd:APPLOAD}} co ficheiro, e crea os seus comandos `c:`. O ficheiro aparece na lista de {{cmd:APPLOAD}}.
- {{ui:Executar selección}} ({{key:Ctrl+Enter}}): avalía as formas seleccionadas, ou a forma onde está o cursor.
- {{ui:Parar}}: remata unha rutina en curso.
- {{ui:Consola}}: o que imprimiu a rutina, e cada erro coa súa liña; faga clic nun erro para ir alí. O texto execútase unha forma de alto nivel por vez, así que a liña é a da forma, ou, dentro dela, a liña que chama á función que nomea o erro.
- {{ui:Novo}}, {{ui:Abrir}}, {{ui:Gardar}} ({{key:Ctrl+S}}): un ficheiro `.lsp`. O texto tamén se garda neste navegador, así que pechar a xanela non perde nada.
- Ao lado do texto: as funcións que define a rutina, as que chama e que este LISP aínda non ten, as que chama e que non define nin son integradas, e as listas completas do que está integrado e do que non.

Un texto con un paréntese que nunca se pecha, ou unha cadea que nunca remata, non se executa: dise a liña. Non hai depurador paso a paso, puntos de parada nin ventá de vixilancia. Vexa [Executar rutinas LISP](topic:run-lisp).

### HELP

Alias: `?`. Imprime todos os comandos, os seus alias e unha descrición dunha liña no historial da liña de comandos. Non abre esta axuda: prema {{key:F1}} ou faga clic en {{ui:Axuda}} para iso.

## Indicación Seleccione obxectos

En calquera indicación `Seleccione obxectos`: faga clic en obxectos, debuxe xanelas (de esquerda a dereita) e cruzamentos (de dereita a esquerda) con dous clics, ou prema e arrastre un lazo ({{key:Space}} mentres arrastra: xanela, cruzamento, valado), {{key:Shift}}+clic para quitar, e prema {{key:Enter}} para rematar. Tamén pode escribir `ALL` (todo), `L` (o último obxecto), `P` (Anterior: o que usou o último comando), `F` (Valado: obxectos que cruza unha liña de puntos; `U` retira un punto), `W` (Xanela), `C` (Cruzamento), `R` (modo Quitar: as escollas sacan obxectos; a indicación di `Quitar obxectos`) e `A` (Engadir de novo). `?` lístaos. Non se amosan na indicación. {{key:Tab}} sobre obxectos superpostos resalta o seguinte; faga clic para escollelo. Vexa [Seleccionar obxectos](topic:select-objects).

### ACCESS

Alias: `AX`. Debuxar sen vista. {{cmd:ACCESS}} activa ou desactiva o acceso (`On`, `Off`) e cambia os sons de axuste (`Sound`) e os comandos de voz (`Voice`); primeiro di o estado. Con Acceso activado, cada comando e resultado léese polo lector de pantalla e a área de debuxo ten un cursor de teclado. O tema de axuda «Debuxar sen vista» ten as teclas.

### DESCRIBE

Alias: `DESC`. Dicir o que contén o debuxo: cantos obxectos, de que tipo, de que tamaño, cantas capas, o que está seleccionado. Só le; non cambia nada.

### WHEREAMI

Alias: `WHERE`. Dicir onde está o cursor, en unidades do debuxo.

### NEARBY

Dicir o que está preto do cursor, o máis próximo primeiro, cada un coa súa distancia e o lado no que está.

### SAYSEL

Dicir o que está seleccionado, unha frase por obxecto (lonxitude, extremos e ángulo dunha liña; raio e centro dun círculo; texto tal como está escrito).

### VOICE

Activar ou desactivar os comandos falados. Recoñécense neste computador; onde o navegador non o pode facer, a voz queda desactivada salvo que escolla o servizo en liña do navegador en Configuración.

### TOUCHCROSSHAIR

Alias: `TCX`. A cruz desprazada para debuxar cun dedo, para que a punta do dedo non tape o punto que escolle. Mentres está activa, un dedo sobre o debuxo non escolle: move unha cruz que queda por riba do dedo e a un lado. Os axustes a obxectos e o seguimento seguen á cruz. Levantar o dedo non escolle nada e deixa a cruz onde estaba. Para escoller, prema o botón {{ui:Clic}} na esquina do debuxo, ou toque en calquera lugar do debuxo cun segundo dedo. Manteña {{ui:Clic}} mentres move o outro dedo para arrastrar (unha xanela de selección, un lazo, un agarre). Un dedo mantido quieto, ou o botón {{ui:Enter}}, é Enter. Dous dedos desprazan e amplían como antes. Preto do bordo inferior e do bordo do lado afastado a cruz achega ao dedo, para que se poida chegar a calquera parte do debuxo. Unha caneta e un rato sempre escollen directamente.

{{cmd:TOUCHCROSSHAIR}} di o estado e pregunta `ON`, `OFF`, `Auto` (activado só onde un dedo é o único punteiro, así que está desactivado nun computador con rato), `Distance` (a que distancia está a cruz do dedo, de 24 a 240 píxeles) ou `Side` (`Left`: arriba e á esquerda, para a man dereita; `Right` para a man esquerda; os botóns pásanse á outra esquina). As mesmas opcións están en Configuración › CadCraft, e nun dispositivo con pantalla táctil a barra de estado ten un interruptor {{ui:Cruz desprazada}}. As opcións gárdanse neste navegador.

### WHOHAS

Di quen ten un debuxo aberto. En CadCraft Studio nun computador, ao abrir un DWG ou DXF escríbese xunto a el un pequeno ficheiro de bloqueo (`Plan.dwg.cclock`: quen, desde cando, que versión), que se actualiza cada minuto mentres o debuxo está aberto, e elimínase ao pechar o debuxo. Abrir un debuxo que outra persoa ten aberto di quen e desde cando, e ofrece {{ui:Abrir só para ler}} (Gardar entón pide un nome novo), {{ui:Abrir igualmente}} (á outra persoa dígaselle na súa seguinte actualización) ou {{ui:Cancelar}}. Gardar sobre un ficheiro que outra persoa ten aberto pregunta antes. Un bloqueo que non se actualizou durante cinco minutos dise que está caducado: a outra copia pechouse sen gardar, ou o computador está en suspensión.

{{cmd:WHOHAS}} pregunta `Actual` (o debuxo aberto), `Ficheiro` (escoller un), `Cartafol` (escoller unha carpeta: lístanse todos os debuxos dentro que están abertos nalgún lugar), `Ruta` (escribir unha ruta completa) ou `Nome` (o nome que ven os demais; o nome da súa conta cando ten a sesión iniciada). Studio só pode chegar a cartafoles que vostede escolleu: para un debuxo aberto desde un cartafol que nunca se escolleu di unha vez que non pode anotar o debuxo como aberto; `Cartafol` escolle o cartafol, e desde entón os bloqueos funcionan alí. O bloqueo é unha nota para as persoas, non unha barreira: outro programa aínda pode escribir o ficheiro. Nun navegador non hai carpetas nas que mirar, e o comando di iso.

### OVERKILL

Elimina obxectos duplicados e arranxa liñas e arcos superpostos, para debuxos que chegan cheos de liñas dobradas. `Seleccione obxectos para limpar`, {{key:Enter}}, logo {{key:Enter}} de novo para limpar coas configuracións amosadas, ou cambie unha antes:

- `Tolerance`: canto deben estar de preto dúas coordenadas para contar como iguais (0.000001 ao comezo; 0 significa exactamente igual).
- `Ignore`: propiedades que poden diferir entre dous obxectos por outro lado iguais. Escriba un nome para cambialo: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, ou `None` / `All`. {{key:Enter}} cando remate.
- `Overlap`: activado ou desactivado. Activado, as liñas sobre unha mesma recta que se superpoñen convértense nunha liña (unha liña dentro doutra bórrase sen máis), e os arcos dun mesmo círculo que se superpoñen convértense nun arco; os arcos que dan unha volta completa convértense nun círculo, e un arco sobre un círculo bórrase.
- `Ends`: activado ou desactivado. Activado, as liñas sobre unha mesma recta e os arcos dun mesmo círculo que só se tocan extremo con extremo convértense nunha soa peza.

Cada tipo de obxecto se revisa para atopar duplicados: dous obxectos son duplicados cando a súa xeometría é a mesma dentro da tolerancia e a súa capa, cor, tipo de liña, escala de tipo de liña, grosor de liña, espesor, transparencia e altura coinciden (menos as que ignore). As liñas e as polilíneas abertas tamén coinciden cando se debuxan ao revés. O primeiro obxecto na orde de debuxo queda e conserva as súas propias propiedades. O comando informa de cantos obxectos revisou e borrou: duplicados, anacos superpostos unidos, anacos unidos extremo con extremo. Un {{cmd:UNDO}} devolve todo. As configuracións duran ata que pecha a xanela do debuxo.

Deixa tranquilos: os obxectos en capas bloqueadas e os obxectos ocultos. Non une liñas con altura (Z) (os duplicados exactos seguen eliminándose), e non toca os segmentos dentro dunha polilínea (non se adelgazan), unha liña sobre un segmento dunha polilínea, nin unha polilínea pechada debuxada ao revés.

### DRAWORDER

Cambia que obxectos se debuxan por diante. `Seleccione obxectos para reordenar`, {{key:Enter}}, logo `Sobre os obxectos`, `Debaixo dos obxectos`, `Fronte` ou `Fondo` ({{key:Enter}} = `Fondo`). `Sobre os obxectos` e `Debaixo dos obxectos` piden os obxectos de referencia: a selección vai xusto por diante do máis adiantado deles, ou xusto por detrás do máis atrasado. Os obxectos seleccionados conservan a súa orde entre eles. Un paso de desfacer. A orde gárdase co debuxo en DWG e DXF, onde é a orde na que se escriben os obxectos.

Na pantalla CadCraft debuxa primeiro as áreas enchidas (tramas sólidas, polilíneas anchas, máscaras), logo as liñas, e despois o texto, así que o texto sempre se lee sobre un recheo; a orde de debuxo amósase entre os obxectos enchidos e entre as imaxes. Os outros programas que abran o ficheiro debuxan cada obxecto na orde gardada.

### TEXTTOFRONT

Pon todo o texto, as cotas e as referencias por diante de todo o demais no espazo aberto: `Texto`, `Cotas`, `Referencias` ou `Todo` ({{key:Enter}} = `Todo`). Un paso de desfacer. Avisa cando non hai ningún, ou cando xa están na parte de diante.

### HATCHTOBACK

Envía cada trama do espazo aberto detrás de todo o demais, para que os recheos deixen de tapar as liñas e o texto no ficheiro gardado. Sen preguntas. Un paso de desfacer.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Mostra só os obxectos seleccionados: todo o demais do espazo aberto desaparece da vista ata {{cmd:UNISOLATEOBJECTS}}. Ao contrario que {{cmd:LAYISO}}, traballa sobre os obxectos que escolla, sexan cales sexan as súas capas, e non cambia ningunha capa. Os obxectos ocultos non se debuxan, non se escollen, non se axustan, non se amplían nin se trazan, e os comandos que aceptan `ALL` pásanos por alto. O que debuxe mentres os obxectos están illados amósase como de costume.

Isto é só para a sesión: non se garda nada co debuxo, non é un paso de desfacer, e ao abrir de novo o debuxo vese todo. Mentres hai obxectos ocultos, a barra de estado amosa un botón co seu número; faga clic nel para volver mostralos.

### HIDEOBJECTS

Oculta os obxectos seleccionados ata {{cmd:UNISOLATEOBJECTS}}. As mesmas regras que {{cmd:ISOLATEOBJECTS}}: só para a sesión, non se garda, non é un paso de desfacer.

### UNISOLATEOBJECTS

Alias: `UNISOLATE`, `UNHIDE`. Volve mostrar todos os obxectos ocultos por {{cmd:ISOLATEOBJECTS}} ou {{cmd:HIDEOBJECTS}}, e di cantos volveron.

### LAYLOCKFADE

Fixa como se ven os obxectos das capas bloqueadas e se un clic lles chega. Di o estado actual, e logo admite:

- un número de 0 a 90: a cantidade de esvaecido en por cento (50 ao comezo). 0 desactiva o esvaecido.
- `ON` ou `OFF`: esvaecido activado ou desactivado, mantendo a cantidade.
- `Pick`, logo `Yes` ou `No`: poden os clics seleccionar obxectos en capas bloqueadas cando non hai ningún comando en marcha? `No` (o valor por defecto): non se poden escoller de ningún modo. `Yes`: un clic ou unha xanela seleccionan eses obxectos para que {{ui:Propiedades}} os poida amosar; igualmente non se poden cambiar, e o `Seleccione obxectos` propio dun comando nunca os colle.

Os axustes a obxectos atopan obxectos en capas bloqueadas en calquera caso. Os trazados nunca se esvaecen. Os dous axustes son seus, non do debuxo, e tamén están en {{ui:Configuración}} baixo {{ui:Capas bloqueadas}}.

### BURST

Desfai as referencias de bloque e conserva o que din os seus atributos. `Seleccione as referencias de bloque para desfacer`, {{key:Enter}}: cada referencia substitúese polos obxectos do bloque, e o valor de cada atributo visible convértese en texto simple na propia capa dese atributo (un atributo na capa 0 cae na capa da referencia, como os outros obxectos do bloque na capa 0). Os atributos invisibles eliminanse. Un bloque dentro do bloque segue sendo unha referencia de bloque. Un paso de desfacer; informa das referencias desfeitas e dos valores de atributo convertidos en texto.

Rexeita un debuxo ligado polo nome (primeiro enlácese, ou copie desde el con {{cmd:NCOPY}}), e deixa en paz os outros obxectos seleccionados. Para as referencias de bloque {{cmd:EXPLODE}} dá os mesmos obxectos; {{cmd:BURST}} toma só referencias de bloque e conta o texto dos atributos.

### TXT2MTXT

Alias: `T2M`. Une textos dunha liña nun texto de parágrafo. `Seleccione textos dunha liña para unir`, {{key:Enter}}, logo `Parágrafo` (as liñas únense e axústanse ao ancho da liña máis ancha) ou `Liñas` (cada texto segue sendo unha liña propia); {{key:Enter}} toma o último usado. As liñas ordénanse de arriba abaixo, e logo de esquerda a dereita, seguindo a dirección do texto de arriba. O parágrafo cuelga da esquina superior esquerda do texto de arriba e toma a súa altura, xiro, estilo, capa e cor. Un paso de desfacer.

O texto que xa é de parágrafo, o texto en branco e os outros obxectos da selección quedan como están, e o comando di cantos son.

### NCOPY

Copia obxectos desde unha referencia de bloque ou un debuxo ligado ao debuxo, sen descompoñer nada. `Escolla un obxecto dentro dunha referencia de bloque ou dun debuxo ligado`: copíase o obxecto máis próximo ao clic onde se ve, por moi profundo que estea en bloques; escolla máis, logo {{key:Enter}}. Logo `Punto base para mover as copias`: {{key:Enter}} as deixa no seu sitio, ou dea un punto base e un segundo punto. Todo o comando é un paso de desfacer.

Unha copia toma a capa onde se ve: un obxecto na capa 0 dentro dun bloque cae na capa da referencia onde estaba, e unha cor ByBlock convértese na cor desa referencia. Desde un debuxo ligado, a capa `Plan|Walls` pasa a ser `Plan$0$Walls` (o nome que lle dá a ligazón), feita coa cor, tipo de liña e grosor de liña da capa ligada. O valor dun atributo cópiase como texto. As referencias de bloque en capas bloqueadas non se poden escoller.

### FLATTEN

Pon a altura (Z) e o grosor dos obxectos seleccionados a 0. `Seleccione obxectos para aplanar`, {{key:Enter}}. Tamén aplana os obxectos dentro das definicións de bloque que usa a selección (e os bloques dentro deles), así que cada referencia a eses bloques cambia; os debuxos ligados quedan como están. Un paso de desfacer; informa de cantos obxectos cambiaron, e di iso cando ningún tiña altura nin grosor.

O que CadCraft conserva da terceira dimensión nun debuxo 2D é: unha altura en círculos, arcos, elipses, puntos, textos, referencias de bloque, tramas, referencias e polilíneas (a súa elevación), unha altura en cada extremo dunha liña, e un grosor en liñas, círculos, arcos, polilíneas, puntos e textos, tal como os tiña o ficheiro. {{cmd:FLATTEN}} borra exactamente eses valores. Non toca o modelo 3D da pestana 3D, nin as caras 3D nin os sólidos, e un obxecto debuxado nun plano inclinado xa se levou ao plano do debuxo cando se abriu o ficheiro.

### BREAKLINE

Debuxa unha liña cun símbolo de ruptura, para unha vista cortada. Di o tamaño e a extensión actuais, logo `Primeiro punto da liña de ruptura` (ou `Tamaño` / `Extensión` para cambialos antes), `Segundo punto`, e `Onde se coloca o símbolo de ruptura`: faga clic ao longo da liña, ou {{key:Enter}} para o medio. O resultado é unha polilínea na capa actual: a liña, que sobresae de cada punto segundo a extensión, cun trazo en forma de Z tan alto como o tamaño e a metade de longo.

`Tamaño` e `Extensión` recórdanse como as súas configuracións (o tamaño empeza en dobre da altura do texto da cota por a escala da cota; a extensión, na metade do tamaño). {{key:Enter}} repite o comando.

### AUDIT

Comproba o debuxo aberto por danos e repárao. {{cmd:AUDIT}} mira cada obxecto do modelo, das follas e dentro dos bloques, e a táboa de capas, e lista o que atopa por clase:

- números que non son finitos ou son absurdamente grandes;
- obxectos sen tamaño: unha liña sen lonxitude, un círculo sen raio, unha polilínea con un só punto, un texto sen letras ou altura, unha referencia de bloque de escala cero;
- obxectos nunha capa que o debuxo non ten; referencias a un bloque que non está; nomes de estilo de texto e de cota e nomes de tipo de liña que non están no debuxo;
- bloques que se conteñen a si mesmos, directamente ou a través doutros bloques;
- obxectos que comparten un identificador, unha clave ou un identificador de ficheiro;
- cotas sen os puntos desde os que se miden, e tramas cuxo contorno non é unha liña pechada.

Logo pregunta `¿Arranxalos? [Sí/Non]`. `Non` non cambia nada. `Sí` repara todo nun paso de desfacer: retírase o que non se pode debuxar (números malos, sen tamaño, bloque que falta, cota rota, trama sen contorno útil, a referencia que pecha un círculo de bloques); créase unha capa que falta; os nomes de estilo e de tipo de liña descoñecidos volven aos valores por defecto; substitúese unha clave compartida. Imprime cantos obxectos se retiraron e cantos se repararon. Os mesmos achados aparecen no panel Problemas, cada un co seu propio {{ui:Reparar}}.

Non rexeita nada, pero só comproba o que o propio CadCraft debuxa: os datos conservados para outros programas (sólidos 3D, obxectos OLE) non se abren.

### RECOVER

Abre un DXF ou DWG danado. {{cmd:RECOVER}} pide o ficheiro, le o que se pode ler en vez de rexeitar o ficheiro, lista o que omitiu ou supuxo, e logo comproba e repara o debuxo como fai {{cmd:AUDIT}} con `Sí`.

- DXF: as liñas que non forman parte dun par código e valor omítense ata que os pares volvan aliñarse; unha sección sen fin péchase; un ficheiro cortado léese ata o corte; un DXF binario cortado léese ata o seu último valor completo. Cando unha sección, un bloque ou un obxecto aínda non se pode ler, déixase fóra e nómease, e a lectura continúa despois del.
- DWG: os obxectos que non superan as súas comprobacións ou non se poden decodificar déixanse fóra, e unha lista de obxectos perdida reconstrúese recorrendo os datos dos obxectos.

O ficheiro no disco non se cambia. O debuxo recuperado ábrese sen gardar: gárdeo cun nome novo. Un ficheiro do que non se pode ler nada en absoluto recházase, co motivo.

### LEGACYTEXT

Converte texto escrito con tipos de letra vietnamitas antigos de 8 bits a Unicode. Nomes curtos `TEXTTOUNICODE` e `VNTEXT`.

Os debuxos vietnamitas máis antigos gardan o seu texto como caracteres occidentais que só o tipo de letra converte en vietnamita: texto TCVN3 nos tipos ABC (`.VnTime`, `.VnArial`, e os tipos en maiúsculas cuxos nomes rematan en `H`), e texto VNI nos tipos VNI (`VNI-Times`). CadCraft amosa ese texto como se le en canto se abre o debuxo, polo tipo de letra do seu estilo de texto, do obxecto, ou dun tramo dentro do texto de parágrafo; o ficheiro segue tendo os caracteres antigos.

{{cmd:LEGACYTEXT}} di cantos textos atopou en cada codificación e pregunta `¿Converter … a Unicode?`. `Sí` reescribe cada un (modelo, follas, bloques, valores e definicións de atributos) e dá aos estilos de texto un tipo de letra Unicode (Times New Roman, Arial ou Courier New segundo o tipo de letra antigo), nun paso de desfacer. O formato dentro do texto de parágrafo consérvase.

Cando ningún texto usa un tipo de letra coñecido (un estilo que perdeu o nome do tipo), pregunta `Ler os textos seleccionados como [Tcvn3/Vni/Ningún]`: escolla a codificación e seleccione os textos. O texto que xa é Unicode queda como está. Non se converten os textos de substitución de cota nin o texto de multirreferencias.
