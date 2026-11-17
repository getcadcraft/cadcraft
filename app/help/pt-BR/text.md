---
title: Adicionar texto e rótulos
summary: Coloque rótulos de ambientes com texto de uma linha, escreva notas com quebra de linha usando texto de parágrafo digitado no lugar e edite o texto depois.
keywords: texto, dtext, mtext, mleader, multileader, chamada, revcloud, nuvem de revisão, nuvem, localizar, substituir, localizar e substituir, parágrafo, quebra, espaçamento de linha, rótulo, nota, anotação, altura, justificar, textmask, máscara de fundo, máscara, wipeout, rotação, editar texto, ddedit, textedit, fonte
from: 4b76be99
---

## O que você vai criar

Dois rótulos de ambientes, centralizados em seus ambientes, uma nota que quebra de linha conforme a largura definida e, depois, uma correção em um dos rótulos.

## Altura do texto e escala do desenho

A altura do texto está em unidades de desenho. Em um desenho em milímetros que será plotado em 1:50, um texto com 2.5 mm de altura no papel precisa ter 2.5 × 50 = 125 unidades de altura no modelo. Em uma guia de folha, onde você desenha em unidades de papel, 2.5 ali significa 2.5 mm no papel.

## Colocar um rótulo centralizado

1. Digite `DT` e pressione {{key:Enter}} (ou clique em {{ui:Texto}} na barra de ferramentas). O prompt exibe `Specify start point of text [Justify]:`.
2. Digite `J` e pressione {{key:Enter}}.
3. Em `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:`, digite `MC` e pressione {{key:Enter}}.
4. Em `Specify insertion point of text`, clique no meio de um ambiente.
5. Em `Specify height`, digite `250` e pressione {{key:Enter}}.
6. Em `Specify rotation angle of text <0>`, pressione {{key:Enter}}.
7. Em `Enter text`, digite `COZINHA` e pressione {{key:Enter}}.

O rótulo aparece, centralizado no ponto onde você clicou.

8. Pressione {{key:Enter}} no prompt `Enter text` vazio para encerrar o comando.

## Escrever uma nota com quebra de linha

O texto de parágrafo ({{cmd:MTEXT}}) quebra as linhas conforme uma largura e é digitado diretamente no desenho.

1. Digite `T` e pressione {{key:Enter}}, ou clique em {{ui:Parágrafo}} na barra de ferramentas.
2. Em `Specify first corner`, clique onde fica o canto superior esquerdo da nota.
3. Para mudar a altura antes, digite `H`, pressione {{key:Enter}}, digite `250` e pressione {{key:Enter}}.
4. Em `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`, clique à direita do primeiro canto. A distância horizontal é a largura em que o texto quebra; até onde você clica para baixo não limita a quebra.
5. Abre-se uma caixa sobre o desenho com o cursor dentro dela. Digite `TODAS AS COTAS ESTÃO EM MILÍMETROS, SALVO INDICAÇÃO EM CONTRÁRIO`. As palavras quebram na largura à medida que você digita.
6. Pressione {{key:Enter}} para iniciar um novo parágrafo e digite `VERIFICAR NO LOCAL`.
7. Pressione {{key:Mod+Enter}}, clique em {{ui:OK}} ou clique em qualquer lugar fora da caixa. A nota passa a ser um único objeto.

A barra acima da caixa altera {{ui:Altura}}, {{ui:Espaçamento de linha}} (1 é normal, 1.5 é metade a mais), {{ui:Largura}} (0 = sem quebra) e {{ui:Justificar}} enquanto você digita. {{key:Esc}} ou {{ui:Cancelar}} fecha a caixa sem adicionar nada.

As opções no segundo canto: `H` altura, `J` justificação (`TL` superior esquerdo … `BR` inferior direito: o canto ou o meio da caixa que permanece fixo), `L` espaçamento de linha, `R` rotação, `W` uma largura digitada em vez do segundo canto.

:::note
Enquanto a caixa estiver aberta, {{key:Space}} digita um espaço e {{key:Enter}} inicia um novo parágrafo. Um DWG salvo mantém o texto de parágrafo como MTEXT; um DXF R12 não tem texto de parágrafo, então cada linha é salva como um texto próprio.
:::

### Várias linhas simples

{{cmd:TEXT}} (`DT`) pede uma linha de cada vez: cada {{key:Enter}} inicia a linha seguinte, 1.667 vez a altura do texto mais abaixo, e cada linha é um objeto próprio. Pressione {{key:Enter}} em uma linha vazia para terminar.

## Opções de justificação

| Opção | O ponto que você clica é |
|---|---|
| Esquerda (padrão) | A extremidade esquerda da linha de base |
| Centro | O meio da linha de base |
| Direita | A extremidade direita da linha de base |
| Meio, MC | O meio do texto, tanto na horizontal quanto na vertical |
| TL | O canto superior esquerdo |

## Editar texto

