---
title: Atributos de bloco
summary: Veja e altere os valores que uma referência de bloco carrega, como um número de item ou um fabricante, e mantenha-os ao salvar uma cópia.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, legenda, editar no local, editor de atributos, attdef, definir atributo, bedit, editor de blocos, bclose, atributo, atributos, attrib, rótulo, número do item, valor, invisível, constante, bloco, propriedades, lista, etiqueta de equipamento
from: 34d307c7
---

## O que são atributos

Um atributo é um valor nomeado que acompanha uma referência de bloco: o número de item de uma etiqueta de equipamento, o nome de uma etiqueta de ambiente, a classificação de resistência ao fogo de uma porta. A definição do bloco diz quais atributos ele tem (cada um tem um **rótulo**, uma **solicitação**, um **padrão** e um lugar, tamanho e ângulo para o seu texto). Cada referência ao bloco carrega os próprios valores.

Alguns atributos são **invisíveis**: armazenam dados, como um fabricante ou um número de modelo, mas nunca são desenhados. Alguns são **constantes**: iguais para todas as referências, fixados pelo bloco.

## De onde vêm os atributos

- Blocos em arquivos DWG e DXF que você abre mantêm seus atributos, com os valores de cada referência.
- Blocos que você traz com {{cmd:INSERT}} e a opção {{ui:Arquivo}} mantêm os seus. Veja [Inserir de um arquivo ou da biblioteca](topic:insert-from-file-and-library).
- Itens da biblioteca entram como blocos com atributos: um número de item visível e os dados do item, invisíveis.

- Blocos que você mesmo cria: defina os atributos com {{cmd:ATTDEF}} primeiro (abaixo), depois selecione-os com os outros objetos ao criar o bloco.

## Definir atributos para os seus próprios blocos

1. Desenhe as linhas do bloco, por exemplo uma etiqueta de ambiente.
2. Escolha {{ui:Blocos}} › {{ui:Mais}} › {{ui:Definir atributo}}, ou digite `ATT` e pressione {{key:Enter}}.
3. O histórico mostra os modos (`Invisible=No Constant=No Preset=No`). Digite `I`, `C` ou `P` para alternar um, e pressione {{key:Enter}} quando estiverem certos. Valores invisíveis são mantidos, mas não desenhados; um constante tem o mesmo valor em cada referência; um predefinido não é solicitado quando você insere o bloco.
4. Digite o rótulo (por exemplo `ROOM_NO`: maiúsculas, sem espaços), a solicitação (`Número do ambiente`) e um valor padrão (`101`).
5. Clique onde o valor vai, e informe a altura e a rotação. O rótulo aparece no desenho.
6. Crie o bloco com {{cmd:BLOCK}}, selecionando as linhas e as definições de atributo juntas. A referência que o substitui recebe os valores padrão; cada novo {{cmd:INSERT}} os solicita.

Uma definição de atributo selecionada mostra {{ui:Rótulo}}, {{ui:Solicitação}}, {{ui:Padrão}} e os modos em {{ui:Propriedades}}.

## Alterar um bloco: o editor de blocos

{{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar bloco}} ({{cmd:BEDIT}}, `BE`) abre um bloco por conta própria: digite o nome dele (ou selecione uma referência antes). Uma barra no topo diz qual bloco você está editando. Desenhe, apague e altere os objetos dele com os comandos habituais, e adicione ou altere definições de atributo. Depois clique em {{ui:Salvar bloco}} (ou digite {{cmd:BCLOSE}} e `S`): cada referência mostra a alteração, e um {{key:Mod+Z}} desfaz tudo. {{ui:Descartar alterações}} ({{cmd:BCLOSE}}, `D`) deixa o bloco como estava.

Quando você adicionou, removeu ou alterou definições de atributo, salvar também alinha todas as referências: valores que você digitou são mantidos, um atributo novo recebe seu padrão, um removido sai, e cada atributo volta para onde a definição o coloca. O histórico informa quantas referências foram atualizadas.

## Editar uma legenda onde ela está (REFEDIT)

Uma legenda em uma folha costuma ficar dentro de um bloco. Para alterar as linhas ou os textos dela sem sair da folha:

1. Selecione a legenda, depois {{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar no local}} (ou digite {{cmd:REFEDIT}}).
2. O conteúdo dela se torna objetos comuns onde estão; todo o resto fica esmaecido e não pode ser alterado.
3. Altere, apague ou desenhe: novos objetos passam a fazer parte do bloco.
4. Clique em {{ui:Salvar o bloco}} na barra do topo (ou digite {{cmd:REFCLOSE}} e `S`). Toda referência mostra a alteração, e um {{key:Mod+Z}} desfaz a edição inteira. {{ui:Descartar}} deixa o bloco como estava.

