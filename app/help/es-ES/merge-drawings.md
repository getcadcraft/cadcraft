---
title: Fusionar las ediciones de dos personas sobre un mismo dibujo
summary: Permita que git, Fossil o Mercurial fusionen dos copias de un DWG o DXF objeto por objeto, usando la clave que CadCraft guarda en cada objeto.
keywords: fusionar, merge, git, fossil, mercurial, control de versiones, diferencias, conflicto, tres vías, cadcraft merge, clave, gitattributes, DWG, DXF
from: 71482bf9
---

Dos personas editan el mismo dibujo. Si cambiaron objetos distintos, la fusión puede ser automática: no hay nada que rehacer a mano.

## Lo que lo hace posible

CadCraft da a cada objeto que dibuja una **clave** corta que nunca cambia y que nunca se asigna a dos objetos. Se guarda con el objeto en el DWG o DXF (como datos extra que otros programas conservan). La fusión busca los objetos por esa clave, no por su posición en el archivo, porque cada programa renumera las posiciones al guardar. Desactívelo en {{ui:Parámetros}} › CadCraft › Archivos preparados para fusionar si nunca fusiona; los archivos pesan alrededor de un 10 por ciento menos.

Un dibujo guardado antes de que existieran las claves también se fusiona: sus objetos reciben una clave según su lugar en el archivo, la misma para todos los que lo abran.

## Configurarlo

Git necesita dos líneas una vez por repositorio:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# una vez, en cada equipo
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sin git, ejecútelo a mano: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil y Mercurial toman los mismos tres archivos en su propio ajuste de herramienta de fusión.

## Las reglas

- Un objeto cambiado solo en un lado se toma. El mismo cambio en ambos lados se toma una vez.
- La misma propiedad cambiada de dos formas es un **conflicto**: su lado se mantiene y el informe enumera los dos valores. Abra el resultado, mire ese objeto y corríjalo a mano.
- Un objeto añadido en cualquiera de los lados se conserva. Un objeto borrado en un lado y sin tocar en el otro se borra. Borrado en un lado y cambiado en el otro: se borra, y se informa.
- Las capas, los bloques, los estilos de texto y de cota, las hojas y las vistas con nombre se fusionan del mismo modo. Las restricciones siguen a los objetos que nombran.
- El resultado se escribe en el mismo formato y versión de archivo que el suyo.

No se fusiona: el orden en que se dibujan los objetos es el suyo, y después los objetos que añadió el otro lado. Los cambios en la misma definición de bloque en ambos lados son un conflicto, nunca se mezclan. No se sube nada; todo se ejecuta en su equipo.
