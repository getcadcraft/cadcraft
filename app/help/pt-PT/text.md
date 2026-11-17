---
title: Adicionar texto e etiquetas
summary: Colocar etiquetas de compartimento com texto de uma linha, escrever notas com quebra de linha em texto de parágrafo escrito no próprio local e editar o texto depois.
keywords: texto, dtext, mtext, mleader, multileader, chamada, revcloud, nuvem de revisão, nuvem, localizar, substituir, localizar e substituir, parágrafo, quebra de linha, espaçamento entre linhas, etiqueta, nota, anotação, altura, justificar, textmask, máscara de fundo, máscara, wipeout, rotação, editar texto, ddedit, textedit, tipo de letra
from: 4b76be99
---

## O que vai criar

Duas etiquetas de compartimento, centradas nos respetivos compartimentos, uma nota que quebra de linha segundo a sua largura e, depois, uma correção a uma das etiquetas.

## Altura do texto e escala do desenho

A altura do texto é em unidades de desenho. Num desenho em milímetros que será impresso à escala 1:50, um texto com 2.5 mm de altura no papel tem de ter 2.5 × 50 = 125 unidades de altura no modelo. Num separador de folha, desenha-se em unidades de papel, pelo que 2.5 aí são 2.5 mm no papel.

## Colocar uma etiqueta centrada

1. Escreva `DT` e prima {{key:Enter}} (ou clique em {{ui:Texto}} na barra de ferramentas). Aparece a mensagem `Especifique o ponto inicial do texto [Justificar]:`.
2. Escreva `J` e prima {{key:Enter}}.
3. Na mensagem `Indique uma opção [Esquerda (L)/Centro/Direita (R)/Meio/TL/MC] <L>:`, escreva `MC` e prima {{key:Enter}}.
4. Na mensagem `Especifique o ponto de inserção do texto`, clique no centro de um compartimento.
5. Na mensagem `Especifique a altura`, escreva `250` e prima {{key:Enter}}.
6. Na mensagem `Especifique o ângulo de rotação do texto <0>`, prima {{key:Enter}}.
7. Na mensagem `Escreva o texto`, escreva `COZINHA` e prima {{key:Enter}}.

A etiqueta aparece centrada no ponto onde clicou.

8. Na mensagem `Escreva o texto`, sem nada escrito, prima {{key:Enter}} para terminar o comando.

## Escrever uma nota com quebra de linha

O texto de parágrafo ({{cmd:MTEXT}}) quebra de linha segundo uma largura e escreve-se diretamente no desenho.

1. Escreva `T` e prima {{key:Enter}}, ou clique em {{ui:Parágrafo}} na barra de ferramentas.
2. Na mensagem `Especifique o primeiro canto`, clique onde deve ficar o canto superior esquerdo da nota.
3. Para alterar primeiro a altura, escreva `H`, prima {{key:Enter}}, escreva `250` e prima {{key:Enter}}.
4. Na mensagem `Especifique o canto oposto [Altura (H)/Justificar (J)/Espaçamento entre linhas (L)/Rotação (R)/Largura (W)]`, clique à direita do primeiro canto. A distância entre os dois cantos é a largura a que o texto quebra; a distância até onde clica para baixo não o limita.
5. Abre-se sobre o desenho uma caixa com o cursor dentro. Escreva `TODAS AS COTAS ESTÃO EM MILÍMETROS, SALVO INDICAÇÃO EM CONTRÁRIO`. As palavras quebram de linha segundo a largura à medida que escreve.
6. Prima {{key:Enter}} para iniciar um novo parágrafo e escreva `VERIFICAR NO LOCAL`.
7. Prima {{key:Mod+Enter}}, clique em {{ui:OK}} ou clique em qualquer ponto fora da caixa. A nota fica um único objeto.

A barra acima da caixa altera {{ui:Altura}}, {{ui:Espaçamento entre linhas}} (1 é o normal, 1.5 é mais metade), {{ui:Largura}} (0 = sem quebra de linha) e {{ui:Justificar}} enquanto escreve. {{key:Esc}} ou {{ui:Cancelar}} fecha a caixa sem acrescentar nada.

As opções no segundo canto: `H` altura, `J` justificação (`TL` canto superior esquerdo … `BR` canto inferior direito: o canto ou o meio da caixa que se mantém no lugar), `L` espaçamento entre linhas, `R` rotação, `W` uma largura escrita em vez do segundo canto.

:::note
Com a caixa aberta, {{key:Space}} escreve um espaço e {{key:Enter}} inicia um novo parágrafo. Um DWG guardado mantém o texto de parágrafo como MTEXT; um DXF R12 não tem texto de parágrafo, pelo que cada linha é guardada como texto próprio.
:::

### Várias linhas simples em alternativa

{{cmd:TEXT}} (`DT`) pede uma linha de cada vez: cada {{key:Enter}} inicia a linha seguinte, 1.667 vezes a altura do texto mais abaixo, e cada linha é um objeto próprio. Prima {{key:Enter}} numa linha vazia para terminar.

## Opções de justificação

