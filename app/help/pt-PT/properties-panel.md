---
title: O painel Propriedades
summary: Veja e altere tudo sobre os objetos selecionados, muitos de uma vez: coordenadas com Z, tamanhos, texto, definições de cotas, transparência e mais. Os campos aceitam expressões e comprimentos com unidades.
keywords: totais, comprimento total, área total, soma, comprimento da seleção, propriedades, paleta de propriedades, ctrl+1, pr, ch, mo, ddmodify, varia, seleção rápida, pickadd, coordenadas, z, cota, espessura, transparência, material, hiperligação, expressão, quickcalc, vértice, estilo de cota, tolerância, casas decimais
from: 10d6a829
---

## O que vai aprender

Como abrir o painel Propriedades, alterar um objeto ou cem num só passo, escrever coordenadas exatas (com Z), usar expressões e unidades em qualquer campo numérico, e o que cada tipo de objeto mostra.

## Abrir

O painel fica à direita. Para o trazer para a frente:

- Prima {{key:Mod+1}}, ou escreva {{cmd:PROPERTIES}} (ou `PR`, `CH`, `MO`).
- Faça duplo clique num objeto (o texto e as chamadas múltiplas abrem o seu editor de texto).

O painel é um painel móvel como os outros: arraste a sua pega para o ancorar à esquerda, à direita ou em baixo, ou largue-o sobre o desenho para o deixar flutuar (veja [Organizar os painéis e usar um segundo monitor](common:arrange-panels)).

### Recolher

O botão de fixar no canto superior direito do painel ativa a **ocultação automática**: o painel recolhe-se para uma tira na borda direita e o desenho ganha espaço. Aponte para a tira (ou prima {{key:Mod+1}}) e o painel abre-se sobre o desenho; ao afastar-se, volta a recolher-se. Clique de novo no botão para o manter aberto. {{cmd:PROPERTIESCLOSE}} também o recolhe.

## Secções

As propriedades estão agrupadas em secções que pode recolher: **Geral**, **Geometria**, **Texto**, **Linhas e setas**, **Ajuste**, **Unidades principais**, **Unidades alternativas**, **Tolerâncias**, **Padrão**, **Diversos**, e, para blocos, **Atributos** e **Item da biblioteca**. Clique no nome de uma secção para a recolher ou abrir; o CadCraft lembra-se de quais recolheu.

Arraste a linha fina entre os nomes e os valores para alargar ou estreitar os nomes. Faça duplo clique nela para a repor. Com o teclado, dê-lhe o foco e use as setas.

## Alterar um valor

1. Clique numa linha. O cabeçalho indica "Linha".
2. Clique em {{ui:Comprimento}}. Enquanto edita, o campo mostra o valor completo, não o arredondado.
3. Escreva `2500` e prima {{key:Enter}}. A linha tem agora 2500 de comprimento, mantendo o seu ponto inicial e o ângulo.

{{key:Enter}} ou clicar noutro lado aplica o valor; {{key:Esc}} repõe o valor antigo. Cada alteração é um passo de anulação.

### Expressões e unidades

Cada campo numérico aceita mais do que um número simples:

| Escreve | Obtém |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (polegadas, num desenho em pés e polegadas) |
| `900mm`, `3.5m`, `2ft` | Convertidos nas unidades do desenho |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (campos de ângulo) |
| `0.5r`, `100g` | Radianos e grados, convertidos em graus |

Um comprimento com unidade precisa de o desenho ter unidades: defina primeiro {{ui:Unidades}} em {{ui:Novos objetos}} (sem nada selecionado). Uma entrada inválida é recusada, com uma nota sob o painel, e nada muda; nunca é guardada como 0. Funções: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; ângulos em graus.

## Alterar muitos objetos de uma vez

1. Selecione vários objetos, por exemplo 8 linhas e 4 cotas.
2. O cabeçalho diz "12 objetos", e uma lista no topo oferece **Todos (12)**, **Linha (8)** e **Cota (4)**.
3. **Todos** mostra o que cada objeto tem (camada, cor, tipo de linha…). Escolha **Cota (4)** para ver as definições de cotas.
4. Altere um valor, por exemplo {{ui:Casas decimais}} para `1`.

