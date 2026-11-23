---
title: Asignar a las opciones de comando sus propias letras
summary: Responda a las opciones de un comando con letras que usted elija, en cualquier idioma, desde un archivo de texto que puede editar, importar y exportar.
keywords: letras de opciones, optionkeys, optkeys, palabra clave de opción, palabra clave, reasignar, asignación, personalizar, letras propias, polar, matriz, P, PO, idioma, traducir opciones, forma corta, importar, exportar, ambiguo
from: 7c8328c6
---

## Lo que aprenderá

Cómo cambiar las letras que escribe para responder a las opciones de un comando. Por ejemplo, {{cmd:ARRAY}} pregunta `[Rectangular/POlar]` y acepta `PO` para Polar; puede hacer que `P` o cualesquiera otras letras hagan lo mismo, en su propio idioma si lo desea.

## Cómo se responden las opciones

Cuando un comando muestra opciones entre corchetes, las letras en mayúscula son las que se escriben: `POlar` es `PO`, `eXit` es `X`.

Puede escribir menos letras. Si lo que escribe encaja con solo una de las opciones mostradas, CadCraft la toma: con `[Rectangular/POlar]`, una `P` sola es Polar. Si encaja con dos, la línea de comandos las nombra y vuelve a preguntar:

```
C podría ser COUnt, COLumns. Escriba más letras.
```

Nunca se adivinan los números: una distancia o un conteo escrito siempre se lee como número.

## Agregar letras propias

Cada comando conserva sus letras integradas. Usted agrega las suyas encima, así que su lista contiene solo lo que cambió.

1. Abra {{ui:Settings}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Option letters}} y haga clic en {{ui:Edit…}}. O escriba {{cmd:OPTIONKEYS}} y pulse {{key:Enter}}.
2. Bajo {{ui:Command}}, elija el comando, por ejemplo `ARRAY`. La lista tiene cada comando que pide opciones, y empieza con el último que usó.
3. Bajo {{ui:Option}}, elija la opción. Cada una muestra sus letras integradas entre corchetes, por ejemplo `POlar (PO)`.
4. En {{ui:Your letters}}, escriba las letras que quiere, por ejemplo `P`, y haga clic en {{ui:Add}}.
5. La opción aparece ahora bajo {{ui:Your letters}} con sus letras integradas y las suyas. Haga clic en {{ui:Save}}.

Inicie {{cmd:ARRAY}}, seleccione un objeto y pulse {{key:Enter}}. El aviso muestra sus letras después de la opción, `POlar (P)`, y `P` la responde.

Para quitar una, haga clic en la x al final de su fila y luego en {{ui:Save}}. La opción vuelve a tener solo sus letras integradas.

## Letras que no puede usar

El editor rechaza las letras que ocultarían algo que la línea de comandos ya lee, y lo indica:

- las letras integradas de otra opción del mismo comando (`R` para Polar en `ARRAY`, donde `R` es Rectangular);
- una palabra de referencia a objetos de tres letras o más, como `END`, `MID` o `CEN`, y las palabras `ALL` y `LAST`;
- las mismas letras para dos opciones distintas de un comando.

Mientras algo aparece en rojo, {{ui:Save}} está desactivado: corrija la línea o quítela, y vuelve a activarse. Las letras integradas de un aviso siempre ganan sobre las suyas, así que su lista nunca puede impedir que una respuesta integrada funcione. Las letras que coinciden con el nombre de un comando, como `L` o `C`, están bien: en un aviso de opción la línea de comandos lee una respuesta, no inicia un comando.

Las opciones listadas para un comando vienen de los comandos que comparten sus avisos, así que de vez en cuando un comando lista una opción que solo pide en algunos casos.

## Una opción para todos los comandos

Bajo {{ui:Command}}, elija {{ui:Every command}}. Las opciones son entonces todas las opciones que cualquier comando tiene, como eXit o Deshacer. Las letras que agregue allí responden a esa opción dondequiera que un comando la ofrezca. Las letras agregadas para un comando específico ganan sobre estas.

## Letras en su propio idioma

Las letras pueden ser de cualquier alfabeto, así que puede responder a las opciones sin cambiar su teclado: agregue `З` para Cerrar bajo {{ui:Every command}}, o `П` para POlar en `ARRAY`.

CadCraft viene con las letras en inglés únicamente. Su propia lista es la forma en que usted, su oficina o las personas que comparten su idioma configuran el resto, y {{ui:Export}} crea un archivo que puede compartir.

## Editar como texto

{{ui:Edit as text}} en el editor muestra la misma lista como líneas de texto, una por opción, que es también lo que guarda {{ui:Export}}:

```
ARRAY.PO,  P
*.X,       Q
```

Cada línea es el comando, un punto, las letras integradas de la opción, una coma y sus letras. Un asterisco en lugar del comando significa todos los comandos. Una línea que empieza con `;` es una nota.

## Lo que se mantiene igual

- Las letras integradas siguen funcionando junto a las suyas.
- Las rutinas y los botones de la barra de herramientas siguen usando las letras integradas, así que nada de lo que cargó se rompe. Para escribir usted mismo las letras integradas donde las suyas estorbarían, ponga un guion bajo al inicio: `_PO`.
- El nombre corto de un comando es otra cosa: vea [Editar alias de comandos](topic:command-aliases).

## Líneas que CadCraft rechaza

Cuando edita como texto o importa un archivo, el editor indica cada problema con su número de línea:

- el comando no existe (un alias de comando está bien: `AR.PO` se lee como `ARRAY.PO`);
- la línea no tiene el formato `COMANDO.OPCIÓN, LETRAS`;
- las letras tienen un espacio o un signo (solo letras y dígitos, 16 como máximo);
- las mismas letras responden a dos opciones distintas de un comando.

## Importar y exportar

{{ui:Export}} guarda sus letras como un archivo de texto, para conservarlas o dárselas a alguien más. {{ui:Import…}} lee ese archivo. Ambos están en el editor y en {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}}.

En Parámetros, {{ui:Import…}} reemplaza su archivo por el que usted elija. Un archivo con una línea que choca o que no se puede usar no se toma: abra el editor e impórtelo allí para ver las líneas. En el editor solo llena el cuadro: nada cambia hasta que haga clic en {{ui:Save}}.

## Recargar o quitar

Escriba {{cmd:REINIT}} y pulse {{key:Enter}} para aplicar su archivo otra vez. Para quitar una letra, borre su línea y haga clic en {{ui:Save}}.

## Sus letras siguen a su cuenta

Cuando inicia sesión en getcadcraft.com, sus letras se guardan con su cuenta. Abra CadCraft en otro navegador o en otro equipo con la misma cuenta y llegan solas; la línea de comandos dice `Letras de opciones desde su cuenta`. Si las cambió en dos lugares, gana la copia más nueva, y la que reemplazó se conserva una vez.

{{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} indica en qué estado están. Sin sesión o sin conexión, se quedan en este navegador y se envían a su cuenta la próxima vez que las guarde con la sesión iniciada.

Relacionado: [Editar alias de comandos](topic:command-aliases) · [Configuración de CadCraft](topic:settings) · [Comandos](topic:commands)
