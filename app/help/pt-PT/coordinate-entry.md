---
title: Introdução de coordenadas e distâncias
summary: Todas as formas de escrever um ponto, uma distância, um ângulo ou um número na linha de comandos do CadCraft, com exemplos.
keywords: entrada dinâmica, din, f12, tab, coordenadas, absolutas, relativas, polares, @, distância direta, ângulo, graus, último ponto, lastpoint, introdução de pontos, entrada, aritmética, cálculo, calculadora, cal, mais, fração, expressão
from: 7de9252d
---

## Pontos

Quando a linha de comandos pedir um ponto, escreva uma destas opções e prima {{key:Enter}}:

| Escreve | Significado | Exemplo |
|---|---|---|
| `x,y` | Absoluta: medida a partir da origem 0,0 | `2500,1200` |
| `#x,y` | Também absoluta (aceite por hábito) | `#2500,1200` |
| `@dx,dy` | Relativa: para a direita e para cima a partir do último ponto | `@600,0` |
| `@d<a` | Polar relativa: distância e ângulo a partir do último ponto | `@1500<45` |
| `d<a` | Polar absoluta: distância e ângulo a partir da origem | `3000<90` |
| um número isolado | Distância direta: essa distância a partir do ponto base, na direção da cruzeta | `1200` |
| `*x,y`, `@*dx,dy` | Coordenadas do mundo com um SCU definido | `*0,0` |

Com um SCU definido ({{cmd:UCS}}), `x,y`, `@dx,dy` e o ângulo em `d<a` são medidos ao longo dos eixos do SCU. Veja [Rodar a vista e usar as suas próprias coordenadas](topic:ucs-and-turned-view).

Ou clique no desenho; os snaps a objetos e o Orto aplicam-se aos cliques.

Regras:

- Uma vírgula separa X de Y. Os decimais usam ponto: `1250.75,300`.
- Os valores negativos vão para a esquerda e para baixo: `@-600,0`.
- Não escreva espaços: {{key:Space}} envia a linha, tal como {{key:Enter}}.
- Os números podem usar expoentes: `1e3` é 1000.
- Não se escrevem unidades, nem a notação de pés e polegadas. Escreva números simples nas unidades do desenho.

## O último ponto

`@` conta a partir do **último ponto que indicou em qualquer pedido de ponto**, em qualquer comando: um clique, um snap ou um ponto escrito. Esse ponto fica memorizado entre comandos, por isso pode iniciar uma nova linha `@0,500` afastada de onde a anterior terminou. Antes de indicar qualquer ponto, `@` conta a partir de 0,0.

Alguns casos em que isto é importante:

- No {{cmd:COPY}}, depois da primeira cópia, o último ponto é o ponto dessa cópia. `@600,0` escrito duas vezes coloca as cópias a 600 e 1200 do original.
- Depois de colocar uma cota, o último ponto é onde colocou a linha de cota, e não a extremidade da cota.

Em caso de dúvida, use um ponto absoluto, um snap ou uma distância direta.

## Introdução de distância direta

Um número isolado é uma distância a partir do **ponto base** (o ponto de onde parte a linha elástica) na direção da cruzeta:

1. Mova a cruzeta na direção pretendida.
2. Escreva a distância e prima {{key:Enter}}.

Com {{ui:Orto}} ativo, a direção ajusta-se à horizontal ou à vertical, o que torna este o modo mais rápido de desenhar paredes em esquadria. Se não existir ponto base, ou se a cruzeta estiver exatamente sobre ele, o número é recusado com «É necessário um ponto ou uma palavra-chave de opção.»

## Ângulos

- Em graus, como número simples: `30`, `-45`, `112.5`.
- Medidos no sentido contrário ao dos ponteiros do relógio, a partir do sentido positivo de X (apontando para a direita): 0 é a direita, 90 é para cima, 180 é a esquerda, 270 ou -90 é para baixo.
- Onde se pede um ângulo (rotação, ângulo de texto), também pode clicar: o ângulo é medido do ponto base até ao clique. Antes de existir ponto base, o primeiro clique define-o e a linha de comandos pede um segundo ponto.

## Distâncias

Onde se pede uma distância (raio, deslocamento, altura de texto, fator de escala):

