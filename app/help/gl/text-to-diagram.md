---
title: Debuxar un diagrama a partir de texto
summary: Pegue un diagrama de fluxo de Mermaid, un diagrama de compoñentes de PlantUML, D2, unha lista orixe-destino ou XML de draw.io, e CadCraft dispón bloques e conectores que pode editar como calquera outro obxecto.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, modelo local, diagrama, diagrama de fluxo, mermaid, plantuml, d2, orixe destino, lista orixe-destino, diagrama de bloques, conectores, texto a diagrama, DIAGRAM, TEXTDIAGRAM, diagrama de sistema, diagrama de cableado, tubaxe, csv
from: b26af54b
---

Escriba {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Ábrese unha caixa: pegue o texto, escolla {{ui:Debuxar}}, prema na esquina superior esquerda do diagrama e indique a altura do texto. CadCraft lee o texto, dispón os bloques en capas con conectores de ángulo recto e debúxaos nunha capa chamada `Diagram`. Os obxectos novos quedan seleccionados, así que pode movelos de inmediato. Son obxectos normais: cambie o texto dun bloque con {{cmd:TEXTEDIT}}, estire un conector cos seus agarradeiros, borre un bloque ou engada as súas propias liñas. Un {{cmd:UNDO}} quita todo o diagrama.

Na liña de comandos, sen a caixa, o texto pode ser unha soa liña con `;` entre as instrucións: `flowchart LR; A[Pump] --> B[Tank]`.

## Que lee

| Texto | Que se lee |
|---|---|
| **Mermaid** `flowchart` ou `graph` con `TD`, `TB`, `BT`, `LR` ou `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (unha decisión, debuxada como rombo), texto entre aspas, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, unha etiqueta como `-->|text|` ou `-- text -->`, cadeas `A --> B --> C`, grupos `A & B --> C`, `<br/>` para unha liña nova, comentarios `%%` |
| **PlantUML** entre `@startuml` e `@enduml` (compoñente e despregue) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` e outros con nomes `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, cadeas, `a: Label`, `direction: right`, nomes entre aspas, comentarios `#` |
| **Unha lista orixe-destino** (unha táboa pegada como texto ou CSV) | columnas `from`, `to` e, opcionalmente, `label` e `type` (`dashed` debuxa un conector de trazos), en calquera orde, separadas por comas, punto e coma ou tabulacións; sen liña de cabeceira, as tres primeiras columnas son from, to e label |

| **XML de draw.io** (o texto dun ficheiro `.drawio`, `<mxfile>` ou `<mxGraphModel>`) | caixas, caixas redondeadas, elipses, rombos de decisión e texto simple; caixas de contedor e de carrís (debuxadas con trazos co seu título); conectores cos seus puntos intermedios, extremos de frecha (`endArrow`, `startArrow`) e `dashed=1`; as etiquetas HTML pasan a texto simple, e `<UserObject label>` e `<object label>` funcionan |

Calquera outra cousa dunha liña (estilos, notas, marcos de bucle) sáltase, e a liña de comandos indica cantas liñas se saltaron. Un diagrama ten como máximo 400 bloques e 1200 conectores.

## O XML de draw.io conserva as posicións

Os outros formatos indican que se conecta con que, así que CadCraft os dispón. O XML de draw.io xa indica onde está todo, así que CadCraft o conserva: cada bloque queda onde o ficheiro o pon, escalado para que unha fonte de 12 píxeles pase a ser a altura de texto que indique (unha caixa de 120 por 60 píxeles mide 60 por 30 unidades de debuxo á altura 6), e a esquina superior esquerda do diagrama vai á esquina na que prema. Os conectores van desde a beira dun bloque á beira do seguinte, polos seus puntos intermedios; un conector con `orthogonalEdgeStyle` e sen puntos intermedios recibe unha curva de ángulo recto.

O gardado predeterminado de draw.io está comprimido. A caixa e a liña de comandos ábrenno por vostede; unha ferramenta de asistente nunha xanela sen fluxo de compresión di iso, e `File › Export as › XML` con *Compressed* desmarcado dá XML simple. As imaxes, os conectores cun extremo solto e as segundas páxinas sáltanse e cóntanse.

## Escribir co modelo no seu computador

Un modelo local (Ollama, LM Studio, llama.cpp, Jan) pode escribir o XML ou o texto de Mermaid a partir do contido dun PDF ou dun SVG, e o resultado entra pola mesma caixa, ou directamente no debuxo cando o modelo está conectado como asistente: `diagram_from_text` toma `format` `drawio`. Os modelos pequenos cometen máis erros en XML que en Mermaid ou nunha lista orixe-destino, así que é máis barato probar primeiro con Mermaid; o que o lector non pode usar sáltase e cóntase, non se adiviña. Vexa «Conecte a súa IA» para as receitas dos modelos.

## Como se dispón

Os bloques van en capas segundo os conectores (un conector que volve atrás debúxase cara arriba), ordenados para reducir os cruzamentos, con conectores de ángulo recto que saen pola parte inferior dun bloque e entran pola superior do seguinte; `LR` e `RL` converten as capas en columnas. A altura de texto que indique fixa o tamaño de todo.

## Subgrafos e diagramas de secuencia

- Un `subgraph name [Title]` … `end` de Mermaid debuxa unha caixa de trazos co seu título arredor dos seus bloques; os subgrafos poden aniñarse. A disposición non mantén fóra da caixa os outros bloques, así que mova un bloque suelto cos seus agarradeiros.
- Un `sequenceDiagram` de Mermaid, ou texto de PlantUML con liñas `participant` e mensaxes `->`, debúxase como bloques na parte superior, cunha liña de vida de trazos debaixo de cada un e unha fila por mensaxe. `-->` e `-->>` son de trazos, `->>` e `-)` teñen punta de frecha, `autonumber` numera as mensaxes, e unha mensaxe a un mesmo fai un bucle. As notas e os marcos `loop` / `alt` sáltanse.

## Símbolos para diagramas de liña única e de tubaxes

Un bloque pode ser un símbolo debuxado, co seu nome debaixo, en vez dunha caixa. Dea nome ao símbolo no texto:

| Texto | Como |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` ou unha liña `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` ou `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Unha lista orixe-destino | columnas `from_symbol` e `to_symbol` |

Os nomes son os símbolos P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` e o resto da biblioteca P&ID) e o conxunto Electrical (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` e similares). Un nome que dous conxuntos comparten vai ao conxunto P&ID; escriba `pid:` ou `el:` diante para escoller. Un nome que CadCraft non coñece sáltase e cóntase. Os símbolos debúxanse como liñas simples, círculos e arcos na capa `Diagram`, escalados á altura de texto; non son os bloques con etiquetas dos complementos, así que use os comandos P&ID ou Electrical para un debuxo de traballo.

Os asistentes de IA poden facer o mesmo coa ferramenta `diagram_from_text` na xanela.
