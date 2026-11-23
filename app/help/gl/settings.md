---
title: Configuración de CadCraft
summary: As opcións da aplicación de debuxo: tamaño do cursor, de onde pende unha copia pegada, que fai un clic na selección, cantas filas usa a barra de ferramentas, onde está a liña de comandos e a súa altura, unha área superior compacta e o indicador da esquina.
keywords: liña de comandos, liña de comandos flotante, flotar, acoplar, unha liña, f2, historial de comandos, commandline, cmdline, toparea, área superior, compacta, cursorsize, cursor de pantalla completa, de bordo a bordo, filas da barra de ferramentas, visualización da barra de ferramentas, ctrl f1, configuración, preferencias, opcións, indicador da esquina, cubo de vista, icona de eixos, icona UCS, cursor, cruz, caixa de selección, punto de pegado, punto base, facer clic en obxectos, selección, pickadd, shift, restablecer
from: ae1a81db
---

Abra {{ui:Configuración}} coa roda dentada da barra de aplicacións ou con {{key:Mod+,}}. A primeira lapela, {{ui:CadCraft}}, contén as opcións que pertencen a esta aplicación; {{ui:Xeral}} contén as que comparten todas as aplicacións da familia (tema, tamaño do texto e anchos dos paneis, aspecto e orde da barra de ferramentas). As opcións de CadCraft existen só na aplicación: cámbiaas aquí e este navegador lémbraas. {{ui:Restablecer as opcións de CadCraft}} devolve cada unha ao inicio.

## Cursor

**Pequeno**, **Mediano** (o inicial), **Grande** ou **Pantalla completa**: o tamaño da cruz e da caixa de selección no debuxo. Unha caixa de selección máis grande tamén selecciona obxectos desde un pouco máis lonxe, o que axuda nunha pantalla táctil ou nun debuxo moi fino.

**Pantalla completa** fai que as dúas liñas da cruz vaian de bordo a bordo do debuxo, tamén cando non hai ningún comando en execución, para comprobar a ollo que dúas cousas se aliñan en toda a vista. Con a vista dividida, as liñas quedan no panel no que está a traballar. Igual que {{cmd:CURSORSIZE}} 100 de AutoCAD: escriba {{cmd:CURSORSIZE}} e 100 para pantalla completa; un número menor escolle o tamaño máis próximo (menos de 5 Pequeno, de 5 a 9 Mediano, de 10 a 99 Grande).

## Punto de pegado

De onde pende unha copia pegada desde o cursor despois de {{key:Mod+V}} ({{cmd:PASTECLIP}}), ata que fai clic:

- **Esquina inferior esquerda** (a inicial): a esquina inferior esquerda da extensión dos obxectos copiados, como en AutoCAD.
- **Centro**: o medio da súa extensión. Útil para colocar un símbolo a ollo.

Unha copia feita con `COPYBASE` pende sempre do punto base que escolleu. {{ui:Pegar no mesmo sitio}} ({{key:Mod+Shift+V}}) ignora esta opción: mantén as coordenadas orixinais. Vexa [Copiar, pegar e duplicar](topic:copy-paste).

## Facer clic en obxectos

Que fai un clic no debuxo sobre a selección cando non hai ningún comando en execución:

- **Engade á selección** (a inicial): cada clic ou xanela engade obxectos; {{key:Shift}}+clic, ou unha xanela con {{key:Shift}}, retíraos.
- **Substitúe a selección**: un clic ou unha xanela selecciona só o que escolle. {{key:Shift}}+clic engade un obxecto, ou retira un que xa está seleccionado; unha xanela con {{key:Shift}} engade.

Nunha indicación `Select objects:` dentro dun comando, os clics sempre engaden (e {{key:Shift}} quita), diga o que diga esta opción. Vexa [Seleccionar obxectos](topic:select-objects).

## Facer clic nun espazo baleiro

Que fai un clic onde non hai ningún obxecto cando non hai ningún comando en execución. De calquera xeito inicia unha xanela de selección (un segundo clic a remata).

- **Borra a selección** (a inicial): o que estaba seleccionado solta. Manteña {{key:Shift}} ao facer clic para conservalo.
- **Conserva a selección**: a selección mantense, como noutros programas de debuxo; a xanela engade a ela. Prema {{key:Esc}} para borrar a selección.

## Arrastrar para seleccionar

