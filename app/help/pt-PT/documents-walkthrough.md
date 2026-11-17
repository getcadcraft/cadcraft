---
title: Documentos e revisões (o cofre)
summary: "Um percurso passo a passo por um trabalho real: pôr uma pasta de projeto sob controlo, fazer check-out de um desenho, alterá-lo, fazer check-in com uma nota, enviá-lo para revisão, aprová-lo e libertá-lo, ver o histórico e o que o utiliza, o que a segunda pessoa vê enquanto está bloqueado, e como funciona com pastas na nuvem."
keywords: cofre, documentos, percurso, tutorial, check-out, check-in, revisão, libertar, aprovar, bloquear, histórico, onde é utilizado, pasta na nuvem, pasta de projeto, gestão documental, pdm, duas pessoas, pasta partilhada
from: 3829528d
---

## O que vai fazer

É a Ana, a trabalhar na Riverside Clinic com um colega, o Ben. Os desenhos do projeto estão numa só pasta a que ambos têm acesso (uma unidade partilhada, uma pasta sincronizada ou uma pasta na nuvem). No fim, um ficheiro terá passado da primeira cópia para a revisão **A** libertada, terá sido alterado outra vez como **B.1**, terá visto quem fez o quê, e terá visto o que o Ben vê quando é a Ana quem tem o ficheiro.

Tudo fica guardado numa pasta oculta `.ccvault` ao lado dos seus ficheiros: sem servidor, nada é enviado (uma pasta na nuvem é a exceção, veja o último passo). Para todos os botões e regras num só sítio, veja o tópico *Documentos: check-out, revisões e libertação*, onde a sua aplicação o tiver.

## 1. Preparar a pasta do projeto

1. Escolha {{ui:Documentos…}} no menu {{ui:Mais}} do separador **Ver**, ou escreva `DOCUMENTS` (ou `DOCS`) e prima {{key:Enter}}.
2. Escolha {{ui:Escolher a pasta do projeto}} e selecione a pasta que contém os desenhos do projeto. (As pastas de projeto funcionam no Studio e em navegadores que podem abrir uma pasta, como o Chrome e o Edge. Noutros navegadores, o painel avisa disso.)
3. Escolha {{ui:Alterar}} ao lado de **Utilizador:** e escreva o nome, `Ana` (se o pedir, também o nome deste computador). O painel passa a dizer *Utilizador: Ana em* e o nome do computador. O nome fica em tudo o que fizer.
4. Escolha {{ui:Criar um cofre nesta pasta}} e escreva o nome do projeto, `Riverside clinic`. O painel diz *Cofre criado para Riverside clinic.*

## 2. Pôr um ficheiro sob controlo

1. Abra **Ficheiros que não estão no cofre** e escolha {{ui:Adicionar}} ao lado de `plans/A-101.dxf`.
2. Aparece em **Ficheiros no cofre** na revisão **A.1**, estado **Trabalho em curso**. A.1 é a primeira cópia; o cofre guarda uma cópia de cada revisão.

## 3. Fazer check-out, alterar e fazer check-in

1. Escolha {{ui:Abrir}} ao lado de `plans/A-101.dxf`. O desenho abre no CadCraft e o painel fecha-se para o deixar ver. O painel continua a um comando de distância: `DOCUMENTS`.
2. Abra o painel outra vez e escolha {{ui:Check-out}}. A linha passa a dizer **Em check-out por Ana**. Fica um ficheiro de bloqueio na pasta `.ccvault/locks`; ninguém mais pode fazer check-out deste ficheiro até ao check-in.
3. Desenhe algo: acrescente uma linha, mova uma parede. Nada que faça pode ser guardado por cima do ficheiro do cofre, a menos que o desenho esteja em check-out com este utilizador; Guardar como funciona sempre para uma cópia própria.
4. Abra o painel, escolha {{ui:Check-in}} e escreva o que mudou (`Moveu a porta`). O painel diz *Check-in feito como A.2.* O ficheiro na pasta do projeto é agora o desenho que tinha aberto, e o bloqueio desaparece. Fazer check-in sem alterações mantém a revisão.

Se mudar de ideias, {{ui:Anular check-out}} devolve o ficheiro sem uma nova revisão.

## 4. Rever e libertar

1. Escolha {{ui:Enviar para revisão}}. O estado passa a **Para revisão** e o ficheiro fica só de leitura.
2. Antes de aprovar, escolha {{ui:Definições do projeto}} e indique quem pode aprovar (um nome por linha), por exemplo `Ben` e `Carla`, e marque a regra de que quem aprova tem de ser diferente do autor. Escolha {{ui:Guardar definições}}. A partir daí, o próprio cofre recusa qualquer outra pessoa.
3. O Ben (ou a Carla) escolhe {{ui:Aprovar}} e escreve o nome de quem aprova. O estado passa a **Libertado** e a revisão passa a **A**, com *aprovado por* e o nome. Um ficheiro libertado fica só de leitura. A opção {{ui:Devolver}} teria-o devolvido a Trabalho em curso, com um motivo.

