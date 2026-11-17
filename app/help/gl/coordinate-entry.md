---
title: Entrada de coordenadas e distancias
summary: Todas as formas de escribir un punto, unha distancia, un ángulo ou un número na liña de comandos de CadCraft, con exemplos.
keywords: entrada dinámica, dyn, f12, tab, coordenadas, absolutas, relativas, polares, @, distancia directa, ángulo, graos, último punto, lastpoint, escribir puntos, entrada, aritmética, cálculo, calculadora, cal, suma, fracción, expresión
from: 7de9252d
---

## Puntos

Cando o aviso pida un punto, escriba unha destas opcións e prema {{key:Enter}}:

| Escribe | Significado | Exemplo |
|---|---|---|
| `x,y` | Absoluto: medido desde a orixe 0,0 | `2500,1200` |
| `#x,y` | Tamén absoluto (admitido por costume) | `#2500,1200` |
| `@dx,dy` | Relativo: en horizontal e en vertical desde o último punto | `@600,0` |
| `@d<a` | Polar relativo: distancia e ángulo desde o último punto | `@1500<45` |
| `d<a` | Polar absoluto: distancia e ángulo desde a orixe | `3000<90` |
| un único número | Distancia directa: a esa distancia do punto base, cara á cruceta | `1200` |
| `*x,y`, `@*dx,dy` | Coordenadas do mundo mentres hai un SCU definido | `*0,0` |

Cun SCU definido ({{cmd:UCS}}), `x,y`, `@dx,dy` e o ángulo de `d<a` mídense segundo os eixes do SCU. Consulte [Xirar a vista e usar as súas propias coordenadas](topic:ucs-and-turned-view).

Tamén pode premer no debuxo; as referencias a obxectos e {{ui:Orto}} aplícanse aos clics.

Regras:

- Unha coma separa X de Y. Os decimais usan punto: `1250.75,300`.
- Os valores negativos van á esquerda e cara abaixo: `@-600,0`.
- Non escriba espazos: {{key:Space}} envía a liña, igual que {{key:Enter}}.
- Os números poden usar expoñentes: `1e3` equivale a 1000.
- Non se escriben unidades, nin a notación de pés e polgadas. Escriba números simples nas unidades do debuxo.

## O último punto

`@` conta desde o **último punto que deu en calquera aviso de punto**, en calquera comando: un clic, unha referencia ou un punto escrito. Lémbrase entre comandos, así que pode comezar unha liña nova a `@0,500` do lugar onde terminou a anterior. Antes de dar ningún punto, `@` conta desde 0,0.

Algúns casos nos que isto importa:

- En {{cmd:COPY}}, despois da primeira copia o último punto é o punto desa copia. `@600,0` dúas veces coloca copias a 600 e 1200 do orixinal.
- Despois de colocar unha cota, o último punto é onde colocou a liña de cota, non o extremo da cota.

En caso de dúbida, use un punto absoluto, unha referencia ou unha distancia directa.

## Entrada de distancia directa

Un número simple é unha distancia desde o **punto base** (o punto desde o que comeza a goma elástica) cara á cruceta:

1. Mova a cruceta na dirección que queira.
2. Escriba a distancia e prema {{key:Enter}}.

Con {{ui:Orto}} activado, a dirección axústase a horizontal ou vertical, o que o converte no xeito máis rápido de debuxar muros cuadrados. Se non hai punto base, ou se a cruceta está exactamente sobre el, o número recházase co aviso «Point or option keyword required.»

## Ángulos

- En graos, como número simple: `30`, `-45`, `112.5`.
- Medidos en sentido antihorario desde a dirección X positiva (cara á dereita): 0 é a dereita, 90 é arriba, 180 é a esquerda, 270 ou -90 é abaixo.
- Cando se pide un ángulo (xiro, ángulo do texto), tamén pode facer clic: o ángulo mídese desde o punto base ata o clic. Antes de que exista un punto base, o primeiro clic o define e o aviso pide un segundo punto.

## Distancias

Cando se pide unha distancia (radio, desfase, altura do texto, factor de escala):

