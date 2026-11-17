---
title: Desenhar um diagrama a partir de texto
summary: Cole um fluxograma Mermaid, um diagrama de componentes PlantUML, D2, uma lista de origem e destino ou XML do draw.io, e o CadCraft organiza blocos e conectores que você pode editar como qualquer outro objeto.
keywords: draw.io, drawio, diagrams.net, mxfile, xml, modelo local, diagrama, fluxograma, mermaid, plantuml, d2, de para, lista de origem e destino, diagrama de blocos, conectores, texto para diagrama, DIAGRAM, TEXTDIAGRAM, diagrama de sistema, diagrama de fiação, tubulação, csv
from: b26af54b
---

Digite {{cmd:DIAGRAM}} (`TEXTDIAGRAM`, `T2D`). Uma caixa é aberta: cole o texto, escolha {{ui:Desenhar}}, clique no canto superior esquerdo do diagrama e informe a altura do texto. O CadCraft lê o texto, organiza os blocos em camadas com conectores em ângulo reto e os desenha em uma camada chamada `Diagram`. Os novos objetos ficam selecionados, então você pode movê-los imediatamente. Eles são objetos comuns: altere o texto de um bloco com {{cmd:TEXTEDIT}}, estique um conector pelos seus grips, apague um bloco, acrescente suas próprias linhas. Um {{cmd:UNDO}} remove o diagrama inteiro.

Na linha de comando, sem a caixa, o texto pode ser uma única linha com `;` entre as instruções: `flowchart LR; A[Pump] --> B[Tank]`.

## O que é lido

| Texto | O que é lido |
|---|---|
| **Mermaid** `flowchart` ou `graph` com `TD`, `TB`, `BT`, `LR` ou `RL` | `A`, `A[text]`, `A(text)`, `A([text])`, `A{text}` (uma decisão, desenhada como losango), texto entre aspas, `-->`, `---`, `-.->`, `==>`, `--x`, `<-->`, um rótulo como `-->|text|` ou `-- text -->`, cadeias `A --> B --> C`, grupos `A & B --> C`, `<br/>` para uma nova linha, comentários `%%` |
| **PlantUML** entre `@startuml` e `@enduml` (componente e implantação) | `[Component]`, `component`, `node`, `database`, `cloud`, `actor`, `rectangle` e outros, com nomes `as`, `A --> B : label`, `->`, `..>`, `--`, `left to right direction` |
| **D2** | `a -> b: label`, `a <- b`, `a <-> b`, `a -- b`, cadeias, `a: Label`, `direction: right`, nomes entre aspas, comentários `#` |
| **Uma lista de origem e destino** (uma tabela colada como texto ou CSV) | colunas `from`, `to` e, opcionalmente, `label` e `type` (`dashed` desenha um conector tracejado), em qualquer ordem, separadas por vírgulas, ponto e vírgula ou tabulações; sem linha de cabeçalho, as três primeiras colunas são from, to, label |

| **XML do draw.io** (o texto de um arquivo `.drawio`, `<mxfile>` ou `<mxGraphModel>`) | caixas, caixas arredondadas, elipses, decisões em losango e texto simples; caixas de contêiner e de raias (desenhadas tracejadas com o título); conectores com seus pontos intermediários, pontas de seta (`endArrow`, `startArrow`) e `dashed=1`; rótulos HTML viram texto simples, `<UserObject label>` e `<object label>` funcionam |

Qualquer outra coisa em uma linha (estilos, notas, quadros de laço) é ignorada, e a linha de comando informa quantas linhas foram ignoradas. Um diagrama tem no máximo 400 blocos e 1200 conectores.

## O XML do draw.io mantém as posições

