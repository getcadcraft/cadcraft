---
title: Configurações do CadCraft
summary: As configurações que pertencem ao aplicativo de desenho: tamanho do cursor, de onde pende uma cópia colada, o que um clique faz à seleção, quantas linhas a barra de ferramentas usa, onde fica a linha de comando e sua altura, uma área superior compacta e o indicador de canto.
keywords: linha de comando, linha de comando flutuante, flutuar, acoplar, uma linha, f2, histórico de comandos, commandline, cmdline, toparea, área superior, compacto, cursorsize, mira de tela cheia, cursor de tela cheia, de borda a borda, linhas da barra de ferramentas, exibição da barra de ferramentas, ctrl f1, configurações, preferências, opções, indicador de canto, cubo de vista, ícone de eixo, ícone do SCU, cursor, mira, caixa de seleção, ponto de colagem, ponto base, clique em objetos, seleção, pickadd, shift, redefinir
from: ae1a81db
---

Abra {{ui:Settings}} com a engrenagem na barra de aplicativos ou com {{key:Mod+,}}. A primeira aba, {{ui:CadCraft}}, reúne as configurações deste aplicativo; {{ui:General}} reúne as que todos os aplicativos da família compartilham (tema, tamanho do texto e largura dos painéis, aparência e ordem da barra de ferramentas). As configurações do CadCraft existem só no aplicativo: você as altera aqui, e este navegador as lembra. {{ui:Reset CadCraft settings}} (Redefinir configurações do CadCraft) devolve cada uma delas ao início.

## Cursor

**Pequeno**, **Médio** (o inicial), **Grande** ou **Tela cheia**: o tamanho da mira e da caixa de seleção no desenho. Uma caixa de seleção maior também pega objetos um pouco mais longe, o que ajuda em telas de toque ou em um desenho muito fino.

**Tela cheia** traça as duas linhas da mira de borda a borda do desenho, também quando nenhum comando está em execução, para que você possa conferir a olho que duas coisas se alinham em toda a vista. Com a vista dividida, as linhas permanecem no painel em que você trabalha. É o mesmo que o {{cmd:CURSORSIZE}} 100 do AutoCAD: digite {{cmd:CURSORSIZE}} e 100 para tela cheia; um número menor escolhe o tamanho mais próximo (abaixo de 5 Pequeno, de 5 a 9 Médio, de 10 a 99 Grande).

## Ponto de colagem

Onde uma cópia colada pende do cursor depois de {{key:Mod+V}} ({{cmd:PASTECLIP}}), até você clicar:

- **Canto inferior esquerdo** (o inicial): o canto inferior esquerdo da extensão dos objetos copiados, como no AutoCAD.
- **Centro**: o meio da extensão deles. Útil para colocar um símbolo a olho.

Uma cópia feita com `COPYBASE` pende sempre do ponto base que você escolheu. {{ui:Paste in place}} ({{key:Mod+Shift+V}}) ignora esta configuração: mantém as coordenadas originais. Veja [Copiar, colar e duplicar](topic:copy-paste).

## Clicar em objetos

O que um clique no desenho faz à seleção quando nenhum comando está em execução:

- **Adiciona à seleção** (o inicial): cada clique ou janela adiciona objetos; {{key:Shift}}+clique, ou uma janela com {{key:Shift}}, os tira.
- **Substitui a seleção**: um clique ou uma janela seleciona só o que escolhe. {{key:Shift}}+clique adiciona um objeto, ou tira um que já está selecionado; uma janela com {{key:Shift}} adiciona.

Em um prompt `Selecione objetos:` dentro de um comando, os cliques sempre adicionam ({{key:Shift}} remove), qualquer que seja esta configuração. Veja [Selecionar objetos](topic:select-objects).

## Clicar em um espaço vazio

O que um clique onde não há objeto faz quando nenhum comando está em execução. De qualquer forma, ele inicia uma janela de seleção (um segundo clique a termina).

- **Limpa a seleção** (o inicial): o que estava selecionado é liberado. Mantenha {{key:Shift}} pressionado ao clicar para mantê-lo.
- **Mantém a seleção**: a seleção permanece, como em outros programas de desenho; a janela acrescenta a ela. Pressione {{key:Esc}} para limpar a seleção.

