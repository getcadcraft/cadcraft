---
title: Carregar aplicativos (APPLOAD)
summary: Carregue rotinas LISP e seus arquivos de caixa de diálogo, descarregue-as, carregue-as novamente pelo histórico e mantenha as que você usa no Grupo de inicialização.
keywords: appload, ap, carregar aplicativo, lisp, lsp, dcl, rotina, grupo de inicialização, descarregar, histórico, soltar, carregar, personalizar, gerenciar
from: 89e0ee95
---

## O que você vai aprender

Como carregar uma rotina LISP (um arquivo `.lsp`) para que seus comandos funcionem no CadCraft, como descarregá-la e como fazer com que ela seja carregada sempre que o CadCraft iniciar.

## Carregar uma rotina

1. Abra {{ui:Vista}} › {{ui:Mais}} › {{ui:Carregar aplicativo…}}, ou digite {{cmd:APPLOAD}} (ou `AP`) e pressione {{key:Enter}}.
2. Clique em {{ui:Carregar um arquivo…}} e escolha um ou mais arquivos `.lsp`. Uma rotina que abre uma caixa de diálogo geralmente vem com um arquivo `.dcl`: escolha-o também.
3. A caixa de diálogo informa o que cada arquivo criou, por exemplo "Carregado delblocks.lsp: 1 comando, DELBLOCKS."
4. Clique em {{ui:Fechar}}, digite o comando da rotina e pressione {{key:Enter}}.

Você também pode soltar arquivos `.lsp` e `.dcl` no desenho ou na caixa de diálogo {{ui:Carregar aplicativos}}: eles são carregados imediatamente.

O arquivo é lido aqui, no seu navegador. Nada é enviado.

:::tip
Pressione {{key:Enter}} em uma linha de comando vazia para executar novamente o comando da rotina, como qualquer outro comando. Seus aliases de comando também podem chegá-lo: veja "Editar aliases de comando".
:::

## Descarregar uma rotina

Em {{ui:Carregar aplicativos}}, em {{ui:Aplicativos carregados}}, clique em {{ui:Descarregar}} ao lado do arquivo. Os comandos que ele criou somem até que você o carregue novamente.

## Carregar uma rotina sempre que o CadCraft iniciar

1. Carregue a rotina.
2. Em {{ui:Aplicativos carregados}}, clique em {{ui:Adicionar ao Grupo de inicialização}} ao lado dela.

A partir de agora, ela é carregada automaticamente sempre que o CadCraft for iniciado neste navegador. Para interromper isso, clique em {{ui:Remover}} ao lado dela em {{ui:Grupo de inicialização}}.

O Grupo de inicialização mantém uma cópia de cada arquivo no armazenamento deste navegador. Se você alterar a rotina, carregue o novo arquivo e adicione-o novamente.

## Carregar acad.lsp e acaddoc.lsp de uma pasta de suporte (Studio)

No CadCraft Studio, {{ui:Pasta de suporte}} na caixa de diálogo {{ui:Carregar aplicativos}} recebe uma pasta do seu computador. Clique em {{ui:Escolher pasta…}}. Quando o CadCraft é iniciado, ele lê `acad.lsp` e depois `acaddoc.lsp` dessa pasta (independentemente de maiúsculas nos nomes), carrega-os e depois carrega o Grupo de inicialização. `acaddoc.lsp` é lido novamente sempre que uma nova aba de desenho é aberta. Nenhum outro arquivo da pasta é lido, e um arquivo com mais de 2 MB é ignorado com uma mensagem.

Se um arquivo definir uma função chamada `S::STARTUP`, ela é executada uma vez depois que os arquivos forem carregados (também após o Grupo de inicialização). {{ui:Carregar agora}} faz o mesmo sob solicitação; {{ui:Limpar}} esquece a pasta.

No navegador, uma página não pode manter uma pasta, então não há pasta de suporte: use o Grupo de inicialização acima. Arquivos compilados `.fas` e `.vlx` e programas nativos continuam recusados.

## Carregar um arquivo novamente pelo histórico

{{ui:Histórico}} lista os arquivos que você carregou neste navegador, do mais recente para o mais antigo. Clique em {{ui:Carregar}} ao lado de um para carregá-lo novamente, sem procurá-lo no seu computador.

## Arquivos que o CadCraft não consegue carregar

| Arquivo | O que é | O que fazer |
|---|---|---|
| `.fas`, `.vlx` | LISP compilado ou protegido | carregue o código-fonte `.lsp` | 
| `.arx`, `.crx`, `.dbx` | programas nativos do Windows | não há como executá-los no CadCraft |
| `.dvb` | um projeto VBA | não há como executá-lo no CadCraft |
| `.craft`, `.lua`, `.py` | scripts CraftScript | abra-os na área de trabalho Script do PartCraft |

A caixa de diálogo Carregar aplicativos informa qual desses é um arquivo quando você o escolhe.

## Interromper uma rotina

Pressione {{key:Esc}}. Em um dos prompts da rotina, Esc a cancela do jeito que a rotina espera (sua própria limpeza é executada). Se ela estiver ocupada e não estiver pedindo nada, Esc a interrompe de vez e informa isso; suas rotinas carregadas continuam carregadas.

:::note
Tudo o que uma rotina altera no desenho é um único passo: um {{key:Mod+Z}} desfaz tudo.
:::
