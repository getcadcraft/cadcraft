---
title: Configuración de CadCraft
summary: As configuracións que pertencen á aplicación de debuxo: tamaño do cursor, de onde pende unha copia pegada desde o cursor, o que fai un clic sobre a selección, cantas filas usa a barra de ferramentas, onde está a liña de comandos e cantas liñas ten, unha área superior compacta e o indicador da esquina.
keywords: liña de comandos, liña de comandos flotante, flotar, acoplar, unha liña, f2, historial de comandos, commandline, cmdline, toparea, área superior, compacto, cursorsize, cruz de pantalla completa, cursor de pantalla completa, de bordo a bordo, filas da barra, visualización da barra, ctrl f1, configuración, preferencias, opcións, indicador da esquina, cubo de vista, icona de eixos, icona UCS, cursor, cruz, caixa de escolla, punto de pegado, punto base, facer clic en obxectos, selección, pickadd, shift, restablecer
from: 0896eb42
---

Abra {{ui:Configuración}} coa roda dentada da barra da aplicación ou con {{key:Mod+,}}. A primeira lapela, {{ui:CadCraft}}, contén as configuracións propias desta aplicación; {{ui:Xeral}} contén as que comparten todas as aplicacións da familia (tema, tamaño e anchos do texto dos paneis, aspecto e orde da barra de ferramentas). As configuracións de CadCraft existen só na aplicación: cámbiaas aquí, e este navegador recórdaas. {{ui:Restablecer a configuración de CadCraft}} devolve todas ao inicio.

## Cursor

**Pequeno**, **Mediano** (o inicial), **Grande** ou **Pantalla completa**: o tamaño da cruz e da caixa de escolla no debuxo. Unha caixa de escolla maior tamén escolle obxectos dun pouco máis lonxe, o que axuda nunha pantalla táctil ou nun debuxo moi fino.

**Pantalla completa** fai que as dúas liñas da cruz atraveseen o debuxo de bordo a bordo, tamén cando non hai ningún comando en curso, para que poida comprobar a ollo que dúas cousas se aliñan en toda a vista. Cando a vista está dividida, as liñas quedan no panel no que está a traballar. É o mesmo que {{cmd:CURSORSIZE}} 100 de AutoCAD: escriba {{cmd:CURSORSIZE}} e 100 para pantalla completa; un número menor escolle o tamaño máis próximo (por debaixo de 5 Pequeno, de 5 a 9 Mediano, de 10 a 99 Grande).

## Punto de pegado

Desde onde pende do cursor unha copia pegada tras {{key:Mod+V}} ({{cmd:PASTECLIP}}), ata que prema:

- **Esquina inferior esquerda** (o inicial): a esquina inferior esquerda da extensión dos obxectos copiados, como en AutoCAD.
- **Centro**: o punto medio da súa extensión. Útil para colocar un símbolo a ollo.

Unha copia feita con `COPYBASE` pende sempre do punto base que escolleu. {{ui:Pegar no mesmo sitio}} ({{key:Mod+Shift+V}}) ignora esta configuración: conserva as coordenadas orixinais. Véxase [Copiar, pegar e duplicar](topic:copy-paste).

## Facer clic en obxectos

O que fai un clic no debuxo á selección cando non hai ningún comando en curso:

- **Engade á selección** (o inicial): cada clic ou xanela engade obxectos; {{key:Shift}}+clic, ou unha xanela con {{key:Shift}}, retíraos.
- **Substitúe a selección**: un clic ou xanela selecciona só o que escolle. {{key:Shift}}+clic engade un obxecto, ou retira un que xa estaba seleccionado; unha xanela con {{key:Shift}} engade.

Na indicación `Seleccione obxectos:` dentro dun comando, os clics sempre engaden ({{key:Shift}} retira), sexa cal sexa esta configuración. Véxase [Seleccionar obxectos](topic:select-objects).

## Clic nun lugar baleiro

O que fai un clic onde non hai ningún obxecto cando non hai ningún comando en curso. En ambos casos inicia unha xanela de selección (un segundo clic a remata).

- **Limpa a selección** (o inicial): o que estaba seleccionado solta. Manteña premida {{key:Shift}} ao facer clic para conservalo.
- **Mantén a selección**: a selección permanece, como en outros programas de debuxo; a xanela engade a ela. Prema {{key:Esc}} para limpar a selección.

