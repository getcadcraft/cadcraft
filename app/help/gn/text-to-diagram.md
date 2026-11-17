---
title: Dibujar un diagrama desde texto
summary: Pegue un diagrama de flujo Mermaid, un diagrama de componentes PlantUML, D2, una lista desde-hasta o XML de draw.io, y CadCraft ordena los bloques y conectores, que usted puede editar como cualquier otro objeto.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, modelo local, diagrama, diagrama de flujo, mermaid, plantuml, d2, desde hasta, lista desde hasta, diagrama de bloques, conectores, texto a diagrama, DIAGRAM, TEXTDIAGRAM, diagrama de sistema, diagrama de cableado, tuberías, csv
from: b26af54b
---

Emoĩ {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Oñeabri peteĩ cuadro: emoĩ pe texto, eiporu {{ui:Dibujar}}, eme'ẽ clic pe ángulo superior izquierdo del diagrama ha emoĩ pe altura del texto. CadCraft oleé pe texto, ordena pe bloque capas-pe, ojapo conector de ángulo recto rehe, ha odibuja `Diagram` héra capa-pe. Pe objeto pyahu oñeselecciona, upévare ikatu eipuru enseguida. Ha'e objeto común: ndaha'éi ojerure jepe: eambia pe texto de un bloque {{cmd:TEXTEDIT}} rupi, eestira un conector sus agarres rupi, eliminá un bloque, ha eagrega ne líneas. Peteĩ {{cmd:UNDO}} oipe'a opa diagrama.

Línea de comando-pe, cuadro ndive ndaha'éi, pe texto ikatu oiko peteĩ línea-pe `;` ndive oñemoĩ mboysyry: `flowchart LR; A[Pump] --> B[Tank]`.

## Mba'e oleeva

| Texto | Mba'e oleeva |
|---|---|
| **Mermaid** `flowchart` térã `graph` ndive `TD`, `TB`, `BT`, `LR` térã `RL` | `A`, `A[texto]`, `A(texto)`, `A([texto])`, `A{texto}` (decisión, odibuja diamante), texto entre comillas, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, etiqueta como `-->|texto|` térã `-- texto -->`, cadenas `A --> B --> C`, grupos `A & B --> C`, `<br/>` línea pyahu-pe, comentarios `%%` |
| **PlantUML** entre `@startuml` ha `@enduml` (componente ha despliegue) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` ha ambue, con nombres `as`, `A --> B : etiqueta`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: etiqueta`, `a <- b`, `a <-> b`, `a -- b`, cadenas, `a: Etiqueta`, `direction: right`, nombres entre comillas, comentarios `#` |
| **Lista desde-hasta** (tabla pegada como texto o CSV) | columnas `from`, `to` ha opcionalmente `label` ha `type` (`dashed` odibuja conector punteado), ojeporu hikuái; separadas por coma, punto y coma térã tabulador; sin línea de encabezado, las tres primeras columnas son from, to, label |

| **draw.io XML** (texto de archivo `.drawio`, `<mxfile>` térã `<mxGraphModel>`) | cuadros, cuadros redondeados, elipses, decisiones rombo ha texto simple; cuadros contenedor y de carriles (odibuja punteado con su título); conectores con sus puntos de paso, puntas de flecha (`endArrow`, `startArrow`) ha `dashed=1`; etiquetas HTML pasan a texto simple, `<UserObject label>` ha `<object label>` oiko |

Ambue mba'e línea-pe (estilos, notas, marcos de bucle) ojepe'a, ha línea de comando oñeñandu cuántas línea oñepe'a. Peteĩ diagrama oguereko 400 bloque como máximo ha 1200 conectores.

## Draw.io XML omantene hendive pe posición

Ambue idioma ndive oñeñandu mbaʼépa oñeʼẽ mbaʼépa, upévare CadCraft oordena. Draw.io XML ya oñeñandu máva oĩ, upévare CadCraft omantene: cada bloque oĩ upe posición archivo-pe, oñemboyke upeicha 12 píxeles fuente oguereko altura del texto ndéve (120 por 60 píxeles cuadro ha 60 por 30 unidad de dibujo altura 6-pe), ha pe diagrama ángulo superior izquierdo oĩ pe esquina eclic-ha. Conectores oho borde de un bloque-gui borde del siguiente-pe, puntos de paso rupive; conector `orthogonalEdgeStyle` ha ndaguereko puntos de paso oguereko peteĩ codo de ángulo recto.

Draw.io pe guardado ojeikuaa comprimido. Cuadro ha línea de comando oabri hese; asistente herramienta ventana-pe sin flujo de compresión oñeñandu, ha `File › Export as › XML` *Compressed* ndojeporãiva ome'ẽ plain XML. Imágenes, conectores sin punta suelta ha segundas páginas oñepe'a ha oñemboguejy cuenta-pe.

## Modelo mba'e-pe ne computadora-pe rehe ojapo

Modelo local (Ollama, LM Studio, llama.cpp, Jan) ikatu ojapo XML térã Mermaid texto PDF térã SVG contenido-gui, ha resultado ojeike cuadro ndive térã diagrama-pe tuichaveʼỹ, modelo asistente-pe mboyveʼỹ conectado: `diagram_from_text` oguereko `format` `drawio`. Modelo chiquitos ojapo mba'e vai XML-pe Mermaid térã lista desde-hasta-pe, upévare Mermaid-pe primera prueba oĩ mboyve; mba'e leéva ndaikatúi oñeipuru oñepe'a ha oñemboguejy, ndaha'éi oñemoĩ hemimbaʼe. Ver Connect your AI modelo receta-kuéra.

## Mboyve oñemoĩ pe diseño

Bloques oho capas-pe conectores rehe oñeʼẽ (conector ojevy ojevy-pe odibuja ho'a jey), oñemoĩ ordenado oñemosẽ mboyve cruce, conectores ángulo recto rehe oho bloque mboyvegui ha siguiente bloque-pe ingreso. `LR` ha `RL` capas columna-pe ojapo. Altura del texto oguereko tamaño opa mba'e-pe.

## Subgrafos ha diagrama de secuencia

- Mermaid `subgraph nombre [Título]` … `end` odibuja cuadro punteado título ndive bloque-kuéra ryepýpe; subgrafos ikatu oñemoĩ ijyvypýpe. Diseño ndoĩri cuadro ndaha'éi ojeporiri, upévare bloque hasy agarres rupi emboguejy.
- Mermaid `sequenceDiagram`, térã PlantUML texto `participant` línea ha `->` mensaje ndive, odibuja bloques pe tope-pe, línea punteada cada uno-pe, ha mensaje sapy'ánga fila-pe. `-->` ha `-->>` punteado; `->>` ha `-)` punta de flecha oguereko, `autonumber` mensaje-kuéra numera, mensaje iñe'ẽ-pe bucle oiko. Notas ha marcos `loop` / `alt` ojepe'a.

## Símbolos para diagrama de línea simple ha tuberías

Bloque ikatu oiko símbolo odibujáva, nombre ipype, cuadro rehe. Nombre pe símbolo texto-pe:

| Texto | Mba'éichapa |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` térã línea `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` térã `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Lista desde-hasta | columnas `from_symbol` ha `to_symbol` |

Nombre-kuéra P&ID símbolo-kuéra (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` ha ambue P&ID biblioteca-pe) ha Electrical set (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` ha ambue) oĩ. Nombre dos set ndive oguereko, P&ID set-pe oho; `pid:` térã `el:` mboyve emoĩ eiporu hag̃ua. CadCraft ndoikuaái nombre ojepe'a ha oñemboguejy. Símbolo-kuéra odibuja línea ndaha'éi tags ndive, círculo ha arco `Diagram` capa-pe, altura del texto-pe ojapo; ndaha'éi complemento-kuéra bloque-kuéra, upévare P&ID térã Electrical comando-kuéra eipuru plano de trabajo-pe.

AI asistente-kuéra ikatu ojapo upéicha `diagram_from_text` herramienta ventana-pe rupive.
