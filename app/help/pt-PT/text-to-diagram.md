---
title: Desenhar um diagrama a partir de texto
summary: Cole um fluxograma Mermaid, um diagrama de componentes PlantUML, D2, uma lista de origem-destino ou XML do draw.io, e o CadCraft dispõe blocos e conectores que pode editar como quaisquer outros objetos.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, modelo local, diagrama, fluxograma, mermaid, plantuml, d2, de para, lista de origem-destino, diagrama de blocos, conectores, texto para diagrama, DIAGRAM, TEXTDIAGRAM, diagrama de sistema, diagrama de cablagem, tubagem, csv
from: b26af54b
---

Escreva {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Abre-se uma caixa: cole o texto, escolha {{ui:Desenhar}}, clique no canto superior esquerdo do diagrama e indique a altura do texto. O CadCraft lê o texto, dispõe os blocos em camadas com conectores em ângulo reto e desenha-os numa camada chamada `Diagram`. Os novos objetos ficam selecionados, para os mover de imediato. São objetos simples: altere o texto de um bloco com {{cmd:TEXTEDIT}}, estique um conector pelos respetivos grips (pontos de controlo), apague um bloco, acrescente linhas próprias. Um {{cmd:UNDO}} remove o diagrama inteiro.

Na linha de comandos, sem a caixa, o texto pode ser uma só linha com `;` entre instruções: `flowchart LR; A[Pump] --> B[Tank]`.

## O que é lido

| Texto | O que é lido |
|---|---|
| **Mermaid** `flowchart` ou `graph` com `TD`, `TB`, `BT`, `LR` ou `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (uma decisão, desenhada como losango), texto entre aspas, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, um rótulo como `-->|text|` ou `-- text -->`, cadeias `A --> B --> C`, grupos `A & B --> C`, `<br/>` para uma nova linha, comentários `%%` |
| **PlantUML** entre `@startuml` e `@enduml` (componentes e implementação) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` e outros com nomes `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, cadeias, `a: Label`, `direction: right`, nomes entre aspas, comentários `#` |
| **Uma lista de origem-destino** (uma tabela colada como texto ou CSV) | colunas `from`, `to` e, opcionalmente, `label` e `type` (`dashed` desenha um conector a tracejado), por qualquer ordem, separadas por vírgulas, ponto e vírgula ou tabulações; sem linha de cabeçalho, as três primeiras colunas são from, to, label |

| **XML do draw.io** (o texto de um ficheiro `.drawio`, `<mxfile>` ou `<mxGraphModel>`) | caixas, caixas arredondadas, elipses, decisões em losango e texto simples; caixas de contentor e de raias (desenhadas a tracejado com o título); conectores com os seus pontos intermédios, extremidades de seta (`endArrow`, `startArrow`) e `dashed=1`; os rótulos HTML passam a texto simples, e `<UserObject label>` e `<object label>` funcionam |

Tudo o resto de uma linha (estilos, notas, quadros de ciclo) é ignorado, e a linha de comandos indica quantas linhas foram ignoradas. Um diagrama tem no máximo 400 blocos e 1200 conectores.

## O XML do draw.io mantém as suas posições

As outras linguagens de texto indicam o que liga a quê, por isso o CadCraft as dispõe. O XML do Draw.io já indica onde está cada elemento, pelo que o CadCraft o mantém: cada bloco fica onde o ficheiro o coloca, à escala para que um tipo de letra de 12 píxeis passe a ter a altura de texto que indicar (uma caixa de 120 por 60 píxeis fica com 60 por 30 unidades de desenho à altura 6), e o canto superior esquerdo do diagrama fica no canto em que clicar. Os conectores ligam a aresta de um bloco à aresta do seguinte, passando pelos seus pontos intermédios; um conector com `orthogonalEdgeStyle` e sem pontos intermédios recebe uma curva de ângulo reto.

A gravação predefinida do Draw.io é comprimida. A caixa e a linha de comandos abrem-no por si; uma ferramenta de assistente numa janela sem suporte a fluxos comprimidos indica-o, e `File › Export as › XML` com *Compressed* desmarcado dá XML simples. Imagens, conectores com uma extremidade solta e segundas páginas são ignorados e contados.

## Escrevê-lo com um modelo no seu computador

Um modelo local (Ollama, LM Studio, llama.cpp, Jan) pode escrever o XML ou o texto Mermaid a partir do conteúdo de um PDF ou de um SVG, e o resultado entra pela mesma caixa, ou diretamente no desenho quando o modelo está ligado como assistente: `diagram_from_text` aceita `format` `drawio`. Os modelos pequenos cometem mais erros em XML do que em Mermaid ou numa lista de origem-destino, por isso é mais económico tentar primeiro com Mermaid; o que o leitor não consegue usar é ignorado e contado, não adivinhado. Veja Ligar a sua IA para as receitas de modelos.

## Como é disposto

Os blocos são dispostos em camadas seguindo os conectores (um conector que volta atrás é desenhado para cima), ordenados para reduzir cruzamentos, com conectores em ângulo reto que saem da base de um bloco e entram no topo do seguinte; `LR` e `RL` transformam as camadas em colunas. A altura de texto que indicar define o tamanho de tudo.

## Subgrafos e diagramas de sequência

- Um `subgraph name [Title]` … `end` do Mermaid desenha uma caixa a tracejado com o seu título à volta dos blocos; os subgrafos podem estar aninhados. A disposição não impede que outros blocos entrem numa caixa, por isso mova um bloco fora do lugar pelos seus grips.
- Um `sequenceDiagram` do Mermaid, ou texto PlantUML com linhas `participant` e mensagens `->`, é desenhado como blocos no topo, com uma linha de vida a tracejado sob cada um e uma linha por mensagem. `-->` e `-->>` são a tracejado, `->>` e `-)` têm ponta de seta, `autonumber` numera as mensagens, e uma mensagem para si próprio forma um ciclo. As notas e os quadros `loop` / `alt` são ignorados.

## Símbolos para diagramas de uma linha e de tubagem

Um bloco pode ser um símbolo desenhado, com o seu nome por baixo, em vez de uma caixa. Indique o símbolo no texto:

| Texto | Como |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` ou uma linha `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` ou `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Lista de origem-destino | colunas `from_symbol` e `to_symbol` |

Os nomes são as formas P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` e as restantes da biblioteca P&ID) e o conjunto Elétrico (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` e assim por diante). Um nome que dois conjuntos partilham vai para o conjunto P&ID; escreva `pid:` ou `el:` à frente para escolher. Um nome que o CadCraft não conhece é ignorado e contado. Os símbolos são desenhados como linhas simples, círculos e arcos na camada `Diagram`, à escala da altura de texto; não são os blocos com etiquetas dos suplementos, por isso use os comandos P&ID ou Elétricos para um desenho de trabalho.

Os assistentes de IA podem fazer o mesmo através da ferramenta `diagram_from_text` na janela.
