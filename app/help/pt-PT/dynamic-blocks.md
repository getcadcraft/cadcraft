---
title: Blocos dinâmicos
summary: O que o CadCraft faz com blocos dinâmicos num DWG: mantêm os seus nomes verdadeiros, mostram o estado em que foram guardados, mudam o estado de visibilidade, mostram os outros valores e continuam dinâmicos ao guardar.
keywords: bloco dinâmico, blocos dinâmicos, visibilidade, estado de visibilidade, inverter, esticar, pesquisa, parâmetros, personalizado, propriedades do bloco, blocos *u, dinâmico
from: 26b6aa80
---

## O que funciona

Um DWG feito com blocos dinâmicos abre-se com eles a funcionar até aqui:

- **Os seus nomes verdadeiros.** Um bloco dinâmico aparece no painel {{ui:Blocos}} com o seu próprio nome («Tomada», «Lava-loiças»), e não como um bloco sem nome `*U`.
- **O estado em que foram guardados.** Cada referência mostra exatamente o que o outro programa mostrava: o estado de visibilidade em que estava definida, esticada ou invertida como foi guardada.
- **Mudar o estado de visibilidade.** Selecione uma referência (ou várias do mesmo bloco), abra as {{ui:Propriedades}} e, na secção {{ui:Personalizado}}, escolha outro estado da lista {{ui:Visibilidade}}. A referência mostra esse estado de imediato, e também os seus atributos: os que o estado oculta desaparecem, e os que mostra aparecem com os respetivos valores. Uma referência mantém todos os valores, por isso nada volta vazio; as {{ui:Propriedades}} listam os ocultos, marcados como « oculto ». {{key:Mod+Z}} repõe o estado antigo num só passo.
- **Grips.** Um bloco dinâmico selecionado mostra os seus próprios grips onde estão os parâmetros: um pequeno triângulo para o estado de visibilidade (clique nele para ver a lista de estados), setas nas extremidades de uma distância, uma seta dupla para uma inversão. Só o grip de visibilidade atua hoje; os outros indicam-no na barra de estado.
- **Os outros valores, só de leitura.** Abaixo da lista de visibilidade, o {{ui:Personalizado}} mostra também as distâncias, ângulos de alinhamento, estados de inversão e pontos do bloco, tal como o desenho os guarda.
- **Edição dos estados de visibilidade.** Abra o bloco com {{cmd:BEDIT}}: o editor mostra um estado, indicado na barra acima do desenho (escolha outro aí). Escreva {{cmd:BVSTATE}} para mudar, acrescentar (ocultando tudo, mostrando tudo ou mantendo o que está visível), mudar o nome ou apagar um estado; {{cmd:BVHIDE}} oculta os objetos selecionados no estado visível; {{cmd:BVSHOW}} mostra os ocultos esbatidos para que possa clicar nos que quer repor. Guarde o bloco: as referências definidas num estado renomeado mantêm-no com o novo nome, e as que estão num estado apagado passam a mostrar o primeiro estado.
- **Continuam dinâmicos.** Guardados como DWG na versão em que o desenho entrou, os blocos mantêm-se dinâmicos, com o estado que escolheu: o outro programa abre-os como os mesmos blocos dinâmicos. Os estados de visibilidade que editou também são guardados: os novos nomes, os estados que acrescentou e o que cada um mostra.

## O que é só de leitura ou ainda não existe

| Ainda não existe | Em vez disso, hoje |
|---|---|
| Alterar distâncias, ângulos ou inversões (ações de esticar, mover, inverter) | São mostrados só de leitura em {{ui:Personalizado}}; edite-os no programa que fez o bloco. |
| Parâmetros de pesquisa, XY, rotação e polares | Ainda não são lidos: a referência mostra-se como foi guardada. |
| Arrastar os grips de distância, inversão e ponto | Mostram onde estão os parâmetros; o grip de visibilidade e a lista {{ui:Visibilidade}} nas Propriedades mudam os estados. |
| Criar blocos dinâmicos (acrescentar parâmetros, ou estados de visibilidade a um bloco que não os tem) | Os blocos criados no CadCraft são blocos simples; {{cmd:BPARAMETER}} indica-o. |
| Acrescentar ou apagar objetos de um bloco com estados de visibilidade no editor de blocos | O bloco é então guardado como bloco simples (o editor indica-o ao fechar). |
| Mantê-los dinâmicos noutra versão de DWG ou em DXF | São guardados como blocos simples que mostram o estado escolhido, e o ato de guardar avisa-o. |

:::note
Mover ou alterar objetos no {{cmd:BEDIT}} mantém um bloco com estados de visibilidade dinâmico. Um bloco sem estados, ou um cujos objetos foram acrescentados ou apagados no editor, passa a bloco simples.
:::
