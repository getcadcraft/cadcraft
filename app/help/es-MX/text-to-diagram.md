---
title: Dibujar un diagrama a partir de texto
summary: Pegue un diagrama de flujo Mermaid, un diagrama de componentes PlantUML, D2 o una lista origen-destino y CadCraft dispone bloques y conectores que puede editar como cualquier otro objeto.
keywords: diagrama, diagrama de flujo, mermaid, plantuml, d2, origen destino, lista origen-destino, diagrama de bloques, conectores, texto a diagrama, DIAGRAM, TEXTDIAGRAM, diagrama de sistema, diagrama de cableado, tuberías, csv
from: 7b8c0b97
---

Escriba {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Se abre un cuadro: pegue el texto, elija {{ui:Dibujar}}, haga clic en la esquina superior izquierda del diagrama e indique la altura del texto. CadCraft lee el texto, dispone los bloques en capas con conectores en ángulo recto y los dibuja en una capa llamada `Diagram`. Los objetos nuevos quedan seleccionados, así que puede moverlos de inmediato. Son objetos comunes: cambie el texto de un bloque con {{cmd:TEXTEDIT}}, estire un conector con sus tiradores, borre un bloque, agregue sus propias líneas. Un solo {{cmd:UNDO}} quita todo el diagrama.

En la línea de comandos, sin el cuadro, el texto puede ir en una línea con `;` entre instrucciones: `flowchart LR; A[Bomba] --> B[Tanque]`.

## Qué lee

| Texto | Qué se lee |
|---|---|
| **Mermaid** `flowchart` o `graph` con `TD`, `TB`, `BT`, `LR` o `RL` | `A`, `A[texto]`, `A(texto)`, `A([texto])`, `A{texto}` (una decisión, dibujada como rombo), texto entre comillas, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, una etiqueta como `-->|texto|` o `-- texto -->`, cadenas `A --> B --> C`, grupos `A & B --> C`, `<br/>` para una línea nueva, comentarios `%%` |
| **PlantUML** entre `@startuml` y `@enduml` (componentes y despliegue) | `[Componente]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` y otros con nombres `as`, `A --> B : etiqueta`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: etiqueta`, `a <- b`, `a <-> b`, `a -- b`, cadenas, `a: Etiqueta`, `direction: right`, nombres entre comillas, comentarios `#` |
| **Una lista origen-destino** (una tabla pegada como texto o CSV) | columnas `from`, `to` y, si quiere, `label` y `type` (`dashed` dibuja un conector discontinuo), en cualquier orden, separadas por comas, punto y coma o tabuladores; sin línea de encabezado las tres primeras columnas son origen, destino y etiqueta |

Todo lo demás en una línea (estilos, cuadros `subgraph`, notas, diagramas de secuencia) se omite, y la línea de comandos dice cuántas líneas se omitieron. Un diagrama tiene como máximo 400 bloques y 1200 conectores.

## Cómo se dispone

Los bloques van en capas según los conectores (un conector que regresa se dibuja hacia arriba), ordenados para reducir cruces, con conectores en ángulo recto que salen por abajo de un bloque y entran por arriba del siguiente; `LR` y `RL` convierten las capas en columnas. La altura de texto que indique fija el tamaño de todo. Los símbolos unifilares eléctricos y de tuberías aún no se usan: cada bloque es un rectángulo, un rombo o un bloque redondeado.

Los asistentes de IA pueden hacer lo mismo con la herramienta `diagram_from_text` de la ventana.
