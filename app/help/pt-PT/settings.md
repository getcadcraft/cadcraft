---
title: Definições do CadCraft
summary: As definições que pertencem à aplicação de desenho: tamanho do cursor, onde uma cópia colada fica pendurada do cursor, o que um clique faz à seleção, quantas linhas usa a barra de ferramentas, onde fica a linha de comandos e a sua altura, uma área superior compacta e o indicador de canto.
keywords: linha de comandos, linha de comandos flutuante, flutuar, ancorar, uma linha, f2, histórico de comandos, commandline, cmdline, toparea, área superior, compacta, cursorsize, cruzeta de ecrã inteiro, cursor de ecrã inteiro, de margem a margem, linhas da barra de ferramentas, visualização da barra de ferramentas, ctrl f1, definições, preferências, opções, indicador de canto, cubo de vistas, ícone de eixos, ícone UCS, cursor, cruzeta, caixa de escolha, ponto de colagem, ponto base, clicar em objetos, seleção, pickadd, shift, repor
from: 0896eb42
---

Abra {{ui:Definições}} com a roda dentada na barra da aplicação ou com {{key:Mod+,}}. O primeiro separador, {{ui:CadCraft}}, tem as definições que pertencem a esta aplicação; {{ui:Geral}} tem as que todas as aplicações da família partilham (tema, tamanho e largura do texto dos painéis, e o aspeto e a ordem da barra de ferramentas). As definições do CadCraft existem só na aplicação: altera-as aqui, e este navegador as memoriza. {{ui:Repor definições do CadCraft}} devolve todas ao início.

## Cursor

**Pequeno**, **Médio** (o início), **Grande** ou **Ecrã inteiro**: o tamanho da cruzeta e da caixa de escolha no desenho. Uma caixa de escolha maior também apanha objetos um pouco mais longe, o que ajuda num ecrã tátil ou num desenho muito fino.

**Ecrã inteiro** faz com que as duas linhas da cruzeta atravessem o desenho de margem a margem, também quando nenhum comando está a correr, para que possa verificar a olho se duas coisas estão alinhadas em toda a vista. Com a vista dividida, as linhas ficam no painel em que está a trabalhar. Igual ao {{cmd:CURSORSIZE}} 100 do AutoCAD: escreva {{cmd:CURSORSIZE}} e 100 para ecrã inteiro; um número mais pequeno escolhe o tamanho mais próximo (abaixo de 5 Pequeno, de 5 a 9 Médio, de 10 a 99 Grande).

## Ponto de colagem

Onde fica pendurada do cursor uma cópia colada depois de {{key:Mod+V}} ({{cmd:PASTECLIP}}), até clicar:

- **Canto inferior esquerdo** (o início): o canto inferior esquerdo da extensão dos objetos copiados, como no AutoCAD.
- **Centro**: o meio da sua extensão. Útil para colocar um símbolo a olho.

Uma cópia feita com `COPYBASE` fica sempre pendurada no ponto base que escolheu. {{ui:Colar no mesmo sítio}} ({{key:Mod+Shift+V}}) ignora esta definição: mantém as coordenadas originais. Veja [Copiar, colar e duplicar](topic:copy-paste).

## Clicar em objetos

O que um clique no desenho faz à seleção quando nenhum comando está a correr:

- **Acrescenta à seleção** (o início): cada clique ou janela acrescenta objetos; {{key:Shift}}+clique, ou uma janela com {{key:Shift}}, retira-os.
- **Substitui a seleção**: um clique ou uma janela seleciona apenas o que apanha. {{key:Shift}}+clique acrescenta um objeto, ou retira um que já estava selecionado; uma janela com {{key:Shift}} acrescenta.

Num pedido `Selecione objetos:` dentro de um comando, os cliques acrescentam sempre (e {{key:Shift}} retira), seja qual for esta definição. Veja [Selecionar objetos](topic:select-objects).

## Clicar num sítio vazio

O que um clique onde não há objeto faz quando nenhum comando está a correr. De qualquer modo inicia uma janela de seleção (um segundo clique a termina).

