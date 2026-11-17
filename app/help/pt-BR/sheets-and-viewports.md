---
title: Monte uma folha com legenda e viewports
summary: Crie uma folha (layout) com moldura e legenda, defina a escala da viewport, adicione uma segunda viewport para um detalhe e preencha a legenda.
keywords: layout, folha, espaço papel, viewport, mview, vpview, legenda, escala, tamanho do papel, moldura, vports, escala de plotagem, mspace, pspace, espaço modelo, entrar na viewport, clicar duas vezes na viewport
from: 45a45de8
---

## O que você vai criar

Uma folha A3 com legenda, a planta inteira em uma viewport a 1:100, e uma segunda viewport mostrando um canto a 1:20.

## Modelo e folhas

Você desenha o edifício na aba {{ui:Modelo}}, em tamanho real: uma parede de 6 m tem 6000 unidades de comprimento em milímetros. Uma **folha** (layout) é um pedaço de papel, medido em milímetros ou polegadas. Uma **viewport** é uma janela recortada na folha que mostra o modelo em uma escala.

## Antes de começar

1. Abra ou desenhe uma planta na aba {{ui:Modelo}}.
2. Pressione {{key:Esc}} para que nada fique selecionado.
3. Em {{ui:Configurações atuais}}, defina {{ui:Unidades}} para a unidade com que você desenhou, por exemplo {{ui:Milímetros}}.

Unidades importam: uma escala de viewport como 1:100 significa que um milímetro no papel mostra 100 milímetros reais, então o CadCraft precisa saber o que é uma unidade de desenho. Um desenho deixado como {{ui:Sem unidade}} é considerado na unidade do papel (milímetros em papel ISO, polegadas em papel americano).

## Crie a folha

1. Clique no botão {{ui:+}} à direita das abas sob o desenho, ou digite `LAYOUT` e pressione {{key:Enter}}, ou clique em {{ui:Nova folha}}.

Uma nova aba, `Layout1`, abre. Você deve ver uma folha sobre uma mesa mais escura: uma moldura, uma legenda no canto inferior direito e uma viewport acima dela mostrando o modelo inteiro na maior escala padrão que cabe. O histórico informa o papel: ISO A3 para desenhos métricos e sem unidade, Tabloid (ANSI B) para desenhos em polegadas ou pés.

2. Clique em {{ui:Extensão}} para encaixar a folha na tela.

## Escolha o papel

1. Pressione {{key:Esc}} para que nada fique selecionado. O cabeçalho do painel direito diz "Folha: Layout1".
2. Em {{ui:Nome}}, digite `A-101 Planta` e pressione {{key:Enter}}. A aba é renomeada.
3. Em {{ui:Papel}}, escolha um tamanho.
4. Em {{ui:Orientação}}, escolha {{ui:Paisagem}} ou {{ui:Retrato}}.

:::warning
Mudar o papel não move nem redimensiona o que já está na folha. Depois de alterá-lo, confira se a moldura, a legenda e a viewport ainda cabem, e mova-as ou redimensione-as com os grips. Trocar entre papel em milímetros e papel em polegadas mantém os números, então tudo muda de tamanho: a barra de status avisa.
:::

## Defina a escala da viewport

1. Clique na moldura da viewport (sua borda). O cabeçalho do painel diz "Viewport".
2. Em {{ui:Escala}}, escolha `1:100`.

