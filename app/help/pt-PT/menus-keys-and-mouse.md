---
title: Menus, teclas e rato
summary: Escolha um estilo de menus que corresponda à forma como já trabalha, atribua a qualquer comando a sua própria tecla ou uma tecla que escreva um comando, mova comandos entre separadores do friso, e defina o que a roda e os botões do rato fazem.
keywords: estilo de menus, menus, friso, barra de ferramentas, linha de comandos, atalhos de teclado, teclas de atalho, teclas, personalizar, redefinir, reatribuir, atalhos, teclas de texto, rato, roda, inverter, sentido do zoom, botão do meio, botão direito, deslocar, exportar, importar, alternar, familiar, desenho clássico
from: 8bbf4f88
---

Os comandos do CadCraft são os mesmos, seja qual for a forma como lhes acede, e a linha de comandos está sempre disponível com os seus aliases (`L`, `C`, `TR` …). Um **estilo de menus** decide apenas onde os botões ficam no ecrã, como se chamam ali e quais teclas os executam. Escolha um em {{ui:Definições}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menus, teclas e rato}}; a alteração é imediata, e este navegador a memoriza.

## Os três estilos

| Estilo | O que obtém |
|---|---|
| {{ui:CadCraft}} | A barra de ferramentas própria do CadCraft: Ficheiro, Desenhar, Modificar, Anotar, Paramétrico, Blocos, Folhas, Editar e Vista, cada um com um menu {{ui:Mais}}. O início. |
| {{ui:Desenho clássico}} | Um friso disposto como os programas clássicos de desenho 2D dispõem o seu: um menu {{ui:Ficheiro}} e botões rápidos, depois os separadores {{ui:Base}} (Desenhar, Modificar, Anotação, Camadas, Bloco, Propriedades, Utilitários, Área de transferência), {{ui:Inserir}}, {{ui:Anotar}}, {{ui:Paramétrico}}, {{ui:Vista}}, {{ui:Gerir}}, {{ui:Saída}} e {{ui:3D}}. Escreva comandos como sempre. O botão do meio desloca a vista; um clique com o botão direito é {{key:Enter}}, e arrastar com o botão direito não faz nada. |
| {{ui:Friso}} | Um friso de separadores de tarefas simples: {{ui:Desenhar}}, {{ui:Modificar}}, {{ui:Anotar}}, {{ui:Paramétrico}}, {{ui:Blocos}}, {{ui:Folhas}}, {{ui:Vista}}, {{ui:3D}} e {{ui:Ferramentas}}, com um menu {{ui:Ficheiro}} e botões rápidos à direita. Os botões do meio e do direito deslocam a vista, como no estilo próprio do CadCraft. |

Todos os estilos mantêm as teclas do CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, e {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} para os auxiliares de desenho. As letras nunca são teclas: o CadCraft escreve-as na linha de comandos.

Os frisos também contêm as ferramentas do painel Camadas e os auxiliares de desenho da barra de estado. O separador {{ui:3D}} fica preenchido depois de se abrir o separador 3D sob o desenho; uma ferramenta 3D escolhida no separador Modelo abre primeiro o separador 3D, e uma ferramenta 2D escolhida no separador 3D volta primeiro ao separador Modelo.

:::tip
Uma tecla que pertence ao esquema próprio do CadCraft, mas que o seu estilo atribuiu a outro comando, não faz nada, e a barra de estado indica para onde foi o comando ("Nas minhas teclas, Ortho é Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as setas mantêm sempre o seu significado. Enquanto um comando está a correr, ou enquanto se escrevem letras na linha de comandos, as teclas pertencem à linha de comandos.
:::

## Crie o seu próprio

1. Escolha o estilo mais próximo do que quer e clique em {{ui:Personalizar…}}.
2. Em {{ui:Teclas e menus}}, encontre um comando (a caixa de pesquisa ajuda). Clique em {{ui:Adicionar uma tecla}} e prima a tecla. Clique numa tecla para a retirar.
3. Com um friso, {{ui:Onde fica}} move o comando para outro separador e painel, para o menu {{ui:Ficheiro}}, ou para {{ui:Só teclas}}.
4. Em {{ui:Rato}}, defina a roda e os botões que deslocam o desenho.
5. Dê-lhe um nome e clique em {{ui:Guardar}}.

Guardar um estilo original cria uma cópia própria ("O meu Desenho clássico"); o estilo original nunca muda. Uma tecla atribuída a dois comandos aparece a vermelho e tem de ser corrigida antes de poder guardar.

## Teclas que escrevem um comando

{{cmd:SHORTCUTS}} (Vista › Mais › {{ui:Atalhos de teclado…}}) atribui a uma tecla uma linha de comando inteira, como {{key:Ctrl+Alt+L}} para `LINE` ou {{key:F9}} para `ZOOM E`. Estas teclas pertencem ao estilo em uso: na primeira vez que esta versão abre, as teclas que criou numa versão anterior são transferidas, uma vez, para o seu próprio estilo "As minhas teclas do CadCraft", e funcionam como antes. Exportar o estilo leva-as consigo.

## Rato

- **Roda do rato**: {{ui:Rodar para cima aproxima}} (o predefinido) ou {{ui:Rodar para cima afasta}}, e a velocidade. Um gesto de pinça no trackpad faz sempre zoom no sentido em que os dedos se movem.
- **Deslocar o desenho com**: o botão do meio, o botão direito, ou ambos. Um clique com o botão direito sem arrastar é sempre {{key:Enter}}. O botão esquerdo escolhe e desenha sempre no CadCraft, por isso assinalá-lo não altera nada aqui.
- **Arrastar nas vistas 3D**: o separador 3D mantém os seus próprios botões em todos os estilos (o esquerdo orbita, o do meio e o direito deslocam).

## Levar consigo

{{ui:Exportar}} guarda o estilo em uso num pequeno ficheiro `.ccinput.json`; {{ui:Importar…}} acrescenta um, de outro computador ou de um colega. Um ficheiro importado só pode apontar para comandos do próprio CadCraft: o resto é deixado de fora e contado na barra de estado. {{ui:Eliminar este estilo}} remove um dos seus próprios.

:::note
Estas definições ficam neste navegador. {{ui:Utilizar este estilo em todas as aplicações}} sob os cartões de estilo faz com que cada aplicação abra no seu estilo correspondente (a sua própria barra de ferramentas, um friso ou Desenho clássico), com as alterações que fez em cada aplicação. O CadCraft não tem estilo com barra de menus: quando a barra de menus de outra aplicação é escolhida para todas as aplicações, o CadCraft mantém a sua própria barra de ferramentas.
:::

Relacionado: [Teclado e rato](topic:keyboard) · [Definições do CadCraft](topic:settings) · [Vindo de outro software de desenho](topic:coming-from) · [Aliases de comandos](topic:command-aliases)
