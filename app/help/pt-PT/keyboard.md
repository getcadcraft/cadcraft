---
title: Teclado e rato
summary: Cada tecla, ação do rato e tecla da linha de comandos na aplicação de desenho CadCraft, tal como o código as trata.
keywords: teclado, atalhos, teclas, rato, roda, deslocar, zoom, clique com o botão direito, botão do meio, f3, f7, f8, ctrl, tecla de comando, teclas de atalho, copiar, cortar, colar, duplicar, área de transferência, selecionar tudo
from: a2608a29
---

Os atalhos são mostrados para o seu computador. Num Mac, todos os atalhos {{key:Mod}} abaixo usam a tecla Command, e a tecla Control também funciona. A forma como as teclas são escritas, e como usar as teclas F num Mac, está em [Teclas, ratos e trackpads](common:keys).

## Escrever comandos

| Tecla | O que faz |
|---|---|
| Qualquer letra, algarismo ou símbolo | Ir para a linha de comandos, onde quer que esteja o ponteiro, a menos que uma caixa num painel tenha o cursor |
| {{key:Enter}} | Enviar o que escreveu. Numa linha de comandos vazia: repetir o último comando, terminar um comando, concluir uma seleção ou aceitar o valor predefinido em `<…>` |
| {{key:Space}} | Igual a {{key:Enter}}, exceto quando o CadCraft pede texto (texto, nomes de blocos, texto de cota), onde escreve um espaço |
| {{key:Esc}} | Cancelar o comando. Sem comando em curso: cancelar um movimento de grip ou uma caixa de seleção, e depois limpar a seleção |
| {{key:Tab}} | Aceitar o comando sugerido mostrado à direita da linha de comandos. Sem nada escrito e com o ponteiro sobre objetos sobrepostos: realçar o seguinte aí (clicar para o escolher) |
| {{key:Up}} {{key:Down}} | Percorrer as linhas que escreveu antes (as últimas 100) |

## Desenhar e editar

| Tecla | O que faz |
|---|---|
| {{key:Mod+Z}} | Anular o último comando |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refazer |
| {{key:Mod+A}} | Selecionar todos os objetos que pode editar no separador aberto ({{cmd:SELECTALL}}). Se tiver escrito algo na linha de comandos, seleciona esse texto |
| {{key:Delete}} | Apagar os objetos selecionados ({{cmd:ERASE}}), a menos que tenha escrito algo na linha de comandos |
| {{key:Backspace}} | Apagar os objetos selecionados quando a linha de comandos não tem o cursor; na linha de comandos, apaga o que escreveu |
| {{key:Esc}} | Sem comando em curso: limpar a seleção ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Guardar uma cópia no formato do desenho (DWG ou DXF) |
| {{key:Mod+Shift+S}} | Guardar como: escolher DWG ou DXF, e depois guardar uma cópia |
| {{key:Mod+O}} | Abrir um DWG ou DXF |
| {{key:Mod+P}} | Imprimir para PDF |

Anular, refazer, selecionar tudo e imprimir não fazem nada enquanto um comando estiver em curso: prima {{key:Esc}} primeiro.

## Copiar, cortar e colar

| Tecla | O que faz |
|---|---|
| {{key:Mod+C}} | Copiar a seleção para a área de transferência ({{cmd:COPYCLIP}}). Nada selecionado: o CadCraft pede objetos |
| {{key:Mod+X}} | Cortar: copiar a seleção e depois apagá-la ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Colar: a cópia segue o cursor; clique, ou escreva um ponto, para a colocar ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Colar no mesmo sítio: nas coordenadas de onde foi copiada ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplicar: uma cópia da seleção move-se com o ponteiro; clique para a colocar. {{key:Esc}} não deixa nada ({{cmd:DUPLICATE}}) |

As mesmas ações estão no grupo {{ui:Editar}} da barra de ferramentas ({{ui:Copiar}}, {{ui:Colar}}) e no seu menu {{ui:Mais}}. Enquanto outro comando estiver em curso, termine-o ou prima {{key:Esc}} primeiro; premir {{key:Mod+V}} ou {{key:Mod+D}} de novo enquanto uma cópia segue o cursor recomeça. Quando tiver escrito algo na linha de comandos, ou um comando pedir texto, estas teclas copiam, cortam e colam esse texto. Veja [Copiar, colar e duplicar](topic:copy-paste).

## Alternâncias

| Tecla | Alternância | Botão da barra de estado |
|---|---|---|
| {{key:F3}} | Snaps a objetos ligados ou desligados | {{ui:Snap}} |
| {{key:F7}} | Grelha ligada ou desligada | {{ui:Grelha}} |
| {{key:F8}} | Orto ligado ou desligado | {{ui:Orto}} |
| {{key:F10}} | Rastreio polar ligado ou desligado | {{ui:Polar}} |
| {{key:F11}} | Rastreio de snap a objetos ligado ou desligado | {{ui:Rastreio}} |
| {{key:F12}} | Entrada dinâmica ligada ou desligada | {{ui:Din}} |

:::mac
Num Mac, F3, F7 e F8 são normalmente as teclas de Mission Control e de multimédia. Mantenha **fn** premida com elas, ou ative as teclas de função normais nas Definições do Sistema, como descrito em [Teclas, ratos e trackpads](common:keys). Os botões da barra de estado funcionam sempre.
:::

