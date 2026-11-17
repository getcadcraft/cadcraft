---
title: O painel Propriedades
summary: Veja e altere tudo sobre os objetos selecionados, muitos de uma vez: coordenadas com Z, tamanhos, textos, configurações de cota, transparência e mais. Os campos aceitam expressões e comprimentos com unidades.
keywords: totais, comprimento total, área total, soma, comprimento da seleção, propriedades, paleta de propriedades, ctrl+1, pr, ch, mo, ddmodify, varia, seleção rápida, pickadd, coordenadas, z, cota, espessura, transparência, material, hiperlink, expressão, quickcalc, vértice, estilo de cota, tolerância, casas decimais
from: 10d6a829
---

## O que você vai aprender

Como abrir o painel Propriedades, mudar um objeto ou cem em uma etapa, digitar coordenadas exatas (com Z), usar expressões e unidades em qualquer campo numérico, e o que cada tipo de objeto mostra.

## Abrir

O painel fica à direita. Para trazê-lo para a frente:

- Pressione {{key:Mod+1}}, ou digite {{cmd:PROPERTIES}} (ou `PR`, `CH`, `MO`).
- Clique duas vezes em um objeto (texto e multichamadas abrem o editor de texto deles).

O painel é um painel móvel como os outros: arraste a alça dele para acoplá-lo à esquerda, à direita ou embaixo, ou solte-o sobre o desenho para flutuar (veja [Organizar os painéis e usar um segundo monitor](common:arrange-panels)).

### Recolher

O botão Fixar no canto superior direito do painel liga o **ocultar automático**: o painel se recolhe em uma faixa na borda direita e o desenho ganha o espaço. Aponte para a faixa (ou pressione {{key:Mod+1}}) e ele abre sobre o desenho; ao sair, ele se recolhe de novo. Clique em Fixar de novo para mantê-lo aberto. {{cmd:PROPERTIESCLOSE}} também o recolhe.

## Seções

As propriedades são agrupadas em seções que você pode recolher: **Geral**, **Geometria**, **Texto**, **Linhas e setas**, **Ajuste**, **Unidades primárias**, **Unidades alternativas**, **Tolerâncias**, **Padrão**, **Diversos**, e para blocos **Atributos** e **Item da biblioteca**. Clique no nome de uma seção para recolhê-la ou abri-la; o CadCraft lembra quais você recolheu.

Arraste a linha fina entre os nomes e os valores para tornar os nomes mais largos ou mais estreitos. Clique duas vezes nela para devolvê-la ao tamanho original. Com o teclado, dê foco a ela e use as setas.

## Alterar um valor

1. Clique em uma linha. O cabeçalho diz "Linha".
2. Clique em {{ui:Comprimento}}. Enquanto edita, o campo mostra o valor completo, não o arredondado.
3. Digite `2500` e pressione {{key:Enter}}. A linha agora tem 2500 de comprimento, mantendo o ponto inicial e o ângulo.

{{key:Enter}} ou clicar em outro lugar aplica o valor; {{key:Esc}} devolve o valor antigo. Cada alteração é uma etapa de desfazer.

### Expressões e unidades

Todo campo numérico aceita mais do que um número simples:

| Você digita | Você obtém |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (polegadas, em um desenho em pés e polegadas) |
| `900mm`, `3.5m`, `2ft` | Convertido para as unidades do desenho |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (campos de ângulo) |
| `0.5r`, `100g` | Radianos e grados, como graus |

Um comprimento com unidade precisa que o desenho tenha unidades: defina primeiro {{ui:Unidades}} em {{ui:Novos objetos}} (sem nada selecionado). Uma entrada inválida é recusada com uma nota abaixo do painel e nada muda; ela nunca é salva como 0. Funções: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; ângulos em graus.

## Alterar vários objetos de uma vez

1. Selecione vários objetos, por exemplo 8 linhas e 4 cotas.
2. O cabeçalho diz "12 objetos", e uma lista no topo oferece **Todos (12)**, **Linha (8)** e **Cota (4)**.
3. **Todos** mostra o que cada objeto tem (camada, cor, tipo de linha…). Escolha **Cota (4)** para ver as configurações de cota.
4. Altere um valor, por exemplo {{ui:Casas decimais}} para `1`.