| Opção | O ponto onde clica é |
|---|---|
| Esquerda (predefinido) | A extremidade esquerda da linha de base |
| Centro | O meio da linha de base |
| Direita | A extremidade direita da linha de base |
| Meio, MC | O meio do texto, na horizontal e na vertical |
| TL | O canto superior esquerdo |

## Editar texto

1. Clique duas vezes num objeto de texto. Abre-se na mesma caixa do texto de parágrafo, com o cursor no fim.
2. Altere as palavras.
3. Prima {{key:Mod+Enter}} ou clique fora da caixa. O texto no desenho muda; {{key:Esc}} deixa-o como estava.

{{cmd:TEXTEDIT}} (`ED`) faz o mesmo: escolha um texto após outro e prima {{key:Enter}} quando terminar.

Selecione um texto para o alterar no painel da direita: {{ui:Texto}}, {{ui:Altura}}, {{ui:Largura de divisão}} (0 = sem quebra de linha), {{ui:Espaçamento entre linhas}}, {{ui:Rotação}}, a posição X e Y e {{ui:Justificar}}. A lista de {{ui:Justificar}} oferece também Inferior esquerda, que o texto de outros programas por vezes usa.

## Formatação dentro de texto de parágrafo de outros programas

Um texto de parágrafo num DWG ou DXF pode conter códigos: cores por palavra, negrito e itálico, sublinhado, linha superior e riscado, frações empilhadas como 1/2 e uma altura diferente para uma palavra. O CadCraft mantém esses códigos, desenha-os (no ecrã e num PDF impresso) e guarda-os sem alterações.

Quando edita um texto assim (duplo clique, {{cmd:TEXTEDIT}}, o campo Texto do painel da direita ou {{cmd:FIND}} com substituir), edita as suas palavras simples. Uma palavra que escreve passa para o trecho ao lado e adota a sua cor e estilo; os outros códigos ficam onde estão. Se reescrever os números de uma fração empilhada, essa fração passa a ser texto simples. Definir o texto inteiro a partir do campo Texto mantém os códigos apenas onde consegue identificar que palavras se mantiveram.

Os nomes de tipos de letra (`\F`) são mantidos e guardados, mas tudo é desenhado no único tipo de letra de estilo Helvetica. Ainda não existe barra de ferramentas para escrever códigos.

## Apontar para algo: chamadas múltiplas

{{ui:Chamada}} no grupo {{ui:Anotar}} ({{cmd:MLEADER}}, `MLD`) desenha uma seta, uma linha de chamada, um patamar curto e uma nota, como um só objeto.

1. Clique em {{ui:Chamada}}. Na mensagem `Especifique a localização da seta da chamada`, clique no que a nota descreve.
2. Na mensagem `Especifique a localização do patamar da chamada`, clique onde fica a nota. O patamar vira-se para o lado em que clicou.
3. Escreva a nota na caixa que se abre e prima {{key:Mod+Enter}}.

`A` e `L` na primeira pergunta definem o tamanho da seta e o comprimento do patamar; a altura do texto vem de {{ui:Altura do texto}} para as novas cotas, multiplicada por {{ui:Escala global}}. Faça duplo clique numa chamada múltipla para alterar as suas palavras. Os pontos de controlo movem a seta e o patamar; a nota segue o patamar. Em {{ui:Propriedades}}: {{ui:Texto}}, {{ui:Altura}}, {{ui:Largura de divisão}}, {{ui:Tamanho da seta}} e {{ui:Comprimento do patamar}}.

:::note
As chamadas múltiplas são guardadas como chamadas múltiplas verdadeiras em DWG. O DXF não tem chamadas múltiplas em R12 nem em 2000; aí são guardadas como as linhas, a seta e o texto que desenham.
:::

## Assinalar alterações com uma nuvem de revisão

{{ui:Anotar}} › {{ui:Mais}} › {{ui:Nuvem de revisão}} ({{cmd:REVCLOUD}}, `RC`) desenha uma nuvem de arcos em volta do que mudou. O histórico mostra o comprimento do arco e o tipo que vai usar.

- **Retangular** (a primeira vez): clique em dois cantos.
- `P` **Poligonal**: clique nos cantos; {{key:Enter}} fecha a nuvem.
- `F` **À mão livre**: clique onde começa e mova o ponteiro em volta da área sem clicar; é acrescentado um arco por cada comprimento de arco. Clique ou prima {{key:Enter}} para a fechar.
- `O` **Objeto**: escolha uma polilinha fechada, um círculo ou uma elipse (ou uma linha, um arco ou uma polilinha aberta); passa a ser a nuvem. `Inverter direção?` `Y` faz os arcos virarem para dentro.
- `A` **Comprimento do arco**: o comprimento de cada arco. Escolha um que se adeque à escala de impressão.

A nuvem é uma polilinha fechada de arcos, pelo que é guardada em qualquer formato.

## Localizar e substituir palavras

{{ui:Editar}} › {{ui:Mais}} › {{ui:Localizar e substituir}} ({{cmd:FIND}}) procura no texto, nos valores de atributos de blocos e no texto de cotas do separador aberto (ou só nos objetos selecionados).

