---
title: Cotar uma planta
summary: Adicione cotas lineares, alinhadas, angulares, de raio e de diâmetro, encadeie-as com Contínua e Linha de base, e substitua o texto.
keywords: cota, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, encadear, sequência, anotar, ferramenta de cota, onde, encontrar, barra de ferramentas, medir, mm, cm, m, km, unidades
from: 9ee65123
---

## O que você vai fazer

Uma sala cotada: largura e altura totais, uma sequência de cotas ao longo de uma parede, uma parede inclinada, um canto curvo e um ângulo.

Antes de começar, leia [Defina tamanhos, casas decimais e escala de cotas](topic:dimension-settings) se o seu desenho for grande: o texto da cota tem 2.5 unidades de desenho de altura por padrão, o que é minúsculo em um desenho medido em milímetros. Para os passos abaixo, digite `DIMSCALE`, pressione {{key:Enter}}, digite `50` e pressione {{key:Enter}} antes.

## Onde estão as ferramentas de cota

Com o estilo de menu do CadCraft (o que o CadCraft usa ao iniciar), as ferramentas de cota ficam na barra de ferramentas acima do desenho, no grupo {{ui:Anotar}}: {{ui:Linear}}, {{ui:Alinhada}}, {{ui:Ângulo}}, {{ui:Raio}} e {{ui:Diâmetro}}. O menu {{ui:Mais}} do grupo tem {{ui:Cota contínua}} e {{ui:Cota de linha de base}}. Passe o ponteiro sobre um botão para ver o que ele faz.

- Com o estilo de menu {{ui:Desenho clássico}} ou {{ui:Faixa de opções}}, abra a guia {{ui:Anotar}}: as ferramentas estão no painel {{ui:Cotas}} dela. {{ui:Desenho clássico}} também tem {{ui:Linear}} na guia {{ui:Início}}, em {{ui:Anotação}}. Veja [Menus, teclas e mouse](topic:menus-keys-and-mouse).
- Ou digite o comando na linha de comando sob o desenho e pressione {{key:Enter}}: `DLI` (linear), `DAL` (alinhada), `DAN` (angular), `DRA` (raio), `DDI` (diâmetro), `DCO` (contínua), `DBA` (linha de base).
- Em uma tela estreita a barra de ferramentas fica em uma linha só: deslize-a para os lados para chegar a {{ui:Anotar}}.

