---
title: Enviar um desenho para um laser
summary: Abra o painel Laser, escolha o que cada camada faz (cortar, vincar, gravar, preencher, imagem), visualize os movimentos da cabeça, salve o G-code em modo laser GRBL ou envie-o pelo navegador depois de percorrer o contorno do trabalho.
keywords: laser, cortadora a laser, gravadora a laser, GRBL, G-code, gcode, gravar, preencher, tramado, gravação de imagem, vincar, cortar, Web Serial, percorrer o contorno, potência, velocidade, passadas, LASER, LASERCUT, CNC
from: 72b56db0
---

O painel {{ui:Laser}} transforma as camadas de um desenho em um programa para um laser que roda GRBL (a maioria das cortadoras e gravadoras de diodo e CO2 de hobby e de pequenas oficinas). Digite `LASER` (ou `LASERCUT`) e pressione {{key:Enter}}, ou escolha {{ui:Laser…}} no menu {{ui:Mais}} do grupo {{ui:Vista}}. Nos estilos de faixa de opções, ele fica no menu {{ui:Arquivo}} e ao lado de {{ui:Plotar}}. O painel abre sobre o desenho e continua aberto enquanto você desenha: a prévia acompanha cada alteração.

:::warning
Teste cada configuração em sucata antes, use óculos de proteção adequados ao seu laser, mantenha a tampa fechada onde houver uma, e nunca deixe um laser em funcionamento sem supervisão. Os números com que uma camada começa são valores provisórios, não recomendações para nenhum material.
:::

## O que é enviado

O painel lê o modelo (não as folhas), nas camadas que estão ligadas e descongeladas:

- Linhas, arcos, círculos, polilinhas (segmentos de arco continuam arcos), elipses e splines. Uma forma que termina onde começa conta como fechada.
- Blocos são desmembrados: um objeto na camada 0 dentro de um bloco vai com a camada da referência do bloco.
- Uma hachura envia o seu contorno, então um logo hachurado em uma camada **Preencher formas** é preenchido.
- Uma imagem (`IMAGEATTACH`) é gravada em uma camada definida como **Gravar imagem**, quando está reta (não girada nem inclinada) e o seu arquivo está aberto no CadCraft.
- Texto, cotas, linhas de chamada, pontos e linhas de construção não são enviados; o painel informa quantos deixou de fora. Para gravar texto, desenhe as letras como formas ou hachure-as.

Os tamanhos são enviados em milímetros a partir das unidades do desenho (`UNITS`): um desenho em polegadas é multiplicado por 25.4. Um desenho sem unidades definidas é enviado com uma unidade para um milímetro. Marque {{ui:Somente os objetos selecionados}} para enviar parte do desenho.

## Escolha o que cada camada faz

Cada camada com algo nela é uma linha. {{ui:Faz}} define-a como **Cortar**, **Vincar**, **Gravar linhas**, **Preencher formas**, **Gravar imagem** ou **Não enviado**, com {{ui:Potência %}}, {{ui:Velocidade mm/min}} e um número de {{ui:Passadas}}. Cada alteração é uma etapa de desfazer e é salva no desenho: DWG (todas as versões que o CadCraft salva) e DXF mantêm as configurações, então o desenho abre com elas na próxima vez. Outros programas abrem o arquivo como antes; eles veem um bloco não usado chamado CADCRAFT_LASER (purgá-lo lá remove as configurações).

- **Preencher formas** queima o interior de formas fechadas em linhas, espaçadas por {{ui:Espaçamento de linha}}, em um {{ui:Ângulo}}, nos dois sentidos ou em um só, com uma sobreposição para que a cabeça esteja na velocidade quando o laser ligar; a hachura cruzada adiciona uma segunda passada a 90°. Uma forma com um furo fica aberta no furo.
- **Gravar imagem** transforma uma imagem em pontos (Floyd–Steinberg, Atkinson, ordenado, ou preto e branco simples com um limiar) ou, com *Níveis de cinza*, em potência variável.
- Ordem: imagens e preenchimentos primeiro, depois gravação de linhas, depois vincos, depois cortes, para que uma peça recortada não se mova enquanto é gravada. Dentro de uma camada, os caminhos vão **de dentro para fora** (um furo antes da chapa em que está), sempre o mais próximo a seguir.

## Visualize, depois salve

A prévia desenha o que a cabeça faz: linhas de queima em cor, movimentos rápidos em cinza, e uma caixa verde ao redor de tudo que queima. Abaixo dela estão o tamanho, o comprimento da queima e uma estimativa de tempo (sem aceleração; uma máquina real leva mais). {{ui:Salvar G-code…}} grava G-code em modo laser GRBL: `$32=1`, `M4` (ou `M3`) com valores S, movimentos `G0` e `G1`, `M5` no final. X0 Y0 é o canto inferior esquerdo do trabalho, a menos que você escolha a origem do desenho: defina o zero de trabalho da sua máquina ali.

## Enviar pelo navegador

No Chrome e no Edge, {{ui:Conectar…}} pede que você escolha a porta USB do laser. Nada se conecta nem envia até você pressionar um botão. Pressione primeiro {{ui:Percorrer o contorno}}: a cabeça percorre a caixa do trabalho com o laser **desligado** (ou na potência baixa que você definiu para um apontador) para que você veja onde ele vai queimar. Só então {{ui:Enviar trabalho}} é liberado, e ele se desliga de novo se você alterar algo. {{ui:Pausar}} mantém a cabeça parada, {{ui:Parar}} também a mantém, reinicia o controlador (o laser desliga) e envia `M5`. Onde a Web Serial não existe (Firefox, Safari e CadCraft Studio, que ainda não tem Web Serial) o painel oferece apenas salvar: salve o G-code e envie-o com o programa do próprio laser.

## Ainda não implementado

Ainda não implementado: formatos de outros controladores (Ruida, lasers Marlin, arquivos de fabricantes), abas e entradas de corte, compensação de kerf, bibliotecas de materiais, eixos rotativo e Z, alinhamento por câmera, texto como contornos.
