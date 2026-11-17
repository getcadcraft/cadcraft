---
title: Desenhar com coordenadas
summary: Desenhe um contorno exato de piso escrevendo coordenadas absolutas, relativas e polares, e introduzindo distâncias diretas.
keywords: linha, pline, polilinha, coordenadas, relativa, polar, absoluta, distância direta, @, escrever pontos, exato, orto
from: 19e82350
---

## O que vai criar

O contorno de uma sala em forma de L, de 6000 por 4500 com um recorte de 2000 por 1500, desenhado com exatidão, mais uma parede a 30 graus. Vai usar as quatro formas de escrever um ponto. Trabalhe em milímetros: uma unidade de desenho equivale a um milímetro.

A referência rápida de todos os formatos está em [Introdução de coordenadas e distâncias](topic:coordinate-entry).

## Antes de começar

1. Abra o CadCraft. Se houver um desenho aberto, clique primeiro em {{ui:Nova}}.
2. Prima {{key:Esc}} para que nada fique selecionado. O painel direito mostra {{ui:Definições atuais}}.
3. Defina {{ui:Unidades}} como {{ui:Milímetros}}. Nada é redimensionado; isto apenas indica às folhas e às impressões o que vale uma unidade.

## Coordenadas absolutas: o primeiro ponto

Uma coordenada absoluta é uma posição medida a partir da origem, escrita como `x,y`.

1. Escreva `L` e prima {{key:Enter}}. O pedido diz `Especifique o primeiro ponto:`.
2. Escreva `0,0` e prima {{key:Enter}}.

Agora a linha segue a cruzeta a partir da origem. As coordenadas na barra de estado mostram a distância e o ângulo a partir do ponto inicial, à medida que se move.

## Coordenadas relativas: @dx,dy

Uma coordenada relativa escreve-se `@dx,dy`: quanto para a direita, quanto para cima, a partir do último ponto. Os números negativos vão para a esquerda ou para baixo.

3. Escreva `@6000,0` e prima {{key:Enter}}. Uma linha de 6000 segue para a direita.
4. Escreva `@0,3000` e prima {{key:Enter}}.
5. Escreva `@-2000,0` e prima {{key:Enter}}.
6. Escreva `@0,1500` e prima {{key:Enter}}.

Deverá ver quatro linhas ligadas a subir pelo lado direito da sala.

## Introdução de distância direta: um número isolado

Quando escreve um único número, o CadCraft avança essa distância na direção da cruzeta. Ative o Orto para que a direção fique na horizontal ou na vertical.

7. Prima {{key:F8}}, ou clique em {{ui:Orto}} na barra de estado. A barra de estado indica "Orto ativado".
8. Mova a cruzeta para a esquerda do último ponto. A linha elástica mantém-se na horizontal.
9. Escreva `4000` e prima {{key:Enter}}. A linha avança 4000 para a esquerda.
10. Mova a cruzeta para baixo do último ponto.
11. Escreva `4500` e prima {{key:Enter}}. Volta ao ponto inicial.
12. Prima {{key:Enter}} no pedido vazio para terminar o comando.

:::mac
A tecla F8 pode controlar a reprodução de multimédia num teclado de Mac. Mantenha **fn** premida e prima F8, ou clique em {{ui:Orto}}. Consulte [Teclas, ratos e trackpads](common:keys).
:::

Fica agora com um contorno fechado em forma de L, feito de seis linhas separadas.

13. Clique em {{ui:Extensão}} para ver tudo.

## Coordenadas polares: @distância<ângulo

Uma coordenada polar escreve-se `@distância<ângulo`. Os ângulos são em graus, medidos no sentido anti-horário a partir da direção positiva de X: 0 é a direita, 90 é para cima, 180 é a esquerda, 270 (ou -90) é para baixo.

14. Escreva `L` e prima {{key:Enter}}.
15. Escreva `6000,0` e prima {{key:Enter}} para começar no canto inferior direito.
16. Escreva `@2500<-30` e prima {{key:Enter}}. Uma linha de 2500 sai do canto, a descer para a direita, a 30 graus abaixo da horizontal.
17. Prima {{key:Enter}} para terminar o comando.

Uma coordenada polar sem `@`, como `2500<30`, é medida a partir da origem e não a partir do último ponto.

## O mesmo contorno como uma polilinha

Seis linhas separadas servem para muitos trabalhos, mas uma polilinha é um único objeto: desloca-se, mede-se e seleciona-se como um todo. Use {{cmd:PLINE}} com os mesmos dados.

1. Escreva `PL` e prima {{key:Enter}}.
2. Escreva `0,-6000` e prima {{key:Enter}} para começar abaixo do primeiro contorno.
3. Escreva `@6000,0` e prima {{key:Enter}}.
4. Escreva `@0,3000` e prima {{key:Enter}}.
5. Escreva `@-2000,0` e prima {{key:Enter}}.
6. Escreva `@0,1500` e prima {{key:Enter}}.
7. Escreva `@-4000,0` e prima {{key:Enter}}.
8. Escreva `C` e prima {{key:Enter}}. A polilinha fecha-se e o comando termina.
9. Clique no novo contorno. O painel direito mostra "Polilinha", os seus {{ui:Vértices}}, {{ui:Comprimento}} e, por estar fechada, a sua {{ui:Área}}.

A área deve indicar 24000000 (milímetros quadrados, o que equivale a 24 metros quadrados).

## Opções durante o desenho

- Em {{cmd:LINE}} e {{cmd:PLINE}}, escreva `U` e prima {{key:Enter}} para anular o último segmento sem sair do comando.
- Em {{cmd:LINE}}, `C` fecha de volta ao primeiro ponto quando há pelo menos dois segmentos.
- Em {{cmd:PLINE}}, `A` passa a segmentos de arco (cada arco continua suavemente a partir do segmento anterior), e `L` volta a linhas. No modo de arco, a opção de fecho é `CL`.
- Prima {{key:Enter}} em `Especifique o primeiro ponto:` no comando {{cmd:LINE}} para começar a partir do último ponto indicado, e continuar de onde parou.

## Erros comuns

- **Escrever `6000,0` quando queria `@6000,0`.** Sem `@`, o ponto é medido a partir da origem e não a partir do último ponto, por isso a linha segue para um sítio inesperado. No CadCraft, `x,y` é sempre absoluto. Prima `U` e {{key:Enter}} para a anular.
- **Uma vírgula escrita como ponto decimal.** Os decimais usam ponto: `1250.5`. A vírgula separa sempre X de Y.
- **A distância direta foi para o lado errado.** Um número isolado segue a cruzeta. Mova a cruzeta para o lado pretendido antes de premir {{key:Enter}}, e ative o {{ui:Orto}} para linhas retas.
- **"É necessário um ponto ou uma palavra-chave de opção."** O CadCraft não percebeu o que escreveu. Verifique se há espaços dentro do número ou uma vírgula em falta, e escreva-o de novo.
- **Pés e polegadas.** O CadCraft lê apenas números simples. Escreva `150` para 12'-6" num desenho em polegadas, ou `12.5` num desenho em pés.
