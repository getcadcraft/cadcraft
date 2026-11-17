---
title: Apilar plantas en un dibujo
summary: Dibuje la primera planta sobre la planta baja en las mismas coordenadas y desactive cada planta por separado, sin referencias externas (Xref).
keywords: planta, plantas, FLOORS, FLR, FLOOR, FLOORLAYERS, planta, nivel, apilar, capa de diseño, espacio modelo, subyacente, xref
from: 7440fc87
---

Las plantas le permiten apilar planos en un solo espacio modelo. Cada planta tiene sus propios objetos, y las capas siguen funcionando en todas ellas. Un muro en `P-Walls` puede estar en cualquier planta.

## Empezar

Escriba `FLOORS` (`FLR`), o elija {{ui:Plantas…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}, y después elija {{ui:Empezar con plantas}}. Lo que haya dibujado hasta ahora pasa a la planta baja.

## Dibujar en una planta

Elija la planta con el botón redondo del panel. Los objetos nuevos se crean en ella.

Las demás plantas visibles aparecen atenuadas debajo. Puede ajustarse a ellas, de modo que la primera planta quede alineada con la planta baja, pero no puede modificarlas hasta que las convierta en la planta activa. El ojo desactiva una planta. Los muros solo se unen a muros de su propia planta.

Para empezar una planta a partir de la de abajo, seleccione lo que quiera, elija la planta en el panel y pulse {{ui:Copiar allí}}.

## Colocar plantas en las hojas

Seleccione una ventana gráfica en una hoja y elija su planta en {{ui:Planta mostrada}} en Propiedades. Una ventana gráfica sin planta elegida muestra todas las plantas que están activadas.

## Enviar el archivo a otra persona

Otros programas CAD no conocen las plantas, así que muestran todas juntas. Antes de enviar un archivo, elija {{ui:Convertir plantas en capas}} en el panel, o escriba `FLOORLAYERS`. Cada objeto pasa a una capa con el nombre de su planta, como `Planta baja-P-Walls`, para que sigan pudiendo desactivar cada planta. Deshacer lo devuelve a su estado. CadCraft conserva las plantas en el archivo DWG o DXF que guarda.
