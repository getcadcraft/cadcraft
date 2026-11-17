---
title: Ajustar a puntos de objetos
summary: Use referencias a objetos, Orto y la rejilla para designar con el ratón puntos finales, puntos medios, centros e intersecciones exactos.
keywords: osnap, referencia a objetos, punto final, punto medio, centro, intersección, perpendicular, cuadrante, cercano, nodo, inserción, orto, rejilla, f3, f8, f7, rastreo polar, polar, polarang, rastreo de referencias a objetos, otrack, rastreo, f10, f11
from: 3cf17f94
---

## Qué va a crear

Un rectángulo con sus dos diagonales, un círculo centrado donde se cruzan, y una línea desde el punto medio de un lado hasta el círculo. Cada punto se designa con el ratón, y cada punto es exacto.

## Cómo funciona la referencia

Mientras un comando pide un punto, CadCraft busca puntos de referencia a unos 10 píxeles de la cruz del cursor. Cuando encuentra uno, aparecen un marcador y una etiqueta ("Endpoint", "Intersection"), y un clic cae **exactamente** en ese punto, no donde está la cruz.

Las referencias están activas cuando {{ui:Referencia}} en la barra de estado está pulsado. {{key:F3}} las activa y desactiva.

Las referencias que puede usar son:

| Referencia | Cae en |
|---|---|
| Punto final | Los extremos de líneas, arcos y segmentos de polilínea |
| Punto medio | El centro de líneas, arcos y segmentos de polilínea |
| Centro | El centro de círculos y arcos, y de los segmentos de arco de polilínea |
| Cuadrante | Los puntos de 0, 90, 180 y 270 grados de círculos y arcos |
| Intersección | Donde se cruzan dos objetos |
| Perpendicular | El punto de un objeto en ángulo recto con el último punto (necesita un punto base) |
| Tangente | El punto de un círculo o arco donde una línea desde el último punto apenas lo toca. Sin último punto todavía (el primer punto de una línea), el marcador dice "deferred": el punto de contacto se calcula cuando se conoce el siguiente punto, así que una línea de Tangente a Tangente toca ambos círculos |
| Cercano | El punto más cercano de cualquier objeto |
| Nodo | Objetos de punto |
| Inserción | El punto de inserción de textos y referencias a bloques |

Todas están activas por defecto excepto Tangente y Cercano. Cercano suele ganar cuando usted quiere otra cosa; active Tangente cuando la necesite.

## Elija sus referencias

1. Haga clic en la pequeña flecha junto a {{ui:Referencia}} en la barra de estado. Se abre la lista {{ui:Referencias a objetos}}.
2. Marque o desmarque las referencias. Los cambios se aplican de inmediato.
3. Haga clic en la flecha otra vez para cerrar la lista.

CadCraft recuerda su elección, y los ajustes de {{ui:Rejilla}}, {{ui:Orto}} y {{ui:Referencia}}, en este navegador.

## Pasos

1. Escriba `REC` y pulse {{key:Enter}}.
2. Escriba `0,0` y pulse {{key:Enter}}.
3. Escriba `@4000,3000` y pulse {{key:Enter}}. Aparece un rectángulo.
4. Haga clic en {{ui:Extensión}}.
5. Escriba `L` y pulse {{key:Enter}}.
6. Mueva la cruz a la esquina inferior izquierda. El marcador muestra "Endpoint". Haga clic.
7. Mueva a la esquina superior derecha hasta que aparezca "Endpoint". Haga clic.
8. Pulse {{key:Enter}} para terminar la línea.
9. Pulse {{key:Enter}} otra vez para repetir {{cmd:LINE}}, y dibuje la otra diagonal desde la esquina inferior derecha hasta la superior izquierda de la misma manera.
10. Escriba `C` y pulse {{key:Enter}} para empezar un círculo.
11. Mueva la cruz a donde se cruzan las diagonales. El marcador muestra "Intersection". Haga clic.
12. Escriba `800` y pulse {{key:Enter}}.

Debe ver un círculo centrado exactamente en el cruce.

13. Escriba `L` y pulse {{key:Enter}}.
14. Mueva hasta el punto medio del lado izquierdo del rectángulo, hasta que aparezca "Midpoint". Haga clic.
15. Mueva la cruz sobre el círculo, en su lado izquierdo. El marcador muestra "Perpendicular" o "Quadrant"; aquí ambos son el mismo punto. Haga clic.
16. Pulse {{key:Enter}}.

La nueva línea va desde el punto medio del lado izquierdo y se detiene exactamente en el círculo.

## Omitir una referencia por un clic

Mantenga presionado {{key:Shift}} mientras hace clic. Las referencias a objetos se ignoran en ese clic, y el punto va exactamente donde está la cruz (o en la dirección de Orto, si Orto está activo).

