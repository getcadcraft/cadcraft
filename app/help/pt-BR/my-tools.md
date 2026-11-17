---
title: Botões próprios (Minhas ferramentas)
summary: Adicione botões na barra de ferramentas que executam suas próprias macros, dê a eles teclas de atalho, compartilhe-os como arquivo e traga botões de um arquivo de personalização CUIx.
keywords: minhas ferramentas, botões personalizados, barra de ferramentas, macro, macros, cui, cuix, personalizar, menu, teclas de atalho, atalhos de teclado, diesel, ^c^c, importar botões, exportar botões
from: 36618802
---

## O que você vai aprender

Como colocar botões próprios na barra de ferramentas, cada um executando uma macro escrita do jeito que o AutoCAD as escreve, como dar uma tecla a um botão e como trazer os botões de um arquivo CUIx.

## Adicionar um botão

1. Abra {{ui:Configurações}} ({{key:Mod+,}}) e permaneça na guia {{ui:CadCraft}}. Role até {{ui:Minhas ferramentas}}.
2. Clique em {{ui:Adicionar um botão…}}.
3. Preencha a caixa:
   - {{ui:Grupo}}: o grupo da barra de ferramentas em que ele fica, por exemplo `Minhas ferramentas`. Um nome novo cria um grupo novo.
   - {{ui:Rótulo}}: as palavras no botão.
   - {{ui:Macro}}: o que ele digita, por exemplo `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Tecla de atalho}}: clique na caixa e pressione as teclas, por exemplo {{key:Ctrl+Alt+B}}.
   - {{ui:Ícone}}: uma imagem PNG ou SVG de no máximo 64 KB, ou nenhuma (aparece uma estrela).
4. Clique em {{ui:Salvar}}.

O botão aparece no fim da barra de ferramentas, no seu grupo. Clique nele, ou pressione sua tecla, para executá-lo. {{ui:Editar}} e {{ui:Excluir}} na lista alteram ou removem o botão.

## Escrever uma macro

Uma macro é o que você digitaria na linha de comando, com alguns sinais:

| Sinal | Significa |
|---|---|
| `^C` | Cancela o que estiver em execução (`^C^C` é o início habitual) |
| `;` ou um espaço | {{key:Enter}} |
| `\` | Espera por você: um clique ou uma resposta digitada, depois a macro continua |
| `_` ou `.` antes de um comando | Aceito e ignorado (nomes internacionais e embutidos) |
| `*` no início | Executa de novo cada vez que termina, até você pressionar {{key:Esc}} |
| `^O`, `^G` | Liga ou desliga Orto e a grade |
| `$M=` | O restante é DIESEL. Apenas `$(if,…)`, `$(getvar,…)`, `$(=,…)` e `$(eq,…)` são lidos; um botão que use qualquer outra coisa avisa e não faz nada |

Exemplos:

- `^C^C_line;0,0;@100,0;;` desenha uma linha de 100 a partir da origem.
- `^C^C_circle;\25;` pede o centro e então desenha um círculo de raio 25 ali.
- `^C^C_turnright` gira a vista 90° para a direita.

## Teclas de atalho

Uma tecla precisa de {{key:Mod}} (Ctrl, ou Cmd no Mac) ou {{key:Alt}} com uma letra ou dígito, ou de uma das teclas de função livres {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Letras sozinhas vão para a linha de comando. Teclas que o CadCraft, o aplicativo ou o navegador já usam (como {{key:Ctrl+S}} ou {{key:Ctrl+Z}}) e teclas que outro botão já tem são recusadas, e a caixa diz o motivo.

## Compartilhar seus botões

- {{ui:Exportar…}} salva todos os grupos e botões (com ícones e teclas) como `my-tools.json`.
- {{ui:Importar…}} adiciona os grupos de um arquivo desses depois dos seus. Um nome de grupo que você já usa recebe "(2)"; uma tecla que entraria em conflito é deixada de fora, e o painel informa isso.

## Trazer botões de um arquivo CUIx

1. Clique em {{ui:Importar CUIx…}} e escolha o arquivo `.cuix`.

As barras de ferramentas e os painéis da faixa de opções dele viram grupos, cada botão com sua macro e sua imagem (PNG, ou BMP convertido em PNG). As teclas de atalho dele vêm em um grupo próprio, cada botão com sua tecla; os aliases de comando que ele possa ter vêm em um grupo {{ui:Aliases}}. O painel lista o que foi importado.

:::note
O arquivo é apenas lido. Comandos que o CadCraft não tem são listados pelo nome, sem adivinhação: os botões deles avisam ao serem clicados. DIESEL além das poucas funções acima, menus, botões do mouse e áreas de trabalho não são lidos.
:::

## Bom saber

- Os botões são guardados neste navegador (ou neste aplicativo de desktop), não nos desenhos.
- Um botão roda pela linha de comando, então é desfeito como qualquer coisa que você digita: um {{key:Mod+Z}} por comando que ele executou.
