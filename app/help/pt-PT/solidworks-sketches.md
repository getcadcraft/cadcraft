---
title: Mover esboços de e para outros modeladores de peças
summary: Escreva uma macro que reconstrói o seu desenho como um único esboço com restrições num modelador de peças, e abra um esboço exportado de um modelador.
keywords: esboço, macro, swb, vba, exportar, modelador de peças, variáveis globais, equações, relações, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
O SolidWorks não está disponível onde o CadCraft é compilado, por isso nenhum dos sentidos foi ainda testado no SolidWorks. O que o CadCraft escreve é verificado apenas quanto à estrutura. Verifique o resultado antes de confiar nele.
:::

## Enviar um desenho como esboço

1. Aplique restrições e cote o desenho (ver [Restringir um desenho](topic:constraints)).
2. No grupo {{ui:Paramétrico}}, abra {{ui:Mais}} e escolha {{ui:Macro para o SolidWorks (.swb)}}, ou escreva {{cmd:SWBOUT}}.

   Transfere-se um ficheiro com o nome do desenho, terminado em `.swb`.
3. No SolidWorks, escolha **Tools > Macro > Run** e selecione esse ficheiro.

A macro cria uma peça nova a partir do modelo de peça predefinido, abre um esboço no Front Plane e desenha nele as linhas, círculos, arcos, pontos e polilinhas do modelo, com:

- as suas restrições como relações de esboço,
- as suas restrições dimensionais como cotas com os mesmos nomes (`d1@Sketch1`),
- os seus parâmetros próprios como variáveis globais,
- cada expressão como uma equação.

A peça usa a unidade de comprimento do desenho. Textos, blocos, tramas, cotas e folhas não fazem parte do esboço; o histórico lista o que ficou de fora. As expressões que não têm forma de equação (`if`, `min`, `max`, `round`, `%` e algumas outras) são escritas pelo seu valor atual, e o histórico indica quais. Tudo o que a macro não consegue criar é escrito num ficheiro de registo junto da macro, e uma mensagem resume no fim.

## Abrir um esboço a partir de uma peça

1. No SolidWorks, execute sobre a peça a macro de exportação do CadCraft (transfira-a na aplicação PartCraft: Ficheiro > Exportar > Exportar macro para trazer peças de volta). Ela escreve um ficheiro `.json` no formato `cadcraft-sw-export` junto da peça.
2. No CadCraft, escolha {{ui:Abrir}} e selecione esse ficheiro `.json`.
3. Quando a peça tiver vários esboços, escolha um.

O esboço torna-se o desenho, em milímetros: as suas linhas, arcos, círculos e pontos, as suas relações como restrições, as suas cotas como restrições dimensionais com os nomes originais (`D1`, `D2` …), as suas variáveis globais como parâmetros e as equações nas suas cotas como expressões. O histórico lista o que não foi transferido, como as relações que o CadCraft não tem. A posição do esboço na peça não é mantida: é desenhado plano, tal como se vê no seu plano.