## Arrastar para selecionar

O que pressionar e arrastar em um espaço vazio desenha:

- **Laço** (o inicial): um contorno à mão livre. Movendo-se primeiro para a direita, seleciona o que fica totalmente dentro dele; primeiro para a esquerda, o que ele toca. {{key:Space}} enquanto arrasta alterna entre janela, cruzamento e cerca.
- **Retângulo**: a caixa, como um clique e um segundo clique a desenham.

{{cmd:LASSOMODE}} `1` ou `0` define o mesmo. Veja [Seleção por laço](topic:lasso-selection).

## Arrastar para aparar e estender

O que pressionar em um espaço vazio e arrastar faz em {{cmd:TRIM}} e {{cmd:EXTEND}}:

- **Um caminho** (o inicial): um caminho à mão livre; cada pedaço que ele cruza é aparado (ou estendido).
- **Uma janela**: uma caixa; cada pedaço que ela toca é aparado, como faz a opção `C`.

Veja [Aparar e estender](topic:trim-and-extend).

## Posição da barra de ferramentas

{{ui:CadCraft}} › {{ui:Toolbar position}}: **Topo** (o inicial, como sempre foi), **Embaixo**, **Esquerda** ou **Direita**. Na esquerda ou na direita, os grupos de ferramentas empilham-se em uma coluna que rola quando é mais alta que a janela, e os botões quebram em duas ou três por linha. A escolha é salva com suas configurações, e {{cmd:TOOLBARDOCK}} (`TBDOCK`) a define pela linha de comando. {{ui:General}} › {{ui:Reset the layout}} devolve a barra ao topo.

As barras dos estilos de menu ficam dentro da barra de ferramentas e se movem com ela, mas o estilo {{ui:Ribbon}} (Faixa de opções) é feito para ficar no topo ou embaixo: em um lado recebe uma coluna estreita que rola. Em um celular, a barra de ferramentas fica onde o layout do celular a coloca.

## Linhas da barra de ferramentas

Quantas linhas as ferramentas usam acima do desenho, na barra do CadCraft e nos estilos {{ui:Drafting classic}} (Desenho clássico) e {{ui:Ribbon}} (Faixa de opções):

- **Quebrar para caber** (o inicial): as ferramentas quebram conforme a largura da janela.
- **2 linhas**: no máximo duas linhas. Quando as ferramentas quebram em duas linhas ou menos nesta largura, apenas quebram; caso contrário, ficam em duas linhas que rolam para o lado.
- **1 linha**: uma linha que rola para o lado, o que deixa o desenho com mais espaço.

{{key:Shift+Ctrl+F1}} percorre as três, e {{cmd:TOOLBARROWS}} define uma. O que os botões mostram (ícones e texto, só ícones, ou só texto) é uma configuração de {{ui:General}} › {{ui:Toolbar}}; {{key:Ctrl+F1}} percorre essa opção e {{cmd:TOOLBAR}} a define.

## Linha de comando

A linha de comando pode ficar acoplada sob o desenho, como sempre foi, ou flutuar sobre ele, e pode ser tão fina quanto uma única linha.

- **Faça-a flutuar.** Arraste a alça na sua extremidade esquerda para dentro do desenho, ou escolha {{ui:Float over the drawing}} no menu {{ui:Command line options}} (os três pontos na extremidade direita). Arraste a alça de novo para movê-la; seu lugar é mantido quando a janela muda de tamanho. Arraste sua borda direita para alargá-la ou estreitá-la. Solte-a na barra de status, ou escolha {{ui:Dock at the bottom}}, para acoplá-la de novo.
- **Deixe-a mais fina ou mais alta.** Arraste sua borda superior: cada passo é uma linha de histórico. Até zero linhas, ela é uma **linha de comando de uma linha**: só o prompt e o que você digita, e uma nova mensagem aparece acima dela por um momento. Um clique duplo na borda superior alterna entre uma linha e a altura que você tinha.
- **O histórico.** {{key:F2}}, ou o botão de relógio na linha de comando ({{ui:Command history (F2)}}), abre o histórico inteiro acima da linha (abaixo, quando ela flutua perto do topo da janela). A digitação continua indo para a linha de comando; {{key:PageUp}} e {{key:PageDown}} rolam o histórico, e {{key:Esc}}, {{key:F2}} ou um clique em outro lugar o fecham. Uma tecla própria em F2 tem prioridade sobre isto.
- **Pelo teclado.** A alça é um botão: com ele em foco, as setas movem uma linha de comando flutuante (com {{key:Shift}}, em passos maiores); {{key:Up}} faz uma acoplada flutuar, e {{key:Down}} na borda inferior a acopla. A borda superior é um separador: {{key:Up}} e {{key:Down}} acrescentam ou tiram uma linha, {{key:Home}} a deixa com uma linha, {{key:End}} a mais alta. Leitores de tela ainda leem cada mensagem, também na linha de comando de uma linha.

