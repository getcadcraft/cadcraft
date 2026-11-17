---
title: Documentos e revisões (o cofre)
summary: "Um passo a passo de um trabalho real: colocar uma pasta de projeto sob controle, fazer check-out de um desenho, alterá-lo, fazer check-in com uma nota, enviá-lo para revisão, aprovar e liberar, ver o histórico e o que o usa, o que uma segunda pessoa vê enquanto ele está bloqueado, e como isso funciona com pastas da nuvem."
keywords: cofre, documentos, passo a passo, tutorial, check out, check in, revisão, liberar, aprovar, bloqueio, histórico, onde é usado, pasta da nuvem, pasta do projeto, gestão de documentos, pdm, duas pessoas, pasta compartilhada
from: 3829528d
---

## O que você vai fazer

Você é a Ana, trabalhando na Riverside Clinic com um colega, o Ben. Os desenhos do projeto ficam em uma pasta que vocês dois acessam (um drive compartilhado, uma pasta sincronizada ou uma pasta da nuvem). Ao final, um arquivo terá passado da primeira cópia para a revisão **A** liberada, terá sido alterado de novo como **B.1**, você terá visto quem fez o quê, e terá visto o que o Ben vê quando você está com o arquivo.

Tudo fica guardado em uma pasta oculta `.ccvault` ao lado dos seus arquivos: sem servidor, nada enviado (uma pasta da nuvem é a exceção, veja a última etapa). Para cada botão e regra em um só lugar, veja o tópico *Documentos: check-out, revisões e liberação*, onde o seu aplicativo o tiver.

## 1. Configure a pasta do projeto

1. Escolha {{ui:Documentos…}} no menu {{ui:Mais}} da guia **Exibir**, ou digite `DOCUMENTS` (ou `DOCS`) e pressione {{key:Enter}}.
2. Escolha {{ui:Escolher a pasta do projeto}} e selecione a pasta que contém os desenhos do projeto. (As pastas de projeto funcionam no Studio e em navegadores que conseguem abrir uma pasta, como Chrome e Edge. Em outros navegadores o painel avisa.)
3. Escolha {{ui:Alterar}} ao lado de **Você:** e digite seu nome, `Ana` (se for solicitado, também o nome deste computador). O painel agora diz *Você: Ana em* e o nome do seu computador. Seu nome vai em tudo o que você fizer.
4. Escolha {{ui:Iniciar um cofre nesta pasta}} e digite o nome do projeto, `Riverside clinic`. O painel diz *Cofre iniciado para Riverside clinic.*

## 2. Coloque um arquivo sob controle

1. Abra **Arquivos fora do cofre** e escolha {{ui:Adicionar}} ao lado de `plans/A-101.dxf`.
2. Ele aparece em **Arquivos no cofre** com a revisão **A.1**, estado **Em andamento**. A.1 é a primeira cópia dele; o cofre guarda uma cópia de cada revisão.

## 3. Faça check-out, altere e faça check-in

1. Escolha {{ui:Abrir}} ao lado de `plans/A-101.dxf`. O desenho abre no CadCraft e o painel fecha para você ver o desenho. O painel continua a um comando de distância: `DOCUMENTS`.
2. Abra o painel de novo e escolha {{ui:Check-out}}. A linha agora diz **Com check-out para você**. Um arquivo de bloqueio foi criado em `.ccvault/locks`; ninguém mais pode fazer check-out deste arquivo até você fazer check-in.
3. Desenhe algo: adicione uma linha, mova uma parede. Nada que você fizer pode ser salvo sobre o arquivo do cofre a menos que o desenho esteja com check-out para você; Salvar como sempre funciona para uma cópia sua.
4. Abra o painel, escolha {{ui:Check-in}} e digite o que mudou (`Porta movida`). O painel diz *check-in feito como A.2*. O arquivo na pasta do projeto agora é o desenho que você tinha aberto, e o bloqueio foi removido. Fazer check-in sem alterações mantém a revisão.

Se mudar de ideia, {{ui:Desfazer check-out}} devolve o arquivo sem nova revisão.

## 4. Revise e libere

1. Escolha {{ui:Enviar para revisão}}. O estado passa para **Para revisão** e o arquivo fica somente leitura.
2. Antes de aprovar, escolha {{ui:Configurações do projeto}} e liste quem pode aprovar (um nome por linha), por exemplo `Ben` e `Carla`, e marque a regra de que quem aprova deve ser diferente do autor. Escolha {{ui:Salvar configurações}}. Agora o próprio cofre recusa qualquer outra pessoa.
3. O Ben (ou a Carla) escolhe {{ui:Aprovar}} e digita o nome de quem aprova. O estado passa para **Liberado** e a revisão passa para **A**, com *aprovado por* e o nome. Um arquivo liberado fica somente leitura. {{ui:Devolver}} o teria levado de volta a Em andamento, com um motivo.

