---
title: A pantalla de CadCraft
summary: Un percorrido por cada barra, panel e pestana da aplicación de debuxo, co nome que ten na pantalla.
keywords: pantalla, interface, barra de ferramentas, cinta, paneis, liña de comandos, barra de estado, pestanas, pestanas de folla, propiedades, panel de capas, percorrido
from: b5a33388
---

A pantalla ten sete partes. De arriba abaixo: a barra da aplicación, a barra de ferramentas, a área de debuxo cun panel a cada lado, as pestanas baixo o debuxo, a liña de comandos e a barra de estado.

## A barra da aplicación

A barra fina da parte superior pertence ao sitio, non ao debuxo. Amosa a marca de CadCraft, o nome da aplicación, a versión que está a usar, unha ligazón á páxina da aplicación, un botón {{ui:Axuda}} (ou {{key:F1}}), un botón {{ui:Gardar para usar sen conexión}}, un botón {{ui:Pantalla completa}} e dous botóns de tema, {{ui:Papel}} e {{ui:Modelo}}.

O botón {{ui:Configuración}} (engrenaxe) contén os axustes propios de CadCraft e os que comparten todas as aplicacións: vexa [Configuración de CadCraft](topic:settings).

{{ui:Gardar para usar sen conexión}} garda unha copia de CadCraft, incluído o seu lector DWG, neste navegador para que se abra sen conexión. A etiqueta amosa o estado: «Gardando N de M», «Listo sen conexión», «Non se puido gardar» ou «Sen conexión non dispoñible». Vexa [Traballar sen conexión](common:offline).

:::note
Os botóns {{ui:Papel}} e {{ui:Modelo}} da barra da aplicación só cambian as cores da pantalla: {{ui:Papel}} é un tema claro, {{ui:Modelo}} un escuro. Non teñen nada que ver coa pestana {{ui:Modelo}} baixo o debuxo, que alterna entre o debuxo e as súas follas.
:::

O botón {{ui:Pantalla completa}}, ou {{key:Ctrl+Shift+F}} (a tecla Control en todos os ordenadores, incluídos os Mac), alterna entre tres modos de pantalla: normal, pantalla completa e pantalla completa coas barras ocultas. Con as barras ocultas, leve o punteiro ata o bordo superior da pantalla para volvelas amosar.

## A barra de ferramentas

Baixo a barra da aplicación está a barra de ferramentas. Cada botón executa un comando, exactamente como se o tivese escrito, así que a liña de comandos fai as mesmas preguntas de todos os xeitos. Pase o punteiro sobre un botón para ver o seu alias de comando. Os grupos son:

| Grupo | Botóns |
|---|---|
| Ficheiro | {{ui:Nova}}, {{ui:Abrir}}, {{ui:Gardar}}, {{ui:Gardar como}}, {{ui:Trazar}} |
| Debuxar | {{ui:Liña}}, {{ui:Polilínea}}, {{ui:Círculo}}, {{ui:Arco}}, {{ui:Rectángulo}}, {{ui:Polígono}}, {{ui:Elipse}}, {{ui:Texto}}, {{ui:Parágrafo}}, {{ui:Trama}}, e {{ui:Máis}}: {{ui:Punto}}, {{ui:Liña de construción}} e {{ui:Semirrecta}} (vexa [Liñas de construción e semirrectas](topic:construction-lines)) |
| Modificar | {{ui:Mover}}, {{ui:Copiar}}, {{ui:Xirar}}, {{ui:Escala}}, {{ui:Espello}}, {{ui:Estirar}}, {{ui:Desfasamento}}, {{ui:Recortar}}, {{ui:Estender}}, {{ui:Acordo}}, {{ui:Chanfro}}, {{ui:Desagregar}}, {{ui:Borrar}}, e {{ui:Máis}}: {{ui:Matriz}}, {{ui:Unir}}, {{ui:Igualar propiedades}}, {{ui:Partir}} e {{ui:Alongar}} |
| Anotar | {{ui:Lineal}}, {{ui:Aliñada}}, {{ui:Ángulo}}, {{ui:Raio}}, {{ui:Diámetro}} (cotas), {{ui:Referencia}} (referencia múltiple), e {{ui:Máis}}: {{ui:Continuar cota}}, {{ui:Cota de base}} e {{ui:Núbem de revisión}} |
| Paramétrico | {{ui:Auto}}, {{ui:Restrinxir}}, {{ui:Cota}}, {{ui:Parámetros}}, e {{ui:Máis}} con cada restrición (vexa [Restrinxir un debuxo](topic:constraints)) |
| Bloques | {{ui:Crear}}, {{ui:Inserir}}, {{ui:Biblioteca}}, e {{ui:Máis}}: {{ui:Editar bloque}} e {{ui:Definir atributo}} |
| Follas | {{ui:Nova folla}}, {{ui:Viewport}} |
| Editar | {{ui:Desfacer}}, {{ui:Refacer}}, {{ui:Copiar}} (ao portapapeis), {{ui:Pegar}}, e {{ui:Máis}}: un menú con {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar no mesmo sitio}}, {{ui:Duplicar e mover}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}}, {{ui:Non seleccionar nada}}, {{ui:Selección rápida}}, {{ui:Seleccionar similares}} e {{ui:Buscar e substituír}}, cada un coa súa tecla |
| Vista | {{ui:Extensións}}, {{ui:Xanela}}, {{ui:Anterior}}, e {{ui:Máis}}: {{ui:Medir distancia}}, {{ui:Superficie}}, {{ui:Medir (raio, ángulo …)}}, e a división da pantalla: {{ui:Dividir lado a lado}}, {{ui:Dividir apilado}}, {{ui:Catro paneis}}, {{ui:Un panel}} (vexa [Dividir a pantalla](topic:split-screen)), e {{ui:Xirar a vista 90° á esquerda}}, {{ui:Xirar a vista 90° á dereita}}, {{ui:Volver ao mundo}} (vexa [Xirar a vista](topic:ucs-and-turned-view)) |

