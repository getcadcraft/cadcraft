---
title: Unidades, formatos de papel e escalas
summary: O que significam as unidades de desenho no CadCraft, os formatos de papel para folhas e impressões, todas as escalas padrão, e como o tamanho do texto e das cotas se relaciona com a escala de impressão.
keywords: unidades, milímetros, polegadas, pés, pés e polegadas, arquitetónico, engenharia, fracionário, frações, lunits, formato de comprimento, precisão, metros, formato de papel, a3, a1, arch d, ansi, tabloid, letter, escala, 1:100, 1/4 polegada, escala arquitetónica, escala de engenharia, insunits
from: 8346236a
---

## Unidades de desenho

Desenha em tamanho real, em unidades de desenho. O que vale uma unidade é a definição **Unidades** do desenho:

1. Prima {{key:Esc}} para que nada fique selecionado, no separador {{ui:Modelo}}.
2. Em {{ui:Definições atuais}}, escolha {{ui:Unidades}}: {{ui:Sem unidades}}, {{ui:Milímetros}}, {{ui:Centímetros}}, {{ui:Metros}}, {{ui:Polegadas}} ou {{ui:Pés}}.

As cotas podem escrever os seus comprimentos em milímetros, centímetros, metros ou quilómetros, seja qual for a unidade do desenho: veja [Cotas em mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Alterar as unidades não redimensiona nada. Altera a forma como as escalas são lidas nas folhas e nas impressões, e quais as escalas oferecidas. Um desenho aberto a partir de um DWG ou DXF mantém as unidades guardadas no ficheiro; a secção {{ui:Desenho}} do painel esquerdo mostra-as.

Um desenho {{ui:Sem unidades}} é tratado como estando na unidade do papel: milímetros em papel ISO, polegadas em papel norte-americano.

## Pés e polegadas, e frações

Como os comprimentos são **escritos e introduzidos** é uma definição separada, o formato de comprimento. Não altera a geometria, apenas a aparência dos números e o que se pode escrever.

1. Prima {{key:Esc}} para que nada fique selecionado, no separador {{ui:Modelo}}.
2. Em {{ui:Definições atuais}}, escolha {{ui:Formato de comprimento}}: {{ui:Decimal}} (`150.5`), {{ui:Arquitetónico}} (`12'-6 1/2"`), {{ui:Engenharia}} (`12'-6.5"`), {{ui:Fracionário}} (`150 1/2`) ou {{ui:Científico}} (`1.505E+02`).
3. Escolha {{ui:Precisão}}: casas decimais, ou a fração mais pequena (1/16 é a escolha habitual para o formato arquitetónico).

Ou escreva {{cmd:UNITS}} (`UN`) e responda às duas perguntas.

Com {{ui:Arquitetónico}} ou {{ui:Engenharia}}, uma unidade de desenho é uma polegada, como no AutoCAD: defina também {{ui:Unidades}} para {{ui:Polegadas}}. Pode então escrever comprimentos em pés e polegadas em qualquer sítio onde se peça um comprimento, e nas caixas de {{ui:Propriedades}}:

| Escrita | Significa |
|---|---|
| `12'6"` ou `12'-6"` | 12 pés e 6 polegadas (150) |
| `12'6-1/2"` | 12 pés e 6½ polegadas. Use um hífen antes da fração: {{key:Space}} é {{key:Enter}} na linha de comandos. |
| `12'` | 12 pés |
| `6"` ou `6` | 6 polegadas: um número simples é em polegadas |
| `1/2`, `6-1/2` | as frações funcionam em qualquer formato |

Os pontos aceitam os mesmos comprimentos: `@12'6",0` ou `@10'<90`. Os ângulos continuam em graus.

O formato aparece no histórico ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: áreas em polegadas quadradas e pés quadrados), em {{ui:Propriedades}}, nas coordenadas da barra de estado, e nas **novas cotas**. As folhas mantêm as suas unidades de papel (milímetros ou polegadas) como decimais.

:::note
O formato de comprimento é guardado em ficheiros DWG e DXF, e cada cota mantém o próprio formato: um desenho guardado volta a abrir-se como o deixou.
:::

## Tamanhos de papel

As folhas e as impressões de modelo usam estes tamanhos, em qualquer orientação:

