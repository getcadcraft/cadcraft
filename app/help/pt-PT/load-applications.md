---
title: Carregar aplicações (APPLOAD)
summary: Carregue rotinas LISP e os respetivos ficheiros de diálogo, descarregue-as, volte a carregá-las a partir do histórico e guarde as que usa no Conjunto de arranque.
keywords: appload, ap, carregar aplicação, lisp, lsp, dcl, rotina, conjunto de arranque, descarregar, histórico, largar, carregar, personalizar, gerir
from: 89e0ee95
---

## O que vai aprender

Como carregar uma rotina LISP (um ficheiro `.lsp`) para que os seus comandos funcionem no CadCraft, como descarregá-la, e como fazer com que seja carregada sempre que o CadCraft arranca.

## Carregar uma rotina

1. Abra {{ui:Vista}} › {{ui:Mais}} › {{ui:Carregar aplicação…}}, ou escreva {{cmd:APPLOAD}} (ou `AP`) e prima {{key:Enter}}.
2. Clique em {{ui:Carregar um ficheiro…}} e escolha um ou mais ficheiros `.lsp`. Uma rotina que abre uma caixa de diálogo costuma vir com um ficheiro `.dcl`: escolha-o também.
3. A caixa de diálogo indica o que cada ficheiro criou, por exemplo "Carregado delblocks.lsp: 1 comando, DELBLOCKS."
4. Clique em {{ui:Fechar}}, escreva o comando da rotina e prima {{key:Enter}}.

Também pode largar ficheiros `.lsp` e `.dcl` sobre o desenho ou sobre a caixa de diálogo Carregar aplicações: são carregados de imediato.

O ficheiro é lido aqui, no seu navegador. Nada é enviado.

:::tip
Prima {{key:Enter}} numa linha de comandos vazia para executar de novo o comando da rotina, como qualquer outro comando. Os seus aliases também o podem chamar: consulte "Editar aliases de comandos".
:::

## Descarregar uma rotina

Em {{ui:Carregar aplicações}}, em {{ui:Aplicações carregadas}}, clique em {{ui:Descarregar}} ao lado do ficheiro. Os comandos que criou deixam de existir até o voltar a carregar.

## Carregar uma rotina sempre que o CadCraft arranca

1. Carregue a rotina.
2. Em {{ui:Aplicações carregadas}}, clique em {{ui:Adicionar ao Conjunto de arranque}} ao lado dela.

Daqui em diante é carregada automaticamente sempre que o CadCraft arranca neste navegador. Para deixar de a carregar automaticamente, clique em {{ui:Remover}} ao lado dela em {{ui:Conjunto de arranque}}.

O Conjunto de arranque guarda uma cópia de cada ficheiro no armazenamento deste navegador. Se alterar a rotina, carregue o novo ficheiro e volte a adicioná-lo.

## Carregar acad.lsp e acaddoc.lsp de uma pasta de suporte (Studio)

No CadCraft Studio, {{ui:Pasta de suporte}} na caixa de diálogo {{ui:Carregar aplicações}} aponta para uma pasta do seu computador. Clique em {{ui:Escolher pasta…}}. Quando o CadCraft arranca, lê `acad.lsp` e depois `acaddoc.lsp` dessa pasta (independentemente de maiúsculas ou minúsculas nos nomes), carrega-os e depois carrega o Conjunto de arranque. `acaddoc.lsp` é lido de novo sempre que se abre um novo separador de desenho. Nada mais na pasta é lido, e um ficheiro com mais de 2 MB é ignorado com uma mensagem.

Se um ficheiro definir uma função chamada `S::STARTUP`, ela é executada uma vez depois de os ficheiros serem carregados (também depois do Conjunto de arranque). {{ui:Carregar agora}} faz o mesmo quando pedido; {{ui:Limpar}} esquece a pasta.

No navegador, uma página não consegue manter uma pasta, por isso não existe pasta de suporte: use o Conjunto de arranque acima. Ficheiros `.fas` e `.vlx` compilados e programas nativos continuam a ser recusados.

## Carregar de novo um ficheiro a partir do histórico

{{ui:Histórico}} lista os ficheiros que carregou neste navegador, do mais recente para o mais antigo. Clique em {{ui:Carregar}} ao lado de um deles para o carregar de novo, sem o procurar no computador.

## Ficheiros que o CadCraft não consegue carregar

| Ficheiro | O que é | O que fazer |
|---|---|---|
| `.fas`, `.vlx` | LISP compilado ou protegido | carregue o código-fonte `.lsp` |
| `.arx`, `.crx`, `.dbx` | programas nativos do Windows | não há forma de os executar no CadCraft |
| `.dvb` | um projeto VBA | não há forma de os executar no CadCraft |
| `.craft`, `.lua`, `.py` | scripts CraftScript | abra-os na área de trabalho Script do PartCraft |

A caixa de diálogo Carregar aplicações indica qual destes é um ficheiro quando o escolhe.

## Parar uma rotina

Prima {{key:Esc}}. Num dos pedidos da rotina, Esc cancela-a da forma que a rotina espera (a sua própria limpeza é executada). Se estiver ocupada e não pedir nada, Esc para-a de imediato e indica-o; as rotinas carregadas continuam carregadas.

:::note
Tudo o que uma rotina altera no desenho é um só passo: um {{key:Mod+Z}} anula tudo.
:::
