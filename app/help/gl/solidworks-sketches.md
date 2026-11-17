---
title: Mover esbozos desde e cara a outros modeladores de pezas
summary: Escriba unha macro que reconstrúa o seu debuxo como un esbozo con restricións nun modelador de pezas, e abra un esbozo exportado desde un deles.
keywords: esbozo, macro, swb, vba, exportar, modelador de pezas, variables globais, ecuacións, relacións, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks non está dispoñible onde se constrúe CadCraft, así que aínda non se probou ningunha das dúas direccións en SolidWorks. O que escribe CadCraft compróbase só en estrutura. Comprobe o resultado antes de confiar nel.
:::

## Enviar un debuxo como esbozo

1. Restrinxa e acote o debuxo (ver [Restrinxir un debuxo](topic:constraints)).
2. No grupo {{ui:Paramétrico}}, abra {{ui:Máis}} e escolla {{ui:Macro para SolidWorks (.swb)}}, ou escriba {{cmd:SWBOUT}}.

   Descárgase un ficheiro co nome do debuxo, que remata en `.swb`.
3. En SolidWorks, escolla **Ferramentas > Macro > Executar** e seleccione ese ficheiro.

A macro crea unha peza nova a partir da súa plantilla de peza predeterminada, abre un esbozo no Front Plane e debuxa nel as liñas, círculos, arcos, puntos e polilíneas do modelo, con:

- as súas restricións como relacións de esbozo,
- as súas restricións dimensionais como cotas cos mesmos nomes (`d1@Sketch1`),
- os seus parámetros propios como variables globais,
- cada expresión como unha ecuación.

A peza usa a unidade de lonxitude do debuxo. Texto, bloques, tramas, cotas e follas non forman parte do esbozo; o historial enumera o que se deixou fóra. As expresións sen forma de ecuación nese contexto (`if`, `min`, `max`, `round`, `%` e algunhas máis) escríbense co seu valor actual, e o historial di cales son. Calquera cousa que a macro non poida crear escríbese nun ficheiro de rexistro xunto á macro, e unha mensaxe resume o final.

## Abrir un esbozo desde unha peza

1. En SolidWorks, execute sobre a peza a macro de exportación de CadCraft (descárguea na aplicación PartCraft: Ficheiro > Exportar > Exportar macro para traer as pezas de volta). Escribe un ficheiro `.json` no formato `cadcraft-sw-export` xunto á peza.
2. En CadCraft, escolla {{ui:Abrir}} e seleccione ese ficheiro `.json`.
3. Cando a peza ten varios esbozos, escolla un.

O esbozo convértese no debuxo, en milímetros: as súas liñas, arcos, círculos e puntos, as súas relacións como restricións, as súas cotas como restricións dimensionais cos nomes que tiñan (`D1`, `D2` …), as súas variables globais como parámetros e as ecuacións das súas cotas como as súas expresións. O historial enumera o que non se trasladou, como as relacións que CadCraft non ten. Non se conserva o lugar que ocupa o esbozo na peza: debúxase plano, tal como se ve no seu plano.
