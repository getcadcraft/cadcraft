---
title: Climatização: dutos no TakeoffCraft
summary: Envie a tabela de dutos ao TakeoffCraft como itens — um PDF da planta com o levantamento dentro, ou as composições como pacote para a sua biblioteca de preços.
keywords: takeoffcraft, levantamento, estimativa, quantitativos, itens, pacote, biblioteca de preços, chapa metálica, pdf
from: 7289df5d
---

## Um PDF com o levantamento dentro

{{cmd:EXPORT}} › {{ui:Dutos para o TakeoffCraft (PDF com o levantamento dentro)}} plota a planta em uma folha (ARCH D ou ISO A1, na maior escala padrão que cabe) e coloca um levantamento do TakeoffCraft dentro do PDF. Abra o PDF no TakeoffCraft e ele oferece o levantamento:

- um **item linear** por formato, tamanho e material de duto, com uma marcação ao longo de cada trecho reto;
- um **item de contagem** por conexão e tamanho, com uma marcação onde cada uma está;
- a composição de cada item tem a sua **chapa metálica**: o perímetro do duto × L, ou a área da conexão × N.

O TakeoffCraft mede as marcações na escala da folha, então os comprimentos dele são os da tabela, e você pode ver na folha o que cada um representa. A escala é definida e verificada pelo maior trecho de duto. Os itens não têm preços unitários: o preço é você quem define.

## As composições como pacote

{{cmd:EXPORT}} › {{ui:Composições de dutos para o TakeoffCraft (pacote)}} grava os mesmos itens, sem quantidades, como um pacote do TakeoffCraft (um arquivo `.json`). No TakeoffCraft, abra {{ui:Biblioteca}} › {{ui:Pacotes de serviço}} › {{ui:Abrir um arquivo de pacote}} para adicioná-los à sua biblioteca de preços. Cada item registra a quantidade que tinha no desenho.
