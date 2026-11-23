---
title: Blocos dinâmicos
summary: O que o CadCraft faz com blocos dinâmicos em um DWG: mantêm seus nomes verdadeiros, mostram o estado em que foram salvos, alternam estados de visibilidade, mostram seus outros valores e continuam dinâmicos ao salvar.
keywords: bloco dinâmico, blocos dinâmicos, visibilidade, estado de visibilidade, inverter, esticar, consulta, parâmetros, personalizado, propriedades do bloco, blocos *u, dinâmico
from: dea2ee7c
---

## O que funciona

Um DWG feito com blocos dinâmicos abre com eles funcionando até aqui:

- **Seus nomes verdadeiros.** Um bloco dinâmico aparece no painel {{ui:Blocks}} com o próprio nome ("Tomada", "Pia"), e não como um bloco `*U` sem nome.
- **O estado em que foram salvos.** Cada referência mostra exatamente o que o outro programa mostrava: o estado de visibilidade em que estava definida, esticada ou invertida como foi salva.
- **Alternar o estado de visibilidade.** Selecione uma referência (ou várias do mesmo bloco), abra {{ui:Properties}} e, na seção {{ui:Custom}}, escolha outro estado na lista {{ui:Visibility}}. A referência mostra esse estado na hora, e seus atributos também: os que o estado oculta desaparecem, os que ele mostra aparecem com seus valores. Uma referência mantém todos os valores, então nada volta vazio; {{ui:Properties}} lista os ocultos marcados como "oculto". {{key:Mod+Z}} devolve o estado anterior em um passo.
- **Pegas.** Um bloco dinâmico selecionado mostra suas próprias pegas onde estão os seus parâmetros: um pequeno triângulo para o estado de visibilidade (clique nele para ver a lista de estados), setas nas extremidades de uma distância, uma seta dupla para uma inversão. Só a pega de visibilidade funciona hoje; as outras informam isso na barra de status.
- **Os outros valores, somente leitura.** Abaixo da lista de visibilidade, {{ui:Custom}} também mostra as distâncias, os ângulos de alinhamento, os estados de inversão e os pontos do bloco como o desenho os guarda.
- **Edição dos estados de visibilidade.** Abra o bloco com {{cmd:BEDIT}}: o editor mostra um estado, nomeado na barra acima do desenho (escolha outro ali). Digite {{cmd:BVSTATE}} para trocar, adicionar (ocultando tudo, mostrando tudo ou mantendo o que aparece), renomear ou excluir um estado; {{cmd:BVHIDE}} oculta os objetos selecionados no estado atual; {{cmd:BVSHOW}} mostra os ocultos esmaecidos para que você clique nos que quer trazer de volta. Salve o bloco: referências definidas em um estado renomeado o mantêm com o novo nome, e as definidas em um estado excluído mostram o primeiro estado.
- **Continuam dinâmicos.** Salvo como DWG na versão em que o desenho chegou, o bloco continua dinâmico, com o estado que você escolheu: o outro programa o abre como o mesmo bloco dinâmico. Estados de visibilidade que você editou também são salvos: seus novos nomes, os estados que você adicionou e o que cada um mostra.

## O que é somente leitura, ou ainda não existe

| Ainda não existe | Em vez disso, hoje |
|---|---|
| Alterar distâncias, ângulos ou inversões (ações de esticar, mover, inverter) | Aparecem somente leitura em {{ui:Custom}}; edite no programa que criou o bloco. |
| Parâmetros de consulta, XY, de rotação e polares | Ainda não lidos: a referência aparece como foi salva. |
| Arrastar as pegas de distância, inversão e ponto | Mostram onde estão os parâmetros; a pega de visibilidade e a lista {{ui:Visibility}} em Propriedades trocam os estados. |
| Criar blocos dinâmicos do tipo do outro programa (esticar, inverter, consulta) | Blocos que você cria no CadCraft são blocos simples; {{cmd:BPARAMETER}} informa isso. Seus próprios parâmetros e vários parâmetros de visibilidade estão no gerenciador de Parâmetros (veja "Seus próprios parâmetros e estados de visibilidade" abaixo). |
| Adicionar ou apagar objetos de um bloco com estados de visibilidade no editor de blocos | O bloco é então salvo como bloco simples (o editor avisa ao fechar). |
| Mantê-los dinâmicos em outra versão de DWG ou em DXF | São salvos como blocos simples mostrando o estado que você escolheu, e o salvamento avisa. |

:::note
Mover ou alterar objetos em {{cmd:BEDIT}} mantém um bloco com estados de visibilidade dinâmico. Um bloco sem estados, ou cujos objetos foram adicionados ou apagados no editor, torna-se um bloco simples.
:::

## Seus próprios parâmetros e estados de visibilidade

Um bloco criado no CadCraft pode ter seus próprios parâmetros e **vários** parâmetros de visibilidade, cada um com seus estados. Digite {{cmd:BPARAMS}} (ou `BPM`) para abrir o **gerenciador de Parâmetros** do bloco que você edita em {{cmd:BEDIT}}, do bloco da referência selecionada, ou do bloco que você nomear.

- **Parâmetros**: um nome, um tipo (número, comprimento, ângulo, contagem, sim/não), e um valor ou uma fórmula sobre outros parâmetros (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Comes to}} mostra o resultado. Uma fórmula que não funciona, ou um valor que não cabe no seu tipo (uma contagem de 1.5), é recusada e o gerenciador diz por quê; nada mais muda.
- **Parâmetros de visibilidade**: {{ui:Add visibility parameter}} cria um com um primeiro estado. Cada estado pode ser renomeado, removido (o último permanece) ou receber um número "mostrar quando". Uma fórmula escolhe o estado a partir dos parâmetros (o estado cujo número coincide, senão o estado naquela posição da lista); sem fórmula, cada referência escolhe o seu.
- **Colocar objetos em um estado**: no editor de blocos, selecione os objetos, digite {{cmd:BPARAMS}} e clique em {{ui:Put the selected objects here}} no estado. Objetos que nenhum parâmetro de visibilidade lista sempre aparecem.
- **Esta referência**: iniciado com uma referência selecionada, o gerenciador também mostra os valores e estados próprios dessa referência.

Fora do editor de blocos, cada alteração é um passo de desfazer. No editor de blocos, as alterações são do editor: {{ui:Save block}} as mantém. `-BPARAMS` faz o mesmo na linha de comando.

**No arquivo.** DWG e DXF guardam os parâmetros, quais objetos estão em cada estado e os valores próprios de cada referência, nos registros próprios do CadCraft; ao abrir o arquivo de novo no CadCraft, tudo volta. Outro programa vê cada referência como o bloco com todos os seus objetos, já que um DWG guarda no máximo um parâmetro de visibilidade por bloco do seu próprio tipo. Uma referência que outro programa moveu, ou um bloco cujos objetos ele alterou, volta sem as partes que não batem mais (nada é adivinhado).
