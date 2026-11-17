---
title: Cotar uma planta
summary: "Acrescente cotas lineares, alinhadas, angulares, de raio e de diâmetro, encadeie-as com Contínua e Linha de base, e substitua o texto."
keywords: cota, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, encadear, sequência, anotar, ferramenta de cota, onde, encontrar, barra de ferramentas, medir, mm, cm, m, km, unidades
from: 9ee65123
---

## O que vai criar

Uma sala cotada: largura e altura totais, uma sequência de cotas ao longo de uma parede, uma parede inclinada, um canto curvo e um ângulo.

Antes de começar, leia [Definir tamanhos de cota](topic:dimension-settings) se o desenho for grande: o texto da cota tem 2.5 unidades de desenho de altura por predefinição, o que é minúsculo num desenho medido em milímetros. Para os passos abaixo, escreva primeiro `DIMSCALE`, prima {{key:Enter}}, escreva `50` e prima {{key:Enter}}.

## Onde estão as ferramentas de cota

Com o estilo de menu do CadCraft (o que o CadCraft abre por omissão), as ferramentas de cota estão na barra de ferramentas acima do desenho, no grupo {{ui:Anotar}}: {{ui:Linear}}, {{ui:Alinhada}}, {{ui:Ângulo}}, {{ui:Raio}} e {{ui:Diâmetro}}. O menu {{ui:Mais}} do grupo tem {{ui:Cota contínua}} e {{ui:Cota a partir da linha de base}}. Pouse o ponteiro sobre um botão para ver o que faz.

- Com o estilo de menu {{ui:Desenho clássico}} ou {{ui:Friso}}, abra o separador {{ui:Anotar}}: as ferramentas estão no seu painel {{ui:Cotas}}. {{ui:Desenho clássico}} também tem {{ui:Linear}} no separador {{ui:Base}}, em {{ui:Anotação}}. Veja [Menus, teclas e rato](topic:menus-keys-and-mouse).
- Ou escreva o comando na linha de comandos, por baixo do desenho, e prima {{key:Enter}}: `DLI` (linear), `DAL` (alinhada), `DAN` (angular), `DRA` (raio), `DDI` (diâmetro), `DCO` (contínua), `DBA` (linha de base).
- Num ecrã estreito a barra de ferramentas fica numa só linha: deslize-a para os lados para chegar a {{ui:Anotar}}.