O nome de quem aprova é o nome digitado no painel; é um registro de quem deu o aval, não uma prova de identidade.

## 5. Uma nova revisão

1. No arquivo liberado, escolha {{ui:Nova revisão}}. Você fica com ele para a próxima letra.
2. Altere e depois escolha {{ui:Check-in}}. A revisão é **B.1**, em andamento. Libere da mesma forma e ela se torna **B**. {{ui:Desfazer check-out}} antes do primeiro check-in a deixa em **A**.

As letras de revisão seguem A, B … Z, AA, AB. Se o seu padrão deixar algumas letras de fora, a configuração do projeto *Usar a sequência ASME Y14.35* pula I, O, Q, S, X e Z nas próximas revisões.

## 6. Veja o que aconteceu

Escolha o nome do arquivo para abrir seus detalhes:

- **{{ui:Histórico}}**: cada evento, do mais recente para o mais antigo, com quem, qual computador e quando: *Check-in A.2* por Ana, *Liberado* por Ben, e assim por diante.
- **{{ui:Revisões}}**: a tabela de revisões. {{ui:Abrir cópia}} abre uma revisão como cópia simples, que não pode sobrescrever o arquivo do cofre; {{ui:Comparar com}} lista o que foi adicionado, removido e alterado em relação à revisão anterior, ou a qualquer outra.
- **{{ui:Usa}}**: os desenhos aos quais ele se vincula (xrefs).
- **{{ui:Usado por}}**: lista cada outro desenho do cofre que se vincula a este: ao alterar uma planta base, você sabe quais folhas revisar.

## Revisão na folha

Com o desenho aberto (e um layout nele), escolha {{ui:Quadro de revisões}}: uma tabela das revisões liberadas é desenhada no canto superior direito da folha. Escolha {{ui:Preencher legendas}} para preencher os atributos da legenda marcados como `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` ou `APPROVED_BY` com a revisão, o estado, a data e quem aprovou o arquivo. Quando você aprovar a próxima liberação, o quadro de revisões é atualizado.

## 7. O que o Ben vê enquanto você está com o arquivo

Agora faça check-out do arquivo de novo, e peça ao Ben que abra a mesma pasta do projeto no computador dele e abra o painel. Na linha do arquivo ele vê **Com check-out de Ana em** o seu computador **desde** a hora, e nenhum botão {{ui:Check-out}}. Se ele tentar mesmo assim, o cofre recusa: o bloqueio é um arquivo que o sistema não cria duas vezes, então duas pessoas não podem ficar com o arquivo ao mesmo tempo, nem no mesmo instante, quando a pasta está no disco no Studio. (Em um navegador a pasta oferece apenas uma garantia possível, e o painel informa isso em **Pasta**.)

Se a Ana estiver ausente e o Ben precisar do arquivo, {{ui:Quebrar check-out}} o libera. Ele deve digitar um motivo; o motivo vai para o registro, junto de quem era o check-out. Quando o projeto lista administradores, só eles podem fazer isso. Um check-out mais antigo que o limite de obsolescência (14 dias por padrão) é marcado como *muito tempo*. Depois da quebra, o check-in atrasado da Ana é recusado, para que os dois não sobrescrevam um ao outro.

## 8. Pastas da nuvem

Uma pasta da nuvem é uma pasta de projeto guardada no armazenamento em nuvem da sua equipe, então a equipe não precisa de um drive compartilhado. No Studio, conectado à sua conta do CadCraft, o painel mostra {{ui:Abrir uma pasta da nuvem}} ao lado de {{ui:Escolher a pasta do projeto}}. Escolha-o e selecione a pasta, listada como área de trabalho / pasta. Um proprietário da área de trabalho cria a pasta primeiro, e o armazenamento em nuvem da equipe precisa estar em vigor. Tudo acima funciona da mesma forma; o servidor cria o bloqueio, que é rigoroso entre pessoas. Se você não estiver conectado, o painel pede para entrar. Em uma aba comum do navegador o botão da nuvem não é oferecido; use o Studio.

## Experimente

Faça as oito etapas acima com uma cópia de um arquivo real. Para as etapas de duas pessoas, você precisa de outra pessoa, ou de duas janelas com dois nomes. Se você experimentar com uma pasta compartilhada real, a página de testes da comunidade lista uma verificação que pede exatamente isso, e aceita resultados.