- escreva um número positivo (num desenho em pés e polegadas, também `12'6"` ou `6-1/2`: veja [Pés e polegadas](topic:units-papers-scales#feet-and-inches-and-fractions)), ou
- clique num ponto: a distância do ponto base do comando até esse ponto, ou
- clique em dois pontos quando não houver ponto base: a linha de comandos passa a pedir `Especifique o segundo ponto`.

«É necessário um número positivo ou dois pontos.» significa que o valor não era um número ou que era negativo.

## Aritmética num valor escrito

Em qualquer ponto onde se escreva um comprimento, uma coordenada, um ângulo ou um número (a linha de comandos, a entrada dinâmica, as caixas das Propriedades e os diálogos), pode escrever um cálculo com `+`, `-`, `*`, `/` e parênteses, em vez de o resolver antes:

| Escreve | Resultado |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (num desenho em pés e polegadas) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, nas unidades do desenho (quando estas estão definidas) |
| `@4+7/16,0` | um ponto 4.4375 à direita do último |
| `360/7` | um ângulo de 51.43 graus |

- Um traço escrito num comprimento faz parte dele: `4-7/16` é 4 7/16 e `24'-6"` são 24 pés e 6 polegadas. Para subtrair depois de uma marca de pé, termine primeiro o comprimento, `24'-0"-6"`, ou coloque o cálculo entre parênteses com espaços à volta do traço, `(24' - 6")` (dentro de parênteses um espaço é um espaço; fora deles, prime {{key:Enter}}).
- Um número simples somado a um comprimento está nas unidades do desenho; multiplicar ou dividir por um número escala o comprimento. Dois comprimentos multiplicados dão uma área, por isso `2'*3'` é recusado.
- `abs`, `round`, `ceil` e `floor` também funcionam: `round(10/3)`.
- Um cálculo que não possa ser lido é recusado com a indicação do erro, por exemplo «O cálculo termina demasiado cedo (carácter 3): falta um valor.» Nada é lido como 0. O {{cmd:CAL}} apresenta o valor de um cálculo.

## Entrada dinâmica

{{ui:Din}} ({{key:F12}}, na barra de estado) mostra os valores junto à cruzeta enquanto um comando pede um ponto.

- Sem ponto base ainda (o primeiro ponto de uma linha), os dois campos são **X** e **Y**.
- Depois disso, são a **distância** e o **ângulo** a partir do último ponto.

A escrita continua a ir para a linha de comandos; o campo junto à cruzeta mostra-a, e a linha elástica acompanha-a.

1. Escreva um valor: ele vai para o campo realçado.
2. Prima {{key:Tab}} (ou uma vírgula depois de X). O valor fica bloqueado (a negrito) e realça-se o campo seguinte. Uma distância bloqueada mantém a linha elástica com esse comprimento enquanto aponta com o rato.
3. Escreva o segundo valor, ou apenas aponte, e prima {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} desenha 50 para cima a partir do último ponto.

Premir {{key:Enter}} depois de um só valor, sem {{key:Tab}}, funciona como distância direta. Pés e polegadas também funcionam nos campos (`12'6"`). Os pedidos de distância e de ângulo (raio de um círculo, rotação) mostram também o seu valor junto à cruzeta.

## Opções e valores por omissão

- As opções aparecem entre parênteses retos. Escreva as letras maiúsculas de uma opção (`D` para `[Diâmetro]`, `CL` para `[Fechar (CL)]`) e prima {{key:Enter}}. Inícios mais longos da palavra também funcionam (`DIA`).
- Um valor por omissão aparece entre parênteses angulares, como `<500>`. Prima {{key:Enter}} ou clique com o botão direito para o usar.

## Outros esquemas de teclado e o teclado numérico

Os nomes dos comandos, os nomes curtos e as letras das opções são letras latinas. Com um esquema de teclado grego, cirílico (russo, ucraniano, bielorrusso, sérvio, macedónio, búlgaro), hebraico, árabe, persa, tailandês ou coreano ativo, não precisa de mudar de esquema: quando a palavra escrita não é, tal como está, um comando, um nome curto ou uma opção, o CadCraft lê-a pelas teclas premidas. A tecla marcada `L` num teclado latino continua a iniciar o `LINE`, e a tecla `C` continua a responder a `Fechar`, seja qual for a letra que o esquema lhe atribua. A lista de comandos correspondentes, acima da linha de comandos, segue a mesma regra. O texto escrito onde um comando pede texto (o conteúdo de {{cmd:TEXT}}, um nome) nunca é alterado.

Nos esquemas em que a tecla decimal do teclado numérico dá uma vírgula, essa tecla escreve um ponto na linha de comandos e nas caixas numéricas, por isso `12.5` pode ser escrito no teclado numérico. A tecla de vírgula do teclado principal continua a separar `x,y`.

Ambas as funções podem ser desligadas em {{ui:Definições}}: {{ui:Commands on a non-Latin keyboard layout}} e {{ui:Keypad decimal key}}.

## A apresentação das coordenadas

A barra de estado mostra o X e o Y da cruzeta (no SCU, quando um está definido), depois dos snaps e do Orto. Enquanto um comando tem ponto base, acrescenta `Δ` com a distância e o ângulo a partir desse ponto, por exemplo `Δ 1500 < 30°`: os números que escreveria como `@1500<30`.

Use {{cmd:ID}} para apresentar as coordenadas de um ponto e {{cmd:DIST}} para medir entre dois pontos.
