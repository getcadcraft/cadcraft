---
title: Desenho sem visão
summary: Ligue o Acesso e o CadCraft fala cada comando e resultado pelo seu leitor de tela, descreve o desenho e o que está perto do cursor, permite mover o cursor com o teclado, toca um som para cada snap e grip, e aceita comandos por voz quando o seu navegador consegue fazer isso no seu computador.
keywords: acessibilidade, leitor de tela, cego, baixa visão, NVDA, VoiceOver, JAWS, Orca, cursor do teclado, comandos por voz, fala, sons, sons de snap, descrever desenho, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Acesso** permite desenhar sem ver a tela. Ele fica desligado até você ligá-lo, para que ninguém o ative por acidente.

## Ligar

Abra **Configurações** (a engrenagem, ou Ctrl+,), encontre **Desenho sem visão** e escolha **Ligado**. Ou digite `ACCESS` na linha de comando e responda `On`. A opção fica lembrada neste computador.

Com o Acesso ligado:

- **Tudo o que a linha de comando mostra é falado** pelo seu leitor de tela: o que você digitou, o prompt que ele faz, a resposta e cada erro. O CadCraft usa suas próprias regiões ativas, educadas e urgentes, então um leitor de tela que lê regiões ativas não precisa de nenhuma configuração. Erros e cancelamentos interrompem; o restante espera sua vez.
- **A área de desenho é acessível.** Pressione Tab até ouvir "Desenho", ou pressione Shift+Tab a partir da linha de comando. É uma região que repassa as teclas para o CadCraft.

## Teclas no desenho

| Tecla | O que faz |
|---|---|
| Teclas de seta | Movem o cursor do teclado. Cada passo é cerca de um centésimo do que a tela mostra, arredondado para 1, 2 ou 5. Shift move dez vezes mais, Ctrl um décimo. |
| Enter | Escolhe o ponto sob o cursor, exatamente como um clique faria. |
| Espaço | Pressiona Enter na linha de comando: finaliza LINE, aceita o padrão. |
| Tab, Shift+Tab | Vão para o próximo ou o anterior ponto de snap próximo ao cursor, do mais próximo para o mais distante. |
| G | Percorre os grips dos objetos selecionados. |
| D | Descreve o desenho: quantos objetos, de qual tipo, de que tamanho, o que está selecionado. |
| W | Diz onde está o cursor e a que distância ele está do último ponto. |
| N | Diz o que está perto do cursor, do mais próximo para o mais distante, com a distância e o lado. |
| S | Descreve os objetos selecionados. |
| R | Repete a última coisa dita. |
| V | Liga ou desliga a voz. |
| / | Vai para a linha de comando. |
| ? | Lista estas teclas. |

Mover-se com as teclas informa onde você parou. Quando um comando está aguardando um ponto, ele também diz a que distância você está do último ponto e em qual direção, por exemplo "2400 do último ponto, para a direita, a 0 graus".

## Comandos

- {{cmd:ACCESS}} liga ou desliga o Acesso, os sons de snap e a voz, e informa o estado.
- {{cmd:DESCRIBE}} diz o que o desenho contém.
- {{cmd:WHEREAMI}} diz onde está o cursor.
- {{cmd:NEARBY}} diz o que está próximo ao cursor.
- {{cmd:SAYSEL}} diz o que está selecionado, uma frase por objeto.
- {{cmd:VOICE}} liga ou desliga os comandos falados.

Esses cinco leem o desenho e exibem uma resposta; eles não alteram nada.

## Sons para snaps e grips

Ligue **Sons de snap e grip** em Configurações. Cada tipo de snap tem seu próprio tom e som, para que você distinga uma extremidade de um ponto médio, de um centro, de uma interseção e dos demais; e um grip tem um duplo toque. O som se desloca para a esquerda ou para a direita para acompanhar o cursor pela tela. Os sons são gerados no seu computador; nada é baixado.

## Comandos por voz

Ligue **Comandos por voz** em Configurações. Diga o nome de um comando ("line", "circle", "move") e depois diga os números como você os leria: "ponto trezentos vírgula quatrocentos", "distância mil e duzentos", "ângulo quarenta e cinco". "Enter", "cancelar", "desfazer" e "refazer" fazem o que dizem. O que foi ouvido é repetido em voz alta, e uma frase que não é um comando é informada, não adivinhada.

**Onde a fala é reconhecida.** O CadCraft não tem serviço de fala próprio e não envia áudio para lugar nenhum. Ele pede ao seu navegador que reconheça a fala neste computador. Se o seu navegador conseguir, a opção é **Neste computador** e nenhum áudio sai dele. Se não conseguir, a voz fica desligada, a menos que você escolha **Serviço online do navegador**, que permite ao navegador enviar o áudio ao serviço de fala do fabricante. As Configurações informam qual se aplica antes que você decida.

## O que ainda não faz

- Somente o CadCraft tem Acesso. Os outros sete aplicativos virão depois, com as mesmas teclas e sons.
- O texto de um desenho (uma nota, o nome de um bloco) é lido como está escrito; nunca é tratado como uma instrução.
- Foi testado com verificações sintéticas e com os testes do navegador; verificações manuais com NVDA, VoiceOver e um testador cego ou com baixa visão ainda estão por vir. Se você experimentar, conte-nos o que está faltando.