O modelo dentro da viewport é redesenhado a 1:100, centralizado onde estava. A lista oferece escalas métricas de 10:1 a 1:10000; desenhos em polegadas ou pés também recebem escalas arquitetônicas (1/4" = 1'-0" e similares) e escalas de engenharia (1" = 20' e similares). {{ui:Ajustar o modelo inteiro}} define uma escala exata, não padronizada, que faz caber tudo.

3. Se a planta não estiver mais centralizada, altere {{ui:X}} e {{ui:Y}} em {{ui:Centro da vista (modelo)}} no painel direito: são o ponto do modelo mostrado no meio da viewport.

## Mostre parte do modelo em uma viewport

1. Com a viewport selecionada, clique em {{ui:Selecione uma janela no modelo…}} no painel direito (ou digite `VPVIEW` e pressione {{key:Enter}}).
2. O CadCraft muda para a aba {{ui:Modelo}}. Clique em um canto da área a mostrar.
3. Clique no canto oposto.

Você volta à folha, e a viewport mostra essa área na maior escala padrão que cabe; o histórico informa qual. {{ui:Mostrar o modelo inteiro}} volta para a planta inteira em uma escala padrão.

## Adicione uma segunda viewport para um detalhe

1. Abra espaço na folha: selecione a primeira viewport e arraste um grip de canto para deixá-la menor.
2. Digite `MV` e pressione {{key:Enter}}, ou clique em {{ui:Viewport}} no grupo Folhas.
3. Clique em um canto da nova viewport na folha.
4. Clique no canto oposto.

A nova viewport mostra o modelo inteiro. O histórico informa a escala dela.

5. Clique na moldura da nova viewport.
6. Clique em {{ui:Selecione uma janela no modelo…}} e escolha uma área pequena em volta de um canto da planta.
7. Em {{ui:Escala}}, escolha `1:20`.

As molduras das viewports ficam na camada `Viewports`, que está configurada para não plotar, então as molduras aparecem na tela, mas não no PDF.

## Preencha a legenda

A legenda é feita de linhas e textos comuns na camada `Title block`. Ela começa com o nome do desenho, a escala da primeira viewport, a data de hoje e o número da folha.

1. Clique duas vezes no texto grande do título. Uma caixa de edição abre sobre ele.
2. Digite o título da folha.
3. Clique em {{ui:OK}}, ou pressione {{key:Mod+Enter}}.

Faça o mesmo com os outros campos. Use {{cmd:TEXT}} para escrever na célula vazia "DESENHADO POR". O texto ESCALA não se atualiza sozinho quando você muda a escala de uma viewport: edite-o à mão.

## Desenhe na folha

Qualquer coisa que você desenha em uma aba de folha está no papel, em unidades de papel: texto de 3.5 de altura tem 3.5 mm de altura em uma folha ISO. Notas, setas de norte e molduras de folha pertencem aqui.

Para alterar a própria planta, vá para a aba {{ui:Modelo}}, ou trabalhe por uma viewport (próxima seção); toda viewport mostra a alteração.

## Trabalhe no modelo por uma viewport

1. Clique duas vezes dentro de uma viewport, longe da moldura. Ou digite `MS` e pressione {{key:Enter}}: com uma viewport na folha, ele entra direto; com várias, clique dentro da que você quer.

A moldura é desenhada mais grossa, o histórico diz que você está dentro, e a aba da folha continua selecionada. Tudo o que você desenha ou altera agora está no modelo, em unidades do modelo, como na aba {{ui:Modelo}}: uma linha desenhada dentro de uma viewport a 1:100 está em milímetros reais. Camadas congeladas nesta viewport não podem ser escolhidas aqui.

2. Gire a roda ou arraste com o botão do meio para dar zoom e pan no que a viewport mostra. A folha permanece onde está.
3. Clique duas vezes em qualquer lugar fora da moldura, ou digite `PS` e pressione {{key:Enter}}.

Você volta à folha. A viewport mantém a vista em que você a deixou; {{key:Mod+Z}} devolve a vista antiga em um passo. Clicar em qualquer aba sob o desenho também sai da viewport.

:::note
Uma viewport cuja exibição está bloqueada ({{ui:Exibição bloqueada}} em Propriedades) mantém sua vista: dentro dela, pan e zoom movem a folha inteira. Uma viewport desligada não pode ser acessada.
:::

## Rotule uma vista com seu nome

Um título de vista sob uma viewport pode mostrar o nome da vista da viewport e acompanhá-lo:

1. Dê um nome à vista: selecione a moldura da viewport e preencha {{ui:Nome da vista}} em Propriedades — ou salve a vista na aba {{ui:Modelo}} com {{cmd:NAMEDVIEW}} e, com a viewport selecionada, digite `VPVIEW`, `V` e o nome da vista: a viewport mostra essa vista e assume o nome dela.
2. Digite `VIEWLABEL` (`VL`) e pressione {{key:Enter}}, depois clique onde o rótulo deve ficar ({{key:Enter}} o coloca sob o canto inferior esquerdo da viewport).

Quando o nome da vista muda, o rótulo muda junto, no mesmo passo de desfazer.

## Congele uma camada em uma viewport

Para ocultar uma camada em uma viewport, mas não nas outras (mobiliário em um detalhe, por exemplo):

1. Selecione a moldura da viewport, ou trabalhe dentro dela (clique duas vezes).

O painel {{ui:Camadas}} ganha mais um botão em cada linha, e uma linha acima da lista informa isso.

2. Clique nesse botão na linha da camada.

A camada desaparece somente dessa viewport. Clique de novo para descongelá-la; {{key:Mod+Z}} desfaz qualquer uma das duas ações. Para várias camadas ou viewports de uma vez, digite `VPLAYER`: `F` (Congelar) ou `T` (Descongelar), os nomes das camadas (`A-*` pega todas as camadas que começam com A-), depois `C` (Atual), `A` (Todas) ou `S` (Selecionar). `VPLAYER` `V` (Vpvisdflt) escolhe as camadas com que novas viewports começam congeladas.

## Mais folhas

Cada {{ui:+}} adiciona outra folha (`Layout2`, `Layout3` …) com o próximo número de folha. Para excluir a folha aberta, pressione {{key:Esc}} e clique em {{ui:Excluir esta folha}} no painel direito. Ela é excluída sem perguntar; {{key:Mod+Z}} a traz de volta.

Plote uma folha com {{ui:Plotar esta folha}} ou {{key:Mod+P}}; veja [Plotar em PDF](topic:plot-pdf).

## Erros comuns

- **A viewport não mostra nada.** O modelo está vazio, ou a vista está apontada para outro lugar. Selecione a moldura e clique em {{ui:Mostrar o modelo inteiro}}.
- **A lista de escalas mostra só razões, sem escalas em pés e polegadas.** Defina {{ui:Unidades}} como {{ui:Polegadas}} ou {{ui:Pés}} na aba {{ui:Modelo}}.
- **1:100 parece dez vezes grande ou pequeno demais.** As unidades do desenho estão erradas. Defina {{ui:Unidades}} para o que uma unidade realmente representa.
- **Clicar na planta dentro da viewport não seleciona nada.** Em uma folha você seleciona os objetos da própria folha. Clique duas vezes dentro da viewport antes, para trabalhar na planta através dela.
- **Cliques fora da viewport não fazem nada.** Você está dentro de uma viewport: clique duas vezes fora dela, ou digite `PS`, para trabalhar na folha de novo.
- **"As viewports ficam em uma folha. Abra uma aba de folha (ou crie uma com LAYOUT) primeiro."** {{cmd:MVIEW}} só funciona em uma aba de folha.
