---
title: Unidades, tamanhos de papel e escalas
summary: O que significam as unidades de desenho no CadCraft, os tamanhos de papel para folhas e plotagens, cada escala padrão, e como os tamanhos de texto e de cota se relacionam com a escala de plotagem.
keywords: unidades, milímetros, polegadas, pés, pés e polegadas, arquitetônico, engenharia, fracionário, frações, lunits, formato de comprimento, precisão, metros, tamanho de papel, a3, a1, arch d, ansi, tabloide, carta, escala, 1:100, 1/4 polegada, escala arquitetônica, escala de engenharia, insunits
from: 7dc9b62e
---

## Unidades de desenho

Você desenha em tamanho real, em unidades de desenho. O que uma unidade representa é a configuração **Unidades** do desenho:

1. Pressione {{key:Esc}} para que nada esteja selecionado, na aba {{ui:Model}}.
2. Em {{ui:Current settings}}, escolha {{ui:Units}}: {{ui:Unitless}}, {{ui:Millimeters}}, {{ui:Centimeters}}, {{ui:Meters}}, {{ui:Inches}} ou {{ui:Feet}}.

As cotas podem escrever seus comprimentos em milímetros, centímetros, metros ou quilômetros, seja qual for a unidade do desenho: veja [Cotas em mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Mudar as unidades não redimensiona nada. Muda como as escalas são lidas nas folhas e nas plotagens, e quais escalas são oferecidas. Um desenho aberto de um DWG ou DXF mantém as unidades guardadas no arquivo; a seção {{ui:Drawing}} (Desenho) do painel da esquerda as mostra.

Um desenho {{ui:Unitless}} é tratado como estando na unidade do papel: milímetros em papel ISO, polegadas em papel americano.

## Pés e polegadas, e frações

Como os comprimentos são **escritos e digitados** é uma configuração separada, o formato de comprimento. Ele não altera nenhuma geometria, só como os números aparecem e o que você pode digitar.

1. Pressione {{key:Esc}} para que nada esteja selecionado, na aba {{ui:Model}}.
2. Em {{ui:Current settings}}, escolha {{ui:Length format}}: {{ui:Decimal}} (`150.5`), {{ui:Architectural}} (`12'-6 1/2"`), {{ui:Engineering}} (`12'-6.5"`), {{ui:Fractional}} (`150 1/2`) ou {{ui:Scientific}} (`1.505E+02`).
3. Escolha {{ui:Precision}}: casas decimais, ou a menor fração (1/16 é a escolha usual para o arquitetônico).

Ou digite {{cmd:UNITS}} (`UN`) e responda às duas perguntas dele.

Com {{ui:Architectural}} ou {{ui:Engineering}}, uma unidade de desenho é uma polegada, como no AutoCAD: defina {{ui:Units}} como {{ui:Inches}} também. Assim você pode digitar comprimentos em pés e polegadas em qualquer lugar em que um comprimento é pedido, e nas caixas de {{ui:Properties}}:

| Você digita | Significa |
|---|---|
| `12'6"` ou `12'-6"` | 12 pés e 6 polegadas (150) |
| `12'6-1/2"` | 12 pés e 6½ polegadas. Use um hífen antes da fração: {{key:Space}} é {{key:Enter}} na linha de comando. |
| `12'` | 12 pés |
| `6"` ou `6` | 6 polegadas: um número simples é em polegadas |
| `1/2`, `6-1/2` | frações funcionam em qualquer formato |

Pontos aceitam os mesmos comprimentos: `@12'6",0` ou `@10'<90`. Ângulos continuam em graus.

O formato aparece no histórico ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: áreas em polegadas quadradas e pés quadrados), em {{ui:Properties}}, nas coordenadas da barra de status, e em **novas cotas**. Folhas mantêm as unidades do papel (milímetros ou polegadas) como decimais.

:::note
O formato de comprimento é salvo em arquivos DWG e DXF, e cada cota guarda o seu próprio: um desenho salvo abre como você o deixou.
:::

## Tamanhos de papel

Folhas e plotagens de modelo usam estes tamanhos, em qualquer orientação:

