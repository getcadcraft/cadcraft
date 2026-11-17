---
title: Teclado e mouse
summary: Cada tecla, ação do mouse e tecla da linha de comando no aplicativo de desenho do CadCraft, como o código as trata.
keywords: teclado, mouse, atalhos, teclas, roda, pan, zoom, clique com o botão direito, botão do meio, f3, f7, f8, ctrl, tecla de comando, teclas de atalho, copiar, recortar, colar, duplicar, área de transferência, selecionar tudo
from: a2608a29
---

Os atalhos são mostrados para o seu computador. No Mac, todo atalho {{key:Mod}} abaixo usa a tecla Command, e a tecla Control também funciona. Como as teclas são escritas, e como usar as teclas F em um Mac, está em [Teclas, mouses e trackpads](common:keys).

## Digitando comandos

| Tecla | O que faz |
|---|---|
| Qualquer letra, dígito ou símbolo | Vai para a linha de comando, onde quer que o ponteiro esteja, a menos que uma caixa em um painel tenha o cursor |
| {{key:Enter}} | Envia o que você digitou. Em um prompt vazio: repete o último comando, encerra um comando, finaliza uma seleção ou aceita o padrão em `<…>` |
| {{key:Space}} | Igual a {{key:Enter}}, exceto quando o CadCraft pede texto (texto, nomes de bloco, texto de cota), onde digita um espaço |
| {{key:Esc}} | Cancela o comando. Sem comando em execução: cancela um movimento de grip ou uma caixa de seleção, depois limpa a seleção |
| {{key:Tab}} | Aceita o comando sugerido mostrado à direita da linha de comando. Sem nada digitado e com o ponteiro sobre objetos sobrepostos: destaca o próximo deles (clique para escolhê-lo) |
| {{key:Up}} {{key:Down}} | Percorre as linhas que você digitou antes (as últimas 100) |

## Desenho e edição

| Tecla | O que faz |
|---|---|
| {{key:Mod+Z}} | Desfaz o último comando |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refaz |
| {{key:Mod+A}} | Seleciona todos os objetos que você pode editar na aba aberta ({{cmd:SELECTALL}}). Se você tiver digitado algo na linha de comando, seleciona esse texto |
| {{key:Delete}} | Apaga os objetos selecionados ({{cmd:ERASE}}), a menos que você tenha digitado algo na linha de comando |
| {{key:Backspace}} | Apaga os objetos selecionados quando a linha de comando não tem o cursor; na linha de comando, apaga o que você digitou |
| {{key:Esc}} | Sem comando em execução: limpa a seleção ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Salva uma cópia no formato do desenho (DWG ou DXF) |
| {{key:Mod+Shift+S}} | Salvar como: escolha DWG ou DXF, depois salve uma cópia |
| {{key:Mod+O}} | Abre um DWG ou DXF |
| {{key:Mod+P}} | Plotar em PDF |

Desfazer, refazer, selecionar tudo e plotar não fazem nada enquanto um comando está em execução: pressione {{key:Esc}} antes.

## Copiar, recortar e colar

| Tecla | O que faz |
|---|---|
| {{key:Mod+C}} | Copia a seleção para a área de transferência ({{cmd:COPYCLIP}}). Nada selecionado: o CadCraft pede objetos |
| {{key:Mod+X}} | Recortar: copia a seleção e depois a apaga ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Colar: a cópia segue o cursor; clique, ou digite um ponto, para colocá-la ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Colar no mesmo local: nas coordenadas de onde foi copiada ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplicar: uma cópia da seleção se move com o ponteiro; clique para colocá-la, {{key:Esc}} não deixa nada ({{cmd:DUPLICATE}}) |

As mesmas ações estão no grupo {{ui:Editar}} da barra de ferramentas ({{ui:Copiar}}, {{ui:Colar}}) e no menu {{ui:Mais}}. Enquanto outro comando está em execução, conclua-o ou pressione {{key:Esc}} antes; pressionar {{key:Mod+V}} ou {{key:Mod+D}} de novo enquanto uma cópia segue o cursor recomeça. Quando você tiver digitado algo na linha de comando, ou um comando estiver pedindo texto, essas teclas copiam, recortam e colam esse texto. Veja [Copiar, colar e duplicar](topic:copy-paste).

## Alternâncias

| Tecla | Alternância | Botão da barra de status |
|---|---|---|
| {{key:F3}} | Snap de objeto ligado ou desligado | {{ui:Snap}} |
| {{key:F7}} | Grade ligada ou desligada | {{ui:Grade}} |
| {{key:F8}} | Orto ligado ou desligado | {{ui:Orto}} |
| {{key:F10}} | Rastreamento polar ligado ou desligado | {{ui:Polar}} |
| {{key:F11}} | Rastreamento de snap de objeto ligado ou desligado | {{ui:Rastr.}} |
| {{key:F12}} | Entrada dinâmica ligada ou desligada | {{ui:Din}} |

:::mac
No Mac, F3, F7 e F8 geralmente são as teclas do Mission Control e de mídia. Segure **fn** junto com elas, ou ative as teclas de função padrão em Configurações do Sistema, como descrito em [Teclas, mouses e trackpads](common:keys). Os botões da barra de status sempre funcionam.
:::

