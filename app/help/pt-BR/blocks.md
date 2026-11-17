---
title: Criar e inserir blocos
summary: Transforme uma porta desenhada em um bloco, posicione-o de novo em outras posições, escalas e ângulos, e limpe os blocos não usados.
keywords: bloco, bmake, inserir, ddinsert, símbolo, purge, explodir, redefinir, ponto base, referência, contar, bcount, tabela, csv, atributos, extração de dados
from: 125a129d
---

## O que você vai criar

Um símbolo de porta transformado em um bloco chamado `DOOR-900`, depois inserido três vezes: como desenhado, girado 90 graus e espelhado.

Um bloco é um grupo nomeado de objetos. Você o desenha uma vez; cada lugar em que ele é usado é uma **referência de bloco** que aponta para a única definição. A seção {{ui:Blocos}} do painel esquerdo lista os blocos do desenho e quantas vezes cada um é usado.

## Desenhe a porta

1. Digite `L` e pressione {{key:Enter}}.
2. Digite `0,0` e pressione {{key:Enter}}.
3. Digite `@0,900` e pressione {{key:Enter}}, depois pressione {{key:Enter}} de novo. Esta é a folha da porta.
4. Digite `A` e pressione {{key:Enter}}.
5. Digite `C` e pressione {{key:Enter}} para informar primeiro o centro.
6. Digite `0,0` e pressione {{key:Enter}} para o centro.
7. Digite `900,0` e pressione {{key:Enter}} para o ponto inicial.
8. Digite `0,900` e pressione {{key:Enter}} para o ponto final. Este é o arco de abertura.
9. Clique em {{ui:Extensão}}.

Os arcos vão no sentido anti-horário, do ponto inicial até o ponto final.

## Crie o bloco

1. Digite `B` e pressione {{key:Enter}}, ou clique em {{ui:Criar}} no grupo Blocos.
2. Em `Digite o nome do bloco`, digite `DOOR-900` e pressione {{key:Enter}}.
3. Em `Especifique o ponto base de inserção`, digite `0,0` e pressione {{key:Enter}}. Esta é a dobradiça: o ponto que fica onde você posicionar o bloco.
4. Em `Selecione objetos`, arraste uma janela em volta da folha e do arco.
5. Pressione {{key:Enter}}.

O histórico diz `Bloco "DOOR-900" criado a partir de 2 objetos, e eles foram substituídos por uma referência a ele.` O painel {{ui:Blocos}} lista DOOR-900 com `1×` ao lado: uma referência. Clique na porta: agora ela é selecionada como um único objeto, uma "Referência de bloco".

:::tip
Você pode selecionar os objetos primeiro e depois digitar `B`. O CadCraft ainda pergunta o nome e o ponto base, e então usa a sua seleção.
:::

## Insira o bloco

1. Digite `I` e pressione {{key:Enter}}, ou clique em {{ui:Inserir}} ao lado de DOOR-900 no painel {{ui:Blocos}}.
2. Em `Digite o nome do bloco ou [Arquivo (F)/Biblioteca (L)] <DOOR-900>`, pressione {{key:Enter}}. (O botão {{ui:Inserir}} do painel preenche o nome para você.)
3. A porta segue a mira. Clique onde a dobradiça deve ficar.

Uma segunda porta aparece.

## Insira girado ou escalado

1. Digite `I` e pressione {{key:Enter}}, depois pressione {{key:Enter}} para aceitar o nome.
2. Em `Especifique o ponto de inserção [Escala (S)/Girar (R)]`, digite `R` e pressione {{key:Enter}}.
3. Digite `90` e pressione {{key:Enter}}. A prévia gira.
4. Clique para posicioná-la.

Digite `S` no lugar para definir um fator de escala; ele vale para as duas direções. A escala e a rotação são lembradas para a próxima inserção. Para espelhar uma porta, insira-a e use {{cmd:MIRROR}} sobre a referência.

## Altere um bloco posicionado

