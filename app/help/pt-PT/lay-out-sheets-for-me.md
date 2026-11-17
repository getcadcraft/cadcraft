---
title: Organizar as folhas automaticamente
summary: Coloque as peças de um desenho em folhas automaticamente: o CadCraft escolhe um formato de papel e uma escala padrão que caibam, coloca cada peça com uma descrição e a escala por baixo, e deixa tudo editável.
keywords: folhas, layout, layouts, papel, escala, automático, AUTOSHEET, legenda, viewports, vistas com nome
from: 7f315dff
---

Escolha **Vista › Mais › Organizar as folhas automaticamente** (ou escreva {{cmd:AUTOSHEET}}). O CadCraft encontra as peças do seu desenho (as suas vistas com nome, ou os grupos separados do modelo), escolhe um formato de papel e uma escala padrão em que caibam, e coloca-as em folhas novas com uma legenda, uma descrição e a escala por baixo de cada uma.

Antes de executar, pode alterar o que faz: **Peças** (vistas com nome, grupos, o desenho inteiro, ou deixar que decida), **Formato** (automático ou um tamanho como `iso-a1`), **Escala** (uma só para todas, ou cada peça com a sua) e **Folhas** (quantas peças partilham uma folha).

As folhas são folhas normais: mova uma viewport, altere a sua escala ou elimine uma folha como habitualmente. Prima {{key:Ctrl+Z}} uma vez para anular todas as folhas novas.

## Notas numeradas

Em {{cmd:AUTOSHEET}} escolha **Notas numeradas** para acrescentar uma legenda numerada sob as vistas de cada folha. Esta lista as camadas desenhadas nessas vistas, uma linha numerada por cada uma, como texto simples que pode editar como qualquer outro texto. Escolha **Ficheiro** para ler a sua própria lista de notas (um número e as respetivas palavras por linha, separados por um tabulador, uma vírgula ou um ponto e vírgula): uma camada cujo nome corresponda a um número da sua lista fica com essas palavras. Nenhuma lista de notas vem com a aplicação.
