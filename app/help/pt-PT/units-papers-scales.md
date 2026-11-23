---
title: Unidades, formatos de papel e escalas
summary: O que significam as unidades de desenho no CadCraft, os formatos de papel para folhas e impressões, todas as escalas normalizadas e como os tamanhos de texto e de cotas se relacionam com a escala de impressão.
keywords: unidades, milímetros, polegadas, pés, pés e polegadas, arquitetónico, engenharia, fracionário, frações, lunits, formato de comprimento, precisão, metros, formato de papel, a3, a1, arch d, ansi, tabloid, letter, escala, 1:100, 1/4 polegada, escala arquitetónica, escala de engenharia, insunits
from: 7dc9b62e
---

## Unidades de desenho

Desenha à escala real, em unidades de desenho. O que representa uma unidade é a definição **Unidades** do desenho:

1. Prima {{key:Esc}} para não ter nada selecionado, no separador {{ui:Modelo}}.
2. Em {{ui:Definições atuais}}, escolha {{ui:Unidades}}: {{ui:Sem unidades}}, {{ui:Milímetros}}, {{ui:Centímetros}}, {{ui:Metros}}, {{ui:Polegadas}} ou {{ui:Pés}}.

As cotas podem escrever os seus comprimentos em milímetros, centímetros, metros ou quilómetros, seja qual for a unidade do desenho: veja [Cotas em mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Alterar as unidades não redimensiona nada. Muda a forma como as escalas são lidas nas folhas e nas impressões, e quais as escalas oferecidas. Um desenho aberto a partir de um DWG ou DXF mantém as unidades guardadas no ficheiro; a secção {{ui:Desenho}} do painel da esquerda mostra-as.

Um desenho {{ui:Sem unidades}} é tratado como estando na unidade do papel: milímetros em papel ISO, polegadas em papel US.

## Pés e polegadas, e frações

A forma como os comprimentos são **escritos e introduzidos** é uma definição à parte, o formato de comprimento. Não altera nenhuma geometria, apenas o aspeto dos números e o que pode escrever.

1. Prima {{key:Esc}} para não ter nada selecionado, no separador {{ui:Modelo}}.
2. Em {{ui:Definições atuais}}, escolha {{ui:Formato de comprimento}}: {{ui:Decimal}} (`150.5`), {{ui:Arquitetónico}} (`12'-6 1/2"`), {{ui:Engenharia}} (`12'-6.5"`), {{ui:Fracionário}} (`150 1/2`) ou {{ui:Científico}} (`1.505E+02`).
3. Escolha {{ui:Precisão}}: casas decimais, ou a fração mais pequena (1/16 é a escolha habitual para arquitetónico).

Ou escreva {{cmd:UNITS}} (`UN`) e responda às suas duas perguntas.

Com {{ui:Arquitetónico}} ou {{ui:Engenharia}}, uma unidade de desenho é uma polegada, como no AutoCAD: defina também {{ui:Unidades}} para {{ui:Polegadas}}. Pode então escrever comprimentos em pés e polegadas em qualquer sítio onde se peça um comprimento, e nas caixas de {{ui:Propriedades}}:

| Escreve | Significa |
|---|---|
| `12'6"` ou `12'-6"` | 12 pés e 6 polegadas (150) |
| `12'6-1/2"` | 12 pés e 6½ polegadas. Use um hífen antes da fração: {{key:Space}} é {{key:Enter}} na linha de comandos. |
| `12'` | 12 pés |
| `6"` ou `6` | 6 polegadas: um número simples são polegadas |
| `1/2`, `6-1/2` | as frações funcionam em qualquer formato |

Os pontos aceitam os mesmos comprimentos: `@12'6",0` ou `@10'<90`. Os ângulos mantêm-se em graus.

O formato aparece no histórico ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: áreas em polegadas quadradas e pés quadrados), em {{ui:Propriedades}}, nas coordenadas da barra de estado, e nas **novas cotas**. As folhas mantêm as unidades do seu papel (milímetros ou polegadas) como decimais.

:::note
O formato de comprimento é guardado nos ficheiros DWG e DXF, e cada cota mantém o seu: um desenho guardado volta a abrir como o deixou.
:::

