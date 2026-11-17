---
title: Etiquetas: atributos que alimentan las tablas
summary: Defina una etiqueta (su tipo, los valores que puede tener, los bloques a los que se aplica), asígnela a referencias de bloque y liste las referencias como una tabla que puede guardar como CSV.
keywords: etiquetas, etiqueta, atributo, tabla, extracción de datos, propiedad, resistencia al fuego, lista de selección, referencia de bloque, TAGS, csv
from: 9b90bacc
---

Una **etiqueta** es un atributo de bloque con una definición: qué tipo de valor contiene, qué valores se permiten y a qué bloques se aplica. Los valores son atributos de bloque normales, así que cualquier otro programa los lee y {{cmd:ATTEDIT}} los muestra. Solo las definiciones son nuevas, y se guardan en el dibujo.

## Definir y asignar

Escriba {{cmd:TAGS}} y elija:

- {{ui:Definir}}: un nombre (letras, dígitos, espacio, `_ . -`), un tipo (`text`, `number`, `integer`, `yesno`, `length`, `angle`), los valores permitidos separados por `;` (déjelo vacío para aceptar cualquiera) y los nombres de bloque a los que se aplica (`DOOR*` coincide con todos los bloques que empiezan por DOOR; vacío significa todos los bloques).
- {{ui:Juego}}: con referencias de bloque seleccionadas, escriba `FireRating=60 min; Width=850`. Un valor fuera de la lista permitida, o que no sea un número en una etiqueta numérica, se rechaza y se indica. Un solo paso de deshacer. Un bloque que no tiene el atributo lo recibe como atributo oculto.
- {{ui:Tabla}}: todas las referencias a un bloque al que se aplica una etiqueta, opcionalmente agrupadas por etiqueta o por nombre de bloque, impresas y guardadas como CSV.
- {{ui:Quitar}}: olvida una definición; los valores permanecen en las referencias.

Cambiar el nombre de una etiqueta renombra sus valores en todas las referencias. Los nombres de etiqueta no distinguen mayúsculas y minúsculas, igual que los nombres de atributo.
