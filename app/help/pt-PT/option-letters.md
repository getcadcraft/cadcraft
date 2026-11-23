---
title: Dar às opções dos comandos as suas próprias letras
summary: Responda às opções de um comando com letras que escolhe, em qualquer língua, a partir de um ficheiro de texto que pode editar, importar e exportar.
keywords: letras de opções, optionkeys, optkeys, palavra-chave de opção, palavra-chave, remapear, mapeamento, personalizar, letras personalizadas, polar, matriz, P, PO, língua, traduzir opções, forma curta, importar, exportar, ambíguo
from: 7c8328c6
---

## O que vai aprender

Como alterar as letras que escreve para responder às opções de um comando. Por exemplo, {{cmd:ARRAY}} pede `[Rectangular/POlar]` e aceita `PO` para Polar; pode fazer com que `P` ou quaisquer outras letras façam o mesmo, na sua própria língua se quiser.

## Como se respondem às opções

Quando um comando mostra opções entre parênteses retos, as letras maiúsculas são as que se escrevem: `POlar` é `PO`, `eXit` é `X`.

Também pode escrever menos letras. Se o que escreve só corresponde a uma das opções mostradas, o CadCraft aceita-a: com `[Rectangular/POlar]`, um `P` sozinho é Polar. Se corresponder a duas, a linha de comandos indica-as e pergunta de novo:

```
C could be COUnt, COLumns. Type more letters.
```

Os números nunca são adivinhados, por isso uma distância ou contagem escrita é sempre lida como número.

## Acrescentar letras próprias

Cada comando mantém as suas letras incorporadas. Acrescenta as suas por cima delas, por isso a sua lista guarda apenas o que alterou.

1. Abra {{ui:Definições}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Letras das opções}} e clique em {{ui:Editar…}}. Ou escreva {{cmd:OPTIONKEYS}} e prima {{key:Enter}}.
2. Em {{ui:Comando}}, escolha o comando, por exemplo `ARRAY`. A lista tem todos os comandos que pedem opções, e começa no último comando que usou.
3. Em {{ui:Opção}}, escolha a opção. Cada uma mostra as suas letras incorporadas entre parênteses, por exemplo `POlar (PO)`.
4. Em {{ui:As suas letras}}, escreva as letras que quer, por exemplo `P`, e clique em {{ui:Adicionar}}.
5. A opção passa a aparecer em {{ui:As suas letras}} com as suas letras incorporadas e as suas. Clique em {{ui:Guardar}}.

Inicie {{cmd:ARRAY}}, selecione um objeto e prima {{key:Enter}}. O pedido mostra as suas letras depois da opção, `POlar (P)`, e `P` responde-lhe.

Para retirar uma, clique no x no fim da sua linha e depois em {{ui:Guardar}}. A opção volta a ter apenas as suas letras incorporadas.

## Letras que não pode usar

O editor recusa letras que ocultariam algo que a linha de comandos já lê, e indica o motivo:

- as letras incorporadas de outra opção do mesmo comando (`R` para Polar em `ARRAY`, onde `R` é Rectangular);
- uma palavra de snap a objetos de três letras ou mais, como `END`, `MID` ou `CEN`, e as palavras `ALL` e `LAST`;
- as mesmas letras para duas opções diferentes de um comando.

Enquanto algo estiver listado a vermelho, {{ui:Guardar}} fica desativado: corrija a linha ou retire-a, e volta a ficar ativo. As letras incorporadas de um pedido também têm sempre prioridade sobre as suas, por isso a sua lista nunca impede uma resposta incorporada de funcionar. As letras que coincidem com o nome de um comando, como `L` ou `C`, são aceitáveis: num pedido de opção a linha de comandos está a ler uma resposta, não a iniciar um comando.

As opções listadas para um comando vêm dos comandos que partilham os seus pedidos, por isso, de vez em quando, um comando lista uma opção que só pede em alguns casos.

## Uma escolha para todos os comandos

Em {{ui:Comando}}, escolha {{ui:Todos os comandos}}. As opções são então todas as opções que qualquer comando tem, como eXit ou Undo. As letras que acrescentar aí respondem a essa opção onde quer que um comando a oferecer. As letras acrescentadas para um comando têm prioridade sobre estas.

## Letras na sua própria língua

As letras podem vir de qualquer alfabeto, por isso pode responder às opções sem mudar o teclado: acrescente `З` para Close em {{ui:Todos os comandos}}, ou `П` para POlar em `ARRAY`.

O CadCraft traz apenas as letras em inglês. A sua própria lista é a forma como você, o seu escritório ou pessoas que partilham a sua língua configuram o resto, e {{ui:Exportar}} cria um ficheiro que pode passar a outros.

## Editar como texto

{{ui:Editar como texto}} no editor mostra a mesma lista como linhas de texto, uma por opção, que é também o que {{ui:Exportar}} guarda:

```
ARRAY.PO,  P
*.X,       Q
```

Cada linha é o comando, um ponto, as letras incorporadas da opção, uma vírgula e as suas letras. Um asterisco no lugar do comando significa todos os comandos. Uma linha que começa com `;` é uma nota.

## O que se mantém igual

- As letras incorporadas continuam a funcionar ao lado das suas.
- As rotinas e os botões da barra de ferramentas continuam a usar as letras incorporadas, por isso nada do que carregou se parte. Para escrever você mesmo as letras incorporadas onde as suas letras atrapalhariam, coloque primeiro um underscore: `_PO`.
- O nome curto de um comando é outra coisa: veja [Editar aliases de comandos](topic:command-aliases).

## Linhas que o CadCraft recusa

Quando edita como texto ou importa um ficheiro, o editor lista cada problema com o número da linha:

- o comando não existe (um alias de comando é aceite: `AR.PO` é lido como `ARRAY.PO`);
- a linha não é `COMANDO.OPÇÃO, LETRAS`;
- as letras têm um espaço ou um sinal (apenas letras e algarismos, no máximo 16);
- as mesmas letras respondem a duas opções diferentes de um comando.

## Importar e exportar

{{ui:Exportar}} guarda as suas letras como um ficheiro de texto, para guardar ou dar a outra pessoa. {{ui:Importar…}} lê esse ficheiro. Ambos estão no editor e em {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Letras das opções}}.

Em Definições, {{ui:Importar…}} substitui o seu ficheiro pelo que escolher. Um ficheiro com uma linha que colide ou que não pode ser usada não é aceite; abra o editor e importe-o aí para ver as linhas. No editor apenas preenche a caixa: nada muda até clicar em {{ui:Guardar}}.

## Voltar a carregar ou remover

Escreva {{cmd:REINIT}} e prima {{key:Enter}} para aplicar o seu ficheiro de novo. Para remover uma letra, apague a sua linha e clique em {{ui:Guardar}}.

## As suas letras seguem a sua conta

Quando tem sessão iniciada em getcadcraft.com, as suas letras ficam guardadas com a sua conta. Abra o CadCraft noutro navegador ou noutro computador com a mesma conta e chegam sozinhas; a linha de comandos indica `Option letters from your account`. Se as alterou em dois sítios, prevalece a cópia mais recente, e a que foi substituída fica guardada uma vez.

{{ui:Definições}} › {{ui:CadCraft}} › {{ui:Letras das opções}} indica o seu estado. Sem sessão iniciada ou offline, ficam neste navegador e passam para a sua conta na próxima vez que as guardar com sessão iniciada.

Relacionados: [Editar aliases de comandos](topic:command-aliases) · [Definições do CadCraft](topic:settings) · [Comandos](topic:commands)