## Formatos de papel

As folhas e as impressões do modelo usam estes tamanhos, em qualquer orientação:

| Formato | Tamanho | Unidade na folha |
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

As novas folhas começam em ISO A3 para desenhos métricos e sem unidades, e em Tabloid para desenhos em polegadas ou pés. As impressões do modelo começam em ISO A4 ou Letter da mesma forma, e depois lembram-se da sua última escolha. As folhas de ficheiros abertos mantêm o seu próprio tamanho, mostrado como "Personalizado" quando não é um destes.

## Escalas

Uma escala `1:n` significa que uma unidade no papel mostra n da mesma unidade no modelo; assim, 1:100 mostra 1 m de edifício como 10 mm de papel. O CadCraft calcula isto a partir das unidades do desenho e da unidade do papel.

**Escalas métricas**, oferecidas em todos os desenhos: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Escalas arquitetónicas**, oferecidas quando as unidades são polegadas ou pés: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Escalas de engenharia**, oferecidas quando as unidades são polegadas ou pés: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**As suas próprias escalas.** Escreva `SCALELISTEDIT` (ou `SCALELIST`) para acrescentar uma escala sua, como 1:75 ou uma escala de implantação de 2 de papel para 300 de desenho. `Add` pede um nome, depois as unidades do papel e as unidades do desenho (um nome como `1:75` oferece os seus próprios números; prima {{key:Enter}} para os usar). `Edit`, `Delete`, `List` e `Reset` atuam sobre a mesma lista; `Reset` volta à lista normalizada. As suas escalas aparecem depois das normalizadas na lista de escalas da viewport nas Propriedades e na caixa {{ui:Imprimir para PDF}}, uma viewport nessa escala mostra o seu nome, e são guardadas no desenho (DWG e DXF 2000) como a lista de escalas do desenho. Um desenho aberto a partir de outro programa traz a sua lista; as escalas que corresponderem a uma normalizada não são mostradas duas vezes.

Quando uma viewport é apontada com {{ui:Mostrar todo o modelo}} ou {{ui:Escolher uma janela no modelo…}}, o CadCraft escolhe a maior escala normalizada que caiba. {{ui:Ajustar todo o modelo}} define antes uma escala exata, que se lê como uma razão simples.

## Tamanhos no papel e no modelo

Os tamanhos de texto e de cota estão nas unidades do espaço onde desenha.

| Quer no papel | Desenhado numa folha | Desenhado no modelo a 1:50 (desenho em mm) | Desenhado no modelo a 1/4" = 1'-0" (desenho em polegadas) |
|---|---|---|---|
| Texto de 2.5 mm | 2.5 | 125 | — |
| Texto de 3/32" | 0.09375 | — | 4.5 |

Para as cotas, mantenha os tamanhos como tamanhos de papel e defina a escala global ({{cmd:DIMSCALE}}) para a escala de impressão: 50 para 1:50, 48 para 1/4" = 1'-0". Veja [Definir tamanhos de cotas](topic:dimension-settings).

## Anotar por escala

Desenhe o modelo à escala real e deixe o CadCraft fazer as contas acima por si.

1. Selecione o texto ou as cotas que devem manter o seu tamanho no papel. Nas Propriedades marque {{ui:Anotativo}}. {{ui:Tamanho no papel}} passa então a indicar, por exemplo, `2.5 mm at 1:50`.
2. Escreva {{cmd:ANNOSCALE}} e a escala à qual o desenho será impresso, como `1:100`.

Cada texto e cota anotativos são redimensionados para imprimirem com o mesmo tamanho na nova escala: texto de 2.5 mm tem 125 de altura num desenho em milímetros a 1:50 e 250 a 1:100. A largura de um parágrafo muda com ele; o texto, as setas e os intervalos de uma cota mudam em conjunto (a sua escala global). É um único passo de anular, e os objetos que não são anotativos nunca são alterados.

A definição é guardada em DWG e DXF: os outros programas leem o indicador anotativo, e o CadCraft mantém também a escala para a qual cada objeto está dimensionado.