| Papel | Tamanho | Unidade na folha |
|---|---|---|
| ISO A4 | 297 × 210 mm | milímetros |
| ISO A3 | 420 × 297 mm | milímetros |
| ISO A2 | 594 × 420 mm | milímetros |
| ISO A1 | 841 × 594 mm | milímetros |
| ISO A0 | 1189 × 841 mm | milímetros |
| Carta (Letter) | 11 × 8.5 in | polegadas |
| Ofício (Legal) | 14 × 8.5 in | polegadas |
| Tabloide / ANSI B | 17 × 11 in | polegadas |
| ANSI C | 22 × 17 in | polegadas |
| ANSI D | 34 × 22 in | polegadas |
| ARCH C | 24 × 18 in | polegadas |
| ARCH D | 36 × 24 in | polegadas |
| ARCH E | 48 × 36 in | polegadas |

Novas folhas começam em ISO A3 para desenhos métricos e sem unidade, e em Tabloide para desenhos em polegadas ou pés. Plotagens de modelo começam em ISO A4 ou Carta do mesmo modo, depois lembram sua última escolha. Folhas de arquivos abertos mantêm o próprio tamanho, mostrado como {{ui:Custom}} (Personalizado) quando não é um destes.

## Escalas

Uma escala `1:n` significa que uma unidade no papel mostra n da mesma unidade no modelo, então 1:100 mostra 1 m de edifício como 10 mm de papel. O CadCraft calcula isto a partir das unidades do desenho e da unidade do papel.

**Escalas métricas**, oferecidas para todo desenho: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Escalas arquitetônicas**, oferecidas quando as unidades são polegadas ou pés: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Escalas de engenharia**, oferecidas quando as unidades são polegadas ou pés: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Suas próprias escalas.** Digite `SCALELISTEDIT` (ou `SCALELIST`) para adicionar uma escala própria, como 1:75 ou uma escala de implantação de 2 no papel : 300 no desenho. `Adicionar (A)` pede um nome, depois as unidades do papel e as do desenho (um nome como `1:75` oferece os próprios números; pressione {{key:Enter}} para aceitá-los). `Editar (E)`, `Excluir (D)`, `Listar (L)` e `Redefinir (R)` atuam na mesma lista; `Redefinir (R)` volta à lista padrão. Suas escalas aparecem depois das padrão na lista de escalas da viewport em {{ui:Properties}} e na caixa {{ui:Plot to PDF}}; uma viewport nessa escala é lida com o nome dela, e elas são salvas no desenho (DWG e DXF 2000) como a lista de escalas do desenho. Um desenho aberto de outro programa traz a lista consigo; escalas que ele tem e que coincidem com uma padrão não aparecem duas vezes.

Quando uma viewport é apontada com {{ui:Show the whole model}} ou {{ui:Pick a window on the model…}}, o CadCraft escolhe a maior escala padrão que cabe. {{ui:Fit the whole model}} define uma escala exata, que aparece como uma razão simples.

## Tamanhos no papel e no modelo

Tamanhos de texto e de cota estão nas unidades do espaço em que você desenha.

| Você quer no papel | Desenhado em uma folha | Desenhado no modelo em 1:50 (desenho em mm) | Desenhado no modelo em 1/4" = 1'-0" (desenho em polegadas) |
|---|---|---|---|
| Texto de 2.5 mm | 2.5 | 125 | — |
| Texto de 3/32" | 0.09375 | — | 4.5 |

Para cotas, mantenha os tamanhos como tamanhos de papel e defina a escala geral ({{cmd:DIMSCALE}}) como a escala de plotagem: 50 para 1:50, 48 para 1/4" = 1'-0". Veja [Definir tamanhos de cota](topic:dimension-settings).

## Anotar por escala

Desenhe o modelo em tamanho real e deixe o CadCraft fazer as contas acima para você.

1. Selecione o texto ou as cotas que devem manter seu tamanho no papel. Em Propriedades, marque {{ui:Annotative}}. {{ui:Size on paper}} então lê, por exemplo, `2.5 mm em 1:50`.
2. Digite {{cmd:ANNOSCALE}} e a escala em que o desenho será impresso, como `1:100`.

Todo texto e cota anotativos é redimensionado para sair impresso no mesmo tamanho na nova escala: texto de 2.5 mm fica com 125 de altura em um desenho em milímetros a 1:50 e com 250 a 1:100. A largura de um parágrafo muda junto; o texto, as setas e os vãos de uma cota mudam juntos (a escala geral dela). É um passo de desfazer, e objetos que não são anotativos nunca são alterados.

