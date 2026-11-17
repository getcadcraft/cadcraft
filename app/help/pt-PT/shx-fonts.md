---
title: Desenhar texto com as suas fontes SHX
summary: Dar ao CadCraft uma pasta de fontes SHX (ou escolher os ficheiros) e os estilos de texto que as nomeiam são desenhados com elas, no ecrã e numa impressão ou PDF, com a altura, o fator de largura e a inclinação do estilo.
keywords: shx, fontes, fonte, fonte de formas, big font, bigfont, unifont, legado, persa, farsi, árabe, estilo de texto, fonte em falta, fonte substituída, SHXFONTS, pasta, inverter, ordem visual, simplex, isocp
from: 14b0a4ab
---

Desenhos de outros programas costumam nomear **fontes SHX** nos seus estilos de texto, e um DWG não as inclui. Sem a fonte, o CadCraft desenha esse texto com o seu próprio tipo de letra, o que serve para texto latino comum mas não para fontes antigas que associam códigos de caracteres simples a outras formas de letras, como as anotações persas em formato legado.

Dê ao CadCraft as fontes, e ele desenha o texto com elas.

## Carregar as suas fontes

Escreva {{cmd:SHXFONTS}} (`SHX`) e escolha:

- {{ui:Pasta}} (CadCraft Studio): escolha uma pasta. Cada ficheiro `.shx` nela é lido agora, e de novo sempre que o CadCraft arranca.
- {{ui:Ficheiros}} (no navegador): escolha um ou vários ficheiros `.shx`. Ficam guardados neste navegador e nunca são enviados.
- {{ui:Listar}}: as fontes carregadas, e as que o desenho aberto nomeia mas que não carregou.
- {{ui:Remover}} e {{ui:Limpar}}: esquece uma fonte, ou todas.

O CadCraft não pode incluir fontes de terceiros, por isso nunca as traz: vêm de si. Um desenho apenas nomeia as suas fontes e não guarda nenhuma cópia delas.

## O que acontece

O nome da fonte de um estilo de texto é associado a uma fonte carregada pelo nome, sem distinguir maiúsculas, a pasta e `.shx` (`SIMPLEX.SHX` encontra `simplex`). Um texto nesse estilo é desenhado como linhas, no ecrã, numa impressão e num PDF, no seu próprio lugar, altura, rotação, fator de largura e ângulo de inclinação. A sua largura é a da própria fonte, por isso o alinhamento {{ui:Centro}} e {{ui:Direita}}, a quebra de linha e a seleção correspondem ao que vê. Um estilo cuja fonte não está carregada mantém o tipo de letra incorporado, e quando abre um desenho que nomeia fontes que não carregou, a linha de comandos diz isso.

O estilo Standard também conta: um desenho cujo estilo Standard nomeia uma fonte própria mantém-na.

## Fontes já em ordem visual

Muitas fontes SHX persas e árabes antigas trazem letras já formadas para o ecrã e desenhadas da esquerda para a direita, por isso um texto escrito em ordem lógica sai ao contrário. Escreva {{cmd:SHXFONTS}}, escolha {{ui:Inverter}} e indique o nome da fonte: o seu texto passa a ser disposto com a última letra primeiro. Execute de novo para desfazer. A opção pertence à fonte, fica guardada neste navegador e não é gravada no desenho.

## O que ainda não está coberto

- Texto com códigos de formatação em linha (cores, pilhas num MTEXT) mantém o tipo de letra incorporado.
- As big fonts (do tipo de dois bytes) preenchem os códigos que a fonte principal não tem, mas um texto numa página de códigos da Ásia Oriental que o CadCraft já converteu para Unicode não é associado de volta aos códigos de dois bytes da fonte.
- O leitor de fontes segue a descrição publicada do formato e foi testado com fontes feitas para o CadCraft. Se uma das suas desenhar mal, envie-nos a fonte e o desenho.