{{ui:CadCraft}} › {{ui:Command line}} tem as mesmas escolhas: {{ui:Docked at the bottom}} ou {{ui:Floating}}, {{ui:History lines shown}} (0 a 12) e {{ui:Standard height}}. {{cmd:COMMANDLINE}} (`CMDLINE`) as define pela linha de comando. O lugar e a altura são mantidos para o CadCraft neste navegador junto com o restante do layout, então um ambiente de trabalho salvo os carrega; {{ui:General}} › {{ui:Reset the layout}} acopla a linha de comando de novo na altura padrão. Em um celular, a linha de comando fica acoplada com uma linha de histórico; o botão do histórico também funciona ali.

{{ui:CadCraft}} › {{ui:Option letters}} mantém as letras que você escolheu para as opções de comando: {{ui:Edit…}} abre o arquivo, {{ui:Import…}} o substitui por um arquivo que você escolher, e {{ui:Export}} o salva. Veja [Dê às opções de comando suas próprias letras](topic:option-letters).

Quando a janela está baixa e a verificação de layout oferece um layout mais compacto, o seu {{ui:Yes}} (Sim) também deixa a linha de comando em uma linha, se o desenho ainda ficar curto depois das barras de ferramentas.

## Área superior

{{ui:CadCraft}} › {{ui:Top area}}: **Padrão** (o inicial) ou **Compacta**. Compacta deixa as barras acima do desenho pequenas em todos os estilos de menu: os nomes dos grupos e as palavras sob os ícones somem (as dicas e os leitores de tela continuam tendo-os), e os botões ficam mais justos. Funciona com [Linhas da barra de ferramentas](topic:settings#toolbar-rows): Compacta e **1 linha** deixam mais espaço para o desenho. {{cmd:TOPAREA}} a define.

## Indicador de canto

O que fica no canto do desenho:

- **Automático** (o inicial): o ícone de eixo na aba {{ui:Model}} e o cubo de vista na aba {{ui:3D}}.
- **Ícone de eixo**: a marca X e Y no canto inferior esquerdo da aba {{ui:Model}}, e uma pequena marca X, Y e Z na aba {{ui:3D}}.
- **Cubo de vista**: um cubo no canto superior direito das duas abas. Na aba {{ui:Model}} mostra o desenho de cima, e clicar em outra face, aresta ou canto abre a aba {{ui:3D}} olhando dali. Na aba 3D ele gira com a vista: clique para olhar de um lado, arraste para orbitar, e a casinha volta à vista isométrica. Veja [Modelo em 3D](topic:3d-solids).
- **Nenhum**: nada no canto.

Folhas não mostram nenhum dos dois.

## Comprimento e área da seleção

- **Na barra de status** (o inicial): com objetos selecionados, a barra de status mostra o comprimento total deles e a área total dos fechados. Veja [Totais de uma seleção](topic:properties-panel#totals-of-a-selection).
- **Oculto**: a barra de status os deixa de fora. Propriedades ainda os mostra para vários objetos.

## Grade, Orto e snaps

Estes não estão na caixa de diálogo: os botões {{ui:Grid}}, {{ui:Ortho}} e {{ui:Snap}} na barra de status (ou {{key:F7}}, {{key:F8}}, {{key:F3}}) e a lista de snaps de objeto ao lado deles são lembrados conforme você os deixa. Veja [Encaixar em pontos de objetos](topic:object-snaps).
