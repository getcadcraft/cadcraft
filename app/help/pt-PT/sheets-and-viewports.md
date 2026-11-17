---
title: Preparar uma folha com legenda e viewports
summary: Crie uma folha (layout) com moldura e legenda, defina a escala da viewport, acrescente uma segunda viewport para um detalhe e preencha a legenda.
keywords: layout, folha, espaço de papel, viewport, mview, vpview, legenda, escala, formato de papel, moldura, vports, escala de impressão, mspace, pspace, espaço modelo, entrar na viewport, duplo clique na viewport
from: 45a45de8
---

## O que vai criar

Uma folha A3 com uma legenda, a planta inteira numa viewport a 1:100, e uma segunda viewport a mostrar um canto a 1:20.

## Modelo e folhas

Desenha o edifício no separador {{ui:Modelo}}, em tamanho real: uma parede de 6 m tem 6000 unidades de comprimento em milímetros. Uma **folha** (layout) é uma área de papel, medida em milímetros ou polegadas. Uma **viewport** é uma janela recortada na folha que mostra o modelo a uma escala.

## Antes de começar

1. Abra ou desenhe uma planta no separador {{ui:Modelo}}.
2. Prima {{key:Esc}} para que nada fique selecionado.
3. Em {{ui:Definições atuais}}, defina {{ui:Unidades}} para a unidade em que desenhou, por exemplo {{ui:Milímetros}}.

As unidades importam: uma escala de viewport como 1:100 significa que um milímetro no papel mostra 100 milímetros reais, por isso o CadCraft precisa de saber o que vale uma unidade de desenho. Um desenho deixado como {{ui:Sem unidades}} é tomado como estando na unidade do papel (milímetros em papel ISO, polegadas em papel norte-americano).

## Criar a folha

1. Clique no botão {{ui:+}} à direita dos separadores por baixo do desenho, ou escreva `LAYOUT` e prima {{key:Enter}}, ou clique em {{ui:Nova folha}}.

Abre-se um novo separador, `Layout1`. Deverá ver uma folha sobre uma secretária mais escura: uma moldura, uma legenda no canto inferior direito e uma viewport por cima dela, a mostrar o modelo inteiro na maior escala padrão que cabe. O histórico indica o papel: ISO A3 para desenhos métricos e sem unidades, Tabloid (ANSI B) para desenhos em polegadas ou pés.

2. Clique em {{ui:Extensão}} para ajustar a folha ao ecrã.

## Escolher o papel

1. Prima {{key:Esc}} para que nada fique selecionado. O cabeçalho do painel direito diz "Folha: Layout1".
2. Em {{ui:Nome}}, escreva `A-101 Plan` e prima {{key:Enter}}. O separador é renomeado.
3. Em {{ui:Papel}}, escolha um formato.
4. Em {{ui:Orientação}}, escolha {{ui:Horizontal}} ou {{ui:Vertical}}.

:::warning
Alterar o papel não move nem redimensiona o que já está na folha. Depois de alterar, verifique se a moldura, a legenda e a viewport ainda cabem, e mova-as ou redimensione-as com os pontos de controlo (grips). Trocar entre papel em milímetros e papel em polegadas mantém os números, por isso tudo muda de tamanho: a barra de estado avisa-o.
:::

## Definir a escala da viewport

1. Clique na moldura da viewport (a sua borda). O cabeçalho do painel diz "Viewport".
2. Em {{ui:Escala}}, escolha `1:100`.

