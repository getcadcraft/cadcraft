---
title: Use o CadCraft com um assistente de IA
summary: Deixe seu próprio assistente de IA ou script trabalhar com o CadCraft: o que ele pode fazer, como conectar qualquer cliente MCP e como você continua no controle (permissões, desfazer, registro de atividades, Desconectar).
keywords: ia, assistente, agente, mcp, model context protocol, script, automação, linha de comando, cli, json, token, permissões, desconectar, atividade, pastas, caminhos, svg, lote
from: 06ba4ef6
---

## O que você vai aprender

Como deixar um assistente de IA (ou um script que você escreveu) examinar um desenho, executar comandos do CadCraft, plotar e salvar, e decidir o que ele pode alterar.

O CadCraft **não tem IA própria** e não envia nada para lugar nenhum. Você traz o assistente: qualquer programa que fale o Model Context Protocol (MCP). O CadCraft apenas oferece ferramentas a ele, e você escolhe quais.

Há duas formas de entrada:

- **O desenho que você tem aberto.** O assistente trabalha nesta janela, ao seu lado, pelo CadCraft Studio no seu computador. É para isso que serve {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}}.
- **Desenhos no seu computador, sem abrir o aplicativo.** O servidor MCP do CadCraft e a linha de comando `cadcraft` leem e gravam arquivos DWG e DXF em pastas que você indicar. Veja "Trabalhe com arquivos sem abrir o CadCraft" abaixo.

## Ative

1. Abra {{ui:Settings}} (a engrenagem na barra do aplicativo, ou {{key:Mod+,}}) e vá para a guia {{ui:CadCraft}}.
2. Em {{ui:Assistants}}, marque **Permitir que assistentes de IA e scripts usem o CadCraft**. Fica desligado até você fazer isso.
3. Escolha o que ele pode fazer. **Leitura** vem marcada no início; marque as outras só quando precisar.

| Permissão | O que o assistente pode fazer |
|---|---|
| Leitura | Ver o desenho: descrever, listar e localizar objetos, ver a seleção, descrever a vista e tirar uma imagem dela, verificar contra regras de camadas e de desenho |
| Edição | Executar comandos no desenho e alterar a seleção. Cada ação é uma etapa que você pode desfazer |
| Salvar | Salvar o desenho (no computador, no próprio arquivo; no navegador, como download) |
| Exportar | Plotar em PDF e criar outros arquivos |

## Deixe-o usar arquivos em pastas que você escolher

No CadCraft Studio, um assistente pode abrir, salvar e plotar arquivos pelo nome em vez de usar as caixas de diálogo de arquivo, mas somente dentro das pastas que você adicionar em {{ui:Assistants}} › {{ui:Folders it may use}}:

1. Escolha {{ui:Add a folder…}} e selecione a pasta na caixa de diálogo do próprio Studio.
2. O assistente agora pode listar os arquivos ali (`files_list`), abrir um desenho (`drawing_open`), salvá-lo ali em uma versão DWG ou como DXF, plotar em um arquivo PDF ou SVG, carregar um arquivo LISP e entregar a um comando o arquivo que ele pede (`INSERT` `F`, `XATTACH`, um arquivo de pontos) ou dizer para onde vai o arquivo de um comando (o CSV do `COUNT`, o `PUBLISH`).
3. {{ui:Remove}} tira a pasta na hora. Caminhos fora dela são recusados, e um arquivo que já existe só é substituído quando o assistente pede isso ou quando ele mesmo o gravou.

Abrir ainda exige **Leitura**; gravar um desenho exige **Salvar**; qualquer outro arquivo exige **Exportar**.

Ferramentas fora das permissões que você marcou não são oferecidas ao assistente. Se ele pedir uma assim mesmo, o CadCraft recusa e registra isso no registro de atividades. Desligar a chave encerra todas as conexões de uma vez. {{ui:Redefinir configurações do CadCraft}} também a desliga.

## Conecte seu assistente

Os assistentes se conectam pelo **CadCraft Studio** no seu computador: ele roda um pequeno servidor que só este computador consegue acessar (endereço `127.0.0.1`), protegido por um token que o Studio gera toda vez que é iniciado. Abra o Studio, escolha {{ui:Conectar um assistente}} e copie o endereço e o token.

- No seu assistente, adicione um servidor MCP do tipo HTTP com o endereço (algo como `http://127.0.0.1:47615/mcp`) e o cabeçalho `Authorization: Bearer <token>`. O Studio mostra as configurações para colar.

{{ui:Novo token}} no Studio faz todos os assistentes conectados se reconectarem com o novo token. Nunca compartilhe o token: quem o tiver pode usar os aplicativos que você ligou, enquanto o Studio estiver em execução.

:::note
Uma aba do navegador não consegue abrir uma conexão para um assistente: nos aplicativos do navegador a chave não tem efeito até você usar o CadCraft Studio no seu computador.
:::