## Arrastrar para seleccionar

O que debuxa premer e arrastrar nun espazo baleiro:

- **Lazo** (o inicial): un contorno a man alzada. Movendo primeiro cara á dereita selecciónase o que queda totalmente dentro, cara á esquerda primeiro, o que toca; {{key:Space}} mentres arrastra alterna entre xanela, cruce e valla.
- **Rectángulo**: a caixa, tal como a debuxan un clic e un segundo clic.

{{cmd:LASSOMODE}} `1` ou `0` establece o mesmo. Véxase [Selección con lazo](topic:lasso-selection).

## Arrastrar para recortar e estender

O que fai premer nun espazo baleiro e arrastrar en {{cmd:TRIM}} e {{cmd:EXTEND}}:

- **Unha ruta** (o inicial): unha ruta a man alzada; recórtase (ou estende) cada peza que cruza.
- **Unha xanela**: unha caixa; recórtase cada peza que toca, como fai a opción `C`.

Véxase [Recortar e estender](topic:trim-and-extend).

## Posición da barra de ferramentas

{{ui:CadCraft}} › {{ui:Posición da barra de ferramentas}}: **Arriba** (o inicial, como sempre foi), **Abaixo**, **Esquerda** ou **Dereita**. Á esquerda ou á dereita, os grupos de ferramentas apílanse nunha columna que se despraza cando é máis alta que a xanela, e os botóns se distribúen en dúas ou tres liñas. A opción gárdase coas súas configuracións, e {{cmd:TOOLBARDOCK}} (`TBDOCK`) establécea desde a liña de comandos. {{ui:Xeral}} › {{ui:Restablecer a disposición}} devolve a barra arriba.

As barras dos estilos de menú sitúanse dentro da barra de ferramentas e móvense con ela, pero o estilo {{ui:Cinta}} está feito para correr pola parte superior ou inferior: nun lateral recibe unha columna estreita que se despraza. Nun teléfono, a barra de ferramentas queda onde a disposición do teléfono a coloca.

## Filas da barra de ferramentas

Cantas liñas usan as ferramentas enriba do debuxo, na barra de CadCraft e nos estilos {{ui:Debuxo clásico 2D}} e {{ui:Cinta}}:

- **Axustar ao ancho** (o inicial): as ferramentas axústanse ao ancho da xanela.
- **2 filas**: como máximo dúas liñas. Cando as ferramentas se axustan a dúas liñas ou menos a este ancho, simplemente se axustan; se non, quedan en dúas filas que se despraza lateralmente.
- **1 fila**: unha liña que se despraza lateralmente, o que deixa máis espazo ao debuxo.

{{key:Shift+Ctrl+F1}} recorre as tres, e {{cmd:TOOLBARROWS}} establece unha. O que mostran os botóns (iconas e texto, só iconas ou só texto) é unha configuración de {{ui:Xeral}} › {{ui:Barra de ferramentas}}; {{key:Ctrl+F1}} recorre entre elas e {{cmd:TOOLBAR}} establece a opción.

## Liña de comandos

A liña de comandos pode quedar acoplada debaixo do debuxo, como sempre, ou flotar sobre el, e pode ser tan fina como unha soa liña.

- **Fágaa flotar.** Arrastre a asa do seu extremo esquerdo ata o debuxo, ou escolla {{ui:Flotar sobre o debuxo}} no seu menú {{ui:Opcións da liña de comandos}} (os tres puntos do extremo dereito). Arrastre de novo a asa para movela; o seu lugar consérvase cando cambia o tamaño da xanela. Arrastre o seu bordo dereito para facela máis ancha ou máis estreita. Solte sobre a barra de estado, ou escolla {{ui:Acoplar abaixo}}, para acoplala de novo.
- **Fágaa máis fina ou máis alta.** Arrastre o seu bordo superior: cada paso é unha liña do historial. Ata cero liñas convértese nunha **liña de comandos dunha soa liña**: só a indicación e o que escribe, e unha mensaxe nova aparece enriba durante un momento. Un dobre clic no bordo superior alterna entre unha liña e a altura que tiña.
- **O historial.** {{key:F2}}, ou o botón de reloxo da liña de comandos ({{ui:Historial de comandos (F2)}}), abre todo o historial enriba da liña (debaixo, cando a liña flota preto da parte superior da xanela). A escritura segue indo á liña de comandos; {{key:PageUp}} e {{key:PageDown}} desprazan o historial, e {{key:Esc}}, {{key:F2}} ou un clic noutro lugar o pechan. Unha tecla propia en F2 prevalece sobre isto.
- **Desde o teclado.** A asa é un botón: con el enfocado, as teclas de flecha moven unha liña de comandos flotante (con {{key:Shift}}, en pasos máis grandes); {{key:Up}} fai flotar unha acoplada e {{key:Down}} no bordo inferior acóplaa. O bordo superior é un separador: {{key:Up}} e {{key:Down}} engaden ou quitan unha liña, {{key:Home}} deixa unha liña e {{key:End}} a máis alta. Os lectores de pantalla seguen escoitando todas as mensaxes, tamén na liña de comandos dunha soa liña.