A configuração é salva em DWG e DXF: outros programas leem a marca de anotativo, e o CadCraft também guarda a escala para a qual cada objeto foi dimensionado.

Se o seu escritório define alturas no papel no complemento Políticas padrão (Configurações › Geral › Políticas padrão › Tamanhos de anotação no papel), {{cmd:ANNOSCALE}} também define a altura com que um novo texto começa como a altura do escritório para notas nessa escala. Veja [Políticas padrão](topic:default-policies).

### Um objeto em várias escalas

Uma folha frequentemente mostra a mesma planta a 1:100 e uma parte dela a 1:50. Dê às notas e cotas as duas escalas, e cada viewport as mostra no tamanho de papel delas:

1. Selecione o texto e as cotas anotativos e digite `OBJECTSCALE`.
2. Escolha `Adicionar (A)` e digite a escala, por exemplo `1:50`. (`Escala atual (E)` adiciona a escala de anotação do desenho; `Listar (L)` mostra as escalas de cada objeto; `Excluir (D)` remove uma.)

Uma viewport cuja escala está na lista de um objeto mostra-o no tamanho dessa escala: texto de 2.5 mm é desenhado com 250 de altura por uma viewport 1:100 e com 125 por uma 1:50, na tela e na plotagem. O objeto continua onde está; só o tamanho muda. Em uma viewport com uma escala que não está na lista do objeto, ele mostra o tamanho que tem, até você digitar `ANNOALLVISIBLE` e escolher `OFF`: então ele fica de fora ali. {{cmd:ANNOSCALE}} redimensiona os objetos cuja lista contém a nova escala e deixa os outros como estão.

As listas são salvas em DWG e DXF como dados próprios do CadCraft. Outro programa vê cada objeto como anotativo, na única escala para a qual foi dimensionado. A chave ANNOALLVISIBLE não é guardada no arquivo.

## Espessuras de linha e tipos de linha

Uma camada, ou um objeto, pode ter uma **espessura de linha** (0.05 a 2.11 mm) e um **tipo de linha** (tracejado, oculto, centro, fantasma, pontilhado…). Defina-os no painel da direita: com nada selecionado, {{ui:Linetype}} e {{ui:Lineweight}} em {{ui:Current settings}} são o que os novos objetos recebem ({{ui:By layer}} para seguir a camada deles), e os dois em {{ui:Layer …}} são os da camada atual. Com objetos selecionados, as mesmas duas linhas e {{ui:Linetype scale}} alteram esses objetos. Os comandos são {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) e {{cmd:LTSCALE}} (`LTS`).

Tipos de linha aparecem na tela e nas plotagens. Os traços deles estão em unidades de desenho: um desenho métrico usa os tamanhos ISO (DASHED: traços de 12.7 mm), um desenho em polegadas usa os em polegadas (0.5"). Se os traços parecerem pequenos ou grandes demais, altere a {{ui:Linetype scale}} do desenho (LTSCALE): cada traço e cada espaço é multiplicado por ela; a escala própria de um objeto a multiplica de novo. Um padrão fino demais para ser visto é desenhado como linha contínua.

Espessuras de linha são impressas nas plotagens, em mm no papel, qualquer que seja a escala. Linhas com a espessura {{ui:Default}} usam a largura de caneta escolhida na caixa {{ui:Plot to PDF}} (0.13 a 0.70 mm; começa em 0.25 mm); uma espessura de 0 sai como a linha mais fina. Na tela, cada linha tem um pixel de largura até você pressionar {{ui:LWT}} na barra de status (ou digitar {{cmd:LWDISPLAY}}): então uma espessura acima de 0.25 mm desenha mais larga (0.5 mm = 2 pixels) no modelo, e na largura real no papel, em uma folha. A escolha é salva neste navegador.

## O padrão do escritório

Um escritório pode guardar as alturas de texto no papel, as camadas, os campos do carimbo e os modelos em um só registro, o padrão do escritório. O CadCraft o lê nesta ordem: o registro do próprio desenho (definido com {{cmd:OFFICESTANDARD}} › `Importar`, guardado no arquivo), o padrão compartilhado da sua equipe, e depois suas Políticas padrão. Texto e cotas anotativos recebem a altura no papel a partir dele, na escala de anotação. Um padrão vazio não altera nada. {{cmd:OFFICESTANDARD}} › `Camadas` adiciona as camadas do escritório que um desenho não tem.