{{ui:Copiar}} no grupo {{ui:Modificar}} é o comando {{cmd:COPY}} (punto base, e logo onde vai cada copia); {{ui:Copiar}} no grupo {{ui:Editar}} pon os obxectos no portapapeis para {{ui:Pegar}}. Vexa [Copiar, pegar e duplicar](topic:copy-paste). O botón do comando en execución queda resaltado ata que o comando remate. As indicacións emerxentes citan os atallos de Windows («Ctrl+O»); nun Mac, {{key:Mod+O}} tamén funciona.

Nunha xanela baixa (un portátil cunha pantalla escalada ao 125 % ou máis, por exemplo) a barra de ferramentas nunca ocupa o lugar do debuxo: cando o debuxo quedaría con moi pouca altura, os botóns quitan as palabras debaixo das súas iconas e os nomes dos grupos (pase o punteiro por un botón para ver o seu nome), e se aínda non abonda, a barra de ferramentas pasa a ser unha soa fila que se desprace de lado. Unha xanela máis alta devolve as palabras.

## O panel esquerdo

O panel da esquerda ten tres seccións.

- **{{ui:Capas}}.** Cada capa do debuxo, cun punto cheo na actual. Prema un nome para facer actual esa capa. Cada fila ten unha mostra de cor (prema nela para escoller unha cor) e catro botóns: activar/desactivar (ollo), conxelar (floco de neve), bloquear (cadeado) e trazar (impresora). {{ui:Nova capa}} abre unha caixa para engadir unha. Vexa [Organizar un debuxo con capas](topic:layers).
- **{{ui:Bloques}}.** Os bloques definidos no debuxo, cantas veces se usa cada un, e un botón {{ui:Inserir}} para cada un. Vexa [Crear e inserir bloques](topic:blocks).
- **{{ui:Debuxo}}.** Datos do ficheiro aberto: nome (con «(modificado)» cando hai edicións sen gardar), formato, tamaño, unidades, número de obxectos, capas, bloques e follas. Despois de abrir un ficheiro, unha caixa «Acerca deste ficheiro» enumera calquera cousa que CadCraft non puido amosar ou tivo que converter.

## A área de debuxo

O centro da pantalla é o debuxo. O punteiro é unha cruz. Cando CadCraft quere un punto, un pequeno marcador e unha etiqueta («Extremo», «Punto medio») amosan onde caerá un enganche a obxectos. Cando quere obxectos, a cruz ten unha caixa de selección e os obxectos baixo ela iluminanse.

Cando o debuxo está baleiro, unha tarxeta «Comezar debuxo» amosa algúns primeiros comandos. Desaparece en canto executa un comando ou abre un ficheiro. Pode soltar un ficheiro DWG ou DXF en calquera punto desta área para abrilo.

## As pestanas baixo o debuxo

Baixo o debuxo están as pestanas: primeiro {{ui:Modelo}}, despois {{ui:3D}}, despois unha pestana por folla, e logo un botón {{ui:+}}.

