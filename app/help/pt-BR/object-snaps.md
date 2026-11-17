---
title: Snap em pontos de objetos
summary: Use snaps de objeto, Orto e a grade para escolher com o mouse extremidades, pontos médios, centros e interseções exatos.
keywords: osnap, snap de objeto, extremidade, ponto médio, centro, interseção, perpendicular, quadrante, mais próximo, nó, inserção, orto, grade, f3, f8, f7, rastreamento polar, polar, polarang, rastreamento de snap de objeto, otrack, rastreamento, f10, f11
from: 3cf17f94
---

## O que você vai criar

Um retângulo com suas duas diagonais, um círculo centrado onde elas se cruzam, e uma linha do ponto médio de um lado do quadrado até o círculo. Cada ponto é escolhido com o mouse, e cada ponto é exato.

## Como o snap funciona

Enquanto um comando pede um ponto, o CadCraft procura pontos de snap a cerca de 10 pixels da mira. Quando encontra um, um marcador e um rótulo aparecem ("Extremidade", "Interseção"), e um clique cai **exatamente** nesse ponto, não onde a mira está.

Os snaps estão ativos quando {{ui:Snap}} na barra de status está pressionado. {{key:F3}} liga e desliga.

Os snaps que você pode usar são:

| Snap | Cai em |
|---|---|
| Extremidade | As extremidades de linhas, arcos e segmentos de polilinha |
| Ponto médio | O meio de linhas, arcos e segmentos de polilinha |
| Centro | O centro de círculos e arcos, e de segmentos de arco de polilinha |
| Quadrante | Os pontos de 0, 90, 180 e 270 graus de círculos e arcos |
| Interseção | Onde dois objetos se cruzam |
| Perpendicular | O ponto sobre um objeto em ângulo reto com o último ponto (precisa de um ponto base) |
| Tangente | O ponto de um círculo ou arco onde uma linha a partir do último ponto apenas o toca. Sem um último ponto ainda (o primeiro ponto de uma linha), o marcador diz "adiado": o ponto de toque é calculado quando o próximo ponto é conhecido, então uma linha de Tangente a Tangente toca os dois círculos |
| Mais próximo | O ponto mais próximo em qualquer objeto |
| Nó | Objetos de ponto |
| Inserção | O ponto de inserção de textos e referências de bloco |

Todos estão ligados por padrão, exceto Tangente e Mais próximo. O Mais próximo costuma vencer quando você quer outra coisa; ative a Tangente quando precisar dela.

## Escolha seus snaps

1. Clique na pequena seta ao lado de {{ui:Snap}} na barra de status. A lista {{ui:Snaps de objeto}} abre.
2. Marque ou desmarque os snaps. As alterações valem imediatamente.
3. Clique na seta de novo para fechar a lista.

O CadCraft lembra a sua escolha, e também as configurações de {{ui:Grade}}, {{ui:Orto}} e {{ui:Snap}}, neste navegador.

## Passos

1. Digite `REC` e pressione {{key:Enter}}.
2. Digite `0,0` e pressione {{key:Enter}}.
3. Digite `@4000,3000` e pressione {{key:Enter}}. Um retângulo aparece.
4. Clique em {{ui:Extensão}}.
5. Digite `L` e pressione {{key:Enter}}.
6. Mova a mira para o canto inferior esquerdo. O marcador mostra "Extremidade". Clique.
7. Mova para o canto superior direito até "Extremidade" aparecer. Clique.
8. Pressione {{key:Enter}} para encerrar a linha.
9. Pressione {{key:Enter}} de novo para repetir {{cmd:LINE}}, e desenhe a outra diagonal, do canto inferior direito ao canto superior esquerdo, da mesma forma.
10. Digite `C` e pressione {{key:Enter}} para começar um círculo.
11. Mova a mira para onde as diagonais se cruzam. O marcador mostra "Interseção". Clique.
12. Digite `800` e pressione {{key:Enter}}.

Você deve ver um círculo centrado exatamente no cruzamento.

13. Digite `L` e pressione {{key:Enter}}.
14. Mova para o ponto médio do lado esquerdo do retângulo até "Ponto médio" aparecer. Clique.
15. Mova a mira para o lado esquerdo do círculo. O marcador mostra "Perpendicular" ou "Quadrante"; aqui os dois são o mesmo ponto. Clique.
16. Pressione {{key:Enter}}.

A nova linha vai do ponto médio do lado esquerdo e para exatamente no círculo.

## Pule um snap em um clique

Mantenha {{key:Shift}} pressionada enquanto clica. Os snaps de objeto são ignorados nesse clique, e o ponto vai exatamente para onde a mira está (ou ao longo da direção do Orto, se ele estiver ativo).

