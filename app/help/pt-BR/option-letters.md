---
title: Dê às opções de comando suas próprias letras
summary: Responda às opções de um comando com letras que você escolhe, em qualquer idioma, a partir de um arquivo de texto que você pode editar, importar e exportar.
keywords: letras de opções, optionkeys, optkeys, palavra-chave de opção, palavra-chave, remapear, mapeamento, personalizar, letras personalizadas, polar, matriz, P, PO, idioma, traduzir opções, forma curta, importar, exportar, ambíguo
from: 7c8328c6
---

## O que você vai aprender

Como mudar as letras que você digita para responder às opções de um comando. Por exemplo, {{cmd:ARRAY}} pergunta `[Retangular/POlar]` e aceita `PO` para Polar; você pode fazer `P` ou outras letras quaisquer fazerem o mesmo, no seu idioma se quiser.

## Como as opções são respondidas

Quando um comando mostra opções entre colchetes, as letras maiúsculas são as que você digita: `POlar` é `PO`, e `Sair (X)` é `X`.

Você também pode digitar menos letras. Se o que você digita cabe em apenas uma das opções mostradas, o CadCraft a aceita: com `[Retangular/POlar]`, um `P` isolado é Polar. Se cabe em duas, a linha de comando as nomeia e pergunta de novo:

```
C pode ser COUnt, COLumns. Digite mais letras.
```

Números nunca são adivinhados, então uma distância ou quantidade digitada é sempre lida como número.

## Adicionar letras suas

Todo comando mantém suas letras embutidas. Você acrescenta as suas por cima delas, então sua lista guarda só o que você mudou.

1. Abra {{ui:Settings}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Option letters}} e clique em {{ui:Edit…}}. Ou digite {{cmd:OPTIONKEYS}} e pressione {{key:Enter}}.
2. Em {{ui:Command}}, escolha o comando, por exemplo `ARRAY`. A lista tem todos os comandos que pedem opções, e começa no último comando que você usou.
3. Em {{ui:Option}}, escolha a opção. Cada uma mostra suas letras embutidas entre colchetes, por exemplo `POlar (PO)`.
4. Em {{ui:Your letters}}, digite as letras que quer, por exemplo `P`, e clique em {{ui:Add}}.
5. A opção agora aparece em {{ui:Your letters}} com suas letras embutidas e as suas. Clique em {{ui:Save}}.

Inicie {{cmd:ARRAY}}, selecione um objeto e pressione {{key:Enter}}. O prompt mostra suas letras depois da opção, `POlar (P)`, e `P` responde a ela.

Para tirar uma delas, clique no x no fim da linha dela e depois em {{ui:Save}}. A opção volta a ter só as letras embutidas.

## Letras que você não pode usar

O editor recusa letras que ocultariam algo que a linha de comando já lê, e diz por quê:

- as letras embutidas de outra opção do mesmo comando (`R` para Polar em `ARRAY`, onde `R` é Retangular);
- uma palavra de snap de objeto de três letras ou mais, como `END`, `MID` ou `CEN`, e as palavras `ALL` e `LAST`;
- as mesmas letras para duas opções diferentes de um comando.

Enquanto algo estiver listado em vermelho, {{ui:Save}} fica desligado: corrija a linha ou remova-a, e ele volta. As letras embutidas de um prompt também sempre vencem as suas, então sua lista nunca impede uma resposta embutida de funcionar. Letras que por acaso são o nome de um comando, como `L` ou `C`, são aceitas: em um prompt de opção, a linha de comando está lendo uma resposta, não iniciando um comando.

As opções listadas para um comando vêm dos comandos que compartilham os seus prompts, então de vez em quando um comando lista uma opção que só pede em alguns casos.

## Uma escolha para todo comando

Em {{ui:Command}}, escolha {{ui:Every command}}. As opções são então todas as que qualquer comando tem, como Sair ou Desfazer. Letras que você acrescentar ali respondem a essa opção onde quer que um comando a ofereça. Letras adicionadas para um comando específico têm prioridade sobre estas.

## Letras no seu idioma

As letras podem vir de qualquer alfabeto, então você pode responder às opções sem trocar o teclado: acrescente `З` para Fechar em {{ui:Every command}}, ou `П` para POlar em `ARRAY`.

O CadCraft vem só com as letras em inglês. Sua própria lista é como você, seu escritório ou as pessoas que compartilham seu idioma preenchem o resto, e {{ui:Export}} gera um arquivo que você pode passar adiante.

## Editar como texto

{{ui:Edit as text}} no editor mostra a mesma lista como linhas de texto, uma por opção, que é também o que {{ui:Export}} salva:

```
ARRAY.PO,  P
*.X,       Q
```

Cada linha é o comando, um ponto, as letras embutidas da opção, uma vírgula e as suas letras. Um asterisco no lugar do comando significa todos os comandos. Uma linha que começa com `;` é uma nota.

## O que continua igual

- As letras embutidas continuam funcionando ao lado das suas.
- Rotinas e botões da barra de ferramentas continuam usando as letras embutidas, então nada que você carregou quebra. Para digitar as letras embutidas você mesmo onde as suas atrapalhariam, coloque um sublinhado antes: `_PO`.
- O nome curto de um comando é outra coisa: veja [Editar aliases de comandos](topic:command-aliases).

## Linhas que o CadCraft recusa

Quando você edita como texto ou importa um arquivo, o editor lista cada problema com o número da linha:

- o comando não existe (o alias de um comando é aceito: `AR.PO` é lido como `ARRAY.PO`);
- a linha não é `COMANDO.OPÇÃO, LETRAS`;
- as letras têm espaço ou sinal (somente letras e dígitos, no máximo 16);
- as mesmas letras respondem a duas opções diferentes de um comando.

## Importar e exportar

{{ui:Export}} salva suas letras como um arquivo de texto, para guardar ou dar a alguém. {{ui:Import…}} lê esse arquivo. Ambos estão no editor e em {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}}.

Em Configurações, {{ui:Import…}} substitui o seu arquivo pelo que você escolher. Um arquivo com uma linha que colide ou não pode ser usado não é aceito; abra o editor e importe ali para ver as linhas. No editor, ele só preenche a caixa: nada muda até você clicar em {{ui:Save}}.

## Recarregar ou remover

Digite {{cmd:REINIT}} e pressione {{key:Enter}} para aplicar seu arquivo de novo. Para remover uma letra, apague a linha dela e clique em {{ui:Save}}.

## Suas letras acompanham sua conta

Quando você está conectado ao getcadcraft.com, suas letras são mantidas com a sua conta. Abra o CadCraft em outro navegador ou em outro computador com a mesma conta e elas chegam sozinhas; a linha de comando diz `Letras das opções da sua conta`. Se você as alterou em dois lugares, a cópia mais recente vence e a que ela substituiu é guardada uma vez.

{{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} informa em que situação elas estão. Desconectado ou offline, elas ficam neste navegador e vão para a sua conta na próxima vez que você as salvar conectado.

Relacionado: [Editar aliases de comandos](topic:command-aliases) · [Configurações do CadCraft](topic:settings) · [Comandos](topic:commands)
