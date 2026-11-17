---
title: "Políticas predeterminadas: definir con que empeza un debuxo"
summary: Indique unha vez que unidades, formato de lonxitude, precisión, altura de texto e papel de folla empeza un debuxo novo, para traballo métrico e en polgadas, e comparta as políticas na oficina como un ficheiro pequeno.
keywords: predeterminado, predeterminados, políticas predeterminadas, política, estándar da oficina, predeterminados da oficina, plantilla, debuxo novo, unidades, insunits, formato de lonxitude, arquitectónico, precisión, luprec, altura de texto, papel de folla, a1, compartir, exportar, importar, json
from: 7b80fd13
---

## O que vai facer

Diga a CadCraft con que debe empezar un debuxo novo, para que ninguén da oficina teña que executar UNITS e cambiar as mesmas cousas cada vez. Isto é un complemento: está desactivado ata que o active, e unha política que non define deixa o predeterminado propio de CadCraft tal cal.

:::note
Son predeterminados para debuxos **novos** e follas **novas**. Un debuxo que xa comezou non cambia, nin tampouco un que abra.
:::

## Pasos

1. Abra Configuración, vaia a {{ui:Complementos}} e active {{ui:Políticas predeterminadas}}.
2. En Configuración, abra a lapela **CadCraft** e escolla {{ui:Políticas predeterminadas}} na lista da esquerda.
3. Defina as políticas que queira. Cada unha comeza en **a propia de CadCraft**. Unha política con caixas **Métrico** e **Imperial** toma un valor para cada tipo de debuxo; complete só as que necesite.
4. Non hai botón Gardar: cada cambio se garda segundo o fai.
5. Empece un debuxo novo. Terá as unidades, o formato de lonxitude, a precisión e a altura de texto que definiu, e a súa primeira folla nova estará no papel que escolleu.

## As políticas

- **Unidades dun debuxo novo**: ningunha, milímetros, centímetros, metros, polgadas ou pés.
- **Formato de lonxitude** e **Precisión de lonxitude**: o que define o comando UNITS, para un debuxo novo.
- **Altura do texto novo**, en unidades do debuxo.
- **Papel dunha folla nova**: o papel que usa Folla nova.
- **Tamaños de anotación no papel** (Configuración › Global › Políticas predeterminadas): as alturas da oficina en milímetros, tal como se imprimen. CadCraft usa a das notas e etiquetas: {{cmd:ANNOSCALE}} fixa a altura coa que comeza o texto novo a esa altura á escala de anotación. Vexa [Unidades, papeis e escalas](topic:units-papers-scales#annotate-by-scale).

Un debuxo en polgadas ou pés usa os valores Imperiais; calquera outro usa os métricos. Un debuxo sen unidades usa o sistema de unidades definido en Configuración › Global › Políticas predeterminadas, ou o métrico se non hai ningún.

## Compartir na oficina

1. En Configuración, abra a lapela **Global** e escolla {{ui:Políticas predeterminadas}}.
2. Prema {{ui:Gardar nun ficheiro}}. Obterá un ficheiro pequeno que remata en `.ccdefaults.json`.
3. Noutro ordenador, active o complemento, abra o mesmo lugar e prema {{ui:Cargar dun ficheiro}}. As políticas do ficheiro substitúen as dese ordenador.

Un mesmo ficheiro contén as políticas de todas as aplicacións de CadCraft, así que o ficheiro funciona tamén en BimCraft.

## Cousas que convén saber

- Non hai política para a escala dunha folla: a vista dunha folla nova axústase ao debuxo, e a escala defínea na propia folla.
- Non hai política para un estilo de cota: un debuxo novo non ten estilos de cota con nome. Defina as cotas con DIMSTYLE, ou empece desde un debuxo que xa as teña.
- O ficheiro é JSON simple e aberto. Unha política que o ficheiro nomea e que esta versión non coñece queda fóra e indícase na mensaxe; o resto cárgase igual.
- As políticas gárdanse neste navegador, non no debuxo. Desactive o complemento e todo volve ser o propio de CadCraft.