Se o seu escritório define alturas de papel no suplemento Políticas predefinidas (Definições › Global › Políticas predefinidas › Tamanhos de anotação no papel), {{cmd:ANNOSCALE}} define também a altura com que começa o novo texto para a altura do escritório para notas nessa escala. Veja [Políticas predefinidas](topic:default-policies).

### Um objeto em várias escalas

Uma folha mostra muitas vezes a mesma planta a 1:100 e uma parte dela a 1:50. Atribua às notas e cotas as duas escalas e cada viewport mostra-as no seu tamanho de papel:

1. Selecione o texto e as cotas anotativos e escreva `OBJECTSCALE`.
2. Escolha `Add` e escreva a escala, por exemplo `1:50`. (`Current scale` acrescenta a escala de anotação do desenho; `List` mostra o que cada objeto mantém; `Delete` retira uma.)

Uma viewport cuja escala está na lista de um objeto mostra-o no tamanho dessa escala: texto de 2.5 mm é desenhado com 250 de altura numa viewport a 1:100 e com 125 numa a 1:50, no ecrã e na impressão. O objeto fica onde está; só o tamanho difere. Numa viewport com uma escala que não está na lista, o objeto mostra-se com o tamanho que tem, até escrever `ANNOALLVISIBLE` e escolher `OFF`: então fica lá de fora. {{cmd:ANNOSCALE}} redimensiona os objetos que listam a nova escala e deixa os outros como estão.

As listas são guardadas em DWG e DXF como dados próprios do CadCraft. Outro programa vê cada objeto como anotativo, na única escala para a qual está dimensionado. O interruptor ANNOALLVISIBLE não fica guardado no ficheiro.

## Espessuras de linha e tipos de linha

Uma camada, ou um objeto, pode ter uma **espessura de linha** (0.05 a 2.11 mm) e um **tipo de linha** (tracejado, oculto, eixo, fantasma, ponto…). Defina-os no painel da direita: com nada selecionado, {{ui:Tipo de linha}} e {{ui:Espessura de linha}} em {{ui:Definições atuais}} são o que os novos objetos recebem ({{ui:PorCamada}} para seguir a sua camada), e os dois em {{ui:Camada …}} são os da própria camada atual. Com objetos selecionados, as mesmas duas linhas e {{ui:Escala do tipo de linha}} alteram esses objetos. Os comandos são {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) e {{cmd:LTSCALE}} (`LTS`).

Os tipos de linha mostram-se no ecrã e nas impressões. Os seus traços estão em unidades de desenho: um desenho métrico usa os tamanhos ISO (DASHED: traços de 12.7 mm), um desenho em polegadas os tamanhos em polegadas (0.5"). Se os traços parecerem demasiado pequenos ou grandes, altere a {{ui:Escala do tipo de linha}} do desenho (LTSCALE): cada traço e cada intervalo é multiplicado por ela; a escala própria de um objeto multiplica-a de novo. Um padrão fino demais para se ver é desenhado como linha contínua.

As espessuras de linha são impressas, em mm no papel seja qual for a escala. As linhas com a espessura {{ui:Predefinição}} usam a espessura de caneta escolhida na caixa {{ui:Imprimir para PDF}} (0.13 a 0.70 mm; 0.25 mm para começar); uma espessura de 0 imprime-se como a linha mais fina. No ecrã cada linha tem um pixel de largura até premir {{ui:LWT}} na barra de estado (ou escrever {{cmd:LWDISPLAY}}): então uma espessura acima de 0.25 mm desenha-se mais larga (0.5 mm = 2 pixels) no modelo, e na sua largura real no papel numa folha. A escolha fica guardada neste navegador.

## O padrão do escritório

Um escritório pode manter as alturas de texto no papel, as camadas, os campos da legenda e os modelos num único registo, o padrão do escritório. O CadCraft lê-o nesta ordem: o registo próprio do desenho (definido com {{cmd:OFFICESTANDARD}} › `Import`, guardado no ficheiro), o padrão partilhado da sua equipa, e depois as suas Políticas predefinidas. O texto e as cotas anotativos recebem a sua altura no papel desse padrão à escala de anotação. Um padrão vazio não altera nada. {{cmd:OFFICESTANDARD}} › `Layers` acrescenta as camadas do escritório que um desenho não tem.
