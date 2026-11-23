---
title: Inserir desde un ficheiro ou da biblioteca
summary: Traia un bloque, ou un debuxo completo, desde outro DWG ou DXF, e coloque elementos da Biblioteca, dun ficheiro ou doutra biblioteca, cos seus créditos e actualizacións.
keywords: inserir, ficheiro, biblioteca, librarycraft, elemento, equipamento, bloque desde outro debuxo, wblock, centro de deseño, créditos, atribución, licenza, actualizar, fonte, item.json
from: f6e4e452
---

## Inserir un bloque desde outro debuxo

1. Escriba `I` e prema {{key:Enter}}, ou prema {{ui:Inserir}} no grupo Bloques.
2. A liña de comandos na parte inferior da xanela pregunta `Enter block name or [File/Library]`. Escriba alí `F` e prema {{key:Enter}}.
3. Escolla o DWG ou DXF deste computador. Lese aquí; non se abre, e non se envía nada.
4. No diálogo {{ui:Inserir desde}}, escolla un bloque da lista (escriba en {{ui:Filtrar bloques}} para atopalo), ou manteña {{ui:O debuxo completo}}. Prema {{ui:Inserir}}.
5. Faga clic onde debe ir e cubra os atributos que pida.

Tamén pode empezar desde o panel {{ui:Bloques}}: escriba `F` na súa caixa {{ui:Filtrar bloques}} e prema {{key:Enter}}, ou escriba algo que ningún bloque coincida e prema {{ui:Desde un ficheiro…}}. `L` e {{ui:Biblioteca…}} abren a biblioteca do mesmo xeito. Antes da versión 0.10.1, unha letra escrita en {{ui:Filtrar bloques}} só buscaba nos bloques deste debuxo e respondía «No block matches the filter.»

Para ter a man un debuxo dos seus propios bloques, prema {{ui:Engadir un debuxo}} baixo {{ui:Bibliotecas}} no panel {{ui:Bloques}} e escolla o DWG ou DXF. Os seus bloques aparecen listados con imaxes; faga clic nun para colocalo.

O debuxo completo entra como un só bloque co nome do ficheiro. Os bloques dentro do bloque que escolleu tamén entran. As capas que usan engádense a este debuxo.

Se o outro debuxo está en outras unidades (polgadas e milímetros, por exemplo), CadCraft escala a referencia para que coincida e indícao no historial.

### Cando un nome xa está en uso

Se este debuxo xa ten un bloque co mesmo nome, CadCraft pregunta:

- {{ui:Manter os existentes}} usa o bloque deste debuxo con ese nome.
- {{ui:Renomear}} trae o novo como `Name (2)`.

Toda a inserción é un só paso: {{key:Mod+Z}} retira de novo a referencia e as definicións copiadas.

## Abrir a biblioteca

Prema {{ui:Biblioteca…}} no panel {{ui:Bloques}}, ou {{ui:Biblioteca}} no grupo Bloques, ou escriba `LIB`. Na indicación `INSERT`, `L` tamén a abre.

A biblioteca ten catro fontes, en lapelas:

- {{ui:Biblioteca}}: a biblioteca de CadCraft. Busque por nome, fabricante ou modelo, e filtre por categoría.
- {{ui:Ficheiros…}}: un ficheiro de elemento (`item.json`) de calquera biblioteca, ou un debuxo, unha folla de cálculo ou un modelo 3D cos que facer elementos: un DWG ou DXF (cada bloque convértese nun elemento), un CSV con columnas de nome e tamaño, ou un modelo glTF ou OBJ. Non se envía nada.
- {{ui:Estándar}}: perfís de aceiro (como seccións, alzados ou elementos 3D) e pezas normalizadas como parafusos, porcas e rodamentos, feitas aquí a partir de táboas publicadas. Vexa [Colocar perfís de aceiro e pezas normalizadas](topic:steel-and-standard-parts).
- {{ui:Outras fontes}}: outras bibliotecas que responden do mesmo xeito que Biblioteca. Engada o seu enderezo unha vez; este navegador lémbrao.

Cada tarxeta mostra unha vista previa, o nome, o fabricante e o modelo, a licenza e a versión. Un elemento retirado márcase con {{ui:Retirado}} e o motivo; CadCraft pregunta antes de colocar un.

## Colocar un elemento

1. Prema {{ui:Colocar}} nunha tarxeta.
2. Faga clic onde vai o elemento. Escriba antes `R` para xiralo, ou `S` para escalalo.
3. En `Enter Item number (CC-ITEM)`, prema {{key:Enter}} para o seguinte número libre, ou escriba o seu.