Para mostrar os comprimentos em milímetros, centímetros, metros ou quilômetros, veja [Cotas em mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Desenhe algo para cotar

1. Digite `PL` e pressione {{key:Enter}}.
2. Digite `0,0` e pressione {{key:Enter}}.
3. Digite `@6000,0` e pressione {{key:Enter}}.
4. Digite `@1500<60` e pressione {{key:Enter}}.
5. Digite `@0,2700` e pressione {{key:Enter}}.
6. Digite `@-6750,0` e pressione {{key:Enter}}.
7. Digite `C` e pressione {{key:Enter}}. O contorno se fecha.
8. Digite `C` e pressione {{key:Enter}} para iniciar um círculo.
9. Clique dentro da sala, longe das paredes, para o centro.
10. Digite `600` e pressione {{key:Enter}}. Este é um pilar.
11. Clique em {{ui:Extensão}}.

## Linear: horizontal ou vertical

1. Digite `DLI` e pressione {{key:Enter}}.
2. No prompt `Especifique a origem da primeira linha de extensão`, use o snap em Extremidade no canto inferior esquerdo e clique.
3. No prompt `Especifique a origem da segunda linha de extensão`, use o snap no canto inferior direito e clique.
4. Mova o cursor abaixo da sala. A cota acompanha, na horizontal.
5. Clique para posicionar a linha de cota.

O histórico diz `Texto da cota = 6000`.

Onde você posiciona a linha define a direção: abaixo ou acima gera uma cota horizontal; à esquerda ou à direita gera uma vertical. Para forçar uma direção, digite `H` (horizontal), `V` (vertical) ou `R` (girada, depois um ângulo) antes de posicionar.

:::tip
Pressione {{key:Enter}} no primeiro prompt em vez de escolher um ponto, depois clique em uma linha, arco, círculo ou segmento de polilinha. O CadCraft pega as duas extremidades para você.
:::

## Contínua: uma sequência de cotas

{{cmd:DIMCONTINUE}} ({{ui:Anotar}} › {{ui:Mais}} › {{ui:Cota contínua}}, ou `DCO`) continua a partir da última cota linear ou alinhada que você fez, cada nova começando onde a última terminou.

1. Digite `DLI` e pressione {{key:Enter}}.
2. Digite `0,0` e pressione {{key:Enter}} para a primeira origem.
3. Digite `2000,0` e pressione {{key:Enter}} para a segunda origem.
4. Clique abaixo da sala para posicioná-la.
5. Digite `DCO` e pressione {{key:Enter}}.
6. Digite `4500,0` e pressione {{key:Enter}}. Uma segunda cota segue a primeira, na mesma linha.
7. Use o snap no canto inferior direito e clique. Uma terceira completa a sequência.
8. Pressione {{key:Enter}} para encerrar o comando.

:::note
Aqui os pontos são digitados como coordenadas absolutas de propósito. Um ponto com `@` conta a partir do último ponto que você deu, e o último ponto é onde você posicionou a linha da cota anterior, não a extremidade da cota. Pontos absolutos, snaps ou uma distância direta com {{ui:Orto}} ligado são mais seguros em uma sequência de cotas.
:::

Digite `U` e pressione {{key:Enter}} para desfazer a última cota da sequência sem sair do comando.

## Linha de base: cotas empilhadas a partir de uma linha

{{cmd:DIMBASELINE}} ({{ui:Anotar}} › {{ui:Mais}} › {{ui:Cota de linha de base}}, ou `DBA`) mede cada nova cota a partir da primeira origem da última, e empilha cada uma um passo mais para fora.

1. Digite `DLI` e pressione {{key:Enter}}.
2. Use o snap no canto inferior esquerdo e clique.
3. Use o snap no canto superior esquerdo e clique.
4. Mova o cursor para a esquerda da sala e clique. Aparece uma cota vertical.
5. Digite `DBA` e pressione {{key:Enter}}.
6. Use o snap em Extremidade na ponta superior da parede de 60 graus e clique. Aparece uma segunda cota vertical, um passo mais para fora que a primeira.
7. Pressione {{key:Enter}} para encerrar.

## Alinhada: comprimento real de uma linha inclinada

1. Digite `DAL` e pressione {{key:Enter}}.
2. Pressione {{key:Enter}} para selecionar um objeto.
3. Clique na parede de 60 graus.
4. Mova para fora e clique para posicionar.

O texto mostra 1500: o comprimento real, medido ao longo da parede.

## Raio e diâmetro

1. Digite `DRA` e pressione {{key:Enter}}.
2. Clique no círculo do pilar.
3. Mova o cursor. A linha de chamada aponta do centro para o cursor.
4. Clique para posicionar o texto.

O texto mostra `R600`. {{cmd:DIMDIAMETER}} (`DDI`) faz o mesmo, com o sinal ⌀ e o diâmetro.

## Angular

As paredes aqui formam uma polilinha, então meça o canto pelo vértice. (Entre duas linhas separadas, você pode clicar nas linhas.)

1. Digite `DAN` e pressione {{key:Enter}}.
2. No prompt `Selecione arco, círculo ou linha, ou Enter para um vértice`, pressione {{key:Enter}}.
3. No prompt `Especifique o vértice do ângulo`, use o snap no canto inferior direito e clique.
4. No prompt `Especifique a primeira extremidade do ângulo`, use o snap no canto inferior esquerdo e clique.
5. No prompt `Especifique a segunda extremidade do ângulo`, use o snap na ponta superior da parede de 60 graus e clique.
6. Mova o cursor para dentro da sala, perto do canto, e clique.

O texto mostra `120°`, o ângulo interno do canto. Posicionada do outro lado do canto, a cota mede o ângulo desse lado. Clique em um arco no primeiro prompt para cotar o ângulo que ele abrange, ou clique em duas linhas para cotar o ângulo entre elas.

## Altere o texto

Para escrever o seu próprio texto, digite `T` e pressione {{key:Enter}} antes de posicionar a cota, depois digite o texto. No seu texto, `<>` representa o valor medido: `<> TYP.` gera `6000 TYP.`. Pressione {{key:Enter}} em uma linha vazia para manter o valor medido.

Para alterar uma cota existente:

1. Clique nela.
2. No painel da direita, digite em {{ui:Texto}}. Deixe vazio para usar o valor medido.
3. Pressione {{key:Enter}}.

## As cotas acompanham a geometria

Uma cota guarda os seus pontos. Arraste um dos grips dela, ou mova, gire ou escale-a junto com os objetos que ela mede, e ela é medida de novo. Se você esticar a geometria sem mover a cota, a cota não acompanha: ela mantém os próprios pontos.

## Erros comuns

- **O texto e as setas estão microscópicos ou enormes.** Defina a escala geral: veja [Defina tamanhos, casas decimais e escala de cotas](topic:dimension-settings).
- **"Escolha um ponto dentro do ângulo que você quer medir."** O ponto que você clicou para uma cota angular está sobre uma das pernas. Mova-o para dentro do ângulo.
- **A sequência começou na cota errada.** Ela sempre continua a partir da última cota linear ou alinhada feita nesta sessão. Faça (ou refaça) antes a cota a partir da qual continuar.
- **A cota saiu vertical.** Você a posicionou para o lado. Digite `H` antes de posicioná-la.
- **Pés e polegadas.** Defina primeiro o formato de comprimento do desenho como {{ui:Arquitetônico}}, ou o {{ui:Formato}} de uma cota em {{ui:Propriedades}}: veja [Pés e polegadas nas cotas](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Os números não estão na unidade que você quer.** Escolha {{ui:Unidades no texto}}: veja [Cotas em mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
