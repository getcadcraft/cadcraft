---
title: Asignar sus propias letras a las opciones de comando
summary: Responda a las opciones de un comando con letras que usted elija, en cualquier idioma, desde un único archivo de texto que puede editar, importar y exportar.
keywords: letras de opciones, optionkeys, optkeys, palabra clave de opción, palabra clave, reasignar, asignación, personalizar, letras personalizadas, polar, array, P, PO, idioma, traducir opciones, forma abreviada, importar, exportar, ambiguo
from: 7c8328c6
---

## Qué aprenderá

Cómo cambiar las letras que escribe para responder a las opciones de un comando. Por ejemplo, {{cmd:ARRAY}} pregunta `[Rectangular/POlar]` y acepta `PO` para Polar; puede hacer que `P` o cualquier otra letra haga lo mismo, en su propio idioma si lo desea.

## Cómo se responden las opciones

Cuando un comando muestra opciones entre corchetes, las letras mayúsculas son las que hay que escribir: `POlar` es `PO`, `eXit` es `X`.

También puede escribir menos letras. Si lo que escribe encaja solo en una de las opciones mostradas, CadCraft la toma: con `[Rectangular/POlar]`, una `P` sola es Polar. Si encaja en dos, la línea de comandos las nombra y vuelve a preguntar:

```
C could be COUnt, COLumns. Type more letters.
```

Los números nunca se adivinan, así que una distancia o un recuento escritos siempre se leen como número.

## Añadir letras propias

Cada comando conserva sus letras integradas. Usted añade las suyas encima, así que su lista contiene solo lo que cambió.

1. Abra {{ui:Parámetros}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Letras de opciones}} y haga clic en {{ui:Editar…}}. O escriba {{cmd:OPTIONKEYS}} y pulse {{key:Enter}}.
2. Bajo {{ui:Comando}}, elija el comando, por ejemplo `ARRAY`. La lista tiene cada comando que pide opciones, y empieza con el último que usó.
3. Bajo {{ui:Opción}}, elija la opción. Cada una muestra sus letras integradas entre corchetes, por ejemplo `POlar (PO)`.
4. En {{ui:Sus letras}}, escriba las letras que quiera, por ejemplo `P`, y haga clic en {{ui:Añadir}}.
5. La opción aparece ahora bajo {{ui:Sus letras}} con sus letras integradas y las suyas. Haga clic en {{ui:Guardar}}.

Inicie {{cmd:ARRAY}}, seleccione un objeto y pulse {{key:Enter}}. La petición muestra sus letras tras la opción, `POlar (P)`, y `P` responde.

Para quitar una, haga clic en la x al final de su fila y después en {{ui:Guardar}}. La opción vuelve a tener solo sus letras integradas.

## Letras que no se pueden usar

El editor rechaza las letras que ocultarían algo que la línea de comandos ya lee, y dice por qué:

- las letras integradas de otra opción del mismo comando (`R` para Polar en `ARRAY`, donde `R` es Rectangular);
- una palabra de referencia a objetos de tres letras o más, como `END`, `MID` o `CEN`, y las palabras `ALL` y `LAST`;
- las mismas letras para dos opciones distintas de un mismo comando.

Mientras algo aparece en rojo, {{ui:Guardar}} está desactivado: corrija la línea o quítela, y vuelve a activarse. Las letras integradas de una petición siempre tienen prioridad sobre las suyas, así que su lista nunca puede impedir que funcione una respuesta integrada. Las letras que coinciden con el nombre de un comando, como `L` o `C`, están bien: en una petición de opción, la línea de comandos está leyendo una respuesta, no iniciando un comando.

Las opciones que se listan para un comando proceden de los comandos que comparten sus peticiones, así que a veces un comando lista una opción que solo pide en algunos casos.

## Una elección para cada comando

Bajo {{ui:Comando}}, elija {{ui:Todos los comandos}}. Las opciones son entonces todas las opciones que tiene cualquier comando, como eXit o Undo. Las letras que añada allí responden a esa opción dondequiera que un comando la ofrezca. Las letras añadidas para un comando concreto prevalecen sobre estas.

## Letras en su propio idioma

Las letras pueden ser de cualquier alfabeto, así que puede responder a las opciones sin cambiar su teclado: añada `З` para Close bajo {{ui:Todos los comandos}}, o `П` para POlar en `ARRAY`.

CadCraft viene solo con letras inglesas. Su propia lista es la forma en que usted, su oficina o las personas que comparten su idioma completan el resto, y {{ui:Exportar}} crea un archivo que puede pasar a otros.

## Editar como texto

{{ui:Editar como texto}} en el editor muestra la misma lista como líneas de texto, una por opción, que es también lo que guarda {{ui:Exportar}}:

```
ARRAY.PO,  P
*.X,       Q
```

Cada línea es el comando, un punto, las letras integradas de la opción, una coma y sus letras. Un asterisco en lugar del comando significa todos los comandos. Una línea que empieza con `;` es una nota.

## Lo que sigue igual

- Las letras integradas siguen funcionando junto a las suyas.
- Las rutinas y los botones de la barra usan las letras integradas, así que nada de lo que cargó se rompe. Para escribir las letras integradas usted mismo donde las suyas estorbarían, ponga antes un guion bajo: `_PO`.
- El nombre corto de un comando es otra cosa: véase [Editar alias de comandos](topic:command-aliases).

## Líneas que CadCraft rechaza

Cuando edita como texto o importa un archivo, el editor indica cada problema con su número de línea:

- el comando no existe (el alias de un comando es válido: `AR.PO` se lee como `ARRAY.PO`);
- la línea no es `COMANDO.OPCIÓN, LETRAS`;
- las letras tienen un espacio o un signo (solo letras y dígitos, 16 como máximo);
- las mismas letras responden a dos opciones distintas de un mismo comando.

## Importar y exportar

{{ui:Exportar}} guarda sus letras como archivo de texto, para conservarlo o dárselo a alguien. {{ui:Importar…}} lee ese archivo. Ambas están en el editor y en {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Letras de opciones}}.

En Parámetros, {{ui:Importar…}} sustituye su archivo por el que usted elija. Un archivo con una línea que choca o que no se puede usar no se acepta; abra el editor e impórtelo allí para ver las líneas. En el editor solo rellena el cuadro: no cambia nada hasta que haga clic en {{ui:Guardar}}.

## Volver a cargar o quitar

Escriba {{cmd:REINIT}} y pulse {{key:Enter}} para aplicar su archivo de nuevo. Para quitar una letra, borre su línea y haga clic en {{ui:Guardar}}.

## Sus letras siguen a su cuenta

Cuando ha iniciado sesión en getcadcraft.com, sus letras se guardan con su cuenta. Si abre CadCraft en otro navegador o en otro equipo con la misma cuenta, llegan solas; la línea de comandos dice `Option letters from your account`. Si las cambió en dos lugares, gana la copia más reciente y la que sustituyó se conserva una vez.

{{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Letras de opciones}} indica en qué estado están. Sin sesión iniciada o sin conexión, se quedan en este navegador y pasan a su cuenta la próxima vez que las guarde con la sesión iniciada.

Relacionados: [Editar alias de comandos](topic:command-aliases) · [Parámetros de CadCraft](topic:settings) · [Comandos](topic:commands)
