---
title: Desenhe com coordenadas
summary: Desenhe um contorno exato de piso digitando coordenadas absolutas, relativas e polares, e por entrada direta de distância.
keywords: linha, pline, polilinha, coordenadas, relativa, polar, absoluta, distância direta, @, digitando pontos, exato, orto
from: 19e82350
---

## O que você vai criar

O contorno de uma sala em forma de L, de 6000 por 4500, com um recorte de 2000 por 1500, desenhado com exatidão, mais uma parede a 30 graus. Você vai usar as quatro formas de digitar um ponto. Trabalhe em milímetros: uma unidade de desenho equivale a um milímetro.

A referência rápida de todos os formatos está em [Entrada de coordenadas e distância](topic:coordinate-entry).

## Antes de começar

1. Abra o CadCraft. Se um desenho estiver aberto, clique em {{ui:Nova}} primeiro.
2. Pressione {{key:Esc}} para que nada fique selecionado. O painel direito mostra {{ui:Configurações atuais}}.
3. Defina {{ui:Unidades}} como {{ui:Milímetros}}. Nada é redimensionado; isto apenas informa às folhas e plotagens o que uma unidade significa.

## Coordenadas absolutas: o primeiro ponto

Uma coordenada absoluta é uma posição medida a partir da origem, digitada como `x,y`.

1. Digite `L` e pressione {{key:Enter}}. O prompt diz `Especifique o primeiro ponto:`.
2. Digite `0,0` e pressione {{key:Enter}}.

A linha agora segue a mira a partir da origem. As coordenadas na barra de status mostram a distância e o ângulo a partir do ponto inicial conforme você se move.

## Coordenadas relativas: @dx,dy

Uma coordenada relativa é digitada como `@dx,dy`: quanto para a direita, quanto para cima, a partir do último ponto. Números negativos vão para a esquerda ou para baixo.

3. Digite `@6000,0` e pressione {{key:Enter}}. Uma linha de 6000 vai para a direita.
4. Digite `@0,3000` e pressione {{key:Enter}}.
5. Digite `@-2000,0` e pressione {{key:Enter}}.
6. Digite `@0,1500` e pressione {{key:Enter}}.

Você deve ver quatro linhas conectadas subindo pelo lado direito da sala.

## Entrada direta de distância: um número puro

Quando você digita um único número, o CadCraft percorre essa distância na direção da mira. Ative o {{ui:Orto}} para que a direção se ajuste à horizontal ou à vertical.

7. Pressione {{key:F8}}, ou clique em {{ui:Orto}} na barra de status. A barra de status diz "Orto ligado".
8. Mova a mira para a esquerda do último ponto. A linha elástica permanece horizontal.
9. Digite `4000` e pressione {{key:Enter}}. A linha vai 4000 para a esquerda.
10. Mova a mira para baixo do último ponto.
11. Digite `4500` e pressione {{key:Enter}}. Você volta ao ponto inicial.
12. Pressione {{key:Enter}} no prompt vazio para encerrar o comando.

:::mac
A tecla F8 pode controlar a reprodução de mídia em um teclado Mac. Mantenha **fn** pressionada e pressione F8, ou clique em {{ui:Orto}}. Veja [Teclas, mouses e trackpads](common:keys).
:::

Agora você tem um contorno fechado em L, feito de seis linhas separadas.

13. Clique em {{ui:Extensão}} para ver tudo.

## Coordenadas polares: @distância<ângulo

Uma coordenada polar é digitada como `@distance<angle`. Os ângulos são em graus, medidos no sentido anti-horário a partir da direção X positiva: 0 é direita, 90 é para cima, 180 é esquerda, 270 (ou -90) é para baixo.

14. Digite `L` e pressione {{key:Enter}}.
15. Digite `6000,0` e pressione {{key:Enter}} para começar no canto inferior direito.
16. Digite `@2500<-30` e pressione {{key:Enter}}. Uma linha de 2500 sai do canto, descendo para a direita a 30 graus abaixo da horizontal.
17. Pressione {{key:Enter}} para encerrar o comando.

Uma coordenada polar sem `@`, como `2500<30`, é medida a partir da origem em vez do último ponto.

## O mesmo contorno como uma polilinha

Seis linhas separadas servem para muitos trabalhos, mas uma polilinha é um só objeto: ela desloca, mede e seleciona como um todo. Use {{cmd:PLINE}} com a mesma entrada.

1. Digite `PL` e pressione {{key:Enter}}.
2. Digite `0,-6000` e pressione {{key:Enter}} para começar abaixo do primeiro contorno.
3. Digite `@6000,0`, depois pressione {{key:Enter}}.
4. Digite `@0,3000`, depois pressione {{key:Enter}}.
5. Digite `@-2000,0`, depois pressione {{key:Enter}}.
6. Digite `@0,1500`, depois pressione {{key:Enter}}.
7. Digite `@-4000,0`, depois pressione {{key:Enter}}.
8. Digite `C` e pressione {{key:Enter}}. A polilinha se fecha e o comando termina.
9. Clique no novo contorno. O painel direito mostra "Polilinha", seus {{ui:Vértices}}, {{ui:Comprimento}} e, por estar fechada, sua {{ui:Área}}.

A área deve mostrar 24000000 (milímetros quadrados, o que equivale a 24 metros quadrados).

## Opções durante o desenho

- Em {{cmd:LINE}} e {{cmd:PLINE}}, digite `U` e pressione {{key:Enter}} para desfazer o último segmento sem sair do comando.
- Em {{cmd:LINE}}, `C` fecha de volta no primeiro ponto quando há pelo menos dois segmentos.
- Em {{cmd:PLINE}}, `A` muda para segmentos em arco (cada arco continua suavemente a partir do segmento anterior), e `L` volta para linhas. No modo arco, a opção de fechar é `CL`.
- Pressionar {{key:Enter}} em `Especifique o primeiro ponto:` em {{cmd:LINE}} começa a partir do último ponto informado, para que você continue de onde parou.

## Erros comuns

- **Digitar `6000,0` quando você queria `@6000,0`.** Sem `@`, o ponto é medido a partir da origem, não do último ponto, então a linha vai parar em um lugar inesperado. No CadCraft, `x,y` é sempre absoluto. Pressione `U` e {{key:Enter}} para desfazê-la.
- **Uma vírgula digitada como ponto decimal.** Decimais usam ponto: `1250.5`. A vírgula sempre separa X de Y.
- **A distância direta foi para o lado errado.** Um número puro segue a mira. Mova a mira para o lado que você quer antes de pressionar {{key:Enter}}, e ative {{ui:Orto}} para linhas retas.
- **"É necessário um ponto ou uma palavra-chave de opção."** O CadCraft não entendeu o que você digitou. Verifique se há espaços dentro do número ou uma vírgula faltando, e digite de novo.
- **Pés e polegadas.** O CadCraft lê apenas números simples. Digite `150` para 12'-6" em um desenho em polegadas, ou `12.5` em um desenho em pés.
