---
title: Defina a fonte e o tamanho do texto com estilos de texto
summary: Crie estilos de texto nomeados com fonte, altura, largura e inclinação, defina um como atual para novos textos, e altere um estilo para mudar todo o texto que o usa.
keywords: estilo de texto, estilo, STYLE, ST, TEXTSTYLE, -STYLE, fonte, altura do texto, fator de largura, oblíquo, inclinação, alterar fonte, estilo padrão, aplicar estilo, DDSTYLE
from: bd5a4883
---

## O que você vai fazer

Criar um estilo de texto chamado `Notes` com sua própria fonte e altura, usá-lo em novos textos e, depois, alterar o estilo para que todas as notas que o usam mudem de uma vez.

## Passos

1. Digite {{cmd:STYLE}} (`ST`) e pressione {{key:Enter}}, ou clique em {{ui:Estilo de texto}} na barra {{ui:Desenhar}}. A caixa {{ui:Estilo de texto}} lista os estilos do desenho. Todo desenho tem `Standard`.
2. Clique em {{ui:Novo…}}, digite `Notes` como nome do novo estilo e clique em {{ui:OK}}. A linha de status diz "Estilo de texto Notes criado e definido como atual."
3. Em {{ui:Fonte}}, escolha ou digite o nome de uma fonte. Defina {{ui:Altura (0 = perguntar sempre)}} como um número, como `2.5`, para que cada novo texto tenha essa altura. Deixe em `0` para ser perguntado a cada vez.
4. Defina {{ui:Fator de largura}} e {{ui:Ângulo de inclinação (°)}} se quiser letras mais estreitas, mais largas ou inclinadas. A linha de exemplo mostra o resultado.
5. Clique em {{ui:Fechar}}. Desenhe texto com {{cmd:TEXT}} ou {{cmd:MTEXT}}: o novo texto usa o estilo atual.
6. Para usar um estilo que você já criou, abra a caixa de novo, selecione-o na lista e clique em {{ui:Definir como atual}}.
7. Para aplicar um estilo a um texto já desenhado, selecione o texto, abra a caixa, escolha o estilo e clique em {{ui:Aplicar ao texto selecionado}}.

## Alterar um estilo depois

Altere a fonte, a altura, a largura ou a inclinação de um estilo na caixa e todo texto que o usa acompanha, em uma única etapa de desfazer ({{key:Mod+Z}}). A linha de status informa quantos textos acompanharam.

## Observações

- {{ui:Excluir}} recusa `Standard` e um estilo que ainda é usado por algum texto: altere esse texto para outro estilo antes.
- Os estilos são salvos na tabela STYLE do desenho, então arquivos DXF e DWG os mantêm.
- Na linha de comando, `-STYLE` faz o mesmo com opções (Atual, Novo, Fonte, Altura, Largura, Oblíquo, Excluir, Lista).
- Uma fonte que não está instalada no computador que abre o desenho é mostrada com outra aparência.
