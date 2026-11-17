---
title: Blocos dinâmicos
summary: O que o CadCraft faz com blocos dinâmicos em um DWG: eles mantêm seus nomes verdadeiros, mostram o estado em que foram salvos, alternam estados de visibilidade, mostram seus outros valores e continuam dinâmicos ao serem salvos.
keywords: bloco dinâmico, blocos dinâmicos, visibilidade, estado de visibilidade, espelhar, esticar, pesquisa, parâmetros, personalizado, propriedades do bloco, blocos *u, dinâmico
from: 26b6aa80
---

## O que funciona

Um DWG feito com blocos dinâmicos abre com eles funcionando até este ponto:

- **Os nomes verdadeiros.** Um bloco dinâmico aparece no painel {{ui:Blocks}} com o próprio nome ("Tomada", "Pia"), e não como um bloco sem nome `*U`.
- **O estado em que foram salvos.** Cada referência mostra exatamente o que o outro programa mostrava: o estado de visibilidade em que foi definida, esticada ou espelhada como foi salva.
- **Alternar o estado de visibilidade.** Selecione uma referência (ou várias do mesmo bloco), abra {{ui:Properties}} e, na seção {{ui:Custom}}, escolha outro estado na lista {{ui:Visibility}}. A referência mostra esse estado imediatamente, e também seus atributos: os que o estado oculta desaparecem, e os que ele mostra aparecem com seus valores. Uma referência mantém todos os valores, então nada volta vazio; {{ui:Properties}} lista os ocultos marcados como "oculto". {{key:Mod+Z}} restaura o estado anterior em uma única etapa.
- **Grips.** Um bloco dinâmico selecionado mostra os próprios grips onde estão os seus parâmetros: um pequeno triângulo para o estado de visibilidade (clique nele para ver a lista de estados), setas nas extremidades de uma distância, uma seta dupla para um espelhamento. Hoje, apenas o grip de visibilidade atua; os outros informam isso na barra de status.
- **Os outros valores, somente leitura.** Abaixo da lista de visibilidade, {{ui:Custom}} também mostra as distâncias, os ângulos de alinhamento, os estados de espelhamento e os pontos do bloco como estão no desenho.
- **Editar os estados de visibilidade.** Abra o bloco com {{cmd:BEDIT}}: o editor mostra um estado, indicado na barra acima do desenho (escolha outro ali). Digite {{cmd:BVSTATE}} para alternar, adicionar (ocultando tudo, mostrando tudo ou mantendo o que está visível), renomear ou excluir um estado; {{cmd:BVHIDE}} oculta os objetos selecionados no estado visível; {{cmd:BVSHOW}} mostra os ocultos esmaecidos para que você clique nos que deseja trazer de volta. Salve o bloco: as referências definidas para um estado renomeado mantêm esse estado com o novo nome, e as definidas para um estado excluído mostram o primeiro estado.
- **Continuam dinâmicos.** Salvos como DWG na versão em que o desenho foi aberto, os blocos continuam dinâmicos, com o estado que você escolheu: o outro programa os abre como os mesmos blocos dinâmicos. Os estados de visibilidade que você editou também são salvos: os novos nomes, os estados que você adicionou e o que cada um mostra.

## O que é somente leitura, ou ainda não existe

| Ainda não existe | Em vez disso, hoje |
|---|---|
| Alterar distâncias, ângulos ou espelhamentos (ações de esticar, mover, espelhar) | Aparecem somente leitura em {{ui:Custom}}; edite no programa que criou o bloco. |
| Parâmetros de pesquisa, XY, rotação e polares | Ainda não são lidos: a referência aparece como foi salva. |
| Arrastar os grips de distância, espelhamento e ponto | Eles mostram onde estão os parâmetros; o grip de visibilidade e a lista {{ui:Visibility}} em Propriedades alternam os estados. |
| Criar blocos dinâmicos (adicionar parâmetros, ou estados de visibilidade a um bloco que não os tem) | Os blocos que você cria no CadCraft são blocos comuns; {{cmd:BPARAMETER}} informa isso. |
| Adicionar ou apagar objetos de um bloco com estados de visibilidade no editor de blocos | O bloco então é salvo como um bloco comum (o editor informa isso ao fechar). |
| Mantê-los dinâmicos em outra versão de DWG ou em DXF | São salvos como blocos comuns mostrando o estado que você escolheu, e o salvamento informa isso. |

:::note
Mover ou alterar objetos em {{cmd:BEDIT}} mantém um bloco com estados de visibilidade dinâmico. Um bloco sem estados, ou cujos objetos foram adicionados ou apagados no editor, torna-se um bloco comum.
:::