O elemento convértese nun bloque chamado `LIB_<name>_v<version>`, debuxado nas unidades deste debuxo. Se o debuxo non ten unidades, o elemento entra en milímetros e o historial indícao; fixe antes {{ui:Unidades}} no panel dereito.

Os seus datos viaxan como atributos invisibles: o id e a versión do elemento, a licenza e a atribución, o fabricante, o modelo, a categoría e os tamaños. Vexa [Atributos de bloque](topic:attributes).

## Elementos no seu idioma

Un elemento pode levar o seu nome e descrición noutros idiomas. Cando os ten no idioma ao que está configurado CadCraft (Configuración › Xeral › Idioma), a tarxeta e o nome do elemento do bloque colocado usan esas versións. O propio bloque conserva un nome feito a partir do nome do elemento, así que un debuxo ten un bloque por elemento, sexa cal sexa o idioma que o colocou.

## Buscar actualizacións

1. Abra a biblioteca.
2. Prema {{ui:Buscar actualizacións}}.

Cada elemento da biblioteca do debuxo aparece listado cos seus números de elemento e se está ao día, ten unha versión máis nova (e o que cambiou), ou foi retirado. Prema {{ui:Actualizar}} nunha fila, ou {{ui:Actualizar todo}}. Cada referencia pasa ao bloque da nova versión e conserva o seu número de elemento, cantidade, lugar, ángulo e capa. {{key:Mod+Z}} desfai unha actualización.

## Acreditar o que usou

Prema {{ui:Créditos da biblioteca}}. Cada elemento aparece listado coa súa liña de atribución e licenza.

- {{ui:Copiar a atribución}} copia a liña dun elemento; {{ui:Copiar todo}} copia todas as liñas.
- {{ui:Descargar CSV}} garda a lista cos números de elemento, fabricantes, modelos, licenzas e atribucións. Ábrese en calquera folla de cálculo.

Licenzas como CC BY piden que acredite ao autor onde use o traballo. Coloque as liñas no debuxo, no prego de condicións ou nas notas do proxecto.

## Símbolos e activos

A Biblioteca ten tres tipos de elemento: Símbolos (convencións de debuxo, 2D), Tipos (de que se compón un elemento) e Activos (obxectos físicos). Na lapela {{ui:Biblioteca}}, a lista {{ui:Tipo de elemento}} mostra Símbolos e activos xuntos, só Símbolos, ou só Activos. Os tipos son o que se constrúe un proxecto de BimCraft, así que CadCraft non os lista.

## Iniciar sesión na biblioteca

Prema {{ui:Iniciar sesión na biblioteca}}. Abre unha pequena xanela no sitio; unha vez que inicie sesión alí, CadCraft pode mostrar os elementos do seu equipo e rexistrar o que coloca, para que se entere cando cambia un elemento que usou. A sesión dura nesta lapela do navegador. Revóguea en calquera momento desde a páxina de seguranza da súa conta.

## Gardar os seus obxectos en Os meus obxectos

{{ui:Os meus obxectos}} é unha lista privada da Biblioteca que só vostede ve. Non está na biblioteca pública, non aparece na busca e non se mostra ao seu equipo, e segue á súa conta en cada computador onde inicie sesión na biblioteca.

1. No panel da Biblioteca, prema {{ui:Ficheiros…}} e lea un ficheiro.
2. No elemento que quere volver usar, prema {{ui:Gardar nos meus obxectos}}.
3. Máis tarde, prema {{ui:Os meus obxectos}} e prema {{ui:Colocar}}. Colócase como calquera elemento da biblioteca, e {{ui:Buscar actualizacións}} cóbreo.
4. {{ui:Eliminar de Os meus obxectos}} sácao da lista. As copias xa colocadas en debuxos quedan.

Cómpre ter sesión iniciada na biblioteca. Ler un ficheiro non envía nada; gardar un elemento envía só ese elemento á súa conta.

:::note
Os meus obxectos está en proba e pode que aínda non estea aberto para a súa conta. Se di «Os meus obxectos aínda non está aberto para esta conta», aínda pode colocar elementos dos seus propios ficheiros con {{ui:Ficheiros…}}.
:::

## Erros comúns

- **«Making items from IFC types is in BimCraft.»** Os ficheiros IFC e de familia léense na aplicación BimCraft. Faga alí o elemento ou na Biblioteca, e despois use o seu `item.json` aquí.
- **«The library could not be reached.»** Está sen conexión, ou a biblioteca está caída. Os elementos que xa están no debuxo non se ven afectados.
- **Un elemento é demasiado grande ou demasiado pequeno.** As unidades do debuxo están mal ou sen fixar. Desfaga, fixe {{ui:Unidades}} e colóqueo de novo.
