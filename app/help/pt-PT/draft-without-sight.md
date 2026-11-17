---
title: Desenhar sem ver
summary: Ative o Acesso e o CadCraft diz cada comando e resultado através do seu leitor de ecrã, descreve o desenho e o que está perto do cursor, deixa-o mover o cursor com o teclado, toca um som para cada snap e grip, e aceita comandos por voz quando o seu navegador o consegue fazer no seu computador.
keywords: acessibilidade, leitor de ecrã, cego, visão reduzida, NVDA, VoiceOver, JAWS, Orca, cursor do teclado, comandos por voz, fala, sons, sons de snap, descrever desenho, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Acesso** permite-lhe desenhar sem ver o ecrã. Está desativado até o ativar, para que ninguém o ative por engano.

## Ativar

Abra **Definições** (a engrenagem, ou Ctrl+,), encontre **Desenho sem ver** e escolha **Ligado**. Ou escreva `ACCESS` na linha de comandos e responda `On`. Fica memorizado neste computador.

Com o Acesso ligado:

- **Tudo o que a linha de comandos mostra é lido** pelo seu leitor de ecrã: o que escreveu, a pergunta que faz, a resposta e cada erro. O CadCraft usa as suas próprias regiões dinâmicas, de prioridade normal e urgente, por isso um leitor de ecrã que lê regiões dinâmicas não precisa de configuração. Erros e cancelamentos interrompem; tudo o resto espera a sua vez.
- **A área de desenho é acessível.** Prima Tab até ouvir « Desenho », ou prima Shift+Tab a partir da linha de comandos. É uma região que transmite as teclas ao CadCraft.

## Teclas no desenho

| Tecla | O que faz |
|---|---|
| Teclas de seta | Movem o cursor do teclado. Um passo é cerca de uma centésima do que o ecrã mostra, arredondado a 1, 2 ou 5. Shift move dez vezes mais, Ctrl a décima parte. |
| Enter | Escolhe o ponto sob o cursor, exatamente como um clique. |
| Space | Prima Enter na linha de comandos: termina LINE, aceita a predefinição. |
| Tab, Shift+Tab | Salta para o ponto de snap seguinte ou anterior perto do cursor, o mais próximo primeiro. |
| G | Percorre os grips dos objetos selecionados. |
| D | Descreve o desenho: quantos objetos, de que tipo, de que tamanho, o que está selecionado. |
| W | Diz onde está o cursor e a que distância está do último ponto. |
| N | Diz o que está perto do cursor, o mais próximo primeiro, com a distância e o lado. |
| S | Descreve os objetos selecionados. |
| R | Repete a última coisa dita. |
| V | Voz ligada ou desligada. |
| / | Vai para a linha de comandos. |
| ? | Lista estas teclas. |

Ao mover com as teclas, diz onde ficou. Quando um comando está à espera de um ponto, diz também a que distância e em que direção está do último ponto, por exemplo « 2400 do último ponto, para a direita, a 0 graus ».

## Comandos

- {{cmd:ACCESS}} liga ou desliga o Acesso, os sons de snap e a voz, e diz o estado.
- {{cmd:DESCRIBE}} diz o que o desenho contém.
- {{cmd:WHEREAMI}} diz onde está o cursor.
- {{cmd:NEARBY}} diz o que está perto do cursor.
- {{cmd:SAYSEL}} diz o que está selecionado, uma frase por objeto.
- {{cmd:VOICE}} liga ou desliga os comandos por voz.

Estes cinco leem o desenho e apresentam uma resposta; não alteram nada.

## Sons para snaps e grips

Ative **Sons de snap e grip** nas Definições. Cada tipo de snap tem o seu próprio tom e som, para distinguir um extremo de um ponto médio, de um centro, de uma interseção e dos restantes, e um grip tem um duplo toque. O som desloca-se para a esquerda ou para a direita, acompanhando o cursor no ecrã. Os sons são produzidos no seu computador; nada é transferido.

## Comandos por voz

Ative **Comandos por voz** nas Definições. Diga o nome de um comando (« line », « circle », « move »), depois diga os números como os leria: « point three hundred comma four hundred », « distance twelve hundred », « angle forty five ». « Enter », « cancel », « undo » e « redo » fazem o que dizem. O que foi ouvido é repetido em voz alta, e uma frase que não é um comando é assinalada, não adivinhada.

**Onde a fala é reconhecida.** O CadCraft não tem serviço de voz próprio e não envia áudio para lado nenhum. Pede ao navegador que reconheça a fala neste computador. Se o navegador o conseguir, a opção é **Neste computador** e nenhum áudio sai dele. Se não conseguir, a voz fica desligada, a menos que escolha **Serviço online do navegador**, que deixa o navegador enviar áudio para o serviço de voz do respetivo fabricante. As Definições indicam qual se aplica antes de decidir.

## O que ainda não faz

- Só o CadCraft tem Acesso. As outras sete aplicações seguem-se, com as mesmas teclas e sons.
- O texto de um desenho (uma nota, um nome de bloco) é lido tal como está escrito; nunca é tomado como uma instrução.
- Foi testado com verificações sintéticas e com os testes do navegador; as verificações manuais com NVDA, VoiceOver e um testador cego ou de visão reduzida ainda estão por fazer. Se o experimentar, diga-nos o que falta.