## Orto

{{ui:Orto}} ({{key:F8}}) mantiene el siguiente punto en línea recta, horizontal o vertical, desde el punto base. Se aplica a los clics y a la entrada de distancia directa (un número escrito solo en el aviso). Las referencias a objetos tienen prioridad sobre Orto: si aparece un marcador de referencia, el clic va a la referencia.

## Rastreo polar

{{ui:Polar}} ({{key:F10}}) es Orto en más ángulos. Mientras un comando tiene un punto base (el último punto de una línea, el punto base de un desplazamiento), el puntero se alinea cuando se acerca a un rayo desde él en un múltiplo del paso polar: aparece una línea punteada, y una etiqueta junto a la cruz dice `Polar: 1200 < 30°`. Haga clic para usar ese punto, o escriba una distancia: `1200` va exactamente 1200 a lo largo del rayo.

El paso es de 90° hasta que lo cambie: escriba {{cmd:POLARANG}}, pulse {{key:Enter}} y escriba `30` (o 45, 22.5, 15 …). Polar y Orto se excluyen entre sí: activar uno desactiva el otro.

## Rastreo de referencias a objetos

{{ui:Rastreo}} ({{key:F11}}) alinea el puntero con los puntos de referencia en los que se ha detenido, para que pueda elegir un punto al nivel de una esquina y encima de otra sin dibujar líneas auxiliares.

1. Active {{ui:Referencia}} y {{ui:Rastreo}}, e inicie un comando que pida un punto (`L`).
2. Detenga el puntero sobre un punto de referencia, como una esquina, durante medio segundo, sin hacer clic. Aparece una pequeña cruz que lo marca: queda adquirido. Deténgase otra vez sobre él para soltarlo.
3. Mueva el puntero directamente en horizontal o vertical desde él. Una línea punteada sigue al puntero y la etiqueta dice `Track: 600 < 90°`. Haga clic, o escriba una distancia.
4. Adquiera un segundo punto, y muévase hasta donde la vertical de uno se encuentra con la horizontal del otro: el puntero se ajusta a ese cruce (`Track: where two lines meet`).

Con {{ui:Polar}} también activo, los puntos adquiridos rastrean en cada ángulo polar. Se mantienen hasta siete puntos, hasta que termine el comando. {{key:Shift}} desactiva el rastreo por un clic, igual que sucede con las referencias.

## Rejilla

{{ui:Rejilla}} ({{key:F7}}) muestra una cuadrícula de líneas detrás del dibujo, con líneas más gruesas cada cinco líneas; el espaciado cambia al hacer zoom. Es solo una guía hasta que active {{ui:Forzcursor a rejilla}} ({{key:F9}}): entonces los clics caen en el punto de rejilla más cercano, a menos que una referencia a objetos tome el punto primero.

## Teclas de función en su computadora

{{key:F9}} es Forzcursor a rejilla, {{key:F10}} es Polar y {{key:F11}} es Rastreo.

:::mac
En una Mac, F3, F7, F8 y F9 normalmente controlan Mission Control y los controles multimedia. Mantenga presionada **fn** con la tecla, o active las teclas de función estándar, como se describe en [Teclas, ratones y paneles táctiles](common:keys). Los botones de la barra de estado siempre funcionan.
:::

:::firefox
En Firefox, F7 también es la tecla de navegación con cursor (caret browsing). Si Firefox pregunta si activar esa navegación, elija **No**. Use el botón {{ui:Rejilla}} si la pregunta sigue apareciendo.
:::

:::touch
En una pantalla táctil no existe el puntero flotante, así que el marcador de referencia aparece solo donde toca el dedo. Acérquese con el zoom para objetivos pequeños, o escriba coordenadas.
:::

## Errores comunes

- **El clic fue al punto equivocado.** Mire la etiqueta del marcador antes de hacer clic: Punto final gana sobre Punto medio cuando ambos están cerca. Acerque el zoom, o desmarque las referencias que no necesita.
- **No aparece ningún marcador.** {{ui:Referencia}} está desactivado, o la referencia que quiere está desmarcada, o el objeto está en una capa desactivada o inutilizada.
- **Las referencias toman lo equivocado en un dibujo ocupado.** Acerque el zoom. La distancia de referencia se mide en píxeles de pantalla, así que al acercar el zoom se hace más pequeña sobre el dibujo.
- **Esperar que Shift dé una línea recta.** En CadCraft, Shift desactiva las referencias por un clic. Use {{ui:Orto}} para líneas rectas.
- **Esperar que los puntos caigan en puntos de rejilla.** Active {{ui:Forzcursor a rejilla}} ({{key:F9}}), o escriba coordenadas para obtener números redondos.
