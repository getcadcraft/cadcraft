---
title: Selecionar objetos
summary: Escolha objetos um a um, com uma janela ou um cruzamento, antes ou durante um comando, e retire objetos de uma seleção.
keywords: selecionar, seleção, janela, cruzamento, substantivo-verbo, escolher, tudo, último, anterior, cerca, remover, acrescentar, tab, alternar, sobrepostos, qselect, seleção rápida, filtro, selecionar semelhantes, selectsimilar, shift, desselecionar, ctrl+a, pickfirst
from: 676508c7
---

## O que você vai aprender

Como escolher os objetos sobre os quais um comando atua. O CadCraft tem duas formas de trabalhar, e ambas funcionam bem:

- **Selecionar primeiro, depois o comando** (substantivo-verbo). Selecione objetos e depois digite `M` para Mover. O comando usa a sua seleção e avança direto para a próxima pergunta.
- **Comando primeiro, depois selecionar** (verbo-substantivo). Digite `M`; o comando pede `Selecione objetos:`; você seleciona e pressiona {{key:Enter}}.

## Escolher um objeto de cada vez

1. Sem nenhum comando em execução, clique em uma linha. Ela fica destacada e seus grips (pequenos quadrados) aparecem. O painel da direita mostra as suas propriedades.
2. Clique em outro objeto. Ele é acrescentado à seleção.
3. Mantenha {{key:Shift}} pressionado e clique em um objeto selecionado. Ele sai da seleção.
4. Pressione {{key:Esc}}. Nada fica selecionado.

## Janela e cruzamento

Clique uma vez em um espaço vazio, mova o ponteiro e clique de novo: surge um retângulo. Pressionar e arrastar desenha um laço à mão livre, com os mesmos dois tipos (veja [Seleção por laço](topic:lasso-selection); as Configurações podem fazer um arrasto desenhar o retângulo). Os objetos obtidos dependem da direção:

| Você move | Caixa | Seleciona |
|---|---|---|
| Da esquerda para a direita | Janela | Somente objetos **totalmente dentro** da caixa |
| Da direita para a esquerda | Cruzamento | Objetos dentro da caixa **e** objetos que ela toca |

1. Desenhe algumas linhas e círculos que se sobreponham.
2. Clique em um espaço vazio à esquerda de alguns objetos, mova para a direita e clique de novo. Somente os objetos completamente dentro são selecionados.
3. Pressione {{key:Esc}}.
4. Clique em um espaço vazio à direita, mova para a esquerda cruzando alguns objetos e clique de novo. Tudo o que a caixa toca é selecionado.
5. Mantenha {{key:Shift}} pressionado e desenhe uma caixa ou um laço sobre alguns objetos selecionados. Eles saem da seleção.

## Selecionar e depois executar um comando

1. Selecione dois círculos.
2. Digite `M` e pressione {{key:Enter}}.

O histórico diz `2 encontrados`, e o prompt vai direto para `Especifique o ponto base`. Conclua o movimento (veja [Mover, copiar, girar, escalar e espelhar](topic:modify-objects)).

Ao terminar um comando, a seleção é limpa, para que o próximo comece do zero.

Comandos que aceitam uma seleção dessa forma: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} e {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} e {{cmd:CHAMFER}} sempre pedem que você escolha os objetos um a um; {{cmd:TRIM}} e {{cmd:EXTEND}} aceitam um clique ou um caminho que você arrasta pelos trechos (veja [Aparar e estender](topic:trim-and-extend)).

## Executar um comando e depois selecionar

1. Certifique-se de que nada está selecionado ({{key:Esc}}).
2. Digite `E` e pressione {{key:Enter}}. O prompt mostra `Selecione objetos:`.
3. Clique nos objetos ou arraste janelas e cruzamentos. O histórico conta cada escolha (`1 encontrado`, `3 encontrados`).
4. Pressione {{key:Enter}}, pressione {{key:Space}} ou clique com o botão direito para terminar a seleção.

Os objetos são apagados e o histórico informa quantos foram.

No prompt `Selecione objetos:` você também pode digitar:

- `ALL`, depois {{key:Enter}}: todos os objetos que você pode editar na guia aberta.
- `L` (ou `LAST`), depois {{key:Enter}}: o objeto desenhado mais recentemente.
- `P` (Anterior): os objetos com que o último comando trabalhou, se ainda estiverem lá.
- `F` (Cerca): clique ou digite pontos ao longo de uma linha; todos os objetos que a linha cruza são acrescentados. Pressione {{key:Enter}} para encerrar a cerca; `U` desfaz o último ponto.
- `W` (Janela) ou `C` (Cruzamento): dois cantos, em qualquer direção em que você arraste.
- `R` (Remover): a partir de agora, cliques, janelas e cercas tiram objetos **da** seleção. O prompt mostra `Remover objetos:`. `A` (Acrescentar) volta ao modo anterior.
- `?`: a lista dessas opções no histórico.

Essas opções não aparecem no prompt, como no AutoCAD.

## Escolher um entre vários objetos sobrepostos

Onde objetos se sobrepõem ou se tocam, um clique pega o mais próximo. Para obter outro:

1. Mantenha o ponteiro parado sobre o local.
2. Pressione {{key:Tab}}. O próximo objeto ali é destacado, e a barra de status informa qual é ("2 de 3: Linha na camada Paredes").
3. Pressione {{key:Tab}} de novo até destacar o que você quer, depois clique sem mover o ponteiro.