Que debuxa premer e arrastrar nun espazo baleiro:

- **Lazo** (o inicial): un contorno a man alzada. Movendo primeiro á dereita selecciona o que queda totalmente dentro, primeiro á esquerda o que toca; {{key:Space}} mentres arrastra alterna entre xanela, cruzamento e valado.
- **Rectángulo**: a caixa, como a debuxan un clic e un segundo clic.

{{cmd:LASSOMODE}} `1` ou `0` fixa o mesmo. Vexa [Selección con lazo](topic:lasso-selection).

## Arrastrar para recortar e estender

Que fai premer nun espazo baleiro e arrastrar en {{cmd:TRIM}} e {{cmd:EXTEND}}:

- **Un camiño** (o inicial): un camiño a man alzada; recórtase (ou esténdese) cada anaco que cruce.
- **Unha xanela**: unha caixa; recórtase cada anaco que toque, como fai a opción `C`.

Vexa [Recortar e estender](topic:trim-and-extend).

## Posición da barra de ferramentas

{{ui:CadCraft}} › {{ui:Posición da barra de ferramentas}}: **Arriba** (o inicial, como sempre foi), **Abaixo**, **Esquerda** ou **Dereita**. Na esquerda ou na dereita os grupos de ferramentas apílanse nunha columna que se despraza cando é máis alta que a xanela, e os botóns case dispóñense en dúas ou tres liñas. A elección gárdase coas súas opcións, e {{cmd:TOOLBARDOCK}} (`TBDOCK`) fíxaa desde a liña de comandos. {{ui:Xeral}} › {{ui:Restablecer a disposición}} devolve a barra de ferramentas arriba.

As barras dos estilos de menú sitúanse dentro da barra de ferramentas e móvense con ela, pero o estilo {{ui:Cinta}} está pensado para ir por riba ou por abaixo: nun lateral obtén unha columna estreita que se despraza. Nun teléfono a barra de ferramentas queda onde a sitúa a disposición do teléfono.

## Filas da barra de ferramentas

Cantas liñas usan as ferramentas enriba do debuxo, na barra de CadCraft e nos estilos {{ui:Debuxo clásico 2D}} e {{ui:Cinta}}:

- **Axustar ao ancho** (o inicial): as ferramentas adáptanse ao ancho da xanela.
- **2 filas**: como máximo dúas liñas. Cando as ferramentas se adaptan a dúas liñas ou menos a este ancho, só se adaptan; se non, quedan en dúas filas que se desprazan de lado.
- **1 fila**: unha liña que se despraza de lado, o que deixa máis espazo ao debuxo.

{{key:Shift+Ctrl+F1}} recorre as tres, e {{cmd:TOOLBARROWS}} fixa unha. O que mostran os botóns (iconas e texto, só iconas ou só texto) é unha opción de {{ui:Xeral}} › {{ui:Barra de ferramentas}}; {{key:Ctrl+F1}} recorre entre elas e {{cmd:TOOLBAR}} fíxaas.

## Liña de comandos

A liña de comandos pode quedar acoplada baixo o debuxo, como sempre, ou flotar sobre el, e pode ser tan fina como unha soa liña.

- **Fágaa flotar.** Arrastre o agarre do seu extremo esquerdo ao debuxo, ou escolla {{ui:Flotar sobre o debuxo}} no seu menú {{ui:Opcións da liña de comandos}} (os tres puntos do extremo dereito). Arrastre de novo o agarre para movela; o seu lugar consérvase cando cambia o tamaño da xanela. Arrastre o bordo dereito para facela máis ancha ou máis estreita. Solte na barra de estado, ou escolla {{ui:Acoplar abaixo}}, para acoplala de novo.
- **Fágaa máis fina ou máis alta.** Arrastre o seu bordo superior: cada paso é unha liña do historial. Ata cero liñas é unha **liña de comandos dunha soa liña**: só a indicación e o que escribe, e unha nova mensaxe aparece enriba durante un momento. Un dobre clic no bordo superior alterna entre unha liña e a altura que tiña.
- **O historial.** {{key:F2}}, ou o botón do reloxo na liña de comandos ({{ui:Historial de comandos (F2)}}), abre todo o historial enriba da liña (debaixo cando a liña flota preto do alto da xanela). A escritura segue indo á liña de comandos; {{key:PageUp}} e {{key:PageDown}} desprazan o historial, e {{key:Esc}}, {{key:F2}} ou un clic noutro lugar pecha o historial. Un atallo propio en F2 gaña a isto.
- **Desde o teclado.** O agarre é un botón: con el enfocado, as teclas de frecha moven unha liña de comandos flotante (con {{key:Shift}}, en pasos máis grandes); {{key:Up}} fai flotar unha acoplada e {{key:Down}} no bordo inferior acópla. O bordo superior é un separador: {{key:Up}} e {{key:Down}} engaden ou quitan unha liña, {{key:Home}} deixa unha soa liña e {{key:End}} a máis alta. Os lectores de pantalla seguen oíndo cada mensaxe, tamén na liña de comandos dunha soa liña.

