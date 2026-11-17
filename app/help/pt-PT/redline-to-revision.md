---
title: Transformar uma anotação numa revisão
summary: Leia o pacote redline que o MarkupCraft escreve, aceite ou rejeite cada alteração, coloque uma nuvem de revisão e um registo de revisões nas alterações aceites, e guarde o ficheiro de respostas que o MarkupCraft lê de volta.
keywords: redline, anotação, revisão, nuvem, nuvem de revisão, registo de revisões, aceitar, rejeitar, markupcraft, rever, pacote redline, respostas, REDLINE
from: cdb3fafe
---

Um revisor anota um conjunto de plantas no MarkupCraft e envia-lhe um **pacote redline**, um ficheiro que termina em `.redline.json`. Aqui percorre-o alteração a alteração, e as aceites tornam-se nuvens de revisão no desenho.

## Percorrer as alterações

Escreva {{cmd:REDLINE}} (`RDL`) e escolha o pacote. Escolha:

- {{ui:Listar}}: cada alteração com o seu número, estado, folha, tipo, quem pediu e o que escreveu.
- {{ui:Aceitar}}, {{ui:Rejeitar}}, {{ui:Concluir}}: escreva os números (`1,3-5`, ou `All`) e uma nota opcional para o ficheiro de respostas. {{ui:Reabrir}} volta a pôr as alterações como abertas.
- {{ui:Pórtico}}: a parte do desenho que a folha anotada mostra. Clique em dois cantos; prima {{key:Enter}} para o desenho inteiro. As alterações são colocadas consoante onde estavam na folha, por isso é isto que as alinha.
- {{ui:Aplicar}}: desenha uma nuvem de revisão (camada `REV-CLOUD`, com a letra da revisão) à volta de cada alteração aceite ou concluída, e um registo de revisões, uma tabela com as linhas do que foi aceite e as suas notas (camada `REV-LOG`), à direita do desenho. Um só passo de anulação.
- {{ui:Guardar}}: escreve `<project>-<revision>.redline-answers.json`. Abra-o no MarkupCraft e as anotações fecham-se: Aceite, Rejeitada ou Concluída, com as suas notas como comentários.

## O que saber

O que o revisor escreveu é mostrado tal como foi escrito. O CadCraft nunca segue instruções encontradas num pacote; apenas as mostra.

As alterações rejeitadas e abertas não acrescentam nada ao desenho. O pacote é lido no seu computador; nada é enviado.

Se o seu assistente estiver ligado, pode ler um pacote, registar decisões e aplicá-las com as ferramentas `redline_read`, `redline_decide`, `redline_apply` e `redline_answers`; a alteração no desenho é um só passo de anulação, "Assistente: Redline para revisão".
