---
title: Mouse, trackpad e toque
summary: Como dar zoom, fazer pan, clicar com o botão direito e escolher objetos no CadCraft com um mouse de roda, um trackpad de Mac ou PC, ou uma tela de toque, e o que muda entre navegadores.
keywords: trackpad, touchpad, magic mouse, toque, tablet, ipad, pan, zoom, pinça, clique com o botão direito, dois dedos, botão do meio, navegador, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft foi projetado para um mouse com roda. Tudo também funciona com um trackpad, com alguns hábitos a aprender. Telas de toque servem para escolher objetos, com limites.

## Mouse com roda

- **Zoom:** gire a roda. O desenho dá zoom em torno da cruz de mira, então aponte para o que você quer ver.
- **Pan:** mantenha a roda pressionada e arraste, ou arraste com o botão direito.
- **Zoom para tudo:** clique duas vezes na roda, ou clique em {{ui:Extensão}}.
- **De volta à vista anterior:** clique em {{ui:Anterior}} no grupo Exibir, ou digite `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Uma sequência de passos da roda conta como uma vista, então um {{ui:Anterior}} desfaz tudo. Salve as vistas para as quais você volta com {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** clique com o botão direito.

## Trackpad

:::mac
- **Pan:** mova dois dedos no trackpad, em qualquer direção: o desenho acompanha seus dedos. Você também pode arrastar com um clique de dois dedos mantido pressionado (um arraste com o botão direito).
- **Zoom:** pince com dois dedos. O zoom segue a cruz de mira.
- **Clique com o botão direito (Enter):** clique com dois dedos. Ative "Clique secundário" em **Ajustes do Sistema**, depois **Trackpad**, se não fizer nada. O Control-clique pode contar como um clique comum no CadCraft em vez de um clique com o botão direito, então use o clique de dois dedos.
- **Zoom para uma área:** clique em {{ui:Janela}} no grupo Exibir e clique em dois cantos.
:::

:::windows linux
- **Pan:** mova dois dedos no touchpad, em qualquer direção: o desenho acompanha seus dedos. Você também pode arrastar com o botão direito pressionado.
- **Zoom:** pince com dois dedos. O zoom segue a cruz de mira.
- **Clique com o botão direito (Enter):** clique com dois dedos, ou clique no canto inferior direito do touchpad, dependendo das configurações do seu touchpad.
- **Zoom para uma área:** clique em {{ui:Janela}} no grupo Exibir e clique em dois cantos.
:::

Manter {{key:Space}} pressionada e arrastar **não** faz pan no CadCraft: {{key:Space}} é Enter.

Uma roda de mouse continua dando zoom, um passo de cada vez. Um touchpad que envia a rolagem em passos inteiros, como uma roda, dá zoom com rolagem de dois dedos em vez de fazer pan: afaste o zoom, aponte para a área que quer e aproxime de novo. A guia 3D mantém seus próprios movimentos de trackpad (veja [Modelo em 3D](topic:3d-solids#look-around)).

## Telas de toque e tablets

O CadCraft lê um dedo como um clique de mouse:

- Um toque escolhe um ponto ou um objeto, ou seleciona.
- Arrastar um dedo em espaço vazio desenha um laço (para a direita primeiro, uma janela; para a esquerda primeiro, um cruzamento; veja [Seleção por laço](topic:lasso-selection)).
- Em {{cmd:TRIM}} e {{cmd:EXTEND}}, arrastar um dedo por peças as apara ou estende todas.
- Arrastar o grip de um objeto selecionado move o grip (grips e a caixa de escolha são maiores para um dedo).
- **Pince** com dois dedos para dar zoom em torno do ponto entre eles; mova dois dedos juntos para fazer **pan**. Um segundo dedo cancela o que o primeiro começou, então um pinçamento nunca deixa marca.
- Um **toque longo** (segure parado por cerca de meio segundo) é um clique com o botão direito: {{key:Enter}}. Ele encerra um comando, finaliza uma seleção ou repete o último comando.

Abaixo da linha de comando aparece uma **linha de teclas**: {{ui:Esc}}, {{ui:Desfazer}}, {{ui:Refazer}}, os caracteres que um teclado de tablet esconde (`@` `,` `<` `'` `"` `-`), {{ui:Snap}}, {{ui:Orto}}, um botão de teclado e um grande {{ui:Enter}}. Toque no botão de teclado (ou na linha de comando) para digitar um comando ou número.

Não há passagem do mouse (hover), então os marcadores de snap só aparecem onde seu dedo está.

:::touch
Você está usando uma tela de toque. Para algo além de uma consulta rápida, um teclado e um mouse ou trackpad conectados tornam o CadCraft muito mais fácil de usar.
:::

## Navegadores

O CadCraft funciona igual no Chrome, Edge, Firefox e Safari, em Mac, Windows e Linux. As diferenças são pequenas:

| Tópico | O que saber |
|---|---|
| Abrir um DWG | Desenhos grandes levam alguns segundos para ler em todos os navegadores; a linha de status mostra "Lendo …" enquanto isso |
| Downloads | Cada navegador decide para onde vão os downloads e se pergunta antes; veja [Navegadores e computadores](common:browsers) |
| Abrir para imprimir | Abre o PDF em uma nova guia. Se o navegador bloquear pop-ups, o CadCraft baixa o PDF em vez disso |
| F7 | O Firefox pode oferecer navegação com cursor; escolha Não |
| Sair com alterações não salvas | Cada navegador mostra sua própria pergunta "Sair do site?", que o CadCraft não pode mudar |

:::safari
No Safari, um PDF aberto com {{ui:Abrir para imprimir}} pode aparecer na guia sem imprimir: use **Arquivo**, depois **Imprimir**.
:::

:::firefox
O Firefox pode perguntar o que fazer com cada download. Escolha salvar o arquivo, ou mude isso uma vez nas configurações do Firefox, em Downloads.
:::
