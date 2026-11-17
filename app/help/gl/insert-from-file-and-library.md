---
title: Inserir desde un ficheiro ou da biblioteca
summary: Traia un bloque, ou un debuxo completo, desde outro DWG ou DXF, e coloque elementos desde a Biblioteca, un ficheiro ou outra biblioteca, cos seus créditos e actualizacións.
keywords: inserir, ficheiro, biblioteca, librarycraft, elemento, equipamento, bloque desde outro debuxo, wblock, centro de deseño, créditos, atribución, licenza, actualizar, fonte, item.json
from: 316188d2
---

## Inserir un bloque desde outro debuxo

1. Escriba `I` e prema {{key:Enter}}, ou faga clic en {{ui:Inserir}} no grupo {{ui:Bloques}}.
2. No aviso `Escriba o nome do bloque ou [Ficheiro/Biblioteca (L)]`, escriba `F` e prema {{key:Enter}}.
3. Escolla o DWG ou DXF neste computador. Lese aquí; non se abre, e non se envía nada.
4. No diálogo {{ui:Inserir desde}}, escolla un bloque da lista (escriba en {{ui:Filtrar bloques}} para atopalo), ou manteña {{ui:O debuxo completo}}. Faga clic en {{ui:Inserir}}.
5. Faga clic onde vai, e complete os atributos que pida.

O debuxo completo entra como un só bloque co nome do ficheiro. Os bloques dentro do bloque escollido tamén entran. As capas que usan engádense a este debuxo.

Se o outro debuxo ten outras unidades (polgadas e milímetros, por exemplo), CadCraft escala a referencia para igualala e indícao no historial.

### Cando un nome xa está en uso

Se este debuxo xa ten un bloque co mesmo nome, CadCraft pregunta:

- {{ui:Manter os existentes}} usa o bloque deste debuxo con ese nome.
- {{ui:Renomear}} trae o novo como `Nome (2)`.

Toda a inserción é un só paso: {{key:Mod+Z}} quita de novo a referencia e as definicións copiadas.

## Abrir a biblioteca

Faga clic en {{ui:Biblioteca…}} no panel {{ui:Bloques}}, ou en {{ui:Biblioteca}} no grupo Bloques, ou escriba `LIB`. No aviso `INSERT`, `L` tamén a abre.

A biblioteca ten catro fontes, como lapelas:

- {{ui:Biblioteca}}: a biblioteca de CadCraft. Busque por nome, fabricante ou modelo, e filtre por categoría.
- {{ui:Ficheiros…}}: un ficheiro de elemento (`item.json`) de calquera biblioteca, ou un debuxo, unha folla de cálculo ou un modelo 3D para crear elementos: un DWG ou DXF (cada bloque convértese nun elemento), un CSV con columnas de nome e tamaño, ou un modelo glTF ou OBJ. Non se envía nada.
- {{ui:Estándar}}: perfís de aceiro (como seccións, alzados ou elementos 3D) e pezas estándar, como parafusos, porcas e rodamentos, feitos aquí a partir de táboas publicadas. Vexa [Colocar perfís de aceiro e pezas estándar](topic:steel-and-standard-parts).
- {{ui:Outras fontes}}: outras bibliotecas que responden do mesmo xeito que Biblioteca. Engada o seu enderezo unha vez; este navegador o lembra.

Cada tarxeta mostra unha vista previa, o nome, o fabricante e o modelo, a licenza e a versión. Un elemento retirado márcase con {{ui:Retirado}} e o motivo; CadCraft pregunta antes de colocar un.

## Colocar un elemento

1. Faga clic en {{ui:Colocar}} nunha tarxeta.
2. Faga clic onde vai o elemento. Escriba `R` (Xirar) primeiro para xiralo, ou `S` (Escalar) para escalalo.
3. No aviso `Escriba o número do elemento (CC-ITEM)`, prema {{key:Enter}} para o seguinte número libre, ou escriba o seu propio.

O elemento convértese nun bloque chamado `LIB_<nome>_v<versión>`, debuxado coas unidades deste debuxo. Se o debuxo non ten unidades, o elemento entra en milímetros e o historial dino; estableza primeiro {{ui:Unidades}} no panel da dereita.

Os seus datos viaxan como atributos invisibles: o id e a versión do elemento, a licenza e a atribución, o fabricante, o modelo, a categoría e os tamaños. Vexa [Atributos de bloque](topic:attributes).

## Elementos no seu idioma

Un elemento pode levar o seu nome e a súa descrición noutros idiomas. Cando os ten no idioma ao que está configurado CadCraft (Configuración › Xeral › Idioma), a tarxeta e o nome do elemento do bloque colocado usan eses. O propio bloque conserva un nome feito a partir do nome do elemento, así que un debuxo ten un bloque por elemento, sexa cal sexa o idioma que o colocou.

## Buscar actualizacións

1. Abra a biblioteca.
2. Faga clic en {{ui:Buscar actualizacións}}.

Cada elemento da biblioteca no debuxo aparece listado cos seus números de elemento e indica se está ao día, se ten unha versión máis nova (e o que cambiou), ou se foi retirado. Faga clic en {{ui:Actualizar}} nunha fila, ou en {{ui:Actualizar todo}}. Cada referencia pasa ao bloque da nova versión e conserva o seu número de elemento, cantidade, lugar, ángulo e capa. {{key:Mod+Z}} desfai unha actualización.

## Acredite o que usou

Faga clic en {{ui:Créditos da biblioteca}}. Cada elemento aparece coa súa liña de atribución e a súa licenza.

- {{ui:Copiar a atribución}} copia a liña dun elemento; {{ui:Copiar todo}} copia todas as liñas.
- {{ui:Descargar CSV}} garda a lista cos números de elemento, fabricantes, modelos, licenzas e atribucións. Ábrese en calquera folla de cálculo.

Licenzas como CC BY piden que acredite o autor onde use a obra. Ponha as liñas no debuxo, na especificación ou nas notas do proxecto.

## Símbolos e activos

A Biblioteca ten tres tipos de elemento: Símbolos (convencións de debuxo, en 2D), Tipos (de que está feito un elemento) e Activos (obxectos físicos). Na lapela {{ui:Biblioteca}}, a lista {{ui:Tipo de elemento}} amosa Símbolos e Activos xuntos, só Símbolos, ou só Activos. Os tipos son aquilo de que se constrúe un proxecto de BimCraft, así que CadCraft non os lista.

## Iniciar sesión na biblioteca

Faga clic en {{ui:Iniciar sesión na biblioteca}}. Abre unha pequena xanela no sitio; unha vez que inicie sesión alí, CadCraft pode amosar os elementos do seu equipo e rexistrar o que coloca, para que saiba cando cambia un elemento que usou. A sesión dura para esta pestana do navegador. Revóguea cando queira desde a páxina de seguridade da súa conta.

## Erros frecuentes

- **«A creación de elementos desde tipos IFC está en BimCraft.»** Os ficheiros IFC e de familia lense na aplicación BimCraft. Cree o elemento alí ou na Biblioteca, e despois use o seu `item.json` aquí.
- **«Non se puido acceder á biblioteca.»** Está sen conexión, ou a biblioteca non funciona. Os elementos xa no debuxo non se ven afectados.
- **Un elemento é demasiado grande ou demasiado pequeno.** As unidades do debuxo están mal ou sen definir. Desfaga, estableza {{ui:Unidades}} e colóqueo de novo.