## Orto

{{ui:Orto}} ({{key:F8}}) mantém o próximo ponto reto na horizontal ou na vertical a partir do ponto base. Ele se aplica a cliques e à entrada direta de distância (um número puro digitado no prompt). Os snaps de objeto vencem o Orto: se um marcador de snap aparecer, o clique vai para o snap.

## Rastreamento polar

{{ui:Polar}} ({{key:F10}}) é o Orto em mais ângulos. Enquanto um comando tem um ponto base (o último ponto de uma linha, o ponto base de um mover), o ponteiro se alinha sempre que chega perto de um raio a partir dele, em um múltiplo do passo polar: uma linha pontilhada aparece, e um rótulo ao lado da mira mostra `Polar: 1200 < 30°`. Clique para usar esse ponto, ou digite uma distância: `1200` vai exatamente 1200 ao longo do raio.

O passo é 90° até você mudá-lo: digite {{cmd:POLARANG}}, pressione {{key:Enter}}, e digite `30` (ou 45, 22.5, 15 …). Polar e Orto se excluem: ligar um desliga o outro.

## Rastreamento de snap de objeto

{{ui:Rastr.}} ({{key:F11}}) alinha o ponteiro com os pontos de snap sobre os quais você parou, para que você escolha um ponto nivelado com um canto e acima de outro, sem desenhar linhas auxiliares.

1. Ative {{ui:Snap}} e {{ui:Rastr.}}, e inicie um comando que pede um ponto (`L`).
2. Pare o ponteiro sobre um ponto de snap, como um canto, por meio segundo, sem clicar. Uma pequena cruz o marca: ele foi adquirido. Pare sobre ele de novo para soltá-lo.
3. Mova o ponteiro em linha reta a partir dele, na horizontal ou na vertical. Uma linha pontilhada segue o ponteiro, e o rótulo mostra `Rastr.: 600 < 90°`. Clique, ou digite uma distância.
4. Adquira um segundo ponto e mova até onde a vertical de um encontra a horizontal do outro: o ponteiro encaixa nesse cruzamento (`Rastr.: onde duas linhas se encontram`).

Com {{ui:Polar}} ligado também, os pontos adquiridos rastreiam em todos os ângulos polares. Até sete pontos são mantidos até o comando terminar. {{key:Shift}} desliga o rastreamento por um clique, como faz com os snaps.

## Grade

{{ui:Grade}} ({{key:F7}}) mostra uma grade de linhas atrás do desenho, com linhas mais grossas a cada cinco linhas; o espaçamento muda conforme você dá zoom. É apenas uma guia até você ligar {{ui:Snap de grade}} ({{key:F9}}): então os cliques caem no ponto de grade mais próximo, a menos que um snap de objeto pegue o ponto antes.

## Teclas de função no seu computador

{{key:F9}} é Snap de grade, {{key:F10}} é Polar e {{key:F11}} é Rastr.

:::mac
No Mac, F3, F7, F8 e F9 geralmente controlam o Mission Control e a mídia. Mantenha **fn** pressionada com a tecla, ou ative as teclas de função padrão, como descrito em [Teclas, mouses e trackpads](common:keys). Os botões da barra de status sempre funcionam.
:::

:::firefox
No Firefox, F7 também é a tecla de navegação por cursor. Se o Firefox perguntar se deve ativar a navegação por cursor, escolha **Não**. Use o botão {{ui:Grade}} se a pergunta continuar voltando.
:::

:::touch
Em uma tela de toque não há hover, então o marcador de snap aparece apenas onde o dedo toca. Dê zoom para alvos pequenos, ou digite as coordenadas.
:::

## Erros comuns

- **O clique foi no ponto errado.** Olhe o rótulo do marcador antes de clicar: Extremidade vence Ponto médio quando ambos estão perto. Dê zoom, ou desmarque os snaps de que não precisa.
- **Nenhum marcador aparece.** {{ui:Snap}} está desligado, ou o snap que você quer está desmarcado, ou o objeto está em uma camada desligada ou congelada.
- **Os snaps pegam a coisa errada em um desenho cheio.** Dê zoom. A distância do snap é medida em pixels da tela, então dar zoom o torna menor no desenho.
- **Esperar que Shift dê uma linha reta.** No CadCraft, Shift desliga os snaps por um clique. Use {{ui:Orto}} para linhas retas.
- **Esperar que os pontos caiam nos pontos da grade.** Ligue {{ui:Snap de grade}} ({{key:F9}}), ou digite coordenadas para números redondos.
