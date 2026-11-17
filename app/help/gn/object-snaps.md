---
title: Ajustar a puntos de objetos
summary: Usá ajustes a objetos, Ortogonal y la cuadrícula para elegir con el mouse puntos finales, puntos medios, centros e intersecciones exactos.
keywords: osnap, ajuste a objeto, punto final, punto medio, centro, intersección, perpendicular, cuadrante, más cercano, nodo, inserción, ortogonal, cuadrícula, f3, f8, f7, rastreo polar, polar, polarang, rastreo de ajuste a objetos, otrack, rastreo, f10, f11
from: 3cf17f94
---

## Lo que vas a crear

Un rectángulo con sus dos diagonales, un círculo centrado donde se cruzan, y una línea desde el medio de un lado del cuadrado hasta el círculo. Cada punto se elige con el mouse, y cada punto es exacto.

## Cómo funciona el ajuste

Mientras un comando pide un punto, CadCraft busca puntos de ajuste a unos 10 píxeles de la cruz del cursor. Cuando encuentra uno, aparecen un marcador y una etiqueta ("Punto final", "Intersección"), y un clic cae **exactamente** en ese punto, no donde está la cruz.

Los ajustes están activados cuando {{ui:Snap}} en la barra de estado está presionado. {{key:F3}} lo activa y desactiva.

Los ajustes que podés usar son:

| Ajuste | Cae sobre |
|---|---|
| Punto final | Los extremos de líneas, arcos y segmentos de polilínea |
| Punto medio | El medio de líneas, arcos y segmentos de polilínea |
| Centro | El centro de círculos y arcos, y de segmentos de arco de polilínea |
| Cuadrante | Los puntos de 0, 90, 180 y 270 grados de círculos y arcos |
| Intersección | Donde se cruzan dos objetos |
| Perpendicular | El punto sobre un objeto en ángulo recto con el último punto (necesita un punto base) |
| Tangente | El punto de un círculo o arco donde una línea desde el último punto apenas lo toca. Sin último punto todavía (el primer punto de una línea), el marcador dice "diferido": el punto de contacto se calcula cuando se conoce el siguiente punto, así que una línea de Tangente a Tangente toca ambos círculos |
| Más cercano | El punto más cercano de cualquier objeto |
| Nodo | Objetos de punto |
| Inserción | El punto de inserción de texto y referencias de bloque |

Todos están activados por defecto excepto Tangente y Más cercano. Más cercano suele ganar cuando querés otra cosa; activá Tangente cuando lo necesites.

## Elegir tus ajustes

1. Hacé clic en la pequeña flecha al lado de {{ui:Snap}} en la barra de estado. Se abre la lista {{ui:Object snaps}}.
2. Marcá o desmarcá ajustes. Los cambios se aplican enseguida.
3. Hacé clic en la flecha otra vez para cerrar la lista.

CadCraft recuerda tu elección, y las configuraciones de {{ui:Grid}}, {{ui:Ortho}} y {{ui:Snap}}, en este navegador.

## Pasos

1. Escribí `REC` y presioná {{key:Enter}}.
2. Escribí `0,0` y presioná {{key:Enter}}.
3. Escribí `@4000,3000` y presioná {{key:Enter}}. Aparece un rectángulo.
4. Hacé clic en {{ui:Extents}}.
5. Escribí `L` y presioná {{key:Enter}}.
6. Mové la cruz a la esquina inferior izquierda. El marcador dice "Punto final". Hacé clic.
7. Movete a la esquina superior derecha hasta que aparezca "Punto final". Hacé clic.
8. Presioná {{key:Enter}} para terminar la línea.
9. Presioná {{key:Enter}} otra vez para repetir {{cmd:LINE}}, y dibujá la otra diagonal desde la esquina inferior derecha hasta la superior izquierda de la misma manera.
10. Escribí `C` y presioná {{key:Enter}} para empezar un círculo.
11. Mové la cruz a donde se cruzan las diagonales. El marcador dice "Intersección". Hacé clic.
12. Escribí `800` y presioná {{key:Enter}}.

Deberías ver un círculo centrado exactamente en el cruce.

13. Escribí `L` y presioná {{key:Enter}}.
14. Movete al medio del lado izquierdo del rectángulo hasta que aparezca "Punto medio". Hacé clic.
15. Mové la cruz sobre el círculo, en su lado izquierdo. El marcador dice "Perpendicular" o "Cuadrante"; aquí son el mismo punto. Hacé clic.
16. Presioná {{key:Enter}}.

La nueva línea va desde el medio del lado izquierdo y se detiene exactamente en el círculo.

## Saltear un ajuste por un solo clic

Mantené presionado {{key:Shift}} mientras hacés clic. Los ajustes a objetos se ignoran para ese clic, y el punto va exactamente donde está la cruz (o en la dirección de Ortogonal, si está activado).