:::firefox
No Firefox, a tecla F7 também pode pedir para ativar a navegação com cursor. Escolha **Não**, e use o botão {{ui:Grelha}} se continuar a perguntar.
:::

## Ajuda

| Tecla | O que faz |
|---|---|
| {{key:F1}} | Abre ou fecha esta ajuda, ao lado do desenho. Funciona mesmo com um comando em curso, e nunca chega à linha de comandos. |
| {{key:Esc}} | Com o cursor no painel de ajuda: limpa a pesquisa, ou fecha o painel |

O botão {{ui:Ajuda}} na barra do topo faz o mesmo que {{key:F1}}. Enquanto escreve na caixa de pesquisa da ajuda, nada chega à linha de comandos. Clique no desenho para devolver as teclas ao CadCraft; o painel continua aberto ao lado dele.

:::mac
Num teclado de Mac, mantenha **fn** premida e prima F1, ou clique em {{ui:Ajuda}}.
:::

## Ecrã

| Tecla | O que faz |
|---|---|
| {{key:Ctrl+Shift+F}} | Alterna entre normal, ecrã inteiro e ecrã inteiro com as barras escondidas. Usa a tecla Control em todos os computadores, incluindo Mac. |
| {{key:Left}} {{key:Right}} | Com um separador sob o desenho em foco: o separador anterior ou seguinte |

Em ecrã inteiro, o navegador pode usar o primeiro {{key:Esc}} para sair do ecrã inteiro. Prima {{key:Esc}} de novo para cancelar um comando.

## Caixas de diálogo

| Tecla | O que faz |
|---|---|
| {{key:Esc}} | Fecha a caixa de diálogo ({{ui:Imprimir para PDF}}, ou uma pergunta como "Alterações não guardadas", onde significa {{ui:Cancelar}}) |
| {{key:Tab}} | Move-se entre as definições e os botões da caixa de diálogo |

Enquanto uma caixa de diálogo estiver aberta, as teclas do desenho ficam desativadas.

## Campos do painel

Numa caixa do painel direito ou esquerdo:

| Tecla | O que faz |
|---|---|
| {{key:Enter}} | Aplica o valor e sai da caixa |
| {{key:Esc}} | Repõe o valor anterior e sai da caixa |
| {{key:Tab}} | Aplica e passa para a caixa seguinte |

Enquanto uma caixa tem o cursor, as letras escrevem-se nela, e não na linha de comandos.

## Rato

| Ação | O que faz |
|---|---|
| Clique | Escolhe um ponto quando um comando o pede; escolhe um objeto quando pede objetos; caso contrário, seleciona um objeto ou um grip |
| Shift+clique | Remove um objeto selecionado da seleção (com {{ui:Clicar em objetos}} definido como {{ui:Substitui a seleção}} nas [Definições](topic:settings): acrescenta-o). Ao escolher um ponto: ignora os snaps a objetos nesse clique |
| Clicar em espaço vazio e voltar a clicar | Uma caixa de seleção: da esquerda para a direita é uma janela, da direita para a esquerda é um cruzamento |
| Arrastar em espaço vazio | Um laço: se mover primeiro para a direita é uma janela, e primeiro para a esquerda um cruzamento; {{key:Space}} enquanto arrasta alterna entre janela, cruzamento e vedação; {{key:Esc}} larga-o (LASSOMODE 0, ou as Definições, volta a torná-lo retângulo) |
| Arrastar através de peças em TRIM ou EXTEND | Apara (ou prolonga) cada peça que o percurso atravessa; mantenha {{key:Shift}} para o outro modo |
| Arrastar um grip | Move o grip (ou clique no grip, e depois onde deve ficar) |
| Duplo clique num texto | Seleciona-o e põe o cursor na sua caixa {{ui:Texto}} no painel direito |
| Clique com o botão direito | {{key:Enter}}. Durante um movimento de grip ou uma caixa de seleção: cancela-o |
| Arrastar com o botão direito | Desloca a vista |
| Roda | Aplica zoom para dentro e para fora em torno da cruz |
| Arrastar com a roda (botão do meio) | Desloca a vista |
| Duplo clique na roda | Aplica zoom a todo o desenho (extensão) |
| Largar um DWG ou DXF no desenho | Abre-o |

Num trackpad ou ecrã tátil, veja [Rato, trackpad e toque](topic:mouse-trackpad-touch).

## Teclas que o navegador mantém

{{key:Mod+N}}, {{key:Mod+W}} e {{key:Mod+T}} pertencem sempre ao navegador. O CadCraft não as usa: use {{ui:Nova}} ou escreva `NEW` para um novo desenho. A área de transferência do CadCraft é própria: {{key:Mod+C}} e {{key:Mod+V}} copiam objetos entre desenhos e separadores do CadCraft, não para ou a partir de outros programas.

Num Mac, se {{key:Mod+Y}} abrir o histórico do navegador em vez de refazer, use {{key:Mod+Shift+Z}} ou o botão {{ui:Refazer}}.

## Onde está o Mover

O Mover é o comando `MOVE` (tecla {{key:M}}): escolha os objetos, depois um ponto base e um segundo ponto ou uma distância escrita. `ALIGN` e `DISTRIBUTE` também existem. O BimCraft usa os mesmos nomes para as mesmas tarefas em elementos de construção, mas o seu {{key:M}} é Medir: o seu Mover é {{key:Shift+M}}.
