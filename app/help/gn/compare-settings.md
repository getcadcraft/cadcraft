---
title: Comparar configuraciones
summary: Poné una al lado de la otra dos cotas, estilos de texto, capas, hojas o configuraciones de unidades — en un plano o entre dos planos abiertos — mirá qué difiere y copiá valores de uno al otro.
keywords: comparar, comparar configuraciones, comparar estilos, estilo de cota, estilo de texto, configuración de capas, configuración de página, unidades, diferencias, estándares, copiar configuraciones, comparesettings
from: 545f547f
---

## Lo que va a aprender

Cómo verificar si dos planos (o dos estilos dentro de un mismo plano) están configurados igual, y alinear uno con el otro un valor a la vez.

## Comparar

1. Abrí los planos que querés comparar, cada uno en su propia pestaña (o solo uno, para comparar dos de sus estilos).
2. Hacé clic en {{ui:Vista}} › {{ui:Más}} › {{ui:Comparar configuración…}}, o escribí `CMPSET` y apretá {{key:Enter}}.
3. En {{ui:Comparar}}, elegí qué: {{ui:Estilos de cota}}, {{ui:Estilos de texto}}, {{ui:Capas}}, {{ui:Hojas (configuración de página)}} o {{ui:Unidades}}.
4. A la izquierda, elegí el elemento de este plano; debajo de {{ui:Contra}}, elegí este plano u otro abierto, y después su elemento.

Cada propiedad aparece en una fila, el valor de este plano a la izquierda y el del otro a la derecha. Las filas que difieren se marcan con color, y la línea sobre la tabla dice cuántas son. {{ui:Solo lo que difiere}} oculta el resto. {{ui:Configuración para nuevas cotas}} es lo que toman las cotas nuevas del plano.

## Copiar un valor de un lado al otro

- Hacé clic en la flecha que apunta a la derecha en una fila ({{ui:Copiar a la derecha}}) para copiar el valor izquierdo a la derecha, o la flecha que apunta a la izquierda para el otro sentido.

El valor pasa al plano como un solo paso de {{ui:Deshacer}}: cambiá a su pestaña y apretá {{key:Mod+Z}} para deshacerlo. Copiar a una capa o estilo que el otro plano todavía no tiene lo crea allí.