Mover o ponteiro recomeça. Isso funciona sem nenhum comando em execução, no prompt `Selecione objetos:` e em qualquer momento em que um comando peça para escolher um objeto.

## Selecionar por regra: Seleção rápida

{{cmd:QSELECT}} (`QS`, ou {{ui:Editar}} › {{ui:Mais}} › {{ui:Seleção rápida}}) seleciona todos os objetos que atendem a uma regra, como todos os círculos com raio menor que 50, ou todas as referências de bloco chamadas DOOR-900.

1. Abra {{ui:Seleção rápida}}.
2. Escolha {{ui:Tipo de objeto}} (a lista conta cada tipo) e depois {{ui:Propriedade}}: {{ui:Camada}}, {{ui:Cor}} e, para alguns tipos, {{ui:Comprimento}}, {{ui:Raio}}, {{ui:Área}}, {{ui:Altura do texto}}, {{ui:Conteúdo do texto}}, {{ui:Nome do bloco}} ou {{ui:Padrão de hachura}}.
3. Escolha {{ui:Operador}} e {{ui:Valor}}. `*` faz correspondência com curingas (`DOOR-*`); {{ui:Selecionar tudo}} pega todos os objetos do tipo. A contagem na parte inferior mostra quantos correspondem enquanto você escolhe.
4. {{ui:Como aplicar}}: incluir os correspondentes, ou todo o resto. {{ui:Aplicar a}} {{ui:Seleção atual}} restringe o que você já tinha selecionado; {{ui:Acrescentar à seleção atual}} soma a ela.
5. Clique em {{ui:Selecionar}}. Depois execute o comando que quiser: ele usará a seleção.

## Selecionar semelhantes

Selecione um ou mais objetos e digite {{cmd:SELECTSIMILAR}} (`SIM`), ou escolha {{ui:Editar}} › {{ui:Mais}} › {{ui:Selecionar semelhantes}}. Todos os objetos do mesmo tipo, na mesma camada e com a mesma cor são selecionados; referências de bloco também precisam do mesmo bloco, e hachuras, do mesmo padrão. Digite `SE` no prompt `Selecione objetos` para escolher o que deve coincidir.

## Selecionar agora, usar depois

Digite `SELECT` e pressione {{key:Enter}}, escolha os objetos por qualquer uma das formas acima e pressione {{key:Enter}}. Eles continuam selecionados para o próximo comando, e `P` os seleciona de novo em um prompt `Selecione objetos:` posterior.

## Selecionar tudo

Sem nenhum comando em execução, pressione {{key:Mod+A}}, ou escolha {{ui:Selecionar tudo}} no menu {{ui:Editar}} › {{ui:Mais}} da barra de ferramentas, para selecionar todos os objetos que você pode editar na guia aberta. Se você tiver digitado algo na linha de comando, {{key:Mod+A}} seleciona esse texto: pressione antes {{key:Esc}} para limpá-lo. No prompt `Selecione objetos:`, digite `ALL`. {{ui:Limpar seleção}} no mesmo menu, ou {{key:Esc}}, limpa a seleção.

:::tip
Se preferir que cada clique substitua a seleção (e {{key:Shift}} acrescente), defina {{ui:Clicar em objetos}} como {{ui:Substitui a seleção}} nas [configurações do CadCraft](topic:settings).
:::

## O que não pode ser selecionado

- Objetos em uma camada que está **desligada**, **congelada** ou **bloqueada**. Objetos bloqueados continuam visíveis, e você ainda pode fazer snap a eles, mas não pode selecioná-los nem alterá-los.
- Em uma guia de folha, o modelo mostrado dentro de um viewport. Você seleciona os objetos da própria folha (a legenda, as notas, os quadros dos viewports). Para editar o modelo, vá à guia {{ui:Modelo}}.

## Apagar rapidamente

Selecione os objetos e pressione {{key:Delete}} (ou {{key:Backspace}} quando a linha de comando não tiver o cursor). Em um teclado de Mac, a tecla marcada como delete funciona depois de você clicar no desenho; enquanto a linha de comando tiver o cursor, pressione fn e delete juntas. Isso executa {{cmd:ERASE}} sobre a seleção. Se nada acontecer, você digitou algo na linha de comando: pressione {{key:Esc}}, ou digite `E` e pressione {{key:Enter}}.

## Erros comuns

- **A janela pegou pouco.** Você arrastou da esquerda para a direita, o que só pega o que está totalmente dentro. Arraste da direita para a esquerda para um cruzamento.
- **Um clique em espaço vazio começou uma caixa.** Um clique em espaço vazio inicia uma janela; o segundo clique a conclui. Pressione {{key:Esc}} ou clique com o botão direito para descartá-la.
- **Um clique em espaço vazio soltou a seleção.** Isso acontece, a menos que você mantenha {{key:Shift}} pressionado. Para manter a seleção nesse tipo de clique e limpá-la somente com {{key:Esc}}, defina {{ui:Clicar em um ponto vazio}} como {{ui:Mantém a seleção}} nas [configurações do CadCraft](topic:settings#clicar-em-um-ponto-vazio).
- **O comando usou objetos que você não queria.** Algo ainda estava selecionado quando você iniciou o comando. Pressione {{key:Esc}} antes de um comando para começar sem nada selecionado.
- **Nada fica selecionado depois de um comando.** Isso é intencional: um comando concluído limpa a seleção.
