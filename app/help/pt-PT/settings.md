---
title: Definições do CadCraft
summary: As definições que pertencem à aplicação de desenho: tamanho do cursor, de onde pende uma cópia colada a partir do cursor, o que um clique faz à seleção, quantas linhas usa a barra de ferramentas, onde fica a linha de comandos e a sua altura, uma área superior compacta e o indicador de canto.
keywords: linha de comandos, linha de comandos flutuante, flutuar, ancorar, uma linha, f2, histórico de comandos, commandline, cmdline, toparea, área superior, compacto, cursorsize, cursor de ecrã inteiro, de bordo a bordo, linhas da barra de ferramentas, visualização da barra de ferramentas, ctrl f1, definições, preferências, opções, indicador de canto, cubo de vistas, ícone de eixos, ícone UCS, cursor, cruz, caixa de escolha, ponto de colagem, ponto base, clicar em objetos, seleção, pickadd, shift, repor
from: ae1a81db
---

Abra {{ui:Definições}} com a roda dentada na barra da aplicação ou com {{key:Mod+,}}. O primeiro separador, {{ui:CadCraft}}, contém as definições desta aplicação; {{ui:Geral}} contém as que todas as aplicações da família partilham (tema, tamanho e largura do texto dos painéis, aspeto e ordem da barra de ferramentas). As definições do CadCraft existem só na aplicação: altere-as aqui, e este navegador memoriza-as. {{ui:Repor definições do CadCraft}} repõe todas no início.

## Cursor

**Pequeno**, **Médio** (o inicial), **Grande** ou **Ecrã inteiro**: o tamanho da cruz e da caixa de escolha no desenho. Uma caixa de escolha maior também escolhe objetos de um pouco mais longe, o que ajuda num ecrã tátil ou num desenho muito fino.

**Ecrã inteiro** estende as duas linhas da cruz de um lado ao outro do desenho, também quando nenhum comando está em curso, para poder verificar à vista se duas coisas estão alinhadas em toda a vista. Com a vista dividida, as linhas ficam no painel em que está a trabalhar. Igual ao {{cmd:CURSORSIZE}} 100 do AutoCAD: escreva {{cmd:CURSORSIZE}} e 100 para ecrã inteiro; um número menor escolhe o tamanho mais próximo (abaixo de 5 Pequeno, de 5 a 9 Médio, de 10 a 99 Grande).

## Ponto de colagem

De onde pende uma cópia colada, a partir do cursor, depois de {{key:Mod+V}} ({{cmd:PASTECLIP}}), até clicar:

- **Canto inferior esquerdo** (o inicial): o canto inferior esquerdo da extensão dos objetos copiados, como no AutoCAD.
- **Centro**: o meio da sua extensão. Útil para colocar um símbolo à vista.

Uma cópia feita com `COPYBASE` pende sempre do ponto base que escolheu. {{ui:Colar no mesmo sítio}} ({{key:Mod+Shift+V}}) ignora esta definição: mantém as coordenadas originais. Veja [Copiar, colar e duplicar](topic:copy-paste).

## Clicar em objetos

O que um clique no desenho faz à seleção quando nenhum comando está em curso:

- **Acrescenta à seleção** (o inicial): cada clique ou janela acrescenta objetos; {{key:Shift}}+clique, ou uma janela com {{key:Shift}}, retira-os.
- **Substitui a seleção**: um clique ou janela seleciona apenas o que escolhe. {{key:Shift}}+clique acrescenta um objeto, ou retira um que já esteja selecionado; uma janela com {{key:Shift}} acrescenta.

No pedido `Select objects:` dentro de um comando, os cliques acrescentam sempre (e {{key:Shift}} remove), seja qual for esta definição. Veja [Selecionar objetos](topic:select-objects).

## Clicar num espaço vazio

O que um clique onde não há objeto faz quando nenhum comando está em curso. Em qualquer dos casos inicia uma janela de seleção (um segundo clique termina-a).

- **Limpa a seleção** (o inicial): o que estava selecionado é largado. Mantenha {{key:Shift}} premido ao clicar para o manter.
- **Mantém a seleção**: a seleção mantém-se, como noutros programas de desenho; a janela acrescenta-lhe. Prima {{key:Esc}} para limpar a seleção.

## Arrastar para selecionar

