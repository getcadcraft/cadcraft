---
title: Unidades, tamanhos de papel e escalas
summary: O que as unidades de desenho significam no CadCraft, os tamanhos de papel para folhas e plotagens, todas as escalas padrão, e como os tamanhos de texto e de cota se relacionam com a escala de plotagem.
keywords: unidades, milímetros, polegadas, pés, pés e polegadas, arquitetônico, engenharia, fracionário, frações, lunits, formato de comprimento, precisão, metros, tamanho de papel, a3, a1, arch d, ansi, tabloid, letter, escala, 1:100, 1/4 polegada, escala arquitetônica, escala de engenharia, insunits
from: 8346236a
---

## Unidades de desenho

Você desenha em tamanho real, em unidades de desenho. O que uma unidade representa é a configuração **Unidades** do desenho:

1. Pressione {{key:Esc}} para que nada fique selecionado, na aba {{ui:Modelo}}.
2. Em {{ui:Configurações atuais}}, escolha {{ui:Unidades}}: {{ui:Sem unidade}}, {{ui:Milímetros}}, {{ui:Centímetros}}, {{ui:Metros}}, {{ui:Polegadas}} ou {{ui:Pés}}.

Cotas podem escrever seus comprimentos em milímetros, centímetros, metros ou quilômetros, qualquer que seja a unidade do desenho: veja [Cotas em mm, cm, m ou km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Alterar as unidades não redimensiona nada. Muda como as escalas são lidas em folhas e plotagens, e quais escalas são oferecidas. Um desenho aberto de um DWG ou DXF mantém as unidades guardadas no arquivo; a seção {{ui:Desenho}} do painel esquerdo as mostra.

Um desenho {{ui:Sem unidade}} é tratado como estando na unidade do papel: milímetros em papel ISO, polegadas em papel americano.

## Pés e polegadas, e frações

Como os comprimentos são **escritos e digitados** é uma configuração separada, o formato de comprimento. Ele não altera nenhuma geometria, apenas como os números aparecem e o que você pode digitar.

1. Pressione {{key:Esc}} para que nada fique selecionado, na aba {{ui:Modelo}}.
2. Em {{ui:Configurações atuais}}, escolha {{ui:Formato de comprimento}}: {{ui:Decimal}} (`150.5`), {{ui:Arquitetônico}} (`12'-6 1/2"`), {{ui:Engenharia}} (`12'-6.5"`), {{ui:Fracionário}} (`150 1/2`) ou {{ui:Científico}} (`1.505E+02`).
3. Escolha {{ui:Precisão}}: casas decimais, ou a menor fração (1/16 é a escolha usual para o arquitetônico).

Ou digite {{cmd:UNITS}} (`UN`) e responda às suas duas perguntas.

Com {{ui:Arquitetônico}} ou {{ui:Engenharia}}, uma unidade de desenho é uma polegada, como no AutoCAD: defina {{ui:Unidades}} como {{ui:Polegadas}} também. Você pode então digitar comprimentos em pés e polegadas em qualquer lugar em que um comprimento for pedido, e nas caixas de {{ui:Propriedades}}:

| Você digita | Significa |
|---|---|
| `12'6"` ou `12'-6"` | 12 pés e 6 polegadas (150) |
| `12'6-1/2"` | 12 pés e 6½ polegadas. Use um hífen antes da fração: {{key:Space}} é {{key:Enter}} na linha de comando. |
| `12'` | 12 pés |
| `6"` ou `6` | 6 polegadas: um número puro é polegadas |
| `1/2`, `6-1/2` | frações funcionam em qualquer formato |

Pontos aceitam os mesmos comprimentos: `@12'6",0` ou `@10'<90`. Os ângulos continuam em graus.

O formato aparece no histórico ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: áreas em polegadas quadradas e pés quadrados), em {{ui:Propriedades}}, nas coordenadas na barra de status e em **novas cotas**. Folhas mantêm suas unidades de papel (milímetros ou polegadas) como decimais.

