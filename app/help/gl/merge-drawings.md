---
title: Combinar as edicións de dúas persoas dun mesmo debuxo
summary: Permita que git, Fossil ou Mercurial combinen dúas copias dun DWG ou DXF obxecto por obxecto, usando a clave que CadCraft garda en cada obxecto.
keywords: combinar, merge, git, fossil, mercurial, control de versións, version control, diff, conflito, conflict, tres vías, three-way, cadcraft merge, clave, key, gitattributes, DWG, DXF
from: 71482bf9
---

Dúas persoas editan o mesmo debuxo. Se cambiaron obxectos distintos, a combinación pode ser automática: non hai nada que refacer a man.

## Que o fai posible

CadCraft dálle a cada obxecto que debuxa unha **clave** curta que nunca cambia e que nunca se dá a dous obxectos. Gárdase co obxecto no DWG ou DXF (como datos extra que outros programas conservan). A combinación busca os obxectos pola clave, non pola súa posición no ficheiro, porque cada programa renumera as posicións ao gardar. Desactívao en {{ui:Settings}} › CadCraft › Ficheiros aptos para combinar se nunca combina; os ficheiros quedan uns 10 por cento máis pequenos.

Un debuxo gardado antes de que existisen as claves tamén se pode combinar: os seus obxectos reciben unha clave segundo o seu lugar no ficheiro, a mesma para todos os que o abren.

## Configuración

Git necesita dúas liñas unha vez por repositorio:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# unha vez, en cada ordenador
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sen git, execútao a man: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil e Mercurial reciben os mesmos tres ficheiros na súa propia configuración de ferramenta de combinación.

## As regras

- Un obxecto cambiado só dun lado tómase. O mesmo cambio nos dous lados tómase unha vez.
- A mesma propiedade cambiada de dous xeitos é un **conflito**: quédase o seu lado e o informe lista os dous valores. Abra o resultado, mire ese obxecto e corríxao a man.
- Un obxecto engadido en calquera dos lados consérvase. Un obxecto eliminado dun lado e sen tocar no outro elimínase. Eliminado nun lado e cambiado no outro: elimínase, e infórmase.
- Capas, bloques, estilos de texto e de cota, follas e vistas con nome combínanse do mesmo xeito. As restricións seguen aos obxectos que nomean.
- O resultado escríbese no mesmo formato e versión de ficheiro que o seu.

Non se combina: a orde en que se debuxan os obxectos é a súa, despois os obxectos que engadiu o outro lado. Os cambios na mesma definición de bloque nos dous lados son un conflito, nunca se mezclan. Non se envía nada; todo se executa no seu ordenador.
