---
title: Climatização: primeiros passos
summary: O que o complemento HVAC faz no CadCraft, como ativá-lo e como a rede de dutos é mantida em um arquivo DWG ou DXF comum.
keywords: hvac, complemento, dutos, duto, mecânica, chapa metálica, vazão, cfm, atrito constante, tabela
from: a9ad5492
---

## O que é

HVAC é um complemento do CadCraft que vem junto e é gratuito. Ele desenha dutos: você clica no eixo de um trecho, e o complemento desenha os dois lados do duto com suas curvas, transições e conexões de ramificação, dimensiona-o a partir da vazão, constrói-o como um sólido na guia {{ui:3D}} e o lista em uma tabela de dutos com a área de chapa metálica.

Ele fica desligado até você ativá-lo: {{ui:Configurações}} › {{ui:Geral}} › {{ui:Complementos}} › {{ui:Climatização}}. Suas ferramentas ficam na seção {{ui:Climatização}} do painel direito, como comandos (abaixo), e, quando você pede isso em {{ui:Configurações}} › {{ui:CadCraft}} › {{ui:Climatização}}, como um grupo no fim da barra de ferramentas.

Os tamanhos seguem as unidades do desenho: um desenho em polegadas ou pés recebe tamanhos em in, vazão em cfm e atrito em in. w.g. por 100 ft; qualquer outro desenho recebe mm, L/s e Pa/m.

## Seu primeiro trecho de duto

1. Digite {{cmd:DUCT}}. Digite {{ui:Z}} e um tamanho, por exemplo `24x12` (largura × altura) — ou {{ui:A}} e a vazão, e o complemento escolhe o tamanho.
2. Clique nos pontos do trecho. Cada esquina recebe uma curva automaticamente. Pressione Enter para terminar.
3. Para derivar, comece o próximo trecho dentro do primeiro: o clique se move para o eixo dele, e a ramificação recebe um tê ou uma derivação ali.
4. Digite {{cmd:DUCTSCHED}} e clique onde a tabela vai.

Veja [Desenhando trechos de duto](topic:hvac-ducts) para tudo o que um trecho pode fazer.

## Arquivos abertos em qualquer lugar

Um trecho de duto é salvo como uma referência de bloco com seu desenho dentro, e os dados dele ficam armazenados junto sob o nome de aplicativo `CC_HVAC`. Assim, dutos salvos como DWG ou DXF abrem em qualquer programa de CAD como o duto desenhado, e abrem no CadCraft sem o complemento sem perda de nada. Seus sólidos são grupos 3D comuns na guia {{ui:3D}}. Com HVAC ativado, os trechos voltam a ser trechos de duto.
