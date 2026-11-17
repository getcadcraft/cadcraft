---
title: Etiquetas: atributos que alimentam tabelas
summary: Defina uma etiqueta (seu tipo, os valores que pode assumir, os blocos a que se aplica), atribua-a a referências de bloco e liste as referências como uma tabela que você pode salvar em CSV.
keywords: etiquetas, etiqueta, atributo, tabela, extração de dados, propriedade, resistência ao fogo, lista de seleção, referência de bloco, TAGS, csv
from: 9b90bacc
---

Uma **etiqueta** é um atributo de bloco com uma definição: que tipo de valor ele guarda, quais valores são permitidos e a quais blocos se aplica. Os valores são atributos de bloco comuns, então qualquer outro programa os lê e o {{cmd:ATTEDIT}} os mostra. Somente as definições são novas, e são mantidas no desenho.

## Definir e atribuir

Digite {{cmd:TAGS}} e escolha:

- {{ui:Definir}}: um nome (letras, dígitos, espaço, `_ . -`), um tipo (`text`, `number`, `integer`, `yesno`, `length`, `angle`), os valores permitidos separados por `;` (deixe vazio para qualquer valor) e os nomes de bloco aos quais se aplica (`DOOR*` corresponde a todo bloco que começa com DOOR; vazio significa todos os blocos).
- {{ui:Conjunto}}: com referências de bloco selecionadas, digite `FireRating=60 min; Width=850`. Um valor fora da lista permitida, ou não numérico para uma etiqueta numérica, é recusado e informado. Uma etapa de desfazer. Um bloco que não tem o atributo o recebe como atributo oculto.
- {{ui:Tabela}}: cada referência a um bloco ao qual uma etiqueta se aplica, opcionalmente agrupada por etiqueta ou por nome de bloco, impressa e salva como CSV.
- {{ui:Remover}}: esquece uma definição; os valores permanecem nas referências.

Renomear uma etiqueta renomeia seus valores em todas as referências. Nomes de etiqueta não diferenciam maiúsculas de minúsculas, assim como nomes de atributo não.