1. Clique duas vezes em um objeto de texto. Ele abre na mesma caixa do texto de parágrafo novo, com o cursor no fim.
2. Altere as palavras.
3. Pressione {{key:Mod+Enter}} ou clique fora da caixa. O texto no desenho muda; {{key:Esc}} o deixa como estava.

{{cmd:TEXTEDIT}} (`ED`) faz o mesmo: escolha um texto após o outro e pressione {{key:Enter}} ao terminar.

Para alterar um texto selecionado, use o painel da direita: {{ui:Texto}}, {{ui:Altura}}, {{ui:Largura de quebra}} (0 = sem quebra), {{ui:Espaçamento de linha}}, {{ui:Rotação}}, a posição X e Y e {{ui:Justificar}}. A lista {{ui:Justificar}} também oferece Inferior esquerdo, que textos de outros programas às vezes usam.

## Formatação dentro de texto de parágrafo de outros programas

O texto de parágrafo em um DWG ou DXF pode conter códigos: cores por palavra, negrito e itálico, sublinhado, sobrelinha e tachado, frações empilhadas como 1/2 e uma altura diferente para uma palavra. O CadCraft mantém esses códigos, desenha-os (na tela e em um PDF plotado) e os salva de volta sem alterações.

Ao editar esse tipo de texto (clique duplo, {{cmd:TEXTEDIT}}, o campo Texto do painel da direita, ou {{cmd:FIND}} com Substituir), você edita as palavras simples. Uma palavra que você digita entra no trecho ao lado e assume a cor e o estilo dele; os demais códigos permanecem onde estão. Se você digitar de novo os números de uma fração empilhada, essa fração passa a ser texto simples. Definir o texto inteiro pelo campo Texto mantém os códigos apenas onde for possível saber quais palavras permaneceram.

Nomes de fontes (`\F`) são mantidos e salvos, mas tudo é desenhado na única fonte estilo Helvetica. Ainda não há barra de ferramentas para digitar códigos.

## Apontar para algo: multichamadas

{{ui:Chamada}} no grupo {{ui:Anotar}} ({{cmd:MLEADER}}, `MLD`) desenha uma seta, uma linha de chamada, um pequeno patamar e uma nota, como um único objeto.

1. Clique em {{ui:Chamada}}. Em `Specify leader arrowhead location`, clique no que a nota descreve.
2. Em `Specify leader landing location`, clique onde a nota vai. O patamar se volta para o lado em que você clicou.
3. Digite a nota na caixa que se abre e pressione {{key:Mod+Enter}}.

`A` e `L` na primeira pergunta definem o tamanho da seta e o comprimento do patamar; a altura do texto vem de {{ui:Altura do texto}} para novas cotas, multiplicada por {{ui:Escala geral}}. Clique duas vezes em uma multichamada para alterar as palavras. As alças movem a seta e o patamar; a nota acompanha o patamar. Em {{ui:Propriedades}}: {{ui:Texto}}, {{ui:Altura}}, {{ui:Largura de quebra}}, {{ui:Tamanho da seta}} e {{ui:Distância do patamar}}.

:::note
As multichamadas são salvas como multichamadas reais em DWG. O DXF não tem multichamada nas versões R12 ou 2000, então, nesses formatos, elas são salvas como as linhas, a seta e o texto que desenham.
:::

## Marcar alterações com uma nuvem de revisão

{{ui:Anotar}} › {{ui:Mais}} › {{ui:Nuvem de revisão}} ({{cmd:REVCLOUD}}, `RC`) desenha uma nuvem de arcos em volta do que mudou. O histórico mostra o comprimento do arco e o tipo que será usado.

- **Retangular** (a primeira vez): clique em dois cantos.
- `P` **Poligonal**: clique nos cantos; {{key:Enter}} fecha a nuvem.
- `F` **À mão livre**: clique onde ela começa e mova o ponteiro em volta da área sem clicar; um arco é adicionado a cada comprimento de arco. Clique ou pressione {{key:Enter}} para fechá-la.
- `O` **Objeto**: selecione uma polilinha fechada, um círculo ou uma elipse (ou uma linha, um arco ou uma polilinha aberta); ele se torna a nuvem. `Reverse direction?` `Y` inverte os arcos para dentro.
- `A` **Comprimento do arco**: o comprimento de cada arco. Escolha um que combine com a escala de plotagem.

A nuvem é uma polilinha fechada de arcos, então é salva em todos os formatos.

## Localizar e substituir palavras

{{ui:Editar}} › {{ui:Mais}} › {{ui:Localizar e substituir}} ({{cmd:FIND}}) procura em textos, nos valores de atributos de blocos e no texto de cotas da guia aberta (ou somente nos objetos selecionados).

