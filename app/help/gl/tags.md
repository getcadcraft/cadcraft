---
title: Etiquetas: atributos que alimentan os cadros
summary: Defina unha etiqueta (o seu tipo, os valores que pode tomar e os bloques aos que se aplica), asígnea a referencias de bloque e liste as referencias como un cadro que pode gardar como CSV.
keywords: etiquetas, etiqueta, atributo, cadro, extracción de datos, propiedade, resistencia ao lume, lista de selección, referencia de bloque, TAGS, csv
from: 9b90bacc
---

Unha **etiqueta** é un atributo de bloque cunha definición: que tipo de valor garda, que valores se permiten e a que bloques se aplica. Os valores son atributos de bloque ordinarios, así que calquera outro programa os le e {{cmd:ATTEDIT}} os mostra. Só as definicións son novas, e gárdanse no debuxo.

## Definir e asignar

Escriba {{cmd:TAGS}} e escolla:

- {{ui:Definir}}: un nome (letras, díxitos, espazo, `_ . -`), un tipo (`text`, `number`, `integer`, `yesno`, `length`, `angle`), os valores permitidos separados por `;` (déixeo baleiro para calquera) e os nomes de bloque aos que se aplica (`DOOR*` coincide con todos os bloques que comezan por DOOR; baleiro significa todos os bloques).
- {{ui:Conxunto}}: con referencias de bloque seleccionadas, escriba `FireRating=60 min; Width=850`. Un valor fóra da lista permitida, ou que non sexa un número nunha etiqueta numérica, recházase e indícase. Un paso de desfacer. Un bloque que non ten o atributo recibe un atributo oculto.
- {{ui:Cadro}}: cada referencia a un bloque ao que se aplica unha etiqueta, agrupada opcionalmente por unha etiqueta ou polo nome do bloque, impresa e gardada como CSV.
- {{ui:Retirar}}: esquece unha definición; os valores quedan nas referencias.

Cambiar o nome dunha etiqueta cambia os seus valores en cada referencia. Os nomes de etiqueta non distinguen maiúsculas, como tampouco o fan os nomes de atributo.
