---
title: Criar e inserir blocos
summary: Transforme uma porta desenhada num bloco, volte a colocá-la noutras posições, escalas e ângulos, e limpe os blocos não utilizados.
keywords: bloco, bmake, inserir, ddinsert, símbolo, purge, explodir, redefinir, ponto base, referência, contar, bcount, mapa, csv, atributos, extração de dados
from: 125a129d
---

## O que vai criar

Um símbolo de porta transformado num bloco chamado `DOOR-900`, e depois colocado três vezes: tal como foi desenhado, rodado 90 graus e espelhado.

Um bloco é um grupo de objetos com nome. Desenha-se uma vez; em cada sítio onde é usado fica uma **referência de bloco** que aponta para a única definição. A secção {{ui:Blocos}} do painel esquerdo lista os blocos do desenho e o número de vezes que cada um é usado.

## Desenhar a porta

1. Escreva `L` e prima {{key:Enter}}.
2. Escreva `0,0` e prima {{key:Enter}}.
3. Escreva `@0,900` e prima {{key:Enter}}, e depois prima {{key:Enter}} outra vez. Esta é a folha da porta.
4. Escreva `A` e prima {{key:Enter}}.
5. Escreva `C` e prima {{key:Enter}} para indicar primeiro o centro.
6. Escreva `0,0` e prima {{key:Enter}} para o centro.
7. Escreva `900,0` e prima {{key:Enter}} para o ponto inicial.
8. Escreva `0,900` e prima {{key:Enter}} para o ponto final. Este é o arco de abertura.
9. Clique em {{ui:Extensão}}.

Os arcos vão no sentido anti-horário, do ponto inicial até ao ponto final.

## Criar o bloco

1. Escreva `B` e prima {{key:Enter}}, ou clique em {{ui:Criar}} no grupo Blocos.
2. Em `Indique o nome do bloco`, escreva `DOOR-900` e prima {{key:Enter}}.
3. Em `Especifique o ponto base de inserção`, escreva `0,0` e prima {{key:Enter}}. Esta é a dobradiça: o ponto que fica onde colocar o bloco.
4. Em `Selecione objetos`, arraste uma janela à volta da folha e do arco.
5. Prima {{key:Enter}}.

O histórico diz `Bloco "DOOR-900" criado a partir de 2 objetos, que foram substituídos por uma referência a ele.` O painel {{ui:Blocos}} lista DOOR-900 com `1×` ao lado: uma referência. Clique na porta: agora seleciona-se como um único objeto, uma "Referência de bloco".

:::tip
Também pode selecionar primeiro os objetos e depois escrever `B`. O CadCraft continua a pedir o nome e o ponto base, e depois usa a seleção atual.
:::

## Inserir o bloco

1. Escreva `I` e prima {{key:Enter}}, ou clique em {{ui:Inserir}} ao lado de DOOR-900 no painel {{ui:Blocos}}.
2. Em `Indique o nome do bloco ou [Ficheiro/Biblioteca (L)] <DOOR-900>`, prima {{key:Enter}}. (O botão {{ui:Inserir}} do painel preenche o nome automaticamente.)
3. A porta segue a cruzeta. Clique onde deve ficar a dobradiça.

Aparece uma segunda porta.

## Inserir rodado ou com escala

1. Escreva `I` e prima {{key:Enter}}, depois prima {{key:Enter}} para aceitar o nome.
2. Em `Especifique o ponto de inserção [Escala (S)/Rodar]`, escreva `R` e prima {{key:Enter}}.
3. Escreva `90` e prima {{key:Enter}}. A pré-visualização roda.
4. Clique para a colocar.

Escreva `S` em vez disso para definir um fator de escala; aplica-se às duas direções. A escala e a rotação ficam memorizadas para a próxima inserção. Para espelhar uma porta, insira-a e depois use {{cmd:MIRROR}} na referência.

## Alterar um bloco colocado

