---
title: Dividir a tela
summary: Mostre o desenho em dois, três ou quatro painéis, cada um com seu próprio zoom, coloque uma folha ao lado do modelo e abra vários desenhos lado a lado.
keywords: dividir, dividir tela, painéis, vports, viewports, lado a lado, empilhado, dois desenhos, guias, guias de documento, comparar, divisor, modelo e folha, vários desenhos, desenhos abertos
from: ee2f034b
---

## O que você vai aprender

Como ver um desenho em vários painéis ao mesmo tempo, cada um com seu próprio zoom, e como abrir vários desenhos e vê-los lado a lado.

## Dividir um desenho em painéis

1. Abra um desenho, ou desenhe algumas linhas e círculos.
2. Abra {{ui:Vista}} › {{ui:Mais}} e escolha {{ui:Dividir lado a lado}} (ou digite {{cmd:VPORTS}}, depois `2`, depois {{key:Enter}}).

A área de desenho se divide em dois painéis, ambos mostrando a mesma vista. O painel ativo tem moldura azul e recebe o cursor em cruz.

3. Clique no outro painel. Ele se torna o ativo. (Esse primeiro clique apenas troca de painel; clique de novo para escolher.)
4. Dê zoom com a roda do mouse. Só esse painel faz zoom.
5. Arraste a linha entre os painéis para deixar um mais largo. {{key:Home}} com o divisor em foco o coloca de volta no meio.

{{cmd:VPORTS}} também aceita `3` (dois painéis de um lado e um grande do outro: `L` ou `R`), `4`, e `SI` para voltar a um só painel. A vista do painel ativo então ocupa toda a área. Em uma folha, {{cmd:VPORTS}} adiciona uma viewport à folha (como no AutoCAD); digite {{cmd:SPLIT}} ali, ou use o menu Vista.

## Desenhar de um painel para outro

1. Divida lado a lado e dê zoom em cada painel em um canto diferente do desenho.
2. Digite `L` e pressione {{key:Enter}}, e clique no primeiro ponto no painel da esquerda.
3. Clique uma vez no painel da direita para torná-lo ativo, depois clique no segundo ponto ali.

A linha vai entre os dois lugares. Um comando continua conforme você troca de painel, e o elástico aparece em todos os painéis.

## O modelo ao lado de uma folha

1. Divida lado a lado.
2. Clique no painel da direita, depois clique na guia de uma folha sob o desenho.

O painel da direita mostra a folha; o da esquerda ainda mostra o modelo. Cada painel mantém seu próprio espaço, então você pode desenhar no modelo e ver a viewport da folha acompanhar.

## Vários desenhos em uma janela

1. Abra um desenho. Depois abra outro (ou pressione {{ui:Nova}}).

Cada desenho abre em sua própria guia sobre a área de desenho. Clique em uma guia para trocar; a linha de comando, os painéis e o desfazer seguem o desenho para o qual você troca. {{key:Mod+C}} em um desenho e {{key:Mod+V}} em outro copiam objetos entre eles.

2. Clique em {{ui:Organizar os desenhos abertos lado a lado}} (o ícone de divisão no fim das guias), ou no ícone empilhado ao lado dele.

Cada painel agora mostra um dos desenhos abertos, até quatro. Clique em um painel para trabalhar naquele desenho.

3. Clique no {{ui:×}} de uma guia para fechar esse desenho. Se ele tiver alterações não salvas, o CadCraft pergunta antes.

:::tip
Abrir um desenho enquanto a janela contém apenas um desenho novo e intocado usa essa guia em vez de adicionar outra.
:::

## Pan e zoom juntos

Para comparar duas revisões, organize-as lado a lado, depois clique em {{ui:Vincular as vistas dos painéis}} (o ícone de link no fim das guias), ou escolha-o em {{ui:Vista}} › {{ui:Mais}}, ou digite {{cmd:LINKVIEWS}} e `ON`. Agora um pan ou zoom em um painel move todos os painéis que mostram o modelo (ou todos os que mostram uma folha) para o mesmo lugar, para que os dois desenhos fiquem alinhados. {{cmd:LINKVIEWS}} `OFF` permite que cada painel se mova sozinho de novo.

## Erros comuns

- **Meu clique não fez nada.** Ele tornou aquele painel ativo. Clique de novo para escolher ou desenhar.
- **A roda deu zoom no painel errado.** A roda dá zoom no painel sob o ponteiro e o torna ativo.
- **Os painéis voltaram a ser um só.** Abrir um desenho mostra como ele foi salvo; um desenho salvo sem painéis abre em um só.
- **Ao sair da página aparece um aviso de alterações não salvas que não consigo ver.** Outra guia tem um desenho com alterações. Vá até ela e salve, ou saia sem salvar.
