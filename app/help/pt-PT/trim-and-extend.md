---
title: Aparar e prolongar
summary: Recorte linhas onde outras as cruzam e prolongue-as até encontrarem outras, uma peça de cada vez ou muitas de uma vez, arrastando um percurso sobre elas.
keywords: trimextendmode, arrastar janela, aparar, prolongar, tr, ex, aparar rápido, arrastar, à mão livre, percurso, vedação, cruzamento, Shift, arestas de corte, arestas de limite, edgemode, modo, padrão, rápido, apagar, pré-visualização, paredes, limpeza
from: 25fbc5bd
---

## O que vai aprender

Como funcionam {{cmd:TRIM}} e {{cmd:EXTEND}}, e as formas rápidas de os usar: arrastar sobre muitas peças de uma vez, manter {{key:Shift}} premido para alternar entre aparar e prolongar, e ver o que vai ser removido antes de clicar.

## Aparar uma peça

1. Desenhe uma linha horizontal comprida e duas linhas curtas a cruzá-la.
2. Escreva `TR` e prima {{key:Enter}}. O histórico diz `Definições atuais: modo Rápido, arestas: Sem prolongar`.
3. Pouse o ponteiro na linha comprida entre as duas curtas. Essa peça fica cinzenta e a tracejado: é o que vai ser removido.
4. Clique. A peça desaparece.
5. Prima {{key:Enter}} para terminar o comando.

No modo Rápido (o predefinido), todos os objetos visíveis são arestas de corte, por isso nunca escolhe as arestas primeiro. Clique na peça que quer remover. Um objeto que nada cruza é apagado por inteiro, e o histórico indica-o.

## Aparar muitas peças num só arrasto

1. Desenhe uma linha horizontal comprida e dez linhas verticais curtas a cruzá-la.
2. Escreva `TR` e prima {{key:Enter}}.
3. Prima o botão do rato acima da linha comprida, à esquerda da primeira linha vertical, e arraste sobre as dez acima da linha comprida.

Enquanto arrasta, o percurso aparece como uma linha a tracejado, e cada peça que atravessou fica cinzenta. Largue: as dez peças de cima são aparadas num só passo. Escreva `U` e prima {{key:Enter}} para as repor todas de uma vez.

:::tip
Também pode clicar em dois sítios vazios: a linha entre eles funciona como um percurso arrastado. Escreva `F` (Vedação) para clicar em vez disso numa sequência de pontos, e depois prima {{key:Enter}}.
:::

:::touch
Arraste um dedo da mesma forma. Um toque numa peça apara-a.
:::

## Prolongar em alternativa, com Shift

1. Desenhe uma linha vertical e cinco linhas horizontais curtas à sua esquerda que param antes dela.
2. Escreva `TR` e prima {{key:Enter}}.
3. Mantenha {{key:Shift}} premido. Pouse o ponteiro numa linha curta: a parte em que cresceria fica cinzenta e a tracejado.
4. Mantendo {{key:Shift}} premido, arraste para baixo sobre as cinco linhas curtas.

As cinco vão agora até à linha vertical. {{key:Shift}} funciona ao contrário em {{cmd:EXTEND}} (`EX`): um clique prolonga, um {{key:Shift}}+clique apara. Prolongar aumenta a extremidade mais próxima de onde clicar ou onde o percurso cruza.

## Aparar dentro de uma janela

1. Escreva `TR` e prima {{key:Enter}}.
2. Escreva `C` (Janela) e prima {{key:Enter}}.
3. Clique em dois cantos à volta das peças a remover.

Cada peça que fica pelo menos em parte dentro da janela é aparada.

Para obter uma janela apenas arrastando, sem escrever `C`: {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Arrastar para aparar e prolongar}} › {{ui:Uma janela}}. Depois, prima num sítio vazio e arraste: desenha-se uma caixa, e cada peça que ela toca é aparada (ou prolongada, em {{cmd:EXTEND}}, ou com {{key:Shift}}). {{ui:Um percurso}} (o início) repõe o percurso à mão livre. A linha de definições no início de {{cmd:TRIM}} indica qual está ativa.

## Escolher as arestas de corte (modo Padrão)

Por vezes só uma linha deve cortar, por exemplo a face de uma parede com muitas outras linhas a cruzá-la.

1. Escreva `TR` e prima {{key:Enter}}.
2. Escreva `O` (Modo) e prima {{key:Enter}}, depois escreva `S` (Padrão) e prima {{key:Enter}}.
3. Em `Selecione as arestas de corte`, clique nas linhas de aresta (ou arraste uma janela) e prima {{key:Enter}}. Premir {{key:Enter}} sem nada selecionado torna cada objeto numa aresta.
4. Clique ou arraste sobre as peças a remover.

Só cortam as arestas escolhidas, e um objeto que nenhuma aresta cruza fica intacto. O modo mantém-se até fechar a página; escreva `O`, depois `Q` (Rápido) para voltar ao modo rápido. {{cmd:TRIMEXTENDMODE}} define-o antes de começar, tal como a variável com esse nome o faz noutros pontos: `0` Padrão, `1` Rápido. `T` (Arestas de corte) escolhe novas arestas a qualquer momento; em {{cmd:EXTEND}} é `B` (Arestas de limite).

## Arestas que chegariam

1. Escreva `TR` e prima {{key:Enter}}.
2. Escreva `E` (Aresta) e prima {{key:Enter}}, depois `E` (Prolongar) e prima {{key:Enter}}.

Agora, uma linha ou arco de corte que para antes conta como se continuasse: uma linha curta corta onde cruzaria se fosse mais comprida. Escreva `E`, depois `N` (Sem prolongar) para voltar atrás. É o mesmo que `EDGEMODE` 1 e 0.

## Apagar sem sair

Escreva `R` (Apagar) e prima {{key:Enter}}, escolha os objetos a apagar e prima {{key:Enter}}. {{cmd:TRIM}} continua.

## Erros comuns

- **Desapareceu uma linha inteira.** No modo Rápido, um objeto que nada cruza é apagado. Escreva `U` para o repor, ou mude para o modo Padrão (`O`, `S`).
- **"Nada a aparar aí: nenhuma aresta escolhida cruza esse objeto."** O modo Padrão só corta nas arestas que escolheu. Escreva `T` para as escolher de novo.
- **"Nenhum limite nessa direção."** O prolongamento não encontrou nada à frente. Clique mais perto da extremidade que deve crescer, ou ative `E` (Aresta, Prolongar) para limites que param antes.
- **O arrasto desenhou um laço.** Um arrasto só apara enquanto {{cmd:TRIM}} ou {{cmd:EXTEND}} pedir um objeto. Sem comando em execução, um arrasto seleciona (veja [Seleção por laço](topic:lasso-selection)).
- **Só linhas, arcos, círculos e polilinhas podem ser aparados.** Decomponha primeiro um bloco para aparar as suas linhas.
