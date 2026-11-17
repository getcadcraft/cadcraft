---
title: Ajustar a puntos de objetos
summary: Use referencias a objetos, Orto y la rejilla para elegir con el ratón extremos, puntos medios, centros e intersecciones exactos.
keywords: osnap, referencia a objeto, extremo, punto medio, centro, intersección, perpendicular, cuadrante, más cercano, nodo, inserción, orto, rejilla, f3, f8, f7, rastreo polar, polar, polarang, rastreo de referencias a objetos, otrack, rastreo, f10, f11
from: 3cf17f94
---

## Qué va a crear

Un rectángulo con sus dos diagonales, un círculo centrado donde se cruzan, y una línea desde el punto medio de un lado hasta el círculo. Cada punto se elige con el ratón, y cada punto es exacto.

## Cómo funciona el ajuste

Mientras un comando pide un punto, CadCraft busca puntos de referencia a unos 10 píxeles de la cruz del cursor. Cuando encuentra uno, aparecen un marcador y una etiqueta ("Extremo", "Intersección"), y un clic cae **exactamente** en ese punto, no donde está la cruz.

Las referencias están activas cuando {{ui:Referencia}} en la barra de estado está pulsado. {{key:F3}} las activa y desactiva.

Las referencias que puede usar son:

| Referencia | Se ajusta a |
|---|---|
| Extremo | Los extremos de líneas, arcos y segmentos de polilínea |
| Punto medio | El punto medio de líneas, arcos y segmentos de polilínea |
| Centro | El centro de círculos y arcos, y de los segmentos de arco de una polilínea |
| Cuadrante | Los puntos de 0, 90, 180 y 270 grados de círculos y arcos |
| Intersección | Donde se cruzan dos objetos |
| Perpendicular | El punto de un objeto en ángulo recto con el último punto (necesita un punto base) |
| Tangente | El punto de un círculo o arco donde una línea desde el último punto lo toca justo. Sin último punto todavía (el primer punto de una línea), el marcador dice "diferido": el punto de tangencia se calcula cuando se conoce el siguiente punto, de modo que una línea de Tangente a Tangente toca ambos círculos |
| Más cercano | El punto más cercano de cualquier objeto |
| Nodo | Objetos de punto |
| Inserción | El punto de inserción de textos y referencias de bloque |

Todas están activadas por defecto salvo Tangente y Más cercano. Más cercano suele ganar cuando quiere otra cosa; active Tangente cuando la necesite.

## Elegir sus referencias

1. Haga clic en la pequeña flecha junto a {{ui:Referencia}} en la barra de estado. Se abre la lista {{ui:Referencias a objetos}}.
2. Marque o desmarque referencias. Los cambios se aplican al momento.
3. Haga clic de nuevo en la flecha para cerrar la lista.

CadCraft recuerda su elección, y los ajustes de {{ui:Rejilla}}, {{ui:Orto}} y {{ui:Referencia}}, en este navegador.

## Pasos

1. Escriba `REC` y pulse {{key:Enter}}.
2. Escriba `0,0` y pulse {{key:Enter}}.
3. Escriba `@4000,3000` y pulse {{key:Enter}}. Aparece un rectángulo.
4. Haga clic en {{ui:Extensión}}.
5. Escriba `L` y pulse {{key:Enter}}.
6. Mueva la cruz del cursor a la esquina inferior izquierda. El marcador muestra "Extremo". Haga clic.
7. Mueva a la esquina superior derecha hasta que aparezca "Extremo". Haga clic.
8. Pulse {{key:Enter}} para terminar la línea.
9. Pulse {{key:Enter}} de nuevo para repetir {{cmd:LINE}}, y dibuje la otra diagonal de la misma forma, desde la esquina inferior derecha hasta la superior izquierda.
10. Escriba `C` y pulse {{key:Enter}} para empezar un círculo.
11. Mueva la cruz del cursor a donde se cruzan las diagonales. El marcador muestra "Intersección". Haga clic.
12. Escriba `800` y pulse {{key:Enter}}.

Verá un círculo centrado exactamente en el cruce.

13. Escriba `L` y pulse {{key:Enter}}.
14. Mueva el puntero al punto medio del lado izquierdo del rectángulo hasta que aparezca "Punto medio". Haga clic.
15. Mueva la cruz del cursor sobre el círculo, en su lado izquierdo. El marcador muestra "Perpendicular" o "Cuadrante"; aquí son el mismo punto. Haga clic.
16. Pulse {{key:Enter}}.

La nueva línea va desde el punto medio del lado izquierdo y se detiene exactamente en el círculo.

## Omitir una referencia para un solo clic

Mantenga pulsada {{key:Shift}} mientras hace clic. Las referencias a objetos se ignoran en ese clic, y el punto va exactamente donde está la cruz (o en la dirección de Orto, si Orto está activado).

