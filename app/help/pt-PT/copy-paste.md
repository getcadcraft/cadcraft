---
title: Copiar, colar e duplicar
summary: "Copie objetos para a área de transferência do CadCraft, cole-os onde clicar ou no mesmo sítio, duplique-os com o ponteiro e traga trabalho de outro desenho ou separador."
keywords: copiar, cortar, colar, colar no mesmo sítio, duplicar, área de transferência, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, entre desenhos, outro separador, ponto base
from: 4b9f29d3
---

## O que vai aprender

Como copiar objetos para a área de transferência, colá-los onde clicar, colá-los nas suas coordenadas originais, duplicá-los com o ponteiro, cortá-los e levá-los para outro desenho. Tudo isto está também no grupo {{ui:Editar}} da barra de ferramentas: {{ui:Copiar}}, {{ui:Colar}} e o menu {{ui:Mais}}.

## Copiar e colar onde clicar

1. Selecione os objetos: clique neles ou arraste uma janela.
2. Prima {{key:Mod+C}}, ou clique em {{ui:Copiar}} no grupo {{ui:Editar}}. A linha de comandos diz quantos objetos foram copiados. Continuam selecionados.
3. Prima {{key:Mod+V}}, ou clique em {{ui:Colar}}. A cópia aparece no cursor, pendurada pelo canto inferior esquerdo dos objetos copiados.
4. Clique onde esse canto deve ir, ou escreva um ponto como `2000,500` e prima {{key:Enter}}. Os snaps a objetos e o Orto funcionam como habitualmente.

Os objetos colados ficam selecionados, por isso pode movê-los ou alterá-los logo a seguir. Um {{key:Mod+Z}} anula a colagem inteira.

:::tip
Para pendurar a cópia num ponto escolhido, como o canto de uma parede, escreva `COPYBASE`, clique no ponto base, selecione os objetos e prima {{key:Enter}}. Colar então põe esse ponto onde clicar. Para pendurar todas as cópias pelo centro em vez do canto inferior esquerdo, altere o {{ui:Ponto de colagem}} nas [Definições do CadCraft](topic:settings).
:::

## Colar no mesmo sítio

Prima {{key:Mod+Shift+V}}, ou escolha {{ui:Colar no mesmo sítio}} no menu {{ui:Mais}}. A cópia entra exatamente nas coordenadas de onde foi copiada, sem clicar. Use-o para levar objetos para outro desenho no mesmo sítio, ou de uma folha para outra folha.

## Duplicar e mover

1. Selecione os objetos.
2. Prima {{key:Mod+D}}, ou escolha {{ui:Duplicar e mover}} no menu {{ui:Mais}}.
3. Uma cópia fica por cima do original e move-se com o ponteiro. Clique onde deve ficar. Também pode escrever um deslocamento como `@0,-600`, ou uma distância na direção do cursor.

Prima {{key:Esc}} antes do clique e não fica nada para trás. A duplicação é um só passo de anulação e não mexe na área de transferência.

## Cortar

Prima {{key:Mod+X}}, ou escolha {{ui:Cortar}} no menu {{ui:Mais}}. Os objetos vão para a área de transferência e são removidos do desenho, num só passo de anulação. Volte a colá-los com {{key:Mod+V}} ou {{key:Mod+Shift+V}}.

## Entre desenhos e separadores

A área de transferência mantém a cópia quando abre outro desenho, e é partilhada por todos os separadores do CadCraft neste navegador. Copie num separador e prima {{key:Mod+V}} noutro.

- Os blocos que os objetos usam vêm com eles. Se o desenho onde colar já tiver um bloco com o mesmo nome, usa-se a sua própria definição, como faz o AutoCAD.
- As camadas que os objetos usam são acrescentadas, com a cor e as definições que tinham.
- A cópia não é redimensionada quando os dois desenhos usam unidades diferentes: o CadCraft avisa disso, e depois pode usar {{cmd:SCALE}}.
- As viewports ficam na folha de origem; não entram numa cópia.

:::note
A área de transferência é do próprio CadCraft. Não pode colar objetos do CadCraft noutro programa, nem colar de outro programa no CadCraft: guarde em DWG ou DXF. Uma cópia muito grande pode ser demasiado grande para partilhar entre separadores; a linha de comandos então diz apenas que só este separador a pode colar.
:::

## Erros comuns

- **{{key:Mod+V}} colou texto na linha de comandos.** Tinha escrito algo ali, por isso as teclas atuaram sobre o texto. Prima {{key:Esc}} para o limpar, e depois prima {{key:Mod+V}} outra vez.
- **Nada aconteceu, e a barra de estado diz para terminar o comando atual.** Outro comando está em curso. Prima {{key:Esc}} primeiro.
- **A colagem caiu longe.** Fica pendurada pelo canto inferior esquerdo do que copiou, que pode ser um objeto distante selecionado por engano. Use {{ui:Colar no mesmo sítio}}, ou copie com `COPYBASE`.
- **"Nada colado" com um motivo.** O que outro separador deixou na área de transferência não pôde ser lido (estava danificado, ou foi alterado à mão). Copie os objetos outra vez.

Veja a lista completa de teclas em [Teclado e rato](topic:keyboard), e todos os pedidos na [Referência de comandos](topic:commands#clipboard).
