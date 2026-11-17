---
title: Copiar, colar e duplicar
summary: Copie objetos para a área de transferência do CadCraft, cole onde você clicar ou no mesmo local, duplique com o ponteiro e traga trabalho de outro desenho ou de outra guia.
keywords: copiar, recortar, colar, colar no mesmo local, duplicar, área de transferência, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, entre desenhos, outra guia, ponto base
from: 4b9f29d3
---

## O que você vai aprender

Como copiar objetos para a área de transferência, colá-los onde você clicar, colá-los nas próprias coordenadas, duplicá-los com o ponteiro, recortá-los e levá-los para outro desenho. Tudo isso também está no grupo {{ui:Editar}} da barra de ferramentas: {{ui:Copiar}}, {{ui:Colar}} e o menu {{ui:Mais}}.

## Copiar e colar onde você clicar

1. Selecione os objetos: clique neles ou arraste uma janela.
2. Pressione {{key:Mod+C}}, ou clique em {{ui:Copiar}} no grupo {{ui:Editar}}. A linha de comando informa quantos objetos foram copiados. Eles continuam selecionados.
3. Pressione {{key:Mod+V}}, ou clique em {{ui:Colar}}. A cópia aparece no cursor, pendurada no canto inferior esquerdo dos objetos copiados.
4. Clique onde esse canto deve ir, ou digite um ponto como `2000,500` e pressione {{key:Enter}}. Os snaps de objeto e o Orto funcionam normalmente.

Os objetos colados ficam selecionados, então você pode movê-los ou alterá-los logo em seguida. Um {{key:Mod+Z}} desfaz a colagem inteira.

:::tip
Quer que a cópia fique pendurada em um ponto que você escolhe, como o canto de uma parede? Digite `COPYBASE`, clique no ponto base, selecione os objetos e pressione {{key:Enter}}. Ao colar, esse ponto é colocado onde você clicar. Para pendurar todas as cópias pelo centro em vez do canto inferior esquerdo, altere {{ui:Ponto de colagem}} em [configurações do CadCraft](topic:settings).
:::

## Colar no mesmo local

Pressione {{key:Mod+Shift+V}}, ou escolha {{ui:Colar no mesmo local}} no menu {{ui:Mais}}. A cópia entra exatamente nas coordenadas de onde foi copiada, sem clique. Use para levar objetos para outro desenho no mesmo lugar, ou de uma folha para outra folha.

## Duplicar e mover

1. Selecione os objetos.
2. Pressione {{key:Mod+D}}, ou escolha {{ui:Duplicar e mover}} no menu {{ui:Mais}}.
3. Uma cópia fica por cima do original e se move com o ponteiro. Clique onde ela deve ir. Você também pode digitar um deslocamento como `@0,-600`, ou uma distância na direção do cursor.

{{key:Esc}} antes do clique não deixa nada para trás. A duplicata é um passo de desfazer e não altera a área de transferência.

## Recortar

Pressione {{key:Mod+X}}, ou escolha {{ui:Recortar}} no menu {{ui:Mais}}. Os objetos vão para a área de transferência e são apagados do desenho, em um só passo de desfazer. Cole-os de volta com {{key:Mod+V}} ou {{key:Mod+Shift+V}}.

## Entre desenhos e guias

A área de transferência mantém a sua cópia quando você abre outro desenho, e ela é compartilhada por todas as guias do CadCraft neste navegador. Copie em uma guia e depois pressione {{key:Mod+V}} em outra.

- Os blocos usados pelos objetos vêm junto. Se o desenho onde você cola já tem um bloco com o mesmo nome, a definição dele é usada, como no AutoCAD.
- As camadas usadas pelos objetos são adicionadas, com a cor e as configurações que tinham.
- A cópia não é redimensionada quando os dois desenhos usam unidades diferentes: o CadCraft avisa, e você pode usar {{cmd:SCALE}} depois.
- As viewports permanecem na sua folha; elas ficam de fora de uma cópia.

:::note
A área de transferência é do próprio CadCraft. Você não pode colar objetos do CadCraft em outro programa, nem colar de outro programa no CadCraft: salve como DWG ou DXF. Uma cópia muito grande pode ser grande demais para compartilhar entre guias; a linha de comando então informa que só esta guia pode colá-la.
:::

## Erros comuns

- **{{key:Mod+V}} colou texto na linha de comando.** Você tinha digitado algo ali, então as teclas atuaram sobre o texto. Pressione {{key:Esc}} para limpar, depois pressione {{key:Mod+V}} de novo.
- **Nada aconteceu, e a barra de status pede para terminar o comando atual.** Outro comando está em execução. Pressione {{key:Esc}} primeiro.
- **A colagem caiu longe.** Ela fica pendurada no canto inferior esquerdo do que você copiou, que pode ser um objeto distante selecionado por engano. Use {{ui:Colar no mesmo local}}, ou copie com `COPYBASE`.
- **"Nada colado", com um motivo.** O que outra guia deixou na área de transferência não pôde ser lido (estava danificado, ou foi alterado à mão). Copie os objetos de novo.

Veja a lista completa de teclas em [Teclado e mouse](topic:keyboard), e cada prompt na [Referência de comandos](topic:commands#clipboard).