O nome de quem aprova é o nome escrito no painel; é um registo de quem assinou, não uma prova de identidade.

## 5. Uma nova revisão

1. No ficheiro libertado, escolha {{ui:Nova revisão}}. Fica reservada para a letra seguinte.
2. Altere-o e depois escolha {{ui:Check-in}}. A revisão é **B.1**, trabalho em curso. Liberte-a da mesma forma e passa a **B**. {{ui:Anular check-out}} antes do primeiro check-in deixa-a em **A**.

As letras de revisão seguem A, B … Z, AA, AB. Se a sua norma deixar algumas letras de fora, a definição do projeto *Usar a sequência ASME Y14.35* salta I, O, Q, S, X e Z nas revisões seguintes.

## 6. Ver o que aconteceu

Escolha o nome do ficheiro para abrir os seus detalhes:

- **{{ui:Histórico}}**: cada evento, do mais recente para o mais antigo, com quem, em que computador e quando: *Check-in feito como A.2* por Ana, *Libertado* por Ben, e assim por diante.
- **{{ui:Revisões}}**: a tabela de revisões. {{ui:Abrir cópia}} abre uma revisão como cópia simples, que não pode sobrepor o ficheiro do cofre; {{ui:Comparar com}} lista o que foi acrescentado, removido e alterado em relação à revisão anterior, ou a qualquer outra.
- **{{ui:Utiliza}}**: os desenhos a que liga (xrefs).
- **{{ui:Utilizado por}}**: lista cada outro desenho do cofre que liga a este: se alterar uma planta base, sabe que folhas verificar.

## Revisão na folha

Com o desenho aberto (e com um layout), escolha {{ui:Quadro de revisões}}: uma tabela das revisões libertadas é desenhada no canto superior direito da folha. Escolha {{ui:Preencher legendas}} para preencher os atributos da legenda marcados com `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` ou `APPROVED_BY` com a revisão, o estado, a data e quem aprovou o ficheiro. Quando aprovar a libertação seguinte, o quadro de revisões fica atualizado.

## 7. O que o Ben vê enquanto é a Ana quem tem o ficheiro

Agora faça check-out do ficheiro outra vez, e peça ao Ben que abra a mesma pasta de projeto no computador dele e abra o painel. Na linha do ficheiro ele vê **Em check-out por Ana** no computador **desde** a hora, e não há botão {{ui:Check-out}}. Se tentar mesmo assim, o cofre recusa: o bloqueio é um ficheiro que o sistema não cria duas vezes, por isso duas pessoas não podem ter o ficheiro ao mesmo tempo, mesmo no mesmo instante, quando a pasta está em disco no Studio. (Num navegador, a pasta só garante o que é possível, e o painel diz isso em **Pasta**.)

Se a Ana estiver ausente e o Ben precisar do ficheiro, {{ui:Quebrar check-out}} liberta-o. Ele tem de escrever um motivo; fica no registo com quem tinha o check-out. Quando o projeto lista administradores, só eles podem fazê-lo. Um check-out mais antigo do que o limite de desatualização (14 dias por predefinição) fica marcado como *há muito tempo*. Depois da quebra, o check-in atrasado da Ana é recusado, para que nenhum dos dois sobreponha o trabalho do outro.

## 8. Pastas na nuvem

Uma pasta na nuvem é uma pasta de projeto guardada no armazenamento na nuvem da equipa, por isso a equipa não precisa de uma unidade partilhada. No Studio, com sessão iniciada na conta do CadCraft, o painel mostra {{ui:Abrir uma pasta na nuvem}} ao lado de {{ui:Escolher a pasta do projeto}}. Escolha-o e selecione a pasta, listada como espaço de trabalho / pasta. Um proprietário do espaço de trabalho cria primeiro a pasta, e o armazenamento na nuvem da equipa tem de estar em vigor. Tudo o que está acima funciona da mesma forma; o servidor faz o bloqueio, que é rigoroso entre pessoas. Se não tiver sessão iniciada, o painel pede para o fazer. Num separador de navegador comum, o botão da nuvem não aparece; use o Studio.

## Experimente

Faça os oito passos acima com uma cópia de um ficheiro real. Para os passos a duas pessoas, precisa de outra pessoa, ou de duas janelas com dois nomes. Se o fizer com uma pasta partilhada real, a página de testes da comunidade tem uma verificação que pede exatamente isto, e aceita resultados.
