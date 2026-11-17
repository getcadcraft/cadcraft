---
title: Selecionar objetos
summary: Escolher objetos um a um, com uma janela ou um cruzamento, antes ou durante um comando, e retirar objetos de uma seleção.
keywords: selecionar, seleção, janela, cruzamento, substantivo-verbo, escolher, tudo, último, anterior, vedação, remover, adicionar, tab, ciclo, sobrepostos, qselect, seleção rápida, filtro, selecionar semelhantes, selectsimilar, shift, desselecionar, ctrl+a, pickfirst
from: 676508c7
---

## O que vai aprender

Como escolher os objetos sobre os quais um comando atua. O CadCraft tem duas formas de trabalhar, e ambas são boas:

- **Selecionar primeiro, depois o comando** (substantivo-verbo). Selecione objetos e depois escreva `M` para Mover. O comando recebe a sua seleção e passa diretamente à pergunta seguinte.
- **Comando primeiro, depois selecionar** (verbo-substantivo). Escreva `M`; o comando pergunta `Selecione objetos:`; selecione e depois prima {{key:Enter}}.

## Escolher um objeto de cada vez

1. Sem comando a correr, clique numa linha. Fica realçada e aparecem os seus grips (pequenos quadrados, pontos de controlo). O painel da direita mostra as suas propriedades.
2. Clique noutro objeto. Ele é acrescentado à seleção.
3. Mantenha {{key:Shift}} premido e clique num objeto selecionado. Ele é retirado da seleção.
4. Prima {{key:Esc}}. Nada fica selecionado.

## Janela e cruzamento

Clique uma vez num espaço vazio, mova e clique de novo: fica um retângulo. Premir e arrastar desenha antes um laço à mão livre, com os mesmos dois tipos (ver [Seleção por laço](topic:lasso-selection); as definições podem fazer com que arrastar desenhe o retângulo). Os objetos que obtém dependem da direção:

| Movimento | Caixa | Seleciona |
|---|---|---|
| Da esquerda para a direita | Janela | Apenas objetos **completamente dentro** da caixa |
| Da direita para a esquerda | Cruzamento | Objetos dentro da caixa **e** objetos que ela toca |

1. Desenhe algumas linhas e círculos que se sobreponham.
2. Clique num espaço vazio à esquerda de alguns objetos, mova para a direita e clique de novo. Apenas os objetos completamente dentro ficam selecionados.
3. Prima {{key:Esc}}.
4. Clique num espaço vazio à direita, mova para a esquerda atravessando alguns objetos e clique de novo. Fica selecionado tudo o que a caixa toca.
5. Mantenha {{key:Shift}} premido e desenhe uma caixa ou um laço sobre alguns objetos selecionados. Saem da seleção.

## Selecionar e depois executar um comando

1. Selecione dois círculos.
2. Escreva `M` e prima {{key:Enter}}.

O histórico diz `2 encontrados`, e o pedido passa diretamente para `Especifique o ponto base`. Termine a deslocação (ver [Mover, copiar, rodar, escalar e espelhar](topic:modify-objects)).

Quando um comando termina, a seleção é limpa, para que o seguinte comece do zero.

Comandos que recebem uma seleção desta forma: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} e {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} e {{cmd:CHAMFER}} pedem sempre que escolha os objetos um a um; {{cmd:TRIM}} e {{cmd:EXTEND}} aceitam uma escolha ou um caminho que arrasta por entre as partes (ver [Aparar e prolongar](topic:trim-and-extend)).

## Executar um comando e depois selecionar

1. Certifique-se de que nada está selecionado ({{key:Esc}}).
2. Escreva `E` e prima {{key:Enter}}. O pedido diz `Selecione objetos:`.
3. Clique nos objetos, ou arraste janelas e cruzamentos. O histórico conta cada escolha (`1 encontrado`, `3 encontrados`).
4. Prima {{key:Enter}}, prima {{key:Space}} ou clique com o botão direito para terminar a seleção.

Os objetos são apagados e o histórico diz quantos.

Num pedido `Selecione objetos:` pode também escrever:

- `ALL`, e depois {{key:Enter}}: todos os objetos que pode editar no separador aberto.
- `L` (ou `LAST`), e depois {{key:Enter}}: o objeto desenhado mais recentemente.
- `P` (Anterior): os objetos com que o último comando trabalhou, se ainda existirem.
- `F` (Vedação): clique ou escreva pontos ao longo de uma linha; cada objeto que a linha cruza é acrescentado. Prima {{key:Enter}} para terminar a vedação; `U` retira-lhe o último ponto.
- `W` (Janela) ou `C` (Cruzamento): dois cantos, qualquer que seja o sentido em que arraste.
- `R` (Remover): daí em diante, cliques, janelas e vedações **retiram** objetos. O pedido diz `Remova objetos:`. `A` (Adicionar) volta ao normal.
- `?`: a lista destas opções no histórico.

Estas opções não aparecem no pedido, como no AutoCAD.

## Escolher um de vários objetos sobrepostos

Onde os objetos se sobrepõem ou se tocam, um clique apanha o mais próximo. Para obter outro:

1. Mantenha o cursor parado sobre o local.
2. Prima {{key:Tab}}. O objeto seguinte fica realçado e a barra de estado diz qual é ("2 de 3: Linha na camada Walls").
3. Prima {{key:Tab}} de novo até realçar o que quer, e depois clique sem mover.

