---
title: Girar a vista e usar suas próprias coordenadas (UCS)
summary: Gire a vista em 90° ou em qualquer ângulo sem mover nada no desenho, e defina um sistema de coordenadas do usuário (UCS) para que os pontos, o orto, o rastreamento polar, a grade e o novo texto sigam os eixos próprios de um edifício.
keywords: ucs, sistema de coordenadas do usuário, planta, girar vista, rotação da vista, torção da vista, ucs z, ucs 3point, ucs objeto, ucs mundo, ucs nomeado, ucsfollow, turnleft, turnright, turnworld, edifício inclinado, grade girada
from: 6f152c65
---

## O que você vai aprender

Como olhar um desenho girado, para que um edifício desenhado em ângulo fique reto na tela, e como digitar pontos ao longo dos seus próprios eixos. Nada no desenho se move enquanto você faz isso: os objetos mantêm suas coordenadas, uma rotação não é uma edição, e o desenho não é marcado como alterado.

## Girar a vista em um quarto de volta

1. Clique em {{ui:Vista}} › {{ui:Mais}} › {{ui:Girar a vista 90° para a esquerda}} ou {{ui:Girar a vista 90° para a direita}}.

O desenho gira na tela em torno do meio da área de desenho. Repita para continuar girando.

2. Clique em {{ui:Vista}} › {{ui:Mais}} › {{ui:Voltar ao global}} para nivelá-lo de novo.

Os comandos por trás deles são {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} e {{cmd:TURNWORLD}}. Para atribuir uma tecla a um deles, adicione uma linha como `TL=TURNLEFT` aos seus aliases com {{cmd:ALIASEDIT}}.

## Alinhar com um edifício inclinado

1. Digite `UCS` e pressione {{key:Enter}}, depois `OB` e {{key:Enter}}.
2. Clique em uma linha de parede perto da extremidade que deve ser a origem.

O UCS agora começa nessa extremidade, com seu eixo X ao longo da parede, e a vista gira para que a parede fique nivelada na tela. O ícone de eixos no canto inferior esquerdo mostra para onde apontam os eixos do UCS.

3. Desenhe normalmente. Com o UCS definido:
   - `x,y` e `@dx,dy` são medidos ao longo dos eixos do UCS; `d<a` mede o ângulo a partir do eixo X do UCS.
   - {{ui:Orto}}, o rastreamento polar e a {{ui:Grade}} seguem os eixos do UCS, e a mira também.
   - O texto novo e os novos parágrafos seguem o eixo X do UCS; a horizontal e a vertical de {{cmd:DIMLINEAR}} também o seguem.
   - As coordenadas na barra de status e as de {{cmd:ID}} são coordenadas do UCS.
4. Para digitar um ponto do mundo enquanto há um UCS definido, coloque `*` na frente: `*0,0` ou `@*100,0`.
5. Digite `UCS`, {{key:Enter}}, depois {{key:Enter}} de novo para voltar ao mundo.

## Outras formas de definir um UCS

No prompt de {{cmd:UCS}}:

| Você digita | O que faz |
|---|---|
| um ponto | Uma nova origem; depois clique em um ponto no novo eixo X, ou pressione {{key:Enter}} para manter o ângulo |
| `Z` | Gira o UCS em torno da origem por um ângulo que você digita (graus, no sentido anti-horário) ou escolhe |
| `3` (3 pontos) | Uma origem, um ponto ao longo do eixo X positivo e um ponto do lado Y positivo |
| `OB` (objeto) | A partir de uma linha, arco, círculo, segmento de polilinha, texto, referência de bloco, ponto ou linha de construção |
| `P` (anterior) | O UCS anterior a este (os últimos dez são mantidos enquanto o desenho estiver aberto) |
| `W` (mundo) | Volta ao mundo |
| `NA` (nomeado) | `S` salva o UCS atual com um nome, `R` restaura um, `D` apaga um, `?` lista todos |

Cada mudança gira a vista para que o novo eixo X do UCS fique nivelado. {{cmd:PLAN}} gira a vista sem mudar o UCS: {{key:Enter}} para o UCS atual, `U` para um salvo, `W` para o mundo.

## Pontos a saber

- Cada painel de uma tela dividida mantém sua própria rotação. O UCS pertence ao desenho.
- Folhas trabalham em coordenadas de papel; defina um UCS na guia {{ui:Modelo}}, ou dentro de uma viewport.
- Janelas de seleção arrastadas em uma vista girada selecionam o que está dentro delas na tela.
- Rotinas LISP recebem pontos no UCS a partir de `getpoint`, podem ler `UCSORG`, `UCSXDIR`, `UCSYDIR` e `VIEWTWIST`, e `trans` converte entre o mundo, o UCS e a tela.

:::note
Um arquivo salvo mantém o UCS e a rotação da vista em uma versão posterior; até lá, eles duram enquanto o desenho estiver aberto.
:::