O que premir e arrastar num espaço vazio desenha:

- **Laço** (o inicial): um contorno à mão livre. Movendo primeiro para a direita seleciona o que fica totalmente dentro dele, primeiro para a esquerda o que toca; {{key:Space}} enquanto arrasta alterna entre janela, cruzamento e vedação.
- **Retângulo**: a caixa, tal como um clique e um segundo clique a desenham.

{{cmd:LASSOMODE}} `1` ou `0` define o mesmo. Veja [Seleção por laço](topic:lasso-selection).

## Arrastar para aparar e prolongar

O que premir num espaço vazio e arrastar faz em {{cmd:TRIM}} e {{cmd:EXTEND}}:

- **Um caminho** (o inicial): um caminho à mão livre; cada parte que atravessa é aparada (ou prolongada).
- **Uma janela**: uma caixa; cada parte que toca é aparada, como faz a opção `C`.

Veja [Aparar e prolongar](topic:trim-and-extend).

## Posição da barra de ferramentas

{{ui:CadCraft}} › {{ui:Posição da barra de ferramentas}}: **Topo** (o inicial, como sempre esteve), **Fundo**, **Esquerda** ou **Direita**. À esquerda ou à direita os grupos de ferramentas empilham-se numa coluna que se desloca quando é mais alta do que a janela, e os botões quebram-se em duas ou três por linha. A escolha é guardada com as suas definições, e {{cmd:TOOLBARDOCK}} (`TBDOCK`) define-a a partir da linha de comandos. {{ui:Geral}} › {{ui:Repor o esquema}} repõe a barra de ferramentas no topo.

As barras dos estilos de menu ficam dentro da barra de ferramentas e movem-se com ela, mas o estilo {{ui:Friso}} foi feito para correr pelo topo ou pelo fundo: num lado recebe uma coluna estreita que se desloca. Num telemóvel a barra de ferramentas fica onde o esquema do telemóvel a põe.

## Linhas da barra de ferramentas

Quantas linhas as ferramentas usam acima do desenho, na barra do CadCraft e nos estilos {{ui:Desenho clássico}} e {{ui:Friso}}:

- **Quebrar para caber** (o inicial): as ferramentas quebram-se conforme a largura da janela.
- **2 linhas**: no máximo duas linhas. Quando as ferramentas se quebram em duas linhas ou menos com esta largura, apenas se quebram; caso contrário ficam em duas filas que se deslocam lateralmente.
- **1 linha**: uma linha que se desloca lateralmente, o que deixa mais espaço ao desenho.

{{key:Shift+Ctrl+F1}} percorre as três, e {{cmd:TOOLBARROWS}} define uma. O que os botões mostram (ícones e texto, só ícones, ou só texto) é uma definição de {{ui:Geral}} › {{ui:Barra de ferramentas}}; {{key:Ctrl+F1}} percorre-a e {{cmd:TOOLBAR}} define-a.

## Linha de comandos

A linha de comandos pode ficar ancorada sob o desenho, como sempre esteve, ou flutuar sobre ele, e pode ser tão fina como uma linha.

- **Faça-a flutuar.** Arraste o grip na sua extremidade esquerda para dentro do desenho, ou escolha {{ui:Flutuar sobre o desenho}} no seu menu {{ui:Opções da linha de comandos}} (os três pontos na extremidade direita). Arraste o grip de novo para a mover; o seu lugar mantém-se quando a janela muda de tamanho. Arraste a sua extremidade direita para a tornar mais larga ou mais estreita. Largue-a na barra de estado, ou escolha {{ui:Ancorar em baixo}}, para a ancorar de novo.
- **Torne-a mais fina ou mais alta.** Arraste o seu bordo superior: cada passo é uma linha de histórico. Até zero linhas torna-se uma **linha de comandos de uma linha**: só o pedido e o que escreve, e uma nova mensagem aparece acima dela por um momento. Um duplo clique no bordo superior alterna entre uma linha e a altura que tinha.
- **O histórico.** {{key:F2}}, ou o botão de relógio na linha de comandos ({{ui:Histórico de comandos (F2)}}), abre o histórico completo acima da linha (abaixo dela quando a linha flutua perto do topo da janela). Escrever continua a ir para a linha de comandos; {{key:PageUp}} e {{key:PageDown}} deslocam o histórico, e {{key:Esc}}, {{key:F2}} ou um clique noutro sítio fecham-no. Uma tecla sua em F2 tem prioridade sobre isto.
- **A partir do teclado.** O grip é um botão: com ele focado, as setas movem uma linha de comandos flutuante (com {{key:Shift}}, em passos maiores); {{key:Up}} faz flutuar uma ancorada e {{key:Down}} no bordo inferior ancora-a. O bordo superior é um separador: {{key:Up}} e {{key:Down}} acrescentam ou retiram uma linha, {{key:Home}} torna-a uma linha, {{key:End}} a mais alta. Os leitores de ecrã continuam a ouvir todas as mensagens, também na linha de comandos de uma linha.

