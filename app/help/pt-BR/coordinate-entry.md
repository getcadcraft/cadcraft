---
title: Entrada de coordenadas e distâncias
summary: Todas as formas de digitar um ponto, uma distância, um ângulo ou um número na linha de comando do CadCraft, com exemplos.
keywords: entrada dinâmica, din, f12, tab, coordenadas, absoluta, relativa, polar, @, distância direta, ângulo, graus, último ponto, lastpoint, digitando pontos, entrada, aritmética, cálculo, calculadora, cal, mais, fração, expressão
from: 7de9252d
---

## Pontos

Quando o prompt pedir um ponto, digite uma destas opções e pressione {{key:Enter}}:

| Digitar | Significado | Exemplo |
|---|---|---|
| `x,y` | Absoluto: medido a partir da origem 0,0 | `2500,1200` |
| `#x,y` | Também absoluto (aceito por costume) | `#2500,1200` |
| `@dx,dy` | Relativo: na horizontal e na vertical a partir do último ponto | `@600,0` |
| `@d<a` | Polar relativo: distância e ângulo a partir do último ponto | `@1500<45` |
| `d<a` | Polar absoluto: distância e ângulo a partir da origem | `3000<90` |
| um número isolado | Distância direta: a essa distância do ponto base, na direção da mira | `1200` |
| `*x,y`, `@*dx,dy` | Coordenadas do mundo enquanto um UCS estiver definido | `*0,0` |

Com um UCS definido ({{cmd:UCS}}), `x,y`, `@dx,dy` e o ângulo em `d<a` são medidos ao longo dos eixos do UCS. Veja [Girar a vista e usar suas próprias coordenadas](topic:ucs-and-turned-view).

Ou clique no desenho; os snaps de objeto e o Orto se aplicam aos cliques.

Regras:

- Uma vírgula separa X de Y. Decimais usam ponto: `1250.75,300`.
- Valores negativos vão para a esquerda e para baixo: `@-600,0`.
- Não digite espaços: {{key:Space}} envia a linha, como {{key:Enter}}.
- Números podem usar expoentes: `1e3` é 1000.
- Não digite unidades, nem notação de pés e polegadas. Digite números simples nas unidades do desenho.

## O último ponto

`@` conta a partir do **último ponto informado em qualquer prompt de ponto**, em qualquer comando: um clique, um snap ou um ponto digitado. Ele fica guardado entre comandos, então você pode iniciar uma nova linha `@0,500` distante de onde a anterior terminou. Antes de informar qualquer ponto, `@` conta a partir de 0,0.

Alguns casos em que isso importa:

- No {{cmd:COPY}}, após a primeira cópia o último ponto é o ponto dessa cópia. `@600,0` duas vezes posiciona cópias a 600 e 1200 do original.
- Depois de posicionar uma cota, o último ponto é onde você posicionou a linha de cota, não a extremidade da cota.

Na dúvida, use um ponto absoluto, um snap ou uma distância direta.

## Entrada de distância direta

Um número isolado é uma distância a partir do **ponto base** (o ponto de onde a elástica começa) na direção da mira:

1. Mova a mira na direção desejada.
2. Digite a distância e pressione {{key:Enter}}.

Com {{ui:Orto}} ativado, a direção se ajusta para horizontal ou vertical, o que torna este o jeito mais rápido de desenhar paredes retas. Se não houver ponto base, ou se a mira estiver exatamente sobre ele, o número é recusado com a mensagem "Ponto ou palavra-chave de opção obrigatória."

## Ângulos

- Em graus, como número simples: `30`, `-45`, `112.5`.
- Medidos no sentido anti-horário a partir da direção X positiva (apontando para a direita): 0 é direita, 90 é cima, 180 é esquerda, 270 ou -90 é baixo.
- Onde um ângulo for pedido (rotação, ângulo de texto), você também pode clicar: o ângulo é medido do ponto base até o clique. Antes que exista um ponto base, o primeiro clique o define e o prompt pede um segundo ponto.

## Distâncias

Onde uma distância for pedida (raio, deslocamento, altura de texto, fator de escala):

