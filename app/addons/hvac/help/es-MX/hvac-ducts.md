---
title: HVAC: dibujo de tramos de ducto
summary: Dibuje tramos de ducto rectangulares, redondos y ovales planos sobre su eje central; los codos, transiciones, tes, tomas y laterales se generan solos.
keywords: ducto, tramo, eje central, codo, codo de radio, codo a inglete, transición, reductor, te, toma, lateral, derivación, parte inferior del ducto, elevación
from: 56124011
---

## Dibujar un tramo

Escriba {{cmd:DUCT}} y haga clic en los puntos del eje central del tramo. Mientras hace clic, estas opciones cambian lo que sigue:

- {{ui:Forma}} — rectangular, redonda u oval plana (un oval plano se coloca con sus lados planos arriba y abajo).
- {{ui:Tamaño}} — ancho × alto (`24x12`, `600x300`) o un diámetro (`14`). Las secciones siguientes lo toman; un cambio de tamaño genera una transición.
- {{ui:Aire (caudal)}} — el caudal de la sección; el complemento la dimensiona por fricción igual (vea [Dimensionamiento de ductos](topic:hvac-sizing)).
- {{ui:Elevación}} — la parte inferior del ducto, antes del primer punto (9 ft o 2700 mm, salvo que lo cambie en {{ui:Configuración}}).
- {{ui:Sistema}} — suministro, retorno, extracción, aire exterior u otro. Cada uno tiene su propia capa (`M-HVAC-SUPP`, `M-HVAC-RETN`, `M-HVAC-EXHS`, `M-HVAC-OAIR`, `M-HVAC-DUCT`) y su propio color en la pestaña {{ui:3D}}.
- {{ui:Etiqueta}} — un nombre como `S-1`, que usan el cuadro y la pestaña 3D.
- {{ui:Deshacer}} — quita el último punto.

Un tramo admite hasta 100 puntos; inicie otro tramo desde su extremo para seguir.

## Los accesorios que genera

- **Codos** en cada vuelta. El radio del eje central de un codo de radio es el ancho del ducto multiplicado por la relación del tramo (1 para rectangular, 1.5 para redondo y oval plano, como es habitual; cámbiela en {{ui:Propiedades}}). Un codo a inglete tiene garganta cuadrada y una línea de inglete; elíjalo en {{ui:Configuración}} o en {{ui:Propiedades}}.
- **Transiciones** donde cambian el tamaño o la forma, justo después de la esquina (después de su codo). Cada lado tiene una pendiente máxima de 15° (un valor predeterminado que usa el complemento, no un valor del código), y ninguna es más corta que 6 in o 150 mm. Redondo a redondo se llama reductor. La parte inferior queda plana; la superior se escalona.
- **Derivaciones**: comience un tramo dentro de otro, o termínelo dentro de uno, y el punto se mueve al eje central de ese tramo. La derivación se recorta hasta el lado del principal, recibe un cuello de 2 in o 50 mm, y el principal recibe una abertura en ese punto. Una derivación redonda u oval plana es una toma; una rectangular es una te cuando llega perpendicular al principal (dentro de 15°) y un lateral en los demás casos.

## Cambiar un tramo

- Arrastre el pinzamiento de un punto para moverlo; los accesorios lo siguen.
- {{ui:Propiedades}} › {{ui:Tramo de ducto}}: etiqueta, sistema, forma, tamaño (todo el tramo), parte inferior del ducto, codos, relación de radio, material y etiquetas de tamaño.
- {{cmd:DUCTSIZE}}: elija una sección y luego dimensiónela según su caudal, escriba un tamaño o cambie su forma; para esa sección o para todo el tramo.
- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:COPY}} y {{cmd:ERASE}} funcionan como en cualquier objeto. Una copia recibe su propia identidad. Una derivación cuyo principal se aleja deja de estar conectada: vuelva a dibujarla hasta el principal.
