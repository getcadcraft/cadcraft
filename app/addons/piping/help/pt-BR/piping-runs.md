---
title: Tubulação: desenho de trechos de tubo
summary: Desenhe trechos de tubo por material, classe e tamanho nominal, em linha simples ou dupla; cotovelos, reduções, tês e junções em Y aparecem automaticamente.
keywords: tubo, trecho, eixo, nps, dn, schedule 40, schedule 80, type k, type l, type m, cotovelo, redutor, tê, junção em Y, ramal, linha dupla, linha simples, elevação
from: d0ed1b49
---

## Desenhando um trecho

Digite {{cmd:PIPE}} e clique nos pontos do eixo do trecho. Antes do primeiro ponto, você pode alterar:

- {{ui:Material}} e {{ui:Classe}} — aço Schedule 40 ou 80, cobre tipo K, L ou M, PVC Schedule 40 ou 80, PEX SDR 9 (veja [Tamanhos de tubo e de onde vêm](topic:piping-tables)).
- {{ui:Size}} — um tamanho nominal: `2`, `1-1/2` (ou `1 1/2`, `1.5`), ou `DN50` em um desenho métrico. Um tamanho que não existe para o material é recusado. Mudar o tamanho entre pontos cria uma redução.
- {{ui:Sistema}} — água fria doméstica, água quente, retorno de água quente, esgoto sanitário, ventilação, águas pluviais, água gelada, água quente de aquecimento, gás natural, proteção contra incêndio ou outro. Cada um tem sua própria camada, seu rótulo e sua cor 3D.
- {{ui:Elevação}} — a elevação do eixo no início.
- {{ui:Declividade}} — para drenos (veja [Drenagem e declividade](topic:piping-drainage)).
- {{ui:Linhas}} — linha simples (o eixo, com símbolos) ou linha dupla (o diâmetro externo do tubo, em escala).
- {{ui:Tag}} — um nome como `CW-1`, mostrado no rótulo.

## As conexões que ele faz

- **Cotovelos** em cada curva: 90° e 45° pelo nome, outros ângulos pelo próprio ângulo. Cotovelos de aço são desenhados com a curva de raio longo da ASME B16.9 (1.5 × o tamanho a partir de 3/4 in); as curvas dos outros materiais são desenhadas com um único diâmetro externo — uma escolha de desenho, não uma dimensão da conexão.
- **Reduções** onde o tamanho muda, concêntricas, logo após a curva.
- **Tês** onde um trecho começa ou termina em outro: um tê quando encontra o tronco em ângulo reto (dentro de 15°), um tê redutor quando é menor, uma junção em Y em um ângulo.

## Alterando um trecho

Arraste o grip de um ponto para movê-lo. {{ui:Propriedades}} › {{ui:Trecho de tubulação}} tem a tag, o sistema, o material e a classe, o tamanho (o trecho inteiro), a elevação, a declividade e as linhas, e mostra o diâmetro externo e o interno do trecho. {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:COPY}} e {{cmd:ERASE}} funcionam como em qualquer objeto.
