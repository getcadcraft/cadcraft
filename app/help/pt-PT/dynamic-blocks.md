---
title: Blocos dinâmicos
summary: O que o CadCraft faz com os blocos dinâmicos num DWG: mantêm os seus nomes verdadeiros, mostram o estado em que foram guardados, mudam de estado de visibilidade, mostram os seus outros valores e continuam dinâmicos ao serem guardados.
keywords: bloco dinâmico, blocos dinâmicos, visibilidade, estado de visibilidade, inverter, esticar, pesquisa, parâmetros, personalizado, propriedades do bloco, blocos *U, dinâmico
from: dea2ee7c
---

## O que funciona

Um DWG feito com blocos dinâmicos abre com eles a funcionar até este ponto:

- **Os seus nomes verdadeiros.** Um bloco dinâmico aparece no painel {{ui:Blocos}} com o seu próprio nome ("Receptacle", "Sink"), e não como um bloco `*U` sem nome.
- **O estado em que foram guardados.** Cada referência mostra exatamente o que o outro programa mostrava: o estado de visibilidade em que estava definida, esticada ou invertida tal como foi guardada.
- **Mudar o estado de visibilidade.** Selecione uma referência (ou várias do mesmo bloco), abra {{ui:Propriedades}} e, na secção {{ui:Personalizado}}, escolha outro estado na lista {{ui:Visibilidade}}. A referência mostra logo esse estado, e os seus atributos também: os que o estado oculta desaparecem, os que mostra aparecem com os seus valores. Uma referência mantém todos os valores, por isso nada fica vazio; {{ui:Propriedades}} lista os ocultos marcados como "oculto". {{key:Mod+Z}} repõe o estado anterior num único passo.
- **Grips.** Um bloco dinâmico selecionado mostra os seus próprios grips onde estão os seus parâmetros: um pequeno triângulo para o estado de visibilidade (clique para ver a lista de estados), setas nas extremidades de uma distância, uma seta dupla para uma inversão. Só o grip de visibilidade atua por agora; os outros indicam-no na barra de estado.
- **Os outros valores, só de leitura.** Por baixo da lista de visibilidade, {{ui:Personalizado}} mostra também as distâncias, os ângulos de alinhamento, os estados de inversão e os pontos do bloco tal como o desenho os tem.
- **Editar estados de visibilidade.** Abra o bloco com {{cmd:BEDIT}}: o editor mostra um estado, indicado na barra acima do desenho (escolha outro aí). Escreva {{cmd:BVSTATE}} para mudar de estado, acrescentar (ocultando tudo, mostrando tudo ou mantendo o que está visível), mudar o nome ou eliminar um estado; {{cmd:BVHIDE}} oculta os objetos selecionados no estado visível; {{cmd:BVSHOW}} mostra os ocultos em esbatido para que possa clicar nos que quer repor. Guarde o bloco: as referências definidas para um estado renomeado mantêm-no com o novo nome, e as definidas para um estado eliminado mostram o primeiro estado.
- **Continuam dinâmicos.** Guardados em DWG na versão em que o desenho foi aberto, os blocos continuam dinâmicos, com o estado que escolheu: o outro programa abre-os como os mesmos blocos dinâmicos. Os estados de visibilidade que editou também são guardados: os novos nomes, os estados que acrescentou e o que cada um mostra.

## O que é só de leitura, ou ainda não existe

| Ainda não existe | Em alternativa, hoje |
|---|---|
| Alterar distâncias, ângulos ou inversões (ações de esticar, mover, inverter) | Mostram-se só de leitura em {{ui:Personalizado}}; edite-os no programa que criou o bloco. |
| Parâmetros de pesquisa, XY, rotação e polares | Ainda não são lidos: a referência mostra-se como foi guardada. |
| Arrastar os grips de distância, inversão e ponto | Mostram onde estão os parâmetros; o grip de visibilidade e a lista {{ui:Visibilidade}} em Propriedades mudam de estado. |
| Criar blocos dinâmicos do tipo do outro programa (esticar, inverter, pesquisa) | Os blocos que cria no CadCraft são blocos simples; {{cmd:BPARAMETER}} indica-o. Os seus próprios parâmetros e vários parâmetros de visibilidade estão no gestor de Parâmetros (veja "Os seus próprios parâmetros e estados de visibilidade" abaixo). |
| Acrescentar ou apagar objetos de um bloco com estados de visibilidade no editor de blocos | O bloco é então guardado como bloco simples (o editor indica-o ao fechar). |
| Mantê-los dinâmicos noutra versão de DWG ou em DXF | São guardados como blocos simples a mostrar o estado que escolheu, e o guardar indica-o. |

:::note
Mover ou alterar objetos no {{cmd:BEDIT}} mantém um bloco com estados de visibilidade dinâmico. Um bloco sem estados, ou um cujos objetos foram acrescentados ou apagados no editor, torna-se um bloco simples.
:::

## Os seus próprios parâmetros e estados de visibilidade

Um bloco que cria no CadCraft pode ter os seus próprios parâmetros e **vários** parâmetros de visibilidade, cada um com os seus estados. Escreva {{cmd:BPARAMS}} (ou `BPM`) para abrir o **gestor de Parâmetros** do bloco que está a editar no {{cmd:BEDIT}}, do bloco da referência selecionada, ou do bloco que indicar.

- **Parâmetros**: um nome, um tipo (número, comprimento, ângulo, contagem, sim/não) e um valor ou uma fórmula sobre outros parâmetros (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Resulta em}} mostra o resultado. Uma fórmula que não funciona, ou um valor que não corresponde ao seu tipo (uma contagem de 1,5), é recusada e o gestor indica o motivo; nada mais muda.
- **Parâmetros de visibilidade**: {{ui:Adicionar parâmetro de visibilidade}} cria um com um primeiro estado. Cada estado pode ser renomeado, removido (o último fica sempre) ou receber um número "mostra quando". Uma fórmula escolhe o estado a partir dos parâmetros (o estado cujo número corresponde, senão o estado nesse lugar da lista); sem fórmula, cada referência escolhe o seu.
- **Colocar objetos num estado**: no editor de blocos, selecione os objetos, escreva {{cmd:BPARAMS}} e clique em {{ui:Colocar aqui os objetos selecionados}} no estado. Os objetos que nenhum parâmetro de visibilidade indica estão sempre visíveis.
- **Esta referência**: iniciado numa referência selecionada, o gestor mostra também os valores e estados próprios dessa referência.

Fora do editor de blocos, cada alteração é um passo de anular. No editor de blocos as alterações são do editor: {{ui:Guardar o bloco}} mantém-nas. `-BPARAMS` pergunta o mesmo na linha de comandos.

**No ficheiro.** O DWG e o DXF guardam os parâmetros, os objetos que estão em cada estado e os valores próprios de cada referência, nos registos próprios do CadCraft; ao reabrir o ficheiro no CadCraft, tudo volta. Outro programa vê cada referência como o bloco com todos os seus objetos, já que um DWG tem no máximo um parâmetro de visibilidade por bloco do seu próprio tipo. Uma referência que outro programa moveu, ou um bloco cujos objetos ele alterou, volta sem as partes que deixaram de coincidir (nada é adivinhado).
