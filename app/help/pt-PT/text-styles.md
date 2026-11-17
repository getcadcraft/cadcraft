---
title: Definir o tipo de letra e o tamanho do texto com estilos de texto
summary: Crie estilos de texto com nome, com tipo de letra, altura, largura e inclinação, defina um como atual para o texto novo, e altere um estilo para alterar todo o texto que o usa.
keywords: estilo de texto, estilo, STYLE, ST, TEXTSTYLE, -STYLE, tipo de letra, altura do texto, fator de largura, oblíquo, inclinação, alterar tipo de letra, estilo predefinido, aplicar estilo, DDSTYLE
from: bd5a4883
---

## O que vai fazer

Crie um estilo de texto chamado `Notes` com o seu próprio tipo de letra e altura, use-o para texto novo e, mais tarde, altere o estilo para que todas as notas que o usam mudem de uma vez.

## Passos

1. Escreva {{cmd:STYLE}} (`ST`) e prima {{key:Enter}}, ou clique em {{ui:Estilo de texto}} na barra de ferramentas {{ui:Desenhar}}. A caixa de diálogo {{ui:Estilo de texto}} lista os estilos do desenho. Todo o desenho tem `Standard`.
2. Clique em {{ui:Novo…}}, escreva `Notes` como nome do novo estilo e clique em {{ui:OK}}. A linha de estado diz «Estilo de texto Notes criado e tornado atual.»
3. Em {{ui:Tipo de letra}}, escolha ou escreva um nome de tipo de letra. Defina {{ui:Altura (0 = perguntar sempre)}} com um número, como `2.5`, para que todo o texto novo tenha essa altura. Deixe em `0` para ser perguntado sempre.
4. Defina {{ui:Fator de largura}} e {{ui:Ângulo de inclinação (°)}} se quiser letras mais estreitas, mais largas ou inclinadas. A linha de exemplo mostra o resultado.
5. Clique em {{ui:Fechar}}. Escreva texto com {{cmd:TEXT}} ou {{cmd:MTEXT}}: o texto novo usa o estilo atual.
6. Para usar um estilo que já criou, abra a caixa de diálogo de novo, escolha-o na lista e clique em {{ui:Tornar atual}}.
7. Para aplicar um estilo a texto já desenhado, selecione o texto, abra a caixa de diálogo, escolha o estilo e clique em {{ui:Aplicar ao texto selecionado}}.

## Alterar um estilo mais tarde

Altere o tipo de letra, a altura, a largura ou a inclinação de um estilo na caixa de diálogo, e todo o texto que o usa acompanha a alteração, num único passo de anulação ({{key:Mod+Z}}). A linha de estado indica quantos textos acompanharam.

## Notas

- {{ui:Eliminar}} recusa `Standard`, e também um estilo que ainda seja usado por texto: altere primeiro esse texto para outro estilo.
- Os estilos são guardados na tabela STYLE do desenho, por isso os ficheiros DXF e DWG os mantêm.
- Na linha de comandos, `-STYLE` faz o mesmo com opções (Current, New, Font, Height, Width, Oblique, Delete, List).
- Um tipo de letra que não está instalado no computador que abre o desenho é mostrado noutro tipo de letra.
