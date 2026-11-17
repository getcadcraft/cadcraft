---
title: Usar o CadCraft com um assistente de IA
summary: Deixe o seu assistente de IA ou script trabalhar com o CadCraft: o que pode fazer, como ligar qualquer cliente MCP e como continua no controlo (permissões, anular, registo de atividade, Desligar).
keywords: ia, assistente, agente, mcp, model context protocol, script, automatização, linha de comandos, cli, json, token, permissões, desligar, atividade, pastas, caminhos, svg, lote
from: 06ba4ef6
---

## O que vai aprender

Como deixar um assistente de IA (ou um script que escreveu) ver um desenho, executar os comandos do CadCraft, imprimir e guardar, e decidir o que pode alterar.

O CadCraft **não tem IA própria** e não envia nada para lado nenhum. Traz o seu assistente: qualquer programa que fale o Model Context Protocol (MCP). O CadCraft apenas lhe disponibiliza ferramentas, e a escolha de quais é sua.

Há duas formas de começar:

- **O desenho que tem aberto.** O assistente trabalha nesta janela, ao seu lado, através do CadCraft Studio no seu computador. É para isto que serve {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Assistentes}}.
- **Desenhos no seu computador, sem abrir a aplicação.** O servidor MCP do CadCraft e a linha de comandos `cadcraft` leem e escrevem ficheiros DWG e DXF nas pastas que indicar. Veja «Trabalhar com ficheiros sem abrir o CadCraft» mais abaixo.

## Ligar

1. Abra {{ui:Definições}} (a roda dentada na barra de aplicações, ou {{key:Mod+,}}) e aceda ao separador {{ui:CadCraft}}.
2. Em {{ui:Assistentes}}, marque **Permitir que assistentes de IA e scripts usem o CadCraft**. Está desativado até o fazer.
3. Escolha o que pode fazer. **Ler** vem marcado por defeito; marque os outros apenas quando precisar deles.

| Permissão | O que o assistente pode fazer |
|---|---|
| Ler | Ver o desenho: descrevê-lo, listar e encontrar objetos, ver a seleção, descrever a vista e tirar-lhe uma imagem, verificar contra as regras de camadas e de desenho |
| Editar | Executar comandos no desenho e alterar a seleção. Cada ação é um passo que pode anular |
| Guardar | Guardar o desenho (no computador, no seu ficheiro; no navegador, como transferência) |
| Exportar | Imprimir para PDF e criar outros ficheiros |

## Deixar usar ficheiros em pastas que escolher

No CadCraft Studio um assistente pode abrir, guardar e imprimir ficheiros pelo nome, em vez de usar as caixas de diálogo de ficheiros, mas só dentro das pastas que acrescentar em {{ui:Assistentes}} › {{ui:Pastas que podem utilizar}}:

1. Escolha {{ui:Adicionar uma pasta…}} e selecione a pasta na caixa de diálogo do próprio Studio.
2. O assistente pode agora listar os ficheiros aí (`files_list`), abrir um desenho (`drawing_open`), guardá-lo aí numa versão DWG ou como DXF, imprimir para um ficheiro PDF ou SVG, carregar um ficheiro LISP, e dar a um comando o ficheiro que ele pede (`INSERT` `F`, `XATTACH`, um ficheiro de pontos) ou indicar para onde vai o ficheiro de um comando (o CSV de `COUNT`, `PUBLISH`).
3. {{ui:Remover}} retira uma pasta de imediato. Os caminhos fora dessas pastas são recusados, e um ficheiro que já lá existe só é substituído quando o assistente o pede ou quando foi ele que o escreveu.

Abrir continua a exigir **Ler**; escrever um desenho exige **Guardar**; qualquer outro ficheiro exige **Exportar**.

As ferramentas fora das permissões que marcou não são oferecidas ao assistente. Se ele pedir uma mesmo assim, o CadCraft recusa e regista-o no registo de atividade. Desligar o interruptor termina de uma vez todas as ligações. {{ui:Repor as definições do CadCraft}} também o desliga.

## Ligar o seu assistente

Os assistentes ligam-se através do **CadCraft Studio** no seu computador: este executa um pequeno servidor que só este computador consegue alcançar (endereço `127.0.0.1`), protegido por um token que o Studio cria de cada vez que arranca. Abra o Studio, escolha {{ui:Ligar um assistente}} e copie o endereço e o token.

- No seu assistente, acrescente um servidor MCP do tipo HTTP com o endereço (tem este aspeto: `http://127.0.0.1:47615/mcp`) e o cabeçalho `Authorization: Bearer <token>`. O Studio mostra as definições a colar.

{{ui:Novo token}} no Studio faz com que todos os assistentes ligados voltem a ligar-se com o novo token. Nunca partilhe o token: quem o tiver pode usar as aplicações que ativou, enquanto o Studio estiver em execução.

:::note
Um separador do navegador não consegue abrir uma ligação para um assistente: nas aplicações do navegador o interruptor não tem efeito até usar o CadCraft Studio no seu computador.
:::

