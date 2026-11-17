---
title: El puntero salta o se retrasa sobre el dibujo
summary: Qué hacer cuando la cruz no sigue al ratón con suavidad, en una computadora antigua o lenta.
keywords: salto del cursor, retraso del puntero, cruz lenta, cursor entrecortado, computadora antigua, tarjeta gráfica antigua, gráficos integrados, aceleración por hardware, puntero más fluido, portátil lenta
from: 39dc9057
---

CadCraft se ejecuta en el navegador (CadCraft Studio también es una vista de navegador), así que nada en él está diseñado para una tarjeta gráfica u otra. La cruz la dibuja la aplicación, por lo que solo puede moverse tan rápido como la aplicación puede dibujar un cuadro.

## Deje que CadCraft desactive los extras

1. Abra {{ui:Parámetros}} (el engranaje de la esquina superior derecha) y permanezca en la pestaña {{ui:CadCraft}}.
2. Elija {{ui:Puntero más fluido en computadoras lentas}}.
3. Seleccione {{ui:Activada}}.

Con esta opción activada, se usa el puntero de cruz de su propia computadora en lugar de la cruz y la caja de selección dibujadas (también la cruz de pantalla completa), y el objeto bajo el puntero se ilumina cuando el puntero se detiene, en lugar de mientras se mueve. Las referencias a objetos, el rastreo y la banda elástica funcionan igual que antes.

{{ui:Automática}} es el modo con el que inicia CadCraft: observa cuánto tardan los cuadros mientras usted mueve el puntero, y lo activa por sí mismo cuando se mantienen lentos durante unos segundos. Se lo avisa una vez cuando lo hace. {{ui:Desactivadas}} conserva la cruz dibujada, sin importar la velocidad.

## Si sigue lento

- Compruebe que la aceleración por hardware esté activada en su navegador: abra `chrome://gpu` (o `edge://gpu`) en una pestaña nueva. Si las primeras líneas dicen "Solo software" o "Desactivado", el navegador dibuja sin la tarjeta gráfica. Actualizar el controlador de gráficos suele solucionarlo.
- Cierre otras pestañas y programas pesados, y pruebe con una ventana de navegador más pequeña.
- Infórmenos mediante {{ui:Ayuda}}, {{ui:Informar de un problema}}: indique si usa el navegador o CadCraft Studio, su versión y lo que muestra la página gpu.