## Você continua no controle

- **Cada ação é uma etapa de desfazer**, com o nome do assistente, por exemplo "Assistente: LINE". Pressione {{key:Mod+Z}} para desfazer a última ação do assistente como um todo.
- **Você vê o que ele faz.** Os comandos dele aparecem no histórico de comandos com **[Assistente]** à frente, e o desenho é redesenhado enquanto ele trabalha.
- **Ele espera por você.** Enquanto você está no meio de um comando, o assistente pode ler, mas não alterar o desenho; ele é instruído a tentar de novo quando você terminar.
- **Você sabe quando há um conectado.** Um botão na barra do aplicativo mostra o nome do assistente enquanto ele está conectado. Clique nele para ver o que ele pode fazer ou para **Desconectar** o assistente.
- **Atividade.** {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Activity}} lista cada chamada: quando, qual ferramenta, concluída ou recusada, e a etapa de desfazer que ela gerou. {{ui:Save the log}} guarda uma cópia.

## O que um assistente pode pedir

| Ferramenta | Permissão | O que faz |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Leitura | O nome do desenho, unidades, camadas, blocos, folhas; o que está na tela |
| `files_list`, `drawing_open` | Leitura | Studio: os arquivos nas suas pastas; abre um deles nesta janela |
| `objects_list`, `object_get`, `selection_get` | Leitura | Objetos com geometria, comprimento e área (ou só a quantidade, por tipo e camada); a seleção |
| `drawing_check` | Leitura | Regras como camadas permitidas, nada na camada 0, cores PorCamada, alturas de texto |
| `view_screenshot` | Leitura | Uma imagem do desenho como está exibido |
| `command_run` | Edição | Digita na linha de comando: `LINE 0,0 @100,0 @0,50 ` é lido como você digitaria (um espaço encerra uma resposta), ou uma lista com uma resposta cada. Pode deixar um comando aberto e continuar na chamada seguinte |
| `script_run` | Edição | Um script (`.scr`) ou um arquivo LISP, como o {{ui:APPLOAD}} carrega |
| `block_insert` | Edição | Insere um bloco com os valores dos seus atributos em uma única etapa |
| `selection_set`, `undo` | Edição | Seleciona objetos para o próximo comando; desfaz as próprias etapas |
| `drawing_save` | Salvar | {{ui:Save}} do próprio CadCraft, ou {{ui:Save as}} em uma das suas pastas |
| `drawing_plot` | Exportar | Um PDF ou SVG de uma folha ou do modelo, em uma escala ou ajustado (as bases em PDF ainda não são impressas assim) |

Enquanto um assistente executa um comando, o CadCraft faz as perguntas dele na linha de comando em vez de em uma caixa de diálogo (por exemplo, se deve inserir um desenho inteiro ou um bloco), para que o assistente possa responder. A biblioteca e Localizar ainda dependem de você; o assistente é instruído a pedir que você faça isso.

## Trabalhe com arquivos sem abrir o CadCraft

O servidor MCP do CadCraft (`cadcraft-mcp`) e a linha de comando (`cadcraft`) executam o código de desenho do próprio CadCraft no Node.js, sem janela. Eles precisam do Node.js 20 ou mais recente.

- **O servidor MCP** só funciona dentro das pastas que você indicar, e somente com as permissões que você der a ele: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Sem `--root`, ele não consegue abrir nenhum arquivo; sem `--allow`, ele só consegue ler. Ele também consegue ler modelos IFC, levantamentos de quantitativos e as marcações em conjuntos de PDF.
- **A linha de comando** serve aos seus próprios scripts: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Vários arquivos de uma vez: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Adicione `--json` para uma saída que um programa consiga ler.

:::note
Se `npx @getcadcraft/mcp` disser que o pacote não foi encontrado, ele ainda não foi publicado. As novidades em getcadcraft.com vão avisar quando ele estiver disponível.
:::

## Se algo não funcionar

- **O assistente não vê ferramentas do CadCraft:** verifique se a chave está ligada nesta janela e se a janela está aberta no Studio.
- **"precisa da permissão de edição":** marque **Edição** em {{ui:Assistants}} e peça de novo.
- **"fora das pastas que os assistentes podem usar":** adicione essa pasta em {{ui:Assistants}} › {{ui:Folders it may use}}, ou peça ao assistente para usar um arquivo em uma pasta que você já adicionou.
- **Erros "401" ou de "token":** o token mudou (o Studio foi reiniciado, ou {{ui:Novo token}}). Copie o novo para as configurações do assistente.
- **A mudança dele ficou errada:** pressione {{key:Mod+Z}}. Cada toque desfaz uma ação inteira do assistente.

## Veja também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos práticos, cada um com as ferramentas que chama.
