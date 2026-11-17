---
title: Menus, teclas e mouse
summary: Escolha um estilo de menu que combine com a forma como você já trabalha, dê a qualquer comando sua própria tecla ou uma tecla que digita um comando, mova comandos entre as guias da faixa de opções e defina o que a roda e os botões do mouse fazem.
keywords: estilo de menu, menus, faixa de opções, barra de ferramentas, linha de comando, atalhos de teclado, teclas de atalho, teclas, personalizar, remapear, redefinir atalho, atalhos, teclas de texto, mouse, roda, inverter, sentido do zoom, botão do meio, botão direito, pan, exportar, importar, trocar, familiar, desenho clássico
from: 8bbf4f88
---

Os comandos do CadCraft são os mesmos, não importa como você os acessa, e a linha de comando está sempre disponível com seus aliases (`L`, `C`, `TR` …). Um **estilo de menu** apenas decide onde os botões ficam na tela, como eles são chamados ali e quais teclas os executam. Escolha um em {{ui:Configurações}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menus, teclas e mouse}}; a mudança é imediata, e este navegador a lembra.

## Os três estilos

| Estilo | O que você obtém |
|---|---|
| {{ui:CadCraft}} | A barra de ferramentas própria do CadCraft: {{ui:Arquivo}}, {{ui:Desenhar}}, {{ui:Modificar}}, {{ui:Anotar}}, {{ui:Paramétrico}}, {{ui:Blocos}}, {{ui:Folhas}}, Editar e {{ui:Vista}}, cada uma com um menu {{ui:Mais}}. O ponto de partida. |
| {{ui:Desenho clássico}} | Uma faixa de opções organizada como os programas clássicos de desenho 2D organizam a deles: um menu {{ui:Arquivo}} e botões rápidos, depois as guias {{ui:Início}} (Desenhar, Modificar, Anotação, Camadas, Bloco, Propriedades, Utilitários, Área de transferência), {{ui:Inserir}}, {{ui:Anotar}}, {{ui:Paramétrico}}, {{ui:Vista}}, {{ui:Gerenciar}}, {{ui:Saída}} e {{ui:3D}}. Digite comandos como sempre. O botão do meio faz pan; um clique com o botão direito é {{key:Enter}}, e arrastar com o botão direito não faz nada. |
| {{ui:Faixa de opções}} | Uma faixa de opções com guias de tarefas simples: {{ui:Desenhar}}, {{ui:Modificar}}, {{ui:Anotar}}, {{ui:Paramétrico}}, {{ui:Blocos}}, {{ui:Folhas}}, {{ui:Vista}}, {{ui:3D}} e {{ui:Ferramentas}}, com um menu {{ui:Arquivo}} e botões rápidos à direita. Os botões do meio e da direita fazem pan, como no estilo próprio do CadCraft. |

Todos os estilos mantêm as teclas do CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, e {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} para os auxiliares de desenho. Letras nunca são teclas de atalho: o CadCraft as digita na linha de comando.

As faixas também reúnem as ferramentas do painel Camadas e os auxiliares de desenho da barra de status. A guia {{ui:3D}} é preenchida depois que a guia 3D sob o desenho foi aberta; uma ferramenta 3D escolhida na guia Modelo abre primeiro a guia 3D, e uma ferramenta 2D escolhida na guia 3D volta primeiro para a guia Modelo.

:::tip
Uma tecla que pertence ao layout próprio do CadCraft, mas que o seu estilo atribuiu a outro comando, não faz nada, e a barra de status informa para onde foi o comando ("Em Minhas teclas, Orto é Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as setas sempre mantêm o seu significado. Enquanto um comando é executado, ou enquanto letras são digitadas na linha de comando, as teclas pertencem à linha de comando.
:::

## Personalize do seu jeito

1. Escolha o estilo mais próximo do que você quer e clique em {{ui:Personalizar…}}.
2. Em {{ui:Teclas e menus}}, encontre um comando (a caixa de busca ajuda). Clique em {{ui:Adicionar uma tecla}} e pressione a tecla. Clique em uma tecla para removê-la.
3. Com uma faixa de opções, {{ui:Onde fica}} move o comando para outra guia e painel, para o menu {{ui:Arquivo}}, ou para {{ui:Somente teclas}}.
4. Em {{ui:Mouse}}, defina a roda e os botões que fazem pan no desenho.
5. Dê um nome e clique em {{ui:Salvar}}.

Salvar um estilo integrado cria sua própria cópia ("Meu Desenho clássico"); o integrado nunca muda. Uma tecla atribuída a dois comandos é mostrada em vermelho e precisa ser corrigida antes de salvar.

## Teclas que digitam um comando

{{cmd:SHORTCUTS}} (Vista › Mais › {{ui:Atalhos de teclado…}}) atribui a uma tecla uma linha de comando completa, como {{key:Ctrl+Alt+L}} para `LINE` ou {{key:F9}} para `ZOOM E`. Essas teclas pertencem ao estilo em uso: na primeira vez que esta versão é aberta, as teclas que você criou em uma versão anterior são transferidas para o seu próprio estilo "Minhas teclas do CadCraft", uma única vez, e continuam funcionando como antes. Exportar o estilo leva-as junto.

## Mouse

- **Roda do mouse**: {{ui:Rolar para cima aproxima}} (o padrão) ou {{ui:Rolar para cima afasta}}, e a velocidade. Um pinçar no trackpad sempre aproxima ou afasta conforme o movimento dos dedos.
- **Fazer pan no desenho com**: o botão do meio, o botão direito ou ambos. Um clique com o botão direito sem arrastar é sempre {{key:Enter}}. O botão esquerdo sempre escolhe e desenha no CadCraft, então marcá-lo não muda nada aqui.
- **Arrastar nas vistas 3D**: a guia 3D mantém seus próprios botões em todos os estilos (o esquerdo orbita, o do meio e o direito fazem pan).

## Leve com você

{{ui:Exportar}} salva o estilo em uso como um pequeno arquivo `.ccinput.json`; {{ui:Importar…}} adiciona um, vindo de outro computador ou de um colega. Um arquivo importado só pode apontar para os comandos do próprio CadCraft: o que houver além disso é deixado de fora e contado na barra de status. {{ui:Excluir este estilo}} remove um dos seus.

:::note
Essas configurações ficam neste navegador. {{ui:Usar este estilo em todos os apps}} sob os cartões de estilo faz com que cada app abra no estilo correspondente (sua própria barra de ferramentas, uma faixa de opções ou Desenho clássico), com as alterações que você fez em cada app. O CadCraft não tem estilo de barra de menus: quando a barra de menus de outro app é escolhida para todos os apps, o CadCraft mantém a sua própria barra de ferramentas.
:::

Relacionados: [Teclado e mouse](topic:keyboard) · [Configurações do CadCraft](topic:settings) · [Vindo de outros softwares de desenho](topic:coming-from) · [Aliases de comando](topic:command-aliases)