{{ui:CadCraft}} › {{ui:Liña de comandos}} ofrece as mesmas opcións: {{ui:Acoplada abaixo}} ou {{ui:Flotante}}, {{ui:Liñas do historial mostradas}} (de 0 a 12) e {{ui:Altura estándar}}. {{cmd:COMMANDLINE}} (`CMDLINE`) establécea desde a liña de comandos. O lugar e a altura consérvanse para CadCraft neste navegador, co resto da disposición, de modo que un entorno de traballo gardado os inclúe; {{ui:Xeral}} › {{ui:Restablecer a disposición}} acopla de novo a liña de comandos á súa altura estándar. Nun teléfono a liña de comandos queda acoplada cunha liña de historial; o botón do historial tamén funciona alí.

Cando a xanela é baixa e a comprobación da disposición ofrece unha disposición máis axustada, o seu {{ui:Si}} tamén pasa a liña de comandos a unha soa liña se o debuxo segue sendo curto despois das barras de ferramentas.

## Área superior

{{ui:CadCraft}} › {{ui:Área superior}}: **Estándar** (o inicial) ou **Compacta**. Compacta mantén pequenas as barras sobre o debuxo en todos os estilos de menú: desaparecen os nomes dos grupos e as palabras baixo as iconas (as indicacións emerxentes e os lectores de pantalla seguen tendo esas palabras) e os botóns quedan máis xuntos. Funciona con [Filas da barra de ferramentas](topic:settings#toolbar-rows): Compacta e **1 fila** deixan máis espazo ao debuxo. {{cmd:TOPAREA}} establécea.

## Indicador da esquina

O que se sitúa na esquina do debuxo:

- **Automático** (o inicial): a icona de eixos na lapela {{ui:Modelo}} e o cubo de vista na lapela {{ui:3D}}.
- **Icona de eixos**: a marca de X e Y na parte inferior esquerda da lapela {{ui:Modelo}}, e unha pequena marca de X, Y e Z na lapela {{ui:3D}}.
- **Cubo de vista**: un cubo arriba á dereita de ambas lapelas. Na lapela {{ui:Modelo}} mostra o debuxo desde arriba, e ao prema outra cara, aresta ou esquina ábrese a lapela {{ui:3D}} mirando desde ese punto. Na lapela 3D xira coa vista: prema para mirar desde un lado, arrastre para orbitar, e o botón de inicio volve á vista isométrica. Véxase [Modelo en 3D](topic:3d-solids).
- **Ningún**: nada na esquina.

As follas non mostran ningún dos dous.

## Lonxitude e superficie da selección

- **Na barra de estado** (o inicial): con obxectos seleccionados, a barra de estado mostra a súa lonxitude total e a superficie total dos pechados. Véxase [Totais dunha selección](topic:properties-panel#totals-of-a-selection).
- **Oculto**: a barra de estado non os inclúe. Propiedades segue mostrándoos para varios obxectos.

## Cuadrícula, orto e enganches

Estes non están no diálogo: os botóns {{ui:Cuadrícula}}, {{ui:Orto}} e {{ui:Enganche}} da barra de estado (ou {{key:F7}}, {{key:F8}}, {{key:F3}}) e a lista de enganches a obxectos xunto a eles recórdanse ao saír. Véxase [Enganchar a puntos dos obxectos](topic:object-snaps).