## Orto

{{ui:Orto}} ({{key:F8}}) mantiene el siguiente punto recto en horizontal o vertical desde el punto base. Se aplica a los clics y a la entrada de distancia directa (un número solo escrito en el aviso). Las referencias a objetos tienen prioridad sobre Orto: si aparece un marcador de referencia, el clic va a la referencia.

## Rastreo polar

{{ui:Polar}} ({{key:F10}}) es Orto con más ángulos. Mientras un comando tiene un punto base (el último punto de una línea, el punto base de un desplazamiento), el puntero se alinea cuando se acerca a un rayo que sale de él en un múltiplo del paso polar: aparece una línea de puntos y una etiqueta junto a la cruz que dice `Polar: 1200 < 30°`. Haga clic para usar ese punto, o escriba una distancia: `1200` avanza exactamente 1200 a lo largo del rayo.

El paso es de 90° hasta que lo cambie: escriba {{cmd:POLARANG}}, pulse {{key:Enter}} y escriba `30` (o 45, 22.5, 15 …). Polar y Orto se excluyen: activar uno desactiva el otro.

## Rastreo de referencias a objetos

{{ui:Rastreo}} ({{key:F11}}) alinea el puntero con los puntos de referencia en los que se ha detenido, de modo que pueda elegir un punto a la misma altura que una esquina y por encima de otra, sin dibujar líneas auxiliares.

1. Active {{ui:Referencia}} y {{ui:Rastreo}}, e inicie un comando que pida un punto (`L`).
2. Detenga el puntero sobre un punto de referencia, como una esquina, durante medio segundo, sin hacer clic. Aparece una pequeña cruz que lo marca: queda adquirido. Deténgase de nuevo sobre él para soltarlo.
3. Mueva el puntero en línea recta desde él, en horizontal o vertical. Una línea de puntos sigue al puntero y la etiqueta dice `Rastreo: 600 < 90°`. Haga clic o escriba una distancia.
4. Adquiera un segundo punto, y mueva hasta donde la vertical de uno se cruza con la horizontal del otro: el puntero se ajusta a ese cruce (`Rastreo: donde se cruzan dos líneas`).

Con {{ui:Polar}} también activado, los puntos adquiridos hacen seguimiento en cada ángulo polar. Se conservan hasta siete puntos, hasta que termina el comando. {{key:Shift}} desactiva el rastreo para un clic, igual que las referencias.

## Rejilla

{{ui:Rejilla}} ({{key:F7}}) muestra una rejilla de líneas detrás del dibujo, con líneas más gruesas cada cinco líneas; el espaciado cambia al hacer zoom. Solo es una guía hasta que active {{ui:Ajuste a la cuadrícula}} ({{key:F9}}): entonces los clics caen en el punto de rejilla más cercano, a menos que una referencia a objeto tome antes el punto.

## Teclas de función en su equipo

{{key:F9}} es Ajuste a la cuadrícula, {{key:F10}} es Polar y {{key:F11}} es Rastreo.

:::mac
En un Mac, F3, F7, F8 y F9 suelen controlar Mission Control y la multimedia. Mantenga pulsada la tecla **fn** junto con la tecla, o active las teclas de función estándar, como se describe en [Teclas, ratones y touchpads](common:keys). Los botones de la barra de estado siempre funcionan.
:::

:::firefox
En Firefox, F7 también es la tecla de navegación con cursor. Si Firefox pregunta si desea activar la navegación con cursor, elija **No**. Use el botón {{ui:Rejilla}} si la pregunta sigue apareciendo.
:::

:::touch
En una pantalla táctil no hay puntero que sobrevuele, así que el marcador de referencia solo aparece donde toca el dedo. Acérquese mucho con el zoom para los objetivos pequeños, o escriba las coordenadas.
:::

## Errores frecuentes

- **El clic fue al punto equivocado.** Mire la etiqueta del marcador antes de hacer clic: Extremo gana a Punto medio cuando ambos están cerca. Acerque el zoom, o desmarque las referencias que no necesite.
- **No aparece ningún marcador.** {{ui:Referencia}} está desactivada, o la referencia que quiere está desmarcada, o el objeto está en una capa desactivada o congelada.
- **Las referencias toman lo que no es en un dibujo con mucho contenido.** Acerque el zoom. La distancia de ajuste se mide en píxeles de pantalla, así que al acercar el zoom se hace más pequeña sobre el dibujo.
- **Esperar que {{key:Shift}} dé una línea recta.** En CadCraft, {{key:Shift}} desactiva las referencias para un clic. Use {{ui:Orto}} para líneas rectas.
- **Esperar que los puntos caigan en puntos de la rejilla.** Active {{ui:Ajuste a la cuadrícula}} ({{key:F9}}), o escriba coordenadas para números redondos.