{{ui:CadCraft}} › {{ui:Liña de comandos}} ofrece as mesmas opcións: {{ui:Acoplada abaixo}} ou {{ui:Flotante}}, {{ui:Liñas do historial mostradas}} (0 a 12) e {{ui:Altura estándar}}. {{cmd:COMMANDLINE}} (`CMDLINE`) fíxaas desde a liña de comandos. O lugar e a altura consérvanse para CadCraft neste navegador xunto co resto da disposición, así que un contorno de traballo gardado as leva; {{ui:Xeral}} › {{ui:Restablecer a disposición}} acopla de novo a liña de comandos á súa altura estándar. Nun teléfono a liña de comandos queda acoplada cunha liña do historial; o botón do historial tamén funciona alí.

{{ui:CadCraft}} › {{ui:Letras de opción}} conserva as letras que escolleu para as opcións dos comandos: {{ui:Editar…}} abre o ficheiro, {{ui:Importar…}} substitúeo por un ficheiro que escolla e {{ui:Exportar}} o garda. Vexa [Dar ás opcións dos comandos as súas propias letras](topic:option-letters).

Cando a xanela é baixa e a comprobación da disposición ofrece unha disposición máis axustada, o seu {{ui:Si}} tamén convirte a liña de comandos nunha soa liña se o debuxo segue sendo baixo despois das barras de ferramentas.

## Área superior

{{ui:CadCraft}} › {{ui:Área superior}}: **Estándar** (o inicial) ou **Compacta**. Compacta mantén pequenas as barras por riba do debuxo en todos os estilos de menú: desaparecen os nomes dos grupos e as palabras baixo as iconas (as indicacións e os lectores de pantalla seguen tendo esas palabras) e os botóns quedan máis xuntos. Funciona con [Filas da barra de ferramentas](topic:settings#toolbar-rows): Compacta e **1 fila** deixan máis espazo ao debuxo. {{cmd:TOPAREA}} fíxao.

## Indicador da esquina

Que hai na esquina do debuxo:

- **Automático** (o inicial): a icona de eixos na lapela {{ui:Modelo}} e o cubo de vista na lapela {{ui:3D}}.
- **Icona de eixos**: a marca X e Y na parte inferior esquerda da lapela {{ui:Modelo}}, e unha pequena marca X, Y e Z na lapela {{ui:3D}}.
- **Cubo de vista**: un cubo na parte superior dereita das dúas lapelas. Na lapela {{ui:Modelo}} mostra o debuxo desde arriba, e ao premer outra cara, bordo ou esquina ábrese a lapela {{ui:3D}} mirando desde ese punto. Na lapela 3D xira coa vista: prema para mirar desde un lado, arrastre para orbitar, e a casa volve á vista isométrica. Vexa [Modelo en 3D](topic:3d-solids).
- **Ningún**: nada na esquina.

As follas non mostran ningún dos dous.

## Lonxitude e superficie da selección

- **Na barra de estado** (o inicial): con obxectos seleccionados, a barra de estado mostra a súa lonxitude total e a superficie total dos pechados. Vexa [Totais dunha selección](topic:properties-panel#totals-of-a-selection).
- **Oculto**: a barra de estado non os mostra. Propiedades segue mostrándoos para varios obxectos.

## Cuadrícula, orto e enganches

Non están no cadro de diálogo: os botóns {{ui:Cuadrícula}}, {{ui:Orto}} e {{ui:Enganche}} da barra de estado (ou {{key:F7}}, {{key:F8}}, {{key:F3}}) e a lista de enganches a obxectos xunto a eles lémbranse ao saír. Vexa [Enganchar a puntos de obxectos](topic:object-snaps).