1. Digite as palavras em {{ui:Localizar}}. A lista mostra cada lugar em que elas aparecem, e a contagem.
2. Escolha {{ui:Diferenciar maiúsculas de minúsculas}}, {{ui:Somente palavras inteiras}} ou {{ui:Usar curingas (* e ?)}}, se precisar, e desmarque o que não deve ser pesquisado.
3. Clique em {{ui:Selecionar encontrados}} para selecionar esses objetos, ou digite as novas palavras em {{ui:Substituir por}} (a lista mostra no que cada uma se torna) e clique em {{ui:Substituir tudo}}. Um {{key:Mod+Z}} desfaz todas as substituições.

O valor medido de uma cota não é texto, então nunca é substituído: em `<> TYP.`, só `TYP.` pode ser alterado.

## Ocultar as linhas atrás de um rótulo

1. Selecione os textos, digite {{cmd:TEXTMASK}} e pressione {{key:Enter}}.
2. `B` pinta o fundo do desenho atrás deles; `C` pede um número de cor. `O` remove a máscara.
3. `Border offset factor`: {{key:Enter}} mantém 1.5, meia altura do texto em volta dele.

A máscara cobre as linhas sob o texto, na tela e na plotagem. DWG 2004 ou posterior e DXF 2000 a mantêm; o formato DWG 2000 e o DXF R12 não conseguem, e o salvamento avisa isso.

## Fonte

Todo texto é desenhado em uma fonte estilo Helvetica, na tela e em PDFs. Textos de desenhos abertos mantêm suas palavras, altura e posição, mas não a fonte original (o nome de uma fonte dentro de texto de parágrafo é mantido no arquivo, veja acima).

Em PDFs plotados, textos em qualquer alfabeto europeu, cirílico ou grego são impressos como são (o PDF inclui as letras necessárias, e você ainda pode selecionar e pesquisar o texto). Textos em chinês, japonês e coreano também são impressos como são (a plotagem busca uma fonte maior na primeira vez em que ela for necessária). Textos em árabe, persa, urdu e hebraico também são impressos como são (veja a próxima seção). Caracteres que nenhuma fonte tem são impressos como "?", e o histórico informa quantos foram.

## Texto da direita para a esquerda: árabe, persa, urdu, hebraico

Digite o texto como faria em qualquer outro lugar: {{cmd:TEXT}} e {{cmd:MTEXT}} desenham cada linha na ordem de leitura. Uma linha cuja primeira letra é árabe ou hebraica é lida da direita para a esquerda; números e palavras latinas dentro dela mantêm sua própria ordem da esquerda para a direita, e as letras de escrita árabe são ligadas. Uma linha que começa com uma letra latina permanece da esquerda para a direita, com as palavras da direita para a esquerda no lugar dentro dela. Cada parágrafo de um texto de várias linhas tem sua própria direção, e um parágrafo quebrado mantém essa direção em todas as linhas.

O texto é armazenado como você o digitou, então arquivos DWG e DXF o trocam com outros programas sem alterações. O ponto de inserção e a justificação ({{ui:Esquerda}}, {{ui:Centro}}, {{ui:Direita}}) significam o mesmo lado que para qualquer texto: uma nota da direita para a esquerda que deve pendurar a partir da extremidade direita precisa de {{ui:Direita}}.

Na tela, as letras vêm das fontes do seu sistema. Em um PDF plotado, o hebraico usa a mesma fonte embutida dos textos latinos; texto em escrita árabe faz a plotagem buscar mais uma fonte (menor que 1 MB, uma única vez), e então o PDF inteiro é impresso nessa fonte. Essa fonte não tem forma própria para três caracteres do urdu (heh goal, yeh barree e o ponto final do urdu): eles são impressos na forma da letra árabe mais próxima. Um desenho que tenha texto em escrita árabe e texto em chinês, japonês ou coreano imprime um dos dois como "?", porque uma plotagem usa uma única fonte. O texto em uma fonte SHX carregada é ordenado e ligado quando a fonte tem as letras nas posições Unicode; para fontes antigas cujas letras já estão formadas, use {{ui:Inverter}} em {{cmd:SHXFONTS}}, como antes.

## Erros comuns

- **O texto é pequeno demais para ver.** A altura está em unidades de desenho. Em um desenho grande, use uma altura maior (veja acima), ou aproxime o zoom.
- **O comando terminou após uma linha.** Você pressionou {{key:Enter}} em uma linha vazia em {{cmd:TEXT}}. Inicie-o de novo, ou use texto de parágrafo (`T`), em que {{key:Enter}} inicia um novo parágrafo.
- **`T` abriu uma caixa em vez de pedir uma linha.** Como no AutoCAD, `T` é texto de parágrafo ({{cmd:MTEXT}}); texto de uma linha é `DT`.
- **O texto quebra em outro lugar no AutoCAD.** O CadCraft quebra as linhas com as larguras da Helvetica; outra fonte pode caber mais ou menos uma palavra na linha.
- **Texto em uma cópia espelhada.** Ele é colocado espelhado, mas continua legível da esquerda para a direita.