Um desenho vinculado, um bloco dinâmico ou uma referência escalonada de modo diferente em X e em Y não pode ser editada no local: use {{cmd:BEDIT}} (ou abra o desenho vinculado).

:::note
Salve ou descarte no editor de blocos antes de salvar o desenho: um arquivo salvo enquanto o editor está aberto tem o bloco como era antes.
:::

## Preencha ao inserir um bloco

1. Digite `I` e pressione {{key:Enter}}, digite o nome do bloco e pressione {{key:Enter}}.
2. Clique onde ele vai.
3. O CadCraft pede cada valor, por exemplo `Informe o número do item (ITEM) <>`. Digite o valor e pressione {{key:Enter}}, ou pressione {{key:Enter}} para manter o padrão mostrado entre colchetes angulares.

Valores que o bloco marca como predefinidos, e os constantes, não são solicitados. Eles recebem o padrão.

## Ver e alterar os valores

1. Clique em uma referência de bloco.
2. No painel direito, em {{ui:Atributos}}, cada rótulo tem seu valor. Os invisíveis dizem `hidden`.
3. Clique em um valor, digite o novo e pressione {{key:Enter}}.

O desenho mostra o novo valor de imediato. Cada alteração é um passo: {{key:Mod+Z}} a desfaz.

**O editor de atributos.** Clique duas vezes em uma referência com atributos (ou {{cmd:EATTEDIT}}): a caixa de diálogo {{ui:Editar atributos}} lista cada rótulo com sua solicitação e valor. Digite novos valores; clique em uma linha para alterar a {{ui:Altura}}, {{ui:Rotação}}, {{ui:Fator de largura}}, {{ui:Justificar}}, {{ui:Camada}}, {{ui:Cor}} e {{ui:Invisível}} desse atributo, apenas para esta referência. {{ui:Aplicar}} mantém a caixa aberta; {{ui:OK}} aplica e fecha. Cada {{ui:Aplicar}} ou {{ui:OK}} é um passo de desfazer.

**Na linha de comando**, {{cmd:ATTEDIT}} pede cada valor em sequência: digite um novo, ou pressione {{key:Enter}} para mantê-lo.

## Alterar as definições de atributo (BATTMAN, ATTSYNC)

{{ui:Blocos}} › {{ui:Mais}} › {{ui:Gerenciador de atributos}} ({{cmd:BATTMAN}}) lista os atributos de um bloco: altere um rótulo, uma solicitação ou um padrão, marque {{ui:Invisível}}, {{ui:Constante}} ou {{ui:Predefinido}}, e mova-os para cima ou para baixo (a ordem em que os valores são solicitados). Com {{ui:Atualizar as referências (valores mantidos)}} marcado, {{ui:Aplicar}} também alinha cada referência; um rótulo renomeado mantém seus valores. Cada {{ui:Aplicar}} é um passo de desfazer.

{{cmd:ATTSYNC}} alinha manualmente as referências com as definições do seu bloco: `S` escolhe uma referência, `N` informa o nome de um bloco, `A` faz todos os blocos. Os valores são mantidos.

Os valores dos campos próprios de um item da biblioteca (id, versão, licença e atribuição) são mostrados, mas não são editáveis, para que a verificação de atualizações continue funcionando. O número do item e a quantidade podem ser alterados por você.

## Listar os atributos

Selecione referências e digite `LI` (para {{cmd:LIST}}). O histórico mostra cada atributo como `TAG = value`, com (invisível) ou (constante) onde couber.

## Mover, girar e explodir

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} e {{cmd:MIRROR}} mantêm os valores; o texto acompanha o bloco e continua legível.
- {{cmd:EXPLODE}} transforma os atributos visíveis em texto comum com seus valores. Os invisíveis são descartados.

## Salvar

Um DWG salvo e um DXF salvo mantêm todos os atributos: as definições de cada bloco (inclusive as invisíveis, constantes e predefinidas) e os valores de cada referência. Outros programas CAD os leem como atributos de bloco comuns.

Em um DXF R12, um valor com mais de 255 caracteres é cortado para 255, e o histórico informa isso.

## Erros comuns

- **Um valor não aparece no desenho.** Ele é invisível, ou está vazio. Valores invisíveis continuam aparecendo no painel direito.
- **O valor que digitei foi para a linha de comando.** Clique primeiro na caixa de valor no painel direito.