- **Limpa a seleção** (o início): o que estava selecionado é largado. Mantenha {{key:Shift}} premido ao clicar para o manter.
- **Mantém a seleção**: a seleção fica como está, como noutros programas de desenho; a janela acrescenta-lhe. Prima {{key:Esc}} para limpar a seleção.

## Arrastar para selecionar

O que premir e arrastar num sítio vazio desenha:

- **Laço** (o início): um contorno à mão livre. Movimento para a direita primeiro seleciona o que fica totalmente dentro; para a esquerda primeiro, o que toca. {{key:Space}} enquanto arrasta alterna entre janela, cruzamento e vedação.
- **Retângulo**: a caixa, como um clique e um segundo clique a desenham.

{{cmd:LASSOMODE}} `1` ou `0` define o mesmo. Veja [Seleção por laço](topic:lasso-selection).

## Arrastar para aparar e prolongar

O que premir num sítio vazio e arrastar faz em {{cmd:TRIM}} e {{cmd:EXTEND}}:

- **Um caminho** (o início): um caminho à mão livre; cada parte que cruza é aparada (ou prolongada).
- **Uma janela**: uma caixa; cada parte que toca é aparada, como faz a opção `C`.

Veja [Aparar e prolongar](topic:trim-and-extend).

## Posição da barra de ferramentas

{{ui:CadCraft}} › {{ui:Posição da barra de ferramentas}}: **Superior** (o início, como sempre foi), **Inferior**, **Esquerda** ou **Direita**. À esquerda ou à direita, os grupos de ferramentas empilham-se numa coluna que faz deslocamento quando é mais alta do que a janela, e os botões dispõem-se em duas ou três por linha. A escolha fica guardada com as suas definições, e {{cmd:TOOLBARDOCK}} (`TBDOCK`) define-a a partir da linha de comandos. {{ui:Geral}} › {{ui:Repor o esquema}} volta a pôr a barra de ferramentas no topo.

As barras dos estilos de menu ficam dentro da barra de ferramentas e movem-se com ela, mas o estilo {{ui:Friso}} foi feito para correr no topo ou no fundo: de lado recebe uma coluna estreita que faz deslocamento. Num telemóvel, a barra de ferramentas fica onde o esquema do telemóvel a põe.

## Linhas da barra de ferramentas

Quantas linhas as ferramentas usam acima do desenho, na barra do CadCraft e nos estilos {{ui:Desenho clássico}} e {{ui:Friso}}:

- **Quebrar para caber** (o início): as ferramentas quebram-se para a largura da janela.
- **2 linhas**: no máximo duas linhas. Quando as ferramentas se quebram em duas linhas ou menos, com esta largura, apenas quebram; caso contrário ficam em duas filas que deslocam para o lado.
- **1 linha**: uma linha que desloca para o lado, o que deixa mais espaço ao desenho.

{{key:Shift+Ctrl+F1}} percorre as três, e {{cmd:TOOLBARROWS}} define uma. O que os botões mostram (ícones e texto, só ícones ou só texto) é uma definição de {{ui:Geral}} › {{ui:Barra de ferramentas}}; {{key:Ctrl+F1}} percorre-a e {{cmd:TOOLBAR}} define-a.

## Linha de comandos

A linha de comandos pode ficar ancorada sob o desenho, como sempre esteve, ou flutuar sobre ele, e pode ser tão fina como uma só linha.