Selecione uma referência de bloco. No painel direito pode alterar {{ui:X}}, {{ui:Y}}, {{ui:Escala X}}, {{ui:Escala Y}} e {{ui:Rotação}}. Uma {{ui:Escala X}} negativa inverte-o.

## Redefinir um bloco

Para alterar todas as portas de uma só vez, crie um bloco com o mesmo nome:

1. Desenhe a nova versão da porta.
2. Escreva `B` e prima {{key:Enter}}, e escreva `DOOR-900`.
3. Em `Bloco "DOOR-900" já existe. Redefinir?`, escreva `Y` e prima {{key:Enter}}.
4. Indique o ponto base e selecione os novos objetos, como antes.

Todas as referências a DOOR-900 mostram agora a nova versão.

Ou edite o próprio bloco: {{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar bloco}} ({{cmd:BEDIT}}) abre-o isoladamente, e {{ui:Guardar bloco}} guarda-o e devolve-o ao desenho. Consulte [Atributos de bloco](topic:attributes#change-a-block-the-block-editor).

## Contar blocos e exportar um mapa

Escreva {{cmd:COUNT}} (ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Contar blocos}}), depois:

- clique numa porta: são selecionadas todas as portas deste espaço, e o histórico diz quantas há aqui e no desenho inteiro;
- ou prima {{key:Enter}}: o histórico lista todos os blocos com a respetiva contagem, do maior para o menor;
- ou escreva `E`, depois `C` para um CSV das contagens (no modelo, nas folhas, no total) ou `A` para uma linha por referência, com a camada, a posição, a rotação e cada valor de atributo: um mapa que pode abrir numa folha de cálculo.

Os blocos sem nome (cotas, tabelas) e as referências dentro de outros blocos não são contados. As células que começam como uma fórmula (`=`, `+`, `-`, `@`) recebem um `'` à frente, para que a folha de cálculo as mostre como texto.

## Explodir e purgar

- {{cmd:EXPLODE}} (`X`) transforma uma referência de bloco selecionada novamente em objetos separados. A definição mantém-se.
- {{cmd:PURGE}} (`PU`) remove as definições de blocos que já não são usadas. O histórico diz quantas removeu.

## Nomes de blocos

Um nome pode ter até 255 caracteres e pode conter espaços, mas não pode começar por um asterisco nem conter `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ou uma crase. Ao guardar em DXF R12, os nomes são escritos em maiúsculas, os caracteres que não são letras, algarismos, `$`, `_` ou `-` passam a `_`, e os nomes são cortados a 31 caracteres; o histórico diz quantos foram alterados. Nomes curtos em maiúsculas, algarismos e hífenes, como `DOOR-900`, mantêm-se inalterados. Um DWG guardado mantém os nomes como os escreveu, em maiúsculas e minúsculas; só os caracteres que o DWG não aceita mudam (um `|` passa a `$0$`, os outros passam a `_`).

## Escrever um bloco ou objetos num ficheiro próprio

Escreva `W` ({{cmd:WBLOCK}}) e escolha **Objetos**, **Bloco** ou **Desenho inteiro**. O resultado é um novo DWG ou DXF que contém apenas as camadas, os estilos e os blocos que usa, com o ponto base escolhido como origem. Para os objetos, pode mantê-los, transformá-los num bloco ou eliminá-los deste desenho.

## Erros comuns

- **O bloco caiu longe da cruzeta.** O ponto base não estava nos objetos. Crie o bloco de novo com o ponto base num canto ou numa dobradiça.
- **"Nenhum objeto selecionado; nada criado."** Prima {{key:Enter}} antes de selecionar qualquer coisa.
- **"Este desenho ainda não tem blocos: F insere um a partir de um ficheiro, L a partir da biblioteca (ou crie um com BLOCK)."** Escreva `F` para trazer um bloco de outro desenho, ou `L` para a biblioteca. Veja [Inserir a partir de um ficheiro ou da biblioteca](topic:insert-from-file-and-library).
- **"Uma viewport não pode ficar dentro de um bloco."** Deixe os contornos das viewports fora da seleção.
