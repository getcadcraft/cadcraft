---
title: Atributos de blocos
summary: Veja e altere os valores que uma referência de bloco contém, como um número de item ou um fabricante, e mantenha-os ao guardar uma cópia.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, bloco de título, editar no local, editor de atributos, attdef, definir atributo, bedit, editor de blocos, bclose, atributo, atributos, attrib, etiqueta, número de item, valor, invisível, constante, bloco, propriedades, lista, etiqueta de equipamento
from: 34d307c7
---

## O que são atributos

Um atributo é um valor com nome que acompanha uma referência de bloco: o número de item de uma etiqueta de equipamento, o nome de uma etiqueta de compartimento, a classificação de resistência ao fogo de uma porta. A definição do bloco indica que atributos tem (cada um tem uma **etiqueta**, um **pedido**, uma **predefinição** e um lugar, tamanho e ângulo para o seu texto). Cada referência ao bloco leva os seus próprios valores.

Alguns atributos são **invisíveis**: guardam dados, como um fabricante ou um número de modelo, mas nunca são desenhados. Alguns são **constantes**: iguais em todas as referências, fixados pelo bloco.

## De onde vêm os atributos

- Os blocos em ficheiros DWG e DXF que abre mantêm os seus atributos, com os valores de cada referência.
- Os blocos que traz com {{cmd:INSERT}} e a opção {{ui:Ficheiro}} mantêm os seus. Ver [Inserir a partir de um ficheiro ou da biblioteca](topic:insert-from-file-and-library).
- Os itens da biblioteca entram como blocos com atributos: um número de item visível e os dados do item, invisíveis.

- Blocos que cria você próprio: defina os atributos com {{cmd:ATTDEF}} primeiro (abaixo), depois selecione-os com os outros objetos ao criar o bloco.

## Definir atributos para blocos próprios

1. Desenhe as linhas do bloco, por exemplo uma etiqueta de compartimento.
2. Escolha {{ui:Blocos}} › {{ui:Mais}} › {{ui:Definir atributo}}, ou escreva `ATT` e prima {{key:Enter}}.
3. O histórico mostra os modos (`Invisível=Não Constante=Não Predefinido=Não`). Escreva `I` (invisível), `C` (constante) ou `P` (predefinido) para alternar um, e prima {{key:Enter}} quando estiverem certos. Os valores invisíveis são guardados mas não desenhados; um valor constante tem o mesmo valor em cada referência; um valor predefinido não é pedido quando insere o bloco.
4. Escreva a etiqueta (por exemplo `ROOM_NO`: maiúsculas, sem espaços), o pedido (`Número do compartimento`) e um valor predefinido (`101`).
5. Clique onde fica o valor, e indique a altura e a rotação. A etiqueta aparece no desenho.
6. Crie o bloco com {{cmd:BLOCK}}, selecionando as linhas e as definições de atributos em conjunto. A referência que as substitui recebe os valores predefinidos; cada novo {{cmd:INSERT}} pede-os.

Uma definição de atributo selecionada mostra {{ui:Etiqueta}}, {{ui:Pedido}}, {{ui:Predefinição}} e os modos em {{ui:Propriedades}}.

## Alterar um bloco: o editor de blocos

{{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar bloco}} ({{cmd:BEDIT}}, `BE`) abre um bloco por si: escreva o nome (ou selecione antes uma referência). Uma barra no topo indica qual o bloco que está a editar. Desenhe, apague e altere os seus objetos com os comandos habituais, e acrescente ou altere definições de atributos. Depois clique em {{ui:Guardar bloco}} (ou escreva {{cmd:BCLOSE}} e `S`): cada referência mostra a alteração, e um {{key:Mod+Z}} anula tudo. {{ui:Descartar alterações}} ({{cmd:BCLOSE}}, `D`) deixa o bloco como estava.

Quando acrescenta, remove ou altera definições de atributos, guardar também atualiza todas as referências: os valores que escreveu mantêm-se, um atributo novo recebe a predefinição, um atributo removido sai, e cada atributo volta à posição que a definição indica. O histórico indica quantas referências foram atualizadas.

## Editar uma cartela no sítio (REFEDIT)

Uma cartela numa folha costuma estar dentro de um bloco. Para alterar as suas linhas ou textos sem sair da folha:

1. Selecione a cartela e depois {{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar no local}} (ou escreva {{cmd:REFEDIT}}).
2. O seu conteúdo passa a ser objetos normais no sítio onde estão; tudo o resto fica esmaecido e não pode ser alterado.
3. Altere, apague ou desenhe: os novos objetos passam a fazer parte do bloco.
4. Clique em {{ui:Guardar o bloco}} na barra do topo (ou escreva {{cmd:REFCLOSE}} e `S`). Cada referência mostra a alteração, e um {{key:Mod+Z}} anula a edição completa. {{ui:Descartar}} deixa o bloco como estava.

