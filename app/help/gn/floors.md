---
title: Apilar pisos en un solo dibujo
summary: Dibuje la primera planta sobre la planta baja en las mismas coordenadas y apague cada piso, sin Xrefs.
keywords: piso, pisos, FLOORS, FLR, FLOOR, FLOORLAYERS, planta, nivel, apilar, capa de diseño, espacio modelo, subyacente, xref
from: 7440fc87
---

Los pisos le permiten apilar plantas en un solo espacio modelo. Cada piso tiene sus propios objetos, y las capas siguen funcionando en todos ellos. Un muro en `P-Walls` puede estar en cualquier piso.

## Empezar

Escriba `FLOORS` (`FLR`), o elija {{ui:Pisos…}} en el menú {{ui:Más}} del grupo {{ui:Vista}}, y luego elija {{ui:Empezar con pisos}}. Lo que ha dibujado hasta ahora queda en la planta baja.

## Dibujar en un piso

Elija el piso con el botón redondo del panel. Los objetos nuevos van en él.

Los otros pisos visibles se muestran atenuados debajo. Puede ajustarse a ellos, así que la primera planta queda alineada con la planta baja, pero no puede cambiarlos hasta que los haga piso activo. El ojo apaga un piso. Los muros solo se unen con muros de su propio piso.

Para empezar un piso a partir del de abajo, seleccione lo que quiere, elija el piso en el panel y presione {{ui:Copiar ahí}}.

## Poner pisos en hojas

Seleccione un viewport en una hoja y elija su piso en {{ui:Piso mostrado}} en Propiedades. Un viewport sin piso elegido muestra todos los pisos visibles.

## Enviar el archivo a otra persona

Otros programas CAD no conocen los pisos, así que muestran todos juntos. Antes de enviar un archivo, elija {{ui:Convertir pisos en capas}} en el panel, o escriba `FLOORLAYERS`. Cada objeto pasa a una capa con el nombre de su piso, como `Ground floor-P-Walls`, para que puedan seguir apagando cada piso. Deshacer lo revierte. CadCraft mantiene los pisos en el archivo DWG o DXF que guarda.