O modelo dentro da viewport redesenha-se a 1:100, centrado onde estava. A lista oferece escalas métricas de 10:1 a 1:10000; desenhos em polegadas ou pés também têm escalas arquitetónicas (1/4" = 1'-0" e semelhantes) e escalas de engenharia (1" = 20' e semelhantes). {{ui:Ajustar todo o modelo}} define uma escala exata, não padrão, que faz caber tudo.

3. Se a planta já não estiver centrada, altere {{ui:X}} e {{ui:Y}} em {{ui:Centro da vista (modelo)}} no painel direito: são o ponto do modelo mostrado no centro da viewport.

## Mostrar parte do modelo numa viewport

1. Com a viewport selecionada, clique em {{ui:Escolher uma janela no modelo…}} no painel direito (ou escreva `VPVIEW` e prima {{key:Enter}}).
2. O CadCraft muda para o separador {{ui:Modelo}}. Clique num canto da área a mostrar.
3. Clique no canto oposto.

Volta à folha, e a viewport mostra essa área à maior escala padrão que cabe; o histórico diz qual. {{ui:Mostrar todo o modelo}} volta à planta inteira numa escala padrão.

## Acrescentar uma segunda viewport para um detalhe

1. Abra espaço na folha: selecione a primeira viewport e arraste um ponto de controlo de canto para a tornar mais pequena.
2. Escreva `MV` e prima {{key:Enter}}, ou clique em {{ui:Viewport}} no grupo Folhas.
3. Clique num canto da nova viewport na folha.
4. Clique no canto oposto.

A nova viewport mostra o modelo inteiro. O histórico indica a sua escala.

5. Clique na moldura da nova viewport.
6. Clique em {{ui:Escolher uma janela no modelo…}} e escolha uma área pequena à volta de um canto da planta.
7. Em {{ui:Escala}}, escolha `1:20`.

As molduras das viewports estão na camada `Viewports`, definida para não imprimir, por isso as molduras aparecem no ecrã mas não no PDF.

## Preencher a legenda

A legenda é feita de linhas e texto normais na camada `Title block`. Começa com o nome do desenho, a escala da primeira viewport, a data de hoje e o número da folha.

1. Faça duplo clique no texto de título grande. Abre-se uma caixa de edição por cima dele.
2. Escreva o título da folha.
3. Clique em {{ui:OK}}, ou prima {{key:Mod+Enter}}.

Faça o mesmo para os outros campos. Use {{cmd:TEXT}} para escrever na célula vazia "DRAWN BY". O texto SCALE não se atualiza sozinho quando altera a escala de uma viewport: edite-o à mão.

## Desenhar na folha

Tudo o que desenha num separador de folha fica no papel, em unidades de papel: um texto de altura 3.5 tem 3.5 mm de altura numa folha ISO. Notas, setas de norte e molduras de folha pertencem aqui.

Para alterar a própria planta, vá ao separador {{ui:Modelo}}, ou trabalhe através de uma viewport (secção seguinte); todas as viewports mostram a alteração.

## Trabalhar no modelo através de uma viewport

1. Faça duplo clique dentro de uma viewport, fora da sua moldura. Ou escreva `MS` e prima {{key:Enter}}: com uma só viewport na folha, entra diretamente; com várias, clique dentro da que quer.

A moldura fica mais grossa, o histórico diz que está dentro, e o separador da folha continua selecionado. Tudo o que desenhar ou alterar fica agora no modelo, em unidades do modelo, como no separador {{ui:Modelo}}: uma linha desenhada dentro de uma viewport a 1:100 está em milímetros reais. As camadas congeladas nesta viewport não podem ser escolhidas aqui.

2. Use a roda do rato, ou arraste com o botão do meio, para aplicar zoom e deslocar o que a viewport mostra. A folha mantém-se onde está.
3. Faça duplo clique em qualquer ponto fora da moldura, ou escreva `PS` e prima {{key:Enter}}.

Volta à folha. A viewport mantém a vista com que a deixou; {{key:Mod+Z}} repõe a vista anterior num único passo. Clicar em qualquer separador por baixo do desenho também sai da viewport.

:::note
Uma viewport cuja apresentação está bloqueada ({{ui:Apresentação bloqueada}} em {{ui:Propriedades}}) mantém a sua vista: dentro dela, deslocar e aplicar zoom movem a folha inteira. Uma viewport desligada não pode ser aberta.
:::

## Identificar uma vista com o seu nome

Um título de vista por baixo de uma viewport pode mostrar o nome da vista da viewport e acompanhá-lo:

1. Dê um nome à vista: selecione a moldura da viewport e preencha {{ui:Nome da vista}} em {{ui:Propriedades}}, ou guarde a vista no separador {{ui:Modelo}} com {{cmd:NAMEDVIEW}} e, com a viewport selecionada, escreva `VPVIEW`, `V` e o nome da vista: a viewport mostra essa vista e toma esse nome.
2. Escreva `VIEWLABEL` (`VL`) e prima {{key:Enter}}, depois clique onde deve ficar a etiqueta ({{key:Enter}} a coloca por baixo do canto inferior esquerdo da viewport).

Quando o nome da vista muda, a etiqueta muda com ele, no mesmo passo de anulação.

## Congelar uma camada numa viewport

Para ocultar uma camada numa viewport, mas não nas outras (mobiliário num detalhe, por exemplo):

1. Selecione a moldura da viewport, ou trabalhe dentro dela (duplo clique).

O painel {{ui:Camadas}} ganha mais um botão em cada linha, e uma linha por cima da lista diz isso.

2. Clique nesse botão na linha da camada.

A camada desaparece só dessa viewport. Clique de novo para a descongelar; {{key:Mod+Z}} anula qualquer uma das ações. Para várias camadas ou viewports de uma vez, escreva `VPLAYER`: `F` (Congelar) ou `T` (Descongelar), os nomes das camadas (`A-*` apanha todas as camadas que começam por A-), depois `C` (Atual), `A` (Todas) ou `S` (Selecionar). `VPLAYER` `V` (Vpvisdflt) escolhe as camadas com que as novas viewports começam congeladas.

## Mais folhas

Cada {{ui:+}} acrescenta outra folha (`Layout2`, `Layout3` …) com o número seguinte. Para apagar a folha aberta, prima {{key:Esc}} e clique em {{ui:Eliminar esta folha}} no painel direito. Elimina-se sem pedir confirmação; {{key:Mod+Z}} a repõe.

Imprima uma folha com {{ui:Imprimir esta folha}} ou {{key:Mod+P}}; veja [Imprimir para PDF](topic:plot-pdf).

## Erros comuns

- **A viewport não mostra nada.** O modelo está vazio, ou a vista está apontada para outro lado. Selecione a moldura e clique em {{ui:Mostrar todo o modelo}}.
- **A lista de escalas só mostra rácios e nenhuma escala em pés e polegadas.** Defina {{ui:Unidades}} para {{ui:Polegadas}} ou {{ui:Pés}} no separador {{ui:Modelo}}.
- **1:100 parece dez vezes maior ou menor.** As unidades do desenho estão erradas. Defina {{ui:Unidades}} para o que uma unidade vale realmente.
- **Clicar na planta dentro da viewport não seleciona nada.** Numa folha seleciona-se os objetos da própria folha. Faça primeiro duplo clique dentro da viewport para trabalhar na planta através dela.
- **Cliques fora da viewport não fazem nada.** Está dentro de uma viewport: faça duplo clique fora dela, ou escreva `PS`, para trabalhar na folha de novo.
- **"As viewports ficam numa folha. Abra primeiro um separador de folha (ou crie um com LAYOUT)."** O {{cmd:MVIEW}} só funciona num separador de folha.
