---
title: Tuberías: dibujo de tramos de tubería
summary: Dibuje tramos de tubería por material, clase y tamaño nominal, de línea simple o doble; los codos, reducciones, tes y uniones en Y se crean solos.
keywords: tubería, tramo, eje, nps, dn, cédula 40, cédula 80, tipo k, tipo l, tipo m, codo, reducción, te, unión en Y, ramal, línea doble, línea simple, elevación
from: d0ed1b49
---

## Dibujo de un tramo

Escriba {{cmd:PIPE}} y pulse los puntos del eje del tramo. Antes del primer punto puede cambiar:

- {{ui:Material}} y {{ui:Clase}} — acero cédula 40 u 80, cobre tipo K, L o M, PVC cédula 40 u 80, PEX SDR 9 (vea [Tamaños de tubería y su origen](topic:piping-tables)).
- {{ui:Tamaño}} — un tamaño nominal: `2`, `1-1/2` (o `1 1/2`, `1.5`), o `DN50` en un dibujo métrico. Un tamaño que el material no se fabrica se rechaza. Si cambia el tamaño entre puntos, se crea una reducción.
- {{ui:Sistema}} — agua fría doméstica, caliente, retorno de agua caliente, sanitario, ventilación, pluvial, agua helada, agua caliente de calefacción, gas natural, protección contra incendio u otro. Cada uno tiene su propia capa, etiqueta y color 3D.
- {{ui:Elevación}} — la elevación del eje al inicio.
- {{ui:Inclinación}} — para drenajes (vea [Drenaje y pendiente](topic:piping-drainage)).
- {{ui:Líneas}} — línea simple (el eje, con símbolos) o línea doble (el diámetro exterior de la tubería a escala).
- {{ui:Etiqueta}} — un nombre como `CW-1`, que se muestra en la etiqueta.

## Los accesorios que crea

- **Codos** en cada giro: de 90° y 45° por nombre, otros ángulos por su ángulo. Los codos de acero se dibujan con la curva de radio largo de ASME B16.9 (1.5 veces el tamaño desde 3/4 in); las curvas de otros materiales se dibujan a un solo diámetro exterior: una decisión de dibujo, no una dimensión del accesorio.
- **Reducciones** donde cambia el tamaño, concéntricas, justo después de la esquina.
- **Tes** donde un tramo empieza o termina sobre otro: una te cuando llega a la tubería principal en escuadra (dentro de 15°), una te reducida cuando es más pequeña, y una unión en Y cuando llega en ángulo.

## Cambio de un tramo

Arrastre el pinzamiento de un punto para moverlo. {{ui:Propiedades}} › {{ui:Tramo de tubería}} tiene la etiqueta, el sistema, el material y la clase, el tamaño (todo el tramo), la elevación, la pendiente y las líneas, y muestra el diámetro exterior e interior del tramo. {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:COPY}} y {{cmd:ERASE}} funcionan como en cualquier objeto.