## Ortogonal

{{ui:Ortho}} ({{key:F8}}) mantiene el próximo punto recto a lo ancho o recto hacia arriba y abajo desde el punto base. Se aplica a los clics y a la entrada de distancia directa (un número solo escrito en el aviso). Los ajustes a objetos ganan sobre Ortogonal: si aparece un marcador de ajuste, el clic va al ajuste.

## Rastreo polar

{{ui:Polar}} ({{key:F10}}) es Ortogonal en más ángulos. Mientras un comando tiene un punto base (el último punto de una línea, el punto base de un desplazamiento), el puntero se alinea cuando se acerca a un rayo desde ese punto en un múltiplo del paso polar: aparece una línea punteada, y una etiqueta junto a la cruz dice `Polar: 1200 < 30°`. Hacé clic para usar ese punto, o escribí una distancia: `1200` avanza exactamente 1200 sobre el rayo.

El paso es de 90° hasta que lo cambies: escribí {{cmd:POLARANG}}, presioná {{key:Enter}}, y escribí `30` (o 45, 22.5, 15 …). Polar y Ortogonal se excluyen mutuamente: activar uno desactiva el otro.

## Rastreo de ajuste a objetos

{{ui:Track}} ({{key:F11}}) alinea el puntero con los puntos de ajuste donde te detuviste, así podés elegir un punto a la altura de una esquina y por encima de otra sin dibujar líneas auxiliares.

1. Activá {{ui:Snap}} y {{ui:Track}}, y empezá un comando que pida un punto (`L`).
2. Apoyá el puntero sobre un punto de ajuste, como una esquina, durante medio segundo, sin hacer clic. Aparece una pequeña cruz que lo marca: queda adquirido. Apoyate otra vez sobre él para soltarlo.
3. Movete en línea recta desde él, horizontal o verticalmente. Una línea punteada sigue al puntero y la etiqueta dice `Rastreo: 600 < 90°`. Hacé clic, o escribí una distancia.
4. Adquirí un segundo punto, y movete a donde la vertical de uno se encuentra con la horizontal del otro: el puntero se ajusta a ese cruce (`Rastreo: donde se encuentran dos líneas`).

Con {{ui:Polar}} también activado, los puntos adquiridos se rastrean en cada ángulo polar. Se guardan hasta siete puntos, hasta que termina el comando. {{key:Shift}} desactiva el rastreo por un clic, igual que los ajustes.

## Cuadrícula

{{ui:Grid}} ({{key:F7}}) muestra una cuadrícula de líneas detrás del dibujo, con líneas más gruesas cada cinco líneas; el espaciado cambia al hacer zoom. Es solo una guía hasta que activás {{ui:Grid snap}} ({{key:F9}}): entonces los clics caen en el punto de cuadrícula más cercano, salvo que un ajuste a objeto tome el punto antes.

## Teclas de función en tu computadora

{{key:F9}} es Ajuste a cuadrícula, {{key:F10}} es Polar y {{key:F11}} es Rastreo.

:::mac
En una Mac, F3, F7, F8 y F9 normalmente controlan Mission Control y los medios. Mantené **fn** con la tecla, o activá las teclas de función estándar, como se describe en [Teclas, ratones y trackpads](common:keys). Los botones de la barra de estado siempre funcionan.
:::

:::firefox
En Firefox, F7 también es la tecla de navegación con cursor. Si Firefox pregunta si activar la navegación con cursor, elegí **No**. Usá el botón {{ui:Grid}} si la pregunta sigue apareciendo.
:::

:::touch
En una pantalla táctil no hay desplazamiento del puntero, así que el marcador de ajuste solo aparece donde toca tu dedo. Hacé zoom de cerca para objetivos pequeños, o escribí las coordenadas.
:::

## Errores comunes

- **El clic fue al punto equivocado.** Mirá la etiqueta del marcador antes de hacer clic: Punto final gana sobre Punto medio cuando ambos están cerca. Hacé zoom, o desmarcá los ajustes que no necesitás.
- **No aparece ningún marcador.** {{ui:Snap}} está apagado, o el ajuste que querés está desmarcado, o el objeto está en una capa apagada o congelada.
- **Los ajustes agarran lo que no corresponde en un plano recargado.** Hacé zoom. La distancia de ajuste se mide en píxeles de pantalla, así que al hacer zoom se vuelve más chica sobre el dibujo.
- **Esperar que Shift dé una línea recta.** En CadCraft, Shift desactiva los ajustes por un clic. Usá {{ui:Ortho}} para líneas rectas.
- **Esperar que los puntos caigan sobre puntos de cuadrícula.** Activá {{ui:Grid snap}} ({{key:F9}}), o escribí coordenadas para números redondos.