| Papel | Tamanho | Unidade na folha |
|---|---|---|
| ISO A4 | 297 × 210 mm | milímetros |
| ISO A3 | 420 × 297 mm | milímetros |
| ISO A2 | 594 × 420 mm | milímetros |
| ISO A1 | 841 × 594 mm | milímetros |
| ISO A0 | 1189 × 841 mm | milímetros |
| Letter | 11 × 8.5 in | polegadas |
| Legal | 14 × 8.5 in | polegadas |
| Tabloid / ANSI B | 17 × 11 in | polegadas |
| ANSI C | 22 × 17 in | polegadas |
| ANSI D | 34 × 22 in | polegadas |
| ARCH C | 24 × 18 in | polegadas |
| ARCH D | 36 × 24 in | polegadas |
| ARCH E | 48 × 36 in | polegadas |

Novas folhas começam em ISO A3 para desenhos métricos e sem unidades, e em Tabloid para desenhos em polegadas ou pés. As impressões de modelo começam em ISO A4 ou Letter da mesma forma, e depois memorizam a última escolha. As folhas de ficheiros abertos mantêm o seu próprio tamanho, mostrado como "Personalizado" quando não corresponde a nenhum destes.

## Escalas

Uma escala `1:n` significa que uma unidade no papel mostra n da mesma unidade no modelo, por isso 1:100 mostra 1 m de edifício como 10 mm de papel. O CadCraft calcula isto a partir das unidades do desenho e da unidade do papel.

**Escalas métricas**, oferecidas para todos os desenhos: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Escalas arquitetónicas**, oferecidas quando as unidades são polegadas ou pés: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Escalas de engenharia**, oferecidas quando as unidades são polegadas ou pés: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Escalas próprias.** Escreva `SCALELISTEDIT` (ou `SCALELIST`) para acrescentar uma escala própria, como 1:75 ou uma escala de local de 2 de papel para 300 de desenho. `Acrescentar` pede um nome e depois as unidades de papel e as unidades de desenho (um nome como `1:75` oferece os seus próprios números; prima {{key:Enter}} para os aceitar). `Editar`, `Eliminar (D)`, `Listar` e `Repor` funcionam na mesma lista; `Repor` volta à lista padrão. As escalas próprias aparecem depois das padrão na lista de escalas de viewport de {{ui:Propriedades}} e na caixa de diálogo {{ui:Imprimir para PDF}}; uma viewport nessa escala mostra o nome dela, e as escalas ficam guardadas no desenho (DWG e DXF 2000) como a lista de escalas do desenho. Um desenho aberto a partir de outro programa traz consigo a respetiva lista; as escalas que coincidem com uma padrão não aparecem duplicadas.

Quando uma viewport é apontada com {{ui:Mostrar todo o modelo}} ou {{ui:Escolher uma janela no modelo…}}, o CadCraft escolhe a maior escala padrão que cabe. {{ui:Ajustar todo o modelo}} define, em vez disso, uma escala exata, que aparece como um simples rácio.

## Tamanhos no papel e no modelo

Os tamanhos do texto e das cotas estão nas unidades do espaço em que desenha.

| Quer no papel | Desenhado numa folha | Desenhado no modelo a 1:50 (desenho em mm) | Desenhado no modelo a 1/4" = 1'-0" (desenho em polegadas) |
|---|---|---|---|
| Texto de 2.5 mm | 2.5 | 125 | — |
| Texto de 3/32" | 0.09375 | — | 4.5 |

Para as cotas, mantenha os tamanhos como tamanhos de papel e defina a escala global ({{cmd:DIMSCALE}}) para a escala de impressão: 50 para 1:50, 48 para 1/4" = 1'-0". Veja [Definir tamanhos de cotas](topic:dimension-settings).

## Anotar por escala

Desenhe o modelo em tamanho real e deixe o CadCraft fazer as contas acima.

1. Selecione o texto ou as cotas que devem manter o seu tamanho no papel. Em {{ui:Propriedades}}, marque {{ui:Anotativo}}. {{ui:Tamanho no papel}} indica então, por exemplo, `2.5 mm a 1:50`.
2. Escreva {{cmd:ANNOSCALE}} e a escala a que o desenho será impresso, como `1:100`.