- digite um número positivo (em um desenho em pés e polegadas também `12'6"` ou `6-1/2`: veja [Pés e polegadas](topic:units-papers-scales#feet-and-inches-and-fractions)), ou
- clique em um ponto: a distância do ponto base do comando até ele, ou
- clique em dois pontos quando não houver ponto base: o prompt muda para `Especifique o segundo ponto`.

A mensagem "Requer um número positivo ou dois pontos." significa que o valor não era um número ou era negativo.

## Aritmética em um valor digitado

Em qualquer lugar onde um comprimento, uma coordenada, um ângulo ou um número for digitado (a linha de comando, a entrada dinâmica, as caixas de Propriedades e diálogos), você pode digitar um cálculo com `+`, `-`, `*`, `/` e parênteses, em vez de calcular antes:

| Digitar | Resulta |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (em um desenho em pés e polegadas) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, nas unidades do desenho (quando as unidades estiverem definidas) |
| `@4+7/16,0` | um ponto 4.4375 à direita do último |
| `360/7` | um ângulo de 51.43 graus |

- Um traço escrito dentro de um comprimento continua fazendo parte dele: `4-7/16` é 4 7/16 e `24'-6"` é 24 pés 6 polegadas. Para subtrair depois de um sinal de pé, termine o comprimento primeiro, `24'-0"-6"`, ou coloque o cálculo entre parênteses com espaços em volta do traço, `(24' - 6")` (dentro de parênteses um espaço é um espaço; fora deles, ele pressiona {{key:Enter}}).
- Um número simples somado a um comprimento está em unidades do desenho; multiplicar ou dividir por um número escala o comprimento. Dois comprimentos multiplicados formam uma área, então `2'*3'` é recusado.
- `abs`, `round`, `ceil` e `floor` também funcionam: `round(10/3)`.
- Um cálculo que não puder ser lido é recusado, com a indicação de onde deu errado, por exemplo "O cálculo termina cedo demais (caractere 3): falta um valor." Nunca se lê nada como 0. {{cmd:CAL}} exibe o valor de um cálculo.

## Entrada dinâmica

{{ui:Din}} ({{key:F12}}, na barra de status) mostra os valores ao lado da mira enquanto um comando pede um ponto.

- Sem ponto base ainda (o primeiro ponto de uma linha), os dois campos são **X** e **Y**.
- Depois disso, são a **distância** e o **ângulo** a partir do último ponto.

A digitação continua indo para a linha de comando; o campo ao lado da mira mostra o que está sendo digitado, e a elástica acompanha.

1. Digite um valor: ele vai para o campo destacado.
2. Pressione {{key:Tab}} (ou uma vírgula após X). O valor fica travado (em negrito) e o próximo campo é destacado. Uma distância travada mantém a elástica nesse comprimento enquanto você mira com o mouse.
3. Digite o segundo valor, ou apenas mire, e pressione {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} desenha 50 para cima a partir do último ponto.

Pressionar {{key:Enter}} após um valor, sem {{key:Tab}}, funciona como entrada de distância direta. Pés e polegadas também funcionam nos campos (`12'6"`). Os prompts de distância e ângulo (raio de um círculo, uma rotação) também mostram o valor ao lado da mira.

## Opções e padrões

- As opções aparecem entre colchetes. Digite as letras maiúsculas de uma opção (`D` para `[Diameter]`, `CL` para `CLose`) e pressione {{key:Enter}}. Inícios mais longos da palavra também funcionam (`DIA`).
- Um padrão aparece entre sinais de menor e maior, como `<500>`. Pressione {{key:Enter}} ou clique com o botão direito para usá-lo.

## Outros layouts de teclado e teclado numérico

Nomes de comandos, nomes curtos e letras de opções são letras latinas. Com um layout grego, cirílico (russo, ucraniano, bielorrusso, sérvio, macedônio, búlgaro), hebraico, árabe, persa, tailandês ou coreano ativo, você não precisa trocar de layout: quando a palavra digitada não é um comando, nome curto ou opção como está, o CadCraft a lê pelas teclas pressionadas. A tecla marcada `L` em um teclado latino ainda inicia `LINE`, e a tecla `C` ainda responde `Close`, qualquer que seja a letra que o layout coloque nela. A lista de comandos correspondentes acima da linha de comando segue a mesma regra. Texto digitado onde um comando pede texto (o conteúdo de {{cmd:TEXT}}, um nome) nunca é alterado.

Em layouts cuja tecla decimal do teclado numérico gera uma vírgula, essa tecla digita um ponto na linha de comando e nas caixas numéricas, então `12.5` pode ser digitado no teclado numérico. A tecla de vírgula do teclado principal ainda separa `x,y`.

Ambas as opções podem ser desativadas em {{ui:Configurações}}: {{ui:Commands on a non-Latin keyboard layout}} e {{ui:Keypad decimal key}}.

## A exibição de coordenadas

A barra de status mostra X e Y da mira (no UCS, quando um estiver definido), após snaps e Orto. Enquanto um comando tem um ponto base, ele acrescenta `Δ` com a distância e o ângulo a partir desse ponto, por exemplo `Δ 1500 < 30°`: os números que você digitaria como `@1500<30`.

Use {{cmd:ID}} para exibir as coordenadas de um ponto e {{cmd:DIST}} para medir entre dois pontos.
