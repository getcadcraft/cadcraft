---
title: Dividir o ecrã
summary: Mostre o desenho em dois, três ou quatro painéis, cada um com o seu zoom, coloque uma folha ao lado do modelo e abra vários desenhos lado a lado.
keywords: dividir, dividir ecrã, painéis, vports, viewports, dispor em mosaico, mosaico, lado a lado, empilhado, dois desenhos, separadores, separadores de documento, comparar, divisor, modelo e folha, vários desenhos, desenhos abertos
from: ee2f034b
---

## O que vai aprender

Como ver um desenho em vários painéis ao mesmo tempo, cada um com o seu zoom, e como abrir vários desenhos e vê-los lado a lado.

## Dividir um desenho em painéis

1. Abra um desenho, ou desenhe algumas linhas e círculos.
2. Abra {{ui:Vista}} › {{ui:Mais}} e escolha {{ui:Dividir lado a lado}} (ou escreva {{cmd:VPORTS}}, depois `2` e depois {{key:Enter}}).

A área de desenho divide-se em dois painéis, ambos a mostrar a mesma vista. O painel ativo tem uma moldura azul e recebe a cruz.

3. Clique no outro painel. Este passa a ser o ativo. (Esse primeiro clique apenas muda de painel; clique de novo para escolher.)
4. Faça zoom com a roda. Só esse painel faz zoom.
5. Arraste a linha entre os painéis para alargar um. {{key:Home}} com o divisor em foco repõe-no ao meio.

{{cmd:VPORTS}} aceita também `3` (dois painéis de um lado e um grande do outro: `L` ou `R`), `4`, e `SI` para voltar a um só painel. A vista do painel ativo passa então a ocupar toda a área. Numa folha, o {{cmd:VPORTS}} acrescenta antes um viewport à folha (tal como no AutoCAD); escreva {{cmd:SPLIT}} aí, ou use o menu Vista.

## Desenhar de um painel para outro

1. Divida lado a lado e faça zoom em cada painel sobre um canto diferente do desenho.
2. Escreva `L` e prima {{key:Enter}}, e clique no primeiro ponto no painel da esquerda.
3. Clique uma vez no painel da direita para o tornar ativo e, depois, clique aí no segundo ponto.

A linha vai entre os dois lugares. Um comando continua ao mudar de painel, e o elástico é mostrado em todos os painéis.

## O modelo ao lado de uma folha

1. Divida lado a lado.
2. Clique no painel da direita e, depois, no separador de uma folha por baixo do desenho.

O painel da direita mostra a folha; o da esquerda continua a mostrar o modelo. Cada painel mantém o seu espaço, por isso pode desenhar no modelo e ver o viewport da folha a acompanhar.

## Vários desenhos numa janela

1. Abra um desenho. Depois abra outro (ou prima {{ui:Novo…}}).

Cada desenho abre no seu próprio separador sobre a área de desenho. Clique num separador para mudar; a linha de comandos, os painéis e a anulação seguem o desenho para o qual mudou. {{key:Mod+C}} num desenho e {{key:Mod+V}} noutro copia objetos entre eles.

2. Clique em {{ui:Dispor os desenhos abertos lado a lado}} (o ícone de divisão no fim dos separadores), ou no ícone empilhado ao lado dele.

Cada painel mostra agora um dos desenhos abertos, até quatro. Clique num painel para trabalhar nesse desenho.

3. Clique no {{ui:×}} de um separador para fechar esse desenho. Se tiver alterações não guardadas, o CadCraft pergunta primeiro.

:::tip
Abrir um desenho enquanto a janela tem apenas um desenho novo e intacto usa esse separador, em vez de acrescentar outro.
:::

## Deslocar a vista e fazer zoom em conjunto

Para comparar duas revisões, disponha-as lado a lado e clique em {{ui:Ligar as vistas dos painéis}} (o ícone de ligação no fim dos separadores), ou escolha-o em {{ui:Vista}} › {{ui:Mais}}, ou escreva {{cmd:LINKVIEWS}} e `ON`. Agora uma deslocação ou um zoom num painel leva todos os painéis que mostram o modelo (ou todos os que mostram uma folha) para o mesmo sítio, para que os dois desenhos fiquem alinhados. {{cmd:LINKVIEWS}} `OFF` deixa cada painel mover-se por si outra vez.

## Erros comuns

- **O clique não teve efeito.** Tornou esse painel ativo. Clique de novo para escolher ou desenhar.
- **A roda fez zoom no painel errado.** A roda faz zoom no painel sob o ponteiro e torna-o ativo.
- **Os painéis voltaram a ser um só.** Abrir um desenho mostra-o como foi guardado; um desenho guardado sem painéis abre num só.
- **Sair da página avisa de alterações não guardadas que não se veem.** Outro separador tem um desenho com alterações. Mude para ele e guarde, ou saia sem guardar.