## Continua no controlo

- **Cada ação é um passo de anulação**, com o nome do assistente para ela, por exemplo «Assistente: LINE». Prima {{key:Mod+Z}} para anular a última ação do assistente por completo.
- **Vê o que ele faz.** Os comandos dele aparecem no histórico de comandos com **[Assistente]** à frente, e o desenho é redesenhado à medida que trabalha.
- **Espera por si.** Enquanto estiver a meio de um comando, o assistente pode ler mas não alterar o desenho; é-lhe dito que volte a tentar quando terminar.
- **Sabe-se quando há um ligado.** Um botão na barra de aplicações indica o nome do assistente enquanto estiver ligado. Clique nele para ver o que pode fazer, ou para o **Desligar**.
- **Atividade.** {{ui:Definições}} › {{ui:CadCraft}} › {{ui:Assistentes}} › {{ui:Atividade}} lista cada chamada: quando, que ferramenta, concluída ou recusada, e o passo de anulação que criou. {{ui:Guardar o registo}} guarda uma cópia.

## O que um assistente pode pedir

| Ferramenta | Permissão | O que faz |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Ler | O nome do desenho, unidades, camadas, blocos, folhas; o que está no ecrã |
| `files_list`, `drawing_open` | Ler | Studio: os ficheiros das suas pastas; abre um deles nesta janela |
| `objects_list`, `object_get`, `selection_get` | Ler | Objetos com a sua geometria, comprimento e área (ou só quantos, por tipo e camada); a seleção |
| `drawing_check` | Ler | Regras como as camadas permitidas, nada na camada 0, cores PorCamada, alturas de texto |
| `view_screenshot` | Ler | Uma imagem do desenho tal como é mostrado |
| `command_run` | Editar | Escreve na linha de comandos: `LINE 0,0 @100,0 @0,50 ` é lido como se escrevesse (um espaço termina uma resposta), ou uma lista com uma resposta cada. Pode deixar um comando aberto e continuar na chamada seguinte |
| `script_run` | Editar | Um script (`.scr`) ou um ficheiro LISP, tal como o {{ui:APPLOAD}} o carrega |
| `block_insert` | Editar | Coloca um bloco com os valores dos seus atributos num único passo |
| `selection_set`, `undo` | Editar | Seleciona objetos para o comando seguinte; anula os seus próprios passos |
| `drawing_save` | Guardar | {{ui:Guardar}} do próprio CadCraft, ou {{ui:Guardar como}} numa das suas pastas |
| `drawing_plot` | Exportar | Um PDF ou SVG de uma folha ou do modelo, a uma escala ou ajustado (as sobreposições em PDF ainda não são impressas desta forma) |

Enquanto um assistente executa um comando, o CadCraft faz as perguntas na linha de comandos em vez de numa caixa de diálogo (por exemplo, se deve inserir um desenho inteiro ou um só bloco), para que o assistente lhe possa responder. A biblioteca e a {{ui:Pesquisar}} continuam a precisar de si; ao assistente é dito que lhe pergunte.

## Trabalhar com ficheiros sem abrir o CadCraft

O servidor MCP do CadCraft (`cadcraft-mcp`) e a linha de comandos (`cadcraft`) executam o código de desenho do próprio CadCraft em Node.js, sem janela. Precisam do Node.js 20 ou mais recente.

- **O servidor MCP** só funciona dentro das pastas que indicar, e só com as permissões que lhe der: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Sem `--root` não consegue abrir nenhum ficheiro; sem `--allow` só pode ler. Também consegue ler modelos IFC, medições de quantidades e as anotações de revisão nos conjuntos de PDF.
- **A linha de comandos** serve para os seus próprios scripts: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Vários ficheiros de uma vez: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Acrescente `--json` para uma saída que um programa consiga ler.

:::note
Se `npx @getcadcraft/mcp` indicar que o pacote não foi encontrado, é porque ainda não foi publicado. As novidades em getcadcraft.com dirão quando estiver disponível.
:::

## Se algo não funcionar

- **O assistente não vê ferramentas do CadCraft:** verifique se o interruptor está ativado nesta janela e se a janela está aberta no Studio.
- **«needs the edit permission»:** marque **Editar** em {{ui:Assistentes}} e pergunte de novo.
- **«outside the folders assistants may use»:** acrescente essa pasta em {{ui:Assistentes}} › {{ui:Pastas que podem utilizar}}, ou peça ao assistente que use um ficheiro numa pasta que já acrescentou.
- **Erros «401» ou «token»:** o token mudou (o Studio foi reiniciado, ou {{ui:Novo token}}). Copie o novo para as definições do assistente.
- **A alteração dele estava errada:** prima {{key:Mod+Z}}. Um toque anula um passo completo do assistente.

## Ver também

- [Receitas para assistentes de IA](common:assistants-recipes): exemplos práticos, cada um com as ferramentas que chama.
