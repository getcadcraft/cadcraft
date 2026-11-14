---
title: Tuberías: dibujar tramos de tubería
summary: Dibuje tramos de tubería por material, clase y diámetro nominal, de una o doble línea; los codos, reducciones, tes y derivaciones en Y se generan solos.
keywords: tubería, tramo, eje, nps, dn, schedule 40, schedule 80, tipo k, tipo l, tipo m, codo, reducción, te, derivación en Y, ramal, doble línea, línea sencilla, cota
from: d0ed1b49
---

## Dibujar un tramo

Escriba {{cmd:PIPE}} y haga clic en los puntos del eje del tramo. Antes del primer punto puede cambiar:

- {{ui:Material}} y {{ui:Clase}}: acero Schedule 40 u 80, cobre tipo K, L o M, PVC Schedule 40 u 80, PEX SDR 9 (véase [Diámetros y normas de origen](topic:piping-tables)).
- {{ui:Diámetro}}: un diámetro nominal: `2`, `1-1/2` (o `1 1/2`, `1.5`), o `DN50` en un dibujo métrico. No se admite un diámetro que el material no fabrica. Cambiar el diámetro entre puntos crea una reducción.
- {{ui:Sistema}}: agua fría doméstica, agua caliente, retorno de agua caliente, sanitario, ventilación, pluvial, agua refrigerada, agua caliente de calefacción, gas natural, protección contra incendios u otro. Cada uno tiene su propia capa, etiqueta y color 3D.
- {{ui:Cota}}: la cota del eje al inicio.
- {{ui:Pendiente}}: para desagües (véase [Saneamiento y pendiente](topic:piping-drainage)).
- {{ui:Líneas}}: línea sencilla (el eje, con símbolos) o doble línea (el diámetro exterior de la tubería a escala).
- {{ui:Etiqueta}}: un nombre como `CW-1`, que aparece en la etiqueta.

## Los accesorios que genera

- **Codos** en cada giro: de 90° y 45° por nombre, otros ángulos por su ángulo. Los codos de acero se dibujan con la curva de radio largo de ASME B16.9 (1.5 × el diámetro desde 3/4 in); las curvas de otros materiales se dibujan con un solo diámetro exterior: una decisión de dibujo, no una dimensión del accesorio.
- **Reducciones** donde cambia el diámetro, concéntricas, justo después de la esquina.
- **Tes** donde un tramo empieza o termina en otro: una te cuando llega a la principal en escuadra (dentro de 15°), una te reducida cuando es más pequeña, y una derivación en Y en ángulo.

## Cambiar un tramo

Arrastre el pinzamiento de un punto para moverlo. {{ui:Propiedades}} › {{ui:Tramo de tubería}} tiene la etiqueta, el sistema, el material y la clase, el diámetro (todo el tramo), la cota, la pendiente y las líneas, y muestra el diámetro exterior e interior del tramo. {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:COPY}} y {{cmd:ERASE}} funcionan como en cualquier objeto.