Selecione uma referência de bloco. No painel direito você pode alterar {{ui:X}}, {{ui:Y}}, {{ui:Escala X}}, {{ui:Escala Y}} e {{ui:Rotação}}. Uma {{ui:Escala X}} negativa a inverte.

## Redefina um bloco

Para alterar todas as portas de uma vez, crie um bloco com o mesmo nome:

1. Desenhe a nova versão da porta.
2. Digite `B` e pressione {{key:Enter}}, e digite `DOOR-900`.
3. Em `Bloco "DOOR-900" já existe. Redefinir?`, digite `Y` e pressione {{key:Enter}}.
4. Informe o ponto base e selecione os novos objetos, como antes.

Todas as referências a DOOR-900 agora mostram a nova versão.

Ou edite o próprio bloco: {{ui:Blocos}} › {{ui:Mais}} › {{ui:Editar bloco}} ({{cmd:BEDIT}}) o abre sozinho, e {{ui:Salvar bloco}} o devolve. Veja [Atributos de bloco](topic:attributes#change-a-block-the-block-editor).

## Conte blocos e exporte uma tabela

Digite {{cmd:COUNT}} (ou {{ui:Blocos}} › {{ui:Mais}} › {{ui:Contar blocos}}), depois:

- clique em uma porta: todas as portas deste espaço são selecionadas, e o histórico diz quantas há aqui e no desenho inteiro;
- ou pressione {{key:Enter}}: o histórico lista cada bloco com a sua contagem, a maior primeiro;
- ou digite `E`, depois `C` para um CSV das contagens (no modelo, nas folhas e no total), ou `A` para uma linha por referência com sua camada, posição, rotação e cada valor de atributo — uma tabela que você pode abrir em uma planilha.

Blocos sem nome (cotas, tabelas) e referências dentro de outros blocos não são contados. Células que começam como uma fórmula (`=`, `+`, `-`, `@`) recebem um `'` no início, para que a planilha as mostre como texto.

## Explodir e limpar

- {{cmd:EXPLODE}} (`X`) transforma uma referência de bloco selecionada de volta em objetos separados. A definição permanece.
- {{cmd:PURGE}} (`PU`) remove definições de bloco que nada mais usa. O histórico diz quantas foram removidas.

## Nomes de bloco

Um nome pode ter até 255 caracteres e pode conter espaços, mas não pode começar com asterisco, nem conter `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ou acento grave. Ao salvar em DXF R12, os nomes são gravados em maiúsculas, caracteres que não sejam letras, dígitos, `$`, `_` ou `-` viram `_`, e os nomes são cortados em 31 caracteres; o histórico diz quantos mudaram. Nomes curtos em maiúsculas, dígitos e hífens, como `DOOR-900`, permanecem sem alteração. Um DWG salvo mantém os nomes como você os digitou, com maiúsculas e minúsculas; apenas os caracteres que o DWG não permite mudam (um `|` vira `$0$`, e os outros viram `_`).

## Salve um bloco ou objetos em um arquivo próprio

Digite `W` ({{cmd:WBLOCK}}) e escolha **Objetos**, **Bloco** ou **Desenho inteiro**. O resultado é um novo DWG ou DXF que contém apenas as camadas, estilos e blocos que ele usa, com o seu ponto base como origem. Para objetos, você pode mantê-los, transformá-los em um bloco ou apagá-los deste desenho.

## Erros comuns

- **O bloco caiu longe da mira.** O ponto base não estava sobre os objetos. Crie o bloco de novo com o ponto base em um canto ou em uma dobradiça.
- **"Nenhum objeto selecionado; nada criado."** Você pressionou {{key:Enter}} antes de selecionar qualquer coisa.
- **"Este desenho ainda não tem blocos: F insere um de um arquivo, L da biblioteca (ou crie um com BLOCK)."** Digite `F` para trazer um bloco de outro desenho, ou `L` para a biblioteca. Veja [Inserir de um arquivo ou da biblioteca](topic:insert-from-file-and-library).
- **"Uma viewport não pode entrar em um bloco."** Deixe as molduras de viewport fora da seleção.