Cada texto e cota anotativos é redimensionado para sair impresso com o mesmo tamanho na nova escala: texto de 2.5 mm fica com 125 de altura num desenho em milímetros a 1:50, e com 250 a 1:100. A largura de um parágrafo muda com ele; o texto, as setas e os espaçamentos de uma cota mudam em conjunto (a sua escala global). É um único passo de anulação, e os objetos não anotativos nunca são alterados.

A definição é guardada em DWG e DXF: outros programas leem a marca de anotativo, e o CadCraft guarda também a escala para a qual cada objeto está dimensionado.

Se o seu escritório definir alturas de papel no suplemento Default Policies (Definições › Global › Default Policies › Tamanhos de anotação no papel), {{cmd:ANNOSCALE}} também define a altura com que o novo texto começa como a altura do escritório para notas nessa escala. Veja [Default Policies](topic:default-policies).

### Um objeto em várias escalas

Uma folha costuma mostrar a mesma planta a 1:100 e uma parte dela a 1:50. Dê às notas e às cotas as duas escalas, e cada viewport mostra-as no seu tamanho no papel:

1. Selecione o texto anotativo e as cotas e escreva `OBJECTSCALE`.
2. Escolha `Acrescentar` e escreva a escala, por exemplo `1:50`. (`Escala atual (C)` acrescenta a escala de anotação do desenho; `Listar (L)` mostra o que cada objeto mantém; `Eliminar (D)` retira uma.)

Uma viewport cuja escala está na lista de um objeto mostra-o no tamanho dessa escala: texto de 2.5 mm é desenhado com 250 de altura numa viewport a 1:100, e com 125 numa a 1:50, no ecrã e na impressão. O objeto fica onde está; só o seu tamanho muda. Numa viewport a uma escala que não está na lista do objeto, este aparece com o tamanho que tem, até escrever `ANNOALLVISIBLE` e escolher `OFF`: então fica de fora. {{cmd:ANNOSCALE}} redimensiona os objetos que listam a nova escala e deixa os outros como estão.

As listas são guardadas em DWG e DXF como dados próprios do CadCraft. Outro programa vê cada objeto como anotativo, na única escala para a qual foi dimensionado. A opção ANNOALLVISIBLE não fica guardada no ficheiro.

## Espessuras de linha e tipos de linha

Uma camada, ou um objeto, pode ter uma **espessura de linha** (0.05 a 2.11 mm) e um **tipo de linha** (tracejado, oculto, eixo, fantasma, pontilhado…). Defina-os no painel direito: com nada selecionado, {{ui:Tipo de linha}} e {{ui:Espessura de linha}} em {{ui:Definições atuais}} são o que os novos objetos recebem ({{ui:PorCamada}} para seguir a camada deles), e os dois em {{ui:Camada …}} são os da camada atual. Com objetos selecionados, as mesmas duas linhas e {{ui:Escala do tipo de linha}} alteram esses objetos. Os comandos são {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) e {{cmd:LTSCALE}} (`LTS`).

Os tipos de linha aparecem no ecrã e nas impressões. Os seus traços estão em unidades de desenho: um desenho métrico usa os tamanhos ISO (DASHED: traços de 12.7 mm), e um desenho em polegadas os de polegadas (0.5"). Se os traços parecerem pequenos ou grandes demais, altere a {{ui:Escala do tipo de linha}} do desenho (LTSCALE): cada traço e espaço é multiplicado por ela, e a escala própria de um objeto multiplica-a de novo. Um padrão demasiado fino para se ver é desenhado como linha contínua.

As espessuras de linha são impressas em milímetros no papel, seja qual for a escala. As linhas com a espessura {{ui:Predefinição}} usam a largura de caneta escolhida na caixa de diálogo {{ui:Imprimir para PDF}} (0.13 a 0.70 mm; 0.25 mm para começar); uma espessura de 0 imprime-se como a linha mais fina. No ecrã, cada linha tem um pixel de largura até premir {{ui:LWT}} na barra de estado (ou escrever {{cmd:LWDISPLAY}}): então uma espessura acima de 0.25 mm desenha-se mais larga (0.5 mm = 2 pixels) no modelo, e com a sua largura real no papel numa folha. A escolha fica memorizada neste navegador.