As outras linguagens dizem o que se conecta a quê, então o CadCraft as organiza. O XML do draw.io já informa onde está cada coisa, então o CadCraft mantém isso: cada bloco fica onde o arquivo o coloca, em escala para que uma fonte de 12 pixels vire a altura de texto informada (uma caixa de 120 por 60 pixels fica com 60 por 30 unidades de desenho na altura 6), e o canto superior esquerdo do diagrama vai para o canto em que você clicar. Os conectores vão da borda de um bloco até a borda do próximo, passando pelos seus pontos intermediários; um conector com `orthogonalEdgeStyle` e sem pontos intermediários recebe uma curva em ângulo reto.

O salvamento padrão do draw.io é compactado. A caixa e a linha de comando o abrem para você; uma ferramenta de assistente em uma janela sem fluxo de compactação informa isso, e `File › Export as › XML` com *Compressed* desmarcado gera XML simples. Imagens, conectores com uma ponta solta e segundas páginas são ignorados e contados.

## Escrever com um modelo no seu computador

Um modelo local (Ollama, LM Studio, llama.cpp, Jan) pode escrever o XML ou o texto Mermaid a partir do conteúdo de um PDF ou de um SVG, e o resultado entra pela mesma caixa, ou vai direto para o desenho quando o modelo está conectado como assistente: `diagram_from_text` aceita `format` `drawio`. Modelos pequenos cometem mais erros no XML do que no Mermaid ou em uma lista de origem e destino, então um primeiro teste com Mermaid sai mais barato; o que o leitor não consegue usar é ignorado e contado, não adivinhado. Veja Conecte sua IA para as receitas de modelos.

## Como é organizado

Os blocos vão em camadas seguindo os conectores (um conector que volta é desenhado para cima), ordenados para reduzir cruzamentos, com conectores em ângulo reto que saem da base de um bloco e entram no topo do próximo; `LR` e `RL` transformam as camadas em colunas. A altura de texto informada define o tamanho de tudo.
## Subgrafos e diagramas de sequência

- Um `subgraph name [Title]` … `end` do Mermaid desenha uma caixa tracejada com seu título em volta dos blocos; subgrafos podem ser aninhados. O layout não mantém outros blocos fora de uma caixa, então mova um bloco solto pelos seus grips.
- Um `sequenceDiagram` do Mermaid, ou texto PlantUML com linhas `participant` e mensagens `->`, é desenhado como blocos no topo, uma linha de vida tracejada sob cada um e uma linha por mensagem. `-->` e `-->>` são tracejadas, `->>` e `-)` têm ponta de seta, `autonumber` numera as mensagens, e uma mensagem para si mesmo forma um laço. Notas e quadros `loop` / `alt` são ignorados.

## Símbolos para diagramas de linha única e de tubulação

Um bloco pode ser um símbolo desenhado, com seu nome embaixo, em vez de uma caixa. Dê o nome do símbolo no texto:

| Texto | Como |
|---|---|
| Mermaid | `P1[Feed pump]:::pump-cf` ou uma linha `class P1 pump-cf` |
| D2 | `P1.shape: pump-cf` ou `P1: Feed pump { shape: pump-cf }` |
| PlantUML | `component P1 <<pump-cf>>` |
| Uma lista de origem e destino | colunas `from_symbol` e `to_symbol` |

Os nomes são os símbolos P&ID (`pump-cf`, `tank`, `gate`, `ball`, `exch-shell`, `inst-field` e o restante da biblioteca P&ID) e o conjunto Elétrico (`contact.no`, `breaker`, `motor.3ph`, `transformer`, `lamp` e assim por diante). Um nome que dois conjuntos têm em comum vai para o conjunto P&ID; escreva `pid:` ou `el:` antes para escolher. Um nome que o CadCraft não conhece é ignorado e contado. Os símbolos são desenhados como linhas simples, círculos e arcos na camada `Diagram`, em escala com a altura do texto; não são os blocos com etiquetas dos complementos, então use os comandos P&ID ou Elétrico para um desenho de trabalho.

Assistentes de IA podem fazer o mesmo pela ferramenta `diagram_from_text` na janela.