As quatro cotas mudam, num único passo de anulação. Um campo que indica **Varia** significa que os objetos são diferentes; escrever um valor define-o em todos. Os objetos em camadas bloqueadas ficam como estão, e a nota indica quantos são.

## Totais de uma seleção

Com vários objetos selecionados, a secção {{ui:Totais}} no topo indica:

- **Objetos**: quantos de cada tipo, por exemplo "8 linhas, 2 polilinhas, 1 círculo".
- **Comprimento total**: as linhas, arcos e polilinhas somados (as splines também contam), e quantos objetos isso é.
- **Área total**: os fechados somados: círculos, elipses completas, polilinhas fechadas e tramas (os furos de uma trama são descontados).

Estão no formato de comprimento do desenho (pés e polegadas quando o usa; áreas então em polegadas quadradas e pés quadrados). A barra de estado mostra o mesmo comprimento e área sempre que há objetos selecionados; {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Comprimento e área da seleção}} › {{ui:Ocultos}} desliga isso. Para um só objeto, {{ui:Geometria}} mostra o seu próprio comprimento e área, como antes.

## Coordenadas

Cada ponto mostra **X**, **Y** e **Z**: início e fim de uma linha, centros, pontos de inserção, posições de texto, o vértice atual de uma polilinha. As linhas também mostram **Delta X**, **Delta Y** e **Delta Z** (só de leitura). As polilinhas e tramas têm uma **Elevação** (um Z para o objeto inteiro).

O botão de mira ao lado do nome de um ponto permite escolhê-lo no desenho: clique nele e depois na nova posição (os snaps funcionam). Os valores são coordenadas do mundo.

## Geral

