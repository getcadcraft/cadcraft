---
title: Tubulação: drenagem e declividade
summary: Dê declividade a um dreno, veja sua queda e suas elevações e confira se ele atende à menor declividade do código hidráulico.
keywords: declividade, drenagem, dreno, sanitário, pluvial, queda, geratriz inferior, elevação, código hidráulico, ipc, 1/4 polegada por pé, percentual
from: 651f0dfb
---

## Um trecho com declividade

{{cmd:PIPE}} › {{ui:Declividade}} aceita polegadas por pé (`1/4`, `1/8`, `0.125`) em um desenho imperial, ou um percentual (`2`, `1`) em um desenho métrico; `0` é horizontal. O trecho cai na direção em que você o desenha, a partir da elevação informada em seu início. A planta mostra a declividade e uma seta de fluxo; o sólido na guia {{ui:3D}} cai junto; a tabela de trechos dá a elevação dele nas duas extremidades.

Um dreno sanitário ou pluvial desenhado sem declividade assume a menor declividade que o International Plumbing Code (2021, Tabela 704.1) permite para seu maior tamanho:

- 2-1/2 in e menores: 1/4 in por pé (2 %);
- 3 a 6 in: 1/8 in por pé (1 %);
- 8 in e maiores: 1/16 in por pé (0.5 %).

Um dreno mais plano que isso é sinalizado por {{cmd:PIPE}} e {{cmd:PIPESCHED}}. O código local pode ser diferente: isso é um lembrete, não uma inspeção.

## Comprimentos ao longo da declividade

O comprimento de um trecho com declividade na tabela — e no TakeoffCraft — é medido ao longo da declividade: 40 ft com 1/8 in por pé são 40.002 ft de tubo e caem 5 in.

Altere a declividade de um trecho em {{ui:Propriedades}} › {{ui:Trecho de tubulação}} › {{ui:Declividade}}.
