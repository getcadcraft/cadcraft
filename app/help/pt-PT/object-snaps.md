---
title: Snap a pontos de objetos
summary: Use snaps a objetos, Orto e a grelha para escolher com o rato extremidades, pontos médios, centros e interseções exatos.
keywords: osnap, snap a objetos, extremidade, ponto médio, centro, interseção, perpendicular, quadrante, mais próximo, nó, inserção, orto, grelha, f3, f8, f7, rastreio polar, polar, polarang, rastreio de snap a objetos, otrack, rastreio, f10, f11
from: 3cf17f94
---

## O que vai criar

Um retângulo com as suas duas diagonais, um círculo centrado onde elas se cruzam, e uma linha que vai do ponto médio de um lado, em perpendicular, até ao círculo. Cada ponto é escolhido com o rato, e cada ponto é exato.

## Como funciona o snap

Enquanto um comando pede um ponto, o CadCraft procura pontos de snap a cerca de 10 pixels da cruzeta. Quando encontra um, aparecem um marcador e uma etiqueta ("Extremidade", "Interseção"), e um clique cai **exatamente** nesse ponto, e não onde está a cruzeta.

Os snaps estão ativos quando o botão {{ui:Snap}} da barra de estado está premido. {{key:F3}} liga e desliga.

Os snaps disponíveis são:

| Snap | Aponta para |
|---|---|
| Extremidade | As extremidades de linhas, arcos e segmentos de polilinha |
| Ponto médio | O meio de linhas, arcos e segmentos de polilinha |
| Centro | O centro de círculos e arcos, e de segmentos de arco de polilinha |
| Quadrante | Os pontos de 0, 90, 180 e 270 graus de círculos e arcos |
| Interseção | Onde dois objetos se cruzam |
| Perpendicular | O ponto do objeto em perpendicular ao último ponto (precisa de um ponto base) |
| Tangente | O ponto de um círculo ou arco onde uma linha a partir do último ponto o tangencia. Sem último ponto ainda (o primeiro ponto de uma linha), o marcador diz "adiado": o ponto de toque é calculado quando se conhecer o ponto seguinte, por isso uma linha de Tangente a Tangente toca os dois círculos |
| Mais próximo | O ponto mais próximo de qualquer objeto |
| Nó | Objetos de ponto |
| Inserção | O ponto de inserção de textos e referências de blocos |

Todos estão ativos por predefinição, exceto Tangente e Mais próximo. O Mais próximo tende a ganhar quando quer outra coisa; ative a Tangente quando precisar dela.

## Escolher os snaps

1. Clique na pequena seta ao lado de {{ui:Snap}} na barra de estado. Abre-se a lista {{ui:Snaps a objetos}}.
2. Marque ou desmarque snaps. As alterações aplicam-se de imediato.
3. Clique na seta de novo para fechar a lista.

O CadCraft recorda a escolha feita, e as definições de {{ui:Grelha}}, {{ui:Orto}} e {{ui:Snap}}, neste navegador.

## Passos

1. Escreva `REC` e prima {{key:Enter}}.
2. Escreva `0,0` e prima {{key:Enter}}.
3. Escreva `@4000,3000` e prima {{key:Enter}}. Aparece um retângulo.
4. Clique em {{ui:Extensão}}.
5. Escreva `L` e prima {{key:Enter}}.
6. Mova a cruzeta para o canto inferior esquerdo. O marcador mostra "Extremidade". Clique.
7. Mova até ao canto superior direito, até aparecer "Extremidade". Clique.
8. Prima {{key:Enter}} para terminar a linha.
9. Prima {{key:Enter}} para repetir {{cmd:LINE}}, e desenhe a outra diagonal do canto inferior direito ao canto superior esquerdo, da mesma maneira.
10. Escreva `C` e prima {{key:Enter}} para começar um círculo.
11. Mova a cruzeta para onde as diagonais se cruzam. O marcador mostra "Interseção". Clique.
12. Escreva `800` e prima {{key:Enter}}.

Deve ver um círculo centrado exatamente no cruzamento.

13. Escreva `L` e prima {{key:Enter}}.
14. Mova para o meio do lado esquerdo do retângulo, até aparecer "Ponto médio". Clique.
15. Mova a cruzeta sobre o círculo, no seu lado esquerdo. O marcador mostra "Perpendicular" ou "Quadrante"; aqui são o mesmo ponto. Clique.
16. Prima {{key:Enter}}.

A nova linha vai do meio do lado esquerdo e para exatamente no círculo.

## Ignorar um snap para um clique

Mantenha {{key:Shift}} premida enquanto clica. Os snaps a objetos são ignorados nesse clique, e o ponto fica exatamente onde está a cruzeta (ou na direção do Orto, se o Orto estiver ativo).

