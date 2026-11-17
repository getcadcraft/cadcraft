---
title: Dibujar un diagrama a partir de texto
summary: Pegue un diagrama de flujo de Mermaid, un diagrama de componentes de PlantUML, D2, una lista de desde-hasta o XML de draw.io, y CadCraft distribuye bloques y conectores que puede editar como cualquier otro objeto.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, modelo local, diagrama, diagrama de flujo, mermaid, plantuml, d2, desde hasta, lista desde-hasta, diagrama de bloques, conectores, texto a diagrama, DIAGRAM, TEXTDIAGRAM, diagrama de sistema, diagrama de cableado, tuberías, csv
from: b26af54b
---

Escriba {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Se abre un cuadro: pegue el texto, elija {{ui:Dibujo}}, haga clic en la esquina superior izquierda del diagrama e indique la altura del texto. CadCraft lee el texto, dispone los bloques en capas con conectores de ángulo recto y los dibuja en una capa llamada `Diagram`. Los objetos nuevos quedan designados, así que puede desplazarlos de inmediato. Son objetos normales: cambie el texto de un bloque con {{cmd:TEXTEDIT}}, estire un conector con sus pinzamientos, borre un bloque o agregue sus propias líneas. Un solo {{cmd:UNDO}} quita todo el diagrama.

En la línea de comandos, sin el cuadro, el texto puede ser una sola línea con `;` entre instrucciones: `flowchart LR; A[Pump] --> B[Tank]`.

## Qué lee

| Texto | Qué se lee |
|---|---|
| **Mermaid** `flowchart` o `graph` con `TD`, `TB`, `BT`, `LR` o `RL` | `A`, `A[texto]`, `A(texto)`, `A([texto])`, `A{texto}` (una decisión, dibujada como rombo), texto entre comillas, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, una etiqueta como `-->|texto|` o `-- texto -->`, cadenas `A --> B --> C`, grupos `A & B --> C`, `<br/>` para una línea nueva, comentarios `%%` |
| **PlantUML** entre `@startuml` y `@enduml` (componentes y despliegue) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` y otros con nombres `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, cadenas, `a: Label`, `direction: right`, nombres entre comillas, comentarios `#` |
| **Una lista de desde-hasta** (una tabla pegada como texto o CSV) | columnas `from`, `to` y, opcionalmente, `label` y `type` (`dashed` dibuja un conector discontinuo), en cualquier orden, separadas por comas, punto y coma o tabuladores; sin línea de encabezado, las tres primeras columnas son from, to, label |

| **XML de draw.io** (el texto de un archivo `.drawio`, `<mxfile>` o `<mxGraphModel>`) | cajas, cajas redondeadas, elipses, rombos de decisión y texto simple; cajas de contenedor y de carriles (dibujadas discontinuas con su título); conectores con sus puntos intermedios, extremos de flecha (`endArrow`, `startArrow`) y `dashed=1`; las etiquetas HTML pasan a texto simple, `<UserObject label>` y `<object label>` funcionan |

Cualquier otra cosa en una línea (estilos, notas, marcos de bucle) se omite, y la línea de comandos indica cuántas líneas se omitieron. Un diagrama tiene como máximo 400 bloques y 1200 conectores.

## El XML de draw.io conserva sus posiciones

Los otros formatos indican qué se conecta con qué, así que CadCraft los distribuye. El XML de draw.io ya indica dónde está todo, así que CadCraft lo conserva: cada bloque queda donde lo pone el archivo, escalado para que una fuente de 12 píxeles tenga la altura de texto que indique (una caja de 120 por 60 píxeles mide 60 por 30 unidades de dibujo con altura 6), y la esquina superior izquierda del diagrama va en la esquina en la que hace clic. Los conectores van desde el borde de un bloque hasta el borde del siguiente, pasando por sus puntos intermedios; un conector con `orthogonalEdgeStyle` y sin puntos intermedios recibe un solo codo de ángulo recto.

El guardado predeterminado de draw.io está comprimido. El cuadro y la línea de comandos lo abren por usted; una herramienta de asistente en una ventana sin flujo de compresión lo indica, y `File › Export as › XML` con *Compressed* desmarcado genera XML simple. Las imágenes, los conectores con un extremo suelto y las segundas páginas se omiten y se cuentan.

## Escribirlo con un modelo en su computadora

Un modelo local (Ollama, LM Studio, llama.cpp, Jan) puede escribir el XML o el texto de Mermaid a partir del contenido de un PDF o de un SVG, y el resultado entra por el mismo cuadro, o directamente en el dibujo cuando el modelo está conectado como asistente: `diagram_from_text` acepta `format` `drawio`. Los modelos pequeños cometen más errores en XML que en Mermaid o en una lista de desde-hasta, así que conviene probar primero con Mermaid; lo que el lector no puede usar se omite y se cuenta, no se adivina. Consulte Conecte su IA para las recetas de modelos.

## Cómo se distribuye

Los bloques van en capas siguiendo los conectores (un conector que da la vuelta se dibuja hacia atrás), ordenados para reducir los cruces, con conectores de ángulo recto que salen por la parte inferior de un bloque y entran por la parte superior del siguiente; `LR` y `RL` convierten las capas en columnas. La altura de texto que indique define el tamaño de todo.
## Subgrafos y diagramas de secuencia

- Un `subgraph name [Title]` de Mermaid … `end` dibuja un cuadro discontinuo con su título alrededor de sus bloques; los subgrafos pueden anidarse. La distribución no impide que otros bloques entren en un cuadro, así que mueva un bloque suelto con sus pinzamientos.
- Un `sequenceDiagram` de Mermaid, o texto de PlantUML con líneas `participant` y mensajes `->`, se dibuja como bloques en la parte superior, con una línea de vida discontinua debajo de cada uno y una fila por mensaje. `-->` y `-->>` son discontinuas, `->>` y `-)` tienen punta de flecha, `autonumber` numera los mensajes, y un mensaje a sí mismo forma un bucle. Las notas y los marcos `loop` / `alt` se omiten.

## Símbolos para diagramas de una línea y de tuberías

Un bloque puede ser un símbolo dibujado, con su nombre debajo, en lugar de una caja. Indique el nombre del símbolo en el texto:

| Texto | Cómo |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` o una línea `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` o `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Una lista de desde-hasta | columnas `from_symbol` y `to_symbol` |

Los nombres son las formas de P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` y el resto de la biblioteca P&ID) y el conjunto Eléctrico (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` y así sucesivamente). Un nombre que comparten dos conjuntos va al conjunto P&ID; escriba `pid:` o `el:` delante para elegir. Un nombre que CadCraft no conoce se omite y se cuenta. Los símbolos se dibujan como líneas, círculos y arcos simples en la capa `Diagram`, escalados a la altura de texto; no son los bloques con etiquetas de los complementos, así que use los comandos P&ID o Eléctrico para un dibujo de trabajo.

Los asistentes de IA pueden hacer lo mismo con la herramienta `diagram_from_text` en la ventana.