Mover o cursor recomeça. Isto funciona sem comando a correr, num pedido `Selecione objetos:` e sempre que um comando pede que escolha um objeto.

## Selecionar por regra: Seleção rápida

{{cmd:QSELECT}} (`QS`, ou {{ui:Editar}} › {{ui:Mais}} › {{ui:Seleção rápida}}) seleciona todos os objetos que correspondam a uma regra, como todos os círculos com raio inferior a 50, ou todas as referências de bloco com o nome DOOR-900.

1. Abra {{ui:Seleção rápida}}.
2. Escolha {{ui:Tipo de objeto}} (a lista conta cada tipo) e depois {{ui:Propriedade}}: {{ui:Camada}}, {{ui:Cor}}, e para alguns tipos {{ui:Comprimento}}, {{ui:Raio}}, {{ui:Área}}, {{ui:Altura do texto}}, {{ui:Conteúdo do texto}}, {{ui:Nome do bloco}} ou {{ui:Padrão de trama}}.
3. Escolha {{ui:Operador}} e {{ui:Valor}}. `*` corresponde com curingas (`DOOR-*`); {{ui:Selecionar tudo}} apanha todos os objetos do tipo. A contagem em baixo mostra quantos correspondem à medida que escolhe.
4. {{ui:Como aplicar}}: incluir as correspondências, ou tudo o resto. {{ui:Aplicar a}} {{ui:Seleção atual}} reduz o que tinha selecionado; {{ui:Acrescentar à seleção atual}} acrescenta-lhe.
5. Clique em {{ui:Selecionar}}. Depois execute o comando que quer: usa a seleção.

## Selecionar semelhantes

Selecione um ou mais objetos e escreva {{cmd:SELECTSIMILAR}} (`SIM`), ou escolha {{ui:Editar}} › {{ui:Mais}} › {{ui:Selecionar semelhantes}}. Ficam selecionados todos os objetos do mesmo tipo, na mesma camada e com a mesma cor; as referências de bloco também precisam do mesmo bloco, e as tramas do mesmo padrão. Escreva `SE` no pedido `Selecione objetos` para escolher o que tem de corresponder.

## Selecionar agora, usar mais tarde

Escreva `SELECT` e prima {{key:Enter}}, escolha objetos por qualquer das formas acima e prima {{key:Enter}}. Continuam selecionados para o comando seguinte, e `P` volta a escolhê-los num pedido `Selecione objetos:` posterior.

## Selecionar tudo

Sem comando a correr, prima {{key:Mod+A}}, ou escolha {{ui:Selecionar tudo}} no menu {{ui:Editar}} › {{ui:Mais}} da barra de ferramentas, para selecionar todos os objetos que pode editar no separador aberto. Se tiver escrito algo na linha de comandos, {{key:Mod+A}} seleciona esse texto: prima {{key:Esc}} para o limpar primeiro. Num pedido `Selecione objetos:`, escreva `ALL`. {{ui:Limpar seleção}} no mesmo menu, ou {{key:Esc}}, limpa a seleção.

:::tip
Se preferir que cada clique substitua a seleção (e {{key:Shift}} a acrescente), defina {{ui:Clicar em objetos}} para {{ui:Substitui a seleção}} nas [definições do CadCraft](topic:settings).
:::

## O que não pode ser selecionado

- Objetos numa camada que está **desligada**, **congelada** ou **bloqueada**. Os objetos bloqueados continuam visíveis, e ainda pode fazer snap a eles, mas não os pode selecionar nem alterar.
- Num separador de folha, o modelo mostrado dentro de uma viewport. Seleciona os objetos da própria folha (a legenda, as notas, as molduras das viewports). Para editar o modelo, vá ao separador {{ui:Modelo}}.

## Apagar rapidamente

Selecione objetos e prima {{key:Delete}} (ou {{key:Backspace}} quando a linha de comandos não tem o cursor). Num teclado de Mac, a tecla marcada delete funciona depois de ter clicado no desenho; enquanto a linha de comandos tem o cursor, prima fn e delete em conjunto. Isto executa {{cmd:ERASE}} na seleção. Se nada acontecer, escreveu algo na linha de comandos: prima {{key:Esc}}, ou escreva `E` e prima {{key:Enter}} em vez disso.

## Erros comuns

- **A janela apanhou pouco.** Arrastou da esquerda para a direita, o que só apanha o que está completamente dentro. Arraste da direita para a esquerda para um cruzamento.
- **Um clique em espaço vazio iniciou uma caixa.** Um clique em espaço vazio começa uma janela; o segundo clique termina-a. Prima {{key:Esc}} ou clique com o botão direito para a largar.
- **Um clique em espaço vazio largou a seleção.** Isso acontece, a não ser que mantenha {{key:Shift}} premido. Para manter a seleção num clique desses e limpá-la só com {{key:Esc}}, defina {{ui:Clicar num sítio vazio}} para {{ui:Mantém a seleção}} nas [definições do CadCraft](topic:settings#clicking-an-empty-spot).
- **O comando usou objetos que não queria.** Algo ainda estava selecionado quando o iniciou. Prima {{key:Esc}} antes de um comando para começar sem nada selecionado.
- **Nada fica selecionado depois de um comando.** Isso é de propósito: um comando terminado limpa a seleção.
