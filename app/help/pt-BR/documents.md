---
title: Documentos: check-out, revisões e liberação
summary: Mantenha os desenhos de uma pasta de projeto sob controle: faça o check-out de um arquivo para que ninguém mais o altere, faça o check-in como uma nova revisão, envie para revisão e libere com o nome de um aprovador; histórico, o que usa o quê, uma lista de materiais e legendas que mostram a revisão.
keywords: configurações do projeto, aprovadores, administradores, letras de revisão, ASME, somente leitura, comparar revisões, abrir cópia, partcraft, bimcraft, documentos, DOCUMENTS, DOCS, cofre, gerenciamento de documentos, pdm, check out, check in, checkout, checkin, bloqueio, revisão, rev, letra de revisão, liberação, liberado, aprovar, aprovação, revisão, obsoleto, onde é usado, bom, lista de materiais, legenda, quadro de revisões, pasta do projeto
from: ee938722
---

## O que você vai criar

Uma pasta de projeto em que cada desenho tem uma revisão (A.1, A.2 … depois A, B …) e um estado (Em andamento, Para revisão, Liberado, Obsoleto), em que apenas uma pessoa por vez pode alterar um arquivo, e em que cada check-out, check-in, aprovação e check-out quebrado fica registrado com quem fez e quando.

Tudo fica guardado na própria pasta, em uma pasta oculta `.ccvault` ao lado dos seus desenhos. Uma pasta em unidade de rede compartilhada ou uma pasta sincronizada funciona para a equipe inteira. Não há servidor e nada é enviado.

## Abrir Documentos

Digite `DOCUMENTS` (ou `DOCS`) e pressione {{key:Enter}}. O painel abre ao lado do desenho.

Escolha {{ui:Choose the project folder}} e selecione a pasta que contém os desenhos do projeto. Pastas de projeto funcionam no CadCraft Studio e em navegadores que conseguem abrir uma pasta (Chrome, Edge). Em outros navegadores, o painel informa isso.

Na primeira vez, digite seu nome (ele vai em tudo o que você fizer) e o nome deste computador. Se você estiver conectado, seu nome já estará preenchido.

## Iniciar um cofre

Uma pasta que ainda não é um cofre oferece {{ui:Start a vault in this folder}}. Digite o nome do projeto. Depois, abra {{ui:Files not in the vault}} e escolha {{ui:Add}} ao lado de cada arquivo que deseja colocar sob controle. Um arquivo que você adiciona começa na revisão **A.1**, Em andamento.

## Alterar um desenho

1. Escolha {{ui:Open}} ao lado de um desenho. Ele abre no CadCraft. Se ele não estiver com check-out para você, apenas consulte e não altere: o {{ui:Save}} se recusa a sobrescrevê-lo e informa o motivo (use {{ui:Save as}} para manter uma cópia sua).
2. Escolha {{ui:Check out}}. Ninguém mais pode fazer check-out dele agora; o painel mostra quem o tem, em qual computador e desde quando.
3. Desenhe.
4. Escolha {{ui:Check in}} e informe o que mudou. O desenho aberto é salvo na pasta do projeto no próprio formato e se torna a próxima revisão (A.1, depois A.2). Fazer check-in sem nenhuma alteração mantém a revisão.

{{ui:Undo check-out}} devolve o arquivo sem criar uma nova revisão.

## Revisão e liberação

- {{ui:Send for review}}: o arquivo fica somente leitura enquanto é revisado.
- {{ui:Approve}}: digite o nome do aprovador. A.3 passa a ser **A**, Liberado. Arquivos liberados ficam somente leitura.
- {{ui:Send back}}: volta para Em andamento, com o motivo.
- {{ui:New revision}} em um arquivo liberado faz o check-out para a próxima letra: o primeiro check-in dele será **B.1**. {{ui:Undo check-out}} antes disso o deixa em A.
- {{ui:Make obsolete}} aposenta um arquivo liberado.

Um projeto pode manter uma lista de quem pode aprovar e pode exigir que o aprovador não seja a pessoa que fez o check-in do arquivo (veja Configurações do projeto abaixo).