Uma ligação a um desenho, um bloco dinâmico, ou uma referência escalada de forma diferente em X e em Y não podem ser editados no sítio: use {{cmd:BEDIT}} (ou abra o desenho ligado).

:::note
Guarde ou descarte no editor de blocos antes de guardar o desenho: um ficheiro guardado com o editor aberto tem o bloco como estava antes.
:::

## Preencher os valores ao colocar um bloco

1. Escreva `I` e prima {{key:Enter}}, escreva o nome do bloco e prima {{key:Enter}}.
2. Clique onde deve ficar.
3. O CadCraft pede cada valor, por exemplo `Indique o número do item (ITEM) <>`. Escreva o valor e prima {{key:Enter}}, ou prima {{key:Enter}} para manter a predefinição indicada entre parênteses angulares.

Os valores que o bloco marca como predefinidos, e os constantes, não são pedidos. Ficam com a sua predefinição.

## Ver e alterar os valores

1. Clique numa referência de bloco.
2. No painel direito, em {{ui:Atributos}}, cada etiqueta tem o seu valor. Os invisíveis dizem `oculto`.
3. Clique num valor, escreva o novo e prima {{key:Enter}}.

O desenho mostra o novo valor de imediato. Cada alteração é um passo: {{key:Mod+Z}} anula-a.

**O editor de atributos.** Faça duplo clique numa referência com atributos (ou {{cmd:EATTEDIT}}): a caixa de diálogo {{ui:Editar atributos}} lista cada etiqueta com o seu pedido e valor. Escreva os novos valores; clique numa linha para alterar a {{ui:Altura}}, {{ui:Rotação}}, {{ui:Fator de largura}}, {{ui:Justificar}}, {{ui:Camada}}, {{ui:Cor}} e {{ui:Invisível}} desse atributo apenas nesta referência. {{ui:Aplicar}} mantém a caixa aberta; {{ui:OK}} aplica e fecha. Cada {{ui:Aplicar}} ou {{ui:OK}} é um passo de anulação.

**Na linha de comandos**, {{cmd:ATTEDIT}} pede cada valor por ordem: escreva um novo, ou prima {{key:Enter}} para o manter.

## Alterar as definições de atributos (BATTMAN, ATTSYNC)

{{ui:Blocos}} › {{ui:Mais}} › {{ui:Gestor de atributos}} ({{cmd:BATTMAN}}) lista os atributos de um bloco: altere uma etiqueta, pedido ou predefinição, marque {{ui:Invisível}}, {{ui:Constante}} ou {{ui:Predefinido}}, e mova-os para cima ou para baixo (a ordem em que os valores são pedidos). Com {{ui:Atualizar as referências (valores mantidos)}} marcado, {{ui:Aplicar}} também atualiza todas as referências; uma etiqueta renomeada mantém os seus valores. Cada {{ui:Aplicar}} é um passo de anulação.

{{cmd:ATTSYNC}} atualiza à mão as referências de acordo com as definições do seu bloco: `S` escolhe uma referência, `N` indica um bloco pelo nome, `A` faz todos os blocos. Os valores são mantidos.

Os valores dos campos próprios de um item da biblioteca (o seu id, versão, licença e atribuição) são mostrados mas não são editáveis, para que a verificação de atualizações continue a funcionar. O número de item e a quantidade podem ser alterados por si.

## Listar

Selecione referências e escreva `LI` (para {{cmd:LIST}}). O histórico mostra cada atributo como `ETIQUETA = valor`, com `(invisível)` ou `(constante)` quando se aplica.

## Mover, rodar e explodir

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} e {{cmd:MIRROR}} mantêm os valores; o texto move-se com o bloco e continua legível.
- {{cmd:EXPLODE}} transforma os atributos visíveis em texto simples com os seus valores. Os invisíveis são descartados.

## Guardar

Um DWG guardado e um DXF guardado mantêm todos os atributos: as definições de cada bloco (incluindo as invisíveis, constantes e predefinidas) e os valores de cada referência. Outros programas de CAD leem-nos como atributos de bloco comuns.

Em DXF R12, um valor com mais de 255 caracteres é cortado a 255, e o histórico indica-o.

## Erros comuns

- **Um valor não aparece no desenho.** É invisível, ou está vazio. Os valores invisíveis continuam a aparecer no painel direito.
- **O valor que escrevi foi para a linha de comandos.** Clique primeiro na caixa de valor do painel direito.