- **Fazê-la flutuar.** Arraste a pega à sua esquerda para dentro do desenho, ou escolha {{ui:Flutuar sobre o desenho}} no menu {{ui:Opções da linha de comandos}} (os três pontos à direita). Arraste a pega de novo para a mover; a sua posição mantém-se quando a janela muda de tamanho. Arraste a sua margem direita para a tornar mais larga ou mais estreita. Largue-a na barra de estado, ou escolha {{ui:Ancorar em baixo}}, para a ancorar de novo.
- **Torná-la mais fina ou mais alta.** Arraste a sua margem superior: cada passo é uma linha do histórico. Até zero linhas fica uma **linha de comandos de uma linha**: só o pedido e o que escreve, e uma nova mensagem aparece acima durante um momento. Um duplo clique na margem superior alterna entre uma linha e a altura que tinha.
- **O histórico.** {{key:F2}}, ou o botão do relógio na linha de comandos ({{ui:Histórico de comandos (F2)}}), abre o histórico completo acima da linha (abaixo dela quando a linha flutua perto do topo da janela). A escrita continua a ir para a linha de comandos; {{key:PageUp}} e {{key:PageDown}} deslocam o histórico, e {{key:Esc}}, {{key:F2}} ou um clique noutro sítio fecham-no. Uma tecla sua em F2 tem prioridade sobre isto.
- **A partir do teclado.** A pega é um botão: com ela em foco, as setas movem uma linha de comandos flutuante (com {{key:Shift}}, em passos maiores); {{key:Up}} faz flutuar uma ancorada e {{key:Down}} na margem inferior ancora-a. A margem superior é um separador: {{key:Up}} e {{key:Down}} acrescentam ou retiram uma linha, {{key:Home}} torna-a uma linha, {{key:End}} a mais alta. Os leitores de ecrã continuam a ouvir todas as mensagens, também na linha de comandos de uma linha.

{{ui:CadCraft}} › {{ui:Linha de comandos}} tem as mesmas escolhas: {{ui:Ancorada em baixo}} ou {{ui:A flutuar}}, {{ui:Linhas do histórico apresentadas}} (0 a 12) e {{ui:Altura padrão}}. {{cmd:COMMANDLINE}} (`CMDLINE`) define-as a partir da linha de comandos. A posição e a altura ficam guardadas para o CadCraft neste navegador com o resto do esquema, por isso um ambiente de trabalho guardado as transporta; {{ui:Geral}} › {{ui:Repor o esquema}} volta a ancorar a linha de comandos na sua altura padrão. Num telemóvel, a linha de comandos fica ancorada com uma linha de histórico; o botão do histórico funciona também aí.

Quando a janela está curta e a verificação de esquema oferece uma disposição mais compacta, o seu {{ui:Sim}} também põe a linha de comandos numa linha, se o desenho continuar curto depois das barras de ferramentas.

## Área superior

{{ui:CadCraft}} › {{ui:Área superior}}: **Padrão** (o início) ou **Compacta**. A compacta mantém as barras acima do desenho pequenas em todos os estilos de menu: os nomes dos grupos e as palavras sob os ícones desaparecem (as dicas e os leitores de ecrã continuam a tê-los) e os botões ficam mais justos. Funciona com [Linhas da barra de ferramentas](topic:settings#toolbar-rows): Compacta e **1 linha** deixam mais espaço ao desenho. {{cmd:TOPAREA}} define-a.

## Indicador de canto

O que fica no canto do desenho:

- **Automático** (o início): o ícone de eixos no separador {{ui:Modelo}} e o cubo de vistas no separador {{ui:3D}}.
- **Ícone de eixos**: o marcador X e Y no canto inferior esquerdo do separador {{ui:Modelo}}, e um pequeno marcador X, Y e Z no separador {{ui:3D}}.
- **Cubo de vistas**: um cubo no canto superior direito dos dois separadores. No separador {{ui:Modelo}} mostra o desenho de cima, e clicar noutra face, aresta ou canto abre o separador {{ui:3D}} a olhar a partir daí. No separador 3D roda com a vista: clique para olhar de um lado, arraste para orbitar, e a casa volta à vista isométrica. Veja [Modelo em 3D](topic:3d-solids).
- **Nenhum**: nada no canto.

As folhas não mostram nenhum dos dois.

## Comprimento e área da seleção

- **Na barra de estado** (o início): com objetos selecionados, a barra de estado mostra o seu comprimento total e a área total dos fechados. Veja [Totais de uma seleção](topic:properties-panel#totals-of-a-selection).
- **Oculto**: a barra de estado deixa-os de fora. Propriedades continua a mostrá-los para vários objetos.

## Grelha, Orto e snaps

Estes não estão na janela de definições: os botões {{ui:Grelha}}, {{ui:Orto}} e {{ui:Snap}} na barra de estado (ou {{key:F7}}, {{key:F8}}, {{key:F3}}) e a lista de snaps a objetos ao lado deles são memorizados à medida que os deixa. Veja [Snap a pontos em objetos](topic:object-snaps).