- {{ui:Modelo}} é o propio debuxo, a tamaño real, en unidades de debuxo.
- {{ui:3D}} amosa o debuxo tendido no chan e os sólidos feitos a partir del. Mentres se amosa, a barra de ferramentas ten un grupo {{ui:3D}} no lugar dos grupos de debuxo. Vexa [Modelo en 3D](topic:3d-solids).
- Cada pestana de folla é unha folla de papel cunha cartela e viewports sobre o modelo. O que debuxa alí está en unidades de papel (milímetros ou polgadas). Faga dobre clic dentro dun viewport para traballar no modelo a través del (vexa [Traballar no modelo a través dun viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Un nome de folla longo córtase na súa pestana; pase o punteiro sobre a pestana para ver o nome completo. Con moitas follas, {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Pestanas de folla}} › {{ui:Só números de folla}} amosa na pestana só o número de cada folla (A-101).
- {{ui:+}} crea unha folla nova cun bordo, unha cartela e un viewport. É o mesmo que o comando {{cmd:LAYOUT}}.
- Faga dobre clic nunha pestana de folla para cambiarlle o nome. Cunha pestana enfocada, {{key:Left}} e {{key:Right}} moven entre pestanas.

Cada pestana conserva o seu propio zoom e desprazamento. Vexa [Preparar unha folla](topic:sheets-and-viewports).

## O panel dereito: Propiedades

O panel da dereita cambia segundo o que estea seleccionado.

- **Nada seleccionado, na pestana {{ui:Modelo}}:** o título di {{ui:Configuración actual}}. Aquí fixa a {{ui:Capa}}, a {{ui:Cor}} e a {{ui:Altura do texto}} dos novos obxectos, as {{ui:Unidades}} do debuxo, e os tamaños das novas cotas ({{ui:Altura do texto}}, {{ui:Tamaño da frecha}}, {{ui:Decimais}}, {{ui:Escala global}}).
- **Nada seleccionado, nunha folla:** o título di «Folla:» e o nome da folla. Pode cambiarlle o nome á folla, cambiar o seu {{ui:Papel}} e a {{ui:Orientación}}, {{ui:Imprimir esta folla}} ou {{ui:Eliminar esta folla}}. Os axustes dos novos obxectos seguen debaixo.
- **Un obxecto seleccionado:** o seu tipo como título (Liña, Círculo, Texto, Cota, Viewport …), e logo a súa capa, cor e xeometría. Escriba un valor novo e prema {{key:Enter}} para cambialo.
- **Varios obxectos seleccionados:** cantos son, e a súa {{ui:Capa}} e {{ui:Cor}} comúns. Cambiar calquera das dúas cambia todos. «Varía» significa que son distintos.

Vexa [Editar con agarres e Propiedades](topic:grips-and-properties).

Debaixo, o panel {{ui:Parámetros}} ábrese cando escolle {{ui:Parámetros}} ou escribe {{cmd:PARAMETERS}}: cada parámetro e restrición dimensional nunha soa táboa. Vexa [Usar parámetros e ecuacións](topic:parameters).

## A liña de comandos

Na parte inferior está a liña de comandos: o historial do que fixo, e debaixo o indicador.

- A etiqueta do indicador di `Command:` cando non hai nada en execución. Mentres un comando se executa, amosa a pregunta, as súas opcións entre corchetes e o valor por defecto entre ángulos, por exemplo `Specify radius of circle [Diameter] <500>:`.
- Ao escribir un nome de comando, unha suxestión á dereita propón comandos coincidentes. Prema {{key:Tab}} para aceptar o primeiro. «Non existe ese comando» significa que non coincide nada.
- {{key:Up}} e {{key:Down}} recuperan as liñas que escribiu antes.
- O historial conserva as últimas 400 liñas. Aquí aparecen as mensaxes dos comandos, as medidas de {{cmd:DIST}} e {{cmd:LIST}}, e os informes de gardado e trazado.

## A barra de estado

A fila máis baixa é a barra de estado.

- **Coordenadas** á esquerda: a X e a Y da cruz. Mentres un comando ten un punto base, tamén amosa a distancia e o ángulo desde el, por exemplo `Δ 1200 < 90°`.
- **Mensaxes** no medio, como «Orto activado» ou «Capa actual: Walls». Esvaécense ao cabo duns segundos.
- **{{ui:Cuadrícula}}**, **{{ui:Orto}}**, **{{ui:Polar}}**, **{{ui:Enganche}}**, **{{ui:Rastrexo}}**, **{{ui:Dyn}}** e **{{ui:LWT}}** á dereita. Cada un é un interruptor; un botón pulsado está activado. {{ui:LWT}} amosa os grosores de liña na pantalla (vexa [Grosores de liña e tipos de liña](topic:units-papers-scales#line-weights-and-linetypes)). A pequena frecha xunto a {{ui:Enganche}} abre {{ui:Enganches a obxectos}}, onde marca cales enganches están activos. Vexa [Enganchar a puntos de obxectos](topic:object-snaps).

## O diálogo Trazar a PDF

{{ui:Trazar}} (ou {{key:Mod+P}}) abre o diálogo {{ui:Trazar a PDF}}, cos axustes á esquerda e unha vista previa en directo á dereita. Vexa [Trazar a PDF](topic:plot-pdf).

## A axuda

{{key:F1}} ou o botón {{ui:Axuda}} abre esta axuda como un panel lateral; o debuxo segue utilizable ao seu lado. Funciona sen conexión. {{key:F1}} de novo, ou {{key:Esc}} dentro do panel, pecha o panel. Vexa [Usar esta axuda](common:help).
