---
title: Climatización: dibujar tramos de conducto
summary: Dibuje tramos de conducto rectangular, redondo y oval plano por su eje; los codos, transiciones, tes, tomas y ramales laterales salen solos.
keywords: conducto, tramo, eje, codo, codo de radio, codo a inglete, transición, reducción, te, toma, ramal, cara inferior, cota
from: 56124011
---

## Dibujar un tramo

Escriba {{cmd:DUCT}} y haga clic en los puntos del eje del tramo. Mientras hace clic, estas opciones cambian lo que viene a continuación:

- {{ui:Forma}} — rectangular, redonda u oval plana (una oval plana se coloca con sus caras planas arriba y abajo).
- {{ui:Tamaño}} — ancho × alto (`24x12`, `600x300`) o un diámetro (`14`). Los tramos siguientes lo heredan; un cambio de tamaño crea una transición.
- {{ui:Caudal}} — el caudal de la sección; el complemento lo dimensiona por pérdida de carga constante (véase [Dimensionado de conductos](topic:hvac-sizing)).
- {{ui:Cota}} — la cara inferior del conducto, antes del primer punto (9 ft o 2700 mm salvo que lo cambie en {{ui:Ajustes}}).
- {{ui:Sistema}} — impulsión, retorno, extracción, aire exterior u otro. Cada uno tiene su propia capa (`M-HVAC-SUPP`, `M-HVAC-RETN`, `M-HVAC-EXHS`, `M-HVAC-OAIR`, `M-HVAC-DUCT`) y su propio color en la pestaña {{ui:3D}}.
- {{ui:Etiqueta}} — un nombre como `S-1`, usado por la tabla y por la pestaña 3D.
- {{ui:Deshacer}} — quita el último punto.

Un tramo admite hasta 100 puntos; para seguir, empiece otro tramo desde su final.

## Los accesorios que genera

- **Codos** en cada giro. El radio del eje de un codo de radio es el ancho del conducto por la relación del tramo (1 para rectangular, 1.5 para redondo y oval plano, como es habitual; cámbiela en {{ui:Propiedades}}). Un codo a inglete tiene garganta cuadrada y una línea de inglete; elíjalo en {{ui:Ajustes}} o en {{ui:Propiedades}}.
- **Transiciones** donde cambian el tamaño o la forma, justo después del vértice (tras su codo). Cada lado tiene una pendiente de como máximo 15° (valor por defecto que usa el complemento, no un valor de código), y ninguna es más corta que 6 in o 150 mm. De redondo a redondo se llama reducción. La cara inferior queda plana; la superior escalona.
- **Derivaciones**: empiece un tramo dentro de otro, o termínelo dentro de uno, y el punto se mueve sobre el eje de ese tramo. La derivación se recorta hasta el lado del principal, recibe un cuello de 2 in o 50 mm, y el principal recibe allí una abertura. Una derivación redonda u oval plana es una toma; una rectangular es una te cuando encuentra al principal en escuadra (dentro de 15°), y un ramal lateral en caso contrario.

## Cambiar un tramo

- Arrastre el pinzamiento de un punto para moverlo; los accesorios lo siguen.
- {{ui:Propiedades}} › {{ui:Tramo de conducto}}: etiqueta, sistema, forma, tamaño (de todo el tramo), cota de la cara inferior, codos, relación de radio, material y rótulos de tamaño.
- {{cmd:DUCTSIZE}}: elija una sección y dimensiónela a partir de su caudal, escriba un tamaño o cambie su forma; para esa sección o para todo el tramo.
- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:COPY}} y {{cmd:ERASE}} funcionan como en cualquier objeto. Una copia obtiene su propia identidad. Una derivación cuyo principal se aleja deja de estar conectada: vuelva a dibujarla hasta el principal.
