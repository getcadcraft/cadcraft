---
title: Apilar niveles en un dibujo
summary: Dibuje el primer nivel sobre la planta baja en las mismas coordenadas y desactive cada nivel, sin Xrefs.
keywords: nivel, niveles, FLOORS, FLR, FLOOR, FLOORLAYERS, planta, piso, apilar, capa de diseño, espacio modelo, subyacente, xref
from: 7440fc87
---

Los niveles le permiten apilar planos en un solo espacio modelo. Cada nivel tiene sus propios objetos, y las capas siguen funcionando en todos ellos. Un muro en `P-Walls` puede estar en cualquier nivel.

## Empezar

Escriba `FLOORS` (`FLR`), o elija {{ui:Floors…}} en el menú {{ui:More}} del grupo {{ui:View}} y luego elija {{ui:Start with floors}}. Lo que haya dibujado hasta ahora queda en la planta baja.

## Dibujar en un nivel

Elija el nivel con el botón redondo del panel. Los objetos nuevos quedan en él.

Los demás niveles visibles aparecen atenuados debajo. Puede usar referencias a objetos en ellos, así que el primer nivel se alinea con la planta baja, pero no puede cambiarlos hasta que los haga el nivel activo. El ojo desactiva un nivel. Los muros solo se unen con muros de su propio nivel.

Para iniciar un nivel a partir del inferior, seleccione lo que quiera, elija el nivel en el panel y pulse {{ui:Copy there}}.

## Poner niveles en hojas

Seleccione una ventana gráfica en una hoja y elija su nivel en {{ui:Floor shown}} en Propiedades. Una ventana gráfica sin nivel elegido muestra todos los niveles visibles.

## Enviar el archivo a otra persona

Otros programas CAD no conocen los niveles, así que los muestran todos juntos. Antes de enviar un archivo, elija {{ui:Turn floors into layers}} en el panel, o escriba `FLOORLAYERS`. Cada objeto pasa a una capa con el nombre de su nivel, como `Ground floor-P-Walls`, así que puede seguir desactivando cada nivel. Deshacer lo revierte. CadCraft conserva los niveles en el archivo DWG o DXF que guarda.