As quatro cotas mudam, em uma etapa de desfazer. Um campo que mostra **Varia** significa que os objetos são diferentes; digitar um valor o define em todos eles. Objetos em camadas bloqueadas são deixados como estão, e a nota diz quantos foram.

## Totais de uma seleção

Com vários objetos selecionados, a seção {{ui:Totais}} no topo informa:

- **Objetos**: quantos de cada tipo, por exemplo "8 linhas, 2 polilinhas, 1 círculo".
- **Comprimento total**: as linhas, arcos e polilinhas somados (splines também contam), e quantos objetos isso são.
- **Área total**: os fechados somados: círculos, elipses inteiras, polilinhas fechadas e hachuras (os furos de uma hachura são descontados).

Eles estão no formato de comprimento do desenho (pés e polegadas quando ele usa, e áreas então em polegadas quadradas e pés quadrados).

A barra de status mostra o mesmo comprimento e área sempre que objetos estão selecionados; {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Comprimento e área da seleção}} › {{ui:Oculto}} desliga isso. Para um objeto, {{ui:Geometria}} mostra o próprio comprimento e área, como antes.

## Coordenadas

Todo ponto mostra **X**, **Y** e **Z**: início e fim de uma linha, centros, pontos de inserção, posições de texto, o {{ui:Vértice atual}} da polilinha. Linhas também mostram **Delta X**, **Delta Y** e **Delta Z** (somente leitura). Polilinhas e hachuras têm uma **Cota** (um Z para o objeto inteiro).

O botão de mira ao lado do nome de um ponto permite escolhê-lo no desenho: clique nele, depois clique na nova posição (os snaps funcionam). Os valores são coordenadas do mundo.

## Geral