Para mostrar os comprimentos em milímetros, centímetros, metros ou quilómetros, veja [Cotas em mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Desenhar algo para cotar

1. Escreva `PL` e prima {{key:Enter}}.
2. Escreva `0,0` e prima {{key:Enter}}.
3. Escreva `@6000,0` e prima {{key:Enter}}.
4. Escreva `@1500<60` e prima {{key:Enter}}.
5. Escreva `@0,2700` e prima {{key:Enter}}.
6. Escreva `@-6750,0` e prima {{key:Enter}}.
7. Escreva `C` e prima {{key:Enter}}. O contorno fecha-se.
8. Escreva `C` e prima {{key:Enter}} para iniciar um círculo.
9. Clique dentro da sala, longe das paredes, para o centro.
10. Escreva `600` e prima {{key:Enter}}. Este é um pilar.
11. Clique em {{ui:Extensão}}.

## Linear: horizontal ou vertical

1. Escreva `DLI` e prima {{key:Enter}}.
2. No pedido `Specify first extension line origin`, faça snap ao canto inferior esquerdo (Extremidade) e clique.
3. No pedido `Specify second extension line origin`, faça snap ao canto inferior direito e clique.
4. Mova o cursor por baixo da sala. A cota acompanha-o, na horizontal.
5. Clique para colocar a linha de cota.

O histórico diz `Dimension text = 6000`.

Onde colocar a linha decide a direção: por baixo ou por cima dá uma cota horizontal; à esquerda ou à direita dá uma vertical. Para a forçar, escreva `H` (horizontal), `V` (vertical) ou `R` (rodada, e depois um ângulo) antes de a colocar.

:::tip
Prima {{key:Enter}} no primeiro pedido, em vez de escolher um ponto, e depois clique numa linha, arco, círculo ou segmento de polilinha. O CadCraft toma os dois extremos por si.
:::

## Continua: uma sequência de cotas

{{cmd:DIMCONTINUE}} ({{ui:Anotar}} › {{ui:Mais}} › {{ui:Cota contínua}}, ou `DCO`) prossegue a partir da última cota linear ou alinhada que fez, começando cada nova onde a anterior acabou.

1. Escreva `DLI` e prima {{key:Enter}}.
2. Escreva `0,0` e prima {{key:Enter}} para a primeira origem.
3. Escreva `2000,0` e prima {{key:Enter}} para a segunda origem.
4. Clique por baixo da sala para a colocar.
5. Escreva `DCO` e prima {{key:Enter}}.
6. Escreva `4500,0` e prima {{key:Enter}}. Uma segunda cota segue a primeira, na mesma linha.
7. Faça snap ao canto inferior direito e clique. Uma terceira completa a sequência.
8. Prima {{key:Enter}} para terminar o comando.

:::note
Aqui os pontos são escritos como coordenadas absolutas de propósito. Um ponto com `@` conta a partir do último ponto que deu, e o último ponto é onde colocou a linha de cota anterior, e não o fim da cota. Pontos absolutos, snaps ou uma distância direta com o {{ui:Orto}} ligado são mais seguros numa sequência de cotas.
:::

Escreva `U` e prima {{key:Enter}} para retirar a última cota da sequência sem sair do comando.

## Linha de base: cotas empilhadas a partir de uma linha

{{cmd:DIMBASELINE}} ({{ui:Anotar}} › {{ui:Mais}} › {{ui:Cota a partir da linha de base}}, ou `DBA`) mede cada nova cota a partir da primeira origem da última, e empilha cada uma um passo mais para fora.

1. Escreva `DLI` e prima {{key:Enter}}.
2. Faça snap ao canto inferior esquerdo e clique.
3. Faça snap ao canto superior esquerdo e clique.
4. Mova o cursor para a esquerda da sala e clique. Aparece uma cota vertical.
5. Escreva `DBA` e prima {{key:Enter}}.
6. Faça snap à extremidade superior da parede de 60 graus (Extremidade) e clique. Aparece uma segunda cota vertical, um passo mais para fora do que a primeira.
7. Prima {{key:Enter}} para terminar.

## Alinhada: comprimento verdadeiro de uma linha inclinada

1. Escreva `DAL` e prima {{key:Enter}}.
2. Prima {{key:Enter}} para selecionar um objeto.
3. Clique na parede de 60 graus.
4. Mova para fora e clique para colocar.

O texto lê 1500: o comprimento verdadeiro, medido ao longo da parede.

## Raio e diâmetro

1. Escreva `DRA` e prima {{key:Enter}}.
2. Clique no círculo do pilar.
3. Mova o cursor. A linha de chamada aponta do centro para o cursor.
4. Clique para colocar o texto.

O texto lê `R600`. {{cmd:DIMDIAMETER}} (`DDI`) faz o mesmo, com um sinal ⌀ e o diâmetro.

## Angular

A parede aqui é uma só polilinha, por isso meça o canto pelo seu vértice. (Entre duas linhas separadas, pode clicar nas linhas.)

1. Escreva `DAN` e prima {{key:Enter}}.
2. No pedido `Select arc, circle or line, or Enter for a vertex`, prima {{key:Enter}}.
3. No pedido `Specify angle vertex`, faça snap ao canto inferior direito e clique.
4. No pedido `Specify first angle endpoint`, faça snap ao canto inferior esquerdo e clique.
5. No pedido `Specify second angle endpoint`, faça snap à extremidade superior da parede de 60 graus e clique.
6. Mova o cursor para dentro da sala, perto do canto, e clique.

O texto lê `120°`, o ângulo interior do canto. Colocada do outro lado do canto, a cota mede o ângulo desse lado. Clique num arco no primeiro pedido para cotar o ângulo que ele abrange, ou clique em duas linhas para cotar o ângulo entre elas.

## Alterar o texto

Para escrever texto próprio, escreva `T` e prima {{key:Enter}} antes de colocar a cota, e depois escreva o texto. No seu texto, `<>` representa o valor medido: `<> TYP.` dá `6000 TYP.`. Prima {{key:Enter}} numa linha vazia para manter o valor medido.

Para alterar uma cota existente:

1. Clique nela.
2. No painel da direita, escreva em {{ui:Texto}}. Deixe vazio para o valor medido.
3. Prima {{key:Enter}}.

## As cotas seguem a geometria

Uma cota lembra-se dos seus pontos. Arraste um dos seus pontos de controlo, ou mova, rode ou escale-a com os objetos que mede, e ela volta a medir. Se esticar a geometria sem mover a cota, a cota não acompanha: mantém os próprios pontos.

## Erros comuns

- **O texto e as setas estão microscópicos ou enormes.** Defina a escala global: veja [Definir tamanhos de cota](topic:dimension-settings).
- **"Indique um ponto dentro do ângulo a medir."** O ponto que clicou para uma cota angular está sobre uma das pernas. Mova-o para dentro do ângulo.
- **A continuação começou na cota errada.** Prossegue sempre a partir da última cota linear ou alinhada feita nesta sessão. Faça (ou refaça) primeiro a que deve continuar.
- **A cota saiu na vertical.** Colocou-a ao lado. Escreva `H` antes de a colocar.
- **Pés e polegadas.** Defina primeiro o {{ui:Formato de comprimento}} do desenho para {{ui:Arquitetónico}}, ou o {{ui:Formato}} de uma cota em {{ui:Propriedades}}: veja [Pés e polegadas nas cotas](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Os números não estão na unidade que quer.** Escolha {{ui:Unidades no texto}}: veja [Cotas em mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
