---
title: Etiquetas: atributos que alimentan cuadros de datos
summary: Defina una etiqueta (su tipo, los valores que puede tomar, los bloques a los que se aplica), asígnela a referencias de bloque y enumere las referencias como un cuadro de datos que puede guardar como CSV.
keywords: etiquetas, etiqueta, atributo, cuadro de datos, extracción de datos, propiedad, resistencia al fuego, lista de selección, referencia de bloque, TAGS, csv
from: 9b90bacc
---

Una **etiqueta** es un atributo de bloque con una definición: qué tipo de valor contiene, qué valores se permiten y a qué bloques se aplica. Los valores son atributos de bloque comunes, así que cualquier otro programa los lee, y {{cmd:ATTEDIT}} los muestra. Solo las definiciones son nuevas, y se guardan en el dibujo.

## Definir y asignar

Escriba {{cmd:TAGS}} y elija:

- {{ui:Definir}}: un nombre (letras, dígitos, espacio, `_ . -`), un tipo (`text`, `number`, `integer`, `yesno`, `length`, `angle`), los valores permitidos separados por `;` (déjelo vacío para cualquiera) y los nombres de bloque a los que se aplica (`DOOR*` coincide con todos los bloques que empiezan con DOOR; vacío significa todos los bloques).
- {{ui:Juego}}: con referencias de bloque seleccionadas, escriba `FireRating=60 min; Width=850`. Un valor fuera de la lista permitida, o no numérico para una etiqueta numérica, se rechaza y se indica. Es un solo paso de deshacer. Un bloque que no tiene el atributo lo recibe como atributo oculto.
- {{ui:Cuadro de datos}}: todas las referencias a un bloque al que se aplica una etiqueta, agrupadas opcionalmente por etiqueta o por nombre de bloque, impresas y guardadas como CSV.
- {{ui:Quitar}}: olvida una definición; los valores permanecen en las referencias.

Renombrar una etiqueta renombra sus valores en cada referencia. Los nombres de etiqueta no distinguen mayúsculas, igual que los nombres de atributo.