1. Escreva as palavras em {{ui:Localizar}}. A lista mostra cada sítio onde aparecem e a contagem.
2. Escolha {{ui:Maiúsculas/minúsculas}}, {{ui:Só palavras inteiras}} ou {{ui:Utilizar carateres universais (* e ?)}} se precisar, e desmarque o que não deve procurar.
3. Clique em {{ui:Selecionar os encontrados}} para selecionar esses objetos, ou escreva as novas palavras em {{ui:Substituir por}} (a lista mostra no que cada uma se transforma) e clique em {{ui:Substituir tudo}}. {{key:Mod+Z}} anula todas as substituições.

O valor medido de uma cota não é texto, pelo que nunca é substituído: em `<> TYP.`, só `TYP.` pode ser.

## Ocultar as linhas atrás de uma etiqueta

1. Selecione os textos, escreva {{cmd:TEXTMASK}} e prima {{key:Enter}}.
2. `B` pinta o fundo do desenho por trás deles; `C` pede um número de cor. `O` retira a máscara.
3. `Fator de deslocamento da margem`: {{key:Enter}} mantém 1.5, meia altura de texto em volta do texto.

A máscara cobre as linhas por baixo do texto, no ecrã e na impressão. O DWG 2004 ou posterior e o DXF 2000 mantêm-na; o DWG de formato 2000 e o DXF R12 não a conseguem manter, e a gravação avisa disso.

## Tipo de letra

Todo o texto é desenhado num tipo de letra de estilo Helvetica, no ecrã e em PDF. O texto de desenhos abertos mantém as palavras, a altura e a posição, mas não o tipo de letra original (o nome de um tipo de letra dentro de um texto de parágrafo é mantido no ficheiro, ver acima).

Nos PDF impressos, o texto em qualquer escrita europeia, cirílica ou grega imprime-se como é (o PDF inclui as letras de que precisa, e continua a poder selecionar e pesquisar o texto). O texto em chinês, japonês e coreano também se imprime como é (a impressão obtém um tipo de letra maior na primeira vez que é necessário). O texto em árabe, persa, urdu e hebraico também se imprime como é (ver a secção seguinte). Os carateres que nenhum tipo de letra tem imprimem-se como "?", e o histórico indica quantos foram.

## Texto da direita para a esquerda: árabe, persa, urdu, hebraico

Escreva o texto como faria em qualquer outro lado: {{cmd:TEXT}} e {{cmd:MTEXT}} desenham cada linha pela ordem de leitura. Uma linha cuja primeira letra é árabe ou hebraica lê-se da direita para a esquerda; os números e as palavras latinas dentro dela mantêm a sua ordem da esquerda para a direita, e as letras de escrita árabe ficam ligadas. Uma linha que começa com uma letra latina mantém-se da esquerda para a direita, com as palavras da direita para a esquerda no lugar dentro dela. Cada parágrafo de um texto de várias linhas tem a sua própria direção, e um parágrafo quebrado mantém-na em todas as linhas.

O texto é guardado como o escreveu, pelo que os ficheiros DWG e DXF o trocam com outros programas sem alterações. O ponto de inserção e a justificação ({{ui:Esquerda}}, {{ui:Centro}}, {{ui:Direita}}) significam o mesmo lado que em qualquer texto: uma nota da direita para a esquerda que deva pender da sua extremidade direita precisa de {{ui:Direita}}.

No ecrã, as letras vêm dos tipos de letra do seu sistema. Num PDF impresso, o hebraico usa o mesmo tipo de letra embutido do texto latino; o texto em escrita árabe faz a impressão obter mais um tipo de letra (menos de 1 MB, uma vez), e então todo o PDF se imprime nesse tipo de letra. Esse tipo de letra não tem forma própria para três carateres urdu (heh goal, yeh barree e o ponto final urdu): imprimem-se com a forma da letra árabe mais próxima. Um desenho que tenha texto em escrita árabe e em chinês, japonês ou coreano imprime um dos dois como "?", porque uma impressão leva um só tipo de letra. O texto num tipo de letra SHX carregado é ordenado e ligado quando o tipo de letra tem as letras nas suas posições Unicode; para tipos de letra antigos cujas letras já estão formadas, use {{ui:Inverter}} em {{cmd:SHXFONTS}}, como antes.

## Erros comuns

- **O texto é demasiado pequeno para se ver.** A altura é em unidades de desenho. Num desenho grande, use uma altura maior (ver acima), ou aproxime a vista.
- **O comando terminou após uma linha.** Foi premido {{key:Enter}} numa linha vazia em {{cmd:TEXT}}. Inicie-o de novo, ou use texto de parágrafo (`T`), em que {{key:Enter}} inicia um novo parágrafo.
- **`T` abriu uma caixa em vez de pedir uma linha.** Como no AutoCAD, `T` é texto de parágrafo ({{cmd:MTEXT}}); o texto de uma só linha é `DT`.
- **O texto quebra noutro sítio no AutoCAD.** O CadCraft quebra com as larguras de Helvetica; outro tipo de letra pode fazer caber uma palavra mais ou menos numa linha.
- **Texto numa cópia espelhada.** É colocado espelhado, mas continua legível da esquerda para a direita.
