---
title: Tubulação: primeiros passos
summary: O que o complemento Tubulação faz no CadCraft, como ativá-lo e como a tubulação fica guardada em um arquivo DWG ou DXF comum.
keywords: tubulação, tubo, complemento, hidráulica, mecânica, aço, cobre, pvc, pex, válvula, p&id, tabela, drenagem
from: 1048242c
---

## O que é

A Tubulação é um complemento do CadCraft que vem com ele e é gratuito. Você clica no eixo de um trecho de tubo, e ele desenha o tubo no tamanho real — aço, cobre, PVC ou PEX, por tamanho nominal e schedule ou tipo, a partir das normas públicas — com seus cotovelos, reduções e tês, as válvulas que você coloca nele, uma declividade para drenos, um sólido na guia {{ui:3D}} e uma linha na tabela de tubos e conexões. Um conjunto de símbolos no estilo P&ID vem junto.

Ele fica desligado até você ativá-lo: {{ui:Configurações}} › {{ui:Geral}} › {{ui:Complementos}} › {{ui:Tubulação}}. Suas ferramentas ficam na seção {{ui:Tubulação}} do painel direito, como comandos (abaixo), e, quando você pedir em {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Tubulação}}, como um grupo no fim da barra de ferramentas.

Um desenho em polegadas ou pés nomeia os tamanhos por NPS (`2"`) e mede em pés; qualquer outro desenho nomeia aço e PVC por DN (`DN50`), cobre e PEX pelo tamanho nominal e pelo diâmetro externo em milímetros, e mede em metros.

## Seu primeiro trecho de tubo

1. Digite {{cmd:PIPE}}. Digite {{ui:M}} para o material, {{ui:Z}} e um tamanho (`2`, `1-1/2`, `DN50`).
2. Clique nos pontos do trecho. Cada curva ganha um cotovelo. Pressione Enter para terminar.
3. Para criar um ramal, comece o próximo trecho sobre o primeiro: o clique passa para o eixo dele e um tê é colocado ali.
4. Digite {{cmd:VALVE}} e clique em um trecho para colocar uma válvula nele.
5. Digite {{cmd:PIPESCHED}} e clique onde a tabela deve ficar.

## Arquivos abertos em qualquer lugar

Um trecho de tubo é salvo como uma referência de bloco com seu desenho dentro, e seus dados ficam guardados junto sob o nome de aplicativo `CC_PIPING`; o mesmo vale para um símbolo. Tubulação salva como DWG ou DXF abre em qualquer programa CAD como foi desenhada, e no CadCraft sem o complemento, sem perda de nada. Seus sólidos são grupos 3D comuns na guia {{ui:3D}}.
