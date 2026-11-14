---
title: Tubulação: tabela de tubos e conexões
summary: Tubos por material e tamanho, com seu comprimento e seu peso de aço, cada conexão e válvula, e as elevações de cada trecho — no desenho, em CSV ou no TakeoffCraft.
keywords: tabela, tabela de tubulação, conexões, válvulas, comprimento, peso, csv, takeoffcraft, takeoff, pacote, quantitativos
from: c852343a
---

## Uma tabela no desenho

Digite {{cmd:PIPESCHED}}; a linha de comando informa os totais e os drenos planos demais; clique onde a tabela deve ficar. Ela lista os tubos por material, classe e tamanho, com seu comprimento (e peso, no caso do aço), e depois cada conexão e válvula por tipo e tamanho, com a quantidade e um total. Ela se mantém atualizada conforme os trechos mudam, no mesmo passo de desfazer.

O comprimento do tubo é medido de centro a centro através das conexões, ao longo da declividade. O peso do aço é o peso de ponta lisa da ASME B36.10M: 10.69 × (D − t) × t lb por pé (0.0246615 × (D − t) × t kg por metro), então 20 ft de tubo de 2 in Schedule 40 pesam 73.1 lb.

## Um arquivo CSV

{{cmd:EXPORT}} › {{ui:Tabela de tubulação (CSV)}} grava os tubos (material, tamanho, comprimento, peso), as conexões e válvulas (quantidade) e cada trecho (tag, sistema, material, comprimento, sua elevação nas duas extremidades e sua declividade).

## No TakeoffCraft

- {{cmd:EXPORT}} › {{ui:Tubos para o TakeoffCraft (PDF com o levantamento dentro)}} plota a planta em uma folha, em escala padrão, e coloca o levantamento dentro do PDF. Abra-o no TakeoffCraft: um item linear por tamanho de tubo, com uma marca ao longo de cada trecho do eixo (trechos com declividade medidos ao longo da declividade); um item de contagem por conexão e por válvula, com uma marca onde estão; cada um com seu número CSI MasterFormat por sistema. A composição do tubo de aço traz seu peso. Sem preços unitários: esses são seus.
- {{cmd:EXPORT}} › {{ui:Composições de tubulação para o TakeoffCraft (pacote)}} grava os mesmos itens, sem quantidades, como um pacote para {{ui:Biblioteca}} › {{ui:Pacotes do serviço}} › {{ui:Abrir um arquivo de pacote}}.
