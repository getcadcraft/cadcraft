---
title: Rodar a vista e usar as suas coordenadas (UCS)
summary: Rode a vista 90° ou para qualquer ângulo sem mover nada no desenho, e defina um sistema de coordenadas do utilizador (UCS) para que os pontos, o orto, o rastreio polar, a grelha e o texto novo sigam os eixos do próprio edifício.
keywords: ucs, sistema de coordenadas do utilizador, planta, rodar vista, girar vista, torção da vista, ucs z, ucs 3point, ucs object, ucs world, ucs com nome, ucsfollow, turnleft, turnright, turnworld, edifício inclinado, grelha rodada
from: 6f152c65
---

## O que vai aprender

Como ver um desenho rodado, para que um edifício desenhado em ângulo fique reto no ecrã, e como escrever pontos ao longo dos seus próprios eixos. Nada no desenho se move enquanto o faz: os objetos mantêm as suas coordenadas, uma rotação não é uma edição, e o desenho não fica marcado como alterado.

## Rodar a vista um quarto de volta

1. Clique em {{ui:Vista}} › {{ui:Mais}} › {{ui:Rodar a vista 90° para a esquerda}} ou {{ui:Rodar a vista 90° para a direita}}.

O desenho roda no ecrã em torno do centro da área de desenho. Repita para continuar a rodar.

2. Clique em {{ui:Vista}} › {{ui:Mais}} › {{ui:Voltar ao global}} para o nivelar de novo.

Os comandos por trás destas são {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} e {{cmd:TURNWORLD}}. Para atribuir uma tecla a um deles, acrescente uma linha como `TL=TURNLEFT` aos seus aliases com {{cmd:ALIASEDIT}}.

## Alinhar com um edifício em ângulo

1. Escreva `UCS` e prima {{key:Enter}}, depois `OB` e {{key:Enter}}.
2. Clique numa linha de parede perto da extremidade que deve ser a origem.

O UCS passa a começar nessa extremidade, com o eixo X ao longo da parede, e a vista roda para que a parede fique nivelada no ecrã. O ícone dos eixos no canto inferior esquerdo mostra para onde apontam os eixos do UCS.

3. Desenhe como habitualmente. Com o UCS definido:
   - `x,y` e `@dx,dy` são medidos ao longo dos eixos do UCS; `d<a` mede o ângulo a partir do eixo X do UCS.
   - {{ui:Orto}}, o rastreio polar e a grelha seguem os eixos do UCS, e o mesmo acontece com a cruz do cursor.
   - O texto novo e os parágrafos novos seguem o eixo X do UCS; a horizontal e a vertical de {{cmd:DIMLINEAR}} também o seguem.
   - As coordenadas na barra de estado e as de {{cmd:ID}} são coordenadas do UCS.
4. Para escrever um ponto do mundo com um UCS definido, coloque `*` à frente: `*0,0` ou `@*100,0`.
5. Escreva `UCS`, {{key:Enter}}, e depois {{key:Enter}} de novo para voltar ao mundo.

## Outras formas de definir um UCS

No pedido de {{cmd:UCS}}:

| Escreve | O que faz |
|---|---|
| um ponto | Uma nova origem; depois clique num ponto do novo eixo X, ou prima {{key:Enter}} para manter o ângulo |
| `Z` | Roda o UCS em torno da sua origem por um ângulo que escreve (graus, no sentido anti-horário) ou escolhe |
| `3` (3point) | Uma origem, um ponto ao longo do eixo X positivo, e um ponto do lado Y positivo |
| `OB` (OBject) | A partir de uma linha, arco, círculo, segmento de polilinha, texto, referência de bloco, ponto ou linha de construção |
| `P` (Previous) | O UCS anterior a este (os últimos dez são mantidos enquanto o desenho estiver aberto) |
| `W` (World) | Volta ao mundo |
| `NA` (NAmed) | `S` guarda o UCS atual com um nome, `R` restaura um, `D` apaga um, `?` lista-os |

Cada alteração roda a vista para que o novo eixo X do UCS fique nivelado. {{cmd:PLAN}} roda a vista sem alterar o UCS: {{key:Enter}} para o UCS atual, `U` para um guardado, `W` para o mundo.

## Bom saber

- Cada painel de um ecrã dividido mantém a sua própria rotação. O UCS pertence ao desenho.
- As folhas trabalham em coordenadas de papel; defina um UCS no separador {{ui:Modelo}}, ou dentro de um viewport.
- As janelas de seleção arrastadas numa vista rodada selecionam o que fica dentro delas no ecrã.
- As rotinas LISP recebem pontos no UCS a partir de `getpoint`, podem ler `UCSORG`, `UCSXDIR`, `UCSYDIR` e `VIEWTWIST`, e `trans` converte entre o mundo, o UCS e o ecrã.

:::note
Um ficheiro guardado mantém o UCS e a rotação da vista numa versão posterior; até lá, duram enquanto o desenho estiver aberto.
:::
