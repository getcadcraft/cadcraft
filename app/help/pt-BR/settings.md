---
title: Configurações do CadCraft
summary: As configurações da aplicação de desenho: tamanho do cursor, de onde pende uma cópia colada, o que um clique faz à seleção, quantas linhas a barra de ferramentas usa, onde fica a linha de comando e qual é a sua altura, uma área superior compacta e o indicador de canto.
keywords: linha de comando, linha de comando flutuante, flutuar, acoplar, uma linha, f2, histórico de comandos, commandline, cmdline, toparea, área superior, compacta, cursorsize, cruzamento de tela cheia, cursor de tela cheia, borda a borda, linhas da barra de ferramentas, exibição da barra de ferramentas, ctrl f1, configurações, preferências, opções, indicador de canto, cubo de vista, ícone de eixo, ícone ucs, cursor, cruzamento, caixa de seleção, ponto de colagem, ponto base, clicar em objetos, seleção, pickadd, shift, redefinir
from: 0896eb42
---

Abra {{ui:Configurações}} pela engrenagem na barra do aplicativo ou com {{key:Mod+,}}. A primeira guia, {{ui:CadCraft}}, reúne as configurações que pertencem a esta aplicação; {{ui:Geral}} reúne as que todas as aplicações da família compartilham (tema, tamanho e largura do texto dos painéis, aparência e ordem da barra de ferramentas). As configurações do CadCraft existem somente na aplicação: você as altera aqui, e este navegador as guarda. {{ui:Redefinir configurações do CadCraft}} devolve todas ao estado inicial.

## Cursor

**Pequeno**, **Médio** (o padrão), **Grande** ou **Tela cheia**: o tamanho do cruzamento e da caixa de seleção no desenho. Uma caixa de seleção maior também pega objetos a uma distância um pouco maior, o que ajuda em uma tela sensível ao toque ou em um desenho muito fino.

**Tela cheia** faz as duas linhas do cruzamento atravessarem o desenho de borda a borda, também quando nenhum comando está em execução, para que você possa conferir a olho se duas coisas estão alinhadas em toda a vista. Com a vista dividida, as linhas permanecem no painel em que você está trabalhando. Equivale ao {{cmd:CURSORSIZE}} 100 do AutoCAD: digite {{cmd:CURSORSIZE}} e 100 para tela cheia; um número menor escolhe o tamanho mais próximo (abaixo de 5 Pequeno, de 5 a 9 Médio, de 10 a 99 Grande).

## Ponto de colagem

Onde uma cópia colada pende do cursor após {{key:Mod+V}} ({{cmd:PASTECLIP}}), até você clicar:

- **Canto inferior esquerdo** (o padrão): o canto inferior esquerdo da extensão dos objetos copiados, como no AutoCAD.
- **Centro**: o meio da extensão deles. Útil para posicionar um símbolo a olho.

Uma cópia feita com `COPYBASE` sempre pende do ponto base que você escolheu. {{ui:Colar no mesmo local}} ({{key:Mod+Shift+V}}) ignora esta configuração: mantém as coordenadas originais. Veja [Copiar, colar e duplicar](topic:copy-paste).

## Clicar em objetos

O que um clique no desenho faz à seleção quando nenhum comando está em execução:

- **Acrescenta à seleção** (o padrão): cada clique ou janela acrescenta objetos; {{key:Shift}}+clique, ou uma janela com {{key:Shift}}, os tira da seleção.
- **Substitui a seleção**: um clique ou janela seleciona somente o que ele pega. {{key:Shift}}+clique acrescenta um objeto, ou tira um que já esteja selecionado; uma janela com {{key:Shift}} acrescenta.

No prompt `Selecione objetos:` dentro de um comando, os cliques sempre acrescentam (e {{key:Shift}} remove), independentemente desta configuração. Veja [Selecionar objetos](topic:select-objects).

## Clicar em um ponto vazio

O que um clique onde não há objeto faz quando nenhum comando está em execução. Em qualquer dos casos, ele inicia uma janela de seleção (um segundo clique a conclui).