:::note
O formato de comprimento é salvo em arquivos DWG e DXF, e cada cota mantém o seu: um desenho salvo abre de novo como você o deixou.
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
| Letter | 11 × 8.5 in | polegadas |
| Legal | 14 × 8.5 in | polegadas |
| Tabloid / ANSI B | 17 × 11 in | polegadas |
| ANSI C | 22 × 17 in | polegadas |
| ANSI D | 34 × 22 in | polegadas |
| ARCH C | 24 × 18 in | polegadas |
| ARCH D | 36 × 24 in | polegadas |
| ARCH E | 48 × 36 in | polegadas |

Novas folhas começam em ISO A3 para desenhos métricos e sem unidade, e em Tabloid para desenhos em polegadas ou pés. Plotagens de modelo começam em ISO A4 ou Letter da mesma forma, depois lembram sua última escolha. Folhas de arquivos abertos mantêm o próprio tamanho, mostrado como "Personalizado" quando não é um destes.

## Escalas

Uma escala `1:n` significa que uma unidade no papel mostra n da mesma unidade no modelo, então 1:100 mostra 1 m de edifício como 10 mm de papel. O CadCraft calcula isso a partir das unidades do desenho e da unidade do papel.

**Escalas métricas**, oferecidas para qualquer desenho: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Escalas arquitetônicas**, oferecidas quando as unidades são polegadas ou pés: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Escalas de engenharia**, oferecidas quando as unidades são polegadas ou pés: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Suas próprias escalas.** Digite `SCALELISTEDIT` (ou `SCALELIST`) para adicionar uma escala própria, como 1:75 ou uma escala de sítio de 2 papel : 300 desenho. `Add` pede um nome, depois as unidades de papel e as unidades do desenho (um nome como `1:75` oferece os próprios números; pressione {{key:Enter}} para aceitá-los). `Edit`, `Delete`, `List` e `Reset` funcionam na mesma lista; `Reset` volta à lista padrão. Suas escalas aparecem depois das padrão na lista de escalas de viewport de Propriedades e na caixa {{ui:Plotar em PDF}}; uma viewport nessa escala aparece com seu nome, e elas são salvas no desenho (DWG e DXF 2000) como a lista de escalas do desenho. Um desenho aberto de outro programa traz a lista consigo; escalas que ele tem e que correspondem a uma padrão não são mostradas duas vezes.

Quando uma viewport é apontada com {{ui:Mostrar o modelo inteiro}} ou {{ui:Selecione uma janela no modelo…}}, o CadCraft escolhe a maior escala padrão que cabe. {{ui:Ajustar o modelo inteiro}} define uma escala exata, que aparece como uma razão simples.

## Tamanhos no papel e no modelo

Os tamanhos de texto e de cota ficam nas unidades do espaço em que você desenha.

| Você quer no papel | Desenhado em uma folha | Desenhado no modelo a 1:50 (desenho em mm) | Desenhado no modelo a 1/4" = 1'-0" (desenho em polegadas) |
|---|---|---|---|
| Texto de 2.5 mm | 2.5 | 125 | — |
| Texto de 3/32" | 0.09375 | — | 4.5 |

Para cotas, mantenha os tamanhos como tamanhos de papel e defina a escala geral ({{cmd:DIMSCALE}}) para a escala de plotagem: 50 para 1:50, 48 para 1/4" = 1'-0". Veja [Definir tamanhos de cota](topic:dimension-settings).

## Anote por escala

Desenhe o modelo em tamanho real e deixe o CadCraft fazer as contas acima para você.

1. Selecione o texto ou as cotas que devem manter o tamanho no papel. Em Propriedades, marque {{ui:Anotativo}}. {{ui:Tamanho no papel}} então mostra, por exemplo, `2.5 mm at 1:50`.
2. Digite {{cmd:ANNOSCALE}} e a escala em que o desenho será impresso, como `1:100`.

