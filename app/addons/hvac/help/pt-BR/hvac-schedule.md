---
title: Climatização: a tabela de dutos
summary: Dutos retos por tamanho e material, todas as conexões e a área de chapa metálica de cada uma, como tabela no desenho ou como arquivo CSV.
keywords: tabela, tabela de dutos, chapa metálica, área de superfície, pés quadrados, conexões, csv, quantitativos, comprimento
from: a5764fca
---

## Uma tabela no desenho

Digite {{cmd:DUCTSCHED}}. A linha de comando informa os totais; clique onde a tabela vai (no canto superior esquerdo dela). A tabela lista:

- **dutos retos** por formato, tamanho e material, com seu comprimento e sua área de chapa metálica;
- **conexões** — curvas, transições e redutores, tês, derivações e ramais — por tipo e tamanho, com quantas são e a sua chapa metálica;
- um total.

A tabela se mantém atualizada: cada alteração em um trecho de duto a modifica na mesma etapa ({{cmd:UNDO}} desfaz as duas juntas). Sua altura de texto é definida em {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Climatização}}.

## Como a chapa metálica é calculada

- Duto reto: seu perímetro × seu comprimento. Um duto de 24 × 12 in com 10 ft de comprimento tem 6 ft × 10 ft = 60 ft².
- Curvas: o perímetro × o comprimento do eixo. Para uma curva de raio isso é exato: as duas faces laterais, o calcanhar e a garganta somam exatamente esse valor. Uma curva de 90° de 24 × 12 in com raio de 24 in tem 18.85 ft².
- Transições retangulares: suas quatro faces planas, cada uma calculada exatamente.
- Transições redondas e de formato misto: o perímetro médio × o comprimento inclinado (exato para um redutor redondo centrado nas duas extremidades, aproximado para os demais).
- Derivação ou tê de uma ramificação: seu colar, o perímetro da ramificação × 2 in (50 mm).

Costuras, sobreposições e perdas não estão incluídas: acrescente-as no TakeoffCraft como perda, ou pela regra da sua oficina.

## Um arquivo CSV

{{cmd:EXPORT}} › {{ui:Tabela de dutos (CSV)}} grava três tabelas: os dutos retos (formato, tamanho, material, comprimento, perímetro, área), as conexões (quantidade, área de cada uma, área total) e cada seção (tag, sistema, tamanho, comprimento, vazão, velocidade, atrito).

Para estimar a partir da tabela, veja [Dutos no TakeoffCraft](topic:hvac-takeoff).