| Campo | O que é |
|---|---|
| {{ui:Camada}}, {{ui:Cor}}, {{ui:Tipo de linha}}, {{ui:Escala do tipo de linha}}, {{ui:Espessura de linha}} | Como no painel de camadas; {{ui:PorCamada}} segue a camada |
| {{ui:Transparência}} | PorCamada, PorBloco, ou 0 a 90% |
| {{ui:Espessura}} | Até onde linhas, círculos, arcos, polilinhas, pontos e textos se estendem em Z |
| {{ui:Material}} | PorCamada, PorBloco, Global ou um nome que um desenho trouxe |
| {{ui:Estilo de plotagem}} | Somente leitura: desenhos são plotados por cor, pela [tabela de estilos de plotagem](topic:plot-pdf#plot-style-tables) da folha |
| {{ui:Hiperlink}} | Um endereço da web guardado com o objeto |

## O que cada tipo mostra

| Selecionado | Você pode alterar |
|---|---|
| Linha | X, Y, Z de início e fim; comprimento; ângulo |
| Círculo | Centro; raio; diâmetro; circunferência; área (cada um define o raio) |
| Arco | Centro; raio; ângulo inicial e final; ângulo total; corda (mostra o comprimento do arco e a área) |
| Elipse | Centro; raio maior e menor; razão de raios; ângulo do eixo maior; ângulo inicial e final |
| Polilinha | O navegador de vértices (abaixo); largura global; cota; fechada; área quando fechada (escala em torno do centro dela) |
| Texto | Conteúdo; estilo; justificação; altura; rotação; fator de largura; ângulo de inclinação; largura definida; espaçamento entre linhas; anotativo; posição |
| Referência de bloco | Ponto de inserção; rotação; escala X, Y, Z e escala uniforme; valores de atributos |
| Hachura | Padrão; escala; ângulo; origem; associativa; detecção de ilhas; cor de fundo; cota |
| Cota | Veja abaixo |
| Multichamada | Texto; altura; largura; lado do texto; tamanho da seta; distância de pouso; ponto da seta |
| Viewport | Escala; centro e tamanho na folha; centro da vista no modelo; ligado; exibição bloqueada |

### Vértices de polilinha

{{ui:Vértice atual}} mostra a qual vértice pertencem os campos abaixo dele. Use os botões de seta, ou digite um número, para ir a outro vértice; não há limite de quantos. Cada vértice tem X, Y, largura do segmento inicial e final, e o bulge do segmento que começa ali (0 = reto).

## Cotas

Uma cota mostra o seu **Estilo de cota**, o que mede, os seus pontos, e todas as configurações:

- **Linhas e setas:** seta de cada extremidade, tamanho da seta, tamanho do traço, cores e espessuras das linhas de cota e de extensão, ocultar cada metade ou cada linha de extensão, deslocamento e prolongamento da linha de extensão.
- **Texto:** substituição (deixe vazio para o valor medido; `<>` representa ele dentro do seu próprio texto), estilo, cor, altura, deslocamento, posição vertical e horizontal, sempre horizontal, rotação, preenchimento de fundo.
- **Ajuste:** escala geral, espaçamento de linhas de base, o que se move quando falta espaço, movimento do texto.
- **Unidades primárias:** formato, casas decimais, arredondamento, prefixo, sufixo, escala de medição, separador decimal, suprimir zeros à esquerda e à direita; para ângulos, o formato e as casas decimais do ângulo.
- **Unidades alternativas:** ligado ou desligado, formato, casas decimais, multiplicador (25.4 converte polegadas em milímetros), arredondamento, prefixo e sufixo.
- **Tolerâncias:** nenhuma, simétrica, desvio, limites ou básica, com valores superior e inferior, casas decimais, altura e posição.

Alterar qualquer uma delas em uma cota aberta descarta o desenho que o outro programa fez dela, e o CadCraft a desenha de novo.

:::note
A posição horizontal do texto (ao lado da primeira ou segunda linha de extensão) e o texto abaixo da linha são desenhados em cotas lineares e alinhadas; em outras cotas, são mantidos e salvos, mas ainda não desenhados. As opções de Ajuste são mantidas e salvas, mas ainda não desenhadas: o CadCraft posiciona o texto pela sua própria regra (acima da linha, do lado de fora quando não cabe).
:::

## Nada selecionado

Sem nada selecionado, o painel mostra:

- **Novos objetos:** a camada, cor, tipo de linha, espessura e altura de texto que os novos objetos recebem; as unidades e o formato de comprimento do desenho; o tipo de linha e a espessura da camada atual; tamanhos para novas cotas. Em uma folha, o nome, o papel e a orientação dela vêm primeiro.
- **Vista:** o centro, a altura e a largura do que está na tela. Digite um valor para mover a vista até ali.
- **Diversos:** o ícone do SCU ligado ou desligado, o SCU (sempre Mundo: o CadCraft ainda não tem sistemas de coordenadas do usuário) e a escala de anotação.

## Os botões no topo

| Botão | Faz |
|---|---|
| Funil | {{cmd:QSELECT}}: seleciona por tipo e propriedade |
| Ponteiro | {{cmd:SELECT}}: seleciona objetos na linha de comando |
| Mais ou 1 | Se um clique acrescenta à seleção (mais) ou a substitui (1); a mesma configuração de {{ui:Configurações}}, {{ui:CadCraft}} |
| Fixar | Ocultar automaticamente, acima |

## Erros comuns

- **Digitar em um campo não fez nada.** Pressione {{key:Enter}} ou clique em outro lugar para aplicar. Um campo vermelho e uma nota significam que a entrada foi recusada.
- **Um comprimento com unidade é recusado.** O desenho não tem unidades. Defina {{ui:Unidades}} com nada selecionado.
- **Só Camada e Cor aparecem.** Vários tipos de objeto estão selecionados e **Todos** está escolhido. Escolha um tipo na lista do topo.
- **Alguns objetos não mudaram.** Eles estão em uma camada bloqueada. Desbloqueie a camada no painel de camadas.
- **Letras digitadas foram para um campo.** Enquanto um campo tem o cursor, as teclas digitam ali. Pressione {{key:Enter}} ou {{key:Esc}}, depois digite o comando.
