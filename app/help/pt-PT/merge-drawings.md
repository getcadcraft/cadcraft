---
title: Fundir as alterações de duas pessoas num mesmo desenho
summary: Permita que o git, o Fossil ou o Mercurial fundam duas cópias de um ficheiro DWG ou DXF, objeto a objeto, usando a chave que o CadCraft mantém em cada objeto.
keywords: fundir, git, fossil, mercurial, controlo de versões, diff, conflito, três vias, cadcraft merge, chave, gitattributes, DWG, DXF
from: 71482bf9
---

Duas pessoas editam o mesmo desenho. Se alteraram objetos diferentes, a fusão pode ser automática: nada a refazer à mão.

## O que faz funcionar

O CadCraft dá a cada objeto que desenha uma **chave** curta que nunca muda e que nunca é dada a dois objetos. É guardada com o objeto no DWG ou DXF (como dados extra que outros programas mantêm). A fusão procura os objetos por essa chave, e não pela sua posição no ficheiro, porque todos os programas renumeram as posições ao guardar. Desative esta opção em {{ui:Definições}} › CadCraft › Ficheiros compatíveis com fusão se nunca fizer fusões; os ficheiros ficam cerca de 10% mais pequenos.

Um desenho guardado antes de existirem chaves continua a poder ser fundido: os seus objetos recebem uma chave a partir do lugar que ocupam no ficheiro, a mesma para todos os que o abrem.

## Configurar

Git precisa de duas linhas, uma vez por repositório:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# one time, on each computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sem git, execute-o à mão: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil e Mercurial recebem os mesmos três ficheiros na configuração da sua própria ferramenta de fusão.

## As regras

- Um objeto alterado apenas de um lado é aceite. A mesma alteração dos dois lados é aceite uma vez.
- A mesma propriedade alterada de duas formas é um **conflito**: o seu lado fica e o relatório lista os dois valores. Abra o resultado, veja esse objeto e corrija-o à mão.
- Um objeto acrescentado de qualquer lado é mantido. Um objeto eliminado de um lado e não tocado do outro é eliminado. Eliminado de um lado e alterado do outro: eliminado, e reportado.
- Camadas, blocos, estilos de texto e de cota, folhas e vistas com nome fundem-se da mesma forma. As restrições seguem os objetos que nomeiam.
- O resultado é escrito no mesmo formato e versão de ficheiro que o seu.

Não é fundido: a ordem de desenho dos objetos é a sua, seguida dos objetos que o outro lado acrescentou. As alterações à mesma definição de bloco dos dois lados são um conflito, nunca misturadas. Nada é enviado; tudo corre no seu computador.