## Configurações do projeto

Abra {{ui:Project settings}} no painel:

- **Aprovadores**: um nome por linha. Quando há algum, somente eles podem aprovar uma liberação.
- **O aprovador deve ser outra pessoa que não o autor**: a regra dos "quatro olhos".
- **Administradores**: um nome por linha. Quando há algum, somente eles podem quebrar o check-out de outra pessoa ou alterar estas configurações.
- **Letras de revisão a omitir**: {{ui:Use the ASME Y14.35 sequence}} pula I, O, Q, S, X e Z, ou digite as letras que você preferir. Letras já atribuídas permanecem; a escolha vale para as próximas revisões.
- **Um check-out é considerado antigo após**: o número de dias (14 por padrão).

Escolha {{ui:Save settings}}. A alteração é registrada no log com quem a fez.

## Alguém deixou um arquivo com check-out

{{ui:Break check-out}} libera um arquivo que outra pessoa tem em check-out (ela está ausente, ou o computador dela parou de funcionar). Você precisa digitar um motivo: ele é registrado no log junto com a informação de de quem era o check-out. Quando o projeto tem administradores, somente eles podem fazer isso. Um check-out com mais de 14 dias é marcado como de longa duração.

## Histórico, revisões, usos, usado por

Escolha o nome de um arquivo para ver:

- {{ui:History}}: todos os eventos, do mais recente para o mais antigo, com quem, qual computador e quando.
- {{ui:Revisions}}: cada revisão mantida. Uma cópia de cada revisão fica no cofre (o mesmo conteúdo é guardado uma única vez). {{ui:Open copy}} abre essa revisão como uma cópia comum que não pode sobrescrever o arquivo do cofre. {{ui:Compare with}} lista o que foi adicionado, removido e alterado entre essa revisão e a anterior (ou qualquer outra que você escolher), e destaca isso no desenho.
- {{ui:Uses}}: os desenhos aos quais ele se vincula (xrefs), os documentos que um modelo IFC aponta, as peças de uma montagem do PartCraft.
- {{ui:Used by}}: todos os arquivos do cofre que usam este.

{{ui:Bill of materials (CSV)}} salva a lista de tudo o que um arquivo usa, nível por nível, com quantidades, revisões e estados, para uma planilha.

## Quadro de revisões na folha

Com um desenho aberto que tenha um layout, escolha {{ui:Revision block}}. Uma tabela com as revisões liberadas (revisão, data, por, aprovado, descrição) é desenhada no canto superior direito da folha que você está visualizando. Quando você aprova uma liberação, a tabela é atualizada.

## Revisão na legenda

Dê a um dos atributos da sua legenda uma destas etiquetas e escolha {{ui:Fill title blocks}} no desenho aberto:

| Etiqueta | Preenchido com |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | a revisão (B, ou B.2 enquanto está em andamento) |
| `VAULT.STATE` | o estado (Liberado …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | a data da última revisão |
| `VAULT.APPROVER`, `APPROVED_BY` | quem aprovou a última liberação |

## PartCraft e BimCraft

PartCraft e BimCraft têm o mesmo painel Documentos para os próprios arquivos: peças e montagens no PartCraft, modelos IFC no BimCraft. O check-in salva o modelo aberto na pasta do projeto, e uma montagem mostra quais peças ela usa e uma lista de materiais.

## Bom saber

- Duas pessoas na mesma pasta compartilhada não podem fazer check-out do mesmo arquivo ao mesmo tempo: o check-out é um arquivo que o sistema se recusa a criar duas vezes. Em um navegador, e em um Studio cujo shell é mais antigo que este recurso, a restrição é tão forte quanto a pasta permitir: dois check-outs no mesmo instante podem ser bem-sucedidos. O painel informa qual dos casos se aplica.
- Não edite nem apague a pasta `.ccvault` manualmente. O log dentro dela é o registro; o cofre reconstrói a sua lista a partir dele, se necessário.
- Alterar um arquivo na pasta sem fazer check-out é mostrado como {{ui:Changed in the folder without a check-out}}.
