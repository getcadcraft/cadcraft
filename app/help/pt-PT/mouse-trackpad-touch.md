---
title: Rato, trackpad e toque
summary: Como fazer zoom, deslocar a vista, clicar com o botão direito e escolher pontos no CadCraft com um rato de roda, um trackpad de Mac ou de PC, ou um ecrã tátil, e o que muda entre navegadores.
keywords: trackpad, touchpad, magic mouse, toque, tablet, ipad, deslocar, pan, zoom, pinça, pinch, botão direito, dois dedos, botão do meio, navegador, chrome, firefox, safari, edge
from: 73d0954a
---

O CadCraft foi concebido para um rato com roda. Tudo funciona também com um trackpad, com alguns hábitos a aprender. Os ecrãs táteis servem para escolher, com limites.

## Rato com roda

- **Zoom:** rode a roda. O desenho faz zoom em torno da cruz, por isso aponte para o que quer ver.
- **Deslocar:** mantenha a roda premida e arraste, ou arraste com o botão direito.
- **Zoom para tudo:** faça duplo clique na roda, ou clique em {{ui:Extensão}}.
- **Voltar à vista anterior:** clique em {{ui:Anterior}} no grupo Vista, ou escreva `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Uma sequência de passos da roda conta como uma vista, por isso um único {{ui:Anterior}} anula-a. Guarde as vistas a que queira voltar com {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** clique com o botão direito.

## Trackpad

:::mac
- **Deslocar:** mova dois dedos no trackpad, em qualquer direção: o desenho segue os seus dedos. Também pode arrastar com um clique de dois dedos mantido (um arrastar com o botão direito).
- **Zoom:** faça pinça com dois dedos. O zoom segue a cruz.
- **Clique com o botão direito (Enter):** clique com dois dedos. Ative "Clique secundário" em **Definições do Sistema**, depois em **Trackpad**, se não fizer nada. O Control-clique pode contar como um clique normal no CadCraft, em vez de um clique com o botão direito, por isso use o clique de dois dedos.
- **Zoom para uma área:** clique em {{ui:Janela}} no grupo Vista e clique em dois cantos.
:::

:::windows linux
- **Deslocar:** mova dois dedos no touchpad, em qualquer direção: o desenho segue os seus dedos. Também pode arrastar com o botão direito mantido.
- **Zoom:** faça pinça com dois dedos. O zoom segue a cruz.
- **Clique com o botão direito (Enter):** clique com dois dedos, ou clique no canto inferior direito do touchpad, conforme as definições do seu touchpad.
- **Zoom para uma área:** clique em {{ui:Janela}} no grupo Vista e clique em dois cantos.
:::

Manter {{key:Space}} premida e arrastar **não** desloca a vista no CadCraft: {{key:Space}} é Enter.

A roda do rato continua a fazer zoom, um passo de cada vez. Um trackpad que envie a rolagem em passos inteiros, como uma roda, faz zoom com uma rolagem de dois dedos em vez de deslocar a vista: afaste a vista, aponte para a área que quer e volte a aproximar. O separador 3D mantém os seus próprios movimentos de trackpad (veja [Modelo em 3D](topic:3d-solids#look-around)).

## Ecrãs táteis e tablets

O CadCraft lê um dedo como um clique do rato:

- Um toque escolhe um ponto ou um objeto, ou seleciona.
- Arrastar um dedo num espaço vazio desenha um laço (para a direita, primeiro uma janela; para a esquerda, primeiro um cruzamento; veja [Seleção por laço](topic:lasso-selection)).
- Em {{cmd:TRIM}} e {{cmd:EXTEND}}, arrastar um dedo por peças corta-as ou prolonga-as todas.
- Arrastar o grip de um objeto selecionado move o grip (os grips e a caixa de seleção são maiores para um dedo).
- **Pinça** com dois dedos para fazer zoom em torno do ponto entre eles; mova dois dedos juntos para **deslocar**. Um segundo dedo cancela o que o primeiro começou, por isso uma pinça nunca deixa marca.
- Um **toque longo** (mantenha parado cerca de meio segundo) é um clique com o botão direito: {{key:Enter}}. Termina um comando, acaba uma seleção ou repete o último comando.

Por baixo da linha de comandos aparece uma **linha de teclas**: {{ui:Esc}}, {{ui:Anular}}, {{ui:Refazer}}, os caracteres que um teclado de tablet esconde (`@` `,` `<` `'` `"` `-`), {{ui:Snap}}, {{ui:Orto}}, um botão de teclado e um grande {{ui:Enter}}. Toque no botão do teclado (ou na linha de comandos) para escrever um comando ou um número.

Não há passagem do ponteiro, por isso os marcadores de snap só aparecem onde está o seu dedo.

:::touch
Está a usar um ecrã tátil. Para mais do que uma vista rápida, um teclado ligado e um rato ou trackpad tornam o CadCraft muito mais fácil de usar.
:::

## Navegadores

O CadCraft funciona da mesma forma no Chrome, Edge, Firefox e Safari, em Mac, Windows e Linux. As diferenças são pequenas:

| Tema | O que saber |
|---|---|
| Abrir um DWG | Desenhos grandes demoram alguns segundos a ler em todos os navegadores; a linha de estado mostra "A ler …" entretanto |
| Transferências | Cada navegador decide para onde vão as transferências e se pergunta primeiro; veja [Navegadores e computadores](common:browsers) |
| Abrir para imprimir | Abre o PDF num novo separador. Se o navegador bloquear pop-ups, o CadCraft transfere o PDF |
| F7 | O Firefox pode oferecer navegação com cursor; escolha Não |
| Sair com alterações não guardadas | Cada navegador mostra a sua própria pergunta "Sair do site?", que o CadCraft não pode alterar |

:::safari
No Safari, um PDF aberto com {{ui:Abrir para imprimir}} pode aparecer no separador sem imprimir: use **Ficheiro** e depois **Imprimir**.
:::

:::firefox
O Firefox pode perguntar o que fazer com cada transferência. Escolha guardar o ficheiro, ou altere isto uma vez nas definições do Firefox, em Transferências.
:::