- **Limpa a seleção** (o padrão): o que estava selecionado é liberado. Mantenha {{key:Shift}} pressionado ao clicar para mantê-lo.
- **Mantém a seleção**: a seleção permanece, como em outros programas de desenho; a janela acrescenta a ela. Pressione {{key:Esc}} para limpar a seleção.

## Arrastar para selecionar

O que pressionar e arrastar sobre um ponto vazio desenha:

- **Laço** (o padrão): um contorno à mão livre. Arrastando primeiro para a direita, seleciona o que fica totalmente dentro; primeiro para a esquerda, seleciona o que ele toca. {{key:Space}} enquanto arrasta alterna entre janela, cruzamento e cerca.
- **Retângulo**: a caixa, como um clique e um segundo clique a desenham.

{{cmd:LASSOMODE}} `1` ou `0` define o mesmo. Veja [Seleção por laço](topic:lasso-selection).

## Arrastar para aparar e estender

O que pressionar sobre um ponto vazio e arrastar faz em {{cmd:TRIM}} e {{cmd:EXTEND}}:

- **Um caminho** (o padrão): um caminho à mão livre; cada trecho que ele cruza é aparado (ou estendido).
- **Uma janela**: uma caixa; cada trecho que ela toca é aparado, como faz a opção `C`.

Veja [Aparar e estender](topic:trim-and-extend).

## Posição da barra de ferramentas

{{ui:CadCraft}} › {{ui:Posição da barra de ferramentas}}: **Topo** (o padrão, como sempre foi), **Embaixo**, **Esquerda** ou **Direita**. Nas laterais, os grupos de ferramentas se empilham em uma coluna que rola quando é mais alta que a janela, e os botões se dispõem em duas ou três linhas. A escolha é salva com as suas configurações, e {{cmd:TOOLBARDOCK}} (`TBDOCK`) a define pela linha de comando. {{ui:Geral}} › {{ui:Redefinir o layout}} devolve a barra de ferramentas ao topo.

As barras dos estilos de menu ficam dentro da barra de ferramentas e se movem com ela, mas o estilo {{ui:Faixa de opções}} foi feito para correr pelo topo ou pela parte inferior: nas laterais, recebe uma coluna estreita que rola. Em um celular, a barra de ferramentas permanece onde o layout do celular a colocar.

## Linhas da barra de ferramentas

Quantas linhas as ferramentas usam acima do desenho, na barra de ferramentas do CadCraft e nos estilos {{ui:Desenho clássico}} e {{ui:Faixa de opções}}:

- **Quebrar para caber** (o padrão): as ferramentas se quebram conforme a largura da janela.
- **2 linhas**: no máximo duas linhas. Quando as ferramentas se quebram em duas linhas ou menos nesta largura, apenas se quebram; caso contrário, ficam em duas fileiras que rolam lateralmente.
- **1 linha**: uma linha que rola lateralmente, o que deixa mais espaço para o desenho.

{{key:Shift+Ctrl+F1}} percorre as três, e {{cmd:TOOLBARROWS}} define uma delas. O que os botões mostram (ícones e texto, só ícones ou só texto) é uma configuração de {{ui:Geral}} › {{ui:Barra de ferramentas}}; {{key:Ctrl+F1}} percorre essas opções, e {{cmd:TOOLBAR}} as define.

## Linha de comando

A linha de comando pode permanecer acoplada abaixo do desenho, como sempre foi, ou flutuar sobre ele, e pode ser tão fina quanto uma única linha.