| Campo | O que é |
|---|---|
| {{ui:Camada}}, {{ui:Cor}}, {{ui:Tipo de linha}}, {{ui:Escala do tipo de linha}}, {{ui:Espessura de linha}} | Como no painel de camadas; {{ui:PorCamada}} segue a camada |
| {{ui:Transparência}} | PorCamada, PorBloco, ou 0 a 90 % |
| {{ui:Espessura}} | Quanto se estendem em Z as linhas, círculos, arcos, polilinhas, pontos e texto |
| {{ui:Material}} | PorCamada, PorBloco, Global ou um nome que um desenho trouxe |
| {{ui:Estilo de impressão}} | Só de leitura: os desenhos imprimem por cor, através da [tabela de estilos de impressão](topic:plot-pdf#plot-style-tables) da folha |
| {{ui:Hiperligação}} | Um endereço web guardado com o objeto |

## O que cada tipo mostra

| Selecionado | Pode alterar |
|---|---|
| Linha | X, Y, Z inicial e final; comprimento; ângulo |
| Círculo | Centro; raio; diâmetro; perímetro; área (cada um define o raio) |
| Arco | Centro; raio; ângulo inicial e final; ângulo total; corda (mostra o comprimento do arco e a área) |
| Elipse | Centro; raios maior e menor; razão de raios; ângulo do eixo maior; ângulo inicial e final |
| Polilinha | O navegador de vértices (abaixo); largura global; elevação; fechada; área quando fechada (escala-a em torno do centro) |
| Texto | Conteúdo; estilo; justificação; altura; rotação; fator de largura; ângulo de obliquidade; largura definida; espaçamento entre linhas; anotativo; posição |
| Referência de bloco | Ponto de inserção; rotação; escala X, Y, Z e escala uniforme; valores dos atributos |
| Trama | Padrão; escala; ângulo; origem; associativa; deteção de ilhas; cor de fundo; elevação |
| Cota | Ver abaixo |
| Chamada múltipla | Texto; altura; largura; lado do texto; tamanho da seta; distância de aterragem; ponto da seta |
| Viewport | Escala; centro e tamanho na folha; centro da vista no modelo; ligado; visualização bloqueada |

### Vértices da polilinha

{{ui:Vértice atual}} mostra a que vértice pertencem os campos abaixo. Use os botões de seta, ou escreva um número, para passar para outro vértice; não há limite de quantos. Cada vértice tem X, Y, a largura do segmento inicial e final, e o bulge do segmento que começa aí (0 = reto).

## Cotas

Uma cota mostra o seu {{ui:Estilo de cota}}, o que mede, os seus pontos e todas as definições:

- **Linhas e setas:** seta em cada extremidade, tamanho da seta, tamanho do traço, cores e espessuras das linhas de cota e de extensão, ocultar qualquer metade ou qualquer linha de extensão, desvio e prolongamento da linha de extensão.
- **Texto:** substituição (deixe vazio para o valor medido; `<>` representa-o dentro do seu próprio texto), estilo, cor, altura, desvio, posição vertical e horizontal, sempre horizontal, rotação, preenchimento de fundo.
- **Ajuste:** escala global, espaçamento entre linhas de base, o que se move quando falta espaço, movimento do texto.
- **Unidades principais:** formato, casas decimais, arredondamento, prefixo, sufixo, escala de medição, separador decimal, suprimir zeros à esquerda e à direita; nos ângulos, o formato e as casas decimais do ângulo.
- **Unidades alternativas:** ligadas ou desligadas, formato, casas decimais, multiplicador (25.4 converte polegadas em milímetros), arredondamento, prefixo e sufixo.
- **Tolerâncias:** nenhuma, simétrica, desvio, limites ou básica, com valores superior e inferior, casas decimais, altura e posição.

Alterar qualquer uma destas definições numa cota aberta descarta o desenho que o outro programa fez dela, e o CadCraft volta a desenhá-la.

:::note
A posição horizontal do texto (ao lado da primeira ou da segunda linha de extensão) e o texto abaixo da linha são desenhados nas cotas lineares e alinhadas; nas outras cotas, são guardados mas ainda não são desenhados. As opções de Ajuste são guardadas mas ainda não são desenhadas: o CadCraft coloca o texto pela sua própria regra (acima da linha, fora quando não cabe).
:::

## Sem nada selecionado

Sem nada selecionado, o painel mostra:

- **Novos objetos:** a camada, cor, tipo de linha, espessura e altura de texto que os novos objetos recebem; as unidades do desenho e o formato de comprimento; o tipo de linha e a espessura da camada atual; tamanhos para novas cotas. Numa folha, o nome da folha, o papel e a orientação vêm primeiro.
- **Vista:** o centro, a altura e a largura do que está no ecrã. Escreva um valor para mover a vista para lá.
- **Diversos:** o ícone do UCS ligado ou desligado, o UCS (sempre Mundo: o CadCraft ainda não tem sistemas de coordenadas do utilizador) e a escala de anotação.

## Os botões no topo

| Botão | Faz |
|---|---|
| Funil | {{cmd:QSELECT}}: seleciona por tipo e propriedade |
| Seta | {{cmd:SELECT}}: seleciona objetos na linha de comandos |
| Mais ou 1 | Se um clique acrescenta à seleção (mais) ou a substitui (1); a mesma definição que em {{ui:Definições}}, {{ui:CadCraft}} |
| Fixar | Ocultação automática, descrita acima |

## Erros comuns

- **Escrever num campo não fez nada.** Prima {{key:Enter}} ou clique noutro lado para o aplicar. Um campo vermelho e uma nota significam que a entrada foi recusada.
- **Um comprimento com unidade é recusado.** O desenho não tem unidades. Defina {{ui:Unidades}} sem nada selecionado.
- **Só aparecem Camada e Cor.** Vários tipos de objetos estão selecionados e **Todos** está escolhido. Escolha um tipo na lista no topo.
- **Alguns objetos não mudaram.** Estão numa camada bloqueada. Desbloqueie a camada no painel de camadas.
- **Letras escritas foram para um campo.** Enquanto um campo tem o cursor, as teclas escrevem lá. Prima {{key:Enter}} ou {{key:Esc}}, e depois escreva o comando.