:::firefox
F7 no Firefox também pode pedir para ativar a navegação com cursor de texto. Escolha **Não**, e use o botão {{ui:Grade}} se ele continuar perguntando.
:::

## Ajuda

| Tecla | O que faz |
|---|---|
| {{key:F1}} | Abre ou fecha esta ajuda, ao lado do desenho. Funciona mesmo com um comando em execução, e nunca chega à linha de comando. |
| {{key:Esc}} | Com o cursor no painel de ajuda: limpa a pesquisa, ou fecha o painel |

O botão {{ui:Ajuda}} na barra do topo faz o mesmo que {{key:F1}}. Enquanto você digita na caixa de pesquisa da ajuda, nada chega à linha de comando. Clique no desenho para devolver as teclas ao CadCraft; o painel continua aberto ao lado dele.

:::mac
Em um teclado de Mac, segure **fn** e pressione F1, ou clique em {{ui:Ajuda}}.
:::

## Tela

| Tecla | O que faz |
|---|---|
| {{key:Ctrl+Shift+F}} | Alterna entre normal, tela cheia e tela cheia com as barras ocultas. Usa a tecla Control em todos os computadores, inclusive no Mac. |
| {{key:Left}} {{key:Right}} | Com uma aba sob o desenho em foco: a aba anterior ou a próxima |

Em tela cheia, o navegador pode usar o primeiro {{key:Esc}} para sair da tela cheia. Pressione {{key:Esc}} de novo para cancelar um comando.

## Caixas de diálogo

| Tecla | O que faz |
|---|---|
| {{key:Esc}} | Fecha a caixa de diálogo ({{ui:Plotar em PDF}}, ou uma pergunta como "Alterações não salvas", onde significa {{ui:Cancelar}}) |
| {{key:Tab}} | Move-se entre as configurações e os botões da caixa de diálogo |

Enquanto uma caixa de diálogo está aberta, as teclas do desenho ficam desligadas.

## Campos do painel

Em uma caixa no painel da direita ou da esquerda:

| Tecla | O que faz |
|---|---|
| {{key:Enter}} | Aplica o valor e sai da caixa |
| {{key:Esc}} | Devolve o valor antigo e sai da caixa |
| {{key:Tab}} | Aplica e vai para a próxima caixa |

Enquanto uma caixa tem o cursor, as letras são digitadas nela, não na linha de comando.

## Mouse

| Ação | O que faz |
|---|---|
| Clique | Escolhe um ponto quando um comando pede um; escolhe um objeto quando pede objetos; caso contrário, seleciona um objeto ou um grip |
| Shift+clique | Remove um objeto selecionado da seleção (com {{ui:Clicar em objetos}} definido como {{ui:Substitui a seleção}} em [Configurações](topic:settings): adiciona-o). Ao escolher um ponto: ignora os snaps de objeto nesse clique |
| Clique em espaço vazio, depois clique de novo | Uma caixa de seleção: da esquerda para a direita é uma janela, da direita para a esquerda um cruzamento |
| Arraste em espaço vazio | Um laço: mover para a direita primeiro é uma janela, para a esquerda primeiro um cruzamento; {{key:Space}} enquanto arrasta alterna entre janela, cruzamento e cerca; {{key:Esc}} o descarta (LASSOMODE 0, ou Configurações, faz voltar a ser o retângulo) |
| Arraste por peças em TRIM ou EXTEND | Apara (ou estende) cada peça que o caminho cruza; segure {{key:Shift}} para a outra opção |
| Arraste um grip | Move o grip (ou clique no grip e depois onde ele deve ir) |
| Clique duplo em texto | Seleciona-o e coloca o cursor na sua caixa {{ui:Texto}} no painel da direita |
| Clique com o botão direito | {{key:Enter}}. Durante um movimento de grip ou uma caixa de seleção: cancela-o |
| Arraste com o botão direito | Pan |
| Roda | Dá zoom para dentro e para fora em torno do cursor de mira |
| Arraste com a roda (botão do meio) | Pan |
| Clique duplo na roda | Dá zoom no desenho inteiro (extensão) |
| Solte um DWG ou DXF no desenho | Abre-o |

Em trackpad ou tela sensível ao toque, veja [Mouse, trackpad e toque](topic:mouse-trackpad-touch).

## Teclas que o navegador mantém

{{key:Mod+N}}, {{key:Mod+W}} e {{key:Mod+T}} sempre pertencem ao navegador. O CadCraft não as usa: use {{ui:Nova}} ou digite `NEW` para um novo desenho. A área de transferência do CadCraft é própria: {{key:Mod+C}} e {{key:Mod+V}} copiam objetos entre desenhos e abas do CadCraft, não de ou para outros programas.

:::mac
Se {{key:Mod+Y}} abrir o histórico do navegador em vez de refazer, use {{key:Mod+Shift+Z}} ou o botão {{ui:Refazer}}.
:::

## Onde fica o Mover

Mover é o comando `MOVE` (tecla {{key:M}}): escolha os objetos, depois um ponto base e um segundo ponto ou uma distância digitada. `ALIGN` e `DISTRIBUTE` também existem. O BimCraft usa os mesmos nomes para as mesmas tarefas em elementos de construção, mas o {{key:M}} dele é Medir: o Mover dele é {{key:Shift+M}}.
