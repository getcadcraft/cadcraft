---
title: Desenhar texto com suas próprias fontes SHX
summary: Dê ao CadCraft uma pasta de fontes SHX (ou escolha os arquivos) e os estilos de texto que as citam são desenhados com elas, na tela e em uma plotagem ou PDF, com a altura, o fator de largura e a inclinação do estilo.
keywords: shx, fontes, fonte, fonte de formas, big font, bigfont, unifont, legado, persa, farsi, árabe, estilo de texto, fonte ausente, fonte substituída, SHXFONTS, pasta, inverter, ordem visual, simplex, isocp
from: 14b0a4ab
---

Desenhos de outros programas costumam citar **fontes SHX** em seus estilos de texto, e um DWG não as contém. Sem a fonte, o CadCraft desenha esse texto com a sua própria face. Isso é adequado para texto latino comum, mas não para fontes antigas que associam códigos de caracteres simples a outras formas de letras, como as anotações persas antigas.

Forneça as fontes ao CadCraft, e ele desenhará o texto com elas.

## Carregar suas fontes

Digite {{cmd:SHXFONTS}} (`SHX`) e escolha:

- {{ui:Pasta}} (CadCraft Studio): escolha uma pasta. Cada arquivo `.shx` nela é lido agora, e de novo sempre que o CadCraft iniciar.
- {{ui:Arquivos}} (navegador): escolha um ou vários arquivos `.shx`. Eles ficam guardados neste navegador e nunca são enviados.
- {{ui:Listar}}: as fontes carregadas e as que o desenho aberto cita mas que você não carregou.
- {{ui:Remover}} e {{ui:Limpar}}: esquecer uma fonte, ou todas.

O CadCraft não pode incluir fontes de terceiros, então nunca as distribui: elas vêm de você. Um desenho apenas cita as suas fontes, e não guarda cópia delas.

## O que acontece

O nome da fonte de um estilo de texto é associado a uma fonte carregada pelo nome, sem diferenciar maiúsculas de minúsculas, pela pasta e pela extensão `.shx` (`SIMPLEX.SHX` encontra `simplex`). Um texto nesse estilo é desenhado como linhas, na tela, em uma plotagem e em um PDF, na posição, altura, rotação, fator de largura e ângulo de inclinação do próprio texto. A largura é a da fonte, então os alinhamentos {{ui:Centro}} e {{ui:Direita}}, a quebra de linha e a seleção correspondem ao que você vê. Um estilo cuja fonte não está carregada mantém a face integrada, e quando você abre um desenho que cita fontes que você não carregou, a linha de comando informa isso.

O estilo Standard também conta: um desenho cujo estilo Standard cita uma fonte própria a mantém.

## Fontes já em ordem visual

Muitas fontes SHX antigas em persa e árabe contêm letras já formadas para a tela e desenhadas da esquerda para a direita, então um texto digitado na ordem lógica sai invertido. Digite {{cmd:SHXFONTS}}, escolha {{ui:Inverter}} e informe o nome da fonte: o texto dela passa a ser disposto com a última letra primeiro. Execute de novo para desfazer. A opção pertence à fonte, é guardada neste navegador e não é salva no desenho.

## O que ainda não é coberto

- Textos com códigos de formatação embutidos (cores, empilhamentos em um MTEXT) permanecem na face integrada.
- Big fonts (do tipo de dois bytes) substituem os códigos que a fonte principal não tem, mas um texto em uma página de código do Leste Asiático que o CadCraft já convertou para Unicode não é mapeado de volta para os códigos de dois bytes da fonte.
- O leitor de fontes segue a descrição publicada do formato e foi testado com fontes feitas para o CadCraft. Se uma das suas desenhar de forma incorreta, envie-nos a fonte e o desenho.
