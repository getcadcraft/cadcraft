---
title: Unidades ao importar: un ficheiro indica as súas unidades, ou pregúntanse antes
summary: Cando un ficheiro que trae a un debuxo indica as súas unidades, CadCraft convérteo e dío. Cando non, CadCraft pregunta antes de colocar nada e lembra a súa resposta para ese ficheiro.
keywords: unidades, importar, inserir, xref, anexar, XATTACH, INSERT, OBJ, DWG, DXF, nube de puntos, elemento da biblioteca, milímetros, metros, polgadas, pés, escala, tamaño incorrecto, demasiado grande, demasiado pequeno, 1000 veces, preguntar, recordado, INSUNITS
from: 558f1293
---

## Que vai facer

Traer un ficheiro a un debuxo e asegurarse de que entra co tamaño correcto.

## Pasos

1. Traia o ficheiro como de costume: `INSERT` › Ficheiro, `XATTACH`, `POINTCLOUDATTACH`, ou {{ui:Ficheiros}} no panel Biblioteca.
2. Se o ficheiro indica as súas unidades, non se pregunta nada. A liña de comandos di que unidades indica o ficheiro, e a escala usada cando difiren das do debuxo.
3. Se non, un diálogo pregunta **Unidades de** o ficheiro. Escolla cal é unha unidade no ficheiro e prema {{ui:Usar estas unidades}}. Non se coloca nada antes de que responda.
4. {{ui:Cancelar}} (ou {{key:Esc}}) non trae nada.

## Que ficheiros indican as súas unidades

- **DWG e DXF**: as unidades de inserción do debuxo (`$INSUNITS`). Un ficheiro sen elas pregunta.
- **Nubes de puntos**: LAS e LAZ cun sistema de coordenadas, E57, PTX e PLY indican as súas. Os demais preguntan.
- **OBJ**: nunca indica unidades. Pregúntase.
- **glTF e GLB**: metros, pola regra do propio formato.
- **Imaxes**: non teñen tamaño propio. `IMAGEATTACH` pide a largura, e ofrece a largura que deu antes a ese ficheiro.
- **Escaneos**: un escaneo que indica a súa densidade (puntos por polgada) entra co seu tamaño real nas unidades do debuxo; `SCANATTACH` segue pedindo a largura.
- **O complemento Nubes de puntos**: pregunta cando constrúe unha nube cuxo ficheiro non indica unidade, e etiqueta os números da nube coa unidade que leva.

## Para ter en conta

- Abrir un DWG ou DXF como debuxo propio non pregunta nada: a liña de comandos di que unidades indica o ficheiro, ou que non indica ningunha. {{ui:Propiedades}} define as unidades dun debuxo.
- Cando este debuxo tampouco ten unidades, un ficheiro non se pode converter: colócase número por número e a liña de comandos di iso.
- A resposta recórdase para ese ficheiro neste ordenador, en todas as aplicacións de CadCraft. A próxima vez que entre non se pregunta, e a liña de comandos di que se usaron as unidades recordadas.
- Para que se pregunte de novo: a paleta de comandos ({{key:Mod+K}}) › **Preguntar de novo polas unidades dos ficheiros importados**.