Todo texto e cota anotativa é redimensionado para que saia com o mesmo tamanho na nova escala: texto de 2.5 mm tem 125 de altura em um desenho em milímetros a 1:50, e 250 de altura a 1:100. A largura de um parágrafo muda com ele; o texto, as setas e os espaços de uma cota mudam juntos (sua escala geral). É um passo de desfazer, e objetos que não são anotativos nunca são alterados.

A configuração é salva em DWG e DXF: outros programas leem o indicador de anotativo, e o CadCraft também mantém a escala para a qual cada objeto é dimensionado.

Se o seu escritório define alturas de papel no complemento Default Policies (Configurações › Global › Default Policies › Tamanhos de anotação no papel), {{cmd:ANNOSCALE}} também define a altura com que novos textos começam para a altura do escritório para notas nessa escala. Veja [Default Policies](topic:default-policies).

### Um objeto em várias escalas

Uma folha costuma mostrar a mesma planta a 1:100, e uma parte dela a 1:50. Dê às notas e cotas as duas escalas, e cada viewport as mostra em seu tamanho no papel:

1. Selecione o texto e as cotas anotativas, e digite `OBJECTSCALE`.
2. Escolha `Add` e digite a escala, por exemplo `1:50`. (`Current scale` adiciona a escala de anotação do desenho; `List` mostra o que cada objeto mantém; `Delete` remove uma.)

Uma viewport cuja escala está na lista de um objeto mostra-o no tamanho dessa escala: texto de 2.5 mm é desenhado com 250 de altura por uma viewport 1:100, e com 125 por uma 1:50, na tela e na plotagem. O objeto permanece onde está; só o tamanho muda. Em uma viewport com escala que não está na lista, o objeto aparece no tamanho que tem, até você digitar `ANNOALLVISIBLE` e escolher `OFF`: então ele é deixado de fora ali. {{cmd:ANNOSCALE}} redimensiona os objetos que listam a nova escala e deixa os outros como estão.

As listas são salvas em DWG e DXF como dados próprios do CadCraft. Outro programa vê cada objeto como anotativo, na única escala para a qual ele é dimensionado. A chave ANNOALLVISIBLE não é mantida no arquivo.

## Espessuras de linha e tipos de linha

Uma camada, ou um objeto, pode ter uma **espessura de linha** (0.05 a 2.11 mm) e um **tipo de linha** (tracejado, oculto, centro, fantasma, pontilhado…). Defina-os no painel direito: sem nada selecionado, {{ui:Tipo de linha}} e {{ui:Espessura de linha}} em {{ui:Configurações atuais}} são o que os novos objetos recebem ({{ui:PorCamada}} para seguir a camada deles), e os dois em {{ui:Camada …}} são os da própria camada atual. Com objetos selecionados, as mesmas duas linhas e {{ui:Escala do tipo de linha}} alteram esses objetos. Os comandos são {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) e {{cmd:LTSCALE}} (`LTS`).

Os tipos de linha aparecem na tela e nas plotagens. Seus traços estão em unidades de desenho: um desenho métrico usa os tamanhos ISO (DASHED: traços de 12.7 mm), e um desenho em polegadas usa os de polegada (0.5"). Se os traços parecerem pequenos ou grandes demais, altere a {{ui:Escala do tipo de linha}} do desenho (LTSCALE): cada traço e espaço é multiplicado por ela; a escala própria de um objeto a multiplica de novo. Um padrão fino demais para ser visto é desenhado como linha contínua.

As espessuras de linha são impressas nas plotagens, em mm no papel, qualquer que seja a escala. Linhas com a espessura {{ui:Padrão}} usam a largura de caneta escolhida na caixa {{ui:Plotar em PDF}} (0.13 a 0.70 mm; começa com 0.25 mm); uma espessura de 0 imprime como a linha mais fina. Na tela, cada linha tem um pixel de largura até você pressionar {{ui:LWT}} na barra de status (ou digitar {{cmd:LWDISPLAY}}): então uma espessura acima de 0.25 mm é desenhada mais larga (0.5 mm = 2 pixels) no modelo, e na sua largura real no papel, em uma folha. A escolha é mantida neste navegador.