- **Fazê-la flutuar.** Arraste a alça na sua extremidade esquerda para dentro do desenho, ou escolha {{ui:Flutuar sobre o desenho}} no seu menu {{ui:Opções da linha de comando}} (os três pontos na extremidade direita). Arraste a alça de novo para movê-la; sua posição é mantida quando a janela muda de tamanho. Arraste a borda direita para torná-la mais larga ou mais estreita. Solte-a na barra de status, ou escolha {{ui:Acoplar embaixo}}, para acoplá-la de novo.
- **Torná-la mais fina ou mais alta.** Arraste a borda superior: cada passo é uma linha do histórico. Chegando a zero linhas, ela vira uma **linha de comando de uma linha**: apenas o prompt e o que você digita, e uma nova mensagem aparece acima dela por um momento. Um duplo clique na borda superior alterna entre uma linha e a altura que você tinha.
- **O histórico.** {{key:F2}}, ou o botão de relógio na linha de comando ({{ui:Histórico de comandos (F2)}}), abre o histórico completo acima da linha (abaixo dela, quando a linha flutuante fica perto do topo da janela). A digitação continua indo para a linha de comando; {{key:PageUp}} e {{key:PageDown}} rolam o histórico, e {{key:Esc}}, {{key:F2}} ou um clique em outro lugar o fecham. Uma tecla sua em F2 tem prioridade sobre isso.
- **Pelo teclado.** A alça é um botão: com ele em foco, as setas movem uma linha de comando flutuante (com {{key:Shift}}, em passos maiores); {{key:Up}} faz flutuar uma linha acoplada, e {{key:Down}} na borda inferior a acopla. A borda superior é um separador: {{key:Up}} e {{key:Down}} acrescentam ou retiram uma linha, {{key:Home}} a deixa com uma linha, e {{key:End}} a deixa com a maior altura. Leitores de tela ainda leem todas as mensagens, também na linha de comando de uma linha.

{{ui:CadCraft}} › {{ui:Linha de comando}} tem as mesmas opções: {{ui:Acoplada na parte inferior}} ou {{ui:Flutuante}}, {{ui:Linhas do histórico exibidas}} (de 0 a 12) e {{ui:Altura padrão}}. {{cmd:COMMANDLINE}} (`CMDLINE`) as define pela linha de comando. A posição e a altura são mantidas para o CadCraft neste navegador, junto com o restante do layout, de modo que um ambiente de trabalho salvo as carrega; {{ui:Geral}} › {{ui:Redefinir o layout}} acopla a linha de comando de novo na altura padrão. Em um celular, a linha de comando permanece acoplada com uma linha de histórico; o botão do histórico também funciona ali.

Quando a janela está baixa e a verificação de layout oferece um layout mais compacto, seu botão {{ui:Sim}} também deixa a linha de comando com uma linha, se o desenho ainda ficar baixo depois das barras de ferramentas.

## Área superior

{{ui:CadCraft}} › {{ui:Área superior}}: **Padrão** (o padrão) ou **Compacta**. A compacta mantém pequenas as barras acima do desenho em todos os estilos de menu: os nomes dos grupos e as palavras sob os ícones desaparecem (as dicas de tela e os leitores de tela ainda os têm), e os botões ficam mais justos. Funciona junto com [Linhas da barra de ferramentas](topic:settings#linhas-da-barra-de-ferramentas): Compacta e **1 linha** deixam mais espaço para o desenho. {{cmd:TOPAREA}} a define.

## Indicador de canto

O que fica no canto do desenho:

- **Automático** (o padrão): o ícone de eixo na guia {{ui:Modelo}} e o cubo de vista na guia {{ui:3D}}.
- **Ícone de eixo**: o marcador X e Y no canto inferior esquerdo da guia {{ui:Modelo}}, e um pequeno marcador X, Y e Z na guia {{ui:3D}}.
- **Cubo de vista**: um cubo no canto superior direito das duas guias. Na guia {{ui:Modelo}}, ele mostra o desenho de cima; clicar em outra face, aresta ou canto abre a guia {{ui:3D}} olhando de lá. Na guia 3D, ele gira com a vista: clique para olhar de um lado, arraste para orbitar, e a casinha volta à vista isométrica. Veja [Modelo em 3D](topic:3d-solids).
- **Nenhum**: nada no canto.

As folhas não mostram nenhum dos dois.

## Comprimento e área da seleção

- **Na barra de status** (o padrão): com objetos selecionados, a barra de status mostra o comprimento total deles e a área total dos fechados. Veja [Totais de uma seleção](topic:properties-panel).
- **Oculto**: a barra de status não os mostra. Propriedades ainda os mostra para vários objetos.

## Grade, Orto e snaps

Estes não estão na caixa de diálogo: os botões {{ui:Grade}}, {{ui:Orto}} e {{ui:Snap}} na barra de status (ou {{key:F7}}, {{key:F8}}, {{key:F3}}) e a lista de snaps de objeto ao lado deles são lembrados ao sair. Veja [Fazer snap em pontos de objetos](topic:object-snaps).
