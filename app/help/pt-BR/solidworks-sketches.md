---
title: Mover esboços de e para outros modeladores de peças
summary: Escreva uma macro que reconstrói seu desenho como um esboço único com restrições em um modelador de peças, e abra um esboço exportado de um deles.
keywords: esboço, macro, swb, vba, exportar, modelador de peças, variáveis globais, equações, relações, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
O SolidWorks não está disponível onde o CadCraft é compilado, então nenhuma das duas direções foi testada no SolidWorks ainda. O que o CadCraft grava é verificado apenas quanto à estrutura. Confira o resultado antes de depender dele.
:::

## Enviar um desenho como esboço

1. Restrinja e cote o desenho (veja [Restringir um desenho](topic:constraints)).
2. No grupo {{ui:Paramétrico}}, abra {{ui:Mais}} e escolha {{ui:Macro para o SolidWorks (.swb)}}, ou digite {{cmd:SWBOUT}}.

   Um arquivo com o nome do desenho, terminando em `.swb`, é baixado.
3. No SolidWorks, escolha **Ferramentas > Macro > Executar** e selecione esse arquivo.

A macro cria uma nova peça a partir do seu modelo de peça padrão, abre um esboço no Plano Frontal e desenha nele as linhas, círculos, arcos, pontos e polilinhas do modelo, com:

- suas restrições como relações de esboço,
- suas restrições dimensionais como cotas com os mesmos nomes (`d1@Sketch1`),
- seus parâmetros próprios como variáveis globais,
- cada expressão como uma equação.

A peça usa a unidade de comprimento do desenho. Texto, blocos, hachuras, cotas e folhas não fazem parte do esboço; o histórico lista o que ficou de fora. Expressões que não têm forma de equação ali (`if`, `min`, `max`, `round`, `%` e algumas outras) são gravadas com o valor atual, e o histórico informa isso. Qualquer coisa que a macro não consiga criar é gravada em um arquivo de log ao lado da macro, e uma mensagem resume tudo no final.

## Abrir um esboço de uma peça

1. No SolidWorks, execute a macro de exportação do CadCraft (baixe-a no aplicativo PartCraft: Arquivo > Exportar > Exportar macro para trazer peças de volta) na peça. Ela grava um arquivo `.json` no formato `cadcraft-sw-export` ao lado da peça.
2. No CadCraft, escolha {{ui:Abrir}} e selecione esse arquivo `.json`.
3. Quando a peça tiver vários esboços, escolha um.

O esboço se torna o desenho, em milímetros: suas linhas, arcos, círculos e pontos, suas relações como restrições, suas cotas como restrições dimensionais com os nomes que tinham (`D1`, `D2` …), suas variáveis globais como parâmetros, e as equações nas cotas como expressões. O histórico lista o que não foi transferido, como relações que o CadCraft não tem. A posição do esboço na peça não é mantida: ele é desenhado achatado, como visto em seu plano.