- escriba un número positivo (nun debuxo en pés e polgadas tamén `12'6"` ou `6-1/2`: consulte [Pés e polgadas](topic:units-papers-scales#feet-and-inches-and-fractions)), ou
- faga clic nun punto: a distancia desde o punto base até el, ou
- faga clic en dous puntos cando non hai punto base: o aviso cambia a `Seleccione o segundo punto`.

«Requires a positive number or two points.» significa que o valor non era un número, ou que era negativo.

## Aritmética nun valor escrito

En calquera lugar onde se escriba unha lonxitude, unha coordenada, un ángulo ou un número (a liña de comandos, a entrada dinámica, as caixas de Propiedades e os diálogos), pode escribir un cálculo con `+`, `-`, `*`, `/` e paréntese en lugar de resolvelo antes:

| Escriba | Resultado |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (nun debuxo en pés e polgadas) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, nas unidades do debuxo (cando estean definidas) |
| `@4+7/16,0` | un punto 4.4375 á dereita do último |
| `360/7` | un ángulo de 51.43 graos |

- Un guión escrito dentro dunha lonxitude segue formando parte dela: `4-7/16` é 4 7/16 e `24'-6"` son 24 pés e 6 polgadas. Para restar despois dunha marca de pés, remate primeiro a lonxitude, `24'-0"-6"`, ou ponha o cálculo entre parénteses con espazos ao redor do guión, `(24' - 6")` (dentro de parénteses un espazo é un espazo; fóra deles prema {{key:Enter}}).
- Un número simple sumado a unha lonxitude está en unidades do debuxo; multiplicar ou dividir por un número escala a lonxitude. Multiplicar dúas lonxitudes dá unha superficie, polo que `2'*3'` se rexeita.
- `abs`, `round`, `ceil` e `floor` tamén funcionan: `round(10/3)`.
- Un cálculo que non se pode ler recházase indicando onde está o erro, por exemplo «The calculation ends too soon (character 3): a value is missing.». Nunca se le como 0. {{cmd:CAL}} mostra o valor dun cálculo.

## Entrada dinámica

{{ui:Dyn}} ({{key:F12}}, na barra de estado) coloca os valores xunto á cruceta mentres un comando pide un punto.

- Sen punto base aínda (o primeiro punto dunha liña), os dous campos son **X** e **Y**.
- Despois, son a **distancia** e o **ángulo** desde o último punto.

A escritura segue indo á liña de comandos; o campo xunto á cruceta mostra o escrito e a goma elástica segue o valor.

1. Escriba un valor: vai ao campo resaltado.
2. Prema {{key:Tab}} (ou unha coma despois de X). O valor bloquease (en negriña) e resáltase o campo seguinte. Unha distancia bloqueada mantén a goma elástica desa lonxitude mentres apunta co rato.
3. Escriba o segundo valor, ou simplemente apunte, e prema {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} debuxa 50 rectos cara arriba desde o último punto.

Prema {{key:Enter}} despois dun só valor, sen {{key:Tab}}, e funciona como entrada de distancia directa. Os pés e polgadas tamén funcionan nos campos (`12'6"`). As peticións de distancia e de ángulo (radio dun círculo, un xiro) mostran tamén o seu valor xunto á cruceta.

## Opcións e valores predeterminados

- As opcións aparecen entre corchetes. Escriba as letras maiúsculas dunha opción (`D` para `[Diámetro]`, `CL` para `[Pechar (C)]`) e prema {{key:Enter}}. Tamén funcionan os inicios máis longos da palabra (`DIA`).
- Un valor predeterminado aparece entre os signos `<` e `>`, como `<500>`. Prema {{key:Enter}} ou o botón dereito para usalo.

## Outras disposicións do teclado e o teclado numérico

Os nomes de comandos, os nomes curtos e as letras de opción son letras latinas. Con unha disposición grega, cirílica (rusa, ucraína, bielorrusa, serbia, macedonia, búlgara), hebrea, árabe, persa, tailandesa ou coreana activa, non cómpre cambiar de disposición: cando a palabra escrita non é un comando, un nome curto nin unha opción tal como está, CadCraft lea segundo as teclas pulsadas. A tecla marcada `L` nun teclado latino segue iniciando `LINE`, e a tecla `C` segue respondendo a «Pechar», sexa cal sexa a letra que a disposición lle poña. A lista de comandos coincidentes sobre a liña de comandos segue a mesma regra. O texto que escribe onde un comando pide texto (o contido de {{cmd:TEXT}}, un nome) non se cambia nunca.

Nas disposicións nas que a tecla decimal do teclado numérico dá unha coma, esa tecla escribe un punto na liña de comandos e nas caixas de números, polo que `12.5` pódese escribir no teclado numérico. A tecla coma do teclado principal segue separando `x,y`.

Ambas as opcións poden desactivarse en {{ui:Configuración}}: {{ui:Commands on a non-Latin keyboard layout}} e {{ui:Keypad decimal key}}.

## A visualización das coordenadas

A barra de estado mostra o X e o Y da cruceta (no SCU, cando hai un definido), despois das referencias e de {{ui:Orto}}. Cando un comando ten punto base, engade `Δ` coa distancia e o ángulo desde ese punto, por exemplo `Δ 1500 < 30°`: os números que escribiría como `@1500<30`.

Use {{cmd:ID}} para mostrar as coordenadas dun punto e {{cmd:DIST}} para medir entre dous puntos.