## Orto

{{ui:Orto}} ({{key:F8}}) mantém o próximo ponto em linha reta, na horizontal ou na vertical, a partir do ponto base. Aplica-se aos cliques e à introdução de distância direta (um número isolado escrito no pedido). Os snaps a objetos prevalecem sobre o Orto: se um marcador de snap aparecer, o clique vai para o snap.

## Rastreio polar

{{ui:Polar}} ({{key:F10}}) é o Orto para mais ângulos. Enquanto um comando tem um ponto base (o último ponto de uma linha, ou o ponto base de um comando mover), o cursor alinha-se sempre que se aproxima de uma semirreta a partir dele, num múltiplo do passo polar: aparece uma linha pontilhada, e uma etiqueta junto à cruzeta lê `Polar: 1200 < 30°`. Clique para usar esse ponto, ou escreva uma distância: `1200` vai exatamente 1200 ao longo da semirreta.

O passo é de 90° até mudar: escreva {{cmd:POLARANG}}, prima {{key:Enter}}, e escreva `30` (ou 45, 22.5, 15 …). O Polar e o Orto excluem-se mutuamente: ligar um desliga o outro.

## Rastreio de snap a objetos

{{ui:Rastreio}} ({{key:F11}}) alinha o cursor com os pontos de snap em que pousou, para poder escolher um ponto ao nível de um canto e acima de outro, sem desenhar linhas auxiliares.

1. Ative {{ui:Snap}} e {{ui:Rastreio}}, e inicie um comando que peça um ponto (`L`).
2. Pouse o cursor num ponto de snap, como um canto, durante meio segundo, sem clicar. Uma pequena cruz assinala-o: fica adquirido. Pouse nele de novo para o largar.
3. Mova o cursor em linha reta a partir dele, na horizontal ou na vertical. Uma linha pontilhada segue o cursor, e a etiqueta lê `Rastreio: 600 < 90°`. Clique, ou escreva uma distância.
4. Adquira um segundo ponto, e mova até onde a vertical de um encontra a horizontal do outro: o cursor faz snap a esse cruzamento (`Rastreio: onde duas linhas se encontram`).

Com o {{ui:Polar}} também ativo, os pontos adquiridos seguem todos os ângulos polares. Podem ser mantidos até sete pontos, até o comando terminar. O {{key:Shift}} desliga o rastreio para um clique, tal como faz aos snaps.

## Grelha

{{ui:Grelha}} ({{key:F7}}) mostra uma grelha de linhas por trás do desenho, com linhas mais grossas a cada cinco linhas; o espaçamento muda ao aplicar zoom. É apenas uma guia até ativar o {{ui:Snap à grelha}} ({{key:F9}}): então os cliques caem no ponto de grelha mais próximo, a não ser que um snap a objetos tome o ponto primeiro.

## Teclas de função no computador

{{key:F9}} é o Snap à grelha, {{key:F10}} é o Polar e {{key:F11}} é o Rastreio.

:::mac
No Mac, F3, F7, F8 e F9 costumam controlar o Mission Control e o multimédia. Mantenha **fn** premida com a tecla, ou ative as teclas de função padrão, como descrito em [Teclas, ratos e trackpads](common:keys). Os botões da barra de estado funcionam sempre.
:::

:::firefox
No Firefox, F7 também é a tecla da navegação com cursor (caret browsing). Se o Firefox perguntar se deve ativar a navegação com cursor, escolha **Não**. Use o botão {{ui:Grelha}} se a pergunta continuar a aparecer.
:::

:::touch
Num ecrã tátil não há passagem do cursor, por isso o marcador de snap só aparece onde o dedo toca. Aproxime o zoom para alvos pequenos, ou escreva as coordenadas.
:::

## Erros comuns

- **O clique foi para o ponto errado.** Veja a etiqueta do marcador antes de clicar: Extremidade prevalece sobre Ponto médio quando ambos estão perto. Aproxime o zoom, ou desmarque os snaps de que não precisa.
- **Nenhum marcador aparece.** O {{ui:Snap}} está desligado, ou o snap que quer está desmarcado, ou o objeto está numa camada desligada ou congelada.
- **Os snaps apanham o objeto errado num desenho carregado.** Aproxime o zoom. A distância de snap é medida em pixels do ecrã, por isso aproximar o zoom torna-a menor no desenho.
- **Esperar que o Shift dê uma linha reta.** No CadCraft, o Shift desliga os snaps para um clique. Use o {{ui:Orto}} para linhas retas.
- **Esperar que os pontos caiam em pontos da grelha.** Ative o {{ui:Snap à grelha}} ({{key:F9}}), ou escreva as coordenadas para números redondos.
