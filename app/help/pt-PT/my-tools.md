---
title: Botões próprios (As minhas ferramentas)
summary: Adicione botões à barra de ferramentas que executam as suas próprias macros, atribua-lhes teclas de atalho, partilhe-os como ficheiro e traga botões de um ficheiro de personalização CUIx.
keywords: as minhas ferramentas, botões personalizados, barra de ferramentas, macro, macros, cui, cuix, personalizar, personalizar, menu, teclas de atalho, atalhos de teclado, diesel, ^c^c, importar botões, exportar botões
from: 36618802
---

## O que vai aprender

Como colocar botões seus na barra de ferramentas, cada um a executar uma macro escrita como o AutoCAD as escreve, como atribuir uma tecla a um botão e como trazer os botões de um ficheiro CUIx.

## Adicionar um botão

1. Abra {{ui:Definições}} ({{key:Mod+,}}) e fique no separador {{ui:CadCraft}}. Desloque até {{ui:As minhas ferramentas}}.
2. Clique em {{ui:Adicionar um botão…}}.
3. Preencha a caixa:
   - {{ui:Grupo}}: o grupo da barra de ferramentas onde fica, por exemplo `As minhas ferramentas`. Um nome novo cria um grupo novo.
   - {{ui:Rótulo}}: as palavras no botão.
   - {{ui:Macro}}: o que escreve, por exemplo `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Tecla de atalho}}: clique na caixa e prima as teclas, por exemplo {{key:Ctrl+Alt+B}}.
   - {{ui:Ícone}}: uma imagem PNG ou SVG com no máximo 64 KB, ou nenhuma (aparece uma estrela).
4. Clique em {{ui:Guardar}}.

O botão aparece no fim da barra de ferramentas, no seu grupo. Clique nele, ou prima a sua tecla, para o executar. {{ui:Editar}} e {{ui:Eliminar}} na lista alteram-no ou removem-no.

## Escrever uma macro

Uma macro é o que escreveria na linha de comandos, com alguns sinais:

| Sinal | Significa |
|---|---|
| `^C` | Cancela o que estiver a correr (`^C^C` é o início habitual) |
| `;` ou um espaço | {{key:Enter}} |
| `\` | Espera por si: um clique ou uma resposta escrita, depois a macro continua |
| `_` ou `.` antes de um comando | Aceite e ignorado (nomes internacionais e integrados) |
| `*` no próprio início | Volta a executar-se sempre que termina, até premir {{key:Esc}} |
| `^O`, `^G` | Ativa ou desativa o Orto e a grelha |
| `$M=` | O resto é DIESEL. Só são lidos `$(if,…)`, `$(getvar,…)`, `$(=,…)` e `$(eq,…)`; um botão que use outra coisa indica-o e não faz nada |

Exemplos:

- `^C^C_line;0,0;@100,0;;` desenha uma linha de 100 a partir da origem.
- `^C^C_circle;\25;` pede-lhe o centro e depois desenha lá um círculo de raio 25.
- `^C^C_turnright` roda a vista 90° para a direita.

## Teclas de atalho

Uma tecla precisa de {{key:Mod}} (Ctrl, ou Cmd num Mac) ou de {{key:Alt}} com uma letra ou um algarismo, ou de uma das teclas de função livres {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. As letras sozinhas vão para a linha de comandos. As teclas que o CadCraft, a aplicação ou o navegador já usam (como {{key:Ctrl+S}} ou {{key:Ctrl+Z}}) e as teclas que outro botão já tem são recusadas, e a caixa indica porquê.

## Partilhar os seus botões

- {{ui:Exportar…}} guarda todos os grupos e botões (com ícones e teclas) como `my-tools.json`.
- {{ui:Importar…}} acrescenta os grupos de um ficheiro desses depois dos seus. Um nome de grupo que já usa recebe "(2)"; uma tecla que entraria em conflito fica de fora, e o painel indica-o.

## Trazer botões de um ficheiro CUIx

1. Clique em {{ui:Importar CUIx…}} e escolha o ficheiro `.cuix`.

As barras de ferramentas e os painéis do friso do ficheiro tornam-se grupos, cada botão com a sua macro e a sua imagem (PNG, ou BMP convertido em PNG). As teclas de atalho dele vêm num grupo próprio, cada botão com a sua tecla; os aliases de comandos que possa conter vêm num grupo {{ui:Aliases}}. O painel lista o que foi importado.

:::note
O ficheiro é apenas lido. Os comandos que o CadCraft não tem são listados pelo nome, sem adivinhar: os seus botões indicam-no quando clicados. O DIESEL para além das poucas funções acima, os menus, os botões do rato e as áreas de trabalho não são lidos.
:::

## Bom saber

- Os botões são guardados neste navegador (ou nesta aplicação de computador), não nos desenhos.
- Um botão executa-se pela linha de comandos, por isso é anulado como tudo o que escreve: um {{key:Mod+Z}} por cada comando que executou.
