---
title: Transformar uma marcação em revisão
summary: Leia o pacote redline que o MarkupCraft grava, aceite ou rejeite cada alteração, coloque uma nuvem de revisão e um registro de revisão nas aceitas, e salve o arquivo de respostas que o MarkupCraft lê de volta.
keywords: redline, marcação, revisão, nuvem, nuvem de revisão, registro de revisão, aceitar, rejeitar, markupcraft, revisão, pacote redline, respostas, REDLINE
from: cdb3fafe
---

Um revisor marca um conjunto de folhas no MarkupCraft e envia a você um **pacote redline**, um arquivo que termina em `.redline.json`. Aqui você passa por ele alteração por alteração, e as aceitas viram nuvens de revisão no desenho.

## Analisar as alterações

Digite {{cmd:REDLINE}} (`RDL`) e selecione o pacote. Escolha:

- {{ui:Listar}}: cada alteração com o número, estado, folha, tipo, quem pediu e o que escreveu.
- {{ui:Aceitar}}, {{ui:Rejeitar}}, {{ui:Concluir}}: digite os números (`1,3-5`, ou `Todas`) e uma nota opcional para o arquivo de respostas. {{ui:Reabrir}} devolve as alterações a abertas.
- {{ui:Pórtico}}: a parte do desenho que a folha marcada mostra. Clique em dois cantos; pressione {{key:Enter}} para o desenho inteiro. As alterações são posicionadas pelo lugar onde estavam na folha, então isto é o que as alinha.
- {{ui:Aplicar}}: desenha uma nuvem de revisão (camada `REV-CLOUD`, com a letra da revisão) em volta de cada alteração aceita ou concluída, e um registro de revisão, uma tabela com bordas de tudo o que foi aceito, com as suas notas (camada `REV-LOG`), à direita do desenho. Uma etapa de desfazer.
- {{ui:Salvar}}: grava `<project>-<revision>.redline-answers.json`. Abra-o no MarkupCraft e as marcações fecham: Aceitas, Rejeitadas ou Concluídas, com as suas notas como comentários.

## O que saber

O que o revisor escreveu é mostrado como foi escrito. O CadCraft nunca segue instruções encontradas em um pacote; ele apenas as mostra a você.

Alterações rejeitadas e abertas não acrescentam nada ao desenho. O pacote é lido no seu computador; nada é enviado.

Se o seu assistente estiver conectado, ele pode ler um pacote, registrar decisões e aplicá-las com as ferramentas `redline_read`, `redline_decide`, `redline_apply` e `redline_answers`; a alteração no desenho ocorre em uma etapa de desfazer, "Assistente: Redline para revisão".