{{ui:CadCraft}} › {{ui:Linha de comandos}} tem as mesmas escolhas: {{ui:Ancorada em baixo}} ou {{ui:A flutuar}}, {{ui:Linhas do histórico apresentadas}} (0 a 12) e {{ui:Altura padrão}}. {{cmd:COMMANDLINE}} (`CMDLINE`) define-as a partir da linha de comandos. O lugar e a altura são guardados para o CadCraft neste navegador com o resto do esquema, por isso um ambiente de trabalho guardado as transporta; {{ui:Geral}} › {{ui:Repor o esquema}} volta a ancorar a linha de comandos na sua altura padrão. Num telemóvel a linha de comandos fica ancorada com uma linha de histórico; o botão do histórico funciona também aí.

{{ui:CadCraft}} › {{ui:Letras das opções}} mantém as letras que escolheu para as opções dos comandos: {{ui:Editar…}} abre o ficheiro, {{ui:Importar…}} substitui-o por um ficheiro que escolher e {{ui:Exportar}} guarda-o. Veja [Dar às opções dos comandos as suas próprias letras](topic:option-letters).

Quando a janela é baixa e a verificação do esquema propõe um esquema mais apertado, o seu {{ui:Sim}} também torna a linha de comandos numa linha, se o desenho continuar pequeno depois das barras de ferramentas.

## Área superior

{{ui:CadCraft}} › {{ui:Área superior}}: **Normal** (o inicial) ou **Compacta**. Compacta mantém as barras acima do desenho pequenas em todos os estilos de menu: os nomes dos grupos e as palavras sob os ícones desaparecem (as dicas e os leitores de ecrã continuam a tê-los) e os botões ficam mais justos. Funciona com [Linhas da barra de ferramentas](topic:settings#toolbar-rows): Compacta e **1 linha** dão mais espaço ao desenho. {{cmd:TOPAREA}} define-a.

## Indicador de canto

O que fica no canto do desenho:

- **Automático** (o inicial): o ícone de eixos no separador {{ui:Modelo}} e o cubo de vistas no separador {{ui:3D}}.
- **Ícone de eixos**: a marca X e Y no canto inferior esquerdo do separador {{ui:Modelo}}, e uma pequena marca X, Y e Z no separador {{ui:3D}}.
- **Cubo de vistas**: um cubo no canto superior direito dos dois separadores. No separador {{ui:Modelo}} mostra o desenho de cima, e clicar noutra face, aresta ou canto abre o separador {{ui:3D}} a olhar a partir daí. No separador 3D roda com a vista: clique para olhar de um lado, arraste para orbitar, e o ícone de casa volta à vista isométrica. Veja [Modelo em 3D](topic:3d-solids).
- **Nenhum**: nada no canto.

As folhas não mostram nenhum dos dois.

## Comprimento e área da seleção

- **Na barra de estado** (o inicial): com objetos selecionados, a barra de estado mostra o seu comprimento total e a área total dos fechados. Veja [Totais de uma seleção](topic:properties-panel#totals-of-a-selection).
- **Oculto**: a barra de estado não os inclui. As Propriedades continuam a mostrá-los para vários objetos.

## Grelha, Orto e snaps

Estes não estão na caixa de diálogo: os botões {{ui:Grelha}}, {{ui:Orto}} e {{ui:Snap}} na barra de estado (ou {{key:F7}}, {{key:F8}}, {{key:F3}}) e a lista de snaps a objetos ao lado deles são memorizados quando os deixa. Veja [Encaixar em pontos de objetos](topic:object-snaps).
