---
title: Etiquetas: atributos que alimentam os mapas
summary: Defina uma etiqueta (o seu tipo, os valores que pode ter, os blocos a que se aplica), atribua-a a referências de blocos e liste as referências num mapa que pode guardar como CSV.
keywords: etiquetas, etiqueta, atributo, mapa, extração de dados, propriedade, classificação de resistência ao fogo, lista de escolha, referência de bloco, TAGS, csv
from: 9b90bacc
---

Uma **etiqueta** é um atributo de bloco com uma definição: que tipo de valor contém, que valores são permitidos e a que blocos se aplica. Os valores são atributos de bloco comuns, por isso qualquer outro programa os lê, e o {{cmd:ATTEDIT}} os mostra. Só as definições são novas, e são guardadas no desenho.

## Definir e atribuir

Escreva {{cmd:TAGS}} e escolha:

- {{ui:Definir}}: um nome (letras, algarismos, espaço, `_ . -`), um tipo (`text`, `number`, `integer`, `yesno`, `length`, `angle`), os valores permitidos separados por `;` (deixe vazio para qualquer valor) e os nomes dos blocos a que se aplica (`DOOR*` corresponde a todos os blocos que começam por DOOR; vazio significa todos os blocos).
- {{ui:Conjunto}}: com referências de blocos selecionadas, escreva `FireRating=60 min; Width=850`. Um valor fora da lista permitida, ou não numérico numa etiqueta numérica, é recusado e o facto é indicado. Um único passo de anulação. Um bloco que não tem o atributo recebe-o como atributo oculto.
- {{ui:Mapa}}: todas as referências a um bloco ao qual uma etiqueta se aplica, opcionalmente agrupadas por uma etiqueta ou pelo nome do bloco, impressas e guardadas como CSV.
- {{ui:Remover}}: esquece uma definição; os valores permanecem nas referências.

Renomear uma etiqueta renomeia os seus valores em todas as referências. Os nomes de etiquetas não diferenciam maiúsculas de minúsculas, tal como os nomes de atributos.
